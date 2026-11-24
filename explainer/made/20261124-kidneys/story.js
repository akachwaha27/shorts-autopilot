// ================= Cut-Paper Diorama, 16:9: "Your Kidneys Explained: how they clean all your blood" =================
// Long explainer. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  // ---------- BEATS: voiceover phrases (phrases.json, Kokoro af_heart) ----------
  const PH = [{"s":0.25,"e":2.81,"text":"Your kidneys filter 180 litres a day,","words":[["your",0.25],["kidneys",0.59],["filter",1.19],["180",1.7],["litres",1.96],["a",2.47],["day",2.55]]},{"s":3.19,"e":5.5,"text":"so why don't you pee 180 litres?","words":[["so",3.19],["why",3.38],["dont",3.67],["you",4.06],["pee",4.35],["180",4.63],["litres",4.92]]},{"s":5.95,"e":9.59,"text":"That's like 180 big bottles of water, every single day.","words":[["thats",5.95],["like",6.37],["180",6.71],["big",6.97],["bottles",7.22],["of",7.81],["water",7.98],["every",8.4],["single",8.83],["day",9.34]]},{"s":10.01,"e":12.89,"text":"And each kidney is only about the size of your fist.","words":[["and",10.01],["each",10.22],["kidney",10.5],["is",10.92],["only",11.06],["about",11.35],["the",11.7],["size",11.91],["of",12.19],["your",12.33],["fist",12.61]]},{"s":13.35,"e":15.91,"text":"So how do two little beans wash all of your blood,","words":[["so",13.35],["how",13.48],["do",13.67],["two",13.81],["little",14.0],["beans",14.4],["wash",14.73],["all",14.99],["of",15.18],["your",15.32],["blood",15.58]]},{"s":16.3,"e":18.02,"text":"and still know exactly what to keep?","words":[["and",16.3],["still",16.48],["know",16.77],["exactly",17.01],["what",17.43],["to",17.66],["keep",17.78]]},{"s":18.59,"e":19.71,"text":"Let's go inside.","words":[["lets",18.59],["go",18.96],["inside",19.15]]},{"s":20.09,"e":21.12,"text":"First, where are they?","words":[["first",20.09],["where",20.39],["are",20.7],["they",20.88]]},{"s":21.58,"e":23.65,"text":"Not down low where most people point.","words":[["not",21.58],["down",21.78],["low",22.06],["where",22.27],["most",22.61],["people",22.89],["point",23.31]]},{"s":24.0,"e":25.81,"text":"Your kidneys sit high up in your back,","words":[["your",24.0],["kidneys",24.25],["sit",24.67],["high",24.85],["up",25.09],["in",25.21],["your",25.33],["back",25.57]]},{"s":26.09,"e":28.73,"text":"tucked under your bottom ribs, one on each side.","words":[["tucked",26.09],["under",26.51],["your",26.86],["bottom",27.13],["ribs",27.55],["one",27.83],["on",28.03],["each",28.17],["side",28.45]]},{"s":29.11,"e":31.53,"text":"Each one weighs about 150 grams,","words":[["each",29.11],["one",29.48],["weighs",29.76],["about",30.32],["150",30.78],["grams",31.06]]},{"s":31.87,"e":33.35,"text":"about as much as a smartphone.","words":[["about",31.87],["as",32.18],["much",32.3],["as",32.55],["a",32.67],["smartphone",32.74]]},{"s":33.72,"e":35.08,"text":"But they're hungry for blood.","words":[["but",33.72],["theyre",33.9],["hungry",34.25],["for",34.6],["blood",34.78]]},{"s":35.42,"e":37.59,"text":"Around one fifth of everything your heart pumps,","words":[["around",35.42],["one",35.74],["fifth",35.91],["of",36.18],["everything",36.29],["your",36.83],["heart",37.05],["pumps",37.32]]},{"s":37.91,"e":39.23,"text":"goes straight to your kidneys.","words":[["goes",37.91],["straight",38.12],["to",38.54],["your",38.65],["kidneys",38.86]]},{"s":39.61,"e":41.84,"text":"That's about a litre of blood, every minute.","words":[["thats",39.61],["about",39.94],["a",40.27],["litre",40.33],["of",40.66],["blood",40.79],["every",41.12],["minute",41.45]]},{"s":42.22,"e":45.21,"text":"So over a day, your blood passes through them again and again.","words":[["so",42.22],["over",42.34],["a",42.58],["day",42.65],["your",42.83],["blood",43.07],["passes",43.38],["through",43.74],["them",44.17],["again",44.42],["and",44.72],["again",44.91]]},{"s":45.59,"e":46.63,"text":"Now let's zoom in.","words":[["now",45.59],["lets",45.83],["zoom",46.15],["in",46.47]]},{"s":46.95,"e":49.86,"text":"Each kidney is packed with about a million tiny filters,","words":[["each",46.95],["kidney",47.21],["is",47.58],["packed",47.71],["with",48.09],["about",48.34],["a",48.66],["million",48.72],["tiny",49.17],["filters",49.42]]},{"s":50.18,"e":51.12,"text":"called nephrons.","words":[["called",50.18],["nephrons",50.59]]},{"s":51.54,"e":54.62,"text":"And every nephron starts with a little ball of blood vessels,","words":[["and",51.54],["every",51.73],["nephron",52.04],["starts",52.47],["with",52.84],["a",53.08],["little",53.14],["ball",53.51],["of",53.76],["blood",53.88],["vessels",54.19]]},{"s":54.99,"e":56.16,"text":"called the glomerulus.","words":[["called",54.99],["the",55.36],["glomerulus",55.55]]},{"s":56.55,"e":59.44,"text":"Think of it like a coffee filter made of blood vessels.","words":[["think",56.55],["of",56.88],["it",57.01],["like",57.14],["a",57.4],["coffee",57.47],["filter",57.86],["made",58.26],["of",58.52],["blood",58.65],["vessels",58.98]]},{"s":59.79,"e":63.36,"text":"Or a kitchen sieve that lets the water through but keeps the pasta.","words":[["or",59.79],["a",59.93],["kitchen",59.99],["sieve",60.45],["that",60.78],["lets",61.05],["the",61.31],["water",61.51],["through",61.84],["but",62.3],["keeps",62.5],["the",62.83],["pasta",63.03]]},{"s":63.79,"e":65.68,"text":"Blood squeezes through it under pressure.","words":[["blood",63.79],["squeezes",64.06],["through",64.5],["it",64.87],["under",64.98],["pressure",65.25]]},{"s":66.15,"e":69.25,"text":"Water, salt, sugar and waste slip through the thin walls.","words":[["water",66.15],["salt",66.49],["sugar",66.77],["and",67.11],["waste",67.32],["slip",67.66],["through",67.94],["the",68.42],["thin",68.63],["walls",68.91]]},{"s":69.63,"e":72.24,"text":"But big things, like blood cells and proteins,","words":[["but",69.63],["big",69.85],["things",70.06],["like",70.48],["blood",70.76],["cells",71.12],["and",71.47],["proteins",71.68]]},{"s":72.4,"e":74.67,"text":"are too large, so they stay in the blood.","words":[["are",72.4],["too",72.62],["large",72.84],["so",73.21],["they",73.35],["stay",73.65],["in",73.94],["the",74.08],["blood",74.3]]},{"s":75.02,"e":77.53,"text":"That liquid that slips through is called filtrate.","words":[["that",75.02],["liquid",75.26],["that",75.62],["slips",75.86],["through",76.16],["is",76.57],["called",76.69],["filtrate",77.05]]},{"s":78.0,"e":81.06,"text":"And this is where those 180 litres come from.","words":[["and",78.0],["this",78.25],["is",78.59],["where",78.76],["those",79.19],["180",79.61],["litres",79.87],["come",80.38],["from",80.72]]},{"s":81.48,"e":82.2,"text":"But wait.","words":[["but",81.48],["wait",81.79]]},{"s":82.49,"e":84.73,"text":"If you peed out 180 litres a day,","words":[["if",82.49],["you",82.67],["peed",82.94],["out",83.29],["180",83.56],["litres",83.83],["a",84.37],["day",84.46]]},{"s":85.14,"e":86.79,"text":"you'd be in the bathroom nonstop.","words":[["youd",85.14],["be",85.39],["in",85.52],["the",85.65],["bathroom",85.84],["nonstop",86.34]]},{"s":87.23,"e":88.66,"text":"So here's the clever part.","words":[["so",87.23],["heres",87.37],["the",87.73],["clever",87.94],["part",88.37]]},{"s":89.01,"e":91.4,"text":"The filtrate flows down a long, twisty tube.","words":[["the",89.01],["filtrate",89.21],["flows",89.76],["down",90.1],["a",90.38],["long",90.45],["twisty",90.72],["tube",91.13]]},{"s":91.87,"e":95.41,"text":"And along the way, the tube grabs back almost everything useful.","words":[["and",91.87],["along",92.08],["the",92.42],["way",92.62],["the",92.83],["tube",93.03],["grabs",93.3],["back",93.64],["almost",93.91],["everything",94.32],["useful",95.0]]},{"s":95.88,"e":97.36,"text":"Sugar, back into the blood.","words":[["sugar",95.88],["back",96.24],["into",96.52],["the",96.8],["blood",97.01]]},{"s":97.83,"e":99.81,"text":"Most of the salt, back into the blood.","words":[["most",97.83],["of",98.1],["the",98.24],["salt",98.45],["back",98.72],["into",98.99],["the",99.26],["blood",99.47]]},{"s":100.22,"e":101.88,"text":"And water, back into the blood.","words":[["and",100.22],["water",100.43],["back",100.77],["into",101.05],["the",101.32],["blood",101.53]]},{"s":102.23,"e":105.98,"text":"In fact, about 99 percent of the filtrate gets reabsorbed.","words":[["in",102.23],["fact",102.39],["about",102.71],["99",103.1],["percent",103.26],["of",103.82],["the",103.98],["filtrate",104.22],["gets",104.86],["reabsorbed",105.18]]},{"s":106.32,"e":108.83,"text":"What's left is mostly extra water and waste,","words":[["whats",106.32],["left",106.68],["is",106.97],["mostly",107.11],["extra",107.54],["water",107.9],["and",108.26],["waste",108.48]]},{"s":109.01,"e":112.08,"text":"like urea, a leftover from breaking down protein.","words":[["like",109.01],["urea",109.32],["a",109.63],["leftover",109.7],["from",110.32],["breaking",110.62],["down",111.23],["protein",111.54]]},{"s":112.53,"e":113.41,"text":"That's your urine.","words":[["thats",112.53],["your",112.84],["urine",113.1]]},{"s":113.74,"e":115.71,"text":"Only about one to two litres a day.","words":[["only",113.74],["about",114.03],["one",114.4],["to",114.62],["two",114.76],["litres",114.98],["a",115.42],["day",115.49]]},{"s":116.13,"e":119.75,"text":"So out of 180 litres filtered, you keep almost all of it.","words":[["so",116.13],["out",116.3],["of",116.55],["180",116.71],["litres",116.96],["filtered",117.45],["you",118.11],["keep",118.35],["almost",118.68],["all",119.17],["of",119.42],["it",119.59]]},{"s":120.18,"e":121.76,"text":"That's some serious recycling.","words":[["thats",120.18],["some",120.49],["serious",120.75],["recycling",121.19]]},{"s":122.08,"e":123.9,"text":"It drips down a tube called the ureter,","words":[["it",122.08],["drips",122.19],["down",122.49],["a",122.72],["tube",122.78],["called",123.02],["the",123.37],["ureter",123.54]]},{"s":124.28,"e":125.03,"text":"into your bladder,","words":[["into",124.28],["your",124.48],["bladder",124.68]]},{"s":125.42,"e":127.34,"text":"and waits there until you're ready to go.","words":[["and",125.42],["waits",125.6],["there",125.9],["until",126.2],["youre",126.5],["ready",126.8],["to",127.1],["go",127.22]]},{"s":127.73,"e":129.78,"text":"So the kidneys don't just throw out the trash.","words":[["so",127.73],["the",127.84],["kidneys",128.01],["dont",128.41],["just",128.64],["throw",128.87],["out",129.16],["the",129.33],["trash",129.5]]},{"s":130.25,"e":131.85,"text":"They pick the treasure back out of it.","words":[["they",130.25],["pick",130.46],["the",130.68],["treasure",130.84],["back",131.26],["out",131.48],["of",131.64],["it",131.74]]},{"s":132.24,"e":134.12,"text":"And cleaning is only half the job.","words":[["and",132.24],["cleaning",132.44],["is",133.0],["only",133.14],["half",133.42],["the",133.7],["job",133.91]]},{"s":134.58,"e":136.93,"text":"Your kidneys also keep your water balanced.","words":[["your",134.58],["kidneys",134.84],["also",135.29],["keep",135.55],["your",135.82],["water",136.08],["balanced",136.4]]},{"s":137.31,"e":139.5,"text":"Drink a lot, and they let more water go.","words":[["drink",137.31],["a",137.68],["lot",137.75],["and",137.97],["they",138.19],["let",138.48],["more",138.7],["water",138.99],["go",139.36]]},{"s":139.97,"e":141.97,"text":"Get thirsty, and they hold on to it.","words":[["get",139.97],["thirsty",140.19],["and",140.71],["they",140.93],["hold",141.23],["on",141.52],["to",141.67],["it",141.82]]},{"s":142.34,"e":144.63,"text":"That's why your pee changes color during the day.","words":[["thats",142.34],["why",142.63],["your",142.81],["pee",143.04],["changes",143.22],["color",143.63],["during",143.92],["the",144.28],["day",144.45]]},{"s":145.0,"e":146.92,"text":"They also make chemical messengers.","words":[["they",145.0],["also",145.25],["make",145.51],["chemical",145.77],["messengers",146.28]]},{"s":147.39,"e":150.22,"text":"One, called renin, helps control your blood pressure.","words":[["one",147.39],["called",147.59],["renin",147.98],["helps",148.31],["control",148.64],["your",149.1],["blood",149.37],["pressure",149.69]]},{"s":150.62,"e":155.02,"text":"Another, called EPO, tells your bone marrow to make more red blood cells.","words":[["another",150.62],["called",151.15],["epo",151.61],["tells",151.84],["your",152.22],["bone",152.52],["marrow",152.82],["to",153.28],["make",153.43],["more",153.73],["red",154.04],["blood",154.26],["cells",154.64]]},{"s":155.49,"e":158.05,"text":"And they turn vitamin D into its active form,","words":[["and",155.49],["they",155.71],["turn",155.99],["vitamin",156.28],["d",156.77],["into",156.84],["its",157.13],["active",157.34],["form",157.77]]},{"s":158.39,"e":159.99,"text":"which helps keep your bones strong.","words":[["which",158.39],["helps",158.67],["keep",158.94],["your",159.16],["bones",159.38],["strong",159.66]]},{"s":160.45,"e":162.78,"text":"They even keep your blood from getting too acidic,","words":[["they",160.45],["even",160.68],["keep",160.91],["your",161.14],["blood",161.36],["from",161.65],["getting",161.87],["too",162.27],["acidic",162.44]]},{"s":163.21,"e":167.03,"text":"and when your blood sugar runs low, they can make a little sugar of their own.","words":[["and",163.21],["when",163.4],["your",163.65],["blood",163.9],["sugar",164.21],["runs",164.53],["low",164.78],["they",164.97],["can",165.22],["make",165.4],["a",165.65],["little",165.72],["sugar",166.09],["of",166.41],["their",166.53],["own",166.84]]},{"s":167.4,"e":170.07,"text":"So a million filters, a litre of blood a minute,","words":[["so",167.4],["a",167.54],["million",167.62],["filters",168.12],["a",168.63],["litre",168.7],["of",169.06],["blood",169.2],["a",169.57],["minute",169.64]]},{"s":170.47,"e":172.93,"text":"and 180 litres cleaned every day,","words":[["and",170.47],["180",170.74],["litres",171.02],["cleaned",171.56],["every",172.2],["day",172.66]]},{"s":173.37,"e":175.75,"text":"all from two organs the size of your fist.","words":[["all",173.37],["from",173.59],["two",173.87],["organs",174.09],["the",174.52],["size",174.74],["of",175.03],["your",175.17],["fist",175.46]]},{"s":176.21,"e":179.13,"text":"Pretty amazing for something you never even feel working.","words":[["pretty",176.21],["amazing",176.57],["for",177.0],["something",177.18],["you",177.73],["never",177.91],["even",178.21],["feel",178.46],["working",178.7]]},{"s":179.55,"e":181.75,"text":"Next time, why do you have two nostrils,","words":[["next",179.55],["time",179.83],["why",180.12],["do",180.33],["you",180.47],["have",180.68],["two",180.97],["nostrils",181.18]]},{"s":182.08,"e":183.85,"text":"and why is one always more blocked?","words":[["and",182.08],["why",182.27],["is",182.46],["one",182.59],["always",182.78],["more",183.16],["blocked",183.41]]}];
  const P = (i, w, n = 1) => { let k = 0; for (const q of PH[i].words) if (q[0] === w && ++k === n) return q[1]; if (window.MISSWORD) window.MISSWORD.push([i, w]); return PH[i].s; };
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const W = 1280, HH = 720, TAU = Math.PI * 2;
  const E = H.ease, cl = H.clamp;
  const ph = (t, a, b) => cl((t - a) / (b - a));
  const io = (t, a, b) => E.inOut(ph(t, a, b));
  try { ['400 112px "Archivo Black"', '400 30px "Archivo Black"'].forEach((f) => document.fonts.load(f, 'AaZz09$,?!\'')); } catch (e) {}

  // ================= reference toolbox (styles/cut-paper.js) =================
  const poly = (c, pts) => { c.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) c.lineTo(pts[i][0], pts[i][1]); c.closePath(); };
  const circPts = (r, cx, cy, R, seg = 15, jit = 0.6) => {
    const n = Math.max(18, Math.round((TAU * R) / seg)), a0 = r() * TAU, out = [];
    for (let i = 0; i < n; i++) { const a = a0 + ((i + r.range(-0.2, 0.2)) / n) * TAU, rr = R + r.gauss() * jit; out.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]); }
    return out;
  };
  const ellPts = (r, cx, cy, rx, ry, rot = 0, jit = 0.5) => {
    const n = Math.max(18, Math.round((TAU * Math.max(rx, ry)) / 13)), a0 = r() * TAU, out = [], c = Math.cos(rot), s = Math.sin(rot);
    for (let i = 0; i < n; i++) { const a = a0 + ((i + r.range(-0.2, 0.2)) / n) * TAU, x = Math.cos(a) * (rx + r.gauss() * jit), y = Math.sin(a) * (ry + r.gauss() * jit); out.push([cx + x * c - y * s, cy + x * s + y * c]); }
    return out;
  };
  const ridge = (r, x0, x1, f, sMin = 12, sMax = 30, jit = 0.6) => { const out = []; let x = x0; while (x < x1) { out.push([x, f(x) + r.gauss() * jit]); x += r.range(sMin, sMax); } out.push([x1, f(x1)]); return out; };
  const cutLines = (r, pts, seg = 22, jit = 0.7) => {
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, ay] = pts[i], [bx, by] = pts[i + 1], n = Math.max(1, Math.round(Math.hypot(bx - ax, by - ay) / seg));
      for (let k = 0; k < n; k++) { const u = k / n; out.push([ax + (bx - ax) * u + (k ? r.gauss() * jit : 0), ay + (by - ay) * u + (k ? r.gauss() * jit : 0)]); }
    }
    out.push(pts[pts.length - 1]); return out;
  };
  const rect = (r, x0, y0, x1, y1, seg = 24, jit = 0.5) => cutLines(r, [[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]], seg, jit);
  const makeTex = (seed) => {
    const S = 512, cv = H.layer(S, S), x = cv.getContext('2d'), r = H.rng(seed), nz = H.makeNoise(seed + 1);
    const M = 64, mc = H.layer(M, M), mx = mc.getContext('2d'), mi = mx.createImageData(M, M), f = 5 / M;
    for (let j = 0; j < M; j++) for (let i = 0; i < M; i++) {
      const n = (a, b) => nz.fbm2(a * f, b * f, 3);
      const v = (n(i, j) * (M - i) * (M - j) + n(i - M, j) * i * (M - j) + n(i, j - M) * (M - i) * j + n(i - M, j - M) * i * j) / (M * M);
      const k = (j * M + i) * 4, a = Math.min(255, Math.abs(v) * 120);
      mi.data[k] = mi.data[k + 1] = mi.data[k + 2] = v > 0 ? 255 : 0; mi.data[k + 3] = a;
    }
    mx.putImageData(mi, 0, 0); x.imageSmoothingEnabled = true;
    for (let oy = -1; oy <= 1; oy++) for (let ox = -1; ox <= 1; ox++) x.drawImage(mc, ox * S, oy * S, S, S);
    const g = x.getImageData(0, 0, S, S), d = g.data;
    for (let i = 0; i < d.length; i += 4) {
      const n = r() - 0.5; if (r() < 0.5) continue;
      const a = Math.abs(n) * 60, c = n > 0 ? 255 : 0, aa = a / 255, oa = d[i + 3] / 255, na = aa + oa * (1 - aa);
      if (na > 0) { d[i] = (c * aa + d[i] * oa * (1 - aa)) / na; d[i + 1] = d[i]; d[i + 2] = d[i]; d[i + 3] = na * 255; }
    }
    x.putImageData(g, 0, 0); x.lineCap = 'round';
    for (let n = 0; n < 1100; n++) {
      const px = r() * S, py = r() * S, len = r.range(4, 22), a = r() * TAU, bend = r.range(-5, 5), light = r() < 0.55;
      x.strokeStyle = light ? `rgba(255,255,255,${r.range(0.08, 0.22)})` : `rgba(0,0,0,${r.range(0.05, 0.14)})`; x.lineWidth = r.range(0.4, 1.1);
      for (let oy = -1; oy <= 1; oy++) for (let ox = -1; ox <= 1; ox++) {
        const sx = px + ox * S, sy = py + oy * S; if (sx < -30 || sx > S + 30 || sy < -30 || sy > S + 30) continue;
        x.beginPath(); x.moveTo(sx, sy); x.quadraticCurveTo(sx + Math.cos(a) * len * 0.5 - Math.sin(a) * bend, sy + Math.sin(a) * len * 0.5 + Math.cos(a) * bend, sx + Math.cos(a) * len, sy + Math.sin(a) * len); x.stroke();
      }
    }
    return cv;
  };
  const PK = {};
  const pkTex = () => PK.tex || (PK.tex = makeTex(77));
  const paperize = (w, h, paint, o = {}) => {
    const L = H.layer(Math.ceil(w), Math.ceil(h)), c = L.getContext('2d');
    paint(c);
    const r = H.rng(o.seed || 7), pat = c.createPattern(pkTex(), 'repeat');
    pat.setTransform(new DOMMatrix().translateSelf(r() * 512, r() * 512).rotateSelf(r.range(-30, 30)));
    c.save(); c.globalCompositeOperation = 'source-atop'; c.globalAlpha = o.tex ?? 1; c.fillStyle = pat; c.fillRect(0, 0, w, h); c.restore();
    const edge = (col, dx, dy) => {
      const T = H.layer(L.width, L.height), tc = T.getContext('2d');
      tc.drawImage(L, 0, 0); tc.globalCompositeOperation = 'source-in'; tc.fillStyle = col; tc.fillRect(0, 0, w, h);
      tc.globalCompositeOperation = 'destination-out'; tc.drawImage(L, dx, dy);
      c.save(); c.globalCompositeOperation = 'source-atop'; c.drawImage(T, 0, 0); c.restore();
    };
    if (o.rim !== false) { edge(`rgba(255,247,232,${o.hi ?? 0.38})`, 1.3, 1.6); edge(`rgba(0,0,0,${o.lo ?? 0.28})`, -1.1, -1.3); }
    return L;
  };
  const shadowDraw = (ctx, img, x, y, d = 1, sa = 0.5) => {
    ctx.save();
    if (d > 0) {
      ctx.shadowColor = `rgba(14,10,30,${sa})`; ctx.shadowBlur = 6 + d * 7; ctx.shadowOffsetX = 1.5 + d * 2.4; ctx.shadowOffsetY = 2 + d * 3.6;
      ctx.drawImage(img, x, y);
      ctx.shadowColor = 'rgba(10,6,20,0.38)'; ctx.shadowBlur = 2.5; ctx.shadowOffsetX = 0.8; ctx.shadowOffsetY = 1.4;
    }
    ctx.drawImage(img, x, y); ctx.restore();
  };
  const put = (ctx, spr, cx, cy, o = {}) => {
    ctx.save(); ctx.translate(cx, cy);
    if (o.rot) ctx.rotate(o.rot);
    if (o.sx != null || o.s != null) ctx.scale(o.sx ?? o.s ?? 1, o.sy ?? o.s ?? 1);
    if (o.a != null) ctx.globalAlpha = o.a;
    shadowDraw(ctx, spr, -spr.width / 2, -spr.height / 2, o.d ?? 1, o.sa ?? 0.5);
    ctx.restore();
  };
  const compose = (w, h, layers) => {
    const C = H.layer(w, h), c = C.getContext('2d');
    layers.forEach(([paint, d, o], i) => shadowDraw(c, paperize(w, h, paint, { seed: 30 + i * 7, ...(o || {}) }), 0, 0, d, 0.4));
    return C;
  };
  const cache = (k, f) => PK[k] || (PK[k] = f());
  const AF = (px) => `400 ${px}px "Archivo Black"`;
  const measure = (str, font) => { const c = H.layer(4, 4).getContext('2d'); c.font = font; return c.measureText(str).width; };
  const wordSpr = (str, px, col, back = '#f3ecdc', bw = 18) => cache('w' + str + px + col + back + bw, () => {
    const font = AF(px), tw = measure(str, font), w = tw + bw * 2 + 16, h = px * 1.35 + bw * 2, by = h / 2 + px * 0.36, layers = [];
    if (back) layers.push([(c) => { c.font = font; c.lineJoin = 'round'; c.lineWidth = bw * 1.6; c.strokeStyle = back; c.fillStyle = back; c.strokeText(str, bw + 8, by); c.fillText(str, bw + 8, by); }, 0]);
    layers.push([(c) => { c.font = font; c.fillStyle = col; c.fillText(str, bw + 8, by); }, back ? 0.45 : 0]);
    return compose(w, h, layers);
  });
  const ringSpr = (col = '#f2b545') => cache('ring' + col, () => paperize(300, 230, (c) => { c.fillStyle = col; c.beginPath(); c.ellipse(150, 115, 145, 110, 0, 0, TAU); c.ellipse(150, 115, 125, 92, 0, 0, TAU); c.fill('evenodd'); }, { seed: 12 }));
  const burstSpr = (col = '#f2b545') => cache('burst' + col, () => paperize(340, 340, (c) => { c.fillStyle = col; c.beginPath(); for (let i = 0; i < 32; i++) { const a = (i / 32) * TAU, rr = i % 2 ? 100 : 168; const x = 170 + Math.cos(a) * rr, y = 170 + Math.sin(a) * rr; i ? c.lineTo(x, y) : c.moveTo(x, y); } c.closePath(); c.fill(); }, { seed: 13 }));
  const crossSpr = () => cache('x', () => paperize(110, 110, (c) => { c.fillStyle = '#d9473b'; c.save(); c.translate(55, 55); c.rotate(0.785); c.fillRect(-48, -11, 96, 22); c.fillRect(-11, -48, 22, 96); c.restore(); }, { seed: 9 }));
  const checkSpr = () => cache('ok', () => paperize(120, 110, (c) => { c.fillStyle = '#5fae6a'; c.beginPath(); poly(c, [[8, 58], [26, 40], [46, 62], [96, 10], [114, 28], [46, 98]]); c.fill(); }, { seed: 10 }));
  const digitSpr = (ch, px, col) => wordSpr(ch, px, col, '#f3ecdc', 10);
  const arrow = (ctx, ax, ay, cx, cy, bx, by, p, col, seed) => {
    if (p <= 0) return;
    const pts = [];
    for (let i = 0; i <= 40 * p; i++) { const u = i / 40; pts.push([(1 - u) * (1 - u) * ax + 2 * u * (1 - u) * cx + u * u * bx, (1 - u) * (1 - u) * ay + 2 * u * (1 - u) * cy + u * u * by]); }
    if (pts.length < 2) return;
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    pts.forEach(([x, y]) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); });
    x0 -= 34; y0 -= 34; x1 += 34; y1 += 34;
    const [ex, ey] = pts[pts.length - 1], [px, py] = pts[pts.length - 2], a = Math.atan2(ey - py, ex - px);
    const L = paperize(x1 - x0, y1 - y0, (c) => {
      c.translate(-x0, -y0); c.strokeStyle = col; c.lineWidth = 13; c.lineCap = 'butt'; c.lineJoin = 'round';
      c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x - Math.cos(a) * 12 * (i === pts.length - 1), y - Math.sin(a) * 12 * (i === pts.length - 1)) : c.moveTo(x, y))); c.stroke();
      c.fillStyle = col; c.beginPath(); c.moveTo(ex + Math.cos(a) * 14, ey + Math.sin(a) * 14);
      c.lineTo(ex + Math.cos(a + 2.5) * 22, ey + Math.sin(a + 2.5) * 22); c.lineTo(ex + Math.cos(a - 2.5) * 22, ey + Math.sin(a - 2.5) * 22); c.fill();
    }, { seed });
    shadowDraw(ctx, L, x0, y0, 0.6);
  };
  const fmt = (n) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const numberRow = (ctx, str, x, y, px, col, o = {}) => {
    const ws = [...str].map((ch) => digitSpr(ch, px, col).width - 22);
    let cx = o.center ? x - (ws.reduce((a, b) => a + b - 2, 0)) / 2 : x;
    [...str].forEach((ch, i) => {
      const s = digitSpr(ch, px, col), w = ws[i], jr = H.rng(ch.charCodeAt(0) * 13 + i * 7);
      put(ctx, s, cx + w / 2, y, { rot: (jr() - 0.5) * 0.08, d: o.d ?? 0.7 });
      cx += w - 2;
    });
    return cx;
  };
  let REC = null;
  const dropIn = (t, st, du = 0.4, dist = 60) => {
    if (REC) REC.push([st + 0.37 * du, dist >= 60 ? 1 : 0.55]);
    const u = cl((t - st) / du); if (u <= 0) return null;
    const e = E.back(u), lift = 1 - E.out(u);
    return { dy: -(1 - e) * dist, s: 1 + lift * 0.08, d: lift * 3, a: cl(u * 4), u };
  };
  const popIn = (t, st, du = 0.35) => { if (REC) REC.push([st + 0.37 * du, 0.8, 'pop']); const u = cl((t - st) / du); if (u <= 0) return null; return { s: Math.max(0.01, E.back(u)), d: (1 - E.out(u)) * 2, u }; };
  // a paper tag dropped onto what it names
  const tag = (ctx, str, x, y, t, st, o = {}) => {
    const A = dropIn(t, st, o.du ?? 0.35, o.dist ?? 45); if (!A) return;
    put(ctx, wordSpr(str, o.px ?? 30, o.col ?? '#2b2d5a', o.back === undefined ? '#fbf6ea' : o.back, o.bw ?? 10), x, y + A.dy, { s: A.s * (o.s ?? 1), d: (o.d ?? 0.8) + A.d, rot: o.rot ?? 0 });
  };
  // cut letters dropped one by one (headlines)
  const cutTitle = (ctx, str, cx, y, px, t, st, o = {}) => {
    const cols = o.cols || ['#e8604a', '#f2b545', '#58b0a6'], sp = o.sp ?? 4, tot = measure(str, AF(px)) + str.length * sp;
    let x = cx - tot / 2, i = 0;
    for (const ch of str) {
      const w = measure(ch, AF(px));
      if (ch !== ' ') {
        const A = dropIn(t, st + i * (o.step ?? 0.05), 0.36, 60);
        if (A) put(ctx, wordSpr(ch, px, cols[i % cols.length], o.back ?? '#f3ecdc', o.bw ?? 14), x + w / 2, y + A.dy, { s: A.s, d: 0.8 + A.d, rot: (H.rng(i * 7 + px)() - 0.5) * 0.12 });
        i++;
      }
      x += w + sp;
    }
  };

  // lighting / photo finish (reference) - run on every frame
  const finish = (ctx, t, lamp = [720, 330]) => {
    ctx.save(); ctx.globalCompositeOperation = 'soft-light';
    const lg = ctx.createRadialGradient(260, 60, 40, 420, 200, 1100);
    lg.addColorStop(0, 'rgba(255,236,200,1)'); lg.addColorStop(0.5, 'rgba(255,230,200,0.25)'); lg.addColorStop(1, 'rgba(0,0,20,0.6)');
    ctx.fillStyle = lg; ctx.fillRect(0, 0, W, HH);
    const lp = ctx.createRadialGradient(lamp[0], lamp[1], 20, lamp[0], lamp[1], 560);
    lp.addColorStop(0, 'rgba(255,214,160,0.42)'); lp.addColorStop(1, 'rgba(255,214,160,0)');
    ctx.fillStyle = lp; ctx.fillRect(0, 0, W, HH); ctx.restore();
    H.vignette(ctx, W, HH, 0.42, '10,6,24');
    H.grain(ctx, W, HH, 0.03, 9 + Math.floor(t * 12));
  };

  // chapter banner: a paper strip that drops in at the top and lifts away
  const chapter = (ctx, t, st, n, title) => {
    const A = dropIn(t, st, 0.45, 80); if (!A) return;
    const out = io(t, st + 2.9, st + 3.4); if (out >= 1) return;
    const spr = cache('chap' + n, () => {
      const a = wordSpr('CHAPTER ' + n, 28, '#fbf6ea', null), b = wordSpr(title, 48, '#2b2d5a', null), w = Math.max(a.width, b.width) + 70, C = H.layer(w, 150), c = C.getContext('2d');
      shadowDraw(c, paperize(w, 150, (x) => { x.fillStyle = '#f2b545'; x.beginPath(); poly(x, cutLines(H.rng(n), [[8, 10], [w - 8, 4], [w - 4, 140], [6, 146], [8, 10]], 30, 0.6)); x.fill(); x.fillStyle = '#e8604a'; x.beginPath(); poly(x, rect(H.rng(n + 9), 26, 14, w - 26, 56, 26, 0.4)); x.fill(); }, { seed: 900 + n }), 0, 0, 0);
      shadowDraw(c, a, w / 2 - a.width / 2, 35 - a.height / 2, 0.3, 0.3); shadowDraw(c, b, w / 2 - b.width / 2, 98 - b.height / 2, 0.4, 0.3);
      return C;
    });
    put(ctx, spr, 640, 96 + A.dy - out * 260, { s: A.s, d: 1.4 + A.d, rot: -0.015 });
  };


  // ================= palette + kidney-world sprites (all cut paper, cached) =================
  const C = { ink: '#1f2a55', navy: '#17305e', coral: '#e8604a', red: '#d9473b', gold: '#f2b545', teal: '#58b0a6', tealD: '#2f7f86', card: '#fbf6ea', cream: '#f3ecdc', sky: '#9fd0e0', skyL: '#cfe9ef', skin: '#f2c6a2', skinD: '#d99d78', kid: '#b5473f', kidL: '#d0705f', kidD: '#8a2f30', med: '#7e2a33', pelvis: '#f1d9c0', blood: '#c93a3a', vein: '#5b6fc0', water: '#4fb6e8', salt: '#f7f4ee', sugar: '#f6e7bf', waste: '#8a6a3a', urine: '#f2cf4a', urineL: '#f8e9a0', protein: '#9b6fc8', green: '#5fae6a', dark: '#222033', bone: '#efe6d2', lilac: '#b79bd8', brown: '#7a4a2e', plum: '#5a2b4a' };
  const blobPath = (x, pts) => { x.beginPath(); poly(x, pts); x.fill(); };
  const ell = (x, seed, cx, cy, rx, ry, rot = 0) => blobPath(x, ellPts(H.rng(seed), cx, cy, rx, ry, rot, 0.5));
  const paperBg = (key, col, col2) => cache('pb' + key, () => compose(W, HH, [[(x) => { x.fillStyle = col; x.fillRect(0, 0, W, HH); }, 0], [(x) => { const r = H.rng(key.length * 7 + key.charCodeAt(0)); x.fillStyle = col2; x.beginPath(); poly(x, circPts(r, 640, 380, 500, 18, 1)); x.fill(); }, 0.6]]));
  // striped backboard (a second kind of scene background)
  const stripeBg = (key, col, col2) => cache('sb' + key, () => compose(W, HH, [[(x) => { x.fillStyle = col; x.fillRect(0, 0, W, HH); }, 0], [(x) => { const r = H.rng(key.length + 77); x.fillStyle = col2; for (let i = -2; i < 12; i++) { const x0 = i * 150; x.beginPath(); poly(x, cutLines(r, [[x0, -10], [x0 + 70, -10], [x0 + 70 + 240, HH + 10], [x0 + 240, HH + 10], [x0, -10]], 40, 0.6)); x.fill(); } }, 0.35]]));
  // floor + wall diorama (a third kind)
  const roomBg = (key, wall, wall2, floor) => cache('rb' + key, () => compose(W, HH, [[(x) => { x.fillStyle = wall; x.fillRect(0, 0, W, HH); }, 0], [(x) => { x.fillStyle = wall2; const r = H.rng(key.length + 5); for (let i = 0; i < 9; i++) blobPath(x, circPts(r, 80 + i * 150, 120 + (i % 2) * 60, 26, 10, 0.5)); }, 0.3], [(x) => { const r = H.rng(key.length + 9); x.fillStyle = floor; x.beginPath(); poly(x, [...ridge(r, -10, W + 10, (q) => 590 + Math.sin(q * 0.01) * 6), [W + 10, HH + 10], [-10, HH + 10]]); x.fill(); }, 1.1]]));

  // ---- the kidney: bean with the dent (hilum) facing +x, artery/vein/ureter leave from the dent ----
  const beanPath = (x, cx, cy, s = 1) => {
    const m = (px, py) => [cx + (px - 150) * s, cy + (py - 190) * s];
    x.beginPath(); x.moveTo(...m(160, 32));
    x.bezierCurveTo(...m(60, 10), ...m(18, 130), ...m(36, 230));
    x.bezierCurveTo(...m(56, 330), ...m(160, 380), ...m(222, 334));
    x.bezierCurveTo(...m(258, 304), ...m(200, 250), ...m(196, 196));
    x.bezierCurveTo(...m(196, 140), ...m(262, 96), ...m(240, 62));
    x.bezierCurveTo(...m(224, 36), ...m(196, 34), ...m(160, 32));
    x.closePath();
  };
  const kidneyS = (key = 'a', o = {}) => cache('kid' + key, () => compose(360, 400, [
    ...(o.vessels !== false ? [[(x) => { x.lineCap = 'round';
      x.strokeStyle = C.cream; x.lineWidth = 16; x.beginPath(); x.moveTo(200, 220); x.quadraticCurveTo(250, 260, 240, 398); x.stroke();
      x.strokeStyle = C.vein; x.lineWidth = 20; x.beginPath(); x.moveTo(200, 200); x.quadraticCurveTo(290, 196, 360, 214); x.stroke();
      x.strokeStyle = C.red; x.lineWidth = 18; x.beginPath(); x.moveTo(200, 176); x.quadraticCurveTo(290, 160, 360, 168); x.stroke(); }, 0.3]] : []),
    [(x) => { x.fillStyle = o.col || C.kid; beanPath(x, 150, 200); x.fill(); }, 0.7],
    [(x) => { x.fillStyle = 'rgba(255,190,170,0.35)'; ell(x, 61, 92, 120, 34, 60, 0.3); }, 0.12],
  ]));
  const kidneyPair = (ctx, cx, cy, s = 1, gap = 180, o = {}) => {
    put(ctx, kidneyS(o.key || 'a', o), cx - gap * s, cy, { s, d: o.d ?? 1.1, rot: 0.12 });
    put(ctx, kidneyS(o.key || 'a', o), cx + gap * s, cy + 16 * s, { sx: -s, sy: s, d: o.d ?? 1.1, rot: -0.12 });
  };
  // a kidney cut in half: cortex, medulla pyramids, pelvis funnel into the ureter
  const crossS = () => cache('cross', () => compose(420, 460, [
    [(x) => { x.strokeStyle = C.cream; x.lineWidth = 20; x.lineCap = 'round'; x.beginPath(); x.moveTo(240, 250); x.quadraticCurveTo(300, 300, 290, 460); x.stroke(); }, 0.3],
    [(x) => { x.fillStyle = C.kidL; beanPath(x, 170, 220, 1.12); x.fill(); }, 0.8],
    [(x) => { x.fillStyle = C.med; const r = H.rng(71); [[-0.95, 0], [-0.5, 0], [0, 0], [0.5, 0], [0.95, 0]].forEach(([a], i) => { const ca = Math.PI + a, bx = 222 + Math.cos(ca) * 40, by = 228 + Math.sin(ca) * 40, tx = 222 + Math.cos(ca) * 150, ty = 228 + Math.sin(ca) * 150, nx = -Math.sin(ca) * 48, ny = Math.cos(ca) * 48; blobPath(x, cutLines(r, [[bx, by], [tx + nx, ty + ny], [tx - nx, ty - ny], [bx, by]], 18, 0.5)); }); }, 0.3],
    [(x) => { x.fillStyle = C.pelvis; x.beginPath(); x.moveTo(250, 250); x.quadraticCurveTo(170, 300, 150, 230); x.quadraticCurveTo(130, 180, 175, 150); x.quadraticCurveTo(220, 170, 250, 210); x.closePath(); x.fill(); }, 0.35],
  ]));
  const heartS = () => cache('heart', () => compose(220, 210, [[(x) => { x.fillStyle = C.blood; x.beginPath(); x.moveTo(110, 190); x.bezierCurveTo(14, 126, 14, 34, 76, 38); x.quadraticCurveTo(103, 41, 110, 70); x.quadraticCurveTo(118, 41, 144, 38); x.bezierCurveTo(206, 34, 204, 126, 110, 190); x.fill(); }, 0.7], [(x) => { x.fillStyle = 'rgba(255,255,255,0.35)'; ell(x, 71, 72, 74, 16, 10, -0.6); }, 0.1]]));
  const dropS = (col, s = 1) => cache('drop' + col + s, () => paperize(60 * s, 80 * s, (x) => { x.fillStyle = col; x.beginPath(); x.moveTo(30 * s, 4 * s); x.quadraticCurveTo(56 * s, 44 * s, 52 * s, 56 * s); x.arc(30 * s, 54 * s, 22 * s, 0, Math.PI); x.quadraticCurveTo(4 * s, 44 * s, 30 * s, 4 * s); x.fill(); }, { seed: 33, hi: 0.3 }));
  const dotS = (col, r = 9) => cache('dot' + col + r, () => paperize(r * 2 + 6, r * 2 + 6, (x) => { x.fillStyle = col; ell(x, 540 + r, r + 3, r + 3, r, r * 0.95); }, { seed: 41, hi: 0.25, lo: 0.2 }));
  const cubeS = (col, n = 26) => cache('cube' + col + n, () => compose(n + 14, n + 14, [[(x) => { x.fillStyle = col; blobPath(x, rect(H.rng(n), 7, 7, n + 7, n + 7, 12, 0.4)); }, 0.3], [(x) => { x.fillStyle = 'rgba(0,0,0,0.12)'; x.fillRect(n * 0.55 + 7, 7, n * 0.45, n); }, 0]]));
  const rbcS = () => cache('rbc', () => compose(70, 70, [[(x) => { x.fillStyle = C.blood; ell(x, 77, 35, 35, 28, 28); }, 0.4], [(x) => { x.fillStyle = '#a82a2e'; ell(x, 78, 35, 35, 12, 12); }, 0.15]]));
  const proteinS = () => cache('prot', () => paperize(80, 70, (x) => { x.fillStyle = C.protein; const r = H.rng(5); x.beginPath(); [[26, 30, 18], [46, 24, 16], [54, 44, 16], [32, 48, 16]].forEach(([a, b, rr]) => poly(x, circPts(r, a, b, rr, 8, 0.5))); x.fill(); }, { seed: 52 }));
  const cardS = (w, h, col = C.card, seed = 1) => cache('card' + w + h + col, () => paperize(w, h, (x) => { x.fillStyle = col; x.beginPath(); poly(x, cutLines(H.rng(seed + w), [[6, 6], [w - 6, 6], [w - 6, h - 6], [6, h - 6], [6, 6]], 26, 0.6)); x.fill(); }, { seed: seed + 40 }));
  const sprAt = (ctx, spr, x, y, t, st, op = {}) => { const A = op.pop ? popIn(t, st, op.du ?? 0.35) : dropIn(t, st, op.du ?? 0.4, op.dist ?? 60); if (!A) return null; put(ctx, spr, x, y + (A.dy || 0), { s: A.s * (op.s ?? 1), sx: op.sx != null ? op.sx * A.s : undefined, sy: op.sy != null ? op.sy * A.s : undefined, rot: op.rot, d: (op.d ?? 1) + A.d }); return A; };
  const burstAt = (ctx, x, y, t, st, s = 1, col) => { const u = cl((t - st) / 0.4); if (u <= 0) return; put(ctx, burstSpr(col), x, y, { s: s * (0.2 + 0.8 * E.back(u)), rot: t * 0.25, d: 0.7 }); };
  const kb = (ctx, t, a, b, s0, s1, cx = 640, cy = 360) => { const u = E.inOut(ph(t, a, b)), s = s0 + (s1 - s0) * u; ctx.translate(cx, cy); ctx.scale(s, s); ctx.translate(-cx, -cy); };
  const crossOn = (ctx, x, y, t, st, s = 1) => { const A = popIn(t, st, 0.3); if (A) put(ctx, crossSpr(), x, y, { s: A.s * s, d: 1 + A.d }); };
  const checkOn = (ctx, x, y, t, st, s = 1) => { const A = popIn(t, st, 0.3); if (A) put(ctx, checkSpr(), x, y, { s: A.s * s, d: 1 + A.d }); };
  const sign = (ctx, t, st, x, y, w, h, l1, c1, p1, l2, c2, p2, o = {}) => { const A = dropIn(t, st, 0.4, 60); if (!A) return; put(ctx, cardS(w, h, o.bg || C.card), x, y + A.dy, { d: 1.2 + A.d, rot: o.rot ?? 0 }); if (l2) { put(ctx, wordSpr(l1, p1, c1, null), x, y - h * 0.2 + A.dy, { d: 0.25, rot: o.rot ?? 0 }); put(ctx, wordSpr(l2, p2, c2, null), x, y + h * 0.24 + A.dy, { d: 0.25, rot: o.rot ?? 0 }); } else put(ctx, wordSpr(l1, p1, c1, null), x, y + A.dy, { d: 0.25, rot: o.rot ?? 0 }); };
  const counter = (ctx, t, st, du, to, x, y, px, col, suffix = '') => { const u = cl((t - st) / du); if (u <= 0) return; numberRow(ctx, fmt(to * E.out(u)) + suffix, x, y, px, col, { center: true }); };
  const bottleS = () => cache('bottle', () => compose(70, 150, [[(x) => { x.fillStyle = C.skyL; blobPath(x, cutLines(H.rng(91), [[24, 34], [46, 34], [62, 58], [62, 144], [8, 144], [8, 58], [24, 34]], 16, 0.4)); x.fillStyle = C.teal; x.fillRect(25, 10, 20, 24); }, 0.5], [(x) => { x.fillStyle = C.water; x.globalAlpha = 0.6; x.fillRect(12, 72, 46, 68); }, 0.15]]));
  const fistS = () => cache('fist', () => compose(300, 300, [
    [(x) => { x.fillStyle = C.skinD; blobPath(x, cutLines(H.rng(3), [[96, 300], [96, 220], [210, 220], [210, 300]], 20, 0.5)); }, 0.4],
    [(x) => { x.fillStyle = C.skin; x.beginPath(); x.moveTo(60, 120); x.quadraticCurveTo(60, 60, 120, 60); x.lineTo(220, 60); x.quadraticCurveTo(262, 60, 262, 110); x.lineTo(262, 190); x.quadraticCurveTo(262, 240, 210, 240); x.lineTo(110, 240); x.quadraticCurveTo(60, 240, 60, 190); x.closePath(); x.fill(); }, 0.7],
    [(x) => { x.strokeStyle = C.skinD; x.lineWidth = 5; x.lineCap = 'round'; [110, 160, 210].forEach((px) => { x.beginPath(); x.moveTo(px, 66); x.lineTo(px, 120); x.stroke(); }); }, 0],
    [(x) => { x.fillStyle = '#f6d3b4'; x.beginPath(); x.moveTo(52, 150); x.quadraticCurveTo(70, 120, 150, 140); x.quadraticCurveTo(200, 150, 196, 176); x.quadraticCurveTo(150, 190, 90, 186); x.quadraticCurveTo(48, 182, 52, 150); x.fill(); }, 0.35],
  ]));
  // a person seen from the back, with the lower ribs drawn on
  const backS = () => cache('back', () => compose(560, 720, [
    [(x) => { x.fillStyle = C.skin; ell(x, 11, 280, 90, 70, 80); x.beginPath(); x.moveTo(240, 150); x.lineTo(320, 150); x.lineTo(330, 190); x.quadraticCurveTo(520, 200, 540, 300); x.lineTo(500, 720); x.lineTo(60, 720); x.lineTo(20, 300); x.quadraticCurveTo(40, 200, 230, 190); x.closePath(); x.fill(); }, 0.8],
    [(x) => { x.fillStyle = '#5b3a26'; x.beginPath(); x.ellipse(280, 70, 74, 62, 0, Math.PI, 0); x.lineTo(354, 100); x.quadraticCurveTo(280, 120, 206, 100); x.closePath(); x.fill(); }, 0.3],
    [(x) => { x.strokeStyle = 'rgba(255,248,236,0.9)'; x.lineWidth = 12; x.lineCap = 'round'; for (let i = 0; i < 5; i++) { const y = 250 + i * 46; [-1, 1].forEach((s) => { x.beginPath(); x.moveTo(280 + s * 16, y); x.bezierCurveTo(280 + s * 120, y - 20, 280 + s * 200, y + 10, 280 + s * 210, y + 50 + i * 4); x.stroke(); }); } x.fillStyle = 'rgba(255,248,236,0.9)'; for (let y = 200; y < 700; y += 34) x.fillRect(272, y, 16, 24); }, 0.2],
  ]));
  const phoneS = () => cache('phone', () => compose(130, 230, [[(x) => { x.fillStyle = C.dark; blobPath(x, cutLines(H.rng(7), [[10, 10], [120, 10], [120, 220], [10, 220], [10, 10]], 20, 0.4)); }, 0.5], [(x) => { x.fillStyle = C.teal; x.fillRect(22, 30, 86, 160); x.fillStyle = C.gold; x.fillRect(34, 46, 26, 26); x.fillRect(70, 46, 26, 26); x.fillStyle = C.coral; x.fillRect(34, 84, 26, 26); }, 0.15]]));
  const scaleS = () => cache('scale', () => compose(820, 420, [
    [(x) => { x.fillStyle = C.tealD; blobPath(x, cutLines(H.rng(2), [[380, 120], [440, 120], [470, 380], [350, 380], [380, 120]], 20, 0.4)); x.fillRect(260, 380, 300, 34); }, 0.6],
    [(x) => { x.fillStyle = C.gold; x.fillRect(80, 104, 660, 24); x.beginPath(); x.arc(410, 116, 30, 0, TAU); x.fill(); }, 0.5],
  ]));
  const panS = () => cache('pan', () => compose(300, 90, [[(x) => { x.fillStyle = C.cream; x.beginPath(); x.moveTo(10, 20); x.quadraticCurveTo(150, 110, 290, 20); x.closePath(); x.fill(); x.fillStyle = C.gold; x.fillRect(140, 0, 20, 30); }, 0.5]]));
  // nephron diagram: capsule cup + glomerulus ball + a long twisty tube
  const NEPH = [[300, 260], [380, 250], [430, 200], [480, 260], [530, 200], [580, 260], [610, 330], [620, 560], [650, 600], [690, 560], [700, 330], [730, 250], [790, 210], [840, 270], [890, 210], [940, 250], [960, 300], [960, 640]];
  const smoothPath = (x, pts) => { x.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length - 1; i++) { const mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2; x.quadraticCurveTo(pts[i][0], pts[i][1], mx, my); } x.lineTo(...pts[pts.length - 1]); };
  const tubeS = () => cache('tube', () => compose(W, HH, [
    [(x) => { x.strokeStyle = C.kidD; x.lineWidth = 38; x.lineCap = 'round'; x.lineJoin = 'round'; x.beginPath(); smoothPath(x, NEPH); x.stroke(); }, 0.6],
    [(x) => { x.strokeStyle = C.urineL; x.lineWidth = 20; x.lineCap = 'round'; x.lineJoin = 'round'; x.beginPath(); smoothPath(x, NEPH); x.stroke(); }, 0.1],
  ]));
  const capsuleS = () => cache('caps', () => compose(260, 260, [[(x) => { x.fillStyle = C.cream; x.beginPath(); x.arc(130, 130, 112, 0, TAU); x.arc(130, 130, 84, 0, TAU, true); x.fill(); x.globalCompositeOperation = 'destination-out'; x.fillRect(0, 100, 40, 60); }, 0.5]]));
  const gloS = (key = 'g', R = 70) => cache('glo' + key + R, () => compose(R * 2 + 120, R * 2 + 40, [
    [(x) => { x.lineCap = 'round'; x.strokeStyle = C.red; x.lineWidth = R * 0.22; x.beginPath(); x.moveTo(0, R + 10); x.lineTo(R + 40, R + 14); x.stroke(); x.strokeStyle = C.vein; x.beginPath(); x.moveTo(0, R + 40); x.lineTo(R + 40, R + 32); x.stroke(); }, 0.3],
    [(x) => { x.strokeStyle = C.blood; x.lineWidth = R * 0.2; x.lineCap = 'round'; const r = H.rng(R); for (let k = 0; k < 9; k++) { const a = r() * TAU, rr = r.range(R * 0.25, R * 0.6); x.beginPath(); x.arc(R + 70 + Math.cos(a) * rr * 0.5, R + 20 + Math.sin(a) * rr * 0.5, rr * 0.6, a, a + 4.6); x.stroke(); } }, 0.4],
  ]));
  const coffeeS = () => cache('coffee', () => compose(360, 380, [
    [(x) => { x.fillStyle = '#e9d9b8'; x.beginPath(); x.moveTo(20, 30); x.lineTo(340, 30); x.lineTo(210, 260); x.lineTo(150, 260); x.closePath(); x.fill(); }, 0.6],
    [(x) => { x.strokeStyle = 'rgba(150,110,60,0.5)'; x.lineWidth = 4; for (let i = 0; i < 7; i++) { x.beginPath(); x.moveTo(50 + i * 44, 34); x.lineTo(160 + i * 7, 254); x.stroke(); } }, 0],
    [(x) => { x.fillStyle = C.brown; ell(x, 9, 180, 340, 110, 28); }, 0.4],
  ]));
  const sieveS = () => cache('sieve', () => compose(420, 260, [
    [(x) => { x.fillStyle = C.teal; x.beginPath(); x.moveTo(30, 60); x.quadraticCurveTo(210, 300, 390, 60); x.closePath(); x.fill(); x.fillRect(380, 50, 40, 18); x.globalCompositeOperation = 'destination-out'; const r = H.rng(4); for (let i = 0; i < 40; i++) { const px = 80 + r() * 260, py = 80 + r() * 90; if (py < 60 + Math.sin((px - 30) / 360 * Math.PI) * 120) { x.beginPath(); x.arc(px, py, 6, 0, TAU); x.fill(); } } }, 0.6],
  ]));
  const pastaS = (i) => cache('pasta' + i, () => paperize(90, 40, (x) => { x.fillStyle = '#f4d27a'; x.save(); x.translate(45, 20); x.rotate(i * 0.7); x.beginPath(); x.moveTo(-36, -8); x.lineTo(36, -12); x.lineTo(32, 10); x.lineTo(-34, 12); x.closePath(); x.fill(); x.restore(); }, { seed: 60 + i }));
  const jarS = () => cache('jar', () => paperize(260, 360, (x) => { x.strokeStyle = C.card; x.lineWidth = 16; x.lineJoin = 'round'; x.beginPath(); x.moveTo(40, 30); x.lineTo(40, 320); x.quadraticCurveTo(40, 344, 64, 344); x.lineTo(196, 344); x.quadraticCurveTo(220, 344, 220, 320); x.lineTo(220, 30); x.stroke(); }, { seed: 71 }));
  const liquidS = (col) => cache('liq' + col, () => paperize(176, 310, (x) => { x.fillStyle = col; x.fillRect(0, 0, 176, 310); }, { seed: 72, rim: false, tex: 0.6 }));
  // jar with a fill level 0..1 (liquid scaled up from the bottom)
  const jarAt = (ctx, x, y, lvl, col, s = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); if (lvl > 0.003) { const L = liquidS(col), h = 306 * lvl; ctx.drawImage(L, 0, 310 - h, 176, h, -88, 158 - h, 176, h); } shadowDraw(ctx, jarS(), -130, -180, 0.8); ctx.restore(); };
  const doorS = () => cache('door', () => compose(320, 520, [[(x) => { x.fillStyle = C.brown; blobPath(x, rect(H.rng(5), 10, 10, 310, 510, 30, 0.5)); }, 0.7], [(x) => { x.fillStyle = '#93603f'; x.fillRect(40, 50, 240, 170); x.fillRect(40, 270, 240, 200); x.fillStyle = C.gold; x.beginPath(); x.arc(270, 280, 14, 0, TAU); x.fill(); }, 0.25]]));
  const clockS = () => cache('clock', () => compose(200, 200, [[(x) => { x.fillStyle = C.card; ell(x, 21, 100, 100, 88, 88); }, 0.5], [(x) => { x.fillStyle = C.ink; for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; x.fillRect(100 + Math.cos(a) * 70 - 4, 100 + Math.sin(a) * 70 - 4, 8, 8); } }, 0.1]]));
  const handS = (len, w) => cache('hand' + len, () => paperize(w + 6, len + 6, (x) => { x.fillStyle = C.coral; x.fillRect(3, 3, w, len); }, { seed: len }));
  const bladderS = () => cache('blad', () => paperize(300, 280, (x) => { x.strokeStyle = C.card; x.lineWidth = 16; x.beginPath(); x.moveTo(110, 20); x.quadraticCurveTo(20, 40, 30, 150); x.quadraticCurveTo(50, 250, 150, 256); x.quadraticCurveTo(250, 250, 270, 150); x.quadraticCurveTo(280, 40, 190, 20); x.stroke(); }, { seed: 81 }));
  const binS = () => cache('bin', () => compose(300, 340, [[(x) => { x.fillStyle = '#6b7a8a'; blobPath(x, cutLines(H.rng(6), [[30, 70], [270, 70], [244, 330], [56, 330], [30, 70]], 24, 0.5)); x.fillStyle = '#58687a'; x.fillRect(16, 46, 268, 30); }, 0.7], [(x) => { x.strokeStyle = 'rgba(0,0,0,0.25)'; x.lineWidth = 6; [100, 150, 200].forEach((px) => { x.beginPath(); x.moveTo(px, 100); x.lineTo(px - (px - 150) * 0.1, 310); x.stroke(); }); }, 0]]));
  const coinS = (lbl) => cache('coin' + lbl, () => compose(150, 150, [[(x) => { x.fillStyle = C.gold; ell(x, 31, 75, 75, 64, 64); }, 0.5], [(x) => { x.fillStyle = '#d99a2b'; ell(x, 32, 75, 75, 48, 48); }, 0.15], [(x) => { x.font = AF(lbl.length > 4 ? 22 : 28); x.fillStyle = C.ink; const w = measure(lbl, x.font); x.fillText(lbl, 75 - w / 2, 86); }, 0.1]]));
  const glassS = () => cache('glass', () => paperize(160, 220, (x) => { x.strokeStyle = C.card; x.lineWidth = 10; x.beginPath(); x.moveTo(20, 10); x.lineTo(36, 210); x.lineTo(124, 210); x.lineTo(140, 10); x.stroke(); }, { seed: 91 }));
  const envS = (lbl, col) => cache('env' + lbl, () => compose(300, 200, [[(x) => { x.fillStyle = C.card; blobPath(x, rect(H.rng(lbl.length), 10, 10, 290, 190, 26, 0.5)); }, 0.6], [(x) => { x.fillStyle = col; x.beginPath(); x.moveTo(12, 12); x.lineTo(150, 110); x.lineTo(288, 12); x.closePath(); x.fill(); }, 0.25], [(x) => { x.font = AF(38); x.fillStyle = C.ink; const w = measure(lbl, x.font); x.fillText(lbl, 150 - w / 2, 172); }, 0.1]]));
  const gaugeS = () => cache('gauge', () => compose(360, 240, [[(x) => { x.fillStyle = C.card; x.beginPath(); x.arc(180, 200, 170, Math.PI, 0); x.closePath(); x.fill(); }, 0.6], [(x) => { [[C.teal, Math.PI, Math.PI * 1.45], [C.green, Math.PI * 1.45, Math.PI * 1.6], [C.coral, Math.PI * 1.6, Math.PI * 2]].forEach(([c, a, b]) => { x.fillStyle = c; x.beginPath(); x.arc(180, 200, 150, a, b); x.arc(180, 200, 110, b, a, true); x.closePath(); x.fill(); }); }, 0.2]]));
  const needleS = () => cache('needle', () => paperize(24, 150, (x) => { x.fillStyle = C.ink; x.beginPath(); x.moveTo(12, 2); x.lineTo(20, 130); x.lineTo(4, 130); x.closePath(); x.fill(); x.beginPath(); x.arc(12, 132, 12, 0, TAU); x.fill(); }, { seed: 93 }));
  const boneS = (key = 'b') => cache('bone' + key, () => compose(420, 160, [[(x) => { x.fillStyle = C.bone; x.fillRect(70, 56, 280, 48); [[60, 50], [60, 110], [360, 50], [360, 110]].forEach(([a, b], i) => ell(x, 100 + i, a, b, 44, 40)); }, 0.6], [(x) => { x.fillStyle = 'rgba(200,80,80,0.35)'; ell(x, 109, 210, 80, 110, 14); }, 0.1]]));
  const sunS = () => cache('sun', () => compose(300, 300, [[(x) => { x.fillStyle = C.gold; x.beginPath(); for (let i = 0; i < 24; i++) { const a = i / 24 * TAU, rr = i % 2 ? 100 : 145; i ? x.lineTo(150 + Math.cos(a) * rr, 150 + Math.sin(a) * rr) : x.moveTo(150 + Math.cos(a) * rr, 150 + Math.sin(a) * rr); } x.closePath(); x.fill(); }, 0.5], [(x) => { x.fillStyle = '#f6cc6e'; ell(x, 44, 150, 150, 86, 86); }, 0.3], [(x) => { x.font = AF(110); x.fillStyle = C.coral; const w = measure('D', x.font); x.fillText('D', 150 - w / 2, 190); }, 0.2]]));
  const noseS = () => cache('nose', () => compose(420, 420, [[(x) => { x.fillStyle = C.skin; x.beginPath(); x.moveTo(210, 20); x.quadraticCurveTo(250, 160, 330, 260); x.quadraticCurveTo(400, 340, 300, 370); x.quadraticCurveTo(210, 400, 120, 370); x.quadraticCurveTo(20, 340, 90, 260); x.quadraticCurveTo(170, 160, 210, 20); x.fill(); }, 0.8], [(x) => { x.fillStyle = C.plum; ell(x, 51, 160, 330, 34, 20, 0.3); ell(x, 52, 262, 330, 34, 20, -0.3); }, 0.2]]));
  const toiletS = () => cache('toilet', () => compose(260, 320, [[(x) => { x.fillStyle = C.card; x.fillRect(40, 10, 180, 120); x.beginPath(); x.moveTo(10, 150); x.lineTo(250, 150); x.quadraticCurveTo(240, 260, 170, 270); x.lineTo(180, 310); x.lineTo(80, 310); x.lineTo(90, 270); x.quadraticCurveTo(20, 260, 10, 150); x.fill(); }, 0.7], [(x) => { x.fillStyle = C.skyL; ell(x, 61, 130, 160, 100, 20); }, 0.1]]));
  const breath = (t, t0, per = 1.0) => 0.5 - 0.5 * Math.cos(TAU * (t - t0) / per);

  // ================= intro =================
  const sHook = (ctx, t) => {
    ctx.drawImage(paperBg('hook', '#2b2d5a', '#3b3f78'), 0, 0);
    const bob = Math.sin(t * 2.2) * 6;
    const A = dropIn(t, 0.15, 0.5, 90);
    if (A) { ctx.save(); ctx.translate(0, A.dy + bob); kidneyPair(ctx, 360, 380, 0.95, 150); ctx.restore(); }
    // blood drops streaming in
    if (t > 0.6) for (let k = 0; k < 8; k++) { const u = ((t * 0.5 + k / 8) % 1); put(ctx, dropS(C.blood, 0.6), 80 + u * 560, 160 + Math.sin(u * 6 + k) * 20, { d: 0.5, a: Math.sin(u * Math.PI) }); }
    const n = dropIn(t, P(0, '180') - 0.35, 0.4, 60);
    if (n) { put(ctx, cardS(500, 230, C.card), 930, 300 + n.dy, { d: 1.3 + n.d, rot: 0.02 }); counter(ctx, t, P(0, '180') - 0.3, 0.5, 180, 900, 280 + n.dy, 120, C.coral); put(ctx, wordSpr('L', 90, C.ink, null), 1090, 280 + n.dy, { d: 0.3 }); put(ctx, wordSpr('A DAY', 46, C.tealD, null), 930, 370 + n.dy, { d: 0.3 }); }
    sign(ctx, t, P(1, 'pee') - 0.25, 930, 560, 460, 120, 'PEE 180 L?', C.ink, 58, null, null, null, { rot: -0.03, bg: C.gold });
    crossOn(ctx, 1150, 520, t, P(1, 'litres') - 0.1, 0.8);
  };
  const sBottles = (ctx, t) => {
    ctx.drawImage(stripeBg('btl', '#cfe9ef', '#bfe0e8'), 0, 0);
    const st = P(2, '180') - 0.2, n = Math.floor(cl((t - st) / 2.4) * 180);
    for (let i = 0; i < n; i++) { const c = i % 20, r = Math.floor(i / 20), A = cl((t - st - i * (2.4 / 180)) / 0.25); put(ctx, bottleS(), 120 + c * 54, 130 + r * 52 - (1 - E.back(A)) * 30, { s: 0.42, d: 0.5 }); }
    const A = dropIn(t, P(2, 'every') - 0.2, 0.4, 60);
    if (A) { put(ctx, cardS(620, 150, C.card), 640, 620 + A.dy, { d: 1.4 + A.d }); counter(ctx, t, P(2, 'every') - 0.2, 0.01, 180, 470, 620 + A.dy, 84, C.coral); put(ctx, wordSpr('BOTTLES', 54, C.ink, null), 730, 620 + A.dy, { d: 0.3 }); }
  };
  const sFist = (ctx, t) => {
    ctx.drawImage(paperBg('fist', '#f2b545', '#f6cc6e'), 0, 0);
    sprAt(ctx, kidneyS('f', { vessels: false }), 420, 370, t, PS(3) + 0.1, { s: 1.1 });
    tag(ctx, 'KIDNEY', 420, 620, t, P(3, 'kidney') - 0.1, { px: 44, col: C.kid });
    sprAt(ctx, fistS(), 870, 360, t, P(3, 'fist') - 0.4, { s: 1.15 });
    tag(ctx, 'FIST', 870, 620, t, P(3, 'fist') - 0.1, { px: 44, col: C.ink });
    tag(ctx, '=', 645, 370, t, P(3, 'size') - 0.1, { px: 90, col: C.coral, back: null });
  };
  const sQuestion = (ctx, t) => {
    ctx.drawImage(paperBg('q', '#58b0a6', '#7cc4ba'), 0, 0);
    kb(ctx, t, PS(4), PE(6), 1, 1.06);
    sprAt(ctx, kidneyS('q', { vessels: false }), 470, 330, t, PS(4), { s: 0.9, rot: 0.15 });
    sprAt(ctx, kidneyS('q', { vessels: false }), 760, 350, t, PS(4) + 0.15, { sx: -0.9, sy: 0.9, rot: -0.15 });
    tag(ctx, 'BEANS?', 615, 120, t, P(4, 'beans') - 0.15, { px: 52, col: C.ink, rot: -0.03 });
    // drops of blood falling past them (the "wash")
    if (t > P(4, 'wash') - 0.2) for (let k = 0; k < 10; k++) { const u = ((t - P(4, 'wash')) * 0.6 + k / 10) % 1; put(ctx, dropS(C.blood, 0.5), 300 + k * 70, -40 + u * 760, { d: 0.6 }); }
    sign(ctx, t, P(5, 'keep') - 0.3, 640, 610, 640, 130, 'WHAT TO KEEP?', C.coral, 62, null, null, null, { rot: 0.02 });
    tag(ctx, "LET'S GO INSIDE", 640, 470, t, PS(6), { px: 40, col: C.tealD, bw: 12 });
  };

  // ================= chapter 1: where they live =================
  const sWhere = (ctx, t) => {
    ctx.drawImage(roomBg('wh', '#e8d6bd', '#dcc5a8', '#a8724c'), 0, 0);
    const zoom = io(t, P(9, 'high') - 0.3, P(10, 'ribs'));
    ctx.save(); ctx.translate(0, zoom * 40);
    sprAt(ctx, backS(), 400, 400, t, PS(7) + 0.2, { s: 0.92 });
    // wrong spot: low on the back
    const wrong = t < P(9, 'kidneys');
    if (wrong) { const A = popIn(t, P(8, 'low') - 0.1, 0.3); if (A) { put(ctx, ringSpr(C.coral), 400, 610, { s: 0.42 * A.s, d: 0.6 }); crossOn(ctx, 400, 610, t, P(8, 'point'), 0.6); } }
    // right spot: high, under the bottom ribs, one each side
    sprAt(ctx, kidneyS('bk', { vessels: false }), 330, 470, t, P(9, 'kidneys') - 0.2, { s: 0.36, rot: 0.15, pop: true });
    sprAt(ctx, kidneyS('bk', { vessels: false }), 470, 476, t, P(10, 'side') - 0.6, { sx: -0.36, sy: 0.36, rot: -0.15, pop: true });
    ctx.restore();
    tag(ctx, 'NOT DOWN HERE', 900, 230, t, P(8, 'low') - 0.15, { px: 40, col: C.red, rot: -0.04 });
    tag(ctx, 'HIGH UP', 900, 330, t, P(9, 'high') - 0.15, { px: 54, col: C.tealD, rot: 0.02 });
    tag(ctx, 'UNDER THE RIBS', 900, 430, t, P(10, 'ribs') - 0.15, { px: 40, col: C.ink, rot: -0.02 });
    if (t > P(9, 'high')) arrow(ctx, 760, 340, 640, 380, 520, 450, io(t, P(9, 'high'), P(9, 'back')), C.coral, 11);
  };
  const sWeight = (ctx, t) => {
    ctx.drawImage(stripeBg('wt', '#f6d2d4', '#f0bcc2'), 0, 0);
    const SA = dropIn(t, PS(11) - 0.3, 0.45, 80); if (!SA) return;
    const tilt = 0.18 * (1 - E.out(ph(t, P(12, 'smartphone') - 0.3, P(12, 'smartphone') + 0.5))) * (t > P(11, 'weighs') ? 1 : 0);
    ctx.save(); ctx.translate(0, SA.dy);
    put(ctx, scaleS(), 640, 430, { d: 1.2 });
    const lx = 640 - Math.cos(tilt) * 300, ly = 330 + Math.sin(tilt) * 300, rx = 640 + Math.cos(tilt) * 300, ry = 330 - Math.sin(tilt) * 300;
    put(ctx, panS(), lx, ly + 40, { d: 0.8 }); put(ctx, panS(), rx, ry + 40, { d: 0.8 });
    sprAt(ctx, kidneyS('wt', { vessels: false }), lx, ly - 50, t, P(11, 'weighs') - 0.3, { s: 0.42 });
    sprAt(ctx, phoneS(), rx, ry - 50, t, P(12, 'smartphone') - 0.35, { s: 0.75, rot: 0.1 });
    ctx.restore();
    const n = dropIn(t, P(11, '150') - 0.3, 0.4, 60);
    if (n) { put(ctx, cardS(380, 150, C.card), 640, 130 + n.dy, { d: 1.2 + n.d }); numberRow(ctx, '150 g', 640, 130 + n.dy, 90, C.coral, { center: true }); }
  };
  const sHeart = (ctx, t) => {
    ctx.drawImage(paperBg('ht', '#2f6b8a', '#4d8fa8'), 0, 0);
    const beat = 1 + 0.07 * Math.pow(Math.max(0, Math.sin(t * 7)), 6);
    sprAt(ctx, heartS(), 300, 330, t, PS(13) - 0.2, { s: 1.3 * beat });
    tag(ctx, 'HEART', 300, 520, t, P(14, 'heart') - 0.15, { px: 40, col: C.blood });
    const kA = dropIn(t, P(15, 'kidneys') - 0.5, 0.4, 60);
    if (kA) { ctx.save(); ctx.translate(0, kA.dy); kidneyPair(ctx, 980, 340, 0.6, 140); ctx.restore(); }
    if (t > P(14, 'everything')) { arrow(ctx, 430, 300, 640, 200, 830, 300, io(t, P(14, 'everything'), P(15, 'straight') + 0.3), C.red, 21); }
    // pie: one fifth highlighted
    const pa = popIn(t, P(14, 'one') - 0.2, 0.35);
    if (pa) { put(ctx, cardS(250, 250, C.card), 640, 520, { s: pa.s, d: 1 + pa.d }); const pie = cache('pie', () => paperize(200, 200, (x) => { x.fillStyle = C.skyL; x.beginPath(); x.arc(100, 100, 92, 0, TAU); x.fill(); x.fillStyle = C.red; x.beginPath(); x.moveTo(100, 100); x.arc(100, 100, 92, -Math.PI / 2, -Math.PI / 2 + TAU / 5); x.closePath(); x.fill(); }, { seed: 99 })); put(ctx, pie, 640, 500, { s: pa.s * 0.9, d: 0.6 }); }
    tag(ctx, '1/5', 640, 640, t, P(14, 'fifth') - 0.15, { px: 52, col: C.red });
    const n = dropIn(t, P(16, 'litre') - 0.35, 0.4, 60);
    if (n) { put(ctx, cardS(460, 140, C.gold), 980, 600 + n.dy, { d: 1.2 + n.d, rot: 0.02 }); put(ctx, wordSpr('1 L / MINUTE', 54, C.ink, null), 980, 600 + n.dy, { d: 0.3, rot: 0.02 }); }
  };
  const loopPt = (u) => { const a = u * TAU; return [640 + Math.cos(a) * 420, 380 + Math.sin(a) * 210]; };
  const sLoop = (ctx, t) => {
    ctx.drawImage(stripeBg('lp', '#3b3f78', '#33366a'), 0, 0);
    const ring = cache('loopring', () => paperize(W, HH, (x) => { x.strokeStyle = C.blood; x.lineWidth = 30; x.beginPath(); x.ellipse(640, 380, 420, 210, 0, 0, TAU); x.stroke(); }, { seed: 123 }));
    shadowDraw(ctx, ring, 0, 0, 0.8);
    put(ctx, heartS(), 220, 380, { s: 0.75 * (1 + 0.06 * Math.pow(Math.max(0, Math.sin(t * 7)), 6)), d: 1.2 });
    kidneyPair(ctx, 1060, 380, 0.42, 100);
    for (let k = 0; k < 12; k++) { const u = ((t - PS(17)) * 0.35 + k / 12) % 1, [x, y] = loopPt(u); put(ctx, dotS(C.red, 11), x, y, { d: 0.4 }); }
    const A = dropIn(t, P(17, 'again') - 0.2, 0.4, 60);
    if (A) { put(ctx, cardS(520, 120, C.card), 640, 380 + A.dy, { d: 1.2 + A.d }); put(ctx, wordSpr('AGAIN & AGAIN', 50, C.coral, null), 640, 380 + A.dy, { d: 0.3 }); }
    tag(ctx, 'ALL DAY', 640, 120, t, P(17, 'day') - 0.15, { px: 44, col: C.gold, back: '#2b2d5a' });
  };

  // ================= chapter 2: a million filters =================
  const sZoom = (ctx, t) => {
    ctx.drawImage(paperBg('zm', '#f6d2d4', '#f2c0c6'), 0, 0);
    const z = io(t, P(19, 'packed'), P(20, 'nephrons') + 0.3);
    ctx.save(); ctx.translate(640 - z * 260, 360); ctx.scale(1 + z * 0.4, 1 + z * 0.4); ctx.translate(-640, -360);
    sprAt(ctx, crossS(), 520, 380, t, PS(18) + 0.4, { s: 1.15 });
    ctx.restore();
    // loupe circle with tiny nephrons
    const lp = popIn(t, P(19, 'filters') - 0.3, 0.4);
    if (lp) {
      const L = cache('loupe', () => compose(360, 360, [[(x) => { x.fillStyle = C.gold; x.beginPath(); x.arc(180, 180, 172, 0, TAU); x.arc(180, 180, 150, 0, TAU, true); x.fill('evenodd'); x.fillStyle = C.kidL; x.beginPath(); x.arc(180, 180, 150, 0, TAU); x.fill(); }, 0.6], [(x) => { const r = H.rng(13); x.lineCap = 'round'; for (let i = 0; i < 9; i++) { const cx = 70 + (i % 3) * 110, cy = 70 + Math.floor(i / 3) * 110; x.strokeStyle = C.urineL; x.lineWidth = 7; x.beginPath(); x.moveTo(cx, cy); x.bezierCurveTo(cx + 30, cy - 20, cx + 40, cy + 30, cx + 20, cy + 70); x.stroke(); x.fillStyle = C.blood; x.beginPath(); x.arc(cx, cy, 13 + r() * 3, 0, TAU); x.fill(); } }, 0.3]]));
      put(ctx, L, 960, 300, { s: lp.s, d: 1.6 + lp.d });
    }
    const n = dropIn(t, P(19, 'million') - 0.4, 0.4, 60);
    if (n) { put(ctx, cardS(520, 200, C.card), 960, 600 + n.dy, { d: 1.3 + n.d, rot: 0.02 }); counter(ctx, t, P(19, 'million') - 0.35, 0.7, 1000000, 960, 570 + n.dy, 74, C.coral); }
    tag(ctx, 'NEPHRONS', 960, 650, t, P(20, 'nephrons') - 0.15, { px: 44, col: C.ink, back: null });
  };
  const sNephron = (ctx, t) => {
    ctx.drawImage(stripeBg('np', '#fbf0e0', '#f3e2cc'), 0, 0);
    const reveal = io(t, P(21, 'starts') - 0.3, P(22, 'glomerulus') + 1.5);
    if (reveal > 0) { ctx.save(); ctx.beginPath(); ctx.rect(0, 0, 200 + reveal * 1100, HH); ctx.clip(); shadowDraw(ctx, tubeS(), 0, 0, 0.8); ctx.restore(); }
    sprAt(ctx, capsuleS(), 230, 270, t, PS(21) - 0.1, { s: 1 });
    sprAt(ctx, gloS('np', 70), 190, 270, t, P(21, 'ball') - 0.3, { pop: true, s: 1 });
    tag(ctx, 'GLOMERULUS', 250, 470, t, P(22, 'glomerulus') - 0.15, { px: 44, col: C.blood, rot: -0.03 });
    tag(ctx, 'ONE NEPHRON', 640, 80, t, PS(21) + 0.2, { px: 46, col: C.ink });
    tag(ctx, 'TUBE', 1060, 470, t, P(22, 'glomerulus') + 0.8, { px: 40, col: C.tealD, rot: 0.03 });
  };
  const sSieve = (ctx, t) => {
    ctx.drawImage(paperBg('sv', '#f2b545', '#f6cc6e'), 0, 0);
    sprAt(ctx, coffeeS(), 360, 360, t, P(23, 'coffee') - 0.35, { s: 1 });
    tag(ctx, 'COFFEE FILTER', 360, 640, t, P(23, 'filter') - 0.15, { px: 38, col: C.ink });
    if (t > P(23, 'coffee')) for (let k = 0; k < 3; k++) { const u = ((t - P(23, 'coffee')) * 1.2 + k / 3) % 1; put(ctx, dropS(C.brown, 0.35), 360, 470 + u * 60, { a: 1 - u, d: 0.3 }); }
    sprAt(ctx, sieveS(), 920, 340, t, P(24, 'sieve') - 0.35);
    if (t > P(24, 'pasta') - 0.4) for (let i = 0; i < 5; i++) put(ctx, pastaS(i), 820 + i * 50, 290 + (i % 2) * 20, { d: 0.5 });
    if (t > P(24, 'water')) for (let k = 0; k < 6; k++) { const u = ((t - P(24, 'water')) * 1.3 + k / 6) % 1; put(ctx, dropS(C.water, 0.35), 860 + (k % 3) * 60, 430 + u * 200, { a: 1 - u, d: 0.3 }); }
    tag(ctx, 'WATER THROUGH', 920, 600, t, P(24, 'through') - 0.15, { px: 34, col: C.tealD });
    tag(ctx, 'PASTA STAYS', 920, 660, t, P(24, 'pasta') - 0.15, { px: 34, col: C.coral });
  };
  // filtration close-up: the vessel wall, small things slip through, big things stay
  const sFilter = (ctx, t) => {
    ctx.drawImage(roomBg('fl', '#f6d2d4', '#f0bcc2', '#f3e2cc'), 0, 0);
    const vessel = cache('vessel', () => compose(W, 340, [[(x) => { x.fillStyle = '#e89aa0'; x.fillRect(0, 30, W, 280); }, 0.5], [(x) => { x.fillStyle = C.cream; for (let i = 0; i < 22; i++) x.fillRect(i * 60 + 6, 300, 44, 20); }, 0.4]]));
    shadowDraw(ctx, vessel, 0, 140, 0.8);
    tag(ctx, 'BLOOD', 120, 120, t, PS(25), { px: 38, col: C.blood });
    tag(ctx, 'PRESSURE', 1090, 660, t, P(25, 'pressure') - 0.15, { px: 38, col: C.ink, rot: 0.03 });
    const push = 1 + 0.05 * Math.sin(t * 6);
    // big cells drift left to right inside the vessel
    for (let k = 0; k < 7; k++) { const x = ((t * 60 + k * 190) % 1400) - 60; put(ctx, k % 3 === 2 ? proteinS() : rbcS(), x, 250 + Math.sin(t * 2 + k) * 50, { s: push, d: 0.5 }); }
    // small things fall through the slits into the filtrate
    const st = P(26, 'water') - 0.2;
    if (t > st) { const kinds = [[dotS(C.water, 14), 'w'], [cubeS(C.salt, 26), 's'], [cubeS(C.sugar, 28), 'u'], [dotS(C.waste, 13), 'x']]; for (let k = 0; k < 16; k++) { const [spr] = kinds[k % 4], ks = st + (k % 4) * 0.6; if (t < ks) continue; const u = ((t - ks) * 0.5 + Math.floor(k / 4) * 0.25) % 1; put(ctx, spr, 120 + k * 66, 300 + u * 300, { d: 0.4, a: Math.min(1, (1 - u) * 3) }); } }
    tag(ctx, 'WATER', 180, 660, t, P(26, 'water') - 0.1, { px: 32, col: C.water });
    tag(ctx, 'SALT', 410, 660, t, P(26, 'salt') - 0.1, { px: 32, col: C.ink });
    tag(ctx, 'SUGAR', 620, 660, t, P(26, 'sugar') - 0.1, { px: 32, col: C.gold });
    tag(ctx, 'WASTE', 840, 660, t, P(26, 'waste') - 0.1, { px: 32, col: C.waste });
    tag(ctx, 'CELLS STAY', 400, 90, t, P(27, 'cells') - 0.15, { px: 40, col: C.red, rot: -0.03 });
    tag(ctx, 'PROTEINS STAY', 820, 90, t, P(27, 'proteins') - 0.15, { px: 40, col: C.protein, rot: 0.03 });
    checkOn(ctx, 1190, 80, t, P(28, 'stay') - 0.1, 0.6);
  };
  const sFiltrate = (ctx, t) => {
    ctx.drawImage(paperBg('ft', '#58b0a6', '#7cc4ba'), 0, 0);
    sprAt(ctx, gloS('ft', 60), 260, 200, t, PS(29) - 0.2, { s: 1 });
    if (t > PS(29)) for (let k = 0; k < 6; k++) { const u = ((t - PS(29)) * 0.9 + k / 6) % 1; put(ctx, dropS(C.urineL, 0.4), 290, 300 + u * 260, { a: Math.min(1, (1 - u) * 3), d: 0.4 }); }
    const lvl = 0.85 * E.inOut(ph(t, PS(29), P(30, 'come') + 0.6));
    jarAt(ctx, 640, 420, lvl, C.urineL, 1.1);
    tag(ctx, 'FILTRATE', 640, 140, t, P(29, 'filtrate') - 0.15, { px: 56, col: C.ink });
    const A = dropIn(t, P(30, '180') - 0.35, 0.4, 60);
    if (A) { put(ctx, cardS(380, 170, C.card), 1020, 420 + A.dy, { d: 1.3 + A.d, rot: 0.03 }); numberRow(ctx, '180 L', 1020, 420 + A.dy, 96, C.coral, { center: true }); }
  };

  // ================= chapter 3: taking it back =================
  const sBathroom = (ctx, t) => {
    ctx.drawImage(roomBg('bt', '#cfe9ef', '#bfe0e8', '#9fb7c4'), 0, 0);
    sprAt(ctx, doorS(), 420, 340, t, PS(31) + 0.1, { s: 1 });
    tag(ctx, 'WC', 420, 240, t, PS(31) + 0.3, { px: 50, col: C.ink });
    sprAt(ctx, toiletS(), 760, 470, t, P(32, 'peed') - 0.2, { s: 0.85 });
    const CA = dropIn(t, P(33, 'bathroom') - 0.3, 0.4, 60);
    if (CA) { put(ctx, clockS(), 1060, 230 + CA.dy, { d: 1.2 + CA.d }); const sp = (t - P(33, 'bathroom')) * 6; put(ctx, handS(70, 10), 1060 + Math.sin(sp) * 30, 230 + CA.dy - Math.cos(sp) * 30, { rot: sp, d: 0.3 }); put(ctx, handS(50, 10), 1060 + Math.sin(sp / 12) * 20, 230 + CA.dy - Math.cos(sp / 12) * 20, { rot: sp / 12, d: 0.3 }); }
    tag(ctx, 'NONSTOP!', 1060, 420, t, P(33, 'nonstop') - 0.15, { px: 54, col: C.coral, rot: 0.04 });
    sign(ctx, t, P(34, 'clever') - 0.3, 640, 620, 560, 110, 'THE CLEVER PART', C.tealD, 50, null, null, null, { rot: -0.02, bg: C.gold });
  };
  // the long tube with the blood vessel running beside it: sugar, salt and water jump back
  const TB = [[60, 380], [200, 300], [340, 400], [480, 300], [620, 400], [760, 300], [900, 400], [1040, 300], [1220, 380]];
  const tbPt = (u) => { const n = TB.length - 1, f = cl(u) * n, i = Math.min(n - 1, Math.floor(f)), v = f - i; return [H.lerp(TB[i][0], TB[i + 1][0], v), H.lerp(TB[i][1], TB[i + 1][1], v)]; };
  const sTube = (ctx, t) => {
    ctx.drawImage(stripeBg('tb', '#fbf0e0', '#f3e2cc'), 0, 0);
    const pipe = cache('pipe', () => compose(W, HH, [
      [(x) => { x.strokeStyle = '#e89aa0'; x.lineWidth = 46; x.lineCap = 'round'; x.lineJoin = 'round'; x.beginPath(); smoothPath(x, TB.map(([a, b]) => [a, b - 170])); x.stroke(); }, 0.6],
      [(x) => { x.strokeStyle = C.kidD; x.lineWidth = 64; x.lineCap = 'round'; x.lineJoin = 'round'; x.beginPath(); smoothPath(x, TB); x.stroke(); x.strokeStyle = C.urineL; x.lineWidth = 40; x.beginPath(); smoothPath(x, TB); x.stroke(); }, 0.6]]));
    const rv = io(t, PS(35), PE(35));
    ctx.save(); ctx.beginPath(); ctx.rect(0, 0, 80 + rv * 1200, HH); ctx.clip(); shadowDraw(ctx, pipe, 0, 0, 0.8); ctx.restore();
    tag(ctx, 'BLOOD', 110, 110, t, P(36, 'grabs') - 0.3, { px: 36, col: C.blood });
    tag(ctx, 'TUBE', 110, 500, t, P(35, 'tube') - 0.15, { px: 36, col: C.kidD });
    // items riding the tube, then hopping up into the blood vessel
    const items = [[cubeS(C.sugar, 44), P(37, 'sugar'), 0.25, 'SUGAR'], [cubeS(C.salt, 40), P(38, 'salt'), 0.5, 'SALT'], [dropS(C.water, 0.7), P(39, 'water'), 0.75, 'WATER']];
    items.forEach(([spr, st, u0, lbl], j) => { if (t < st - 1.2) return; const [x, y] = tbPt(u0), hop = E.inOut(ph(t, st - 0.2, st + 0.4)); const yy = H.lerp(y, y - 170, hop) - Math.sin(hop * Math.PI) * 60; put(ctx, spr, x, yy, { s: 1.3, d: 0.6 + Math.sin(hop * Math.PI) * 2 }); if (hop >= 1) put(ctx, spr, x + ((t - st) * 80) % 200, y - 170, { s: 0.9, d: 0.3, a: 0.6 }); tag(ctx, lbl, x, 620, t, st - 0.1, { px: 36, col: j === 2 ? C.water : C.ink }); if (t > st) arrow(ctx, x + 40, y - 20, x + 70, y - 90, x + 40, y - 140, io(t, st, st + 0.3), C.green, 30 + j); });
    // big 99% at the end
    const A = dropIn(t, P(40, '99') - 0.35, 0.45, 90);
    if (A) { burstAt(ctx, 1080, 560, t, P(40, '99'), 0.75, C.gold); numberRow(ctx, '99%', 1080, 560 + A.dy, 120, C.coral, { center: true }); tag(ctx, 'TAKEN BACK', 1080, 670, t, P(40, 'reabsorbed') - 0.15, { px: 36, col: C.ink }); }
  };
  const sUrine = (ctx, t) => {
    ctx.drawImage(paperBg('ur', '#f6e7bf', '#fbf0d0'), 0, 0);
    // two jars: 180 L in, 1-2 L out
    const A = dropIn(t, PS(41) - 0.2, 0.45, 70);
    if (A) { ctx.save(); ctx.translate(0, A.dy); jarAt(ctx, 300, 400, 0.92, C.urineL, 1.05); ctx.restore(); put(ctx, wordSpr('180 L IN', 44, C.ink, C.card, 10), 300, 120, { d: 0.8 }); }
    sprAt(ctx, dotS(C.waste, 26), 760, 250, t, P(42, 'urea') - 0.3, { pop: true });
    tag(ctx, 'UREA', 760, 330, t, P(42, 'urea') - 0.1, { px: 40, col: C.waste });
    tag(ctx, 'FROM PROTEIN', 760, 395, t, P(42, 'protein') - 0.15, { px: 30, col: C.ink, rot: 0.02 });
    const lvl = 0.08 * E.out(ph(t, P(43, 'urine') - 0.2, P(44, 'litres')));
    jarAt(ctx, 1040, 400, lvl, C.urine, 1.05);
    tag(ctx, 'URINE', 1040, 120, t, P(43, 'urine') - 0.15, { px: 44, col: C.coral });
    const B = dropIn(t, P(44, 'one') - 0.35, 0.4, 60);
    if (B) { put(ctx, cardS(300, 110, C.gold), 1040, 640 + B.dy, { d: 1.2 + B.d, rot: 0.02 }); put(ctx, wordSpr('1-2 L', 60, C.ink, null), 1040, 640 + B.dy, { d: 0.3, rot: 0.02 }); }
    if (t > P(45, 'keep') - 0.4) { arrow(ctx, 300, 650, 520, 720, 700, 640, io(t, P(45, 'keep') - 0.4, P(45, 'keep')), C.green, 41); }
    tag(ctx, 'RECYCLED!', 640, 560, t, P(46, 'recycling') - 0.2, { px: 52, col: C.green, rot: -0.03 });
  };
  const sBladder = (ctx, t) => {
    ctx.drawImage(stripeBg('bl', '#2f6b8a', '#3a7896'), 0, 0);
    kidneyPair(ctx, 640, 170, 0.5, 260);
    const ur = cache('ureters', () => paperize(W, HH, (x) => { x.strokeStyle = C.cream; x.lineWidth = 16; x.lineCap = 'round'; x.beginPath(); x.moveTo(530, 210); x.quadraticCurveTo(560, 380, 610, 470); x.moveTo(750, 220); x.quadraticCurveTo(720, 380, 670, 470); x.stroke(); }, { seed: 141 }));
    shadowDraw(ctx, ur, 0, 0, 0.6);
    for (let k = 0; k < 6; k++) { if (t < PS(47)) break; const u = ((t - PS(47)) * 0.6 + k / 6) % 1, side = k % 2 ? 1 : -1; put(ctx, dropS(C.urine, 0.3), 640 + side * (100 - u * 70), 220 + u * 250, { d: 0.3 }); }
    const lvl = 0.15 + 0.6 * E.inOut(ph(t, P(48, 'bladder'), PE(49)));
    const bl = cache('bladliq', () => paperize(220, 200, (x) => { x.fillStyle = C.urine; x.beginPath(); x.ellipse(110, 100, 104, 96, 0, 0, TAU); x.fill(); }, { seed: 142, rim: false }));
    ctx.save(); ctx.beginPath(); ctx.rect(400, 690 - 200 * lvl, 480, 200 * lvl + 10); ctx.clip(); ctx.drawImage(bl, 530, 490); ctx.restore();
    put(ctx, bladderS(), 640, 590, { s: 0.85, d: 1 });
    tag(ctx, 'URETER', 1000, 330, t, P(47, 'ureter') - 0.15, { px: 44, col: C.gold, back: '#17305e' });
    tag(ctx, 'BLADDER', 1000, 560, t, P(48, 'bladder') - 0.15, { px: 44, col: C.gold, back: '#17305e' });
    tag(ctx, 'WAITING...', 280, 560, t, P(49, 'waits') - 0.15, { px: 40, col: C.cream, back: '#17305e', rot: -0.03 });
  };
  const sTreasure = (ctx, t) => {
    ctx.drawImage(roomBg('tr', '#f2b545', '#f6cc6e', '#a8724c'), 0, 0);
    sprAt(ctx, binS(), 420, 460, t, PS(50) - 0.1, { s: 1 });
    tag(ctx, 'TRASH', 420, 240, t, P(50, 'trash') - 0.15, { px: 44, col: C.ink });
    const lift = E.out(ph(t, P(51, 'pick') - 0.1, P(51, 'treasure')));
    const coins = ['SUGAR', 'SALT', 'WATER'];
    coins.forEach((c, i) => { if (t < P(51, 'pick') - 0.1 + i * 0.15) return; const x = H.lerp(420, 780 + i * 170, lift), y = H.lerp(420, 360 - (i % 2) * 70, lift) - Math.sin(lift * Math.PI) * 140; put(ctx, coinS(c), x, y, { s: 0.9, d: 1 + Math.sin(lift * Math.PI) * 2, rot: (1 - lift) * 3 }); });
    tag(ctx, 'TREASURE!', 950, 560, t, P(51, 'treasure') - 0.15, { px: 60, col: C.coral, rot: 0.03 });
  };

  // ================= chapter 4: secret side jobs =================
  const sWater = (ctx, t) => {
    ctx.drawImage(paperBg('wa', '#cfe9ef', '#e6f3f5'), 0, 0);
    put(ctx, kidneyS('wa', { vessels: false }), 640, 290, { s: 0.55, d: 1 });
    tag(ctx, 'WATER BALANCE', 640, 80, t, P(53, 'balanced') - 0.2, { px: 50, col: C.tealD });
    // drink a lot: big glass, pale; thirsty: small glass, dark
    const g1 = dropIn(t, P(54, 'drink') - 0.3, 0.4, 60);
    if (g1) { put(ctx, glassS(), 270, 330 + g1.dy, { d: 1 + g1.d }); const L = liquidS(C.water); ctx.drawImage(L, 0, 0, 100, 180, 220, 352 + g1.dy, 100, 180); tag(ctx, 'DRINK A LOT', 270, 500, t, P(54, 'drink'), { px: 34, col: C.ink }); }
    tag(ctx, 'LET GO', 270, 570, t, P(54, 'go') - 0.15, { px: 34, col: C.water });
    const g2 = dropIn(t, P(55, 'thirsty') - 0.3, 0.4, 60);
    if (g2) { put(ctx, glassS(), 1010, 330 + g2.dy, { d: 1 + g2.d }); const L = liquidS(C.water); ctx.drawImage(L, 0, 0, 80, 30, 970, 500 + g2.dy, 80, 30); tag(ctx, 'THIRSTY', 1010, 500, t, P(55, 'thirsty'), { px: 34, col: C.ink }); }
    tag(ctx, 'HOLD ON', 1010, 570, t, P(55, 'hold') - 0.15, { px: 34, col: C.coral });
    // pee colour swatches pale -> dark
    const cols = ['#fbf3c8', '#f8e9a0', '#f2cf4a', '#e6b13a', '#c98f2a'];
    cols.forEach((c, i) => sprAt(ctx, cardS(110, 80, c, i + 3), 400 + i * 120, 650, t, P(56, 'color') - 0.4 + i * 0.08, { dist: 40 }));
  };
  const sRenin = (ctx, t) => {
    ctx.drawImage(stripeBg('rn', '#3b3f78', '#33366a'), 0, 0);
    put(ctx, kidneyS('rn'), 250, 380, { s: 0.6, d: 1 });
    tag(ctx, 'MESSENGERS', 640, 90, t, P(57, 'messengers') - 0.2, { px: 52, col: C.gold, back: '#2b2d5a' });
    const fly = E.inOut(ph(t, P(58, 'renin') - 0.3, P(58, 'control')));
    if (t > P(58, 'renin') - 0.5) put(ctx, envS('RENIN', C.coral), H.lerp(330, 620, fly), 380 - Math.sin(fly * Math.PI) * 120, { s: 0.75, rot: (1 - fly) * 0.3, d: 1 + Math.sin(fly * Math.PI) * 2 });
    const GA = dropIn(t, P(58, 'blood') - 0.4, 0.4, 60);
    if (GA) { put(ctx, gaugeS(), 980, 390 + GA.dy, { d: 1.2 + GA.d }); const a = -1.2 + 1.0 * E.inOut(ph(t, P(58, 'pressure'), P(58, 'pressure') + 0.8)) + Math.sin(t * 3) * 0.04; put(ctx, needleS(), 980 + Math.sin(a) * 66, 465 + GA.dy - Math.cos(a) * 66, { rot: a, d: 0.4 }); }
    tag(ctx, 'BLOOD PRESSURE', 980, 560, t, P(58, 'pressure') - 0.15, { px: 38, col: C.cream, back: '#2b2d5a' });
  };
  const sEPO = (ctx, t) => {
    ctx.drawImage(paperBg('ep', '#f6d2d4', '#f0bcc2'), 0, 0);
    put(ctx, kidneyS('ep'), 200, 300, { s: 0.5, d: 1 });
    const fly = E.inOut(ph(t, P(59, 'epo') - 0.3, P(59, 'bone') + 0.2));
    if (t > PS(59) - 0.3 && t < P(59, 'bone') + 0.5) put(ctx, envS('EPO', C.teal), H.lerp(280, 520, fly), 300 - Math.sin(fly * Math.PI) * 100, { s: 0.7, rot: (1 - fly) * -0.3, d: 1 + Math.sin(fly * Math.PI) * 2 });
    sprAt(ctx, boneS('ep'), 840, 330, t, P(59, 'bone') - 0.4, { s: 0.95 });
    tag(ctx, 'BONE MARROW', 840, 460, t, P(59, 'marrow') - 0.15, { px: 38, col: C.ink });
    const st = P(59, 'red') - 0.2;
    for (let k = 0; k < 10; k++) { const ks = st + k * 0.12; const A = popIn(t, ks, 0.3); if (!A) continue; const drift = (t - ks) * 30; put(ctx, rbcS(), 820 + (k % 5) * 80 + drift * 0.6, 560 + Math.floor(k / 5) * 80 - drift * 0.3, { s: A.s * 0.9, d: 0.6 + A.d }); }
    tag(ctx, 'RED BLOOD CELLS', 640, 90, t, P(59, 'cells') - 0.2, { px: 46, col: C.blood });
  };
  const sVitD = (ctx, t) => {
    ctx.drawImage(roomBg('vd', '#9fd0e0', '#b9dde8', '#5f9e5a'), 0, 0);
    const sA = popIn(t, P(60, 'vitamin') - 0.3, 0.4);
    if (sA) put(ctx, sunS(), 300, 280, { s: sA.s, rot: t * 0.2, d: 1.2 + sA.d });
    tag(ctx, 'VITAMIN D', 300, 480, t, P(60, 'vitamin') - 0.1, { px: 44, col: C.coral });
    put(ctx, kidneyS('vd', { vessels: false }), 640, 300, { s: 0.45, d: 1 });
    if (t > P(60, 'turn')) arrow(ctx, 430, 280, 520, 230, 560, 280, io(t, P(60, 'turn'), P(60, 'active')), C.coral, 61);
    tag(ctx, 'ACTIVE', 640, 470, t, P(60, 'active') - 0.15, { px: 44, col: C.tealD });
    if (t > P(61, 'bones') - 0.4) arrow(ctx, 720, 300, 820, 250, 880, 300, io(t, P(61, 'bones') - 0.4, P(61, 'bones')), C.coral, 62);
    const bA = dropIn(t, P(61, 'bones') - 0.3, 0.4, 60);
    if (bA) { put(ctx, boneS('vd'), 1040, 320 + bA.dy, { s: 0.75, rot: -0.3, d: 1.2 + bA.d }); }
    tag(ctx, 'STRONG BONES', 1040, 470, t, P(61, 'strong') - 0.15, { px: 40, col: C.ink, rot: 0.03 });
  };
  const sAcid = (ctx, t) => {
    ctx.drawImage(stripeBg('ac', '#58b0a6', '#4fa59b'), 0, 0);
    const bar = cache('phbar', () => compose(900, 120, [[(x) => { const cols = ['#d9473b', '#e8604a', '#f2b545', '#f6e7bf', '#5fae6a', '#58b0a6', '#5b6fc0', '#4a3f8a']; cols.forEach((c, i) => { x.fillStyle = c; blobPath(x, rect(H.rng(i), 10 + i * 110, 10, 116 + i * 110, 110, 20, 0.5)); }); }, 0.5]]));
    const A = dropIn(t, PS(62) - 0.2, 0.4, 70);
    if (A) { put(ctx, bar, 640, 220 + A.dy, { d: 1.2 + A.d }); const target = 640 + 30, wob = t < P(62, 'acidic') ? -260 + Math.sin(t * 3) * 40 : H.lerp(-260, 30, E.out(ph(t, P(62, 'acidic'), P(62, 'acidic') + 0.7))); put(ctx, pointerTri(), 640 + wob, 330 + A.dy, { d: 0.8 }); }
    tag(ctx, 'TOO ACIDIC', 330, 90, t, P(62, 'acidic') - 0.2, { px: 40, col: C.red, rot: -0.03 });
    tag(ctx, 'JUST RIGHT', 720, 90, t, P(62, 'acidic') + 0.4, { px: 40, col: C.ink, rot: 0.02 });
    tag(ctx, 'LOW SUGAR?', 400, 560, t, P(63, 'sugar') - 0.2, { px: 46, col: C.gold, back: '#17305e' });
    const st = P(63, 'make') - 0.2;
    for (let k = 0; k < 5; k++) sprAt(ctx, cubeS(C.sugar, 40), 760 + k * 80, 560 - (k % 2) * 30, t, st + k * 0.12, { pop: true });
    tag(ctx, 'MADE HERE', 920, 660, t, P(63, 'own') - 0.2, { px: 38, col: C.ink });
  };
  const pointerTri = () => cache('ptri', () => paperize(70, 70, (x) => { x.fillStyle = C.card; x.beginPath(); x.moveTo(35, 4); x.lineTo(66, 64); x.lineTo(4, 64); x.closePath(); x.fill(); }, { seed: 151 }));

  // ================= chapter 5: the big picture =================
  const sRecap = (ctx, t) => {
    ctx.drawImage(paperBg('rc', '#2b2d5a', '#3b3f78'), 0, 0);
    burstAt(ctx, 640, 520, t, P(66, 'organs') - 0.3, 0.8, C.gold);
    const kA = dropIn(t, P(66, 'organs') - 0.4, 0.45, 80);
    if (kA) { ctx.save(); ctx.translate(0, kA.dy); kidneyPair(ctx, 640, 520, 0.5, 130); ctx.restore(); }
    const card = (x, st, top, bot, col, rot) => { const A = dropIn(t, st, 0.4, 60); if (!A) return; put(ctx, cardS(360, 180, C.card), x, 300 + A.dy, { d: 1.3 + A.d, rot }); put(ctx, wordSpr(top, top.length > 6 ? 56 : 66, col, null), x, 275 + A.dy, { d: 0.3, rot }); put(ctx, wordSpr(bot, 30, C.ink, null), x, 345 + A.dy, { d: 0.3, rot }); };
    card(250, P(64, 'million') - 0.3, '1,000,000', 'FILTERS', C.coral, -0.03);
    card(640, P(64, 'litre') - 0.3, '1 L', 'BLOOD / MINUTE', C.red, 0.02);
    card(1030, P(65, '180') - 0.3, '180 L', 'CLEANED A DAY', C.tealD, -0.02);
    if (t < P(67, 'feel') - 0.2) tag(ctx, 'FIST-SIZED', 640, 670, t, P(66, 'fist') - 0.2, { px: 40, col: C.coral });
    tag(ctx, 'YOU NEVER FEEL IT', 640, 670, t, P(67, 'feel') - 0.2, { px: 44, col: C.ink, rot: -0.02 });
  };
  const sNext = (ctx, t) => {
    ctx.drawImage(stripeBg('nx', '#f2b545', '#efa83a'), 0, 0);
    tag(ctx, 'NEXT TIME', 640, 80, t, PS(68), { px: 58, col: C.coral });
    sprAt(ctx, noseS(), 640, 360, t, P(68, 'nostrils') - 0.4, { s: 0.8 });
    const n = popIn(t, P(68, 'two') - 0.1, 0.3);
    if (n) { put(ctx, ringSpr(C.teal), 600, 456, { s: 0.24 * n.s, d: 0.5 }); put(ctx, ringSpr(C.teal), 682, 456, { s: 0.24 * n.s, d: 0.5 }); }
    tag(ctx, 'BLOCKED?', 900, 560, t, P(69, 'blocked') - 0.2, { px: 50, col: C.ink, rot: 0.04 });
    const A = dropIn(t, P(68, 'two') - 0.3, 0.4, 60);
    if (A) { put(ctx, cardS(300, 140, C.card), 260, 360 + A.dy, { d: 1.2 + A.d, rot: -0.03 }); put(ctx, wordSpr('WHY 2?', 62, C.ink, null), 260, 360 + A.dy, { d: 0.3, rot: -0.03 }); }
  };
  const SC = [
    { s: 0, f: sHook }, { s: PS(2), f: sBottles, tr: 'drop' }, { s: PS(3), f: sFist, tr: 'pan' }, { s: PS(4), f: sQuestion, tr: 'drop' },
    { s: PS(7), f: sWhere, tr: 'rip', ch: [1, 'WHERE THEY LIVE'] }, { s: PS(11), f: sWeight, tr: 'drop' }, { s: PS(13), f: sHeart, tr: 'pan' }, { s: PS(17), f: sLoop, tr: 'drop' },
    { s: PS(18), f: sZoom, tr: 'rip', ch: [2, 'A MILLION FILTERS'] }, { s: PS(21), f: sNephron, tr: 'pan' }, { s: PS(23), f: sSieve, tr: 'drop' }, { s: PS(25), f: sFilter, tr: 'pan' }, { s: PS(29), f: sFiltrate, tr: 'drop' },
    { s: PS(31), f: sBathroom, tr: 'rip', ch: [3, 'TAKING IT BACK'] }, { s: PS(35), f: sTube, tr: 'pan' }, { s: PS(41), f: sUrine, tr: 'drop' }, { s: PS(47), f: sBladder, tr: 'pan' }, { s: PS(50), f: sTreasure, tr: 'drop' },
    { s: PS(52), f: sWater, tr: 'rip', ch: [4, 'SECRET SIDE JOBS'] }, { s: PS(57), f: sRenin, tr: 'pan' }, { s: PS(59), f: sEPO, tr: 'drop' }, { s: PS(60), f: sVitD, tr: 'pan' }, { s: PS(62), f: sAcid, tr: 'drop' },
    { s: PS(64), f: sRecap, tr: 'rip', ch: [5, 'THE BIG PICTURE'] }, { s: PS(68), f: sNext, tr: 'rip' },
  ];
  const TD = 0.5;
  const tornX = (r) => { const pts = []; for (let y = -20; y <= HH + 20; y += 18) pts.push([W / 2 + r.range(-26, 26) + Math.sin(y * 0.02) * 30, y]); return pts; };
  const TORN = tornX(H.rng(4242));
  function drawScene(ctx, i, t) { ctx.save(); SC[i].f(ctx, t); ctx.restore(); }
  function explainer(ctx, Wd, Hd, t) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    let i = 0; for (let k = 1; k < SC.length; k++) if (t >= SC[k].s - (SC[k].tr === 'cut' ? 0 : TD)) i = k;
    const sc = SC[i], u = i > 0 ? cl((t - (sc.s - TD)) / TD) : 1;
    if (i === 0 || u >= 1 || sc.tr === 'cut') drawScene(ctx, i, t);
    else if (sc.tr === 'pan') { const e = E.inOut(u); ctx.save(); ctx.translate(-W * e, 0); drawScene(ctx, i - 1, t); ctx.restore(); ctx.save(); ctx.translate(W * (1 - e), 0); drawScene(ctx, i, t); ctx.restore();
      ctx.save(); const g = ctx.createLinearGradient(W * (1 - e) - 40, 0, W * (1 - e), 0); g.addColorStop(0, 'rgba(14,10,30,0)'); g.addColorStop(1, 'rgba(14,10,30,0.35)'); ctx.fillStyle = g; ctx.fillRect(W * (1 - e) - 40, 0, 40, HH); ctx.restore(); }
    else if (sc.tr === 'drop') { drawScene(ctx, i - 1, t); const e = E.back(u), dy = -(1 - e) * HH; ctx.save(); ctx.shadowColor = 'rgba(14,10,30,0.6)'; ctx.shadowBlur = 30; ctx.shadowOffsetY = 18; ctx.fillStyle = '#000'; ctx.fillRect(0, dy, W, HH); ctx.restore(); ctx.save(); ctx.beginPath(); ctx.rect(0, dy, W, HH); ctx.clip(); ctx.translate(0, dy); drawScene(ctx, i, t); ctx.restore(); }
    else if (sc.tr === 'rip') { drawScene(ctx, i, t); const e = E.in(u);
      [-1, 1].forEach((side) => { ctx.save(); ctx.translate(side * W * 0.7 * e, -60 * e); ctx.rotate(side * 0.08 * e); ctx.beginPath(); if (side < 0) { ctx.moveTo(-40, -40); TORN.forEach(([x, y]) => ctx.lineTo(x, y)); ctx.lineTo(-40, HH + 40); } else { ctx.moveTo(W + 40, -40); TORN.forEach(([x, y]) => ctx.lineTo(x, y)); ctx.lineTo(W + 40, HH + 40); } ctx.closePath();
        ctx.save(); ctx.shadowColor = 'rgba(14,10,30,0.5)'; ctx.shadowBlur = 20; ctx.fillStyle = '#f3ecdc'; ctx.fill(); ctx.restore(); ctx.save(); ctx.clip(); drawScene(ctx, i - 1, t); ctx.restore();
        ctx.strokeStyle = '#f5f0e5'; ctx.lineWidth = 7; ctx.beginPath(); TORN.forEach(([x, y], k) => (k ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore(); }); }
    // chapter banners
    SC.forEach((s) => { if (s.ch) { const st = s.chAt ?? s.s; if (t >= st && t < st + 3.5) chapter(ctx, t, st, s.ch[0], s.ch[1]); } });
    finish(ctx, t);
    ctx.restore();
  }
  // ================= SOUND (voiceover mode) =================
  // every dropped tag / sprite lands as a card tap at the moment its back-eased drop first touches down (recorded from
  // the scenes themselves), plus layer slides for pans, a falling sheet for drops, a paper tear for rips, and the big hits.
  function collect() {
    const out = []; REC = out;
    const cv = H.layer(64, 36), c = cv.getContext('2d');
    try { SC.forEach((sc, i) => { const a = sc.s, b = i + 1 < SC.length ? SC[i + 1].s : DURATION; for (let k = 0; k <= 6; k++) { c.setTransform(1, 0, 0, 1, 0, 0); c.save(); c.scale(64 / W, 36 / HH); sc.f(c, a + (b - a) * (k / 6) + 0.01); c.restore(); } }); } catch (e) { console.log('collect', e.message); }
    REC = null;
    const seen = new Set(), res = [];
    out.sort((x, y) => x[0] - y[0]).forEach((e) => { const key = Math.round(e[0] * 25); if (seen.has(key) || e[0] < 0 || e[0] > DURATION) return; seen.add(key); res.push(e); });
    return res;
  }
  function scoreSound(k) {
    const card = (t, g = 1, p = 0, f = 1, minor = true) => {
      k.noise(t, { dur: 0.045, filter: 'bandpass', f: 1100 * f, q: 0.9, gain: 0.26 * g, a: 0.001, pan: p, minor });
      k.noise(t, { dur: 0.09, color: 'brown', filter: 'lowpass', f: 650, gain: 0.3 * g, a: 0.002, pan: p, minor });
      k.tone(t, { f: [[0, 160 * f], [0.07, 85]], dur: 0.09, gain: 0.16 * g, pan: p, minor });
    };
    const layer = (t, d, g = 1) => { k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 260], [d * 0.5, 620], [d, 300]], q: 0.6, gain: 0.16 * g, a: d * 0.45, pan: 0.15 }); k.noise(t + 0.05, { dur: d, color: 'brown', filter: 'lowpass', f: 380, gain: 0.14 * g, a: d * 0.5, pan: -0.15 }); };
    const tear = (t, d = 0.45) => { const r = H.rng(Math.round(t * 100)); for (let x = 0; x < d; x += 0.018 + r() * 0.02) k.noise(t + x, { dur: 0.03, filter: 'bandpass', f: 1500 + r() * 2500, q: 0.8, gain: 0.25 * (0.6 + r() * 0.5) }); k.noise(t, { dur: d, color: 'pink', filter: 'highpass', f: 1200, gain: 0.1, a: d * 0.3 }); };
    collect().forEach(([t, g, kind]) => card(t, g, 0, kind === 'pop' ? 1.2 : 1, g < 1));
    SC.forEach((sc, i) => { if (!i) return; const t0 = sc.s - TD;
      if (sc.tr === 'pan') layer(t0, TD + 0.2, 0.9);
      else if (sc.tr === 'drop') { k.play('whoosh', t0, { dur: TD * 0.8, gain: 0.5 }); card(t0 + TD * 0.6, 1.2, 0, 0.7, false); }
      else if (sc.tr === 'rip') tear(t0, TD); });
    SC.forEach((sc) => { if (sc.ch) { const st = sc.chAt ?? sc.s; card(st + 0.17, 1.1, 0, 0.8, false); k.play('ding', st + 0.25, { f: 'G5', gain: 0.35 }); } });
    const hit = (t, g = 1) => { k.play('impact', t, { gain: g }); k.noise(t, { dur: 0.12, color: 'pink', filter: 'bandpass', f: [[0, 600], [0.12, 1600]], q: 0.6, gain: 0.3, a: 0.02 }); };
    const pops = (t0, n, dt, g = 0.35) => { for (let i = 0; i < n; i++) k.play('pop', t0 + i * dt, { gain: g, minor: true }); };
    const drip = (t, g = 0.3) => k.tone(t, { f: [[0, 900], [0.08, 1600]], dur: 0.1, gain: 0.08 * g * 3, minor: true });
    // intro
    k.play('riser', P(0, '180') - 0.9, { dur: 0.8, gain: 0.3 }); hit(P(0, '180') + 0.1, 0.8);
    k.play('slap', P(1, 'litres') - 0.05, { gain: 0.5 }); k.play('error', P(1, 'litres'), { gain: 0.22 });
    pops(P(2, '180') - 0.2, 40, 0.06, 0.18); k.play('stamp', P(2, 'every') - 0.05, { gain: 0.5 });
    k.play('ding', P(3, 'fist'), { f: 'E5', gain: 0.35 }); k.play('pop', P(3, 'size'), { gain: 0.5 });
    for (let i = 0; i < 6; i++) drip(P(4, 'wash') + i * 0.3); k.play('ding', P(5, 'keep'), { f: 'C6', gain: 0.35 }); k.play('whoosh', PS(6), { dur: 0.8, gain: 0.3 });
    // chapter 1
    k.play('error', P(8, 'low'), { gain: 0.22 }); k.play('ding', P(9, 'high'), { f: 'G5', gain: 0.3 }); k.play('pop', P(10, 'side') - 0.5, { gain: 0.5 });
    k.play('tock', P(11, 'weighs'), { gain: 0.4 }); k.play('stamp', P(11, '150') - 0.05, { gain: 0.5 }); k.play('thud', P(12, 'smartphone'), { f: 110, gain: 0.4 });
    for (let i = 0; i < 10; i++) k.play('thud', PS(13) + i * 0.9, { f: 70, gain: 0.18, minor: true });
    k.play('swish', P(14, 'everything'), { dur: 0.7, gain: 0.3 }); k.play('stamp', P(14, 'fifth') - 0.05, { gain: 0.5 }); hit(P(16, 'litre') - 0.05, 0.7);
    k.play('whoosh', P(17, 'again'), { dur: 1, gain: 0.25 });
    // chapter 2
    k.play('riser', P(19, 'million') - 0.9, { dur: 0.8, gain: 0.3 }); for (let i = 0; i < 14; i++) k.play('count', P(19, 'million') - 0.3 + i * 0.05, { gain: 0.5, minor: true }); hit(P(19, 'million') + 0.4, 0.9);
    k.play('ding', P(20, 'nephrons'), { f: 'C6', gain: 0.3 }); k.play('pop', P(21, 'ball') - 0.2, { gain: 0.6 }); k.play('ding', P(22, 'glomerulus'), { f: 'E6', gain: 0.3 });
    for (let i = 0; i < 5; i++) drip(P(23, 'coffee') + i * 0.28); k.play('paper', P(24, 'pasta') - 0.4, { dur: 0.5, gain: 0.3 });
    for (let i = 0; i < 16; i++) drip(P(26, 'water') + i * 0.18, 0.25); k.play('slap', P(27, 'cells'), { gain: 0.4 }); k.play('success', P(28, 'stay'), { gain: 0.3 });
    k.play('ding', P(29, 'filtrate'), { f: 'G5', gain: 0.3 }); hit(P(30, '180') - 0.05, 0.8);
    // chapter 3
    k.play('error', P(32, 'peed'), { gain: 0.2 }); for (let i = 0; i < 10; i++) k.play('tick', P(33, 'bathroom') + i * 0.12, { gain: 0.5, minor: true }); k.play('bell', P(33, 'nonstop'), { gain: 0.3 });
    k.play('sparkle', P(34, 'clever'), { gain: 0.4 });
    k.play('jump', P(37, 'sugar'), { gain: 0.25 }); k.play('jump', P(38, 'salt'), { gain: 0.25 }); k.play('jump', P(39, 'water'), { gain: 0.25 });
    k.play('riser', P(40, '99') - 0.9, { dur: 0.8, gain: 0.3 }); hit(P(40, '99') - 0.05, 1); k.play('ding', P(40, 'reabsorbed'), { f: 'E5', gain: 0.35 });
    k.play('pop', P(42, 'urea'), { gain: 0.5 }); for (let i = 0; i < 4; i++) drip(P(43, 'urine') + i * 0.3); k.play('stamp', P(44, 'one') - 0.05, { gain: 0.5 });
    k.play('success', P(46, 'recycling') - 0.1, { gain: 0.3 });
    for (let i = 0; i < 10; i++) drip(PS(47) + i * 0.4, 0.25); k.play('ding', P(48, 'bladder'), { f: 'C6', gain: 0.3 });
    k.play('thud', P(50, 'trash'), { f: 90, gain: 0.4 }); k.play('coin', P(51, 'pick'), { gain: 0.5 }); k.play('coin', P(51, 'pick') + 0.15, { gain: 0.4 }); k.play('sparkle', P(51, 'treasure'), { gain: 0.45 });
    // chapter 4
    for (let i = 0; i < 4; i++) drip(P(54, 'drink') + i * 0.2); k.play('swish', P(55, 'hold'), { dur: 0.4, gain: 0.3 }); pops(P(56, 'color') - 0.3, 5, 0.08, 0.3);
    k.play('paper', P(58, 'renin') - 0.3, { dur: 0.6, gain: 0.35 }); k.play('click', P(58, 'pressure'), { gain: 0.5 });
    k.play('paper', P(59, 'epo') - 0.3, { dur: 0.6, gain: 0.35 }); pops(P(59, 'red') - 0.2, 10, 0.12, 0.3);
    k.play('sparkle', P(60, 'vitamin'), { gain: 0.4 }); k.play('ding', P(61, 'strong'), { f: 'G5', gain: 0.3 });
    k.play('tock', P(62, 'acidic'), { gain: 0.4 }); k.play('success', P(62, 'acidic') + 0.6, { gain: 0.25 }); pops(P(63, 'make') - 0.2, 5, 0.12, 0.35);
    // chapter 5
    k.play('stamp', P(64, 'million') - 0.15, { gain: 0.5 }); k.play('stamp', P(64, 'litre') - 0.15, { gain: 0.5 }); k.play('stamp', P(65, '180') - 0.15, { gain: 0.5 });
    hit(P(66, 'organs') - 0.2, 0.8); ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', P(67, 'amazing') + i * 0.09, { f, gain: 0.4 }));
    k.play('ding', P(68, 'next'), { f: 'G5', gain: 0.4 }); k.play('pop', P(68, 'two'), { gain: 0.5 }); k.play('slap', P(69, 'blocked'), { gain: 0.4 });
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    ctx.drawImage(paperBg('thumb', '#2b2d5a', '#3b3f78'), 0, 0);
    put(ctx, burstSpr(C.gold), 950, 380, { s: 1.7, d: 0.7 });
    kidneyPair(ctx, 950, 360, 0.95, 140, { key: 'th' });
    put(ctx, wordSpr('99%', 230, C.coral, C.card, 30), 340, 250, { d: 1.8, rot: -0.04 });
    put(ctx, wordSpr('RECYCLED', 108, C.ink, C.card, 24), 360, 490, { d: 1.8, rot: 0.03 });
    finish(ctx, 0, [700, 400]);
    ctx.restore();
  }
  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s - 0.05 ? j : a), 0) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();
