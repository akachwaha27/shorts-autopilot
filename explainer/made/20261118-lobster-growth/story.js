// ================= Low-Poly Faceted, vertical 1080x1920: "Why do lobsters never stop growing?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W = 1080, HH = 1920;
  try { document.fonts.load('700 48px "Space Grotesk"'); } catch (e) { /* render anyway */ }
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael take, natural mode) ----------
  const BEATS = [
    { s: 0.25, e: 2.07, w: {"lobsters": 0.25, "never": 0.86, "stop": 1.23, "growing": 1.54} }, // 0 Lobsters never stop growing.
    { s: 2.4, e: 4.66, w: {"so": 2.4, "why": 2.58, "dont": 2.84, "you": 3.19, "see": 3.45, "40pound": 3.71, "ones": 4.32} }, // 1 So why don't you see 40-pound ones?
    { s: 5.21, e: 8.1, w: {"first": 5.21, "a": 5.65, "lobster": 5.73, "lives": 6.35, "inside": 6.79, "hard": 7.31, "armor": 7.66} }, // 2 First, a lobster lives inside hard armor.
    { s: 8.52, e: 10.68, w: {"to": 8.52, "get": 8.66, "bigger": 8.87, "it": 9.29, "climbs": 9.43, "right": 9.85, "out": 10.19, "of": 10.4} }, // 3 To get bigger, it climbs right out of it.
    { s: 11.03, e: 13.16, w: {"the": 11.03, "old": 11.22, "shell": 11.41, "splits": 11.72, "open": 12.1, "across": 12.35, "back": 12.91} }, // 4 The old shell splits open across the back
    { s: 13.24, e: 15.68, w: {"and": 13.24, "the": 13.53, "lobster": 13.83, "wriggles": 14.51, "free": 15.29} }, // 5 and the lobster wriggles free,
    { s: 15.75, e: 16.72, w: {"claws": 15.75, "legs": 16.07, "and": 16.33, "all": 16.52} }, // 6 claws, legs and all.
    { s: 17.15, e: 19.3, w: {"then": 17.15, "it": 17.44, "gulps": 17.58, "seawater": 17.94, "and": 18.51, "swells": 18.73, "up": 19.16} }, // 7 Then it gulps seawater and swells up
    { s: 19.4, e: 21.21, w: {"before": 19.4, "the": 19.79, "new": 19.98, "soft": 20.17, "shell": 20.43, "hardens": 20.75} }, // 8 before the new soft shell hardens.
    { s: 21.6, e: 24.04, w: {"a": 21.6, "young": 21.69, "lobster": 22.09, "molts": 22.66, "about": 23.07, "25": 23.47, "times": 23.64} }, // 9 A young lobster molts about 25 times
    { s: 24.1, e: 25.96, w: {"in": 24.1, "its": 24.31, "first": 24.62, "few": 25.14, "years": 25.45} }, // 10 in its first few years.
    { s: 26.4, e: 27.81, w: {"and": 26.4, "deep": 26.65, "in": 26.98, "its": 27.15, "cells": 27.4} }, // 11 And deep in its cells
    { s: 27.89, e: 29.6, w: {"an": 27.89, "enzyme": 28.04, "called": 28.46, "telomerase": 28.89} }, // 12 an enzyme called telomerase
    { s: 29.67, e: 31.28, w: {"keeps": 29.67, "repairing": 30.04, "their": 30.7, "dna": 31.06} }, // 13 keeps repairing their DNA,
    { s: 31.85, e: 33.4, w: {"so": 31.85, "the": 31.99, "cells": 32.21, "keep": 32.56, "dividing": 32.84} }, // 14 so the cells keep dividing.
    { s: 33.8, e: 36.2, w: {"thats": 33.8, "how": 34.2, "one": 34.44, "lobster": 34.68, "in": 35.24, "nova": 35.4, "scotia": 35.72} }, // 15 That's how one lobster in Nova Scotia
    { s: 36.6, e: 37.98, w: {"grew": 36.6, "to": 36.93, "20": 37.09, "kilograms": 37.25} }, // 16 grew to 20 kilograms.
    { s: 38.45, e: 39.98, w: {"thats": 38.45, "44": 39.04, "pounds": 39.28} }, // 17 That's 44 pounds!
    { s: 40.28, e: 41.44, w: {"but": 40.28, "heres": 40.49, "the": 40.86, "catch": 41.08} }, // 18 But here's the catch.
    { s: 41.81, e: 43.67, w: {"every": 41.81, "molt": 42.19, "costs": 42.51, "more": 42.89, "energy": 43.2} }, // 19 Every molt costs more energy.
    { s: 44.11, e: 47.22, w: {"some": 44.11, "old": 44.45, "lobsters": 44.7, "die": 45.37, "of": 45.63, "exhaustion": 45.79, "midmolt": 46.63} }, // 20 Some old lobsters die of exhaustion mid-molt.
    { s: 47.57, e: 48.91, w: {"others": 47.57, "just": 47.95, "stop": 48.21, "molting": 48.46} }, // 21 Others just stop molting,
    { s: 49.25, e: 50.66, w: {"stuck": 49.25, "in": 49.6, "a": 49.74, "wornout": 49.81, "shell": 50.31} }, // 22 stuck in a worn-out shell.
    { s: 51.12, e: 53.21, w: {"so": 51.12, "would": 51.25, "you": 51.55, "want": 51.74, "to": 51.98, "keep": 52.1, "growing": 52.35, "forever": 52.78} }, // 23 So would you want to keep growing forever?
  ];
  const P = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in ' + i); return v; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  // scenes: A hook (never stops growing, 40 lb?) -> B moult (armor, split, wriggle free, swell, harden)
  //         -> C 25 molts -> D cells (telomerase repairs DNA, cells divide) -> E record (Nova Scotia, 20 kg / 44 lb)
  //         -> F catch (energy per molt, exhaustion mid-molt, worn-out shell) -> G question
  const CUT = { armor: BEATS[2].s - 0.3, count: BEATS[9].s - 0.3, cell: BEATS[11].s - 0.3, record: BEATS[15].s - 0.3, catch: BEATS[18].s - 0.3, end: BEATS[23].s - 0.3 };
  const CUTS = [CUT.armor, CUT.count, CUT.cell, CUT.record, CUT.catch, CUT.end];
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

  // =================== LOBSTER (top-down, faceted; local units, head toward -y, centreline x=0) ===================
  const LOB = [178, 64, 48], LOBL = [240, 132, 92], LOBD = [86, 26, 30];
  const SOFT = [120, 170, 205], PALE = [240, 226, 205];
  function lobCol(o, c) {
    let v = c;
    if (o.soft > 0.001) v = H.mix(v, H.mix(SOFT, c, 0.2), o.soft * 0.9);
    if (o.pale > 0.001) v = H.mix(v, PALE, o.pale * 0.72);
    if (o.tired > 0.001) v = H.mix(v, [120, 110, 110], o.tired * 0.35);
    return v;
  }
  function claw(ctx, o, side, ang, big) {
    // side = -1 left, +1 right; arm from shoulder, claw pointing forward-ish
    const C = (c) => lobCol(o, c), t = o.t || 0, lim = o.tired || 0;
    const sw = Math.sin(t * 1.6 + side) * 0.06 * (1 - lim);
    const a0 = -Math.PI / 2 + side * (0.95 + lim * 0.5) + sw, sh = [side * 52, -90];
    const el = [sh[0] + Math.cos(a0) * 95, sh[1] + Math.sin(a0) * 95];
    const a1 = -Math.PI / 2 + side * (0.22 + lim * 0.9) + ang + sw * 0.7;
    const wr = [el[0] + Math.cos(a1) * 70, el[1] + Math.sin(a1) * 70];
    seg(ctx, sh, el, 16, 14, C(LOB), 0.05); gem(ctx, el[0], el[1], 16, C(LOBD));
    seg(ctx, el, wr, 14, 18, C(LOB));
    // claw body (propodus) + fingers
    const L = big ? 210 : 195, Wd = big ? 62 : 46, ca = a1 - side * 0.05, ux = Math.cos(ca), uy = Math.sin(ca), nx = -uy, ny = ux;
    const P2 = (f, s) => [wr[0] + ux * f * L + nx * s * Wd, wr[1] + uy * f * L + ny * s * Wd];
    poly(ctx, [P2(0, -0.5), P2(0.25, -1), P2(0.62, -0.95), P2(0.72, -0.2), P2(0.72, 0.6), P2(0.5, 1), P2(0.15, 0.8)], C(LOB), C(LOBL), C(LOBD), big ? 61 : 62, 0.5);
    const open = 0.06 + 0.06 * Math.sin(t * 2.3 + side) * (1 - lim);
    const fx = P2(0.68, -0.55), fy = P2(0.7, 0.4);
    const tip1 = [fx[0] + Math.cos(ca - open) * L * 0.55, fx[1] + Math.sin(ca - open) * L * 0.55];
    const tip2 = [fy[0] + Math.cos(ca + open) * L * 0.6, fy[1] + Math.sin(ca + open) * L * 0.6];
    tri2(ctx, P2(0.62, -0.95), P2(0.72, -0.2), tip1, H.rgba(C(LOBL))); tri2(ctx, P2(0.72, -0.2), tip1, P2(0.75, -0.5), H.rgba(C(LOBD)));
    tri2(ctx, P2(0.72, 0.1), P2(0.6, 0.95), tip2, H.rgba(C(LOB))); tri2(ctx, P2(0.72, 0.1), tip2, P2(0.78, 0.4), H.rgba(C(LOBD)));
    // knobbly tubercles
    const R = H.rng(big ? 9 : 10); for (let i = 0; i < 5; i++) { const q = P2(R.range(0.1, 0.6), R.range(-0.6, 0.6)); gem(ctx, q[0], q[1], 5 + R() * 3, C(H.mix(LOBL, [255, 255, 255], 0.2)), R() * 3); }
  }
  function lobster(ctx, o) {
    const s = o.s || 1, t = o.t || 0, C = (c) => lobCol(o, c), lim = o.tired || 0;
    ctx.save(); ctx.translate(o.x, o.y + Math.sin(t * 1.2) * 4 * (1 - lim)); ctx.rotate(o.rot || 0); ctx.scale(s, s);
    if (o.glow > 0.01) { const g = ctx.createRadialGradient(0, -40, 40, 0, -40, 520); g.addColorStop(0, `rgba(255,236,190,${0.55 * o.glow})`); g.addColorStop(1, 'rgba(255,236,190,0)'); ctx.fillStyle = g; ctx.fillRect(-560, -600, 1120, 1120); }
    // shadow
    ctx.fillStyle = 'rgba(10,20,50,0.22)'; ctx.beginPath(); ctx.ellipse(18, 40, 150, 330, 0, 0, Math.PI * 2); ctx.fill();
    // antennae (long, thin, swaying)
    for (const sd of [-1, 1]) {
      let p = [sd * 22, -150], a = -Math.PI / 2 + sd * 0.18;
      for (let i = 0; i < 6; i++) { a += sd * (0.06 + Math.sin(t * 1.4 + i * 0.7 + sd) * 0.05 * (1 - lim)) + lim * sd * 0.12; const q = [p[0] + Math.cos(a) * 62, p[1] + Math.sin(a) * 62]; seg(ctx, p, q, 5 - i * 0.6, 4.5 - i * 0.6, C(H.mix(LOB, LOBL, 0.3))); p = q; }
      seg(ctx, [sd * 12, -150], [sd * 40, -210], 3, 2, C(LOBL)); seg(ctx, [sd * 40, -210], [sd * 52, -250], 2, 1.5, C(LOBL));
    }
    // walking legs (4 per side)
    for (const sd of [-1, 1]) for (let i = 0; i < 4; i++) {
      const y = -50 + i * 32, k = Math.sin(t * 3 + i * 1.3 + sd) * 6 * (1 - lim);
      const a = [sd * 50, y], b = [sd * (112 + lim * 10), y - 24 + i * 14 + k], c = [sd * (140 + lim * 18), y + 30 + i * 12 + k];
      seg(ctx, a, b, 7, 6, C(LOB), 0.08); seg(ctx, b, c, 6, 3, C(LOB), 0.15);
    }
    // claws
    claw(ctx, o, -1, -0.12, true); claw(ctx, o, 1, 0.12, false);
    // tail fan
    const ty = 330;
    for (let i = 0; i < 5; i++) { const a = Math.PI / 2 + (i - 2) * 0.38 + Math.sin(t * 1.1) * 0.03; const L = i === 2 ? 110 : 100; poly(ctx, [[0, ty - 6], [Math.cos(a - 0.2) * L, ty + Math.sin(a - 0.2) * L], [Math.cos(a) * (L + 14), ty + Math.sin(a) * (L + 14)], [Math.cos(a + 0.2) * L, ty + Math.sin(a + 0.2) * L]], C(LOB), C(LOBL), C(LOBD), 70 + i, 0.5); }
    // abdomen segments
    for (let i = 0; i < 6; i++) {
      const y0 = 50 + i * 48, y1 = y0 + 54, w0 = 70 - i * 6, w1 = 66 - i * 6;
      poly(ctx, [[-w0, y0], [0, y0 - 8], [w0, y0], [w1 + 4, y1 - 10], [0, y1], [-w1 - 4, y1 - 10]], C(LOB), C(LOBL), C(LOBD), 80 + i, 0.5);
      tri2(ctx, [-w0 + 8, y0 + 4], [w0 - 8, y0 + 4], [0, y0 + 14], H.rgba(C(H.mix(LOBL, [255, 230, 190], 0.4)), 0.55));
    }
    // carapace
    const car = [[0, -165], [44, -140], [70, -80], [74, 0], [66, 54], [0, 64], [-66, 54], [-74, 0], [-70, -80], [-44, -140]];
    poly(ctx, car, C(LOB), C(LOBL), C(LOBD), 91, 0.55);
    // rostrum + eyes
    tri2(ctx, [-14, -158], [14, -158], [0, -200], H.rgba(C(LOBD)));
    for (const sd of [-1, 1]) { gem(ctx, sd * 26, -160, 12, [30, 20, 30]); gem(ctx, sd * 24, -166, 4, [255, 255, 255]); }
    // carapace groove + speckles
    ctx.strokeStyle = H.rgba(C(LOBD), 0.8); ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(-60, -40); ctx.lineTo(0, -20); ctx.lineTo(60, -40); ctx.stroke();
    const R = H.rng(31); for (let i = 0; i < 14; i++) gem(ctx, R.range(-55, 55), R.range(-130, 40), 4 + R() * 3, C(LOBD), R() * 3);
    // worn-out shell: dull patches + scratches
    if (o.worn > 0.01) {
      const R2 = H.rng(57);
      for (let i = 0; i < 12; i++) { const x = R2.range(-60, 60), y = R2.range(-140, 300), r = 8 + R2() * 14; ctx.fillStyle = `rgba(70,64,50,${0.75 * o.worn})`; ctx.beginPath(); for (let j = 0; j < 6; j++) { const a = j / 6 * 6.283 + R2(); ctx.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r * 0.8); } ctx.closePath(); ctx.fill(); }
      ctx.strokeStyle = `rgba(250,240,220,${0.6 * o.worn})`; ctx.lineWidth = 3;
      for (let i = 0; i < 7; i++) { const x = R2.range(-60, 50), y = R2.range(-130, 280); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 18, y + 10); ctx.lineTo(x + 30, y + 4); ctx.stroke(); }
    }
    // the moult split: a bright jagged line where carapace meets abdomen
    if (o.split > 0.01) {
      const n = 9, pts = []; for (let i = 0; i <= n; i++) { const u = i / n; pts.push([H.lerp(-72, 72, u), 58 + (i % 2 ? -8 : 6)]); }
      const m = Math.max(1, Math.round(n * o.split));
      ctx.save(); ctx.lineJoin = 'miter';
      for (const [col, lw] of [['rgba(30,10,20,0.9)', 14], ['#ffe9a8', 6]]) { ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i <= m; i++) ctx.lineTo(pts[i][0], pts[i][1]); ctx.stroke(); }
      ctx.restore();
    }
    if (o.hi > 0.01) { ctx.save(); ctx.globalAlpha = o.hi; ctx.strokeStyle = '#fff6a0'; ctx.lineWidth = 8; ctx.beginPath(); car.forEach((p, i) => i ? ctx.lineTo(p[0] * 1.12, p[1] * 1.08 - 4) : ctx.moveTo(p[0] * 1.12, p[1] * 1.08 - 4)); ctx.closePath(); ctx.stroke(); ctx.restore(); }
    ctx.restore();
  }
  function droplets(ctx, x, y, k, t, seed) { // seawater rushing in
    if (k <= 0.01) return; const r = H.rng(seed);
    for (let i = 0; i < 16; i++) { const a = r() * 6.283, d0 = 360 + r() * 140, u = ((t * 0.7 + r()) % 1); const d = d0 * (1 - u); gem(ctx, x + Math.cos(a) * d, y + Math.sin(a) * d * 1.3, (6 + r() * 7) * k, [170, 230, 255], a); }
  }
  // faceted cell: ring polygon, splits into two along x
  function cell(ctx, x, y, r, seed, k = 1) {
    if (k <= 0.01) return; const R = H.rng(seed), pts = [];
    for (let i = 0; i < 11; i++) { const a = i / 11 * 6.283; pts.push([x + Math.cos(a) * r * k * (0.92 + R() * 0.12), y + Math.sin(a) * r * k * (0.92 + R() * 0.12)]); }
    poly(ctx, pts, [120, 220, 190], [200, 255, 230], [40, 140, 140], seed, 0.6);
    const n = []; for (let i = 0; i < 7; i++) { const a = i / 7 * 6.283; n.push([x + Math.cos(a) * r * 0.32 * k, y + Math.sin(a) * r * 0.32 * k]); }
    poly(ctx, n, [150, 100, 220], [210, 170, 255], [80, 50, 150], seed + 1, 0.5);
  }
  // DNA strand with telomere caps: cap 0..1 (worn -> rebuilt)
  function dna(ctx, cx, cy, len, cap, t, k = 1) {
    if (k <= 0.01) return; ctx.save(); ctx.translate(cx, cy); ctx.scale(k, k);
    const N = 14, amp = 46;
    for (let i = 0; i < N; i++) {
      const x0 = -len / 2 + i * len / N, x1 = x0 + len / N, ph0 = i * 0.9 + t * 1.5, ph1 = (i + 1) * 0.9 + t * 1.5;
      const a0 = Math.sin(ph0) * amp, a1 = Math.sin(ph1) * amp;
      seg(ctx, [x0 + len / N / 2, a0 * 0.95], [x0 + len / N / 2, -a0 * 0.95], 5, 5, i % 2 ? [255, 210, 110] : [120, 210, 255]);
      seg(ctx, [x0, a0], [x1, a1], 12, 12, [240, 100, 120]); seg(ctx, [x0, -a0], [x1, -a1], 12, 12, [90, 130, 240]);
    }
    for (const sd of [-1, 1]) { const L = 30 + 120 * cap; const x0 = sd * len / 2; poly(ctx, [[x0, -40], [x0 + sd * L, -30], [x0 + sd * (L + 20), 0], [x0 + sd * L, 30], [x0, 40]], [255, 200, 80], [255, 240, 160], [200, 120, 40], 120 + sd, 0.5); }
    ctx.restore();
  }
  function pillar(ctx, x, base, w, h, col) { // faceted bar
    if (h <= 1) return; const c = H.hex(col), top = base - h, d = w * 0.3;
    tri2(ctx, [x - w / 2, base], [x - w / 2, top], [x, top + d * 0.5], H.rgba(H.mix(c, [255, 255, 255], 0.2))); tri2(ctx, [x - w / 2, base], [x, top + d * 0.5], [x, base + d * 0.5], H.rgba(H.mix(c, [255, 255, 255], 0.2)));
    tri2(ctx, [x + w / 2, base], [x + w / 2, top], [x, top + d * 0.5], H.rgba(H.mix(c, [40, 20, 70], 0.25))); tri2(ctx, [x + w / 2, base], [x, top + d * 0.5], [x, base + d * 0.5], H.rgba(H.mix(c, [40, 20, 70], 0.25)));
    tri2(ctx, [x - w / 2, top], [x, top - d * 0.5], [x + w / 2, top], H.rgba(H.mix(c, [255, 255, 255], 0.45))); tri2(ctx, [x - w / 2, top], [x + w / 2, top], [x, top + d * 0.5], H.rgba(H.mix(c, [255, 255, 255], 0.3)));
  }

  function header(ctx, t) {
    const k = EO(t, P(1, 'ones') + 0.1, P(1, 'ones') + 0.45); if (k <= 0 || t > CUT.end) return;
    ctx.save(); ctx.globalAlpha = k; lpTag(ctx, 540, 222, 'WHY AREN\'T THEY HUGE?', { font: FONT(44), bg: INK, col: '#fff', k: 0.6 + 0.4 * k }); ctx.restore();
  }

  // ---- A: hook. a lobster that keeps growing ----
  function sceneHook(ctx, t) {
    const z = 1 + 0.06 * EI(t, 0, CUT.armor);
    ctx.save(); ctx.translate(540, 1250); ctx.scale(z, z); ctx.translate(-540, -1250);
    reef(ctx, t, 'deep');
    const grow = 0.8 + 0.13 * EO(t, P(0, 'growing') - 0.3, P(0, 'growing') + 0.4) + 0.1 * EO(t, P(1, '40pound') - 0.2, P(1, '40pound') + 0.3);
    lobster(ctx, { x: 540, y: 1220, s: grow, t, glow: EO(t, P(0, 'never'), P(0, 'growing')) * 0.7 });
    ctx.restore();
    const o0 = out(t, P(1, 'so'));
    lpTag(ctx, 540, 520, 'NEVER STOPS', { k: BK(t, P(0, 'never') - 0.15) * o0, font: FONT(116), h: 180, bg: '#fff3dc' });
    lpTag(ctx, 540, 720, 'GROWING', { k: BK(t, P(0, 'growing') - 0.15) * o0, font: FONT(116), h: 180, bg: '#7fd8ff' });
    if (t > P(0, 'growing')) lpArrow(ctx, [860, 1100], [960, 900], [880, 760], EI(t, P(0, 'growing'), P(0, 'growing') + 0.4) * o0, [255, 226, 122], 22);
    const o1 = out(t, CUT.armor + 0.05);
    bigNumber(ctx, 540, 720, '40 LB', 240, BK(t, P(1, '40pound') - 0.15) * o1, '#ffe27a');
    lpTag(ctx, 540, 860, 'LOBSTERS?', { k: BK(t, P(1, 'ones') - 0.12) * o1, font: FONT(96), h: 156, bg: CORAL, col: '#fff' });
  }
  // ---- B: armor, split, wriggle free, swell, harden (one continuous scene) ----
  function sceneMoult(ctx, t) {
    const pan = EI(t, P(5, 'wriggles') - 0.3, P(5, 'free') + 0.3);
    const z = H.lerp(1.0, 1.0, pan);
    ctx.save(); ctx.translate(540, 1250); ctx.scale(z, z); ctx.translate(-540, -1250);
    reef(ctx, t, 'shallow');
    const s = 0.84, split = EO(t, P(4, 'splits') - 0.1, P(4, 'back') + 0.1);
    const free = EI(t, P(5, 'wriggles') - 0.1, P(6, 'all') + 0.2);
    const swell = EO(t, P(7, 'swells') - 0.15, P(7, 'up') + 0.3);
    const hard = EI(t, P(8, 'hardens') - 0.2, P(8, 'hardens') + 0.8);
    // old shell stays put (empty, pales once the lobster is out)
    const oldX = H.lerp(540, 330, pan), newX = H.lerp(540, 720, pan);
    if (free > 0.01) lobster(ctx, { x: oldX, y: 1230, s, t: 0, pale: H.clamp(free * 1.2), split: 1, rot: -0.05 * pan });
    else lobster(ctx, { x: 540, y: 1230, s, t, split, hi: EO(t, P(2, 'hard') - 0.1, P(2, 'armor')) * (1 - ph(t, P(3, 'to'), P(3, 'climbs'))) * (0.7 + 0.3 * Math.sin(t * 8)) });
    if (free > 0.01) {
      const wig = Math.sin(t * 14) * 0.06 * (1 - ph(t, P(6, 'all'), P(6, 'all') + 0.3));
      const ny = 1230 + H.lerp(-30, 40, free);
      lobster(ctx, { x: newX, y: ny, s: s * (0.94 + 0.16 * swell), t, rot: wig + 0.05 * pan, soft: 1 - hard, glow: swell * (1 - hard) * 0.6 });
      droplets(ctx, newX, ny, (swell > 0 ? 1 : 0) * (1 - ph(t, P(8, 'before'), P(8, 'soft'))) * EO(t, P(7, 'gulps') - 0.1, P(7, 'gulps') + 0.3), t, 5);
    }
    ctx.restore();
    // tags
    const oA = out(t, P(3, 'climbs'));
    lpTag(ctx, 540, 560, 'HARD ARMOR', { k: BK(t, P(2, 'hard') - 0.15) * oA, font: FONT(120), h: 186, bg: '#fff3dc' });
    hexBadge(ctx, 860, 720, BK(t, P(2, 'armor') - 0.05) * oA, false, 56);
    lpTag(ctx, 470, 720, 'CAN\'T STRETCH', { k: BK(t, P(2, 'armor') - 0.1) * oA, font: FONT(64), h: 116, bg: '#7fd8ff' });
    const oB = out(t, P(4, 'splits'));
    lpTag(ctx, 540, 600, 'CLIMB OUT', { k: BK(t, P(3, 'climbs') - 0.12) * oB, font: FONT(130), h: 200, bg: '#ffe27a' });
    const oC = out(t, P(5, 'wriggles'));
    lpTag(ctx, 540, 600, 'SPLIT!', { k: BK(t, P(4, 'splits') - 0.12) * oC, font: FONT(150), h: 220, bg: CORAL, col: '#fff' });
    const oD = out(t, P(7, 'then'));
    lpTag(ctx, 330, 560, 'OLD SHELL', { k: BK(t, P(5, 'wriggles') - 0.1) * oD, font: FONT(68), h: 120, bg: '#fff3dc' });
    lpTag(ctx, 740, 720, 'WRIGGLE FREE', { k: BK(t, P(5, 'free') - 0.15) * oD, font: FONT(68), h: 120, bg: '#7fd8ff' });
    const oE = out(t, P(8, 'before'));
    lpTag(ctx, 540, 600, '+ SEAWATER', { k: BK(t, P(7, 'seawater') - 0.15) * oE, font: FONT(116), h: 180, bg: '#7fd8ff' });
    lpTag(ctx, 540, 520, 'SOFT', { k: BK(t, P(8, 'soft') - 0.12) * (1 - ph(t, P(8, 'hardens') + 0.3, P(8, 'hardens') + 0.5)), font: FONT(140), h: 210, bg: '#bfe6ff' });
    lpTag(ctx, 540, 520, 'HARDENS', { k: BK(t, P(8, 'hardens') + 0.3), font: FONT(130), h: 200, bg: '#ffe27a' });
  }
  // ---- C: about 25 molts in the first few years ----
  function sceneCount(ctx, t) {
    reef(ctx, t, 'deep');
    const t0 = P(9, 'molts'), t1 = P(9, '25');
    const n = Math.min(25, Math.floor(1 + 24 * H.ease.inOut(ph(t, t0, t1))));
    // shed shells drifting away behind
    const R = H.rng(4);
    for (let i = 0; i < Math.min(n - 1, 12); i++) { const a = R() * 6.283, d = 300 + R() * 160; lobster(ctx, { x: 540 + Math.cos(a) * d * 0.9, y: 1250 + Math.sin(a) * d * 0.5 + 60, s: 0.22 + i * 0.02, t: 0, pale: 1, rot: R.range(-2, 2) }); }
    const s = 0.5 + 0.5 * (n - 1) / 24 + 0.02 * Math.sin(t * 2);
    const pulse = t > t0 ? 1 - ((t - t0) * 24 / Math.max(0.1, t1 - t0)) % 1 : 0;
    lobster(ctx, { x: 540, y: 1230, s, t, glow: 0.3 * pulse * (t < t1 + 0.2 ? 1 : 0) });
    bigNumber(ctx, 540, 720, String(n), 280, BK(t, t0 - 0.15), '#ffe27a');
    lpTag(ctx, 540, 840, 'MOLTS', { k: BK(t, P(9, 'molts') - 0.1), font: FONT(96), h: 156, bg: '#fff3dc' });
    lpTag(ctx, 540, 500, 'FIRST FEW YEARS', { k: BK(t, P(10, 'first') - 0.12), font: FONT(72), h: 124, bg: '#7fd8ff' });
  }
  // ---- D: inside the cells: telomerase repairs DNA ends ----
  function sceneCell(ctx, t) {
    ctx.drawImage(mosaicLayer('labcell', [40, 30, 90], [14, 12, 44], [540, 1100], [255, 160, 200], HH, 120), 0, 0);
    stars(ctx, 60, HH, 12, 0.5);
    const zin = EO(t, CUT.cell, P(11, 'cells') + 0.3);
    // cell(s): 1 -> 2 -> 4 on "dividing"
    const d1 = EI(t, P(14, 'dividing') - 0.2, P(14, 'dividing') + 0.35), d2 = EI(t, P(14, 'dividing') + 0.35, P(14, 'dividing') + 0.9);
    const dnaK = BK(t, P(12, 'enzyme') - 0.6, 0.4) * (1 - ph(t, P(14, 'so'), P(14, 'so') + 0.3));
    const cellA = 1 - 0.85 * dnaK;
    ctx.save(); ctx.globalAlpha = Math.max(0.15, cellA);
    const r0 = 230 * zin;
    if (d1 <= 0.001) cell(ctx, 540, 1180, r0, 200, 1);
    else {
      const off = 170 * d1, r1 = H.lerp(230, 165, d1);
      for (const sx of [-1, 1]) {
        if (d2 <= 0.001) cell(ctx, 540 + sx * off, 1180, r1, 200 + sx, 1);
        else for (const sy of [-1, 1]) cell(ctx, 540 + sx * H.lerp(off, 200, d2), 1180 + sy * 200 * d2, H.lerp(r1, 140, d2), 210 + sx + sy * 3, 1);
      }
    }
    ctx.restore();
    // DNA strand zoom-in with caps
    const cap = 0.15 + 0.85 * EO(t, P(13, 'repairing') - 0.1, P(13, 'dna') + 0.3);
    dna(ctx, 540, 1180, 640, cap, t, dnaK);
    if (dnaK > 0.3) {
      const fly = EI(t, P(12, 'telomerase') - 0.2, P(13, 'repairing') + 0.2), side = fly < 0.5 ? -1 : 1;
      const ex = H.lerp(180, 900, fly), ey = 1000 + Math.sin(fly * Math.PI) * -120;
      ctx.save(); ctx.globalAlpha = dnaK; hexKnob(ctx, ex, ey, 44, [255, 200, 80], 0.8 + 0.2 * Math.sin(t * 9)); gem(ctx, ex, ey, 16, [255, 255, 255], t * 3); ctx.restore();
      for (const sd of [-1, 1]) { const tt = sd < 0 ? P(13, 'repairing') : P(13, 'dna'); shock(ctx, 540 + sd * 400, 1180, t, tt, 180, '255,230,150'); }
    }
    const oA = out(t, P(12, 'enzyme'));
    lpTag(ctx, 540, 600, 'INSIDE ITS CELLS', { k: BK(t, P(11, 'deep') - 0.12) * oA, font: FONT(80), h: 136, bg: '#fff3dc' });
    const oB = out(t, P(14, 'so'));
    lpTag(ctx, 540, 520, 'TELOMERASE', { k: BK(t, P(12, 'telomerase') - 0.15) * oB, font: FONT(112), h: 176, bg: '#ffe27a' });
    lpTag(ctx, 540, 720, 'REPAIRS DNA', { k: BK(t, P(13, 'repairing') - 0.12) * oB, font: FONT(84), h: 140, bg: '#7fd8ff' });
    lpTag(ctx, 540, 560, 'CELLS KEEP', { k: BK(t, P(14, 'cells') - 0.12), font: FONT(104), h: 170, bg: '#fff3dc' });
    lpTag(ctx, 540, 740, 'DIVIDING', { k: BK(t, P(14, 'dividing') - 0.12), font: FONT(110), h: 176, bg: MINT, col: '#fff' });
  }
  // ---- E: the record. 20 kg / 44 lb, Nova Scotia ----
  function sceneRecord(ctx, t) {
    const z = 1 + 0.05 * EI(t, CUT.record, CUT.catch);
    ctx.save(); ctx.translate(540, 1250); ctx.scale(z, z); ctx.translate(-540, -1250);
    reef(ctx, t, 'shallow');
    const big = EO(t, P(16, 'grew') - 0.2, P(16, '20') + 0.2);
    // regular lobster for scale, then the giant
    const sm = 1 - ph(t, P(16, 'grew'), P(16, 'grew') + 0.4);
    if (sm > 0.01) { ctx.save(); ctx.globalAlpha = sm; lobster(ctx, { x: 540, y: 1230, s: 0.55, t }); ctx.restore(); }
    lobster(ctx, { x: 540, y: 1230, s: H.lerp(0.55, 1.12, big), t, glow: big * 0.5 });
    ctx.restore();
    const oA = out(t, P(16, 'grew') + 0.15);
    lpTag(ctx, 540, 560, 'NOVA SCOTIA', { k: BK(t, P(15, 'nova') - 0.15) * oA, font: FONT(116), h: 180, bg: '#fff3dc' });
    lpTag(ctx, 540, 740, 'CANADA · 1977', { k: BK(t, P(15, 'scotia') - 0.1) * oA, font: FONT(64), h: 116, bg: '#7fd8ff' });
    const oB = out(t, P(17, '44'));
    bigNumber(ctx, 540, 740, '20 KG', 250, BK(t, P(16, '20') - 0.15) * oB, '#ffe27a');
    bigNumber(ctx, 540, 740, '44 LB', 270, BK(t, P(17, '44') - 0.15), '#ffe27a');
    lpTag(ctx, 540, 860, 'RECORD', { k: BK(t, P(17, 'pounds') - 0.1), font: FONT(84), h: 140, bg: CORAL, col: '#fff' });
  }
  // ---- F: the catch: energy per molt, exhaustion, stuck in a worn shell ----
  function sceneCatch(ctx, t) {
    reef(ctx, t, 'deep');
    const phaseB = ph(t, P(20, 'some') - 0.3, P(20, 'some')), phaseC = ph(t, P(21, 'others') - 0.3, P(21, 'others'));
    // part 1: pillar chart of energy per molt
    const chartK = 1 - phaseB;
    if (chartK > 0.01) {
      ctx.save(); ctx.globalAlpha = chartK;
      const g0 = P(19, 'every'), hs = [130, 250, 400, 600];
      hs.forEach((h, i) => { const k = EO(t, g0 + i * 0.32, g0 + i * 0.32 + 0.4); pillar(ctx, 270 + i * 180, 1560, 120, h * k, ['#7fd8ff', '#ffe27a', '#ffb070', '#ff6a5a'][i]); if (k > 0.02) lobster(ctx, { x: 270 + i * 180, y: 1560 - h * k - 80, s: (0.14 + i * 0.04) * k, t: t + i, rot: 0 }); });
      lpArrow(ctx, [200, 1440], [520, 1380], [880, 880], EI(t, P(19, 'energy') - 0.2, P(19, 'energy') + 0.4), [255, 226, 122], 20);
      ctx.restore();
    }
    // part 2: exhausted lobster stuck half out of its shell
    if (phaseB > 0.01 && phaseC < 0.999) {
      ctx.save(); ctx.globalAlpha = phaseB * (1 - phaseC);
      const tired = EO(t, P(20, 'exhaustion') - 0.3, P(20, 'midmolt') + 0.2);
      lobster(ctx, { x: 380, y: 1260, s: 0.8, t: 0, pale: 0.8, split: 1, rot: 0.25 });
      lobster(ctx, { x: 680, y: 1150 - 60 * tired, s: 0.86, t, soft: 0.7, tired, rot: 0.25 + 0.5 * tired });
      ctx.restore();
    }
    // part 3: old lobster stops molting, worn-out shell
    if (phaseC > 0.01) {
      ctx.save(); ctx.globalAlpha = phaseC;
      lobster(ctx, { x: 540, y: 1220, s: 1.0, t: t * 0.4, worn: EO(t, P(22, 'wornout') - 0.2, P(22, 'shell') + 0.3), tired: 0.2 });
      ctx.restore();
    }
    const oA = out(t, P(19, 'every'));
    lpTag(ctx, 540, 600, 'THE CATCH', { k: BK(t, P(18, 'catch') - 0.15) * oA, font: FONT(130), h: 200, bg: CORAL, col: '#fff' });
    const oB = out(t, P(20, 'some'));
    lpTag(ctx, 540, 520, 'EVERY MOLT', { k: BK(t, P(19, 'molt') - 0.15) * oB, font: FONT(100), h: 164, bg: '#fff3dc' });
    lpTag(ctx, 540, 700, 'MORE ENERGY', { k: BK(t, P(19, 'energy') - 0.15) * oB, font: FONT(100), h: 164, bg: '#ffe27a' });
    const oC = out(t, P(21, 'others'));
    lpTag(ctx, 540, 560, 'EXHAUSTION', { k: BK(t, P(20, 'exhaustion') - 0.15) * oC, font: FONT(120), h: 186, bg: '#fff3dc' });
    lpTag(ctx, 540, 740, 'MID-MOLT', { k: BK(t, P(20, 'midmolt') - 0.12) * oC, font: FONT(84), h: 140, bg: '#7fd8ff' });
    lpTag(ctx, 540, 560, 'STOPS MOLTING', { k: BK(t, P(21, 'stop') - 0.15), font: FONT(104), h: 170, bg: '#fff3dc' });
    lpTag(ctx, 540, 740, 'WORN-OUT SHELL', { k: BK(t, P(22, 'wornout') - 0.15), font: FONT(80), h: 136, bg: '#c9c2b0' });
  }
  // ---- G: the question ----
  function sceneEnd(ctx, t) {
    reef(ctx, t, 'shallow');
    const g = EO(t, P(23, 'growing') - 0.3, P(23, 'forever') + 0.5);
    lobster(ctx, { x: 540, y: 1220, s: 0.8 + 0.25 * g, t, glow: 0.4 + 0.4 * g });
    lpTag(ctx, 540, 540, 'KEEP GROWING', { k: BK(t, P(23, 'keep') - 0.15), font: FONT(110), h: 176, bg: '#fff3dc' });
    lpTag(ctx, 540, 740, 'FOREVER?', { k: BK(t, P(23, 'forever') - 0.15), font: FONT(150), h: 220, bg: CORAL, col: '#fff' });
  }
  function scene(ctx, t) {
    if (t < CUT.armor) sceneHook(ctx, t);
    else if (t < CUT.count) sceneMoult(ctx, t);
    else if (t < CUT.cell) sceneCount(ctx, t);
    else if (t < CUT.record) sceneCell(ctx, t);
    else if (t < CUT.catch) sceneRecord(ctx, t);
    else if (t < CUT.end) sceneCatch(ctx, t);
    else sceneEnd(ctx, t);
  }
  function thumbnail(ctx, W_, H_) {
    ctx.save(); ctx.scale(W_ / W, H_ / HH);
    reef(ctx, 0.5, 'shallow'); lobster(ctx, { x: 540, y: 1230, s: 1.05, t: 0.5, glow: 0.6 });
    bigNumber(ctx, 540, 700, 'NEVER', 220, 1, '#ffe27a');
    lpTag(ctx, 540, 860, 'STOPS GROWING', { font: FONT(100), h: 164, bg: CORAL, col: '#fff' });
    ctx.restore();
  }

  // ---------- sound (voiceover mode): glassy facets, water, shell cracks, bubbles ----------
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g = 1, p = 0, minor) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const bub = (t0, t1, rate, g = 1) => { const r = H.rng(Math.round(t0 * 77)); for (let t = t0; t < t1; t += 1 / rate) k.play('pop', t + r() * 0.05, { f: r.range(500, 1200), gain: 0.18 * g, pan: r.range(-0.5, 0.5), minor: true }); };
    const wipe = (t) => { k.withMinor(() => { for (let i = 0; i < 9; i++) k.play('tick', t + i * 0.05, { f: 2400 + i * 180, gain: 0.5 }); }); k.play('whoosh', t - 0.05, { dur: 0.6, gain: 0.45 }); };
    const crack = (t, g = 1) => { const r = H.rng(Math.round(t * 40)); for (let i = 0; i < 6; i++) k.noise(t + i * 0.04 + r() * 0.02, { dur: 0.03 + r() * 0.04, filter: 'bandpass', f: 1500 + r() * 2500, q: 2, gain: 0.3 * g, a: 0.001, pan: r.range(-0.4, 0.4) }); k.play('thud', t, { f: 140, gain: 0.4 * g }); };
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pad', 0, D, { bpm: 92, gain: 0.22, chords: [['D3', 'F3', 'A3', 'C4'], ['Bb2', 'D3', 'F3', 'A3'], ['G2', 'Bb2', 'D3', 'F3'], ['A2', 'C#3', 'E3', 'G3']] });
    bub(0.2, CUT.armor, 2.5, 0.6);
    // A hook
    facet(P(0, 'never') - 0.15, 520); k.play('riser', P(0, 'never'), { dur: 0.7, gain: 0.25 }); facet(P(0, 'growing') - 0.15, 640); glass(P(0, 'growing'), 'A4', 0.9, 0, 1);
    k.play('impact', P(1, '40pound') - 0.1, { gain: 0.8 }); glass(P(1, '40pound'), 'D5', 1, 0, 1.1); facet(P(1, 'ones') - 0.12, 560);
    // B moult
    wipe(CUT.armor); bub(CUT.armor, CUT.count, 2, 0.5);
    facet(P(2, 'hard') - 0.15, 470); k.play('stamp', P(2, 'armor') - 0.05, { gain: 0.5 }); k.play('error', P(2, 'armor') + 0.1, { f: 'G3', gain: 0.3 });
    facet(P(3, 'climbs') - 0.12, 600);
    crack(P(4, 'splits') - 0.1, 1); k.play('impact', P(4, 'splits') - 0.08, { gain: 0.6 }); facet(P(4, 'splits') - 0.12, 520);
    k.withMinor(() => { for (let x = P(5, 'wriggles') - 0.1; x < P(6, 'all') + 0.2; x += 0.14) k.play('tick', x, { f: 1400 + (x * 300) % 600, gain: 0.45 }); });
    k.play('paper', P(5, 'wriggles'), { dur: 1.2, gain: 0.45 }); facet(P(5, 'free') - 0.15, 640); k.play('pop', P(5, 'free') - 0.05, { gain: 0.5 });
    k.play('whoosh', P(7, 'gulps') - 0.1, { dur: 0.8, gain: 0.35 }); bub(P(7, 'gulps') - 0.1, P(7, 'up') + 0.3, 12, 1); k.play('riser', P(7, 'swells') - 0.2, { dur: 0.6, gain: 0.25 }); facet(P(7, 'seawater') - 0.15, 560);
    facet(P(8, 'soft') - 0.12, 470); k.play('stamp', P(8, 'hardens') + 0.3, { gain: 0.6 }); glass(P(8, 'hardens') + 0.3, 'E5', 0.9, 0, 1);
    // C count
    wipe(CUT.count); bub(CUT.count, CUT.cell, 2, 0.5);
    facet(P(9, 'molts') - 0.1, 560);
    k.withMinor(() => { for (let i = 1; i < 25; i++) { const tt = P(9, 'molts') + (P(9, '25') - P(9, 'molts')) * (Math.acos(1 - 2 * i / 24) / Math.PI); k.play('tick', tt, { f: 1800 + i * 40, gain: 0.5 }); } });
    k.play('impact', P(9, '25') - 0.05, { gain: 0.75 }); glass(P(9, '25'), 'A4', 1, 0, 1); facet(P(10, 'first') - 0.12, 600);
    // D cell
    wipe(CUT.cell); k.bed('hum', CUT.cell, CUT.record, { gain: 0.22 });
    facet(P(11, 'deep') - 0.12, 470); k.play('sparkle', P(12, 'enzyme') - 0.3, { n: 4, gain: 0.3 });
    facet(P(12, 'telomerase') - 0.15, 640); glass(P(12, 'telomerase'), 'F5', 0.8, -0.3, 0.9);
    k.play('powerup', P(13, 'repairing') - 0.05, { gain: 0.3 }); glass(P(13, 'repairing'), 'A5', 0.6, -0.5, 0.7); glass(P(13, 'dna'), 'C6', 0.6, 0.5, 0.7); facet(P(13, 'repairing') - 0.12, 560);
    facet(P(14, 'cells') - 0.12, 520); k.play('pop', P(14, 'dividing') - 0.05, { gain: 0.6 }); k.play('pop', P(14, 'dividing') + 0.4, { gain: 0.5, f: 900 }); k.play('success', P(14, 'dividing'), { f: 'D5', gain: 0.35 });
    // E record
    wipe(CUT.record); bub(CUT.record, CUT.catch, 2, 0.5);
    facet(P(15, 'nova') - 0.15, 520); facet(P(15, 'scotia') - 0.1, 600, 0.7);
    k.play('riser', P(16, 'grew') - 0.3, { dur: 0.6, gain: 0.3 }); k.play('impact', P(16, '20') - 0.1, { gain: 0.9 }); glass(P(16, '20'), 'D5', 1, 0, 1.1);
    k.play('impact', P(17, '44') - 0.1, { gain: 0.8 }); glass(P(17, '44'), 'F5', 1, 0, 1); k.play('sparkle', P(17, 'pounds'), { n: 5, gain: 0.35 });
    // F catch
    wipe(CUT.catch);
    k.play('impact', P(18, 'catch') - 0.1, { gain: 0.7 }); k.play('error', P(18, 'catch'), { f: 'E3', gain: 0.3 });
    for (let i = 0; i < 4; i++) facet(P(19, 'every') + i * 0.32, 420 + i * 90, 0.9, (i - 1.5) * 0.3);
    k.play('riser', P(19, 'more') - 0.2, { dur: 0.7, gain: 0.25 });
    k.play('whoosh', P(20, 'some') - 0.3, { dur: 0.5, gain: 0.3 }); k.tone(P(20, 'exhaustion') - 0.1, { f: [[0, 330], [1.2, 160]], type: 'triangle', dur: 1.3, gain: 0.07, a: 0.05 }); facet(P(20, 'exhaustion') - 0.15, 470); facet(P(20, 'midmolt') - 0.12, 400);
    k.play('whoosh', P(21, 'others') - 0.3, { dur: 0.5, gain: 0.3 }); facet(P(21, 'stop') - 0.15, 470); k.play('thud', P(22, 'stuck'), { f: 90, gain: 0.5 }); k.play('erase', P(22, 'wornout') - 0.1, { dur: 0.6, gain: 0.3 });
    // G question
    wipe(CUT.end); bub(CUT.end, D, 2.5, 0.5);
    facet(P(23, 'keep') - 0.15, 520); k.play('riser', P(23, 'growing') - 0.2, { dur: 0.6, gain: 0.25 });
    ['D5', 'A5'].forEach((n, i) => glass(P(23, 'forever') + 0.1 + i * 0.09, n, 0.9, (i - 0.5) * 0.3, 1.4)); k.tone(P(23, 'forever') + 0.1, { f: 'D3', type: 'triangle', dur: 1.2, gain: 0.12, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
