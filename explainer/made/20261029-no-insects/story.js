// ================= Low-Poly Faceted, 16:9 1280x720: "What would happen if all the insects disappeared?" =================
// Long video (~3.5 min), 5 chapters + intro/outro. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A faceted world seen by a flying camera: the reference's dusk valley as a meadow, a night valley, a red outback with cattle,
// a river, a soil cross-section, a dinner table. Low-poly bees, beetles, butterflies, midges, birds and dung beetles.
// Facets flip in from the camera out (the reference's build move) as the scene change, plus facet-flip wipes, whip pans and camera flights.
// Cut-corner tags pinned to objects, two-tone ribbon arrows, Space Grotesk counters, depth fog, flat Lambert facets.
(function () {
  // ---------- voiceover phrases (phrases.json, Kokoro am_michael) ----------
  const PH = [{"s":0.25,"e":2.52,"text":"Every insect on Earth vanishes tonight.","words":[["every",0.25],["insect",0.59],["on",1.01],["earth",1.14],["vanishes",1.49],["tonight",2.04]]},{"s":3.07,"e":4.37,"text":"What would you lose first?","words":[["what",3.07],["would",3.32],["you",3.63],["lose",3.81],["first",4.06]]},{"s":4.92,"e":7.13,"text":"The first thing you'd notice is the quiet,","words":[["the",4.92],["first",5.12],["thing",5.46],["youd",5.79],["notice",6.06],["is",6.46],["the",6.6],["quiet",6.8]]},{"s":7.43,"e":10.26,"text":"no buzzing, no chirping, no crickets at night.","words":[["no",7.43],["buzzing",7.59],["no",8.14],["chirping",8.3],["no",8.93],["crickets",9.08],["at",9.71],["night",9.87]]},{"s":10.81,"e":13.29,"text":"But the real trouble starts sooner than you think.","words":[["but",10.81],["the",10.99],["real",11.18],["trouble",11.42],["starts",11.84],["sooner",12.2],["than",12.57],["you",12.81],["think",12.99]]},{"s":13.84,"e":15.72,"text":"Let's walk through it, step by step.","words":[["lets",13.84],["walk",14.12],["through",14.4],["it",14.88],["step",15.02],["by",15.3],["step",15.44]]},{"s":16.27,"e":18.67,"text":"First, how many bugs are we talking about?","words":[["first",16.27],["how",16.63],["many",16.85],["bugs",17.14],["are",17.43],["we",17.65],["talking",17.8],["about",18.31]]},{"s":19.22,"e":21.85,"text":"Scientists think about ten quintillion insects","words":[["scientists",19.22],["think",19.86],["about",20.18],["ten",20.51],["quintillion",20.7],["insects",21.4]]},{"s":22.15,"e":23.42,"text":"are alive right now.","words":[["are",22.15],["alive",22.39],["right",22.78],["now",23.18]]},{"s":23.97,"e":25.72,"text":"That's more than a billion insects","words":[["thats",23.97],["more",24.28],["than",24.53],["a",24.78],["billion",24.84],["insects",25.28]]},{"s":26.02,"e":27.57,"text":"for every single person.","words":[["for",26.02],["every",26.25],["single",26.64],["person",27.1]]},{"s":28.12,"e":30.17,"text":"Over a million kinds have names,","words":[["over",28.12],["a",28.43],["million",28.51],["kinds",29.06],["have",29.46],["names",29.77]]},{"s":30.47,"e":32.74,"text":"and millions more are still waiting for one.","words":[["and",30.47],["millions",30.66],["more",31.16],["are",31.41],["still",31.6],["waiting",31.92],["for",32.36],["one",32.55]]},{"s":33.29,"e":34.75,"text":"So when they all disappear,","words":[["so",33.29],["when",33.42],["they",33.69],["all",33.95],["disappear",34.15]]},{"s":35.05,"e":36.69,"text":"they leave a gigantic hole.","words":[["they",35.05],["leave",35.35],["a",35.72],["gigantic",35.8],["hole",36.39]]},{"s":37.24,"e":38.55,"text":"Start with the flowers.","words":[["start",37.24],["with",37.58],["the",37.86],["flowers",38.07]]},{"s":39.1,"e":41.33,"text":"Nearly nine out of ten flowering plants","words":[["nearly",39.1],["nine",39.5],["out",39.77],["of",39.98],["ten",40.11],["flowering",40.32],["plants",40.92]]},{"s":41.63,"e":43.7,"text":"need animals to carry their pollen,","words":[["need",41.63],["animals",41.91],["to",42.41],["carry",42.56],["their",42.91],["pollen",43.27]]},{"s":44.0,"e":46.2,"text":"and most of those animals are insects.","words":[["and",44.0],["most",44.21],["of",44.5],["those",44.64],["animals",45.0],["are",45.49],["insects",45.71]]},{"s":46.75,"e":49.81,"text":"Bees, flies, beetles, moths and butterflies","words":[["bees",46.75],["flies",47.1],["beetles",47.54],["moths",48.15],["and",48.59],["butterflies",48.85]]},{"s":50.11,"e":52.16,"text":"move pollen from flower to flower,","words":[["move",50.11],["pollen",50.4],["from",50.84],["flower",51.13],["to",51.57],["flower",51.72]]},{"s":52.46,"e":54.5,"text":"so the plant can make seeds and fruit.","words":[["so",52.46],["the",52.6],["plant",52.8],["can",53.14],["make",53.34],["seeds",53.61],["and",53.95],["fruit",54.16]]},{"s":55.05,"e":57.12,"text":"Without them, the flowers still bloom,","words":[["without",55.05],["them",55.51],["the",55.78],["flowers",55.98],["still",56.45],["bloom",56.79]]},{"s":57.42,"e":59.33,"text":"but most never turn into fruit.","words":[["but",57.42],["most",57.65],["never",57.96],["turn",58.34],["into",58.64],["fruit",58.95]]},{"s":59.88,"e":62.35,"text":"About three quarters of our main food crops","words":[["about",59.88],["three",60.22],["quarters",60.56],["of",61.11],["our",61.25],["main",61.46],["food",61.73],["crops",62.0]]},{"s":62.65,"e":64.28,"text":"get help from pollinators.","words":[["get",62.65],["help",62.87],["from",63.17],["pollinators",63.46]]},{"s":64.83,"e":67.66,"text":"Apples, almonds, blueberries, cherries and melons","words":[["apples",64.83],["almonds",65.25],["blueberries",65.73],["cherries",66.49],["and",67.04],["melons",67.25]]},{"s":67.96,"e":70.16,"text":"would become rare and very expensive.","words":[["would",67.96],["become",68.31],["rare",68.74],["and",69.02],["very",69.24],["expensive",69.52]]},{"s":70.71,"e":71.52,"text":"And chocolate?","words":[["and",70.71],["chocolate",70.91]]},{"s":72.07,"e":76.22,"text":"Cacao flowers are pollinated by tiny flies called midges,","words":[["cacao",72.07],["flowers",72.5],["are",73.11],["pollinated",73.37],["by",74.23],["tiny",74.4],["flies",74.75],["called",75.18],["midges",75.7]]},{"s":76.52,"e":78.11,"text":"about the size of a pinhead.","words":[["about",76.52],["the",76.88],["size",77.1],["of",77.39],["a",77.53],["pinhead",77.6]]},{"s":78.66,"e":80.79,"text":"No midges, almost no chocolate.","words":[["no",78.66],["midges",78.83],["almost",79.34],["no",79.85],["chocolate",80.02]]},{"s":81.34,"e":83.62,"text":"Next come the animals that eat insects.","words":[["next",81.34],["come",81.62],["the",81.91],["animals",82.12],["that",82.62],["eat",82.9],["insects",83.12]]},{"s":84.17,"e":86.44,"text":"Most songbirds feed their chicks on bugs,","words":[["most",84.17],["songbirds",84.43],["feed",85.03],["their",85.3],["chicks",85.64],["on",86.04],["bugs",86.17]]},{"s":86.74,"e":89.03,"text":"even the ones that eat seeds as adults.","words":[["even",86.74],["the",87.03],["ones",87.26],["that",87.55],["eat",87.85],["seeds",88.07],["as",88.44],["adults",88.59]]},{"s":89.58,"e":90.97,"text":"One pair of chickadees","words":[["one",89.58],["pair",89.8],["of",90.09],["chickadees",90.24]]},{"s":91.27,"e":93.63,"text":"needs six to nine thousand caterpillars","words":[["needs",91.27],["six",91.61],["to",91.82],["nine",91.96],["thousand",92.24],["caterpillars",92.8]]},{"s":93.93,"e":95.83,"text":"to raise a single nest of chicks.","words":[["to",93.93],["raise",94.08],["a",94.44],["single",94.52],["nest",94.95],["of",95.25],["chicks",95.39]]},{"s":96.38,"e":98.65,"text":"Bats, frogs, lizards and spiders","words":[["bats",96.38],["frogs",96.73],["lizards",97.16],["and",97.77],["spiders",98.04]]},{"s":98.95,"e":100.26,"text":"lose their dinner too.","words":[["lose",98.95],["their",99.24],["dinner",99.6],["too",100.04]]},{"s":100.81,"e":102.98,"text":"In rivers, trout and many other fish","words":[["in",100.81],["rivers",100.96],["trout",101.41],["and",101.78],["many",102.01],["other",102.31],["fish",102.68]]},{"s":103.28,"e":105.49,"text":"eat young mayflies and caddisflies.","words":[["eat",103.28],["young",103.5],["mayflies",103.87],["and",104.46],["caddisflies",104.68]]},{"s":106.04,"e":107.29,"text":"Take away the bugs,","words":[["take",106.04],["away",106.37],["the",106.7],["bugs",106.95]]},{"s":107.59,"e":110.09,"text":"and the food chain crumbles from the bottom up.","words":[["and",107.59],["the",107.78],["food",107.98],["chain",108.24],["crumbles",108.57],["from",109.1],["the",109.36],["bottom",109.56],["up",109.96]]},{"s":110.64,"e":111.95,"text":"Now for the gross part.","words":[["now",110.64],["for",110.86],["the",111.07],["gross",111.29],["part",111.65]]},{"s":112.5,"e":114.39,"text":"Insects are nature's cleanup crew.","words":[["insects",112.5],["are",112.97],["natures",113.17],["cleanup",113.65],["crew",114.12]]},{"s":114.94,"e":117.92,"text":"Beetles and fly larvae break down dead leaves,","words":[["beetles",114.94],["and",115.49],["fly",115.72],["larvae",115.96],["break",116.43],["down",116.82],["dead",117.13],["leaves",117.45]]},{"s":118.22,"e":119.21,"text":"dead animals,","words":[["dead",118.22],["animals",118.58]]},{"s":119.51,"e":120.31,"text":"and poop.","words":[["and",119.51],["poop",119.86]]},{"s":120.86,"e":123.08,"text":"Australia found this out the hard way.","words":[["australia",120.86],["found",121.51],["this",121.86],["out",122.15],["the",122.36],["hard",122.58],["way",122.86]]},{"s":123.63,"e":125.08,"text":"When settlers brought cattle,","words":[["when",123.63],["settlers",123.86],["brought",124.32],["cattle",124.73]]},{"s":125.38,"e":128.1,"text":"the local dung beetles couldn't handle cow pats.","words":[["the",125.38],["local",125.59],["dung",125.94],["beetles",126.22],["couldnt",126.7],["handle",127.19],["cow",127.61],["pats",127.82]]},{"s":128.65,"e":130.64,"text":"The pats sat in the fields for months,","words":[["the",128.65],["pats",128.85],["sat",129.12],["in",129.31],["the",129.45],["fields",129.65],["for",130.05],["months",130.24]]},{"s":130.94,"e":132.02,"text":"smothering the grass","words":[["smothering",130.94],["the",131.54],["grass",131.72]]},{"s":132.32,"e":134.11,"text":"and breeding swarms of flies.","words":[["and",132.32],["breeding",132.54],["swarms",133.14],["of",133.59],["flies",133.73]]},{"s":134.66,"e":137.48,"text":"So scientists shipped in dung beetles from abroad,","words":[["so",134.66],["scientists",134.79],["shipped",135.46],["in",135.93],["dung",136.07],["beetles",136.34],["from",136.81],["abroad",137.08]]},{"s":137.78,"e":139.89,"text":"and about twenty-three kinds settled in.","words":[["and",137.78],["about",137.97],["twentythree",138.29],["kinds",138.99],["settled",139.31],["in",139.76]]},{"s":140.44,"e":142.99,"text":"Now picture that problem everywhere on Earth.","words":[["now",140.44],["picture",140.64],["that",141.11],["problem",141.38],["everywhere",141.85],["on",142.52],["earth",142.65]]},{"s":143.54,"e":145.69,"text":"Fungi and bacteria would keep working,","words":[["fungi",143.54],["and",143.87],["bacteria",144.08],["would",144.61],["keep",144.95],["working",145.22]]},{"s":145.99,"e":147.29,"text":"but much more slowly.","words":[["but",145.99],["much",146.22],["more",146.53],["slowly",146.83]]},{"s":147.84,"e":149.33,"text":"So, would humans starve?","words":[["so",147.84],["would",148.0],["humans",148.39],["starve",148.86]]},{"s":149.88,"e":150.96,"text":"Not right away.","words":[["not",149.88],["right",150.15],["away",150.6]]},{"s":151.51,"e":154.57,"text":"Wheat, rice and corn are pollinated by the wind,","words":[["wheat",151.51],["rice",151.91],["and",152.23],["corn",152.48],["are",152.8],["pollinated",153.04],["by",153.84],["the",154.01],["wind",154.25]]},{"s":154.87,"e":157.54,"text":"so we'd still have bread, rice and popcorn.","words":[["so",154.87],["wed",155.03],["still",155.27],["have",155.68],["bread",156.0],["rice",156.4],["and",156.73],["popcorn",156.97]]},{"s":158.09,"e":159.98,"text":"But our plates would get very boring,","words":[["but",158.09],["our",158.27],["plates",158.46],["would",158.84],["get",159.16],["very",159.35],["boring",159.6]]},{"s":160.28,"e":161.73,"text":"and we'd lose honey, silk,","words":[["and",160.28],["wed",160.5],["lose",160.73],["honey",161.04],["silk",161.42]]},{"s":162.03,"e":164.0,"text":"and lots of fruits and vegetables.","words":[["and",162.03],["lots",162.24],["of",162.52],["fruits",162.66],["and",163.08],["vegetables",163.3]]},{"s":164.55,"e":167.02,"text":"Many wild plants would slowly fade away,","words":[["many",164.55],["wild",164.85],["plants",165.15],["would",165.6],["slowly",165.97],["fade",166.42],["away",166.72]]},{"s":167.32,"e":169.4,"text":"and the animals that eat them would follow.","words":[["and",167.32],["the",167.5],["animals",167.68],["that",168.09],["eat",168.33],["them",168.51],["would",168.75],["follow",169.04]]},{"s":169.95,"e":171.38,"text":"Even the soil would suffer,","words":[["even",169.95],["the",170.21],["soil",170.4],["would",170.66],["suffer",170.99]]},{"s":171.68,"e":174.15,"text":"because insects dig it, mix it and feed it.","words":[["because",171.68],["insects",172.2],["dig",172.73],["it",172.95],["mix",173.1],["it",173.32],["and",173.47],["feed",173.7],["it",174.0]]},{"s":174.7,"e":177.36,"text":"So the next time a bee buzzes past your head,","words":[["so",174.7],["the",174.85],["next",175.08],["time",175.38],["a",175.69],["bee",175.76],["buzzes",175.99],["past",176.44],["your",176.75],["head",177.05]]},{"s":177.66,"e":178.33,"text":"remember,","words":[["remember",177.66]]},{"s":178.63,"e":181.26,"text":"that tiny bug helps keep your whole plate full.","words":[["that",178.63],["tiny",178.91],["bug",179.19],["helps",179.39],["keep",179.74],["your",180.02],["whole",180.29],["plate",180.64],["full",180.98]]},{"s":181.81,"e":182.68,"text":"Next time:","words":[["next",181.81],["time",182.25]]},{"s":182.98,"e":185.07,"text":"how a bear hunt gave us the teddy bear.","words":[["how",182.98],["a",183.19],["bear",183.26],["hunt",183.54],["gave",183.82],["us",184.09],["the",184.23],["teddy",184.44],["bear",184.79]]}];
  // ---------- BEATS helpers: every time comes from PH ----------
  const P = (i, w, n = 1) => { let k = 0; for (const q of PH[i].words) if (q[0] === w && ++k === n) return q[1]; return PH[i].s; };
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const W = 1280, HH = 720;
  const E = H.ease, cl = H.clamp;
  const ph = (t, a, b) => cl((t - a) / (b - a));
  const up = (t, t0, d = 0.35) => E.out(ph(t, t0, t0 + d));
  const bk = (t, t0, d = 0.32) => E.back(ph(t, t0, t0 + d));
  const io = (t, a, b) => E.inOut(ph(t, a, b));
  const SG = (px, w = 700) => `${w} ${px}px "Space Grotesk"`;
  try { ['700 64px "Space Grotesk"', '400 28px "Space Grotesk"'].forEach((f) => document.fonts.load(f, 'AaZz09?,%×')); } catch (e) {}

  // ================= tiny 3D pipeline (reference: styles/low-poly.js) =================
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  const scl = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
  const rotY = (v, a) => { const c = Math.cos(a), s = Math.sin(a); return [v[0] * c + v[2] * s, v[1], -v[0] * s + v[2] * c]; };
  const rotX = (v, a) => { const c = Math.cos(a), s = Math.sin(a); return [v[0], v[1] * c - v[2] * s, v[1] * s + v[2] * c]; };
  const rotZ = (v, a) => { const c = Math.cos(a), s = Math.sin(a); return [v[0] * c - v[1] * s, v[0] * s + v[1] * c, v[2]]; };
  const lerp3 = (a, b, u) => [H.lerp(a[0], b[0], u), H.lerp(a[1], b[1], u), H.lerp(a[2], b[2], u)];
  // camera with yaw + pitch (reference makeCamYaw), plus roll
  function cam(pos, yaw, pitch, f = 760, roll = 0) {
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch), cr = Math.cos(roll), sr = Math.sin(roll);
    return {
      pos, f,
      proj(p) {
        const dx = p[0] - pos[0], dy = p[1] - pos[1], dz = p[2] - pos[2];
        const x1 = dx * cy - dz * sy, z1 = dx * sy + dz * cy;
        const y2 = dy * cp + z1 * sp, z2 = -dy * sp + z1 * cp;
        const x3 = x1 * cr - y2 * sr, y3 = x1 * sr + y2 * cr;
        return [W / 2 + (f * x3) / z2, HH / 2 - (f * y3) / z2, z2];
      },
    };
  }
  // camera that looks from `pos` at `at`
  function look(pos, at, f = 760, roll = 0) {
    const d = sub(at, pos), yaw = Math.atan2(d[0], d[2]), pitch = Math.atan2(-d[1], Math.hypot(d[0], d[2]));
    return cam(pos, yaw, pitch, f, roll);
  }
  // camera keyframes [t, x, y, z, ax, ay, az] -> look-at camera, eased between keys
  function flight(KF, t, f = 760) {
    let k = 0; while (k < KF.length - 2 && t > KF[k + 1][0]) k++;
    const A = KF[k], B = KF[k + 1], u = E.inOut(cl((t - A[0]) / (B[0] - A[0] || 1)));
    const L = (i) => H.lerp(A[i], B[i], u);
    return look([L(1), L(2), L(3)], [L(4), L(5), L(6)], f);
  }
  // icosahedron + cached geodesic subdivisions
  const ICO = (() => {
    const t = (1 + Math.sqrt(5)) / 2;
    const v = [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]].map(norm);
    const f = [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]];
    return { v, f };
  })();
  const GEO = {};
  function geo(lvl, jitter = 0, seed = 1) {
    const key = lvl + '_' + jitter + '_' + seed; if (GEO[key]) return GEO[key];
    let vs = ICO.v.map((v) => v.slice()), fs = ICO.f.map((f) => f.slice());
    for (let l = 0; l < lvl; l++) {
      const mid = {}, nf = [];
      const m = (a, b) => { const k2 = a < b ? a + '_' + b : b + '_' + a; if (mid[k2] == null) { vs.push(norm(add3(vs[a], vs[b]))); mid[k2] = vs.length - 1; } return mid[k2]; };
      for (const [a, b, c] of fs) { const ab = m(a, b), bc = m(b, c), ca = m(c, a); nf.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]); }
      fs = nf;
    }
    if (jitter) { const r = H.rng(seed); vs = vs.map((v) => scl(v, 1 + (r() - 0.5) * jitter)); }
    const cen = fs.map(([a, b, c]) => norm(add3(add3(vs[a], vs[b]), vs[c])));
    return (GEO[key] = { v: vs, f: fs, c: cen });
  }

  // ---------- per-frame triangle list ----------
  let TR = [];
  const tri = (a, b, c, col, o) => TR.push(Object.assign({ p: [a, b, c], col }, o));
  const mesh = (vs, fs, col, center, o = {}) => { for (let q = 0; q < fs.length; q++) { const [i, j, k] = fs[q]; tri(vs[i], vs[j], vs[k], typeof col === 'function' ? col(q) : col, Object.assign({ center }, o)); } };
  // sphere: geodesic lvl, colour fn(faceIndex, unit centre dir) or colour, rotation fn
  function sphere(c, r, lvl, col, o = {}) {
    const g = geo(lvl, o.jitter || 0, o.seed || 1), ry = o.ry || 0, rx = o.rx || 0, sy = o.sy || 1, sx = o.sx || 1;
    const vs = g.v.map((v) => { let p = [v[0] * sx, v[1] * sy, v[2] * (o.sz || 1)]; p = rotY(p, ry); if (rx) p = rotX(p, rx); if (o.rz) p = rotZ(p, o.rz); return [c[0] + p[0] * r, c[1] + p[1] * r, c[2] + p[2] * r]; });
    mesh(vs, g.f, typeof col === 'function' ? (q) => col(q, g.c[q]) : col, c, o);
  }
  function box(x0, y0, z0, x1, y1, z1, col, o = {}) {
    const v = [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]];
    const f = [[4, 5, 6], [4, 6, 7], [0, 2, 1], [0, 3, 2], [0, 1, 5], [0, 5, 4], [1, 2, 6], [1, 6, 5], [2, 3, 7], [2, 7, 6], [3, 0, 4], [3, 4, 7]];
    const T = o.tf ? v.map(o.tf) : v;
    mesh(T, f, col, o.tf ? o.tf([(x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2]) : [(x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2], o);
  }
  function prism(cx, y0, cz, r, h, sides, col, rot = 0, o = {}) {
    const vs = [];
    for (let i = 0; i < sides; i++) { const a = rot + i / sides * Math.PI * 2; vs.push([cx + Math.cos(a) * r, y0, cz + Math.sin(a) * r]); }
    for (let i = 0; i < sides; i++) { const a = rot + i / sides * Math.PI * 2; vs.push([cx + Math.cos(a) * (o.r2 ?? r), y0 + h, cz + Math.sin(a) * (o.r2 ?? r)]); }
    const fs = []; for (let i = 0; i < sides; i++) { const j = (i + 1) % sides; fs.push([i, j, sides + j], [i, sides + j, sides + i]); }
    for (let i = 1; i < sides - 1; i++) fs.push([sides, sides + i, sides + i + 1], [0, i + 1, i]);
    mesh(o.tf ? vs.map(o.tf) : vs, fs, col, o.tf ? o.tf([cx, y0 + h / 2, cz]) : [cx, y0 + h / 2, cz], o);
  }
  function cone(base, r, h, sides, col, rot = 0, o = {}) {
    const vs = [add3(base, [0, h, 0])];
    for (let i = 0; i < sides; i++) { const a = rot + i / sides * Math.PI * 2; vs.push(add3(base, [Math.cos(a) * r, 0, Math.sin(a) * r])); }
    const fs = []; for (let i = 0; i < sides; i++) fs.push([0, 1 + i, 1 + ((i + 1) % sides)]);
    mesh(o.tf ? vs.map(o.tf) : vs, fs, col, o.tf ? o.tf(add3(base, [0, h * 0.3, 0])) : add3(base, [0, h * 0.3, 0]), o);
  }
  // tube between two points (cannon barrel, wheel spokes, magnet arms)
  function tube(p0, p1, r, sides, col, o = {}) {
    const d = norm(sub(p1, p0)), a = Math.abs(d[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
    const u = norm(cross(d, a)), v = cross(d, u), vs = [];
    for (const [p, rr] of [[p0, r], [p1, o.r1 ?? r]]) for (let i = 0; i < sides; i++) { const q = (o.rot || 0) + i / sides * Math.PI * 2; vs.push(add3(p, add3(scl(u, Math.cos(q) * rr), scl(v, Math.sin(q) * rr)))); }
    const fs = []; for (let i = 0; i < sides; i++) { const j = (i + 1) % sides; fs.push([i, j, sides + j], [i, sides + j, sides + i]); }
    if (!o.open) for (let i = 1; i < sides - 1; i++) fs.push([sides, sides + i, sides + i + 1], [0, i + 1, i]);
    mesh(vs, fs, col, scl(add3(p0, p1), 0.5), o);
  }
  // low-poly person: boxy legs + torso, faceted head; s = height scale, ry = facing, lift = feet off ground, arms 0 down .. 1 up
  function person(base, s, col, o = {}) {
    const ry = o.ry || 0, arms = o.arms || 0;
    const tf = (p) => add3(base, rotY(scl(p, s), ry));
    const skin = [242, 196, 160], pants = o.pants || [60, 66, 120];
    box(-0.32, 0, -0.16, -0.04, 0.9, 0.16, pants, { tf, person: true });
    box(0.04, 0, -0.16, 0.32, 0.9, 0.16, pants, { tf, person: true });
    prism(0, 0.88, 0, 0.42, 0.85, 6, col, 0.3, { tf, person: true, r2: 0.36 });
    for (const sx of [-1, 1]) {
      const sh = [sx * 0.42, 1.62, 0], hand = [sx * (0.55 + 0.35 * arms), 1.62 - 0.75 * (1 - arms) + 0.75 * arms, 0.05];
      tube(tf(sh), tf(hand), 0.11 * s, 5, col, { person: true });
    }
    sphere(tf([0, 2.05, 0]), 0.3 * s, 0, skin, { ry: 0.4, person: true });
    sphere(tf([0, 2.17, -0.03]), 0.29 * s, 0, o.hair || [70, 46, 40], { ry: 1.1, person: true, sy: 0.62 });
  }

  // ---------- shade, cull, project, sort, paint (reference pipeline + facet build-in) ----------
  const SUN_DIR = norm([0.75, 0.55, 0.45]);
  const SUN_COL = [255, 226, 190], AMB = [104, 98, 150];
  const FOG = [236, 160, 150], FOG_HI = [180, 140, 190];
  const INK = '#2a1f4f', CORAL = [255, 112, 96];
  function paint(ctx, C, o = {}) {
    const fogN = o.fogN ?? 40, fogF = o.fogF ?? 260, fogC = o.fogC || null, sun = o.sun || SUN_DIR, build = o.build;
    const out = [];
    for (const tr of TR) {
      const [a, b, c] = tr.p;
      let n = norm(cross(sub(b, a), sub(c, a)));
      const cen = scl(add3(add3(a, b), c), 1 / 3);
      if (tr.terrain || tr.water) { if (n[1] < 0) n = scl(n, -1); }
      else if (tr.center) { if (dot(n, sub(cen, tr.center)) < 0) n = scl(n, -1); }
      const toCam = sub(C.pos, cen);
      if (tr.twoSided) { if (dot(n, toCam) < 0) n = scl(n, -1); }
      else if (dot(n, toCam) <= 0) continue;
      let pa = C.proj(a), pb = C.proj(b), pc = C.proj(c);
      if (pa[2] < 0.3 || pb[2] < 0.3 || pc[2] < 0.3) continue;
      const mnx = Math.min(pa[0], pb[0], pc[0]), mxx = Math.max(pa[0], pb[0], pc[0]), mny = Math.min(pa[1], pb[1], pc[1]), mxy = Math.max(pa[1], pb[1], pc[1]);
      if (mxx < -20 || mnx > W + 20 || mxy < -20 || mny > HH + 20) continue;
      const depth = (pa[2] + pb[2] + pc[2]) / 3 + (tr.bias || 0);
      let flash = 0;
      if (build != null && !tr.noBuild) { // facets flip in from the camera out to the horizon
        const jit = Math.abs((Math.sin(cen[0] * 12.9898 + cen[2] * 78.233 + cen[1] * 3.1) * 43758.5453) % 1);
        const at = H.clamp(depth / (o.buildD || 180)) * 0.75 + jit * 0.2;
        const pr = E.out(cl((build - at) / 0.3));
        if (pr <= 0) continue;
        if (pr < 1) { const mx = (pa[0] + pb[0] + pc[0]) / 3, my = (pa[1] + pb[1] + pc[1]) / 3, sq = (p) => [mx + (p[0] - mx) * pr, my + (p[1] - my) * pr, p[2]]; pa = sq(pa); pb = sq(pb); pc = sq(pc); flash = (1 - pr) * 0.7; }
      }
      let col;
      if (tr.emissive) col = tr.col;
      else if (tr.water) {
        const v = norm(toCam), rf = sub(scl(n, 2 * dot(n, v)), v);
        const spec = Math.pow(Math.max(0, dot(rf, norm([0.5, 0.2, 1]))), 12);
        col = H.mix(H.mix(tr.col2 || [120, 110, 190], [250, 170, 165], H.clamp(0.45 + n[0] * 4 + n[2] * 2)), [255, 236, 200], spec);
      } else if (tr.crystal) {
        const ramp = H.mix(H.mix([92, 74, 214], [255, 128, 186], H.clamp(0.45 + 0.7 * n[1])), [96, 206, 230], H.clamp(-n[0] * 0.9) * 0.5);
        const base = H.mix(tr.col, ramp, 0.5), lam = Math.max(0, dot(n, sun)), v = norm(toCam);
        const rl = sub(scl(n, 2 * dot(n, sun)), sun), spec = Math.pow(Math.max(0, dot(rl, v)), 20) * 0.6;
        col = [0, 1, 2].map((i) => base[i] * (AMB[i] / 255 * 0.5 + SUN_COL[i] / 255 * (0.25 + lam) * 0.75));
        col = H.mix(col, [255, 244, 236], H.clamp(spec));
      } else {
        const lam = Math.max(0, dot(n, sun));
        const soft = !tr.terrain && !tr.hard;
        let kk = soft ? 0.3 + 0.62 * lam : lam;
        if (tr.terrain && lam > 0) {
          const e2 = Math.max((pa[0] - pb[0]) ** 2 + (pa[1] - pb[1]) ** 2, (pb[0] - pc[0]) ** 2 + (pb[1] - pc[1]) ** 2, (pc[0] - pa[0]) ** 2 + (pc[1] - pa[1]) ** 2);
          const area2 = Math.abs((pb[0] - pa[0]) * (pc[1] - pa[1]) - (pc[0] - pa[0]) * (pb[1] - pa[1]));
          if (e2 > 3600) kk *= H.lerp(0.15, 1, H.smooth(0.06, 0.2, area2 / e2));
        }
        const fill = soft ? Math.max(0, dot(n, norm([-0.55, 0.6, -0.6]))) * 0.3 : 0;
        col = [0, 1, 2].map((i) => tr.col[i] * (AMB[i] / 255 * 0.85 + SUN_COL[i] / 255 * kk * 0.95 + [176, 186, 255][i] / 255 * fill));
      }
      const fogK = tr.emissive || tr.noFog ? 0 : H.clamp(Math.pow(H.smooth(fogN, fogF, depth), 1.15) * 0.9);
      if (fogK > 0) col = H.mix(col, fogC || H.mix(FOG, FOG_HI, H.clamp(cen[1] / 30)), fogK);
      if (tr.tint) col = H.mix(col, tr.tint[0], tr.tint[1]);
      if (flash) col = H.mix(col, [255, 236, 226], flash);
      out.push({ pa, pb, pc, depth, col, a: tr.alpha });
    }
    out.sort((p, q) => q.depth - p.depth);
    ctx.lineJoin = 'round'; ctx.lineWidth = 0.9;
    for (const q of out) {
      const fs = `rgb(${q.col[0] | 0},${q.col[1] | 0},${q.col[2] | 0})`;
      if (q.a != null) ctx.globalAlpha = q.a;
      ctx.fillStyle = fs; ctx.strokeStyle = fs;
      ctx.beginPath(); ctx.moveTo(q.pa[0], q.pa[1]); ctx.lineTo(q.pb[0], q.pb[1]); ctx.lineTo(q.pc[0], q.pc[1]); ctx.closePath(); ctx.fill(); ctx.stroke();
      if (q.a != null) ctx.globalAlpha = 1;
    }
    TR = [];
  }

  // ================= reference 2D pieces: cut-corner tag, faceted ribbon arrow, faceted sun =================
  function lpTag(ctx, x, y, text, o = {}) {
    const k = o.k ?? 1; if (!(k > 0.01)) return;
    ctx.save();
    ctx.font = o.font || SG(30);
    const fsz = parseInt((ctx.font.match(/(\d+)px/) || [0, 30])[1]);
    const w = ctx.measureText(text).width + fsz * 1.3, h = o.h || Math.round(fsz * 1.75), ch = h * 0.32;
    ctx.translate(x, y); ctx.scale(k, k); if (o.rot) ctx.rotate(o.rot);
    const pts = [[-w / 2 + ch, -h / 2], [w / 2, -h / 2], [w / 2, h / 2 - ch], [w / 2 - ch, h / 2], [-w / 2, h / 2], [-w / 2, -h / 2 + ch]];
    ctx.fillStyle = o.shadow || 'rgba(40,20,70,0.35)'; ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0] + 4, p[1] + 4) : ctx.moveTo(p[0] + 4, p[1] + 4)); ctx.closePath(); ctx.fill();
    const bg = H.hex(o.bg || '#fff6f0');
    ctx.fillStyle = H.rgba(bg); ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.closePath(); ctx.fill();
    ctx.fillStyle = H.rgba(H.mix(bg, [255, 255, 255], 0.5)); ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); ctx.lineTo(pts[1][0], pts[1][1]); ctx.lineTo(w / 2 - h * 0.6, 0); ctx.lineTo(-w / 2, 0); ctx.lineTo(pts[5][0], pts[5][1]); ctx.closePath(); ctx.fill();
    ctx.fillStyle = o.col || INK; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 0, 1);
    ctx.restore();
  }
  const darkTag = (ctx, x, y, text, k, o = {}) => lpTag(ctx, x, y, text, Object.assign({ k, bg: '#2a1f4f', col: '#fff' }, o));
  const coralTag = (ctx, x, y, text, k, o = {}) => lpTag(ctx, x, y, text, Object.assign({ k, bg: '#ff7060', col: '#fff' }, o));
  const bigTag = (ctx, x, y, text, k, o = {}) => lpTag(ctx, x, y, text, Object.assign({ k, font: SG(o.px || 70), h: Math.round((o.px || 70) * 1.42) }, o));
  function lpArrow(ctx, a, c, b, prog, colA, w = 12) {
    if (prog <= 0) return null;
    const q = (u) => [(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * c[0] + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * c[1] + u * u * b[1]];
    const N = 7, pts = []; for (let i = 0; i <= N; i++) pts.push(q(prog * i / N));
    const light = H.rgba(H.mix(colA, [255, 255, 255], 0.3)), dark = H.rgba(H.mix(colA, [40, 20, 70], 0.25));
    const end = pts.length - 1;
    for (let i = 0; i < end; i++) {
      const p0 = pts[i], p1 = pts[i + 1], dx = p1[0] - p0[0], dy = p1[1] - p0[1], L = Math.hypot(dx, dy) || 1;
      const nx = -dy / L * w / 2, ny = dx / L * w / 2;
      const shrink = i === end - 1 ? 0.35 : 0;
      const p1b = [p1[0] - dx * shrink, p1[1] - dy * shrink];
      ctx.fillStyle = light; ctx.beginPath(); ctx.moveTo(p0[0] + nx, p0[1] + ny); ctx.lineTo(p1b[0] + nx, p1b[1] + ny); ctx.lineTo(p1b[0], p1b[1]); ctx.lineTo(p0[0], p0[1]); ctx.closePath(); ctx.fill();
      ctx.fillStyle = dark; ctx.beginPath(); ctx.moveTo(p0[0] - nx, p0[1] - ny); ctx.lineTo(p1b[0] - nx, p1b[1] - ny); ctx.lineTo(p1b[0], p1b[1]); ctx.lineTo(p0[0], p0[1]); ctx.closePath(); ctx.fill();
    }
    const e = pts[end], e0 = pts[end - 1], ang = Math.atan2(e[1] - e0[1], e[0] - e0[0]);
    ctx.save(); ctx.translate(e[0], e[1]); ctx.rotate(ang);
    ctx.fillStyle = light; ctx.beginPath(); ctx.moveTo(4, 0); ctx.lineTo(-w * 1.4, -w * 1.1); ctx.lineTo(-w * 1.4, 0); ctx.closePath(); ctx.fill();
    ctx.fillStyle = dark; ctx.beginPath(); ctx.moveTo(4, 0); ctx.lineTo(-w * 1.4, w * 1.1); ctx.lineTo(-w * 1.4, 0); ctx.closePath(); ctx.fill();
    ctx.restore();
    return q;
  }
  // straight arrow helper (bent slightly so the ribbon facets read)
  const arrow = (ctx, a, b, prog, col, w = 12, bend = 0) => lpArrow(ctx, a, [(a[0] + b[0]) / 2 - (b[1] - a[1]) * bend, (a[1] + b[1]) / 2 + (b[0] - a[0]) * bend], b, prog, col, w);
  const WHITE = [255, 246, 240], CORALA = [255, 112, 96], TEAL = [80, 210, 200], GOLD = [255, 200, 110], VIO = [150, 124, 240];
  function faceSun(ctx, x, y, r, glow = 1) {
    const g = ctx.createRadialGradient(x, y, r * 0.6, x, y, r * 6.4);
    g.addColorStop(0, `rgba(255,214,160,${0.5 * glow})`); g.addColorStop(1, 'rgba(255,214,160,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    for (let i = 0; i < 14; i++) {
      const a0 = (i / 14) * Math.PI * 2, a1 = ((i + 1) / 14) * Math.PI * 2;
      ctx.fillStyle = H.rgba(H.mix('#ffd49a', '#fff4d8', 0.5 + 0.5 * Math.cos(a0 - 2.3)));
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a0) * r, y + Math.sin(a0) * r); ctx.lineTo(x + Math.cos(a1) * r, y + Math.sin(a1) * r); ctx.closePath(); ctx.fill();
    }
  }
  // faceted 2D clouds (reference draw())
  function cloud(ctx, cx, cy, s, a, seed) {
    const cr = H.rng(seed), bumps = [[-0.75, 0.05, 0.38], [-0.3, -0.18, 0.5], [0.22, -0.28, 0.58], [0.72, -0.02, 0.4]];
    ctx.save(); ctx.beginPath(); ctx.rect(cx - s * 2, cy - s * 2, s * 4, s * 2 + s * 0.18); ctx.clip();
    for (const [bx, by, br] of bumps) {
      const ox = cx + bx * s, oy = cy + by * s, rr = br * s, n = 7, rot = cr() * 3;
      for (let i = 0; i < n; i++) {
        const a0 = rot + (i / n) * Math.PI * 2, a1 = rot + ((i + 1) / n) * Math.PI * 2, lit = 0.5 - 0.5 * Math.sin((a0 + a1) / 2);
        const c = H.mix([150, 108, 168], [255, 206, 200], H.clamp(lit * 0.9 + cr() * 0.15));
        ctx.fillStyle = H.rgba(c, a); ctx.strokeStyle = H.rgba(c, a); ctx.lineWidth = 0.6;
        ctx.beginPath(); ctx.moveTo(ox, oy + rr * 0.15); ctx.lineTo(ox + Math.cos(a0) * rr, oy + Math.sin(a0) * rr); ctx.lineTo(ox + Math.cos(a1) * rr, oy + Math.sin(a1) * rr); ctx.closePath(); ctx.fill(); ctx.stroke();
      }
    }
    ctx.restore();
  }

  // ================= backgrounds =================
  // dusk sky (reference), horizon at hz; sun parallaxes with the camera when given
  function skyDusk(ctx, C, hz = 0.62, seed = 77) {
    const sky = ctx.createLinearGradient(0, 0, 0, HH * hz);
    sky.addColorStop(0, '#1b2350'); sky.addColorStop(0.38, '#4d3f84'); sky.addColorStop(0.7, '#c06a93'); sky.addColorStop(1, '#ffb08a');
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, HH);
    const R0 = H.rng(seed);
    for (let i = 0; i < 90; i++) { const x = R0() * W, y = R0() * 160, a = (1 - y / 160) * R0() * 0.8; ctx.fillStyle = `rgba(255,240,255,${a})`; ctx.fillRect(x, y, 1, 1); }
    if (C) { const sp = C.proj([C.pos[0] + 30, C.pos[1] + 12, C.pos[2] + 400]); if (sp[2] > 0) faceSun(ctx, sp[0], sp[1], 50); }
  }
  // deep space: the reference's dusk palette pushed to night, seeded stars, a far faceted sun
  function skySpace(ctx, t, seed = 5, sun = [1080, 120]) {
    const g = ctx.createLinearGradient(0, 0, W * 0.3, HH);
    g.addColorStop(0, '#0e1230'); g.addColorStop(0.55, '#1b2350'); g.addColorStop(1, '#3d2f6e');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    const R0 = H.rng(seed);
    for (let i = 0; i < 260; i++) {
      const x = R0() * W, y = R0() * HH, s = R0() < 0.08 ? 2 : 1, tw = 0.55 + 0.45 * Math.sin(t * (1 + R0() * 2) + i);
      ctx.fillStyle = `rgba(255,240,255,${(0.25 + R0() * 0.6) * tw})`; ctx.fillRect(x, y, s, s);
    }
    // faint faceted nebula band
    const r2 = H.rng(seed + 9);
    for (let i = 0; i < 26; i++) {
      const x = i / 25 * W, y = HH * 0.75 - i * 14 + r2.range(-30, 30);
      ctx.fillStyle = `rgba(${r2() < 0.5 ? '192,106,147' : '120,96,200'},${0.05 + r2() * 0.05})`;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + r2.range(60, 140), y + r2.range(-70, 70)); ctx.lineTo(x + r2.range(-40, 80), y + r2.range(60, 140)); ctx.closePath(); ctx.fill();
    }
    if (sun) faceSun(ctx, sun[0], sun[1], 34, 0.7);
  }

  // ---------- terrains (cached world triangles) ----------
  const NZ = H.makeNoise(31);
  const valleyH = (x, z) => {
    const valley = Math.pow(Math.abs(x - 4 * Math.sin(z * 0.035)) / 55, 1.7) * 22;
    const far = H.smooth(130, 210, z) * 18;
    let h = NZ.fbm2(x * 0.045, z * 0.045, 4) * 7 + valley + far - 3;
    const dc = Math.hypot(x - 14, z - 40); h = H.lerp(3.2, h, H.smooth(7, 15, dc)); // plateau where the person stands
    const dq = Math.hypot((x + 22) / 1.6, z - 70); h = H.lerp(4.5, h, H.smooth(9, 17, dq)); // plateau for pillars
    return h;
  };
  const WATER = -0.6;
  const TERR = {};
  function terrainTris(kind) {
    if (TERR[kind]) return TERR[kind];
    const tris = [], moon = kind === 'moon', beach = kind === 'beach', outb = kind === 'outback', pit = kind === 'pit';
    const hf = moon ? moonH : beach ? beachH : pit ? pitH : valleyH;
    const CELL = moon ? 4 : 4.4, X0 = -110, X1 = 130, Z0 = -20, Z1 = 230;
    const nx = Math.round((X1 - X0) / CELL), nzc = Math.round((Z1 - Z0) / CELL);
    const jr = H.rng(moon ? 15 : 5), V = [];
    for (let j = 0; j <= nzc; j++) { const row = []; for (let i = 0; i <= nx; i++) { const x = X0 + i * CELL + (i > 0 && i < nx ? jr.range(-0.38, 0.38) * CELL : 0), z = Z0 + j * CELL + (j > 0 && j < nzc ? jr.range(-0.38, 0.38) * CELL : 0); row.push([x, hf(x, z), z]); } V.push(row); }
    const tc = (y, slope) => {
      if (moon) { const g = H.clamp(0.55 + y * 0.04 + NZ.n2(y, slope * 9) * 0.08); return H.mix([96, 92, 112], [196, 192, 206], g); }
      let c;
      if (outb) { c = y < 6 ? H.mix([196, 120, 70], [214, 150, 90], H.clamp(y / 6 + NZ.n2(y * 3, slope * 7) * 0.3)) : y < 16 ? H.mix([180, 96, 70], [150, 90, 96], H.smooth(8, 16, y)) : [200, 150, 140]; if (slope > 0.55) c = H.mix(c, [140, 80, 70], 0.5); return c; }
      if (pit && y < -2) return H.mix([60, 40, 50], [130, 90, 80], H.clamp((y + 14) / 12));
      if (y < WATER + 0.6) c = [214, 196, 150];
      else if (y < 6) c = H.mix([86, 160, 112], [60, 128, 96], H.clamp(y / 6));
      else if (y < 14) c = H.mix([60, 128, 96], [110, 112, 120], H.smooth(9, 14, y));
      else if (y < 22) c = [118, 110, 128]; else c = [244, 238, 248];
      if (slope > 0.55 && y > 3 && y < 22) c = H.mix(c, [124, 112, 124], 0.6);
      return c;
    };
    for (let j = 0; j < nzc; j++) for (let i = 0; i < nx; i++) {
      const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1];
      const faces = (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]];
      for (const f of faces) {
        if (!moon && !beach && !outb && !pit && Math.max(f[0][1], f[1][1], f[2][1]) < WATER) { tris.push({ p: f.map((p) => [p[0], WATER + NZ.n2(p[0] * 0.4, p[2] * 0.4) * 0.35, p[2]]), col: [96, 120, 190], water: true }); continue; }
        let n = norm(cross(sub(f[1], f[0]), sub(f[2], f[0]))); if (n[1] < 0) n = scl(n, -1);
        tris.push({ p: f, col: tc((f[0][1] + f[1][1] + f[2][1]) / 3, 1 - Math.abs(n[1])), terrain: true });
      }
    }
    if (!moon) { // reference conifers
      const tr = H.rng(9);
      const cn = (base, r, h, col, rot) => { const vs = [add3(base, [0, h, 0])]; for (let i = 0; i < 5; i++) { const a = rot + i / 5 * Math.PI * 2; vs.push(add3(base, [Math.cos(a) * r, 0, Math.sin(a) * r])); } for (let i = 0; i < 5; i++) tris.push({ p: [vs[0], vs[1 + i], vs[1 + (i + 1) % 5]], col, center: add3(base, [0, h * 0.3, 0]), hard: true }); };
      for (let kk = 0, placed = 0; kk < 1600 && placed < 200; kk++) {
        const x = tr.range(-80, 90), z = tr.range(0, 170), y = hf(x, z);
        if (y < 0.8 || y > 12) continue;
        if (Math.hypot(x - 14, z - 40) < 12 || Math.hypot((x + 22) / 1.6, z - 70) < 16) continue;
        if (beach && x > -10) continue;
        if (pit && Math.hypot(x - 10, z - 60) < 34) continue;
        if (outb && tr() < 0.82) continue;
        if (NZ.fbm2(x * 0.05 + 40, z * 0.05, 2) < -0.05) continue;
        const s = tr.range(1.5, 2.4), g = outb ? H.mix([110, 120, 70], [140, 130, 80], tr()) : H.mix([40, 110, 90], [70, 140, 100], tr()), rot = tr() * 6;
        cn([x, y - 0.2, z], s * 0.75, s * 1.6, g, rot); cn([x, y + s * 0.85, z], s * 0.55, s * 1.4, H.mix(g, [120, 180, 120], 0.25), rot + 0.6);
        placed++;
      }
    } else { // boulders
      const tr = H.rng(19);
      for (let k = 0; k < 40; k++) {
        const x = tr.range(-40, 60), z = tr.range(10, 120), y = hf(x, z), r = tr.range(0.6, 2.2);
        if (Math.hypot(x - 14, z - 40) < 9) continue;
        const g = geo(0, 0.5, k + 3);
        const vs = g.v.map((v) => [x + v[0] * r, y + v[1] * r * 0.6, z + v[2] * r]);
        for (const [a, b, c] of g.f) tris.push({ p: [vs[a], vs[b], vs[c]], col: [150, 146, 160], center: [x, y, z], hard: true });
      }
    }
    return (TERR[kind] = tris);
  }
  function pitH(x, z) { const d = Math.hypot(x - 10, z - 60); const h = valleyH(x, z); return d < 26 ? H.lerp(-16, h, H.smooth(14, 26, d)) : h; }
  function moonH(x, z) {
    let h = NZ.fbm2(x * 0.03 + 70, z * 0.03, 4) * 6 + H.smooth(120, 200, z) * 10;
    for (const [cx, cz, r] of [[-8, 60, 9], [30, 80, 12], [-30, 35, 6], [46, 46, 7], [0, 110, 16]]) {
      const d = Math.hypot(x - cx, z - cz) / r; if (d < 1.4) h += d < 1 ? -3.2 * (1 - d * d) : 2.2 * Math.sin((d - 1) / 0.4 * Math.PI);
    }
    const dc = Math.hypot(x - 14, z - 40); return H.lerp(1.2, h, H.smooth(5, 12, dc));
  }
  function beachH(x, z) { // sloping shore down to the right into the sea (water is a separate moving plane)
    return NZ.fbm2(x * 0.05, z * 0.05, 3) * 2.2 + (-x * 0.16) + H.smooth(140, 210, z) * 16 + 2;
  }
  const pushTerrain = (kind) => { for (const q of terrainTris(kind)) TR.push(q); };
  // moving sea plane (for the tides): faceted water sheet at height y
  function sea(y, t, x0 = -60, x1 = 140, z0 = 0, z1 = 200) {
    const C = 6, r = H.rng(31);
    for (let x = x0; x < x1; x += C) for (let z = z0; z < z1; z += C) {
      const hh = (xx, zz) => y + NZ.n2(xx * 0.3 + t * 0.4, zz * 0.3) * 0.3;
      const a = [x, hh(x, z), z], b = [x + C, hh(x + C, z), z], c = [x, hh(x, z + C), z + C], d = [x + C, hh(x + C, z + C), z + C];
      tri(a, c, b, [96, 120, 190], { water: true }); tri(b, c, d, [96, 120, 190], { water: true });
    }
    void r;
  }

  // ---------- planets ----------
  // faceted Earth: ocean / land / ice by face direction; ry spins it. land is fixed to the body (computed from the unrotated face centre)
  const EARTH_N = H.makeNoise(8);
  function earthCol(q, d) {
    const lat = Math.abs(d[1]);
    if (lat > 0.88) return [244, 238, 248];
    const v = EARTH_N.fbm3(d[0] * 1.6, d[1] * 1.6, d[2] * 1.6, 3);
    if (v > 0.08) return v > 0.28 ? [118, 110, 128] : H.mix([86, 160, 112], [60, 128, 96], H.clamp((v - 0.08) * 4));
    if (v > 0.06) return [214, 196, 150];
    return H.mix([70, 110, 200], [96, 150, 214], H.clamp(0.5 + v * 3));
  }
  function earth(c, r, ry, o = {}) { sphere(c, r, o.lvl ?? 3, earthCol, Object.assign({ ry, soft: true, rx: o.rx ?? 0.35 }, o)); }
  function moonCol(q, d) { const v = EARTH_N.fbm3(d[0] * 2.4 + 9, d[1] * 2.4, d[2] * 2.4, 3); return H.mix([120, 116, 136], [210, 206, 218], H.clamp(0.55 + v * 1.6)); }
  function moon(c, r, ry = 0, o = {}) { sphere(c, r, o.lvl ?? 2, moonCol, Object.assign({ ry, soft: true }, o)); }
  // glow halo for planets (atmosphere)
  function halo(ctx, C, p, r, col = '150,190,255', a = 0.35) {
    const s = C.proj(p); if (s[2] < 0.5) return;
    const R = r * C.f / s[2];
    const g = ctx.createRadialGradient(s[0], s[1], R * 0.92, s[0], s[1], R * 1.25);
    g.addColorStop(0, `rgba(${col},${a})`); g.addColorStop(1, `rgba(${col},0)`);
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = g; ctx.fillRect(s[0] - R * 1.3, s[1] - R * 1.3, R * 2.6, R * 2.6); ctx.restore();
  }
  const scr = (C, p) => C.proj(p);
  const pxs = (C, p, wu) => wu * C.f / C.proj(p)[2];

  // ================= scene kit =================
  const SC = [], SFX = [];
  const fx = (t, kind, o = {}) => SFX.push([t, kind, o]);
  const TRD = { facet: 0.7, whip: 0.45, cut: 0, build: 0, none: 0 };
  function scene(i0, i1, tr, draw) { const s = SC.length ? PE(i0 - 1) + 0.03 : 0; SC.push({ i0, i1, s, tr, draw }); }
  let BUILD = null; // set per frame for 'build' scenes: facets flip in from the camera out
  const pnt = (ctx, C, o = {}) => paint(ctx, C, Object.assign({ build: BUILD }, o));
  const tagT = (t, t0, out = 1e9) => bk(t, t0) * (1 - ph(t, out, out + 0.25));
  const LAND = (i, w, n) => P(i, w, n) - 0.12; // visuals lead the word by 0.12 s
  const fmt = (v) => Math.round(v).toLocaleString('en-US');
  const P0 = [14, 3.2, 40], P1 = [-22, 4.5, 70];
  function valley(ctx, C, push, o = {}) {
    if (o.night) skyNight(ctx, o.seed ?? 3); else skyDusk(ctx, C, o.hz ?? 0.62, o.seed ?? 77);
    if (o.clouds) { cloud(ctx, 260 + o.clouds * 8, 250, 80, 0.85, 1); cloud(ctx, 1040 - o.clouds * 5, 140, 70, 0.75, 2); }
    pushTerrain(o.kind || 'valley');
    if (push) push();
    pnt(ctx, C, o.night ? Object.assign({ fogC: [40, 40, 90], sun: norm([-0.3, 0.8, 0.5]) }, o) : o);
  }
  function skyNight(ctx, seed) {
    const g = ctx.createLinearGradient(0, 0, 0, HH * 0.65);
    g.addColorStop(0, '#0e1230'); g.addColorStop(0.6, '#1b2350'); g.addColorStop(1, '#4d3f84');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    const R0 = H.rng(seed); for (let i = 0; i < 160; i++) { const x = R0() * W, y = R0() * 300; ctx.fillStyle = `rgba(255,240,255,${R0() * 0.8})`; ctx.fillRect(x, y, R0() < 0.1 ? 2 : 1, R0() < 0.1 ? 2 : 1); }
    for (let i = 0; i < 10; i++) { const a0 = i / 10 * 6.283, a1 = (i + 1) / 10 * 6.283; ctx.fillStyle = H.rgba(H.mix([230, 226, 250], [190, 186, 220], 0.5 + 0.5 * Math.cos(a0 - 2))); ctx.beginPath(); ctx.moveTo(1040, 120); ctx.lineTo(1040 + Math.cos(a0) * 40, 120 + Math.sin(a0) * 40); ctx.lineTo(1040 + Math.cos(a1) * 40, 120 + Math.sin(a1) * 40); ctx.closePath(); ctx.fill(); }
  }
  // plain faceted studio backdrop (for counters and line-ups): dusk gradient + big soft facets
  function studio(ctx, seed = 1, a = '#4d3f84', b = '#c06a93') {
    const g = ctx.createLinearGradient(0, 0, W * 0.4, HH); g.addColorStop(0, '#1b2350'); g.addColorStop(0.55, a); g.addColorStop(1, b);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    const r = H.rng(seed);
    for (let i = 0; i < 22; i++) { const x = r() * W, y = r() * HH; ctx.fillStyle = `rgba(255,${r() < 0.5 ? '200,220' : '220,255'},${0.03 + r() * 0.05})`; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + r.range(-260, 260), y + r.range(80, 260)); ctx.lineTo(x + r.range(-260, 260), y + r.range(-260, -40)); ctx.closePath(); ctx.fill(); }
  }
  // a faceted floor disc for studio scenes
  function disc(c, r, col = [236, 200, 210], sides = 14) { prism(c[0], c[1] - 0.6, c[2], r, 0.6, sides, col, 0.2, { hard: true }); }

  // ================= low-poly creatures and props =================
  const tfm = (c, s, ry, rz = 0) => (p) => add3(c, rotY(rotZ(scl(p, s), rz), ry));
  const wing = (tf, pts, col, alpha) => tri(tf(pts[0]), tf(pts[1]), tf(pts[2]), col, { twoSided: true, alpha, hard: true });
  // insects: kind bee | fly | midge | beetle | butterfly | moth | dung. c = centre, s = size (body length ~ 2s), t drives wing flaps
  function bug(c, s, kind, t, o = {}) {
    const ry = o.ry || 0, tf = tfm(c, s, ry, o.rz || 0), flap = Math.sin(t * (o.flapHz || 34) + (o.ph || 0));
    if (kind === 'butterfly' || kind === 'moth') {
      tube(tf([-0.9, 0, 0]), tf([0.9, 0, 0]), 0.12 * s, 5, [50, 40, 60]);
      sphere(tf([1.0, 0.05, 0]), 0.2 * s, 0, [50, 40, 60]);
      const wA = H.lerp(0.15, 1.35, 0.5 + 0.5 * Math.sin(t * 9 + (o.ph || 0)));
      const c1 = kind === 'moth' ? [210, 190, 160] : o.col || [255, 140, 60], c2 = kind === 'moth' ? [170, 150, 130] : H.mix(c1, [120, 60, 200], 0.4);
      for (const sd of [-1, 1]) {
        const R = (p) => rotX(p, sd * wA);
        wing(tf, [[0.1, 0, 0], R([1.1, 0, sd * 1.9]), R([-0.4, 0, sd * 1.7])], c1);
        wing(tf, [[-0.1, 0, 0], R([-0.5, 0, sd * 1.5]), R([-1.3, 0, sd * 0.9])], c2);
      }
      return;
    }
    const isBee = kind === 'bee', beet = kind === 'beetle' || kind === 'dung';
    const bodyCol = isBee ? (q, d) => (Math.floor((d[0] + 1) * 2.6) % 2 ? [255, 196, 60] : [50, 36, 40]) : beet ? (o.col || (kind === 'dung' ? [70, 54, 60] : [60, 160, 120])) : [70, 74, 92];
    sphere(tf([0, 0, 0]), 0.62 * s, o.lite ? 0 : 1, bodyCol, { sx: beet ? 1.25 : 1.45, sy: beet ? 0.62 : 0.85, ry: ry, soft: true, hard: false });
    sphere(tf([0.95, 0.1, 0]), 0.36 * s, 0, isBee ? [50, 36, 40] : [40, 36, 50], { soft: true });
    if (!beet || o.fly) {
      const up2 = 0.25 + 0.75 * (0.5 + 0.5 * flap);
      for (const sd of [-1, 1]) wing(tf, [[0.2, 0.4, sd * 0.1], [-0.6, 0.4 + up2 * 0.9, sd * 1.5], [-1.1, 0.4 + up2 * 0.5, sd * 0.6]], [235, 240, 255], 0.75);
    }
    if (o.legs !== false) for (const sd of [-1, 1]) for (let k = -1; k <= 1; k++) tube(tf([k * 0.4, -0.15, sd * 0.35]), tf([k * 0.6 + Math.sin(t * 14 + k) * 0.1 * (o.walk || 0), -0.65, sd * 0.85]), 0.05 * s, 3, [40, 30, 40]);
    if (kind === 'dung') sphere(tf([2.2, 0.2, 0]), 1.25 * s, 1, [120, 84, 60], { jitter: 0.25, seed: 7, rz: -(o.roll || 0), soft: true });
  }
  function caterpillar(c, s, t, ry = 0, ph0 = 0) {
    const tf = tfm(c, s, ry);
    for (let i = 0; i < 7; i++) { const y = 0.25 * Math.max(0, Math.sin(t * 6 + ph0 - i * 0.7)); sphere(tf([-i * 0.55, y + 0.35, 0]), 0.36 * s, 0, i ? (i % 2 ? [120, 200, 90] : [100, 180, 80]) : [70, 140, 60], { soft: true }); }
  }
  function flower(base, s, col, open = 1, o = {}) {
    const tf = tfm(base, s, o.ry || 0);
    tube(tf([0, 0, 0]), tf([0, 2.2, 0]), 0.08 * s, 4, [70, 150, 90]);
    tri(tf([0, 0.9, 0]), tf([0.7, 1.3, 0.2]), tf([0.1, 1.1, 0]), [90, 170, 100], { twoSided: true, hard: true });
    const top = tf([0, 2.25, 0]);
    if (o.fruit) { sphere(add3(top, [0, -0.3 * s, 0]), 0.55 * s * o.fruit, 1, o.fruitCol || [230, 70, 80], { soft: true }); return; }
    if (open > 0.02) for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283, a2 = (i + 0.5) / 6 * 6.283, r = 0.95 * open, dr = o.droop || 0; tri(top, tf([Math.cos(a) * r * 0.45, 2.25, Math.sin(a) * r * 0.45]), tf([Math.cos(a2) * r, 2.25 + 0.35 * open - dr * 1.4, Math.sin(a2) * r]), H.mix(col, [255, 255, 255], i % 2 ? 0.15 : 0), { twoSided: true }); tri(top, tf([Math.cos(a2) * r, 2.25 + 0.35 * open - dr * 1.4, Math.sin(a2) * r]), tf([Math.cos(a + 1.047) * r * 0.45, 2.25, Math.sin(a + 1.047) * r * 0.45]), H.mix(col, [80, 40, 90], 0.15), { twoSided: true }); }
    sphere(add3(top, [0, 0.12 * s, 0]), 0.28 * s, 0, o.center || [255, 200, 80], { soft: true });
  }
  function tree(base, s, col = [70, 140, 100], o = {}) {
    prism(base[0], base[1], base[2], 0.35 * s, 3 * s, 5, [120, 84, 70], 0.3, { r2: 0.22 * s, hard: true });
    sphere(add3(base, [0, 3.6 * s, 0]), 2.0 * s, 1, col, { jitter: 0.4, seed: o.seed || 3, soft: true, sy: 0.85 });
  }
  function bird(c, s, t, o = {}) { // chickadee-ish songbird facing +x (ry turns it)
    const tf = tfm(c, s, o.ry || 0), flap = Math.sin(t * 22);
    sphere(tf([0, 0, 0]), 0.8 * s, 1, (q, d) => (d[1] < -0.2 ? [240, 226, 200] : [150, 150, 165]), { sx: 1.25, soft: true });
    sphere(tf([0.85, 0.55, 0]), 0.52 * s, 1, (q, d) => (d[1] > 0.05 || d[0] > 0.6 ? [40, 34, 44] : [250, 248, 244]), { soft: true });
    cone(tf([1.3, 0.55, 0]), 0.1 * s, 0.4 * s, 4, [255, 170, 60], 0, { tf: (p) => p }); // tiny beak (point straight up is fine at this size)
    tri(tf([-0.8, 0.1, 0]), tf([-1.9, 0.5, 0.3]), tf([-1.9, 0.2, -0.3]), [90, 90, 110], { twoSided: true });
    const up2 = o.fly ? flap : -0.4;
    for (const sd of [-1, 1]) tri(tf([0.4, 0.3, sd * 0.5]), tf([-0.7, 0.2 + up2 * 0.9, sd * (o.fly ? 1.9 : 0.75)]), tf([-0.9, 0.0, sd * 0.6]), [110, 110, 130], { twoSided: true, hard: true });
    if (o.worm) caterpillar(tf([1.9, 0.5, 0]), 0.35 * s, t, o.ry || 0);
  }
  function chick(c, s, t, ph0 = 0) {
    const bob = Math.max(0, Math.sin(t * 7 + ph0)) * 0.3 * s;
    sphere(add3(c, [0, bob, 0]), 0.55 * s, 1, [255, 214, 120], { soft: true });
    cone(add3(c, [0, bob + 0.45 * s, 0]), 0.22 * s, 0.55 * s, 4, [255, 120, 70], ph0);
  }
  function nest(c, s) { prism(c[0], c[1], c[2], 1.2 * s, 0.8 * s, 9, [150, 110, 80], 0, { r2: 1.6 * s, hard: true }); }
  function fruit(kind, c, s) {
    if (kind === 'apple') { sphere(c, s, 1, [230, 60, 70], { soft: true, sy: 0.9 }); tube(add3(c, [0, 0.8 * s, 0]), add3(c, [0.1 * s, 1.3 * s, 0]), 0.06 * s, 3, [110, 80, 60]); }
    else if (kind === 'almond') { for (let i = 0; i < 3; i++) sphere(add3(c, [(i - 1) * 0.8 * s, 0, (i % 2) * 0.4 * s]), 0.45 * s, 0, [190, 130, 90], { sx: 1.5, sy: 0.6, ry: i, soft: true }); }
    else if (kind === 'blueberry') { for (let i = 0; i < 5; i++) sphere(add3(c, [Math.cos(i * 1.3) * 0.6 * s, (i === 4 ? 0.5 : 0) * s, Math.sin(i * 1.3) * 0.6 * s]), 0.42 * s, 0, [70, 80, 180], { soft: true }); }
    else if (kind === 'cherry') { for (const sd of [-1, 1]) { sphere(add3(c, [sd * 0.45 * s, 0, 0]), 0.5 * s, 0, [200, 30, 60], { soft: true }); tube(add3(c, [sd * 0.45 * s, 0.4 * s, 0]), add3(c, [0, 1.6 * s, 0]), 0.05 * s, 3, [90, 140, 80]); } }
    else if (kind === 'melon') sphere(c, 1.3 * s, 1, (q, d) => (Math.floor((Math.atan2(d[2], d[0]) + 3.2) * 2.2) % 2 ? [110, 180, 90] : [80, 150, 70]), { soft: true, sy: 0.9 });
  }
  function plate(c, r, col = [250, 246, 240]) { prism(c[0], c[1], c[2], r, 0.2, 16, col, 0, { r2: r * 1.12, hard: true }); }
  function cow(c, s, t, ry = 0) {
    const tf = tfm(c, s, ry);
    const coat = (q) => (q % 5 === 0 || q % 7 === 0 ? [50, 44, 50] : [244, 240, 236]);
    box(-1.3, 1.1, -0.6, 1.3, 2.3, 0.6, coat, { tf });
    const nod = Math.sin(t * 1.3) * 0.15;
    box(1.2, 1.4 + nod, -0.42, 2.1, 2.2 + nod, 0.42, [240, 236, 232], { tf });
    box(2.05, 1.4 + nod, -0.35, 2.3, 1.75 + nod, 0.35, [240, 170, 170], { tf });
    for (const [x, z] of [[-1, -0.4], [-1, 0.4], [1, -0.4], [1, 0.4]]) box(x - 0.18, 0, z - 0.18, x + 0.18, 1.15, z + 0.18, [60, 54, 60], { tf });
    for (const sd of [-1, 1]) tube(tf([1.5, 2.2 + nod, sd * 0.3]), tf([1.6, 2.6 + nod, sd * 0.55]), 0.07 * s, 3, [240, 230, 200]);
  }
  function pat(c, s, seed = 1) { sphere(c, s, 1, [110, 80, 60], { sy: 0.32, jitter: 0.3, seed, soft: true }); }
  function trout(c, s, t, o = {}) {
    const tf = tfm(c, s, o.ry || 0, o.rz || 0);
    sphere(tf([0, 0, 0]), 0.8 * s, 1, (q, d) => (Math.abs(d[1]) < 0.18 ? [240, 130, 150] : d[1] > 0 ? [100, 140, 110] : [220, 226, 220]), { sx: 2.3, sy: 0.85, sz: 0.6, soft: true });
    const w = Math.sin(t * 10) * 0.4;
    tri(tf([-1.6, 0, 0]), tf([-2.6, 0.7, w]), tf([-2.6, -0.7, w]), [110, 140, 120], { twoSided: true });
  }
  function frog(c, s) { sphere(c, 0.9 * s, 1, [100, 190, 90], { sx: 1.2, sy: 0.7, soft: true }); for (const sd of [-1, 1]) sphere(add3(c, [0.5 * s, 0.6 * s, sd * 0.45 * s]), 0.3 * s, 0, [240, 240, 200], { soft: true }); }
  function lizard(c, s, t) { sphere(c, 0.6 * s, 1, [90, 170, 160], { sx: 2.0, sy: 0.5, soft: true }); sphere(add3(c, [1.3 * s, 0.1 * s, 0]), 0.38 * s, 0, [90, 170, 160], { soft: true }); tube(add3(c, [-1, 0, 0].map((v) => v * s)), add3(c, [-3 * s, 0, Math.sin(t * 3) * 0.6 * s]), 0.28 * s, 4, [80, 150, 140], { r1: 0.04 * s }); }
  function spider(c, s, t) { sphere(c, 0.7 * s, 1, [60, 50, 70], { soft: true }); sphere(add3(c, [0.8 * s, 0, 0]), 0.42 * s, 0, [60, 50, 70], { soft: true }); for (const sd of [-1, 1]) for (let k = 0; k < 4; k++) { const x = (k - 1.5) * 0.35 * s; tube(add3(c, [x, 0, sd * 0.3 * s]), add3(c, [x * 1.8, 0.6 * s, sd * 1.2 * s]), 0.06 * s, 3, [60, 50, 70]); tube(add3(c, [x * 1.8, 0.6 * s, sd * 1.2 * s]), add3(c, [x * 2.3, -0.7 * s, sd * 1.7 * s]), 0.05 * s, 3, [60, 50, 70]); } }
  function bat(c, s, t) { const f = Math.sin(t * 12); sphere(c, 0.6 * s, 1, [70, 60, 80], { soft: true, sy: 1.2 }); for (const sd of [-1, 1]) { tri(add3(c, [0, 0.3 * s, 0]), add3(c, [sd * 2.2 * s, (0.6 + f * 0.6) * s, 0.2 * s]), add3(c, [sd * 1.6 * s, -0.5 * s, 0]), [90, 76, 100], { twoSided: true }); cone(add3(c, [sd * 0.3 * s, 0.6 * s, 0]), 0.15 * s, 0.45 * s, 3, [70, 60, 80]); } }
  function wheat(base, s, t, col = [240, 196, 90], seed = 0) { const sw = Math.sin(t * 2.2 + base[0] * 0.3 + seed) * 0.35; const top = add3(base, [sw * s, 3 * s, 0]); tube(base, top, 0.06 * s, 3, [200, 180, 90]); sphere(add3(top, [sw * 0.2 * s, 0.4 * s, 0]), 0.3 * s, 0, col, { sy: 2.2, soft: true }); }
  function teddy(c, s) { const B = [176, 120, 80]; sphere(c, 1.3 * s, 1, B, { soft: true, sy: 1.1 }); sphere(add3(c, [0, 2 * s, 0]), 0.95 * s, 1, B, { soft: true }); for (const sd of [-1, 1]) { sphere(add3(c, [sd * 0.75 * s, 2.8 * s, 0]), 0.38 * s, 0, B, { soft: true }); sphere(add3(c, [sd * 1.2 * s, 0.3 * s, -0.2 * s]), 0.5 * s, 0, B, { soft: true }); sphere(add3(c, [sd * 0.7 * s, -1.1 * s, -0.3 * s]), 0.55 * s, 0, B, { soft: true }); } sphere(add3(c, [0, 1.8 * s, -0.8 * s]), 0.4 * s, 0, [230, 200, 160], { soft: true }); }
  // a seeded swarm of insects drifting around a centre (stable per seed)
  function swarm(cen, rad, n, t, seed, kinds = ['bee', 'fly', 'beetle', 'butterfly'], s = 0.6, k = 1) {
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const a = r() * 6.283, b = r.range(-1, 1), rr = rad * Math.cbrt(r()), sp = r.range(0.3, 0.9), kind = r.pick(kinds), ph0 = r() * 6;
      const p = [cen[0] + Math.cos(a + t * sp * 0.4) * rr, cen[1] + b * rad * 0.5 + Math.sin(t * sp + ph0) * 0.6, cen[2] + Math.sin(a + t * sp * 0.4) * rr];
      const kk = typeof k === 'function' ? k(i, p) : k; if (kk <= 0.02) continue;
      bug(p, s * kk * r.range(0.8, 1.2), kind === 'beetle' ? 'beetle' : kind, t, { ry: -(a + t * sp * 0.4) - 1.57, ph: ph0, fly: true, legs: false, lite: true, col: H.mix([60, 160, 120], [220, 90, 80], r()) });
    }
  }

  // ---------- shared pieces ----------
  const FLOWERS = (() => { const r = H.rng(404), out = []; for (let i = 0; i < 46; i++) { const a = r() * 6.283, d = 3 + Math.sqrt(r()) * 13; const x = P0[0] + Math.cos(a) * d, z = P0[2] + Math.sin(a) * d; out.push({ x, z, s: r.range(0.7, 1.1), col: r.pick([[255, 120, 150], [255, 200, 80], [170, 130, 255], [255, 255, 255], [255, 140, 90]]), ry: r() * 6 }); } return out; })();
  const gy = (x, z) => valleyH(x, z);
  function meadow(t, o = {}) {
    for (const f of FLOWERS) flower([f.x, gy(f.x, f.z) - 0.1, f.z], f.s * (o.fs || 1), o.fade ? H.mix(f.col, [150, 140, 150], o.fade) : f.col, 1 - (o.fade || 0) * 0.6, { ry: f.ry, droop: o.fade || 0 });
  }
  function strikeTag(ctx, x, y, text, k, s, o = {}) {
    lpTag(ctx, x, y, text, Object.assign({ k, font: SG(o.px || 40), h: Math.round((o.px || 40) * 1.7), bg: '#2a1f4f', col: '#fff' }, o));
    if (s > 0 && k > 0.5) { ctx.save(); ctx.font = SG(o.px || 40); const w = ctx.measureText(text).width + 40; ctx.fillStyle = '#ff7060'; ctx.beginPath(); ctx.moveTo(x - w / 2, y + 4); ctx.lineTo(x - w / 2 + w * s, y - 8); ctx.lineTo(x - w / 2 + w * s, y + 4); ctx.lineTo(x - w / 2, y + 14); ctx.closePath(); ctx.fill(); ctx.restore(); }
  }
  // a faceted coral "X" (wrong / gone)
  function crossX(ctx, x, y, r, k) { if (k <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.rotate(0.785); for (let i = 0; i < 2; i++) { ctx.rotate(1.5708 * i); ctx.fillStyle = '#ff7060'; ctx.fillRect(-r, -r * 0.16, r * 2, r * 0.16); ctx.fillStyle = '#d24a48'; ctx.fillRect(-r, 0, r * 2, r * 0.16); } ctx.restore(); }

  // ---------------- INTRO ----------------
  scene(0, 1, 'none', (c, t) => {
    const C = flight([[0, P0[0] - 14, 9, P0[2] - 16, P0[0], 6, P0[2] + 2], [PE(1) + 0.5, P0[0] - 8, 7, P0[2] - 12, P0[0], 6, P0[2] + 2]], t);
    const tv = LAND(0, 'vanishes');
    valley(c, C, () => { meadow(t); swarm([P0[0], 7, P0[2]], 9, 26, t, 11, ['bee', 'butterfly', 'bee', 'fly'], 0.55, (i) => 1 - E.in(ph(t, tv + i * 0.025, tv + i * 0.025 + 0.2))); });
    bigTag(c, 640, 150, 'EVERY INSECT', tagT(t, LAND(0, 'every')), { px: 84, h: 120 });
    coralTag(c, 640, 268, 'GONE', tagT(t, tv), { font: SG(64), h: 100 });
    darkTag(c, 640, 600, 'what would you lose first?', tagT(t, LAND(1, 'lose')), { font: SG(40), h: 70 });
  });
  fx(LAND(0, 'every'), 'facet', { f: 520 }); fx(LAND(0, 'vanishes'), 'poof', { d: 0.9 }); fx(LAND(0, 'vanishes') + 0.1, 'big'); fx(LAND(1, 'lose'), 'facet', { f: 470 });

  scene(2, 3, 'cut', (c, t) => {
    const s0 = PS(2);
    const C = flight([[s0, P0[0] - 30, 16, P0[2] - 30, P0[0], 4, P0[2] + 20], [PE(3) + 1, P0[0] - 22, 12, P0[2] - 24, P0[0], 4, P0[2] + 20]], t);
    valley(c, C, () => meadow(t), { night: true, seed: 3 });
    coralTag(c, 640, 150, 'SILENCE', tagT(t, LAND(2, 'quiet')), { font: SG(70), h: 110 });
    const words = [['no buzzing', 'buzzing', 340], ['no chirping', 'chirping', 640], ['no crickets', 'crickets', 940]];
    words.forEach(([txt, w, x]) => { const t0 = LAND(3, w); strikeTag(c, x, 560, txt, tagT(t, t0), up(t, t0 + 0.3, 0.3)); });
  });
  fx(LAND(2, 'quiet'), 'glass', { n: ['D4', 'A4'] }); ['buzzing', 'chirping', 'crickets'].forEach((w) => { fx(LAND(3, w), 'facet', { f: 500 }); fx(LAND(3, w) + 0.3, 'ribbon'); });

  scene(4, 5, 'build', (c, t) => {
    const s0 = PE(3) + 0.03;
    const C = flight([[s0, 0, 46, -30, 0, 30, 60], [s0 + 3, -4, 22, 0, -2, 14, 60], [PE(5) + 1, -6, 18, 14, -2, 14, 80]], t);
    valley(c, C, null, { clouds: t - s0 });
    bigTag(c, 640, 250, 'SOONER', tagT(t, LAND(4, 'sooner')), { px: 104, h: 144 });
    coralTag(c, 640, 360, 'than you think', tagT(t, LAND(4, 'think')), { font: SG(44), h: 76 });
    ['1', '2', '3', '4', '5'].forEach((n, i) => lpTag(c, 340 + i * 150, 520, n, { k: tagT(t, LAND(5, 'step') + i * 0.14), font: SG(52), h: 86, bg: i % 2 ? '#2a1f4f' : '#ff7060', col: '#fff' }));
  });
  fx(PE(3) + 0.03, 'build'); fx(LAND(4, 'sooner'), 'big'); fx(LAND(4, 'think'), 'facet', { f: 470 }); for (let i = 0; i < 5; i++) fx(LAND(5, 'step') + i * 0.14, 'facet', { f: 420 + i * 60, minor: true });

  // ---------------- 1 · HOW MANY BUGS? ----------------
  scene(6, 8, 'facet', (c, t) => {
    studio(c, 5);
    const C = look([0, 2, H.lerp(-34, -27, io(t, PS(6), PE(8)))], [0, 0, 0], 760);
    const n = Math.round(30 + 150 * E.out(ph(t, LAND(7, 'ten'), LAND(7, 'insects'))));
    swarm([0, 0, 0], 11, n, t * 0.6 + 2, 21, ['bee', 'fly', 'beetle', 'bee', 'beetle', 'butterfly'], 1.05);
    pnt(c, C, { fogN: 30, fogF: 90, fogC: [77, 63, 132] });
    const d = Math.floor(19 * E.out(ph(t, LAND(7, 'ten'), LAND(7, 'quintillion') + 0.3)));
    if (t > LAND(7, 'ten')) { const str = ('1' + '0'.repeat(d)).replace(/\B(?=(\d{3})+(?!\d))/g, ','); bigTag(c, 640, 90, str, 1, { px: d > 15 ? 50 : 64, h: 96 }); }
    coralTag(c, 640, 610, '10 QUINTILLION', tagT(t, LAND(7, 'quintillion'), LAND(8, 'alive') - 0.2), { font: SG(76), h: 116 });
    darkTag(c, 640, 610, 'alive right now', tagT(t, LAND(8, 'alive')), { font: SG(52), h: 88 });
  });
  fx(LAND(7, 'ten'), 'count', { d: P(7, 'quintillion') + 0.3 - P(7, 'ten'), f: 3200 }); fx(LAND(7, 'quintillion'), 'big'); fx(LAND(7, 'ten'), 'swarm', { d: PE(8) - P(7, 'ten') }); fx(LAND(8, 'alive'), 'facet', { f: 470 });

  scene(9, 10, 'whip', (c, t) => {
    studio(c, 9, '#3d2f6e', '#ff9a7a');
    const C = look([H.lerp(-6, 0, io(t, PS(9), PE(10))), 6, -26], [0, 3, 0], 760);
    disc([0, 0, 0], 6, [240, 210, 220]);
    person([0, 0, 0], 2.0, [255, 112, 96], { arms: up(t, LAND(9, 'billion'), 0.5), ry: 0.4 });
    const n = Math.round(20 + 90 * E.out(ph(t, LAND(9, 'billion'), LAND(10, 'person'))));
    swarm([0, 4.5, 0], 8, n, t * 0.7, 33, ['bee', 'fly', 'beetle'], 0.6);
    pnt(c, C, { fogN: 30, fogF: 90, fogC: [61, 47, 110] });
    bigTag(c, 640, 120, '1,000,000,000+', tagT(t, LAND(9, 'billion')), { px: 80, h: 116 });
    coralTag(c, 640, 620, 'for every single person', tagT(t, LAND(10, 'every')), { font: SG(44), h: 76 });
  });
  fx(LAND(9, 'billion'), 'big'); fx(LAND(9, 'billion'), 'swarm', { d: PE(10) - P(9, 'billion') }); fx(LAND(10, 'every'), 'facet', { f: 520 });

  const BEETLE_COLS = [[60, 160, 120], [220, 90, 80], [80, 110, 220], [240, 190, 60], [150, 90, 200], [60, 60, 70], [230, 120, 40], [90, 200, 200]];
  scene(11, 12, 'cut', (c, t) => {
    studio(c, 12, '#4d3f84', '#e08a90');
    const C = look([0, 4, -24 + 2 * io(t, PS(11), PE(12))], [0, 2.2, 6], 760);
    for (let row = 0; row < 3; row++) { const z = row * 5, y = row * 1.8; box(-13, y - 0.5, z - 1.6, 13, y, z + 1.6, [236, 214, 220], { hard: true });
      for (let i = 0; i < 6; i++) { const x = -10.5 + i * 4.2; const named = row === 0 || (row === 1 && i < 3);
        const t0 = named ? LAND(11, 'million') + (row * 6 + i) * 0.04 : LAND(12, 'millions') + ((row - 1) * 6 + i) * 0.05;
        const k = bk(t, t0); if (k <= 0.02) continue;
        bug([x, y + 0.75, z], 1.0 * k, 'beetle', t, { ry: -1.2, col: named ? BEETLE_COLS[(row * 6 + i) % 8] : [150, 146, 170], legs: true }); } }
    pnt(c, C, { fogN: 30, fogF: 120, fogC: [100, 70, 130] });
    bigTag(c, 380, 110, '1,000,000+ named', tagT(t, LAND(11, 'million')), { px: 54, h: 84 });
    coralTag(c, 900, 110, 'millions unnamed', tagT(t, LAND(12, 'millions')), { font: SG(48), h: 80 });
  });
  fx(LAND(11, 'million'), 'stampg'); for (let i = 0; i < 9; i++) fx(LAND(11, 'million') + i * 0.04, 'pop'); fx(LAND(12, 'millions'), 'facet', { f: 600 }); for (let i = 0; i < 12; i++) fx(LAND(12, 'millions') + i * 0.05, 'pop');

  scene(13, 14, 'build', (c, t) => {
    const s0 = PE(12) + 0.03;
    const C = flight([[s0, 10, 40, 10, 10, -4, 60], [PE(14) + 1, 10, 30, 22, 10, -6, 60]], t);
    const td = LAND(13, 'disappear');
    valley(c, C, () => swarm([10, 6, 60], 16, 50, t, 44, ['bee', 'fly', 'beetle', 'butterfly'], 0.9, (i) => 1 - E.in(ph(t, td + i * 0.012, td + i * 0.012 + 0.25))), { kind: 'pit', buildD: 120 });
    bigTag(c, 640, 600, 'A GIGANTIC HOLE', tagT(t, LAND(14, 'gigantic')), { px: 72, h: 106, bg: '#ff7060', col: '#fff' });
  });
  fx(PE(12) + 0.03, 'build'); fx(LAND(13, 'disappear'), 'poof', { d: 0.8 }); fx(LAND(14, 'gigantic'), 'boom');

  // ---------------- 2 · THE FLOWERS ----------------
  const ROW10 = Array.from({ length: 10 }, (_, i) => [P0[0] - 9 + i * 2, P0[2] + (i % 2) * 1.2]);
  scene(15, 17, 'facet', (c, t) => {
    const C = flight([[PS(15), P0[0], 8, P0[2] - 18, P0[0], 5, P0[2]], [PE(17) + 0.5, P0[0], 7, P0[2] - 15, P0[0], 5, P0[2]]], t);
    const t9 = LAND(16, 'nine');
    valley(c, C, () => { ROW10.forEach(([x, z], i) => { const k = bk(t, PS(15) + 0.2 + i * 0.06); const hi = i < 9 && t > t9 + i * 0.05; flower([x, gy(x, z) - 0.1, z], 1.05 * k, hi ? [255, 112, 96] : [200, 196, 220], 1, { ry: i }); });
      const tp = LAND(17, 'pollen'); if (t > tp) { const r = H.rng(5); for (let i = 0; i < 40; i++) { const a = r() * 6.28, u = (t - tp) * r.range(0.4, 1.2) % 3; sphere([P0[0] - 9 + r() * 18 + Math.cos(a) * u, 6.2 + u * 0.8, P0[2] + Math.sin(a) * u], 0.12, 0, [255, 214, 90], { emissive: true }); } } });
    bigTag(c, 640, 130, '9 in 10', tagT(t, t9), { px: 96, h: 136 });
    darkTag(c, 640, 240, 'flowering plants', tagT(t, LAND(16, 'flowering')), { font: SG(40), h: 70 });
    coralTag(c, 640, 620, 'need animals to carry pollen', tagT(t, LAND(17, 'pollen')), { font: SG(40), h: 70 });
  });
  for (let i = 0; i < 10; i++) fx(PS(15) + 0.2 + i * 0.06, 'pop'); fx(LAND(16, 'nine'), 'big'); for (let i = 0; i < 9; i++) fx(LAND(16, 'nine') + i * 0.05, 'facet', { f: 400 + i * 40, minor: true }); fx(LAND(17, 'pollen'), 'sparkle');

  const LINE = [['bee', 'bees'], ['fly', 'flies'], ['beetle', 'beetles'], ['moth', 'moths'], ['butterfly', 'butterflies']];
  scene(18, 19, 'cut', (c, t) => {
    studio(c, 18, '#3d2f6e', '#ffb08a');
    const C = look([0, 7, -30], [0, 1.5, 0], 760);
    LINE.forEach(([kind, w], i) => { const x = -12 + i * 6, t0 = LAND(19, w), k = bk(t, t0, 0.4); disc([x, 0, 0], 2.4, [240, 214, 222]); if (k > 0.02) bug([x, 1.8 + Math.sin(t * 2 + i) * 0.3, 0], 1.25 * k, kind, t, { ry: -0.9, legs: kind === 'beetle', fly: kind !== 'beetle' }); });
    pnt(c, C, { fogN: 30, fogF: 90, fogC: [61, 47, 110] });
    bigTag(c, 640, 120, 'MOSTLY INSECTS', tagT(t, LAND(18, 'insects')), { px: 70, h: 104 });
    LINE.forEach(([kind, w], i) => { const p = C.proj([-12 + i * 6, -1.2, 0]); darkTag(c, p[0], p[1] + 70, w, tagT(t, LAND(19, w)), { font: SG(32), h: 58 }); });
  });
  fx(LAND(18, 'insects'), 'big'); LINE.forEach(([, w], i) => fx(LAND(19, w), 'facet', { f: 440 + i * 70 })); fx(PS(19), 'buzz', { d: PE(19) - PS(19) + 0.3 });

  scene(20, 21, 'whip', (c, t) => {
    const A = [P0[0] - 5, P0[2]], B = [P0[0] + 5, P0[2] + 1];
    const C = look([P0[0], 9, P0[2] - 15], [P0[0], 6, P0[2]], 760);
    const t0 = LAND(20, 'pollen'), t1 = LAND(20, 'flower', 2) + 0.3, u = io(t, t0, t1);
    const fr = up(t, LAND(21, 'fruit'), 0.6);
    const bp = [H.lerp(A[0], B[0], u), gy(P0[0], P0[2]) + 3.6 + Math.sin(u * Math.PI) * 3 + Math.sin(t * 8) * 0.15, H.lerp(A[1], B[1], u)];
    valley(c, C, () => {
      flower([A[0], gy(A[0], A[1]) - 0.1, A[1]], 1.5, [255, 140, 170], 1, { ry: 0.5 });
      flower([B[0], gy(B[0], B[1]) - 0.1, B[1]], 1.5, [255, 140, 170], 1 - fr, { ry: 1.5, fruit: fr > 0.05 ? fr : 0, fruitCol: [230, 60, 70] });
      bug(bp, 0.55, 'bee', t, { ry: -0.15 + Math.cos(u * Math.PI) * 0.3 });
      if (u > 0 && u < 1) for (let i = 0; i < 6; i++) sphere(add3(bp, [-0.6 - i * 0.35, -0.4 + Math.sin(i + t * 5) * 0.15, 0]), 0.1, 0, [255, 214, 90], { emissive: true });
    });
    const pa = C.proj([A[0], 7.5, A[1]]), pb = C.proj([B[0], 7.5, B[1]]);
    lpArrow(c, [pa[0], pa[1] - 40], [(pa[0] + pb[0]) / 2, pa[1] - 200], [pb[0], pb[1] - 40], up(t, t0, t1 - t0), [255, 200, 110], 12);
    darkTag(c, 640, 110, 'POLLEN', tagT(t, t0), { font: SG(56), h: 92 });
    coralTag(c, pb[0] + 40, 600, 'seeds + fruit', tagT(t, LAND(21, 'seeds')), { font: SG(44), h: 76 });
  });
  fx(LAND(20, 'pollen'), 'buzz', { d: 1.4 }); fx(LAND(20, 'pollen'), 'ribbon'); fx(LAND(21, 'seeds'), 'facet', { f: 520 }); fx(LAND(21, 'fruit'), 'grow', { d: 0.6 }); fx(LAND(21, 'fruit') + 0.6, 'right');

  scene(22, 23, 'facet', (c, t) => {
    const C = flight([[PS(22), P0[0] + 12, 10, P0[2] - 14, P0[0], 5, P0[2] + 2], [PE(23) + 0.5, P0[0] + 6, 8, P0[2] - 14, P0[0], 5, P0[2] + 2]], t);
    const tn = LAND(23, 'never');
    valley(c, C, () => meadow(t, { fade: 0.55 * io(t, tn, tn + 1.2) }));
    darkTag(c, 640, 130, 'still bloom', tagT(t, LAND(22, 'bloom')), { font: SG(52), h: 88 });
    coralTag(c, 640, 240, 'no fruit', tagT(t, tn), { font: SG(64), h: 100 });
    crossX(c, 640, 470, 90, bk(t, tn + 0.15));
  });
  fx(LAND(22, 'bloom'), 'glass', { n: ['A4', 'E5'] }); fx(LAND(23, 'never'), 'wrong');

  const CROPS = [[1, '3 of 4'], [1], [1], [0]];
  scene(24, 25, 'cut', (c, t) => {
    const C = flight([[PS(24), P1[0] + 4, 13, P1[2] - 32, P1[0], 10, P1[2]], [PE(25) + 0.5, P1[0] - 2, 12, P1[2] - 28, P1[0], 10, P1[2]]], t);
    const t0 = LAND(24, 'three');
    valley(c, C, () => { for (let i = 0; i < 4; i++) { const x = P1[0] - 9 + i * 6, h = (i < 3 ? 9 : 4) * E.out(ph(t, t0 + i * 0.12, t0 + i * 0.12 + 0.6)); if (h > 0.05) prism(x, P1[1], P1[2], 2.0, h, 6, i < 3 ? [255, 112, 96] : [170, 166, 190], 0.3, { hard: true }); } });
    const n = Math.round(75 * E.out(ph(t, t0, t0 + 0.9)));
    bigTag(c, 640, 120, n + '%', tagT(t, t0), { px: 110, h: 150 });
    darkTag(c, 640, 620, 'of main food crops get pollinator help', tagT(t, LAND(25, 'help')), { font: SG(36), h: 64 });
  });
  fx(LAND(24, 'three'), 'count', { d: 0.9, f: 3000 }); for (let i = 0; i < 4; i++) fx(LAND(24, 'three') + i * 0.12, 'pillar', { minor: i > 0 }); fx(LAND(25, 'help'), 'facet', { f: 470 });

  const FRUITS = [['apple', 'apples'], ['almond', 'almonds'], ['blueberry', 'blueberries'], ['cherry', 'cherries'], ['melon', 'melons']];
  scene(26, 27, 'whip', (c, t) => {
    studio(c, 26, '#4d3f84', '#ffb08a');
    const C = look([0, 10, -24], [0, 0, 0], 760);
    box(-15, -1.2, -5, 15, 0, 5, [200, 150, 120], { hard: true });
    FRUITS.forEach(([k, w], i) => { const x = -11 + i * 5.5, kk = bk(t, LAND(26, w), 0.4); plate([x, 0, 0], 2.2); if (kk > 0.02) fruit(k, [x, 1.0, 0], 1.0 * kk); });
    pnt(c, C, { fogN: 30, fogF: 90, fogC: [77, 63, 132] });
    FRUITS.forEach(([k, w], i) => { const p = C.proj([-11 + i * 5.5, 0, -3]); darkTag(c, p[0], p[1] + 60, w, tagT(t, LAND(26, w)), { font: SG(30), h: 54 }); });
    const tr = LAND(27, 'rare');
    FRUITS.forEach((f, i) => { const p = C.proj([-11 + i * 5.5, 3, 0]); coralTag(c, p[0], p[1] - 70 - 20 * Math.sin(t * 3 + i), '$$$', tagT(t, LAND(27, 'expensive') + i * 0.06), { font: SG(40), h: 70 }); });
    bigTag(c, 640, 110, 'RARE', tagT(t, tr), { px: 80, h: 116 });
  });
  FRUITS.forEach(([, w]) => fx(LAND(26, w), 'pop')); fx(LAND(27, 'rare'), 'big'); for (let i = 0; i < 5; i++) fx(LAND(27, 'expensive') + i * 0.06, 'coin');

  scene(28, 30, 'facet', (c, t) => {
    const s0 = PS(28), tm = LAND(29, 'midges');
    const zoom = io(t, tm - 0.3, tm + 1.2);
    const tc = [P0[0], gy(P0[0], P0[2]), P0[2]];
    const mp = [tc[0] - 1.1 + Math.sin(t * 3) * 0.3, tc[1] + 3.4 + Math.sin(t * 5) * 0.15, tc[2] - 1.0];
    const C = look(lerp3([tc[0] - 6, tc[1] + 7, tc[2] - 16], add3(mp, [-1.4, 0.6, -3.2]), zoom), lerp3(add3(tc, [0, 4, 0]), mp, zoom), 760);
    valley(c, C, () => {
      prism(tc[0], tc[1], tc[2], 0.9, 9, 6, [120, 84, 70], 0.3, { r2: 0.6, hard: true });
      sphere(add3(tc, [0, 10, 0]), 4.2, 1, [60, 130, 90], { jitter: 0.4, seed: 9, soft: true, sy: 0.7 });
      [[0.9, 2.4, -0.3, 0.2], [-0.8, 5.0, -0.5, 2.6], [0.7, 6.5, 0.4, 4], [-0.6, 3.6, 0.7, 5]].forEach(([dx, dy, dz, ry]) => sphere(add3(tc, [dx * 1.4, dy, dz]), 0.7, 1, (q, d) => (d[0] > 0.3 ? [240, 160, 60] : [220, 120, 50]), { sx: 0.75, sy: 1.6, ry, soft: true }));
      for (let i = 0; i < 6; i++) { const a = i * 1.05; flower([tc[0] - 1.0 + Math.cos(a) * 0.5, tc[1] + 3.0, tc[2] - 0.8 + Math.sin(a) * 0.5], 0.13, [255, 236, 236], 1, { ry: a }); }
      bug(mp, 0.12, 'midge', t, { ry: -0.6 });
    });
    bigTag(c, 640, 110, 'CHOCOLATE?', tagT(t, LAND(28, 'chocolate'), LAND(29, 'cacao') - 0.2), { px: 80, h: 116 });
    darkTag(c, 640, 110, 'cacao flowers', tagT(t, LAND(29, 'cacao')), { font: SG(44), h: 76 });
    coralTag(c, 920, 330, 'MIDGE', tagT(t, tm), { font: SG(60), h: 96 });
    darkTag(c, 920, 450, 'pinhead-sized', tagT(t, LAND(30, 'pinhead')), { font: SG(40), h: 70 });
  });
  fx(LAND(28, 'chocolate'), 'big'); fx(LAND(29, 'cacao'), 'facet', { f: 470 }); fx(LAND(29, 'midges') - 0.3, 'zoom', { d: 1.4 }); fx(LAND(29, 'midges'), 'buzz', { d: PE(30) - P(29, 'midges'), hi: true }); fx(LAND(30, 'pinhead'), 'facet', { f: 620 });

  scene(31, 31, 'cut', (c, t) => {
    studio(c, 31, '#3d2f6e', '#c06a93');
    const C = look([0, 7, -20], [0, 0, 0], 760);
    const tb = LAND(31, 'almost'), u = E.out(ph(t, tb, tb + 1.0));
    disc([0, 0, 0], 7, [236, 214, 220]);
    const rr = H.rng(31);
    for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) { const dir = [rr.range(-1, 1), rr.range(0.4, 1.4), rr.range(-0.6, 0.6)]; const off = scl(dir, u * 9); off[1] -= u * u * 6;
      const x0 = -4.5 + i * 2.25, z0 = -2.2 + j * 2.2; box(x0 + off[0], 0.1 + off[1], z0 + off[2], x0 + 2.05 + off[0], 1.0 + off[1], z0 + 2.0 + off[2], [110, 66, 50], { tf: (p) => p }); }
    pnt(c, C, { fogN: 30, fogF: 90, fogC: [61, 47, 110] });
    darkTag(c, 640, 120, 'no midges', tagT(t, LAND(31, 'midges')), { font: SG(52), h: 88 });
    coralTag(c, 640, 600, 'almost no chocolate', tagT(t, tb), { font: SG(56), h: 92 });
  });
  fx(LAND(31, 'midges'), 'facet', { f: 520 }); fx(LAND(31, 'almost'), 'shatter');

  // ---------------- 3 · HUNGRY BIRDS ----------------
  const NEST = [P0[0] + 4.6, 0, P0[2]];
  scene(32, 34, 'build', (c, t) => {
    const s0 = PE(31) + 0.03, tb = [P0[0], gy(P0[0], P0[2]), P0[2]], ny = tb[1] + 3.6;
    const C = flight([[s0, P0[0] - 8, 14, P0[2] - 24, P0[0] + 2, 8, P0[2]], [PS(33) + 0.6, P0[0] + 1, 9, P0[2] - 12, P0[0] + 4.5, 7.4, P0[2]], [PE(34) + 0.5, P0[0] + 2.5, 8.6, P0[2] - 10, P0[0] + 4.6, 7.2, P0[2]]], t);
    const tf = LAND(33, 'feed'), u = io(t, tf - 0.9, tf + 0.3);
    valley(c, C, () => {
      tree(tb, 1.5, [70, 150, 100], { seed: 32 });
      box(tb[0] - 0.2, ny - 0.4, tb[2] - 0.25, tb[0] + 6.0, ny - 0.1, tb[2] + 0.25, [120, 84, 70], { hard: true });
      nest([NEST[0], ny - 0.2, NEST[2]], 0.85);
      for (let i = 0; i < 3; i++) chick([NEST[0] - 0.6 + i * 0.6, ny + 0.75, NEST[2] + (i % 2) * 0.3], 0.75, t, i * 2);
      const bp = lerp3([P0[0] + 9, ny + 4, P0[2] - 3], [NEST[0] + 1.6, ny + 1.2, NEST[2]], u);
      bird(bp, 0.8, t, { ry: Math.PI, fly: u < 1, worm: t < tf + 0.6 });
    });
    darkTag(c, 640, 110, 'SONGBIRDS', tagT(t, LAND(33, 'songbirds')), { font: SG(56), h: 92 });
    coralTag(c, 320, 600, 'chicks eat bugs', tagT(t, LAND(33, 'chicks')), { font: SG(42), h: 72 });
    darkTag(c, 920, 600, 'even seed-eaters', tagT(t, LAND(34, 'seeds')), { font: SG(42), h: 72 });
  });
  fx(PE(31) + 0.03, 'build'); fx(LAND(33, 'songbirds'), 'chirp'); fx(LAND(33, 'feed'), 'chirp', { n: 6 }); fx(LAND(33, 'chicks'), 'facet', { f: 520 }); fx(LAND(34, 'seeds'), 'facet', { f: 470 });

  scene(35, 37, 'facet', (c, t) => {
    studio(c, 35, '#3d2f6e', '#7fc4a8');
    const C = look([H.lerp(4, -2, io(t, PS(35), PE(37))), 9, -30], [0, 2.5, 0], 760);
    box(-16, 5.6, -0.3, -6, 6.0, 0.3, [120, 84, 70], { hard: true });
    bird([-12.5, 6.9, 0], 1.0, t, { ry: 0 }); bird([-9, 6.9, 0], 1.0, t + 1, { ry: Math.PI });
    const n = Math.floor(48 * E.out(ph(t, LAND(36, 'six'), LAND(36, 'caterpillars') + 0.5)));
    for (let i = 0; i < n; i++) { const row = Math.floor(i / 5), col = i % 5; caterpillar([-2 + col * 3.6 + (row % 2) * 1.2, -2.6 + row * 0.75, 2 - row * 0.9], 1.0, t, 0, i); }
    disc([5.5, -3, -3], 11, [236, 214, 220]);
    pnt(c, C, { fogN: 30, fogF: 90, fogC: [61, 47, 110] });
    darkTag(c, 300, 110, 'ONE PAIR', tagT(t, LAND(35, 'pair')), { font: SG(52), h: 88 });
    const v = 9000 * E.out(ph(t, LAND(36, 'six'), LAND(36, 'thousand') + 0.3));
    bigTag(c, 860, 120, t < LAND(36, 'thousand') + 0.3 ? fmt(v) : '6,000–9,000', tagT(t, LAND(36, 'six')), { px: 70, h: 104 });
    coralTag(c, 860, 236, 'caterpillars', tagT(t, LAND(36, 'caterpillars')), { font: SG(44), h: 76 });
    darkTag(c, 640, 640, 'for ONE nest of chicks', tagT(t, LAND(37, 'single')), { font: SG(40), h: 70 });
  });
  fx(LAND(35, 'pair'), 'chirp'); fx(LAND(36, 'six'), 'count', { d: P(36, 'thousand') + 0.3 - P(36, 'six'), f: 2800 }); fx(LAND(36, 'six'), 'squish', { d: 2.2 }); fx(LAND(36, 'caterpillars'), 'big'); fx(LAND(37, 'single'), 'facet', { f: 520 });

  const EATERS = [['bats', bat], ['frogs', frog], ['lizards', lizard], ['spiders', spider]];
  scene(38, 39, 'whip', (c, t) => {
    studio(c, 38, '#2e2a5e', '#9a6aa0');
    const C = look([0, 7, -28], [0, 1.6, 0], 760);
    EATERS.forEach(([w, fn], i) => { const x = -10.5 + i * 7, k = bk(t, LAND(38, w), 0.4); disc([x, 0, 0], 2.8, [236, 214, 222]); if (k > 0.02) { if (fn === bat) bat([x, 2.8, 0], 1.0 * k, t); else if (fn === lizard) lizard([x + 0.6, 0.6, 0], 0.85 * k, t); else fn([x, 0.7, 0], 1.1 * k, t); } });
    pnt(c, C, { fogN: 30, fogF: 90, fogC: [50, 40, 90] });
    EATERS.forEach(([w], i) => { const p = C.proj([-10.5 + i * 7, -1, -2]); darkTag(c, p[0], p[1] + 60, w, tagT(t, LAND(38, w)), { font: SG(34), h: 60 }); });
    bigTag(c, 640, 110, 'NO DINNER', tagT(t, LAND(39, 'dinner')), { px: 76, h: 110, bg: '#ff7060', col: '#fff' });
  });
  EATERS.forEach(([w], i) => fx(LAND(38, w), 'facet', { f: 420 + i * 80 })); fx(LAND(39, 'dinner'), 'wrong');

  scene(40, 41, 'facet', (c, t) => {
    const C = flight([[PS(40), -10, 6, 56, 2, 0, 76], [PE(41) + 0.5, -7, 5, 60, 2, 0, 76]], t);
    const tj = LAND(40, 'trout'), u = t < tj ? -1 : ((t - tj) % 2.3) / 1.5;
    valley(c, C, () => {
      const r = H.rng(40); for (let i = 0; i < 7; i++) { const p = [2 + r.range(-5, 5), WATER + 1.4 + Math.sin(t * 2 + i) * 0.3, 76 + r.range(-4, 6)]; bug(p, 0.45, 'fly', t, { ry: r() * 6, legs: false }); }
      if (u > 0 && u < 1) trout([-1 + u * 6, WATER + Math.sin(u * Math.PI) * 4 - 0.6, 75], 1.0, t, { rz: (0.5 - u) * 1.6 });
    });
    darkTag(c, 640, 110, 'TROUT + fish', tagT(t, tj), { font: SG(52), h: 88 });
    coralTag(c, 640, 600, 'young mayflies', tagT(t, LAND(41, 'mayflies')), { font: SG(44), h: 76 });
  });
  fx(LAND(40, 'trout'), 'splash'); fx(LAND(40, 'trout') + 1.4, 'splash'); fx(LAND(40, 'trout') + 2.3, 'splash'); fx(LAND(40, 'trout') + 3.7, 'splash'); fx(LAND(41, 'mayflies'), 'facet', { f: 520 }); fx(PS(40), 'waves', { d: PE(41) - PS(40) });

  const PYR = [['insects', [255, 200, 110]], ['birds  frogs  fish', [80, 210, 200]], ['foxes  hawks', [150, 124, 240]]];
  scene(42, 43, 'cut', (c, t) => {
    studio(c, 42, '#4d3f84', '#ff9a7a');
    const C = look([0, 6, -28], [0, 3.5, 0], 760);
    const ta = LAND(42, 'take'), tc = LAND(43, 'crumbles'), fall = ph(t, tc, tc + 1.4);
    PYR.forEach(([n, col], i) => { const w = 14 - i * 4.4, y0 = i * 2.6;
      if (i === 0) { const k = 1 - E.in(ph(t, ta, ta + 0.5)); if (k > 0.02) box(-w / 2 * k, y0, -2, w / 2 * k, y0 + 2.4 * k, 2, col, { hard: true }); return; }
      const nb = 4 - i; for (let b = 0; b < nb; b++) { const bw = w / nb, x0 = -w / 2 + b * bw, r = H.rng(i * 10 + b), dy = -(y0) * E.in(fall), sp = r.range(-1, 1) * 3 * fall, rot = r.range(-0.6, 0.6) * fall;
        const cx = x0 + bw / 2 + sp, cy = y0 + 1.2 + dy; box(-bw / 2 + 0.1, -1.2, -2, bw / 2 - 0.1, 1.2, 2, col, { tf: (p) => add3([cx, cy, 0], rotZ(p, rot)), hard: true }); } });
    pnt(c, C, { fogN: 30, fogF: 90, fogC: [77, 63, 132] });
    PYR.forEach(([n], i) => { const p = C.proj([0, i * 2.6 + 1.2, -2.2]); const k = i === 0 ? 1 - ph(t, ta, ta + 0.3) : 1 - ph(t, tc, tc + 0.3); if (k > 0.02) lpTag(c, p[0], p[1], n, { k, font: SG(30), h: 52, bg: '#2a1f4f', col: '#fff' }); });
    coralTag(c, 640, 110, 'THE FOOD CHAIN', tagT(t, LAND(43, 'food')), { font: SG(60), h: 96 });
  });
  fx(LAND(42, 'take'), 'poof', { d: 0.5 }); fx(LAND(43, 'food'), 'facet', { f: 500 }); fx(LAND(43, 'crumbles'), 'rumble', { d: 1.4 }); fx(LAND(43, 'crumbles') + 1.0, 'boom', { g: 0.7 });

  // ---------------- 4 · THE CLEANUP CREW ----------------
  scene(44, 45, 'facet', (c, t) => {
    const g0 = [P0[0], gy(P0[0], P0[2]), P0[2]];
    const C = flight([[PS(44), g0[0] - 6, g0[1] + 4, g0[2] - 9, g0[0], g0[1] + 0.6, g0[2]], [PE(45) + 0.5, g0[0] - 3, g0[1] + 3, g0[2] - 8, g0[0], g0[1] + 0.6, g0[2]]], t);
    valley(c, C, () => {
      const r = H.rng(44); for (let i = 0; i < 40; i++) { const x = g0[0] + r.range(-7, 7), z = g0[2] + r.range(-3, 8), a = r() * 6; tri([x, g0[1] + 0.05, z], [x + Math.cos(a) * 0.9, g0[1] + 0.12, z + Math.sin(a) * 0.9], [x + Math.cos(a + 0.6) * 0.5, g0[1] + 0.05, z + Math.sin(a + 0.6) * 0.5], r.pick([[200, 120, 60], [230, 170, 70], [170, 90, 60]]), { twoSided: true, hard: true }); }
      for (let i = 0; i < 4; i++) { const ph0 = i * 1.7, x = g0[0] - 4 + i * 2.4 + ((t * 0.6 + ph0) % 3), z = g0[2] + (i % 2) * 1.5; bug([x, g0[1] + 0.35, z], 0.45, 'beetle', t, { ry: 0, walk: 1, col: BEETLE_COLS[i] }); }
      prism(g0[0] + 3, g0[1], g0[2] + 3, 0.6, 5, 7, [120, 84, 70], 0, { hard: true, tf: (p) => add3([g0[0] + 3, g0[1] + 0.6, g0[2] + 3], rotZ(sub(p, [g0[0] + 3, g0[1], g0[2] + 3]), 1.5708)) });
    });
    darkTag(c, 640, 110, 'the gross part', tagT(t, LAND(44, 'gross')), { font: SG(48), h: 82 });
    bigTag(c, 640, 600, 'CLEANUP CREW', tagT(t, LAND(45, 'cleanup')), { px: 76, h: 110, bg: '#ff7060', col: '#fff' });
  });
  fx(LAND(44, 'gross'), 'squish', { d: 0.6 }); fx(LAND(45, 'cleanup'), 'big'); fx(PS(44), 'scuttle', { d: PE(45) - PS(44) });

  const JOBS = [['dead leaves', 46, 'leaves'], ['dead animals', 47, 'animals'], ['poop', 48, 'poop']];
  scene(46, 48, 'cut', (c, t) => {
    studio(c, 46, '#3d2f6e', '#c08a6a');
    const C = look([0, 8, -26], [0, 1.2, 0], 760);
    disc([0, 0, 0], 14, [214, 180, 150]);
    bug([-11, 0.6, -3], 0.8, 'beetle', t, { ry: 0, walk: 1, col: [60, 160, 120] }); bug([-10, 0.5, -4.5], 0.5, 'fly', t, { ry: 0.3, legs: false });
    const k0 = bk(t, LAND(46, 'leaves'), 0.4), k1 = bk(t, LAND(47, 'animals'), 0.4), k2 = bk(t, LAND(48, 'poop'), 0.4);
    if (k0 > 0.02) { const r = H.rng(46); for (let i = 0; i < 14; i++) { const x = -7 + r.range(-2, 2), z = r.range(-2, 2), a = r() * 6, y = 0.1 + i * 0.06; tri([x, y, z], [x + Math.cos(a) * 1.6 * k0, y + 0.1, z + Math.sin(a) * 1.6 * k0], [x + Math.cos(a + 0.5) * 0.9 * k0, y, z + Math.sin(a + 0.5) * 0.9 * k0], r.pick([[220, 120, 60], [240, 180, 70], [180, 90, 60]]), { twoSided: true, hard: true }); } }
    if (k1 > 0.02) { tube([-1.6 * k1, 0.4, 0], [1.6 * k1, 0.4, 0.4], 0.28 * k1, 5, [244, 236, 220]); for (const sx of [-1, 1]) for (const dz of [-0.3, 0.3]) sphere([sx * 1.75 * k1, 0.4, (sx > 0 ? 0.4 : 0) + dz], 0.36 * k1, 0, [244, 236, 220], { soft: true }); }
    if (k2 > 0.02) { for (let i = 0; i < 3; i++) sphere([7, 0.35 + i * 0.55 * k2, 0], (1.3 - i * 0.35) * k2, 1, [120, 84, 60], { sy: 0.55, soft: true, seed: i, jitter: 0.2 }); swarm([7, 3.2, 0], 1.6, 5, t, 48, ['fly'], 0.3, k2); }
    pnt(c, C, { fogN: 30, fogF: 90, fogC: [61, 47, 110] });
    JOBS.forEach(([txt, i, w], j) => { darkTag(c, 330 + j * 310, 600, txt, tagT(t, LAND(i, w)), { font: SG(36), h: 64 }); });
    coralTag(c, 640, 110, 'beetles + fly larvae', tagT(t, LAND(46, 'beetles')), { font: SG(46), h: 78 });
  });
  fx(LAND(46, 'beetles'), 'facet', { f: 470 }); fx(LAND(46, 'leaves'), 'rustle'); fx(LAND(47, 'animals'), 'facet', { f: 360 }); fx(LAND(48, 'poop'), 'squish', { d: 0.4 }); fx(LAND(48, 'poop') + 0.1, 'pop', { g: 1.4 });

  const COWS = [[P0[0] - 5, P0[2] + 2, 0.4], [P0[0] + 3, P0[2] - 1, 2.6], [P0[0] + 8, P0[2] + 6, -0.8]];
  const PATS = (() => { const r = H.rng(52), out = []; for (let i = 0; i < 70; i++) { const x = P0[0] + r.range(-24, 24), z = P0[2] + r.range(-10, 30); out.push([x, z, r.range(0.6, 1.0), i, r()]); } return out; })();
  scene(49, 51, 'whip', (c, t) => {
    const C = flight([[PS(49), P0[0] - 22, 22, P0[2] - 30, P0[0], 4, P0[2] + 6], [PS(51), P0[0] - 10, 9, P0[2] - 17, P0[0], 3.5, P0[2] + 2], [PE(51) + 0.5, P0[0] - 6, 7, P0[2] - 13, P0[0] - 2, 3.5, P0[2] + 1]], t);
    valley(c, C, () => {
      COWS.forEach(([x, z, ry], i) => { const k = bk(t, LAND(50, 'cattle') + i * 0.12, 0.4); if (k > 0.02) cow([x, gy(x, z), z], 1.0 * k, t + i, ry); });
      PATS.slice(0, 8).forEach(([x, z, s, i]) => { const k = up(t, LAND(51, 'pats') + i * 0.05); if (k > 0.02) pat([x * 0.4 + P0[0] * 0.6, gy(x, z) + 0.05, z * 0.3 + P0[2] * 0.7], s * k, i); });
      const bx = P0[0] - 2.5 + Math.sin(t * 1.5) * 0.4; bug([bx, gy(bx, P0[2] - 3) + 0.3, P0[2] - 3], 0.4, 'dung', t, { ry: Math.sin(t * 1.5) * 1.2, walk: 1, roll: 0, legs: true });
    }, { kind: 'outback' });
    bigTag(c, 640, 110, 'AUSTRALIA', tagT(t, LAND(49, 'australia')), { px: 80, h: 116 });
    darkTag(c, 360, 600, 'settlers bring cattle', tagT(t, LAND(50, 'cattle')), { font: SG(38), h: 66 });
    coralTag(c, 920, 600, "local beetles can't cope", tagT(t, LAND(51, 'couldnt')), { font: SG(38), h: 66 });
  });
  fx(LAND(49, 'australia'), 'big'); fx(LAND(50, 'cattle'), 'moo'); for (let i = 0; i < 3; i++) fx(LAND(50, 'cattle') + i * 0.12, 'thud', { g: 0.6 }); fx(LAND(51, 'couldnt'), 'wrong'); fx(LAND(51, 'pats'), 'squish', { d: 0.5 });

  scene(52, 54, 'cut', (c, t) => {
    const C = flight([[PS(52), P0[0] - 2, 26, P0[2] - 26, P0[0], 2, P0[2] + 10], [PE(54) + 0.5, P0[0] + 2, 18, P0[2] - 20, P0[0], 2, P0[2] + 10]], t);
    const tm = LAND(52, 'months'), tg = LAND(53, 'smothering'), tf2 = LAND(54, 'flies');
    valley(c, C, () => {
      PATS.forEach(([x, z, s, i, r]) => { const k = up(t, PS(52) + r * 1.2, 0.3); if (k > 0.02) { pat([x, gy(x, z) + 0.05, z], s * 1.15 * k, i); if (t > tg) { const g = up(t, tg + r * 0.6, 0.5); prism(x, gy(x, z) - 0.05, z, s * 1.9 * g, 0.12, 7, H.mix([200, 180, 110], [150, 140, 120], g), r * 3, { hard: true }); } } });
      if (t > tf2) swarm([P0[0], 5, P0[2] + 8], 14, Math.round(70 * up(t, tf2, 0.8)), t, 54, ['fly'], 0.5);
    }, { kind: 'outback' });
        bigTag(c, 640, 110, t > tm ? 'for MONTHS' : 'COW PATS', tagT(t, PS(52) + 0.1), { px: 70, h: 104 });
    darkTag(c, 360, 600, 'grass smothered', tagT(t, tg), { font: SG(40), h: 70 });
    coralTag(c, 920, 600, 'swarms of flies', tagT(t, tf2), { font: SG(40), h: 70 });
  });
  for (let i = 0; i < 10; i++) fx(PS(52) + i * 0.12, 'squish', { d: 0.15, minor: true }); fx(LAND(52, 'months'), 'facet', { f: 520 }); fx(LAND(53, 'smothering'), 'facet', { f: 380 }); fx(LAND(54, 'flies'), 'buzz', { d: 2.2, hi: true }); fx(LAND(54, 'flies'), 'facet', { f: 520 });

  scene(55, 56, 'facet', (c, t) => {
    const C = flight([[PS(55), P0[0] - 9, 7, P0[2] - 14, P0[0], 3, P0[2] + 2], [PE(56) + 0.5, P0[0] - 5, 6, P0[2] - 12, P0[0], 3, P0[2] + 2]], t);
    const tn = LAND(56, 'twentythree');
    valley(c, C, () => {
      const r = H.rng(55);
      for (let i = 0; i < 9; i++) { const k = bk(t, LAND(55, 'beetles') + i * 0.08, 0.4); if (k <= 0.02) continue; const x0 = P0[0] - 10 + r.range(0, 20), z = P0[2] + r.range(-4, 8), x = x0 + ((t * 0.8 + i) % 4) - 2; bug([x, gy(x, z) + 0.35, z], 0.42 * k, 'dung', t, { ry: Math.PI, walk: 1, roll: t * 2.5 + i, col: BEETLE_COLS[i % 8].map((v) => v * 0.6) }); }
      for (let i = 0; i < 5; i++) { const x = P0[0] - 8 + i * 4, z = P0[2] + 10, k = 1 - up(t, tn + i * 0.1, 0.5); if (k > 0.02) pat([x, gy(x, z) + 0.05, z], 1.0 * k, i); }
    }, { kind: 'outback' });
    darkTag(c, 640, 110, 'beetles shipped in', tagT(t, LAND(55, 'shipped')), { font: SG(46), h: 78 });
    const n = Math.round(23 * E.out(ph(t, tn, tn + 0.8)));
    bigTag(c, 640, 600, n + ' kinds settled in', tagT(t, tn), { px: 60, h: 92, bg: '#ff7060', col: '#fff' });
  });
  fx(LAND(55, 'shipped'), 'horn'); for (let i = 0; i < 9; i++) fx(LAND(55, 'beetles') + i * 0.08, 'pop'); fx(LAND(56, 'twentythree'), 'count', { d: 0.8, f: 2800 }); fx(LAND(56, 'settled'), 'right');

  scene(57, 59, 'build', (c, t) => {
    skySpace(c, t, 57, [1110, 120]);
    const C = look([0, 3, H.lerp(-46, -38, io(t, PS(57), PE(59)))], [0, 0, 0], 760);
    const te = LAND(57, 'everywhere');
    sphere([0, 0, 0], 12, 3, (q, d) => { const b = earthCol(q, d); const v = EARTH_N.fbm3(d[0] * 9, d[1] * 9, d[2] * 9, 2); return v > 0.1 && t > te + (1 - v) * 0.8 && b[1] > 120 && b[2] < 120 ? [120, 84, 60] : b; }, { ry: t * 0.15, rx: 0.35, soft: true });
    pnt(c, C, { fogN: 400, fogF: 900 }); halo(c, C, [0, 0, 0], 12);
    bigTag(c, 640, 100, 'EVERYWHERE', tagT(t, te), { px: 76, h: 110 });
    darkTag(c, 330, 600, 'fungi + bacteria', tagT(t, LAND(58, 'fungi')), { font: SG(40), h: 70 });
    coralTag(c, 950, 600, 'much slower', tagT(t, LAND(59, 'slowly')), { font: SG(44), h: 76 });
  });
  fx(PE(56) + 0.03, 'build'); fx(LAND(57, 'everywhere'), 'big'); fx(LAND(58, 'fungi'), 'facet', { f: 470 }); fx(LAND(59, 'slowly'), 'slow');

  // ---------------- 5 · WOULD WE STARVE? ----------------
  function table(c) { box(-16, -1.2, -6, 16, 0, 6, [200, 150, 120], { hard: true }); }
  scene(60, 61, 'facet', (c, t) => {
    studio(c, 60, '#4d3f84', '#ffb08a');
    const C = look([0, H.lerp(12, 9, io(t, PS(60), PE(61))), -20], [0, 0, 0], 760);
    table(c); plate([0, 0, 0], 4.2);
    tube([-6, 0.15, -1], [-6, 0.15, 3], 0.12, 4, [200, 200, 210]); tube([6, 0.15, -1], [6, 0.15, 3], 0.12, 4, [200, 200, 210]);
    pnt(c, C, { fogN: 30, fogF: 90, fogC: [77, 63, 132] });
    bigTag(c, 640, 120, 'STARVE?', tagT(t, LAND(60, 'starve')), { px: 96, h: 136, bg: '#ff7060', col: '#fff' });
    darkTag(c, 640, 620, 'not right away', tagT(t, LAND(61, 'not')), { font: SG(48), h: 82 });
  });
  fx(LAND(60, 'starve'), 'big'); fx(LAND(61, 'not'), 'right');

  scene(62, 63, 'build', (c, t) => {
    const s0 = PE(61) + 0.03;
    const C = flight([[s0, P1[0] - 4, 14, P1[2] - 24, P1[0], 6, P1[2] + 4], [PE(63) + 0.5, P1[0] + 4, 10, P1[2] - 18, P1[0], 6, P1[2] + 4]], t);
    valley(c, C, () => { const r = H.rng(62); for (let i = 0; i < 90; i++) { const x = P1[0] + r.range(-12, 12), z = P1[2] + r.range(-8, 8); const third = x < P1[0] - 4 ? 0 : x < P1[0] + 4 ? 1 : 2; wheat([x, gy(x, z) - 0.1, z], 1.1, t, third === 0 ? [240, 196, 90] : third === 1 ? [210, 220, 140] : [255, 214, 70], i); } });
    const tw = LAND(62, 'wind');
    for (let i = 0; i < 3; i++) { const y = 200 + i * 70; lpArrow(c, [80, y], [400, y - 40], [760 + i * 60, y + 10], up(t, tw + i * 0.15, 0.7), WHITE, 10); }
    [['wheat', 'wheat', 300], ['rice', 'rice', 640], ['corn', 'corn', 980]].forEach(([txt, w, x]) => darkTag(c, x, 470, txt, tagT(t, LAND(62, w), LAND(63, 'bread') - 0.2), { font: SG(40), h: 70 }));
    [['bread', 'bread', 300], ['rice', 'rice', 640], ['popcorn', 'popcorn', 980]].forEach(([txt, w, x]) => coralTag(c, x, 470, txt, tagT(t, LAND(63, w)), { font: SG(44), h: 76 }));
    bigTag(c, 640, 100, 'WIND-POLLINATED', tagT(t, tw), { px: 64, h: 96 });
  });
  fx(PE(61) + 0.03, 'build'); ['wheat', 'rice', 'corn'].forEach((w) => fx(LAND(62, w), 'facet', { f: 470 })); fx(LAND(62, 'wind'), 'gust', { d: 1.6 }); ['bread', 'rice', 'popcorn'].forEach((w, i) => fx(LAND(63, w), 'pop', { g: 1.3 }));

  const LOST = [['honey', 'honey'], ['silk', 'silk'], ['fruit', 'fruits'], ['veg', 'vegetables']];
  scene(64, 66, 'cut', (c, t) => {
    studio(c, 64, '#3d2f6e', '#a08aa0');
    const C = look([0, 10, -22], [0, 0.6, 0], 760);
    table(c); plate([0, 0, 0], 3.6, [220, 216, 222]);
    const tb = LAND(64, 'boring');
    sphere([0, 0.5, 0], 1.6, 1, [214, 206, 190], { sy: 0.45, soft: true }); // plain bowl of grain
    LOST.forEach(([k, w], i) => { const t0 = LAND(i < 2 ? 65 : 66, w), x = -11 + i * 7.3 + (i > 1 ? 0 : 0), kk = bk(t, t0, 0.35), go = ph(t, t0 + 1.3, t0 + 1.9); if (kk <= 0.02 || go >= 1) return; const y = 0.2 + go * 9, s = kk * (1 - go * 0.5);
      if (k === 'honey') { prism(x, y, 0, 1.0 * s, 2.0 * s, 6, [255, 190, 60], 0, { hard: true }); prism(x, y + 2.0 * s, 0, 0.8 * s, 0.4 * s, 6, [240, 236, 230], 0, { hard: true }); }
      else if (k === 'silk') { prism(x, y, 0, 1.0 * s, 1.6 * s, 8, [250, 246, 255], 0, { hard: true }); prism(x, y - 0.2 * s, 0, 1.3 * s, 0.2 * s, 8, [180, 140, 110], 0); prism(x, y + 1.6 * s, 0, 1.3 * s, 0.2 * s, 8, [180, 140, 110], 0); }
      else if (k === 'fruit') { fruit('apple', [x - 0.6, y + 0.8, 0], 0.8 * s); fruit('cherry', [x + 0.9, y + 0.4, -0.4], 0.6 * s); }
      else { sphere([x, y + 0.6, 0], 0.7 * s, 1, [255, 140, 50], { sy: 2.0, soft: true }); cone([x, y + 1.9 * s, 0], 0.4 * s, 0.9 * s, 4, [80, 180, 90]); sphere([x + 1.3, y + 0.6, 0], 0.7 * s, 1, [120, 70, 150], { soft: true }); } });
    pnt(c, C, { fogN: 30, fogF: 90, fogC: [61, 47, 110] });
    bigTag(c, 640, 110, 'BORING', tagT(t, tb), { px: 88, h: 124 });
    LOST.forEach(([k, w], i) => { const t0 = LAND(i < 2 ? 65 : 66, w); strikeTag(c, 250 + i * 260, 650, k === 'veg' ? 'vegetables' : k === 'fruit' ? 'fruits' : k, tagT(t, t0), up(t, t0 + 0.45, 0.3), { px: 36 }); });
  });
  fx(LAND(64, 'boring'), 'wrong'); LOST.forEach(([k, w], i) => { const t0 = LAND(i < 2 ? 65 : 66, w); fx(t0, 'pop'); fx(t0 + 0.45, 'ribbon'); fx(t0 + 1.3, 'whir', { d: 0.5, fast: true }); });

  scene(67, 68, 'facet', (c, t) => {
    const C = flight([[PS(67), P0[0] - 12, 10, P0[2] - 16, P0[0], 5, P0[2] + 2], [PE(68) + 0.5, P0[0] - 16, 14, P0[2] - 22, P0[0], 5, P0[2] + 2]], t);
    const tf3 = LAND(67, 'fade'), ta = LAND(68, 'follow');
    valley(c, C, () => {
      meadow(t, { fade: io(t, PS(67), tf3 + 0.8), fs: 1 - 0.35 * io(t, tf3, tf3 + 1.5) });
      for (let i = 0; i < 3; i++) { const u = ph(t, ta + i * 0.15, ta + i * 0.15 + 2); bird([P0[0] - 4 + i * 4 + u * 14, 6 + i + u * 9, P0[2] + 2 + u * 10], 0.7, t + i, { fly: true, ry: -0.6 }); }
    });
    darkTag(c, 640, 110, 'wild plants fade', tagT(t, LAND(67, 'wild')), { font: SG(48), h: 82 });
    coralTag(c, 640, 600, 'animals follow', tagT(t, ta), { font: SG(48), h: 82 });
  });
  fx(LAND(67, 'fade'), 'slow'); fx(LAND(68, 'follow'), 'whir', { d: 1.2 });

  scene(69, 70, 'cut', (c, t) => {
    // soil cross-section: faceted strata with tunnels drawn by digging insects
    const g = c.createLinearGradient(0, 0, 0, 200); g.addColorStop(0, '#4d3f84'); g.addColorStop(1, '#ffb08a'); c.fillStyle = g; c.fillRect(0, 0, W, 200);
    const r = H.rng(69), bands = [[200, [120, 170, 100]], [236, [140, 96, 72]], [380, [116, 78, 64]], [540, [92, 62, 56]], [720]];
    for (let b = 0; b < 4; b++) { const y0 = bands[b][0], y1 = bands[b + 1][0], col = bands[b][1]; for (let x = 0; x < W; x += 80) { const j0 = r.range(-10, 10), j1 = r.range(-10, 10); c.fillStyle = H.rgba(H.mix(col, [255, 220, 200], r() * 0.08)); c.beginPath(); c.moveTo(x, y0 + j0); c.lineTo(x + 80, y0 + j1); c.lineTo(x + 80, y1); c.lineTo(x, y1); c.closePath(); c.fill(); c.fillStyle = H.rgba(H.mix(col, [40, 20, 40], 0.12)); c.beginPath(); c.moveTo(x, y1); c.lineTo(x + 40, y0 + 40 + r() * 40); c.lineTo(x + 80, y1); c.closePath(); c.fill(); } }
    const td = LAND(70, 'dig'), tm2 = LAND(70, 'mix'), tfd = LAND(70, 'feed');
    const paths = [[[200, 230], [260, 360], [380, 420], [420, 560]], [[640, 230], [600, 330], [700, 460], [660, 600]], [[1060, 230], [1000, 350], [1100, 470], [1020, 580]]];
    paths.forEach((pp, i) => { const u = up(t, td + i * 0.15, 1.8); if (u <= 0) return; c.strokeStyle = '#3a2630'; c.lineWidth = 22; c.lineJoin = 'round'; c.beginPath(); const N = 30; for (let s = 0; s <= N * u; s++) { const f = s / N * 3, k = Math.min(2, Math.floor(f)), q = f - k; const x = H.lerp(pp[k][0], pp[k + 1][0], q), y = H.lerp(pp[k][1], pp[k + 1][1], q); s ? c.lineTo(x, y) : c.moveTo(x, y); } c.stroke();
      const f = u * 3, k = Math.min(2, Math.floor(f)), q = f - k, x = H.lerp(pp[k][0], pp[k + 1][0], Math.min(1, q)), y = H.lerp(pp[k][1], pp[k + 1][1], Math.min(1, q));
      c.fillStyle = '#2a1f4f'; c.beginPath(); c.ellipse(x, y, 16, 10, Math.atan2(pp[k + 1][1] - pp[k][1], pp[k + 1][0] - pp[k][0]), 0, 7); c.fill(); });
    for (let i = 0; i < 26; i++) { const k2 = up(t, tm2 + i * 0.03, 0.5); if (k2 <= 0) continue; const x = 80 + r() * 1120, y = 260 + r() * 400, s = 7 * k2; c.fillStyle = r() < 0.5 ? '#c99a6a' : '#7fc49a'; c.beginPath(); c.moveTo(x, y - s); c.lineTo(x + s, y + s); c.lineTo(x - s, y + s); c.closePath(); c.fill(); }
    darkTag(c, 640, 110, 'THE SOIL', tagT(t, LAND(69, 'soil')), { font: SG(56), h: 92 });
    [['dig', td, 330], ['mix', tm2, 640], ['feed', tfd, 950]].forEach(([w, t0, x]) => coralTag(c, x, 660, w, tagT(t, t0), { font: SG(44), h: 76 }));
  });
  fx(LAND(69, 'soil'), 'thud'); fx(LAND(70, 'dig'), 'dig', { d: 1.8 }); fx(LAND(70, 'mix'), 'facet', { f: 520 }); fx(LAND(70, 'feed'), 'facet', { f: 600 });

  // ---------------- OUTRO ----------------
  scene(71, 73, 'build', (c, t) => {
    const s0 = PE(70) + 0.03, tb = LAND(71, 'bee'), u = ph(t, tb, PE(71) + 0.3);
    const C = flight([[s0, P0[0] - 8, 7, P0[2] - 12, P0[0], 6, P0[2] + 2], [PE(73) + 0.5, P0[0] - 5, 6.5, P0[2] - 10, P0[0], 6, P0[2] + 2]], t);
    valley(c, C, () => { meadow(t); if (u > 0 && u < 1) { const p = lerp3([P0[0] + 3, 7.6, P0[2] - 5], [P0[0] - 11, 7.2, P0[2] - 9], E.inOut(u)); bug(add3(p, [0, Math.sin(t * 9) * 0.2, 0]), 0.6, 'bee', t, { ry: 2.9 }); }
      const pk = bk(t, LAND(73, 'plate'), 0.45); if (pk > 0.02) { const pc = [P0[0], gy(P0[0], P0[2]) + 2.4, P0[2]]; plate(pc, 2.6 * pk); fruit('apple', add3(pc, [-1.0, 0.9, 0]), 0.75 * pk); fruit('blueberry', add3(pc, [1.0, 0.5, 0.4]), 0.5 * pk); fruit('cherry', add3(pc, [0.2, 0.5, -1.0]), 0.55 * pk); } });
    darkTag(c, 640, 120, 'that tiny bug', tagT(t, LAND(73, 'tiny')), { font: SG(48), h: 82 });
    bigTag(c, 640, 610, 'KEEPS YOUR PLATE FULL', tagT(t, LAND(73, 'keep')), { px: 60, h: 92, bg: '#ff7060', col: '#fff' });
  });
  fx(PE(70) + 0.03, 'build'); fx(LAND(71, 'bee') - 0.2, 'buzz', { d: 1.8, pass: true }); fx(LAND(73, 'tiny'), 'facet', { f: 520 }); fx(LAND(73, 'plate'), 'pop', { g: 1.3 }); fx(LAND(73, 'keep'), 'take');

  scene(74, 75, 'facet', (c, t) => {
    studio(c, 74, '#4d3f84', '#ffb08a');
    const C = look([H.lerp(-3, 2, io(t, PS(74), DURATION)), 5, -20], [0, 2.4, 0], 760);
    disc([0, 0, 0], 5, [236, 214, 220]);
    const k = bk(t, LAND(75, 'teddy'), 0.5); if (k > 0.02) teddy([0, 1.4, 0], 1.2 * k);
    pnt(c, C, { fogN: 30, fogF: 90, fogC: [77, 63, 132] });
    darkTag(c, 640, 110, 'NEXT TIME', tagT(t, LAND(74, 'next')), { font: SG(52), h: 88 });
    bigTag(c, 640, 620, 'THE TEDDY BEAR', tagT(t, LAND(75, 'teddy')), { px: 64, h: 96, bg: '#ff7060', col: '#fff' });
    coralTag(c, 1030, 300, 'a bear hunt?', tagT(t, LAND(75, 'hunt')), { font: SG(40), h: 70 });
  });
  fx(LAND(74, 'next'), 'facet', { f: 470 }); fx(LAND(75, 'hunt'), 'facet', { f: 560 }); fx(LAND(75, 'teddy'), 'big');

  const CH = [[6, '1 · How many bugs?'], [15, '2 · The flowers'], [32, '3 · Hungry animals'], [44, '4 · The cleanup crew'], [60, '5 · Would we starve?']];
  // ================= chapter header: the chapter title lands centre-stage, then shrinks into the corner (reference hook → header) =================
  function header(c, t) {
    for (let j = 0; j < CH.length; j++) {
      const i = CH[j][0], st = PS(i) - 0.15, en = j + 1 < CH.length ? PE(CH[j + 1][0] - 1) + 0.03 : PE(70) + 0.03;
      if (t < st || t >= en) continue;
      const sh = io(t, PE(i) - 0.2, PE(i) + 0.3), a = up(t, st, 0.4);
      const size = H.lerp(56, 28, sh);
      c.save(); c.globalAlpha = a; c.font = SG(size);
      const txt = CH[j][1], w = c.measureText(txt).width;
      const x = H.lerp(640 - w / 2, 40, sh), y = H.lerp(380, 58, sh);
      const pw = w + 32, phh = size * 1.75, c2 = 12;
      c.save(); c.translate(x - 16, y - size * 1.12); c.fillStyle = 'rgba(42,31,79,0.86)'; c.beginPath(); c.moveTo(c2, 0); c.lineTo(pw, 0); c.lineTo(pw, phh - c2); c.lineTo(pw - c2, phh); c.lineTo(0, phh); c.lineTo(0, c2); c.closePath(); c.fill(); c.restore();
      c.fillStyle = 'rgba(30,20,60,0.35)'; c.fillText(txt, x + 3, y + 3); c.fillStyle = '#ffffff'; c.fillText(txt, x, y);
      const uw = H.lerp(220, 110, sh), uy = y + size * 0.32;
      c.fillStyle = '#ff7060'; c.beginPath(); c.moveTo(x + 2, uy); c.lineTo(x + 2 + uw * 0.78, uy); c.lineTo(x + uw * 0.72, uy + size * 0.12); c.lineTo(x + 2, uy + size * 0.12); c.fill();
      c.fillStyle = '#ffb08a'; c.beginPath(); c.moveTo(x + 2 + uw * 0.78, uy); c.lineTo(x + uw, uy); c.lineTo(x + uw * 0.94, uy + size * 0.12); c.lineTo(x + uw * 0.72, uy + size * 0.12); c.fill();
      c.restore();
    }
  }
  CH.forEach(([i]) => fx(PS(i) - 0.15, 'chapter'));

  // ================= transitions + frame =================
  let TL = null;
  function drawScene(c, sc, t) { c.save(); BUILD = sc.tr === 'build' ? (t - sc.s) / 1.1 : null; if (BUILD != null && BUILD > 1.2) BUILD = null; sc.draw(c, t); BUILD = null; TR = []; c.restore(); }
  function toLayer(sc, t) { const L = TL || (TL = H.layer(W, HH)), lc = L.getContext('2d'); lc.setTransform(1, 0, 0, 1, 0, 0); lc.globalAlpha = 1; lc.globalCompositeOperation = 'source-over'; lc.filter = 'none'; lc.clearRect(0, 0, W, HH); drawScene(lc, sc, t); return L; }
  // facet flip: the screen is a jittered triangle mesh; each facet of the new scene flips in, sweeping from one corner
  const FMESH = (() => {
    const CW = 106, nx = Math.ceil(W / CW), ny = Math.ceil(HH / CW), r = H.rng(303), V = [];
    for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) row.push([i * CW + (i > 0 && i < nx ? r.range(-0.35, 0.35) * CW : 0), j * CW + (j > 0 && j < ny ? r.range(-0.35, 0.35) * CW : 0)]); V.push(row); }
    const T = []; for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1]; for (const f of (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]]) { const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cy = (f[0][1] + f[1][1] + f[2][1]) / 3; T.push({ f, cx, cy, d: (cx / W) * 0.6 + (cy / HH) * 0.25 + r() * 0.15 }); } }
    return T;
  })();
  function explainer(ctx, Wd, Hd, t) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    let cur = 0; for (let i = 0; i < SC.length; i++) if (t >= SC[i].s) cur = i;
    const s = SC[cur], d = TRD[s.tr] || 0, u = cur > 0 && d > 0 ? (t - s.s) / d : 1;
    ctx.fillStyle = '#1b2350'; ctx.fillRect(0, 0, W, HH);
    if (u < 1) {
      const prev = SC[cur - 1], e = E.inOut(cl(u));
      if (s.tr === 'facet') {
        drawScene(ctx, prev, t);
        const L = toLayer(s, t);
        for (const q of FMESH) {
          const p = E.out(cl((u * 1.35 - q.d) / 0.35)); if (p <= 0) continue;
          const sq = (v) => [q.cx + (v[0] - q.cx) * p, q.cy + (v[1] - q.cy) * p];
          const A = sq(q.f[0]), B = sq(q.f[1]), C2 = sq(q.f[2]);
          ctx.save(); ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.lineTo(C2[0], C2[1]); ctx.closePath(); ctx.clip(); ctx.drawImage(L, 0, 0);
          if (p < 1) { ctx.fillStyle = `rgba(255,236,226,${(1 - p) * 0.7})`; ctx.fill(); }
          ctx.restore();
        }
      } else if (s.tr === 'whip') { // camera whip-pans right
        ctx.save(); ctx.translate(-W * e, 0); drawScene(ctx, prev, t); ctx.restore();
        ctx.save(); ctx.translate(W * (1 - e), 0); drawScene(ctx, s, t); ctx.restore();
        ctx.save(); ctx.globalAlpha = 0.25 * Math.sin(Math.PI * e); ctx.fillStyle = '#ffd6c8'; ctx.fillRect(0, 0, W, HH); ctx.restore();
      }
    } else drawScene(ctx, s, t);
    header(ctx, t);
    ctx.restore();
  }

  // ================= SOUND (voiceover mode; same BEATS/word times as the picture) =================
  function scoreSound(k) {
    const D = DURATION;
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f, g, p = 0, minor) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const gust = (t0, t1, g = 1) => { const d = t1 - t0, steps = [260, 420, 610, 470, 300]; steps.forEach((f, i) => { const s = t0 + (d * i) / steps.length, dd = (d / steps.length) * 1.9; k.noise(s, { dur: dd, color: 'pink', filter: 'bandpass', f: [[0, f], [dd, f * 1.25]], q: 1.4, gain: 0.04 * g * Math.sin(((i + 0.5) / steps.length) * Math.PI), a: dd * 0.45, verb: 0.15, minor: true }); }); };
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pad', 0, D, { bpm: 96, gain: 0.25, chords: [['D4', 'F#4', 'A4', 'C#5'], ['B3', 'D4', 'F#4', 'A4'], ['G3', 'B3', 'D4', 'F#4'], ['A3', 'C#4', 'E4', 'G4']] });
    k.noise(0, { dur: D, color: 'pink', filter: 'lowpass', f: 420, gain: 0.025, a: 1, hold: D - 2, bus: 'amb', minor: true });
    glass(0.1, 'A4', 1.0, 0, 1.4); glass(0.1, 'D4', 0.8, 0, 1.4);
    // transitions
    SC.forEach((s, i) => {
      if (!i) return;
      if (s.tr === 'facet') { for (let j = 0; j < 9; j++) facet(s.s + j * 0.06, 380 + j * 40, 0.35, (j / 8 - 0.5) * 1.2, true); glass(s.s + 0.35, ['D5', 'A4', 'F#5', 'E5'][i % 4], 0.6, 0, 0.8); }
      else if (s.tr === 'whip') k.play('whoosh', s.s - 0.05, { dur: 0.5, gain: 0.55, top: 3200 });
      else if (s.tr === 'cut') k.play('swish', s.s, { dur: 0.14, gain: 0.35, minor: true });
    });
    const counter = (a, d, f, n) => { const N = n || Math.max(6, Math.floor(d * 14)); for (let i = 0; i < N; i++) { const tt = a + d * H.ease.out(i / N); k.play('tick', tt, { f, gain: 0.9, minor: true }); } };
    SFX.forEach(([t, kind, o]) => {
      const g = o.g || 1, mn = !!o.minor;
      switch (kind) {
        case 'facet': facet(t, o.f || 520, g, 0, mn); break;
        case 'pop': k.play('pop', t, { f: 520, gain: 0.5 * g, minor: true }); break;
        case 'glass': (o.n || ['A4']).forEach((n, i) => glass(t + i * 0.04, n, 0.9 * g, (i - 1) * 0.2, 1.1)); break;
        case 'big': k.play('impact', t, { gain: 0.9 * g }); ['D4', 'A4', 'D5', 'F#5'].forEach((n, i) => glass(t + i * 0.03, n, 1.4 - i * 0.2, (i - 1.5) * 0.25, 1.4)); break;
        case 'stampg': facet(t, 600, 1.1); glass(t, 'A4', 0.9); glass(t, 'E5', 0.6); break;
        case 'ribbon': k.noise(t, { dur: 0.5, color: 'pink', filter: 'bandpass', f: o.down ? [[0, 1400], [0.5, 500]] : [[0, 500], [0.5, 1400]], q: 1.2, gain: 0.07, a: 0.25, minor: true }); break;
        case 'gust': gust(t, t + (o.d || 1), 1.1); break;
        case 'count': counter(t, o.d || 1, o.f || 3000, o.n); break;
        case 'riser': k.play('riser', t, { dur: o.d || 0.8, gain: 0.6 }); break;
        case 'pillar': for (let i = 0; i < 4; i++) k.play('tock', t + i * 0.12, { f: 200 + i * 30, gain: 0.4, minor: true }); k.noise(t, { dur: 0.6, color: 'brown', filter: 'bandpass', f: [[0, 250], [0.5, 600]], q: 1, gain: 0.2 * (mn ? 0.6 : 1), a: 0.05, minor: mn }); break;
        case 'grow': k.tone(t, { f: [[0, 160], [o.d || 1, 420]], type: 'triangle', dur: o.d || 1, gain: 0.06, a: 0.2, minor: true }); break;
        case 'typing': k.play('typing', t, { n: 10, rate: 0.05, gain: 0.6, minor: true }); break;
        case 'right': k.play('success', t, { f: 'D5', gain: 0.45 }); break;
        case 'whir': { const d2 = o.d || 2; for (let x = 0; x < d2; x += o.fast ? 0.08 : 0.2) k.play('swish', t + x, { dur: 0.12, gain: 0.18, minor: true, pan: Math.sin(x * 4) * 0.3 }); break; }
        case 'splash': for (let i = 0; i < 8; i++) k.noise(t + i * 0.09, { dur: 0.08, filter: 'bandpass', f: 1800 + i * 200, q: 2, gain: 0.12, a: 0.005, pan: 0.3, minor: true }); break;
        case 'air': k.noise(t, { dur: o.d, color: 'pink', filter: 'bandpass', f: 380, q: 0.7, gain: 0.05, a: 0.5, hold: o.d - 1, minor: true }); break;
        case 'boom': k.play('thud', t, { f: 90, gain: 0.8 * g }); k.noise(t, { dur: 0.5, color: 'brown', filter: 'lowpass', f: [[0, 1600], [0.5, 200]], gain: 0.35 * g, verb: 0.3 }); break;
        case 'thud': k.play('thud', t, { f: 120, gain: 0.6 * g }); break;
        case 'clock': counter(t, o.d || 1, 4200); break;
        case 'swell': k.noise(t, { dur: o.d, color: 'pink', filter: 'lowpass', f: [[0, 300], [o.d, 900]], gain: 0.09, a: o.d * 0.7, minor: true }); break;
        case 'waves': for (let x = 0; x < o.d; x += 0.9) k.noise(t + x, { dur: 1.1, color: 'pink', filter: 'lowpass', f: [[0, 500], [0.6, 1400], [1.1, 400]], gain: 0.09, a: 0.5, minor: true }); break;
        case 'clink': k.play('ding', t, { f: 'E6', gain: 0.35 * g }); k.play('click', t, { gain: 1 }); break;
        case 'gather': { const d2 = o.d || 1; for (let i = 0; i < 18; i++) k.play('tock', t + d2 * H.ease.inOut(i / 18), { f: 300 + (i % 5) * 60, gain: 0.25, minor: true, pan: Math.sin(i) * 0.6 }); glass(t + d2, 'D4', 1.2, 0, 1.4); break; }
        case 'jump': k.tone(t, { f: [[0, 220], [0.3, 520]], type: 'triangle', dur: 0.35, gain: 0.08 }); break;
        case 'take': ['A4', 'D5'].forEach((n, i) => glass(t + i * 0.09, n, 1.1, (i - 0.5) * 0.3, 1.4)); k.tone(t, { f: 'D3', type: 'triangle', dur: 1.2, gain: 0.12, a: 0.02 }); break;
        case 'buzzbee': k.tone(t, { f: 220, type: 'sawtooth', dur: o.d, gain: 0.025, a: 0.3, hold: o.d - 0.6, filter: 'lowpass', f2: 900, minor: true }); break;
        case 'poof': { const d2 = o.d || 0.8, r = H.rng(Math.floor(t * 100)); for (let i = 0; i < 14; i++) k.play('pop', t + d2 * (i / 14) + r() * 0.03, { f: 700 + r() * 600, gain: 0.25, minor: true, pan: r() * 1.2 - 0.6 }); k.noise(t, { dur: d2, color: 'pink', filter: 'highpass', f: [[0, 2000], [d2, 6000]], gain: 0.06, a: 0.05 }); break; }
        case 'swarm': k.tone(t, { f: 180, type: 'sawtooth', dur: o.d, gain: 0.03, a: 0.6, hold: o.d - 1, filter: 'lowpass', f2: 700, minor: true }); k.tone(t, { f: 184, type: 'sawtooth', dur: o.d, gain: 0.025, a: 0.6, hold: o.d - 1, filter: 'lowpass', f2: 700, minor: true }); break;
        case 'buzz': { const d2 = o.d || 1; k.tone(t, { f: o.hi ? 420 : 230, type: 'sawtooth', dur: d2, gain: 0.04, a: 0.15, hold: d2 - 0.4, filter: 'lowpass', f2: 1100, minor: true, pan: o.pass ? 0.3 : 0 }); break; }
        case 'sparkle': k.play('sparkle', t, { gain: 0.9, minor: true }); break;
        case 'wrong': k.play('error', t, { gain: 0.6 }); break;
        case 'coin': k.play('coin', t, { gain: 0.5, minor: true }); break;
        case 'zoom': k.play('riser', t, { dur: o.d || 1.2, gain: 0.4 }); break;
        case 'shatter': for (let i = 0; i < 12; i++) facet(t + i * 0.03, 700 + i * 90, 0.7, (i / 11 - 0.5) * 1.4); k.play('impact', t, { gain: 0.6 }); break;
        case 'chirp': for (let i = 0; i < (o.n || 3); i++) k.tone(t + i * 0.12, { f: [[0, 2600], [0.06, 3600], [0.1, 2900]], type: 'sine', dur: 0.1, gain: 0.05, a: 0.005, minor: true }); break;
        case 'squish': k.noise(t, { dur: o.d || 0.4, color: 'brown', filter: 'lowpass', f: [[0, 900], [o.d || 0.4, 200]], gain: 0.18, a: 0.02, minor: !!o.minor || (o.d || 0.4) < 0.3 }); break;
        case 'rumble': k.noise(t, { dur: o.d, color: 'brown', filter: 'lowpass', f: 260, gain: 0.3, a: 0.2 }); for (let i = 0; i < 6; i++) k.play('thud', t + i * 0.2, { f: 90 + i * 10, gain: 0.3, minor: true }); break;
        case 'scuttle': for (let x = 0; x < o.d; x += 0.09) k.play('tick', t + x, { f: 5200, gain: 0.25, minor: true }); break;
        case 'rustle': k.play('paper', t, { dur: 0.5, gain: 0.7, minor: true }); break;
        case 'moo': k.tone(t, { f: [[0, 150], [0.3, 175], [0.9, 120]], type: 'sawtooth', dur: 1.0, gain: 0.06, a: 0.1, filter: 'lowpass', f2: 700 }); break;
        case 'horn': k.tone(t, { f: 'D3', type: 'sawtooth', dur: 0.9, gain: 0.06, a: 0.05, hold: 0.6, filter: 'lowpass', f2: 600 }); k.tone(t, { f: 'A3', type: 'sawtooth', dur: 0.9, gain: 0.04, a: 0.05, hold: 0.6, filter: 'lowpass', f2: 600 }); break;
        case 'slow': k.tone(t, { f: [[0, 520], [1.2, 260]], type: 'triangle', dur: 1.2, gain: 0.07, a: 0.05 }); break;
        case 'dig': for (let x = 0; x < o.d; x += 0.16) k.noise(t + x, { dur: 0.1, color: 'brown', filter: 'bandpass', f: 500, q: 1.2, gain: 0.18, a: 0.01, minor: true }); break;
        case 'build': for (let j = 0; j < 14; j++) facet(t + j * 0.07, 300 + j * 25, 0.3, (j / 13 - 0.5), true); break;
        case 'chapter': facet(t, 470, 1); glass(t + 0.05, 'D5', 0.7); break;
      }
    });
  }

  // ================= THUMBNAIL =================
  function thumbnail(ctx, Wd, Hd) {
    const t = 1.2;
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    const C = look([P0[0] - 9, 7, P0[2] - 12], [P0[0] + 2, 6, P0[2] + 2], 760);
    skyDusk(ctx, C, 0.62, 77);
    pushTerrain('valley'); meadow(t, { fade: 0.25 });
    paint(ctx, C, {});
    bug([0, 0, 0], 1.25, 'bee', 0.02, { ry: 0.5, fly: true });
    for (let i = 0; i < 6; i++) box(-1.6 + (i % 3) * 1.1, -2.6, -0.5 + Math.floor(i / 3) * 1.1, -0.6 + (i % 3) * 1.1, -2.1, 0.5 + Math.floor(i / 3) * 1.1, [110, 66, 50], { hard: true });
    paint(ctx, look([3.6, 0.6, -6.5], [3.6, -0.6, 0], 760), { fogN: 400, fogF: 900 });
    crossX(ctx, 205, 300, 150, 1);
    bigTag(ctx, 880, 200, 'GOODBYE', 1, { px: 104, h: 144 });
    bigTag(ctx, 880, 360, 'CHOCOLATE?', 1, { px: 104, h: 144, bg: '#ff7060', col: '#fff' });
    lpTag(ctx, 880, 500, 'if every insect vanished', { k: 1, bg: '#2a1f4f', col: '#fff', font: SG(40), h: 70 });
    ctx.restore();
  }

  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s - 0.05 ? j : a), 0) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();
