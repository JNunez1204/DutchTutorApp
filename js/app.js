const state = loadState();
let currentScenario = null;
let currentStepIndex = 0;
let attempts = 0;
let answeredThisStep = false;
let reviewQueue = [];
let reviewIndex = 0;
let revealed = false;
let branchMood = 0;
let dictSession = [];
let dictIndex = 0;
let dictScore = 0;
let dictChecked = false;
let currentText = null;
let readingMode = "texts";

const LEVEL_ORDER = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4 };

function levelValue(level) {
  return LEVEL_ORDER[level] !== undefined ? LEVEL_ORDER[level] : 9;
}

function scenarioSize(s) {
  return s.type === "branch" ? Object.keys(s.nodes).length : s.steps.length;
}

function scenarioDone(s) {
  if (s.type === "branch") return !!state.scenarioDone[s.id];
  return scenarioProgress(s) === s.steps.length;
}

function buildDict() {
  const dict = {};
  Object.keys(DICT_EXTRA).forEach((k) => {
    dict[k] = DICT_EXTRA[k];
  });
  VOCAB.forEach((v) => {
    const stripped = v.nl.replace(/^(de|het|een)\s+/, "");
    if (!dict[stripped]) dict[stripped] = v.en;
  });
  return dict;
}
const DICT = buildDict();

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function touchStreak() {
  const today = todayKey();
  if (state.lastStudy === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = state.lastStudy === yesterday ? state.streak + 1 : 1;
  state.lastStudy = today;
  saveState();
  renderStats();
}

function addXp(n) {
  state.xp += n;
  saveState();
  renderStats();
}

function stepKey(scenarioId, index) {
  return scenarioId + ":" + index;
}

function scenarioProgress(scenario) {
  let done = 0;
  scenario.steps.forEach((_, i) => {
    if (state.completedSteps[stepKey(scenario.id, i)]) done++;
  });
  return done;
}

function renderStats() {
  $("stat-xp").textContent = state.xp;
  $("stat-streak").textContent = state.streak;
  $("toggle-translations").checked = state.translations;
}

function addMessage(kind, nlHtml, enText, opts) {
  opts = opts || {};
  const el = document.createElement("div");
  el.className = "msg " + kind;
  let html = "";
  if (kind === "coach") {
    html = '<span class="label">Coach</span>' + nlHtml;
  } else {
    html = '<span class="nl-block">' + nlHtml + "</span>";
    if (enText && state.translations) {
      html += '<span class="en-block">' + esc(enText) + "</span>";
    }
  }
  el.innerHTML = html;
  if (kind === "bot" && opts.speakable && ttsAvailable()) {
    const btn = document.createElement("button");
    btn.className = "speak-btn";
    btn.title = "Listen (Dutch text-to-speech)";
    btn.textContent = "🔊";
    btn.dataset.text = opts.speakable;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      speak(opts.speakable, 1);
    });
    el.appendChild(btn);
    const auto = document.getElementById("toggle-autoplay");
    if (opts.autoplay && auto && auto.checked) {
      speak(opts.speakable, 1);
    }
  }
  $("chat-window").appendChild(el);
  $("chat-window").scrollTop = $("chat-window").scrollHeight;
  return el;
}

function addOptions(options) {
  const wrap = document.createElement("div");
  wrap.className = "msg-options";
  options.forEach((opt) => {
    const b = document.createElement("button");
    b.className = "option-btn";
    b.textContent = opt.text;
    b.dataset.next = opt.next;
    b.dataset.mood = opt.mood;
    b.dataset.note = opt.note;
    b.addEventListener("click", () => chooseOption(opt, b));
    wrap.appendChild(b);
  });
  $("chat-window").appendChild(wrap);
  $("chat-window").scrollTop = $("chat-window").scrollHeight;
}

function chooseOption(opt, btn) {
  if (currentScenario && currentScenario.type === "branch") {
    const wrap = btn.parentElement;
    if (wrap) wrap.querySelectorAll(".option-btn").forEach((b) => (b.disabled = true));
  }
  addMessage("user", esc(opt.text), null);
  branchMood += opt.mood || 0;
  addXp((opt.mood || 0) > 0 ? 8 : 4);
  touchStreak();
  if (opt.note) addMessage("coach", esc(opt.note), null);
  renderMood();
  const node = currentScenario.nodes[opt.next];
  setTimeout(() => {
    if (node.ending) {
      addMessage("bot", esc(node.bot), node.en, { speakable: node.bot });
      markBranchDone(node.ending);
      const final =
        node.ending === "good"
          ? "🎉 <strong>Best ending!</strong> You handled a difficult client professionally. +20 bonus XP."
          : node.ending === "neutral"
          ? "👍 <strong>Acceptable ending.</strong> The relationship survived, but a faster, more concrete solution would have scored better."
          : "⚠️ <strong>Difficult ending.</strong> The client escalated. Remember: acknowledge, take ownership, come with a concrete solution and a deadline.";
      if (node.ending === "good") addXp(20);
      addMessage("coach", final, null);
      $("chat-input").closest(".composer").classList.add("hidden");
    } else {
      renderBranchNode(opt.next);
    }
  }, 650);
}

function markBranchDone(ending) {
  state.scenarioDone[currentScenario.id] = ending;
  saveState();
  renderScenarioList();
}

function renderMood() {
  const meter = $("mood-meter");
  if (!meter || !currentScenario || currentScenario.type !== "branch") return;
  const faces = branchMood >= 3 ? "😊😊😊" : branchMood === 2 ? "😊😊" : branchMood === 1 ? "🙂" : branchMood === 0 ? "😐" : branchMood === -1 ? "😕" : branchMood === -2 ? "😠" : "😠😠";
  meter.innerHTML = "Klanttevredenheid: " + faces;
}

function renderBranchNode(nodeId) {
  const node = currentScenario.nodes[nodeId];
  addMessage("bot", esc(node.bot), node.en, { speakable: node.bot });
  addOptions(node.options);
}

function renderScenarioList() {
  const wrap = $("scenario-list");
  wrap.innerHTML = "";
  [...SCENARIOS]
    .sort((a, b) => levelValue(a.level) - levelValue(b.level))
    .forEach((s) => {
      const total = scenarioSize(s);
      const doneCount = s.type === "branch" ? (scenarioDone(s) ? 1 : 0) : scenarioProgress(s);
      const card = document.createElement("div");
      card.className = "scenario-card";
      card.innerHTML =
        '<span class="icon">' + s.icon + "</span>" +
        "<h3>" + esc(s.title) + "</h3>" +
        "<p>" + esc(s.blurb) + "</p>" +
        '<div style="display:flex;gap:8px;align-items:center;margin-top:4px;flex-wrap:wrap;">' +
        '<span class="chip">' + s.level + "</span>" +
        (s.type === "branch" ? '<span class="chip warn">🌱 branching</span>' : "") +
        (doneCount === total
          ? '<span class="chip done">✓ Completed</span>'
          : '<span class="chip warn">' + doneCount + "/" + total + " steps</span>") +
        "</div>";
      card.addEventListener("click", () => openScenario(s.id));
      wrap.appendChild(card);
    });
}

function openScenario(id) {
  stopSpeaking();
  currentScenario = SCENARIOS.find((s) => s.id === id);
  currentStepIndex = 0;
  branchMood = 0;
  attempts = 0;
  answeredThisStep = false;
  $("scenario-list").classList.add("hidden");
  $("scenario-view").classList.remove("hidden");
  $("scenario-heading").textContent = currentScenario.icon + " " + currentScenario.title;
  $("scenario-level").textContent = currentScenario.level + " · " + currentScenario.titleEn;
  const tips = currentScenario.tips.map((t) => "<li>" + esc(t) + "</li>").join("");
  $("tips-box").innerHTML = "<strong>Before you start</strong><ul>" + tips + "</ul>";
  $("chat-window").innerHTML = "";
  $("coach-note").textContent = "";
  const isBranch = currentScenario.type === "branch";
  $("mood-meter").classList.toggle("hidden", !isBranch);
  $("composer-row").classList.toggle("hidden", isBranch);
  if (isBranch) {
    renderMood();
    renderBranchNode(currentScenario.start);
  } else {
    renderDots();
    addMessage("bot", esc(currentScenario.steps[0].bot), currentScenario.steps[0].en, {
      speakable: currentScenario.steps[0].bot,
      autoplay: true
    });
    $("chat-input").focus();
  }
}

function closeScenario() {
  stopSpeaking();
  currentScenario = null;
  $("scenario-view").classList.add("hidden");
  $("scenario-list").classList.remove("hidden");
  renderScenarioList();
  renderProgress();
}

function renderDots() {
  const dots = $("step-dots");
  dots.innerHTML = "";
  currentScenario.steps.forEach((_, i) => {
    const span = document.createElement("span");
    if (state.completedSteps[stepKey(currentScenario.id, i)]) span.className = "done";
    else if (i === currentStepIndex) span.className = "current";
    dots.appendChild(span);
  });
}

function playStepAudio() {
  if ($("toggle-autoplay").checked) {
    const step = currentScenario.steps[currentStepIndex];
    speak(step.bot, 1);
  }
}

function handleSend() {
  const input = $("chat-input");
  const text = input.value.trim();
  if (!text || !currentScenario || currentScenario.type === "branch") return;
  input.value = "";
  addMessage("user", esc(text), null);
  touchStreak();

  const step = currentScenario.steps[currentStepIndex];
  const result = matchStep(text, step.accept);

  if (result.verdict === "empty") return;

  if (result.verdict === "exact" || result.verdict === "near") {
    const xp = result.verdict === "exact" && attempts === 0 ? 15 : 10;
    addXp(xp);
    state.completedSteps[stepKey(currentScenario.id, currentStepIndex)] = true;
    saveState();
    attempts = 0;
    answeredThisStep = true;
    addMessage("coach", xpNote(result.verdict, xp), null);
    renderDots();
    if (currentStepIndex < currentScenario.steps.length - 1) {
      currentStepIndex++;
      setTimeout(() => {
        const next = currentScenario.steps[currentStepIndex];
        addMessage("bot", esc(next.bot), next.en, { speakable: next.bot, autoplay: true });
        renderDots();
        $("coach-note").textContent = "";
        answeredThisStep = false;
        playStepAudio();
      }, 700);
    } else {
      const allDone = scenarioProgress(currentScenario) === currentScenario.steps.length;
      setTimeout(() => {
        addMessage(
          "coach",
          "🎉 <strong>Scenario voltooid!</strong> You completed <strong>" + esc(currentScenario.titleEn) + "</strong>." +
            (allDone ? " This scenario is now fully mastered — try the next one." : ""),
          null
        );
        renderDots();
        answeredThisStep = false;
      }, 700);
    }
    return;
  }

  attempts++;
  if (result.verdict === "close") {
    addMessage("coach", "Almost! Small differences from a natural phrasing. " + esc(step.hint), null);
    setNote("Keep going — you're close.", "warn");
  } else if (attempts === 1) {
    addMessage("coach", esc(step.hint), null);
    setNote("Attempt 1 — try again with the hint above.", "warn");
  } else if (attempts === 2) {
    addMessage("coach", esc(step.nudge), null);
    setNote("Attempt 2 — focus on the structure in the hint.", "warn");
  } else {
    const model = step.accept[0];
    addMessage(
      "coach",
      "A natural way to say it: <strong>" + esc(model) + "</strong><br>Type it (or your own version) to continue.",
      null
    );
    setNote("Model answer revealed — retype to advance.", "warn");
  }
}

function xpNote(verdict, xp) {
  if (verdict === "exact") return "✅ <strong>Goed gedaan!</strong> Natural phrasing. +" + xp + " XP";
  return "✅ <strong>Goed gedaan!</strong> Understood — a native might phrase it slightly differently. +" + xp + " XP";
}

function setNote(text, cls) {
  const note = $("coach-note");
  note.textContent = text;
  note.className = cls || "";
}

function handleHint() {
  if (!currentScenario || currentScenario.type === "branch") return;
  const step = currentScenario.steps[currentStepIndex];
  addMessage("coach", "💡 " + esc(step.hint), null);
}

function handleShowAnswer() {
  if (!currentScenario || currentScenario.type === "branch") return;
  const step = currentScenario.steps[currentStepIndex];
  addMessage("coach", "Model answer: <strong>" + esc(step.accept[0]) + "</strong>", null);
  setNote("Type a similar sentence to continue.", "");
}

function handleMic() {
  if (!sttAvailable()) {
    setNote("Speech recognition is not available in this browser. Try Chrome or Edge.", "warn");
    return;
  }
  const btn = $("btn-mic");
  toggleListening(
    (transcript) => {
      $("chat-input").value = $("chat-input").value ? $("chat-input").value + " " + transcript : transcript;
      setNote("Heard: " + transcript, "good");
    },
    () => {
      btn.classList.add("recording");
      setNote("Listening… speak Dutch now.", "");
    },
    () => {
      btn.classList.remove("recording");
    }
  );
}

function renderVocabFilters() {
  const sel = $("vocab-filter-module");
  sel.innerHTML = '<option value="all">All topics</option>';
  SCENARIOS.forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s.id;
    opt.textContent = s.title;
    sel.appendChild(opt);
  });
}

function dueCards() {
  const now = Date.now();
  return VOCAB.filter((v) => {
    const rec = state.srs[v.nl];
    if (!rec) return true;
    return rec.due <= now;
  });
}

function renderVocab() {
  const mod = $("vocab-filter-module").value;
  const lvl = $("vocab-filter-level").value;
  const wrap = $("vocab-table");
  wrap.innerHTML = "";
  const filtered = VOCAB.filter(
    (v) => (mod === "all" || v.module === mod) && (lvl === "all" || v.level === lvl)
  ).sort((a, b) => levelValue(a.level) - levelValue(b.level));
  filtered.forEach((v) => {
    const rec = state.srs[v.nl];
    const box = rec ? rec.box + 1 : 0;
    const item = document.createElement("div");
    item.className = "flip-card";
    item.innerHTML =
      '<div class="flip-inner">' +
      '<div class="flip-face flip-front">' +
      '<span class="nl-word">' + esc(v.nl) + "</span>" +
      '<div class="meta"><span class="box-chip">' + v.level + '</span><span class="box-chip">box ' + box + '</span></div>' +
      '<span class="flip-hint">click to flip</span>' +
      "</div>" +
      '<div class="flip-face flip-back"><span class="en-word">' + esc(v.en) + "</span></div>" +
      "</div>";
    item.addEventListener("click", () => item.classList.toggle("flipped"));
    wrap.appendChild(item);
  });
  const due = dueCards().length;
  $("vocab-summary").textContent =
    VOCAB.length + " words · " + due + " due for review" + (due ? " — run a review session below the filters" : "");
}

const INTERVALS_DAYS = [0, 1, 3, 7, 16, 35];

function gradeCard(grade) {
  const card = reviewQueue[reviewIndex];
  if (!card) return;
  const rec = state.srs[card.nl] || { box: 0, due: 0 };
  if (grade === "again") {
    rec.box = 0;
    rec.due = Date.now() + 60000;
  } else {
    const bump = grade === "hard" ? 0 : grade === "easy" ? 2 : 1;
    rec.box = Math.min(rec.box + 1 + bump, INTERVALS_DAYS.length - 1);
    rec.due = Date.now() + INTERVALS_DAYS[rec.box] * 86400000;
  }
  state.srs[card.nl] = rec;
  addXp(2);
  touchStreak();
  reviewIndex++;
  showCard();
}

function startReview() {
  reviewQueue = dueCards();
  if (reviewQueue.length === 0) {
    reviewQueue = VOCAB.slice();
  }
  reviewQueue.sort((a, b) => levelValue(a.level) - levelValue(b.level));
  reviewIndex = 0;
  $("review-panel").classList.remove("hidden");
  showCard();
}

function showCard() {
  if (reviewIndex >= reviewQueue.length) {
    $("card-nl").textContent = "Review session complete! 🎉";
    $("card-en").classList.add("hidden");
    $("btn-reveal").classList.add("hidden");
    $("grade-row").classList.add("hidden");
    $("review-progress").textContent = "";
    renderVocab();
    return;
  }
  const card = reviewQueue[reviewIndex];
  revealed = false;
  $("review-progress").textContent = reviewIndex + 1 + " / " + reviewQueue.length;
  $("card-nl").textContent = card.nl;
  $("card-en").textContent = card.en;
  $("card-en").classList.add("hidden");
  $("btn-reveal").classList.remove("hidden");
  $("grade-row").classList.add("hidden");
  $("btn-say-card").classList.toggle("hidden", !ttsAvailable());
}

function revealCard() {
  if (reviewIndex >= reviewQueue.length) return;
  revealed = true;
  $("card-en").classList.remove("hidden");
  $("btn-reveal").classList.add("hidden");
  $("grade-row").classList.remove("hidden");
}

function endReview() {
  $("review-panel").classList.add("hidden");
  renderVocab();
}

function renderGrammar() {
  const wrap = $("grammar-list");
  wrap.innerHTML = "";
  [...GRAMMAR_TOPICS]
    .sort((a, b) => levelValue(a.level) - levelValue(b.level))
    .forEach((g) => {
      const el = document.createElement("div");
      el.className = "grammar-item";
      el.innerHTML = '<h4><span class="chip">' + g.level + "</span> " + esc(g.title) + "</h4><p>" + esc(g.body) + "</p>";
      wrap.appendChild(el);
    });

  const mistakes = $("mistakes-list");
  mistakes.innerHTML = "";
  [...COMMON_MISTAKES]
    .sort((a, b) => levelValue(a.level) - levelValue(b.level))
    .forEach((m) => {
      const el = document.createElement("div");
      el.className = "mistake-item";
      el.innerHTML =
        '<div class="mistake-line wrong-line"><span class="mark">✗</span> ' + esc(m.wrong) + "</div>" +
        '<div class="mistake-line right-line"><span class="mark">✓</span> ' + esc(m.right) + "</div>" +
        '<p class="muted">' + esc(m.note) + "</p>" +
        '<span class="chip">' + m.level + "</span>";
      mistakes.appendChild(el);
    });
}

function renderProgress() {
  const cards = $("progress-cards");
  const totalSteps = SCENARIOS.reduce((n, s) => n + scenarioSize(s), 0);
  const doneSteps =
    Object.keys(state.completedSteps).length + Object.keys(state.scenarioDone).length;
  const mastered = Object.values(state.srs).filter((r) => r.box >= 4).length;
  cards.innerHTML = "";
  [
    { big: state.xp, lbl: "Total XP" },
    { big: state.streak + "🔥", lbl: "Day streak" },
    { big: doneSteps + "/" + totalSteps, lbl: "Steps completed" },
    { big: mastered, lbl: "Words mastered" }
  ].forEach((c) => {
    const el = document.createElement("div");
    el.className = "progress-card";
    el.innerHTML = '<div class="big">' + c.big + '</div><div class="lbl">' + c.lbl + "</div>";
    cards.appendChild(el);
  });

  const rows = $("progress-scenarios");
  rows.innerHTML = "";
  [...SCENARIOS]
    .sort((a, b) => levelValue(a.level) - levelValue(b.level))
    .forEach((s) => {
      const total = scenarioSize(s);
      const done = s.type === "branch" ? (scenarioDone(s) ? 1 : 0) : scenarioProgress(s);
      const pct = total ? Math.round((done / total) * 100) : 0;
      const row = document.createElement("div");
      row.className = "progress-row";
      row.innerHTML =
        "<span>" + s.icon + '</span><span class="name">' + esc(s.title) + "</span>" +
        '<div class="progress-bar"><i style="width:' + pct + '%"></i></div>' +
        '<span class="muted">' + done + "/" + total + "</span>";
      rows.appendChild(row);
    });
}

function initDictation() {
  dictSession = DICTATION_SENTENCES.slice().sort(() => Math.random() - 0.5).slice(0, 8);
  dictIndex = 0;
  dictScore = 0;
  dictChecked = false;
  $("d-en").textContent = "";
  $("d-feedback").textContent = "";
  $("d-feedback").className = "composer-foot";
  showDictSentence();
}

function showDictSentence() {
  if (dictIndex >= dictSession.length) {
    $("d-progress").textContent = "Session complete! 🎉";
    $("btn-play").classList.add("hidden");
    $("btn-repeat").classList.add("hidden");
    $("btn-d-check").classList.add("hidden");
    $("btn-d-next").classList.add("hidden");
    $("d-input").classList.add("hidden");
    $("d-score").textContent = dictScore + "/" + dictSession.length + " · " + (dictScore * 5) + " XP";
    return;
  }
  $("btn-play").classList.remove("hidden");
  $("btn-repeat").classList.remove("hidden");
  $("btn-d-check").classList.remove("hidden");
  $("btn-d-next").classList.remove("hidden");
  $("d-input").classList.remove("hidden");
  dictChecked = false;
  $("d-progress").textContent = "Sentence " + (dictIndex + 1) + " / " + dictSession.length;
  $("d-score").textContent = "Score: " + dictScore;
  $("d-en").textContent = "";
  $("d-feedback").textContent = "";
  $("d-feedback").className = "composer-foot";
  $("d-input").value = "";
}

function playDictSentence() {
  if (dictIndex >= dictSession.length) return;
  speak(dictSession[dictIndex].nl, parseFloat($("d-rate").value));
}

function checkDictation() {
  if (dictChecked || dictIndex >= dictSession.length) return;
  const text = $("d-input").value.trim();
  if (!text) return;
  dictChecked = true;
  const s = dictSession[dictIndex];
  const sim = similarity(normalize(text), normalize(s.nl));
  if (sim >= 0.85) {
    dictScore++;
    addXp(5);
    touchStreak();
    $("d-feedback").innerHTML = "✅ <strong>Correct!</strong> " + esc(s.nl);
    $("d-feedback").className = "composer-foot good";
  } else {
    $("d-feedback").innerHTML =
      "❌ You wrote: <em>" + esc(text) + "</em><br>Correct: <strong>" + esc(s.nl) + "</strong>";
    $("d-feedback").className = "composer-foot warn";
  }
  $("d-en").textContent = s.en;
  $("d-score").textContent = "Score: " + dictScore;
}

function nextDictSentence() {
  dictIndex++;
  showDictSentence();
  if (dictIndex < dictSession.length) playDictSentence();
}

function renderTextList() {
  const wrap = $("text-list");
  wrap.innerHTML = "";
  [...READING_TEXTS]
    .sort((a, b) => levelValue(a.level) - levelValue(b.level))
    .forEach((t) => {
      const card = document.createElement("div");
      card.className = "scenario-card";
      card.innerHTML =
        '<span class="icon">📖</span><h3>' + esc(t.title) + "</h3>" +
        "<p>" + t.paragraphs.length + " paragraphs · " + t.questions.length + " questions</p>" +
        '<div style="margin-top:4px;"><span class="chip">' + t.level + "</span></div>";
      card.addEventListener("click", () => openText(t));
      wrap.appendChild(card);
    });
}

function lookupWord(word) {
  const clean = word.toLowerCase().replace(/[.,!?;:«»"“”'’()]/g, "").trim();
  if (!clean) return null;
  if (DICT[clean]) return DICT[clean];
  if (clean.length > 4) {
    if (DICT[clean.replace(/en$/, "")]) return DICT[clean.replace(/en$/, "")] + " (or plural form)";
    if (DICT[clean.replace(/s$/, "")]) return DICT[clean.replace(/s$/, "")] + " (or plural form)";
    if (DICT[clean.replace(/e$/, "")]) return DICT[clean.replace(/e$/, "")];
  }
  return null;
}

function openText(t) {
  currentText = t;
  $("text-list").classList.add("hidden");
  $("text-reader").classList.remove("hidden");
  $("text-title").textContent = t.title;
  $("text-level").textContent = t.level;
  const content = $("reading-content");
  content.innerHTML = "";
  const popup = $("word-popup");
  t.paragraphs.forEach((p) => {
    const para = document.createElement("p");
    p.split(/\s+/).forEach((word) => {
      const span = document.createElement("span");
      span.className = "clickable-word";
      span.textContent = word;
      span.addEventListener("click", () => {
        const meaning = lookupWord(word);
        popup.classList.remove("hidden");
        if (meaning) {
          popup.innerHTML = "<strong>" + esc(word) + "</strong> = " + esc(meaning) +
            ' <button class="btn small" id="popup-say">🔊</button>';
          const sayBtn = popup.querySelector("#popup-say");
          if (sayBtn && ttsAvailable()) sayBtn.addEventListener("click", () => speak(word, 1));
        } else {
          popup.innerHTML = "<strong>" + esc(word) + "</strong> — not in the dictionary." +
            (ttsAvailable() ? ' <button class="btn small" id="popup-say">🔊</button>' : "");
          const sayBtn = popup.querySelector("#popup-say");
          if (sayBtn) sayBtn.addEventListener("click", () => speak(word, 1));
        }
      });
      para.appendChild(span);
      para.appendChild(document.createTextNode(" "));
    });
    content.appendChild(para);
  });
  renderQuestions();
}

function closeText() {
  stopSpeaking();
  currentText = null;
  $("text-reader").classList.add("hidden");
  $("text-list").classList.remove("hidden");
  $("word-popup").classList.add("hidden");
}

function renderQuestions() {
  const wrap = $("reading-questions");
  wrap.innerHTML = "";
  currentText.questions.forEach((q, qi) => {
    const box = document.createElement("div");
    box.className = "question-box";
    box.innerHTML = "<p><strong>" + (qi + 1) + ".</strong> " + esc(q.q) + "</p>";
    q.options.forEach((opt, oi) => {
      const label = document.createElement("label");
      label.className = "q-option";
      label.innerHTML =
        '<input type="radio" name="q' + qi + '" value="' + oi + '" /> ' + esc(opt);
      box.appendChild(label);
    });
    const expl = document.createElement("p");
    expl.className = "q-explain muted hidden";
    expl.textContent = q.explain;
    box.appendChild(expl);
    wrap.appendChild(box);
  });
  $("reading-score").textContent = "";
}

function checkQuestions() {
  if (!currentText) return;
  let correct = 0;
  currentText.questions.forEach((q, qi) => {
    const box = $("reading-questions").children[qi];
    const chosen = box.querySelector("input:checked");
    const labels = box.querySelectorAll(".q-option");
    labels.forEach((l, li) => l.classList.remove("q-right", "q-wrong"));
    if (chosen) {
      const val = parseInt(chosen.value, 10);
      if (val === q.answer) {
        correct++;
        labels[val].classList.add("q-right");
      } else {
        labels[val].classList.add("q-wrong");
        labels[q.answer].classList.add("q-right");
      }
    } else {
      labels[q.answer].classList.add("q-right");
    }
    box.querySelector(".q-explain").classList.remove("hidden");
  });
  const score = correct + "/" + currentText.questions.length;
  $("reading-score").textContent = "Score: " + score + (correct === currentText.questions.length ? " · Perfect! +15 XP" : " · +2 XP per correct answer");
  addXp(correct === currentText.questions.length ? 15 : correct * 2);
  touchStreak();
}

function renderErrorTexts() {
  const wrap = $("error-list");
  wrap.innerHTML = "";
  let solved = 0;
  ERROR_TEXTS.forEach((ex) => {
    const box = document.createElement("div");
    box.className = "error-exercise";
    box.innerHTML = "<h4>" + esc(ex.title) + ' <span class="chip">' + ex.level + '</span></h4><p class="muted">Click the mistake in each sentence.</p>';
    ex.items.forEach((item) => {
      const line = document.createElement("div");
      line.className = "error-line";
      const noteEl = document.createElement("span");
      noteEl.className = "error-note muted";
      let attemptsItem = 0;
      item.words.forEach((w, wi) => {
        const span = document.createElement("span");
        span.className = "clickable-word";
        span.textContent = w;
        span.addEventListener("click", () => {
          if (line.classList.contains("solved")) return;
          if (wi === item.wrong) {
            line.classList.add("solved");
            span.classList.add("q-right");
            noteEl.innerHTML = "✓ " + esc(item.correct) + " — " + esc(item.note);
            solved++;
            addXp(3);
            touchStreak();
            if (solved === ERROR_TEXTS.reduce((n, e) => n + e.items.length, 0)) {
              const done = document.createElement("p");
              done.className = "good";
              done.textContent = "🎉 All errors found! Well done.";
              wrap.appendChild(done);
            }
          } else {
            attemptsItem++;
            span.classList.add("q-wrong");
            setTimeout(() => span.classList.remove("q-wrong"), 900);
            if (attemptsItem >= 3) {
              noteEl.innerHTML = "The mistake is: " + esc(item.correct) + " — " + esc(item.note);
            }
          }
        });
        line.appendChild(span);
        line.appendChild(document.createTextNode(" "));
      });
      line.appendChild(document.createElement("br"));
      line.appendChild(noteEl);
      box.appendChild(line);
    });
    wrap.appendChild(box);
  });
}

document.querySelectorAll(".tabs .tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tabs .tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    tab.classList.add("active");
    $("view-" + tab.dataset.view).classList.add("active");
    if (tab.dataset.view === "vocab") renderVocab();
    if (tab.dataset.view === "progress") renderProgress();
    if (tab.dataset.view === "grammar") renderGrammar();
    if (tab.dataset.view === "listening" && dictIndex >= dictSession.length) initDictation();
  });
});

document.querySelectorAll(".reading-modes .rtab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".reading-modes .rtab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    readingMode = btn.dataset.rmode;
    $("reading-texts").classList.toggle("hidden", readingMode !== "texts");
    $("reading-errors").classList.toggle("hidden", readingMode !== "errors");
  });
});

$("btn-back").addEventListener("click", closeScenario);
$("btn-send").addEventListener("click", handleSend);
$("btn-hint").addEventListener("click", handleHint);
$("btn-show-answer").addEventListener("click", handleShowAnswer);
$("btn-mic").addEventListener("click", handleMic);
$("chat-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSend();
});
$("toggle-translations").addEventListener("change", (e) => {
  state.translations = e.target.checked;
  saveState();
});
$("btn-review").addEventListener("click", startReview);
$("btn-end-review").addEventListener("click", endReview);
$("btn-reveal").addEventListener("click", revealCard);
$("btn-say-card").addEventListener("click", () => {
  if (reviewIndex < reviewQueue.length) speak(reviewQueue[reviewIndex].nl.replace(/^(de|het|een)\s+/, ""), 1);
});
document.querySelectorAll(".btn.grade").forEach((b) => {
  b.addEventListener("click", () => gradeCard(b.dataset.grade));
});
$("vocab-filter-module").addEventListener("change", renderVocab);
$("vocab-filter-level").addEventListener("change", renderVocab);

$("btn-play").addEventListener("click", playDictSentence);
$("btn-repeat").addEventListener("click", playDictSentence);
$("btn-d-check").addEventListener("click", checkDictation);
$("btn-d-next").addEventListener("click", nextDictSentence);
$("btn-d-hint").addEventListener("click", () => {
  if (dictIndex < dictSession.length) $("d-en").textContent = dictSession[dictIndex].en;
});
$("d-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkDictation();
});

$("btn-text-back").addEventListener("click", closeText);
$("btn-check-questions").addEventListener("click", checkQuestions);

if (!ttsAvailable()) {
  $("btn-play").disabled = true;
  $("btn-play").title = "Text-to-speech is not available in this browser. Try Chrome, Edge or Safari.";
}
if (!sttAvailable()) {
  $("btn-mic").disabled = true;
  $("btn-mic").title = "Speech recognition is not available in this browser. Try Chrome or Edge.";
}

if (!storageAvailable) {
  const warn = document.createElement("div");
  warn.className = "storage-warning";
  warn.textContent =
    "⚠️ Browser storage is blocked, so your progress will not be saved between sessions. The app still works — but enable site data/cookies or leave private browsing to keep your progress.";
  document.querySelector("footer").prepend(warn);
}

renderStats();
renderScenarioList();
renderVocabFilters();
renderGrammar();
renderVocab();
renderProgress();
renderTextList();
renderErrorTexts();
initDictation();
