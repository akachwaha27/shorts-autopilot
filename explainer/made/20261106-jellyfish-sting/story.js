// ================= Cut-Paper Diorama, 16:9: "What actually happens when a jellyfish stings you?" =================
// Long explainer. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  // ---------- BEATS: voiceover phrases (phrases.json, Kokoro am_michael) ----------
  const PH = [{"s":0.25,"e":1.75,"text":"A jellyfish can sting you,","words":[["a",0.25],["jellyfish",0.32],["can",0.96],["sting",1.18],["you",1.53]]},{"s":2.05,"e":3.87,"text":"in under a millionth of a second,","words":[["in",2.05],["under",2.19],["a",2.54],["millionth",2.61],["of",3.24],["a",3.38],["second",3.45]]},{"s":4.17,"e":5.21,"text":"without a brain,","words":[["without",4.17],["a",4.73],["brain",4.81]]},{"s":5.51,"e":6.93,"text":"and you'd never see it coming.","words":[["and",5.51],["youd",5.69],["never",5.94],["see",6.25],["it",6.44],["coming",6.56]]},{"s":7.48,"e":9.0,"text":"So what actually happens,","words":[["so",7.48],["what",7.63],["actually",7.92],["happens",8.49]]},{"s":9.3,"e":10.66,"text":"when one of them stings you?","words":[["when",9.3],["one",9.55],["of",9.73],["them",9.86],["stings",10.1],["you",10.47]]},{"s":11.21,"e":12.59,"text":"First, meet the animal.","words":[["first",11.21],["meet",11.59],["the",11.9],["animal",12.13]]},{"s":13.14,"e":15.48,"text":"Jellyfish have been drifting through the ocean,","words":[["jellyfish",13.14],["have",13.67],["been",13.9],["drifting",14.13],["through",14.6],["the",15.01],["ocean",15.18]]},{"s":15.78,"e":18.21,"text":"for more than 500 million years.","words":[["for",15.78],["more",16.06],["than",16.43],["500",16.81],["million",17.09],["years",17.75]]},{"s":18.76,"e":20.27,"text":"And they've never had a brain.","words":[["and",18.76],["theyve",18.96],["never",19.35],["had",19.68],["a",19.88],["brain",19.95]]},{"s":20.82,"e":22.32,"text":"They also have no heart,","words":[["they",20.82],["also",21.14],["have",21.45],["no",21.77],["heart",21.93]]},{"s":22.62,"e":23.54,"text":"no bones,","words":[["no",22.62],["bones",22.88]]},{"s":23.84,"e":24.77,"text":"and no blood.","words":[["and",23.84],["no",24.12],["blood",24.31]]},{"s":25.32,"e":26.6,"text":"What they have instead,","words":[["what",25.32],["they",25.59],["have",25.86],["instead",26.13]]},{"s":26.9,"e":28.5,"text":"is a simple net of nerves,","words":[["is",26.9],["a",27.06],["simple",27.14],["net",27.62],["of",27.86],["nerves",28.02]]},{"s":28.8,"e":30.96,"text":"spread through a soft, see-through body.","words":[["spread",28.8],["through",29.2],["a",29.68],["soft",29.74],["seethrough",30.01],["body",30.69]]},{"s":31.51,"e":33.15,"text":"So when a jellyfish stings you,","words":[["so",31.51],["when",31.64],["a",31.91],["jellyfish",31.97],["stings",32.56],["you",32.96]]},{"s":33.45,"e":34.53,"text":"it isn't angry.","words":[["it",33.45],["isnt",33.65],["angry",34.04]]},{"s":35.08,"e":36.87,"text":"It isn't even really aware of you.","words":[["it",35.08],["isnt",35.22],["even",35.49],["really",35.77],["aware",36.18],["of",36.52],["you",36.66]]},{"s":37.42,"e":38.96,"text":"Most of them just drift,","words":[["most",37.42],["of",37.74],["them",37.91],["just",38.23],["drift",38.56]]},{"s":39.26,"e":41.16,"text":"and let their tentacles do the work.","words":[["and",39.26],["let",39.46],["their",39.65],["tentacles",39.98],["do",40.57],["the",40.7],["work",40.9]]},{"s":41.71,"e":43.52,"text":"Now zoom in on one tentacle.","words":[["now",41.71],["zoom",41.95],["in",42.28],["on",42.45],["one",42.61],["tentacle",42.86]]},{"s":44.07,"e":46.79,"text":"It's covered in thousands of tiny stinging cells.","words":[["its",44.07],["covered",44.27],["in",44.75],["thousands",44.89],["of",45.5],["tiny",45.63],["stinging",45.91],["cells",46.45]]},{"s":47.34,"e":49.49,"text":"And inside each cell sits a capsule,","words":[["and",47.34],["inside",47.56],["each",48.01],["cell",48.31],["sits",48.6],["a",48.9],["capsule",48.97]]},{"s":49.79,"e":51.22,"text":"called a nematocyst.","words":[["called",49.79],["a",50.3],["nematocyst",50.38]]},{"s":51.77,"e":53.02,"text":"Several of them could fit,","words":[["several",51.77],["of",52.19],["them",52.31],["could",52.54],["fit",52.84]]},{"s":53.32,"e":55.03,"text":"across a single human hair.","words":[["across",53.32],["a",53.79],["single",53.86],["human",54.33],["hair",54.72]]},{"s":55.58,"e":57.14,"text":"Packed inside that capsule,","words":[["packed",55.58],["inside",55.99],["that",56.39],["capsule",56.66]]},{"s":57.44,"e":58.92,"text":"is a long, hollow thread,","words":[["is",57.44],["a",57.59],["long",57.67],["hollow",57.98],["thread",58.45]]},{"s":59.22,"e":60.52,"text":"coiled up like a spring,","words":[["coiled",59.22],["up",59.63],["like",59.77],["a",60.04],["spring",60.11]]},{"s":60.82,"e":62.81,"text":"with a sharp tip waiting at the front.","words":[["with",60.82],["a",61.09],["sharp",61.16],["tip",61.49],["waiting",61.68],["at",62.15],["the",62.28],["front",62.48]]},{"s":63.36,"e":65.28,"text":"Think of it as a loaded harpoon,","words":[["think",63.36],["of",63.74],["it",63.9],["as",64.05],["a",64.2],["loaded",64.28],["harpoon",64.74]]},{"s":65.58,"e":67.07,"text":"sitting in a bath of venom.","words":[["sitting",65.58],["in",66.08],["a",66.22],["bath",66.29],["of",66.57],["venom",66.71]]},{"s":67.62,"e":69.26,"text":"The pressure in there is huge,","words":[["the",67.62],["pressure",67.82],["in",68.37],["there",68.51],["is",68.85],["huge",68.98]]},{"s":69.56,"e":72.42,"text":"about 150 times normal air pressure.","words":[["about",69.56],["150",70.03],["times",70.32],["normal",70.8],["air",71.37],["pressure",71.66]]},{"s":72.97,"e":74.68,"text":"That's dozens of times stronger,","words":[["thats",72.97],["dozens",73.3],["of",73.69],["times",73.82],["stronger",74.15]]},{"s":74.98,"e":76.56,"text":"than the air in a car tire.","words":[["than",74.98],["the",75.29],["air",75.53],["in",75.77],["a",75.93],["car",76.01],["tire",76.24]]},{"s":77.11,"e":78.34,"text":"So what sets it off?","words":[["so",77.11],["what",77.27],["sets",77.6],["it",77.93],["off",78.1]]},{"s":78.89,"e":81.42,"text":"Each cell has a tiny trigger on the outside.","words":[["each",78.89],["cell",79.18],["has",79.47],["a",79.69],["tiny",79.76],["trigger",80.05],["on",80.55],["the",80.7],["outside",80.91]]},{"s":81.97,"e":84.43,"text":"Bump it, or hit it with the right chemicals,","words":[["bump",81.97],["it",82.26],["or",82.4],["hit",82.55],["it",82.76],["with",82.91],["the",83.2],["right",83.42],["chemicals",83.78]]},{"s":84.73,"e":86.09,"text":"and the lid pops open.","words":[["and",84.73],["the",84.97],["lid",85.21],["pops",85.45],["open",85.77]]},{"s":86.64,"e":87.99,"text":"Seawater rushes in,","words":[["seawater",86.64],["rushes",87.31],["in",87.82]]},{"s":88.29,"e":89.67,"text":"the pressure takes over,","words":[["the",88.29],["pressure",88.49],["takes",89.05],["over",89.39]]},{"s":89.97,"e":91.38,"text":"and the harpoon fires.","words":[["and",89.97],["the",90.2],["harpoon",90.44],["fires",90.99]]},{"s":91.93,"e":93.3,"text":"No brain tells it to.","words":[["no",91.93],["brain",92.1],["tells",92.53],["it",92.96],["to",93.13]]},{"s":93.85,"e":95.63,"text":"The cell mostly acts on its own.","words":[["the",93.85],["cell",94.06],["mostly",94.35],["acts",94.77],["on",95.06],["its",95.2],["own",95.41]]},{"s":96.18,"e":98.46,"text":"Now here's the part that's hard to believe.","words":[["now",96.18],["heres",96.38],["the",96.73],["part",96.94],["thats",97.22],["hard",97.56],["to",97.84],["believe",97.98]]},{"s":99.01,"e":101.81,"text":"In 2006, scientists filmed this,","words":[["in",99.01],["2006",99.23],["scientists",99.66],["filmed",100.74],["this",101.38]]},{"s":102.11,"e":105.12,"text":"in hydra, a tiny relative of the jellyfish.","words":[["in",102.11],["hydra",102.29],["a",102.73],["tiny",102.82],["relative",103.18],["of",103.88],["the",104.06],["jellyfish",104.33]]},{"s":105.67,"e":108.53,"text":"Their camera shot over a million frames per second.","words":[["their",105.67],["camera",106.01],["shot",106.42],["over",106.69],["a",106.97],["million",107.03],["frames",107.51],["per",107.92],["second",108.12]]},{"s":109.08,"e":110.6,"text":"And the first part of the shot,","words":[["and",109.08],["the",109.27],["first",109.46],["part",109.78],["of",110.03],["the",110.15],["shot",110.34]]},{"s":110.9,"e":113.74,"text":"was over in just 700 nanoseconds.","words":[["was",110.9],["over",111.21],["in",111.63],["just",111.84],["700",112.26],["nanoseconds",112.58]]},{"s":114.29,"e":116.33,"text":"That's seven ten-millionths of a second.","words":[["thats",114.29],["seven",114.61],["tenmillionths",114.92],["of",115.75],["a",115.88],["second",115.95]]},{"s":116.88,"e":119.1,"text":"The tip hit up to five million g's.","words":[["the",116.88],["tip",117.14],["hit",117.39],["up",117.65],["to",117.82],["five",117.99],["million",118.33],["gs",118.93]]},{"s":119.65,"e":121.96,"text":"people tend to black out at around six.","words":[["people",119.65],["tend",120.09],["to",120.39],["black",120.54],["out",120.92],["at",121.14],["around",121.29],["six",121.74]]},{"s":122.51,"e":124.43,"text":"And a mantis shrimp's famous punch,","words":[["and",122.51],["a",122.72],["mantis",122.79],["shrimps",123.2],["famous",123.67],["punch",124.08]]},{"s":124.73,"e":126.53,"text":"reaches about ten thousand.","words":[["reaches",124.73],["about",125.27],["ten",125.67],["thousand",125.9]]},{"s":127.08,"e":128.73,"text":"Because that tip is so tiny,","words":[["because",127.08],["that",127.6],["tip",127.91],["is",128.13],["so",128.28],["tiny",128.43]]},{"s":129.03,"e":130.45,"text":"the pressure where it lands,","words":[["the",129.03],["pressure",129.22],["where",129.71],["it",130.02],["lands",130.14]]},{"s":130.75,"e":132.21,"text":"is in the range of a bullet.","words":[["is",130.75],["in",130.89],["the",131.03],["range",131.24],["of",131.58],["a",131.72],["bullet",131.79]]},{"s":132.76,"e":134.76,"text":"It's strong enough to pierce a crab's shell.","words":[["its",132.76],["strong",132.93],["enough",133.29],["to",133.64],["pierce",133.76],["a",134.11],["crabs",134.17],["shell",134.47]]},{"s":135.31,"e":136.84,"text":"So what happens in your skin?","words":[["so",135.31],["what",135.44],["happens",135.71],["in",136.17],["your",136.31],["skin",136.57]]},{"s":137.39,"e":138.82,"text":"After the tip punches in,","words":[["after",137.39],["the",137.75],["tip",137.96],["punches",138.18],["in",138.68]]},{"s":139.12,"e":141.09,"text":"the thread turns itself inside out,","words":[["the",139.12],["thread",139.33],["turns",139.74],["itself",140.08],["inside",140.48],["out",140.89]]},{"s":141.39,"e":143.46,"text":"and the capsule squeezes venom through it.","words":[["and",141.39],["the",141.57],["capsule",141.75],["squeezes",142.16],["venom",142.63],["through",142.93],["it",143.34]]},{"s":144.01,"e":146.49,"text":"Some of those toxins punch holes in cells.","words":[["some",144.01],["of",144.3],["those",144.45],["toxins",144.81],["punch",145.25],["holes",145.62],["in",145.98],["cells",146.13]]},{"s":147.04,"e":148.5,"text":"Others go after nerves.","words":[["others",147.04],["go",147.5],["after",147.66],["nerves",148.04]]},{"s":149.05,"e":151.19,"text":"One cell alone does almost nothing.","words":[["one",149.05],["cell",149.27],["alone",149.57],["does",149.94],["almost",150.23],["nothing",150.67]]},{"s":151.74,"e":154.17,"text":"But brushing a tentacle sets off thousands,","words":[["but",151.74],["brushing",151.94],["a",152.48],["tentacle",152.55],["sets",153.09],["off",153.36],["thousands",153.56]]},{"s":154.47,"e":155.35,"text":"all at once,","words":[["all",154.47],["at",154.76],["once",154.96]]},{"s":155.65,"e":157.41,"text":"and that's the sudden burn you feel.","words":[["and",155.65],["thats",155.84],["the",156.15],["sudden",156.34],["burn",156.72],["you",156.97],["feel",157.16]]},{"s":157.96,"e":160.99,"text":"For most people, it's more painful than dangerous,","words":[["for",157.96],["most",158.18],["people",158.49],["its",158.94],["more",159.17],["painful",159.47],["than",160.01],["dangerous",160.31]]},{"s":161.29,"e":164.11,"text":"though a few species, like some box jellyfish,","words":[["though",161.29],["a",161.75],["few",161.82],["species",162.05],["like",162.59],["some",162.89],["box",163.19],["jellyfish",163.42]]},{"s":164.41,"e":165.96,"text":"are seriously dangerous.","words":[["are",164.41],["seriously",164.63],["dangerous",165.29]]},{"s":166.51,"e":168.47,"text":"And since nothing here needs a brain,","words":[["and",166.51],["since",166.7],["nothing",167.03],["here",167.49],["needs",167.75],["a",168.07],["brain",168.14]]},{"s":168.77,"e":169.94,"text":"things get strange.","words":[["things",168.77],["get",169.21],["strange",169.43]]},{"s":170.49,"e":172.21,"text":"A dead jellyfish on the beach,","words":[["a",170.49],["dead",170.56],["jellyfish",170.85],["on",171.49],["the",171.63],["beach",171.85]]},{"s":172.51,"e":173.67,"text":"can still sting you.","words":[["can",172.51],["still",172.72],["sting",173.09],["you",173.45]]},{"s":174.22,"e":176.56,"text":"Clownfish live among stinging anemones,","words":[["clownfish",174.22],["live",174.84],["among",175.12],["stinging",175.46],["anemones",176.01]]},{"s":176.86,"e":178.33,"text":"the jellyfish's cousins,","words":[["the",176.86],["jellyfishs",177.08],["cousins",177.82]]},{"s":178.63,"e":180.56,"text":"because their slime lacks a chemical,","words":[["because",178.63],["their",179.07],["slime",179.38],["lacks",179.69],["a",180.0],["chemical",180.06]]},{"s":180.86,"e":182.51,"text":"that helps set those cells off.","words":[["that",180.86],["helps",181.12],["set",181.45],["those",181.65],["cells",181.98],["off",182.31]]},{"s":183.06,"e":185.27,"text":"And some sea slugs eat stinging cells,","words":[["and",183.06],["some",183.27],["sea",183.56],["slugs",183.77],["eat",184.13],["stinging",184.34],["cells",184.91]]},{"s":185.57,"e":186.84,"text":"without firing them,","words":[["without",185.57],["firing",186.09],["them",186.54]]},{"s":187.14,"e":189.1,"text":"then store them in their own bodies,","words":[["then",187.14],["store",187.41],["them",187.75],["in",188.02],["their",188.15],["own",188.49],["bodies",188.7]]},{"s":189.4,"e":191.39,"text":"and use them on their own enemies.","words":[["and",189.4],["use",189.63],["them",189.85],["on",190.14],["their",190.29],["own",190.66],["enemies",190.88]]},{"s":191.94,"e":193.74,"text":"So that sting wasn't an attack.","words":[["so",191.94],["that",192.09],["sting",192.39],["wasnt",192.77],["an",193.14],["attack",193.29]]},{"s":194.29,"e":196.32,"text":"It was thousands of tiny machines,","words":[["it",194.29],["was",194.43],["thousands",194.65],["of",195.3],["tiny",195.45],["machines",195.74]]},{"s":196.62,"e":198.89,"text":"each doing the one thing it was built for,","words":[["each",196.62],["doing",196.9],["the",197.24],["one",197.45],["thing",197.65],["it",197.99],["was",198.13],["built",198.34],["for",198.68]]},{"s":199.19,"e":201.09,"text":"half a billion years in the making.","words":[["half",199.19],["a",199.46],["billion",199.53],["years",200.0],["in",200.34],["the",200.48],["making",200.68]]},{"s":201.64,"e":204.66,"text":"Next up, why can you hold a crocodile's jaws shut,","words":[["next",201.64],["up",201.96],["why",202.12],["can",202.35],["you",202.59],["hold",202.83],["a",203.15],["crocodiles",203.23],["jaws",204.03],["shut",204.34]]},{"s":204.96,"e":206.13,"text":"with your bare hands?","words":[["with",204.96],["your",205.24],["bare",205.51],["hands",205.79]]}];
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
  const PAL = {
    swamp: { sky: ['#e6a964', '#f3cf8e'], sun: ['#e9845b', '#f3ad62', '#f8d891'], sunX: 1010, sunY: 200, far: '#7a7a5a', mid: '#4f6a4e', trees: '#35583f', ground: '#3d5a3a', water: '#4f7f86', fore: '#1d3a2c' },
    dusk: { sky: ['#2b2d5a', '#5a4a7a'], stars: true, far: '#4c5590', mid: '#3d5f7a', trees: '#2a5560', ground: '#2f6b66', fore: '#163a3a' },
    night: { sky: ['#1d1f45', '#33356a'], stars: true, far: '#3a4278', mid: '#2e3f62', ground: '#2a4c55', fore: '#101c2c' },
    ice: { sky: ['#bfe0ec', '#eaf6f8'], far: '#9cc4d4', mid: '#7aa9bf', trees: '#4f7f8c', ground: '#e8f2f4', fore: '#5d8fa0' },
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

  // ================= palette + jellyfish-world sprites (all cut paper, cached) =================
  const C = { ink: '#1f2a55', navy: '#17305e', sea: '#1f6f8f', seaL: '#3fa3b2', seaXL: '#8ad0c8', foam: '#e6f4ee', sand: '#e9cf97', sandD: '#c9a76a', coral: '#e8604a', red: '#d9473b', gold: '#f2b545', teal: '#58b0a6', card: '#fbf6ea', cream: '#f3ecdc', pink: '#ee8fb0', pinkL: '#f8c6d6', pinkD: '#c8588c', purple: '#7c5aa6', lilac: '#b79bd8', venom: '#8cc04a', venomD: '#5f9436', skin: '#eeb48e', skinD: '#d48d68', skinL: '#f7cfae', orange: '#ef8a32', white: '#fbf6ea', grey: '#8a93a8', dark: '#222033', leaf: '#3d8a5a' };
  const blobPath = (x, pts) => { x.beginPath(); poly(x, pts); x.fill(); };
  const ell = (x, seed, cx, cy, rx, ry, rot = 0) => blobPath(x, ellPts(H.rng(seed), cx, cy, rx, ry, rot, 0.5));
  const wave = (x, y0, amp, fr, ph0, col, seed) => { const r = H.rng(seed); x.fillStyle = col; x.beginPath(); poly(x, [...ridge(r, -10, W + 10, (q) => y0 + Math.sin(q * fr + ph0) * amp + Math.sin(q * fr * 2.7 + ph0) * amp * 0.3), [W + 10, HH + 10], [-10, HH + 10]]); x.fill(); };
  // underwater diorama: stacked wave sheets, light rays, sand floor
  const ocean = (key, top = C.seaL, mid = C.sea, deep = C.navy, floor = true) => cache('oc' + key, () => compose(W, HH, [
    [(x) => { x.fillStyle = top; x.fillRect(0, 0, W, HH); x.fillStyle = 'rgba(255,255,255,0.14)'; [[220, 90], [560, 130], [930, 80]].forEach(([a, b], i) => { x.beginPath(); poly(x, [[a, 0], [a + b, 0], [a + b * 0.3 + 160 + i * 30, HH], [a - 170, HH]]); x.fill(); }); }, 0],
    [(x) => wave(x, 300, 26, 0.008, key.length, mid, key.length + 1), 0.7],
    [(x) => wave(x, 470, 22, 0.011, key.length * 2, deep, key.length + 2), 0.8],
    ...(floor ? [[(x) => wave(x, 640, 14, 0.014, 1, C.sand, key.length + 3), 1]] : []),
  ]));
  const paperBg = (key, col, col2) => cache('pb' + key, () => compose(W, HH, [[(x) => { x.fillStyle = col; x.fillRect(0, 0, W, HH); }, 0], [(x) => { const r = H.rng(key.length + 5); x.fillStyle = col2; x.beginPath(); poly(x, circPts(r, 640, 380, 500, 18, 1)); x.fill(); }, 0.6]]));
  // jellyfish bell + frill. Tentacles are separate strips so they can sway.
  const bell = (col = C.pink, lite = C.pinkL, dk = C.pinkD) => cache('bell' + col, () => compose(320, 240, [
    [(x) => { x.fillStyle = col; const r = H.rng(11), pts = []; for (let i = 0; i <= 26; i++) { const a = Math.PI + (i / 26) * Math.PI; pts.push([160 + Math.cos(a) * (140 + r.gauss() * 0.7), 170 + Math.sin(a) * (148 + r.gauss() * 0.7)]); } for (let i = 0; i <= 8; i++) { const u = i / 8; pts.push([300 - u * 280, 170 + (i % 2 ? 26 : 8)]); } blobPath(x, pts); }, 0.5],
    [(x) => { x.fillStyle = lite; ell(x, 12, 160, 104, 86, 62); }, 0.35],
    [(x) => { x.fillStyle = dk; for (let i = 0; i < 4; i++) ell(x, 13 + i, 106 + i * 36, 112, 14, 22); }, 0.25],
  ]));
  const tent = (i, col = C.pinkD, len = 320) => cache('tent' + i + col + len, () => { const r = H.rng(i + 200), w = 80, a = r.range(0.022, 0.032), p = r() * 6; return paperize(w, len, (x) => { x.strokeStyle = col; x.lineWidth = 9 + (i % 3) * 2; x.lineCap = 'round'; x.beginPath(); for (let y = 4; y < len - 4; y += 10) { const q = 40 + Math.sin(y * a + p) * (10 + y * 0.05); y === 4 ? x.moveTo(q, y) : x.lineTo(q, y); } x.stroke(); }, { seed: i + 3 }); });
  const jellyAt = (ctx, x, y, s, t, o = {}) => {
    const c = o.col || C.pink, bob = Math.sin(t * 1.6 + (o.ph || 0)) * 10 * s, pulse = 1 + Math.sin(t * 1.6 + (o.ph || 0)) * 0.035, n = o.n ?? 7, len = o.len ?? 320;
    for (let i = 0; i < n; i++) { const u = n > 1 ? i / (n - 1) : 0.5, tx = x + (u - 0.5) * 230 * s; ctx.save(); ctx.translate(tx, y + 55 * s + bob); ctx.rotate(Math.sin(t * 1.3 + i * 1.1 + (o.ph || 0)) * 0.1 + (o.lean || 0)); ctx.scale(s, s * (1 + Math.sin(t * 1.1 + i) * 0.03)); const sp = tent(i % 5, o.td || C.pinkD, len); ctx.globalAlpha = o.a ?? 1; shadowDraw(ctx, sp, -40, 0, 0.35, 0.35); ctx.restore(); }
    ctx.save(); ctx.globalAlpha = o.a ?? 1; put(ctx, bell(c, o.lite || C.pinkL, o.td || C.pinkD), x, y - 20 * s + bob, { sx: s * pulse, sy: s / pulse, d: o.d ?? 1 }); ctx.restore();
  };
  const brain = () => cache('brain', () => compose(220, 180, [[(x) => { x.fillStyle = C.pink; [[70, 80, 60, 52], [150, 80, 60, 52], [110, 55, 62, 42], [110, 105, 60, 44]].forEach(([a, b, c, d], i) => ell(x, i + 40, a, b, c, d)); }, 0.3], [(x) => { x.strokeStyle = C.pinkD; x.lineWidth = 6; x.lineCap = 'round'; [[110, 22, 110, 140], [55, 55, 88, 72], [60, 100, 92, 92], [165, 55, 132, 72], [160, 100, 128, 92]].forEach(([a, b, c, d]) => { x.beginPath(); x.moveTo(a, b); x.lineTo(c, d); x.stroke(); }); }, 0.1]]));
  const heart = () => cache('heart', () => paperize(160, 150, (x) => { x.fillStyle = C.red; x.beginPath(); x.moveTo(80, 140); x.bezierCurveTo(-40, 60, 25, -15, 80, 40); x.bezierCurveTo(135, -15, 200, 60, 80, 140); x.fill(); }, { seed: 41 }));
  const bone = () => cache('bone', () => paperize(200, 90, (x) => { x.fillStyle = C.card; x.fillRect(40, 30, 120, 30); [[34, 28], [34, 62], [166, 28], [166, 62]].forEach(([a, b], i) => ell(x, 60 + i, a, b, 25, 24)); }, { seed: 42 }));
  const dropS = (col = C.red, seed = 43) => cache('drop' + col, () => paperize(110, 150, (x) => { x.fillStyle = col; x.beginPath(); x.moveTo(55, 6); x.bezierCurveTo(70, 50, 102, 70, 102, 100); x.arc(55, 100, 47, 0, Math.PI); x.bezierCurveTo(8, 70, 40, 50, 55, 6); x.fill(); }, { seed }));
  // the nematocyst, cut away. prog = how much coil is on show, venom = fill 0..1. Quantised and cached.
  const capsuleS = (prog, venom, lid = 0) => { const pq = Math.round(prog * 12), vq = Math.round(venom * 10), lq = lid; return cache('cap' + pq + vq + lq, () => compose(440, 560, [
    [(x) => { x.fillStyle = C.lilac; const pts = ellPts(H.rng(5), 220, 310, 170, 225, 0, 0.6); blobPath(x, pts); }, 0.8],
    [(x) => { x.fillStyle = C.card; ell(x, 6, 220, 310, 145, 200); }, 0.25],
    ...(vq ? [[(x) => { x.save(); x.beginPath(); x.ellipse(220, 310, 145, 200, 0, 0, TAU); x.clip(); x.fillStyle = C.venom; const yy = 510 - 400 * (vq / 10); x.fillRect(0, yy, 440, 560); x.fillStyle = C.venomD; for (let i = 0; i < 16; i++) { const r = H.rng(i + 90); ell(x, i + 70, 90 + r() * 260, yy + 30 + r() * 300, 9, 9); } x.restore(); }, 0.15]] : []),
    [(x) => { x.strokeStyle = C.purple; x.lineWidth = 13; x.lineCap = 'round'; x.lineJoin = 'round'; x.beginPath(); const N = 140 * (pq / 12); for (let i = 0; i <= N; i++) { const u = i / 140, a = u * TAU * 7, rx = 40 + 60 * Math.abs(Math.sin(u * 5)), yy = 170 + u * 280, xx = 220 + Math.cos(a) * rx; i ? x.lineTo(xx, yy) : x.moveTo(xx, yy); } x.stroke(); }, 0.2],
    ...(!lq ? [[(x) => { x.fillStyle = C.coral; x.beginPath(); poly(x, [[150, 92], [290, 92], [272, 122], [168, 122]]); x.fill(); }, 0.5]] : []),
    ...(lq !== 2 ? [[(x) => { x.fillStyle = C.ink; x.beginPath(); poly(x, [[220, 118], [244, 178], [196, 178]]); x.fill(); }, 0.3]] : []),
  ])); };
  // a stinging cell seen from outside, with the capsule inside and a trigger bristle
  const cellOut = (trigger = true) => cache('cell' + trigger, () => compose(460, 520, [
    [(x) => { x.fillStyle = C.teal; blobPath(x, ellPts(H.rng(20), 230, 300, 190, 210, 0, 1)); }, 0.7],
    [(x) => { x.fillStyle = '#7fcabf'; ell(x, 21, 230, 310, 150, 165); }, 0.25],
    [(x) => { x.fillStyle = C.lilac; ell(x, 22, 230, 300, 72, 112); x.fillStyle = C.purple; ell(x, 23, 230, 318, 44, 74); }, 0.4],
    [(x) => { x.fillStyle = C.coral; x.beginPath(); poly(x, [[176, 186], [284, 186], [270, 208], [190, 208]]); x.fill(); }, 0.3],
    ...(trigger ? [[(x) => { x.strokeStyle = C.gold; x.lineWidth = 12; x.lineCap = 'round'; x.beginPath(); x.moveTo(230, 96); x.quadraticCurveTo(216, 50, 240, 14); x.stroke(); }, 0.3]] : []),
  ]));
  const mini = (fired) => cache('mini' + fired, () => compose(90, 110, [[(x) => { x.fillStyle = fired ? C.coral : C.teal; ell(x, fired ? 31 : 30, 45, 64, 36, 40); }, 0.3], [(x) => { x.fillStyle = C.purple; ell(x, 32, 45, 66, 14, 22); }, 0.1]]));
  const tire = () => cache('tire', () => compose(280, 280, [[(x) => { x.fillStyle = C.dark; x.beginPath(); poly(x, circPts(H.rng(70), 140, 140, 130, 14, 0.6)); x.fill(); }, 0.8], [(x) => { x.fillStyle = C.grey; x.beginPath(); poly(x, circPts(H.rng(71), 140, 140, 66, 12, 0.5)); x.fill(); x.fillStyle = C.card; x.beginPath(); poly(x, circPts(H.rng(72), 140, 140, 24, 9, 0.4)); x.fill(); }, 0.3]]));
  const gauge = (ang) => { const q = Math.round(ang * 40); return cache('g' + q, () => compose(420, 300, [[(x) => { x.fillStyle = C.card; x.beginPath(); x.arc(210, 240, 200, Math.PI, 0); x.closePath(); x.fill(); }, 0.8], [(x) => { [[C.teal, 0, 0.5], [C.gold, 0.5, 0.8], [C.red, 0.8, 1]].forEach(([c, a, b]) => { x.strokeStyle = c; x.lineWidth = 36; x.beginPath(); x.arc(210, 240, 160, Math.PI + a * Math.PI, Math.PI + b * Math.PI); x.stroke(); }); }, 0.2], [(x) => { const a = Math.PI + (q / 40) * Math.PI; x.strokeStyle = C.ink; x.lineWidth = 12; x.lineCap = 'round'; x.beginPath(); x.moveTo(210, 240); x.lineTo(210 + Math.cos(a) * 170, 240 + Math.sin(a) * 170); x.stroke(); x.fillStyle = C.ink; ell(x, 80, 210, 240, 20, 20); }, 0.4]])); };
  const hydra = () => cache('hydra', () => compose(280, 420, [[(x) => { x.strokeStyle = C.leaf; x.lineWidth = 14; x.lineCap = 'round'; [[-1, 0.9], [-0.55, 1.2], [0, 1.3], [0.55, 1.2], [1, 0.9]].forEach(([d, l]) => { x.beginPath(); x.moveTo(140, 150); x.quadraticCurveTo(140 + d * 70, 90, 140 + d * 110, 150 - 120 * l + 50); x.stroke(); }); }, 0.3], [(x) => { x.fillStyle = '#6fb56a'; x.beginPath(); poly(x, [[112, 130], [168, 130], [158, 400], [122, 400]]); x.fill(); ell(x, 81, 140, 400, 46, 16); }, 0.5]]));
  const camera = () => cache('cam', () => compose(320, 220, [[(x) => { x.fillStyle = C.ink; x.fillRect(16, 50, 220, 140); x.fillStyle = C.grey; x.beginPath(); poly(x, [[236, 90], [310, 60], [310, 180], [236, 150]]); x.fill(); }, 0.6], [(x) => { x.fillStyle = C.gold; x.fillRect(40, 72, 90, 32); x.fillStyle = C.red; ell(x, 82, 190, 80, 12, 12); }, 0.2]]));
  const shrimp = () => cache('shr', () => compose(340, 200, [[(x) => { x.fillStyle = C.teal; [[60, 130, 46, 38], [120, 110, 58, 54], [190, 100, 60, 58], [255, 110, 52, 50]].forEach(([a, b, c, d], i) => ell(x, i + 83, a, b, c, d)); }, 0.5], [(x) => { x.fillStyle = C.coral; ell(x, 88, 290, 150, 44, 24, -0.5); x.fillStyle = C.gold; for (let i = 0; i < 3; i++) ell(x, 89 + i, 100 + i * 66, 104, 8, 44); x.fillStyle = C.ink; ell(x, 95, 280, 76, 11, 11); }, 0.25]]));
  const crab = () => cache('crab', () => compose(460, 300, [[(x) => { x.strokeStyle = '#b23c2c'; x.lineWidth = 15; x.lineCap = 'round'; [0, 1, 2].forEach((i) => { [-1, 1].forEach((d) => { x.beginPath(); x.moveTo(230 + d * 70, 170 + i * 16); x.quadraticCurveTo(230 + d * (150 + i * 12), 160 + i * 18, 230 + d * (170 + i * 18), 262 + i * 8); x.stroke(); }); }); x.lineWidth = 20; [-1, 1].forEach((d) => { x.beginPath(); x.moveTo(230 + d * 100, 130); x.quadraticCurveTo(230 + d * 170, 120, 230 + d * 170, 70); x.stroke(); }); }, 0.3], [(x) => { x.fillStyle = C.coral; ell(x, 96, 230, 165, 125, 80); ell(x, 97, 60, 58, 42, 36); ell(x, 98, 400, 58, 42, 36); x.fillStyle = '#fbf6ea'; ell(x, 111, 195, 118, 16, 16); ell(x, 112, 265, 118, 16, 16); x.fillStyle = C.ink; ell(x, 99, 195, 120, 8, 8); ell(x, 100, 265, 120, 8, 8); }, 0.5]]));
  const bullet = () => cache('bul', () => compose(300, 110, [[(x) => { x.fillStyle = C.gold; x.beginPath(); x.moveTo(20, 24); x.lineTo(190, 24); x.quadraticCurveTo(280, 30, 290, 55); x.quadraticCurveTo(280, 80, 190, 86); x.lineTo(20, 86); x.closePath(); x.fill(); }, 0.5], [(x) => { x.fillStyle = C.orange; x.fillRect(20, 24, 44, 62); }, 0.1]]));
  const clown = () => cache('clown', () => compose(300, 170, [[(x) => { x.fillStyle = C.orange; ell(x, 101, 165, 85, 110, 58); x.beginPath(); poly(x, [[70, 85], [10, 30], [10, 140]]); x.fill(); }, 0.5], [(x) => { x.fillStyle = C.card; x.fillRect(115, 34, 26, 102); x.fillRect(205, 42, 22, 88); x.fillRect(60, 60, 18, 50); x.fillStyle = C.ink; ell(x, 102, 250, 72, 9, 9); }, 0.15]]));
  const anemone = () => cache('anem', () => compose(760, 420, [[(x) => { x.strokeStyle = C.lilac; x.lineWidth = 26; x.lineCap = 'round'; const r = H.rng(103); for (let i = 0; i < 17; i++) { const u = i / 16, bx = 130 + u * 500, tip = bx + (u - 0.5) * 240 + r.range(-20, 20), ty = 70 + Math.abs(u - 0.5) * 220 + r.range(-20, 20); x.beginPath(); x.moveTo(bx, 370); x.quadraticCurveTo(bx + r.range(-40, 40), 220, tip, ty); x.stroke(); } }, 0.45], [(x) => { x.fillStyle = C.purple; x.beginPath(); poly(x, ellPts(H.rng(104), 380, 380, 300, 60, 0, 0.6)); x.fill(); }, 0.5]]));
  const slug = () => cache('slug', () => compose(620, 300, [[(x) => { x.fillStyle = C.gold; x.beginPath(); poly(x, [[30, 250], [120, 180], [480, 180], [600, 240], [590, 270], [40, 280]]); x.fill(); x.strokeStyle = C.gold; x.lineWidth = 11; x.lineCap = 'round'; [[540, 200, 570, 130], [565, 210, 610, 150]].forEach(([a, b, c, d]) => { x.beginPath(); x.moveTo(a, b); x.lineTo(c, d); x.stroke(); }); }, 0.5], [(x) => { x.strokeStyle = C.purple; x.lineWidth = 26; x.lineCap = 'round'; for (let i = 0; i < 10; i++) { const bx = 110 + i * 38; x.beginPath(); x.moveTo(bx, 200); x.lineTo(bx + (i - 4.5) * 7, 92 - Math.sin(i * 1.5) * 16); x.stroke(); } x.fillStyle = C.ink; ell(x, 105, 530, 222, 8, 8); }, 0.25]]));
  const croc = () => cache('croc', () => compose(620, 320, [[(x) => { x.fillStyle = C.leaf; x.beginPath(); poly(x, [[20, 250], [80, 150], [260, 120], [590, 150], [605, 190], [260, 205], [250, 300], [70, 300]]); x.fill(); x.fillStyle = '#2f6d47'; for (let i = 0; i < 5; i++) { x.beginPath(); poly(x, [[80 + i * 42, 150 - i * 4], [100 + i * 42, 112 - i * 4], [120 + i * 42, 146 - i * 4]]); x.fill(); } }, 0.5], [(x) => { x.fillStyle = C.card; for (let i = 0; i < 12; i++) { x.beginPath(); poly(x, [[300 + i * 25, 190], [312 + i * 25, 214], [324 + i * 25, 190]]); x.fill(); } x.fillStyle = C.gold; ell(x, 106, 300, 128, 22, 22); x.fillStyle = C.ink; ell(x, 107, 304, 128, 9, 14); }, 0.2]]));
  const handS = () => cache('hand', () => compose(300, 240, [[(x) => { x.fillStyle = C.skin; x.beginPath(); poly(x, [[10, 90], [170, 70], [280, 60], [290, 100], [200, 130], [230, 190], [130, 210], [10, 200]]); x.fill(); }, 0.5]]));
  const sprAt = (ctx, spr, x, y, t, st, op = {}) => { const A = op.pop ? popIn(t, st, op.du ?? 0.35) : dropIn(t, st, op.du ?? 0.4, op.dist ?? 60); if (!A) return null; put(ctx, spr, x, y + (A.dy || 0), { s: A.s * (op.s ?? 1), rot: op.rot, d: (op.d ?? 1) + A.d }); return A; };
  const burstAt = (ctx, x, y, t, st, s = 1, col) => { const u = cl((t - st) / 0.4); if (u <= 0) return; put(ctx, burstSpr(col), x, y, { s: s * (0.2 + 0.8 * E.back(u)), rot: t * 0.25, d: 0.7 }); };
  const kb = (ctx, t, a, b, s0, s1, cx = 640, cy = 360) => { const u = E.inOut(ph(t, a, b)), s = s0 + (s1 - s0) * u; ctx.translate(cx, cy); ctx.scale(s, s); ctx.translate(-cx, -cy); };
  const cardS = (w, h, col = C.card, seed = 1) => cache('card' + w + h + col, () => paperize(w, h, (x) => { x.fillStyle = col; x.beginPath(); poly(x, cutLines(H.rng(seed + w), [[6, 6], [w - 6, 6], [w - 6, h - 6], [6, h - 6], [6, 6]], 26, 0.6)); x.fill(); }, { seed: seed + 40 }));
  const crossOn = (ctx, x, y, t, st, s = 1) => { const A = popIn(t, st, 0.3); if (A) put(ctx, crossSpr(), x, y, { s: A.s * s, d: 1 + A.d }); };
  const bubbles = (ctx, t, n = 10, seed = 3) => { const r = H.rng(seed); for (let i = 0; i < n; i++) { const x = r() * W, sp = r.range(20, 50), rr = r.range(0.25, 0.7), y = HH - ((t * sp + r() * 800) % 800) + 40; put(ctx, cache('bub', () => paperize(50, 50, (c) => { c.fillStyle = 'rgba(230,246,240,0.8)'; ell(c, 110, 25, 25, 20, 20); }, { seed: 12, rim: false })), x + Math.sin(t + i) * 10, y, { s: rr, d: 0.15 }); } };
  // ================= scenes: hook =================
  const sHook = (ctx, t) => {
    ctx.drawImage(ocean('hook'), 0, 0);
    ctx.save(); kb(ctx, t, 0, PE(1), 1.1, 1);
    bubbles(ctx, t, 8, 4);
    jellyAt(ctx, 640, 170, 1.05, t);
    jellyAt(ctx, 170, 190, 0.45, t, { ph: 1, col: C.lilac, lite: C.card, td: C.purple });
    jellyAt(ctx, 1110, 220, 0.5, t, { ph: 2, col: C.lilac, lite: C.card, td: C.purple });
    ctx.restore();
    const A = dropIn(t, P(1, 'millionth') - 0.15, 0.4, 70);
    if (A) { put(ctx, cardS(1000, 190, C.card), 640, 540 + A.dy, { d: 1.3 + A.d, rot: -0.01 }); put(ctx, wordSpr('1 MILLIONTH', 84, C.coral, null), 640, 505 + A.dy, { d: 0.3 }); put(ctx, wordSpr('OF A SECOND', 48, C.ink, null), 640, 590 + A.dy, { d: 0.3 }); }
  };
  const sNoBrainHook = (ctx, t) => {
    ctx.drawImage(paperBg('nb', C.navy, C.sea), 0, 0);
    burstAt(ctx, 640, 300, t, PS(2), 1.5, C.gold);
    sprAt(ctx, brain(), 640, 300, t, PS(2), { s: 1.45, pop: true });
    crossOn(ctx, 640, 300, t, P(2, 'brain') - 0.05, 2.4);
    tag(ctx, 'NO BRAIN', 640, 530, t, P(2, 'brain') - 0.1, { px: 74, col: C.red });
    tag(ctx, "YOU'LL NEVER SEE IT", 640, 640, t, P(3, 'never') - 0.15, { px: 44, col: C.ink });
  };
  // a swimmer's legs from below, tentacle drifting close
  const sQuestion = (ctx, t) => {
    ctx.drawImage(ocean('q', C.seaXL, C.seaL, C.sea), 0, 0);
    const legs = cache('legs', () => compose(380, 480, [[(x) => { x.fillStyle = C.skin; x.beginPath(); poly(x, [[60, 0], [170, 0], [165, 300], [150, 460], [95, 460], [85, 300]]); x.fill(); x.beginPath(); poly(x, [[210, 0], [320, 0], [310, 240], [290, 400], [235, 400], [225, 240]]); x.fill(); }, 0.8], [(x) => { x.fillStyle = C.coral; x.fillRect(50, 0, 280, 90); }, 0.2]]));
    put(ctx, legs, 870, 210 + Math.sin(t * 2) * 8, { d: 1.2, rot: 0.04 });
    jellyAt(ctx, 300, 170, 0.95, t, { lean: -0.35, len: 420 });
    cutTitle(ctx, 'WHAT HAPPENS', 640, 500, 78, t, PS(4), { step: 0.03, cols: [C.coral, C.ink, C.coral] });
    cutTitle(ctx, 'WHEN IT STINGS?', 640, 610, 78, t, PS(5), { step: 0.03, cols: [C.ink, C.coral, C.ink] });
  };
  // ================= chapter 1: the animal =================
  const sAncient = (ctx, t) => {
    ctx.drawImage(ocean('anc', '#4fa8a8', '#2c7d8f', '#1b4a72'), 0, 0);
    ctx.save(); kb(ctx, t, PS(6), PE(8), 1.05, 1);
    bubbles(ctx, t, 8, 5);
    [[210, 260, 0.6, 0], [1060, 210, 0.7, 2], [640, 150, 0.9, 1], [420, 170, 0.38, 3], [870, 360, 0.42, 4]].forEach(([x, y, s, p]) => jellyAt(ctx, x + Math.sin(t * 0.3 + p) * 30, y, s, t, { ph: p, n: 5, len: 240, col: p % 2 ? C.pink : C.lilac, lite: p % 2 ? C.pinkL : C.card, td: p % 2 ? C.pinkD : C.purple }));
    ctx.restore();
    const A = dropIn(t, P(8, '500') - 0.15, 0.4, 70);
    if (A) { put(ctx, cardS(1060, 220, C.card), 640, 560 + A.dy, { d: 1.3 + A.d, rot: 0.008 }); numberRow(ctx, '500,000,000', 640, 520 + A.dy, 88, C.coral, { center: true }); put(ctx, wordSpr('YEARS AND COUNTING', 40, C.ink, null), 640, 618 + A.dy, { d: 0.3 }); }
  };
  const sNoOrgans = (ctx, t) => {
    ctx.drawImage(paperBg('no', '#2b5e7a', C.seaL), 0, 0);
    jellyAt(ctx, 640, 200, 0.95, t, { len: 300 });
    const it = (spr, x, y, st, s, name) => { const A = dropIn(t, st, 0.4, 60); if (!A) return; put(ctx, cardS(290, 250, C.card), x, y + A.dy, { d: 1 + A.d, rot: (x - 640) * 0.00006 }); put(ctx, spr, x, y - 26 + A.dy, { s, d: 0.5 }); put(ctx, wordSpr(name, 36, C.ink, null), x, y + 86 + A.dy, { d: 0.2 }); crossOn(ctx, x, y - 26, t, st + 0.22, 1.25); };
    it(brain(), 180, 180, P(9, 'brain') - 0.12, 0.72, 'BRAIN');
    it(heart(), 1100, 180, P(10, 'heart') - 0.12, 0.8, 'HEART');
    it(bone(), 180, 530, P(11, 'bones') - 0.12, 0.85, 'BONES');
    it(dropS(), 1100, 530, P(12, 'blood') - 0.12, 0.72, 'BLOOD');
  };
  const sNerve = (ctx, t) => {
    ctx.drawImage(ocean('ner', '#2f7f98', '#1f5f88', C.navy, false), 0, 0);
    const a = P(14, 'net') - 0.2, u = E.inOut(ph(t, a, a + 1.5)), bob = Math.sin(t * 1.6) * 19;
    jellyAt(ctx, 640, 290, 1.9, t, { n: 7, len: 180, col: '#f5b7cc', lite: '#fdeef2', td: C.pinkD, d: 0.8 });
    const nodes = [[640, 30]]; [[100, 6], [180, 10], [245, 14]].forEach(([rr, m], ri) => { for (let i = 0; i <= m; i++) { const an = Math.PI + (i / m) * Math.PI, r = H.rng(ri * 31 + i + 7); nodes.push([640 + Math.cos(an) * (rr + r() * 14), 300 + Math.sin(an) * (rr * 1.04 + r() * 14), ri, i, m]); } });
    ctx.save(); ctx.translate(0, bob); ctx.lineCap = 'round'; ctx.strokeStyle = C.navy; ctx.lineWidth = 5;
    nodes.forEach((n, i) => { const q = cl(u * nodes.length * 1.05 - i); if (q <= 0) return; nodes.forEach((e, j) => { if (j >= i) return; const d = Math.hypot(e[0] - n[0], e[1] - n[1]); if (d > 105) return; ctx.beginPath(); ctx.moveTo(e[0], e[1]); ctx.lineTo(e[0] + (n[0] - e[0]) * q, e[1] + (n[1] - e[1]) * q); ctx.stroke(); }); });
    nodes.forEach((n, i) => { if (cl(u * nodes.length * 1.05 - i) <= 0) return; ctx.fillStyle = C.gold; ctx.beginPath(); ctx.arc(n[0], n[1], 9, 0, TAU); ctx.fill(); });
    ctx.restore();
    tag(ctx, 'NERVE NET', 200, 180, t, P(14, 'net') - 0.15, { px: 52, col: C.ink, rot: -0.03 });
    tag(ctx, 'SEE-THROUGH BODY', 1000, 640, t, P(15, 'body') - 0.5, { px: 40, col: C.ink, rot: 0.02 });
  };
  const sNotAngry = (ctx, t) => {
    ctx.drawImage(paperBg('ang', C.seaXL, C.foam), 0, 0);
    jellyAt(ctx, 330, 210, 1, t, { len: 300 });
    const row = (s, y, st, st2) => { const A = dropIn(t, st, 0.4, 60); if (!A) return; put(ctx, cardS(600, 150, C.card), 880, y + A.dy, { d: 1.1 + A.d }); put(ctx, wordSpr(s, 56, C.ink, null), 840, y + A.dy, { d: 0.2 }); crossOn(ctx, 1110, y, t, st2, 0.9); };
    row('ANGRY', 200, P(17, 'angry') - 0.12, P(17, 'angry') + 0.15);
    row('AWARE OF YOU', 420, P(18, 'aware') - 0.12, P(18, 'you') - 0.05);
  };
  const sDrift = (ctx, t) => {
    ctx.drawImage(ocean('dr', C.seaL, C.sea, '#215684'), 0, 0);
    const a = PS(19), x = 180 + (t - a) * 60;
    ctx.save(); bubbles(ctx, t, 9, 8); jellyAt(ctx, x, 150, 0.9, t, { lean: 0.12, len: 440 }); ctx.restore();
    tag(ctx, 'JUST DRIFTING', 950, 180, t, P(19, 'drift') - 0.2, { px: 56, col: C.ink });
    const A = popIn(t, P(20, 'tentacles') - 0.15, 0.35);
    if (A) { arrow(ctx, 880, 470, 720, 470, 480 + (t - a) * 60, 440, cl((t - P(20, 'tentacles')) / 0.5), C.coral, 5); put(ctx, wordSpr('THE TENTACLES', 52, C.coral, C.card, 12), 1010, 480, { s: A.s, d: 1 }); }
  };
  // ================= chapter 2: the harpoon =================
  const tentBand = (key) => cache('band' + key, () => compose(W, 420, [[(x) => { const r = H.rng(key.length + 1); x.fillStyle = C.pink; x.beginPath(); poly(x, [...ridge(r, -10, W + 10, (q) => 30 + Math.sin(q * 0.01) * 16), ...ridge(r, -10, W + 10, (q) => 390 + Math.sin(q * 0.012) * 14).reverse()]); x.fill(); }, 0.8], [(x) => { const r = H.rng(5); x.fillStyle = C.pinkL; for (let i = 0; i < 90; i++) ell(x, i + 300, r() * W, 60 + r() * 300, 20, 20); }, 0.15]]));
  const sZoom = (ctx, t) => {
    ctx.drawImage(ocean('z', '#2f8a9a', '#1f6f8f', C.navy, false), 0, 0);
    const a = PS(21), z = E.inOut(ph(t, a, a + 1.6));
    ctx.save(); ctx.translate(640, 360); ctx.scale(1 + z * 0.15, 1 + z * 0.15); ctx.translate(-640, -360);
    ctx.drawImage(tentBand('z'), 0, 150);
    const r = H.rng(66), st = P(22, 'thousands') - 0.2;
    for (let i = 0; i < 60; i++) { const x = 40 + r() * 1200, y = 200 + r() * 320, d = st + r() * 1.1; const A = popIn(t, d, 0.25); if (A) put(ctx, mini(false), x, y, { s: A.s * 0.5, d: 0.4 }); }
    ctx.restore();
    tag(ctx, 'ONE TENTACLE', 300, 90, t, P(21, 'tentacle') - 0.3, { px: 50, col: C.ink, rot: -0.02 });
    tag(ctx, 'THOUSANDS OF STINGING CELLS', 640, 640, t, P(22, 'thousands') - 0.1, { px: 46, col: C.coral });
  };
  const sCell = (ctx, t) => {
    ctx.drawImage(paperBg('cell', '#1d5a72', C.seaL), 0, 0);
    sprAt(ctx, cellOut(false), 560, 370, t, PS(23) - 0.1, { s: 1.15 });
    const a = P(23, 'capsule') - 0.12;
    if (t > a) { arrow(ctx, 860, 250, 760, 240, 640, 340, cl((t - a) / 0.4), C.coral, 6); tag(ctx, 'CAPSULE', 1000, 240, t, a, { px: 52, col: C.coral }); }
    tag(ctx, 'NEMATOCYST', 960, 470, t, P(24, 'nematocyst') - 0.15, { px: 70, col: C.ink, rot: -0.015 });
  };
  const sHair = (ctx, t) => {
    ctx.drawImage(paperBg('hair', C.cream, '#ead9b8'), 0, 0);
    const hair = cache('hairband', () => compose(W + 60, 340, [[(x) => { x.fillStyle = '#5a3a24'; x.beginPath(); poly(x, [[-10, 20], [W + 70, 8], [W + 70, 330], [-10, 318]]); x.fill(); }, 1], [(x) => { x.strokeStyle = '#7a5236'; x.lineWidth = 5; for (let i = 0; i < 16; i++) { const y = 40 + i * 18; x.beginPath(); x.moveTo(-10, y + 6); x.lineTo(W + 70, y); x.stroke(); } }, 0]]));
    const A = dropIn(t, PS(25) - 0.1, 0.45, 80); if (A) ctx.drawImage(hair, -30, 200 + A.dy);
    const st = P(25, 'several') - 0.1;
    for (let i = 0; i < 5; i++) { const B = popIn(t, st + 0.15 + i * 0.22, 0.28); if (B) put(ctx, mini(false), 640, 228 + i * 62, { s: B.s * 0.62, d: 0.7 }); }
    tag(ctx, 'ONE HUMAN HAIR', 640, 110, t, P(26, 'hair') - 0.5, { px: 58, col: C.ink });
    tag(ctx, 'SEVERAL ACROSS: 5-15 MICRONS EACH', 640, 610, t, P(26, 'single') - 0.1, { px: 40, col: C.coral });
  };
  const sThread = (ctx, t) => {
    ctx.drawImage(paperBg('thr', '#27456e', '#3b6c8c'), 0, 0);
    const a = PS(27), prog = E.inOut(ph(t, P(28, 'thread') - 0.5, PE(29)));
    ctx.save(); kb(ctx, t, a, PE(30), 0.95, 1.08, 480, 360);
    put(ctx, capsuleS(prog, 0), 480, 370, { s: 1.15, d: 1.2 });
    ctx.restore();
    tag(ctx, 'HOLLOW THREAD', 960, 240, t, P(28, 'thread') - 0.15, { px: 50, col: C.purple });
    tag(ctx, 'COILED SPRING', 960, 350, t, P(29, 'coiled') - 0.15, { px: 50, col: C.ink });
    const b = P(30, 'tip') - 0.12;
    if (t > b) { arrow(ctx, 880, 490, 720, 450, 520, 200, cl((t - b) / 0.4), C.coral, 8); tag(ctx, 'SHARP TIP', 960, 500, t, b, { px: 56, col: C.coral }); }
  };
  const sLoaded = (ctx, t) => {
    ctx.drawImage(paperBg('load', '#27456e', '#355a7a'), 0, 0);
    const v = E.inOut(ph(t, P(32, 'bath') - 0.3, PE(32) + 0.3));
    put(ctx, capsuleS(1, v), 420, 370, { s: 1.15, d: 1.2 });
    const A = popIn(t, P(31, 'loaded') - 0.12, 0.35);
    if (A) { put(ctx, burstSpr(C.gold), 930, 230, { s: 1.3 * A.s, rot: t * 0.1 }); put(ctx, wordSpr('LOADED', 72, C.ink, C.card, 14), 930, 200, { s: A.s, d: 1 }); put(ctx, wordSpr('HARPOON', 72, C.coral, C.card, 14), 930, 300, { s: A.s, d: 1 }); }
    tag(ctx, 'VENOM', 930, 520, t, P(32, 'venom') - 0.15, { px: 72, col: C.venomD });
  };
  const sPressure = (ctx, t) => {
    ctx.drawImage(paperBg('pr', '#7a2e3e', C.coral), 0, 0);
    const u = E.out(ph(t, PS(33), P(34, '150')));
    put(ctx, gauge(0.08 + 0.87 * u + (u >= 1 ? Math.sin(t * 25) * 0.012 : 0)), 640, 250, { s: 1.35, d: 1.2 });
    const A = dropIn(t, P(34, '150') - 0.15, 0.4, 70);
    if (A) { put(ctx, cardS(980, 210, C.card), 640, 560 + A.dy, { d: 1.4 + A.d, rot: -0.01 }); numberRow(ctx, '150x', 300, 555 + A.dy, 120, C.coral, { center: true }); put(ctx, wordSpr('NORMAL AIR', 54, C.ink, null), 800, 520 + A.dy, { d: 0.2 }); put(ctx, wordSpr('PRESSURE', 54, C.ink, null), 800, 595 + A.dy, { d: 0.2 }); }
  };
  const sTire = (ctx, t) => {
    ctx.drawImage(paperBg('tr', C.cream, '#eadfc4'), 0, 0);
    const bar = (x, h0, col, st) => { const u = E.out(ph(t, st, st + 0.7)); if (u <= 0) return; const h = h0 * u; ctx.save(); ctx.fillStyle = col; const sp = cache('bar' + col, () => paperize(170, 560, (c) => { c.fillStyle = col; c.fillRect(0, 0, 170, 560); }, { seed: 9 })); shadowDraw(ctx, sp.width ? (() => { const L = H.layer(170, Math.max(2, h)); L.getContext('2d').drawImage(sp, 0, 0); return L; })() : sp, x - 85, 640 - h, 0.8); ctx.restore(); };
    const a = P(36, 'tire') - 0.1, b = P(35, 'dozens') - 0.1;
    sprAt(ctx, tire(), 300, 500, t, a, { s: 0.75 }); bar(300, 6, C.dark, a + 0.1);
    tag(ctx, 'CAR TIRE', 300, 680, t, a, { px: 34, col: C.ink, bw: 8 });
    sprAt(ctx, capsuleS(1, 1), 880, 130, t, PS(35) - 0.1, { s: 0.3 }); bar(880, 410, C.coral, b);
    tag(ctx, 'CAPSULE', 880, 680, t, PS(35), { px: 34, col: C.coral, bw: 8 });
    tag(ctx, 'DOZENS OF TIMES HIGHER', 390, 90, t, b, { px: 42, col: C.ink });
  };
  // ================= chapter 3: the trigger =================
  const sTrigger = (ctx, t) => {
    ctx.drawImage(ocean('tr', C.seaL, C.sea, '#215684', false), 0, 0);
    sprAt(ctx, cellOut(true), 560, 390, t, PS(37) - 0.1, { s: 1.15 });
    const b = P(38, 'trigger') - 0.12;
    if (t > b) { arrow(ctx, 900, 150, 760, 90, 610, 120, cl((t - b) / 0.4), C.coral, 11); tag(ctx, 'TRIGGER', 1020, 170, t, b, { px: 62, col: C.coral }); }
    burstAt(ctx, 1040, 450, t, PS(37), 0.72, C.gold);
    tag(ctx, '?', 1040, 450, t, PS(37) + 0.1, { px: 110, col: C.ink, back: null });
  };
  const sBump = (ctx, t) => {
    ctx.drawImage(ocean('bu', C.seaL, C.sea, '#215684', false), 0, 0);
    const c0 = P(39, 'bump') - 0.1, u = E.inOut(ph(t, c0 - 0.6, c0)), open = t >= P(40, 'lid') - 0.1;
    put(ctx, cellOut(!open), 500, 400, { s: 1.1, d: 1 });
    if (open) { const A = popIn(t, P(40, 'lid') - 0.1, 0.3); burstAt(ctx, 500, 150, t, P(40, 'lid') - 0.1, 0.7, C.gold); if (A) put(ctx, wordSpr('POP!', 80, C.red, C.card, 14), 500, 130, { s: A.s, d: 1 }); }
    else put(ctx, handS(), 960 - 340 * u, 90 + u * 30, { s: 0.9, rot: 0.1, d: 1.1 });
    tag(ctx, 'TOUCH', 980, 340, t, c0, { px: 60, col: C.coral });
    tag(ctx, 'OR CHEMICALS', 980, 450, t, P(39, 'chemicals') - 0.3, { px: 54, col: C.venomD });
    tag(ctx, 'LID OPENS', 980, 580, t, P(40, 'lid') - 0.1, { px: 54, col: C.ink });
  };
  const sFire = (ctx, t) => {
    ctx.drawImage(paperBg('fi', '#1d4a6e', C.seaL), 0, 0);
    const w0 = PS(41), f0 = P(43, 'fires') - 0.1, inA = ph(t, w0, w0 + 1), fired = t >= f0, sh = fired ? 0 : Math.sin(t * 40) * ph(t, PS(42), f0) * 7;
    put(ctx, capsuleS(fired ? 0.2 : 1, 1, fired ? 2 : 1), 400 + sh, 400, { s: 0.95, d: 1.2 });
    if (!fired) for (let i = 0; i < 3; i++) { const yy = 200 + i * 150, p = cl(inA * 2 - i * 0.4); arrow(ctx, 40, yy, 110, yy - 10, 210, yy + 20, p, C.seaXL, 20 + i); }
    tag(ctx, 'SEAWATER RUSHES IN', 900, 120, t, w0, { px: 44, col: C.ink });
    tag(ctx, 'PRESSURE!', 900, 200, t, P(42, 'pressure') - 0.1, { px: 60, col: C.coral, rot: 0.02 });
    if (fired) { const u = E.out(ph(t, f0, f0 + 0.09)); ctx.save(); ctx.strokeStyle = C.purple; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(400, 225); ctx.quadraticCurveTo(600, 340, 400 + 780 * u, 330); ctx.stroke(); ctx.fillStyle = C.ink; ctx.beginPath(); const hx = 400 + 780 * u; ctx.moveTo(hx + 50, 334); ctx.lineTo(hx - 12, 296); ctx.lineTo(hx - 12, 364); ctx.fill(); ctx.restore(); burstAt(ctx, 1130, 480, t, f0, 1, C.gold); const A = popIn(t, f0, 0.25); if (A) put(ctx, wordSpr('FIRE!', 96, C.red, C.card, 16), 1000, 500, { s: A.s, d: 1 }); }
  };
  const sAlone = (ctx, t) => {
    ctx.drawImage(paperBg('al', C.navy, '#2c7d8f'), 0, 0);
    sprAt(ctx, brain(), 330, 300, t, PS(44) - 0.1, { s: 1.2 });
    crossOn(ctx, 330, 300, t, P(44, 'brain') - 0.05, 2);
    tag(ctx, 'NO ORDERS', 330, 520, t, P(44, 'tells') - 0.2, { px: 58, col: C.ink });
    sprAt(ctx, cellOut(true), 920, 310, t, PS(45) - 0.1, { s: 0.75 });
    tag(ctx, 'MOSTLY ON ITS OWN', 900, 600, t, P(45, 'own') - 0.45, { px: 50, col: C.coral });
  };
  // ================= chapter 4: the shot =================
  const s2006 = (ctx, t) => {
    ctx.drawImage(ocean('c6', C.seaXL, C.seaL, C.teal, false), 0, 0);
    tag(ctx, 'HARD TO BELIEVE', 640, 70, t, P(46, 'hard') - 0.1, { px: 48, col: C.coral });
    const a = P(47, '2006') - 0.15; const A = dropIn(t, a, 0.4, 70);
    if (A) { put(ctx, cardS(330, 150, C.ink), 230, 230 + A.dy, { d: 1.1 + A.d, rot: -0.03 }); numberRow(ctx, '2006', 230, 230 + A.dy, 74, C.coral, { center: true }); }
    sprAt(ctx, hydra(), 660, 420, t, P(48, 'hydra') - 0.15, { s: 1 });
    tag(ctx, 'HYDRA', 860, 250, t, P(48, 'hydra') - 0.1, { px: 56, col: C.leaf });
    tag(ctx, 'JELLYFISH RELATIVE', 910, 340, t, P(48, 'relative') - 0.15, { px: 34, col: C.ink, bw: 8 });
    sprAt(ctx, camera(), 240, 450, t, P(49, 'camera') - 0.15, { s: 1 });
    tag(ctx, '1,000,000+ FRAMES/SEC', 640, 650, t, P(49, 'million') - 0.12, { px: 52, col: C.coral });
  };
  const s700 = (ctx, t) => {
    ctx.drawImage(paperBg('n7', C.ink, '#2b3f7a'), 0, 0);
    const a = P(51, '700') - 0.15;
    burstAt(ctx, 640, 290, t, a, 1.35, C.gold);
    tag(ctx, 'THE FIRST PART OF THE SHOT', 640, 62, t, PS(50), { px: 40, col: C.ink });
    const A = dropIn(t, a, 0.4, 80);
    if (A) numberRow(ctx, '700', 640, 270 + A.dy, 170, C.coral, { center: true });
    tag(ctx, 'NANOSECONDS', 640, 410, t, P(51, 'nanoseconds') - 0.15, { px: 62, col: C.ink });
    const B = dropIn(t, P(52, 'seven') - 0.15, 0.4, 60);
    if (B) { put(ctx, cardS(780, 130, C.card), 640, 590 + B.dy, { d: 1.1 + B.d }); numberRow(ctx, '0.0000007 s', 640, 590 + B.dy, 66, C.red, { center: true }); }
  };
  const sG = (ctx, t) => {
    ctx.drawImage(paperBg('gg', C.cream, '#f0e2c2'), 0, 0);
    const row = (y, lab, val, frac, col, st, ico, is) => { const A = dropIn(t, st, 0.35, 50); if (!A) return; const u = E.out(ph(t, st, st + 0.9)), w = Math.max(8, frac * 1110 * u); if (ico) put(ctx, ico, 120, y + A.dy - 40, { s: is, d: 0.6 }); const sp = cache('b' + col, () => paperize(1140, 60, (c) => { c.fillStyle = col; c.fillRect(0, 0, 1140, 60); }, { seed: 4 })), L = H.layer(Math.ceil(w), 60); L.getContext('2d').drawImage(sp, 0, 0); shadowDraw(ctx, L, 80, y + A.dy + 18, 0.5); put(ctx, wordSpr(lab, 36, C.ink, null), 200 + lab.length * 13, y + A.dy - 40, { d: 0.1 }); numberRow(ctx, val, Math.max(1020, 0), y + A.dy - 40, 50, col, { center: true, d: 0.4 }); };
    row(160, 'JELLY TIP (HYDRA)', '5,000,000 g', 1, C.coral, P(53, 'five') - 0.15);
    row(350, 'MANTIS SHRIMP', '10,000 g', 10000 / 5000000, C.teal, P(55, 'shrimps') - 0.2, shrimp(), 0.32);
    row(540, 'PEOPLE BLACK OUT', '6 g', 6 / 5000000, C.ink, P(54, 'six') - 0.8);
  };
  const sBullet = (ctx, t) => {
    ctx.drawImage(ocean('bl', '#2f8a9a', C.sea, '#215684'), 0, 0);
    const c0 = P(60, 'crabs') - 0.15;
    put(ctx, crab(), 900, 490, { s: 1.15, d: 1 });
    const s0 = P(58, 'lands'), u = E.in(ph(t, s0 - 0.5, s0)), hx = 60 + (680 - 60) * u, hy = 510;
    ctx.save(); ctx.fillStyle = C.ink; ctx.beginPath(); ctx.moveTo(hx + 80, hy); ctx.lineTo(hx - 10, hy - 18); ctx.lineTo(hx - 10, hy + 18); ctx.fill(); ctx.strokeStyle = C.purple; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(-10, hy); ctx.lineTo(hx, hy); ctx.stroke(); ctx.restore();
    burstAt(ctx, 745, 510, t, s0, 0.32, C.gold);
    tag(ctx, 'TINY TIP', 240, 260, t, P(57, 'tiny') - 0.15, { px: 50, col: C.ink });
    const A = popIn(t, P(59, 'bullet') - 0.15, 0.35);
    if (A) { put(ctx, cardS(700, 150, C.card), 640, 110, { s: A.s, d: 1.2 }); put(ctx, bullet(), 360, 110, { s: A.s * 0.7, d: 0.5 }); put(ctx, wordSpr('BULLET-LEVEL', 52, C.coral, null), 740, 80, { s: A.s, d: 0.2 }); put(ctx, wordSpr('PRESSURE', 44, C.ink, null), 740, 142, { s: A.s, d: 0.2 }); }
    tag(ctx, "PIERCES A CRAB'S SHELL", 640, 660, t, c0, { px: 44, col: C.red });
  };
  // ================= chapter 5: the burn =================
  const skinBg = (key) => cache('skin' + key, () => compose(W, HH, [[(x) => { x.fillStyle = C.seaL; x.fillRect(0, 0, W, HH); }, 0], [(x) => wave(x, 200, 8, 0.009, 2, C.skinL, 7), 1], [(x) => wave(x, 320, 12, 0.012, 1, C.skin, 8), 0.6], [(x) => wave(x, 500, 14, 0.008, 3, C.skinD, 9), 0.6]]));
  const sSkin = (ctx, t) => {
    ctx.drawImage(skinBg('a'), 0, 0);
    tag(ctx, 'YOUR SKIN', 200, 270, t, PS(61), { px: 50, col: C.ink, rot: -0.02 });
    put(ctx, capsuleS(0.4, 1, 2), 640, 80, { s: 0.42, d: 1, rot: Math.PI });
    const a = P(62, 'punches') - 0.1, u = E.out(ph(t, a, a + 0.15)), ev = E.inOut(ph(t, P(63, 'inside') - 0.2, PE(63) + 0.2)), tipY = 160 + u * 110 + ev * 280;
    if (t > a) { ctx.save(); ctx.strokeStyle = C.purple; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(640, 150); for (let y = 160; y <= tipY; y += 8) ctx.lineTo(640 + Math.sin(y * 0.03) * 16, y); ctx.stroke(); ctx.fillStyle = C.ink; ctx.beginPath(); ctx.moveTo(640, tipY + 28); ctx.lineTo(620, tipY - 8); ctx.lineTo(660, tipY - 8); ctx.fill(); ctx.restore(); }
    tag(ctx, 'THREAD TURNS INSIDE OUT', 960, 170, t, P(63, 'thread') - 0.1, { px: 36, col: C.purple, bw: 8 });
    const v = P(64, 'venom') - 0.12;
    if (t > v) { for (let i = 0; i < 9; i++) { const r = H.rng(i + 50), d = v + i * 0.13, q = E.out(cl((t - d) / 1.1)); if (q <= 0) continue; put(ctx, dropS(C.venom, 44), 640 + (r() - 0.5) * 420 * q, tipY + (r() - 0.3) * 150 * q, { s: 0.32 * q + 0.08, d: 0.4 }); } tag(ctx, 'VENOM', 1020, 500, t, v, { px: 64, col: C.venomD }); }
  };
  const sToxins = (ctx, t) => {
    ctx.drawImage(paperBg('tx', C.skinD, C.skin), 0, 0);
    const a = P(65, 'punch') - 0.15, A = dropIn(t, PS(65) - 0.05, 0.4, 60);
    if (A) { put(ctx, cardS(520, 500, C.card), 320, 340 + A.dy, { d: 1.2 + A.d }); put(ctx, wordSpr('HOLES IN CELLS', 42, C.ink, null), 320, 150 + A.dy, { d: 0.2 }); const r = H.rng(3); for (let i = 0; i < 6; i++) { const x = 180 + (i % 3) * 140, y = 270 + Math.floor(i / 3) * 150; put(ctx, cache('bc', () => compose(130, 130, [[(c) => { c.fillStyle = C.pinkL; ell(c, 120, 65, 65, 58, 58); }, 0.3], [(c) => { c.fillStyle = C.pinkD; ell(c, 121, 65, 65, 18, 18); }, 0.1]])), x, y + A.dy, { d: 0.6 }); if (t > a + i * 0.08) { const sz = E.out(cl((t - a - i * 0.08) / 0.2)) * 18; ctx.save(); ctx.fillStyle = C.dark; ctx.beginPath(); ctx.arc(x + 26, y + A.dy - 26, sz, 0, TAU); ctx.fill(); ctx.restore(); } } }
    const B = dropIn(t, PS(66) - 0.1, 0.4, 60);
    if (B) { put(ctx, cardS(520, 500, C.card), 960, 340 + B.dy, { d: 1.2 + B.d }); put(ctx, wordSpr('NERVES', 56, C.ink, null), 960, 150 + B.dy, { d: 0.2 }); const u = ph(t, P(66, 'nerves') - 0.1, P(66, 'nerves') + 1.1); ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = C.gold; ctx.lineWidth = 16; ctx.beginPath(); for (let i = 0; i <= 12; i++) { const x = 760 + i * 34, y = 360 + B.dy + (i % 2 ? -46 : 46) * (i / 12 <= u ? 1 : 0); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); ctx.restore(); }
  };
  const sThousands = (ctx, t) => {
    ctx.drawImage(skinBg('b'), 0, 0);
    const a = PS(68), big = a + 0.2, r = H.rng(44);
    if (t < a - 0.1) { put(ctx, mini(true), 640, 280, { s: 1.4, d: 1 }); tag(ctx, 'ONE CELL = ALMOST NOTHING', 640, 500, t, PS(67), { px: 50, col: C.ink }); }
    else { for (let i = 0; i < 160; i++) { const x = 30 + r() * 1220, y = 40 + r() * 400, d = big + r() * 1.3, A = popIn(t, d, 0.2); if (A) put(ctx, mini(true), x, y, { s: A.s * 0.42, d: 0.3 }); }
      const b = P(70, 'burn') - 0.12; burstAt(ctx, 640, 260, t, b, 1.1, C.red); const B = popIn(t, b, 0.3); if (B) put(ctx, wordSpr('BURN!', 110, C.card, C.red, 18), 640, 260, { s: B.s, d: 1.2 });
      tag(ctx, 'ALL AT ONCE', 640, 590, t, P(69, 'once') - 0.3, { px: 64, col: C.coral }); }
  };
  const sDanger = (ctx, t) => {
    ctx.drawImage(ocean('dg', '#2b5e7a', '#1f4a72', C.navy, false), 0, 0);
    const A = dropIn(t, PS(71), 0.4, 60);
    if (A) { put(ctx, cardS(540, 460, C.card), 330, 340 + A.dy, { d: 1.2 + A.d, rot: -0.01 }); jellyAt(ctx, 330, 260 + A.dy, 0.55, t, { n: 5, len: 200 }); put(ctx, wordSpr('MOST STINGS', 42, C.ink, null), 330, 450 + A.dy, { d: 0.2 }); put(ctx, wordSpr('PAINFUL', 52, C.leaf, null), 330, 515 + A.dy, { d: 0.2 }); }
    const B = dropIn(t, P(72, 'box') - 0.15, 0.4, 60);
    if (B) { const boxB = cache('boxb', () => compose(260, 200, [[(c) => { c.fillStyle = C.seaXL; c.beginPath(); poly(c, [[50, 180], [40, 40], [130, 14], [220, 40], [210, 180]]); c.fill(); }, 0.4], [(c) => { c.fillStyle = C.foam; c.beginPath(); poly(c, [[80, 170], [76, 56], [130, 38], [184, 56], [180, 170]]); c.fill(); }, 0.2]])); put(ctx, cardS(540, 460, C.red), 950, 340 + B.dy, { d: 1.2 + B.d, rot: 0.01 }); put(ctx, boxB, 950, 230 + B.dy, { s: 0.9 }); for (let i = 0; i < 4; i++) put(ctx, tent(i, C.foam, 180), 880 + i * 46, 400 + B.dy, { s: 0.65 }); put(ctx, wordSpr('A FEW SPECIES', 42, C.card, null), 950, 450 + B.dy, { d: 0.2 }); put(ctx, wordSpr('DANGEROUS', 52, C.gold, null), 950, 515 + B.dy, { d: 0.2 }); }
  };
  // ================= chapter 6: the weird part =================
  const beach = () => cache('beach', () => compose(W, HH, [[(x) => { x.fillStyle = '#f3cf8e'; x.fillRect(0, 0, W, HH); x.fillStyle = '#f3ad62'; ell(x, 130, 1030, 150, 95, 95); }, 0], [(x) => wave(x, 290, 8, 0.01, 1, C.seaL, 21), 0.6], [(x) => wave(x, 370, 10, 0.012, 2, C.foam, 22), 0.4], [(x) => wave(x, 410, 14, 0.008, 3, C.sand, 23), 0.8], [(x) => wave(x, 620, 10, 0.012, 1, C.sandD, 24), 0.6]]));
  const sStrange = (ctx, t) => {
    ctx.drawImage(paperBg('st', C.purple, C.lilac), 0, 0);
    sprAt(ctx, brain(), 640, 250, t, PS(74), { s: 1.3 });
    crossOn(ctx, 640, 250, t, P(74, 'brain') - 0.05, 2.2);
    tag(ctx, 'THINGS GET STRANGE', 640, 540, t, P(75, 'strange') - 0.3, { px: 70, col: C.coral });
  };
  const sBeach = (ctx, t) => {
    ctx.drawImage(beach(), 0, 0);
    sprAt(ctx, cache('deadj', () => compose(560, 200, [[(x) => { x.strokeStyle = C.pinkD; x.lineWidth = 11; x.lineCap = 'round'; for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(280, 60 + i * 20); x.bezierCurveTo(350, 20 + i * 34, 420, 60 + i * 20, 470 + (i % 3) * 30, 14 + i * 34); x.stroke(); } }, 0.2], [(x) => { x.fillStyle = C.pink; ell(x, 131, 180, 110, 170, 74); x.fillStyle = C.pinkL; ell(x, 132, 180, 96, 96, 36); }, 0.3]])), 600, 500, t, PS(76), { s: 1.2 });
    tag(ctx, 'DEAD', 280, 240, t, P(76, 'dead') - 0.12, { px: 66, col: C.ink, rot: -0.04 });
    const A = popIn(t, P(77, 'still') - 0.12, 0.35); if (A) { burstAt(ctx, 900, 230, t, P(77, 'still') - 0.12, 1.1, C.red); put(ctx, wordSpr('STILL STINGS', 62, C.red, C.card, 14), 900, 230, { s: A.s, d: 1 }); }
  };
  const sClown = (ctx, t) => {
    ctx.drawImage(ocean('cl', C.seaL, C.teal, '#1f6f8f'), 0, 0);
    put(ctx, anemone(), 640, 480, { sy: 1 + Math.sin(t * 1.6) * 0.012, sx: 1, d: 1 });
    const A = dropIn(t, P(78, 'clownfish') - 0.15, 0.4, 60);
    if (A) put(ctx, clown(), 640 + Math.sin(t * 1.1) * 120, 300 + Math.sin(t * 1.9) * 18 + A.dy, { d: 1.1 + A.d, s: 0.9 });
    tag(ctx, 'ANEMONE', 160, 300, t, P(78, 'anemones') - 0.3, { px: 42, col: C.purple });
    tag(ctx, "JELLYFISH'S COUSIN", 1020, 250, t, P(79, 'cousins') - 0.3, { px: 36, col: C.ink, bw: 8 });
    const b = P(80, 'slime') - 0.12, B = dropIn(t, b, 0.4, 60);
    if (B) { put(ctx, cardS(760, 130, C.card), 450, 90 + B.dy, { d: 1.2 + B.d }); put(ctx, wordSpr('SLIME WITH', 40, C.ink, null), 450, 62 + B.dy, { d: 0.2 }); put(ctx, wordSpr('NO TRIGGER CHEMICAL', 40, C.coral, null), 450, 118 + B.dy, { d: 0.2 }); }
  };
  const sSlug = (ctx, t) => {
    ctx.drawImage(ocean('sl', '#58b0a6', '#2c7d8f', '#215684'), 0, 0);
    const x0 = 560;
    put(ctx, slug(), x0, 460, { s: 1.05, d: 1.1, sy: 1 + Math.sin(t * 1.3) * 0.01, sx: 1.05 });
    tag(ctx, 'SEA SLUG', 200, 240, t, PS(82), { px: 56, col: C.ink });
    const r = H.rng(13), a = P(82, 'eat') - 0.1, b = PS(84);
    if (t > a) for (let i = 0; i < 8; i++) { const st = a + i * 0.16, q = E.inOut(cl((t - st) / 0.9)), xx = H.lerp(1200, 880, q), yy = 420 + r() * 80, xf = xx, A = popIn(t, st, 0.2); if (A && q < 1) put(ctx, mini(false), xf, yy, { s: A.s * 0.45, d: 0.3 }); }
    tag(ctx, 'NOT FIRED', 1000, 190, t, P(83, 'firing') - 0.25, { px: 44, col: C.coral });
    if (t > b) { const tipX = [300, 400, 500, 600, 700]; tipX.forEach((x, i) => { const A = popIn(t, b + i * 0.12, 0.25); if (A) put(ctx, mini(false), x, 340, { s: A.s * 0.5, d: 0.4 }); }); tag(ctx, 'STORED', 500, 180, t, P(84, 'store') - 0.1, { px: 50, col: C.purple }); }
    const f = P(85, 'enemies') - 0.25;
    if (t > f) { const A = popIn(t, f, 0.3); burstAt(ctx, 1110, 470, t, f, 0.75, C.red); if (A) put(ctx, crab(), 1110, 470, { s: A.s * 0.62, d: 1 }); arrow(ctx, 780, 330, 960, 280, 1060, 380, cl((t - f) / 0.3), C.coral, 17); }
  };
  // ================= end =================
  const sEnd = (ctx, t) => {
    ctx.drawImage(ocean('en', '#4fa8a8', '#2c7d8f', '#1b4a72'), 0, 0);
    ctx.save(); kb(ctx, t, PS(86), PE(89), 1, 1.08);
    jellyAt(ctx, 640, 210, 1.1, t, { len: 300 });
    const r = H.rng(72), a = P(87, 'thousands') - 0.1;
    for (let i = 0; i < 40; i++) { const u = r() , x = 420 + u * 440, y = 260 + r() * 240, A = popIn(t, a + r() * 1.2, 0.2); if (A) put(ctx, mini(false), x, y, { s: A.s * 0.34, d: 0.25 }); }
    ctx.restore();
    const A = dropIn(t, PS(86), 0.4, 60);
    if (A) { put(ctx, wordSpr('NOT AN ATTACK', 56, C.ink, C.card, 12), 640, 58 + A.dy, { d: 1 + A.d }); crossOn(ctx, 1000, 58, t, P(86, 'attack') - 0.1, 0.65); }
    tag(ctx, 'TINY MACHINES', 640, 560, t, P(87, 'machines') - 0.25, { px: 66, col: C.coral });
    const B = dropIn(t, P(89, 'half') - 0.12, 0.4, 60);
    if (B) { put(ctx, cardS(900, 92, C.ink), 640, 650 + B.dy, { d: 1 + B.d }); put(ctx, wordSpr('HALF A BILLION YEARS', 48, C.gold, null), 640, 650 + B.dy, { d: 0.2 }); }
  };
  const sNext = (ctx, t) => {
    ctx.drawImage(ocean('nx', C.leaf, '#2f6d47', '#2c5a3a', false), 0, 0);
    tag(ctx, 'NEXT UP', 640, 80, t, PS(90), { px: 58, col: C.coral });
    sprAt(ctx, croc(), 640, 320, t, P(90, 'crocodiles') - 0.15, { s: 1.35 });
    sprAt(ctx, handS(), 900, 215, t, P(91, 'hands') - 0.5, { s: 0.75, rot: 0.2 });
    tag(ctx, 'JAWS SHUT, BARE HANDS?', 640, 610, t, P(90, 'shut') - 0.15, { px: 54, col: C.ink });
  };
  const SC = [
    { s: 0, f: sHook }, { s: PS(2), f: sNoBrainHook, tr: 'cut' }, { s: PS(4), f: sQuestion, tr: 'rip' },
    { s: PS(6), f: sAncient, tr: 'drop', ch: [1, 'THE ANIMAL'] }, { s: PS(9), f: sNoOrgans, tr: 'pan' }, { s: PS(13), f: sNerve, tr: 'drop' }, { s: PS(16), f: sNotAngry, tr: 'pan' }, { s: PS(19), f: sDrift, tr: 'pan' },
    { s: PS(21), f: sZoom, tr: 'rip', ch: [2, 'THE HARPOON'] }, { s: PS(23), f: sCell, tr: 'drop' }, { s: PS(25), f: sHair, tr: 'pan' }, { s: PS(27), f: sThread, tr: 'rip' }, { s: PS(31), f: sLoaded, tr: 'cut' }, { s: PS(33), f: sPressure, tr: 'drop' }, { s: PS(35), f: sTire, tr: 'pan' },
    { s: PS(37), f: sTrigger, tr: 'rip', ch: [3, 'THE TRIGGER'] }, { s: PS(39), f: sBump, tr: 'cut' }, { s: PS(41), f: sFire, tr: 'pan' }, { s: PS(44), f: sAlone, tr: 'drop' },
    { s: PS(46), f: s2006, tr: 'rip', ch: [4, 'THE SHOT'] }, { s: PS(50), f: s700, tr: 'drop' }, { s: PS(53), f: sG, tr: 'pan' }, { s: PS(57), f: sBullet, tr: 'drop' },
    { s: PS(61), f: sSkin, tr: 'rip', ch: [5, 'THE BURN'] }, { s: PS(65), f: sToxins, tr: 'pan' }, { s: PS(67), f: sThousands, tr: 'drop' }, { s: PS(71), f: sDanger, tr: 'pan' },
    { s: PS(74), f: sStrange, tr: 'rip', ch: [6, 'THE WEIRD PART'] }, { s: PS(76), f: sBeach, tr: 'drop' }, { s: PS(78), f: sClown, tr: 'pan' }, { s: PS(82), f: sSlug, tr: 'pan' },
    { s: PS(86), f: sEnd, tr: 'rip' }, { s: PS(90), f: sNext, tr: 'rip' },
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
    hit(P(1, 'millionth') - 0.05, 0.9); zip(P(1, 'second')); k.play('slap', P(2, 'brain'), { gain: 0.6 });
    k.play('ding', P(5, 'stings'), { f: 'E5', gain: 0.35 });
    hit(P(8, '500') - 0.05, 0.9); k.play('slap', P(9, 'brain'), { gain: 0.5 }); k.play('slap', P(10, 'heart'), { gain: 0.5 }); k.play('slap', P(11, 'bones'), { gain: 0.5 }); k.play('slap', P(12, 'blood'), { gain: 0.5 });
    k.play('sparkle', P(14, 'net'), { gain: 0.5 }); k.play('error', P(17, 'angry'), { gain: 0.3 }); k.play('error', P(18, 'aware'), { gain: 0.3 });
    k.play('ding', P(20, 'tentacles'), { f: 'G5', gain: 0.35 });
    for (let i = 0; i < 12; i++) pop(P(22, 'thousands') + i * 0.1, 0.4);
    k.play('ding', P(24, 'nematocyst'), { f: 'C6', gain: 0.35 }); k.play('riser', P(33, 'pressure'), { dur: 2.2, gain: 0.3 }); hit(P(34, '150') - 0.05, 1); k.play('thud', P(36, 'tire'), { f: 110, gain: 0.5 });
    k.play('ding', P(38, 'trigger'), { f: 'A5', gain: 0.35 }); k.play('pop', P(40, 'lid'), { gain: 0.8 }); k.noise(PS(41), { dur: 1, color: 'pink', filter: 'lowpass', f: 800, gain: 0.15, a: 0.2 }); k.play('riser', PS(42), { dur: 0.9, gain: 0.35 }); zip(P(43, 'fires'), 1); hit(P(43, 'fires') + 0.03, 1);
    k.play('slap', P(44, 'brain'), { gain: 0.5 }); k.play('stamp', P(47, '2006'), { gain: 0.5 }); for (let x = 0; x < 1.3; x += 0.09) k.noise(P(49, 'camera') + x, { dur: 0.02, filter: 'bandpass', f: 3200, q: 3, gain: 0.12, minor: true });
    zip(P(51, '700')); hit(P(51, '700') + 0.02, 1); k.play('ding', P(52, 'seven'), { f: 'E6', gain: 0.25 }); hit(P(53, 'five') - 0.05, 1); k.play('thud', P(54, 'six'), { f: 120, gain: 0.5 }); k.play('slap', P(55, 'punch'), { gain: 0.7 });
    zip(P(58, 'lands') - 0.1); hit(P(58, 'lands'), 0.8); k.play('stamp', P(59, 'bullet'), { gain: 0.6 }); k.play('slap', P(60, 'shell'), { gain: 0.5 });
    zip(P(62, 'punches')); for (let i = 0; i < 6; i++) pop(P(64, 'venom') + i * 0.15, 0.35); for (let i = 0; i < 6; i++) pop(P(65, 'punch') + i * 0.08, 0.5); k.play('error', P(66, 'nerves'), { gain: 0.3 });
    pop(PS(67), 0.5); for (let i = 0; i < 16; i++) pop(PS(68) + 0.2 + i * 0.08, 0.35); hit(P(70, 'burn') - 0.05, 1); k.play('success', P(71, 'painful'), { gain: 0.25 }); hit(P(73, 'dangerous') - 0.05, 0.7);
    k.play('sparkle', P(75, 'strange'), { gain: 0.5 }); k.play('thud', P(76, 'dead'), { f: 100, gain: 0.5 }); k.play('slap', P(77, 'still'), { gain: 0.6 }); k.play('ding', P(78, 'clownfish'), { f: 'G5', gain: 0.35 }); k.play('sparkle', P(80, 'lacks'), { gain: 0.4 });
    k.play('ding', P(82, 'eat'), { f: 'C5', gain: 0.3 }); k.play('ding', P(84, 'store'), { f: 'E5', gain: 0.3 }); zip(P(85, 'enemies')); k.play('slap', P(85, 'enemies') + 0.1, { gain: 0.6 });
    k.play('stamp', P(86, 'attack'), { gain: 0.5 }); k.play('riser', PS(87), { dur: 2, gain: 0.3 }); hit(P(89, 'half') - 0.05, 0.9); ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', P(89, 'making') + 0.1 + i * 0.09, { f, gain: 0.42 }));
    k.play('ding', P(90, 'next'), { f: 'G5', gain: 0.4 }); k.play('slap', P(90, 'shut'), { gain: 0.6 });
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    ctx.drawImage(ocean('thumb'), 0, 0);
    put(ctx, burstSpr(C.gold), 940, 280, { s: 1.75, d: 0.7 });
    jellyAt(ctx, 940, 210, 1.2, 0.4, { n: 7, len: 340 });
    put(ctx, wordSpr('NO', 190, C.red, C.card, 26), 280, 200, { d: 1.8, rot: -0.03 });
    put(ctx, wordSpr('BRAIN', 170, C.ink, C.card, 26), 350, 430, { d: 1.8, rot: 0.02 });
    finish(ctx, 0, [700, 400]);
    ctx.restore();
  }
  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s - 0.05 ? j : a), 0) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();
