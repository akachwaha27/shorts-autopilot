// ================= Napkin Sketch, 9:16 1080x1920: "How does a thermos keep coffee hot?" =================
// Short (~52 s). Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A cafe-table pitch in black Sharpie: each part of the story is scrawled on a paper napkin; when the story moves
// on, a fresh napkin is slapped down on top of the pile. Red Sharpie for the key number, the blocks and the leak.
// Ink feathers into the tissue fibres; napkins carry the embossed border, crumples and a coffee ring.
(function () {
  const W0 = 1080, H0 = 1920;
  // ---------- BEATS: one entry per voiceover phrase (phrases.json, Kokoro am_michael) ----------
  const PH = [{"s":0.25,"e":2.13,"text":"How does a thermos keep coffee hot","words":[["how",0.25],["does",0.45],["a",0.72],["thermos",0.79],["keep",1.26],["coffee",1.52],["hot",1.93]]},{"s":2.43,"e":3.84,"text":"for twelve whole hours?","words":[["for",2.43],["twelve",2.65],["whole",3.09],["hours",3.47]]},{"s":4.39,"e":6.03,"text":"Heat escapes in three ways.","words":[["heat",4.39],["escapes",4.69],["in",5.21],["three",5.36],["ways",5.74]]},{"s":6.58,"e":7.93,"text":"It can touch its way out,","words":[["it",6.58],["can",6.73],["touch",6.94],["its",7.29],["way",7.51],["out",7.72]]},{"s":8.23,"e":9.26,"text":"that's conduction.","words":[["thats",8.23],["conduction",8.58]]},{"s":9.81,"e":11.35,"text":"It can ride on moving air,","words":[["it",9.81],["can",9.96],["ride",10.19],["on",10.5],["moving",10.66],["air",11.12]]},{"s":11.65,"e":12.7,"text":"that's convection.","words":[["thats",11.65],["convection",12.0]]},{"s":13.25,"e":15.74,"text":"Or it can glow away as invisible light,","words":[["or",13.25],["it",13.41],["can",13.57],["glow",13.81],["away",14.13],["as",14.45],["invisible",14.61],["light",15.34]]},{"s":16.04,"e":17.21,"text":"called radiation.","words":[["called",16.04],["radiation",16.5]]},{"s":17.76,"e":19.44,"text":"A thermos blocks all three.","words":[["a",17.76],["thermos",17.83],["blocks",18.37],["all",18.83],["three",19.06]]},{"s":19.99,"e":21.42,"text":"It's really two bottles,","words":[["its",19.99],["really",20.22],["two",20.67],["bottles",20.9]]},{"s":21.72,"e":23.03,"text":"one inside the other,","words":[["one",21.72],["inside",21.95],["the",22.41],["other",22.64]]},{"s":23.33,"e":25.59,"text":"and the gap between them is a vacuum.","words":[["and",23.33],["the",23.56],["gap",23.8],["between",24.03],["them",24.58],["is",24.89],["a",25.05],["vacuum",25.12]]},{"s":26.14,"e":27.36,"text":"With no air in there,","words":[["with",26.14],["no",26.45],["air",26.6],["in",26.83],["there",26.98]]},{"s":27.66,"e":29.19,"text":"heat has nothing to touch,","words":[["heat",27.66],["has",27.95],["nothing",28.17],["to",28.68],["touch",28.83]]},{"s":29.49,"e":30.75,"text":"and nothing to ride.","words":[["and",29.49],["nothing",29.73],["to",30.28],["ride",30.43]]},{"s":31.3,"e":32.64,"text":"Then the walls are shiny,","words":[["then",31.3],["the",31.57],["walls",31.77],["are",32.1],["shiny",32.3]]},{"s":32.94,"e":33.87,"text":"like a mirror,","words":[["like",32.94],["a",33.28],["mirror",33.36]]},{"s":34.17,"e":36.48,"text":"so the glow bounces back into your coffee.","words":[["so",34.17],["the",34.31],["glow",34.51],["bounces",34.78],["back",35.26],["into",35.53],["your",35.8],["coffee",36.07]]},{"s":37.03,"e":38.86,"text":"A scientist named James Dewar","words":[["a",37.03],["scientist",37.1],["named",37.76],["james",38.13],["dewar",38.5]]},{"s":39.16,"e":42.22,"text":"invented it in 1892,","words":[["invented",39.16],["it",40.69],["in",41.07],["1892",41.45]]},{"s":42.52,"e":44.62,"text":"to keep liquid gases ice cold.","words":[["to",42.52],["keep",42.69],["liquid",43.04],["gases",43.57],["ice",44.01],["cold",44.27]]},{"s":45.17,"e":46.56,"text":"The only real leak?","words":[["the",45.17],["only",45.45],["real",45.82],["leak",46.19]]},{"s":47.11,"e":47.78,"text":"The lid.","words":[["the",47.11],["lid",47.44]]},{"s":48.33,"e":50.87,"text":"So what's the longest your coffee ever stayed hot?","words":[["so",48.33],["whats",48.45],["the",48.77],["longest",48.96],["your",49.41],["coffee",49.66],["ever",50.05],["stayed",50.3],["hot",50.68]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); return x ? x[1] : PH[i].s; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const BEATS = [
    { s: PH[0].s, e: PH[1].e, text: 'hook: how does a thermos keep coffee hot for 12 hours', screen: 'THERMOS + flask + mug, red 12 HRS' },
    { s: PH[2].s, e: PH[9].e, text: '3 ways heat escapes', screen: 'napkin 2: conduction / convection / radiation, red X on each' },
    { s: PH[10].s, e: PH[15].e, text: 'two bottles + vacuum gap', screen: 'napkin 3: cross-section, VACUUM, Xs across the gap' },
    { s: PH[16].s, e: PH[18].e, text: 'shiny walls = mirror', screen: 'napkin 4: mirrored walls, rays bounce back into the mug' },
    { s: PH[19].s, e: PH[21].e, text: 'James Dewar, 1892', screen: 'napkin 5: scientist, red 1892, flask, ICE COLD' },
    { s: PH[22].s, e: PH[24].e, text: 'the leak is the lid + question', screen: 'napkin 6: thermos, red ring on lid, YOUR RECORD?' },
  ];
  // napkin k slides in during SL[k] (lands at s0 + (s1-s0)*pi/9)
  const SL = [[-1, -0.6], [3.95, 4.35], [19.5, 19.9], [30.8, 31.2], [36.55, 36.95], [44.68, 45.08]];
  const NAP = [[540, 990, 990, 1450, -0.015], [548, 985, 980, 1440, 0.02], [535, 992, 985, 1445, -0.02], [545, 988, 980, 1440, 0.015], [538, 990, 985, 1445, -0.018], [542, 986, 985, 1440, 0.012]];

  // ---------- geometry helpers ----------
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const win = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const circ = (x, y, rx, ry, a0 = 0, a1 = Math.PI * 2, n = 0) => { n = n || Math.max(12, Math.ceil(Math.abs(a1 - a0) * Math.max(rx, ry) / 6)); const o = []; for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; o.push([x + Math.cos(a) * rx, y + Math.sin(a) * ry]); } return o; };
  const quad = (p0, p1, p2, n = 24) => { const o = []; for (let i = 0; i <= n; i++) { const t = i / n, m = 1 - t; o.push([m * m * p0[0] + 2 * m * t * p1[0] + t * t * p2[0], m * m * p0[1] + 2 * m * t * p1[1] + t * t * p2[1]]); } return o; };
  const rrect = (x, y, w, h, r) => {
    const o = [[x + r, y], [x + w - r, y]]; o.push(...circ(x + w - r, y + r, r, r, -Math.PI / 2, 0, 6).slice(1));
    o.push([x + w, y + h - r]); o.push(...circ(x + w - r, y + h - r, r, r, 0, Math.PI / 2, 6).slice(1));
    o.push([x + r, y + h]); o.push(...circ(x + r, y + h - r, r, r, Math.PI / 2, Math.PI, 6).slice(1));
    o.push([x, y + r]); o.push(...circ(x + r, y + r, r, r, Math.PI, Math.PI * 1.5, 6).slice(1)); o.push([x + r + 8, y - 1]); return o;
  };
  const head = (P, len = 30, spread = 0.5) => { const a = P[P.length - 1], b = P[Math.max(0, P.length - 5)], an = Math.atan2(a[1] - b[1], a[0] - b[0]); return [[a[0] - Math.cos(an - spread) * len, a[1] - Math.sin(an - spread) * len], a, [a[0] - Math.cos(an + spread) * len, a[1] - Math.sin(an + spread) * len]]; };
  const wave = (x0, y0, x1, y1, amp, cycles, n = 80) => { const o = [], dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L; for (let i = 0; i <= n; i++) { const u = i / n, s = Math.sin(u * cycles * Math.PI * 2) * amp; o.push([x0 + dx * u + nx * s, y0 + dy * u + ny * s]); } return o; };
  // thermos profile, open at the neck: cx, top of neck, body width, total height, neck width, neck height
  const bottle = (cx, top, w, h, nw, nh = 80, r = 60) => {
    const L = cx - w / 2, R = cx + w / 2, nl = cx - nw / 2, nr = cx + nw / 2, sh = top + nh, bt = sh + 90, bot = top + h;
    const o = [[nl, top], [nl, sh]]; o.push(...quad([nl, sh], [L, sh], [L, bt]).slice(1));
    o.push([L, bot - r]); o.push(...circ(L + r, bot - r, r, r, Math.PI, Math.PI / 2, 10).slice(1));
    o.push([R - r, bot]); o.push(...circ(R - r, bot - r, r, r, Math.PI / 2, 0, 10).slice(1));
    o.push([R, bt]); o.push(...quad([R, bt], [R, sh], [nr, sh]).slice(1)); o.push([nr, top]); return o;
  };

  // ---------- the ink: timed world-space strokes and words (world = the 1080x1920 frame at zoom 1) ----------
  const items = [];
  let G = 0;
  const line = (pts, a, b, o = {}) => items.push({ k: 'line', pts, a, b, w: o.w || 7, red: !!o.red, g: G, hit: o.hit });
  const arrow = (pts, a, b, o = {}) => { line(pts, a, b, o); line(head(pts, o.hl || 30), b, b + 0.06, o); };
  const text = (s, x, y, size, a, b, o = {}) => items.push({ k: 'text', s, x, y, size, a, b, red: !!o.red, align: o.align || 'center', rot: o.rot || 0, g: G, hit: o.hit });
  const X = (cx, cy, r, a, o = {}) => { line([[cx - r, cy - r], [cx + r, cy + r]], a, a + 0.07, { w: 10, red: true, ...o }); line([[cx + r, cy - r], [cx - r, cy + r]], a + 0.08, a + 0.15, { w: 10, red: true }); };
  const mug = (x, y, s, a, b) => {
    const d = (b - a);
    line(rrect(x - s / 2, y - s * 0.42, s, s * 0.84, s * 0.08), a, a + d * 0.65);
    line(circ(x + s / 2, y - s * 0.02, s * 0.2, s * 0.22, -1.45, 1.45), a + d * 0.65, b);
  };
  const steam = (x, y, s, a, b) => { for (let i = 0; i < 3; i++) { const aa = a + (b - a) * i / 3; line(wave(x + (i - 1) * s * 0.28, y, x + (i - 1) * s * 0.28 + 6, y - s * 0.55, s * 0.06, 1.2, 30), aa, aa + (b - a) / 3, { w: 5 }); } };

  // ---- napkin 1: HOOK ----
  G = 0;
  { const a = 0.3; text('THERMOS', 540, 400, 124, a, a + 0.75, { rot: -0.02 }); line([[250, 430], [540, 424], [830, 414]], a + 0.8, a + 0.95, { w: 8 }); }
  { const a = P(0, 'keep') - 0.05;
    line(rrect(290, 480, 200, 80, 16), a, a + 0.12);
    line(bottle(390, 560, 300, 760, 170, 70), a + 0.12, a + 0.48);
    line([[244, 760], [536, 760]], a + 0.48, a + 0.53, { w: 5 }); line([[242, 1180], [538, 1180]], a + 0.53, a + 0.58, { w: 5 }); }
  { const a = P(0, 'coffee'); mug(760, 1170, 190, a + 0.2, a + 0.5); steam(745, 1050, 190, P(0, 'hot') + 0.05, P(0, 'hot') + 0.35); }
  { const a = P(1, 'twelve') - 0.12; text('12 HRS', 540, 1560, 170, a, a + 0.35, { red: true, rot: -0.03, hit: 'big' });
    line(circ(545, 1505, 330, 120, -2.3, 4.2), P(1, 'hours'), P(1, 'hours') + 0.3, { red: true, w: 8 }); }

  // ---- napkin 2: 3 WAYS HEAT ESCAPES ----
  G = 1;
  { const a = P(2, 'heat') - 0.1; text('HEAT ESCAPES', 540, 400, 104, a, a + 0.55); text('3 WAYS', 540, 520, 84, P(2, 'three') - 0.1, P(2, 'three') + 0.25, { red: true, rot: -0.02 }); }
  const RY = [730, 1070, 1410];
  // conduction: a spoon in the mug, heat crawls along it
  { const cy = RY[0], a = P(3, 'touch') - 0.15;
    mug(180, cy, 130, a - 0.5, a - 0.15);
    line([[200, cy - 30], [240, cy - 80], [880, cy - 40]], a - 0.1, a + 0.15, { w: 10 });
    arrow([[330, cy - 130], [600, cy - 115], [820, cy - 100]], a + 0.2, a + 0.45);
    text('ouch!', 905, cy + 30, 52, P(3, 'out') - 0.05, P(3, 'out') + 0.2, { red: true, rot: 0.06 });
    text('CONDUCTION', 560, cy + 120, 72, P(4, 'conduction') - 0.12, P(4, 'conduction') + 0.4); }
  // convection: loops of moving air
  { const cy = RY[1], a = P(5, 'ride') - 0.15, pts = [];
    for (let i = 0; i <= 120; i++) { const u = i / 120; pts.push([300 + 520 * u - 60 * Math.cos(u * 4 * Math.PI) + 60, cy - 40 - 70 * Math.sin(u * 4 * Math.PI) - 40 * u]); }
    mug(180, cy, 130, a - 0.55, a - 0.2);
    arrow(pts, a, a + 0.9);
    text('CONVECTION', 560, cy + 120, 72, P(6, 'convection') - 0.12, P(6, 'convection') + 0.4); }
  // radiation: invisible light waves
  { const cy = RY[2], a = P(7, 'glow') - 0.15;
    mug(180, cy, 130, P(7, 'or'), P(7, 'or') + 0.35);
    [-55, 0, 55].forEach((dy, i) => arrow(wave(280, cy - 40 + dy * 0.4, 860, cy - 40 + dy * 1.4, 18, 5.5), a + i * 0.25, a + i * 0.25 + 0.35, { w: 6 }));
    text('RADIATION', 560, cy + 120, 72, P(8, 'radiation') - 0.12, P(8, 'radiation') + 0.4); }
  { const a = P(9, 'blocks') - 0.1; RY.forEach((cy, i) => X(600, cy - 60, 70, a + i * 0.3, { hit: 'x' })); }

  // ---- napkin 3: TWO BOTTLES + VACUUM ----
  G = 2;
  { const a = P(10, 'two') - 0.12; text('2 BOTTLES', 540, 390, 112, a, a + 0.45, { rot: -0.015 });
    line(rrect(380, 455, 320, 95, 18), a + 0.45, a + 0.6);
    line(bottle(540, 560, 520, 860, 280, 90), a + 0.6, a + 1.1, { w: 8 }); }
  { const a = P(11, 'inside') - 0.12; line(bottle(540, 590, 420, 800, 200, 80), a, a + 0.5, { w: 8 });
    line([[400, 560], [440, 590]], a + 0.5, a + 0.55, { w: 5 }); line([[680, 560], [640, 590]], a + 0.55, a + 0.6, { w: 5 });
    line(wave(345, 820, 735, 820, 9, 3), a + 0.6, a + 0.8, { w: 6 }); steam(540, 780, 200, a + 0.8, a + 1.1); }
  { const a = P(12, 'gap') - 0.1; arrow([[150, 1250], [230, 1210], [298, 1150]], a, a + 0.2, { red: true }); arrow([[930, 1250], [850, 1210], [782, 1150]], a + 0.2, a + 0.4, { red: true });
    const v = P(12, 'vacuum') - 0.15; text('VACUUM', 540, 1590, 120, v, v + 0.4, { red: true, hit: 'big' }); arrow([[540, 1480], [540, 1410]], v + 0.4, v + 0.5, { red: true, hl: 22 }); }
  { const a = P(13, 'no') - 0.1; text('no air', 818, 950, 54, a, a + 0.3, { align: 'left', rot: -0.08 }); }
  { const a = P(14, 'touch') - 0.35; arrow(wave(430, 1030, 200, 1030, 10, 2.5), a, a + 0.3, { w: 6 }); X(305, 1030, 36, P(14, 'touch') - 0.02, { hit: 'x' }); }
  { const a = P(15, 'ride') - 0.35, pts = []; for (let i = 0; i <= 60; i++) { const u = i / 60; pts.push([650 + 240 * u - 40 * Math.cos(u * 2 * Math.PI) + 40, 1300 - 50 * Math.sin(u * 2 * Math.PI) - 30 * u]); }
    arrow(pts, a, a + 0.3, { w: 6 }); X(775, 1270, 36, P(15, 'ride') - 0.02, { hit: 'x' }); }

  // ---- napkin 4: SHINY WALLS = MIRROR ----
  G = 3;
  { const a = P(16, 'walls') - 0.12; text('SHINY WALLS', 540, 400, 104, a, a + 0.5, { rot: -0.02 });
    line([[250, 620], [250, 1450]], P(16, 'shiny') - 0.1, P(16, 'shiny') + 0.1, { w: 9 }); line([[830, 620], [830, 1450]], P(16, 'shiny') + 0.1, P(16, 'shiny') + 0.3, { w: 9 }); }
  { const a = P(17, 'mirror') - 0.12; text('= MIRROR', 540, 530, 84, a, a + 0.35, { red: true });
    for (let i = 0; i < 9; i++) { const y = 660 + i * 92; line([[250, y], [205, y + 40]], a + 0.35 + i * 0.03, a + 0.38 + i * 0.03, { w: 5 }); line([[830, y], [875, y + 40]], a + 0.38 + i * 0.03, a + 0.41 + i * 0.03, { w: 5 }); } }
  { mug(540, 1080, 170, P(16, 'then'), P(16, 'then') + 0.3);
    const a = P(18, 'glow') - 0.1;
    const rays = [[[470, 1000], [262, 830], [470, 1050]], [[610, 1000], [818, 830], [610, 1050]], [[470, 1150], [262, 1320], [470, 1110]], [[610, 1150], [818, 1320], [610, 1110]]];
    rays.forEach((r, i) => { const aa = a + i * 0.32; arrow([r[0], r[1]], aa, aa + 0.14, { red: true, w: 6, hl: 0.01 }); arrow([r[1], r[2]], aa + 0.14, aa + 0.28, { red: true, w: 6 }); }); }

  // ---- napkin 5: JAMES DEWAR, 1892 ----
  G = 4;
  { const a = P(19, 'james') - 0.12; text('JAMES DEWAR', 540, 410, 100, a, a + 0.6, { rot: -0.015 }); }
  { const a = P(19, 'scientist') - 0.1;
    line(circ(280, 800, 72, 76, -1.6, 4.7), a, a + 0.12);
    line(circ(252, 790, 22, 22), a + 0.12, a + 0.16, { w: 6 }); line(circ(308, 790, 22, 22), a + 0.16, a + 0.2, { w: 6 }); line([[274, 790], [286, 790]], a + 0.2, a + 0.22, { w: 6 });
    line([[262, 836], [280, 846], [300, 836]], a + 0.22, a + 0.25, { w: 6 });
    line([[230, 880], [190, 1200], [370, 1200], [330, 880], [230, 880]], a + 0.25, a + 0.45);
    line([[280, 880], [280, 1200]], a + 0.45, a + 0.5, { w: 5 });
    line([[330, 920], [430, 1010], [560, 1060]], a + 0.5, a + 0.58); line([[230, 920], [160, 1060]], a + 0.58, a + 0.64);
    line([[245, 1200], [225, 1360]], a + 0.64, a + 0.68); line([[315, 1200], [340, 1360]], a + 0.68, a + 0.72); }
  { const a = P(20, '1892') - 0.12; text('1892', 760, 820, 180, a, a + 0.35, { red: true, rot: -0.04, hit: 'big' }); }
  { const a = P(21, 'liquid') - 0.15;
    line([[690, 960], [690, 1080]], a, a + 0.05); line([[770, 960], [770, 1080]], a + 0.05, a + 0.1);
    line(circ(730, 1210, 145, 140, -1.3, 4.44), a + 0.1, a + 0.35);
    line(wave(600, 1240, 860, 1240, 8, 3), a + 0.35, a + 0.45, { w: 6 });
    const b = P(21, 'gases'); [0, 1, 2].forEach((i) => { const an = i * Math.PI / 3; line([[730 - Math.cos(an) * 46, 1300 - Math.sin(an) * 46], [730 + Math.cos(an) * 46, 1300 + Math.sin(an) * 46]], b + i * 0.06, b + i * 0.06 + 0.06, { w: 6 }); });
    steam(730, 930, 150, b + 0.2, b + 0.45);
    const c = P(21, 'ice') - 0.12; text('ICE COLD', 730, 1520, 92, c, c + 0.4, { rot: -0.02 }); }

  // ---- napkin 6: THE LEAK + question ----
  G = 5;
  { const a = P(22, 'only') - 0.1; text('ONLY LEAK?', 540, 410, 112, a, a + 0.55, { rot: -0.02 });
    line(rrect(425, 560, 230, 80, 16), a + 0.6, a + 0.72);
    line(bottle(540, 640, 380, 740, 200, 70), a + 0.72, a + 1.1);
    line([[352, 830], [728, 830]], a + 1.1, a + 1.15, { w: 5 }); line([[352, 1250], [728, 1250]], a + 1.15, a + 1.2, { w: 5 }); }
  { const a = P(23, 'lid') - 0.1; line(circ(540, 600, 190, 85, -2.4, 4.1), a, a + 0.25, { red: true, w: 9, hit: 'leak' });
    text('LID!', 790, 640, 90, a + 0.25, a + 0.45, { red: true, align: 'left', rot: -0.05 });
    [470, 540, 610].forEach((x, i) => line(wave(x, 500, x + 8, 445, 6, 1.3, 24), a + 0.45 + i * 0.08, a + 0.53 + i * 0.08, { w: 6, red: true })); }
  { const a = P(24, 'longest') - 0.12; text('YOUR RECORD?', 540, 1540, 104, a, a + 0.65, { rot: -0.02, hit: 'end' });
    line([[200, 1572], [540, 1566], [880, 1556]], a + 0.7, a + 0.85, { w: 8 }); }

  // ---------- camera: [t, cx, cy, zoom] ----------
  const CAM = [[0, 540, 500, 1.5], [1.15, 540, 510, 1.45], [1.95, 540, 960, 1.0], [3.9, 540, 975, 1.03],
    [4.3, 540, 560, 1.1], [6.3, 540, 640, 1.1], [7.0, 540, 760, 1.1], [9.4, 540, 820, 1.1], [10.2, 540, 1060, 1.1], [12.8, 540, 1110, 1.1], [13.6, 540, 1330, 1.1], [17.2, 540, 1340, 1.1], [17.9, 540, 960, 1.0], [19.45, 540, 965, 1.02],
    [19.9, 540, 900, 1.06], [25.2, 540, 960, 1.0], [26.3, 540, 1000, 1.02], [30.7, 540, 1060, 1.08],
    [31.2, 540, 960, 1.0], [36.5, 540, 1000, 1.07],
    [36.95, 540, 960, 1.0], [44.6, 540, 1010, 1.05],
    [45.1, 540, 960, 1.0], [47.0, 540, 940, 1.02], [48.2, 540, 1000, 1.0], [DURATION, 540, 1020, 1.05]];
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
      const RG = [[330, -560, 0.9], [-330, 560, 2.4], [-340, 590, -0.7], [-350, -570, 1.6], [330, 560, 0.3], [340, -560, -1.9]][k];
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
    clink(3.3, 1560, -0.7); clink(27.2, 1720, 0.75); clink(43.0, 1600, -0.5);
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
