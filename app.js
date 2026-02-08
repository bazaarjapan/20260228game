const SAVE_KEY = "afterschool_memories_save_v1";
const CHECKPOINT_KEY = "afterschool_memories_checkpoint_v1";

const state = {
  sceneId: "intro_1",
  lineIndex: 0,
  affection: 0,
  day: 1,
  mood: "😊",
  log: [],
  autoMode: false,
};

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
          { label: "帰り道に一緒にコンビニへ行く", next: "day3", affection: 2 },
          { label: "今日は先に帰る", next: "day3", affection: 0 },
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
          { label: "「俺も同じだよ」と伝える", next: "day5", affection: 3 },
          { label: "照れて笑ってごまかす", next: "day5", affection: 1 },
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
        ],
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
  day3: "./images/misaki_scenes/day3.png",
  day4: "./images/misaki_scenes/day4.png",
  day5: "./images/misaki_scenes/day5.png",
};

const endingImages = {
  best: "./images/misaki_scenes/ending_best.png",
  good: "./images/misaki_scenes/ending_good.png",
  normal: "./images/misaki_scenes/ending_normal.png",
};

const bgm = new Audio("./sound/bgm.mp3");
bgm.loop = true;
bgm.volume = 0.45;

const el = {
  titleScreen: document.getElementById("titleScreen"),
  gameScreen: document.getElementById("gameScreen"),
  endingScreen: document.getElementById("endingScreen"),
  dayLabel: document.getElementById("dayLabel"),
  overlayAffection: document.getElementById("overlayAffection"),
  overlayMood: document.getElementById("overlayMood"),
  charImage: document.getElementById("charImage"),
  charName: document.getElementById("charName"),
  speaker: document.getElementById("speaker"),
  text: document.getElementById("text"),
  choices: document.getElementById("choices"),
  nextBtn: document.getElementById("nextBtn"),
  autoBtn: document.getElementById("autoBtn"),
  saveBtn: document.getElementById("saveBtn"),
  loadBtn: document.getElementById("loadBtn"),
  logBtn: document.getElementById("logBtn"),
  titleBtn: document.getElementById("titleBtn"),
  startBtn: document.getElementById("startBtn"),
  loadBtnTitle: document.getElementById("loadBtnTitle"),
  endingTitle: document.getElementById("endingTitle"),
  endingImage: document.getElementById("endingImage"),
  endingText: document.getElementById("endingText"),
  restartBtn: document.getElementById("restartBtn"),
  endingTitleBtn: document.getElementById("endingTitleBtn"),
  logDialog: document.getElementById("logDialog"),
  logBody: document.getElementById("logBody"),
  closeLogBtn: document.getElementById("closeLogBtn"),
};

let autoTimer = null;

function playBgm() {
  bgm.play().catch(() => {});
}

function pauseBgm() {
  bgm.pause();
}

function resetState() {
  state.sceneId = "intro_1";
  state.lineIndex = 0;
  state.affection = 0;
  state.day = 1;
  state.mood = "😊";
  state.log = [];
  state.autoMode = false;
}

function showScreen(name) {
  el.titleScreen.classList.remove("active");
  el.gameScreen.classList.remove("active");
  el.endingScreen.classList.remove("active");
  el[name].classList.add("active");

  if (name === "gameScreen" || name === "endingScreen") {
    playBgm();
  } else {
    pauseBgm();
  }
}

function getCurrentScene() {
  return scenes[state.sceneId];
}

function updateHud() {
  el.dayLabel.textContent = `Day ${state.day}`;
  el.overlayAffection.textContent = `親密度: ${state.affection}`;
  el.overlayMood.textContent = `感情: ${state.mood}`;
  el.charName.textContent = "星空みさき";

  const sceneImage = sceneImages[state.sceneId];
  if (sceneImage) {
    el.charImage.src = sceneImage;
  }
}

function pushLog(speaker, text) {
  state.log.push(`${speaker}: ${text}`);
  if (state.log.length > 100) state.log.shift();
}

function renderLog() {
  el.logBody.textContent = state.log.length ? state.log.join("\n") : "まだログはありません。";
}

function renderChoices(choiceItems) {
  el.choices.innerHTML = "";
  el.nextBtn.disabled = true;
  choiceItems.forEach((item) => {
    const button = document.createElement("button");
    button.className = "btn ghost";
    button.textContent = item.label;
    button.addEventListener("click", () => {
      if (typeof item.affection === "number") state.affection += item.affection;
      if (item.next === "final_eval") {
        evaluateEnding();
        return;
      }
      state.sceneId = item.next;
      state.lineIndex = 0;
      const nextScene = getCurrentScene();
      if (nextScene.day) state.day = nextScene.day;
      renderLine();
      if (state.autoMode) {
        stopAuto();
      }
    });
    el.choices.appendChild(button);
  });
}

function renderLine(options = {}) {
  const { restored = false } = options;
  const scene = getCurrentScene();
  if (!scene) return;

  const line = scene.lines[state.lineIndex];
  el.choices.innerHTML = "";
  el.nextBtn.disabled = false;

  if (scene.day) state.day = scene.day;

  if (line.choice) {
    el.speaker.textContent = "選択";
    el.text.textContent = "どうする？";
    renderChoices(line.choice);
    updateHud();
    saveCheckpoint();
    return;
  }

  el.speaker.textContent = line.speaker;
  el.text.textContent = line.text;
  if (line.mood) state.mood = line.mood;
  if (!restored) {
    pushLog(line.speaker, line.text);
  }
  updateHud();
  saveCheckpoint();
}

function nextLine() {
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

  el.endingImage.src = endingImages[endingKey];
  el.endingTitle.textContent = ending.title;
  el.endingText.textContent = `${ending.text}\n\n最終親密度: ${state.affection}`;
  saveCheckpoint();
  showScreen("endingScreen");
}

function createPayload() {
  return {
    saveVersion: 1,
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
    if (data.saveVersion !== 1 || !data.state) return false;
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

function startGame(restored = false) {
  showScreen("gameScreen");
  renderLine({ restored });
}

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
  el.autoBtn.textContent = "停止";
  autoTimer = setInterval(() => {
    if (!state.autoMode) return;
    const scene = getCurrentScene();
    if (scene.lines[state.lineIndex]?.choice) return;
    nextLine();
  }, 1800);
}

el.startBtn.addEventListener("click", () => {
  resetState();
  startGame();
});

el.loadBtnTitle.addEventListener("click", () => {
  if (loadCheckpoint() || loadGame()) startGame(true);
  else window.alert("保存データがありません。");
});

el.nextBtn.addEventListener("click", nextLine);
el.autoBtn.addEventListener("click", toggleAuto);
el.saveBtn.addEventListener("click", () => {
  saveGame();
  window.alert("保存しました。");
});
el.loadBtn.addEventListener("click", () => {
  if (loadGame()) renderLine({ restored: true });
  else window.alert("保存データがありません。");
});
el.logBtn.addEventListener("click", () => {
  renderLog();
  el.logDialog.showModal();
});
el.closeLogBtn.addEventListener("click", () => el.logDialog.close());
el.titleBtn.addEventListener("click", () => {
  stopAuto();
  showScreen("titleScreen");
});
el.restartBtn.addEventListener("click", () => {
  resetState();
  startGame();
});
el.endingTitleBtn.addEventListener("click", () => {
  showScreen("titleScreen");
});

el.text.addEventListener("click", () => {
  if (!el.choices.children.length) {
    playBgm();
    nextLine();
  }
});

showScreen("titleScreen");
