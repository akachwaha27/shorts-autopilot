// ================= Low-Poly Faceted, vertical 1080x1920: "How does a sea otter stay warm with no blubber?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W = 1080, HH = 1920;
  try { document.fonts.load('700 48px "Space Grotesk"'); } catch (e) { /* render anyway */ }
  // ---------- BEATS: copied from phrases.json (Kokoro af_heart take, natural mode) ----------
  const BEATS = [
    { s: 0.25, e: 1.7, w: {'a': 0.25, 'sea': 0.32, 'otter': 0.53, 'has': 0.87, 'no': 1.08, 'blubber': 1.22} }, // 0 A sea otter has no blubber,
    { s: 1.85, e: 4.1, w: {'but': 1.85, 'youd': 2.05, 'freeze': 2.33, 'long': 2.74, 'before': 3.01, 'it': 3.42, 'would': 3.55, 'why': 3.9} }, // 1 but you'd freeze long before it would. Why?
    { s: 4.62, e: 6.86, w: {'whales': 4.62, 'and': 5.07, 'seals': 5.29, 'wrap': 5.67, 'up': 5.97, 'in': 6.11, 'thick': 6.26, 'fat': 6.64} }, // 2 Whales and seals wrap up in thick fat.
    { s: 7.21, e: 8.56, w: {'the': 7.21, 'otters': 7.41, 'secret': 7.82, 'is': 8.22, 'fur': 8.36} }, // 3 The otter's secret is fur.
    { s: 9.01, e: 11.38, w: {'up': 9.01, 'to': 9.15, 'a': 9.29, 'million': 9.36, 'hairs': 9.85, 'on': 10.2, 'every': 10.34, 'square': 10.68, 'inch': 11.1} }, // 4 Up to a million hairs on every square inch,
    { s: 11.74, e: 13.37, w: {'the': 11.74, 'densest': 11.94, 'fur': 12.42, 'of': 12.62, 'any': 12.76, 'animal': 12.96} }, // 5 the densest fur of any animal.
    { s: 13.75, e: 15.75, w: {'thats': 13.75, 'more': 14.06, 'hairs': 14.31, 'on': 14.62, 'a': 14.75, 'stampsized': 14.81, 'patch': 15.44} }, // 6 That's more hairs on a stamp-sized patch
    { s: 15.81, e: 17.42, w: {'than': 15.81, 'you': 16.06, 'have': 16.24, 'on': 16.49, 'your': 16.61, 'whole': 16.86, 'head': 17.17} }, // 7 than you have on your whole head.
    { s: 17.81, e: 19.37, w: {'those': 17.81, 'hairs': 18.12, 'trap': 18.44, 'a': 18.69, 'layer': 18.75, 'of': 19.06, 'air': 19.18} }, // 8 Those hairs trap a layer of air,
    { s: 19.7, e: 21.79, w: {'so': 19.7, 'cold': 19.84, 'water': 20.12, 'never': 20.47, 'touches': 20.82, 'its': 21.3, 'skin': 21.51} }, // 9 so cold water never touches its skin.
    { s: 22.22, e: 23.95, w: {'thats': 22.22, 'why': 22.54, 'otters': 22.73, 'groom': 23.12, 'for': 23.44, 'hours': 23.63} }, // 10 That's why otters groom for hours,
    { s: 24.26, e: 25.73, w: {'fluffing': 24.26, 'air': 24.73, 'into': 24.91, 'their': 25.14, 'coats': 25.44} }, // 11 fluffing air into their coats.
    { s: 26.08, e: 27.57, w: {'but': 26.08, 'fur': 26.29, 'alone': 26.5, 'isnt': 26.86, 'enough': 27.14} }, // 12 But fur alone isn't enough.
    { s: 28.04, e: 29.84, w: {'its': 28.04, 'muscles': 28.25, 'leak': 28.73, 'energy': 29.01, 'as': 29.42, 'heat': 29.56} }, // 13 Its muscles leak energy as heat,
    { s: 30.19, e: 32.0, w: {'like': 30.19, 'an': 30.49, 'engine': 30.64, 'idling': 31.09, 'all': 31.54, 'day': 31.77} }, // 14 like an engine idling all day.
    { s: 32.46, e: 34.88, w: {'so': 32.46, 'it': 32.6, 'burns': 32.74, 'fuel': 33.1, 'about': 33.38, 'three': 33.74, 'times': 34.1, 'faster': 34.45} }, // 15 So it burns fuel about three times faster
    { s: 34.88, e: 36.52, w: {'than': 34.88, 'other': 35.16, 'animals': 35.52, 'its': 36.02, 'size': 36.23} }, // 16 than other animals its size.
    { s: 36.92, e: 39.53, w: {'to': 36.92, 'keep': 37.04, 'up': 37.29, 'it': 37.42, 'eats': 37.54, 'about': 37.79, 'a': 38.1, 'quarter': 38.16, 'of': 38.6, 'its': 38.72, 'body': 38.91, 'weight': 39.16} }, // 17 To keep up, it eats about a quarter of its body weight
    { s: 39.75, e: 40.75, w: {'every': 39.75, 'single': 40.11, 'day': 40.53} }, // 18 every single day.
    { s: 41.16, e: 43.41, w: {'would': 41.16, 'you': 41.45, 'trade': 41.63, 'your': 41.91, 'jacket': 42.15, 'for': 42.49, 'a': 42.66, 'million': 42.72, 'hairs': 43.13} }, // 19 Would you trade your jacket for a million hairs,
    { s: 43.75, e: 45.4, w: {'and': 43.75, 'a': 43.91, 'quarter': 43.97, 'of': 44.34, 'your': 44.45, 'weight': 44.66, 'in': 44.98, 'snacks': 45.08} }, // 20 and a quarter of your weight in snacks?
  ];
  const P = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in ' + i); return v; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scenes: A icy sea (no blubber, you'd freeze, why?, whales+seals = fat, secret = fur) -> B fur macro (1,000,000 / sq in, densest, stamp vs head)
  //         -> C cross-section (air layer, cold water blocked, dry skin) -> D grooming at sea (hours, fluffing air)
  //         -> E engine (fur not enough, muscles leak heat, idling engine, 3x) -> F food (1/4 body weight, every day) -> G question
  const CUT = { fur: BEATS[4].s - 0.3, sect: BEATS[8].s - 0.3, groom: BEATS[10].s - 0.3, engine: BEATS[12].s - 0.3, food: BEATS[17].s - 0.3, end: BEATS[19].s - 0.3 };
  const CUTS = [CUT.fur, CUT.sect, CUT.groom, CUT.engine, CUT.food, CUT.end];
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

  // =================== SEA OTTER (floating on its back, faceted; local units, waterline y=0, head toward +x) ===================
  const FUR = [120, 84, 58], FURL = [176, 132, 96], FURD = [70, 46, 32], FACE = [214, 196, 170], FACEL = [240, 228, 206], FACED = [150, 130, 110];
  // o: { x, y, s, t, roll (rad), clam (0..1), paw (0..1 rub phase amplitude), glow (warm body glow) }
  function otter(ctx, o) {
    const s = o.s || 1, t = o.t || 0, bob = Math.sin(t * 1.7) * 7, rot = Math.sin(t * 1.1) * 0.03 + (o.roll || 0);
    ctx.save(); ctx.translate(o.x, o.y + bob); ctx.rotate(rot); ctx.scale(s, s);
    if (o.glow > 0.01) { const g = ctx.createRadialGradient(0, -30, 20, 0, -30, 330); g.addColorStop(0, `rgba(255,170,90,${0.55 * o.glow})`); g.addColorStop(1, 'rgba(255,170,90,0)'); ctx.fillStyle = g; ctx.fillRect(-340, -360, 680, 660); }
    // tail: flat paddle trailing on the water
    seg(ctx, [-185, -6], [-270, -14], 26, 22, FUR, 0.05); seg(ctx, [-270, -14], [-345, -6 + Math.sin(t * 2) * 4], 22, 12, FUR, 0.1);
    // hind feet: webbed flippers poking up
    const kick = Math.sin(t * 2.4) * 0.12;
    for (const [bx, sd] of [[-150, 0], [-120, 1]]) {
      ctx.save(); ctx.translate(bx, -48); ctx.rotate(-0.5 + kick * (sd ? -1 : 1) + sd * 0.25);
      seg(ctx, [0, 0], [0, -46], 14, 11, FURD, 0.08 * sd);
      const fc = H.mix(FURD, [30, 20, 16], 0.25 + 0.15 * sd);
      tri2(ctx, [0, -40], [-30, -92], [-6, -98], H.rgba(H.mix(fc, [255, 255, 255], 0.12))); tri2(ctx, [0, -40], [-6, -98], [16, -96], H.rgba(fc)); tri2(ctx, [0, -40], [16, -96], [32, -84], H.rgba(H.mix(fc, [0, 0, 0], 0.15)));
      ctx.restore();
    }
    // body (belly up, back under the water)
    const body = [[-195, -4], [-160, -52], [-80, -76], [10, -84], [100, -76], [160, -56], [190, -20], [182, 22], [110, 46], [0, 54], [-120, 44], [-188, 22]];
    poly(ctx, body, FUR, FURL, FURD, 61, 0.56);
    // paler chest
    tri2(ctx, [60, -80], [165, -54], [110, -30], H.rgba(H.mix(FACE, FUR, 0.45), 0.9)); tri2(ctx, [60, -80], [110, -30], [20, -56], H.rgba(H.mix(FACE, FUR, 0.6), 0.85));
    // fur sheen facets
    const r = H.rng(77); for (let i = 0; i < 16; i++) { const x = r.range(-150, 150), y = r.range(-70, 20); tri2(ctx, [x, y], [x + 14, y - 4], [x + 6, y + 10], H.rgba(H.mix(FURL, [255, 240, 220], 0.3), 0.5)); }
    // head (pale face)
    ctx.save(); ctx.translate(222, -62);
    const head = []; for (let i = 0; i < 11; i++) { const a = i / 11 * Math.PI * 2; head.push([Math.cos(a) * 66 * (Math.cos(a) > 0 ? 1.08 : 1), Math.sin(a) * 58]); }
    tri2(ctx, [-34, -44], [-20, -70], [-6, -50], H.rgba(FACED)); tri2(ctx, [22, -48], [34, -72], [44, -44], H.rgba(FACED)); // ears
    poly(ctx, head, FACE, FACEL, FACED, 63, 0.5);
    poly(ctx, [[30, -6], [62, -14], [84, 2], [74, 26], [40, 28], [24, 12]], FACEL, [255, 250, 240], FACE, 64, 0.5); // muzzle
    tri2(ctx, [70, -14], [90, -8], [78, 4], H.rgba([36, 26, 24])); // nose
    gem(ctx, 18, -22, 9, [26, 20, 18]); gem(ctx, 16, -25, 3, [255, 255, 255]); gem(ctx, 52, -26, 7, [26, 20, 18]);
    ctx.strokeStyle = 'rgba(255,255,255,0.75)'; ctx.lineWidth = 2; for (const dy of [4, 12, 20]) { ctx.beginPath(); ctx.moveTo(70, dy); ctx.lineTo(118, dy - 6 + dy * 0.3); ctx.stroke(); }
    ctx.restore();
    // front paws on the chest (rubbing when o.paw)
    const rub = (o.paw || 0) * Math.sin(t * 9) * 26;
    for (const [px, sd] of [[96, 0], [128, 1]]) { const a = [px - 20, -66], b = [px + rub * (sd ? -1 : 1), -112]; seg(ctx, a, b, 16, 13, FURD, 0.05 * sd); gem(ctx, b[0], b[1], 15, H.mix(FURD, [30, 20, 16], 0.3)); }
    if (o.clam > 0.01) { ctx.save(); ctx.translate(112, -128); ctx.scale(o.clam, o.clam); clam(ctx, 0, 0, 34); ctx.restore(); }
    ctx.restore();
  }
  function clam(ctx, x, y, r) { // faceted fan shell
    for (let i = 0; i < 6; i++) { const a0 = Math.PI + i / 6 * Math.PI, a1 = Math.PI + (i + 1) / 6 * Math.PI; tri2(ctx, [x, y + r * 0.35], [x + Math.cos(a0) * r, y + Math.sin(a0) * r * 0.85], [x + Math.cos(a1) * r, y + Math.sin(a1) * r * 0.85], H.rgba(H.mix([236, 200, 170], [255, 240, 225], (i % 2) * 0.5))); }
    tri2(ctx, [x - r, y], [x + r, y], [x, y + r * 0.45], H.rgba([200, 160, 130]));
  }
  function urchin(ctx, x, y, r) { const R0 = H.rng(Math.round(x + y)); for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2 + R0() * 0.2; tri2(ctx, [x + Math.cos(a - 0.15) * r * 0.7, y + Math.sin(a - 0.15) * r * 0.7], [x + Math.cos(a + 0.15) * r * 0.7, y + Math.sin(a + 0.15) * r * 0.7], [x + Math.cos(a) * r * 1.5, y + Math.sin(a) * r * 1.5], H.rgba([110, 50, 140])); } hexKnob(ctx, x, y, r * 0.85, [150, 70, 180], 0); }
  function crab(ctx, x, y, r) {
    for (const sd of [-1, 1]) { seg(ctx, [x + sd * r * 0.6, y], [x + sd * r * 1.3, y - r * 0.6], r * 0.14, r * 0.1, [210, 70, 50], 0.05); gem(ctx, x + sd * r * 1.4, y - r * 0.75, r * 0.32, [230, 90, 60], sd * 0.4); for (let k = 0; k < 3; k++) seg(ctx, [x + sd * r * 0.5, y + r * 0.1 + k * r * 0.12], [x + sd * r * 1.2, y + r * 0.5 + k * r * 0.15], r * 0.07, r * 0.05, [190, 60, 44], 0.1); }
    poly(ctx, [[x - r, y], [x - r * 0.6, y - r * 0.5], [x + r * 0.6, y - r * 0.5], [x + r, y], [x + r * 0.5, y + r * 0.4], [x - r * 0.5, y + r * 0.4]], [220, 80, 56], [255, 140, 100], [160, 50, 40], Math.round(x), 0.5);
  }

  // =================== ICY SEA (sky mosaic, faceted ice peaks, floating floes, faceted water rows) ===================
  const PAL = {
    dawn: { top: [70, 110, 190], bot: [255, 210, 190], sunX: 760, sunY: 820, glow: [255, 236, 210], peak: [190, 205, 235], w0: [40, 100, 160], w1: [90, 160, 210], w2: [20, 60, 120], fog: [230, 220, 235] },
    day: { top: [60, 140, 210], bot: [200, 235, 250], sunX: 270, sunY: 640, glow: [255, 250, 225], peak: [210, 225, 245], w0: [30, 120, 170], w1: [80, 180, 215], w2: [16, 70, 130], fog: [215, 235, 248] },
    dusk: { top: [40, 40, 110], bot: [250, 150, 140], sunX: 540, sunY: 900, glow: [255, 200, 180], peak: [150, 140, 190], w0: [40, 60, 130], w1: [100, 110, 180], w2: [20, 30, 80], fog: [220, 160, 170] },
  };
  const HZ = 1000, WL = 1330;
  function peakLayer(key, pal) {
    if (BG[key]) return BG[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(key.length * 23 + 9), n = 7, cs = W / n;
    for (let i = 0; i < n; i++) {
      const x0 = i * cs - 40, x1 = (i + 1) * cs + 40, top = [H.lerp(x0, x1, r.range(0.35, 0.65)), HZ - 120 - r() * 190];
      const lit = H.mix(pal.peak, [255, 255, 255], 0.35 + r() * 0.2), shd = H.mix(pal.peak, pal.top, 0.35 + r() * 0.1);
      tri2(g, [x0, HZ + 10], top, [top[0] + r.range(-20, 20), HZ + 10], H.rgba(lit)); tri2(g, [top[0] + r.range(-20, 20), HZ + 10], top, [x1, HZ + 10], H.rgba(shd));
      tri2(g, top, [top[0] - 30, top[1] + 60], [top[0] + 24, top[1] + 50], H.rgba([255, 255, 255], 0.85));
    }
    return (BG[key] = c);
  }
  function floe(ctx, x, y, w, pal, seed) {
    const r = H.rng(seed), pts = []; for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; pts.push([x + Math.cos(a) * w * (0.8 + r() * 0.3), y + Math.sin(a) * w * 0.22 * (0.8 + r() * 0.3) - (Math.sin(a) < 0 ? w * 0.12 : 0)]); }
    poly(ctx, pts, H.mix([235, 245, 255], pal.fog, 0.2), [255, 255, 255], H.mix([170, 200, 230], pal.w1, 0.3), seed, 0.6);
  }
  function sea(ctx, t, key) {
    const pal = PAL[key];
    ctx.drawImage(mosaicLayer(key + 'sky', pal.top, pal.bot, [pal.sunX, pal.sunY + 160], pal.glow, HZ), 0, 0);
    if (key === 'dusk') stars(ctx, 60, 480, 41, 0.7);
    facetSun(ctx, pal.sunX, pal.sunY, 84, H.mix(pal.glow, [255, 210, 150], 0.3), [255, 252, 240], 'rgba(255,236,210,0.45)');
    ctx.drawImage(peakLayer(key + 'peak', pal), 0, 0);
    // water rows: perspective bands, gentle shimmer
    const rows = [HZ + 10, 1060, 1130, 1220, 1330, 1470, 1650, 1920];
    for (let j = 0; j < rows.length - 1; j++) {
      const y0 = rows[j], y1 = rows[j + 1], depth = j / (rows.length - 2), cs = 90 + depth * 170, off = t * (20 + depth * 40);
      const iA = Math.floor(off / cs) - 1;
      for (let i = iA; i < iA + Math.ceil(W / cs) + 3; i++) {
        const r = H.rng(i * 131 + j * 977 + 5), x = i * cs - off, xo = (j % 2) * cs * 0.5, sh = 0.08 * Math.sin(t * 2 + i * 1.7 + j);
        let a = H.mix(pal.w2, pal.w1, H.clamp(0.35 + r() * 0.45 + sh)), b = H.mix(pal.w2, pal.w0, H.clamp(0.3 + r() * 0.4 - sh));
        const fog = (1 - depth) * 0.45; a = H.mix(a, pal.fog, fog); b = H.mix(b, pal.fog, fog);
        tri2(ctx, [x + xo, y0], [x + xo + cs, y0], [x + xo + cs * 0.5, y1], H.rgba(a)); tri2(ctx, [x + xo + cs * 0.5, y1], [x + xo + cs, y0], [x + xo + cs * 1.5, y1], H.rgba(b));
        if (r() < 0.25) gem(ctx, x + r() * cs, y0 + (y1 - y0) * 0.4, 5 + depth * 8, H.mix(pal.glow, [255, 255, 255], 0.5), 0);
      }
    }
    floe(ctx, 150 + Math.sin(t * 0.4) * 10, 1090, 110, pal, 5); floe(ctx, 930 - Math.sin(t * 0.3) * 8, 1160, 150, pal, 9);
  }
  function waterFront(ctx, t, key, y = WL) { // translucent faceted wave band over the otter's submerged half
    const pal = PAL[key], cs = 120, off = t * 40;
    for (let i = -2; i < W / cs + 2; i++) {
      const x = i * cs - (off % cs), h = 20 + 12 * Math.sin(t * 2 + i), r = H.rng(i * 17 + 3);
      tri2(ctx, [x, y + 30], [x + cs * 0.5, y - h], [x + cs, y + 30], H.rgba(H.mix(pal.w1, [255, 255, 255], 0.15 + r() * 0.1), 0.88));
      tri2(ctx, [x + cs * 0.5, y - h], [x + cs, y + 30], [x + cs * 1.5, y - h * 0.6], H.rgba(H.mix(pal.w0, pal.w1, 0.4), 0.85));
    }
    ctx.fillStyle = H.rgba(H.mix(pal.w0, pal.w2, 0.4), 0.82); ctx.fillRect(0, y + 28, W, 140);
    ctx.fillStyle = H.rgba(H.mix(pal.w1, [255, 255, 255], 0.5), 0.6); for (let i = 0; i < 8; i++) { const x = ((i * 157 + t * 60) % (W + 100)) - 50; ctx.fillRect(x, y + 6 + (i % 3) * 18, 60, 4); }
  }
  function header(ctx, t) {
    const k = EO(t, P(1, 'why') - 0.1, P(1, 'why') + 0.3); if (k <= 0 || t > CUT.end) return;
    ctx.save(); ctx.globalAlpha = k; lpTag(ctx, 540, 222, 'HOW DO SEA OTTERS STAY WARM?', { font: FONT(40), bg: INK, col: '#fff', k: 0.6 + 0.4 * k }); ctx.restore();
  }
  function fatBlock(ctx, x, y, k) { // skin + thick blubber cross-section card
    if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    const w = 420; ctx.fillStyle = 'rgba(20,30,70,0.35)'; ctx.fillRect(-w / 2 + 10, -110 + 10, w, 220);
    const bands = [[-110, -80, [90, 70, 80]], [-80, 60, [255, 222, 140]], [60, 110, [220, 100, 100]]];
    bands.forEach(([a, b, c], i) => { tri2(ctx, [-w / 2, a], [w / 2, a], [-w / 2, b], H.rgba(H.mix(c, [255, 255, 255], 0.2))); tri2(ctx, [w / 2, a], [w / 2, b], [-w / 2, b], H.rgba(c)); });
    ctx.restore();
  }

  // ---- A: the icy sea ----
  function sceneSea(ctx, t) {
    const z = 1 + 0.06 * EI(t, 0, CUT.fur);
    ctx.save(); ctx.translate(540, WL); ctx.scale(z, z); ctx.translate(-540, -WL);
    sea(ctx, t, 'dawn');
    otter(ctx, { x: 520, y: WL - 10, s: 1.35, t });
    waterFront(ctx, t, 'dawn');
    // cold mist drifting
    const R0 = H.rng(12); for (let i = 0; i < 10; i++) { const x = (R0() * W + t * 30) % W, y = 1180 + R0() * 120; ctx.globalAlpha = 0.25; gem(ctx, x, y, 22 + R0() * 18, [240, 250, 255], 1.57); } ctx.globalAlpha = 1;
    ctx.restore();
    const o0 = out(t, P(1, 'freeze'));
    lpTag(ctx, 540, 520, 'BLUBBER', { k: BK(t, P(0, 'blubber') - 0.15) * o0, font: FONT(120), h: 180, bg: '#fff3dc' });
    bigNumber(ctx, 540, 800, '0 kg', 220, BK(t, P(0, 'no') - 0.12) * o0, '#ffe27a');
    const o1 = out(t, P(2, 'whales'));
    lpTag(ctx, 540, 470, "YOU'D FREEZE", { k: BK(t, P(1, 'freeze') - 0.12) * o1, font: FONT(104), h: 170, bg: '#7fd8ff' });
    lpTag(ctx, 540, 650, 'FIRST', { k: BK(t, P(1, 'before') - 0.12) * o1, font: FONT(96), h: 156, bg: '#fff3dc' });
    lpTag(ctx, 540, 860, 'WHY?', { k: BK(t, P(1, 'why') - 0.12) * o1, font: FONT(160), h: 230, bg: CORAL, col: '#fff' });
    const o2 = out(t, P(3, 'the'));
    lpTag(ctx, 540, 450, 'WHALES + SEALS', { k: BK(t, P(2, 'whales') - 0.12) * o2, font: FONT(88), h: 150, bg: '#fff3dc' });
    fatBlock(ctx, 540, 720, BK(t, P(2, 'wrap') - 0.12) * o2);
    lpTag(ctx, 540, 720, 'THICK FAT', { k: BK(t, P(2, 'fat') - 0.15) * o2, font: FONT(80), h: 136, bg: '#ffe27a' });
    lpTag(ctx, 540, 500, "OTTER'S SECRET", { k: BK(t, P(3, 'secret') - 0.12), font: FONT(88), h: 150, bg: '#fff3dc' });
    lpTag(ctx, 540, 720, 'FUR', { k: BK(t, P(3, 'fur') - 0.12), font: FONT(170), h: 240, bg: '#ffe27a' });
  }
  // ---- B: fur macro ----
  function hairs(ctx, x0, y0, w, h, n, seed, col, len = 60) {
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const x = x0 + r() * w, y = y0 + 20 + r() * (h - 20), l = len * (0.6 + r() * 0.6), a = -1.2 + r.range(-0.35, 0.35), bw = 4 + r() * 3;
      const tx = x + Math.cos(a) * l, ty = y + Math.sin(a) * l, c = H.mix(col, [255, 230, 200], r() * 0.45);
      tri2(ctx, [x - bw, y], [x + bw, y], [tx, ty], H.rgba(c)); tri2(ctx, [x, y], [x + bw, y], [tx, ty], H.rgba(H.mix(c, [40, 20, 10], 0.25)));
    }
  }
  function stampFrame(ctx, x, y, s, k, n, seed) {
    if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    const hs = s / 2; ctx.fillStyle = 'rgba(10,20,40,0.4)'; ctx.fillRect(-hs + 12, -hs + 12, s, s);
    ctx.fillStyle = '#fff6ea'; ctx.fillRect(-hs - 24, -hs - 24, s + 48, s + 48);
    ctx.fillStyle = '#163a5a'; for (let i = 0; i <= 10; i++) { const u = -hs - 24 + i * (s + 48) / 10; for (const [px, py] of [[u, -hs - 24], [u, hs + 24], [-hs - 24, u], [hs + 24, u]]) { ctx.beginPath(); ctx.arc(px, py, 9, 0, Math.PI * 2); ctx.fill(); } }
    tri2(ctx, [-hs, -hs], [hs, -hs], [-hs, hs], H.rgba([206, 150, 110])); tri2(ctx, [hs, -hs], [hs, hs], [-hs, hs], H.rgba([170, 120, 86]));
    ctx.save(); ctx.beginPath(); ctx.rect(-hs, -hs, s, s); ctx.clip(); hairs(ctx, -hs - 20, -hs, s + 40, s + 40, n, seed, FUR, s * 0.12); ctx.restore();
    ctx.restore();
  }
  function humanHead(ctx, x, y, s, k) { // faceted head in profile with sparse hair dots
    if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k * s, k * s);
    const skin = [240, 190, 150];
    poly(ctx, [[-90, -40], [-60, -120], [10, -150], [80, -110], [100, -40], [118, 10], [96, 30], [100, 70], [60, 110], [0, 120], [-60, 90], [-96, 30]], skin, [255, 220, 190], [190, 130, 100], 88, 0.55);
    const hair = [[-96, -30], [-70, -128], [10, -162], [86, -118], [70, -86], [0, -110], [-60, -60], [-76, 0]];
    poly(ctx, hair, [80, 56, 44], [130, 96, 70], [50, 34, 26], 89, 0.55);
    gem(ctx, 60, -30, 8, [40, 30, 30]); ctx.restore();
  }
  function sceneFur(ctx, t) {
    ctx.drawImage(mosaicLayer('macro', [20, 50, 90], [60, 110, 150], [540, 1250], [140, 220, 255], 1920, 110), 0, 0);
    const tStamp = P(6, 'stampsized') - 0.4;
    const m = EI(t, tStamp, tStamp + 0.7); // patch shrinks into a stamp, head slides in
    const n = Math.round(H.lerp(30, 520, EI(t, P(4, 'million') - 0.3, P(4, 'inch') + 0.2)));
    const size = H.lerp(720, 380, m), cx = H.lerp(540, 300, m), cy = H.lerp(1260, 1290, m);
    stampFrame(ctx, cx, cy, size, BK(t, CUT.fur + 0.15, 0.4), n, 404);
    humanHead(ctx, 800, 1330, 1.15, BK(t, P(7, 'whole') - 0.25, 0.4));
    if (t > P(7, 'you') - 0.2) for (let i = 0; i < 18; i++) { const r = H.rng(i + 900), a = -2.6 + r() * 2.0, rr = 150 + r() * 22; gem(ctx, 800 + Math.cos(a) * rr * 0.85 - 4, 1330 - 60 + Math.sin(a) * rr * 0.9, 5 * EO(t, P(7, 'whole') - 0.1 + i * 0.01, P(7, 'whole') + 0.3), [60, 40, 30]); }
    const o4 = out(t, P(5, 'densest'));
    const cnt = Math.round(1000000 * EO(t, P(4, 'million') - 0.15, P(4, 'hairs') + 0.25));
    bigNumber(ctx, 540, 600, cnt.toLocaleString('en-US'), 150, BK(t, P(4, 'million') - 0.15) * o4, '#ffe27a');
    lpTag(ctx, 540, 760, 'HAIRS PER SQ INCH', { k: BK(t, P(4, 'square') - 0.12) * o4, font: FONT(72), h: 126, bg: '#fff3dc' });
    const o5 = out(t, P(6, 'thats'));
    lpTag(ctx, 540, 480, 'DENSEST FUR', { k: BK(t, P(5, 'densest') - 0.12) * o5, font: FONT(110), h: 170, bg: '#ffe27a' });
    lpTag(ctx, 540, 680, 'OF ANY ANIMAL', { k: BK(t, P(5, 'any') - 0.12) * o5, font: FONT(84), h: 146, bg: '#fff3dc' });
    hexBadge(ctx, 870, 680, BK(t, P(5, 'animal') - 0.05) * o5, true, 50);
    // stamp vs head
    lpTag(ctx, 300, 960, '1 SQ INCH', { k: BK(t, P(6, 'stampsized') - 0.12), font: FONT(60), bg: '#fff3dc' });
    bigNumber(ctx, 300, 1620, '1,000,000', 92, BK(t, P(6, 'hairs') - 0.12) * (t > tStamp ? 1 : 0), '#ffe27a');
    bigNumber(ctx, 800, 1620, '~100,000', 92, BK(t, P(7, 'head') - 0.12), '#fff');
    lpTag(ctx, 800, 960, 'YOUR HEAD', { k: BK(t, P(7, 'your') - 0.12), font: FONT(60), bg: '#7fd8ff' });
    lpTag(ctx, 540, 560, 'MORE HAIRS', { k: BK(t, P(6, 'more') - 0.12), font: FONT(110), h: 170, bg: CORAL, col: '#fff' });
    lpTag(ctx, 540, 740, '> WHOLE HEAD', { k: BK(t, P(7, 'whole') - 0.12), font: FONT(84), h: 146, bg: '#fff3dc' });
  }
  // ---- C: cross-section (water / fur with air / skin) ----
  const FT = 1080, SK = 1480; // fur top, skin top
  function bubbles(ctx, t, n, seed, k, y0 = FT + 30, y1 = SK - 20) {
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) { const x = 40 + r() * (W - 80), y = y0 + r() * (y1 - y0), rr = 9 + r() * 12, p = H.clamp(k * n - i); if (p <= 0) break; const w = Math.sin(t * 3 + i) * 3; ctx.save(); ctx.globalAlpha = 0.85; gem(ctx, x + w, y, rr * H.ease.back(Math.min(1, p)), [215, 245, 255], 0.3); ctx.restore(); }
  }
  function sceneSect(ctx, t) {
    ctx.drawImage(mosaicLayer('water', [20, 70, 140], [40, 120, 180], [540, 300], [160, 230, 255], FT, 120), 0, 0);
    // drifting cold particles
    const R0 = H.rng(5); for (let i = 0; i < 24; i++) { const x = R0() * W, y = (R0() * FT + t * 25) % FT; gem(ctx, x, y, 4 + R0() * 6, [220, 245, 255], 0.5); }
    // skin + warm body
    tri2(ctx, [0, SK], [W, SK], [0, SK + 80], H.rgba([250, 180, 170])); tri2(ctx, [W, SK], [W, SK + 80], [0, SK + 80], H.rgba([230, 150, 145]));
    ctx.drawImage(mosaicLayer('flesh', [210, 100, 90], [150, 50, 60], [540, 1800], [255, 170, 120], HH, 120), 0, SK + 80, W, HH - SK - 80, 0, SK + 80, W, HH - SK - 80);
    const warm = EO(t, P(9, 'skin') - 0.2, P(9, 'skin') + 0.4);
    if (warm > 0.01) { const g = ctx.createLinearGradient(0, SK, 0, HH); g.addColorStop(0, `rgba(255,200,120,${0.5 * warm})`); g.addColorStop(1, 'rgba(255,200,120,0)'); ctx.fillStyle = g; ctx.fillRect(0, SK, W, HH - SK); }
    // fur: underfur hairs from the skin up
    ctx.fillStyle = H.rgba([60, 110, 160], 0.35); ctx.fillRect(0, FT, W, SK - FT);
    const R1 = H.rng(321);
    for (let i = 0; i < 150; i++) { const x = R1() * W, l = (SK - FT) * (0.75 + R1() * 0.3), lean = R1.range(-40, 40), bw = 5 + R1() * 3, c = H.mix(FUR, [200, 160, 120], R1() * 0.5); tri2(ctx, [x - bw, SK], [x + bw, SK], [x + lean, SK - l], H.rgba(c)); tri2(ctx, [x, SK], [x + bw, SK], [x + lean, SK - l], H.rgba(H.mix(c, [30, 20, 10], 0.25))); }
    // trapped air
    bubbles(ctx, t, 40, 77, EO(t, P(8, 'air') - 0.6, P(8, 'air') + 0.4));
    // air layer bracket
    const kb = EO(t, P(8, 'layer') - 0.15, P(8, 'layer') + 0.2);
    if (kb > 0.01) { ctx.save(); ctx.globalAlpha = kb; ctx.fillStyle = '#fff'; ctx.fillRect(1010, FT, 10, SK - FT); ctx.fillRect(990, FT, 30, 10); ctx.fillRect(990, SK - 10, 30, 10); ctx.restore(); }
    // cold arrows bouncing off the fur
    for (let i = 0; i < 3; i++) {
      const x = 260 + i * 280, ta = P(9, 'cold') - 0.15 + i * 0.12, p = EI(t, ta, ta + 0.5);
      lpArrow(ctx, [x, 720], [x - 30, 880], [x, FT - 20], p * (1 - EO(t, P(9, 'touches'), P(9, 'touches') + 0.3)), [120, 200, 255], 20);
      if (t > P(9, 'never') - 0.1) hexBadge(ctx, x, FT - 50, BK(t, P(9, 'never') - 0.1 + i * 0.08) * out(t, CUT.groom - 0.2), false, 40);
    }
    const o8 = out(t, P(9, 'so'));
    lpTag(ctx, 540, 470, 'HAIRS TRAP', { k: BK(t, P(8, 'trap') - 0.12) * o8, font: FONT(100), h: 166, bg: '#fff3dc' });
    lpTag(ctx, 540, 660, 'AIR LAYER', { k: BK(t, P(8, 'air') - 0.12) * o8, font: FONT(120), h: 180, bg: '#dff4ff' });
    lpTag(ctx, 540, 470, 'COLD WATER', { k: BK(t, P(9, 'cold') - 0.12), font: FONT(100), h: 166, bg: '#7fd8ff' });
    lpTag(ctx, 540, 620, 'NEVER TOUCHES', { k: BK(t, P(9, 'never') - 0.12), font: FONT(80), h: 140, bg: '#fff3dc' });
    lpTag(ctx, 540, 1620, 'DRY SKIN', { k: BK(t, P(9, 'skin') - 0.12), font: FONT(100), h: 166, bg: '#ffe27a' });
    lpTag(ctx, 160, FT + 40, 'FUR', { k: BK(t, CUT.sect + 0.3), font: FONT(54), bg: '#fff3dc' });
    lpTag(ctx, 900, 1560, 'SKIN', { k: BK(t, CUT.sect + 0.45) * out(t, P(9, 'skin') - 0.1), font: FONT(54), bg: '#ffd0d6' });
  }
  // ---- D: grooming at sea ----
  function sceneGroom(ctx, t) {
    sea(ctx, t, 'day');
    const roll = Math.sin((t - CUT.groom) * 2.2) * 0.12 * EO(t, P(10, 'groom') - 0.2, P(10, 'groom') + 0.3);
    otter(ctx, { x: 540, y: WL - 10, s: 1.45, t, roll, paw: EO(t, P(10, 'groom') - 0.2, P(10, 'groom') + 0.2) });
    // bubbles fluffed into the coat
    const kb = EO(t, P(11, 'fluffing') - 0.15, P(11, 'coats'));
    if (kb > 0.01) { const r = H.rng(66); for (let i = 0; i < 26; i++) { const u = ((t * 0.9 + r()) % 1), x = 540 + r.range(-230, 230), y = WL - 60 - u * 160; ctx.globalAlpha = (1 - u) * kb; gem(ctx, x, y, 10 + r() * 12, [225, 248, 255], u * 2); } ctx.globalAlpha = 1; }
    waterFront(ctx, t, 'day');
    const o10 = out(t, P(11, 'fluffing'));
    lpTag(ctx, 540, 470, 'GROOMS FOR', { k: BK(t, P(10, 'groom') - 0.12) * o10, font: FONT(100), h: 166, bg: '#fff3dc' });
    timerDial(ctx, 540, 720, 130, EI(t, P(10, 'for') - 0.1, P(10, 'hours') + 0.4), BK(t, P(10, 'for') - 0.15) * o10);
    lpTag(ctx, 540, 920, 'HOURS', { k: BK(t, P(10, 'hours') - 0.12) * o10, font: FONT(110), h: 170, bg: '#ffe27a' });
    lpTag(ctx, 540, 520, 'FLUFFS IN AIR', { k: BK(t, P(11, 'fluffing') - 0.12), font: FONT(100), h: 166, bg: '#dff4ff' });
    lpTag(ctx, 540, 710, '= WARM COAT', { k: BK(t, P(11, 'coats') - 0.12), font: FONT(88), h: 150, bg: '#ffe27a' });
  }
  // ---- E: the inner engine ----
  function muscle(ctx, x, y, k, heat, t) {
    if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    for (let i = 0; i < 5; i++) { const yy = -120 + i * 60, L = 330 - Math.abs(i - 2) * 40; const pts = [[-L, yy], [-L * 0.5, yy - 30], [L * 0.5, yy - 30], [L, yy], [L * 0.5, yy + 30], [-L * 0.5, yy + 30]]; const base = H.mix([200, 70, 80], [255, 150, 80], heat * (0.5 + 0.5 * Math.sin(t * 6 + i))); poly(ctx, pts, base, H.mix(base, [255, 220, 200], 0.4), H.mix(base, [80, 20, 30], 0.4), 300 + i, 0.5); }
    ctx.restore();
  }
  function gear(ctx, x, y, r, ang, k, col) {
    if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.rotate(ang);
    const n = 10; for (let i = 0; i < n; i++) { const a0 = i / n * Math.PI * 2, a1 = (i + 0.5) / n * Math.PI * 2, a2 = (i + 1) / n * Math.PI * 2; const c = H.rgba(H.mix(col, [255, 255, 255], 0.1 + 0.3 * (0.5 + 0.5 * Math.cos(a0 + 2.2)))); tri2(ctx, [0, 0], [Math.cos(a0) * r * 1.22, Math.sin(a0) * r * 1.22], [Math.cos(a1) * r * 1.22, Math.sin(a1) * r * 1.22], c); tri2(ctx, [0, 0], [Math.cos(a1) * r, Math.sin(a1) * r], [Math.cos(a2) * r, Math.sin(a2) * r], H.rgba(H.mix(col, [30, 20, 40], 0.15))); }
    hexKnob(ctx, 0, 0, r * 0.35, [60, 50, 90], 0); ctx.restore();
  }
  function flame(ctx, x, y, s, t, seed) {
    const f = 1 + 0.08 * Math.sin(t * 12 + seed); ctx.save(); ctx.translate(x, y); ctx.scale(s, s * f);
    tri2(ctx, [-50, 0], [50, 0], [0, -150], H.rgba([255, 110, 50])); tri2(ctx, [0, 0], [50, 0], [0, -150], H.rgba([230, 70, 40]));
    tri2(ctx, [-28, 0], [28, 0], [6, -90], H.rgba([255, 200, 80])); tri2(ctx, [-12, 0], [14, 0], [0, -44], H.rgba([255, 245, 200]));
    ctx.restore();
  }
  function sceneEngine(ctx, t) {
    ctx.drawImage(mosaicLayer('engine', [50, 26, 60], [140, 60, 70], [540, 1300], [255, 150, 90], 1920, 115), 0, 0);
    const tM = P(13, 'muscles') - 0.2, t3 = P(15, 'three') - 0.25;
    const om = 1 - EI(t, t3 - 0.3, t3);
    muscle(ctx, 540, 1300, BK(t, tM, 0.4) * om, EO(t, P(13, 'leak') - 0.1, P(13, 'heat')), t);
    if (t > P(13, 'leak') - 0.15 && om > 0.01) { const r = H.rng(31); for (let i = 0; i < 22; i++) { const u = ((t * 0.7 + r()) % 1), x = 540 + r.range(-300, 300), y = 1150 - u * 260; ctx.globalAlpha = (1 - u) * om * EO(t, P(13, 'leak') - 0.15, P(13, 'leak') + 0.3); gem(ctx, x, y, 12 + r() * 10, [255, 170, 80], u * 3); } ctx.globalAlpha = 1; }
    gear(ctx, 540, 1300, 130, t * 1.5, BK(t, P(14, 'engine') - 0.15, 0.4) * om, [255, 200, 110]);
    // 3x flames vs 1
    const kf = EO(t, t3, t3 + 0.3);
    if (kf > 0.01) { for (let i = 0; i < 3; i++) flame(ctx, 220 + i * 150, 1500, 1.2 * BK(t, t3 + i * 0.12), t, i); flame(ctx, 860, 1500, 1.2 * BK(t, P(16, 'other') - 0.12), t, 9); }
    lpTag(ctx, 370, 1590, 'OTTER', { k: BK(t, P(15, 'three') - 0.1), font: FONT(60), bg: '#ffe27a' });
    lpTag(ctx, 860, 1590, 'SAME SIZE', { k: BK(t, P(16, 'size') - 0.12), font: FONT(54), bg: '#fff3dc' });
    const o12 = out(t, P(13, 'its'));
    lpTag(ctx, 540, 560, "FUR ISN'T ENOUGH", { k: BK(t, P(12, 'fur') - 0.12) * o12, font: FONT(84), h: 146, bg: '#fff3dc' });
    hexBadge(ctx, 540, 760, BK(t, P(12, 'enough') - 0.1) * o12, false, 60);
    const o13 = out(t, P(14, 'like'));
    lpTag(ctx, 540, 470, 'MUSCLES', { k: BK(t, P(13, 'muscles') - 0.12) * o13, font: FONT(120), h: 180, bg: '#ffd0d6' });
    lpTag(ctx, 540, 660, 'LEAK HEAT', { k: BK(t, P(13, 'leak') - 0.12) * o13, font: FONT(110), h: 170, bg: CORAL, col: '#fff' });
    const o14 = out(t, P(15, 'so'));
    lpTag(ctx, 540, 470, 'ENGINE IDLING', { k: BK(t, P(14, 'engine') - 0.12) * o14, font: FONT(96), h: 160, bg: '#ffe27a' });
    lpTag(ctx, 540, 650, 'ALL DAY', { k: BK(t, P(14, 'all') - 0.12) * o14, font: FONT(100), h: 166, bg: '#fff3dc' });
    lpTag(ctx, 540, 450, 'BURNS FUEL', { k: BK(t, P(15, 'burns') - 0.12), font: FONT(96), h: 160, bg: '#fff3dc' });
    bigNumber(ctx, 540, 820, '3× FASTER', 160, BK(t, P(15, 'three') - 0.12), '#ffe27a');
  }
  // ---- F: food ----
  function pie(ctx, x, y, r, frac, k) {
    if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    const n = 24; for (let i = 0; i < n; i++) { const a0 = -Math.PI / 2 + i / n * Math.PI * 2, a1 = -Math.PI / 2 + (i + 1) / n * Math.PI * 2, on = i < n * frac; const base = on ? [255, 200, 90] : [110, 150, 190]; tri2(ctx, [0, 0], [Math.cos(a0) * r, Math.sin(a0) * r], [Math.cos(a1) * r, Math.sin(a1) * r], H.rgba(H.mix(base, [255, 255, 255], (i % 2) * 0.18 + (on ? 0.05 : 0)))); }
    ctx.restore();
  }
  function sceneFood(ctx, t) {
    ctx.drawImage(mosaicLayer('kelp', [30, 90, 120], [20, 50, 80], [540, 600], [140, 230, 220], 1920, 120), 0, 0);
    // kelp strands
    for (let i = 0; i < 6; i++) { const x = 80 + i * 190, sw = Math.sin(t * 1.3 + i) * 20; for (let j = 0; j < 7; j++) { const y = HH - j * 150, nx = x + Math.sin(j * 0.8 + t + i) * 18 + sw * j / 7; tri2(ctx, [nx - 22, y], [nx + 22, y], [nx + sw * 0.3, y - 170], H.rgba(H.mix([60, 140, 80], [120, 190, 110], (j % 2) * 0.5), 0.55)); } }
    const kq = EI(t, P(17, 'quarter') - 0.2, P(17, 'quarter') + 0.4);
    pie(ctx, 540, 1220, 260, 0.25 * kq, BK(t, CUT.food + 0.2, 0.4));
    otterBadge(ctx, 540, 1220, BK(t, CUT.food + 0.3, 0.4), t);
    // food items pop out of the quarter slice
    const items = [[720, 1080, 'clam'], [800, 1200, 'urchin'], [690, 1170, 'crab'], [860, 1090, 'clam'], [760, 990, 'urchin']];
    items.forEach(([x, y, kind], i) => { const k = BK(t, P(17, 'quarter') + 0.1 + i * 0.1, 0.35); if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); if (kind === 'clam') clam(ctx, 0, 0, 40); else if (kind === 'urchin') urchin(ctx, 0, 0, 26); else crab(ctx, 0, 0, 40); ctx.restore(); });
    // day counter: food piles repeat every day
    const kd = EO(t, P(18, 'every') - 0.15, P(18, 'day') + 0.3);
    if (kd > 0.01) for (let i = 0; i < 7; i++) { const k = BK(t, P(18, 'every') - 0.1 + i * 0.07, 0.3); gem(ctx, 180 + i * 120, 1525, 26 * k, i % 2 ? [255, 200, 90] : [255, 226, 122], 0); }
    lpTag(ctx, 540, 450, 'EATS ABOUT', { k: BK(t, P(17, 'eats') - 0.12), font: FONT(88), h: 150, bg: '#fff3dc' });
    bigNumber(ctx, 540, 720, '¼', 260, BK(t, P(17, 'quarter') - 0.12), '#ffe27a');
    lpTag(ctx, 540, 830, 'OF ITS BODY WEIGHT', { k: BK(t, P(17, 'body') - 0.12), font: FONT(64), bg: '#fff3dc' });
    lpTag(ctx, 540, 1600, 'EVERY DAY', { k: BK(t, P(18, 'every') - 0.12), font: FONT(76), h: 126, bg: CORAL, col: '#fff' });
  }
  function otterBadge(ctx, x, y, k, t) { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k * 0.55, k * 0.55); otter(ctx, { x: -20, y: 40, s: 1, t }); ctx.restore(); }
  // ---- G: the question ----
  function sceneEnd(ctx, t) {
    sea(ctx, t, 'dusk');
    otter(ctx, { x: 540, y: WL - 10, s: 1.45, t, clam: BK(t, P(20, 'snacks') - 0.2, 0.4) });
    waterFront(ctx, t, 'dusk');
    lpTag(ctx, 540, 440, 'YOUR JACKET', { k: BK(t, P(19, 'jacket') - 0.12), font: FONT(88), h: 150, bg: '#fff3dc' });
    lpTag(ctx, 540, 600, 'OR 1,000,000 HAIRS', { k: BK(t, P(19, 'million') - 0.12), font: FONT(76), h: 136, bg: '#ffe27a' });
    lpTag(ctx, 540, 760, '+ ¼ YOUR WEIGHT IN SNACKS?', { k: BK(t, P(20, 'quarter') - 0.12), font: FONT(54), bg: '#7fd8ff' });
    lpTag(ctx, 540, 900, 'TELL ME ↓', { k: BK(t, P(20, 'snacks') - 0.05), font: FONT(64), bg: INK, col: '#fff' });
  }
  function scene(ctx, t) {
    if (t < CUT.fur) sceneSea(ctx, t);
    else if (t < CUT.sect) sceneFur(ctx, t);
    else if (t < CUT.groom) sceneSect(ctx, t);
    else if (t < CUT.engine) sceneGroom(ctx, t);
    else if (t < CUT.food) sceneEngine(ctx, t);
    else if (t < CUT.end) sceneFood(ctx, t);
    else sceneEnd(ctx, t);
  }
  function thumbnail(ctx, W_, H_) {
    ctx.save(); ctx.scale(W_ / W, H_ / HH);
    sea(ctx, 0.5, 'dawn'); otter(ctx, { x: 540, y: WL - 10, s: 1.45, t: 0.5 }); waterFront(ctx, 0.5, 'dawn');
    bigNumber(ctx, 540, 640, '0 BLUBBER', 170, 1, '#fff');
    lpTag(ctx, 540, 820, 'STILL WARM?', { font: FONT(110), h: 176, bg: CORAL, col: '#fff' });
    ctx.restore();
  }

  // ---------- sound (voiceover mode): glassy facets, water laps, bubbles, warm hum ----------
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g = 1, p = 0, minor) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const laps = (t0, t1, g = 1) => { const r = H.rng(Math.round(t0 * 100)); for (let t = t0; t < t1 - 0.3; t += 1.1 + r() * 0.5) k.noise(t, { dur: 0.9, color: 'brown', filter: 'lowpass', f: [[0, 300], [0.5, 900], [0.9, 250]], gain: 0.12 * g, a: 0.3, pan: r.range(-0.4, 0.4), minor: true }); };
    const bub = (t0, t1, rate, g = 1) => { const r = H.rng(Math.round(t0 * 77)); for (let t = t0; t < t1; t += 1 / rate) k.play('pop', t + r() * 0.05, { f: r.range(500, 1100), gain: 0.18 * g, pan: r.range(-0.5, 0.5), minor: true }); };
    const wipe = (t) => { k.withMinor(() => { for (let i = 0; i < 9; i++) k.play('tick', t + i * 0.05, { f: 2400 + i * 180, gain: 0.5 }); }); k.play('whoosh', t - 0.05, { dur: 0.6, gain: 0.45 }); };
    const ribbon = (t, p = 0) => k.noise(t, { dur: 0.5, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.5, 1400]], q: 1.2, gain: 0.06, a: 0.25, pan: p, minor: true });
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pad', 0, D, { bpm: 92, gain: 0.22, chords: [['E4', 'G#4', 'B4', 'D#5'], ['C#4', 'E4', 'G#4', 'B4'], ['A3', 'C#4', 'E4', 'G#4'], ['B3', 'D#4', 'F#4', 'A4']] });
    // A sea
    laps(0, CUT.fur, 1.1); glass(0.2, 'E4', 1.1, 0, 1.4);
    facet(P(0, 'no') - 0.12, 470); k.play('impact', P(0, 'no') - 0.08, { gain: 0.75 }); facet(P(0, 'blubber') - 0.15, 560, 0.8);
    k.play('whoosh', P(1, 'freeze') - 0.2, { dur: 0.5, gain: 0.4 }); facet(P(1, 'freeze') - 0.12, 600); k.tone(P(1, 'freeze'), { f: [[0, 1400], [0.6, 900]], type: 'sine', dur: 0.6, gain: 0.04, minor: true }); facet(P(1, 'before') - 0.12, 520, 0.8);
    k.play('impact', P(1, 'why') - 0.08, { gain: 0.8 }); k.play('sparkle', P(1, 'why'), { n: 4, gain: 0.35 });
    facet(P(2, 'whales') - 0.12, 470); k.play('thud', P(2, 'wrap') - 0.1, { f: 90, gain: 0.4 }); facet(P(2, 'fat') - 0.15, 560);
    facet(P(3, 'secret') - 0.12, 520); k.play('impact', P(3, 'fur') - 0.08, { gain: 0.85 }); ['E4', 'B4', 'E5'].forEach((n, i) => glass(P(3, 'fur') + i * 0.04, n, 0.9 - i * 0.2, (i - 1) * 0.3, 1.1));
    // B fur macro
    wipe(CUT.fur); k.bed('hum', CUT.fur, CUT.sect, { gain: 0.25 });
    k.play('riser', P(4, 'million') - 0.5, { dur: 0.5, gain: 0.3 }); k.withMinor(() => { for (let x = P(4, 'million') - 0.15; x < P(4, 'hairs') + 0.25; x += 0.05) k.play('count', x, { gain: 0.35 }); });
    k.play('impact', P(4, 'hairs') + 0.2, { gain: 0.8 }); glass(P(4, 'hairs') + 0.25, 'B4', 1, 0, 1); facet(P(4, 'square') - 0.12, 600);
    facet(P(5, 'densest') - 0.12, 470); facet(P(5, 'any') - 0.12, 560); k.play('success', P(5, 'animal') - 0.05, { f: 'E5', gain: 0.4 });
    k.play('swish', P(6, 'stampsized') - 0.4, { dur: 0.5, gain: 0.4 }); facet(P(6, 'more') - 0.12, 520); k.play('stamp', P(6, 'stampsized') - 0.1, { gain: 0.6 }); facet(P(6, 'hairs') - 0.12, 600, 0.7);
    facet(P(7, 'your') - 0.12, 470); k.play('pop', P(7, 'whole') - 0.25, { gain: 0.4 }); k.play('impact', P(7, 'head') - 0.08, { gain: 0.6 });
    // C cross-section
    wipe(CUT.sect); k.tone(CUT.sect + 0.1, { f: 'E2', dur: CUT.groom - CUT.sect, gain: 0.04, a: 1 });
    facet(P(8, 'trap') - 0.12, 520); bub(P(8, 'air') - 0.6, P(8, 'air') + 0.4, 14, 1); k.play('impact', P(8, 'air') - 0.08, { gain: 0.7 }); glass(P(8, 'air'), 'G#4', 1, 0, 1);
    facet(P(9, 'cold') - 0.12, 600); for (let i = 0; i < 3; i++) ribbon(P(9, 'cold') - 0.15 + i * 0.12, (i - 1) * 0.4);
    for (let i = 0; i < 3; i++) k.play('error', P(9, 'never') - 0.1 + i * 0.08, { f: 'G3', gain: 0.22, pan: (i - 1) * 0.4 }); facet(P(9, 'never') - 0.12, 470);
    k.play('success', P(9, 'skin') - 0.05, { f: 'E5', gain: 0.4 });
    // D grooming
    wipe(CUT.groom); laps(CUT.groom, CUT.engine, 1);
    k.withMinor(() => { for (let x = P(10, 'groom') - 0.2; x < P(11, 'fluffing'); x += 0.11) k.noise(x, { dur: 0.08, color: 'pink', filter: 'bandpass', f: 2600, q: 1, gain: 0.05 }); });
    facet(P(10, 'groom') - 0.12, 520); k.withMinor(() => { for (let x = P(10, 'for'); x < P(10, 'hours') + 0.3; x += 0.12) k.play('tick', x, { f: 4200, gain: 0.4 }); }); k.play('impact', P(10, 'hours') - 0.08, { gain: 0.75 });
    bub(P(11, 'fluffing') - 0.15, P(11, 'coats') + 0.4, 10, 1.1); facet(P(11, 'fluffing') - 0.12, 600); glass(P(11, 'coats'), 'B4', 0.9, 0, 1);
    // E engine
    wipe(CUT.engine); k.bed('hum', CUT.engine, CUT.food, { gain: 0.3 });
    facet(P(12, 'fur') - 0.12, 470); k.play('error', P(12, 'enough') - 0.05, { f: 'F3', gain: 0.35 });
    facet(P(13, 'muscles') - 0.12, 520); k.play('riser', P(13, 'leak') - 0.3, { dur: 0.6, gain: 0.3 }); k.play('impact', P(13, 'heat') - 0.08, { gain: 0.7 }); k.noise(P(13, 'heat'), { dur: 1.2, color: 'brown', filter: 'lowpass', f: 500, gain: 0.12, a: 0.3, minor: true });
    k.tone(P(14, 'engine') - 0.15, { f: 55, type: 'sawtooth', dur: P(15, 'so') - P(14, 'engine'), gain: 0.04, filter: 'lowpass', f2: 260, minor: true }); facet(P(14, 'engine') - 0.12, 600); facet(P(14, 'all') - 0.12, 470);
    facet(P(15, 'burns') - 0.12, 520); k.play('impact', P(15, 'three') - 0.08, { gain: 0.9 }); for (let i = 0; i < 3; i++) k.noise(P(15, 'three') - 0.25 + i * 0.12, { dur: 0.4, color: 'pink', filter: 'bandpass', f: 900, q: 0.8, gain: 0.08, a: 0.05, minor: true }); glass(P(15, 'three'), 'E5', 1, 0, 1.1);
    facet(P(16, 'size') - 0.12, 560);
    // F food
    wipe(CUT.food); laps(CUT.food, CUT.end, 0.6);
    facet(P(17, 'eats') - 0.12, 520); k.play('impact', P(17, 'quarter') - 0.08, { gain: 0.85 }); glass(P(17, 'quarter'), 'B4', 1, 0, 1);
    for (let i = 0; i < 5; i++) k.play('pop', P(17, 'quarter') + 0.1 + i * 0.1, { f: 700 + i * 90, gain: 0.35, minor: true }); facet(P(17, 'body') - 0.12, 600);
    k.play('stamp', P(18, 'every') - 0.1, { gain: 0.6 }); for (let i = 0; i < 7; i++) glass(P(18, 'every') - 0.1 + i * 0.07, ['E5', 'F#5', 'G#5', 'B5', 'C#6', 'E6', 'F#6'][i], 0.3, (i - 3) * 0.12, 0.3, true);
    // G question
    wipe(CUT.end); laps(CUT.end, D, 0.8);
    facet(P(19, 'jacket') - 0.12, 600); facet(P(19, 'million') - 0.12, 520); k.play('sparkle', P(19, 'hairs'), { n: 3, gain: 0.3 }); facet(P(20, 'quarter') - 0.12, 470);
    ['B4', 'E5'].forEach((n, i) => glass(P(20, 'snacks') + i * 0.09, n, 0.9, (i - 0.5) * 0.3, 1.4)); k.tone(P(20, 'snacks'), { f: 'E3', type: 'triangle', dur: 1.4, gain: 0.12, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
