// ================= Claymation Set, 16:9 1280x720: "Why can you hold a crocodile's jaws shut with your bare hands?" =================
// Long explainer. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// One clay studio: every scene is a sculpted set (wall + table), every piece a baked plasticine lump popped on with
// squash-and-stretch on twos (12 fps), slid, or knocked off the table at the end of the beat.
(function () {
  const W0 = 1280, H0 = 720, TAU = Math.PI * 2;
  // ---------- BEATS: one entry per voiceover phrase (phrases.json, Kokoro am_michael) ----------
  const PH = [
    {"s":0.25,"e":1.99,"text":"Why can your bare hands hold shut","words":[["why",0.25],["can",0.44],["your",0.64],["bare",0.89],["hands",1.15],["hold",1.47],["shut",1.73]]},
    {"s":2.29,"e":4.09,"text":"the strongest bite ever measured,","words":[["the",2.29],["strongest",2.48],["bite",3.06],["ever",3.32],["measured",3.57]]},
    {"s":4.39,"e":7.32,"text":"3,700 pounds of crocodile?","words":[["3700",4.39],["pounds",4.94],["of",5.78],["crocodile",6.06]]},
    {"s":7.87,"e":9.85,"text":"It sounds impossible, but it's true.","words":[["it",7.87],["sounds",8.01],["impossible",8.44],["but",9.14],["its",9.35],["true",9.56]]},
    {"s":10.4,"e":13.4,"text":"Let's open up the most lopsided jaw in nature.","words":[["lets",10.4],["open",10.73],["up",11.06],["the",11.23],["most",11.48],["lopsided",11.82],["jaw",12.48],["in",12.73],["nature",12.9]]},
    {"s":13.95,"e":17.12,"text":"Back in 2012, a team of scientists","words":[["back",13.95],["in",14.42],["2012",14.66],["a",15.12],["team",15.24],["of",15.71],["scientists",15.94]]},
    {"s":17.42,"e":20.12,"text":"set out to measure every crocodile on Earth.","words":[["set",17.42],["out",17.64],["to",17.87],["measure",18.02],["every",18.54],["crocodile",18.92],["on",19.59],["earth",19.74]]},
    {"s":20.67,"e":22.63,"text":"All 23 living species,","words":[["all",20.67],["23",21.0],["living",21.21],["species",21.87]]},
    {"s":22.93,"e":25.31,"text":"from tiny caimans to giant gharials.","words":[["from",22.93],["tiny",23.25],["caimans",23.56],["to",24.12],["giant",24.28],["gharials",24.68]]},
    {"s":25.86,"e":27.14,"text":"They wrestled each one","words":[["they",25.86],["wrestled",26.13],["each",26.67],["one",26.94]]},
    {"s":27.44,"e":30.02,"text":"into biting down on a padded force meter.","words":[["into",27.44],["biting",27.75],["down",28.22],["on",28.53],["a",28.69],["padded",28.77],["force",29.24],["meter",29.63]]},
    {"s":30.57,"e":32.68,"text":"The winner was the saltwater crocodile.","words":[["the",30.57],["winner",30.76],["was",31.15],["the",31.34],["saltwater",31.53],["crocodile",32.11]]},
    {"s":33.23,"e":38.14,"text":"One big male bit down with about 3,700 pounds of force.","words":[["one",33.23],["big",33.57],["male",33.92],["bit",34.37],["down",34.71],["with",35.17],["about",35.63],["3700",36.2],["pounds",36.65],["of",37.34],["force",37.57]]},
    {"s":38.69,"e":41.01,"text":"That's more than sixteen thousand newtons.","words":[["thats",38.69],["more",39.02],["than",39.28],["sixteen",39.55],["thousand",40.01],["newtons",40.54]]},
    {"s":41.55,"e":43.29,"text":"For comparison, you chew a steak","words":[["for",41.55],["comparison",41.76],["you",42.42],["chew",42.63],["a",42.89],["steak",42.96]]},
    {"s":43.59,"e":46.9,"text":"with maybe 150 to 200 pounds.","words":[["with",43.59],["maybe",44.17],["150",44.89],["to",45.32],["200",45.61],["pounds",46.04]]},
    {"s":47.45,"e":49.37,"text":"Lions, tigers and hyenas","words":[["lions",47.45],["tigers",47.93],["and",48.51],["hyenas",48.8]]},
    {"s":49.67,"e":51.75,"text":"land somewhere around 1,000.","words":[["land",49.67],["somewhere",50.04],["around",50.85],["1000",51.39]]},
    {"s":52.3,"e":54.85,"text":"So the saltie bites more than three times harder","words":[["so",52.3],["the",52.43],["saltie",52.62],["bites",53.01],["more",53.32],["than",53.58],["three",53.83],["times",54.15],["harder",54.47]]},
    {"s":55.15,"e":56.27,"text":"than the big cats.","words":[["than",55.15],["the",55.47],["big",55.71],["cats",55.95]]},
    {"s":56.82,"e":58.8,"text":"So where does all that power come from?","words":[["so",56.82],["where",56.95],["does",57.27],["all",57.53],["that",57.72],["power",57.97],["come",58.29],["from",58.54]]},
    {"s":59.35,"e":61.41,"text":"Look at the back of a crocodile's head.","words":[["look",59.35],["at",59.62],["the",59.76],["back",59.97],["of",60.24],["a",60.38],["crocodiles",60.45],["head",61.13]]},
    {"s":61.96,"e":63.94,"text":"Those big bulging cheeks aren't fat.","words":[["those",61.96],["big",62.3],["bulging",62.5],["cheeks",62.98],["arent",63.39],["fat",63.73]]},
    {"s":64.49,"e":66.64,"text":"They're almost all jaw-closing muscle,","words":[["theyre",64.49],["almost",64.91],["all",65.32],["jawclosing",65.53],["muscle",66.22]]},
    {"s":66.94,"e":68.17,"text":"packed around the hinge","words":[["packed",66.94],["around",67.31],["the",67.68],["hinge",67.86]]},
    {"s":68.47,"e":71.53,"text":"and pulling the lower jaw up like giant rubber bands.","words":[["and",68.47],["pulling",68.68],["the",69.18],["lower",69.39],["jaw",69.75],["up",69.96],["like",70.11],["giant",70.39],["rubber",70.75],["bands",71.17]]},
    {"s":72.08,"e":74.41,"text":"Now look for the muscles that open the jaw.","words":[["now",72.08],["look",72.29],["for",72.56],["the",72.77],["muscles",72.97],["that",73.45],["open",73.72],["the",74.0],["jaw",74.2]]},
    {"s":74.96,"e":75.85,"text":"They're tiny.","words":[["theyre",74.96],["tiny",75.49]]},
    {"s":76.4,"e":77.57,"text":"A thin little strap","words":[["a",76.4],["thin",76.47],["little",76.76],["strap",77.2]]},
    {"s":77.87,"e":79.76,"text":"that just tugs the jaw back down.","words":[["that",77.87],["just",78.16],["tugs",78.45],["the",78.74],["jaw",78.96],["back",79.17],["down",79.46]]},
    {"s":80.31,"e":82.72,"text":"And that makes sense for how a crocodile eats.","words":[["and",80.31],["that",80.5],["makes",80.76],["sense",81.09],["for",81.42],["how",81.61],["a",81.81],["crocodile",81.87],["eats",82.46]]},
    {"s":83.27,"e":84.73,"text":"It lies still in the water,","words":[["it",83.27],["lies",83.41],["still",83.69],["in",84.04],["the",84.18],["water",84.39]]},
    {"s":85.03,"e":86.81,"text":"then snaps shut and holds on.","words":[["then",85.03],["snaps",85.34],["shut",85.73],["and",86.04],["holds",86.27],["on",86.66]]},
    {"s":87.36,"e":89.06,"text":"Clamping needs huge force.","words":[["clamping",87.36],["needs",87.98],["huge",88.36],["force",88.67]]},
    {"s":89.61,"e":92.36,"text":"Opening only has to lift the jaw's own weight.","words":[["opening",89.61],["only",90.14],["has",90.45],["to",90.68],["lift",90.83],["the",91.14],["jaws",91.37],["own",91.68],["weight",91.9]]},
    {"s":92.91,"e":95.14,"text":"So evolution poured almost everything","words":[["so",92.91],["evolution",93.05],["poured",93.66],["almost",94.06],["everything",94.46]]},
    {"s":95.44,"e":96.45,"text":"into closing.","words":[["into",95.44],["closing",95.81]]},
    {"s":97.0,"e":99.21,"text":"That's the trick behind the bare-hands myth.","words":[["thats",97.0],["the",97.32],["trick",97.51],["behind",97.82],["the",98.2],["barehands",98.39],["myth",98.96]]},
    {"s":99.76,"e":101.51,"text":"Once the jaws are already shut,","words":[["once",99.76],["the",100.04],["jaws",100.25],["are",100.53],["already",100.74],["shut",101.23]]},
    {"s":101.81,"e":103.86,"text":"the weak opening muscles have to push","words":[["the",101.81],["weak",102.01],["opening",102.27],["muscles",102.74],["have",103.2],["to",103.46],["push",103.59]]},
    {"s":104.16,"e":105.24,"text":"against your grip,","words":[["against",104.16],["your",104.66],["grip",104.95]]},
    {"s":105.54,"e":106.46,"text":"and they lose.","words":[["and",105.54],["they",105.79],["lose",106.12]]},
    {"s":107.01,"e":109.46,"text":"Wildlife handlers use this every day.","words":[["wildlife",107.01],["handlers",107.64],["use",108.27],["this",108.51],["every",108.83],["day",109.23]]},
    {"s":110.01,"e":112.43,"text":"They loop a strong rubber band around the snout,","words":[["they",110.01],["loop",110.26],["a",110.51],["strong",110.57],["rubber",110.94],["band",111.32],["around",111.56],["the",111.94],["snout",112.12]]},
    {"s":112.73,"e":114.71,"text":"or wrap it with a few turns of tape,","words":[["or",112.73],["wrap",112.88],["it",113.17],["with",113.32],["a",113.61],["few",113.68],["turns",113.9],["of",114.27],["tape",114.41]]},
    {"s":115.01,"e":117.32,"text":"and the crocodile simply can't open up.","words":[["and",115.01],["the",115.23],["crocodile",115.45],["simply",116.13],["cant",116.57],["open",116.87],["up",117.17]]},
    {"s":117.87,"e":120.02,"text":"But please, never try this yourself.","words":[["but",117.87],["please",118.09],["never",118.54],["try",118.91],["this",119.13],["yourself",119.43]]},
    {"s":120.57,"e":123.26,"text":"Getting the mouth shut is the dangerous part,","words":[["getting",120.57],["the",121.08],["mouth",121.3],["shut",121.66],["is",121.95],["the",122.1],["dangerous",122.32],["part",122.97]]},
    {"s":123.56,"e":125.44,"text":"and that tail is all muscle too.","words":[["and",123.56],["that",123.79],["tail",124.09],["is",124.39],["all",124.54],["muscle",124.76],["too",125.21]]},
    {"s":125.99,"e":127.69,"text":"Here's the most surprising part.","words":[["heres",125.99],["the",126.32],["most",126.51],["surprising",126.77],["part",127.42]]},
    {"s":128.24,"e":131.44,"text":"Those crushing jaws are also incredibly gentle.","words":[["those",128.24],["crushing",128.64],["jaws",129.28],["are",129.6],["also",129.84],["incredibly",130.16],["gentle",130.96]]},
    {"s":131.99,"e":134.07,"text":"Look closely at a crocodile's face","words":[["look",131.99],["closely",132.29],["at",132.81],["a",132.96],["crocodiles",133.03],["face",133.78]]},
    {"s":134.37,"e":136.56,"text":"and you'll see thousands of tiny bumps.","words":[["and",134.37],["youll",134.59],["see",134.94],["thousands",135.15],["of",135.78],["tiny",135.92],["bumps",136.21]]},
    {"s":137.11,"e":138.65,"text":"Each bump is a touch sensor,","words":[["each",137.11],["bump",137.39],["is",137.67],["a",137.81],["touch",137.88],["sensor",138.23]]},
    {"s":138.95,"e":141.04,"text":"and scientists found they're more sensitive","words":[["and",138.95],["scientists",139.12],["found",139.68],["theyre",139.96],["more",140.3],["sensitive",140.53]]},
    {"s":141.34,"e":142.79,"text":"than your own fingertips.","words":[["than",141.34],["your",141.62],["own",141.89],["fingertips",142.1]]},
    {"s":143.34,"e":144.65,"text":"They can feel a ripple","words":[["they",143.34],["can",143.63],["feel",143.85],["a",144.14],["ripple",144.21]]},
    {"s":144.95,"e":146.64,"text":"from a single drop of water.","words":[["from",144.95],["a",145.26],["single",145.33],["drop",145.79],["of",146.1],["water",146.25]]},
    {"s":147.19,"e":149.76,"text":"They help a crocodile sense prey in the dark,","words":[["they",147.19],["help",147.47],["a",147.76],["crocodile",147.83],["sense",148.47],["prey",148.83],["in",149.11],["the",149.26],["dark",149.47]]},
    {"s":150.06,"e":151.76,"text":"and they let a mother crocodile","words":[["and",150.06],["they",150.25],["let",150.51],["a",150.71],["mother",150.78],["crocodile",151.17]]},
    {"s":152.06,"e":154.33,"text":"carry her newly hatched babies in her mouth","words":[["carry",152.06],["her",152.37],["newly",152.56],["hatched",152.88],["babies",153.32],["in",153.7],["her",153.82],["mouth",154.01]]},
    {"s":154.63,"e":156.29,"text":"without hurting a single one.","words":[["without",154.63],["hurting",155.11],["a",155.6],["single",155.67],["one",156.08]]},
    {"s":156.84,"e":158.21,"text":"And then there are the teeth.","words":[["and",156.84],["then",157.02],["there",157.26],["are",157.55],["the",157.73],["teeth",157.91]]},
    {"s":158.76,"e":160.52,"text":"An alligator has about 80,","words":[["an",158.76],["alligator",158.92],["has",159.68],["about",159.93],["80",160.35]]},
    {"s":160.82,"e":163.63,"text":"and each one can be replaced up to 50 times","words":[["and",160.82],["each",161.07],["one",161.4],["can",161.65],["be",161.89],["replaced",162.06],["up",162.72],["to",162.89],["50",163.05],["times",163.22]]},
    {"s":163.93,"e":165.21,"text":"over its long life.","words":[["over",163.93],["its",164.27],["long",164.53],["life",164.87]]},
    {"s":165.76,"e":168.11,"text":"A new tooth is always waiting underneath","words":[["a",165.76],["new",165.83],["tooth",166.04],["is",166.38],["always",166.52],["waiting",166.94],["underneath",167.42]]},
    {"s":168.41,"e":169.29,"text":"the old one.","words":[["the",168.41],["old",168.71],["one",169.0]]},
    {"s":169.84,"e":171.89,"text":"Scientists are studying how they do it,","words":[["scientists",169.84],["are",170.48],["studying",170.68],["how",171.19],["they",171.38],["do",171.64],["it",171.77]]},
    {"s":172.19,"e":174.31,"text":"hoping it might one day help people","words":[["hoping",172.19],["it",172.63],["might",172.78],["one",173.14],["day",173.36],["help",173.58],["people",173.87]]},
    {"s":174.61,"e":175.91,"text":"regrow lost teeth.","words":[["regrow",174.61],["lost",175.13],["teeth",175.47]]},
    {"s":176.46,"e":179.39,"text":"So the crocodile's jaw is a one-way machine.","words":[["so",176.46],["the",176.63],["crocodiles",176.89],["jaw",177.75],["is",178.01],["a",178.18],["oneway",178.27],["machine",178.79]]},
    {"s":179.94,"e":181.84,"text":"Record-breaking power to close,","words":[["recordbreaking",179.94],["power",180.96],["to",181.33],["close",181.47]]},
    {"s":182.14,"e":183.44,"text":"barely any to open,","words":[["barely",182.14],["any",182.66],["to",182.92],["open",183.09]]},
    {"s":183.74,"e":185.71,"text":"and a touch as soft as a fingertip.","words":[["and",183.74],["a",183.96],["touch",184.03],["as",184.4],["soft",184.54],["as",184.84],["a",184.98],["fingertip",185.05]]},
    {"s":186.26,"e":188.65,"text":"Next time, why do porcupine quills","words":[["next",186.26],["time",186.6],["why",186.94],["do",187.2],["porcupine",187.37],["quills",188.14]]},
    {"s":188.95,"e":191.32,"text":"get stuck in you and refuse to come out?","words":[["get",188.95],["stuck",189.18],["in",189.56],["you",189.72],["and",189.95],["refuse",190.18],["to",190.64],["come",190.79],["out",191.09]]}
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
  Object.assign(C, { croc: '#6a9a45', crocD: '#44702e', crocB: '#cfc47e', mouth: '#c9605e', mouthD: '#8e3434', tooth: '#f7f1e1',
    eye: '#f2c14e', water: '#4f8fc0', waterD: '#2f6290', muscle: '#d9473b', strap: '#f2c14e', band: '#ef8fb0', tape: '#a7adb5',
    steak: '#b8574a', fat: '#f3e2cf', mane: '#d9822b', lion: '#f0b65a', gum: '#e79a9a', glass: '#bfe6f5', quill: '#efe6d2', porc: '#7a5a3e',
    globe: '#5fa7d6', land: '#7fbf5a', night: '#1f2c4a', white: '#f7f4ee' });

  const ell = (c, x, y, rx, ry, a = 0) => { c.beginPath(); c.ellipse(x, y, rx, ry, a, 0, TAU); c.fill(); };
  const teethRow = (c, w, up, n0 = 50, step = 22, tw = 11, th = 14) => { for (let x = n0; x < w - 14; x += step) { c.beginPath(); if (up) { c.moveTo(x, th); c.lineTo(x + tw / 2, 0); c.lineTo(x + tw, th); } else { c.moveTo(x, 0); c.lineTo(x + tw / 2, th); c.lineTo(x + tw, 0); } c.closePath(); c.fill(); } };
  const SP2 = {
    // crocodile parts, side view facing right (local origin = bottom centre between the feet)
    ctail: () => SP.shape('ctail', 270, 92, C.croc, (c) => { c.beginPath(); c.moveTo(0, 64); c.quadraticCurveTo(150, 30, 270, 6); c.lineTo(270, 90); c.quadraticCurveTo(150, 80, 0, 70); c.closePath(); c.fill(); }, { R: 14, seed: 501, marks: [[60, 60, 90, 50, 1.4], [120, 52, 150, 42, 1.4], [180, 44, 210, 34, 1.4]], markW: 4 }),
    cbody: () => group('cbody', 330, 150, [
      ...[0, 1, 2, 3, 4, 5, 6].map((i) => [SP.ball(C.crocD, 13, 502 + (i % 3), 0.35), 34 + i * 40, 0, 0.25]),
      [SP.shape('cbodys', 330, 132, C.croc, (c) => ell(c, 165, 66, 163, 58), { R: 20, seed: 505, marks: [[60, 30, 270, 30, 1.2], [40, 60, 290, 62, 1.2]], markW: 5 }), 0, 14],
      [SP.shape('cbelly', 220, 30, C.crocB, (c) => ell(c, 110, 15, 108, 13), { R: 8, seed: 506, fps: [] }), 60, 118, 0.15],
    ]),
    cleg: (d) => SP.rect('cleg' + d, 36, 54, d ? C.crocD : C.croc, 14, { R: 10, seed: 507 + d, fps: [] }),
    chead: () => group('chead', 262, 86, [
      [SP.shape('cheads', 262, 70, C.croc, (c) => { c.beginPath(); c.moveTo(0, 6); c.lineTo(200, 18); c.quadraticCurveTo(262, 20, 260, 46); c.lineTo(258, 64); c.lineTo(0, 68); c.closePath(); c.fill(); }, { R: 14, seed: 510, marks: [[30, 30, 90, 32, 1.2], [110, 34, 170, 36, 1.2]], markW: 4 }), 0, 0],
      [SP.shape('cteethU', 262, 16, C.tooth, (c) => teethRow(c, 262, false), { R: 4, lump: 0.3, seed: 511, spec: 0.6, fps: [] }), 0, 66, 0.25],
      [SP.ball(C.crocD, 9, 512, 0.5), 238, 22, 0.2],
    ]),
    cjaw: () => group('cjaw', 256, 50, [
      [SP.shape('cteethL', 256, 16, C.tooth, (c) => teethRow(c, 256, true, 60), { R: 4, lump: 0.3, seed: 513, spec: 0.6, fps: [] }), 0, 0, 0.25],
      [SP.shape('cjaws', 256, 36, C.croc, (c) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(250, 4); c.quadraticCurveTo(258, 20, 240, 32); c.lineTo(12, 36); c.quadraticCurveTo(-4, 20, 0, 0); c.fill(); }, { R: 10, seed: 514, fps: [] }), 0, 12],
    ]),
    ceye: () => group('ceye', 44, 40, [[SP.ball(C.crocD, 20, 515, 0.4), 0, 0], [SP.ball(C.eye, 10, 516, 0.7), 14, 8, 0.2], [SP.rect('cpup', 5, 14, C.ink, 2, { R: 2, seed: 517, fps: [] }), 21, 10, 0]]),
    mclose: () => SP.shape('mclose', 130, 96, C.muscle, (c) => ell(c, 65, 48, 62, 44, -0.3), { R: 16, seed: 518, spec: 0.5, marks: [[20, 30, 110, 60, 1.6], [24, 52, 104, 76, 1.6]], markW: 4 }),
    mopen: () => SP.rect('mopen', 16, 64, C.strap, 8, { R: 5, seed: 519, fps: [] }),
    hand: (k = 0) => group('hand' + k, 190, 80, [
      [SP.shape('handp', 170, 64, C.skin, (c) => { c.beginPath(); c.roundRect(0, 6, 170, 52, 26); c.fill(); }, { R: 14, seed: 520, marks: [[120, 16, 166, 16, 1.4], [120, 32, 168, 32, 1.4], [120, 48, 166, 48, 1.4]], markW: 4 }), 0, 0],
      [SP.shape('handt', 60, 34, C.skin, (c) => ell(c, 30, 17, 28, 15), { R: 9, seed: 521, fps: [] }), 70, 46],
      [SP.rect('cuff' + k, 40, 70, k ? C.cyan : C.coral, 12, { R: 9, seed: 522 + k, fps: [] }), -26, -2],
    ]),
    gauge: () => group('gauge', 150, 150, [[SP.ball(C.cream, 75, 525, 0.4), 0, 0], ...[0, 1, 2, 3, 4].map((i) => { const a = Math.PI * (1.15 + i * 0.175); return [SP.ball(C.ink, 5, 526, 0.5), 70 + Math.cos(a) * 52, 70 + Math.sin(a) * 52, 0]; })]),
    needle: () => SP.rect('needle', 10, 62, C.red, 5, { R: 4, seed: 527, fps: [] }),
    pad: () => SP.rect('fpad', 210, 44, C.yellow, 20, { R: 12, seed: 528 }),
    post: () => SP.rect('fpost', 34, 200, C.wood, 10, { R: 9, seed: 529 }),
    steak: () => group('steak', 190, 120, [[SP.shape('steaks', 190, 120, C.steak, (c) => { c.beginPath(); c.moveTo(20, 30); c.bezierCurveTo(60, -10, 170, 0, 185, 50); c.bezierCurveTo(195, 100, 120, 125, 60, 110); c.bezierCurveTo(5, 100, -5, 60, 20, 30); c.fill(); }, { R: 16, seed: 530 }), 0, 0], [SP.shape('fatst', 120, 26, C.fat, (c) => { c.lineCap = 'round'; c.lineWidth = 14; c.beginPath(); c.moveTo(8, 18); c.quadraticCurveTo(60, 2, 112, 14); c.stroke(); }, { R: 6, seed: 531, fps: [] }), 40, 50, 0.2]]),
    lion: () => group('lion', 170, 170, [
      ...Array.from({ length: 10 }, (_, i) => { const a = (i / 10) * TAU; return [SP.ball(C.mane, 32, 532 + (i % 3), 0.3), 85 - 32 + Math.cos(a) * 52, 85 - 32 + Math.sin(a) * 52, 0.25]; }),
      [SP.ball(C.lion, 52, 535, 0.4), 33, 33],
      [SP.ball(C.ink, 6, 536, 0.8), 64, 68, 0], [SP.ball(C.ink, 6, 536, 0.8), 98, 68, 0],
      [SP.shape('lnose', 30, 20, '#8a4a2a', (c) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(30, 0); c.lineTo(15, 20); c.closePath(); c.fill(); }, { R: 5, seed: 537, fps: [] }), 70, 90, 0],
    ]),
    globe: () => group('globe', 230, 230, [[SP.ball(C.globe, 115, 540, 0.4), 0, 0], [SP.ball(C.land, 38, 541, 0.3), 40, 50, 0.15], [SP.ball(C.land, 30, 542, 0.3), 130, 40, 0.15], [SP.ball(C.land, 44, 543, 0.3), 110, 120, 0.15], [SP.ball(C.land, 22, 544, 0.3), 40, 150, 0.15]]),
    pin: (n) => group('pin' + n, 30, 60, [[SP.rect('pinst', 8, 40, C.ink, 4, { R: 3, seed: 545, fps: [] }), 11, 20, 0.2], [SP.ball([C.coral, C.yellow, C.pink][n % 3], 15, 546 + (n % 3), 0.6), 0, 0]]),
    board: () => group('board', 170, 220, [[SP.rect('brd', 170, 220, C.wood, 12, { R: 10, seed: 548 }), 0, 0], [SP.rect('brdp', 140, 170, C.cream, 6, { R: 6, seed: 549, marks: [[16, 40, 120, 40, 1], [16, 70, 110, 70, 1], [16, 100, 124, 100, 1], [16, 130, 90, 130, 1]] }), 15, 35, 0.2], [SP.rect('brdc', 70, 26, C.conc, 8, { R: 6, seed: 550, fps: [] }), 50, 0, 0.3]]),
    bar: (h, col, k) => SP.rect('bar' + k + h, 110, Math.max(24, h), col, 14, { R: 12, seed: 551 + k, fps: [] }),
    beam: () => SP.rect('beam', 560, 26, C.wood, 12, { R: 9, seed: 555 }),
    fulcrum: () => SP.shape('fulc', 120, 110, C.stone, (c) => { c.beginPath(); c.moveTo(60, 0); c.lineTo(120, 110); c.lineTo(0, 110); c.closePath(); c.fill(); }, { R: 12, seed: 556 }),
    panS: () => SP.shape('pan', 150, 40, C.conc, (c) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(150, 0); c.quadraticCurveTo(140, 40, 75, 40); c.quadraticCurveTo(10, 40, 0, 0); c.fill(); }, { R: 10, seed: 557, fps: [] }),
    weight: () => SP.shape('wgt', 120, 110, '#5b6577', (c) => { c.beginPath(); c.moveTo(25, 20); c.lineTo(95, 20); c.lineTo(120, 110); c.lineTo(0, 110); c.closePath(); c.fill(); c.beginPath(); c.arc(60, 18, 16, Math.PI, 0); c.lineWidth = 10; c.stroke(); }, { R: 12, seed: 558, spec: 0.5 }),
    feather: () => SP.shape('feath', 120, 40, C.cream, (c) => { c.beginPath(); c.moveTo(0, 20); c.quadraticCurveTo(60, -10, 120, 18); c.quadraticCurveTo(60, 50, 0, 20); c.fill(); }, { R: 7, seed: 559, marks: [[6, 20, 114, 19, 1.2]], fps: [] }),
    jar: (k) => SP.shape('jar' + k, 170, 220, C.glass, (c) => { c.beginPath(); c.roundRect(0, 20, 170, 200, 26); c.fill(); c.beginPath(); c.roundRect(20, 0, 130, 30, 10); c.fill(); }, { R: 14, seed: 560 + k, spec: 0.9, sss: [0.95, 1.02, 1.1] }),
    egg: () => SP.ball('#f3ead2', 30, 562, 0.5),
    dot: (n) => SP.ball(C.crocD, 9, 563 + (n % 3), 0.6),
    skin: () => SP.rect('skinpatch', 520, 360, C.croc, 40, { R: 24, seed: 566, lump: 2.2 }),
    finger: () => SP.shape('finger', 150, 300, C.skin, (c) => { c.beginPath(); c.roundRect(0, 0, 150, 340, 75); c.fill(); }, { R: 22, seed: 567, fps: [], marks: [[30, 60, 120, 60, 1.4], [24, 85, 126, 85, 1.4], [22, 110, 128, 110, 1.4], [30, 135, 120, 135, 1.4], [44, 40, 106, 40, 1.4]], markW: 4 }),
    dropw: () => SP.shape('dropw', 44, 60, C.cyan, (c) => { c.beginPath(); c.moveTo(22, 0); c.bezierCurveTo(30, 20, 44, 32, 44, 40); c.arc(22, 40, 22, 0, Math.PI); c.bezierCurveTo(0, 32, 14, 20, 22, 0); c.fill(); }, { R: 8, seed: 568, spec: 0.8, fps: [] }),
    water: (w = 1400, h = 240, k = 'a') => SP.rect('water' + k + w + h, w, h, C.water, 20, { R: 18, seed: 569, spec: 0.7, lump: 1.6, sss: [0.95, 1.02, 1.1], marks: [[100, 30, 300, 26, 1], [500, 40, 760, 36, 1], [900, 28, 1150, 32, 1]], markW: 6 }),
    fish: () => group('fishy', 200, 90, [
      [SP.shape('fyt', 56, 70, C.fish || '#7e98ab', (c) => { c.beginPath(); c.moveTo(56, 35); c.lineTo(0, 0); c.lineTo(10, 35); c.lineTo(0, 70); c.closePath(); c.fill(); }, { R: 9, seed: 570, fps: [] }), 0, 10],
      [SP.shape('fyb', 160, 80, '#7e98ab', (c) => ell(c, 80, 40, 78, 34), { R: 14, seed: 571 }), 40, 5],
      [SP.ball(C.cream, 9, 572, 0.6), 160, 28, 0.2], [SP.ball(C.ink, 4, 573, 0.8), 166, 33, 0],
    ]),
    tooth: (s = 1, k = '') => SP.shape('tooth' + s + k, 50 * s, 90 * s, C.tooth, (c) => { const w = 50 * s, h = 90 * s; c.beginPath(); c.moveTo(w / 2, 0); c.quadraticCurveTo(w, h * 0.6, w * 0.9, h); c.lineTo(w * 0.1, h); c.quadraticCurveTo(0, h * 0.6, w / 2, 0); c.fill(); }, { R: 8 * s, seed: 574, spec: 0.7, fps: [] }),
    gum: () => SP.rect('gum', 360, 220, C.gum, 30, { R: 20, seed: 576, marks: [[30, 40, 330, 40, 1.2]], markW: 5 }),
    lens: () => group('lens', 220, 300, [[SP.rect('lhan', 36, 140, C.wood, 14, { R: 10, seed: 577 }), 92, 160], [SP.shape('lring', 220, 220, '#5b6577', (c) => { c.lineWidth = 26; c.beginPath(); c.arc(110, 110, 96, 0, TAU); c.stroke(); }, { R: 10, seed: 578, fps: [] }), 0, 0]]),
    face: () => group('face', 260, 260, [
      [SP.ball(C.skin, 130, 580, 0.35), 0, 0],
      [SP.ball(C.ink, 11, 581, 0.8), 80, 90, 0], [SP.ball(C.ink, 11, 581, 0.8), 160, 90, 0],
      [SP.shape('smile', 150, 70, C.mouthD, (c) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(150, 0); c.quadraticCurveTo(140, 70, 75, 70); c.quadraticCurveTo(10, 70, 0, 0); c.fill(); }, { R: 8, seed: 582, fps: [] }), 55, 150, 0.2],
      ...[0, 1, 3, 4].map((i) => [SP.rect('ft' + i, 24, 26, C.tooth, 5, { R: 4, seed: 583, fps: [] }), 62 + i * 28, 150, 0.15]),
    ]),
    porc: () => group('porc', 360, 230, [
      ...Array.from({ length: 22 }, (_, i) => { const a = Math.PI * (1.05 + (i / 21) * 0.9); return [SP.shape('quill' + (i % 4), 20, 110, i % 2 ? C.quill : '#d8c7a6', (c) => { c.beginPath(); c.moveTo(10, 0); c.lineTo(20, 110); c.lineTo(0, 110); c.closePath(); c.fill(); }, { R: 4, lump: 0.3, seed: 585 + (i % 4), fps: [] }), 0, 0, 0.2, a]; }).map(([s, , , sh, a]) => [s, 170 + Math.cos(a) * 120 - 10, 150 + Math.sin(a) * 110 - 55, sh]),
      [SP.shape('porcb', 280, 150, C.porc, (c) => ell(c, 140, 75, 138, 70), { R: 22, seed: 590 }), 40, 70],
      [SP.ball('#5a3f2a', 34, 591, 0.4), 292, 120],
      [SP.ball(C.ink, 6, 592, 0.8), 318, 132, 0],
    ]),
    qmark: () => SP.shape('qm', 120, 190, C.yellow, (c) => { c.lineWidth = 30; c.lineCap = 'round'; c.beginPath(); c.arc(60, 55, 40, Math.PI * 1.1, Math.PI * 0.45); c.lineTo(60, 125); c.stroke(); c.beginPath(); c.arc(60, 168, 17, 0, TAU); c.fill(); }, { R: 10, seed: 593, fps: [] }),
  };

  // ---------- the crocodile: one puppet, jaw hinged, posed per scene ----------
  // o.open: jaw angle (rad, stepped by the caller); o.flip faces left; o.mus = { c: t0 closing muscle, o: t0 opening strap, cs: scale }
  // o.snx/o.sny stretch the snout (gharial); o.band/o.tape: t0 for the handler's band / tape; o.water: cover below this local y
  const croc = (x, y, s, st, en, o = {}) => {
    if (REC) { rec({ k: 'obj', t: st, x, w: 600 * s, big: o.big, hit: o.hit, minor: o.minor }); if (en != null) rec({ k: 'exit', t: en, mode: o.mode || 'fall', x, n: 1 }); return null; }
    const L = life(st, en, o.seed || 0, o.mode || 'fall'); if (!L) return null;
    if (o.ct !== false && L.dy < 40 && L.dx === 0) contact(x, y + 6, 330 * s * L.sx, 18 * s, 0.5);
    const c = ctxG, sh = { blur: 9, dx: 5, dy: 7, a: 0.38 }, op = o.open || 0;
    c.save(); c.translate(x + L.dx, y + L.dy); c.rotate(L.rot); c.scale(s * L.sx * (o.flip ? -1 : 1), s * L.sy);
    place(c, SP2.ctail(), -335, -104, { shadow: sh });
    place(c, SP2.cleg(1), -150, -54, { shadow: sh }); place(c, SP2.cleg(1), 30, -54, { shadow: sh });
    place(c, SP2.cbody(), -215, -158, { shadow: sh });
    c.save();
    if (o.snx || o.sny) { c.translate(92, -118); c.scale(o.snx || 1, o.sny || 1); c.translate(-92, 118); }
    if (op > 0.02) {
      const hx = 100, hy = -84, ex = hx + Math.cos(op) * 250 - Math.sin(op) * 6, ey = hy + Math.sin(op) * 250 + Math.cos(op) * 6;
      const g = c.createLinearGradient(hx, hy, 340, hy); g.addColorStop(0, C.mouthD); g.addColorStop(1, C.mouth);
      c.fillStyle = g; c.beginPath(); c.moveTo(hx - 6, hy - 8); c.lineTo(346, -88); c.lineTo(ex, ey); c.closePath(); c.fill();
    }
    if (o.inMouth) o.inMouth(c, op);
    place(c, SP2.cjaw(), 100, -96, { ax: 0, ay: 12, rot: op, shadow: sh });
    if (o.onJaw) o.onJaw(c, op);
    place(c, SP2.chead(), 90, -152, { shadow: sh });
    if (o.band != null && TQ >= o.band) place(c, SP.rect('cband', 22, 130, C.band, 10, { R: 8, seed: 595, fps: [] }), 262, -168, { rot: 0.08, shadow: sh });
    if (o.tape != null && TQ >= o.tape) [0, 1, 2].forEach((i) => { if (TQ >= o.tape + i * 2 / 12) place(c, SP.rect('ctape' + i, 30, 124, C.tape, 6, { R: 6, seed: 596 + i, dome: 0.5, fps: [] }), 178 + i * 34, -166, { rot: -0.05 + i * 0.04, shadow: sh }); });
    c.restore();
    if (o.mus) {
      const m = o.mus;
      if (m.c != null && TQ >= m.c) { const k = Math.min(4, Math.floor((TQ - m.c) * 12) >> 1), e = SEQ.pop[k], sc = m.cs ?? 1; place(c, SP2.mclose(), 40, -176, { sx: e[0] * sc, sy: e[1] * sc, alpha: m.ca ?? 1, shadow: sh }); }
      if (m.o != null && TQ >= m.o) { const k = Math.min(4, Math.floor((TQ - m.o) * 12) >> 1), e = SEQ.pop[k]; place(c, SP2.mopen(), 80, -150, { sx: e[0], sy: e[1], rot: 0.35, shadow: sh }); }
    }
    place(c, SP2.ceye(), 104, -186, { shadow: sh });
    place(c, SP2.cleg(0), -110, -52, { shadow: sh }); place(c, SP2.cleg(0), 70, -52, { shadow: sh });
    c.restore();
    return L;
  };
  // stepped jaw angle: from a to b starting at t0 over dur (on twos)
  const jaw = (t0, a, b, dur = 0.17, n = 2) => a + (b - a) * step6(t0, dur, n);
  // world position of a croc-local point
  const cw = (x, y, s, lx, ly, flip) => [x + (flip ? -lx : lx) * s, y + ly * s];
  // corner chapter header (pressed clay letters)
  const chap = (n, title, st) => word(n + '  ' + title, 36, 62, 34, st, X, 'fall', [C.cream], 1 / 48);
  // balance beam: tilt (rad, + = right side down); returns pan centres
  const balance = (cx, baseY, st, en, tilt, o = {}) => {
    obj(SP2.fulcrum(), cx - 60, baseY - 110, st, en, { ct: [70, 8], seed: 11 });
    const L = REC ? null : life(st, en, 12);
    const py = baseY - 118, ends = [-1, 1].map((d) => [cx + d * 260 * Math.cos(tilt), py + d * 260 * Math.sin(tilt)]);
    if (REC) { rec({ k: 'obj', t: st, x: cx, w: 560 }); if (en != null) rec({ k: 'exit', t: en, mode: 'fall', x: cx, n: 1 }); return ends; }
    if (!L) return ends;
    const b = SP2.beam(); place(ctxG, b, cx - 280 + L.dx, py - 13 + L.dy, { ax: 280, ay: 13, rot: tilt + L.rot, sx: L.sx, sy: L.sy });
    ends.forEach(([ex, ey]) => { place(ctxG, SP.rect('rod', 8, 70, C.ink, 4, { R: 3, seed: 13, fps: [] }), ex - 4 + L.dx, ey + L.dy, {}); place(ctxG, SP2.panS(), ex - 75 + L.dx, ey + 66 + L.dy, { sx: L.sx, sy: L.sy }); });
    return ends.map(([ex, ey]) => [ex + L.dx, ey + 66 + L.dy]);
  };
  // expanding ripple rings (stepped, on twos)
  const ripple = (cx, cy, t0, n = 3) => {
    if (REC || TQ < t0) return;
    for (let i = 0; i < n; i++) {
      const u = (TQ - t0 - i * 0.35); if (u < 0 || u > 1.8) continue;
      const r = 20 + Math.round(u * 6) * 26, a = H.clamp(1 - u / 1.8);
      ctxG.save(); ctxG.globalAlpha = a; ctxG.strokeStyle = 'rgba(230,248,255,0.85)'; ctxG.lineWidth = 7; ctxG.shadowColor = 'rgba(10,30,60,0.4)'; ctxG.shadowBlur = 4; ctxG.shadowOffsetY = 3;
      ctxG.beginPath(); ctxG.ellipse(cx, cy, r, r * 0.28, 0, 0, TAU); ctxG.stroke(); ctxG.restore();
    }
  };

  const FY = TOP + 34; // croc feet line on the table
  // ======================= CHAPTER 0: the hook =======================
  // 1. jaws wide open; bare hands come in; SNAP shut and the hands hold it; 3,700 pounds
  scene(0, 'hook', () => {
    set('hook', '#3f7f7a', '#c9a77a', { glow: 0.24 });
    const tS = at(0, 'shut');
    const op = TQ < tS ? 0.5 : jaw(tS, 0.5, 0, 0.17, 2);
    croc(600, FY + 20, 1.15, at(0, 'why') - 0.1, X, { open: op, seed: 1, big: true });
    const [hx, hy] = cw(600, FY + 20, 1.15, 250, -150);
    obj(SP2.hand(0), hx - 70, hy - 50 - (TQ < tS + 0.17 ? 40 : 0), at(0, 'hands'), X, { seed: 2 });
    obj(SP2.hand(1), hx + 90, hy - 46 - (TQ < tS + 0.17 ? 40 : 0), at(0, 'hands') + 0.17, X, { seed: 3, rot: -0.06 });
    wordC('BARE HANDS?', 640, 150, 84, at(0, 'bare'), X, 'fall', [C.cream, C.yellow], 1 / 24);
    word('3,700', 70, 330, 120, at(2, '3700'), X, 'fall', C.yellow, 1 / 24, 0, 'impact');
    word('pounds', 90, 400, 56, at(2, 'pounds'), X, 'fall', C.cream, 1 / 24);
    word('strongest bite', 780, 236, 48, at(1, 'strongest'), X, 'fall', C.coral, 1 / 24);
  });
  // 2. impossible? the most lopsided jaw: a balance with CLOSE crashing down, OPEN flying up
  scene(PS(3) - 0.15, 'lopsided', () => {
    set('lop', '#8a5f9e', '#d6b98a', { glow: 0.24 });
    wordC('IMPOSSIBLE?', 640, 160, 96, at(3, 'impossible'), X, 'fall', [C.yellow, C.coral], 1 / 24);
    const tL = at(4, 'lopsided'), tilt = TQ < tL ? 0 : 0.32 * step6(tL, 0.4, 3);
    const [l, r] = balance(640, FY, at(4, 'open'), X, tilt);
    obj(SP2.feather(), l[0] - 60, l[1] - 40, at(4, 'open') + 0.15, X, { seed: 4 });
    obj(SP2.weight(), r[0] - 60, r[1] - 112, at(4, 'jaw'), X, { seed: 5, big: true, hit: 'thud' });
    wordC('open', l[0], l[1] - 60, 48, at(4, 'open') + 0.15, X, 'fall', C.cream, 1 / 24);
    wordC('CLOSE', r[0], r[1] - 130, 56, at(4, 'jaw'), X, 'fall', C.coral, 1 / 24);
  });

  // ======================= CHAPTER 1: the bite record =======================
  // 3. 2012, a team of scientists sets out to measure every crocodile on Earth
  scene(PS(5) - 0.15, 'team', () => {
    set('team', '#c8794a', '#e2c79a', { glow: 0.26 });
    chap('1', 'THE BITE RECORD', PS(5));
    word('2012', 90, 300, 150, at(5, '2012'), X, 'fall', C.yellow, 1 / 24, 0, 'stamp');
    obj(SP2.board(), 150, TOP - 200, at(5, 'scientists'), X, { ct: [90, 10], seed: 6 });
    obj(SP2.globe(), 700, TOP - 240, at(6, 'measure'), X, { ct: [110, 12], seed: 7, big: true });
    [[740, 180], [860, 210], [800, 300], [900, 330], [760, 380]].forEach(([px, py], i) => obj(SP2.pin(i), px, py - 30, at(6, 'every') + i * 0.12, X, { seed: 8 + i, minor: true }));
    wordC('every croc', 815, 620, 52, at(6, 'earth'), X, 'fall', C.cream, 1 / 24);
  });
  // 4. all 23 living species, from tiny caimans to giant gharials (a line-up)
  scene(PS(7) - 0.15, 'lineup', () => {
    set('lineup', '#5f8f8a', '#d9c49a', { glow: 0.22 });
    chap('1', 'THE BITE RECORD', PS(7) - 1);
    word('23', 70, 230, 160, at(7, '23'), X, 'fall', C.yellow, 1 / 24, 0, 'impact');
    word('species', 290, 200, 60, at(7, 'species'), X, 'fall', C.cream, 1 / 24);
    const sz = [0.32, 0.42, 0.52, 0.6];
    croc(170, FY, sz[0], at(8, 'tiny'), X, { seed: 10, ct: true });
    croc(420, FY, sz[1], at(8, 'caimans'), X, { seed: 11 });
    croc(700, FY, sz[2], at(8, 'giant') - 0.25, X, { seed: 12 });
    croc(1020, FY, sz[3], at(8, 'gharials'), X, { seed: 13, snx: 1.4, sny: 0.6, big: true });
    wordC('caiman', 170, 640, 44, at(8, 'caimans'), X, 'fall', C.cream, 1 / 24);
    wordC('gharial', 1020, 640, 44, at(8, 'gharials'), X, 'fall', C.cream, 1 / 24);
  });
  // 5. they wrestled each one into biting a padded force meter; the needle swings
  scene(PS(9) - 0.15, 'meter', () => {
    set('meter', '#3d6f96', '#c9b48a', { glow: 0.22 });
    chap('1', 'THE BITE RECORD', PS(9) - 1);
    const tB = at(10, 'biting'), op = TQ < tB ? 0.42 : jaw(tB, 0.42, 0.12, 0.17, 2);
    croc(470, FY, 1.0, at(9, 'wrestled'), X, {
      open: op, seed: 14, big: true,
      inMouth: (c) => { if (TQ >= at(10, 'padded')) place(c, SP2.pad(), 210, -118, { rot: 0.12, sx: 0.8, sy: 0.9 }); },
    });
    obj(SP2.post(), 900, TOP - 190, at(10, 'force'), X, { ct: [40, 8], seed: 15 });
    obj(SP2.gauge(), 842, TOP - 340, at(10, 'force'), X, { seed: 16 });
    const nd = TQ < tB + 0.3 ? -1.2 : -1.2 + 2.0 * step6(tB + 0.3, 0.8, 5);
    if (TQ >= at(10, 'force') + 0.2) place(ctxG, SP2.needle(), 912, TOP - 330, { ax: 5, ay: 56, rot: nd, shadow: { blur: 4, dx: 2, dy: 3, a: 0.4 } });
    word('force meter', 540, 180, 48, at(10, 'meter'), X, 'fall', C.cream, 1 / 24);
  });
  // 6. the winner: the saltwater crocodile; 3,700 pounds of force; 16,000+ newtons
  scene(PS(11) - 0.15, 'winner', () => {
    set('winner', '#b8862f', '#e2c79a', { glow: 0.3 });
    chap('1', 'THE BITE RECORD', PS(11) - 1);
    croc(380, FY + 10, 0.95, at(11, 'winner'), X, { seed: 17, big: true, hit: 'success', open: TQ < at(12, 'bit') ? 0.3 : jaw(at(12, 'bit'), 0.3, 0, 0.17, 2) });
    word('saltwater croc', 80, 190, 56, at(11, 'saltwater'), X, 'fall', [C.cream, C.green], 1 / 24);
    word('3,700', 760, 330, 140, at(12, '3700'), X, 'fall', C.yellow, 1 / 24, 0, 'impact');
    word('pounds of force', 760, 410, 52, at(12, 'force'), X, 'fall', C.cream, 1 / 24);
    word('16,000+ N', 790, 530, 64, at(13, 'sixteen'), X, 'fall', [C.coral, C.cream], 1 / 24, 0, 'stamp');
  });
  // 7. compare: you chewing a steak 150-200, lions tigers hyenas ~1,000, the saltie more than 3x the big cats
  scene(PS(14) - 0.15, 'compare', () => {
    set('compare', '#56688f', '#d4c09a', { glow: 0.22 });
    chap('1', 'THE BITE RECORD', PS(14) - 1);
    const base = 600, sc = 0.105;
    obj(SP2.steak(), 120, 180, at(14, 'steak'), X, { seed: 18, sx: 0.8, sy: 0.8 });
    obj(SP2.bar(Math.round(175 * sc / 10) * 10, C.coral, 1), 150, base - 24, at(15, '150'), X, { ct: [60, 8], seed: 19 });
    wordC('150-200', 205, base + 70, 52, at(15, '150'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.lion(), 400, 170, at(16, 'lions'), X, { seed: 20, sx: 0.85, sy: 0.85 });
    const hc = 110; obj(SP2.bar(hc, C.yellow, 2), 430, base - hc, at(17, '1000'), X, { ct: [60, 8], seed: 21 });
    wordC('~1,000', 485, base + 70, 56, at(17, '1000'), X, 'fall', C.cream, 1 / 24);
    const tC = at(18, 'saltie'), full = 380, hk = TQ < tC ? 0 : Math.max(30, Math.round(full * step6(tC, 0.9, 5) / 10) * 10);
    if (TQ >= tC) obj(SP2.bar(hk, C.green, 3), 760, base - hk, tC, X, { ct: [60, 8], seed: 22, big: true });
    wordC('3,700', 815, base + 70, 64, at(18, 'saltie'), X, 'fall', C.yellow, 1 / 24);
    word('3x+', 920, 300, 130, at(18, 'three'), X, 'fall', [C.coral, C.yellow], 1 / 24, 0, 'impact');
    word('big cats', 940, 380, 48, at(19, 'cats'), X, 'fall', C.cream, 1 / 24);
  });

  // ======================= CHAPTER 2: inside the jaw =======================
  // 8. where does the power come from? the question pops on beside a croc head
  scene(PS(20) - 0.15, 'where', () => {
    set('where', '#4f7f5a', '#cdb88e', { glow: 0.24 });
    chap('2', 'INSIDE THE JAW', PS(20));
    croc(300, FY + 120, 1.5, at(20, 'where'), X, { seed: 23 });
    obj(SP2.qmark(), 880, 170, at(20, 'power'), X, { seed: 24, big: true, hit: 'pop' });
    wordC('POWER?', 940, 460, 80, at(20, 'power'), X, 'fall', [C.yellow, C.cream], 1 / 24);
  });
  // 9. close-up on the head: bulging cheeks are not fat, all jaw-closing muscle, packed around the hinge, pulling like rubber bands
  const HEADX = 170, HEADY = 600, HS = 1.9;
  scene(PS(21) - 0.15, 'cheeks', () => {
    set('cheeks', '#6f5a8f', '#d2b48c', { glow: 0.26 });
    chap('2', 'INSIDE THE JAW', PS(21) - 1);
    const pulse = bump(at(25, 'pulling'));
    croc(HEADX, HEADY, HS, PS(21) - 0.1, null, { seed: 25, ct: false, mus: { c: at(22, 'cheeks'), cs: pulse[0] } });
    word('FAT?', 900, 170, 80, at(22, 'fat'), at(23, 'theyre'), 'fall', [C.cream], 1 / 24);
    obj(SP.xmark(), 920, 80, at(22, 'fat') + 0.2, at(23, 'theyre'), { rot: 0.1, hit: 'slap', big: true, seed: 26, sx: 0.8, sy: 0.8 });
    word('closing', 860, 190, 64, at(23, 'jawclosing'), null, 'fall', C.coral, 1 / 24);
    word('muscle', 860, 260, 64, at(23, 'muscle'), null, 'fall', C.coral, 1 / 24);
    const [hx, hy] = cw(HEADX, HEADY, HS, 100, -84);
    obj(SP.ball(C.cream, 16, 27, 0.6), hx - 16, hy - 16, at(24, 'hinge'), null, { seed: 27, hit: 'pop' });
    word('hinge', hx - 80, hy + 90, 48, at(24, 'hinge'), null, 'fall', C.cream, 1 / 24);
    coil('pullup', [[hx + 300, hy + 130], [hx + 300, hy + 40]], C.yellow, at(25, 'up'), null, { wdt: 18 });
    word('rubber bands', 860, 600, 48, at(25, 'rubber'), null, 'fall', C.yellow, 1 / 24);
  });
  // 10. (continuous) now the muscles that open the jaw: tiny, a thin strap that tugs the jaw back down; camera pushes to the hinge
  scene(PS(26) - 0.15, 'strap', () => {
    set('cheeks', '#6f5a8f', '#d2b48c', { glow: 0.26 });
    chap('2', 'INSIDE THE JAW', PS(21) - 1);
    const [hx, hy] = cw(HEADX, HEADY, HS, 100, -84);
    const tD = at(29, 'down'), op = TQ < tD ? 0 : jaw(tD, 0, 0.16, 0.5, 3);
    const z = 1 + 0.22 * step6(at(26, 'open'), 0.6, 4);
    cam(z, hx, hy, () => {
      croc(HEADX, HEADY, HS, PS(21) - 2, X, { seed: 25, ct: false, open: op, mus: { c: PS(21) - 2, ca: 0.55, o: at(27, 'tiny') } });
      if (TQ >= at(28, 'strap')) coil('strapdn', [[hx - 50, hy + 40], [hx - 50, hy + 140]], C.yellow, at(29, 'tugs'), X, { wdt: 12 });
    });
    word('opening', 820, 180, 64, at(26, 'open'), X, 'fall', C.yellow, 1 / 24);
    word('muscle', 820, 250, 64, at(26, 'jaw'), X, 'fall', C.yellow, 1 / 24);
    wordC('TINY', 960, 420, 120, at(27, 'tiny'), X, 'fall', [C.yellow, C.cream], 1 / 24, 0, 'ding');
    word('thin strap', 840, 560, 52, at(28, 'strap'), X, 'fall', C.cream, 1 / 24);
  });
  // 11. how a croc eats: lies still in the water, then SNAPS shut and holds on
  scene(PS(30) - 0.15, 'ambush', () => {
    set('ambush', '#3b6f8f', '#4f8fc0', { glow: 0.2 });
    chap('2', 'INSIDE THE JAW', PS(30) - 1);
    const tS = at(32, 'snaps'), op = TQ < tS ? (TQ < at(31, 'still') ? 0 : 0.45) : jaw(tS, 0.45, 0, 0.09, 1);
    croc(560, FY + 60, 1.25, at(30, 'crocodile'), X, { seed: 28, ct: false, open: op, mode: 'left' });
    obj(SP2.water(1400, 260, 'a'), -60, FY - 40, PS(30) - 0.1, X, { seed: 29, alpha: 0.88, shadow: { blur: 14, dx: 0, dy: -6, a: 0.25 } });
    word('still', 120, 200, 64, at(31, 'still'), X, 'fall', C.cream, 1 / 24);
    word('SNAP!', 860, 200, 110, at(32, 'snaps'), X, 'fall', [C.yellow, C.coral], 1 / 24, 0, 'impact');
    word('hold', 900, 300, 64, at(32, 'holds'), X, 'fall', C.cream, 1 / 24);
  });
  // 12. clamping needs huge force (a heavy weight); opening only lifts the jaw's own weight (a feather): the balance tips
  scene(PS(33) - 0.15, 'needs', () => {
    set('needs', '#9e5f4f', '#d9c39a', { glow: 0.24 });
    chap('2', 'INSIDE THE JAW', PS(33) - 1);
    const tilt = TQ < at(33, 'huge') ? 0 : -0.3 * step6(at(33, 'huge'), 0.4, 3);
    const [l, r] = balance(640, FY, at(33, 'clamping'), X, tilt);
    obj(SP2.weight(), l[0] - 60, l[1] - 112, at(33, 'huge'), X, { seed: 30, big: true, hit: 'thud' });
    wordC('CLAMP', l[0], l[1] - 140, 60, at(33, 'clamping'), X, 'fall', C.coral, 1 / 24);
    obj(SP2.feather(), r[0] - 60, r[1] - 40, at(34, 'lift'), X, { seed: 31 });
    wordC('OPEN', r[0], r[1] - 70, 60, at(34, 'opening'), X, 'fall', C.yellow, 1 / 24);
    wordC('just the jaw', r[0], 160, 44, at(34, 'weight'), X, 'fall', C.cream, 1 / 24);
  });
  // 13. evolution poured almost everything into closing: two jars, CLOSE fills up, OPEN gets one lump
  scene(PS(35) - 0.15, 'jars', () => {
    set('jars', '#5f7f9e', '#d6c19a', { glow: 0.24 });
    chap('2', 'INSIDE THE JAW', PS(35) - 1);
    obj(SP2.jar(0), 300, TOP - 220, PS(35), X, { ct: [90, 10], seed: 32, alpha: 0.75 });
    obj(SP2.jar(1), 810, TOP - 220, PS(35) + 0.17, X, { ct: [90, 10], seed: 33, alpha: 0.75 });
    const t0 = at(35, 'poured');
    for (let i = 0; i < 18; i++) { const row = Math.floor(i / 4), colI = i % 4; obj(SP.ball(PAL[i % 6] === C.cream ? C.coral : PAL[i % 6], 18, 40 + (i % 5), 0.4), 316 + colI * 36 + (row % 2) * 14, TOP - 40 - row * 32, t0 + i * (1.6 / 18), X, { seed: 34 + i, minor: true, shadow: { blur: 4, dx: 2, dy: 3, a: 0.3 } }); }
    obj(SP.ball(C.yellow, 18, 46, 0.4), 878, TOP - 40, at(36, 'closing') + 0.4, X, { seed: 60, minor: true });
    wordC('CLOSE', 385, 210, 64, at(36, 'closing'), X, 'fall', C.coral, 1 / 24, 0, 'ding');
    wordC('open', 895, 210, 56, at(36, 'closing') + 0.4, X, 'fall', C.yellow, 1 / 24);
    word('evolution', 520, 120, 52, at(35, 'evolution'), X, 'fall', C.cream, 1 / 24);
  });

  // ======================= CHAPTER 3: the bare-hands trick =======================
  // 14. jaws already shut: hands press down, the weak opening push loses (small arrow gets the red X)
  scene(PS(37) - 0.15, 'trick', () => {
    set('trick', '#4f6f9e', '#cfb58a', { glow: 0.26 });
    chap('3', 'THE TRICK', PS(37));
    word('the trick', 60, 170, 64, at(37, 'trick'), X, 'fall', C.yellow, 1 / 24);
    const cx = 560, cy = FY + 30, s = 1.2;
    croc(cx, cy, s, PS(37), X, { seed: 40, big: true });
    const [hx, hy] = cw(cx, cy, s, 230, -152);
    obj(SP2.hand(0), hx - 150, hy - 52, at(40, 'grip'), X, { seed: 41, hit: 'stamp' });
    obj(SP2.hand(1), hx + 20, hy - 48, at(40, 'grip') + 0.17, X, { seed: 42, rot: -0.05 });
    coil('handsdn', [[hx + 230, hy - 150], [hx + 230, hy - 50]], C.cyan, at(40, 'grip'), X, { wdt: 26 });
    const [jx, jy] = cw(cx, cy, s, 250, -40);
    coil('pushup', [[jx, jy + 90], [jx, jy + 40]], C.yellow, at(39, 'push'), X, { wdt: 10 });
    word('weak push', jx - 120, jy + 150, 44, at(39, 'weak'), X, 'fall', C.yellow, 1 / 24);
    obj(SP.xmark(), jx - 40, jy - 30, at(41, 'lose'), X, { rot: 0.1, hit: 'slap', big: true, seed: 43, sx: 0.65, sy: 0.65 });
  });
  // 15. wildlife handlers: a rubber band looped around the snout, or a few turns of tape; can't open
  scene(PS(42) - 0.15, 'handlers', () => {
    set('handlers', '#7a8f4f', '#d9c49a', { glow: 0.24 });
    chap('3', 'THE TRICK', PS(42) - 1);
    word('handlers', 70, 180, 64, at(42, 'handlers'), X, 'fall', C.cream, 1 / 24);
    croc(620, FY + 20, 1.2, at(42, 'wildlife'), X, { seed: 44, big: true, band: at(43, 'band'), tape: at(44, 'tape') });
    word('rubber band', 760, 180, 56, at(43, 'rubber'), X, 'fall', C.band, 1 / 24);
    word('tape', 1000, 260, 56, at(44, 'tape'), X, 'fall', C.tape, 1 / 24);
    wordC("CAN'T OPEN", 640, 650, 64, at(45, 'cant'), X, 'fall', [C.yellow, C.cream], 1 / 24, 0, 'success');
  });
  // 16. never try this yourself: getting it shut is the dangerous part, and the tail is all muscle too
  scene(PS(46) - 0.15, 'warning', () => {
    set('warning', '#9e3f3a', '#d8b48a', { glow: 0.2 });
    chap('3', 'THE TRICK', PS(46) - 1);
    obj(SP2.hand(0), 160, 210, at(46, 'never'), X, { seed: 45, sx: 1.2, sy: 1.2 });
    obj(SP.xmark(), 190, 160, at(46, 'never') + 0.17, X, { hit: 'slap', big: true, seed: 46, sx: 1.3, sy: 1.3 });
    word("DON'T", 520, 200, 110, at(46, 'never'), X, 'fall', C.cream, 1 / 24);
    word('try this!', 560, 300, 80, at(46, 'try'), X, 'fall', C.yellow, 1 / 24);
    const swing = TQ < at(48, 'tail') ? 0 : Math.round(Math.sin((TQ - at(48, 'tail')) * 9) * 3) / 3 * 0.06;
    croc(820, FY + 70, 0.75, at(47, 'dangerous'), X, { seed: 47, open: 0.35, flip: true, mode: 'right' });
    word('dangerous', 80, 470, 56, at(47, 'dangerous'), X, 'fall', C.coral, 1 / 24);
    if (TQ >= at(48, 'tail')) coil('tailwarn', curve(1180, 430, 1240, 330 + swing * 200, 1160, 260, 12), C.yellow, at(48, 'tail'), X, { wdt: 16 });
    word('tail!', 1080, 220, 64, at(48, 'tail'), X, 'fall', C.yellow, 1 / 24, 0, 'thud');
  });

  // ======================= CHAPTER 4: a gentle touch =======================
  // 17. the surprise: crushing jaws, incredibly gentle (holding an egg without a crack)
  scene(PS(49) - 0.15, 'gentle', () => {
    set('gentle', '#d08aa0', '#e8d2a8', { glow: 0.3 });
    chap('4', 'A GENTLE TOUCH', PS(49));
    word('SURPRISE', 70, 200, 96, at(49, 'surprising'), X, 'fall', [C.yellow, C.cream, C.coral], 1 / 24, 0, 'ding');
    croc(560, FY + 20, 1.15, at(50, 'crushing'), X, { seed: 48, open: 0.14, inMouth: (c) => { if (TQ >= at(50, 'gentle') - 0.4) place(c, SP2.egg(), 255, -112, {}); } });
    wordC('gentle', 1040, 300, 80, at(50, 'gentle'), X, 'fall', C.pink, 1 / 24, 0, 'success');
  });
  // 18. close up on the face: thousands of tiny bumps; each one a touch sensor; more sensitive than your fingertips
  scene(PS(51) - 0.15, 'bumps', () => {
    set('bumps', '#4f6f5a', '#c9b48a', { glow: 0.24 });
    chap('4', 'A GENTLE TOUCH', PS(51) - 1);
    obj(SP2.skin(), 90, 150, at(51, 'face'), X, { seed: 50 });
    const r = H.rng(51), t0 = at(52, 'thousands');
    for (let i = 0; i < 26; i++) obj(SP2.dot(i), 120 + r.range(0, 460), 180 + r.range(0, 300), t0 + Math.floor(i / 3) * (1 / 12), X, { seed: 52 + i, minor: true, shadow: { blur: 3, dx: 1, dy: 2, a: 0.35 } });
    word('tiny bumps', 130, 610, 56, at(52, 'tiny'), X, 'fall', C.cream, 1 / 24);
    word('touch', 690, 230, 72, at(53, 'touch'), X, 'fall', C.yellow, 1 / 24);
    word('sensor', 690, 310, 72, at(53, 'sensor'), X, 'fall', C.yellow, 1 / 24);
    word('>', 700, 470, 140, at(54, 'sensitive'), X, 'fall', C.coral, 1 / 24, 0, 'impact');
    obj(SP2.finger(), 930, 300, at(55, 'fingertips'), X, { seed: 53 });
    word('fingertip', 860, 280, 52, at(55, 'fingertips'), X, 'fall', C.cream, 1 / 24);
  });
  // 19. they can feel a ripple from a single drop of water
  scene(PS(56) - 0.15, 'drop', () => {
    set('drop', '#2f5f86', '#4f8fc0', { glow: 0.2 });
    chap('4', 'A GENTLE TOUCH', PS(56) - 1);
    croc(330, FY + 120, 1.3, PS(56) - 0.05, X, { seed: 55, ct: false });
    obj(SP2.water(1400, 230, 'b'), -60, FY - 10, PS(56) - 0.1, X, { seed: 56, alpha: 0.9, shadow: { blur: 14, dx: 0, dy: -6, a: 0.25 } });
    const tD = at(57, 'drop'), dy = TQ < tD ? 0 : Math.min(330, Math.round((TQ - tD) * 12) * 70);
    if (TQ >= tD - 0.5 && dy < 330) obj(SP2.dropw(), 880, 140 + dy, tD - 0.5, X, { seed: 57, shadow: { blur: 4, dx: 2, dy: 3, a: 0.3 } });
    ripple(902, FY + 6, tD + 0.4);
    word('ripple', 820, 200, 64, at(56, 'ripple'), X, 'fall', C.cream, 1 / 24);
    word('1 drop', 980, 300, 72, at(57, 'single'), X, 'fall', C.cyan, 1 / 24, 0, 'ding');
  });
  // 20. they help a croc sense prey in the dark (dim set, a fish passes)
  scene(PS(58) - 0.15, 'dark', () => {
    set('dark', C.night, '#2f4f70', { glow: 0.08 });
    chap('4', 'A GENTLE TOUCH', PS(58) - 1);
    croc(360, FY + 100, 1.2, PS(58), X, { seed: 58, ct: false });
    obj(SP2.water(1400, 240, 'c'), -60, FY - 20, PS(58) - 0.1, X, { seed: 59, alpha: 0.85, shadow: false });
    const fx = 1150 - Math.round((TQ - PS(58)) * 12) * 18;
    if (TQ >= at(58, 'prey')) obj(SP2.fish(), Math.max(700, fx), FY + 70, at(58, 'prey'), X, { seed: 60, alpha: 0.85 });
    word('in the dark', 760, 200, 72, at(58, 'dark'), X, 'fall', C.cyan, 1 / 24);
  });
  // 21. a mother carries her newly hatched babies in her mouth without hurting one
  scene(PS(59) - 0.15, 'mother', () => {
    set('mother', '#c8794a', '#e2c79a', { glow: 0.28 });
    chap('4', 'A GENTLE TOUCH', PS(59) - 1);
    croc(520, FY + 20, 1.25, PS(59), X, {
      seed: 61, big: true, open: TQ < at(60, 'carry') ? 0 : jaw(at(60, 'carry'), 0, 0.38, 0.4, 3),
      onJaw: (c, op) => { if (TQ < at(60, 'babies')) return; [150, 215].forEach((d, i) => { c.save(); c.translate(100 + Math.cos(op) * d, -92 + Math.sin(op) * d); c.scale(0.2, 0.2); croc(0, 0, 1, at(60, 'babies') + i * 0.17, null, { seed: 62 + i, ct: false }); c.restore(); }); },
    });
    word('mother', 80, 190, 64, at(59, 'mother'), X, 'fall', C.cream, 1 / 24);
    word('babies', 900, 210, 72, at(60, 'babies'), X, 'fall', C.yellow, 1 / 24, 0, 'pop');
    obj(SP.check(), 980, 290, at(61, 'single'), X, { seed: 64, hit: 'success', big: true });
  });

  // ======================= CHAPTER 5: teeth on repeat =======================
  // 22. then the teeth: an alligator has about 80
  scene(PS(62) - 0.15, 'teeth', () => {
    set('teeth', '#5f6f9e', '#d9c49a', { glow: 0.24 });
    chap('5', 'TEETH ON REPEAT', PS(62));
    for (let i = 0; i < 12; i++) obj(SP2.tooth(0.9), 120 + i * 88, TOP - 81, at(62, 'teeth') + i * (1 / 12), X, { seed: 70 + i, minor: true, ct: [24, 6] });
    word('80', 470, 330, 170, at(63, '80'), X, 'fall', C.yellow, 1 / 24, 0, 'impact');
    word('teeth', 680, 310, 72, at(63, '80') + 0.2, X, 'fall', C.cream, 1 / 24);
  });
  // 23. each replaced up to 50 times: a new tooth waits under the old one, then pushes it out
  scene(PS(64) - 0.15, 'replace', () => {
    set('replace', '#7a5f8f', '#d6b98a', { glow: 0.26 });
    chap('5', 'TEETH ON REPEAT', PS(64) - 1);
    obj(SP2.gum(), 160, TOP - 200, PS(64), X, { ct: [180, 12], seed: 75 });
    const tOut = at(67, 'old'), rise = TQ < tOut ? 0 : step6(tOut, 0.6, 4);
    obj(SP2.tooth(1.6, 'o'), 300, TOP - 330 - rise * 40, PS(64) + 0.1, X, { seed: 76, rot: rise * 0.3, alpha: 1 - rise * 0.6 });
    obj(SP2.tooth(1.1, 'n'), 312, TOP - 150 - rise * 110, at(66, 'new'), X, { seed: 77, shadow: { blur: 6, dx: 3, dy: 4, a: 0.4 } });
    coil('upnew', [[460, TOP - 60], [460, TOP - 190]], C.cream, at(66, 'waiting'), X, { wdt: 14 });
    word('x50', 700, 300, 150, at(64, '50'), X, 'fall', C.yellow, 1 / 24, 0, 'impact');
    word('new tooth', 680, 420, 56, at(66, 'new'), X, 'fall', C.cream, 1 / 24);
    word('waiting', 700, 490, 56, at(66, 'waiting'), X, 'fall', C.cream, 1 / 24);
  });
  // 24. scientists study it, hoping it might help people regrow lost teeth
  scene(PS(68) - 0.15, 'regrow', () => {
    set('regrow', '#3f8f8a', '#d9c39a', { glow: 0.26 });
    chap('5', 'TEETH ON REPEAT', PS(68) - 1);
    obj(SP2.tooth(1.4, 'l'), 360, TOP - 126, at(68, 'scientists'), X, { seed: 80, ct: [30, 8] });
    obj(SP2.lens(), 150, TOP - 330, at(68, 'studying'), X, { seed: 81, rot: -0.2, big: true });
    obj(SP2.face(), 760, TOP - 300, at(69, 'people'), X, { seed: 82, big: true });
    word('regrow', 640, 140, 80, at(70, 'regrow'), X, 'fall', C.yellow, 1 / 24, 0, 'ding');
    word('teeth?', 940, 140, 80, at(70, 'teeth'), X, 'fall', C.cream, 1 / 24);
  });

  // ======================= CHAPTER 6: the one-way machine =======================
  // 25. recap: power to close, barely any to open, a fingertip-soft touch
  scene(PS(71) - 0.15, 'recap', () => {
    set('recap', '#8a5f3e', '#e2c79a', { glow: 0.3 });
    wordC('ONE-WAY MACHINE', 640, 140, 80, at(71, 'oneway'), X, 'fall', [C.yellow, C.cream, C.coral], 1 / 24, 0, 'stamp');
    croc(560, FY + 40, 1.05, at(71, 'jaw'), X, { seed: 85, open: TQ < at(73, 'open') ? 0 : 0.12 });
    coil('bigup', [[1000, 520], [1000, 260]], C.coral, at(72, 'close'), X, { wdt: 34 });
    word('close', 1050, 400, 64, at(72, 'close'), X, 'fall', C.coral, 1 / 24, 0, 'impact');
    coil('tinydn', [[160, 300], [160, 350]], C.yellow, at(73, 'open'), X, { wdt: 10 });
    word('open', 110, 420, 48, at(73, 'open'), X, 'fall', C.yellow, 1 / 24);
    word('soft touch', 90, 650, 56, at(74, 'soft'), X, 'fall', C.pink, 1 / 24);
  });
  // 26. next time: why do porcupine quills get stuck in you?
  scene(PS(75) - 0.15, 'next', () => {
    set('next', '#6f5a3e', '#d6b07a', { glow: 0.24 });
    word('NEXT TIME', 80, 150, 80, at(75, 'next'), null, 'fall', C.yellow, 1 / 24);
    obj(SP2.porc(), 140, TOP - 280, at(75, 'porcupine'), null, { ct: [150, 12], seed: 90, big: true });
    word('quills', 640, 330, 110, at(75, 'quills'), null, 'fall', C.quill, 1 / 24);
    word('stuck?', 680, 450, 110, at(76, 'stuck'), null, 'fall', [C.coral, C.yellow], 1 / 24, 0, 'end');
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
    // jaw snaps: a wet clay clack
    const snap = (t, g = 1) => { k.play('slap', q(t), { gain: 0.6 * g }); plop(q(t), 1.4 * g, 90, 0.2, false); k.noise(q(t), { dur: 0.05, filter: 'highpass', f: 2500, gain: 0.12 * g }); };
    snap(at(0, 'shut')); snap(at(10, 'biting'), 0.7); snap(at(12, 'bit'), 0.8); snap(at(32, 'snaps'), 1.2);
    // jaws creak open
    [at(29, 'down'), at(60, 'carry')].forEach((t) => squelch(q(t), 0.6, 0.2, 0.3, false));
    // the force-meter needle sweeping up, and the bar growing
    k.play('riser', q(at(10, 'biting') + 0.3), { dur: 0.8, gain: 0.3 });
    k.play('riser', q(at(18, 'saltie')), { dur: 0.9, gain: 0.35 });
    // the balance beam crashing over
    [at(4, 'lopsided'), at(33, 'huge')].forEach((t) => { k.play('swish', q(t), { dur: 0.25, gain: 0.4 }); k.play('thud', q(t) + 0.3, { gain: 0.6 }); });
    // rubber band stretch + snap, tape pulled off the roll
    { const t = q(at(43, 'band')); k.tone(t, { f: [[0, 180], [0.25, 420]], dur: 0.25, gain: 0.12 }); k.play('slap', t + 0.25, { gain: 0.4 }); }
    { const t = q(at(44, 'tape')); for (let i = 0; i < 3; i++) k.noise(t + i * 2 / 12, { dur: 0.16, color: 'pink', filter: 'bandpass', f: [[0, 1800], [0.16, 3500]], q: 1.2, gain: 0.22 }); }
    // tail swish
    [0, 0.35, 0.7].forEach((d) => k.play('swish', q(at(48, 'tail') + d), { dur: 0.2, gain: 0.35, pan: 0.6 }));
    // a single water drop and its ripple; water laps in the water scenes
    { const t = q(at(57, 'drop')) + 5 / 12; k.play('blip', t, { f: 'C7', type: 'sine', dur: 0.08, gain: 0.6 }); k.play('blip', t + 0.08, { f: 'G6', type: 'sine', dur: 0.1, gain: 0.35 }); }
    [PS(30), PS(56), PS(58)].forEach((t0, j) => { const r = H.rng(800 + j); for (let i = 0; i < 4; i++) k.noise(q(t0 + 0.3 + i * r.range(0.6, 1.1)), { dur: 0.3, color: 'pink', filter: 'lowpass', f: 600, gain: 0.08, a: 0.1, minor: true }); });
    // bumps sparkle; teeth tick on; new tooth rises
    k.play('sparkle', q(at(52, 'thousands')), { n: 6, gain: 0.4 });
    k.play('whoosh', q(at(67, 'old')), { dur: 0.5, gain: 0.4, top: 900 });
    // stop-motion cuts: a soft table bump on each new set
    SC.slice(1).forEach((s) => squelch(q(s.s), 0.35, 0, 0.1));
  }

  function thumbnail(ctx, W, H_) {
    ctxG = ctx; TQ = 3; FRN = 36; X = 999;
    set('thumb', '#3f7f7a', '#c9a77a', { glow: 0.3 });
    croc(400, FY + 70, 1.1, 0, null, { seed: 1, open: 0 });
    const [hx, hy] = cw(400, FY + 70, 1.1, 250, -152);
    obj(SP2.hand(0), hx - 80, hy - 52, 0, null, { seed: 2 });
    obj(SP2.hand(1), hx + 70, hy - 48, 0, null, { seed: 3, rot: -0.05 });
    word('WEAK', 790, 230, 160, 0, null, 'fall', [C.cream, C.yellow], 0);
    word('SPOT', 800, 420, 160, 0, null, 'fall', [C.yellow, C.coral], 0);
    finish(ctx);
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0; window.SCENES = SC;
})();
