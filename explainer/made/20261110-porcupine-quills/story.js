// ================= Claymation Set, 16:9 1280x720: "What happens if a porcupine's quills stick into you?" =================
// Long explainer. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// One clay studio: every scene is a sculpted set (wall + table), every piece a baked plasticine lump popped on with
// squash-and-stretch on twos (12 fps), slid, or knocked off the table at the end of the beat.
(function () {
  const W0 = 1280, H0 = 720, TAU = Math.PI * 2;
  // ---------- BEATS: one entry per voiceover phrase (phrases.json, Kokoro am_michael) ----------
  const PH = [
    {"s":0.25,"e":3.62,"text":"A porcupine carries 30,000 tiny harpoons.","words":[["a",0.25],["porcupine",0.35],["carries",1.24],["30000",1.94],["tiny",2.43],["harpoons",2.83]]},
    {"s":4.0,"e":6.08,"text":"So what happens when one sticks into you?","words":[["so",4.0],["what",4.13],["happens",4.38],["when",4.82],["one",5.07],["sticks",5.26],["into",5.64],["you",5.89]]},
    {"s":6.6,"e":8.2,"text":"And why won't it come back out?","words":[["and",6.6],["why",6.81],["wont",7.02],["it",7.3],["come",7.44],["back",7.72],["out",7.99]]},
    {"s":8.69,"e":12.17,"text":"Let's take a really close look at the pointiest coat in nature.","words":[["lets",8.69],["take",8.97],["a",9.24],["really",9.31],["close",9.73],["look",10.08],["at",10.36],["the",10.5],["pointiest",10.71],["coat",11.33],["in",11.61],["nature",11.75]]},
    {"s":12.58,"e":14.59,"text":"First, let's bust the biggest myth.","words":[["first",12.58],["lets",12.95],["bust",13.25],["the",13.55],["biggest",13.77],["myth",14.29]]},
    {"s":15.01,"e":17.04,"text":"Porcupines can't shoot their quills.","words":[["porcupines",15.01],["cant",15.69],["shoot",15.96],["their",16.3],["quills",16.64]]},
    {"s":17.39,"e":18.49,"text":"Not even a little.","words":[["not",17.39],["even",17.62],["a",17.94],["little",18.01]]},
    {"s":18.77,"e":21.18,"text":"People have believed it since ancient Greece,","words":[["people",18.77],["have",19.15],["believed",19.4],["it",19.91],["since",20.04],["ancient",20.35],["greece",20.8]]},
    {"s":21.55,"e":22.84,"text":"but it just isn't true.","words":[["but",21.55],["it",21.78],["just",21.93],["isnt",22.23],["true",22.54]]},
    {"s":23.22,"e":27.06,"text":"A North American porcupine wears about 30,000 quills","words":[["a",23.22],["north",23.31],["american",23.75],["porcupine",24.45],["wears",25.23],["about",25.67],["30000",26.1],["quills",26.54]]},
    {"s":27.13,"e":29.16,"text":"on its back, sides and tail.","words":[["on",27.13],["its",27.33],["back",27.61],["sides",28.0],["and",28.48],["tail",28.77]]},
    {"s":29.53,"e":32.04,"text":"Each one is a stiff, hollow hair,","words":[["each",29.53],["one",29.93],["is",30.23],["a",30.43],["stiff",30.53],["hollow",31.03],["hair",31.64]]},
    {"s":32.1,"e":35.13,"text":"made of keratin, the same stuff as your fingernails.","words":[["made",32.1],["of",32.39],["keratin",32.53],["the",33.04],["same",33.25],["stuff",33.54],["as",33.9],["your",34.05],["fingernails",34.34]]},
    {"s":35.49,"e":37.02,"text":"They're up to four inches long,","words":[["theyre",35.49],["up",35.87],["to",36.0],["four",36.13],["inches",36.38],["long",36.76]]},
    {"s":37.42,"e":39.81,"text":"and they're only loosely attached to the skin.","words":[["and",37.42],["theyre",37.61],["only",38.0],["loosely",38.26],["attached",38.71],["to",39.23],["the",39.36],["skin",39.55]]},
    {"s":40.27,"e":42.36,"text":"So the porcupine doesn't throw anything.","words":[["so",40.27],["the",40.39],["porcupine",40.58],["doesnt",41.16],["throw",41.54],["anything",41.85]]},
    {"s":42.71,"e":44.1,"text":"An attacker bumps into it,","words":[["an",42.71],["attacker",42.85],["bumps",43.38],["into",43.71],["it",43.97]]},
    {"s":44.41,"e":45.82,"text":"the quills grab hold,","words":[["the",44.41],["quills",44.66],["grab",45.16],["hold",45.49]]},
    {"s":46.21,"e":48.2,"text":"and they pull straight out of the porcupine.","words":[["and",46.21],["they",46.38],["pull",46.6],["straight",46.82],["out",47.26],["of",47.43],["the",47.54],["porcupine",47.7]]},
    {"s":48.65,"e":51.75,"text":"Now let's zoom in on the very tip of one quill.","words":[["now",48.65],["lets",48.91],["zoom",49.27],["in",49.62],["on",49.8],["the",49.98],["very",50.24],["tip",50.6],["of",50.86],["one",51.04],["quill",51.31]]},
    {"s":52.23,"e":55.95,"text":"Under a microscope, it's covered in hundreds of tiny barbs,","words":[["under",52.23],["a",52.62],["microscope",52.7],["its",53.49],["covered",53.73],["in",54.28],["hundreds",54.44],["of",55.08],["tiny",55.23],["barbs",55.55]]},
    {"s":56.36,"e":60.14,"text":"all pointing backwards, like the scales on a pine cone.","words":[["all",56.36],["pointing",56.61],["backwards",57.3],["like",58.08],["the",58.42],["scales",58.68],["on",59.19],["a",59.37],["pine",59.45],["cone",59.8]]},
    {"s":60.59,"e":64.88,"text":"In 2012, scientists pushed quills into meat in the lab.","words":[["in",60.59],["2012",60.79],["scientists",61.18],["pushed",62.15],["quills",62.74],["into",63.32],["meat",63.71],["in",64.1],["the",64.29],["lab",64.58]]},
    {"s":65.22,"e":67.2,"text":"The barbs did something surprising.","words":[["the",65.22],["barbs",65.42],["did",65.75],["something",65.95],["surprising",66.54]]},
    {"s":67.67,"e":70.75,"text":"They cut the force needed to go in by about half.","words":[["they",67.67],["cut",68.0],["the",68.24],["force",68.48],["needed",68.89],["to",69.37],["go",69.54],["in",69.7],["by",69.86],["about",70.02],["half",70.43]]},
    {"s":71.22,"e":73.88,"text":"The tiny barbs grip the tissue and slice it,","words":[["the",71.22],["tiny",71.45],["barbs",71.75],["grip",72.13],["the",72.44],["tissue",72.67],["and",73.12],["slice",73.35],["it",73.73]]},
    {"s":74.36,"e":76.57,"text":"a bit like the teeth on a bread knife.","words":[["a",74.36],["bit",74.44],["like",74.67],["the",74.97],["teeth",75.2],["on",75.58],["a",75.73],["bread",75.81],["knife",76.19]]},
    {"s":76.99,"e":79.22,"text":"So the quill slides in deep and easy.","words":[["so",76.99],["the",77.14],["quill",77.37],["slides",77.76],["in",78.22],["deep",78.37],["and",78.68],["easy",78.91]]},
    {"s":79.68,"e":81.25,"text":"Then they tried pulling them out.","words":[["then",79.68],["they",79.92],["tried",80.15],["pulling",80.44],["them",80.84],["out",81.07]]},
    {"s":81.68,"e":83.77,"text":"Now the barbs flare open and snag,","words":[["now",81.68],["the",81.91],["barbs",82.15],["flare",82.53],["open",82.92],["and",83.23],["snag",83.46]]},
    {"s":84.34,"e":86.48,"text":"and it took about four times more force","words":[["and",84.34],["it",84.54],["took",84.68],["about",84.94],["four",85.28],["times",85.55],["more",85.88],["force",86.15]]},
    {"s":86.54,"e":87.59,"text":"than a smooth quill.","words":[["than",86.54],["a",86.8],["smooth",86.87],["quill",87.27]]},
    {"s":87.98,"e":90.04,"text":"In, easy. Out, really hard.","words":[["in",87.98],["easy",88.2],["out",88.63],["really",88.96],["hard",89.61]]},
    {"s":90.52,"e":91.72,"text":"Just like a fishhook.","words":[["just",90.52],["like",90.8],["a",91.08],["fishhook",91.15]]},
    {"s":92.02,"e":93.83,"text":"Less than half a centimeter in,","words":[["less",92.02],["than",92.31],["half",92.6],["a",92.89],["centimeter",92.96],["in",93.68]]},
    {"s":94.21,"e":95.6,"text":"and it's already holding on.","words":[["and",94.21],["its",94.4],["already",94.59],["holding",95.03],["on",95.47]]},
    {"s":96.08,"e":97.57,"text":"And here's the sneaky part.","words":[["and",96.08],["heres",96.29],["the",96.65],["sneaky",96.86],["part",97.29]]},
    {"s":97.97,"e":100.11,"text":"A quill that's stuck doesn't just sit there.","words":[["a",97.97],["quill",98.03],["thats",98.35],["stuck",98.66],["doesnt",98.98],["just",99.35],["sit",99.61],["there",99.8]]},
    {"s":100.46,"e":102.23,"text":"Every time the animal moves,","words":[["every",100.46],["time",100.85],["the",101.15],["animal",101.39],["moves",101.85]]},
    {"s":102.66,"e":105.13,"text":"its own muscles squeeze around the barbs,","words":[["its",102.66],["own",102.88],["muscles",103.1],["squeeze",103.61],["around",104.11],["the",104.55],["barbs",104.77]]},
    {"s":105.55,"e":107.89,"text":"and each one can only ratchet one way.","words":[["and",105.55],["each",105.79],["one",106.1],["can",106.33],["only",106.57],["ratchet",106.88],["one",107.43],["way",107.66]]},
    {"s":108.26,"e":109.04,"text":"Forward.","words":[["forward",108.26]]},
    {"s":109.42,"e":112.06,"text":"So a stuck quill slowly works its way deeper.","words":[["so",109.42],["a",109.57],["stuck",109.64],["quill",110.01],["slowly",110.37],["works",110.81],["its",111.18],["way",111.4],["deeper",111.62]]},
    {"s":112.44,"e":114.93,"text":"That's why a dog that noses a porcupine","words":[["thats",112.44],["why",112.85],["a",113.09],["dog",113.17],["that",113.41],["noses",113.73],["a",114.13],["porcupine",114.21]]},
    {"s":115.33,"e":117.41,"text":"needs a trip to the vet, and fast.","words":[["needs",115.33],["a",115.75],["trip",115.83],["to",116.16],["the",116.33],["vet",116.58],["and",116.83],["fast",117.08]]},
    {"s":117.81,"e":118.91,"text":"But here's the thing.","words":[["but",117.81],["heres",118.02],["the",118.36],["thing",118.57]]},
    {"s":119.23,"e":121.94,"text":"A porcupine would much rather not fight at all.","words":[["a",119.23],["porcupine",119.3],["would",119.94],["much",120.3],["rather",120.58],["not",121.01],["fight",121.23],["at",121.58],["all",121.73]]},
    {"s":122.36,"e":124.45,"text":"It gives you plenty of warning first.","words":[["it",122.36],["gives",122.5],["you",122.85],["plenty",123.06],["of",123.47],["warning",123.61],["first",124.1]]},
    {"s":124.83,"e":125.7,"text":"It growls.","words":[["it",124.83],["growls",125.05]]},
    {"s":125.99,"e":127.27,"text":"It chatters its teeth.","words":[["it",125.99],["chatters",126.13],["its",126.7],["teeth",126.92]]},
    {"s":127.62,"e":129.82,"text":"It raises its black and white quills","words":[["it",127.62],["raises",127.76],["its",128.2],["black",128.42],["and",128.79],["white",129.01],["quills",129.38]]},
    {"s":130.09,"e":131.39,"text":"like a giant pincushion.","words":[["like",130.09],["a",130.35],["giant",130.41],["pincushion",130.74]]},
    {"s":131.81,"e":134.59,"text":"And it releases a smell from a patch on its lower back.","words":[["and",131.81],["it",132.01],["releases",132.14],["a",132.65],["smell",132.72],["from",133.04],["a",133.3],["patch",133.36],["on",133.68],["its",133.81],["lower",134.01],["back",134.33]]},
    {"s":135.03,"e":137.36,"text":"One scientist said it smells a bit like goat,","words":[["one",135.03],["scientist",135.22],["said",135.8],["it",136.06],["smells",136.19],["a",136.58],["bit",136.64],["like",136.84],["goat",137.1]]},
    {"s":137.89,"e":139.78,"text":"or a strange, stinky cheese.","words":[["or",137.89],["a",138.06],["strange",138.15],["stinky",138.75],["cheese",139.27]]},
    {"s":140.16,"e":141.54,"text":"If you still don't back off,","words":[["if",140.16],["you",140.29],["still",140.49],["dont",140.81],["back",141.08],["off",141.34]]},
    {"s":141.89,"e":143.99,"text":"it turns around and swings its tail.","words":[["it",141.89],["turns",142.03],["around",142.4],["and",142.83],["swings",143.05],["its",143.48],["tail",143.7]]},
    {"s":144.39,"e":145.03,"text":"Thwack.","words":[["thwack",144.39]]},
    {"s":145.32,"e":146.76,"text":"And there's one more twist.","words":[["and",145.32],["theres",145.53],["one",145.94],["more",146.14],["twist",146.42]]},
    {"s":147.17,"e":149.51,"text":"Porcupines sometimes stab themselves,","words":[["porcupines",147.17],["sometimes",147.88],["stab",148.51],["themselves",148.8]]},
    {"s":149.89,"e":151.51,"text":"like when they fall out of a tree.","words":[["like",149.89],["when",150.14],["they",150.39],["fall",150.64],["out",150.89],["of",151.07],["a",151.2],["tree",151.26]]},
    {"s":151.91,"e":154.99,"text":"So their quills come coated in greasy fats","words":[["so",151.91],["their",152.08],["quills",152.52],["come",153.05],["coated",153.4],["in",153.93],["greasy",154.11],["fats",154.64]]},
    {"s":155.05,"e":155.68,"text":"that fight off germs.","words":[["that",155.05],["fight",155.2],["off",155.38],["germs",155.49]]},
    {"s":156.13,"e":157.77,"text":"Built-in antibiotic.","words":[["builtin",156.13],["antibiotic",156.81]]},
    {"s":158.08,"e":159.84,"text":"Scientists love these quills.","words":[["scientists",158.08],["love",158.79],["these",159.07],["quills",159.42]]},
    {"s":160.13,"e":162.16,"text":"The same team that tested the barbs","words":[["the",160.13],["same",160.34],["team",160.62],["that",160.9],["tested",161.18],["the",161.6],["barbs",161.81]]},
    {"s":162.44,"e":165.15,"text":"is copying them for medical needles and staples","words":[["is",162.44],["copying",162.58],["them",163.05],["for",163.32],["medical",163.53],["needles",164.0],["and",164.48],["staples",164.68]]},
    {"s":165.21,"e":166.51,"text":"that slide in gently","words":[["that",165.21],["slide",165.52],["in",165.9],["gently",166.05]]},
    {"s":166.99,"e":168.13,"text":"and hold on tight.","words":[["and",166.99],["hold",167.24],["on",167.56],["tight",167.73]]},
    {"s":168.58,"e":170.73,"text":"So a porcupine's quill is a hair","words":[["so",168.58],["a",168.75],["porcupines",168.84],["quill",169.7],["is",170.13],["a",170.3],["hair",170.39]]},
    {"s":170.73,"e":172.87,"text":"that works like a fishhook,","words":[["that",170.73],["works",171.12],["like",171.61],["a",171.99],["fishhook",172.09]]},
    {"s":172.97,"e":174.53,"text":"goes in easy, comes out hard,","words":[["goes",172.97],["in",173.25],["easy",173.39],["comes",173.68],["out",174.03],["hard",174.25]]},
    {"s":174.53,"e":176.17,"text":"and keeps itself clean.","words":[["and",174.53],["keeps",174.79],["itself",175.22],["clean",175.74]]},
    {"s":176.6,"e":177.85,"text":"Not bad for a hair.","words":[["not",176.6],["bad",176.86],["for",177.13],["a",177.4],["hair",177.49]]},
    {"s":178.23,"e":180.46,"text":"Next time, how does a homing pigeon","words":[["next",178.23],["time",178.55],["how",178.87],["does",179.11],["a",179.43],["homing",179.5],["pigeon",179.98]]},
    {"s":180.46,"e":183.42,"text":"find its way home from hundreds of miles away?","words":[["find",180.46],["its",180.78],["way",181.02],["home",181.26],["from",181.58],["hundreds",181.9],["of",182.54],["miles",182.7],["away",183.1]]}
  ];
  const BEATS = PH.map((p, i) => ({ id: 'p' + i, s: p.s, e: p.e, text: p.text, w: Object.fromEntries(p.words.slice().reverse()) }));
  const T = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const at = (i, w) => T(i, w) - 0.12;
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

  const SC = [];
  const scene = (s, name, draw) => SC.push({ s, name, draw });
  // ---------- palette additions for this story ----------
  Object.assign(C, { porc: '#6e5038', porcD: '#4a3424', snout: '#8a6a4e', nose: '#2a1d16', quill: '#efe6d2', qtip: '#3a2c24', incisor: '#e8913a',
    fox: '#e0823c', foxD: '#b8622a', dog: '#c49a62', dogD: '#8f6a3e', meat: '#d96f6a', meatD: '#a8494a', skinL: '#f0c2a0', fleshL: '#e2877a',
    steel: '#b7c0cc', steelD: '#7f8a99', cone: '#9a6a3a', coneD: '#6e4625', stink: '#9ccf5a', goat: '#ece6d8', cheese: '#f2c94e', grease: '#f4d77a',
    germ: '#7fc65a', germD: '#4f9a3a', leaf: '#6fae4e', bark: '#7a5236', pigeon: '#9aa3b2', pigeonD: '#6c7486', neckG: '#58b08e', neckP: '#a070b8',
    white: '#f7f4ee', grey: '#8b8f98', glass: '#bfe6f5' });

  const ell = (c, x, y, rx, ry, a = 0) => { c.beginPath(); c.ellipse(x, y, rx, ry, a, 0, TAU); c.fill(); };
  const tri = (c, a, b, d) => { c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.lineTo(d[0], d[1]); c.closePath(); c.fill(); };
  // composite with rotation: parts [spr, x, y, rot, sh, ax, ay] (rotates about the sprite's anchor ax/ay, default bottom centre)
  const groupR = (key, w, h, parts, pad = 60) => CLX['grpR' + key] || (CLX['grpR' + key] = (() => {
    const Cv = H.layer(w + pad * 2, h + pad * 2), c = Cv.getContext('2d');
    parts.forEach(([s, x, y, rot = 0, sh = 0.35, ax, ay]) => {
      const axx = ax ?? s.w / 2, ayy = ay ?? s.h;
      c.save(); if (sh) { c.shadowColor = `rgba(40,20,10,${sh})`; c.shadowBlur = 5; c.shadowOffsetX = 3; c.shadowOffsetY = 4; }
      c.translate(x + pad, y + pad); c.rotate(rot); c.drawImage(s, -axx - s.pad, -ayy - s.pad); c.restore();
    });
    Cv.pad = pad; Cv.w = w; Cv.h = h; return Cv;
  })());
  // one quill sprite, tip up: cream shaft with a dark tip (k = length variant)
  const quillS = (len, k = 0) => group('quill' + len + k, 16, len, [
    [SP.shape('qsh' + len + k, 16, len, k % 2 ? '#e6d9bd' : C.quill, (c) => { c.beginPath(); c.moveTo(8, 0); c.lineTo(15, len * 0.35); c.lineTo(14, len); c.lineTo(2, len); c.lineTo(1, len * 0.35); c.closePath(); c.fill(); }, { R: 3.5, lump: 0.3, seed: 600 + k, fps: [], spec: 0.5 }), 0, 0, 0],
    [SP.shape('qtp' + len, 16, len * 0.3, C.qtip, (c) => { c.beginPath(); c.moveTo(8, 0); c.lineTo(14, len * 0.3); c.lineTo(2, len * 0.3); c.closePath(); c.fill(); }, { R: 3, lump: 0.3, seed: 610, fps: [], spec: 0.6 }), 0, 0, 0],
  ]);
  // the porcupine's quill fan, baked for raise level lv (0 relaxed and swept back, 1 raised like a pincushion)
  const PBX = 230, PBY = 230; // body centre inside the fan canvas
  const quillFan = (lv) => {
    const r = H.rng(77), parts = [];
    for (let i = 0; i < 46; i++) {
      const u = i / 45, th = Math.PI * (0.96 + u * 0.86) + r.range(-0.03, 0.03);
      const px = PBX + Math.cos(th) * 150 * 0.86, py = PBY + Math.sin(th) * 86 * 0.8;
      let nx = Math.cos(th) / 150, ny = Math.sin(th) / 86; const nl = Math.hypot(nx, ny); nx /= nl; ny /= nl;
      const bx = -0.96, by = -0.28, m = lv ? 0.08 : 0.62;
      let dx = nx * (1 - m) + bx * m, dy = ny * (1 - m) + by * m; const dl = Math.hypot(dx, dy); dx /= dl; dy /= dl;
      const len = [96, 112, 84][i % 3] * (lv ? 1.08 : 1) * (0.75 + 0.35 * Math.sin(u * Math.PI));
      parts.push([quillS(Math.round(len / 8) * 8, i % 2), px, py, Math.atan2(dx, -dy) + r.range(-0.06, 0.06), 0.25]);
    }
    return groupR('fan' + lv, 460, 360, parts, 40);
  };
  const SP2 = {
    pbody: () => SP.shape('pbody', 310, 176, C.porc, (c) => ell(c, 155, 88, 152, 86), { R: 24, seed: 620, lump: 1.6, marks: [[40, 60, 120, 40, 1.2], [150, 30, 240, 50, 1.2], [60, 110, 200, 120, 1.2]], markW: 5 }),
    phead: () => group('phead', 150, 120, [
      [SP.ball(C.porcD, 52, 621, 0.35), 0, 10],
      [SP.shape('psnout', 80, 62, C.snout, (c) => ell(c, 40, 31, 40, 29), { R: 12, seed: 622, fps: [] }), 70, 34],
      [SP.ball(C.nose, 12, 623, 0.8), 128, 40, 0.2],
      [SP.ball(C.porcD, 14, 624, 0.4), 18, 0, 0.2],
      [SP.ball(C.ink, 7, 625, 0.9), 74, 30, 0],
    ]),
    pteeth: () => SP.rect('pteeth', 20, 22, C.incisor, 4, { R: 4, seed: 626, fps: [], spec: 0.6 }),
    pfoot: (d) => SP.rect('pfoot' + d, 42, 34, d ? C.porcD : C.nose, 14, { R: 9, seed: 627 + d, fps: [] }),
    ptail: () => SP.shape('ptail', 100, 70, C.porcD, (c) => ell(c, 50, 35, 50, 30, 0.3), { R: 14, seed: 629, fps: [] }),
    // generic clay attacker (fox) / pet dog, side view facing right, origin bottom centre
    canid: (k) => { const b = k ? C.dog : C.fox, d = k ? C.dogD : C.foxD; return group('canid' + k, 360, 240, [
      [SP.shape('ctl' + k, 140, 70, b, (c) => ell(c, 70, 35, 70, 30, -0.4), { R: 16, seed: 640 + k }), 0, 70],
      [SP.ball(C.cream, 18, 642, 0.3), 2, 104, 0.2],
      [SP.rect('cl1' + k, 30, 80, d, 12, { R: 9, seed: 643, fps: [] }), 90, 158, 0.25], [SP.rect('cl2' + k, 30, 80, d, 12, { R: 9, seed: 644, fps: [] }), 210, 158, 0.25],
      [SP.shape('cb' + k, 210, 110, b, (c) => ell(c, 105, 55, 104, 52), { R: 20, seed: 645 + k, marks: [[30, 40, 180, 40, 1]], markW: 5 }), 70, 70],
      [SP.rect('cl3' + k, 30, 80, b, 12, { R: 9, seed: 646, fps: [] }), 110, 160, 0.25], [SP.rect('cl4' + k, 30, 80, b, 12, { R: 9, seed: 647, fps: [] }), 230, 160, 0.25],
      [SP.shape('ce' + k, 50, 60, d, (c) => tri(c, [5, 60], [25, 0], [48, 60]), { R: 9, seed: 648, fps: [] }), 236, 0],
      [SP.ball(b, 50, 649 + k, 0.35), 220, 30],
      [SP.shape('csn' + k, 90, 50, k ? C.dog : C.cream, (c) => { c.beginPath(); c.moveTo(0, 6); c.lineTo(84, 22); c.quadraticCurveTo(92, 34, 80, 44); c.lineTo(0, 50); c.closePath(); c.fill(); }, { R: 11, seed: 651 + k, fps: [] }), 270, 56],
      [SP.ball(C.nose, 11, 653, 0.8), 340, 64, 0.2],
      [SP.ball(C.ink, 7, 654, 0.9), 284, 56, 0],
    ]); },
    quillBig: (flare = 0) => groupR('qbig' + flare, 980, 160, [
      [SP.shape('qbshaft', 640, 56, C.quill, (c) => { c.beginPath(); c.roundRect(0, 0, 640, 56, 28); c.fill(); }, { R: 14, seed: 660, marks: [[40, 18, 600, 18, 0.8], [40, 38, 600, 38, 0.8]], markW: 6 }), 320, 108, 0, 0.3, 320, 28],
      [SP.shape('qbtip', 340, 64, C.qtip, (c) => { c.beginPath(); c.moveTo(0, 2); c.lineTo(340, 32); c.lineTo(0, 62); c.closePath(); c.fill(); }, { R: 12, seed: 661, spec: 0.5, fps: [] }), 780, 108, 0, 0.3, 170, 32],
      ...Array.from({ length: 12 }, (_, i) => { const u = i / 11, x = 660 + u * 260, half = 30 * (1 - (x - 610) / 340), up = i % 2 === 0; return [SP.shape('barb' + (i % 3), 56, 20, '#a8865e', (c) => tri(c, [0, 0], [56, 10], [0, 20]), { R: 3, seed: 662 + (i % 3), fps: [], spec: 0.6 }), x, 108 + (up ? -half : half), Math.PI + (up ? 1 : -1) * (0.32 + flare * 0.5), 0.2, 0, 10]; }),
    ], 70),
    meat: () => SP.rect('meat', 520, 200, C.meat, 30, { R: 18, seed: 670, lump: 1.8, marks: [[40, 60, 300, 90, 1.3], [200, 130, 480, 110, 1.3], [60, 160, 220, 150, 1.0]], markW: 8 }),
    skinX: () => group('skinx', 1180, 330, [
      [SP.rect('flesh', 1180, 290, C.fleshL, 20, { R: 16, seed: 671, lump: 2, marks: [[60, 120, 400, 130, 1.4], [500, 200, 900, 190, 1.4], [700, 90, 1100, 110, 1.4], [80, 240, 500, 250, 1.2]], markW: 10 }), 0, 40],
      [SP.rect('skintop', 1180, 60, C.skinL, 26, { R: 14, seed: 672, fps: [] }), 0, 0, 0.25],
    ]),
    scope: () => group('scope', 200, 300, [
      [SP.rect('scb', 190, 40, C.ink, 14, { R: 10, seed: 680, fps: [] }), 5, 258],
      [SP.rect('sca', 36, 200, C.steelD, 14, { R: 10, seed: 681, fps: [] }), 40, 70],
      [SP.rect('sct', 52, 150, C.steel, 20, { R: 12, seed: 682, spec: 0.7, fps: [] }), 96, 0],
      [SP.rect('scs', 120, 18, C.steelD, 8, { R: 6, seed: 683, fps: [] }), 60, 190],
    ]),
    cone: () => group('cone', 150, 210, [
      [SP.shape('coneb', 150, 210, C.coneD, (c) => ell(c, 75, 105, 70, 102), { R: 18, seed: 690 }), 0, 0],
      ...Array.from({ length: 12 }, (_, i) => [SP.shape('cnsc' + (i % 2), 46, 30, C.cone, (c) => { c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(23, 34, 46, 0); c.closePath(); c.fill(); }, { R: 6, seed: 691 + (i % 2), fps: [] }), 16 + (i % 3) * 38 - (Math.floor(i / 3) % 2) * 18 + 9, 26 + Math.floor(i / 3) * 42, 0.25]),
    ]),
    knife: () => group('knife', 520, 80, [
      [SP.rect('khan', 150, 46, C.wood, 18, { R: 12, seed: 700 }), 0, 20],
      [SP.shape('kbl', 380, 70, C.steel, (c) => { c.beginPath(); c.moveTo(0, 6); c.lineTo(360, 6); c.quadraticCurveTo(380, 6, 370, 30); c.lineTo(370, 50); for (let x = 360; x >= 0; x -= 20) { c.lineTo(x + 10, 64); c.lineTo(x, 54); } c.lineTo(0, 54); c.closePath(); c.fill(); }, { R: 8, seed: 701, spec: 0.8, fps: [] }), 140, 10],
    ]),
    hook: () => SP.shape('fhook', 160, 240, C.steelD, (c) => { c.lineWidth = 18; c.lineCap = 'round'; c.beginPath(); c.moveTo(110, 10); c.lineTo(110, 160); c.arc(70, 160, 40, 0, Math.PI); c.lineTo(30, 120); c.stroke(); tri(c, [30, 96], [14, 140], [50, 136]); c.beginPath(); c.arc(110, 14, 14, 0, TAU); c.stroke(); }, { R: 8, seed: 702, spec: 0.8, fps: [] }),
    ruler: (w = 560) => SP.rect('ruler' + w, w, 70, C.yellow, 8, { R: 8, seed: 703, dome: 0.6, fps: [], marks: Array.from({ length: Math.floor(w / 40) }, (_, i) => [20 + i * 40, 4, 20 + i * 40, i % 2 ? 22 : 36, 1.4]), markW: 3 }),
    column: () => group('col', 150, 330, [
      [SP.rect('colcap', 150, 34, C.stone, 6, { R: 8, seed: 710, fps: [] }), 0, 0],
      [SP.rect('colsh', 110, 270, C.stone, 10, { R: 12, seed: 711, marks: [[22, 10, 22, 260, 1.4], [44, 10, 44, 260, 1.4], [66, 10, 66, 260, 1.4], [88, 10, 88, 260, 1.4]], markW: 4 }), 20, 30, 0.2],
      [SP.rect('colb', 150, 34, C.stone, 6, { R: 8, seed: 712, fps: [] }), 0, 296],
    ]),
    tree: () => group('tree', 420, 470, [
      [SP.rect('trunk', 90, 280, C.bark, 22, { R: 16, seed: 720, marks: [[20, 40, 30, 250, 1.4], [60, 20, 66, 230, 1.4]], markW: 5 }), 165, 190],
      [SP.rect('branch', 200, 34, C.bark, 16, { R: 10, seed: 721, fps: [] }), 220, 262, 0.3],
      [SP.ball(C.leaf, 110, 722, 0.3), 0, 0, 0.3], [SP.ball(C.dkgreen, 95, 723, 0.3), 200, 10, 0.3], [SP.ball(C.leaf, 80, 724, 0.3), 110, 40, 0.3],
    ]),
    germ: (n) => group('germ' + (n % 3), 90, 90, [
      ...Array.from({ length: 8 }, (_, i) => { const a = (i / 8) * TAU; return [SP.ball(C.germD, 10, 730, 0.4), 35 + Math.cos(a) * 36, 35 + Math.sin(a) * 36, 0.15]; }),
      [SP.ball([C.germ, '#a8dd8a', '#8fcf7a'][n % 3], 34, 731 + (n % 3), 0.5), 11, 11],
      [SP.ball(C.white, 8, 734, 0.7), 28, 30, 0], [SP.ball(C.white, 8, 734, 0.7), 50, 30, 0], [SP.ball(C.ink, 4, 735, 0.8), 32, 34, 0], [SP.ball(C.ink, 4, 735, 0.8), 54, 34, 0],
    ]),
    needle: () => group('needle', 520, 90, [
      [SP.rect('syb', 260, 70, C.glass, 16, { R: 12, seed: 740, spec: 0.9, sss: [0.95, 1.02, 1.1] }), 60, 10],
      [SP.rect('syp', 70, 30, C.steelD, 10, { R: 8, seed: 741, fps: [] }), 0, 30],
      [SP.rect('syn', 200, 10, C.steel, 4, { R: 3, seed: 742, spec: 0.9, fps: [] }), 316, 40, 0.2],
    ]),
    staple: () => SP.shape('staple', 200, 140, C.steel, (c) => { c.lineWidth = 22; c.lineJoin = 'round'; c.beginPath(); c.moveTo(14, 140); c.lineTo(14, 14); c.lineTo(186, 14); c.lineTo(186, 140); c.stroke(); }, { R: 8, seed: 743, spec: 0.9, fps: [] }),
    goat: () => group('goat', 220, 230, [
      [SP.shape('ghorn', 70, 90, '#a89c88', (c) => { c.lineWidth = 20; c.lineCap = 'round'; c.beginPath(); c.moveTo(56, 85); c.quadraticCurveTo(40, 20, 8, 12); c.stroke(); }, { R: 7, seed: 750, fps: [] }), 20, 0], [SP.shape('ghorn2', 70, 90, '#a89c88', (c) => { c.lineWidth = 20; c.lineCap = 'round'; c.beginPath(); c.moveTo(14, 85); c.quadraticCurveTo(30, 20, 62, 12); c.stroke(); }, { R: 7, seed: 751, fps: [] }), 130, 0],
      [SP.shape('gear', 70, 34, C.goat, (c) => ell(c, 35, 17, 34, 15), { R: 9, seed: 756, fps: [] }), -10, 80], [SP.shape('gear2', 70, 34, C.goat, (c) => ell(c, 35, 17, 34, 15), { R: 9, seed: 757, fps: [] }), 160, 80],
      [SP.shape('gface', 150, 170, C.goat, (c) => ell(c, 75, 85, 70, 84), { R: 18, seed: 752 }), 35, 50],
      [SP.shape('gbeard', 50, 60, C.stone, (c) => tri(c, [0, 0], [50, 0], [25, 60]), { R: 8, seed: 753, fps: [] }), 85, 196, 0.2],
      [SP.ball(C.ink, 9, 754, 0.8), 70, 110, 0], [SP.ball(C.ink, 9, 754, 0.8), 130, 110, 0],
      [SP.ball(C.pink, 12, 755, 0.6), 98, 170, 0],
    ]),
    cheese: () => group('cheese', 230, 160, [
      [SP.shape('chw', 230, 160, C.cheese, (c) => { c.beginPath(); c.moveTo(0, 50); c.lineTo(230, 0); c.lineTo(230, 160); c.lineTo(0, 160); c.closePath(); c.fill(); }, { R: 14, seed: 760, fps: [[60, 110, 14, 1], [150, 70, 18, 2], [180, 130, 12, 3]] }), 0, 0],
    ]),
    pigeon: () => group('pigeon', 300, 230, [
      [SP.shape('pgt', 110, 60, C.pigeonD, (c) => tri(c, [0, 10], [110, 20], [110, 50]), { R: 10, seed: 770, fps: [] }), 0, 90],
      [SP.shape('pgb', 210, 130, C.pigeon, (c) => ell(c, 105, 65, 104, 62), { R: 20, seed: 771 }), 60, 70],
      [SP.shape('pgw', 140, 70, C.pigeonD, (c) => ell(c, 70, 35, 70, 30, 0.15), { R: 14, seed: 772, marks: [[30, 30, 120, 40, 1.4], [30, 48, 110, 56, 1.4]], markW: 4 }), 80, 96, 0.25],
      [SP.shape('pgn', 90, 90, C.neckG, (c) => ell(c, 45, 45, 42, 44), { R: 14, seed: 773, fps: [] }), 190, 40],
      [SP.ball(C.pigeon, 40, 774, 0.4), 200, 0],
      [SP.shape('pgk', 36, 20, C.stone, (c) => tri(c, [0, 0], [36, 10], [0, 20]), { R: 5, seed: 775, fps: [] }), 268, 30, 0.2],
      [SP.ball(C.coral, 7, 776, 0.8), 246, 22, 0],
      [SP.rect('pgl1', 12, 46, C.coral, 6, { R: 4, seed: 777, fps: [] }), 150, 184, 0.2], [SP.rect('pgl2', 12, 46, C.coral, 6, { R: 4, seed: 778, fps: [] }), 180, 184, 0.2],
    ]),
    xmark: () => SP.xmark(), check: () => SP.check(),
    qmark: () => SP.shape('qm', 120, 190, C.yellow, (c) => { c.lineWidth = 30; c.lineCap = 'round'; c.beginPath(); c.arc(60, 55, 40, Math.PI * 1.1, Math.PI * 0.45); c.lineTo(60, 125); c.stroke(); c.beginPath(); c.arc(60, 168, 17, 0, TAU); c.fill(); }, { R: 10, seed: 793, fps: [] }),
    lens: () => group('lens', 220, 300, [[SP.rect('lhan', 36, 140, C.wood, 14, { R: 10, seed: 577 }), 92, 160], [SP.shape('lring', 220, 220, '#5b6577', (c) => { c.lineWidth = 26; c.beginPath(); c.arc(110, 110, 96, 0, TAU); c.stroke(); }, { R: 10, seed: 578, fps: [] }), 0, 0]]),
    bar: (h, col, k) => SP.rect('bar' + k + h, 120, Math.max(24, h), col, 14, { R: 12, seed: 551 + k, fps: [] }),
    sign: () => group('sign', 240, 300, [[SP.rect('spost', 30, 200, C.wood, 10, { R: 8, seed: 795 }), 105, 100], [SP.shape('stri', 240, 210, C.yellow, (c) => { c.beginPath(); c.moveTo(120, 0); c.lineTo(240, 200); c.lineTo(0, 200); c.closePath(); c.fill(); }, { R: 14, seed: 796 }), 0, 0], [SP.rect('sbang', 26, 90, C.ink, 12, { R: 7, seed: 797, fps: [] }), 107, 60, 0.15], [SP.ball(C.ink, 15, 798, 0.6), 105, 160, 0.15]]),
    vet: () => group('vetbox', 200, 160, [[SP.rect('vbox', 200, 140, C.white, 18, { R: 14, seed: 800 }), 0, 20], [SP.rect('vhan', 80, 30, C.steelD, 10, { R: 8, seed: 801, fps: [] }), 60, 0, 0.2], [SP.rect('vc1', 30, 90, C.red, 6, { R: 6, seed: 802, fps: [] }), 85, 45, 0.15], [SP.rect('vc2', 90, 30, C.red, 6, { R: 6, seed: 803, fps: [] }), 55, 75, 0.15]]),
  };

  // ---------- the porcupine puppet (side view facing right, origin bottom centre) ----------
  // o.raise 0/1 (quill fan), o.flip faces left, o.chat (t0 teeth chatter), o.tail (tail swing angle), o.rotAll
  const porc = (x, y, s, st, en, o = {}) => {
    if (REC) { rec({ k: 'obj', t: st, x, w: 420 * s, big: o.big, hit: o.hit, minor: o.minor }); if (en != null) rec({ k: 'exit', t: en, mode: o.mode || 'fall', x, n: 1 }); return null; }
    const L = life(st, en, o.seed || 0, o.mode || 'fall'); if (!L) return null;
    if (o.ct !== false && L.dy < 40 && L.dx === 0) contact(x, y + 4, 190 * s * L.sx, 16 * s, 0.5);
    const c = ctxG, sh = { blur: 9, dx: 5, dy: 7, a: 0.38 };
    c.save(); c.translate(x + L.dx, y + L.dy); c.rotate(L.rot + (o.rotAll || 0)); c.scale(s * L.sx * (o.flip ? -1 : 1), s * L.sy);
    place(c, SP2.ptail(), -230, -110, { rot: o.tail || 0, ax: 90, ay: 30, shadow: sh });
    place(c, SP2.pfoot(1), -110, -36, { shadow: sh }); place(c, SP2.pfoot(1), 50, -36, { shadow: sh });
    const fan = quillFan(o.raise ? 1 : 0);
    place(c, fan, -PBX, -110 - PBY, { shadow: false });
    place(c, SP2.pbody(), -155, -198, { shadow: sh });
    if (o.chat != null && TQ >= o.chat) { const open = (Math.floor((TQ - o.chat) * 12) >> 1) % 2 ? 8 : 0; place(c, SP2.pteeth(), 196, -86 + open, { shadow: sh }); }
    place(c, SP2.phead(), 90, -164, { shadow: sh });
    place(c, SP2.pfoot(0), -70, -34, { shadow: sh }); place(c, SP2.pfoot(0), 90, -34, { shadow: sh });
    c.restore();
    return L;
  };
  // the attacker / dog puppet; o.quills: t0 when quills appear stuck in its snout; o.flip faces left
  const canid = (x, y, s, st, en, o = {}) => {
    if (REC) { rec({ k: 'obj', t: st, x, w: 360 * s, big: o.big, hit: o.hit, minor: o.minor }); if (en != null) rec({ k: 'exit', t: en, mode: o.mode || 'fall', x, n: 1 }); return null; }
    const L = life(st, en, o.seed || 0, o.mode || 'fall'); if (!L) return null;
    if (o.ct !== false && L.dy < 40 && L.dx === 0) contact(x, y + 4, 160 * s * L.sx, 14 * s, 0.5);
    const c = ctxG;
    c.save(); c.translate(x + L.dx + (o.dx || 0), y + L.dy); c.rotate(L.rot); c.scale(s * L.sx * (o.flip ? -1 : 1), s * L.sy);
    place(c, SP2.canid(o.k || 0), -180, -240, { shadow: { blur: 9, dx: 5, dy: 7, a: 0.38 } });
    if (o.quills != null && TQ >= o.quills) [[300, 70, 1.1], [320, 82, 1.3], [290, 92, 1.6], [334, 64, 0.9], [276, 78, 1.4]].forEach(([qx, qy, a], i) => { if (TQ >= o.quills + i / 12) place(c, quillS(64, i % 2), qx - 180 - 8, qy - 240 - 64 + 30, { ax: 8, ay: 64, rot: a, shadow: { blur: 4, dx: 2, dy: 3, a: 0.35 } }); });
    c.restore();
    return L;
  };
  const chap = (n, title, st) => word(n + '  ' + title, 36, 62, 34, st, X, 'fall', [C.cream], 1 / 48);
  const FY = TOP + 30;

  // ======================= CHAPTER 0: the hook =======================
  // 1. a porcupine pops onto the table, quills flare: 30,000 tiny harpoons. you? and why won't it come out?
  scene(0, 'hook', () => {
    set('hook', '#4f7a6a', '#c9a77a', { glow: 0.24 });
    porc(560, FY + 40, 1.2, at(0, 'porcupine'), X, { raise: TQ >= at(0, 'harpoons') ? 1 : 0, big: true });
    word('30,000', 60, 210, 130, at(0, '30000'), X, 'fall', C.yellow, 1 / 24, 0, 'impact');
    word('tiny harpoons', 66, 282, 50, at(0, 'harpoons'), X, 'fall', C.cream, 1 / 24);
    word('YOU?', 930, 200, 110, at(1, 'you'), X, 'fall', [C.coral, C.yellow], 1 / 24, 0, 'slap');
    obj(SP2.qmark(), 1060, 250, at(2, 'out'), X, { seed: 3, big: true, hit: 'pop', ct: [50, 8] });
    word('stuck', 920, 330, 56, at(2, 'out') + 0.1, X, 'fall', C.cream, 1 / 24);
  });
  // 2. a really close look at the pointiest coat in nature (a magnifier slides over the quills)
  scene(PS(3) - 0.15, 'look', () => {
    set('look', '#8a5f9e', '#d6b98a', { glow: 0.24 });
    wordC('POINTIEST COAT', 640, 130, 80, at(3, 'pointiest'), X, 'fall', [C.yellow, C.cream], 1 / 24, 0, 'stamp');
    porc(470, FY + 40, 1.05, PS(3), X, { raise: 1, seed: 4 });
    const lx = TQ < at(3, 'look') ? 1000 : 1000 - 300 * step6(at(3, 'look'), 0.6, 4);
    obj(SP2.lens(), lx, 190, at(3, 'close'), X, { seed: 5, rot: -0.2, hit: 'pop' });
  });

  // ======================= CHAPTER 1: the myth =======================
  // 3. bust the biggest myth: porcupines can't shoot their quills (flying quills get a red X)
  scene(PS(4) - 0.15, 'myth', () => {
    set('myth', '#c8794a', '#e2c79a', { glow: 0.26 });
    chap('1', 'THE MYTH', PS(4));
    wordC('MYTH', 640, 220, 130, at(4, 'myth'), X, 'fall', [C.yellow, C.coral], 1 / 24, 0, 'stamp');
    porc(330, FY + 30, 0.9, at(5, 'porcupines'), X, { raise: 1, seed: 6 });
    [[600, 300], [700, 360], [640, 420]].forEach(([qx, qy], i) => obj(quillS(80, i % 2), qx - 8, qy - 80, at(5, 'porcupines') + 0.25 + i * 0.12, X, { rot: Math.PI / 2 + (i - 1) * 0.08, seed: 7 + i, minor: true }));
    obj(SP2.xmark(), 820, 270, at(5, 'cant'), X, { seed: 10, big: true, hit: 'slap' });
    word('NOPE', 820, 470, 80, at(6, 'not'), X, 'fall', C.coral, 1 / 24);
  });
  // 4. believed since ancient Greece, but it isn't true
  scene(PS(7) - 0.15, 'greece', () => {
    set('greece', '#5f8f8a', '#d9c49a', { glow: 0.22 });
    chap('1', 'THE MYTH', PS(7) - 1);
    wordC('ANCIENT GREECE', 700, 150, 64, at(7, 'ancient'), X, 'fall', [C.cream, C.yellow], 1 / 24);
    obj(SP2.column(), 150, TOP - 330, at(7, 'people'), X, { ct: [80, 10], seed: 11 });
    obj(SP.scroll(), 470, 210, at(7, 'believed'), X, { seed: 12 });
    obj(SP2.xmark(), 620, 270, at(8, 'true'), X, { seed: 13, big: true, hit: 'slap' });
    word('NOT TRUE', 930, 440, 64, at(8, 'isnt'), X, 'fall', C.coral, 1 / 24);
  });
  // 5. about 30,000 quills on its back, sides and tail
  scene(PS(9) - 0.15, 'count', () => {
    set('count', '#3d6f96', '#c9b48a', { glow: 0.22 });
    chap('1', 'THE QUILL COAT', PS(9));
    porc(450, FY + 40, 1.25, at(9, 'north'), X, { raise: 1, big: true, seed: 14 });
    word('30,000', 830, 260, 140, at(9, '30000'), X, 'fall', C.yellow, 1 / 24, 0, 'impact');
    word('quills', 850, 340, 60, at(9, 'quills'), X, 'fall', C.cream, 1 / 24);
    word('back', 360, 150, 48, at(10, 'back'), X, 'fall', C.cream, 1 / 24);
    word('sides', 870, 470, 48, at(10, 'sides'), X, 'fall', C.cream, 1 / 24);
    word('tail', 40, 400, 48, at(10, 'tail'), X, 'fall', C.cream, 1 / 24);
  });
  // 6. each quill is a stiff, hollow hair of keratin, like your fingernails
  scene(PS(11) - 0.15, 'hair', () => {
    set('hair', '#b8862f', '#e2c79a', { glow: 0.3 });
    chap('1', 'THE QUILL COAT', PS(11) - 1);
    wordC('HOLLOW HAIR', 640, 160, 84, at(11, 'hollow'), X, 'fall', [C.cream, C.yellow], 1 / 24, 0, 'stamp');
    obj(SP2.quillBig(0), 150, 200, at(11, 'stiff'), X, { seed: 15, big: true });
    obj(group('xsec', 110, 110, [[SP.ball(C.quill, 55, 680, 0.5), 0, 0], [SP.ball('#cdbb98', 30, 681, 0.2), 25, 25, 0]]), 120, 390, at(11, 'hollow'), X, { seed: 16, ct: [50, 8] });
    word('keratin', 290, 480, 64, at(12, 'keratin'), X, 'fall', C.coral, 1 / 24);
    obj(group('finger', 280, 90, [[SP.rect('fing', 260, 84, C.skin, 42, { R: 16, seed: 682, marks: [[30, 30, 70, 30, 1.2], [30, 54, 70, 54, 1.2]], markW: 4 }), 0, 0], [SP.rect('fnail', 74, 60, '#f3c6c0', 22, { R: 10, seed: 683, spec: 0.7, fps: [] }), 176, 12, 0.2]]), 860, 420, at(12, 'fingernails'), X, { seed: 17, ct: [130, 10] });
    word('= nails', 900, 620, 52, at(12, 'fingernails'), X, 'fall', C.cream, 1 / 24);
  });
  // 7. up to four inches long ... and only loosely attached to the skin (they wobble)
  scene(PS(13) - 0.15, 'length', () => {
    set('length', '#56688f', '#d4c09a', { glow: 0.22 });
    chap('1', 'THE QUILL COAT', PS(13) - 1);
    const tL = PS(14) - 0.1;
    obj(SP2.ruler(560), 360, TOP - 70, at(13, 'four'), tL, { mode: 'left', seed: 18, ct: [280, 8] });
    obj(quillS(480, 0), 380 - 8, TOP - 110 - 480, at(13, 'theyre') + 0.1, tL, { rot: Math.PI / 2, mode: 'left', seed: 19 });
    word('4 inches', 420, 260, 100, at(13, 'four'), tL, 'left', C.yellow, 1 / 24, 0, 'impact');
    obj(SP.rect('skinbk', 620, 120, C.porc, 30, { R: 16, seed: 690 }), 330, TOP - 120, at(14, 'attached') - 0.3, X, { seed: 20, ct: [300, 10] });
    [0, 1, 2, 3, 4].forEach((i) => { const wob = TQ >= at(14, 'loosely') ? ((FRN >> 1) + i) % 2 ? 0.16 : -0.16 : 0; obj(quillS(200, i % 2), 400 + i * 110, TOP - 120 - 200 + 20, at(14, 'attached') - 0.2 + i / 12, X, { rot: -0.3 + i * 0.12 + wob, seed: 21 + i, minor: true }); });
    word('LOOSE', 430, 230, 100, at(14, 'loosely'), X, 'fall', C.coral, 1 / 24, 0, 'slap');
  });
  // 8. it doesn't throw anything: an attacker bumps in, the quills grab hold and pull out
  scene(PS(15) - 0.15, 'bump', () => {
    set('bump', '#4f7f5a', '#cdb88e', { glow: 0.24 });
    chap('1', 'THE QUILL COAT', PS(15) - 1);
    wordC('NO THROWING', 640, 150, 72, at(15, 'throw'), X, 'fall', [C.cream, C.yellow], 1 / 24);
    porc(400, FY + 30, 0.95, PS(15), X, { raise: 1, flip: true, seed: 22 });
    const tB = at(16, 'bumps'), tP = at(18, 'pull');
    const cx = TQ < tB ? 1150 : TQ < tP ? 1150 - 300 * step6(tB, 0.35, 3) : 850 + 300 * step6(tP, 0.4, 3);
    canid(cx, FY + 30, 0.9, at(16, 'attacker'), X, { flip: true, quills: at(17, 'grab'), seed: 23, hit: 'thud' });
    word('grab!', 900, 260, 64, at(17, 'grab'), X, 'fall', C.coral, 1 / 24, 0, 'pop');
    word('pulled out', 860, 640, 56, at(18, 'pull'), X, 'fall', C.cream, 1 / 24);
  });

  // ======================= CHAPTER 2: like a fishhook =======================
  // 9. zoom in on the very tip of one quill (a clay microscope; the camera dives into the eyepiece)
  scene(PS(19) - 0.15, 'scope', () => {
    set('scope', '#7a5a8e', '#d6b98a', { glow: 0.24 });
    const tZ = at(19, 'quill'), sc = TQ < tZ ? 1 : 1 + 1.6 * step6(tZ, 0.5, 4);
    cam(sc, 640, 230, () => {
      chap('2', 'LIKE A FISHHOOK', PS(19));
      obj(SP2.scope(), 540, TOP - 300, at(19, 'zoom'), X, { seed: 24, ct: [100, 10], big: true });
      obj(quillS(120, 0), 400, TOP - 30 - 120 + 30, at(19, 'tip') - 0.2, X, { rot: Math.PI / 2, seed: 25 });
      wordC('THE TIP', 640, 180, 90, at(19, 'tip'), X, 'fall', [C.yellow, C.cream], 1 / 24);
    });
  });
  // 10. hundreds of tiny barbs, all pointing backwards, like the scales on a pine cone
  scene(PS(20) - 0.15, 'barbs', () => {
    set('barbs', '#2f5f7a', '#b9b1a3', { glow: 0.3, light: [900, 260] });
    wordC('100s OF BARBS', 640, 150, 76, at(20, 'hundreds'), X, 'fall', [C.cream, C.yellow], 1 / 24, 0, 'stamp');
    obj(SP2.quillBig(0), 230, 200, at(20, 'microscope'), X, { seed: 26, big: true });
    coil('back', [[1060, 450], [840, 450]], C.coral, at(21, 'backwards'), X, { wdt: 18 });
    word('backwards', 820, 540, 52, at(21, 'backwards'), X, 'fall', C.coral, 1 / 24);
    obj(SP2.cone(), 40, TOP - 210, at(21, 'pine'), X, { seed: 27, ct: [70, 10] });
    word('pine cone', 30, 600, 48, at(21, 'cone'), X, 'fall', C.cream, 1 / 24);
  });
  // 11. 2012: scientists pushed quills into meat in the lab. something surprising
  scene(PS(22) - 0.15, 'lab', () => {
    set('lab', '#c8794a', '#e2c79a', { glow: 0.26 });
    chap('2', 'LIKE A FISHHOOK', PS(22) - 1);
    word('2012', 70, 260, 140, at(22, '2012'), X, 'fall', C.yellow, 1 / 24, 0, 'stamp');
    const tq = at(22, 'quills'), push = TQ < tq ? 0 : step6(tq, 1.2, 6);
    obj(quillS(240, 0), 880 - 8, TOP - 680 + push * 100, at(22, 'pushed'), X, { rot: Math.PI, seed: 28 });
    obj(SP2.meat(), 620, TOP - 200, at(22, 'scientists'), X, { seed: 29, ct: [240, 10], alpha: 0.85 });
    word('meat', 660, 640, 56, at(22, 'meat'), X, 'fall', C.cream, 1 / 24);
    word('SURPRISE!', 70, 430, 80, at(23, 'surprising'), X, 'fall', [C.coral, C.yellow], 1 / 24, 0, 'ding');
  });
  // 12. barbs cut the force needed to go in by about half (two clay bars)
  scene(PS(24) - 0.15, 'half', () => {
    set('half', '#56688f', '#d4c09a', { glow: 0.22 });
    chap('2', 'LIKE A FISHHOOK', PS(24) - 1);
    word('force to go in', 640, 190, 56, at(24, 'force'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.bar(320, C.coral, 1), 200, TOP - 320, at(24, 'force'), X, { seed: 30, ct: [60, 8] });
    const tH = at(24, 'half'), h = TQ < tH ? 320 : Math.round((320 - 160 * step6(tH, 0.4, 4)) / 10) * 10;
    obj(SP2.bar(h, C.green, 2), 420, TOP - h, at(24, 'force') + 0.15, X, { seed: 31, ct: [60, 8] });
    wordC('smooth', 260, 600, 48, at(24, 'force'), X, 'fall', C.cream, 1 / 24);
    wordC('barbed', 480, 600, 48, at(24, 'force') + 0.15, X, 'fall', C.green, 1 / 24);
    word('1/2', 700, 390, 170, at(24, 'half'), X, 'fall', C.yellow, 1 / 24, 0, 'impact');
  });
  // 13. barbs grip and slice, like a bread knife, so the quill slides in deep and easy
  scene(PS(25) - 0.15, 'knife', () => {
    set('knife', '#8a5f3e', '#e2c79a', { glow: 0.28 });
    chap('2', 'LIKE A FISHHOOK', PS(25) - 1);
    obj(SP2.quillBig(0), -330, 230, at(25, 'barbs'), X, { seed: 32 });
    word('grip', 680, 300, 72, at(25, 'grip'), X, 'fall', C.yellow, 1 / 24);
    word('+ slice', 860, 300, 72, at(25, 'slice'), X, 'fall', C.coral, 1 / 24);
    obj(SP2.knife(), 640, 380, at(26, 'knife'), X, { seed: 33, rot: -0.05 });
    coil('easy', [[120, 600], [420, 600]], C.green, at(27, 'slides'), X, { wdt: 16 });
    word('EASY', 470, 630, 84, at(27, 'easy'), X, 'fall', C.green, 1 / 24, 0, 'ding');
  });
  // 14. pulling them out: barbs flare and snag, about four times more force
  scene(PS(28) - 0.15, 'pull', () => {
    set('pull', '#3f7f7a', '#c9a77a', { glow: 0.24 });
    chap('2', 'LIKE A FISHHOOK', PS(28) - 1);
    const tP = at(28, 'pulling'), tF = at(29, 'flare'), dx = TQ < tP ? 0 : -40 * step6(tP, 0.5, 2) + (TQ >= at(29, 'snag') ? 8 * (((FRN >> 1) % 2) ? 1 : -1) : 0);
    obj(SP2.quillBig(TQ >= tF ? 1 : 0), -120 + dx, 222, PS(28), X, { seed: 34 });
    const mb = TQ >= at(29, 'snag') ? bump(at(29, 'snag')) : [1, 1];
    obj(SP2.meat(), 760, 230, PS(28), X, { seed: 35, alpha: 0.72, sx: mb[0], sy: mb[1] });
    word('snag!', 820, 520, 64, at(29, 'snag'), X, 'fall', C.coral, 1 / 24, 0, 'slap');
    word('4x', 600, 200, 140, at(30, 'four'), X, 'fall', C.yellow, 1 / 24, 0, 'impact');
    word('the force', 800, 190, 56, at(30, 'force'), X, 'fall', C.cream, 1 / 24);
  });
  // 15. in, easy. out, really hard. just like a fishhook
  scene(PS(32) - 0.15, 'inout', () => {
    set('inout', '#8a5f9e', '#d6b98a', { glow: 0.24 });
    word('IN', 110, 270, 120, at(32, 'in'), X, 'fall', C.green, 1 / 24, 0, 'pop');
    coil('in', [[300, 230], [470, 230]], C.green, at(32, 'easy'), X, { wdt: 16 });
    word('easy', 500, 260, 64, at(32, 'easy'), X, 'fall', C.cream, 1 / 24);
    word('OUT', 110, 440, 120, at(32, 'out'), X, 'fall', C.coral, 1 / 24, 0, 'slap');
    coil('out', [[520, 400], [380, 400]], C.coral, at(32, 'hard'), X, { wdt: 26 });
    word('HARD', 560, 430, 64, at(32, 'hard'), X, 'fall', C.coral, 1 / 24);
    obj(SP2.hook(), 900, TOP - 260, at(33, 'fishhook'), X, { seed: 36, big: true, hit: 'ding', ct: [60, 8] });
    wordC('fishhook', 980, 620, 56, at(33, 'fishhook'), X, 'fall', C.cream, 1 / 24);
  });
  // 16. less than half a centimetre in, and it's already holding on
  scene(PS(34) - 0.15, 'cm', () => {
    set('cm', '#4f7a6a', '#c9a77a', { glow: 0.24 });
    wordC('< 0.5 cm', 640, 125, 100, at(34, 'centimeter'), X, 'fall', [C.yellow, C.cream], 1 / 24, 0, 'impact');
    obj(quillS(160, 1), 640 - 8, TOP - 330 - 160, at(34, 'half'), X, { rot: Math.PI, seed: 38 });
    obj(SP2.meat(), 380, TOP - 200, at(34, 'less'), X, { seed: 37, ct: [240, 10], alpha: 0.8 });
    wordC('already holding', 640, 650, 56, at(35, 'holding'), X, 'fall', C.green, 1 / 24, 0, 'ding');
  });

  // ======================= CHAPTER 3: the sneaky part =======================
  // 17. a stuck quill doesn't sit still: each move, muscles squeeze, the barbs ratchet it forward and deeper
  scene(PS(36) - 0.15, 'sneak', () => {
    set('sneak', '#a0604e', '#c9a77a', { glow: 0.2 });
    const tZ = at(40, 'ratchet'), sc = TQ < tZ ? 1 : 1 + 0.18 * step6(tZ, 0.6, 3);
    cam(sc, 640, 420, () => {
      obj(SP2.skinX(), 50, 330, PS(36), X, { seed: 40 });
      const steps = [at(38, 'moves'), at(39, 'squeeze'), at(41, 'forward'), at(42, 'deeper')];
      const d = steps.filter((t) => TQ >= t).length * 34, th = Math.PI - 0.55, ux = Math.sin(th), uy = -Math.cos(th);
      const rx = 560 + ux * d, ry = 290 + uy * d;
      obj(quillS(300, 0), rx - 8, ry - 300, at(37, 'stuck'), X, { rot: th, seed: 41, big: true });
      coil('mL', [[420, 610], [560, 560]], C.red, at(39, 'muscles'), X, { wdt: 14 });
      coil('mR', [[900, 470], [790, 500]], C.red, at(39, 'squeeze'), X, { wdt: 14 });
      word('muscle', 260, 630, 48, at(39, 'muscles'), X, 'fall', C.red, 1 / 24);
    });
    chap('3', 'THE SNEAKY PART', PS(36));
    wordC('STUCK', 640, 160, 80, at(37, 'stuck'), X, 'fall', [C.coral, C.cream], 1 / 24);
    word('one way', 860, 270, 64, at(40, 'one'), X, 'fall', C.cream, 1 / 24);
    word('FORWARD', 80, 270, 90, at(41, 'forward'), X, 'fall', C.yellow, 1 / 24, 0, 'impact');
  });
  // 18. why a dog that noses a porcupine needs the vet, fast
  scene(PS(43) - 0.15, 'vet', () => {
    set('vet', '#5f8f8a', '#d9c49a', { glow: 0.24 });
    chap('3', 'THE SNEAKY PART', PS(43) - 1);
    canid(470, FY + 30, 1.1, at(43, 'dog'), X, { k: 1, quills: at(43, 'noses'), seed: 42 });
    obj(SP2.vet(), 900, TOP - 160, at(44, 'vet'), X, { seed: 43, ct: [100, 10], big: true, hit: 'ding' });
    word('VET', 880, 250, 120, at(44, 'vet'), X, 'fall', C.coral, 1 / 24);
    word('fast!', 900, 330, 64, at(44, 'fast'), X, 'fall', C.yellow, 1 / 24);
  });

  // ======================= CHAPTER 4: warnings first =======================
  // 19. a porcupine would rather not fight: it warns you first
  scene(PS(45) - 0.15, 'calm', () => {
    set('calm', '#7a9a5e', '#d6c08e', { glow: 0.28 });
    chap('4', 'WARNINGS FIRST', PS(45));
    wordC('NO FIGHT', 640, 160, 90, at(46, 'fight'), X, 'fall', [C.cream, C.green], 1 / 24, 0, 'stamp');
    porc(400, FY + 30, 1.05, PS(45), X, { raise: 0, seed: 44 });
    obj(SP2.sign(), 880, TOP - 300, at(47, 'warning'), X, { seed: 45, ct: [60, 8], big: true, hit: 'pop' });
    wordC('warning', 1000, 620, 52, at(47, 'warning'), X, 'fall', C.yellow, 1 / 24);
  });
  // 20. it growls; it chatters its teeth
  scene(PS(48) - 0.15, 'growl', () => {
    set('growl', '#a0603e', '#d6b07a', { glow: 0.24 });
    porc(480, FY + 40, 1.3, PS(48) - 0.15, X, { chat: at(49, 'chatters'), seed: 46 });
    word('GRRR', 860, 220, 110, at(48, 'growls'), X, 'fall', [C.coral, C.yellow], 1 / 24, 0, 'slap');
    word('chatter', 870, 320, 72, at(49, 'chatters'), X, 'fall', C.cream, 1 / 24);
  });
  // 21. it raises its black-and-white quills like a giant pincushion
  scene(PS(50) - 0.15, 'raise', () => {
    set('raise', '#3d5f8a', '#c9b48a', { glow: 0.24 });
    porc(560, FY + 40, 1.25, PS(50) - 0.15, X, { raise: TQ >= at(50, 'raises') ? 1 : 0, seed: 47 });
    word('black + white', 60, 200, 56, at(50, 'black'), X, 'fall', [C.cream, C.ink], 1 / 24);
    wordC('PINCUSHION', 640, 130, 90, at(51, 'pincushion'), X, 'fall', [C.yellow, C.coral], 1 / 24, 0, 'stamp');
  });
  // 22. a smell from its lower back: a bit like goat, or a strange, stinky cheese
  scene(PS(52) - 0.15, 'smell', () => {
    set('smell', '#6a7f4a', '#d6c08e', { glow: 0.24 });
    porc(300, FY + 30, 0.9, PS(52) - 0.15, X, { raise: 1, flip: true, seed: 48 });
    const tS = at(52, 'smell');
    if (REC) rec({ k: 'obj', t: tS, x: 440, w: 100, hit: 'pop' });
    else if (TQ >= tS && TQ < X) for (let i = 0; i < 4; i++) { const u = ((TQ - tS) * 0.6 + i * 0.25) % 1; place(ctxG, SP.puff((FRN >> 1) % 3, C.stink, 1.3), 420 + i * 22 + Math.sin(u * 7 + i) * 16, 330 - Math.round(u * 6) * 40, { alpha: 0.85 * (1 - u) }); }
    word('STINK', 470, 170, 90, tS, X, 'fall', C.stink, 1 / 24);
    word('lower back', 290, 650, 44, at(52, 'lower'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.goat(), 700, TOP - 250, at(53, 'goat'), X, { seed: 49, ct: [80, 8] });
    wordC('goat', 810, 640, 52, at(53, 'goat'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.cheese(), 980, TOP - 160, at(54, 'cheese'), X, { seed: 50, ct: [110, 8], hit: 'pop' });
    wordC('cheese', 1095, 640, 52, at(54, 'cheese'), X, 'fall', C.yellow, 1 / 24);
  });
  // 23. still don't back off? it turns around and swings its tail. THWACK
  scene(PS(55) - 0.15, 'tail', () => {
    set('tail', '#8a5f9e', '#d6b98a', { glow: 0.24 });
    const tS = at(56, 'swings'), k = TQ < tS ? 0 : Math.min(5, Math.floor((TQ - tS) * 12) >> 1);
    porc(380, FY + 30, 1.0, PS(55) - 0.15, X, { raise: 1, flip: true, tail: [0, -0.7, 0.5, -0.5, 0.25, 0][k], seed: 51 });
    canid(1000, FY + 30, 0.85, at(55, 'still'), at(57, 'thwack') + 0.05, { flip: true, mode: 'right', seed: 52 });
    word('THWACK!', 560, 210, 120, at(57, 'thwack'), X, 'fall', [C.yellow, C.coral], 1 / 24, 0, 'impact');
    word('back off?', 760, 140, 56, at(55, 'back'), at(57, 'thwack'), 'right', C.cream, 1 / 24);
  });

  // ======================= CHAPTER 5: self-cleaning quills =======================
  // 24. one more twist: porcupines sometimes stab themselves, like falling out of a tree
  scene(PS(58) - 0.15, 'tree', () => {
    set('tree', '#5f8fa0', '#d6c08e', { glow: 0.26 });
    chap('5', 'ONE MORE TWIST', PS(58));
    word('TWIST', 80, 260, 120, at(58, 'twist'), X, 'fall', [C.yellow, C.cream], 1 / 24, 0, 'stamp');
    obj(SP2.tree(), 720, TOP - 470, PS(58), X, { seed: 53, ct: [80, 10] });
    const tF = at(60, 'fall'), d = TQ < tF ? 0 : Math.min(1, Math.round((TQ - tF) * 12) / 12 / 0.45), fy = 302 + (FY - 302) * d * d;
    porc(1070, fy, 0.42, PS(58) + 0.25, X, { raise: d > 0 ? 1 : 0, seed: 54, ct: d >= 1, rotAll: d > 0 && d < 1 ? 0.5 : 0 });
    word('OUCH!', 300, 420, 90, tF + 0.45, X, 'fall', C.coral, 1 / 24, 0, 'slap');
  });
  // 25. greasy fats coat the quills and fight off germs: built-in antibiotic
  scene(PS(61) - 0.15, 'grease', () => {
    set('grease', '#4f7f5a', '#cdb88e', { glow: 0.24 });
    chap('5', 'ONE MORE TWIST', PS(61) - 1);
    obj(SP2.quillBig(0), 100, 210, PS(61), X, { seed: 55 });
    obj(SP.rect('coat', 960, 110, C.grease, 50, { R: 16, seed: 691, spec: 0.9, dome: 0.5, fps: [] }), 120, 305 - 55 + 15, at(61, 'greasy'), X, { seed: 56, alpha: 0.42, shadow: false });
    word('greasy fats', 110, 470, 56, at(61, 'fats'), X, 'fall', C.grease, 1 / 24);
    [0, 1, 2, 3].forEach((i) => { const tg = at(62, 'germs') + i * 0.1, bx = TQ >= at(62, 'off') ? 40 * step6(at(62, 'off'), 0.3, 2) : 0; obj(SP2.germ(i), 560 + i * 170 + bx * (i % 2 ? 1 : -1), 460 + bx * 0.6, tg, at(63, 'antibiotic') + i * 0.08, { seed: 57 + i, minor: true }); });
    wordC('ANTIBIOTIC', 640, 150, 90, at(63, 'antibiotic'), X, 'fall', [C.green, C.cream], 1 / 24, 0, 'success');
  });
  // 26. scientists copy the quills for medical needles and staples that slide in gently and hold on tight
  scene(PS(64) - 0.15, 'med', () => {
    set('med', '#3d6f96', '#c9b48a', { glow: 0.24 });
    chap('5', 'ONE MORE TWIST', PS(64) - 1);
    wordC('QUILL-INSPIRED', 640, 150, 72, at(64, 'love'), X, 'fall', [C.cream, C.yellow], 1 / 24, 0, 'stamp');
    obj(SP2.needle(), 120, 230, at(66, 'needles'), X, { seed: 61, big: true });
    word('needles', 200, 390, 56, at(66, 'needles'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.staple(), 820, TOP - 140, at(66, 'staples'), X, { seed: 62, ct: [100, 8], big: true });
    word('staples', 830, 330, 56, at(66, 'staples'), X, 'fall', C.cream, 1 / 24);
    word('in gently', 120, 600, 56, at(67, 'gently'), X, 'fall', C.green, 1 / 24);
    word('hold tight', 760, 600, 56, at(68, 'tight'), X, 'fall', C.coral, 1 / 24, 0, 'ding');
  });
  // 27. recap: a hair that works like a fishhook, in easy, out hard, keeps itself clean
  scene(PS(69) - 0.15, 'recap', () => {
    set('recap', '#8a5f3e', '#e2c79a', { glow: 0.3 });
    wordC('NOT BAD!', 640, 140, 84, at(73, 'bad'), X, 'fall', [C.yellow, C.cream], 1 / 24, 0, 'stamp');
    obj(SP2.quillBig(0), 60, 190, at(69, 'quill'), X, { seed: 63 });
    word('HAIR', 90, 200, 64, at(69, 'hair'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.hook(), 1090, TOP - 250, at(70, 'fishhook'), X, { seed: 64, ct: [60, 8], hit: 'pop' });
    word('in easy', 90, 470, 60, at(71, 'easy'), X, 'fall', C.green, 1 / 24);
    word('out hard', 400, 470, 60, at(71, 'hard'), X, 'fall', C.coral, 1 / 24);
    word('clean', 740, 470, 60, at(72, 'clean'), X, 'fall', C.cyan, 1 / 24);
    obj(SP2.check(), 900, 380, at(72, 'clean') + 0.1, X, { seed: 65, sx: 0.7, sy: 0.7, hit: 'success' });
  });
  // 28. next time: how does a homing pigeon find its way home?
  scene(PS(74) - 0.15, 'next', () => {
    set('next', '#6f5a3e', '#d6b07a', { glow: 0.24 });
    word('NEXT TIME', 80, 150, 80, at(74, 'next'), null, 'fall', C.yellow, 1 / 24);
    obj(SP2.pigeon(), 160, TOP - 230, at(74, 'pigeon'), null, { ct: [120, 10], seed: 66, big: true });
    word('homing', 620, 320, 110, at(74, 'homing'), null, 'fall', C.cream, 1 / 24);
    word('HOME?', 660, 450, 110, at(75, 'home'), null, 'fall', [C.coral, C.yellow], 1 / 24, 0, 'end');
    word('100s of miles', 660, 560, 56, at(75, 'hundreds'), null, 'fall', C.cream, 1 / 24);
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
    const crackle = (t, d, g = 1) => { const r = H.rng(Math.round(t * 100)); for (let x = 0; x < d; x += r.range(0.03, 0.09)) k.noise(t + x, { dur: 0.012 + r() * 0.015, filter: 'highpass', f: r.range(3000, 6500), gain: r.range(0.05, 0.14) * g, minor: true, pan: r.range(-0.5, 0.5) }); };
    const hit = (h, t, x) => {
      const p = pan(x);
      if (h === 'impact') { k.play('impact', t, { gain: 1.2, pan: p }); plop(t, 1.8, 95, p, false); }
      else if (h === 'slap') { k.play('slap', t, { gain: 0.7, pan: p }); plop(t, 1.3, 100, p, false); k.tone(t + 0.02, { f: 'D3', type: 'triangle', dur: 0.16, gain: 0.2, filter: 'lowpass', f2: 700 }); k.tone(t + 0.18, { f: 'A2', type: 'triangle', dur: 0.3, gain: 0.22, filter: 'lowpass', f2: 600 }); }
      else if (h === 'ding') { k.play('ding', t, { f: 'E6', gain: 0.45, pan: p }); }
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
      }
    });
    // quill pokes: a soft squish into clay meat; the pull-out creak and the snag
    squelch(q(at(22, 'quills')), 0.7, 0.3, 0.6, false);
    { const t = q(at(28, 'pulling')); k.tone(t, { f: [[0, 140], [0.5, 90]], dur: 0.5, gain: 0.14 }); squelch(t, 0.6, -0.2, 0.5, false); }
    // the force bar shrinking, a sweep down
    k.tone(q(at(24, 'half')), { f: [[0, 600], [0.4, 300]], dur: 0.4, gain: 0.12, type: 'triangle' });
    // ratchet clicks as the stuck quill moves deeper
    [at(38, 'moves'), at(39, 'squeeze'), at(41, 'forward'), at(42, 'deeper')].forEach((t) => { k.noise(q(t), { dur: 0.03, filter: 'highpass', f: 2200, gain: 0.25 }); plop(q(t), 0.7, 120, 0, false); });
    // camera dive into the microscope
    k.play('whoosh', q(at(19, 'quill')), { dur: 0.5, gain: 0.35, top: 1200 });
    // growl and tooth chatter
    k.tone(q(at(48, 'growls')), { f: [[0, 70], [0.6, 60]], dur: 0.7, gain: 0.18, type: 'sawtooth', filter: 'lowpass', f2: 300 });
    for (let i = 0; i < 10; i++) k.noise(q(at(49, 'chatters')) + i / 6, { dur: 0.025, filter: 'bandpass', f: 2600, q: 3, gain: 0.22, minor: true });
    // quills bristling up
    k.play('riser', q(at(50, 'raises')), { dur: 0.4, gain: 0.3 }); crackle(q(at(50, 'raises')), 0.4, 1.2);
    // stink puffs: soft hisses
    for (let i = 0; i < 5; i++) k.noise(q(at(52, 'smell')) + i * 0.5, { dur: 0.35, color: 'pink', filter: 'bandpass', f: 1200, q: 0.8, gain: 0.08, a: 0.1, minor: true });
    // tail swing + thwack
    k.play('swish', q(at(56, 'swings')), { dur: 0.25, gain: 0.45, pan: -0.3 }); k.play('swish', q(at(56, 'swings')) + 0.2, { dur: 0.2, gain: 0.35, pan: 0.3 });
    // falling out of the tree
    k.play('whoosh', q(at(60, 'fall')), { dur: 0.45, gain: 0.35, top: 700 }); k.play('thud', q(at(60, 'fall')) + 0.45, { gain: 0.7 });
    // germs bouncing off the grease
    [0, 1, 2, 3].forEach((i) => k.tone(q(at(62, 'off')) + i * 0.06, { f: [[0, 300 + i * 60], [0.12, 700 + i * 80]], dur: 0.12, gain: 0.1, minor: true }));
    k.play('sparkle', q(at(61, 'greasy')), { n: 5, gain: 0.35 });
    // stop-motion cuts: a soft table bump on each new set
    SC.slice(1).forEach((s) => squelch(q(s.s), 0.35, 0, 0.1));
  }

  function thumbnail(ctx, W, H_) {
    ctxG = ctx; TQ = 3; FRN = 36; X = 999;
    set('thumb', '#4f7a6a', '#c9a77a', { glow: 0.3 });
    porc(330, FY + 60, 1.2, 0, null, { seed: 1, raise: 1 });
    word('TINY', 780, 280, 160, 0, null, 'fall', [C.cream, C.yellow], 0);
    word('HOOKS', 680, 470, 160, 0, null, 'fall', [C.yellow, C.coral], 0);
    finish(ctx);
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0; window.SCENES = SC;
})();
