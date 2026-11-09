// ================= Napkin Sketch, vertical 1080x1920: "How do owls fly without making a sound?" (no storyboard step: unattended run) =================
(function () {
  const W_ = 1080, HH = 1920, NW = 960, NH = 1440, NCX = 540, NCY = 905;
  const PH = [{"s":0.25,"e":1.58,"text":"Why can't you hear an owl","words":[["why",0.25],["cant",0.46],["you",0.74],["hear",0.95],["an",1.23],["owl",1.37]]},{"s":1.72,"e":3.25,"text":"until it's three feet from you?","words":[["until",1.72],["its",2.04],["three",2.23],["feet",2.55],["from",2.8],["you",3.06]]},{"s":3.78,"e":6.49,"text":"Most birds' wings churn the air into big swirls,","words":[["most",3.78],["birds",4.06],["wings",4.42],["churn",4.78],["the",5.13],["air",5.35],["into",5.56],["big",5.85],["swirls",6.06]]},{"s":6.63,"e":9.24,"text":"and those swirls are the whoosh you hear.","words":[["and",6.63],["those",6.87],["swirls",7.26],["are",7.74],["the",7.97],["whoosh",8.21],["you",8.69],["hear",8.93]]},{"s":9.6,"e":11.94,"text":"But an owl's front wing feathers have a comb,","words":[["but",9.6],["an",9.8],["owls",9.94],["front",10.2],["wing",10.54],["feathers",10.8],["have",11.34],["a",11.61],["comb",11.67]]},{"s":12.32,"e":14.07,"text":"tiny teeth along the edge.","words":[["tiny",12.32],["teeth",12.65],["along",13.07],["the",13.49],["edge",13.74]]},{"s":14.5,"e":17.04,"text":"They split the air into small, quiet streams.","words":[["they",14.5],["split",14.78],["the",15.14],["air",15.35],["into",15.56],["small",15.84],["quiet",16.19],["streams",16.54]]},{"s":17.47,"e":20.16,"text":"Then a soft, ragged fringe on the back edge","words":[["then",17.47],["a",17.78],["soft",17.86],["ragged",18.18],["fringe",18.65],["on",19.13],["the",19.29],["back",19.53],["edge",19.84]]},{"s":20.53,"e":22.4,"text":"and a velvety coat on top","words":[["and",20.53],["a",20.81],["velvety",20.9],["coat",21.56],["on",21.93],["top",22.12]]},{"s":22.72,"e":24.13,"text":"hush whatever noise is left.","words":[["hush",22.72],["whatever",22.96],["noise",23.45],["is",23.76],["left",23.88]]},{"s":24.5,"e":25.84,"text":"Big wings help too.","words":[["big",24.5],["wings",24.77],["help",25.22],["too",25.57]]},{"s":26.12,"e":29.14,"text":"A barn owl can fly as slowly as two miles an hour,","words":[["a",26.12],["barn",26.2],["owl",26.52],["can",26.76],["fly",27.0],["as",27.24],["slowly",27.4],["as",27.87],["two",28.03],["miles",28.27],["an",28.67],["hour",28.83]]},{"s":29.65,"e":31.2,"text":"and slower means quieter.","words":[["and",29.65],["slower",29.87],["means",30.31],["quieter",30.68]]},{"s":31.59,"e":35.21,"text":"Its wings mute the high sounds above sixteen hundred hertz,","words":[["its",31.59],["wings",31.81],["mute",32.18],["the",32.48],["high",32.7],["sounds",33.0],["above",33.44],["sixteen",33.81],["hundred",34.33],["hertz",34.84]]},{"s":35.69,"e":37.75,"text":"right where a mouse's hearing begins.","words":[["right",35.69],["where",36.04],["a",36.38],["mouses",36.45],["hearing",36.86],["begins",37.34]]},{"s":38.17,"e":39.95,"text":"So the mouse never hears it coming,","words":[["so",38.17],["the",38.3],["mouse",38.49],["never",38.81],["hears",39.13],["it",39.44],["coming",39.57]]},{"s":40.44,"e":42.77,"text":"but the owl hears the mouse just fine.","words":[["but",40.44],["the",40.68],["owl",40.91],["hears",41.14],["the",41.53],["mouse",41.76],["just",42.15],["fine",42.46]]},{"s":43.18,"e":44.99,"text":"If an owl flew over you tonight,","words":[["if",43.18],["an",43.32],["owl",43.47],["flew",43.69],["over",43.97],["you",44.26],["tonight",44.48]]},{"s":45.36,"e":46.37,"text":"do you think you'd hear it?","words":[["do",45.36],["you",45.46],["think",45.61],["youd",45.86],["hear",46.06],["it",46.27]]}];
  // one entry per idea; every time below reads from here
  const BEATS = [
    { id: 'hook', p: [0, 1] }, { id: 'swirls', p: [2, 3] }, { id: 'comb', p: [4, 6] }, { id: 'fringe', p: [7, 9] },
    { id: 'slow', p: [10, 12] }, { id: 'hertz', p: [13, 14] }, { id: 'mouse', p: [15, 16] }, { id: 'end', p: [17, 18] },
  ].map((b) => ({ ...b, s: PH[b.p[0]].s, e: PH[b.p[1]].e, text: PH.slice(b.p[0], b.p[1] + 1).map((x) => x.text).join(' ') }));
  const DURATION = PH[PH.length - 1].e + 1.0;
  const T = (i, w) => { const f = PH[i].words.find((x) => x[0] === w); if (!f) throw new Error('no word ' + w + ' in ' + i); return f[1]; };
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const win = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const seg = (pts, step = 2.5) => { const out = []; for (let i = 0; i < pts.length - 1; i++) { const [x0, y0] = pts[i], [x1, y1] = pts[i + 1], n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / step)); for (let j = 0; j < n; j++) out.push([x0 + (x1 - x0) * j / n, y0 + (y1 - y0) * j / n]); } out.push(pts[pts.length - 1]); return out; };
  const normals = (P) => P.map((p, i) => { const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1; return [-dy / d, dx / d]; });
  const wob = (pts, nz, seed, amp = 1.6, freq = 0.012) => { const N = normals(pts); let L = 0; return pts.map((p, i) => { if (i) L += Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]); const o = nz.n2(L * freq + seed * 1.37, seed * 0.71) * amp + nz.n2(L * freq * 6 + seed, seed + 3.3) * amp * 0.3; return [p[0] + N[i][0] * o, p[1] + N[i][1] * o]; }); };
  const ell = (cx, cy, rx, ry, a0 = 0, a1 = Math.PI * 2) => { const n = Math.max(10, Math.ceil(Math.abs(a1 - a0) * Math.max(rx, ry) / 2.5)), out = []; for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; out.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]); } return out; };
  const quad = (p0, p1, p2, n = 40) => { const out = []; for (let i = 0; i <= n; i++) { const t = i / n, m = 1 - t; out.push([m * m * p0[0] + 2 * m * t * p1[0] + t * t * p2[0], m * m * p0[1] + 2 * m * t * p1[1] + t * t * p2[1]]); } return out; };

  // ---------- the napkins: each is a list of timed Sharpie items in napkin space (0..960, 0..1440) ----------
  const NAPS = []; let cur = null;
  const nap = (land, rot, ring) => { cur = { land, s0: land - 0.42, s1: land, rot, ring, items: [] }; NAPS.push(cur); };
  const line = (pts, role, w, a, b) => cur.items.push({ k: 'line', pts, role, w, a, b });
  const text = (s, x, y, size, role, a, b, opt = {}) => cur.items.push({ k: 'text', s, x, y, size, role, a, b, align: opt.align || 'center', rot: opt.rot || 0 });
  const dot = (x, y, r, role, a) => cur.items.push({ k: 'dot', x, y, r, role, a, b: a + 0.05 });
  const fn = (a, e, draw) => cur.items.push({ k: 'fn', a, e, b: a, draw, inst: true });
  const arrow = (pts, role, w, a, b, hl = 30) => {
    line(pts, role, w, a, b); const n = pts.length, [x1, y1] = pts[n - 1], [x0, y0] = pts[Math.max(0, n - 4)], ang = Math.atan2(y1 - y0, x1 - x0);
    line([[x1 + Math.cos(ang + 2.6) * hl, y1 + Math.sin(ang + 2.6) * hl], [x1, y1], [x1 + Math.cos(ang - 2.6) * hl, y1 + Math.sin(ang - 2.6) * hl]], role, w, b, b + 0.08);
  };

  // ---------- drawing recipes (Sharpie strokes in napkin space) ----------
  const scallops = (A, B, n, bulge) => { const out = []; const dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy), px = -dy / L, py = dx / L;
    for (let i = 0; i < n; i++) { const p0 = [A[0] + dx * i / n, A[1] + dy * i / n], p1 = [A[0] + dx * (i + 1) / n, A[1] + dy * (i + 1) / n], m = [(p0[0] + p1[0]) / 2 + px * bulge, (p0[1] + p1[1]) / 2 + py * bulge]; out.push(...quad(p0, m, p1, 12).slice(i ? 1 : 0)); } return out; };
  // an owl in flight, seen from the front: heart-shaped face disc, big round wings with scalloped feather tips
  const owl = (cx, cy, s, a, d, role = 'ink') => {
    const st = (u, v) => [a + d * u, a + d * v]; let p, q;
    [p, q] = st(0, 0.14); line(ell(cx, cy - 0.42 * s, 0.21 * s, 0.18 * s, -Math.PI / 2, Math.PI * 1.5), role, 7, p, q);
    [p, q] = st(0.12, 0.2); line(quad([cx, cy - 0.58 * s], [cx, cy - 0.45 * s], [cx, cy - 0.34 * s], 8), role, 5, p, q);
    dot(cx - 0.09 * s, cy - 0.44 * s, 0.04 * s, role, a + d * 0.2); dot(cx + 0.09 * s, cy - 0.44 * s, 0.04 * s, role, a + d * 0.22);
    [p, q] = st(0.22, 0.28); line([[cx - 0.025 * s, cy - 0.35 * s], [cx, cy - 0.3 * s], [cx + 0.025 * s, cy - 0.35 * s]], role, 5, p, q);
    [p, q] = st(0.26, 0.4); line(ell(cx, cy, 0.19 * s, 0.3 * s, -0.95, Math.PI + 0.95), role, 7, p, q);
    [-1, 1].forEach((sg, i) => {
      const r0 = [cx + sg * 0.17 * s, cy - 0.2 * s], tip = [cx + sg * 1.0 * s, cy - 0.32 * s], back = [cx + sg * 0.18 * s, cy + 0.12 * s];
      [p, q] = st(0.4 + i * 0.25, 0.52 + i * 0.25); line(quad(r0, [cx + sg * 0.55 * s, cy - 0.52 * s], tip, 24), role, 7, p, q);
      [p, q] = st(0.5 + i * 0.25, 0.65 + i * 0.25); line(sg < 0 ? scallops(tip, back, 6, -0.06 * s) : scallops(back, tip, 6, -0.06 * s), role, 7, p, q);
    });
    [p, q] = st(0.9, 1); line([[cx - 0.09 * s, cy + 0.27 * s], [cx - 0.12 * s, cy + 0.42 * s], [cx, cy + 0.45 * s], [cx + 0.12 * s, cy + 0.42 * s], [cx + 0.09 * s, cy + 0.27 * s]], role, 6, p, q);
  };
  // a wing seen side-on (airfoil): thick rounded front, thin tail
  const airfoil = (x0, x1, y, a, d) => { const w = x1 - x0;
    line(quad([x0, y + 12], [x0 + 0.28 * w, y - 120], [x1, y + 22], 30), 'ink', 8, a, a + d * 0.55);
    line(quad([x0, y + 12], [x0 + 0.3 * w, y + 70], [x1, y + 22], 30), 'ink', 8, a + d * 0.5, a + d);
    line(ell(x0 + 14, y + 14, 16, 20, Math.PI * 0.5, Math.PI * 1.5), 'ink', 8, a + d * 0.45, a + d * 0.55);
  };
  const spiral = (cx, cy, R, turns = 2.2, dir = 1) => { const out = []; const n = 70; for (let i = 0; i <= n; i++) { const u = i / n, an = dir * u * turns * Math.PI * 2, r = 8 + (R - 8) * u; out.push([cx + Math.cos(an) * r, cy + Math.sin(an) * r]); } return out; };
  const wave = (x0, x1, y, amp, n = 3) => { const out = []; for (let i = 0; i <= 40; i++) { const u = i / 40; out.push([x0 + (x1 - x0) * u, y + Math.sin(u * Math.PI * 2 * n) * amp]); } return out; };
  const mouse = (cx, cy, s, a, d) => { const st = (u, v) => [a + d * u, a + d * v]; let p, q;
    [p, q] = st(0, 0.3); line(ell(cx, cy, 0.45 * s, 0.27 * s, 0.4, Math.PI * 2 + 0.1), 'ink', 7, p, q);
    [p, q] = st(0.28, 0.45); line([[cx + 0.38 * s, cy - 0.15 * s], [cx + 0.78 * s, cy + 0.02 * s], [cx + 0.42 * s, cy + 0.12 * s]], 'ink', 7, p, q);
    [p, q] = st(0.45, 0.6); line(ell(cx + 0.36 * s, cy - 0.3 * s, 0.13 * s, 0.14 * s), 'ink', 7, p, q);
    dot(cx + 0.56 * s, cy - 0.05 * s, 0.035 * s, 'ink', a + d * 0.62);
    [p, q] = st(0.65, 0.85); line(quad([cx - 0.44 * s, cy + 0.06 * s], [cx - 0.85 * s, cy + 0.35 * s], [cx - 1.0 * s, cy - 0.05 * s], 16), 'ink', 6, p, q);
    [p, q] = st(0.85, 1); line([[cx - 0.2 * s, cy + 0.25 * s], [cx - 0.24 * s, cy + 0.38 * s]], 'ink', 6, p, q); line([[cx + 0.2 * s, cy + 0.25 * s], [cx + 0.24 * s, cy + 0.38 * s]], 'ink', 6, p, q);
  };
  const ear = (x, y, a, d, k = 1) => { const P = (dx, dy) => [x + dx * k, y + dy * k]; line([...quad(P(-30, -60), P(70, -110), P(60, 10), 16), ...quad(P(60, 10), P(50, 70), P(-5, 80), 12).slice(1)], 'ink', 7, a, a + d * 0.7); line(quad(P(0, -30), P(40, -40), P(25, 15), 10), 'ink', 6, a + d * 0.7, a + d); };
  const check = (x, y, a) => line([[x - 40, y], [x - 10, y + 34], [x + 50, y - 40]], 'acc2', 9, a, a + 0.2);

  // 1. HOOK
  nap(-1, -0.012, [800, 1260, 0.9]);
  text("WHY CAN'T YOU", 480, 230, 100, 'ink', 0.02, T(0, 'hear'));
  text('HEAR AN OWL?', 480, 360, 108, 'ink', T(0, 'hear') - 0.05, PH[0].e);
  line(quad([150, 392], [480, 412], [820, 384], 30), 'acc2', 8, PH[0].e - 0.05, PH[0].e + 0.12);
  owl(480, 760, 300, 0.35, 1.3);
  ear(440, 1290, T(1, 'its') - 0.2, 0.35, 1.5);
  text('YOUR EAR', 210, 1330, 60, 'ink', T(1, 'from'), PH[1].e + 0.1);
  { const a = T(1, 'three') - 0.25; line([[480, 920], [480, 1190]], 'acc2', 8, a, a + 0.2);
    line([[455, 950], [480, 915], [505, 950]], 'acc2', 8, a + 0.2, a + 0.26); line([[455, 1160], [480, 1195], [505, 1160]], 'acc2', 8, a + 0.26, a + 0.32);
    text('3 FEET', 735, 1090, 120, 'acc2', T(1, 'three') - 0.1, T(1, 'feet') + 0.25); }

  // 2. MOST BIRDS: big swirls = whoosh
  nap(PH[2].s - 0.05, 0.016, [130, 1310, 2.4]);
  text('MOST BIRDS', 480, 220, 112, 'ink', T(2, 'most') - 0.05, T(2, 'wings'));
  airfoil(90, 520, 640, T(2, 'wings') - 0.05, 0.6);
  arrow([[40, 470], [380, 470]], 'ink', 7, T(2, 'air') - 0.15, T(2, 'air') + 0.15, 28);
  text('AIR', 120, 440, 64, 'ink', T(2, 'air') - 0.1, T(2, 'into'));
  [[640, 560, 85, 1], [790, 700, 95, -1], [640, 840, 80, 1]].forEach(([x, y, r, dr], i) => line(spiral(x, y, r, 2.2, dr), 'ink', 7, T(2, 'big') - 0.1 + i * 0.15, T(2, 'swirls') + 0.15 + i * 0.15));
  text('BIG SWIRLS', 480, 1060, 104, 'acc2', T(3, 'swirls') - 0.1, T(3, 'are'));
  text('WHOOSH!', 480, 1270, 150, 'acc2', T(3, 'whoosh') - 0.1, T(3, 'whoosh') + 0.35);
  [0, 1, 2].forEach((i) => line(quad([150 + i * 10, 1300 - i * 60], [120, 1250 - i * 60], [130 + i * 6, 1190 - i * 60], 8), 'acc2', 6, T(3, 'you') + i * 0.06, T(3, 'you') + 0.1 + i * 0.06));

  // 3. THE COMB (camera pushes in on the teeth)
  nap(PH[4].s - 0.05, -0.018, [820, 1300, -0.7]);
  text('OWL FEATHER', 480, 230, 104, 'ink', T(4, 'owls') - 0.05, T(4, 'feathers') + 0.2);
  { const a = T(4, 'front'); line(quad([110, 805], [480, 760], [870, 700], 40), 'ink', 7, a - 0.15, a + 0.2);
    line(quad([130, 795], [470, 690], [860, 692], 40), 'ink', 7, a + 0.1, a + 0.45);
    line(quad([130, 815], [460, 1010], [865, 712], 40), 'ink', 7, a + 0.35, a + 0.75);
    for (let i = 1; i < 14; i++) { const y = 800 - i * 4, x = 140 + i * 52; line([[x + 2, y + 12 + i * 0.6], [x - 30, y + 150 - i * 7]], 'ink', 4, a + 0.6 + i * 0.02, a + 0.65 + i * 0.02); } }
  { const P = quad([130, 795], [470, 690], [860, 692], 40), tc = T(4, 'comb') - 0.1;
    for (let i = 2; i < 39; i += 1.5) { const k = Math.floor(i), p0 = P[k], p1 = P[k + 1], an = Math.atan2(p1[1] - p0[1], p1[0] - p0[0]) - 1.15, u = tc + (i / 39) * 0.9;
      line([[p0[0], p0[1]], [p0[0] + Math.cos(an) * 34, p0[1] + Math.sin(an) * 34]], 'acc2', 5, u, u + 0.04); } }
  text('COMB', 260, 470, 120, 'acc2', T(4, 'comb') - 0.1, T(4, 'comb') + 0.35);
  text('tiny teeth', 260, 560, 66, 'ink', T(5, 'tiny') - 0.05, T(5, 'edge'));
  arrow(quad([300, 590], [330, 640], [355, 700], 10), 'ink', 7, T(5, 'along'), T(5, 'edge'), 24);
  text('AIR', 770, 410, 72, 'ink', T(6, 'split') - 0.25, T(6, 'the'));
  arrow([[760, 440], [745, 650]], 'ink', 9, T(6, 'split') - 0.2, T(6, 'split') + 0.1, 30);
  [0, 1, 2, 3, 4, 5].forEach((i) => line(wave(160 + i * 110, 200 + i * 110, 1040, 0, 1).map(([x, y], j) => [x + Math.sin(j / 40 * Math.PI * 4) * 12, 1040 + j * 4.2]), 'ink', 5, T(6, 'air') + i * 0.12, T(6, 'small') + 0.2 + i * 0.12));
  text('QUIET STREAMS', 480, 1340, 90, 'acc2', T(6, 'quiet') - 0.1, PH[6].e + 0.1);

  // 4. FRINGE + VELVET on the owl's wing
  nap(PH[7].s - 0.05, 0.012, [130, 140, 0.4]);
  text('OWL WING', 480, 220, 116, 'ink', PH[7].s, T(7, 'soft'));
  airfoil(130, 620, 700, PH[7].s + 0.1, 0.5);
  for (let i = 0; i < 6; i++) { const y = 700 - 40 + i * 14, x = 128 - (i < 3 ? i * 2 : (5 - i) * 2); line([[x, y], [x - 34, y - 16]], 'ink', 5, PH[7].s + 0.6 + i * 0.03, PH[7].s + 0.64 + i * 0.03); }
  text('comb', 115, 560, 60, 'ink', PH[7].s + 0.6, PH[7].s + 0.9);
  for (let i = 0; i < 11; i++) { const an = -0.5 + i * 0.1, L = 70 + (i % 3) * 26, u = T(7, 'fringe') - 0.15 + i * 0.05; line([[620, 722], [620 + Math.cos(an) * L * 0.5, 722 + Math.sin(an) * L * 0.5 + (i % 2) * 6], [620 + Math.cos(an) * L, 722 + Math.sin(an) * L]], 'acc2', 5, u, u + 0.05); }
  text('FRINGE', 760, 940, 96, 'acc2', T(7, 'ragged') - 0.05, T(7, 'fringe') + 0.25);
  arrow(quad([720, 870], [700, 820], [680, 780], 10), 'acc2', 7, T(7, 'back'), T(7, 'edge') + 0.1, 24);
  { const P = quad([130, 712], [130 + 0.28 * 490, 580], [620, 722], 30); for (let i = 3; i < 28; i++) { const [x, y] = P[i], u = T(8, 'velvety') - 0.05 + i * 0.03; line([[x - 6, y - 8], [x + 4, y - 20]], 'ink', 4, u, u + 0.03); } }
  text('VELVET', 360, 470, 104, 'acc2', T(8, 'velvety') - 0.1, T(8, 'coat') + 0.2);
  arrow(quad([360, 500], [380, 560], [370, 610], 10), 'acc2', 7, T(8, 'coat'), T(8, 'top'), 24);
  [0, 1, 2].forEach((i) => line(wave(720, 900, 600 + i * 34, 6, 2), 'ink', 4, T(9, 'hush') + i * 0.1, T(9, 'hush') + 0.3 + i * 0.1));
  text('shhh...', 480, 1200, 150, 'acc2', T(9, 'hush') - 0.1, T(9, 'noise') + 0.1);

  // 5. BIG WINGS, SLOW FLIGHT
  nap(PH[10].s - 0.05, -0.015, [870, 1210, 1.2]);
  text('BIG WINGS', 480, 210, 118, 'ink', T(10, 'big') - 0.05, T(10, 'too'));
  owl(480, 610, 350, T(10, 'wings') - 0.1, 1.0);
  { const cx = 480, cy = 1075, R = 210, a = T(11, 'barn') - 0.1;
    line(ell(cx, cy, R, R, Math.PI, Math.PI * 2), 'ink', 8, a, a + 0.45);
    for (let i = 0; i <= 6; i++) { const an = Math.PI + i * Math.PI / 6; line([[cx + Math.cos(an) * (R - 10), cy + Math.sin(an) * (R - 10)], [cx + Math.cos(an) * (R - 45), cy + Math.sin(an) * (R - 45)]], 'ink', 6, a + 0.45 + i * 0.03, a + 0.5 + i * 0.03); }
    text('slow', cx - R - 30, cy + 55, 52, 'ink', a + 0.6, a + 0.8); text('fast', cx + R + 30, cy + 55, 52, 'ink', a + 0.7, a + 0.9);
    fn(a + 0.5, 99, (c, t) => { const k = eio(win(t, T(11, 'slowly'), T(11, 'two') + 0.1)), an = H.lerp(-0.35, -Math.PI + 0.3, k), L = R - 60;
      c.save(); c.lineCap = 'round'; c.strokeStyle = k > 0.5 ? 'rgb(196,28,36)' : 'rgb(22,20,28)'; c.lineWidth = 10; c.beginPath(); c.moveTo(cx, cy); c.lineTo(cx + Math.cos(an) * L, cy + Math.sin(an) * L); c.stroke();
      c.fillStyle = 'rgb(22,20,28)'; c.beginPath(); c.arc(cx, cy, 16, 0, 7); c.fill(); c.restore(); });
    text('2 MPH', 480, 1265, 140, 'acc2', T(11, 'two') - 0.1, T(11, 'hour') + 0.1);
    text('SLOWER = QUIETER', 480, 1380, 78, 'ink', T(12, 'slower') - 0.05, T(12, 'quieter') + 0.3); }

  // 6. 1,600 HERTZ
  nap(PH[13].s - 0.05, 0.018, [120, 120, 2.0]);
  text('WING NOISE', 480, 210, 108, 'ink', T(13, 'wings') - 0.05, T(13, 'mute') + 0.15);
  { const a = T(13, 'the');
    line([[120, 360], [120, 900], [870, 900]], 'ink', 8, a - 0.25, a + 0.1);
    text('low', 170, 970, 56, 'ink', a + 0.05, a + 0.2); text('high pitch', 720, 970, 56, 'ink', T(13, 'high') - 0.05, T(13, 'sounds'));
    line([[140, 470], [260, 455], [360, 480], [420, 500], ...quad([430, 520], [450, 860], [520, 878], 12), [860, 880]], 'ink', 8, T(13, 'high'), T(13, 'above') + 0.2);
    line([[440, 360], [440, 900]], 'acc2', 7, T(13, 'sixteen') - 0.25, T(13, 'sixteen'));
    text('1,600 Hz', 480, 1120, 140, 'acc2', T(13, 'sixteen') - 0.1, T(13, 'hertz') + 0.3);
    arrow(quad([470, 1020], [455, 980], [445, 925], 10), 'acc2', 7, T(13, 'hertz') + 0.2, T(13, 'hertz') + 0.4, 24);
    text('SILENT', 670, 820, 76, 'acc2', T(13, 'hertz') + 0.15, PH[13].e + 0.2);
    line([[450, 340], [450, 318], [860, 318], [860, 340]], 'ink', 6, T(14, 'right') - 0.1, T(14, 'where'));
    text('MOUSE HEARING', 640, 290, 60, 'ink', T(14, 'mouses') - 0.1, T(14, 'hearing') + 0.2); }
  mouse(500, 1300, 150, T(14, 'hearing') - 0.1, 0.6);
  text('begins!', 800, 1310, 64, 'ink', T(14, 'begins') - 0.05, PH[14].e + 0.1);

  // 7. MOUSE NEVER HEARS IT, OWL HEARS THE MOUSE
  nap(PH[15].s - 0.05, -0.014, [820, 1300, 0.2]);
  text('NEVER HEARS IT', 480, 230, 92, 'ink', T(15, 'never') - 0.05, T(15, 'coming') + 0.2);
  owl(640, 560, 230, PH[15].s + 0.05, 0.75);
  mouse(300, 1180, 200, T(15, 'mouse') - 0.05, 0.6);
  text('?', 330, 960, 130, 'ink', T(15, 'coming'), T(15, 'coming') + 0.2);
  [0, 1, 2].forEach((i) => { const r = 120 + i * 70, an0 = -1.25, an1 = -0.45, cx = 360, cy = 1110; line(ell(cx, cy, r, r, an0, an1), 'acc2', 7, T(16, 'hears') - 0.05 + i * 0.12, T(16, 'hears') + 0.12 + i * 0.12); });
  text('HEARS IT!', 720, 1080, 100, 'acc2', T(16, 'owl') - 0.05, T(16, 'hears') + 0.35);
  check(720, 1200, T(16, 'fine') - 0.1);

  // 8. THE QUESTION (loops to the hook)
  nap(PH[17].s - 0.05, 0.014, [130, 1300, 1.5]);
  text('OWL OVER YOU,', 480, 230, 100, 'ink', T(17, 'owl') - 0.05, T(17, 'you') + 0.1);
  owl(480, 560, 220, T(17, 'flew') - 0.15, 0.7);
  line([...ell(810, 420, 60, 60, -2.0, 2.0)], 'ink', 6, T(17, 'tonight') - 0.1, T(17, 'tonight') + 0.15);
  line(quad([840, 365], [790, 420], [840, 475], 10), 'ink', 6, T(17, 'tonight') + 0.15, T(17, 'tonight') + 0.3);
  line(ell(480, 870, 74, 84), 'ink', 7, T(17, 'tonight') - 0.15, T(17, 'tonight') + 0.15);
  dot(455, 840, 8, 'ink', T(17, 'tonight') + 0.15); dot(505, 840, 8, 'ink', T(17, 'tonight') + 0.17);
  line(ell(480, 900, 14, 16), 'ink', 5, T(17, 'tonight') + 0.2, T(17, 'tonight') + 0.3);
  text('WOULD YOU', 480, 1110, 108, 'ink', T(18, 'do') - 0.05, T(18, 'think') + 0.1);
  text('HEAR IT?', 480, 1260, 140, 'acc2', T(18, 'hear') - 0.1, T(18, 'it') + 0.2);
  text('?', 780, 1000, 220, 'acc2', T(18, 'it') + 0.15, T(18, 'it') + 0.45);

  // ---------- camera (screen centre, zoom), interpolated with the reference's eased keys ----------
  const CAM = [
    [0, 540, 640, 1.1], [PH[0].e, 540, 700, 1.05], [PH[1].s + 0.4, 540, 905, 1.0], [PH[4].s, 540, 905, 1.0],
    [T(5, 'tiny') - 0.35, 540, 905, 1.0], [T(5, 'teeth'), 520, 780, 1.35], [PH[5].e + 0.1, 520, 790, 1.32], [PH[6].s + 0.3, 540, 905, 1.0],
    [T(13, 'sixteen') - 0.4, 540, 905, 1.0], [T(13, 'hertz'), 540, 960, 1.08], [PH[14].s, 540, 905, 1.0],
    [PH[17].s, 540, 905, 1.0], [DURATION, 540, 905, 1.04],
  ];
  const camAt = (t) => { let i = 0; while (i < CAM.length - 2 && t > CAM[i + 1][0]) i++; const [a, b] = [CAM[i], CAM[i + 1]], u = eio(win(t, a[0], b[0])); return [H.lerp(a[1], b[1], u), H.lerp(a[2], b[2], u), H.lerp(a[3], b[3], u)]; };

  // ---------- cached textures: same recipes as the reference, re-cut for a tall napkin ----------
  const XC = {}, nz = H.makeNoise(77);
  const buildCache = () => {
    const w2 = 700, h2 = 1240, wl = H.layer(w2, h2), wc = wl.getContext('2d'), id = wc.createImageData(w2, h2), d = id.data, rr = H.rng(3), PL = 92, tints = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => [rr.range(-12, 12), rr.range(-0.4, 0.4)]);
    for (let y = 0; y < h2; y++) for (let x = 0; x < w2; x++) {
      const pi = Math.floor((y + 20) / PL), py = (y + 20) % PL, [tint, ph] = tints[pi % tints.length], warp = nz.fbm2(x * 0.0025 + pi * 7, py * 0.012 + pi, 3) * 5.5, ring = Math.sin((py * 0.07 + warp + ph * 3) * Math.PI * 2);
      const fine = nz.n2(x * 0.012 + pi * 5, y * 0.55) * 0.6 + nz.n2(x * 0.05, y * 1.3) * 0.25, v = 0.5 + 0.16 * Math.sign(ring) * Math.pow(Math.abs(ring), 0.4) + 0.14 * fine + nz.n2(x * 0.004, y * 0.02 + pi) * 0.12;
      let r = (118 + tint) * (0.75 + 0.5 * v), gg = (74 + tint * 0.6) * (0.75 + 0.5 * v), b = (42 + tint * 0.3) * (0.78 + 0.45 * v);
      if (py < 2 || py > PL - 2) { r *= 0.35; gg *= 0.3; b *= 0.3; }
      const i = (y * w2 + x) * 4; d[i] = r; d[i + 1] = gg; d[i + 2] = b; d[i + 3] = 255;
    }
    wc.putImageData(id, 0, 0); XC.wood = wl;
    const nb = H.layer(NW, NH), nc = nb.getContext('2d'), out = [];
    const edge = (x0, y0, x1, y1, s) => { for (let i = 0; i < 60; i++) { const u = i / 60, x = x0 + (x1 - x0) * u, y = y0 + (y1 - y0) * u, o = nz.n2(u * 9 + s, s) * 2.5, nx = -(y1 - y0), ny = x1 - x0, l = Math.hypot(nx, ny); out.push([x + nx / l * o, y + ny / l * o]); } };
    edge(4, 3, NW - 3, 6, 1); edge(NW - 3, 4, NW - 6, NH - 3, 2); edge(NW - 4, NH - 3, 3, NH - 4, 3); edge(3, NH - 3, 6, 6, 4);
    nc.beginPath(); out.forEach(([x, y], i) => (i ? nc.lineTo(x, y) : nc.moveTo(x, y))); nc.closePath(); nc.fillStyle = '#f6f5f0'; nc.fill(); nc.save(); nc.clip();
    const r2 = H.rng(21);
    for (let i = 0; i < 5500; i++) { const x = r2.range(0, NW), y = r2.range(0, NH), a = r2.range(0, 6.28), l = r2.range(3, 10); nc.strokeStyle = r2.chance(0.5) ? 'rgba(180,175,165,0.08)' : 'rgba(255,255,255,0.35)'; nc.lineWidth = 0.7; nc.beginPath(); nc.moveTo(x, y); nc.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); nc.stroke(); }
    const EM = H.layer(NW, NH), ec = EM.getContext('2d'); ec.strokeStyle = '#000';
    const inset = (k, lw) => { ec.lineWidth = lw; ec.beginPath(); ec.roundRect(k, k, NW - 2 * k, NH - 2 * k, 6); ec.stroke(); };
    inset(14, 2); inset(44, 2); inset(18, 1.2);
    const ringE = (x, y) => { ec.lineWidth = 1.6; for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2; ec.beginPath(); ec.ellipse(x + Math.cos(a) * 4, y + Math.sin(a) * 4, 4, 2.5, a, 0, 7); ec.stroke(); } };
    for (let x = 60; x < NW - 40; x += 30) { ringE(x, 29); ringE(x, NH - 29); }
    for (let y = 60; y < NH - 40; y += 30) { ringE(29, y); ringE(NW - 29, y); }
    const tintL = (col, dx, dy, a) => { const tl = H.layer(NW, NH), tc = tl.getContext('2d'); tc.drawImage(EM, dx, dy); tc.globalCompositeOperation = 'source-in'; tc.fillStyle = col; tc.fillRect(0, 0, NW, NH); nc.globalAlpha = a; nc.drawImage(tl, 0, 0); nc.globalAlpha = 1; };
    tintL('#8f8a80', 1.1, 1.3, 0.35); tintL('#ffffff', -1, -1.1, 0.9); nc.restore(); XC.napkin = nb;
    const gw = NW / 2, gh = NH / 2, hf = new Float32Array(gw * gh);
    for (let y = 0; y < gh; y++) for (let x = 0; x < gw; x++) { const u = x * 2, v = y * 2; let h = nz.fbm2(u * 0.009 + 3, v * 0.009, 4) * 11; const q1 = 1 - Math.abs(nz.n2(u * 0.018 + 9, v * 0.018)), q2 = 1 - Math.abs(nz.n2(u * 0.042 + 5, v * 0.042 + 2)); h += q1 * q1 * 4.5 + q2 * q2 * 0.6 + 8 * Math.max(0, 1 - Math.abs(u - NW / 2) / 22) - 7 * Math.max(0, 1 - Math.abs(v - NH / 2) / 20) + 6 * Math.max(0, 1 - Math.min(u, v, NW - u, NH - v) / 40); hf[y * gw + x] = h; }
    const SL = H.layer(gw, gh), sc = SL.getContext('2d'), sid = sc.createImageData(gw, gh), sd = sid.data, HLl = H.layer(gw, gh), hlc = HLl.getContext('2d'), hid = hlc.createImageData(gw, gh), hd = hid.data;
    for (let y = 1; y < gh - 1; y++) for (let x = 1; x < gw - 1; x++) { const i = y * gw + x, gx = (hf[i + 1] - hf[i - 1]) / 4, gy = (hf[i + gw] - hf[i - gw]) / 4, nl = Math.hypot(gx, gy, 1), lam = (-gx * -0.55 + -gy * -0.6 + 0.58) / nl, dl = (lam - 0.58) * 1.35, j = i * 4; if (dl < 0) { sd[j] = 118; sd[j + 1] = 108; sd[j + 2] = 96; sd[j + 3] = Math.min(255, -dl * 255); } else { hd[j] = 255; hd[j + 1] = 255; hd[j + 2] = 251; hd[j + 3] = Math.min(255, dl * 200); } }
    sc.putImageData(sid, 0, 0); hlc.putImageData(hid, 0, 0);
    const up = (src) => { const o = H.layer(NW, NH), oc = o.getContext('2d'); oc.imageSmoothingEnabled = true; oc.drawImage(src, 0, 0, NW, NH); oc.globalCompositeOperation = 'destination-in'; oc.drawImage(nb, 0, 0); return o; };
    XC.crumple = up(SL); XC.crumpleHL = up(HLl);
    const FB = H.layer(NW, NH), fbc = FB.getContext('2d'), r3 = H.rng(44); fbc.strokeStyle = '#000'; fbc.lineWidth = 0.9; fbc.beginPath();
    for (let i = 0; i < 86000; i++) { const x = r3.range(0, NW), y = r3.range(0, NH), a = r3.range(0, 6.28), l = r3.range(1.5, 5); fbc.moveTo(x, y); fbc.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); } fbc.stroke(); XC.fibre = FB;
    const SP = H.layer(NW, NH), spc = SP.getContext('2d'), r4 = H.rng(45); for (let i = 0; i < 23000; i++) { spc.fillStyle = `rgba(0,0,0,${r4.range(0.05, 0.3).toFixed(3)})`; spc.fillRect(r4.range(0, NW), r4.range(0, NH), r4.range(1, 3), r4.range(1, 3)); } XC.speck = SP;
    const RS = 300, RL = H.layer(RS, RS), rc = RL.getContext('2d');
    const ringS = (cx, cy, R, a) => { for (let k = 0; k < 3; k++) { const r = R + k * 1.6, g = rc.createRadialGradient(cx, cy, r - 18, cx, cy, r + 2); g.addColorStop(0, 'rgba(150,95,45,0)'); g.addColorStop(0.7, `rgba(150,95,45,${a * 0.25})`); g.addColorStop(0.92, `rgba(120,70,30,${a})`); g.addColorStop(1, 'rgba(120,70,30,0)'); rc.fillStyle = g; rc.beginPath(); rc.arc(cx + k * 0.9, cy - k * 0.7, r + 2, 0, 7); rc.fill(); } const g2 = rc.createRadialGradient(cx, cy, 0, cx, cy, R); g2.addColorStop(0, `rgba(170,120,60,${a * 0.07})`); g2.addColorStop(1, `rgba(170,120,60,${a * 0.12})`); rc.fillStyle = g2; rc.beginPath(); rc.arc(cx, cy, R - 2, 0, 7); rc.fill(); };
    ringS(140, 140, 74, 0.55); ringS(168, 162, 73, 0.22); rc.globalCompositeOperation = 'destination-in';
    const cgR = rc.createConicGradient(0.6, 140, 140); cgR.addColorStop(0, 'rgba(0,0,0,1)'); cgR.addColorStop(0.55, 'rgba(0,0,0,1)'); cgR.addColorStop(0.72, 'rgba(0,0,0,0.15)'); cgR.addColorStop(0.86, 'rgba(0,0,0,0.6)'); cgR.addColorStop(1, 'rgba(0,0,0,1)'); rc.fillStyle = cgR; rc.fillRect(0, 0, RS, RS); XC.ring = RL;
    XC.bl = H.layer(W_ >> 1, HH >> 1); XC.fb = H.layer(W_, HH); XC.il = H.layer(W_, HH);
    // pre-wobble every stroke once
    NAPS.forEach((n) => n.items.forEach((it) => { if (it.k === 'line') { const seed = ((it.pts[0][0] * 13 + it.pts[0][1] * 7) | 0) + 3; it.P = wob(seg(it.pts, 2.5), nz, Math.abs(seed) % 79, 1.5); } }));
  };

  const font = (it) => `400 ${it.size}px "Permanent Marker"`;
  const COL = { ink: 'rgb(22,20,28)', acc2: 'rgb(196,28,36)' };
  function inkItems(ic, nap_, t) {
    ic.lineCap = 'round'; ic.lineJoin = 'round';
    for (const it of nap_.items) {
      if (it.k === 'fn') { if (t >= it.a && t < it.e) it.draw(ic, t, it.a); continue; }
      const p = win(t, it.a, it.b); if (p <= 0) continue;
      const col = COL[it.role]; ic.strokeStyle = col; ic.fillStyle = col;
      if (it.k === 'line') { const P = p < 1 ? it.P.slice(0, Math.max(2, Math.ceil(it.P.length * p))) : it.P; ic.lineWidth = Math.max(4, it.w * 1.05); ic.beginPath(); P.forEach(([x, y], i) => (i ? ic.lineTo(x, y) : ic.moveTo(x, y))); ic.stroke(); }
      else if (it.k === 'dot') { ic.beginPath(); ic.arc(it.x, it.y, it.r, 0, 7); ic.fill(); }
      else { ic.save(); ic.font = font(it); const w = ic.measureText(it.s).width; ic.translate(it.align === 'center' ? it.x - w / 2 : it.x, it.y); ic.rotate(it.rot); const rr = H.rng((it.s.length * 31 + (it.x | 0)) % 991), n = Math.ceil(it.s.length * p); let px = 0; for (let i = 0; i < it.s.length; i++) { const cw = ic.measureText(it.s[i]).width, ry = rr.range(-1.5, 1.5), ra = rr.range(-0.05, 0.05); if (i < n) { ic.save(); ic.translate(px, ry); ic.rotate(ra); ic.fillText(it.s[i], 0, 0); ic.restore(); } px += cw; } ic.restore(); }
    }
  }
  function tipOf(nap_, t, ctx) {
    let tip = null, red = false;
    for (const it of nap_.items) { if (it.inst || it.k === 'dot') continue; const p = win(t, it.a, it.b); if (p > 0 && p < 1) { red = it.role === 'acc2'; if (it.k === 'line') tip = it.P[Math.min(it.P.length - 1, Math.floor(p * (it.P.length - 1)))]; else { ctx.save(); ctx.font = font(it); const w = ctx.measureText(it.s).width, x0 = it.align === 'center' ? it.x - w / 2 : it.x, w2 = ctx.measureText(it.s.slice(0, Math.ceil(it.s.length * p))).width; ctx.restore(); tip = [x0 + w2, it.y - it.size * 0.3]; } } }
    return tip ? { tip, red } : null;
  }

  function explainer(ctx, W, H_, t) {
    if (!XC.wood) buildCache();
    const [cx, cy, z] = camAt(t);
    const apply = (c) => { c.translate(W / 2, H_ / 2); c.scale(z, z); c.translate(-cx, -cy); };
    ctx.save(); apply(ctx); ctx.imageSmoothingEnabled = true; ctx.drawImage(XC.wood, -300, -300, 1680, 2976); ctx.restore();
    const vig = ctx.createLinearGradient(0, 0, W, H_); vig.addColorStop(0, 'rgba(255,230,190,0.12)'); vig.addColorStop(1, 'rgba(20,8,0,0.22)'); ctx.fillStyle = vig; ctx.fillRect(0, 0, W, H_);

    let k = 0; for (let i = 0; i < NAPS.length; i++) if (t >= NAPS[i].s0) k = i;
    const sliding = t < NAPS[k].s1 && k > 0;
    const show = sliding ? [k - 1, k] : (k > 0 ? [k - 1, k] : [k]);
    let top = NAPS[k];
    show.forEach((idx) => {
      const n = NAPS[idx], u = clamp((t - n.s0) / (n.s1 - n.s0)), e = u >= 1 ? 1 : 1 - Math.pow(1 - u, 3) * Math.cos(u * 4.5), isTop = idx === k;
      const ox = isTop ? (1 - e) * 1000 : 0, oy = isTop ? (1 - e) * -1100 : 0, orot = isTop ? (1 - e) * 0.6 : 0, lift = isTop ? 1 - clamp(u * 1.1) : 0;
      const place = (c) => { c.translate(NCX + ox, NCY + oy); c.rotate(n.rot + orot); c.translate(-NW / 2, -NH / 2); };
      ctx.save(); apply(ctx); ctx.save(); place(ctx);
      ctx.save(); ctx.filter = `blur(${(8 + lift * 30).toFixed(1)}px)`; ctx.fillStyle = `rgba(25,10,0,${(0.5 - lift * 0.25).toFixed(2)})`; ctx.fillRect(8 + lift * 60, 12 + lift * 70, NW, NH); ctx.restore();
      ctx.drawImage(XC.napkin, 0, 0);
      const [rx, ry, ra] = n.ring; ctx.save(); ctx.beginPath(); ctx.rect(4, 4, NW - 8, NH - 8); ctx.clip(); ctx.translate(rx, ry); ctx.rotate(ra); ctx.globalCompositeOperation = 'multiply'; ctx.drawImage(XC.ring, -140, -140); ctx.restore();
      ctx.restore(); ctx.restore();
      const inkOn = isTop ? u >= 1 : sliding;
      if (inkOn) {
        const IL = XC.il, ic = IL.getContext('2d'); ic.setTransform(1, 0, 0, 1, 0, 0); ic.globalCompositeOperation = 'source-over'; ic.clearRect(0, 0, W, H_);
        ic.save(); apply(ic); place(ic); inkItems(ic, n, isTop ? t : Math.min(t, n.items.reduce((m, q) => Math.max(m, q.k === 'fn' ? 0 : q.b), 0) + 99)); ic.restore();
        const hw = W >> 1, hh = H_ >> 1, BL = XC.bl, bc = BL.getContext('2d'), FBL = XC.fb, fc = FBL.getContext('2d');
        bc.filter = 'none'; bc.clearRect(0, 0, hw, hh); bc.filter = `blur(${(1.5 * Math.sqrt(z)).toFixed(2)}px)`; bc.drawImage(IL, 0, 0, hw, hh); bc.filter = 'none'; bc.drawImage(BL, 0, 0);
        ctx.save(); ctx.imageSmoothingEnabled = true; ctx.globalAlpha = 0.38; ctx.drawImage(BL, 0, 0, W, H_); ctx.restore();
        fc.setTransform(1, 0, 0, 1, 0, 0); fc.globalCompositeOperation = 'source-over'; fc.clearRect(0, 0, W, H_); fc.imageSmoothingEnabled = true; fc.drawImage(BL, 0, 0, W, H_);
        fc.save(); fc.globalCompositeOperation = 'destination-in'; apply(fc); place(fc); fc.drawImage(XC.fibre, 0, 0); fc.restore();
        ctx.save(); ctx.globalAlpha = 0.75; ctx.drawImage(FBL, 0, 0); ctx.restore();
        ic.save(); ic.globalCompositeOperation = 'destination-out'; apply(ic); place(ic); ic.drawImage(XC.speck, 0, 0); ic.restore();
        ctx.save(); ctx.globalAlpha = 0.94; ctx.drawImage(IL, 0, 0); ctx.restore();
      }
      ctx.save(); apply(ctx); place(ctx); ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = 0.5; ctx.drawImage(XC.crumple, 0, 0); ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 0.5; ctx.drawImage(XC.crumpleHL, 0, 0); ctx.restore();
    });

    // coffee cup + steam, top right on the table
    { const qx = (985 - cx) * z + W / 2, qy = (60 - cy) * z + H_ / 2, s = z * 0.72;
      ctx.save(); ctx.translate(qx, qy); ctx.scale(s, s);
      ctx.save(); ctx.filter = 'blur(14px)'; ctx.fillStyle = 'rgba(20,8,0,0.5)'; ctx.beginPath(); ctx.arc(18, 22, 156, 0, 7); ctx.fill(); ctx.restore();
      const sg = ctx.createRadialGradient(-50, -60, 20, 0, 0, 160); sg.addColorStop(0, '#ffffff'); sg.addColorStop(0.7, '#ebe9e4'); sg.addColorStop(1, '#bfbab2'); ctx.fillStyle = sg; ctx.beginPath(); ctx.arc(0, 0, 158, 0, 7); ctx.fill();
      const cg = ctx.createRadialGradient(-40, -40, 10, 0, 0, 92); cg.addColorStop(0, '#ffffff'); cg.addColorStop(0.8, '#efece6'); cg.addColorStop(1, '#c6c0b6'); ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(0, 0, 90, 0, 7); ctx.fill();
      const cf = ctx.createRadialGradient(-10, -10, 5, 0, 0, 76); cf.addColorStop(0, '#6b3e1e'); cf.addColorStop(0.75, '#4a2810'); cf.addColorStop(0.92, '#9a6a3c'); cf.addColorStop(1, '#3a1e0a'); ctx.fillStyle = cf; ctx.beginPath(); ctx.arc(0, 0, 76, 0, 7); ctx.fill();
      ctx.restore();
    }
    // the Sharpie in hand
    if (t >= top.s1) { const tp = tipOf(top, t, ctx); if (tp) {
      const lx = tp.tip[0] - NW / 2, ly = tp.tip[1] - NH / 2, co = Math.cos(top.rot), si = Math.sin(top.rot), wx = NCX + lx * co - ly * si, wy = NCY + lx * si + ly * co, tx = (wx - cx) * z + W / 2, ty = (wy - cy) * z + H_ / 2, red = tp.red, ang = 0.9;
      ctx.save(); ctx.scale(1, 1);
      ctx.save(); ctx.filter = 'blur(8px)'; ctx.fillStyle = 'rgba(20,8,0,0.35)'; ctx.translate(tx + 24, ty + 30); ctx.rotate(ang); ctx.beginPath(); ctx.roundRect(10, -14, 460, 28, 12); ctx.fill(); ctx.restore();
      ctx.translate(tx, ty); ctx.rotate(ang); ctx.scale(1.5, 1.5);
      ctx.fillStyle = red ? '#9a1018' : '#111114'; ctx.beginPath(); ctx.ellipse(5, 0, 7, 4, 0, 0, 7); ctx.fill();
      const ng = ctx.createLinearGradient(0, -10, 0, 10); ng.addColorStop(0, '#d8d8de'); ng.addColorStop(1, '#6a6a72'); ctx.fillStyle = ng; ctx.beginPath(); ctx.moveTo(8, -4); ctx.lineTo(30, -11); ctx.lineTo(30, 11); ctx.lineTo(8, 4); ctx.closePath(); ctx.fill();
      const bg = ctx.createLinearGradient(0, -15, 0, 15); if (red) { bg.addColorStop(0, '#e05058'); bg.addColorStop(0.3, '#b8202a'); bg.addColorStop(1, '#5a0a10'); } else { bg.addColorStop(0, '#5a5a62'); bg.addColorStop(0.3, '#2a2a30'); bg.addColorStop(1, '#0c0c10'); }
      ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(28, -15, 190, 30, 12); ctx.fill(); ctx.fillStyle = '#9c9ca4'; ctx.fillRect(150, -15, 14, 30); ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(210, -17, 96, 34, 14); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(36, -10, 170, 2.5);
      ctx.restore();
    } }
    H.grain(ctx, W, H_, 0.025, 8 + (Math.floor(t * 12) % 4));
    H.vignette(ctx, W, H_, 0.3, '25,10,0');
  }

  function scoreSound(k) {
    const LV = 0.45;
    const sh = (a, b, g = 1, pan = 0, minor = true, red = false) => { const d = Math.max(0.03, b - a); g *= LV; k.noise(a, { dur: 0.03, filter: 'bandpass', f: 700, q: 1, gain: 0.16 * g, a: 0.002, pan, minor }); k.tone(a, { f: 120, dur: 0.05, gain: 0.07 * g, pan, minor }); k.play('stroke', a, { material: 'sharpie', dur: d, gain: (red ? 0.5 : 0.42) * g, pan, minor }); k.noise(a, { dur: d + 0.04, color: 'pink', filter: 'lowpass', f: 520, gain: 0.07 * g, a: 0.015, hold: d * 0.6, pan, minor }); };
    const write = (s, a, b, g = 0.9, pan = 0, red = false) => { const n = s.length, re = /\S+/g; let m; while ((m = re.exec(s))) sh(a + (b - a) * m.index / n, a + (b - a) * (m.index + m[0].length) / n, g, pan, true, red); };
    const napkin = (s0, s1) => { const land = s0 + (s1 - s0) * Math.PI / 9; k.noise(s0, { dur: land - s0 + 0.03, color: 'pink', filter: 'bandpass', f: [[0, 260], [land - s0, 800]], q: 0.7, gain: 0.2, a: (land - s0) * 0.8, pan: 0.5 }); k.play('slap', land, { gain: 0.7, pan: 0.1 }); k.play('thud', land, { f: 85, gain: 0.4, pan: 0.1 }); k.play('paper', land + 0.01, { dur: 0.16, gain: 0.35, pan: 0.1 }); };
    k.bed('room', 0, DURATION, { gain: 0.7 });
    k.play('pop', 0.03, { f: 300, gain: 0.45, minor: true });
    NAPS.forEach((n, i) => { if (i) napkin(n.s0, n.s1);
      n.items.forEach((it) => { const red = it.role === 'acc2', pan = it.k === 'text' || it.k === 'line' ? clamp(((it.x ?? it.pts[0][0]) - 480) / 480, -1, 1) * 0.3 : 0; if (it.k === 'text') write(it.s, it.a, it.b, it.size >= 100 ? 1 : 0.8, pan, red); else if (it.k === 'line' && it.b - it.a > 0.06) sh(it.a, it.b, 0.8, pan, true, red); else if (it.k === 'dot') k.noise(it.a, { dur: 0.025, filter: 'bandpass', f: 900, q: 1.2, gain: 0.2, a: 0.002, minor: true }); }); });
    k.play('thud', T(1, 'three'), { f: 95, gain: 0.5 });
    k.play('whoosh', T(3, 'whoosh') - 0.05, { dur: 0.6, gain: 0.7 });
    k.play('ding', T(4, 'comb'), { f: 'E6', gain: 0.25 });
    k.play('swish', T(9, 'hush'), { dur: 0.5, gain: 0.25 });
    k.play('riser', T(11, 'slowly'), { dur: T(11, 'two') - T(11, 'slowly'), gain: 0.3 }); k.play('stamp', T(11, 'two'), { gain: 0.5 });
    k.play('impact', T(13, 'sixteen'), { gain: 0.6 });
    k.play('success', T(16, 'fine'), { f: 'A5', gain: 0.45 });
    k.play('ding', T(18, 'it') + 0.2, { f: 'E6', gain: 0.3 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.VIDEO_W = W_; window.VIDEO_H = HH;
})();
