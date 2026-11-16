# Band Nine Lab

Personal IELTS + professional-English platform. Static, framework-free: open `index.html` through any static server.

```
npx serve .        # or: python3 -m http.server 8000
```

## Structure

| File | Purpose |
|---|---|
| `index.html` | Shell, design tokens, all CSS |
| `app.js` | Core: i18n (EN/AR), state + persistence, capability wiring (AI marking, voices, dictation, cloud save), router, placement engine, scoring |
| `modules.js` | Grammar lessons, type-to-learn vocabulary (SRS), reading, listening + dictation, writing, speaking, professional module, study plan, progress, resources |
| `data/grammar.js` | 60-item CEFR-tagged adaptive item bank + 20 grammar lessons |
| `data/skills.js` | Reading passages, listening scripts, dictation sets, strategy guides |
| `data/content.js` | Band descriptors, writing tasks, speaking bank, vocabulary banks, professional content, resources |

## Scoring

- Grammar/vocab: adaptive staircase over A1–C2 items; final level = rounded ability estimate; weak topics = topics with errors.
- Reading / Listening: raw correct → scaled to /40 → official IELTS conversion table (Academic or General Training).
- Writing / Speaking: Claude marks against the public band descriptors (via the artifact `sample` capability). Without AI, a heuristic estimate + a copy-paste prompt is shown.
- Overall = mean of the four skills rounded to the nearest half band (IELTS rule).

## Running outside claude.ai

Everything works in a normal browser except: AI marking (falls back to heuristics + prompt), Claude voices (falls back to the browser's speech synthesis), microphone dictation (falls back to typing), cloud save (falls back to localStorage). To add your own backend, replace `evaluateWriting`, `evaluateSpeaking` and `speakLines` in `app.js`.
