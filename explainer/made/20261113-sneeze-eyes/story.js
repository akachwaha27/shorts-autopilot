// ================= Napkin Sketch, vertical 1080x1920: "Why do you sneeze with your eyes shut?" (no storyboard step: unattended run) =================
(function () {
  const W_ = 1080, HH = 1920, NW = 960, NH = 1440, NCX = 540, NCY = 905;
  const PH = [{"s":0.25,"e":2.73,"text":"Your eyes slam shut every time you sneeze,","words":[["your",0.25],["eyes",0.54],["slam",0.83],["shut",1.13],["every",1.42],["time",1.78],["you",2.07],["sneeze",2.29]]},{"s":2.95,"e":5.13,"text":"and you almost can't stop it. Why?","words":[["and",2.95],["you",3.21],["almost",3.47],["cant",3.99],["stop",4.34],["it",4.69],["why",4.86]]},{"s":5.66,"e":7.2,"text":"People say your eyeballs would pop out","words":[["people",5.66],["say",5.95],["your",6.1],["eyeballs",6.29],["would",6.67],["pop",6.91],["out",7.06]]},{"s":7.26,"e":8.85,"text":"if they stayed open.","words":[["if",7.26],["they",7.46],["stayed",7.86],["open",8.45]]},{"s":9.32,"e":10.22,"text":"That's a myth.","words":[["thats",9.32],["a",9.77],["myth",9.86]]},{"s":10.48,"e":12.7,"text":"The pressure builds in your chest,","words":[["the",10.48],["pressure",10.71],["builds",11.35],["in",11.82],["your",11.98],["chest",12.3]]},{"s":12.77,"e":13.91,"text":"not behind your eyes.","words":[["not",12.77],["behind",12.97],["your",13.37],["eyes",13.64]]},{"s":14.27,"e":15.47,"text":"So what's going on?","words":[["so",14.27],["whats",14.44],["going",14.87],["on",15.3]]},{"s":15.93,"e":17.53,"text":"A tickle inside your nose","words":[["a",15.93],["tickle",16.0],["inside",16.46],["your",16.92],["nose",17.23]]},{"s":17.53,"e":19.58,"text":"sends a nerve signal to your brainstem,","words":[["sends",17.53],["a",17.85],["nerve",17.91],["signal",18.23],["to",18.62],["your",18.75],["brainstem",19.0]]},{"s":20.14,"e":21.73,"text":"your sneeze control center.","words":[["your",20.14],["sneeze",20.41],["control",20.83],["center",21.31]]},{"s":22.14,"e":23.48,"text":"It doesn't ask permission.","words":[["it",22.14],["doesnt",22.26],["ask",22.65],["permission",22.84]]},{"s":23.77,"e":26.25,"text":"It fires a chain of muscles all at once.","words":[["it",23.77],["fires",23.93],["a",24.33],["chain",24.41],["of",24.81],["muscles",24.97],["all",25.53],["at",25.77],["once",25.93]]},{"s":26.63,"e":27.53,"text":"Deep breath in,","words":[["deep",26.63],["breath",26.93],["in",27.38]]},{"s":27.66,"e":28.53,"text":"chest squeezes,","words":[["chest",27.66],["squeezes",27.99]]},{"s":28.93,"e":29.88,"text":"throat snaps open,","words":[["throat",28.93],["snaps",29.31],["open",29.62]]},{"s":29.94,"e":32.89,"text":"and your eyelids get dragged along for the ride.","words":[["and",29.94],["your",30.17],["eyelids",30.47],["get",31.0],["dragged",31.23],["along",31.76],["for",32.14],["the",32.36],["ride",32.59]]},{"s":33.34,"e":34.4,"text":"Then the blast.","words":[["then",33.34],["the",33.69],["blast",33.96]]},{"s":34.78,"e":37.4,"text":"A sneeze cloud can drift about eight meters.","words":[["a",34.78],["sneeze",34.85],["cloud",35.29],["can",35.65],["drift",35.87],["about",36.24],["eight",36.6],["meters",36.97]]},{"s":37.76,"e":39.1,"text":"That's twenty-six feet!","words":[["thats",37.76],["twentysix",38.13],["feet",38.8]]},{"s":39.39,"e":41.39,"text":"Some scientists think shut eyes","words":[["some",39.39],["scientists",39.68],["think",40.42],["shut",40.79],["eyes",41.09]]},{"s":41.49,"e":42.4,"text":"help keep the spray out.","words":[["help",41.49],["keep",41.68],["the",41.87],["spray",42.01],["out",42.25]]},{"s":42.85,"e":45.41,"text":"A few people can sneeze with their eyes open,","words":[["a",42.85],["few",42.92],["people",43.13],["can",43.56],["sneeze",43.77],["with",44.2],["their",44.48],["eyes",44.84],["open",45.12]]},{"s":45.88,"e":48.0,"text":"and their eyes stay right where they are.","words":[["and",45.88],["their",46.07],["eyes",46.39],["stay",46.65],["right",46.91],["where",47.23],["they",47.55],["are",47.81]]},{"s":48.4,"e":49.69,"text":"So next time you sneeze,","words":[["so",48.4],["next",48.53],["time",48.8],["you",49.08],["sneeze",49.28]]},{"s":49.99,"e":51.12,"text":"will yours stay shut?","words":[["will",49.99],["yours",50.25],["stay",50.58],["shut",50.85]]}];
  // one entry per idea; every time below reads from here
  const BEATS = [
    { id: 'hook', p: [0, 1] }, { id: 'myth', p: [2, 4] }, { id: 'pressure', p: [5, 7] }, { id: 'nerve', p: [8, 11] },
    { id: 'chain', p: [12, 16] }, { id: 'blast', p: [17, 21] }, { id: 'open', p: [22, 23] }, { id: 'end', p: [24, 25] },
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
  // a face seen from the front; eyes 'open' or 'shut' (squeezed), mouth 'sneeze' (open O) or 'smile'
  const face = (cx, cy, s, a, d, eyes = 'shut', mouth = 'sneeze', eyeAt = null) => {
    const st = (u, v) => [a + d * u, a + d * v]; let p, q;
    [p, q] = st(0, 0.35); line(ell(cx, cy, 0.42 * s, 0.52 * s, -Math.PI / 2, Math.PI * 1.5), 'ink', 8, p, q);
    [p, q] = st(0.3, 0.45); line(quad([cx - 0.36 * s, cy - 0.3 * s], [cx - 0.1 * s, cy - 0.62 * s], [cx + 0.38 * s, cy - 0.28 * s], 20), 'ink', 7, p, q);
    const ea = eyeAt == null ? a + d * 0.5 : eyeAt;
    [-1, 1].forEach((sg, i) => { const ex = cx + sg * 0.17 * s, ey = cy - 0.08 * s;
      if (eyes === 'open') { line(ell(ex, ey, 0.09 * s, 0.07 * s), 'ink', 6, ea + i * 0.08, ea + 0.15 + i * 0.08); dot(ex, ey, 0.035 * s, 'ink', ea + 0.15 + i * 0.08); }
      else { line([[ex - sg * 0.1 * s, ey - 0.06 * s], [ex + sg * 0.06 * s, ey], [ex - sg * 0.1 * s, ey + 0.06 * s]], 'ink', 8, ea + i * 0.06, ea + 0.12 + i * 0.06);
        line([[ex - 0.1 * s, ey - 0.14 * s], [ex + 0.08 * s, ey - 0.1 * s]].map(([x, y]) => [x, y]), 'ink', 6, ea + 0.12, ea + 0.2); } });
    [p, q] = st(0.65, 0.78); line(quad([cx, cy - 0.02 * s], [cx - 0.07 * s, cy + 0.1 * s], [cx + 0.02 * s, cy + 0.14 * s], 10), 'ink', 6, p, q);
    [p, q] = st(0.8, 1);
    if (mouth === 'sneeze') line(ell(cx, cy + 0.3 * s, 0.11 * s, 0.09 * s), 'ink', 7, p, q);
    else line(quad([cx - 0.14 * s, cy + 0.26 * s], [cx, cy + 0.36 * s], [cx + 0.14 * s, cy + 0.26 * s], 14), 'ink', 7, p, q);
  };
  // a head in profile facing right; optional brain + brainstem
  const profile = (cx, cy, s, a, d, brain = true) => {
    const P = (u, v) => [cx + u * s, cy + v * s];
    const out = [P(-0.25, 0.75), P(-0.3, 0.42), ...quad(P(-0.3, 0.42), P(-0.6, -0.2), P(-0.05, -0.6), 24).slice(1), ...quad(P(-0.05, -0.6), P(0.42, -0.62), P(0.45, -0.2), 20).slice(1),
      P(0.47, -0.08), P(0.46, 0.0), P(0.6, 0.13), P(0.48, 0.19), P(0.51, 0.26), P(0.45, 0.3), P(0.5, 0.35), ...quad(P(0.5, 0.35), P(0.49, 0.52), P(0.3, 0.5), 12).slice(1), P(0.12, 0.46), P(0.13, 0.75)];
    line(out, 'ink', 8, a, a + d * 0.55);
    line(ell(cx + 0.33 * s, cy - 0.04 * s, 0.05 * s, 0.03 * s, 0, Math.PI), 'ink', 6, a + d * 0.55, a + d * 0.62);
    line(ell(cx - 0.08 * s, cy + 0.06 * s, 0.06 * s, 0.1 * s, -1.2, Math.PI + 1.2), 'ink', 6, a + d * 0.6, a + d * 0.7);
    if (brain) {
      line([...ell(cx - 0.08 * s, cy - 0.26 * s, 0.34 * s, 0.24 * s, Math.PI * 0.62, Math.PI * 2.38)], 'ink', 6, a + d * 0.7, a + d * 0.88);
      line(wave(cx - 0.32 * s, cx + 0.18 * s, cy - 0.3 * s, 0.035 * s, 4), 'ink', 4, a + d * 0.85, a + d * 0.95);
      line(wave(cx - 0.26 * s, cx + 0.12 * s, cy - 0.16 * s, 0.03 * s, 3), 'ink', 4, a + d * 0.88, a + d * 0.98);
    }
  };
  const wave = (x0, x1, y, amp, n = 3) => { const out = []; for (let i = 0; i <= 40; i++) { const u = i / 40; out.push([x0 + (x1 - x0) * u, y + Math.sin(u * Math.PI * 2 * n) * amp]); } return out; };
  const zig = (A, B, n, amp) => { const out = [A]; const dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy), px = -dy / L, py = dx / L; for (let i = 1; i < n; i++) { const u = i / n, sg = i % 2 ? 1 : -1; out.push([A[0] + dx * u + px * amp * sg, A[1] + dy * u + py * amp * sg]); } out.push(B); return out; };
  const box = (x, y, w, h) => [[x - w / 2, y - h / 2], [x + w / 2, y - h / 2 + 3], [x + w / 2 - 2, y + h / 2], [x - w / 2 + 2, y + h / 2 - 2], [x - w / 2, y - h / 2]];
  const check = (x, y, a) => line([[x - 40, y], [x - 10, y + 34], [x + 50, y - 40]], 'acc2', 9, a, a + 0.2);
  const cross = (x, y, r, a) => { line([[x - r, y - r], [x + r, y + r]], 'acc2', 12, a, a + 0.15); line([[x + r, y - r], [x - r, y + r]], 'acc2', 12, a + 0.15, a + 0.3); };

  // 1. HOOK: eyes slam shut
  nap(-1, -0.012, [800, 1260, 0.9]);
  text('EYES SLAM SHUT', 480, 230, 100, 'ink', T(0, 'eyes') - 0.05, T(0, 'shut') + 0.25);
  face(480, 700, 560, 0.3, 1.6, 'shut', 'sneeze', T(0, 'shut') - 0.1);
  [0, 1, 2].forEach((i) => { line(quad([170 - i * 20, 500 + i * 90], [130 - i * 20, 540 + i * 90], [110 - i * 20, 520 + i * 90], 8), 'ink', 6, T(0, 'sneeze') + i * 0.06, T(0, 'sneeze') + 0.12 + i * 0.06); line(quad([790 + i * 20, 500 + i * 90], [830 + i * 20, 540 + i * 90], [850 + i * 20, 520 + i * 90], 8), 'ink', 6, T(0, 'sneeze') + i * 0.06, T(0, 'sneeze') + 0.12 + i * 0.06); });
  text('AH-CHOO!', 480, 1150, 140, 'acc2', T(0, 'sneeze') - 0.1, T(0, 'sneeze') + 0.4);
  text("CAN'T STOP IT", 480, 1300, 84, 'ink', T(1, 'almost'), T(1, 'it') + 0.1);
  text('WHY?', 760, 430, 120, 'acc2', T(1, 'why') - 0.1, T(1, 'why') + 0.25, { rot: 0.12 });

  // 2. THE MYTH: eyeballs pop out
  nap(PH[2].s - 0.05, 0.016, [130, 1310, 2.4]);
  text('THE MYTH', 480, 220, 112, 'ink', T(2, 'people') - 0.05, T(2, 'eyeballs'));
  face(380, 700, 440, T(2, 'say'), 0.7, 'open', 'sneeze', T(2, 'say') + 0.35);
  { const a = T(2, 'pop') - 0.05; line(zig([455, 665], [690, 520], 7, 16), 'ink', 6, a, a + 0.15);
    line(ell(730, 495, 64, 64), 'ink', 7, a + 0.12, a + 0.3); line(ell(752, 500, 26, 26), 'ink', 6, a + 0.28, a + 0.36); dot(758, 502, 12, 'ink', a + 0.36);
    [0, 1, 2].forEach((i) => line([[810 + i * 10, 420 + i * 40], [870 + i * 10, 400 + i * 40]], 'ink', 5, a + 0.35 + i * 0.05, a + 0.42 + i * 0.05));
    text('POP!', 760, 360, 104, 'acc2', a, T(2, 'out') + 0.2); }
  text('if they stayed open', 480, 1080, 64, 'ink', T(3, 'stayed') - 0.1, T(3, 'open') + 0.2);
  cross(560, 640, 260, T(4, 'myth') - 0.2);
  text('MYTH!', 480, 1290, 170, 'acc2', T(4, 'myth') - 0.1, T(4, 'myth') + 0.3, { rot: -0.06 });

  // 3. THE PRESSURE is in your chest
  nap(PH[5].s - 0.05, -0.018, [820, 1300, -0.7]);
  text('PRESSURE', 480, 230, 120, 'ink', T(5, 'pressure') - 0.05, T(5, 'builds') + 0.1);
  { const a = T(5, 'builds') - 0.1;
    line([[420, 330], [415, 420], ...quad([415, 420], [200, 430], [170, 600], 20).slice(1), [180, 1060]], 'ink', 8, a, a + 0.45);
    line([[540, 330], [545, 420], ...quad([545, 420], [760, 430], [790, 600], 20).slice(1), [780, 1060]], 'ink', 8, a + 0.1, a + 0.55);
    line([...quad([440, 520], [250, 520], [270, 920], 20), ...quad([270, 920], [420, 960], [450, 600], 20).slice(1), [440, 520]], 'ink', 7, a + 0.4, a + 0.9);
    line([...quad([520, 520], [710, 520], [690, 920], 20), ...quad([690, 920], [540, 960], [510, 600], 20).slice(1), [520, 520]], 'ink', 7, a + 0.55, a + 1.05);
    line([[480, 380], [480, 520]], 'ink', 7, a + 0.3, a + 0.4); }
  { const a = T(5, 'chest') - 0.15; arrow([[60, 720], [230, 720]], 'acc2', 9, a, a + 0.15, 30); arrow([[900, 720], [730, 720]], 'acc2', 9, a + 0.1, a + 0.25, 30); arrow([[480, 1110], [480, 960]], 'acc2', 9, a + 0.2, a + 0.35, 30); }
  text('CHEST', 480, 760, 104, 'acc2', T(5, 'chest') - 0.1, T(5, 'chest') + 0.3);
  text('NOT YOUR EYES', 480, 1240, 96, 'ink', T(6, 'not') - 0.05, T(6, 'eyes') + 0.1);
  text('?', 480, 1395, 140, 'acc2', T(7, 'so') - 0.05, T(7, 'whats'));

  // 4. NOSE -> NERVE -> BRAINSTEM (camera pushes in on the brainstem)
  nap(PH[8].s - 0.05, 0.012, [130, 140, 0.4]);
  text('A TICKLE', 480, 210, 112, 'ink', T(8, 'tickle') - 0.05, T(8, 'nose'));
  profile(400, 760, 460, PH[8].s + 0.05, 0.9);
  [0, 1, 2].forEach((i) => line(quad([705 + i * 18, 800 - i * 22], [740 + i * 18, 780 - i * 22], [760 + i * 18, 810 - i * 22], 8), 'acc2', 5, T(8, 'nose') - 0.1 + i * 0.07, T(8, 'nose') + i * 0.07));
  text('NOSE', 790, 960, 80, 'ink', T(8, 'nose') - 0.05, T(8, 'nose') + 0.3);
  line([[355, 790], [365, 900], [380, 1010]], 'ink', 16, T(9, 'brainstem') - 0.2, T(9, 'brainstem') + 0.15);
  { const a = T(9, 'nerve') - 0.1; arrow(quad([600, 800], [470, 700], [372, 820], 30), 'acc2', 8, a, T(9, 'brainstem') - 0.05, 28); text('NERVE', 750, 650, 72, 'acc2', a, T(9, 'signal') + 0.1); }
  text('BRAINSTEM', 330, 1140, 84, 'ink', T(9, 'brainstem') - 0.1, PH[9].e + 0.1);
  text('SNEEZE CENTER', 480, 1260, 92, 'acc2', T(10, 'sneeze') - 0.1, T(10, 'center') + 0.3);
  text('NO PERMISSION!', 480, 1385, 86, 'ink', T(11, 'ask') - 0.05, T(11, 'permission') + 0.35, { rot: -0.03 });

  // 5. THE CHAIN: everything fires at once
  nap(PH[12].s - 0.05, -0.015, [870, 1210, 1.2]);
  text('MUSCLE CHAIN', 480, 210, 108, 'ink', T(12, 'chain') - 0.05, T(12, 'muscles') + 0.2);
  [['BREATH IN', 420, T(13, 'deep') - 0.1, T(13, 'in')], ['CHEST SQUEEZES', 650, T(14, 'chest') - 0.1, T(14, 'squeezes') + 0.2], ['THROAT OPENS', 880, T(15, 'throat') - 0.1, T(15, 'open')], ['EYELIDS SHUT', 1110, T(16, 'eyelids') - 0.1, T(16, 'eyelids') + 0.4]].forEach(([s, y, a, b], i) => {
    const red = i === 3 ? 'acc2' : 'ink'; line(box(480, y, 760, 150), red, 7, a - 0.1, a + 0.15); text(s, 480, y + 30, 80, red, a, b);
    if (i) arrow([[480, y - 155], [480, y - 85]], 'ink', 7, a - 0.18, a - 0.08, 22); });
  text('ALL AT ONCE', 480, 330, 70, 'acc2', T(12, 'all') - 0.05, T(12, 'once') + 0.2);
  { const a = T(16, 'dragged') - 0.05; [-1, 1].forEach((sg, i) => { const ex = 480 + sg * 110, ey = 1300; line([[ex - sg * 50, ey - 30], [ex + sg * 30, ey], [ex - sg * 50, ey + 30]], 'ink', 9, a + i * 0.1, a + 0.15 + i * 0.1); }); text('for the ride!', 480, 1400, 64, 'ink', T(16, 'along'), T(16, 'ride') + 0.2); }

  // 6. THE BLAST: 8 meters
  nap(PH[17].s - 0.05, 0.018, [120, 120, 2.0]);
  text('BLAST!', 480, 220, 140, 'acc2', T(17, 'blast') - 0.1, T(17, 'blast') + 0.3);
  profile(210, 560, 300, PH[17].s + 0.05, 0.75, false);
  { const r = H.rng(19), a0 = T(17, 'blast') - 0.05;
    for (let i = 0; i < 70; i++) { const u = Math.pow(r(), 0.8), an = r.range(-0.42, 0.42) * (0.4 + u), x = 370 + u * 520, y = 650 + Math.tan(an) * (u * 520) * 0.9 + u * 60; dot(x, y, r.range(3, 9) * (1 - u * 0.4), u > 0.75 ? 'acc2' : 'ink', a0 + u * 1.1); }
    [0, 1, 2].forEach((i) => line(quad([380, 640 + (i - 1) * 40], [560, 630 + (i - 1) * 90], [700, 650 + (i - 1) * 140], 20), 'ink', 4, a0 + i * 0.08, a0 + 0.4 + i * 0.08)); }
  text('SNEEZE CLOUD', 620, 450, 70, 'ink', T(18, 'sneeze') - 0.05, T(18, 'cloud') + 0.2);
  { const a = T(18, 'drift') - 0.1; line([[140, 960], [880, 960]], 'ink', 8, a, a + 0.4);
    for (let i = 0; i <= 8; i++) { const x = 140 + i * 92.5; line([[x, 935], [x, 985]], 'ink', 6, a + 0.3 + i * 0.04, a + 0.33 + i * 0.04); }
    text('0', 140, 1050, 56, 'ink', a + 0.3, a + 0.4); }
  text('8 METERS', 560, 1110, 130, 'acc2', T(18, 'eight') - 0.1, T(18, 'meters') + 0.3);
  text('= 26 FEET', 560, 1230, 96, 'ink', T(19, 'twentysix') - 0.1, T(19, 'feet') + 0.2);
  text('SHUT EYES = SHIELD?', 480, 1370, 70, 'acc2', T(20, 'shut') - 0.1, T(21, 'spray') + 0.2);

  // 7. A FEW PEOPLE: eyes open, still in place + the loop question
  nap(PH[22].s - 0.05, -0.014, [820, 1300, 0.2]);
  text('A FEW PEOPLE', 480, 220, 104, 'ink', T(22, 'few') - 0.05, T(22, 'people') + 0.2);
  face(480, 600, 420, T(22, 'can'), 0.9, 'open', 'sneeze', T(22, 'open') - 0.2);
  text('EYES OPEN', 480, 920, 80, 'ink', T(22, 'eyes') - 0.05, T(22, 'open') + 0.25);
  check(800, 560, T(23, 'stay') - 0.1);
  text('STILL THERE!', 760, 400, 64, 'acc2', T(23, 'right') - 0.1, T(23, 'are') + 0.1, { rot: 0.08 });
  text('NEXT SNEEZE:', 480, 1110, 100, 'ink', T(24, 'next') - 0.05, T(24, 'sneeze') + 0.15);
  text('STAY SHUT?', 480, 1270, 140, 'acc2', T(25, 'stay') - 0.1, T(25, 'shut') + 0.2);
  text('?', 830, 1080, 200, 'acc2', T(25, 'shut') + 0.15, T(25, 'shut') + 0.45);


  // ---------- camera (screen centre, zoom), interpolated with the reference's eased keys ----------
  const CAM = [
    [0, 540, 760, 1.12], [PH[0].e, 540, 820, 1.05], [PH[1].s + 0.4, 540, 905, 1.0],
    [T(9, 'brainstem') - 0.45, 540, 905, 1.0], [T(9, 'brainstem') + 0.1, 520, 960, 1.16], [PH[10].e, 520, 960, 1.18], [PH[11].s + 0.25, 540, 905, 1.0],
    [T(18, 'eight') - 0.45, 540, 905, 1.0], [T(18, 'eight'), 540, 1010, 1.1], [PH[19].e, 540, 1010, 1.1], [PH[20].s + 0.3, 540, 905, 1.0],
    [PH[22].s, 540, 905, 1.0], [DURATION, 540, 905, 1.04],
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
    k.play('thud', T(0, 'slam'), { f: 95, gain: 0.5 });
    k.play('swish', T(0, 'sneeze'), { dur: 0.45, gain: 0.45 });
    k.play('pop', T(2, 'pop'), { f: 420, gain: 0.55 });
    k.play('stamp', T(4, 'myth'), { gain: 0.55 });
    k.play('ding', T(9, 'brainstem'), { f: 'E6', gain: 0.25 });
    k.play('riser', T(13, 'deep'), { dur: T(16, 'eyelids') - T(13, 'deep'), gain: 0.25 }); k.play('thud', T(16, 'eyelids'), { f: 110, gain: 0.45 });
    k.play('whoosh', T(17, 'blast') - 0.05, { dur: 0.7, gain: 0.7 });
    k.play('impact', T(18, 'eight'), { gain: 0.6 });
    k.play('success', T(23, 'stay'), { f: 'A5', gain: 0.45 });
    k.play('ding', T(25, 'shut') + 0.2, { f: 'E6', gain: 0.3 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.VIDEO_W = W_; window.VIDEO_H = HH;
})();
