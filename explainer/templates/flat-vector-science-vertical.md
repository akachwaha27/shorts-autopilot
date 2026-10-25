# Flat-Vector Science, vertical (9:16) — Claude-written template

This is the style used for the "Ice in the Desert" Short (see `examples/ice-in-the-desert/flat-vector-vertical.js`). Paste the block below into Claude with your content; it reuses the shared `lib/harness.js` + `lib/sound.js` and the example file as the style guide.

---

I want an animated explainer Short made in the "Flat-Vector Science" visual style (Popular Explainer Looks), vertical 1080x1920, timed to my voiceover. Use `lib/harness.js`, `lib/sound.js` and `examples/ice-in-the-desert/flat-vector-vertical.js` from the explainer-style-templates repo as the style guide, and rebuild it around my content.

MY CONTENT:
[Describe your topic, or paste your script here. If this is left as is, ask me for it before building.]

MY VOICEOVER TIMING:
[Paste phrases.json from scripts/voice_timing.py, an SRT, or word timestamps. If nothing is here, generate the voiceover first (vidIQ voiceover, George storyteller voice), then run voice_timing.py.]

STORYBOARD FIRST: one HTML page with a still key frame per beat (6-10), drawn with the same scene functions the final piece will use, each with its time range, on-screen text, transition and key sounds. Wait for my OK, then build.

WHAT TO BUILD
- One self-contained HTML file: a 1080x1920 canvas scaled to fit, a control bar (play/pause, scrub, time, sound toggle, loop on), a "Load voiceover" file input with drag-and-drop; when audio is loaded it is the clock.
- `explainer(ctx, W, H_, t)` that tells MY CONTENT, `scoreSound(k)` for the effects, `window.seek`, `window.DURATION`, `window.scoreSound`. Every frame is a pure function of t (seeded randomness only).
- A BEATS table at the top with every phrase's start/end and its key word times; all animation reads from it.
- Fonts: Fredoka 400/600/700 (await document.fonts.load before the first draw).

HOW TO STAY IN THE STYLE
- Flat shapes with no outlines, a bold limited palette per scene, long drop shadows on every hero element (the `longShadow` helper), pill labels, big rounded type.
- Every scene has its OWN background (sky gradient + ground), and scenes change with a circle wipe centred on the cut time.
- Finishing passes on every frame: vignette + light film grain.
- Readable on a phone: headlines >= 100px, labels >= 40px, key numbers >= 110px. Fill the frame; keep the top 150px and bottom 200px clear of anything that matters (Shorts UI overlays).
- Draw the subject accurately for my topic and double-check the facts.

TIMING FROM THE VOICEOVER
- A visual lands on the word it illustrates (up to 0.2 s early, never late). Build the idea while it is explained, hold until the sentence ends, change scenes in the pauses.
- On-screen text is key words, labels and numbers only; no subtitles.
- DURATION = end of the last phrase + 1 s, ending on the takeaway.

SOUND (voiceover mode)
- Pops on labels, whooshes on wipes, ticks on counters, dings on reveals; minor sounds marked { minor: true }; big hits in pauses. Call SOUND.kit / SOUND.live with { voiceover: true }.

RENDER
- `node scripts/build.js shell-9x16.html story.js out.html`, then `node scripts/render.js out.render.html out/ --w 1080 --h 1920`, then `scripts/mix.sh out/video.mp4 voice.mp3 out/effects_vo.wav final.mp4`.
