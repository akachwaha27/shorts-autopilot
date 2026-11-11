// ================= Low-Poly Faceted, vertical 1080x1920: "Why do crabs walk sideways?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W = 1080, HH = 1920;
  try { document.fonts.load('700 48px "Space Grotesk"'); } catch (e) { /* render anyway */ }
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael take) ----------
  const BEATS = [
    { s: 0.25, e: 2.05, w: {why: 0.25, do: 0.49, crabs: 0.66, walk: 1.07, sideways: 1.39} }, // 0 Why do crabs walk sideways?
    { s: 2.52, e: 4.25, w: {youd: 2.52, never: 2.78, guess: 3.1, its: 3.42, their: 3.61, knees: 3.93} }, // 1 You'd never guess it's their knees.
    { s: 4.69, e: 6.74, w: {a: 4.69, crabs: 4.78, body: 5.22, is: 5.58, wide: 5.76, and: 6.12, flat: 6.38} }, // 2 A crab's body is wide and flat,
    { s: 7.25, e: 9.17, w: {perfect: 7.25, for: 7.71, squeezing: 7.91, under: 8.51, rocks: 8.84} }, // 3 perfect for squeezing under rocks.
    { s: 9.52, e: 11.77, w: {but: 9.52, that: 9.7, shape: 9.94, stiffens: 10.25, its: 10.74, shoulder: 10.92, joints: 11.41} }, // 4 But that shape stiffens its shoulder joints.
    { s: 12.15, e: 14.65, w: {so: 12.15, the: 12.29, real: 12.51, bending: 12.79, happens: 13.29, one: 13.79, joint: 14.01, down: 14.37} }, // 5 So the real bending happens one joint down,
    { s: 15.25, e: 17.08, w: {a: 15.25, simple: 15.33, hinge: 15.79, like: 16.17, your: 16.47, knee: 16.78} }, // 6 a simple hinge, like your knee,
    { s: 17.48, e: 19.44, w: {that: 17.48, only: 17.78, swings: 18.08, out: 18.54, to: 18.76, the: 18.91, side: 19.14} }, // 7 that only swings out to the side.
    { s: 19.84, e: 22.26, w: {eight: 19.84, walking: 20.21, legs: 20.74, all: 21.05, hinged: 21.27, that: 21.73, way: 22.03} }, // 8 Eight walking legs, all hinged that way.
    { s: 22.68, e: 25.16, w: {going: 22.68, forward: 23.08, a: 23.64, crab: 23.72, can: 24.04, only: 24.28, shuffle: 24.6} }, // 9 Going forward, a crab can only shuffle.
    { s: 25.61, e: 27.62, w: {sideways: 25.61, those: 26.18, hinges: 26.54, swing: 26.97, wide: 27.33} }, // 10 Sideways, those hinges swing wide,
    { s: 27.87, e: 28.73, w: {and: 27.87, it: 28.13, zooms: 28.3} }, // 11 and it zooms.
    { s: 29.11, e: 31.24, w: {it: 29.11, can: 29.26, dart: 29.49, left: 29.79, or: 30.1, right: 30.25, in: 30.63, a: 30.78, flash: 30.86} }, // 12 It can dart left or right in a flash,
    { s: 31.62, e: 34.11, w: {so: 31.62, a: 31.76, hungry: 31.83, gull: 32.26, cant: 32.54, guess: 32.83, where: 33.18, its: 33.54, going: 33.75} }, // 13 so a hungry gull can't guess where it's going.
    { s: 34.48, e: 36.98, w: {scientists: 34.48, filmed: 35.24, fifty: 35.69, kinds: 36.07, of: 36.45, crabs: 36.6} }, // 14 Scientists filmed fifty kinds of crabs.
    { s: 37.33, e: 39.35, w: {thirtyfive: 37.33, of: 38.01, them: 38.14, walked: 38.41, sideways: 38.81} }, // 15 Thirty-five of them walked sideways.
    { s: 39.76, e: 41.88, w: {they: 39.76, think: 40.02, the: 40.34, trick: 40.53, showed: 40.85, up: 41.24, just: 41.37, once: 41.62} }, // 16 They think the trick showed up just once,
    { s: 42.28, e: 44.36, w: {about: 42.28, two: 42.63, hundred: 42.84, million: 43.32, years: 43.81, ago: 44.15} }, // 17 about two hundred million years ago.
    { s: 44.72, e: 46.47, w: {so: 44.72, if: 44.86, your: 45.0, knees: 45.28, bent: 45.63, sideways: 45.91} }, // 18 So if your knees bent sideways,
    { s: 46.84, e: 48.29, w: {where: 46.84, would: 47.13, you: 47.42, scuttle: 47.59, first: 48.0} }, // 19 where would you scuttle first?
  ];
  const P = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in ' + i); return v; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scenes: beach hook (sideways? the knees; wide + flat; under a rock) -> leg close-up (stiff shoulder, hinge one joint down)
  //         -> golden beach (8 legs; forward shuffle vs sideways zoom) -> gull (dart left/right) -> lab (50 kinds, 35 sideways) -> deep time (once, 200 M yr) -> question
  const CUT = { leg: BEATS[4].s - 0.3, legs8: BEATS[8].s - 0.3, gull: BEATS[12].s - 0.25, lab: BEATS[14].s - 0.3, time: BEATS[16].s - 0.3, end: BEATS[18].s - 0.3 };
  const CUTS = [CUT.leg, CUT.legs8, CUT.gull, CUT.lab, CUT.time, CUT.end];
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
  // distant faceted ridge line + lagoon water (cached per palette)
  // =================== DESERT (faceted dunes with depth fog, cached per palette) ===================
  function duneLayer(key, pal) {
    if (BG[key]) return BG[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(key.length * 17 + 5), nz = H.makeNoise(key.length * 3 + 1);
    const rows = [1120, 1210, 1320, 1450, 1600, 1780, 1990];
    for (let j = 0; j < rows.length; j++) {
      const depth = 1 - j / (rows.length - 1), base = rows[j], cs = 80 + j * 40, pts = [];
      for (let x = -cs; x <= W + cs * 2; x += cs) pts.push([x + r.range(-0.3, 0.3) * cs, base - Math.max(0, nz.n2(x * 0.003 + j * 7, j * 1.7)) * (90 + j * 40) - 20]);
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i], b = pts[i + 1], m = [(a[0] + b[0]) / 2 + r.range(-20, 20), HH + 40];
        const slope = (b[1] - a[1]) / (b[0] - a[0]);
        let lit = H.mix(pal.sandD, pal.sandL, H.clamp(0.55 - slope * 1.6 + r.range(-0.08, 0.08)));
        let shd = H.mix(pal.sandD, pal.sand, 0.35 + r() * 0.2);
        const fog = depth * 0.62; lit = H.mix(lit, pal.fog, fog); shd = H.mix(shd, pal.fog, fog);
        tri2(g, a, b, m, H.rgba(lit)); tri2(g, a, m, [a[0], HH + 40], H.rgba(shd));
      }
    }
    return (BG[key] = c);
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
  // =================== THE CRAB (front view, faceted; local units: feet on y=0, body centre y=-140) ===================
  const CRAB = [222, 88, 58], CRAB_L = [255, 160, 110], CRAB_D = [140, 46, 40], GOLD = [255, 214, 96];
  const LIGHT = -2.2;
  const shadeA = (a) => 0.5 + 0.5 * Math.cos(a - LIGHT);
  const BCY = -140, BRX = 210, BRY = 62;
  const CBODY = (() => {
    const r = H.rng(57), N = 18, out = [], inner = [];
    const pt = (a, k) => { let ry = BRY; if (Math.sin(a) < 0) ry *= 1.18; else ry *= 0.8; const rx = BRX * (Math.sin(a) < 0 ? 1 : 0.94); return [Math.cos(a) * rx * k, Math.sin(a) * ry * k]; };
    for (let i = 0; i < N; i++) { const a = i / N * Math.PI * 2; out.push(pt(a, 1 + r.range(-0.03, 0.03))); inner.push(pt(a + Math.PI / N, 0.56 + r.range(-0.05, 0.05))); }
    const tris = [];
    for (let i = 0; i < N; i++) { const j = (i + 1) % N; tris.push([out[i], out[j], inner[i]], [out[j], inner[j], inner[i]], [inner[i], inner[j], [0, -6]]); }
    return tris.map((f) => { const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cy = (f[0][1] + f[1][1] + f[2][1]) / 3; return { f, a: Math.atan2(cy, cx), d: Math.hypot(cx, cy), j: 0.93 + r() * 0.12 }; });
  })();
  function knee2(S, T, L1, L2, sd) { // two-bone IK, knee bends up and outward
    let dx = T[0] - S[0], dy = T[1] - S[1], d = Math.hypot(dx, dy);
    const mx = L1 + L2 - 2; if (d > mx) { T = [S[0] + dx / d * mx, S[1] + dy / d * mx]; dx = T[0] - S[0]; dy = T[1] - S[1]; d = mx; }
    const a = (L1 * L1 - L2 * L2 + d * d) / (2 * d), h = Math.sqrt(Math.max(0, L1 * L1 - a * a));
    const px = S[0] + a * dx / d, py = S[1] + a * dy / d;
    let nx = -dy / d, ny = dx / d; if (ny > 0) { nx = -nx; ny = -ny; }
    return [[px + nx * h, py + ny * h], T];
  }
  function tint(c, o) { let col = c; if (o.col) col = H.mix(col, o.col, o.colK ?? 1); return col; }
  // o: { x, y, s, walk, lift, fwd, squeeze, kneeGlow, shGlow, legHi:[8], dim, hero, swing, col, colK, eyes }
  function frontCrab(ctx, o) {
    const s = o.s || 1, small = s < 0.3;
    const bob = o.walk != null ? -Math.abs(Math.sin(o.walk * Math.PI * 2)) * 6 : 0;
    ctx.save(); ctx.translate(o.x, o.y + bob * s); ctx.scale(s, s);
    const map = (p) => [o.x + p[0] * s, o.y + (p[1] + bob) * s];
    const sq = o.squeeze || 0;
    const C = tint(CRAB, o), CL = tint(CRAB_L, o), CD = tint(CRAB_D, o);
    // eye stalks (behind the body)
    const es = 1 - 0.65 * sq;
    for (const sd of [-1, 1]) {
      const b = [sd * 42, BCY - 60], tp = [sd * 56, BCY - 60 - 72 * es];
      seg(ctx, b, tp, 11, 8, CD, 0.05);
      gem(ctx, tp[0], tp[1], 19, [34, 24, 30]); gem(ctx, tp[0] - 4, tp[1] - 6, 6, [255, 255, 255]);
    }
    // legs
    const legs = [];
    for (let i = 0; i < 4; i++) for (const sd of [-1, 1]) {
      const idx = (sd < 0 ? 0 : 4) + i;
      const S = [sd * (186 - i * 12), BCY + 18 + i * 6];
      const L1 = 190 + i * 12, L2 = 210 + i * 14;
      let tx = sd * (330 + i * 55) + sd * sq * 120 * (0.5 + i / 3), ty = 0;
      if (o.walk != null) { const p = o.walk * Math.PI * 2 + i * Math.PI / 2 + (sd > 0 ? 0 : Math.PI); tx += Math.sin(p) * 42 * (o.stride ?? 1); ty -= Math.max(0, Math.cos(p)) * 40 * (o.lift ?? 1); }
      if (o.fwd != null) { const p = o.fwd * Math.PI * 2 + i * Math.PI / 2 + (sd > 0 ? 0 : Math.PI); ty -= Math.max(0, Math.cos(p)) * 14; }
      let [K, T] = knee2(S, [tx, ty], L1, L2, sd);
      const isHero = o.hero === idx;
      if (isHero && o.swing) { const ang = -sd * o.swing * 0.55, dx = T[0] - K[0], dy = T[1] - K[1]; T = [K[0] + dx * Math.cos(ang) - dy * Math.sin(ang), K[1] + dx * Math.sin(ang) + dy * Math.cos(ang)]; }
      legs.push({ idx, i, sd, S, K, T, isHero });
    }
    const drawLeg = (L) => {
      const dark = (3 - L.i) * 0.07 + (L.sd < 0 ? 0.03 : 0);
      let col = C; const hi = o.legHi ? o.legHi[L.idx] || 0 : 0;
      if (hi > 0) col = H.mix(col, GOLD, hi * 0.8);
      const a = (o.dim != null && !L.isHero) ? o.dim : 1;
      ctx.globalAlpha = a;
      seg(ctx, L.S, L.K, 25, 19, col, dark); seg(ctx, L.K, L.T, 18, 3, H.mix(col, CL, 0.15), dark);
      if (!small) {
        hexKnob(ctx, L.K[0], L.K[1], 19, H.mix(CD, GOLD, (o.kneeGlow || 0) * (o.hero == null || L.isHero ? 1 : 0.3)), (o.kneeGlow || 0) * (o.hero == null || L.isHero ? 1 : 0));
        if (o.shGlow > 0.01 && (o.hero == null || L.isHero)) { const g = ctx.createRadialGradient(L.S[0], L.S[1], 6, L.S[0], L.S[1], 70); g.addColorStop(0, `rgba(255,80,60,${0.75 * o.shGlow})`); g.addColorStop(1, 'rgba(255,80,60,0)'); ctx.fillStyle = g; ctx.fillRect(L.S[0] - 72, L.S[1] - 72, 144, 144); }
        hexKnob(ctx, L.S[0], L.S[1], 17, H.mix(CD, [255, 90, 70], (o.shGlow || 0)), 0);
      }
      ctx.globalAlpha = 1;
    };
    legs.filter((L) => !L.isHero).forEach(drawLeg);
    // body (carapace)
    for (const b of CBODY) {
      const sh = shadeA(b.a) * (0.55 + 0.45 * H.clamp(b.d / 110));
      let col = H.mix(CD, CL, H.clamp(sh * 0.9 + 0.05)); col = col.map((v) => Math.min(255, v * b.j));
      tri2(ctx, [b.f[0][0], BCY + b.f[0][1]], [b.f[1][0], BCY + b.f[1][1]], [b.f[2][0], BCY + b.f[2][1]], H.rgba(col));
    }
    // carapace ridge + little spikes on the rim
    for (const sd of [-1, 1]) for (let k = 0; k < 3; k++) { const x = sd * (120 + k * 30), y = BCY - 52 + k * 14; tri2(ctx, [x - sd * 14, y + 8], [x + sd * 22, y - 10], [x + sd * 8, y + 14], H.rgba(H.mix(CL, [255, 255, 255], 0.2))); }
    // mouth plate
    tri2(ctx, [-34, BCY + 34], [34, BCY + 34], [0, BCY + 64], H.rgba(H.mix(CD, [60, 20, 20], 0.2)));
    // claws in front
    for (const sd of [-1, 1]) {
      const sh0 = [sd * 120, BCY + 40], el = [sd * 190, BCY + 96], wr = [sd * 150, BCY + 120];
      seg(ctx, sh0, el, 24, 22, C, 0.05); seg(ctx, el, wr, 22, 26, C, 0.02);
      const px = sd * 112, py = BCY + 130;
      ctx.save(); ctx.translate(px, py); ctx.scale(sd, 1);
      tri2(ctx, [40, -42], [-20, -36], [44, 6], H.rgba(CL)); tri2(ctx, [-20, -36], [-34, 8], [44, 6], H.rgba(C)); tri2(ctx, [-34, 8], [40, 40], [44, 6], H.rgba(CD));
      tri2(ctx, [-20, -36], [-86, -8], [-34, -12], H.rgba(H.mix(CL, [255, 255, 255], 0.2))); // upper finger
      tri2(ctx, [-34, 8], [-80, 4], [-30, -6], H.rgba(CD)); // lower finger
      ctx.restore();
    }
    legs.filter((L) => L.isHero).forEach(drawLeg);
    ctx.restore();
    const hero = legs.find((L) => L.isHero) || legs[7];
    return { map, body: map([0, BCY]), knee: map(hero.K), sh: map(hero.S), tip: map(hero.T), legs: legs.map((L) => ({ idx: L.idx, K: map(L.K), S: map(L.S), T: map(L.T) })), top: map([0, BCY - 140]) };
  }
  function shadow(ctx, x, y, w, a = 0.26) { ctx.fillStyle = `rgba(70,40,40,${a})`; ctx.beginPath(); ctx.ellipse(x, y + 6, w, 22, 0, 0, Math.PI * 2); ctx.fill(); }

  // =================== BEACH (sky mosaic, faceted sea band, flat faceted sand) ===================
  const PAL = {
    day: { top: [60, 130, 220], bot: [255, 226, 190], sunX: 860, sunY: 420, glow: [255, 248, 220], sea: [40, 150, 210], seaL: [120, 220, 240], sand: [236, 196, 130], sandL: [255, 232, 170], sandD: [200, 150, 90], fog: [250, 226, 200] },
    gold: { top: [70, 70, 150], bot: [255, 190, 120], sunX: 240, sunY: 820, glow: [255, 220, 160], sea: [60, 110, 170], seaL: [255, 190, 140], sand: [232, 170, 110], sandL: [255, 214, 150], sandD: [180, 110, 80], fog: [250, 190, 150] },
    sky: { top: [110, 180, 240], bot: [230, 246, 255], sunX: 880, sunY: 300, glow: [255, 255, 240], sea: [50, 170, 200], seaL: [150, 235, 240], sand: [240, 210, 150], sandL: [255, 240, 190], sandD: [205, 165, 105], fog: [240, 240, 230] },
    sunset: { top: [50, 40, 110], bot: [255, 150, 140], sunX: 540, sunY: 900, glow: [255, 200, 170], sea: [90, 70, 150], seaL: [255, 160, 150], sand: [220, 150, 130], sandL: [250, 196, 160], sandD: [150, 90, 100], fog: [240, 160, 150] },
    jur: { top: [40, 50, 100], bot: [255, 180, 130], sunX: 760, sunY: 980, glow: [255, 220, 170], sea: [70, 120, 130], seaL: [200, 200, 150], sand: [96, 150, 90], sandL: [150, 200, 110], sandD: [40, 90, 70], fog: [220, 170, 140] },
  };
  const HZ = 1000; // horizon
  function seaLayer(key, pal) {
    if (BG[key]) return BG[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(key.length * 13 + 3);
    const rows = [HZ, HZ + 40, HZ + 95, HZ + 160, HZ + 230];
    for (let j = 0; j < rows.length - 1; j++) for (let x = -60; x < W + 60; x += 90) {
      const y0 = rows[j], y1 = rows[j + 1], xo = (j % 2) * 45;
      const a = H.mix(pal.sea, pal.seaL, H.clamp(0.15 + r() * 0.35 + (j === 0 ? 0.3 : 0))), b = H.mix(pal.sea, [20, 40, 80], 0.1 + r() * 0.15);
      tri2(g, [x + xo, y0], [x + xo + 90, y0], [x + xo + 45, y1], H.rgba(a)); tri2(g, [x + xo + 45, y1], [x + xo + 90, y0], [x + xo + 135, y1], H.rgba(b));
    }
    return (BG[key] = c);
  }
  function sandLayer(key, pal) {
    if (BG[key]) return BG[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(key.length * 17 + 5), nz = H.makeNoise(key.length * 3 + 1);
    const rows = [1220, 1290, 1380, 1490, 1630, 1800, 2000];
    for (let j = 0; j < rows.length; j++) {
      const depth = 1 - j / (rows.length - 1), base = rows[j], cs = 80 + j * 40, pts = [];
      for (let x = -cs; x <= W + cs * 2; x += cs) pts.push([x + r.range(-0.3, 0.3) * cs, base - Math.max(0, nz.n2(x * 0.003 + j * 7, j * 1.7)) * (30 + j * 16) - 10]);
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i], b = pts[i + 1], m = [(a[0] + b[0]) / 2 + r.range(-20, 20), HH + 40];
        const slope = (b[1] - a[1]) / (b[0] - a[0]);
        let lit = H.mix(pal.sandD, pal.sandL, H.clamp(0.6 - slope * 1.6 + r.range(-0.08, 0.08)));
        let shd = H.mix(pal.sandD, pal.sand, 0.45 + r() * 0.2);
        const fog = depth * 0.5; lit = H.mix(lit, pal.fog, fog); shd = H.mix(shd, pal.fog, fog);
        tri2(g, a, b, m, H.rgba(lit)); tri2(g, a, m, [a[0], HH + 40], H.rgba(shd));
      }
    }
    return (BG[key] = c);
  }
  function foam(ctx, t, pal) {
    const r = H.rng(71); const y = HZ + 222 + Math.sin(t * 1.3) * 10;
    for (let x = -80; x < W + 80; x += 70) { const h = 18 + r() * 16, xo = Math.sin(t * 1.3 + x * 0.01) * 14; tri2(ctx, [x + xo, y], [x + xo + 70, y + r.range(-6, 6)], [x + xo + 35, y - h], H.rgba(H.mix(pal.seaL, [255, 255, 255], 0.65), 0.9)); }
  }
  function beach(ctx, t, key) {
    const pal = PAL[key];
    ctx.drawImage(mosaicLayer(key + 'sky', pal.top, pal.bot, [pal.sunX, pal.sunY + 300], pal.glow, HZ), 0, 0);
    if (key === 'sunset' || key === 'jur' || key === 'gold') stars(ctx, 60, 480, 31 + key.length, 0.7);
    facetSun(ctx, pal.sunX, pal.sunY, key === 'sky' ? 90 : 84, H.mix(pal.glow, [255, 200, 120], 0.3), [255, 252, 236], 'rgba(255,230,190,0.45)');
    if (key === 'jur') { ctx.drawImage(sandLayer(key + 'hill', pal), 0, 0); return; }
    ctx.drawImage(seaLayer(key + 'sea', pal), 0, 0);
    foam(ctx, t, pal);
    ctx.drawImage(sandLayer(key + 'sand', pal), 0, 0);
  }
  function header(ctx, t) {
    const k = EO(t, P(1, 'youd') - 0.1, P(1, 'youd') + 0.3); if (k <= 0 || t > CUT.end) return;
    ctx.save(); ctx.globalAlpha = k; lpTag(ctx, 540, 222, 'WHY DO CRABS WALK SIDEWAYS?', { font: FONT(42), bg: INK, col: '#fff', k: 0.6 + 0.4 * k }); ctx.restore();
  }
  const SH = 1560; // ground line
  function dimension(ctx, x0, x1, y, k, col) { // two ribbon arrows out from the middle
    if (k <= 0.01) return; const m = (x0 + x1) / 2;
    lpArrow(ctx, [m, y], [H.lerp(m, x0, 0.5), y - 14], [x0, y], k, col, 18); lpArrow(ctx, [m, y], [H.lerp(m, x1, 0.5), y - 14], [x1, y], k, col, 18);
  }
  // faceted rock slab (overhang); facets flip in with k
  const ROCK = (() => {
    const r = H.rng(303), out = [[600, SH - 190], [640, SH - 330], [720, SH - 470], [860, SH - 560], [1000, SH - 590], [1140, SH - 560], [1140, SH + 10], [1040, SH + 10], [1010, SH - 150], [900, SH - 175], [760, SH - 170]];
    const c = [930, SH - 380], tris = [];
    for (let i = 0; i < out.length; i++) { const a = out[i], b = out[(i + 1) % out.length], m = [(a[0] + b[0]) / 2 * 0.55 + c[0] * 0.45 + r.range(-20, 20), (a[1] + b[1]) / 2 * 0.55 + c[1] * 0.45 + r.range(-20, 20)]; tris.push([a, b, m], [m, b, c]); }
    return tris.map((f) => { const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cy = (f[0][1] + f[1][1] + f[2][1]) / 3; const n = Math.atan2(cy - c[1], cx - c[0]); return { f, cx, cy, sh: shadeA(n) * 0.8 + r() * 0.2, d: (cx - 600) / 540 * 0.6 + r() * 0.3 }; });
  })();
  function rock(ctx, k) {
    if (k <= 0) return;
    for (const m of ROCK) { const p = H.ease.back(H.clamp((k * 1.6 - m.d) / 0.6)); if (p <= 0.01) continue; const f = m.f.map((q) => [m.cx + (q[0] - m.cx) * p, m.cy + (q[1] - m.cy) * p]); tri2(ctx, f[0], f[1], f[2], H.rgba(H.mix([90, 86, 110], [196, 190, 200], m.sh))); }
  }

  // ---- A: hook on the beach; wide + flat; squeezes under a rock ----
  function sceneHook(ctx, t) {
    beach(ctx, t, 'day');
    const s = 0.88;
    const xin = H.lerp(-320, 540, EO(t, 0.0, 1.7)), xr = H.lerp(0, 290, EI(t, P(3, 'squeezing') - 0.1, P(3, 'rocks') + 0.35));
    const x = xin + xr, sq = EI(t, P(3, 'squeezing'), P(3, 'rocks') + 0.2);
    shadow(ctx, x, SH, 300 * s / 0.75);
    const c = frontCrab(ctx, { x, y: SH, s, walk: x / 120, squeeze: sq, kneeGlow: EI(t, P(1, 'knees') - 0.15, P(1, 'knees') + 0.1) * (1 - EI(t, P(2, 'a') - 0.1, P(2, 'body'))) });
    rock(ctx, EO(t, P(3, 'perfect') - 0.15, P(3, 'squeezing') + 0.15));
    const out0 = 1 - EI(t, P(1, 'never') - 0.15, P(1, 'never') + 0.05);
    lpTag(ctx, 540, 520, 'SIDEWAYS?', { k: BK(t, P(0, 'sideways') - 0.12) * out0, font: FONT(130), h: 190, bg: '#fff3dc' });
    if (out0 > 0.01) dimension(ctx, 200, 880, 690, EI(t, P(0, 'sideways') - 0.05, P(0, 'sideways') + 0.4) * out0, [255, 226, 122]);
    const out1 = 1 - EI(t, P(2, 'a') - 0.2, P(2, 'a') + 0.05);
    lpTag(ctx, 540, 520, 'THE KNEES!', { k: BK(t, P(1, 'knees') - 0.12) * out1, font: FONT(130), h: 190, bg: CORAL, col: '#fff' });
    if (out1 > 0.01 && t > P(1, 'knees') - 0.1) { const kk = c.legs.find((L) => L.idx === 6).K; lpArrow(ctx, [640, 640], [700, 760], [kk[0] - 10, kk[1] - 30], EI(t, P(1, 'knees') - 0.1, P(1, 'knees') + 0.3) * out1, [255, 226, 122], 20); }
    const out2 = 1 - EI(t, P(3, 'perfect') - 0.25, P(3, 'perfect'));
    const bw = 210 * s;
    if (out2 > 0.01) dimension(ctx, c.body[0] - bw, c.body[0] + bw, c.body[1] - 120, EI(t, P(2, 'wide') - 0.1, P(2, 'wide') + 0.3) * out2, [255, 255, 255]);
    lpTag(ctx, 540, 480, 'WIDE', { k: BK(t, P(2, 'wide') - 0.12) * out2, font: FONT(120), h: 180, bg: '#fff3dc' });
    lpTag(ctx, 540, 660, '+ FLAT', { k: BK(t, P(2, 'flat') - 0.12) * out2, font: FONT(110), h: 170, bg: '#7fd8ff' });
    lpTag(ctx, 540, 480, 'SQUEEZE', { k: BK(t, P(3, 'squeezing') - 0.12), font: FONT(120), h: 180, bg: '#ffe27a' });
    lpTag(ctx, 540, 650, 'UNDER ROCKS', { k: BK(t, P(3, 'rocks') - 0.12), font: FONT(96), h: 160, bg: '#fff3dc' });
  }
  // ---- B: close-up of the legs: stiff shoulder, the hinge one joint down ----
  function humanLeg(ctx, x, y, bend, k) {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    const hip = [0, 0], knee = [10, 150], a = 0.15 + bend * 1.1, foot = [knee[0] - Math.sin(a) * 150, knee[1] + Math.cos(a) * 150];
    const SK = [236, 186, 150];
    seg(ctx, hip, knee, 40, 30, SK, 0); seg(ctx, knee, foot, 28, 20, SK, 0.05);
    tri2(ctx, [foot[0] - 50, foot[1] + 8], [foot[0] + 18, foot[1] - 14], [foot[0] + 20, foot[1] + 14], H.rgba([200, 150, 120]));
    hexKnob(ctx, knee[0], knee[1], 22, GOLD, 0.6);
    ctx.restore();
  }
  function sceneLeg(ctx, t) {
    ctx.drawImage(mosaicLayer('blue', [26, 34, 84], [80, 70, 140], [600, 1100], [120, 160, 255], 1920, 110), 0, 0);
    // slow push-in toward the hinge
    const z = 1 + 0.12 * EI(t, CUT.leg, CUT.legs8);
    ctx.save(); ctx.translate(480, 1000); ctx.scale(z, z); ctx.translate(-480, -1000);
    shadow(ctx, 380, 1660, 700, 0.3);
    const swing = t > P(7, 'swings') - 0.15 ? Math.sin((t - (P(7, 'swings') - 0.15)) * 4.2) * EO(t, P(7, 'swings') - 0.15, P(7, 'swings') + 0.2) : 0;
    const c = frontCrab(ctx, { x: -260, y: 1660, s: 2.4, hero: 7, swing, dim: 1 - 0.55 * EI(t, P(4, 'shoulder') - 0.3, P(4, 'shoulder')), shGlow: EI(t, P(4, 'shoulder') - 0.12, P(4, 'shoulder') + 0.1) * (1 - 0.6 * EI(t, P(5, 'bending') - 0.2, P(5, 'bending'))), kneeGlow: EI(t, P(5, 'joint') - 0.15, P(5, 'joint') + 0.1) });
    ctx.restore();
    const zm = (p) => [480 + (p[0] - 480) * z, 1000 + (p[1] - 1000) * z];
    const K = zm(c.knee), S = zm(c.sh);
    // stiff shoulder
    const ks = BK(t, P(4, 'shoulder') - 0.12) * (1 - EI(t, P(5, 'so') - 0.2, P(5, 'so') + 0.05));
    lpTag(ctx, 540, 440, 'STIFF', { k: BK(t, P(4, 'stiffens') - 0.12) * (1 - EI(t, P(5, 'so') - 0.2, P(5, 'so') + 0.05)), font: FONT(130), h: 190, bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 620, 'SHOULDERS', { k: ks, font: FONT(96), h: 160, bg: '#fff3dc' });
    hexBadge(ctx, S[0] + 90, S[1] - 110, BK(t, P(4, 'joints') - 0.12), false, 50);
    // one joint down
    const out5 = 1 - EI(t, P(6, 'a') - 0.2, P(6, 'a') + 0.05);
    lpTag(ctx, 540, 440, 'THE BEND', { k: BK(t, P(5, 'bending') - 0.12) * out5, font: FONT(120), h: 180, bg: '#fff3dc' });
    lpTag(ctx, 540, 610, 'JOINT #2', { k: BK(t, P(5, 'joint') - 0.12) * out5, font: FONT(110), h: 170, bg: '#ffe27a' });
    if (out5 > 0.01 && t > P(5, 'joint') - 0.1) lpArrow(ctx, [620, 700], [700, 800], [K[0] + 20, K[1] - 50], EI(t, P(5, 'joint') - 0.1, P(5, 'joint') + 0.3) * out5, [255, 226, 122], 22);
    // hinge like your knee
    const out6 = 1 - EI(t, P(7, 'that') - 0.2, P(7, 'that') + 0.05);
    lpTag(ctx, 540, 440, 'A HINGE', { k: BK(t, P(6, 'hinge') - 0.12) * out6, font: FONT(124), h: 184, bg: '#ffe27a' });
    lpTag(ctx, 470, 610, 'LIKE YOUR KNEE', { k: BK(t, P(6, 'knee') - 0.12) * out6, font: FONT(76), bg: '#fff3dc' });
    humanLeg(ctx, 900, 700, 0.5 + 0.5 * Math.sin((t - P(6, 'knee')) * 4), BK(t, P(6, 'knee') - 0.12) * out6 * 0.9);
    // only swings out to the side
    lpTag(ctx, 540, 440, 'ONLY', { k: BK(t, P(7, 'only') - 0.12), font: FONT(110), h: 170, bg: INK, col: '#fff' });
    lpTag(ctx, 540, 610, 'SIDE TO SIDE', { k: BK(t, P(7, 'side') - 0.12), font: FONT(104), h: 170, bg: '#ffe27a' });
    const ka = EI(t, P(7, 'swings') - 0.1, P(7, 'out') + 0.3);
    if (ka > 0.01) { lpArrow(ctx, [K[0] + 140, K[1] + 200], [K[0] + 330, K[1] + 120], [K[0] + 300, K[1] - 80], ka, [255, 226, 122], 20); lpArrow(ctx, [K[0] + 120, K[1] + 230], [K[0] + 160, K[1] + 420], [K[0] - 40, K[1] + 450], ka, [255, 226, 122], 20); }
  }
  // ---- C: eight legs; forward shuffle vs sideways zoom (golden hour) ----
  function sceneLegs8(ctx, t) {
    beach(ctx, t, 'gold');
    const fw = EI(t, P(9, 'forward') - 0.1, P(10, 'sideways') - 0.25) * (1 - EI(t, P(10, 'sideways') - 0.25, P(10, 'sideways') + 0.15));
    const s = 0.88 + 0.06 * fw;
    const zoomT = P(11, 'zooms') - 0.1;
    const zx = t > zoomT ? Math.pow((t - zoomT) / (CUT.gull - zoomT), 1.6) * 900 : 0;
    const side = t > P(10, 'sideways') - 0.05;
    const walk = side ? (t - P(10, 'sideways')) * (t > zoomT ? 5.5 : 2.4) : 0;
    const legHi = []; for (let i = 0; i < 8; i++) { const order = [3, 2, 1, 0, 4, 5, 6, 7][i]; legHi[order] = BK(t, P(8, 'eight') - 0.1 + i * 0.12, 0.25) * (1 - EI(t, P(8, 'hinged') - 0.1, P(8, 'way') + 0.2)); }
    const x = 540 + zx, y = SH + 40 * fw;
    if (zx > 10) for (let i = 0; i < 6; i++) { const yy = SH - 60 - i * 40; tri2(ctx, [x - 300 - i * 30, yy], [x - 300 - i * 30 - 220 * H.clamp(zx / 200), yy - 8], [x - 300 - i * 30 - 200 * H.clamp(zx / 200), yy + 8], 'rgba(255,240,210,0.6)'); }
    shadow(ctx, x, y, 340);
    frontCrab(ctx, { x, y, s, walk: side ? walk : null, stride: side ? 1.5 : 1, lift: side ? 1.3 : 1, fwd: fw > 0.05 ? (t - P(9, 'forward')) * 1.4 : null, legHi, kneeGlow: EI(t, P(8, 'hinged') - 0.12, P(8, 'hinged') + 0.1) * (1 - EI(t, P(9, 'going') - 0.2, P(9, 'going'))) });
    const n = Math.max(0, Math.min(8, Math.floor((t - (P(8, 'eight') - 0.1)) / 0.12) + 1));
    const out8 = 1 - EI(t, P(9, 'going') - 0.25, P(9, 'going') - 0.05);
    bigNumber(ctx, 540, 600, String(n), 220, BK(t, P(8, 'eight') - 0.12) * out8, '#ffe27a');
    lpTag(ctx, 540, 700, 'WALKING LEGS', { k: BK(t, P(8, 'walking') - 0.12) * out8, font: FONT(84), bg: '#fff3dc' });
    lpTag(ctx, 540, 840, 'SAME HINGE', { k: BK(t, P(8, 'hinged') - 0.12) * out8, font: FONT(76), bg: INK, col: '#fff' });
    const out9 = 1 - EI(t, P(10, 'sideways') - 0.3, P(10, 'sideways') - 0.05);
    lpTag(ctx, 540, 470, 'FORWARD', { k: BK(t, P(9, 'forward') - 0.12) * out9, font: FONT(124), h: 184, bg: '#fff3dc' });
    lpTag(ctx, 540, 640, 'SHUFFLE…', { k: BK(t, P(9, 'shuffle') - 0.12) * out9, font: FONT(100), h: 164, bg: '#cfd6ff' });
    hexBadge(ctx, 860, 400, BK(t, P(9, 'shuffle') - 0.05) * out9, false, 52);
    lpTag(ctx, 540, 470, 'SIDEWAYS', { k: BK(t, P(10, 'sideways') - 0.12), font: FONT(124), h: 184, bg: '#ffe27a' });
    lpTag(ctx, 540, 665, 'WIDE STRIDES', { k: BK(t, P(10, 'swing') - 0.12) * (1 - EI(t, P(11, 'zooms') - 0.25, P(11, 'zooms') - 0.1)), font: FONT(88), bg: '#fff3dc' });
    lpTag(ctx, 540, 665, 'ZOOM!', { k: BK(t, P(11, 'zooms') - 0.12), font: FONT(130), h: 190, bg: MINT, col: '#fff' });
  }
  // ---- D: dart left or right; the gull can't guess ----
  function gull(ctx, x, y, s, flap, dir = -1) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s * dir, s);
    const wy = Math.sin(flap) * 70, W1 = [235, 240, 248], W2 = [170, 180, 200], GR = [120, 128, 150];
    tri2(ctx, [-30, -6], [40, -60 - wy], [60, 0], H.rgba(W2)); // far wing
    tri2(ctx, [-90, 0], [70, -16], [90, 6], H.rgba(W1)); tri2(ctx, [-90, 0], [90, 6], [40, 26], H.rgba(W2)); // body
    tri2(ctx, [-90, 0], [-140, -14], [-130, 12], H.rgba(GR)); // tail
    tri2(ctx, [70, -16], [118, -4], [90, 6], H.rgba(W1)); tri2(ctx, [116, -6], [150, 2], [116, 6], H.rgba([255, 170, 60])); // head + beak
    gem(ctx, 100, -6, 5, [30, 30, 40]);
    tri2(ctx, [-20, -4], [30, -110 + wy * 1.2], [50, -2], H.rgba(W1)); tri2(ctx, [30, -110 + wy * 1.2], [10, -150 + wy * 1.6], [0, -100 + wy * 1.1], H.rgba(GR)); // near wing
    ctx.restore();
  }
  function sceneGull(ctx, t) {
    beach(ctx, t, 'sky');
    const T = [[CUT.gull, 540], [P(12, 'left') - 0.12, 400], [P(12, 'right') - 0.12, 680], [P(12, 'flash') - 0.1, 480], [P(13, 'gull') - 0.05, 650], [P(13, 'where') - 0.1, 430], [P(13, 'going') + 0.1, 560]];
    let x = 540, vx = 0;
    for (let i = 1; i < T.length; i++) { if (t >= T[i][0]) { const u = EO(t, T[i][0], T[i][0] + 0.28); x = H.lerp(T[i - 1][1], T[i][1], u); vx = u < 1 ? 1 : 0; } }
    const gx = H.lerp(960, 160, ph(t, CUT.gull, CUT.lab)) + Math.sin(t * 1.4) * 40, gy = 860 + Math.sin(t * 2.1) * 25;
    gull(ctx, gx, gy, 1.6, t * 7, -1);
    shadow(ctx, x, SH, 280);
    frontCrab(ctx, { x, y: SH, s: 0.82, walk: x / 70, stride: 1.4 });
    if (t > P(12, 'left') - 0.12) lpArrow(ctx, [430, 1180], [340, 1150], [190, 1190], EI(t, P(12, 'left') - 0.12, P(12, 'left') + 0.2) * (1 - EI(t, P(13, 'so') - 0.3, P(13, 'so'))), [255, 226, 122], 22);
    if (t > P(12, 'right') - 0.12) lpArrow(ctx, [650, 1180], [740, 1150], [890, 1190], EI(t, P(12, 'right') - 0.12, P(12, 'right') + 0.2) * (1 - EI(t, P(13, 'so') - 0.3, P(13, 'so'))), [255, 226, 122], 22);
    const out12 = 1 - EI(t, P(13, 'so') - 0.25, P(13, 'so'));
    lpTag(ctx, 300, 480, 'LEFT?', { k: BK(t, P(12, 'left') - 0.12) * out12, font: FONT(110), h: 170, bg: '#fff3dc' });
    lpTag(ctx, 780, 480, 'RIGHT?', { k: BK(t, P(12, 'right') - 0.12) * out12, font: FONT(110), h: 170, bg: '#ffe27a' });
    lpTag(ctx, 540, 650, 'IN A FLASH', { k: BK(t, P(12, 'flash') - 0.12) * out12, font: FONT(88), bg: INK, col: '#fff' });
    lpTag(ctx, 540, 470, 'HUNGRY GULL', { k: BK(t, P(13, 'gull') - 0.12), font: FONT(100), h: 164, bg: '#fff3dc' });
    lpTag(ctx, 540, 630, "CAN'T GUESS", { k: BK(t, P(13, 'guess') - 0.12), font: FONT(104), h: 170, bg: CORAL, col: '#fff' });
    const kq = BK(t, P(13, 'guess') - 0.05);
    if (kq > 0.01) { ctx.save(); ctx.translate(gx, gy - 150); ctx.scale(kq, kq); ctx.font = FONT(130); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineWidth = 14; ctx.strokeStyle = INK; ctx.strokeText('?', 0, 0); ctx.fillStyle = '#fff'; ctx.fillText('?', 0, 0); ctx.restore(); }
  }
  // ---- E: the study: 50 kinds of crabs, 35 walked sideways ----
  const FWD15 = (() => { const r = H.rng(2026), ids = [...Array(50).keys()]; for (let i = 49; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [ids[i], ids[j]] = [ids[j], ids[i]]; } return new Set(ids.slice(0, 15)); })();
  const HUES = (() => { const r = H.rng(77), a = []; for (let i = 0; i < 50; i++) a.push(r.pick([[230, 90, 60], [240, 140, 60], [200, 70, 90], [220, 110, 70], [180, 90, 60], [235, 170, 80]])); return a; })();
  function crabIcon(ctx, x, y, r, col, step = 0) { // compact top-down faceted crab for the study grid
    const C = H.mix(CRAB, col, 0.85), L = H.mix(C, [255, 255, 255], 0.3), Dk = H.mix(C, [40, 20, 30], 0.3);
    ctx.save(); ctx.translate(x, y);
    for (const sd of [-1, 1]) for (let i = 0; i < 4; i++) { const a = (i - 1.5) * 0.42 + Math.sin(step + i * 1.6 + (sd > 0 ? 0 : 3)) * 0.18, y0 = (i - 1.5) * r * 0.32; const k = [sd * r * 1.25, y0 + Math.sin(a) * r * 0.5], tp = [sd * r * 1.75, y0 + Math.sin(a) * r * 1.1 + r * 0.25]; seg(ctx, [sd * r * 0.7, y0], k, r * 0.11, r * 0.09, Dk, 0); seg(ctx, k, tp, r * 0.09, r * 0.02, Dk, 0); }
    for (const sd of [-1, 1]) { seg(ctx, [sd * r * 0.5, -r * 0.5], [sd * r * 0.75, -r * 1.05], r * 0.12, r * 0.12, C, 0); tri2(ctx, [sd * r * 0.75, -r * 1.35], [sd * r * 1.05, -r * 0.95], [sd * r * 0.45, -r * 0.95], H.rgba(L)); tri2(ctx, [sd * r * 0.75, -r * 1.35], [sd * r * 0.55, -r * 1.45], [sd * r * 0.62, -r * 1.05], H.rgba(Dk)); }
    const pts = [[-r, -r * 0.35], [-r * 0.55, -r * 0.8], [r * 0.55, -r * 0.8], [r, -r * 0.35], [r * 0.7, r * 0.6], [-r * 0.7, r * 0.6]], c0 = [0, -r * 0.1];
    for (let i = 0; i < 6; i++) { const a = pts[i], b = pts[(i + 1) % 6], ang = Math.atan2((a[1] + b[1]) / 2, (a[0] + b[0]) / 2); tri2(ctx, a, b, c0, H.rgba(H.mix(Dk, L, shadeA(ang)))); }
    gem(ctx, -r * 0.25, -r * 0.82, r * 0.14, [30, 20, 30]); gem(ctx, r * 0.25, -r * 0.82, r * 0.14, [30, 20, 30]);
    ctx.restore();
  }
  function sceneLab(ctx, t) {
    ctx.drawImage(mosaicLayer('lab', [18, 40, 70], [40, 96, 112], [540, 1200], [120, 220, 220], 1920, 120), 0, 0);
    // arena plate
    const pl = [[30, 940], [1050, 940], [1050, 1600], [30, 1600]];
    tri2(ctx, pl[0], pl[1], pl[3], 'rgba(10,20,40,0.45)'); tri2(ctx, pl[1], pl[2], pl[3], 'rgba(10,20,40,0.55)');
    const t35 = P(15, 'thirtyfive') - 0.1;
    for (let i = 0; i < 50; i++) {
      const row = Math.floor(i / 10), cx = 70 + (i % 10) * 99.5 + (row % 2) * 45, cy = 1070 + row * 122;
      const k = BK(t, P(14, 'filmed') - 0.1 + i * 0.022, 0.25); if (k <= 0.01) continue;
      const fw = FWD15.has(i), dec = EI(t, t35, t35 + 0.3);
      const jig = !fw && t > t35 ? Math.sin((t - t35) * 9 + i) * 10 * dec : 0;
      ctx.save(); ctx.translate(cx + jig, cy); ctx.scale(k, k);
      crabIcon(ctx, 0, 0, 30, fw ? H.mix(HUES[i], [130, 140, 165], dec) : HUES[i], !fw && t > t35 ? (t - t35) * 9 : 0);
      if (fw && dec > 0.01) { ctx.globalAlpha = dec; lpArrow(ctx, [0, -50], [0, -62], [0, -78], 1, [190, 200, 230], 8); ctx.globalAlpha = 1; }
      ctx.restore();
    }
    const n = Math.round(50 * EO(t, P(14, 'fifty') - 0.12, P(14, 'kinds') + 0.1));
    const out14 = 1 - EI(t, t35 - 0.15, t35);
    bigNumber(ctx, 540, 620, String(n), 230, BK(t, P(14, 'fifty') - 0.12) * out14, '#bff3ff');
    lpTag(ctx, 540, 730, 'KINDS OF CRABS', { k: BK(t, P(14, 'kinds') - 0.12) * out14, font: FONT(80), bg: '#fff3dc' });
    bigNumber(ctx, 540, 620, '35', 230, BK(t, P(15, 'thirtyfive') - 0.12), '#ffe27a');
    lpTag(ctx, 540, 730, 'WALKED SIDEWAYS', { k: BK(t, P(15, 'walked') - 0.12), font: FONT(80), bg: '#ffe27a' });
    lpTag(ctx, 540, 1650, '15 WALKED FORWARD', { k: BK(t, P(15, 'sideways') - 0.05) * 0.8, font: FONT(50), bg: '#cfd6ff' });
  }
  // ---- F: evolved once, about 200 million years ago ----
  function cone(ctx, x, y, h, col) { const w = h * 0.36; tri2(ctx, [x, y - h], [x - w, y], [x, y], H.rgba(H.mix(col, [255, 255, 255], 0.15))); tri2(ctx, [x, y - h], [x + w, y], [x, y], H.rgba(H.mix(col, [20, 30, 30], 0.25))); }
  function sceneTime(ctx, t) {
    beach(ctx, t, 'jur');
    const r = H.rng(5); for (let i = 0; i < 9; i++) { const x = r() * W, y = 1240 + r() * 100; cone(ctx, x, y, 140 + r() * 120, [50, 110, 70]); }
    const root = [540, 1580], tips = [[150, 1130], [345, 1080], [540, 1050], [735, 1080], [930, 1130]];
    const grow = EI(t, P(16, 'trick') - 0.2, P(16, 'once') + 0.2);
    for (let i = 0; i < tips.length; i++) {
      const tp = tips[i], mid = [H.lerp(root[0], tp[0], 0.3), H.lerp(root[1], tp[1], 0.55)];
      const u1 = H.clamp(grow * 2), u2 = H.clamp(grow * 2 - 1);
      const p1 = [H.lerp(root[0], mid[0], u1), H.lerp(root[1], mid[1], u1)]; seg(ctx, root, p1, 16, 12, [255, 220, 140], 0);
      if (u2 > 0) { const p2 = [H.lerp(mid[0], tp[0], u2), H.lerp(mid[1], tp[1], u2)]; seg(ctx, mid, p2, 12, 8, [255, 220, 140], 0); }
      const kc = BK(t, P(16, 'once') + i * 0.08, 0.3);
      if (kc > 0.01) { ctx.save(); ctx.translate(tp[0], tp[1]); ctx.scale(kc, kc); frontCrab(ctx, { x: 0, y: 0, s: 0.17, col: HUES[i * 7], colK: 0.3, walk: (t - P(16, 'once')) * 2 + i }); ctx.restore(); }
    }
    hexKnob(ctx, root[0], root[1], 42, GOLD, EI(t, P(16, 'once') - 0.12, P(16, 'once') + 0.1));
    lpTag(ctx, 540, 1690 - 60, '1 ANCESTOR', { k: BK(t, P(16, 'once') - 0.05) * 0.85, font: FONT(54), bg: '#fff3dc' });
    const out16 = 1 - EI(t, P(17, 'about') - 0.25, P(17, 'about'));
    lpTag(ctx, 540, 470, 'JUST ONCE', { k: BK(t, P(16, 'once') - 0.12) * out16, font: FONT(130), h: 190, bg: '#ffe27a' });
    bigNumber(ctx, 540, 600, '200', 240, BK(t, P(17, 'two') - 0.12), '#ffe27a');
    lpTag(ctx, 540, 720, 'MILLION YEARS AGO', { k: BK(t, P(17, 'million') - 0.12), font: FONT(76), bg: '#fff3dc' });
  }
  // ---- G: the question ----
  function sceneEnd(ctx, t) {
    beach(ctx, t, 'sunset');
    const sc = t > P(19, 'scuttle') - 0.1 ? Math.sin((t - (P(19, 'scuttle') - 0.1)) * 3.2) * 160 : 0;
    const x = 540 + sc;
    shadow(ctx, x, SH, 300);
    frontCrab(ctx, { x, y: SH, s: 0.9, walk: x / 110, kneeGlow: EI(t, P(18, 'knees') - 0.12, P(18, 'knees') + 0.1) });
    lpTag(ctx, 540, 420, 'YOUR KNEES', { k: BK(t, P(18, 'knees') - 0.12), font: FONT(110), h: 170, bg: '#fff3dc' });
    lpTag(ctx, 540, 580, '→ SIDEWAYS?', { k: BK(t, P(18, 'sideways') - 0.12), font: FONT(100), h: 164, bg: '#ffe27a' });
    lpTag(ctx, 540, 740, 'WHERE FIRST?', { k: BK(t, P(19, 'scuttle') - 0.12), font: FONT(100), h: 164, bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 880, 'TELL ME ↓', { k: BK(t, P(19, 'first') - 0.05), font: FONT(64), bg: INK, col: '#fff' });
  }
  function scene(ctx, t) {
    if (t < CUT.leg) sceneHook(ctx, t);
    else if (t < CUT.legs8) sceneLeg(ctx, t);
    else if (t < CUT.gull) sceneLegs8(ctx, t);
    else if (t < CUT.lab) sceneGull(ctx, t);
    else if (t < CUT.time) sceneLab(ctx, t);
    else if (t < CUT.end) sceneTime(ctx, t);
    else sceneEnd(ctx, t);
  }
  function thumbnail(ctx, W_, H_) {
    ctx.save(); ctx.scale(W_ / W, H_ / HH);
    beach(ctx, 0, 'day');
    shadow(ctx, 540, SH, 300); frontCrab(ctx, { x: 540, y: SH, s: 0.78, walk: 0.3, kneeGlow: 1 });
    lpTag(ctx, 540, 460, 'SIDEWAYS?', { font: FONT(130), h: 190, bg: '#fff3dc' });
    lpTag(ctx, 540, 660, 'THE KNEES!', { font: FONT(120), h: 180, bg: CORAL, col: '#fff' });
    ctx.restore();
  }

  // ---------- sound (voiceover mode): glassy facets, surf, tiny crab-foot taps, gull ----------
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g = 1, p = 0, minor) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const surf = (t0, t1, seed) => { const r = H.rng(seed); for (let t = t0; t < t1; t += r.range(1.8, 2.6)) k.noise(t, { dur: 2.0, color: 'pink', filter: 'lowpass', f: r.range(700, 1200), gain: 0.035, a: 0.8, pan: r.range(-0.5, 0.5), minor: true }); };
    const taps = (t0, t1, rate, g = 1) => { const r = H.rng(Math.round(t0 * 100)); for (let t = t0; t < t1; t += 1 / rate) k.play('tick', t, { f: r.range(2600, 3600), gain: 0.22 * g, pan: r.range(-0.4, 0.4), minor: true }); };
    const wipe = (t) => { k.withMinor(() => { for (let i = 0; i < 9; i++) k.play('tick', t + i * 0.05, { f: 2400 + i * 180, gain: 0.5 }); }); k.play('whoosh', t - 0.05, { dur: 0.6, gain: 0.45 }); };
    const ribbon = (t, p = 0) => k.noise(t, { dur: 0.5, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.5, 1400]], q: 1.2, gain: 0.06, a: 0.25, pan: p, minor: true });
    const caw = (t, p = 0) => { k.tone(t, { f: [[0, 1200], [0.12, 900], [0.25, 1000]], type: 'sawtooth', dur: 0.28, gain: 0.025, pan: p, filter: 'bandpass', f2: 1400 }); };
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pad', 0, D, { bpm: 96, gain: 0.22, chords: [['E4', 'G#4', 'B4', 'D#5'], ['C#4', 'E4', 'G#4', 'B4'], ['A3', 'C#4', 'E4', 'G#4'], ['B3', 'D#4', 'F#4', 'A4']] });
    // A hook
    surf(0, CUT.leg, 3); taps(0.05, 1.7, 9); glass(0.2, 'E4', 1.1, 0, 1.4);
    k.play('impact', P(0, 'sideways') - 0.08, { gain: 0.8 }); glass(P(0, 'sideways'), 'B4', 1, 0, 1.1); ribbon(P(0, 'sideways'), -0.3); ribbon(P(0, 'sideways'), 0.3);
    k.play('impact', P(1, 'knees') - 0.08, { gain: 0.7 }); k.play('sparkle', P(1, 'knees'), { n: 5, gain: 0.4 }); facet(P(1, 'youd') - 0.1, 470, 0.8);
    facet(P(2, 'wide') - 0.12, 560); ribbon(P(2, 'wide') - 0.1, 0); facet(P(2, 'flat') - 0.12, 640);
    k.withMinor(() => { for (let i = 0; i < 10; i++) k.play('tock', P(3, 'perfect') - 0.1 + i * 0.05, { f: 300 + i * 25, gain: 0.35 }); });
    k.play('thud', P(3, 'squeezing') + 0.1, { f: 90, gain: 0.4 }); taps(P(3, 'squeezing'), P(3, 'rocks') + 0.3, 10); facet(P(3, 'rocks') - 0.12, 520);
    // B leg close-up
    wipe(CUT.leg); k.tone(CUT.leg + 0.1, { f: 'E2', type: 'sine', dur: CUT.legs8 - CUT.leg, gain: 0.04, a: 1 });
    facet(P(4, 'stiffens') - 0.12, 470); k.play('error', P(4, 'joints') - 0.05, { f: 'G3', gain: 0.45 }); k.play('thud', P(4, 'shoulder') - 0.05, { f: 110, gain: 0.35 });
    facet(P(5, 'bending') - 0.12, 560); k.play('impact', P(5, 'joint') - 0.08, { gain: 0.7 }); glass(P(5, 'joint'), 'G#4', 1, 0.2, 1); ribbon(P(5, 'joint') - 0.1, 0.3);
    facet(P(6, 'hinge') - 0.12, 600); k.play('click', P(6, 'hinge'), { gain: 0.5 }); k.play('pop', P(6, 'knee') - 0.1, { gain: 0.6, minor: true });
    facet(P(7, 'only') - 0.12, 470);
    for (let i = 0; i < 4; i++) k.tone(P(7, 'swings') - 0.15 + i * 0.75, { f: [[0, 380], [0.35, 620]], type: 'triangle', dur: 0.36, gain: 0.04, minor: true });
    k.play('success', P(7, 'side') - 0.05, { f: 'E5', gain: 0.4 });
    // C eight legs
    wipe(CUT.legs8); surf(CUT.legs8, CUT.gull, 9);
    for (let i = 0; i < 8; i++) glass(P(8, 'eight') - 0.1 + i * 0.12, ['E4', 'F#4', 'G#4', 'A4', 'B4', 'C#5', 'D#5', 'E5'][i], 0.5, (i - 3.5) * 0.15, 0.5, true);
    facet(P(8, 'walking') - 0.12, 560); k.play('sparkle', P(8, 'hinged'), { n: 4, gain: 0.35 });
    facet(P(9, 'forward') - 0.12, 470); taps(P(9, 'forward'), P(10, 'sideways') - 0.3, 3.5, 0.8); k.tone(P(9, 'shuffle') - 0.05, { f: [[0, 420], [0.7, 250]], type: 'triangle', dur: 0.7, gain: 0.06 }); k.play('error', P(9, 'shuffle') + 0.3, { f: 'F3', gain: 0.3 });
    facet(P(10, 'sideways') - 0.12, 640); taps(P(10, 'sideways'), P(11, 'zooms') - 0.1, 8);
    k.play('whoosh', P(11, 'zooms') - 0.15, { dur: 0.6, gain: 0.6 }); k.play('success', P(11, 'zooms'), { f: 'B4', gain: 0.45 }); taps(P(11, 'zooms') - 0.1, CUT.gull, 16);
    // D gull
    wipe(CUT.gull); surf(CUT.gull, CUT.lab, 15); caw(CUT.gull + 0.4, 0.4); caw(P(13, 'gull'), 0.2);
    for (const w of ['left', 'right', 'flash']) { const t = P(12, w) - 0.12; k.play('whoosh', t, { dur: 0.3, gain: 0.3, minor: true }); taps(t, t + 0.28, 18); }
    facet(P(12, 'left') - 0.12, 520, 1, -0.5); facet(P(12, 'right') - 0.12, 620, 1, 0.5);
    for (const t of [P(13, 'gull') - 0.05, P(13, 'where') - 0.1, P(13, 'going') + 0.1]) taps(t, t + 0.28, 18);
    k.play('error', P(13, 'guess') - 0.05, { f: 'G3', gain: 0.4 }); k.play('pop', P(13, 'guess'), { gain: 0.6 });
    // E lab
    wipe(CUT.lab); k.bed('hum', CUT.lab, CUT.time, { gain: 0.3 });
    k.withMinor(() => { for (let i = 0; i < 50; i += 2) k.play('pop', P(14, 'filmed') - 0.1 + i * 0.022, { gain: 0.25 }); });
    k.play('impact', P(14, 'fifty') - 0.08, { gain: 0.7 }); glass(P(14, 'fifty'), 'E4', 0.9, 0, 1);
    k.play('impact', P(15, 'thirtyfive') - 0.08, { gain: 0.9 }); ['E4', 'B4', 'E5'].forEach((n, i) => glass(P(15, 'thirtyfive') + i * 0.04, n, 1 - i * 0.2, (i - 1) * 0.3, 1.2)); taps(P(15, 'thirtyfive'), CUT.time - 0.2, 12, 0.6);
    facet(P(15, 'walked') - 0.12, 600);
    // F deep time
    wipe(CUT.time); k.play('riser', P(16, 'trick') - 0.3, { dur: 1.2, gain: 0.3 });
    k.play('impact', P(16, 'once') - 0.08, { gain: 0.8 }); glass(P(16, 'once'), 'G#4', 1, 0, 1.1); k.play('sparkle', P(16, 'once') + 0.1, { n: 5, gain: 0.35 });
    k.play('impact', P(17, 'two') - 0.1, { gain: 1.0 }); ['E4', 'G#4', 'B4', 'E5'].forEach((n, i) => glass(P(17, 'hundred') + i * 0.03, n, 1.1 - i * 0.2, (i - 1.5) * 0.25, 1.3));
    facet(P(17, 'million') - 0.12, 560);
    // G question
    wipe(CUT.end); surf(CUT.end, D, 33);
    facet(P(18, 'knees') - 0.12, 470); k.play('sparkle', P(18, 'knees'), { n: 3, gain: 0.3 }); facet(P(18, 'sideways') - 0.12, 560);
    taps(P(19, 'scuttle') - 0.1, D - 0.3, 9); facet(P(19, 'scuttle') - 0.12, 600);
    ['B4', 'E5'].forEach((n, i) => glass(P(19, 'first') + i * 0.09, n, 0.9, (i - 0.5) * 0.3, 1.4)); k.tone(P(19, 'first'), { f: 'E3', type: 'triangle', dur: 1.4, gain: 0.12, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
