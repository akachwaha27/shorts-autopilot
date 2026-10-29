// ================= Napkin Sketch, 9:16 1080x1920: "Why don't spiders get stuck in their own webs?" =================
// Short (~57 s). Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A cafe-table pitch in black Sharpie: each part of the story is scrawled on a paper napkin; when the story moves
// on, a fresh napkin is slapped down on top of the pile. Red Sharpie for the glue, the extra claw and the key number.
// Ink feathers into the tissue fibres; napkins carry the embossed border, crumples and a coffee ring.
(function () {
  const W0 = 1080, H0 = 1920;
  // ---------- BEATS: one entry per voiceover phrase (phrases.json, Kokoro am_michael) ----------
  const PH = [{"s":0.25,"e":2.9,"text":"Spider glue almost never lets a fly go.","words":[["spider",0.25],["glue",0.76],["almost",1.11],["never",1.62],["lets",2.05],["a",2.39],["fly",2.47],["go",2.73]]},{"s":3.45,"e":5.76,"text":"So why do you never see the spider stuck?","words":[["so",3.45],["why",3.6],["do",3.81],["you",3.96],["never",4.17],["see",4.54],["the",4.75],["spider",4.97],["stuck",5.4]]},{"s":6.31,"e":9.05,"text":"Secret one: most of the web isn't sticky.","words":[["secret",6.31],["one",6.84],["most",7.11],["of",7.46],["the",7.64],["web",7.9],["isnt",8.17],["sticky",8.52]]},{"s":9.6,"e":11.1,"text":"The spokes are dry silk.","words":[["the",9.6],["spokes",9.84],["are",10.31],["dry",10.55],["silk",10.79]]},{"s":11.65,"e":13.77,"text":"Only the spiral has beads of glue,","words":[["only",11.65],["the",11.97],["spiral",12.2],["has",12.67],["beads",12.91],["of",13.3],["glue",13.46]]},{"s":14.07,"e":15.81,"text":"so the spider walks the spokes.","words":[["so",14.07],["the",14.21],["spider",14.42],["walks",14.84],["the",15.19],["spokes",15.4]]},{"s":16.36,"e":17.79,"text":"Secret two: its feet.","words":[["secret",16.36],["two",16.9],["its",17.17],["feet",17.44]]},{"s":18.34,"e":20.46,"text":"Web spiders have three claws per foot.","words":[["web",18.34],["spiders",18.55],["have",19.03],["three",19.3],["claws",19.64],["per",19.98],["foot",20.18]]},{"s":21.01,"e":22.18,"text":"Insects get two.","words":[["insects",21.01],["get",21.64],["two",21.91]]},{"s":22.73,"e":24.85,"text":"The extra claw hooks a single thread,","words":[["the",22.73],["extra",22.95],["claw",23.3],["hooks",23.58],["a",23.93],["single",24.0],["thread",24.43]]},{"s":25.15,"e":26.39,"text":"like a tiny hand.","words":[["like",25.15],["a",25.53],["tiny",25.63],["hand",26.01]]},{"s":26.94,"e":28.48,"text":"But here's the wild part.","words":[["but",26.94],["heres",27.19],["the",27.59],["wild",27.83],["part",28.16]]},{"s":29.03,"e":30.16,"text":"Building one web,","words":[["building",29.03],["one",29.67],["web",29.92]]},{"s":30.46,"e":32.19,"text":"a spider touches its own glue","words":[["a",30.46],["spider",30.53],["touches",30.96],["its",31.47],["own",31.69],["glue",31.9]]},{"s":32.49,"e":33.75,"text":"hundreds of times.","words":[["hundreds",32.49],["of",33.16],["times",33.33]]},{"s":34.3,"e":36.51,"text":"Its legs are covered in branched hairs,","words":[["its",34.3],["legs",34.51],["are",34.78],["covered",34.99],["in",35.47],["branched",35.61],["hairs",36.16]]},{"s":36.81,"e":38.47,"text":"so the glue slides along them","words":[["so",36.81],["the",36.95],["glue",37.16],["slides",37.43],["along",37.85],["them",38.19]]},{"s":38.77,"e":39.7,"text":"and drips off.","words":[["and",38.77],["drips",39.02],["off",39.45]]},{"s":40.25,"e":42.16,"text":"Scientists washed spider legs,","words":[["scientists",40.25],["washed",40.99],["spider",41.43],["legs",41.87]]},{"s":42.46,"e":43.51,"text":"and they stuck more.","words":[["and",42.46],["they",42.66],["stuck",42.92],["more",43.25]]},{"s":44.06,"e":45.99,"text":"So there's a non-stick coating, too.","words":[["so",44.06],["theres",44.21],["a",44.63],["nonstick",44.7],["coating",45.27],["too",45.77]]},{"s":46.54,"e":48.64,"text":"A fly hits lots of glue at once.","words":[["a",46.54],["fly",46.62],["hits",46.89],["lots",47.24],["of",47.59],["glue",47.76],["at",48.11],["once",48.29]]},{"s":49.19,"e":51.27,"text":"The spider barely touches a drop.","words":[["the",49.19],["spider",49.42],["barely",49.88],["touches",50.34],["a",50.88],["drop",50.96]]},{"s":51.82,"e":53.38,"text":"So which trick would you steal:","words":[["so",51.82],["which",51.94],["trick",52.25],["would",52.57],["you",52.88],["steal",53.06]]},{"s":53.68,"e":55.67,"text":"the claws, the hairs, or the coating?","words":[["the",53.68],["claws",53.89],["the",54.25],["hairs",54.46],["or",54.81],["the",54.96],["coating",55.17]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); return x ? x[1] : PH[i].s; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const BEATS = [
    { s: PH[0].s, e: PH[1].e, text: 'hook: spider glue traps flies, so why is the spider never stuck', screen: 'SPIDER GLUE, orb web, trapped fly, spider, red ?' },
    { s: PH[2].s, e: PH[5].e, text: 'secret 1: only the spiral is sticky', screen: 'napkin 2: dry spokes, spiral with red glue beads, spider walks a spoke' },
    { s: PH[6].s, e: PH[10].e, text: 'secret 2: three claws per foot', screen: 'napkin 3: big foot, red 3 CLAWS, extra claw hooks a thread, INSECTS: 2' },
    { s: PH[11].s, e: PH[14].e, text: 'touches its own glue hundreds of times per web', screen: 'napkin 4: spider, touch marks, red HUNDREDS' },
    { s: PH[15].s, e: PH[17].e, text: 'branched hairs make glue slide and drip off', screen: 'napkin 5: magnified leg, branched hairs, red drop slides and drips' },
    { s: PH[18].s, e: PH[20].e, text: 'washed legs stick more: a non-stick coating', screen: 'napkin 6: bowl, STUCK MORE!, red NON-STICK COATING' },
    { s: PH[21].s, e: PH[24].e, text: 'fly hits lots of glue, spider one drop + question', screen: 'napkin 7: fly vs spider, WHICH TRICK? claws / hairs / coating' },
  ];
  // napkin k slides in during SL[k] (lands at s0 + (s1-s0)*pi/9)
  const SL = [[-1, -0.6], [5.85, 6.25], [15.9, 16.3], [26.45, 26.85], [33.8, 34.2], [39.75, 40.15], [46.05, 46.45]];
  const NAP = [[540, 990, 990, 1450, -0.015], [548, 985, 980, 1440, 0.02], [535, 992, 985, 1445, -0.02], [545, 988, 980, 1440, 0.015], [538, 990, 985, 1445, -0.018], [542, 986, 985, 1440, 0.012], [540, 990, 985, 1445, -0.014]];

  // ---------- geometry helpers ----------
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const win = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const circ = (x, y, rx, ry, a0 = 0, a1 = Math.PI * 2, n = 0) => { n = n || Math.max(12, Math.ceil(Math.abs(a1 - a0) * Math.max(rx, ry) / 6)); const o = []; for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; o.push([x + Math.cos(a) * rx, y + Math.sin(a) * ry]); } return o; };
  const quad = (p0, p1, p2, n = 24) => { const o = []; for (let i = 0; i <= n; i++) { const t = i / n, m = 1 - t; o.push([m * m * p0[0] + 2 * m * t * p1[0] + t * t * p2[0], m * m * p0[1] + 2 * m * t * p1[1] + t * t * p2[1]]); } return o; };
  const head = (P, len = 30, spread = 0.5) => { const a = P[P.length - 1], b = P[Math.max(0, P.length - 5)], an = Math.atan2(a[1] - b[1], a[0] - b[0]); return [[a[0] - Math.cos(an - spread) * len, a[1] - Math.sin(an - spread) * len], a, [a[0] - Math.cos(an + spread) * len, a[1] - Math.sin(an + spread) * len]]; };
  const wave = (x0, y0, x1, y1, amp, cycles, n = 80) => { const o = [], dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L; for (let i = 0; i <= n; i++) { const u = i / n, s = Math.sin(u * cycles * Math.PI * 2) * amp; o.push([x0 + dx * u + nx * s, y0 + dy * u + ny * s]); } return o; };

  // ---------- the ink: timed world-space strokes and words (world = the 1080x1920 frame at zoom 1) ----------
  const items = [];
  let G = 0;
  const line = (pts, a, b, o = {}) => items.push({ k: 'line', pts, a, b, w: o.w || 7, red: !!o.red, g: G, hit: o.hit });
  const arrow = (pts, a, b, o = {}) => { line(pts, a, b, o); line(head(pts, o.hl || 30), b, b + 0.06, o); };
  const text = (s, x, y, size, a, b, o = {}) => items.push({ k: 'text', s, x, y, size, a, b, red: !!o.red, align: o.align || 'center', rot: o.rot || 0, g: G, hit: o.hit });
  const dotR = (x, y, r, a, o = {}) => line(circ(x, y, r, r, 0, Math.PI * 2, 14), a, a + 0.05, { w: o.w || 7, red: o.red !== false, hit: o.hit });
  // an orb web: n dry spokes, then the sticky spiral; returns the spiral bead spots
  const web = (cx, cy, R, n, a0, sA, sB, pA, pB, o = {}) => {
    for (let i = 0; i < n; i++) { const an = a0 + i * Math.PI * 2 / n, aa = sA + (sB - sA) * i / n; line([[cx, cy], [cx + Math.cos(an) * R, cy + Math.sin(an) * R]], aa, aa + (sB - sA) / n, { w: o.w || 5 }); }
    const turns = o.turns || 4, r0 = R * 0.16, pts = [], beads = [];
    for (let i = 0; i <= n * turns; i++) { const an = a0 + i * Math.PI * 2 / n, r = r0 + (R * 0.93 - r0) * i / (n * turns); pts.push([cx + Math.cos(an) * r, cy + Math.sin(an) * r]); }
    line(pts, pA, pB, { w: o.sw || 4 });
    for (let i = 1; i < pts.length; i++) beads.push([(pts[i][0] + pts[i - 1][0]) / 2, (pts[i][1] + pts[i - 1][1]) / 2]);
    line(circ(cx, cy, R * 0.08, R * 0.08), pA - 0.06, pA, { w: o.w || 5 });
    return beads;
  };
  const spider = (x, y, s, a, b, o = {}) => {
    const d = b - a;
    line(circ(x, y, 0.2 * s, 0.17 * s), a, a + d * 0.12, o);
    line(circ(x, y + 0.45 * s, 0.27 * s, 0.32 * s), a + d * 0.12, a + d * 0.3, o);
    for (let i = 0; i < 8; i++) {
      const side = i < 4 ? -1 : 1, j = i % 4, aa = a + d * (0.3 + 0.0875 * i);
      const sx = x + side * 0.16 * s, sy = y + (-0.08 + j * 0.06) * s;
      const kx = x + side * (0.5 + (j === 0 || j === 3 ? 0.02 : 0.08)) * s, ky = y + (-0.5 + j * 0.3) * s;
      const fx = x + side * (0.72 + 0.04 * (j === 1 || j === 2)) * s, fy = y + (-0.62 + j * 0.5) * s;
      line([[sx, sy], [kx, ky], [fx, fy]], aa, aa + d * 0.0875, { w: o.w || 6 });
    }
  };
  const fly = (x, y, s, a, b, o = {}) => {
    const d = b - a;
    line(circ(x, y, 0.13 * s, 0.24 * s), a, a + d * 0.25, o);
    line(circ(x, y - 0.33 * s, 0.11 * s, 0.1 * s), a + d * 0.25, a + d * 0.4, o);
    line(circ(x - 0.26 * s, y - 0.12 * s, 0.2 * s, 0.1 * s, 0, Math.PI * 2, 20).map(([px, py]) => [px, py + (px - x) * 0.25]), a + d * 0.4, a + d * 0.6, { w: 5 });
    line(circ(x + 0.26 * s, y - 0.12 * s, 0.2 * s, 0.1 * s, 0, Math.PI * 2, 20).map(([px, py]) => [px, py - (px - x) * 0.25]), a + d * 0.6, a + d * 0.8, { w: 5 });
    [-1, 1].forEach((sd, i) => line([[x + sd * 0.1 * s, y + 0.05 * s], [x + sd * 0.3 * s, y + 0.2 * s], [x + sd * 0.34 * s, y + 0.34 * s]], a + d * (0.8 + i * 0.1), a + d * (0.9 + i * 0.1), { w: 5 }));
  };

  // ---- napkin 1: HOOK ----
  G = 0;
  { const a = P(0, 'spider') - 0.1; text('SPIDER GLUE', 540, 420, 104, a, P(0, 'glue') + 0.3, { rot: -0.02 }); line([[250, 448], [540, 442], [830, 432]], P(0, 'glue') + 0.3, P(0, 'glue') + 0.45, { w: 8 }); }
  { const a = P(0, 'almost') - 0.1; web(540, 960, 340, 12, -Math.PI / 2, a, a + 0.5, a + 0.5, P(0, 'fly') - 0.05); }
  { const a = P(0, 'fly') - 0.05; fly(700, 820, 130, a, a + 0.35); line(circ(700, 815, 105, 105, -2, 4.3), P(0, 'go') - 0.05, P(0, 'go') + 0.2, { red: true, w: 8 });
    text('TRAPPED', 700, 680, 64, P(0, 'go') + 0.15, P(0, 'go') + 0.45, { red: true, rot: -0.04 }); }
  { const a = P(1, 'spider') - 0.1; spider(430, 1060, 150, a, a + 0.45); }
  { const a = P(1, 'stuck') - 0.1; text('NEVER STUCK?', 540, 1500, 104, a, a + 0.5, { red: true, rot: -0.025, hit: 'big' }); }

  // ---- napkin 2: SECRET ONE: ONLY THE SPIRAL IS STICKY ----
  G = 1;
  { const a = SL[1][1] + 0.05; text('SECRET #1', 540, 400, 100, a, a + 0.45, { rot: -0.02 }); text('NOT ALL STICKY', 540, 515, 76, P(2, 'most') - 0.05, P(2, 'sticky') + 0.15, { red: true }); }
  const CX = 540, CY = 1000, R = 330, A0 = -Math.PI / 2;
  let beads;
  { const a = P(3, 'spokes') - 0.1; beads = web(CX, CY, R, 12, A0, a, a + 0.6, P(4, 'spiral') - 0.1, P(4, 'spiral') + 0.6);
    text('DRY SPOKES', 540, 1440, 80, P(3, 'dry') - 0.1, P(3, 'silk') + 0.2); }
  { const a = P(4, 'beads') - 0.1, pick = beads.filter((_, i) => i % 2 === 1 && i > 6);
    pick.forEach((p, i) => dotR(p[0], p[1], 7, a + i * (0.55 / pick.length), { w: 6 }));
    text('GLUE', 860, 640, 80, P(4, 'glue') - 0.1, P(4, 'glue') + 0.2, { red: true, rot: 0.05 }); }
  { const a = P(5, 'spider') - 0.1, an = -Math.PI / 4 + Math.PI / 6 * 0;
    const ang = A0 + 2 * Math.PI / 12 * 10; // the spoke up-left
    const ux = Math.cos(ang), uy = Math.sin(ang), nx = -uy * 34, ny = ux * 34;
    spider(CX + ux * 70, CY + uy * 70 - 10, 95, a, a + 0.35, { w: 6 });
    arrow([[CX + ux * 140 + nx, CY + uy * 140 + ny], [CX + ux * 300 + nx, CY + uy * 300 + ny]], P(5, 'walks') - 0.05, P(5, 'walks') + 0.25, { w: 6 });
    text('walk here', 240, 1240, 60, P(5, 'spokes') - 0.15, P(5, 'spokes') + 0.25, { rot: -0.04 }); }

  // ---- napkin 3: SECRET TWO: THE FEET ----
  G = 2;
  { const a = SL[2][1] + 0.05; text('SECRET #2', 540, 400, 100, a, a + 0.45, { rot: -0.02 }); text('THE FEET', 540, 510, 80, P(6, 'feet') - 0.15, P(6, 'feet') + 0.2, { red: true }); }
  { const a = P(6, 'feet') + 0.25; // one big leg reaching down to a thread
    line([[300, 590], [470, 960]], a, a + 0.18, { w: 8 }); line([[400, 580], [560, 950]], a + 0.18, a + 0.36, { w: 8 });
    line(circ(355, 600, 52, 22, 0, Math.PI * 2, 20), a + 0.36, a + 0.42, { w: 6 });
    for (let i = 0; i < 6; i++) { const u = 0.25 + i * 0.12, x = 300 + 170 * u, y = 590 + 370 * u; line([[x, y], [x - 34, y + 10]], a + 0.42 + i * 0.03, a + 0.45 + i * 0.03, { w: 4 }); } }
  { const a = P(7, 'three') - 0.1; // the claws: two big ones in black, the extra one in red
    line(quad([480, 960], [410, 1010], [440, 1080]), a, a + 0.08, { w: 9 });
    line(quad([555, 950], [640, 990], [620, 1070]), a + 0.08, a + 0.16, { w: 9 });
    line(quad([515, 965], [500, 1040], [545, 1062]), a + 0.16, a + 0.24, { w: 9, red: true });
    text('3 CLAWS', 770, 780, 100, a + 0.05, P(7, 'claws') + 0.3, { red: true, rot: -0.04, hit: 'big' }); }
  { const a = P(8, 'insects') - 0.1; text('INSECTS: 2', 560, 1450, 84, a, P(8, 'two') + 0.2);
    line([[180, 1300], [230, 1390]], a, a + 0.1, { w: 6 }); line(quad([230, 1390], [200, 1420], [215, 1460]), a + 0.1, a + 0.18, { w: 6 }); line(quad([232, 1390], [270, 1415], [258, 1458]), a + 0.18, a + 0.26, { w: 6 }); }
  { const a = P(9, 'hooks') - 0.15; line(wave(110, 1066, 970, 1058, 3, 2), P(9, 'extra') - 0.1, P(9, 'claw') + 0.1, { w: 5 });
    line(circ(530, 1055, 62, 62, -2.4, 3.9), a, a + 0.25, { red: true, w: 7 });
    arrow([[760, 1200], [660, 1150], [598, 1088]], P(9, 'thread') - 0.1, P(9, 'thread') + 0.15, { red: true, w: 6 }); }
  { const a = P(10, 'like') - 0.05; text('= A TINY HAND', 720, 1260, 64, a, a + 0.6, { rot: -0.03 }); }

  // ---- napkin 4: THE WILD PART: HUNDREDS OF TOUCHES ----
  G = 3;
  { const a = SL[3][1] + 0.05; text('THE WILD PART', 540, 410, 96, a, a + 0.5, { rot: -0.02 }); }
  { const a = P(12, 'building') - 0.05; text('ONE WEB', 540, 525, 76, a, P(12, 'web') + 0.2, { red: true });
    web(540, 900, 260, 10, -Math.PI / 2, a + 0.1, a + 0.45, a + 0.45, P(13, 'spider') - 0.05, { w: 4, sw: 3, turns: 3 }); }
  { const a = P(13, 'spider') - 0.05; spider(540, 860, 190, a, a + 0.45); }
  { const a = P(13, 'touches') - 0.05, spots = [[400, 760], [690, 760], [380, 1010], [700, 1010], [460, 1120], [620, 1120], [330, 880], [750, 880], [540, 700], [560, 1180]];
    spots.forEach(([x, y], i) => dotR(x, y, 10, a + i * 0.11, { w: 7 }));
    text('TOUCH!', 840, 650, 56, P(13, 'glue') - 0.1, P(13, 'glue') + 0.2, { red: true, rot: 0.08 }); }
  { const a = P(14, 'hundreds') - 0.12; text('HUNDREDS', 540, 1360, 150, a, a + 0.45, { red: true, rot: -0.03, hit: 'big' });
    text('OF TIMES', 540, 1480, 80, P(14, 'times') - 0.1, P(14, 'times') + 0.3); }

  // ---- napkin 5: BRANCHED HAIRS ----
  G = 4;
  { const a = SL[4][1] + 0.05; text('BRANCHED HAIRS', 540, 410, 92, a, P(15, 'hairs') + 0.2, { rot: -0.02 });
    text('(zoomed in)', 540, 510, 50, a + 0.2, a + 0.6); }
  { const a = P(15, 'legs') - 0.1; line([[90, 620], [990, 600]], a, a + 0.3, { w: 9 }); line([[90, 760], [990, 740]], a + 0.3, a + 0.6, { w: 9 }); }
  const HX = [170, 300, 430, 560, 690, 820, 940];
  { const a = P(15, 'branched') - 0.1;
    HX.forEach((x, i) => { const y0 = 760 - i * 3, aa = a + i * 0.12; line([[x, y0], [x + 70, y0 + 300]], aa, aa + 0.07, { w: 6 });
      line([[x + 30, y0 + 130], [x - 10, y0 + 190]], aa + 0.07, aa + 0.09, { w: 4 }); line([[x + 48, y0 + 205], [x + 95, y0 + 250]], aa + 0.09, aa + 0.11, { w: 4 }); }); }
  { const a = P(16, 'glue') - 0.1, x = HX[3], y0 = 760 - 9; dotR(x + 10, y0 + 40, 22, a, { w: 8 });
    arrow([[x + 60, y0 + 40], [x + 100, y0 + 200]], P(16, 'slides') - 0.05, P(16, 'slides') + 0.3, { red: true, w: 6 });
    text('GLUE', x - 140, y0 + 70, 64, a + 0.05, a + 0.3, { red: true }); }
  { const a = P(17, 'drips') - 0.1, x = HX[3] + 70, y = 1051; line(quad([x - 18, y + 70], [x, y + 20], [x + 18, y + 70]).concat(circ(x, y + 80, 20, 20, -0.4, Math.PI + 0.4).reverse()), a, a + 0.12, { red: true, w: 8 });
    [0, 1, 2].forEach((i) => line([[x - 40 + i * 40, y + 140], [x - 40 + i * 40, y + 190]], a + 0.12 + i * 0.05, a + 0.17 + i * 0.05, { red: true, w: 5 }));
    text('DRIP!', 840, 1320, 120, P(17, 'off') - 0.12, P(17, 'off') + 0.2, { red: true, rot: -0.05, hit: 'big' }); }

  // ---- napkin 6: THE WASHED-LEG TEST ----
  G = 5;
  { const a = SL[5][1] + 0.05; text('THE TEST', 540, 410, 100, a, a + 0.45, { rot: -0.02 }); }
  { const a = P(18, 'washed') - 0.1;
    line(circ(540, 680, 270, 190, 0.02, Math.PI - 0.02, 30), a, a + 0.3, { w: 8 }); line([[260, 680], [820, 680]], a + 0.3, a + 0.4, { w: 8 });
    line(wave(310, 730, 770, 730, 9, 4), a + 0.4, a + 0.55, { w: 5 });
    line([[780, 520], [640, 770]], P(18, 'legs') - 0.1, P(18, 'legs') + 0.08, { w: 8 }); line([[840, 540], [700, 780]], P(18, 'legs') + 0.08, P(18, 'legs') + 0.2, { w: 8 });
    text('WASHED LEG', 540, 960, 70, P(18, 'legs') + 0.2, P(18, 'legs') + 0.55); }
  { const a = P(19, 'stuck') - 0.12; text('STUCK MORE!', 540, 1120, 104, a, a + 0.45, { red: true, rot: -0.03, hit: 'x' }); }
  { const a = P(20, 'nonstick') - 0.12; text('NON-STICK', 540, 1350, 130, a, a + 0.4, { red: true, rot: -0.02, hit: 'big' });
    text('COATING', 540, 1475, 90, P(20, 'coating') - 0.1, P(20, 'coating') + 0.3);
    line([[290, 1500], [540, 1494], [790, 1486]], P(20, 'too') - 0.05, P(20, 'too') + 0.15, { w: 7, red: true }); }

  // ---- napkin 7: FLY VS SPIDER + question ----
  G = 6;
  { const a = P(21, 'fly') - 0.1; fly(290, 720, 230, a, a + 0.4); text('FLY', 290, 470, 80, SL[6][1] + 0.05, SL[6][1] + 0.3);
    const sp = [[150, 600], [430, 610], [130, 760], [450, 770], [200, 900], [380, 900], [290, 980], [170, 680], [410, 690], [240, 560], [340, 560], [290, 860]];
    const b = P(21, 'lots') - 0.1; sp.forEach(([x, y], i) => dotR(x, y, 11, b + i * 0.07, { w: 7 }));
    text('LOTS OF GLUE', 290, 1080, 58, P(21, 'glue') - 0.1, P(21, 'once') + 0.15, { red: true }); }
  { line([[540, 470], [540, 1060]], SL[6][1] + 0.1, SL[6][1] + 0.3, { w: 4 });
    const a = P(22, 'spider') - 0.1; text('SPIDER', 800, 470, 80, a - 0.15, a + 0.15); spider(800, 720, 190, a + 0.1, a + 0.5);
    dotR(800 + 0.72 * 190, 720 + 0.38 * 190, 12, P(22, 'drop') - 0.05, { w: 7 });
    text('1 DROP', 800, 1080, 80, P(22, 'drop') - 0.05, P(22, 'drop') + 0.3, { red: true, hit: 'big' }); }
  { const a = P(23, 'which') - 0.1; text('WHICH TRICK?', 540, 1300, 110, a, a + 0.6, { rot: -0.02 });
    text('CLAWS', 230, 1440, 70, P(24, 'claws') - 0.1, P(24, 'claws') + 0.2, { red: true });
    text('HAIRS', 520, 1440, 70, P(24, 'hairs') - 0.1, P(24, 'hairs') + 0.2, { red: true });
    text('COATING', 830, 1440, 70, P(24, 'coating') - 0.1, P(24, 'coating') + 0.3, { red: true, hit: 'end' }); }

  // ---------- camera: [t, cx, cy, zoom] ----------
  const CAM = [[0, 540, 520, 1.35], [1.1, 540, 540, 1.32], [1.9, 540, 960, 1.0], [5.8, 540, 990, 1.04],
    [6.3, 540, 960, 1.0], [9.3, 540, 980, 1.02], [13.9, 540, 1000, 1.05], [15.85, 540, 1000, 1.05],
    [16.3, 540, 960, 1.0], [19.2, 540, 900, 1.06], [22.5, 540, 1000, 1.02], [26.4, 540, 1020, 1.05],
    [26.85, 540, 960, 1.0], [32.2, 540, 960, 1.0], [33.0, 540, 1080, 1.08], [33.75, 540, 1080, 1.08],
    [34.2, 540, 960, 1.0], [39.7, 540, 1000, 1.05],
    [40.15, 540, 960, 1.0], [45.9, 540, 1020, 1.05],
    [46.45, 540, 960, 1.0], [51.6, 540, 900, 1.02], [52.4, 540, 1050, 1.0], [DURATION, 540, 1070, 1.04]];
  const camAt = (t) => {
    if (t <= CAM[0][0]) return CAM[0].slice(1);
    for (let i = 0; i < CAM.length - 1; i++) { const a = CAM[i], b = CAM[i + 1]; if (t <= b[0]) { const u = eio((t - a[0]) / Math.max(1e-6, b[0] - a[0])); return [a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u, Math.exp(Math.log(a[3]) + (Math.log(b[3]) - Math.log(a[3])) * u)]; } }
    return CAM[CAM.length - 1].slice(1);
  };

  // ---------- the reference's stroke helpers ----------
  const seg = (pts, step = 2.5) => { const out = []; for (let i = 0; i < pts.length - 1; i++) { const [x0, y0] = pts[i], [x1, y1] = pts[i + 1]; const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / step)); for (let j = 0; j < n; j++) out.push([x0 + (x1 - x0) * j / n, y0 + (y1 - y0) * j / n]); } out.push(pts[pts.length - 1]); return out; };
  const normals = (P_) => P_.map((p, i) => { const a = P_[Math.max(0, i - 1)], b = P_[Math.min(P_.length - 1, i + 1)]; const dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1; return [-dy / d, dx / d]; });
  const wob = (pts, nz, seed, amp = 1.6, freq = 0.012) => { const N = normals(pts); let L = 0; return pts.map((p, i) => { if (i) L += Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]); const o = nz.n2(L * freq + seed * 1.37, seed * 0.71) * amp + nz.n2(L * freq * 6 + seed, seed + 3.3) * amp * 0.3; return [p[0] + N[i][0] * o, p[1] + N[i][1] * o]; }); };
  const font = (size) => `400 ${size}px "Permanent Marker"`;

  const XC = {};
  const NW = 990, NH = 1450;
  function caches() {
    if (XC.wood) return;
    const nz = H.makeNoise(64);
    // wooden cafe table (half-res per pixel, the reference's planks), covers world -300..1380 x -300..2220
    const w2 = 840, h2 = 1260, wl = H.layer(w2, h2), wc = wl.getContext('2d'), id = wc.createImageData(w2, h2), d = id.data, rr = H.rng(3);
    const PL = 92, tints = [...Array(16)].map(() => [rr.range(-12, 12), rr.range(-0.4, 0.4)]);
    for (let y = 0; y < h2; y++) for (let x = 0; x < w2; x++) {
      const pi = Math.floor((y + 20) / PL), py = (y + 20) % PL, [tint, ph] = tints[pi % tints.length];
      const warp = nz.fbm2(x * 0.0025 + pi * 7, py * 0.012 + pi, 3) * 5.5, ring = Math.sin((py * 0.07 + warp + ph * 3) * Math.PI * 2);
      const fine = nz.n2(x * 0.012 + pi * 5, y * 0.55) * 0.6 + nz.n2(x * 0.05, y * 1.3) * 0.25;
      const v = 0.5 + 0.16 * Math.sign(ring) * Math.pow(Math.abs(ring), 0.4) + 0.14 * fine + nz.n2(x * 0.004, y * 0.02 + pi) * 0.12;
      let r = (118 + tint) * (0.75 + 0.5 * v), gg = (74 + tint * 0.6) * (0.75 + 0.5 * v), b = (42 + tint * 0.3) * (0.78 + 0.45 * v);
      if (py < 2 || py > PL - 2) { r *= 0.35; gg *= 0.3; b *= 0.3; }
      const i = (y * w2 + x) * 4; d[i] = r; d[i + 1] = gg; d[i + 2] = b; d[i + 3] = 255;
    }
    wc.putImageData(id, 0, 0); XC.wood = wl;
    // napkin body: deckled edge, tissue fibres, embossed border
    const nb = H.layer(NW, NH), nc = nb.getContext('2d'), out = [];
    const edge = (x0, y0, x1, y1, s) => { for (let i = 0; i < 80; i++) { const u = i / 80, x = x0 + (x1 - x0) * u, y = y0 + (y1 - y0) * u, o = nz.n2(u * 11 + s, s) * 2.6 + nz.n2(u * 70, s + 1) * 0.8; const nx = -(y1 - y0), ny = x1 - x0, l = Math.hypot(nx, ny); out.push([x + nx / l * o, y + ny / l * o]); } };
    edge(4, 3, NW - 3, 6, 1); edge(NW - 3, 4, NW - 6, NH - 3, 2); edge(NW - 4, NH - 3, 3, NH - 4, 3); edge(3, NH - 3, 6, 6, 4);
    nc.beginPath(); out.forEach(([x, y], i) => (i ? nc.lineTo(x, y) : nc.moveTo(x, y))); nc.closePath(); nc.fillStyle = '#f6f5f0'; nc.fill(); nc.save(); nc.clip();
    const r2 = H.rng(21);
    for (let i = 0; i < 6000; i++) { const x = r2.range(0, NW), y = r2.range(0, NH), a = r2.range(0, 6.28), l = r2.range(3, 10); nc.strokeStyle = r2.chance(0.5) ? 'rgba(180,175,165,0.08)' : 'rgba(255,255,255,0.35)'; nc.lineWidth = 0.7; nc.beginPath(); nc.moveTo(x, y); nc.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); nc.stroke(); }
    const EM = H.layer(NW, NH), ec = EM.getContext('2d'); ec.strokeStyle = '#000'; ec.fillStyle = '#000';
    const inset = (k, lw) => { ec.lineWidth = lw; ec.beginPath(); ec.roundRect(k, k, NW - 2 * k, NH - 2 * k, 6); ec.stroke(); };
    inset(18, 2); inset(56, 2); inset(22, 1.2);
    const ring = (x, y) => { ec.lineWidth = 1.6; for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2; ec.beginPath(); ec.ellipse(x + Math.cos(a) * 5, y + Math.sin(a) * 5, 5, 3, a, 0, 7); ec.stroke(); } ec.beginPath(); ec.arc(x, y, 1.6, 0, 7); ec.fill(); };
    for (let x = 74; x < NW - 40; x += 36) { ring(x, 37); ring(x, NH - 37); }
    for (let y = 74; y < NH - 40; y += 36) { ring(37, y); ring(NW - 37, y); }
    for (let y = 80; y < NH - 70; y += 18) for (let x = 80 + ((y / 18) % 2) * 9; x < NW - 70; x += 18) { ec.beginPath(); ec.arc(x, y, 0.9, 0, 7); ec.fill(); }
    const tintL = (col, dx, dy, a) => { const tl = H.layer(NW, NH), tc = tl.getContext('2d'); tc.drawImage(EM, dx, dy); tc.globalCompositeOperation = 'source-in'; tc.fillStyle = col; tc.fillRect(0, 0, NW, NH); nc.globalAlpha = a; nc.drawImage(tl, 0, 0); nc.globalAlpha = 1; };
    tintL('#8f8a80', 1.1, 1.3, 0.35); tintL('#ffffff', -1, -1.1, 0.9);
    nc.restore(); XC.napkin = nb;
    // crumple + quarter-fold shading, half-res
    const gw = NW / 2 | 0, gh = NH / 2 | 0, hf = new Float32Array(gw * gh);
    for (let y = 0; y < gh; y++) for (let x = 0; x < gw; x++) {
      const u = x * 2, v = y * 2; let h = nz.fbm2(u * 0.009 + 3, v * 0.009, 4) * 11;
      const q1 = 1 - Math.abs(nz.n2(u * 0.018 + 9, v * 0.018)), q2 = 1 - Math.abs(nz.n2(u * 0.042 + 5, v * 0.042 + 2));
      h += q1 * q1 * 4.5 + q2 * q2 * 0.6 + 8 * Math.max(0, 1 - Math.abs(u - NW / 2) / 22) - 7 * Math.max(0, 1 - Math.abs(v - NH / 2) / 20);
      h += 6 * Math.max(0, 1 - Math.min(u, v, NW - u, NH - v) / 40); hf[y * gw + x] = h;
    }
    const SLy = H.layer(gw, gh), sc = SLy.getContext('2d'), sid = sc.createImageData(gw, gh), sd = sid.data;
    const HLl = H.layer(gw, gh), hlc = HLl.getContext('2d'), hid = hlc.createImageData(gw, gh), hd = hid.data;
    for (let y = 1; y < gh - 1; y++) for (let x = 1; x < gw - 1; x++) {
      const i = y * gw + x, gx = (hf[i + 1] - hf[i - 1]) / 4, gy = (hf[i + gw] - hf[i - gw]) / 4, nl = Math.hypot(gx, gy, 1);
      const lam = (-gx * -0.55 + -gy * -0.6 + 0.58) / nl, dl = (lam - 0.58) * 1.35, j = i * 4;
      if (dl < 0) { sd[j] = 118; sd[j + 1] = 108; sd[j + 2] = 96; sd[j + 3] = Math.min(255, -dl * 255); } else { hd[j] = 255; hd[j + 1] = 255; hd[j + 2] = 251; hd[j + 3] = Math.min(255, dl * 200); }
    }
    sc.putImageData(sid, 0, 0); hlc.putImageData(hid, 0, 0);
    const up = (src) => { const o = H.layer(NW, NH), oc = o.getContext('2d'); oc.imageSmoothingEnabled = true; oc.drawImage(src, 0, 0, NW, NH); oc.globalCompositeOperation = 'destination-in'; oc.drawImage(nb, 0, 0); return o; };
    XC.crumple = up(SLy); XC.crumpleHL = up(HLl);
    // fibre mask (ink wicks along it) + absorption speckle
    const FB = H.layer(NW, NH), fbc = FB.getContext('2d'), r3 = H.rng(44);
    fbc.strokeStyle = '#000'; fbc.lineWidth = 0.9; fbc.beginPath();
    for (let i = 0; i < 95000; i++) { const x = r3.range(0, NW), y = r3.range(0, NH), a = r3.range(0, 6.28), l = r3.range(1.5, 5); fbc.moveTo(x, y); fbc.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); }
    fbc.stroke(); XC.fibre = FB;
    const SP = H.layer(NW, NH), spc = SP.getContext('2d'), r4 = H.rng(45);
    for (let i = 0; i < 26000; i++) { spc.fillStyle = `rgba(0,0,0,${r4.range(0.05, 0.3).toFixed(3)})`; spc.fillRect(r4.range(0, NW), r4.range(0, NH), r4.range(1, 3), r4.range(1, 3)); }
    XC.speck = SP;
    // coffee-ring stain sprite
    const RS = 300, RL = H.layer(RS, RS), rc = RL.getContext('2d');
    const ringS = (cx, cy, R, a) => {
      for (let k = 0; k < 3; k++) { const r = R + k * 1.6, g = rc.createRadialGradient(cx, cy, r - 18, cx, cy, r + 2); g.addColorStop(0, 'rgba(150,95,45,0)'); g.addColorStop(0.7, `rgba(150,95,45,${a * 0.25})`); g.addColorStop(0.92, `rgba(120,70,30,${a})`); g.addColorStop(1, 'rgba(120,70,30,0)'); rc.fillStyle = g; rc.beginPath(); rc.arc(cx + k * 0.9, cy - k * 0.7, r + 2, 0, 7); rc.fill(); }
      const g2 = rc.createRadialGradient(cx, cy, 0, cx, cy, R); g2.addColorStop(0, `rgba(170,120,60,${a * 0.07})`); g2.addColorStop(1, `rgba(170,120,60,${a * 0.12})`); rc.fillStyle = g2; rc.beginPath(); rc.arc(cx, cy, R - 2, 0, 7); rc.fill();
    };
    ringS(140, 140, 74, 0.55); ringS(168, 162, 73, 0.22);
    rc.globalCompositeOperation = 'destination-in';
    const cgR = rc.createConicGradient(0.6, 140, 140); cgR.addColorStop(0, 'rgba(0,0,0,1)'); cgR.addColorStop(0.55, 'rgba(0,0,0,1)'); cgR.addColorStop(0.72, 'rgba(0,0,0,0.15)'); cgR.addColorStop(0.86, 'rgba(0,0,0,0.6)'); cgR.addColorStop(1, 'rgba(0,0,0,1)');
    rc.fillStyle = cgR; rc.fillRect(0, 0, RS, RS); XC.ring = RL;
    // pre-wobbled stroke paths (static, so cache them)
    items.forEach((it, i) => { if (it.k === 'line') { const seed = ((it.pts[0][0] * 13 + it.pts[0][1] * 7) | 0) + 3 + i; it.P = wob(seg(it.pts, 2.5), nz, seed % 79, 1.5); } });
    // per-letter jitter for words
    items.forEach((it) => { if (it.k === 'text') { const rr2 = H.rng((it.s.length * 31 + (it.x | 0) + (it.y | 0)) % 991); it.j = [...it.s].map(() => [rr2.range(-2, 2), rr2.range(-0.05, 0.05)]); } });
  }

  const INK = 'rgb(22,20,28)', RED = 'rgb(196,28,36)';
  function explainer(ctx, W, H_, t) {
    caches();
    const sc0 = W / W0; // the shell canvas is 1080 wide; logical = pixels
    const [cx, cy, z0] = camAt(t), z = z0 * sc0;
    const apply = (c) => { c.translate(W / 2, H_ / 2); c.scale(z, z); c.translate(-cx, -cy); };
    const toS = ([x, y]) => [(x - cx) * z + W / 2, (y - cy) * z + H_ / 2];

    // table
    ctx.save(); apply(ctx); ctx.imageSmoothingEnabled = true; ctx.drawImage(XC.wood, -300, -300, 1680, 2520); ctx.restore();
    const vig = ctx.createLinearGradient(0, 0, W, H_); vig.addColorStop(0, 'rgba(255,230,190,0.14)'); vig.addColorStop(0.45, 'rgba(255,230,190,0.02)'); vig.addColorStop(1, 'rgba(20,8,0,0.25)');
    ctx.fillStyle = vig; ctx.fillRect(0, 0, W, H_);

    // which napkins to draw: from the one under the top pile
    let top = 0; for (let k = 0; k < SL.length; k++) if (t >= SL[k][0]) top = k;
    const first = Math.max(0, top - 1);
    for (let k = first; k <= top; k++) {
      const [s0, s1] = SL[k];
      const u = clamp((t - s0) / (s1 - s0)), e = u >= 1 ? 1 : 1 - Math.pow(1 - u, 3) * Math.cos(u * 4.5);
      const [ncx, ncy, nw, nh, nr] = NAP[k];
      const ox = (1 - e) * 1200, oy = (1 - e) * -1500, orot = (1 - e) * 0.6, lift = 1 - clamp(u * 1.1);
      ctx.save(); apply(ctx); ctx.translate(ncx + ox, ncy + oy); ctx.rotate(nr + orot);
      ctx.save(); ctx.filter = `blur(${(8 + lift * 30).toFixed(1)}px)`; ctx.fillStyle = `rgba(25,10,0,${(0.5 - lift * 0.25).toFixed(2)})`;
      ctx.fillRect(-nw / 2 + 8 + lift * 60, -nh / 2 + 12 + lift * 70, nw, nh); ctx.restore();
      ctx.drawImage(XC.napkin, -nw / 2, -nh / 2, nw, nh);
      const RG = [[330, -560, 0.9], [-330, 560, 2.4], [-340, 590, -0.7], [-350, -570, 1.6], [330, 560, 0.3], [340, -560, -1.9], [-330, -580, 2.9]][k];
      ctx.save(); ctx.beginPath(); ctx.rect(-nw / 2 + 4, -nh / 2 + 4, nw - 8, nh - 8); ctx.clip();
      ctx.translate(RG[0], RG[1]); ctx.rotate(RG[2]); ctx.globalCompositeOperation = 'multiply'; ctx.drawImage(XC.ring, -140, -140); ctx.restore();
      ctx.restore();
      if (u >= 1) inkNapkin(ctx, W, H_, t, k, apply, z);
      ctx.save(); apply(ctx); ctx.translate(ncx + ox, ncy + oy); ctx.rotate(nr + orot);
      ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = 0.5; ctx.drawImage(XC.crumple, -nw / 2, -nh / 2, nw, nh);
      ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 0.5; ctx.drawImage(XC.crumpleHL, -nw / 2, -nh / 2, nw, nh);
      ctx.restore();
    }

    // coffee cup on its saucer, top right of the table, with steam
    {
      const [qx, qy] = toS([1010, 70]), s = z * 0.8;
      ctx.save(); ctx.translate(qx, qy); ctx.scale(s, s);
      ctx.save(); ctx.filter = 'blur(14px)'; ctx.fillStyle = 'rgba(20,8,0,0.5)'; ctx.beginPath(); ctx.arc(18, 22, 156, 0, 7); ctx.fill(); ctx.restore();
      const sg = ctx.createRadialGradient(-50, -60, 20, 0, 0, 160); sg.addColorStop(0, '#ffffff'); sg.addColorStop(0.7, '#ebe9e4'); sg.addColorStop(1, '#bfbab2');
      ctx.fillStyle = sg; ctx.beginPath(); ctx.arc(0, 0, 158, 0, 7); ctx.fill();
      const cg = ctx.createRadialGradient(-40, -40, 10, 0, 0, 92); cg.addColorStop(0, '#ffffff'); cg.addColorStop(0.8, '#efece6'); cg.addColorStop(1, '#c6c0b6');
      ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(0, 0, 90, 0, 7); ctx.fill();
      const cf = ctx.createRadialGradient(-10, -10, 5, 0, 0, 76); cf.addColorStop(0, '#6b3e1e'); cf.addColorStop(0.75, '#4a2810'); cf.addColorStop(0.92, '#9a6a3c'); cf.addColorStop(1, '#3a1e0a');
      ctx.fillStyle = cf; ctx.beginPath(); ctx.arc(0, 0, 76, 0, 7); ctx.fill();
      ctx.fillStyle = 'rgba(232,206,170,0.92)'; ctx.rotate(0.4); ctx.beginPath(); ctx.moveTo(0, 30); ctx.bezierCurveTo(-46, 0, -34, -38, 0, -16); ctx.bezierCurveTo(34, -38, 46, 0, 0, 30); ctx.fill();
      ctx.restore();
      ctx.save(); ctx.filter = 'blur(9px)'; ctx.lineCap = 'round';
      for (let k = 0; k < 5; k++) {
        const life = (t * 0.35 + k / 5) % 1; ctx.strokeStyle = `rgba(255,250,240,${(0.55 * Math.sin(life * Math.PI)).toFixed(3)})`; ctx.lineWidth = (10 + life * 18) * s;
        ctx.beginPath();
        for (let j = 0; j <= 12; j++) { const v = j / 12, y = qy + (60 + life * 150 + v * 110) * s, x = qx + (-60 + k * 18 + Math.sin(v * 4 + t * 1.6 + k * 1.3) * (10 + 26 * v)) * s; j ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
        ctx.stroke();
      }
      ctx.restore();
    }

    // the Sharpie: in hand while something is being drawn, set down on the table between strokes
    const tp = tipOf(t, top, ctx);
    if (tp) drawMarker(ctx, ...toS(tp.p), tp.red, 0.9, z);
    else drawMarker(ctx, ...toS([1000, 1560]), false, -0.62, z, true);

    H.grain(ctx, W, H_, 0.025, 8 + (Math.floor(t * 12) % 4));
    H.vignette(ctx, W, H_, 0.32, '25,10,0');
  }

  function tipOf(t, top, ctx) {
    let tip = null;
    for (const it of items) {
      if (it.g !== top) continue;
      const p = win(t, it.a, it.b);
      if (p > 0 && p < 1) {
        if (it.k === 'line') { const Pp = it.P || it.pts; tip = { p: Pp[Math.min(Pp.length - 1, Math.floor(p * (Pp.length - 1)))], red: it.red }; }
        else { ctx.save(); ctx.font = font(it.size); const w = ctx.measureText(it.s).width, x0 = it.align === 'center' ? it.x - w / 2 : it.x, w2 = ctx.measureText(it.s.slice(0, Math.ceil(it.s.length * p))).width; ctx.restore(); tip = { p: [x0 + w2, it.y - it.size * 0.3], red: it.red }; }
      }
    }
    return tip;
  }

  function drawMarker(ctx, tx, ty, red, ang, z, resting) {
    ctx.save(); ctx.translate(tx, ty); ctx.scale(z * 1.25, z * 1.25);
    ctx.save(); ctx.filter = 'blur(8px)'; ctx.fillStyle = 'rgba(20,8,0,0.35)'; ctx.translate(resting ? 8 : 24, resting ? 6 : 30); ctx.rotate(ang); ctx.beginPath(); ctx.roundRect(10, -14, 300, 28, 12); ctx.fill(); ctx.restore();
    ctx.rotate(ang);
    ctx.fillStyle = red ? '#9a1018' : '#111114'; ctx.beginPath(); ctx.ellipse(5, 0, 7, 4, 0, 0, 7); ctx.fill();
    const ng = ctx.createLinearGradient(0, -10, 0, 10); ng.addColorStop(0, '#d8d8de'); ng.addColorStop(1, '#6a6a72');
    ctx.fillStyle = ng; ctx.beginPath(); ctx.moveTo(8, -4); ctx.lineTo(30, -11); ctx.lineTo(30, 11); ctx.lineTo(8, 4); ctx.closePath(); ctx.fill();
    const bg = ctx.createLinearGradient(0, -15, 0, 15);
    if (red) { bg.addColorStop(0, '#e05058'); bg.addColorStop(0.3, '#b8202a'); bg.addColorStop(1, '#5a0a10'); } else { bg.addColorStop(0, '#5a5a62'); bg.addColorStop(0.3, '#2a2a30'); bg.addColorStop(1, '#0c0c10'); }
    ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(28, -15, 190, 30, 12); ctx.fill();
    ctx.fillStyle = '#9c9ca4'; ctx.fillRect(150, -15, 14, 30);
    ctx.fillStyle = bg; ctx.beginPath(); ctx.roundRect(210, -17, 96, 34, 14); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(36, -10, 170, 2.5);
    ctx.restore();
  }

  function inkNapkin(ctx, W, H_, t, k, apply, z) {
    if (!XC.il || XC.il.width !== W) { XC.il = H.layer(W, H_); XC.fb = H.layer(W, H_); XC.bl = H.layer(W >> 1, H_ >> 1); }
    const IL = XC.il, ic = IL.getContext('2d');
    ic.setTransform(1, 0, 0, 1, 0, 0); ic.globalCompositeOperation = 'source-over'; ic.clearRect(0, 0, W, H_);
    ic.save(); apply(ic); ic.lineCap = 'round'; ic.lineJoin = 'round';
    let any = false;
    for (const it of items) {
      if (it.g !== k) continue;
      const p = win(t, it.a, it.b); if (p <= 0) continue; any = true;
      const col = it.red ? RED : INK; ic.strokeStyle = col; ic.fillStyle = col;
      if (it.k === 'line') {
        let Pp = it.P; if (p < 1) Pp = Pp.slice(0, Math.max(2, Math.ceil(Pp.length * p)));
        ic.lineWidth = it.w; ic.beginPath(); Pp.forEach(([x, y], i) => (i ? ic.lineTo(x, y) : ic.moveTo(x, y))); ic.stroke();
      } else {
        ic.save(); ic.font = font(it.size); const w = ic.measureText(it.s).width;
        ic.translate(it.align === 'center' ? it.x - w / 2 : it.x, it.y); ic.rotate(it.rot);
        const n = Math.ceil(it.s.length * p); let px = 0;
        for (let i = 0; i < n; i++) { const cw = ic.measureText(it.s[i]).width; ic.save(); ic.translate(px, it.j[i][0]); ic.rotate(it.j[i][1]); ic.fillText(it.s[i], 0, 0); ic.restore(); px += cw; }
        ic.restore();
      }
    }
    ic.restore();
    if (!any) return;
    const [ncx, ncy, nw, nh, nr] = NAP[k];
    const toNap = (c) => { apply(c); c.translate(ncx, ncy); c.rotate(nr); };
    ic.save(); ic.globalCompositeOperation = 'destination-in'; toNap(ic); ic.drawImage(XC.napkin, -nw / 2, -nh / 2, nw, nh); ic.restore();
    // the reference's feathering: soft halo, fibre-shaped bleed, then the core with uneven absorption
    const hw = W >> 1, hh = H_ >> 1, BL = XC.bl, bc = BL.getContext('2d'), FBL = XC.fb, fc = FBL.getContext('2d');
    bc.setTransform(1, 0, 0, 1, 0, 0); bc.clearRect(0, 0, hw, hh); bc.filter = `blur(${(1.5 * Math.sqrt(z)).toFixed(2)}px)`; bc.drawImage(IL, 0, 0, hw, hh); bc.filter = 'none'; bc.drawImage(BL, 0, 0);
    ctx.save(); ctx.imageSmoothingEnabled = true; ctx.globalAlpha = 0.38; ctx.drawImage(BL, 0, 0, W, H_); ctx.restore();
    fc.setTransform(1, 0, 0, 1, 0, 0); fc.globalCompositeOperation = 'source-over'; fc.clearRect(0, 0, W, H_); fc.imageSmoothingEnabled = true; fc.drawImage(BL, 0, 0, W, H_);
    fc.save(); fc.globalCompositeOperation = 'destination-in'; toNap(fc); fc.drawImage(XC.fibre, -nw / 2, -nh / 2, nw, nh); fc.restore();
    ctx.save(); ctx.globalAlpha = 0.75; ctx.drawImage(FBL, 0, 0); ctx.restore();
    ic.save(); ic.globalCompositeOperation = 'destination-out'; toNap(ic); ic.drawImage(XC.speck, -nw / 2, -nh / 2, nw, nh); ic.restore();
    ctx.save(); ctx.globalAlpha = 0.94; ctx.drawImage(IL, 0, 0); ctx.restore();
  }

  // ---------- sound: a Sharpie on a paper napkin on a wooden cafe table (voiceover mode) ----------
  function scoreSound(k) {
    const LV = 0.45;
    const sh = (a, b, g = 1, pan = 0, minor = true, red = false) => {
      const d = Math.max(0.03, b - a); g *= LV;
      k.noise(a, { dur: 0.03, filter: 'bandpass', f: 700, q: 1, gain: 0.16 * g, a: 0.002, pan, minor });
      k.tone(a, { f: 120, dur: 0.05, gain: 0.07 * g, pan, minor });
      k.play('stroke', a, { material: 'sharpie', dur: d, gain: (red ? 0.5 : 0.42) * g, pan, minor });
      k.noise(a, { dur: d + 0.04, color: 'pink', filter: 'lowpass', f: 520, gain: 0.07 * g, a: 0.015, hold: d * 0.6, pan, minor });
    };
    const write = (s, a, b, g = 0.9, pan = 0, red = false) => { const n = s.length, re = /\S+/g; let m; while ((m = re.exec(s))) sh(a + (b - a) * m.index / n, a + (b - a) * (m.index + m[0].length) / n, g, pan, true, red); };
    const napkin = (s0, s1) => {
      const land = s0 + (s1 - s0) * Math.PI / 9;
      k.noise(s0, { dur: land - s0 + 0.03, color: 'pink', filter: 'bandpass', f: [[0, 260], [land - s0, 800]], q: 0.7, gain: 0.2, a: (land - s0) * 0.8, pan: 0.5 });
      k.play('slap', land, { gain: 0.7, pan: 0.1 }); k.play('thud', land, { f: 85, gain: 0.4, pan: 0.1 });
      k.play('paper', land + 0.01, { dur: 0.16, gain: 0.35, pan: 0.1 });
      k.noise(land + 0.12, { dur: s1 - land, color: 'pink', filter: 'bandpass', f: 1100, q: 0.6, gain: 0.04, a: 0.08, pan: 0.1, minor: true });
    };
    const clink = (t, f, pan) => { k.tone(t, { f, dur: 0.5, gain: 0.025, verb: 0.6, pan, minor: true }); k.tone(t, { f: f * 2.41, dur: 0.2, gain: 0.008, verb: 0.6, pan, minor: true }); };
    k.bed('room', 0, DURATION, { gain: 0.7 });
    clink(3.1, 1560, -0.7); clink(28.7, 1720, 0.75); clink(43.8, 1600, -0.5);
    k.play('pop', 0.35, { f: 300, gain: 0.45, minor: true }); // cap off
    for (let i = 1; i < SL.length; i++) napkin(SL[i][0], SL[i][1]);
    items.forEach((it) => {
      const pan = (((it.k === 'line' ? it.pts[0][0] : it.x) - 540) / 540) * 0.3;
      if (it.k === 'text') write(it.s, it.a, it.b, it.size > 100 ? 1.0 : 0.7, pan, it.red);
      else sh(it.a, it.b, it.b - it.a > 0.25 ? 1.0 : 0.75, pan, true, it.red);
      if (it.hit === 'big') { k.play('impact', it.a + 0.05, { gain: 0.9, pan }); k.play('ding', it.a + 0.06, { f: 'D6', gain: 0.35, pan }); }
      if (it.hit === 'x') k.play('error', it.a, { f: 'F3', gain: 0.4, pan });
      if (it.hit === 'leak') { k.play('buzz', it.a, { f: 98, dur: 0.35, gain: 0.5 }); k.play('whoosh', it.a + 0.3, { dur: 0.6, gain: 0.5 }); }
      if (it.hit === 'end') k.play('success', it.b, { f: 'G5', gain: 0.6 });
    });
    k.play('click', DURATION - 0.35, { f: 700, gain: 1.0, minor: true }); // cap back on
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
