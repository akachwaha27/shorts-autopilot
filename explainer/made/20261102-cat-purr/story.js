// ================= Napkin Sketch, 9:16 1080x1920: "How do cats purr?" =================
// Short. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A cafe-table pitch in black Sharpie: a fresh napkin is slapped on the pile when the story moves on. Red Sharpie for
// the twitch count, the moving gap, the pads, the twist. Live 'fn' items draw the opening and closing glottis.
(function () {
  const W0 = 1080, H0 = 1920;
  const PH = [{"s":0.25,"e":1.8,"text":"Your cat's purr is a twitch,","words":[["your",0.25],["cats",0.55],["purr",0.84],["is",1.14],["a",1.28],["twitch",1.36]]},{"s":2.1,"e":3.74,"text":"twenty-five times a second.","words":[["twentyfive",2.1],["times",2.84],["a",3.22],["second",3.29]]},{"s":4.29,"e":5.03,"text":"But how?","words":[["but",4.29],["how",4.66]]},{"s":5.58,"e":7.83,"text":"Deep in the throat sits the voice box,","words":[["deep",5.58],["in",5.88],["the",6.03],["throat",6.26],["sits",6.71],["the",7.01],["voice",7.23],["box",7.6]]},{"s":8.13,"e":10.08,"text":"with a tiny gap called the glottis.","words":[["with",8.13],["a",8.41],["tiny",8.48],["gap",8.76],["called",8.97],["the",9.39],["glottis",9.59]]},{"s":10.63,"e":11.74,"text":"A signal from the brain","words":[["a",10.63],["signal",10.69],["from",11.04],["the",11.27],["brain",11.45]]},{"s":12.04,"e":13.89,"text":"makes the muscles around it twitch,","words":[["makes",12.04],["the",12.36],["muscles",12.55],["around",13.0],["it",13.38],["twitch",13.51]]},{"s":14.19,"e":15.93,"text":"snapping that gap open and shut.","words":[["snapping",14.19],["that",14.73],["gap",15.0],["open",15.2],["and",15.47],["shut",15.67]]},{"s":16.48,"e":17.5,"text":"Air rushes in,","words":[["air",16.48],["rushes",16.76],["in",17.31]]},{"s":17.8,"e":19.63,"text":"and the gap chops it into bursts.","words":[["and",17.8],["the",18.01],["gap",18.22],["chops",18.43],["it",18.79],["into",18.93],["bursts",19.21]]},{"s":20.18,"e":21.15,"text":"Air flows out,","words":[["air",20.18],["flows",20.45],["out",20.89]]},{"s":21.45,"e":22.74,"text":"and it chops it again.","words":[["and",21.45],["it",21.68],["chops",21.83],["it",22.21],["again",22.36]]},{"s":23.29,"e":25.26,"text":"That's why a purr just keeps going.","words":[["thats",23.29],["why",23.66],["a",23.87],["purr",23.95],["just",24.24],["keeps",24.53],["going",24.89]]},{"s":25.81,"e":28.99,"text":"In twenty twenty-three, scientists found another clue:","words":[["in",25.81],["twenty",25.95],["twentythree",26.37],["scientists",27.15],["found",27.86],["another",28.22],["clue",28.71]]},{"s":29.29,"e":31.69,"text":"tiny pads inside the vocal folds,","words":[["tiny",29.29],["pads",29.65],["inside",30.0],["the",30.54],["vocal",30.8],["folds",31.25]]},{"s":31.99,"e":34.73,"text":"which may help a small cat hit such a low note.","words":[["which",31.99],["may",32.37],["help",32.6],["a",32.91],["small",32.98],["cat",33.36],["hit",33.59],["such",33.82],["a",34.12],["low",34.2],["note",34.43]]},{"s":35.28,"e":37.03,"text":"Bobcats and cheetahs purr too,","words":[["bobcats",35.28],["and",35.77],["cheetahs",35.98],["purr",36.54],["too",36.82]]},{"s":37.33,"e":39.46,"text":"but lions and tigers don't seem to.","words":[["but",37.33],["lions",37.57],["and",37.96],["tigers",38.2],["dont",38.67],["seem",38.98],["to",39.3]]},{"s":40.01,"e":42.1,"text":"And a purr doesn't always mean happy.","words":[["and",40.01],["a",40.22],["purr",40.3],["doesnt",40.58],["always",41.02],["mean",41.45],["happy",41.74]]},{"s":42.65,"e":44.22,"text":"Cats also purr at the vet,","words":[["cats",42.65],["also",42.96],["purr",43.28],["at",43.59],["the",43.75],["vet",43.99]]},{"s":44.52,"e":45.67,"text":"or when they're hurt.","words":[["or",44.52],["when",44.66],["theyre",44.95],["hurt",45.38]]},{"s":46.22,"e":48.16,"text":"So when yours starts twitching away,","words":[["so",46.22],["when",46.35],["yours",46.61],["starts",46.93],["twitching",47.32],["away",47.9]]},{"s":48.46,"e":50.32,"text":"do you think it's happy, or worried?","words":[["do",48.46],["you",48.6],["think",48.81],["its",49.15],["happy",49.36],["or",49.7],["worried",49.84]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); if (!x) throw new Error('no word ' + w + ' in ' + i); return x[1]; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const STARTS = [3, 5, 8, 13, 16, 18, 21];
  const BEATS = [
    { s: PH[0].s, e: PH[2].e, text: 'hook: a purr is a twitch, 25 times a second. But how?', screen: 'cat face, PURR = TWITCH, red 25x A SECOND, BUT HOW?' },
    { s: PH[3].s, e: PH[4].e, text: 'voice box and glottis', screen: 'cat side view, circled throat, zoom to tube, GLOTTIS' },
    { s: PH[5].s, e: PH[7].e, text: 'brain signal, muscles twitch, gap opens and shuts', screen: 'brain, zigzag signal, live gap, MUSCLES, OPEN / SHUT' },
    { s: PH[8].s, e: PH[12].e, text: 'air in chopped, air out chopped, purr keeps going', screen: 'tube, IN, OUT, bursts, red NON-STOP' },
    { s: PH[13].s, e: PH[15].e, text: '2023: pads in the vocal folds may help the low note', screen: '2023, folds with red PADS, small cat, LOW NOTE' },
    { s: PH[16].s, e: PH[17].e, text: 'bobcats and cheetahs purr, lions and tigers do not seem to', screen: 'four heads, ticks and red crosses' },
    { s: PH[18].s, e: PH[20].e, text: 'a purr does not always mean happy: vet, hurt', screen: 'HAPPY? with red NOT ALWAYS, AT THE VET, HURT' },
    { s: PH[21].s, e: PH[22].e, text: 'comment question', screen: 'big cat face, HAPPY or WORRIED?' },
  ];
  // napkin k slides in during SL[k], in the pause before its phrase; ink begins after s1
  const SL = [[-1, -0.6]].concat(STARTS.map((i) => [+(PH[i].s - 0.52).toFixed(2), +(PH[i].s - 0.14).toFixed(2)]));
  const NAP = [[540, 990, 990, 1450, -0.015], [548, 985, 980, 1440, 0.02], [535, 992, 985, 1445, -0.02], [545, 988, 980, 1440, 0.015], [538, 990, 985, 1445, -0.018], [542, 986, 985, 1440, 0.012], [540, 990, 985, 1445, -0.014], [544, 988, 985, 1445, 0.016]];

  // ---------- geometry helpers ----------
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const win = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const circ = (x, y, rx, ry, a0 = 0, a1 = Math.PI * 2, n = 0) => { n = n || Math.max(12, Math.ceil(Math.abs(a1 - a0) * Math.max(rx, ry) / 6)); const o = []; for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; o.push([x + Math.cos(a) * rx, y + Math.sin(a) * ry]); } return o; };
  const quad = (p0, p1, p2, n = 24) => { const o = []; for (let i = 0; i <= n; i++) { const t = i / n, m = 1 - t; o.push([m * m * p0[0] + 2 * m * t * p1[0] + t * t * p2[0], m * m * p0[1] + 2 * m * t * p1[1] + t * t * p2[1]]); } return o; };
  const head = (P_, len = 30, spread = 0.5) => { const a = P_[P_.length - 1], b = P_[Math.max(0, P_.length - 5)], an = Math.atan2(a[1] - b[1], a[0] - b[0]); return [[a[0] - Math.cos(an - spread) * len, a[1] - Math.sin(an - spread) * len], a, [a[0] - Math.cos(an + spread) * len, a[1] - Math.sin(an + spread) * len]]; };
  const wave = (x0, y0, x1, y1, amp, cycles, n = 80) => { const o = [], dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L; for (let i = 0; i <= n; i++) { const u = i / n, s = Math.sin(u * cycles * Math.PI * 2) * amp; o.push([x0 + dx * u + nx * s, y0 + dy * u + ny * s]); } return o; };

  // ---------- the ink ----------
  const items = [];
  let G = 0;
  const line = (pts, a, b, o = {}) => items.push({ k: 'line', pts, a, b, w: o.w || 7, red: !!o.red, g: G, hit: o.hit });
  const arrow = (pts, a, b, o = {}) => { line(pts, a, b, o); line(head(pts, o.hl || 30), b, b + 0.06, o); };
  const text = (s, x, y, size, a, b, o = {}) => items.push({ k: 'text', s, x, y, size, a, b, red: !!o.red, align: o.align || 'center', rot: o.rot || 0, g: G, hit: o.hit });
  const live = (a, e, fn) => items.push({ k: 'fn', a, b: a + 0.01, e, fn, g: G });

  // a cat head, front view. o: spots, stripes, mane, happy (closed eyes), worried
  const catHead = (x, y, s, a, b, o = {}) => {
    const d = b - a, q = (u) => a + d * u, st = { w: o.w || 7, red: o.red };
    if (o.mane) { const m = []; for (let i = 0; i <= 44; i++) { const an = i / 44 * Math.PI * 2, r = s * (1.42 + 0.12 * Math.sin(an * 11)); m.push([x + Math.cos(an) * r, y + Math.sin(an) * r * 0.96]); } line(m, q(0), q(0.25), st); }
    line(circ(x, y, s, s * 0.88), q(o.mane ? 0.25 : 0), q(0.45), st);
    if (!o.mane) {
      line([[x - s * 0.86, y - s * 0.42], [x - s * 0.74, y - s * 1.28], [x - s * 0.22, y - s * 0.84]], q(0.45), q(0.53), st);
      line([[x + s * 0.22, y - s * 0.84], [x + s * 0.74, y - s * 1.28], [x + s * 0.86, y - s * 0.42]], q(0.53), q(0.6), st);
    } else { line(circ(x - s * 0.7, y - s * 0.7, s * 0.2, s * 0.2), q(0.45), q(0.53), st); line(circ(x + s * 0.7, y - s * 0.7, s * 0.2, s * 0.2), q(0.53), q(0.6), st); }
    if (o.happy) { line(quad([x - s * 0.5, y - s * 0.12], [x - s * 0.34, y - s * 0.34], [x - s * 0.18, y - s * 0.12]), q(0.6), q(0.66), st); line(quad([x + s * 0.18, y - s * 0.12], [x + s * 0.34, y - s * 0.34], [x + s * 0.5, y - s * 0.12]), q(0.66), q(0.72), st); }
    else { line(circ(x - s * 0.34, y - s * 0.16, s * 0.08, s * 0.1), q(0.6), q(0.66), st); line(circ(x + s * 0.34, y - s * 0.16, s * 0.08, s * 0.1), q(0.66), q(0.72), st); }
    if (o.worried) { line([[x - s * 0.52, y - s * 0.42], [x - s * 0.2, y - s * 0.54]], q(0.72), q(0.75), st); line([[x + s * 0.2, y - s * 0.54], [x + s * 0.52, y - s * 0.42]], q(0.72), q(0.75), st); }
    line([[x - s * 0.1, y + s * 0.1], [x + s * 0.1, y + s * 0.1], [x, y + s * 0.22], [x - s * 0.1, y + s * 0.1]], q(0.72), q(0.76), st);
    if (o.worried) line(quad([x - s * 0.24, y + s * 0.5], [x, y + s * 0.34], [x + s * 0.24, y + s * 0.5]), q(0.76), q(0.8), st);
    else { line(quad([x, y + s * 0.22], [x - s * 0.14, y + s * 0.46], [x - s * 0.3, y + s * 0.34]), q(0.76), q(0.8), st); line(quad([x, y + s * 0.22], [x + s * 0.14, y + s * 0.46], [x + s * 0.3, y + s * 0.34]), q(0.8), q(0.84), st); }
    [[0.1, 0.02], [0.2, 0.26]].forEach(([yy, yo], i) => { line([[x - s * 0.42, y + s * yy], [x - s * 1.12, y + s * yo]], q(0.84 + i * 0.03), q(0.87 + i * 0.03), { w: 4, red: o.red }); line([[x + s * 0.42, y + s * yy], [x + s * 1.12, y + s * yo]], q(0.84 + i * 0.03), q(0.87 + i * 0.03), { w: 4, red: o.red }); });
    if (o.spots) { const r = H.rng(7); for (let i = 0; i < 9; i++) { const an = r.range(0, 6.28), rr = r.range(0.5, 0.8), px = x + Math.cos(an) * s * rr, py = y - Math.abs(Math.sin(an)) * s * rr * 0.8 - s * 0.05; line(circ(px, py, s * 0.035, s * 0.035, 0, 6.3, 8), q(0.9), q(0.95), { w: 6 }); } }
    if (o.tufts) { line([[x - s * 0.74, y - s * 1.28], [x - s * 0.8, y - s * 1.6]], q(0.9), q(0.95), { w: 5 }); line([[x + s * 0.74, y - s * 1.28], [x + s * 0.8, y - s * 1.6]], q(0.95), q(1), { w: 5 }); }
    if (o.stripes) { [-0.2, 0, 0.2].forEach((dx, i) => line([[x + dx * s, y - s * 0.84], [x + dx * s * 0.8, y - s * 0.52]], q(0.88 + i * 0.03), q(0.91 + i * 0.03), { w: 8 })); [-1, 1].forEach((sd) => { line([[x + sd * s * 0.97, y - s * 0.12], [x + sd * s * 0.68, y - s * 0.05]], q(0.96), q(0.99), { w: 8 }); }); }
  };
  const tick = (x, y, a) => line([[x - 44, y], [x - 12, y + 34], [x + 52, y - 42]], a, a + 0.18, { w: 11, hit: 'ok' });
  const cross = (x, y, a) => { line([[x - 42, y - 40], [x + 42, y + 40]], a, a + 0.1, { w: 11, red: true, hit: 'x' }); line([[x + 42, y - 40], [x - 42, y + 40]], a + 0.1, a + 0.2, { w: 11, red: true }); };

  // the throat tube with two vocal folds; open(t) gives the gap 0..1. Red folds, drawn live each frame.
  const walls = (x, y, h, hw, a, b) => { line([[x - hw, y - h / 2], [x - hw, y + h / 2]], a, a + (b - a) / 2, { w: 8 }); line([[x + hw, y - h / 2], [x + hw, y + h / 2]], a + (b - a) / 2, b, { w: 8 }); };
  const folds = (x, y, hw, a, e, open, o = {}) => live(a, e, (c, t) => {
    const g = 8 + open(t) * (hw * 0.72 - 8), T = o.th || 62;
    c.strokeStyle = o.red === false ? INK : RED; c.lineWidth = 9; c.lineJoin = 'round'; c.lineCap = 'round';
    [-1, 1].forEach((sd) => { c.beginPath(); c.moveTo(x + sd * hw, y - T); c.quadraticCurveTo(x + sd * (g + (hw - g) * 0.3), y - T * 0.5, x + sd * g, y); c.quadraticCurveTo(x + sd * (g + (hw - g) * 0.3), y + T * 0.5, x + sd * hw, y + T); c.stroke(); });
  });
  const flutter = (t) => 0.5 + 0.5 * Math.sin(t * Math.PI * 2 * 5);          // shown slower than life so the eye can follow
  // dashes of air travelling through the gap: a steady stream on one side, chopped bursts on the other
  const air = (x, y0, y1, gapY, a, e, wide = 90) => live(a, e, (c, t) => {
    const dir = Math.sign(y1 - y0), L = Math.abs(y1 - y0); c.strokeStyle = INK; c.lineCap = 'round';
    const fade = Math.min(1, (t - a) / 0.2) * Math.min(1, (e - t) / 0.2); if (fade <= 0) return;
    c.save(); c.globalAlpha = fade; c.lineWidth = 7;
    [-1, 0, 1].forEach((col) => {
      const px = x + col * wide * 0.45;
      for (let i = 0; i < 12; i++) {
        const u = ((t - a) * 0.75 + i / 12) % 1, yy = y0 + dir * u * L, after = (yy - gapY) * dir > 0;
        if (!after) { c.beginPath(); c.moveTo(px, yy); c.lineTo(px, yy + dir * 30); c.stroke(); }
        else if (i % 3 === 0) { const bx = x + col * wide * 0.2; [-26, 0, 26].forEach((dy) => { c.beginPath(); c.moveTo(bx, yy + dy); c.lineTo(bx, yy + dy + dir * 10); c.stroke(); }); }
      }
    });
    c.restore();
  });

  // ---- napkin 1: HOOK ----
  G = 0;
  { const a = P(0, 'your') - 0.05; text("YOUR CAT'S PURR", 540, 420, 96, a, P(0, 'purr') + 0.25, { rot: -0.02 }); catHead(540, 740, 215, P(0, 'cats') - 0.1, P(0, 'twitch') - 0.1, { happy: true }); }
  { const a = P(0, 'twitch') - 0.12; text('= A TWITCH', 540, 1120, 112, a, a + 0.45, { red: true, rot: -0.02, hit: 'big' }); }
  { const a = P(1, 'twentyfive') - 0.12; text('25x', 540, 1340, 190, a, a + 0.4, { red: true, rot: -0.03, hit: 'big' }); text('A SECOND', 540, 1460, 92, P(1, 'a') - 0.12, P(1, 'second') + 0.2, { rot: -0.02 }); }
  { const a = P(2, 'but') - 0.12; text('BUT HOW?', 540, 1580, 88, a, a + 0.32, { rot: -0.02 }); }

  // ---- napkin 2: voice box and glottis ----
  G = 1;
  { const a = SL[1][1] + 0.05; text('DEEP IN THE THROAT', 540, 400, 84, a, P(3, 'throat') + 0.3, { rot: -0.02 }); }
  { const a = P(3, 'throat') - 0.05; // cat in profile, facing left
    line(circ(330, 620, 130, 115), a, a + 0.3); line([[225, 560], [240, 450], [300, 510]], a + 0.3, a + 0.36); line([[360, 505], [430, 450], [440, 560]], a + 0.36, a + 0.42);
    line(quad([207, 600], [165, 650], [222, 690]), a + 0.42, a + 0.46); line([[215, 645], [110, 620]], a + 0.46, a + 0.48, { w: 4 }); line([[220, 665], [112, 680]], a + 0.46, a + 0.48, { w: 4 }); line(circ(285, 600, 11, 13, 0, 6.3, 10), a + 0.46, a + 0.5); line(quad([405, 720], [470, 850], [620, 860]), a + 0.5, a + 0.62); line(quad([300, 735], [280, 860], [340, 980]), a + 0.62, a + 0.72); line(quad([620, 860], [760, 880], [760, 980]), a + 0.72, a + 0.8); line(quad([760, 960], [900, 960], [880, 820]), a + 0.8, a + 0.88); }
  { const a = P(3, 'voice') - 0.12; line(circ(325, 790, 62, 58), a, a + 0.25, { red: true, w: 8 }); arrow(quad([390, 800], [560, 780], [680, 690]), a + 0.05, P(3, 'box') + 0.1, { red: true }); text('VOICE BOX', 760, 620, 74, a + 0.1, P(3, 'box') + 0.2, { red: true, rot: 0.03 }); }
  { const a = P(4, 'tiny') - 0.1; walls(540, 1210, 400, 170, a, a + 0.25); folds(540, 1210, 170, a + 0.25, DURATION, (t) => 0.5, {}); }
  { const a = P(4, 'gap') - 0.1; arrow([[860, 1090], [760, 1140], [570, 1205]], a, a + 0.25, { w: 7 }); text('tiny gap', 870, 1060, 64, a, a + 0.25, { rot: 0.03 }); }
  { const a = P(4, 'glottis') - 0.12; text('GLOTTIS', 540, 1530, 124, a, a + 0.4, { red: true, rot: -0.02, hit: 'big' }); }

  // ---- napkin 3: signal, twitch, open and shut ----
  G = 2;
  { const a = P(5, 'signal') - 0.1, x = 300, y = 540, s = 150; // small brain
    const pts = []; for (let i = 0; i <= 50; i++) { const an = i / 50 * Math.PI * 2, r = 1 + 0.06 * Math.sin(an * 8); pts.push([x + Math.cos(an) * s * r, y + Math.sin(an) * s * 0.72 * r]); }
    line(wave(x - 100, y - 30, x + 100, y - 40, 14, 3), P(5, 'brain') - 0.05, P(5, 'brain') + 0.1, { w: 5 }); line(wave(x - 90, y + 40, x + 80, y + 30, 12, 2.5), P(5, 'brain') + 0.1, P(5, 'brain') + 0.2, { w: 5 });
    line(pts, P(5, 'brain') - 0.2, P(5, 'brain') + 0.05); text('BRAIN', 300, 440 - 30, 72, P(5, 'brain') - 0.15, P(5, 'brain') + 0.15, { rot: -0.03 });
    text('SIGNAL', 720, 470, 84, a, P(5, 'from') + 0.05, { red: true, rot: 0.02 });
    const zig = []; for (let i = 0; i <= 12; i++) zig.push([460 + i * 38, 610 + (i % 2 ? -44 : 44) + i * 14]);
    line(zig, P(5, 'from'), P(5, 'brain') + 0.2, { red: true, w: 8 }); }
  { const a = P(6, 'muscles') - 0.1; walls(540, 1080, 420, 200, a - 0.15, a + 0.1); folds(540, 1080, 200, a + 0.1, P(6, 'twitch') - 0.1, (t) => 0.6);
    folds(540, 1080, 200, P(6, 'twitch') - 0.1, P(7, 'shut') + 9, flutter); }
  { const a = P(6, 'muscles') + 0.05; text('MUSCLES', 840, 870, 68, a, a + 0.3, { rot: 0.03 }); arrow(quad([830, 890], [800, 960], [720, 1020]), a + 0.2, a + 0.4, { w: 6 }); text('TWITCH!', 230, 880, 76, P(6, 'twitch') - 0.1, P(6, 'twitch') + 0.15, { red: true, rot: -0.05, hit: 'big' }); }
  { const a = P(7, 'open') - 0.12; text('OPEN', 290, 1430, 110, a, a + 0.22, { rot: -0.03, hit: 'pop' }); text('SHUT', 790, 1430, 110, P(7, 'shut') - 0.12, P(7, 'shut') + 0.1, { red: true, rot: 0.03, hit: 'pop' }); arrow([[430, 1400], [530, 1395], [630, 1400]], P(7, 'and') - 0.05, P(7, 'shut') - 0.1, { w: 7 }); }
  // (a stub so the time-window on the folds above reads clearly)

  // ---- napkin 4: breathing in and out ----
  G = 3;
  { const a = P(8, 'air') - 0.1; walls(540, 860, 720, 130, a - 0.1, a + 0.1); folds(540, 860, 130, a + 0.05, DURATION, flutter);
    text('AIR IN', 205, 560, 76, a, P(8, 'rushes') + 0.1, { rot: -0.03 }); arrow([[205, 600], [205, 720], [350, 720]], a + 0.1, P(8, 'in') + 0.1, { w: 9 });
    air(540, 520, 1200, 860, P(8, 'rushes') - 0.1, P(9, 'bursts') + 0.55); }
  { const a = P(9, 'chops') - 0.12; text('CHOP', 860, 760, 92, a, a + 0.25, { red: true, rot: 0.06, hit: 'pop' }); }
  { const a = P(10, 'air') - 0.1; text('AIR OUT', 865, 1170, 76, a, P(10, 'flows') + 0.1, { rot: 0.03 }); arrow([[865, 1110], [865, 1000], [730, 1000]], a + 0.05, P(10, 'out') + 0.1, { w: 9 });
    air(540, 1200, 520, 860, P(10, 'flows') - 0.1, P(11, 'again') + 0.55); }
  { const a = P(11, 'chops') - 0.12; text('CHOP', 215, 1000, 92, a, a + 0.25, { red: true, rot: -0.06, hit: 'pop' }); }
  { const a = P(12, 'purr') - 0.15; text('IN + OUT =', 540, 1320, 80, a, a + 0.32, { rot: -0.02 }); text('NON-STOP', 540, 1460, 140, P(12, 'keeps') - 0.15, P(12, 'going') + 0.05, { red: true, rot: -0.03, hit: 'big' }); line(wave(170, 1530, 910, 1520, 14, 12, 180), P(12, 'going') - 0.1, P(12, 'going') + 0.32, { w: 7 }); }

  // ---- napkin 5: 2023 pads ----
  G = 4;
  { const a = P(13, 'twenty') - 0.12; text('2023', 540, 480, 170, a, P(13, 'twentythree') + 0.3, { red: true, rot: -0.03, hit: 'big' }); }
  { const a = P(13, 'scientists') - 0.1; text('ANOTHER CLUE', 540, 610, 84, P(13, 'another') - 0.1, P(13, 'clue') + 0.25, { rot: -0.02 }); line(circ(830, 410, 70, 70), a, a + 0.25, { w: 8 }); line([[880, 460], [960, 545]], a + 0.25, a + 0.34, { w: 12 }); }
  { const a = P(14, 'tiny') - 0.1; walls(540, 910, 390, 230, a - 0.1, a + 0.1); folds(540, 910, 230, a + 0.1, DURATION, (t) => 0.42, { red: false, th: 90 }); }
  { const a = P(14, 'pads') - 0.12; [-1, 1].forEach((sd, i) => { const cx = 540 + sd * 150; line(circ(cx, 910, 44, 62, 0, 6.3, 22), a + i * 0.08, a + 0.12 + i * 0.08, { red: true, w: 11 }); line(circ(cx, 910, 22, 34, 0, 6.3, 16), a + 0.1 + i * 0.08, a + 0.2 + i * 0.08, { red: true, w: 11 }); }); text('PADS', 540, 1190, 124, a + 0.02, a + 0.35, { red: true, rot: -0.02, hit: 'big' }); }
  { const a = P(15, 'small') - 0.1; catHead(280, 1400, 90, a, a + 0.55, {}); text('small cat', 280, 1570, 58, P(15, 'cat') - 0.1, P(15, 'cat') + 0.2, { rot: -0.02 }); }
  { const a = P(15, 'low') - 0.15; line(wave(450, 1320, 960, 1320, 44, 3, 90), a, a + 0.5, { red: true, w: 9 }); text('LOW NOTE', 710, 1470, 104, a + 0.05, a + 0.42, { rot: -0.03, hit: 'pop' }); text('(may help)', 710, 1560, 60, P(15, 'note'), P(15, 'note') + 0.25, { rot: -0.02 }); }

  // ---- napkin 6: who can purr ----
  G = 5;
  { const a = SL[5][1] + 0.05; text('WHO PURRS?', 540, 390, 100, a, a + 0.3, { rot: -0.02 }); }
  { const a = P(16, 'bobcats') - 0.15; catHead(290, 640, 125, a, a + 0.5, { tufts: true }); text('BOBCAT', 290, 830, 66, a + 0.2, a + 0.5, { rot: -0.02 }); }
  { const a = P(16, 'cheetahs') - 0.15; catHead(790, 640, 125, a, a + 0.5, { spots: true }); text('CHEETAH', 790, 830, 66, a + 0.2, a + 0.5, { rot: 0.02 }); }
  { const a = P(16, 'purr') - 0.1; tick(450, 520, a); tick(950, 520, a + 0.12); text('PURR', 540, 950, 96, a, a + 0.25, { rot: -0.02 }); }
  { const a = P(17, 'lions') - 0.15; catHead(290, 1240, 105, a, a + 0.45, { mane: true }); text('LION', 290, 1490, 66, a + 0.2, a + 0.42, { rot: -0.02 }); }
  { const a = P(17, 'tigers') - 0.15; catHead(790, 1230, 125, a, a + 0.45, { stripes: true }); text('TIGER', 790, 1490, 66, a + 0.2, a + 0.42, { rot: 0.02 }); }
  { const a = P(17, 'dont') - 0.1; cross(470, 1090, a); cross(970, 1090, a + 0.12); text("DON'T SEEM TO", 540, 1590, 72, a, P(17, 'to') + 0.1, { red: true, rot: -0.01 }); }

  // ---- napkin 7: not always happy ----
  G = 6;
  { const a = P(18, 'purr') - 0.1; catHead(540, 640, 165, a, a + 0.45, { happy: true }); }
  { const a = P(18, 'doesnt') - 0.1; text('PURR =', 300, 980, 96, a, a + 0.2, { rot: -0.02 }); text('HAPPY', 720, 980, 112, P(18, 'mean') - 0.15, P(18, 'happy') + 0.05, { rot: -0.02 });
    text('NOT ALWAYS', 540, 1120, 112, P(18, 'always') - 0.12, P(18, 'always') + 0.35, { red: true, rot: -0.03, hit: 'x' }); }
  { const a = P(19, 'vet') - 0.2; // a medical cross
    line([[230, 1220], [290, 1220], [290, 1280], [350, 1280], [350, 1340], [290, 1340], [290, 1400], [230, 1400], [230, 1340], [170, 1340], [170, 1280], [230, 1280], [230, 1218]], a, a + 0.3, { red: true, w: 8 });
    text('AT THE VET', 270, 1490, 72, a + 0.02, a + 0.3, { rot: -0.03 }); }
  { const a = P(20, 'hurt') - 0.16; // a sticking plaster
    line([[640, 1370], [850, 1240], [900, 1320], [690, 1450], [638, 1368]], a, a + 0.22, { red: true, w: 8 }); line(circ(770, 1345, 9, 9, 0, 6.3, 8), a + 0.22, a + 0.28, { w: 6 }); text('HURT', 760, 1540, 96, a, a + 0.28, { rot: 0.03, hit: 'pop' }); }

  // ---- napkin 8: the question ----
  G = 7;
  { const a = P(21, 'yours') - 0.15; catHead(540, 740, 235, a, P(21, 'away'), {}); [-1, 1].forEach((sd, i) => { [0, 1].forEach((j) => line(wave(540 + sd * (320 + j * 56), 560, 540 + sd * (320 + j * 56), 930, 12, 3, 40), P(21, 'twitching') - 0.1 + i * 0.07, P(21, 'twitching') + 0.1 + i * 0.07, { red: true, w: 6 })); }); }
  { const a = P(22, 'happy') - 0.15; text('HAPPY', 540, 1190, 170, a, a + 0.32, { rot: -0.03, hit: 'pop' }); }
  { const a = P(22, 'or') - 0.08; text('or', 540, 1290, 72, a, a + 0.1, { rot: 0.02 }); }
  { const a = P(22, 'worried') - 0.12; text('WORRIED?', 540, 1460, 160, a, a + 0.34, { red: true, rot: -0.03, hit: 'end' }); }

  // ---------- camera: [t, cx, cy, zoom]: starts tight on the hook, pulls back, slow drift on every napkin ----------
  const CAM = [[0, 540, 620, 1.2], [1.8, 540, 780, 1.1], [2.9, 540, 960, 1.0]];
  SL.slice(1).forEach(([s0, s1], i) => { const nxt = i + 2 < SL.length ? SL[i + 2][0] : DURATION; CAM.push([s0 - 0.01, 540, 985, 1.03], [s1 + 0.06, 540, 960, 1.0]); if (i === SL.length - 2) CAM.push([nxt, 540, 985, 1.035]); });
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
      const RG = [[330, -560, 0.9], [-330, 560, 2.4], [-340, 590, -0.7], [-350, -570, 1.6], [330, 560, 0.3], [340, -560, -1.9], [-330, -580, 2.9], [335, 575, 1.1]][k];
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
      if (it.k === 'fn') continue;
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
      const p = win(t, it.a, it.b); if (p <= 0) continue; if (it.k === 'fn') { if (t < it.e) { any = true; ic.save(); it.fn(ic, t); ic.restore(); } continue; } any = true;
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
    clink(9.1, 1560, -0.7); clink(24.4, 1720, 0.75); clink(38.6, 1600, -0.5);
    // the purr itself under the twitch and breathing napkins: a soft low rumble, marked minor
    [[P(6, 'twitch'), P(7, 'shut') + 0.3], [P(8, 'rushes'), P(12, 'going') + 0.3], [P(21, 'twitching'), DURATION - 0.5]].forEach(([a, b]) => { for (let u = a; u < b; u += 0.04) k.noise(u, { dur: 0.025, color: 'pink', filter: 'lowpass', f: 180, gain: 0.05, a: 0.004, minor: true }); });
    k.play('pop', 0.35, { f: 300, gain: 0.45, minor: true }); // cap off
    for (let i = 1; i < SL.length; i++) napkin(SL[i][0], SL[i][1]);
    items.forEach((it) => {
      if (it.k === 'fn') return;
      const pan = (((it.k === 'line' ? it.pts[0][0] : it.x) - 540) / 540) * 0.3;
      if (it.k === 'text') write(it.s, it.a, it.b, it.size > 100 ? 1.0 : 0.7, pan, it.red);
      else sh(it.a, it.b, it.b - it.a > 0.25 ? 1.0 : 0.75, pan, true, it.red);
      if (it.hit === 'big') { k.play('impact', it.a + 0.05, { gain: 0.9, pan }); k.play('ding', it.a + 0.06, { f: 'D6', gain: 0.35, pan }); }
      if (it.hit === 'x') k.play('error', it.a, { f: 'F3', gain: 0.4, pan });
      if (it.hit === 'leak') { k.play('buzz', it.a, { f: 98, dur: 0.35, gain: 0.5 }); k.play('whoosh', it.a + 0.3, { dur: 0.6, gain: 0.5 }); }
      if (it.hit === 'pop') k.play('pop', it.a + 0.02, { f: 560, gain: 0.5, pan, minor: true });
      if (it.hit === 'ok') k.play('ding', it.a + 0.05, { f: 'A5', gain: 0.3, pan });
      if (it.hit === 'end') k.play('success', it.b, { f: 'G5', gain: 0.6 });
    });
    k.play('click', DURATION - 0.35, { f: 700, gain: 1.0, minor: true }); // cap back on
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
