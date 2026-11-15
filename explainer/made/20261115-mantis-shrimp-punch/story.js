// ================= Low-Poly Faceted, vertical 1080x1920: "How does a thumb-sized mantis shrimp punch hard enough to crack glass?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W = 1080, HH = 1920;
  try { document.fonts.load('700 48px "Space Grotesk"'); } catch (e) { /* render anyway */ }
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael take, natural mode) ----------
  const BEATS = [
    { s: 0.25, e: 2.43, w: {"a": 0.25, "shrimp": 0.34, "the": 0.86, "size": 1.12, "of": 1.47, "your": 1.65, "thumb": 1.99} }, // 0 A shrimp the size of your thumb
    { s: 2.5, e: 5.14, w: {"punches": 2.5, "at": 3.18, "80": 3.38, "kilometers": 3.58, "an": 4.55, "hour": 4.75} }, // 1 punches at 80 kilometers an hour,
    { s: 5.25, e: 6.71, w: {"hard": 5.25, "enough": 5.48, "to": 5.84, "crack": 5.95, "glass": 6.25, "how": 6.54} }, // 2 hard enough to crack glass. How?
    { s: 7.21, e: 8.62, w: {"meet": 7.21, "the": 7.5, "mantis": 7.73, "shrimp": 8.17} }, // 3 Meet the mantis shrimp.
    { s: 8.97, e: 10.51, w: {"it": 8.97, "doesnt": 9.11, "pinch": 9.53, "with": 9.88, "claws": 10.16} }, // 4 It doesn't pinch with claws.
    { s: 10.94, e: 13.3, w: {"it": 10.94, "swings": 11.1, "a": 11.55, "club": 11.63, "folded": 11.93, "under": 12.39, "its": 12.77, "head": 13.0} }, // 5 It swings a club folded under its head.
    { s: 13.75, e: 15.17, w: {"and": 13.75, "the": 13.95, "trick": 14.15, "isnt": 14.49, "muscle": 14.76} }, // 6 And the trick isn't muscle.
    { s: 15.52, e: 17.53, w: {"big": 15.52, "muscles": 15.77, "squeeze": 16.36, "a": 16.95, "spring": 17.03} }, // 7 Big muscles squeeze a spring
    { s: 17.61, e: 18.34, w: {"shaped": 17.61, "like": 17.87, "a": 18.04, "saddle": 18.09} }, // 8 shaped like a saddle,
    { s: 18.77, e: 20.14, w: {"kind": 18.77, "of": 19.01, "like": 19.13, "a": 19.37, "pringles": 19.43, "chip": 19.91} }, // 9 kind of like a Pringles chip.
    { s: 20.6, e: 22.45, w: {"a": 20.6, "tiny": 20.68, "latch": 21.0, "holds": 21.41, "it": 21.81, "locked": 21.97} }, // 10 A tiny latch holds it locked.
    { s: 22.82, e: 24.7, w: {"then": 22.82, "click": 23.15, "the": 23.56, "latch": 23.8, "lets": 24.21, "go": 24.53} }, // 11 Then, click, the latch lets go.
    { s: 25.05, e: 28.04, w: {"the": 25.05, "club": 25.25, "fires": 25.52, "in": 25.86, "under": 26.0, "three": 26.34, "thousandths": 26.68, "of": 27.43, "a": 27.56, "second": 27.63} }, // 12 The club fires in under three thousandths of a second.
    { s: 28.5, e: 31.84, w: {"so": 28.5, "fast": 28.67, "the": 28.99, "water": 29.23, "in": 29.64, "front": 29.8, "of": 30.21, "it": 30.37, "boils": 30.54, "into": 30.94, "bubbles": 31.27} }, // 13 So fast the water in front of it boils into bubbles.
    { s: 32.29, e: 33.64, w: {"when": 32.29, "those": 32.52, "bubbles": 32.8, "collapse": 33.19} }, // 14 When those bubbles collapse,
    { s: 33.93, e: 35.67, w: {"they": 33.93, "slam": 34.19, "the": 34.45, "shell": 34.64, "a": 34.96, "second": 35.03, "time": 35.41} }, // 15 they slam the shell a second time,
    { s: 36.12, e: 37.91, w: {"with": 36.12, "a": 36.42, "flash": 36.49, "of": 36.87, "light": 37.02, "and": 37.39, "heat": 37.61} }, // 16 with a flash of light and heat.
    { s: 38.29, e: 39.64, w: {"one": 38.29, "punch": 38.56, "two": 39.01, "hits": 39.28} }, // 17 One punch, two hits.
    { s: 39.92, e: 41.9, w: {"snail": 39.92, "shells": 40.29, "dont": 40.73, "stand": 41.02, "a": 41.39, "chance": 41.46} }, // 18 Snail shells don't stand a chance.
    { s: 42.25, e: 43.77, w: {"and": 42.25, "when": 42.45, "the": 42.72, "club": 42.91, "wears": 43.18, "down": 43.51} }, // 19 And when the club wears down?
    { s: 44.26, e: 46.53, w: {"it": 44.26, "just": 44.42, "molts": 44.75, "and": 45.15, "grows": 45.4, "a": 45.8, "fresh": 45.88, "one": 46.29} }, // 20 It just molts and grows a fresh one.
    { s: 47.01, e: 48.44, w: {"so": 47.01, "if": 47.16, "it": 47.31, "can": 47.46, "crack": 47.68, "glass": 48.06} }, // 21 So if it can crack glass,
    { s: 48.76, e: 49.81, w: {"what": 48.76, "would": 48.97, "you": 49.23, "keep": 49.39, "it": 49.6, "in": 49.7} }, // 22 what would you keep it in?
  ];
  const P = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in ' + i); return v; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scenes: A reef hook (thumb-sized, 80 km/h, cracks glass, how?) -> B meet the shrimp (no claws, folded club)
  //         -> C cutaway (not muscle: muscles squeeze a saddle spring, latch locks, click, fire)
  //         -> D strike (under 3 ms, water boils into bubbles, collapse = hit 2, light + heat, 1 punch 2 hits, snail shell shatters)
  //         -> E molt (worn club, molts, new club) -> F aquarium glass question
  const CUT = { intro: BEATS[3].s - 0.3, spring: BEATS[6].s - 0.3, strike: BEATS[12].s - 0.3, molt: BEATS[19].s - 0.3, end: BEATS[21].s - 0.3 };
  const CUTS = [CUT.intro, CUT.spring, CUT.strike, CUT.molt, CUT.end];
  const WIPE = 0.5;
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const BK = (t, a, d = 0.3) => H.ease.back(ph(t, a, a + d));
  const out = (t, a) => 1 - EI(t, a - 0.15, a + 0.05);
  const INK = '#1f2a4f', CORAL = '#e8603c', ICE = '#dff4ff', MINT = '#3ccf9a';
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
  const LIGHT = -2.2;
  const shadeA = (a) => 0.5 + 0.5 * Math.cos(a - LIGHT);
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
  function timerDial(ctx, x, y, r, frac, k, col = [255, 226, 122]) {
    if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    hexKnob(ctx, 0, 0, r, [60, 50, 110], 0);
    const n = 24; for (let i = 0; i < n * frac; i++) { const a0 = -Math.PI / 2 + i / n * Math.PI * 2, a1 = -Math.PI / 2 + (i + 1) / n * Math.PI * 2; tri2(ctx, [Math.cos(a0) * r * 0.62, Math.sin(a0) * r * 0.62], [Math.cos(a0) * r * 0.92, Math.sin(a0) * r * 0.92], [Math.cos(a1) * r * 0.92, Math.sin(a1) * r * 0.92], H.rgba(H.mix(col, [255, 255, 255], (i % 2) * 0.25))); }
    ctx.restore();
  }

  // =================== MANTIS SHRIMP (side view, faceted; local units, head toward +x, centreline y=0) ===================
  const GRN = [56, 168, 112], GRNL = [150, 226, 150], GRND = [18, 88, 72];
  const CAR = [70, 176, 150], CARL = [160, 236, 200], CARD = [24, 100, 96];
  const LEG = [236, 84, 64], LEGL = [255, 150, 110], CLUB = [244, 92, 112], CLUBL = [255, 170, 170], CLUBD = [170, 40, 70];
  const EYE = [60, 210, 200];
  function armGeo(e) {
    const sh = [125, 25], a1 = H.lerp(2.7, 0.45, e), el = [sh[0] + Math.cos(a1) * 95, sh[1] + Math.sin(a1) * 95];
    const a2 = H.lerp(-0.35, 0.1, e), wr = [el[0] + Math.cos(a2) * 110, el[1] + Math.sin(a2) * 110];
    return { sh, el, wr, a2 };
  }
  const bobOf = (o) => Math.sin((o.t || 0) * 1.5) * 5;
  function clubWorld(o) { const g = armGeo(o.ext || 0), s = o.s || 1; return [o.x + g.wr[0] * s, o.y + bobOf(o) + g.wr[1] * s]; }
  function shrimp(ctx, o) {
    const s = o.s || 1, t = o.t || 0, bob = bobOf(o);
    const pale = (c) => (o.pale ? H.mix(c, [235, 245, 240], 0.7) : c);
    ctx.save(); ctx.translate(o.x, o.y + bob); ctx.scale(s, s);
    if (o.glow > 0.01) { const g = ctx.createRadialGradient(0, 0, 30, 0, 0, 420); g.addColorStop(0, `rgba(170,255,220,${0.55 * o.glow})`); g.addColorStop(1, 'rgba(170,255,220,0)'); ctx.fillStyle = g; ctx.fillRect(-440, -440, 880, 880); }
    // antennules (behind)
    const sw = Math.sin(t * 2.2) * 10;
    seg(ctx, [165, -62], [250, -150 + sw * 0.5], 4, 3, pale([200, 120, 90])); seg(ctx, [250, -150 + sw * 0.5], [340, -190 + sw], 3, 2, pale([200, 120, 90]));
    seg(ctx, [168, -58], [280, -110 - sw * 0.4], 4, 3, pale([200, 120, 90])); seg(ctx, [280, -110 - sw * 0.4], [370, -120 - sw], 3, 2, pale([200, 120, 90]));
    // tail fan (blue and orange blades)
    for (let i = 0; i < 5; i++) { const a = Math.PI + (i - 2) * 0.3 + Math.sin(t * 1.3) * 0.04; const c = pale(i % 2 ? [250, 150, 60] : [60, 120, 220]); tri2(ctx, [-290, -6], [-290 + Math.cos(a - 0.13) * 100, -6 + Math.sin(a - 0.13) * 100], [-290 + Math.cos(a + 0.13) * 100, -6 + Math.sin(a + 0.13) * 100], H.rgba(H.mix(c, [255, 255, 255], 0.15 * (i % 2)))); }
    // swimmerets + walking legs
    for (let i = 0; i < 5; i++) { const x = -250 + i * 44, k = Math.sin(t * 6 + i) * 6; seg(ctx, [x, 30], [x - 8 + k, 66], 7, 4, pale(LEG), 0.1); }
    for (let i = 0; i < 3; i++) { const x = -20 + i * 34; seg(ctx, [x, 36], [x + 6, 74], 6, 5, pale(LEG)); seg(ctx, [x + 6, 74], [x - 6, 104], 5, 3, pale(LEG), 0.1); }
    // abdomen segments
    for (let i = 0; i < 6; i++) {
      const x0 = -290 + i * 41, x1 = x0 + 46, top = -(36 + i * 6), bot = 30 + i * 3, dy = Math.sin(t * 2 + i * 0.8) * 2;
      poly(ctx, [[x0, top + dy], [x1, top - 5 + dy], [x1 + 3, bot + dy], [x0, bot - 2 + dy]], pale(GRN), pale(GRNL), pale(GRND), 300 + i, 0.5);
      tri2(ctx, [x0 + 6, top + 6 + dy], [x1 - 4, top + 1 + dy], [x0 + 20, top + 16 + dy], H.rgba(pale([255, 220, 120]), 0.6));
    }
    // carapace with leopard spots
    poly(ctx, [[-50, -82], [30, -94], [100, -80], [132, -50], [122, 22], [40, 42], [-50, 40]], pale(CAR), pale(CARL), pale(CARD), 41, 0.55);
    const R = H.rng(55); for (let i = 0; i < 9; i++) gem(ctx, R.range(-36, 110), R.range(-70, 20), 6 + R() * 4, pale([20, 70, 70]), R() * 3);
    // head
    poly(ctx, [[100, -78], [150, -72], [172, -42], [152, 10], [112, 22]], pale(CAR), pale(CARL), pale(CARD), 42, 0.5);
    // antennal scales (orange paddles)
    poly(ctx, [[168, -46], [250, -84], [272, -70], [190, -28]], pale([250, 140, 70]), pale([255, 200, 120]), pale([200, 80, 40]), 43, 0.5);
    // stalked compound eyes
    for (const [ex, ey, d] of [[164, -132, 0.25], [182, -126, 0]]) {
      seg(ctx, [150, -70], [ex, ey + 18], 9, 8, pale(CARD), d);
      const ring = []; for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; ring.push([ex + Math.cos(a) * 24, ey + Math.sin(a) * 30]); }
      poly(ctx, ring, pale(H.mix(EYE, [0, 0, 0], d)), pale(H.mix(EYE, [255, 255, 255], 0.4 - d)), pale(H.mix(EYE, [10, 40, 60], 0.5)), 44, 0.5);
      tri2(ctx, [ex - 24, ey - 3], [ex + 24, ey - 3], [ex, ey + 6], H.rgba([20, 40, 60], 0.75));
      gem(ctx, ex - 8, ey - 14, 5, [255, 255, 255]);
    }
    // raptorial "club" appendage (front)
    const g = armGeo(o.ext || 0);
    seg(ctx, g.sh, g.el, 22, 19, pale(LEG)); gem(ctx, g.el[0], g.el[1], 18, pale(H.mix(LEG, [0, 0, 0], 0.2)));
    seg(ctx, g.el, g.wr, 18, 22, pale(CLUB));
    const back = [g.wr[0] - Math.cos(g.a2) * 70, g.wr[1] - Math.sin(g.a2) * 70 + 26]; seg(ctx, g.wr, back, 11, 6, pale(CLUBD));
    const knob = []; for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2; knob.push([g.wr[0] + Math.cos(a) * 32, g.wr[1] + Math.sin(a) * 28]); }
    poly(ctx, knob, pale(CLUB), pale(CLUBL), pale(CLUBD), 45, 0.5);
    if (o.worn > 0.01) { ctx.strokeStyle = `rgba(60,20,30,${0.85 * o.worn})`; ctx.lineWidth = 4; for (let i = 0; i < 4; i++) { const a = -0.6 + i * 0.4; ctx.beginPath(); ctx.moveTo(g.wr[0] + Math.cos(a) * 30, g.wr[1] + Math.sin(a) * 26); ctx.lineTo(g.wr[0] + Math.cos(a) * 12, g.wr[1] + Math.sin(a) * 8 + 5); ctx.lineTo(g.wr[0] + Math.cos(a + 0.2) * 4, g.wr[1] + 2); ctx.stroke(); } }
    if (o.hi > 0.01) { ctx.save(); ctx.globalAlpha = o.hi; ctx.strokeStyle = '#fff6a0'; ctx.lineWidth = 6; ctx.beginPath(); for (let i = 0; i <= 6; i++) { const a = i / 6 * Math.PI * 2; ctx.lineTo(g.wr[0] + Math.cos(a) * 52, g.wr[1] + Math.sin(a) * 48); } ctx.stroke(); ctx.restore(); }
    ctx.restore();
  }
  // snail shell, faceted cone of whorls; crack 0..1 blows it into shards
  function snail(ctx, x, y, r, crack = 0) {
    const pts = []; for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; pts.push([Math.cos(a) * r, Math.sin(a) * r * 0.82]); }
    ctx.save(); ctx.translate(x, y);
    if (crack <= 0.001) {
      poly(ctx, pts, [230, 190, 140], [255, 236, 200], [160, 110, 80], 71, 0.55);
      for (let k = 1; k < 4; k++) { const rr = r * (1 - k * 0.22), cx = -r * 0.12 * k, cy = -r * 0.1 * k; const q = []; for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; q.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * 0.82]); } poly(ctx, q, k % 2 ? [200, 120, 80] : [240, 200, 150], k % 2 ? [240, 160, 110] : [255, 240, 210], k % 2 ? [140, 70, 50] : [180, 130, 90], 71 + k, 0.5); }
    } else {
      const R0 = H.rng(9);
      for (let i = 0; i < 10; i++) {
        const j = (i + 1) % 10, mx = (pts[i][0] + pts[j][0]) / 3, my = (pts[i][1] + pts[j][1]) / 3, d = crack * (1.6 + R0()) , rot = crack * R0.range(-2, 2);
        ctx.save(); ctx.translate(mx * d * 2.2, my * d * 2.2 + crack * crack * 160); ctx.rotate(rot); ctx.globalAlpha = 1 - H.smooth(0.6, 1, crack);
        tri2(ctx, [0, 0], pts[i], pts[j], H.rgba(H.mix([220, 170, 120], [255, 240, 210], (i % 3) * 0.3)));
        ctx.restore();
      }
    }
    ctx.restore();
  }
  // radial glass cracks over the frame
  function cracks(ctx, cx, cy, R, prog, seed) {
    if (prog <= 0.001) return; const r = H.rng(seed);
    ctx.save(); ctx.lineJoin = 'miter';
    const arms = [];
    for (let i = 0; i < 11; i++) { const a = i / 11 * Math.PI * 2 + r.range(-0.2, 0.2), L = R * r.range(0.6, 1.1), pts = [[cx, cy]]; let px = cx, py = cy; for (let k = 1; k <= 6; k++) { const aa = a + r.range(-0.25, 0.25); px += Math.cos(aa) * L / 6; py += Math.sin(aa) * L / 6; pts.push([px, py]); } arms.push(pts); }
    for (const [col, lw, off] of [['rgba(20,40,70,0.45)', 8, 4], ['rgba(255,255,255,0.95)', 4, 0]]) {
      ctx.strokeStyle = col; ctx.lineWidth = lw;
      for (const pts of arms) { const n = Math.max(1, Math.round(6 * prog)); ctx.beginPath(); ctx.moveTo(pts[0][0] + off, pts[0][1] + off); for (let k = 1; k <= n; k++) ctx.lineTo(pts[k][0] + off, pts[k][1] + off); ctx.stroke(); }
      if (prog > 0.5) for (const ring of [2, 4]) { ctx.beginPath(); arms.forEach((pts, i) => { const p = pts[ring]; i ? ctx.lineTo(p[0] + off, p[1] + off) : ctx.moveTo(p[0] + off, p[1] + off); }); ctx.closePath(); ctx.globalAlpha = H.smooth(0.5, 1, prog); ctx.stroke(); ctx.globalAlpha = 1; }
    }
    tri2(ctx, [cx - 20, cy - 10], [cx + 16, cy - 18], [cx + 4, cy + 18], 'rgba(255,255,255,0.9)');
    ctx.restore();
  }
  function shock(ctx, x, y, t, t0, R = 260, col = '255,255,255') {
    const u = ph(t, t0, t0 + 0.5); if (u <= 0 || u >= 1) return;
    ctx.save(); ctx.globalAlpha = 1 - u; ctx.strokeStyle = `rgb(${col})`; ctx.lineWidth = 14 * (1 - u) + 2; ctx.beginPath();
    for (let i = 0; i <= 8; i++) { const a = i / 8 * Math.PI * 2; ctx.lineTo(x + Math.cos(a) * R * H.ease.out(u), y + Math.sin(a) * R * H.ease.out(u)); } ctx.stroke();
    const g = ctx.createRadialGradient(x, y, 0, x, y, R * 0.8); g.addColorStop(0, `rgba(${col},${0.9 * (1 - u)})`); g.addColorStop(1, `rgba(${col},0)`); ctx.fillStyle = g; ctx.fillRect(x - R, y - R, 2 * R, 2 * R);
    ctx.restore();
  }
  function speedLines(ctx, x, y, a, k, seed) {
    if (k <= 0.01) return; const r = H.rng(seed);
    for (let i = 0; i < 7; i++) { const off = r.range(-60, 60), L = r.range(120, 260) * k, bx = x - Math.cos(a) * 40 + Math.sin(a) * off, by = y - Math.sin(a) * 40 - Math.cos(a) * off; tri2(ctx, [bx, by - 4], [bx, by + 4], [bx - Math.cos(a) * L, by - Math.sin(a) * L], `rgba(255,255,255,${0.75 * k})`); }
  }

  // =================== REEF (sky-less underwater: faceted water mosaic, light shafts, sand, corals, rocks) ===================
  const REEF = {
    shallow: { top: [40, 150, 200], bot: [10, 60, 110], glow: [180, 255, 240], sand: [236, 210, 150], sandD: [190, 160, 110], coral: [[255, 120, 140], [255, 170, 80], [150, 110, 230]] },
    deep: { top: [24, 80, 150], bot: [8, 28, 70], glow: [120, 200, 255], sand: [180, 170, 150], sandD: [120, 110, 100], coral: [[230, 90, 160], [90, 200, 190], [255, 150, 90]] },
    lab: { top: [40, 30, 90], bot: [14, 12, 44], glow: [255, 160, 200], sand: [0, 0, 0], sandD: [0, 0, 0], coral: [] },
  };
  const FLOOR = 1500;
  function reefLayer(key) {
    if (BG[key + 'reef']) return BG[key + 'reef'];
    const pal = REEF[key], c = H.layer(W, HH), g = c.getContext('2d'); g.lineJoin = 'round';
    g.drawImage(mosaicLayer(key + 'water', pal.top, pal.bot, [620, 200], pal.glow, HH, 120), 0, 0);
    const r = H.rng(key.length * 17 + 3);
    // distant rock silhouettes
    for (let i = 0; i < 6; i++) { const x = i * 200 - 60 + r() * 60, h = 160 + r() * 200; const col = H.mix(pal.bot, pal.top, 0.35); tri2(g, [x, FLOOR], [x + 110, FLOOR - h], [x + 240, FLOOR], H.rgba(col)); tri2(g, [x + 110, FLOOR - h], [x + 240, FLOOR], [x + 170, FLOOR - h * 0.6], H.rgba(H.mix(col, pal.bot, 0.4))); }
    // sand floor rows
    const rows = [FLOOR - 40, FLOOR + 60, FLOOR + 190, FLOOR + 420];
    for (let j = 0; j < rows.length - 1; j++) for (let i = -1; i < 12; i++) { const cs = 110 + j * 50, x = i * cs + (j % 2) * cs * 0.5, y0 = rows[j], y1 = rows[j + 1]; tri2(g, [x, y0], [x + cs, y0], [x + cs * 0.5, y1], H.rgba(H.mix(pal.sandD, pal.sand, 0.5 + r() * 0.5))); tri2(g, [x + cs * 0.5, y1], [x + cs, y0], [x + cs * 1.5, y1], H.rgba(H.mix(pal.sandD, pal.sand, 0.3 + r() * 0.4))); }
    // corals at the sides
    for (const [bx, sd] of [[90, 1], [990, -1], [220, 1], [860, -1]]) {
      const col = pal.coral[Math.floor(r() * pal.coral.length)], base = [bx, FLOOR + 20];
      const branch = (p, a, L, w, d) => { if (d > 3) { gem(g, p[0], p[1], w * 1.6, H.mix(col, [255, 255, 255], 0.3), a); return; } const q = [p[0] + Math.cos(a) * L, p[1] + Math.sin(a) * L]; seg(g, p, q, w, w * 0.75, col, d * 0.05); branch(q, a - 0.45 + r() * 0.2, L * 0.75, w * 0.75, d + 1); branch(q, a + 0.4 + r() * 0.2, L * 0.72, w * 0.72, d + 1); };
      branch(base, -Math.PI / 2 + sd * 0.15, 120 + r() * 40, 16, 0);
    }
    // rocks
    for (const [x, w] of [[300, 120], [760, 150]]) poly(g, [[x - w, FLOOR + 60], [x - w * 0.6, FLOOR - 30], [x + w * 0.2, FLOOR - 50], [x + w, FLOOR + 10], [x + w * 0.8, FLOOR + 70], [x - w * 0.4, FLOOR + 80]], [110, 110, 130], [170, 170, 190], [60, 60, 80], x, 0.55);
    return (BG[key + 'reef'] = c);
  }
  function reef(ctx, t, key) {
    ctx.drawImage(reefLayer(key), 0, 0);
    const pal = REEF[key];
    // shimmering light shafts
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 5; i++) { const x = 120 + i * 220 + Math.sin(t * 0.5 + i) * 30, a = 0.06 + 0.04 * Math.sin(t * 1.3 + i * 2); tri2(ctx, [x - 40, 0], [x + 60, 0], [x - 140 + i * 30, FLOOR], H.rgba(pal.glow, a)); }
    ctx.restore();
    // drifting particles
    const R0 = H.rng(77); for (let i = 0; i < 26; i++) { const x = (R0() * W + t * (8 + R0() * 14)) % W, y = (R0() * HH - t * (10 + R0() * 20) + HH * 4) % HH; gem(ctx, x, y, 3 + R0() * 5, H.mix(pal.glow, [255, 255, 255], 0.5), t + i); }
  }
  function header(ctx, t) {
    const k = EO(t, P(2, 'how') + 0.15, P(2, 'how') + 0.5); if (k <= 0 || t > CUT.end) return;
    ctx.save(); ctx.globalAlpha = k; lpTag(ctx, 540, 222, 'HOW DOES IT PUNCH SO HARD?', { font: FONT(42), bg: INK, col: '#fff', k: 0.6 + 0.4 * k }); ctx.restore();
  }
  // strike envelope: list of [t0, hold] pulses -> ext 0..1
  function strikeExt(t, pulses) { let e = 0; for (const [t0, t1] of pulses) { if (t < t0) continue; const up = H.clamp((t - t0) / 0.06), dn = 1 - H.ease.inOut(ph(t, t1, t1 + 0.35)); e = Math.max(e, up * dn); } return e; }

  // ---- A: hook on the reef ----
  function sceneHook(ctx, t) {
    const z = 1 + 0.05 * EI(t, 0, CUT.intro);
    ctx.save(); ctx.translate(540, 1300); ctx.scale(z, z); ctx.translate(-540, -1300);
    reef(ctx, t, 'shallow');
    const o = { x: 470, y: 1300, s: 1.35, t, ext: strikeExt(t, [[P(1, 'punches'), P(1, 'punches') + 0.5], [P(2, 'crack') - 0.06, P(2, 'crack') + 0.4]]) };
    shrimp(ctx, o);
    const cw = clubWorld(o);
    shock(ctx, cw[0] + 30, cw[1], t, P(1, 'punches') + 0.04, 220); shock(ctx, cw[0] + 30, cw[1], t, P(2, 'crack'), 300);
    speedLines(ctx, cw[0], cw[1], 0.1, (1 - ph(t, P(1, 'punches') + 0.04, P(1, 'punches') + 0.5)) * (t > P(1, 'punches') ? 1 : 0), 3);
    ctx.restore();
    // glass pane between us and the shrimp cracks
    if (t > P(2, 'crack') - 0.05) { ctx.save(); ctx.fillStyle = 'rgba(200,240,255,0.10)'; ctx.fillRect(0, 0, W, HH); ctx.restore(); cracks(ctx, 860, 1310, 520, EO(t, P(2, 'crack') - 0.02, P(2, 'crack') + 0.35), 11); }
    const o0 = out(t, P(1, 'punches'));
    lpTag(ctx, 540, 560, 'THUMB-SIZED', { k: BK(t, P(0, 'thumb') - 0.15) * o0, font: FONT(116), h: 180, bg: '#fff3dc' });
    lpTag(ctx, 540, 760, '~10 CM', { k: BK(t, P(0, 'size') - 0.12) * o0, font: FONT(84), h: 140, bg: '#7fd8ff' });
    const o1 = out(t, P(2, 'hard'));
    bigNumber(ctx, 540, 720, '80', 300, BK(t, P(1, '80') - 0.12) * o1, '#ffe27a');
    lpTag(ctx, 540, 830, 'KM/H PUNCH', { k: BK(t, P(1, 'kilometers') - 0.12) * o1, font: FONT(88), h: 150, bg: '#fff3dc' });
    const o2 = out(t, P(3, 'meet'));
    lpTag(ctx, 540, 520, 'CRACKS GLASS', { k: BK(t, P(2, 'crack') - 0.12) * o2, font: FONT(104), h: 170, bg: '#fff3dc' });
    lpTag(ctx, 540, 760, 'HOW?', { k: BK(t, P(2, 'how') - 0.12) * o2, font: FONT(170), h: 240, bg: CORAL, col: '#fff' });
  }
  // ---- B: meet the mantis shrimp, the folded club ----
  function sceneIntro(ctx, t) {
    const zc = EI(t, P(5, 'club') - 0.4, P(5, 'club') + 0.3), z = H.lerp(1.0, 1.55, zc);
    const fx = H.lerp(540, 700, zc), fy = H.lerp(1150, 1330, zc);
    ctx.save(); ctx.translate(540, 1150); ctx.scale(z, z); ctx.translate(-fx, -fy);
    reef(ctx, t, 'deep');
    const walk = H.lerp(-240, 0, EO(t, CUT.intro, CUT.intro + 1.2));
    const o = { x: 470 + walk, y: 1300, s: 1.35, t, hi: zc * (0.6 + 0.4 * Math.sin(t * 8)) * (1 - ph(t, P(6, 'and'), P(6, 'and') + 0.3)) };
    shrimp(ctx, o);
    ctx.restore();
    const o3 = out(t, P(4, 'it'));
    lpTag(ctx, 540, 560, 'MANTIS', { k: BK(t, P(3, 'mantis') - 0.15) * o3, font: FONT(140), h: 210, bg: '#fff3dc' });
    lpTag(ctx, 540, 760, 'SHRIMP', { k: BK(t, P(3, 'shrimp') - 0.12) * o3, font: FONT(120), h: 186, bg: '#7fd8ff' });
    const o4 = out(t, P(5, 'it'));
    lpTag(ctx, 540, 600, 'CLAWS?', { k: BK(t, P(4, 'pinch') - 0.12) * o4, font: FONT(130), h: 200, bg: '#fff3dc' });
    hexBadge(ctx, 820, 520, BK(t, P(4, 'claws') - 0.08) * o4, false, 64);
    lpTag(ctx, 540, 520, 'CLUB', { k: BK(t, P(5, 'club') - 0.12), font: FONT(150), h: 220, bg: '#ffe27a' });
    lpTag(ctx, 540, 720, 'FOLDED UNDER HEAD', { k: BK(t, P(5, 'folded') - 0.12), font: FONT(64), h: 116, bg: '#fff3dc' });
    if (t > P(5, 'club')) { const a = [300, 840], b = [560, 1250]; lpArrow(ctx, a, [250, 1080], b, EI(t, P(5, 'club'), P(5, 'club') + 0.4), [255, 226, 122], 22); }
  }
  // ---- C: the spring, saddle and latch (cutaway diagram) ----
  function saddle(ctx, cx, cy, w, h, sq, light, dark, seed) {
    const N = 6, amp = 0.55 * (1 + 0.8 * sq), ww = w * (1 - 0.22 * sq), r = H.rng(seed);
    const P3 = (u, v) => [cx + (u - v) * ww * 0.5, cy + (u + v) * h * 0.22 - (u * u - v * v) * amp * h * 0.5];
    const quads = []; for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { const u0 = -1 + 2 * i / N, u1 = -1 + 2 * (i + 1) / N, v0 = -1 + 2 * j / N, v1 = -1 + 2 * (j + 1) / N; quads.push({ i, j, u0, u1, v0, v1, d: i + j }); }
    quads.sort((a, b) => a.d - b.d);
    for (const q of quads) {
      const a = P3(q.u0, q.v0), b = P3(q.u1, q.v0), c = P3(q.u1, q.v1), d = P3(q.u0, q.v1), uc = (q.u0 + q.u1) / 2, vc = (q.v0 + q.v1) / 2;
      const sh = H.clamp(0.5 + 0.45 * uc - 0.3 * vc + (r() - 0.5) * 0.12);
      tri2(ctx, a, b, c, H.rgba(H.mix(dark, light, sh))); tri2(ctx, a, c, d, H.rgba(H.mix(dark, light, sh * 0.85)));
    }
  }
  function sceneSpring(ctx, t) {
    ctx.drawImage(mosaicLayer('lab', REEF.lab.top, REEF.lab.bot, [540, 1150], REEF.lab.glow, HH, 120), 0, 0);
    const sq = EI(t, P(7, 'squeeze') - 0.1, P(7, 'spring') + 0.2) * (1 - H.ease.out(ph(t, P(11, 'go') - 0.08, P(11, 'go') + 0.12)));
    const fire = H.ease.in(ph(t, P(11, 'go') - 0.08, P(11, 'go') + 0.06));
    const shake = sq > 0.9 && t < P(11, 'go') ? Math.sin(t * 70) * 3 : 0;
    // upper arm shell (cutaway): long faceted housing
    const X0 = 140, X1 = 820, Y = 1180, HHt = 170;
    ctx.save(); ctx.translate(shake, 0);
    poly(ctx, [[X0, Y - HHt], [X1 - 40, Y - HHt - 10], [X1 + 20, Y - 40], [X1 + 20, Y + 40], [X1 - 40, Y + HHt + 10], [X0, Y + HHt]], [236, 84, 64], [255, 150, 110], [150, 40, 40], 501, 0.82);
    ctx.fillStyle = 'rgba(30,10,30,0.55)'; ctx.beginPath(); ctx.moveTo(X0 + 30, Y - HHt + 30); ctx.lineTo(X1 - 60, Y - HHt + 24); ctx.lineTo(X1 - 10, Y); ctx.lineTo(X1 - 60, Y + HHt - 24); ctx.lineTo(X0 + 30, Y + HHt - 30); ctx.closePath(); ctx.fill();
    // muscle bundle: shortens as it squeezes
    const mPulse = (t > P(7, 'muscles') - 0.2 && t < P(7, 'muscles') + 0.8) ? 0.5 + 0.5 * Math.sin(t * 14) : 0;
    const mx0 = X0 + 50, mx1 = H.lerp(560, 470, sq), mh = H.lerp(100, 125, sq);
    for (let i = 0; i < 6; i++) { const y0 = Y - mh + i * mh / 3, y1 = y0 + mh / 3; const c = H.mix([200, 50, 70], [255, 120, 120], (i % 2) * 0.4 + mPulse * 0.3); tri2(ctx, [mx0, (y0 + y1) / 2], [mx1, y0], [mx1, y1], H.rgba(c)); tri2(ctx, [mx0, (y0 + y1) / 2], [mx0 + 40, y0 + 6], [mx1, y0], H.rgba(H.mix(c, [255, 255, 255], 0.2))); }
    // tendon to saddle
    seg(ctx, [mx1, Y], [H.lerp(600, 560, sq), Y], 10, 10, [250, 230, 210]);
    // saddle spring
    saddle(ctx, H.lerp(680, 640, sq), Y, 220, 260, sq, [255, 236, 140], [200, 120, 40], 77);
    ctx.restore();
    // forearm + club: folded back over the arm, whips forward on release
    const pv = [X1 + 10, Y - 20], ang = H.lerp(Math.PI + 0.9, -0.55, fire);
    const tip = [pv[0] + Math.cos(ang) * 300, pv[1] + Math.sin(ang) * 300];
    if (fire > 0 && fire < 1) for (let i = 1; i <= 4; i++) { const a2 = ang + i * 0.22; tri2(ctx, pv, [pv[0] + Math.cos(a2) * 320, pv[1] + Math.sin(a2) * 320], [pv[0] + Math.cos(ang) * 320, pv[1] + Math.sin(ang) * 320], `rgba(255,255,255,${0.25 / i})`); }
    seg(ctx, pv, tip, 40, 48, CLUB);
    const knob = []; for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2; knob.push([tip[0] + Math.cos(a) * 66, tip[1] + Math.sin(a) * 60]); }
    poly(ctx, knob, CLUB, CLUBL, CLUBD, 45, 0.5);
    gem(ctx, pv[0], pv[1], 36, [150, 40, 60]);
    // latch: a hook that holds the forearm, drops away on "click"
    const lk = BK(t, P(10, 'latch') - 0.15, 0.35), drop = EI(t, P(11, 'click') - 0.05, P(11, 'click') + 0.25);
    if (lk > 0.01 && drop < 1) { ctx.save(); ctx.translate(pv[0] - 70, pv[1] - 120 + drop * 140); ctx.rotate(drop * 1.2); ctx.scale(lk * 1.7, lk * 1.7); ctx.globalAlpha = 1 - drop * 0.8;
      poly(ctx, [[-30, -40], [30, -40], [36, 20], [10, 50], [-20, 30], [-34, -10]], [120, 220, 255], [210, 245, 255], [40, 120, 180], 502, 0.5); tri2(ctx, [10, 50], [40, 60], [24, 26], H.rgba([40, 120, 180])); ctx.restore(); }
    if (t > P(11, 'go') - 0.02) { shock(ctx, tip[0], tip[1], t, P(11, 'go') + 0.06, 300, '255,240,180'); }
    // labels
    const oT = out(t, P(7, 'big'));
    lpTag(ctx, 540, 520, 'THE TRICK', { k: BK(t, P(6, 'trick') - 0.12) * oT, font: FONT(110), h: 176, bg: '#fff3dc' });
    lpTag(ctx, 540, 720, 'MUSCLE', { k: BK(t, P(6, 'isnt') - 0.12) * oT, font: FONT(120), h: 186, bg: '#ffb0a0' });
    hexBadge(ctx, 830, 720, BK(t, P(6, 'muscle') - 0.05) * oT, false, 60);
    const oM = out(t, P(8, 'shaped'));
    lpTag(ctx, 330, 900, 'MUSCLES', { k: BK(t, P(7, 'muscles') - 0.12) * oM, font: FONT(72), h: 126, bg: '#ffb0a0' });
    lpTag(ctx, 540, 600, 'SQUEEZE', { k: BK(t, P(7, 'squeeze') - 0.12) * oM, font: FONT(110), h: 176, bg: '#fff3dc' });
    lpTag(ctx, 680, 1460, 'SPRING', { k: BK(t, P(7, 'spring') - 0.12) * out(t, P(10, 'a')), font: FONT(84), h: 140, bg: '#ffe27a' });
    const oS = out(t, P(10, 'a'));
    lpTag(ctx, 540, 560, 'SADDLE SHAPE', { k: BK(t, P(8, 'saddle') - 0.12) * oS, font: FONT(96), h: 156, bg: '#fff3dc' });
    if (t > P(9, 'pringles') - 0.2 && t < P(10, 'a')) { const k = BK(t, P(9, 'pringles') - 0.15) * oS; ctx.save(); ctx.translate(540, 800); ctx.scale(k, k); saddle(ctx, 60, 0, 170, 120, 0, [255, 214, 110], [220, 140, 40], 31); ctx.restore(); lpTag(ctx, 300, 800, '=  CHIP', { k, font: FONT(72), h: 126, bg: '#fff3dc' }); }
    const oL = out(t, P(11, 'then'));
    lpTag(ctx, 540, 560, 'LATCH', { k: BK(t, P(10, 'latch') - 0.12) * oL, font: FONT(130), h: 200, bg: '#7fd8ff' });
    lpTag(ctx, 540, 760, 'LOCKED', { k: BK(t, P(10, 'locked') - 0.12) * oL, font: FONT(96), h: 156, bg: '#fff3dc' });
    lpTag(ctx, 540, 620, 'CLICK!', { k: BK(t, P(11, 'click') - 0.12) * out(t, P(11, 'go') + 0.05), font: FONT(170), h: 240, bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 620, 'FIRE', { k: BK(t, P(11, 'go') - 0.05, 0.2), font: FONT(170), h: 240, bg: '#ffe27a' });
  }
  // ---- D: the strike, cavitation bubbles, second hit, snail shell ----
  function sceneStrike(ctx, t) {
    const zIn = EI(t, P(13, 'so') - 0.1, P(13, 'water')), zOut = EI(t, P(17, 'one') - 0.35, P(17, 'one') + 0.1);
    const z = 1 + 0.9 * zIn * (1 - zOut);
    const o = { x: 360, y: 1300, s: 1.2, t, ext: strikeExt(t, [[P(12, 'fires') - 0.05, P(17, 'one') - 0.45], [P(17, 'one') - 0.05, P(17, 'one') + 0.6], [P(17, 'two') - 0.05, CUT.molt]]) };
    const cw = clubWorld({ ...o, ext: 1 }), IP = [cw[0] + 46, cw[1]];
    ctx.save(); ctx.translate(540, 1150); ctx.scale(z, z); ctx.translate(-H.lerp(540, IP[0], zIn * (1 - zOut)), -H.lerp(1150, IP[1], zIn * (1 - zOut)));
    reef(ctx, t, 'shallow');
    const crack = EI(t, P(18, 'shells') - 0.15, P(18, 'chance') + 0.4);
    snail(ctx, IP[0] + 78, IP[1] + 8, 82, crack);
    shrimp(ctx, o);
    const c2 = clubWorld(o);
    speedLines(ctx, c2[0], c2[1], 0.1, (1 - ph(t, P(12, 'fires'), P(12, 'fires') + 0.6)) * (t > P(12, 'fires') ? 1 : 0), 5);
    shock(ctx, IP[0], IP[1], t, P(12, 'fires') + 0.01, 200);
    // cavitation bubbles: grow in the low-pressure wake, then collapse hard
    const grow = EO(t, P(13, 'water') - 0.1, P(13, 'bubbles') + 0.2), coll = H.ease.in(ph(t, P(14, 'collapse') - 0.1, P(15, 'slam') - 0.02));
    if (grow > 0 && coll < 1) { const R0 = H.rng(404); for (let i = 0; i < 12; i++) { const a = R0() * Math.PI * 2, d = R0() * 46, rr = (8 + R0() * 16) * grow * (1 - coll) * (1 + 0.06 * Math.sin(t * 20 + i)); const bx = IP[0] + Math.cos(a) * d, by = IP[1] + Math.sin(a) * d * 1.2; const ring = []; for (let k = 0; k < 7; k++) { const aa = k / 7 * Math.PI * 2; ring.push([bx + Math.cos(aa) * rr, by + Math.sin(aa) * rr]); } ctx.globalAlpha = 0.85; poly(ctx, ring, [200, 240, 255], [255, 255, 255], [120, 190, 230], 600 + i, 0.5); ctx.globalAlpha = 1; } }
    shock(ctx, IP[0], IP[1], t, P(15, 'slam') - 0.02, 150, '200,240,255');
    // flash of light and heat
    const fl = ph(t, P(16, 'flash') - 0.08, P(16, 'flash')) * (1 - ph(t, P(16, 'flash') + 0.1, P(16, 'flash') + 0.8));
    const ht = EO(t, P(16, 'heat') - 0.15, P(16, 'heat') + 0.1) * (1 - ph(t, P(17, 'one') - 0.5, P(17, 'one') - 0.1));
    if (fl > 0 || ht > 0) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g = ctx.createRadialGradient(IP[0], IP[1], 0, IP[0], IP[1], 160); g.addColorStop(0, `rgba(255,255,255,${fl})`); g.addColorStop(0.4, `rgba(255,${200 - 60 * ht | 0},${140 - 90 * ht | 0},${0.6 * Math.max(fl, ht)})`); g.addColorStop(1, 'rgba(255,150,60,0)'); ctx.fillStyle = g; ctx.fillRect(IP[0] - 170, IP[1] - 170, 340, 340); for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2 + 0.2; tri2(ctx, [IP[0] + Math.cos(a - 0.08) * 20, IP[1] + Math.sin(a - 0.08) * 20], [IP[0] + Math.cos(a + 0.08) * 20, IP[1] + Math.sin(a + 0.08) * 20], [IP[0] + Math.cos(a) * 130 * fl, IP[1] + Math.sin(a) * 130 * fl], `rgba(255,255,230,${fl})`); } ctx.restore(); }
    shock(ctx, IP[0], IP[1], t, P(17, 'one') - 0.04, 180); shock(ctx, IP[0], IP[1], t, P(17, 'two') - 0.04, 220, '200,240,255');
    ctx.restore();
    // labels (screen space)
    const oF = out(t, P(13, 'so'));
    bigNumber(ctx, 540, 900, '0.003 s', 190, BK(t, P(12, 'three') - 0.12) * oF, '#ffe27a');
    lpTag(ctx, 540, 650, 'UNDER', { k: BK(t, P(12, 'under') - 0.12) * oF, font: FONT(80), h: 136, bg: '#fff3dc' });
    lpTag(ctx, 540, 470, 'FIRES', { k: BK(t, P(12, 'fires') - 0.12) * oF, font: FONT(100), h: 160, bg: CORAL, col: '#fff' });
    const oB = out(t, P(14, 'when'));
    lpTag(ctx, 540, 520, 'WATER BOILS', { k: BK(t, P(13, 'boils') - 0.12) * oB, font: FONT(100), h: 164, bg: '#7fd8ff' });
    lpTag(ctx, 540, 720, 'BUBBLES', { k: BK(t, P(13, 'bubbles') - 0.12) * oB, font: FONT(96), h: 156, bg: '#fff3dc' });
    const oC = out(t, P(16, 'with'));
    lpTag(ctx, 540, 520, 'COLLAPSE', { k: BK(t, P(14, 'collapse') - 0.12) * oC, font: FONT(110), h: 176, bg: '#fff3dc' });
    lpTag(ctx, 540, 720, 'HIT #2', { k: BK(t, P(15, 'second') - 0.12) * oC, font: FONT(130), h: 200, bg: CORAL, col: '#fff' });
    const oL = out(t, P(17, 'one'));
    lpTag(ctx, 540, 520, 'LIGHT', { k: BK(t, P(16, 'light') - 0.12) * oL, font: FONT(110), h: 176, bg: '#fffbe0' });
    lpTag(ctx, 540, 720, '+ HEAT', { k: BK(t, P(16, 'heat') - 0.12) * oL, font: FONT(110), h: 176, bg: '#ffb070' });
    const oP = out(t, P(18, 'snail'));
    lpTag(ctx, 540, 520, '1 PUNCH', { k: BK(t, P(17, 'one') - 0.12) * oP, font: FONT(120), h: 186, bg: '#fff3dc' });
    lpTag(ctx, 540, 720, '2 HITS', { k: BK(t, P(17, 'two') - 0.12) * oP, font: FONT(140), h: 210, bg: '#ffe27a' });
    lpTag(ctx, 540, 560, 'SNAIL SHELLS', { k: BK(t, P(18, 'snail') - 0.12), font: FONT(100), h: 164, bg: '#fff3dc' });
    lpTag(ctx, 540, 760, 'NO CHANCE', { k: BK(t, P(18, 'chance') - 0.15), font: FONT(110), h: 176, bg: CORAL, col: '#fff' });
  }
  // ---- E: worn club, molt, fresh club ----
  function sceneMolt(ctx, t) {
    reef(ctx, t, 'deep');
    const peel = EI(t, P(20, 'molts') - 0.1, P(20, 'molts') + 1.0), fresh = EO(t, P(20, 'fresh') - 0.2, P(20, 'fresh') + 0.4);
    const worn = EO(t, P(19, 'wears') - 0.1, P(19, 'down')) * (1 - H.smooth(0.3, 0.7, peel));
    const base = { x: 500, y: 1240, s: 1.45, t, ext: 0.15 };
    if (peel > 0.01 && peel < 0.999) { ctx.save(); ctx.globalAlpha = 0.6 * (1 - peel); shrimp(ctx, { ...base, x: 500 - peel * 380, y: 1240 + peel * 60, pale: true, worn: 1 }); ctx.restore(); }
    shrimp(ctx, { ...base, worn, glow: fresh * (1 - ph(t, CUT.end - 0.5, CUT.end)), hi: fresh * (0.6 + 0.4 * Math.sin(t * 7)) });
    if (fresh > 0.01) { const cw = clubWorld(base); const R0 = H.rng(8); for (let i = 0; i < 8; i++) { const a = R0() * 6.28, d = 70 + R0() * 60 * fresh; gem(ctx, cw[0] + Math.cos(a + t) * d, cw[1] + Math.sin(a + t) * d, 9 * fresh, [255, 250, 200], t * 3 + i); } }
    const oW = out(t, P(20, 'it'));
    lpTag(ctx, 540, 560, 'WORN DOWN?', { k: BK(t, P(19, 'wears') - 0.12) * oW, font: FONT(110), h: 176, bg: '#fff3dc' });
    lpTag(ctx, 540, 520, 'MOLT', { k: BK(t, P(20, 'molts') - 0.12), font: FONT(150), h: 220, bg: '#7fd8ff' });
    lpTag(ctx, 540, 740, 'NEW CLUB', { k: BK(t, P(20, 'fresh') - 0.12), font: FONT(110), h: 176, bg: '#ffe27a' });
    hexBadge(ctx, 870, 740, BK(t, P(20, 'one') - 0.05), true, 56);
  }
  // ---- F: the question, behind aquarium glass ----
  function sceneEnd(ctx, t) {
    reef(ctx, t, 'shallow');
    const o = { x: 430, y: 1260, s: 1.35, t, ext: strikeExt(t, [[P(21, 'crack') - 0.06, P(21, 'crack') + 0.5]]) };
    shrimp(ctx, o); const cw = clubWorld({ ...o, ext: 1 });
    // aquarium glass: frame + tint
    ctx.fillStyle = 'rgba(210,245,255,0.12)'; ctx.fillRect(0, 0, W, HH);
    for (const [x, y, w, h] of [[0, 300, W, 26], [0, 1640, W, 30], [0, 300, 26, 1370], [W - 26, 300, 26, 1370]]) { ctx.fillStyle = '#1d2346'; ctx.fillRect(x, y, w, h); }
    tri2(ctx, [80, 340], [260, 340], [80, 900], 'rgba(255,255,255,0.12)');
    cracks(ctx, cw[0] + 40, cw[1], 560, EO(t, P(21, 'crack') - 0.02, P(21, 'glass') + 0.2), 23);
    shock(ctx, cw[0] + 40, cw[1], t, P(21, 'crack'), 260);
    const oG = out(t, P(22, 'what'));
    lpTag(ctx, 540, 560, 'IT CRACKS GLASS', { k: BK(t, P(21, 'crack') - 0.12) * oG, font: FONT(96), h: 156, bg: '#fff3dc' });
    lpTag(ctx, 540, 560, 'WHAT WOULD', { k: BK(t, P(22, 'what') - 0.12), font: FONT(100), h: 164, bg: '#fff3dc' });
    lpTag(ctx, 540, 760, 'YOU KEEP IT IN?', { k: BK(t, P(22, 'keep') - 0.12), font: FONT(100), h: 164, bg: CORAL, col: '#fff' });
  }
  function scene(ctx, t) {
    if (t < CUT.intro) sceneHook(ctx, t);
    else if (t < CUT.spring) sceneIntro(ctx, t);
    else if (t < CUT.strike) sceneSpring(ctx, t);
    else if (t < CUT.molt) sceneStrike(ctx, t);
    else if (t < CUT.end) sceneMolt(ctx, t);
    else sceneEnd(ctx, t);
  }
  function thumbnail(ctx, W_, H_) {
    ctx.save(); ctx.scale(W_ / W, H_ / HH);
    reef(ctx, 0.5, 'shallow'); const o = { x: 430, y: 1300, s: 1.4, t: 0.5, ext: 1 }; shrimp(ctx, o); const cw = clubWorld(o);
    ctx.fillStyle = 'rgba(210,245,255,0.12)'; ctx.fillRect(0, 0, W, HH); cracks(ctx, cw[0] + 40, cw[1], 560, 1, 23);
    bigNumber(ctx, 540, 700, '80 KM/H', 200, 1, '#ffe27a');
    lpTag(ctx, 540, 860, 'PUNCH', { font: FONT(130), h: 200, bg: CORAL, col: '#fff' });
    ctx.restore();
  }

  // ---------- sound (voiceover mode): glassy facets, water, snaps, bubbles ----------
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g = 1, p = 0, minor) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const bub = (t0, t1, rate, g = 1) => { const r = H.rng(Math.round(t0 * 77)); for (let t = t0; t < t1; t += 1 / rate) k.play('pop', t + r() * 0.05, { f: r.range(500, 1200), gain: 0.18 * g, pan: r.range(-0.5, 0.5), minor: true }); };
    const wipe = (t) => { k.withMinor(() => { for (let i = 0; i < 9; i++) k.play('tick', t + i * 0.05, { f: 2400 + i * 180, gain: 0.5 }); }); k.play('whoosh', t - 0.05, { dur: 0.6, gain: 0.45 }); };
    const snap = (t, g = 1) => { k.play('impact', t, { gain: 0.85 * g }); k.noise(t, { dur: 0.04, filter: 'highpass', f: 2500, gain: 0.5 * g, a: 0.001 }); k.play('swish', t - 0.08, { dur: 0.1, gain: 0.5 * g }); };
    const shatter = (t, g = 1) => { const r = H.rng(Math.round(t * 50)); for (let i = 0; i < 10; i++) k.noise(t + i * 0.025 + r() * 0.02, { dur: 0.05 + r() * 0.08, filter: 'highpass', f: 3000 + r() * 4000, gain: 0.22 * g * (1 - i / 12), pan: r.range(-0.6, 0.6) }); for (let i = 0; i < 4; i++) glass(t + 0.02 + i * 0.05, ['E6', 'B6', 'G#6', 'C#7'][i], 0.3 * g, (i - 1.5) * 0.3, 0.6); };
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pad', 0, D, { bpm: 96, gain: 0.22, chords: [['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['D3', 'F3', 'A3', 'C4'], ['E3', 'G#3', 'B3', 'D4']] });
    bub(0.2, CUT.intro, 2.5, 0.6);
    // A hook
    facet(P(0, 'thumb') - 0.15, 520); facet(P(0, 'size') - 0.12, 600, 0.8);
    snap(P(1, 'punches') + 0.04); k.play('impact', P(1, '80') - 0.08, { gain: 0.7 }); glass(P(1, '80'), 'A4', 1, 0, 1.1); facet(P(1, 'kilometers') - 0.12, 560);
    snap(P(2, 'crack') - 0.02); shatter(P(2, 'crack'), 1); k.play('impact', P(2, 'how') - 0.08, { gain: 0.8 }); k.play('sparkle', P(2, 'how'), { n: 4, gain: 0.35 });
    // B intro
    wipe(CUT.intro); bub(CUT.intro, CUT.spring, 2, 0.5);
    k.withMinor(() => { for (let x = CUT.intro + 0.1; x < CUT.intro + 1.2; x += 0.13) k.play('tick', x, { f: 3000, gain: 0.35 }); });
    facet(P(3, 'mantis') - 0.15, 470); facet(P(3, 'shrimp') - 0.12, 560);
    facet(P(4, 'pinch') - 0.12, 520); k.play('error', P(4, 'claws') - 0.08, { f: 'G3', gain: 0.35 });
    k.play('whoosh', P(5, 'club') - 0.4, { dur: 0.5, gain: 0.4 }); k.play('impact', P(5, 'club') - 0.08, { gain: 0.7 }); glass(P(5, 'club'), 'E5', 1, 0, 1); facet(P(5, 'folded') - 0.12, 600);
    // C spring
    wipe(CUT.spring); k.bed('hum', CUT.spring, CUT.strike, { gain: 0.25 });
    facet(P(6, 'trick') - 0.12, 520); facet(P(6, 'isnt') - 0.12, 470); k.play('error', P(6, 'muscle') - 0.05, { f: 'F3', gain: 0.35 });
    facet(P(7, 'muscles') - 0.12, 470); k.tone(P(7, 'squeeze') - 0.1, { f: [[0, 90], [1.3, 260]], type: 'sawtooth', dur: 1.4, gain: 0.04, filter: 'lowpass', f2: 700, a: 0.5, minor: true }); k.play('riser', P(7, 'squeeze') - 0.1, { dur: 1.2, gain: 0.25 });
    k.play('impact', P(7, 'spring') - 0.08, { gain: 0.6 }); facet(P(8, 'saddle') - 0.12, 600); k.play('pop', P(9, 'pringles') - 0.15, { gain: 0.45 }); glass(P(9, 'chip'), 'C5', 0.8, 0.3, 0.8);
    k.play('click', P(10, 'latch') - 0.12, { gain: 0.8 }); facet(P(10, 'latch') - 0.12, 520); k.play('stamp', P(10, 'locked') - 0.1, { gain: 0.5 });
    k.withMinor(() => { for (let x = P(10, 'locked') + 0.3; x < P(11, 'click') - 0.1; x += 0.25) k.play('tick', x, { f: 1800, gain: 0.5 }); });
    k.play('click', P(11, 'click') - 0.05, { f: 2400, gain: 1.2 }); k.play('tock', P(11, 'click') - 0.03, { f: 1100, gain: 0.6 });
    snap(P(11, 'go') + 0.04, 1.1);
    // D strike
    wipe(CUT.strike);
    facet(P(12, 'fires') - 0.12, 600); snap(P(12, 'fires') + 0.01, 1.1); k.play('impact', P(12, 'three') - 0.08, { gain: 0.75 }); glass(P(12, 'three'), 'A4', 1, 0, 1); facet(P(12, 'under') - 0.12, 470);
    k.play('whoosh', P(13, 'so') - 0.1, { dur: 0.6, gain: 0.35 }); bub(P(13, 'water') - 0.1, P(13, 'bubbles') + 0.4, 16, 1.1); k.noise(P(13, 'water'), { dur: 2.2, color: 'pink', filter: 'bandpass', f: 1800, q: 0.7, gain: 0.05, a: 0.6, minor: true }); facet(P(13, 'boils') - 0.12, 560); facet(P(13, 'bubbles') - 0.12, 640, 0.8);
    facet(P(14, 'collapse') - 0.12, 520); k.play('riser', P(14, 'collapse'), { dur: P(15, 'slam') - P(14, 'collapse'), gain: 0.3 }); k.play('impact', P(15, 'slam') - 0.02, { gain: 0.95 }); k.noise(P(15, 'slam'), { dur: 0.05, filter: 'highpass', f: 3000, gain: 0.45, a: 0.001 });
    facet(P(15, 'second') - 0.12, 600);
    k.play('sparkle', P(16, 'flash') - 0.08, { n: 6, gain: 0.4 }); glass(P(16, 'light') - 0.05, 'E6', 0.6, 0, 1.2); k.noise(P(16, 'heat') - 0.1, { dur: 1.0, color: 'brown', filter: 'lowpass', f: 600, gain: 0.12, a: 0.3, minor: true });
    snap(P(17, 'one') - 0.04, 0.9); snap(P(17, 'two') - 0.04, 0.9); glass(P(17, 'two'), 'E5', 0.8, 0, 0.9);
    facet(P(18, 'snail') - 0.12, 520); shatter(P(18, 'shells') - 0.1, 0.9); k.play('thud', P(18, 'shells'), { f: 110, gain: 0.5 }); k.play('error', P(18, 'chance') - 0.1, { f: 'E3', gain: 0.25 });
    // E molt
    wipe(CUT.molt); bub(CUT.molt, CUT.end, 2, 0.5);
    facet(P(19, 'wears') - 0.12, 470); k.play('erase', P(19, 'wears'), { dur: 0.6, gain: 0.35 });
    k.play('paper', P(20, 'molts') - 0.1, { dur: 0.9, gain: 0.5 }); k.play('whoosh', P(20, 'molts'), { dur: 1.0, gain: 0.3 }); facet(P(20, 'molts') - 0.12, 560);
    k.play('success', P(20, 'fresh') - 0.1, { f: 'E5', gain: 0.45 }); k.play('sparkle', P(20, 'fresh'), { n: 5, gain: 0.35 });
    // F question
    wipe(CUT.end);
    snap(P(21, 'crack') - 0.02, 0.9); shatter(P(21, 'crack'), 0.9); facet(P(22, 'what') - 0.12, 520); facet(P(22, 'keep') - 0.12, 600);
    ['A4', 'E5'].forEach((n, i) => glass(P(22, 'in') + 0.15 + i * 0.09, n, 0.9, (i - 0.5) * 0.3, 1.4)); k.tone(P(22, 'in') + 0.15, { f: 'A2', type: 'triangle', dur: 1.2, gain: 0.12, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
