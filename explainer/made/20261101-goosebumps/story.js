// ================= Chalkboard Lesson, vertical 1080x1920: "Why do we get goosebumps?" =================
// Unattended run: no storyboard step. BEATS copied from phrases.json (Kokoro am_michael).
// One long slate: seven stretches of board ("boards"), 1500 world px apart. The camera tracks along the slate between
// some of them (a chalk leader arrow is drawn on the way), and the felt eraser wipes the screen clean for the others.
// Rendering engine (slate, chalk, tray, eraser, sound scoring) carried over from the Chalkboard Lesson house build.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'p0', s: 0.25, e: 3.52, w: {'your': 0.25, 'skin': 0.59, 'hides': 0.94, 'five': 1.37, 'million': 1.71, 'tiny': 2.31, 'muscles': 2.66, 'why': 3.26} },  // Your skin hides five million tiny muscles. Why?
    { id: 'p1', s: 4.07, e: 5.77, w: {'almost': 4.07, 'every': 4.48, 'hair': 4.82, 'on': 5.09, 'your': 5.22, 'body': 5.49} },  // Almost every hair on your body
    { id: 'p2', s: 6.07, e: 7.27, w: {'has': 6.07, 'its': 6.31, 'own': 6.55, 'muscle': 6.79} },  // has its own muscle,
    { id: 'p3', s: 7.57, e: 8.93, w: {'called': 7.57, 'the': 7.96, 'arrector': 8.16, 'pili': 8.67} },  // called the arrector pili.
    { id: 'p4', s: 9.48, e: 10.57, w: {'when': 9.48, 'you': 9.79, 'get': 10.03, 'cold': 10.26} },  // When you get cold,
    { id: 'p5', s: 10.87, e: 11.69, w: {'or': 10.87, 'scared': 11.07} },  // or scared,
    { id: 'p6', s: 11.99, e: 13.69, w: {'your': 11.99, 'nerves': 12.28, 'fire': 12.72, 'one': 13.02, 'signal': 13.24} },  // your nerves fire one signal,
    { id: 'p7', s: 13.99, e: 15.57, w: {'and': 13.99, 'they': 14.19, 'all': 14.47, 'squeeze': 14.68, 'at': 15.16, 'once': 15.3} },  // and they all squeeze at once.
    { id: 'p8', s: 16.12, e: 17.62, w: {'that': 16.12, 'yanks': 16.37, 'each': 16.69, 'hair': 16.94, 'upright': 17.19} },  // That yanks each hair upright,
    { id: 'p9', s: 17.92, e: 19.59, w: {'and': 17.92, 'pushes': 18.15, 'up': 18.61, 'a': 18.76, 'bump': 18.83, 'of': 19.14, 'skin': 19.29} },  // and pushes up a bump of skin.
    { id: 'p10', s: 20.14, e: 21.25, w: {'thats': 20.14, 'a': 20.51, 'goosebump': 20.59} },  // That's a goosebump.
    { id: 'p11', s: 21.80, e: 24.09, w: {'for': 21.8, 'a': 22.04, 'furry': 22.12, 'animal': 22.51, 'its': 22.99, 'superpower': 23.3} },  // For a furry animal, it's a superpower.
    { id: 'p12', s: 24.64, e: 27.02, w: {'standing': 24.64, 'fur': 25.25, 'traps': 25.48, 'a': 25.87, 'layer': 25.94, 'of': 26.33, 'warm': 26.48, 'air': 26.79} },  // Standing fur traps a layer of warm air,
    { id: 'p13', s: 27.32, e: 28.86, w: {'like': 27.32, 'a': 27.63, 'puffy': 27.7, 'winter': 28.09, 'coat': 28.55} },  // like a puffy winter coat.
    { id: 'p14', s: 29.41, e: 30.88, w: {'and': 29.41, 'a': 29.63, 'scared': 29.71, 'cat': 30.15, 'puffs': 30.37, 'up': 30.73} },  // And a scared cat puffs up,
    { id: 'p15', s: 31.18, e: 32.23, w: {'so': 31.18, 'it': 31.32, 'looks': 31.46, 'bigger': 31.81} },  // so it looks bigger.
    { id: 'p16', s: 32.78, e: 34.40, w: {'but': 32.78, 'we': 33.02, 'lost': 33.17, 'most': 33.48, 'of': 33.79, 'our': 33.94, 'fur': 34.17} },  // But we lost most of our fur,
    { id: 'p17', s: 34.70, e: 36.33, w: {'so': 34.7, 'now': 34.88, 'we': 35.13, 'just': 35.3, 'get': 35.65, 'bumps': 35.9} },  // so now we just get bumps.
    { id: 'p18', s: 36.88, e: 38.53, w: {'even': 36.88, 'a': 37.17, 'song': 37.24, 'can': 37.53, 'trigger': 37.74, 'them': 38.24} },  // Even a song can trigger them,
    { id: 'p19', s: 38.83, e: 41.31, w: {'because': 38.83, 'big': 39.33, 'feelings': 39.54, 'fire': 40.1, 'the': 40.39, 'same': 40.6, 'nerves': 40.88} },  // because big feelings fire the same nerves.
    { id: 'p20', s: 41.86, e: 43.70, w: {'and': 41.86, 'in': 42.09, 'mice': 42.24, 'scientists': 42.55, 'found': 43.32} },  // And in mice, scientists found
    { id: 'p21', s: 44.00, e: 46.13, w: {'those': 44.0, 'nerves': 44.36, 'wake': 44.78, 'up': 45.06, 'hair': 45.21, 'stem': 45.49, 'cells': 45.77} },  // those nerves wake up hair stem cells,
    { id: 'p22', s: 46.43, e: 48.29, w: {'to': 46.43, 'grow': 46.58, 'thicker': 46.87, 'fur': 47.4, 'in': 47.62, 'the': 47.77, 'cold': 47.99} },  // to grow thicker fur in the cold.
    { id: 'p23', s: 48.84, e: 50.43, w: {'so': 48.84, 'what': 48.98, 'gives': 49.24, 'you': 49.57, 'goosebumps': 49.77} },  // So what gives you goosebumps?
  ];
  const B = BEATS;
  const T = (i, w) => { const v = B[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const DURATION = B[B.length - 1].e + 1.0;
  // scene changes sit in the pauses between phrases
  const gap = (i) => [B[i - 1].e, B[i].s];
  const PANS = [{ i: 1, from: 0 }, { i: 8, from: 2 }, { i: 16, from: 4 }].map((p) => ({ from: p.from, t0: gap(p.i)[0], t1: gap(p.i)[1] }));
  const WIPES = [{ i: 4, from: 1 }, { i: 11, from: 3 }, { i: 20, from: 5 }].map((p) => ({ from: p.from, t0: gap(p.i)[0], t1: gap(p.i)[1] }));

  // ---------- geometry (from the reference) ----------
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const win = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const seg = (pts, step = 2.5) => { const out = []; for (let i = 0; i < pts.length - 1; i++) { const [x0, y0] = pts[i], [x1, y1] = pts[i + 1]; const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / step)); for (let j = 0; j < n; j++) out.push([x0 + (x1 - x0) * j / n, y0 + (y1 - y0) * j / n]); } out.push(pts[pts.length - 1]); return out; };
  const normals = (P) => P.map((p, i) => { const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)]; const dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1; return [-dy / d, dx / d]; });
  const wob = (pts, nz, seed, amp = 1.5, freq = 0.012) => { const N = normals(pts); let L = 0; return pts.map((p, i) => { if (i) L += Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]); const o = nz.n2(L * freq + seed * 1.37, seed * 0.71) * amp + nz.n2(L * freq * 6 + seed, seed + 3.3) * amp * 0.25; return [p[0] + N[i][0] * o, p[1] + N[i][1] * o]; }); };
  const circ = (x, y, rx, ry, a0 = 0, a1 = Math.PI * 2, n = 0) => { n = n || Math.max(12, Math.ceil(Math.abs(a1 - a0) * Math.max(rx, ry) / 6)); const o = []; for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; o.push([x + Math.cos(a) * rx, y + Math.sin(a) * ry]); } return o; };
  const quad = (p0, p1, p2, n = 30) => { const o = []; for (let i = 0; i <= n; i++) { const t = i / n, m = 1 - t; o.push([m * m * p0[0] + 2 * m * t * p1[0] + t * t * p2[0], m * m * p0[1] + 2 * m * t * p1[1] + t * t * p2[1]]); } return o; };
  const cubic = (p0, p1, p2, p3, n = 40) => { const o = []; for (let i = 0; i <= n; i++) { const t = i / n, m = 1 - t; o.push([m * m * m * p0[0] + 3 * m * m * t * p1[0] + 3 * m * t * t * p2[0] + t * t * t * p3[0], m * m * m * p0[1] + 3 * m * m * t * p1[1] + 3 * m * t * t * p2[1] + t * t * t * p3[1]]); } return o; };
  const rrect = (x, y, w, h, r) => { const o = [[x + r, y], [x + w - r, y]]; o.push(...circ(x + w - r, y + r, r, r, -Math.PI / 2, 0, 5).slice(1)); o.push([x + w, y + h - r]); o.push(...circ(x + w - r, y + h - r, r, r, 0, Math.PI / 2, 5).slice(1)); o.push([x + r, y + h]); o.push(...circ(x + r, y + h - r, r, r, Math.PI / 2, Math.PI, 5).slice(1)); o.push([x, y + r]); o.push(...circ(x + r, y + r, r, r, Math.PI, Math.PI * 1.5, 5).slice(1)); o.push([x + r + 6, y - 1]); return o; };
  const head = (P, len = 20, spread = 0.5) => { const a = P[P.length - 1], b = P[Math.max(0, P.length - 4)], an = Math.atan2(a[1] - b[1], a[0] - b[0]); return [[a[0] - Math.cos(an - spread) * len, a[1] - Math.sin(an - spread) * len], a, [a[0] - Math.cos(an + spread) * len, a[1] - Math.sin(an + spread) * len]]; };
  const xf = (P, dx, dy, rot = 0, px = 0, py = 0) => P.map(([x, y]) => { const c = Math.cos(rot), s = Math.sin(rot), ux = x - px, uy = y - py; return [px + ux * c - uy * s + dx, py + ux * s + uy * c + dy]; });
  const fmt = (n) => String(Math.round(n));


  // ---------- drawings (each returns a list of polylines, local board coords) ----------
  const lerp = (a, b, u) => a + (b - a) * u;
  // muscle spindle between two points: two bowed curves meeting at the ends
  const spindle = (x0, y0, x1, y1, bulge) => { const mx = (x0 + x1) / 2, my = (y0 + y1) / 2, d = Math.hypot(x1 - x0, y1 - y0) || 1, nx = -(y1 - y0) / d, ny = (x1 - x0) / d; return [quad([x0, y0], [mx + nx * bulge * 2, my + ny * bulge * 2], [x1, y1], 18), quad([x0, y0], [mx - nx * bulge * 2, my - ny * bulge * 2], [x1, y1], 18)]; };
  const snowflake = (x, y, r) => { const o = []; for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3 - Math.PI / 2, c = Math.cos(a), s = Math.sin(a); o.push([[x, y], [x + c * r, y + s * r]]); const bx = x + c * r * 0.62, by = y + s * r * 0.62, L = r * 0.28; o.push([[bx + Math.cos(a + 2.4) * L, by + Math.sin(a + 2.4) * L], [bx, by], [bx + Math.cos(a - 2.4) * L, by + Math.sin(a - 2.4) * L]]); } return o; };
  const bolt = (x, y, s) => [[[x + 0.25 * s, y - s], [x - 0.35 * s, y + 0.1 * s], [x + 0.12 * s, y + 0.1 * s], [x - 0.25 * s, y + s], [x + 0.4 * s, y - 0.2 * s], [x - 0.05 * s, y - 0.2 * s], [x + 0.25 * s, y - s]]];
  const scaredFace = (x, y, r) => [
    circ(x, y, r, r * 1.05, -1.4, 4.9),
    circ(x - r * 0.38, y - r * 0.2, r * 0.22, r * 0.26), circ(x + r * 0.38, y - r * 0.2, r * 0.22, r * 0.26),
    quad([x - r * 0.65, y - r * 0.62], [x - r * 0.4, y - r * 0.85], [x - r * 0.15, y - r * 0.62], 8), quad([x + r * 0.15, y - r * 0.62], [x + r * 0.4, y - r * 0.85], [x + r * 0.65, y - r * 0.62], 8),
    circ(x, y + r * 0.45, r * 0.18, r * 0.26),
  ];
  const coat = (x, y) => [
    rrect(x - 85, y, 170, 270, 40), [[x - 80, y + 30], [x - 135, y + 230]], [[x + 80, y + 30], [x + 135, y + 230]],
    quad([x - 80, y + 90], [x, y + 112], [x + 80, y + 90], 12), quad([x - 82, y + 180], [x, y + 202], [x + 82, y + 180], 12),
    [[x, y + 8], [x, y + 266]], quad([x - 40, y + 2], [x, y + 40], [x + 40, y + 2], 10),
  ];
  // scared cat, side view facing left, back arched
  const ARCH = cubic([300, 1330], [380, 1080], [660, 1080], [740, 1330], 50);
  const catBody = () => [
    ARCH, quad([335, 1400], [515, 1350], [700, 1400], 20),
    quad([300, 1330], [300, 1380], [335, 1400], 6), quad([740, 1330], [735, 1380], [700, 1400], 6),
    [[335, 1400], [322, 1560]], [[368, 1395], [370, 1560]], [[680, 1398], [690, 1560]], [[712, 1392], [728, 1560]],
    circ(245, 1300, 72, 68), [[190, 1255], [195, 1180], [235, 1232]], [[262, 1230], [298, 1172], [308, 1250]],
    [[218, 1340], [245, 1325], [272, 1340]],
    cubic([740, 1330], [810, 1290], [790, 1180], [850, 1110], 20),
  ];
  const catPuff = () => {
    const S = seg(ARCH, 18), N = normals(S), spikes = S.map((p, i) => { const k = i % 2 ? 62 : 26; return [p[0] - N[i][0] * k, p[1] - N[i][1] * k]; });
    const tail = cubic([740, 1330], [810, 1290], [790, 1180], [850, 1110], 16), TN = normals(tail);
    const bush = [...tail.map((p, i) => [p[0] + TN[i][0] * (i % 2 ? 42 : 18), p[1] + TN[i][1] * (i % 2 ? 42 : 18)])];
    const bush2 = [...tail.map((p, i) => [p[0] - TN[i][0] * (i % 2 ? 42 : 18), p[1] - TN[i][1] * (i % 2 ? 42 : 18)])];
    return [spikes, bush, bush2];
  };
  const mouse = (x, y) => [
    circ(x, y, 160, 90, 0.35, 6.0), [[x + 135, y - 45], [x + 270, y + 12], [x + 140, y + 62]], circ(x + 115, y - 90, 48, 48, 0.9, 7.0),
    cubic([x - 158, y + 25], [x - 260, y + 60], [x - 300, y - 60], [x - 360, y - 30], 24),
    [[x - 70, y + 85], [x - 80, y + 120]], [[x + 60, y + 85], [x + 70, y + 120]],
    [[x + 250, y + 5], [x + 320, y - 15]], [[x + 250, y + 18], [x + 322, y + 28]],
  ];
  const arm = () => [quad([80, 520], [480, 478], [880, 540], 30), quad([80, 700], [480, 724], [880, 680], 30), circ(950, 610, 80, 90, -2.2, 2.3)];
  const note = (x, y) => [circ(x, y, 46, 32, 0, Math.PI * 2, 24), [[x + 44, y - 4], [x + 44, y - 200]], quad([x + 44, y - 200], [x + 130, y - 150], [x + 110, y - 60], 14)];
  const heart = (x, y, r) => [[...cubic([x, y + r], [x - r * 1.7, y - r * 0.1], [x - r * 0.8, y - r * 1.3], [x, y - r * 0.5], 24), ...cubic([x, y - r * 0.5], [x + r * 0.8, y - r * 1.3], [x + r * 1.7, y - r * 0.1], [x, y + r], 24).slice(1)]];
  // ---------- story: timed world-space chalk items, rebuilt every frame (pure function of t) ----------
  const BXc = (b) => b * 1500; // board centre x in the world
  const FONT = { title: '700 KPX "Kalam"', label: '400 KPX "Patrick Hand"', num: '700 KPX "Kalam"' };
  const fontOf = (it) => FONT[it.font].replace('KPX', (it.size * (it.font === 'label' ? 1.08 : 1)).toFixed(1) + 'px');
  let MC = null; const MCACHE = {};
  const measure = (s, font, size) => {
    const f = FONT[font].replace('KPX', (size * (font === 'label' ? 1.08 : 1)).toFixed(1) + 'px'), key = f + '|' + s;
    if (MCACHE[key] != null) return MCACHE[key];
    if (!MC) MC = document.createElement('canvas').getContext('2d');
    MC.font = f; const w = MC.measureText(s).width;
    if (document.fonts && document.fonts.check(f)) MCACHE[key] = w;
    return w;
  };
  const arrow = (D, pts, role, w, a, b) => { D.line(pts, role, w, a, b); D.line(head(pts, 26), role, w, b, b + 0.08); };


  function story(t) {
    const items = [];
    const mk = (b) => {
      const ox = BXc(b) - 540, P = (pts) => pts.map(([x, y]) => [x + ox, y]);
      return {
        ox,
        line: (pts, role, w, a, b2, o = {}) => items.push({ k: 'line', pts: P(pts), role, w, a, b: b2, hit: o.hit, inst: o.inst, prog: o.prog, seed: o.seed }),
        text: (s, x, y, size, font, role, a, b2, o = {}) => items.push({ k: 'text', s, x: x + ox, y, size, font, role, a, b: b2, rot: o.rot || 0, align: o.align || 'center', inst: o.inst, prog: o.prog }),
        dot: (x, y, r, role, a, o = {}) => items.push({ k: 'dot', x: x + ox, y, r, role, a: o.inst ? -1 : a, b: o.inst ? 0 : a + 0.05, inst: o.inst }),
        many: (list, role, w, a, b2, o = {}) => list.forEach((pts, i) => { const n = list.length, aa = a + (b2 - a) * i / n, bb = a + (b2 - a) * (i + 1) / n; items.push({ k: 'line', pts: P(pts), role, w, a: aa, b: bb, inst: o.inst, prog: o.prog, hit: o.hit && i === 0 }); }),
        // a moving drawing: geometry changes with t, drawn on over [a,b], fixed seed so the chalk texture doesn't flicker
        live: (pts, role, w, a, b2, seed) => items.push({ k: 'line', pts: P(pts), role, w, a: -1, b: 0, inst: true, prog: win(t, a, b2), seed, la: a, lb: b2 }),
      };
    };
    // ===== board 0: the hook: five million tiny muscles =====
    {
      const D = mk(0);
      D.text('your skin', 540, 320, 84, 'label', 'ink', T(0, 'your') - 0.1, T(0, 'skin') + 0.2);
      D.text('5,000,000', 540, 580, 180, 'num', 'acc1', T(0, 'five') - 0.15, T(0, 'million') + 0.35, { rot: -0.015 });
      D.text('tiny muscles', 540, 760, 104, 'title', 'ink', T(0, 'tiny') - 0.12, T(0, 'muscles') + 0.3);
      let n = 0;
      [880, 1010, 1140].forEach((y, r) => [270, 450, 630, 810].forEach((x, c) => { const a = T(0, 'tiny') + n * 0.06; D.many(spindle(x - 60, y + 14, x + 60, y - 14, 16), 'acc2', 5, a, a + 0.12); n++; }));
      D.text('WHY?', 540, 1450, 200, 'title', 'acc2', T(0, 'why') - 0.15, T(0, 'why') + 0.3, { rot: -0.03 });
      D.line([[330, 1490], [760, 1480]], 'acc1', 8, B[0].e - 0.1, B[0].e + 0.12, { hit: true });
    }
    // ===== board 1: one hair, one muscle (relaxed) =====
    {
      const D = mk(1);
      D.line([[80, 560], [1000, 556]], 'ink', 7, T(1, 'almost') - 0.1, T(1, 'every'));
      D.line([[80, 640], [1000, 636]], 'ink', 2.5, T(1, 'almost'), T(1, 'every') + 0.1);
      D.text('skin', 150, 515, 66, 'label', 'ink', T(1, 'every') - 0.1, T(1, 'hair') - 0.05);
      D.many([[[505, 560], [420, 1170]], [[575, 560], [490, 1170]], circ(455, 1195, 58, 44, -0.3, 3.45)], 'ink', 6, T(1, 'every'), T(1, 'hair') + 0.1);
      D.line([[455, 1180], [540, 560]], 'acc1', 6, T(1, 'hair') - 0.1, T(1, 'on'));
      D.line(quad([540, 560], [700, 470], [880, 452], 20), 'acc1', 6, T(1, 'on'), T(1, 'body'), { hit: true });
      D.text('hair', 900, 395, 80, 'title', 'acc1', T(1, 'hair') - 0.05, T(1, 'body') + 0.2);
      D.many(spindle(525, 930, 800, 660, 30), 'acc2', 7, T(2, 'own') - 0.1, T(2, 'muscle') + 0.2, { hit: true });
      D.text('1 hair, 1 muscle', 540, 1340, 80, 'label', 'ink', T(2, 'has') - 0.1, T(2, 'muscle') + 0.25);
      D.text('arrector pili', 540, 1530, 116, 'title', 'acc2', T(3, 'arrector') - 0.15, T(3, 'pili') + 0.3, { rot: -0.02 });
      arrow(D, quad([800, 1420], [900, 1080], [700, 830], 18), 'acc2', 6, T(3, 'pili') + 0.15, B[3].e + 0.1);
    }
    // ===== board 2: cold or fear -> one nerve signal -> every muscle squeezes =====
    {
      const D = mk(2);
      D.many(snowflake(270, 460, 130), 'acc4', 6, T(4, 'cold') - 0.15, T(4, 'cold') + 0.3);
      D.text('cold', 270, 720, 100, 'title', 'acc4', T(4, 'cold') - 0.1, T(4, 'cold') + 0.3);
      D.many(scaredFace(810, 460, 135), 'ink', 6, T(5, 'scared') - 0.15, T(5, 'scared') + 0.4);
      D.text('scared', 810, 720, 100, 'title', 'acc2', T(5, 'scared') - 0.05, B[5].e + 0.1);
      arrow(D, [[300, 790], [470, 900]], 'ink', 6, T(6, 'your') - 0.05, T(6, 'nerves'));
      arrow(D, [[780, 790], [610, 900]], 'ink', 6, T(6, 'your') + 0.1, T(6, 'nerves') + 0.1);
      D.many(bolt(540, 1020, 110), 'acc1', 7, T(6, 'nerves') - 0.1, T(6, 'fire') + 0.1, { hit: true });
      D.text('1 signal', 540, 1250, 120, 'num', 'acc1', T(6, 'one') - 0.15, T(6, 'signal') + 0.3);
      const sq = eio(win(t, T(7, 'squeeze') - 0.05, T(7, 'squeeze') + 0.3));
      [180, 360, 540, 720, 900].forEach((x, i) => {
        const a = T(7, 'and') - 0.1 + i * 0.07, L = 70 * (1 - 0.3 * sq), bl = 20 * (1 + 0.8 * sq);
        spindle(x - L, 1400, x + L, 1400, bl).forEach((P, j) => D.live(P, 'acc2', 6, a, a + 0.2, 300 + i * 7 + j));
      });
      D.text('ALL squeeze!', 540, 1580, 108, 'title', 'acc2', T(7, 'all') - 0.1, T(7, 'once') + 0.2, { rot: -0.02 });
    }
    // ===== board 3: the yank: hair stands up, skin bumps =====
    {
      const D = mk(3), pt0 = PANS[1].t0, pt1 = PANS[1].t1;
      const u = eio(win(t, T(8, 'yanks'), T(8, 'upright'))), v = eio(win(t, T(9, 'pushes') - 0.05, T(9, 'skin'))), bh = 80 * v;
      const skinY = (x) => 560 - bh * Math.exp(-Math.pow((x - 555) / 125, 2));
      const sk = []; for (let x = 80; x <= 1000; x += 12) sk.push([x, skinY(x)]);
      D.live(sk, 'ink', 7, pt0 - 0.05, pt1 - 0.1, 401);
      D.many([[[505, 562], [420, 1170]], [[575, 562], [490, 1170]], circ(455, 1195, 58, 44, -0.3, 3.45)], 'ink', 6, pt0, pt1);
      const E = [540, skinY(540) - 4], ang = lerp(-0.3, -1.36, u), Lh = 280;
      D.live([[455, 1180], E], 'acc1', 6, pt0 + 0.1, pt1, 402);
      const tip = [E[0] + Math.cos(ang) * Lh, E[1] + Math.sin(ang) * Lh], mid = [E[0] + Math.cos(ang - 0.15) * Lh * 0.55, E[1] + Math.sin(ang - 0.15) * Lh * 0.55];
      D.live(quad(E, mid, tip, 20), 'acc1', 6, pt0 + 0.2, pt1, 403);
      const A0 = [800, skinY(800) + 100], F = [525, 930], A = [lerp(A0[0], F[0], 0.15 * u), lerp(A0[1], F[1], 0.15 * u)];
      spindle(F[0], F[1], A[0], A[1], 30 * (1 + 0.8 * u)).forEach((P, j) => D.live(P, 'acc2', 7, pt0 + 0.15, pt1, 410 + j));
      D.text('squeeze', 850, 900, 66, 'label', 'acc2', T(8, 'yanks') - 0.1, T(8, 'each'));
      D.text('UP!', 830, 380, 130, 'title', 'acc1', T(8, 'upright') - 0.12, T(8, 'upright') + 0.25, { rot: -0.05 });
      D.text('bump', 230, 400, 92, 'title', 'acc4', T(9, 'bump') - 0.12, T(9, 'bump') + 0.25);
      arrow(D, quad([300, 430], [380, 470], [440, 480], 12), 'acc4', 6, T(9, 'bump') + 0.1, T(9, 'skin'));
      D.text('GOOSEBUMP!', 540, 1450, 140, 'title', 'acc2', T(10, 'goosebump') - 0.15, T(10, 'goosebump') + 0.4, { rot: -0.03 });
      D.line(circ(555, 470, 200, 120, -2.0, 4.4), 'acc2', 7, T(10, 'goosebump') - 0.05, T(10, 'goosebump') + 0.35, { hit: true });
    }
    // ===== board 4: why fur stands up: warm air, and a bigger-looking cat =====
    {
      const D = mk(4);
      D.text('superpower!', 540, 290, 124, 'title', 'acc1', T(11, 'superpower') - 0.15, T(11, 'superpower') + 0.45, { rot: -0.02 });
      D.line([[100, 700], [700, 696]], 'ink', 7, T(11, 'furry') - 0.1, T(11, 'animal'));
      const fur = []; for (let i = 0; i < 10; i++) { const x = 130 + i * 62; fur.push(quad([x, 700], [x + 14, 560], [x - 4, 420], 14)); }
      D.many(fur, 'ink', 4.5, T(11, 'furry'), T(11, 'animal') + 0.35);
      D.text('furry animal', 400, 770, 64, 'label', 'ink', T(11, 'animal') - 0.1, T(11, 'animal') + 0.4);
      let n = 0;
      for (let g = 0; g < 9; g++) [480, 560, 640].forEach((y) => { D.dot(161 + g * 62 + ((n * 7) % 9) - 4, y + ((n * 5) % 13) - 6, 10, 'acc1', T(12, 'traps') - 0.1 + n * 0.03); n++; });
      D.text('warm air', 400, 870, 96, 'title', 'acc1', T(12, 'warm') - 0.12, T(12, 'air') + 0.3);
      D.many(coat(880, 430), 'acc4', 6, T(13, 'puffy') - 0.15, T(13, 'coat') + 0.2);
      D.text('puffy coat', 880, 790, 64, 'label', 'acc4', T(13, 'coat') - 0.1, B[13].e);
      D.many(catBody(), 'ink', 6, T(14, 'scared') - 0.12, T(14, 'cat') + 0.2);
      D.many(catPuff(), 'acc2', 6, T(14, 'puffs') - 0.1, T(14, 'up') + 0.25, { hit: true });
      D.text('BIGGER!', 540, 1030, 118, 'title', 'acc1', T(15, 'bigger') - 0.12, T(15, 'bigger') + 0.3, { rot: -0.03 });
      arrow(D, [[180, 1420], [90, 1420]], 'acc1', 7, T(15, 'bigger') - 0.05, T(15, 'bigger') + 0.15);
      arrow(D, [[900, 1300], [1000, 1300]], 'acc1', 7, T(15, 'bigger') + 0.05, T(15, 'bigger') + 0.25);
    }
    // ===== board 5: we lost the fur, kept the bumps; a song does it too =====
    {
      const D = mk(5);
      D.text('FUR', 540, 340, 150, 'title', 'ink', T(16, 'fur') - 0.15, T(16, 'fur') + 0.25);
      D.line([[390, 300], [690, 288]], 'acc2', 10, T(16, 'fur') + 0.25, T(16, 'fur') + 0.45, { hit: true });
      D.many(arm(), 'ink', 6, T(16, 'but') - 0.1, T(16, 'lost') + 0.25);
      for (let i = 0; i < 7; i++) { const x = 180 + i * 107; D.line([[x, 508 - Math.sin(i) * 6], [x + 26, 462 - Math.sin(i) * 6]], 'ink', 3.5, T(16, 'most') + i * 0.05, T(16, 'most') + 0.08 + i * 0.05); }
      n0: { let k = 0; for (let r = 0; r < 3; r++) for (let c = 0; c < 10; c++) { D.dot(150 + c * 74 + (r % 2) * 37, 565 + r * 50, 9, 'acc3', T(17, 'just') - 0.05 + k * 0.022); k++; } }
      D.text('just bumps', 540, 840, 100, 'title', 'acc3', T(17, 'bumps') - 0.12, T(17, 'bumps') + 0.35);
      D.many(note(250, 1260), 'acc4', 6, T(18, 'song') - 0.15, T(18, 'song') + 0.3);
      D.text('a song', 290, 1380, 76, 'label', 'acc4', T(18, 'song') - 0.05, T(18, 'trigger'));
      D.many(heart(810, 1200, 100), 'acc2', 7, T(19, 'feelings') - 0.15, T(19, 'feelings') + 0.35);
      D.text('feelings', 810, 1380, 76, 'label', 'acc2', T(19, 'feelings') - 0.05, T(19, 'fire'));
      D.many(bolt(545, 1190, 85), 'acc1', 6, T(19, 'fire') - 0.1, T(19, 'fire') + 0.2, { hit: true });
      D.text('same nerves', 540, 1550, 104, 'title', 'acc1', T(19, 'same') - 0.12, T(19, 'nerves') + 0.3, { rot: -0.02 });
    }
    // ===== board 6: in mice, the nerves wake hair stem cells; the loop-back question =====
    {
      const D = mk(6);
      D.many(mouse(470, 360), 'ink', 6, T(20, 'mice') - 0.15, T(20, 'mice') + 0.4);
      D.text('in mice', 470, 560, 70, 'label', 'acc4', T(20, 'mice') - 0.05, T(20, 'mice') + 0.3);
      D.text('scientists found', 540, 630, 62, 'label', 'ink', T(20, 'scientists') - 0.1, T(20, 'found') + 0.2);
      D.line([[100, 870], [980, 866]], 'ink', 7, T(21, 'those') - 0.1, T(21, 'nerves') - 0.05);
      D.many([[[505, 870], [470, 1150]], [[575, 870], [540, 1150]], circ(505, 1175, 56, 40, -0.3, 3.45)], 'ink', 6, T(21, 'those'), T(21, 'nerves'));
      D.line(cubic([90, 1180], [200, 1080], [330, 1180], [555, 1030], 30), 'acc4', 5, T(21, 'nerves') - 0.05, T(21, 'wake'));
      D.text('nerve', 180, 1250, 64, 'label', 'acc4', T(21, 'nerves'), T(21, 'wake'));
      [[600, 990], [618, 1040], [604, 1090]].forEach(([x, y], i) => D.line(circ(x, y, 20, 20), 'acc1', 5, T(21, 'stem') - 0.1 + i * 0.08, T(21, 'stem') + 0.05 + i * 0.08, { hit: i === 0 }));
      D.text('stem cells', 845, 1060, 84, 'title', 'acc1', T(21, 'stem') - 0.1, T(21, 'cells') + 0.3);
      [[540, 0], [380, 0.12], [680, 0.24]].forEach(([x, d], i) => D.line(quad([x, 866], [x + 20, 780], [x + 4, 700], 12), 'ink', 9, T(22, 'grow') + d, T(22, 'fur') + d));
      D.text('thicker fur', 905, 780, 60, 'label', 'ink', T(22, 'thicker') - 0.1, T(22, 'fur') + 0.25);
      D.many(snowflake(190, 760, 60), 'acc4', 5, T(22, 'cold') - 0.15, T(22, 'cold') + 0.2);
      D.text('what gives YOU', 540, 1390, 112, 'title', 'ink', T(23, 'what') - 0.12, T(23, 'you') + 0.15, { rot: -0.015 });
      D.text('goosebumps?', 540, 1555, 140, 'title', 'acc2', T(23, 'goosebumps') - 0.15, T(23, 'goosebumps') + 0.4, { rot: -0.02 });
      D.line(circ(540, 1515, 420, 105, -2.0, 4.4), 'acc2', 7, B[23].e - 0.05, B[23].e + 0.35, { hit: true });
    }
    // ===== chalk leader arrows drawn while the camera tracks to the next board =====
    PANS.forEach((p) => {
      const x0 = BXc(p.from) + 560, x1 = BXc(p.from + 1) - 560, y = 960 + (p.from % 4 === 0 ? -40 : 60);
      const L = cubic([x0, y], [x0 + 120, y - 110], [x1 - 120, y + 110], [x1, y]);
      items.push({ k: 'line', pts: L, role: 'acc1', w: 6, a: p.t0 - 0.05, b: p.t1 - 0.1 });
      items.push({ k: 'line', pts: head(L, 26), role: 'acc1', w: 6, a: p.t1 - 0.1, b: p.t1 });
    });
    return items;
  }
  const tipOf = (items, t, meas) => { let tip = null; for (const it of items) { if (it.inst || it.k === 'dot') continue; const p = win(t, it.a, it.b); if (p > 0 && p < 1) { if (it.k === 'line') { const P = it.pts; tip = P[Math.min(P.length - 1, Math.floor(p * (P.length - 1)))]; } else tip = meas(it, p); } } return tip; };

  // ---------- camera: [t, local x, local y, zoom, board] ----------
  const CK = [
    [0, 540, 960, 1.06, 0], [3.52, 540, 960, 1.0, 0],
    [4.07, 540, 960, 1.0, 1], [8.93, 540, 990, 1.05, 1],
    [9.48, 540, 960, 1.06, 2], [15.57, 540, 960, 1.0, 2],
    [16.12, 540, 960, 1.0, 3], [21.25, 540, 940, 1.05, 3],
    [21.80, 540, 960, 1.04, 4], [32.23, 540, 960, 1.0, 4],
    [32.78, 540, 960, 1.0, 5], [41.31, 540, 960, 1.04, 5],
    [41.86, 540, 960, 1.04, 6], [60, 540, 960, 1.0, 6],
  ].map(([t, x, y, z, b]) => [t, BXc(b) - 540 + x, y, z]);
  const camAt = (t) => {
    const k = CK; if (t <= k[0][0]) return k[0].slice(1);
    for (let i = 0; i < k.length - 1; i++) { const a = k[i], b = k[i + 1]; if (t <= b[0]) { const u = eio((t - a[0]) / Math.max(1e-6, b[0] - a[0])); return [a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u, Math.exp(Math.log(a[3]) + (Math.log(b[3]) - Math.log(a[3])) * u)]; } }
    return k[k.length - 1].slice(1);
  };
  // ---------- rendering (the reference's chalk medium) ----------
  const XC = {};
  let NZ = null;
  const COL = { ink: [240, 242, 236], acc1: [246, 222, 120], acc2: [244, 150, 175], acc3: [205, 250, 190], acc4: [150, 205, 240] };
  const WX0 = -700, WY0 = -300, WWD = 10400, WHT = 2700; // world extent of the slate
  function buildSlate() {
    const sc2 = 0.5, SW = WWD * sc2, SH = WHT * sc2, sl = H.layer(SW, SH), sc = sl.getContext('2d');
    const base = H.layer(SW / 2, SH / 2), bc = base.getContext('2d'); H.paper(bc, SW / 2, SH / 2, '#2c4639', 17, 0.05);
    const rr = H.rng(12);
    { const gl = H.layer(SW / 2, SH / 2), gc = gl.getContext('2d'); gc.fillStyle = gc.strokeStyle = '#e8eee6'; gc.font = '400 14px "Kalam"';
      const ghosts = ['photosynthesis', '6CO2 + 6H2O', 'Homework p. 112', 'x² + y² = r²', 'Ch. 7  fractions', '3/4 = 0.75', 'E = mc²', 'due Friday', 'spelling test', 'H2O', '12 × 12 = 144', 'Monday', 'π ≈ 3.14', 'nouns / verbs'];
      for (let i = 0; i < 46; i++) gc.fillText(ghosts[i % ghosts.length], rr.range(0, SW / 2 - 60), rr.range(10, SH / 2 - 10));
      gc.lineWidth = 2; for (let i = 0; i < 14; i++) { gc.beginPath(); gc.arc(rr.range(0, SW / 2), rr.range(0, SH / 2), rr.range(10, 28), 0, 7); gc.stroke(); }
      bc.save(); bc.filter = 'blur(1px)'; bc.globalAlpha = 0.08; bc.drawImage(gl, 0, 0); bc.restore(); }
    const sm = H.layer(SW / 2, SH / 2), smc = sm.getContext('2d'); smc.lineCap = 'round';
    for (let i = 0; i < 420; i++) { const x = rr.range(0, SW / 2), y = rr.range(0, SH / 2), R = rr.range(18, 50), a0 = rr.range(0, 6.28); smc.strokeStyle = `rgba(215,228,215,${rr.range(0.035, 0.075)})`; smc.lineWidth = rr.range(12, 24); smc.beginPath(); smc.ellipse(x, y, R, R * rr.range(0.3, 0.7), rr.range(-0.4, 0.4), a0, a0 + rr.range(1.5, 3.5)); smc.stroke(); }
    for (let i = 0; i < 160; i++) { const x = rr.range(0, SW / 2), y = rr.range(0, SH / 2); smc.strokeStyle = `rgba(215,228,215,${rr.range(0.03, 0.05)})`; smc.lineWidth = rr.range(15, 22); smc.beginPath(); smc.moveTo(x, y); smc.lineTo(x + rr.range(45, 110), y + rr.range(-6, 6)); smc.stroke(); }
    bc.filter = 'blur(2px)'; bc.drawImage(sm, 0, 0); bc.filter = 'none';
    sc.imageSmoothingEnabled = true; sc.drawImage(base, 0, 0, SW, SH);
    sc.lineCap = 'round';
    for (let i = 0; i < 3200; i++) { const x = rr.range(0, SW), y = rr.range(0, SH); sc.strokeStyle = `rgba(220,230,220,${rr.range(0.01, 0.025)})`; sc.lineWidth = rr.range(0.5, 1); sc.beginPath(); sc.moveTo(x, y); sc.quadraticCurveTo(x + 20, y + rr.range(-3, 3), x + rr.range(30, 70), y + rr.range(-4, 4)); sc.stroke(); }
    XC.slate = sl;
    // settled dust + felt streaks at full resolution are laid per frame as a tiled overlay
    const TS = 256, tile = H.layer(TS, TS), tc = tile.getContext('2d'), img = tc.createImageData(TS, TS), d = img.data, r2 = H.rng(21);
    const coarse = new Float32Array(64 * 64); for (let i = 0; i < coarse.length; i++) coarse[i] = r2() - 0.5;
    for (let y = 0, p = 0; y < TS; y++) for (let x = 0; x < TS; x++, p++) { const v = (r2() - 0.5) * 0.9 + coarse[((y >> 2) & 63) * 64 + ((x >> 2) & 63)] * 0.7 + coarse[((y >> 1) & 63) * 64 + ((x * 3 >> 3) & 63)] * 0.4; const i = p * 4, on = v > 0 ? 255 : 0; d[i] = on; d[i + 1] = on; d[i + 2] = on; d[i + 3] = Math.min(255, Math.abs(v) * 24); }
    tc.putImageData(img, 0, 0);
    for (let i = 0; i < 260; i++) { tc.fillStyle = `rgba(235,240,232,${r2.range(0.04, 0.2)})`; tc.fillRect(r2.range(0, TS), r2.range(0, TS), r2.range(0.8, 1.8), r2.range(0.8, 1.8)); }
    XC.tooth = tile;
    // oak ledge (chalk tray) with grain, dust drift and specks
    const TW = 2400, TH = 96, tr = H.layer(TW, TH), tq = tr.getContext('2d'), r4 = H.rng(55);
    const tg2 = tq.createLinearGradient(0, 0, 0, TH); tg2.addColorStop(0, '#9a6a3c'); tg2.addColorStop(0.35, '#7a4f2a'); tg2.addColorStop(0.36, '#5e3a1c'); tg2.addColorStop(1, '#3e2510');
    tq.fillStyle = tg2; tq.fillRect(0, 0, TW, TH);
    for (let i = 0; i < 90; i++) { const o = r4() * TH, dark = r4.chance(0.6), fq = r4.range(0.002, 0.008), amp = r4.range(0.5, 2.5), ph = r4.range(0, 6); tq.strokeStyle = dark ? `rgba(50,28,10,${r4.range(0.12, 0.35)})` : `rgba(210,160,100,${r4.range(0.06, 0.16)})`; tq.lineWidth = r4.range(0.6, 2); tq.beginPath(); for (let x = 0; x <= TW; x += 20) { const y = o + Math.sin(x * fq + ph) * amp + NZ.n2(x * 0.004, i) * 2; x ? tq.lineTo(x, y) : tq.moveTo(x, y); } tq.stroke(); }
    tq.fillStyle = 'rgba(255,230,190,0.28)'; tq.fillRect(0, 33, TW, 1.5);
    const dg = tq.createLinearGradient(0, 0, 0, 32); dg.addColorStop(0, 'rgba(235,235,225,0.34)'); dg.addColorStop(1, 'rgba(235,235,225,0.07)'); tq.fillStyle = dg; tq.fillRect(0, 0, TW, 32);
    for (let i = 0; i < 14; i++) { const x = r4.range(0, TW), g3 = tq.createRadialGradient(x, 15, 2, x, 15, 70); g3.addColorStop(0, 'rgba(240,240,230,0.22)'); g3.addColorStop(1, 'rgba(240,240,230,0)'); tq.fillStyle = g3; tq.fillRect(x - 70, 0, 140, 32); }
    for (let i = 0; i < 2600; i++) { tq.fillStyle = `rgba(245,245,238,${r4.range(0.1, 0.5)})`; tq.fillRect(r4.range(0, TW), Math.pow(r4(), 1.6) * 30, r4.range(0.8, 2.2), r4.range(0.8, 1.6)); }
    XC.tray = tr;
  }
  const TRAY_Y = 1690;

  function renderView(ctx, t, cam, items) {
    const [cx, cy, z] = cam;
    const apply = (c) => { c.translate(W / 2, HH / 2); c.scale(z, z); c.translate(-cx, -cy); };
    const toS = ([x, y]) => [(x - cx) * z + W / 2, (y - cy) * z + HH / 2];
    ctx.save(); apply(ctx); ctx.imageSmoothingEnabled = true;
    ctx.drawImage(XC.slate, WX0, WY0, WWD, WHT);
    ctx.fillStyle = XC.toothPat || (XC.toothPat = ctx.createPattern(XC.tooth, 'repeat')); ctx.fillRect(WX0, WY0, WWD, WHT);
    ctx.restore();
    { const lit = ctx.createRadialGradient(470, 700, 140, 540, 960, 1300); lit.addColorStop(0, 'rgba(120,150,130,0.10)'); lit.addColorStop(1, 'rgba(0,10,5,0.35)'); ctx.fillStyle = lit; ctx.fillRect(0, 0, W, HH); }
    // ---- chalk ----
    const CL = XC.CL || (XC.CL = H.layer(W, HH)), c = CL.getContext('2d', { willReadFrequently: true });
    c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, W, HH); c.lineCap = 'round'; c.lineJoin = 'round';
    const nz = NZ;
    const chalk = (P, rgb, w, seed, prog) => {
      if (prog < 1) P = P.slice(0, Math.max(2, Math.ceil(P.length * prog)));
      const rr = H.rng(seed), N = normals(P);
      for (let k = 0; k < 4; k++) {
        const off = (k / 3 - 0.5) * w * 0.7 + rr.range(-0.5, 0.5), a = 0.9 * rr.range(0.75, 1);
        c.lineWidth = w * rr.range(0.5, 0.72);
        for (let i = 0; i < P.length - 1; i += 6) {
          c.strokeStyle = H.rgba(rgb, Math.min(1, a * (0.7 + 0.3 * nz.n2(i * 0.04 + k, seed * 0.17))));
          c.beginPath();
          for (let j = i; j <= Math.min(P.length - 1, i + 6); j++) { const x = P[j][0] + N[j][0] * off, y = P[j][1] + N[j][1] * off; j === i ? c.moveTo(x, y) : c.lineTo(x, y); }
          c.stroke();
        }
      }
    };
    const meas = (it, p) => { const w = measure(it.s, it.font, it.size), x0 = it.align === 'center' ? it.x - w / 2 : it.x; const w2 = measure(it.s.slice(0, Math.ceil(it.s.length * p)), it.font, it.size); return [x0 + w2, it.y - it.size * 0.3]; };
    const vx0 = cx - W / 2 / z - 300, vx1 = cx + W / 2 / z + 300; // cull far-away boards
    c.save(); apply(c);
    for (const it of items) {
      const p = it.inst ? (it.prog == null ? 1 : it.prog) : win(t, it.a, it.b);
      if (p <= 0) continue;
      const ix = it.k === 'line' ? it.pts[0][0] : it.x; if (ix < vx0 - 600 || ix > vx1 + 600) continue;
      const rgb = COL[it.role];
      if (it.k === 'line') {
        if (it.w < 0.1) continue;
        const seed = it.seed != null ? it.seed : ((it.pts[0][0] * 13 + it.pts[0][1] * 7) | 0) + 3;
        chalk(wob(seg(it.pts, 2.5), nz, Math.abs(seed) % 89, it.inst ? 0.5 : 1.3), rgb, it.w * 1.45, Math.abs(seed), p);
      } else if (it.k === 'dot') {
        c.fillStyle = H.rgba(rgb, 0.9); c.beginPath(); c.arc(it.x, it.y, it.r * 1.1, 0, 7); c.fill();
      } else {
        c.save(); c.font = fontOf(it);
        const wAll = c.measureText(it.s).width, x0 = it.align === 'center' ? it.x - wAll / 2 : it.x;
        c.translate(x0, it.y); c.rotate(it.rot || 0);
        const rr = H.rng((it.s.length * 31 + (Math.abs(it.x) | 0)) % 991), n = Math.ceil(it.s.length * p);
        let px = 0;
        for (let i = 0; i < n; i++) {
          const ch = it.s[i], w = c.measureText(ch).width;
          c.fillStyle = H.rgba(rgb, 0.95 * rr.range(0.8, 1));
          c.save(); c.translate(px, rr.range(-1.5, 1.5)); c.rotate(rr.range(-0.04, 0.04)); c.fillText(ch, 0, 0);
          if (it.font === 'num') { c.fillStyle = H.rgba(H.mix(rgb, [255, 255, 255], 0.4), 0.85); c.fillText(ch, 0.8, -0.6); } // numbers pressed harder: a second pass of chalk
          c.restore();
          px += w;
        }
        c.restore();
      }
    }
    c.restore();
    // grain anchored to the board: chalk only catches the slate's high points
    {
      const id = c.getImageData(0, 0, W, HH), d = id.data, iz = 1 / z;
      for (let i = 0, p = 0; i < d.length; i += 4, p++) {
        const a = d[i + 3] / 255; if (!a) continue;
        const x = p % W, y = (p / W) | 0;
        const wx = ((x - W / 2) * iz + cx) * 1.1 | 0, wy = ((y - HH / 2) * iz + cy) * 1.1 | 0;
        let h = Math.imul(wx, 374761393) + Math.imul(wy, 668265263); h = Math.imul(h ^ (h >>> 13), 1274126177); h = ((h ^ (h >>> 16)) >>> 0) / 4294967296;
        const h2 = nz.n2(wx * 0.18, wy * 0.18) * 0.5 + 0.5;
        const g = h * 0.5 + h2 * 0.5;
        d[i + 3] = 255 * Math.min(1, a * 1.15) * H.clamp((g - (1 - a) * 0.95 - 0.06) * 3.0);
      }
      c.putImageData(id, 0, 0);
    }
    ctx.save(); ctx.filter = 'blur(4px)'; ctx.globalAlpha = 0.22; ctx.drawImage(CL, 0, 0); ctx.restore();
    ctx.drawImage(CL, 0, 0);
    // ---- oak frame top, chalk tray and the wall below ----
    ctx.save(); apply(ctx);
    ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.fillRect(WX0, TRAY_Y - 8, WWD, 8);
    for (let x = WX0; x < WX0 + WWD; x += 2400) ctx.drawImage(XC.tray, x, TRAY_Y);
    { const g = ctx.createLinearGradient(0, TRAY_Y + 96, 0, TRAY_Y + 400); g.addColorStop(0, '#2b1c10'); g.addColorStop(1, '#1a120b'); ctx.fillStyle = g; ctx.fillRect(WX0, TRAY_Y + 96, WWD, 400); }
    { const g = ctx.createLinearGradient(0, -80, 0, 30); g.addColorStop(0, '#5e3a1c'); g.addColorStop(0.7, '#8a5a30'); g.addColorStop(1, '#3e2510'); ctx.fillStyle = g; ctx.fillRect(WX0, -300, WWD, 330); ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(WX0, 30, WWD, 6); }
    // chalk sticks and the felt eraser resting on the ledge
    [[200, 92, [242, 242, 236], -0.03], [1640, 48, [246, 220, 110], 0.05], [3260, 60, [242, 150, 172], -0.02], [4700, 40, [150, 205, 238], 0.08], [6250, 70, [242, 242, 236], 0.04], [7700, 50, [246, 220, 110], -0.05], [9150, 56, [242, 150, 172], 0.03]].forEach(([x, len, col, rot]) => {
      ctx.save(); ctx.translate(x, TRAY_Y + 12); ctx.rotate(rot);
      ctx.fillStyle = 'rgba(30,15,5,0.35)'; ctx.beginPath(); ctx.ellipse(len / 2 + 3, 8, len / 2 + 2, 4, 0, 0, 7); ctx.fill();
      const g2 = ctx.createLinearGradient(0, -8, 0, 8); g2.addColorStop(0, H.rgba(H.mix(col, '#ffffff', 0.5))); g2.addColorStop(0.4, H.rgba(col)); g2.addColorStop(1, H.rgba(H.mix(col, '#000000', 0.35)));
      ctx.fillStyle = g2; ctx.beginPath(); ctx.roundRect(0, -8, len, 16, 7); ctx.fill();
      ctx.fillStyle = H.rgba(H.mix(col, '#ffffff', 0.3)); ctx.beginPath(); ctx.ellipse(len - 2, 0, 3, 8, 0, 0, 7); ctx.fill();
      ctx.restore();
    });
    ctx.restore();
    // ---- air dust, vignette, chalk stick ----
    const rr = H.rng(90);
    for (let i = 0; i < 90; i++) { const x0 = rr.range(0, W), sp = rr.range(8, 22), ph = rr.range(0, 2000); const y = ((ph + t * sp) % 1960) - 20, x = x0 + Math.sin(t * 0.8 + i) * 8; ctx.fillStyle = `rgba(240,244,236,${rr.range(0.1, 0.3)})`; ctx.beginPath(); ctx.arc(x, y, rr.range(0.7, 1.6), 0, 7); ctx.fill(); }
    H.vignette(ctx, W, HH, 0.35, '0,8,4');
    const tp = tipOf(items, t, meas);
    if (tp) {
      const [tx, ty2] = toS(tp), ang = 0.8;
      for (let i = 0; i < 26; i++) { const r3 = H.rng(Math.floor(t * 30) * 100 + i); ctx.fillStyle = `rgba(240,244,236,${r3.range(0.15, 0.5)})`; ctx.fillRect(tx + r3.range(-14, 14), ty2 + r3.range(0, 34), r3.range(1, 2.4), r3.range(1, 2.4)); }
      ctx.save();
      ctx.save(); ctx.filter = 'blur(6px)'; ctx.fillStyle = 'rgba(0,10,5,0.4)'; ctx.translate(tx + 18, ty2 + 22); ctx.rotate(ang); ctx.fillRect(4, -9, 104, 18); ctx.restore();
      ctx.translate(tx, ty2); ctx.rotate(ang);
      const g2 = ctx.createLinearGradient(0, -10, 0, 10); g2.addColorStop(0, '#ffffff'); g2.addColorStop(0.45, '#ecece4'); g2.addColorStop(1, '#a9aaa2');
      ctx.fillStyle = g2; ctx.beginPath(); ctx.moveTo(0, -6); ctx.lineTo(8, -10); ctx.lineTo(112, -10); ctx.lineTo(112, 10); ctx.lineTo(8, 10); ctx.lineTo(0, 5); ctx.closePath(); ctx.fill();
      ctx.restore();
    }
  }

  // felt eraser crossing the screen in a zigzag; the new board shows behind it
  function drawEraser(ctx, x, y, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    ctx.save(); ctx.filter = 'blur(10px)'; ctx.fillStyle = 'rgba(0,10,5,0.45)'; ctx.fillRect(-150, -40, 320, 110); ctx.restore();
    const eg = ctx.createLinearGradient(0, -60, 0, 10); eg.addColorStop(0, '#c48a52'); eg.addColorStop(1, '#8a5a30');
    ctx.fillStyle = eg; ctx.beginPath(); ctx.roundRect(-170, -60, 340, 76, 10); ctx.fill();
    ctx.strokeStyle = 'rgba(60,34,14,0.35)'; ctx.lineWidth = 2; for (let i = 0; i < 9; i++) { ctx.beginPath(); ctx.moveTo(-160, -50 + i * 7); ctx.lineTo(160, -52 + i * 7); ctx.stroke(); }
    ctx.fillStyle = '#5c5c5c'; ctx.fillRect(-166, 12, 332, 34);
    ctx.fillStyle = 'rgba(240,240,235,0.6)'; ctx.fillRect(-166, 30, 332, 16);
    ctx.restore();
  }

  function explainer(ctx, Wd, Hd, t) {
    if (!NZ) NZ = H.makeNoise(31);
    if (!XC.slate) buildSlate();
    const items = story(t);
    const wp = WIPES.find((w) => t > w.t0 && t < w.t1);
    if (!wp) renderView(ctx, t, camAt(t), items);
    else {
      const u = (t - wp.t0) / (wp.t1 - wp.t0);
      renderView(ctx, t, camAt(wp.t0), items);
      const NL = XC.NL || (XC.NL = H.layer(W, HH)), nc = NL.getContext('2d');
      nc.setTransform(1, 0, 0, 1, 0, 0); nc.globalAlpha = 1; nc.filter = 'none'; nc.clearRect(0, 0, W, HH);
      renderView(nc, t, camAt(wp.t1), items);
      // zigzag passes: 4 rows, each crossing the full width; the cleared area grows behind the felt
      const rows = 4, rowH = HH / rows, pos = u * rows, row = Math.min(rows - 1, Math.floor(pos)), f = pos - row, dir = row % 2 ? -1 : 1;
      const ex = dir > 0 ? -200 + f * (W + 400) : W + 200 - f * (W + 400), ey = row * rowH + rowH * 0.5;
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, row * rowH);
      const x0 = dir > 0 ? 0 : ex, x1 = dir > 0 ? ex : W; ctx.rect(x0, row * rowH, Math.max(0, x1 - x0), rowH);
      ctx.clip(); ctx.drawImage(NL, 0, 0);
      // a cloudy smear left by the felt, fading
      ctx.globalAlpha = 0.16 * (1 - u); ctx.filter = 'blur(30px)'; ctx.fillStyle = 'rgb(205,220,205)';
      for (let r = 0; r <= row; r++) ctx.fillRect(0, r * rowH + rowH * 0.25, W, rowH * 0.5);
      ctx.restore();
      drawEraser(ctx, ex, ey, dir * 0.08 + Math.sin(t * 40) * 0.02);
    }
    H.grain(ctx, Wd, Hd, 0.03, 5 + (Math.floor(t * 12) % 4));
  }

  // ---------- sound: chalk on slate, scored straight from the story's own strokes ----------
  function scoreSound(k) {
    const D = DURATION;
    const knock = (t, g = 1, pan = 0, minor = true) => { k.tone(t, { f: [[0, 150], [0.05, 90]], dur: 0.07, gain: 0.1 * g, pan, minor, verb: 0.12 }); k.noise(t, { dur: 0.025, filter: 'bandpass', f: 900, q: 1.2, gain: 0.15 * g, a: 0.001, pan, minor, verb: 0.12 }); };
    const LV = 0.45;
    const ch = (a, b, g = 1, pan = 0, minor = true) => { const d = Math.max(0.03, b - a); g *= LV; knock(a, g, pan, minor); k.play('stroke', a, { material: 'chalk', dur: d, gain: 0.95 * g, pan, minor }); };
    const write = (s, a, b, g = 0.8, pan = 0) => { const n = s.length, re = /\S+/g; let m; while ((m = re.exec(s))) ch(a + (b - a) * m.index / n, a + (b - a) * (m.index + m[0].length) / n, g, pan, true); };
    const tap = (t, g = 1, pan = 0) => { k.noise(t, { dur: 0.02, filter: 'bandpass', f: 1500, q: 1.4, gain: 0.25 * g, a: 0.001, pan, minor: true }); k.tone(t, { f: 180, dur: 0.035, gain: 0.07 * g, pan, minor: true }); };
    const dust = (t, g = 1, pan = 0) => k.noise(t, { dur: 0.45, color: 'pink', filter: 'bandpass', f: 1400, q: 0.5, gain: 0.05 * g, a: 0.12, pan, minor: true });
    k.bed('room', 0, D, { gain: 0.5 });
    // every timed stroke and word in the story gets its chalk drag (merged when strokes chain closely)
    const all = story(D + 1).map((it) => (it.la != null ? { ...it, inst: false, a: it.la, b: it.lb } : it)).filter((it) => !it.inst && it.a >= 0 && !(it.k === 'line' && it.w < 0.1)).sort((a, b) => a.a - b.a);
    let lastEnd = -1;
    for (const it of all) {
      const pan = H.clamp(((it.k === 'line' ? it.pts[0][0] : it.x) % 1500 - 540) / 900, -0.4, 0.4);
      if (it.k === 'text') write(it.s, it.a, it.b, it.size > 100 ? 1.0 : 0.75, pan);
      else if (it.k === 'dot') tap(it.a, 0.9, pan);
      else if (it.hit) { ch(it.a, it.b, 1.4, pan, false); dust(it.b - 0.05, 1.2, pan); }
      else if (it.a > lastEnd - 0.02 || it.b - it.a > 0.12) ch(it.a, it.b, 0.85, pan);
      lastEnd = Math.max(lastEnd, it.b);
    }
    // camera tracking along the slate: a soft air move under the chalk leader
    PANS.forEach((p) => k.play('whoosh', p.t0 - 0.05, { dur: p.t1 - p.t0 + 0.1, gain: 0.45, top: 1600 }));
    // eraser wipes: felt rubbing in four passes, then dust
    WIPES.forEach((w) => { const d = w.t1 - w.t0; for (let r = 0; r < 4; r++) k.play('erase', w.t0 + r * d / 4, { dur: d / 4, gain: 1.2 }); dust(w.t1 - 0.05, 1.5); });
    // key moments
    k.play('impact', T(0, 'five') - 0.1, { gain: 0.55 }); k.play('ding', T(0, 'million') + 0.1, { f: 'D6', gain: 0.3 });
    k.play('sparkle', T(0, 'tiny') - 0.1, { n: 6, gain: 0.35 });
    k.play('pop', T(0, 'why') - 0.05, { f: 600, gain: 0.55 });
    k.play('ding', T(1, 'hair'), { f: 'E5', gain: 0.3 });
    k.play('pop', T(2, 'muscle'), { f: 520, gain: 0.5 });
    k.play('ding', T(3, 'pili'), { f: 'B5', gain: 0.35 });
    k.tone(T(4, 'cold'), { f: [[0, 1400], [0.6, 900]], type: 'sine', dur: 0.6, gain: 0.07, a: 0.03 });
    k.play('impact', T(5, 'scared') - 0.05, { gain: 0.45 });
    k.play('neon', T(6, 'fire') - 0.1, { dur: 0.3, gain: 0.5 }); k.play('ding', T(6, 'one'), { f: 'G5', gain: 0.3 });
    for (let i = 0; i < 5; i++) k.play('pop', T(7, 'squeeze') - 0.05 + i * 0.03, { f: 500 + i * 70, gain: 0.35, minor: true });
    k.play('swish', T(8, 'yanks') - 0.05, { dur: 0.6, gain: 0.55 }); k.play('ding', T(8, 'upright'), { f: 'A5', gain: 0.35 });
    k.tone(T(9, 'pushes'), { f: [[0, 300], [1.0, 700]], type: 'sine', dur: 1.0, gain: 0.07, a: 0.05 });
    k.play('impact', T(10, 'goosebump') - 0.1, { gain: 0.6 }); k.play('success', T(10, 'goosebump') + 0.25, { f: 'G5', gain: 0.45 });
    k.play('sparkle', T(11, 'superpower') - 0.1, { n: 7, gain: 0.45 });
    for (let i = 0; i < 6; i++) k.play('pop', T(12, 'traps') + i * 0.13, { f: 700 + i * 50, gain: 0.3, minor: true });
    k.play('ding', T(13, 'coat'), { f: 'E5', gain: 0.3 });
    k.play('swish', T(14, 'puffs') - 0.1, { dur: 0.45, gain: 0.6 }); k.play('impact', T(14, 'up'), { gain: 0.45 });
    k.play('stamp', T(15, 'bigger'), { gain: 0.5 });
    k.play('thud', T(16, 'fur') + 0.25, { f: 160, gain: 0.5 });
    k.play('sparkle', T(17, 'bumps') - 0.1, { n: 6, gain: 0.35 });
    k.play('ding', T(18, 'song'), { f: 'C6', gain: 0.3 }); k.play('ding', T(18, 'song') + 0.18, { f: 'E6', gain: 0.25 });
    k.play('pop', T(19, 'feelings'), { f: 560, gain: 0.45 }); k.play('neon', T(19, 'fire') - 0.05, { dur: 0.3, gain: 0.4 });
    k.play('ding', T(20, 'mice'), { f: 'G5', gain: 0.3 });
    k.play('sparkle', T(21, 'stem') - 0.1, { n: 7, gain: 0.45 });
    k.play('success', T(22, 'fur'), { f: 'A5', gain: 0.4 });
    k.play('pop', T(23, 'what') - 0.1, { f: 700, gain: 0.55 });
    k.play('impact', T(23, 'goosebumps') - 0.1, { gain: 0.5 });
    k.play('success', B[23].e + 0.3, { f: 'D6', gain: 0.45 });
  
  }


  // fonts used by this style (loaded with the shell's other fonts before the first frame)
  try { if (document.fonts) ['700 120px "Kalam"', '400 60px "Patrick Hand"'].forEach((f) => document.fonts.load(f, 'AaZz09?!~')); } catch (e) { /* render anyway */ }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
