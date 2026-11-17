// ===== Copperplate Engraving (Lemo-Opuscar style), 16:9 1280x720: "Why do giraffes sleep so little?" =====
// Long video (~3 min), 5 chapters + teaser. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A book of natural-history plates that engrave themselves. Every figure (the giraffe in three poses, the lion, the
// sensor collar, the night dial, the acacia, the cud loop, the zoo fence...) is an original drawing cut by the
// Lemo-Opuscar engraving engine (window.LEMO, MIT, bundled by scripts/lemo_engine.sh). New sheets are laid for chapters,
// tissue guards pass between plates, the camera is a loupe. The only colour: an ochre wash on the dreaming giraffe
// and on the minutes of dream sleep.
(function () {
  const W = 1280, HH = 720;
  const { B, drawSheet, engraveText, writeScript, roundelFrame, leader, PAL } = window.LEMO;
  const { xf, shape, ring, clamp, hatch, outline, stroke, RNG, formTone } = B;

  // ---------- BEATS (phrases.json, Kokoro af_heart, natural mode) ----------
  const PH = [{"s":0.25,"e":2.51,"text":"Giraffes dream for about eight minutes a night.","words":[["giraffes",0.25],["dream",0.71],["for",1.0],["about",1.18],["eight",1.47],["minutes",1.76],["a",2.16],["night",2.22]]},{"s":2.94,"e":4.7,"text":"You'd beat that before your first snooze.","words":[["youd",2.94],["beat",3.16],["that",3.37],["before",3.58],["your",3.9],["first",4.11],["snooze",4.38]]},{"s":5.15,"e":8.22,"text":"And yet the tallest animal on Earth seems totally fine.","words":[["and",5.15],["yet",5.35],["the",5.55],["tallest",5.76],["animal",6.24],["on",6.65],["earth",6.78],["seems",7.13],["totally",7.47],["fine",7.95]]},{"s":8.61,"e":11.01,"text":"So how does a giraffe get by on so little sleep?","words":[["so",8.61],["how",8.74],["does",8.94],["a",9.2],["giraffe",9.26],["get",9.71],["by",9.91],["on",10.04],["so",10.17],["little",10.29],["sleep",10.68]]},{"s":11.46,"e":13.5,"text":"And why does it sleep in such a weird way?","words":[["and",11.46],["why",11.65],["does",11.84],["it",12.1],["sleep",12.22],["in",12.54],["such",12.67],["a",12.93],["weird",12.99],["way",13.31]]},{"s":14.02,"e":16.18,"text":"Chapter one. The tallest short sleeper.","words":[["chapter",14.02],["one",14.49],["the",14.69],["tallest",14.89],["short",15.37],["sleeper",15.7]]},{"s":16.55,"e":19.69,"text":"You'll often hear that giraffes sleep about thirty minutes a day.","words":[["youll",16.55],["often",16.85],["hear",17.14],["that",17.38],["giraffes",17.62],["sleep",18.09],["about",18.39],["thirty",18.69],["minutes",19.04],["a",19.46],["day",19.52]]},{"s":20.16,"e":22.21,"text":"But the truth is a little more interesting.","words":[["but",20.16],["the",20.34],["truth",20.51],["is",20.8],["a",20.92],["little",20.98],["more",21.33],["interesting",21.57]]},{"s":22.62,"e":25.87,"text":"In Namibia, scientists fitted three wild giraffes","words":[["in",22.62],["namibia",22.77],["scientists",23.31],["fitted",24.09],["three",24.55],["wild",24.94],["giraffes",25.25]]},{"s":25.98,"e":27.32,"text":"with tiny motion sensors,","words":[["with",25.98],["tiny",26.23],["motion",26.49],["sensors",26.87]]},{"s":27.76,"e":29.62,"text":"clipped onto the little horns on their heads.","words":[["clipped",27.76],["onto",28.11],["the",28.31],["little",28.46],["horns",28.76],["on",29.01],["their",29.11],["heads",29.36]]},{"s":29.96,"e":31.76,"text":"For months, they logged every move,","words":[["for",29.96],["months",30.16],["they",30.54],["logged",30.8],["every",31.18],["move",31.51]]},{"s":31.92,"e":32.63,"text":"all night long.","words":[["all",31.92],["night",32.1],["long",32.4]]},{"s":33.11,"e":35.75,"text":"The giraffes were resting for around eight hours a night.","words":[["the",33.11],["giraffes",33.28],["were",33.73],["resting",33.95],["for",34.35],["around",34.52],["eight",34.85],["hours",35.14],["a",35.42],["night",35.47]]},{"s":36.16,"e":38.79,"text":"But the deepest kind of sleep, the kind where you dream,","words":[["but",36.16],["the",36.34],["deepest",36.52],["kind",36.94],["of",37.18],["sleep",37.3],["the",37.6],["kind",37.78],["where",38.02],["you",38.32],["dream",38.49]]},{"s":39.11,"e":40.99,"text":"added up to only about eight minutes.","words":[["added",39.11],["up",39.43],["to",39.55],["only",39.68],["about",39.93],["eight",40.24],["minutes",40.55]]},{"s":41.43,"e":43.04,"text":"Usually in two short bursts.","words":[["usually",41.43],["in",41.92],["two",42.06],["short",42.27],["bursts",42.62]]},{"s":43.52,"e":45.46,"text":"Chapter two. Sleeping on your feet.","words":[["chapter",43.52],["two",44.01],["sleeping",44.21],["on",44.77],["your",44.91],["feet",45.19]]},{"s":45.93,"e":48.2,"text":"So what are giraffes doing the rest of the time?","words":[["so",45.93],["what",46.05],["are",46.29],["giraffes",46.47],["doing",46.95],["the",47.25],["rest",47.42],["of",47.66],["the",47.78],["time",47.96]]},{"s":48.74,"e":50.55,"text":"Mostly, they doze standing up.","words":[["mostly",48.74],["they",49.19],["doze",49.5],["standing",49.8],["up",50.4]]},{"s":50.91,"e":53.25,"text":"Eyes half open, ears still twitching,","words":[["eyes",50.91],["half",51.22],["open",51.54],["ears",51.85],["still",52.16],["twitching",52.55]]},{"s":53.55,"e":55.0,"text":"for just a few minutes at a time.","words":[["for",53.55],["just",53.73],["a",53.96],["few",54.02],["minutes",54.19],["at",54.6],["a",54.71],["time",54.77]]},{"s":55.44,"e":56.89,"text":"If a lion creeps closer,","words":[["if",55.44],["a",55.59],["lion",55.67],["creeps",55.97],["closer",56.43]]},{"s":57.27,"e":59.32,"text":"a standing giraffe can run right away.","words":[["a",57.27],["standing",57.34],["giraffe",57.87],["can",58.33],["run",58.53],["right",58.73],["away",59.06]]},{"s":59.67,"e":61.79,"text":"Lying down is a whole different story.","words":[["lying",59.67],["down",60.01],["is",60.29],["a",60.42],["whole",60.49],["different",60.83],["story",61.44]]},{"s":62.26,"e":64.0,"text":"Chapter three. The neck problem.","words":[["chapter",62.26],["three",62.73],["the",63.06],["neck",63.27],["problem",63.53]]},{"s":64.35,"e":67.36,"text":"Picture folding a five-metre animal onto the ground.","words":[["picture",64.35],["folding",64.84],["a",65.33],["fivemetre",65.4],["animal",66.03],["onto",66.45],["the",66.73],["ground",66.94]]},{"s":67.75,"e":70.78,"text":"First the front knees bend, then the back legs fold,","words":[["first",67.75],["the",68.12],["front",68.34],["knees",68.71],["bend",69.08],["then",69.38],["the",69.67],["back",69.89],["legs",70.19],["fold",70.48]]},{"s":71.12,"e":73.31,"text":"Getting back up means rocking that long neck","words":[["getting",71.12],["back",71.53],["up",71.77],["means",71.89],["rocking",72.18],["that",72.6],["long",72.84],["neck",73.07]]},{"s":73.39,"e":74.24,"text":"to swing its weight,","words":[["to",73.39],["swing",73.5],["its",73.76],["weight",73.92]]},{"s":74.61,"e":76.27,"text":"and pushing up one end at a time.","words":[["and",74.61],["pushing",74.81],["up",75.27],["one",75.41],["end",75.6],["at",75.8],["a",75.94],["time",76.0]]},{"s":76.63,"e":78.24,"text":"It only takes a few seconds.","words":[["it",76.63],["only",76.77],["takes",77.07],["a",77.43],["few",77.5],["seconds",77.72]]},{"s":78.62,"e":82.03,"text":"But with a lion nearby, a few seconds is a very long time.","words":[["but",78.62],["with",78.85],["a",79.16],["lion",79.24],["nearby",79.55],["a",80.01],["few",80.09],["seconds",80.32],["is",80.87],["a",81.02],["very",81.1],["long",81.41],["time",81.72]]},{"s":82.45,"e":83.8,"text":"So why lie down at all?","words":[["so",82.45],["why",82.61],["lie",82.84],["down",83.08],["at",83.4],["all",83.56]]},{"s":84.34,"e":86.66,"text":"Because dreaming sleep relaxes the muscles.","words":[["because",84.34],["dreaming",84.78],["sleep",85.28],["relaxes",85.6],["the",86.04],["muscles",86.23]]},{"s":87.08,"e":89.85,"text":"A giraffe can't hold up its heavy neck while it dreams.","words":[["a",87.08],["giraffe",87.14],["cant",87.59],["hold",87.85],["up",88.11],["its",88.24],["heavy",88.43],["neck",88.75],["while",89.01],["it",89.33],["dreams",89.46]]},{"s":90.27,"e":92.98,"text":"So it curls its neck right back, like a swan,","words":[["so",90.27],["it",90.43],["curls",90.59],["its",90.99],["neck",91.23],["right",91.55],["back",91.95],["like",92.27],["a",92.58],["swan",92.66]]},{"s":93.27,"e":94.87,"text":"and rests its head on its own rump.","words":[["and",93.27],["rests",93.45],["its",93.75],["head",93.92],["on",94.16],["its",94.28],["own",94.46],["rump",94.63]]},{"s":95.27,"e":96.89,"text":"A pillow it never has to pack.","words":[["a",95.27],["pillow",95.34],["it",95.76],["never",95.9],["has",96.26],["to",96.47],["pack",96.61]]},{"s":97.3,"e":98.94,"text":"Chapter four. When and where.","words":[["chapter",97.3],["four",97.8],["when",98.08],["and",98.37],["where",98.58]]},{"s":99.34,"e":101.33,"text":"There are two favourite times for a snooze.","words":[["there",99.34],["are",99.63],["two",99.8],["favourite",99.97],["times",100.48],["for",100.76],["a",100.93],["snooze",100.99]]},{"s":101.78,"e":104.79,"text":"A few hours after sunset, around nine to eleven,","words":[["a",101.78],["few",101.86],["hours",102.1],["after",102.49],["sunset",102.89],["around",103.36],["nine",103.84],["to",104.15],["eleven",104.31]]},{"s":105.15,"e":108.34,"text":"and again before sunrise, around three to five in the morning.","words":[["and",105.15],["again",105.34],["before",105.66],["sunrise",106.04],["around",106.49],["three",106.87],["to",107.19],["five",107.32],["in",107.58],["the",107.7],["morning",107.9]]},{"s":108.74,"e":110.12,"text":"Giraffes pick resting spots","words":[["giraffes",108.74],["pick",109.2],["resting",109.43],["spots",109.83]]},{"s":110.18,"e":111.34,"text":"with a clear view,","words":[["with",110.18],["a",110.51],["clear",110.6],["view",111.01]]},{"s":111.66,"e":114.74,"text":"often in a small group, where more eyes can spot trouble.","words":[["often",111.66],["in",112.0],["a",112.14],["small",112.21],["group",112.55],["where",112.89],["more",113.24],["eyes",113.51],["can",113.78],["spot",113.99],["trouble",114.26]]},{"s":115.14,"e":117.93,"text":"And there's one more thing stealing their sleep. Lunch.","words":[["and",115.14],["theres",115.33],["one",115.71],["more",115.9],["thing",116.15],["stealing",116.47],["their",116.98],["sleep",117.3],["lunch",117.61]]},{"s":118.39,"e":120.64,"text":"Giraffes eat leaves, and leaves are tough.","words":[["giraffes",118.39],["eat",118.92],["leaves",119.12],["and",119.51],["leaves",119.71],["are",120.11],["tough",120.31]]},{"s":121.05,"e":123.22,"text":"So like cows, they chew their food twice.","words":[["so",121.05],["like",121.19],["cows",121.46],["they",121.73],["chew",122.0],["their",122.27],["food",122.61],["twice",122.88]]},{"s":123.65,"e":125.96,"text":"They bring it back up and chew it again, as cud.","words":[["they",123.65],["bring",123.91],["it",124.23],["back",124.36],["up",124.61],["and",124.74],["chew",124.93],["it",125.19],["again",125.32],["as",125.64],["cud",125.77]]},{"s":126.42,"e":129.29,"text":"But a giraffe can't drift into deep sleep while it's chewing.","words":[["but",126.42],["a",126.6],["giraffe",126.66],["cant",127.08],["drift",127.32],["into",127.62],["deep",127.86],["sleep",128.1],["while",128.39],["its",128.69],["chewing",128.87]]},{"s":129.64,"e":131.32,"text":"Chapter five. Why so little?","words":[["chapter",129.64],["five",130.17],["why",130.48],["so",130.71],["little",130.86]]},{"s":131.84,"e":134.97,"text":"Big plant-eaters tend to sleep much less than meat-eaters.","words":[["big",131.84],["planteaters",132.04],["tend",132.77],["to",133.04],["sleep",133.17],["much",133.5],["less",133.77],["than",134.04],["meateaters",134.31]]},{"s":135.42,"e":138.73,"text":"A lion can fill up on one meal and nap for most of the day.","words":[["a",135.42],["lion",135.49],["can",135.79],["fill",136.02],["up",136.32],["on",136.47],["one",136.62],["meal",136.85],["and",137.15],["nap",137.38],["for",137.6],["most",137.83],["of",138.13],["the",138.28],["day",138.51]]},{"s":139.14,"e":142.34,"text":"A giraffe has to keep eating for a big part of every day,","words":[["a",139.14],["giraffe",139.21],["has",139.72],["to",139.94],["keep",140.08],["eating",140.38],["for",140.81],["a",141.03],["big",141.1],["part",141.32],["of",141.61],["every",141.76],["day",142.12]]},{"s":142.76,"e":145.06,"text":"and stay alert to the animals that want to eat it.","words":[["and",142.76],["stay",142.94],["alert",143.17],["to",143.47],["the",143.59],["animals",143.76],["that",144.18],["want",144.41],["to",144.65],["eat",144.77],["it",144.95]]},{"s":145.54,"e":147.38,"text":"So it sleeps in tiny slices,","words":[["so",145.54],["it",145.71],["sleeps",145.88],["in",146.38],["tiny",146.55],["slices",146.88]]},{"s":147.78,"e":150.66,"text":"and only lets its guard down for a few minutes of dreams.","words":[["and",147.78],["only",147.97],["lets",148.23],["its",148.49],["guard",148.68],["down",149.0],["for",149.25],["a",149.44],["few",149.51],["minutes",149.7],["of",150.15],["dreams",150.28]]},{"s":151.07,"e":153.12,"text":"And honestly, that's kind of genius.","words":[["and",151.07],["honestly",151.29],["thats",151.88],["kind",152.25],["of",152.54],["genius",152.69]]},{"s":153.53,"e":155.28,"text":"In zoos, where nothing hunts them,","words":[["in",153.53],["zoos",153.66],["where",153.92],["nothing",154.25],["hunts",154.7],["them",155.03]]},{"s":155.68,"e":157.83,"text":"giraffes lie down for much more of the night.","words":[["giraffes",155.68],["lie",156.16],["down",156.34],["for",156.58],["much",156.76],["more",157.0],["of",157.24],["the",157.36],["night",157.54]]},{"s":158.19,"e":159.88,"text":"So the short sleep isn't a flaw.","words":[["so",158.19],["the",158.33],["short",158.55],["sleep",158.9],["isnt",159.25],["a",159.53],["flaw",159.6]]},{"s":160.28,"e":163.05,"text":"It's a survival plan, built for the open plains.","words":[["its",160.28],["a",160.5],["survival",160.58],["plan",161.18],["built",161.48],["for",161.85],["the",162.08],["open",162.3],["plains",162.6]]},{"s":163.43,"e":164.98,"text":"So next time you hit snooze,","words":[["so",163.43],["next",163.57],["time",163.85],["you",164.14],["hit",164.35],["snooze",164.56]]},{"s":165.23,"e":166.14,"text":"think of the giraffe,","words":[["think",165.23],["of",165.5],["the",165.61],["giraffe",165.77]]},{"s":166.42,"e":169.2,"text":"dreaming for eight minutes, with its head on its own rump.","words":[["dreaming",166.42],["for",166.9],["eight",167.09],["minutes",167.39],["with",167.81],["its",168.05],["head",168.23],["on",168.48],["its",168.6],["own",168.78],["rump",168.96]]},{"s":169.63,"e":173.13,"text":"Next time, why do some people get way more freckles than others?","words":[["next",169.63],["time",169.9],["why",170.17],["do",170.38],["some",170.52],["people",170.79],["get",171.2],["way",171.41],["more",171.62],["freckles",171.89],["than",172.44],["others",172.72]]}];
  const BEATS = PH.map((p) => ({ s: p.s, e: p.e, text: p.text }));
  const DURATION = PH[PH.length - 1].e + 2.0;
  window.BEATS = BEATS; window.DURATION = DURATION;
  const S = (i) => PH[i].s;
  const P = (i, w, n = 1) => { let k = 0; for (const q of PH[i].words) if (q[0] === w && ++k === n) return q[1]; return PH[i].s; };
  const ph = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const eo = (x) => 1 - Math.pow(1 - x, 3);
  const lerp = (a, b, k) => a + (b - a) * k;
  const LV = [-0.55, -0.62];
  const OCHRE = '#c8913a', ROSE = '#b8606a';
  try { ['600 40px "Bodoni Moda"', 'italic 500 40px "Bodoni Moda"', '400 40px "Pinyon Script"'].forEach((f) => document.fonts.load(f, 'AaZz09')); } catch (e) { /* render anyway */ }

  // ---------- sheet + paper ----------
  const PLATE = [34, 26, 1246, 694];
  let sheetC = null, paperCv = null;
  function sheet() { if (sheetC) return sheetC; sheetC = document.createElement('canvas'); sheetC.width = W; sheetC.height = HH; drawSheet(sheetC.getContext('2d'), { W, H: HH, plate: PLATE }); return sheetC; }
  function paperC() { if (paperCv) return paperCv; paperCv = document.createElement('canvas'); paperCv.width = W; paperCv.height = HH; drawSheet(paperCv.getContext('2d'), { W, H: HH, plate: [-20, -20, W + 20, HH + 20] }); return paperCv; }
  function occlude(ctx, shapes, a = 1) {
    if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = ctx.createPattern(sheet(), 'no-repeat');
    for (const sh of shapes) ctx.fill(sh.path, 'nonzero'); ctx.restore();
  }

  // ---------- engraving helpers ----------
  function sched(ink, t0, span = 2.4) {
    ink.schedule('ol', t0, t0 + span * 0.55, { conc: 8 });
    ink.schedule('h1', t0 + span * 0.25, t0 + span * 0.8, { conc: 60 });
    ink.schedule('h2', t0 + span * 0.45, t0 + span * 0.95, { conc: 60 });
    ink.schedule('h3', t0 + span * 0.6, t0 + span, { conc: 70 });
    ink.build();
  }
  // any closed shape → an engraved figure (outline, hatching that follows the light, crossing, darks), cut from t0
  function fig(d, f, o = {}, t0 = -9, span = 2.4) {
    const ink = new B.Ink(), seed = o.seed || 1;
    const sh = typeof d === 'string' ? shape(d, f) : d;
    const ft = formTone(sh.polys, { light: LV, base: o.base ?? 0.06 });
    const sp = o.spacing || 3.1, ang = o.angle ?? -0.45, wm = o.wMax || 1.35;
    ink.group('ol'); for (const p of sh.polys) outline(ink, p, { w: o.wOl || 1.8, light: LV, seed });
    ink.group('h1');
    if (o.contour) B.contourHatch(ink, sh.polys, { spacing: sp, tone: ft, wMax: wm, thr: 0.13, seed });
    else hatch(ink, sh.polys, { angle: ang + 1.35, spacing: sp * 0.9, tone: ft, thr: 0.13, wMax: wm, seed, bend: 0.0006 });
    ink.group('h2'); if (!o.light) hatch(ink, sh.polys, { angle: ang, spacing: sp * 1.15, tone: ft, thr: 0.5, wMax: wm * 0.8, seed: seed + 1 });
    ink.group('h3'); if (!o.light) hatch(ink, sh.polys, { angle: ang + 1.1, spacing: sp * 1.3, tone: ft, thr: 0.76, wMax: wm * 0.6, seed: seed + 2 });
    if (o.extra) o.extra(ink, sh);
    sched(ink, t0, span);
    return { ink, sh };
  }
  function lines(list, t0, t1, conc = 4) {
    const ink = new B.Ink(); ink.group('ol');
    for (const [pts, w, taper] of list) stroke(ink, pts, w, { taper: taper ?? 8 });
    ink.schedule('ol', t0, t1, { conc }); ink.build(); return ink;
  }
  const circlePts = (cx, cy, r, n = 64, a0 = 0, a1 = Math.PI * 2) => B.ellipsePts(cx, cy, r, r, 0, n, a0, a1);
  function offsetPts(pts, d) {
    return pts.map((p, i) => {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
      return [p[0] - dy / L * d, p[1] + dx / L * d];
    });
  }
  function smoothPts(pts, n = 8) {   // Catmull-Rom through the points
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
      for (let k = 0; k < n; k++) { const u = k / n, u2 = u * u, u3 = u2 * u;
        out.push([0, 1].map((j) => 0.5 * ((2 * p1[j]) + (-p0[j] + p2[j]) * u + (2 * p0[j] - 5 * p1[j] + 4 * p2[j] - p3[j]) * u2 + (-p0[j] + 3 * p1[j] - 3 * p2[j] + p3[j]) * u3))); }
    }
    out.push(pts[pts.length - 1]); return out;
  }
  const tubeShape = (pts, w) => { const sm = smoothPts(pts, 6), a = offsetPts(sm, w / 2), b = offsetPts(sm, -w / 2).reverse(); return ring([...a, ...b]); };
  function taperShape(pts, w0, w1) {   // a tube whose width runs from w0 to w1, rounded at the thin end
    const sm = smoothPts(pts, 6), n = sm.length, a = [], b = [];
    sm.forEach((p, i) => { const q0 = sm[Math.max(0, i - 1)], q1 = sm[Math.min(n - 1, i + 1)], dx = q1[0] - q0[0], dy = q1[1] - q0[1], L = Math.hypot(dx, dy) || 1, w = lerp(w0, w1, i / (n - 1)) / 2;
      a.push([p[0] - dy / L * w, p[1] + dx / L * w]); b.push([p[0] + dy / L * w, p[1] - dx / L * w]); });
    return ring([...a, ...b.reverse()]);
  }
  function pathLen(pts) { let L = 0; const c = [0]; for (let i = 1; i < pts.length; i++) { L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); c.push(L); } return c; }
  function along(pts, k) {
    const c = pathLen(pts), L = c[c.length - 1] * clamp(k);
    let i = 1; while (i < c.length - 1 && c[i] < L) i++;
    const u = (L - c[i - 1]) / ((c[i] - c[i - 1]) || 1); return [lerp(pts[i - 1][0], pts[i][0], u), lerp(pts[i - 1][1], pts[i][1], u)];
  }
  // hand colouring: transparent wash multiplied over paper, blooming from one point with a ragged front and a tide line
  function bloom(ctx, paths, t, t0, dur, ox, oy, R, col = OCHRE, a = 0.5, seed = 1) {
    const k = eo(ph(t, t0, t0 + dur)); if (k <= 0) return;
    ctx.save(); ctx.beginPath();
    for (let i = 0; i <= 48; i++) { const an = i / 48 * Math.PI * 2, r = R * k * (1 + 0.1 * Math.sin(an * 5 + seed) + 0.06 * Math.sin(an * 11 + seed * 2)); const x = ox + Math.cos(an) * r, y = oy + Math.sin(an) * r; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.clip(); ctx.globalCompositeOperation = 'multiply'; ctx.translate(1.6, 1.1);
    for (const path of [].concat(paths)) { ctx.fillStyle = H.rgba(col, a); ctx.fill(path); ctx.strokeStyle = H.rgba(col, a * 0.8); ctx.lineWidth = 2.2; ctx.stroke(path); }
    ctx.restore();
  }

  // ---------- type ----------
  function head(ctx, t, t0, plate, title, sub, subT) {
    engraveText(ctx, plate, W / 2, 64, { size: 15, weight: 500, track: 0.32, p: ph(t, t0, t0 + 0.4), alpha: 0.85 });
    engraveText(ctx, title, W / 2, 104, { size: 34, weight: 600, track: 0.1, p: ph(t, t0 + 0.1, t0 + 0.8) });
    if (sub) engraveText(ctx, sub, W / 2, 136, { size: 21, italic: true, weight: 500, p: ph(t, subT ?? t0 + 0.4, (subT ?? t0 + 0.4) + 0.5) });
  }
  const big = (ctx, t, str, x, y, t0, size = 70, o = {}) => engraveText(ctx, str, x, y, { size, weight: 600, track: 0.05, p: ph(t, t0, t0 + 0.5), ...o });
  const cap = (ctx, t, str, x, y, t0, size = 24, o = {}) => engraveText(ctx, str, x, y, { size, weight: 600, track: 0.12, p: ph(t, t0, t0 + 0.45), ...o });
  const ital = (ctx, t, str, x, y, t0, size = 22, o = {}) => engraveText(ctx, str, x, y, { size, italic: true, weight: 500, p: ph(t, t0, t0 + 0.45), ...o });
  const note = (ctx, t, str, x, y, t0, size = 40, o = {}) => writeScript(ctx, str, x, y, { size, p: ph(t, t0, t0 + 0.7), ...o });
  function strike(ctx, x0, x1, y, p, w = 5) {
    if (p <= 0) return; ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round';
    const xe = lerp(x0, x1, eo(p)); ctx.beginPath(); ctx.moveTo(x0, y + 4); ctx.quadraticCurveTo((x0 + xe) / 2, y - 6, xe, y - 2); ctx.lineWidth = w; ctx.stroke(); ctx.restore();
  }
  const textW = (c, str, size, track = 0.05, italic = false) => { c.save(); c.font = `${italic ? 'italic ' : ''}600 ${size}px "Bodoni Moda"`; const w = c.measureText(str).width + track * size * (str.length - 1); c.restore(); return w; };
  const pulse = (t, at, up = 0.12, down = 0.35) => (t < at - up || t > at + down) ? 0 : t < at ? (t - at + up) / up : 1 - (t - at) / down;

  // =================== THE GIRAFFE (original drawing, local frame: facing right, hooves on y = 0, ~500 units tall) ===================
  const BODY_D = 'M-110 -222 C-80 -250 0 -262 60 -278 C95 -285 122 -262 124 -232 C120 -198 100 -170 70 -160 C20 -150 -50 -152 -95 -160 C-120 -165 -132 -190 -127 -205 C-124 -215 -117 -220 -110 -222 Z';
  const HEAD_D = 'M-6 -13 C10 -17 38 -13 56 -5 C66 -1 67 9 57 12 C40 15 20 14 4 17 C-8 18 -16 9 -16 0 C-16 -6 -12 -11 -6 -13 Z';
  const POSES = {
    stand: { dy: 0,
      legs: [[[72, -172], [64, -95], [60, -40], [58, 0]], [[-80, -170], [-64, -108], [-70, -48], [-66, 0]], [[98, -178], [94, -95], [92, -40], [94, 0]], [[-102, -178], [-84, -110], [-92, -50], [-90, 0]]],
      legW: [13, 15, 15, 17], hooves: true,
      neck: [[92, -232], [106, -330], [134, -410], [160, -466]], headAt: [160, -470], headRot: 0.5 },
    lie: { dy: 142,
      legs: [[[66, -36], [96, -16], [64, -6], [30, -6]], [[-82, -34], [-40, -12], [6, -8]], [[96, -40], [128, -18], [90, -6], [52, -6]], [[-104, -40], [-62, -12], [-14, -6]]],
      legW: [12, 14, 14, 16], hooves: false,
      neck: [[92, -232], [106, -330], [134, -410], [160, -466]], headAt: [160, -470], headRot: 0.5 },
    kneel: { dy: 0, rot: 0.42, pivot: [-100, -200],
      legs: [[[52, -100], [58, -50], [56, -8], [102, -6]], [[-80, -170], [-64, -108], [-70, -48], [-66, 0]], [[74, -104], [80, -50], [78, -8], [124, -6]], [[-102, -178], [-84, -110], [-92, -50], [-90, 0]]],
      legW: [13, 15, 15, 17], hooves: true,
      neck: [[92, -232], [106, -330], [134, -410], [160, -466]], headAt: [160, -470], headRot: 0.5 },
    curl: { dy: 142,
      legs: [[[66, -36], [96, -16], [64, -6], [30, -6]], [[-82, -34], [-40, -12], [6, -8]], [[96, -40], [128, -18], [90, -6], [52, -6]], [[-104, -40], [-62, -12], [-14, -6]]],
      legW: [12, 14, 14, 16], hooves: false,
      neck: [[92, -238], [108, -308], [74, -366], [6, -378], [-52, -340], [-80, -262]], headAt: [-82, -254], headRot: 2.0 },
  };
  // giraffe(x, y, s, pose, t0, span, o) → all parts in world units, cut in order: far legs, body, neck, head, near legs
  function giraffe(x, y, s, pose, t0 = -9, span = 2.6, o = {}) {
    const PS = POSES[pose], fl = !!o.flip, seed = o.seed || 1, sp = (o.spacing || 3.0);
    const rotL = ([px, py]) => { if (!PS.rot) return [px, py]; const [ox, oy] = PS.pivot, c = Math.cos(PS.rot), sn = Math.sin(PS.rot), dx = px - ox, dy = py - oy; return [ox + c * dx - sn * dy, oy + sn * dx + c * dy]; };
    const g = (p) => { const [px, py] = rotL(p); return [x + (fl ? -px : px) * s, y + (py + PS.dy) * s]; }, g0 = ([px, py]) => [x + (fl ? -px : px) * s, y + py * s];
    const parts = [];
    const legFig = (i, base) => fig(taperShape(PS.legs[i].map(g0), PS.legW[i] * s * 1.1, PS.legW[i] * s * 0.8), null, { contour: true, spacing: sp * 0.85, base, seed: seed + 10 + i,
      extra: PS.hooves ? (ink) => { ink.group('h3'); const e = g0(PS.legs[i][PS.legs[i].length - 1]); stroke(ink, [[e[0] - 7 * s, e[1] - 3 * s], [e[0] + 7 * s, e[1] - 3 * s]], 4 * s, { taper: 2 }); } : null }, t0 + span * 0.25, span * 0.55);
    const far = [legFig(0, 0.32), legFig(1, 0.32)];
    // body + patches (dark lozenge cross-hatching) + tail
    const body = fig(B.ring(B.shape(BODY_D, xf()).polys[0].map(g)), null, { spacing: sp, base: 0.02, seed, light: false, extra: (ink, sh) => {
      patches(ink, sh.polys, s, seed + 3, 27, 12.5);
      ink.group('ol'); const tp = [[-124, -212], [-133, -175], [-136, -140], [-135, -118]].map(([a, b]) => g([a, b - (PS.dy ? 30 : 0) + (PS.dy ? 24 : 0)]));
      stroke(ink, PS.dy ? [g([-124, -212]), g([-150, -196]), g([-170, -186])] : tp, 2.4 * s, { taper: 6 });
      const e = PS.dy ? g([-170, -186]) : tp[3]; ink.group('h3'); for (let k = -2; k <= 2; k++) stroke(ink, [e, [e[0] + k * 2.2 * s + (PS.dy ? -10 * s : 0), e[1] + (PS.dy ? k * 2 * s : 16 * s)]], 2 * s, { taper: 3 });
    } }, t0, span * 0.8);
    // neck with its mane
    const nk = PS.neck.map(g);
    const neck = fig(taperShape(nk, 62 * s, 26 * s), null, { spacing: sp * 0.95, base: 0.04, seed: seed + 4, extra: (ink, sh) => {
      const sm = smoothPts(nk, 6);
      ink.group('h1'); for (let k = 2; k < sm.length - 2; k += 2) { const p = sm[k], q = sm[k + 1], dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy) || 1, w = lerp(62, 26, k / sm.length) / 2 * s, side = fl ? -1 : 1;
        const bx = p[0] + dy / L * w * side, by = p[1] - dx / L * w * side; stroke(ink, [[bx, by], [bx + dy / L * 9 * s * side, by - dx / L * 9 * s * side]], 1.5 * s, { taper: 3 }); }
      patches(ink, sh.polys, s, seed + 7, 21, 9);
    } }, t0 + span * 0.2, span * 0.7);
    // head with ossicones, ear and eye
    const gu = (p) => { const [px, py] = rotL(p); return [x + px * s, y + (py + PS.dy) * s]; }, ha = gu(PS.headAt), hf = xf(ha[0], ha[1], s * 1.25, PS.headRot + (PS.rot || 0));
    const hx = (p) => { const q = hf(p); return fl ? [2 * x - q[0], q[1]] : q; };
    const headF = fig(B.ring(B.shape(HEAD_D, xf()).polys[0].map(hx)), null, { contour: true, spacing: sp * 0.8, base: 0.02, seed: seed + 5, extra: (ink) => {
      ink.group('ol');
      const up = (p) => hx(p);
      stroke(ink, [up([-2, -12]), up([-6, -24]), up([-7, -32])], 3.2 * s, { taper: 2 }); stroke(ink, [up([6, -14]), up([5, -26]), up([5, -33])], 3.2 * s, { taper: 2 });
      ink.dot(...up([-7, -33]), 3 * s); ink.dot(...up([5, -34]), 3 * s);
      stroke(ink, [up([-8, -8]), up([-20, -16]), up([-30, -14]), up([-20, -6]), up([-8, -5])], 1.6 * s, { taper: 2 });
      if (o.eyeShut) stroke(ink, [up([14, -6]), up([19, -3]), up([24, -6])], 1.8 * s, { taper: 2 }); else { stroke(ink, circlePts(...up([19, -5]), 2.8 * s, 14), 1.4 * s, { taper: 1 }); ink.dot(...up([19, -5]), 1.6 * s); }
      stroke(ink, [up([54, 3]), up([58, 5])], 1.6 * s, { taper: 1 });
    } }, t0 + span * 0.45, span * 0.5);
    const near = [legFig(2, 0.12), legFig(3, 0.12)];
    const order = pose === 'curl' ? [...far, body, ...near, neck, headF] : [...far, neck, body, headF, ...near];
    return { order, body, neck, headF, x, y, s, draw(ctx, t, d = {}) { for (const p of order) { occlude(ctx, [p.sh], d.occ ?? 1); p.ink.draw(ctx, t, d); } },
      paths: () => order.map((p) => p.sh.path) };
  }
  // reticulated patches: jittered polygons laid on a grid inside the shape, cut as dark crossed hatching
  function patches(ink, polys, s, seed, step = 24, r = 8.5) {
    const R = RNG(seed), bb = B.bboxOf(polys), list = [];
    for (let y = bb[1] + step * s * 0.5; y < bb[3]; y += step * s) for (let x = bb[0] + ((Math.round(y / (step * s)) % 2) ? step * s * 0.5 : 0); x < bb[2]; x += step * s) {
      const cx = x + (R() - 0.5) * 5 * s, cy = y + (R() - 0.5) * 5 * s, n = 6, a0 = R() * 6.28, pts = [];
      for (let k = 0; k < n; k++) { const a = a0 + k / n * 6.283, rr = r * s * (0.75 + R() * 0.45); pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * 0.85]); }
      if (pts.every((p) => B.inAny(polys, p[0], p[1]))) list.push(pts);
    }
    if (!list.length) return;
    const pr = list.map((pts) => pts);
    ink.group('h2'); for (const p of pr) outline(ink, p, { w: 0.8 * Math.max(0.5, s), light: LV, seed, run: 0 });
    hatch(ink, pr, { angle: 0.7, spacing: 2.0 * Math.max(0.55, s), tone: () => 0.8, thr: 0.13, wMax: 1.1 * Math.max(0.6, s), seed });
    ink.group('h3'); hatch(ink, pr, { angle: -0.7, spacing: 2.6 * Math.max(0.55, s), tone: () => 0.8, thr: 0.13, wMax: 0.8 * Math.max(0.6, s), seed: seed + 1 });
  }

  // =================== THE LION (original drawing: a low, creeping side view, facing right) ===================
  function lion(x, y, s, t0 = -9, span = 2.0, o = {}) {
    const fl = !!o.flip, g = ([px, py]) => [x + (fl ? -px : px) * s, y + py * s];
    const legs = [[[60, -60], [70, -26], [86, 0]], [[-62, -58], [-80, -28], [-70, 0]], [[44, -58], [40, -26], [52, 0]], [[-46, -56], [-56, -26], [-42, 0]]];
    const lf = legs.map((L, i) => fig(taperShape(L.map(g), 22 * s, 15 * s), null, { contour: true, spacing: 2.6, base: i < 2 ? 0.3 : 0.12, seed: 70 + i }, t0 + span * 0.2, span * 0.6));
    const body = fig(B.ring(B.ellipsePts(0, 0, 90, 34, -0.05, 60).map(([a, b]) => g([a, b - 64]))), null, { contour: true, spacing: 2.8, base: 0.1, seed: 75 }, t0, span * 0.7);
    const hd = g([96, -78]);
    const mane = fig(B.ring(Array.from({ length: 40 }, (_, i) => { const a = i / 40 * 6.283, r = 42 * (1 + 0.12 * Math.sin(a * 9)); return g([86 + Math.cos(a) * r, -82 + Math.sin(a) * r * 0.95]); })), null, { spacing: 2.6, base: 0.35, seed: 76, extra: (ink) => {
      ink.group('h1'); const R = RNG(9); for (let k = 0; k < 60; k++) { const a = R() * 6.283, r0 = 18 + R() * 10, r1 = 36 + R() * 10; stroke(ink, [g([86 + Math.cos(a) * r0, -82 + Math.sin(a) * r0]), g([86 + Math.cos(a) * r1, -82 + Math.sin(a) * r1])], 1.2 * s, { taper: 4 }); } } }, t0 + span * 0.2, span * 0.6);
    const face = fig(B.ring(B.ellipsePts(0, 0, 24, 21, 0, 40).map(([a, b]) => g([108 + a, -80 + b]))), null, { contour: true, spacing: 2.2, base: 0.02, seed: 77, extra: (ink) => {
      ink.group('ol'); stroke(ink, [g([112, -88]), g([120, -86])], 2.6 * s, { taper: 2 }); stroke(ink, [g([124, -74]), g([130, -70]), g([126, -66])], 1.8 * s, { taper: 2 }); stroke(ink, [g([116, -64]), g([124, -62])], 1.4 * s, { taper: 2 });
    } }, t0 + span * 0.45, span * 0.5);
    const tail = lines([[smoothPts([g([-88, -70]), g([-130, -60]), g([-150, -80]), g([-160, -96])], 6), 2.6 * s, 6], [[g([-160, -96]), g([-166, -104])], 6 * s, 2]], t0 + span * 0.3, t0 + span * 0.7, 2);
    const order = [lf[0], lf[1], body, lf[2], lf[3], mane, face];
    return { draw(ctx, t, d = {}) { tail.draw(ctx, t, d); for (const p of order) { occlude(ctx, [p.sh]); p.ink.draw(ctx, t, d); } } };
  }

  // =================== SCENES ===================
  const SC = [];
  const add = (a, tr, d) => SC.push({ a, tr, d });
  function camAt(t, keys) {
    let i = 0; while (i < keys.length - 2 && t > keys[i + 1][0]) i++;
    if (keys.length === 1) return { cx: keys[0][1], cy: keys[0][2], z: keys[0][3] };
    const [t0, x0, y0, z0] = keys[i], [t1, x1, y1, z1] = keys[i + 1], u = eio(ph(t, t0, t1)), iz = 1 / z0 + (1 / z1 - 1 / z0) * u;
    return { cx: x0 + (x1 - x0) * u, cy: y0 + (y1 - y0) * u, z: 1 / iz };
  }
  function withCam(c, k, fn) { k = { z: k.z, cx: clamp(k.cx, W / 2 / k.z, W - W / 2 / k.z), cy: clamp(k.cy, HH / 2 / k.z, HH - HH / 2 / k.z) }; c.save(); c.translate(W / 2, HH / 2); c.scale(k.z, k.z); c.translate(-k.cx, -k.cy); c.drawImage(sheet(), 0, 0); fn(k); c.restore(); }
  function card(n, title, a, extra) {
    add(a, 'lay', (c, t) => {
      engraveText(c, 'CHAPTER', W / 2, 250, { size: 18, weight: 500, track: 0.42, p: ph(t, a + 0.35, a + 0.7), alpha: 0.85 });
      big(c, t, n, W / 2, 365, a + 0.45, 112, { track: 0.02 });
      const k = eo(ph(t, a + 0.6, a + 1.2)); if (k > 0) { c.save(); c.strokeStyle = PAL.ink; c.lineCap = 'round'; c.lineWidth = 1.6; c.beginPath(); c.moveTo(W / 2 - 210 * k, 398); c.lineTo(W / 2 + 210 * k, 398); c.stroke(); c.lineWidth = 0.6; c.beginPath(); c.moveTo(W / 2 - 180 * k, 405); c.lineTo(W / 2 + 180 * k, 405); c.stroke(); c.restore(); }
      cap(c, t, title, W / 2, 462, a + 0.7, 40, { track: 0.1 });
      if (extra) extra(c, t);
    });
  }

  // =================== OTHER FIGURES (original drawings; built once, cut in time) ===================
  // --- alarm clock ---
  const CLOCK = (() => {
    const cx = 420, cy = 410;
    const bells = [-1, 1].map((sd, i) => fig(B.ellipse(cx + sd * 92, cy - 118, 46, 30, sd * 0.6), null, { contour: true, spacing: 2.8, base: 0.2, seed: 201 + i }, 2.9, 1.2));
    const legs = [-1, 1].map((sd, i) => fig(taperShape([[cx + sd * 90, cy + 120], [cx + sd * 120, cy + 170]], 18, 10), null, { contour: true, spacing: 2.4, base: 0.3, seed: 203 + i }, 3.0, 1.0));
    const bodyF = fig(B.ellipse(cx, cy, 150, 150), null, { contour: true, spacing: 3.0, base: 0.12, seed: 205 }, 2.95, 1.4);
    const face = fig(B.ellipse(cx, cy, 118, 118), null, { light: true, spacing: 4.4, base: -0.1, seed: 206, extra: (ink) => {
      ink.group('ol'); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283, r0 = i % 3 ? 102 : 92; stroke(ink, [[cx + Math.cos(a) * r0, cy + Math.sin(a) * r0], [cx + Math.cos(a) * 110, cy + Math.sin(a) * 110]], i % 3 ? 1.4 : 3, { taper: 2 }); }
    } }, 3.1, 1.2);
    const knob = fig(tubeShape([[cx, cy - 150], [cx, cy - 178]], 20), null, { contour: true, spacing: 2.4, base: 0.2, seed: 207 }, 3.0, 0.8);
    return { cx, cy, draw(c, t, shake) {
      c.save(); c.translate(cx, cy + 60); c.rotate(shake); c.translate(-cx, -cy - 60);
      for (const p of [...legs, ...bells, knob, bodyF, face]) { occlude(c, [p.sh]); p.ink.draw(c, t); }
      const hand = (a, L, w) => { c.save(); c.strokeStyle = PAL.ink; c.lineCap = 'round'; c.lineWidth = w; c.beginPath(); c.moveTo(cx, cy); c.lineTo(cx + Math.cos(a) * L, cy + Math.sin(a) * L); c.stroke(); c.restore(); };
      const k = ph(t, 3.6, 4.0); if (k > 0) { c.save(); c.globalAlpha = k; hand(-Math.PI / 2 + 0.95, 62, 6); hand(-Math.PI / 2 - 0.2, 92, 3.4); c.fillStyle = PAL.ink; c.beginPath(); c.arc(cx, cy, 7, 0, 7); c.fill(); c.restore(); }
      c.restore();
    } };
  })();
  // --- a person, for scale ---
  function person(x, y, h, t0, span = 1.2) {   // y = feet, h = height in px
    const s = h / 180;
    const hd = fig(B.ellipse(x, y - 166 * s, 12 * s, 14 * s), null, { contour: true, spacing: 2, base: 0.05, seed: 211 }, t0, span);
    const bd = fig(taperShape([[x, y - 150 * s], [x, y - 90 * s]], 34 * s, 26 * s), null, { contour: true, spacing: 2, base: 0.12, seed: 212 }, t0, span);
    const lg = [-1, 1].map((sd, i) => fig(taperShape([[x + sd * 7 * s, y - 92 * s], [x + sd * 9 * s, y]], 12 * s, 9 * s), null, { contour: true, spacing: 2, base: 0.25, seed: 213 + i }, t0, span));
    const ar = [-1, 1].map((sd, i) => fig(taperShape([[x + sd * 18 * s, y - 146 * s], [x + sd * 22 * s, y - 92 * s]], 9 * s, 7 * s), null, { contour: true, spacing: 2, base: 0.25, seed: 215 + i }, t0, span));
    return { draw(c, t) { for (const p of [...lg, ...ar, bd, hd]) { occlude(c, [p.sh]); p.ink.draw(c, t); } } };
  }
  // --- dials: ruled clock faces (24 h or 12 h), with hatched wedges drawn on top ---
  function dialInk(x, y, r, n, t0, t1) {
    const L = [[circlePts(x, y, r, 160), 2.8, 1], [circlePts(x, y, r - 9, 160), 0.9, 1]];
    for (let i = 0; i < n; i++) { const a = -Math.PI / 2 + i / n * Math.PI * 2, r0 = r - (i % (n / 4) ? 24 : 40); L.push([[[x + Math.cos(a) * r0, y + Math.sin(a) * r0], [x + Math.cos(a) * (r - 13), y + Math.sin(a) * (r - 13)]], i % (n / 4) ? 1.2 : 2.6, 2]); }
    return lines(L, t0, t1, 8);
  }
  function wedge(c, x, y, r, a0, a1, dense = 6, col = null, alpha = 1) {   // a hatched sector (angles in hours on a 24 h dial: 0 = top)
    if (a1 <= a0) return; const A0 = -Math.PI / 2 + a0 / 24 * Math.PI * 2, A1 = -Math.PI / 2 + a1 / 24 * Math.PI * 2;
    c.save(); c.globalAlpha *= alpha; c.beginPath(); c.moveTo(x, y); c.arc(x, y, r, A0, A1); c.closePath();
    if (col) { c.save(); c.globalCompositeOperation = 'multiply'; c.fillStyle = H.rgba(col, 0.75); c.fill(); c.restore(); }
    c.clip(); c.strokeStyle = PAL.ink; c.lineWidth = 1.1; for (let k = -2 * r; k < 2 * r; k += dense) { c.beginPath(); c.moveTo(x - r, y + k - r); c.lineTo(x + r, y + k + r); c.stroke(); } c.restore();
  }
  const DIAL24 = { x: 420, y: 400, r: 180 };
  const DIAL_A = dialInk(DIAL24.x, DIAL24.y, DIAL24.r, 24, 16.7, 17.8);
  const DIAL_B = dialInk(DIAL24.x, DIAL24.y, DIAL24.r, 24, 139.3, 140.3);
  const DIAL_C = dialInk(DIAL24.x, DIAL24.y, DIAL24.r, 24, 145.6, 146.6);
  const dialNums = (c, t, t0) => [['MIDNIGHT', 0], ['6 AM', 6], ['NOON', 12], ['6 PM', 18]].forEach(([s, h]) => { const a = -Math.PI / 2 + h / 24 * Math.PI * 2; engraveText(c, s, DIAL24.x + Math.cos(a) * (DIAL24.r - 70), DIAL24.y + Math.sin(a) * (DIAL24.r - 70) + 6, { size: 15, weight: 600, track: 0.1, p: ph(t, t0, t0 + 0.5) }); });
  // --- Namibia (a simplified outline, not to survey accuracy) ---
  const NAM_PTS = [[10, 0], [60, 4], [64, 9], [104, 4], [106, 10], [70, 17], [68, 60], [62, 62], [62, 100], [44, 104], [34, 98], [24, 72], [16, 42], [5, 14]];
  const NAMIBIA = fig(B.ring(NAM_PTS.map(([a, b]) => [150 + a * 3.6, 190 + b * 3.6])), null, { light: true, spacing: 4.2, base: -0.05, seed: 221, extra: (ink) => {
    ink.group('h1'); for (let k = 0; k < 14; k++) { const pts = []; for (let i = 0; i <= 20; i++) { const y = 190 + i * 19; pts.push([150 + 2 * 3.6 + (y - 190) * 0.24 - 10 - k * 7, y]); } stroke(ink, pts, 0.7, { taper: 10 }); }   // sea lines along the coast
  } }, 22.7, 1.6);
  // --- the sensor (a small box with a strap) ---
  const SENSOR = fig('M-14 -9 L14 -9 L14 9 L-14 9 Z', xf(0, 0, 1), { spacing: 1.8, base: 0.35, seed: 231, wOl: 1.6 }, -9, 1);
  function sensorAt(c, x, y, s, rot = 0) { c.save(); c.translate(x, y); c.rotate(rot); c.scale(s, s); occlude(c, [SENSOR.sh]); SENSOR.ink.draw(c, 99, { wScale: 1 / s }); c.restore(); }
  // --- stopwatch ---
  const WATCH = (() => {
    const cx = 420, cy = 420;
    const bodyF = fig(B.ellipse(cx, cy, 160, 160), null, { contour: true, spacing: 3.0, base: 0.12, seed: 241 }, 76.6, 1.3);
    const face = fig(B.ellipse(cx, cy, 128, 128), null, { light: true, spacing: 4.4, base: -0.1, seed: 242, extra: (ink) => { ink.group('ol'); for (let i = 0; i < 60; i++) { const a = i / 60 * 6.283, r0 = i % 5 ? 116 : 104; stroke(ink, [[cx + Math.cos(a) * r0, cy + Math.sin(a) * r0], [cx + Math.cos(a) * 122, cy + Math.sin(a) * 122]], i % 5 ? 0.9 : 2.4, { taper: 2 }); } } }, 76.8, 1.1);
    const crown = fig(tubeShape([[cx, cy - 160], [cx, cy - 196]], 30), null, { contour: true, spacing: 2.4, base: 0.2, seed: 243 }, 76.7, 0.8);
    return { cx, cy, draw(c, t, sec) { for (const p of [crown, bodyF, face]) { occlude(c, [p.sh]); p.ink.draw(c, t); }
      if (t > 77.4) { const a = -Math.PI / 2 + sec / 60 * Math.PI * 2; c.save(); c.strokeStyle = PAL.ink; c.lineCap = 'round'; c.lineWidth = 3; c.beginPath(); c.moveTo(cx - Math.cos(a) * 20, cy - Math.sin(a) * 20); c.lineTo(cx + Math.cos(a) * 110, cy + Math.sin(a) * 110); c.stroke(); c.fillStyle = PAL.ink; c.beginPath(); c.arc(cx, cy, 7, 0, 7); c.fill(); c.restore(); } } };
  })();
  // --- the acacia (umbrella tree) ---
  function acacia(x, y, s, t0, span = 1.8, seed = 251) {
    const trunk = fig(taperShape([[x, y], [x - 6 * s, y - 90 * s], [x + 10 * s, y - 170 * s]], 22 * s, 12 * s), null, { contour: true, spacing: 2.6, base: 0.25, seed }, t0, span * 0.6);
    const br = lines([[smoothPts([[x + 4 * s, y - 120 * s], [x - 50 * s, y - 165 * s], [x - 90 * s, y - 178 * s]], 5), 5 * s, 6], [smoothPts([[x + 8 * s, y - 150 * s], [x + 60 * s, y - 175 * s], [x + 100 * s, y - 182 * s]], 5), 5 * s, 6]], t0 + span * 0.3, t0 + span * 0.6, 2);
    const crown = fig(B.ring(Array.from({ length: 60 }, (_, i) => { const a = i / 60 * 6.283, r = (1 + 0.08 * Math.sin(a * 7 + seed)); return [x + 6 * s + Math.cos(a) * 150 * s * r, y - 196 * s + Math.sin(a) * (Math.sin(a) > 0 ? 22 : 44) * s * r]; })), null, { spacing: 2.8, base: 0.22, seed: seed + 1 }, t0 + span * 0.4, span * 0.6);
    return { draw(c, t, d) { occlude(c, [trunk.sh]); trunk.ink.draw(c, t, d); br.draw(c, t, d); occlude(c, [crown.sh]); crown.ink.draw(c, t, d); } };
  }
  // --- an acacia twig with small leaflets and thorns ---
  const TWIG = (() => {
    const stem = smoothPts([[300, 600], [470, 560], [640, 540], [820, 548], [980, 520]], 8), L = [[stem, 4.2, 10]], leaves = [];
    for (let i = 4; i < stem.length - 2; i += 3) { const p = stem[i], sd = (i / 3) % 2 ? -1 : 1; L.push([[p, [p[0] + 6, p[1] + sd * 22]], 1.6, 3]); leaves.push(B.ellipse(p[0] + 8, p[1] + sd * 30, 8, 14, 0.3 * sd)); }
    const thorns = []; for (let i = 6; i < stem.length; i += 7) { const p = stem[i]; thorns.push([[p, [p[0] - 4, p[1] - 26]], 2.4, 4]); }
    const ink = lines([...L, ...thorns], 118.4, 119.6, 6);
    const lf = leaves.map((e, i) => fig(e, null, { contour: true, spacing: 2, base: 0.1, seed: 260 + i }, 118.8 + i * 0.03, 0.8));
    return { draw(c, t) { ink.draw(c, t); for (const p of lf) { occlude(c, [p.sh]); p.ink.draw(c, t); } } };
  })();
  // --- the sun and the moon (engraved glyphs) ---
  function sunGlyph(c, x, y, r, p, half = false) {
    if (p <= 0) return; c.save(); c.strokeStyle = PAL.ink; c.lineCap = 'round'; c.lineWidth = 2; c.beginPath(); c.arc(x, y, r, half ? Math.PI : 0, half ? Math.PI * 2 * p + Math.PI * (1 - p) : Math.PI * 2 * p); c.stroke();
    for (let i = 0; i < 12; i++) { const a = -Math.PI + i / 11 * Math.PI * (half ? 1 : 2), k = clamp(p * 12 - i); if (k <= 0) continue; c.lineWidth = 1.4; c.beginPath(); c.moveTo(x + Math.cos(a) * (r + 6), y + Math.sin(a) * (r + 6)); c.lineTo(x + Math.cos(a) * (r + 6 + 12 * k), y + Math.sin(a) * (r + 6 + 12 * k)); c.stroke(); }
    if (half) { c.lineWidth = 1.6; c.beginPath(); c.moveTo(x - r - 30, y); c.lineTo(x + r + 30, y); c.stroke(); }
    c.restore();
  }
  function moonGlyph(c, x, y, r, p) {
    if (p <= 0) return; c.save(); c.globalAlpha = clamp(p * 2); c.beginPath(); c.arc(x, y, r, 0, 7); c.arc(x + r * 0.45, y - r * 0.2, r * 0.85, 0, 7, true); c.clip('evenodd');
    c.strokeStyle = PAL.ink; c.lineWidth = 1; for (let k = -r; k < r; k += 3) { c.beginPath(); c.moveTo(x - r, y + k); c.lineTo(x + r, y + k + r * 0.3); c.stroke(); } c.restore();
    c.save(); c.strokeStyle = PAL.ink; c.lineWidth = 2; c.globalAlpha = clamp(p * 2); c.beginPath(); c.arc(x, y, r, 0.9, 5.6); c.stroke(); c.restore();
  }
  // --- zoo fence ---
  const FENCE = (() => { const L = []; for (let i = 0; i < 12; i++) { const x = 110 + i * 96; L.push([[[x, 680], [x, 470]], 4.2, 3]); } [500, 560, 620].forEach((y) => L.push([[[90, y], [1190, y + 4]], 2.2, 4])); return lines(L, 153.6, 154.8, 6); })();
  // --- freckled face (teaser) ---
  const FACE = (() => {
    const cx = 420, cy = 400, T0 = 169.7;
    const face = fig(B.ellipse(cx, cy, 130, 160), null, { light: true, contour: true, spacing: 3.4, base: -0.02, seed: 271 }, T0, 1.4);
    const hair = fig(B.ring(Array.from({ length: 50 }, (_, i) => { const a = Math.PI + i / 49 * Math.PI, r = 150 + 3 * Math.sin(i * 0.9); return [cx + Math.cos(a) * r * 0.98, cy - 40 + Math.sin(a) * r * 0.9]; }).concat([[cx + 120, cy - 40], [cx + 80, cy - 100], [cx - 60, cy - 110], [cx - 120, cy - 40]])), null, { spacing: 2.6, base: 0.3, seed: 272 }, T0 + 0.2, 1.2);
    const R = RNG(5), fr = []; for (let i = 0; i < 46; i++) { const a = R() * 6.283, r = Math.sqrt(R()) * 46, sd = i % 2 ? 1 : -1; fr.push([circlePts(cx + sd * 56 + Math.cos(a) * r, cy + 40 + Math.sin(a) * r * 0.6, 1.4 + R() * 1.6, 8), 2.2, 1]); }
    fr.push([smoothPts([[cx - 70, cy - 10], [cx - 52, cy - 18], [cx - 34, cy - 10]], 4), 3, 3], [smoothPts([[cx + 34, cy - 10], [cx + 52, cy - 18], [cx + 70, cy - 10]], 4), 3, 3], [smoothPts([[cx - 4, cy + 10], [cx - 10, cy + 50], [cx + 8, cy + 54]], 4), 1.8, 3], [smoothPts([[cx - 40, cy + 92], [cx, cy + 108], [cx + 40, cy + 92]], 4), 2.4, 4]);
    const marks = lines(fr, T0 + 0.8, T0 + 2.2, 12);
    return { draw(c, t) { occlude(c, [face.sh]); face.ink.draw(c, t); occlude(c, [hair.sh]); hair.ink.draw(c, t); marks.draw(c, t); } };
  })();

  // ---- giraffes and lions used by the plates (built once, each cut at its own time) ----
  const G_INTRO = giraffe(300, 652, 0.95, 'stand', -1.6, 3.4, { seed: 3 });
  const G_TALL = giraffe(560, 690, 1.08, 'stand', 5.2, 2.2, { seed: 4 });
  const G_Q = giraffe(640, 676, 0.5, 'curl', P(4, 'weird') - 0.3, 1.4, { seed: 5, eyeShut: true });
  const G_CARD1 = giraffe(640, 650, 0.3, 'stand', 14.6, 1.2, { seed: 6 });
  const G_STUDY = [740, 920, 1100].map((x, i) => giraffe(x, 600, 0.5, 'stand', P(8, 'three') - 0.2 + i * 0.25, 1.4, { seed: 8 + i }));
  const G_HEAD = giraffe(-52, 1579, 2.7, 'stand', S(10), 1.6, { seed: 12 });
  const G_FEET = giraffe(430, 684, 1.05, 'stand', S(18), 2.0, { seed: 13 });
  const G_EYE = giraffe(-122, 1599, 2.7, 'stand', S(20) - 0.2, 1.4, { seed: 14, eyeShut: true });
  const G_RUN = giraffe(820, 650, 0.85, 'stand', S(22), 1.6, { seed: 15 });
  const L_CREEP = lion(0, 640, 0.9, S(22) + 0.2, 1.6);
  const G_LIE1 = giraffe(400, 650, 0.95, 'lie', S(24), 1.8, { seed: 16 });
  const G_DOWN = [giraffe(220, 640, 0.6, 'stand', S(26), 1.4, { seed: 17 }), giraffe(610, 640, 0.6, 'kneel', P(27, 'front') - 0.3, 1.4, { seed: 18 }), giraffe(1000, 640, 0.6, 'lie', P(27, 'back') - 0.2, 1.4, { seed: 19 })];
  const G_UP = [giraffe(250, 640, 0.6, 'lie', S(28), 1.4, { seed: 20 }), giraffe(640, 640, 0.6, 'kneel', P(30, 'pushing') - 0.3, 1.2, { seed: 21 }), giraffe(1020, 640, 0.6, 'stand', P(30, 'time') - 0.3, 1.2, { seed: 22 })];
  const L_WAIT = lion(980, 640, 0.85, S(32), 1.4, { flip: true });
  const G_UPRIGHT = giraffe(520, 676, 1.18, 'lie', S(36) - 1.2, 1.6, { seed: 24 });
  const G_CURL = giraffe(520, 676, 1.18, 'curl', P(36, 'curls') - 0.4, 1.8, { seed: 25, eyeShut: true });
  const G_VIEW = [giraffe(300, 560, 0.42, 'stand', S(43), 1.4, { seed: 26 }), giraffe(470, 580, 0.42, 'curl', S(43) + 0.3, 1.4, { seed: 27, eyeShut: true }), giraffe(640, 566, 0.42, 'stand', S(43) + 0.5, 1.4, { seed: 28, flip: true })];
  const TREE_V = acacia(980, 580, 1.0, S(43) + 0.2, 1.8);
  const G_CUD = giraffe(400, 684, 1.05, 'stand', S(48), 1.8, { seed: 29 });
  const L_MEAT = lion(330, 440, 0.95, S(52) + 0.2, 1.4);
  const G_PLANT = giraffe(930, 450, 0.52, 'stand', S(52) + 0.4, 1.4, { seed: 30 });
  const G_GENIUS = giraffe(420, 660, 0.95, 'curl', S(58) - 0.6, 1.4, { seed: 31, eyeShut: true });
  const G_ZOO = giraffe(560, 650, 0.85, 'lie', S(59), 1.4, { seed: 32 });
  const G_PLAN = giraffe(520, 650, 0.48, 'stand', P(62, 'survival'), 1.2, { seed: 33 });
  const TREE_P = acacia(780, 650, 0.62, P(62, 'survival') + 0.2, 1.2, 253);
  const G_FINAL = giraffe(470, 660, 1.0, 'curl', S(63) - 0.6, 1.6, { seed: 34, eyeShut: true });

  // ---- intro ----
  add(0, 'none', (c, t) => {
    head(c, t, -0.5, 'A BOOK OF CURIOUS PLATES', 'ON THE SLEEP OF GIRAFFES');
    G_INTRO.draw(c, t);
    big(c, t, '8 MINUTES', 920, 360, P(0, 'eight') - 0.15, 84);
    note(c, t, 'of dreams, a night', 920, 450, P(0, 'night') - 0.2, 54);
    ital(c, t, 'Giraffa camelopardalis', 300, 684, 0.6, 20);
  });
  add(S(1), 'tissue', (c, t) => {
    head(c, t, S(1), 'FOR COMPARISON', 'one press of snooze');
    const sh = 0.07 * Math.sin((t - P(1, 'snooze')) * 40) * Math.max(0, 1 - Math.abs(t - P(1, 'snooze') - 0.3) / 0.6);
    CLOCK.draw(c, t, sh);
    big(c, t, 'ONE SNOOZE', 920, 340, P(1, 'beat') - 0.1, 64);
    note(c, t, 'and you have already won', 920, 430, P(1, 'snooze'), 40);
  });
  add(S(2), 'tissue', (c, t) => {
    withCam(c, camAt(t, [[S(2), 640, 380, 1.12], [S(3), 640, 360, 1.0]]), () => {
      G_TALL.draw(c, t);
      const top = 690 - 500 * 1.08, k = eo(ph(t, S(2) + 0.5, S(2) + 1.3));
      if (k > 0) { c.save(); c.strokeStyle = PAL.ink; c.lineCap = 'round'; c.lineWidth = 1.6; c.beginPath(); c.moveTo(830, 690); c.lineTo(830, lerp(690, top, k)); c.stroke();
        for (let i = 0; i <= 5; i++) { const y = 690 - i * (690 - top) / 5; if (y < lerp(690, top, k) - 1) continue; c.lineWidth = i % 5 ? 1 : 2; c.beginPath(); c.moveTo(822, y); c.lineTo(838, y); c.stroke(); } c.restore(); }
      person(900, 690, (690 - top) * 1.75 / 5.0, S(2) + 1.0).draw(c, t);
    });
    big(c, t, '≈ 5 M', 1060, 300, P(2, 'tallest') - 0.1, 62);
    ital(c, t, 'the tallest animal on Earth', 1060, 345, P(2, 'earth') - 0.2, 22);
    note(c, t, 'and totally fine', 1060, 450, P(2, 'fine') - 0.3, 42);
  });
  add(S(3), 'tissue', (c, t) => {
    head(c, t, S(3), 'TWO QUESTIONS FOR THE LOUPE');
    big(c, t, 'HOW SO LITTLE SLEEP?', W / 2, 280, P(3, 'little') - 0.3, 56);
    big(c, t, 'AND WHY SO WEIRD?', W / 2, 380, P(4, 'weird') - 0.3, 56);
    G_Q.draw(c, t);
  });

  // ---- chapter I: the tallest short sleeper ----
  card('I', 'THE TALLEST SHORT SLEEPER', S(5), (c, t) => { G_CARD1.draw(c, t); });
  add(S(6), 'tissue', (c, t) => {
    head(c, t, S(6), 'PLATE  I', 'THE FAMOUS NUMBER');
    DIAL_A.draw(c, t); dialNums(c, t, 17.2);
    wedge(c, DIAL24.x, DIAL24.y, DIAL24.r - 14, 0, 0.5 * eio(ph(t, P(6, 'thirty') - 0.1, P(6, 'thirty') + 0.6)), 5);
    big(c, t, '30 MIN A DAY?', 930, 320, P(6, 'thirty') - 0.15, 60);
    ital(c, t, 'the figure everyone repeats', 930, 368, P(6, 'thirty') + 0.6, 22);
    note(c, t, 'the truth is', 930, 480, S(7) + 0.2, 46); note(c, t, 'more interesting', 930, 545, P(7, 'interesting') - 0.2, 46);
  });
  add(S(8), 'tissue', (c, t) => {
    head(c, t, S(8), 'PLATE  II', 'A STUDY IN NAMIBIA');
    occlude(c, [NAMIBIA.sh]); NAMIBIA.ink.draw(c, t);
    const dk = ph(t, P(8, 'namibia'), P(8, 'namibia') + 0.4); if (dk > 0) { c.save(); c.fillStyle = PAL.ink; c.beginPath(); c.arc(150 + 42 * 3.6, 190 + 56 * 3.6, 6 * dk, 0, 7); c.fill(); c.restore(); roundelFrame(c, 150 + 42 * 3.6, 190 + 56 * 3.6, 22, { p: dk, w: 1.6 }); }
    cap(c, t, 'NAMIBIA', 290, 620, P(8, 'namibia'), 24); ital(c, t, 'a ranch near Windhoek', 290, 652, P(8, 'namibia') + 0.5, 20);
    G_STUDY.forEach((g) => g.draw(c, t));
    cap(c, t, 'III WILD GIRAFFES', 960, 640, P(8, 'wild') - 0.1, 24);
    const sk = ph(t, P(9, 'sensors') - 0.1, P(9, 'sensors') + 0.3);
    if (sk > 0) G_STUDY.forEach((g, i) => { const sx = g.x + 84, sy = 353; c.save(); c.globalAlpha = sk; sensorAt(c, sx, sy, 0.45); c.restore(); });
    ital(c, t, 'tiny motion sensors', 960, 176, P(9, 'sensors') - 0.1, 24);
  });
  add(S(10), 'tissue', (c, t) => {
    const R = { x: 430, y: 390, r: 240 };
    c.save(); c.beginPath(); c.arc(R.x, R.y, R.r, 0, 7); c.clip(); c.fillStyle = c.createPattern(sheet(), 'no-repeat'); c.fill();
    c.strokeStyle = 'rgba(28,21,16,0.14)'; c.lineWidth = 1; for (let yy = R.y - R.r; yy < R.y + R.r; yy += 11) { c.beginPath(); c.moveTo(R.x - R.r, yy); c.lineTo(R.x + R.r, yy); c.stroke(); }
    G_HEAD.draw(c, t);
    const sk = ph(t, P(10, 'clipped') - 0.1, P(10, 'clipped') + 0.4), sx = 404, sy = 238;
    if (sk > 0) { c.save(); c.globalAlpha = sk; sensorAt(c, sx, sy, 1.6, 0.5); c.restore(); }
    c.restore();
    roundelFrame(c, R.x, R.y, R.r, { p: ph(t, S(10), S(10) + 0.7), w: 3.2 });
    leader(c, [sx + 24, sy - 4], [850, 250], { p: ph(t, P(10, 'clipped'), P(10, 'clipped') + 0.5), w: 1.2, num: '1', numP: ph(t, P(10, 'clipped') + 0.4, P(10, 'clipped') + 0.7) });
    cap(c, t, 'THE SENSOR', 990, 240, P(10, 'clipped') + 0.3, 24); ital(c, t, 'clipped to the ossicones', 990, 274, P(10, 'horns') - 0.1, 22);
    // the motion trace: every move, logged
    const k = ph(t, S(11), PH[12].e + 0.4);
    if (k > 0) { c.save(); c.strokeStyle = PAL.ink; c.lineWidth = 1.6; c.beginPath(); const R2 = RNG(3); let first = true;
      for (let x = 760; x <= lerp(760, 1180, k); x += 3) { const u = (x - 760) / 420, quiet = u > 0.35 && u < 0.62, y = 470 + (quiet ? 2 : 22) * Math.sin(x * 0.21) * (0.5 + R2()); first ? c.moveTo(x, y) : c.lineTo(x, y); first = false; } c.stroke();
      c.lineWidth = 0.8; c.beginPath(); c.moveTo(760, 510); c.lineTo(1180, 510); c.stroke(); c.restore(); }
    cap(c, t, 'EVERY MOVE', 970, 410, P(11, 'every') - 0.1, 22);
    ital(c, t, 'one reading a minute', 970, 545, P(11, 'move'), 20);
    note(c, t, 'all night long', 970, 610, P(12, 'night') - 0.3, 42);
  });
  add(S(13), 'lay', (c, t) => {
    head(c, t, S(13), 'PLATE  III', 'ONE NIGHT, SEVEN TO SEVEN');
    const X0 = 140, X1 = 1140, Y0 = 250, Y1 = 330, hx = (h) => X0 + (h / 12) * (X1 - X0);
    const k0 = eo(ph(t, S(13) + 0.2, S(13) + 0.9));
    c.save(); c.strokeStyle = PAL.ink; c.lineWidth = 2.4; c.strokeRect(X0, Y0, (X1 - X0) * k0, Y1 - Y0); c.lineWidth = 0.7; c.strokeRect(X0 - 6, Y0 - 6, (X1 - X0) * k0 + 12, Y1 - Y0 + 12); c.restore();
    ['7 PM', '9', '11', '1 AM', '3', '5', '7 AM'].forEach((s, i) => engraveText(c, s, hx(i * 2), Y1 + 34, { size: 17, weight: 600, track: 0.08, p: ph(t, S(13) + 0.4 + i * 0.08, S(13) + 0.8 + i * 0.08) }));
    // resting time, hatched (blocks spread through the night, about eight hours of twelve)
    const RB = [[1.4, 3.0], [3.4, 5.2], [6.0, 6.8], [7.2, 9.6], [9.9, 11.4]], kr = eio(ph(t, P(13, 'resting') - 0.2, P(13, 'resting') + 1.2));
    RB.forEach(([a, b]) => { const bb = Math.min(b, a + (b - a) * clamp(kr * 1.2)); if (kr <= 0) return; c.save(); c.beginPath(); c.rect(hx(a), Y0 + 3, hx(bb) - hx(a), Y1 - Y0 - 6); c.clip(); c.strokeStyle = PAL.ink; c.lineWidth = 1; for (let x = hx(a) - 100; x < hx(bb); x += 5) { c.beginPath(); c.moveTo(x, Y1); c.lineTo(x + 80, Y0); c.stroke(); } c.restore(); });
    big(c, t, '≈ 8 HOURS RESTING', W / 2, 450, P(13, 'eight') - 0.15, 48);
    // the dream sleep: two thin slivers, coloured by hand
    const DS = [[2.6, 1.0], [8.6, 1.4]];
    DS.forEach(([h, d], i) => { const x = hx(h); const k = eo(ph(t, P(14, 'dream') + i * 0.3, P(14, 'dream') + i * 0.3 + 0.6)); if (k <= 0) return;
      c.save(); c.globalCompositeOperation = 'multiply'; c.fillStyle = H.rgba(OCHRE, 0.85); c.fillRect(x - 5, Y1 - (Y1 - Y0) * k, 10, (Y1 - Y0) * k); c.restore(); c.save(); c.strokeStyle = PAL.ink; c.lineWidth = 1.8; c.strokeRect(x - 5, Y0, 10, Y1 - Y0); c.restore(); });
    big(c, t, '≈ 8 MINUTES', W / 2, 560, P(15, 'eight') - 0.15, 64, { color: '#5a3a14' });
    ital(c, t, 'of the deepest, dreaming sleep', W / 2, 604, P(15, 'minutes') + 0.2, 24);
    const bk = ph(t, S(16), S(16) + 0.5);
    if (bk > 0) { DS.forEach(([h]) => leader(c, [hx(h), Y0 - 8], [hx(h) + 40, Y0 - 50], { p: bk, w: 1 })); note(c, t, 'two short bursts', hx(5.6), Y0 - 48, S(16), 36); }
  });

  // ---- chapter II: sleeping on your feet ----
  card('II', 'SLEEPING ON YOUR FEET', S(17));
  add(S(18), 'tissue', (c, t) => {
    withCam(c, camAt(t, [[S(18), 640, 360, 1.0], [S(20), 560, 330, 1.1]]), () => { G_FEET.draw(c, t); });
    big(c, t, 'THE REST OF', 940, 270, S(18) + 0.4, 52); big(c, t, 'THE TIME?', 940, 340, P(18, 'time') - 0.3, 52);
    note(c, t, 'dozing, standing up', 940, 450, P(19, 'doze') - 0.2, 46);
  });
  add(S(20), 'tissue', (c, t) => {
    const R = { x: 400, y: 380, r: 230 };
    c.save(); c.beginPath(); c.arc(R.x, R.y, R.r, 0, 7); c.clip(); c.fillStyle = c.createPattern(sheet(), 'no-repeat'); c.fill();
    G_EYE.draw(c, t);
    // the ear twitches: small motion marks beside it
    const ex = 255, ey = 254, tw = Math.max(pulse(t, P(20, 'ears') + 0.1, 0.1, 0.3), pulse(t, P(20, 'twitching'), 0.1, 0.3), pulse(t, S(21) + 0.6, 0.1, 0.3));
    if (tw > 0) { c.save(); c.strokeStyle = PAL.ink; c.lineCap = 'round'; c.lineWidth = 2; c.globalAlpha = tw; for (let k = 0; k < 3; k++) { c.beginPath(); c.arc(ex - 40, ey - 20, 40 + k * 14, Math.PI * 1.05, Math.PI * 1.35); c.stroke(); } c.restore(); }
    c.restore(); roundelFrame(c, R.x, R.y, R.r, { p: ph(t, S(20), S(20) + 0.7), w: 3.2 });
    ital(c, t, 'eyes half open', 980, 230, P(20, 'eyes') - 0.1, 26); ital(c, t, 'ears still twitching', 980, 275, P(20, 'ears') - 0.1, 26);
    big(c, t, 'A FEW MINUTES', 980, 430, P(21, 'few') - 0.2, 54); ital(c, t, 'at a time', 980, 474, P(21, 'time') - 0.2, 24);
  });
  add(S(22), 'tissue', (c, t) => {
    const lx = lerp(150, 330, eo(ph(t, S(22), S(23) + 1.2))), run = eio(ph(t, P(23, 'run') - 0.2, P(23, 'away') + 0.8));
    c.save(); c.translate(lx, 0); L_CREEP.draw(c, t); c.restore();
    c.save(); c.translate(run * 180, 0); G_RUN.draw(c, t);
    if (run > 0.02 && run < 0.98) { c.strokeStyle = PAL.ink; c.lineCap = 'round'; for (let k = 0; k < 4; k++) { c.lineWidth = 1.6; c.beginPath(); c.moveTo(690 - k * 10, 380 + k * 55); c.lineTo(600 - k * 10, 380 + k * 55); c.stroke(); } }
    c.restore();
    note(c, t, 'a lion creeps closer', 380, 330, S(22) + 0.3, 40);
    cap(c, t, 'READY TO RUN', 640, 140, P(23, 'run') - 0.1, 34);
  });
  add(S(24), 'tissue', (c, t) => {
    G_LIE1.draw(c, t);
    big(c, t, 'LYING DOWN?', 1010, 300, P(24, 'lying') - 0.1, 56);
    note(c, t, 'a whole different story', 1010, 390, P(24, 'different') - 0.2, 40);
  });

  // ---- chapter III: the neck problem ----
  card('III', 'THE NECK PROBLEM', S(25));
  add(S(26), 'tissue', (c, t) => {
    head(c, t, S(26), 'PLATE  IV', 'GETTING DOWN');
    G_DOWN.forEach((g) => g.draw(c, t));
    const lb = [['I.', 'standing', S(26) + 0.6], ['II.', 'front knees bend', P(27, 'front')], ['III.', 'back legs fold', P(27, 'back')]];
    lb.forEach(([n, s, a], i) => { cap(c, t, n, [220, 610, 1000][i], 684, a, 22); ital(c, t, s, [220, 610, 1000][i], 180 + 0 * i, a + 0.1, 24); });
    note(c, t, 'five metres, folded', W / 2, 250, P(26, 'folding'), 40);
  });
  add(S(28), 'tissue', (c, t) => {
    head(c, t, S(28), 'PLATE  V', 'GETTING UP');
    const rk = Math.sin((t - P(28, 'rocking')) * 5) * 0.05 * ph(t, P(28, 'rocking') - 0.2, P(28, 'rocking')) * (1 - ph(t, PH[30].e - 0.4, PH[30].e));
    c.save(); c.translate(250, 600); c.rotate(rk); c.translate(-250, -600); G_UP[0].draw(c, t); c.restore();
    if (rk !== 0) { c.save(); c.strokeStyle = PAL.ink; c.lineWidth = 1.8; c.lineCap = 'round'; c.beginPath(); c.arc(250 + 100, 520, 150, -2.2, -1.4); c.stroke(); c.restore(); }
    G_UP[1].draw(c, t); G_UP[2].draw(c, t);
    [[420, P(30, 'pushing')], [810, P(30, 'time') - 0.2]].forEach(([x, a]) => { const k = eo(ph(t, a, a + 0.4)); if (k <= 0) return; c.save(); c.strokeStyle = PAL.ink; c.lineWidth = 2.2; c.lineCap = 'round'; c.beginPath(); c.moveTo(x, 400); c.lineTo(x + 60 * k, 400); c.stroke(); if (k > 0.9) { c.beginPath(); c.moveTo(x + 50, 392); c.lineTo(x + 60, 400); c.lineTo(x + 50, 408); c.stroke(); } c.restore(); });
    ital(c, t, 'rock the neck', 250, 684, P(28, 'rocking'), 24); ital(c, t, 'push up the back', 640, 684, P(30, 'pushing'), 24); ital(c, t, 'then the front', 1020, 684, P(30, 'time') - 0.2, 24);
    note(c, t, 'one end at a time', W / 2, 220, P(30, 'end') - 0.2, 40);
  });
  add(S(31), 'tissue', (c, t) => {
    const sec = clamp((t - 77.4) * 1.6, 0, 60);
    WATCH.draw(c, t, sec);
    big(c, t, 'A FEW SECONDS', 920, 290, P(31, 'few') - 0.15, 54);
    L_WAIT.draw(c, t);
    note(c, t, 'a very long time', 920, 380, P(32, 'very') - 0.2, 46);
  });
  add(S(33), 'lay', (c, t) => {
    head(c, t, S(33), 'PLATE  VI', 'WHY LIE DOWN AT ALL?');
    const R = { x: 430, y: 410, r: 220 }, rel = eio(ph(t, P(34, 'relaxes') - 0.2, P(34, 'relaxes') + 1.0)), sag = eio(ph(t, P(35, 'neck') - 0.3, P(35, 'dreams')));
    c.save(); c.beginPath(); c.arc(R.x, R.y, R.r, 0, 7); c.clip(); c.fillStyle = c.createPattern(sheet(), 'no-repeat'); c.fill();
    // a length of neck in section: muscle bands, taut, then slack
    c.translate(R.x, R.y); c.rotate(-0.9 + sag * 0.7); c.translate(-R.x, -R.y);
    const y0 = R.y - 46, y1 = R.y + 46;
    c.strokeStyle = PAL.ink; c.lineCap = 'round';
    c.lineWidth = 3.2; [y0, y1].forEach((y) => { c.beginPath(); c.moveTo(R.x - 260, y); c.lineTo(R.x + 260, y); c.stroke(); });
    const k0 = ph(t, S(34), S(34) + 0.8);
    for (let j = 1; j < 12; j++) { const yy = lerp(y0, y1, j / 12); c.lineWidth = 1.1 + (j % 3 === 0 ? 0.6 : 0); c.beginPath();
      for (let x = R.x - 250; x <= lerp(R.x - 250, R.x + 250, k0); x += 4) { const yv = yy + rel * 6 * Math.sin(x * 0.05 + j * 1.3) * Math.sin((x - R.x + 250) / 500 * Math.PI); x === R.x - 250 ? c.moveTo(x, yv) : c.lineTo(x, yv); } c.stroke(); }
    c.restore();
    roundelFrame(c, R.x, R.y, R.r, { p: ph(t, S(33), S(33) + 0.7), w: 3.2 });
    ital(c, t, 'neck muscle', R.x, R.y + R.r + 34, S(34), 22);
    big(c, t, 'DREAM SLEEP', 960, 290, P(34, 'dreaming') - 0.15, 50); ital(c, t, 'REM sleep', 960, 330, P(34, 'sleep'), 24);
    note(c, t, 'the muscles relax', 960, 420, P(34, 'relaxes') - 0.1, 44);
    cap(c, t, 'TOO HEAVY TO HOLD UP', 960, 520, P(35, 'heavy') - 0.2, 24);
  });
  add(S(36), 'tissue', (c, t) => {
    const tc = P(36, 'curls'), fade = 1 - ph(t, tc - 0.1, tc + 0.5);
    withCam(c, camAt(t, [[S(36), 560, 400, 1.0], [S(38) + 1.4, 520, 420, 1.06]]), () => {
      for (const p of G_UPRIGHT.order) { if (p === G_UPRIGHT.neck || p === G_UPRIGHT.headF) continue; occlude(c, [p.sh]); p.ink.draw(c, t); }
      if (fade > 0) { c.save(); c.globalAlpha = fade; for (const p of [G_UPRIGHT.neck, G_UPRIGHT.headF]) { occlude(c, [p.sh]); p.ink.draw(c, t); } c.restore(); }
      for (const p of [G_CURL.neck, G_CURL.headF]) { occlude(c, [p.sh]); p.ink.draw(c, t); }
      bloom(c, [...G_UPRIGHT.order.filter((p) => p !== G_UPRIGHT.neck && p !== G_UPRIGHT.headF).map((p) => p.sh.path), G_CURL.neck.sh.path, G_CURL.headF.sh.path], t, P(37, 'rump') - 0.2, 1.3, 420, 470, 360, OCHRE, 0.42, 3);
    });
    note(c, t, 'like a swan', 1010, 230, P(36, 'swan') - 0.2, 46);
    cap(c, t, 'HEAD ON ITS OWN RUMP', 1010, 320, P(37, 'rump') - 0.3, 24);
    note(c, t, 'a pillow it never packs', 1010, 410, S(38) + 0.2, 38);
  });

  // ---- chapter IV: when and where ----
  card('IV', 'WHEN AND WHERE', S(39), (c, t) => moonGlyph(c, W / 2, 570, 34, ph(t, S(39) + 0.8, S(39) + 1.5)));
  add(S(40), 'tissue', (c, t) => {
    head(c, t, S(40), 'PLATE  VII', 'TWO FAVOURITE TIMES');
    const X0 = 140, X1 = 1140, Y = 540, hx = (h) => X0 + (h / 12) * (X1 - X0);
    const k0 = eo(ph(t, S(40) + 0.2, S(40) + 0.9));
    c.save(); c.strokeStyle = PAL.ink; c.lineCap = 'round'; c.lineWidth = 2.4; c.beginPath(); c.moveTo(X0, Y); c.lineTo(lerp(X0, X1, k0), Y); c.stroke(); c.restore();
    ['7 PM', '9', '11', '1 AM', '3', '5', '7 AM'].forEach((s, i) => engraveText(c, s, hx(i * 2), Y + 34, { size: 17, weight: 600, track: 0.08, p: ph(t, S(40) + 0.4 + i * 0.08, S(40) + 0.8 + i * 0.08) }));
    sunGlyph(c, X0, Y - 2, 22, ph(t, S(40) + 0.5, S(40) + 1.2), true); sunGlyph(c, X1, Y - 2, 22, ph(t, P(42, 'sunrise') - 0.3, P(42, 'sunrise') + 0.4), true);
    // the sleep curve with two peaks (after sunset, before sunrise), cut along time
    const f = (h) => 0.12 + 0.88 * Math.exp(-(((h - 3) / 1.1) ** 2)) + 0.8 * Math.exp(-(((h - 9) / 1.1) ** 2));
    const hEnd = P(41, 'nine') - 0.3 > t ? 12 * 0.18 * ph(t, S(40) + 0.6, P(41, 'nine') - 0.3) : t < S(42) ? lerp(2.16, 6, ph(t, P(41, 'nine') - 0.3, PH[41].e)) : lerp(6, 12, ph(t, S(42), PH[42].e));
    if (hEnd > 0) { const pts = []; for (let h = 0; h <= hEnd; h += 0.05) pts.push([hx(h), Y - 230 * f(h)]);
      c.save(); c.beginPath(); c.moveTo(hx(0), Y); pts.forEach((p) => c.lineTo(...p)); c.lineTo(hx(hEnd), Y); c.closePath(); c.clip(); c.strokeStyle = PAL.ink; c.lineWidth = 1; for (let x = X0 - 300; x < X1; x += 6) { c.beginPath(); c.moveTo(x, Y); c.lineTo(x + 230, Y - 230); c.stroke(); } c.restore();
      c.save(); c.strokeStyle = PAL.ink; c.lineWidth = 2.8; c.lineCap = 'round'; c.beginPath(); pts.forEach((p, i) => i ? c.lineTo(...p) : c.moveTo(...p)); c.stroke(); c.restore(); }
    big(c, t, '9 – 11 PM', hx(3), Y - 280, P(41, 'nine') - 0.1, 40); ital(c, t, 'after sunset', hx(3), Y - 252, P(41, 'sunset') - 0.2, 20);
    big(c, t, '3 – 5 AM', hx(9), Y - 280, P(42, 'three') - 0.1, 40); ital(c, t, 'before sunrise', hx(9), Y - 252, P(42, 'sunrise'), 20);
  });
  add(S(43), 'tissue', (c, t) => {
    withCam(c, camAt(t, [[S(43), 560, 380, 1.12], [S(46), 700, 380, 1.12]]), (k) => {
      const hk = eo(ph(t, S(43), S(43) + 0.8)); c.save(); c.strokeStyle = PAL.ink; c.lineCap = 'round'; c.lineWidth = 1.8; c.beginPath(); c.moveTo(60, 580); c.lineTo(lerp(60, 1220, hk), 576); c.stroke(); c.lineWidth = 0.6; for (let j = 1; j < 5; j++) { c.beginPath(); c.moveTo(60 + j * 40, 580 + j * 14); c.lineTo(lerp(60, 1220, hk) - j * 40, 578 + j * 14); c.stroke(); } c.restore();
      TREE_V.draw(c, t); G_VIEW.forEach((g) => g.draw(c, t));
      const vk = ph(t, P(44, 'clear') - 0.2, P(44, 'view') + 0.6);
      if (vk > 0) { c.save(); c.strokeStyle = PAL.ink; c.lineWidth = 1; c.setLineDash([3, 7]); [[300 + 160 * 0.42 + 20, 560 - 470 * 0.42, -0.25], [640 - 160 * 0.42 - 20, 566 - 470 * 0.42, Math.PI + 0.25]].forEach(([x, y, a]) => { for (let j = -1; j <= 1; j++) { const aa = a + j * 0.18; c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(aa) * 320 * vk, y + Math.sin(aa) * 320 * vk); c.stroke(); } }); c.restore(); }
    });
    note(c, t, 'a clear view', 330, 150, P(44, 'clear') - 0.2, 44);
    note(c, t, 'more eyes on watch', 940, 150, P(45, 'eyes') - 0.3, 44);
  });
  add(S(46), 'tissue', (c, t) => {
    ital(c, t, 'one more thief of sleep', W / 2, 200, S(46) + 0.4, 26);
    big(c, t, 'LUNCH', W / 2, 360, P(46, 'lunch') - 0.1, 130, { track: 0.12 });
    TWIG.draw(c, t);
    ital(c, t, 'tough acacia leaves', W / 2, 650, P(47, 'tough') - 0.2, 26);
  });
  add(S(48), 'tissue', (c, t) => {
    head(c, t, S(48), 'PLATE  VIII', 'CHEWING THE CUD');
    G_CUD.draw(c, t);
    // the cud's round trip: mouth → stomach → back up → chewed again
    const m = [400 + 160 * 1.05 + 70, 684 - 470 * 1.05 + 30], st = [400 - 10, 684 - 200 * 1.05];
    const route = smoothPts([m, [400 + 120 * 1.05, 684 - 360 * 1.05], [400 + 95 * 1.05, 684 - 250 * 1.05], st], 10);
    const rk = ph(t, P(48, 'chew'), P(48, 'twice') + 0.3);
    if (rk > 0) { const n = Math.floor(route.length * rk); c.save(); c.strokeStyle = PAL.ink; c.lineWidth = 2; c.setLineDash([2, 6]); c.lineCap = 'round'; c.beginPath(); route.slice(0, n + 1).forEach((p, i) => i ? c.lineTo(...p) : c.moveTo(...p)); c.stroke(); c.restore(); }
    const b1 = ph(t, P(48, 'chew') - 0.2, P(48, 'twice')), b2 = ph(t, P(49, 'back'), P(49, 'up') + 0.8), u = b2 > 0 ? 1 - b2 : b1;
    if (b1 > 0) { const p = along(route, u); c.save(); c.fillStyle = PAL.ink; c.beginPath(); c.arc(p[0], p[1], 7, 0, 7); c.fill(); c.restore(); }
    big(c, t, 'CHEWED TWICE', 950, 280, P(48, 'twice') - 0.2, 50); ital(c, t, 'like a cow', 950, 322, P(48, 'cows'), 24);
    cap(c, t, 'THE CUD', 950, 410, P(49, 'cud') - 0.1, 30);
    const zk = P(50, 'deep'); big(c, t, 'Z Z Z', 950, 540, S(50), 54); strike(c, 870, 1030, 524, ph(t, zk, zk + 0.35), 5);
    ital(c, t, 'no deep sleep while chewing', 950, 600, P(50, 'chewing') - 0.3, 24);
  });

  // ---- chapter V: why so little? ----
  card('V', 'WHY SO LITTLE?', S(51));
  add(S(52), 'tissue', (c, t) => {
    head(c, t, S(52), 'PLATE  IX', 'MEAT-EATERS AND PLANT-EATERS');
    L_MEAT.draw(c, t); G_PLANT.draw(c, t);
    cap(c, t, 'MEAT-EATER', 330, 490, P(52, 'meateaters') - 0.4, 22); cap(c, t, 'PLANT-EATER', 930, 490, P(52, 'planteaters') - 0.2, 22);
    const bar = (x, w, k, y = 560) => { if (k <= 0) return; c.save(); c.strokeStyle = PAL.ink; c.lineWidth = 2; c.strokeRect(x - w / 2, y, w * k, 34); c.beginPath(); c.rect(x - w / 2, y, w * k, 34); c.clip(); c.lineWidth = 1; for (let xx = x - w / 2 - 40; xx < x + w / 2; xx += 5) { c.beginPath(); c.moveTo(xx, y + 34); c.lineTo(xx + 34, y); c.stroke(); } c.restore(); };
    bar(330, 380, eo(ph(t, P(53, 'nap') - 0.2, P(53, 'day'))));
    bar(930, 380, 0.14 * eo(ph(t, P(52, 'less') - 0.2, P(52, 'less') + 0.5)));
    ital(c, t, 'naps most of the day', 330, 630, P(53, 'nap'), 22); ital(c, t, 'sleeps far less', 930, 630, P(52, 'less'), 22);
    ital(c, t, 'hours asleep', W / 2, 582, P(52, 'sleep'), 18);
  });
  add(S(54), 'tissue', (c, t) => {
    DIAL_B.draw(c, t); dialNums(c, t, 139.8);
    wedge(c, DIAL24.x, DIAL24.y, DIAL24.r - 14, 0, 12 * eio(ph(t, P(54, 'eating') - 0.2, P(54, 'day') + 0.4)), 5);
    big(c, t, 'KEEP EATING', 950, 290, P(54, 'eating') - 0.2, 54); ital(c, t, 'a big part of every day', 950, 334, P(54, 'big') - 0.1, 24);
    note(c, t, 'and stay alert', 950, 450, S(55) + 0.1, 46); ital(c, t, 'to the animals that want to eat it', 950, 500, P(55, 'animals') - 0.1, 22);
  });
  add(S(56), 'tissue', (c, t) => {
    DIAL_C.draw(c, t); dialNums(c, t, 146.1);
    const R = RNG(17), sl = []; for (let i = 0; i < 26; i++) sl.push(R() * 24);
    sl.forEach((h, i) => { const a = S(56) + 0.4 + i * 0.05; if (t < a) return; wedge(c, DIAL24.x, DIAL24.y, DIAL24.r - 14, h, h + 0.12, 3); });
    [[22.0, 0], [3.6, 1]].forEach(([h, i]) => { const a = P(57, 'dreams') - 0.2 + i * 0.25; if (t < a) return; wedge(c, DIAL24.x, DIAL24.y, DIAL24.r - 14, h, h + 0.22 * eo(ph(t, a, a + 0.5)), 2.5, OCHRE); });
    big(c, t, 'TINY SLICES', 950, 290, P(56, 'tiny') - 0.15, 56);
    note(c, t, 'and a few minutes', 950, 400, P(57, 'few') - 0.3, 44); note(c, t, 'of dreams', 950, 460, P(57, 'dreams') - 0.2, 44);
  });
  add(S(58), 'lay', (c, t) => {
    const zk = ph(t, S(59) - 0.1, S(59) + 0.4);
    if (t < S(59) + 0.4) { c.save(); c.globalAlpha = 1 - zk; G_GENIUS.draw(c, t); bloom(c, G_GENIUS.paths(), 99, 0, 1, 420, 520, 400, OCHRE, 0.42, 5); note(c, t, 'kind of genius', 930, 340, P(58, 'genius') - 0.3, 56); c.restore(); }
    if (t > S(59) - 0.1) { FENCE.draw(c, t); G_ZOO.draw(c, t); }
    cap(c, t, 'IN ZOOS', 1000, 180, S(59) + 0.2, 34); ital(c, t, 'where nothing hunts them', 1000, 220, P(59, 'nothing') - 0.1, 24);
    note(c, t, 'much more of the night', 1000, 300, P(60, 'more') - 0.3, 40);
  });
  add(S(61), 'tissue', (c, t) => {
    const wv = textW(c, 'A FLAW?', 70);
    big(c, t, 'A FLAW?', W / 2, 220, S(61) + 0.2, 70); strike(c, W / 2 - wv / 2 - 14, W / 2 + wv / 2 + 14, 200, ph(t, P(61, 'flaw') + 0.1, P(61, 'flaw') + 0.45), 6);
    big(c, t, 'A SURVIVAL PLAN', W / 2, 330, P(62, 'survival') - 0.2, 64);
    const hk = eo(ph(t, P(62, 'survival'), P(62, 'survival') + 0.8)); c.save(); c.strokeStyle = PAL.ink; c.lineWidth = 1.8; c.lineCap = 'round'; c.beginPath(); c.moveTo(W / 2 - 520 * hk, 650); c.lineTo(W / 2 + 520 * hk, 648); c.stroke(); c.restore();
    G_PLAN.draw(c, t); TREE_P.draw(c, t);
    note(c, t, 'built for the open plains', 900, 470, P(62, 'plains') - 0.4, 38);
  });
  add(S(63), 'lay', (c, t) => {
    head(c, t, S(63), 'PLATE  X', 'THE DREAMING GIRAFFE', 'Giraffa camelopardalis', S(63) + 0.4);
    G_FINAL.draw(c, t);
    bloom(c, G_FINAL.paths(), t, S(63) + 0.6, 1.2, 380, 520, 380, OCHRE, 0.42, 7);
    big(c, t, '8 MINUTES', 1000, 330, P(65, 'eight') - 0.15, 62); note(c, t, 'of dreams', 1000, 400, P(65, 'minutes'), 44);
    ital(c, t, 'head on its own rump', 1000, 460, P(65, 'rump') - 0.4, 24);
    ital(c, t, 'Zorbly del. et sculp.', 1120, 676, S(63) + 1.6, 16, { alpha: 0.8 });
  });
  add(S(66), 'lay', (c, t) => {
    FACE.draw(c, t);
    cap(c, t, 'THE NEXT PLATE', 930, 250, S(66) + 0.4, 16, { track: 0.3 });
    big(c, t, 'WHY DO SOME', 930, 320, P(66, 'why') - 0.1, 44);
    big(c, t, 'PEOPLE GET', 930, 380, P(66, 'people') - 0.1, 44);
    big(c, t, 'MORE FRECKLES?', 930, 450, P(66, 'freckles') - 0.15, 52);
  });

  // =================== MAIN: scenes, printmaking transitions, sound, thumbnail ===================
  const TR = 0.6;
  function drawScene(c, sc, t) { c.save(); c.drawImage(sheet(), 0, 0); sc.d(c, t); c.restore(); }
  function explainer(ctx, Wc, Hc, t) {
    let i = 0; while (i < SC.length - 1 && t >= SC[i + 1].a) i++;
    const sc = SC[i], u = (t - sc.a) / TR;
    if (i === 0 || sc.tr === 'none' || u >= 1) { drawScene(ctx, sc, t); return; }
    const prev = SC[i - 1];
    if (sc.tr === 'lay') {   // a fresh sheet is laid down over the old plate from the right
      const k = eio(clamp(u)), off = W * (1 - k);
      drawScene(ctx, prev, t);
      ctx.save(); ctx.translate(off, 0);
      const g = ctx.createLinearGradient(-30, 0, 0, 0); g.addColorStop(0, 'rgba(50,34,18,0)'); g.addColorStop(1, 'rgba(50,34,18,0.35)'); ctx.fillStyle = g; ctx.fillRect(-30, 0, 30, HH);
      ctx.beginPath(); ctx.rect(0, 0, W, HH); ctx.clip(); drawScene(ctx, sc, t); ctx.restore();
    } else {                 // a tissue guard passes across the plate; the new plate is under it
      const pos = lerp(-260, W + 260, clamp(u));
      drawScene(ctx, prev, t);
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, Math.max(0, pos), HH); ctx.clip(); drawScene(ctx, sc, t); ctx.restore();
      ctx.save(); const g = ctx.createLinearGradient(pos - 260, 0, pos + 260, 0);
      g.addColorStop(0, 'rgba(246,241,229,0)'); g.addColorStop(0.35, 'rgba(246,241,229,0.88)'); g.addColorStop(0.5, 'rgba(248,244,233,0.96)'); g.addColorStop(0.65, 'rgba(246,241,229,0.88)'); g.addColorStop(1, 'rgba(246,241,229,0)');
      ctx.fillStyle = g; ctx.fillRect(pos - 260, 0, 520, HH); ctx.restore();
    }
  }

  function scoreSound(k) {
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.3 });
    const cut = (t0, t1, g = 0.4) => { for (let t = t0; t < t1; t += 0.45) k.play('stroke', t, { material: 'pencil', dur: 0.4, gain: g, minor: true }); };
    SC.forEach((sc, i) => {
      if (i && sc.tr === 'lay') { k.play('paper', sc.a, { dur: 0.6, gain: 0.5 }); k.play('press', sc.a + 0.5, { gain: 0.35, minor: true }); }
      else if (i) k.play('swish', sc.a, { dur: 0.6, gain: 0.25, minor: true });
      cut(sc.a + 0.3, sc.a + 1.8, 0.35);
    });
    // hook and intro
    k.play('stamp', P(0, 'eight'), { gain: 0.4 }); k.play('ding', P(0, 'night'), { f: 'D6', gain: 0.22 });
    for (let i = 0; i < 8; i++) k.play('bell', P(1, 'snooze') + i * 0.07, { gain: 0.12, minor: true });
    k.play('press', P(2, 'tallest'), { gain: 0.4 }); k.play('ding', P(3, 'little'), { f: 'A5', gain: 0.2 });
    // chapter I
    k.play('tick', P(6, 'thirty'), { f: 2400, gain: 0.3 }); k.play('stamp', P(6, 'thirty') + 0.1, { gain: 0.3, minor: true });
    k.play('pop', P(8, 'namibia'), { gain: 0.3 }); for (let i = 0; i < 3; i++) k.play('blip', P(8, 'three') + i * 0.25, { gain: 0.2, minor: true });
    k.play('click', P(10, 'clipped'), { f: 1800, gain: 0.5 });
    for (let i = 0; i < 14; i++) k.play('tick', S(11) + i * 0.2, { f: 3200, gain: 0.15, minor: true });
    k.play('swish', P(13, 'resting'), { dur: 1.2, gain: 0.2, minor: true }); k.play('stamp', P(13, 'eight'), { gain: 0.35 });
    k.play('sparkle', P(14, 'dream'), { n: 3, gain: 0.2 }); k.play('ding', P(15, 'eight'), { f: 'E6', gain: 0.28 });
    // chapter II
    k.play('blip', P(20, 'ears') + 0.1, { gain: 0.15, minor: true }); k.play('blip', P(20, 'twitching'), { gain: 0.15, minor: true });
    for (let i = 0; i < 4; i++) k.play('paper', S(22) + 0.3 + i * 0.5, { dur: 0.3, gain: 0.18, minor: true });
    k.play('whoosh', P(23, 'run'), { dur: 0.9, gain: 0.35 });
    // chapter III
    k.play('thud', P(27, 'front'), { gain: 0.35 }); k.play('thud', P(27, 'back'), { gain: 0.4 });
    for (let i = 0; i < 3; i++) k.play('swish', P(28, 'rocking') + i * 0.6, { dur: 0.5, gain: 0.2, minor: true });
    k.play('thud', P(30, 'pushing'), { gain: 0.3 }); k.play('thud', P(30, 'time'), { gain: 0.3 });
    for (let i = 0; i < 8; i++) k.play('tick', 77.4 + i * 0.6, { f: 2600, gain: 0.3, minor: true });
    k.play('impact', P(32, 'lion'), { gain: 0.3 });
    k.play('riser', P(34, 'relaxes') - 0.3, { dur: 1.0, gain: 0.12, minor: true });
    k.play('swish', P(36, 'curls'), { dur: 1.0, gain: 0.35 }); k.play('paper', P(37, 'rump'), { dur: 0.8, gain: 0.3 }); k.play('ding', P(37, 'rump') + 0.2, { f: 'G5', gain: 0.2 });
    // chapter IV
    k.play('ding', P(41, 'nine'), { f: 'C6', gain: 0.22 }); k.play('ding', P(42, 'three'), { f: 'E6', gain: 0.22 });
    k.play('stamp', P(46, 'lunch'), { gain: 0.45 }); k.play('paper', S(47) + 0.2, { dur: 0.5, gain: 0.25, minor: true });
    k.play('pop', P(48, 'twice'), { gain: 0.3 }); k.play('whoosh', P(49, 'back'), { dur: 0.7, gain: 0.25 }); k.play('erase', P(50, 'deep'), { dur: 0.4, gain: 0.4 });
    // chapter V
    k.play('swish', P(53, 'nap'), { dur: 1.0, gain: 0.2, minor: true });
    k.play('swish', P(54, 'eating'), { dur: 1.2, gain: 0.2, minor: true });
    for (let i = 0; i < 26; i++) k.play('tick', S(56) + 0.4 + i * 0.05, { f: 2800 + (i % 5) * 100, gain: 0.12, minor: true });
    k.play('sparkle', P(57, 'dreams'), { n: 3, gain: 0.22 }); k.play('ding', P(58, 'genius'), { f: 'A5', gain: 0.22 });
    k.play('erase', P(61, 'flaw') + 0.1, { dur: 0.4, gain: 0.4 }); k.play('stamp', P(62, 'survival'), { gain: 0.4 });
    k.play('ding', P(65, 'eight'), { f: 'D6', gain: 0.25 }); k.play('ding', P(66, 'freckles'), { f: 'G5', gain: 0.22 });
  }

  // thumbnail: the dreaming giraffe, hand-coloured, and two huge words
  const G_THUMB = giraffe(450, 640, 1.55, 'curl', -9, 1, { seed: 41, eyeShut: true });
  function thumbnail(ctx) {
    ctx.drawImage(sheet(), 0, 0);
    G_THUMB.draw(ctx, 99, { wScale: 1.2 }); bloom(ctx, G_THUMB.paths(), 99, 0, 1, 380, 460, 600, OCHRE, 0.5, 2);
    engraveText(ctx, 'RUMP', 975, 290, { size: 140, weight: 600, track: 0.03 });
    engraveText(ctx, 'PILLOW', 975, 430, { size: 112, weight: 600, track: 0.03 });
    writeScript(ctx, '8 minutes of dreams', 975, 540, { size: 60 });
  }

  window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
