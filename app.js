// ============================================================
// 放課後メモリーズ — Enhanced Mobile Game Edition
// ============================================================

// ---- Storage Keys ----
const SAVE_KEY = "afterschool_memories_save_v2";
const CHECKPOINT_KEY = "afterschool_memories_checkpoint_v2";
const GALLERY_KEY = "afterschool_memories_gallery_v1";
const ACHIEVEMENT_KEY = "afterschool_memories_achievements_v1";
const HISTORY_KEY = "afterschool_memories_history_v1";

// ---- Constants ----
const MAX_HEARTS = 7;
const AFFECTION_PER_HEART = 2.5;

// ============================================================
// Game Data
// ============================================================

const scenes = {
  intro_1: {
    lines: [
      { speaker: "Narrator", text: "4月。新学期の教室は、まだ少しだけよそよそしい。" },
      { speaker: "Narrator", text: "窓際の席で本を読んでいるクラスメイト、星空みさきがふと顔を上げた。" },
      { speaker: "みさき", mood: "🙂", text: "おはよう。…君、同じクラスだったよね。" },
      { speaker: "主人公", text: "うん。今日からよろしく。" },
      { speaker: "みさき", mood: "😊", text: "うん。文化祭の実行委員、ちょっと人手不足でさ。よかったら手伝ってくれない？" },
      {
        choice: [
          { label: "もちろん手伝う", next: "day1_after", affection: 2 },
          { label: "少し悩んでから承諾する", next: "day1_after", affection: 1 },
        ],
      },
    ],
  },
  day1_after: {
    day: 1,
    lines: [
      { speaker: "Narrator", text: "放課後、教室に残ってポスターの案を考える。" },
      { speaker: "みさき", mood: "😌", text: "助かった。ひとりだと、すぐ行き詰まるから。" },
      {
        choice: [
          { label: "みさきのアイデアを褒める", next: "day2_morning", affection: 2 },
          { label: "作業を黙々と進める", next: "day2_morning", affection: 0 },
        ],
      },
    ],
  },
  day2_morning: {
    day: 2,
    lines: [
      { speaker: "Narrator", text: "2日目の朝。校門前でみさきとばったり会った。" },
      { speaker: "みさき", mood: "😊", text: "おはよう。昨日の続きを、昼休みに少しだけ相談してもいい？" },
      {
        choice: [
          { label: "昼休みに一緒に計画を立てる", next: "day2_after", affection: 2 },
          { label: "放課後なら大丈夫と伝える", next: "day2_after", affection: 1 },
        ],
      },
    ],
  },
  day2_after: {
    day: 2,
    lines: [
      { speaker: "Narrator", text: "昼休み。配布するチラシのデザインを決める。" },
      { speaker: "みさき", mood: "🙂", text: "君って、思ってたよりずっと頼りになるね。" },
      { speaker: "主人公", text: "そう言ってもらえると嬉しい。" },
      {
        choice: [
          { label: "帰り道に一緒にコンビニへ行く", next: "day2_message", affection: 2 },
          { label: "今日は先に帰る", next: "day2_message", affection: 0 },
        ],
      },
    ],
  },
  day2_message: {
    day: 2,
    lines: [
      { speaker: "Narrator", text: "家に帰ると、スマホが光った。みさきからメッセージだ。" },
      { speaker: "みさき", text: "今日はありがとう！🌸", style: "message" },
      { speaker: "みさき", text: "チラシ、いい感じになりそうだね", style: "message" },
      { speaker: "みさき", text: "明日もよろしくね！", style: "message" },
      {
        choice: [
          { label: "「こちらこそ！明日も楽しみ」と返す", next: "day3", affection: 1 },
          { label: "スタンプだけ送る", next: "day3", affection: 0 },
        ],
      },
    ],
  },
  day3: {
    day: 3,
    lines: [
      { speaker: "Narrator", text: "3日目。文化祭の準備は順調に進み始めた。" },
      { speaker: "みさき", mood: "😄", text: "ねえ、模擬店の呼び込み、台本作るの手伝って。" },
      {
        choice: [
          { label: "二人でセリフを考える", next: "day4", affection: 2 },
          { label: "テンプレ案を提案する", next: "day4", affection: 1 },
        ],
      },
    ],
  },
  day4: {
    day: 4,
    lines: [
      { speaker: "Narrator", text: "4日目。準備の帰り、空は夕焼けで赤く染まっていた。" },
      { speaker: "みさき", mood: "🥹", text: "最近さ、君と話す時間が一番落ち着くんだ。" },
      {
        choice: [
          { label: "「俺も同じだよ」と伝える", next: "day4_message", affection: 3 },
          { label: "照れて笑ってごまかす", next: "day4_message", affection: 1 },
        ],
        timed: 10,
      },
    ],
  },
  day4_message: {
    day: 4,
    lines: [
      { speaker: "Narrator", text: "夜。またスマホが震えた。" },
      { speaker: "みさき", text: "今日の夕焼け、きれいだったね", style: "message" },
      { speaker: "みさき", text: "明日でいよいよ本番だよ…！", style: "message" },
      { speaker: "みさき", text: "ちょっと緊張してきた 💭", style: "message" },
      {
        choice: [
          { label: "「大丈夫、一緒に頑張ろう」と返す", next: "day5", affection: 1 },
          { label: "「おやすみ」とだけ送る", next: "day5", affection: 0 },
        ],
      },
    ],
  },
  day5: {
    day: 5,
    lines: [
      { speaker: "Narrator", text: "文化祭当日。客足は上々で、クラスは大盛況だった。" },
      { speaker: "みさき", mood: "😌", text: "終わったね。…校舎裏、少しだけ付き合って。" },
      { speaker: "Narrator", text: "深呼吸したみさきは、まっすぐこちらを見つめる。" },
      {
        choice: [
          { label: "最後までみさきの言葉を待つ", next: "final_eval", affection: 1 },
          { label: "先に気持ちを伝える", next: "final_eval", affection: 2 },
          { label: "「ずっと好きだった」と告白する", next: "final_eval", affection: 3, requires2ndPlay: true },
        ],
        timed: 12,
      },
    ],
  },
};

const endings = {
  best: {
    title: "True End: 放課後の約束",
    text: "みさきは頬を赤くして笑った。『ずっと前から、君のことが好きだった。これからも一緒にいてほしい。』 手をつないだ帰り道、放課後は特別な時間になった。",
  },
  good: {
    title: "Good End: ふたりの距離",
    text: "みさきは小さくうなずく。『もっと君のこと知りたい。まずは、これからも一緒に準備してくれる？』 恋が始まる前の、優しい予感が残った。",
  },
  normal: {
    title: "Normal End: クラスメイトのまま",
    text: "文化祭は成功した。みさきは笑顔で『ありがとう、助かった』と言った。言葉にできない想いは残ったけれど、来週もまた、教室で会える。",
  },
};

const sceneImages = {
  intro_1: "./images/misaki_scenes/intro_1.png",
  day1_after: "./images/misaki_scenes/day1_after.png",
  day2_morning: "./images/misaki_scenes/day2_morning.png",
  day2_after: "./images/misaki_scenes/day2_after.png",
  day2_message: "./images/misaki_scenes/day2_after.png",
  day3: "./images/misaki_scenes/day3.png",
  day4: "./images/misaki_scenes/day4.png",
  day4_message: "./images/misaki_scenes/day4.png",
  day5: "./images/misaki_scenes/day5.png",
};

const endingImages = {
  best: "./images/misaki_scenes/ending_best.png",
  good: "./images/misaki_scenes/ending_good.png",
  normal: "./images/misaki_scenes/ending_normal.png",
};

const galleryItems = [
  { id: "intro_1", name: "春の出会い" },
  { id: "day1_after", name: "放課後の準備" },
  { id: "day2_morning", name: "校門の約束" },
  { id: "day2_after", name: "昼休みの相談" },
  { id: "day3", name: "文化祭準備" },
  { id: "day4", name: "夕焼けの帰り道" },
  { id: "day5", name: "文化祭当日" },
  { id: "ending_best", name: "True End" },
  { id: "ending_good", name: "Good End" },
  { id: "ending_normal", name: "Normal End" },
];

const profileData = [
  { threshold: 0, label: "名前", value: "星空みさき" },
  { threshold: 0, label: "学年", value: "高校2年生" },
  { threshold: 3, label: "誕生日", value: "7月7日（七夕）" },
  { threshold: 5, label: "好きな食べ物", value: "いちごのショートケーキ" },
  { threshold: 7, label: "趣味", value: "読書と星を眺めること" },
  { threshold: 9, label: "将来の夢", value: "天文学者になること" },
  { threshold: 11, label: "好きな季節", value: "春（桜が好きだから）" },
  { threshold: 13, label: "秘密", value: "入学式の日から主人公のことが気になっていた" },
];

const achievementDefs = [
  { id: "first_start", name: "はじめまして", desc: "ゲームを初めて開始した", icon: "🌱" },
  { id: "first_clear", name: "エンディング到達", desc: "初めてエンディングを見た", icon: "🎬" },
  { id: "ending_normal", name: "クラスメイトのまま", desc: "ノーマルエンドを見た", icon: "📖" },
  { id: "ending_good", name: "ふたりの距離", desc: "グッドエンドを見た", icon: "💫" },
  { id: "ending_best", name: "放課後の約束", desc: "トゥルーエンドを見た", icon: "💕" },
  { id: "all_endings", name: "コンプリート", desc: "全エンディングを制覇した", icon: "👑" },
  { id: "max_affection", name: "最高の絆", desc: "親密度15以上でクリア", icon: "💎" },
  { id: "second_play", name: "もう一度会いたくて", desc: "2周目を開始した", icon: "🔄" },
];

// ============================================================
// State
// ============================================================

const state = {
  sceneId: "intro_1",
  lineIndex: 0,
  affection: 0,
  day: 1,
  mood: "😊",
  log: [],
  autoMode: false,
};

// ============================================================
// DOM Elements
// ============================================================

const el = {
  titleScreen: document.getElementById("titleScreen"),
  gameScreen: document.getElementById("gameScreen"),
  endingScreen: document.getElementById("endingScreen"),
  galleryScreen: document.getElementById("galleryScreen"),
  profileScreen: document.getElementById("profileScreen"),
  achievementScreen: document.getElementById("achievementScreen"),
  dayLabel: document.getElementById("dayLabel"),
  heartGauge: document.getElementById("heartGauge"),
  overlayMood: document.getElementById("overlayMood"),
  charImage: document.getElementById("charImage"),
  charName: document.getElementById("charName"),
  speaker: document.getElementById("speaker"),
  text: document.getElementById("text"),
  messageArea: document.getElementById("messageArea"),
  timerBar: document.getElementById("timerBar"),
  timerFill: document.getElementById("timerFill"),
  choices: document.getElementById("choices"),
  nextBtn: document.getElementById("nextBtn"),
  autoBtn: document.getElementById("autoBtn"),
  menuBtn: document.getElementById("menuBtn"),
  menuOpenBtn: document.getElementById("menuOpenBtn"),
  startBtn: document.getElementById("startBtn"),
  loadBtnTitle: document.getElementById("loadBtnTitle"),
  galleryBtnTitle: document.getElementById("galleryBtnTitle"),
  profileBtnTitle: document.getElementById("profileBtnTitle"),
  achievementBtnTitle: document.getElementById("achievementBtnTitle"),
  endingTitle: document.getElementById("endingTitle"),
  endingImage: document.getElementById("endingImage"),
  endingText: document.getElementById("endingText"),
  endingAffection: document.getElementById("endingAffection"),
  restartBtn: document.getElementById("restartBtn"),
  endingTitleBtn: document.getElementById("endingTitleBtn"),
  logDialog: document.getElementById("logDialog"),
  logBody: document.getElementById("logBody"),
  closeLogBtn: document.getElementById("closeLogBtn"),
  menuDialog: document.getElementById("menuDialog"),
  menuSaveBtn: document.getElementById("menuSaveBtn"),
  menuLoadBtn: document.getElementById("menuLoadBtn"),
  menuLogBtn: document.getElementById("menuLogBtn"),
  menuGalleryBtn: document.getElementById("menuGalleryBtn"),
  menuProfileBtn: document.getElementById("menuProfileBtn"),
  menuAchievementBtn: document.getElementById("menuAchievementBtn"),
  menuTitleBtn: document.getElementById("menuTitleBtn"),
  menuCloseBtn: document.getElementById("menuCloseBtn"),
  galleryGrid: document.getElementById("galleryGrid"),
  galleryBackBtn: document.getElementById("galleryBackBtn"),
  galleryViewDialog: document.getElementById("galleryViewDialog"),
  galleryViewImage: document.getElementById("galleryViewImage"),
  galleryViewName: document.getElementById("galleryViewName"),
  galleryViewCloseBtn: document.getElementById("galleryViewCloseBtn"),
  profileItems: document.getElementById("profileItems"),
  profileBackBtn: document.getElementById("profileBackBtn"),
  achievementList: document.getElementById("achievementList"),
  achievementBackBtn: document.getElementById("achievementBackBtn"),
  fadeOverlay: document.getElementById("fadeOverlay"),
  achievementToast: document.getElementById("achievementToast"),
  toastIcon: document.getElementById("toastIcon"),
  toastName: document.getElementById("toastName"),
  toastDesc: document.getElementById("toastDesc"),
  particles: document.getElementById("particles"),
};

// ============================================================
// Audio — BGM
// ============================================================

const bgm = new Audio("./sound/bgm.mp3");
bgm.loop = true;
bgm.volume = 0.4;

function playBgm() {
  bgm.play().catch(() => {});
}

function pauseBgm() {
  bgm.pause();
}

// ============================================================
// Audio — SE (Web Audio API)
// ============================================================

let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playSE(type) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    const now = ctx.currentTime;

    switch (type) {
      case "type":
        osc.type = "sine";
        osc.frequency.setValueAtTime(1100, now);
        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);
        osc.start(now);
        osc.stop(now + 0.025);
        break;
      case "click":
        osc.type = "sine";
        osc.frequency.setValueAtTime(660, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.06);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
        break;
      case "choice":
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523, now);
        osc.frequency.setValueAtTime(659, now + 0.08);
        osc.frequency.setValueAtTime(784, now + 0.16);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.start(now);
        osc.stop(now + 0.28);
        break;
      case "transition":
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(220, now + 0.35);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
        break;
      case "achievement": {
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc.type = "triangle";
        osc2.type = "triangle";
        osc.frequency.setValueAtTime(523, now);
        osc.frequency.setValueAtTime(659, now + 0.12);
        osc2.frequency.setValueAtTime(784, now + 0.24);
        osc2.frequency.setValueAtTime(1047, now + 0.36);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        gain2.gain.setValueAtTime(0.001, now);
        gain2.gain.setValueAtTime(0.1, now + 0.24);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
        osc.start(now);
        osc.stop(now + 0.3);
        osc2.start(now + 0.24);
        osc2.stop(now + 0.55);
        break;
      }
      case "message":
        osc.type = "sine";
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.setValueAtTime(1400, now + 0.04);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
        break;
    }
  } catch {
    // Audio not available
  }
}

// ============================================================
// Typewriter Engine
// ============================================================

let twTimer = null;
let twFullText = "";
let twIndex = 0;
let twDone = true;
let twCharCount = 0;

function typewrite(text, element, speed = 28) {
  twFullText = text;
  twIndex = 0;
  twDone = false;
  twCharCount = 0;
  element.textContent = "";
  element.classList.add("typing");
  clearInterval(twTimer);
  twTimer = setInterval(() => {
    if (twIndex < twFullText.length) {
      element.textContent += twFullText[twIndex];
      twIndex++;
      twCharCount++;
      if (twCharCount % 3 === 0) playSE("type");
    } else {
      finishTypewriter(element);
    }
  }, speed);
}

function finishTypewriter(element) {
  clearInterval(twTimer);
  twTimer = null;
  if (element) {
    element.textContent = twFullText;
    element.classList.remove("typing");
  }
  twDone = true;
}

function skipTypewriter() {
  if (!twDone) {
    finishTypewriter(el.text);
    return true;
  }
  return false;
}

// ============================================================
// Particles
// ============================================================

function createParticle() {
  const p = document.createElement("div");
  p.className = "particle";
  const size = 10 + Math.random() * 14;
  const left = Math.random() * 100;
  const duration = 7 + Math.random() * 10;
  const delay = Math.random() * 6;
  const rotation = Math.random() * 540;
  p.style.cssText = `
    left:${left}%;
    width:${size}px;height:${size}px;font-size:${size}px;
    animation-duration:${duration}s;animation-delay:${delay}s;
    --rotation:${rotation}deg;
  `;
  const petals = ["🌸", "✿", "❀"];
  p.textContent = petals[Math.floor(Math.random() * petals.length)];
  el.particles.appendChild(p);
  setTimeout(() => p.remove(), (duration + delay) * 1000);
}

let particleInterval = null;

function startParticles() {
  for (let i = 0; i < 12; i++) createParticle();
  particleInterval = setInterval(() => {
    if (el.particles.children.length < 18) createParticle();
  }, 900);
}

// ============================================================
// Fade Transition
// ============================================================

let transitioning = false;

function fadeTransition(callback) {
  if (transitioning) return;
  transitioning = true;
  playSE("transition");
  el.fadeOverlay.classList.add("active");
  setTimeout(() => {
    callback();
    setTimeout(() => {
      el.fadeOverlay.classList.remove("active");
      transitioning = false;
    }, 80);
  }, 360);
}

// ============================================================
// Heart Gauge
// ============================================================

let prevHearts = 0;

function updateHeartGauge() {
  const filled = Math.min(MAX_HEARTS, Math.floor(state.affection / AFFECTION_PER_HEART));
  el.heartGauge.innerHTML = "";
  for (let i = 0; i < MAX_HEARTS; i++) {
    const span = document.createElement("span");
    span.className = "heart" + (i < filled ? " filled" : "");
    span.textContent = "♥";
    el.heartGauge.appendChild(span);
  }
  prevHearts = filled;
}

// ============================================================
// Timer (Timed Choices)
// ============================================================

let choiceTimerId = null;
let timerRemaining = 0;
let timerTotal = 0;

function startChoiceTimer(seconds, onTimeout) {
  timerTotal = seconds;
  timerRemaining = seconds;
  el.timerBar.classList.remove("hidden");
  el.timerFill.style.width = "100%";

  choiceTimerId = setInterval(() => {
    timerRemaining -= 0.1;
    const pct = Math.max(0, (timerRemaining / timerTotal) * 100);
    el.timerFill.style.width = pct + "%";
    if (timerRemaining <= 0) {
      stopChoiceTimer();
      onTimeout();
    }
  }, 100);
}

function stopChoiceTimer() {
  if (choiceTimerId) {
    clearInterval(choiceTimerId);
    choiceTimerId = null;
  }
  el.timerBar.classList.add("hidden");
}

// ============================================================
// Gallery System
// ============================================================

function getGalleryData() {
  try {
    return JSON.parse(localStorage.getItem(GALLERY_KEY)) || {};
  } catch {
    return {};
  }
}

function saveGalleryData(data) {
  localStorage.setItem(GALLERY_KEY, JSON.stringify(data));
}

function unlockGalleryItem(id) {
  const data = getGalleryData();
  if (!data[id]) {
    data[id] = true;
    saveGalleryData(data);
  }
}

function getImageForGalleryItem(id) {
  if (sceneImages[id]) return sceneImages[id];
  if (endingImages[id.replace("ending_", "")]) return endingImages[id.replace("ending_", "")];
  if (endingImages[id]) return endingImages[id];
  return "./images/misaki_hoshizora.png";
}

function renderGallery() {
  const data = getGalleryData();
  el.galleryGrid.innerHTML = "";
  galleryItems.forEach((item) => {
    const cell = document.createElement("div");
    const unlocked = !!data[item.id];
    cell.className = "gallery-cell" + (unlocked ? "" : " locked");

    const img = document.createElement("img");
    img.src = getImageForGalleryItem(item.id);
    img.alt = item.name;
    cell.appendChild(img);

    if (unlocked) {
      const label = document.createElement("div");
      label.className = "gallery-label";
      label.textContent = item.name;
      cell.appendChild(label);
      cell.addEventListener("click", () => {
        playSE("click");
        el.galleryViewImage.src = getImageForGalleryItem(item.id);
        el.galleryViewName.textContent = item.name;
        el.galleryViewDialog.showModal();
      });
    } else {
      const lock = document.createElement("div");
      lock.className = "lock-icon";
      lock.textContent = "🔒";
      cell.appendChild(lock);
      const label = document.createElement("div");
      label.className = "gallery-label";
      label.textContent = "???";
      cell.appendChild(label);
    }

    el.galleryGrid.appendChild(cell);
  });
}

// ============================================================
// Profile System
// ============================================================

function getMaxAffection() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY))?.maxAffection || 0;
  } catch {
    return 0;
  }
}

function updateMaxAffection(val) {
  const history = getHistory();
  if (val > (history.maxAffection || 0)) {
    history.maxAffection = val;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }
}

function renderProfile() {
  const maxAff = getMaxAffection();
  el.profileItems.innerHTML = "";
  profileData.forEach((item) => {
    const row = document.createElement("div");
    const unlocked = maxAff >= item.threshold;
    row.className = "profile-row" + (unlocked ? "" : " locked");

    const label = document.createElement("span");
    label.className = "prof-label";
    label.textContent = item.label;
    row.appendChild(label);

    const value = document.createElement("span");
    value.className = "prof-value";
    value.textContent = unlocked ? item.value : `親密度 ${item.threshold} で解放`;
    row.appendChild(value);

    el.profileItems.appendChild(row);
  });
}

// ============================================================
// Achievement System
// ============================================================

function getAchievements() {
  try {
    return JSON.parse(localStorage.getItem(ACHIEVEMENT_KEY)) || {};
  } catch {
    return {};
  }
}

function saveAchievements(data) {
  localStorage.setItem(ACHIEVEMENT_KEY, JSON.stringify(data));
}

function unlockAchievement(id) {
  const data = getAchievements();
  if (data[id]) return;
  data[id] = { at: new Date().toISOString() };
  saveAchievements(data);

  const def = achievementDefs.find((a) => a.id === id);
  if (def) showAchievementToast(def);
}

let toastTimeout = null;

function showAchievementToast(def) {
  playSE("achievement");
  el.toastIcon.textContent = def.icon;
  el.toastName.textContent = def.name;
  el.toastDesc.textContent = def.desc;
  el.achievementToast.classList.remove("hidden");

  requestAnimationFrame(() => {
    el.achievementToast.classList.add("show");
  });

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    el.achievementToast.classList.remove("show");
    setTimeout(() => el.achievementToast.classList.add("hidden"), 500);
  }, 3500);
}

function renderAchievements() {
  const data = getAchievements();
  el.achievementList.innerHTML = "";
  achievementDefs.forEach((def) => {
    const row = document.createElement("div");
    const unlocked = !!data[def.id];
    row.className = "achievement-row " + (unlocked ? "unlocked" : "locked");

    const icon = document.createElement("span");
    icon.className = "ach-icon";
    icon.textContent = def.icon;
    row.appendChild(icon);

    const info = document.createElement("div");
    info.className = "ach-info";
    const name = document.createElement("div");
    name.className = "ach-name";
    name.textContent = unlocked ? def.name : "???";
    info.appendChild(name);
    const desc = document.createElement("div");
    desc.className = "ach-desc";
    desc.textContent = unlocked ? def.desc : "未解放";
    info.appendChild(desc);
    row.appendChild(info);

    el.achievementList.appendChild(row);
  });
}

// ============================================================
// History (playthrough tracking)
// ============================================================

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || {};
  } catch {
    return {};
  }
}

function recordEnding(endingKey) {
  const history = getHistory();
  if (!history.endings) history.endings = {};
  history.endings[endingKey] = true;
  history.playCount = (history.playCount || 0) + 1;
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function isSecondPlay() {
  const history = getHistory();
  return (history.playCount || 0) >= 1;
}

function hasAllEndings() {
  const history = getHistory();
  if (!history.endings) return false;
  return !!history.endings.best && !!history.endings.good && !!history.endings.normal;
}

// ============================================================
// Save / Load
// ============================================================

function createPayload() {
  return {
    saveVersion: 2,
    state: structuredClone(state),
    savedAt: new Date().toISOString(),
  };
}

function saveToKey(key) {
  localStorage.setItem(key, JSON.stringify(createPayload()));
}

function loadFromKey(key) {
  const raw = localStorage.getItem(key);
  if (!raw) return false;
  try {
    const data = JSON.parse(raw);
    if (!data.state) return false;
    Object.assign(state, data.state);
    return true;
  } catch {
    return false;
  }
}

function saveGame() {
  saveToKey(SAVE_KEY);
}

function saveCheckpoint() {
  saveToKey(CHECKPOINT_KEY);
}

function loadGame() {
  return loadFromKey(SAVE_KEY);
}

function loadCheckpoint() {
  return loadFromKey(CHECKPOINT_KEY);
}

// ============================================================
// Screen Management
// ============================================================

const allScreens = [
  "titleScreen", "gameScreen", "endingScreen",
  "galleryScreen", "profileScreen", "achievementScreen",
];

let currentScreen = "titleScreen";
let previousScreen = "titleScreen";

function showScreen(name) {
  allScreens.forEach((s) => el[s].classList.remove("active"));
  el[name].classList.add("active");

  previousScreen = currentScreen;
  currentScreen = name;

  if (name === "gameScreen" || name === "endingScreen") {
    playBgm();
  } else if (name === "titleScreen") {
    pauseBgm();
  }
}

function goBack() {
  if (previousScreen === "gameScreen" && currentScreen !== "gameScreen") {
    fadeTransition(() => showScreen("gameScreen"));
  } else {
    fadeTransition(() => showScreen("titleScreen"));
  }
}

// ============================================================
// Rendering
// ============================================================

function getCurrentScene() {
  return scenes[state.sceneId];
}

function updateHud() {
  el.dayLabel.textContent = `Day ${state.day}`;
  el.overlayMood.textContent = state.mood;
  el.charName.textContent = "星空みさき";
  updateHeartGauge();

  const sceneImage = sceneImages[state.sceneId];
  if (sceneImage) {
    el.charImage.src = sceneImage;
  }
}

function pushLog(speaker, text) {
  state.log.push(`${speaker}: ${text}`);
  if (state.log.length > 200) state.log.shift();
}

function renderLog() {
  el.logBody.textContent = state.log.length ? state.log.join("\n") : "まだログはありません。";
}

function renderChoices(choiceItems, timed) {
  el.choices.innerHTML = "";
  el.nextBtn.disabled = true;
  stopChoiceTimer();

  const is2nd = isSecondPlay();

  const visibleChoices = choiceItems.filter(
    (item) => !item.requires2ndPlay || is2nd
  );

  visibleChoices.forEach((item) => {
    const button = document.createElement("button");
    button.className = "btn glass";
    button.textContent = item.label;
    if (item.requires2ndPlay) {
      button.style.borderColor = "var(--accent)";
      button.style.color = "var(--accent)";
    }
    button.addEventListener("click", () => {
      playSE("choice");
      stopChoiceTimer();
      selectChoice(item);
    });
    el.choices.appendChild(button);
  });

  if (timed) {
    startChoiceTimer(timed, () => {
      const lastChoice = visibleChoices[visibleChoices.length - 1];
      playSE("click");
      selectChoice(lastChoice);
    });
  }
}

function selectChoice(item) {
  if (typeof item.affection === "number") state.affection += item.affection;
  if (item.next === "final_eval") {
    evaluateEnding();
    return;
  }
  state.sceneId = item.next;
  state.lineIndex = 0;

  // Unlock gallery for new scene
  unlockGalleryItem(state.sceneId);

  const nextScene = getCurrentScene();
  if (nextScene && nextScene.day) state.day = nextScene.day;

  // Clear messages when entering a new scene
  el.messageArea.innerHTML = "";
  el.messageArea.classList.add("hidden");
  el.text.classList.remove("hidden");

  renderLine();
  if (state.autoMode) stopAuto();
}

function renderLine(options = {}) {
  const { restored = false } = options;
  const scene = getCurrentScene();
  if (!scene) return;

  const line = scene.lines[state.lineIndex];
  el.choices.innerHTML = "";
  el.nextBtn.disabled = false;
  stopChoiceTimer();

  if (scene.day) state.day = scene.day;

  // Unlock gallery for current scene
  unlockGalleryItem(state.sceneId);

  if (line.choice) {
    el.speaker.textContent = "選択";
    el.text.classList.remove("hidden");
    el.text.classList.remove("typing");
    el.text.textContent = "どうする？";
    renderChoices(line.choice, line.timed);
    updateHud();
    saveCheckpoint();
    return;
  }

  if (line.style === "message") {
    // LINE-style message
    el.messageArea.classList.remove("hidden");
    el.text.classList.add("hidden");
    el.speaker.textContent = "📱 メッセージ";

    const bubble = document.createElement("div");
    const side = line.speaker === "主人公" ? "right" : "left";
    bubble.className = `msg-bubble ${side}`;
    bubble.textContent = line.text;
    el.messageArea.appendChild(bubble);
    el.messageArea.scrollTop = el.messageArea.scrollHeight;

    playSE("message");
    if (line.mood) state.mood = line.mood;
    if (!restored) pushLog(line.speaker, line.text);
    updateHud();
    saveCheckpoint();
    return;
  }

  // Normal text line
  el.messageArea.classList.add("hidden");
  el.messageArea.innerHTML = "";
  el.text.classList.remove("hidden");

  el.speaker.textContent = line.speaker;
  if (line.mood) state.mood = line.mood;

  if (restored) {
    el.text.textContent = line.text;
    twDone = true;
  } else {
    typewrite(line.text, el.text);
    pushLog(line.speaker, line.text);
  }

  updateHud();
  saveCheckpoint();
}

function nextLine() {
  if (skipTypewriter()) return;

  const scene = getCurrentScene();
  if (!scene) return;
  if (scene.lines[state.lineIndex]?.choice) return;

  state.lineIndex += 1;
  if (state.lineIndex >= scene.lines.length) {
    stopAuto();
    return;
  }
  renderLine();
}

// ============================================================
// Auto Mode
// ============================================================

let autoTimer = null;

function stopAuto() {
  state.autoMode = false;
  el.autoBtn.textContent = "オート";
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }
}

function toggleAuto() {
  if (state.autoMode) {
    stopAuto();
    return;
  }
  state.autoMode = true;
  el.autoBtn.textContent = "⏸ 停止";
  playSE("click");
  autoTimer = setInterval(() => {
    if (!state.autoMode) return;
    if (!twDone) return;
    const scene = getCurrentScene();
    if (!scene) return;
    if (scene.lines[state.lineIndex]?.choice) return;
    nextLine();
  }, 2200);
}

// ============================================================
// Game Flow
// ============================================================

function resetState() {
  state.sceneId = "intro_1";
  state.lineIndex = 0;
  state.affection = 0;
  state.day = 1;
  state.mood = "😊";
  state.log = [];
  state.autoMode = false;
}

function startGame(restored = false) {
  el.messageArea.innerHTML = "";
  el.messageArea.classList.add("hidden");
  el.text.classList.remove("hidden");
  showScreen("gameScreen");
  renderLine({ restored });
}

function evaluateEnding() {
  stopAuto();
  let endingKey = "normal";
  let ending = endings.normal;
  if (state.affection >= 13) {
    ending = endings.best;
    endingKey = "best";
  } else if (state.affection >= 9) {
    ending = endings.good;
    endingKey = "good";
  }

  // Track history
  updateMaxAffection(state.affection);
  recordEnding(endingKey);

  // Unlock gallery
  unlockGalleryItem("ending_" + endingKey);

  // Achievements
  unlockAchievement("first_clear");
  unlockAchievement("ending_" + endingKey);
  if (state.affection >= 15) unlockAchievement("max_affection");
  if (hasAllEndings()) {
    setTimeout(() => unlockAchievement("all_endings"), 1500);
  }

  el.endingImage.src = endingImages[endingKey];
  el.endingTitle.textContent = ending.title;
  el.endingText.textContent = ending.text;
  el.endingAffection.textContent = `最終親密度: ${state.affection}`;
  saveCheckpoint();

  fadeTransition(() => showScreen("endingScreen"));
}

// ============================================================
// Touch / Swipe / Long Press
// ============================================================

let touchStartX = 0;
let touchStartY = 0;
let touchStartTime = 0;
let longPressTimer = null;

function handleTouchStart(e) {
  if (e.target.closest(".btn, .btn-icon, .choices, .controls, .hud")) return;
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  touchStartTime = Date.now();

  longPressTimer = setTimeout(() => {
    longPressTimer = null;
    toggleAuto();
  }, 600);
}

function handleTouchMove(e) {
  if (!longPressTimer) return;
  const dx = Math.abs(e.touches[0].clientX - touchStartX);
  const dy = Math.abs(e.touches[0].clientY - touchStartY);
  if (dx > 15 || dy > 15) {
    clearTimeout(longPressTimer);
    longPressTimer = null;
  }
}

function handleTouchEnd(e) {
  if (longPressTimer) {
    clearTimeout(longPressTimer);
    longPressTimer = null;
  }

  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  const dt = Date.now() - touchStartTime;

  if (e.target.closest(".btn, .btn-icon, .choices, .controls, .hud")) return;

  // Tap
  if (Math.abs(dx) < 30 && Math.abs(dy) < 30 && dt < 400) {
    playSE("click");
    playBgm();
    nextLine();
    return;
  }

  // Left swipe -> advance
  if (dx < -60 && Math.abs(dy) < 60) {
    playSE("click");
    nextLine();
  }
}

// ============================================================
// Event Listeners
// ============================================================

// Title
el.startBtn.addEventListener("click", () => {
  playSE("click");
  const is2nd = isSecondPlay();
  unlockAchievement("first_start");
  if (is2nd) unlockAchievement("second_play");
  resetState();
  fadeTransition(() => startGame());
});

el.loadBtnTitle.addEventListener("click", () => {
  playSE("click");
  if (loadCheckpoint() || loadGame()) {
    fadeTransition(() => startGame(true));
  } else {
    window.alert("保存データがありません。");
  }
});

el.galleryBtnTitle.addEventListener("click", () => {
  playSE("click");
  renderGallery();
  fadeTransition(() => showScreen("galleryScreen"));
});

el.profileBtnTitle.addEventListener("click", () => {
  playSE("click");
  renderProfile();
  fadeTransition(() => showScreen("profileScreen"));
});

el.achievementBtnTitle.addEventListener("click", () => {
  playSE("click");
  renderAchievements();
  fadeTransition(() => showScreen("achievementScreen"));
});

// Game controls
el.nextBtn.addEventListener("click", () => {
  playSE("click");
  playBgm();
  nextLine();
});

el.autoBtn.addEventListener("click", toggleAuto);

el.menuBtn.addEventListener("click", () => {
  playSE("click");
  el.menuDialog.showModal();
});

el.menuOpenBtn.addEventListener("click", () => {
  playSE("click");
  el.menuDialog.showModal();
});

// Menu dialog
el.menuSaveBtn.addEventListener("click", () => {
  playSE("click");
  saveGame();
  el.menuDialog.close();
  window.alert("保存しました。");
});

el.menuLoadBtn.addEventListener("click", () => {
  playSE("click");
  el.menuDialog.close();
  if (loadGame()) renderLine({ restored: true });
  else window.alert("保存データがありません。");
});

el.menuLogBtn.addEventListener("click", () => {
  playSE("click");
  el.menuDialog.close();
  renderLog();
  el.logDialog.showModal();
});

el.menuGalleryBtn.addEventListener("click", () => {
  playSE("click");
  el.menuDialog.close();
  renderGallery();
  fadeTransition(() => showScreen("galleryScreen"));
});

el.menuProfileBtn.addEventListener("click", () => {
  playSE("click");
  el.menuDialog.close();
  renderProfile();
  fadeTransition(() => showScreen("profileScreen"));
});

el.menuAchievementBtn.addEventListener("click", () => {
  playSE("click");
  el.menuDialog.close();
  renderAchievements();
  fadeTransition(() => showScreen("achievementScreen"));
});

el.menuTitleBtn.addEventListener("click", () => {
  playSE("click");
  el.menuDialog.close();
  stopAuto();
  fadeTransition(() => showScreen("titleScreen"));
});

el.menuCloseBtn.addEventListener("click", () => {
  playSE("click");
  el.menuDialog.close();
});

// Log dialog
el.closeLogBtn.addEventListener("click", () => {
  playSE("click");
  el.logDialog.close();
});

// Gallery
el.galleryBackBtn.addEventListener("click", () => {
  playSE("click");
  goBack();
});

el.galleryViewCloseBtn.addEventListener("click", () => {
  el.galleryViewDialog.close();
});

el.galleryViewDialog.addEventListener("click", (e) => {
  if (e.target === el.galleryViewDialog) el.galleryViewDialog.close();
});

// Profile
el.profileBackBtn.addEventListener("click", () => {
  playSE("click");
  goBack();
});

// Achievement
el.achievementBackBtn.addEventListener("click", () => {
  playSE("click");
  goBack();
});

// Ending
el.restartBtn.addEventListener("click", () => {
  playSE("click");
  resetState();
  fadeTransition(() => startGame());
});

el.endingTitleBtn.addEventListener("click", () => {
  playSE("click");
  fadeTransition(() => showScreen("titleScreen"));
});

// Touch handlers on game screen
el.gameScreen.addEventListener("touchstart", handleTouchStart, { passive: true });
el.gameScreen.addEventListener("touchmove", handleTouchMove, { passive: true });
el.gameScreen.addEventListener("touchend", handleTouchEnd, { passive: true });

// Desktop click on text/bg to advance
el.text.addEventListener("click", () => {
  if (!el.choices.children.length) {
    playSE("click");
    playBgm();
    nextLine();
  }
});

document.getElementById("bg").addEventListener("click", (e) => {
  if (e.target.closest(".btn, .btn-icon, .badge")) return;
  if (!el.choices.children.length) {
    playSE("click");
    playBgm();
    nextLine();
  }
});

// ============================================================
// PWA Registration
// ============================================================

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

// ============================================================
// Init
// ============================================================

startParticles();
showScreen("titleScreen");
