// ================= Claymation Set, 16:9 1280x720: "How did the Romans heat their floors?" =================
// Long explainer (3:28). Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// One clay "studio": every scene is a sculpted set (wall + table) and every piece a baked plasticine lump that the
// animator pops on with squash-and-stretch on twos (12 fps), slides, or knocks off the table at the end of the beat.
(function () {
  const W0 = 1280, H0 = 720, TAU = Math.PI * 2;
  // ---------- BEATS: one entry per voiceover phrase (phrases.json, Kokoro bm_george) ----------
  const PH = [
    {"s":0.25,"e":2.65,"text":"How did the Romans heat their floors,","words":[["how",0.25],["did",0.49],["the",0.73],["romans",0.97],["heat",1.45],["their",1.77],["floors",2.17]]},
    {"s":2.95,"e":4.53,"text":"without a single wire?","words":[["without",2.95],["a",3.56],["single",3.65],["wire",4.18]]},
    {"s":5.08,"e":6.76,"text":"Two thousand years ago,","words":[["two",5.08],["thousand",5.35],["years",6.05],["ago",6.5]]},
    {"s":7.06,"e":8.56,"text":"in the middle of winter,","words":[["in",7.06],["the",7.22],["middle",7.46],["of",7.93],["winter",8.09]]},
    {"s":8.86,"e":12.0,"text":"a Roman could walk across a stone floor barefoot,","words":[["a",8.86],["roman",8.94],["could",9.33],["walk",9.73],["across",10.04],["a",10.51],["stone",10.59],["floor",10.98],["barefoot",11.37]]},
    {"s":12.3,"e":13.71,"text":"and it would be warm.","words":[["and",12.3],["it",12.56],["would",12.74],["be",13.18],["warm",13.36]]},
    {"s":14.26,"e":16.81,"text":"The trick was hiding under their feet.","words":[["the",14.26],["trick",14.51],["was",14.92],["hiding",15.17],["under",15.66],["their",16.07],["feet",16.48]]},
    {"s":17.36,"e":19.16,"text":"It's called a hypocaust,","words":[["its",17.36],["called",17.65],["a",18.22],["hypocaust",18.31]]},
    {"s":19.46,"e":21.45,"text":"which means \"heat from below.\"","words":[["which",19.46],["means",19.9],["heat",20.33],["from",20.67],["below",21.02]]},
    {"s":21.75,"e":24.03,"text":"The Roman writer Vitruvius","words":[["the",21.75],["roman",22.05],["writer",22.54],["vitruvius",23.14]]},
    {"s":24.33,"e":27.49,"text":"credits a businessman named Sergius Orata,","words":[["credits",24.33],["a",24.94],["businessman",25.03],["named",26.0],["sergius",26.44],["orata",27.05]]},
    {"s":27.79,"e":29.82,"text":"around 95 BC.","words":[["around",27.79],["95",29.01],["bc",29.42]]},
    {"s":30.37,"e":32.62,"text":"Orata got rich farming oysters,","words":[["orata",30.37],["got",30.8],["rich",31.06],["farming",31.41],["oysters",32.02]]},
    {"s":32.92,"e":36.51,"text":"and he sold wealthy Romans on heated \"hanging baths.\"","words":[["and",32.92],["he",33.18],["sold",33.35],["wealthy",33.69],["romans",34.29],["on",34.8],["heated",34.98],["hanging",35.49],["baths",36.09]]},
    {"s":36.81,"e":40.16,"text":"Soon, no fancy villa was complete without one.","words":[["soon",36.81],["no",37.18],["fancy",37.36],["villa",37.81],["was",38.26],["complete",38.53],["without",39.26],["one",39.89]]},
    {"s":40.71,"e":42.11,"text":"So how did it work?","words":[["so",40.71],["how",40.91],["did",41.21],["it",41.51],["work",41.71]]},
    {"s":42.66,"e":44.04,"text":"Start with a furnace,","words":[["start",42.66],["with",43.07],["a",43.39],["furnace",43.47]]},
    {"s":44.34,"e":45.75,"text":"called the praefurnium,","words":[["called",44.34],["the",44.76],["praefurnium",44.97]]},
    {"s":46.05,"e":49.23,"text":"built just outside the room, a little lower down.","words":[["built",46.05],["just",46.46],["outside",46.78],["the",47.36],["room",47.6],["a",47.93],["little",48.01],["lower",48.5],["down",48.9]]},
    {"s":49.78,"e":51.74,"text":"Slaves fed it wood all day.","words":[["slaves",49.78],["fed",50.34],["it",50.62],["wood",50.8],["all",51.18],["day",51.46]]},
    {"s":52.29,"e":54.86,"text":"Now, instead of laying the floor on the ground,","words":[["now",52.29],["instead",52.49],["of",52.98],["laying",53.12],["the",53.54],["floor",53.74],["on",54.09],["the",54.23],["ground",54.44]]},
    {"s":55.16,"e":57.23,"text":"the Romans lifted it up.","words":[["the",55.16],["romans",55.48],["lifted",56.14],["it",56.8],["up",57.01]]},
    {"s":57.78,"e":59.98,"text":"They built short stacks of square bricks,","words":[["they",57.78],["built",58.04],["short",58.37],["stacks",58.69],["of",59.08],["square",59.21],["bricks",59.6]]},
    {"s":60.28,"e":61.28,"text":"called pilae,","words":[["called",60.28],["pilae",60.83]]},
    {"s":61.58,"e":63.07,"text":"row after row.","words":[["row",61.58],["after",61.99],["row",62.67]]},
    {"s":63.62,"e":65.98,"text":"Vitruvius says two feet tall.","words":[["vitruvius",63.62],["says",64.51],["two",64.9],["feet",65.19],["tall",65.59]]},
    {"s":66.53,"e":68.86,"text":"On top went big two-foot tiles,","words":[["on",66.53],["top",66.72],["went",67.02],["big",67.4],["twofoot",67.7],["tiles",68.38]]},
    {"s":69.16,"e":71.28,"text":"then a thick layer of concrete,","words":[["then",69.16],["a",69.5],["thick",69.59],["layer",70.01],["of",70.43],["concrete",70.6]]},
    {"s":71.58,"e":73.71,"text":"then the floor you'd walk on.","words":[["then",71.58],["the",71.96],["floor",72.25],["youd",72.74],["walk",73.13],["on",73.52]]},
    {"s":74.26,"e":76.7,"text":"That left a hollow space underneath,","words":[["that",74.26],["left",74.59],["a",74.91],["hollow",74.99],["space",75.48],["underneath",75.89]]},
    {"s":77.0,"e":79.45,"text":"like a crawl space made for smoke.","words":[["like",77.0],["a",77.36],["crawl",77.46],["space",77.91],["made",78.36],["for",78.72],["smoke",79.0]]},
    {"s":80.0,"e":82.13,"text":"The fire's hot air and smoke","words":[["the",80.0],["fires",80.29],["hot",80.77],["air",81.06],["and",81.36],["smoke",81.65]]},
    {"s":82.43,"e":83.89,"text":"rushed into that gap,","words":[["rushed",82.43],["into",82.95],["that",83.29],["gap",83.64]]},
    {"s":84.19,"e":85.82,"text":"swirled between the pillars,","words":[["swirled",84.19],["between",84.67],["the",85.14],["pillars",85.35]]},
    {"s":86.12,"e":88.6,"text":"and soaked heat into the floor above.","words":[["and",86.12],["soaked",86.37],["heat",86.86],["into",87.19],["the",87.52],["floor",87.77],["above",88.18]]},
    {"s":89.15,"e":90.48,"text":"But it didn't stop there.","words":[["but",89.15],["it",89.36],["didnt",89.5],["stop",89.85],["there",90.13]]},
    {"s":91.03,"e":93.41,"text":"Hollow clay pipes, called tubuli,","words":[["hollow",91.03],["clay",91.56],["pipes",91.91],["called",92.35],["tubuli",92.88]]},
    {"s":93.71,"e":95.76,"text":"ran up inside the walls.","words":[["ran",93.71],["up",94.03],["inside",94.25],["the",94.9],["walls",95.22]]},
    {"s":96.31,"e":98.18,"text":"Hot air climbed through them,","words":[["hot",96.31],["air",96.54],["climbed",96.78],["through",97.33],["them",97.87]]},
    {"s":98.48,"e":100.12,"text":"warming the walls too,","words":[["warming",98.48],["the",99.12],["walls",99.39],["too",99.85]]},
    {"s":100.42,"e":102.95,"text":"then escaped through vents near the roof.","words":[["then",100.42],["escaped",100.72],["through",101.24],["vents",101.76],["near",102.13],["the",102.43],["roof",102.66]]},
    {"s":103.5,"e":106.11,"text":"So the whole room became a radiator.","words":[["so",103.5],["the",103.68],["whole",103.95],["room",104.4],["became",104.76],["a",105.3],["radiator",105.39]]},
    {"s":106.66,"e":110.36,"text":"Here's a detail Vitruvius was oddly specific about.","words":[["heres",106.66],["a",107.1],["detail",107.19],["vitruvius",107.71],["was",108.51],["oddly",108.77],["specific",109.21],["about",109.92]]},
    {"s":110.91,"e":113.99,"text":"The floor underneath should slope toward the furnace,","words":[["the",110.91],["floor",111.11],["underneath",111.46],["should",112.14],["slope",112.55],["toward",112.89],["the",113.3],["furnace",113.51]]},
    {"s":114.29,"e":116.14,"text":"so if you threw a ball in,","words":[["so",114.29],["if",114.48],["you",114.68],["threw",114.97],["a",115.46],["ball",115.55],["in",115.94]]},
    {"s":116.44,"e":118.07,"text":"it couldn't stop inside.","words":[["it",116.44],["couldnt",116.61],["stop",117.21],["inside",117.55]]},
    {"s":118.62,"e":120.92,"text":"It would roll right back to the fire.","words":[["it",118.62],["would",118.77],["roll",119.17],["right",119.49],["back",119.89],["to",120.2],["the",120.36],["fire",120.6]]},
    {"s":121.47,"e":124.51,"text":"Romans also lined up their rooms by heat.","words":[["romans",121.47],["also",122.02],["lined",122.39],["up",122.85],["their",123.03],["rooms",123.49],["by",123.95],["heat",124.14]]},
    {"s":125.06,"e":127.07,"text":"The caldarium, the hot room,","words":[["the",125.06],["caldarium",125.33],["the",126.15],["hot",126.43],["room",126.7]]},
    {"s":127.37,"e":129.25,"text":"sat closest to the furnace.","words":[["sat",127.37],["closest",127.63],["to",128.23],["the",128.4],["furnace",128.65]]},
    {"s":129.8,"e":131.49,"text":"Next came the warm room,","words":[["next",129.8],["came",130.16],["the",130.51],["warm",130.78],["room",131.14]]},
    {"s":131.79,"e":133.05,"text":"the tepidarium.","words":[["the",131.79],["tepidarium",132.08]]},
    {"s":133.6,"e":136.44,"text":"And the cold plunge pool, the frigidarium,","words":[["and",133.6],["the",133.85],["cold",134.1],["plunge",134.44],["pool",134.94],["the",135.27],["frigidarium",135.52]]},
    {"s":136.74,"e":138.17,"text":"sat farthest away.","words":[["sat",136.74],["farthest",137.02],["away",137.79]]},
    {"s":138.72,"e":140.44,"text":"So, how hot did it get?","words":[["so",138.72],["how",138.94],["hot",139.26],["did",139.58],["it",139.9],["get",140.11]]},
    {"s":140.99,"e":143.92,"text":"In modern tests on rebuilt Roman baths,","words":[["in",140.99],["modern",141.17],["tests",141.72],["on",142.18],["rebuilt",142.36],["roman",143.0],["baths",143.46]]},
    {"s":144.22,"e":147.44,"text":"the floors reached twenty to fifty degrees Celsius.","words":[["the",144.22],["floors",144.44],["reached",144.89],["twenty",145.42],["to",145.87],["fifty",146.02],["degrees",146.39],["celsius",146.92]]},
    {"s":147.99,"e":151.24,"text":"Hot enough that bathers wore wooden-soled sandals.","words":[["hot",147.99],["enough",148.22],["that",148.69],["bathers",149.0],["wore",149.54],["woodensoled",149.85],["sandals",150.7]]},
    {"s":151.79,"e":155.01,"text":"The hot room's air sat around thirty-two degrees,","words":[["the",151.79],["hot",152.04],["rooms",152.29],["air",152.7],["sat",152.95],["around",153.2],["thirtytwo",153.69],["degrees",154.43]]},
    {"s":155.31,"e":156.53,"text":"thick with steam.","words":[["thick",155.31],["with",155.75],["steam",156.1]]},
    {"s":157.08,"e":159.07,"text":"And all of it ran on wood.","words":[["and",157.08],["all",157.4],["of",157.71],["it",157.92],["ran",158.13],["on",158.44],["wood",158.65]]},
    {"s":159.62,"e":162.35,"text":"The giant Baths of Caracalla in Rome","words":[["the",159.62],["giant",159.89],["baths",160.35],["of",160.8],["caracalla",160.99],["in",161.81],["rome",161.99]]},
    {"s":162.65,"e":165.61,"text":"reportedly burned around ten tons of wood,","words":[["reportedly",162.65],["burned",163.5],["around",164.01],["ten",164.51],["tons",164.77],["of",165.1],["wood",165.27]]},
    {"s":165.91,"e":167.25,"text":"every single day.","words":[["every",165.91],["single",166.39],["day",166.96]]},
    {"s":167.8,"e":169.57,"text":"When the empire fell apart,","words":[["when",167.8],["the",168.12],["empire",168.36],["fell",168.85],["apart",169.17]]},
    {"s":169.87,"e":172.2,"text":"so did the skills and the labor","words":[["so",169.87],["did",170.06],["the",170.34],["skills",170.62],["and",171.17],["the",171.45],["labor",171.73]]},
    {"s":172.5,"e":174.55,"text":"that kept these furnaces burning.","words":[["that",172.5],["kept",172.79],["these",173.08],["furnaces",173.45],["burning",174.04]]},
    {"s":175.1,"e":176.16,"text":"For centuries,","words":[["for",175.1],["centuries",175.37]]},
    {"s":176.46,"e":179.88,"text":"much of Europe went back to smoky open fires.","words":[["much",176.46],["of",176.84],["europe",177.03],["went",177.6],["back",177.98],["to",178.36],["smoky",178.55],["open",179.02],["fires",179.4]]},
    {"s":180.43,"e":182.46,"text":"But the idea never died.","words":[["but",180.43],["the",180.75],["idea",181.07],["never",181.5],["died",182.03]]},
    {"s":183.01,"e":185.17,"text":"In Korea, the ondol system","words":[["in",183.01],["korea",183.22],["the",183.73],["ondol",184.04],["system",184.55]]},
    {"s":185.47,"e":189.26,"text":"runs fire smoke under the floor in a very similar way.","words":[["runs",185.47],["fire",185.82],["smoke",186.17],["under",186.61],["the",187.05],["floor",187.32],["in",187.76],["a",187.94],["very",188.03],["similar",188.38],["way",189.0]]},
    {"s":189.81,"e":192.03,"text":"And today's underfloor heating","words":[["and",189.81],["todays",190.07],["underfloor",190.58],["heating",191.44]]},
    {"s":192.33,"e":194.82,"text":"does exactly what the Romans did:","words":[["does",192.33],["exactly",192.7],["what",193.35],["the",193.71],["romans",193.99],["did",194.54]]},
    {"s":195.12,"e":196.36,"text":"warm the floor,","words":[["warm",195.12],["the",195.53],["floor",195.84]]},
    {"s":196.66,"e":198.1,"text":"and let the heat rise.","words":[["and",196.66],["let",196.92],["the",197.17],["heat",197.42],["rise",197.76]]},
    {"s":198.65,"e":200.96,"text":"Just with pipes instead of pillars,","words":[["just",198.65],["with",198.97],["pipes",199.29],["instead",199.68],["of",200.24],["pillars",200.4]]},
    {"s":201.26,"e":203.29,"text":"and nobody shoveling wood.","words":[["and",201.26],["nobody",201.54],["shoveling",202.09],["wood",202.92]]},
    {"s":203.84,"e":205.81,"text":"Would you trade your radiator","words":[["would",203.84],["you",204.23],["trade",204.47],["your",204.87],["radiator",205.18]]},
    {"s":206.11,"e":207.58,"text":"for a Roman floor?","words":[["for",206.11],["a",206.43],["roman",206.53],["floor",207.06]]}
  ];
  const BEATS = PH.map((p, i) => ({ id: 'p' + i, s: p.s, e: p.e, text: p.text, w: Object.fromEntries(p.words.slice().reverse()) }));
  const T = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const at = (i, w) => T(i, w) - 0.12;          // a piece set at st shows on the first 12 fps frame >= st: lands 0.04-0.12 s early
  const PS = (i) => BEATS[i].s, PE = (i) => BEATS[i].e;
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;

  // ---------- clay engine (from the reference: baked lit plasticine sprites) ----------
  const nrm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
  const LIGHT = nrm([-0.5, -0.66, 0.58]);
  const HALF = nrm([LIGHT[0], LIGHT[1], LIGHT[2] + 1]);
  const SEQ = { pop: [[0.5, 0.42], [1.16, 0.8], [0.9, 1.14], [1.04, 0.97], [1, 1]] };
  const CLX = {};
  const cnz = () => CLX.nz || (CLX.nz = H.makeNoise(8));
  const bake = (key, w, h, o) => {
    if (CLX[key]) return CLX[key];
    const nz = cnz(), R = o.R || 14, pad = Math.ceil(R * 2 + 6), ox = o.ox || 0, oy = o.oy || 0;
    const W2 = Math.ceil(w + pad * 2), H2 = Math.ceil(h + pad * 2);
    const M = H.layer(W2, H2), mc = M.getContext('2d', { willReadFrequently: true });
    mc.translate(pad, pad); mc.fillStyle = '#fff'; mc.strokeStyle = '#fff'; o.draw(mc);
    const ds = 3, sw = Math.ceil(W2 / ds), sh = Math.ceil(H2 / ds);
    const Bs = H.layer(sw, sh), bsc = Bs.getContext('2d'); bsc.filter = `blur(${R / ds}px)`; bsc.drawImage(M, 0, 0, sw, sh);
    const B = H.layer(W2, H2), bc = B.getContext('2d', { willReadFrequently: true }); bc.drawImage(Bs, 0, 0, W2, H2);
    const md = mc.getImageData(0, 0, W2, H2).data, bd = bc.getImageData(0, 0, W2, H2).data;
    const Hh = new Float32Array(W2 * H2), A = new Float32Array(W2 * H2), lump = o.lump ?? 1.2, seed = o.seed || 1;
    for (let y = 0; y < H2; y++) for (let x = 0; x < W2; x++) {
      const i = y * W2 + x, a = bd[i * 4 + 3] / 255, ap = H.clamp((a - 0.42) / 0.58);
      A[i] = ap;
      if (!md[i * 4 + 3]) continue;
      const X = x + ox, Y = y + oy;
      Hh[i] = Math.sqrt(1 - (1 - ap) * (1 - ap)) * R * (o.dome ?? 1.1) + nz.n2(X * 0.025 + seed, Y * 0.025) * lump + nz.n2(X * 0.11 + (o.boil || 0) * 1.7, Y * 0.11 + seed) * 0.35;
    }
    (o.fps || []).forEach((f) => {
      const R2 = f[2], ang = f[3], ca = Math.cos(ang), sa = Math.sin(ang);
      for (let y = Math.max(0, Math.floor(f[1] + pad - R2)); y <= Math.min(H2 - 1, f[1] + pad + R2); y++) for (let x = Math.max(0, Math.floor(f[0] + pad - R2)); x <= Math.min(W2 - 1, f[0] + pad + R2); x++) {
        const dx0 = x - pad - f[0], dy0 = y - pad - f[1], dx = dx0 * ca + dy0 * sa, dy = (-dx0 * sa + dy0 * ca) * 1.45, d = Math.hypot(dx, dy);
        if (d >= R2) continue;
        Hh[y * W2 + x] += Math.sin(d * 1.6 + nz.n2(dx * 0.06 + ang, dy * 0.06) * 2.5) * 0.22 * Math.pow(1 - d / R2, 1.5) * H.smooth(-0.6, 0.4, Math.cos(Math.atan2(dy, dx) - ang * 2));
      }
    });
    (o.marks || []).forEach((m) => {
      const [ax, ay, bx, by] = m.map((v, i) => (i < 4 ? v + pad : v)), vx = bx - ax, vy = by - ay, L2 = vx * vx + vy * vy || 1, dep = m[4] || 1.2;
      for (let y = Math.max(0, Math.floor(Math.min(ay, by) - 9)); y <= Math.min(H2 - 1, Math.max(ay, by) + 9); y++) for (let x = Math.max(0, Math.floor(Math.min(ax, bx) - 9)); x <= Math.min(W2 - 1, Math.max(ax, bx) + 9); x++) {
        const u = H.clamp(((x - ax) * vx + (y - ay) * vy) / L2), d = Math.hypot(x - ax - vx * u, y - ay - vy * u);
        if (d > 8) continue;
        Hh[y * W2 + x] += Math.sin(Math.PI * Math.min(1, u * 1.05 + 0.02)) * (-dep * Math.exp((-d * d) / (o.markW || 3.2)) + 0.4 * dep * Math.exp(-((d - 3.4) ** 2) / 2));
      }
    });
    const out = mc.createImageData(W2, H2), od = out.data, base = H.hex(o.color), sss = o.sss || [1.12, 0.92, 0.85];
    for (let y = 1; y < H2 - 1; y++) for (let x = 1; x < W2 - 1; x++) {
      const i = y * W2 + x, ma = md[i * 4 + 3];
      if (!ma) continue;
      const n = nrm([-(Hh[i + 1] - Hh[i - 1]) * 0.5, -(Hh[i + W2] - Hh[i - W2]) * 0.5, 1]);
      const diff = H.clamp((n[0] * LIGHT[0] + n[1] * LIGHT[1] + n[2] * LIGHT[2] + 0.42) / 1.42);
      const spec = Math.pow(Math.max(0, n[0] * HALF[0] + n[1] * HALF[1] + n[2] * HALF[2]), 26) * (o.spec ?? 0.3);
      const k = (0.3 + 0.86 * diff) * (0.72 + 0.28 * Math.min(1, A[i] * 1.4)), sh2 = 1 - diff, k4 = i * 4;
      od[k4] = Math.min(255, base[0] * k * (1 + (sss[0] - 1) * sh2) + spec * 255);
      od[k4 + 1] = Math.min(255, base[1] * k * (1 + (sss[1] - 1) * sh2) + spec * 245);
      od[k4 + 2] = Math.min(255, base[2] * k * (1 + (sss[2] - 1) * sh2) + spec * 230);
      od[k4 + 3] = ma;
    }
    const O = H.layer(W2, H2); O.getContext('2d').putImageData(out, 0, 0); O.pad = pad; O.w = w; O.h = h;
    return (CLX[key] = O);
  };
  const prn = (seed, w, h, n, R) => { const r = H.rng(seed); return Array.from({ length: n }, () => [r.range(w * 0.15, w * 0.85), r.range(h * 0.15, h * 0.85), R * r.range(0.7, 1.2), r() * 50]); };
  const FR = (px) => `700 ${px}px "Fredoka"`;
  const mctx = () => CLX.m || (CLX.m = H.layer(4, 4).getContext('2d'));
  const glyph = (ch, px, col) => {
    const c = mctx(); c.font = FR(px); const w = Math.ceil(c.measureText(ch).width) + 4, h = Math.ceil(px * 1.05);
    return bake('g' + ch + px + col, w, h, { R: Math.max(4, px * 0.075), dome: 1.3, lump: 0.8, seed: ch.charCodeAt(0), color: col, draw: (x) => { x.font = FR(px); x.fillText(ch, 2, px * 0.82); }, fps: px > 60 ? prn(ch.charCodeAt(0) + px, w, h, 1, px * 0.18) : [] });
  };
  const PAL = ['#f2c14e', '#f07b5a', '#f6efe3', '#ef8fb0', '#a8dd8a', '#7fd0e0'];
  const C = { cream: '#f6efe3', yellow: '#f2c14e', coral: '#f07b5a', pink: '#ef8fb0', green: '#a8dd8a', cyan: '#7fd0e0', red: '#d9473b', dkgreen: '#4f9a52', ink: '#2e3760', brick: '#c76b3c', stone: '#d8cfbf', conc: '#b9b1a3', wood: '#8a5a3a', skin: '#e8a77c', smoke: '#cfc8c0', hot: '#f07b3a', flame: '#f6c14e', soot: '#2a140e', blue: '#5fa7d6' };

  // ---------- per-frame state ----------
  let TQ = 0, FRN = 0, X = 0, ctxG = null, REC = null;   // TQ: time on twos; X: exit time of the current scene
  const place = (ctx, spr, x, y, o = {}) => {
    if (!spr || REC) return;
    const ax = o.ax ?? spr.w / 2, ay = o.ay ?? spr.h;
    ctx.save();
    if (o.alpha != null) ctx.globalAlpha = o.alpha;
    if (o.shadow !== false) { const s = o.shadow || {}; ctx.shadowColor = `rgba(40,20,10,${s.a ?? 0.4})`; ctx.shadowBlur = s.blur ?? 10; ctx.shadowOffsetX = s.dx ?? 6; ctx.shadowOffsetY = s.dy ?? 7; }
    ctx.translate(x + ax, y + ay); if (o.rot) ctx.rotate(o.rot); ctx.scale(o.sx ?? 1, o.sy ?? 1); ctx.translate(-ax, -ay);
    ctx.drawImage(spr, -spr.pad, -spr.pad); ctx.restore();
  };
  // stepped life of a piece: pops on (squash & stretch), then leaves by falling / sliding
  const life = (st, en, seed = 0, mode = 'fall') => {
    if (TQ + 1e-6 < st) return null;
    const k = Math.floor((TQ - st) * 12 + 1e-6), e = SEQ.pop[Math.min(4, k >> 1)];
    let sx = e[0], sy = e[1], dx = 0, dy = 0, rot = 0;
    if (en != null && TQ >= en) {
      const d = TQ - en + 1 / 12;
      if (mode === 'fall') { dy = 2400 * d * d; rot = ((((seed * 37) % 10) / 10) - 0.5) * d * 5; }
      else if (mode === 'right') dx = 2600 * d * d;
      else if (mode === 'left') dx = -2600 * d * d;
      else if (mode === 'up') dy = -2400 * d * d;
      if (Math.abs(dy) > 950 || Math.abs(dx) > 1500) return null;
    }
    return { sx, sy, dx, dy, rot };
  };
  const rec = (e) => { if (REC) REC.push(e); };
  const wordW = (str, px) => { const c = mctx(); c.font = FR(px); let w = 0; for (const ch of str) w += c.measureText(ch).width + px * 0.04; return w; };
  // pressed clay letters, one per frame step
  const word = (str, x, y, px, st, en, mode = 'fall', cols = PAL, step = 1 / 24, colOff = 0, hit) => {
    const c = mctx(); c.font = FR(px);
    let cx = x, i = 0;
    if (REC) { rec({ k: 'word', t: st, n: [...str].filter((ch) => ch !== ' ').length, step, x, w: wordW(str, px), px, hit }); if (en != null) rec({ k: 'exit', t: en, mode, x, n: str.length, px }); }
    for (const ch of str) {
      const w = c.measureText(ch).width;
      if (ch !== ' ') {
        const L = life(st + i * step, en == null ? null : en + (mode === 'fall' ? i * (1 / 48) : 0), i + colOff, mode);
        if (L) {
          const jr = H.rng(ch.charCodeAt(0) * 7 + i + colOff);
          const col = typeof cols === 'string' ? cols : cols[(i + colOff) % cols.length];
          place(ctxG, glyph(ch, px, col), cx + L.dx, y - px * 0.82 + L.dy, { sx: L.sx, sy: L.sy, rot: (jr() - 0.5) * 0.14 + L.rot, shadow: { blur: px * 0.09, dx: px * 0.05, dy: px * 0.07, a: 0.45 } });
        }
      }
      cx += w + px * 0.04; i++;
    }
    return cx;
  };
  const wordC = (str, cx, y, px, st, en, mode, cols, step, colOff, hit) => word(str, cx - wordW(str, px) / 2, y, px, st, en, mode, cols, step, colOff, hit);
  // contact AO under anything resting on the table
  const contact = (cx, cy, rx, ry, a = 0.45) => {
    if (REC) return;
    const AO = CLX.ao || (CLX.ao = (() => { const Cv = H.layer(240, 100), c = Cv.getContext('2d'); c.filter = 'blur(10px)'; c.fillStyle = 'rgb(70,20,5)'; c.beginPath(); c.ellipse(120, 50, 90, 22, 0, 0, TAU); c.fill(); return Cv; })());
    ctxG.save(); ctxG.globalAlpha = a; ctxG.drawImage(AO, cx - (rx * 120) / 90, cy - (ry * 50) / 22, (rx * 240) / 90, (ry * 100) / 22); ctxG.restore();
  };
  // a prop: o.mode exit mode, o.seed, o.ct = [rx, ry] contact shadow under its base, o.big / o.hit for the sound
  const obj = (spr, x, y, st, en, o = {}) => {
    if (REC) { rec({ k: 'obj', t: st, x: x + spr.w / 2, w: spr.w, big: o.big, hit: o.hit, minor: o.minor }); if (en != null) rec({ k: 'exit', t: en, mode: o.mode || 'fall', x: x + spr.w / 2, n: 1 }); return null; }
    const L = life(st, en, o.seed || 0, o.mode || 'fall'); if (!L) return null;
    if (o.ct && L.dy < 40 && L.dx === 0) contact(x + spr.w / 2 + L.dx, y + spr.h + (o.ct[2] || 4), o.ct[0] * L.sx, o.ct[1], o.ct[3] ?? 0.5);
    place(ctxG, spr, x + L.dx, y + L.dy, { ...o, sx: (o.sx ?? 1) * L.sx, sy: (o.sy ?? 1) * L.sy, rot: (o.rot || 0) + L.rot });
    return L;
  };
  // rolled clay coil (arrow if head !== false)
  const coil = (key, pts, col, st, en, o = {}) => {
    if (REC) { rec({ k: 'coil', t: st, x: pts[0][0] }); if (en != null) rec({ k: 'exit', t: en, mode: o.mode || 'fall', x: pts[0][0], n: 1 }); return; }
    const L = life(st, en, o.seed || 3, o.mode || 'fall'); if (!L) return;
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; pts.forEach(([x, y]) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); });
    x0 -= 30; y0 -= 30; x1 += 30; y1 += 30;
    const spr = bake('coil' + key, x1 - x0, y1 - y0, { R: 7, dome: 1.3, lump: 0.6, seed: key.length * 7, color: col, draw: (c) => {
      c.translate(-x0, -y0); c.lineCap = 'round'; c.lineJoin = 'round'; c.lineWidth = o.wdt || 16;
      c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.stroke();
      if (o.head !== false) {
        const [ex, ey] = pts[pts.length - 1], [px, py] = pts[pts.length - 2], a = Math.atan2(ey - py, ex - px), hs = (o.wdt || 16) / 16;
        c.beginPath(); c.moveTo(ex + Math.cos(a) * 22 * hs, ey + Math.sin(a) * 22 * hs); c.lineTo(ex + Math.cos(a + 2.3) * 26 * hs, ey + Math.sin(a + 2.3) * 26 * hs); c.lineTo(ex + Math.cos(a - 2.3) * 26 * hs, ey + Math.sin(a - 2.3) * 26 * hs); c.closePath(); c.fill();
      }
    } });
    place(ctxG, spr, x0 + L.dx, y0 + L.dy, { sx: L.sx, sy: L.sy, ax: pts[0][0] - x0, ay: pts[0][1] - y0, rot: L.rot, shadow: { blur: 6, dx: 4, dy: 6, a: 0.4 } });
  };
  const curve = (ax, ay, cx, cy, bx, by, n = 20) => Array.from({ length: n + 1 }, (_, i) => { const u = i / n; return [(1 - u) * (1 - u) * ax + 2 * u * (1 - u) * cx + u * u * bx, (1 - u) * (1 - u) * ay + 2 * u * (1 - u) * cy + u * u * by]; });
  const wiggle = (x, y, h, amp = 12, n = 16) => Array.from({ length: n + 1 }, (_, i) => [x + Math.sin((i / n) * TAU * 1.5) * amp, y - (i / n) * h]);
  // stepped squash pulse when a piece is named: returns [sx, sy]
  const bump = (t0) => { if (TQ < t0 || TQ >= t0 + 0.5) return [1, 1]; const k = Math.floor((TQ - t0) * 12 + 1e-6) >> 1; return [[1.12, 0.86], [0.94, 1.1], [1.04, 0.97], [1, 1]][Math.min(3, k)]; };
  // stepped ease (moves the animator would do in a few exposures)
  const step6 = (t0, dur = 0.5, n = 6) => Math.round(H.ease.inOut(H.clamp((TQ - t0) / dur)) * n) / n;
  const cam = (sc, fx, fy, fn) => { ctxG.save(); ctxG.translate(fx, fy); ctxG.scale(sc, sc); ctxG.translate(-fx, -fy); fn(); ctxG.restore(); };

  // ---------- sprites ----------
  const SP = {
    ball: (col, r, seed = 1, spec = 0.5) => bake('ball' + col + r, r * 2, r * 2, { R: Math.max(4, r * 0.45), dome: 1.3, lump: 0.4, seed, color: col, spec, draw: (c) => { c.beginPath(); c.arc(r, r, r, 0, TAU); c.fill(); } }),
    rect: (key, w, h, col, rad = 10, o = {}) => bake('rect' + key, w, h, { R: o.R || Math.min(12, Math.min(w, h) * 0.35), dome: o.dome ?? 0.9, lump: o.lump ?? 1, seed: o.seed || (w * 3 + h), color: col, sss: o.sss, spec: o.spec, draw: (c) => { c.beginPath(); c.roundRect(0, 0, w, h, rad); c.fill(); }, fps: o.fps ?? prn((o.seed || w) + 3, w, h, 1, Math.min(w, h) * 0.3), marks: o.marks, markW: o.markW }),
    shape: (key, w, h, col, draw, o = {}) => bake('shp' + key, w, h, { R: o.R || 12, dome: o.dome ?? 1.1, lump: o.lump ?? 1, seed: o.seed || key.length * 13, color: col, spec: o.spec, sss: o.sss, boil: o.boil, draw, fps: o.fps ?? prn(key.length * 7 + w, w, h, 1, Math.min(w, h) * 0.25), marks: o.marks, markW: o.markW }),
    flame: (b, s = 1) => SP.shape('flame' + b + s, 70 * s, 110 * s, C.hot, (c) => { const w = 70 * s, h = 110 * s, j = [0, 6, -5][b] * s; c.beginPath(); c.moveTo(w / 2 + j, 0); c.bezierCurveTo(w * 0.95, h * 0.45, w, h * 0.7, w / 2, h); c.bezierCurveTo(0, h * 0.7, w * 0.05, h * 0.45, w / 2 + j, 0); c.fill(); }, { R: 10 * s, lump: 0.8, seed: 300 + b, boil: b, spec: 0.5 }),
    flameIn: (b, s = 1) => SP.shape('flin' + b + s, 40 * s, 62 * s, C.flame, (c) => { const w = 40 * s, h = 62 * s, j = [0, -4, 4][b] * s; c.beginPath(); c.moveTo(w / 2 + j, 0); c.bezierCurveTo(w, h * 0.5, w, h * 0.75, w / 2, h); c.bezierCurveTo(0, h * 0.75, 0, h * 0.5, w / 2 + j, 0); c.fill(); }, { R: 7 * s, lump: 0.5, seed: 310 + b, boil: b, spec: 0.6 }),
    log: (n = 0) => SP.rect('log' + n, 130, 34, C.wood, 16, { seed: 320 + n, marks: [[10, 10, 110, 12, 1.4], [20, 22, 120, 20, 1.2], [8, 17, 60, 17, 1.0]], markW: 5 }),
    puff: (b, col = C.hot, s = 1) => SP.shape('puff' + b + col + s, 64 * s, 48 * s, col, (c) => { const r = H.rng(330 + b); [[20, 28, 18], [36, 20, 20], [48, 30, 15], [30, 34, 14]].forEach(([x, y, rr]) => { c.beginPath(); c.arc(x * s + r.range(-2, 2), y * s, rr * s, 0, TAU); c.fill(); }); }, { R: 9 * s, lump: 0.6, seed: 330 + b, boil: b, fps: [] }),
    xmark: () => SP.shape('xmark', 120, 120, C.red, (c) => { c.lineWidth = 28; c.lineCap = 'round'; c.beginPath(); c.moveTo(16, 16); c.lineTo(104, 104); c.moveTo(104, 16); c.lineTo(16, 104); c.stroke(); }, { R: 10, lump: 0.6, seed: 73, fps: [] }),
    check: () => SP.shape('check', 120, 100, C.dkgreen, (c) => { c.lineWidth = 26; c.lineCap = 'round'; c.lineJoin = 'round'; c.beginPath(); c.moveTo(14, 54); c.lineTo(44, 84); c.lineTo(106, 16); c.stroke(); }, { R: 10, lump: 0.6, seed: 74, fps: [] }),
    brick: (col = C.brick, w = 44, h = 22, n = 0) => SP.rect('brick' + col + w + h + n, w, h, col, 5, { R: 6, seed: 340 + n, fps: [] }),
    scroll: () => CLX.scroll || (CLX.scroll = (() => {
      const w = 420, h = 260, Cv = H.layer(w + 80, h + 80), c = Cv.getContext('2d');
      const sheet = SP.rect('sheet', 360, 220, '#efe2c2', 8, { R: 8, dome: 0.5, lump: 0.7, seed: 350, sss: [1.04, 1, 0.96], marks: [[30, 160, 200, 160, 0.8], [30, 185, 250, 185, 0.8], [30, 135, 150, 135, 0.8]] });
      const roll = SP.rect('roll', 34, 260, '#d9b98a', 16, { R: 12, seed: 351 });
      const pc = (s, x, y) => { c.save(); c.shadowColor = 'rgba(40,20,10,0.4)'; c.shadowBlur = 6; c.shadowOffsetX = 3; c.shadowOffsetY = 5; c.drawImage(s, x - s.pad + 40, y - s.pad + 40); c.restore(); };
      pc(sheet, 30, 20); pc(roll, 0, 0); pc(roll, 386, 0);
      Cv.pad = 40; Cv.w = w; Cv.h = h; return Cv;
    })()),
  };
  // composite of several sprites into one cached canvas (so a group pops as one lump)
  const group = (key, w, h, parts) => CLX['grp' + key] || (CLX['grp' + key] = (() => {
    const pad = 40, Cv = H.layer(w + pad * 2, h + pad * 2), c = Cv.getContext('2d');
    parts.forEach(([s, x, y, sh = 0.4]) => { c.save(); if (sh) { c.shadowColor = `rgba(40,20,10,${sh})`; c.shadowBlur = 6; c.shadowOffsetX = 3; c.shadowOffsetY = 5; } c.drawImage(s, x - s.pad + pad, y - s.pad + pad); c.restore(); });
    Cv.pad = pad; Cv.w = w; Cv.h = h; return Cv;
  })());

  // ---------- sets: sculpted wall + table, baked once per scene look ----------
  const SETS = {};
  const set = (key, wall, table, o = {}) => {
    if (REC) return;
    if (!SETS[key]) {
      const Cv = H.layer(W0, H0), c = Cv.getContext('2d'), nz = cnz(), seed = key.length * 31 + (o.seed || 0);
      const [r, g, b] = H.hex(wall); c.fillStyle = H.rgba([r * 0.8, g * 0.8, b * 0.8]); c.fillRect(0, 0, W0, H0);
      const ty = o.ty ?? 500;
      const wl = bake('wall' + key, W0, ty + 20, { R: 4, dome: 0, lump: 3.2, seed, color: wall, spec: 0.12, draw: (x) => x.fillRect(-30, -30, W0 + 60, ty + 80), fps: prn(seed + 11, W0, ty - 30, 12, 30), markW: 14, marks: (o.wallMarks || (() => { const rr = H.rng(seed + 5); return Array.from({ length: 8 }, () => { const x = rr.range(20, W0), y = rr.range(20, ty - 20), a = rr() * TAU, l = rr.range(50, 110); return [x, y, x + Math.cos(a) * l, y + Math.sin(a) * l, 1.0]; }); })()) });
      c.save(); c.filter = 'blur(1.6px)'; c.drawImage(wl, -wl.pad, -wl.pad); c.restore();
      const lx = o.light ? o.light[0] : 620, ly = o.light ? o.light[1] : 220;
      const gr = c.createRadialGradient(lx, ly, 30, lx + 20, ly + 80, 760); gr.addColorStop(0, `rgba(255,240,200,${o.glow ?? 0.22})`); gr.addColorStop(1, 'rgba(10,20,30,0.35)');
      c.fillStyle = gr; c.fillRect(0, 0, W0, H0);
      const tab = bake('table' + key, W0 + 80, H0 - ty + 20, { R: 22, dome: 1.0, lump: 2.4, seed: seed + 80, color: table, draw: (x) => { x.beginPath(); x.moveTo(0, 14); for (let X = 0; X <= W0 + 80; X += 20) x.lineTo(X, 6 + nz.n2(X * 0.01, seed) * 8); x.lineTo(W0 + 80, 300); x.lineTo(0, 300); x.closePath(); x.fill(); }, fps: prn(seed + 81, W0, 200, 7, 30), marks: o.tableMarks || (() => { const rr = H.rng(seed + 82); return Array.from({ length: 6 }, () => { const x = rr.range(40, W0), y = rr.range(40, 200), a = rr() * TAU, l = rr.range(50, 110); return [x, y, x + Math.cos(a) * l, y + Math.sin(a) * l, 1.2]; }); })(), markW: 16 });
      c.save(); c.shadowColor = 'rgba(40,20,10,0.35)'; c.shadowBlur = 30; c.shadowOffsetY = -10; c.drawImage(tab, -40 - tab.pad, ty - tab.pad); c.restore();
      const g2 = c.createLinearGradient(0, ty + 100, 0, H0); g2.addColorStop(0, 'rgba(60,20,10,0)'); g2.addColorStop(1, 'rgba(60,20,10,0.35)');
      c.fillStyle = g2; c.fillRect(0, ty + 100, W0, H0 - ty);
      SETS[key] = Cv;
    }
    ctxG.drawImage(SETS[key], 0, 0);
  };
  const TOP = 508; // table top line on the sets (pieces rest here)

  // ---------- lens finish (every frame, as the reference) ----------
  const finish = (ctx) => {
    ctx.save(); ctx.globalCompositeOperation = 'soft-light';
    const gg = ctx.createLinearGradient(0, 0, W0, H0); gg.addColorStop(0, 'rgba(255,220,170,0.5)'); gg.addColorStop(1, 'rgba(40,60,90,0.4)');
    ctx.fillStyle = gg; ctx.fillRect(0, 0, W0, H0); ctx.restore();
    H.vignette(ctx, W0, H0, 0.42, '20,12,8');
    { const f = (H.rng(900 + FRN)() - 0.5) * 0.06; ctx.fillStyle = f > 0 ? `rgba(255,240,220,${f})` : `rgba(0,0,0,${-f})`; ctx.fillRect(0, 0, W0, H0); }
    H.grain(ctx, W0, H0, 0.03, 4 + FRN);
  };

  // ---------- scenes ----------
  const SC = [];
  const scene = (s, name, draw) => SC.push({ s, name, draw });
  // ======================= CHAPTER 1: the question and who came up with it =======================
  // 1. HOOK: the question pressed onto the wall; a plug and its wire get a red clay X
  scene(0, 'hook', () => {
    set('hook', '#4f9fae', '#d0703f');
    wordC('How did Romans', 640, 190, 92, at(0, 'how'), X, 'fall', PAL, 1 / 24);
    wordC('heat their floors?', 640, 310, 100, at(0, 'heat'), X, 'fall', PAL, 1 / 24, 3);
    const plug = group('plug', 230, 110, [
      [SP.rect('plugbody', 130, 96, C.cream, 18, { seed: 360 }), 0, 7],
      [SP.rect('prong', 70, 18, '#e0b84a', 6, { R: 6, seed: 361, spec: 0.7, fps: [] }), 126, 24],
      [SP.rect('prong', 70, 18, '#e0b84a', 6, { R: 6, seed: 361, spec: 0.7, fps: [] }), 126, 66],
    ]);
    coil('wire', curve(300, 470, 420, 520, 545, 462, 16), '#33333d', at(1, 'single'), X, { head: false, wdt: 18 });
    obj(plug, 530, TOP - 112, at(1, 'without'), X, { ct: [110, 10], seed: 2 });
    obj(SP.xmark(), 575, 380, at(1, 'wire'), X, { rot: 0.1, hit: 'slap', big: true, seed: 3 });
  });

  // 2. WINTER: 2,000 years ago, snow falling on a stone floor, a bare foot, and it's WARM
  scene(PS(2) - 0.15, 'winter', () => {
    set('winter', '#3b5b8a', '#a9a9ad', { glow: 0.15, tableMarks: [[100, 60, 1200, 60, 1.6], [60, 140, 1240, 140, 1.6], [300, 20, 260, 200, 1.6], [640, 20, 620, 200, 1.6], [980, 20, 1000, 200, 1.6]] });
    // snow on twos: seeded flakes drifting down
    if (TQ >= at(3, 'winter') && !REC) {
      const r = H.rng(77), t0 = at(3, 'winter');
      for (let i = 0; i < 26; i++) {
        const x0 = r.range(20, 1260), sp = r.range(70, 120), ph = r.range(0, 600), rr = r.int(6, 10);
        const y = ((TQ - t0) * sp + ph) % 640 - 40, x = x0 + Math.sin(TQ * 1.5 + i) * 12;
        if (TQ - t0 < 0.4 && y > (TQ - t0) * 1600) continue;
        place(ctxG, SP.ball('#f4f6fb', rr, 5 + i % 3, 0.6), x, y, { shadow: { blur: 4, dx: 2, dy: 3, a: 0.3 } });
      }
    }
    const fall1 = at(4, 'barefoot') - 0.25;
    word('2,000', 150, 220, 140, at(2, 'two'), fall1, 'fall', C.yellow, 1 / 12);
    word('years ago', 590, 205, 64, at(2, 'years'), fall1, 'fall', C.cream, 1 / 24);
    word('winter', 600, 300, 72, at(3, 'winter'), fall1, 'fall', '#cfeeff', 1 / 24);
    const foot = group('foot', 230, 110, [
      [SP.shape('sole', 210, 70, C.skin, (c) => { c.beginPath(); c.ellipse(105, 40, 104, 30, 0, 0, TAU); c.fill(); c.beginPath(); c.ellipse(40, 20, 40, 34, 0, 0, TAU); c.fill(); }, { R: 16, seed: 362 }), 0, 30],
      ...[0, 1, 2, 3, 4].map((i) => [SP.ball(C.skin, 13 - i * 1.4, 363 + i, 0.35), 172 + i * 2 - i * i * 3, 26 + i * 14, 0.3]),
    ]);
    obj(foot, 470, TOP - 118, at(4, 'walk'), X, { ct: [120, 10], seed: 4 });
    word('barefoot', 760, 470, 56, at(4, 'barefoot'), X, 'fall', C.cream, 1 / 24);
    wordC('WARM', 640, 260, 150, at(5, 'warm'), X, 'fall', [C.coral, C.yellow, C.coral, C.yellow], 1 / 12, 0, 'ding');
    [0, 1, 2].forEach((i) => coil('steam' + i, wiggle(520 + i * 70, 385, 70, 10, 14), C.cream, at(5, 'warm') + 0.15 + i * 0.12, X, { head: false, wdt: 12, seed: i }));
  });

  // 3. THE TRICK: a floor slab with fire hiding under it -> HYPOCAUST, "heat from below"
  scene(PS(6) - 0.15, 'trick', () => {
    set('trick', '#c98a3e', '#7a5440', { glow: 0.18 });
    const gapBack = SP.rect('gapback', 760, 160, '#3a2219', 10, { R: 8, dome: 0.4, seed: 364 });
    obj(gapBack, 260, TOP - 168, at(6, 'trick'), X, { shadow: false });
    const fl = group('trickfloor', 800, 46, [[SP.rect('floorA', 800, 46, C.stone, 10, { seed: 365, marks: [100, 200, 300, 400, 500, 600, 700].map((x) => [x, 4, x, 42, 1.4]) }), 0, 0]]);
    obj(fl, 240, TOP - 214, at(6, 'trick'), X, { seed: 1 });
    [0, 1, 2, 3].forEach((i) => {
      const fx = 330 + i * 170, b = (FRN + i) % 3;
      obj(SP.flame(b, 0.9), fx, TOP - 108, at(6, 'under') + i * 0.08, X, { seed: i, shadow: { blur: 14, dx: 0, dy: 0, a: 0.25 } });
      obj(SP.flameIn(b, 0.9), fx + 15, TOP - 64, at(6, 'under') + i * 0.08 + 1 / 12, X, { seed: i, shadow: false });
    });
    [0, 1, 2].forEach((i) => coil('up' + i, [[415 + i * 170, 410], [415 + i * 170, 362]], C.yellow, at(8, 'below') + i * 0.1, X, { wdt: 12, seed: i }));
    wordC('HYPOCAUST', 640, 170, 112, at(7, 'hypocaust'), X, 'fall', PAL, 1 / 24, 0, 'impact');
    wordC('heat from below', 640, 640, 60, at(8, 'heat'), X, 'fall', C.cream, 1 / 24);
  });

  // 4. VITRUVIUS + ORATA: a scroll, a clay bust, ~95 BC
  scene(PS(9) - 0.15, 'orata', () => {
    set('orata', '#7a4f7f', '#d6b07a');
    obj(SP.scroll(), 70, 150, at(9, 'roman'), X, { seed: 1, ct: [210, 12] });
    word('Vitruvius', 135, 260, 54, at(9, 'vitruvius'), X, 'fall', '#5a2e1c', 1 / 24);
    word('writer', 140, 330, 40, at(9, 'writer'), X, 'fall', '#8a5a3a', 1 / 24);
    coil('credit', curve(500, 250, 640, 160, 790, 230, 16), C.cream, at(10, 'credits'), X, { wdt: 14 });
    const bust = group('bust', 260, 300, [
      [SP.shape('toga', 260, 130, C.cream, (c) => { c.beginPath(); c.ellipse(130, 90, 128, 80, 0, Math.PI, 0); c.lineTo(258, 130); c.lineTo(2, 130); c.closePath(); c.fill(); }, { R: 18, seed: 366, marks: [[60, 60, 140, 128, 2], [90, 45, 170, 128, 2], [180, 40, 220, 120, 1.8]], markW: 6 }), 0, 170],
      [SP.shape('neck', 70, 60, C.skin, (c) => c.fillRect(0, 0, 70, 60), { R: 10, seed: 367, fps: [] }), 95, 130],
      [SP.shape('head', 140, 160, C.skin, (c) => { c.beginPath(); c.ellipse(70, 82, 64, 78, 0, 0, TAU); c.fill(); }, { R: 20, seed: 368 }), 60, 0],
      [SP.shape('hair', 150, 70, '#5a3b2c', (c) => { c.beginPath(); c.ellipse(75, 50, 72, 40, 0, Math.PI, 0); c.lineTo(147, 66); c.lineTo(3, 66); c.closePath(); c.fill(); }, { R: 10, seed: 369, marks: [[20, 30, 40, 60, 1.6], [50, 18, 66, 58, 1.6], [86, 18, 96, 58, 1.6], [116, 26, 126, 60, 1.6]], markW: 4 }), 55, -10],
      [SP.ball('#23202a', 8, 370, 0.9), 98, 70, 0.3], [SP.ball('#23202a', 8, 371, 0.9), 150, 70, 0.3],
      [SP.shape('nose', 26, 34, '#de9466', (c) => { c.beginPath(); c.ellipse(13, 17, 12, 17, 0, 0, TAU); c.fill(); }, { R: 7, seed: 372, fps: [] }), 117, 84, 0.3],
      [SP.shape('mouth', 46, 14, '#9a4a3a', (c) => { c.beginPath(); c.ellipse(23, 7, 22, 6, 0, 0, TAU); c.fill(); }, { R: 4, seed: 373, fps: [] }), 108, 128, 0.2],
    ]);
    obj(bust, 830, TOP - 300, at(10, 'businessman'), X, { ct: [130, 12], seed: 2 });
    wordC('Sergius Orata', 960, 170, 58, at(10, 'sergius'), X, 'fall', [C.yellow, C.cream], 1 / 24);
    word('~95 BC', 150, 640, 120, at(11, '95'), X, 'fall', C.yellow, 1 / 12, 0, 'stamp');
  });

  // 5. OYSTERS -> rich -> "hanging baths" -> every fancy villa
  scene(PS(12) - 0.15, 'oysters', () => {
    set('oysters', '#3e7f9c', '#e3c48c');
    const ex1 = at(14, 'soon') - 0.1;
    const oy = (i) => SP.shape('oyster' + i, 120, 74, '#a89f94', (c) => { c.beginPath(); c.ellipse(60, 40, 58, 32, (i - 1) * 0.15, 0, TAU); c.fill(); }, { R: 14, seed: 374 + i, marks: [[60, 70, 12, 30, 1.6], [60, 70, 34, 10, 1.6], [60, 70, 60, 8, 1.6], [60, 70, 88, 10, 1.6], [60, 70, 110, 30, 1.6]], markW: 4 });
    [0, 1, 2].forEach((i) => obj(oy(i), 70 + i * 130, TOP - 78 - (i === 1 ? 22 : 0), at(12, 'oysters') + i * 0.1, ex1, { seed: i, ct: [60, 8] }));
    obj(SP.ball('#f7f3ea', 14, 380, 0.9), 205, TOP - 112, at(12, 'oysters') + 0.4, ex1, { seed: 4 });
    wordC('oysters', 255, 360, 64, at(12, 'oysters'), ex1, 'fall', C.cream, 1 / 24);
    [0, 1, 2, 3, 4].forEach((i) => obj(SP.shape('coin', 90, 30, C.yellow, (c) => { c.beginPath(); c.ellipse(45, 15, 44, 14, 0, 0, TAU); c.fill(); }, { R: 8, seed: 381, spec: 0.7, fps: [] }), 450, TOP - 34 - i * 24, at(12, 'rich') + i * 1 / 12, ex1, { seed: i, ct: i ? null : [50, 8] }));
    word('$$$', 420, 330, 64, at(12, 'rich'), ex1, 'fall', C.yellow, 1 / 12);
    // the "hanging bath": a tub lifted on little brick stacks, steaming
    const tub = group('tub', 330, 200, [
      ...[0, 1, 2, 3].map((i) => [SP.brick(C.brick, 36, 60, 1), 30 + i * 80, 140]),
      [SP.shape('tub', 330, 120, C.cream, (c) => { c.beginPath(); c.moveTo(0, 10); c.lineTo(330, 10); c.quadraticCurveTo(320, 120, 165, 120); c.quadraticCurveTo(10, 120, 0, 10); c.fill(); c.fillRect(0, 0, 330, 20); }, { R: 16, seed: 382 }), 0, 24],
      [SP.shape('water', 290, 24, C.cyan, (c) => { c.beginPath(); c.ellipse(145, 12, 144, 11, 0, 0, TAU); c.fill(); }, { R: 6, seed: 383, spec: 0.8, fps: [] }), 20, 18, 0.2],
    ]);
    obj(tub, 800, TOP - 222, at(13, 'baths') - 0.15, X, { seed: 5, ct: [160, 12] });
    [0, 1, 2].forEach((i) => coil('tubsteam' + i, wiggle(880 + i * 85, 270, 80, 10, 14), C.cream, at(13, 'heated') + i * 0.12, X, { head: false, wdt: 12, seed: i }));
    wordC('hanging baths', 960, 150, 62, at(13, 'hanging'), X, 'fall', [C.pink, C.cream], 1 / 24);
    // the villa
    const villa = group('villa', 330, 230, [
      [SP.rect('villawall', 300, 140, C.cream, 8, { seed: 384, marks: [[60, 10, 60, 130, 2], [110, 10, 110, 130, 2], [190, 10, 190, 130, 2], [240, 10, 240, 130, 2]], markW: 5 }), 15, 90],
      [SP.rect('villadoor', 60, 80, '#5a3b2c', 28, { seed: 385, fps: [] }), 135, 150, 0.3],
      [SP.shape('roof', 330, 90, C.red, (c) => { c.beginPath(); c.moveTo(165, 0); c.lineTo(330, 90); c.lineTo(0, 90); c.closePath(); c.fill(); }, { R: 12, seed: 386, marks: [[60, 80, 165, 20, 1.4], [270, 80, 165, 20, 1.4]] }), 0, 0],
    ]);
    obj(villa, 120, TOP - 232, at(14, 'villa'), X, { seed: 6, ct: [160, 12] });
    obj(SP.check(), 470, 250, at(14, 'complete'), X, { hit: 'success', seed: 7 });
  });
  // ======================= CHAPTER 2: how it worked =======================
  const furnaceSpr = (key, col = C.brick, w = 240, h = 182) => SP.rect('furn' + key, w, h, col, 14, { R: 14, seed: 390, marks: [[10, 45, w - 10, 45, 1.6], [10, 90, w - 10, 90, 1.6], [10, 135, w - 10, 135, 1.6], [60, 4, 60, 44, 1.4], [150, 46, 150, 88, 1.4], [90, 92, 90, 132, 1.4], [190, 4, 190, 44, 1.4]], markW: 4 });
  const mouthSpr = (w = 110, h = 92) => SP.shape('mouth' + w + h, w, h, C.soot, (c) => { c.beginPath(); c.moveTo(0, h); c.lineTo(0, h * 0.45); c.quadraticCurveTo(0, 0, w / 2, 0); c.quadraticCurveTo(w, 0, w, h * 0.45); c.lineTo(w, h); c.closePath(); c.fill(); }, { R: 6, dome: 0.3, seed: 391, fps: [], spec: 0.05 });
  const fireIn = (x, y, st, en, s = 0.62, n = 3) => { for (let i = 0; i < n; i++) { const b = (FRN + i) % 3; obj(SP.flame(b, s), x + i * 40 * s * 1.1, y, st + i / 12, en, { seed: i, shadow: false, minor: true }); obj(SP.flameIn(b, s), x + i * 44 * s + 15 * s, y + 46 * s, st + (i + 1) / 12, en, { seed: i, shadow: false, minor: true }); } };

  // 6. FURNACE: "How did it work?" -> the praefurnium outside the room, lower down, fed with wood all day
  scene(PS(15) - 0.15, 'furnace', () => {
    set('furnace', '#9c4a3a', '#5d4537', { glow: 0.2 });
    wordC('How did it work?', 640, 250, 96, at(15, 'how'), at(16, 'start') - 0.2, 'fall', PAL, 1 / 24);
    obj(furnaceSpr('big', C.brick, 300, 220), 330, TOP - 220, at(16, 'furnace'), X, { ct: [170, 14], seed: 1, big: true });
    obj(mouthSpr(140, 120), 410, TOP - 122, at(16, 'furnace') + 1 / 6, X, { shadow: false, seed: 2 });
    fireIn(420, TOP - 112, at(16, 'furnace') + 0.25, X, 0.75, 3);
    wordC('praefurnium', 480, 200, 80, at(17, 'praefurnium'), X, 'fall', [C.yellow, C.coral], 1 / 24);
    // the room it heats: a clay wall to the right, the furnace sits lower
    obj(SP.rect('roomwall', 46, 330, '#e7d7bb', 10, { seed: 392, marks: [[6, 80, 40, 80, 1.4], [6, 170, 40, 170, 1.4], [6, 260, 40, 260, 1.4]] }), 760, TOP - 330, at(18, 'outside'), X, { ct: [40, 10], seed: 3 });
    word('room', 860, 330, 64, at(18, 'room'), X, 'fall', C.cream, 1 / 24);
    coil('lower', [[700, 300], [700, 380], [700, 440]], C.yellow, at(18, 'lower'), X, { wdt: 14 });
    word('lower', 860, 430, 52, at(18, 'lower'), X, 'fall', C.yellow, 1 / 24);
    [0, 1, 2].forEach((i) => obj(SP.log(i), 150 + (i % 2) * 20, TOP - 36 - i * 32, at(19, 'wood') + i * 0.12, X, { seed: i, ct: i ? null : [70, 8] }));
    wordC('wood, all day', 640, 640, 60, at(19, 'all') - 0.2, X, 'fall', C.cream, 1 / 24);
  });

  // ---- the cross-section set (scenes 7-13 share it; pieces persist, the camera moves) ----
  const SX0 = 335, SX1 = 1105, GY = TOP + 4;
  const pilX = (i) => 360 + i * 96;
  const ST = {
    floorOn: at(20, 'floor'), lift: T(21, 'lifted') - 0.1, pil: T(22, 'stacks') - 0.12,
    tiles: at(26, 'tiles'), conc: at(27, 'concrete'), floorN: at(28, 'floor'),
    furn: at(31, 'fires'), rush: at(32, 'rushed'), soak: at(34, 'soaked'),
    walls: at(36, 'hollow'), roof: at(37, 'walls'), climb: at(38, 'hot'), warmW: at(39, 'warming'), vents: at(40, 'vents'), rad: at(41, 'radiator'),
    end: PS(42) - 0.15,
  };
  const floorParts = (warm) => [
    [SP.rect('mosaic' + warm, 770, 20, warm ? '#f2a65a' : '#efe6d2', 6, { R: 7, seed: 400, marks: Array.from({ length: 14 }, (_, i) => [30 + i * 55, 3, 30 + i * 55, 17, 1.0]), markW: 3, fps: [] }), SX0, 330],
    [SP.rect('conc' + warm, 770, 36, warm ? '#d9905a' : C.conc, 8, { R: 9, seed: 401, lump: 1.6 }), SX0, 350],
    ...Array.from({ length: 8 }, (_, i) => [SP.rect('tile' + warm, 92, 16, warm ? '#e0703a' : C.brick, 4, { R: 5, seed: 402, fps: [] }), SX0 + 2 + i * 96, 386]),
  ];
  const puffPos = (i, ts) => { // hot air path: through the gap, swirling between the pillars, then up the right wall (once it exists)
    const d = (TQ - ts) * 300; if (d < 0) return null;
    const L1 = 1140 - 330;
    if (d < L1) { const x = 330 + d; return [x, 452 + Math.sin(d / 48 + i) * 26, 1]; }
    const arrive = ts + L1 / 300;
    if (arrive < ST.climb - 0.4) return d < L1 + 30 ? [1140, 452, 0.6] : null;
    const u = d - L1; if (u > 520) return null;
    return [1140 + Math.sin(u / 40 + i) * 6, 452 - u, u > 360 ? 0.8 : 1];
  };
  const section = (o = {}) => {
    const lifted = 110 * (1 - step6(ST.lift, 0.6));
    // floor: rests on the ground, then the Romans lift it up
    const parts = floorParts(false);
    const bmp = [bump(ST.floorN), bump(ST.conc), bump(ST.tiles)];
    parts.forEach(([s, x, y], j) => { const b = bmp[Math.min(2, j)]; obj(s, x, y + lifted, ST.floorOn + (j >= 2 ? (j - 2) / 48 : 0), o.ex, { seed: j, sx: b[0], sy: b[1], ax: s.w / 2, ay: s.h / 2, minor: j > 1 }); });
    // warm overlay: the floor soaks up heat (cross-fade in 6 exposures)
    const wk = step6(ST.soak, 1.0, 6);
    if (wk > 0 && !REC) floorParts(true).forEach(([s, x, y]) => place(ctxG, s, x, y, { shadow: false, alpha: wk }));
    // pilae: stacks of square bricks, row after row
    for (let i = 0; i < 8; i++) for (let b = 0; b < 5; b++) obj(SP.brick(b % 2 ? '#b85f36' : C.brick, 44, 22, b), pilX(i), GY - 22 * (b + 1), ST.pil + i * 0.42 + b / 12, o.ex, { seed: i + b, minor: true, shadow: { blur: 5, dx: 3, dy: 4, a: 0.4 }, ct: b ? null : [26, 5, 2] });
    // furnace on the left, mouth opening into the gap
    obj(furnaceSpr('sec'), 90, GY - 182, ST.furn - 0.2, o.ex, { ct: [130, 12], seed: 3 });
    obj(mouthSpr(110, 92), 220, GY - 92, ST.furn, o.ex, { shadow: false, seed: 4 });
    fireIn(226, GY - 84, ST.furn + 0.1, o.ex, 0.55, 2);
    // walls with tubuli (hollow clay flues) and the roof
    const wallW = (warm) => SP.rect('swall' + warm, 60, 400, warm ? '#f0b07a' : '#e7d7bb', 10, { seed: 403 + warm, marks: [[8, 60, 52, 60, 1.2], [8, 160, 52, 160, 1.2], [8, 260, 52, 260, 1.2], [8, 360, 52, 360, 1.2]] });
    const flue = SP.rect('flue', 22, 400, '#4a2e22', 8, { R: 5, dome: 0.3, seed: 405, fps: [] });
    obj(wallW(0), 1110, GY - 402, ST.walls, o.ex, { seed: 5, ct: [40, 8] });
    obj(SP.rect('lwall', 56, 222, '#e7d7bb', 10, { seed: 406 }), SX0 + 4, 110, ST.walls + 1 / 12, o.ex, { seed: 6 });
    obj(flue, 1129, GY - 402, at(36, 'tubuli'), o.ex, { shadow: false, seed: 7 });
    obj(SP.rect('lflue', 20, 222, '#4a2e22', 8, { R: 5, dome: 0.3, seed: 407, fps: [] }), SX0 + 22, 110, at(36, 'tubuli') + 1 / 12, o.ex, { shadow: false, seed: 8 });
    const ww = step6(ST.warmW, 0.8, 4);
    if (ww > 0 && !REC && TQ >= ST.walls) { place(ctxG, wallW(1), 1110, GY - 402, { shadow: false, alpha: ww }); }
    obj(SP.rect('roof', 790, 30, '#a8673c', 10, { seed: 408, marks: [[40, 15, 750, 15, 1.2]] }), SX0 - 15, 82, ST.roof, o.ex, { seed: 9 });
    // hot air puffs (drawn last so they swirl in front of the pillars)
    if (TQ >= ST.rush && !REC) for (let i = 0; i < 115; i++) {
      const ts = ST.rush + i * 0.22, p = puffPos(i, ts); if (!p) continue;
      if (o.ex != null && TQ >= o.ex) continue;
      const s = (0.7 + (i % 3) * 0.12) * p[2];
      place(ctxG, SP.puff((FRN + i) % 3, i % 4 === 3 ? C.coral : C.hot, 1), p[0] - 32 * s, p[1] - 24 * s, { sx: s, sy: s, ax: 32, ay: 24, shadow: { blur: 8, dx: 3, dy: 4, a: 0.3 } });
    }
    // vents: escaping air above the roof
    if (TQ >= ST.vents && !REC) for (let i = 0; i < 3; i++) { const k = ((TQ - ST.vents) * 1.4 + i / 3) % 1; place(ctxG, SP.puff(i, C.smoke, 0.8), 1115 + Math.sin(k * 6 + i) * 14, 40 - k * 120, { shadow: false, alpha: 1 - k }); }
  };
  const SECSET = () => set('section', '#5c6f7d', '#6b4a36', { glow: 0.16 });

  // 7. the floor gets lifted up
  scene(PS(20) - 0.15, 'lift', () => {
    SECSET(); section();
    wordC('floor', 720, 270, 64, at(20, 'floor'), X, 'fall', C.cream, 1 / 24);
    word('ground', 120, 640, 56, at(20, 'ground'), X, 'fall', C.yellow, 1 / 24);
    coil('liftup', [[1180, 470], [1180, 380], [1180, 300]], C.yellow, at(21, 'lifted'), X, { wdt: 16 });
    wordC('lifted up!', 640, 170, 88, at(21, 'lifted'), X, 'fall', [C.yellow, C.coral], 1 / 24);
  });
  // 8. pilae, row after row, two feet tall (camera pushes in)
  scene(PS(22) - 0.15, 'pilae', () => {
    SECSET();
    const k = 1 + 0.18 * step6(PS(22) - 0.1, 0.8, 6);
    cam(k, 700, 470, () => { section(); coil('ruler', [[338, GY - 6], [338, GY - 60], [338, GY - 104]], C.yellow, at(25, 'two'), X, { wdt: 10 }); });
    word('pilae', 50, 200, 90, at(23, 'pilae'), X, 'fall', [C.coral, C.yellow], 1 / 24, 0, 'stamp');
    word('row after row', 40, 262, 40, at(24, 'row'), X, 'fall', C.cream, 1 / 24);
    word('2 ft', 60, 470, 96, at(25, 'two'), X, 'fall', C.yellow, 1 / 12, 0, 'ding');
  });
  // 9. the layers: 2-ft tiles, concrete, the floor you walk on
  scene(PS(26) - 0.15, 'layers', () => {
    SECSET(); section();
    word('2-ft tiles', 40, 450, 44, at(26, 'twofoot'), X, 'fall', C.coral, 1 / 24);
    coil('ltiles', curve(250, 438, 300, 410, 345, 396, 12), C.coral, at(26, 'tiles'), X, { wdt: 10 });
    word('concrete', 40, 340, 44, at(27, 'concrete'), X, 'fall', C.cream, 1 / 24);
    coil('lconc', curve(230, 326, 290, 360, 345, 368, 12), C.cream, at(27, 'concrete'), X, { wdt: 10 });
    word('floor', 60, 230, 52, at(28, 'floor'), X, 'fall', C.yellow, 1 / 24);
    coil('lfloor', curve(200, 216, 290, 250, 350, 330, 12), C.yellow, at(28, 'floor'), X, { wdt: 10 });
  });
  // 10. the hollow space underneath (camera pushes into the gap)
  scene(PS(29) - 0.15, 'hollow', () => {
    SECSET();
    const k = 1 + 0.25 * step6(PS(29) - 0.1, 0.8, 6);
    cam(k, 720, 456, () => {
      section();
      [0, 1, 2].forEach((i) => obj(SP.puff(i, C.smoke, 0.9), 520 + i * 190, 430 + (i % 2) * 18, at(30, 'smoke') + i * 0.12, X, { seed: i, minor: true }));
    });
    wordC('HOLLOW', 640, 190, 100, at(29, 'hollow'), X, 'fall', PAL, 1 / 24, 0, 'thud');
    wordC('made for smoke', 640, 268, 50, at(30, 'made'), X, 'fall', C.smoke, 1 / 24);
  });
  // 11. hot air rushes in, swirls between the pillars, soaks heat into the floor
  scene(PS(31) - 0.15, 'rush', () => {
    SECSET();
    cam(0.96, 640, 420, () => { section(); [0, 1, 2].forEach((i) => coil('rise' + i, wiggle(520 + i * 200, 318, 60, 9, 12), C.hot, at(34, 'above') + i * 0.12, X, { head: false, wdt: 10, seed: i })); });
    wordC('hot air', 640, 650, 64, at(31, 'hot'), X, 'fall', [C.coral, C.yellow], 1 / 24);
    wordC('warm floor', 700, 190, 72, at(34, 'floor'), X, 'fall', [C.yellow, C.coral], 1 / 24, 0, 'ding');
  });
  // 12. it didn't stop there: tubuli up the walls (camera pulls back to show the room)
  scene(PS(35) - 0.15, 'tubuli', () => {
    SECSET();
    const k = 0.96 - 0.11 * step6(PS(35), 0.8, 6);
    cam(k, 640, 400, () => section());
    wordC('tubuli', 700, 270, 84, at(36, 'tubuli'), X, 'fall', [C.cream, C.yellow], 1 / 24, 0, 'stamp');
    wordC('pipes in the walls', 700, 330, 44, at(37, 'walls') - 0.3, X, 'fall', C.cream, 1 / 24);
  });
  // 13. hot air climbs the walls, escapes through vents: the whole room is a radiator
  scene(PS(38) - 0.15, 'radiator', () => {
    SECSET();
    cam(0.85, 640, 400, () => section({ ex: X }));
    if (TQ >= ST.rad - 0.2 && !REC) { // the room glows, pulsing on twos
      const p = 0.18 + 0.06 * ((FRN % 4) / 3);
      const g = ctxG.createRadialGradient(700, 250, 20, 700, 260, 420); g.addColorStop(0, `rgba(255,150,60,${p})`); g.addColorStop(1, 'rgba(255,150,60,0)');
      ctxG.fillStyle = g; ctxG.fillRect(0, 0, W0, H0);
    }
    word('vent', 900, 80, 48, at(40, 'vents'), X, 'fall', C.cream, 1 / 24);
    coil('vent', curve(1000, 70, 1050, 60, 1062, 118, 10), C.cream, at(40, 'vents') + 0.1, X, { wdt: 10 });
    wordC('warm walls', 700, 230, 52, at(39, 'warming'), at(41, 'whole') - 0.2, 'fall', C.yellow, 1 / 24);
    wordC('RADIATOR', 700, 300, 100, at(41, 'radiator'), X, 'fall', [C.coral, C.yellow], 1 / 24, 0, 'impact');
  });
  // ======================= CHAPTER 3: Vitruvius' oddly specific rule, and rooms in order of heat =======================
  // 14. the scroll again: "oddly specific"
  scene(PS(42) - 0.15, 'rule', () => {
    set('rule', '#6f8f5a', '#d6b07a');
    obj(SP.scroll(), 430, 160, at(42, 'heres'), X, { seed: 1, ct: [210, 12] });
    word('Vitruvius', 495, 270, 54, at(42, 'vitruvius'), X, 'fall', '#5a2e1c', 1 / 24);
    word('rule #1', 500, 340, 44, at(42, 'vitruvius') + 0.4, X, 'fall', '#8a5a3a', 1 / 24);
    wordC('oddly specific', 640, 640, 64, at(42, 'oddly'), X, 'fall', [C.yellow, C.cream], 1 / 24, 0, 'pop');
  });
  // 15. the floor underneath slopes to the furnace: a thrown ball rolls right back to the fire
  const SLX0 = 260, SLW = 860, slopeY = (x) => 452 - (x - SLX0) * (90 / SLW);
  scene(PS(43) - 0.15, 'slope', () => {
    set('slope', '#5a7a52', '#7a5440', { glow: 0.18 });
    obj(furnaceSpr('slope', C.brick, 200, 182), 60, GY - 182, PS(43) - 0.1, X, { ct: [110, 12], seed: 1 });
    obj(mouthSpr(100, 92), 160, GY - 92, PS(43), X, { shadow: false, seed: 2 });
    fireIn(166, GY - 84, PS(43) + 0.05, X, 0.5, 2);
    const wedge = SP.shape('wedge', SLW, 150, '#9a6a4a', (c) => { c.beginPath(); c.moveTo(0, 90); c.lineTo(SLW, 0); c.lineTo(SLW, 150); c.lineTo(0, 150); c.closePath(); c.fill(); }, { R: 12, seed: 410, marks: [[40, 120, 300, 110, 1.4], [500, 90, 820, 70, 1.4]] });
    obj(wedge, SLX0, GY - 150, at(43, 'slope'), X, { seed: 3, hit: 'thud', big: true });
    for (let i = 0; i < 7; i++) { const x = 320 + i * 118, h = slopeY(x + 22) - 330; obj(SP.rect('spil' + i, 44, Math.round(h), C.brick, 6, { R: 7, seed: 411 + i, marks: Array.from({ length: Math.floor(h / 22) }, (_, b) => [3, 22 * (b + 1), 41, 22 * (b + 1), 1.2]), markW: 3 }), x, 330, at(43, 'slope') + 0.15 + i / 24, X, { seed: i, minor: true }); }
    obj(SP.rect('slopefloor', 880, 34, C.stone, 8, { seed: 418, marks: [150, 300, 450, 600, 750].map((x) => [x, 3, x, 31, 1.3]) }), 250, 296, PS(43), X, { seed: 4 });
    coil('slopearrow', [[1060, 585], [720, 600], [380, 618]], C.yellow, at(43, 'toward'), X, { wdt: 14 });
    wordC('slopes to the fire', 720, 690, 50, at(43, 'furnace'), X, 'fall', C.yellow, 1 / 24);
    // the ball: thrown in from the right, lands, can't stop, rolls back to the fire
    const t0 = at(44, 'threw'), t1 = T(44, 'in') + 0.15, t2 = T(46, 'fire') + 0.1, r = 20;
    if (TQ >= t0 && !REC) {
      let x, y, rot = 0;
      if (TQ < t1) { const u = (TQ - t0) / (t1 - t0); x = H.lerp(1300, 1060, u); y = H.lerp(160, slopeY(1060) - 2 * r, u) - Math.sin(u * Math.PI) * 120; rot = u * 3; }
      else { const u = H.clamp((TQ - t1) / (t2 - t1)); x = 1060 - 760 * Math.pow(u, 1.5); y = slopeY(x) - 2 * r; rot = 3 - (1060 - x) / r; }
      contact(x + r, slopeY(x) + 2, 18, 4, 0.5);
      place(ctxG, SP.ball(C.red, r, 420, 0.7), x, y, { rot, ax: r, ay: r, shadow: { blur: 6, dx: 3, dy: 4, a: 0.45 } });
    }
    rec({ k: 'obj', t: t0, x: 1200, w: 40, minor: false });
    wordC("can't stop!", 640, 180, 80, at(45, 'stop'), X, 'fall', [C.coral, C.cream], 1 / 24);
    wordC('rolls back', 640, 255, 56, at(46, 'roll'), X, 'fall', C.yellow, 1 / 24);
  });
  // 16-17. rooms lined up by heat: caldarium next to the furnace, then tepidarium, frigidarium
  const ROOMS = [
    { x: 240, col: '#d9473b', lab: 'HOT', lat: 'caldarium', st: () => at(48, 'caldarium'), lt: () => at(48, 'hot') },
    { x: 580, col: '#f2a03d', lab: 'WARM', lat: 'tepidarium', st: () => at(50, 'warm') - 0.1, lt: () => at(50, 'warm') },
    { x: 920, col: '#5fa7d6', lab: 'COLD', lat: 'frigidarium', st: () => at(52, 'cold') - 0.1, lt: () => at(52, 'cold') },
  ];
  const roomsSet = () => {
    set('rooms', '#6a5a8c', '#c9a06a');
    obj(furnaceSpr('rooms', C.brick, 180, 150), 40, TOP - 150, at(47, 'heat'), X, { ct: [100, 10], seed: 1 });
    obj(mouthSpr(80, 70), 90, TOP - 70, at(47, 'heat') + 1 / 6, X, { shadow: false, seed: 2 });
    fireIn(96, TOP - 64, at(47, 'heat') + 0.25, X, 0.4, 2);
    ROOMS.forEach((R, i) => {
      obj(SP.rect('room' + i, 300, 190, R.col, 18, { seed: 430 + i, marks: [[20, 30, 280, 30, 1.6]] }), R.x, TOP - 190, R.st(), X, { ct: [160, 12], seed: i, big: true });
      wordC(R.lab, R.x + 150, TOP - 70, 64, R.lt(), X, 'fall', C.cream, 1 / 24);
      wordC(R.lat, R.x + 150, 600, 40, i === 0 ? at(48, 'caldarium') : i === 1 ? at(51, 'tepidarium') : at(52, 'frigidarium'), X, 'fall', C.cream, 1 / 24);
    });
    coil('tocald', curve(150, 330, 210, 250, 300, 300, 14), C.yellow, at(49, 'closest'), X, { wdt: 14 });
  };
  scene(PS(47) - 0.15, 'rooms1', () => {
    const k = 1.2;
    cam(k, 240, 420, roomsSet);
    wordC('rooms by heat', 640, 130, 64, at(47, 'rooms'), X, 'fall', [C.yellow, C.cream], 1 / 24);
  });
  scene(PS(50) - 0.15, 'rooms2', () => {
    const k = 1.2 - 0.2 * step6(PS(50) - 0.1, 0.8, 6);
    cam(k, 240, 420, roomsSet);
    wordC('farthest', 1070, 150, 52, at(53, 'farthest'), X, 'fall', C.cyan, 1 / 24);
  });

  // ======================= CHAPTER 4: the numbers =======================
  // 18. How hot did it get? A clay thermometer climbs to 20-50 °C
  scene(PS(54) - 0.15, 'temp', () => {
    set('temp', '#46607e', '#b98a5a');
    wordC('How hot did it get?', 640, 260, 92, at(54, 'how'), at(55, 'in') - 0.25, 'fall', PAL, 1 / 24);
    const th = group('thermo', 140, 470, [
      [SP.rect('tube', 70, 380, C.cream, 34, { seed: 440, marks: [60, 120, 180, 240, 300].map((y) => [8, y, 30, y, 1.4]), markW: 3 }), 35, 0],
      [SP.ball(C.red, 60, 441, 0.6), 10, 350],
    ]);
    const tst = at(55, 'tests');
    obj(th, 130, TOP - 470 + 20, tst - 0.3, X, { seed: 1, ct: [70, 10] });
    const lvl = TQ < at(56, 'twenty') ? 0.15 : TQ < at(56, 'fifty') ? H.lerp(0.15, 0.42, step6(at(56, 'twenty'), 0.3, 4)) : H.lerp(0.42, 0.88, step6(at(56, 'fifty'), 0.4, 5));
    obj(SP.rect('merc', 28, 330, C.red, 14, { R: 8, seed: 442, fps: [] }), 186, TOP + 20 - 120 - 330, tst - 0.2, X, { seed: 2, sy: lvl, ax: 14, ay: 330, shadow: { blur: 3, dx: 1, dy: 2, a: 0.3 }, minor: true });
    word('modern tests', 420, 170, 60, tst, X, 'fall', C.cream, 1 / 24);
    word('rebuilt Roman baths', 420, 235, 44, at(55, 'rebuilt'), X, 'fall', C.cyan, 1 / 24);
    const e = word('20', 420, 470, 150, at(56, 'twenty'), X, 'fall', C.yellow, 1 / 12);
    word('-50°C', e + 6, 470, 150, at(56, 'fifty') - 0.05, X, 'fall', [C.coral, C.coral, C.coral, C.coral, C.coral], 1 / 12, 0, 'impact');
    wordC('floor', 760, 600, 52, at(56, 'floors'), X, 'fall', C.cream, 1 / 24);
  });
  // 19. wooden-soled sandals on the hot floor; the hot room's air: 32 °C and steam
  scene(PS(57) - 0.15, 'sandals', () => {
    set('sandals', '#2f6f6a', '#d98a4e', { glow: 0.2 });
    const sandal = group('sandal', 230, 90, [
      [SP.rect('sole', 220, 36, '#9a6238', 18, { seed: 450, marks: [[20, 18, 200, 18, 1.2]] }), 5, 50],
      [SP.shape('strap', 120, 70, C.cream, (c) => { c.lineWidth = 16; c.lineCap = 'round'; c.beginPath(); c.moveTo(10, 66); c.quadraticCurveTo(60, -14, 110, 66); c.stroke(); }, { R: 6, seed: 451, fps: [] }), 70, 8],
    ]);
    obj(sandal, 330, TOP - 96, at(57, 'sandals') - 0.1, X, { ct: [120, 8], seed: 1 });
    obj(sandal, 590, TOP - 96, at(57, 'sandals') + 0.05, X, { ct: [120, 8], seed: 2 });
    [0, 1, 2, 3].forEach((i) => coil('hotfl' + i, wiggle(300 + i * 200, 520, 60, 9, 12), '#ffd6a0', at(57, 'hot') + i * 0.1, X, { head: false, wdt: 10, seed: i }));
    word('wooden soles', 70, 330, 60, at(57, 'woodensoled'), X, 'fall', [C.yellow, C.cream], 1 / 24);
    word('32°C', 800, 220, 150, at(58, 'thirtytwo'), X, 'fall', C.cream, 1 / 12, 0, 'impact');
    word('hot room air', 810, 300, 48, at(58, 'air'), X, 'fall', C.yellow, 1 / 24);
    if (TQ >= at(59, 'steam') && !REC) for (let i = 0; i < 10; i++) {
      const k = ((TQ - at(59, 'steam')) * 0.5 + i / 10) % 1, x = 120 + i * 112 + Math.sin(k * 5 + i) * 20;
      if (TQ - at(59, 'steam') < i * 0.06) continue;
      place(ctxG, SP.puff(i % 3, '#eef0f2', 1.4), x, 470 - k * 420, { shadow: false, alpha: 0.75 * (1 - k * 0.8), sx: 0.8 + k, sy: 0.8 + k });
    }
    rec({ k: 'obj', t: at(59, 'steam'), x: 640, w: 200, minor: true });
    word('steam', 820, 400, 64, at(59, 'steam'), X, 'fall', '#eef0f2', 1 / 24);
  });
  // 20. it all ran on wood: the Baths of Caracalla, ~10 tons a day
  scene(PS(60) - 0.15, 'wood', () => {
    set('wood', '#3c6e8f', '#c89b62');
    const rows = [[0, 1, 2, 3], [0, 1, 2], [0, 1], [0]];
    let n = 0;
    rows.forEach((row, r) => row.forEach((c) => { const st = r === 0 ? at(60, 'wood') + c / 12 : at(62, 'burned') + (n - 4) * 0.12; obj(SP.log((r + c) % 3), 70 + c * 136 + r * 68, TOP - 34 - r * 32, st, X, { seed: n, minor: true, ct: r ? null : [70, 8] }); n++; }));
    const baths = group('caracalla', 640, 300, [
      [SP.shape('dome', 260, 120, '#d9b98a', (c) => { c.beginPath(); c.ellipse(130, 120, 128, 116, 0, Math.PI, 0); c.fill(); }, { R: 16, seed: 460 }), 190, 0],
      [SP.rect('bathblock', 640, 200, '#e2c9a0', 12, { seed: 461, marks: [[10, 30, 630, 30, 1.6]] }), 0, 100],
      ...Array.from({ length: 6 }, (_, i) => [SP.shape('arch', 62, 100, '#5a3b2c', (c) => { c.beginPath(); c.moveTo(0, 100); c.lineTo(0, 31); c.arc(31, 31, 31, Math.PI, 0); c.lineTo(62, 100); c.closePath(); c.fill(); }, { R: 5, dome: 0.4, seed: 462, fps: [] }), 35 + i * 100, 190, 0.2]),
    ]);
    obj(baths, 600, TOP - 300, at(61, 'giant'), X, { ct: [320, 14], seed: 2, big: true });
    wordC('Caracalla', 920, 160, 72, at(61, 'caracalla'), X, 'fall', [C.cream, C.yellow], 1 / 24);
    const c0 = at(62, 'burned'), c1 = at(62, 'ten');
    if (TQ >= c0 - 0.05 || REC) {
      const v = Math.min(10, Math.round(10 * H.clamp((TQ - c0) / (c1 - c0)))), big = TQ >= c1 ? [1.25, 1.12, 1.05, 1][Math.min(3, Math.floor((TQ - c1) * 6))] : 1;
      ctxG.save(); ctxG.translate(150, 230); ctxG.scale(big, big); ctxG.translate(-150, -230);
      word('~' + v, 70, 290, 150, c0, X, 'fall', TQ >= c1 ? C.coral : C.cream, 0, 0);
      ctxG.restore();
    }
    rec({ k: 'hit', t: c1, hit: 'impact' }); rec({ k: 'count', t0: c0, t1: c1 });
    word('tons', 345, 290, 80, at(62, 'tons'), X, 'fall', C.yellow, 1 / 24);
    word('of wood a day', 80, 370, 52, at(63, 'every'), X, 'fall', C.cream, 1 / 24);
  });

  // ======================= CHAPTER 5: why it matters today =======================
  // 21. the empire falls: the columns topple
  scene(PS(64) - 0.15, 'fall', () => {
    set('fall', '#5a5560', '#8d7b68', { glow: 0.12 });
    const col = group('column', 120, 330, [
      [SP.rect('cap', 120, 30, '#efe6d2', 8, { seed: 470 }), 0, 0],
      [SP.rect('shaft', 76, 270, '#efe6d2', 8, { seed: 471, marks: [18, 30, 42, 54, 64].map((x) => [x, 10, x, 260, 1.6]), markW: 4 }), 22, 30],
      [SP.rect('base', 120, 30, '#e3d8c2', 8, { seed: 472 }), 0, 300],
    ]);
    const fl = T(64, 'fell') - 0.05;
    [0, 1, 2].forEach((i) => obj(col, 260 + i * 300, TOP - 330, PS(64) - 0.1 + i / 12, fl + i * 0.1, { ct: [70, 10], seed: i * 3 + 1, big: i === 0 }));
    rec({ k: 'hit', t: fl + 0.35, hit: 'impact' });
    wordC('EMPIRE', 640, 150, 100, at(64, 'empire'), fl + 0.2, 'fall', [C.cream, C.yellow], 1 / 24);
    wordC('skills + labor', 640, 260, 72, at(65, 'skills'), X, 'fall', [C.cream, C.yellow], 1 / 24);
    obj(furnaceSpr('cold', '#8a7a70', 220, 160), 530, TOP - 160, at(66, 'furnaces') - 0.2, X, { ct: [120, 10], seed: 5 });
    obj(mouthSpr(100, 80), 590, TOP - 80, at(66, 'furnaces'), X, { shadow: false, seed: 6 });
    obj(SP.xmark(), 580, 330, at(66, 'burning'), X, { rot: -0.1, hit: 'slap', big: true, seed: 7 });
  });
  // 22. for centuries: smoky open fires
  scene(PS(67) - 0.15, 'openfire', () => {
    set('openfire', '#3d3a4a', '#6b5a4a', { glow: 0.3, light: [600, 380] });
    wordC('for centuries...', 640, 160, 80, at(67, 'centuries'), X, 'fall', [C.cream, C.smoke], 1 / 24);
    obj(SP.log(0), 520, TOP - 40, at(68, 'smoky') - 0.4, X, { seed: 1, rot: 0.25, ct: [90, 8] });
    obj(SP.log(1), 560, TOP - 40, at(68, 'smoky') - 0.3, X, { seed: 2, rot: -0.25 });
    for (let i = 0; i < 4; i++) { const b = (FRN + i) % 3; obj(SP.flame(b, 1.1 - (i % 2) * 0.25), 520 + i * 45, TOP - 150 + (i % 2) * 30, at(68, 'smoky') - 0.2 + i / 12, X, { seed: i, shadow: false, minor: true }); obj(SP.flameIn(b, 1), 540 + i * 45, TOP - 90 + (i % 2) * 20, at(68, 'smoky') - 0.1 + i / 12, X, { seed: i, shadow: false, minor: true }); }
    if (TQ >= at(68, 'smoky') && !REC) for (let i = 0; i < 9; i++) {
      const k = ((TQ - at(68, 'smoky')) * 0.45 + i / 9) % 1; if (TQ - at(68, 'smoky') < i * 0.08) continue;
      place(ctxG, SP.puff(i % 3, '#8a8590', 1.5), 560 + Math.sin(k * 4 + i) * 60 + k * 120, 300 - k * 330, { shadow: false, alpha: 0.85 * (1 - k), sx: 0.7 + k * 1.2, sy: 0.7 + k * 1.2 });
    }
    rec({ k: 'obj', t: at(68, 'smoky'), x: 600, w: 100, big: true });
    wordC('smoky open fires', 640, 640, 60, at(68, 'smoky'), X, 'fall', [C.smoke, C.cream], 1 / 24);
  });
  // 23. the idea never died: Korea's ondol runs fire smoke under the floor too
  scene(PS(69) - 0.15, 'ondol', () => {
    set('ondol', '#4f7f74', '#c9a06a');
    wordC('the idea lives on', 640, 140, 72, at(69, 'idea'), at(70, 'in') - 0.2, 'fall', [C.yellow, C.cream], 1 / 24);
    obj(furnaceSpr('ondol', '#8f8a80', 200, 140), 120, TOP - 140, at(70, 'korea'), X, { ct: [110, 10], seed: 1 });
    obj(mouthSpr(90, 70), 230, TOP - 70, at(70, 'korea') + 1 / 6, X, { shadow: false, seed: 2 });
    fireIn(236, TOP - 64, at(70, 'korea') + 0.25, X, 0.42, 2);
    for (let i = 0; i < 6; i++) obj(SP.rect('ridge', 28, 112, '#a39a8a', 6, { R: 7, seed: 480 }), 360 + i * 98, TOP - 112, at(70, 'ondol') - 0.2 + i / 24, X, { seed: i, minor: true });
    obj(SP.rect('ondolfloor', 590, 34, C.stone, 8, { seed: 481, marks: [[100, 4, 100, 30, 1.2], [300, 4, 300, 30, 1.2], [480, 4, 480, 30, 1.2]] }), 330, TOP - 146, at(70, 'ondol') - 0.05, X, { seed: 3 });
    [0, 1].forEach((i) => obj(SP.rect('post', 22, 76, C.wood, 6, { R: 7, seed: 482, fps: [] }), 350 + i * 530, TOP - 222, at(70, 'system') - 0.1 + i / 12, X, { seed: i }));
    obj(SP.shape('hanok', 680, 80, '#3e4a5a', (c) => { c.beginPath(); c.moveTo(0, 30); c.quadraticCurveTo(340, 80, 680, 30); c.lineTo(640, 80); c.quadraticCurveTo(340, 96, 40, 80); c.closePath(); c.fill(); c.beginPath(); c.moveTo(60, 50); c.quadraticCurveTo(340, -20, 620, 50); c.lineTo(620, 70); c.lineTo(60, 70); c.closePath(); c.fill(); }, { R: 12, seed: 483 }), 290, TOP - 300, at(70, 'system'), X, { seed: 4 });
    obj(SP.rect('chimney', 60, 330, '#8f8a80', 10, { seed: 484, marks: [[6, 80, 54, 80, 1.2], [6, 180, 54, 180, 1.2]] }), 1000, TOP - 330, at(71, 'runs'), X, { seed: 5, ct: [40, 8] });
    if (TQ >= at(71, 'smoke') && !REC) for (let i = 0; i < 20; i++) {
      const d = (TQ - at(71, 'smoke') - i * 0.3) * 320; if (d < 0) continue;
      let x, y; if (d < 720) { x = 330 + d; y = TOP - 60 + Math.sin(d / 50 + i) * 16; } else if (d < 1100) { x = 1030; y = TOP - 60 - (d - 720); } else continue;
      place(ctxG, SP.puff(i % 3, '#9a948c', 0.8), x - 26, y - 20, { shadow: { blur: 5, dx: 2, dy: 3, a: 0.3 } });
    }
    rec({ k: 'obj', t: at(71, 'smoke'), x: 640, w: 100, minor: true });
    wordC('ONDOL', 640, 150, 110, at(70, 'ondol'), X, 'fall', [C.yellow, C.coral], 1 / 24, 0, 'stamp');
    word('Korea', 1080, 330, 52, at(70, 'korea'), X, 'fall', C.cream, 1 / 24);
    wordC('smoke under the floor', 640, 650, 52, at(71, 'smoke'), X, 'fall', C.cream, 1 / 24);
  });
  // 24. today's underfloor heating: pipes in the screed, warm floor, heat rises
  scene(PS(72) - 0.15, 'modern', () => {
    set('modern', '#8fa3b8', '#7d8590');
    const plank = (warm) => SP.rect('plank' + warm, 900, 40, warm ? '#e3a066' : '#c8945a', 8, { seed: 490, marks: [150, 300, 450, 600, 750].map((x) => [x, 4, x, 36, 1.4]).concat([[20, 20, 880, 20, 0.8]]) });
    obj(SP.rect('insul', 900, 30, '#f2d36b', 8, { seed: 491 }), 190, TOP - 30, at(72, 'todays'), X, { seed: 1, ct: [450, 10] });
    obj(SP.rect('screed', 900, 50, '#b6b0a6', 8, { seed: 492 }), 190, TOP - 80, at(72, 'todays') + 1 / 12, X, { seed: 2 });
    for (let i = 0; i < 14; i++) obj(SP.ball(C.red, 13, 493, 0.7), 215 + i * 62, TOP - 68, at(72, 'underfloor') + i / 24, X, { seed: i, minor: true, shadow: { blur: 3, dx: 2, dy: 2, a: 0.4 } });
    obj(plank(0), 190, TOP - 120, at(72, 'todays') + 1 / 6, X, { seed: 3 });
    const wk = step6(at(74, 'floor'), 0.8, 4);
    if (wk > 0 && !REC) place(ctxG, plank(1), 190, TOP - 120, { shadow: false, alpha: wk });
    [0, 1, 2, 3].forEach((i) => coil('mrise' + i, wiggle(330 + i * 200, 370, 100, 10, 14), C.coral, at(75, 'heat') + i * 0.1, X, { head: false, wdt: 12, seed: i }));
    [0, 1, 2].forEach((i) => coil('mup' + i, [[430 + i * 200, 300], [430 + i * 200, 230]], C.yellow, at(75, 'rise') + i * 0.1, X, { wdt: 12, seed: i }));
    wordC('underfloor heating', 640, 150, 72, at(72, 'underfloor'), at(74, 'warm') - 0.3, 'fall', [C.cream, C.yellow], 1 / 24);
    wordC('= Roman idea', 640, 220, 52, at(73, 'romans'), at(74, 'warm') - 0.3, 'fall', C.yellow, 1 / 24);
    wordC('warm floor', 640, 610, 60, at(74, 'warm'), X, 'fall', C.coral, 1 / 24);
    wordC('heat rises', 640, 170, 80, at(75, 'heat'), X, 'fall', [C.yellow, C.coral], 1 / 24, 0, 'ding');
  });
  // 25. pipes instead of pillars, nobody shoveling wood
  scene(PS(76) - 0.15, 'versus', () => {
    set('versus', '#425a8c', '#c08a5a');
    for (let s = 0; s < 3; s++) for (let b = 0; b < 4; b++) obj(SP.brick(b % 2 ? '#b85f36' : C.brick, 44, 22, b), 120 + s * 90, TOP - 22 * (b + 1), at(76, 'pillars') + s * 0.08 + b / 24, X, { seed: s + b, minor: true });
    obj(SP.rect('vfloor', 290, 24, C.stone, 6, { seed: 495 }), 100, TOP - 112, at(76, 'pillars') + 0.35, X, { seed: 1 });
    word('pillars', 130, 300, 64, at(76, 'pillars'), X, 'fall', C.cream, 1 / 24);
    for (let i = 0; i < 5; i++) obj(SP.ball(C.red, 16, 496, 0.7), 900 + i * 60, TOP - 40, at(76, 'pipes') + i / 24, X, { seed: i, minor: true });
    obj(SP.rect('vscreed', 320, 26, '#b6b0a6', 6, { seed: 497 }), 885, TOP - 70, at(76, 'pipes') + 0.2, X, { seed: 2 });
    word('pipes', 930, 300, 64, at(76, 'pipes'), X, 'fall', C.yellow, 1 / 24);
    const shovel = group('shovel', 120, 300, [
      [SP.rect('handle', 18, 230, C.wood, 8, { R: 6, seed: 498, fps: [] }), 51, 0],
      [SP.shape('blade', 120, 90, '#9aa0a8', (c) => { c.beginPath(); c.moveTo(10, 0); c.lineTo(110, 0); c.lineTo(100, 70); c.quadraticCurveTo(60, 92, 20, 70); c.closePath(); c.fill(); }, { R: 10, seed: 499, spec: 0.6 }), 0, 210],
    ]);
    obj(shovel, 580, TOP - 310, at(77, 'nobody'), X, { seed: 3, ct: [50, 8], rot: 0.08 });
    obj(SP.xmark(), 580, 300, at(77, 'wood'), X, { rot: 0.1, hit: 'slap', big: true, seed: 4 });
  });
  // 26. END: your radiator ... or a Roman floor?
  scene(PS(78) - 0.15, 'end', () => {
    set('hook', '#4f9fae', '#d0703f');
    const rad = group('radiator', 260, 190, [
      ...Array.from({ length: 6 }, (_, i) => [SP.rect('fin', 38, 170, '#d3cfc6', 16, { R: 9, seed: 500, fps: [] }), 8 + i * 41, 0]),
      [SP.rect('radfoot', 20, 24, '#9aa0a8', 5, { R: 5, seed: 501, fps: [] }), 30, 166], [SP.rect('radfoot', 20, 24, '#9aa0a8', 5, { R: 5, seed: 501, fps: [] }), 200, 166],
    ]);
    obj(rad, 140, TOP - 190, at(78, 'radiator'), null, { ct: [130, 10], seed: 1 });
    wordC('radiator', 270, 610, 52, at(78, 'radiator') + 0.15, null, 'fall', C.cream, 1 / 24);
    const st = at(79, 'roman');
    for (let i = 0; i < 4; i++) for (let b = 0; b < 3; b++) obj(SP.brick(b % 2 ? '#b85f36' : C.brick, 40, 22, b), 860 + i * 78, TOP - 22 * (b + 1), st + i / 24 + b / 24, null, { seed: i + b, minor: true });
    obj(SP.rect('endfloor', 300, 26, C.stone, 6, { seed: 502 }), 845, TOP - 92, st + 0.2, null, { seed: 2 });
    for (let i = 0; i < 2; i++) { const b = (FRN + i) % 3; obj(SP.flame(b, 0.45), 905 + i * 90, TOP - 56, st + 0.25 + i / 12, null, { seed: i, shadow: false, minor: true }); }
    wordC('Roman floor', 1000, 610, 52, at(79, 'roman'), null, 'fall', C.yellow, 1 / 24);
    wordC('vs', 640, 430, 72, at(79, 'for'), null, 'fall', C.cream, 1 / 12);
    wordC('?', 640, 330, 180, T(79, 'floor') + 0.35, null, 'fall', C.yellow, 1 / 12, 0, 'end');
    wordC('Your pick?', 640, 120, 72, at(78, 'trade'), null, 'fall', PAL, 1 / 24);
  });

  SC.sort((a, b) => a.s - b.s);
  SC.forEach((s, i) => { s.e = i + 1 < SC.length ? SC[i + 1].s : DURATION + 1; });

  function explainer(ctx, W, H_, t) {
    ctxG = ctx; TQ = Math.floor(t * 12) / 12; FRN = Math.floor(t * 12);
    let sc = SC[0]; for (const s of SC) if (TQ + 1e-6 >= s.s) sc = s;
    X = sc.e - 0.45;
    sc.draw();
    finish(ctx);
  }

  // ---------- sound: plasticine on a stop-motion set ----------
  // Events are recorded from the scenes themselves (REC mode runs every scene's draw once with drawing switched off),
  // so every plop lands on the exact 12 fps frame its piece pops on, from the same BEATS times as the picture.
  const collect = () => {
    if (CLX.events) return CLX.events;
    const keep = [ctxG, TQ, FRN, X], cv = H.layer(W0, H0);
    ctxG = cv.getContext('2d'); REC = [];
    SC.forEach((s) => { TQ = s.e - 1 / 24; FRN = Math.floor(TQ * 12); X = s.e - 0.45; ctxG.save(); try { s.draw(); } catch (e) { console.warn('rec', s.name, e); } ctxG.restore(); });
    const ev = REC; REC = null; [ctxG, TQ, FRN, X] = keep;
    const seen = new Set(), out = [];
    ev.forEach((e) => { const key = e.k + '|' + (e.t ?? e.t0).toFixed(3) + '|' + Math.round(e.x || 0) + '|' + (e.mode || ''); if (!seen.has(key)) { seen.add(key); out.push(e); } });
    return (CLX.events = out.sort((a, b) => (a.t ?? a.t0) - (b.t ?? b.t0)));
  };
  function scoreSound(k) {
    const q = (s) => Math.ceil(s * 12 - 1e-6) / 12;
    const pan = (x) => H.clamp(((x || 640) / 1280) * 2 - 1, -1, 1) * 0.6;
    const plop = (t, g = 1, f = 170, p = 0, minor = true) => {
      k.tone(t, { f: [[0, f * 1.6], [0.06, f * 0.7]], dur: 0.11, gain: 0.3 * g, pan: p, minor });
      k.noise(t, { dur: 0.05, color: 'brown', filter: 'lowpass', f: 700, gain: 0.28 * g, a: 0.002, pan: p, minor });
      k.noise(t, { dur: 0.04, filter: 'bandpass', f: 520, q: 1.5, gain: 0.1 * g, a: 0.002, pan: p, minor });
    };
    const squelch = (t, g = 1, p = 0, d = 0.14, minor = true) => {
      k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 280], [d, 650]], q: 2, gain: 0.3 * g, a: 0.02, pan: p, minor });
      k.tone(t, { f: [[0, 90], [d, 130]], dur: d, gain: 0.12 * g, pan: p, minor });
    };
    const floor = (t, n, g = 1, minor = true) => { for (let i = 0; i < n; i++) k.noise(t + i * 0.07 + (i % 2) * 0.02, { dur: 0.09, color: 'brown', filter: 'lowpass', f: 260, gain: 0.32 * g * (1 - i * 0.08), a: 0.003, pan: (i % 3 - 1) * 0.3, minor }); };
    const smear = (t, d, g = 1) => { k.noise(t, { dur: d, color: 'brown', filter: 'bandpass', f: [[0, 260], [d, 520]], q: 1.3, gain: 0.28 * g, a: d * 0.3 }); };
    const hit = (h, t, x) => {
      const p = pan(x);
      if (h === 'impact') { k.play('impact', t, { gain: 1.2, pan: p }); plop(t, 1.8, 95, p, false); }
      else if (h === 'slap') { k.play('slap', t, { gain: 0.7, pan: p }); plop(t, 1.3, 100, p, false); k.tone(t + 0.02, { f: 'D3', type: 'triangle', dur: 0.16, gain: 0.2, filter: 'lowpass', f2: 700 }); k.tone(t + 0.18, { f: 'A2', type: 'triangle', dur: 0.3, gain: 0.22, filter: 'lowpass', f2: 600 }); }
      else if (h === 'ding') { k.play('ding', t, { f: 'E5', gain: 0.5, pan: p }); }
      else if (h === 'stamp') { k.play('stamp', t, { gain: 0.6, pan: p }); }
      else if (h === 'thud') { k.play('thud', t, { gain: 0.7, pan: p }); }
      else if (h === 'success') { k.play('success', t, { f: 'G5', gain: 0.5, pan: p }); }
      else if (h === 'pop') { plop(t, 1.2, 130, p, false); }
      else if (h === 'end') { ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', t + i * 0.08, { f, gain: 0.45 - i * 0.04, pan: (i - 1) * 0.25 })); }
    };
    let lastFloor = -9;
    collect().forEach((e) => {
      if (e.k === 'word') {
        const frames = new Map();
        for (let i = 0; i < e.n; i++) { const t = q(e.t + i * (e.step || 0)); if (!frames.has(t)) frames.set(t, i / Math.max(1, e.n)); }
        const big = e.px >= 80, g = big ? 0.32 : 0.24, f = big ? 170 : 220;
        [...frames].forEach(([t, u]) => plop(t, g, f, pan(e.x + e.w * u)));
        if (e.hit) hit(e.hit, q(e.t), e.x + e.w / 2);
      } else if (e.k === 'obj') {
        const t = q(e.t), p = pan(e.x);
        if (e.big) { plop(t, 1.0, 110, p, false); squelch(t + 1 / 12, 0.6, p); } else plop(t, e.minor ? 0.35 : 0.6, e.minor ? 190 : 150, p);
        if (e.hit) hit(e.hit, t, e.x);
      } else if (e.k === 'coil') { const t = q(e.t); plop(t, 0.5, 140, pan(e.x)); squelch(t + 1 / 12, 0.35, pan(e.x), 0.16); }
      else if (e.k === 'exit') {
        const t = q(e.t);
        if (e.mode === 'fall') { if (t + 0.3 - lastFloor > 0.25) { floor(t + 0.32, 4, 0.55); lastFloor = t + 0.3; } }
        else smear(t, 0.45, 0.8);
      } else if (e.k === 'hit') hit(e.hit, q(e.t), 640);
      else if (e.k === 'count') { for (let t = q(e.t0); t < e.t1; t += 2 / 12) plop(t, 0.28, 230, pan(160)); }
    });
    // fire crackle wherever a fire is burning (minor)
    const fires = [[at(16, 'furnace') + 0.3, PS(20) - 0.2], [ST.furn, ST.end - 0.5], [PS(43), PS(47) - 0.3], [at(47, 'heat') + 0.3, PS(54) - 0.3], [at(68, 'smoky') - 0.2, PS(69) - 0.3], [at(70, 'korea') + 0.3, PS(72) - 0.3]];
    fires.forEach(([a, b], j) => { const r = H.rng(600 + j); for (let t = a; t < b; t += r.range(0.07, 0.24)) k.noise(t, { dur: 0.015 + r() * 0.02, filter: 'bandpass', f: r.range(1800, 4200), q: 1.2, gain: r.range(0.04, 0.12), minor: true, pan: r.range(-0.4, 0) }); });
    // hot air: whooshes as it rushes in and climbs the walls, a riser into RADIATOR
    k.play('whoosh', ST.rush - 0.1, { dur: 0.9, gain: 0.7, pan: -0.3 });
    k.play('whoosh', T(33, 'swirled'), { dur: 0.7, gain: 0.45, pan: 0.2 });
    k.play('whoosh', ST.climb, { dur: 0.8, gain: 0.5, pan: 0.5, top: 3400 });
    k.play('riser', ST.rad - 0.9, { dur: 0.8, gain: 0.5 });
    k.play('sparkle', ST.rad + 0.1, { n: 6, gain: 0.5 });
    // the ball: thrown in, lands, rolls back down the slope to the fire
    { const t0 = at(44, 'threw'), t1 = T(44, 'in') + 0.15, t2 = T(46, 'fire') + 0.1;
      k.play('swish', q(t0), { dur: 0.3, gain: 0.6, pan: 0.6 }); plop(q(t1), 0.9, 120, 0.5, false);
      k.play('roller', q(t1) + 0.05, { dur: t2 - t1, gain: 0.45, pan: 0 }); k.play('thud', q(t2), { gain: 0.6, pan: -0.5 }); }
    // stop-motion cuts: a soft table bump on each new set
    SC.slice(1).forEach((s) => squelch(q(s.s), 0.35, 0, 0.1));
  }

  function thumbnail(ctx, W, H_) {
    ctxG = ctx; TQ = 88; FRN = 1056; X = 999;
    SECSET();
    cam(0.9, 640, 640, () => section());
    wordC('HEAT FROM', 640, 140, 140, 0, null, 'fall', [C.yellow, C.coral, C.yellow, C.cream], 0);
    wordC('BELOW', 640, 312, 170, 0, null, 'fall', [C.coral, C.yellow], 0);
    finish(ctx);
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0; window.SCENES = SC;
})();
