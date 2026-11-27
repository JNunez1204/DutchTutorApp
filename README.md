# Zakelijk Nederlands — DutchTutorApp

A browser-based chat tutor that takes your Dutch from beginner to business level. Zero dependencies, no backend, no build step — everything runs locally in the browser.

## Features

- **12 business chat scenarios** (64 dialogue steps) across CEFR levels A2–C1: small talk, weekly planning, introductions, meetings, emails, phone calls, complaints, interviews, performance reviews, negotiation and presentations
- **Scripted tutor engine** that accepts multiple correct phrasings, fuzzy-matches near-misses, and coaches with escalating hints, structure nudges and model answers
- **89-word business vocabulary trainer** with spaced repetition (Again/Hard/Good/Easy, SRS boxes) filterable by topic and level
- **Grammar essentials** for business Dutch: V2 word order, verb-final subclauses, u/je, polite questions
- **Progress tracking**: XP, day streak, scenario completion, mastered words — persisted in localStorage
- Optional English translations toggle

## Run it

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 — or simply open `index.html` in a browser.

## Project structure

```
index.html        UI shell
styles.css        Styling
js/data.js        Scenario dialogues, vocabulary, grammar topics
js/engine.js      Matching engine (wildcards + fuzzy match), state persistence
js/app.js         Views, chat flow, SRS review, progress
```
