const STORE_KEY = "zakelijknl_v1";

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[.,!?;:«»"“”'’()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function prepPattern(pattern) {
  return pattern
    .replace(/[.,!?;:«»“”'’()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wildcardRegex(pattern) {
  const escaped = prepPattern(pattern)
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\\\{[^}]*\\\}/g, ".+");
  return new RegExp("^" + escaped + "$", "i");
}

function similarity(a, b) {
  const s1 = " " + a + " ";
  const s2 = " " + b + " ";
  const m = s1.length;
  const n = s2.length;
  if (m === 0 || n === 0) return 0;
  let prev = new Array(n + 1);
  let curr = new Array(n + 1);
  for (let j = 0; j <= n; j++) prev[j] = j;
  for (let i = 1; i <= m; i++) {
    curr[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }
  return 1 - prev[n] / Math.max(m, n);
}

function matchStep(input, accept) {
  const normalized = normalize(input);
  if (!normalized) return { verdict: "empty" };
  for (const pattern of accept) {
    if (wildcardRegex(pattern).test(normalized)) {
      return { verdict: "exact", pattern };
    }
  }
  let best = 0;
  let bestPattern = null;
  for (const pattern of accept) {
    const filled = pattern.replace(/\{[^}]+\}/g, "iets");
    const score = similarity(normalized, normalize(filled));
    if (score > best) {
      best = score;
      bestPattern = pattern;
    }
  }
  if (best >= 0.82) return { verdict: "near", score: best, pattern: bestPattern };
  if (best >= 0.55) return { verdict: "close", score: best, pattern: bestPattern };
  return { verdict: "off", score: best };
}

function defaultState() {
  return {
    xp: 0,
    streak: 1,
    lastStudy: null,
    completedSteps: {},
    srs: {},
    scenarioDone: {},
    translations: true
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return defaultState();
    return Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) {
    return defaultState();
  }
}

let storageAvailable = storageOk();

function saveState() {
  if (!storageAvailable) return;
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch (e) {
    storageAvailable = false;
  }
}

function storageOk() {
  try {
    const probe = "__zn_probe__";
    localStorage.setItem(probe, "1");
    localStorage.removeItem(probe);
    return true;
  } catch (e) {
    return false;
  }
}
