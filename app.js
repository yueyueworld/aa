/* global SpeechRecognition, webkitSpeechRecognition */

const MODULES = {
  transport: {
    title: "交通 Transport",
    npcName: "Local helper",
    npcGender: "male",
    steps: [
      { npc: "Hi! Do you need help with the map?", task: "询问去音乐公园坐哪条线。", hint: "Yes / please / music Park / how to get", ref: "Yes, please. How to get to the music Park?" },
      { npc: "Take the Line 17. It's the dark blue one.", task: "确认是否在这个站台乘车。", hint: "right platform", ref: "Is this the right platform?" },
      { npc: "Yes. The next train comes in two minutes.", task: "感谢并询问车费。", hint: "Thanks / ticket / how much", ref: "Thanks! How much is the ticket?" },
      { npc: "Two pounds. We are here! This is music Park Corner station.", task: "询问从哪个出口出去。", hint: "Great / which exit", ref: "Great! Which exit should I take?" },
      { npc: "Exit A. The park is just in front of you.", task: "询问附近有没有卖水的地方。", hint: "shop / water / near here", ref: "Is there a shop near here? I want some water." },
      { npc: "Yes, there's a café outside. Have a nice day!", task: "再次感谢。", hint: "Thank you very much", ref: "Thank you very much!" },
      { npc: "You're back! Did you like music Park?", task: "表示很喜欢，现在想回酒店。", hint: "very nice / go back / hotel", ref: "Yes, it's very nice. Now I want to go back to my hotel." },
      { npc: "Where is your hotel? I can help you.", task: "说酒店在大笨钟附近。", hint: "near / Big Ben", ref: "It's near the Big Ben." },
      { npc: "Good! Take the Line 8. Have a safe trip!", task: "告别并感谢。", hint: "Thanks / help", ref: "Thanks for your help!" }
    ]
  },
  hotel: {
    title: "住宿 · 伦敦复古酒店",
    npcName: "Tony (Manager)",
    npcGender: "male",
    steps: [
      { npc: "Good evening! Welcome to our hotel.", task: "告知有预订，名字是李明。", hint: "booking / Li Ming", ref: "Good evening! I have a booking. My name is Li Ming." },
      { npc: "Let me see... Yes, two nights. Is that right?", task: "确认并询问早餐时间。", hint: "Yes / breakfast / what time", ref: "Yes, that's right. What time is breakfast?" },
      { npc: "Breakfast is 7 to 10 am. Here is your key.", task: "感谢。", hint: "Thank you", ref: "Thank you!" },
      { npc: "Good morning! Did you sleep well?", task: "睡得很好，想现在吃早餐。", hint: "slept well / breakfast now", ref: "Yes, I slept well. I want to have breakfast now." },
      { npc: "OK. Full English breakfast or something simple?", task: "选择全英式早餐，要一杯咖啡。", hint: "Full English / coffee", ref: "Full English breakfast, please. And a cup of coffee." },
      { npc: "Coming soon! You can sit anywhere.", task: "感谢并找座位。", hint: "Thanks / sit / over there", ref: "Thanks! I'll sit over there." },
      { npc: "Are you leaving today? Did you enjoy your stay?", task: "表示体验很棒，现在要结账。", hint: "great / pay now", ref: "Yes, it was great. I want to pay now." },
      { npc: "Here is your bill. Card or cash?", task: "用信用卡支付。", hint: "By card", ref: "By card, please." },
      { npc: "All done! Come back again soon!", task: "告别并表达感谢。", hint: "Thank you / everything / Goodbye", ref: "Thank you for everything! Goodbye!" }
    ]
  },
  restaurant: {
    title: "餐厅 · 英式下午茶馆",
    npcName: "Mary",
    npcGender: "female",
    steps: [
      { npc: "Good afternoon! Do you have a booking?", task: "没有预订，询问是否有座位。", hint: "No / table for one", ref: "No, I don't. Is there a table for one?" },
      { npc: "Yes, this way please. Would you like to see the menu?", task: "想点经典英式下午茶。", hint: "classic afternoon tea", ref: "I want the classic afternoon tea, please." },
      { npc: "Good choice! Tea or coffee with it?", task: "选择红茶，加牛奶。", hint: "Tea / milk", ref: "Tea with milk, please." },
      { npc: "Here is your tea and food. Enjoy!", task: "感谢并询问先吃什么。", hint: "Thank you / eat first", ref: "Thank you! What should I eat first?" },
      { npc: "First sandwiches, then scones, then sweets.", task: "询问司康饼怎么吃。", hint: "How / eat / scone", ref: "How do I eat the scone?" },
      { npc: "Cut it open, add cream first, then jam. That's British style!", task: "觉得很有趣，想试试。", hint: "fun / try", ref: "That's fun! I'll try it." },
      { npc: "Did you enjoy your afternoon tea?", task: "非常喜欢，想再要一杯茶。", hint: "loved / another cup of tea", ref: "Yes, I loved it! Can I have another cup of tea?" },
      { npc: "Sure! More hot water and milk too?", task: "是的，谢谢。", hint: "Yes please / Thank you", ref: "Yes, please. Thank you." },
      { npc: "Here is your bill. Have a nice day!", task: "结账并告别。", hint: "money / Goodbye", ref: "Here is the money. Goodbye!" }
    ]
  },
  museum: {
    title: "景区 · 大英博物馆",
    npcName: "Jam",
    npcGender: "male",
    steps: [
      { npc: "Hello! Welcome to the British Museum. First time here?", task: "是的，想先看最有名的展品。", hint: "Yes / most famous", ref: "Yes. I want to see the most famous things first." },
      { npc: "Then you must see the Rosetta Stone! It's in the Egyptian room.", task: "询问埃及展厅在哪里。", hint: "Where / Egyptian room", ref: "Where is the Egyptian room?" },
      { npc: "Go straight, turn left. You'll see the sign. It's free!", task: "感谢并出发。", hint: "Thank you / go there now", ref: "Thank you! I'll go there now." },
      { npc: "Did you find the Rosetta Stone? It's amazing, right?", task: "很震撼，询问它为什么重要。", hint: "amazing / why / important", ref: "Yes, it's amazing! Why is it so important?" },
      { npc: "Because it helped us read ancient Egyptian writing!", task: "太神奇了，还有其他推荐吗。", hint: "Wow / what else / see", ref: "Wow! What else should I see?" },
      { npc: "You can also see the Parthenon Marbles. They're in the Greek room.", task: "好的，马上去看。", hint: "Great / go there next", ref: "Great! I'll go there next." },
      { npc: "How was your visit? Did you see everything you wanted?", task: "非常棒，买了纪念品。", hint: "great / bought / gifts", ref: "It was great! I bought some gifts too." },
      { npc: "Nice! The gift shop has many good things. Will you come back?", task: "希望下次能再来，慢慢看。", hint: "hope / come back again", ref: "Yes, I hope to come back again." },
      { npc: "We'll be here! Have fun in London!", task: "表达开心并感谢讲解。", hint: "delighted / Thanks / help", ref: "I am delighted. Thanks for your help " }
    ]
  }
};

const LEARNING_STORAGE_KEY = "newton-learning-state-v1";
const LEARNING_CORPUS_URL = "./assets/learning-corpus.json";
const LEARNING_VIEW_IDS = [
  "view-learning-hub",
  "view-learning-practice",
  "view-learning-flip",
  "view-learning-collection",
  "view-learning-favorites"
];
const CARD_POOL = [
  { id: "card_01", src: "./assets/card-01.png", title: "伦敦夜景" },
  { id: "card_02", src: "./assets/card-02.png", title: "大本钟黄昏" },
  { id: "card_03", src: "./assets/card-03.png", title: "地铁站台" },
  { id: "card_04", src: "./assets/card-04.png", title: "英式甜点" },
  { id: "card_05", src: "./assets/card-05.png", title: "伦敦街景酒店" },
  { id: "card_06", src: "./assets/card-06.png", title: "夕阳街道" },
  { id: "card_07", src: "./assets/card-07.png", title: "酒店房间" },
  { id: "card_08", src: "./assets/card-08.png", title: "圣保罗附近" },
  { id: "card_09", src: "./assets/card-09.png", title: "英式餐食" },
  { id: "card_10", src: "./assets/card-10.png", title: "牛排餐盘" },
  { id: "card_11", src: "./assets/card-11.png", title: "宫廷楼梯" },
  { id: "card_12", src: "./assets/card-12.png", title: "河道花园" }
];

const viewHome = document.getElementById("view-home");
const viewLearn = document.getElementById("view-learn");
const viewPortal = document.getElementById("view-portal");
const viewLearningHub = document.getElementById("view-learning-hub");
const viewLearningPractice = document.getElementById("view-learning-practice");
const viewLearningFlip = document.getElementById("view-learning-flip");
const viewLearningCollection = document.getElementById("view-learning-collection");
const viewLearningFavorites = document.getElementById("view-learning-favorites");
const btnEnterLearning = document.getElementById("btn-enter-learning");
const btnEnterPractice = document.getElementById("btn-enter-practice");
const btnPracticeBackHome = document.getElementById("btn-practice-back-home");
const btnLearningBackHome = document.getElementById("btn-learning-back-home");
const btnGoPractice = document.getElementById("btn-go-practice");
const btnGoFlip = document.getElementById("btn-go-flip");
const btnGoCollection = document.getElementById("btn-go-collection");
const btnGoFavorites = document.getElementById("btn-go-favorites");
const learningPointsText = document.getElementById("learning-points-text");
const learningProgressText = document.getElementById("learning-progress-text");
const learningStatsText = document.getElementById("learning-stats-text");
const learnPracticeSentence = document.getElementById("learn-practice-sentence");
const learnPracticeZh = document.getElementById("learn-practice-zh");
const learnPracticeFeedback = document.getElementById("learn-practice-feedback");
const learnPracticeInput = document.getElementById("learn-practice-input");
const learnPracticeSpeech = document.getElementById("learn-practice-speech");
const learnPracticeSubmit = document.getElementById("learn-practice-submit");
const learnPracticeSkip = document.getElementById("learn-practice-skip");
const learnPracticeFavorite = document.getElementById("learn-practice-favorite");
const btnPracticeHubBack = document.getElementById("btn-practice-hub-back");
const btnLearningReplay = document.getElementById("btn-learning-replay");
const btnLearningReplaySlow = document.getElementById("btn-learning-replay-slow");
const flipPointsText = document.getElementById("flip-points-text");
const flipGrid = document.getElementById("flip-grid");
const flipFeedback = document.getElementById("flip-feedback");
const flipConfirmActions = document.getElementById("flip-confirm-actions");
const btnFlipAdd = document.getElementById("btn-flip-add");
const btnFlipSkipAdd = document.getElementById("btn-flip-skip-add");
const btnFlipBackHub = document.getElementById("btn-flip-back-hub");
const collectionList = document.getElementById("collection-list");
const btnCollectionBackHub = document.getElementById("btn-collection-back-hub");
const favoritesList = document.getElementById("favorites-list");
const btnFavoritesBackHub = document.getElementById("btn-favorites-back-hub");
const learnTitle = document.getElementById("learn-module-title");
const progressText = document.getElementById("progress-text");
const npcNameEl = document.getElementById("npc-name");
const npcWrap = document.getElementById("npc-svg-wrap");
const dialogueBubble = document.getElementById("dialogue-bubble");
const userTaskEl = document.getElementById("user-task");
const hintTextEl = document.getElementById("hint-text");
const feedbackEl = document.getElementById("feedback");
const postSubmitActions = document.getElementById("post-submit-actions");
const btnShowRef = document.getElementById("btn-show-ref");
const refAnswerText = document.getElementById("ref-answer-text");
const btnContinue = document.getElementById("btn-continue");
const userInputEl = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const speechBtn = document.getElementById("speech-btn");
const skipBtn = document.getElementById("skip-btn");
const btnBack = document.getElementById("btn-back");
const learnPet = document.getElementById("learn-pet");
const treeApplesEl = document.getElementById("tree-apples");
const groundApplesEl = document.getElementById("ground-apples");
const cutscene = document.getElementById("cutscene");
const cutsceneTreeWrap = document.getElementById("cutscene-tree-wrap");
const cutsceneTree = document.getElementById("cutscene-tree");
const cutsceneApples = document.getElementById("cutscene-apples");
const draggablePlayer = document.getElementById("draggable-player");
const cutsceneHint = document.getElementById("cutscene-hint");
const confettiLayer = document.getElementById("confetti-layer");
const endingText = document.getElementById("ending-text");
const btnReplayAudio = document.getElementById("btn-replay-audio");

let currentModuleId = null;
let stepIndex = 0;
let moduleCorrectCount = 0;
let treeScale = 1;
let applesOnTreeCount = 0;
let bubbleTyping = false;
let recognition = null;
let listening = false;
let completed = JSON.parse(localStorage.getItem("newton-modules-done") || "{}");
let cutsceneCollisionDone = false;
let dragState = null;
let celebrationAudioCtx = null;
let learnRecognition = null;
let learnListening = false;
let practiceItems = [];
let learningIndex = 0;
let favoritePracticeMode = false;
let favoritePracticeId = null;
let learningState = loadLearningState();
let pendingFlipTimer = null;
let flipLocked = false;

function normalize(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9\s']/g, " ").replace(/\s+/g, " ").trim();
}

function tokenSet(text) {
  const stop = new Set(["the", "a", "an", "is", "are", "am", "to", "of", "and", "i", "you", "it", "that", "this", "for", "with", "my", "me"]);
  return normalize(text).split(" ").filter((w) => w && !stop.has(w));
}

function diceCoefficient(a, b) {
  const x = normalize(a);
  const y = normalize(b);
  if (!x || !y) return 0;
  const map = new Map();
  for (let i = 0; i < x.length - 1; i += 1) {
    const g = x.slice(i, i + 2);
    map.set(g, (map.get(g) || 0) + 1);
  }
  let inter = 0;
  for (let i = 0; i < y.length - 1; i += 1) {
    const g = y.slice(i, i + 2);
    const c = map.get(g) || 0;
    if (c > 0) {
      inter += 1;
      map.set(g, c - 1);
    }
  }
  return (2 * inter) / Math.max(1, x.length - 1 + y.length - 1);
}

function grammarHeuristic(input) {
  const trimmed = String(input).trim();
  if (!trimmed) return 0;
  let score = 0;
  if (/^[A-Z]/.test(trimmed)) score += 0.28;
  if (/[.!?]$/.test(trimmed)) score += 0.18;
  if (/\b(is|are|am|have|has|do|does|would|could|can|will|want|like|thank|please|there)\b/i.test(trimmed)) score += 0.52;
  return Math.min(score, 1);
}

function evaluateAnswer(input, ref) {
  const inputTokens = tokenSet(input);
  const refTokens = tokenSet(ref);
  const refSet = new Set(refTokens);
  let hits = 0;
  inputTokens.forEach((t) => { if (refSet.has(t)) hits += 1; });
  const keywordScore = refTokens.length ? hits / refTokens.length : 0;
  const simScore = diceCoefficient(input, ref);
  const grammarScore = grammarHeuristic(input);
  const total = keywordScore * 0.45 + simScore * 0.35 + grammarScore * 0.2;
  return { total, keywordScore, simScore, grammarScore };
}

function defaultLearningState() {
  return {
    learnCorrectCount: 0,
    learnPoints: 0,
    learnFlipChances: 0,
    collectedCards: {},
    favoriteItems: [],
    practiceStats: {},
    pendingFlip: {
      cardId: null,
      startedAt: 0,
      revealUntil: 0
    },
    learningSession: {
      learningIndex: 0,
      favoritePracticeMode: false,
      favoritePracticeId: null
    }
  };
}

function loadLearningState() {
  try {
    const raw = localStorage.getItem(LEARNING_STORAGE_KEY);
    if (!raw) return defaultLearningState();
    const parsed = JSON.parse(raw);
    return {
      ...defaultLearningState(),
      ...parsed,
      collectedCards: parsed.collectedCards || {},
      favoriteItems: Array.isArray(parsed.favoriteItems) ? parsed.favoriteItems : [],
      practiceStats: parsed.practiceStats || {},
      pendingFlip: {
        ...defaultLearningState().pendingFlip,
        ...(parsed.pendingFlip || {})
      },
      learningSession: {
        ...defaultLearningState().learningSession,
        ...(parsed.learningSession || {})
      }
    };
  } catch (_) {
    return defaultLearningState();
  }
}

function persistLearningState() {
  learningState.learnFlipChances = learningState.learnPoints;
  learningState.learningSession = {
    learningIndex,
    favoritePracticeMode,
    favoritePracticeId
  };
  localStorage.setItem(LEARNING_STORAGE_KEY, JSON.stringify(learningState));
}

function restoreLearningSession() {
  const session = learningState.learningSession || {};
  learningIndex = Number.isInteger(session.learningIndex) && session.learningIndex >= 0 ? session.learningIndex : 0;
  favoritePracticeMode = Boolean(session.favoritePracticeMode);
  favoritePracticeId = typeof session.favoritePracticeId === "string" ? session.favoritePracticeId : null;
}

function buildPracticeItems() {
  const out = [];
  Object.entries(MODULES).forEach(([moduleId, mod]) => {
    mod.steps.forEach((step, idx) => {
      out.push({
        id: `${moduleId}_${idx}`,
        moduleId,
        npcEn: step.npc,
        zhHint: step.task,
        hint: step.hint,
        refAnswer: step.ref
      });
    });
  });
  return out;
}

async function loadLearningCorpus() {
  const res = await fetch(LEARNING_CORPUS_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("learning corpus load failed");
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("learning corpus is not array");
  return data
    .map((item) => ({
      id: String(item.id || "").trim(),
      moduleId: String(item.scene || "").trim(),
      npcEn: String(item.en || "").trim(),
      zhHint: String(item.zh || "").trim(),
      refAnswer: String(item.en || "").trim()
    }))
    .filter((it) => it.id && it.moduleId && it.npcEn && it.zhHint);
}

function updateLearningPointsText() {
  learningPointsText.textContent = `积分：${learningState.learnPoints}`;
  flipPointsText.textContent = `当前积分：${learningState.learnPoints}`;
  learningStatsText.textContent = `答对题数：${learningState.learnCorrectCount} ｜ 累计积分：${learningState.learnPoints}`;
}

function playThud() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  const ctx = new AC();
  const t0 = ctx.currentTime;
  const nSamples = Math.floor(ctx.sampleRate * 0.09);
  const buf = ctx.createBuffer(1, nSamples, ctx.sampleRate);
  const ch = buf.getChannelData(0);
  for (let i = 0; i < nSamples; i += 1) {
    ch[i] = (Math.random() * 2 - 1) * (1 - i / nSamples) * 0.9;
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const ng = ctx.createGain();
  ng.gain.setValueAtTime(0.45, t0);
  ng.gain.exponentialRampToValueAtTime(0.01, t0 + 0.1);
  src.connect(ng);
  ng.connect(ctx.destination);
  const osc = ctx.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(220, t0);
  osc.frequency.exponentialRampToValueAtTime(55, t0 + 0.18);
  const og = ctx.createGain();
  og.gain.setValueAtTime(0.32, t0);
  og.gain.exponentialRampToValueAtTime(0.01, t0 + 0.22);
  osc.connect(og);
  og.connect(ctx.destination);
  src.start(t0);
  osc.start(t0);
  src.stop(t0 + 0.1);
  osc.stop(t0 + 0.25);
  window.setTimeout(() => { try { ctx.close(); } catch (_) { /* ignore */ } }, 400);
}

function stopCelebrationAudio() {
  if (celebrationAudioCtx) {
    try { celebrationAudioCtx.close(); } catch (_) { /* ignore */ }
    celebrationAudioCtx = null;
  }
}

function playCelebrationAndApplause(durationSec) {
  stopCelebrationAudio();
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  const ctx = new AC();
  celebrationAudioCtx = ctx;
  const t0 = ctx.currentTime;
  const end = t0 + durationSec;
  const notes = [523.25, 659.25, 783.99, 987.77, 783.99, 659.25, 587.33, 523.25];
  let i = 0;
  for (let t = t0; t < end - 0.08; t += 0.13) {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "triangle";
    o.frequency.setValueAtTime(notes[i % notes.length], t);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.09, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.11);
    o.connect(g);
    g.connect(ctx.destination);
    o.start(t);
    o.stop(t + 0.14);
    i += 1;
  }
  const applauseLen = Math.floor(ctx.sampleRate * durationSec);
  const abuf = ctx.createBuffer(1, applauseLen, ctx.sampleRate);
  const ad = abuf.getChannelData(0);
  for (let k = 0; k < applauseLen; k += 1) {
    const env = 0.55 + 0.45 * Math.sin(k * 0.0008);
    ad[k] = (Math.random() * 2 - 1) * env * 0.35;
  }
  const applause = ctx.createBufferSource();
  applause.buffer = abuf;
  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = 700;
  bp.Q.value = 0.45;
  const ag = ctx.createGain();
  ag.gain.setValueAtTime(0, t0);
  ag.gain.linearRampToValueAtTime(0.07, t0 + 0.06);
  ag.gain.setValueAtTime(0.07, end - 0.25);
  ag.gain.linearRampToValueAtTime(0, end);
  applause.connect(bp);
  bp.connect(ag);
  ag.connect(ctx.destination);
  applause.start(t0);
  applause.stop(end);
  window.setTimeout(() => {
    if (celebrationAudioCtx === ctx) {
      try { ctx.close(); } catch (_) { /* ignore */ }
      celebrationAudioCtx = null;
    }
  }, (durationSec + 0.2) * 1000);
}

function clearConfettiLayer() {
  if (confettiLayer) confettiLayer.innerHTML = "";
}

function spawnConfetti(visibleMs) {
  if (!confettiLayer) return;
  clearConfettiLayer();
  const colors = ["#f472b6", "#fbbf24", "#60a5fa", "#34d399", "#a78bfa", "#fb923c", "#f87171", "#fde047"];
  const count = 96;
  for (let c = 0; c < count; c += 1) {
    const p = document.createElement("div");
    p.className = "confetti-piece";
    p.style.left = `${Math.random() * 100}vw`;
    p.style.background = colors[c % colors.length];
    const dur = 2.4 + Math.random() * 2.2;
    p.style.animationDuration = `${dur}s`;
    p.style.animationDelay = `${Math.random() * 0.4}s`;
    p.style.width = `${6 + Math.random() * 8}px`;
    p.style.height = `${8 + Math.random() * 10}px`;
    confettiLayer.appendChild(p);
  }
  window.setTimeout(() => clearConfettiLayer(), visibleMs + 500);
}

function playTone(kind) {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  const ctx = new AC();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  const t0 = ctx.currentTime;
  if (kind === "happy") {
    osc.type = "sine";
    [523.25, 659.25, 783.99].forEach((f, j) => {
      osc.frequency.setValueAtTime(f, t0 + j * 0.08);
    });
    gain.gain.setValueAtTime(0.1, t0);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.45);
  } else {
    osc.type = "triangle";
    osc.frequency.setValueAtTime(185, t0);
    osc.frequency.linearRampToValueAtTime(130, t0 + 0.35);
    gain.gain.setValueAtTime(0.09, t0);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.42);
  }
  osc.start(t0);
  osc.stop(t0 + 0.5);
}

function playFlipSound() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  const ctx = new AC();
  const t0 = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "square";
  osc.frequency.setValueAtTime(420, t0);
  osc.frequency.exponentialRampToValueAtTime(300, t0 + 0.12);
  gain.gain.setValueAtTime(0.09, t0);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.14);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + 0.16);
  window.setTimeout(() => { try { ctx.close(); } catch (_) { /* ignore */ } }, 260);
}

function loadVoices() {
  if (window.speechSynthesis) window.speechSynthesis.getVoices();
}
if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
}

function speakNPC(text) {
  speakNPCWithRate(text, 0.92);
}

function speakNPCWithRate(text, rate) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-GB";
  u.rate = rate;
  u.pitch = 1.05;
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find((v) => /en-GB/i.test(v.lang))
    || voices.find((v) => /^en-/i.test(v.lang));
  if (preferred) u.voice = preferred;
  window.speechSynthesis.speak(u);
}

function currentModule() {
  return MODULES[currentModuleId];
}

function currentStep() {
  return currentModule().steps[stepIndex];
}

function setTreeScale() {
  learnPet.style.setProperty("--tree-scale", String(treeScale));
  learnPet.style.transform = `scale(${treeScale})`;
}

function resetLearnTree() {
  treeScale = 1;
  applesOnTreeCount = 0;
  treeApplesEl.innerHTML = "";
  groundApplesEl.innerHTML = "";
  learnPet.classList.add("seedling");
  learnPet.classList.remove("sad-droopy", "happy-shake", "glow");
  setTreeScale();
}

function flashTree(ok) {
  learnPet.classList.remove("glow", "happy-shake", "sad-droopy");
  void learnPet.offsetWidth;
  learnPet.classList.add("glow");
  if (ok) {
    learnPet.classList.add("happy-shake");
    playTone("happy");
    treeScale = Math.min(treeScale + 0.06, 1.45);
    learnPet.classList.remove("seedling");
    setTreeScale();
  } else {
    learnPet.classList.add("sad-droopy");
    playTone("sad");
  }
  window.setTimeout(() => {
    learnPet.classList.remove("glow", "happy-shake", "sad-droopy");
  }, 1200);
}

function spawnAppleOnTree() {
  const apple = document.createElement("button");
  apple.type = "button";
  apple.className = "apple";
  apple.setAttribute("aria-label", "苹果");
  const col = applesOnTreeCount % 3;
  const row = Math.floor(applesOnTreeCount / 3);
  apple.style.left = `${18 + col * 22}%`;
  apple.style.top = `${10 + row * 16}%`;
  apple.addEventListener("click", (e) => {
    e.stopPropagation();
    dropAppleToGround(apple);
  });
  treeApplesEl.appendChild(apple);
  applesOnTreeCount += 1;
}

function dropAppleToGround(appleEl) {
  const rect = appleEl.getBoundingClientRect();
  const clone = document.createElement("button");
  clone.type = "button";
  clone.className = "ground-apple";
  clone.setAttribute("aria-label", "地上的苹果");
  clone.style.left = `${Math.max(8, Math.min(window.innerWidth - 36, rect.left + rect.width / 2 - 11))}px`;
  clone.style.bottom = `${8 + Math.random() * 28}px`;
  clone.addEventListener("click", () => {
    clone.style.transform = "scale(1.15) rotate(6deg)";
    window.setTimeout(() => { clone.style.transform = ""; }, 220);
    playTone("happy");
  });
  appleEl.style.transition = "transform 0.75s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.75s";
  appleEl.style.transform = `translate(${12 + Math.random() * 16}px, ${window.innerHeight - rect.top}px) rotate(120deg)`;
  appleEl.style.opacity = "0.6";
  window.setTimeout(() => {
    if (appleEl.parentNode) appleEl.remove();
    applesOnTreeCount = Math.max(0, applesOnTreeCount - 1);
    groundApplesEl.appendChild(clone);
  }, 720);
}

function resetPostSubmitUI() {
  postSubmitActions.classList.add("hidden");
  refAnswerText.classList.add("hidden");
  refAnswerText.textContent = "";
  btnShowRef.textContent = "查看参考答案";
  btnContinue.classList.add("hidden");
}

function renderStep() {
  const mod = currentModule();
  const step = currentStep();
  learnTitle.textContent = mod.title;
  npcNameEl.textContent = mod.npcName;
  npcWrap.classList.toggle("male", mod.npcGender === "male");
  npcWrap.classList.toggle("female", mod.npcGender === "female");
  progressText.textContent = `第 ${stepIndex + 1} / 9 题`;
  dialogueBubble.textContent = "";
  dialogueBubble.classList.remove("has-text");
  userTaskEl.textContent = `任务：${step.task}`;
  hintTextEl.textContent = `提示：${step.hint}`;
  feedbackEl.textContent = "正在播放 NPC 英文语音，听完后可点击气泡查看台词。";
  feedbackEl.classList.remove("fail");
  userInputEl.value = "";
  resetPostSubmitUI();
  window.speechSynthesis.cancel();
  window.setTimeout(() => speakNPC(step.npc), 120);
}

function typewriterOnly(full) {
  if (bubbleTyping) return;
  bubbleTyping = true;
  dialogueBubble.textContent = "";
  dialogueBubble.classList.add("has-text");
  let i = 0;
  const tick = () => {
    dialogueBubble.textContent += full.charAt(i);
    i += 1;
    if (i < full.length) {
      window.requestAnimationFrame(() => window.setTimeout(tick, 18));
    } else {
      bubbleTyping = false;
    }
  };
  tick();
}

function persistDone() {
  completed[currentModuleId] = true;
  localStorage.setItem("newton-modules-done", JSON.stringify(completed));
  document.querySelectorAll(".module-card").forEach((btn) => {
    const id = btn.getAttribute("data-module");
    if (completed[id]) btn.classList.add("done");
  });
}

function hideLearningViews() {
  LEARNING_VIEW_IDS.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });
}

function openHome() {
  hideLearningViews();
  viewHome.classList.add("hidden");
  viewLearn.classList.add("hidden");
  viewLearn.classList.remove("learn-behind");
  viewPortal.classList.remove("hidden");
  cutscene.classList.add("hidden");
  currentModuleId = null;
  teardownCutsceneDrag();
  stopCelebrationAudio();
  clearConfettiLayer();
  endingText.classList.add("hidden");
  resetCutsceneLayout();
}

function openPracticeHome() {
  hideLearningViews();
  viewPortal.classList.add("hidden");
  viewLearn.classList.add("hidden");
  viewLearn.classList.remove("learn-behind");
  viewHome.classList.remove("hidden");
}

function openLearningView(id) {
  viewPortal.classList.add("hidden");
  viewHome.classList.add("hidden");
  viewLearn.classList.add("hidden");
  viewLearn.classList.remove("learn-behind");
  hideLearningViews();
  const target = document.getElementById(id);
  if (target) target.classList.remove("hidden");
}

function resetCutsceneLayout() {
  cutsceneTreeWrap.style.cssText = "";
  cutsceneTree.style.cssText = "";
}

function openModule(id) {
  viewPortal.classList.add("hidden");
  viewHome.classList.add("hidden");
  hideLearningViews();
  currentModuleId = id;
  stepIndex = 0;
  moduleCorrectCount = 0;
  resetLearnTree();
  viewHome.classList.add("hidden");
  viewLearn.classList.remove("hidden");
  renderStep();
}

function completeStep() {
  moduleCorrectCount += 1;
  if (moduleCorrectCount % 3 === 0) {
    spawnAppleOnTree();
  }
  stepIndex += 1;
  if (stepIndex >= 9) {
    window.setTimeout(() => startModuleCutscene(), 450);
    return;
  }
  renderStep();
}

function skipStep() {
  feedbackEl.textContent = "本回合已跳过，小树不会生长也不会结果。";
  feedbackEl.classList.remove("fail");
  stepIndex += 1;
  if (stepIndex >= 9) {
    window.setTimeout(() => startModuleCutscene(), 450);
    return;
  }
  renderStep();
}

function showAfterSubmitOptions(passed) {
  postSubmitActions.classList.remove("hidden");
  refAnswerText.classList.add("hidden");
  refAnswerText.textContent = "";
  btnShowRef.textContent = "查看参考答案";
  if (passed) {
    btnContinue.classList.remove("hidden");
  } else {
    btnContinue.classList.add("hidden");
  }
}

function onSubmit() {
  const answer = userInputEl.value.trim();
  if (!answer) {
    feedbackEl.textContent = "请先输入或录入英文。";
    feedbackEl.classList.add("fail");
    return;
  }
  const { total } = evaluateAnswer(answer, currentStep().ref);
  if (total >= 0.6) {
    feedbackEl.textContent = `通过！综合匹配约 ${(total * 100).toFixed(0)}%（≥60%）。`;
    feedbackEl.classList.remove("fail");
    flashTree(true);
    showAfterSubmitOptions(true);
  } else {
    feedbackEl.textContent = `未达 60%（当前约 ${(total * 100).toFixed(0)}%），再试试关键词与完整句式。`;
    feedbackEl.classList.add("fail");
    flashTree(false);
    showAfterSubmitOptions(false);
  }
}

function initSpeech() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    speechBtn.disabled = true;
    speechBtn.textContent = "浏览器不支持语音";
    return;
  }
  recognition = new SR();
  recognition.lang = "en-GB";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = (e) => {
    userInputEl.value = e.results[0][0].transcript;
    feedbackEl.textContent = `识别结果：${userInputEl.value}`;
    feedbackEl.classList.remove("fail");
  };
  recognition.onend = () => {
    listening = false;
    speechBtn.textContent = "语音录入";
  };
}

function initLearningSpeech() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    learnPracticeSpeech.disabled = true;
    learnPracticeSpeech.textContent = "浏览器不支持语音";
    return;
  }
  learnRecognition = new SR();
  learnRecognition.lang = "en-GB";
  learnRecognition.interimResults = false;
  learnRecognition.maxAlternatives = 1;
  learnRecognition.onresult = (e) => {
    learnPracticeInput.value = e.results[0][0].transcript;
    learnPracticeFeedback.textContent = `识别结果：${learnPracticeInput.value}`;
    learnPracticeFeedback.classList.remove("fail");
  };
  learnRecognition.onend = () => {
    learnListening = false;
    learnPracticeSpeech.textContent = "语音录入";
  };
}

function syncCutsceneApplesFromLearn() {
  cutsceneApples.innerHTML = "";
  const clones = treeApplesEl.querySelectorAll(".apple");
  clones.forEach((a, idx) => {
    const d = document.createElement("div");
    d.className = "apple";
    d.style.left = a.style.left || `${18 + (idx % 3) * 22}%`;
    d.style.top = a.style.top || `${10 + Math.floor(idx / 3) * 16}%`;
    cutsceneApples.appendChild(d);
  });
  const need = 3 - clones.length;
  for (let i = 0; i < need; i += 1) {
    const d = document.createElement("div");
    d.className = "apple";
    d.style.left = `${18 + ((clones.length + i) % 3) * 22}%`;
    d.style.top = `${10 + Math.floor((clones.length + i) / 3) * 16}%`;
    cutsceneApples.appendChild(d);
  }
}

function rectsOverlap(a, b) {
  return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
}

function getPlayerHeadPoint() {
  const fig = draggablePlayer.getBoundingClientRect();
  return {
    x: fig.left + fig.width * 0.5,
    y: fig.top + fig.height * 0.2
  };
}

function flyApplesToPlayerHead() {
  const sources = [...cutsceneApples.querySelectorAll(".apple")];
  const stagger = 400;

  sources.forEach((el, idx) => {
    window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      const t = getPlayerHeadPoint();
      const flyer = document.createElement("div");
      flyer.className = "fly-apple";
      flyer.style.left = `${r.left}px`;
      flyer.style.top = `${r.top}px`;
      document.body.appendChild(flyer);
      window.requestAnimationFrame(() => {
        const dx = t.x - r.left - r.width / 2;
        const dy = t.y - r.top - r.height / 2;
        flyer.style.transform = `translate(${dx}px, ${dy}px) rotate(210deg) scale(0.95)`;
      });
      window.setTimeout(() => {
        playThud();
        flyer.remove();
      }, 700);
      el.style.opacity = "0";
    }, idx * stagger);
  });

  const doneAt = sources.length * stagger + 950;
  window.setTimeout(() => {
    endingText.classList.remove("hidden");
    spawnConfetti(5200);
    playCelebrationAndApplause(3);
    window.setTimeout(() => {
      persistDone();
      teardownCutsceneDrag();
      stopCelebrationAudio();
      clearConfettiLayer();
      openHome();
    }, 5500);
  }, doneAt);
}

function onCollisionTrigger() {
  if (cutsceneCollisionDone) return;
  cutsceneCollisionDone = true;
  cutsceneHint.classList.add("hidden");
  draggablePlayer.classList.remove("dragging");
  flyApplesToPlayerHead();
}

function setupCutsceneDrag() {
  const parent = cutscene;
  const pr0 = parent.getBoundingClientRect();
  const startRight = 24;
  const startTop = pr0.height * 0.38;
  draggablePlayer.style.left = `${pr0.width - startRight - draggablePlayer.offsetWidth}px`;
  draggablePlayer.style.top = `${startTop}px`;

  dragState = { pointerId: null, offsetX: 0, offsetY: 0 };

  const onDown = (e) => {
    if (cutsceneCollisionDone) return;
    if (e.button !== undefined && e.button !== 0) return;
    dragState.pointerId = e.pointerId;
    const r = draggablePlayer.getBoundingClientRect();
    dragState.offsetX = e.clientX - r.left;
    dragState.offsetY = e.clientY - r.top;
    draggablePlayer.classList.add("dragging");
    draggablePlayer.setPointerCapture(e.pointerId);
  };

  const onMove = (e) => {
    if (cutsceneCollisionDone || dragState.pointerId !== e.pointerId) return;
    const pr = parent.getBoundingClientRect();
    let x = e.clientX - pr.left - dragState.offsetX;
    let y = e.clientY - pr.top - dragState.offsetY;
    const w = draggablePlayer.offsetWidth;
    const h = draggablePlayer.offsetHeight;
    x = Math.max(0, Math.min(pr.width - w, x));
    y = Math.max(0, Math.min(pr.height - h, y));
    draggablePlayer.style.left = `${x}px`;
    draggablePlayer.style.top = `${y}px`;

    const prFig = draggablePlayer.getBoundingClientRect();
    const prTree = cutsceneTree.getBoundingClientRect();
    if (rectsOverlap(prFig, prTree)) {
      onCollisionTrigger();
    }
  };

  const onUp = (e) => {
    if (dragState.pointerId !== e.pointerId) return;
    draggablePlayer.classList.remove("dragging");
    try { draggablePlayer.releasePointerCapture(e.pointerId); } catch (_) { /* ignore */ }
    dragState.pointerId = null;
  };

  draggablePlayer.addEventListener("pointerdown", onDown);
  draggablePlayer.addEventListener("pointermove", onMove);
  draggablePlayer.addEventListener("pointerup", onUp);
  draggablePlayer.addEventListener("pointercancel", onUp);

  dragState.cleanup = () => {
    draggablePlayer.removeEventListener("pointerdown", onDown);
    draggablePlayer.removeEventListener("pointermove", onMove);
    draggablePlayer.removeEventListener("pointerup", onUp);
    draggablePlayer.removeEventListener("pointercancel", onUp);
  };
}

function teardownCutsceneDrag() {
  if (dragState && dragState.cleanup) dragState.cleanup();
  dragState = null;
}

function startModuleCutscene() {
  resetCutsceneLayout();
  clearConfettiLayer();
  stopCelebrationAudio();
  cutscene.classList.remove("hidden");
  endingText.classList.add("hidden");
  cutsceneHint.classList.add("hidden");
  draggablePlayer.classList.remove("visible");
  cutsceneCollisionDone = false;
  viewLearn.classList.add("learn-behind");

  syncCutsceneApplesFromLearn();

  const lr = learnPet.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const finalW = Math.min(vw * 0.5, vh * 0.58);
  const finalH = Math.min(finalW * 1.12, vh * 0.62);

  cutsceneTreeWrap.style.transition = "none";
  cutsceneTreeWrap.style.left = `${lr.left}px`;
  cutsceneTreeWrap.style.bottom = `${vh - lr.bottom}px`;
  cutsceneTreeWrap.style.transform = "translate(0, 0)";
  cutsceneTree.style.width = `${lr.width}px`;
  cutsceneTree.style.height = `${lr.height}px`;

  void cutsceneTreeWrap.offsetWidth;

  cutsceneTreeWrap.style.transition = "left 1.35s cubic-bezier(0.4, 0, 0.2, 1), bottom 1.35s cubic-bezier(0.4, 0, 0.2, 1), transform 1.35s cubic-bezier(0.4, 0, 0.2, 1)";
  cutsceneTree.style.transition = "width 1.35s cubic-bezier(0.4, 0, 0.2, 1), height 1.35s cubic-bezier(0.4, 0, 0.2, 1)";

  window.requestAnimationFrame(() => {
    cutsceneTreeWrap.style.left = "50%";
    cutsceneTreeWrap.style.bottom = "22%";
    cutsceneTreeWrap.style.transform = "translateX(-50%)";
    cutsceneTree.style.width = `${finalW}px`;
    cutsceneTree.style.height = `${finalH}px`;
  });

  window.setTimeout(() => {
    draggablePlayer.classList.add("visible");
    cutsceneHint.classList.remove("hidden");
    setupCutsceneDrag();
  }, 1450);
}

function currentLearningItem() {
  if (!practiceItems.length) return null;
  if (favoritePracticeMode) {
    return practiceItems.find((it) => it.id === favoritePracticeId) || practiceItems[0];
  }
  return practiceItems[learningIndex % practiceItems.length];
}

function updateLearningStats(itemId, patch) {
  const prev = learningState.practiceStats[itemId] || { attempts: 0, passed: 0, skipped: 0, favorited: false, lastScore: 0 };
  learningState.practiceStats[itemId] = { ...prev, ...patch };
  persistLearningState();
}

function renderLearningPractice() {
  const item = currentLearningItem();
  if (!item) return;
  const currentNo = favoritePracticeMode ? "收藏题复练" : `第 ${learningIndex + 1} 题`;
  learningProgressText.textContent = currentNo;
  learnPracticeSentence.textContent = item.npcEn;
  learnPracticeZh.textContent = `中文解释：${item.zhHint}`;
  learnPracticeFeedback.textContent = "请输入或语音跟读该句。";
  learnPracticeFeedback.classList.remove("fail");
  learnPracticeInput.value = "";
  updateLearningPointsText();
}

function markFavoriteCurrent() {
  const item = currentLearningItem();
  if (!item) return;
  if (!learningState.favoriteItems.includes(item.id)) {
    learningState.favoriteItems.push(item.id);
  }
  updateLearningStats(item.id, { favorited: true });
  persistLearningState();
  renderFavorites();
  learnPracticeFeedback.textContent = "已收藏当前题目，可在收藏区重复练习。";
  learnPracticeFeedback.classList.remove("fail");
}

function moveToNextLearningItem() {
  if (favoritePracticeMode) {
    persistLearningState();
    renderLearningPractice();
    return;
  }
  learningIndex = (learningIndex + 1) % practiceItems.length;
  persistLearningState();
  renderLearningPractice();
}

function submitLearningAnswer() {
  const item = currentLearningItem();
  if (!item) return;
  const answer = learnPracticeInput.value.trim();
  if (!answer) {
    learnPracticeFeedback.textContent = "请先输入或录入英文。";
    learnPracticeFeedback.classList.add("fail");
    return;
  }
  const { total } = evaluateAnswer(answer, item.refAnswer);
  const prev = learningState.practiceStats[item.id] || { attempts: 0, passed: 0, skipped: 0, favorited: false, lastScore: 0 };
  if (total >= 0.8) {
    learningState.learnCorrectCount += 1;
    if (learningState.learnCorrectCount % 3 === 0) {
      learningState.learnPoints += 1;
    }
    learnPracticeFeedback.textContent = `通过！综合匹配约 ${(total * 100).toFixed(0)}%（>=80%）。`;
    learnPracticeFeedback.classList.remove("fail");
    updateLearningStats(item.id, {
      attempts: prev.attempts + 1,
      passed: prev.passed + 1,
      lastScore: total
    });
    persistLearningState();
    moveToNextLearningItem();
  } else {
    learnPracticeFeedback.textContent = `未达 80%（当前约 ${(total * 100).toFixed(0)}%），请重试。`;
    learnPracticeFeedback.classList.add("fail");
    updateLearningStats(item.id, {
      attempts: prev.attempts + 1,
      lastScore: total
    });
  }
  updateLearningPointsText();
}

function skipLearningItem() {
  const item = currentLearningItem();
  if (!item) return;
  const prev = learningState.practiceStats[item.id] || { attempts: 0, passed: 0, skipped: 0, favorited: false, lastScore: 0 };
  updateLearningStats(item.id, { attempts: prev.attempts + 1, skipped: prev.skipped + 1 });
  learnPracticeFeedback.textContent = "本题已跳过。";
  learnPracticeFeedback.classList.remove("fail");
  moveToNextLearningItem();
}

function renderCollection() {
  collectionList.innerHTML = "";
  const entries = Object.entries(learningState.collectedCards);
  if (!entries.length) {
    collectionList.innerHTML = "<p>暂无已加入卡片，去翻卡区试试吧。</p>";
    return;
  }
  entries.forEach(([cardId, count]) => {
    const card = CARD_POOL.find((c) => c.id === cardId);
    if (!card) return;
    const box = document.createElement("div");
    box.className = "collection-item";
    box.innerHTML = `
      <img src="${card.src}" alt="${card.title}">
      <span class="collection-count">x${count}</span>
    `;
    collectionList.appendChild(box);
  });
}

function renderFavorites() {
  favoritesList.innerHTML = "";
  if (!learningState.favoriteItems.length) {
    favoritesList.innerHTML = "<p>暂无收藏题目。</p>";
    return;
  }
  learningState.favoriteItems.forEach((itemId) => {
    const item = practiceItems.find((it) => it.id === itemId);
    if (!item) return;
    const box = document.createElement("div");
    box.className = "favorite-item";
    box.innerHTML = `
      <p>${item.zhHint}</p>
      <p>${item.npcEn}</p>
      <div class="favorite-item-actions">
        <button type="button" class="btn-ref" data-action="retry">再练习</button>
        <button type="button" class="btn-skip" data-action="remove">取消收藏</button>
      </div>
    `;
    const retryBtn = box.querySelector('[data-action="retry"]');
    const removeBtn = box.querySelector('[data-action="remove"]');
    retryBtn.addEventListener("click", () => {
      favoritePracticeMode = true;
      favoritePracticeId = item.id;
      persistLearningState();
      openLearningView("view-learning-practice");
      renderLearningPractice();
    });
    removeBtn.addEventListener("click", () => {
      learningState.favoriteItems = learningState.favoriteItems.filter((id) => id !== item.id);
      const prev = learningState.practiceStats[item.id] || {};
      learningState.practiceStats[item.id] = { ...prev, favorited: false };
      persistLearningState();
      renderFavorites();
    });
    favoritesList.appendChild(box);
  });
}

function randomCard() {
  return CARD_POOL[Math.floor(Math.random() * CARD_POOL.length)];
}

function renderFlipGrid() {
  flipGrid.innerHTML = "";
  for (let i = 0; i < 12; i += 1) {
    const cardBtn = document.createElement("button");
    cardBtn.type = "button";
    cardBtn.className = "learn-flip-card";
    cardBtn.setAttribute("aria-label", `翻卡槽位 ${i + 1}`);
    cardBtn.innerHTML = `
      <span class="learn-flip-card-inner">
        <span class="learn-flip-face learn-flip-back"></span>
        <span class="learn-flip-face learn-flip-front"></span>
      </span>
    `;
    cardBtn.addEventListener("click", () => startFlip(cardBtn));
    flipGrid.appendChild(cardBtn);
  }
}

function startFlip(targetCardEl) {
  if (flipLocked) return;
  if (learningState.learnPoints <= 0) {
    flipFeedback.textContent = "积分不足";
    flipFeedback.classList.add("fail");
    return;
  }
  if (!targetCardEl) return;
  flipLocked = true;
  if (pendingFlipTimer) window.clearTimeout(pendingFlipTimer);
  flipConfirmActions.classList.add("hidden");
  learningState.learnPoints -= 1;
  const card = randomCard();
  const front = targetCardEl.querySelector(".learn-flip-front");
  front.style.backgroundImage = `url("${card.src}")`;
  targetCardEl.classList.add("is-flipped");
  playFlipSound();
  learningState.pendingFlip = {
    cardId: card.id,
    startedAt: Date.now(),
    revealUntil: Date.now() + 5000
  };
  persistLearningState();
  updateLearningPointsText();
  flipFeedback.textContent = `翻到了：${card.title}，5 秒后可选择是否加入集卡区。`;
  flipFeedback.classList.remove("fail");
  pendingFlipTimer = window.setTimeout(() => {
    targetCardEl.classList.remove("is-flipped");
    flipConfirmActions.classList.remove("hidden");
  }, 5000);
}

function confirmFlipAdd(shouldAdd) {
  const cardId = learningState.pendingFlip.cardId;
  if (!cardId) return;
  if (shouldAdd) {
    learningState.collectedCards[cardId] = (learningState.collectedCards[cardId] || 0) + 1;
    flipFeedback.textContent = "已加入集卡区。";
  } else {
    flipFeedback.textContent = "本次未加入集卡区。";
  }
  learningState.pendingFlip = { cardId: null, startedAt: 0, revealUntil: 0 };
  persistLearningState();
  flipConfirmActions.classList.add("hidden");
  renderCollection();
  pendingFlipTimer = null;
  flipLocked = false;
}

function openLearningHub() {
  favoritePracticeMode = false;
  favoritePracticeId = null;
  persistLearningState();
  flipLocked = false;
  if (pendingFlipTimer) {
    window.clearTimeout(pendingFlipTimer);
    pendingFlipTimer = null;
  }
  openLearningView("view-learning-hub");
  updateLearningPointsText();
  flipConfirmActions.classList.add("hidden");
}

btnReplayAudio.addEventListener("click", () => {
  if (!currentModuleId) return;
  speakNPC(currentStep().npc);
});

dialogueBubble.addEventListener("click", () => typewriterOnly(currentStep().npc));
dialogueBubble.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    typewriterOnly(currentStep().npc);
  }
});

btnShowRef.addEventListener("click", () => {
  if (!currentModuleId) return;
  const shown = !refAnswerText.classList.contains("hidden");
  if (shown) {
    refAnswerText.classList.add("hidden");
    btnShowRef.textContent = "查看参考答案";
  } else {
    refAnswerText.textContent = currentStep().ref;
    refAnswerText.classList.remove("hidden");
    btnShowRef.textContent = "隐藏参考答案";
  }
});

btnContinue.addEventListener("click", () => {
  if (!currentModuleId) return;
  resetPostSubmitUI();
  completeStep();
});

btnEnterPractice.addEventListener("click", () => {
  openPracticeHome();
});

btnEnterLearning.addEventListener("click", () => {
  openLearningHub();
});

btnPracticeBackHome.addEventListener("click", () => {
  openHome();
});

btnLearningBackHome.addEventListener("click", () => {
  openHome();
});

btnGoPractice.addEventListener("click", () => {
  favoritePracticeMode = false;
  favoritePracticeId = null;
  persistLearningState();
  openLearningView("view-learning-practice");
  renderLearningPractice();
});

btnGoFlip.addEventListener("click", () => {
  openLearningView("view-learning-flip");
  updateLearningPointsText();
  renderFlipGrid();
});

btnGoCollection.addEventListener("click", () => {
  openLearningView("view-learning-collection");
  renderCollection();
});

btnGoFavorites.addEventListener("click", () => {
  openLearningView("view-learning-favorites");
  renderFavorites();
});

btnPracticeHubBack.addEventListener("click", () => openLearningHub());
btnFlipBackHub.addEventListener("click", () => openLearningHub());
btnCollectionBackHub.addEventListener("click", () => openLearningHub());
btnFavoritesBackHub.addEventListener("click", () => openLearningHub());

btnLearningReplay.addEventListener("click", () => {
  const item = currentLearningItem();
  if (!item) return;
  speakNPC(item.npcEn);
});
btnLearningReplaySlow.addEventListener("click", () => {
  const item = currentLearningItem();
  if (!item) return;
  speakNPCWithRate(item.npcEn, 0.62);
});

learnPracticeSubmit.addEventListener("click", submitLearningAnswer);
learnPracticeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") submitLearningAnswer();
});

learnPracticeSkip.addEventListener("click", skipLearningItem);
learnPracticeFavorite.addEventListener("click", markFavoriteCurrent);

learnPracticeSpeech.addEventListener("click", () => {
  if (!learnRecognition) return;
  if (!learnListening) {
    learnListening = true;
    learnPracticeSpeech.textContent = "聆听中…";
    try { learnRecognition.start(); } catch (_) { learnListening = false; learnPracticeSpeech.textContent = "语音录入"; }
  } else {
    learnRecognition.stop();
  }
});

btnFlipAdd.addEventListener("click", () => confirmFlipAdd(true));
btnFlipSkipAdd.addEventListener("click", () => confirmFlipAdd(false));

submitBtn.addEventListener("click", onSubmit);
userInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") onSubmit();
});
skipBtn.addEventListener("click", () => {
  if (!currentModuleId) return;
  window.speechSynthesis.cancel();
  resetPostSubmitUI();
  skipStep();
});

speechBtn.addEventListener("click", () => {
  if (!recognition) return;
  if (!listening) {
    listening = true;
    speechBtn.textContent = "聆听中…";
    try { recognition.start(); } catch (_) { listening = false; speechBtn.textContent = "语音录入"; }
  } else {
    recognition.stop();
  }
});

btnBack.addEventListener("click", () => {
  if (stepIndex > 0 && !window.confirm("要返回首页吗？当前模块进度将丢失。")) return;
  window.speechSynthesis.cancel();
  openHome();
});

document.querySelectorAll(".module-card").forEach((btn) => {
  btn.addEventListener("click", () => openModule(btn.getAttribute("data-module")));
});

document.querySelectorAll(".module-card").forEach((btn) => {
  const id = btn.getAttribute("data-module");
  if (completed[id]) btn.classList.add("done");
});

async function initApp() {
  restoreLearningSession();
  try {
    practiceItems = await loadLearningCorpus();
  } catch (_) {
    practiceItems = [];
    learnPracticeFeedback.textContent = "学习语料加载失败，请检查资源文件。";
    learnPracticeFeedback.classList.add("fail");
  }
  updateLearningPointsText();
  renderCollection();
  renderFavorites();
  renderFlipGrid();
  initSpeech();
  initLearningSpeech();
  loadVoices();
  openHome();
}

initApp();
