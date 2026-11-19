// ================= Cut-Paper Diorama, 16:9: "Your Lungs Explained: how you breathe over 20,000 times a day" =================
// Long explainer. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  // ---------- BEATS: voiceover phrases (phrases.json, Kokoro af_heart) ----------
  const PH = [{"s":0.25,"e":2.24,"text":"Your lungs can't breathe on their own,","words":[["your",0.25],["lungs",0.52],["cant",0.85],["breathe",1.11],["on",1.58],["their",1.71],["own",2.04]]},{"s":2.6,"e":4.94,"text":"yet you breathe more than 20,000 times a day,","words":[["yet",2.6],["you",2.8],["breathe",3.0],["more",3.47],["than",3.74],["20000",4.0],["times",4.34],["a",4.67],["day",4.74]]},{"s":5.33,"e":6.63,"text":"without ever thinking about it.","words":[["without",5.33],["ever",5.68],["thinking",5.88],["about",6.28],["it",6.53]]},{"s":7.03,"e":8.64,"text":"So what's really pulling the air in?","words":[["so",7.03],["whats",7.15],["really",7.43],["pulling",7.78],["the",8.18],["air",8.36],["in",8.53]]},{"s":9.09,"e":10.89,"text":"And what happens to it once it's inside?","words":[["and",9.09],["what",9.26],["happens",9.49],["to",9.9],["it",10.02],["once",10.14],["its",10.37],["inside",10.54]]},{"s":11.36,"e":13.43,"text":"Let's follow one breath, all the way in.","words":[["lets",11.36],["follow",11.64],["one",12.05],["breath",12.26],["all",12.67],["the",12.88],["way",13.09],["in",13.29]]},{"s":13.87,"e":14.92,"text":"First, the engine.","words":[["first",13.87],["the",14.25],["engine",14.47]]},{"s":15.27,"e":16.42,"text":"And it isn't your lungs.","words":[["and",15.27],["it",15.46],["isnt",15.59],["your",15.85],["lungs",16.1]]},{"s":16.88,"e":19.39,"text":"It's a muscle underneath them, called the diaphragm,","words":[["its",16.88],["a",17.06],["muscle",17.12],["underneath",17.48],["them",18.07],["called",18.31],["the",18.67],["diaphragm",18.85]]},{"s":19.85,"e":22.11,"text":"a dome shaped like an upside-down bowl.","words":[["a",19.85],["dome",19.92],["shaped",20.21],["like",20.65],["an",20.94],["upsidedown",21.09],["bowl",21.82]]},{"s":22.59,"e":25.38,"text":"When you breathe in, it tightens and pulls down flat.","words":[["when",22.59],["you",22.85],["breathe",23.05],["in",23.52],["it",23.65],["tightens",23.78],["and",24.32],["pulls",24.52],["down",24.85],["flat",25.11]]},{"s":25.74,"e":27.96,"text":"Your ribs swing up and out at the same time.","words":[["your",25.74],["ribs",26.01],["swing",26.27],["up",26.59],["and",26.72],["out",26.92],["at",27.11],["the",27.24],["same",27.44],["time",27.7]]},{"s":28.38,"e":29.52,"text":"Your chest gets bigger,","words":[["your",28.38],["chest",28.62],["gets",28.92],["bigger",29.16]]},{"s":29.85,"e":31.72,"text":"so the air pressure inside drops,","words":[["so",29.85],["the",29.99],["air",30.2],["pressure",30.41],["inside",30.96],["drops",31.38]]},{"s":32.04,"e":34.46,"text":"and outside air rushes in to fill the space.","words":[["and",32.04],["outside",32.25],["air",32.73],["rushes",32.94],["in",33.35],["to",33.49],["fill",33.63],["the",33.9],["space",34.11]]},{"s":34.86,"e":37.95,"text":"Your lungs just stretch along, like balloons in a box.","words":[["your",34.86],["lungs",35.15],["just",35.51],["stretch",35.8],["along",36.3],["like",36.66],["balloons",36.95],["in",37.52],["a",37.67],["box",37.74]]},{"s":38.31,"e":40.28,"text":"Breathing out at rest is even easier.","words":[["breathing",38.31],["out",38.9],["at",39.1],["rest",39.23],["is",39.49],["even",39.63],["easier",39.89]]},{"s":40.63,"e":42.0,"text":"The diaphragm relaxes,","words":[["the",40.63],["diaphragm",40.85],["relaxes",41.5]]},{"s":42.36,"e":44.91,"text":"and your stretchy lungs spring back like a rubber band,","words":[["and",42.36],["your",42.53],["stretchy",42.76],["lungs",43.21],["spring",43.49],["back",43.83],["like",44.06],["a",44.29],["rubber",44.34],["band",44.68]]},{"s":45.23,"e":46.2,"text":"pushing the air out.","words":[["pushing",45.23],["the",45.66],["air",45.84],["out",46.02]]},{"s":46.68,"e":48.86,"text":"Each calm breath moves about half a liter.","words":[["each",46.68],["calm",46.94],["breath",47.19],["moves",47.58],["about",47.9],["half",48.22],["a",48.47],["liter",48.54]]},{"s":49.25,"e":52.43,"text":"Over a whole day, that's roughly 10,000 liters of air.","words":[["over",49.25],["a",49.56],["whole",49.64],["day",50.03],["thats",50.26],["roughly",50.65],["10000",51.19],["liters",51.58],["of",52.04],["air",52.2]]},{"s":52.8,"e":54.52,"text":"Now let's follow that air inside.","words":[["now",52.8],["lets",53.0],["follow",53.27],["that",53.66],["air",53.93],["inside",54.13]]},{"s":54.93,"e":57.13,"text":"It goes down your windpipe, the trachea,","words":[["it",54.93],["goes",55.07],["down",55.34],["your",55.62],["windpipe",55.89],["the",56.44],["trachea",56.65]]},{"s":57.29,"e":60.04,"text":"which splits into two tubes, one for each lung.","words":[["which",57.29],["splits",57.66],["into",58.11],["two",58.4],["tubes",58.63],["one",59.0],["for",59.22],["each",59.44],["lung",59.74]]},{"s":60.42,"e":62.77,"text":"Then those tubes split again, and again,","words":[["then",60.42],["those",60.71],["tubes",61.08],["split",61.45],["again",61.82],["and",62.18],["again",62.4]]},{"s":63.03,"e":64.3,"text":"about 23 times,","words":[["about",63.03],["23",63.56],["times",63.77]]},{"s":64.37,"e":66.03,"text":"into thinner and thinner branches.","words":[["into",64.37],["thinner",64.6],["and",65.0],["thinner",65.17],["branches",65.57]]},{"s":66.47,"e":68.26,"text":"Doctors call it the bronchial tree,","words":[["doctors",66.47],["call",66.9],["it",67.15],["the",67.27],["bronchial",67.46],["tree",68.01]]},{"s":68.65,"e":71.03,"text":"because it looks like a tree growing upside down.","words":[["because",68.65],["it",69.06],["looks",69.18],["like",69.48],["a",69.72],["tree",69.78],["growing",70.02],["upside",70.43],["down",70.79]]},{"s":71.4,"e":72.9,"text":"Lay every tube end to end,","words":[["lay",71.4],["every",71.63],["tube",72.0],["end",72.3],["to",72.53],["end",72.68]]},{"s":73.28,"e":77.78,"text":"and by one estimate, they'd stretch about 2,400 kilometers.","words":[["and",73.28],["by",73.57],["one",73.76],["estimate",74.05],["theyd",74.81],["stretch",75.29],["about",75.96],["2400",76.44],["kilometers",76.82]]},{"s":78.18,"e":81.83,"text":"The tubes are lined with sticky mucus and tiny hairs called cilia.","words":[["the",78.18],["tubes",78.38],["are",78.72],["lined",78.93],["with",79.26],["sticky",79.53],["mucus",79.94],["and",80.28],["tiny",80.48],["hairs",80.75],["called",81.09],["cilia",81.49]]},{"s":82.18,"e":83.73,"text":"They trap dust and germs,","words":[["they",82.18],["trap",82.49],["dust",82.8],["and",83.11],["germs",83.35]]},{"s":84.05,"e":85.78,"text":"and sweep them back up toward your throat,","words":[["and",84.05],["sweep",84.21],["them",84.46],["back",84.67],["up",84.87],["toward",84.97],["your",85.28],["throat",85.48]]},{"s":86.14,"e":87.8,"text":"where you swallow them without noticing.","words":[["where",86.14],["you",86.39],["swallow",86.53],["them",86.87],["without",87.07],["noticing",87.41]]},{"s":88.15,"e":89.51,"text":"And your lungs aren't twins.","words":[["and",88.15],["your",88.33],["lungs",88.58],["arent",88.89],["twins",89.2]]},{"s":89.96,"e":92.35,"text":"The right one has three sections, called lobes.","words":[["the",89.96],["right",90.15],["one",90.46],["has",90.65],["three",90.84],["sections",91.16],["called",91.66],["lobes",92.04]]},{"s":92.75,"e":94.02,"text":"The left one has only two,","words":[["the",92.75],["left",92.94],["one",93.19],["has",93.38],["only",93.57],["two",93.82]]},{"s":94.33,"e":95.91,"text":"because it leaves room for your heart.","words":[["because",94.33],["it",94.68],["leaves",94.79],["room",95.09],["for",95.3],["your",95.45],["heart",95.66]]},{"s":96.3,"e":98.09,"text":"Now here's where the magic happens.","words":[["now",96.3],["heres",96.49],["where",96.81],["the",97.13],["magic",97.32],["happens",97.64]]},{"s":98.48,"e":100.07,"text":"At the end of every tiny branch,","words":[["at",98.48],["the",98.6],["end",98.79],["of",98.99],["every",99.11],["tiny",99.43],["branch",99.68]]},{"s":100.37,"e":102.53,"text":"there's a bunch of air sacs, like grapes.","words":[["theres",100.37],["a",100.79],["bunch",100.86],["of",101.21],["air",101.34],["sacs",101.55],["like",101.83],["grapes",102.11]]},{"s":102.94,"e":104.18,"text":"They're called alveoli.","words":[["theyre",102.94],["called",103.33],["alveoli",103.72]]},{"s":104.55,"e":107.12,"text":"And you've got around 480 million of them.","words":[["and",104.55],["youve",104.78],["got",105.17],["around",105.4],["480",105.87],["million",106.1],["of",106.65],["them",106.8]]},{"s":107.58,"e":110.22,"text":"Each one is wrapped in a net of tiny blood vessels.","words":[["each",107.58],["one",107.85],["is",108.05],["wrapped",108.18],["in",108.64],["a",108.77],["net",108.84],["of",109.04],["tiny",109.17],["blood",109.43],["vessels",109.76]]},{"s":110.63,"e":112.51,"text":"The wall between the air and your blood,","words":[["the",110.63],["wall",110.81],["between",111.05],["the",111.46],["air",111.63],["and",111.81],["your",111.99],["blood",112.22]]},{"s":112.95,"e":115.71,"text":"is about 200 times thinner than a sheet of paper.","words":[["is",112.95],["about",113.1],["200",113.45],["times",113.66],["thinner",114.01],["than",114.51],["a",114.79],["sheet",114.86],["of",115.21],["paper",115.35]]},{"s":116.17,"e":118.73,"text":"So oxygen just slips across, into your blood.","words":[["so",116.17],["oxygen",116.31],["just",116.74],["slips",117.02],["across",117.38],["into",117.81],["your",118.09],["blood",118.38]]},{"s":119.12,"e":122.65,"text":"At the same time, carbon dioxide, your body's waste gas,","words":[["at",119.12],["the",119.29],["same",119.54],["time",119.86],["carbon",120.19],["dioxide",120.68],["your",121.26],["bodys",121.59],["waste",122.0],["gas",122.41]]},{"s":122.81,"e":124.73,"text":"slips the other way, into the air sac,","words":[["slips",122.81],["the",123.15],["other",123.34],["way",123.68],["into",123.87],["the",124.14],["air",124.34],["sac",124.54]]},{"s":124.8,"e":126.16,"text":"ready to be breathed out.","words":[["ready",124.8],["to",125.14],["be",125.28],["breathed",125.42],["out",125.96]]},{"s":126.59,"e":128.24,"text":"Spread all those sacs out flat,","words":[["spread",126.59],["all",126.98],["those",127.18],["sacs",127.51],["out",127.78],["flat",127.97]]},{"s":128.69,"e":130.91,"text":"and they'd cover about 70 square meters.","words":[["and",128.69],["theyd",128.9],["cover",129.24],["about",129.59],["70",129.94],["square",130.07],["meters",130.49]]},{"s":131.38,"e":132.92,"text":"That's roughly a badminton court,","words":[["thats",131.38],["roughly",131.66],["a",132.06],["badminton",132.12],["court",132.63]]},{"s":133.3,"e":134.87,"text":"folded up inside your chest.","words":[["folded",133.3],["up",133.71],["inside",133.85],["your",134.26],["chest",134.53]]},{"s":135.28,"e":136.96,"text":"So who's in charge of all this?","words":[["so",135.28],["whos",135.42],["in",135.72],["charge",135.86],["of",136.3],["all",136.45],["this",136.67]]},{"s":137.45,"e":138.97,"text":"Not you, most of the time.","words":[["not",137.45],["you",137.69],["most",137.93],["of",138.25],["the",138.41],["time",138.65]]},{"s":139.39,"e":142.67,"text":"A spot in your brainstem runs breathing on autopilot.","words":[["a",139.39],["spot",139.46],["in",139.76],["your",139.91],["brainstem",140.21],["runs",140.88],["breathing",141.18],["on",141.85],["autopilot",142.0]]},{"s":143.1,"e":144.38,"text":"And here's the surprise.","words":[["and",143.1],["heres",143.31],["the",143.64],["surprise",143.85]]},{"s":144.73,"e":146.73,"text":"It mostly isn't watching your oxygen.","words":[["it",144.73],["mostly",144.86],["isnt",145.26],["watching",145.53],["your",146.06],["oxygen",146.33]]},{"s":147.08,"e":148.94,"text":"It's watching carbon dioxide.","words":[["its",147.08],["watching",147.31],["carbon",147.93],["dioxide",148.4]]},{"s":149.29,"e":151.29,"text":"When CO2 builds up in your blood,","words":[["when",149.29],["co2",149.6],["builds",149.83],["up",150.29],["in",150.44],["your",150.6],["blood",150.91]]},{"s":151.7,"e":154.47,"text":"your brainstem tells the diaphragm to breathe faster.","words":[["your",151.7],["brainstem",151.95],["tells",152.5],["the",152.81],["diaphragm",152.99],["to",153.54],["breathe",153.67],["faster",154.1]]},{"s":154.83,"e":157.22,"text":"That burning need to breathe when you hold your breath?","words":[["that",154.83],["burning",155.04],["need",155.41],["to",155.63],["breathe",155.73],["when",156.1],["you",156.32],["hold",156.48],["your",156.69],["breath",156.9]]},{"s":157.78,"e":161.84,"text":"That's mostly carbon dioxide piling up, not oxygen running out.","words":[["thats",157.78],["mostly",158.18],["carbon",158.65],["dioxide",159.13],["piling",159.69],["up",160.17],["not",160.33],["oxygen",160.57],["running",161.04],["out",161.6]]},{"s":162.26,"e":166.49,"text":"In fact, the air you breathe out still has about 16 percent oxygen,","words":[["in",162.26],["fact",162.42],["the",162.74],["air",162.98],["you",163.22],["breathe",163.46],["out",164.02],["still",164.26],["has",164.65],["about",164.89],["16",165.29],["percent",165.45],["oxygen",166.01]]},{"s":166.88,"e":168.89,"text":"compared to 21 percent going in.","words":[["compared",166.88],["to",167.5],["21",167.65],["percent",167.81],["going",168.35],["in",168.73]]},{"s":169.27,"e":170.96,"text":"So your lungs aren't really pumps.","words":[["so",169.27],["your",169.39],["lungs",169.64],["arent",169.96],["really",170.27],["pumps",170.65]]},{"s":171.44,"e":174.11,"text":"They're a giant, folded-up trading floor,","words":[["theyre",171.44],["a",171.94],["giant",172.02],["foldedup",172.44],["trading",173.11],["floor",173.69]]},{"s":174.21,"e":175.83,"text":"where air and blood swap gases,","words":[["where",174.21],["air",174.53],["and",174.72],["blood",174.92],["swap",175.24],["gases",175.5]]},{"s":176.2,"e":179.13,"text":"over 20,000 times a day, every day of your life.","words":[["over",176.2],["20000",176.52],["times",176.93],["a",177.34],["day",177.42],["every",177.66],["day",178.07],["of",178.32],["your",178.48],["life",178.81]]},{"s":179.6,"e":181.91,"text":"Next up, why can some animals see colors,","words":[["next",179.6],["up",179.88],["why",180.03],["can",180.25],["some",180.46],["animals",180.75],["see",181.26],["colors",181.47]]},{"s":182.24,"e":183.37,"text":"we can't even imagine?","words":[["we",182.24],["cant",182.37],["even",182.63],["imagine",182.9]]}];
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

  // ================= palette + lung-world sprites (all cut paper, cached) =================
  const C = { ink: '#1f2a55', navy: '#17305e', coral: '#e8604a', red: '#d9473b', gold: '#f2b545', teal: '#58b0a6', tealD: '#2f7f86', card: '#fbf6ea', cream: '#f3ecdc', sky: '#9fd0e0', skyL: '#cfe9ef', skin: '#f2c6a2', skinL: '#f8dcc4', skinD: '#d99d78', pink: '#ee8fb0', pinkL: '#f6b8cc', pinkD: '#c8588c', blood: '#c93a3a', vein: '#6a6fc0', o2: '#4fb6e8', co2: '#8a93a8', green: '#5fae6a', leaf: '#3d8a5a', brown: '#7a4a2e', court: '#3f9a6a', cavity: '#6e3446', dark: '#222033', brownHair: '#5b3a26', redHair: '#c8502a', lilac: '#b79bd8' };
  const blobPath = (x, pts) => { x.beginPath(); poly(x, pts); x.fill(); };
  const ell = (x, seed, cx, cy, rx, ry, rot = 0) => blobPath(x, ellPts(H.rng(seed), cx, cy, rx, ry, rot, 0.5));
  const paperBg = (key, col, col2) => cache('pb' + key, () => compose(W, HH, [[(x) => { x.fillStyle = col; x.fillRect(0, 0, W, HH); }, 0], [(x) => { const r = H.rng(key.length * 7 + 5); x.fillStyle = col2; x.beginPath(); poly(x, circPts(r, 640, 380, 500, 18, 1)); x.fill(); }, 0.6]]));
  const meadow = (key, sky = C.sky, hill = '#8cc47a', hill2 = '#5f9e5a', ground = '#3d7a4a') => cache('md' + key, () => compose(W, HH, [
    [(x) => { x.fillStyle = sky; x.fillRect(0, 0, W, HH); }, 0],
    [(x) => { x.fillStyle = 'rgba(255,255,255,0.85)'; [[200, 120], [980, 90], [640, 170]].forEach(([a, b], i) => { ell(x, 400 + i * 3 + key.length, a, b, 90, 30); ell(x, 410 + i * 3 + key.length, a + 50, b - 18, 60, 28); }); }, 0.4],
    [(x) => { const r = H.rng(key.length + 1); x.fillStyle = hill; x.beginPath(); poly(x, [...ridge(r, -10, W + 10, (q) => 470 + Math.sin(q * 0.006 + key.length) * 40), [W + 10, HH + 10], [-10, HH + 10]]); x.fill(); }, 0.8],
    [(x) => { const r = H.rng(key.length + 2); x.fillStyle = hill2; x.beginPath(); poly(x, [...ridge(r, -10, W + 10, (q) => 560 + Math.sin(q * 0.009 + key.length * 2) * 26), [W + 10, HH + 10], [-10, HH + 10]]); x.fill(); }, 0.9],
  ]));
  // a pair of lungs (viewer-left = the person's right lung, 3 lobes; viewer-right = left lung with the heart notch)
  const lungShape = (x, side, notch) => {
    const m = (px) => 280 + side * px;
    x.beginPath(); x.moveTo(m(34), 130); x.bezierCurveTo(m(60), 50, m(150), 60, m(195), 175); x.bezierCurveTo(m(245), 300, m(255), 390, m(245), 445);
    x.quadraticCurveTo(m(150), 478, m(34), 448);
    if (notch) { x.lineTo(m(36), 400); x.quadraticCurveTo(m(105), 380, m(92), 310); x.quadraticCurveTo(m(70), 270, m(36), 262); }
    x.closePath(); x.fill();
  };
  const lungsS = (key = 'a', o = {}) => cache('lungs' + key, () => compose(560, 490, [
    [(x) => { x.fillStyle = o.col || C.pink; lungShape(x, -1, false); lungShape(x, 1, true); }, 0.7],
    ...(o.lobes ? [[(x) => { x.strokeStyle = C.pinkD; x.lineWidth = 7; x.lineCap = 'round';
      x.beginPath(); x.moveTo(240, 150); x.quadraticCurveTo(160, 260, 52, 380); x.stroke(); x.beginPath(); x.moveTo(205, 268); x.quadraticCurveTo(130, 270, 70, 250); x.stroke();
      x.beginPath(); x.moveTo(330, 150); x.quadraticCurveTo(420, 260, 500, 400); x.stroke(); }, 0.15]] : []),
    [(x) => { x.strokeStyle = C.cream; x.lineCap = 'round'; x.lineWidth = 34; x.beginPath(); x.moveTo(280, 0); x.lineTo(280, 150); x.stroke();
      x.lineWidth = 22; x.beginPath(); x.moveTo(280, 145); x.quadraticCurveTo(230, 160, 200, 215); x.moveTo(280, 145); x.quadraticCurveTo(330, 160, 360, 215); x.stroke();
      if (!o.lobes) { x.strokeStyle = C.pinkD; x.lineWidth = 7; [[200, 215, 140, 300], [200, 215, 190, 340], [140, 300, 100, 370], [140, 300, 150, 390], [360, 215, 420, 300], [360, 215, 370, 340], [420, 300, 455, 370], [420, 300, 410, 395]].forEach(([a, b, c, d]) => { x.beginPath(); x.moveTo(a, b); x.lineTo(c, d); x.stroke(); }); }
      x.strokeStyle = 'rgba(120,90,70,0.45)'; x.lineWidth = 4; for (let y = 16; y < 140; y += 18) { x.beginPath(); x.moveTo(266, y); x.lineTo(294, y); x.stroke(); } }, 0.35],
  ]));
  const heartS = () => cache('heart', () => compose(200, 200, [[(x) => { x.fillStyle = C.blood; x.beginPath(); x.moveTo(100, 180); x.bezierCurveTo(10, 120, 10, 30, 70, 35); x.quadraticCurveTo(95, 38, 100, 65); x.quadraticCurveTo(108, 38, 132, 35); x.bezierCurveTo(192, 30, 190, 120, 100, 180); x.fill(); }, 0.7], [(x) => { x.fillStyle = 'rgba(255,255,255,0.35)'; ell(x, 71, 65, 70, 16, 10, -0.6); }, 0.1]]));
  const torsoS = () => cache('torso', () => compose(760, 720, [
    [(x) => { x.fillStyle = C.skin; x.beginPath(); x.moveTo(318, 0); x.lineTo(442, 0); x.lineTo(452, 70); x.quadraticCurveTo(700, 86, 722, 210); x.lineTo(700, 720); x.lineTo(60, 720); x.lineTo(38, 210); x.quadraticCurveTo(60, 86, 308, 70); x.closePath(); x.fill(); }, 0.8],
    [(x) => { x.fillStyle = C.cavity; blobPath(x, ellPts(H.rng(61), 380, 420, 290, 290, 0, 0.8)); }, 0.35],
  ]));
  const ribsS = () => cache('ribs', () => compose(640, 520, [[(x) => { x.strokeStyle = C.cream; x.lineCap = 'round'; x.lineWidth = 15;
    for (let i = 0; i < 6; i++) { const y = 60 + i * 66; [-1, 1].forEach((s) => { x.beginPath(); x.moveTo(320 + s * 20, y); x.bezierCurveTo(320 + s * 170, y - 40, 320 + s * 300, y + 10, 320 + s * 280, y + 92 + i * 6); x.stroke(); }); }
    x.fillStyle = C.cream; x.beginPath(); poly(x, rect(H.rng(66), 304, 30, 336, 420, 30, 0.5)); x.fill(); }, 0.5]]));
  const diaS = () => cache('dia', () => compose(620, 170, [[(x) => { x.fillStyle = C.coral; x.beginPath(); x.moveTo(10, 160); x.quadraticCurveTo(310, -60, 610, 160); x.lineTo(580, 162); x.quadraticCurveTo(310, -6, 40, 162); x.closePath(); x.fill(); }, 0.6],
    [(x) => { x.strokeStyle = 'rgba(150,40,30,0.5)'; x.lineWidth = 3; for (let i = 1; i < 12; i++) { const u = i / 12, px = 25 + u * 570, py = 160 - Math.sin(u * Math.PI) * 104; x.beginPath(); x.moveTo(px, py); x.lineTo(px + (u - 0.5) * 10, py + 22); x.stroke(); } }, 0.1]]));
  const bowlS = () => cache('bowl', () => compose(300, 180, [[(x) => { x.fillStyle = C.gold; x.beginPath(); x.moveTo(20, 150); x.quadraticCurveTo(150, -40, 280, 150); x.closePath(); x.fill(); }, 0.6], [(x) => { x.fillStyle = C.coral; x.fillRect(10, 145, 280, 18); }, 0.3]]));
  const balloonS = () => cache('balloon', () => compose(200, 260, [[(x) => { x.fillStyle = C.pink; ell(x, 81, 100, 105, 85, 100); x.beginPath(); x.moveTo(90, 200); x.lineTo(110, 200); x.lineTo(100, 226); x.closePath(); x.fill(); }, 0.6], [(x) => { x.fillStyle = 'rgba(255,255,255,0.4)'; ell(x, 82, 66, 70, 18, 28, 0.4); }, 0.1]]));
  const bottleS = () => cache('bottle', () => compose(170, 330, [[(x) => { x.fillStyle = C.skyL; x.beginPath(); poly(x, cutLines(H.rng(91), [[50, 70], [120, 70], [150, 120], [150, 320], [20, 320], [20, 120], [50, 70]], 24, 0.5)); x.fill(); x.fillStyle = C.teal; x.fillRect(58, 20, 54, 50); }, 0.6], [(x) => { x.fillStyle = C.o2; x.globalAlpha = 0.55; x.fillRect(26, 180, 118, 136); }, 0.2]]));
  const dotS = (col, r = 9) => cache('dot' + col + r, () => paperize(r * 2 + 6, r * 2 + 6, (x) => { x.fillStyle = col; ell(x, 540 + r, r + 3, r + 3, r, r * 0.95); }, { seed: 41, hi: 0.25, lo: 0.2 }));
  const cardS = (w, h, col = C.card, seed = 1) => cache('card' + w + h + col, () => paperize(w, h, (x) => { x.fillStyle = col; x.beginPath(); poly(x, cutLines(H.rng(seed + w), [[6, 6], [w - 6, 6], [w - 6, h - 6], [6, h - 6], [6, 6]], 26, 0.6)); x.fill(); }, { seed: seed + 40 }));
  const sprAt = (ctx, spr, x, y, t, st, op = {}) => { const A = op.pop ? popIn(t, st, op.du ?? 0.35) : dropIn(t, st, op.du ?? 0.4, op.dist ?? 60); if (!A) return null; put(ctx, spr, x, y + (A.dy || 0), { s: A.s * (op.s ?? 1), sx: op.sx != null ? op.sx * A.s : undefined, sy: op.sy != null ? op.sy * A.s : undefined, rot: op.rot, d: (op.d ?? 1) + A.d }); return A; };
  const burstAt = (ctx, x, y, t, st, s = 1, col) => { const u = cl((t - st) / 0.4); if (u <= 0) return; put(ctx, burstSpr(col), x, y, { s: s * (0.2 + 0.8 * E.back(u)), rot: t * 0.25, d: 0.7 }); };
  const kb = (ctx, t, a, b, s0, s1, cx = 640, cy = 360) => { const u = E.inOut(ph(t, a, b)), s = s0 + (s1 - s0) * u; ctx.translate(cx, cy); ctx.scale(s, s); ctx.translate(-cx, -cy); };
  const crossOn = (ctx, x, y, t, st, s = 1) => { const A = popIn(t, st, 0.3); if (A) put(ctx, crossSpr(), x, y, { s: A.s * s, d: 1 + A.d }); };
  const checkOn = (ctx, x, y, t, st, s = 1) => { const A = popIn(t, st, 0.3); if (A) put(ctx, checkSpr(), x, y, { s: A.s * s, d: 1 + A.d }); };
  const sign = (ctx, t, st, x, y, w, h, l1, c1, p1, l2, c2, p2, o = {}) => { const A = dropIn(t, st, 0.4, 60); if (!A) return; put(ctx, cardS(w, h, o.bg || C.card), x, y + A.dy, { d: 1.2 + A.d, rot: o.rot ?? 0 }); if (l2) { put(ctx, wordSpr(l1, p1, c1, null), x, y - h * 0.2 + A.dy, { d: 0.25, rot: o.rot ?? 0 }); put(ctx, wordSpr(l2, p2, c2, null), x, y + h * 0.24 + A.dy, { d: 0.25, rot: o.rot ?? 0 }); } else put(ctx, wordSpr(l1, p1, c1, null), x, y + A.dy, { d: 0.25, rot: o.rot ?? 0 }); };
  // rolling counter of cut digit tiles
  const counter = (ctx, t, st, du, to, x, y, px, col, suffix = '') => { const u = cl((t - st) / du); if (u <= 0) return; numberRow(ctx, fmt(to * E.out(u)) + suffix, x, y, px, col, { center: true }); };
  const breath = (t, t0, per = 3.6) => 0.5 - 0.5 * Math.cos(TAU * (t - t0) / per);
  // the chest cutaway: torso, lungs, ribs and the diaphragm. b = 0 (out) .. 1 (in)
  const chest = (ctx, cx, cy, s, b) => {
    put(ctx, torsoS(), cx, cy, { s, d: 1 });
    put(ctx, lungsS('chest'), cx, cy - 12 * s + 14 * b * s, { sx: s * 0.78 * (1 + 0.08 * b), sy: s * 0.78 * (1 + 0.1 * b), d: 0.8 });
    put(ctx, ribsS(), cx, cy + 6 * s, { sx: s * 0.86 * (1 + 0.05 * b), sy: s * 0.86 * (1 - 0.02 * b), d: 0.6 });
    const dsy = 1 - 0.55 * b; put(ctx, diaS(), cx, cy + (200 + 34 * b + (1 - dsy) * 50) * s, { sx: s * 0.86 * (1 + 0.04 * b), sy: s * 0.86 * dsy, d: 0.9 });
  };
  const faceS = (key, skin, hair) => cache('face' + key, () => compose(380, 420, [
    [(x) => { x.fillStyle = skin; ell(x, 510, 54, 225, 24, 32); ell(x, 511, 326, 225, 24, 32); ell(x, 512, 190, 225, 132, 152); }, 0.7],
    [(x) => { x.fillStyle = hair; x.beginPath(); const r = H.rng(520 + key.length); const pts = []; for (let i = 0; i <= 20; i++) { const a = Math.PI + (i / 20) * Math.PI; pts.push([190 + Math.cos(a) * 142, 190 + Math.sin(a) * 140]); } for (let i = 0; i <= 10; i++) { const u = i / 10; pts.push([332 - u * 284, 140 + (i % 2 ? 26 : 0) + r.gauss()]); } poly(x, pts); x.fill(); }, 0.45],
    [(x) => { x.strokeStyle = C.dark; x.lineWidth = 7; x.lineCap = 'round'; [140, 240].forEach((ex) => { x.beginPath(); x.arc(ex, 222, 13, 0.15 * Math.PI, 0.85 * Math.PI); x.stroke(); });
      x.strokeStyle = C.skinD; x.lineWidth = 6; x.beginPath(); x.moveTo(190, 240); x.quadraticCurveTo(200, 270, 184, 276); x.stroke();
      x.fillStyle = 'rgba(238,110,110,0.55)'; ell(x, 534, 112, 292, 46, 36); ell(x, 535, 268, 292, 46, 36);
      x.strokeStyle = '#9c3b3b'; x.lineWidth = 8; x.beginPath(); x.moveTo(170, 312); x.lineTo(210, 312); x.stroke(); }, 0.2]]));
  // bronchial tree: segments grouped by split level (seeded), each level one cached paper sheet
  const TREE = (() => { const r = H.rng(2323), lv = [...Array(8)].map(() => []);
    const grow = (x, y, a, len, w, d) => { const ex = x + Math.cos(a) * len, ey = y + Math.sin(a) * len; lv[d].push([x, y, ex, ey, w]); if (d < 7) { const sp = r.range(0.42, 0.62); grow(ex, ey, a - sp + r.range(-0.08, 0.08), len * r.range(0.68, 0.78), w * 0.68, d + 1); grow(ex, ey, a + sp + r.range(-0.08, 0.08), len * r.range(0.68, 0.78), w * 0.68, d + 1); } };
    grow(640, 40, Math.PI / 2, 150, 40, 0); return lv; })();
  const treeLv = (k, col) => cache('tl' + k + col, () => paperize(W, HH, (x) => { x.strokeStyle = col; x.lineCap = 'round'; TREE[k].forEach(([a, b, c, d, w]) => { x.lineWidth = w; x.beginPath(); x.moveTo(a, b); x.lineTo(c, d); x.stroke(); }); if (k === 7) { x.fillStyle = C.pink; TREE[7].forEach(([, , c, d], i) => ell(x, 700 + i, c, d, 9, 9)); } }, { seed: 300 + k }));
  const TCOL = ['#f3ecdc', '#f5e0d8', '#f6d2d4', '#f4c2cc', '#f2b2c4', '#f0a2bc', '#ee92b4', '#ee8fb0'];
  const drawTree = (ctx, t, st, step) => { for (let k = 0; k < 8; k++) { const A = st == null ? { a: 1, d: 0 } : null; let a = 1; if (st != null) { a = cl((t - (st + k * step)) / 0.3); if (a <= 0) continue; if (REC && k) REC.push([st + k * step + 0.1, 0.5, 'pop']); } ctx.save(); ctx.globalAlpha = a; shadowDraw(ctx, treeLv(k, TCOL[k]), 0, 0, 0.6, 0.4); ctx.restore(); } };
  const realTreeS = () => cache('rtree', () => { const r = H.rng(88), segs = []; const grow = (x, y, a, len, w, d) => { const ex = x + Math.cos(a) * len, ey = y + Math.sin(a) * len; segs.push([x, y, ex, ey, w, d]); if (d < 5) { grow(ex, ey, a - r.range(0.4, 0.6), len * 0.72, w * 0.66, d + 1); grow(ex, ey, a + r.range(0.4, 0.6), len * 0.72, w * 0.66, d + 1); } }; grow(220, 470, -Math.PI / 2, 120, 30, 0);
    return compose(440, 480, [[(x) => { x.strokeStyle = C.brown; x.lineCap = 'round'; segs.forEach(([a, b, c, d, w]) => { x.lineWidth = w; x.beginPath(); x.moveTo(a, b); x.lineTo(c, d); x.stroke(); }); }, 0.6], [(x) => { x.fillStyle = C.green; segs.filter((s) => s[5] === 5).forEach(([, , c, d], i) => ell(x, 900 + i, c, d, 26, 22)); }, 0.4]]); });
  const treeSmallS = () => cache('tsmall', () => { const C2 = H.layer(W, HH), c = C2.getContext('2d'); for (let k = 0; k < 8; k++) shadowDraw(c, treeLv(k, TCOL[k]), 0, 0, 0.6, 0.4); return C2; });
  const tubeS = () => cache('tube', () => paperize(1060, 70, (x) => { x.fillStyle = C.pink; x.beginPath(); poly(x, rect(H.rng(95), 4, 12, 1056, 58, 30, 0.6)); x.fill(); x.strokeStyle = C.pinkD; x.lineWidth = 4; for (let i = 30; i < 1050; i += 34) { x.beginPath(); x.moveTo(i, 16); x.lineTo(i, 54); x.stroke(); } }, { seed: 96 }));
  const hairS = () => cache('hair', () => paperize(16, 76, (x) => { x.fillStyle = C.cream; x.beginPath(); x.moveTo(3, 76); x.quadraticCurveTo(2, 30, 8, 2); x.quadraticCurveTo(14, 30, 13, 76); x.closePath(); x.fill(); }, { seed: 97, hi: 0.3 }));
  const clusterS = () => cache('cluster', () => { const r = H.rng(404), sacs = []; const br = [[600, 0, 600, 200], [600, 200, 470, 300], [600, 200, 730, 300], [470, 300, 420, 400], [470, 300, 540, 410], [730, 300, 680, 410], [730, 300, 800, 400]];
    br.slice(3).forEach(([, , c, d]) => { for (let i = 0; i < 9; i++) { const a = r() * TAU, rr = r.range(10, 60); sacs.push([c + Math.cos(a) * rr, d + 30 + Math.sin(a) * rr * 0.9, r.range(30, 40)]); } });
    return compose(1200, 560, [[(x) => { x.strokeStyle = C.pinkL; x.lineCap = 'round'; br.forEach(([a, b, c, d], i) => { x.lineWidth = i ? 26 : 40; x.beginPath(); x.moveTo(a, b); x.lineTo(c, d); x.stroke(); }); }, 0.5],
      [(x) => { sacs.forEach(([a, b, rr], i) => { x.fillStyle = i % 3 ? C.pink : '#f39cb9'; ell(x, 420 + i, a, b, rr, rr * 0.92); }); }, 0.6],
      [(x) => { x.strokeStyle = 'rgba(201,58,58,0.7)'; x.lineWidth = 4; sacs.forEach(([a, b, rr], i) => { if (i % 2) return; x.beginPath(); x.arc(a, b, rr * 0.7, 0.3, 2.4); x.stroke(); }); x.fillStyle = 'rgba(255,255,255,0.35)'; sacs.forEach(([a, b, rr], i) => ell(x, 470 + i, a - rr * 0.35, b - rr * 0.35, rr * 0.25, rr * 0.16, -0.6)); }, 0.15]]); });
  const alvS = () => cache('alv', () => compose(560, 560, [[(x) => { x.fillStyle = C.pinkL; ell(x, 601, 280, 280, 240, 232); }, 0.6], [(x) => { x.fillStyle = '#fbe3ea'; ell(x, 602, 280, 280, 190, 182); }, 0.3],
    [(x) => { x.lineCap = 'round'; const r = H.rng(603); for (let i = 0; i < 9; i++) { x.strokeStyle = i % 2 ? C.blood : C.vein; x.lineWidth = r.range(9, 14); const a = (i / 9) * TAU + r.range(-0.2, 0.2); x.beginPath(); x.moveTo(280 + Math.cos(a) * 250, 280 + Math.sin(a) * 250); x.quadraticCurveTo(280 + Math.cos(a + 0.7) * 120, 280 + Math.sin(a + 0.7) * 120, 280 + Math.cos(a + 1.8) * 250, 280 + Math.sin(a + 1.8) * 250); x.stroke(); } }, 0.35]]));
  const rbcS = (col) => cache('rbc' + col, () => compose(90, 70, [[(x) => { x.fillStyle = col; ell(x, 611, 45, 35, 38, 27); }, 0.5], [(x) => { x.fillStyle = 'rgba(0,0,0,0.18)'; ell(x, 612, 45, 35, 18, 11); }, 0.1]]));
  const courtS = () => cache('court', () => compose(760, 380, [[(x) => { x.fillStyle = C.court; x.beginPath(); poly(x, rect(H.rng(620), 10, 10, 750, 370, 30, 0.6)); x.fill(); }, 0.6],
    [(x) => { x.strokeStyle = C.card; x.lineWidth = 7; x.strokeRect(40, 40, 680, 300); x.strokeRect(40, 70, 680, 240); x.beginPath(); x.moveTo(380, 40); x.lineTo(380, 340); x.moveTo(40, 190); x.lineTo(270, 190); x.moveTo(490, 190); x.lineTo(720, 190); x.moveTo(270, 40); x.lineTo(270, 340); x.moveTo(490, 40); x.lineTo(490, 340); x.stroke(); }, 0.15],
    [(x) => { x.fillStyle = C.cream; x.fillRect(372, 20, 16, 340); }, 0.5]]));
  const headS = () => cache('head', () => compose(520, 600, [
    [(x) => { x.fillStyle = C.skin; x.beginPath(); x.moveTo(170, 600); x.lineTo(190, 470); x.bezierCurveTo(60, 430, 40, 250, 110, 150); x.bezierCurveTo(190, 30, 400, 30, 450, 170); x.lineTo(470, 250); x.lineTo(505, 300); x.lineTo(470, 320); x.lineTo(468, 380); x.quadraticCurveTo(460, 420, 400, 420); x.lineTo(350, 440); x.lineTo(360, 600); x.closePath(); x.fill(); }, 0.8],
    [(x) => { x.fillStyle = C.pinkL; ell(x, 631, 270, 200, 165, 115, -0.1); x.fillStyle = C.pink; ell(x, 632, 220, 300, 60, 34, 0.2); }, 0.4],
    [(x) => { x.strokeStyle = C.pinkD; x.lineWidth = 6; x.lineCap = 'round'; const r = H.rng(633); for (let i = 0; i < 9; i++) { const a = 140 + r() * 260, b = 120 + r() * 160; x.beginPath(); x.moveTo(a, b); x.quadraticCurveTo(a + 30, b - 20, a + r.range(30, 60), b + r.range(-10, 20)); x.stroke(); } }, 0.15],
    [(x) => { x.fillStyle = C.gold; x.beginPath(); x.moveTo(275, 290); x.quadraticCurveTo(300, 360, 285, 470); x.lineTo(250, 470); x.quadraticCurveTo(262, 360, 240, 300); x.closePath(); x.fill(); }, 0.5],
  ]));
  const gaugeS = (lbl, col) => cache('g' + lbl, () => compose(380, 330, [[(x) => { x.fillStyle = C.card; x.beginPath(); poly(x, rect(H.rng(lbl.length + 640), 8, 8, 372, 322, 26, 0.5)); x.fill(); }, 0.6],
    [(x) => { x.fillStyle = col; x.beginPath(); x.arc(190, 220, 140, Math.PI, TAU); x.arc(190, 220, 96, TAU, Math.PI, true); x.closePath(); x.fill(); x.font = AF(56); x.fillStyle = C.ink; x.textAlign = 'center'; x.fillText(lbl, 190, 305); }, 0.3]]));
  const needleS = () => cache('needle', () => paperize(150, 24, (x) => { x.fillStyle = C.ink; x.beginPath(); x.moveTo(0, 12); x.lineTo(130, 4); x.lineTo(150, 12); x.lineTo(130, 20); x.closePath(); x.fill(); }, { seed: 650 }));
  const gauge = (ctx, lbl, col, x, y, v, s = 1) => { put(ctx, gaugeS(lbl, col), x, y, { s, d: 1.1 }); ctx.save(); ctx.translate(x, y + 55 * s); ctx.rotate(Math.PI + v * Math.PI); ctx.scale(s, s); shadowDraw(ctx, needleS(), 0, -12, 0.6); ctx.restore(); put(ctx, dotS(C.ink, 14), x, y + 55 * s, { s, d: 0.5 }); };
  const meterS = (col) => cache('m' + col, () => compose(130, 420, [[(x) => { x.fillStyle = C.card; x.beginPath(); poly(x, rect(H.rng(660), 8, 8, 122, 412, 26, 0.5)); x.fill(); }, 0.6]]));
  const meter = (ctx, x, y, v, col, lbl) => { put(ctx, meterS(col), x, y, { d: 1.1 }); const h = 370 * v; const L = cache('mf' + col, () => paperize(90, 370, (c) => { c.fillStyle = col; c.fillRect(0, 0, 90, 370); }, { seed: 661 })); if (h > 1) { ctx.save(); ctx.beginPath(); ctx.rect(x - 45, y + 185 - h, 90, h); ctx.clip(); shadowDraw(ctx, L, x - 45, y - 185, 0.3); ctx.restore(); } put(ctx, wordSpr(lbl, 40, C.ink, '#fbf6ea', 8), x, y + 250, { d: 0.8 }); };
  const eyeS = () => cache('eye', () => compose(520, 300, [[(x) => { x.fillStyle = C.card; x.beginPath(); x.moveTo(20, 150); x.quadraticCurveTo(260, -60, 500, 150); x.quadraticCurveTo(260, 360, 20, 150); x.fill(); }, 0.6], [(x) => { x.fillStyle = C.teal; ell(x, 671, 260, 150, 90, 90); }, 0.4], [(x) => { x.fillStyle = C.dark; ell(x, 672, 260, 150, 42, 42); x.fillStyle = C.card; ell(x, 673, 238, 128, 12, 12); }, 0.2]]));
  const rainbowS = () => cache('rainbow', () => compose(900, 460, ['#d9473b', '#e8904a', '#f2b545', '#5fae6a', '#58b0a6', '#5a6fc0', '#9b6ad0'].map((col, i) => [(x) => { x.strokeStyle = col; x.lineWidth = 30; x.beginPath(); x.arc(450, 450, 420 - i * 30, Math.PI, TAU); x.stroke(); }, 0.25])));
  // a few air puffs drifting along a path (paper dots)
  const airFlow = (ctx, t, pts, n, speed, col = C.card, r = 8, seed = 1) => { const rr = H.rng(seed); for (let i = 0; i < n; i++) { const off = rr(), u = ((t * speed + off) % 1 + 1) % 1, k = Math.min(pts.length - 2, Math.floor(u * (pts.length - 1))), f = u * (pts.length - 1) - k; const x = pts[k][0] + (pts[k + 1][0] - pts[k][0]) * f + Math.sin(i * 3 + t * 2) * 6, y = pts[k][1] + (pts[k + 1][1] - pts[k][1]) * f; put(ctx, dotS(col, r), x, y, { d: 0.4, a: Math.min(1, u * 6, (1 - u) * 6) }); } };

  // ================= hook =================
  const sHook = (ctx, t) => {
    ctx.drawImage(paperBg('hook', '#2f6b8a', '#4d8fa8'), 0, 0);
    ctx.save(); kb(ctx, t, 0, PE(0), 1.06, 1);
    const sag = 1 - 0.1 * E.out(ph(t, P(0, 'cant'), P(0, 'cant') + 0.6));
    sprAt(ctx, lungsS('hook'), 470, 380, t, 0.05, { sy: 1.05 * sag, sx: 1.05, du: 0.45 });
    ctx.restore();
    crossOn(ctx, 470, 400, t, P(0, 'cant') - 0.1, 1.4);
    sign(ctx, t, P(0, 'breathe') - 0.15, 990, 260, 470, 200, "CAN'T", C.coral, 84, 'BREATHE ALONE', C.ink, 44, { rot: 0.02 });
    tag(ctx, 'ON THEIR OWN', 990, 470, t, P(0, 'own') - 0.15, { px: 44, col: C.tealD, rot: -0.03 });
  };
  const sCount = (ctx, t) => {
    ctx.drawImage(meadow('count'), 0, 0);
    const b = breath(t, PS(1));
    put(ctx, lungsS('cnt'), 1010, 400, { sx: 0.62 * (1 + 0.08 * b), sy: 0.62 * (1 + 0.1 * b), d: 1.1 });
    const A = dropIn(t, P(1, '20000') - 0.5, 0.4, 60);
    if (A) { put(ctx, cardS(600, 300, C.card), 420, 300 + A.dy, { d: 1.3 + A.d, rot: -0.02 }); counter(ctx, t, P(1, '20000') - 0.4, 0.6, 20000, 420, 265 + A.dy, 118, C.coral, '+'); put(ctx, wordSpr('BREATHS A DAY', 50, C.ink, null), 420, 380 + A.dy, { d: 0.3 }); }
    tag(ctx, 'ON AUTOPILOT', 420, 560, t, P(2, 'thinking') - 0.15, { px: 50, col: C.tealD, rot: 0.02 });
  };
  const sQuestion = (ctx, t) => {
    ctx.drawImage(paperBg('q', '#f2b545', '#f6cc6e'), 0, 0);
    cutTitle(ctx, 'WHAT PULLS', 640, 200, 96, t, P(3, 'pulling') - 0.35, { step: 0.03, cols: [C.ink, C.coral, C.ink] });
    cutTitle(ctx, 'THE AIR IN?', 640, 330, 96, t, P(3, 'air') - 0.3, { step: 0.03, cols: [C.coral, C.ink, C.coral] });
    sign(ctx, t, P(4, 'happens') - 0.15, 640, 520, 700, 120, 'AND WHERE DOES IT GO?', C.tealD, 48, null);
    const st = P(5, 'follow') - 0.1;
    if (t > st) { const pts = [[80, 660], [400, 640], [700, 670], [1000, 640], [1220, 660]]; airFlow(ctx, t, pts, 10, 0.35, C.card, 10, 3); tag(ctx, 'FOLLOW ONE BREATH', 640, 650, t, st, { px: 40, col: C.coral, back: C.card }); }
  };
  // ================= chapter 1: the engine =================
  const sEngine = (ctx, t) => {
    ctx.drawImage(paperBg('eng', '#cfe9ef', '#e6f3f5'), 0, 0);
    ctx.save(); kb(ctx, t, PS(6), PE(9), 1.0, 1.08, 520, 400);
    chest(ctx, 520, 400, 0.88, 0);
    ctx.restore();
    crossOn(ctx, 520, 330, t, P(7, 'lungs') - 0.1, 1.1);
    const dz = P(8, 'diaphragm') - 0.15;
    if (t > P(8, 'muscle') - 0.2) { const g = 0.5 + 0.5 * Math.sin((t - P(8, 'muscle')) * 9) * (1 - ph(t, P(8, 'muscle'), P(8, 'muscle') + 1.2)); ctx.save(); ctx.globalAlpha = 0.4 * g; put(ctx, ringSpr(C.gold), 520, 600, { sx: 2.0, sy: 0.6, d: 0 }); ctx.restore(); }
    sign(ctx, t, dz, 1030, 210, 400, 120, 'DIAPHRAGM', C.coral, 54, null);
    if (t > dz) arrow(ctx, 1000, 280, 940, 470, 760, 600, cl((t - dz) / 0.45), C.coral, 11);
    sprAt(ctx, bowlS(), 1030, 560, t, P(9, 'bowl') - 0.35, { s: 0.9, pop: true });
    tag(ctx, 'UPSIDE-DOWN BOWL', 1030, 660, t, P(9, 'upsidedown') - 0.15, { px: 34, col: C.ink });
  };
  const sInhale = (ctx, t) => {
    ctx.drawImage(paperBg('inh', '#f6d9c4', '#f9e8da'), 0, 0);
    const a = P(10, 'tightens') - 0.1, b = E.inOut(ph(t, a, P(10, 'flat') + 0.3)) * 0.6 + E.inOut(ph(t, P(11, 'ribs'), P(12, 'bigger') + 0.4)) * 0.4;
    chest(ctx, 460, 400, 0.88, b);
    if (t > P(10, 'pulls') - 0.1) { const u = cl((t - P(10, 'pulls') + 0.1) / 0.4); arrow(ctx, 460, 560, 470, 600, 460, 660, u, C.ink, 21); }
    tag(ctx, 'TIGHTENS + FLATTENS', 460, 690, t, P(10, 'flat') - 0.15, { px: 30, col: C.coral });
    if (t > P(11, 'ribs')) { const u = cl((t - P(11, 'ribs')) / 0.4); arrow(ctx, 200, 420, 150, 360, 140, 290, u, C.tealD, 22); arrow(ctx, 720, 420, 770, 360, 780, 290, u, C.tealD, 23); }
    tag(ctx, 'RIBS UP + OUT', 160, 230, t, P(11, 'out') - 0.15, { px: 30, col: C.tealD, rot: -0.03 });
    // pressure gauge
    const pd = P(13, 'drops') - 0.15;
    if (t > P(13, 'pressure') - 0.4) { const A = dropIn(t, P(13, 'pressure') - 0.4, 0.4, 50); if (A) { ctx.save(); ctx.translate(0, A.dy); gauge(ctx, 'PRESSURE', C.lilac, 1040, 200, 0.75 - 0.55 * E.out(ph(t, pd, pd + 0.6)), 0.9); ctx.restore(); } }
    tag(ctx, 'DROPS', 1040, 360, t, pd, { px: 44, col: C.coral });
    // outside air rushes in
    const ru = P(14, 'rushes') - 0.2;
    if (t > ru) { airFlow(ctx, t, [[1250, 500], [900, 470], [600, 130], [460, 110], [460, 260]], 14, 0.8, C.card, 10, 5); tag(ctx, 'AIR RUSHES IN', 1040, 560, t, ru, { px: 40, col: C.ink, back: C.card }); }
  };
  const sBalloons = (ctx, t) => {
    ctx.drawImage(paperBg('bal', '#58b0a6', '#7cc4ba'), 0, 0);
    const b = PS(15) < t ? breath(t, P(15, 'stretch') - 0.2, 2.4) : 0, w = 260 + 60 * b;
    put(ctx, cardS(760, 440, '#e9d3b4', 3), 640, 380, { d: 1 });
    put(ctx, cardS(40, 460, C.coral, 4), 640 - w - 20, 380, { d: 1.4 }); put(ctx, cardS(40, 460, C.coral, 4), 640 + w + 20, 380, { d: 1.4 });
    put(ctx, cardS(300 + 2 * w, 40, C.coral, 5), 640, 620, { d: 1.2 });
    sprAt(ctx, balloonS(), 640 - w / 2 - 10, 370, t, P(15, 'balloons') - 0.4, { sx: 0.8 + 0.5 * b, sy: 0.9 + 0.35 * b, pop: true });
    sprAt(ctx, balloonS(), 640 + w / 2 + 10, 370, t, P(15, 'balloons') - 0.35, { sx: 0.8 + 0.5 * b, sy: 0.9 + 0.35 * b, pop: true });
    tag(ctx, 'LUNGS JUST STRETCH ALONG', 640, 90, t, P(15, 'stretch') - 0.15, { px: 48, col: C.ink });
  };
  const sExhale = (ctx, t) => {
    ctx.drawImage(paperBg('exh', '#e6dff2', '#f1ecf8'), 0, 0);
    const r0 = P(17, 'relaxes') - 0.2, b = 1 - E.inOut(ph(t, r0, P(18, 'back') + 0.3));
    chest(ctx, 640, 400, 0.88, b);
    sign(ctx, t, P(16, 'easier') - 0.15, 230, 160, 320, 150, 'BREATHE', C.ink, 44, 'OUT', C.coral, 64, { rot: -0.03 });
    tag(ctx, 'RELAXES', 1050, 600, t, P(17, 'relaxes') - 0.15, { px: 44, col: C.coral });
    tag(ctx, 'SPRINGS BACK', 1050, 240, t, P(18, 'spring') - 0.15, { px: 44, col: C.tealD, rot: 0.03 });
    if (t > P(19, 'pushing') - 0.15) airFlow(ctx, t, [[640, 230], [640, 110], [700, 40], [900, -40]], 12, 0.9, C.card, 10, 8);
    tag(ctx, 'AIR OUT', 230, 560, t, P(19, 'out') - 0.15, { px: 52, col: C.ink, back: C.card });
  };
  const sLiters = (ctx, t) => {
    ctx.drawImage(meadow('lit', '#bfe3ea'), 0, 0);
    sprAt(ctx, bottleS(), 260, 360, t, P(20, 'half') - 0.3, { s: 1.1 });
    tag(ctx, '0.5 L', 260, 580, t, P(20, 'liter') - 0.15, { px: 60, col: C.ink });
    tag(ctx, 'PER BREATH', 260, 650, t, P(20, 'liter') + 0.05, { px: 32, col: C.tealD });
    const st = P(21, 'day') - 0.2;
    for (let i = 0; i < 18; i++) { const A = popIn(t, st + i * 0.05, 0.3); if (A) put(ctx, bottleS(), 520 + (i % 9) * 82, 160 + Math.floor(i / 9) * 120, { s: A.s * 0.35, d: 0.6 }); }
    const A = dropIn(t, P(21, '10000') - 0.4, 0.4, 60);
    if (A) { put(ctx, cardS(640, 230, C.card), 850, 500 + A.dy, { d: 1.3 + A.d }); counter(ctx, t, P(21, '10000') - 0.3, 0.6, 10000, 850, 470 + A.dy, 110, C.coral); put(ctx, wordSpr('LITERS A DAY', 46, C.ink, null), 850, 575 + A.dy, { d: 0.3 }); }
  };
  // ================= chapter 2: the airway tree =================
  const sTrachea = (ctx, t) => {
    ctx.drawImage(paperBg('tr', '#2f6b8a', '#4d8fa8'), 0, 0);
    ctx.save(); kb(ctx, t, PS(22), PE(24), 2.5, 2.2, 640, 110);
    for (let k = 0; k < 2; k++) shadowDraw(ctx, treeLv(k, TCOL[k]), 0, 0, 0.6, 0.4);
    if (t > P(23, 'windpipe') - 0.2) airFlow(ctx, t, [[640, -20], [640, 190], [610, 240], [592, 285]], 10, 0.55, C.o2, 9, 11);
    if (t > P(24, 'two') - 0.2) airFlow(ctx, t, [[640, -20], [640, 190], [670, 240], [688, 285]], 10, 0.55, C.o2, 9, 12);
    ctx.restore();
    tag(ctx, 'WINDPIPE', 330, 120, t, P(23, 'windpipe') - 0.15, { px: 44, col: C.ink, rot: -0.03 });
    tag(ctx, 'TRACHEA', 330, 190, t, P(23, 'trachea') - 0.15, { px: 52, col: C.coral, rot: -0.03 });
    tag(ctx, 'ONE FOR EACH LUNG', 640, 620, t, P(24, 'each') - 0.15, { px: 44, col: C.ink });
  };
  const sSplits = (ctx, t) => {
    ctx.drawImage(paperBg('sp', '#2f6b8a', '#4d8fa8'), 0, 0);
    drawTree(ctx, t, PS(25) - 0.3, (P(27, 'branches') - PS(25)) / 8);
    const A = dropIn(t, P(26, '23') - 0.3, 0.4, 60);
    if (A) { put(ctx, cardS(300, 210, C.gold), 1100, 150 + A.dy, { d: 1.3 + A.d, rot: 0.03 }); numberRow(ctx, '23', 1100, 125 + A.dy, 104, C.ink, { center: true }); put(ctx, wordSpr('SPLITS', 40, C.coral, null), 1100, 215 + A.dy, { d: 0.3, rot: 0.03 }); }
    tag(ctx, 'THINNER + THINNER', 200, 640, t, P(27, 'thinner') - 0.15, { px: 36, col: C.ink });
  };
  const sUpside = (ctx, t) => {
    ctx.drawImage(paperBg('ud', '#cfe9ef', '#e6f3f5'), 0, 0);
    ctx.save(); ctx.translate(330, 380); ctx.scale(0.55, 0.55); ctx.translate(-640, -360); shadowDraw(ctx, treeSmallS(), 0, 0, 0.8, 0.4); ctx.restore();
    tag(ctx, 'BRONCHIAL TREE', 330, 660, t, P(28, 'bronchial') - 0.15, { px: 40, col: C.coral });
    const fl = E.inOut(ph(t, P(29, 'upside') - 0.3, P(29, 'down') + 0.3));
    const A = dropIn(t, P(29, 'tree') - 0.3, 0.4, 60);
    if (A) put(ctx, realTreeS(), 940, 370 + A.dy, { s: A.s * 0.95, rot: fl * Math.PI, d: 1.2 + A.d });
    tag(ctx, 'UPSIDE DOWN!', 940, 660, t, P(29, 'down') - 0.1, { px: 44, col: C.ink });
  };
  const sLength = (ctx, t) => {
    ctx.drawImage(meadow('len', '#cbe6c9', '#9fcf8c', '#77b06a', '#4f8a50'), 0, 0);
    const st = P(30, 'end') - 0.3, u = E.inOut(ph(t, st, st + 1.4)), tub = tubeS();
    if (u > 0) { ctx.save(); ctx.beginPath(); ctx.rect(110, 0, 1060 * u, HH); ctx.clip(); shadowDraw(ctx, tub, 110, 430, 0.9); ctx.restore(); }
    tag(ctx, 'END TO END', 640, 560, t, P(30, 'end') - 0.15, { px: 40, col: C.ink, back: C.card });
    const A = dropIn(t, P(31, '2400') - 0.35, 0.4, 60);
    if (A) { put(ctx, cardS(600, 230, C.card), 640, 220 + A.dy, { d: 1.3 + A.d, rot: -0.02 }); counter(ctx, t, P(31, '2400') - 0.25, 0.6, 2400, 640, 190 + A.dy, 110, C.coral); put(ctx, wordSpr('KILOMETERS', 46, C.ink, null), 640, 290 + A.dy, { d: 0.3 }); }
    tag(ctx, 'ONE ESTIMATE', 1100, 650, t, P(31, 'estimate') - 0.15, { px: 30, col: C.tealD, rot: 0.03 });
  };
  const sCilia = (ctx, t) => {
    ctx.drawImage(paperBg('ci', '#3a2a4a', '#4a3a5c'), 0, 0);
    const wall = cache('ciwall', () => compose(W, 300, [[(x) => { x.fillStyle = C.pinkD; x.fillRect(0, 60, W, 240); }, 0.6], [(x) => { x.fillStyle = C.pink; for (let i = 0; i < 26; i++) ell(x, 680 + i, 25 + i * 50, 120, 24, 50); }, 0.4]]));
    shadowDraw(ctx, wall, 0, 470, 1);
    const hs = hairS(), base = 520;
    for (let i = 0; i < 52; i++) { const x = 12 + i * 24.5, a = Math.sin(t * 7 - i * 0.45) * 0.4; ctx.save(); ctx.translate(x, base); ctx.rotate(a + 0.12); shadowDraw(ctx, hs, -8, -76, 0.3, 0.35); ctx.restore(); }
    const mA = cl((t - (P(32, 'mucus') - 0.3)) / 0.5);
    if (mA > 0) { const mu = cache('mucus', () => paperize(W, 120, (x) => { x.fillStyle = 'rgba(214,224,120,0.85)'; x.beginPath(); poly(x, [...ridge(H.rng(690), 0, W, (q) => 22 + Math.sin(q * 0.02) * 10, 20, 40, 2), [W, 120], [0, 120]]); x.fill(); }, { seed: 691 })); ctx.save(); ctx.globalAlpha = mA * 0.9; shadowDraw(ctx, mu, 0, 330 + (1 - mA) * -40, 0.4); ctx.restore(); }
    const ds = P(33, 'dust') - 0.2;
    if (t > ds) { const r = H.rng(77); for (let i = 0; i < 16; i++) { const A = popIn(t, ds + i * 0.05, 0.25); if (!A) continue; const sw = t > P(34, 'sweep') - 0.1 ? (t - (P(34, 'sweep') - 0.1)) * 140 : 0, x = ((60 + r() * 1150 + sw) % 1320) - 20, y = 360 + r() * 70; put(ctx, dotS(i % 3 ? '#6b5a3a' : C.green, i % 3 ? 8 : 11), x, y, { s: A.s, d: 0.4 }); } }
    tag(ctx, 'MUCUS', 180, 300, t, P(32, 'mucus') - 0.15, { px: 40, col: C.ink, back: '#e6ee9a' });
    tag(ctx, 'CILIA', 640, 640, t, P(32, 'cilia') - 0.15, { px: 52, col: C.coral });
    tag(ctx, 'DUST + GERMS', 420, 180, t, P(33, 'dust') - 0.15, { px: 40, col: C.ink });
    if (t > P(34, 'throat') - 0.4) { arrow(ctx, 900, 280, 1080, 240, 1180, 90, cl((t - P(34, 'throat') + 0.4) / 0.45), C.gold, 31); tag(ctx, 'TO YOUR THROAT', 1010, 120, t, P(34, 'throat') - 0.15, { px: 34, col: C.ink }); }
    const gA = popIn(t, P(35, 'swallow') - 0.1, 0.3); if (gA) put(ctx, wordSpr('GULP!', 64, C.coral, C.card, 12), 1100, 260, { s: gA.s, d: 1.2 + gA.d, rot: 0.08 });
  };
  const sLobes = (ctx, t) => {
    ctx.drawImage(paperBg('lob', '#f2b545', '#f6cc6e'), 0, 0);
    sprAt(ctx, heartS(), 712, 450, t, P(39, 'heart') - 0.35, { s: 0.75, pop: true });
    sprAt(ctx, lungsS('lob', { lobes: true }), 640, 380, t, PS(36), { s: 1.12 });
    tag(ctx, 'NOT TWINS', 640, 70, t, P(36, 'twins') - 0.15, { px: 48, col: C.ink });
    sign(ctx, t, P(37, 'three') - 0.15, 180, 330, 270, 200, 'RIGHT', C.ink, 40, '3 LOBES', C.coral, 48, { rot: -0.03 });
    sign(ctx, t, P(38, 'two') - 0.15, 1100, 330, 270, 200, 'LEFT', C.ink, 40, '2 LOBES', C.coral, 48, { rot: 0.03 });
    tag(ctx, 'ROOM FOR THE HEART', 940, 640, t, P(39, 'heart') - 0.1, { px: 36, col: C.blood });
  };
  // ================= chapter 3: the great swap =================
  const sAlveoli = (ctx, t) => {
    ctx.drawImage(paperBg('alv', '#e6dff2', '#f1ecf8'), 0, 0);
    ctx.save(); kb(ctx, t, PS(41), PE(44), 0.92, 1.08, 600, 380);
    const A = dropIn(t, PS(40) + 0.4, 0.45, 70); if (A) put(ctx, clusterS(), 600, 290 + A.dy, { s: 1.1, d: 1.2 + A.d });
    ctx.restore();
    const gr = popIn(t, P(42, 'grapes') - 0.15, 0.35); if (gr) put(ctx, ringSpr(C.coral), 450, 500, { s: gr.s * 0.9, d: 0.8 });
    tag(ctx, 'LIKE GRAPES', 230, 600, t, P(42, 'grapes') - 0.1, { px: 40, col: C.ink });
    sign(ctx, t, P(43, 'alveoli') - 0.15, 640, 640, 420, 110, 'ALVEOLI', C.coral, 70, null);
    const B = dropIn(t, P(44, '480') - 0.3, 0.4, 60);
    if (B) { put(ctx, cardS(380, 230, C.card), 1060, 210 + B.dy, { d: 1.3 + B.d, rot: 0.03 }); numberRow(ctx, '480', 1060, 180 + B.dy, 110, C.coral, { center: true }); put(ctx, wordSpr('MILLION', 48, C.ink, null), 1060, 280 + B.dy, { d: 0.3, rot: 0.03 }); }
  };
  const sNet = (ctx, t) => {
    ctx.drawImage(paperBg('net', '#cfe9ef', '#e6f3f5'), 0, 0);
    sprAt(ctx, alvS(), 420, 340, t, PS(45) - 0.1, { s: 1.0, pop: true, du: 0.4 });
    tag(ctx, 'BLOOD VESSELS', 420, 690, t, P(45, 'blood') - 0.15, { px: 38, col: C.blood });
    const A = dropIn(t, P(46, 'wall') - 0.2, 0.4, 60);
    if (A) { put(ctx, cardS(460, 440, C.card), 990, 360 + A.dy, { d: 1.3 + A.d, rot: 0.02 });
      put(ctx, wordSpr('PAPER', 34, C.ink, null), 990, 200 + A.dy, { d: 0.2 }); put(ctx, cardS(380, 70, '#d8c9a8', 9), 990, 260 + A.dy, { d: 0.6 });
      put(ctx, wordSpr('THE WALL', 34, C.ink, null), 990, 340 + A.dy, { d: 0.2 }); put(ctx, cardS(380, 14, C.coral, 10), 990, 380 + A.dy, { d: 0.4 }); }
    const B = popIn(t, P(47, '200') - 0.2, 0.35);
    if (B) { numberRow(ctx, '200x', 990, 470, 84, C.coral, { center: true }); put(ctx, wordSpr('THINNER', 40, C.ink, null), 990, 545, { s: B.s, d: 0.3 }); }
  };
  const sSwap = (ctx, t) => {
    const bg = cache('swapbg', () => compose(W, HH, [[(x) => { x.fillStyle = '#fbe3ea'; x.fillRect(0, 0, W, HH); }, 0], [(x) => { x.fillStyle = C.pinkL; x.fillRect(0, 330, W, 22); }, 0.6], [(x) => { x.fillStyle = '#e07a7a'; x.fillRect(0, 380, W, 260); }, 0.8]]));
    ctx.drawImage(bg, 0, 0);
    tag(ctx, 'AIR SAC', 160, 70, t, PS(48) - 0.2, { px: 40, col: C.pinkD });
    tag(ctx, 'BLOOD', 160, 680, t, PS(48) - 0.1, { px: 40, col: C.blood, back: C.card });
    const o2 = P(48, 'oxygen') - 0.15, r = H.rng(51);
    // red blood cells drift right; each turns from dark to bright as it passes under the oxygen
    for (let i = 0; i < 9; i++) { const x = ((i * 160 + (t - PS(48)) * 60) % 1440) - 80, y = 500 + Math.sin(i * 2.1) * 50; const ox = cl((t - o2 - i * 0.12) / 0.6) * cl((x - 100) / 300); put(ctx, rbcS(ox > 0.5 ? C.blood : '#8a3a6a'), x, y, { s: 1.2, d: 0.7 }); }
    if (t > o2) for (let i = 0; i < 12; i++) { const ph0 = r(), u = (((t - o2) * 0.45 + ph0) % 1), x = 120 + i * 95, y = 140 + u * 380; put(ctx, dotS(C.o2, 13), x, y, { d: 0.5, a: Math.min(1, u * 5, (1 - u) * 5) }); }
    tag(ctx, 'O2 IN', 640, 250, t, P(48, 'oxygen') - 0.1, { px: 56, col: C.o2, back: C.card });
    const c2 = P(49, 'carbon') - 0.15, r2 = H.rng(52);
    if (t > c2) for (let i = 0; i < 10; i++) { const ph0 = r2(), u = (((t - c2) * 0.45 + ph0) % 1), x = 170 + i * 105, y = 560 - u * 420; put(ctx, dotS(C.co2, 12), x, y, { d: 0.5, a: Math.min(1, u * 5, (1 - u) * 5) }); }
    tag(ctx, 'CO2 OUT', 1050, 250, t, P(49, 'carbon') - 0.1, { px: 56, col: C.ink, back: C.card });
    tag(ctx, 'WASTE GAS', 1050, 330, t, P(49, 'waste') - 0.15, { px: 30, col: C.co2 });
    if (t > P(51, 'breathed') - 0.3) arrow(ctx, 1050, 160, 1150, 100, 1230, 30, cl((t - P(51, 'breathed') + 0.3) / 0.45), C.ink, 41);
  };
  const sCourt = (ctx, t) => {
    ctx.drawImage(meadow('court', '#bfe3ea'), 0, 0);
    const fl = E.inOut(ph(t, P(52, 'flat') - 0.5, P(52, 'flat') + 0.4)), fold = E.inOut(ph(t, P(55, 'folded') - 0.1, P(55, 'chest') + 0.2));
    if (fl < 1) put(ctx, clusterS(), 640, 330, { s: 0.7 * (1 - fl * 0.6), d: 1, a: 1 - fl });
    if (fl > 0) put(ctx, courtS(), H.lerp(640, 1010, fold), H.lerp(380, 380, fold), { sx: H.lerp(0.4, 1.15, fl) * (1 - fold * 0.8), sy: H.lerp(0.4, 1.15, fl) * (1 - fold * 0.8), d: 1.2, rot: fold * 0.4 });
    if (fold > 0) put(ctx, torsoS(), 1010, 400, { s: 0.6, d: 1.2, a: Math.min(1, fold * 3) });
    if (fold > 0.7) put(ctx, lungsS('cc'), 1010, 380, { s: 0.42, d: 0.8 });
    const A = dropIn(t, P(53, '70') - 0.3, 0.4, 60);
    if (A) { const x = H.lerp(640, 330, fold); put(ctx, cardS(380, 200, C.card), x, 130 + A.dy, { d: 1.3 + A.d, rot: -0.03 }); numberRow(ctx, '70', x, 105 + A.dy, 104, C.coral, { center: true }); put(ctx, wordSpr('SQUARE METERS', 34, C.ink, null), x, 185 + A.dy, { d: 0.3, rot: -0.03 }); }
    tag(ctx, 'A BADMINTON COURT', H.lerp(640, 330, fold), 650, t, P(54, 'badminton') - 0.15, { px: 44, col: C.ink, back: C.card });
    tag(ctx, 'IN YOUR CHEST', 1010, 690, t, P(55, 'chest') - 0.1, { px: 34, col: C.coral });
  };
  // ================= chapter 4: the autopilot =================
  const sBrain = (ctx, t) => {
    ctx.drawImage(paperBg('br', '#2f6b8a', '#4d8fa8'), 0, 0);
    sprAt(ctx, headS(), 430, 400, t, PS(56) + 0.4, { s: 1.05 });
    sign(ctx, t, P(56, 'charge') - 0.15, 1000, 170, 420, 120, "WHO'S IN CHARGE?", C.ink, 40, null);
    tag(ctx, 'NOT YOU', 1000, 300, t, P(57, 'not') - 0.15, { px: 52, col: C.coral, rot: 0.03 });
    const bs = P(58, 'brainstem') - 0.15, A = popIn(t, bs, 0.35);
    if (A) put(ctx, ringSpr(C.gold), 430 + 8, 400 + 80, { s: A.s * 0.55, d: 0.8 });
    tag(ctx, 'BRAINSTEM', 800, 470, t, bs, { px: 44, col: C.gold, back: C.ink });
    if (t > bs) arrow(ctx, 700, 470, 600, 500, 490, 480, cl((t - bs) / 0.4), C.gold, 51);
    sign(ctx, t, P(58, 'autopilot') - 0.15, 1000, 610, 420, 110, 'AUTOPILOT', C.tealD, 60, null);
  };
  const sGauges = (ctx, t) => {
    ctx.drawImage(paperBg('ga', '#f6d9c4', '#f9e8da'), 0, 0);
    tag(ctx, 'THE SURPRISE', 640, 80, t, P(59, 'surprise') - 0.15, { px: 52, col: C.coral });
    const w1 = Math.sin(t * 3) * 0.04;
    const A = dropIn(t, P(60, 'watching') - 0.4, 0.4, 60); if (A) { ctx.save(); ctx.translate(0, A.dy); gauge(ctx, 'O2', C.o2, 360, 360, 0.5 + w1, 1.1); ctx.restore(); }
    crossOn(ctx, 360, 360, t, P(60, 'oxygen') - 0.1, 1.3);
    const B = dropIn(t, PS(61) - 0.1, 0.4, 60); if (B) { ctx.save(); ctx.translate(0, B.dy); gauge(ctx, 'CO2', C.co2, 920, 360, 0.3 + 0.5 * E.out(ph(t, P(61, 'carbon'), P(61, 'carbon') + 1)), 1.1); ctx.restore(); }
    const R = popIn(t, P(61, 'carbon') - 0.1, 0.35); if (R) put(ctx, ringSpr(C.gold), 920, 360, { s: R.s * 1.45, d: 0.6 });
    checkOn(ctx, 1110, 220, t, P(61, 'dioxide') - 0.1, 1.0);
  };
  const sSignal = (ctx, t) => {
    ctx.drawImage(paperBg('sg', '#e6dff2', '#f1ecf8'), 0, 0);
    put(ctx, cardS(W + 40, 170, '#e07a7a', 12), 640, 600, { d: 1 });
    const st = P(62, 'builds') - 0.4;
    for (let i = 0; i < 24; i++) { const A = popIn(t, st + i * 0.06, 0.25); if (A) put(ctx, dotS(C.co2, 12), 60 + i * 50 + Math.sin(i * 7) * 12, 600 + Math.cos(i * 5) * 40, { s: A.s, d: 0.5 }); }
    tag(ctx, 'CO2 BUILDS UP', 260, 470, t, P(62, 'co2') - 0.15, { px: 44, col: C.ink });
    sprAt(ctx, headS(), 640, 230, t, PS(62) - 0.4, { s: 0.55 });
    if (t > P(63, 'brainstem') - 0.3) arrow(ctx, 520, 520, 520, 380, 610, 300, cl((t - P(63, 'brainstem') + 0.3) / 0.4), C.gold, 61);
    if (t > P(63, 'diaphragm') - 0.2) arrow(ctx, 720, 260, 860, 220, 920, 330, cl((t - P(63, 'diaphragm') + 0.2) / 0.4), C.gold, 62);
    const fz = P(63, 'faster') - 0.15, b = t > fz ? breath(t, fz, 0.7) : 0;
    sprAt(ctx, diaS(), 1030, 400, t, P(63, 'diaphragm') - 0.2, { sx: 0.5, sy: 0.5 * (1 - 0.5 * b), pop: true });
    tag(ctx, 'FASTER!', 1030, 300, t, fz, { px: 56, col: C.coral, rot: 0.04 });
  };
  const sHold = (ctx, t) => {
    ctx.drawImage(paperBg('hd', '#58b0a6', '#7cc4ba'), 0, 0);
    const puff = 1 + 0.03 * Math.sin(t * 5);
    sprAt(ctx, faceS('hold', C.skin, C.brownHair), 420, 380, t, PS(64) - 0.1, { s: 1.15 * puff });
    tag(ctx, 'HOLDING YOUR BREATH', 420, 650, t, P(64, 'hold') - 0.15, { px: 38, col: C.ink });
    const s0 = PS(64) + 0.4, v1 = 0.12 + 0.78 * E.inOut(ph(t, s0, P(65, 'piling') + 0.4)), v2 = 0.95 - 0.12 * E.inOut(ph(t, P(65, 'oxygen'), P(65, 'out')));
    if (t > s0) { const A = dropIn(t, s0, 0.4, 60); ctx.save(); ctx.translate(0, A ? A.dy : 0); meter(ctx, 860, 330, v1, C.co2, 'CO2'); meter(ctx, 1080, 330, v2, C.o2, 'O2'); ctx.restore(); }
    tag(ctx, 'PILING UP', 860, 90, t, P(65, 'piling') - 0.15, { px: 36, col: C.coral, rot: -0.03 });
    tag(ctx, 'STILL PLENTY', 1080, 90, t, P(65, 'running') - 0.15, { px: 32, col: C.tealD, rot: 0.03 });
  };
  const sPercent = (ctx, t) => {
    ctx.drawImage(paperBg('pc', '#cfe9ef', '#e6f3f5'), 0, 0);
    const card = (x, st, top, num, col, rot) => { const A = dropIn(t, st, 0.4, 60); if (!A) return; put(ctx, cardS(440, 380, C.card), x, 380 + A.dy, { d: 1.3 + A.d, rot }); put(ctx, wordSpr(top, 44, C.ink, null), x, 250 + A.dy, { d: 0.3, rot }); numberRow(ctx, num, x, 380 + A.dy, 120, col, { center: true }); put(ctx, wordSpr('OXYGEN', 40, C.tealD, null), x, 500 + A.dy, { d: 0.3, rot }); };
    card(900, P(67, '21') - 0.3, 'AIR IN', '21%', C.o2, 0.03);
    card(380, P(66, '16') - 0.3, 'AIR OUT', '16%', C.coral, -0.03);
    tag(ctx, 'STILL PLENTY LEFT', 380, 640, t, P(66, 'oxygen') - 0.1, { px: 36, col: C.ink });
  };
  // ================= chapter 5: the big picture =================
  const sTrade = (ctx, t) => {
    ctx.drawImage(paperBg('trd', '#f2b545', '#f6cc6e'), 0, 0);
    const b = breath(t, PS(68), 3);
    put(ctx, lungsS('trd'), 640, 380, { sx: 0.95 * (1 + 0.06 * b), sy: 0.95 * (1 + 0.08 * b), d: 1.2 });
    sign(ctx, t, P(68, 'pumps') - 0.4, 230, 170, 300, 150, 'PUMPS?', C.ink, 52, null, null, null, { rot: -0.04 });
    crossOn(ctx, 380, 130, t, P(68, 'pumps') - 0.05, 0.8);
    sign(ctx, t, P(69, 'trading') - 0.15, 1040, 170, 400, 160, 'TRADING', C.coral, 56, 'FLOOR', C.ink, 52, { rot: 0.03 });
    if (t > P(70, 'swap') - 0.3) { const u = cl((t - P(70, 'swap') + 0.3) / 0.45); arrow(ctx, 150, 420, 250, 330, 380, 380, u, C.o2, 71); arrow(ctx, 900, 380, 1030, 330, 1130, 420, u, C.co2, 72); tag(ctx, 'O2', 160, 500, t, P(70, 'swap') - 0.1, { px: 44, col: C.o2 }); tag(ctx, 'CO2', 1130, 500, t, P(70, 'swap'), { px: 44, col: C.ink }); }
    const A = dropIn(t, P(71, '20000') - 0.35, 0.4, 60);
    if (A) { put(ctx, cardS(640, 150, C.card), 640, 630 + A.dy, { d: 1.3 + A.d }); counter(ctx, t, P(71, '20000') - 0.25, 0.6, 20000, 520, 630 + A.dy, 80, C.coral, '+'); put(ctx, wordSpr('A DAY', 46, C.ink, null), 830, 630 + A.dy, { d: 0.3 }); }
  };
  const sNext = (ctx, t) => {
    ctx.drawImage(paperBg('nx', '#2f6b8a', '#4d8fa8'), 0, 0);
    tag(ctx, 'NEXT UP', 640, 80, t, PS(72), { px: 58, col: C.coral });
    sprAt(ctx, rainbowS(), 640, 420, t, P(72, 'colors') - 0.3, { s: 0.9, pop: true });
    sprAt(ctx, eyeS(), 640, 430, t, P(72, 'animals') - 0.3, { s: 0.85 });
    const A = dropIn(t, P(73, 'imagine') - 0.4, 0.4, 60);
    if (A) { put(ctx, cardS(820, 120, C.card), 640, 640 + A.dy, { d: 1.2 + A.d }); put(ctx, wordSpr("COLORS WE CAN'T SEE", 52, C.ink, null), 640, 640 + A.dy, { d: 0.2 }); }
  };
  const SC = [
    { s: 0, f: sHook }, { s: PS(1), f: sCount, tr: 'rip' }, { s: PS(3), f: sQuestion, tr: 'drop' },
    { s: PS(6), f: sEngine, tr: 'rip', ch: [1, 'THE ENGINE'], chAt: PS(6) },
    { s: PS(10), f: sInhale, tr: 'pan' }, { s: PS(15), f: sBalloons, tr: 'drop' }, { s: PS(16), f: sExhale, tr: 'pan' }, { s: PS(20), f: sLiters, tr: 'drop' },
    { s: PS(22), f: sTrachea, tr: 'rip', ch: [2, 'THE AIRWAY TREE'] }, { s: PS(25), f: sSplits, tr: 'cut' }, { s: PS(28), f: sUpside, tr: 'pan' }, { s: PS(30), f: sLength, tr: 'drop' }, { s: PS(32), f: sCilia, tr: 'rip' }, { s: PS(36), f: sLobes, tr: 'drop' },
    { s: PS(40), f: sAlveoli, tr: 'rip', ch: [3, 'THE GREAT SWAP'], chAt: PS(40) }, { s: PS(45), f: sNet, tr: 'pan' }, { s: PS(48), f: sSwap, tr: 'drop' }, { s: PS(52), f: sCourt, tr: 'pan' },
    { s: PS(56), f: sBrain, tr: 'rip', ch: [4, 'THE AUTOPILOT'], chAt: PS(56) + 1.6 }, { s: PS(59), f: sGauges, tr: 'drop' }, { s: PS(62), f: sSignal, tr: 'pan' }, { s: PS(64), f: sHold, tr: 'drop' }, { s: PS(66), f: sPercent, tr: 'pan' },
    { s: PS(68), f: sTrade, tr: 'rip', ch: [5, 'THE BIG PICTURE'], chAt: PS(68) + 2.4 }, { s: PS(72), f: sNext, tr: 'rip' },
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
    const flick = (t, g = 1) => { k.noise(t, { dur: 0.022, filter: 'bandpass', f: 1800, q: 1.4, gain: 0.22 * g, a: 0.001, minor: true }); k.tone(t, { f: 220, dur: 0.03, gain: 0.06 * g, minor: true }); };
    const tear = (t, d = 0.45) => { const r = H.rng(Math.round(t * 100)); for (let x = 0; x < d; x += 0.018 + r() * 0.02) k.noise(t + x, { dur: 0.03, filter: 'bandpass', f: 1500 + r() * 2500, q: 0.8, gain: 0.25 * (0.6 + r() * 0.5) }); k.noise(t, { dur: d, color: 'pink', filter: 'highpass', f: 1200, gain: 0.1, a: d * 0.3 }); };
    // landings
    collect().forEach(([t, g, kind]) => card(t, g, 0, kind === 'pop' ? 1.2 : 1, g < 1));
    SC.forEach((sc, i) => { if (!i) return; const t0 = sc.s - TD;
      if (sc.tr === 'pan') layer(t0, TD + 0.2, 0.9);
      else if (sc.tr === 'drop') { k.play('whoosh', t0, { dur: TD * 0.8, gain: 0.5 }); card(t0 + TD * 0.6, 1.2, 0, 0.7, false); }
      else if (sc.tr === 'rip') tear(t0, TD); });
    SC.forEach((sc) => { if (sc.ch) { const st = sc.chAt ?? sc.s; card(st + 0.17, 1.1, 0, 0.8, false); k.play('ding', st + 0.25, { f: 'G5', gain: 0.35 }); } });
    const hit = (t, g = 1) => { k.play('impact', t, { gain: g }); k.noise(t, { dur: 0.12, color: 'pink', filter: 'bandpass', f: [[0, 600], [0.12, 1600]], q: 0.6, gain: 0.3, a: 0.02 }); };
    const pop = (t, g = 0.6) => k.play('pop', t, { gain: g, minor: true });
    const pops = (t0, n, dt, g = 0.35) => { for (let i = 0; i < n; i++) pop(t0 + i * dt, g); };
    const inhale = (t, d = 1, g = 0.3) => k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 500], [d, 1400]], q: 0.5, gain: g, a: d * 0.5 });
    const exhale = (t, d = 1, g = 0.3) => k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 1300], [d, 450]], q: 0.5, gain: g, a: d * 0.2 });
    // hook
    k.play('error', P(0, 'cant'), { gain: 0.25 }); k.play('slap', P(0, 'cant') - 0.05, { gain: 0.5 }); hit(P(0, 'breathe') - 0.05, 0.7);
    k.play('riser', P(1, '20000') - 0.9, { dur: 0.8, gain: 0.3 }); pops(P(1, '20000') - 0.4, 12, 0.05, 0.25); hit(P(1, '20000') + 0.2, 0.8);
    k.play('ding', P(3, 'air'), { f: 'E5', gain: 0.35 }); k.play('whoosh', P(5, 'follow'), { dur: 0.8, gain: 0.3 });
    // chapter 1
    k.play('slap', P(7, 'lungs'), { gain: 0.5 }); k.play('ding', P(8, 'diaphragm'), { f: 'C6', gain: 0.3 }); k.play('pop', P(9, 'bowl') - 0.2, { gain: 0.6 });
    k.play('thud', P(10, 'flat'), { f: 100, gain: 0.4 }); inhale(P(10, 'tightens'), 1.6, 0.25); k.play('swish', P(11, 'ribs'), { dur: 0.5, gain: 0.3 });
    k.play('tock', P(13, 'drops') - 0.1, { gain: 0.4 }); inhale(P(14, 'rushes') - 0.2, 1.4, 0.35);
    for (let i = 0; i < 3; i++) inhale(P(15, 'stretch') - 0.2 + i * 2.4, 1.2, 0.2);
    k.play('jump', P(18, 'spring'), { gain: 0.3 }); exhale(P(17, 'relaxes'), 2.0, 0.3); exhale(P(19, 'pushing'), 1.0, 0.3);
    k.play('pop', P(20, 'half'), { gain: 0.5 }); pops(P(21, 'day') - 0.2, 18, 0.05, 0.22); hit(P(21, '10000') - 0.05, 0.8);
    // chapter 2
    k.play('whoosh', P(23, 'windpipe'), { dur: 0.9, gain: 0.3 }); k.play('ding', P(23, 'trachea'), { f: 'G5', gain: 0.3 });
    k.play('stamp', P(26, '23') - 0.05, { gain: 0.6 }); k.play('ding', P(28, 'bronchial'), { f: 'C6', gain: 0.3 });
    k.play('swish', P(29, 'upside') - 0.3, { dur: 0.6, gain: 0.35 }); k.play('thud', P(29, 'down'), { f: 120, gain: 0.4 });
    k.play('paper', P(30, 'end') - 0.3, { dur: 1.4, gain: 0.3 }); hit(P(31, '2400') - 0.05, 0.8);
    k.play('blip', P(32, 'mucus'), { gain: 0.3 }); pops(P(33, 'dust') - 0.2, 16, 0.05, 0.2); k.play('whoosh', P(34, 'sweep'), { dur: 1.2, gain: 0.25 }); k.play('thud', P(35, 'swallow'), { f: 90, gain: 0.45 }); k.play('pop', P(35, 'swallow'), { gain: 0.5 });
    k.play('stamp', P(37, 'three'), { gain: 0.5 }); k.play('stamp', P(38, 'two'), { gain: 0.5 }); k.play('ding', P(39, 'heart'), { f: 'E6', gain: 0.3 });
    // chapter 3
    k.play('sparkle', P(40, 'magic'), { gain: 0.45 }); k.play('pop', P(42, 'grapes'), { gain: 0.6 }); k.play('ding', P(43, 'alveoli'), { f: 'C6', gain: 0.3 });
    k.play('riser', P(44, '480') - 0.9, { dur: 0.8, gain: 0.3 }); hit(P(44, '480') - 0.05, 0.9);
    k.play('pop', PS(45), { gain: 0.6 }); k.play('stamp', P(47, '200') - 0.05, { gain: 0.5 });
    pops(P(48, 'oxygen'), 10, 0.12, 0.2); k.play('success', P(48, 'blood'), { gain: 0.25 }); pops(P(49, 'carbon'), 8, 0.14, 0.2); k.play('whoosh', P(51, 'breathed') - 0.2, { dur: 0.6, gain: 0.3 });
    k.play('paper', P(52, 'flat') - 0.5, { dur: 0.9, gain: 0.35 }); hit(P(53, '70') - 0.05, 0.8); k.play('ding', P(54, 'badminton'), { f: 'G5', gain: 0.3 }); k.play('swish', P(55, 'folded') - 0.1, { dur: 0.8, gain: 0.35 });
    // chapter 4
    k.play('error', P(57, 'not'), { gain: 0.22 }); k.play('pop', P(58, 'brainstem'), { gain: 0.6 }); k.play('powerup', P(58, 'autopilot'), { gain: 0.3 });
    k.play('sparkle', P(59, 'surprise'), { gain: 0.45 }); k.play('slap', P(60, 'oxygen'), { gain: 0.5 }); k.play('error', P(60, 'oxygen') + 0.05, { gain: 0.22 }); hit(P(61, 'carbon') - 0.05, 0.8); k.play('success', P(61, 'dioxide'), { gain: 0.3 });
    pops(P(62, 'builds') - 0.4, 24, 0.06, 0.2); k.play('click', P(63, 'brainstem'), { gain: 0.6 }); for (let i = 0; i < 4; i++) inhale(P(63, 'faster') + i * 0.7, 0.35, 0.22);
    k.play('riser', P(64, 'hold'), { dur: 2.5, gain: 0.25 }); k.play('ding', P(65, 'piling'), { f: 'A5', gain: 0.3 });
    k.play('stamp', P(66, '16') - 0.05, { gain: 0.5 }); k.play('stamp', P(67, '21') - 0.05, { gain: 0.5 });
    // chapter 5
    k.play('error', P(68, 'pumps'), { gain: 0.22 }); hit(P(69, 'trading') - 0.05, 0.8); k.play('swish', P(70, 'swap'), { dur: 0.6, gain: 0.3 });
    k.play('riser', P(71, '20000') - 1, { dur: 0.9, gain: 0.3 }); ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', P(71, '20000') + 0.1 + i * 0.09, { f, gain: 0.4 }));
    k.play('ding', P(72, 'next'), { f: 'G5', gain: 0.4 }); k.play('sparkle', P(72, 'colors'), { gain: 0.4 });
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    ctx.drawImage(paperBg('thumb', '#2f6b8a', '#4d8fa8'), 0, 0);
    put(ctx, burstSpr(C.gold), 930, 380, { s: 1.75, d: 0.7 });
    put(ctx, lungsS('th'), 930, 390, { s: 1.15, d: 1.6 });
    put(ctx, wordSpr("NOT A", 160, C.ink, C.card, 26), 330, 250, { d: 1.8, rot: -0.04 });
    put(ctx, wordSpr("PUMP!", 190, C.coral, C.card, 28), 340, 470, { d: 1.8, rot: 0.03 });
    finish(ctx, 0, [700, 400]);
    ctx.restore();
  }
  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s - 0.05 ? j : a), 0) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();
