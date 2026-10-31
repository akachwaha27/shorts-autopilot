// ================= Napkin Sketch, 9:16 1080x1920: "Why can't you tickle yourself?" =================
// Short (~52 s). Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A cafe-table pitch in black Sharpie: each part of the story is scrawled on a paper napkin; when the story moves
// on, a fresh napkin is slapped down on top of the pile. Red Sharpie for the cerebellum, the copy, the 0.2 s delay.
// Ink feathers into the tissue fibres; napkins carry the embossed border, crumples and a coffee ring.
(function () {
  const W0 = 1080, H0 = 1920;
  // ---------- BEATS: one entry per voiceover phrase (phrases.json, Kokoro am_michael) ----------
  const PH = [{"s":0.25,"e":2.27,"text":"Your brain cancels your own tickles","words":[["your",0.25],["brain",0.52],["cancels",0.86],["your",1.33],["own",1.6],["tickles",1.8]]},{"s":2.57,"e":3.78,"text":"before you feel them.","words":[["before",2.57],["you",3.0],["feel",3.21],["them",3.5]]},{"s":4.33,"e":5.08,"text":"But how?","words":[["but",4.33],["how",4.71]]},{"s":5.63,"e":7.0,"text":"Every time you move,","words":[["every",5.63],["time",6.06],["you",6.4],["move",6.66]]},{"s":7.3,"e":9.27,"text":"your brain sends a copy of the order","words":[["your",7.3],["brain",7.57],["sends",7.91],["a",8.25],["copy",8.32],["of",8.59],["the",8.73],["order",8.93]]},{"s":9.57,"e":10.69,"text":"to the cerebellum,","words":[["to",9.57],["the",9.72],["cerebellum",9.94]]},{"s":10.99,"e":12.15,"text":"at the back of your head.","words":[["at",10.99],["the",11.11],["back",11.3],["of",11.54],["your",11.66],["head",11.91]]},{"s":12.7,"e":14.81,"text":"It predicts what the touch will feel like,","words":[["it",12.7],["predicts",12.83],["what",13.32],["the",13.57],["touch",13.76],["will",14.07],["feel",14.31],["like",14.56]]},{"s":15.11,"e":16.73,"text":"then turns the feeling down.","words":[["then",15.11],["turns",15.39],["the",15.74],["feeling",15.95],["down",16.44]]},{"s":17.28,"e":18.86,"text":"No surprise, no tickle.","words":[["no",17.28],["surprise",17.45],["no",18.16],["tickle",18.33]]},{"s":19.41,"e":20.99,"text":"When someone else tickles you,","words":[["when",19.41],["someone",19.67],["else",20.11],["tickles",20.36],["you",20.8]]},{"s":21.29,"e":22.52,"text":"there's no prediction.","words":[["theres",21.29],["no",21.7],["prediction",21.84]]},{"s":23.07,"e":24.79,"text":"Your brain can't guess where or when,","words":[["your",23.07],["brain",23.3],["cant",23.6],["guess",23.84],["where",24.14],["or",24.43],["when",24.55]]},{"s":25.09,"e":26.48,"text":"so it hits full blast.","words":[["so",25.09],["it",25.25],["hits",25.42],["full",25.74],["blast",26.07]]},{"s":27.03,"e":29.16,"text":"Scientists tested this with a robot.","words":[["scientists",27.03],["tested",27.74],["this",28.17],["with",28.45],["a",28.73],["robot",28.81]]},{"s":29.71,"e":30.97,"text":"People moved a handle,","words":[["people",29.71],["moved",30.13],["a",30.48],["handle",30.55]]},{"s":31.27,"e":33.03,"text":"and a robot brushed their palm.","words":[["and",31.27],["a",31.48],["robot",31.55],["brushed",31.9],["their",32.39],["palm",32.75]]},{"s":33.58,"e":35.94,"text":"Moving it themselves? Barely ticklish.","words":[["moving",33.58],["it",34.02],["themselves",34.17],["barely",34.91],["ticklish",35.35]]},{"s":36.49,"e":38.09,"text":"Then the robot added a delay","words":[["then",36.49],["the",36.77],["robot",36.98],["added",37.33],["a",37.68],["delay",37.75]]},{"s":38.39,"e":40.04,"text":"of just two tenths of a second.","words":[["of",38.39],["just",38.53],["two",38.81],["tenths",39.01],["of",39.42],["a",39.56],["second",39.63]]},{"s":40.59,"e":42.53,"text":"Suddenly, it felt more ticklish.","words":[["suddenly",40.59],["it",41.19],["felt",41.34],["more",41.64],["ticklish",41.93]]},{"s":43.08,"e":44.38,"text":"The prediction was off,","words":[["the",43.08],["prediction",43.29],["was",43.97],["off",44.18]]},{"s":44.68,"e":46.25,"text":"so the brain couldn't cancel it.","words":[["so",44.68],["the",44.81],["brain",45.0],["couldnt",45.31],["cancel",45.75],["it",46.12]]},{"s":46.8,"e":48.79,"text":"So your own brain blocks the tickle.","words":[["so",46.8],["your",46.93],["own",47.21],["brain",47.41],["blocks",47.76],["the",48.17],["tickle",48.38]]},{"s":49.34,"e":51.08,"text":"Can you find a way to outsmart it?","words":[["can",49.34],["you",49.54],["find",49.74],["a",50.01],["way",50.08],["to",50.28],["outsmart",50.41],["it",50.95]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); return x ? x[1] : PH[i].s; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const BEATS = [
    { s: PH[0].s, e: PH[2].e, text: 'hook: your brain cancels your own tickles. But how?', screen: 'YOUR BRAIN, brain, hand + TICKLE struck out, red CANCELLED, BUT HOW?' },
    { s: PH[3].s, e: PH[6].e, text: 'every move sends a copy of the order to the cerebellum', screen: 'napkin 2: EVERY MOVE, brain, ORDER arrow to hand, red COPY arrow, red CEREBELLUM' },
    { s: PH[7].s, e: PH[9].e, text: 'it predicts the touch and turns the feeling down', screen: 'napkin 3: IT PREDICTS, thought bubble with hand, FEELING slider, red DOWN, NO SURPRISE = NO TICKLE' },
    { s: PH[10].s, e: PH[13].e, text: 'someone else: no prediction, full blast', screen: 'napkin 4: two stick people, NO PREDICTION, WHERE? WHEN?, red FULL BLAST' },
    { s: PH[14].s, e: PH[17].e, text: 'the robot test: self-moved touch barely tickles', screen: 'napkin 5: THE ROBOT TEST, handle, robot arm, palm, low meter, BARELY TICKLISH' },
    { s: PH[18].s, e: PH[22].e, text: 'a 0.2 s delay makes it more ticklish: prediction off', screen: 'napkin 6: + A DELAY, clock, red 0.2 SEC, tall red meter, MORE TICKLISH!' },
    { s: PH[23].s, e: PH[24].e, text: 'your brain blocks the tickle + question', screen: 'napkin 7: brain, red TICKLE BLOCKER, OUTSMART IT?' },
  ];
  // napkin k slides in during SL[k] (lands at s0 + (s1-s0)*pi/9)
  const SL = [[-1, -0.6], [5.15, 5.55], [12.2, 12.6], [18.9, 19.3], [26.5, 26.9], [35.98, 36.38], [46.28, 46.68]];
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
  // ---------- drawing recipes for this topic ----------
  // side-view brain facing left: wrinkly cerebrum, striped cerebellum low at the back (right), brainstem
  const brain = (x, y, s, a, b, o = {}) => {
    const d = b - a, pts = [];
    for (let i = 0; i <= 60; i++) { const an = Math.PI * 0.62 + i / 60 * Math.PI * 1.86, r = 1 + 0.05 * Math.sin(an * 7); pts.push([x + Math.cos(an) * s * r, y + Math.sin(an) * s * 0.68 * r]); }
    line(pts, a, a + d * 0.4, o);
    line(wave(x - 0.7 * s, y - 0.18 * s, x + 0.55 * s, y - 0.3 * s, 0.07 * s, 3), a + d * 0.4, a + d * 0.55, { w: 5 });
    line(wave(x - 0.65 * s, y + 0.18 * s, x + 0.2 * s, y + 0.1 * s, 0.06 * s, 2.5), a + d * 0.55, a + d * 0.68, { w: 5 });
    line(quad([x + 0.05 * s, y - 0.62 * s], [x - 0.05 * s, y - 0.2 * s], [x + 0.25 * s, y + 0.1 * s]), a + d * 0.68, a + d * 0.78, { w: 5 });
    if (!o.noCb) {
      line(circ(x + 0.62 * s, y + 0.6 * s, 0.34 * s, 0.2 * s, 0, Math.PI * 2, 30), a + d * 0.78, a + d * 0.9, { w: o.w || 7, red: o.redCb });
      for (let k = -1; k <= 1; k++) line([[x + 0.4 * s, y + (0.6 + k * 0.08) * s], [x + 0.86 * s, y + (0.6 + k * 0.08) * s]], a + d * 0.9, a + d * 0.95, { w: 4, red: o.redCb });
    }
    line([[x + 0.2 * s, y + 0.55 * s], [x + 0.26 * s, y + 0.98 * s]], a + d * 0.95, a + d, { w: o.w || 7 });
    line([[x + 0.38 * s, y + 0.72 * s], [x + 0.4 * s, y + 0.98 * s]], a + d * 0.95, a + d, { w: o.w || 7 });
  };
  // open hand, fingers up (s = palm height)
  const hand = (x, y, s, a, b, o = {}) => {
    const d = b - a;
    line(circ(x, y, 0.42 * s, 0.5 * s, -0.25, Math.PI + 0.25, 24), a, a + d * 0.3, o);
    [-0.3, -0.1, 0.1, 0.3].forEach((fx, i) => {
      const L = [0.55, 0.68, 0.64, 0.5][i] * s, X = x + fx * s * 1.1, y0 = y - 0.12 * s;
      line([[X - 0.09 * s, y0], [X - 0.09 * s, y0 - L]].concat(circ(X, y0 - L, 0.09 * s, 0.09 * s, Math.PI, Math.PI * 2, 8)).concat([[X + 0.09 * s, y0]]), a + d * (0.3 + i * 0.13), a + d * (0.43 + i * 0.13), o);
    });
    line([[x - 0.42 * s, y + 0.05 * s], [x - 0.7 * s, y - 0.25 * s], [x - 0.62 * s, y - 0.36 * s], [x - 0.38 * s, y - 0.12 * s]], a + d * 0.82, a + d, o);
  };
  // stick person facing right
  const person = (x, y, s, a, b, o = {}) => {
    const d = b - a;
    line(circ(x, y, 0.2 * s, 0.22 * s), a, a + d * 0.25, o);
    line([[x, y + 0.22 * s], [x, y + 0.95 * s]], a + d * 0.25, a + d * 0.45, o);
    line([[x - 0.3 * s, y + 1.55 * s], [x, y + 0.95 * s], [x + 0.3 * s, y + 1.55 * s]], a + d * 0.45, a + d * 0.65, o);
    if (o.arms !== false) line([[x - 0.4 * s, y + 0.75 * s], [x, y + 0.45 * s], [x + 0.4 * s, y + 0.75 * s]], a + d * 0.65, a + d * 0.85, o);
    line([[x - 0.07 * s, y + 0.07 * s], [x, y + 0.11 * s], [x + 0.07 * s, y + 0.07 * s]], a + d * 0.85, a + d, { w: 5 });
  };
  // a ticklish-ness meter: frame, then hatch fill up to level 0..1
  const meter = (x, y, w, h, lev, a, b, o = {}) => {
    line([[x, y], [x + w, y], [x + w, y + h], [x, y + h], [x, y - 2]], a, a + 0.2, { w: 6 });
    const n = Math.max(1, Math.round(lev * h / 26));
    for (let i = 0; i < n; i++) { const yy = y + h - 14 - i * 26; line([[x + 12, yy], [x + w - 12, yy - 10]], a + 0.2 + (b - a - 0.2) * i / n, a + 0.2 + (b - a - 0.2) * (i + 1) / n, { w: 6, red: o.red }); }
  };
  const wiggles = (x, y, a, o = {}) => { [[-1, -0.6], [-1.1, 0], [-1, 0.6]].forEach(([dx, dy], i) => { const ang = Math.atan2(dy, dx); line(wave(x + Math.cos(ang) * 40, y + Math.sin(ang) * 40, x + Math.cos(ang) * 110, y + Math.sin(ang) * 110, 8, 1.5, 20), a + i * 0.06, a + i * 0.06 + 0.08, { w: 5, red: o.red }); }); };

  // ---- napkin 1: HOOK: your brain cancels your own tickles ----
  G = 0;
  { const a = P(0, 'your') - 0.05; text('YOUR BRAIN', 540, 400, 110, a, P(0, 'brain') + 0.3, { rot: -0.02 }); }
  { const a = P(0, 'cancels') - 0.1; brain(540, 700, 230, a, a + 0.75, { noCb: true }); }
  { const a = P(0, 'own') - 0.1; hand(330, 1150, 210, a, a + 0.45); wiggles(560, 1080, P(0, 'tickles') + 0.05);
    text('TICKLE', 720, 1110, 92, P(0, 'tickles') - 0.1, P(0, 'tickles') + 0.25, { rot: 0.04 });
    line([[580, 1080], [860, 1060]], P(0, 'tickles') + 0.3, P(0, 'tickles') + 0.42, { red: true, w: 10, hit: 'x' }); }
  { const a = P(1, 'before') - 0.1; text('CANCELLED', 540, 1380, 120, a, P(1, 'feel') + 0.15, { red: true, rot: -0.04, hit: 'big' }); }
  { const a = P(2, 'how') - 0.15; text('BUT HOW?', 540, 1540, 100, a, a + 0.4, { rot: -0.02 }); }

  // ---- napkin 2: every move sends a copy to the cerebellum ----
  G = 1;
  { const a = SL[1][1] + 0.05; text('EVERY MOVE', 540, 390, 104, a, P(3, 'move') + 0.2, { rot: -0.02 }); }
  { const a = P(4, 'your') - 0.05; brain(500, 690, 220, a, a + 0.55, { redCb: true }); }
  { const a = P(4, 'sends') - 0.1; hand(330, 1340, 190, a + 0.2, a + 0.6);
    arrow(quad([380, 870], [300, 1050], [330, 1180]), a, a + 0.25, { w: 7 }); text('ORDER', 170, 1040, 60, a + 0.2, a + 0.45, { rot: -0.05 }); }
  { const a = P(4, 'copy') - 0.1; arrow(quad([440, 1020], [700, 1120], [720, 900]), a, a + 0.35, { w: 7, red: true }); text('COPY', 760, 1180, 76, a + 0.05, a + 0.4, { red: true, rot: 0.04 }); }
  { const a = P(5, 'cerebellum') - 0.12; text('CEREBELLUM', 540, 1520, 104, a, a + 0.6, { red: true, rot: -0.02, hit: 'big' });
    line(circ(500 + 0.62 * 220, 690 + 0.6 * 220, 115, 75, -2.4, 4.0), a + 0.1, a + 0.4, { red: true, w: 7 }); }
  { const a = P(6, 'back') - 0.1; arrow([[800, 600], [760, 720], [720, 790]], a, a + 0.3, { w: 6 }); text('back of', 820, 500, 56, a - 0.05, a + 0.2); text('your head', 820, 560, 56, P(6, 'head') - 0.15, P(6, 'head') + 0.15, { hit: 'none' }); }

  // ---- napkin 3: predict, then turn the feeling down ----
  G = 2;
  { const a = SL[2][1] + 0.05; text('IT PREDICTS', 540, 390, 104, a, P(7, 'predicts') + 0.35, { rot: -0.02 }); }
  { const a = P(7, 'what') - 0.1; // thought bubble with the expected touch inside
    line(circ(540, 690, 330, 190, 0, Math.PI * 2, 50), a, a + 0.35, { w: 7 });
    [[300, 900, 34], [250, 965, 22]].forEach(([x, y, r], i) => line(circ(x, y, r, r), a + 0.35 + i * 0.05, a + 0.4 + i * 0.05, { w: 6 }));
    hand(470, 720, 150, P(7, 'touch') - 0.1, P(7, 'touch') + 0.3); wiggles(640, 660, P(7, 'feel') - 0.1);
    text('expected', 700, 820, 60, P(7, 'like') - 0.1, P(7, 'like') + 0.2, { rot: -0.03 }); }
  { const a = P(8, 'turns') - 0.1; // a volume slider sliding down
    line([[250, 1100], [830, 1100]], a, a + 0.2, { w: 7 }); text('FEELING', 540, 1060, 70, a, a + 0.3);
    for (let i = 0; i < 6; i++) line([[260 + i * 110, 1100], [260 + i * 110, 1100 - 20 - i * 18]], a + 0.2 + i * 0.03, a + 0.23 + i * 0.03, { w: 5 });
    arrow([[780, 1150], [520, 1150], [300, 1150]], P(8, 'down') - 0.1, P(8, 'down') + 0.25, { red: true, w: 9 }); text('DOWN', 540, 1240, 90, P(8, 'down') - 0.1, P(8, 'down') + 0.2, { red: true, hit: 'big' }); }
  { const a = P(9, 'no') - 0.1; text('NO SURPRISE', 540, 1420, 96, a, P(9, 'surprise') + 0.3, { rot: -0.02 });
    text('= NO TICKLE', 540, 1540, 96, P(9, 'tickle') - 0.4, P(9, 'tickle') + 0.2, { red: true, rot: -0.02, hit: 'x' }); }

  // ---- napkin 4: someone else: no prediction, full blast ----
  G = 3;
  { const a = SL[3][1] + 0.05; text('SOMEONE ELSE', 540, 390, 100, a, P(10, 'else') + 0.3, { rot: -0.02 }); }
  { const a = P(10, 'tickles') - 0.1; person(330, 560, 300, a - 0.1, a + 0.35); person(760, 560, 300, a + 0.1, a + 0.5, { arms: false });
    line([[330, 560 + 0.45 * 300], [560, 560 + 0.55 * 300], [700, 560 + 0.62 * 300]], a + 0.4, a + 0.6, { w: 7 });
    line([[760, 560 + 0.45 * 300], [660, 560 + 0.15 * 300]], a + 0.6, a + 0.7, { w: 7 }); line([[760, 560 + 0.45 * 300], [860, 560 + 0.15 * 300]], a + 0.7, a + 0.8, { w: 7 });
    text('ha ha!', 880, 520, 60, a + 0.6, a + 0.9, { red: true, rot: 0.1 }); }
  { const a = P(11, 'prediction') - 0.1; text('NO PREDICTION', 540, 1140, 92, a, a + 0.6, { red: true, rot: -0.02 }); }
  { const a = P(12, 'where') - 0.1; text('WHERE?', 330, 1290, 80, a, a + 0.3, { rot: -0.05 }); text('WHEN?', 760, 1290, 80, P(12, 'when') - 0.1, P(12, 'when') + 0.25, { rot: 0.05 }); }
  { const a = P(13, 'full') - 0.12; text('FULL BLAST', 540, 1500, 130, a, a + 0.45, { red: true, rot: -0.03, hit: 'big' });
    [[-1, 0], [1, 0]].forEach(([sd], i) => line([[540 + sd * 400, 1380], [540 + sd * 440, 1340], [540 + sd * 420, 1440], [540 + sd * 470, 1410]], a + 0.45 + i * 0.07, a + 0.52 + i * 0.07, { red: true, w: 6 })); }

  // ---- napkin 5: the robot test ----
  G = 4;
  { const a = SL[4][1] + 0.05; text('THE ROBOT TEST', 540, 390, 96, a, P(14, 'robot') + 0.3, { rot: -0.02 }); }
  { const a = P(15, 'people') - 0.1; // a hand on a handle on the left, cable to the robot arm on the right
    line(circ(230, 760, 60, 60), a, a + 0.15, { w: 7 }); line([[230, 820], [230, 950]], a + 0.15, a + 0.25, { w: 9 });
    hand(230, 630, 140, a + 0.25, a + 0.6); text('HANDLE', 230, 1020, 60, P(15, 'handle') - 0.1, P(15, 'handle') + 0.2); }
  { const a = P(16, 'robot') - 0.12; line([[620, 560], [900, 560], [900, 700], [620, 700], [620, 556]], a, a + 0.2, { w: 7 });
    line(circ(700, 625, 18, 18), a + 0.2, a + 0.25, { w: 6 }); line(circ(820, 625, 18, 18), a + 0.25, a + 0.3, { w: 6 });
    line([[760, 700], [760, 900], [640, 1150]], a + 0.3, a + 0.45, { w: 9 }); line(wave(300, 760, 620, 620, 10, 3), a + 0.45, a + 0.6, { w: 4 });
    text('ROBOT', 760, 520, 60, a, a + 0.25);
    hand(560, 1180, 170, P(16, 'brushed') - 0.15, P(16, 'brushed') + 0.25);
    line(circ(615, 1175, 30, 30), P(16, 'palm') - 0.15, P(16, 'palm') + 0.05, { w: 7, red: true }); text('PALM', 830, 1260, 66, P(16, 'palm') - 0.1, P(16, 'palm') + 0.2, { rot: 0.04 }); }
  { const a = P(17, 'barely') - 0.1; meter(170, 1300, 150, 260, 0.2, a, a + 0.5); text('BARELY', 600, 1420, 100, a, a + 0.4, { rot: -0.03 }); text('TICKLISH', 600, 1530, 90, P(17, 'ticklish') - 0.1, P(17, 'ticklish') + 0.3, { rot: -0.03 }); }

  // ---- napkin 6: add a 0.2 s delay ----
  G = 5;
  { const a = SL[5][1] + 0.05; text('+ A DELAY', 540, 390, 104, a, P(18, 'delay') + 0.3, { rot: -0.02 });
    line(circ(540, 690, 170, 170, -Math.PI / 2, Math.PI * 1.5, 40), P(18, 'robot') - 0.1, P(18, 'added') + 0.1, { w: 8 });
    line([[540, 690], [540, 560]], P(18, 'delay') - 0.1, P(18, 'delay') + 0.05, { w: 8 }); line([[540, 690], [600, 640]], P(18, 'delay') + 0.05, P(18, 'delay') + 0.15, { w: 8, red: true });
    line(circ(540, 690, 140, 140, -Math.PI / 2, -Math.PI / 2 + 0.5, 12), P(19, 'two') - 0.1, P(19, 'second') + 0.1, { w: 12, red: true }); }
  { const a = P(19, 'two') - 0.15; text('0.2 SEC', 540, 1030, 150, a, a + 0.45, { red: true, rot: -0.03, hit: 'big' }); }
  { const a = P(20, 'suddenly') - 0.1; meter(170, 1150, 150, 340, 0.92, a, P(20, 'ticklish') + 0.1, { red: true });
    text('MORE', 620, 1260, 110, P(20, 'more') - 0.1, P(20, 'more') + 0.2, { red: true, rot: -0.03 }); text('TICKLISH!', 620, 1380, 96, P(20, 'ticklish') - 0.1, P(20, 'ticklish') + 0.3, { red: true, rot: -0.03, hit: 'end' }); }
  { const a = P(21, 'prediction') - 0.1; text('prediction: late', 620, 1480, 58, a, P(21, 'off') + 0.1, { rot: -0.02 });
    text("can't cancel", 620, 1560, 58, P(22, 'cancel') - 0.15, P(22, 'cancel') + 0.2, { red: true, rot: -0.02 }); }

  // ---- napkin 7: takeaway + the question ----
  G = 6;
  { const a = P(23, 'own') - 0.1; brain(540, 680, 240, a, a + 0.6, { redCb: true });
    text('TICKLE BLOCKER', 540, 1110, 96, P(23, 'blocks') - 0.1, P(23, 'tickle') + 0.25, { red: true, rot: -0.02, hit: 'big' });
    line([[200, 1140], [540, 1132], [880, 1124]], P(23, 'tickle') + 0.25, P(23, 'tickle') + 0.4, { w: 7 }); }
  { const a = P(24, 'can') - 0.1; text('OUTSMART', 540, 1330, 130, a, P(24, 'outsmart') + 0.3, { rot: -0.03 });
    text('IT?', 540, 1490, 140, P(24, 'it') - 0.1, P(24, 'it') + 0.2, { red: true, rot: -0.02, hit: 'end' }); }

  // ---------- camera: [t, cx, cy, zoom] ----------
  const CAM = [[0, 540, 470, 1.3], [1.0, 540, 520, 1.26], [1.9, 540, 960, 1.0], [5.1, 540, 1000, 1.04],
    [5.6, 540, 960, 1.0], [12.15, 540, 1000, 1.04],
    [12.65, 540, 960, 1.0], [18.85, 540, 1010, 1.04],
    [19.35, 540, 960, 1.0], [22.6, 540, 900, 1.05], [24.8, 540, 1120, 1.05], [26.45, 540, 1100, 1.05],
    [26.95, 540, 960, 1.0], [35.9, 540, 1000, 1.04],
    [36.43, 540, 960, 1.0], [38.3, 540, 900, 1.05], [40.5, 540, 1100, 1.02], [46.2, 540, 1120, 1.02],
    [46.73, 540, 960, 1.0], [DURATION, 540, 1010, 1.05]];
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
    clink(9.4, 1560, -0.7); clink(29.4, 1720, 0.75); clink(43.0, 1600, -0.5);
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
