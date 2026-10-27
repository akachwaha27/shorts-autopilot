// ================= Chalkboard Lesson, vertical 1080x1920: "How was Velcro invented?" =================
// Unattended run: no storyboard step. BEATS copied from phrases.json (Kokoro am_michael).
// One long slate: seven stretches of board ("boards"), 1500 world px apart. The camera tracks along the slate between
// some of them (a chalk leader arrow is drawn on the way), and the felt eraser wipes the screen clean for the others.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'p0', s: 0.25, e: 2.10, w: {"a": 0.25, "weed": 0.33, "invented": 0.65, "your": 1.3, "velcro": 1.62} },  // A weed invented your Velcro,
    { id: 'p1', s: 2.40, e: 3.80, w: {"in": 2.4, "nineteen": 2.56, "fortyone": 3.18} },  // in nineteen forty-one,
    { id: 'p2', s: 4.10, e: 5.82, w: {"and": 4.1, "almost": 4.31, "nobody": 4.72, "believed": 5.13, "it": 5.68} },  // and almost nobody believed it.
    { id: 'p3', s: 6.37, e: 8.78, w: {"a": 6.37, "swiss": 6.45, "engineer": 6.87, "george": 7.53, "de": 8.03, "mestral": 8.2} },  // A Swiss engineer, George de Mestral,
    { id: 'p4', s: 9.08, e: 10.98, w: {"took": 9.08, "his": 9.38, "dog": 9.61, "hiking": 9.84, "in": 10.29, "the": 10.45, "alps": 10.67} },  // took his dog hiking in the Alps.
    { id: 'p5', s: 11.53, e: 13.45, w: {"they": 11.53, "came": 11.82, "home": 12.12, "covered": 12.41, "in": 12.93, "burrs": 13.08} },  // They came home covered in burrs,
    { id: 'p6', s: 13.75, e: 15.67, w: {"the": 13.75, "spiky": 13.97, "seed": 14.34, "heads": 14.64, "of": 15.01, "burdock": 15.15} },  // the spiky seed heads of burdock.
    { id: 'p7', s: 16.22, e: 17.44, w: {"under": 16.22, "a": 16.6, "microscope": 16.68} },  // Under a microscope,
    { id: 'p8', s: 17.74, e: 19.75, w: {"every": 17.74, "spike": 18.12, "ended": 18.51, "in": 18.9, "a": 19.05, "tiny": 19.13, "hook": 19.44} },  // every spike ended in a tiny hook,
    { id: 'p9', s: 20.05, e: 22.31, w: {"and": 20.05, "his": 20.26, "clothes": 20.47, "were": 20.97, "full": 21.25, "of": 21.53, "tiny": 21.68, "loops": 21.96} },  // and his clothes were full of tiny loops.
    { id: 'p10', s: 22.86, e: 23.98, w: {"hook": 22.86, "meets": 23.21, "loop": 23.63} },  // Hook meets loop,
    { id: 'p11', s: 24.28, e: 25.32, w: {"and": 24.28, "they": 24.52, "grab": 24.84, "on": 25.16} },  // and they grab on.
    { id: 'p12', s: 25.87, e: 27.21, w: {"so": 25.87, "he": 26.03, "tried": 26.19, "to": 26.58, "copy": 26.74, "it": 27.05} },  // So he tried to copy it.
    { id: 'p13', s: 27.76, e: 29.32, w: {"cotton": 27.76, "wore": 28.23, "out": 28.54, "too": 28.77, "fast": 29.01} },  // Cotton wore out too fast.
    { id: 'p14', s: 29.87, e: 30.93, w: {"nylon": 29.87, "worked": 30.35} },  // Nylon worked,
    { id: 'p15', s: 31.23, e: 33.01, w: {"sewn": 31.23, "under": 31.52, "hot": 31.88, "infrared": 32.09, "light": 32.66} },  // sewn under hot infrared light
    { id: 'p16', s: 33.31, e: 34.64, w: {"into": 33.31, "stiff": 33.58, "little": 33.91, "hooks": 34.31} },  // into stiff little hooks.
    { id: 'p17', s: 35.19, e: 36.73, w: {"it": 35.19, "took": 35.33, "him": 35.61, "about": 35.82, "ten": 36.17, "years": 36.38} },  // It took him about ten years,
    { id: 'p18', s: 37.03, e: 39.30, w: {"and": 37.03, "the": 37.23, "patent": 37.42, "came": 37.81, "in": 38.07, "nineteen": 38.2, "fiftyfive": 38.72} },  // and the patent came in nineteen fifty-five.
    { id: 'p19', s: 39.85, e: 41.73, w: {"he": 39.85, "named": 39.99, "it": 40.34, "from": 40.48, "two": 40.76, "french": 40.97, "words": 41.38} },  // He named it from two French words,
    { id: 'p20', s: 42.03, e: 43.20, w: {"velours": 42.03, "for": 42.54, "velvet": 42.76} },  // velours, for velvet,
    { id: 'p21', s: 43.50, e: 44.75, w: {"and": 43.5, "crochet": 43.72, "for": 44.24, "hook": 44.46} },  // and crochet, for hook.
    { id: 'p22', s: 45.30, e: 46.49, w: {"astronauts": 45.3, "used": 46.05, "it": 46.34} },  // Astronauts used it
    { id: 'p23', s: 46.79, e: 49.06, w: {"to": 46.79, "keep": 46.92, "snack": 47.19, "pouches": 47.53, "from": 47.99, "floating": 48.26, "away": 48.79} },  // to keep snack pouches from floating away.
    { id: 'p24', s: 49.61, e: 51.40, w: {"so": 49.61, "when": 49.74, "your": 50.01, "shoe": 50.27, "straps": 50.54, "rip": 50.94, "open": 51.13} },  // So when your shoe straps rip open,
    { id: 'p25', s: 51.70, e: 53.60, w: {"do": 51.7, "you": 51.85, "blame": 52.08, "weed": 52.69, "or": 52.99, "dog": 53.37} },  // do you blame the weed, or the dog?
  ];
  const B = BEATS;
  const T = (i, w) => { const v = B[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const DURATION = B[B.length - 1].e + 1.0;
  // scene changes sit in the pauses between phrases
  const gap = (i) => [B[i - 1].e, B[i].s];
  const PANS = [{ i: 3, from: 0 }, { i: 12, from: 2 }, { i: 22, from: 4 }].map((p) => ({ from: p.from, t0: gap(p.i)[0], t1: gap(p.i)[1] }));
  const WIPES = [{ i: 7, from: 1 }, { i: 17, from: 3 }, { i: 24, from: 5 }].map((p) => ({ from: p.from, t0: gap(p.i)[0], t1: gap(p.i)[1] }));

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
  // a burr: round seed head bristling with spikes that end in little hooks
  const burr = (cx, cy, r, n, seed) => {
    const out = [circ(cx, cy, r, r * 0.95, -1.3, 5.0)], rr = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + rr.range(-0.12, 0.12), dx = Math.cos(a), dy = Math.sin(a), L = r * rr.range(0.62, 0.78);
      const p1 = [cx + dx * r * 1.02, cy + dy * r * 1.02], p2 = [cx + dx * (r + L), cy + dy * (r + L)], hr = Math.max(3, r * 0.1);
      const px = -dy, py = dx, cc = [p2[0] + px * hr, p2[1] + py * hr], a0 = Math.atan2(-py, -px);
      out.push([p1, ...circ(cc[0], cc[1], hr, hr, a0, a0 + Math.PI * 1.15, 8).map((q, j) => (j === 0 ? p2 : q))]);
    }
    return out;
  };
  // candy-cane hook rising from a base line at (x,y), height s
  const hookUp = (x, y, s) => { const r = Math.min(s * 0.22, 34); return [[x, y], [x, y - s], ...circ(x + r, y - s, r, r, Math.PI, Math.PI * 2 + 0.55, 14).slice(1)]; };
  // hook hanging from a strip above: stem down, curl at the bottom
  const hookDown = (x, y, s) => [[x, y], [x, y + s], ...circ(x + s * 0.22, y + s, s * 0.22, s * 0.22, Math.PI, -0.55, 14).slice(1)];
  // a loop rising from a base line
  const loopUp = (x, y, s) => { const rx = s * 0.19, ry = s * 0.42, cy = y - s * 0.55; const L = circ(x, cy, rx, ry, Math.PI * 0.65, Math.PI * 2.35, 26); return [[x - s * 0.14, y], ...L, [x + s * 0.14, y]]; };
  const dogSide = (x, y, s = 1) => {
    const P = (a, b) => [x + a * s, y + b * s];
    return [
      [...cubic(P(-112, -196), P(-130, -150), P(-120, -112), P(-92, -106), 14), ...cubic(P(-92, -106), P(-20, -96), P(40, -96), P(96, -104), 14).slice(1), ...cubic(P(96, -104), P(140, -112), P(140, -176), P(104, -188), 14).slice(1), ...cubic(P(104, -188), P(40, -196), P(-40, -196), P(-112, -196), 14).slice(1)], // body
      circ(x - 150 * s, y - 238 * s, 50 * s, 48 * s, 0.9, Math.PI * 2.75), // head
      [P(-186, -258), P(-238, -246), P(-240, -220), P(-192, -212)], // snout
      [P(-162, -284), P(-118, -278), P(-112, -214), P(-138, -232), P(-162, -284)], // floppy ear
      [P(-85, -100), P(-92, 0)], [P(-52, -92), P(-46, 0)], [P(62, -92), P(56, 0)], [P(98, -104), P(104, 0)], // legs
      quad(P(122, -160), P(178, -210), P(186, -262), 16), // tail
    ];
  };
  const dogFace = (x, y, s = 1) => { // front view head for the final question
    const P = (a, b) => [x + a * s, y + b * s];
    return [circ(x, y, 88 * s, 80 * s), [P(-80, -40), P(-118, 20), P(-78, 52)], [P(80, -40), P(118, 20), P(78, 52)], circ(x, y + 30 * s, 20 * s, 13 * s), [P(-24, 56), P(0, 66), P(24, 56)]];
  };
  const hiker = (x, y, s = 1) => {
    const P = (a, b) => [x + a * s, y + b * s];
    return [
      circ(x, y - 410 * s, 46 * s, 48 * s), // head
      [P(-66, -444), P(66, -448)], circ(x, y - 448 * s, 40 * s, 36 * s, Math.PI, Math.PI * 2), // hat
      [P(0, -362), P(0, -180)], // body
      [P(0, -180), P(-52, 0)], [P(0, -180), P(46, 0)], // legs
      [P(0, -318), P(-74, -228)], [P(0, -318), P(82, -252)], // arms
      [P(84, -338), P(98, 4)], // walking stick
      rrect(x - 66 * s, y - 352 * s, 50 * s, 128 * s, 10 * s), // backpack
    ];
  };
  const shoe = (x, y) => [ // side view, toe to the left; (x,y) = heel bottom
    [[x, y], [x - 600, y], ...quad([x - 600, y], [x - 640, y - 70], [x - 560, y - 120], 12).slice(1), [x - 300, y - 150], [x - 210, y - 290], [x - 30, y - 300], [x + 10, y - 200], [x, y]],
    [[x - 620, y + 30], [x + 15, y + 30]], [[x - 620, y + 30], [x - 604, y]], [[x + 15, y + 30], [x + 2, y]],
  ];
  const helmet = (cx, cy) => [circ(cx, cy, 175, 175), circ(cx, cy + 10, 122, 96), circ(cx, cy + 10, 96, 70, -2.6, -1.9, 8), rrect(cx - 180, cy + 190, 360, 300, 60), circ(cx, cy + 186, 128, 30, 0.1, Math.PI - 0.1)];

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

  function story(t) {
    const items = [];
    const mk = (b) => {
      const ox = BXc(b) - 540, P = (pts) => pts.map(([x, y]) => [x + ox, y]);
      return {
        line: (pts, role, w, a, b2, o = {}) => items.push({ k: 'line', pts: P(pts), role, w, a, b: b2, hit: o.hit, inst: o.inst, prog: o.prog }),
        text: (s, x, y, size, font, role, a, b2, o = {}) => items.push({ k: 'text', s, x: x + ox, y, size, font, role, a, b: b2, rot: o.rot || 0, align: o.align || 'center', inst: o.inst, prog: o.prog }),
        dot: (x, y, r, role, a) => items.push({ k: 'dot', x: x + ox, y, r, role, a, b: a + 0.05 }),
        many: (list, role, w, a, b2, o = {}) => list.forEach((pts, i) => { const n = list.length, aa = a + (b2 - a) * i / n, bb = a + (b2 - a) * (i + 1) / n; items.push({ k: 'line', pts: P(pts), role, w, a: aa, b: bb, inst: o.inst, prog: o.prog }); }),
      };
    };
    // ===== board 0: the hook =====
    {
      const D = mk(0);
      const bl = burr(540, 600, 120, 18, 5);
      D.line(bl[0], 'acc1', 8, T(0, 'weed') - 0.12, T(0, 'weed') + 0.2, { hit: true });
      D.many(bl.slice(1), 'acc1', 5.5, T(0, 'weed') + 0.2, 1.3);
      D.text('weed', 820, 380, 64, 'label', 'acc1', T(0, 'weed') + 0.05, T(0, 'invented'));
      D.text('VELCRO', 540, 1040, 168, 'title', 'ink', T(0, 'velcro') - 0.15, T(0, 'velcro') + 0.4, { rot: -0.02 });
      D.line([[230, 1080], [860, 1068]], 'acc1', 8, B[0].e - 0.15, B[0].e + 0.1, { hit: true });
      D.text('1941', 540, 1290, 190, 'num', 'acc2', T(1, 'nineteen') - 0.12, T(1, 'fortyone') + 0.3, { rot: -0.015 });
      D.text('nobody believed it', 540, 1470, 76, 'label', 'ink', T(2, 'nobody') - 0.15, T(2, 'it'));
      D.line([[250, 1500], [830, 1494]], 'acc2', 6, T(2, 'it') - 0.05, T(2, 'it') + 0.15);
    }
    // ===== board 1: the dog walk in the Alps =====
    {
      const D = mk(1);
      D.many(hiker(300, 1350, 1.0), 'ink', 6, T(3, 'swiss') - 0.1, T(3, 'george') - 0.1);
      D.text('Swiss engineer', 330, 830, 58, 'label', 'acc4', T(3, 'engineer') - 0.12, T(3, 'george') - 0.05);
      D.text('George de Mestral', 540, 1540, 104, 'title', 'acc1', T(3, 'george') - 0.15, B[3].e, { rot: -0.015 });
      D.many(dogSide(760, 1350, 1.0), 'ink', 6, T(4, 'dog') - 0.15, T(4, 'hiking') + 0.25);
      D.dot(760 - 168, 1350 - 248, 7, 'ink', T(4, 'hiking') + 0.2); D.dot(760 - 238, 1350 - 236, 9, 'ink', T(4, 'hiking') + 0.25);
      D.line([[70, 1360], [1010, 1352]], 'ink', 5, T(4, 'hiking') - 0.1, T(4, 'in'));
      const mtn = [[60, 660], [220, 390], [320, 500], [470, 270], [620, 520], [760, 340], [900, 520], [1020, 430]];
      D.line(mtn, 'ink', 6, T(4, 'alps') - 0.15, T(4, 'alps') + 0.35, { hit: true });
      [[[170, 470], [220, 390], [270, 466], [240, 448], [215, 470], [190, 452]], [[410, 370], [470, 270], [530, 372], [495, 352], [465, 380], [440, 356]], [[715, 412], [760, 340], [808, 410], [780, 396], [758, 418], [735, 398]]]
        .forEach((p, i) => D.line(p, 'acc4', 5, T(4, 'alps') + 0.3 + i * 0.08, T(4, 'alps') + 0.4 + i * 0.08));
      D.text('the Alps', 880, 250, 64, 'label', 'acc4', T(4, 'alps') + 0.05, B[4].e);
      // burrs stuck on the hiker's legs and the dog's fur
      const stuck = [[275, 1250], [320, 1300], [262, 1170], [690, 1215], [760, 1160], [820, 1205], [640, 1260], [860, 1150], [600, 1130]];
      stuck.forEach(([x, y], i) => { const a = T(5, 'burrs') - 0.12 + i * 0.05; burr(x, y, 13, 8, 30 + i).forEach((p, j) => D.line(p, 'acc1', 3.5, a + j * 0.006, a + 0.06 + j * 0.006)); });
      D.line(circ(745, 1185, 165, 85, -2.6, 3.9), 'acc2', 6, T(6, 'spiky') - 0.1, T(6, 'heads'), { hit: true });
      D.text('burdock burrs', 740, 1010, 72, 'label', 'acc1', T(6, 'burdock') - 0.15, B[6].e);
    }
    // ===== board 2: under the microscope =====
    {
      const D = mk(2);
      const CX = 540, CY = 780, R = 330;
      D.line(circ(CX, CY, R, R, -1.6, 4.72), 'ink', 8, T(7, 'microscope') - 0.3, T(7, 'microscope') + 0.25, { hit: true });
      D.line(circ(CX, CY, R + 22, R + 22, -1.4, -0.4), 'ink', 4, T(7, 'microscope') + 0.25, T(7, 'microscope') + 0.4);
      D.text('microscope', 540, 1205, 68, 'label', 'acc4', T(7, 'microscope') - 0.1, B[7].e);
      D.line([[CX, CY - R + 30], [CX, CY + R - 30]], 'ink', 3, T(8, 'every') - 0.1, T(8, 'every') + 0.2);
      D.line([[CX - R + 40, 980], [CX - 20, 980]], 'ink', 5, T(8, 'every') + 0.1, T(8, 'spike') - 0.05);
      [260, 350, 440].forEach((x, i) => D.line(hookUp(x, 980, 250), 'acc1', 7, T(8, 'spike') - 0.12 + i * 0.3, T(8, 'spike') + 0.18 + i * 0.3));
      D.text('hooks', 370, 640, 76, 'title', 'acc1', T(8, 'hook') - 0.15, B[8].e);
      D.line([[CX + 20, 980], [CX + R - 40, 980]], 'ink', 5, T(9, 'clothes') - 0.1, T(9, 'clothes') + 0.25);
      [625, 720, 815].forEach((x, i) => D.line(loopUp(x, 980, 270), 'acc4', 7, T(9, 'full') - 0.15 + i * 0.22, T(9, 'full') + 0.15 + i * 0.22));
      D.text('loops', 715, 640, 76, 'title', 'acc4', T(9, 'loops') - 0.15, B[9].e);
      // hook meets loop: a big hook drops in and catches the loop
      const hk0 = T(10, 'hook') - 0.15, mv0 = T(10, 'loop') - 0.1, mv1 = mv0 + 0.5;
      const u = eio(win(t, mv0, mv1)), dx = (1 - u) * -230, dy = (1 - u) * -90;
      const strip = rrect(360, 1270, 260, 34, 8), hk = hookDown(470, 1304, 210);
      if (t < mv0) { D.line(xf(strip, -230, -90), 'ink', 5, hk0, hk0 + 0.15); D.line(xf(hk, -230, -90), 'acc1', 9, hk0 + 0.15, hk0 + 0.45, { hit: true }); }
      const grab = win(t, T(11, 'grab') - 0.1, T(11, 'grab') + 0.25), tug = Math.sin(grab * Math.PI * 3) * 10 * (1 - grab);
      D.line(rrect(400, 1600, 320, 34, 8), 'ink', 5, T(10, 'meets') - 0.1, T(10, 'meets') + 0.12);
      D.line(loopUp(560, 1600, 300), 'acc4', 9, T(10, 'meets') + 0.1, T(10, 'loop') - 0.05, { hit: true });
      if (t >= mv0) {
        D.line(xf(strip, dx, dy + tug, 0), 'ink', 5, -1, 0, { inst: true });
        D.line(xf(hk, dx, dy + tug, 0), 'acc1', 9, -1, 0, { inst: true });
      }
      D.line(circ(560, 1440, 195, 175, -2.4, 4.1), 'acc2', 7, T(11, 'grab') - 0.1, T(11, 'grab') + 0.25, { hit: true });
      D.text('GRAB!', 905, 1530, 100, 'title', 'acc2', T(11, 'grab') - 0.05, T(11, 'on') + 0.1, { rot: -0.08 });
    }
    // ===== board 3: copy it: cotton vs nylon =====
    {
      const D = mk(3);
      D.text('copy it?', 540, 330, 120, 'title', 'ink', T(12, 'copy') - 0.18, T(12, 'it') + 0.1, { rot: -0.015 });
      D.line([[300, 360], [790, 352]], 'acc1', 7, T(12, 'it') + 0.1, T(12, 'it') + 0.3);
      // cotton: fuzzy strip, wears out
      D.text('cotton', 290, 500, 76, 'label', 'ink', T(13, 'cotton') - 0.15, T(13, 'cotton') + 0.3);
      D.line(rrect(120, 560, 340, 90, 14), 'ink', 6, T(13, 'cotton') - 0.05, T(13, 'wore'));
      const droop = win(t, T(13, 'wore'), T(13, 'out') + 0.3);
      for (let i = 0; i < 7; i++) { const x = 150 + i * 46; const tip = [x + 10 + droop * 26, 520 + droop * (40 + (i % 3) * 8)]; D.line([[x, 560], [x + 6, 535], tip], 'ink', 3.5, -1, 0, { inst: t > T(13, 'wore') - 0.1, prog: win(t, T(13, 'wore') - 0.2, T(13, 'wore') + 0.1) }); }
      D.text('wore out', 290, 750, 60, 'label', 'acc2', T(13, 'out') - 0.1, T(13, 'too'));
      D.line([[110, 470], [470, 780]], 'acc2', 10, T(13, 'fast') - 0.1, T(13, 'fast') + 0.06, { hit: true });
      D.line([[470, 470], [110, 780]], 'acc2', 10, T(13, 'fast') + 0.06, T(13, 'fast') + 0.2, { hit: true });
      // nylon: works
      D.text('nylon', 780, 500, 76, 'label', 'ink', T(14, 'nylon') - 0.15, T(14, 'nylon') + 0.3);
      D.line(rrect(610, 560, 340, 90, 14), 'ink', 6, T(14, 'nylon') + 0.05, T(14, 'worked') - 0.05);
      D.line([[700, 720], [750, 780], [880, 640]], 'acc3', 11, T(14, 'worked') - 0.1, T(14, 'worked') + 0.15, { hit: true });
      // the process: hot infrared lamp over nylon thread, which sets into stiff hooks
      D.line(rrect(170, 1420, 740, 70, 14), 'ink', 6, T(15, 'sewn') - 0.12, T(15, 'under'));
      for (let i = 0; i < 8; i++) D.line([[205 + i * 88, 1455], [245 + i * 88, 1455]], 'ink', 3, T(15, 'under') + i * 0.03, T(15, 'under') + 0.03 + i * 0.03);
      D.line([[470, 1010], [610, 1010], [690, 1120], [390, 1120], [470, 1010]], 'acc2', 7, T(15, 'hot') - 0.12, T(15, 'infrared'));
      D.line([[540, 940], [540, 1010]], 'acc2', 5, T(15, 'hot') - 0.12, T(15, 'hot'));
      D.text('infrared', 540, 900, 76, 'title', 'acc2', T(15, 'infrared') - 0.12, T(15, 'light') - 0.05);
      [-2, -1, 0, 1, 2].forEach((k, i) => D.line([[540 + k * 55, 1150], [540 + k * 120, 1360]], 'acc2', 5, T(15, 'light') - 0.15 + i * 0.05, T(15, 'light') + i * 0.05));
      for (let i = 0; i < 7; i++) D.line(hookUp(230 + i * 100, 1420, 70), 'acc1', 5, T(16, 'stiff') - 0.1 + i * 0.09, T(16, 'stiff') + i * 0.09);
      D.text('stiff hooks!', 540, 1590, 84, 'title', 'acc1', T(16, 'hooks') - 0.15, B[16].e + 0.1);
    }
    // ===== board 4: ten years, the patent, the name =====
    {
      const D = mk(4);
      D.line([[120, 560], [960, 552]], 'ink', 6, T(17, 'it') - 0.1, T(17, 'about'));
      D.line(head([[120, 560], [960, 552]], 24), 'ink', 6, T(17, 'about'), T(17, 'about') + 0.06);
      D.line([[160, 530], [160, 590]], 'ink', 5, T(17, 'took'), T(17, 'took') + 0.08);
      D.text('1941', 180, 660, 64, 'label', 'ink', T(17, 'took'), T(17, 'him') + 0.1);
      if (t > T(17, 'about') - 0.1) {
        const u2 = win(Math.floor(t * 12) / 12, T(17, 'about') - 0.1, T(17, 'ten')), n = Math.max(1, Math.round(u2 * 10));
        items.push({ k: 'text', s: '~' + fmt(n), x: BXc(4) - 540 + 430, y: 420, size: 190, font: 'num', role: u2 >= 1 ? 'acc3' : 'acc1', a: -1, b: 0, align: 'center', inst: true, rot: 0 });
      }
      D.text('years', 760, 410, 84, 'label', 'acc1', T(17, 'years') - 0.12, B[17].e);
      D.line([[860, 530], [860, 590]], 'ink', 5, T(18, 'patent') - 0.15, T(18, 'patent') - 0.05);
      D.text('patent', 850, 660, 64, 'label', 'ink', T(18, 'patent') - 0.12, T(18, 'came'));
      D.text('1955', 830, 820, 150, 'num', 'acc1', T(18, 'nineteen') - 0.12, T(18, 'fiftyfive') + 0.3, { rot: -0.02 });
      D.line(circ(828, 770, 200, 105, -2.5, 4.0), 'acc2', 7, B[18].e - 0.15, B[18].e + 0.2, { hit: true });
      D.text('2 French words', 540, 1010, 72, 'label', 'ink', T(19, 'two') - 0.12, T(19, 'words'));
      // velours / crochet with the borrowed letters in yellow
      const sz = 112, wa = measure('vel', 'title', sz), wb = measure('ours', 'title', sz), wc = measure('cro', 'title', sz), wd = measure('chet', 'title', sz);
      const x1 = 110;
      D.text('vel', x1, 1190, sz, 'title', 'acc1', T(20, 'velours') - 0.15, T(20, 'velours') + 0.1, { align: 'left' });
      D.text('ours', x1 + wa, 1190, sz, 'title', 'ink', T(20, 'velours') + 0.1, T(20, 'velours') + 0.4, { align: 'left' });
      D.text('= velvet', 640, 1190, 76, 'label', 'acc4', T(20, 'velvet') - 0.15, B[20].e, { align: 'left' });
      D.text('cro', x1, 1370, sz, 'title', 'acc1', T(21, 'crochet') - 0.15, T(21, 'crochet') + 0.1, { align: 'left' });
      D.text('chet', x1 + wc, 1370, sz, 'title', 'ink', T(21, 'crochet') + 0.1, T(21, 'crochet') + 0.4, { align: 'left' });
      D.text('= hook', 640, 1370, 76, 'label', 'acc4', T(21, 'hook') - 0.15, B[21].e, { align: 'left' });
      D.line([[x1, 1215], [x1 + wa, 1210]], 'acc1', 6, B[21].e - 0.1, B[21].e + 0.05);
      D.line([[x1, 1395], [x1 + wc, 1390]], 'acc1', 6, B[21].e - 0.02, B[21].e + 0.12);
      void wb; void wd;
    }
    // ===== board 5: astronauts =====
    {
      const D = mk(5);
      D.many(helmet(330, 860), 'ink', 6, T(22, 'astronauts') - 0.15, T(22, 'used') - 0.05);
      D.text('astronauts', 540, 420, 88, 'title', 'ink', T(22, 'astronauts') - 0.1, T(22, 'used') - 0.1);
      D.line([[930, 560], [936, 1440]], 'ink', 7, T(22, 'used') - 0.1, T(22, 'it') + 0.05);
      for (let i = 0; i < 9; i++) D.line([[936, 600 + i * 95], [990, 560 + i * 95]], 'ink', 3, T(22, 'it') + i * 0.02, T(22, 'it') + 0.05 + i * 0.02);
      D.line(rrect(908, 940, 22, 130, 6), 'acc1', 5, T(23, 'keep') - 0.1, T(23, 'keep') + 0.1);
      // snack pouch floats, then sticks to the wall patch
      const st0 = T(23, 'from'), st1 = T(23, 'away') - 0.1, su = eio(win(t, st0, st1));
      const fx = 600 + Math.sin(t * 1.7) * 24 * (1 - su), fy = 900 + Math.sin(t * 1.1 + 1) * 40 * (1 - su), rot = (Math.sin(t * 1.3) * 0.25 - 0.1) * (1 - su);
      const px = fx + (750 - fx) * su, py = fy + (935 - fy) * su, pr = win(t, T(23, 'snack') - 0.15, T(23, 'snack') + 0.25);
      if (pr > 0) {
        const pouch = [rrect(0, 0, 156, 220, 18), [[10, 34], [146, 34]], [[24, 14], [40, 0]], [[64, 14], [80, 0]], [[104, 14], [120, 0]]];
        pouch.forEach((p) => D.line(xf(p, px, py, rot, 78, 110), 'ink', 6, -1, 0, { inst: true, prog: pr }));
        D.text('snack', px + 78, py + 140, 50, 'label', 'acc1', -1, 0, { inst: true, prog: pr, rot });
        if (pr >= 1) for (let i = 0; i < 7; i++) { const rr = H.rng(70 + i), a = t * rr.range(0.4, 0.9) + i; items.push({ k: 'dot', x: BXc(5) - 540 + px + 78 + Math.cos(a) * rr.range(120, 200), y: py + 110 + Math.sin(a * 1.3) * rr.range(120, 210), r: rr.range(4, 8), role: 'acc1', a: -1, b: 0, inst: true }); }
      }
      D.text('snack pouch', 540, 1600, 64, 'label', 'ink', T(23, 'pouches') - 0.12, T(23, 'from'));
      D.text('stuck!', 690, 1280, 104, 'title', 'acc2', T(23, 'away') - 0.12, T(23, 'away') + 0.3, { rot: -0.06 });
    }
    // ===== board 6: the loop-back question =====
    {
      const D = mk(6);
      D.many(shoe(860, 900), 'ink', 7, T(24, 'shoe') - 0.3, T(24, 'straps') - 0.05);
      const rip = T(24, 'rip') - 0.1, ru = eio(win(t, rip, rip + 0.3)), strap = rrect(360, 650, 330, 72, 16);
      if (t < rip) D.line(strap, 'acc4', 7, T(24, 'straps') - 0.15, T(24, 'straps') + 0.2);
      else {
        D.line(xf(strap, 0, 0, 0.95 * ru, 690, 686), 'acc4', 7, -1, 0, { inst: true });
        for (let i = 0; i < 6; i++) D.line(hookUp(390 + i * 48, 700 + i * 10, 26), 'acc1', 4, -1, 0, { inst: true, prog: ru });
      }
      D.text('RIIIP!', 300, 470, 120, 'title', 'acc2', rip, rip + 0.3, { rot: -0.1 });
      const bl = burr(280, 1240, 78, 14, 9);
      D.line(bl[0], 'acc1', 7, T(25, 'weed') - 0.35, T(25, 'weed') - 0.15);
      D.many(bl.slice(1), 'acc1', 4.5, T(25, 'weed') - 0.15, T(25, 'weed') + 0.25);
      D.text('weed?', 280, 1490, 110, 'title', 'acc1', T(25, 'weed') - 0.12, T(25, 'or') - 0.05);
      D.text('or', 540, 1330, 76, 'label', 'ink', T(25, 'or') - 0.08, T(25, 'or') + 0.12);
      D.many(dogFace(800, 1240, 1.0), 'acc4', 6, T(25, 'dog') - 0.4, T(25, 'dog'));
      D.dot(770, 1220, 7, 'acc4', T(25, 'dog') - 0.1); D.dot(830, 1220, 7, 'acc4', T(25, 'dog') - 0.05);
      D.text('dog?', 800, 1490, 110, 'title', 'acc4', T(25, 'dog') - 0.12, T(25, 'dog') + 0.25);
      D.line(circ(540, 1340, 470, 260, -2.0, 4.4), 'acc2', 7, B[25].e + 0.05, B[25].e + 0.45, { hit: true });
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
    [0, 540, 960, 1.06, 0], [5.82, 540, 960, 1.0, 0],
    [6.37, 540, 960, 1.0, 1], [15.67, 540, 990, 1.05, 1],
    [16.22, 540, 900, 1.06, 2], [22.5, 540, 900, 1.04, 2], [23.1, 540, 1040, 1.06, 2], [25.32, 540, 1050, 1.08, 2],
    [25.87, 540, 900, 1.08, 3], [30.9, 540, 905, 1.08, 3], [31.4, 540, 1020, 1.08, 3], [34.64, 540, 1030, 1.1, 3],
    [35.19, 540, 920, 1.06, 4], [39.5, 540, 935, 1.06, 4], [40.2, 540, 1020, 1.06, 4], [44.75, 540, 1030, 1.08, 4],
    [45.30, 540, 960, 1.0, 5], [49.06, 540, 960, 1.06, 5],
    [49.61, 540, 960, 1.04, 6], [60, 540, 960, 1.0, 6],
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
        const seed = ((it.pts[0][0] * 13 + it.pts[0][1] * 7) | 0) + 3;
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
    const all = story(D + 1).filter((it) => !it.inst && it.a >= 0 && !(it.k === 'line' && it.w < 0.1)).sort((a, b) => a.a - b.a);
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
    k.play('impact', T(0, 'velcro') - 0.1, { gain: 0.6 }); k.play('ding', T(0, 'velcro') + 0.3, { f: 'G5', gain: 0.35 });
    knock(T(1, 'fortyone'), 1.2, 0, false); k.play('ding', T(1, 'fortyone') + 0.05, { f: 'D6', gain: 0.3 });
    k.play('error', T(2, 'nobody'), { f: 'F3', gain: 0.3 });
    k.play('sparkle', T(5, 'burrs') - 0.1, { n: 6, gain: 0.45 });
    k.play('ding', T(8, 'hook'), { f: 'E5', gain: 0.3 }); k.play('ding', T(9, 'loops'), { f: 'B5', gain: 0.3 });
    const mv0 = T(10, 'loop') - 0.1; k.play('swish', mv0, { dur: 0.4, gain: 0.7 }); k.play('thud', mv0 + 0.5, { f: 180, gain: 0.5 });
    k.play('impact', T(11, 'grab') - 0.05, { gain: 0.8 }); k.play('success', T(11, 'grab') + 0.1, { f: 'A5', gain: 0.45 });
    k.play('error', T(13, 'fast'), { f: 'E3', gain: 0.5 });
    k.play('success', T(14, 'worked'), { f: 'C6', gain: 0.5 });
    k.tone(T(15, 'hot') - 0.1, { f: 'A2', type: 'sine', dur: 1.6, gain: 0.06, a: 0.3, minor: true });
    for (let i = 0; i < 7; i++) tap(T(16, 'stiff') + i * 0.09, 0.8);
    { let last = -1; for (let f = Math.ceil((T(17, 'about') - 0.1) * 12); f <= Math.ceil(T(17, 'ten') * 12); f++) { const u = win(f / 12, T(17, 'about') - 0.1, T(17, 'ten')), n = Math.max(1, Math.round(u * 10)); if (n !== last) { k.play('count', f / 12, { gain: 1.0, f: 1700 + n * 60, minor: true }); last = n; } } }
    k.play('impact', T(17, 'ten') + 0.02, { gain: 0.7 }); k.play('ding', T(17, 'ten') + 0.03, { f: 'D6', gain: 0.35 });
    k.play('stamp', T(18, 'fiftyfive'), { gain: 0.6 });
    k.play('ding', T(20, 'velours') - 0.1, { f: 'C6', gain: 0.3 }); k.play('ding', T(21, 'crochet') - 0.1, { f: 'E6', gain: 0.3 });
    k.play('success', B[21].e, { f: 'G5', gain: 0.4 });
    k.noise(T(23, 'snack') - 0.1, { dur: 1.2, color: 'pink', filter: 'bandpass', f: [[0, 500], [1.2, 900]], q: 0.6, gain: 0.05, a: 0.4, minor: true });
    k.play('thud', T(23, 'away') - 0.1, { f: 160, gain: 0.6 }); k.play('pop', T(23, 'away'), { f: 520, gain: 0.7 });
    { const r0 = T(24, 'rip') - 0.1; for (let i = 0; i < 14; i++) k.noise(r0 + i * 0.022, { dur: 0.03, filter: 'bandpass', f: 2200 + (i % 4) * 500, q: 1.5, gain: 0.35, a: 0.002 }); k.play('swish', r0, { dur: 0.3, gain: 0.6 }); }
    k.play('pop', T(25, 'weed') - 0.1, { f: 600, gain: 0.6, pan: -0.3 }); k.play('pop', T(25, 'dog') - 0.1, { f: 760, gain: 0.6, pan: 0.3 });
    k.play('success', B[25].e + 0.4, { f: 'D6', gain: 0.45 });
  }

  // fonts used by this style (loaded with the shell's other fonts before the first frame)
  try { if (document.fonts) ['700 120px "Kalam"', '400 60px "Patrick Hand"'].forEach((f) => document.fonts.load(f, 'AaZz09?!~')); } catch (e) { /* render anyway */ }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
