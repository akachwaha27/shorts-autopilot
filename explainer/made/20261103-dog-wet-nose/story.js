// ================= Low-Poly Faceted, vertical 1080x1920: "Why are dogs' noses wet?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W = 1080, HH = 1920;
  try { document.fonts.load('700 48px "Space Grotesk"'); } catch (e) { /* render anyway */ }
  // ---------- BEATS: copied from phrases.json (Kokoro am_michael take) ----------
  const BEATS = [
    { s: 0.25, e: 3.25, w: {'your': 0.25, 'dogs': 0.54, 'wet': 0.82, 'nose': 1.03, 'traps': 1.32, 'smells': 1.68, 'youll': 2.1, 'never': 2.46, 'notice': 2.82} }, // Your dog's wet nose traps smells you'll never notice,
    { s: 3.55, e: 5.02, w: {'and': 3.55, 'it': 3.74, 'might': 3.87, 'even': 4.19, 'sense': 4.44, 'heat': 4.77} }, // and it might even sense heat.
    { s: 5.57, e: 7.76, w: {'that': 5.57, 'shine': 5.88, 'is': 6.27, 'a': 6.43, 'thin': 6.51, 'layer': 6.82, 'of': 7.21, 'mucus': 7.37} }, // That shine is a thin layer of mucus,
    { s: 8.06, e: 10.07, w: {'made': 8.06, 'by': 8.38, 'tiny': 8.54, 'glands': 8.86, 'in': 9.35, 'the': 9.51, 'nose': 9.75} }, // made by tiny glands in the nose.
    { s: 10.62, e: 12.77, w: {'smells': 10.62, 'are': 11.05, 'tiny': 11.27, 'floating': 11.55, 'particles': 12.13} }, // Smells are tiny floating particles,
    { s: 13.07, e: 15.18, w: {'and': 13.07, 'they': 13.27, 'stick': 13.53, 'better': 13.86, 'to': 14.26, 'damp': 14.39, 'surfaces': 14.65} }, // and they stick better to damp surfaces.
    { s: 15.73, e: 17.47, w: {'then': 15.73, 'your': 16.03, 'dog': 16.33, 'licks': 16.56, 'its': 16.94, 'nose': 17.17} }, // Then your dog licks its nose,
    { s: 17.77, e: 20.12, w: {'carrying': 17.77, 'those': 18.32, 'particles': 18.67, 'into': 19.29, 'its': 19.57, 'mouth': 19.77} }, // carrying those particles into its mouth,
    { s: 20.42, e: 22.02, w: {'up': 20.42, 'to': 20.57, 'a': 20.71, 'special': 20.78, 'scent': 21.29, 'organ': 21.66} }, // up to a special scent organ.
    { s: 22.57, e: 25.46, w: {'dogs': 22.57, 'have': 22.85, 'over': 23.13, 'a': 23.42, 'hundred': 23.49, 'million': 23.98, 'scent': 24.48, 'receptors': 24.83} }, // Dogs have over a hundred million scent receptors.
    { s: 26.01, e: 27.51, w: {'youve': 26.01, 'got': 26.34, 'about': 26.54, 'six': 26.86, 'million': 27.06} }, // You've got about six million.
    { s: 28.06, e: 29.65, w: {'but': 28.06, 'heres': 28.28, 'the': 28.64, 'strange': 28.86, 'part': 29.36} }, // But here's the strange part.
    { s: 30.2, e: 33.2, w: {'in': 30.2, 'twentytwenty': 30.35, 'scientists': 31.25, 'trained': 32.0, 'three': 32.53, 'dogs': 32.9} }, // In twenty-twenty, scientists trained three dogs
    { s: 33.5, e: 35.55, w: {'to': 33.5, 'find': 33.65, 'the': 33.96, 'warmer': 34.18, 'of': 34.64, 'two': 34.79, 'objects': 35.02} }, // to find the warmer of two objects,
    { s: 35.85, e: 37.36, w: {'from': 35.85, 'about': 36.13, 'five': 36.49, 'feet': 36.78, 'away': 37.07} }, // from about five feet away.
    { s: 37.91, e: 39.15, w: {'all': 37.91, 'three': 38.13, 'could': 38.49, 'do': 38.86, 'it': 39.0} }, // All three could do it.
    { s: 39.7, e: 43.09, w: {'that': 39.7, 'cool': 40.03, 'nose': 40.36, 'tip': 40.69, 'may': 40.94, 'work': 41.19, 'like': 41.52, 'a': 41.85, 'tiny': 41.93, 'heat': 42.26, 'sensor': 42.59} }, // That cool nose tip may work like a tiny heat sensor,
    { s: 43.39, e: 45.38, w: {'though': 43.39, 'scientists': 43.73, 'are': 44.3, 'still': 44.47, 'testing': 44.75, 'that': 45.15} }, // though scientists are still testing that.
    { s: 45.93, e: 47.36, w: {'so': 45.93, 'whats': 46.05, 'the': 46.36, 'weirdest': 46.55, 'thing': 47.05} }, // So what's the weirdest thing
    { s: 47.66, e: 49.7, w: {'your': 47.66, 'dogs': 48.0, 'wet': 48.34, 'nose': 48.6, 'ever': 48.94, 'found': 49.28} }, // your dog's wet nose ever found?
  ];
  const P = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + i + ' ' + w); return v; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;

  // ---------- helpers ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const BK = (t, a, d = 0.3) => H.ease.back(ph(t, a, a + d));
  const win = (t, a, b, fi = 0.3, fo = 0.3) => H.ease.back(ph(t, a, a + fi)) * (1 - H.ease.inOut(ph(t, b, b + fo)));
  const INK = '#2a1f4f', CORAL = '#ff7060', PEACH = '#ffb08a', MINT = '#3ccf9a';
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


  function seg(ctx, a, b, w0, w1, col, dark = 0) {
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
    const p = [[a[0] + nx * w0, a[1] + ny * w0], [b[0] + nx * w1, b[1] + ny * w1], [b[0] - nx * w1, b[1] - ny * w1], [a[0] - nx * w0, a[1] - ny * w0]];
    const lit = H.mix(col, [255, 255, 255], 0.18), shd = H.mix(col, [60, 20, 60], 0.22 + dark);
    tri2(ctx, a, p[0], p[1], H.rgba(H.mix(lit, [60, 20, 60], dark))); tri2(ctx, a, p[1], b, H.rgba(H.mix(lit, [60, 20, 60], dark)));
    tri2(ctx, a, b, p[2], H.rgba(shd)); tri2(ctx, a, p[2], p[3], H.rgba(shd));
  }
  // ---------- scenes (facet-flip wipes): dawn meadow -> nose macro -> bright meadow -> cutaway -> plateau chart -> dusk field test -> sensor close-up -> dawn meadow ----------
  const CUT = { macro: BEATS[2].s - 0.3, day: BEATS[4].s - 0.3, cutaway: BEATS[6].s - 0.3, chart: BEATS[9].s - 0.3, test: BEATS[11].s - 0.3, sensor: BEATS[16].s - 0.3, end: BEATS[18].s - 0.3 };
  const CUTS = Object.values(CUT);
  const WIPE = 0.55;
  const BG = {}; let MOS = null, LAYER = null;
  const FUR = [226, 160, 84], FUR_L = [248, 204, 134], FUR_D = [168, 104, 56], CREAM = [255, 238, 210], NOSE = [46, 36, 60], PINKT = [246, 120, 140], WET = [150, 225, 255], WARM = [255, 128, 72], COOL = [108, 176, 240], GOLD = [255, 214, 110];
  const P3 = (a) => Array.isArray(a) ? a : H.hex(a);

  // faceted polygon: fan to the centroid with midpoints; each face lit from the upper left
  function facetPoly(ctx, pts, col, seed = 1, amt = 0.2) {
    const r = H.rng(seed), n = pts.length; let cx = 0, cy = 0; pts.forEach((p) => { cx += p[0]; cy += p[1]; }); cx /= n; cy /= n;
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % n], m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], c = [cx, cy];
      for (const f of [[a, m, c], [m, b, c]]) {
        const fx = (f[0][0] + f[1][0] + f[2][0]) / 3 - cx, fy = (f[0][1] + f[1][1] + f[2][1]) / 3 - cy, L = Math.hypot(fx, fy) || 1;
        const sh = (-fx * 0.6 - fy * 0.8) / L + r.range(-0.35, 0.35);
        tri2(ctx, f[0], f[1], f[2], H.rgba(sh > 0 ? H.mix(col, [255, 255, 255], sh * amt) : H.mix(col, [50, 24, 70], -sh * amt * 1.2)));
      }
    }
  }
  const off = (pts, x, y, s = 1, fl = 1) => pts.map((p) => [x + fl * p[0] * s, y + p[1] * s]);
  const hexP = (x, y, rx, ry, n = 6, rot = 0) => { const o = []; for (let i = 0; i < n; i++) { const a = rot + i / n * Math.PI * 2; o.push([x + Math.cos(a) * rx, y + Math.sin(a) * ry]); } return o; };
  function mosaicLayer(key, top, bot, glow, glowCol, cs = 120) {
    if (BG[key]) return BG[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(key.length * 31 + key.charCodeAt(0)), nx = Math.ceil(W / cs) + 1, ny = Math.ceil(HH / cs) + 1, V = [];
    for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) row.push([i * cs + (i > 0 && i < nx ? r.range(-0.4, 0.4) * cs : 0), j * cs + (j > 0 && j < ny ? r.range(-0.4, 0.4) * cs : 0)]); V.push(row); }
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const a = V[j][i], b = V[j][i + 1], cc = V[j + 1][i], d = V[j + 1][i + 1];
      for (const f of (i + j) % 2 ? [[a, cc, b], [b, cc, d]] : [[a, cc, d], [a, d, b]]) {
        const cy = (f[0][1] + f[1][1] + f[2][1]) / 3, cx = (f[0][0] + f[1][0] + f[2][0]) / 3;
        let col = H.mix(top, bot, H.clamp(cy / HH));
        col = H.mix(col, glowCol, Math.max(0, 1 - Math.hypot(cx - glow[0], cy - glow[1]) / 720) * 0.5);
        tri2(g, f[0], f[1], f[2], H.rgba(col.map((v) => v * (0.93 + r() * 0.12))));
      }
    }
    return (BG[key] = c);
  }
  // meadow: sky mosaic + faceted sun + ridges + grass triangles + cone trees (cached per palette)
  function meadow(ctx, key, pal) {
    if (!BG['m' + key]) {
      const c = H.layer(W, HH), g = c.getContext('2d');
      g.drawImage(mosaicLayer('s' + key, pal.top, pal.bot, [pal.sx, pal.sy], pal.glow), 0, 0);
      const r = H.rng(key.length * 97 + 5);
      for (let i = 0; i < 14; i++) { const a0 = i / 14 * 6.283, a1 = (i + 1) / 14 * 6.283; tri2(g, [pal.sx, pal.sy], [pal.sx + Math.cos(a0) * 120, pal.sy + Math.sin(a0) * 120], [pal.sx + Math.cos(a1) * 120, pal.sy + Math.sin(a1) * 120], H.rgba(H.mix(pal.sun, [255, 255, 240], 0.5 + 0.5 * Math.cos(a0 - 2.3)))); }
      pal.ridges.forEach((col, k) => {
        const base = 800 + k * 170, step = 120; let px = -20, py = base + r.range(-50, 50);
        for (let x = -20; x < W + step; x += step) {
          const nx = x + step, ny = base + r.range(-70, 70), peak = [(px + nx) / 2 + r.range(-30, 30), base - r.range(30, 170 - k * 25)];
          tri2(g, [px, py], peak, [px, HH], H.rgba(H.mix(col, [255, 255, 255], 0.09))); tri2(g, peak, [nx, ny], [nx, HH], H.rgba(H.mix(col, [40, 30, 80], 0.14))); tri2(g, [px, HH], peak, [nx, HH], H.rgba(col));
          px = nx; py = ny;
        }
      });
      const gy = 1240, cs = 110, V = [];
      for (let j = 0; j <= 7; j++) { const row = []; for (let i = 0; i <= 11; i++) row.push([i * cs - 20 + (i && i < 11 ? r.range(-0.4, 0.4) * cs : 0), gy + j * cs + (j ? r.range(-0.35, 0.35) * cs : r.range(-20, 20))]); V.push(row); }
      for (let j = 0; j < 7; j++) for (let i = 0; i < 11; i++) { const a = V[j][i], b = V[j][i + 1], cc = V[j + 1][i], d = V[j + 1][i + 1]; for (const f of (i + j) % 2 ? [[a, cc, b], [b, cc, d]] : [[a, cc, d], [a, d, b]]) tri2(g, f[0], f[1], f[2], H.rgba(H.mix(pal.grass, pal.grass2, r()))); }
      for (let i = 0; i < 9; i++) { const x = r.range(20, W - 20), y = r.range(1090, 1260), s = r.range(50, 100), col = H.mix(pal.tree, [120, 180, 120], r() * 0.3); tri2(g, [x, y - s * 1.9], [x - s * 0.7, y], [x, y], H.rgba(H.mix(col, [255, 255, 255], 0.16))); tri2(g, [x, y - s * 1.9], [x, y], [x + s * 0.7, y], H.rgba(H.mix(col, [30, 30, 70], 0.2))); }
      BG['m' + key] = c;
    }
    ctx.drawImage(BG['m' + key], 0, 0);
  }
  const PAL_DAWN = { top: [34, 38, 96], bot: [255, 164, 132], sx: 800, sy: 640, glow: [255, 196, 150], sun: [255, 214, 154], ridges: [[150, 112, 170], [108, 112, 150], [66, 128, 112]], grass: [84, 158, 110], grass2: [60, 130, 98], tree: [40, 110, 90] };
  const PAL_DAY = { top: [84, 178, 232], bot: [214, 240, 228], sx: 210, sy: 480, glow: [255, 246, 200], sun: [255, 226, 130], ridges: [[126, 180, 190], [100, 176, 150], [84, 170, 112]], grass: [120, 196, 104], grass2: [92, 176, 96], tree: [48, 136, 92] };

  // =================== THE DOG (2D faceted) ===================
  // front head; nose centre sits at local (0, 76). o: { wet, glow, sniff, blink }
  function dogFront(ctx, x, y, s, o = {}, t = 0) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    facetPoly(ctx, [[-188, -128], [-300, -60], [-338, 130], [-268, 248], [-190, 150], [-168, -40]], FUR_D, 11);
    facetPoly(ctx, [[188, -128], [300, -60], [338, 130], [268, 248], [190, 150], [168, -40]], FUR_D, 12);
    facetPoly(ctx, [[0, -268], [158, -216], [238, -70], [208, 92], [116, 196], [0, 240], [-116, 196], [-208, 92], [-238, -70], [-158, -216]], FUR, 13, 0.26);
    facetPoly(ctx, [[0, -268], [46, -120], [24, -16], [-24, -16], [-46, -120]], FUR_L, 14);
    facetPoly(ctx, [[0, -24], [98, 8], [136, 100], [92, 192], [0, 222], [-92, 192], [-136, 100], [-98, 8]], CREAM, 15, 0.18);
    for (const sx of [-1, 1]) { const b = o.blink ? 0.12 : 1; facetPoly(ctx, hexP(sx * 112, -56, 33, 37 * b), [50, 34, 42], 16); if (!o.blink) gem(ctx, sx * 102, -68, 10, [255, 255, 255]); }
    tri2(ctx, [0, 140], [-5, 182], [5, 182], H.rgba(FUR_D));
    tri2(ctx, [-52, 186], [0, 180], [0, 196], H.rgba(FUR_D)); tri2(ctx, [52, 186], [0, 180], [0, 196], H.rgba(FUR_D));
    const k = 1 + (o.sniff || 0) * 0.06 * Math.sin(t * 15);
    ctx.save(); ctx.translate(0, 76); ctx.scale(k, k); noseShape(ctx, 1, o.wet ?? 0.6, t, o.glow || 0); ctx.restore();
    ctx.restore();
  }
  // close-up muzzle so the big nose reads as part of a dog: nx,ny = nose centre, sc = nose scale
  function muzzle(ctx, nx, ny, sc, top = -700) {
    const m = (p) => [nx + p[0] * sc, ny + p[1] * sc];
    facetPoly(ctx, [[-700, top], [700, top], [700, 900], [-700, 900]].map(m), FUR_D, 25, 0.1);
    facetPoly(ctx, [[-330, -190], [-140, -210], [-40, -70], [-100, 40], [-180, 240], [-330, 240]].map(m), FUR, 26, 0.24);
    facetPoly(ctx, [[330, -190], [140, -210], [40, -70], [100, 40], [180, 240], [330, 240]].map(m), FUR, 27, 0.24);
    facetPoly(ctx, [[-140, -210], [140, -210], [100, -40], [-100, -40]].map(m), FUR_L, 28, 0.2);
    facetPoly(ctx, [[-120, -66], [120, -66], [170, 60], [120, 220], [0, 250], [-120, 220], [-170, 60]].map(m), CREAM, 29, 0.14);
    tri2(ctx, m([0, 66]), m([-6, 170]), m([6, 170]), H.rgba(FUR_D));
    tri2(ctx, m([-70, 186]), m([0, 164]), m([0, 186]), H.rgba(FUR_D)); tri2(ctx, m([70, 186]), m([0, 164]), m([0, 186]), H.rgba(FUR_D));
  }
  // the nose itself, centred at 0,0, ~170 wide at sc=1
  const NOSE_PTS = [[-40, -60], [40, -60], [84, -30], [86, 14], [40, 58], [0, 70], [-40, 58], [-86, 14], [-84, -30]];
  function noseShape(ctx, sc, wet, t, glow = 0) {
    ctx.save(); ctx.scale(sc, sc);
    if (glow > 0.01) { const g = ctx.createRadialGradient(0, 0, 40, 0, 0, 260); g.addColorStop(0, `rgba(255,150,90,${0.75 * glow})`); g.addColorStop(1, 'rgba(255,150,90,0)'); ctx.fillStyle = g; ctx.fillRect(-270, -270, 540, 540); }
    facetPoly(ctx, NOSE_PTS, NOSE, 21, 0.2);
    for (const sx of [-1, 1]) facetPoly(ctx, [[sx * 14, -2], [sx * 34, -20], [sx * 62, -16], [sx * 70, 2], [sx * 50, 8], [sx * 30, 20]], [18, 12, 26], 22, 0.06);
    tri2(ctx, [0, 30], [-5, 66], [5, 66], '#1a1226');
    if (wet > 0.01) { // wet glints: small facets that catch the light in turn (pure function of t)
      const R0 = H.rng(23);
      for (let i = 0; i < 16; i++) {
        const a = R0() * 6.283, d = R0() * 0.8, x = Math.cos(a) * 80 * d, y = -6 + Math.sin(a) * 58 * d, s = R0.range(5, 13), ph0 = R0() * 6.283;
        if (Math.abs(x) > 12 && y > -26 && y < 26 && Math.abs(x) < 66) continue;
        const v = (0.45 + 0.55 * Math.sin(t * 3 + ph0)) * wet; if (v <= 0.02) continue;
        ctx.save(); ctx.globalAlpha *= H.clamp(v); gem(ctx, x, y, s, [224, 246, 255]); ctx.restore();
      }
      ctx.save(); ctx.globalAlpha *= 0.8 * wet; tri2(ctx, [-44, -50], [18, -52], [-20, -32], '#eaf8ff'); ctx.restore();
    }
    ctx.restore();
  }
  // full dog from the side, facing +x, paws on y=0
  function dogFull(ctx, x, y, s, o = {}) {
    const wk = o.walk || 0, sw = (i) => Math.sin(wk + i * 2.1) * 16 * (o.moving || 0);
    ctx.save(); ctx.translate(x, y); ctx.scale((o.flip ? -1 : 1) * s, s);
    seg(ctx, [-158, -158], [-214, -226 + Math.sin(wk * 1.6) * 10], 13, 5, FUR_D);
    for (const [px, i, d] of [[-120, 0, 0.22], [86, 1, 0.22]]) seg(ctx, [px + 12, -92], [px + sw(i), 0], 16, 11, FUR, d);
    facetPoly(ctx, [[-168, -180], [-60, -196], [88, -186], [122, -118], [78, -78], [-82, -74], [-166, -100]], FUR, 31, 0.24);
    facetPoly(ctx, [[-110, -82], [80, -82], [66, -116], [-96, -112]], CREAM, 32, 0.1);
    for (const [px, i] of [[-96, 2], [112, 3]]) { seg(ctx, [px - 6, -96], [px + sw(i), 0], 17, 12, FUR, 0); tri2(ctx, [px - 13 + sw(i), 0], [px + 24 + sw(i), 0], [px + sw(i), -18], H.rgba(CREAM)); }
    ctx.save(); ctx.translate(96, -170); ctx.rotate(o.headA || 0);
    facetPoly(ctx, [[-60, -40], [-14, -92], [48, -78], [68, -38], [150, -24], [162, 12], [146, 38], [40, 56], [-34, 56]], FUR, 33, 0.24);
    facetPoly(ctx, [[62, 10], [150, -12], [158, 16], [142, 36], [50, 50]], CREAM, 34, 0.14);
    facetPoly(ctx, hexP(160, -8, 22, 18), NOSE, 35, 0.2); tri2(ctx, [150, -20], [168, -18], [156, -8], 'rgba(235,248,255,0.9)');
    facetPoly(ctx, [[-30, -74], [-74, -40], [-82, 48], [-44, 58], [-14, -20]], FUR_D, 36);
    facetPoly(ctx, hexP(44, -36, 11, 12), [50, 34, 42], 37, 0.05);
    ctx.restore();
    ctx.restore();
  }
  // side-on cutaway of the head, facing right; local anchors returned for the story
  const CA = { nose: [392, -120], mouth: [120, 56], roof: [40, -30], organ: [40, -62] };
  function dogCutaway(ctx, x, y, s, open, t, glow) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const jaw = 62 * open;
    facetPoly(ctx, [[-270, 80], [-330, 400], [-340, 800], [130, 800], [90, 400], [10, 110]], FUR, 41, 0.22); // neck
    facetPoly(ctx, [[-50, 60], [140, 58 + jaw * 0.4], [352, 54 + jaw], [356, 92 + jaw], [150, 156 + jaw * 0.6], [-40, 150]], FUR, 42, 0.22); // lower jaw
    facetPoly(ctx, [[-80, -30], [120, -20], [346, -24], [346, 56 + jaw], [140, 58 + jaw * 0.4], [-50, 60]], [120, 36, 70], 43, 0.12); // mouth cavity
    facetPoly(ctx, [[60, 54 + jaw * 0.35], [250, 46 + jaw * 0.8], [300, 60 + jaw], [240, 84 + jaw], [60, 90 + jaw * 0.4]], PINKT, 44, 0.16);
    facetPoly(ctx, [[-250, -240], [-60, -330], [120, -290], [170, -170], [388, -170], [440, -116], [420, -60], [346, -24], [120, -20], [-80, -30], [-270, 90]], FUR, 45, 0.24); // skull + snout
    facetPoly(ctx, [[-90, -32], [120, -22], [346, -26], [390, -60], [160, -74], [-40, -84]], [255, 186, 186], 46, 0.14); // roof of the mouth
    facetPoly(ctx, [[-170, -260], [-300, -160], [-330, 90], [-240, 160], [-160, 20], [-110, -190]], FUR_D, 47); // ear
    facetPoly(ctx, hexP(90, -212, 26, 28), [50, 34, 42], 48, 0.06); gem(ctx, 82, -222, 9, [255, 255, 255]);
    ctx.save(); ctx.translate(396, -118); noseShape(ctx, 0.62, 0.7, t); ctx.restore();
    if (glow > 0.01) { // the scent organ: a glowing crystal on the roof of the mouth
      const g = ctx.createRadialGradient(CA.organ[0], CA.organ[1], 16, CA.organ[0], CA.organ[1], 170); g.addColorStop(0, `rgba(190,255,220,${0.8 * glow})`); g.addColorStop(1, 'rgba(190,255,220,0)'); ctx.fillStyle = g; ctx.fillRect(-140, -240, 360, 360);
      ctx.save(); ctx.translate(CA.organ[0], CA.organ[1]); ctx.scale(glow, glow); gem(ctx, -34, 0, 34, [90, 226, 170], 0.3); gem(ctx, 26, 0, 38, [130, 244, 190], -0.2); ctx.restore();
    }
    ctx.restore();
    return (p) => [x + p[0] * s, y + p[1] * s];
  }
  // floating scent particles: gems on seeded paths. stick: 0..1 pulls each one onto the target
  function scents(ctx, t, n, seed, box, tgt, stick, r0 = 18) {
    const R = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const x0 = R.range(box[0], box[2]), y0 = R.range(box[1], box[3]), sp = R.range(0.5, 1.2), ph0 = R() * 6.28, a = R() * 6.28, d = R() * 0.9, c = H.mix([255, 158, 210], [190, 150, 255], R()), dl = R() * 0.35;
      const u = H.ease.inOut(H.clamp((stick - dl) / 0.65));
      const fx = x0 + Math.sin(t * sp + ph0) * 40, fy = y0 + Math.cos(t * sp * 0.8 + ph0) * 30;
      const tx = tgt[0] + Math.cos(a) * tgt[2] * d, ty = tgt[1] + Math.sin(a) * tgt[3] * d;
      gem(ctx, H.lerp(fx, tx, u), H.lerp(fy, ty, u), r0 * H.lerp(1, 0.75, u), c, t * sp * (1 - u) + ph0);
    }
  }
  // a faceted 3D-looking crate seen from the front-right
  function crate(ctx, x, y, s, col, glow) {
    if (glow > 0.01) { const g = ctx.createRadialGradient(x, y - s * 0.5, s * 0.2, x, y - s * 0.5, s * 2.1); g.addColorStop(0, `rgba(255,150,80,${0.7 * glow})`); g.addColorStop(1, 'rgba(255,150,80,0)'); ctx.fillStyle = g; ctx.fillRect(x - s * 2.2, y - s * 2.6, s * 4.4, s * 4.4); }
    const c = P3(col), d = s * 0.32;
    facetPoly(ctx, [[x - s / 2, y - s], [x + s / 2, y - s], [x + s / 2, y], [x - s / 2, y]], c, 51, 0.16);
    facetPoly(ctx, [[x + s / 2, y - s], [x + s / 2 + d, y - s - d * 0.6], [x + s / 2 + d, y - d * 0.6], [x + s / 2, y]], H.mix(c, [40, 20, 70], 0.3), 52, 0.1);
    facetPoly(ctx, [[x - s / 2, y - s], [x - s / 2 + d, y - s - d * 0.6], [x + s / 2 + d, y - s - d * 0.6], [x + s / 2, y - s]], H.mix(c, [255, 255, 255], 0.3), 53, 0.08);
  }
  // heat waves: faceted arcs travelling from a to b
  function heatWaves(ctx, a, b, t, k, n = 4) {
    if (k <= 0.01) return;
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]), L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    for (let i = 0; i < n; i++) {
      const u = ((t * 0.55 + i / n) % 1), d = u * L, alpha = Math.sin(u * Math.PI) * k, w = 46 + u * 70;
      ctx.save(); ctx.globalAlpha *= H.clamp(alpha); ctx.translate(a[0] + Math.cos(ang) * d, a[1] + Math.sin(ang) * d); ctx.rotate(ang);
      const col = H.rgba(WARM), col2 = H.rgba(H.mix(WARM, [255, 240, 180], 0.5));
      for (let j = -3; j < 3; j++) { const a0 = j * 0.26, a1 = (j + 1) * 0.26; tri2(ctx, [Math.cos(a0) * w, Math.sin(a0) * w * 1.3], [Math.cos(a1) * w, Math.sin(a1) * w * 1.3], [Math.cos(a1) * (w - 22), Math.sin(a1) * (w - 22) * 1.3], j % 2 ? col : col2); tri2(ctx, [Math.cos(a0) * w, Math.sin(a0) * w * 1.3], [Math.cos(a1) * (w - 22), Math.sin(a1) * (w - 22) * 1.3], [Math.cos(a0) * (w - 22), Math.sin(a0) * (w - 22) * 1.3], j % 2 ? col2 : col); }
      ctx.restore();
    }
  }

  // ---------- scene 0: hook ----------
  function sceneHook(ctx, t) {
    meadow(ctx, 'dawn', PAL_DAWN);
    const push = 1 + EI(t, 0, 5) * 0.14;
    dogFront(ctx, 540, 1020, 1.55 * push, { wet: 1, sniff: 1, glow: BK(t, P(1, 'heat') - 0.15) * 0.9 }, t);
    const noseY = 1020 + 76 * 1.55 * push;
    scents(ctx, t, 14, 61, [80, 420, 1000, 720], [540, noseY, 110 * push, 70], EI(t, P(0, 'traps') - 0.1, P(0, 'smells') + 0.6), 24);
    lpTag(ctx, 540, 350, 'WET NOSE', { k: BK(t, P(0, 'wet') - 0.15), font: FONT(84), h: 140, bg: '#fff6f0' });
    lpTag(ctx, 540, 1570, 'SMELL TRAP', { k: BK(t, P(0, 'traps') - 0.15), font: FONT(92), h: 150, bg: CORAL, col: '#fff' });
    if (t > P(1, 'sense') - 0.2) lpTag(ctx, 830, 760, '+ HEAT?', { k: BK(t, P(1, 'heat') - 0.15), font: FONT(68), h: 116, bg: INK, col: '#ffd27a' });
  }
  // ---------- scene 1: macro: mucus and glands ----------
  function sceneMacro(ctx, t) {
    ctx.drawImage(mosaicLayer('macro', [30, 42, 96], [64, 40, 110], [540, 760], [84, 150, 190]), 0, 0);
    const a = CUT.macro, z = 1 + EO(t, a, a + 1.2) * 0.25, nx = 540, ny = 740, sc = 3.0 * z;
    muzzle(ctx, nx, ny, sc); ctx.save(); ctx.translate(nx, ny); noseShape(ctx, sc, 0.2 + EO(t, P(2, 'shine') - 0.15, P(2, 'shine') + 0.4) * 0.8, t); ctx.restore();
    // the thin wet layer: a ribbon of pale facets hugging the top of the nose
    const u = EI(t, P(2, 'thin') - 0.15, P(2, 'mucus') + 0.3);
    if (u > 0) {
      const ring = NOSE_PTS.map((p) => [nx + p[0] * sc * 1.06, ny + p[1] * sc * 1.06]), m = ring.length, seg_n = Math.floor(u * m * 1.001);
      for (let i = 0; i < seg_n; i++) { const a0 = ring[i], b0 = ring[(i + 1) % m], c0 = [nx + (a0[0] - nx) * 0.955, ny + (a0[1] - ny) * 0.955], d0 = [nx + (b0[0] - nx) * 0.955, ny + (b0[1] - ny) * 0.955]; const v = 0.5 + 0.5 * Math.sin(t * 3 + i); tri2(ctx, a0, b0, c0, H.rgba(H.mix(WET, [255, 255, 255], v * 0.6), 0.92)); tri2(ctx, b0, d0, c0, H.rgba(H.mix(WET, [255, 255, 255], (1 - v) * 0.5), 0.92)); }
    }
    lpTag(ctx, 540, 360, 'MUCUS', { k: BK(t, P(2, 'mucus') - 0.15), font: FONT(112), h: 180, bg: '#dff5ff' });
    if (t > P(2, 'mucus') - 0.2) { const k = EI(t, P(2, 'mucus') - 0.1, P(2, 'mucus') + 0.3); if (k > 0) lpArrow(ctx, [540, 450], [600, 470], [600, ny - 62 * sc - 6], k, WET, 22); }
    // glands: pods along the base, pumping droplets up into the nose
    const g0 = P(3, 'glands') - 0.15;
    if (t > g0 - 0.3) {
      for (let i = 0; i < 5; i++) {
        const dl = i * 0.08, k = BK(t, g0 + dl), x = 180 + i * 180, y = 1400 - Math.abs(i - 2) * 26, pulse = 1 + 0.08 * Math.sin(t * 5 + i * 1.3);
        if (k <= 0.01) continue;
        ctx.save(); ctx.translate(x, y); ctx.scale(k * pulse, k * pulse); facetPoly(ctx, hexP(0, 0, 64, 54, 7, 0.4), [255, 150, 170], 60 + i, 0.3); ctx.restore();
        for (let d = 0; d < 3; d++) { const u2 = ((t * 0.7 + i * 0.23 + d / 3) % 1), dy = u2 * 240; ctx.save(); ctx.globalAlpha *= Math.sin(u2 * Math.PI) * k; gem(ctx, x + Math.sin(u2 * 5 + i) * 10, y - 60 - dy, 17, WET); ctx.restore(); }
      }
      lpTag(ctx, 540, 1540, 'TINY GLANDS', { k: BK(t, g0), font: FONT(84), h: 144, bg: '#ffb7c5' });
    }
  }
  // ---------- scene 2: particles stick ----------
  function sceneDay(ctx, t) {
    meadow(ctx, 'day', PAL_DAY);
    const hy = 960, hs = 1.8, nx = 540, ny = hy + 76 * hs, sc = hs;
    const st = EI(t, P(5, 'stick') - 0.1, P(5, 'damp') + 0.3);
    dogFront(ctx, 540, hy, hs, { wet: 0.25 + st * 0.75, sniff: 1 - st }, t);
    scents(ctx, t, 26, 62, [90, 470, 990, 1480], [nx, ny - 4, 72 * sc, 50 * sc], st, 26);
    // flower patch: where the smells come from
    const R = H.rng(71);
    for (let i = 0; i < 9; i++) { const x = R.range(60, 1020), y = R.range(1500, 1650), c = R.pick([[255, 120, 170], [255, 214, 110], [190, 150, 255]]); seg(ctx, [x, y], [x, y - 80], 7, 5, [64, 140, 90]); for (let k = 0; k < 5; k++) { const a = k / 5 * 6.283 + t * 0.2; gem(ctx, x + Math.cos(a) * 24, y - 88 + Math.sin(a) * 24, 18, c, a); } gem(ctx, x, y - 88, 12, [255, 244, 190]); }
    lpTag(ctx, 540, 390, 'SMELLS = PARTICLES', { k: BK(t, P(4, 'particles') - 0.2), font: FONT(72), h: 124, bg: '#fff6f0' });
    if (t > P(5, 'stick') - 0.2) lpTag(ctx, 540, 1540, 'DAMP = STICKY', { k: BK(t, P(5, 'stick') - 0.15), font: FONT(92), h: 150, bg: CORAL, col: '#fff' });
  }
  // ---------- scene 3: the lick, the trip to the scent organ ----------
  function sceneCutaway(ctx, t) {
    ctx.drawImage(mosaicLayer('cut', [26, 26, 74], [92, 48, 122], [640, 800], [180, 90, 150]), 0, 0);
    const X = 430, Y = 900, S = 1.35, open = 0.35 + EI(t, P(6, 'dog') - 0.1, P(6, 'licks')) * 0.65;
    const map = dogCutaway(ctx, X, Y, S, open, t, BK(t, P(8, 'scent') - 0.2, 0.4));
    const lk0 = P(6, 'licks') - 0.1, lk1 = P(7, 'carrying') + 0.1, ret = P(7, 'particles'), ext = EI(t, lk0, lk0 + 0.4) * (1 - EI(t, lk1, ret));
    const base = map([120, 80]), tip = map([H.lerp(250, 420, ext), H.lerp(90, -70 - 60 * Math.sin(t * 7) * 0.2, ext)]), ctrl = map([H.lerp(190, 520, ext), H.lerp(90, 70, ext)]);
    const pts = []; for (let i = 0; i <= 10; i++) { const u = i / 10; pts.push([(1 - u) * (1 - u) * base[0] + 2 * u * (1 - u) * ctrl[0] + u * u * tip[0], (1 - u) * (1 - u) * base[1] + 2 * u * (1 - u) * ctrl[1] + u * u * tip[1]]); }
    if (ext > 0.02) for (let i = 0; i < 10; i++) seg(ctx, pts[i], pts[i + 1], 38 - i * 1.4, 36 - i * 1.4, PINKT, 0);
    // scent gems: on the nose, swept onto the tongue, into the mouth, up to the organ
    const R = H.rng(83), org = map(CA.organ), nosePt = map(CA.nose), up = EI(t, P(8, 'up') - 0.1, P(8, 'organ'));
    for (let i = 0; i < 10; i++) {
      const dx = R.range(-60, 60), dy = R.range(-40, 40), dl = R() * 0.12, c = H.mix([255, 158, 210], [190, 150, 255], R());
      let x = nosePt[0] + dx, y = nosePt[1] + dy;
      const a1 = EI(t, lk0 + 0.25 + dl, lk1 + dl); x = H.lerp(x, tip[0] + dx * 0.4, a1); y = H.lerp(y, tip[1] + dy * 0.4, a1);
      const mouth = map(CA.mouth), a2 = EI(t, lk1 + dl, ret + 0.25 + dl); x = H.lerp(x, mouth[0] + dx * 0.5, a2); y = H.lerp(y, mouth[1] + dy * 0.3, a2);
      const a3 = H.clamp(up * 1.15 - dl); x = H.lerp(x, org[0] + dx * 0.3, a3); y = H.lerp(y, org[1] + dy * 0.3, a3);
      gem(ctx, x, y, 18 * (1 - a3 * 0.6), c, i);
    }
    if (t > P(8, 'up') - 0.2) lpArrow(ctx, [org[0] + 150, org[1] + 170], [org[0] + 140, org[1] + 60], [org[0] + 24, org[1] + 34], EI(t, P(8, 'up') - 0.1, P(8, 'special')), [190, 255, 220], 20);
    lpTag(ctx, 540, 380, 'THE LICK', { k: win(t, P(6, 'licks') - 0.15, P(8, 'up') - 0.2), font: FONT(92), h: 150, bg: '#ffb7c5' });
    lpTag(ctx, 540, 1540, 'SCENT ORGAN', { k: BK(t, P(8, 'scent') - 0.15), font: FONT(96), h: 156, bg: '#bffbdc' });
    if (t > P(7, 'into') - 0.2) lpTag(ctx, 800, 1320, 'MOUTH', { k: win(t, P(7, 'into') - 0.15, P(8, 'scent') - 0.2), font: FONT(60), h: 104, bg: '#fff6f0' });
  }
  // ---------- scene 4: receptors chart ----------
  function pillar(ctx, x, base, w, h, col, seed) {
    if (h < 1) return; const d = w * 0.3, c = P3(col);
    facetPoly(ctx, [[x - w / 2, base - h], [x + w / 2, base - h], [x + w / 2, base], [x - w / 2, base]], c, seed, 0.12);
    facetPoly(ctx, [[x + w / 2, base - h], [x + w / 2 + d, base - h - d * 0.5], [x + w / 2 + d, base - d * 0.5], [x + w / 2, base]], H.mix(c, [40, 20, 70], 0.3), seed + 1, 0.08);
    facetPoly(ctx, [[x - w / 2, base - h], [x - w / 2 + d, base - h - d * 0.5], [x + w / 2 + d, base - h - d * 0.5], [x + w / 2, base - h]], H.mix(c, [255, 255, 255], 0.35), seed + 2, 0.06);
  }
  function sceneChart(ctx, t) {
    meadow(ctx, 'plateau', { top: [40, 30, 92], bot: [204, 116, 160], sx: 900, sy: 760, glow: [255, 170, 150], sun: [255, 196, 140], ridges: [[110, 84, 150], [88, 88, 138], [74, 104, 118]], grass: [96, 140, 124], grass2: [76, 120, 112], tree: [46, 96, 96] });
    const base = 1530, full = 700, gd = EI(t, P(9, 'over') - 0.1, P(9, 'million') + 0.5), gh = EI(t, P(10, 'six') - 0.15, P(10, 'million') + 0.1);
    const hd = full * gd, hh = full * 0.06 * gh;
    pillar(ctx, 350, base, 280, hd, CORAL, 70);
    pillar(ctx, 780, base, 280, hh, [108, 176, 240], 74);
    dogFront(ctx, 350, base - hd - 130, 0.46, { wet: 1, blink: (t % 3.1) < 0.12 }, t);
    // a simple faceted person on the small pillar
    const py = base - hh - 170, pk = BK(t, P(10, 'youve') - 0.2);
    if (pk > 0.01) { ctx.save(); ctx.translate(780, py); ctx.scale(pk, pk); facetPoly(ctx, [[-70, 170], [-54, 60], [54, 60], [70, 170]], [90, 130, 200], 78, 0.2); facetPoly(ctx, hexP(0, 0, 62, 66, 8), [240, 196, 160], 79, 0.2); gem(ctx, -22, -6, 9, [50, 34, 42]); gem(ctx, 22, -6, 9, [50, 34, 42]); ctx.restore(); }
    const n = Math.round(100 * EO(t, P(9, 'over') - 0.05, P(9, 'million') + 0.1));
    const kN = BK(t, P(9, 'hundred') - 0.2);
    if (kN > 0.01) { bigNumber(ctx, 540, 380, n + ' MILLION+', 124, kN, '#fff'); }
    lpTag(ctx, 350, base - 60, 'DOG', { k: BK(t, P(9, 'dogs') - 0.15), font: FONT(64), h: 110, bg: '#fff6f0' });
    if (gh > 0.01) { bigNumber(ctx, 780, 1120, '6 MILLION', 88, BK(t, P(10, 'six') - 0.15), '#cfe6ff'); lpTag(ctx, 780, base + 70, 'YOU', { k: BK(t, P(10, 'youve') - 0.15), font: FONT(64), h: 110, bg: '#fff6f0' }); }
    if (t > P(9, 'scent') - 0.2) lpTag(ctx, 540, 480, 'SCENT RECEPTORS', { k: BK(t, P(9, 'scent') - 0.15), font: FONT(62), h: 106, bg: INK, col: '#fff' });
  }
  // ---------- scene 5: the 2020 test ----------
  function sceneTest(ctx, t) {
    meadow(ctx, 'dusk', { top: [20, 22, 62], bot: [116, 78, 150], sx: 130, sy: 730, glow: [150, 110, 200], sun: [236, 232, 250], ridges: [[56, 52, 110], [48, 60, 104], [44, 76, 96]], grass: [62, 104, 104], grass2: [50, 88, 96], tree: [30, 70, 80] });
    const T12 = P(12, 'in'), kYr = BK(t, T12 + 0.05, 0.35), s13 = BEATS[13].s, s14 = BEATS[14].s, s15 = BEATS[15].s;
    lpTag(ctx, 540, 360, 'THE STRANGE PART', { k: win(t, P(11, 'strange') - 0.15, T12 - 0.15), font: FONT(76), h: 128, bg: CORAL, col: '#fff' });
    if (t > T12 - 0.1 && t < s13 - 0.1) bigNumber(ctx, 540, 500, '2020', 200, kYr * (1 - ph(t, s13 - 0.3, s13 - 0.1)), '#ffd27a');
    if (t < P(11, 'but') || t < T12 - 0.1) dogFront(ctx, 540, 1060, 1.2, { wet: 1, blink: (t % 2.3) < 0.12 }, t);
    // 3 dogs in a row, then one goes solo for the test
    const m = EI(t, s13 - 0.25, s13 + 0.15);
    if (t >= T12 - 0.1 && t < s15 - 0.15) {
      const kD = BK(t, P(12, 'three') - 0.2), dogs = [[250, 1080, 0.8], [430, 1390, 0.92], [190, 1600, 1.04]];
      if (kD > 0.01) dogs.forEach((d, i) => { if (i === 1) return; ctx.save(); ctx.globalAlpha = 1 - m; dogFull(ctx, d[0], d[1], d[2] * kD, {}); ctx.restore(); });
      if (kD > 0.01 && t < s13) lpTag(ctx, 720, 1140, '3 DOGS', { k: BK(t, P(12, 'three') - 0.15), font: FONT(84), h: 144, bg: '#fff6f0' });
    }
    const go = EI(t, BEATS[14].e - 0.1, s15 + 0.7), wk = t * 13;
    if (t >= T12 - 0.1) {
      const kD = BK(t, P(12, 'three') - 0.2);
      if (kD > 0.01) {
        const dx = H.lerp(H.lerp(430, 200, m), 450, go), dy = H.lerp(H.lerp(1390, 1330, m), 1125, go), ds = H.lerp(0.92, 1.15, m);
        const cx0 = 860, warmB = 1120, coolB = 1560;
        const kC = BK(t, P(13, 'two') - 0.3);
        if (t > s13 - 0.3) { crate(ctx, cx0, warmB, 190 * kC, WARM, kC * (0.75 + 0.2 * Math.sin(t * 4))); crate(ctx, cx0, coolB, 190 * kC, COOL, 0); heatWaves(ctx, [cx0, warmB - 120], [cx0 - 300, warmB - 120], t, BK(t, P(13, 'warmer') - 0.15), 3); }
        if (t > P(13, 'warmer') - 0.2) lpTag(ctx, cx0 - 20, warmB - 270, 'WARMER', { k: BK(t, P(13, 'warmer') - 0.15), font: FONT(62), h: 106, bg: CORAL, col: '#fff' });
        if (t > P(13, 'objects') - 0.25) lpTag(ctx, cx0 - 20, coolB + 74, 'COOL', { k: BK(t, P(13, 'objects') - 0.2), font: FONT(62), h: 106, bg: '#cfe6ff' });
        ctx.save(); dogFull(ctx, dx, dy, ds * kD, { walk: wk, moving: go > 0 && go < 1 ? 1 : 0 }); ctx.restore();
        if (t > s14 - 0.1 && t < s15) {
          const k = EI(t, P(14, 'five') - 0.2, P(14, 'feet')), y = 1490, x0 = 320, x1 = 730;
          ctx.save(); ctx.globalAlpha = 1 - ph(t, s15 - 0.25, s15); lpArrow(ctx, [x0, y], [(x0 + x1) / 2, y - 30], [x0 + (x1 - x0), y], k, [255, 246, 240], 18); lpTag(ctx, 500, 400, '5 FEET AWAY', { k: BK(t, P(14, 'five') - 0.15), font: FONT(96), h: 156, bg: '#fff6f0' }); ctx.restore();
        }
      }
    }
    if (t > s15 - 0.1) {
      lpTag(ctx, 540, 390, 'ALL 3 FOUND IT', { k: BK(t, P(15, 'all') - 0.15), font: FONT(88), h: 148, bg: '#bffbdc', col: INK });
      [0, 1, 2].forEach((i) => hexBadge(ctx, 320 + i * 220, 610, BK(t, P(15, 'all') + i * 0.28), true, 76));
    }
  }
  // ---------- scene 6: sensor ----------
  function sceneSensor(ctx, t) {
    ctx.drawImage(mosaicLayer('sens', [18, 34, 84], [40, 60, 130], [540, 1120], [70, 150, 220]), 0, 0);
    const k = EO(t, CUT.sensor, CUT.sensor + 0.8), sc = 1.95 + k * 0.15, nx = 540, ny = 1140;
    crate(ctx, 540, 660, 170, WARM, 0.8);
    muzzle(ctx, nx, ny, sc, -200); ctx.save(); ctx.translate(nx, ny); noseShape(ctx, sc, 1, t, BK(t, P(16, 'sensor') - 0.15) * (0.6 + 0.25 * Math.sin(t * 5))); ctx.restore();
    heatWaves(ctx, [540, 680], [540, ny - 40 * sc], t, BK(t, P(16, 'heat') - 0.5), 5);
    lpTag(ctx, 540, 1540, 'COOL NOSE TIP', { k: win(t, P(16, 'cool') - 0.15, BEATS[17].s - 0.15), font: FONT(80), h: 136, bg: '#cfe6ff' });
    lpTag(ctx, 540, 330, 'HEAT SENSOR?', { k: BK(t, P(16, 'heat') - 0.15), font: FONT(96), h: 156, bg: CORAL, col: '#fff' });
    if (t > BEATS[17].s - 0.2) lpTag(ctx, 540, 1540, 'STILL BEING TESTED', { k: BK(t, P(17, 'still') - 0.15), font: FONT(74), h: 128, bg: INK, col: '#ffd27a' });
  }
  // ---------- scene 7: end, loops back to the hook's meadow ----------
  function sceneEnd(ctx, t) {
    meadow(ctx, 'dawn', PAL_DAWN);
    // mound + mystery gem unearthed
    const kq = BK(t, P(18, 'weirdest') - 0.15, 0.4), bob = Math.sin(t * 2.4) * 10;
    facetPoly(ctx, [[640, 1490], [730, 1370], [880, 1330], [1000, 1400], [1060, 1490]], [130, 92, 76], 91, 0.24);
    if (kq > 0.01) { ctx.save(); ctx.translate(850, 1210 + bob); ctx.scale(kq, kq); const g = ctx.createRadialGradient(0, 0, 30, 0, 0, 230); g.addColorStop(0, 'rgba(255,226,150,0.7)'); g.addColorStop(1, 'rgba(255,226,150,0)'); ctx.fillStyle = g; ctx.fillRect(-240, -240, 480, 480); gem(ctx, 0, 0, 120, GOLD, 0); ctx.font = FONT(120); ctx.fillStyle = INK; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('?', 0, 6); ctx.restore(); }
    dogFull(ctx, 330, 1490, 1.3, { headA: 0.18 + 0.05 * Math.sin(t * 9), walk: t * 11, moving: 0 });
    lpTag(ctx, 540, 390, 'WEIRDEST THING', { k: BK(t, P(18, 'weirdest') - 0.15), font: FONT(92), h: 150, bg: '#fff6f0' });
    lpTag(ctx, 540, 560, 'IT EVER FOUND?', { k: BK(t, P(19, 'found') - 0.3), font: FONT(92), h: 150, bg: CORAL, col: '#fff' });
  }
  function header(ctx, t) {
    const k = EO(t, CUT.macro, CUT.macro + 0.5); if (k <= 0 || t > CUT.end) return;
    ctx.save(); ctx.globalAlpha = k; lpTag(ctx, 540, 196, "WHY DOGS' NOSES ARE WET", { font: FONT(38), bg: INK, col: '#fff', k: 0.6 + 0.4 * k }); ctx.restore();
  }
  function scene(ctx, t) {
    if (t < CUT.macro) sceneHook(ctx, t);
    else if (t < CUT.day) sceneMacro(ctx, t);
    else if (t < CUT.cutaway) sceneDay(ctx, t);
    else if (t < CUT.chart) sceneCutaway(ctx, t);
    else if (t < CUT.test) sceneChart(ctx, t);
    else if (t < CUT.sensor) sceneTest(ctx, t);
    else if (t < CUT.end) sceneSensor(ctx, t);
    else sceneEnd(ctx, t);
  }

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
      for (const [f, a] of flashes) { ctx.fillStyle = `rgba(255,214,200,${a * 0.7})`; ctx.beginPath(); ctx.moveTo(f[0][0], f[0][1]); ctx.lineTo(f[1][0], f[1][1]); ctx.lineTo(f[2][0], f[2][1]); ctx.closePath(); ctx.fill(); }
    } else scene(ctx, t);
    header(ctx, t);
    ctx.restore();
  }

  // thumbnail still: the dawn lagoon, the one-legged flamingo and 3 huge words

  function thumbnail(ctx, W_, H_) {
    ctx.save(); ctx.scale(W_ / W, H_ / HH);
    meadow(ctx, 'dawn', PAL_DAWN);
    dogFront(ctx, 540, 1000, 1.6, { wet: 1, glow: 0.8 }, 1.2);
    lpTag(ctx, 540, 340, 'WET NOSE', { font: FONT(120), h: 190, bg: '#fff6f0' });
    lpTag(ctx, 540, 1580, 'SMELL TRAP', { font: FONT(120), h: 190, bg: CORAL, col: '#fff' });
    ctx.restore();
  }
  // ---------- sound (voiceover mode): glassy facets, sniffs, droplets, heat hum ----------
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g = 1, p = 0, minor) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const wipe = (t) => { k.withMinor(() => { for (let i = 0; i < 9; i++) k.play('tick', t + i * 0.05, { f: 2400 + i * 180, gain: 0.5 }); }); k.play('whoosh', t - 0.05, { dur: 0.6, gain: 0.45 }); };
    const sniff = (t, g = 1) => k.noise(t, { dur: 0.22, color: 'pink', filter: 'bandpass', f: [[0, 1300], [0.22, 2800]], q: 1.2, gain: 0.07 * g, a: 0.06, minor: true });
    const drop = (t, p = 0) => k.tone(t, { f: [[0, 700], [0.09, 1500]], type: 'sine', dur: 0.11, gain: 0.05, pan: p, minor: true });
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pad', 0, D, { bpm: 96, gain: 0.22, chords: [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['G3', 'B3', 'D4', 'F4']] });
    CUTS.forEach(wipe);
    for (let t = 0.3; t < 3.3; t += 0.42) sniff(t);
    facet(P(0, 'wet') - 0.15, 520); facet(P(0, 'traps') - 0.15, 620, 1.1); glass(P(0, 'traps') + 0.1, 'A5', 0.8);
    facet(P(1, 'heat') - 0.15, 470, 1, 0.3); k.tone(P(1, 'heat'), { f: 'C3', type: 'triangle', dur: 0.6, gain: 0.07, a: 0.05 });
    k.play('sparkle', P(2, 'shine') - 0.05, { n: 5, gain: 0.5 }); facet(P(2, 'mucus') - 0.15, 560, 1.1); glass(P(2, 'mucus'), 'E5', 0.7);
    for (let i = 0; i < 5; i++) facet(P(3, 'glands') - 0.15 + i * 0.08, 420 + i * 45, 0.6, -0.5 + i * 0.25, true);
    for (let t = P(3, 'glands'); t < CUT.day; t += 0.23) drop(t, Math.sin(t * 9) * 0.5);
    facet(P(4, 'particles') - 0.2, 620, 1); for (let t = BEATS[4].s; t < BEATS[5].s; t += 0.34) k.play('tick', t, { f: 3400, gain: 0.25, minor: true });
    k.withMinor(() => { for (let i = 0; i < 12; i++) k.play('pop', P(5, 'stick') + i * 0.11, { f: 700 + i * 30, gain: 0.3, pan: Math.sin(i) * 0.4 }); });
    facet(P(5, 'stick') - 0.15, 620, 1.1); glass(P(5, 'surfaces'), 'G5', 0.8);
    k.play('swish', P(6, 'licks') - 0.1, { gain: 0.6 }); facet(P(6, 'licks') - 0.15, 520);
    k.play('swish', P(7, 'carrying'), { gain: 0.45 }); facet(P(7, 'into') - 0.15, 470, 0.8, 0.3);
    k.play('riser', P(8, 'up') - 0.1, { dur: 1.2, gain: 0.3 }); k.play('impact', P(8, 'scent') - 0.1, { gain: 0.7 }); ['C5', 'E5', 'G5'].forEach((n, i) => glass(P(8, 'scent') + i * 0.04, n, 1, (i - 1) * 0.3, 1.2));
    k.play('riser', P(9, 'over') - 0.1, { dur: 1.3, gain: 0.4 }); for (let f = 0; f < 18; f++) k.play('count', P(9, 'over') + f * 0.06, { gain: 0.6, minor: true });
    k.play('impact', P(9, 'million') + 0.05, { gain: 1.0 }); facet(P(9, 'scent') - 0.15, 560);
    k.play('thud', P(10, 'six') - 0.05, { f: 120, gain: 0.4 }); k.play('error', P(10, 'million'), { f: 'A3', gain: 0.25 });
    facet(P(11, 'strange') - 0.15, 470, 1.1); k.tone(P(11, 'strange'), { f: 'A2', type: 'triangle', dur: 1.2, gain: 0.08, a: 0.1 });
    k.play('stamp', P(12, 'in') + 0.05, { gain: 0.5 }); facet(P(12, 'three') - 0.15, 620);
    facet(P(13, 'warmer') - 0.15, 520); k.noise(P(13, 'warmer'), { dur: 3, color: 'pink', filter: 'bandpass', f: 500, q: 1.1, gain: 0.04, a: 0.4 }); facet(P(13, 'two') - 0.15, 470, 0.8, 0.4);
    facet(P(14, 'five') - 0.15, 620, 1.1); glass(P(14, 'feet'), 'E5', 0.6);
    for (let i = 0; i < 8; i++) k.play('tock', BEATS[14].e - 0.1 + i * 0.13, { f: 300, gain: 0.3, minor: true });
    [0, 1, 2].forEach((i) => { k.play('success', P(15, 'all') + i * 0.28, { f: ['C6', 'E6', 'G6'][i], gain: 0.3 }); });
    k.noise(P(16, 'cool') - 0.2, { dur: 2.6, color: 'pink', filter: 'bandpass', f: [[0, 400], [2.6, 900]], q: 1.2, gain: 0.05, a: 0.5 }); facet(P(16, 'cool') - 0.15, 520);
    k.play('impact', P(16, 'heat') - 0.1, { gain: 0.7 }); glass(P(16, 'sensor'), 'A5', 0.8);
    facet(P(17, 'still') - 0.15, 470, 0.9);
    facet(P(18, 'weirdest') - 0.15, 520); k.play('sparkle', P(18, 'thing'), { n: 6, gain: 0.6 });
    for (let t = BEATS[18].s; t < BEATS[19].e; t += 0.5) sniff(t, 0.8);
    facet(P(19, 'found') - 0.2, 620, 1.1); ['C5', 'G5'].forEach((n, i) => glass(P(19, 'found') + i * 0.09, n, 0.9, (i - 0.5) * 0.3, 1.4));
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
