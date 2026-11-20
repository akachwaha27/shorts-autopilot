// ================= Chalkboard Lesson, vertical 1080x1920: "Why do your feet grow before the rest of you?" =================
// Unattended run: no storyboard step. BEATS copied from phrases.json (Kokoro am_michael).
// One long slate, six stretches of board: the camera tracks along some, the felt eraser wipes for others.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'p0', s: 0.25, e: 2.70, w: {"your": 0.25, "feet": 0.53, "grow": 0.81, "before": 1.09, "the": 1.51, "rest": 1.72, "of": 2.0, "your2": 2.14, "body": 2.42} },  // Your feet grow before the rest of your body.
    { id: 'p1', s: 3.07, e: 6.12, w: {"its": 3.07, "why": 3.31, "teenagers": 3.55, "can": 4.27, "look": 4.51, "like": 4.83, "baby": 5.15, "giraffes": 5.48} },  // It's why teenagers can look like baby giraffes.
    { id: 'p2', s: 6.58, e: 8.07, w: {"big": 6.58, "feet": 6.88, "long": 7.27, "legs": 7.67} },  // Big feet, long legs,
    { id: 'p3', s: 8.35, e: 9.80, w: {"and": 8.35, "a": 8.54, "body": 8.6, "still": 8.85, "catching": 9.17, "up": 9.67} },  // and a body still catching up.
    { id: 'p4', s: 10.27, e: 11.47, w: {"so": 10.27, "whats": 10.44, "going": 10.87, "on": 11.3} },  // So what's going on?
    { id: 'p5', s: 11.92, e: 14.03, w: {"inside": 11.92, "your": 12.34, "bones": 12.62, "are": 12.97, "growth": 13.18, "plates": 13.61} },  // Inside your bones are growth plates,
    { id: 'p6', s: 14.42, e: 16.82, w: {"soft": 14.42, "strips": 14.72, "of": 15.17, "cartilage": 15.32, "near": 16.0, "each": 16.3, "end": 16.6} },  // soft strips of cartilage near each end.
    { id: 'p7', s: 17.21, e: 18.63, w: {"they": 17.21, "keep": 17.48, "adding": 17.75, "new": 18.15, "bone": 18.35} },  // They keep adding new bone,
    { id: 'p8', s: 19.18, e: 22.25, w: {"until": 19.18, "they": 19.53, "harden": 19.82, "into": 20.25, "solid": 20.53, "bone": 20.89, "and": 21.18, "close": 21.39, "for": 21.75, "good": 21.96} },  // until they harden into solid bone and close for good.
    { id: 'p9', s: 22.65, e: 23.85, w: {"when": 22.65, "puberty": 22.92, "kicks": 23.38, "in": 23.72} },  // When puberty kicks in,
    { id: 'p10', s: 24.27, e: 26.63, w: {"growth": 24.27, "starts": 24.66, "at": 25.05, "the": 25.19, "edges": 25.38, "and": 25.71, "works": 25.91, "inward": 26.23} },  // growth starts at the edges and works inward.
    { id: 'p11', s: 27.08, e: 28.54, w: {"hands": 27.08, "and": 27.46, "feet": 27.7, "go": 28.0, "first": 28.16} },  // Hands and feet go first,
    { id: 'p12', s: 28.99, e: 30.75, w: {"then": 28.99, "your": 29.36, "arms": 29.73, "and": 30.1, "legs": 30.38} },  // then your arms and legs,
    { id: 'p13', s: 30.81, e: 32.15, w: {"and": 30.81, "your": 31.0, "torso": 31.26, "grows": 31.58, "last": 31.9} },  // and your torso grows last.
    { id: 'p14', s: 32.53, e: 33.41, w: {"small": 32.53, "bones": 32.97} },  // Small bones,
    { id: 'p15', s: 33.53, e: 35.64, w: {"like": 33.53, "the": 33.8, "ones": 34.01, "in": 34.28, "your": 34.42, "fingers": 34.69, "and": 35.17, "toes": 35.37} },  // like the ones in your fingers and toes,
    { id: 'p16', s: 36.09, e: 39.03, w: {"mature": 36.09, "faster": 36.56, "than": 37.02, "the": 37.33, "long": 37.56, "bones": 37.87, "in": 38.26, "your": 38.41, "legs": 38.72} },  // mature faster than the long bones in your legs.
    { id: 'p17', s: 39.40, e: 41.64, w: {"thats": 39.4, "why": 39.74, "teens": 39.94, "trip": 40.28, "over": 40.55, "their": 40.82, "own": 41.16, "feet": 41.37} },  // That's why teens trip over their own feet.
    { id: 'p18', s: 42.03, e: 44.59, w: {"then": 42.03, "somewhere": 42.44, "around": 43.36, "13": 43.98, "to": 44.18, "17": 44.39} },  // Then, somewhere around 13 to 17,
    { id: 'p19', s: 45.08, e: 46.37, w: {"the": 45.08, "last": 45.24, "growth": 45.46, "plates": 45.78, "close": 46.1} },  // the last growth plates close,
    { id: 'p20', s: 46.44, e: 49.35, w: {"and": 46.44, "the": 46.72, "rest": 47.0, "of": 47.38, "you": 47.57, "finally": 47.85, "catches": 48.51, "up": 49.16} },  // and the rest of you finally catches up.
    { id: 'p21', s: 49.76, e: 52.27, w: {"so": 49.76, "did": 49.89, "your": 50.1, "feet": 50.37, "show": 50.64, "up": 50.91, "before": 51.05, "the": 51.45, "rest": 51.66, "of": 51.93, "you": 52.07} },  // So, did your feet show up before the rest of you?
  ];
  const B = BEATS;
  const T = (i, w) => { const v = B[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const DURATION = B[B.length - 1].e + 1.0;
  const gap = (i) => [B[i - 1].e, B[i].s];
  const PANS = [{ i: 4, from: 0 }, { i: 14, from: 2 }, { i: 21, from: 4 }].map((p) => ({ from: p.from, t0: gap(p.i)[0], t1: gap(p.i)[1] }));
  const WIPES = [{ i: 9, from: 1 }, { i: 18, from: 3 }].map((p) => ({ from: p.from, t0: gap(p.i)[0], t1: gap(p.i)[1] }));

  // ---------- geometry (from the reference) ----------
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


  // ---------- shapes ----------
  const ell = (x, y, rx, ry) => circ(x, y, rx, ry, -1.4, 4.95);
  // a long bone: two knobbly ends and a shaft; returns { paths, bandTop, bandBot }
  const bone = (cx, top, bot, hw, ew, eh) => {
    const yt = top + eh, yb = bot - eh;
    const g = Math.asin(Math.min(0.95, hw / ew)), yc = eh * Math.cos(g);
    const paths = [
      circ(cx, yt, ew, eh, Math.PI / 2 + g, Math.PI / 2 - g + Math.PI * 2),
      circ(cx, yb, ew, eh, -Math.PI / 2 + g, -Math.PI / 2 - g + Math.PI * 2),
      [[cx - hw, yt + yc], [cx - hw - 4, (yt + yb) / 2], [cx - hw, yb - yc]],
      [[cx + hw, yt + yc], [cx + hw + 4, (yt + yb) / 2], [cx + hw, yb - yc]],
    ];
    return { paths, bandTop: yt + eh + 14, bandBot: yb - eh - 14 };
  };
  // growth plate band across a shaft: outline + hatching
  const band = (cx, y, hw) => {
    const o = [rrect(cx - hw - 14, y - 14, (hw + 14) * 2, 28, 8)];
    for (let x = cx - hw - 4; x < cx + hw + 6; x += 14) o.push([[x, y + 9], [x + 8, y - 9]]);
    return o;
  };
  const footprint = (cx, cy, s) => {
    const P = (pts) => pts.map(([x, y]) => [cx + x * s, cy + y * s]);
    const sole = [
      ...cubic(...P([[0, 210], [-100, 210], [-112, 110], [-92, 30]]), 20),
      ...cubic(...P([[-92, 30], [-72, -50], [-118, -110], [-96, -165]]), 20).slice(1),
      ...cubic(...P([[-96, -165], [-70, -225], [70, -230], [92, -160]]), 20).slice(1),
      ...cubic(...P([[92, -160], [118, -80], [100, 60], [92, 130]]), 20).slice(1),
      ...cubic(...P([[92, 130], [84, 205], [50, 210], [0, 210]]), 16).slice(1),
    ];
    const toes = [[66, -268, 38], [8, -290, 26], [-40, -282, 22], [-78, -262, 19], [-106, -232, 16]].map(([x, y, r]) => circ(cx + x * s, cy + y * s, r * s, r * s * 1.12));
    return [sole, ...toes];
  };
  const teen = (x, y) => ({ // y = top of head
    body: [circ(x, y + 55, 55, 57), [[x, y + 112], [x + 2, y + 370]], [[x, y + 160], [x - 95, y + 320]], [[x, y + 160], [x + 95, y + 320]]],
    legs: [[[x, y + 370], [x - 62, y + 800]], [[x, y + 370], [x + 62, y + 800]]],
    feet: [circ(x - 90, y + 822, 80, 27), circ(x + 90, y + 822, 80, 27)],
  });
  const check = (x, y, r) => [[[x - r, y], [x - r * 0.3, y + r * 0.7], [x + r, y - r * 0.8]]];
  // hatched fill of a vertical bar, rising from the bottom to fraction f
  const vfill = (x0, y1, w, h, f) => { const o = []; for (let y = y1 - 10; y > y1 - h * f + 6; y -= 20) o.push([[x0 + 10, y], [x0 + w - 10, y - 12]]); return o; };
  // hatched fill of a horizontal bar, left to right up to fraction f
  const hfill = (x0, y0, w, h, f) => { const o = []; for (let x = x0 + 12; x < x0 + w * f - 8; x += 22) o.push([[x, y0 + h - 12], [x + 16, y0 + 12]]); return o; };

  // ---------- story ----------
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
        inst: (list, role, w, seed) => list.forEach((pts, i) => items.push({ k: 'line', pts: P(pts), role, w, a: -1, b: 0, inst: true, seed: seed + i })),
      };
    };
    // ===== board 0: the hook =====
    {
      const D = mk(0);
      D.text('your FEET', 540, 300, 130, 'title', 'ink', T(0, 'your') - 0.15, T(0, 'feet') + 0.25, { rot: -0.015 });
      D.text('grow first!', 540, 440, 120, 'title', 'acc1', T(0, 'grow') - 0.15, T(0, 'before') + 0.3, { rot: -0.02 });
      const F = teen(330, 640);
      D.many(F.feet, 'acc1', 8, T(0, 'feet') - 0.1, T(0, 'feet') + 0.45);
      D.many(F.body, 'ink', 7, T(0, 'rest') - 0.15, T(0, 'body') + 0.2);
      D.many(F.legs, 'ink', 7, T(0, 'body') + 0.1, T(0, 'body') + 0.35);
      D.dot(312, 690, 6, 'ink', T(0, 'body') + 0.2); D.dot(350, 690, 6, 'ink', T(0, 'body') + 0.25);
      D.text('baby giraffe?', 540, 570, 84, 'label', 'acc4', T(1, 'baby') - 0.15, T(1, 'giraffes') + 0.35, { rot: 0.02 });
      D.text('big feet', 800, 1480, 80, 'title', 'acc1', T(2, 'big') - 0.15, T(2, 'feet') + 0.2);
      arrow(D, [[640, 1455], [520, 1462]], 'acc1', 6, T(2, 'feet') - 0.05, T(2, 'feet') + 0.2);
      D.text('long legs', 800, 1240, 80, 'title', 'acc3', T(2, 'long') - 0.15, T(2, 'legs') + 0.2);
      arrow(D, [[640, 1220], [410, 1228]], 'acc3', 6, T(2, 'legs') - 0.05, T(2, 'legs') + 0.25);
      D.text('body:', 800, 860, 76, 'label', 'acc2', T(3, 'body') - 0.15, T(3, 'body') + 0.15);
      D.text('catching up...', 800, 950, 76, 'label', 'acc2', T(3, 'still') - 0.1, T(3, 'up') + 0.1);
      arrow(D, [[600, 880], [380, 900]], 'acc2', 6, T(3, 'catching') - 0.1, T(3, 'up') + 0.1);
    }
    // ===== board 1: growth plates =====
    {
      const D = mk(1);
      D.text("what's going on?", 540, 290, 110, 'title', 'ink', T(4, 'whats') - 0.15, T(4, 'on') + 0.2, { rot: -0.015 });
      const bn = bone(540, 470, 1500, 55, 120, 75);
      D.many(bn.paths, 'ink', 8, T(5, 'inside') - 0.05, T(5, 'growth'));
      const hard = t > T(8, 'harden');
      D.many(band(540, bn.bandTop, 55), hard ? 'ink' : 'acc2', 5, T(5, 'growth') - 0.05, T(5, 'plates') + 0.3);
      D.many(band(540, bn.bandBot, 55), hard ? 'ink' : 'acc2', 5, T(5, 'plates'), T(5, 'plates') + 0.4);
      if (hard) { const u = win(t, T(8, 'harden'), T(8, 'bone')); [bn.bandTop, bn.bandBot].forEach((y, j) => { const o = []; for (let x = 470; x < 470 + 140 * u; x += 9) o.push([[x, y + 10], [x + 6, y - 10]]); D.inst(o, 'ink', 4, 300 + j * 50); }); }
      D.text('growth plate', 830, 668, 68, 'label', 'acc2', T(5, 'growth') - 0.1, T(5, 'plates') + 0.3);
      arrow(D, [[650, bn.bandTop - 4], [612, bn.bandTop]], 'acc2', 5, T(5, 'plates') + 0.2, T(5, 'plates') + 0.35);
      D.text('soft cartilage', 830, 1348, 68, 'label', 'acc2', T(6, 'soft') - 0.1, T(6, 'cartilage') + 0.3);
      arrow(D, [[650, bn.bandBot - 4], [612, bn.bandBot]], 'acc2', 5, T(6, 'cartilage'), T(6, 'cartilage') + 0.15);
      const da = [[390, 1270], [390, 700]];
      arrow(D, da, 'acc1', 7, T(7, 'keep') - 0.1, T(7, 'adding'));
      D.line(head([[390, 700], [390, 1270]], 26), 'acc1', 7, T(7, 'adding'), T(7, 'adding') + 0.1);
      D.text('+ new', 190, 960, 80, 'title', 'acc1', T(7, 'new') - 0.15, T(7, 'new') + 0.15);
      D.text('bone', 190, 1050, 80, 'title', 'acc1', T(7, 'bone') - 0.15, T(7, 'bone') + 0.2);
      D.many(check(300, bn.bandTop, 30), 'acc3', 8, T(8, 'close') - 0.05, T(8, 'close') + 0.15);
      D.many(check(300, bn.bandBot, 30), 'acc3', 8, T(8, 'for') - 0.05, T(8, 'for') + 0.15);
      D.text('CLOSED', 540, 1625, 120, 'title', 'acc3', T(8, 'close') - 0.15, T(8, 'good') + 0.2, { rot: -0.02 });
    }
    // ===== board 2: outside in =====
    {
      const D = mk(2);
      D.text('puberty', 540, 280, 130, 'title', 'acc1', T(9, 'puberty') - 0.15, T(9, 'puberty') + 0.4, { rot: -0.015 });
      D.text('outside → in', 540, 410, 84, 'label', 'ink', T(10, 'edges') - 0.1, T(10, 'inward') + 0.2);
      D.line(circ(540, 560, 68, 72), 'ink', 7, T(9, 'kicks') - 0.1, T(9, 'in') + 0.1);
      const hands = [circ(305, 995, 34, 34), circ(775, 995, 34, 34)], feet = [circ(420, 1428, 64, 26), circ(660, 1428, 64, 26)];
      D.many(hands, 'acc1', 8, T(11, 'hands') - 0.1, T(11, 'hands') + 0.3);
      D.many(feet, 'acc1', 8, T(11, 'feet') - 0.1, T(11, 'feet') + 0.3);
      D.many([[[455, 665], [318, 962]], [[625, 665], [762, 962]]], 'acc3', 8, T(12, 'arms') - 0.1, T(12, 'arms') + 0.3);
      D.many([[[490, 1005], [430, 1400]], [[590, 1005], [650, 1400]]], 'acc3', 8, T(12, 'legs') - 0.1, T(12, 'legs') + 0.3);
      D.line(rrect(455, 640, 170, 365, 26), 'acc2', 8, T(13, 'torso') - 0.1, T(13, 'grows') + 0.1);
      [[[70, 640], [250, 930]], [[1010, 640], [830, 930]], [[70, 1250], [330, 1400]], [[1010, 1250], [750, 1400]]].forEach((p, i) => arrow(D, p, 'acc4', 5, T(10, 'edges') - 0.1 + i * 0.12, T(10, 'works') + i * 0.12));
      D.text('1', 190, 1460, 130, 'num', 'acc1', T(11, 'first') - 0.15, T(11, 'first') + 0.1);
      D.text('1', 890, 1460, 130, 'num', 'acc1', T(11, 'first') - 0.05, T(11, 'first') + 0.2);
      D.text('2', 890, 1215, 130, 'num', 'acc3', T(12, 'then') - 0.15, T(12, 'then') + 0.1);
      D.text('3', 540, 870, 130, 'num', 'acc2', T(13, 'last') - 0.15, T(13, 'last') + 0.1);
      D.text('feet', 230, 1600, 84, 'title', 'acc1', T(11, 'feet') - 0.1, T(11, 'feet') + 0.25);
      D.text('→', 370, 1600, 84, 'title', 'ink', T(12, 'then') - 0.1, T(12, 'then') + 0.1);
      D.text('legs', 510, 1600, 84, 'title', 'acc3', T(12, 'legs') - 0.1, T(12, 'legs') + 0.25);
      D.text('→', 650, 1600, 84, 'title', 'ink', T(13, 'and') - 0.1, T(13, 'and') + 0.1);
      D.text('torso', 820, 1600, 84, 'title', 'acc2', T(13, 'torso') - 0.1, T(13, 'torso') + 0.3);
    }
    // ===== board 3: small bones mature faster =====
    {
      const D = mk(3);
      D.text('small bones', 540, 280, 120, 'title', 'acc1', T(14, 'small') - 0.15, T(14, 'bones') + 0.3, { rot: -0.015 });
      D.text('mature faster', 540, 410, 96, 'title', 'acc3', T(16, 'mature') - 0.15, T(16, 'faster') + 0.3, { rot: -0.015 });
      D.many([rrect(195, 530, 70, 90, 26), rrect(195, 640, 70, 112, 26), rrect(195, 772, 70, 134, 26)], 'ink', 7, T(15, 'fingers') - 0.1, T(15, 'toes') + 0.15);
      D.text('fingers', 230, 990, 68, 'label', 'acc1', T(15, 'fingers') - 0.1, T(15, 'fingers') + 0.3);
      D.text('& toes', 230, 1065, 68, 'label', 'acc1', T(15, 'toes') - 0.1, T(15, 'toes') + 0.2);
      const lb = bone(800, 510, 1010, 30, 72, 46);
      D.many(lb.paths, 'acc4', 7, T(16, 'long') - 0.15, T(16, 'bones') + 0.2);
      D.text('leg bone', 800, 1075, 68, 'label', 'acc4', T(16, 'legs') - 0.15, T(16, 'legs') + 0.2);
      D.text('small', 160, 1192, 68, 'label', 'acc1', T(16, 'mature') - 0.1, T(16, 'mature') + 0.2);
      D.line(rrect(300, 1130, 640, 76, 14), 'ink', 6, T(16, 'mature') - 0.1, T(16, 'mature') + 0.3);
      D.text('long', 160, 1342, 68, 'label', 'acc4', T(16, 'long') - 0.1, T(16, 'long') + 0.2);
      D.line(rrect(300, 1280, 640, 76, 14), 'ink', 6, T(16, 'long') - 0.1, T(16, 'long') + 0.3);
      if (t > T(16, 'mature') + 0.2) D.inst(hfill(300, 1130, 640, 76, eio(win(t, T(16, 'mature') + 0.2, T(16, 'than') + 0.3))), 'acc1', 5, 400);
      if (t > T(16, 'long') + 0.3) D.inst(hfill(300, 1280, 640, 76, 0.35 * eio(win(t, T(16, 'long') + 0.3, B[16].e + 0.4))), 'acc4', 5, 450);
      D.many(check(1005, 1168, 36), 'acc3', 9, T(16, 'than') + 0.3, T(16, 'than') + 0.5, { hit: true });
      D.many([circ(260, 1525, 86, 28), circ(440, 1512, 86, 28)], 'acc1', 8, T(17, 'teens') - 0.1, T(17, 'trip') + 0.05);
      D.many([[[540, 1470], [600, 1450]], [[545, 1520], [615, 1515]], [[540, 1570], [600, 1585]]], 'ink', 5, T(17, 'trip'), T(17, 'over'));
      D.text('trip!', 790, 1560, 150, 'title', 'acc2', T(17, 'trip') - 0.15, T(17, 'trip') + 0.3, { rot: -0.08 });
    }
    // ===== board 4: 13 to 17, plates close, the rest catches up =====
    {
      const D = mk(4);
      D.text('around age', 540, 230, 76, 'label', 'ink', T(18, 'around') - 0.15, T(18, 'around') + 0.3);
      D.text('13–17', 540, 420, 200, 'num', 'acc1', T(18, '13') - 0.15, T(18, '17') + 0.3, { rot: -0.02 });
      const bn = bone(270, 560, 1240, 34, 88, 54);
      D.many(bn.paths, 'ink', 7, T(18, 'then') - 0.1, T(18, 'around'));
      const shut = t > T(19, 'close');
      D.many(band(270, bn.bandTop, 34), shut ? 'ink' : 'acc2', 5, T(18, 'around'), T(18, '13'));
      D.many(band(270, bn.bandBot, 34), shut ? 'ink' : 'acc2', 5, T(18, '13'), T(18, '17'));
      if (shut) { const u = win(t, T(19, 'close'), T(19, 'close') + 0.4); [bn.bandTop, bn.bandBot].forEach((y, j) => { const o = []; for (let x = 222; x < 222 + 96 * u; x += 8) o.push([[x, y + 10], [x + 6, y - 10]]); D.inst(o, 'ink', 4, 600 + j * 50); }); }
      D.text('closed', 270, 1335, 76, 'title', 'acc3', T(19, 'close') - 0.15, T(19, 'close') + 0.25);
      D.line(rrect(600, 620, 100, 630, 12), 'ink', 6, T(19, 'the') - 0.1, T(19, 'last'));
      D.line(rrect(820, 620, 100, 630, 12), 'ink', 6, T(19, 'last'), T(19, 'growth'));
      if (t > T(19, 'last')) D.inst(vfill(600, 1250, 100, 630, eio(win(t, T(19, 'last'), T(19, 'last') + 0.3))), 'acc1', 5, 700);
      if (t > T(19, 'growth')) D.inst(vfill(820, 1250, 100, 630, 0.72 + 0.28 * eio(win(t, T(20, 'rest'), T(20, 'up')))), 'acc3', 5, 760);
      const dash = []; for (let x = 570; x < 960; x += 44) dash.push([[x, 612], [x + 24, 612]]);
      D.many(dash, 'acc3', 5, T(19, 'plates') - 0.1, T(19, 'plates') + 0.3);
      D.text('adult size', 760, 570, 64, 'label', 'acc3', T(19, 'plates'), T(19, 'close') + 0.1);
      D.text('feet', 650, 1325, 68, 'label', 'acc1', T(19, 'last') - 0.1, T(19, 'last') + 0.2);
      D.text('height', 870, 1325, 68, 'label', 'acc3', T(19, 'growth') - 0.1, T(19, 'growth') + 0.25);
      D.text('caught up!', 540, 1540, 130, 'title', 'acc3', T(20, 'catches') - 0.15, T(20, 'up') + 0.3, { rot: -0.02 });
      D.line(circ(540, 1503, 380, 112, -2.0, 4.4), 'acc2', 7, T(20, 'up') + 0.1, T(20, 'up') + 0.5, { hit: true });
    }
    // ===== board 5: the loop-back question =====
    {
      const D = mk(5);
      D.text('so...', 540, 300, 120, 'title', 'acc1', T(21, 'so') - 0.15, T(21, 'so') + 0.3, { rot: -0.02 });
      D.many(footprint(540, 820, 1.25), 'acc1', 8, B[20].e + 0.05, T(21, 'feet') + 0.3);
      D.text('feet first?', 540, 1300, 130, 'title', 'ink', T(21, 'show') - 0.15, T(21, 'before') + 0.3, { rot: -0.02 });
      D.text('tell me below!', 540, 1500, 104, 'title', 'acc2', B[21].e - 0.1, B[21].e + 0.35, { rot: -0.02 });
      D.line(circ(540, 1468, 390, 112, -2.0, 4.4), 'acc2', 7, B[21].e + 0.1, B[21].e + 0.5, { hit: true });
    }
    PANS.forEach((p) => {
      const x0 = BXc(p.from) + 560, x1 = BXc(p.from + 1) - 560, y = 960 + (p.from % 4 === 0 ? -40 : 60);
      const L = cubic([x0, y], [x0 + 120, y - 110], [x1 - 120, y + 110], [x1, y]);
      items.push({ k: 'line', pts: L, role: 'acc1', w: 6, a: p.t0 - 0.05, b: p.t1 - 0.1 });
      items.push({ k: 'line', pts: head(L, 26), role: 'acc1', w: 6, a: p.t1 - 0.1, b: p.t1 });
    });
    return items;
  }

  const CK = [
    [0, 540, 960, 1.04, 0], [B[3].e, 540, 960, 1.0, 0],
    [B[4].s, 540, 960, 1.0, 1], [B[8].e, 540, 960, 1.03, 1],
    [B[9].s, 540, 960, 1.04, 2], [B[13].e, 540, 960, 1.0, 2],
    [B[14].s, 540, 960, 1.0, 3], [B[17].e, 540, 960, 1.03, 3],
    [B[18].s, 540, 960, 1.04, 4], [B[20].e, 540, 960, 1.0, 4],
    [B[21].s, 540, 960, 1.0, 5], [60, 540, 960, 1.04, 5],
  ].map(([t, x, y, z, b]) => [t, BXc(b) - 540 + x, y, z]);
  const tipOf = (items, t, meas) => { let tip = null; for (const it of items) { if (it.inst || it.k === 'dot') continue; const p = win(t, it.a, it.b); if (p > 0 && p < 1) { if (it.k === 'line') { const P = it.pts; tip = P[Math.min(P.length - 1, Math.floor(p * (P.length - 1)))]; } else tip = meas(it, p); } } return tip; };

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
    k.play('pop', T(0, 'feet'), { f: 560, gain: 0.45 });
    k.play('ding', T(0, 'grow'), { f: 'E5', gain: 0.3 });
    k.play('riser', T(0, 'rest') - 0.3, { dur: 0.5, gain: 0.25 });
    k.play('sparkle', T(1, 'giraffes'), { n: 6, gain: 0.35 });
    k.play('stamp', T(2, 'feet'), { gain: 0.45 });
    k.play('pop', T(2, 'legs'), { f: 700, gain: 0.35 });
    k.play('swish', T(3, 'catching'), { dur: 0.4, gain: 0.35 });
    k.play('pop', T(4, 'whats'), { f: 620, gain: 0.4 });
    k.play('ding', T(5, 'growth'), { f: 'G5', gain: 0.3 });
    k.play('pop', T(6, 'cartilage'), { f: 760, gain: 0.3 });
    k.play('riser', T(7, 'keep') - 0.1, { dur: 0.9, gain: 0.3 });
    k.play('ding', T(7, 'bone'), { f: 'A5', gain: 0.28 });
    k.play('stamp', T(8, 'close'), { gain: 0.55 });
    k.play('success', T(8, 'good'), { f: 'C6', gain: 0.38 });
    k.play('pop', T(9, 'puberty'), { f: 560, gain: 0.45 });
    k.play('whoosh', T(10, 'edges'), { dur: 0.8, gain: 0.35, top: 2400 });
    k.play('ding', T(11, 'first'), { f: 'C6', gain: 0.3 }); k.play('ding', T(12, 'then'), { f: 'A5', gain: 0.28 }); k.play('ding', T(13, 'last'), { f: 'E5', gain: 0.3 });
    k.play('pop', T(14, 'small'), { f: 700, gain: 0.4 });
    k.play('riser', T(16, 'mature') - 0.1, { dur: 0.8, gain: 0.3 });
    k.play('success', T(16, 'than') + 0.4, { f: 'G5', gain: 0.38 });
    k.play('thud', T(17, 'trip'), { f: 120, gain: 0.5 }); k.play('error', T(17, 'trip') + 0.05, { f: 'F3', gain: 0.25 });
    for (let i = 0; i < 10; i++) k.play('count', T(18, '13') - 0.1 + i * 0.05, { gain: 0.45 });
    k.play('impact', T(18, '17'), { gain: 0.45 });
    k.play('stamp', T(19, 'close'), { gain: 0.5 });
    k.play('riser', T(20, 'rest') - 0.1, { dur: B[20].e - T(20, 'rest'), gain: 0.3 });
    k.play('success', T(20, 'up'), { f: 'C6', gain: 0.42 });
    k.play('pop', T(21, 'so'), { f: 700, gain: 0.45 });
    k.play('ding', T(21, 'feet'), { f: 'E6', gain: 0.3 });
    k.play('success', B[21].e + 0.25, { f: 'D6', gain: 0.45 });
  }

  try { if (document.fonts) ['700 120px "Kalam"', '400 60px "Patrick Hand"'].forEach((f) => document.fonts.load(f, 'AaZz09?!~–→')); } catch (e) { /* render anyway */ }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
