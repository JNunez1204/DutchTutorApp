const state = loadState();
let currentScenario = null;
let currentStepIndex = 0;
let attempts = 0;
let answeredThisStep = false;
let reviewQueue = [];
let reviewIndex = 0;
let revealed = false;

const $ = (id) => document.getElementById(id);
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

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

function addMessage(kind, nlHtml, enText) {
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
  $("chat-window").appendChild(el);
  $("chat-window").scrollTop = $("chat-window").scrollHeight;
  return el;
}

function renderScenarioList() {
  const wrap = $("scenario-list");
  wrap.innerHTML = "";
  SCENARIOS.forEach((s) => {
    const done = scenarioProgress(s);
    const total = s.steps.length;
    const card = document.createElement("div");
    card.className = "scenario-card";
    card.innerHTML =
      '<span class="icon">' + s.icon + "</span>" +
      "<h3>" + esc(s.title) + "</h3>" +
      '<p>' + esc(s.blurb) + "</p>" +
      '<div style="display:flex;gap:8px;align-items:center;margin-top:4px;">' +
      '<span class="chip">' + s.level + "</span>" +
      (done === total ? '<span class="chip done">✓ Completed</span>' : '<span class="chip warn">' + done + "/" + total + " steps</span>") +
      "</div>";
    card.addEventListener("click", () => openScenario(s.id));
    wrap.appendChild(card);
  });
}

function openScenario(id) {
  currentScenario = SCENARIOS.find((s) => s.id === id);
  currentStepIndex = 0;
  $("scenario-list").classList.add("hidden");
  $("scenario-view").classList.remove("hidden");
  $("scenario-heading").textContent = currentScenario.icon + " " + currentScenario.title;
  $("scenario-level").textContent = currentScenario.level + " · " + currentScenario.titleEn;
  const tips = currentScenario.tips.map((t) => "<li>" + esc(t) + "</li>").join("");
  $("tips-box").innerHTML = "<strong>Before you start</strong><ul>" + tips + "</ul>";
  $("chat-window").innerHTML = "";
  attempts = 0;
  answeredThisStep = false;
  renderDots();
  addMessage("bot", esc(currentScenario.steps[0].bot), currentScenario.steps[0].en);
  $("chat-input").focus();
}

function closeScenario() {
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

function handleSend() {
  const input = $("chat-input");
  const text = input.value.trim();
  if (!text || !currentScenario) return;
  input.value = "";
  const showEn = state.translations;
  addMessage("user", esc(text), null);
  touchStreak();

  const step = currentScenario.steps[currentStepIndex];
  const result = matchStep(text, step.accept);

  if (result.verdict === "empty") return;

  if (result.verdict === "exact" || result.verdict === "near") {
    const xp = (result.verdict === "exact" && attempts === 0 ? 15 : 10);
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
        addMessage("bot", esc(next.bot), next.en);
        renderDots();
        $("coach-note").textContent = "";
        answeredThisStep = false;
      }, 700);
    } else {
      const allDone = scenarioProgress(currentScenario) === currentScenario.steps.length;
      setTimeout(() => {
        addMessage("coach", "🎉 <strong>Scenario voltooid!</strong> You completed <strong>" + esc(currentScenario.titleEn) + "</strong>." + (allDone ? " This scenario is now fully mastered — try the next one." : ""), null);
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
    addMessage("coach", "A natural way to say it: <strong>" + esc(model) + "</strong><br>Type it (or your own version) to continue.", null);
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
  if (!currentScenario) return;
  const step = currentScenario.steps[currentStepIndex];
  addMessage("coach", "💡 " + esc(step.hint), null);
}

function handleShowAnswer() {
  if (!currentScenario) return;
  const step = currentScenario.steps[currentStepIndex];
  addMessage("coach", "Model answer: <strong>" + esc(step.accept[0]) + "</strong>", null);
  setNote("Type a similar sentence to continue.", "");
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
  );
  filtered.forEach((v) => {
    const rec = state.srs[v.nl];
    const box = rec ? rec.box + 1 : 0;
    const item = document.createElement("div");
    item.className = "vocab-item";
    item.innerHTML =
      '<span class="nl-word">' + esc(v.nl) + "</span>" +
      '<span class="en-word">' + esc(v.en) + "</span>" +
      '<div class="meta"><span class="box-chip">' + v.level + '</span><span class="box-chip">box ' + box + "</span></div>";
    wrap.appendChild(item);
  });
  const due = dueCards().length;
  $("vocab-summary").textContent = VOCAB.length + " words · " + due + " due for review" + (due ? " — keep the streak alive" : "");
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
  reviewQueue.sort(() => Math.random() - 0.5);
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
  $("review-progress").textContent = (reviewIndex + 1) + " / " + reviewQueue.length;
  $("card-nl").textContent = card.nl;
  $("card-en").textContent = card.en;
  $("card-en").classList.add("hidden");
  $("btn-reveal").classList.remove("hidden");
  $("grade-row").classList.add("hidden");
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
  GRAMMAR_TOPICS.forEach((g) => {
    const el = document.createElement("div");
    el.className = "grammar-item";
    el.innerHTML = '<h4><span class="chip">' + g.level + "</span> " + esc(g.title) + "</h4><p>" + esc(g.body) + "</p>";
    wrap.appendChild(el);
  });
}

function renderProgress() {
  const cards = $("progress-cards");
  const totalSteps = SCENARIOS.reduce((n, s) => n + s.steps.length, 0);
  const doneSteps = Object.keys(state.completedSteps).length;
  const mastered = Object.values(state.srs).filter((r) => r.box >= 4).length;
  cards.innerHTML = "";
  [
    { big: state.xp, lbl: "Total XP" },
    { big: state.streak + "🔥", lbl: "Day streak" },
    { big: doneSteps + "/" + totalSteps, lbl: "Dialogue steps" },
    { big: mastered, lbl: "Words mastered" }
  ].forEach((c) => {
    const el = document.createElement("div");
    el.className = "progress-card";
    el.innerHTML = '<div class="big">' + c.big + '</div><div class="lbl">' + c.lbl + "</div>";
    cards.appendChild(el);
  });

  const rows = $("progress-scenarios");
  rows.innerHTML = "";
  SCENARIOS.forEach((s) => {
    const done = scenarioProgress(s);
    const pct = Math.round((done / s.steps.length) * 100);
    const row = document.createElement("div");
    row.className = "progress-row";
    row.innerHTML =
      '<span>' + s.icon + '</span><span class="name">' + esc(s.title) + '</span>' +
      '<div class="progress-bar"><i style="width:' + pct + '%"></i></div>' +
      '<span class="muted">' + done + "/" + s.steps.length + "</span>";
    rows.appendChild(row);
  });
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    tab.classList.add("active");
    $("view-" + tab.dataset.view).classList.add("active");
    if (tab.dataset.view === "vocab") renderVocab();
    if (tab.dataset.view === "progress") renderProgress();
  });
});

$("btn-back").addEventListener("click", closeScenario);
$("btn-send").addEventListener("click", handleSend);
$("btn-hint").addEventListener("click", handleHint);
$("btn-show-answer").addEventListener("click", handleShowAnswer);
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
document.querySelectorAll(".btn.grade").forEach((b) => {
  b.addEventListener("click", () => gradeCard(b.dataset.grade));
});
$("vocab-filter-module").addEventListener("change", renderVocab);
$("vocab-filter-level").addEventListener("change", renderVocab);

if (!storageAvailable) {
  const warn = document.createElement("div");
  warn.className = "storage-warning";
  warn.textContent = "⚠️ Browser storage is blocked, so your progress will not be saved between sessions. The app still works — but enable site data/cookies or leave private browsing to keep your progress.";
  document.querySelector("footer").prepend(warn);
}

renderStats();
renderScenarioList();
renderVocabFilters();
renderGrammar();
renderVocab();
renderProgress();
