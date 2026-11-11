// ================= Synthwave Outrun, 16:9 1280x720: "How do homing pigeons find their way home?" =================
// Long video (~3 min), 6 chapters, 31 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// An 80s night flight: a neon line-art pigeon rides the outrun highway home. Top-down neon map boards show the
// training flights, Keeton's 90-degree clock-shift miss, smell regions carried on the wind and the Oxford GPS tracks
// that follow roads; the camera tilts into the sky for the sun's arc and Earth's field, CRT glitch cuts between scenes,
// chrome titles slam in on the numbers. Base style functions reused from 20261027-electricity (same reference source).
(function () {
  // ---------- voiceover phrases (phrases.json, Kokoro am_michael, natural mode) ----------
  const PH = [{"s":0.25,"e":3.95,"text":"Take a pigeon six hundred miles from home and let it go.","words":[["take",0.25],["a",0.59],["pigeon",0.67],["six",1.17],["hundred",1.43],["miles",2.01],["from",2.43],["home",2.77],["and",3.11],["let",3.36],["it",3.61],["go",3.78]]},{"s":4.36,"e":5.83,"text":"It'll be back the same day.","words":[["itll",4.36],["be",4.65],["back",4.8],["the",5.09],["same",5.31],["day",5.61]]},{"s":6.21,"e":8.55,"text":"No map, no phone, no GPS.","words":[["no",6.21],["map",6.48],["no",6.9],["phone",7.17],["no",7.86],["gps",8.13]]},{"s":8.97,"e":11.0,"text":"And nobody fully knows how it does it.","words":[["and",8.97],["nobody",9.17],["fully",9.58],["knows",9.92],["how",10.25],["it",10.46],["does",10.59],["it",10.86]]},{"s":11.39,"e":13.56,"text":"So how does a bird that small know the way?","words":[["so",11.39],["how",11.52],["does",11.72],["a",11.98],["bird",12.05],["that",12.31],["small",12.57],["know",12.9],["the",13.17],["way",13.36]]},{"s":14.01,"e":15.89,"text":"Let's take a ride along its route.","words":[["lets",14.01],["take",14.3],["a",14.59],["ride",14.66],["along",14.95],["its",15.31],["route",15.53]]},{"s":16.35,"e":18.99,"text":"People figured out this trick a long time ago.","words":[["people",16.35],["figured",16.78],["out",17.28],["this",17.49],["trick",17.78],["a",18.13],["long",18.2],["time",18.49],["ago",18.77]]},{"s":19.39,"e":23.03,"text":"The ancient Egyptians and Romans carried pigeons on trips","words":[["the",19.39],["ancient",19.61],["egyptians",20.13],["and",20.8],["romans",21.02],["carried",21.47],["pigeons",21.99],["on",22.51],["trips",22.66]]},{"s":23.41,"e":25.16,"text":"and let them go with messages.","words":[["and",23.41],["let",23.63],["them",23.84],["go",24.14],["with",24.28],["messages",24.57]]},{"s":25.61,"e":30.43,"text":"Back in 44 BC, a Roman general sent his notes by pigeon.","words":[["back",25.61],["in",26.06],["44",26.29],["bc",26.51],["a",26.73],["roman",26.85],["general",27.4],["sent",28.19],["his",28.64],["notes",28.97],["by",29.53],["pigeon",29.76]]},{"s":30.86,"e":31.89,"text":"Here's the secret.","words":[["heres",30.86],["the",31.23],["secret",31.45]]},{"s":32.24,"e":34.19,"text":"Any pigeon can find its own home.","words":[["any",32.24],["pigeon",32.46],["can",32.91],["find",33.14],["its",33.44],["own",33.67],["home",33.89]]},{"s":34.58,"e":36.13,"text":"Breeders just start them young,","words":[["breeders",34.58],["just",35.06],["start",35.3],["them",35.6],["young",35.83]]},{"s":36.59,"e":39.35,"text":"with short practice flights from a mile or two away,","words":[["with",36.59],["short",36.86],["practice",37.18],["flights",37.71],["from",38.17],["a",38.43],["mile",38.5],["or",38.76],["two",38.89],["away",39.09]]},{"s":39.76,"e":41.18,"text":"then farther and farther.","words":[["then",39.76],["farther",40.03],["and",40.51],["farther",40.71]]},{"s":41.65,"e":44.12,"text":"Scientists think a pigeon needs two tools.","words":[["scientists",41.65],["think",42.35],["a",42.71],["pigeon",42.78],["needs",43.2],["two",43.55],["tools",43.76]]},{"s":44.49,"e":46.67,"text":"A compass, to tell which way is which.","words":[["a",44.49],["compass",44.57],["to",45.09],["tell",45.24],["which",45.55],["way",45.92],["is",46.15],["which",46.3]]},{"s":47.14,"e":49.52,"text":"And a map, to know where home actually is.","words":[["and",47.14],["a",47.36],["map",47.44],["to",47.66],["know",47.81],["where",48.11],["home",48.48],["actually",48.78],["is",49.37]]},{"s":49.95,"e":51.45,"text":"Let's start with the compass.","words":[["lets",49.95],["start",50.21],["with",50.54],["the",50.8],["compass",51.0]]},{"s":51.83,"e":54.65,"text":"On a sunny day, a pigeon steers by the sun.","words":[["on",51.83],["a",52.01],["sunny",52.1],["day",52.54],["a",52.8],["pigeon",52.89],["steers",53.42],["by",53.94],["the",54.12],["sun",54.39]]},{"s":55.12,"e":57.63,"text":"But the sun moves fifteen degrees every hour,","words":[["but",55.12],["the",55.32],["sun",55.53],["moves",55.73],["fifteen",56.07],["degrees",56.54],["every",57.02],["hour",57.36]]},{"s":58.13,"e":60.45,"text":"so the bird has to know what time it is.","words":[["so",58.13],["the",58.28],["bird",58.52],["has",58.82],["to",59.06],["know",59.21],["what",59.52],["time",59.83],["it",60.14],["is",60.29]]},{"s":60.86,"e":65.38,"text":"Decades ago, a scientist named William Keeton played a sneaky trick.","words":[["decades",60.86],["ago",61.42],["a",61.67],["scientist",61.75],["named",62.47],["william",62.88],["keeton",63.44],["played",63.93],["a",64.41],["sneaky",64.49],["trick",64.98]]},{"s":65.79,"e":68.75,"text":"He kept pigeons under lamps that ran six hours off.","words":[["he",65.79],["kept",65.93],["pigeons",66.22],["under",66.73],["lamps",67.09],["that",67.45],["ran",67.74],["six",67.95],["hours",68.17],["off",68.53]]},{"s":69.1,"e":71.06,"text":"Then he let them go on a sunny day.","words":[["then",69.1],["he",69.41],["let",69.56],["them",69.78],["go",70.08],["on",70.23],["a",70.38],["sunny",70.46],["day",70.83]]},{"s":71.53,"e":72.36,"text":"Home was west,","words":[["home",71.53],["was",71.83],["west",72.06]]},{"s":72.55,"e":73.9,"text":"but the birds flew north.","words":[["but",72.55],["the",72.75],["birds",72.96],["flew",73.3],["north",73.57]]},{"s":74.28,"e":75.99,"text":"They were off by ninety degrees,","words":[["they",74.28],["were",74.54],["off",74.8],["by",75.0],["ninety",75.13],["degrees",75.53]]},{"s":76.41,"e":79.18,"text":"exactly what a six-hour mistake would cause.","words":[["exactly",76.41],["what",76.95],["a",77.25],["sixhour",77.33],["mistake",77.87],["would",78.41],["cause",78.8]]},{"s":79.57,"e":81.6,"text":"So the sun really is their compass.","words":[["so",79.57],["the",79.71],["sun",79.93],["really",80.15],["is",80.58],["their",80.73],["compass",81.09]]},{"s":82.03,"e":83.64,"text":"But what about cloudy days?","words":[["but",82.03],["what",82.25],["about",82.54],["cloudy",82.91],["days",83.35]]},{"s":84.11,"e":85.42,"text":"Pigeons still get home.","words":[["pigeons",84.11],["still",84.59],["get",84.94],["home",85.15]]},{"s":85.8,"e":88.25,"text":"Keeton tried tiny magnets on their backs.","words":[["keeton",85.8],["tried",86.23],["tiny",86.59],["magnets",86.88],["on",87.39],["their",87.53],["backs",87.89]]},{"s":88.72,"e":90.98,"text":"In sunshine, the magnets did nothing.","words":[["in",88.72],["sunshine",88.87],["the",89.47],["magnets",89.7],["did",90.23],["nothing",90.45]]},{"s":91.38,"e":93.64,"text":"Under clouds, those birds got lost.","words":[["under",91.38],["clouds",91.78],["those",92.27],["birds",92.67],["got",93.08],["lost",93.32]]},{"s":94.03,"e":95.61,"text":"So pigeons have a backup.","words":[["so",94.03],["pigeons",94.19],["have",94.74],["a",95.06],["backup",95.14]]},{"s":95.99,"e":98.18,"text":"They can feel Earth's magnetic field.","words":[["they",95.99],["can",96.28],["feel",96.5],["earths",96.79],["magnetic",97.23],["field",97.81]]},{"s":98.65,"e":99.78,"text":"A compass is great,","words":[["a",98.65],["compass",98.73],["is",99.26],["great",99.41]]},{"s":100.29,"e":102.69,"text":"but it's useless if you don't know where home is.","words":[["but",100.29],["its",100.49],["useless",100.68],["if",101.14],["you",101.27],["dont",101.46],["know",101.72],["where",101.98],["home",102.3],["is",102.56]]},{"s":103.12,"e":104.32,"text":"So where's the map?","words":[["so",103.12],["wheres",103.29],["the",103.81],["map",104.06]]},{"s":104.82,"e":107.44,"text":"Many scientists think it's up the pigeon's nose.","words":[["many",104.82],["scientists",105.09],["think",105.78],["its",106.13],["up",106.34],["the",106.48],["pigeons",106.68],["nose",107.17]]},{"s":107.86,"e":108.43,"text":"Pigeons that can't smell","words":[["pigeons",107.86],["that",108.06],["cant",108.17],["smell",108.29]]},{"s":108.49,"e":111.56,"text":"get lost when they're released somewhere new.","words":[["get",108.49],["lost",108.74],["when",109.07],["theyre",109.4],["released",109.9],["somewhere",110.57],["new",111.31]]},{"s":111.94,"e":115.44,"text":"The idea is that every region has its own mix of smells,","words":[["the",111.94],["idea",112.17],["is",112.49],["that",112.65],["every",112.97],["region",113.37],["has",113.84],["its",114.08],["own",114.32],["mix",114.56],["of",114.8],["smells",114.96]]},{"s":115.85,"e":117.42,"text":"carried along by the wind.","words":[["carried",115.85],["along",116.37],["by",116.75],["the",116.9],["wind",117.12]]},{"s":117.85,"e":119.72,"text":"A young pigeon sitting in its loft","words":[["a",117.85],["young",117.92],["pigeon",118.25],["sitting",118.65],["in",119.12],["its",119.25],["loft",119.45]]},{"s":119.78,"e":122.67,"text":"learns which smells blow in from which direction.","words":[["learns",119.78],["which",120.2],["smells",120.55],["blow",120.98],["in",121.26],["from",121.4],["which",121.68],["direction",122.03]]},{"s":123.06,"e":125.42,"text":"Smell the forest, and home is that way.","words":[["smell",123.06],["the",123.45],["forest",123.69],["and",124.16],["home",124.4],["is",124.71],["that",124.87],["way",125.19]]},{"s":125.82,"e":128.73,"text":"Some researchers think pigeons might also hear","words":[["some",125.82],["researchers",126.12],["think",126.92],["pigeons",127.28],["might",127.79],["also",128.15],["hear",128.44]]},{"s":128.79,"e":131.03,"text":"super-low sounds that travel for miles,","words":[["superlow",128.79],["sounds",129.35],["that",129.77],["travel",130.05],["for",130.47],["miles",130.68]]},{"s":131.55,"e":133.04,"text":"but that's still being tested.","words":[["but",131.55],["thats",131.74],["still",132.05],["being",132.36],["tested",132.67]]},{"s":133.45,"e":135.11,"text":"Now here's the funniest part.","words":[["now",133.45],["heres",133.67],["the",134.03],["funniest",134.24],["part",134.82]]},{"s":135.48,"e":138.01,"text":"Close to home, pigeons switch to their eyes.","words":[["close",135.48],["to",135.84],["home",135.98],["pigeons",136.27],["switch",136.78],["to",137.21],["their",137.36],["eyes",137.72]]},{"s":138.36,"e":142.16,"text":"Oxford scientists put tiny GPS trackers on pigeons.","words":[["oxford",138.36],["scientists",138.89],["put",139.77],["tiny",140.04],["gps",140.39],["trackers",140.66],["on",141.36],["pigeons",141.54]]},{"s":142.5,"e":144.32,"text":"And the birds followed the roads.","words":[["and",142.5],["the",142.7],["birds",142.91],["followed",143.24],["the",143.78],["roads",143.98]]},{"s":144.71,"e":146.32,"text":"They flew straight down a highway,","words":[["they",144.71],["flew",144.94],["straight",145.17],["down",145.63],["a",145.86],["highway",145.92]]},{"s":146.79,"e":148.11,"text":"turned at the traffic lights,","words":[["turned",146.79],["at",147.12],["the",147.23],["traffic",147.4],["lights",147.78]]},{"s":148.36,"e":150.09,"text":"and even went around a roundabout.","words":[["and",148.36],["even",148.55],["went",148.8],["around",149.04],["a",149.41],["roundabout",149.48]]},{"s":150.54,"e":153.78,"text":"It's easier than thinking, so they just follow the road.","words":[["its",150.54],["easier",150.76],["than",151.2],["thinking",151.5],["so",152.08],["they",152.23],["just",152.53],["follow",152.82],["the",153.26],["road",153.48]]},{"s":154.21,"e":155.4,"text":"So how good are they?","words":[["so",154.21],["how",154.36],["good",154.58],["are",154.88],["they",155.1]]},{"s":155.86,"e":159.39,"text":"A racing pigeon averages about fifty miles an hour.","words":[["a",155.86],["racing",155.95],["pigeon",156.45],["averages",156.96],["about",157.63],["fifty",158.05],["miles",158.47],["an",158.89],["hour",159.05]]},{"s":159.75,"e":161.78,"text":"With a tailwind, it can hit ninety.","words":[["with",159.75],["a",160.05],["tailwind",160.12],["it",160.73],["can",160.88],["hit",161.1],["ninety",161.33]]},{"s":162.22,"e":164.35,"text":"Some races run six hundred miles,","words":[["some",162.22],["races",162.53],["run",162.93],["six",163.16],["hundred",163.4],["miles",163.95]]},{"s":164.52,"e":167.76,"text":"and the longest have gone over a thousand miles.","words":[["and",164.52],["the",164.77],["longest",165.02],["have",165.6],["gone",165.93],["over",166.26],["a",166.6],["thousand",166.68],["miles",167.35]]},{"s":168.16,"e":169.36,"text":"Sun for the compass.","words":[["sun",168.16],["for",168.38],["the",168.61],["compass",168.83]]},{"s":169.74,"e":171.48,"text":"Magnetism when it's cloudy.","words":[["magnetism",169.74],["when",170.45],["its",170.77],["cloudy",171.01]]},{"s":171.85,"e":172.92,"text":"Smell for the map.","words":[["smell",171.85],["for",172.23],["the",172.46],["map",172.69]]},{"s":173.29,"e":175.32,"text":"And roads for the last few miles.","words":[["and",173.29],["roads",173.52],["for",173.91],["the",174.15],["last",174.38],["few",174.69],["miles",174.93]]},{"s":175.74,"e":180.19,"text":"Four senses, one tiny brain, and it still beats your phone's battery.","words":[["four",175.74],["senses",176.07],["one",176.57],["tiny",176.81],["brain",177.14],["and",177.55],["it",177.8],["still",177.97],["beats",178.38],["your",178.79],["phones",179.12],["battery",179.62]]},{"s":180.64,"e":182.69,"text":"Next time, your bones are alive.","words":[["next",180.64],["time",180.97],["your",181.3],["bones",181.63],["are",182.04],["alive",182.28]]},{"s":183.06,"e":184.97,"text":"So how do they rebuild themselves?","words":[["so",183.06],["how",183.19],["do",183.4],["they",183.53],["rebuild",183.81],["themselves",184.28]]}];
  // ---------- BEATS (one idea per entry, times from phrases.json) ----------
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); return x ? x[1] : PH[i].s; };
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const W = 1280, HH = 720;
  const E = H.ease, cl = H.clamp;
  const ph = (t, a, b) => cl((t - a) / (b - a));
  try { ['800 120px "Orbitron"', '500 40px "Orbitron"', '700 100px "Caveat"'].forEach((f) => document.fonts.load(f, 'AaZz09?,%')); } catch (e) {}

  // ---------- projection (reference: horizon at 438, camera 1.25 up) ----------
  const HZ = 438, VPX = 640, FOC = 420, CAMH = 1.25;
  const proj = (x, h, z) => [VPX + (x / z) * FOC, HZ + ((CAMH - h) / z) * FOC];

  // ================= reference style functions (synthwave.js) =================
  function skyAndStars(c, t, top = '#05021a', mid = '#1c0640', low = '#5a0f6e', hot = '#c41a7e', edge = '#ff4fa0', seed = 404) {
    const g = c.createLinearGradient(0, 0, 0, HZ);
    g.addColorStop(0, top); g.addColorStop(0.45, mid); g.addColorStop(0.78, low); g.addColorStop(0.94, hot); g.addColorStop(1, edge);
    c.fillStyle = g; c.fillRect(0, 0, W, HZ + 2);
    stars(c, t, 0, HZ * 0.8, seed, 220);
  }
  function stars(c, t, y0, y1, seed, n) {
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const x = r.range(0, W), y = y0 + Math.pow(r(), 1.6) * (y1 - y0), s = r.range(0.6, 1.8);
      const tw = (0.55 + 0.45 * Math.sin(t * r.range(1, 4) + i));
      c.fillStyle = `rgba(255,${r.int(200, 255)},255,${(0.35 + r() * 0.6) * tw})`;
      c.fillRect(x, y, s, s);
      if (s > 1.65 && y < y0 + (y1 - y0) * 0.6) { c.fillStyle = `rgba(200,240,255,${0.5 * tw})`; c.fillRect(x - 6, y + s / 2 - 0.5, 12 + s, 1); c.fillRect(x + s / 2 - 0.5, y - 6, 1, 12 + s); }
    }
  }
  let SUNL = null;
  function sun(c0, cx, cy, R, t, cols) {
    const L = SUNL || (SUNL = H.layer(W, HH)), c = L.getContext('2d');
    c.setTransform(1, 0, 0, 1, 0, 0); c.globalCompositeOperation = 'source-over'; c.clearRect(0, 0, W, HH);
    const bg = c0.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 2.1);
    bg.addColorStop(0, 'rgba(255,90,150,0.55)'); bg.addColorStop(0.5, 'rgba(255,40,140,0.15)'); bg.addColorStop(1, 'rgba(255,40,140,0)');
    c0.fillStyle = bg; c0.fillRect(cx - R * 2.2, cy - R * 2.2, R * 4.4, R * 4.4);
    c.beginPath(); c.arc(cx, cy, R, 0, Math.PI * 2);
    const g = c.createLinearGradient(0, cy - R, 0, cy + R * 0.6);
    const cc = cols || ['#fff6a0', '#ffd23f', '#ff8a3d', '#ff3d7f', '#d4147f'];
    [0, 0.3, 0.55, 0.8, 1].forEach((p, i) => g.addColorStop(p, cc[i]));
    c.fillStyle = g; c.fill();
    c.globalCompositeOperation = 'destination-out';
    const sc = (t * 10) % 22;
    for (let k = -1; k < 14; k++) { const y = cy - R * 0.18 + k * 22 + sc; const f = cl((y - (cy - R * 0.22)) / (R * 1.0)); c.fillRect(cx - R, y, R * 2, 2 + f * 11); }
    c.globalCompositeOperation = 'source-over';
    c0.drawImage(L, 0, 0);
  }
  const MNZ = H.makeNoise(19), MCACHE = {};
  function mountains(c, hs = 1, seedX = 3) {
    const key = hs + ':' + seedX;
    if (!MCACHE[key]) {
      const L = H.layer(W, HH), m = L.getContext('2d');
      const xs = [], zs = [];
      for (let x = -64; x <= 64; x += 2.6) xs.push(x);
      for (let z = 80; z >= 26; z -= 2.4) zs.push(z);
      const hAt = (x, z) => { const ax = Math.abs(x); const ridge = H.smooth(4.5, 15, ax); const n = MNZ.fbm2(x * 0.075 + seedX, z * 0.09, 4) * 0.5 + 0.5; const peaks = Math.pow(n, 1.6) * 36 + 2; const back = H.smooth(30, 60, z) * 0.5 + 0.5; const front = H.smooth(26, 40, z); return ridge * peaks * back * front * hs; };
      const Pp = zs.map((z) => xs.map((x) => { const h = hAt(x, z); return [...proj(x, h, z), h]; }));
      m.lineJoin = 'round';
      for (let j = 0; j < zs.length - 1; j++) {
        const depth = 1 - j / (zs.length - 1);
        for (let i = 0; i < xs.length - 1; i++) {
          const a = Pp[j][i], b = Pp[j][i + 1], cc = Pp[j + 1][i + 1], d = Pp[j + 1][i];
          const hh = (a[2] + b[2] + cc[2] + d[2]) / 4; if (hh < 0.01) continue;
          const shade = cl(hh / 26);
          m.fillStyle = H.rgba(H.mix('#120531', '#3a0f63', shade * 0.8), 1);
          m.beginPath(); m.moveTo(a[0], a[1]); m.lineTo(b[0], b[1]); m.lineTo(cc[0], cc[1]); m.lineTo(d[0], d[1]); m.closePath(); m.fill();
          const lc = H.mix('#b02cff', '#4ff3ff', H.smooth(0.55, 1, shade));
          const qh = Math.max(Math.abs(d[1] - a[1]), Math.abs(cc[1] - b[1])); const dens = cl((qh - 1) / 7);
          m.strokeStyle = H.rgba(lc, (0.3 + 0.6 * (1 - depth)) * dens); m.lineWidth = 1.1; m.stroke();
          m.beginPath(); m.moveTo(a[0], a[1]); m.lineTo(cc[0], cc[1]); m.strokeStyle = H.rgba(lc, (0.15 + 0.3 * (1 - depth)) * dens); m.stroke();
        }
      }
      MCACHE[key] = L;
    }
    c.drawImage(MCACHE[key], 0, 0);
  }
  function floorAndRoad(c, t, speed = 7, road = 2.4) {
    const yTop = HZ + 1;
    const g = c.createLinearGradient(0, yTop, 0, HH);
    g.addColorStop(0, '#2a0838'); g.addColorStop(0.15, '#12041f'); g.addColorStop(1, '#07010f');
    c.fillStyle = g; c.fillRect(0, yTop, W, HH - yTop);
    const zFar = 34, zNear = 0.5;
    c.save();
    c.beginPath(); c.rect(0, HZ, W, HH - HZ); c.clip();
    const strokeGrid = (lw, col) => {
      c.strokeStyle = col; c.lineWidth = lw; c.beginPath();
      for (let x = road + 0.0001; x <= 90; x += 2.6) for (const s of [-1, 1]) { const [x0, y0] = proj(s * x, 0, zNear), [x1, y1] = proj(s * x, 0, zFar + 40); c.moveTo(x0, y0); c.lineTo(x1, y1); }
      const off = (t * speed) % 2.6;
      for (let z = 1 - off; z < zFar + 40; z += 2.6) { if (z < 0.3) continue; const [, y] = proj(0, 0, z); const [xl] = proj(-road, 0, z), [xr] = proj(road, 0, z); c.moveTo(0, y); c.lineTo(xl, y); c.moveTo(xr, y); c.lineTo(W, y); }
      c.stroke();
    };
    c.globalCompositeOperation = 'lighter';
    strokeGrid(6, 'rgba(255,30,170,0.12)'); strokeGrid(2.6, 'rgba(255,50,190,0.35)'); strokeGrid(1.1, 'rgba(255,150,230,0.9)');
    c.globalCompositeOperation = 'source-over';
    const [l0x, l0y] = proj(-road, 0, zNear), [r0x] = proj(road, 0, zNear), [l1x, l1y] = proj(-road, 0, 80), [r1x] = proj(road, 0, 80);
    const rg = c.createLinearGradient(0, HZ, 0, HH); rg.addColorStop(0, '#1a0830'); rg.addColorStop(1, '#0b0418');
    c.fillStyle = rg; c.beginPath(); c.moveTo(l0x, l0y); c.lineTo(l1x, l1y); c.lineTo(r1x, l1y); c.lineTo(r0x, l0y); c.closePath(); c.fill();
    const sg = c.createLinearGradient(0, HZ, 0, HH); sg.addColorStop(0, 'rgba(255,120,120,0.55)'); sg.addColorStop(0.35, 'rgba(255,60,160,0.15)'); sg.addColorStop(1, 'rgba(255,60,160,0)');
    c.fillStyle = sg; c.beginPath(); c.moveTo(VPX - 3, HZ); c.lineTo(VPX + 3, HZ); c.lineTo(VPX + 150, HH); c.lineTo(VPX - 150, HH); c.fill();
    c.globalCompositeOperation = 'lighter';
    for (const [lw, a] of [[10, 0.12], [4, 0.35], [1.6, 1]]) { c.strokeStyle = `rgba(80,240,255,${a})`; c.lineWidth = lw; c.beginPath(); c.moveTo(l0x, l0y); c.lineTo(l1x, l1y); c.moveTo(r0x, l0y); c.lineTo(r1x, l1y); c.stroke(); }
    const off = (t * speed) % 3.2;
    c.globalCompositeOperation = 'source-over';
    for (let z = 0.6 - off; z < 60; z += 3.2) { const z0 = Math.max(0.35, z), z1 = z + 1.5; if (z1 < 0.4) continue; const [ax, ay] = proj(-0.08, 0, z0), [bx] = proj(0.08, 0, z0), [cx, cy] = proj(0.08, 0, z1), [dx] = proj(-0.08, 0, z1); c.fillStyle = 'rgba(255,240,200,0.85)'; c.beginPath(); c.moveTo(ax, ay); c.lineTo(bx, ay); c.lineTo(cx, cy); c.lineTo(dx, cy); c.fill(); }
    c.restore();
    horizonLine(c);
  }
  function horizonLine(c, y = HZ) {
    c.save(); c.globalCompositeOperation = 'lighter';
    const hl = c.createLinearGradient(0, 0, W, 0); hl.addColorStop(0, 'rgba(255,80,180,0)'); hl.addColorStop(0.5, 'rgba(255,200,230,0.95)'); hl.addColorStop(1, 'rgba(255,80,180,0)');
    c.fillStyle = hl; c.fillRect(0, y - 1, W, 2.5);
    const hg = c.createLinearGradient(0, y - 10, 0, y + 30); hg.addColorStop(0, 'rgba(255,60,160,0)'); hg.addColorStop(0.3, 'rgba(255,60,160,0.35)'); hg.addColorStop(1, 'rgba(255,60,160,0)');
    c.fillStyle = hg; c.fillRect(0, y - 10, W, 40); c.restore();
  }
  let BLM = null;
  function bloom(ctx, amt, blur) {
    const s = BLM || (BLM = H.layer(W / 4, HH / 4)), sc = s.getContext('2d');
    sc.setTransform(1, 0, 0, 1, 0, 0); sc.filter = 'none'; sc.clearRect(0, 0, s.width, s.height);
    sc.filter = `blur(${blur}px)`; sc.drawImage(ctx.canvas, 0, 0, s.width, s.height); sc.filter = 'none';
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalCompositeOperation = 'screen'; ctx.globalAlpha = amt;
    ctx.imageSmoothingEnabled = true; ctx.drawImage(s, 0, 0, ctx.canvas.width, ctx.canvas.height); ctx.restore();
  }
  let CHL = null;
  function chromeTitle(c, text, cx, by, size) {
    c.save();
    c.font = `800 ${size}px "Orbitron"`; c.textAlign = 'center'; c.textBaseline = 'alphabetic'; c.letterSpacing = '4px';
    const top = by - size * 0.74, bot = by + 2;
    c.translate(cx, by); c.transform(1, 0, -0.22, 1, 0, 0); c.translate(-cx, -by);
    for (let i = 14; i >= 1; i--) { const k = i / 14; c.fillStyle = H.rgba(H.mix('#ff2fb0', '#1a0533', 0.35 + k * 0.6), 1); c.fillText(text, cx + i * 0.55 * size / 56, by + i * 0.9 * size / 56); }
    c.lineJoin = 'round'; c.strokeStyle = '#12032a'; c.lineWidth = 9 * Math.max(0.6, size / 80); c.strokeText(text, cx, by);
    const g = c.createLinearGradient(0, top, 0, bot);
    g.addColorStop(0, '#0e2a6b'); g.addColorStop(0.18, '#3d7fd6'); g.addColorStop(0.42, '#d9f2ff'); g.addColorStop(0.5, '#ffffff');
    g.addColorStop(0.505, '#2a0a2e'); g.addColorStop(0.58, '#5a1d3a'); g.addColorStop(0.75, '#d0602a'); g.addColorStop(0.9, '#ffc06a'); g.addColorStop(1, '#fff1c8');
    c.fillStyle = g; c.fillText(text, cx, by);
    const m = c.getTransform();
    c.restore();
    const L = CHL || (CHL = H.layer(c.canvas.width, c.canvas.height)), lc = L.getContext('2d');
    lc.setTransform(1, 0, 0, 1, 0, 0); lc.globalCompositeOperation = 'source-over'; lc.clearRect(0, 0, L.width, L.height);
    lc.setTransform(m); lc.font = `800 ${size}px "Orbitron"`; lc.textAlign = 'center'; lc.textBaseline = 'alphabetic'; lc.letterSpacing = '4px';
    lc.fillStyle = '#000'; lc.fillText(text, cx, by);
    lc.globalCompositeOperation = 'source-atop';
    lc.strokeStyle = 'rgba(255,255,255,0.95)'; lc.lineWidth = 3; lc.strokeText(text, cx - 1.5, by - 2);
    lc.strokeStyle = 'rgba(40,0,60,0.55)'; lc.lineWidth = 3; lc.strokeText(text, cx + 1.5, by + 2.5);
    lc.globalCompositeOperation = 'destination-out'; lc.fillStyle = '#000'; lc.fillText(text, cx + 0.5, by + 0.5);
    c.save(); c.setTransform(1, 0, 0, 1, 0, 0); c.drawImage(L, 0, 0); c.restore();
    c.save(); c.setTransform(m); c.font = `800 ${size}px "Orbitron"`; c.textAlign = 'center'; c.letterSpacing = '4px';
    c.strokeStyle = 'rgba(255,170,240,0.55)'; c.lineWidth = 1.2; c.strokeText(text, cx, by); c.restore();
  }
  function glint(c, x, y, s, a) {
    if (a <= 0) return;
    c.save(); c.globalCompositeOperation = 'lighter';
    const rg = c.createRadialGradient(x, y, 0, x, y, s * 0.5); rg.addColorStop(0, `rgba(255,255,255,${a})`); rg.addColorStop(1, 'rgba(255,200,255,0)');
    c.fillStyle = rg; c.fillRect(x - s, y - s, s * 2, s * 2);
    c.fillStyle = `rgba(255,255,255,${a})`;
    c.beginPath(); c.moveTo(x - s, y); c.lineTo(x, y - 1.6); c.lineTo(x + s, y); c.lineTo(x, y + 1.6); c.fill();
    c.beginPath(); c.moveTo(x, y - s * 0.7); c.lineTo(x - 1.4, y); c.lineTo(x, y + s * 0.7); c.lineTo(x + 1.4, y); c.fill();
    c.restore();
  }
  function neonStroke(c, col, w, draw) {
    c.save(); c.lineCap = 'round'; c.lineJoin = 'round'; c.globalCompositeOperation = 'lighter';
    c.strokeStyle = col; c.globalAlpha *= 0.18; c.lineWidth = w * 5; c.beginPath(); draw(); c.stroke();
    c.globalAlpha *= 0.45 / 0.18; c.lineWidth = w * 2.2; c.beginPath(); draw(); c.stroke();
    c.globalAlpha /= 0.45; c.strokeStyle = '#fff'; c.lineWidth = Math.max(1, w * 0.7); c.beginPath(); draw(); c.stroke();
    c.restore();
  }
  function neonFill(c, col, a, draw) { c.save(); c.globalAlpha *= a; c.fillStyle = col; c.beginPath(); draw(); c.fill(); c.restore(); }
  function neonText(c, txt, x, y, font, col, on = 1, align = 'center') {
    if (on <= 0) return;
    c.save(); c.font = font; c.textAlign = align; c.textBaseline = 'middle';
    const a0 = c.globalAlpha;
    c.globalAlpha = a0 * on * 0.55; c.shadowColor = 'rgba(14,0,34,0.9)'; c.shadowBlur = 12; c.fillStyle = 'rgba(20,0,44,0.6)'; c.fillText(txt, x, y);
    c.globalAlpha = a0 * on; c.shadowColor = col; c.shadowBlur = 22; c.fillStyle = col; c.fillText(txt, x, y);
    c.shadowBlur = 8; c.fillText(txt, x, y);
    c.shadowBlur = 0; const fs = parseFloat((/(\d+(?:\.\d+)?)px/.exec(font) || [0, 24])[1]);
    c.strokeStyle = H.rgba(H.mix(col, '#ffffff', 0.62), 0.9); c.lineWidth = Math.max(0.8, fs * 0.04); c.lineJoin = 'round'; c.strokeText(txt, x, y);
    c.fillStyle = H.rgba(H.mix(col, '#ffffff', 0.45), 1); c.globalAlpha = a0 * on * 0.22; c.fillText(txt, x, y);
    c.restore();
  }
  function deadTube(c, txt, x, y, font, col) {
    c.save(); c.font = font; c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineJoin = 'round';
    c.fillStyle = 'rgba(255,120,220,0.08)'; c.fillText(txt, x, y);
    c.strokeStyle = col; c.globalAlpha *= 0.6; c.lineWidth = 1.8; c.strokeText(txt, x, y);
    c.globalAlpha *= 0.58; c.strokeStyle = 'rgba(230,220,255,1)'; c.lineWidth = 0.7; c.strokeText(txt, x - 0.6, y - 0.8);
    c.restore();
  }
  const FLK = [1, 0, 1, 0.3, 0, 1, 1, 0.5, 1, 1];
  const flick = (t, t0) => { if (t < t0) return 0; const d = t - t0; if (d > 0.32) return 1; return FLK[Math.floor(d / 0.032)] ?? 1; };
  function neonArrow(c, pts, prog, col, w = 2.5, head = true) {
    if (prog <= 0) return;
    let total = 0; const L = []; for (let i = 0; i < pts.length - 1; i++) { const l = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]); L.push(l); total += l; }
    let rem = total * cl(prog); const out = [pts[0]]; let dir = [1, 0];
    for (let i = 0; i < L.length && rem > 0; i++) { const u = Math.min(1, rem / L[i]); out.push([H.lerp(pts[i][0], pts[i + 1][0], u), H.lerp(pts[i][1], pts[i + 1][1], u)]); dir = [(pts[i + 1][0] - pts[i][0]) / L[i], (pts[i + 1][1] - pts[i][1]) / L[i]]; rem -= L[i]; }
    neonStroke(c, col, w, () => {
      c.moveTo(...out[0]); for (const p of out) c.lineTo(...p);
      if (prog >= 1 && head) { const [ex, ey] = out[out.length - 1], a = Math.atan2(dir[1], dir[0]); c.moveTo(ex - Math.cos(a - 0.5) * 16, ey - Math.sin(a - 0.5) * 16); c.lineTo(ex, ey); c.lineTo(ex - Math.cos(a + 0.5) * 16, ey - Math.sin(a + 0.5) * 16); }
    });
  }
  // neon script (Caveat) tube, as the reference's payoff line
  function neonScript(c, txt, x, y, size, on, rot = -0.06, col = '#ff1aa8') {
    if (on <= 0) return;
    c.save(); c.translate(x, y); c.rotate(rot);
    c.font = `700 ${size}px "Caveat"`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineJoin = 'round';
    const a0 = c.globalAlpha;
    c.shadowColor = 'rgba(16,0,40,0.95)'; c.shadowBlur = 22; c.fillStyle = 'rgba(30,0,50,0.6)'; c.fillText(txt, 0, 0);
    c.shadowBlur = 0; c.strokeStyle = 'rgba(255,150,210,0.3)'; c.lineWidth = 1.6; c.strokeText(txt, 0, 0);
    if (on > 0) {
      c.globalAlpha = a0 * on;
      c.shadowColor = col; c.shadowBlur = 28; c.fillStyle = col; c.fillText(txt, 0, 0);
      c.shadowBlur = 12; c.fillText(txt, 0, 0);
      c.shadowBlur = 0; c.strokeStyle = 'rgba(255,215,245,0.9)'; c.lineWidth = 1.5; c.strokeText(txt, 0, 0);
      c.fillStyle = 'rgba(255,190,235,0.9)'; c.globalAlpha = a0 * 0.12 * on; c.fillText(txt, 0, 0);
    }
    c.restore();
  }
  // chrome slam: scale from big to 1 with a flash, starting at t0
  function slam(c, text, x, y, size, t, t0, out = Infinity) {
    if (t < t0 - 0.02) return;
    const p = cl((t - t0 + 0.02) / 0.32), fo = 1 - cl((t - out) / 0.25);
    if (fo <= 0) return;
    c.save(); c.globalAlpha *= cl(p * 4) * fo;
    const s = 1 + 1.4 * Math.pow(1 - p, 3);
    c.translate(x, y - size * 0.35); c.scale(s, s); c.translate(-x, -(y - size * 0.35));
    chromeTitle(c, text, x, y, size); c.restore();
    const fl = t > t0 + 0.3 ? Math.exp(-(t - t0 - 0.3) * 8) : 0;
    if (fl > 0.02 && fo >= 1) { c.save(); c.globalCompositeOperation = 'lighter'; c.fillStyle = `rgba(255,200,255,${0.25 * fl})`; c.fillRect(0, 0, W, HH); c.restore(); }
  }
  // smoked-glass panel with chrome bezel (the reference odometer window, any size)
  function glassPanel(c, x, y, w, h, col = 'rgba(79,243,255,0.7)') {
    c.save();
    const bz = c.createLinearGradient(0, y, 0, y + h);
    bz.addColorStop(0, '#9aa6d8'); bz.addColorStop(0.18, '#2a2448'); bz.addColorStop(0.55, '#120c26'); bz.addColorStop(0.82, '#3a2a5a'); bz.addColorStop(1, '#c28ad8');
    c.fillStyle = bz; c.beginPath(); c.roundRect(x - 6, y - 6, w + 12, h + 12, 11); c.fill();
    c.fillStyle = 'rgba(5,1,14,0.94)'; c.beginPath(); c.roundRect(x, y, w, h, 8); c.fill();
    const gl = c.createLinearGradient(x, y - 10, x + w * 0.5, y + h);
    gl.addColorStop(0, 'rgba(255,255,255,0.08)'); gl.addColorStop(0.42, 'rgba(255,255,255,0.05)'); gl.addColorStop(0.43, 'rgba(255,255,255,0)'); gl.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = gl; c.fillRect(x, y, w, h);
    c.strokeStyle = col; c.lineWidth = 2; c.beginPath(); c.roundRect(x, y, w, h, 8); c.stroke();
    c.restore();
  }
  // rolling drum counter (reference odometer, generalized: any digits + unit)
  function odometer(c, x, y, value, label, unit = 'V', on = 1, digits = 7, dw = 54) {
    const s = (unit === 'kWh' ? Math.floor(value) : Math.round(value)).toLocaleString('en-US').padStart(digits, ' ');
    const cw = (ch) => (ch === ',' ? dw * 0.4 : dw);
    let tw = 0; for (const ch of s) tw += cw(ch); const uw = unit ? (unit.length > 1 ? unit.length * dw * 0.62 + dw * 0.3 : dw * 1.1) : 0; tw += uw;
    const x0 = x - tw / 2;
    c.save(); c.globalAlpha *= on;
    glassPanel(c, x0 - 14, y - 46, tw + 28, 92);
    c.font = `800 ${Math.round(dw * 1.18)}px "Orbitron"`; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.save(); c.beginPath(); c.rect(x0 - 12, y - 44, tw + 24, 88); c.clip();
    let cx = x0;
    for (const ch of s) { const w = cw(ch); if (ch !== ',') { const dg = c.createLinearGradient(0, y - 44, 0, y + 44); dg.addColorStop(0, '#020008'); dg.addColorStop(0.5, '#0a0620'); dg.addColorStop(1, '#020008'); c.fillStyle = dg; c.fillRect(cx + 2, y - 44, w - 4, 88); } cx += w; }
    cx = x0; const frac = unit === 'kWh' ? value % 1 : 0;
    c.shadowColor = '#4ff3ff'; c.shadowBlur = 16; c.fillStyle = '#aaffff';
    for (let i = 0; i < s.length; i++) { const ch = s[i], w = cw(ch); if (ch !== ' ') { if (i === s.length - 1 && frac > 0.001) { c.fillText(ch, cx + w / 2, y - frac * 72); c.fillText(String((+ch + 1) % 10), cx + w / 2, y + 72 - frac * 72); } else c.fillText(ch, cx + w / 2, y); } cx += w; }
    if (unit) { c.fillStyle = '#ff9ee8'; c.shadowColor = '#ff4fd8'; if (unit.length > 1) { c.font = `800 ${Math.round(dw * 0.8)}px "Orbitron"`; c.textAlign = 'left'; c.fillText(unit, cx + dw * 0.2, y + 2); } else c.fillText(unit, cx + dw * 0.55, y); }
    c.shadowBlur = 0;
    const fd = c.createLinearGradient(0, y - 44, 0, y + 44);
    fd.addColorStop(0, 'rgba(3,0,10,0.95)'); fd.addColorStop(0.2, 'rgba(3,0,10,0.25)'); fd.addColorStop(0.36, 'rgba(3,0,10,0)'); fd.addColorStop(0.64, 'rgba(3,0,10,0)'); fd.addColorStop(0.8, 'rgba(3,0,10,0.25)'); fd.addColorStop(1, 'rgba(3,0,10,0.95)');
    c.fillStyle = fd; c.fillRect(x0 - 12, y - 44, tw + 24, 88);
    c.restore(); c.restore();
    if (label) neonText(c, label, x, y + 72, '800 28px "Orbitron"', '#ffe066', on);
  }

  // ================= finishing pass (reference strength) =================
  function finish(ctx, t) {
    bloom(ctx, 0.3, 4);
    ctx.save(); ctx.setTransform(ctx.canvas.width / W, 0, 0, ctx.canvas.height / HH, 0, 0);
    ctx.fillStyle = 'rgba(0,0,0,0.12)';
    for (let y = Math.floor(t * 20) % 3; y < HH; y += 3) ctx.fillRect(0, y, W, 1);
    ctx.restore();
    H.grain(ctx, W, HH, 0.04, 12 + Math.floor(t * 12), true);
    ctx.save(); ctx.setTransform(ctx.canvas.width / W, 0, 0, ctx.canvas.height / HH, 0, 0);
    H.vignette(ctx, W, HH, 0.5, '6,0,20'); ctx.restore();
  }

  // ================= backgrounds (each scene picks its own) =================
  // road: outrun highway; sunY/sunR, mountain seed, optional replacement for the sun
  function bgRoad(c, t, o = {}) {
    skyAndStars(c, t + 3, o.top, o.mid, o.low, o.hot, o.edge, o.seed || 404);
    if (o.sky) o.sky(c, t); else sun(c, o.sx || VPX, o.sy || 352, o.sr || 176, t, o.sun);
    mountains(c, o.hs == null ? 1 : o.hs, o.ms || 3);
    floorAndRoad(c, t, o.speed == null ? 7 : o.speed);
  }
  // sky: the camera tilted up, deep stars and a low glow of the horizon at the bottom
  function bgSky(c, t, seed = 77, glow = '#c41a7e') {
    const g = c.createLinearGradient(0, 0, 0, HH);
    g.addColorStop(0, '#03010f'); g.addColorStop(0.55, '#140436'); g.addColorStop(0.9, '#3d0a5c'); g.addColorStop(1, glow);
    c.fillStyle = g; c.fillRect(0, 0, W, HH);
    stars(c, t, 0, HH * 0.95, seed, 320);
  }
  // wall: a neon grid wall seen head-on, floor grid below (for close-ups of objects)
  function bgWall(c, t, o = {}) {
    const hz = o.hz || 560, col = o.col || '255,50,190';
    const g = c.createLinearGradient(0, 0, 0, hz);
    g.addColorStop(0, o.top || '#07021c'); g.addColorStop(1, o.low || '#2a0846');
    c.fillStyle = g; c.fillRect(0, 0, W, hz);
    c.save(); c.globalCompositeOperation = 'lighter';
    const off = o.scroll ? (t * o.scroll) % 64 : 0;
    for (const [lw, a] of [[5, 0.06], [1.2, 0.28]]) {
      c.strokeStyle = `rgba(${col},${a})`; c.lineWidth = lw; c.beginPath();
      for (let x = -64 + off; x <= W + 64; x += 64) { c.moveTo(x, 0); c.lineTo(x, hz); }
      for (let y = hz; y > 0; y -= 64) { c.moveTo(0, y); c.lineTo(W, y); }
      c.stroke();
    }
    c.restore();
    const fg = c.createLinearGradient(0, hz, 0, HH); fg.addColorStop(0, '#2a0838'); fg.addColorStop(1, '#07010f');
    c.fillStyle = fg; c.fillRect(0, hz, W, HH - hz);
    c.save(); c.globalCompositeOperation = 'lighter'; c.strokeStyle = `rgba(${col},0.5)`; c.lineWidth = 1.1; c.beginPath();
    for (let x = -20; x <= 20; x++) { c.moveTo(W / 2 + x * 64, hz); c.lineTo(W / 2 + x * 64 * 6, HH + 400); }
    for (let k = 0; k < 8; k++) { const y = hz + Math.pow(k / 8, 1.8) * (HH - hz + 40); c.moveTo(0, y); c.lineTo(W, y); }
    c.stroke(); c.restore();
    horizonLine(c, hz);
  }
  // scope: CRT oscilloscope screen filling the frame
  function bgScope(c, t) {
    c.fillStyle = '#05010e'; c.fillRect(0, 0, W, HH);
    const g = c.createRadialGradient(W / 2, HH / 2, 60, W / 2, HH / 2, 760); g.addColorStop(0, '#0c1a26'); g.addColorStop(1, '#02010a');
    c.fillStyle = g; c.beginPath(); c.roundRect(60, 50, W - 120, HH - 100, 40); c.fill();
    c.save(); c.globalCompositeOperation = 'lighter'; c.strokeStyle = 'rgba(79,243,255,0.13)'; c.lineWidth = 1;
    for (let x = 100; x < W - 80; x += 60) { c.beginPath(); c.moveTo(x, 80); c.lineTo(x, HH - 80); c.stroke(); }
    for (let y = 100; y < HH - 70; y += 60) { c.beginPath(); c.moveTo(80, y); c.lineTo(W - 80, y); c.stroke(); }
    c.restore();
    c.strokeStyle = 'rgba(200,190,255,0.35)'; c.lineWidth = 3; c.beginPath(); c.roundRect(60, 50, W - 120, HH - 100, 40); c.stroke();
  }
  // ================= subjects, drawn as neon vector line art =================
  const CY = '#4ff3ff', PK = '#ff4fd8', YL = '#ffe066', PU = '#c86bff', OR = '#ffb347', GR = '#5cffb0', RD = '#ff3d5a', LV = '#b9a2ff';
  const F = (px, w = 800) => `${w} ${px}px "Orbitron"`;
  function globe(c, x, y, R, t, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, '#06112a', 0.95, () => c.arc(x, y, R, 0, 7));
    neonStroke(c, '#5aa8ff', 1.4, () => { c.moveTo(x + R, y); c.arc(x, y, R, 0, 7); for (let k = 1; k < 6; k++) { const a = (k / 6) * Math.PI; const ry = R * Math.cos(a), rx = R * Math.sin(a); c.moveTo(x + rx, y + ry); c.ellipse(x, y + ry, rx, rx * 0.28, 0, 0, 7); } for (let k = 0; k < 6; k++) { const a = (k / 6) * Math.PI + t * 0.6; const rx = Math.abs(R * Math.cos(a)); c.moveTo(x, y - R); c.ellipse(x, y, Math.max(0.5, rx), R, 0, -Math.PI / 2, Math.PI * 1.5); } });
    c.restore();
  }
  // sine trace on the scope
  function sineTrace(c, x0, x1, y, amp, cycles, phase, prog, col = YL, w = 2.4) {
    if (prog <= 0) return;
    neonStroke(c, col, w, () => { const N = 240; for (let i = 0; i <= N * prog; i++) { const u = i / N, xx = H.lerp(x0, x1, u), yy = y - Math.sin(u * cycles * Math.PI * 2 + phase) * amp; i ? c.lineTo(xx, yy) : c.moveTo(xx, yy); } });
  }
  // a glowing crossed-out mark
  function crossOut(c, x, y, R, p, col = RD) { if (p <= 0) return; neonStroke(c, col, 4, () => { c.moveTo(x - R, y - R); c.lineTo(x - R + 2 * R * cl(p * 2), y - R + 2 * R * cl(p * 2)); if (p > 0.5) { const q = cl(p * 2 - 1); c.moveTo(x + R, y - R); c.lineTo(x + R - 2 * R * q, y - R + 2 * R * q); } }); }
  function spark(c, x, y, R, t, seed, a = 1) {
    if (a <= 0) return; const r = H.rng(seed + Math.floor(t * 15));
    c.save(); c.globalAlpha *= a;
    neonStroke(c, '#ffffff', 1.4, () => { for (let k = 0; k < 7; k++) { const an = r() * 7, L = R * r.range(0.4, 1); let px = x, py = y; c.moveTo(px, py); for (let j = 0; j < 3; j++) { px += Math.cos(an + r.range(-0.6, 0.6)) * L / 3; py += Math.sin(an + r.range(-0.6, 0.6)) * L / 3; c.lineTo(px, py); } } });
    c.save(); c.globalCompositeOperation = 'lighter'; const g = c.createRadialGradient(x, y, 0, x, y, R); g.addColorStop(0, 'rgba(200,240,255,0.9)'); g.addColorStop(1, 'rgba(79,243,255,0)'); c.fillStyle = g; c.fillRect(x - R, y - R, 2 * R, 2 * R); c.restore();
    c.restore();
  }
  // ================= scenes =================
  const Pn = (i, w, n) => { let k = 0; for (const q of PH[i].words) if (q[0] === w && ++k === n) return q[1]; return P(i, w); };
  const SC = [], SFX = [];
  const fx = (t, kind, o = {}) => SFX.push([t, kind, o]);
  const TRD = { glitch: 0.3, zoom: 0.45, tiltU: 0.55, tiltD: 0.55, cut: 0 };
  function scene(i0, i1, tr, draw) { const s = SC.length ? PE(i0 - 1) + 0.03 : 0; SC.push({ i0, i1, s, tr, draw }); }
  const up = (t, t0, d = 0.35) => E.out(ph(t, t0, t0 + d));
  // chapter card: chrome STOP n + neon script; lifts away when the next phrase starts
  function card(c, t, i, big, script, outT) {
    const lift = E.inOut(ph(t, outT, outT + 0.5));
    if (lift >= 1) return;
    c.save(); c.globalAlpha *= 1 - lift; c.translate(0, -lift * 160);
    slam(c, big, 640, 250, 104, t, PS(i));
    neonScript(c, script, 640, 330, 84, flick(t, PH[i].words[2][1] - 0.1));
    c.restore();
  }
  function cardFx(i) { fx(PS(i), 'slam'); fx(PH[i].words[2][1] - 0.1, 'strike'); }
  // ================= pigeon-story subjects (neon line art over dark glass fills) =================
  const DK = '#0a0222';
  // pigeon, side view facing right (dir=-1 faces left). flap in [-1,1] (1 = wings up). stand: legs down instead of tucked
  function pigeon(c, x, y, s, flap = 0, o = {}) {
    const dir = o.dir || 1, col = o.col || LV, on = o.on == null ? 1 : o.on;
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on; c.translate(x, y); c.scale(s * dir, s);
    if (o.rot) c.rotate(o.rot);
    const body = () => {
      c.moveTo(36, -38); c.quadraticCurveTo(8, -32, -30, -14); c.lineTo(-72, -8); c.lineTo(-80, 6); c.lineTo(-40, 8);
      c.bezierCurveTo(-10, 28, 32, 24, 42, -12); c.quadraticCurveTo(44, -22, 36, -38);
    };
    const wingTip = [-38, -24 - 62 * flap];
    const wing = () => { c.moveTo(18, -22); c.quadraticCurveTo(-4, -30 - 40 * flap, wingTip[0], wingTip[1]); c.quadraticCurveTo(-30, -14 - 18 * flap, -18, -8); c.quadraticCurveTo(0, -10, 18, -22); };
    // dark fills for occlusion
    neonFill(c, DK, 0.95, body); neonFill(c, DK, 0.95, () => c.arc(46, -30, 14, 0, 7));
    if (o.stand) neonStroke(c, OR, 1.4 / s * 1.6, () => { c.moveTo(-2, 20); c.lineTo(-6, 40); c.lineTo(-16, 42); c.moveTo(-6, 40); c.lineTo(2, 43); c.moveTo(12, 18); c.lineTo(10, 40); c.lineTo(0, 42); c.moveTo(10, 40); c.lineTo(20, 42); });
    neonStroke(c, col, 1.5 / s * 1.6, body);
    neonStroke(c, col, 1.5 / s * 1.6, () => { c.moveTo(60, -30); c.arc(46, -30, 14, 0, 7); });
    // beak + cere, eye
    neonStroke(c, YL, 1.2 / s * 1.6, () => { c.moveTo(59, -33); c.lineTo(74, -28); c.lineTo(59, -25); });
    neonFill(c, '#ffffff', 0.9, () => c.arc(57, -33, 2.6, 0, 7));
    neonFill(c, OR, 1, () => c.arc(50, -33, 3.6, 0, 7)); neonFill(c, '#100018', 1, () => c.arc(50.5, -33, 1.7, 0, 7));
    // iridescent neck band
    neonStroke(c, GR, 1.1 / s * 1.6, () => { c.moveTo(34, -16); c.quadraticCurveTo(42, -20, 44, -14); });
    neonStroke(c, PU, 1.1 / s * 1.6, () => { c.moveTo(30, -22); c.quadraticCurveTo(38, -26, 43, -22); });
    // tail bar
    neonStroke(c, PU, 1 / s * 1.6, () => { c.moveTo(-70, -3); c.lineTo(-76, 4); });
    // wing (drawn on top)
    neonFill(c, '#120434', 0.95, wing);
    neonStroke(c, CY, 1.4 / s * 1.6, wing);
    neonStroke(c, CY, 0.8 / s * 1.6, () => { for (let k = 1; k <= 3; k++) { const u = k / 4; c.moveTo(H.lerp(4, wingTip[0], u), H.lerp(-20, wingTip[1], u)); c.lineTo(H.lerp(-6, wingTip[0] + 6, u), H.lerp(-10, wingTip[1] + 12, u)); } });
    if (o.magnet) { neonFill(c, '#300a1a', 1, () => c.rect(-14, -36, 22, 12)); neonStroke(c, RD, 1.2 / s * 1.6, () => { c.rect(-14, -36, 11, 12); }); neonStroke(c, '#5aa8ff', 1.2 / s * 1.6, () => { c.rect(-3, -36, 11, 12); }); }
    if (o.scroll) { neonFill(c, '#2a1a08', 1, () => c.rect(-4, 18, 12, 10)); neonStroke(c, YL, 1.1 / s * 1.6, () => { c.rect(-4, 18, 12, 10); c.moveTo(-6, 23); c.lineTo(10, 23); }); }
    if (o.tracker) { neonFill(c, '#06202a', 1, () => c.roundRect(-20, -40, 20, 12, 3)); neonStroke(c, GR, 1.1 / s * 1.6, () => { c.roundRect(-20, -40, 20, 12, 3); c.moveTo(-10, -40); c.lineTo(-10, -52); }); neonFill(c, GR, 0.5 + 0.5 * Math.sin((o.t || 0) * 8), () => c.arc(-10, -53, 2.5, 0, 7)); }
    c.restore();
  }
  const flapAt = (t, rate = 9) => Math.sin(t * rate);
  // top-down pigeon arrow icon (for maps), heading angle a (radians, 0 = east)
  function pigeonIcon(c, x, y, a, s = 1, col = LV, t = 0) {
    c.save(); c.translate(x, y); c.rotate(a); c.scale(s, s);
    const f = 0.6 + 0.4 * Math.sin(t * 12);
    neonFill(c, DK, 0.9, () => { c.ellipse(0, 0, 14, 5, 0, 0, 7); });
    neonStroke(c, col, 1.3, () => { c.ellipse(0, 0, 14, 5, 0, 0, 7); c.moveTo(4, -4); c.quadraticCurveTo(-2, -20 * f, -10, -24 * f); c.moveTo(4, 4); c.quadraticCurveTo(-2, 20 * f, -10, 24 * f); c.moveTo(-14, 0); c.lineTo(-22, -5); c.moveTo(-14, 0); c.lineTo(-22, 5); });
    neonFill(c, YL, 1, () => c.arc(15, 0, 2.2, 0, 7));
    c.restore();
  }
  // dovecote loft, front view; base centre (x, by), width 160*s
  function loft(c, x, by, s, on = 1, glow = 0) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on; c.translate(x, by); c.scale(s, s);
    const shape = () => { c.moveTo(-80, 0); c.lineTo(-80, -90); c.lineTo(0, -150); c.lineTo(80, -90); c.lineTo(80, 0); c.closePath(); };
    neonFill(c, DK, 0.95, shape);
    if (glow > 0) neonFill(c, 'rgba(255,224,102,0.18)', glow, shape);
    neonStroke(c, PK, 1.6 / s, shape);
    neonStroke(c, PK, 1.2 / s, () => { c.moveTo(-96, -78); c.lineTo(0, -160); c.lineTo(96, -78); });
    neonStroke(c, YL, 1.2 / s, () => { for (const hx of [-42, 0, 42]) { c.moveTo(hx + 14, -50); c.lineTo(hx + 14, -62); c.arc(hx, -62, 14, 0, Math.PI, true); c.lineTo(hx - 14, -50); c.closePath(); } c.moveTo(-70, -46); c.lineTo(70, -46); c.moveTo(-20, -104); c.arc(0, -104, 10, 0, 7); });
    c.restore();
  }
  // top-down loft icon
  function loftIcon(c, x, y, s = 1, on = 1, label = 'HOME') {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, DK, 0.95, () => { c.moveTo(x - 22 * s, y + 18 * s); c.lineTo(x - 22 * s, y - 4 * s); c.lineTo(x, y - 24 * s); c.lineTo(x + 22 * s, y - 4 * s); c.lineTo(x + 22 * s, y + 18 * s); c.closePath(); });
    neonStroke(c, PK, 1.6, () => { c.moveTo(x - 22 * s, y + 18 * s); c.lineTo(x - 22 * s, y - 4 * s); c.lineTo(x, y - 24 * s); c.lineTo(x + 22 * s, y - 4 * s); c.lineTo(x + 22 * s, y + 18 * s); c.closePath(); c.moveTo(x + 6 * s, y + 4 * s); c.arc(x, y + 4 * s, 6 * s, 0, 7); });
    c.restore();
    if (label) neonText(c, label, x, y + 44 * s, F(28), PK, on);
  }
  // top-down neon map board (dark terrain with contour lines + grid)
  const MAPC = {};
  function bgMap(c, t, seed = 5, tint = '79,243,255') {
    const key = seed + tint;
    if (!MAPC[key]) {
      const L = H.layer(W, HH), m = L.getContext('2d');
      const g = m.createRadialGradient(W / 2, HH / 2, 100, W / 2, HH / 2, 820); g.addColorStop(0, '#120530'); g.addColorStop(1, '#04010e');
      m.fillStyle = g; m.fillRect(0, 0, W, HH);
      const nz = H.makeNoise(seed);
      m.globalCompositeOperation = 'lighter';
      // contour lines from noise: march a coarse grid and draw short segments where the field crosses levels
      const cs = 8;
      for (let lev = -0.5; lev <= 0.5; lev += 0.16) {
        m.strokeStyle = `rgba(176,44,255,${0.22 + 0.15 * (lev + 0.5)})`; m.lineWidth = 1; m.beginPath();
        for (let y = 0; y < HH; y += cs) for (let x = 0; x < W; x += cs) {
          const v = (px, py) => nz.fbm2(px * 0.0035, py * 0.0035, 3) - lev;
          const a = v(x, y), b = v(x + cs, y), d = v(x, y + cs);
          if ((a > 0) !== (b > 0)) { const u = a / (a - b); m.moveTo(x + u * cs, y); m.lineTo(x + u * cs, y + cs * 0.9); }
          if ((a > 0) !== (d > 0)) { const u = a / (a - d); m.moveTo(x, y + u * cs); m.lineTo(x + cs * 0.9, y + u * cs); }
        }
        m.stroke();
      }
      m.strokeStyle = `rgba(${tint},0.12)`; m.lineWidth = 1; m.beginPath();
      for (let x = 0; x <= W; x += 80) { m.moveTo(x, 0); m.lineTo(x, HH); }
      for (let y = 0; y <= HH; y += 80) { m.moveTo(0, y); m.lineTo(W, y); }
      m.stroke();
      MAPC[key] = L;
    }
    c.drawImage(MAPC[key], 0, 0);
    // slow radar sweep
    c.save(); c.globalCompositeOperation = 'lighter'; c.globalAlpha = 0.06;
    const sx = ((t * 120) % (W + 400)) - 200; const sg = c.createLinearGradient(sx - 200, 0, sx, 0); sg.addColorStop(0, `rgba(${tint},0)`); sg.addColorStop(1, `rgba(${tint},1)`);
    c.fillStyle = sg; c.fillRect(sx - 200, 0, 200, HH); c.restore();
  }
  // flight path drawn as a dashed neon trail along pts with progress
  function trail(c, pts, prog, col = YL, w = 2.2, dash = true) {
    if (prog <= 0) return;
    c.save(); if (dash) c.setLineDash([14, 10]);
    neonArrow(c, pts, prog, col, w, true); c.restore();
  }
  function pointAlong(pts, u) {
    let total = 0; const L = []; for (let i = 0; i < pts.length - 1; i++) { const l = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]); L.push(l); total += l; }
    let rem = total * cl(u);
    for (let i = 0; i < L.length; i++) { if (rem <= L[i] || i === L.length - 1) { const k = L[i] ? Math.min(1, rem / L[i]) : 0; return [H.lerp(pts[i][0], pts[i + 1][0], k), H.lerp(pts[i][1], pts[i + 1][1], k), Math.atan2(pts[i + 1][1] - pts[i][1], pts[i + 1][0] - pts[i][0])]; } rem -= L[i]; }
    return [...pts[pts.length - 1], 0];
  }
  // compass rose; needle angle a (0 = north up)
  function compass(c, x, y, R, a, on = 1, col = CY) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, DK, 0.9, () => c.arc(x, y, R, 0, 7));
    neonStroke(c, col, 1.6, () => { c.moveTo(x + R, y); c.arc(x, y, R, 0, 7); c.moveTo(x + R * 0.86, y); c.arc(x, y, R * 0.86, 0, 7); for (let k = 0; k < 16; k++) { const an = k / 16 * Math.PI * 2, r0 = k % 4 ? R * 0.78 : R * 0.7; c.moveTo(x + Math.cos(an) * r0, y + Math.sin(an) * r0); c.lineTo(x + Math.cos(an) * R * 0.86, y + Math.sin(an) * R * 0.86); } });
    const fs = Math.max(20, R * 0.2);
    [['N', 0, -1], ['E', 1, 0], ['S', 0, 1], ['W', -1, 0]].forEach(([l, dx, dy]) => neonText(c, l, x + dx * R * 0.56, y + dy * R * 0.56, F(fs), l === 'N' ? RD : LV, 1));
    c.save(); c.translate(x, y); c.rotate(a);
    neonFill(c, RD, 0.85, () => { c.moveTo(0, -R * 0.62); c.lineTo(R * 0.09, 0); c.lineTo(-R * 0.09, 0); c.closePath(); });
    neonFill(c, '#5aa8ff', 0.85, () => { c.moveTo(0, R * 0.62); c.lineTo(R * 0.09, 0); c.lineTo(-R * 0.09, 0); c.closePath(); });
    neonStroke(c, '#ffffff', 0.8, () => { c.moveTo(0, -R * 0.62); c.lineTo(R * 0.09, 0); c.lineTo(0, R * 0.62); c.lineTo(-R * 0.09, 0); c.closePath(); });
    c.restore();
    c.restore();
  }
  // folded paper map icon
  function mapIcon(c, x, y, s, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on; c.translate(x, y); c.scale(s, s);
    const sh = () => { c.moveTo(-90, -60); c.lineTo(-30, -76); c.lineTo(30, -60); c.lineTo(90, -76); c.lineTo(90, 64); c.lineTo(30, 80); c.lineTo(-30, 64); c.lineTo(-90, 80); c.closePath(); };
    neonFill(c, DK, 0.95, sh); neonStroke(c, YL, 1.6 / s, sh);
    neonStroke(c, YL, 1 / s, () => { c.moveTo(-30, -76); c.lineTo(-30, 64); c.moveTo(30, -60); c.lineTo(30, 80); });
    c.save(); c.setLineDash([8, 7]); neonStroke(c, PK, 1.2 / s, () => { c.moveTo(-70, 50); c.bezierCurveTo(-30, 0, 10, 40, 50, -20); }); c.restore();
    neonStroke(c, RD, 1.6 / s, () => { c.moveTo(42, -28); c.lineTo(58, -12); c.moveTo(58, -28); c.lineTo(42, -12); });
    c.restore();
  }
  // clock face; hours (float) sets the hands
  function clockFace(c, x, y, R, hours, on = 1, col = CY, label) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, DK, 0.92, () => c.arc(x, y, R, 0, 7));
    neonStroke(c, col, 1.6, () => { c.moveTo(x + R, y); c.arc(x, y, R, 0, 7); for (let k = 0; k < 12; k++) { const a = k / 12 * Math.PI * 2; c.moveTo(x + Math.cos(a) * R * 0.82, y + Math.sin(a) * R * 0.82); c.lineTo(x + Math.cos(a) * R * 0.95, y + Math.sin(a) * R * 0.95); } });
    const ha = (hours % 12) / 12 * Math.PI * 2 - Math.PI / 2, ma = (hours % 1) * Math.PI * 2 - Math.PI / 2;
    neonStroke(c, YL, 2.4, () => { c.moveTo(x, y); c.lineTo(x + Math.cos(ha) * R * 0.5, y + Math.sin(ha) * R * 0.5); });
    neonStroke(c, PK, 1.6, () => { c.moveTo(x, y); c.lineTo(x + Math.cos(ma) * R * 0.78, y + Math.sin(ma) * R * 0.78); });
    c.restore();
    if (label) neonText(c, label, x, y + R + 34, F(28), col, on);
  }
  // puffy neon cloud
  function cloud(c, x, y, s, on = 1, col = LV) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    const sh = () => { c.moveTo(x - 90 * s, y + 20 * s); c.arc(x - 60 * s, y + 0 * s, 34 * s, Math.PI * 0.75, Math.PI * 1.6); c.arc(x - 10 * s, y - 22 * s, 44 * s, Math.PI * 1.1, Math.PI * 1.9); c.arc(x + 50 * s, y - 4 * s, 36 * s, Math.PI * 1.3, Math.PI * 0.2); c.lineTo(x + 90 * s, y + 20 * s); c.closePath(); };
    neonFill(c, '#1a0c3a', 0.97, sh); neonStroke(c, col, 1.6, sh);
    c.restore();
  }
  // check / cross marks
  function check(c, x, y, R, p, col = GR) { if (p <= 0) return; neonStroke(c, col, 4, () => { const a = [x - R, y], b = [x - R * 0.25, y + R * 0.7], d = [x + R, y - R * 0.8]; const u = cl(p * 2), v = cl(p * 2 - 1); c.moveTo(...a); c.lineTo(H.lerp(a[0], b[0], u), H.lerp(a[1], b[1], u)); if (v > 0) c.lineTo(H.lerp(b[0], d[0], v), H.lerp(b[1], d[1], v)); }); }
  // Earth's field: globe plus dipole field loops
  function fieldLines(c, x, y, R, t, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    for (let k = 1; k <= 4; k++) {
      const L = 1.4 + k * 0.55, pts = [];
      for (let i = 0; i <= 60; i++) { const th = 0.15 + (Math.PI - 0.3) * i / 60; const r = R * L * Math.sin(th) * Math.sin(th); if (r < R * 0.98) continue; pts.push([r * Math.sin(th), -r * Math.cos(th)]); }
      for (const sgn of [-1, 1]) neonStroke(c, k % 2 ? PK : PU, 1.1, () => { pts.forEach((p, i) => (i ? c.lineTo(x + sgn * p[0], y + p[1]) : c.moveTo(x + sgn * p[0], y + p[1]))); });
      // flowing particle
      for (const sgn of [-1, 1]) { if (!pts.length) continue; const p = pts[Math.floor(((t * 0.25 + k * 0.17) % 1) * (pts.length - 1))]; neonFill(c, '#ffffff', 0.9, () => c.arc(x + sgn * p[0], y + p[1], 3, 0, 7)); }
    }
    c.restore();
  }
  // pine tree, sea waves, city block, field rows: smell-region icons (centre x,y)
  function regionIcon(c, kind, x, y, s, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    if (kind === 'forest') for (const [dx, dy, k] of [[-30, 6, 1], [0, -6, 1.25], [30, 8, 0.95]]) neonStroke(c, GR, 1.4, () => { const X = x + dx * s, Y = y + dy * s, h = 50 * s * k; c.moveTo(X, Y - h / 2); c.lineTo(X + h * 0.36, Y + h * 0.3); c.lineTo(X - h * 0.36, Y + h * 0.3); c.closePath(); c.moveTo(X, Y + h * 0.3); c.lineTo(X, Y + h * 0.5); });
    else if (kind === 'sea') neonStroke(c, '#5aa8ff', 1.6, () => { for (let r = -1; r <= 1; r++) { c.moveTo(x - 50 * s, y + r * 18 * s); for (let i = 0; i <= 20; i++) c.lineTo(x - 50 * s + i * 5 * s, y + r * 18 * s + Math.sin(i * 0.8 + r) * 5 * s); } });
    else if (kind === 'city') neonStroke(c, PK, 1.4, () => { [[-44, 30], [-24, 52], [-4, 38], [16, 62], [36, 34]].forEach(([dx, h]) => c.rect(x + dx * s, y + 26 * s - h * s, 18 * s, h * s)); });
    else if (kind === 'farm') neonStroke(c, YL, 1.4, () => { for (let r = 0; r < 5; r++) { c.moveTo(x - 50 * s + r * 6 * s, y - 24 * s + r * 12 * s); c.lineTo(x + 50 * s - r * 6 * s, y - 30 * s + r * 12 * s); } });
    c.restore();
  }
  // scent wisps: wavy strokes moving from (x0,y0) toward (x1,y1)
  function scent(c, x0, y0, x1, y1, t, col = GR, n = 3, on = 1) {
    if (on <= 0) return;
    const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L;
    c.save(); c.globalAlpha *= on;
    for (let k = 0; k < n; k++) {
      const u0 = ((t * 0.5 + k / n) % 1);
      neonStroke(c, col, 1.3, () => { for (let i = 0; i <= 16; i++) { const u = u0 * 0.8 + i / 16 * 0.2, w = Math.sin((u * 10 + t * 3) ) * 10; const px = x0 + dx * u + nx * w, py = y0 + dy * u + ny * w; i ? c.lineTo(px, py) : c.moveTo(px, py); } });
    }
    c.restore();
  }
  // wind streak arrows
  function wind(c, x, y, len, a, t, on = 1, col = CY) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on; c.translate(x, y); c.rotate(a);
    for (let k = 0; k < 3; k++) { const off = ((t * 90 + k * 50) % 150) - 75; c.save(); c.globalAlpha *= Math.sin(cl((off + 75) / 150) * Math.PI); neonArrow(c, [[off - len / 2, (k - 1) * 22], [off + len / 2, (k - 1) * 22]], 1, col, 1.4); c.restore(); }
    c.restore();
  }
  // traffic light
  function trafficLight(c, x, y, s, lit = 'red', on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, DK, 0.95, () => c.roundRect(x - 14 * s, y - 40 * s, 28 * s, 80 * s, 6 * s));
    neonStroke(c, LV, 1.2, () => c.roundRect(x - 14 * s, y - 40 * s, 28 * s, 80 * s, 6 * s));
    [['red', RD, -24], ['amber', OR, 0], ['green', GR, 24]].forEach(([n, col, dy]) => neonFill(c, col, n === lit ? 1 : 0.18, () => c.arc(x, y + dy * s, 8 * s, 0, 7)));
    c.restore();
  }
  // neon bone (teaser)
  function bone(c, x, y, s, on = 1, rot = -0.3) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on; c.translate(x, y); c.rotate(rot); c.scale(s, s);
    const ends = () => { for (const [ex, ey] of [[-100, -20], [-100, 20], [100, -20], [100, 20]]) { c.moveTo(ex + 22, ey); c.arc(ex, ey, 22, 0, 7); } };
    neonFill(c, '#1a1030', 0.95, ends); neonFill(c, '#1a1030', 0.95, () => c.rect(-100, -16, 200, 32));
    neonStroke(c, '#f4f0ff', 1.8 / s, ends);
    neonFill(c, '#1a1030', 1, () => c.rect(-96, -15, 192, 30));
    neonStroke(c, '#f4f0ff', 1.8 / s, () => { c.moveTo(-84, -15); c.lineTo(84, -15); c.moveTo(-84, 15); c.lineTo(84, 15); });
    c.restore();
  }
  // pyramid (wireframe) and Roman temple front
  function pyramid(c, x, by, s, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, DK, 0.9, () => { c.moveTo(x - 140 * s, by); c.lineTo(x, by - 150 * s); c.lineTo(x + 100 * s, by - 10 * s); c.lineTo(x + 100 * s, by); c.closePath(); });
    neonStroke(c, OR, 1.6, () => { c.moveTo(x - 140 * s, by); c.lineTo(x, by - 150 * s); c.lineTo(x + 100 * s, by - 10 * s); c.moveTo(x, by - 150 * s); c.lineTo(x + 30 * s, by); c.moveTo(x - 140 * s, by); c.lineTo(x + 100 * s, by - 10 * s); });
    neonStroke(c, OR, 0.7, () => { for (let k = 1; k < 7; k++) { const u = k / 7; c.moveTo(H.lerp(x - 140 * s, x, u), H.lerp(by, by - 150 * s, u)); c.lineTo(H.lerp(x + 30 * s, x, u), H.lerp(by, by - 150 * s, u)); c.lineTo(H.lerp(x + 100 * s, x, u), H.lerp(by - 10 * s, by - 150 * s, u)); } });
    c.restore();
  }
  function temple(c, x, by, s, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, DK, 0.9, () => c.rect(x - 120 * s, by - 150 * s, 240 * s, 150 * s));
    neonStroke(c, '#f4f0ff', 1.5, () => { c.moveTo(x - 130 * s, by - 120 * s); c.lineTo(x, by - 175 * s); c.lineTo(x + 130 * s, by - 120 * s); c.closePath(); c.rect(x - 124 * s, by - 120 * s, 248 * s, 12 * s); c.rect(x - 130 * s, by - 8 * s, 260 * s, 8 * s); for (let k = 0; k < 6; k++) { const cx = x - 100 * s + k * 40 * s; c.rect(cx - 8 * s, by - 106 * s, 16 * s, 98 * s); } });
    c.restore();
  }
  // big pigeon eye close-up
  function bigEye(c, x, y, R, t, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, '#1a0a2a', 1, () => c.arc(x, y, R * 1.25, 0, 7));
    neonStroke(c, PU, 1.6, () => { c.moveTo(x + R * 1.25, y); c.arc(x, y, R * 1.25, 0, 7); });
    const g = c.createRadialGradient(x, y, R * 0.3, x, y, R); g.addColorStop(0, '#ff6a00'); g.addColorStop(0.7, '#ffb347'); g.addColorStop(1, '#ff3d7f');
    c.fillStyle = g; c.beginPath(); c.arc(x, y, R, 0, 7); c.fill();
    c.fillStyle = '#05010e'; c.beginPath(); c.arc(x, y, R * 0.42, 0, 7); c.fill();
    neonStroke(c, OR, 1.2, () => { c.moveTo(x + R, y); c.arc(x, y, R, 0, 7); });
    glint(c, x - R * 0.3, y - R * 0.35, R * 0.35, 0.9);
    c.restore();
  }
  // ================= scenes =================
  const bob = (t, a = 8, f = 1.7) => Math.sin(t * f) * a;
  function cardScene(i, n, script, bg, extra) {
    scene(i, extra ? extra.i1 : i, extra ? extra.tr : 'glitch', (c, t) => {
      bg(c, t);
      card(c, t, i, 'CHAPTER ' + n, script, extra ? PS(extra.i1) - 0.15 : PE(i) + 5);
      if (extra) extra.draw(c, t);
    });
    cardFx(i);
  }
  // fly-in helper: position from a to b eased over [t0, t1]
  const flyTo = (t, t0, t1, a, b) => { const u = E.inOut(ph(t, t0, t1)); return [H.lerp(a[0], b[0], u), H.lerp(a[1], b[1], u)]; };

  // ---- INTRO ----
  // 1. hook: a pigeon racing home down the neon highway, 600 miles on the odometer
  scene(0, 1, 'none', (c, t) => {
    bgRoad(c, t, { speed: 9 });
    const [px, py] = flyTo(t, 0.1, 1.2, [-160, 520], [600, 520]);
    pigeon(c, px, py + bob(t), 1.35, flapAt(t), {});
    const v = 600 * E.inOut(ph(t, P(0, 'six') - 0.1, P(0, 'miles') + 0.2));
    odometer(c, 640, 120, v, '', 'MI', up(t, 0.15, 0.3), 3, 58);
    neonText(c, 'MILES FROM HOME', 640, 210, F(36), YL, flick(t, P(0, 'home') - 0.1));
    slam(c, 'SAME DAY', 980, 400, 84, t, P(1, 'same') - 0.1);
  });
  fx(P(0, 'six') - 0.1, 'roll', { d: P(0, 'miles') + 0.3 - P(0, 'six'), up: 1 }); fx(P(0, 'home') - 0.1, 'strike', { minor: true }); fx(P(1, 'same') - 0.1, 'slam'); fx(0.1, 'flaps', { d: 1.2 });

  // 2. no map, no phone, no GPS
  function phoneIcon(c, x, y, s, on) { if (on <= 0) return; c.save(); c.globalAlpha *= on; neonFill(c, DK, 0.95, () => c.roundRect(x - 50 * s, y - 90 * s, 100 * s, 180 * s, 14 * s)); neonStroke(c, CY, 1.6, () => { c.roundRect(x - 50 * s, y - 90 * s, 100 * s, 180 * s, 14 * s); c.moveTo(x - 16 * s, y - 76 * s); c.lineTo(x + 16 * s, y - 76 * s); c.rect(x - 40 * s, y - 64 * s, 80 * s, 130 * s); }); neonFill(c, CY, 0.8, () => c.arc(x, y + 78 * s, 5 * s, 0, 7)); c.restore(); }
  function gpsPin(c, x, y, s, on) { if (on <= 0) return; c.save(); c.globalAlpha *= on; const sh = () => { c.moveTo(x, y + 80 * s); c.bezierCurveTo(x - 30 * s, y + 30 * s, x - 62 * s, y - 10 * s, x - 62 * s, y - 34 * s); c.arc(x, y - 34 * s, 62 * s, Math.PI, 0); c.bezierCurveTo(x + 62 * s, y - 10 * s, x + 30 * s, y + 30 * s, x, y + 80 * s); }; neonFill(c, DK, 0.95, sh); neonStroke(c, GR, 1.6, sh); neonStroke(c, GR, 1.4, () => { c.moveTo(x + 24 * s, y - 34 * s); c.arc(x, y - 34 * s, 24 * s, 0, 7); }); c.restore(); }
  scene(2, 3, 'glitch', (c, t) => {
    bgWall(c, t, { col: '79,243,255' });
    const tm = P(2, 'map'), tp = P(2, 'phone'), tg = P(2, 'gps');
    mapIcon(c, 300, 300, 1.05, up(t, tm - 0.15, 0.25)); crossOut(c, 300, 300, 110, ph(t, tm + 0.15, tm + 0.45));
    phoneIcon(c, 640, 300, 1.05, up(t, tp - 0.15, 0.25)); crossOut(c, 640, 300, 110, ph(t, tp + 0.15, tp + 0.45));
    gpsPin(c, 980, 300, 1.05, up(t, tg - 0.15, 0.25)); crossOut(c, 980, 300, 110, ph(t, tg + 0.15, tg + 0.45));
    neonText(c, 'NO MAP', 300, 460, F(36), YL, flick(t, tm - 0.1)); neonText(c, 'NO PHONE', 640, 460, F(36), YL, flick(t, tp - 0.1)); neonText(c, 'NO GPS', 980, 460, F(36), YL, flick(t, tg - 0.1));
    slam(c, 'NOBODY FULLY KNOWS HOW', 640, 620, 54, t, P(3, 'nobody') - 0.1);
  });
  fx(P(2, 'map') - 0.1, 'strike', { minor: true }); fx(P(2, 'map') + 0.15, 'wrong', { g: 0.6 }); fx(P(2, 'phone') - 0.1, 'strike', { minor: true }); fx(P(2, 'phone') + 0.15, 'wrong', { g: 0.6 }); fx(P(2, 'gps') - 0.1, 'strike', { minor: true }); fx(P(2, 'gps') + 0.15, 'wrong', { g: 0.6 }); fx(P(3, 'nobody') - 0.1, 'slam');

  // 3. title: a bird that small, crossing the sun
  scene(4, 5, 'tiltD', (c, t) => {
    bgRoad(c, t, { speed: 6, sun: ['#ffe8ff', '#ff9ee8', '#ff4fd8', '#8a3dff', '#3a0f9e'], ms: 11 });
    const [px, py] = flyTo(t, PS(4) - 0.4, P(4, 'small'), [1400, 360], [700, 380]);
    pigeon(c, px, py + bob(t), 1.5, flapAt(t), { dir: -1 });
    const out = PS(5) - 0.15;
    c.save(); c.globalAlpha *= 1 - ph(t, out, out + 0.25);
    neonText(c, 'THAT SMALL?', 640, 560, F(48), YL, flick(t, P(4, 'small') - 0.1));
    neonText(c, 'KNOW THE WAY?', 640, 640, F(48), PK, flick(t, P(4, 'way') - 0.15));
    c.restore();
    slam(c, 'THE WAY HOME', 640, 140, 88, t, P(5, 'ride') - 0.1);
    neonScript(c, "along a homing pigeon's route", 640, 600, 72, flick(t, P(5, 'route') - 0.15));
  });
  fx(PS(4) - 0.4, 'flaps', { d: 1.4 }); fx(P(4, 'small') - 0.1, 'strike', { minor: true }); fx(P(4, 'way') - 0.15, 'strike'); fx(P(5, 'ride') - 0.1, 'slam'); fx(P(5, 'route') - 0.15, 'strike');

  // ---- CHAPTER 1: an old trick ----
  cardScene(6, 1, 'an old trick', (c, t) => bgRoad(c, t, { speed: 5, sun: ['#fff0c0', '#ffd23f', '#ff8a3d', '#c4501a', '#5a1a0e'], top: '#0a0318', low: '#4a1a3e', hot: '#c4501a', edge: '#ff9a50', ms: 23 }));

  // 4. Egypt and Rome
  scene(7, 8, 'zoom', (c, t) => {
    bgRoad(c, t, { speed: 4, sun: ['#fff0c0', '#ffd23f', '#ff8a3d', '#c4501a', '#5a1a0e'], top: '#0a0318', low: '#4a1a3e', hot: '#c4501a', edge: '#ff9a50', sr: 120, sy: 330, ms: 23 });
    const te = P(7, 'egyptians'), tr = P(7, 'romans');
    c.save(); c.translate(0, (1 - E.out(ph(t, te - 0.2, te + 0.3))) * 60); pyramid(c, 270, 440, 1.3, up(t, te - 0.2, 0.3)); c.restore();
    c.save(); c.translate(0, (1 - E.out(ph(t, tr - 0.2, tr + 0.3))) * 60); temple(c, 1010, 440, 1.0, up(t, tr - 0.2, 0.3)); c.restore();
    neonText(c, 'EGYPT', 270, 500, F(40), OR, flick(t, te - 0.1));
    neonText(c, 'ROME', 1010, 500, F(40), '#f4f0ff', flick(t, tr - 0.1));
    const tp = P(7, 'pigeons') - 0.2;
    if (t > tp) { const u = ph(t, tp, PE(8) + 0.3); pigeon(c, H.lerp(-120, 1400, u), 200 + bob(t, 12), 1.1, flapAt(t), { scroll: true }); }
    neonText(c, 'MESSAGES', 640, 620, F(52), YL, flick(t, P(8, 'messages') - 0.15));
  });
  fx(P(7, 'egyptians') - 0.2, 'riser', { d: 0.5 }); fx(P(7, 'egyptians') - 0.1, 'strike', { minor: true }); fx(P(7, 'romans') - 0.1, 'strike', { minor: true }); fx(P(7, 'pigeons') - 0.2, 'flaps', { d: 2.5 }); fx(P(8, 'messages') - 0.15, 'strike');

  // 5. 44 BC
  scene(9, 9, 'glitch', (c, t) => {
    bgWall(c, t, { col: '255,179,71', top: '#0c0418', low: '#3a1430' });
    slam(c, '44 BC', 640, 250, 140, t, P(9, '44') - 0.1);
    neonText(c, 'A ROMAN GENERAL', 640, 340, F(40), CY, flick(t, P(9, 'general') - 0.1));
    const tp = P(9, 'notes') - 0.3;
    if (t > tp) { const u = ph(t, tp, PE(9) + 0.4); pigeon(c, H.lerp(1380, -140, u), 490 + bob(t, 10), 1.15, flapAt(t), { dir: -1, scroll: true }); }
    neonScript(c, 'notes by pigeon', 640, 640, 72, flick(t, P(9, 'pigeon') - 0.15));
  });
  fx(P(9, '44') - 0.1, 'big'); fx(P(9, 'general') - 0.1, 'strike', { minor: true }); fx(P(9, 'notes') - 0.3, 'flaps', { d: 1.6 }); fx(P(9, 'pigeon') - 0.15, 'strike');

  // 6. the secret: it's just finding its own home
  scene(10, 11, 'zoom', (c, t) => {
    bgWall(c, t, { col: '255,79,216' });
    const tl = P(11, 'home');
    loft(c, 640, 600, 1.6, 1, up(t, tl - 0.1, 0.3));
    slam(c, 'THE SECRET', 640, 140, 84, t, P(10, 'secret') - 0.1);
    const tp = PS(11) - 0.1, [px, py] = flyTo(t, tp, tl, [1400, 280], [760, 482]);
    const landed = t > tl;
    if (t > tp) pigeon(c, px, py + (landed ? 0 : bob(t, 6)), 0.9, landed ? -0.5 : flapAt(t, 11), { dir: -1, stand: landed });
    neonText(c, 'ITS OWN HOME', 640, 245, F(48), YL, flick(t, P(11, 'own') - 0.1));
  });
  fx(P(10, 'secret') - 0.1, 'slam'); fx(PS(11) - 0.1, 'flaps', { d: 1.4 }); fx(P(11, 'own') - 0.1, 'strike'); fx(P(11, 'home'), 'right');

  // 7. training: short flights, then farther and farther
  scene(12, 14, 'glitch', (c, t) => {
    bgMap(c, t, 5);
    const O = [640, 360];
    const rings = [[90, P(13, 'mile') - 0.1, '1 MI'], [160, P(13, 'two') - 0.1, '2 MI'], [240, P(14, 'farther') - 0.1, ''], [320, P(14, 'farther') + 0.25, ''], [400, P(14, 'and') + 0.1, '']];
    rings.forEach(([R, t0, lab], k) => {
      const p = E.out(ph(t, t0, t0 + 0.4)); if (p <= 0) return;
      c.save(); c.setLineDash([10, 9]); neonStroke(c, k < 2 ? CY : PU, 1.2, () => c.arc(O[0], O[1], R * p, 0, 7)); c.restore();
      if (lab) neonText(c, lab, O[0] + R * 0.72, O[1] - R * 0.72, F(30), CY, flick(t, t0 + 0.1));
      // a young bird released on the ring flies home along a ray
      const a = -2.2 + k * 1.35, tt = ((t - t0) % 2.2) / 2.2;
      if (t > t0 + 0.3) { const u = E.inOut(tt), x = O[0] + Math.cos(a) * R * (1 - u), y = O[1] + Math.sin(a) * R * (1 - u); pigeonIcon(c, x, y, a + Math.PI, 1, LV, t); }
    });
    { const a = t * 1.6; pigeonIcon(c, O[0] + Math.cos(a) * 70, O[1] - 20 + Math.sin(a) * 30, a + Math.PI / 2, 1, YL, t); }
    loftIcon(c, O[0], O[1], 1.1, 1, 'LOFT');
    const tY = P(12, 'young') - 0.1, tF = PS(14) - 0.1;
    c.save(); c.globalAlpha *= 1 - ph(t, tF, tF + 0.2); neonText(c, 'START THEM YOUNG', 640, 665, F(44), YL, flick(t, tY)); c.restore();
    neonText(c, 'FARTHER AND FARTHER', 640, 665, F(44), PK, flick(t, tF + 0.1));
  });
  fx(P(12, 'young') - 0.1, 'strike'); fx(P(13, 'mile') - 0.1, 'blip'); fx(P(13, 'two') - 0.1, 'blip', { f: 'G6' }); fx(P(14, 'farther') - 0.1, 'ticks', { n: 3, d: 0.8 }); fx(PS(14), 'strike', { minor: true });

  // 8. two tools: compass + map
  scene(15, 17, 'tiltU', (c, t) => {
    bgSky(c, t, 31);
    horizonLine(c, 700);
    slam(c, 'TWO TOOLS', 640, 150, 84, t, P(15, 'two') - 0.1);
    const tc = P(16, 'compass') - 0.15, tm = P(17, 'map') - 0.15;
    compass(c, 370, 390, 120, Math.sin(t * 2.2) * 0.25 * (1 - ph(t, tc, tc + 1.5)), up(t, tc, 0.3));
    neonText(c, 'COMPASS', 370, 560, F(44), CY, flick(t, tc)); neonText(c, 'WHICH WAY IS WHICH', 370, 615, F(28), LV, flick(t, P(16, 'which') - 0.1));
    mapIcon(c, 910, 390, 1.15, up(t, tm, 0.3));
    neonText(c, 'MAP', 910, 560, F(44), YL, flick(t, tm)); neonText(c, 'WHERE HOME IS', 910, 615, F(28), LV, flick(t, P(17, 'home') - 0.1));
  });
  fx(P(15, 'two') - 0.1, 'slam'); fx(P(16, 'compass') - 0.15, 'strike'); fx(P(17, 'map') - 0.15, 'strike'); fx(P(16, 'which') - 0.1, 'blip', { minor: true }); fx(P(17, 'home') - 0.1, 'blip', { minor: true });

  // ---- CHAPTER 2: the compass ----
  cardScene(18, 2, 'the compass', (c, t) => { bgSky(c, t, 44, '#c4501a'); compass(c, 640, 560, 110, t * 0.4, 0.35); });

  // 9. the sun moves 15 degrees an hour
  const SUNO = [640, 610], SUNR = 420;
  scene(19, 21, 'tiltU', (c, t) => {
    bgSky(c, t, 52, '#ff4fa0');
    // horizon floor strip
    c.fillStyle = '#12041f'; c.fillRect(0, SUNO[1], W, HH - SUNO[1]); horizonLine(c, SUNO[1]);
    const a0 = 125 * Math.PI / 180, a1 = 110 * Math.PI / 180, tm = P(20, 'moves') - 0.1, th = P(20, 'hour');
    const a = H.lerp(a0, a1, E.inOut(ph(t, tm, th)));
    // dotted sun path with hour ticks
    c.save(); c.setLineDash([4, 12]); neonStroke(c, YL, 0.9, () => c.arc(SUNO[0], SUNO[1], SUNR, Math.PI, 0)); c.restore();
    neonStroke(c, YL, 1, () => { for (let k = 1; k < 12; k++) { const aa = Math.PI - k * Math.PI / 12; c.moveTo(SUNO[0] + Math.cos(aa) * (SUNR - 10), SUNO[1] - Math.sin(aa) * (SUNR - 10)); c.lineTo(SUNO[0] + Math.cos(aa) * (SUNR + 10), SUNO[1] - Math.sin(aa) * (SUNR + 10)); } });
    if (t > tm) { // wedge between the two sun positions
      const w = ph(t, tm, th);
      neonStroke(c, PK, 1.3, () => { c.moveTo(SUNO[0] + Math.cos(a0) * SUNR, SUNO[1] - Math.sin(a0) * SUNR); c.lineTo(...SUNO); c.lineTo(SUNO[0] + Math.cos(a) * SUNR, SUNO[1] - Math.sin(a) * SUNR); });
      neonStroke(c, PK, 1.3, () => c.arc(SUNO[0], SUNO[1], 140, -a0, -H.lerp(a0, a1, w) , false));
    }
    sun(c, SUNO[0] + Math.cos(a) * SUNR, SUNO[1] - Math.sin(a) * SUNR, 54, t);
    slam(c, '15°', 400, 470, 72, t, P(20, 'fifteen') - 0.1);
    neonText(c, 'EVERY HOUR', 400, 535, F(32), PK, flick(t, P(20, 'hour') - 0.1));
    pigeon(c, 1000, 520 + bob(t, 6), 0.95, flapAt(t), { dir: -1 });
    neonText(c, 'STEERS BY THE SUN', 640, 668, F(36), YL, flick(t, P(19, 'steers') - 0.1));
    const tc = P(21, 'time') - 0.3;
    clockFace(c, 1060, 200, 78, 9 + (t - PS(21)) * 0.6, up(t, tc, 0.3), CY);
    neonText(c, 'WHAT TIME IS IT?', 1060, 320, F(30), CY, flick(t, tc + 0.1));
  });
  fx(P(19, 'steers') - 0.1, 'strike'); fx(P(20, 'moves') - 0.1, 'sweep', { up: 1 }); fx(P(20, 'fifteen') - 0.1, 'slam'); fx(P(20, 'hour') - 0.1, 'strike', { minor: true }); fx(P(21, 'time') - 0.3, 'ticks', { n: 6, d: 1.2 }); fx(P(21, 'time') - 0.2, 'strike', { minor: true });

  // 10. Keeton's trick: lamps six hours off
  function cage(c, x, by, s, open = 0) {
    neonFill(c, 'rgba(8,2,24,0.6)', 1, () => c.rect(x - 130 * s, by - 180 * s, 260 * s, 180 * s));
    neonStroke(c, LV, 1.2, () => { c.rect(x - 130 * s, by - 180 * s, 260 * s, 180 * s); for (let k = 1; k < 8; k++) { if (open > 0 && k >= 6) continue; const xx = x - 130 * s + k * 260 * s / 8; c.moveTo(xx, by - 180 * s); c.lineTo(xx, by); } });
  }
  scene(22, 24, 'glitch', (c, t) => {
    bgWall(c, t, { col: '185,162,255' });
    const t23 = PS(23) - 0.1, t24 = PS(24) - 0.1;
    neonText(c, 'WILLIAM KEETON', 640, 120, F(48), CY, flick(t, P(22, 'william') - 0.1) * (1 - ph(t, t23, t23 + 0.2)));
    neonScript(c, 'a sneaky trick', 640, 205, 76, flick(t, P(22, 'sneaky') - 0.1) * (1 - ph(t, t23, t23 + 0.2)));
    // the lab: lamp over a cage
    const labOn = up(t, PS(22) + 0.4, 0.4);
    c.save(); c.globalAlpha *= labOn;
    const lampOn = flick(t, P(23, 'lamps') - 0.1);
    if (lampOn > 0) { c.save(); c.globalCompositeOperation = 'lighter'; const g = c.createLinearGradient(0, 300, 0, 580); g.addColorStop(0, `rgba(255,224,102,${0.35 * lampOn})`); g.addColorStop(1, 'rgba(255,224,102,0)'); c.fillStyle = g; c.beginPath(); c.moveTo(370, 300); c.lineTo(450, 300); c.lineTo(560, 580); c.lineTo(260, 580); c.fill(); c.restore(); }
    neonStroke(c, YL, 1.4, () => { c.moveTo(410, 240); c.lineTo(410, 280); c.moveTo(360, 305); c.quadraticCurveTo(410, 250, 460, 305); c.closePath(); });
    cage(c, 410, 580, 1, ph(t, t24, t24 + 0.3));
    const fly = ph(t, t24 + 0.2, PE(24));
    if (fly <= 0) pigeon(c, 410, 528, 0.8, -0.5, { stand: true });
    else pigeon(c, H.lerp(440, 1100, E.in(fly)), H.lerp(528, 200, E.in(fly)) + bob(t, 6), 0.8, flapAt(t, 12));
    c.restore();
    // two clocks: the real one and the lamp one, six hours apart
    const tc = P(23, 'six') - 0.3;
    clockFace(c, 870, 330, 80, 12 + (t - t23) * 0.15, up(t, t23, 0.3), CY, 'REAL TIME');
    clockFace(c, 1090, 330, 80, 6 + (t - t23) * 0.15, up(t, tc, 0.3), YL, 'LAMP TIME');
    slam(c, '6 HOURS OFF', 980, 540, 58, t, P(23, 'hours') - 0.1, t24 + 0.6);
    // sunny day release
    if (t > t24) { sun(c, 1100, 130, 60, t); neonText(c, 'SUNNY DAY', 640, 665, F(40), YL, flick(t, P(24, 'sunny') - 0.1)); }
  });
  fx(P(22, 'william') - 0.1, 'strike'); fx(P(22, 'sneaky') - 0.1, 'strike', { minor: true }); fx(P(23, 'lamps') - 0.1, 'hummer', { d: 3 }); fx(P(23, 'hours') - 0.1, 'slam'); fx(PS(24), 'clack'); fx(PS(24) + 0.2, 'flaps', { d: 1.5 }); fx(P(24, 'sunny') - 0.1, 'strike', { minor: true });

  // 11. home was west, they flew north: 90 degrees off
  scene(25, 29, 'glitch', (c, t) => {
    bgMap(c, t, 9);
    const R = [780, 430], HOME = [200, 430], NOR = [780, 110];
    compass(c, 1160, 130, 70, 0, 1);
    loftIcon(c, HOME[0], HOME[1], 1.2, 1, 'HOME');
    neonFill(c, YL, 0.9, () => c.arc(R[0], R[1], 9, 0, 7)); neonStroke(c, YL, 1.2, () => { c.moveTo(R[0] + 20, R[1]); c.arc(R[0], R[1], 20, 0, 7); });
    neonText(c, 'RELEASE', R[0] + 30, R[1] + 46, F(28), YL, 1, 'left');
    const tw = P(25, 'west') - 0.2, tn = P(26, 'north') - 0.3;
    trail(c, [R, [HOME[0] + 50, HOME[1]]], E.inOut(ph(t, tw, tw + 0.6)), GR, 1.6);
    neonText(c, 'HOME IS WEST', 470, 395, F(32), GR, flick(t, tw + 0.2));
    // the clock-shifted birds head north
    const pn = ph(t, tn - 0.3, PE(26) + 0.6);
    trail(c, [R, NOR], E.out(pn), RD, 2);
    for (let k = 0; k < 3; k++) { const u = cl(pn * 1.1 - k * 0.12); if (u > 0 && u < 1) pigeonIcon(c, R[0] + (k - 1) * 24, H.lerp(R[1], NOR[1] + 20, E.out(u)), -Math.PI / 2, 1, LV, t + k); }
    neonText(c, 'FLEW NORTH', 830, 160, F(36), RD, flick(t, tn + 0.2), 'left');
    // 90 degree arc
    const ta = P(27, 'ninety') - 0.2, pa = E.out(ph(t, ta, ta + 0.4));
    if (pa > 0) neonStroke(c, PK, 2.2, () => c.arc(R[0], R[1], 130, Math.PI, Math.PI + pa * Math.PI / 2));
    slam(c, '90°', 640, 300, 96, t, P(27, 'ninety') - 0.1);
    const t28 = P(28, 'mistake') - 0.3, t29 = P(29, 'compass') - 0.15;
    c.save(); c.globalAlpha *= 1 - ph(t, t29 - 0.25, t29); neonText(c, '6 HOURS = 90°', 640, 640, F(48), YL, flick(t, t28)); c.restore();
    slam(c, 'SUN = COMPASS', 640, 665, 64, t, t29);
  });
  fx(P(25, 'west') - 0.2, 'zap', { d: 0.5, f0: 900, f1: 300 }); fx(P(26, 'north') - 0.3, 'flaps', { d: 1.2 }); fx(P(26, 'north'), 'wrong'); fx(P(27, 'ninety') - 0.1, 'big'); fx(P(28, 'mistake') - 0.3, 'strike'); fx(P(29, 'compass') - 0.15, 'slam');
  // ---- CHAPTER 3: cloudy days ----
  const cloudyRoad = (c, t) => bgRoad(c, t, { speed: 6, sky: (c2, tt) => { sun(c2, 640, 352, 150, tt, ['#d8d0ff', '#a090e0', '#7060b0', '#503a8e', '#2a1a5e']); cloud(c2, 500, 300, 1.6, 1); cloud(c2, 820, 340, 1.8, 1); cloud(c2, 220, 220, 1.1, 1); cloud(c2, 1080, 200, 1.2, 1); }, top: '#07051a', mid: '#1a1438', low: '#332a5e', hot: '#5a4a8e', edge: '#8a7ac0', ms: 31 });
  cardScene(30, 3, 'cloudy days', cloudyRoad, { i1: 31, tr: 'glitch', draw: (c, t) => {
    const t31 = PS(31) - 0.2; if (t < t31) return;
    const [px, py] = flyTo(t, t31, PE(31), [-150, 470], [640, 470]);
    pigeon(c, px, py + bob(t), 1.25, flapAt(t), {});
    neonText(c, 'STILL GET HOME', 640, 630, F(52), GR, flick(t, P(31, 'home') - 0.15));
    check(c, 930, 620, 28, ph(t, P(31, 'home'), P(31, 'home') + 0.3));
  } });
  fx(PS(31) - 0.2, 'flaps', { d: 1.3 }); fx(P(31, 'home') - 0.15, 'strike'); fx(P(31, 'home'), 'right');

  // 12. magnets on their backs: fine in sun, lost under clouds
  scene(32, 34, 'glitch', (c, t) => {
    bgWall(c, t, { col: '255,61,90', top: '#08021a', low: '#200a36' });
    const tS = PS(33) - 0.2, split = E.inOut(ph(t, tS, tS + 0.4));
    if (split < 1) { // one big pigeon wearing a magnet
      c.save(); c.globalAlpha *= 1 - split;
      pigeon(c, 640, 380 + bob(t, 5), 2.0, flapAt(t, 6) * 0.4, { magnet: true });
      neonText(c, 'TINY MAGNETS', 640, 610, F(52), RD, flick(t, P(32, 'magnets') - 0.1));
      c.restore();
    }
    if (split > 0) {
      c.save(); c.globalAlpha *= split;
      neonStroke(c, LV, 1.2, () => { c.moveTo(640, 80); c.lineTo(640, 600); });
      // sunny half
      sun(c, 320, 170, 64, t);
      loftIcon(c, 110, 420, 0.9, 1, '');
      const u = E.inOut(ph(t, tS + 0.3, PE(33)));
      trail(c, [[540, 420], [160, 420]], u, GR, 1.6);
      pigeonIcon(c, H.lerp(540, 170, u), 420, Math.PI, 1.3, LV, t);
      neonText(c, 'SUNNY', 320, 290, F(40), YL, 1);
      check(c, 320, 520, 30, ph(t, P(33, 'nothing') - 0.1, P(33, 'nothing') + 0.3));
      neonText(c, 'MAGNETS: NO EFFECT', 320, 640, F(30), GR, flick(t, P(33, 'nothing') - 0.1));
      // cloudy half
      cloud(c, 900, 180, 1.0, 1); cloud(c, 1080, 150, 0.8, 1);
      neonText(c, 'CLOUDY', 960, 290, F(40), LV, 1);
      const tc = PS(34) - 0.1;
      if (t > tc) { const w = (t - tc) * 2.4, r = 70 + Math.sin(w * 0.7) * 30; const x = 960 + Math.cos(w) * r * 1.4, y = 430 + Math.sin(w) * r * 0.7; pigeonIcon(c, x, y, w + Math.PI / 2, 1.3, LV, t); c.save(); c.setLineDash([6, 8]); neonStroke(c, PU, 0.9, () => { for (let k = 0; k <= 40; k++) { const ww = w - k * 0.08, rr = 70 + Math.sin(ww * 0.7) * 30; const xx = 960 + Math.cos(ww) * rr * 1.4, yy = 430 + Math.sin(ww) * rr * 0.7; k ? c.lineTo(xx, yy) : c.moveTo(xx, yy); } }); c.restore(); }
      crossOut(c, 960, 520, 26, ph(t, P(34, 'lost') - 0.1, P(34, 'lost') + 0.3));
      neonText(c, 'GOT LOST', 960, 640, F(36), RD, flick(t, P(34, 'lost') - 0.1));
      c.restore();
    }
  });
  fx(P(32, 'magnets') - 0.1, 'strike'); fx(PS(33) - 0.2, 'whoosh'); fx(P(33, 'nothing') - 0.1, 'right'); fx(PS(34), 'whirl', { d: 1.6 }); fx(P(34, 'lost') - 0.1, 'wrong');

  // 13. the backup: Earth's magnetic field
  scene(35, 36, 'tiltU', (c, t) => {
    bgSky(c, t, 66, '#1a3a8a');
    const tg = PS(35) - 0.2;
    fieldLines(c, 640, 400, 150, t, up(t, P(36, 'magnetic') - 0.3, 0.6));
    globe(c, 640, 400, 150, t * 0.8, up(t, tg, 0.4));
    neonText(c, 'N', 640, 222, F(30), RD, up(t, tg + 0.3, 0.3)); neonText(c, 'S', 640, 580, F(30), '#5aa8ff', up(t, tg + 0.3, 0.3));
    slam(c, 'BACKUP', 640, 140, 84, t, P(35, 'backup') - 0.1);
    neonText(c, "EARTH'S MAGNETIC FIELD", 640, 662, F(44), PK, flick(t, P(36, 'magnetic') - 0.1));
    const pt = PS(35) + 0.2; if (t > pt) { const a = (t - pt) * 0.9; pigeonIcon(c, 640 + Math.cos(a) * 230, 400 + Math.sin(a) * 90, a + Math.PI / 2, 1.2, YL, t); }
  });
  fx(P(35, 'backup') - 0.1, 'slam'); fx(P(36, 'magnetic') - 0.3, 'sweep', { up: 1 }); fx(P(36, 'magnetic') - 0.1, 'strike');

  // 14. a compass is useless without a map
  scene(37, 38, 'glitch', (c, t) => {
    bgWall(c, t, { col: '79,243,255' });
    const tu = P(38, 'useless') - 0.1, spin = ph(t, tu, PE(38));
    compass(c, 640, 330, 160, Math.sin(t * 1.5) * 0.15 + spin * spin * 14, 1);
    check(c, 870, 220, 30, ph(t, P(37, 'great') - 0.1, P(37, 'great') + 0.25));
    neonText(c, 'COMPASS', 640, 560, F(44), CY, flick(t, P(37, 'compass') - 0.1) * (1 - ph(t, tu, tu + 0.2)));
    neonText(c, 'HOME?', 1010, 360, F(64), YL, flick(t, P(38, 'home') - 0.15));
    slam(c, 'USELESS', 640, 590, 64, t, tu);
  });
  fx(P(37, 'compass') - 0.1, 'strike', { minor: true }); fx(P(37, 'great') - 0.1, 'right'); fx(P(38, 'useless') - 0.1, 'slam'); fx(P(38, 'useless'), 'whirl', { d: 1.4 }); fx(P(38, 'home') - 0.15, 'strike');

  // ---- CHAPTER 4: the map ----
  cardScene(39, 4, 'the map', (c, t) => { bgMap(c, t, 17, '255,224,102'); });

  // 15. the map is up its nose
  scene(40, 42, 'zoom', (c, t) => {
    bgWall(c, t, { col: '92,255,176', top: '#04140f', low: '#0a2a2a' });
    // head close-up: head (local 46,-30) at about (640, 380)
    pigeon(c, 456, 500, 4, -0.4, {});
    const NOSE = [702, 368], tc = P(41, 'cant') - 0.1;
    const sOn = 1 - 0.75 * ph(t, tc, tc + 0.3);
    scent(c, 1260, 200, NOSE[0] + 20, NOSE[1] - 8, t, GR, 3, up(t, PS(40) + 0.2, 0.4) * sOn);
    scent(c, 1260, 420, NOSE[0] + 20, NOSE[1] + 4, t + 0.4, YL, 2, up(t, PS(40) + 0.5, 0.4) * sOn);
    neonStroke(c, GR, 1.4, () => { c.moveTo(NOSE[0] + 22, NOSE[1] - 2); c.arc(NOSE[0], NOSE[1] - 2, 22, 0, 7); });
    slam(c, 'UP ITS NOSE', 640, 130, 80, t, P(40, 'nose') - 0.15);
    crossOut(c, 1000, 330, 50, ph(t, tc, tc + 0.3));
    neonText(c, "CAN'T SMELL", 1000, 470, F(40), RD, flick(t, tc));
    slam(c, 'LOST', 1000, 590, 80, t, P(42, 'lost') - 0.1);
  });
  fx(PS(40) + 0.2, 'fizz', { d: 0.8 }); fx(P(40, 'nose') - 0.15, 'slam'); fx(P(41, 'cant') - 0.1, 'wrong'); fx(P(42, 'lost') - 0.1, 'slam');

  // 16. every region smells different; the wind carries it
  const REG = [['forest', 300, 220, 'FOREST'], ['sea', 980, 220, 'SEA'], ['city', 980, 520, 'CITY'], ['farm', 300, 520, 'FARMS']];
  scene(43, 44, 'glitch', (c, t) => {
    bgMap(c, t, 13, '92,255,176');
    const t0 = P(43, 'region') - 0.2, t1 = P(43, 'smells');
    REG.forEach(([k, x, y, lab], i) => { const tt = H.lerp(t0, t1, i / 3); regionIcon(c, k, x, y, 1.3, up(t, tt, 0.3)); neonText(c, lab, x, y + 78, F(30), [GR, '#5aa8ff', PK, YL][i], flick(t, tt + 0.05)); });
    neonText(c, 'EVERY REGION SMELLS DIFFERENT', 640, 62, F(36), YL, flick(t, P(43, 'mix') - 0.2) * (1 - ph(t, PS(44) - 0.2, PS(44))));
    const tw = P(44, 'wind') - 0.3;
    wind(c, 640, 370, 160, 0.15, t, up(t, tw, 0.4));
    REG.forEach(([k, x, y], i) => scent(c, x, y, 640, 370, t + i * 0.3, [GR, '#5aa8ff', PK, YL][i], 2, up(t, PS(44), 0.4)));
    neonText(c, 'CARRIED BY THE WIND', 640, 670, F(44), CY, flick(t, tw + 0.1));
  });
  fx(P(43, 'region') - 0.2, 'ticks', { n: 4, d: 1.2 }); fx(P(43, 'mix') - 0.2, 'strike', { minor: true }); fx(P(44, 'wind') - 0.3, 'whoosh', { d: 0.8 }); fx(P(44, 'wind') - 0.2, 'strike');

  // 17. the young bird learns the smells at home; smell the forest -> home is that way
  scene(45, 47, 'zoom', (c, t) => {
    bgMap(c, t, 13, '92,255,176');
    const t47 = PS(47) - 0.2, mv = E.inOut(ph(t, t47, t47 + 0.5));
    c.save(); c.translate(-mv * 360, 0);
    loftIcon(c, 640, 380, 1.6, 1, '');
    neonText(c, 'LOFT', 640, 452, F(30), PK, 1);
    c.globalAlpha *= 1 - mv;
    pigeonIcon(c, 640, 300, -Math.PI / 2, 1.1, LV, 0);
    const tl = P(46, 'learns') - 0.2;
    scent(c, 140, 380, 600, 380, t, GR, 3, up(t, tl, 0.4)); neonText(c, 'FOREST', 160, 320, F(32), GR, flick(t, tl));
    scent(c, 1140, 380, 680, 380, t + 0.5, '#5aa8ff', 3, up(t, tl + 0.4, 0.4)); neonText(c, 'SEA', 1120, 320, F(32), '#5aa8ff', flick(t, tl + 0.4));
    scent(c, 640, 690, 640, 430, t + 0.2, YL, 2, up(t, tl + 0.8, 0.4)); neonText(c, 'FARMS', 760, 640, F(30), YL, flick(t, tl + 0.8));
    c.restore();
    neonText(c, 'A YOUNG PIGEON LEARNS', 640, 70, F(36), YL, flick(t, P(45, 'young') - 0.1) * (1 - mv));
    if (mv > 0) { // released far away: a whiff of forest says home is that way
      pigeonIcon(c, 980, 360, Math.PI, 2.2, LV, t);
      scent(c, 1270, 300, 1010, 355, t, GR, 3, mv);
      neonArrow(c, [[930, 360], [400, 380]], ph(t, P(47, 'home') - 0.2, P(47, 'home') + 0.4), PK, 3);
      neonText(c, 'SMELLS FOREST', 1060, 470, F(32), GR, flick(t, P(47, 'forest') - 0.15));
      slam(c, 'HOME IS THAT WAY', 640, 640, 60, t, P(47, 'way') - 0.15);
    }
  });
  fx(P(45, 'young') - 0.1, 'strike', { minor: true }); fx(P(46, 'learns') - 0.2, 'fizz', { d: 1.2 }); fx(PS(47) - 0.2, 'whoosh'); fx(P(47, 'forest') - 0.15, 'strike', { minor: true }); fx(P(47, 'home') - 0.2, 'zap', { d: 0.5 }); fx(P(47, 'way') - 0.15, 'slam');

  // 18. maybe super-low sounds too (still being tested)
  scene(48, 50, 'glitch', (c, t) => {
    bgScope(c, t);
    const tw = P(48, 'hear') - 0.2;
    sineTrace(c, 110, 1170, 360, 130, 1.6, -t * 1.4, E.inOut(ph(t, tw, tw + 1.2)), YL, 2.6);
    sineTrace(c, 110, 1170, 360, 60, 1.6, -t * 1.4 + 1, E.inOut(ph(t, tw + 0.3, tw + 1.5)), PK, 1.2);
    neonText(c, 'SUPER-LOW SOUNDS', 640, 130, F(52), CY, flick(t, P(49, 'superlow') - 0.1));
    neonText(c, 'TRAVEL FOR MILES', 640, 590, F(36), YL, flick(t, P(49, 'miles') - 0.1) * (1 - ph(t, PS(50) - 0.2, PS(50))));
    slam(c, 'STILL BEING TESTED', 640, 610, 54, t, P(50, 'tested') - 0.3);
  });
  fx(P(48, 'hear') - 0.2, 'trace', { d: 1.6 }); fx(P(49, 'superlow') - 0.1, 'strike'); fx(P(49, 'miles') - 0.1, 'strike', { minor: true }); fx(P(50, 'tested') - 0.3, 'stab', { notes: ['D4', 'G4', 'Bb4'] });

  // ---- CHAPTER 5: the last miles ----
  cardScene(51, 5, 'the last miles', (c, t) => bgRoad(c, t, { speed: 8, ms: 41 }), { i1: 52, tr: 'glitch', draw: (c, t) => {
    const te = PS(52) - 0.15; if (t < te) return;
    const p = E.out(ph(t, te, te + 0.5));
    c.save(); c.fillStyle = `rgba(5,1,20,${0.55 * p})`; c.fillRect(0, 0, W, HH); c.restore();
    bigEye(c, 640, 360, 150 * p, t, p);
    neonText(c, 'CLOSE TO HOME', 640, 90, F(44), YL, flick(t, P(52, 'close') - 0.1));
    neonText(c, 'SWITCH TO EYES', 640, 640, F(48), OR, flick(t, P(52, 'eyes') - 0.15));
  } });
  fx(PS(52) - 0.15, 'whoosh'); fx(P(52, 'close') - 0.1, 'strike', { minor: true }); fx(P(52, 'eyes') - 0.15, 'strike');

  // 19. Oxford: GPS trackers
  scene(53, 53, 'glitch', (c, t) => {
    bgWall(c, t, { col: '92,255,176', top: '#030f12', low: '#0a2a26' });
    pigeon(c, 640, 400 + bob(t, 6), 2.2, flapAt(t, 5) * 0.3, { tracker: true, t });
    neonText(c, 'OXFORD SCIENTISTS', 640, 110, F(44), CY, flick(t, P(53, 'oxford') - 0.1));
    slam(c, 'GPS TRACKERS', 640, 640, 70, t, P(53, 'gps') - 0.1);
  });
  fx(P(53, 'oxford') - 0.1, 'strike'); fx(P(53, 'gps') - 0.1, 'slam'); fx(P(53, 'trackers'), 'ticks', { n: 4, d: 0.6 });

  // 20. they follow the roads: highway, traffic lights, roundabout
  const RA = [960, 380], RR = 58;
  const ROUTE = (() => { const p = [[40, 680], [560, 380], [RA[0] - RR, RA[1]]]; for (let k = 0; k <= 12; k++) { const a = Math.PI + k / 12 * Math.PI * 0.5 * 1.0; p.push([RA[0] + Math.cos(a) * RR, RA[1] + Math.sin(a) * RR]); } p.push([RA[0], 70]); return p; })();
  function roads(c) {
    const road = (draw, w) => { c.save(); c.strokeStyle = '#1a0a30'; c.lineWidth = w; c.lineCap = 'round'; c.beginPath(); draw(); c.stroke(); c.restore(); neonStroke(c, LV, 0.9, draw); };
    road(() => { c.moveTo(-20, 715); c.lineTo(560, 380); }, 44);
    road(() => { c.moveTo(560, 380); c.lineTo(RA[0] - RR, RA[1]); c.moveTo(RA[0] + RR, RA[1]); c.lineTo(1300, RA[1]); }, 30);
    road(() => { c.moveTo(560, 380); c.lineTo(560, 760); c.moveTo(560, 380); c.lineTo(420, 0); c.moveTo(RA[0], RA[1] - RR); c.lineTo(RA[0], 0); c.moveTo(RA[0], RA[1] + RR); c.lineTo(RA[0], 760); }, 30);
    c.save(); c.strokeStyle = '#1a0a30'; c.lineWidth = 26; c.beginPath(); c.arc(RA[0], RA[1], RR, 0, 7); c.stroke(); c.restore();
    neonStroke(c, LV, 0.9, () => { c.moveTo(RA[0] + RR + 13, RA[1]); c.arc(RA[0], RA[1], RR + 13, 0, 7); c.moveTo(RA[0] + RR - 13, RA[1]); c.arc(RA[0], RA[1], RR - 13, 0, 7); });
    c.save(); c.setLineDash([12, 12]); neonStroke(c, 'rgba(255,240,200,0.6)', 0.6, () => { c.moveTo(-20, 715); c.lineTo(560, 380); }); c.restore();
  }
  scene(54, 58, 'zoom', (c, t) => {
    bgMap(c, t, 21, '185,162,255');
    roads(c);
    loftIcon(c, 1110, 110, 1, 1, 'HOME');
    // the straight line it could have flown (ghost)
    c.save(); c.globalAlpha *= 0.5 * up(t, P(58, 'easier') - 0.2, 0.4); c.setLineDash([4, 10]); neonStroke(c, PU, 1, () => { c.moveTo(40, 680); c.lineTo(1090, 130); }); c.restore();
    // progress keyed to the words: highway, turn at the lights, round the roundabout, north home
    const ks = [[PS(54), 0], [PE(55), 0.42], [P(56, 'traffic') + 0.2, 0.58], [PE(57), 0.78], [PE(58), 1]];
    let u = 0; for (let i = 0; i < ks.length - 1; i++) if (t >= ks[i][0]) u = H.lerp(ks[i][1], ks[i + 1][1], E.inOut(ph(t, ks[i][0], ks[i + 1][0])));
    trail(c, ROUTE, u, GR, 2.2, false);
    const [px, py, pa] = pointAlong(ROUTE, u); pigeonIcon(c, px, py, pa, 1.3, YL, t);
    trafficLight(c, 600, 310, 1, t > P(56, 'turned') ? 'green' : 'red', up(t, P(56, 'traffic') - 0.4, 0.3));
    slam(c, 'FOLLOWED THE ROADS', 640, 110, 58, t, P(54, 'roads') - 0.15, PS(55) + 0.3);
    neonText(c, 'HIGHWAY', 250, 470, F(32), CY, flick(t, P(55, 'highway') - 0.15));
    neonText(c, 'TRAFFIC LIGHTS', 600, 230, F(30), RD, flick(t, P(56, 'traffic') - 0.1));
    neonText(c, 'ROUNDABOUT', 960, 490, F(32), PK, flick(t, P(57, 'roundabout') - 0.15));
    neonScript(c, 'just follow the road', 330, 640, 72, flick(t, P(58, 'follow') - 0.15));
  });
  fx(P(54, 'roads') - 0.15, 'slam'); fx(P(55, 'highway') - 0.15, 'strike', { minor: true }); fx(PS(55), 'whoosh', { d: 1.2 }); fx(P(56, 'traffic') - 0.1, 'blip', { f: 'C6' }); fx(P(56, 'turned'), 'blip', { f: 'G6' }); fx(P(57, 'roundabout') - 0.15, 'whirl', { d: 1.0 }); fx(P(58, 'follow') - 0.15, 'take');

  // ---- CHAPTER 6: the numbers ----
  cardScene(59, 6, 'the numbers', (c, t) => bgRoad(c, t, { speed: 14, sun: ['#ffffff', '#9ff6ff', '#4ff3ff', '#ff4fd8', '#d4147f'], ms: 51 }));

  // 21. fifty mph, ninety with a tailwind
  scene(60, 61, 'tiltD', (c, t) => {
    const tw = P(61, 'tailwind') - 0.2, fast = ph(t, tw, tw + 0.6);
    bgRoad(c, t, { speed: 14 + fast * 16, sun: ['#ffffff', '#9ff6ff', '#4ff3ff', '#ff4fd8', '#d4147f'], ms: 51 });
    pigeon(c, 640 + fast * 80, 500 + bob(t, 5, 3), 1.3, flapAt(t, 12 + fast * 6), {});
    if (fast > 0) for (let k = 0; k < 4; k++) wind(c, 300 + k * 60, 420 + k * 50, 180, 0, t + k * 0.3, fast, CY);
    let v = 50 * E.inOut(ph(t, P(60, 'averages') - 0.2, P(60, 'fifty') + 0.2));
    if (t > tw) v = 50 + 40 * E.inOut(ph(t, P(61, 'hit'), P(61, 'ninety') + 0.2));
    odometer(c, 640, 130, v, '', 'MPH', up(t, PS(60) - 0.1, 0.3), 2, 64);
    neonText(c, 'AVERAGE', 640, 650, F(36), YL, flick(t, P(60, 'averages') - 0.1) * (1 - ph(t, tw, tw + 0.2)));
    neonText(c, 'WITH A TAILWIND', 640, 650, F(36), CY, flick(t, tw + 0.15));
  });
  fx(P(60, 'averages') - 0.2, 'roll', { d: P(60, 'fifty') + 0.4 - P(60, 'averages'), up: 1 }); fx(P(60, 'fifty') + 0.2, 'stab'); fx(P(61, 'tailwind') - 0.2, 'whoosh', { d: 0.8 }); fx(P(61, 'hit'), 'roll', { d: P(61, 'ninety') + 0.2 - P(61, 'hit'), up: 1 }); fx(P(61, 'ninety') + 0.2, 'big');

  // 22. 600-mile races, 1,000+ miles
  scene(62, 63, 'tiltU', (c, t) => {
    bgSky(c, t, 88);
    const gx0 = 260, gx1 = 1040, gy = 560;
    neonStroke(c, CY, 1.6, () => { c.moveTo(gx0, 120); c.lineTo(gx0, gy); c.lineTo(gx1 + 20, gy); });
    const bar = (x, frac, col, t0, lab, sub) => {
      const p = E.out(ph(t, t0, t0 + 0.7)), h = 400 * frac * p;
      if (p <= 0) return;
      neonFill(c, H.rgba(col, 0.25), 1, () => c.rect(x - 90, gy - h, 180, h));
      neonStroke(c, col, 2, () => c.rect(x - 90, gy - h, 180, h));
      slam(c, lab, x, gy - h - 30, 60, t, t0 + 0.6);
      neonText(c, sub, x, gy + 40, F(30), col, flick(t, t0 + 0.2));
    };
    bar(480, 0.55, PK, P(62, 'six') - 0.2, '600 MI', 'BIG RACES');
    bar(820, 0.95, YL, P(63, 'thousand') - 0.4, '1,000+ MI', 'LONGEST');
    neonText(c, 'MILES', gx0 - 20, 100, F(28), CY, 1, 'left');
  });
  fx(P(62, 'six') - 0.2, 'riser', { d: 0.7 }); fx(P(62, 'six') + 0.4, 'slam'); fx(P(63, 'thousand') - 0.4, 'riser', { d: 0.7 }); fx(P(63, 'thousand') + 0.2, 'big');

  // 23. recap: four neon tubes
  const REC = [[64, 'sun', 'SUN', 'COMPASS', YL], [65, 'magnetism', 'MAGNETISM', 'CLOUDY DAYS', RD], [66, 'smell', 'SMELL', 'THE MAP', GR], [67, 'roads', 'ROADS', 'LAST MILES', PK]];
  scene(64, 67, 'glitch', (c, t) => {
    bgRoad(c, t, { speed: 5, hs: 0.8, ms: 61 });
    c.save(); c.fillStyle = 'rgba(5,1,20,0.62)'; c.fillRect(0, 0, W, HH); c.restore();
    REC.forEach(([i, w, lab, sub, col], k) => {
      const x = 180 + k * 307, t0 = P(i, w) - 0.15, on = flick(t, t0);
      deadTube(c, lab, x, 400, F(40), col);
      if (on > 0) neonText(c, lab, x, 400, F(40), col, on);
      neonText(c, sub, x, 470, F(28), LV, flick(t, t0 + 0.4));
      const ip = up(t, t0, 0.3);
      if (ip > 0) {
        if (k === 0) sun(c, x, 250, 56 * ip, t);
        else if (k === 1) { c.save(); c.globalAlpha *= ip; neonFill(c, '#300a1a', 1, () => c.rect(x - 60, 225, 120, 50)); neonStroke(c, RD, 1.6, () => c.rect(x - 60, 225, 60, 50)); neonStroke(c, '#5aa8ff', 1.6, () => c.rect(x, 225, 60, 50)); neonText(c, 'N', x - 30, 250, F(30), RD, 1); neonText(c, 'S', x + 30, 250, F(30), '#5aa8ff', 1); c.restore(); }
        else if (k === 2) scent(c, x - 90, 270, x + 90, 230, t, GR, 3, ip);
        else { c.save(); c.globalAlpha *= ip; neonStroke(c, PK, 1.6, () => { c.moveTo(x - 30, 300); c.lineTo(x - 8, 200); c.moveTo(x + 30, 300); c.lineTo(x + 8, 200); }); c.setLineDash([10, 10]); neonStroke(c, YL, 1, () => { c.moveTo(x, 300); c.lineTo(x, 200); }); c.restore(); }
      }
    });
  });
  REC.forEach(([i, w], k) => { fx(P(i, w) - 0.15, 'strike'); fx(P(i, w) - 0.15, 'stab', { notes: [['A3', 'E4'], ['C4', 'G4'], ['E4', 'B4'], ['A4', 'E5']][k], minor: true }); });

  // 24. payoff
  scene(68, 68, 'zoom', (c, t) => {
    bgRoad(c, t, { speed: 9, ms: 3 });
    pigeon(c, 640, 270 + bob(t, 6), 1.0, flapAt(t), {});
    slam(c, '4 SENSES', 640, 470, 72, t, P(68, 'four') - 0.1);
    slam(c, '1 TINY BRAIN', 640, 565, 64, t, P(68, 'tiny') - 0.1);
    neonScript(c, "still beats your phone's battery", 640, 640, 70, flick(t, P(68, 'beats') - 0.15));
  });
  fx(P(68, 'four') - 0.1, 'slam'); fx(P(68, 'tiny') - 0.1, 'slam'); fx(P(68, 'beats') - 0.15, 'take');

  // 25. next time: your bones are alive
  scene(69, 70, 'glitch', (c, t) => {
    bgSky(c, t, 222, '#1a3a8a');
    const tb = P(69, 'bones') - 0.2;
    const pulse = 0.5 + 0.5 * Math.sin(t * 5);
    bone(c, 640, 360, 1.5 * E.back(ph(t, tb, tb + 0.45)), up(t, tb, 0.3), -0.25 + Math.sin(t) * 0.05);
    if (t > P(69, 'alive')) glint(c, 760, 300, 50 + 20 * pulse, 0.8);
    neonText(c, 'NEXT TIME', 640, 90, F(44), CY, flick(t, PS(69)));
    slam(c, 'YOUR BONES ARE ALIVE', 640, 590, 58, t, P(69, 'alive') - 0.15);
    neonScript(c, 'how do they rebuild themselves?', 640, 660, 60, flick(t, P(70, 'rebuild') - 0.15));
  });
  fx(PS(69), 'strike'); fx(P(69, 'bones') - 0.2, 'pop'); fx(P(69, 'alive') - 0.15, 'big'); fx(P(70, 'rebuild') - 0.15, 'take');
  const CH = [[6, 'CH 1 · AN OLD TRICK'], [18, 'CH 2 · THE COMPASS'], [30, 'CH 3 · CLOUDY DAYS'], [39, 'CH 4 · THE MAP'], [51, 'CH 5 · THE LAST MILES'], [59, 'CH 6 · THE NUMBERS'], [69, 'NEXT TIME']];
  // ================= chapter tag (corner), transitions, frame =================
  function header(c, t) {
    let tag = null, a = 0;
    for (let j = 0; j < CH.length - 1; j++) { const st = PE(CH[j][0]) + 0.2, en = j + 1 < CH.length ? PE(CH[j + 1][0] - 1) + 0.03 : DURATION; if (t >= st && t < en) { tag = CH[j][1]; a = flick(t, st); } }
    if (!tag) return;
    c.save(); c.font = F(28); const w = c.measureText(tag).width; c.restore();
    c.save(); c.globalAlpha *= a * 0.8; c.fillStyle = 'rgba(8,2,24,0.75)'; c.beginPath(); c.roundRect(20, 18, w + 34, 52, 10); c.fill(); c.restore();
    c.save(); c.globalAlpha *= a; neonStroke(c, PU, 0.9, () => c.roundRect(20, 18, w + 34, 52, 10)); c.restore();
    neonText(c, tag, 37, 45, F(28), '#e0a0ff', a, 'left');
  }
  let TL = null;
  function drawScene(c, sc, t) { c.save(); sc.draw(c, t); c.restore(); }
  function toLayer(sc, t) { const L = TL || (TL = H.layer(W, HH)), lc = L.getContext('2d'); lc.setTransform(1, 0, 0, 1, 0, 0); lc.globalAlpha = 1; lc.globalCompositeOperation = 'source-over'; lc.filter = 'none'; lc.clearRect(0, 0, W, HH); drawScene(lc, sc, t); return L; }
  function explainer(ctx, Wd, Hd, t) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    let cur = 0; for (let i = 0; i < SC.length; i++) if (t >= SC[i].s) cur = i;
    const s = SC[cur], d = TRD[s.tr] || 0, u = cur > 0 && d > 0 ? (t - s.s) / d : 1;
    ctx.fillStyle = '#05021a'; ctx.fillRect(0, 0, W, HH);
    if (u < 1) {
      const prev = SC[cur - 1], e = E.inOut(cl(u));
      if (s.tr === 'glitch') {
        const L = toLayer(u < 0.5 ? prev : s, t), r = H.rng(Math.floor(t * 60) + 7), k = 1 - Math.abs(u - 0.5) * 2;
        for (let y = 0; y < HH;) { const h = r.int(8, 70), dx = (r() - 0.5) * 160 * k; ctx.drawImage(L, 0, y, W, h, dx, y, W, h); y += h; }
        ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.35 * k; ctx.drawImage(L, 8 * k, 0, W, HH, 0, 0, W, HH); ctx.fillStyle = `rgba(79,243,255,${0.12 * k})`; ctx.fillRect(0, 0, W, HH); ctx.restore();
      } else if (s.tr === 'zoom') {
        ctx.save(); ctx.translate(640, 360); ctx.scale(1 + 0.35 * e, 1 + 0.35 * e); ctx.translate(-640, -360); drawScene(ctx, prev, t); ctx.restore();
        const L = toLayer(s, t); ctx.save(); ctx.globalAlpha = e; ctx.translate(640, 360); ctx.scale(0.82 + 0.18 * e, 0.82 + 0.18 * e); ctx.translate(-640, -360); ctx.drawImage(L, 0, 0); ctx.restore();
      } else { // tiltU: camera tilts up (scene drops away, new one comes from above); tiltD the other way
        const sg = s.tr === 'tiltU' ? 1 : -1;
        ctx.save(); ctx.translate(0, sg * HH * e); drawScene(ctx, prev, t); ctx.restore();
        ctx.save(); ctx.translate(0, -sg * HH * (1 - e)); drawScene(ctx, s, t); ctx.restore();
      }
    } else drawScene(ctx, s, t);
    header(ctx, t);
    ctx.restore();
    finish(ctx, t);
  }

  // ================= SOUND (voiceover mode; times are the same BEATS/word times as the picture) =================
  function scoreSound(k) {
    const snare = (t, g = 1, pan = 0) => { k.noise(t, { dur: 0.24, color: 'pink', filter: 'bandpass', f: 1700, q: 0.6, gain: 0.32 * g, a: 0.002, hold: 0.17, verb: 0.5, pan }); k.tone(t, { f: [[0, 230], [0.08, 160]], dur: 0.12, gain: 0.22 * g, pan }); };
    const stab = (t, notes, g = 1, d = 0.5, pan = 0, minor = false) => notes.forEach((n, i) => {
      k.tone(t, { f: n, type: 'sawtooth', dur: d, gain: 0.05 * g, a: 0.004, hold: d * 0.3, filter: 'lowpass', f2: [[0, 3200], [d * 0.8, 600]], verb: 0.35, pan: pan + (i - 1) * 0.2, minor });
      k.tone(t, { f: n, type: 'sawtooth', detune: 14, dur: d, gain: 0.04 * g, a: 0.004, hold: d * 0.3, filter: 'lowpass', f2: [[0, 2600], [d * 0.8, 500]], verb: 0.35, pan: pan - (i - 1) * 0.2, minor });
    });
    const zap = (t, d, f0, f1, g = 1, pan = 0, minor = true) => k.tone(t, { f: [[0, f0], [d, f1]], type: 'sawtooth', dur: d + 0.05, gain: 0.06 * g, a: 0.005, hold: d * 0.6, filter: 'lowpass', f2: 1600, pan, minor });
    const strike = (t, g = 1, pan = 0, minor = false) => {
      FLK.forEach((v, i) => { if (!v) return; k.tone(t + i * 0.032, { f: 120, type: 'sawtooth', dur: 0.034, gain: 0.16 * v * g, a: 0.001, hold: 0.026, filter: 'bandpass', f2: 1400, q: 1.4, pan, minor }); if (!FLK[i - 1]) k.noise(t + i * 0.032, { dur: 0.008, filter: 'bandpass', f: 2200, q: 1.5, gain: 0.22 * g, a: 0.0005, pan, minor }); });
      k.tone(t + 0.32, { f: 120, type: 'sawtooth', dur: 0.35, gain: 0.07 * g, a: 0.005, filter: 'bandpass', f2: 1100, q: 1.4, pan, minor });
    };
    const click = (t, g = 1, pan = 0) => k.noise(t, { dur: 0.012, filter: 'bandpass', f: 1800, q: 3, gain: 0.17 * g, a: 0.0005, pan, minor: true });
    // music (dropped in voiceover mode, kept for the full mix): pad intro, then the night-drive pulse
    k.music('pad', 0.2, PS(7), { bpm: 100, gain: 0.45, chords: [['A3', 'C4', 'E4', 'G4']] });
    k.music('pulse', PS(7), DURATION - 4, { bpm: 100, gain: 0.35, chords: [['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['C4', 'E4', 'G4', 'B4'], ['G3', 'B3', 'D4', 'F4']] });
    k.music('pad', DURATION - 4, DURATION, { bpm: 100, gain: 0.4, chords: [['C4', 'E4', 'G4', 'B4']] });
    k.bed('hiss', 0, DURATION, { gain: 0.8 });
    // transitions
    SC.forEach((s, i) => {
      if (!i) return;
      if (s.tr === 'glitch') { k.play('glitch', s.s, { gain: 0.8 }); k.noise(s.s, { dur: 0.3, filter: 'highpass', f: 2500, gain: 0.08, a: 0.01 }); }
      else if (s.tr === 'zoom') k.play('whoosh', s.s, { dur: 0.45, gain: 0.5 });
      else if (s.tr === 'tiltU') k.noise(s.s, { dur: 0.6, color: 'pink', filter: 'bandpass', f: [[0, 300], [0.55, 2400]], q: 1.4, gain: 0.16, a: 0.4 });
      else if (s.tr === 'tiltD') k.noise(s.s, { dur: 0.6, color: 'pink', filter: 'bandpass', f: [[0, 2400], [0.55, 300]], q: 1.4, gain: 0.14, a: 0.15 });
    });
    for (let j = 0; j < CH.length - 1; j++) k.play('blip', PE(CH[j][0]) + 0.2, { f: 'A5', minor: true });
    SFX.forEach(([t, kind, o]) => {
      const g = o.g || 1, mn = !!o.minor, pan = o.pan || 0;
      switch (kind) {
        case 'slam': snare(t, 1.0 * g, pan); k.play('thud', t, { f: 90, gain: 0.6 * g }); stab(t, ['A3', 'E4', 'A4', 'C5'], g, 0.6, pan); break;
        case 'big': snare(t, 1.25 * g); k.play('impact', t, { f: 70, gain: g }); stab(t, ['F3', 'C4', 'E4', 'A4', 'C5'], 1.3 * g, 1.2); break;
        case 'strike': strike(t, mn ? 0.6 : 0.85, pan, mn); break;
        case 'stab': stab(t, o.notes || ['E4', 'A4', 'C5'], 0.8, 0.35, pan, mn); break;
        case 'roll': { const n = Math.max(4, Math.floor(o.d * 16)); for (let i = 0; i < n; i++) click(t + o.d * E.inOut(i / n), 1, 0.15); k.tone(t, { f: o.down ? [[0, 900], [o.d, 180]] : [[0, 180], [o.d, 900]], type: 'sawtooth', dur: o.d + 0.05, gain: 0.035, a: 0.05, hold: o.d * 0.7, filter: 'lowpass', f2: 1400, minor: true }); break; }
        case 'hum': k.tone(t, { f: 60, type: 'sawtooth', dur: o.d, gain: 0.05, a: 0.4, hold: o.d - 0.8, filter: 'lowpass', f2: 400, minor: true }); break;
        case 'hummer': k.tone(t, { f: 120, type: 'sawtooth', dur: o.d, gain: 0.06, a: 0.2, hold: o.d - 0.5, filter: 'bandpass', f2: 600, q: 2, minor: true }); break;
        case 'riser': k.play('riser', t, { dur: o.d || 0.8, gain: 0.7 }); break;
        case 'whirl': for (let x = 0; x < o.d; x += 0.22) k.play('swish', t + x, { dur: 0.16, gain: 0.35, minor: true, pan: Math.sin(x * 3) * 0.4 }); break;
        case 'steam': k.noise(t, { dur: 1.2, filter: 'highpass', f: 3500, gain: 0.07, a: 0.1, hold: 0.6, minor: true, pan: -0.5 }); break;
        case 'water': k.noise(t, { dur: o.d || 1.2, color: 'pink', filter: 'lowpass', f: 900, gain: 0.09, a: 0.2, hold: (o.d || 1.2) * 0.5, minor: true }); break;
        case 'whoosh': k.play('whoosh', t, { dur: o.d || 0.45, gain: 0.45, pan }); break;
        case 'zap': zap(t, o.d || 0.3, o.f0 || 300, o.f1 || 1100, 1, pan); break;
        case 'fizz': for (let x = 0; x < o.d; x += 0.07) k.play('blip', t + x, { f: 700 + x * 900, dur: 0.04, minor: true, pan: x - 0.5 }); break;
        case 'trace': { const pts = [[0, 300]]; for (let q = 1; q <= 6; q++) pts.push([o.d * q / 6, q % 2 ? 620 : 300]); k.tone(t, { f: pts, type: 'triangle', dur: o.d, gain: 0.05, a: 0.05, hold: o.d * 0.8, minor: true }); break; }
        case 'ticks': for (let i = 0; i < o.n; i++) k.play('tick', t + i * o.d / o.n, { minor: true }); break;
        case 'right': k.tone(t, { f: 'G4', type: 'triangle', dur: 0.4, gain: 0.1, verb: 0.3 }); k.tone(t + 0.1, { f: 'C5', type: 'triangle', dur: 0.6, gain: 0.1, verb: 0.3 }); stab(t, ['C4', 'E4', 'G4'], 0.7, 0.4); break;
        case 'wrong': k.play('thud', t, { f: 80, gain: 0.6 }); ['A3', 'Eb4', 'Bb4'].forEach((n, i) => k.tone(t, { f: [[0, n], [0.45, k.hz(n) * 0.8]], type: 'sawtooth', dur: 0.55, gain: 0.06, a: 0.004, hold: 0.25, filter: 'lowpass', f2: [[0, 2400], [0.5, 500]], verb: 0.3, pan: (i - 1) * 0.2 })); break;
        case 'dash': k.noise(t, { dur: 0.4, color: 'brown', filter: 'lowpass', f: [[0, 200], [0.4, 600]], gain: 0.14, a: 0.2, minor: true }); break;
        case 'sweep': k.tone(t, { f: 'A2', type: 'sawtooth', dur: 0.75, gain: 0.07, a: 0.05, hold: 0.45, filter: 'lowpass', f2: o.up ? [[0, 300], [0.65, 2400]] : [[0, 2400], [0.65, 250]], q: 8, minor: true }); for (let i = 0; i < 8; i++) click(t + i * 0.08, 0.8); break;
        case 'zapBig': zap(t, 0.25, 2000, 150, 2, 0, false); k.play('buzz', t, { dur: 0.6, gain: 1 }); k.play('impact', t + 0.05, { gain: 0.8 }); k.noise(t, { dur: 0.5, filter: 'highpass', f: 3000, gain: 0.2, a: 0.002 }); break;
        case 'clack': k.play('click', t, { gain: 1.4 }); k.play('thud', t, { f: 200, gain: 0.25 }); break;
        case 'wiggle': for (let x = 0; x < o.d; x += 0.12) k.tone(t + x, { f: (x * 8) % 2 < 1 ? 'E5' : 'D5', type: 'triangle', dur: 0.1, gain: 0.04, minor: true }); break;
        case 'flaps': for (let x = 0; x < o.d; x += 0.11) k.noise(t + x, { dur: 0.07, color: 'pink', filter: 'bandpass', f: 900 + (x * 37 % 3) * 150, q: 0.8, gain: 0.08, a: 0.02, minor: true, pan: -0.3 + x * 0.2 }); break;
        case 'blip': k.play('blip', t, { f: o.f || 'A5', minor: true, pan }); break;
        case 'pop': k.play('pop', t, { gain: 1 }); k.play('sparkle', t + 0.05, { gain: 0.8 }); break;
        case 'take': strike(t, 1, 0.2); k.tone(t, { f: 'B4', type: 'triangle', dur: 0.2, gain: 0.1, verb: 0.3 }); k.tone(t + 0.18, { f: 'C5', type: 'triangle', dur: 1.2, gain: 0.12, verb: 0.4 }); k.tone(t + 0.18, { f: 'C3', type: 'sawtooth', dur: 1.2, gain: 0.06, a: 0.02, hold: 0.4, filter: 'lowpass', f2: 700 }); break;
      }
    });
  }


  // ================= THUMBNAIL =================
  function thumbnail(ctx, Wd, Hd) {
    const t = 4.2;
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    bgRoad(ctx, t, { speed: 9, sun: ['#ffe8ff', '#ff9ee8', '#ff4fd8', '#8a3dff', '#3a0f9e'], ms: 11 });
    ctx.fillStyle = 'rgba(5,1,20,0.3)'; ctx.fillRect(0, 0, W, HH);
    pigeon(ctx, 930, 400, 2.6, 0.75, {});
    chromeTitle(ctx, 'NO MAP.', 400, 250, 120);
    chromeTitle(ctx, 'NO GPS.', 400, 420, 120);
    neonScript(ctx, 'how?!', 420, 540, 110, 1, -0.06);
    glint(ctx, 640, 170, 80, 0.95);
    ctx.restore();
    finish(ctx, t);
  }
  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s - 0.05 ? j : a), 0) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();
