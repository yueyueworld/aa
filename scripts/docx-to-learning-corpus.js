#!/usr/bin/env node
/**
 * One-time converter:
 *   input:  t.docx (Word)
 *   output: assets/learning-corpus.json
 *
 * No third-party npm dependency required.
 * It extracts word/document.xml through PowerShell Expand-Archive,
 * then parses lines in format: "English sentence中文句子".
 */

const fs = require("fs");
const os = require("os");
const path = require("path");
const cp = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const INPUT = process.argv[2] || path.join(ROOT, "t.docx");
const OUTPUT = process.argv[3] || path.join(ROOT, "assets", "learning-corpus.json");

const SCENE_ORDER = ["transport", "hotel", "restaurant", "museum"];

function run(command) {
  cp.execSync(command, { stdio: "inherit" });
}

function readDocumentXmlFromDocx(docxPath) {
  if (!fs.existsSync(docxPath)) {
    throw new Error(`DOCX not found: ${docxPath}`);
  }

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "learning-corpus-"));
  const escapedInput = docxPath.replace(/'/g, "''");
  const escapedTemp = tempDir.replace(/'/g, "''");
  const ps = [
    "$ErrorActionPreference = 'Stop'",
    `Expand-Archive -Path '${escapedInput}' -DestinationPath '${escapedTemp}' -Force`
  ].join("; ");

  run(`powershell -NoProfile -Command "${ps}"`);

  const documentXmlPath = path.join(tempDir, "word", "document.xml");
  if (!fs.existsSync(documentXmlPath)) {
    throw new Error("Invalid DOCX: word/document.xml missing");
  }
  return fs.readFileSync(documentXmlPath, "utf8");
}

function decodeXmlEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function xmlToPlainText(documentXml) {
  // Keep paragraph boundaries first
  let text = documentXml.replace(/<w:p\b[\s\S]*?<\/w:p>/g, (p) => `${p}\n`);
  // Convert Word line breaks/tabs
  text = text.replace(/<w:br\/>/g, "\n").replace(/<w:tab\/>/g, "\t");
  // Strip remaining tags
  text = text.replace(/<[^>]+>/g, "");
  text = decodeXmlEntities(text);
  // Normalize spaces
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function splitEnZh(line) {
  // Match first Chinese character boundary.
  const m = line.match(/^(.+?)([\u4e00-\u9fff].+)$/);
  if (!m) return null;
  const en = m[1].trim();
  const zh = m[2].trim();
  if (!en || !zh) return null;
  return { en, zh };
}

function buildCorpus(lines) {
  const parsed = lines.map(splitEnZh).filter(Boolean);
  if (!parsed.length) return [];

  // Heuristic segmentation: transport/hotel/restaurant/museum by known anchors.
  const anchors = [
    "Good evening! Welcome to our hotel.",
    "Good afternoon! Do you have a booking?",
    "Hello! Welcome to the British Museum."
  ];

  const breakIndexes = anchors
    .map((a) => parsed.findIndex((x) => x.en === a))
    .filter((idx) => idx > 0);

  const ranges = [];
  let start = 0;
  for (const idx of breakIndexes) {
    ranges.push([start, idx]);
    start = idx;
  }
  ranges.push([start, parsed.length]);

  const sceneBuckets = {};
  SCENE_ORDER.forEach((scene) => {
    sceneBuckets[scene] = [];
  });

  ranges.forEach(([s, e], i) => {
    const scene = SCENE_ORDER[Math.min(i, SCENE_ORDER.length - 1)];
    sceneBuckets[scene].push(...parsed.slice(s, e));
  });

  const out = [];
  SCENE_ORDER.forEach((scene) => {
    sceneBuckets[scene].forEach((item, idx) => {
      out.push({
        id: `${scene}-${String(idx + 1).padStart(3, "0")}`,
        scene,
        en: item.en,
        zh: item.zh
      });
    });
  });
  return out;
}

function main() {
  const xml = readDocumentXmlFromDocx(INPUT);
  const plain = xmlToPlainText(xml);
  const lines = plain
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  const corpus = buildCorpus(lines);
  if (!corpus.length) {
    throw new Error("No valid 'English中文' lines parsed from DOCX");
  }

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, `${JSON.stringify(corpus, null, 2)}\n`, "utf8");
  // eslint-disable-next-line no-console
  console.log(`Generated ${corpus.length} entries -> ${OUTPUT}`);
}

main();
