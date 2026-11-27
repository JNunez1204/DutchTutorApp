# Zakelijk Nederlands — DutchTutorApp

A browser-based chat tutor that takes your Dutch from beginner to business level. Zero dependencies, no backend, no build step — everything runs locally in the browser.

## Features

### 💬 Lessons — 13 business chat scenarios (CEFR A2–C1)
- Small talk, weekly planning (A2) · introductions, phone calls, onboarding, complaints (B1) · meetings, emails, job interviews, performance reviews (B2) · negotiation, presentations (C1)
- Scripted tutor with fuzzy matching, escalating hints and model answers
- 🌱 **Branching scenario**: a phone call with an unhappy client where your choices decide the ending, with a live client-satisfaction meter
- 🔊 Text-to-speech on every tutor line (optional auto-play) — every dialogue doubles as listening practice
- 🎤 **Speech input**: speak your answer instead of typing (Chrome/Edge, nl-NL recognition)

### 🎧 Listening — dictation mode
- Hear business sentences via text-to-speech (0.8× or 1× speed), type what you hear, get scored

### 📖 Reading
- **Text bank**: three authentic-style business texts with clickable word translations (+🔊 pronunciation) and scored comprehension questions
- **Error spotting**: click the mistake in real business sentences (word order, de/het, spelling) with explanations

### 🗂️ Vocabulary — 89 business words
- Flip cards (click to reveal the meaning)
- Spaced-repetition review sessions (Again/Hard/Good/Easy, SRS boxes), sorted easiest → hardest

### 📝 Grammar
- 13 core teachings (V2 word order, verb-final subclauses, de/het, separable verbs, 'er', 'niet' placement, softening…) sorted by level
- 12 common mistakes with corrections

### 📈 Progress
- XP, day streak, scenario completion, mastered words — persisted in localStorage (with a visible warning if storage is blocked)

## Run it

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 — or simply open `index.html`. If the scripts ever fail to load, open `standalone.html`: the entire app in one file.

Text-to-speech and speech recognition use the browser's built-in Web Speech API — best in Chrome, Edge or Safari. No microphone/voice support needed for the typing modes.

## Project structure

```
index.html           UI shell
standalone.html      Single-file build (everything inlined)
styles.css           Styling
js/data.js           Scenarios, vocab, grammar, reading texts, dictation
js/engine.js         Matching engine (wildcards + fuzzy match), storage
js/tts.js            Web Speech API helpers (synthesis + recognition)
js/app.js            Views, chat flow, SRS, dictation, reading, branching
```
