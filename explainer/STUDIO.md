# Explainer studio: one video made entirely inside Claude

The scheduled tasks "Zorbly explainer Shorts" and "Zorbly explainer long videos" follow this file. Each run makes ONE
video from start to finish in the Claude sandbox, for free (no paid APIs): a script, a Kokoro voiceover, a canvas
animation written from one of Ashu's AI Style Atlas prompts (picked at random), a headless render, and then it
hands the MP4 to the bot through a `drop/<id>` branch. The bot (autopilot/drops.py) takes it from there: Telegram
preview with Publish / Skip, YouTube upload within the free quota, peak-time slot.

The runs are unattended: no storyboard approval, no "ship it?" questions. Ashu's Telegram Publish button is the gate.

| | Short | Long |
|---|---|---|
| Canvas | 1080x1920 (`shell-9x16.html`) | 1280x720 (`shell-16x9.html`) |
| Script | 110-135 words, 20-30 phrases | 420-540 words (3-4 min), 70-110 phrases |
| Voice + tail | must end under 59 s | 3-4 min |
| Beats / scenes | 7-10 | 20-35, a new scene every 6-12 s |

## 0. Setup
```bash
cd /home/claude/shorts-autopilot && git pull --rebase   # or: git clone https://github.com/akachwaha27/shorts-autopilot
pip install -q kokoro-onnx soundfile --break-system-packages
mkdir -p ~/.claude/youtube && cp content/voice.md ~/.claude/youtube/voice.md
```
The style prompts and their two library files are third-party (Futurepedia's AI Style Atlas), so they are NOT in
this public repo. Fetch them from Ashu's private **Explainer Toolkit** artifact with the Artifact tool:
`action: "read"`, `url: "https://claude.ai/artifact/LS2xddGa8sUMVQHLQKXG49"`,
`paths: ["lib/harness.js", "lib/sound.js", "<the template from step 1>"]`, then copy them into `explainer/lib/` and
`explainer/templates/` (both git-ignored). Never commit them.

## 1. Pick
`python3 explainer/scripts/pick.py short` (or `long`) prints a random style, its template, shell and canvas size,
and the topics made recently. Read the whole template (`MY CONTENT` / `MY VOICEOVER TIMING` are the slots, the
`REFERENCE STYLE SOURCE` is the style guide; the H library and sound kit are the files in `lib/`).

Topic: a Zack D Films-shaped question with ONE mechanism, one number and one visual payoff: "How did X work?",
"Why does X happen?", "What happens when X?", "How is X made?". Ideas: `explainer/topics/zack-d-films-style-explainers.md`
plus your own. Match the style (ancient tech → ukiyo-e / cut-paper / claymation / voxel-like low-poly; machines →
synthwave / pixel / flat-vector; nature → low-poly / cut-paper / napkin; body → flat-vector / kawaii / chalkboard).
Never repeat a topic from pick.py's `recent_topics`, explainer/log.json or archive/videos.json (titles), even reworded.
Never reuse a Zack D Films subject, script, character or scene. Content rules (content/voice.md): 13+, nothing
gory, medical-advice, violent, tragic, political, religious, or about real living people.
Long videos: one bigger question walked through 4-6 chapters (history → how it works → a surprising detail → the
numbers → why it matters today), each chapter with its own scenes.

## 2. Facts and script
Verify every claim with a web search; keep the URLs for the description. Use commonly cited numbers and hedge
("historians think") where sources disagree. Voice per content/voice.md: friendly, curious, "you", contractions,
numbers as said. Hook first (<3 s, the question itself), the key number spoken, payoff last; Shorts end on ONE
comment question that loops back to the hook. Save `script.txt` with one phrase per line (split at commas/colons
where a narrator breathes; a phrase is 3-12 words).

## 3. Voiceover (free, offline)
```bash
W=/home/claude/xwork/<id>   # <id> = YYYYMMDD-<slug>, e.g. 20261026-roman-hypocaust
python3 explainer/scripts/tts.py $W/script.txt $W --voice am_michael   # voice.wav, phrases.json, captions.srt
```
Phrase times in phrases.json are exact (each phrase is synthesised alone). A Short must come out at 58 s or less
(cut words if not). Voices: am_michael (default), bm_george (British storyteller, good for history), am_fenrir.

## 4. Build the animation
Write `$W/story.js` exactly as the template's WHAT TO BUILD section asks, with MY CONTENT = script.txt and MY
VOICEOVER TIMING = phrases.json, and with these house rules (the template wins on style, these win on format):
- Expose `window.BEATS`, `window.DURATION` (last phrase end + 1 s), `window.explainer(ctx, W, H_, t)`,
  `window.scoreSound(k)` and, for long videos, `window.thumbnail(ctx, W, H_)` (a still frame in the style with
  2-4 huge words; for Shorts it is optional). Wrap it in an IIFE like `examples/ice-in-the-desert/flat-vector-vertical.js`.
- The reference sources are 1280x720. For Shorts, re-lay everything out for 1080x1920: subject in the middle
  60%, headlines >=100px, labels >=44px, key numbers >=120px, nothing important in the top 150 px or bottom 260 px.
- BEATS at the top, copied from phrases.json; every visual lands on its word (<=0.2 s early, never late).
- Every scene its own background; change scenes the medium's own way; mix continuous camera moves and cuts.
- Pure function of t, seeded randomness only, cache static layers (the render seeks frames out of order).
- Sound in voiceover mode (`{ voiceover: true }`), minor sounds marked minor.
- No storyboard step (unattended run); say so in the log.

## 5. Render and check
```bash
cd explainer
node scripts/build.js <shell> $W/story.js $W/out.html
node scripts/render.js $W/out.render.html $W/out --w <W> --h <H> --test 1,<4 more times spread over the video>
```
Read every `shot_*.jpg`. Fix cropped subjects, overlapping or tiny labels, empty frames, text in the Shorts
UI zones, anything that doesn't look like the style. Re-test until clean (max 3 rounds), then:
```bash
node scripts/render.js $W/out.render.html $W/out --w <W> --h <H> --thumb <t>   # full render (~2 min per minute) + thumbnail.jpg
bash scripts/mix.sh $W/out/video.mp4 $W/voice.wav $W/out/effects_vo.wav $W/final.mp4
```
Check `final.mp4` with ffprobe (duration, audio stream) and look at 2 frames pulled with ffmpeg.

## 6. Package and send
Write `$W/meta.json`: `kind`, `title` (<=60 chars, the question; Shorts may end with one emoji), `description`
(2 sentences in search words; blank line; "Sources:" + up to 3 URLs; blank line; "Animated in the <style> style."),
`hashtags` (Shorts: exactly 4 starting `#shorts`; long: 3 without #shorts), `tags` (10-15), `pinned_comment`
(one real question), `thumbnail_text` (<=3 words), `style`, `topic`, `script` (the text), `key_facts`, `category: "27"`.
Score the title with `python3 tools/yt_skill/title.py --title "..." --thumb "..." --json` and the hook with
`python3 tools/yt_skill/hookscore.py --hook "<first line>"`; improve weak ones before sending.
```bash
python3 explainer/scripts/make_drop.py $W <id>   # pushes drop/<id>; the bot picks it up within ~20 min
```
Then append a row to `explainer/log.json` — `{"date", "id", "kind", "style", "topic", "title", "seconds", "words"}` —
and copy `story.js`, `script.txt`, `phrases.json`, `meta.json` into `explainer/made/<id>/` (small text files only,
never video, audio, lib/ or templates/). Commit and push to main:
`git add explainer/log.json explainer/made && git commit -m "explainer: <title>" && git pull --rebase && git push`.

## If something breaks
Fix it and carry on if you can (a bad frame, a long Short, a missing font). If the run can't finish (template
artifact unreadable, push refused, render crash you can't fix), push nothing half-made and send a push
notification saying which step failed and why.
