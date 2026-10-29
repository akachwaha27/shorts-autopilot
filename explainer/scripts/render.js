// Render a built explainer to MP4 (frames via headless Chromium -> ffmpeg) and its sound effects to WAV.
// usage: node scripts/render.js <built.render.html> <outdir> [--w 1280 --h 720] [--fps 30] [--test 1.5,7,12]
// Fonts: put the woff2 files listed in FONTS next to this script (or anywhere; edit the paths). Google Fonts is
// blocked in the Claude cloud sandbox, so the request for fonts.googleapis.com is answered with inline @font-face.
//   npm i @fontsource/fredoka @fontsource/silkscreen   then copy  node_modules/@fontsource/*/files/*latin-*-normal.woff2
const { chromium } = (() => { for (const m of [process.env.PLAYWRIGHT_MODULE, 'playwright', '/opt/npm-tools/node_modules/playwright']) { if (!m) continue; try { return require(m); } catch (e) { /* next */ } } throw new Error('playwright not found'); })();
const fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf('--' + k); return i >= 0 ? args[i + 1] : d; };
const [html, outdir] = args;
const W = +opt('w', 1280), Hh = +opt('h', 720), FPS = +opt('fps', 30), TEST = opt('test', null);
const FONTS = [['Fredoka', 400, 'fredoka-latin-400-normal.woff2'], ['Fredoka', 600, 'fredoka-latin-600-normal.woff2'], ['Fredoka', 700, 'fredoka-latin-700-normal.woff2'], ['Silkscreen', 400, 'silkscreen-latin-400-normal.woff2'], ['Space Grotesk', 400, 'space-grotesk-latin-400-normal.woff2'], ['Space Grotesk', 700, 'space-grotesk-latin-700-normal.woff2'], ['Permanent Marker', 400, 'permanent-marker-latin-400-normal.woff2'], ['Orbitron', 500, 'orbitron-latin-500-normal.woff2'], ['Orbitron', 800, 'orbitron-latin-800-normal.woff2'], ['Caveat', 700, 'caveat-latin-700-normal.woff2'], ['Archivo Black', 400, 'archivo-black-latin-400-normal.woff2'], ['Kalam', 400, 'kalam-latin-400-normal.woff2'], ['Kalam', 700, 'kalam-latin-700-normal.woff2'], ['Patrick Hand', 400, 'patrick-hand-latin-400-normal.woff2'], ['Press Start 2P', 400, 'press-start-2p-latin-400-normal.woff2']];
(async () => {
  fs.mkdirSync(outdir, { recursive: true });
  const fontDir = process.env.FONT_DIR || path.join(__dirname, '..', 'fonts');
  const css = FONTS.filter(([, , f]) => fs.existsSync(path.join(fontDir, f))).map(([fam, w, f]) => `@font-face{font-family:'${fam}';font-weight:${w};src:url(data:font/woff2;base64,${fs.readFileSync(path.join(fontDir, f)).toString('base64')}) format('woff2')}`).join('\n');
  const browser = await (process.env.CHROMIUM ? chromium.launch({ executablePath: process.env.CHROMIUM }) : chromium.launch());
  const page = await browser.newPage({ viewport: { width: W + 120, height: Hh + 180 } });
  page.on('pageerror', (e) => console.log('pageerror:', e.message));
  await page.route('**/fonts.googleapis.com/**', (r) => r.fulfill({ contentType: 'text/css', body: css }));
  await page.goto('file://' + path.resolve(html));
  await page.evaluate(() => window.READY);
  const D = await page.evaluate(() => window.DURATION);
  const grab = (t) => page.evaluate((t) => { window.seek(t); return document.getElementById('cv').toDataURL('image/jpeg', 0.93); }, t);
  if (opt('thumb', null) != null) { // thumbnail.jpg: the story's own window.thumbnail(ctx,W,H) if it has one, else the frame at --thumb <t>
    const d = await page.evaluate((tt) => { const cv = document.getElementById('cv'), c = cv.getContext('2d');
      if (window.thumbnail) { c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, cv.width, cv.height); window.thumbnail(c, cv.width, cv.height); } else window.seek(tt);
      return cv.toDataURL('image/jpeg', 0.9); }, +opt('thumb', '0'));
    fs.writeFileSync(path.join(outdir, 'thumbnail.jpg'), Buffer.from(d.split(',')[1], 'base64')); console.log('thumbnail.jpg');
    if (!TEST && args.includes('--thumb-only')) { await browser.close(); return; }
  }
  if (TEST) {
    for (const t of TEST.split(',').map(Number)) { const d = await grab(t); fs.writeFileSync(path.join(outdir, `shot_${t}.jpg`), Buffer.from(d.split(',')[1], 'base64')); console.log('frame at', t); }
  } else {
    const N = Math.ceil(D * FPS), video = path.join(outdir, 'video.mp4');
    const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'medium', video]);
    ff.stderr.on('data', (d) => process.stderr.write(d));
    for (let i = 0; i < N; i++) { const buf = Buffer.from((await grab(i / FPS)).split(',')[1], 'base64'); if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r)); if (i % 150 === 0) console.log('frame', i, '/', N); }
    ff.stdin.end(); await new Promise((r) => ff.on('close', r));
    for (const vo of [false, true]) {
      const b = await page.evaluate(async (vo) => { const r = await SOUND.renderOffline(window.scoreSound, window.DURATION, 48000, { voiceover: vo }); const n = r.inter.length, i16 = new Int16Array(n), g = r.peak > 0.98 ? 0.98 / r.peak : 1; for (let i = 0; i < n; i++) i16[i] = Math.max(-32767, Math.min(32767, r.inter[i] * g * 32767)); let s = ''; const u8 = new Uint8Array(i16.buffer); for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); }, vo);
      const pcm = Buffer.from(b, 'base64'), hdr = Buffer.alloc(44);
      hdr.write('RIFF', 0); hdr.writeUInt32LE(36 + pcm.length, 4); hdr.write('WAVE', 8); hdr.write('fmt ', 12); hdr.writeUInt32LE(16, 16); hdr.writeUInt16LE(1, 20); hdr.writeUInt16LE(2, 22); hdr.writeUInt32LE(48000, 24); hdr.writeUInt32LE(48000 * 4, 28); hdr.writeUInt16LE(4, 32); hdr.writeUInt16LE(16, 34); hdr.write('data', 36); hdr.writeUInt32LE(pcm.length, 40);
      fs.writeFileSync(path.join(outdir, vo ? 'effects_vo.wav' : 'effects_full.wav'), Buffer.concat([hdr, pcm]));
    }
    console.log('done:', video, '+ effects_vo.wav / effects_full.wav');
  }
  await browser.close();
})();
