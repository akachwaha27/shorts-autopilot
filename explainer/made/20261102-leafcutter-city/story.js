// ================= Cut-Paper Diorama, 16:9: "What happens inside a leafcutter ant city?" =================
// Long explainer. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  // ---------- BEATS: voiceover phrases (phrases.json, Kokoro am_michael) ----------
  const PH = [{"s":0.25,"e":3.07,"text":"Ants built farms fifty million years before you,","words":[["ants",0.25],["built",0.53],["farms",0.88],["fifty",1.24],["million",1.59],["years",2.08],["before",2.44],["you",2.86]]},{"s":3.37,"e":4.69,"text":"and you'd never spot them.","words":[["and",3.37],["youd",3.57],["never",3.83],["spot",4.16],["them",4.43]]},{"s":5.24,"e":7.69,"text":"And right now, under a rainforest floor,","words":[["and",5.24],["right",5.47],["now",5.85],["under",6.08],["a",6.47],["rainforest",6.54],["floor",7.31]]},{"s":7.99,"e":10.66,"text":"there's an ant city with millions of citizens,","words":[["theres",7.99],["an",8.42],["ant",8.57],["city",8.79],["with",9.07],["millions",9.36],["of",9.94],["citizens",10.08]]},{"s":10.96,"e":12.2,"text":"thousands of rooms,","words":[["thousands",10.96],["of",11.66],["rooms",11.82]]},{"s":12.5,"e":13.99,"text":"farms, garbage dumps,","words":[["farms",12.5],["garbage",12.94],["dumps",13.55]]},{"s":14.29,"e":15.94,"text":"and its own air conditioning.","words":[["and",14.29],["its",14.49],["own",14.7],["air",14.91],["conditioning",15.11]]},{"s":16.49,"e":19.51,"text":"So what actually happens inside a leafcutter ant city?","words":[["so",16.49],["what",16.62],["actually",16.89],["happens",17.43],["inside",17.9],["a",18.3],["leafcutter",18.37],["ant",19.04],["city",19.24]]},{"s":20.06,"e":21.85,"text":"It starts up here, on the road.","words":[["it",20.06],["starts",20.22],["up",20.68],["here",20.84],["on",21.15],["the",21.31],["road",21.54]]},{"s":22.4,"e":26.61,"text":"Leafcutter ants march along forest trails in long green parades.","words":[["leafcutter",22.4],["ants",23.18],["march",23.49],["along",23.88],["forest",24.27],["trails",24.74],["in",25.21],["long",25.36],["green",25.67],["parades",26.06]]},{"s":27.16,"e":30.34,"text":"Each worker slices off a piece of leaf with her jaws,","words":[["each",27.16],["worker",27.46],["slices",27.91],["off",28.37],["a",28.6],["piece",28.67],["of",29.05],["leaf",29.2],["with",29.5],["her",29.81],["jaws",30.03]]},{"s":30.64,"e":31.88,"text":"then hauls it home,","words":[["then",30.64],["hauls",30.97],["it",31.38],["home",31.55]]},{"s":32.18,"e":34.33,"text":"carrying up to ten times her own weight.","words":[["carrying",32.18],["up",32.72],["to",32.85],["ten",32.99],["times",33.19],["her",33.53],["own",33.73],["weight",33.93]]},{"s":34.88,"e":37.66,"text":"That's like you jogging home with a cow on your back.","words":[["thats",34.88],["like",35.22],["you",35.49],["jogging",35.69],["home",36.17],["with",36.44],["a",36.71],["cow",36.78],["on",36.98],["your",37.12],["back",37.39]]},{"s":38.21,"e":39.22,"text":"But look closer.","words":[["but",38.21],["look",38.44],["closer",38.75]]},{"s":39.77,"e":42.61,"text":"There's a tiny ant riding on top of that leaf.","words":[["theres",39.77],["a",40.25],["tiny",40.33],["ant",40.66],["riding",40.9],["on",41.39],["top",41.55],["of",41.79],["that",41.96],["leaf",42.28]]},{"s":43.16,"e":44.43,"text":"She's the bodyguard.","words":[["shes",43.16],["the",43.48],["bodyguard",43.71]]},{"s":44.98,"e":47.89,"text":"Tiny flies try to lay eggs in the carriers' heads,","words":[["tiny",44.98],["flies",45.28],["try",45.65],["to",45.88],["lay",46.03],["eggs",46.25],["in",46.55],["the",46.7],["carriers",46.92],["heads",47.51]]},{"s":48.19,"e":50.41,"text":"so this little passenger fends them off.","words":[["so",48.19],["this",48.32],["little",48.59],["passenger",48.99],["fends",49.6],["them",49.94],["off",50.21]]},{"s":50.96,"e":53.76,"text":"Because in this city, everybody has a job,","words":[["because",50.96],["in",51.55],["this",51.72],["city",52.06],["everybody",52.4],["has",53.16],["a",53.42],["job",53.5]]},{"s":54.06,"e":56.35,"text":"and your size is your job description.","words":[["and",54.06],["your",54.28],["size",54.57],["is",54.87],["your",55.02],["job",55.31],["description",55.54]]},{"s":56.9,"e":58.85,"text":"The tiniest ants, called minims,","words":[["the",56.9],["tiniest",57.12],["ants",57.65],["called",57.95],["minims",58.4]]},{"s":59.15,"e":61.25,"text":"have heads less than a millimeter wide.","words":[["have",59.15],["heads",59.42],["less",59.74],["than",60.01],["a",60.27],["millimeter",60.34],["wide",60.99]]},{"s":61.8,"e":64.17,"text":"They look after the babies and the gardens.","words":[["they",61.8],["look",62.07],["after",62.34],["the",62.68],["babies",62.89],["and",63.29],["the",63.49],["gardens",63.7]]},{"s":64.72,"e":67.51,"text":"Medium ants are the foragers you just met.","words":[["medium",64.72],["ants",65.21],["are",65.54],["the",65.79],["foragers",66.03],["you",66.69],["just",66.94],["met",67.27]]},{"s":68.06,"e":69.85,"text":"And the giants are the soldiers,","words":[["and",68.06],["the",68.27],["giants",68.48],["are",68.89],["the",69.09],["soldiers",69.3]]},{"s":70.15,"e":72.55,"text":"with heads up to seven millimeters wide.","words":[["with",70.15],["heads",70.44],["up",70.8],["to",70.95],["seven",71.09],["millimeters",71.46],["wide",72.26]]},{"s":73.1,"e":75.2,"text":"Now, follow the leaves underground.","words":[["now",73.1],["follow",73.31],["the",73.75],["leaves",73.97],["underground",74.4]]},{"s":75.75,"e":76.81,"text":"Here's the twist.","words":[["heres",75.75],["the",76.16],["twist",76.4]]},{"s":77.36,"e":78.69,"text":"They don't really eat them.","words":[["they",77.36],["dont",77.62],["really",77.87],["eat",78.25],["them",78.44]]},{"s":79.24,"e":80.54,"text":"They'll sip a little sap,","words":[["theyll",79.24],["sip",79.65],["a",79.86],["little",79.92],["sap",80.33]]},{"s":80.84,"e":82.71,"text":"but the leaf is just fertilizer.","words":[["but",80.84],["the",81.05],["leaf",81.27],["is",81.56],["just",81.7],["fertilizer",81.99]]},{"s":83.26,"e":86.07,"text":"Smaller ants snip each piece into tiny bits.","words":[["smaller",83.26],["ants",83.81],["snip",84.12],["each",84.43],["piece",84.74],["into",85.13],["tiny",85.45],["bits",85.76]]},{"s":86.62,"e":88.89,"text":"Gardeners crush those bits into pellets,","words":[["gardeners",86.62],["crush",87.22],["those",87.56],["bits",87.89],["into",88.16],["pellets",88.42]]},{"s":89.19,"e":90.83,"text":"add a drop of their own poop,","words":[["add",89.19],["a",89.41],["drop",89.49],["of",89.79],["their",89.94],["own",90.31],["poop",90.53]]},{"s":91.13,"e":93.83,"text":"and press it all into a giant spongy garden.","words":[["and",91.13],["press",91.36],["it",91.75],["all",91.9],["into",92.13],["a",92.44],["giant",92.52],["spongy",92.91],["garden",93.37]]},{"s":94.38,"e":96.08,"text":"What grows there is a fungus.","words":[["what",94.38],["grows",94.68],["there",95.05],["is",95.42],["a",95.57],["fungus",95.64]]},{"s":96.63,"e":97.86,"text":"That's the real food.","words":[["thats",96.63],["the",97.02],["real",97.25],["food",97.55]]},{"s":98.41,"e":100.2,"text":"It feeds babies and adults,","words":[["it",98.41],["feeds",98.57],["babies",98.98],["and",99.47],["adults",99.71]]},{"s":100.5,"e":103.68,"text":"and they've been passing this crop down for millions of years.","words":[["and",100.5],["theyve",100.69],["been",101.07],["passing",101.33],["this",101.77],["crop",102.03],["down",102.28],["for",102.54],["millions",102.73],["of",103.24],["years",103.37]]},{"s":104.23,"e":106.44,"text":"But every farmer has a weed problem.","words":[["but",104.23],["every",104.46],["farmer",104.84],["has",105.3],["a",105.52],["weed",105.6],["problem",105.9]]},{"s":106.99,"e":109.46,"text":"A rival fungus can wreck the whole crop.","words":[["a",106.99],["rival",107.06],["fungus",107.45],["can",107.91],["wreck",108.15],["the",108.53],["whole",108.76],["crop",109.15]]},{"s":110.01,"e":112.66,"text":"So the ants wear a white powder on their bodies.","words":[["so",110.01],["the",110.15],["ants",110.36],["wear",110.64],["a",110.92],["white",110.98],["powder",111.33],["on",111.75],["their",111.89],["bodies",112.24]]},{"s":113.21,"e":114.72,"text":"That powder is bacteria,","words":[["that",113.21],["powder",113.51],["is",113.96],["bacteria",114.11]]},{"s":115.02,"e":117.74,"text":"and it makes antibiotics that hold the weed back.","words":[["and",115.02],["it",115.22],["makes",115.36],["antibiotics",115.7],["that",116.44],["hold",116.72],["the",116.99],["weed",117.19],["back",117.46]]},{"s":118.29,"e":121.09,"text":"Infected patches get chopped out and dragged away,","words":[["infected",118.29],["patches",118.82],["get",119.29],["chopped",119.49],["out",119.95],["and",120.15],["dragged",120.35],["away",120.82]]},{"s":121.39,"e":122.95,"text":"which brings us to the trash.","words":[["which",121.39],["brings",121.73],["us",122.13],["to",122.27],["the",122.41],["trash",122.61]]},{"s":123.5,"e":125.87,"text":"Waste goes to separate garbage rooms,","words":[["waste",123.5],["goes",123.88],["to",124.19],["separate",124.34],["garbage",124.95],["rooms",125.48]]},{"s":126.17,"e":128.41,"text":"some big enough for you to stand inside.","words":[["some",126.17],["big",126.45],["enough",126.66],["for",127.08],["you",127.29],["to",127.5],["stand",127.64],["inside",127.99]]},{"s":128.96,"e":131.39,"text":"The workers there are mostly older ants,","words":[["the",128.96],["workers",129.18],["there",129.69],["are",130.06],["mostly",130.28],["older",130.72],["ants",131.09]]},{"s":131.69,"e":133.4,"text":"kept apart from everyone else.","words":[["kept",131.69],["apart",131.96],["from",132.3],["everyone",132.58],["else",133.12]]},{"s":133.95,"e":136.34,"text":"A city this big has one more problem.","words":[["a",133.95],["city",134.03],["this",134.36],["big",134.69],["has",134.94],["one",135.18],["more",135.43],["problem",135.76]]},{"s":136.89,"e":137.57,"text":"Breathing.","words":[["breathing",136.89]]},{"s":138.12,"e":141.96,"text":"All that fungus and all those ants make carbon dioxide.","words":[["all",138.12],["that",138.38],["fungus",138.72],["and",139.23],["all",139.49],["those",139.74],["ants",140.17],["make",140.51],["carbon",140.85],["dioxide",141.36]]},{"s":142.51,"e":143.79,"text":"The ants can handle it.","words":[["the",142.51],["ants",142.72],["can",143.01],["handle",143.22],["it",143.65]]},{"s":144.34,"e":145.53,"text":"Their fungus can't.","words":[["their",144.34],["fungus",144.74],["cant",145.21]]},{"s":146.08,"e":148.01,"text":"So one species builds chimneys.","words":[["so",146.08],["one",146.23],["species",146.45],["builds",146.97],["chimneys",147.42]]},{"s":148.56,"e":150.51,"text":"When wind blows across the mound,","words":[["when",148.56],["wind",148.85],["blows",149.14],["across",149.5],["the",149.93],["mound",150.15]]},{"s":150.81,"e":153.05,"text":"it pulls stale air out of the top holes,","words":[["it",150.81],["pulls",150.95],["stale",151.31],["air",151.68],["out",151.89],["of",152.11],["the",152.25],["top",152.47],["holes",152.69]]},{"s":153.35,"e":155.0,"text":"and fresh air gets drawn in.","words":[["and",153.35],["fresh",153.58],["air",153.95],["gets",154.18],["drawn",154.48],["in",154.85]]},{"s":155.55,"e":158.58,"text":"Those turrets can boost the airflow up to ten times.","words":[["those",155.55],["turrets",155.91],["can",156.42],["boost",156.63],["the",156.99],["airflow",157.21],["up",157.71],["to",157.86],["ten",158.0],["times",158.22]]},{"s":159.13,"e":161.0,"text":"No fans. No electricity.","words":[["no",159.13],["fans",159.32],["no",159.72],["electricity",159.91]]},{"s":161.55,"e":162.99,"text":"So who started all this?","words":[["so",161.55],["who",161.7],["started",161.93],["all",162.46],["this",162.69]]},{"s":163.54,"e":164.33,"text":"The queen.","words":[["the",163.54],["queen",163.84]]},{"s":164.88,"e":166.74,"text":"She can live up to fifteen years,","words":[["she",164.88],["can",165.1],["live",165.31],["up",165.6],["to",165.74],["fifteen",165.88],["years",166.38]]},{"s":167.04,"e":170.52,"text":"and by one estimate, lay a hundred fifty million eggs.","words":[["and",167.04],["by",167.28],["one",167.44],["estimate",167.69],["lay",168.33],["a",168.58],["hundred",168.66],["fifty",169.23],["million",169.63],["eggs",170.2]]},{"s":171.07,"e":173.13,"text":"But her story begins with one flight.","words":[["but",171.07],["her",171.28],["story",171.48],["begins",171.83],["with",172.24],["one",172.51],["flight",172.72]]},{"s":173.68,"e":177.66,"text":"A young queen leaves home with a tiny pellet of fungus in her mouth.","words":[["a",173.68],["young",173.75],["queen",174.12],["leaves",174.49],["home",174.93],["with",175.23],["a",175.52],["tiny",175.59],["pellet",175.89],["of",176.33],["fungus",176.48],["in",176.92],["her",177.07],["mouth",177.29]]},{"s":178.21,"e":179.77,"text":"That's her whole inheritance.","words":[["thats",178.21],["her",178.53],["whole",178.73],["inheritance",179.06]]},{"s":180.32,"e":183.66,"text":"She digs in, seals herself underground, and plants it.","words":[["she",180.32],["digs",180.56],["in",180.87],["seals",181.02],["herself",181.41],["underground",181.95],["and",182.8],["plants",183.04],["it",183.5]]},{"s":184.21,"e":187.97,"text":"Only about two and a half percent build a colony that lasts.","words":[["only",184.21],["about",184.52],["two",184.91],["and",185.15],["a",185.38],["half",185.46],["percent",185.77],["build",186.32],["a",186.71],["colony",186.79],["that",187.26],["lasts",187.58]]},{"s":188.52,"e":191.34,"text":"But the winners can end up with seven thousand rooms,","words":[["but",188.52],["the",188.72],["winners",188.91],["can",189.37],["end",189.57],["up",189.77],["with",189.9],["seven",190.16],["thousand",190.49],["rooms",191.01]]},{"s":191.64,"e":193.23,"text":"more than twenty feet deep.","words":[["more",191.64],["than",191.93],["twenty",192.22],["feet",192.65],["deep",192.94]]},{"s":193.78,"e":196.99,"text":"So next time you see a leaf walking across the ground,","words":[["so",193.78],["next",193.93],["time",194.23],["you",194.52],["see",194.75],["a",194.97],["leaf",195.05],["walking",195.35],["across",195.87],["the",196.32],["ground",196.54]]},{"s":197.29,"e":198.62,"text":"remember where it's going.","words":[["remember",197.29],["where",197.8],["its",198.11],["going",198.3]]},{"s":199.17,"e":201.64,"text":"It's headed to a farm far older than us.","words":[["its",199.17],["headed",199.42],["to",199.91],["a",200.07],["farm",200.16],["far",200.49],["older",200.73],["than",201.14],["us",201.47]]},{"s":202.19,"e":206.14,"text":"Next up, another insect city, where workers talk by dancing.","words":[["next",202.19],["up",202.52],["another",202.68],["insect",203.26],["city",203.75],["where",204.08],["workers",204.49],["talk",205.07],["by",205.4],["dancing",205.56]]},{"s":206.69,"e":208.5,"text":"How does a honeybee hive work?","words":[["how",206.69],["does",206.92],["a",207.22],["honeybee",207.29],["hive",207.9],["work",208.2]]}];
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

  // ================= sprites (all cut paper, cached) =================
  // parametric teddy bear, front view. snout 1 = long real-bear muzzle (1900s), 0 = short baby face.
  // fore 1 = big domed forehead, eye 1 = big round eyes, arms 1 = long skinny arms.
  const outdoor = (ctx, key, p, lt, o = {}) => {
    const dr = Math.min(lt, 30) * (o.drift ?? 5);
    ctx.drawImage(cache('sky' + key, () => {
      const C = H.layer(W, HH), c = C.getContext('2d');
      c.drawImage(paperize(W, HH, (x) => { const g = x.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, p.sky[0]); g.addColorStop(1, p.sky[1]); x.fillStyle = g; x.fillRect(0, 0, W, HH); }, { rim: false, seed: 2 }), 0, 0);
      if (p.stars) { const r = H.rng(31); shadowDraw(c, paperize(W, HH, (x) => { x.fillStyle = '#f6e7bf'; for (let i = 0; i < 50; i++) { const sx = r.range(10, W - 10), sy = r.range(10, 380), s = r.range(3, 7), pts = []; for (let j = 0; j < 10; j++) { const rr = j % 2 ? s * 0.42 : s, a = (j / 10) * TAU; pts.push([sx + Math.cos(a) * rr, sy + Math.sin(a) * rr]); } x.beginPath(); poly(x, pts); x.fill(); } }, { hi: 0.3 }), 0, 0, 0.25); }
      if (p.sun) { [[150, p.sun[0]], [110, p.sun[1]], [72, p.sun[2]]].forEach(([rad, col], i) => shadowDraw(c, paperize(W, HH, (x) => { x.fillStyle = col; x.beginPath(); poly(x, circPts(H.rng(50 + i), p.sunX ?? 980, p.sunY ?? 190, rad, 14, 0.7)); x.fill(); }, { seed: 51 + i }), 0, 0, 0.55)); }
      return C;
    }), 0, 0);
    const far = cache('far' + key, () => { const r = H.rng(71 + key.length), ph0 = key.length; const f = (x) => 70 + 55 * Math.sin(x * 0.006 + ph0) + 30 * Math.sin(x * 0.017 + 1); return paperize(W + 400, 360, (c) => { c.fillStyle = p.far; c.beginPath(); poly(c, [...ridge(r, 0, W + 400, f, 14, 30, 0.6), [W + 400, 360], [0, 360]]); c.fill(); }, { seed: 72 }); });
    shadowDraw(ctx, far, -100 - dr * 0.3, (p.farY ?? 330), 1.0);
    const mid = cache('mid' + key, () => {
      const r = H.rng(91 + key.length), f = (x) => 60 + 24 * Math.sin(x * 0.0047 + 0.6) + 14 * Math.sin(x * 0.0135 + 2.1);
      const C = H.layer(W + 400, 300), c = C.getContext('2d');
      shadowDraw(c, paperize(W + 400, 300, (x) => { x.fillStyle = p.mid; x.beginPath(); poly(x, [...ridge(r, 0, W + 400, f, 12, 28, 0.6), [W + 400, 300], [0, 300]]); x.fill(); }, { seed: 92 }), 0, 0, 0);
      if (p.trees) { const pr = H.rng(93); for (let px = 40; px < W + 400; px += pr.range(110, 260)) { const h = pr.range(40, 76), base = f(px) + h * 0.2, w = h * 0.5, col = p.trees; const sp = paperize(w + 24, h * 1.3, (x) => { x.translate(-(px - w / 2 - 12), -(base - h * 1.15)); x.fillStyle = '#3a2c2a'; x.fillRect(px - 3, base - h * 0.22, 6, h * 0.3); x.fillStyle = col; x.beginPath(); for (let k = 0; k < 3; k++) { const ty = base - h * 0.16 - k * h * 0.25, tw = w * (1 - k * 0.24), th = h * 0.4; poly(x, [[px, ty - th], [px + tw / 2, ty], [px - tw / 2, ty]]); } x.fill(); }, { seed: 94 + Math.round(px) }); shadowDraw(c, sp, px - w / 2 - 12, base - h * 1.15, 0.5, 0.4); } }
      return C;
    });
    shadowDraw(ctx, mid, -100 - dr * 0.6, (p.midY ?? 440), 1.15);
    if (o.mid2) o.mid2(dr);
    const ground = cache('gr' + key, () => {
      const nz = H.makeNoise(83), r = H.rng(81), f = (x) => 22 + 12 * Math.sin(x * 0.005 + 1.3) + 7 * Math.sin(x * 0.019), torn = [], core = [];
      for (let x = 0; x <= W + 400; x += 2.5) { const y = f(x) + nz.fbm2(x * 0.03, 0.5, 4) * 5 + r.gauss() * 0.6; torn.push([x, y + 3 + Math.abs(nz.n2(x * 0.045, 3.1)) * 7 + Math.abs(nz.n2(x * 0.3, 7.7)) * 2]); core.push([x, y]); }
      return paperize(W + 400, 240, (c) => {
        c.fillStyle = '#f3ecdc'; c.beginPath(); poly(c, [...core, [W + 400, 240], [0, 240]]); c.fill();
        c.strokeStyle = 'rgba(248,244,236,0.95)'; c.lineCap = 'round';
        for (let i = 0; i < core.length; i++) { if (!r.chance(0.55)) continue; const [x, y] = core[i], a = -Math.PI / 2 + r.range(-0.9, 0.9), l = r.range(1.5, 5.5); c.lineWidth = r.range(0.4, 0.9); c.beginPath(); c.moveTo(x, y + 1); c.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); c.stroke(); }
        c.fillStyle = p.ground; c.beginPath(); poly(c, [...torn, [W + 400, 240], [0, 240]]); c.fill();
        if (p.water) { c.fillStyle = p.water; c.beginPath(); poly(c, cutLines(H.rng(85), [[0, 70], [W + 400, 66], [W + 400, 120], [0, 126], [0, 70]], 40, 0.8)); c.fill(); c.strokeStyle = 'rgba(255,255,255,0.35)'; c.lineWidth = 3; for (let i = 0; i < 26; i++) { const x = r.range(20, W + 380), y = r.range(80, 116); c.beginPath(); c.moveTo(x, y); c.lineTo(x + r.range(20, 50), y); c.stroke(); } }
      }, { seed: 85 });
    });
    shadowDraw(ctx, ground, -100 - dr, (p.groundY ?? 540), 1.3);
    if (o.scene) o.scene(dr);
    const fore = cache('fo' + key, () => {
      const r = H.rng(141), f = (x) => 30 + 10 * Math.sin(x * 0.0045 + 0.4) + 5 * Math.sin(x * 0.013), pts = []; let x = 0;
      while (x < W + 500) { if (r.chance(0.2)) { const n = r.int(2, 4); for (let k = 0; k < n; k++) { const bx = x + k * 7, by = f(bx); pts.push([bx, by], [bx + 2 + r.range(-3, 4), by - r.range(12, 26)], [bx + 5, by]); } x += n * 7 + 4; } else { pts.push([x, f(x) + r.gauss() * 0.6]); x += r.range(14, 30); } }
      return paperize(W + 500, 90, (c) => { c.fillStyle = p.fore; c.beginPath(); poly(c, [...pts, [W + 500, 90], [0, 90]]); c.fill(); }, { seed: 142 });
    });
    if (!o.noFore) shadowDraw(ctx, fore, -120 - dr * 1.25, 672, 1.6);
  };
  // interior shadow-box: striped wallpaper sheet, wainscot strip, floor sheet
  const interior = (ctx, key, p) => {
    ctx.drawImage(cache('in' + key, () => {
      const C = H.layer(W, HH), c = C.getContext('2d'), r = H.rng(key.length * 13);
      c.drawImage(paperize(W, HH, (x) => { x.fillStyle = p.wall; x.fillRect(0, 0, W, HH); if (p.stripe) { x.fillStyle = p.stripe; for (let i = 0; i < W; i += 64) x.fillRect(i, 0, 26, HH); } }, { rim: false, seed: 4 }), 0, 0);
      if (p.wains) shadowDraw(c, paperize(W, HH, (x) => { x.fillStyle = p.wains; x.beginPath(); poly(x, rect(r, -10, p.wainY ?? 430, W + 10, HH + 10, 40, 0.6)); x.fill(); x.fillStyle = 'rgba(0,0,0,0.12)'; for (let i = 30; i < W; i += 160) x.fillRect(i, (p.wainY ?? 430) + 26, 120, 120); }, { seed: 5 }), 0, 0, 0.8);
      shadowDraw(c, paperize(W, HH, (x) => { x.fillStyle = p.floor; x.beginPath(); poly(x, rect(r, -10, p.floorY ?? 600, W + 10, HH + 10, 40, 0.6)); x.fill(); x.strokeStyle = 'rgba(0,0,0,0.12)'; x.lineWidth = 3; for (let i = 0; i < W; i += 90) { x.beginPath(); x.moveTo(i, p.floorY ?? 600); x.lineTo(i - 40, HH); x.stroke(); } }, { seed: 6 }), 0, 0, 1.2);
      return C;
    }), 0, 0);
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
  const PAL = {
    swamp: { sky: ['#e6a964', '#f3cf8e'], sun: ['#e9845b', '#f3ad62', '#f8d891'], sunX: 1010, sunY: 200, far: '#7a7a5a', mid: '#4f6a4e', trees: '#35583f', ground: '#3d5a3a', water: '#4f7f86', fore: '#1d3a2c' },
    dusk: { sky: ['#2b2d5a', '#5a4a7a'], stars: true, far: '#4c5590', mid: '#3d5f7a', trees: '#2a5560', ground: '#2f6b66', fore: '#163a3a' },
    night: { sky: ['#1d1f45', '#33356a'], stars: true, far: '#3a4278', mid: '#2e3f62', ground: '#2a4c55', fore: '#101c2c' },
    ice: { sky: ['#bfe0ec', '#eaf6f8'], far: '#9cc4d4', mid: '#7aa9bf', trees: '#4f7f8c', ground: '#e8f2f4', fore: '#5d8fa0' },
  };

  // ================= props =================
  const sparkle = (ctx, x, y, s, t, seed) => { const r = H.rng(seed); for (let i = 0; i < 5; i++) { const a = r() * TAU, d = r.range(30, 90) * s, tw = 0.5 + 0.5 * Math.sin(t * 6 + i * 2); put(ctx, cache('spk', () => paperize(40, 40, (c) => { c.fillStyle = '#f8f0c8'; c.beginPath(); poly(c, [[20, 0], [25, 15], [40, 20], [25, 25], [20, 40], [15, 25], [0, 20], [15, 15]]); c.fill(); }, { seed: 850 })), x + Math.cos(a) * d, y + Math.sin(a) * d, { s: (0.5 + tw * 0.6) * s, d: 0.4, rot: t * 0.5 }); } };
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

  // ================= scene helpers =================
  const sprAt = (ctx, spr, x, y, t, st, op = {}) => { const A = op.pop ? popIn(t, st, op.du ?? 0.35) : dropIn(t, st, op.du ?? 0.4, op.dist ?? 60); if (!A) return null; put(ctx, spr, x, y + (A.dy || 0), { s: A.s * (op.s ?? 1), sx: op.flip ? -A.s * (op.s ?? 1) : undefined, sy: op.flip ? A.s * (op.s ?? 1) : undefined, d: (op.d ?? 1) + A.d, rot: op.rot ?? 0 }); return A; };
  const burstAt = (ctx, x, y, t, st, s = 1, col) => { const u = cl((t - st) / 0.4); if (u <= 0) return; put(ctx, burstSpr(col), x, y, { s: s * (0.2 + 0.8 * E.back(u)), rot: t * 0.25, d: 0.7 }); };
  // ================= leafcutter sprites (all cut paper, cached) =================
  const C = { rust: '#b04a2c', rustD: '#7e2f20', tan: '#cf7a42', dark: '#6a2a20', old: '#94877e', leaf: '#5fae6a', leafD: '#3d8a5a', leafL: '#8ccb74', soil: '#6b4630', soilD: '#3a241b', cream: '#f3ecdc', fungus: '#efe3c4', ink: '#2b2d5a', red: '#d9473b', gold: '#f2b545', teal: '#58b0a6', coral: '#e8604a', mold: '#7c5aa6' };
  const PAL_J = { sky: ['#8fcfb4', '#d8ecc0'], sun: ['#e9d27b', '#f3e08e', '#fbf0b4'], sunX: 1040, sunY: 150, far: '#6fb08a', mid: '#3f8a68', trees: '#2a6a50', ground: '#7a5636', fore: '#1f4a38' };
  const PAL_SKY = { sky: ['#f4b768', '#fbe0a0'], sun: ['#e9845b', '#f3ad62', '#f8d891'], sunX: 1050, sunY: 210, far: '#a7a06a', mid: '#5f8a5c', trees: '#3a6a4a', ground: '#7a5636', fore: '#27503a' };
  const antSpr = (col, head, frame, carry) => cache('ant' + col + head + frame + (carry ? 'c' : ''), () => {
    const r = H.rng(300 + frame), hr = 34 * head, hx = 214, hy = 84;
    const legs = (x) => { x.strokeStyle = C.dark; x.lineWidth = 7; x.lineCap = 'round'; x.lineJoin = 'round';
      [[120, -1], [145, 1], [168, -1]].forEach(([lx, s], i) => { const sw = (frame ? 1 : -1) * s * 18, spread = (i - 1) * 40;
        x.beginPath(); x.moveTo(lx, 100); x.lineTo(lx + spread * 0.6 + sw * 0.4, 124); x.lineTo(lx + spread + sw, 166); x.stroke(); }); };
    return compose(320, 200, [
      [legs, 0.1],
      [(x) => { x.strokeStyle = C.dark; x.lineWidth = 5; x.lineCap = 'round'; x.beginPath(); x.moveTo(hx + hr * 0.5, hy - hr * 0.7); x.quadraticCurveTo(hx + hr + 14, hy - hr - 30, hx + hr + 34, hy - hr - 12); x.moveTo(hx + hr * 0.2, hy - hr * 0.8); x.quadraticCurveTo(hx + 8, hy - hr - 36, hx + hr + 8, hy - hr - 30); x.stroke(); }, 0.1],
      [(x) => { x.fillStyle = col; x.beginPath(); poly(x, ellPts(r, 70, 92, 58, 40, -0.1)); x.fill(); }, 0.25],
      [(x) => { x.fillStyle = 'rgba(0,0,0,0.14)'; x.beginPath(); x.ellipse(60, 80, 34, 6, -0.1, 0, TAU); x.ellipse(60, 100, 40, 6, -0.1, 0, TAU); x.fill(); }, 0],
      [(x) => { x.fillStyle = col; x.beginPath(); poly(x, ellPts(r, 146, 86, 38, 25, -0.05)); poly(x, [[120, 70], [114, 44], [136, 66]]); poly(x, [[150, 64], [156, 40], [170, 66]]); x.fill(); }, 0.25],
      [(x) => { x.fillStyle = col; x.beginPath(); poly(x, ellPts(r, hx, hy, hr * 1.05, hr * 0.95, 0)); x.fill(); }, 0.3],
      [(x) => { x.fillStyle = C.dark; x.beginPath(); poly(x, [[hx + hr * 0.7, hy + hr * 0.25], [hx + hr + 26, hy + hr * 0.1 - (carry ? 4 : 0)], [hx + hr * 0.95, hy + hr * 0.55], [hx + hr + 20, hy + hr * 0.62], [hx + hr * 0.6, hy + hr * 0.8]]); x.fill(); x.fillStyle = '#fbf6ea'; x.beginPath(); x.arc(hx + hr * 0.42, hy - hr * 0.25, 11, 0, TAU); x.fill(); x.fillStyle = '#20182a'; x.beginPath(); x.arc(hx + hr * 0.5, hy - hr * 0.22, 6, 0, TAU); x.fill(); }, 0.15],
    ]);
  });
  const leafSpr = (seed = 1, col = C.leaf) => cache('leaf' + seed + col, () => { const r = H.rng(400 + seed); return compose(240, 210, [
    [(x) => { x.fillStyle = col; x.beginPath(); poly(x, cutLines(r, [[120, 6], [190, 40], [226, 110], [176, 150], [160, 200], [90, 196], [60, 150], [14, 110], [50, 40], [120, 6]], 24, 1.2)); x.fill(); }, 0],
    [(x) => { x.strokeStyle = C.leafD; x.lineWidth = 6; x.lineCap = 'round'; x.beginPath(); x.moveTo(122, 20); x.lineTo(124, 190); [[50, 1], [90, -1], [120, 1], [70, -1]].forEach(([y, s]) => { x.moveTo(123, y); x.lineTo(123 + s * 62, y + 34); }); x.stroke(); }, 0.1],
  ]); });
  // the ant, standing with its feet at (x, y). o: flip, head, col, leaf (leaf seed), rider, walk (false = still), legT
  const antAt = (ctx, x, y, s, t, o = {}) => {
    const dir = o.flip ? -1 : 1, fr = o.walk === false ? 0 : Math.floor(t * 10 + x * 0.013 + (o.ph || 0)) % 2;
    const bob = o.walk === false ? 0 : (fr ? -1.5 : 1.5) * s;
    const put2 = (spr, cx, cy, op = {}) => put(ctx, spr, x + dir * cx * s, y + bob + cy * s, { sx: dir * s * (op.s || 1), sy: s * (op.s || 1), d: o.d ?? 0.8, rot: dir * (op.rot || 0) });
    put2(antSpr(o.col || C.rust, o.head || 1, fr, !!o.leaf), 0, -65);
    if (o.leaf) {
      put2(leafSpr(o.leaf), 96, -200, { s: 0.95, rot: 0.32 + 0.03 * Math.sin(t * 5 + x) });
      if (o.rider) { const rs = 0.28; antAt(ctx, x + dir * 104 * s, y + bob - 240 * s, s * rs, t, { flip: o.flip, col: C.tan, walk: false, d: 0.5 }); }
    }
  };
  const fly = (frame) => cache('fly' + frame, () => { const r = H.rng(410); return compose(170, 130, [
    [(x) => { x.fillStyle = '#d8e8ee'; x.beginPath(); x.ellipse(70, frame ? 30 : 44, 50, 18, frame ? -0.5 : 0.1, 0, TAU); x.fill(); }, 0],
    [(x) => { x.strokeStyle = '#20182a'; x.lineWidth = 4; x.beginPath(); [[60, 90], [80, 96], [100, 92]].forEach(([lx, ly]) => { x.moveTo(lx, 80); x.lineTo(lx - 8, ly + 18); }); x.stroke(); }, 0],
    [(x) => { x.fillStyle = '#3a3238'; x.beginPath(); poly(x, ellPts(r, 72, 70, 40, 22)); x.fill(); x.beginPath(); x.fillStyle = '#4a3f44'; poly(x, ellPts(r, 118, 62, 20, 18)); x.fill(); x.fillStyle = '#d9473b'; x.beginPath(); x.arc(126, 58, 8, 0, TAU); x.fill(); }, 0.2],
  ]); });
  const cow = () => cache('cow', () => { const r = H.rng(420); return compose(360, 230, [
    [(x) => { x.fillStyle = '#3a3238'; [60, 96, 230, 266].forEach((lx) => x.fillRect(lx, 130, 22, 86)); }, 0.1],
    [(x) => { x.fillStyle = '#f7f2e4'; x.beginPath(); poly(x, cutLines(r, [[40, 56], [270, 50], [290, 150], [40, 156], [40, 56]], 26, 1)); x.fill(); }, 0.3],
    [(x) => { x.fillStyle = '#3a3238'; x.beginPath(); poly(x, circPts(r, 100, 90, 32, 10, 1)); poly(x, circPts(r, 210, 120, 26, 10, 1)); poly(x, circPts(r, 190, 70, 18, 8, 1)); x.fill(); }, 0],
    [(x) => { x.fillStyle = '#f7f2e4'; x.beginPath(); poly(x, ellPts(r, 300, 66, 46, 40)); x.fill(); x.fillStyle = '#f0a8a8'; x.beginPath(); x.ellipse(322, 88, 26, 16, 0, 0, TAU); x.fill(); x.fillStyle = '#20182a'; x.beginPath(); x.arc(300, 54, 6, 0, TAU); x.fill(); x.fillStyle = '#c9a46a'; x.beginPath(); poly(x, [[272, 34], [262, 6], [290, 26]]); poly(x, [[318, 28], [330, 2], [340, 34]]); x.fill(); }, 0.35],
  ]); });
  const person = (run, frame = 0) => cache('per' + run + frame, () => { const r = H.rng(430), sw = run ? (frame ? 28 : -28) : 6; return compose(200, 340, [
    [(x) => { x.strokeStyle = '#2f5a78'; x.lineWidth = 26; x.lineCap = 'round'; x.lineJoin = 'round'; x.beginPath(); x.moveTo(100, 200); x.lineTo(100 + sw, 262); x.lineTo(100 + sw * 1.4, 326); x.moveTo(100, 200); x.lineTo(100 - sw, 264); x.lineTo(100 - sw * 1.8, 322); x.stroke(); }, 0.1],
    [(x) => { x.fillStyle = C.coral; x.beginPath(); poly(x, cutLines(r, [[64, 86], [136, 86], [130, 214], [70, 214], [64, 86]], 26, 0.7)); x.fill(); }, 0.25],
    [(x) => { x.strokeStyle = '#e8b48c'; x.lineWidth = 19; x.lineCap = 'round'; x.beginPath(); const u = run ? -1 : 0; x.moveTo(68, 100); x.lineTo(40, run ? 60 : 170); x.moveTo(132, 100); x.lineTo(160, run ? 60 : 170); x.stroke(); }, 0.2],
    [(x) => { x.fillStyle = '#e8b48c'; x.beginPath(); poly(x, circPts(r, 100, 50, 36, 10, 0.5)); x.fill(); x.fillStyle = '#3a2820'; x.beginPath(); poly(x, [[64, 44], [72, 14], [128, 14], [136, 44], [112, 30], [84, 32]]); x.fill(); x.fillStyle = '#20182a'; x.beginPath(); x.arc(114, 50, 4.5, 0, TAU); x.arc(88, 50, 4.5, 0, TAU); x.fill(); }, 0.25],
  ]); });
  const sponge = (seed, w, h, col = C.fungus) => cache('sp' + seed + w + h + col, () => { const r = H.rng(440 + seed), parts = [], holes = [];
    for (let i = 0; i < 26 * (w * h) / 90000 + 12; i++) { const a = r.range(0, TAU), rr = Math.sqrt(r()), px = w / 2 + Math.cos(a) * rr * (w / 2 - 34), py = h / 2 + Math.sin(a) * rr * (h / 2 - 28); parts.push(circPts(r, px, py, r.range(24, 42), 10, 0.8)); }
    for (let i = 0; i < 18 * (w * h) / 90000 + 8; i++) { const a = r.range(0, TAU), rr = Math.sqrt(r()) * 0.86; holes.push([w / 2 + Math.cos(a) * rr * (w / 2 - 30), h / 2 + Math.sin(a) * rr * (h / 2 - 26), r.range(5, 12)]); }
    return compose(w, h, [
      [(x) => { x.fillStyle = col; x.beginPath(); parts.forEach((p) => poly(x, p)); x.fill(); }, 0],
      [(x) => { x.fillStyle = '#c9a97a'; holes.forEach(([a, b, c]) => { x.beginPath(); x.arc(a, b, c, 0, TAU); x.fill(); }); }, 0.15],
      [(x) => { x.fillStyle = '#fff9ea'; for (let i = 0; i < 18; i++) { x.beginPath(); x.arc(r.range(40, w - 40), r.range(30, h - 30), r.range(4, 8), 0, TAU); x.fill(); } }, 0.1],
    ]); });
  const blob = (col, s = 60, seed = 1) => cache('bl' + col + s + seed, () => { const r = H.rng(460 + seed); return paperize(s * 2 + 8, s * 2 + 8, (x) => { x.fillStyle = col; x.beginPath(); poly(x, circPts(r, s + 4, s + 4, s, 12, 1)); x.fill(); }, { seed: 460 + seed }); });
  const bit = (seed, col = C.leaf) => cache('bit' + seed + col, () => { const r = H.rng(470 + seed); return paperize(50, 50, (x) => { x.fillStyle = col; x.beginPath(); poly(x, [[r.range(4, 16), r.range(4, 14)], [r.range(32, 46), r.range(4, 16)], [r.range(34, 46), r.range(30, 46)], [r.range(6, 18), r.range(34, 46)]]); x.fill(); }, { seed: 470 + seed }); });
  const larva = () => cache('larva', () => { const r = H.rng(480); return compose(180, 110, [[(x) => { x.fillStyle = '#fbf3df'; x.beginPath(); poly(x, ellPts(r, 90, 58, 74, 40, 0.05)); x.fill(); x.strokeStyle = 'rgba(160,130,90,0.55)'; x.lineWidth = 3; [50, 74, 98, 122].forEach((lx) => { x.beginPath(); x.moveTo(lx, 24); x.lineTo(lx + 4, 94); x.stroke(); }); }, 0], [(x) => { x.fillStyle = '#d6a15a'; x.beginPath(); x.arc(150, 46, 15, 0, TAU); x.fill(); x.fillStyle = '#20182a'; x.beginPath(); x.arc(155, 42, 3.5, 0, TAU); x.fill(); }, 0.1]]); });
  const egg = () => cache('egg', () => paperize(44, 58, (x) => { x.fillStyle = '#fbf6ea'; x.beginPath(); x.ellipse(22, 29, 16, 24, 0, 0, TAU); x.fill(); }, { seed: 490 }));
  const queenSpr = (wings) => cache('qn' + wings, () => { const r = H.rng(495); return compose(640, 320, [
    ...(wings ? [[(x) => { x.fillStyle = 'rgba(232,240,240,0.92)'; x.beginPath(); x.ellipse(250, 70, 190, 42, -0.25, 0, TAU); x.ellipse(220, 104, 150, 30, 0.08, 0, TAU); x.fill(); x.strokeStyle = 'rgba(70,70,90,0.5)'; x.lineWidth = 3; x.beginPath(); x.moveTo(350, 110); x.lineTo(90, 90); x.moveTo(350, 110); x.lineTo(130, 50); x.stroke(); }, 0.1]] : []),
    [(x) => { x.strokeStyle = C.dark; x.lineWidth = 10; x.lineCap = 'round'; x.lineJoin = 'round'; [[320, -70], [360, 0], [400, 70]].forEach(([lx, sp]) => { x.beginPath(); x.moveTo(lx, 180); x.lineTo(lx + sp * 0.6, 234); x.lineTo(lx + sp, 300); x.stroke(); }); }, 0.1],
    [(x) => { x.fillStyle = C.rustD; x.beginPath(); poly(x, ellPts(r, 170, 170, 164, 96, -0.03)); x.fill(); }, 0.3],
    [(x) => { x.fillStyle = 'rgba(0,0,0,0.16)'; for (let i = 0; i < 4; i++) { x.beginPath(); x.ellipse(70 + i * 62, 170, 8, 74 - i * 3, 0.08, 0, TAU); x.fill(); } }, 0],
    [(x) => { x.fillStyle = C.rustD; x.beginPath(); poly(x, ellPts(r, 372, 150, 64, 44)); x.fill(); }, 0.3],
    [(x) => { x.fillStyle = C.rust; x.beginPath(); poly(x, ellPts(r, 500, 130, 62, 54)); x.fill(); x.fillStyle = '#fbf6ea'; x.beginPath(); x.arc(526, 112, 15, 0, TAU); x.fill(); x.fillStyle = '#20182a'; x.beginPath(); x.arc(532, 114, 8, 0, TAU); x.fill(); x.fillStyle = C.dark; x.beginPath(); poly(x, [[548, 150], [590, 142], [560, 172], [582, 186], [540, 180]]); x.fill(); x.strokeStyle = C.dark; x.lineWidth = 7; x.lineCap = 'round'; x.beginPath(); x.moveTo(520, 86); x.quadraticCurveTo(560, 40, 610, 60); x.stroke(); }, 0.3],
    [(x) => { x.fillStyle = C.gold; x.beginPath(); poly(x, [[458, 84], [466, 42], [486, 66], [500, 32], [516, 66], [536, 42], [540, 86]]); x.fill(); }, 0.3],
  ]); });
  // shadow-box underground: front soil sheet with holes cut out, dark sheet behind
  const cave = (key, o) => cache('cave' + key, () => {
    const w = o.w || W, h = o.h || HH, r = H.rng(key.length * 41 + 500), Cv = H.layer(w, h), c = Cv.getContext('2d');
    const cut = (x) => { x.globalCompositeOperation = 'destination-out'; x.fillStyle = '#000'; x.strokeStyle = '#000'; x.lineCap = 'round'; (o.tunnels || []).forEach(([a, b, e, f, lw]) => { x.lineWidth = lw || 54; x.beginPath(); x.moveTo(a, b); x.quadraticCurveTo((a + e) / 2 + (o.bend || 26), (b + f) / 2, e, f); x.stroke(); }); (o.holes || []).forEach(([a, b, rx, ry]) => { x.beginPath(); poly(x, ellPts(r, a, b, rx, ry, 0, 1.2)); x.fill(); }); x.globalCompositeOperation = 'source-over'; };
    const top = o.top ?? -20;
    c.drawImage(paperize(w, h, (x) => { x.fillStyle = o.back || C.soilD; x.fillRect(0, Math.max(0, top + 6), w, h); }, { rim: false, seed: 501 }), 0, 0);
    const layer = (col, seed, y0, amp, d) => shadowDraw(c, paperize(w, h, (x) => { const f = (px) => y0 + amp * Math.sin(px * 0.007 + seed) + amp * 0.4 * Math.sin(px * 0.019 + seed * 2); x.fillStyle = col; x.beginPath(); poly(x, [...ridge(r, -10, w + 10, f, 14, 30, 0.8), [w + 10, h + 10], [-10, h + 10]]); x.fill(); cut(x); }, { seed }), 0, 0, d, 0.55);
    layer(o.soil || C.soil, 502, top, o.top != null ? 12 : 0, 1.5);
    const bands = o.bands || [[0.42, '#5f3d2a'], [0.72, '#533424']];
    bands.forEach(([f, col], i) => layer(col, 503 + i, top + (h - top) * f, 18, 0.9));
    const pb = paperize(w, h, (x) => { x.fillStyle = 'rgba(30,18,12,0.5)'; for (let i = 0; i < w * h / 16000; i++) { x.beginPath(); poly(x, circPts(r, r.range(0, w), r.range(top + 16, h), r.range(4, 12), 7, 0.5)); x.fill(); } cut(x); }, { seed: 510, rim: false }); c.drawImage(pb, 0, 0);
    if (o.top != null) shadowDraw(c, paperize(w, h, (x) => { x.fillStyle = o.grass || '#4f9a5e'; const f = (px) => top + 3 * Math.sin(px * 0.02); x.beginPath(); poly(x, [...ridge(r, -10, w + 10, (px) => f(px) - 14 - r() * 6, 8, 18, 1), [w + 10, top + 16], [-10, top + 16]]); x.fill(); cut(x); }, { seed: 511 }), 0, 0, 0.6);
    return Cv;
  });
  // slow camera on a whole scene
  const kb = (ctx, t, a, b, s0, s1, cx = 640, cy = 360) => { const u = E.inOut(ph(t, a, b)), s = s0 + (s1 - s0) * u; ctx.translate(cx, cy); ctx.scale(s, s); ctx.translate(-cx, -cy); };
  const ruler = (ctx, x, y, w, t, st, label) => { const A = dropIn(t, st, 0.35, 40); if (!A) return; put(ctx, cache('rul' + w, () => paperize(w + 20, 40, (c) => { c.fillStyle = C.gold; c.fillRect(6, 8, w + 8, 24); c.fillStyle = '#5a3a18'; for (let i = 0; i <= 10; i++) c.fillRect(10 + i * w / 10, 8, 3, i % 5 ? 10 : 16); }, { seed: 520 })), x, y + A.dy, { d: 0.9 + A.d }); if (label) tag(ctx, label, x, y + 58, t, st + 0.05, { px: 44, col: C.red }); };
  // ================= SCENES =================
  const walkX = (t, a, v, span = 1500, off = 0) => { let x = (a + t * v + off) % span; if (x < 0) x += span; return x - 110; };
  const FLOOR = 600;
  // --- hook
  const sHook = (ctx, t) => {
    outdoor(ctx, 'jungle', PAL_J, t, { noFore: true });
    ctx.save(); kb(ctx, t, 0, PS(2), 1.0, 1.05);
    const Y = dropIn(t, P(0, 'fifty') - 0.12, 0.4, 70);
    if (Y) { numberRow(ctx, '50', 200, 130 + Y.dy, 150, C.coral, { center: true }); }
    tag(ctx, 'MILLION YEARS', 610, 138, t, P(0, 'million') - 0.1, { px: 64, col: C.ink });
    tag(ctx, 'BEFORE YOU', 600, 240, t, P(0, 'before') - 0.1, { px: 48, col: C.red, rot: -0.02 });
    [0, 1, 2].forEach((i) => antAt(ctx, walkX(t, 20 + i * 430, 34), FLOOR + 12, 0.8, t, { leaf: i + 1 }));
    ctx.restore();
    const hid = P(1, 'never');
    if (t > hid - 0.1) { const A = popIn(t, hid - 0.1, 0.3); const rx = walkX(t, 20 + 430, 34); if (A) { put(ctx, ringSpr(C.gold), rx + 40, 500, { s: 1.15 * A.s, d: 1 }); } tag(ctx, 'NEVER SPOTTED', Math.min(1040, Math.max(240, rx + 40)), 340, t, hid, { px: 44, col: C.coral }); }
  };
  // --- from forest floor down into the city (one continuous camera move)
  const CITY_H = 1300;
  const cityHoles = [[220, 450, 130, 70], [640, 400, 150, 72], [1060, 470, 140, 76], [360, 700, 170, 86], [860, 690, 180, 90], [160, 950, 120, 70], [600, 980, 190, 92], [1090, 960, 130, 76], [380, 1180, 120, 60], [860, 1190, 140, 62]];
  const cityTun = [[640, 120, 640, 400], [640, 400, 220, 450], [640, 400, 1060, 470], [220, 450, 360, 700], [1060, 470, 860, 690], [360, 700, 160, 950], [360, 700, 600, 980], [860, 690, 600, 980], [860, 690, 1090, 960], [600, 980, 380, 1180], [600, 980, 860, 1190]];
  const cityCave = () => cave('city', { w: W, h: CITY_H, top: 200, holes: cityHoles, tunnels: cityTun, bands: [[0.4, '#5f3d2a'], [0.72, '#4f3322']] });
  const roomProps = (ctx, t, base) => { // little fungus gardens in the rooms
    [[640, 400], [360, 700], [860, 690], [600, 980], [1060, 470]].forEach(([x, y], i) => put(ctx, sponge(i, 240, 110), x, base + y + 18, { d: 0.5 }));
  };
  const sCity = (ctx, t) => {
    const a = PS(2), b = PS(3) + 0.3, cam = E.inOut(ph(t, a, b)) * 460;
    ctx.fillStyle = PAL_J.sky[1]; ctx.fillRect(0, 0, W, HH);
    ctx.save(); ctx.translate(0, -cam);
    const c0 = cache('skyC', () => paperize(W, 260, (x) => { const g = x.createLinearGradient(0, 0, 0, 260); g.addColorStop(0, '#8fcfb4'); g.addColorStop(1, '#d8ecc0'); x.fillStyle = g; x.fillRect(0, 0, W, 260); }, { rim: false, seed: 2 }));
    ctx.drawImage(c0, 0, 0);
    ctx.drawImage(cityCave(), 0, 0);
    roomProps(ctx, t, 0);
    [0, 1, 2, 3, 4, 5, 6, 7].forEach((i) => antAt(ctx, walkX(t, i * 200, 28, 1500), 196, 0.3, t, { leaf: (i % 3) + 1 }));
    cityHoles.forEach(([x, y, rx], i) => { for (let k = 0; k < 3; k++) { const v = 1 + k * 0.4; const px = x - rx * 0.6 + ((t * 22 * v + k * 57 + i * 31) % (rx * 1.2)); antAt(ctx, px, y + 54, 0.17, t, { flip: k % 2 > 0, col: C.rust }); } });
    ctx.restore();
    const lab = (s, x, y, st, col, px = 56) => tag(ctx, s, x, y, t, st, { px, col, dist: 50 });
    lab('MILLIONS OF CITIZENS', 640, 110, P(3, 'millions') - 0.1, C.coral, 56);
    lab('THOUSANDS OF ROOMS', 640, 200, P(4, 'thousands') - 0.1, C.ink, 46);
    lab('FARMS', 280, 330, P(5, 'farms') - 0.1, '#3d8a5a');
    lab('GARBAGE DUMPS', 830, 330, P(5, 'garbage') - 0.1, C.red, 50);
    lab('AIR CON', 640, 620, P(6, 'air') - 0.1, C.teal, 62);
  };
  const sTitle = (ctx, t) => {
    outdoor(ctx, 'jungle', PAL_J, t);
    ctx.save(); kb(ctx, t, PS(7), PE(7) + 1, 1.05, 1);
    put(ctx, burstSpr(C.gold), 640, 280, { s: 1.5, rot: t * 0.15, d: 0.6 });
    cutTitle(ctx, 'ANT CITY', 640, 220, 130, t, P(7, 'leafcutter') - 0.6, { step: 0.06 });
    tag(ctx, 'WHAT HAPPENS INSIDE?', 640, 370, t, P(7, 'happens') - 0.1, { px: 52, col: C.ink });
    [0, 1, 2, 3].forEach((i) => antAt(ctx, walkX(t, i * 380, 60), FLOOR + 30, 0.72, t, { leaf: i + 1 }));
    ctx.restore();
  };
  // --- chapter 1: the road
  const trailBg = (ctx, t, k = 'jungle', st = 0) => {
    outdoor(ctx, k, PAL_J, Math.max(0, t - st), { drift: 14, noFore: true, scene: () => { ctx.drawImage(cache('trail', () => paperize(W, 200, (x) => { x.fillStyle = '#c79a62'; const r = H.rng(601); x.beginPath(); poly(x, [...ridge(r, -10, W + 10, (px) => 40 + 6 * Math.sin(px * 0.01), 14, 28, 0.8), ...ridge(r, -10, W + 10, (px) => 170 + 6 * Math.sin(px * 0.012), 14, 28, 0.8).reverse()]); x.fill(); }, { seed: 602 })), 0, 470); } });
  };
  const sRoad = (ctx, t) => {
    trailBg(ctx, t, 'jungle', PS(8));
    ctx.save(); kb(ctx, t, PS(8), PS(10), 1, 1.12, 640, 560);
    for (let i = 0; i < 7; i++) antAt(ctx, walkX(t, i * 225, 70), 610, 0.62, t, { leaf: (i % 3) + 1 });
    ctx.restore();
    tag(ctx, 'THE LEAF PARADE', 640, 150, t, P(9, 'green') - 0.1, { px: 62, col: '#3d8a5a' });
    if (t < PS(9) + 0.3) tag(ctx, 'UP HERE', 640, 150, t, P(8, 'up') - 0.1, { px: 56, col: C.ink });
  };
  const sCut = (ctx, t) => {
    outdoor(ctx, 'canopy', { sky: ['#a8dcc0', '#e2f2d0'], far: '#8cc79e', mid: '#5aa578', ground: '#3f8a68', fore: '#1f4a38' }, t, { noFore: true });
    const st = P(10, 'slices'), hp = ph(t, st, PE(10)), hauled = ph(t, PS(11), PE(11));
    // the big leaf with a growing bite
    ctx.save(); ctx.translate(0, 0);
    const L = cache('bigleaf', () => { const r = H.rng(610); return compose(760, 620, [[(x) => { x.fillStyle = C.leaf; x.beginPath(); poly(x, cutLines(r, [[380, 10], [640, 130], [750, 330], [640, 520], [380, 610], [120, 520], [10, 330], [120, 130], [380, 10]], 40, 1.5)); x.fill(); }, 0], [(x) => { x.strokeStyle = C.leafD; x.lineWidth = 10; x.lineCap = 'round'; x.beginPath(); x.moveTo(380, 40); x.lineTo(380, 590); [[150, 1], [150, -1], [300, 1], [300, -1], [440, 1], [440, -1]].forEach(([y, s]) => { x.moveTo(380, y); x.lineTo(380 + s * 260, y + 110); }); x.stroke(); }, 0.2]]); });
    const lx = -60 + hauled * 0;
    if (hp < 1) { ctx.drawImage(L, lx, 70); }
    else { // leaf with a half moon cut out
      const C2 = cache('bigleafcut', () => { const c2 = H.layer(L.width, L.height), x = c2.getContext('2d'); x.drawImage(L, 0, 0); x.globalCompositeOperation = 'destination-out'; x.beginPath(); x.arc(760, 300, 190, 0, TAU); x.fill(); return c2; });
      ctx.drawImage(C2, lx, 70);
    }
    ctx.restore();
    const dir = hp;
    const ax = 860 + 60 * Math.sin(hp * Math.PI * 3) * (hp < 1 ? 1 : 0), ay = 450;
    if (hauled <= 0) {
      if (hp > 0 && hp < 1) { const a0 = -1.0 + hp * 2.0; ctx.save(); ctx.fillStyle = C.gold; ctx.globalAlpha = 0.35; ctx.beginPath(); ctx.arc(700, 370, 190, Math.PI - 0.9, Math.PI - 0.9 + hp * 1.8); ctx.lineTo(700, 370); ctx.fill(); ctx.restore(); }
      antAt(ctx, ax + 90, ay + 120, 1.3, t, { flip: true, walk: hp < 1 });
      tag(ctx, 'JAWS', 1050, 180, t, P(10, 'jaws') - 0.1, { px: 56, col: C.coral });
    } else {
      antAt(ctx, 720 + hauled * 330, 590, 1.2, t, { leaf: 1 });
      tag(ctx, 'HOME', 1100, 130, t, P(11, 'home') - 0.1, { px: 56, col: C.ink });
      
    }
  };
  const sLoad = (ctx, t) => {
    trailBg(ctx, t, 'jungle', PS(12));
    const st = P(12, 'ten') - 0.1;
    antAt(ctx, 300 + ph(t, PS(12), PE(12)) * 40, 600, 1.15, t, { leaf: 2 });
    const A = popIn(t, st, 0.35); if (A) { put(ctx, burstSpr(C.gold), 860, 300, { s: A.s * 1.25, rot: t * 0.2, d: 0.7 }); numberRow(ctx, '10x', 860, 280, 140, C.coral, { center: true }); }
    tag(ctx, 'HER OWN WEIGHT', 860, 430, t, P(12, 'weight') - 0.1, { px: 44, col: C.ink });
  };
  const sCow = (ctx, t) => {
    outdoor(ctx, 'sky', PAL_SKY, Math.max(0, t - PS(13)), { drift: 40 });
    const fr = Math.floor(t * 8) % 2, by = fr ? -5 : 5, x = 620 + Math.sin(t * 0.8) * 30;
    const A = popIn(t, P(13, 'you') - 0.1, 0.3); if (A) put(ctx, person(true, fr), x, 455 + by, { s: 0.85 * A.s, d: 1.1 });
    const Cw = dropIn(t, P(13, 'cow') - 0.15, 0.3, 280); if (Cw) put(ctx, cow(), x - 10, 225 + by * 1.4 + Cw.dy, { s: 1.0, d: 1.4 + Cw.d, rot: -0.04 + Math.sin(t * 8) * 0.012 });
    tag(ctx, 'YOU', 210, 420, t, P(13, 'you') - 0.1, { px: 64, col: C.coral });
    tag(ctx, '+ 1 COW', 1050, 200, t, P(13, 'cow'), { px: 60, col: C.ink, rot: 0.03 });
  };
  const sRider = (ctx, t) => {
    trailBg(ctx, t, 'jungle', PS(14));
    const z = E.inOut(ph(t, PS(14), PS(15) + 0.4));
    ctx.save(); ctx.translate(640, 400); ctx.scale(1 + z * 0.0, 1); ctx.translate(-640, -400);
    const s = 0.7 + z * 0.75, x = 320 - z * 40, y = 610 + z * 60;
    antAt(ctx, x, y, s, t, { leaf: 1, rider: t > P(15, 'tiny') - 0.1 });
    ctx.restore();
    const rx = x + 104 * s, ry = y - 240 * s - 22 * s;
    if (t > P(15, 'tiny') - 0.1) { const A = popIn(t, P(15, 'tiny') - 0.1, 0.3); if (A) put(ctx, ringSpr(C.coral), rx + 6, ry - 18, { s: A.s * 0.72, d: 0.7 }); arrow(ctx, 820, 240, 720, 180, rx + 110, ry - 20, ph(t, P(15, 'riding'), P(15, 'riding') + 0.4), C.coral, 620); }
    tag(ctx, 'ON TOP?', 960, 260, t, P(15, 'riding') - 0.1, { px: 52, col: C.ink });
    const B = popIn(t, P(16, 'bodyguard') - 0.1, 0.32); if (B) { put(ctx, burstSpr(C.gold), 960, 450, { s: B.s * 1.25, rot: t * 0.2, d: 0.6 }); put(ctx, wordSpr('BODYGUARD', 60, C.red, '#fbf6ea', 12), 960, 450, { s: B.s, d: 1.2, rot: -0.03 }); }
  };
  const sFly = (ctx, t) => {
    trailBg(ctx, t, 'jungle', PS(17));
    const s = 1.35, ax = 300, ay = 660;
    const swat = P(18, 'fends'), come = ph(t, PS(17), P(17, 'heads')), go = ph(t, swat, swat + 0.8);
    const hit = t > swat;
    antAt(ctx, ax, ay, s, t, { leaf: 1, rider: true, walk: true });
    const hx = ax + 214 * s - 160 * 0, hy = ay - 90 * s;
    const fx = H.lerp(1180, hx + 70, E.out(come)) + go * 800 + Math.sin(t * 14) * 6, fy = H.lerp(150, hy - 70, E.out(come)) - go * 180 + Math.cos(t * 19) * 6;
    put(ctx, fly(Math.floor(t * 20) % 2), fx, fy, { sx: -0.95, sy: 0.95, d: 1.1, rot: go * 0.6 });
    if (go < 0.15) tag(ctx, 'FLY', Math.min(fx + 40, 1200), Math.max(fy - 90, 70), t, P(17, 'flies') - 0.1, { px: 44, col: C.ink });
    tag(ctx, 'LAYS EGGS IN HEADS', 800, 560, t, P(17, 'eggs') - 0.1, { px: 40, col: C.red });
    if (hit) { const A = popIn(t, swat, 0.3); if (A) put(ctx, crossSpr(), hx + 60, hy - 70, { s: A.s, d: 0.8 }); tag(ctx, 'NOPE!', 820, 230, t, swat + 0.05, { px: 72, col: C.coral, rot: 0.04 }); }
  };
  // --- chapter 2: jobs
  const bgRoom = (ctx, key, p) => interior(ctx, key, p);
  const WALL = { wall: '#e9d9b8', stripe: '#e2cfa8', floor: '#7a5636', floorY: 590 };
  const sJobs = (ctx, t) => {
    interior(ctx, 'jobs', WALL);
    cutTitle(ctx, 'SIZE = JOB', 640, 130, 92, t, P(20, 'size') - 0.1, { step: 0.05 });
    const st = P(19, 'everybody');
    [[230, 0.42, 0.8, C.tan], [560, 0.72, 1, C.rust], [960, 1.2, 1.5, C.rustD]].forEach(([x, s, hd, col], i) => { const A = dropIn(t, st + i * 0.3, 0.4, 80); if (A) { ctx.save(); ctx.translate(0, A.dy); antAt(ctx, x, 610, s, t, { head: hd, col, walk: false }); ctx.restore(); } });
    [['?', 230], ['?', 560], ['?', 960]].forEach(([q, x], i) => tag(ctx, q, x, 300, t, P(19, 'job') + i * 0.12, { px: 62, col: C.coral }));
  };
  const sMinim = (ctx, t) => {
    interior(ctx, 'jobs', WALL);
    cutTitle(ctx, 'MINIMS', 640, 96, 84, t, P(21, 'minims') - 0.25, { step: 0.04 });
    const sz = 1 + E.inOut(ph(t, PS(21), PS(22))) * 0.5;
    antAt(ctx, 430, 620, 0.9 * sz, t, { col: C.tan, head: 0.85, walk: t > PS(23) });
    ruler(ctx, 760, 305, 260, t, P(22, 'less') - 0.1);
    tag(ctx, 'UNDER 1 MM', 880, 240, t, P(22, 'millimeter') - 0.1, { px: 56, col: C.red });
    const B = dropIn(t, P(23, 'babies') - 0.15, 0.35, 60); if (B) put(ctx, larva(), 880, 470 + B.dy, { d: 0.8 + B.d, s: 1.1 });
    tag(ctx, 'BABIES', 880, 400, t, P(23, 'babies') - 0.1, { px: 40, col: C.ink });
    const G = dropIn(t, P(23, 'gardens') - 0.15, 0.35, 60); if (G) put(ctx, sponge(3, 260, 130), 1110, 510 + G.dy, { d: 0.8 + G.d });
    tag(ctx, 'GARDENS', 1110, 400, t, P(23, 'gardens') - 0.1, { px: 40, col: '#3d8a5a' });
  };
  const sForager = (ctx, t) => {
    trailBg(ctx, t, 'jungle', PS(24));
    antAt(ctx, 220 + ph(t, PS(24), PS(25)) * 240, 620, 1.05, t, { leaf: 3 });
    cutTitle(ctx, 'FORAGERS', 830, 200, 76, t, P(24, 'foragers') - 0.3, { step: 0.04 });
    tag(ctx, 'THE LEAF CUTTERS', 830, 310, t, P(24, 'foragers') + 0.2, { px: 40, col: C.ink });
  };
  const sSoldier = (ctx, t) => {
    outdoor(ctx, 'dusk2', { sky: ['#3a3468', '#b75a58'], sun: ['#c8503f', '#e9845b', '#f4b768'], sunX: 1060, sunY: 180, far: '#42356a', mid: '#2f3a55', ground: '#2f2a35', fore: '#141522' }, t, { noFore: true });
    const u = E.back(ph(t, PS(25), PS(25) + 0.6)), x = -180 + u * 560;
    ctx.save(); kb(ctx, t, PS(25), PE(26), 1.0, 1.06, 400, 500);
    antAt(ctx, x, 690, 2.05, t, { head: 1.6, col: C.rustD, walk: false });
    ctx.restore();
    cutTitle(ctx, 'SOLDIERS', 940, 110, 80, t, P(25, 'soldiers') - 0.3, { step: 0.04 });
    const num = dropIn(t, P(26, 'seven') - 0.12, 0.35, 60); if (num) { put(ctx, burstSpr(C.gold), 1000, 350, { s: 0.95, rot: t * 0.2, d: 0.6 }); numberRow(ctx, '7', 1000, 340 + num.dy, 150, C.red, { center: true }); }
    tag(ctx, 'MM WIDE HEAD', 980, 510, t, P(26, 'wide') - 0.1, { px: 42, col: C.ink });
  };
  // --- chapter 3: the farm
  const sDown = (ctx, t) => {
    const a = PS(27), b = PE(27) + 0.3, cam = E.inOut(ph(t, a, b)) * 420;
    ctx.save(); ctx.translate(0, -cam);
    ctx.fillStyle = PAL_J.sky[0]; ctx.fillRect(0, 0, W, 300);
    ctx.drawImage(cave('tun', { w: W, h: 1300, top: 250, tunnels: [[640, 150, 640, 1200, 170]], holes: [[640, 1000, 300, 170]], bend: 0 }), 0, 0);
    for (let i = 0; i < 4; i++) { const py = (ph(t, a - 0.5, b + 0.3) * 760 + i * 180) % 800 + 220; ctx.save(); ctx.translate(640, py); ctx.rotate(Math.PI / 2 * 0.98); antAt(ctx, 0, 40, 0.5, t, { leaf: (i % 3) + 1 }); ctx.restore(); }
    ctx.restore();
    tag(ctx, 'UNDERGROUND', 640, 620, t, P(27, 'underground') - 0.1, { px: 62, col: C.coral });
  };
  const chamber = (key, o = {}) => cave(key, { w: W, h: HH, holes: [[640, 400, 590, 280]], ...o });
  const sNoEat = (ctx, t) => {
    ctx.drawImage(chamber('ch1'), 0, 0);
    antAt(ctx, 330, 610, 1.15, t, { leaf: 2, walk: false });
    tag(ctx, 'THE TWIST', 880, 180, t, P(28, 'twist') - 0.1, { px: 56, col: C.gold, back: C.ink });
    const A = dropIn(t, P(29, 'dont') - 0.1, 0.35, 50); if (A) { put(ctx, wordSpr('EAT LEAVES?', 62, C.ink, '#fbf6ea', 14), 880, 320 + A.dy, { d: 1 }); }
    const X = popIn(t, P(29, 'eat') - 0.05, 0.28); if (X) put(ctx, crossSpr(), 1195, 320, { s: X.s * 1.05, d: 1.1 });
    if (t > P(30, 'sip') - 0.1) { const r = H.rng(5); for (let i = 0; i < 5; i++) { const u = (t * 0.7 + i * 0.2) % 1; put(ctx, blob('#9fd27c', 9, i), 595, 410 + u * 160, { d: 0.3, a: 1 - u }); } tag(ctx, 'A LITTLE SAP', 880, 450, t, P(30, 'sap') - 0.1, { px: 42, col: '#3d8a5a' }); }
    const F = dropIn(t, P(31, 'fertilizer') - 0.15, 0.35, 70); if (F) put(ctx, wordSpr('FERTILIZER', 70, C.coral, '#fbf6ea', 14), 880, 575 + F.dy, { d: 1.2, rot: -0.02 });
  };
  const bitsPos = (i) => { const r = H.rng(900 + i); return [r.range(-210, 210), r.range(-110, 110), r.range(-1, 1)]; };
  const sSnip = (ctx, t) => {
    ctx.drawImage(chamber('ch2', { holes: [[640, 400, 600, 280]] }), 0, 0);
    const st = P(32, 'snip'), u = E.out(ph(t, st, st + 1));
    if (u < 0.2) put(ctx, leafSpr(2), 640, 390, { s: 1.5, d: 1 });
    if (u > 0) for (let i = 0; i < 26; i++) { const [dx, dy, rt] = bitsPos(i); put(ctx, bit(i % 5), 640 + dx * u * 1.6, 390 + dy * u * 1.4, { rot: rt * 3 * u, s: 1.2, d: 0.5 }); }
    antAt(ctx, 180, 650, 0.62, t, { col: C.tan, walk: false }); antAt(ctx, 1100, 650, 0.62, t, { flip: true, col: C.tan, walk: false });
    tag(ctx, 'SNIP SNIP', 640, 140, t, st - 0.1, { px: 62, col: C.coral });
    tag(ctx, 'TINY BITS', 640, 610, t, P(32, 'tiny') - 0.1, { px: 48, col: C.ink });
  };
  const sPellets = (ctx, t) => {
    ctx.drawImage(chamber('ch3', { holes: [[640, 400, 600, 285]] }), 0, 0);
    const a = P(33, 'pellets') - 0.1, drop = P(34, 'drop') - 0.1, gt = P(35, 'press'), gu = E.back(ph(t, gt, gt + 1.3));
    for (let i = 0; i < 4; i++) { const px = 200 + i * 130, py = 300; const sq = ph(t, PS(33) + i * 0.15, a + i * 0.15); if (gu < 0.2) { if (sq < 1) put(ctx, bit(i), px, py, { s: 1.4, rot: i, d: 0.5 }); else put(ctx, blob('#7ab46a', 26, i), px, py, { d: 0.6 }); } }
    tag(ctx, 'PELLETS', 400, 180, t, a, { px: 50, col: '#3d8a5a' });
    const dr = ph(t, drop, drop + 0.5); if (dr > 0 && gu < 0.2) { put(ctx, blob('#6a4426', 22, 7), 840, 120 + dr * 170, { d: 0.6 }); }
    tag(ctx, 'POOP!', 860, 180, t, P(34, 'poop') - 0.1, { px: 68, col: '#6a4426', rot: 0.05 });
    if (gu > 0) put(ctx, sponge(11, 900, 330), 640, 480, { sy: Math.max(0.02, gu), sx: 0.4 + 0.6 * Math.min(1, gu), d: 0.9 });
    tag(ctx, 'SPONGY GARDEN', 640, 620, t, P(35, 'garden') - 0.1, { px: 56, col: C.coral });
    antAt(ctx, 160, 660, 0.55, t, { col: C.tan }); antAt(ctx, 1130, 660, 0.55, t, { flip: true, col: C.tan });
  };
  const sGarden = (ctx, t) => {
    ctx.drawImage(chamber('ch4', { holes: [[640, 400, 610, 290]] }), 0, 0);
    ctx.save(); kb(ctx, t, PS(36), PS(39), 1.02, 1.1, 640, 460);
    put(ctx, sponge(12, 1000, 360), 640, 480, { d: 0.9 });
    const gu = (x, y, st, i) => { const A = popIn(t, st, 0.4); if (A) put(ctx, blob('#fff9ea', 18, i), x, y, { s: A.s, d: 0.3 }); };
    for (let i = 0; i < 18; i++) { const r = H.rng(960 + i); gu(r.range(220, 1060), r.range(370, 590), P(36, 'fungus') + i * 0.04, i); }
    const L = popIn(t, P(38, 'babies') - 0.1, 0.33); if (L) put(ctx, larva(), 390, 340, { s: L.s * 1.1, d: 0.8 });
    if (t > P(38, 'adults') - 0.2) antAt(ctx, 840, 390, 0.72, t, { col: C.rust, walk: false });
    ctx.restore();
    tag(ctx, 'FUNGUS', 640, 90, t, P(36, 'fungus') - 0.1, { px: 62, col: C.coral });
    const F = popIn(t, P(37, 'real') - 0.1, 0.3); if (F) { put(ctx, wordSpr('THE REAL FOOD', 56, C.ink, C.gold, 14), 640, 190, { s: F.s, d: 1.1, rot: -0.02 }); }
    tag(ctx, 'BABIES', 390, 260, t, P(38, 'babies') - 0.1, { px: 40, col: C.ink });
    tag(ctx, 'ADULTS', 840, 260, t, P(38, 'adults') - 0.1, { px: 40, col: C.ink });
  };
  const sLineage = (ctx, t) => {
    ctx.fillStyle = '#cfe8d0'; ctx.fillRect(0, 0, W, 110); ctx.drawImage(cave('lin', { w: W, h: HH, top: 90, holes: [[170, 400, 120, 70], [495, 400, 120, 70], [820, 400, 120, 70], [1130, 400, 110, 70]], tunnels: [[170, 90, 170, 400, 40], [495, 90, 495, 400, 40], [820, 90, 820, 400, 40], [1130, 90, 1130, 400, 40]], bend: 0 }), 0, 0);
    const a = PS(39), b = PE(39) - 0.3, p = ph(t, a + 0.1, b) * 3;
    [170, 495, 820, 1130].forEach((x, i) => { const A = popIn(t, a + 0.1 + i * (b - a) / 3.5, 0.35); if (A) put(ctx, sponge(i + 20, 180, 76), x, 415, { s: A.s, d: 0.5 }); });
    if (p < 3) { const i = Math.floor(p), u = p - i, xs = [170, 495, 820, 1130]; const x = H.lerp(xs[i], xs[i + 1], E.inOut(u)), y = 230 - Math.sin(u * Math.PI) * 120; put(ctx, blob(C.fungus, 22, 3), x, y, { d: 1.1 }); }
    tag(ctx, 'PASSED DOWN', 640, 560, t, P(39, 'passing') - 0.1, { px: 60, col: C.coral });
    tag(ctx, 'FOR MILLIONS OF YEARS', 640, 650, t, P(39, 'millions') - 0.1, { px: 48, col: C.ink });
  };
  // --- chapter 4: weeds and trash
  const moldPatch = (ctx, cx, cy, s, seed) => { const r = H.rng(seed); for (let i = 0; i < 6; i++) put(ctx, blob(C.mold, 26, i % 4), cx + r.range(-60, 60) * s, cy + r.range(-40, 40) * s, { s: s * r.range(0.7, 1.3), d: 0.3 }); };
  const sWeed = (ctx, t) => {
    ctx.drawImage(chamber('ch4', { holes: [[640, 400, 610, 290]] }), 0, 0);
    put(ctx, sponge(12, 1000, 360), 640, 480, { d: 0.9 });
    const g = ph(t, P(41, 'rival') - 0.1, PE(41));
    [[420, 470], [640, 520], [840, 430], [960, 540], [300, 540]].forEach(([x, y], i) => { const s = Math.max(0, g * 5 - i) ; if (s > 0) moldPatch(ctx, x, y, Math.min(1.5, s), 980 + i); });
    cutTitle(ctx, 'WEEDS!', 640, 120, 100, t, P(40, 'weed') - 0.3, { cols: [C.mold, C.coral, C.mold] });
    tag(ctx, 'RIVAL FUNGUS', 640, 250, t, P(41, 'rival') - 0.1, { px: 50, col: C.mold });
  };
  const sPowder = (ctx, t) => {
    interior(ctx, 'lab', { wall: '#cfe4dc', stripe: '#c3dcd3', floor: '#6a8a7a', floorY: 620 });
    const a = P(42, 'powder') - 0.1, zoom = ph(t, PS(43), PS(43) + 0.4);
    antAt(ctx, 360, 640, 1.5, t, { walk: false });
    // white powder dusted on the ant
    const rr = H.rng(991); for (let i = 0; i < 46; i++) { const px = rr.range(150, 480), py = rr.range(480, 570); const A = t > a + i * 0.012; if (A) { ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(px, py, rr.range(2, 5), 0, TAU); ctx.fill(); } else rr(); }
    tag(ctx, 'WHITE POWDER', 900, 160, t, a, { px: 52, col: C.ink });
    if (zoom > 0) { const s = E.back(zoom); put(ctx, cache('lens', () => paperize(420, 420, (x) => { x.fillStyle = '#f8f4e6'; x.beginPath(); x.arc(210, 210, 200, 0, TAU); x.fill(); x.fillStyle = C.ink; x.globalCompositeOperation = 'source-atop'; x.lineWidth = 18; x.strokeStyle = C.ink; x.beginPath(); x.arc(210, 210, 190, 0, TAU); x.stroke(); }, { seed: 992 })), 920, 400, { s: s * 0.86, d: 1.2 });
      const r2 = H.rng(993); for (let i = 0; i < 10; i++) { const px = 920 + r2.range(-115, 115), py = 400 + r2.range(-115, 115), rt = r2.range(0, 3); ctx.save(); ctx.translate(px, py); ctx.rotate(rt + Math.sin(t * 2 + i) * 0.2); ctx.fillStyle = C.teal; ctx.beginPath(); ctx.roundRect(-30 * s, -9 * s, 60 * s, 18 * s, 9 * s); ctx.fill(); ctx.restore(); }
      tag(ctx, 'BACTERIA', 920, 645, t, P(43, 'bacteria') - 0.1, { px: 52, col: C.teal });
    }
    const B = popIn(t, P(44, 'antibiotics') - 0.1, 0.32); if (B) { put(ctx, wordSpr('ANTIBIOTICS', 60, C.coral, '#fbf6ea', 14), 330, 165, { s: B.s, d: 1.2, rot: -0.02 }); }
    const W2 = popIn(t, P(44, 'weed') - 0.05, 0.28); if (W2) { moldPatch(ctx, 150, 340, 0.75, 994); put(ctx, crossSpr(), 150, 340, { s: W2.s, d: 1 }); }
  };
  const sDrag = (ctx, t) => {
    ctx.drawImage(cave('tun2', { w: W, h: HH, tunnels: [[-40, 480, 1320, 430, 280]], bend: 10, holes: [[1200, 430, 200, 190]] }), 0, 0);
    const u = ph(t, PS(45), PE(46));
    const x = 170 + u * 900;
    antAt(ctx, x, 575, 0.92, t);
    moldPatch(ctx, x - 90, 530, 0.5, 996); put(ctx, sponge(6, 110, 80, '#b8a9c6'), x - 100, 530, { d: 0.5 });
    const Sn = popIn(t, P(45, 'chopped') - 0.1, 0.28); if (Sn) put(ctx, wordSpr('CHOP!', 60, C.red, '#fbf6ea', 12), 130, 190, { s: Sn.s, rot: -0.1, d: 1 });
    tag(ctx, 'DRAGGED AWAY', 520, 190, t, P(45, 'dragged') - 0.1, { px: 50, col: C.ink });
    const Tr = dropIn(t, P(46, 'trash') - 0.12, 0.35, 70); if (Tr) put(ctx, wordSpr('TRASH', 92, C.coral, '#fbf6ea', 16), 985, 170 + Tr.dy, { d: 1.2 + Tr.d, rot: 0.03 });
  };
  const trashHeap = () => cache('heap', () => { const r = H.rng(1001); const parts = []; for (let i = 0; i < 40; i++) { const a = r.range(0, Math.PI), rr = Math.sqrt(r()); parts.push(circPts(r, 450 + Math.cos(a) * rr * 400, 240 - Math.sin(a) * rr * 190, r.range(30, 56), 12, 1)); } return compose(900, 280, [[(x) => { x.fillStyle = '#7f6c56'; x.beginPath(); parts.forEach((p) => poly(x, p)); x.fill(); }, 0], [(x) => { for (let i = 0; i < 40; i++) { x.fillStyle = r.pick(['#a39579', '#8b8562', '#5f5244', '#a99a70']); x.beginPath(); poly(x, circPts(r, r.range(80, 820), r.range(100, 260), r.range(6, 18), 6, 1)); x.fill(); } }, 0.15]]); });
  const sDump = (ctx, t) => {
    ctx.drawImage(chamber('ch5', { holes: [[640, 370, 610, 310]], back: '#2a1a14' }), 0, 0);
    put(ctx, trashHeap(), 500, 545, { d: 1 });
    cutTitle(ctx, 'GARBAGE ROOM', 640, 100, 76, t, P(47, 'garbage') - 0.4, { step: 0.035, cols: [C.coral, C.gold, C.cream] });
    const A = dropIn(t, P(48, 'stand') - 0.15, 0.35, 100); if (A) put(ctx, person(false), 1030, 470 + A.dy, { s: 1.0, d: 1.2 + A.d });
    tag(ctx, 'YOU FIT!', 820, 250, t, P(48, 'stand') + 0.1, { px: 60, col: C.coral, rot: -0.03 });
    [0, 1, 2].forEach((i) => antAt(ctx, 120 + i * 230, 650, 0.22, t, { col: C.old }));
  };
  const sOld = (ctx, t) => {
    ctx.drawImage(chamber('ch6', { holes: [[320, 420, 280, 220], [960, 420, 280, 220]], tunnels: [] }), 0, 0);
    [[120, 0], [320, 1], [500, 2]].forEach(([x, i]) => antAt(ctx, x, 620, 0.5, t, { col: C.old, ph: i * 0.3, flip: i === 1 }));
    put(ctx, trashHeap(), 330, 610, { s: 0.5, d: 0.6 });
    [[800, 0], [960, 1], [1120, 2]].forEach(([x, i]) => antAt(ctx, x, 620, 0.5, t, { col: C.rust, ph: i * 0.3, flip: i !== 1 }));
    tag(ctx, 'OLDER ANTS', 320, 150, t, P(49, 'older') - 0.1, { px: 52, col: C.ink });
    tag(ctx, 'EVERYONE ELSE', 960, 150, t, P(50, 'everyone') - 0.1, { px: 46, col: C.ink });
    const K = popIn(t, P(50, 'kept') - 0.1, 0.3); if (K) put(ctx, wordSpr('KEPT APART', 56, C.red, C.gold, 12), 640, 390, { s: K.s, rot: -0.04, d: 1.3 });
  };
  // --- chapter 5: air
  const sCO2 = (ctx, t) => {
    ctx.drawImage(chamber('ch4', { holes: [[640, 400, 610, 290]] }), 0, 0);
    put(ctx, sponge(12, 1000, 360), 640, 500, { d: 0.9 });
    cutTitle(ctx, 'BREATHING', 640, 100, 88, t, P(52, 'breathing') - 0.3, { step: 0.04, cols: [C.teal, C.cream, C.gold] });
    const s0 = P(53, 'carbon') - 0.1; const r = H.rng(1101);
    for (let i = 0; i < 16; i++) { const x = r.range(150, 1130), sp = r.range(0.11, 0.2), off = r(); if (t < s0) continue; const u = ((t - s0) * sp + off) % 1; put(ctx, wordSpr('CO2', 30, '#fbf6ea', '#6a6a7a', 8), x + Math.sin(t + i) * 10, 560 - u * 390, { d: 0.5, s: 0.7 + r() * 0.25, a: Math.min(1, u * 8) }); }
    if (t > P(54, 'ants') - 0.1) { antAt(ctx, 300, 640, 0.75, t, { walk: false }); const A = popIn(t, P(54, 'handle') - 0.1, 0.3); if (A) put(ctx, checkSpr(), 300, 410, { s: A.s * 1.1, d: 1 }); }
    const X = popIn(t, P(55, 'cant') - 0.1, 0.28); if (X) { put(ctx, crossSpr(), 900, 450, { s: X.s * 1.6, d: 1.2 }); tag(ctx, 'FUNGUS', 900, 590, t, P(55, 'fungus') - 0.1, { px: 56, col: C.red }); }
  };
  const moundBg = (ctx) => { ctx.drawImage(cache('mound', () => { const Cv = H.layer(W, HH), c = Cv.getContext('2d'); c.drawImage(paperize(W, HH, (x) => { const g = x.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, '#9fdbe6'); g.addColorStop(1, '#e8f6e0'); x.fillStyle = g; x.fillRect(0, 0, W, HH); }, { rim: false, seed: 2 }), 0, 0);
    const r = H.rng(1201), md = (x) => 400 - 120 * Math.exp(-Math.pow((x - 640) / 310, 2));
    const cut = (x) => { x.globalCompositeOperation = 'destination-out'; x.strokeStyle = '#000'; x.lineCap = 'round'; x.lineWidth = 34; [[420, 340, 560, 560], [640, 290, 640, 560], [860, 340, 720, 560], [130, 420, 500, 620], [1150, 420, 780, 620]].forEach(([a, b, e, f]) => { x.beginPath(); x.moveTo(a, b); x.lineTo(e, f); x.stroke(); }); x.fillStyle = '#000'; x.beginPath(); poly(x, ellPts(r, 640, 600, 240, 74)); x.fill(); x.globalCompositeOperation = 'source-over'; };
    c.drawImage(paperize(W, HH, (x) => { x.fillStyle = C.soilD; x.beginPath(); poly(x, [...ridge(r, -10, W + 10, (p) => md(p) + 10, 18, 30, 0.8), [W + 10, HH + 10], [-10, HH + 10]]); x.fill(); }, { seed: 1202, rim: false }), 0, 0);
    shadowDraw(c, paperize(W, HH, (x) => { x.fillStyle = C.soil; x.beginPath(); poly(x, [...ridge(r, -10, W + 10, md, 18, 30, 0.9), [W + 10, HH + 10], [-10, HH + 10]]); x.fill(); cut(x); }, { seed: 1203 }), 0, 0, 1.4);
    return Cv; }), 0, 0); };
  const turret = (h = 90) => cache('tur' + h, () => { const r = H.rng(1210 + h); return compose(100, h + 24, [[(x) => { x.fillStyle = '#8a5f3e'; x.beginPath(); poly(x, cutLines(r, [[18, h + 20], [32, 8], [68, 8], [82, h + 20], [18, h + 20]], 16, 0.9)); x.fill(); }, 0], [(x) => { x.fillStyle = C.soilD; x.beginPath(); x.ellipse(50, 12, 16, 6, 0, 0, TAU); x.fill(); }, 0]]); });
  const windPuffs = (ctx, t, st) => { if (t < st) return; const r = H.rng(1220); for (let i = 0; i < 5; i++) { const y = 100 + i * 34, sp = r.range(190, 280), u = ((t - st) * sp + r() * 1400) % 1500 - 150; ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.95)'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.shadowColor = 'rgba(14,10,30,0.3)'; ctx.shadowBlur = 4; ctx.shadowOffsetY = 2; ctx.beginPath(); ctx.moveTo(u, y); ctx.quadraticCurveTo(u + 70, y - 12, u + 130, y); ctx.stroke(); ctx.restore(); } };
  const sTurrets = (ctx, t) => {
    moundBg(ctx);
    const tStart = P(56, 'chimneys') - 0.3;
    [[420, 340], [640, 288], [860, 340]].forEach(([x, y], i) => sprAt(ctx, turret(), x, y - 60, t, tStart + i * 0.14, { dist: 90, d: 0.9 }));
    tag(ctx, 'CHIMNEYS', 180, 150, t, P(56, 'chimneys') - 0.1, { px: 50, col: C.coral });
    windPuffs(ctx, t, P(57, 'wind') - 0.1);
    tag(ctx, 'WIND', 1110, 70, t, P(57, 'wind') - 0.1, { px: 52, col: C.teal });
    const out = P(58, 'stale') - 0.1, inn = P(59, 'fresh') - 0.1;
    [420, 640, 860].forEach((x, i) => { const yy = i === 1 ? 228 : 280; arrow(ctx, x + (i - 1) * 40, 530 - (i === 1 ? 60 : 0), x, 400, x, yy - 60, ph(t, out, out + 0.5), '#7a7a8a', 1230 + i); });
    tag(ctx, 'STALE AIR OUT', 1040, 200, t, P(58, 'stale'), { px: 40, col: '#5a5a6a' });
    [[130, 400, 330, 480, 520, 600], [1150, 400, 950, 480, 760, 600]].forEach(([a, b, c, d, e, f], i) => arrow(ctx, a, b, c, d, e, f, ph(t, inn, inn + 0.5), C.teal, 1240 + i));
    tag(ctx, 'FRESH AIR IN', 200, 660, t, P(59, 'fresh'), { px: 40, col: C.teal });
    const N = popIn(t, P(60, 'ten') - 0.1, 0.32); if (N && t < PS(61)) { put(ctx, burstSpr(C.gold), 640, 590, { s: N.s * 0.95, rot: t * 0.2, d: 0.7 }); numberRow(ctx, '10x', 640, 575, 90, C.red, { center: true }); }
    const a1 = dropIn(t, P(61, 'fans') - 0.1, 0.3, 50), a2 = dropIn(t, P(61, 'electricity') - 0.1, 0.3, 50);
    if (a1) { put(ctx, wordSpr('NO FANS', 56, C.ink, '#fbf6ea', 12), 480, 610 + a1.dy, { d: 1, rot: -0.03 }); }
    if (a2) { put(ctx, wordSpr('NO POWER', 56, C.red, '#fbf6ea', 12), 830, 610 + a2.dy, { d: 1, rot: 0.02 }); }
  };
  // --- chapter 6: the queen
  const sQueen = (ctx, t) => {
    ctx.drawImage(chamber('ch7', { holes: [[640, 390, 610, 300]], back: '#2a1a2a' }), 0, 0);
    const st = P(63, 'queen') - 0.2, A = dropIn(t, st, 0.5, 120);
    ctx.save(); kb(ctx, t, st, PE(65), 1, 1.04, 420, 460);
    if (A) put(ctx, queenSpr(false), 460, 480 + A.dy, { s: 1.15, d: 1.3 });
    const es = P(65, 'eggs') - 0.6; const r = H.rng(1301);
    for (let i = 0; i < 26; i++) { const px = r.range(800, 1200), py = 660 - r.range(0, 30) - r() * 0; const u = popIn(t, es + i * 0.04, 0.2); if (u) put(ctx, egg(), px, py, { s: u.s * 0.8, d: 0.3, rot: r.range(-0.5, 0.5) }); else { r(); } }
    ctx.restore();
    tag(ctx, 'WHO STARTED IT?', 640, 76, t, P(62, 'who') - 0.1, { px: 50, col: C.gold, back: C.ink });
    const Y = dropIn(t, P(64, 'fifteen') - 0.1, 0.35, 60); if (Y) { numberRow(ctx, '15', 950, 200 + Y.dy, 96, C.coral, { center: true }); put(ctx, wordSpr('YEARS', 42, C.ink, '#fbf6ea', 10), 1125, 210 + Y.dy, { d: 0.8 }); }
    const n = Math.round(150 * E.out(ph(t, P(65, 'hundred') - 0.05, P(65, 'eggs')))); if (t > P(65, 'hundred') - 0.1) { numberRow(ctx, String(n), 940, 340, 96, C.red, { center: true }); put(ctx, wordSpr('MILLION EGGS', 40, C.ink, '#fbf6ea', 10), 980, 450, { d: 0.8, rot: -0.01 }); tag(ctx, 'ONE ESTIMATE', 1030, 530, t, P(65, 'estimate') - 0.1, { px: 30, col: '#6a6a7a' }); }
  };
  const sFlight = (ctx, t) => {
    outdoor(ctx, 'sky', PAL_SKY, t, { drift: 7 });
    const a = PS(66), u = ph(t, a, PE(68)), bob = Math.sin(t * 3) * 10, flap = Math.floor(t * 18) % 2;
    const x = 110 + u * 480, y = 310 - u * 90 + bob;
    put(ctx, queenSpr(true), x, y, { s: 0.8 * (flap ? 1 : 0.995), rot: -0.06 + Math.sin(t * 2) * 0.03, d: 2 });
    tag(ctx, 'ONE FLIGHT', 640, 70, t, P(66, 'flight') - 0.1, { px: 56, col: C.coral });
    const mx = x + 212, my = y + 14;
    const P1 = popIn(t, P(67, 'pellet') - 0.15, 0.3); if (P1) { put(ctx, blob(C.fungus, 20, 2), mx, my, { s: P1.s * 1.2, d: 0.8 }); put(ctx, ringSpr(C.coral), mx, my, { s: P1.s * 0.42, d: 0.6 }); tag(ctx, 'FUNGUS!', mx + 40, my - 110, t, P(67, 'fungus') - 0.1, { px: 40, col: C.ink }); }
    const I = popIn(t, P(68, 'inheritance') - 0.12, 0.32); if (I) put(ctx, wordSpr('HER WHOLE INHERITANCE', 50, C.ink, C.gold, 14), 640, 620, { s: I.s, d: 1.4, rot: -0.015 });
  };
  const sDig = (ctx, t) => {
    ctx.fillStyle = '#d8ecc0'; ctx.fillRect(0, 0, W, 280);
    const dig = E.inOut(ph(t, P(69, 'digs') - 0.1, P(69, 'seals')));
    ctx.drawImage(cave('dig', { w: W, h: HH, top: 200, holes: [[640, 540, 200, 110]], tunnels: [[640, 200, 640, 500, 80]], bend: 0, back: C.soilD }), 0, 0);
    const sealed = ph(t, P(69, 'seals') - 0.05, P(69, 'seals') + 0.3);
    if (sealed > 0) { put(ctx, cache('plug', () => paperize(120, 70, (x) => { x.fillStyle = C.soil; x.beginPath(); poly(x, circPts(H.rng(1401), 60, 35, 50, 10, 1.2)); x.fill(); }, { seed: 1401 })), 640, 170 + 90 * E.out(sealed), { d: 1 }); tag(ctx, 'SEALED', 880, 260, t, P(69, 'seals'), { px: 46, col: C.ink }); }
    const y = H.lerp(190, 590, dig);
    ctx.save(); antAt(ctx, 600, y, 0.42, t, { col: C.rustD, head: 0.9, walk: dig < 1 && t < P(69, 'plants') }); ctx.restore();
    const G = popIn(t, P(69, 'plants') - 0.1, 0.4); if (G) { put(ctx, sponge(30, 170, 80), 760, 600, { s: G.s, d: 0.6 }); tag(ctx, 'PLANTED', 280, 500, t, P(69, 'plants'), { px: 56, col: '#3d8a5a' }); }
    tag(ctx, 'DIGS IN', 280, 360, t, P(69, 'digs') - 0.1, { px: 50, col: C.coral });
  };
  const sOdds = (ctx, t) => {
    interior(ctx, 'jobs', WALL);
    const st = PS(70), pick = P(70, 'percent') - 0.1;
    for (let i = 0; i < 40; i++) { const col = i % 10, row = Math.floor(i / 10), x = 205 + col * 96, y = 205 + row * 88, is = i === 23, A = popIn(t, st + i * 0.012, 0.2); if (!A) continue; const keep = is || t < pick; put(ctx, queenSpr(false), x, y, { s: 0.14 * A.s * (is && t > pick ? 1.4 : 1), d: keep ? 0.8 : 0.1, a: keep ? 1 : 0.28 }); if (is && t > pick) put(ctx, ringSpr(C.gold), x, y, { s: 0.5, d: 0.5 }); }
    const N = popIn(t, P(70, 'two') - 0.1, 0.32); if (N) { numberRow(ctx, '2.5%', 640, 95, 100, C.red, { center: true }); }
    tag(ctx, 'BUILD A COLONY', 640, 610, t, P(70, 'colony') - 0.1, { px: 52, col: C.ink });
  };
  const sBig = (ctx, t) => {
    const a = PS(71), z = E.inOut(ph(t, a, PE(72))), s = 1.15 - z * 0.59, oy = 40 - z * 28;
    ctx.fillStyle = C.soilD; ctx.fillRect(0, 0, W, HH);
    ctx.save(); ctx.translate(640, oy); ctx.scale(s, s); ctx.translate(-640, 0);
    ctx.fillStyle = PAL_J.sky[1]; ctx.fillRect(-1400, -600, W + 2800, 820);
    [-W, W].forEach((dx) => ctx.drawImage(cityCave(), dx, 0)); ctx.drawImage(cityCave(), 0, 0); roomProps(ctx, t, 0);
    cityHoles.forEach(([x, y, rx], i) => { for (let k = 0; k < 3; k++) { const px = x - rx * 0.6 + ((t * 26 + k * 57 + i * 31) % (rx * 1.2)); antAt(ctx, px, y + 54, 0.17, t, { flip: k % 2 > 0 }); } });
    ctx.restore();
    const n = Math.round(7000 * E.out(ph(t, P(71, 'seven') - 0.1, P(71, 'rooms') + 0.3))); if (t > P(71, 'seven') - 0.12) { numberRow(ctx, fmt(n), 280, 110, 92, C.coral, { center: true }); tag(ctx, 'ROOMS', 280, 215, t, P(71, 'rooms') - 0.1, { px: 48, col: C.ink }); }
    const yr = 360; const A = popIn(t, P(72, 'twenty') - 0.1, 0.3); if (A) { arrow(ctx, 1160, 90, 1160, 370, 1160, 640, ph(t, P(72, 'twenty') - 0.1, P(72, 'deep')), C.gold, 1600); put(ctx, wordSpr('20+ FEET', 54, C.red, '#fbf6ea', 12), 1000, 360, { s: A.s, d: 1.1, rot: -0.02 }); }
  };
  const sEnd = (ctx, t) => {
    trailBg(ctx, t, 'jungle', PS(73));
    const fin = PS(75), down = E.inOut(ph(t, PS(74), fin + 0.2)), x = 260 + ph(t, PS(73), PE(75)) * 620;
    antAt(ctx, x, 610, 0.68, t, { leaf: 2 });
    if (t < P(75, 'farm') - 0.1) tag(ctx, 'NEXT TIME YOU SEE THIS...', 620, 110, t, P(73, 'next') - 0.1, { px: 42, col: C.ink });
    arrow(ctx, 1100, 280, 1180, 430, 1100, 590, ph(t, P(74, 'going') - 0.1, PE(74)), C.coral, 1700);
    const O = popIn(t, P(75, 'farm') - 0.1, 0.34); if (O) { put(ctx, burstSpr(C.gold), 640, 280, { s: O.s * 1.35, rot: t * 0.18, d: 0.7 }); put(ctx, wordSpr('OLDER THAN US', 72, C.coral, '#fbf6ea', 16), 640, 280, { s: O.s, d: 1.5, rot: -0.02 }); }
  };
  const hexSheet = () => cache('hex', () => { const Cv = H.layer(W, HH), c = Cv.getContext('2d'); c.drawImage(paperize(W, HH, (x) => { x.fillStyle = '#e9b24a'; x.fillRect(0, 0, W, HH); }, { rim: false, seed: 4 }), 0, 0); const r = 62; shadowDraw(c, paperize(W, HH, (x) => { x.fillStyle = '#f6cf6a'; for (let j = -1; j < 9; j++) for (let i = -1; i < 14; i++) { const cx = i * r * 1.76 + (j % 2 ? r * 0.88 : 0), cy = j * r * 1.52; x.beginPath(); for (let a = 0; a < 6; a++) { const an = Math.PI / 6 + a * Math.PI / 3; a ? x.lineTo(cx + Math.cos(an) * (r - 8), cy + Math.sin(an) * (r - 8)) : x.moveTo(cx + Math.cos(an) * (r - 8), cy + Math.sin(an) * (r - 8)); } x.closePath(); x.fill(); } }, { seed: 5 }), 0, 0, 0.6); return Cv; });
  const bee = () => cache('bee', () => { const r = H.rng(1800); return compose(300, 220, [[(x) => { x.fillStyle = 'rgba(240,248,250,0.92)'; x.beginPath(); x.ellipse(120, 54, 60, 34, -0.5, 0, TAU); x.ellipse(170, 50, 54, 30, 0.4, 0, TAU); x.fill(); }, 0.1], [(x) => { x.fillStyle = C.gold; x.beginPath(); poly(x, ellPts(r, 130, 130, 92, 56)); x.fill(); x.fillStyle = '#2b2033'; [96, 136, 176].forEach((a) => { x.beginPath(); x.ellipse(a, 130, 13, 50, 0, 0, TAU); x.fill(); }); }, 0.3], [(x) => { x.fillStyle = '#2b2033'; x.beginPath(); poly(x, circPts(r, 236, 118, 36, 10, 0.5)); x.fill(); x.fillStyle = '#fbf6ea'; x.beginPath(); x.arc(250, 108, 10, 0, TAU); x.fill(); x.fillStyle = '#20182a'; x.beginPath(); x.arc(253, 108, 5, 0, TAU); x.fill(); }, 0.3]]); });
  const sNext = (ctx, t) => {
    ctx.drawImage(hexSheet(), 0, 0);
    const a = PS(76), dx = Math.sin(t * 4) * 110, dy = Math.sin(t * 8) * 30;
    put(ctx, bee(), 640 + dx, 330 + dy, { s: 1.1, rot: Math.sin(t * 4 + 1.5) * 0.25, d: 1.8 });
    tag(ctx, 'NEXT UP', 640, 90, t, a, { px: 58, col: C.coral });
    tag(ctx, 'TALKING BY DANCING', 640, 190, t, P(76, 'dancing') - 0.25, { px: 44, col: C.ink });
    const Q = dropIn(t, P(77, 'honeybee') - 0.12, 0.4, 80); if (Q) put(ctx, wordSpr('HOW DOES A HIVE WORK?', 62, C.ink, '#fbf6ea', 16), 640, 600 + Q.dy, { d: 1.4 + Q.d });
  };
  const SC = [
    { s: 0, f: sHook }, { s: PS(2), f: sCity, tr: 'cut' }, { s: PS(7), f: sTitle, tr: 'rip' },
    { s: PS(8), f: sRoad, tr: 'pan', ch: [1, 'THE ROAD'] }, { s: PS(10), f: sCut, tr: 'pan' }, { s: PS(12), f: sLoad, tr: 'pan' }, { s: PS(13), f: sCow, tr: 'drop' }, { s: PS(14), f: sRider, tr: 'pan' }, { s: PS(17), f: sFly, tr: 'pan' },
    { s: PS(19), f: sJobs, tr: 'drop', ch: [2, 'THE JOBS'] }, { s: PS(21), f: sMinim, tr: 'pan' }, { s: PS(24), f: sForager, tr: 'pan' }, { s: PS(25), f: sSoldier, tr: 'pan' },
    { s: PS(27), f: sDown, tr: 'rip', ch: [3, 'THE FARM'] }, { s: PS(28), f: sNoEat, tr: 'drop' }, { s: PS(32), f: sSnip, tr: 'pan' }, { s: PS(33), f: sPellets, tr: 'pan' }, { s: PS(36), f: sGarden, tr: 'pan' }, { s: PS(39), f: sLineage, tr: 'drop' },
    { s: PS(40), f: sWeed, tr: 'rip', ch: [4, 'WEEDS AND TRASH'] }, { s: PS(42), f: sPowder, tr: 'pan' }, { s: PS(45), f: sDrag, tr: 'pan' }, { s: PS(47), f: sDump, tr: 'pan' }, { s: PS(49), f: sOld, tr: 'pan' },
    { s: PS(51), f: sCO2, tr: 'drop', ch: [5, 'THE AIR'] }, { s: PS(56), f: sTurrets, tr: 'pan' },
    { s: PS(62), f: sQueen, tr: 'rip', ch: [6, 'THE QUEEN'], chAt: PS(62) + 1.2 }, { s: PS(66), f: sFlight, tr: 'drop' }, { s: PS(69), f: sDig, tr: 'pan' }, { s: PS(70), f: sOdds, tr: 'drop' }, { s: PS(71), f: sBig, tr: 'rip' },
    { s: PS(73), f: sEnd, tr: 'pan' }, { s: PS(76), f: sNext, tr: 'rip' },
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
    // scene changes
    SC.forEach((sc, i) => { if (!i) return; const t0 = sc.s - TD;
      if (sc.tr === 'pan') layer(t0, TD + 0.2, 0.9);
      else if (sc.tr === 'drop') { k.play('whoosh', t0, { dur: TD * 0.8, gain: 0.5 }); card(t0 + TD * 0.6, 1.2, 0, 0.7, false); }
      else if (sc.tr === 'rip') tear(t0, TD); });
    // chapter banners
    SC.forEach((sc) => { if (sc.ch) { const st = sc.chAt ?? sc.s; card(st + 0.17, 1.1, 0, 0.8, false); k.play('ding', st + 0.25, { f: 'G5', gain: 0.35 }); } });
    // big moments
    const hit = (t, g = 1) => { k.play('impact', t, { gain: g }); k.noise(t, { dur: 0.12, color: 'pink', filter: 'bandpass', f: [[0, 600], [0.12, 1600]], q: 0.6, gain: 0.3, a: 0.02 }); };
    const nope = (t) => { k.play('slap', t, { gain: 0.6 }); k.tone(t + 0.01, { f: 'D3', type: 'triangle', dur: 0.16, gain: 0.2, filter: 'lowpass', f2: 700 }); k.tone(t + 0.17, { f: 'A2', type: 'triangle', dur: 0.3, gain: 0.22, filter: 'lowpass', f2: 600 }); };
    const pop = (t, g = 0.6) => k.play('pop', t, { gain: g, minor: true });
    hit(P(0, 'fifty') - 0.05, 1); hit(P(3, 'millions') - 0.05, 0.7); hit(P(7, 'leafcutter') - 0.1, 0.9);
    for (let x = 0; x < 1.4; x += 0.09) k.noise(P(10, 'slices') + x, { dur: 0.04, filter: 'bandpass', f: 2400, q: 1.2, gain: 0.14, minor: true });
    hit(P(12, 'ten') - 0.05, 1); k.play('slap', P(13, 'cow'), { gain: 0.8 }); k.tone(P(13, 'cow') + 0.1, { f: [[0, 180], [0.6, 120]], type: 'sawtooth', dur: 0.7, gain: 0.09, filter: 'lowpass', f2: 700 });
    k.play('sparkle', P(16, 'bodyguard'), { gain: 0.6 });
    for (let x = 0; x < 1.3; x += 0.05) k.noise(PS(17) + x, { dur: 0.04, filter: 'bandpass', f: 500 + 300 * (x % 0.1 > 0.05), q: 3, gain: 0.08, minor: true });
    nope(P(18, 'fends'));
    hit(P(26, 'seven') - 0.05, 0.9); nope(P(29, 'eat')); k.play('thud', P(31, 'fertilizer'), { f: 110, gain: 0.5 });
    for (let i = 0; i < 6; i++) flick(P(32, 'snip') + i * 0.11, 1.2);
    k.play('pop', P(34, 'poop'), { gain: 0.8 }); hit(P(37, 'real') - 0.05, 0.9);
    k.play('error', P(41, 'wreck'), { gain: 0.4 }); k.play('sparkle', P(44, 'antibiotics'), { gain: 0.6 }); nope(P(44, 'weed'));
    tear(P(45, 'chopped'), 0.35); k.play('thud', P(46, 'trash'), { f: 90, gain: 0.6 }); k.play('ding', P(48, 'stand') + 0.1, { f: 'E5', gain: 0.35 });
    k.play('stamp', P(50, 'kept'), { gain: 0.8 });
    k.play('ding', P(54, 'handle'), { f: 'G5', gain: 0.35 }); nope(P(55, 'cant'));
    for (let x = 0; x < 3; x += 0.3) k.noise(P(57, 'wind') + x, { dur: 0.5, color: 'pink', filter: 'bandpass', f: 500 + 200 * Math.sin(x * 3), q: 0.6, gain: 0.06, a: 0.2, minor: true });
    hit(P(60, 'ten') - 0.05, 0.9); k.play('slap', P(61, 'fans'), { gain: 0.4 }); k.play('slap', P(61, 'electricity'), { gain: 0.4 });
    k.play('sparkle', P(63, 'queen'), { gain: 0.7 }); hit(P(65, 'hundred'), 0.8); k.play('riser', P(66, 'flight') - 0.2, { dur: 0.5, gain: 0.3 });
    k.play('ding', P(67, 'pellet'), { f: 'A5', gain: 0.35 }); k.play('thud', P(69, 'seals'), { f: 100, gain: 0.6 });
    k.play('error', P(70, 'two'), { gain: 0.3 }); hit(P(71, 'seven') - 0.05, 1); k.play('success', P(72, 'deep'), { gain: 0.45 });
    hit(P(75, 'farm') - 0.05, 1); ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', P(75, 'older') + 0.1 + i * 0.09, { f, gain: 0.42 }));
    for (let x = 0; x < 3.2; x += 0.5) k.noise(PS(76) + x, { dur: 0.45, filter: 'bandpass', f: 280, q: 6, gain: 0.05, a: 0.1, minor: true });
    k.play('ding', P(77, 'honeybee'), { f: 'G5', gain: 0.4 });
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    ctx.fillStyle = C.soil; ctx.fillRect(0, 0, W, HH); ctx.drawImage(cityCave(), 0, -300);
    put(ctx, sponge(12, 1000, 300), 640, 560, { d: 0.9 });
    antAt(ctx, 300, 650, 1.35, 0, { leaf: 1, walk: false, rider: true });
    put(ctx, wordSpr('ANT', 150, C.coral, '#fbf6ea', 22), 880, 200, { d: 1.8, rot: -0.03 });
    put(ctx, wordSpr('FARMERS', 130, C.ink, C.gold, 20), 830, 370, { d: 1.8, rot: 0.02 });
    finish(ctx, 0, [700, 400]);
    ctx.restore();
  }
  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s - 0.05 ? j : a), 0) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();
