// ================= Cut-Paper Diorama, 16:9: "Why do some people get way more freckles than others?" =================
// Long explainer. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  // ---------- BEATS: voiceover phrases (phrases.json, Kokoro af_heart) ----------
  const PH = [{"s":0.25,"e":2.03,"text":"You were born with zero freckles.","words":[["you",0.25],["were",0.45],["born",0.71],["with",0.98],["zero",1.24],["freckles",1.5]]},{"s":2.49,"e":3.56,"text":"Not a single one.","words":[["not",2.49],["a",2.74],["single",2.82],["one",3.31]]},{"s":3.91,"e":6.15,"text":"They usually start showing up around age two.","words":[["they",3.91],["usually",4.15],["start",4.57],["showing",4.88],["up",5.3],["around",5.42],["age",5.79],["two",5.97]]},{"s":6.61,"e":7.92,"text":"Then some kids get a few,","words":[["then",6.61],["some",6.89],["kids",7.16],["get",7.44],["a",7.65],["few",7.71]]},{"s":8.21,"e":9.82,"text":"while others end up with hundreds.","words":[["while",8.21],["others",8.5],["end",8.84],["up",9.02],["with",9.13],["hundreds",9.36]]},{"s":10.27,"e":13.09,"text":"So why do some people get way more freckles than others?","words":[["so",10.27],["why",10.39],["do",10.58],["some",10.7],["people",10.95],["get",11.33],["way",11.52],["more",11.71],["freckles",11.96],["than",12.46],["others",12.71]]},{"s":13.57,"e":15.23,"text":"First, what is a freckle, really?","words":[["first",13.57],["what",13.9],["is",14.17],["a",14.3],["freckle",14.37],["really",14.83]]},{"s":15.8,"e":18.75,"text":"Your skin gets its color from a pigment called melanin.","words":[["your",15.8],["skin",16.06],["gets",16.32],["its",16.58],["color",16.78],["from",17.11],["a",17.37],["pigment",17.44],["called",17.9],["melanin",18.29]]},{"s":19.17,"e":21.68,"text":"It's made by special cells called melanocytes,","words":[["its",19.17],["made",19.37],["by",19.63],["special",19.76],["cells",20.22],["called",20.55],["melanocytes",20.95]]},{"s":22.08,"e":24.27,"text":"tucked deep in the bottom layer of your skin.","words":[["tucked",22.08],["deep",22.44],["in",22.69],["the",22.81],["bottom",22.99],["layer",23.36],["of",23.66],["your",23.78],["skin",24.03]]},{"s":24.62,"e":27.08,"text":"Each one pumps out tiny packets of pigment,","words":[["each",24.62],["one",24.91],["pumps",25.12],["out",25.47],["tiny",25.68],["packets",25.96],["of",26.45],["pigment",26.59]]},{"s":27.48,"e":29.46,"text":"and hands them to the skin cells around it.","words":[["and",27.48],["hands",27.66],["them",27.95],["to",28.18],["the",28.3],["skin",28.47],["cells",28.71],["around",29.0],["it",29.35]]},{"s":29.81,"e":30.94,"text":"Here's the surprise.","words":[["heres",29.81],["the",30.16],["surprise",30.37]]},{"s":31.27,"e":33.55,"text":"A freckle doesn't have extra pigment cells.","words":[["a",31.27],["freckle",31.33],["doesnt",31.79],["have",32.18],["extra",32.44],["pigment",32.77],["cells",33.22]]},{"s":34.0,"e":36.5,"text":"It has about the same number as the skin next to it.","words":[["it",34.0],["has",34.12],["about",34.31],["the",34.62],["same",34.81],["number",35.06],["as",35.44],["the",35.56],["skin",35.75],["next",36.0],["to",36.25],["it",36.37]]},{"s":36.92,"e":38.94,"text":"Those cells are just working way harder,","words":[["those",36.92],["cells",37.23],["are",37.53],["just",37.72],["working",37.96],["way",38.39],["harder",38.57]]},{"s":39.35,"e":42.08,"text":"making a lot more melanin in one tiny spot.","words":[["making",39.35],["a",39.83],["lot",39.91],["more",40.15],["melanin",40.47],["in",41.03],["one",41.2],["tiny",41.44],["spot",41.76]]},{"s":42.49,"e":45.0,"text":"Most freckles are smaller than three millimeters.","words":[["most",42.49],["freckles",42.73],["are",43.21],["smaller",43.39],["than",43.81],["three",44.04],["millimeters",44.34]]},{"s":45.42,"e":47.24,"text":"And they show up most on fair skin,","words":[["and",45.42],["they",45.63],["show",45.9],["up",46.16],["most",46.3],["on",46.57],["fair",46.7],["skin",46.97]]},{"s":47.6,"e":49.34,"text":"which has less melanin to begin with.","words":[["which",47.6],["has",47.89],["less",48.07],["melanin",48.3],["to",48.7],["begin",48.82],["with",49.11]]},{"s":49.77,"e":51.89,"text":"So what makes those cells work overtime?","words":[["so",49.77],["what",49.9],["makes",50.16],["those",50.48],["cells",50.8],["work",51.12],["overtime",51.38]]},{"s":52.36,"e":53.04,"text":"Sunlight.","words":[["sunlight",52.36]]},{"s":53.38,"e":55.3,"text":"When ultraviolet light hits your skin,","words":[["when",53.38],["ultraviolet",53.62],["light",54.28],["hits",54.58],["your",54.82],["skin",55.06]]},{"s":55.71,"e":57.97,"text":"it switches your melanocytes into high gear.","words":[["it",55.71],["switches",55.83],["your",56.32],["melanocytes",56.56],["into",57.23],["high",57.48],["gear",57.72]]},{"s":58.32,"e":60.18,"text":"Melanin is your body's sunshade.","words":[["melanin",58.32],["is",58.82],["your",58.96],["bodys",59.25],["sunshade",59.61]]},{"s":60.53,"e":63.67,"text":"It soaks up UV light before it can damage your DNA.","words":[["it",60.53],["soaks",60.69],["up",61.08],["uv",61.23],["light",61.39],["before",61.78],["it",62.25],["can",62.41],["damage",62.65],["your",63.12],["dna",63.43]]},{"s":64.07,"e":67.24,"text":"In most skin, that extra melanin spreads out evenly,","words":[["in",64.07],["most",64.22],["skin",64.52],["that",64.82],["extra",65.13],["melanin",65.5],["spreads",66.03],["out",66.56],["evenly",66.79]]},{"s":67.57,"e":68.46,"text":"and you get a tan.","words":[["and",67.57],["you",67.77],["get",67.98],["a",68.18],["tan",68.25]]},{"s":68.91,"e":71.72,"text":"But in freckly skin, it piles up in little patches.","words":[["but",68.91],["in",69.13],["freckly",69.27],["skin",69.76],["it",70.04],["piles",70.18],["up",70.53],["in",70.67],["little",70.81],["patches",71.23]]},{"s":72.16,"e":74.1,"text":"That's why freckles darken every summer,","words":[["thats",72.16],["why",72.45],["freckles",72.63],["darken",73.1],["every",73.45],["summer",73.75]]},{"s":74.45,"e":76.98,"text":"and fade, or even disappear, in winter.","words":[["and",74.45],["fade",74.7],["or",75.04],["even",75.21],["disappear",75.54],["in",76.3],["winter",76.47]]},{"s":77.43,"e":79.7,"text":"And it's why babies, who've barely seen the sun,","words":[["and",77.43],["its",77.62],["why",77.81],["babies",78.0],["whove",78.38],["barely",78.69],["seen",79.07],["the",79.32],["sun",79.51]]},{"s":79.93,"e":80.81,"text":"don't have any yet.","words":[["dont",79.93],["have",80.18],["any",80.43],["yet",80.62]]},{"s":81.26,"e":83.25,"text":"But two kids can play in the same sun,","words":[["but",81.26],["two",81.47],["kids",81.67],["can",81.95],["play",82.15],["in",82.43],["the",82.56],["same",82.77],["sun",83.04]]},{"s":83.6,"e":85.81,"text":"and only one ends up covered in freckles.","words":[["and",83.6],["only",83.8],["one",84.07],["ends",84.27],["up",84.54],["covered",84.67],["in",85.14],["freckles",85.28]]},{"s":86.18,"e":87.52,"text":"That's where your genes come in.","words":[["thats",86.18],["where",86.45],["your",86.72],["genes",86.93],["come",87.2],["in",87.42]]},{"s":87.98,"e":90.36,"text":"The big one is a gene called MC1R.","words":[["the",87.98],["big",88.26],["one",88.53],["is",88.81],["a",88.99],["gene",89.08],["called",89.45],["mc1r",90.0]]},{"s":90.75,"e":93.06,"text":"Think of it as a switch on every melanocyte.","words":[["think",90.75],["of",91.08],["it",91.21],["as",91.34],["a",91.47],["switch",91.54],["on",91.94],["every",92.07],["melanocyte",92.4]]},{"s":93.51,"e":94.5,"text":"When it works normally,","words":[["when",93.51],["it",93.72],["works",93.82],["normally",94.08]]},{"s":94.81,"e":96.06,"text":"the cell makes eumelanin,","words":[["the",94.81],["cell",94.99],["makes",95.23],["eumelanin",95.52]]},{"s":96.45,"e":99.2,"text":"a dark brown pigment that's great at blocking sun.","words":[["a",96.45],["dark",96.52],["brown",96.79],["pigment",97.14],["thats",97.62],["great",97.96],["at",98.31],["blocking",98.44],["sun",98.99]]},{"s":99.62,"e":103.13,"text":"But scientists have found more than 80 versions of MC1R.","words":[["but",99.62],["scientists",99.85],["have",100.61],["found",100.92],["more",101.3],["than",101.61],["80",101.91],["versions",102.06],["of",102.67],["mc1r",102.82]]},{"s":103.48,"e":104.89,"text":"And some of them are ancient.","words":[["and",103.48],["some",103.67],["of",103.91],["them",104.03],["are",104.28],["ancient",104.46]]},{"s":105.31,"e":107.83,"text":"One may date back around 80,000 years.","words":[["one",105.31],["may",105.56],["date",105.81],["back",106.15],["around",106.49],["80000",106.99],["years",107.41]]},{"s":108.27,"e":111.07,"text":"Some of them flip the switch toward pheomelanin instead,","words":[["some",108.27],["of",108.51],["them",108.63],["flip",108.87],["the",109.11],["switch",109.29],["toward",109.64],["pheomelanin",110.0],["instead",110.66]]},{"s":111.54,"e":114.27,"text":"a reddish yellow pigment that protects much less.","words":[["a",111.54],["reddish",111.61],["yellow",112.07],["pigment",112.47],["that",112.94],["protects",113.2],["much",113.74],["less",114.0]]},{"s":114.69,"e":116.95,"text":"Those same versions are behind red hair.","words":[["those",114.69],["same",115.03],["versions",115.3],["are",115.85],["behind",116.06],["red",116.47],["hair",116.67]]},{"s":117.31,"e":118.94,"text":"Most redheads carry two of them,","words":[["most",117.31],["redheads",117.56],["carry",118.06],["two",118.37],["of",118.56],["them",118.69]]},{"s":119.28,"e":120.94,"text":"and almost all carry at least one.","words":[["and",119.28],["almost",119.46],["all",119.83],["carry",120.02],["at",120.32],["least",120.45],["one",120.75]]},{"s":121.33,"e":124.1,"text":"That's why red hair and freckles so often go together.","words":[["thats",121.33],["why",121.65],["red",121.84],["hair",122.04],["and",122.29],["freckles",122.49],["so",123.0],["often",123.13],["go",123.46],["together",123.58]]},{"s":124.53,"e":127.06,"text":"Still, one copy doesn't guarantee freckles.","words":[["still",124.53],["one",124.89],["copy",125.11],["doesnt",125.4],["guarantee",125.83],["freckles",126.48]]},{"s":127.53,"e":130.17,"text":"Some people without these versions freckle anyway,","words":[["some",127.53],["people",127.78],["without",128.15],["these",128.58],["versions",128.88],["freckle",129.37],["anyway",129.8]]},{"s":130.6,"e":132.83,"text":"because lots of other genes play a part too.","words":[["because",130.6],["lots",131.05],["of",131.3],["other",131.43],["genes",131.75],["play",132.07],["a",132.32],["part",132.38],["too",132.64]]},{"s":133.29,"e":135.59,"text":"Now, not every brown spot is a freckle.","words":[["now",133.29],["not",133.52],["every",133.75],["brown",134.13],["spot",134.52],["is",134.82],["a",134.97],["freckle",135.05]]},{"s":136.07,"e":138.23,"text":"Doctors call real freckles ephelides.","words":[["doctors",136.07],["call",136.54],["real",136.81],["freckles",137.08],["ephelides",137.62]]},{"s":138.65,"e":140.91,"text":"Real freckles come and go with the seasons,","words":[["real",138.65],["freckles",138.91],["come",139.43],["and",139.68],["go",139.88],["with",140.01],["the",140.26],["seasons",140.46]]},{"s":141.27,"e":142.92,"text":"and many fade as you get older.","words":[["and",141.27],["many",141.48],["fade",141.75],["as",142.03],["you",142.17],["get",142.37],["older",142.58]]},{"s":143.36,"e":146.18,"text":"Sun spots, or solar lentigines, are different.","words":[["sun",143.36],["spots",143.59],["or",143.97],["solar",144.12],["lentigines",144.5],["are",145.26],["different",145.49]]},{"s":146.59,"e":148.9,"text":"They're larger, they show up in middle age,","words":[["theyre",146.59],["larger",147.01],["they",147.43],["show",147.71],["up",147.99],["in",148.13],["middle",148.27],["age",148.69]]},{"s":149.01,"e":150.02,"text":"after years of sun,","words":[["after",149.01],["years",149.35],["of",149.69],["sun",149.82]]},{"s":150.37,"e":152.04,"text":"and they stay put all winter long.","words":[["and",150.37],["they",150.56],["stay",150.8],["put",151.05],["all",151.24],["winter",151.42],["long",151.79]]},{"s":152.49,"e":156.45,"text":"Under a microscope, sun spots really do have extra pigment cells.","words":[["under",152.49],["a",152.86],["microscope",152.93],["sun",153.68],["spots",153.91],["really",154.28],["do",154.73],["have",154.88],["extra",155.18],["pigment",155.55],["cells",156.08]]},{"s":156.84,"e":158.31,"text":"So what do freckles tell you?","words":[["so",156.84],["what",156.96],["do",157.22],["freckles",157.35],["tell",157.86],["you",158.12]]},{"s":158.86,"e":162.46,"text":"Freckly skin usually makes less of that protective brown melanin,","words":[["freckly",158.86],["skin",159.32],["usually",159.58],["makes",160.04],["less",160.37],["of",160.63],["that",160.76],["protective",161.02],["brown",161.68],["melanin",162.01]]},{"s":162.84,"e":164.31,"text":"so it burns more easily.","words":[["so",162.84],["it",163.0],["burns",163.15],["more",163.54],["easily",163.85]]},{"s":164.75,"e":167.03,"text":"That's why skin doctors tell freckly people,","words":[["thats",164.75],["why",165.07],["skin",165.26],["doctors",165.51],["tell",165.95],["freckly",166.21],["people",166.65]]},{"s":167.36,"e":169.28,"text":"to be extra careful with sunscreen.","words":[["to",167.36],["be",167.49],["extra",167.62],["careful",167.96],["with",168.42],["sunscreen",168.68]]},{"s":169.69,"e":171.53,"text":"So freckles aren't random dots.","words":[["so",169.69],["freckles",169.84],["arent",170.43],["random",170.8],["dots",171.24]]},{"s":171.88,"e":173.53,"text":"They're tiny patches of sunshade,","words":[["theyre",171.88],["tiny",172.25],["patches",172.49],["of",172.92],["sunshade",173.04]]},{"s":173.87,"e":175.17,"text":"switched on extra hard,","words":[["switched",173.87],["on",174.42],["extra",174.56],["hard",174.9]]},{"s":175.47,"e":177.44,"text":"mostly thanks to one tiny gene.","words":[["mostly",175.47],["thanks",175.94],["to",176.42],["one",176.57],["tiny",176.81],["gene",177.12]]},{"s":177.87,"e":179.69,"text":"Next up, how do your lungs breathe,","words":[["next",177.87],["up",178.14],["how",178.27],["do",178.47],["your",178.61],["lungs",178.88],["breathe",179.22]]},{"s":180.05,"e":181.76,"text":"more than 20,000 times a day?","words":[["more",180.05],["than",180.36],["20000",180.67],["times",181.06],["a",181.45],["day",181.52]]}];
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

  // ================= palette + freckle-world sprites (all cut paper, cached) =================
  const C = { ink: '#1f2a55', navy: '#17305e', coral: '#e8604a', red: '#d9473b', gold: '#f2b545', teal: '#58b0a6', tealD: '#2f7f86', card: '#fbf6ea', cream: '#f3ecdc', sky: '#9fd0e0', skyL: '#cfe9ef', skin: '#f2c6a2', skinL: '#f8dcc4', skinD: '#d99d78', tan: '#d69a6c', derm: '#e9a796', dermD: '#cf8476', fr: '#b8703f', frD: '#8a4a28', eu: '#55301d', pheo: '#e88a3a', redHair: '#c8502a', brownHair: '#5b3a26', blond: '#e8c46a', uv: '#7c5aa6', lilac: '#b79bd8', pink: '#ee8fb0', pinkD: '#c8588c', green: '#5fae6a', leaf: '#3d8a5a', grey: '#8a93a8', winter: '#cfe2ee', snow: '#f4f8fb', dark: '#222033' };
  const blobPath = (x, pts) => { x.beginPath(); poly(x, pts); x.fill(); };
  const ell = (x, seed, cx, cy, rx, ry, rot = 0) => blobPath(x, ellPts(H.rng(seed), cx, cy, rx, ry, rot, 0.5));
  const paperBg = (key, col, col2) => cache('pb' + key, () => compose(W, HH, [[(x) => { x.fillStyle = col; x.fillRect(0, 0, W, HH); }, 0], [(x) => { const r = H.rng(key.length * 7 + 5); x.fillStyle = col2; x.beginPath(); poly(x, circPts(r, 640, 380, 500, 18, 1)); x.fill(); }, 0.6]]));
  // outdoor diorama: sky card, rolling hills, grass strip
  const meadow = (key, sky = C.sky, hill = '#8cc47a', hill2 = '#5f9e5a', ground = '#3d7a4a') => cache('md' + key, () => compose(W, HH, [
    [(x) => { x.fillStyle = sky; x.fillRect(0, 0, W, HH); }, 0],
    [(x) => { const r = H.rng(key.length + 11); x.fillStyle = 'rgba(255,255,255,0.85)'; [[200, 120], [980, 90], [640, 170]].forEach(([a, b], i) => { ell(x, 400 + i * 3 + key.length, a, b, 90, 30); ell(x, 410 + i * 3 + key.length, a + 50, b - 18, 60, 28); }); }, 0.4],
    [(x) => { const r = H.rng(key.length + 1); x.fillStyle = hill; x.beginPath(); poly(x, [...ridge(r, -10, W + 10, (q) => 470 + Math.sin(q * 0.006 + key.length) * 40), [W + 10, HH + 10], [-10, HH + 10]]); x.fill(); }, 0.8],
    [(x) => { const r = H.rng(key.length + 2); x.fillStyle = hill2; x.beginPath(); poly(x, [...ridge(r, -10, W + 10, (q) => 560 + Math.sin(q * 0.009 + key.length * 2) * 26), [W + 10, HH + 10], [-10, HH + 10]]); x.fill(); }, 0.9],
    [(x) => { const r = H.rng(key.length + 3); x.fillStyle = ground; x.beginPath(); poly(x, [...ridge(r, -10, W + 10, (q) => 655 + Math.sin(q * 0.013) * 10), [W + 10, HH + 10], [-10, HH + 10]]); x.fill(); }, 1.1],
  ]));
  // a cut-paper face. style: 'short' | 'pig' | 'baby' | 'bob'
  const faceS = (key, skin, hair, style = 'short') => cache('face' + key, () => compose(380, 420, [
    ...(style === 'pig' || style === 'bob' ? [[(x) => { x.fillStyle = hair; if (style === 'pig') { ell(x, 501, 48, 250, 44, 70, 0.3); ell(x, 502, 332, 250, 44, 70, -0.3); } else { ell(x, 503, 190, 220, 168, 175); } }, 0.6]] : []),
    [(x) => { x.fillStyle = skin; ell(x, 510, 54, 225, 24, 32); ell(x, 511, 326, 225, 24, 32); ell(x, 512, 190, 225, 132, style === 'baby' ? 140 : 152); }, 0.7],
    ...(style !== 'baby' ? [[(x) => { x.fillStyle = hair; x.beginPath(); const r = H.rng(520 + key.length); const pts = []; for (let i = 0; i <= 20; i++) { const a = Math.PI + (i / 20) * Math.PI; pts.push([190 + Math.cos(a) * 142, 190 + Math.sin(a) * 140]); } for (let i = 0; i <= 10; i++) { const u = i / 10; pts.push([332 - u * 284, (style === 'bob' ? 150 : 140) + (i % 2 ? 26 : 0) + r.gauss()]); } poly(x, pts); x.fill(); }, 0.45]] : [[(x) => { x.fillStyle = hair; ell(x, 521, 190, 92, 26, 14, 0.4); }, 0.3]]),
    [(x) => { x.fillStyle = C.dark; ell(x, 530, 140, 228, 11, 14); ell(x, 531, 240, 228, 11, 14); x.fillStyle = C.card; ell(x, 532, 144, 222, 3.5, 3.5); ell(x, 533, 244, 222, 3.5, 3.5);
      x.strokeStyle = C.skinD; x.lineWidth = 6; x.lineCap = 'round'; x.beginPath(); x.moveTo(190, 240); x.quadraticCurveTo(200, 270, 184, 276); x.stroke();
      x.strokeStyle = '#9c3b3b'; x.lineWidth = 7; x.beginPath(); x.arc(190, 296, 34, 0.25 * Math.PI, 0.75 * Math.PI); x.stroke();
      x.fillStyle = 'rgba(238,120,120,0.35)'; ell(x, 534, 108, 282, 26, 15); ell(x, 535, 272, 282, 26, 15); }, 0.2],
  ]));
  // freckle positions in face-sprite coordinates (cheeks + nose bridge), seeded
  const FRK = (() => { const r = H.rng(777), out = []; let guard = 0; while (out.length < 260 && guard++ < 5000) { const side = r() < 0.5 ? -1 : 1, nose = r() < 0.18; const x = nose ? 190 + r.range(-34, 34) : 190 + side * r.range(30, 118), y = nose ? r.range(228, 268) : r.range(236, 320); const dx = (x - 190) / 125, dy = (y - 262) / 70; if (dx * dx + dy * dy > 1.15) continue; if (Math.hypot(x - 140, y - 228) < 22 || Math.hypot(x - 240, y - 228) < 22) continue; if (y > 280 && Math.abs(x - 190) < 46) continue; out.push([x, y, r.range(3.2, 6.8), r()]); } return out; })();
  const dotS = (col) => cache('dot' + col, () => paperize(18, 18, (x) => { x.fillStyle = col; ell(x, 540, 9, 9, 7, 6.5); }, { seed: 41, hi: 0.2, lo: 0.15 }));
  // draw a face + n freckles. st: freckles pop from st over spread seconds. fade 0..1 lightens them.
  const face = (ctx, key, skin, hair, style, x, y, s, t, o = {}) => {
    const spr = faceS(key, skin, hair, style); put(ctx, spr, x, y, { s, d: o.d ?? 1.1, rot: o.rot ?? 0 });
    const n = o.n || 0; if (!n) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot ?? 0); ctx.scale(s, s); ctx.translate(-190, -210);
    const a = o.alpha ?? 1, col = o.col || C.fr;
    for (let i = 0; i < n; i++) { const f = FRK[i]; let k = 1; if (o.st != null) { const st = o.st + (i / n) * (o.spread ?? 1.2); k = cl((t - st) / 0.18); if (k <= 0) continue; k = E.back(k); } ctx.globalAlpha = a * (0.65 + f[3] * 0.35); const sp = dotS(col), r = f[2] * k * (o.fs ?? (n > 100 ? 0.62 : n > 40 ? 0.8 : 1)) / 7; ctx.drawImage(sp, f[0] - 9 * r, f[1] - 9 * r, 18 * r, 18 * r); }
    ctx.restore();
  };
  // skin cross-section diorama: surface, epidermis cells, basal line, dermis
  const SK = { top: 170, basal: 470 };
  const skinLayers = (key, tint = C.skinL) => cache('sk' + key + tint, () => compose(W, HH, [
    [(x) => { x.fillStyle = C.skyL; x.fillRect(0, 0, W, HH); }, 0],
    [(x) => { const r = H.rng(61); x.fillStyle = C.derm; x.beginPath(); poly(x, [...ridge(r, -10, W + 10, (q) => SK.basal + Math.sin(q * 0.02) * 18), [W + 10, HH + 10], [-10, HH + 10]]); x.fill(); }, 0.6],
    [(x) => { const r = H.rng(62); x.fillStyle = tint; x.beginPath(); poly(x, [...ridge(r, -10, W + 10, (q) => SK.top + Math.sin(q * 0.008) * 6), ...ridge(r, -10, W + 10, (q) => SK.basal + Math.sin(q * 0.02) * 18).reverse()]); x.fill(); }, 0.9],
    [(x) => { const r = H.rng(63); for (let row = 0; row < 4; row++) for (let i = 0; i < 12; i++) { const cx = 60 + i * 106 + (row % 2) * 53 + r.range(-6, 6), cy = SK.top + 44 + row * 72; x.fillStyle = row === 0 ? '#f1d2b8' : '#f5d8c0'; ell(x, 600 + row * 20 + i, cx, cy, 48, 30); x.fillStyle = 'rgba(190,130,100,0.35)'; ell(x, 700 + row * 20 + i, cx, cy, 10, 8); } }, 0.25],
    [(x) => { const r = H.rng(64); x.strokeStyle = C.dermD; x.lineWidth = 7; x.lineCap = 'round'; for (let i = 0; i < 6; i++) { const bx = 100 + i * 220; x.beginPath(); x.moveTo(bx, HH); x.quadraticCurveTo(bx + 50, 600, bx + r.range(-30, 60), 540); x.stroke(); } }, 0.2],
  ]));
  // melanocyte: dark star-shaped cell with branching arms
  const ARMS = [[-2.6, 120], [-2.0, 150], [-1.35, 170], [-0.7, 150], [-0.15, 120]];
  const melS = (glow = 0) => cache('mel' + glow, () => compose(380, 260, [
    [(x) => { x.strokeStyle = glow ? '#7a4a2c' : '#6a3f26'; x.lineCap = 'round'; ARMS.forEach(([a, l]) => { x.lineWidth = 16; x.beginPath(); x.moveTo(190, 200); const ex = 190 + Math.cos(a) * l, ey = 200 + Math.sin(a) * l; x.quadraticCurveTo(190 + Math.cos(a + 0.3) * l * 0.5, 200 + Math.sin(a + 0.3) * l * 0.5, ex, ey); x.stroke(); x.lineWidth = 9; x.beginPath(); x.moveTo(ex, ey); x.lineTo(ex + Math.cos(a - 0.5) * 26, ey + Math.sin(a - 0.5) * 26); x.stroke(); }); }, 0.4],
    [(x) => { x.fillStyle = glow ? '#8a5432' : '#7a4a2c'; ell(x, 550, 190, 205, 62, 44); x.fillStyle = '#3d2214'; ell(x, 551, 190, 208, 24, 18); }, 0.3],
  ]));
  const armTip = (k, mx, my, s) => { const [a, l] = ARMS[k]; return [mx + (Math.cos(a) * l + Math.cos(a - 0.5) * 26) * s, my + (Math.sin(a) * l + Math.sin(a - 0.5) * 26 - 5) * s]; };
  const sunS = () => cache('sun', () => compose(360, 360, [[(x) => { x.fillStyle = C.gold; x.beginPath(); for (let i = 0; i < 28; i++) { const a = (i / 28) * TAU, rr = i % 2 ? 120 : 172; const px = 180 + Math.cos(a) * rr, py = 180 + Math.sin(a) * rr; i ? x.lineTo(px, py) : x.moveTo(px, py); } x.closePath(); x.fill(); }, 0.6], [(x) => { x.fillStyle = '#f7d36a'; x.beginPath(); poly(x, circPts(H.rng(91), 180, 180, 104, 12, 0.5)); x.fill(); }, 0.4], [(x) => { x.fillStyle = C.dark; ell(x, 92, 150, 170, 9, 12); ell(x, 93, 210, 170, 9, 12); x.strokeStyle = C.dark; x.lineWidth = 7; x.lineCap = 'round'; x.beginPath(); x.arc(180, 192, 30, 0.2 * Math.PI, 0.8 * Math.PI); x.stroke(); }, 0.15]]));
  const dnaS = (len = 700) => cache('dna' + len, () => compose(len, 220, [[(x) => { x.lineWidth = 9; x.lineCap = 'round'; for (let i = 0; i < len - 40; i += 32) { const u = i / 90, y1 = 110 + Math.sin(u) * 70, y2 = 110 - Math.sin(u) * 70; x.strokeStyle = [C.coral, C.teal, C.gold, C.lilac][(i / 32) % 4]; x.beginPath(); x.moveTo(20 + i, y1); x.lineTo(20 + i, y2); x.stroke(); } }, 0.2], [(x) => { x.lineWidth = 15; x.lineCap = 'round'; [1, -1].forEach((sg) => { x.strokeStyle = sg > 0 ? C.ink : C.tealD; x.beginPath(); for (let i = 0; i <= len - 40; i += 6) { const u = i / 90, y = 110 + sg * Math.sin(u) * 70; i ? x.lineTo(20 + i, y) : x.moveTo(20, y); } x.stroke(); }); }, 0.4]]));
  const umbrellaS = (col) => cache('umb' + col, () => compose(360, 320, [[(x) => { x.strokeStyle = C.ink; x.lineWidth = 12; x.lineCap = 'round'; x.beginPath(); x.moveTo(180, 120); x.lineTo(180, 280); x.arc(205, 280, 25, Math.PI, 0, true); x.stroke(); }, 0.3], [(x) => { x.fillStyle = col; x.beginPath(); x.moveTo(20, 140); x.quadraticCurveTo(180, -40, 340, 140); for (let i = 0; i < 5; i++) { const a = 340 - i * 64; x.quadraticCurveTo(a - 32, 112, a - 64, 140); } x.closePath(); x.fill(); }, 0.6]]));
  const switchS = (on) => cache('sw' + on, () => compose(200, 280, [[(x) => { x.fillStyle = C.card; x.beginPath(); poly(x, cutLines(H.rng(81), [[14, 14], [186, 14], [186, 266], [14, 266], [14, 14]], 24, 0.5)); x.fill(); }, 0.6], [(x) => { x.fillStyle = C.ink; x.fillRect(70, 60, 60, 160); }, 0.2], [(x) => { x.fillStyle = on ? C.eu : C.pheo; x.fillRect(64, on ? 56 : 136, 72, 88); }, 0.5]]));
  const rulerS = () => cache('ruler', () => compose(900, 160, [[(x) => { x.fillStyle = '#f2d27a'; x.beginPath(); poly(x, cutLines(H.rng(83), [[10, 20], [890, 20], [890, 140], [10, 140], [10, 20]], 30, 0.5)); x.fill(); }, 0.6], [(x) => { x.fillStyle = C.ink; for (let i = 0; i <= 40; i++) { const xx = 50 + i * 20, h = i % 10 === 0 ? 56 : i % 5 === 0 ? 40 : 24; x.fillRect(xx - 2, 20, 4, h); } x.font = AF(26); [0, 1, 2, 3, 4].forEach((n) => { x.fillText(String(n), 50 + n * 200 - 8, 124); }); }, 0.15]]));
  const bottleS = () => cache('bottle', () => compose(220, 380, [[(x) => { x.fillStyle = C.coral; x.fillRect(80, 10, 60, 70); }, 0.4], [(x) => { x.fillStyle = C.teal; x.beginPath(); x.moveTo(40, 110); x.quadraticCurveTo(110, 60, 180, 110); x.lineTo(190, 350); x.quadraticCurveTo(110, 375, 30, 350); x.closePath(); x.fill(); }, 0.7], [(x) => { x.fillStyle = C.card; x.fillRect(48, 170, 124, 120); x.fillStyle = C.coral; x.font = AF(40); x.fillText('SPF', 66, 230); x.font = AF(44); x.fillStyle = C.ink; x.fillText('50', 82, 278); }, 0.3]]));
  const hatS = () => cache('hat', () => compose(420, 200, [[(x) => { x.fillStyle = '#e9c77a'; ell(x, 85, 210, 140, 200, 46); }, 0.6], [(x) => { x.fillStyle = '#e9c77a'; x.beginPath(); x.moveTo(110, 140); x.quadraticCurveTo(120, 20, 210, 22); x.quadraticCurveTo(300, 20, 310, 140); x.closePath(); x.fill(); x.fillStyle = C.coral; x.fillRect(112, 104, 196, 26); }, 0.4]]));
  const lungsS = () => cache('lungs', () => compose(520, 460, [[(x) => { x.strokeStyle = C.cream; x.lineWidth = 34; x.lineCap = 'round'; x.beginPath(); x.moveTo(260, 20); x.lineTo(260, 170); x.moveTo(260, 170); x.lineTo(180, 230); x.moveTo(260, 170); x.lineTo(340, 230); x.stroke(); }, 0.3], [(x) => { x.fillStyle = C.pink; x.beginPath(); x.moveTo(230, 170); x.bezierCurveTo(120, 120, 30, 260, 50, 400); x.quadraticCurveTo(140, 450, 235, 400); x.closePath(); x.fill(); x.beginPath(); x.moveTo(290, 170); x.bezierCurveTo(400, 120, 490, 260, 470, 400); x.quadraticCurveTo(380, 450, 285, 400); x.closePath(); x.fill(); }, 0.6], [(x) => { x.strokeStyle = C.pinkD; x.lineWidth = 8; x.lineCap = 'round'; [[180, 230, 120, 330], [180, 230, 190, 360], [340, 230, 400, 330], [340, 230, 330, 360]].forEach(([a, b, c, d]) => { x.beginPath(); x.moveTo(a, b); x.lineTo(c, d); x.stroke(); }); }, 0.2]]));
  const geneCard = (lbl, col) => cache('gc' + lbl + col, () => { const w = Math.max(170, measure(lbl, AF(34)) + 60); return compose(w, 120, [[(x) => { x.fillStyle = C.card; x.beginPath(); poly(x, cutLines(H.rng(lbl.length + 3), [[8, 8], [w - 8, 8], [w - 8, 112], [8, 112], [8, 8]], 22, 0.5)); x.fill(); }, 0.6], [(x) => { x.fillStyle = col; x.fillRect(20, 20, w - 40, 14); x.font = AF(34); x.fillStyle = C.ink; x.fillText(lbl, 30, 88); }, 0.2]]); });
  const packetS = (col = C.eu) => cache('pk' + col, () => paperize(28, 28, (x) => { x.fillStyle = col; ell(x, 560, 14, 14, 10, 9); }, { seed: 44, hi: 0.25 }));
  const sprAt = (ctx, spr, x, y, t, st, op = {}) => { const A = op.pop ? popIn(t, st, op.du ?? 0.35) : dropIn(t, st, op.du ?? 0.4, op.dist ?? 60); if (!A) return null; put(ctx, spr, x, y + (A.dy || 0), { s: A.s * (op.s ?? 1), rot: op.rot, d: (op.d ?? 1) + A.d }); return A; };
  const burstAt = (ctx, x, y, t, st, s = 1, col) => { const u = cl((t - st) / 0.4); if (u <= 0) return; put(ctx, burstSpr(col), x, y, { s: s * (0.2 + 0.8 * E.back(u)), rot: t * 0.25, d: 0.7 }); };
  const kb = (ctx, t, a, b, s0, s1, cx = 640, cy = 360) => { const u = E.inOut(ph(t, a, b)), s = s0 + (s1 - s0) * u; ctx.translate(cx, cy); ctx.scale(s, s); ctx.translate(-cx, -cy); };
  const cardS = (w, h, col = C.card, seed = 1) => cache('card' + w + h + col, () => paperize(w, h, (x) => { x.fillStyle = col; x.beginPath(); poly(x, cutLines(H.rng(seed + w), [[6, 6], [w - 6, 6], [w - 6, h - 6], [6, h - 6], [6, 6]], 26, 0.6)); x.fill(); }, { seed: seed + 40 }));
  const crossOn = (ctx, x, y, t, st, s = 1) => { const A = popIn(t, st, 0.3); if (A) put(ctx, crossSpr(), x, y, { s: A.s * s, d: 1 + A.d }); };
  const checkOn = (ctx, x, y, t, st, s = 1) => { const A = popIn(t, st, 0.3); if (A) put(ctx, checkSpr(), x, y, { s: A.s * s, d: 1 + A.d }); };
  // a sign card with one or two lines of cut letters
  const sign = (ctx, t, st, x, y, w, h, l1, c1, p1, l2, c2, p2, o = {}) => { const A = dropIn(t, st, 0.4, 60); if (!A) return; put(ctx, cardS(w, h, o.bg || C.card), x, y + A.dy, { d: 1.2 + A.d, rot: o.rot ?? 0 }); if (l2) { put(ctx, wordSpr(l1, p1, c1, null), x, y - h * 0.2 + A.dy, { d: 0.25 }); put(ctx, wordSpr(l2, p2, c2, null), x, y + h * 0.24 + A.dy, { d: 0.25 }); } else put(ctx, wordSpr(l1, p1, c1, null), x, y + A.dy, { d: 0.25 }); };
  const SKIN = { a: C.skin, b: '#eebd96' };

  // ================= scenes: hook =================
  const sBaby = (ctx, t) => {
    ctx.drawImage(paperBg('baby', '#f6d9c4', '#f9e8da'), 0, 0);
    ctx.save(); kb(ctx, t, 0, PE(1), 1.08, 1);
    const blanket = cache('blanket', () => compose(760, 300, [[(x) => { x.fillStyle = C.sky; x.beginPath(); x.moveTo(20, 280); x.quadraticCurveTo(40, 40, 380, 30); x.quadraticCurveTo(720, 40, 740, 280); x.closePath(); x.fill(); }, 0.8], [(x) => { x.fillStyle = C.card; for (let i = 0; i < 9; i++) ell(x, 570 + i, 90 + i * 72, 150 + Math.sin(i) * 20, 14, 14); }, 0.2]]));
    face(ctx, 'baby', '#f6cfb1', C.blond, 'baby', 420, 300, 0.95, t);
    put(ctx, blanket, 420, 560, { d: 1.2 });
    ctx.restore();
    const A = dropIn(t, P(0, 'zero') - 0.15, 0.4, 70);
    if (A) { put(ctx, cardS(420, 300, C.card), 960, 300 + A.dy, { d: 1.3 + A.d, rot: 0.02 }); numberRow(ctx, '0', 960, 260 + A.dy, 150, C.coral, { center: true }); put(ctx, wordSpr('FRECKLES', 52, C.ink, null), 960, 390 + A.dy, { d: 0.3 }); }
    tag(ctx, 'NOT ONE', 960, 560, t, P(1, 'single') - 0.15, { px: 50, col: C.coral, rot: -0.03 });
  };
  const sAgeTwo = (ctx, t) => {
    ctx.drawImage(meadow('age'), 0, 0);
    burstAt(ctx, 640, 330, t, PS(2), 1.25, C.gold);
    face(ctx, 'tod', C.skin, C.redHair, 'short', 640, 330, 1.0, t, { n: 26, st: P(2, 'showing') - 0.1, spread: 1.3 });
    const A = dropIn(t, P(2, 'two') - 0.15, 0.4, 60);
    if (A) { put(ctx, cardS(280, 170, C.coral), 220, 170 + A.dy, { d: 1.2 + A.d, rot: -0.05 }); put(ctx, wordSpr('AGE', 34, C.card, null), 220, 128 + A.dy, { d: 0.2, rot: -0.05 }); numberRow(ctx, '2', 220, 196 + A.dy, 84, C.ink, { center: true }); }
  };
  const sKids = (ctx, t) => {
    ctx.drawImage(paperBg('kids', '#2f6b8a', '#4d8fa8'), 0, 0);
    const a = P(3, 'few') - 0.3, b = P(4, 'hundreds') - 0.6;
    face(ctx, 'kA', '#f0c39e', C.brownHair, 'bob', 330, 300, 0.92, t, { n: 7, st: a, spread: 0.6 });
    face(ctx, 'kB', '#f6d0b0', C.redHair, 'pig', 950, 300, 0.92, t, { n: 220, st: b, spread: 1.6 });
    tag(ctx, 'A FEW', 330, 610, t, P(3, 'few') - 0.15, { px: 56, col: C.ink });
    tag(ctx, 'HUNDREDS', 950, 610, t, P(4, 'hundreds') - 0.15, { px: 60, col: C.coral });
  };
  const sQuestion = (ctx, t) => {
    ctx.drawImage(paperBg('q', '#f2b545', '#f6cc6e'), 0, 0);
    face(ctx, 'qL', '#f0c39e', C.brownHair, 'short', 170, 420, 0.55, t, { n: 10, rot: -0.15 });
    face(ctx, 'qR', '#f6d0b0', C.redHair, 'bob', 1110, 420, 0.55, t, { n: 200, rot: 0.15 });
    cutTitle(ctx, 'WHY DO SOME', 640, 230, 86, t, PS(5), { step: 0.03, cols: [C.ink, C.coral, C.ink] });
    cutTitle(ctx, 'GET MORE?', 640, 370, 112, t, P(5, 'more') - 0.2, { step: 0.04, cols: [C.coral, C.ink, C.coral] });
  };
  // ================= chapter 1: what a freckle is =================
  const sZoomFace = (ctx, t) => {
    ctx.drawImage(paperBg('zf', C.skyL, '#e6f3f5'), 0, 0);
    const a = PS(6), z = E.inOut(ph(t, a + 0.9, PE(6) + 0.3));
    ctx.save(); ctx.translate(640, 360); ctx.scale(1 + z * 1.6, 1 + z * 1.6); ctx.translate(-640 - z * 70, -360 - z * 40);
    face(ctx, 'zf', '#f6d0b0', C.redHair, 'short', 640, 360, 1.15, t, { n: 90 });
    ctx.restore();
    const A = popIn(t, P(6, 'freckle') - 0.1, 0.35);
    if (A) put(ctx, ringSpr(C.coral), 640, 360, { s: A.s * 0.55, d: 0.8 });
    tag(ctx, 'WHAT IS A FRECKLE?', 640, 640, t, P(6, 'freckle') - 0.1, { px: 52, col: C.ink });
  };
  const sMelanin = (ctx, t) => {
    ctx.drawImage(skinLayers('m'), 0, 0);
    tag(ctx, 'YOUR SKIN', 220, 90, t, PS(7), { px: 44, col: C.ink, rot: -0.03 });
    const r = H.rng(5), st = P(7, 'melanin') - 0.4;
    for (let i = 0; i < 40; i++) { const A = popIn(t, st + r() * 0.5, 0.25); const x = 40 + r() * 1200, y = SK.top + 20 + r() * 270; if (A) put(ctx, packetS(), x, y, { s: A.s * 0.8, d: 0.3 }); }
    sign(ctx, t, P(7, 'melanin') - 0.15, 900, 600, 520, 130, 'MELANIN', C.eu, 70, null);
    tag(ctx, 'PIGMENT', 470, 610, t, P(7, 'pigment') - 0.15, { px: 40, col: C.coral, rot: 0.03 });
  };
  const sMelanocyte = (ctx, t) => {
    ctx.drawImage(skinLayers('mc'), 0, 0);
    const mx = 640, my = SK.basal - 70;
    sprAt(ctx, melS(), mx, my, t, P(8, 'cells') - 0.3, { s: 1.15, pop: true });
    tag(ctx, 'MELANOCYTE', 640, 90, t, P(8, 'melanocytes') - 0.15, { px: 64, col: C.eu });
    const b = P(9, 'bottom') - 0.15;
    if (t > b) { arrow(ctx, 1080, 640, 1000, 560, 860, SK.basal + 4, cl((t - b) / 0.45), C.coral, 7); tag(ctx, 'BOTTOM LAYER', 1050, 660, t, b, { px: 40, col: C.coral }); }
  };
  const sPackets = (ctx, t) => {
    ctx.drawImage(skinLayers('pk'), 0, 0);
    const mx = 640, my = SK.basal - 70, s = 1.15;
    put(ctx, melS(), mx, my, { s, d: 1 });
    const a = P(10, 'packets') - 0.4, hand = P(11, 'hands') - 0.2;
    for (let k = 0; k < 5; k++) for (let j = 0; j < 4; j++) {
      const st = a + j * 0.55 + k * 0.08, u = cl((t - st) / 1.4); if (u <= 0) continue;
      const [tx, ty] = armTip(k, mx, my, s), ex = tx + (tx - mx) * 0.35, ey = ty - 70 - j * 8;
      const e = E.inOut(u), x = H.lerp(mx, tx, cl(e * 1.6)) + (ex - tx) * cl(e * 2 - 1), y = H.lerp(my, ty, cl(e * 1.6)) + (ey - ty) * cl(e * 2 - 1);
      put(ctx, packetS(), x, y, { s: 0.9, d: 0.3 });
    }
    tag(ctx, 'PIGMENT PACKETS', 330, 90, t, P(10, 'packets') - 0.15, { px: 44, col: C.eu, rot: -0.02 });
    if (t > hand) { arrow(ctx, 1000, 150, 1080, 200, 1040, 250, cl((t - hand) / 0.4), C.coral, 8); tag(ctx, 'HANDED TO SKIN CELLS', 930, 110, t, hand, { px: 38, col: C.coral }); }
  };
  const sSurprise = (ctx, t) => {
    ctx.drawImage(paperBg('sur', '#2b2d5a', '#3d4a7a'), 0, 0);
    tag(ctx, 'THE SURPRISE', 640, 70, t, PS(12), { px: 50, col: C.coral, rot: -0.02 });
    const panel = (x, lbl, freck, st) => { const A = dropIn(t, st, 0.4, 70); if (!A) return; const L = cache('pan' + freck, () => compose(500, 380, [[(c) => { c.fillStyle = C.skinL; c.beginPath(); poly(c, cutLines(H.rng(freck ? 3 : 4), [[10, 10], [490, 10], [490, 370], [10, 370], [10, 10]], 26, 0.5)); c.fill(); }, 0.6], [(c) => { c.fillStyle = freck ? '#d79a6e' : '#f0cfb4'; c.fillRect(30, 30, 440, 230); c.fillStyle = C.derm; c.fillRect(30, 260, 440, 90); }, 0.2]]));
      put(ctx, L, x, 360 + A.dy, { d: 1.2 + A.d }); const mx0 = x - 160; for (let i = 0; i < 5; i++) put(ctx, melS(freck ? 1 : 0), mx0 + i * 80, 400 + A.dy, { s: 0.24, d: 0.3 }); put(ctx, wordSpr(lbl, 38, C.card, C.ink, 10), x, 590 + A.dy, { d: 0.8 }); };
    panel(340, 'NORMAL SKIN', false, PS(13) - 0.3);
    panel(940, 'FRECKLE', true, PS(13) + 0.1);
    if (t < P(14, 'same') - 0.1) { tag(ctx, 'EXTRA CELLS?', 940, 140, t, P(13, 'extra') - 0.15, { px: 38, col: C.ink }); crossOn(ctx, 1110, 140, t, P(13, 'extra') + 0.15, 0.7); }
    const A = popIn(t, P(14, 'same') - 0.1, 0.35);
    if (A) { put(ctx, wordSpr('5', 80, C.ink, C.card, 12), 340, 280, { s: A.s, d: 1 }); put(ctx, wordSpr('5', 80, C.ink, C.card, 12), 940, 280, { s: A.s, d: 1 }); put(ctx, wordSpr('=', 90, C.gold, null), 640, 360, { s: A.s, d: 0.8 }); }
  };
  const sHarder = (ctx, t) => {
    ctx.drawImage(skinLayers('hd', '#eac2a0'), 0, 0);
    const mx = 640, my = SK.basal - 70, a = PS(15), wob = t > a ? Math.sin(t * 18) * 0.03 : 0;
    put(ctx, melS(1), mx, my, { s: 1.2 * (1 + wob), d: 1.1 });
    const r = H.rng(9), st = P(16, 'more') - 0.3;
    for (let i = 0; i < 70; i++) { const d = st + i * 0.03, A = popIn(t, d, 0.22); if (!A) continue; const ang = -Math.PI / 2 + r.range(-1.2, 1.2), rr = r.range(150, 280); put(ctx, packetS(), mx + Math.cos(ang) * rr * 1.3, my + Math.sin(ang) * rr * 0.9, { s: A.s, d: 0.3 }); }
    tag(ctx, 'WORKING HARDER', 640, 80, t, P(15, 'harder') - 0.15, { px: 56, col: C.ink });
    sign(ctx, t, P(16, 'melanin') - 0.15, 640, 640, 620, 110, 'MORE MELANIN', C.eu, 60, null);
  };
  const sSize = (ctx, t) => {
    ctx.drawImage(paperBg('sz', C.cream, '#ead9b8'), 0, 0);
    sprAt(ctx, rulerS(), 640, 420, t, PS(17) - 0.1, { s: 1.15 });
    const A = popIn(t, P(17, 'three') - 0.1, 0.35);
    if (A) { put(ctx, dotS(C.fr), 640 - 230 + 60 * 1.15, 330, { s: A.s * 3.2, d: 0.6 }); arrow(ctx, 460, 300, 520, 250, 600, 280, cl((t - P(17, 'three')) / 0.4), C.coral, 9); }
    const B = dropIn(t, P(17, 'millimeters') - 0.2, 0.4, 60);
    if (B) { put(ctx, cardS(520, 150, C.coral), 870, 180 + B.dy, { d: 1.2 + B.d, rot: 0.02 }); put(ctx, wordSpr('UNDER 3 MM', 62, C.card, null), 870, 180 + B.dy, { d: 0.3 }); }
  };
  const sFair = (ctx, t) => {
    ctx.drawImage(paperBg('fair', '#3d5f7a', '#4f7f9a'), 0, 0);
    const tones = ['#f8dcc4', '#f0c39e', '#d49a6a', '#a8704a', '#6e4630'];
    tones.forEach((c, i) => { const A = dropIn(t, PS(18) - 0.2 + i * 0.1, 0.4, 60); if (A) put(ctx, cache('sw' + c, () => paperize(190, 260, (x) => { x.fillStyle = c; x.beginPath(); poly(x, cutLines(H.rng(i + 50), [[8, 8], [182, 8], [182, 252], [8, 252], [8, 8]], 22, 0.5)); x.fill(); }, { seed: 60 + i })), 240 + i * 200, 330 + A.dy, { d: 1 + A.d }); });
    const b = P(18, 'fair') - 0.1;
    if (t > b) { const A = popIn(t, b, 0.35); if (A) put(ctx, ringSpr(C.gold), 240, 330, { s: A.s * 0.95, rot: 1.57, d: 0.7 }); }
    tag(ctx, 'MOST ON FAIR SKIN', 640, 580, t, P(18, 'fair') - 0.1, { px: 52, col: C.card, back: C.ink });
    tag(ctx, 'LESS MELANIN TO START', 640, 660, t, P(19, 'less') - 0.15, { px: 40, col: C.eu });
  };
  // ================= chapter 2: the sun switch =================
  const sSun = (ctx, t) => {
    ctx.drawImage(meadow('sun', '#f6d9a0', '#a9cf7a', '#76ad62'), 0, 0);
    const a = P(21, 'sunlight') - 0.2, A = popIn(t, a, 0.5);
    if (A) put(ctx, sunS(), 640, 300, { s: A.s * 1.2, rot: t * 0.15, d: 1 });
    tag(ctx, 'OVERTIME?', 640, 110, t, P(20, 'overtime') - 0.15, { px: 50, col: C.ink, rot: -0.02 });
    cutTitle(ctx, 'SUNLIGHT', 640, 560, 100, t, a, { step: 0.03, cols: [C.coral, C.gold, C.coral] });
  };
  const sUV = (ctx, t) => {
    ctx.drawImage(skinLayers('uv'), 0, 0);
    const mx = 640, my = SK.basal - 70, on = P(23, 'gear') - 0.2, g = cl((t - on) / 0.3);
    put(ctx, sunS(), 120, 40, { s: 0.55, rot: t * 0.2, d: 0.6 });
    const a = P(22, 'ultraviolet') - 0.2;
    for (let i = 0; i < 5; i++) { const st = a + i * 0.12, x0 = 200 + i * 40; arrow(ctx, x0, 60, x0 + 200, 150 + i * 10, 420 + i * 110, SK.basal - 140, cl((t - st) / 0.6), C.uv, 20 + i); }
    put(ctx, melS(g > 0.5 ? 1 : 0), mx, my, { s: 1.1 * (1 + (g > 0 && g < 1 ? Math.sin(g * Math.PI) * 0.12 : 0)), d: 1 });
    if (g > 0) { const r = H.rng(4); for (let i = 0; i < 30; i++) { const A = popIn(t, on + i * 0.04, 0.2); if (A) { const ang = -Math.PI / 2 + r.range(-1.3, 1.3), rr = r.range(140, 260); put(ctx, packetS(), mx + Math.cos(ang) * rr * 1.3, my + Math.sin(ang) * rr * 0.85, { s: A.s * 0.9, d: 0.3 }); } } }
    tag(ctx, 'UV LIGHT', 1040, 80, t, P(22, 'ultraviolet') - 0.1, { px: 56, col: C.uv });
    sign(ctx, t, P(23, 'gear') - 0.15, 640, 640, 520, 110, 'HIGH GEAR', C.coral, 62, null);
  };
  const sShade = (ctx, t) => {
    ctx.drawImage(paperBg('sh', '#f6e2b4', '#f9edcf'), 0, 0);
    put(ctx, sunS(), 1110, 110, { s: 0.6, rot: t * 0.2, d: 0.6 });
    const A = dropIn(t, P(24, 'sunshade') - 0.3, 0.45, 80);
    if (A) put(ctx, umbrellaS(C.eu), 640, 320 + A.dy, { s: 1.35, d: 1.3 + A.d });
    sprAt(ctx, dnaS(560), 640, 580, t, P(25, 'dna') - 0.6, { s: 0.85 });
    const b = P(25, 'soaks') - 0.1;
    for (let i = 0; i < 4; i++) { const p = cl((t - b - i * 0.1) / 0.5); if (p > 0) arrow(ctx, 1000 - i * 30, 160 + i * 20, 900 - i * 60, 180, 780 - i * 90, 200 + i * 6, p, C.uv, 30 + i); }
    tag(ctx, "BODY'S SUNSHADE", 330, 110, t, P(24, 'sunshade') - 0.15, { px: 48, col: C.eu, rot: -0.03 });
    tag(ctx, 'YOUR DNA', 1060, 600, t, P(25, 'dna') - 0.15, { px: 44, col: C.ink, rot: 0.03 });
  };
  const armS = (key, base, spots) => cache('arm' + key, () => compose(1100, 300, [[(x) => { x.fillStyle = base; x.beginPath(); x.moveTo(0, 60); x.quadraticCurveTo(600, 20, 1000, 90); x.quadraticCurveTo(1100, 150, 1000, 220); x.quadraticCurveTo(600, 280, 0, 250); x.closePath(); x.fill(); }, 0.8], [(x) => { x.fillStyle = C.coral; x.beginPath(); poly(x, cutLines(H.rng(72), [[0, 40], [150, 30], [170, 270], [0, 275], [0, 40]], 30, 0.6)); x.fill(); }, 0.6], ...(spots ? [[(x) => { const r = H.rng(71); x.fillStyle = C.fr; for (let i = 0; i < 140; i++) { const px = 40 + r() * 920, py = 80 + r() * 150; ell(x, 800 + i, px, py, r.range(3, 7), r.range(3, 6)); } }, 0.05]] : [])]));
  const sTan = (ctx, t) => {
    ctx.drawImage(meadow('tan', '#f6d9a0', '#a9cf7a', '#76ad62'), 0, 0);
    const u = E.inOut(ph(t, P(27, 'tan') - 0.6, P(27, 'tan') + 0.3));
    put(ctx, armS('pale', C.skinL), 600, 360, { d: 1.2 });
    if (u > 0) { ctx.save(); ctx.globalAlpha = u; put(ctx, armS('tan', C.tan), 600, 360, { d: 0 }); ctx.restore(); }
    tag(ctx, 'SPREADS OUT EVENLY', 640, 110, t, P(26, 'evenly') - 0.4, { px: 48, col: C.ink });
    sign(ctx, t, P(27, 'tan') - 0.15, 640, 610, 340, 120, 'TAN', C.tan, 80, null);
  };
  const sPatches = (ctx, t) => {
    ctx.drawImage(meadow('pt', '#f6d9a0', '#a9cf7a', '#76ad62'), 0, 0);
    const u = E.inOut(ph(t, P(28, 'piles') - 0.3, P(28, 'patches') + 0.2));
    put(ctx, armS('pale', C.skinL), 600, 360, { d: 1.2 });
    if (u > 0) { ctx.save(); ctx.globalAlpha = u; put(ctx, armS('fr', C.skinL, true), 600, 360, { d: 0 }); ctx.restore(); }
    tag(ctx, 'FRECKLY SKIN', 640, 110, t, P(28, 'freckly') - 0.15, { px: 50, col: C.ink });
    sign(ctx, t, P(28, 'patches') - 0.15, 640, 610, 560, 120, 'LITTLE PATCHES', C.fr, 62, null);
  };
  const sSeasons = (ctx, t) => {
    ctx.drawImage(meadow('summer', '#f6d9a0', '#a9cf7a', '#76ad62'), 0, 0);
    const w = E.inOut(ph(t, P(30, 'winter') - 1.0, P(30, 'winter') + 0.2)), cut = W * (1 - w * 0.5);
    ctx.save(); ctx.beginPath(); ctx.rect(cut, 0, W - cut, HH); ctx.clip(); ctx.drawImage(meadow('winter', C.winter, C.snow, '#e0ecf3', '#c9dbe6'), 0, 0); ctx.restore();
    if (w > 0) { ctx.save(); ctx.fillStyle = C.card; ctx.fillRect(cut - 5, 0, 10, HH); ctx.restore(); }
    put(ctx, sunS(), 120, 100, { s: 0.45, rot: t * 0.2, d: 0.6 });
    const xs = H.lerp(640, 320, w);
    face(ctx, 'ssA', '#f6d0b0', C.redHair, 'short', xs, 340, 0.85, t, { n: 120, col: C.frD });
    if (w > 0.6) face(ctx, 'ssB', '#f6d0b0', C.redHair, 'short', 960, 340, 0.85, t, { n: 40, alpha: 0.35 });
    tag(ctx, 'DARKER IN SUMMER', xs, 640, t, P(29, 'summer') - 0.2, { px: 44, col: C.coral });
    tag(ctx, 'FADE IN WINTER', 960, 640, t, P(30, 'winter') - 0.15, { px: 44, col: C.tealD });
  };
  const sBabies = (ctx, t) => {
    ctx.drawImage(meadow('bb', C.sky), 0, 0);
    const tree = cache('tree', () => compose(560, 640, [[(x) => { x.fillStyle = '#6a4630'; x.fillRect(250, 300, 60, 340); }, 0.6], [(x) => { x.fillStyle = '#4f8f52'; [[280, 200, 230, 170], [160, 280, 140, 110], [400, 280, 140, 110]].forEach(([a, b, c, d], i) => ell(x, 830 + i, a, b, c, d)); }, 0.7]]));
    put(ctx, tree, 260, 330, { d: 1.2 });
    face(ctx, 'bb2', '#f6cfb1', C.blond, 'baby', 560, 540, 0.55, t);
    put(ctx, hatS(), 560, 430, { s: 0.55, d: 0.8 });
    put(ctx, sunS(), 1100, 110, { s: 0.6, rot: t * 0.2, d: 0.6 });
    tag(ctx, 'BARELY ANY SUN', 930, 330, t, P(31, 'sun') - 0.3, { px: 48, col: C.ink });
    const A = dropIn(t, P(32, 'any') - 0.15, 0.4, 60);
    if (A) { put(ctx, cardS(380, 150, C.card), 930, 500 + A.dy, { d: 1.2 + A.d }); numberRow(ctx, '0', 860, 500 + A.dy, 90, C.coral, { center: true }); put(ctx, wordSpr('YET', 50, C.ink, null), 1000, 500 + A.dy, { d: 0.2 }); }
  };

  // ================= chapter 3: the gene =================
  const sTwoKids = (ctx, t) => {
    ctx.drawImage(meadow('two'), 0, 0);
    put(ctx, sunS(), 640, 110, { s: 0.65, rot: t * 0.2, d: 0.7 });
    face(ctx, 'tkA', '#f0c39e', C.brownHair, 'short', 330, 400, 0.75, t, { n: 3 });
    face(ctx, 'tkB', '#f6d0b0', C.redHair, 'bob', 950, 400, 0.75, t, { n: 200, st: P(34, 'covered') - 0.3, spread: 1.1 });
    tag(ctx, 'SAME SUN', 640, 250, t, P(33, 'same') - 0.15, { px: 50, col: C.coral });
    const b = PS(35) - 0.1;
    if (t > b) { const A = dropIn(t, b, 0.4, 60); if (A) { put(ctx, cardS(560, 110, C.ink), 640, 650 + A.dy, { d: 1.2 + A.d }); put(ctx, wordSpr('YOUR GENES', 56, C.gold, null), 640, 650 + A.dy, { d: 0.2 }); } }
  };
  const sGene = (ctx, t) => {
    ctx.drawImage(paperBg('gene', '#1f3d5a', '#2b5677'), 0, 0);
    const slide = (t - PS(36)) * 25;
    sprAt(ctx, dnaS(1400), 640 - slide, 360, t, PS(36) - 0.2, { s: 1.0 });
    const a = P(36, 'mc1r') - 0.2, A = popIn(t, a, 0.35);
    if (A) { put(ctx, ringSpr(C.gold), 640, 360, { s: A.s * 0.95, d: 0.7 }); }
    tag(ctx, 'THE BIG ONE', 640, 110, t, P(36, 'big') - 0.15, { px: 50, col: C.card, back: C.coral });
    sign(ctx, t, a, 640, 620, 420, 130, 'MC1R', C.ink, 96, null);
  };
  const sSwitch = (ctx, t) => {
    ctx.drawImage(paperBg('swt', '#f3ecdc', '#e8dcc0'), 0, 0);
    put(ctx, melS(), 340, 400, { s: 1.0, d: 1 });
    const A = dropIn(t, P(37, 'switch') - 0.2, 0.4, 60);
    if (A) put(ctx, switchS(true), 640, 330 + A.dy, { d: 1.2 + A.d });
    arrow(ctx, 430, 330, 480, 290, 545, 320, cl((t - P(37, 'switch')) / 0.4), C.coral, 61);
    tag(ctx, 'A SWITCH', 640, 90, t, P(37, 'switch') - 0.15, { px: 52, col: C.ink, rot: -0.02 });
    checkOn(ctx, 740, 200, t, P(38, 'normally') - 0.1, 0.6);
    const e = P(39, 'eumelanin') - 0.2;
    for (let i = 0; i < 18; i++) { const A2 = popIn(t, e + i * 0.05, 0.22); if (A2) { const r = H.rng(i + 3); put(ctx, packetS(C.eu), 900 + r.range(-120, 160), 300 + r.range(-120, 120), { s: A2.s * 1.4, d: 0.3 }); } }
    tag(ctx, 'EUMELANIN', 960, 520, t, P(39, 'eumelanin') - 0.15, { px: 56, col: C.eu });
    tag(ctx, 'DARK BROWN SUN BLOCKER', 900, 630, t, P(40, 'dark') - 0.15, { px: 38, col: C.ink });
  };
  const s80 = (ctx, t) => {
    ctx.drawImage(paperBg('80', '#2b2d5a', '#3d4a7a'), 0, 0);
    const r = H.rng(80), st = P(41, '80') - 0.3;
    for (let i = 0; i < 40; i++) { const A = popIn(t, st + i * 0.025, 0.22); if (A) put(ctx, switchS(r() < 0.6), 90 + (i % 10) * 122, 120 + Math.floor(i / 10) * 150 + (i % 2) * 14, { s: A.s * 0.42, rot: r.range(-0.12, 0.12), d: 0.5 }); }
    const A = dropIn(t, P(41, '80') - 0.15, 0.4, 70);
    if (A) { put(ctx, cardS(640, 230, C.card), 640, 330 + A.dy, { d: 1.6 + A.d, rot: -0.01 }); numberRow(ctx, '80+', 640, 300 + A.dy, 110, C.coral, { center: true }); put(ctx, wordSpr('VERSIONS OF MC1R', 42, C.ink, null), 640, 400 + A.dy, { d: 0.3 }); }
    const B = dropIn(t, P(43, '80000') - 0.2, 0.4, 60);
    if (B) { put(ctx, cardS(640, 110, C.gold), 640, 620 + B.dy, { d: 1.2 + B.d, rot: 0.01 }); put(ctx, wordSpr('ONE: ~80,000 YEARS OLD', 44, C.ink, null), 640, 620 + B.dy, { d: 0.2 }); }
    tag(ctx, 'ANCIENT', 1060, 520, t, P(42, 'ancient') - 0.15, { px: 44, col: C.card, back: C.coral, rot: 0.05 });
  };
  const sPheo = (ctx, t) => {
    ctx.drawImage(paperBg('ph', '#f6e2c4', '#f9ecd8'), 0, 0);
    put(ctx, melS(), 300, 420, { s: 0.9, d: 1 });
    const f = P(44, 'flip') - 0.1, on = t < f + 0.15;
    put(ctx, switchS(on), 600, 330, { d: 1.2, rot: !on && t < f + 0.4 ? Math.sin((t - f) * 40) * 0.04 : 0 });
    const e = P(44, 'pheomelanin') - 0.2;
    for (let i = 0; i < 18; i++) { const A2 = popIn(t, e + i * 0.05, 0.22); if (A2) { const r = H.rng(i + 3); put(ctx, packetS(C.pheo), 900 + r.range(-120, 160), 300 + r.range(-120, 120), { s: A2.s * 1.4, d: 0.3 }); } }
    tag(ctx, 'PHEOMELANIN', 960, 110, t, P(44, 'pheomelanin') - 0.15, { px: 56, col: C.pheo, back: C.ink });
    tag(ctx, 'REDDISH YELLOW', 960, 520, t, P(45, 'reddish') - 0.15, { px: 44, col: C.redHair });
    const L = P(45, 'less') - 0.15, A = dropIn(t, L, 0.4, 60);
    if (A) { put(ctx, umbrellaS(C.pheo), 320, 160 + A.dy, { s: 0.7, d: 1 + A.d }); }
    tag(ctx, 'PROTECTS LESS', 940, 630, t, L, { px: 46, col: C.card, back: C.red });
  };
  const sRedhair = (ctx, t) => {
    ctx.drawImage(paperBg('rh', '#58b0a6', '#7cc4ba'), 0, 0);
    face(ctx, 'rh', '#f6d0b0', C.redHair, 'pig', 380, 360, 1.05, t, { n: 160, st: PS(46), spread: 1.2 });
    tag(ctx, 'RED HAIR', 380, 650, t, P(46, 'red') - 0.15, { px: 56, col: C.redHair });
    sign(ctx, t, P(47, 'two') - 0.15, 930, 250, 560, 170, 'MOST REDHEADS', C.ink, 40, '2 COPIES', C.redHair, 66);
    sign(ctx, t, P(48, 'one') - 0.2, 930, 500, 560, 170, 'ALMOST ALL', C.ink, 40, '1 OR MORE', C.redHair, 66);
  };
  const sTogether = (ctx, t) => {
    ctx.drawImage(paperBg('tg', '#f2b545', '#f6cc6e'), 0, 0);
    const hair = cache('lock', () => paperize(260, 300, (x) => { x.strokeStyle = C.redHair; x.lineWidth = 34; x.lineCap = 'round'; for (let i = 0; i < 3; i++) { x.beginPath(); x.moveTo(80 + i * 50, 20); x.bezierCurveTo(30 + i * 50, 120, 150 + i * 40, 180, 90 + i * 50, 280); x.stroke(); } }, { seed: 66 }));
    sprAt(ctx, hair, 300, 330, t, P(49, 'red') - 0.2, { s: 1 });
    const A = popIn(t, P(49, 'freckles') - 0.4, 0.3); if (A) put(ctx, wordSpr('+', 120, C.coral, null), 640, 330, { s: A.s, d: 0.8 });
    const B = popIn(t, P(49, 'freckles') - 0.15, 0.35);
    if (B) { ctx.save(); ctx.translate(980, 330); ctx.scale(B.s, B.s); for (let i = 0; i < 40; i++) { const f = FRK[i]; ctx.drawImage(dotS(C.fr), (f[0] - 190) * 1.6 - 14, (f[1] - 270) * 2.2 - 14, 28, 28); } ctx.restore(); }
    tag(ctx, 'OFTEN GO TOGETHER', 640, 620, t, P(49, 'together') - 0.2, { px: 54, col: C.ink });
  };
  const sNoGuarantee = (ctx, t) => {
    ctx.drawImage(paperBg('ng', '#3d5f7a', '#4f7f9a'), 0, 0);
    sign(ctx, t, PS(50), 640, 130, 720, 120, 'NO GUARANTEE', C.coral, 64, null);
    face(ctx, 'ngA', '#f6d0b0', C.redHair, 'short', 330, 400, 0.6, t, { n: 4 });
    face(ctx, 'ngB', '#efc19c', C.brownHair, 'bob', 330, 400 + 0, 0, t);
    const b = P(51, 'freckle') - 0.3;
    if (t > b) face(ctx, 'ngC', '#efc19c', C.brownHair, 'bob', 640, 420, 0.6, t, { n: 90, st: b, spread: 0.8 });
    const lbls = [['IRF4', C.teal], ['TYR', C.gold], ['ASIP', C.coral], ['BNC2', C.lilac], ['+ MORE', C.pink]];
    lbls.forEach(([l, c], i) => sprAt(ctx, geneCard(l, c), 1000 + (i % 2) * 40 - 20, 200 + i * 84, t, P(52, 'genes') - 0.3 + i * 0.12, { s: 0.85, rot: (i % 2 ? 0.04 : -0.04) }));
    tag(ctx, 'OTHER GENES', 1000, 660, t, P(52, 'other') - 0.15, { px: 40, col: C.card, back: C.ink });
  };
  // ================= chapter 4: freckle or sun spot? =================
  const sSpot = (ctx, t) => {
    ctx.drawImage(paperBg('sp', C.skinL, '#f3d0b4'), 0, 0);
    const r = H.rng(14);
    for (let i = 0; i < 26; i++) put(ctx, dotS(C.fr), 120 + r() * 1040, 120 + r() * 480, { s: r.range(0.9, 1.8), d: 0 });
    put(ctx, cache('lent', () => paperize(140, 110, (x) => { x.fillStyle = '#9a5b36'; blobPath(x, ellPts(H.rng(3), 70, 55, 60, 44, 0.3, 3)); }, { seed: 77 })), 760, 330, { d: 0.2 });
    const lens = cache('lens', () => compose(420, 420, [[(x) => { x.strokeStyle = C.ink; x.lineWidth = 34; x.lineCap = 'round'; x.beginPath(); x.moveTo(280, 280); x.lineTo(400, 400); x.stroke(); }, 0.6], [(x) => { x.fillStyle = C.ink; x.beginPath(); x.arc(170, 170, 150, 0, TAU); x.arc(170, 170, 120, 0, TAU, true); x.fill(); x.fillStyle = 'rgba(220,240,255,0.25)'; x.beginPath(); x.arc(170, 170, 120, 0, TAU); x.fill(); }, 0.5]]));
    const u = E.inOut(ph(t, PS(53) - 0.3, PS(53) + 0.8));
    put(ctx, lens, H.lerp(1100, 870, u), H.lerp(560, 440, u), { d: 1.4 });
    tag(ctx, 'FRECKLE?', 330, 110, t, P(53, 'freckle') - 0.2, { px: 60, col: C.ink, rot: -0.04 });
    sign(ctx, t, P(54, 'ephelides') - 0.2, 380, 620, 560, 120, 'EPHELIDES', C.fr, 64, null);
  };
  const sCompare = (ctx, t) => {
    ctx.drawImage(paperBg('cmp', '#2b2d5a', '#36406e'), 0, 0);
    const colA = (st) => dropIn(t, st, 0.4, 60);
    const A = colA(P(55, 'real') - 0.3), B = colA(P(57, 'sun') - 0.2);
    if (A) { put(ctx, cardS(560, 600, C.card), 330, 380 + A.dy, { d: 1.3 + A.d, rot: -0.01 }); put(ctx, wordSpr('FRECKLE', 52, C.fr, null), 330, 140 + A.dy, { d: 0.2 }); }
    if (B) { put(ctx, cardS(560, 600, C.card), 950, 380 + B.dy, { d: 1.3 + B.d, rot: 0.01 }); put(ctx, wordSpr('SUN SPOT', 52, '#9a5b36', null), 950, 140 + B.dy, { d: 0.2 }); }
    const row = (x, y, s, st, col = C.ink) => tag(ctx, s, x, y, t, st, { px: 34, col, back: null, d: 0.3 });
    row(330, 250, 'COMES & GOES', P(55, 'seasons') - 0.4); row(330, 340, 'WITH SEASONS', P(55, 'seasons') - 0.3);
    row(330, 450, 'OFTEN FADES', P(56, 'fade') - 0.2); row(330, 540, 'WITH AGE', P(56, 'older') - 0.2);
    row(950, 230, 'LARGER', P(58, 'larger') - 0.15); row(950, 320, 'MIDDLE AGE', P(58, 'middle') - 0.15);
    row(950, 410, 'YEARS OF SUN', P(59, 'years') - 0.15); row(950, 520, 'STAYS ALL', P(60, 'stay') - 0.15, C.coral); row(950, 600, 'WINTER', P(60, 'winter') - 0.15, C.coral);
    tag(ctx, 'SOLAR LENTIGINES', 950, 60, t, P(57, 'solar') - 0.15, { px: 34, col: C.card, back: C.coral });
  };
  const sMicro = (ctx, t) => {
    ctx.drawImage(paperBg('mic', '#1f2a40', '#2b3a55'), 0, 0);
    const view = (x, n, lbl, st) => { const A = popIn(t, st, 0.4); if (!A) return; put(ctx, cache('vw' + n, () => compose(480, 480, [[(c) => { c.fillStyle = C.ink; c.beginPath(); c.arc(240, 240, 232, 0, TAU); c.fill(); }, 0.8], [(c) => { c.fillStyle = C.skinL; c.beginPath(); c.arc(240, 240, 205, 0, TAU); c.fill(); c.fillStyle = C.derm; c.beginPath(); c.rect(30, 320, 420, 140); c.save(); c.clip(); c.beginPath(); c.arc(240, 240, 205, 0, TAU); c.fill(); c.restore(); }, 0.3]])), x, 330, { s: A.s, d: 1.2 }); for (let i = 0; i < n; i++) put(ctx, melS(1), x - 150 + (i + 0.5) * (300 / n), 330 + 60 + (n > 5 ? (i % 2) * 22 : 0), { s: (n > 5 ? 0.15 : 0.2) * A.s, d: 0.3 }); put(ctx, wordSpr(lbl, 40, C.card, C.ink, 10), x, 620, { d: 0.8 }); };
    view(340, 4, 'FRECKLE', PS(61) - 0.2);
    view(940, 10, 'SUN SPOT', P(61, 'spots') - 0.2);
    tag(ctx, 'EXTRA PIGMENT CELLS', 940, 70, t, P(61, 'extra') - 0.15, { px: 44, col: C.coral });
  };
  // ================= chapter 5: why it matters =================
  const sBurn = (ctx, t) => {
    ctx.drawImage(meadow('burn', '#f6d9a0', '#a9cf7a', '#76ad62'), 0, 0);
    put(ctx, sunS(), 1110, 110, { s: 0.65, rot: t * 0.2, d: 0.6 });
    face(ctx, 'bn', '#f6d0b0', C.redHair, 'short', 440, 380, 0.95, t, { n: 160 });
    const b = P(64, 'burns') - 0.2, u = cl((t - b) / 0.6);
    if (u > 0) { ctx.save(); ctx.globalAlpha = 0.45 * u; ctx.fillStyle = '#e8504a'; ctx.beginPath(); ctx.ellipse(380, 440, 60, 34, 0, 0, TAU); ctx.ellipse(500, 440, 60, 34, 0, 0, TAU); ctx.ellipse(440, 400, 30, 40, 0, 0, TAU); ctx.fill(); ctx.restore(); }
    sign(ctx, t, P(63, 'less') - 0.15, 950, 260, 520, 170, 'LESS', C.ink, 50, 'BROWN MELANIN', C.eu, 44);
    tag(ctx, 'BURNS MORE EASILY', 950, 480, t, P(64, 'burns') - 0.15, { px: 44, col: C.card, back: C.red });
  };
  const sSunscreen = (ctx, t) => {
    ctx.drawImage(meadow('scr', C.sky), 0, 0);
    sprAt(ctx, bottleS(), 440, 400, t, P(66, 'sunscreen') - 0.5, { s: 1.0 });
    sprAt(ctx, hatS(), 840, 330, t, P(66, 'careful') - 0.3, { s: 0.9 });
    sprAt(ctx, umbrellaS(C.coral), 1080, 380, t, P(66, 'extra') - 0.2, { s: 0.7 });
    tag(ctx, 'SKIN DOCTORS SAY', 640, 90, t, P(65, 'doctors') - 0.15, { px: 48, col: C.ink, rot: -0.02 });
    sign(ctx, t, P(66, 'sunscreen') - 0.15, 640, 640, 640, 110, 'EXTRA SUNSCREEN', C.tealD, 56, null);
  };
  const sEnd = (ctx, t) => {
    ctx.drawImage(paperBg('end', '#f2b545', '#f6cc6e'), 0, 0);
    ctx.save(); kb(ctx, t, PS(67), PE(70), 1, 1.08);
    face(ctx, 'end', '#f6d0b0', C.redHair, 'bob', 640, 340, 1.0, t, { n: 160 });
    ctx.restore();
    const A = dropIn(t, PS(67), 0.4, 60);
    if (A) { put(ctx, wordSpr('RANDOM DOTS', 50, C.ink, C.card, 12), 260, 110 + A.dy, { d: 1 + A.d, rot: -0.04 }); crossOn(ctx, 260, 110, t, P(67, 'random') + 0.1, 0.9); }
    tag(ctx, 'TINY SUNSHADES', 1020, 130, t, P(68, 'sunshade') - 0.2, { px: 48, col: C.eu, rot: 0.03 });
    tag(ctx, 'SWITCHED ON HARD', 1020, 560, t, P(69, 'switched') - 0.15, { px: 40, col: C.coral, rot: -0.02 });
    const B = dropIn(t, P(70, 'gene') - 0.4, 0.4, 60);
    if (B) { put(ctx, cardS(760, 100, C.ink), 640, 655 + B.dy, { d: 1 + B.d }); put(ctx, wordSpr('ONE TINY GENE: MC1R', 46, C.gold, null), 640, 655 + B.dy, { d: 0.2 }); }
  };
  const sNext = (ctx, t) => {
    ctx.drawImage(paperBg('nx', '#58b0a6', '#7cc4ba'), 0, 0);
    tag(ctx, 'NEXT UP', 640, 80, t, PS(71), { px: 58, col: C.coral });
    sprAt(ctx, lungsS(), 640, 330, t, P(71, 'lungs') - 0.2, { s: 0.85 });
    const A = dropIn(t, P(72, '20000') - 0.2, 0.4, 60);
    if (A) { put(ctx, cardS(760, 120, C.card), 640, 630 + A.dy, { d: 1.2 + A.d }); put(ctx, wordSpr('20,000+ BREATHS A DAY', 50, C.ink, null), 640, 630 + A.dy, { d: 0.2 }); }
  };
  const SC = [
    { s: 0, f: sBaby }, { s: PS(2), f: sAgeTwo, tr: 'rip' }, { s: PS(3), f: sKids, tr: 'pan' }, { s: PS(5), f: sQuestion, tr: 'drop' },
    { s: PS(6), f: sZoomFace, tr: 'rip', ch: [1, 'WHAT IS A FRECKLE?'], chAt: PS(6) + 1.6 }, { s: PS(7), f: sMelanin, tr: 'drop' }, { s: PS(8), f: sMelanocyte, tr: 'cut' }, { s: PS(10), f: sPackets, tr: 'cut' }, { s: PS(12), f: sSurprise, tr: 'rip' }, { s: PS(15), f: sHarder, tr: 'drop' }, { s: PS(17), f: sSize, tr: 'pan' }, { s: PS(18), f: sFair, tr: 'pan' },
    { s: PS(20), f: sSun, tr: 'rip', ch: [2, 'THE SUN SWITCH'] }, { s: PS(22), f: sUV, tr: 'drop' }, { s: PS(24), f: sShade, tr: 'pan' }, { s: PS(26), f: sTan, tr: 'drop' }, { s: PS(28), f: sPatches, tr: 'cut' }, { s: PS(29), f: sSeasons, tr: 'pan' }, { s: PS(31), f: sBabies, tr: 'pan' },
    { s: PS(33), f: sTwoKids, tr: 'rip', ch: [3, 'THE GENE'] }, { s: PS(36), f: sGene, tr: 'drop' }, { s: PS(37), f: sSwitch, tr: 'pan' }, { s: PS(41), f: s80, tr: 'drop' }, { s: PS(44), f: sPheo, tr: 'pan' }, { s: PS(46), f: sRedhair, tr: 'drop' }, { s: PS(49), f: sTogether, tr: 'pan' }, { s: PS(50), f: sNoGuarantee, tr: 'drop' },
    { s: PS(53), f: sSpot, tr: 'rip', ch: [4, 'FRECKLE OR SUN SPOT?'] }, { s: PS(55), f: sCompare, tr: 'drop' }, { s: PS(61), f: sMicro, tr: 'pan' },
    { s: PS(63), f: sBurn, tr: 'rip', ch: [5, 'WHY IT MATTERS'] }, { s: PS(65), f: sSunscreen, tr: 'pan' },
    { s: PS(67), f: sEnd, tr: 'rip' }, { s: PS(71), f: sNext, tr: 'rip' },
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
    const pop = (t, g = 0.6) => k.play('pop', t, { gain: g, minor: true });
    const zip = (t, g = 0.7) => { k.play('whoosh', t - 0.04, { dur: 0.16, gain: g * 0.6 }); k.noise(t, { dur: 0.05, filter: 'bandpass', f: [[0, 800], [0.05, 5000]], q: 1, gain: 0.35 * g }); };
    const pops = (t0, n, dt, g = 0.35) => { for (let i = 0; i < n; i++) pop(t0 + i * dt, g); };
    // hook
    hit(P(0, 'zero') - 0.05, 0.9); k.play('slap', P(1, 'single'), { gain: 0.5 });
    k.play('stamp', P(2, 'two'), { gain: 0.6 }); pops(P(2, 'showing') - 0.1, 12, 0.1);
    pops(P(3, 'few') - 0.3, 7, 0.09); k.play('riser', P(4, 'hundreds') - 0.9, { dur: 0.9, gain: 0.3 }); pops(P(4, 'hundreds') - 0.6, 24, 0.065, 0.3); hit(P(4, 'hundreds') + 0.9, 0.6);
    k.play('ding', P(5, 'more'), { f: 'E5', gain: 0.35 });
    // chapter 1
    k.play('whoosh', PS(6) + 0.9, { dur: 0.6, gain: 0.4 }); k.play('pop', P(6, 'freckle'), { gain: 0.6 });
    pops(P(7, 'melanin') - 0.4, 14, 0.035, 0.3); k.play('ding', P(7, 'melanin'), { f: 'C6', gain: 0.3 });
    k.play('pop', P(8, 'cells') - 0.2, { gain: 0.7 }); k.play('ding', P(8, 'melanocytes'), { f: 'G5', gain: 0.3 });
    for (let j = 0; j < 4; j++) k.play('swish', P(10, 'packets') - 0.4 + j * 0.55, { dur: 0.5, gain: 0.3, minor: true });
    k.play('sparkle', P(12, 'surprise'), { gain: 0.45 }); k.play('slap', P(13, 'extra') + 0.15, { gain: 0.6 }); k.play('error', P(13, 'extra') + 0.2, { gain: 0.22 }); hit(P(14, 'same') - 0.05, 0.7);
    k.play('buzz', PS(15), { dur: 0.6, f: 90, gain: 0.25 }); pops(P(16, 'more') - 0.3, 30, 0.03, 0.25);
    k.play('stamp', P(17, 'millimeters') - 0.05, { gain: 0.5 }); k.play('ding', P(18, 'fair'), { f: 'A5', gain: 0.3 });
    // chapter 2
    k.play('riser', P(21, 'sunlight') - 0.9, { dur: 0.9, gain: 0.35 }); hit(P(21, 'sunlight') - 0.05, 0.9); k.play('success', P(21, 'sunlight') + 0.1, { gain: 0.25 });
    for (let i = 0; i < 5; i++) k.play('swish', P(22, 'ultraviolet') - 0.2 + i * 0.12, { dur: 0.3, gain: 0.25, minor: true });
    k.play('powerup', P(23, 'gear') - 0.1, { gain: 0.35 }); pops(P(23, 'gear') - 0.1, 14, 0.04, 0.25);
    k.play('thud', P(24, 'sunshade') - 0.15, { f: 110, gain: 0.5 }); k.play('ding', P(25, 'dna'), { f: 'E6', gain: 0.25 });
    k.play('whoosh', P(27, 'tan') - 0.6, { dur: 0.8, gain: 0.3 }); k.play('ding', P(27, 'tan'), { f: 'C5', gain: 0.3 });
    k.play('sparkle', P(28, 'patches') - 0.3, { gain: 0.4 });
    k.play('ding', P(29, 'summer'), { f: 'G5', gain: 0.3 }); k.play('whoosh', P(30, 'winter') - 1.0, { dur: 1.1, gain: 0.35 }); k.play('ding', P(30, 'winter') + 0.1, { f: 'E6', gain: 0.25 });
    k.play('stamp', P(32, 'any'), { gain: 0.45 });
    // chapter 3
    pops(P(34, 'covered') - 0.3, 20, 0.055, 0.3); k.play('ding', P(35, 'genes'), { f: 'C6', gain: 0.3 });
    hit(P(36, 'mc1r') - 0.05, 0.8); k.play('click', P(37, 'switch'), { gain: 0.8 }); k.play('success', P(38, 'normally') + 0.05, { gain: 0.22 }); pops(P(39, 'eumelanin') - 0.2, 12, 0.05, 0.3);
    k.play('riser', P(41, '80') - 0.9, { dur: 0.8, gain: 0.3 }); pops(P(41, '80') - 0.3, 30, 0.025, 0.22); hit(P(41, '80') - 0.05, 0.9); k.play('stamp', P(43, '80000') - 0.05, { gain: 0.5 });
    k.play('click', P(44, 'flip') - 0.05, { gain: 0.9 }); k.play('paper', P(44, 'flip'), { dur: 0.3, gain: 0.3, minor: true }); pops(P(44, 'pheomelanin') - 0.2, 12, 0.05, 0.3); k.play('error', P(45, 'less'), { gain: 0.25 });
    k.play('ding', P(46, 'red'), { f: 'G5', gain: 0.3 }); k.play('stamp', P(47, 'two'), { gain: 0.5 }); k.play('stamp', P(48, 'one'), { gain: 0.5 });
    k.play('success', P(49, 'together'), { gain: 0.3 });
    k.play('error', P(50, 'guarantee'), { gain: 0.25 }); pops(P(51, 'freckle') - 0.3, 14, 0.06, 0.25);
    // chapter 4
    k.play('whoosh', PS(53) - 0.3, { dur: 0.9, gain: 0.35 }); k.play('ding', P(54, 'ephelides'), { f: 'C6', gain: 0.3 });
    k.play('stamp', P(60, 'stay'), { gain: 0.4 }); k.play('shutter', PS(61), { gain: 0.5 }); hit(P(61, 'extra') - 0.05, 0.6);
    // chapter 5
    k.play('error', P(64, 'burns'), { gain: 0.25 }); k.play('slap', P(66, 'sunscreen') - 0.05, { gain: 0.5 });
    k.play('stamp', P(67, 'random') + 0.1, { gain: 0.5 }); k.play('riser', PS(68), { dur: 2, gain: 0.3 }); hit(P(70, 'gene') - 0.05, 0.9); ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', P(70, 'gene') + 0.15 + i * 0.09, { f, gain: 0.4 }));
    k.play('ding', P(71, 'next'), { f: 'G5', gain: 0.4 }); k.play('stamp', P(72, '20000') - 0.05, { gain: 0.5 });
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    ctx.drawImage(paperBg('thumb', '#58b0a6', '#7cc4ba'), 0, 0);
    put(ctx, burstSpr(C.gold), 930, 360, { s: 1.75, d: 0.7 });
    face(ctx, 'th', '#f6d0b0', C.redHair, 'pig', 930, 360, 1.25, 0, { n: 230 });
    put(ctx, wordSpr('ZERO', 170, C.red, C.card, 26), 330, 220, { d: 1.8, rot: -0.04 });
    put(ctx, wordSpr('AT BIRTH', 110, C.ink, C.card, 22), 340, 450, { d: 1.8, rot: 0.02 });
    finish(ctx, 0, [700, 400]);
    ctx.restore();
  }
  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s - 0.05 ? j : a), 0) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();
