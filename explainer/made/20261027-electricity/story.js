// ================= Synthwave Outrun, 16:9 1280x720: "Electricity explained: how power gets from the plant to your outlet" =================
// Long video (~3.5 min), 6 chapters, 27 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// An 80s night drive along the power grid: pylons march beside the neon highway, a spinning magnet replaces the sun,
// CRT glitch cuts, camera tilts into the sky and zooms move between scenes (power plant, generator, scope, transformer,
// hose, substation, street poles, house, breaker panel, outlet, the wire up close), chrome titles slam in on the numbers.
(function () {
  // ---------- voiceover phrases (phrases.json, Kokoro am_michael) ----------
  const PH = [{"s":0.25,"e":3.01,"text":"Up to seven hundred sixty-five thousand volts","words":[["up",0.25],["to",0.4],["seven",0.54],["hundred",0.9],["sixtyfive",1.41],["thousand",2.07],["volts",2.65]]},{"s":3.31,"e":5.22,"text":"flow through the biggest power lines,","words":[["flow",3.31],["through",3.56],["the",3.99],["biggest",4.17],["power",4.61],["lines",4.92]]},{"s":5.52,"e":8.26,"text":"yet your outlet gives you just a hundred twenty.","words":[["yet",5.52],["your",5.73],["outlet",6.02],["gives",6.44],["you",6.79],["just",7.0],["a",7.28],["hundred",7.35],["twenty",7.84]]},{"s":8.81,"e":9.67,"text":"Here's how.","words":[["heres",8.81],["how",9.35]]},{"s":10.22,"e":12.19,"text":"It all starts with a spinning magnet,","words":[["it",10.22],["all",10.35],["starts",10.55],["with",10.94],["a",11.2],["spinning",11.27],["magnet",11.79]]},{"s":12.49,"e":14.33,"text":"maybe hundreds of miles away.","words":[["maybe",12.49],["hundreds",12.87],["of",13.48],["miles",13.64],["away",14.02]]},{"s":14.88,"e":17.33,"text":"So let's follow the trip, in simple words.","words":[["so",14.88],["lets",15.03],["follow",15.34],["the",15.8],["trip",16.03],["in",16.33],["simple",16.48],["words",16.94]]},{"s":17.88,"e":19.49,"text":"Stop one: the power plant.","words":[["stop",17.88],["one",18.2],["the",18.44],["power",18.68],["plant",19.09]]},{"s":20.04,"e":22.73,"text":"Almost every power plant does the same job.","words":[["almost",20.04],["every",20.5],["power",20.89],["plant",21.27],["does",21.65],["the",21.96],["same",22.19],["job",22.5]]},{"s":23.28,"e":24.46,"text":"It spins something.","words":[["it",23.28],["spins",23.43],["something",23.8]]},{"s":25.01,"e":28.44,"text":"Coal, gas and nuclear plants boil water into steam.","words":[["coal",25.01],["gas",25.35],["and",25.6],["nuclear",25.85],["plants",26.43],["boil",26.94],["water",27.27],["into",27.69],["steam",28.02]]},{"s":28.99,"e":30.48,"text":"Dams use falling water.","words":[["dams",28.99],["use",29.31],["falling",29.54],["water",30.09]]},{"s":31.03,"e":32.96,"text":"Wind farms use, well, wind.","words":[["wind",31.03],["farms",31.42],["use",31.9],["well",32.19],["wind",32.57]]},{"s":33.51,"e":35.86,"text":"All of it pushes the blades of a turbine,","words":[["all",33.51],["of",33.73],["it",33.88],["pushes",34.02],["the",34.46],["blades",34.68],["of",35.12],["a",35.27],["turbine",35.34]]},{"s":36.16,"e":38.24,"text":"and the turbine spins a giant magnet","words":[["and",36.16],["the",36.37],["turbine",36.58],["spins",37.06],["a",37.41],["giant",37.48],["magnet",37.82]]},{"s":38.54,"e":40.37,"text":"inside coils of copper wire.","words":[["inside",38.54],["coils",39.02],["of",39.41],["copper",39.57],["wire",40.05]]},{"s":40.92,"e":46.07,"text":"Here's the trick, found by Michael Faraday back in 1831.","words":[["heres",40.92],["the",41.5],["trick",41.85],["found",42.44],["by",43.02],["michael",43.26],["faraday",44.08],["back",44.9],["in",45.37],["1831",45.6]]},{"s":46.62,"e":48.58,"text":"When a magnet moves past a wire,","words":[["when",46.62],["a",46.94],["magnet",47.01],["moves",47.48],["past",47.88],["a",48.19],["wire",48.27]]},{"s":48.88,"e":51.32,"text":"it shoves the electrons inside that wire.","words":[["it",48.88],["shoves",49.03],["the",49.46],["electrons",49.67],["inside",50.32],["that",50.75],["wire",51.03]]},{"s":51.87,"e":54.9,"text":"Spin it nonstop, and you get a nonstop push.","words":[["spin",51.87],["it",52.23],["nonstop",52.41],["and",53.03],["you",53.3],["get",53.56],["a",53.83],["nonstop",53.92],["push",54.54]]},{"s":55.45,"e":57.06,"text":"That push is electricity.","words":[["that",55.45],["push",55.75],["is",56.06],["electricity",56.21]]},{"s":57.61,"e":60.23,"text":"And because the magnet keeps flipping north and south,","words":[["and",57.61],["because",57.78],["the",58.19],["magnet",58.36],["keeps",58.72],["flipping",59.01],["north",59.47],["and",59.77],["south",59.94]]},{"s":60.53,"e":62.33,"text":"the push swings back and forth too.","words":[["the",60.53],["push",60.73],["swings",60.98],["back",61.37],["and",61.62],["forth",61.82],["too",62.14]]},{"s":62.88,"e":66.14,"text":"In the US, it swings sixty times every second.","words":[["in",62.88],["the",63.06],["us",63.33],["it",63.52],["swings",63.7],["sixty",64.24],["times",64.69],["every",65.14],["second",65.6]]},{"s":66.69,"e":68.54,"text":"In most of the world, it's fifty.","words":[["in",66.69],["most",66.84],["of",67.15],["the",67.31],["world",67.54],["its",67.92],["fifty",68.15]]},{"s":69.09,"e":71.0,"text":"That's called alternating current.","words":[["thats",69.09],["called",69.42],["alternating",69.81],["current",70.54]]},{"s":71.55,"e":73.31,"text":"Stop two: the voltage jump.","words":[["stop",71.55],["two",71.89],["the",72.14],["voltage",72.39],["jump",72.98]]},{"s":73.86,"e":76.84,"text":"A generator makes about twenty thousand volts.","words":[["a",73.86],["generator",73.94],["makes",74.62],["about",75.01],["twenty",75.39],["thousand",75.84],["volts",76.46]]},{"s":77.39,"e":78.95,"text":"But right outside the plant,","words":[["but",77.39],["right",77.59],["outside",77.93],["the",78.41],["plant",78.61]]},{"s":79.25,"e":81.61,"text":"a step-up transformer cranks it way higher,","words":[["a",79.25],["stepup",79.32],["transformer",79.73],["cranks",80.47],["it",80.87],["way",81.01],["higher",81.21]]},{"s":81.91,"e":84.67,"text":"up to seven hundred sixty-five thousand volts","words":[["up",81.91],["to",82.06],["seven",82.2],["hundred",82.56],["sixtyfive",83.07],["thousand",83.73],["volts",84.31]]},{"s":84.97,"e":86.28,"text":"on the biggest lines.","words":[["on",84.97],["the",85.12],["biggest",85.36],["lines",85.9]]},{"s":86.83,"e":88.37,"text":"Why make it so extreme?","words":[["why",86.83],["make",87.09],["it",87.43],["so",87.6],["extreme",87.77]]},{"s":88.92,"e":90.42,"text":"Think of a garden hose.","words":[["think",88.92],["of",89.34],["a",89.5],["garden",89.59],["hose",90.08]]},{"s":90.97,"e":93.93,"text":"You can move a lot of water slowly through a fat hose,","words":[["you",90.97],["can",91.18],["move",91.39],["a",91.67],["lot",91.74],["of",91.95],["water",92.09],["slowly",92.45],["through",92.87],["a",93.36],["fat",93.44],["hose",93.65]]},{"s":94.23,"e":96.75,"text":"or the same water super fast through a thin one.","words":[["or",94.23],["the",94.36],["same",94.56],["water",94.83],["super",95.16],["fast",95.49],["through",95.76],["a",96.22],["thin",96.29],["one",96.55]]},{"s":97.3,"e":99.03,"text":"Power lines work the same way.","words":[["power",97.3],["lines",97.66],["work",98.02],["the",98.31],["same",98.53],["way",98.82]]},{"s":99.58,"e":100.79,"text":"Crank the voltage up,","words":[["crank",99.58],["the",99.94],["voltage",100.15],["up",100.65]]},{"s":101.09,"e":103.55,"text":"and the current, the flow, drops way down.","words":[["and",101.09],["the",101.32],["current",101.56],["the",102.09],["flow",102.32],["drops",102.63],["way",103.01],["down",103.24]]},{"s":104.1,"e":107.04,"text":"Less current means less heat wasted in the wires.","words":[["less",104.1],["current",104.4],["means",104.91],["less",105.28],["heat",105.57],["wasted",105.86],["in",106.3],["the",106.45],["wires",106.67]]},{"s":107.59,"e":110.09,"text":"Even so, about five percent of the power","words":[["even",107.59],["so",107.9],["about",108.06],["five",108.45],["percent",108.76],["of",109.31],["the",109.46],["power",109.7]]},{"s":110.39,"e":112.24,"text":"is lost as heat along the way.","words":[["is",110.39],["lost",110.55],["as",110.87],["heat",111.03],["along",111.36],["the",111.76],["way",112.0]]},{"s":112.79,"e":114.62,"text":"Stop three: the step back down.","words":[["stop",112.79],["three",113.1],["the",113.48],["step",113.7],["back",114.01],["down",114.31]]},{"s":115.17,"e":119.02,"text":"Seven hundred thousand volts would fry your toaster instantly.","words":[["seven",115.17],["hundred",115.53],["thousand",116.04],["volts",116.62],["would",116.99],["fry",117.35],["your",117.57],["toaster",117.86],["instantly",118.37]]},{"s":119.57,"e":121.75,"text":"So the lines run into a substation,","words":[["so",119.57],["the",119.73],["lines",119.96],["run",120.35],["into",120.58],["a",120.9],["substation",120.97]]},{"s":122.05,"e":123.75,"text":"where big transformers drop it","words":[["where",122.05],["big",122.38],["transformers",122.58],["drop",123.36],["it",123.62]]},{"s":124.05,"e":125.62,"text":"to a few thousand volts.","words":[["to",124.05],["a",124.21],["few",124.3],["thousand",124.54],["volts",125.21]]},{"s":126.17,"e":128.39,"text":"Those smaller lines run down your street.","words":[["those",126.17],["smaller",126.5],["lines",126.95],["run",127.28],["down",127.48],["your",127.74],["street",128.0]]},{"s":128.94,"e":130.58,"text":"Then one last transformer,","words":[["then",128.94],["one",129.24],["last",129.47],["transformer",129.76]]},{"s":130.88,"e":134.24,"text":"that gray can on the pole, or a green box on the lawn,","words":[["that",130.88],["gray",131.22],["can",131.56],["on",131.81],["the",131.97],["pole",132.23],["or",132.56],["a",132.73],["green",132.81],["box",133.23],["on",133.48],["the",133.65],["lawn",133.9]]},{"s":134.54,"e":136.82,"text":"brings it down to what your house uses:","words":[["brings",134.54],["it",134.98],["down",135.13],["to",135.42],["what",135.57],["your",135.86],["house",136.16],["uses",136.53]]},{"s":137.12,"e":139.15,"text":"a hundred twenty volts in the US,","words":[["a",137.12],["hundred",137.2],["twenty",137.74],["volts",138.21],["in",138.6],["the",138.76],["us",138.99]]},{"s":139.45,"e":142.26,"text":"around two hundred thirty in much of the world.","words":[["around",139.45],["two",139.89],["hundred",140.11],["thirty",140.63],["in",141.08],["much",141.22],["of",141.52],["the",141.67],["world",141.89]]},{"s":142.81,"e":144.34,"text":"Stop four: your walls.","words":[["stop",142.81],["four",143.17],["your",143.53],["walls",143.89]]},{"s":144.89,"e":146.58,"text":"The wire enters through a meter,","words":[["the",144.89],["wire",145.09],["enters",145.35],["through",145.74],["a",146.19],["meter",146.26]]},{"s":146.88,"e":148.72,"text":"which counts every bit you use,","words":[["which",146.88],["counts",147.25],["every",147.69],["bit",148.06],["you",148.28],["use",148.5]]},{"s":149.02,"e":150.32,"text":"and then a breaker panel,","words":[["and",149.02],["then",149.21],["a",149.47],["breaker",149.54],["panel",149.99]]},{"s":150.62,"e":153.13,"text":"which cuts the power if a wire gets too hot.","words":[["which",150.62],["cuts",150.98],["the",151.28],["power",151.5],["if",151.87],["a",152.02],["wire",152.09],["gets",152.39],["too",152.68],["hot",152.91]]},{"s":153.68,"e":156.04,"text":"From there, cables run to every outlet.","words":[["from",153.68],["there",153.98],["cables",154.36],["run",154.82],["to",155.05],["every",155.2],["outlet",155.59]]},{"s":156.59,"e":158.29,"text":"And those holes aren't random.","words":[["and",156.59],["those",156.8],["holes",157.16],["arent",157.51],["random",157.86]]},{"s":158.84,"e":161.52,"text":"On a US outlet, the short slot is hot.","words":[["on",158.84],["a",159.03],["us",159.13],["outlet",159.32],["the",159.89],["short",160.18],["slot",160.66],["is",161.04],["hot",161.23]]},{"s":162.07,"e":163.51,"text":"That's where the push comes in.","words":[["thats",162.07],["where",162.37],["the",162.67],["push",162.85],["comes",163.09],["in",163.39]]},{"s":164.06,"e":165.64,"text":"The tall slot is neutral,","words":[["the",164.06],["tall",164.3],["slot",164.61],["is",164.93],["neutral",165.09]]},{"s":165.94,"e":166.9,"text":"the path back.","words":[["the",165.94],["path",166.2],["back",166.55]]},{"s":167.45,"e":169.03,"text":"And the round hole is ground,","words":[["and",167.45],["the",167.65],["round",167.86],["hole",168.21],["is",168.48],["ground",168.62]]},{"s":169.33,"e":171.56,"text":"a safety exit if something goes wrong.","words":[["a",169.33],["safety",169.41],["exit",169.84],["if",170.12],["something",170.27],["goes",170.91],["wrong",171.2]]},{"s":172.11,"e":173.49,"text":"Now the wildest part.","words":[["now",172.11],["the",172.35],["wildest",172.59],["part",173.16]]},{"s":174.04,"e":176.88,"text":"Flip a switch, and the light turns on instantly.","words":[["flip",174.04],["a",174.34],["switch",174.41],["and",174.86],["the",175.09],["light",175.31],["turns",175.68],["on",176.06],["instantly",176.21]]},{"s":177.43,"e":179.92,"text":"But the electrons in the wire barely move.","words":[["but",177.43],["the",177.65],["electrons",177.87],["in",178.53],["the",178.67],["wire",178.89],["barely",179.19],["move",179.63]]},{"s":180.47,"e":182.11,"text":"They crawl slower than a snail,","words":[["they",180.47],["crawl",180.73],["slower",181.06],["than",181.45],["a",181.72],["snail",181.78]]},{"s":182.41,"e":184.56,"text":"mostly just wiggling back and forth.","words":[["mostly",182.41],["just",182.84],["wiggling",183.13],["back",183.7],["and",183.99],["forth",184.2]]},{"s":185.11,"e":187.77,"text":"What races through the wire is the push itself,","words":[["what",185.11],["races",185.39],["through",185.74],["the",186.23],["wire",186.44],["is",186.72],["the",186.86],["push",187.07],["itself",187.35]]},{"s":188.07,"e":189.91,"text":"moving at close to the speed of light.","words":[["moving",188.07],["at",188.44],["close",188.56],["to",188.87],["the",188.99],["speed",189.17],["of",189.48],["light",189.61]]},{"s":190.46,"e":193.6,"text":"So the energy in your charger left that spinning magnet","words":[["so",190.46],["the",190.6],["energy",190.8],["in",191.21],["your",191.35],["charger",191.62],["left",192.1],["that",192.37],["spinning",192.65],["magnet",193.19]]},{"s":193.9,"e":195.2,"text":"a split second ago.","words":[["a",193.9],["split",193.99],["second",194.42],["ago",194.94]]},{"s":195.75,"e":199.73,"text":"Twenty thousand volts, then seven hundred sixty-five thousand,","words":[["twenty",195.75],["thousand",196.21],["volts",196.82],["then",197.21],["seven",197.51],["hundred",197.9],["sixtyfive",198.43],["thousand",199.12]]},{"s":200.03,"e":201.38,"text":"then down to the wall,","words":[["then",200.03],["down",200.35],["to",200.67],["the",200.82],["wall",201.06]]},{"s":201.68,"e":203.18,"text":"all in the blink of an eye.","words":[["all",201.68],["in",201.9],["the",202.05],["blink",202.28],["of",202.66],["an",202.81],["eye",202.96]]},{"s":203.73,"e":206.34,"text":"Next time: if Earth is spinning so fast,","words":[["next",203.73],["time",204.07],["if",204.4],["earth",204.57],["is",204.99],["spinning",205.16],["so",205.83],["fast",206.0]]},{"s":206.64,"e":207.92,"text":"why don't we fly off?","words":[["why",206.64],["dont",206.89],["we",207.24],["fly",207.41],["off",207.67]]}];
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
  // lattice transmission tower; base at (x, by), height 300*s
  function tower(c, x, by, s, col = CY, w = 1.6) {
    const h = 300 * s, b = 46 * s, tp = 12 * s;
    neonStroke(c, col, Math.max(0.7, w * Math.min(1.4, s * 1.2)), () => {
      const L = (u) => [x - H.lerp(b, tp, u), by - h * u], R = (u) => [x + H.lerp(b, tp, u), by - h * u];
      c.moveTo(...L(0)); c.lineTo(...L(1)); c.lineTo(...R(1)); c.lineTo(...R(0));
      for (let k = 0; k < 6; k++) { const u0 = k / 6 * 0.78, u1 = (k + 1) / 6 * 0.78; c.moveTo(...L(u0)); c.lineTo(...R(u1)); c.moveTo(...R(u0)); c.lineTo(...L(u1)); c.moveTo(...L(u1)); c.lineTo(...R(u1)); }
      for (const [u, aw] of [[0.78, 84], [0.92, 62]]) { const y = by - h * u; c.moveTo(x - aw * s, y); c.lineTo(x + aw * s, y); c.moveTo(x - aw * s, y); c.lineTo(...L(u - 0.06)); c.moveTo(x + aw * s, y); c.lineTo(...R(u - 0.06)); for (const sx of [-1, 1]) { c.moveTo(x + sx * aw * s, y); c.lineTo(x + sx * aw * s, y + 18 * s); } }
      c.moveTo(...L(1)); c.lineTo(x, by - h * 1.06); c.lineTo(...R(1));
    });
    return [[x - 84 * s, by - h * 0.78 + 18 * s], [x + 84 * s, by - h * 0.78 + 18 * s], [x - 62 * s, by - h * 0.92 + 18 * s], [x + 62 * s, by - h * 0.92 + 18 * s]];
  }
  function sagLine(c, a, b, sag, col, w = 1.1) { neonStroke(c, col, w, () => { c.moveTo(...a); c.quadraticCurveTo((a[0] + b[0]) / 2, (a[1] + b[1]) / 2 + sag, ...b); }); }
  // pylons marching beside the road, wires between them
  function roadPylons(c, t, speed = 7, side = 1, col = CY, lineCol = PK) {
    const sp = 9, off = (t * speed) % sp, tips = [];
    for (let z = 60 - off; z > 1.2; z -= sp) {
      const [x, by] = proj(side * 5.2, 0, z), [, ty] = proj(side * 5.2, 6, z);
      const s = (by - ty) / 300;
      c.save(); c.globalAlpha *= cl((62 - z) / 12); tips.push(tower(c, x, by, s, col)); c.restore();
    }
    for (let i = 0; i < tips.length - 1; i++) for (let k = 0; k < 4; k++) sagLine(c, tips[i][k], tips[i + 1][k], 10 * (tips[i + 1][0][1] - tips[i][0][1] + 20) / 60, lineCol, 0.8);
  }
  // power plant: cooling tower with steam, turbine hall, chimney
  function plant(c, x, by, s, t, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, '#12041f', 0.9, () => { c.moveTo(x - 120 * s, by); c.quadraticCurveTo(x - 60 * s, by - 120 * s, x - 80 * s, by - 220 * s); c.lineTo(x + 20 * s, by - 220 * s); c.quadraticCurveTo(x, by - 120 * s, x + 60 * s, by); c.closePath(); });
    neonStroke(c, CY, 1.6, () => { c.moveTo(x - 120 * s, by); c.quadraticCurveTo(x - 60 * s, by - 120 * s, x - 80 * s, by - 220 * s); c.lineTo(x + 20 * s, by - 220 * s); c.quadraticCurveTo(x, by - 120 * s, x + 60 * s, by); for (let k = 1; k < 4; k++) { const yy = by - k * 55 * s; c.moveTo(x - 120 * s + k * 13 * s, yy); c.lineTo(x + 60 * s - k * 13 * s, yy); } });
    neonFill(c, '#12041f', 0.9, () => c.rect(x + 70 * s, by - 110 * s, 190 * s, 110 * s));
    neonStroke(c, PK, 1.6, () => { c.rect(x + 70 * s, by - 110 * s, 190 * s, 110 * s); c.moveTo(x + 70 * s, by - 110 * s); c.lineTo(x + 165 * s, by - 150 * s); c.lineTo(x + 260 * s, by - 110 * s); c.rect(x + 220 * s, by - 260 * s, 22 * s, 150 * s); for (let k = 0; k < 4; k++) c.rect(x + 90 * s + k * 40 * s, by - 80 * s, 24 * s, 30 * s); });
    const r = H.rng(88);
    for (let i = 0; i < 9; i++) { const ph0 = r(), u = ((t * 0.25 + ph0) % 1); const px = x - 30 * s + Math.sin(u * 4 + i) * 20 * s + u * 60 * s, py = by - 230 * s - u * 150 * s, R = (18 + u * 46) * s; c.save(); c.globalAlpha *= (1 - u) * 0.8; neonStroke(c, '#e0d0ff', 1, () => c.arc(px, py, R, 0, 7)); c.restore(); }
    c.restore();
  }
  function dam(c, x, by, s, t, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, '#12041f', 0.9, () => { c.moveTo(x - 170 * s, by); c.lineTo(x - 120 * s, by - 200 * s); c.lineTo(x + 120 * s, by - 200 * s); c.lineTo(x + 170 * s, by); c.closePath(); });
    neonStroke(c, CY, 1.6, () => { c.moveTo(x - 170 * s, by); c.lineTo(x - 120 * s, by - 200 * s); c.lineTo(x + 120 * s, by - 200 * s); c.lineTo(x + 170 * s, by); for (let k = 1; k < 4; k++) { c.moveTo(x - 170 * s + k * 12 * s, by - k * 50 * s); c.lineTo(x + 170 * s - k * 12 * s, by - k * 50 * s); } });
    // water pouring out of three gates
    for (let g = -1; g <= 1; g++) for (let k = 0; k < 6; k++) { const u = ((t * 1.4 + k / 6) % 1); const gx = x + g * 70 * s, y0 = by - 120 * s; c.save(); c.globalAlpha *= 1 - u * 0.6; neonStroke(c, '#6fb8ff', 1.4, () => { c.moveTo(gx, y0 + u * 120 * s); c.lineTo(gx + 4 * s, y0 + u * 120 * s + 16 * s); }); c.restore(); }
    neonStroke(c, '#6fb8ff', 1, () => { for (let k = 0; k < 3; k++) { const y = by - 210 * s - k * 10 * s; c.moveTo(x - 300 * s, y); for (let xx = -300; xx <= -120; xx += 20) c.lineTo(x + xx * s, y + Math.sin(xx * 0.1 + t * 3 + k) * 3 * s); } });
    c.restore();
  }
  function windTurbine(c, x, by, s, t, on = 1, spin = 1.6) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    const hy = by - 230 * s, a0 = t * spin;
    neonStroke(c, CY, 1.6, () => { c.moveTo(x - 7 * s, by); c.lineTo(x - 3 * s, hy); c.lineTo(x + 3 * s, hy); c.lineTo(x + 7 * s, by); });
    neonStroke(c, PK, 1.8, () => { for (let k = 0; k < 3; k++) { const a = a0 + k * Math.PI * 2 / 3; const ex = x + Math.cos(a) * 130 * s, ey = hy + Math.sin(a) * 130 * s, nx = Math.cos(a + 1.57) * 9 * s, ny = Math.sin(a + 1.57) * 9 * s; c.moveTo(x, hy); c.lineTo(x + nx + Math.cos(a) * 30 * s, hy + ny + Math.sin(a) * 30 * s); c.lineTo(ex, ey); c.lineTo(x - nx * 0.3 + Math.cos(a) * 30 * s, hy - ny * 0.3 + Math.sin(a) * 30 * s); c.lineTo(x, hy); } c.moveTo(x + 9 * s, hy); c.arc(x, hy, 9 * s, 0, 7); });
    c.restore();
  }
  // turbine seen face-on: housing ring, curved blades spinning
  function turbineFace(c, x, y, R, ang, col = CY) {
    neonFill(c, '#0c0322', 0.9, () => c.arc(x, y, R, 0, 7));
    neonStroke(c, col, 2, () => { c.moveTo(x + R, y); c.arc(x, y, R, 0, 7); c.moveTo(x + R * 0.18, y); c.arc(x, y, R * 0.18, 0, 7); });
    neonStroke(c, PK, 1.4, () => { for (let k = 0; k < 14; k++) { const a = ang + k * Math.PI * 2 / 14; c.moveTo(x + Math.cos(a) * R * 0.2, y + Math.sin(a) * R * 0.2); c.quadraticCurveTo(x + Math.cos(a + 0.35) * R * 0.6, y + Math.sin(a + 0.35) * R * 0.6, x + Math.cos(a + 0.5) * R * 0.94, y + Math.sin(a + 0.5) * R * 0.94); } });
  }
  // bar magnet, centred, rotated; N half hot red, S half electric blue
  function magnet(c, x, y, w, h, ang, on = 1, labels = true) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on; c.translate(x, y); c.rotate(ang);
    const half = (sx, col, dark) => { const g = c.createLinearGradient(0, -h / 2, 0, h / 2); g.addColorStop(0, dark); g.addColorStop(0.45, col); g.addColorStop(1, dark); c.fillStyle = g; c.fillRect(sx < 0 ? -w / 2 : 0, -h / 2, w / 2, h); };
    half(-1, '#ff3d5a', '#5a0418'); half(1, '#3d7fff', '#081a5a');
    neonStroke(c, '#ffffff', 1.2, () => c.rect(-w / 2, -h / 2, w, h));
    if (labels) { c.save(); c.rotate(-ang); c.restore(); neonText(c, 'N', -w / 4, 0, F(Math.round(h * 0.55)), '#ffd0d8'); neonText(c, 'S', w / 4, 0, F(Math.round(h * 0.55)), '#d0e0ff'); }
    c.restore();
  }
  // generator cross-section: ring of copper coils around a spinning magnet
  function generator(c, x, y, R, ang, glow, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, '#0a0320', 0.95, () => c.arc(x, y, R * 1.25, 0, 7));
    neonStroke(c, LV, 1.6, () => { c.moveTo(x + R * 1.25, y); c.arc(x, y, R * 1.25, 0, 7); });
    for (let k = 0; k < 6; k++) {
      const a = k * Math.PI / 3, cx = x + Math.cos(a) * R * 0.98, cy = y + Math.sin(a) * R * 0.98;
      c.save(); c.translate(cx, cy); c.rotate(a);
      const gl = glow ? glow(k) : 0;
      neonFill(c, H.rgba(H.mix('#7a3a10', '#ffb347', gl), 1), 0.85, () => c.rect(-R * 0.13, -R * 0.24, R * 0.26, R * 0.48));
      neonStroke(c, gl > 0.5 ? '#ffe0a0' : OR, 1.1 + gl, () => { for (let j = 0; j < 6; j++) { const yy = -R * 0.22 + j * R * 0.088; c.moveTo(-R * 0.15, yy); c.lineTo(R * 0.15, yy + R * 0.04); } });
      c.restore();
    }
    magnet(c, x, y, R * 1.3, R * 0.42, ang, 1, R > 90);
    c.restore();
  }
  // a horizontal wire with electrons (dots) inside: shift(t) gives each electron's offset
  function wireTube(c, x0, x1, y, r, shift, n = 18, col = OR, dotCol = CY) {
    neonFill(c, '#1a0a10', 0.9, () => c.roundRect(x0, y - r, x1 - x0, 2 * r, r));
    const g = c.createLinearGradient(0, y - r, 0, y + r); g.addColorStop(0, 'rgba(255,180,90,0.35)'); g.addColorStop(0.5, 'rgba(255,120,40,0.08)'); g.addColorStop(1, 'rgba(255,180,90,0.25)');
    c.fillStyle = g; c.beginPath(); c.roundRect(x0, y - r, x1 - x0, 2 * r, r); c.fill();
    neonStroke(c, col, 1.4, () => c.roundRect(x0, y - r, x1 - x0, 2 * r, r));
    c.save(); c.beginPath(); c.roundRect(x0, y - r, x1 - x0, 2 * r, r); c.clip();
    const rr = H.rng(31), span = x1 - x0;
    for (let i = 0; i < n; i++) { const bx = x0 + (i + 0.5) / n * span, by = y + rr.range(-0.55, 0.55) * r; const xx = x0 + ((bx - x0 + shift(i)) % span + span) % span; electron(c, xx, by, Math.min(12, Math.max(5, r * 0.22)), dotCol); }
    c.restore();
  }
  function electron(c, x, y, R, col = CY) {
    c.save(); c.globalCompositeOperation = 'lighter';
    const g = c.createRadialGradient(x, y, 0, x, y, R * 2.2); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, H.rgba(col, 0.9)); g.addColorStop(1, H.rgba(col, 0));
    c.fillStyle = g; c.fillRect(x - R * 2.2, y - R * 2.2, R * 4.4, R * 4.4); c.restore();
    neonText(c, '−', x, y - 1, F(Math.round(R * 1.6)), '#ffffff', 0.9);
  }
  // transformer: square iron core, coil turns on each leg
  function transformer(c, x, y, s, nL, nR, t, hotL = 0, hotR = 0, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    const w = 300 * s, h = 240 * s, k = 46 * s;
    neonFill(c, '#16102e', 0.95, () => { c.rect(x - w / 2, y - h / 2, w, h); c.rect(x - w / 2 + k, y - h / 2 + k, w - 2 * k, h - 2 * k); });
    c.save(); c.fillStyle = '#16102e'; c.beginPath(); c.rect(x - w / 2, y - h / 2, w, h); c.rect(x - w / 2 + k, y - h / 2 + k, w - 2 * k, h - 2 * k); c.fill('evenodd'); c.restore();
    neonStroke(c, LV, 1.3, () => { c.rect(x - w / 2, y - h / 2, w, h); c.rect(x - w / 2 + k, y - h / 2 + k, w - 2 * k, h - 2 * k); });
    const leg = (cx, n, col, hot) => { const top = y - h / 2 + 18 * s, bot = y + h / 2 - 18 * s; neonStroke(c, hot > 0 ? H.rgba(H.mix(col, '#ffffff', hot * 0.5), 1) : col, 1.3 + hot, () => { for (let j = 0; j < n; j++) { const yy = H.lerp(top, bot, (j + 0.5) / n); c.moveTo(cx - k * 0.85, yy - 3 * s); c.lineTo(cx + k * 0.85, yy + 3 * s); } }); };
    leg(x - w / 2 + k / 2, nL, OR, hotL); leg(x + w / 2 - k / 2, nR, OR, hotR);
    c.restore();
  }
  // garden hose: tube of radius r from x0 to x1 with water drops moving at `speed`
  function hose(c, x0, x1, y, r, speed, t, n, col = GR) {
    neonFill(c, '#06200f', 0.85, () => c.roundRect(x0, y - r, x1 - x0, 2 * r, r));
    neonStroke(c, col, 1.6, () => c.roundRect(x0, y - r, x1 - x0, 2 * r, r));
    c.save(); c.beginPath(); c.roundRect(x0, y - r, x1 - x0, 2 * r, r); c.clip();
    const rr = H.rng(51), span = x1 - x0;
    for (let i = 0; i < n; i++) { const bx = rr.range(0, span), by = y + rr.range(-0.7, 0.7) * r, xx = x0 + ((bx + t * speed) % span); const L = Math.min(60, 6 + speed * 0.12); neonStroke(c, '#7fd8ff', Math.max(1, r * 0.08), () => { c.moveTo(xx - L, by); c.lineTo(xx, by); }); }
    c.restore();
  }
  function toaster(c, x, y, s, shake = 0, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on; c.translate(x + shake, y);
    neonFill(c, '#16102e', 0.95, () => c.roundRect(-150 * s, -100 * s, 300 * s, 190 * s, 40 * s));
    neonStroke(c, '#d9f2ff', 1.6, () => { c.roundRect(-150 * s, -100 * s, 300 * s, 190 * s, 40 * s); c.roundRect(-100 * s, -100 * s, 70 * s, 14 * s, 6 * s); c.roundRect(30 * s, -100 * s, 70 * s, 14 * s, 6 * s); c.rect(150 * s, -30 * s, 30 * s, 12 * s); c.moveTo(-120 * s, 90 * s); c.lineTo(-110 * s, 110 * s); c.moveTo(120 * s, 90 * s); c.lineTo(110 * s, 110 * s); });
    neonStroke(c, OR, 1.4, () => { c.roundRect(-90 * s, -150 * s, 50 * s, 60 * s, 10 * s); c.roundRect(40 * s, -150 * s, 50 * s, 60 * s, 10 * s); });
    c.restore();
  }
  function substation(c, x, by, s, t, on = 1, hot = 0) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonStroke(c, LV, 1, () => { for (let k = -10; k <= 10; k++) { c.moveTo(x + k * 40 * s, by); c.lineTo(x + k * 40 * s, by - 60 * s); } c.moveTo(x - 400 * s, by - 60 * s); c.lineTo(x + 400 * s, by - 60 * s); c.moveTo(x - 400 * s, by - 30 * s); c.lineTo(x + 400 * s, by - 30 * s); });
    neonStroke(c, CY, 1.5, () => { for (const gx of [-300, 300]) { c.rect(x + (gx - 20) * s, by - 300 * s, 40 * s, 300 * s); c.moveTo(x + (gx - 20) * s, by - 300 * s); c.lineTo(x + (gx + 20) * s, by - 260 * s); } c.moveTo(x - 320 * s, by - 280 * s); c.lineTo(x + 320 * s, by - 280 * s); });
    for (let k = -1; k <= 1; k++) {
      const bx = x + k * 180 * s, top = by - 150 * s;
      neonFill(c, '#16102e', 0.95, () => c.rect(bx - 60 * s, top, 120 * s, 150 * s));
      neonStroke(c, hot > 0 ? H.rgba(H.mix(PK, '#ffffff', hot * 0.4), 1) : PK, 1.5, () => { c.rect(bx - 60 * s, top, 120 * s, 150 * s); for (let f = 0; f < 5; f++) { c.moveTo(bx - 60 * s + f * 30 * s, top + 20 * s); c.lineTo(bx - 60 * s + f * 30 * s, by - 10 * s); } for (const dx of [-30, 0, 30]) { c.moveTo(bx + dx * s, top); c.lineTo(bx + dx * s, top - 50 * s); for (let j = 0; j < 4; j++) { c.moveTo(bx + (dx - 8) * s, top - 12 * s - j * 10 * s); c.lineTo(bx + (dx + 8) * s, top - 12 * s - j * 10 * s); } } });
      neonStroke(c, YL, 0.9, () => { c.moveTo(bx - 30 * s, top - 50 * s); c.quadraticCurveTo(bx, by - 260 * s, bx + 30 * s, top - 50 * s); c.moveTo(bx, top - 50 * s); c.lineTo(bx, by - 280 * s); });
    }
    c.restore();
  }
  function pole(c, x, by, s, on = 1, canHot = 0) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonStroke(c, OR, 1.8, () => { c.moveTo(x, by); c.lineTo(x, by - 380 * s); c.moveTo(x - 90 * s, by - 350 * s); c.lineTo(x + 90 * s, by - 350 * s); for (const dx of [-80, 0, 80]) { c.moveTo(x + dx * s, by - 350 * s); c.lineTo(x + dx * s, by - 366 * s); } });
    neonFill(c, '#20203a', 0.95, () => c.roundRect(x + 10 * s, by - 300 * s, 70 * s, 100 * s, 12 * s));
    neonStroke(c, canHot > 0 ? H.rgba(H.mix('#d9f2ff', YL, canHot), 1) : '#d9f2ff', 1.4 + canHot, () => { c.roundRect(x + 10 * s, by - 300 * s, 70 * s, 100 * s, 12 * s); c.moveTo(x + 10 * s, by - 280 * s); c.lineTo(x + 80 * s, by - 280 * s); c.moveTo(x + 45 * s, by - 300 * s); c.lineTo(x + 45 * s, by - 330 * s); c.lineTo(x + 80 * s, by - 350 * s); });
    c.restore();
  }
  function greenBox(c, x, by, s, on = 1, hot = 0) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, '#06200f', 0.95, () => c.rect(x - 90 * s, by - 120 * s, 180 * s, 120 * s));
    neonStroke(c, hot > 0 ? H.rgba(H.mix(GR, '#ffffff', hot * 0.5), 1) : GR, 1.6 + hot, () => { c.rect(x - 90 * s, by - 120 * s, 180 * s, 120 * s); for (let k = 0; k < 5; k++) { c.moveTo(x - 60 * s, by - 95 * s + k * 14 * s); c.lineTo(x + 60 * s, by - 95 * s + k * 14 * s); } });
    c.restore();
  }
  function house(c, x, by, s, t, lit = 1, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, '#12041f', 0.95, () => { c.moveTo(x - 160 * s, by); c.lineTo(x - 160 * s, by - 170 * s); c.lineTo(x, by - 290 * s); c.lineTo(x + 160 * s, by - 170 * s); c.lineTo(x + 160 * s, by); c.closePath(); });
    for (const [wx, wy] of [[-100, -140], [40, -140], [-100, -70]]) { c.save(); c.globalAlpha *= lit; const g = c.createLinearGradient(0, by + (wy - 0) * s, 0, by + (wy + 45) * s); g.addColorStop(0, '#ffe066'); g.addColorStop(1, '#ff8a3d'); c.fillStyle = g; c.fillRect(x + wx * s, by + wy * s, 60 * s, 45 * s); c.restore(); }
    neonStroke(c, PK, 1.6, () => { c.moveTo(x - 160 * s, by); c.lineTo(x - 160 * s, by - 170 * s); c.lineTo(x, by - 290 * s); c.lineTo(x + 160 * s, by - 170 * s); c.lineTo(x + 160 * s, by); c.closePath(); c.rect(x + 40 * s, by - 80 * s, 50 * s, 80 * s); for (const [wx, wy] of [[-100, -140], [40, -140], [-100, -70]]) c.rect(x + wx * s, by + wy * s, 60 * s, 45 * s); });
    c.restore();
  }
  function meter(c, x, y, s, value, t, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, '#0c0a24', 0.95, () => c.arc(x, y, 150 * s, 0, 7));
    neonStroke(c, '#d9f2ff', 1.8, () => { c.moveTo(x + 150 * s, y); c.arc(x, y, 150 * s, 0, 7); c.moveTo(x + 130 * s, y); c.arc(x, y, 130 * s, 0, 7); });
    neonStroke(c, LV, 1, () => { c.rect(x - 160 * s, y + 140 * s, 320 * s, 40 * s); });
    const a = t * 3; neonStroke(c, PK, 1.4, () => { c.ellipse(x, y + 70 * s, 70 * s, 12 * s, 0, 0, 7); c.moveTo(x + Math.cos(a) * 70 * s, y + 70 * s + Math.sin(a) * 12 * s); c.lineTo(x + Math.cos(a) * 70 * s, y + 70 * s + Math.sin(a) * 12 * s + 6 * s); });
    c.restore();
    odometer(c, x, y - 30 * s, value, '', 'kWh', on, 5, 30 * s);
  }
  function breakerPanel(c, x, y, s, trip, t, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, '#0c0a24', 0.95, () => c.roundRect(x - 130 * s, y - 200 * s, 260 * s, 400 * s, 12 * s));
    neonStroke(c, '#d9f2ff', 1.6, () => { c.roundRect(x - 130 * s, y - 200 * s, 260 * s, 400 * s, 12 * s); c.moveTo(x, y - 170 * s); c.lineTo(x, y + 170 * s); });
    for (let r = 0; r < 6; r++) for (let col = 0; col < 2; col++) {
      const bx = x + (col ? 20 : -100) * s, byy = y - 165 * s + r * 56 * s, tripped = r === 2 && col === 1 ? trip : 0;
      neonStroke(c, tripped > 0.5 ? RD : CY, 1.2, () => c.roundRect(bx, byy, 80 * s, 40 * s, 6 * s));
      const lx = bx + H.lerp(56, 16, tripped) * s; neonFill(c, tripped > 0.5 ? RD : CY, 0.9, () => c.roundRect(lx, byy + 8 * s, 10 * s, 24 * s, 3 * s));
    }
    c.restore();
  }
  // US duplex outlet face; hl: 0 none, 'hot','neutral','ground'
  function outlet(c, x, y, s, hl = {}, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, '#1c1638', 0.97, () => c.roundRect(x - 140 * s, y - 230 * s, 280 * s, 460 * s, 22 * s));
    neonStroke(c, '#d9f2ff', 1.6, () => { c.roundRect(x - 140 * s, y - 230 * s, 280 * s, 460 * s, 22 * s); c.moveTo(x + 10 * s, y); c.arc(x, y, 10 * s, 0, 7); });
    for (const oy of [-115, 115]) {
      const cy = y + oy * s;
      neonFill(c, '#2a2450', 1, () => c.roundRect(x - 95 * s, cy - 80 * s, 190 * s, 160 * s, 60 * s));
      neonStroke(c, LV, 1.1, () => c.roundRect(x - 95 * s, cy - 80 * s, 190 * s, 160 * s, 60 * s));
      const slot = (sx, h, key, col) => { const v = hl[key] || 0; neonFill(c, '#020008', 1, () => c.roundRect(x + sx * s - 7 * s, cy - 34 * s, 14 * s, h * s, 4 * s)); if (v > 0) { c.save(); c.globalAlpha *= v; neonStroke(c, col, 2.2, () => c.roundRect(x + sx * s - 7 * s, cy - 34 * s, 14 * s, h * s, 4 * s)); c.restore(); } };
      slot(-36, 54, 'neutral', CY); slot(36, 42, 'hot', RD);
      const gv = hl.ground || 0;
      neonFill(c, '#020008', 1, () => { c.moveTo(x - 15 * s, cy + 50 * s); c.arc(x, cy + 46 * s, 15 * s, Math.PI, 0); c.lineTo(x + 15 * s, cy + 58 * s); c.lineTo(x - 15 * s, cy + 58 * s); c.closePath(); });
      if (gv > 0) { c.save(); c.globalAlpha *= gv; neonStroke(c, GR, 2.2, () => { c.moveTo(x - 15 * s, cy + 50 * s); c.arc(x, cy + 46 * s, 15 * s, Math.PI, 0); c.lineTo(x + 15 * s, cy + 58 * s); c.lineTo(x - 15 * s, cy + 58 * s); c.closePath(); }); c.restore(); }
    }
    c.restore();
  }
  function bulb(c, x, y, s, lit, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    if (lit > 0) { c.save(); c.globalCompositeOperation = 'lighter'; const g = c.createRadialGradient(x, y, 0, x, y, 260 * s); g.addColorStop(0, `rgba(255,240,180,${0.9 * lit})`); g.addColorStop(0.3, `rgba(255,180,90,${0.35 * lit})`); g.addColorStop(1, 'rgba(255,120,60,0)'); c.fillStyle = g; c.fillRect(x - 260 * s, y - 260 * s, 520 * s, 520 * s); c.restore(); }
    neonStroke(c, lit > 0.5 ? '#fff0b0' : LV, 1.6, () => { c.arc(x, y, 80 * s, Math.PI * 0.8, Math.PI * 2.2); c.lineTo(x + 35 * s, y + 110 * s); c.lineTo(x - 35 * s, y + 110 * s); c.closePath(); for (let k = 0; k < 3; k++) { c.moveTo(x - 38 * s, y + 122 * s + k * 14 * s); c.lineTo(x + 38 * s, y + 122 * s + k * 14 * s); } });
    neonStroke(c, lit > 0.5 ? YL : '#806040', 1.2 + lit, () => { c.moveTo(x - 20 * s, y + 100 * s); c.lineTo(x - 20 * s, y); for (let k = 0; k < 5; k++) c.lineTo(x - 20 * s + (k + 0.5) * 8 * s, y + (k % 2 ? 10 : -10) * s); c.lineTo(x + 20 * s, y); c.lineTo(x + 20 * s, y + 100 * s); });
    c.restore();
  }
  function lightSwitch(c, x, y, s, up, on = 1) {
    if (on <= 0) return;
    c.save(); c.globalAlpha *= on;
    neonFill(c, '#1c1638', 0.97, () => c.roundRect(x - 90 * s, y - 140 * s, 180 * s, 280 * s, 16 * s));
    neonStroke(c, '#d9f2ff', 1.6, () => { c.roundRect(x - 90 * s, y - 140 * s, 180 * s, 280 * s, 16 * s); c.roundRect(x - 25 * s, y - 60 * s, 50 * s, 120 * s, 8 * s); });
    const ty = H.lerp(25, -25, up);
    neonFill(c, up > 0.5 ? YL : LV, 0.9, () => c.roundRect(x - 18 * s, y + (ty - 30) * s, 36 * s, 60 * s, 8 * s));
    c.restore();
  }
  function snail(c, x, y, s, t) {
    const wob = Math.sin(t * 3) * 3 * s;
    neonStroke(c, GR, 1.6, () => { c.moveTo(x - 90 * s, y); c.quadraticCurveTo(x - 110 * s, y - 40 * s + wob, x - 100 * s, y - 70 * s); c.moveTo(x - 85 * s, y - 10 * s); c.quadraticCurveTo(x - 80 * s, y - 50 * s, x - 70 * s, y - 72 * s); c.moveTo(x - 100 * s, y); c.lineTo(x + 90 * s, y); c.quadraticCurveTo(x + 110 * s, y, x + 100 * s, y - 10 * s); });
    neonStroke(c, PK, 1.8, () => { let a = 0, r = 70 * s; c.moveTo(x + 10 * s + r, y - 70 * s); for (let k = 0; k < 120; k++) { a = k / 120 * Math.PI * 5; r = 70 * s * (1 - k / 135); c.lineTo(x + 10 * s + Math.cos(a) * r, y - 70 * s + Math.sin(a) * r); } });
  }
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
  const magSky = (c, t, R = 110, y = 300) => { sun(c, 640, 352, 150, t, ['#9ff6ff', '#4ff3ff', '#3d7fd6', '#8a3dff', '#d4147f']); generator(c, 640, y, R, t * 2.2, (k) => 0.5 + 0.5 * Math.sin(t * 2.2 * 2 - k * 1.05)); };

  // ---- INTRO ----
  scene(0, 1, 'none', (c, t) => {
    bgRoad(c, t, { speed: 9 });
    roadPylons(c, t, 9, -1, CY, PK); roadPylons(c, t + 2.1, 9, 1, CY, PK);
    slam(c, '765,000', 640, 230, 120, t, P(0, 'seven'));
    neonText(c, 'VOLTS', 640, 300, F(56), PK, flick(t, P(0, 'volts') - 0.1));
    neonText(c, 'THE BIGGEST POWER LINES', 640, 640, F(36), YL, flick(t, P(1, 'biggest') - 0.1));
  });
  fx(P(0, 'seven'), 'slam'); fx(P(0, 'volts') - 0.1, 'strike'); fx(P(1, 'biggest') - 0.1, 'strike', { minor: true }); fx(0.05, 'hum', { d: 5.2 });

  scene(2, 3, 'glitch', (c, t) => {
    bgWall(c, t, { col: '79,243,255' });
    const glow = up(t, P(2, 'outlet'), 0.3);
    outlet(c, 960, 340, 1.05, { hot: glow * 0.7, neutral: glow * 0.7, ground: glow * 0.5 }, 1);
    neonText(c, 'YOUR OUTLET', 960, 640, F(32), CY, flick(t, P(2, 'outlet') - 0.1));
    const v = t < P(2, 'just') ? 765000 : 120 + (765000 - 120) * (1 - E.inOut(ph(t, P(2, 'just'), P(2, 'twenty') + 0.1)));
    odometer(c, 400, 250, v, 'VOLTS', 'V', 1, 7, 46);
    slam(c, 'HOW?', 400, 520, 120, t, P(3, 'how') - 0.05);
  });
  fx(P(2, 'outlet') - 0.1, 'strike', { minor: true }); fx(P(2, 'just'), 'roll', { d: P(2, 'twenty') + 0.1 - P(2, 'just'), down: 1 }); fx(P(2, 'twenty') + 0.1, 'stab'); fx(P(3, 'how') - 0.05, 'slam');

  scene(4, 6, 'tiltD', (c, t) => {
    bgRoad(c, t, { sky: (c2, tt) => magSky(c2, tt), top: '#020118', hot: '#7a1a9e', edge: '#c84fff', speed: 12 });
    roadPylons(c, t, 12, 1, CY, PK);
    const outL = P(6, 'follow') - 0.1;
    c.save(); c.globalAlpha *= 1 - ph(t, outL, outL + 0.25);
    neonText(c, 'SPINNING MAGNET', 640, 110, F(44), CY, flick(t, P(4, 'magnet') - 0.15));
    neonText(c, 'HUNDREDS OF MILES AWAY', 640, 560, F(36), YL, flick(t, P(5, 'hundreds') - 0.1));
    c.restore();
    slam(c, 'ELECTRICITY', 640, 120, 84, t, P(6, 'follow') - 0.1);
    neonScript(c, 'explained in simple words', 640, 200, 64, flick(t, P(6, 'simple') - 0.1));
  });
  fx(P(4, 'magnet') - 0.15, 'strike'); fx(P(5, 'hundreds') - 0.1, 'strike', { minor: true }); fx(P(6, 'follow') - 0.1, 'slam'); fx(P(6, 'simple') - 0.1, 'strike');

  // ---- STOP 1: THE POWER PLANT ----
  scene(7, 9, 'glitch', (c, t) => {
    bgRoad(c, t, { sun: ['#fff6a0', '#ffd23f', '#ff8a3d', '#ff3d7f', '#d4147f'], sy: 330, ms: 9, speed: 5 });
    const rise = E.out(ph(t, PS(8), PS(8) + 0.8));
    plant(c, 560, 470 + (1 - rise) * 260, 1.25, t, rise);
    if (t > P(9, 'spins') - 0.1) {
      const on = flick(t, P(9, 'spins') - 0.1), a0 = t * 4;
      c.save(); c.globalAlpha *= on;
      neonArrow(c, Array.from({ length: 26 }, (_, k) => [1010 + Math.cos(a0 + k * 0.22) * 90, 250 + Math.sin(a0 + k * 0.22) * 90]), 1, YL, 3);
      c.restore();
      neonText(c, 'IT SPINS', 1010, 400, F(48), YL, on);
    }
    card(c, t, 7, 'STOP 1', 'the power plant', PS(8));
  });
  cardFx(7); fx(PS(8), 'riser', { d: 0.8 }); fx(P(9, 'spins') - 0.1, 'stab'); fx(P(9, 'spins'), 'whirl', { d: 1.2 });

  scene(10, 12, 'zoom', (c, t) => {
    bgWall(c, t, { scroll: 20 });
    const cards = [[220, 'STEAM', P(10, 'coal') - 0.1], [640, 'WATER', P(11, 'dams') - 0.1], [1060, 'WIND', Pn(12, 'wind', 1) - 0.1]];
    cards.forEach(([x, lab, t0], i) => {
      const on = flick(t, t0); if (on <= 0) return;
      const pop = E.back(ph(t, t0, t0 + 0.35));
      c.save(); c.globalAlpha *= on; c.translate(x, 360); c.scale(0.85 + 0.15 * pop, 0.85 + 0.15 * pop); c.translate(-x, -360);
      glassPanel(c, x - 175, 130, 350, 440, i === 0 ? 'rgba(255,79,216,0.8)' : i === 1 ? 'rgba(111,184,255,0.8)' : 'rgba(92,255,176,0.8)');
      c.save(); c.beginPath(); c.rect(x - 175, 130, 350, 440); c.clip();
      if (i === 0) plant(c, x - 40, 430, 0.62, t); else if (i === 1) dam(c, x + 20, 430, 0.75, t); else { windTurbine(c, x - 60, 440, 0.75, t); windTurbine(c, x + 80, 440, 0.55, t + 0.7); }
      c.restore();
      neonText(c, lab, x, 490, F(44), i === 0 ? PK : i === 1 ? '#6fb8ff' : GR, on);
      c.restore();
    });
    neonScript(c, 'coal, gas, nuclear', 220, 640, 50, flick(t, P(10, 'coal') + 0.4), -0.04, '#ff4fd8');
    neonScript(c, 'falling water', 640, 640, 50, flick(t, P(11, 'falling') - 0.1), -0.04, '#3d9fff');
    neonScript(c, 'well... wind', 1060, 640, 50, flick(t, Pn(12, 'wind', 2) - 0.1), -0.04, '#2fe090');
  });
  fx(P(10, 'coal') - 0.1, 'strike'); fx(P(10, 'steam'), 'steam'); fx(P(11, 'dams') - 0.1, 'strike'); fx(P(11, 'falling'), 'water'); fx(Pn(12, 'wind', 1) - 0.1, 'strike'); fx(Pn(12, 'wind', 2) - 0.1, 'whoosh');

  scene(13, 15, 'glitch', (c, t) => {
    bgWall(c, t, { col: '200,107,255', top: '#05021a', low: '#1c0640' });
    const spin = Math.max(0, t - PS(13)) * 3.2;
    const tOn = flick(t, P(13, 'turbine') - 0.15);
    // steam jets push the blades
    for (let k = 0; k < 5; k++) { const u = ((t * 1.6 + k / 5) % 1); c.save(); c.globalAlpha *= cl((t - PS(13)) / 0.3) * (1 - u); neonStroke(c, '#e0d0ff', 1.4, () => { c.moveTo(40 + u * 120, 250 + k * 40); c.lineTo(80 + u * 120, 250 + k * 40); }); c.restore(); }
    c.save(); c.globalAlpha *= Math.max(0.35, tOn); turbineFace(c, 330, 340, 170, spin); c.restore();
    neonText(c, 'TURBINE', 330, 580, F(40), CY, tOn);
    const gOn = flick(t, P(14, 'magnet') - 0.15);
    neonStroke(c, LV, 3, () => { c.moveTo(500, 340); c.lineTo(500 + 230 * up(t, P(14, 'spins') - 0.1, 0.4), 340); });
    const coils = up(t, P(15, 'coils') - 0.1, 0.5);
    generator(c, 900, 340, 150, spin, (k) => coils * (0.55 + 0.45 * Math.sin(spin * 2 - k * 1.05)), gOn);
    neonText(c, 'MAGNET', 900, 580, F(40), PK, gOn);
    neonText(c, 'COPPER COILS', 900, 640, F(32), OR, flick(t, P(15, 'copper') - 0.1));
  });
  fx(PS(13), 'whoosh', { d: 0.6 }); fx(P(13, 'turbine') - 0.15, 'strike'); fx(P(13, 'turbine'), 'whirl', { d: 4.5 }); fx(P(14, 'magnet') - 0.15, 'strike'); fx(P(15, 'coils') - 0.1, 'stab', { minor: true }); fx(P(15, 'copper') - 0.1, 'strike', { minor: true });

  scene(16, 20, 'tiltU', (c, t) => {
    bgSky(c, t, 91);
    const out16 = PS(17) - 0.2, a16 = 1 - ph(t, out16, out16 + 0.3);
    if (a16 > 0) { c.save(); c.globalAlpha *= a16; slam(c, '1831', 640, 300, 140, t, P(16, '1831') - 0.1); neonScript(c, 'Michael Faraday', 640, 420, 84, flick(t, P(16, 'michael') - 0.1)); neonText(c, 'THE TRICK', 640, 140, F(44), YL, flick(t, PS(16) + 0.1)); c.restore(); }
    if (t > PS(17) - 0.2) {
      const wOn = up(t, PS(17) - 0.2, 0.3);
      // magnet slides past the wire once, then spins in place
      const tm = P(17, 'magnet') - 0.1, tSpin = P(19, 'spin') - 0.1;
      let mx, ang = 0;
      if (t < tSpin) mx = H.lerp(-200, 640, E.inOut(ph(t, tm, P(18, 'shoves') + 0.2))); else { mx = 640; ang = (t - tSpin) * 5; }
      const passX = (i) => 0;
      c.save(); c.globalAlpha *= wOn;
      const shoveA = E.inOut(ph(t, P(18, 'shoves') - 0.4, P(18, 'shoves') + 0.6)) * 220;
      const stream = Math.max(0, t - tSpin) * 260;
      wireTube(c, 120, 1160, 500, 44, (i) => shoveA + stream + (t > tSpin ? Math.sin(ang + i) * 4 : 0), 20);
      c.restore();
      magnet(c, mx, 330, 300, 90, ang, wOn);
      neonText(c, 'WIRE', 1160, 420, F(32), OR, flick(t, P(17, 'wire') - 0.1), 'right');
      neonText(c, 'ELECTRONS', 300, 590, F(32), CY, flick(t, P(18, 'electrons') - 0.1));
      const pOn = flick(t, Pn(19, 'push', 1) - 0.15);
      if (pOn > 0) { c.save(); c.globalAlpha *= pOn * (1 - ph(t, P(20, 'electricity') - 0.2, P(20, 'electricity'))); neonArrow(c, [[860, 590], [1080, 590]], up(t, Pn(19, 'push', 1) - 0.15, 0.3), PK, 3); neonText(c, 'PUSH', 760, 590, F(36), PK, pOn); c.restore(); }
      slam(c, '= ELECTRICITY', 640, 150, 72, t, P(20, 'electricity') - 0.1);
    }
  });
  fx(P(16, '1831') - 0.1, 'slam'); fx(P(16, 'michael') - 0.1, 'strike'); fx(PS(17) - 0.2, 'whoosh'); fx(P(17, 'magnet') - 0.1, 'zap', { d: 1.2, f0: 200, f1: 600 }); fx(P(18, 'electrons') - 0.1, 'strike', { minor: true }); fx(P(18, 'shoves') - 0.4, 'fizz', { d: 1 }); fx(P(19, 'spin') - 0.1, 'whirl', { d: 3.5 }); fx(Pn(19, 'push', 1) - 0.15, 'zap', { d: 0.3, f0: 300, f1: 1100 }); fx(P(20, 'electricity') - 0.1, 'big');

  scene(21, 22, 'glitch', (c, t) => {
    bgScope(c, t);
    const t0 = PS(21), ang = Math.max(0, t - t0) * 3.2;
    magnet(c, 280, 360, 260, 84, ang, up(t, t0, 0.3));
    neonText(c, 'N / S FLIP', 280, 560, F(40), YL, flick(t, P(21, 'north') - 0.1));
    sineTrace(c, 500, 1140, 360, 150, 3, ang * 0 + 0, ph(t, P(22, 'push') - 0.1, PE(22) - 0.2));
    neonText(c, 'BACK', 1020, 150, F(36), CY, flick(t, P(22, 'back') - 0.1));
    neonText(c, 'FORTH', 1020, 580, F(36), PK, flick(t, P(22, 'forth') - 0.1));
  });
  fx(P(21, 'north') - 0.1, 'strike'); fx(PS(21), 'whirl', { d: 4.5 }); fx(P(22, 'push') - 0.1, 'trace', { d: PE(22) - 0.1 - P(22, 'push') }); fx(P(22, 'back') - 0.1, 'strike', { minor: true }); fx(P(22, 'forth') - 0.1, 'strike', { minor: true });

  scene(23, 25, 'zoom', (c, t) => {
    bgScope(c, t);
    const dim = 1 - 0.75 * up(t, PS(25) - 0.2, 0.4);
    c.save(); c.globalAlpha *= dim;
    slam(c, '60', 260, 300, 150, t, P(23, 'sixty') - 0.1);
    neonText(c, 'TIMES A SECOND · US', 520, 160, F(30), CY, flick(t, P(23, 'second') - 0.1), 'left');
    sineTrace(c, 520, 1140, 260, 60, 6, -t * 12, up(t, P(23, 'sixty'), 0.6), YL);
    slam(c, '50', 260, 560, 150, t, P(24, 'fifty') - 0.1);
    neonText(c, 'MOST OF THE WORLD', 520, 420, F(30), PK, flick(t, P(24, 'world') - 0.1), 'left');
    sineTrace(c, 520, 1140, 520, 60, 5, -t * 10, up(t, P(24, 'fifty'), 0.6), PK);
    c.restore();
    if (t > PS(25) - 0.2) { neonFill(c, '#05010e', 0.5 * up(t, PS(25) - 0.2), () => c.rect(0, 0, W, HH)); slam(c, 'AC', 640, 390, 190, t, P(25, 'alternating') - 0.1); neonScript(c, 'alternating current', 640, 500, 80, flick(t, P(25, 'current') - 0.1)); }
  });
  fx(P(23, 'sixty') - 0.1, 'slam'); fx(P(23, 'second') - 0.1, 'strike', { minor: true }); fx(P(24, 'fifty') - 0.1, 'slam', { g: 0.8 }); fx(P(25, 'alternating') - 0.1, 'big'); fx(P(25, 'current') - 0.1, 'strike');

  // ---- STOP 2: THE VOLTAGE JUMP ----
  scene(26, 27, 'glitch', (c, t) => {
    bgRoad(c, t, { sun: ['#ffffff', '#9ff6ff', '#4ff3ff', '#c86bff', '#d4147f'], sy: 340, ms: 21, speed: 6, top: '#020a1a', mid: '#071c40', low: '#2a0f6e' });
    roadPylons(c, t, 6, -1, CY, YL);
    const g = up(t, PS(27) - 0.1, 0.4);
    if (g > 0) { c.save(); c.globalAlpha *= g; const v = 20000 * E.inOut(ph(t, P(27, 'twenty') - 0.3, P(27, 'thousand'))); odometer(c, 640, 330, v, 'GENERATOR OUTPUT', 'V', 1, 6, 56); c.restore(); }
    card(c, t, 26, 'STOP 2', 'the voltage jump', PS(27) - 0.1);
  });
  cardFx(26); fx(P(27, 'twenty') - 0.3, 'roll', { d: P(27, 'thousand') - P(27, 'twenty') + 0.3 }); fx(P(27, 'thousand'), 'stab', { minor: true });

  scene(28, 31, 'zoom', (c, t) => {
    bgWall(c, t, { col: '255,179,71', top: '#0a0318', low: '#2a0a2e' });
    const tOn = up(t, PS(28), 0.4), hot = up(t, P(29, 'cranks'), 0.4);
    transformer(c, 380, 320, 1.15, 4, 14, t, hot * 0.5, hot, tOn);
    neonText(c, 'FEW TURNS', 220, 520, F(28), OR, tOn); neonText(c, 'MANY TURNS', 560, 520, F(28), OR, tOn);
    neonText(c, 'STEP-UP TRANSFORMER', 380, 620, F(36), CY, flick(t, P(29, 'transformer') - 0.15));
    neonArrow(c, [[40, 320], [160, 320]], up(t, PS(28) + 0.2, 0.3), CY, 3);
    neonArrow(c, [[600, 320], [720, 320]], hot, PK, 3);
    const v = 20000 + (765000 - 20000) * E.inOut(ph(t, P(29, 'cranks'), P(30, 'thousand')));
    odometer(c, 960, 200, v, '', 'V', tOn, 7, 40);
    if (t > P(30, 'thousand')) glint(c, 1150, 160, 70 * Math.sin(ph(t, P(30, 'thousand'), P(30, 'thousand') + 0.5) * Math.PI) + 20, 0.9);
    const tw = flick(t, P(31, 'biggest') - 0.15);
    if (tw > 0) { c.save(); c.globalAlpha *= tw; const tips = tower(c, 960, 690, 0.95, CY, 2); for (const tp of tips) sagLine(c, tp, [1290, tp[1] + 40], 30, PK, 1); c.restore(); neonText(c, 'BIGGEST LINES', 1120, 330, F(28), YL, tw); }
  });
  fx(PS(28) + 0.2, 'zap', { d: 0.3, f0: 300, f1: 700 }); fx(P(29, 'transformer') - 0.15, 'strike'); fx(P(29, 'cranks'), 'roll', { d: P(30, 'thousand') - P(29, 'cranks'), up: 1 }); fx(P(29, 'cranks'), 'hummer', { d: 5 }); fx(P(30, 'thousand'), 'big'); fx(P(31, 'biggest') - 0.15, 'strike');

  scene(32, 35, 'glitch', (c, t) => {
    bgWall(c, t, { col: '92,255,176', top: '#02100c', low: '#0a2a26' });
    const q = 1 - ph(t, PS(33) - 0.2, PS(33) + 0.1);
    if (q > 0) { c.save(); c.globalAlpha *= q; slam(c, 'WHY SO', 640, 270, 110, t, PS(32)); slam(c, 'EXTREME?', 640, 410, 110, t, P(32, 'extreme') - 0.1); c.restore(); }
    const h1 = up(t, P(33, 'garden') - 0.1, 0.4);
    if (h1 > 0) { c.save(); c.globalAlpha *= h1; hose(c, 120, 1160, 250, 70, 90, t, 26); c.restore(); neonText(c, 'GARDEN HOSE', 640, 110, F(44), GR, flick(t, P(33, 'garden') - 0.1)); }
    neonText(c, 'FAT + SLOW', 640, 370, F(40), CY, flick(t, P(34, 'fat') - 0.1));
    const h2 = up(t, P(35, 'thin') - 0.3, 0.4);
    if (h2 > 0) { c.save(); c.globalAlpha *= h2; hose(c, 120, 1160, 500, 18, 1100, t, 14, PK); c.restore(); }
    neonText(c, 'THIN + FAST', 640, 590, F(40), PK, flick(t, P(35, 'fast') - 0.1));
  });
  fx(PS(32), 'slam', { g: 0.7 }); fx(P(32, 'extreme') - 0.1, 'slam'); fx(P(33, 'garden') - 0.1, 'strike'); fx(P(33, 'garden'), 'water', { d: 2.5 }); fx(P(34, 'fat') - 0.1, 'strike', { minor: true }); fx(P(35, 'thin') - 0.3, 'zap', { d: 0.5, f0: 500, f1: 1600 }); fx(P(35, 'fast') - 0.1, 'strike', { minor: true });

  scene(36, 39, 'tiltD', (c, t) => {
    bgRoad(c, t, { sun: ['#fff6a0', '#ff8ad8', '#ff4fd8', '#a03dff', '#5a14af'], sy: 300, sr: 150, ms: 33, speed: 7 });
    roadPylons(c, t, 7, -1, CY, PK); roadPylons(c, t + 3, 7, 1, CY, PK);
    neonText(c, 'SAME WAY', 640, 110, F(48), YL, flick(t, P(36, 'same') - 0.1) * (1 - ph(t, PS(37) - 0.2, PS(37))));
    const gauges = [[230, 'VOLTAGE', P(37, 'up') - 0.15, 0.25, 0.95, CY, 'UP'], [640, 'CURRENT', P(38, 'drops') - 0.15, 0.9, 0.15, PK, 'DOWN'], [1050, 'HEAT LOST', P(39, 'heat') - 0.15, 0.85, 0.12, RD, 'DOWN']];
    const dash = up(t, PS(37) - 0.3, 0.45);
    c.save(); c.translate(0, (1 - dash) * 260);
    gauges.forEach(([x, lab, t0, a, b, col, arrow]) => {
      glassPanel(c, x - 180, 470, 360, 200, H.rgba(col, 0.8));
      neonText(c, lab, x, 515, F(32), col, 1);
      const v = H.lerp(a, b, E.inOut(ph(t, t0, t0 + 0.7)));
      c.fillStyle = 'rgba(255,255,255,0.06)'; c.fillRect(x - 150, 570, 300, 40);
      for (let k = 0; k < 15; k++) { if (k / 15 >= v) break; neonFill(c, col, 0.85, () => c.rect(x - 150 + k * 20 + 2, 572, 16, 36)); }
      neonText(c, arrow, x + 150, 640, F(30), col, flick(t, t0), 'right');
    });
    c.restore();
  });
  fx(P(36, 'same') - 0.1, 'strike', { minor: true }); fx(PS(37) - 0.3, 'dash'); fx(P(37, 'up') - 0.15, 'sweep', { up: 1 }); fx(P(38, 'drops') - 0.15, 'sweep', { up: 0 }); fx(P(39, 'heat') - 0.15, 'sweep', { up: 0 }); fx(P(39, 'less') - 0.1, 'right');

  scene(40, 41, 'glitch', (c, t) => {
    bgSky(c, t, 123, '#7a0a3a');
    slam(c, '5%', 640, 250, 160, t, P(40, 'five') - 0.1);
    const lost = t > P(41, 'heat') - 0.2;
    for (let i = 0; i < 100; i++) {
      const x = 340 + (i % 25) * 24, y = 330 + Math.floor(i / 25) * 24, on = up(t, PS(40) + i * 0.008, 0.2);
      const isLost = i >= 95, col = isLost && lost ? RD : CY;
      neonFill(c, col, on * (isLost && lost ? 0.95 : 0.55), () => c.rect(x, y, 18, 18));
      if (isLost && lost) { const r = H.rng(i); for (let k = 0; k < 3; k++) { const u = ((t * 0.8 + r()) % 1); c.save(); c.globalAlpha *= (1 - u); neonStroke(c, OR, 1, () => { c.moveTo(x + 9, y - u * 70); c.quadraticCurveTo(x + 15, y - u * 70 - 10, x + 9, y - u * 70 - 20); }); c.restore(); } }
    }
    neonText(c, 'LOST AS HEAT', 640, 560, F(44), RD, flick(t, P(41, 'heat') - 0.15));
    neonText(c, 'OF ALL THE POWER', 640, 630, F(30), CY, flick(t, P(40, 'power') - 0.1));
  });
  fx(P(40, 'five') - 0.1, 'big'); fx(PS(40), 'ticks', { d: 0.8, n: 20 }); fx(P(40, 'power') - 0.1, 'strike', { minor: true }); fx(P(41, 'heat') - 0.15, 'wrong');
  // ---- STOP 3: THE STEP BACK DOWN ----
  scene(42, 43, 'glitch', (c, t) => {
    bgWall(c, t, { col: '255,61,90', top: '#12020e', low: '#3a0a2a' });
    const tIn = up(t, PS(43) - 0.1, 0.4);
    const fry = P(43, 'fry') - 0.1, shake = t > fry && t < fry + 0.8 ? Math.sin(t * 90) * 8 * (1 - ph(t, fry, fry + 0.8)) : 0;
    if (tIn > 0) {
      c.save(); c.globalAlpha *= tIn;
      neonText(c, '700,000 V', 640, 150, F(72), PK, flick(t, P(43, 'seven') - 0.1));
      neonArrow(c, [[640, 210], [640, 300]], up(t, fry - 0.25, 0.25), CY, 3);
      toaster(c, 640, 470, 1.15, shake);
      if (t > fry) { spark(c, 560, 330, 120, t, 5, 1 - ph(t, fry + 0.8, fry + 1.4)); spark(c, 740, 360, 90, t, 9, 1 - ph(t, fry + 0.8, fry + 1.4)); }
      c.restore();
      slam(c, 'FRIED', 640, 680, 76, t, P(43, 'instantly') - 0.1);
      if (t > fry && t < fry + 0.2) { c.save(); c.globalCompositeOperation = 'lighter'; c.fillStyle = 'rgba(200,240,255,0.35)'; c.fillRect(0, 0, W, HH); c.restore(); }
    }
    card(c, t, 42, 'STOP 3', 'the step back down', PS(43) - 0.1);
  });
  cardFx(42); fx(P(43, 'seven') - 0.1, 'strike'); fx(P(43, 'fry') - 0.1, 'zapBig'); fx(P(43, 'instantly') - 0.1, 'wrong');

  scene(44, 46, 'zoom', (c, t) => {
    bgRoad(c, t, { sun: ['#fff6a0', '#ffd23f', '#ff8a3d', '#ff3d7f', '#d4147f'], sy: 360, sr: 130, ms: 41, speed: 2, hs: 0.8 });
    const sOn = up(t, PS(44) - 0.1, 0.5), hot = 0.5 + 0.5 * Math.sin(t * 6) * up(t, P(45, 'transformers') - 0.1, 0.3);
    c.save(); c.translate(0, (1 - sOn) * 200); substation(c, 640, 640, 0.95, t, sOn, P(45, 'transformers') - 0.1 < t ? hot : 0); c.restore();
    neonText(c, 'SUBSTATION', 640, 690, F(36), CY, flick(t, P(44, 'substation') - 0.15));
    const v = t < P(45, 'drop') - 0.1 ? 765000 : 7200 + (765000 - 7200) * (1 - E.inOut(ph(t, P(45, 'drop') - 0.1, P(46, 'thousand'))));
    odometer(c, 640, 120, v, '', 'V', up(t, PS(44) + 0.2, 0.4), 7, 40);
    neonText(c, 'A FEW THOUSAND VOLTS', 640, 200, F(30), YL, flick(t, P(46, 'few') - 0.1));
  });
  fx(PS(44) - 0.1, 'riser', { d: 0.5 }); fx(P(44, 'substation') - 0.15, 'strike'); fx(P(45, 'transformers') - 0.1, 'hummer', { d: 3.5 }); fx(P(45, 'drop') - 0.1, 'roll', { d: P(46, 'thousand') - P(45, 'drop') + 0.1, down: 1 }); fx(P(46, 'thousand'), 'stab'); fx(P(46, 'few') - 0.1, 'strike', { minor: true });

  scene(47, 49, 'tiltD', (c, t) => {
    bgRoad(c, t, { top: '#03021a', mid: '#140a40', low: '#3a1a6e', hot: '#8a3dc4', edge: '#ff8ad8', sun: ['#ffffff', '#ffe6f6', '#ffb0e0', '#c86bff', '#5a14af'], sy: 330, sr: 120, ms: 47, speed: 4 });
    // utility poles along the street
    const sp = 8, off = (t * 4) % sp, tops = [];
    for (let z = 50 - off; z > 1.5; z -= sp) { const [x, by] = proj(4.2, 0, z), [, ty] = proj(4.2, 4, z); const s = (by - ty) / 380; c.save(); c.globalAlpha *= cl((52 - z) / 10); pole(c, x, by, s, 1); c.restore(); tops.push([x - 80 * s, by - 366 * s, x + 80 * s]); }
    for (let i = 0; i < tops.length - 1; i++) for (const k of [0, 2]) sagLine(c, [tops[i][k], tops[i][1]], [tops[i + 1][k], tops[i + 1][1]], 8, YL, 0.8);
    neonText(c, 'YOUR STREET', 640, 110, F(44), YL, flick(t, P(47, 'street') - 0.15) * (1 - ph(t, PS(48) - 0.2, PS(48))));
    const big = up(t, P(48, 'transformer') - 0.3, 0.5);
    if (big > 0) {
      c.save(); c.translate(-(1 - big) * 400, 0); pole(c, 250, 720, 1.5, 1, up(t, P(49, 'gray') - 0.1, 0.3)); c.restore();
      neonText(c, 'POLE CAN', 470, 260, F(36), '#d9f2ff', flick(t, P(49, 'can') - 0.1), 'left');
      neonArrow(c, [[460, 260], [390, 260]], up(t, P(49, 'can'), 0.25), '#d9f2ff', 2.5);
      const gb = up(t, P(49, 'green') - 0.15, 0.4);
      if (gb > 0) { c.save(); c.translate((1 - gb) * 400, 0); greenBox(c, 1040, 700, 1.4, 1, 0.5 + 0.5 * Math.sin(t * 5)); c.restore(); neonText(c, 'GREEN BOX', 1040, 470, F(36), GR, flick(t, P(49, 'box') - 0.1)); }
    }
  });
  fx(P(47, 'street') - 0.15, 'strike'); fx(P(48, 'transformer') - 0.3, 'whoosh'); fx(P(49, 'gray') - 0.1, 'hummer', { d: 1.5 }); fx(P(49, 'can') - 0.1, 'strike', { minor: true }); fx(P(49, 'green') - 0.15, 'whoosh', { pan: 0.6 }); fx(P(49, 'box') - 0.1, 'strike', { minor: true });

  scene(50, 52, 'glitch', (c, t) => {
    bgWall(c, t, { col: '255,179,71', top: '#0a0216', low: '#2a0c30' });
    const lit = up(t, P(50, 'house') - 0.1, 0.3);
    house(c, 360, 640, 1.45, t, lit, up(t, PS(50) - 0.1, 0.4));
    neonArrow(c, [[0, 300], [130, 300], [130, 420]], up(t, PS(50), 0.6), YL, 3);
    slam(c, '120 V', 900, 280, 120, t, P(51, 'hundred') - 0.1);
    neonText(c, 'IN THE US', 900, 340, F(34), CY, flick(t, P(51, 'us') - 0.1));
    slam(c, '230 V', 900, 510, 100, t, P(52, 'two') - 0.1);
    neonText(c, 'MUCH OF THE WORLD', 900, 570, F(32), PK, flick(t, P(52, 'world') - 0.1));
  });
  fx(P(50, 'house') - 0.1, 'right'); fx(P(51, 'hundred') - 0.1, 'slam'); fx(P(51, 'us') - 0.1, 'strike', { minor: true }); fx(P(52, 'two') - 0.1, 'slam', { g: 0.8 }); fx(P(52, 'world') - 0.1, 'strike', { minor: true });

  // ---- STOP 4: YOUR WALLS ----
  scene(53, 55, 'glitch', (c, t) => {
    bgWall(c, t, { col: '79,140,255', top: '#020818', low: '#0c1a46' });
    const mOn = up(t, PS(54) - 0.15, 0.45);
    neonArrow(c, [[0, 400], [430, 400]], up(t, PS(54), 0.9), YL, 3, false);
    if (mOn > 0) {
      const kwh = 1204 + Math.max(0, t - P(55, 'counts') + 0.1) * 2.3;
      c.save(); c.translate(0, (1 - mOn) * 300); meter(c, 640, 400, 1.15, kwh, t, mOn); c.restore();
      neonText(c, 'METER', 640, 150, F(48), CY, flick(t, P(54, 'meter') - 0.15));
      neonText(c, 'COUNTS EVERY BIT', 640, 670, F(36), YL, flick(t, P(55, 'counts') - 0.1));
    }
    card(c, t, 53, 'STOP 4', 'your walls', PS(54) - 0.2);
  });
  cardFx(53); fx(PS(54) - 0.15, 'whoosh'); fx(P(54, 'meter') - 0.15, 'strike'); fx(P(55, 'counts') - 0.1, 'ticks', { d: 1.8, n: 8 });

  scene(56, 58, 'zoom', (c, t) => {
    bgWall(c, t, { col: '200,107,255' });
    const trip = up(t, P(57, 'cuts') - 0.1, 0.15);
    breakerPanel(c, 300, 340, 1.1, trip, t, up(t, PS(56) - 0.1, 0.4));
    neonText(c, 'BREAKER PANEL', 300, 640, F(32), CY, flick(t, P(56, 'breaker') - 0.15));
    const hot = up(t, P(57, 'hot') - 0.6, 0.5);
    const outs = [[880, 200], [1040, 360], [880, 520]];
    const run = up(t, P(58, 'cables') - 0.1, 1.2);
    outs.forEach(([x, y], i) => {
      const col = i === 1 && t > P(57, 'too') - 0.4 && t < P(58, 'from') ? H.rgba(H.mix(OR, RD, hot), 1) : OR;
      const pr = i === 1 ? Math.max(run, up(t, PS(57), 0.4)) : run;
      neonArrow(c, [[420, 260 + i * 60], [600, 260 + i * 60], [600, y], [x - 50, y]], pr, col, i === 1 && hot > 0 && t < P(58, 'from') ? 3 + 2 * hot : 2.2, false);
      if (run > 0.6 || (i === 1 && t > PS(57))) outlet(c, x, y, 0.28, {}, i === 1 && run < 0.6 ? up(t, PS(57) + 0.3, 0.3) : up(t, P(58, 'cables') + 0.7, 0.3));
    });
    if (t > P(57, 'hot') - 0.15 && t < P(58, 'from')) neonText(c, 'TOO HOT!', 820, 360, F(40), RD, flick(t, P(57, 'hot') - 0.15), 'right');
    neonText(c, 'EVERY OUTLET', 1000, 660, F(32), YL, flick(t, P(58, 'outlet') - 0.1));
  });
  fx(P(56, 'breaker') - 0.15, 'strike'); fx(P(57, 'cuts') - 0.1, 'clack'); fx(P(57, 'hot') - 0.15, 'wrong'); fx(P(58, 'cables') - 0.1, 'zap', { d: 1.2, f0: 200, f1: 900 }); fx(P(58, 'outlet') - 0.1, 'strike', { minor: true });

  // big outlet, two shots: hot slot, then neutral + ground (camera eases back)
  function bigOutlet(c, t, part) {
    bgWall(c, t, { col: '79,243,255', top: '#05021a', low: '#1a0840' });
    const zs = part === 0 ? H.lerp(0.98, 1.08, E.inOut(ph(t, PS(59), PE(61)))) : H.lerp(1.08, 0.98, E.inOut(ph(t, PS(62) - 0.3, PS(62) + 1.2)));
    c.save(); c.translate(640, 360); c.scale(zs, zs); c.translate(-640, -360);
    const hl = { hot: up(t, P(60, 'hot') - 0.15, 0.25), neutral: part ? up(t, P(62, 'neutral') - 0.15, 0.25) : 0, ground: part ? up(t, P(64, 'ground') - 0.15, 0.25) : 0 };
    outlet(c, 640, 360, 1.2, hl, 1);
    c.restore();
    // labels point at the upper receptacle: hot slot is right, neutral left, ground below
    const ry = 360 - 115 * 1.2 * zs;
    if (part === 0) { neonText(c, 'NOT RANDOM', 640, 60 + 50, F(44), YL, flick(t, P(59, 'random') - 0.15) * (1 - ph(t, PS(60) - 0.2, PS(60)))); }
    neonText(c, 'HOT', 1000, ry - 40, F(56), RD, flick(t, P(60, 'hot') - 0.15), 'left');
    neonArrow(c, [[990, ry - 40], [700 + 36 * 1.2 * zs + 30, ry - 20]], up(t, P(60, 'hot'), 0.25), RD, 2.5);
    if (part === 0) { neonText(c, 'SHORT SLOT', 1000, ry + 20, F(28), '#ffb0b8', flick(t, P(60, 'short') - 0.1), 'left'); neonText(c, 'THE PUSH COMES IN', 1000, ry + 90, F(28), PK, flick(t, P(61, 'push') - 0.1), 'left'); }
    if (part === 1) {
      neonText(c, 'NEUTRAL', 280, ry - 40, F(48), CY, flick(t, P(62, 'neutral') - 0.15), 'right');
      neonArrow(c, [[290, ry - 40], [640 - 36 * 1.2 * zs - 30, ry - 20]], up(t, P(62, 'neutral'), 0.25), CY, 2.5);
      neonScript(c, 'the path back', 170, ry + 30, 54, flick(t, P(63, 'path') - 0.1), -0.05, '#3df3ff');
      neonText(c, 'GROUND', 280, ry + 200, F(48), GR, flick(t, P(64, 'ground') - 0.15), 'right');
      neonArrow(c, [[290, ry + 200], [620, ry + 60 * 1.2 * zs]], up(t, P(64, 'ground'), 0.25), GR, 2.5);
      neonText(c, 'SAFETY EXIT', 170, ry + 260, F(28), GR, flick(t, P(65, 'safety') - 0.1));
    }
  }
  scene(59, 61, 'glitch', (c, t) => bigOutlet(c, t, 0));
  scene(62, 65, 'cut', (c, t) => bigOutlet(c, t, 1));
  fx(P(59, 'random') - 0.15, 'strike'); fx(P(60, 'hot') - 0.15, 'stab'); fx(P(60, 'short') - 0.1, 'strike', { minor: true }); fx(P(61, 'push') - 0.1, 'zap', { d: 0.3, f0: 300, f1: 1000 });
  fx(P(62, 'neutral') - 0.15, 'stab', { notes: ['E4', 'B4'] }); fx(P(63, 'path') - 0.1, 'strike', { minor: true }); fx(P(64, 'ground') - 0.15, 'stab', { notes: ['G4', 'D5'] }); fx(P(65, 'safety') - 0.1, 'right');

  // ---- THE WILDEST PART ----
  scene(66, 67, 'glitch', (c, t) => {
    bgWall(c, t, { col: '255,79,216', top: '#03010f', low: '#20063a' });
    slam(c, 'THE WILDEST PART', 640, 150, 64, t, P(66, 'wildest') - 0.15);
    const fl = P(67, 'flip') - 0.05, lt = P(67, 'light') - 0.1;
    lightSwitch(c, 400, 420, 1.1, up(t, fl, 0.12), up(t, PS(67) - 0.3, 0.3));
    bulb(c, 860, 360, 1.15, t > lt ? 1 : 0, up(t, PS(67) - 0.3, 0.3));
    neonText(c, 'INSTANTLY', 860, 660, F(44), YL, flick(t, P(67, 'instantly') - 0.1));
  });
  fx(P(66, 'wildest') - 0.15, 'slam'); fx(P(67, 'flip') - 0.05, 'clack'); fx(P(67, 'light') - 0.1, 'right'); fx(P(67, 'instantly') - 0.1, 'strike', { minor: true });

  scene(68, 70, 'zoom', (c, t) => {
    bgWall(c, t, { col: '255,179,71', top: '#0c0206', low: '#2a0a16' });
    const amp = H.lerp(3, 16, up(t, P(70, 'wiggling') - 0.1, 0.4));
    wireTube(c, 60, 1220, 300, 130, (i) => Math.sin(t * 9 + i * 1.7) * amp + Math.max(0, t - PS(68)) * 1.5, 22);
    neonText(c, 'THE WIRE, UP CLOSE', 640, 110, F(36), OR, up(t, PS(68), 0.3) * (1 - ph(t, P(68, 'barely') - 0.3, P(68, 'barely') - 0.1)));
    neonText(c, 'ELECTRONS BARELY MOVE', 640, 110, F(44), CY, flick(t, P(68, 'barely') - 0.1));
    const sOn = up(t, P(69, 'snail') - 0.3, 0.4);
    if (sOn > 0) { c.save(); c.globalAlpha *= sOn; snail(c, 260 + (t - P(69, 'snail')) * 6, 620, 0.75, t); c.restore(); }
    neonText(c, 'SLOWER THAN A SNAIL', 800, 590, F(36), GR, flick(t, P(69, 'snail') - 0.15));
    neonText(c, 'JUST WIGGLING', 800, 650, F(32), YL, flick(t, P(70, 'wiggling') - 0.1));
  });
  fx(P(68, 'barely') - 0.1, 'strike'); fx(P(69, 'snail') - 0.15, 'strike'); fx(P(70, 'wiggling') - 0.1, 'wiggle', { d: 1.6 });

  scene(71, 72, 'glitch', (c, t) => {
    bgRoad(c, t, { speed: 30, sun: ['#ffffff', '#9ff6ff', '#4ff3ff', '#ff4fd8', '#d4147f'], sy: 360, ms: 71 });
    // a live wire runs down the road; the push races along it
    const wire = (z) => proj(0.9, 0.35, z);
    neonStroke(c, OR, 1.6, () => { const [a, b] = wire(60), [d, e] = wire(0.6); c.moveTo(a, b); c.lineTo(d, e); });
    for (let k = 0; k < 3; k++) { const u = ((t - PS(71)) * 2.4 + k / 3) % 1; if (t < PS(71)) break; const z = H.lerp(50, 0.7, E.in(u)); const [px, py] = wire(z), R = 8 + 200 / z; c.save(); c.globalCompositeOperation = 'lighter'; const g = c.createRadialGradient(px, py, 0, px, py, R); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, 'rgba(79,243,255,0.8)'); g.addColorStop(1, 'rgba(79,243,255,0)'); c.fillStyle = g; c.fillRect(px - R, py - R, 2 * R, 2 * R); c.restore(); }
    neonText(c, 'THE PUSH RACES', 640, 610, F(44), PK, flick(t, P(71, 'races') - 0.15));
    neonText(c, 'CLOSE TO THE', 640, 95, F(36), YL, flick(t, P(72, 'close') - 0.1));
    slam(c, 'SPEED OF LIGHT', 640, 190, 72, t, P(72, 'speed') - 0.1);
  });
  fx(PS(71), 'whoosh', { d: 0.4 }); fx(PS(71) + 0.42, 'whoosh', { d: 0.4 }); fx(P(71, 'races') - 0.15, 'strike'); fx(P(72, 'close') - 0.1, 'strike', { minor: true }); fx(P(72, 'speed') - 0.1, 'big');

  scene(73, 77, 'tiltU', (c, t) => {
    bgRoad(c, t, { sky: (c2, tt) => magSky(c2, tt, 100, 300), top: '#020118', hot: '#7a1a9e', edge: '#c84fff', speed: 14 });
    roadPylons(c, t, 14, -1, CY, PK); roadPylons(c, t + 1, 14, 1, CY, PK);
    const q = 1 - ph(t, PS(75) - 0.3, PS(75));
    if (q > 0) { c.save(); c.globalAlpha *= q; neonText(c, 'LEFT THE MAGNET', 640, 110, F(44), CY, flick(t, P(73, 'magnet') - 0.15)); neonText(c, 'A SPLIT SECOND AGO', 640, 600, F(44), YL, flick(t, P(74, 'split') - 0.1)); c.restore(); }
    if (t > PS(75) - 0.3) {
      const t1 = P(75, 'twenty'), t2 = P(75, 'seven'), t3 = P(75, 'sixtyfive') + 0.4, t4 = P(76, 'down') - 0.1, t5 = P(76, 'wall');
      let v = 20000 * E.inOut(ph(t, t1 - 0.2, t1 + 0.4));
      if (t > t2) v = 20000 + 745000 * E.inOut(ph(t, t2, t3));
      if (t > t4) v = 120 + (765000 - 120) * (1 - E.inOut(ph(t, t4, t5)));
      odometer(c, 640, 120, v, '', 'V', up(t, PS(75) - 0.3, 0.3), 7, 44);
      neonScript(c, 'all in the blink of an eye', 640, 600, 84, flick(t, P(77, 'blink') - 0.15));
    }
  });
  fx(P(73, 'magnet') - 0.15, 'strike'); fx(P(74, 'split') - 0.1, 'strike', { minor: true }); fx(P(75, 'twenty') - 0.2, 'roll', { d: 0.6 }); fx(P(75, 'seven'), 'roll', { d: P(75, 'sixtyfive') + 0.4 - P(75, 'seven'), up: 1 }); fx(P(76, 'down') - 0.1, 'roll', { d: P(76, 'wall') - P(76, 'down') + 0.1, down: 1 }); fx(P(77, 'blink') - 0.15, 'take');

  scene(78, 79, 'glitch', (c, t) => {
    bgSky(c, t, 222, '#1a3a8a');
    globe(c, 640, 380, 170, t * 2.2, up(t, PS(78), 0.4));
    // little runner standing on top, clinging on
    neonStroke(c, YL, 1.6, () => { const x = 640, y = 205; c.moveTo(x + 9, y - 32); c.arc(x, y - 32, 9, 0, 7); c.moveTo(x, y - 22); c.lineTo(x, y); c.moveTo(x, y); c.lineTo(x - 10, y + 6); c.moveTo(x, y); c.lineTo(x + 10, y + 6); c.moveTo(x, y - 16); c.lineTo(x - 14, y - 26 + Math.sin(t * 8) * 4); c.moveTo(x, y - 16); c.lineTo(x + 14, y - 26 - Math.sin(t * 8) * 4); });
    neonArrow(c, Array.from({ length: 20 }, (_, k) => [640 + Math.cos(-2.6 + k * 0.1) * 220, 380 + Math.sin(-2.6 + k * 0.1) * 220 * 0.35 + 100]), up(t, P(78, 'spinning') - 0.1, 0.5), PK, 2.5);
    neonText(c, 'NEXT TIME', 640, 90, F(44), CY, flick(t, PS(78)));
    slam(c, "WHY DON'T WE FLY OFF?", 640, 650, 56, t, P(79, 'fly') - 0.15);
  });
  fx(PS(78), 'strike'); fx(P(78, 'spinning') - 0.1, 'whirl', { d: 2 }); fx(P(79, 'fly') - 0.15, 'big');

  const CH = [[7, 'STOP 1 · POWER PLANT'], [26, 'STOP 2 · VOLTAGE JUMP'], [42, 'STOP 3 · STEP DOWN'], [53, 'STOP 4 · YOUR WALLS'], [66, 'THE WILDEST PART'], [78, 'NEXT TIME']];
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
        case 'take': strike(t, 1, 0.2); k.tone(t, { f: 'B4', type: 'triangle', dur: 0.2, gain: 0.1, verb: 0.3 }); k.tone(t + 0.18, { f: 'C5', type: 'triangle', dur: 1.2, gain: 0.12, verb: 0.4 }); k.tone(t + 0.18, { f: 'C3', type: 'sawtooth', dur: 1.2, gain: 0.06, a: 0.02, hold: 0.4, filter: 'lowpass', f2: 700 }); break;
      }
    });
  }

  // ================= THUMBNAIL =================
  function thumbnail(ctx, Wd, Hd) {
    const t = 4.2;
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    bgRoad(ctx, t, { sky: (c2, tt) => { sun(c2, 640, 352, 150, tt, ['#9ff6ff', '#4ff3ff', '#3d7fd6', '#8a3dff', '#d4147f']); }, top: '#020118', hot: '#7a1a9e', edge: '#c84fff', speed: 9 });
    roadPylons(ctx, t, 9, -1, CY, PK); roadPylons(ctx, t + 1.5, 9, 1, CY, PK);
    ctx.fillStyle = 'rgba(5,1,20,0.35)'; ctx.fillRect(0, 0, W, HH);
    outlet(ctx, 1080, 380, 0.98, { hot: 1, neutral: 0.8, ground: 0.6 }, 1);
    spark(ctx, 1110, 250, 110, 2.0, 3, 1);
    chromeTitle(ctx, '765,000', 470, 300, 140);
    chromeTitle(ctx, 'VOLTS', 470, 470, 140);
    neonScript(ctx, 'to your outlet?!', 500, 590, 92, 1, -0.05);
    glint(ctx, 820, 190, 80, 0.95);
    ctx.restore();
    finish(ctx, t);
  }

  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s - 0.05 ? j : a), 0) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();
