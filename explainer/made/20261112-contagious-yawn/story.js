// ================= Chalkboard Lesson, vertical 1080x1920: "Why is yawning contagious?" =================
// Unattended run: no storyboard step. BEATS copied from phrases.json (Kokoro am_michael).
// One long slate: seven stretches of board, the camera tracks along some and the felt eraser wipes for others.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'p0', s: 0.25, e: 2.76, w: {"why": 0.25, "cant": 0.44, "you": 0.7, "stop": 0.89, "yourself": 1.15, "from": 1.67, "catching": 1.93, "a": 2.44, "yawn": 2.51} },  // Why can't you stop yourself from catching a yawn?
    { id: 'p1', s: 3.31, e: 6.06, w: {"even": 3.31, "reading": 3.63, "the": 4.2, "word": 4.44, "yawn": 4.77, "can": 5.09, "set": 5.33, "one": 5.58, "off": 5.82} },  // Even reading the word yawn can set one off.
    { id: 'p2', s: 6.52, e: 8.35, w: {"you": 6.52, "might": 6.71, "be": 7.03, "fighting": 7.15, "one": 7.66, "right": 7.85, "now": 8.16} },  // You might be fighting one right now.
    { id: 'p3', s: 8.78, e: 11.49, w: {"seeing": 8.78, "hearing": 9.22, "or": 9.73, "just": 9.88, "thinking": 10.17, "about": 10.76, "a": 11.12, "yawn": 11.2} },  // Seeing, hearing, or just thinking about a yawn
    { id: 'p4', s: 11.49, e: 12.73, w: {"can": 11.49, "trigger": 11.71, "your": 12.22, "own": 12.51} },  // can trigger your own.
    { id: 'p5', s: 13.11, e: 14.21, w: {"in": 13.11, "one": 13.27, "duke": 13.51, "study": 13.82} },  // In one Duke study,
    { id: 'p6', s: 14.71, e: 18.57, w: {"three": 14.71, "hundred": 15.03, "twenty": 15.48, "eight": 15.87, "people": 16.19, "watched": 16.58, "a": 17.03, "three2": 17.09, "minute": 17.41, "video": 17.8, "of": 18.12, "yawns": 18.25} },  // three hundred twenty eight people watched a three minute video of yawns.
    { id: 'p7', s: 19.03, e: 21.51, w: {"two": 19.03, "hundred": 19.25, "twenty": 19.76, "two2": 20.19, "of": 20.41, "them": 20.56, "yawned": 20.85, "too": 21.29} },  // Two hundred twenty two of them yawned too.
    { id: 'p8', s: 21.93, e: 23.54, w: {"thats": 21.93, "about": 22.28, "two": 22.63, "out": 22.84, "of": 23.05, "three": 23.19} },  // That's about two out of three!
    { id: 'p9', s: 23.98, e: 25.51, w: {"and": 23.98, "whos": 24.2, "yawning": 24.49, "matters": 25.0} },  // And who's yawning matters.
    { id: 'p10', s: 25.82, e: 29.55, w: {"an": 25.82, "italian": 25.97, "study": 26.49, "found": 26.86, "yawns": 27.23, "spread": 27.61, "fastest": 28.05, "between": 28.58, "family": 29.1} },  // An Italian study found yawns spread fastest between family,
    { id: 'p11', s: 30.05, e: 30.91, w: {"then": 30.05, "friends": 30.36} },  // then friends,
    { id: 'p12', s: 31.33, e: 33.19, w: {"and": 31.33, "slowest": 31.54, "between": 32.04, "strangers": 32.55} },  // and slowest between strangers.
    { id: 'p13', s: 33.61, e: 35.85, w: {"so": 33.61, "some": 33.75, "scientists": 34.04, "link": 34.76, "it": 35.05, "to": 35.2, "empathy": 35.34} },  // So some scientists link it to empathy,
    { id: 'p14', s: 36.39, e: 39.31, w: {"your": 36.39, "brain": 36.65, "quietly": 36.98, "copying": 37.45, "the": 37.91, "people": 38.11, "you": 38.51, "care": 38.71, "about": 38.98} },  // your brain quietly copying the people you care about.
    { id: 'p15', s: 39.68, e: 42.87, w: {"little": 39.68, "kids": 40.11, "dont": 40.4, "catch": 40.69, "yawns": 41.06, "until": 41.42, "theyre": 41.78, "about": 42.22, "four": 42.58} },  // Little kids don't catch yawns until they're about four.
    { id: 'p16', s: 43.35, e: 45.15, w: {"but": 43.35, "your": 43.58, "dog": 43.89, "can": 44.13, "catch": 44.36, "yours": 44.76} },  // But your dog can catch yours.
    { id: 'p17', s: 45.60, e: 46.58, w: {"so": 45.6, "be": 45.8, "honest": 45.99} },  // So be honest.
    { id: 'p18', s: 46.90, e: 48.68, w: {"did": 46.9, "you": 47.1, "yawn": 47.29, "while": 47.56, "watching": 47.89, "this": 48.41} },  // Did you yawn while watching this?
  ];
  const B = BEATS;
  const T = (i, w) => { const v = B[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const DURATION = B[B.length - 1].e + 1.0;
  // scene changes sit in the pauses between phrases
  const gap = (i) => [B[i - 1].e, B[i].s];
  const PANS = [{ i: 3, from: 0 }, { i: 9, from: 2 }, { i: 15, from: 4 }].map((p) => ({ from: p.from, t0: gap(p.i)[0], t1: gap(p.i)[1] }));
  const WIPES = [{ i: 5, from: 1 }, { i: 13, from: 3 }, { i: 17, from: 5 }].map((p) => ({ from: p.from, t0: gap(p.i)[0], t1: gap(p.i)[1] }));

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

  // ---------- shapes ----------
  const lerp = (a, b, u) => a + (b - a) * u;
  // a face with squeezed-shut eyes; the mouth is drawn separately so it can open (live)
  const faceStatic = (x, y, r, sleepy = true) => {
    const o = [circ(x, y, r, r * 1.02, -1.3, 4.95)];
    if (sleepy) { o.push(circ(x - 0.36 * r, y - 0.14 * r, 0.16 * r, 0.08 * r, 0.2, Math.PI - 0.2, 12)); o.push(circ(x + 0.36 * r, y - 0.14 * r, 0.16 * r, 0.08 * r, 0.2, Math.PI - 0.2, 12)); }
    o.push([[x - 0.52 * r, y - 0.36 * r], [x - 0.22 * r, y - 0.44 * r]], [[x + 0.22 * r, y - 0.44 * r], [x + 0.52 * r, y - 0.36 * r]]);
    return o;
  };
  const openEyes = (x, y, r) => [[x - 0.36 * r, y - 0.14 * r], [x + 0.36 * r, y - 0.14 * r]];
  const mouth = (x, y, r, open) => circ(x, y + 0.42 * r - open * 0.1 * r, (0.16 + 0.1 * open) * r, (0.04 + 0.3 * open) * r, -1.4, 4.95, 30);
  const eyeIcon = (x, y) => [quad([x - 120, y], [x, y - 100], [x + 120, y], 16), quad([x - 120, y], [x, y + 100], [x + 120, y], 16), circ(x, y, 40, 40)];
  const earIcon = (x, y) => [cubic([x - 30, y - 100], [x + 90, y - 150], [x + 110, y + 30], [x + 20, y + 70], 20), cubic([x + 20, y + 70], [x - 20, y + 95], [x - 10, y + 125], [x - 50, y + 125], 12), quad([x - 5, y - 45], [x + 55, y - 55], [x + 35, y + 10], 10), circ(x - 100, y, 40, 60, Math.PI - 0.7, Math.PI + 0.7, 10), circ(x - 100, y, 75, 105, Math.PI - 0.6, Math.PI + 0.6, 12)];
  const thought = (x, y) => { const o = []; [[-70, 0, 55], [-10, -40, 65], [60, -10, 55], [30, 40, 50], [-40, 40, 48]].forEach(([dx, dy, r]) => o.push(circ(x + dx, y + dy, r, r * 0.85))); o.push(circ(x - 110, y + 105, 20, 18), circ(x - 140, y + 145, 11, 10)); return o; };
  const person = (x, y, s) => [circ(x, y, 32 * s, 34 * s), quad([x - 58 * s, y + 100 * s], [x, y + 18 * s], [x + 58 * s, y + 100 * s], 14)];
  const heart = (x, y, r) => [cubic([x, y + r], [x - 1.6 * r, y - 0.2 * r], [x - 0.6 * r, y - 1.3 * r], [x, y - 0.45 * r], 24), cubic([x, y - 0.45 * r], [x + 0.6 * r, y - 1.3 * r], [x + 1.6 * r, y - 0.2 * r], [x, y + r], 24)];
  const brain = (x, y, r) => {
    const o = [], n = 90; for (let i = 0; i <= n; i++) { const a = i / n * Math.PI * 2, q = r * (1 + 0.075 * Math.sin(a * 9)); o.push([x + Math.cos(a) * q * 1.08, y + Math.sin(a) * q * 0.8]); }
    return [o, cubic([x - r * 0.65, y - r * 0.1], [x - r * 0.3, y - r * 0.55], [x - r * 0.1, y + r * 0.25], [x + r * 0.2, y - r * 0.2], 20), cubic([x + r * 0.2, y - r * 0.2], [x + r * 0.42, y - r * 0.5], [x + r * 0.45, y + r * 0.2], [x + r * 0.75, y], 14), cubic([x - r * 0.5, y + r * 0.35], [x - r * 0.2, y + r * 0.15], [x, y + r * 0.6], [x + r * 0.35, y + r * 0.35], 14)];
  };
  const screen = (x, y, w, h) => [rrect(x - w / 2, y - h / 2, w, h, 18), [[x - 60, y + h / 2], [x - 90, y + h / 2 + 50]], [[x + 60, y + h / 2], [x + 90, y + h / 2 + 50]], [[x - 130, y + h / 2 + 50], [x + 130, y + h / 2 + 50]]];
  const pieWedge = (x, y, r, frac) => { const a0 = -Math.PI / 2, a1 = a0 + frac * Math.PI * 2, o = [[[x, y], [x + Math.cos(a0) * r, y + Math.sin(a0) * r]], [[x, y], [x + Math.cos(a1) * r, y + Math.sin(a1) * r]]]; for (let a = a0 + 0.2; a < a1 - 0.05; a += 0.2) o.push([[x + Math.cos(a) * r * 0.15, y + Math.sin(a) * r * 0.15], [x + Math.cos(a) * r * 0.92, y + Math.sin(a) * r * 0.92]]); return o; };
  const kid = (x, y, s) => [circ(x, y, 52 * s, 54 * s), [[x, y + 54 * s], [x, y + 200 * s]], [[x - 80 * s, y + 110 * s], [x, y + 90 * s], [x + 80 * s, y + 110 * s]], [[x - 60 * s, y + 300 * s], [x, y + 200 * s], [x + 60 * s, y + 300 * s]]];
  const dogHead = (x, y, s) => [circ(x, y, 0.26 * s, 0.28 * s, -1.4, 4.9), cubic([x - 0.16 * s, y - 0.22 * s], [x - 0.42 * s, y - 0.2 * s], [x - 0.46 * s, y + 0.18 * s], [x - 0.3 * s, y + 0.24 * s], 20), cubic([x - 0.3 * s, y + 0.24 * s], [x - 0.22 * s, y + 0.1 * s], [x - 0.24 * s, y - 0.02 * s], [x - 0.22 * s, y - 0.1 * s], 12), cubic([x + 0.16 * s, y - 0.22 * s], [x + 0.42 * s, y - 0.2 * s], [x + 0.46 * s, y + 0.18 * s], [x + 0.3 * s, y + 0.24 * s], 20), cubic([x + 0.3 * s, y + 0.24 * s], [x + 0.22 * s, y + 0.1 * s], [x + 0.24 * s, y - 0.02 * s], [x + 0.22 * s, y - 0.1 * s], 12), circ(x, y + 0.04 * s, 0.05 * s, 0.035 * s, 0, 6.4)];
  const check = (x, y, r) => [[[x - r, y], [x - r * 0.3, y + r * 0.7], [x + r, y - r * 0.8]]];
  const cross = (x, y, r) => [[[x - r, y - r], [x + r, y + r]], [[x + r, y - r], [x - r, y + r]]];

  // ---------- story ----------
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
        live: (pts, role, w, a, b2, seed) => items.push({ k: 'line', pts: P(pts), role, w, a: -1, b: 0, inst: true, prog: win(t, a, b2), seed, la: a, lb: b2 }),
      };
    };
    // a yawn: mouth opens over [a, a+0.8], holds, then closes over [c, c+0.6]
    const yawnOpen = (a, c = 1e9) => eio(win(t, a, a + 0.8)) * (1 - 0.75 * eio(win(t, c, c + 0.6)));
    // ===== board 0: the hook =====
    {
      const D = mk(0);
      D.text("why can't you stop", 540, 270, 96, 'title', 'ink', T(0, 'why') - 0.15, T(0, 'yourself') + 0.1, { rot: -0.015 });
      D.text('catching a yawn?', 540, 420, 128, 'title', 'acc1', T(0, 'catching') - 0.15, T(0, 'yawn') + 0.3, { rot: -0.02 });
      const fx = 540, fy = 830, fr = 250;
      D.many(faceStatic(fx, fy, fr), 'ink', 8, T(0, 'stop') - 0.1, T(0, 'catching'));
      D.live(mouth(fx, fy, fr, yawnOpen(T(0, 'yawn') - 0.1, T(1, 'set'))), 'acc2', 8, T(0, 'catching'), T(0, 'yawn'), 11);
      D.text('read this:', 330, 1210, 84, 'label', 'ink', T(1, 'reading') - 0.1, T(1, 'reading') + 0.35);
      D.text('YAWN', 540, 1420, 220, 'title', 'acc2', T(1, 'word') - 0.15, T(1, 'yawn') + 0.25, { rot: -0.02 });
      const ap = cubic([860, 1290], [960, 1200], [930, 1080], [790, 990]);
      arrow(D, ap, 'acc1', 7, T(1, 'set') - 0.1, T(1, 'off') + 0.1);
      D.text('set off!', 870, 1210, 76, 'label', 'acc1', T(1, 'set'), T(1, 'off') + 0.2);
      D.line(circ(fx, fy + 20, fr + 70, fr + 60, -2.2, 4.2), 'acc3', 7, T(2, 'fighting') - 0.1, T(2, 'one') + 0.1, { hit: true });
      D.text('right now?', 540, 1590, 112, 'title', 'acc3', T(2, 'right') - 0.15, T(2, 'now') + 0.3, { rot: -0.02 });
    }
    // ===== board 1: see, hear, think -> yawn =====
    {
      const D = mk(1);
      D.text('yawn triggers', 540, 280, 120, 'title', 'ink', B[3].s - 0.25, B[3].s + 0.3, { rot: -0.015 });
      const S = T(3, 'seeing'), HE = T(3, 'hearing'), TH = T(3, 'thinking');
      D.many(eyeIcon(200, 520), 'acc4', 7, S - 0.15, S + 0.25); D.dot(200, 520, 16, 'acc4', S + 0.2);
      D.text('see', 200, 700, 88, 'label', 'acc4', S - 0.05, S + 0.25);
      D.many(earIcon(560, 520), 'acc1', 7, HE - 0.15, HE + 0.3);
      D.text('hear', 545, 700, 88, 'label', 'acc1', HE - 0.05, HE + 0.25);
      D.many(thought(890, 500), 'acc3', 6, TH - 0.15, TH + 0.35);
      D.text('think', 890, 700, 88, 'label', 'acc3', TH - 0.05, TH + 0.3);
      const fx = 540, fy = 1130, fr = 190;
      arrow(D, quad([200, 760], [230, 960], [360, 1040]), 'acc4', 6, T(3, 'about') - 0.1, T(3, 'yawn'));
      arrow(D, [[545, 750], [545, 900]], 'acc1', 6, T(3, 'about'), T(3, 'yawn') + 0.05);
      arrow(D, quad([890, 760], [860, 960], [720, 1040]), 'acc3', 6, T(3, 'about') + 0.1, T(3, 'yawn') + 0.1);
      D.many(faceStatic(fx, fy, fr), 'ink', 7, T(3, 'yawn') - 0.1, T(4, 'can'));
      D.live(mouth(fx, fy, fr, yawnOpen(T(4, 'trigger') - 0.1)), 'acc2', 7, T(4, 'can') - 0.1, T(4, 'trigger'), 21);
      D.text('trigger!', 540, 1550, 140, 'title', 'acc2', T(4, 'trigger') - 0.15, T(4, 'trigger') + 0.3, { rot: -0.02 });
    }
    // ===== board 2: the Duke study numbers =====
    {
      const D = mk(2);
      D.text('Duke study', 540, 270, 130, 'title', 'acc4', T(5, 'duke') - 0.15, T(5, 'study') + 0.3, { rot: -0.015 });
      const sx = 470, sy = 560;
      D.many(screen(sx, sy, 560, 300), 'ink', 7, T(6, 'watched') - 0.15, T(6, 'video') + 0.1);
      D.many(faceStatic(sx, sy - 10, 105), 'ink', 5, T(6, 'video') - 0.1, T(6, 'of') + 0.1);
      D.live(mouth(sx, sy - 10, 105, 0.3 + 0.7 * Math.abs(Math.sin((t - 17.5) * 1.6))), 'acc2', 5, T(6, 'of') - 0.1, T(6, 'yawns'), 31);
      D.text('3 min', 890, 520, 104, 'num', 'acc1', T(6, 'three2') - 0.15, T(6, 'minute') + 0.2, { rot: 0.04 });
      // counter, numerals redrawn on twos like the reference
      if (t > T(6, 'three') - 0.1) { const u = win(Math.floor(t * 12) / 12, T(6, 'three') - 0.1, T(6, 'eight') + 0.1); D.text(fmt(328 * eio(u)), 540, 990, 200, 'num', 'ink', 0, 0, { inst: true }); }
      D.text('people', 540, 1090, 84, 'label', 'ink', T(6, 'people') - 0.1, T(6, 'people') + 0.3);
      if (t > T(7, 'two') - 0.1) { const u = win(Math.floor(t * 12) / 12, T(7, 'two') - 0.1, T(7, 'two2') + 0.1); D.text(fmt(222 * eio(u)), 340, 1290, 170, 'num', 'acc2', 0, 0, { inst: true }); }
      D.text('yawned', 740, 1280, 104, 'title', 'acc2', T(7, 'yawned') - 0.15, T(7, 'yawned') + 0.3);
      const px = 290, py = 1500, pr = 115;
      D.line(circ(px, py, pr, pr), 'ink', 7, T(8, 'about') - 0.15, T(8, 'about') + 0.25);
      D.many(pieWedge(px, py, pr, 2 / 3), 'acc1', 5, T(8, 'two') - 0.1, T(8, 'three') + 0.1);
      D.text('≈ 2 in 3', 720, 1545, 140, 'num', 'acc1', T(8, 'two') - 0.15, T(8, 'three') + 0.3, { rot: -0.02 });
    }
    // ===== board 3: family, friends, strangers =====
    {
      const D = mk(3);
      D.text("who's yawning?", 540, 280, 124, 'title', 'ink', T(9, 'whos') - 0.15, T(9, 'matters') + 0.2, { rot: -0.015 });
      D.text('Italian study', 540, 410, 76, 'label', 'acc4', T(10, 'italian') - 0.1, T(10, 'study') + 0.2);
      const rows = [640, 980, 1320], ends = [970, 760, 560], roles = ['acc3', 'acc1', 'acc2'];
      const names = ['family', 'friends', 'strangers'], at = [T(10, 'family'), T(11, 'friends'), T(12, 'strangers')];
      rows.forEach((ry, i) => {
        const a = at[i], gapx = [52, 62, 85][i];
        [-1, 0, 1].forEach((k) => D.many(person(190 + k * gapx, ry - 30 + (k === 0 ? -14 : 0), 0.85), roles[i], 5, a - 0.2 + (k + 1) * 0.08, a + (k + 1) * 0.08));
        if (i === 0) D.many(heart(190, ry - 110, 18), 'acc2', 4, a + 0.2, a + 0.4);
        D.text(names[i], 190, ry + 130, 80, 'label', roles[i], a - 0.05, a + 0.3);
      });
      arrow(D, [[370, rows[0]], [ends[0], rows[0] - 6]], 'acc3', 13, T(10, 'spread') - 0.1, T(10, 'fastest') + 0.1);
      D.text('fastest', 670, rows[0] - 60, 92, 'title', 'acc3', T(10, 'fastest') - 0.15, T(10, 'fastest') + 0.3);
      arrow(D, [[370, rows[1]], [ends[1], rows[1] - 4]], 'acc1', 9, T(11, 'friends') - 0.1, T(11, 'friends') + 0.3);
      const sd = []; for (let x = 370; x < ends[2] - 10; x += 46) sd.push([[x, rows[2]], [x + 26, rows[2]]]);
      D.many(sd, 'acc2', 6, T(12, 'slowest') - 0.1, T(12, 'slowest') + 0.4);
      D.line(head([[370, rows[2]], [ends[2], rows[2]]], 22), 'acc2', 6, T(12, 'slowest') + 0.4, T(12, 'slowest') + 0.5);
      D.text('slowest', 800, rows[2] + 25, 92, 'title', 'acc2', T(12, 'slowest') - 0.15, T(12, 'slowest') + 0.3);
    }
    // ===== board 4: empathy, copying the people you care about =====
    {
      const D = mk(4);
      D.text('empathy?', 540, 300, 150, 'title', 'acc2', T(13, 'empathy') - 0.15, T(13, 'empathy') + 0.35, { rot: -0.02 });
      D.text('some scientists think', 540, 430, 72, 'label', 'ink', T(13, 'some') - 0.1, T(13, 'link') + 0.1);
      D.many(brain(540, 660, 150), 'acc4', 6, T(14, 'brain') - 0.15, T(14, 'brain') + 0.45);
      const lx = 270, rx = 810, fy = 1040, fr = 160;
      D.many(faceStatic(lx, fy, fr), 'ink', 6, B[13].s - 0.05, B[13].s + 0.5);
      D.live(mouth(lx, fy, fr, yawnOpen(B[13].s + 0.4)), 'acc2', 6, B[13].s + 0.3, B[13].s + 0.6, 41);
      D.many(faceStatic(rx, fy, fr, false), 'ink', 6, B[13].s + 0.3, B[13].s + 0.8);
      const cp = T(14, 'copying');
      if (t < cp + 0.3) openEyes(rx, fy, fr).forEach(([ex, ey]) => D.dot(ex, ey, 9, 'ink', B[13].s + 0.8));
      else [-1, 1].forEach((sg) => D.line(circ(rx + sg * 0.36 * fr, fy - 0.14 * fr, 0.16 * fr, 0.08 * fr, 0.2, Math.PI - 0.2, 12), 'ink', 6, 0, 0, { inst: true, seed: 47 + sg }));
      D.live(mouth(rx, fy, fr, 0.12 + 0.88 * eio(win(t, cp + 0.2, cp + 1.0))), 'acc2', 6, B[13].s + 0.7, B[13].s + 0.9, 43);
      D.many(heart(540, 1050, 48), 'acc2', 6, T(13, 'empathy'), T(13, 'empathy') + 0.4);
      const ap = cubic([lx + 60, fy - 200], [lx + 160, fy - 300], [rx - 160, fy - 300], [rx - 60, fy - 200]);
      arrow(D, ap, 'acc1', 7, cp - 0.1, cp + 0.35);
      D.text('copying', 540, 1370, 130, 'title', 'acc1', cp - 0.15, cp + 0.3, { rot: -0.02 });
      D.text('people you care about', 540, 1520, 84, 'label', 'ink', T(14, 'people') - 0.1, T(14, 'about') + 0.2);
    }
    // ===== board 5: kids vs dogs =====
    {
      const D = mk(5);
      D.text('little kids', 290, 280, 104, 'title', 'ink', T(15, 'little') - 0.15, T(15, 'kids') + 0.2, { rot: -0.015 });
      D.many(kid(290, 470, 1.0), 'ink', 7, T(15, 'kids') - 0.1, T(15, 'dont') + 0.2);
      D.text('until', 760, 400, 80, 'label', 'ink', T(15, 'until') - 0.1, T(15, 'until') + 0.25);
      D.text('age 4', 760, 560, 150, 'num', 'acc1', T(15, 'four') - 0.15, T(15, 'four') + 0.25, { rot: -0.02 });
      D.text("don't catch yawns", 760, 680, 66, 'label', 'acc2', T(15, 'dont') - 0.05, T(15, 'yawns') + 0.2);
      D.line([[80, 900], [1000, 892]], 'ink', 4, B[16].s - 0.3, B[16].s);
      const dx = 300, dy = 1180, ds = 420;
      D.many(dogHead(dx, dy, ds), 'acc4', 7, T(16, 'your') - 0.15, T(16, 'dog') + 0.3);
      [-1, 1].forEach((sg) => D.dot(dx + sg * 0.1 * ds, dy - 0.09 * ds, 9, 'acc4', T(16, 'dog') + 0.25));
      D.live(mouth(dx, dy - 0.02 * ds, 0.3 * ds, yawnOpen(T(16, 'catch'))), 'acc2', 6, T(16, 'can') - 0.1, T(16, 'catch'), 51);
      D.text('your dog', 780, 1080, 110, 'title', 'acc4', T(16, 'dog') - 0.15, T(16, 'dog') + 0.3);
      D.text('catches yours', 780, 1230, 84, 'label', 'acc3', T(16, 'catch') - 0.1, T(16, 'yours') + 0.2);
      D.many(check(780, 1390, 60), 'acc3', 11, T(16, 'yours'), T(16, 'yours') + 0.2, { hit: true });
    }
    // ===== board 6: the loop-back question =====
    {
      const D = mk(6);
      D.text('be honest...', 540, 300, 124, 'title', 'acc1', T(17, 'be') - 0.15, T(17, 'honest') + 0.3, { rot: -0.02 });
      const fx = 540, fy = 830, fr = 250;
      D.many(faceStatic(fx, fy, fr), 'ink', 8, B[17].s - 0.05, B[17].e);
      D.live(mouth(fx, fy, fr, 0.1 + 0.9 * yawnOpen(T(18, 'yawn') - 0.1)), 'acc2', 8, B[17].e - 0.2, B[17].e, 61);
      D.text('did you yawn?', 540, 1330, 130, 'title', 'ink', T(18, 'did') - 0.15, T(18, 'yawn') + 0.3, { rot: -0.02 });
      D.text('tell me below!', 540, 1530, 104, 'title', 'acc2', B[18].e - 0.1, B[18].e + 0.35, { rot: -0.02 });
      D.line(circ(540, 1495, 380, 95, -2.0, 4.4), 'acc2', 7, B[18].e + 0.1, B[18].e + 0.5, { hit: true });
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
    [0, 540, 960, 1.04, 0], [8.35, 540, 960, 1.0, 0],
    [8.78, 540, 960, 1.0, 1], [12.73, 540, 960, 1.03, 1],
    [13.11, 540, 960, 1.04, 2], [23.54, 540, 960, 1.0, 2],
    [23.98, 540, 960, 1.0, 3], [33.19, 540, 960, 1.04, 3],
    [33.61, 540, 960, 1.04, 4], [39.31, 540, 960, 1.0, 4],
    [39.68, 540, 960, 1.0, 5], [45.15, 540, 960, 1.03, 5],
    [45.6, 540, 960, 1.04, 6], [60, 540, 960, 1.0, 6],
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
  const WX0 = -700, WY0 = -300, WWD = 13400, WHT = 2700; // world extent of the slate
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
    PANS.forEach((p) => k.play('whoosh', p.t0 - 0.05, { dur: p.t1 - p.t0 + 0.1, gain: 0.45, top: 1600 }));
    WIPES.forEach((w) => { const d = w.t1 - w.t0; for (let r = 0; r < 4; r++) k.play('erase', w.t0 + r * d / 4, { dur: d / 4, gain: 1.2 }); dust(w.t1 - 0.05, 1.5); });
    // key moments
    k.play('pop', T(0, 'why'), { f: 560, gain: 0.45 });
    k.play('riser', T(0, 'catching') - 0.4, { dur: 0.6, gain: 0.3 });
    k.play('ding', T(0, 'yawn'), { f: 'E5', gain: 0.35 });
    k.play('stamp', T(1, 'yawn') - 0.05, { gain: 0.5 });
    k.play('whoosh', T(1, 'set'), { dur: 0.5, gain: 0.35 });
    k.play('impact', T(2, 'fighting'), { gain: 0.35 });
    k.play('pop', T(3, 'seeing'), { f: 620, gain: 0.35 }); k.play('pop', T(3, 'hearing'), { f: 700, gain: 0.35 }); k.play('pop', T(3, 'thinking'), { f: 780, gain: 0.35 });
    k.play('sparkle', T(4, 'trigger') - 0.05, { n: 6, gain: 0.4 });
    k.play('ding', T(5, 'duke'), { f: 'G5', gain: 0.3 });
    for (let i = 0; i < 14; i++) k.play('count', T(6, 'three') + i * 0.085, { gain: 0.5 });
    k.play('thud', T(6, 'eight') + 0.1, { f: 150, gain: 0.4 });
    k.play('click', T(6, 'watched'), { gain: 0.6 });
    for (let i = 0; i < 12; i++) k.play('count', T(7, 'two') + i * 0.09, { gain: 0.5 });
    k.play('impact', T(7, 'yawned') - 0.05, { gain: 0.45 });
    k.play('success', T(8, 'three'), { f: 'C6', gain: 0.4 });
    k.play('pop', T(9, 'whos'), { f: 600, gain: 0.4 });
    k.play('whoosh', T(10, 'spread'), { dur: 0.6, gain: 0.4, top: 3200 });
    k.play('ding', T(10, 'family'), { f: 'C6', gain: 0.3 }); k.play('ding', T(11, 'friends'), { f: 'A5', gain: 0.28 }); k.play('ding', T(12, 'strangers'), { f: 'E5', gain: 0.26 });
    k.play('sparkle', T(13, 'empathy') - 0.1, { n: 7, gain: 0.4 });
    k.play('swish', T(14, 'copying') - 0.05, { dur: 0.4, gain: 0.4 });
    k.play('pop', T(15, 'kids'), { f: 680, gain: 0.35 });
    k.play('stamp', T(15, 'four'), { gain: 0.5 });
    k.play('error', T(15, 'dont'), { gain: 0.25 });
    k.play('pop', T(16, 'dog'), { f: 520, gain: 0.4 });
    k.play('success', T(16, 'yours'), { f: 'G5', gain: 0.4 });
    k.play('pop', T(17, 'be') - 0.05, { f: 700, gain: 0.5 });
    k.play('ding', T(18, 'yawn'), { f: 'C6', gain: 0.35 });
    k.play('success', B[18].e + 0.25, { f: 'D6', gain: 0.45 });
  }


  // fonts used by this style (loaded with the shell's other fonts before the first frame)
  try { if (document.fonts) ['700 120px "Kalam"', '400 60px "Patrick Hand"'].forEach((f) => document.fonts.load(f, 'AaZz09?!~')); } catch (e) { /* render anyway */ }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
