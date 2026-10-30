// ================= Chalkboard Lesson, vertical 1080x1920: "Why is a cat's tongue so rough?" =================
// Unattended run: no storyboard step. BEATS copied from phrases.json (Kokoro am_michael).
// One long slate: seven stretches of board ("boards"), 1500 world px apart. The camera tracks along the slate between
// some of them (a chalk leader arrow is drawn on the way), and the felt eraser wipes the screen clean for the others.
// Rendering engine (slate, chalk, tray, eraser, sound scoring) carried over from the Chalkboard Lesson house build.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'p0', s: 0.25, e: 2.63, w: {'why': 0.25, 'does': 0.44, 'your': 0.69, 'cats': 0.94, 'tongue': 1.19, 'feel': 1.57, 'like': 1.82, 'sandpaper': 2.07} },  // Why does your cat's tongue feel like sandpaper?
    { id: 'p1', s: 3.18, e: 5.80, w: {'its': 3.18, 'covered': 3.45, 'in': 4.08, 'about': 4.26, '300': 4.72, 'tiny': 4.99, 'hooks': 5.35} },  // It's covered in about 300 tiny hooks,
    { id: 'p2', s: 6.10, e: 7.52, w: {'all': 6.1, 'pointing': 6.31, 'backwards': 6.88} },  // all pointing backwards.
    { id: 'p3', s: 8.07, e: 10.14, w: {'each': 8.07, 'hook': 8.35, 'is': 8.62, 'a': 8.76, 'spine': 8.83, 'called': 9.17, 'papilla': 9.65} },  // Each hook is a spine called a papilla,
    { id: 'p4', s: 10.44, e: 11.58, w: {'made': 10.44, 'of': 10.79, 'keratin': 10.97} },  // made of keratin,
    { id: 'p5', s: 11.88, e: 13.86, w: {'the': 11.88, 'same': 12.09, 'stuff': 12.36, 'as': 12.7, 'your': 12.84, 'fingernails': 13.11} },  // the same stuff as your fingernails.
    { id: 'p6', s: 14.41, e: 15.59, w: {'but': 14.41, 'the': 14.61, 'weirdest': 14.81, 'part': 15.33} },  // But the weirdest part?
    { id: 'p7', s: 16.14, e: 18.08, w: {'the': 16.14, 'tip': 16.36, 'of': 16.59, 'every': 16.74, 'spine': 17.11, 'is': 17.48, 'hollow': 17.63} },  // The tip of every spine is hollow,
    { id: 'p8', s: 18.38, e: 20.34, w: {'a': 18.38, 'tiny': 18.47, 'scoop': 18.81, 'like': 19.23, 'quill': 19.66, 'pen': 20.09} },  // a tiny scoop, like a quill pen.
    { id: 'p9', s: 20.89, e: 21.95, w: {'when': 20.89, 'a': 21.22, 'cat': 21.3, 'licks': 21.54} },  // When a cat licks,
    { id: 'p10', s: 22.25, e: 23.87, w: {'those': 22.25, 'scoops': 22.62, 'sip': 23.06, 'up': 23.28, 'saliva': 23.43} },  // those scoops sip up saliva,
    { id: 'p11', s: 24.17, e: 25.71, w: {'slide': 24.17, 'down': 24.52, 'through': 24.8, 'the': 25.29, 'fur': 25.5} },  // slide down through the fur,
    { id: 'p12', s: 26.01, e: 27.54, w: {'and': 26.01, 'drop': 26.24, 'it': 26.55, 'onto': 26.7, 'the': 27.01, 'skin': 27.24} },  // and drop it onto the skin.
    { id: 'p13', s: 28.09, e: 29.96, w: {'that': 28.09, 'pulls': 28.38, 'out': 28.74, 'dirt': 28.96, 'and': 29.25, 'tangles': 29.46} },  // That pulls out dirt and tangles,
    { id: 'p14', s: 30.26, e: 31.69, w: {'and': 30.26, 'as': 30.52, 'the': 30.68, 'spit': 30.93, 'dries': 31.27} },  // and as the spit dries,
    { id: 'p15', s: 31.99, e: 33.45, w: {'it': 31.99, 'cools': 32.16, 'the': 32.59, 'cat': 32.85, 'down': 33.1} },  // it cools the cat down.
    { id: 'p16', s: 34.00, e: 35.90, w: {'scientists': 34.0, 'think': 34.63, 'grooming': 34.95, 'handles': 35.46} },  // Scientists think grooming handles
    { id: 'p17', s: 36.20, e: 38.13, w: {'up': 36.2, 'to': 36.35, 'a': 36.5, 'quarter': 36.57, 'of': 37.09, 'cats': 37.31, 'cooling': 37.61} },  // up to a quarter of a cat's cooling.
    { id: 'p18', s: 38.68, e: 40.64, w: {'no': 38.68, 'wonder': 38.81, 'cats': 39.22, 'spend': 39.49, 'up': 39.83, 'to': 39.96, 'a': 40.1, 'quarter': 40.16} },  // No wonder cats spend up to a quarter
    { id: 'p19', s: 40.94, e: 43.30, w: {'of': 40.94, 'their': 41.07, 'waking': 41.41, 'hours': 41.81, 'licking': 42.15, 'themselves': 42.62} },  // of their waking hours licking themselves.
    { id: 'p20', s: 43.85, e: 45.48, w: {'researchers': 43.85, 'built': 44.54, 'a': 44.85, 'hairbrush': 44.91} },  // Researchers built a hairbrush
    { id: 'p21', s: 45.78, e: 47.13, w: {'copying': 45.78, 'the': 46.25, 'cats': 46.45, 'tongue': 46.72} },  // copying the cat's tongue.
    { id: 'p22', s: 47.68, e: 49.02, w: {'so': 47.68, 'would': 47.8, 'you': 48.09, 'brush': 48.26, 'your': 48.56, 'hair': 48.79} },  // So would you brush your hair
    { id: 'p23', s: 49.32, e: 51.02, w: {'with': 49.32, 'three': 49.59, 'hundred': 49.93, 'tiny': 50.41, 'hooks': 50.68} },  // with three hundred tiny hooks?
  ];
  const B = BEATS;
  const T = (i, w) => { const v = B[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const DURATION = B[B.length - 1].e + 1.0;
  // scene changes sit in the pauses between phrases
  const gap = (i) => [B[i - 1].e, B[i].s];
  const PANS = [{ i: 3, from: 0 }, { i: 9, from: 2 }, { i: 16, from: 4 }].map((p) => ({ from: p.from, t0: gap(p.i)[0], t1: gap(p.i)[1] }));
  const WIPES = [{ i: 6, from: 1 }, { i: 13, from: 3 }, { i: 20, from: 5 }].map((p) => ({ from: p.from, t0: gap(p.i)[0], t1: gap(p.i)[1] }));


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
  const catFace = (x, y) => [
    circ(x, y, 250, 215, -1.2, 5.0),
    [[x - 215, y - 110], [x - 190, y - 330], [x - 80, y - 205]], [[x + 215, y - 110], [x + 190, y - 330], [x + 80, y - 205]],
    [[x - 22, y + 20], [x + 22, y + 20], [x, y + 42], [x - 22, y + 20]],
    [[x, y + 42], [x, y + 66]], quad([x, y + 66], [x - 36, y + 96], [x - 80, y + 72], 10), quad([x, y + 66], [x + 36, y + 96], [x + 80, y + 72], 10),
    [[x - 120, y + 30], [x - 330, y]], [[x - 120, y + 60], [x - 330, y + 80]], [[x + 120, y + 30], [x + 330, y]], [[x + 120, y + 60], [x + 330, y + 80]],
  ];
  const tongueU = (x, y, s = 1) => [cubic([x - 60 * s, y], [x - 80 * s, y + 210 * s], [x + 80 * s, y + 210 * s], [x + 60 * s, y]), [[x, y + 18 * s], [x, y + 120 * s]]];
  // candy-cane hook rising from a base line at (x,y), height s
  const hookUp = (x, y, s) => { const r = Math.min(s * 0.22, 34); return [[x, y], [x, y - s], ...circ(x + r, y - s, r, r, Math.PI, Math.PI * 2 + 0.55, 14).slice(1)]; };
  // hook hanging from a strip above: stem down, curl at the bottom
  const hookDown = (x, y, s) => [[x, y], [x, y + s], ...circ(x + s * 0.22, y + s, s * 0.22, s * 0.22, Math.PI, -0.55, 14).slice(1)];
  const catLoaf = () => [
    circ(440, 1350, 260, 115, -2.7, 3.4), circ(240, 1225, 95, 88, -0.2, 6.0),
    [[175, 1170], [165, 1080], [228, 1140]], [[258, 1140], [310, 1082], [312, 1168]],
    quad([212, 1222], [195, 1232], [178, 1222], 6), quad([292, 1222], [275, 1232], [258, 1222], 6),
    quad([690, 1330], [775, 1290], [745, 1205], 14),
  ];

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
        line: (pts, role, w, a, b2, o = {}) => items.push({ k: 'line', pts: P(pts), role, w, a, b: b2, hit: o.hit, inst: o.inst, prog: o.prog }),
        text: (s, x, y, size, font, role, a, b2, o = {}) => items.push({ k: 'text', s, x: x + ox, y, size, font, role, a, b: b2, rot: o.rot || 0, align: o.align || 'center', inst: o.inst, prog: o.prog }),
        dot: (x, y, r, role, a, o = {}) => items.push({ k: 'dot', x: x + ox, y, r, role, a: o.inst ? -1 : a, b: o.inst ? 0 : a + 0.05, inst: o.inst }),
        many: (list, role, w, a, b2, o = {}) => list.forEach((pts, i) => { const n = list.length, aa = a + (b2 - a) * i / n, bb = a + (b2 - a) * (i + 1) / n; items.push({ k: 'line', pts: P(pts), role, w, a: aa, b: bb, inst: o.inst, prog: o.prog }); }),
      };
    };
    // ===== board 0: the hook: a cat with its tongue out =====
    {
      const D = mk(0);
      D.many(catFace(540, 540), 'ink', 6, T(0, 'why') - 0.1, T(0, 'cats') + 0.15);
      D.dot(450, 470, 16, 'ink', T(0, 'cats') + 0.1); D.dot(630, 470, 16, 'ink', T(0, 'cats') + 0.15);
      D.many(tongueU(540, 630), 'acc2', 7, T(0, 'tongue') - 0.12, T(0, 'tongue') + 0.3);
      D.text('SANDPAPER?', 540, 1020, 130, 'title', 'ink', T(0, 'sandpaper') - 0.15, T(0, 'sandpaper') + 0.5, { rot: -0.02 });
      D.line([[190, 1060], [890, 1050]], 'acc1', 8, B[0].e - 0.1, B[0].e + 0.12, { hit: true });
      D.text('~300', 540, 1270, 210, 'num', 'acc1', T(1, '300') - 0.15, T(1, '300') + 0.35, { rot: -0.015 });
      [[505, 670], [575, 670], [490, 715], [540, 720], [590, 715], [510, 765], [570, 765], [540, 800]].forEach(([x, y], i) => D.line(hookUp(x, y, 22), 'acc1', 3.5, T(1, 'hooks') - 0.15 + i * 0.04, T(1, 'hooks') - 0.05 + i * 0.04));
      D.text('tiny hooks', 540, 1400, 88, 'label', 'acc1', T(1, 'tiny') - 0.12, T(1, 'hooks') + 0.25);
      arrow(D, [[700, 830], [700, 680]], 'acc2', 7, T(2, 'pointing') - 0.05, T(2, 'backwards'));
      arrow(D, [[380, 830], [380, 680]], 'acc2', 7, T(2, 'pointing') + 0.1, T(2, 'backwards') + 0.1);
      D.text('all point backwards', 540, 1540, 76, 'label', 'acc2', T(2, 'pointing') - 0.12, T(2, 'backwards') + 0.35);
    }
    // ===== board 1: one papilla up close =====
    {
      const D = mk(1);
      D.line([[80, 1250], [1000, 1244]], 'acc2', 7, T(3, 'each') - 0.1, T(3, 'hook'));
      D.line(cubic([360, 1250], [380, 900], [480, 700], [720, 560]), 'ink', 8, T(3, 'hook') - 0.1, T(3, 'spine'), { hit: true });
      D.line(cubic([560, 1250], [540, 980], [600, 760], [720, 560]), 'ink', 8, T(3, 'spine'), T(3, 'called'));
      D.text('papilla', 540, 330, 124, 'title', 'acc1', T(3, 'papilla') - 0.15, T(3, 'papilla') + 0.45, { rot: -0.02 });
      D.line([[330, 360], [760, 352]], 'acc1', 7, B[3].e - 0.1, B[3].e + 0.1);
      D.text('keratin', 270, 560, 96, 'title', 'acc4', T(4, 'keratin') - 0.15, T(4, 'keratin') + 0.4);
      arrow(D, quad([300, 600], [330, 760], [455, 860], 16), 'acc4', 6, T(4, 'keratin') + 0.3, T(4, 'keratin') + 0.55);
      D.text('same as fingernails', 540, 1370, 66, 'label', 'ink', T(5, 'same') - 0.1, T(5, 'your'));
      D.many([rrect(260, 1430, 560, 150, 75), rrect(640, 1448, 150, 114, 46), [[680, 1470], [760, 1470]], [[420, 1450], [430, 1560]], [[540, 1445], [550, 1565]]], 'acc4', 6, T(5, 'fingernails') - 0.25, T(5, 'fingernails') + 0.35);
    }
    // ===== board 2: the hollow tip, like a quill pen =====
    {
      const D = mk(2);
      D.text('the weirdest part?', 540, 320, 104, 'title', 'ink', T(6, 'weirdest') - 0.15, T(6, 'part') + 0.25, { rot: -0.015 });
      D.line([[160, 356], [920, 348]], 'acc2', 7, B[6].e - 0.1, B[6].e + 0.1);
      D.line(circ(540, 620, 190, 200, 0, Math.PI, 30), 'ink', 8, T(7, 'tip') - 0.12, T(7, 'every'), { hit: true });
      D.line([[405, 762], [465, 1040]], 'ink', 7, T(7, 'every'), T(7, 'spine'));
      D.line([[675, 762], [615, 1040]], 'ink', 7, T(7, 'spine') - 0.05, T(7, 'is'));
      D.line(circ(540, 620, 118, 128, 0, Math.PI, 24), 'acc4', 8, T(7, 'hollow') - 0.15, T(7, 'hollow') + 0.2, { hit: true });
      D.text('hollow!', 860, 540, 88, 'title', 'acc2', T(7, 'hollow') - 0.1, T(7, 'hollow') + 0.35, { rot: -0.05 });
      D.text('scoop', 210, 540, 88, 'title', 'acc4', T(8, 'scoop') - 0.12, T(8, 'scoop') + 0.3, { rot: 0.04 });
      const shaft = [[270, 1575], [830, 1115]];
      D.many([shaft, cubic([400, 1468], [470, 1290], [700, 1150], [830, 1112]), cubic([445, 1500], [620, 1420], [790, 1250], [832, 1116]), [[270, 1575], [300, 1515], [345, 1540], [270, 1575]], [[278, 1566], [312, 1536]]], 'acc1', 6, T(8, 'quill') - 0.15, T(8, 'pen') + 0.15);
      D.text('quill pen', 780, 1520, 80, 'label', 'acc1', T(8, 'pen') - 0.1, B[8].e);
    }
    // ===== board 3: lick: saliva down through the fur to the skin =====
    {
      const D = mk(3);
      D.text('tongue', 230, 290, 68, 'label', 'acc2', T(9, 'cat') - 0.1, T(9, 'licks'));
      D.line(rrect(120, 330, 840, 80, 30), 'acc2', 7, T(9, 'cat') - 0.1, T(9, 'licks') + 0.1);
      const HX = [190, 300, 410, 520, 630, 740, 850];
      HX.forEach((x, i) => D.line(hookDown(x, 410, 170), 'ink', 6, T(9, 'licks') + i * 0.06, T(9, 'licks') + 0.14 + i * 0.06));
      D.text('saliva', 830, 290, 84, 'title', 'acc4', T(10, 'saliva') - 0.12, B[10].e);
      // fur strands, drawn as the hooks slide in
      const fur = []; for (let i = 0; i < 13; i++) { const x = 160 + i * 60; fur.push(quad([x, 1385], [x + 26, 960], [x - 8, 540], 18)); }
      D.many(fur, 'ink', 3.5, T(11, 'slide') - 0.15, T(11, 'fur') + 0.1);
      D.text('fur', 985, 990, 76, 'label', 'ink', T(11, 'fur') - 0.12, B[11].e);
      D.line([[90, 1395], [990, 1389]], 'acc1', 9, T(12, 'skin') - 0.15, T(12, 'skin') + 0.2, { hit: true });
      D.text('skin', 540, 1530, 96, 'title', 'acc1', T(12, 'skin') - 0.1, T(12, 'skin') + 0.3);
      // saliva drops: sipped up into each scoop, then carried down to the skin
      const u = eio(win(t, T(11, 'slide'), T(12, 'onto')));
      HX.forEach((x, i) => {
        const a = T(10, 'sip') - 0.1 + i * 0.06; if (t < a) return;
        const g = win(t, a, a + 0.15), y = 612 + u * (1368 - 612 - (i % 3) * 6), wob2 = Math.sin(t * 5 + i) * 4 * (u > 0 && u < 1 ? 1 : 0);
        items.push({ k: 'dot', x: D.ox + x + 37 + wob2, y, r: 13 * g, role: 'acc4', a: -1, b: 0, inst: true });
      });
      D.line([[150, 1374], [930, 1370]], 'acc4', 7, T(12, 'skin') + 0.1, T(12, 'skin') + 0.5);
    }
    // ===== board 4: it cleans, and it cools =====
    {
      const D = mk(4);
      const rr = H.rng(44);
      for (let i = 0; i < 12; i++) D.dot(rr.range(170, 350), rr.range(500, 620), rr.range(6, 12), 'ink', T(13, 'dirt') - 0.12 + i * 0.02);
      D.text('dirt', 260, 450, 72, 'label', 'ink', T(13, 'dirt') - 0.1, T(13, 'and'));
      const tang = []; for (let j = 0; j <= 120; j++) { const a = j / 120 * Math.PI * 7; tang.push([175 + j * 1.4 + 55 * Math.cos(a), 760 + 48 * Math.sin(a * 1.3)]); }
      D.line(tang, 'acc4', 5, T(13, 'tangles') - 0.12, T(13, 'tangles') + 0.35);
      D.text('tangles', 260, 880, 72, 'label', 'acc4', T(13, 'tangles') - 0.05, B[13].e);
      arrow(D, [[450, 660], [800, 660]], 'acc1', 9, T(13, 'pulls') - 0.05, T(13, 'out'));
      D.text('OUT!', 830, 580, 120, 'title', 'acc2', T(13, 'out') - 0.05, T(13, 'out') + 0.25, { rot: -0.06 });
      D.many(catLoaf(), 'ink', 6, T(14, 'and') - 0.1, T(14, 'spit') + 0.1);
      [0, 1, 2].forEach((k2) => { const x0 = 330 + k2 * 140, P = []; for (let j = 0; j <= 12; j++) P.push([x0 + 16 * Math.sin(j * 0.9), 1190 - j * 13]); D.line(P, 'acc4', 6, T(14, 'dries') - 0.12 + k2 * 0.12, T(14, 'dries') + 0.15 + k2 * 0.12); });
      D.text('spit dries', 520, 1000, 80, 'label', 'acc4', T(14, 'spit') - 0.1, T(14, 'dries') + 0.2);
      D.many([rrect(845, 1000, 70, 360, 35), circ(880, 1412, 55, 55, -1.1, 4.25)], 'ink', 6, T(15, 'it') - 0.15, T(15, 'cools'));
      if (t > T(15, 'cools') - 0.1) {
        const lv = 1060 + 200 * eio(win(t, T(15, 'cools'), T(15, 'down')));
        D.line([[880, 1400], [880, lv]], 'acc2', 18, -1, 0, { inst: true });
        D.dot(880, 1412, 34, 'acc2', 0, { inst: true });
      }
      arrow(D, [[1000, 1060], [1000, 1300]], 'acc4', 7, T(15, 'cat') - 0.05, T(15, 'down'));
      D.text('cooler', 880, 1570, 84, 'title', 'acc4', T(15, 'down') - 0.1, T(15, 'down') + 0.3);
    }
    // ===== board 5: the numbers =====
    {
      const D = mk(5);
      D.text('scientists think...', 540, 300, 72, 'label', 'ink', T(16, 'scientists') - 0.1, T(16, 'think') + 0.25);
      D.line(circ(330, 620, 170, 170, -Math.PI / 2, Math.PI * 1.5), 'ink', 7, T(16, 'grooming') - 0.1, T(16, 'handles') + 0.1);
      D.line([[330, 450], [330, 620], [500, 620]], 'acc1', 7, T(17, 'quarter') - 0.15, T(17, 'quarter') + 0.1, { hit: true });
      for (let i = 0; i < 6; i++) { const a = 30 + i * 24; D.line([[330 + a, 620], [330, 620 - a]], 'acc1', 4, T(17, 'quarter') + 0.1 + i * 0.04, T(17, 'quarter') + 0.16 + i * 0.04); }
      D.text('up to', 790, 500, 60, 'label', 'ink', T(17, 'up') - 0.1, T(17, 'quarter'));
      D.text('1/4', 790, 690, 190, 'num', 'acc1', T(17, 'quarter') - 0.12, T(17, 'quarter') + 0.3);
      D.text('of its cooling', 790, 790, 60, 'label', 'acc1', T(17, 'cooling') - 0.15, T(17, 'cooling') + 0.35);
      D.line(circ(330, 1220, 170, 170, -Math.PI / 2, Math.PI * 1.5), 'ink', 7, T(18, 'cats') - 0.1, T(18, 'spend'));
      [[0, -1], [1, 0], [0, 1], [-1, 0]].forEach(([dx, dy], i) => D.line([[330 + dx * 145, 1220 + dy * 145], [330 + dx * 165, 1220 + dy * 165]], 'ink', 5, T(18, 'spend') + i * 0.04, T(18, 'spend') + 0.04 + i * 0.04));
      D.line([[330, 1090], [330, 1220], [460, 1220]], 'acc2', 7, T(18, 'quarter') - 0.15, T(18, 'quarter') + 0.1, { hit: true });
      for (let i = 0; i < 5; i++) { const a = 30 + i * 24; D.line([[330 + a, 1220], [330, 1220 - a]], 'acc2', 4, T(18, 'quarter') + 0.1 + i * 0.04, T(18, 'quarter') + 0.16 + i * 0.04); }
      D.text('up to', 790, 1100, 60, 'label', 'ink', T(18, 'up') - 0.1, T(18, 'quarter'));
      D.text('1/4', 790, 1290, 190, 'num', 'acc2', T(18, 'quarter') - 0.12, T(18, 'quarter') + 0.3);
      D.text('of awake time', 790, 1390, 60, 'label', 'acc2', T(19, 'waking') - 0.12, T(19, 'hours') + 0.25);
      D.text('licking!', 540, 1570, 104, 'title', 'acc1', T(19, 'licking') - 0.12, T(19, 'licking') + 0.4, { rot: -0.03 });
    }
    // ===== board 6: the cat-tongue hairbrush and the loop-back question =====
    {
      const D = mk(6);
      D.many([rrect(150, 520, 600, 120, 40), rrect(750, 555, 270, 56, 28)], 'ink', 7, T(20, 'built') - 0.12, T(20, 'hairbrush') + 0.3);
      for (let i = 0; i < 9; i++) D.line(hookDown(195 + i * 62, 640, 100), 'acc1', 5, T(20, 'hairbrush') + 0.1 + i * 0.05, T(20, 'hairbrush') + 0.2 + i * 0.05);
      D.text('cat-tongue brush', 540, 400, 92, 'title', 'acc1', T(21, 'copying') - 0.12, T(21, 'cats'), { rot: -0.015 });
      D.many(tongueU(260, 880, 1.1), 'acc2', 7, T(21, 'cats') - 0.05, T(21, 'tongue') + 0.25);
      arrow(D, quad([380, 960], [480, 950], [520, 830], 14), 'acc2', 6, T(21, 'tongue') + 0.1, B[21].e);
      D.text('would YOU?', 600, 1150, 136, 'title', 'acc2', T(22, 'would') - 0.15, T(22, 'you') + 0.3, { rot: -0.03 });
      D.text('300 hooks', 540, 1430, 150, 'num', 'acc1', T(23, 'three') - 0.15, T(23, 'hooks') + 0.3);
      D.line(circ(540, 1380, 380, 125, -2.0, 4.4), 'acc2', 7, B[23].e - 0.05, B[23].e + 0.35, { hit: true });
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
    [0, 540, 960, 1.06, 0], [7.52, 540, 960, 1.0, 0],
    [8.07, 540, 960, 1.0, 1], [13.86, 540, 990, 1.05, 1],
    [14.41, 540, 960, 1.06, 2], [20.34, 540, 960, 1.0, 2],
    [20.89, 540, 960, 1.0, 3], [27.54, 540, 975, 1.04, 3],
    [28.09, 540, 960, 1.04, 4], [33.45, 540, 960, 1.0, 4],
    [34.0, 540, 960, 1.0, 5], [43.3, 540, 960, 1.04, 5],
    [43.85, 540, 960, 1.04, 6], [60, 540, 960, 1.0, 6],
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
    k.play('impact', T(0, 'sandpaper') - 0.1, { gain: 0.6 }); k.play('ding', T(0, 'sandpaper') + 0.3, { f: 'G5', gain: 0.35 });
    knock(T(1, '300'), 1.2, 0, false); k.play('ding', T(1, '300') + 0.05, { f: 'D6', gain: 0.3 });
    k.play('sparkle', T(1, 'hooks') - 0.15, { n: 6, gain: 0.35 });
    k.play('swish', T(2, 'backwards') - 0.1, { dur: 0.35, gain: 0.5 });
    k.play('ding', T(3, 'papilla'), { f: 'E5', gain: 0.3 }); k.play('ding', T(4, 'keratin'), { f: 'B5', gain: 0.3 });
    k.play('pop', T(5, 'fingernails'), { f: 520, gain: 0.5 });
    k.play('impact', T(6, 'weirdest') - 0.05, { gain: 0.45 });
    k.play('sparkle', T(7, 'hollow') - 0.1, { n: 7, gain: 0.45 }); k.play('ding', T(7, 'hollow') + 0.1, { f: 'A5', gain: 0.35 });
    k.play('ding', T(8, 'quill'), { f: 'C6', gain: 0.3 });
    k.play('swish', T(9, 'licks') - 0.05, { dur: 0.4, gain: 0.55 });
    for (let i = 0; i < 7; i++) k.play('pop', T(10, 'sip') - 0.1 + i * 0.06, { f: 700 + i * 60, gain: 0.35, minor: true });
    k.noise(T(11, 'slide'), { dur: T(12, 'onto') - T(11, 'slide'), color: 'pink', filter: 'bandpass', f: [[0, 1200], [2, 500]], q: 0.6, gain: 0.05, a: 0.3, minor: true });
    k.play('thud', T(12, 'skin') - 0.05, { f: 180, gain: 0.5 }); k.play('success', T(12, 'skin') + 0.15, { f: 'G5', gain: 0.4 });
    k.play('swish', T(13, 'out') - 0.1, { dur: 0.3, gain: 0.6 }); k.play('pop', T(13, 'out'), { f: 600, gain: 0.6 });
    k.play('sparkle', T(14, 'dries') - 0.1, { n: 6, gain: 0.35 });
    k.tone(T(15, 'cools'), { f: [[0, 900], [0.9, 300]], type: 'sine', dur: 0.9, gain: 0.08, a: 0.05 });
    k.play('ding', T(15, 'down'), { f: 'E5', gain: 0.3 });
    k.play('stamp', T(17, 'quarter'), { gain: 0.55 }); k.play('ding', T(17, 'quarter') + 0.05, { f: 'D6', gain: 0.3 });
    k.play('stamp', T(18, 'quarter'), { gain: 0.55 }); k.play('ding', T(18, 'quarter') + 0.05, { f: 'F6', gain: 0.3 });
    k.play('success', T(19, 'licking'), { f: 'A5', gain: 0.45 });
    k.play('success', T(20, 'hairbrush') + 0.2, { f: 'C6', gain: 0.4 });
    k.play('pop', T(22, 'would') - 0.1, { f: 700, gain: 0.6 });
    k.play('impact', T(23, 'three') - 0.1, { gain: 0.5 });
    k.play('success', B[23].e + 0.3, { f: 'D6', gain: 0.45 });
  }


  // fonts used by this style (loaded with the shell's other fonts before the first frame)
  try { if (document.fonts) ['700 120px "Kalam"', '400 60px "Patrick Hand"'].forEach((f) => document.fonts.load(f, 'AaZz09?!~')); } catch (e) { /* render anyway */ }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
