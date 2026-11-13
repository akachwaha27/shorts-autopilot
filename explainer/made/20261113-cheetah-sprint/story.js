// ================= Low-Poly Faceted, vertical 1080x1920: "Why does a cheetah quit after 20 seconds?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W = 1080, HH = 1920;
  try { document.fonts.load('700 48px "Space Grotesk"'); } catch (e) { /* render anyway */ }
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael take, speed 1.05) ----------
  const BEATS = [
    { s: 0.25, e: 2.31, w: {'a': 0.25, 'cheetah': 0.32, 'quits': 0.78, 'after': 1.11, 'twenty': 1.45, 'seconds': 1.84} }, // 0 A cheetah quits after twenty seconds,
    { s: 2.66, e: 3.94, w: {'and': 2.66, 'youd': 2.85, 'never': 3.11, 'guess': 3.43, 'why': 3.75} }, // 1 and you'd never guess why.
    { s: 4.29, e: 6.62, w: {'it': 4.29, 'hits': 4.43, 'about': 4.69, 'a': 5.02, 'hundred': 5.09, 'kilometers': 5.56, 'an': 6.22, 'hour': 6.36} }, // 2 It hits about a hundred kilometers an hour,
    { s: 7.17, e: 9.89, w: {'zero': 7.17, 'to': 7.47, 'seventytwo': 7.62, 'in': 8.38, 'two': 8.53, 'and': 8.76, 'a': 8.98, 'half': 9.06, 'seconds': 9.36} }, // 3 zero to seventy-two in two and a half seconds.
    { s: 10.27, e: 12.08, w: {'each': 10.27, 'stride': 10.54, 'covers': 10.94, 'seven': 11.34, 'meters': 11.68} }, // 4 Each stride covers seven meters,
    { s: 12.47, e: 14.06, w: {'four': 12.47, 'strides': 12.76, 'every': 13.26, 'second': 13.62} }, // 5 four strides every second.
    { s: 14.48, e: 16.21, w: {'its': 14.48, 'spine': 14.7, 'bends': 15.06, 'like': 15.42, 'a': 15.71, 'spring': 15.78} }, // 6 Its spine bends like a spring,
    { s: 16.6, e: 18.41, w: {'its': 16.6, 'lungs': 16.84, 'and': 17.23, 'heart': 17.47, 'are': 17.86, 'huge': 18.1} }, // 7 its lungs and heart are huge,
    { s: 18.78, e: 20.6, w: {'and': 18.78, 'its': 18.99, 'tail': 19.19, 'steers': 19.46, 'like': 19.86, 'a': 20.13, 'rudder': 20.2} }, // 8 and its tail steers like a rudder.
    { s: 20.95, e: 23.37, w: {'people': 20.95, 'thought': 21.31, 'it': 21.72, 'stopped': 21.84, 'because': 22.25, 'it2': 22.66, 'overheated': 22.78} }, // 9 People thought it stopped because it overheated.
    { s: 23.71, e: 28.03, w: {'but': 23.71, 'in': 24.02, '2013': 24.23, 'scientists': 24.64, 'put': 25.67, 'sensors': 25.97, 'on': 26.69, 'six': 26.9, 'cheetahs': 27.21} }, // 10 But in 2013, scientists put sensors on six cheetahs.
    { s: 28.42, e: 31.0, w: {'during': 28.42, 'the': 28.86, 'chase': 29.08, 'body': 29.45, 'heat': 29.75, 'barely': 30.04, 'changed': 30.48} }, // 11 During the chase, body heat barely changed.
    { s: 31.41, e: 33.08, w: {'it': 31.41, 'only': 31.56, 'jumped': 31.85, 'after': 32.28, 'a': 32.65, 'catch': 32.72} }, // 12 It only jumped after a catch,
    { s: 33.24, e: 36.04, w: {'probably': 33.24, 'from': 33.92, 'stress': 34.26, 'with': 34.77, 'lions': 35.11, 'nearby': 35.53} }, // 13 probably from stress, with lions nearby.
    { s: 36.52, e: 37.69, w: {'so': 36.52, 'what': 36.68, 'stops': 36.99, 'them': 37.38} }, // 14 So what stops them?
    { s: 38.16, e: 41.18, w: {'that': 38.16, 'springy': 38.49, 'sprint': 39.06, 'burns': 39.55, 'energy': 39.96, 'crazy': 40.44, 'fast': 40.85} }, // 15 That springy sprint burns energy crazy fast,
    { s: 41.65, e: 44.21, w: {'so': 41.65, 'a': 41.79, 'full': 41.86, 'sprint': 42.15, 'lasts': 42.57, 'about': 42.93, 'twenty': 43.29, 'seconds': 43.71} }, // 16 so a full sprint lasts about twenty seconds,
    { s: 44.59, e: 46.1, w: {'just': 44.59, 'a': 44.88, 'few': 44.95, 'hundred': 45.16, 'meters': 45.67} }, // 17 just a few hundred meters.
    { s: 46.46, e: 48.34, w: {'miss': 46.46, 'by': 46.73, 'then': 46.86, 'and': 47.13, 'the': 47.33, 'cheetahs': 47.53, 'done': 48.07} }, // 18 Miss by then, and the cheetah's done.
    { s: 48.77, e: 51.23, w: {'only': 48.77, 'about': 49.08, 'half': 49.46, 'its': 49.77, 'chases': 50.0, 'end': 50.46, 'in': 50.69, 'a': 50.85, 'meal': 50.92} }, // 19 Only about half its chases end in a meal.
    { s: 51.62, e: 53.81, w: {'would': 51.62, 'you': 51.89, 'rather': 52.06, 'be': 52.39, 'that': 52.5, 'fast': 52.72, 'for': 52.93, 'twenty': 53.1, 'seconds': 53.43} }, // 20 Would you rather be that fast for twenty seconds,
    { s: 54.17, e: 55.51, w: {'or': 54.17, 'slower': 54.36, 'all': 54.94, 'day': 55.23} }, // 21 or slower all day?
  ];
  const P = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in ' + i); return v; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scenes: A savanna sprint (20 s, why?, 100 km/h, 0-72 in 2.5 s) -> B stride lab (7 m, x4/s, spine spring, lungs+heart, tail rudder)
  //         -> C heat myth (overheated?, 2013 sensors on 6, barely changed, +1.3 after catch, stress/lions) -> D the real limit (energy, 20 s, ~300 m, miss = done, 1 in 2) -> E question
  const CUT = { lab: BEATS[4].s - 0.3, myth: BEATS[9].s - 0.3, limit: BEATS[14].s - 0.3, end: BEATS[20].s - 0.3 };
  const CUTS = [CUT.lab, CUT.myth, CUT.limit, CUT.end];
  const WIPE = 0.5;
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const BK = (t, a, d = 0.3) => H.ease.back(ph(t, a, a + d));
  const win = (t, a, b, fi = 0.3, fo = 0.3) => H.ease.back(ph(t, a, a + fi)) * (1 - H.ease.inOut(ph(t, b, b + fo)));
  const INK = '#2a1f4f', CORAL = '#e8603c', PEACH = '#ffb08a', MINT = '#3ccf9a';
  const FONT = (px) => `700 ${px}px "Space Grotesk"`;
  // cut-corner tag (faceted label), from the reference
  function lpTag(ctx, x, y, text, o = {}) {
    const k = o.k ?? 1; if (k <= 0.01) return;
    ctx.save();
    ctx.font = o.font || FONT(48);
    const fsz = parseInt((ctx.font.match(/(\d+)px/) || [0, 48])[1]);
    const w = ctx.measureText(text).width + fsz * 1.3, h = o.h || Math.round(fsz * 1.75), ch = h * 0.32;
    ctx.translate(x, y); ctx.scale(k, k);
    const pts = [[-w / 2 + ch, -h / 2], [w / 2, -h / 2], [w / 2, h / 2 - ch], [w / 2 - ch, h / 2], [-w / 2, h / 2], [-w / 2, -h / 2 + ch]];
    ctx.fillStyle = o.shadow || 'rgba(40,20,70,0.35)'; ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0] + 6, p[1] + 6) : ctx.moveTo(p[0] + 6, p[1] + 6)); ctx.closePath(); ctx.fill();
    const bg = H.hex(o.bg || '#fff6f0');
    ctx.fillStyle = H.rgba(bg); ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.closePath(); ctx.fill();
    ctx.fillStyle = H.rgba(H.mix(bg, [255, 255, 255], 0.5)); ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); ctx.lineTo(pts[1][0], pts[1][1]); ctx.lineTo(w / 2 - h * 0.6, 0); ctx.lineTo(-w / 2, 0); ctx.lineTo(pts[5][0], pts[5][1]); ctx.closePath(); ctx.fill();
    ctx.fillStyle = o.col || INK; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 0, 2);
    ctx.restore();
  }
  // faceted ribbon arrow, from the reference
  function lpArrow(ctx, a, c, b, prog, colA, w = 18) {
    if (prog <= 0) return null;
    const q = (u) => [(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * c[0] + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * c[1] + u * u * b[1]];
    const N = 8, pts = []; for (let i = 0; i <= N; i++) pts.push(q(prog * i / N));
    const light = H.rgba(H.mix(colA, [255, 255, 255], 0.3)), dark = H.rgba(H.mix(colA, [40, 20, 70], 0.25));
    const end = pts.length - 1;
    for (let i = 0; i < end; i++) {
      const p0 = pts[i], p1 = pts[i + 1], dx = p1[0] - p0[0], dy = p1[1] - p0[1], L = Math.hypot(dx, dy) || 1;
      const nx = -dy / L * w / 2, ny = dx / L * w / 2, shrink = i === end - 1 ? 0.35 : 0, p1b = [p1[0] - dx * shrink, p1[1] - dy * shrink];
      ctx.fillStyle = light; ctx.beginPath(); ctx.moveTo(p0[0] + nx, p0[1] + ny); ctx.lineTo(p1b[0] + nx, p1b[1] + ny); ctx.lineTo(p1b[0], p1b[1]); ctx.lineTo(p0[0], p0[1]); ctx.closePath(); ctx.fill();
      ctx.fillStyle = dark; ctx.beginPath(); ctx.moveTo(p0[0] - nx, p0[1] - ny); ctx.lineTo(p1b[0] - nx, p1b[1] - ny); ctx.lineTo(p1b[0], p1b[1]); ctx.lineTo(p0[0], p0[1]); ctx.closePath(); ctx.fill();
    }
    const e = pts[end], e0 = pts[end - 1], ang = Math.atan2(e[1] - e0[1], e[0] - e0[0]);
    ctx.save(); ctx.translate(e[0], e[1]); ctx.rotate(ang);
    ctx.fillStyle = light; ctx.beginPath(); ctx.moveTo(6, 0); ctx.lineTo(-w * 1.4, -w * 1.1); ctx.lineTo(-w * 1.4, 0); ctx.closePath(); ctx.fill();
    ctx.fillStyle = dark; ctx.beginPath(); ctx.moveTo(6, 0); ctx.lineTo(-w * 1.4, w * 1.1); ctx.lineTo(-w * 1.4, 0); ctx.closePath(); ctx.fill();
    ctx.restore(); return q;
  }
  // hex badge (check / cross), from the reference
  function hexBadge(ctx, x, y, k, ok, r = 46) {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.rotate(0.12);
    ctx.fillStyle = ok ? MINT : '#ff5a4a'; ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.beginPath(); ctx.moveTo(0, 0); for (let i = 3; i <= 6; i++) { const a = i / 6 * Math.PI * 2; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = r * 0.2; ctx.lineJoin = 'miter'; ctx.beginPath(); const s = r / 24;
    if (ok) { ctx.moveTo(-10 * s, 0); ctx.lineTo(-3 * s, 8 * s); ctx.lineTo(11 * s, -9 * s); } else { ctx.moveTo(-8 * s, -8 * s); ctx.lineTo(8 * s, 8 * s); ctx.moveTo(8 * s, -8 * s); ctx.lineTo(-8 * s, 8 * s); }
    ctx.stroke(); ctx.restore();
  }
  function tri2(ctx, a, b, c, col) { ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  function gem(ctx, x, y, r, c, rot = 0) { // small faceted diamond
    const col = Array.isArray(c) ? c : H.hex(c), L = H.rgba(H.mix(col, [255, 255, 255], 0.35)), D = H.rgba(H.mix(col, [40, 20, 70], 0.25)), M = H.rgba(col);
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    tri2(ctx, [0, -r], [r * 0.7, 0], [0, 0], L); tri2(ctx, [0, -r], [-r * 0.7, 0], [0, 0], M); tri2(ctx, [-r * 0.7, 0], [0, r], [0, 0], D); tri2(ctx, [r * 0.7, 0], [0, r], [0, 0], M);
    ctx.restore();
  }
  function hexKnob(ctx, x, y, r, col, glow = 0) {
    if (glow > 0.01) { const g = ctx.createRadialGradient(x, y, r * 0.5, x, y, r * 3.2); g.addColorStop(0, `rgba(255,240,200,${0.7 * glow})`); g.addColorStop(1, 'rgba(255,240,200,0)'); ctx.fillStyle = g; ctx.fillRect(x - r * 3.4, y - r * 3.4, r * 6.8, r * 6.8); }
    for (let i = 0; i < 6; i++) { const a0 = i / 6 * Math.PI * 2 + 0.3, a1 = (i + 1) / 6 * Math.PI * 2 + 0.3; tri2(ctx, [x, y], [x + Math.cos(a0) * r, y + Math.sin(a0) * r], [x + Math.cos(a1) * r, y + Math.sin(a1) * r], H.rgba(H.mix(col, [255, 255, 255], 0.15 + 0.3 * Math.cos(a0 + 2.2)))); }
  }
  function bigNumber(ctx, x, y, str, px, k, fill = '#fff') {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.font = FONT(px); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = 'rgba(30,20,60,0.5)'; ctx.fillText(str, 8, 8); ctx.lineJoin = 'round'; ctx.lineWidth = px * 0.11; ctx.strokeStyle = INK; ctx.strokeText(str, 0, 0); ctx.fillStyle = fill; ctx.fillText(str, 0, 0);
    ctx.restore();
  }


  const BG = {};
  function mosaicLayer(key, top, bot, glow, glowCol, y1 = HH, cs = 120) {
    if (BG[key]) return BG[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(key.length * 31 + 7), nx = Math.ceil(W / cs) + 1, ny = Math.ceil(HH / cs) + 1, V = [];
    for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) row.push([i * cs + (i > 0 && i < nx ? r.range(-0.4, 0.4) * cs : 0), j * cs + (j > 0 && j < ny ? r.range(-0.4, 0.4) * cs : 0)]); V.push(row); }
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const a = V[j][i], b = V[j][i + 1], cc = V[j + 1][i], d = V[j + 1][i + 1];
      for (const f of (i + j) % 2 ? [[a, cc, b], [b, cc, d]] : [[a, cc, d], [a, d, b]]) {
        const cy = (f[0][1] + f[1][1] + f[2][1]) / 3, cx = (f[0][0] + f[1][0] + f[2][0]) / 3;
        let col = H.mix(top, bot, H.clamp(cy / y1));
        const gl = Math.max(0, 1 - Math.hypot(cx - glow[0], cy - glow[1]) / 700);
        col = H.mix(col, glowCol, gl * 0.45);
        col = col.map((v) => v * (0.94 + r() * 0.1));
        tri2(g, f[0], f[1], f[2], H.rgba(col));
      }
    }
    return (BG[key] = c);
  }
  function stars(ctx, n, ymax, seed, a0 = 0.8) { const R0 = H.rng(seed); for (let i = 0; i < n; i++) { const x = R0() * W, y = R0() * ymax, a = (1 - y / ymax) * R0() * a0; ctx.fillStyle = `rgba(255,240,255,${a})`; const s = R0() < 0.15 ? 4 : 2; ctx.fillRect(x, y, s, s); } }
  function facetSun(ctx, x, y, r, c0, c1, halo) {
    const g = ctx.createRadialGradient(x, y, r * 0.5, x, y, r * 6); g.addColorStop(0, halo); g.addColorStop(1, 'rgba(255,214,160,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    for (let i = 0; i < 14; i++) { const a0 = (i / 14) * Math.PI * 2, a1 = ((i + 1) / 14) * Math.PI * 2; tri2(ctx, [x, y], [x + Math.cos(a0) * r, y + Math.sin(a0) * r], [x + Math.cos(a1) * r, y + Math.sin(a1) * r], H.rgba(H.mix(c0, c1, 0.5 + 0.5 * Math.cos(a0 - 2.3)))); }
  }
  let LAYER = null, MOS = null;
  function mosaic() {
    if (MOS) return MOS;
    const r = H.rng(808), cs = 135, nx = 8, ny = 15, V = [];
    for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) row.push([i * cs + (i > 0 && i < nx ? r.range(-0.35, 0.35) * cs : 0), j * (HH / ny) + (j > 0 && j < ny ? r.range(-0.35, 0.35) * cs : 0)]); V.push(row); }
    const tr = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1]; for (const f of (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]]) { const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cy = (f[0][1] + f[1][1] + f[2][1]) / 3; tr.push({ f, cx, cy, d: (cy / HH) * 0.75 + (cx / W) * 0.12 + r() * 0.13 }); } }
    return (MOS = tr);
  }

  function explainer(ctx, W_, H_, t) {
    ctx.save(); ctx.lineJoin = 'round';
    let wipe = null;
    for (const c of CUTS) if (t >= c && t < c + WIPE) wipe = c;
    if (wipe != null) {
      scene(ctx, wipe - 0.001);
      if (!LAYER) LAYER = H.layer(W, HH);
      const lc = LAYER.getContext('2d'); lc.setTransform(1, 0, 0, 1, 0, 0); lc.clearRect(0, 0, W, HH); lc.lineJoin = 'round'; scene(lc, t);
      const u = (t - wipe) / WIPE;
      ctx.save(); ctx.beginPath();
      const flashes = [];
      for (const m of mosaic()) {
        const p = H.ease.out(H.clamp((u * 1.35 - m.d) / 0.35)); if (p <= 0) continue;
        const f = m.f.map((q) => [m.cx + (q[0] - m.cx) * p, m.cy + (q[1] - m.cy) * p]);
        ctx.moveTo(f[0][0], f[0][1]); ctx.lineTo(f[1][0], f[1][1]); ctx.lineTo(f[2][0], f[2][1]); ctx.closePath();
        if (p < 1) flashes.push([f, 1 - p]);
      }
      ctx.clip(); ctx.drawImage(LAYER, 0, 0); ctx.restore();
      for (const [f, a] of flashes) { ctx.fillStyle = `rgba(255,226,190,${a * 0.7})`; ctx.beginPath(); ctx.moveTo(f[0][0], f[0][1]); ctx.lineTo(f[1][0], f[1][1]); ctx.lineTo(f[2][0], f[2][1]); ctx.closePath(); ctx.fill(); }
    } else scene(ctx, t);
    header(ctx, t);
    ctx.restore();
  }

  function seg(ctx, a, b, w0, w1, col, dark = 0) {
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
    const p = [[a[0] + nx * w0, a[1] + ny * w0], [b[0] + nx * w1, b[1] + ny * w1], [b[0] - nx * w1, b[1] - ny * w1], [a[0] - nx * w0, a[1] - ny * w0]];
    const lit = H.mix(H.mix(col, [255, 255, 255], 0.16), [60, 30, 20], dark), shd = H.mix(col, [70, 36, 20], 0.24 + dark);
    tri2(ctx, a, p[0], p[1], H.rgba(lit)); tri2(ctx, a, p[1], b, H.rgba(lit));
    tri2(ctx, a, b, p[2], H.rgba(shd)); tri2(ctx, a, p[2], p[3], H.rgba(shd));
  }
  // =================== QUADRUPED (side view, faceted; local units: feet on y=0, facing +x) ===================
  const LIGHT = -2.2;
  const shadeA = (a) => 0.5 + 0.5 * Math.cos(a - LIGHT);
  const GOLD = [255, 214, 96];
  const CHEETAH = { body: [226, 164, 70], light: [255, 214, 130], dark: [150, 92, 40], belly: [250, 236, 206], len: 360, h: 240, spots: 46, tailN: 7, tear: true, seed: 11 };
  const GAZELLE = { body: [196, 128, 72], light: [236, 178, 116], dark: [120, 70, 40], belly: [252, 244, 230], len: 300, h: 250, spots: 0, tailN: 2, horns: true, stripe: true, seed: 23 };
  function knee(S, T, L1, L2, dirX) { // two-bone IK; knee pushed toward dirX (+1 forward, -1 back)
    let dx = T[0] - S[0], dy = T[1] - S[1], d = Math.hypot(dx, dy);
    const mx = L1 + L2 - 1; if (d > mx) { T = [S[0] + dx / d * mx, S[1] + dy / d * mx]; dx = T[0] - S[0]; dy = T[1] - S[1]; d = mx; }
    const a = (L1 * L1 - L2 * L2 + d * d) / (2 * d), h = Math.sqrt(Math.max(0, L1 * L1 - a * a));
    const px = S[0] + a * dx / d, py = S[1] + a * dy / d;
    let nx = -dy / d, ny = dx / d; if (nx * dirX < 0) { nx = -nx; ny = -ny; }
    return [[px + nx * h, py + ny * h], T];
  }
  const lerp2 = (a, b, u) => [H.lerp(a[0], b[0], u), H.lerp(a[1], b[1], u)];
  function poly(ctx, pts, base, light, dark, seed, inner = 0.55) { // faceted fill: outer ring + inner ring + centre
    const n = pts.length; let cx = 0, cy = 0; pts.forEach((p) => { cx += p[0]; cy += p[1]; }); cx /= n; cy /= n;
    const r = H.rng(seed), C0 = [cx, cy - 4];
    const inn = pts.map((p, i) => { const q = pts[(i + 1) % n]; return [H.lerp(cx, (p[0] + q[0]) / 2, inner), H.lerp(cy, (p[1] + q[1]) / 2, inner)]; });
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n, h = (i + n - 1) % n;
      const fs = [[pts[i], pts[j], inn[i]], [pts[i], inn[i], inn[h]], [inn[h], inn[i], C0]];
      fs.forEach((f, k) => {
        const mx = (f[0][0] + f[1][0] + f[2][0]) / 3 - cx, my = (f[0][1] + f[1][1] + f[2][1]) / 3 - cy;
        const sh = shadeA(Math.atan2(my, mx)) * (k === 2 ? 0.6 : 1) + (k === 2 ? 0.25 : 0);
        let col = H.mix(dark, light, H.clamp(sh * 0.85 + 0.1)); col = col.map((v) => Math.min(255, v * (0.95 + r() * 0.09)));
        tri2(ctx, f[0], f[1], f[2], H.rgba(col));
      });
    }
  }
  // o: { x, y, s, dir, ph (gallop cycles; null = standing), ext (0..1 override), spineGlow, chestGlow, tailGlow, tailSwing, pant, sensor, headUp }
  function quad(ctx, o, sp) {
    const s = o.s || 1, dir = o.dir || 1, run = o.ph != null, w = 2 * Math.PI * (o.ph || 0);
    const e = o.ext != null ? o.ext : run ? 0.5 + 0.5 * Math.sin(w) : 0.35;
    const bob = run ? -Math.abs(Math.cos(w)) * 22 - 14 : (o.ext != null ? 0 : -sp.h * 0.1);
    const L = sp.len, Hh = sp.h, r = H.rng(sp.seed);
    ctx.save(); ctx.translate(o.x, o.y); ctx.scale(s * dir, s);
    const map = (p) => [o.x + p[0] * s * dir, o.y + p[1] * s];
    const S = [L * 0.30 + L * 0.07 * e, -Hh + bob], Hp = [-L * 0.32 - L * 0.08 * e, -Hh * 0.98 + bob];
    const arch = run ? (1 - e) * Hh * 0.2 : Hh * 0.04;
    const mid = [(S[0] + Hp[0]) / 2, (S[1] + Hp[1]) / 2 - arch - Hh * 0.05];
    const top = [[Hp[0] - L * 0.04, Hp[1] - Hh * 0.03], [H.lerp(Hp[0], mid[0], 0.5), H.lerp(Hp[1], mid[1], 0.6) - Hh * 0.02], mid, [H.lerp(mid[0], S[0], 0.5), H.lerp(mid[1], S[1], 0.5) - Hh * 0.03], [S[0], S[1] - Hh * 0.07]];
    const tuck = sp === CHEETAH ? 0.22 : 0.3;
    const bot = [[S[0] + L * 0.09, S[1] + Hh * 0.04], [S[0] + L * 0.07, S[1] + Hh * 0.30], [S[0] - L * 0.07, S[1] + Hh * 0.42], [mid[0] + L * 0.02, mid[1] + Hh * (tuck + 0.12)], [Hp[0] + L * 0.05, Hp[1] + Hh * 0.33], [Hp[0] - L * 0.12, Hp[1] + Hh * 0.1]];
    const body = top.concat(bot);
    // legs (far side first, darker)
    const F0 = [S[0] - L * 0.02, S[1] + Hh * 0.24], R0 = [Hp[0] + L * 0.04, Hp[1] + Hh * 0.2];
    const legs = [];
    for (const far of [true, false]) {
      const off = far ? 0.45 : 0;
      const ef = run ? 0.5 + 0.5 * Math.sin(w + off) : 0.35, lf = run ? Hh * (0.06 + 0.22 * Math.max(0, Math.cos(w + off))) : 0;
      const ftx = run || o.ext != null ? S[0] + H.lerp(-L * 0.34, L * 0.5, o.ext != null ? o.ext : ef) : S[0] - L * 0.02 + (far ? L * 0.07 : 0);
      const fty = o.ext != null && !run ? -Hh * 0.12 : -lf;
      const rtx = run || o.ext != null ? Hp[0] + H.lerp(L * 0.42, -L * 0.5, o.ext != null ? o.ext : ef) : Hp[0] + L * 0.03 + (far ? -L * 0.06 : 0);
      const rty = o.ext != null && !run ? -Hh * 0.1 : -lf * 0.9;
      const [fk, ft] = knee(F0, [ftx, fty], Hh * 0.44, Hh * 0.48, 1);
      const [rk, rt] = knee(R0, [rtx, rty], Hh * 0.46, Hh * 0.56, -1);
      legs.push({ far, f: [F0, fk, ft], r: [R0, rk, rt] });
    }
    const drawLeg = (pts, col, dark, wd) => { seg(ctx, pts[0], pts[1], wd, wd * 0.62, col, dark); seg(ctx, pts[1], pts[2], wd * 0.6, wd * 0.42, col, dark + 0.04); tri2(ctx, [pts[2][0] - 14, pts[2][1] + 4], [pts[2][0] + 22, pts[2][1] + 2], [pts[2][0] + 4, pts[2][1] - 16], H.rgba(H.mix(sp.dark, [40, 30, 30], 0.4))); };
    const wd = sp === CHEETAH ? 26 : 20;
    legs.filter((l) => l.far).forEach((l) => { drawLeg(l.r, sp.body, 0.22, wd); drawLeg(l.f, sp.body, 0.22, wd * 0.9); });
    // tail (behind body)
    const tailPts = [[Hp[0] - L * 0.1, Hp[1] + Hh * 0.04]];
    let ang = Math.PI * 0.78 + (run ? Math.sin(w) * 0.18 : Math.sin((o.t || 0) * 1.6) * 0.06) + (o.tailSwing || 0) * 0.5;
    const segL = sp === CHEETAH ? L * 0.12 : L * 0.08;
    for (let i = 0; i < sp.tailN; i++) { ang += (sp === CHEETAH ? -0.11 : 0.3) + (o.tailSwing || 0) * 0.18 * Math.sin(i * 0.7); const p = tailPts[i]; tailPts.push([p[0] + Math.cos(ang) * segL, p[1] + Math.sin(ang) * segL]); }
    for (let i = 0; i < sp.tailN; i++) {
      let col = sp.body; if (sp === CHEETAH && i >= sp.tailN - 3) col = (i % 2) ? [50, 36, 30] : sp.light; if (sp === CHEETAH && i === sp.tailN - 1) col = [250, 244, 230];
      if (o.tailGlow) col = H.mix(col, GOLD, o.tailGlow * 0.7);
      const w0 = (sp === CHEETAH ? 15 : 12) * (1 - i / (sp.tailN + 2)), w1 = w0 * 0.85;
      seg(ctx, tailPts[i], tailPts[i + 1], w0, w1, col, 0.02);
    }
    // body
    poly(ctx, body, sp.body, sp.light, sp.dark, sp.seed);
    // belly light strip
    tri2(ctx, bot[2], bot[3], [H.lerp(bot[2][0], bot[3][0], 0.5), H.lerp(bot[2][1], bot[3][1], 0.5) - Hh * 0.08], H.rgba(sp.belly, 0.85));
    tri2(ctx, bot[3], bot[4], [H.lerp(bot[3][0], bot[4][0], 0.5), H.lerp(bot[3][1], bot[4][1], 0.5) - Hh * 0.07], H.rgba(sp.belly, 0.7));
    if (sp.stripe) { ctx.fillStyle = H.rgba([70, 40, 30], 0.75); ctx.beginPath(); ctx.moveTo(bot[1][0] - 20, bot[1][1] - 18); ctx.lineTo(bot[4][0], bot[4][1] - 30); ctx.lineTo(bot[4][0] + 10, bot[4][1] - 12); ctx.lineTo(bot[2][0], bot[2][1] - 6); ctx.closePath(); ctx.fill(); }
    // spots follow the deforming body
    const onTop = (u) => { const k = u * (top.length - 1), i = Math.min(top.length - 2, Math.floor(k)); return lerp2(top[i], top[i + 1], k - i); };
    const botR = [bot[5], bot[4], bot[3], bot[2], bot[1]];
    const onBot = (u) => { const k = u * (botR.length - 1), i = Math.min(botR.length - 2, Math.floor(k)); return lerp2(botR[i], botR[i + 1], k - i); };
    for (let i = 0; i < sp.spots; i++) { const u = r.range(0.04, 0.96), v = r.range(0.12, 0.78), q = lerp2(onTop(u), onBot(u), v), rr = r.range(6, 10); gem(ctx, q[0], q[1], rr, [52, 34, 26], r.range(0, 3)); }
    // spine glow (the spring)
    if (o.spineGlow > 0.01) {
      ctx.save(); ctx.globalAlpha = o.spineGlow; ctx.strokeStyle = 'rgba(255,240,170,0.95)'; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.shadowColor = 'rgba(255,220,120,1)'; ctx.shadowBlur = 30;
      ctx.beginPath(); top.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1] + 16) : ctx.moveTo(p[0], p[1] + 16))); ctx.stroke(); ctx.restore();
      top.forEach((p, i) => { if (i > 0 && i < top.length - 1) hexKnob(ctx, p[0], p[1] + 16, 13, GOLD, 0.5 * o.spineGlow); });
    }
    // chest: lungs + heart
    if (o.chestGlow > 0.01) {
      const cx = S[0] - L * 0.04, cy = S[1] + Hh * 0.2, k = o.chestGlow;
      const g = ctx.createRadialGradient(cx, cy, 10, cx, cy, Hh * 0.5); g.addColorStop(0, `rgba(255,170,150,${0.7 * k})`); g.addColorStop(1, 'rgba(255,170,150,0)'); ctx.fillStyle = g; ctx.fillRect(cx - Hh * 0.5, cy - Hh * 0.5, Hh, Hh);
      ctx.save(); ctx.translate(cx, cy); ctx.scale(k, k);
      poly(ctx, [[-62, -40], [-10, -54], [4, -10], [-14, 38], [-60, 30], [-80, -6]], [255, 150, 160], [255, 200, 205], [200, 90, 110], 5, 0.5);
      gem(ctx, 18, 14, 34 * (1 + 0.12 * Math.max(0, Math.sin((o.t || 0) * 9))), [220, 40, 60]);
      ctx.restore();
    }
    // neck + head
    const hd = run ? 0.06 : (o.headUp ?? 0) * -0.08;
    const N0 = [S[0] + L * 0.04, S[1] + Hh * 0.02], Hc = [S[0] + L * 0.3, S[1] - Hh * (0.12 + hd) + (run ? Hh * 0.06 : 0)];
    seg(ctx, N0, Hc, Hh * 0.17, Hh * 0.1, sp.body, 0);
    const hs = sp === CHEETAH ? 1 : 0.95;
    ctx.save(); ctx.translate(Hc[0], Hc[1]); ctx.scale(hs, hs);
    if (sp.horns) for (const k of [0, 1]) { const b = [-6 - k * 10, -30], m = [-30 - k * 10, -100], tp = [-14 - k * 12, -150]; seg(ctx, b, m, 7, 5, [70, 50, 40], 0.1 * k); seg(ctx, m, tp, 5, 2, [70, 50, 40], 0.1 * k); }
    // ears
    tri2(ctx, [-30, -30], [-12, -56], [-4, -28], H.rgba(sp.dark)); tri2(ctx, [-26, -32], [-14, -50], [-8, -30], H.rgba(sp.light));
    const head = sp === CHEETAH ? [[-38, -20], [-14, -38], [22, -36], [52, -20], [70, 2], [62, 18], [30, 26], [-8, 24], [-36, 8]] : [[-34, -24], [-8, -38], [26, -26], [70, -2], [80, 14], [56, 22], [10, 18], [-30, 6]];
    poly(ctx, head, sp.body, sp.light, sp.dark, sp.seed + 3, 0.5);
    tri2(ctx, [30, 14], [62, 18], [44, 26], H.rgba(sp.belly)); // muzzle
    tri2(ctx, [60, 0], [72, 4], [64, 12], H.rgba([40, 28, 28])); // nose
    gem(ctx, 18, -14, 9, [30, 26, 22]); gem(ctx, 16, -17, 3, [255, 255, 255]);
    if (sp.tear) { ctx.strokeStyle = 'rgb(36,26,22)'; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(22, -8); ctx.lineTo(30, 6); ctx.lineTo(44, 20); ctx.stroke(); }
    if (o.pant > 0.01) { const m = 8 + 8 * Math.abs(Math.sin((o.t || 0) * 11)) * o.pant; tri2(ctx, [36, 22], [62, 22], [46, 22 + m], H.rgba([120, 40, 50])); tri2(ctx, [42, 24], [54, 24], [48, 28 + m * 1.4], H.rgba([240, 110, 130])); }
    ctx.restore();
    // near legs on top
    legs.filter((l) => !l.far).forEach((l) => { drawLeg(l.r, sp.body, 0.0, wd); drawLeg(l.f, sp.body, 0.0, wd * 0.9); });
    if (o.sensor > 0.01) { const sx = mid[0], sy = mid[1] + Hh * 0.3; const g = ctx.createRadialGradient(sx, sy, 4, sx, sy, 70); g.addColorStop(0, `rgba(120,220,255,${0.8 * o.sensor})`); g.addColorStop(1, 'rgba(120,220,255,0)'); ctx.fillStyle = g; ctx.fillRect(sx - 72, sy - 72, 144, 144); gem(ctx, sx, sy, 20 * o.sensor, [80, 200, 255]); }
    ctx.restore();
    return { map, head: map(Hc), chest: map([S[0] - L * 0.04, S[1] + Hh * 0.2]), mid: map(mid), tail: map(tailPts[tailPts.length - 1]), tailMid: map(tailPts[3] || tailPts[1]), fFoot: map(legs[1].f[2]), rFoot: map(legs[1].r[2]), sensor: map([mid[0], mid[1] + Hh * 0.3]), top: map([mid[0], mid[1] - Hh * 0.2]) };
  }
  function shadow(ctx, x, y, w, a = 0.26) { ctx.fillStyle = `rgba(70,40,30,${a})`; ctx.beginPath(); ctx.ellipse(x, y + 6, w, 22, 0, 0, Math.PI * 2); ctx.fill(); }

  // =================== SAVANNA (sky mosaic, periodic faceted hills, scrolling faceted grass plain, acacias) ===================
  const PAL = {
    dawn: { top: [70, 100, 190], bot: [255, 214, 170], sunX: 820, sunY: 760, glow: [255, 236, 200], hill: [150, 120, 140], g0: [214, 170, 90], g1: [244, 206, 120], g2: [170, 120, 60], fog: [250, 210, 180] },
    heat: { top: [210, 90, 60], bot: [255, 200, 120], sunX: 760, sunY: 560, glow: [255, 240, 190], hill: [190, 110, 80], g0: [220, 150, 70], g1: [250, 196, 100], g2: [176, 100, 50], fog: [255, 190, 130] },
    gold: { top: [90, 80, 160], bot: [255, 188, 110], sunX: 260, sunY: 820, glow: [255, 220, 160], hill: [140, 100, 120], g0: [210, 150, 80], g1: [246, 196, 110], g2: [160, 100, 60], fog: [250, 190, 150] },
    dusk: { top: [40, 36, 100], bot: [255, 140, 120], sunX: 540, sunY: 900, glow: [255, 200, 170], hill: [100, 70, 110], g0: [180, 110, 90], g1: [226, 150, 110], g2: [120, 70, 70], fog: [230, 150, 140] },
  };
  const HZ = 1000, GND = 1470;
  function hillLayer(key, pal) {
    if (BG[key]) return BG[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(key.length * 19 + 4), n = 9, cs = W / n, hs = [];
    for (let i = 0; i < n; i++) hs.push(HZ - 60 - r() * 150);
    for (let i = 0; i < n; i++) {
      const a = [i * cs, hs[i]], b = [(i + 1) * cs, hs[(i + 1) % n]], m = [(i + 0.5) * cs + r.range(-30, 30), HZ + 30];
      const lit = H.mix(H.mix(pal.hill, pal.fog, 0.35), [255, 255, 255], 0.08 + r() * 0.1), shd = H.mix(pal.hill, pal.fog, 0.2 + r() * 0.1);
      tri2(g, a, b, m, H.rgba(lit)); tri2(g, a, m, [i * cs, HZ + 30], H.rgba(shd)); tri2(g, b, [(i + 1) * cs, HZ + 30], m, H.rgba(H.mix(shd, lit, 0.5)));
    }
    return (BG[key] = c);
  }
  function acacia(ctx, x, y, s, pal, seed) {
    const r = H.rng(seed), trunk = H.mix([90, 60, 50], pal.fog, 0.35), leaf = H.mix([90, 120, 60], pal.fog, 0.3);
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    seg(ctx, [0, 0], [-10, -120], 12, 8, trunk, 0); seg(ctx, [-10, -120], [-70, -190], 7, 5, trunk, 0.05); seg(ctx, [-10, -120], [60, -200], 7, 5, trunk, 0.05);
    const pts = []; for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; pts.push([Math.cos(a) * (160 + r.range(-14, 14)), -215 + Math.sin(a) * (34 + r.range(-6, 6)) - (Math.sin(a) < 0 ? 16 : 0)]); }
    poly(ctx, pts, leaf, H.mix(leaf, [255, 255, 200], 0.3), H.mix(leaf, [30, 40, 30], 0.3), seed, 0.6);
    ctx.restore();
  }
  function savanna(ctx, t, key, scroll) {
    const pal = PAL[key];
    ctx.drawImage(mosaicLayer(key + 'sky', pal.top, pal.bot, [pal.sunX, pal.sunY + 200], pal.glow, HZ), 0, 0);
    if (key === 'dusk' || key === 'gold') stars(ctx, 50, 460, 31 + key.length, 0.7);
    facetSun(ctx, pal.sunX, pal.sunY, key === 'heat' ? 110 : 86, H.mix(pal.glow, [255, 200, 120], 0.3), [255, 252, 236], key === 'heat' ? 'rgba(255,240,180,0.6)' : 'rgba(255,230,190,0.45)');
    const hl = hillLayer(key + 'hill', pal), ho = ((scroll * 0.12) % W + W) % W;
    ctx.drawImage(hl, -ho, 0); ctx.drawImage(hl, W - ho, 0);
    // acacias at mid parallax
    const ts = scroll * 0.45, sp = 620, i0 = Math.floor((ts - 300) / sp);
    for (let i = i0; i < i0 + 4; i++) { const r = H.rng(i * 7 + 3 + key.length); const x = i * sp - ts + r.range(-100, 100); acacia(ctx, x, HZ + 50, r.range(0.6, 0.85), pal, i + 40); }
    // ground rows: perspective bands, nearer = bigger + faster
    const rows = [HZ + 30, 1080, 1160, 1260, 1380, 1520, 1690, 1920];
    for (let j = 0; j < rows.length - 1; j++) {
      const y0 = rows[j], y1 = rows[j + 1], depth = j / (rows.length - 2), cs = 90 + depth * 160, par = 0.5 + depth * 1.0, off = scroll * par;
      const iA = Math.floor(off / cs) - 1;
      for (let i = iA; i < iA + Math.ceil(W / cs) + 3; i++) {
        const r = H.rng(i * 131 + j * 977 + 5), x = i * cs - off, xo = (j % 2) * cs * 0.5;
        let a = H.mix(pal.g2, pal.g1, H.clamp(0.35 + r() * 0.5)), b = H.mix(pal.g2, pal.g0, 0.3 + r() * 0.4);
        const fog = (1 - depth) * 0.45; a = H.mix(a, pal.fog, fog); b = H.mix(b, pal.fog, fog);
        tri2(ctx, [x + xo, y0], [x + xo + cs, y0], [x + xo + cs * 0.5, y1], H.rgba(a)); tri2(ctx, [x + xo + cs * 0.5, y1], [x + xo + cs, y0], [x + xo + cs * 1.5, y1], H.rgba(b));
        if (j >= 3 && r() < 0.5) { const gx = x + r() * cs, gy = y0 + r() * (y1 - y0) * 0.6, gh = 20 + depth * 40; const gc = H.rgba(H.mix(pal.g1, [255, 240, 170], 0.3)); tri2(ctx, [gx - 8, gy], [gx + 8, gy], [gx - 4, gy - gh], gc); tri2(ctx, [gx, gy], [gx + 14, gy], [gx + 12, gy - gh * 0.8], H.rgba(H.mix(pal.g2, pal.g1, 0.5))); }
      }
    }
  }
  function dust(ctx, x, y, t, k, seed) { // faceted dust kicked up behind a runner
    if (k <= 0.01) return; const r = H.rng(seed);
    for (let i = 0; i < 9; i++) { const u = ((t * 2.2 + r()) % 1), px = x - u * 260 - r() * 40, py = y - u * 70 - r() * 20, sz = (1 - u) * 26 + 8; ctx.globalAlpha = (1 - u) * 0.7 * k; gem(ctx, px, py, sz, [240, 214, 170], u * 3); }
    ctx.globalAlpha = 1;
  }
  function speedLines(ctx, t, k, seed) { if (k <= 0.01) return; const r = H.rng(seed); for (let i = 0; i < 10; i++) { const y = 900 + r() * 560, len = 120 + r() * 220, x = W - ((t * 1800 + r() * 3000) % (W + 600)); ctx.fillStyle = `rgba(255,248,230,${0.5 * k})`; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + len, y - 3); ctx.lineTo(x + len, y + 3); ctx.closePath(); ctx.fill(); } }
  function header(ctx, t) {
    const k = EO(t, P(1, 'youd') - 0.1, P(1, 'youd') + 0.3); if (k <= 0 || t > CUT.end) return;
    ctx.save(); ctx.globalAlpha = k; lpTag(ctx, 540, 222, 'WHY DO CHEETAHS QUIT?', { font: FONT(44), bg: INK, col: '#fff', k: 0.6 + 0.4 * k }); ctx.restore();
  }
  function timerDial(ctx, x, y, r, frac, k, col = [255, 226, 122]) {
    if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    hexKnob(ctx, 0, 0, r, [60, 50, 110], 0);
    const n = 24; for (let i = 0; i < n * frac; i++) { const a0 = -Math.PI / 2 + i / n * Math.PI * 2, a1 = -Math.PI / 2 + (i + 1) / n * Math.PI * 2; tri2(ctx, [Math.cos(a0) * r * 0.62, Math.sin(a0) * r * 0.62], [Math.cos(a0) * r * 0.92, Math.sin(a0) * r * 0.92], [Math.cos(a1) * r * 0.92, Math.sin(a1) * r * 0.92], H.rgba(H.mix(col, [255, 255, 255], (i % 2) * 0.25))); }
    ctx.restore();
  }
  function battery(ctx, x, y, level, k) { // faceted 5-cell energy bar
    if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    const w = 520, h = 130; ctx.fillStyle = 'rgba(30,20,60,0.4)'; ctx.fillRect(-w / 2 + 8, -h / 2 + 8, w + 30, h);
    ctx.fillStyle = '#fff6f0'; ctx.fillRect(-w / 2, -h / 2, w, h); ctx.fillRect(w / 2, -h * 0.22, 26, h * 0.44);
    const col = level > 0.5 ? MINT : level > 0.25 ? '#ffc34a' : '#ff5a4a';
    for (let i = 0; i < 5; i++) { const f = H.clamp(level * 5 - i); if (f <= 0) continue; const x0 = -w / 2 + 14 + i * (w - 28) / 5, cw = ((w - 28) / 5 - 10) * f; const c = H.hex(col); tri2(ctx, [x0, -h / 2 + 14], [x0 + cw, -h / 2 + 14], [x0, h / 2 - 14], H.rgba(H.mix(c, [255, 255, 255], 0.25))); tri2(ctx, [x0 + cw, -h / 2 + 14], [x0 + cw, h / 2 - 14], [x0, h / 2 - 14], H.rgba(c)); }
    ctx.restore();
  }
  function thermo(ctx, x, y, level, k) { // faceted thermometer, level 0..1, y = bulb centre
    if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    const th = 560, tw = 70; ctx.fillStyle = 'rgba(30,20,60,0.35)'; ctx.fillRect(-tw / 2 + 8, -th + 8, tw, th);
    ctx.fillStyle = '#fff6f0'; ctx.fillRect(-tw / 2, -th, tw, th);
    for (let i = 1; i < 8; i++) { ctx.fillStyle = INK; ctx.fillRect(tw / 2 - 26, -i * th / 8, 26, 6); }
    const red = [255, 80, 70], lv = th * (0.12 + 0.82 * level);
    tri2(ctx, [-tw / 2 + 14, 0], [tw / 2 - 30, 0], [-tw / 2 + 14, -lv], H.rgba(H.mix(red, [255, 255, 255], 0.25))); tri2(ctx, [tw / 2 - 30, 0], [tw / 2 - 30, -lv], [-tw / 2 + 14, -lv], H.rgba(red));
    hexKnob(ctx, 0, 30, 70, red, 0.3 + 0.5 * level);
    ctx.restore();
  }
  function eyes(ctx, x, y, k, t) { // lion eyes glinting in a dark faceted bush
    if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    const pts = []; for (let i = 0; i < 11; i++) { const a = Math.PI + i / 10 * Math.PI; pts.push([Math.cos(a) * 230, Math.sin(a) * 150]); }
    poly(ctx, pts, [70, 80, 50], [120, 130, 70], [36, 42, 30], 77, 0.6);
    const bl = (Math.sin(t * 2.3) > 0.97) ? 0.2 : 1;
    for (const sd of [-1, 1]) { const g = ctx.createRadialGradient(sd * 50, -70, 2, sd * 50, -70, 50); g.addColorStop(0, 'rgba(255,230,120,0.8)'); g.addColorStop(1, 'rgba(255,230,120,0)'); ctx.fillStyle = g; ctx.fillRect(sd * 50 - 50, -120, 100, 100); ctx.save(); ctx.translate(sd * 50, -70); ctx.scale(1, bl); gem(ctx, 0, 0, 20, [255, 214, 80]); ctx.fillStyle = '#201810'; ctx.fillRect(-3, -12, 6, 24); ctx.restore(); }
    ctx.restore();
  }

  const runOff = (t, a, b, v, k = 2.5) => t < a ? 0 : t < b ? v * (t - a) : v * (b - a) + v * (1 - Math.exp(-(t - b) * k)) / k;
  const out = (t, a) => 1 - EI(t, a - 0.15, a + 0.05);
  // ---- A: savanna sprint ----
  function sceneSprint(ctx, t) {
    const scroll = t * 900;
    const z = 1 + 0.07 * EI(t, P(3, 'zero') - 0.3, CUT.lab);
    ctx.save(); ctx.translate(540, GND - 200); ctx.scale(z, z); ctx.translate(-540, -(GND - 200));
    savanna(ctx, t, 'dawn', scroll);
    speedLines(ctx, t, EO(t, P(2, 'hundred') - 0.3, P(2, 'hundred')), 9);
    const x = H.lerp(-320, 560, EO(t, 0.0, 1.4));
    shadow(ctx, x, GND, 300);
    dust(ctx, x - 160, GND, t, 1, 5);
    quad(ctx, { x, y: GND, s: 1.3, ph: t * 3.3, t }, CHEETAH);
    ctx.restore();
    const o1 = out(t, P(1, 'never'));
    lpTag(ctx, 540, 470, 'QUITS AFTER', { k: BK(t, P(0, 'quits') - 0.12) * o1, font: FONT(104), h: 170, bg: '#fff3dc' });
    bigNumber(ctx, 540, 760, '20 s', 250, BK(t, P(0, 'twenty') - 0.12) * o1, '#ffe27a');
    const o2 = out(t, P(2, 'it'));
    lpTag(ctx, 540, 560, 'WHY?', { k: BK(t, P(1, 'why') - 0.12) * o2, font: FONT(160), h: 230, bg: CORAL, col: '#fff' });
    const o3 = out(t, P(3, 'zero'));
    bigNumber(ctx, 540, 700, '100', 260, BK(t, P(2, 'hundred') - 0.12) * o3, '#fff');
    lpTag(ctx, 540, 820, 'KM/H', { k: BK(t, P(2, 'kilometers') - 0.12) * o3, font: FONT(100), h: 160, bg: '#ffe27a' });
    lpTag(ctx, 540, 480, '0 → 72 KM/H', { k: BK(t, P(3, 'seventytwo') - 0.12), font: FONT(100), h: 166, bg: '#fff3dc' });
    bigNumber(ctx, 540, 760, '2.5 s', 230, BK(t, P(3, 'two') - 0.12), '#7fe8c0');
  }
  // ---- B: stride lab ----
  function labFloor(ctx) {
    const r = H.rng(404);
    for (let x = -60; x < W + 60; x += 120) { tri2(ctx, [x, 1380], [x + 120, 1380], [x + 60, 1460], H.rgba(H.mix([50, 46, 110], [90, 80, 160], r()))); tri2(ctx, [x + 60, 1460], [x + 120, 1380], [x + 180, 1460], H.rgba(H.mix([36, 32, 86], [70, 60, 130], r()))); }
    ctx.fillStyle = 'rgb(30,26,70)'; ctx.fillRect(0, 1460, W, HH - 1460);
  }
  function sceneLab(ctx, t) {
    ctx.drawImage(mosaicLayer('lab', [26, 34, 84], [80, 70, 140], [600, 1100], [120, 160, 255], 1920, 110), 0, 0);
    labFloor(ctx);
    const t5 = P(5, 'four') - 0.1, t6 = P(6, 'its') - 0.2;
    let o;
    if (t < t5) o = { ext: H.lerp(0.35, 1, EI(t, P(4, 'stride') - 0.15, P(4, 'stride') + 0.35)) };
    else if (t < t6) o = { ph: (t - t5) * 4 + 0.25 };
    else o = { ph: (t6 - t5) * 4 + 0.25 + (t - t6) * 0.55 };
    Object.assign(o, { x: 590, y: 1380, s: 1.5, t,
      spineGlow: EI(t, P(6, 'spine') - 0.15, P(6, 'spine') + 0.1) * out(t, P(7, 'its')),
      chestGlow: EI(t, P(7, 'lungs') - 0.15, P(7, 'lungs') + 0.15) * out(t, P(8, 'and')),
      tailGlow: EI(t, P(8, 'tail') - 0.15, P(8, 'tail') + 0.1), tailSwing: t > P(8, 'steers') - 0.1 ? Math.sin((t - P(8, 'steers')) * 5) * EO(t, P(8, 'steers') - 0.1, P(8, 'steers') + 0.3) : 0 });
    shadow(ctx, 590, 1380, 330, 0.35);
    const c = quad(ctx, o, CHEETAH);
    const o4 = out(t, t5 + 0.1);
    if (o4 > 0.01 && t > P(4, 'seven') - 0.2) { const y = 1420; gem(ctx, c.rFoot[0], y, 18, [255, 226, 122]); gem(ctx, c.fFoot[0], y, 18, [255, 226, 122]); const m = (c.rFoot[0] + c.fFoot[0]) / 2, kk = EI(t, P(4, 'seven') - 0.15, P(4, 'seven') + 0.3) * o4; lpArrow(ctx, [m, 1520], [H.lerp(m, c.rFoot[0], 0.5), 1505], [c.rFoot[0], 1520], kk, [255, 226, 122], 18); lpArrow(ctx, [m, 1520], [H.lerp(m, c.fFoot[0], 0.5), 1505], [c.fFoot[0], 1520], kk, [255, 226, 122], 18); }
    lpTag(ctx, 540, 470, 'ONE STRIDE', { k: BK(t, P(4, 'stride') - 0.12) * o4, font: FONT(100), h: 166, bg: '#fff3dc' });
    bigNumber(ctx, 540, 740, '7 m', 250, BK(t, P(4, 'seven') - 0.12) * o4, '#ffe27a');
    const o5 = out(t, P(6, 'its'));
    bigNumber(ctx, 540, 640, '×4', 240, BK(t, P(5, 'four') - 0.12) * o5, '#7fe8c0');
    lpTag(ctx, 540, 770, 'EVERY SECOND', { k: BK(t, P(5, 'second') - 0.12) * o5, font: FONT(88), h: 150, bg: '#fff3dc' });
    if (o5 > 0.01 && t > P(5, 'four') - 0.1) for (let i = 0; i < 4; i++) { const on = ((t - P(5, 'four') + 0.1) * 4) % 4 >= i; gem(ctx, 330 + i * 140, 900, 30 * BK(t, P(5, 'four') - 0.1 + i * 0.1) * o5, on ? [255, 226, 122] : [120, 110, 190]); }
    const o6 = out(t, P(7, 'its'));
    lpTag(ctx, 540, 470, 'SPINE', { k: BK(t, P(6, 'spine') - 0.12) * o6, font: FONT(120), h: 180, bg: '#fff3dc' });
    lpTag(ctx, 540, 650, '= SPRING', { k: BK(t, P(6, 'spring') - 0.12) * o6, font: FONT(110), h: 170, bg: '#ffe27a' });
    const o7 = out(t, P(8, 'and'));
    lpTag(ctx, 540, 470, 'BIG LUNGS', { k: BK(t, P(7, 'lungs') - 0.12) * o7, font: FONT(110), h: 170, bg: '#ffd0d6' });
    lpTag(ctx, 540, 650, '+ BIG HEART', { k: BK(t, P(7, 'heart') - 0.12) * o7, font: FONT(100), h: 166, bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 470, 'TAIL', { k: BK(t, P(8, 'tail') - 0.12), font: FONT(120), h: 180, bg: '#fff3dc' });
    lpTag(ctx, 540, 650, '= RUDDER', { k: BK(t, P(8, 'rudder') - 0.12), font: FONT(110), h: 170, bg: '#7fd8ff' });
  }
  // ---- C: the overheating myth ----
  function sceneMyth(ctx, t) {
    const a = P(11, 'chase') - 0.15, b = P(12, 'jumped') - 0.1;
    const scroll = runOff(t, a, b, 900), running = t > a && t < b + 0.3;
    savanna(ctx, t, 'heat', scroll);
    // heat shimmer
    const sh = EO(t, P(9, 'stopped'), P(9, 'overheated')) * out(t, P(10, 'but'));
    if (sh > 0.01) { const r = H.rng(17); for (let i = 0; i < 14; i++) { const x = r() * W, y = 1000 + r() * 400 - ((t * 60 + r() * 200) % 200); ctx.globalAlpha = 0.35 * sh; gem(ctx, x, y, 16 + r() * 16, [255, 240, 200], 0.3); } ctx.globalAlpha = 1; }
    const x = 390;
    shadow(ctx, x, GND, 290);
    if (running) dust(ctx, x - 150, GND, t, EO(t, a, a + 0.3) * (1 - EO(t, b, b + 0.3)), 8);
    const c = quad(ctx, { x, y: GND, s: 1.25, t, ph: running ? runOff(t, a, b, 3.3) : null, pant: running ? 0 : (t < P(10, 'but') ? EO(t, P(9, 'people'), P(9, 'people') + 0.5) : t > b ? 1 : 0.4), sensor: EO(t, P(10, 'sensors') - 0.12, P(10, 'sensors') + 0.2) }, CHEETAH);
    // thermometer
    let lv = 0.3 + 0.55 * EI(t, P(9, 'stopped'), P(9, 'overheated') + 0.3);
    lv = H.lerp(lv, 0.32, EI(t, P(10, 'but') - 0.1, P(10, 'in') + 0.3));
    if (running) lv += Math.sin(t * 7) * 0.012;
    lv = H.lerp(lv, 0.62, EI(t, P(12, 'jumped') - 0.1, P(12, 'jumped') + 0.4));
    thermo(ctx, 900, 1330, lv, EO(t, CUT.myth + 0.1, CUT.myth + 0.5) * out(t, P(13, 'stress')));
    const o9 = out(t, P(10, 'but'));
    lpTag(ctx, 500, 470, 'OVERHEATING?', { k: BK(t, P(9, 'overheated') - 0.15) * o9, font: FONT(100), h: 166, bg: CORAL, col: '#fff' });
    lpTag(ctx, 500, 640, 'PEOPLE THOUGHT', { k: BK(t, P(9, 'people') - 0.12) * o9, font: FONT(64), bg: '#fff3dc' });
    const o10 = out(t, P(11, 'during'));
    bigNumber(ctx, 500, 640, '2013', 220, BK(t, P(10, '2013') - 0.12) * o10, '#fff');
    lpTag(ctx, 500, 780, 'SENSORS ON', { k: BK(t, P(10, 'sensors') - 0.12) * o10, font: FONT(72), bg: '#7fd8ff' });
    lpTag(ctx, 500, 910, '6 CHEETAHS', { k: BK(t, P(10, 'six') - 0.12) * o10, font: FONT(84), h: 146, bg: '#ffe27a' });
    if (o10 > 0.01) lpArrow(ctx, [430, 820], [360, 900], [c.sensor[0] + 10, c.sensor[1] - 40], EI(t, P(10, 'sensors') - 0.1, P(10, 'sensors') + 0.3) * o10 * (t > P(10, 'six') - 0.15 ? 0 : 1), [120, 220, 255], 18);
    const o11 = out(t, P(12, 'jumped'));
    lpTag(ctx, 500, 450, 'DURING THE CHASE', { k: BK(t, P(11, 'chase') - 0.12) * o11, font: FONT(72), bg: '#fff3dc' });
    lpTag(ctx, 500, 600, 'BARELY CHANGED', { k: BK(t, P(11, 'barely') - 0.12) * o11, font: FONT(80), h: 140, bg: '#7fe8c0' });
    lpTag(ctx, 440, 750, 'MYTH!', { k: BK(t, P(11, 'changed') - 0.12) * o11, font: FONT(100), h: 160, bg: CORAL, col: '#fff' });
    hexBadge(ctx, 640, 750, BK(t, P(11, 'changed')) * o11, false, 52);
    const o12 = out(t, P(13, 'stress'));
    bigNumber(ctx, 500, 600, '+1.3 °C', 170, BK(t, P(12, 'jumped') - 0.12) * o12, '#ff8a70');
    lpTag(ctx, 500, 740, 'AFTER A CATCH', { k: BK(t, P(12, 'catch') - 0.12) * o12, font: FONT(80), h: 140, bg: '#fff3dc' });
    eyes(ctx, 860, 1560, BK(t, P(13, 'lions') - 0.15, 0.4), t);
    lpTag(ctx, 540, 470, 'STRESS', { k: BK(t, P(13, 'stress') - 0.12), font: FONT(120), h: 180, bg: '#ffe27a' });
    lpTag(ctx, 540, 650, 'LIONS NEARBY', { k: BK(t, P(13, 'lions') - 0.12), font: FONT(96), h: 160, bg: CORAL, col: '#fff' });
  }
  // ---- D: the real limit ----
  function sceneLimit(ctx, t) {
    const a = CUT.limit, b = P(18, 'miss');
    const scroll = runOff(t, a, b, 900), running = t < b + 0.35;
    savanna(ctx, t, 'gold', scroll);
    const x = 330, gx = 800 + 760 * EI(t, b - 0.1, P(18, 'done'));
    speedLines(ctx, t, running ? 0.6 : 0, 14);
    shadow(ctx, gx, GND - 20, 220); quad(ctx, { x: gx, y: GND - 20, s: 0.95, ph: t * 3.6 + 0.4, t }, GAZELLE);
    shadow(ctx, x, GND, 280);
    if (running) dust(ctx, x - 150, GND, t, 1 - EO(t, b, b + 0.35), 12);
    quad(ctx, { x, y: GND, s: 1.2, t, ph: running ? runOff(t, a, b, 3.3) : null, pant: running ? 0 : 1 }, CHEETAH);
    lpTag(ctx, 540, 520, 'WHAT STOPS IT?', { k: BK(t, P(14, 'stops') - 0.15) * out(t, P(15, 'that')), font: FONT(96), h: 160, bg: '#fff3dc' });
    const o15 = out(t, P(16, 'so'));
    lpTag(ctx, 540, 450, 'ENERGY', { k: BK(t, P(15, 'energy') - 0.12) * o15, font: FONT(110), h: 170, bg: '#7fe8c0' });
    battery(ctx, 540, 650, 1 - 0.85 * EI(t, P(15, 'burns') - 0.1, P(15, 'fast') + 0.25), BK(t, P(15, 'burns') - 0.15) * o15);
    lpTag(ctx, 540, 830, 'BURNS FAST', { k: BK(t, P(15, 'crazy') - 0.12) * o15, font: FONT(80), h: 140, bg: CORAL, col: '#fff' });
    const o16 = out(t, P(18, 'miss'));
    lpTag(ctx, 540, 400, 'FULL SPRINT', { k: BK(t, P(16, 'sprint') - 0.12) * o16, font: FONT(80), h: 140, bg: '#fff3dc' });
    timerDial(ctx, 540, 640, 170, EI(t, P(16, 'full'), P(16, 'twenty')), BK(t, P(16, 'full') - 0.15) * o16);
    bigNumber(ctx, 540, 690, '20 s', 140, BK(t, P(16, 'twenty') - 0.12) * o16, '#ffe27a');
    lpTag(ctx, 540, 880, '≈ 300 M', { k: BK(t, P(17, 'hundred') - 0.12) * o16, font: FONT(96), h: 156, bg: '#ffe27a' });
    if (o16 > 0.01) { const kk = EI(t, P(17, 'few') - 0.1, P(17, 'meters')) * o16; lpArrow(ctx, [90, 1580], [540, 1560], [990, 1580], kk, [255, 226, 122], 20); }
    const o18 = out(t, P(19, 'only'));
    lpTag(ctx, 540, 470, 'MISS?', { k: BK(t, P(18, 'miss') - 0.12) * o18, font: FONT(130), h: 190, bg: CORAL, col: '#fff' });
    lpTag(ctx, 500, 660, 'DONE.', { k: BK(t, P(18, 'done') - 0.12) * o18, font: FONT(110), h: 170, bg: '#fff3dc' });
    hexBadge(ctx, 720, 660, BK(t, P(18, 'done')) * o18, false, 50);
    bigNumber(ctx, 540, 640, '1 IN 2', 190, BK(t, P(19, 'half') - 0.12), '#ffe27a');
    lpTag(ctx, 540, 790, 'CHASES = A MEAL', { k: BK(t, P(19, 'meal') - 0.12), font: FONT(76), h: 136, bg: '#fff3dc' });
    hexBadge(ctx, 420, 950, BK(t, P(19, 'chases') - 0.1), true, 54); hexBadge(ctx, 660, 950, BK(t, P(19, 'end') - 0.1), false, 54);
  }
  // ---- E: the question ----
  function sceneEnd(ctx, t) {
    savanna(ctx, t, 'dusk', 0);
    shadow(ctx, 540, GND, 320);
    quad(ctx, { x: 540, y: GND, s: 1.45, t, pant: 0.4, headUp: 1, tailSwing: Math.sin(t * 1.4) * 0.3 }, CHEETAH);
    lpTag(ctx, 540, 450, 'FAST FOR 20 s', { k: BK(t, P(20, 'fast') - 0.12), font: FONT(100), h: 166, bg: '#ffe27a' });
    lpTag(ctx, 540, 630, 'OR SLOW ALL DAY?', { k: BK(t, P(21, 'slower') - 0.12), font: FONT(86), h: 150, bg: '#fff3dc' });
    lpTag(ctx, 540, 790, 'TELL ME ↓', { k: BK(t, P(21, 'day') - 0.05), font: FONT(64), bg: INK, col: '#fff' });
  }
  function scene(ctx, t) {
    if (t < CUT.lab) sceneSprint(ctx, t);
    else if (t < CUT.myth) sceneLab(ctx, t);
    else if (t < CUT.limit) sceneMyth(ctx, t);
    else if (t < CUT.end) sceneLimit(ctx, t);
    else sceneEnd(ctx, t);
  }
  function thumbnail(ctx, W_, H_) {
    ctx.save(); ctx.scale(W_ / W, H_ / HH);
    savanna(ctx, 0.4, 'dawn', 360);
    shadow(ctx, 560, GND, 300); quad(ctx, { x: 560, y: GND, s: 1.3, ph: 0.25, t: 0.4 }, CHEETAH);
    bigNumber(ctx, 540, 640, '100 KM/H', 170, 1, '#fff');
    lpTag(ctx, 540, 820, 'NOT THE HEAT', { font: FONT(110), h: 176, bg: CORAL, col: '#fff' });
    ctx.restore();
  }

  // ---------- sound (voiceover mode): glassy facets, paw drums, wind, heat hum ----------
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g = 1, p = 0, minor) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const paws = (t0, t1, rate, g = 1) => { const r = H.rng(Math.round(t0 * 100)); for (let t = t0; t < t1; t += 1 / rate) { k.play('thud', t, { f: r.range(70, 95), gain: 0.16 * g, pan: r.range(-0.3, 0.3), minor: true }); k.play('thud', t + 0.07, { f: r.range(80, 105), gain: 0.12 * g, minor: true }); } };
    const wind = (t0, t1, g = 1) => { for (let t = t0; t < t1 - 0.2; t += 1.2) k.noise(t, { dur: 1.5, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.8, 1500], [1.5, 700]], q: 0.7, gain: 0.05 * g, a: 0.6, minor: true }); };
    const wipe = (t) => { k.withMinor(() => { for (let i = 0; i < 9; i++) k.play('tick', t + i * 0.05, { f: 2400 + i * 180, gain: 0.5 }); }); k.play('whoosh', t - 0.05, { dur: 0.6, gain: 0.45 }); };
    const ribbon = (t, p = 0) => k.noise(t, { dur: 0.5, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.5, 1400]], q: 1.2, gain: 0.06, a: 0.25, pan: p, minor: true });
    const pant = (t0, t1) => { for (let t = t0; t < t1; t += 0.36) k.noise(t, { dur: 0.16, color: 'pink', filter: 'bandpass', f: 1100, q: 0.8, gain: 0.05, a: 0.05, minor: true }); };
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pad', 0, D, { bpm: 100, gain: 0.22, chords: [['D4', 'F#4', 'A4', 'C#5'], ['B3', 'D4', 'F#4', 'A4'], ['G3', 'B3', 'D4', 'F#4'], ['A3', 'C#4', 'E4', 'G4']] });
    // A sprint
    paws(0.05, CUT.lab, 3.3); wind(0, CUT.lab, 1.2); glass(0.2, 'D4', 1.1, 0, 1.4);
    facet(P(0, 'quits') - 0.12, 470); k.play('impact', P(0, 'twenty') - 0.08, { gain: 0.85 }); glass(P(0, 'twenty'), 'A4', 1, 0, 1.1);
    k.play('impact', P(1, 'why') - 0.08, { gain: 0.7 }); k.play('sparkle', P(1, 'why'), { n: 4, gain: 0.35 }); facet(P(1, 'youd') - 0.1, 520, 0.8);
    k.play('whoosh', P(2, 'hundred') - 0.3, { dur: 0.7, gain: 0.5 }); k.play('impact', P(2, 'hundred') - 0.08, { gain: 0.8 }); facet(P(2, 'kilometers') - 0.12, 600);
    k.play('riser', P(3, 'zero') - 0.1, { dur: 0.6, gain: 0.35 }); facet(P(3, 'seventytwo') - 0.12, 560); k.play('impact', P(3, 'two') - 0.08, { gain: 0.8 }); ['D4', 'A4', 'D5'].forEach((n, i) => glass(P(3, 'two') + i * 0.04, n, 0.9 - i * 0.2, (i - 1) * 0.3, 1.1));
    // B lab
    wipe(CUT.lab); k.bed('hum', CUT.lab, CUT.myth, { gain: 0.3 }); k.tone(CUT.lab + 0.1, { f: 'D2', dur: CUT.myth - CUT.lab, gain: 0.04, a: 1 });
    facet(P(4, 'stride') - 0.12, 520); k.play('swish', P(4, 'stride') - 0.1, { dur: 0.4, gain: 0.5 }); ribbon(P(4, 'seven') - 0.1, -0.3); ribbon(P(4, 'seven') - 0.1, 0.3); k.play('impact', P(4, 'seven') - 0.08, { gain: 0.8 }); glass(P(4, 'seven'), 'F#4', 1, 0, 1);
    k.play('impact', P(5, 'four') - 0.08, { gain: 0.7 }); paws(P(5, 'four') - 0.1, P(6, 'its') - 0.2, 4, 1.1);
    for (let i = 0; i < 4; i++) glass(P(5, 'four') - 0.1 + i * 0.25, ['D5', 'E5', 'F#5', 'A5'][i], 0.4, (i - 1.5) * 0.2, 0.4, true);
    facet(P(5, 'second') - 0.12, 600);
    facet(P(6, 'spine') - 0.12, 470); k.tone(P(6, 'bends'), { f: [[0, 300], [0.4, 600], [0.8, 300]], type: 'triangle', dur: 0.8, gain: 0.05, minor: true }); k.play('jump', P(6, 'spring') - 0.05, { gain: 0.5 }); glass(P(6, 'spring'), 'A4', 0.9, 0, 1);
    facet(P(7, 'lungs') - 0.12, 520); k.play('thud', P(7, 'heart') - 0.05, { f: 70, gain: 0.5 }); k.play('thud', P(7, 'heart') + 0.22, { f: 62, gain: 0.4 }); k.play('thud', P(7, 'huge'), { f: 70, gain: 0.4 }); k.play('thud', P(7, 'huge') + 0.22, { f: 62, gain: 0.3 });
    facet(P(8, 'tail') - 0.12, 560); k.play('whoosh', P(8, 'steers') - 0.1, { dur: 0.4, gain: 0.35 }); k.play('success', P(8, 'rudder') - 0.05, { f: 'D5', gain: 0.4 });
    // C myth
    wipe(CUT.myth); k.tone(CUT.myth + 0.2, { f: 'A2', type: 'sine', dur: P(10, 'but') - CUT.myth, gain: 0.04, a: 1 });
    k.play('riser', P(9, 'stopped') - 0.2, { dur: 1.0, gain: 0.35 }); k.play('impact', P(9, 'overheated') - 0.1, { gain: 0.7 }); pant(P(9, 'people'), P(10, 'but'));
    k.play('glitch', P(10, 'but') - 0.05, { gain: 0.4 }); k.play('impact', P(10, '2013') - 0.08, { gain: 0.8 }); glass(P(10, '2013'), 'D4', 0.9, 0, 1);
    k.play('blip', P(10, 'sensors') - 0.05, { f: 'A5', gain: 0.6 }); k.play('blip', P(10, 'sensors') + 0.12, { f: 'E6', gain: 0.5 }); facet(P(10, 'six') - 0.12, 600);
    paws(P(11, 'chase') - 0.15, P(12, 'jumped') - 0.1, 3.3); facet(P(11, 'chase') - 0.12, 520); facet(P(11, 'barely') - 0.12, 470); k.play('stamp', P(11, 'changed') - 0.08, { gain: 0.8 }); k.play('error', P(11, 'changed'), { f: 'G3', gain: 0.35 });
    k.play('riser', P(12, 'jumped') - 0.3, { dur: 0.5, gain: 0.3 }); k.play('impact', P(12, 'jumped') - 0.08, { gain: 0.8 }); facet(P(12, 'catch') - 0.12, 560); pant(P(12, 'catch'), CUT.limit);
    facet(P(13, 'stress') - 0.12, 470); k.tone(P(13, 'lions') - 0.15, { f: [[0, 70], [0.9, 55]], type: 'sawtooth', dur: 0.9, gain: 0.06, filter: 'lowpass', f2: 300 }); k.noise(P(13, 'lions') - 0.15, { dur: 0.9, color: 'brown', filter: 'lowpass', f: 260, gain: 0.25, a: 0.2 });
    // D limit
    wipe(CUT.limit); wind(CUT.limit, P(18, 'miss'), 1); paws(CUT.limit + 0.1, P(18, 'miss') + 0.3, 3.3);
    k.play('impact', P(14, 'stops') - 0.08, { gain: 0.6 }); facet(P(15, 'energy') - 0.12, 600);
    k.tone(P(15, 'burns') - 0.1, { f: [[0, 700], [1.6, 160]], type: 'square', dur: 1.6, gain: 0.03, filter: 'lowpass', f2: 1200 }); k.play('error', P(15, 'fast') + 0.1, { f: 'F3', gain: 0.3 });
    k.withMinor(() => { for (let x = P(16, 'full'); x < P(16, 'twenty'); x += 0.12) k.play('tick', x, { f: 4200, gain: 0.4 }); }); k.play('impact', P(16, 'twenty') - 0.08, { gain: 0.9 }); glass(P(16, 'twenty'), 'A4', 1, 0, 1.1);
    ribbon(P(17, 'few') - 0.1, 0); facet(P(17, 'hundred') - 0.12, 560);
    k.play('whoosh', P(18, 'miss') - 0.1, { dur: 0.5, gain: 0.5 }); k.play('stamp', P(18, 'done') - 0.08, { gain: 0.7 }); pant(P(18, 'done'), CUT.end);
    k.play('impact', P(19, 'half') - 0.08, { gain: 0.8 }); k.play('success', P(19, 'chases') - 0.05, { f: 'D5', gain: 0.35 }); k.play('error', P(19, 'end') - 0.05, { f: 'G3', gain: 0.3 }); facet(P(19, 'meal') - 0.12, 520);
    // E question
    wipe(CUT.end); wind(CUT.end, D, 0.6);
    facet(P(20, 'fast') - 0.12, 600); k.play('sparkle', P(20, 'twenty'), { n: 3, gain: 0.3 }); facet(P(21, 'slower') - 0.12, 470);
    ['A4', 'D5'].forEach((n, i) => glass(P(21, 'day') + i * 0.09, n, 0.9, (i - 0.5) * 0.3, 1.4)); k.tone(P(21, 'day'), { f: 'D3', type: 'triangle', dur: 1.4, gain: 0.12, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
