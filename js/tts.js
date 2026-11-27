let nlVoice = null;

function ttsAvailable() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function pickVoice() {
  if (!ttsAvailable()) return;
  const voices = window.speechSynthesis.getVoices();
  nlVoice =
    voices.find((v) => v.lang === "nl-NL") ||
    voices.find((v) => v.lang && v.lang.indexOf("nl") === 0) ||
    null;
}

if (ttsAvailable()) {
  pickVoice();
  window.speechSynthesis.onvoiceschanged = pickVoice;
}

function speak(text, rate, onend) {
  if (!ttsAvailable()) {
    if (onend) onend();
    return;
  }
  window.speechSynthesis.cancel();
  const u = new window.SpeechSynthesisUtterance(text);
  u.lang = "nl-NL";
  if (nlVoice) u.voice = nlVoice;
  u.rate = rate || 1;
  if (onend) u.onend = onend;
  window.speechSynthesis.speak(u);
}

function stopSpeaking() {
  if (ttsAvailable()) window.speechSynthesis.cancel();
}

function sttAvailable() {
  return (
    typeof window !== "undefined" &&
    !!(window.SpeechRecognition || window.webkitSpeechRecognition)
  );
}

let recognition = null;
let listening = false;

function toggleListening(onResult, onStart, onEnd) {
  if (!sttAvailable()) return false;
  if (listening) {
    try { recognition.stop(); } catch (e) {}
    return true;
  }
  const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new Ctor();
  recognition.lang = "nl-NL";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };
  recognition.onstart = () => {
    listening = true;
    if (onStart) onStart();
  };
  recognition.onend = () => {
    listening = false;
    if (onEnd) onEnd();
  };
  recognition.onerror = () => {
    listening = false;
    if (onEnd) onEnd();
  };
  try {
    recognition.start();
  } catch (e) {
    listening = false;
  }
  return true;
}

function isListening() {
  return listening;
}
