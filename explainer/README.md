# explainer/ — code-drawn explainer videos made entirely inside Claude

Zack D Films-style "how does it work" explainers: a canvas animation (a pure function of time) written by Claude from
one of Ashu's AI Style Atlas style prompts, voiced for free with Kokoro, rendered headlessly to MP4 and handed to the
bot on a `drop/<id>` branch. Daily: 4 Shorts (1080x1920, <60 s) and 2 long videos (1280x720, 3-4 min), random style each.

**Runbook: [STUDIO.md](STUDIO.md)** (what every scheduled run does, step by step).

| Path | What |
|---|---|
| `scripts/pick.py` | random style (not one of the last 4) + recent topics |
| `scripts/tts.py` | free offline Kokoro voiceover → voice.wav, exact phrases.json, captions.srt |
| `scripts/build.js` | shell + libs + story.js → one HTML (+ `.render.html`) |
| `scripts/render.js` | headless Chromium → MP4 frames, effects WAVs, test shots, thumbnail.jpg |
| `scripts/mix.sh` | video + voice + ducked effects → final MP4 |
| `scripts/make_drop.py` | push the finished video as branch `drop/<id>` for the bot |
| `scripts/voice_timing.py` | phrase timing from a recorded voiceover (for voices made elsewhere) |
| `templates/flat-vector-science-vertical.md` | Claude-written vertical template (no third-party code) |
| `examples/ice-in-the-desert/` | the first finished Short: story script, player shells, voice timing |
| `topics/` | topic backlog with style pairings |
| `made/<id>/` | script, timing, story.js and metadata of every video made |
| `log.json` | one row per video (style rotation, no repeated topics) |
| `fonts/` | Fredoka + Silkscreen woff2 (OFL) for offline rendering |

The style templates (`templates/*.txt`) and `lib/harness.js` + `lib/sound.js` are third-party and git-ignored; runs
fetch them from Ashu's private Explainer Toolkit artifact.
