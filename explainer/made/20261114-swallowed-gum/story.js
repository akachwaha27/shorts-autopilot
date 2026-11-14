// ===== Copperplate Engraving (Lemo-Opuscar style), 16:9 1280x720: "What really happens if you swallow chewing gum?" =====
// Long video (~3.5 min), 5 chapters + teaser. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A book of natural-history plates that engrave themselves: every figure (gum, stomach, the digestive route, birch tar,
// sapodilla tree, scissors, broom, sloth...) is an original SVG drawing cut by the Lemo-Opuscar engraving engine
// (window.LEMO, MIT, bundled by scripts/lemo_engine.sh). New sheets are laid down for chapters, tissue guards pass between
// plates, the camera is a loupe. Only colour: one madder-rose wash on the gum itself.
(function () {
  const W = 1280, HH = 720;
  const { B, drawSheet, engraveText, writeScript, roundelFrame, leader, PAL } = window.LEMO;
  const { xf, shape, ring, clamp, hatch, outline, stroke, RNG, formTone } = B;

  // ---------- BEATS (phrases.json, Kokoro bm_george, natural mode) ----------
  const PH = [{"s":0.25,"e":3.65,"text":"Swallowed gum never stays in you for seven years.","words":[["swallowed",0.25],["gum",1.02],["never",1.27],["stays",1.7],["in",2.12],["you",2.29],["for",2.55],["seven",2.8],["years",3.23]]},{"s":4.12,"e":6.53,"text":"It's actually gone in a few days.","words":[["its",4.12],["actually",4.41],["gone",5.18],["in",5.56],["a",5.76],["few",5.85],["days",6.14]]},{"s":6.87,"e":9.52,"text":"So where did the seven-year story come from?","words":[["so",6.87],["where",7.02],["did",7.4],["the",7.63],["sevenyear",7.85],["story",8.54],["come",8.91],["from",9.22]]},{"s":9.98,"e":12.77,"text":"And what actually happens to gum inside you?","words":[["and",9.98],["what",10.21],["actually",10.52],["happens",11.14],["to",11.68],["gum",11.84],["inside",12.07],["you",12.54]]},{"s":13.23,"e":16.54,"text":"Let's follow one swallowed piece, all the way through.","words":[["lets",13.23],["follow",13.54],["one",14.0],["swallowed",14.24],["piece",14.93],["all",15.31],["the",15.54],["way",15.77],["through",16.0]]},{"s":16.97,"e":19.27,"text":"Chapter one. The seven-year myth.","words":[["chapter",16.97],["one",17.59],["the",17.85],["sevenyear",18.12],["myth",18.91]]},{"s":19.73,"e":22.2,"text":"Almost everyone hears it as a kid.","words":[["almost",19.73],["everyone",20.28],["hears",21.01],["it",21.47],["as",21.65],["a",21.83],["kid",21.92]]},{"s":22.56,"e":26.28,"text":"Swallow your gum, and it sits in your stomach for seven years.","words":[["swallow",22.56],["your",23.09],["gum",23.4],["and",23.62],["it",23.85],["sits",24.0],["in",24.31],["your",24.46],["stomach",24.76],["for",25.29],["seven",25.52],["years",25.9]]},{"s":26.68,"e":29.28,"text":"Nobody really knows who started it.","words":[["nobody",26.68],["really",27.22],["knows",27.76],["who",28.2],["started",28.47],["it",29.1]]},{"s":29.7,"e":32.47,"text":"But there's a grain of truth hiding inside.","words":[["but",29.7],["theres",29.95],["a",30.44],["grain",30.52],["of",30.92],["truth",31.09],["hiding",31.49],["inside",31.98]]},{"s":32.93,"e":36.03,"text":"Your body can't digest gum. Not properly.","words":[["your",32.93],["body",33.32],["cant",33.71],["digest",34.09],["gum",34.67],["not",34.96],["properly",35.25]]},{"s":36.44,"e":38.03,"text":"It just doesn't need to.","words":[["it",36.44],["just",36.62],["doesnt",36.97],["need",37.5],["to",37.85]]},{"s":38.5,"e":40.93,"text":"Chapter two. What gum is made of.","words":[["chapter",38.5],["two",39.18],["what",39.47],["gum",39.86],["is",40.15],["made",40.34],["of",40.73]]},{"s":41.29,"e":44.69,"text":"People have chewed gummy stuff for thousands of years.","words":[["people",41.29],["have",41.74],["chewed",42.04],["gummy",42.5],["stuff",42.88],["for",43.26],["thousands",43.48],["of",44.16],["years",44.31]]},{"s":45.17,"e":48.8,"text":"In Denmark, scientists found a lump of chewed birch tar","words":[["in",45.17],["denmark",45.33],["scientists",45.89],["found",46.7],["a",47.1],["lump",47.18],["of",47.51],["chewed",47.67],["birch",48.15],["tar",48.56]]},{"s":49.19,"e":51.62,"text":"about five thousand seven hundred years old.","words":[["about",49.19],["five",49.52],["thousand",49.78],["seven",50.31],["hundred",50.63],["years",51.1],["old",51.42]]},{"s":52.03,"e":55.42,"text":"It still held the chewer's DNA, and her tooth marks.","words":[["it",52.03],["still",52.2],["held",52.63],["the",52.97],["chewers",53.22],["dna",53.81],["and",54.07],["her",54.32],["tooth",54.58],["marks",55.0]]},{"s":55.78,"e":57.93,"text":"Far away, the Maya chewed chicle,","words":[["far",55.78],["away",56.03],["the",56.36],["maya",56.61],["chewed",56.94],["chicle",57.44]]},{"s":58.28,"e":60.82,"text":"a milky sap tapped from the sapodilla tree.","words":[["a",58.28],["milky",58.36],["sap",58.72],["tapped",58.94],["from",59.37],["the",59.66],["sapodilla",59.88],["tree",60.53]]},{"s":61.27,"e":64.89,"text":"In the eighteen seventies, an inventor named Thomas Adams","words":[["in",61.27],["the",61.42],["eighteen",61.65],["seventies",62.25],["an",62.93],["inventor",63.08],["named",63.69],["thomas",64.06],["adams",64.52]]},{"s":65.15,"e":68.7,"text":"started selling chicle as chewing gum in America.","words":[["started",65.15],["selling",65.76],["chicle",66.37],["as",66.88],["chewing",67.06],["gum",67.66],["in",67.92],["america",68.1]]},{"s":69.08,"e":71.45,"text":"Today most gum starts with a gum base,","words":[["today",69.08],["most",69.48],["gum",69.79],["starts",70.03],["with",70.51],["a",70.82],["gum",70.9],["base",71.14]]},{"s":71.8,"e":74.21,"text":"made of rubbery, food-grade polymers.","words":[["made",71.8],["of",72.12],["rubbery",72.29],["foodgrade",72.85],["polymers",73.57]]},{"s":74.57,"e":77.88,"text":"Then sweetener, softeners and flavour get mixed in.","words":[["then",74.57],["sweetener",74.88],["softeners",75.59],["and",76.3],["flavour",76.54],["get",77.09],["mixed",77.33],["in",77.72]]},{"s":78.33,"e":80.88,"text":"Chapter three. Why you can't digest it.","words":[["chapter",78.33],["three",78.93],["why",79.35],["you",79.61],["cant",79.86],["digest",80.2],["it",80.71]]},{"s":81.28,"e":83.86,"text":"Digestion is mostly chemistry.","words":[["digestion",81.28],["is",82.17],["mostly",82.37],["chemistry",82.97]]},{"s":84.23,"e":87.03,"text":"Your spit, stomach and gut make enzymes,","words":[["your",84.23],["spit",84.58],["stomach",84.93],["and",85.54],["gut",85.8],["make",86.06],["enzymes",86.41]]},{"s":87.42,"e":90.87,"text":"tiny molecular scissors that snip food into pieces.","words":[["tiny",87.42],["molecular",87.74],["scissors",88.46],["that",89.1],["snip",89.43],["food",89.75],["into",90.07],["pieces",90.39]]},{"s":91.22,"e":95.41,"text":"One kind cuts starch, one cuts protein, and one cuts fat.","words":[["one",91.22],["kind",91.51],["cuts",91.89],["starch",92.27],["one",92.84],["cuts",93.13],["protein",93.51],["and",94.17],["one",94.46],["cuts",94.74],["fat",95.12]]},{"s":95.78,"e":99.72,"text":"The sugar and flavour in gum dissolve away while you chew.","words":[["the",95.78],["sugar",96.04],["and",96.45],["flavour",96.71],["in",97.29],["gum",97.46],["dissolve",97.71],["away",98.38],["while",98.72],["you",99.14],["chew",99.39]]},{"s":100.08,"e":103.34,"text":"But the gum base is made of long, tangled chains","words":[["but",100.08],["the",100.34],["gum",100.6],["base",100.85],["is",101.2],["made",101.37],["of",101.71],["long",101.88],["tangled",102.23],["chains",102.83]]},{"s":103.74,"e":105.63,"text":"that none of those scissors can cut.","words":[["that",103.74],["none",104.0],["of",104.26],["those",104.39],["scissors",104.72],["can",105.24],["cut",105.44]]},{"s":106.09,"e":108.96,"text":"Even your stomach acid barely touches it.","words":[["even",106.09],["your",106.43],["stomach",106.77],["acid",107.36],["barely",107.7],["touches",108.2],["it",108.79]]},{"s":109.42,"e":112.81,"text":"So the rubbery part stays rubbery, the whole way through.","words":[["so",109.42],["the",109.56],["rubbery",109.78],["part",110.3],["stays",110.6],["rubbery",110.96],["the",111.48],["whole",111.7],["way",112.07],["through",112.29]]},{"s":113.17,"e":115.06,"text":"And honestly, that's fine.","words":[["and",113.17],["honestly",113.45],["thats",114.21],["fine",114.68]]},{"s":115.37,"e":119.28,"text":"Your body handles stuff it can't digest every single day.","words":[["your",115.37],["body",115.71],["handles",116.05],["stuff",116.64],["it",117.07],["cant",117.24],["digest",117.58],["every",118.09],["single",118.51],["day",119.02]]},{"s":119.63,"e":121.79,"text":"Chapter four. The journey out.","words":[["chapter",119.63],["four",120.26],["the",120.62],["journey",120.89],["out",121.52]]},{"s":122.19,"e":126.26,"text":"Once you swallow, the gum slides down your food pipe in seconds.","words":[["once",122.19],["you",122.51],["swallow",122.75],["the",123.31],["gum",123.54],["slides",123.78],["down",124.26],["your",124.58],["food",124.9],["pipe",125.22],["in",125.54],["seconds",125.7]]},{"s":126.69,"e":130.45,"text":"In your stomach, strong muscle walls churn it with your lunch.","words":[["in",126.69],["your",126.84],["stomach",127.14],["strong",127.67],["muscle",128.12],["walls",128.57],["churn",128.95],["it",129.32],["with",129.47],["your",129.77],["lunch",130.07]]},{"s":130.9,"e":133.36,"text":"Then it squeezes through a little gate at the bottom,","words":[["then",130.9],["it",131.13],["squeezes",131.25],["through",131.7],["a",132.1],["little",132.16],["gate",132.5],["at",132.73],["the",132.85],["bottom",133.02]]},{"s":133.77,"e":135.32,"text":"into your small intestine,","words":[["into",133.77],["your",134.05],["small",134.34],["intestine",134.69]]},{"s":135.67,"e":138.74,"text":"a tube roughly six metres long, all folded up.","words":[["a",135.67],["tube",135.76],["roughly",136.1],["six",136.69],["metres",136.95],["long",137.46],["all",137.8],["folded",138.05],["up",138.57]]},{"s":139.21,"e":143.03,"text":"Waves of muscle push it along, like toothpaste in a tube.","words":[["waves",139.21],["of",139.64],["muscle",139.81],["push",140.31],["it",140.65],["along",140.82],["like",141.25],["toothpaste",141.59],["in",142.43],["a",142.6],["tube",142.69]]},{"s":143.41,"e":146.89,"text":"And between meals, your gut runs a cleanup cycle.","words":[["and",143.41],["between",143.68],["meals",144.3],["your",144.75],["gut",145.11],["runs",145.37],["a",145.73],["cleanup",145.82],["cycle",146.45]]},{"s":147.33,"e":149.51,"text":"Every ninety minutes to two hours or so,","words":[["every",147.33],["ninety",147.67],["minutes",148.08],["to",148.56],["two",148.69],["hours",148.9],["or",149.24],["so",149.37]]},{"s":149.92,"e":152.85,"text":"a strong wave sweeps the leftovers onward.","words":[["a",149.92],["strong",150.01],["wave",150.51],["sweeps",150.84],["the",151.35],["leftovers",151.6],["onward",152.35]]},{"s":153.24,"e":155.83,"text":"Scientists nicknamed it the housekeeper.","words":[["scientists",153.24],["nicknamed",153.98],["it",154.64],["the",154.79],["housekeeper",155.01]]},{"s":156.27,"e":160.0,"text":"The gum rides along with corn skins, seeds and fibre,","words":[["the",156.27],["gum",156.53],["rides",156.8],["along",157.24],["with",157.69],["corn",158.04],["skins",158.4],["seeds",158.84],["and",159.29],["fibre",159.55]]},{"s":160.42,"e":161.9,"text":"through the large intestine,","words":[["through",160.42],["the",160.85],["large",161.03],["intestine",161.34]]},{"s":162.27,"e":165.72,"text":"and out with everything else, usually within a few days.","words":[["and",162.27],["out",162.5],["with",162.73],["everything",163.03],["else",163.8],["usually",164.11],["within",164.64],["a",165.11],["few",165.18],["days",165.41]]},{"s":166.06,"e":168.43,"text":"Chapter five. When it can go wrong.","words":[["chapter",166.06],["five",166.67],["when",167.03],["it",167.38],["can",167.55],["go",167.82],["wrong",167.99]]},{"s":168.83,"e":171.9,"text":"So one swallowed piece is no big deal.","words":[["so",168.83],["one",169.04],["swallowed",169.35],["piece",170.27],["is",170.78],["no",170.98],["big",171.19],["deal",171.49]]},{"s":172.36,"e":175.42,"text":"But doctors have reported rare cases in young kids","words":[["but",172.36],["doctors",172.58],["have",173.09],["reported",173.38],["rare",173.96],["cases",174.25],["in",174.62],["young",174.76],["kids",175.13]]},{"s":175.72,"e":179.12,"text":"who swallowed gum every day, piece after piece.","words":[["who",175.72],["swallowed",175.99],["gum",176.79],["every",177.06],["day",177.51],["piece",177.78],["after",178.23],["piece",178.67]]},{"s":179.55,"e":183.22,"text":"The gum clumped together, sometimes with coins or seeds,","words":[["the",179.55],["gum",179.79],["clumped",180.03],["together",180.59],["sometimes",181.23],["with",181.95],["coins",182.27],["or",182.66],["seeds",182.82]]},{"s":183.57,"e":185.6,"text":"into a sticky ball that got stuck.","words":[["into",183.57],["a",183.87],["sticky",183.95],["ball",184.4],["that",184.7],["got",185.0],["stuck",185.22]]},{"s":186.03,"e":189.41,"text":"Those cases are rare, and they took a lot of gum.","words":[["those",186.03],["cases",186.48],["are",186.94],["rare",187.22],["and",187.58],["they",187.86],["took",188.22],["a",188.59],["lot",188.68],["of",188.95],["gum",189.14]]},{"s":189.77,"e":193.4,"text":"So the best place for gum is still the bin, not your belly.","words":[["so",189.77],["the",189.93],["best",190.17],["place",190.5],["for",190.9],["gum",191.14],["is",191.38],["still",191.54],["the",191.95],["bin",192.19],["not",192.43],["your",192.67],["belly",193.0]]},{"s":193.76,"e":195.45,"text":"The seven-year myth is wrong,","words":[["the",193.76],["sevenyear",193.98],["myth",194.64],["is",194.93],["wrong",195.08]]},{"s":195.8,"e":197.75,"text":"but it's wrong in an interesting way.","words":[["but",195.8],["its",196.0],["wrong",196.2],["in",196.54],["an",196.67],["interesting",196.81],["way",197.55]]},{"s":198.21,"e":200.43,"text":"Your body can't break gum down.","words":[["your",198.21],["body",198.58],["cant",198.95],["break",199.32],["gum",199.78],["down",200.06]]},{"s":200.8,"e":203.75,"text":"It simply moves it along, and shows it the door.","words":[["it",200.8],["simply",200.96],["moves",201.43],["it",201.83],["along",201.99],["and",202.39],["shows",202.63],["it",203.03],["the",203.19],["door",203.43]]},{"s":204.22,"e":206.59,"text":"Next time, why are sloths so slow?","words":[["next",204.22],["time",204.59],["why",204.95],["are",205.22],["sloths",205.5],["so",206.04],["slow",206.22]]},{"s":207.07,"e":209.57,"text":"And how does being slow keep them alive?","words":[["and",207.07],["how",207.3],["does",207.54],["being",207.85],["slow",208.24],["keep",208.55],["them",208.87],["alive",209.18]]}];
  const BEATS = PH.map((p) => ({ s: p.s, e: p.e, text: p.text }));
  const DURATION = PH[PH.length - 1].e + 1.0;
  window.BEATS = BEATS; window.DURATION = DURATION;
  const S = (i) => PH[i].s;
  const P = (i, w, n = 1) => { let k = 0; for (const q of PH[i].words) if (q[0] === w && ++k === n) return q[1]; return PH[i].s; };
  const ph = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const eo = (x) => 1 - Math.pow(1 - x, 3);
  const lerp = (a, b, k) => a + (b - a) * k;
  const LV = [-0.55, -0.62];
  const ROSE = '#c25a6e';
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
  // any closed SVG path → an engraved figure (outline, hatching that follows the light, crossing, darks), cut from t0
  function fig(d, f, o = {}, t0 = -9, span = 2.4) {
    const ink = new B.Ink(), seed = o.seed || 1;
    const sh = typeof d === 'string' ? shape(d, f) : d;
    const ft = formTone(sh.polys, { light: LV, base: o.base ?? 0.06 });
    const sp = o.spacing || 3.1, ang = o.angle ?? -0.45, wm = o.wMax || 1.35;
    ink.group('ol'); for (const p of sh.polys) outline(ink, p, { w: o.wOl || 1.8, light: LV, seed });
    for (const l of sh.lines || []) stroke(ink, l, (o.wOl || 1.8) * 0.8, { taper: 6 });
    ink.group('h1');
    if (o.contour) B.contourHatch(ink, sh.polys, { spacing: sp, tone: ft, wMax: wm, thr: 0.13, seed });
    else hatch(ink, sh.polys, { angle: ang + 1.35, spacing: sp * 0.9, tone: ft, thr: 0.13, wMax: wm, seed, bend: 0.0006 });
    ink.group('h2'); if (!o.light) hatch(ink, sh.polys, { angle: ang, spacing: sp * 1.15, tone: ft, thr: 0.5, wMax: wm * 0.8, seed: seed + 1 });
    ink.group('h3'); if (!o.light) hatch(ink, sh.polys, { angle: ang + 1.1, spacing: sp * 1.3, tone: ft, thr: 0.76, wMax: wm * 0.6, seed: seed + 2 });
    if (o.extra) o.extra(ink, sh);
    sched(ink, t0, span);
    return { ink, sh };
  }
  // open burin strokes (polylines), cut one group
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
  function pathLen(pts) { let L = 0; const c = [0]; for (let i = 1; i < pts.length; i++) { L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); c.push(L); } return c; }
  function along(pts, k) {   // point at fraction k of the polyline's length
    const c = pathLen(pts), L = c[c.length - 1] * clamp(k);
    let i = 1; while (i < c.length - 1 && c[i] < L) i++;
    const u = (L - c[i - 1]) / ((c[i] - c[i - 1]) || 1); return [lerp(pts[i - 1][0], pts[i][0], u), lerp(pts[i - 1][1], pts[i][1], u)];
  }

  // hand colouring: transparent madder wash, multiplied over paper, blooming from one point with a ragged front
  function bloom(ctx, path, t, t0, dur, ox, oy, R, col = ROSE, a = 0.62, seed = 1) {
    const k = eo(ph(t, t0, t0 + dur)); if (k <= 0) return;
    ctx.save(); ctx.beginPath();
    for (let i = 0; i <= 48; i++) { const an = i / 48 * Math.PI * 2, r = R * k * (1 + 0.1 * Math.sin(an * 5 + seed) + 0.06 * Math.sin(an * 11 + seed * 2)); const x = ox + Math.cos(an) * r, y = oy + Math.sin(an) * r; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.clip(); ctx.globalCompositeOperation = 'multiply';
    ctx.translate(1.6, 1.1); ctx.fillStyle = H.rgba(col, a); ctx.fill(path);
    ctx.strokeStyle = H.rgba(col, a * 0.8); ctx.lineWidth = 2.2; ctx.stroke(path);   // tide line at the wet edge
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
  // a paper slip pinned over the plate (keeps type readable when the loupe is zoomed in)
  function slip(ctx, x, y, w, h, a = 1) {
    if (a <= 0) return; ctx.save(); ctx.globalAlpha = a;
    ctx.shadowColor = 'rgba(60,40,20,0.28)'; ctx.shadowBlur = 10; ctx.shadowOffsetY = 3;
    ctx.fillStyle = ctx.createPattern(paperC(), 'no-repeat'); ctx.fillRect(x, y, w, h); ctx.shadowColor = 'transparent';
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 1.5; ctx.strokeRect(x + 7, y + 7, w - 14, h - 14); ctx.lineWidth = 0.6; ctx.strokeRect(x + 11, y + 11, w - 22, h - 22);
    ctx.restore();
  }
  function strike(ctx, x0, x1, y, p, w = 5) {   // a burin line struck through lettering
    if (p <= 0) return; ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round';
    const xe = lerp(x0, x1, eo(p)); ctx.beginPath(); ctx.moveTo(x0, y + 4); ctx.quadraticCurveTo((x0 + xe) / 2, y - 6, xe, y - 2); ctx.lineWidth = w; ctx.stroke(); ctx.restore();
  }

  // =================== FIGURES (original drawings; built once, cut in time) ===================
  // --- the gum: a chewed lump, local radius ~27 ---
  const GUM_D = 'M-27 -4 C-27 -18 -14 -27 0 -25 C9 -24 14 -28 21 -22 C28 -16 29 -4 27 6 C25 18 14 26 1 25 C-8 24 -12 27 -19 22 C-27 16 -27 8 -27 -4 Z';
  function gumAt(x, y, s, t0, span = 1.6, seed = 5) {
    const g = fig(GUM_D, xf(x, y, s), { spacing: 2.9, seed, contour: true, extra: (ink) => {
      ink.group('h3'); stroke(ink, [[x - 14 * s, y - 6 * s], [x - 2 * s, y - 2 * s], [x + 12 * s, y - 8 * s]], 1.3, { taper: 6 });
      stroke(ink, [[x - 8 * s, y + 10 * s], [x + 6 * s, y + 12 * s]], 1.1, { taper: 5 }); } }, t0, span);
    g.x = x; g.y = y; g.s = s; return g;
  }
  function drawGumFig(ctx, g, t, washT0, seed = 1) { occlude(ctx, [g.sh]); bloom(ctx, g.sh.path, t, washT0, 1.0, g.x - 10 * g.s, g.y - 8 * g.s, 40 * g.s, ROSE, 0.46, seed); g.ink.draw(ctx, t); }
  const G0 = gumAt(400, 410, 4.2, -1.3, 3.0, 5);
  const G4 = gumAt(505, 418, 1.5, 23.3, 1.1, 6);
  const G5 = gumAt(640, 380, 4.4, 29.9, 2.0, 7);
  const G13 = gumAt(640, 400, 4.0, 96.0, 1.8, 8);
  const GS = gumAt(0, 0, 1, -9, 1, 9);   // the small travelling piece, drawn wherever it is
  function smallGum(ctx, x, y, s, t, rot = 0, sq = 1) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s * sq);
    occlude(ctx, [GS.sh]); ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.translate(1.2, 0.8); ctx.fillStyle = H.rgba(ROSE, 0.5); ctx.fill(GS.sh.path); ctx.restore();
    GS.ink.draw(ctx, 99, { wScale: 1 / Math.max(0.6, s) * 0.9 }); ctx.restore();
  }

  // --- the anatomical plate: torso bust with the digestive route (front view, screen units) ---
  const TORSO_D = 'M640 66 C676 66 700 94 700 130 C700 160 688 182 668 192 L668 212 C720 222 790 230 812 262 C824 300 820 360 806 420 C796 470 792 520 800 600 C790 650 760 680 720 690 L560 690 C520 680 490 650 480 600 C488 520 484 470 474 420 C460 360 456 300 468 262 C490 230 560 222 612 212 L612 192 C592 182 580 160 580 130 C580 94 604 66 640 66 Z';
  const STOM_D = 'M656 322 C670 296 730 292 756 330 C780 368 772 430 730 456 C696 476 656 460 628 432 L622 412 C646 410 668 404 680 392 C692 380 690 356 680 344 C672 336 662 332 656 322 Z';
  const ROUTE = [[640, 150], [641, 200], [646, 270], [658, 318],                                  // 0-3 mouth, food pipe
    [700, 312], [744, 342], [752, 400], [724, 446], [684, 452], [650, 438], [624, 422],            // 4-10 stomach to the gate
    [608, 450], [604, 505], [700, 528], [592, 548], [700, 568], [592, 588], [690, 604], [600, 612], // 11-18 small intestine
    [575, 630], [566, 640],                                                                       // 19-20 into the large intestine
    [560, 560], [562, 490], [600, 482], [680, 482], [728, 490], [734, 560], [732, 630], [704, 655], [664, 662], [644, 674], [641, 700]]; // 21-31
  const seg = (a, b) => smoothPts(ROUTE.slice(a, b + 1), 6);
  const LI_PTS = [[568, 648], [560, 560], [562, 486], [600, 478], [680, 478], [730, 486], [736, 560], [734, 632], [704, 657], [664, 664], [644, 676], [641, 690]];
  const ANAT = (() => {
    const T0 = 13.35;
    const torso = fig(TORSO_D, xf(0, 0, 1), { light: true, spacing: 4.6, base: -0.04, wOl: 2.2, seed: 11 }, T0, 2.2);
    const li = fig(tubeShape(LI_PTS, 26), xf(0, 0, 1), { contour: true, spacing: 2.8, base: 0.1, seed: 12 }, T0 + 0.6, 2.0);
    const si = fig(B.ellipse(645, 562, 72, 56), xf(0, 0, 1), { light: true, spacing: 3.4, base: 0.02, seed: 13 }, T0 + 0.8, 1.6);
    const coilPts = seg(12, 18);
    const coils = lines([[offsetPts(coilPts, 6.5), 2.2, 10], [offsetPts(coilPts, -6.5), 2.2, 10], [coilPts, 0.6, 10]], T0 + 1.0, T0 + 2.6, 3);
    const duo = fig(tubeShape(ROUTE.slice(10, 13), 15), xf(0, 0, 1), { contour: true, spacing: 2.6, base: 0.1, seed: 14 }, T0 + 0.7, 1.6);
    const stom = fig(STOM_D, xf(0, 0, 1), { contour: true, spacing: 3.0, base: 0.08, seed: 15 }, T0 + 0.4, 2.0);
    const eso = fig(tubeShape(ROUTE.slice(0, 4).map((p, i) => i ? p : [640, 178]), 14), xf(0, 0, 1), { contour: true, spacing: 2.6, base: 0.12, seed: 16 }, T0 + 0.3, 1.6);
    const face = lines([[[[624, 122], [632, 120], [638, 123]], 1.4, 4], [[[644, 123], [650, 120], [658, 122]], 1.4, 4], [[[636, 150], [640, 152], [646, 150]], 1.6, 4], [[[640, 128], [637, 140], [642, 142]], 1.0, 4]], T0 + 0.8, T0 + 1.4, 4);
    return { torso, li, si, coils, duo, stom, eso, face, coilPts };
  })();
  function drawAnat(ctx, t, o = {}) {
    const ws = o.ws || 1, d = { wScale: ws };
    ANAT.torso.ink.draw(ctx, t, d); ANAT.face.draw(ctx, t, d);
    occlude(ctx, [ANAT.li.sh]); ANAT.li.ink.draw(ctx, t, d);
    occlude(ctx, [ANAT.si.sh]); ANAT.si.ink.draw(ctx, t, d); ANAT.coils.draw(ctx, t, d);
    occlude(ctx, [ANAT.duo.sh]); ANAT.duo.ink.draw(ctx, t, d);
    occlude(ctx, [ANAT.stom.sh]); ANAT.stom.ink.draw(ctx, t, d);
    occlude(ctx, [ANAT.eso.sh]); ANAT.eso.ink.draw(ctx, t, d);
    if (o.route > 0) {   // dotted route, cut from the mouth onward
      const pts = smoothPts(ROUTE, 6), c = pathLen(pts), L = c[c.length - 1] * o.route;
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.2 * ws; ctx.setLineDash([2 * ws, 7 * ws]); ctx.lineCap = 'round'; ctx.beginPath();
      for (let i = 0; i < pts.length && c[i] <= L; i++) i ? ctx.lineTo(...pts[i]) : ctx.moveTo(...pts[i]); ctx.stroke(); ctx.restore();
    }
  }

  // --- intro: seven calendar leaves ---
  const LEAVES = [0, 1, 2, 3, 4, 5, 6].map((i) => fig('M-40 -52 L40 -52 L40 40 L28 52 L-40 52 Z', xf(250 + i * 130, 300, 1), { light: true, spacing: 3.6, base: 0.02, seed: 20 + i, extra: (ink) => { ink.group('ol'); const x = 250 + i * 130; stroke(ink, [[x - 30, 266], [x + 30, 266]], 1.2, { taper: 4 }); stroke(ink, [[x + 28, 352], [x + 30, 340], [x + 40, 340]], 1.1, { taper: 3 }); } }, 7.0 + i * 0.32, 0.9));
  const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

  // --- chapter I: the big stomach ---
  const STOM_BIG = fig(STOM_D, xf(505 - 690 * 2.3, 410 - 380 * 2.3, 2.3), { contour: true, spacing: 3.4, base: 0.06, seed: 31 }, 22.7, 2.2);
  const ESO_BIG = fig(tubeShape([[628, 236], [646, 288], [661, 328]].map(([x, y]) => [505 + (x - 690) * 2.3, 410 + (y - 380) * 2.3]), 30), xf(0, 0, 1), { contour: true, spacing: 3.0, base: 0.1, seed: 32 }, 22.6, 1.6);
  const QMARK = lines([[smoothPts([[905, 445], [912, 420], [940, 412], [962, 428], [958, 452], [936, 466], [934, 492]], 6), 6, 12], [circlePts(934, 512, 3.5, 12), 4, 1]], 26.8, 27.6, 2);

  // --- chapter II: birch tar, DNA, the sapodilla, the 1870s packet, the recipe ---
  const TAR = fig('M-62 -10 C-60 -40 -30 -58 4 -54 C34 -52 60 -36 64 -6 C68 24 46 50 14 54 C-16 58 -48 46 -58 22 C-62 12 -63 0 -62 -10 Z', xf(420, 410, 2.3), { contour: true, spacing: 3.0, base: 0.34, seed: 41 }, 45.4, 2.6);
  const TEETH = lines([-3, -1, 1, 3].map((k) => [smoothPts([[420 + k * 26 - 12, 300], [420 + k * 26, 290], [420 + k * 26 + 12, 300]], 4), 2.6, 4]), P(16, 'tooth'), P(16, 'tooth') + 0.6, 4);
  const DNA = (() => {
    const cx = 930, cy = 520, L = [];
    const strand = (ph0) => { const pts = []; for (let i = 0; i <= 40; i++) { const y = cy - 80 + i * 4; pts.push([cx + Math.sin(i * 0.33 + ph0) * 34, y]); } return pts; };
    L.push([strand(0), 2.6, 6], [strand(Math.PI), 2.6, 6]);
    for (let i = 2; i < 40; i += 4) { const y = cy - 80 + i * 4, a = Math.sin(i * 0.33) * 34; L.push([[[cx + a, y], [cx - a, y]], 1.2, 3]); }
    return lines(L, 52.3, 53.5, 6);
  })();
  const TREE = (() => {
    const bx = 430, by = 650;
    const trunk = fig('M-34 0 C-30 -80 -28 -170 -22 -250 L22 -250 C28 -170 30 -80 38 0 Z', xf(bx, by, 1), { contour: true, spacing: 3.0, base: 0.16, seed: 51 }, 56.0, 2.0);
    const crowns = [[-95, -300, 88, 58], [92, -305, 92, 60], [0, -350, 110, 70], [-55, -262, 80, 46], [62, -258, 80, 46]].map(([dx, dy, rx, ry], i) =>
      fig(B.ellipse(bx + dx, by + dy, rx, ry, (i - 2) * 0.12), xf(0, 0, 1), { spacing: 3.4, base: 0.12 + i * 0.03, seed: 52 + i }, 56.2 + i * 0.15, 1.8));
    const zz = []; for (let k = 0; k < 7; k++) { const y = by - 30 - k * 24; zz.push([[bx - 18, y - 12], [bx + 2, y], [bx + 20, y - 12]]); }
    const cuts = lines([...zz.map((p) => [p, 2.4, 4]), [[[bx + 2, by - 30], [bx + 4, by - 6], [bx + 40, by - 44]], 1.0, 4]], P(18, 'tapped'), P(18, 'tapped') + 1.0, 3);
    const cup = fig('M-24 0 L24 0 L19 28 L-19 28 Z', xf(bx + 52, by - 46, 1), { spacing: 2.4, base: 0.2, seed: 58 }, P(18, 'tapped') + 0.5, 0.8);
    return { trunk, crowns, cuts, cup, bx, by };
  })();
  const PACKET = (() => {
    const cx = 880, cy = 410;
    const front = fig(`M${cx - 130} ${cy - 80} L${cx + 130} ${cy - 80} L${cx + 130} ${cy + 80} L${cx - 130} ${cy + 80} Z`, xf(0, 0, 1), { light: true, spacing: 3.6, base: -0.02, seed: 61 }, 62.0, 1.6);
    const side = fig(`M${cx + 130} ${cy - 80} L${cx + 160} ${cy - 104} L${cx + 160} ${cy + 56} L${cx + 130} ${cy + 80} Z`, xf(0, 0, 1), { spacing: 2.6, base: 0.5, seed: 62, angle: 0.9 }, 62.2, 1.4);
    const top = fig(`M${cx - 130} ${cy - 80} L${cx - 100} ${cy - 104} L${cx + 160} ${cy - 104} L${cx + 130} ${cy - 80} Z`, xf(0, 0, 1), { spacing: 2.8, base: 0.22, seed: 63, angle: 0.1 }, 62.3, 1.4);
    const rules = lines([[[[cx - 116, cy - 66], [cx + 116, cy - 66], [cx + 116, cy + 66], [cx - 116, cy + 66], [cx - 116, cy - 66]], 1.4, 1], [[[cx - 110, cy - 60], [cx + 110, cy - 60], [cx + 110, cy + 60], [cx - 110, cy + 60], [cx - 110, cy - 60]], 0.6, 1]], 63.0, 63.8, 2);
    return { front, side, top, rules, cx, cy };
  })();
  const BOWL_D = 'M-80 0 C-78 84 78 84 80 0 Z';
  function bowl(x, y, s, t0, seed) {
    return fig(BOWL_D, xf(x, y, s), { contour: true, spacing: 3.0, base: 0.12, seed, extra: (ink) => { ink.group('ol'); stroke(ink, B.ellipsePts(x, y, 80 * s, 14 * s, 0, 60), 1.8, { taper: 1 }); } }, t0, 1.2);
  }
  const BOWLS = { base: bowl(640, 300, 2.0, 69.3, 71), sweet: bowl(330, 560, 0.85, P(23, 'sweetener') - 0.1, 72), soft: bowl(640, 575, 0.85, P(23, 'softeners') - 0.1, 73), flav: bowl(950, 560, 0.85, P(23, 'flavour') - 0.1, 74) };
  const POLY = (() => {   // a tangle of long chains piled in the big bowl
    const R = RNG(77), pts = []; let x = 560, y = 318, a = 0;
    for (let i = 0; i < 130; i++) { a += (R() - 0.5) * 1.6; x += Math.cos(a) * 9; y += Math.sin(a) * 5; if (x < 520 || x > 760) a = Math.PI - a; if (y < 236 || y > 300) a = -a; x = clamp(x, 516, 764); y = clamp(y, 232, 304); pts.push([x, y]); }
    const sm = smoothPts(pts, 4); return lines([[offsetPts(sm, 2.2), 1.6, 20], [offsetPts(sm, -2.2), 1.6, 20]], P(22, 'polymers') - 0.4, P(22, 'polymers') + 1.0, 2);
  })();

  // --- chapter III: flask, scissors, bead chains, tangled chain, acid drops, corn ---
  const FLASK = fig('M-14 -80 L14 -80 L14 -30 C50 -18 64 10 60 36 C54 70 -54 70 -60 36 C-64 10 -50 -18 -14 -30 Z', xf(640, 604, 0.7), { contour: true, spacing: 2.6, base: 0.04, seed: 81 }, P(25, 'chemistry') - 0.2, 1.3);
  const BLADE = fig('M0 -4 L118 -3 C124 -1 124 2 118 4 L0 7 C-10 8 -18 10 -26 16 L-32 12 C-24 4 -12 -2 0 -4 Z', xf(0, 0, 1), { spacing: 2.2, base: 0.25, seed: 82, wOl: 1.6, extra: (ink) => { ink.group('ol'); stroke(ink, circlePts(-44, 20, 15, 40), 3.4, { taper: 1 }); stroke(ink, circlePts(-44, 20, 9, 30), 1.0, { taper: 1 }); } }, -9, 1);
  function scissors(ctx, x, y, s, open, rot = 0, a = 1) {
    if (a <= 0) return; ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    ctx.save(); ctx.rotate(-open / 2); ctx.scale(1, -1); BLADE.ink.draw(ctx, 99, { wScale: 1 / s }); ctx.restore();
    ctx.save(); ctx.rotate(open / 2); occlude(ctx, [BLADE.sh]); BLADE.ink.draw(ctx, 99, { wScale: 1 / s }); ctx.restore();
    ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(0, 1, 3.2, 0, 7); ctx.fill(); ctx.restore();
  }
  const BEADS = [fig(ring([0, 1, 2, 3, 4, 5].map((k) => [Math.cos(k / 6 * 6.283) * 14, Math.sin(k / 6 * 6.283) * 14])), xf(0, 0, 1), { spacing: 2.2, contour: true, seed: 83 }, -9, 1),
    fig(B.ellipse(0, 0, 13, 13), xf(0, 0, 1), { spacing: 2.2, contour: true, seed: 84 }, -9, 1),
    fig('M0 -15 L12 0 L0 15 L-12 0 Z', xf(0, 0, 1), { spacing: 2.2, contour: true, seed: 85 }, -9, 1)];
  const TANGLE = (() => {
    const R = RNG(91), cx = 540, cy = 395, pts = []; let x = cx, y = cy, a = 0.4;
    for (let i = 0; i < 150; i++) { a += (R() - 0.5) * 1.3; const nx = x + Math.cos(a) * 11, ny = y + Math.sin(a) * 11; if (Math.hypot(nx - cx, ny - cy) > 170) { a += Math.PI * 0.8; continue; } x = nx; y = ny; pts.push([x, y]); }
    const sm = smoothPts(pts, 3); return lines([[offsetPts(sm, 3), 1.9, 30], [offsetPts(sm, -3), 1.9, 30], [sm, 0.5, 30]], 100.3, 103.2, 3);
  })();
  const DROP = fig('M0 -16 C6 -6 10 2 10 7 C10 13 5 17 0 17 C-5 17 -10 13 -10 7 C-10 2 -6 -6 0 -16 Z', xf(0, 0, 1), { spacing: 2, contour: true, base: 0.1, seed: 92 }, -9, 1);
  const CORN = fig('M0 -42 C24 -42 34 -12 28 14 C22 34 8 46 0 46 C-8 46 -22 34 -28 14 C-34 -12 -24 -42 0 -42 Z', xf(380, 380, 2.0), { contour: true, spacing: 3.0, base: 0.08, seed: 93 }, 113.4, 1.6);
  const SEEDS = [[600, 360, 0.4], [668, 392, -0.5], [620, 432, 1.1]].map(([x, y, r], i) => fig(B.ellipse(x, y, 24, 14, r), xf(0, 0, 1), { contour: true, spacing: 2.6, base: 0.2, seed: 94 + i }, 114.0 + i * 0.25, 1.0));
  const FIBRE = (() => { const L = []; for (let k = 0; k < 9; k++) { const pts = []; for (let i = 0; i <= 30; i++) pts.push([840 + i * 4.6, 320 + k * 9 + Math.sin(i * 0.35 + k) * 10 + i * 2.2]); L.push([pts, 1.6 + (k % 3) * 0.4, 14]); } return lines(L, 114.6, 115.8, 9); })();

  // --- chapter IV: dial, broom ---
  const DIAL = { x: 640, y: 390, r: 170 };
  const DIALINK = (() => {
    const L = [[circlePts(DIAL.x, DIAL.y, DIAL.r, 160), 2.8, 1], [circlePts(DIAL.x, DIAL.y, DIAL.r - 9, 160), 0.9, 1]];
    for (let i = 0; i < 24; i++) { const a = -Math.PI / 2 + i / 24 * Math.PI * 2, r0 = DIAL.r - (i % 2 ? 24 : 38); L.push([[[DIAL.x + Math.cos(a) * r0, DIAL.y + Math.sin(a) * r0], [DIAL.x + Math.cos(a) * (DIAL.r - 13), DIAL.y + Math.sin(a) * (DIAL.r - 13)]], i % 2 ? 1.2 : 2.4, 2]); }
    return lines(L, 143.6, 144.8, 8);
  })();
  const BROOM = (() => {
    const handle = fig(tubeShape([[0, -300], [0, -60]], 13), xf(0, 0, 1), { contour: true, spacing: 2.4, base: 0.2, seed: 101 }, 153.4, 1.0);
    const headF = fig('M-46 -60 L46 -60 L74 40 L-74 40 Z', xf(0, 0, 1), { spacing: 2.8, base: 0.18, seed: 102, angle: 1.4, extra: (ink) => { ink.group('h1'); for (let k = -11; k <= 11; k++) stroke(ink, [[k * 3.8, -56], [k * 6.2, 40]], 1.2, { taper: 10 }); ink.group('ol'); stroke(ink, [[-50, -40], [50, -40]], 2.2, { taper: 3 }); } }, 153.6, 1.2);
    return { handle, headF };
  })();

  // --- chapter V: the clump, coins, the bin, the paper wad ---
  const BALL = fig(ring(Array.from({ length: 80 }, (_, i) => { const a = i / 80 * 6.283, r = 74 * (1 + 0.1 * Math.sin(a * 5 + 1) + 0.06 * Math.sin(a * 9)); return [640 + Math.cos(a) * r, 410 + Math.sin(a) * r]; })), xf(0, 0, 1),
    { contour: true, spacing: 3.0, base: 0.1, seed: 111, extra: (ink) => { ink.group('h3'); const R = RNG(4); for (let k = 0; k < 9; k++) { const a = R() * 6.283, r = 20 + R() * 40, x = 640 + Math.cos(a) * r, y = 410 + Math.sin(a) * r; stroke(ink, [[x - 14, y - 4], [x, y + 3], [x + 14, y - 5]], 1.3, { taper: 5 }); } } }, P(54, 'clumped') + 0.2, 1.4);
  const COINS = [[700, 360], [586, 452]].map(([x, y], i) => fig(B.ellipse(x, y, 24, 24), xf(0, 0, 1), { contour: true, spacing: 2.2, base: 0.25, seed: 112 + i, extra: (ink) => { ink.group('ol'); stroke(ink, circlePts(x, y, 17, 40), 1.0, { taper: 1 }); } }, P(54, 'coins') - 0.1, 0.8));
  const BIN = fig('M-112 -120 L112 -120 L88 122 L-88 122 Z', xf(640, 460, 1), { light: true, spacing: 3.6, base: 0.06, seed: 121,
    extra: (ink) => { ink.group('h1'); for (let k = -9; k <= 9; k++) stroke(ink, [[640 + k * 11.6, 344], [640 + k * 9.1, 578]], 1.3, { taper: 12 }); ink.group('ol'); stroke(ink, B.ellipsePts(640, 340, 112, 16, 0, 60), 2.2, { taper: 1 }); } }, 189.9, 1.6);
  const WAD = fig(ring(Array.from({ length: 30 }, (_, i) => { const a = i / 30 * 6.283, r = 20 * (1 + 0.2 * Math.sin(a * 4) + 0.1 * Math.sin(a * 9 + 2)); return [Math.cos(a) * r, Math.sin(a) * r]; })), xf(0, 0, 1), { contour: true, spacing: 2.2, base: 0.05, seed: 122 }, -9, 1);

  // --- teaser: a three-toed sloth hanging from a branch ---
  const SLOTH = (() => {
    const T0 = 204.4;
    const branch = fig(tubeShape([[120, 150], [420, 136], [760, 152]], 24), xf(0, 0, 1), { contour: true, spacing: 2.8, base: 0.28, seed: 131 }, T0, 1.4);
    const limbs = [[[440, 300], [420, 210], [404, 146]], [[520, 300], [548, 214], [566, 148]], [[460, 360], [420, 270], [330, 150]], [[540, 360], [600, 280], [660, 152]]].map((p, i) => fig(tubeShape(p, 22), xf(0, 0, 1), { contour: true, spacing: 2.8, base: 0.2, seed: 132 + i }, T0 + 0.2, 1.4));
    const body = fig(B.ellipse(490, 330, 92, 62, 0.08), xf(0, 0, 1), { contour: true, spacing: 3.0, base: 0.16, seed: 137 }, T0 + 0.3, 1.6);
    const headS = fig(B.ellipse(392, 342, 40, 36), xf(0, 0, 1), { contour: true, spacing: 2.6, base: 0.1, seed: 138 }, T0 + 0.5, 1.2);
    const face = lines([[smoothPts([[372, 338], [380, 332], [392, 340]], 4), 4, 4], [smoothPts([[396, 340], [406, 332], [414, 338]], 4), 4, 4], [smoothPts([[386, 356], [394, 360], [402, 356]], 4), 1.6, 3], [circlePts(381, 340, 2.5, 10), 3, 1], [circlePts(405, 340, 2.5, 10), 3, 1]], T0 + 1.1, T0 + 1.6, 5);
    return { branch, limbs, body, headS, face };
  })();


  // =================== SCENES ===================
  const SC = [];
  const add = (a, tr, d) => SC.push({ a, tr, d });
  const textW = (c, str, size, track = 0.05, italic = false) => { c.save(); c.font = `${italic ? 'italic ' : ''}600 ${size}px "Bodoni Moda"`; const w = c.measureText(str).width + track * size * (str.length - 1); c.restore(); return w; };
  const pulse = (t, at, up = 0.12, down = 0.35) => (t < at - up || t > at + down) ? 0 : t < at ? (t - at + up) / up : 1 - (t - at) / down;
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
  // a gut tube seen from the side; sq(x) 0..1 pinches the walls; p cuts it in from the left
  function tube(c, t, sq, p = 1, y = 400, r = 80, x0 = 110, x1 = 1170) {
    const xe = lerp(x0, x1, p); if (xe <= x0) return;
    c.save(); c.strokeStyle = PAL.ink; c.lineCap = 'round';
    for (const side of [-1, 1]) {
      const wall = (off) => { c.beginPath(); for (let x = x0; x <= xe; x += 5) { const yy = y + side * (r * (1 - 0.8 * sq(x)) + off); x === x0 ? c.moveTo(x, yy) : c.lineTo(x, yy); } c.stroke(); };
      c.lineWidth = 3.4; wall(0); c.lineWidth = 1.5; wall(7); c.lineWidth = 1.1; wall(12); c.lineWidth = 0.8; wall(17); c.lineWidth = 0.5; wall(22);
      c.lineWidth = 0.7; for (let x = x0 + 4; x <= xe; x += 8) { const yy = y + side * r * (1 - 0.8 * sq(x)); c.beginPath(); c.moveTo(x, yy + side * 3); c.lineTo(x + 3, yy + side * 24); c.stroke(); }
      c.lineWidth = 0.5; c.setLineDash([2, 6]); wall(-6); c.setLineDash([]);
    }
    c.restore();
  }

  // ---- intro ----
  add(0, 'none', (c, t) => {
    head(c, t, -0.5, 'A BOOK OF CURIOUS PLATES', 'ON SWALLOWED GUM');
    drawGumFig(c, G0, t, 1.0, 3);
    const s0 = P(0, 'seven') - 0.15, wv = textW(c, 'VII YEARS', 76);
    big(c, t, 'VII YEARS', 920, 375, s0, 76);
    strike(c, 920 - wv / 2 - 14, 920 + wv / 2 + 14, 352, ph(t, P(1, 'gone') - 0.1, P(1, 'gone') + 0.35), 6);
    note(c, t, 'a few days', 920, 478, P(1, 'few') - 0.15, 66);
    ital(c, t, 'one piece, swallowed', 400, 610, 1.4, 24);
  });
  add(S(2), 'tissue', (c, t) => {
    head(c, t, S(2), 'THE STORY EVERYONE KNOWS', 'THE SEVEN-YEAR STORY');
    LEAVES.forEach((L, i) => { occlude(c, [L.sh]); L.ink.draw(c, t); engraveText(c, ROMAN[i], 250 + i * 130, 318, { size: 34, weight: 600, p: ph(t, 7.4 + i * 0.32, 7.8 + i * 0.32) }); });
    big(c, t, 'WHAT HAPPENS INSIDE YOU?', W / 2, 520, P(3, 'happens') - 0.2, 44, { track: 0.06 });
    ital(c, t, 'a question for the loupe', W / 2, 575, P(3, 'inside'), 24);
  });
  add(S(4), 'tissue', (c, t) => {
    drawAnat(c, t, { route: eio(ph(t, P(4, 'follow'), PH[4].e)) });
    smallGum(c, 640, 150, 0.42, t);
    cap(c, t, 'THE ROUTE', 250, 300, S(4) + 0.3, 30);
    note(c, t, 'mouth to exit', 250, 352, P(4, 'swallowed'), 40);
    ital(c, t, 'all the way through', 1030, 330, P(4, 'way'), 24);
  });

  // ---- chapter I: the myth ----
  card('I', 'THE SEVEN-YEAR MYTH', S(5), (c, t) => note(c, t, 'heard by almost every kid', W / 2, 560, P(6, 'everyone'), 40));
  add(S(7), 'tissue', (c, t) => {
    head(c, t, S(7), 'PLATE  I', 'THE MYTH');
    occlude(c, [ESO_BIG.sh]); ESO_BIG.ink.draw(c, t); occlude(c, [STOM_BIG.sh]); STOM_BIG.ink.draw(c, t);
    drawGumFig(c, G4, t, 23.9, 4);
    const k = Math.floor(ph(t, P(7, 'sits'), P(7, 'seven')) * 6.999);
    if (t < P(7, 'years')) cap(c, t, 'YEAR ' + ROMAN[k], 940, 330, P(7, 'sits'), 44);
    else big(c, t, 'VII YEARS?', 940, 330, P(7, 'years') - 0.05, 52);
    QMARK.draw(c, t);
    note(c, t, 'origin unknown', 940, 590, P(8, 'knows'), 40);
  });
  add(S(9), 'tissue', (c, t) => {
    const R = { x: 640, y: 380, r: 215 };
    c.save(); c.beginPath(); c.arc(R.x, R.y, R.r, 0, 7); c.clip(); c.fillStyle = c.createPattern(sheet(), 'no-repeat'); c.fill();
    c.strokeStyle = 'rgba(28,21,16,0.16)'; c.lineWidth = 1; for (let yy = R.y - R.r; yy < R.y + R.r; yy += 11) { c.beginPath(); c.moveTo(R.x - R.r, yy); c.lineTo(R.x + R.r, yy); c.stroke(); }
    drawGumFig(c, G5, t, 30.6, 5); c.restore();
    roundelFrame(c, R.x, R.y, R.r, { p: ph(t, S(9), S(9) + 0.7), w: 3.2 });
    note(c, t, 'a grain of truth', 215, 395, P(9, 'grain'), 40);
    cap(c, t, 'NOT DIGESTED', 640, 652, P(10, 'digest') - 0.1, 30);
    note(c, t, "it doesn't need to be", 1070, 395, S(11), 36);
  });

  // ---- chapter II: what gum is made of ----
  card('II', 'WHAT GUM IS MADE OF', S(12), (c, t) => {
    const k = eo(ph(t, S(13), S(13) + 1.2)); if (k <= 0) return;
    c.save(); c.strokeStyle = PAL.ink; c.lineCap = 'round'; c.lineWidth = 2; c.beginPath(); c.moveTo(300, 560); c.lineTo(lerp(300, 980, k), 560); c.stroke();
    [[300, 'c. 3700 BC', 0.0], [860, '1870s', 0.82], [980, 'today', 1.0]].forEach(([x, s, u]) => { if (k >= u) { c.lineWidth = 2.4; c.beginPath(); c.moveTo(x, 550); c.lineTo(x, 572); c.stroke(); ital(c, t, s, x, 605, S(13) + 1.2 * u, 22); } });
    c.restore(); ital(c, t, 'thousands of years of chewing', W / 2, 650, P(13, 'thousands'), 22);
  });
  add(S(14), 'tissue', (c, t) => {
    head(c, t, S(14), 'PLATE  II', 'THE OLDEST GUM');
    occlude(c, [TAR.sh]); TAR.ink.draw(c, t); TEETH.draw(c, t);
    ital(c, t, 'chewed birch tar', 420, 590, P(14, 'birch'), 24);
    cap(c, t, 'DENMARK', 420, 628, P(14, 'denmark'), 18);
    big(c, t, '5,700 YEARS', 930, 290, P(15, 'five') - 0.1, 58);
    ital(c, t, 'old', 930, 336, P(15, 'old'), 26);
    const a = ph(t, 52.0, 52.4);
    if (a > 0) {
      c.save(); c.beginPath(); c.arc(930, 520, 108, 0, 7); c.fillStyle = c.createPattern(sheet(), 'no-repeat'); c.fill(); c.restore();
      DNA.draw(c, t); roundelFrame(c, 930, 520, 108, { p: ph(t, 52.0, 52.6), w: 3 });
      leader(c, [512, 430], [822, 520], { p: ph(t, 52.1, 52.6), w: 1.2 });
      ital(c, t, "the chewer's DNA", 930, 664, 52.6, 22);
    }
    ital(c, t, 'tooth marks', 420, 262, P(16, 'tooth') + 0.2, 22);
  });
  add(S(17), 'tissue', (c, t) => {
    head(c, t, S(17), 'PLATE  III', "THE MAYA'S CHICLE");
    for (const cr of TREE.crowns) { occlude(c, [cr.sh]); cr.ink.draw(c, t); }
    occlude(c, [TREE.trunk.sh]); TREE.trunk.ink.draw(c, t); TREE.cuts.draw(c, t); occlude(c, [TREE.cup.sh], ph(t, 59.0, 59.3)); TREE.cup.ink.draw(c, t);
    const d = ph(t, P(18, 'sap'), P(18, 'sap') + 1.4);   // a drop of sap runs down to the cup
    if (d > 0 && d < 1) { c.save(); c.fillStyle = PAL.ink; const y = lerp(TREE.by - 40, TREE.by - 24, d); c.beginPath(); c.arc(TREE.bx + 30 + d * 10, y, 2.6, 0, 7); c.fill(); c.restore(); }
    note(c, t, 'chicle', 930, 300, P(17, 'chicle') - 0.1, 66);
    ital(c, t, 'Manilkara zapota', 930, 392, P(18, 'sapodilla'), 28);
    cap(c, t, 'THE SAPODILLA TREE', 930, 430, P(18, 'sapodilla') + 0.3, 17);
    ital(c, t, 'milky sap, tapped from the bark', 930, 500, P(18, 'milky'), 22);
  });
  add(S(19), 'tissue', (c, t) => {
    head(c, t, S(19), 'PLATE  IV', 'CHICLE GOES ON SALE');
    big(c, t, '1870s', 360, 340, P(19, 'eighteen') - 0.1, 104);
    note(c, t, 'Thomas Adams', 360, 440, P(19, 'thomas') - 0.1, 50);
    ital(c, t, 'inventor, New York', 360, 490, P(19, 'thomas') + 0.6, 22);
    for (const f of [PACKET.side, PACKET.top, PACKET.front]) { occlude(c, [f.sh]); f.ink.draw(c, t); }
    PACKET.rules.draw(c, t);
    cap(c, t, 'NEW YORK', PACKET.cx, PACKET.cy - 30, 63.3, 14, { track: 0.3 });
    cap(c, t, 'CHICLE', PACKET.cx, PACKET.cy + 14, 63.6, 42);
    ital(c, t, 'chewing gum', PACKET.cx, PACKET.cy + 48, 64.1, 22);
    note(c, t, 'sold across America', PACKET.cx, 590, P(20, 'america') - 0.4, 40);
  });
  add(S(21), 'tissue', (c, t) => {
    head(c, t, S(21), 'PLATE  V', 'THE RECIPE');
    for (const b of Object.values(BOWLS)) { occlude(c, [b.sh]); b.ink.draw(c, t); }
    POLY.draw(c, t);
    cap(c, t, 'GUM BASE', 640, 452, P(21, 'base') - 0.1, 26);
    ital(c, t, 'rubbery, food-grade polymers', 640, 484, P(22, 'polymers') - 0.2, 22);
    cap(c, t, 'SWEETENER', 330, 650, P(23, 'sweetener'), 18); cap(c, t, 'SOFTENERS', 640, 664, P(23, 'softeners'), 18); cap(c, t, 'FLAVOUR', 950, 650, P(23, 'flavour'), 18);
  });

  // ---- chapter III: why you can't digest it ----
  card('III', "WHY YOU CAN'T DIGEST IT", S(24), (c, t) => { occlude(c, [FLASK.sh]); FLASK.ink.draw(c, t); ital(c, t, 'chemistry', 780, 622, P(25, 'chemistry'), 24); });
  add(S(26), 'tissue', (c, t) => {
    head(c, t, S(26), 'PLATE  VI', 'ENZYMES', 'tiny molecular scissors', P(27, 'molecular'));
    const XS = [300, 640, 980], LBL = ['SPIT', 'STOMACH', 'GUT'], LT = [P(26, 'spit'), P(26, 'stomach'), P(26, 'gut')];
    const CUT = [P(28, 'cuts', 1), P(28, 'cuts', 2), P(28, 'cuts', 3)], NM = ['starch', 'protein', 'fat'], NT = [P(28, 'starch'), P(28, 'protein'), P(28, 'fat')];
    XS.forEach((x, i) => {
      cap(c, t, LBL[i], x, 196, LT[i] - 0.1, 22);
      const app = eo(ph(t, LT[i], LT[i] + 0.5));
      const open = 0.55 - 0.5 * Math.max(pulse(t, P(27, 'snip')), pulse(t, CUT[i] + 0.05));
      scissors(c, x, lerp(250, 292, app), 0.9, open, Math.PI / 2, app);
      const show = ph(t, CUT[i] - 1.1, CUT[i] - 0.7); if (show <= 0) return;
      const sp = eo(ph(t, CUT[i] + 0.05, CUT[i] + 0.5)) * 16;
      c.save(); c.globalAlpha = show; c.strokeStyle = PAL.ink; c.lineWidth = 2;
      const bx = (j) => x + (j - 3) * 30 + (j < 3.5 ? -sp : sp);
      for (let j = 0; j < 6; j++) if (j !== 3 || sp < 1) { c.beginPath(); c.moveTo(bx(j) + 13, 430); c.lineTo(bx(j + 1) - 13, 430); c.stroke(); }
      for (let j = 0; j < 7; j++) { c.save(); c.translate(bx(j), 430); occlude(c, [BEADS[i].sh]); BEADS[i].ink.draw(c, 99); c.restore(); }
      c.restore();
      ital(c, t, NM[i], x, 482, NT[i] - 0.1, 24);
    });
    if (t > S(28) - 0.5) note(c, t, 'snip, snip, snip', W / 2, 600, CUT[0], 40);
  });
  add(S(29), 'tissue', (c, t) => {
    head(c, t, S(29), 'PLATE  VII', 'IN YOUR MOUTH');
    drawGumFig(c, G13, t, 96.6, 6);
    const k0 = P(29, 'sugar'), R = RNG(9);
    c.save(); c.fillStyle = PAL.ink;
    for (let i = 0; i < 70; i++) { const an = R() * 6.283, d0 = 90 + R() * 30, sp = 60 + R() * 120, st = k0 + R() * 1.6, u = clamp((t - st) / 2.4); if (u <= 0) continue;
      const r = d0 + sp * eo(u); c.globalAlpha = 1 - u * 0.85; c.beginPath(); c.arc(640 + Math.cos(an) * r, 400 + Math.sin(an) * r * 0.8, 1.4 + R() * 1.4, 0, 7); c.fill(); }
    c.restore();
    note(c, t, 'sugar and flavour wash away', W / 2, 640, P(29, 'dissolve') - 0.3, 38);
  });
  add(S(30), 'tissue', (c, t) => {
    head(c, t, S(30), 'PLATE  VIII', 'THE GUM BASE');
    const R = { x: 540, y: 395, r: 200 };
    c.save(); c.beginPath(); c.arc(R.x, R.y, R.r, 0, 7); c.fillStyle = c.createPattern(sheet(), 'no-repeat'); c.fill(); c.restore();
    TANGLE.draw(c, t); roundelFrame(c, R.x, R.y, R.r, { p: ph(t, S(30), S(30) + 0.7), w: 3.2 });
    note(c, t, 'long, tangled chains', 1010, 236, P(30, 'tangled') - 0.1, 36);
    const ct = P(31, 'cut'), app = eio(ph(t, S(31) - 0.2, ct)), bounce = ct < t ? Math.exp(-(t - ct) * 4) * Math.sin((t - ct) * 22) * 0.25 : 0;
    const sx = lerp(1060, 815, app) + (t > ct ? 40 * eo(ph(t, ct, ct + 0.6)) : 0);
    scissors(c, sx, 400, 1.1, 0.5 - 0.3 * pulse(t, ct, 0.1, 0.2), Math.PI + bounce, ph(t, S(31) - 0.4, S(31)));
    ital(c, t, "nothing can cut them", 1010, 510, ct + 0.1, 24);
    const a0 = P(32, 'acid') - 0.6;
    for (let i = 0; i < 5; i++) { const st = a0 + i * 0.35, u = t - st; if (u < 0 || u > 2.2) continue;
      const x = 420 + i * 60, top = R.y - Math.sqrt(Math.max(0, R.r * R.r - (x - R.x) ** 2)) - 18;
      const y = u < 0.5 ? lerp(150, top, u / 0.5) : top + (u - 0.5) * 40, dx = u < 0.5 ? 0 : (x < R.x ? -1 : 1) * (u - 0.5) * 70;
      c.save(); c.globalAlpha = 1 - ph(u, 1.6, 2.2); c.translate(x + dx, y); occlude(c, [DROP.sh]); DROP.ink.draw(c, 99); c.restore(); }
    ital(c, t, 'stomach acid', 250, 262, P(32, 'acid'), 24);
    note(c, t, 'still rubbery', 1010, 620, P(33, 'rubbery'), 40);
  });
  add(S(34), 'tissue', (c, t) => {
    head(c, t, S(34), 'PLATE  IX', 'NOTHING NEW FOR YOUR GUT');
    occlude(c, [CORN.sh]); CORN.ink.draw(c, t); for (const s of SEEDS) { occlude(c, [s.sh]); s.ink.draw(c, t); } FIBRE.draw(c, t);
    ital(c, t, 'corn skins', 380, 530, 113.9, 24); ital(c, t, 'seeds', 640, 530, 114.4, 24); ital(c, t, 'fibre', 910, 530, 114.9, 24);
    note(c, t, 'every single day', W / 2, 625, P(35, 'every') - 0.2, 42);
  });

  // ---- chapter IV: the journey out ----
  card('IV', 'THE JOURNEY OUT', S(36), (c, t) => smallGum(c, W / 2, 575, 1.3, t, 0.2));
  const slipA = (t, a) => ph(t, a + 0.15, a + 0.5);
  add(S(37), 'lay', (c, t) => {
    withCam(c, camAt(t, [[S(37), 640, 300, 1.25], [S(37) + 1.4, 646, 245, 2.0]]), () => {
      drawAnat(c, t); const k = eio(ph(t, P(37, 'slides') - 0.2, P(37, 'seconds') + 0.4)); const p = along(seg(0, 3), k); smallGum(c, p[0], p[1], 0.42, t, k * 2);
    });
    slip(c, 56, 500, 350, 150, slipA(t, S(37)));
    cap(c, t, 'THE FOOD PIPE', 231, 560, S(37) + 0.5, 22); note(c, t, 'down in seconds', 231, 612, P(37, 'seconds') - 0.2, 38);
  });
  add(S(38), 'tissue', (c, t) => {
    withCam(c, camAt(t, [[S(38), 700, 388, 2.0], [S(39), 702, 392, 2.2]]), () => {
      drawAnat(c, t);
      const an = (t - S(38)) * 2.6, gx = 706 + Math.cos(an) * 24, gy = 386 + Math.sin(an) * 16; smallGum(c, gx, gy, 0.42, t, an);
      c.save(); c.strokeStyle = PAL.ink; c.lineCap = 'round'; c.lineWidth = 1.6;   // churning arrows round the stomach
      [[0, 0.2], [Math.PI, 0.6]].forEach(([o, d]) => { const k = ph(t, S(38) + d, S(38) + d + 0.8); if (k <= 0) return; const a0 = o + (t - S(38)) * 0.8, a1 = a0 + 1.6 * k;
        c.beginPath(); c.ellipse(706, 386, 72, 58, 0, a0, a1); c.stroke(); const ex = 706 + Math.cos(a1) * 72, ey = 386 + Math.sin(a1) * 58, tg = a1 + Math.PI / 2;
        c.beginPath(); c.moveTo(ex + Math.cos(tg + 2.6) * 7, ey + Math.sin(tg + 2.6) * 7); c.lineTo(ex, ey); c.lineTo(ex + Math.cos(tg - 2.6) * 7, ey + Math.sin(tg - 2.6) * 7); c.stroke(); });
      c.restore();
    });
    slip(c, 56, 500, 350, 150, slipA(t, S(38)));
    cap(c, t, 'THE STOMACH', 231, 560, S(38) + 0.4, 22); note(c, t, 'churned with lunch', 231, 612, P(38, 'churn') - 0.1, 38);
  });
  add(S(39), 'tissue', (c, t) => {
    head(c, t, S(39), 'PLATE  X', "THE STOMACH'S GATE", 'the pyloric sphincter', S(39) + 0.8);
    const op = P(39, 'squeezes'), gate = 0.85 - 0.5 * eio(ph(t, op - 0.3, op + 0.3)) + 0.4 * eio(ph(t, S(40) + 0.6, S(40) + 1.2));
    tube(c, t, (x) => gate * Math.exp(-(((x - 640) / 46) ** 2)), ph(t, S(39), S(39) + 0.9));
    const gx = lerp(360, 930, eio(ph(t, op - 0.2, S(40) + 0.9))), sq = 1 - 0.45 * Math.exp(-(((gx - 640) / 60) ** 2));
    smallGum(c, gx, 400, 1.5, t, 0, sq);
    ital(c, t, 'stomach', 300, 540, S(39) + 0.6, 24); ital(c, t, 'small intestine', 980, 540, P(40, 'small'), 24);
  });
  add(S(41), 'tissue', (c, t) => {
    withCam(c, camAt(t, [[S(41), 645, 560, 1.55], [S(42), 645, 565, 1.75]]), () => {
      drawAnat(c, t); const k = ph(t, S(41) - 0.2, PH[41].e + 0.3); const p = along(seg(12, 18), k); smallGum(c, p[0], p[1], 0.4, t, k * 6);
    });
    slip(c, 56, 470, 350, 180, slipA(t, S(41)));
    big(c, t, '≈ 6 M', 231, 560, P(41, 'six') - 0.1, 54); note(c, t, 'all folded up', 231, 616, P(41, 'folded') - 0.1, 36);
  });
  add(S(42), 'tissue', (c, t) => {
    head(c, t, S(42), 'PLATE  XI', 'PERISTALSIS', 'waves of muscle', S(42) + 0.3);
    const u = t - S(42) - 0.4, wx = 120 + ((u * 420) % 1250), wx2 = wx - 625;
    tube(c, t, (x) => 0.62 * Math.max(Math.exp(-(((x - wx) / 50) ** 2)), Math.exp(-(((x - wx2) / 50) ** 2))), ph(t, S(42), S(42) + 0.8));
    const gx = 260 + clamp(u / 3.6) * 760; smallGum(c, gx, 400, 1.4, t, u * 0.6);
    note(c, t, 'like toothpaste in a tube', W / 2, 600, P(42, 'toothpaste') - 0.3, 40);
  });
  add(S(43), 'tissue', (c, t) => {
    head(c, t, S(43), 'PLATE  XII', 'BETWEEN MEALS');
    DIALINK.draw(c, t);
    [['0', -Math.PI / 2], ['30', 0], ['60', Math.PI / 2], ['90', Math.PI]].forEach(([s, a]) => engraveText(c, s, DIAL.x + Math.cos(a) * (DIAL.r - 62), DIAL.y + Math.sin(a) * (DIAL.r - 62) + 8, { size: 20, weight: 600, p: ph(t, 144.4, 144.9) }));
    const f = 0.75 * eio(ph(t, P(44, 'ninety') - 0.2, P(44, 'minutes') + 0.3)) + 0.25 * eio(ph(t, P(44, 'two') - 0.1, P(44, 'hours') + 0.3));
    if (f > 0) { const a0 = -Math.PI / 2, a1 = a0 + f * Math.PI * 2;
      c.save(); c.beginPath(); c.moveTo(DIAL.x, DIAL.y); c.arc(DIAL.x, DIAL.y, DIAL.r - 14, a0, a1); c.closePath(); c.clip();
      c.strokeStyle = PAL.ink; c.lineWidth = 1.1; for (let k = -200; k < 200; k += 6) { c.beginPath(); c.moveTo(DIAL.x - 200, DIAL.y + k - 100); c.lineTo(DIAL.x + 200, DIAL.y + k + 100); c.stroke(); } c.restore();
      c.save(); c.strokeStyle = PAL.ink; c.lineWidth = 4; c.lineCap = 'round'; c.beginPath(); c.moveTo(DIAL.x, DIAL.y); c.lineTo(DIAL.x + Math.cos(a1) * (DIAL.r - 30), DIAL.y + Math.sin(a1) * (DIAL.r - 30)); c.stroke(); c.fillStyle = PAL.ink; c.beginPath(); c.arc(DIAL.x, DIAL.y, 7, 0, 7); c.fill(); c.restore(); }
    note(c, t, 'a cleanup cycle', 245, 390, P(43, 'cleanup') - 0.2, 40);
    big(c, t, '90 MIN', 1030, 370, P(44, 'ninety') - 0.1, 48); ital(c, t, 'to 2 hours', 1030, 420, P(44, 'two'), 26);
  });
  add(S(45), 'tissue', (c, t) => {
    const k = ph(t, S(45) + 0.1, PH[45].e + 0.2), route = seg(12, 20);
    withCam(c, camAt(t, [[S(45), 645, 565, 1.6]]), () => {
      drawAnat(c, t);
      const p = along(route, k), q = along(route, Math.min(1, k + 0.012)), an = Math.atan2(q[1] - p[1], q[0] - p[0]);
      c.save(); c.strokeStyle = PAL.ink; c.lineCap = 'round'; for (let j = -2; j <= 2; j++) { c.lineWidth = 3 - Math.abs(j) * 0.6; const ox = p[0] - Math.cos(an) * j * 4, oy = p[1] - Math.sin(an) * j * 4; c.beginPath(); c.moveTo(ox - Math.sin(an) * 12, oy + Math.cos(an) * 12); c.lineTo(ox + Math.sin(an) * 12, oy - Math.cos(an) * 12); c.stroke(); } c.restore();
      [0.06, 0.1, 0.14].forEach((d, i) => { const g = along(route, Math.min(1, k + d)); if (i === 1) smallGum(c, g[0], g[1], 0.4, t, k * 5); else { c.save(); c.translate(g[0], g[1]); c.scale(0.3, 0.3); occlude(c, [BEADS[1].sh]); BEADS[1].ink.draw(c, 99, { wScale: 2.5 }); c.restore(); } });
    });
    slip(c, 56, 500, 350, 150, slipA(t, S(45)));
    cap(c, t, 'THE SWEEP', 231, 560, S(45) + 0.4, 22); note(c, t, 'leftovers move on', 231, 612, P(45, 'sweeps') - 0.1, 38);
  });
  add(S(46), 'tissue', (c, t) => {
    const sw = 0.2 * Math.sin((t - S(46)) * 3.6);
    c.save(); c.translate(430, 560); c.rotate(sw); c.translate(0, -40);
    occlude(c, [BROOM.handle.sh]); BROOM.handle.ink.draw(c, t); occlude(c, [BROOM.headF.sh]); BROOM.headF.ink.draw(c, t); c.restore();
    const R = RNG(12); c.save(); c.fillStyle = PAL.ink; for (let i = 0; i < 26; i++) { const st = S(46) + 0.6 + R() * 1.6, u = clamp((t - st) / 1.2); if (u <= 0) continue; c.globalAlpha = 1 - u; c.beginPath(); c.arc(480 + u * 160 + R() * 60, 600 - R() * 30 - u * 20, 1.3 + R() * 1.5, 0, 7); c.fill(); } c.restore();
    big(c, t, 'THE HOUSEKEEPER', 880, 330, P(46, 'housekeeper') - 0.15, 46);
    ital(c, t, 'the migrating motor complex', 880, 384, P(46, 'housekeeper') + 0.5, 24);
  });
  add(S(47), 'tissue', (c, t) => {
    const k = eio(ph(t, S(47) + 0.2, P(49, 'few') - 0.2)), route = seg(18, 31);
    withCam(c, camAt(t, [[S(47), 650, 560, 1.6], [S(48), 645, 540, 1.3], [P(49, 'everything'), 640, 395, 1.0], [DURATION, 640, 395, 1.0]]), () => {
      drawAnat(c, t);
      [0, -0.025, -0.05, -0.075].forEach((d, i) => { const g = along(route, clamp(k + d)); if (i === 0) smallGum(c, g[0], g[1], 0.42, t, k * 7); else { c.save(); c.translate(g[0], g[1]); c.scale(0.3, 0.3); occlude(c, [BEADS[i % 3].sh]); BEADS[i % 3].ink.draw(c, 99, { wScale: 2.5 }); c.restore(); } });
    });
    slip(c, 56, 470, 360, 190, slipA(t, S(47)));
    cap(c, t, 'CORN SKINS · SEEDS · FIBRE', 236, 520, S(47) + 0.4, 15, { track: 0.08 });
    note(c, t, 'the large intestine', 236, 572, P(48, 'large') - 0.1, 34);
    big(c, t, 'A FEW DAYS', 236, 632, P(49, 'few') - 0.1, 40);
  });

  // ---- chapter V: when it can go wrong ----
  card('V', 'WHEN IT CAN GO WRONG', S(50), (c, t) => { smallGum(c, W / 2, 560, 1.2, t, -0.2); note(c, t, 'one piece? no big deal', W / 2, 650, S(51), 34); });
  add(S(52), 'tissue', (c, t) => {
    head(c, t, S(52), 'PLATE  XIII', 'RARE CASES', 'reported by doctors', P(52, 'doctors'));
    const ct = P(54, 'clumped'), R = RNG(31), ballA = ph(t, ct + 0.2, ct + 1.0);
    for (let i = 0; i < 9; i++) {
      const st = P(53, 'every') - 0.3 + i * 0.36, u = ph(t, st, st + 0.5); if (u <= 0) { R(); R(); continue; }
      const a = R() * 6.283, r = 30 + R() * 50, tight = 1 - 0.5 * eio(ph(t, ct - 0.2, ct + 0.6));
      const tx = 640 + Math.cos(a) * r * tight, ty = 410 + Math.sin(a) * r * tight * 0.8;
      c.save(); c.globalAlpha = 1 - ballA * 0.9; smallGum(c, lerp(tx, tx * 0.9 + 64, 1 - u), lerp(160, ty, eo(u)), 1.1, t, a); c.restore();
    }
    if (ballA > 0) { c.save(); c.globalAlpha = ballA; occlude(c, [BALL.sh]); c.restore(); BALL.ink.draw(c, t); bloom(c, BALL.sh.path, t, ct + 0.8, 0.9, 620, 390, 110, ROSE, 0.5, 9); }
    for (const cn of COINS) { occlude(c, [cn.sh], ph(t, P(54, 'coins'), P(54, 'coins') + 0.6)); cn.ink.draw(c, t); }
    note(c, t, 'piece after piece', 250, 330, P(53, 'piece') - 0.1, 40);
    cap(c, t, 'A STICKY BALL', 640, 560, P(55, 'sticky') - 0.1, 26);
    big(c, t, 'RARE', 1030, 330, P(56, 'rare') - 0.1, 70);
    ital(c, t, 'and it took a lot of gum', 1030, 384, P(56, 'lot') - 0.2, 24);
  });
  add(S(57), 'tissue', (c, t) => {
    head(c, t, S(57), 'PLATE  XIV', 'WHERE GUM BELONGS');
    const bt = P(57, 'bin'), u = ph(t, bt - 0.8, bt), d = ph(t, bt, bt + 0.4);
    if (u > 0) { const x = lerp(180, 640, u), y = lerp(260, 330, u) - Math.sin(u * Math.PI) * 120 + d * 70; c.save(); c.translate(x, y); c.rotate(u * 5); occlude(c, [WAD.sh]); WAD.ink.draw(c, 99); c.restore(); }
    occlude(c, [BIN.sh]); BIN.ink.draw(c, t);
    note(c, t, 'the bin, not your belly', W / 2, 650, P(57, 'belly') - 0.5, 40);
  });
  add(S(58), 'lay', (c, t) => {
    c.save(); c.translate(330, 392); c.scale(0.62, 0.62); c.translate(-640, -378);
    drawAnat(c, 99, { route: 1, ws: 1.3 });
    const k = eio(ph(t, P(61, 'moves') - 0.3, P(61, 'door') + 0.2)); const g = along(smoothPts(ROUTE, 6), k); smallGum(c, g[0], g[1], 0.6, t, k * 9);
    c.restore();
    const wv = textW(c, 'VII YEARS', 54);
    big(c, t, 'VII YEARS', 900, 240, S(58) + 0.2, 54); strike(c, 900 - wv / 2 - 12, 900 + wv / 2 + 12, 224, ph(t, P(58, 'wrong'), P(58, 'wrong') + 0.35), 5);
    big(c, t, 'A FEW DAYS', 900, 340, P(59, 'interesting') - 0.2, 54);
    ital(c, t, 'never digested', 900, 430, P(60, 'break') - 0.1, 26);
    note(c, t, 'just moved along', 900, 500, P(61, 'moves') - 0.2, 40);
    note(c, t, 'and shown the door', 900, 580, P(61, 'door') - 0.4, 40);
  });
  add(S(62), 'lay', (c, t) => {
    occlude(c, [SLOTH.branch.sh]); SLOTH.branch.ink.draw(c, t);
    for (const l of SLOTH.limbs) { occlude(c, [l.sh]); l.ink.draw(c, t); }
    occlude(c, [SLOTH.body.sh]); SLOTH.body.ink.draw(c, t); occlude(c, [SLOTH.headS.sh]); SLOTH.headS.ink.draw(c, t); SLOTH.face.draw(c, t);
    cap(c, t, 'THE NEXT PLATE', 930, 250, S(62) + 0.4, 16, { track: 0.3 });
    big(c, t, 'WHY ARE SLOTHS', 930, 320, P(62, 'why') - 0.1, 40);
    big(c, t, 'SO SLOW?', 930, 392, P(62, 'slow') - 0.15, 60);
    note(c, t, 'and how slow keeps them alive', 930, 480, S(63) + 0.1, 34);
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
    // hook
    k.play('stamp', P(0, 'seven'), { gain: 0.4 }); k.play('erase', P(1, 'gone'), { dur: 0.4, gain: 0.45 }); k.play('ding', P(1, 'few'), { f: 'D6', gain: 0.25 });
    for (let i = 0; i < 7; i++) k.play('tick', 7.2 + i * 0.32, { f: 2400 + i * 120, gain: 0.3, minor: true });
    for (let i = 0; i < 7; i++) k.play('tock', P(7, 'sits') + i * (P(7, 'seven') - P(7, 'sits')) / 7, { f: 600 + i * 40, gain: 0.35, minor: true });
    k.play('stamp', P(7, 'years'), { gain: 0.4 }); k.play('ding', P(10, 'digest'), { f: 'A5', gain: 0.22 });
    k.play('press', P(15, 'five'), { gain: 0.5 }); k.play('sparkle', 52.2, { n: 3, gain: 0.2 });
    k.play('blip', P(18, 'sap') + 1.3, { gain: 0.2, minor: true }); k.play('stamp', P(19, 'eighteen'), { gain: 0.4 });
    k.play('pop', P(23, 'sweetener'), { gain: 0.3, minor: true }); k.play('pop', P(23, 'softeners'), { gain: 0.3, minor: true }); k.play('pop', P(23, 'flavour'), { gain: 0.3, minor: true });
    k.play('click', P(27, 'snip'), { f: 1800, gain: 0.6 });
    for (let i = 1; i <= 3; i++) k.play('click', P(28, 'cuts', i) + 0.05, { f: 1600 + i * 200, gain: 0.7 });
    k.play('riser', P(29, 'sugar'), { dur: 1.2, gain: 0.15, minor: true });
    k.play('tock', P(31, 'cut'), { f: 420, gain: 0.8 }); k.play('thud', P(31, 'cut') + 0.02, { gain: 0.3 });
    for (let i = 0; i < 5; i++) k.play('blip', P(32, 'acid') - 0.1 + i * 0.35, { gain: 0.15, minor: true });
    k.play('whoosh', P(37, 'slides'), { dur: 0.8, gain: 0.3 });
    for (let i = 0; i < 3; i++) k.play('swish', S(38) + 0.4 + i * 1.2, { dur: 0.6, gain: 0.2, minor: true });
    k.play('swish', P(39, 'squeezes'), { dur: 0.7, gain: 0.35 }); k.play('press', P(41, 'six'), { gain: 0.4 });
    for (let i = 0; i < 4; i++) k.play('swish', S(42) + 0.6 + i * 1.5, { dur: 0.8, gain: 0.2, minor: true });
    for (let i = 0; i < 10; i++) k.play('tick', P(44, 'ninety') - 0.2 + i * 0.25, { f: 3000, gain: 0.25, minor: true });
    k.play('ding', P(44, 'hours'), { f: 'E6', gain: 0.25 }); k.play('whoosh', S(45) + 0.3, { dur: 1.6, gain: 0.3 });
    for (let i = 0; i < 4; i++) k.play('paper', S(46) + 0.4 + i * 0.85, { dur: 0.4, gain: 0.3, minor: true });
    k.play('ding', P(49, 'few'), { f: 'C6', gain: 0.3 });
    for (let i = 0; i < 9; i++) k.play('pop', P(53, 'every') + i * 0.36, { gain: 0.25, minor: true });
    k.play('thud', P(54, 'clumped') + 0.3, { gain: 0.6 }); k.play('coin', P(54, 'coins'), { gain: 0.25 }); k.play('stamp', P(56, 'rare'), { gain: 0.45 });
    k.play('whoosh', P(57, 'bin') - 0.7, { dur: 0.7, gain: 0.3 }); k.play('impact', P(57, 'bin') + 0.05, { gain: 0.4 });
    k.play('erase', P(58, 'wrong'), { dur: 0.4, gain: 0.4 }); k.play('sparkle', P(61, 'door'), { n: 4, gain: 0.25 });
    k.play('ding', P(62, 'slow'), { f: 'G5', gain: 0.25 });
  }

  // thumbnail: the stomach plate with the gum, and the myth in huge letters
  function thumbnail(ctx) {
    ctx.drawImage(sheet(), 0, 0);
    ctx.save(); ctx.translate(-200, 20);
    occlude(ctx, [ESO_BIG.sh]); ESO_BIG.ink.draw(ctx, 99); occlude(ctx, [STOM_BIG.sh]); STOM_BIG.ink.draw(ctx, 99); drawGumFig(ctx, G4, 99, 0, 4);
    ctx.restore();
    engraveText(ctx, 'GONE IN', 930, 290, { size: 112, weight: 600, track: 0.03 });
    engraveText(ctx, 'DAYS', 930, 470, { size: 190, weight: 600, track: 0.03 });
    writeScript(ctx, 'not seven years', 930, 575, { size: 64 });
  }
  window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;

})();
