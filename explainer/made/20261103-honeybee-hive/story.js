// ================= Cut-Paper Diorama, 16:9: "How does a honeybee hive work?" =================
// Long explainer. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  // ---------- BEATS: voiceover phrases (phrases.json, Kokoro am_michael) ----------
  const PH = [{"s":0.25,"e":2.48,"text":"Sixty thousand bees, no boss,","words":[["sixty",0.25],["thousand",0.74],["bees",1.51],["no",1.9],["boss",2.09]]},{"s":2.78,"e":4.56,"text":"and you'd never guess how they run it.","words":[["and",2.78],["youd",2.97],["never",3.21],["guess",3.52],["how",3.82],["they",4.01],["run",4.25],["it",4.43]]},{"s":5.11,"e":6.98,"text":"This hive builds perfect rooms,","words":[["this",5.11],["hive",5.39],["builds",5.68],["perfect",6.11],["rooms",6.62]]},{"s":7.28,"e":8.96,"text":"runs its own heating and cooling,","words":[["runs",7.28],["its",7.53],["own",7.71],["heating",7.9],["and",8.34],["cooling",8.53]]},{"s":9.26,"e":10.88,"text":"and shares maps by dancing.","words":[["and",9.26],["shares",9.48],["maps",9.92],["by",10.22],["dancing",10.36]]},{"s":11.43,"e":13.85,"text":"So how does a honeybee hive actually work?","words":[["so",11.43],["how",11.57],["does",11.78],["a",12.07],["honeybee",12.14],["hive",12.71],["actually",12.99],["work",13.56]]},{"s":14.4,"e":15.76,"text":"Let's start with the queen.","words":[["lets",14.4],["start",14.66],["with",14.98],["the",15.24],["queen",15.44]]},{"s":16.31,"e":17.61,"text":"She sounds like the boss,","words":[["she",16.31],["sounds",16.5],["like",16.89],["the",17.15],["boss",17.35]]},{"s":17.91,"e":19.39,"text":"but she doesn't give orders.","words":[["but",17.91],["she",18.11],["doesnt",18.31],["give",18.72],["orders",18.99]]},{"s":19.94,"e":21.59,"text":"Her real job is eggs.","words":[["her",19.94],["real",20.25],["job",20.66],["is",20.97],["eggs",21.18]]},{"s":22.14,"e":25.24,"text":"At her peak, she can lay up to fifteen hundred a day.","words":[["at",22.14],["her",22.3],["peak",22.53],["she",22.84],["can",23.07],["lay",23.3],["up",23.54],["to",23.69],["fifteen",23.84],["hundred",24.39],["a",24.93],["day",25.01]]},{"s":25.79,"e":27.57,"text":"That's about one egg every minute,","words":[["thats",25.79],["about",26.12],["one",26.45],["egg",26.65],["every",26.84],["minute",27.17]]},{"s":27.87,"e":29.25,"text":"all day and all night.","words":[["all",27.87],["day",28.11],["and",28.36],["all",28.6],["night",28.84]]},{"s":29.8,"e":31.88,"text":"Around her are a few hundred males,","words":[["around",29.8],["her",30.24],["are",30.46],["a",30.69],["few",30.76],["hundred",30.98],["males",31.5]]},{"s":32.18,"e":33.16,"text":"called drones.","words":[["called",32.18],["drones",32.67]]},{"s":33.71,"e":35.83,"text":"They're only here to mate with a new queen.","words":[["theyre",33.71],["only",34.1],["here",34.35],["to",34.61],["mate",34.74],["with",34.99],["a",35.25],["new",35.31],["queen",35.51]]},{"s":36.38,"e":38.11,"text":"And when the cold comes in fall,","words":[["and",36.38],["when",36.59],["the",36.86],["cold",37.07],["comes",37.35],["in",37.7],["fall",37.83]]},{"s":38.41,"e":40.28,"text":"the workers shove them out the door.","words":[["the",38.41],["workers",38.6],["shove",39.05],["them",39.38],["out",39.63],["the",39.83],["door",40.02]]},{"s":40.83,"e":42.45,"text":"Everyone else is a worker,","words":[["everyone",40.83],["else",41.44],["is",41.75],["a",41.91],["worker",41.99]]},{"s":42.75,"e":44.42,"text":"and every worker is female.","words":[["and",42.75],["every",42.98],["worker",43.36],["is",43.81],["female",43.96]]},{"s":44.97,"e":48.41,"text":"A queen and a worker can start as the same kind of egg.","words":[["a",44.97],["queen",45.05],["and",45.46],["a",45.7],["worker",45.78],["can",46.28],["start",46.52],["as",46.93],["the",47.1],["same",47.34],["kind",47.67],["of",48.0],["egg",48.16]]},{"s":48.96,"e":50.26,"text":"The difference is food.","words":[["the",48.96],["difference",49.16],["is",49.85],["food",49.99]]},{"s":50.81,"e":53.39,"text":"A future queen gets loads of royal jelly,","words":[["a",50.81],["future",50.89],["queen",51.36],["gets",51.75],["loads",52.06],["of",52.45],["royal",52.61],["jelly",53.0]]},{"s":53.69,"e":55.41,"text":"and a worker gets far less.","words":[["and",53.69],["a",53.94],["worker",54.02],["gets",54.51],["far",54.84],["less",55.08]]},{"s":55.96,"e":58.98,"text":"Now, a summer worker only lives about six weeks,","words":[["now",55.96],["a",56.2],["summer",56.28],["worker",56.75],["only",57.23],["lives",57.55],["about",57.94],["six",58.34],["weeks",58.58]]},{"s":59.28,"e":61.64,"text":"and she changes careers the whole way through.","words":[["and",59.28],["she",59.46],["changes",59.65],["careers",60.08],["the",60.52],["whole",60.71],["way",61.02],["through",61.2]]},{"s":62.19,"e":63.64,"text":"Day one, she's a cleaner,","words":[["day",62.19],["one",62.43],["shes",62.67],["a",62.99],["cleaner",63.07]]},{"s":63.94,"e":65.27,"text":"polishing her own cell.","words":[["polishing",63.94],["her",64.57],["own",64.78],["cell",64.99]]},{"s":65.82,"e":67.58,"text":"Around day five, she's a nurse,","words":[["around",65.82],["day",66.28],["five",66.51],["shes",66.81],["a",67.12],["nurse",67.19]]},{"s":67.88,"e":69.07,"text":"feeding the babies.","words":[["feeding",67.88],["the",68.4],["babies",68.62]]},{"s":69.62,"e":73.12,"text":"Around day twelve, wax glands on her belly switch on,","words":[["around",69.62],["day",70.12],["twelve",70.37],["wax",70.87],["glands",71.12],["on",71.62],["her",71.78],["belly",72.03],["switch",72.45],["on",72.95]]},{"s":73.42,"e":74.71,"text":"so she turns builder.","words":[["so",73.42],["she",73.57],["turns",73.8],["builder",74.18]]},{"s":75.26,"e":77.91,"text":"Around day fifteen, she can guard the door.","words":[["around",75.26],["day",75.73],["fifteen",75.96],["she",76.51],["can",76.74],["guard",76.98],["the",77.36],["door",77.6]]},{"s":78.46,"e":80.02,"text":"And after about three weeks,","words":[["and",78.46],["after",78.66],["about",79.0],["three",79.34],["weeks",79.68]]},{"s":80.32,"e":81.99,"text":"she finally goes outside,","words":[["she",80.32],["finally",80.56],["goes",81.12],["outside",81.43]]},{"s":82.29,"e":84.86,"text":"to spend the rest of her life hunting flowers.","words":[["to",82.29],["spend",82.43],["the",82.78],["rest",82.99],["of",83.26],["her",83.4],["life",83.61],["hunting",83.89],["flowers",84.37]]},{"s":85.41,"e":87.14,"text":"Wax is seriously expensive.","words":[["wax",85.41],["is",85.64],["seriously",85.79],["expensive",86.46]]},{"s":87.69,"e":89.59,"text":"It takes about eight pounds of honey,","words":[["it",87.69],["takes",87.82],["about",88.14],["eight",88.45],["pounds",88.77],["of",89.15],["honey",89.27]]},{"s":89.89,"e":91.41,"text":"to make one pound of wax.","words":[["to",89.89],["make",90.05],["one",90.37],["pound",90.61],["of",91.01],["wax",91.17]]},{"s":91.96,"e":93.91,"text":"So the hive can't waste a drop.","words":[["so",91.96],["the",92.13],["hive",92.38],["cant",92.72],["waste",93.06],["a",93.49],["drop",93.57]]},{"s":94.46,"e":95.76,"text":"Circles leave gaps.","words":[["circles",94.46],["leave",95.03],["gaps",95.43]]},{"s":96.31,"e":97.86,"text":"Squares and triangles fit,","words":[["squares",96.31],["and",96.8],["triangles",97.01],["fit",97.65]]},{"s":98.16,"e":99.59,"text":"but they use more wall.","words":[["but",98.16],["they",98.4],["use",98.71],["more",98.95],["wall",99.27]]},{"s":100.14,"e":101.99,"text":"Hexagons give you the most room,","words":[["hexagons",100.14],["give",100.71],["you",100.99],["the",101.2],["most",101.42],["room",101.7]]},{"s":102.29,"e":103.41,"text":"for the least wax.","words":[["for",102.29],["the",102.53],["least",102.77],["wax",103.17]]},{"s":103.96,"e":105.99,"text":"People suspected that for centuries,","words":[["people",103.96],["suspected",104.35],["that",104.94],["for",105.21],["centuries",105.4]]},{"s":106.29,"e":110.01,"text":"but a mathematician only proved it in nineteen ninety-nine.","words":[["but",106.29],["a",106.52],["mathematician",106.6],["only",107.58],["proved",107.89],["it",108.34],["in",108.49],["nineteen",108.64],["ninetynine",109.25]]},{"s":110.56,"e":113.24,"text":"Bees got there first, with no math at all.","words":[["bees",110.56],["got",110.89],["there",111.14],["first",111.56],["with",111.98],["no",112.32],["math",112.49],["at",112.82],["all",112.99]]},{"s":113.79,"e":115.68,"text":"Now, the coolest trick in the hive.","words":[["now",113.79],["the",114.0],["coolest",114.21],["trick",114.7],["in",115.05],["the",115.19],["hive",115.4]]},{"s":116.23,"e":118.79,"text":"A forager finds flowers a long way off.","words":[["a",116.23],["forager",116.31],["finds",116.89],["flowers",117.3],["a",117.88],["long",117.96],["way",118.29],["off",118.54]]},{"s":119.34,"e":120.88,"text":"How does she tell her sisters,","words":[["how",119.34],["does",119.53],["she",119.79],["tell",119.98],["her",120.23],["sisters",120.43]]},{"s":121.18,"e":123.01,"text":"in the pitch dark, with no words?","words":[["in",121.18],["the",121.32],["pitch",121.54],["dark",121.91],["with",122.21],["no",122.5],["words",122.65]]},{"s":123.56,"e":124.45,"text":"She dances.","words":[["she",123.56],["dances",123.86]]},{"s":125.0,"e":126.53,"text":"She runs in a straight line,","words":[["she",125.0],["runs",125.21],["in",125.48],["a",125.62],["straight",125.69],["line",126.25]]},{"s":126.83,"e":127.96,"text":"shaking her body,","words":[["shaking",126.83],["her",127.39],["body",127.63]]},{"s":128.26,"e":129.1,"text":"loops back,","words":[["loops",128.26],["back",128.73]]},{"s":129.4,"e":130.47,"text":"and does it again.","words":[["and",129.4],["does",129.63],["it",129.94],["again",130.09]]},{"s":131.02,"e":133.27,"text":"The angle of that run is the direction.","words":[["the",131.02],["angle",131.24],["of",131.6],["that",131.74],["run",132.04],["is",132.25],["the",132.4],["direction",132.62]]},{"s":133.82,"e":135.84,"text":"Straight up means fly toward the sun.","words":[["straight",133.82],["up",134.36],["means",134.49],["fly",134.83],["toward",135.03],["the",135.43],["sun",135.63]]},{"s":136.39,"e":137.96,"text":"Sixty degrees to the left,","words":[["sixty",136.39],["degrees",136.76],["to",137.28],["the",137.43],["left",137.66]]},{"s":138.26,"e":140.41,"text":"means sixty degrees left of the sun.","words":[["means",138.26],["sixty",138.63],["degrees",139.0],["left",139.52],["of",139.82],["the",139.96],["sun",140.19]]},{"s":140.96,"e":142.96,"text":"And the waggle's length is the distance.","words":[["and",140.96],["the",141.15],["waggles",141.33],["length",141.77],["is",142.15],["the",142.27],["distance",142.46]]},{"s":143.51,"e":145.68,"text":"A waggle of about two and a half seconds,","words":[["a",143.51],["waggle",143.57],["of",143.98],["about",144.12],["two",144.46],["and",144.66],["a",144.87],["half",144.94],["seconds",145.21]]},{"s":145.98,"e":148.55,"text":"means flowers over a mile and a half away.","words":[["means",145.98],["flowers",146.37],["over",146.92],["a",147.23],["mile",147.3],["and",147.61],["a",147.85],["half",147.93],["away",148.24]]},{"s":149.1,"e":151.45,"text":"Cracking that code won Karl von Frisch,","words":[["cracking",149.1],["that",149.69],["code",149.98],["won",150.27],["karl",150.5],["von",150.79],["frisch",151.01]]},{"s":151.75,"e":154.39,"text":"a Nobel Prize in nineteen seventy-three.","words":[["a",151.75],["nobel",151.83],["prize",152.23],["in",152.63],["nineteen",152.79],["seventythree",153.43]]},{"s":154.94,"e":156.25,"text":"The babies are picky.","words":[["the",154.94],["babies",155.17],["are",155.63],["picky",155.86]]},{"s":156.8,"e":159.91,"text":"They need to stay close to ninety-five degrees Fahrenheit.","words":[["they",156.8],["need",157.06],["to",157.32],["stay",157.45],["close",157.7],["to",158.03],["ninetyfive",158.16],["degrees",158.81],["fahrenheit",159.26]]},{"s":160.46,"e":161.31,"text":"Too cold?","words":[["too",160.46],["cold",160.83]]},{"s":161.86,"e":163.9,"text":"Workers shiver their flight muscles,","words":[["workers",161.86],["shiver",162.32],["their",162.72],["flight",163.05],["muscles",163.44]]},{"s":164.2,"e":165.24,"text":"without flapping,","words":[["without",164.2],["flapping",164.69]]},{"s":165.54,"e":167.3,"text":"and turn into tiny heaters.","words":[["and",165.54],["turn",165.78],["into",166.1],["tiny",166.42],["heaters",166.74]]},{"s":167.85,"e":168.66,"text":"Too hot?","words":[["too",167.85],["hot",168.26]]},{"s":169.21,"e":170.43,"text":"They carry in water,","words":[["they",169.21],["carry",169.52],["in",169.9],["water",170.05]]},{"s":170.73,"e":171.95,"text":"spread it on the comb,","words":[["spread",170.73],["it",171.16],["on",171.3],["the",171.45],["comb",171.66]]},{"s":172.25,"e":173.75,"text":"and fan it with their wings.","words":[["and",172.25],["fan",172.45],["it",172.66],["with",172.79],["their",173.07],["wings",173.41]]},{"s":174.3,"e":176.75,"text":"As it evaporates, the hive cools down.","words":[["as",174.3],["it",174.47],["evaporates",174.63],["the",175.45],["hive",175.69],["cools",176.02],["down",176.43]]},{"s":177.3,"e":178.59,"text":"That's air conditioning,","words":[["thats",177.3],["air",177.63],["conditioning",177.82]]},{"s":178.89,"e":180.09,"text":"powered by bees.","words":[["powered",178.89],["by",179.54],["bees",179.72]]},{"s":180.64,"e":182.69,"text":"And in winter, they don't hibernate.","words":[["and",180.64],["in",180.86],["winter",181.0],["they",181.44],["dont",181.74],["hibernate",182.03]]},{"s":183.24,"e":185.37,"text":"Below about fifty-seven degrees,","words":[["below",183.24],["about",183.64],["fiftyseven",184.03],["degrees",184.82]]},{"s":185.67,"e":187.93,"text":"they pull into a tight ball around the queen,","words":[["they",185.67],["pull",185.92],["into",186.17],["a",186.42],["tight",186.49],["ball",186.8],["around",187.05],["the",187.43],["queen",187.62]]},{"s":188.23,"e":189.86,"text":"and burn honey to make heat.","words":[["and",188.23],["burn",188.45],["honey",188.75],["to",189.12],["make",189.27],["heat",189.56]]},{"s":190.41,"e":192.3,"text":"That's why they store all that honey.","words":[["thats",190.41],["why",190.74],["they",190.93],["store",191.19],["all",191.52],["that",191.72],["honey",191.98]]},{"s":192.85,"e":194.2,"text":"It's their winter fuel.","words":[["its",192.85],["their",193.08],["winter",193.45],["fuel",193.9]]},{"s":194.75,"e":196.63,"text":"So no single bee knows the plan.","words":[["so",194.75],["no",194.9],["single",195.05],["bee",195.5],["knows",195.73],["the",196.11],["plan",196.33]]},{"s":197.18,"e":199.33,"text":"Each one just follows simple rules.","words":[["each",197.18],["one",197.48],["just",197.7],["follows",198.0],["simple",198.52],["rules",198.96]]},{"s":199.88,"e":201.66,"text":"But put sixty thousand together,","words":[["but",199.88],["put",200.08],["sixty",200.28],["thousand",200.61],["together",201.13]]},{"s":201.96,"e":204.89,"text":"and you get something that acts like one giant animal.","words":[["and",201.96],["you",202.16],["get",202.36],["something",202.56],["that",203.16],["acts",203.42],["like",203.69],["one",203.96],["giant",204.16],["animal",204.49]]},{"s":205.44,"e":208.25,"text":"Next up, why does cilantro taste like soap,","words":[["next",205.44],["up",205.77],["why",205.93],["does",206.18],["cilantro",206.51],["taste",207.18],["like",207.59],["soap",207.92]]},{"s":208.55,"e":209.58,"text":"to some people?","words":[["to",208.55],["some",208.72],["people",209.06]]}];
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
  // ================= honeybee sprites (all cut paper, cached) =================
  const C = { ink: '#2b2d5a', red: '#d9473b', gold: '#f2b545', honey: '#e8a23a', amber: '#c9791f', teal: '#58b0a6', coral: '#e8604a', cream: '#f3ecdc', card: '#fbf6ea', wax: '#f6cf6a', waxD: '#e9b24a', dark: '#2b2033', brood: '#7a4a24', broodD: '#4a2c18', sky: '#86bccd', blue: '#3d6fa8', leaf: '#5fae6a', leafD: '#3d8a5a', pink: '#e8839a', white: '#fbf6ea', purple: '#7c5aa6' };
  const PAL_M = { sky: ['#8fd0e0', '#e3f1cf'], sun: ['#f0c95a', '#f6da78', '#fbeeb0'], sunX: 1040, sunY: 150, far: '#9cc48e', mid: '#74ad74', trees: '#4f8f62', ground: '#5fa35f', fore: '#2f6b4a' };
  const PAL_G = { sky: ['#f4b768', '#fbe0a0'], sun: ['#e9845b', '#f3ad62', '#f8d891'], sunX: 1060, sunY: 170, far: '#c9a35a', mid: '#a58a4e', trees: '#6f7a44', ground: '#7d8a48', fore: '#3d5a30' };
  const hexPts = (cx, cy, r) => { const o = []; for (let a = 0; a < 6; a++) { const an = Math.PI / 6 + a * Math.PI / 3; o.push([cx + Math.cos(an) * r, cy + Math.sin(an) * r]); } return o; };
  // a full wall of comb: backing sheet with hexagon cells cut on top
  const comb = (key, back, cell, r = 62, deep) => cache('comb' + key, () => {
    const Cv = H.layer(W, HH), c = Cv.getContext('2d');
    c.drawImage(paperize(W, HH, (x) => { x.fillStyle = back; x.fillRect(0, 0, W, HH); }, { rim: false, seed: 4 }), 0, 0);
    shadowDraw(c, paperize(W, HH, (x) => { x.fillStyle = cell; for (let j = -1; j < HH / (r * 1.5) + 2; j++) for (let i = -1; i < W / (r * 1.73) + 2; i++) { const cx = i * r * 1.76 + (j % 2 ? r * 0.88 : 0), cy = j * r * 1.52; x.beginPath(); poly(x, hexPts(cx, cy, r - 7)); x.fill(); } }, { seed: 5 }), 0, 0, deep ?? 0.7, 0.35);
    return Cv;
  });
  const legs = (x, ox, oy, s = 1) => { x.strokeStyle = C.dark; x.lineWidth = 6 * s; x.lineCap = 'round'; x.lineJoin = 'round'; [[-22, 26, -34, 62], [4, 30, -2, 66], [28, 28, 44, 62]].forEach(([a, b, c0, d]) => { x.beginPath(); x.moveTo(ox + a * s, oy + 8 * s); x.lineTo(ox + (a + c0) * 0.5 * s, oy + b * s); x.lineTo(ox + c0 * s, oy + d * s); x.stroke(); }); };
  const beeBody = (kind) => cache('bb' + kind, () => {
    const r = H.rng(1800 + kind.length), q = kind === 'queen', dr = kind === 'drone';
    const ax = q ? 180 : 150, arx = q ? 134 : dr ? 88 : 84, ary = q ? 48 : dr ? 62 : 52, tx = q ? 322 : 252, ty = 110, hx = q ? 392 : dr ? 322 : 318, hr = dr ? 42 : 34, w = q ? 470 : 390;
    return compose(w, 220, [
      [(x) => { legs(x, tx, ty + 10); }, 0.1],
      [(x) => { x.fillStyle = C.gold; x.beginPath(); poly(x, ellPts(r, ax, ty, arx, ary)); x.fill(); x.save(); x.beginPath(); x.ellipse(ax, ty, arx, ary, 0, 0, TAU); x.clip(); x.fillStyle = C.dark; for (let k = -2; k <= 2; k++) x.fillRect(ax + k * arx * 0.4 - arx * 0.09, ty - ary - 4, arx * 0.18, ary * 2 + 8); x.restore(); if (!dr) { x.fillStyle = C.dark; x.beginPath(); poly(x, [[ax - arx + 6, ty - 8], [ax - arx - 22, ty], [ax - arx + 6, ty + 8]]); x.fill(); } }, 0.3],
      [(x) => { x.fillStyle = '#a06a2a'; x.beginPath(); poly(x, circPts(r, tx, ty, 44, 8, 1.6)); x.fill(); x.fillStyle = '#c28a3e'; for (let k = 0; k < 16; k++) { const a = r() * TAU, d = r() * 32, xx = tx + Math.cos(a) * d, yy = ty + Math.sin(a) * d; x.beginPath(); poly(x, [[xx - 5, yy + 5], [xx, yy - 8], [xx + 5, yy + 5]]); x.fill(); } }, 0.3],
      [(x) => { x.strokeStyle = C.dark; x.lineWidth = 6; x.lineCap = 'round'; x.beginPath(); x.moveTo(hx + 8, ty - hr + 6); x.quadraticCurveTo(hx + 30, ty - hr - 26, hx + 52, ty - hr - 16); x.moveTo(hx + 18, ty - hr + 10); x.quadraticCurveTo(hx + 44, ty - hr - 14, hx + 60, ty - hr + 2); x.stroke(); }, 0.1],
      [(x) => { x.fillStyle = C.dark; x.beginPath(); poly(x, circPts(r, hx, ty, hr, 9, 0.5)); x.fill(); const ex = hx + (dr ? 12 : 14), er = dr ? 24 : 13; x.fillStyle = C.white; x.beginPath(); x.arc(ex, ty - (dr ? 8 : 8), er, 0, TAU); x.fill(); x.fillStyle = '#20182a'; x.beginPath(); x.arc(ex + er * 0.35, ty - 8, er * 0.5, 0, TAU); x.fill(); }, 0.3],
    ]);
  });
  const beeWing = () => cache('wing', () => paperize(180, 100, (x) => { x.fillStyle = 'rgba(236,246,250,0.94)'; x.beginPath(); x.ellipse(92, 50, 84, 40, 0, 0, TAU); x.fill(); x.strokeStyle = 'rgba(90,120,140,0.55)'; x.lineWidth = 2.5; x.beginPath(); x.moveTo(10, 50); x.lineTo(160, 34); x.moveTo(60, 44); x.lineTo(120, 72); x.stroke(); }, { seed: 19, hi: 0.2 }));
  const crown = () => cache('crown', () => paperize(120, 84, (x) => { x.fillStyle = C.gold; x.beginPath(); poly(x, [[8, 78], [4, 18], [34, 48], [60, 6], [86, 48], [116, 18], [112, 78]]); x.fill(); x.fillStyle = C.red; [34, 60, 86].forEach((a) => { x.beginPath(); x.arc(a, 64, 7, 0, TAU); x.fill(); }); }, { seed: 20 }));
  // o: kind worker|drone|queen, flip, rot, fly (flap wings), noWing, ph
  const beeAt = (ctx, x, y, s, t, o = {}) => {
    const kind = o.kind || 'worker', b = beeBody(kind), q = kind === 'queen', dir = o.flip ? -1 : 1, ph0 = o.ph || 0;
    const hov = o.fly ? Math.sin(t * 7 + ph0) * 7 * s : 0;
    ctx.save(); ctx.translate(x, y + hov); if (o.rot) ctx.rotate(o.rot); ctx.scale(s * dir, s);
    const flap = o.fly ? Math.sin(t * 46 + ph0) : Math.sin(t * 2 + ph0) * 0.1, shake = o.shake ? Math.sin(t * 60) * o.shake : 0;
    ctx.translate(shake, 0);
    const wx = (q ? 320 : 250) - b.width / 2;
    if (!o.noWing) { [[-0.55, -8], [-0.2, 10]].forEach(([a, d]) => { ctx.save(); ctx.translate(wx + d, -44); ctx.rotate(Math.PI + 0.75 + a * 0.6 + flap * 0.4); ctx.scale(1, 1 - Math.abs(flap) * 0.25); shadowDraw(ctx, beeWing(), -8, -50, 0.4, 0.3); ctx.restore(); }); }
    shadowDraw(ctx, b, -b.width / 2, -b.height / 2, o.d ?? 0.9);
    if (o.crown) put(ctx, crown(), (q ? 392 : 318) - b.width / 2 + 2, -86, { s: 0.85, rot: 0.1, d: 0.5 });
    ctx.restore();
  };
  const egg = () => cache('egg', () => paperize(44, 70, (x) => { x.fillStyle = C.white; x.beginPath(); x.ellipse(22, 35, 13, 30, 0, 0, TAU); x.fill(); }, { seed: 31 }));
  const larva = () => cache('larva', () => { const r = H.rng(32); return compose(150, 120, [[(x) => { x.fillStyle = C.white; x.beginPath(); poly(x, ellPts(r, 75, 62, 58, 44)); x.fill(); x.strokeStyle = 'rgba(160,130,90,0.7)'; x.lineWidth = 4; [46, 66, 86, 104].forEach((a) => { x.beginPath(); x.arc(a, 62, 30, -0.9, 0.9); x.stroke(); }); }, 0]]); });
  const cellS = (col = C.brood, rr = 92) => cache('cell' + col + rr, () => compose(rr * 2 + 20, rr * 2 + 20, [[(x) => { x.fillStyle = C.wax; x.beginPath(); poly(x, hexPts(rr + 10, rr + 10, rr)); x.fill(); }, 0], [(x) => { x.fillStyle = col; x.beginPath(); poly(x, hexPts(rr + 10, rr + 10, rr - 15)); x.fill(); }, 0.4]]));
  const cardS = (w, h, col = C.card, seed = 1) => cache('card' + w + h + col, () => paperize(w, h, (x) => { x.fillStyle = col; x.beginPath(); poly(x, cutLines(H.rng(seed + w), [[6, 6], [w - 6, 6], [w - 6, h - 6], [6, h - 6], [6, 6]], 26, 0.6)); x.fill(); }, { seed: seed + 40 }));
  const flower = (col = C.pink) => cache('fl' + col, () => { const r = H.rng(50); return compose(120, 200, [[(x) => { x.fillStyle = C.leafD; x.fillRect(56, 90, 9, 105); x.beginPath(); x.ellipse(82, 150, 26, 10, -0.5, 0, TAU); x.fill(); }, 0.2], [(x) => { x.fillStyle = col; x.beginPath(); for (let i = 0; i < 6; i++) { const a = i * TAU / 6; poly(x, ellPts(r, 60 + Math.cos(a) * 28, 60 + Math.sin(a) * 28, 22, 22)); } x.fill(); }, 0.3], [(x) => { x.fillStyle = C.gold; x.beginPath(); poly(x, circPts(r, 60, 60, 19, 8, 0.4)); x.fill(); }, 0.3]]); });
  const jar = () => cache('jar', () => { const r = H.rng(51); return compose(150, 180, [[(x) => { x.fillStyle = C.honey; x.beginPath(); poly(x, cutLines(r, [[20, 40], [130, 40], [138, 170], [12, 170], [20, 40]], 24, 0.5)); x.fill(); x.fillStyle = 'rgba(255,240,190,0.55)'; x.fillRect(32, 58, 16, 90); }, 0], [(x) => { x.fillStyle = C.red; x.fillRect(26, 14, 98, 30); }, 0.4]]); });
  const waxBlock = () => cache('wblock', () => compose(150, 130, [[(x) => { x.fillStyle = C.wax; x.beginPath(); poly(x, cutLines(H.rng(52), [[14, 34], [136, 34], [136, 118], [14, 118], [14, 34]], 24, 0.5)); x.fill(); }, 0], [(x) => { x.fillStyle = '#fbe39a'; x.beginPath(); poly(x, [[14, 34], [44, 12], [148, 12], [136, 34]]); x.fill(); }, 0.2]]));
  const drop = () => cache('drop', () => paperize(60, 84, (x) => { x.fillStyle = '#5fb7d8'; x.beginPath(); x.moveTo(30, 4); x.quadraticCurveTo(56, 44, 54, 56); x.arc(30, 56, 24, 0, Math.PI); x.quadraticCurveTo(4, 44, 30, 4); x.fill(); }, { seed: 53 }));
  const hiveBox = () => cache('hivebox', () => { const r = H.rng(54); return compose(420, 460, [[(x) => { x.fillStyle = '#e8d3a8'; x.beginPath(); poly(x, cutLines(r, [[50, 110], [370, 110], [370, 430], [50, 430], [50, 110]], 26, 0.6)); x.fill(); }, 0], [(x) => { x.fillStyle = '#d4b98a'; x.fillRect(50, 200, 320, 10); x.fillRect(50, 310, 320, 10); }, 0.2], [(x) => { x.fillStyle = '#7e5a3a'; x.beginPath(); poly(x, cutLines(r, [[20, 112], [210, 40], [400, 112], [20, 112]], 26, 0.5)); x.fill(); }, 0.8], [(x) => { x.fillStyle = C.dark; x.fillRect(150, 392, 120, 22); }, 0.1], [(x) => { x.fillStyle = '#9a7a52'; x.fillRect(120, 414, 180, 16); }, 0.5]]); });
  const flame = () => cache('flame', () => { const r = H.rng(55); return compose(120, 150, [[(x) => { x.fillStyle = C.coral; x.beginPath(); poly(x, [[60, 4], [96, 62], [104, 104], [78, 144], [42, 144], [16, 104], [28, 66], [44, 80]]); x.fill(); }, 0], [(x) => { x.fillStyle = C.gold; x.beginPath(); poly(x, [[60, 60], [80, 100], [72, 138], [48, 138], [40, 100]]); x.fill(); }, 0.3]]); });
  const flake = (seed) => cache('fk' + seed, () => { const r = H.rng(60 + seed); return paperize(30, 30, (x) => { x.fillStyle = C.white; x.beginPath(); poly(x, circPts(r, 15, 15, 9, 6, 0.8)); x.fill(); }, { seed: 61, hi: 0.2 }); });
  const snowfall = (ctx, t, n = 40) => { for (let i = 0; i < n; i++) { const r = H.rng(900 + i), sp = r.range(30, 70), x = (r() * 1400 + Math.sin(t * 0.8 + i) * 16) % 1320 - 20, y = (r() * 800 + t * sp) % 780 - 30; ctx.drawImage(flake(i % 4), x, y, r.range(12, 24), r.range(12, 24)); } };
  const thermo = (ctx, x, y, s, fill, col = C.red) => { const sp = cache('thermo', () => compose(90, 330, [[(c) => { c.fillStyle = C.card; c.beginPath(); c.roundRect(28, 8, 34, 270, 17); c.arc(45, 280, 40, 0, TAU); c.fill(); }, 0]])); put(ctx, sp, x, y, { s, d: 1 }); ctx.save(); ctx.translate(x - 45 * s, y - 165 * s); ctx.scale(s, s); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(45, 280, 28, 0, TAU); ctx.fill(); const h = 40 + 215 * fill; ctx.fillRect(36, 275 - h, 18, h); ctx.restore(); };
  const heat = (ctx, x, y, t, col = C.coral, n = 3, s = 1) => { ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = col; ctx.lineWidth = 8 * s; ctx.shadowColor = 'rgba(14,10,30,0.35)'; ctx.shadowBlur = 4; ctx.shadowOffsetY = 2; for (let i = 0; i < n; i++) { const xx = x + (i - (n - 1) / 2) * 44 * s, off = (t * 40 + i * 13) % 26; ctx.beginPath(); for (let k = 0; k <= 12; k++) { const yy = y - k * 6 * s - off * s; const px = xx + Math.sin(k * 0.8 + t * 5 + i) * 7 * s; k ? ctx.lineTo(px, yy) : ctx.moveTo(px, yy); } ctx.stroke(); } ctx.restore(); };
  const kb = (ctx, t, a, b, s0, s1, cx = 640, cy = 360) => { const u = E.inOut(ph(t, a, b)), s = s0 + (s1 - s0) * u; ctx.translate(cx, cy); ctx.scale(s, s); ctx.translate(-cx, -cy); };
  const bigCross = (ctx, x, y, t, st, s = 1) => { const A = popIn(t, st, 0.3); if (A) put(ctx, crossSpr(), x, y, { s: s * A.s, d: 1 + A.d }); };
  const swarm = (ctx, t, n, seed, s = 0.2, o = {}) => { for (let i = 0; i < n; i++) { const r = H.rng(seed + i), bx = r.range(-40, 1320), by = r.range(o.y0 ?? 20, o.y1 ?? 700), a = r() * TAU, v = r.range(0.4, 1.1), x = bx + Math.cos(t * v + a) * 46, y = by + Math.sin(t * v * 1.3 + a) * 30; beeAt(ctx, x, y, s * r.range(0.8, 1.2), t, { fly: true, ph: i, flip: Math.cos(t * v + a + Math.PI / 2) < 0, d: 0.5 }); } };

  // ================= scenes =================
  const sHook = (ctx, t) => {
    ctx.drawImage(comb('hook', C.waxD, C.wax), 0, 0);
    ctx.save(); kb(ctx, t, 0, PS(2), 1.08, 1);
    swarm(ctx, t, 30, 70, 0.2);
    ctx.restore();
    const A = dropIn(t, P(0, 'sixty') - 0.12, 0.4, 70);
    if (A) { put(ctx, cardS(760, 200, C.card), 640, 190 + A.dy, { d: 1.3 + A.d, rot: -0.01 }); numberRow(ctx, '60,000', 640, 190 + A.dy, 120, C.coral, { center: true }); }
    tag(ctx, 'BEES', 1020, 300, t, P(0, 'bees') - 0.1, { px: 58, col: C.ink, rot: 0.05 });
    const B = dropIn(t, P(0, 'no') - 0.12, 0.4, 80);
    if (B) { put(ctx, burstSpr(C.coral), 640, 500, { s: 1.0 * B.s, rot: t * 0.1, d: 0.8 }); put(ctx, wordSpr('NO BOSS', 92, C.ink, C.card, 16), 640, 500 + B.dy, { d: 1.5 + B.d, rot: -0.02 }); }
  };
  const sPromise = (ctx, t) => {
    ctx.drawImage(comb('prom', '#c9791f', '#e8a23a'), 0, 0);
    const col = (st, x, ico, l1, c0) => { const A = dropIn(t, st, 0.4, 70); if (!A) return; put(ctx, cardS(360, 440, C.card), x, 340 + A.dy, { d: 1.3 + A.d, rot: (x - 640) * 0.00004 }); ctx.save(); ctx.translate(0, A.dy); ico(x, 280); ctx.restore(); put(ctx, wordSpr(l1[0], 40, c0, null), x, 460 + A.dy, { d: 0.2 }); if (l1[1]) put(ctx, wordSpr(l1[1], 40, c0, null), x, 510 + A.dy, { d: 0.2 }); };
    col(P(2, 'perfect') - 0.1, 240, (x, y) => { for (const [dx, dy] of [[0, -50], [-62, 40], [62, 40]]) put(ctx, cellS(C.waxD, 60), x + dx, y + dy, { d: 0.4 }); }, ['PERFECT', 'ROOMS'], C.amber);
    col(P(3, 'heating') - 0.1, 640, (x, y) => { thermo(ctx, x - 50, y, 0.75, 0.3 + 0.5 * (0.5 + 0.5 * Math.sin(t * 2))); heat(ctx, x + 70, y + 60, t, C.coral, 2, 1); }, ['HEATING', '+ COOLING'], C.coral);
    col(P(4, 'maps') - 0.1, 1040, (x, y) => { beeAt(ctx, x, y + Math.sin(t * 2.5) * 20, 0.46, t, { rot: -1.1 + Math.sin(t * 28) * 0.08, shake: 6 }); }, ['MAPS BY', 'DANCING'], C.teal);
  };
  const sTitle = (ctx, t) => {
    outdoor(ctx, 'meadow', PAL_M, t);
    ctx.save(); kb(ctx, t, PS(5), PE(5) + 1, 1.04, 1);
    put(ctx, hiveBox(), 640, 500, { d: 1.5 });
    for (let i = 0; i < 6; i++) { const r = H.rng(i + 3); put(ctx, flower(i % 2 ? C.pink : C.white), 100 + i * 220 + (i > 2 ? 110 : -60), 620, { s: 0.75 + r() * 0.2, d: 0.8 }); }
    swarm(ctx, t, 8, 120, 0.16, { y0: 300, y1: 560 });
    ctx.restore();
    cutTitle(ctx, 'INSIDE THE HIVE', 640, 120, 92, t, P(5, 'how') - 0.1, { step: 0.04 });
    tag(ctx, 'HOW DOES IT WORK?', 640, 240, t, P(5, 'work') - 0.25, { px: 46, col: C.ink, rot: -0.01 });
  };
  const sQueen = (ctx, t) => {
    ctx.drawImage(comb('brood', C.broodD, C.brood), 0, 0);
    ctx.save(); kb(ctx, t, PS(6), PE(8), 1, 1.06);
    const A = dropIn(t, P(6, 'queen') - 0.25, 0.45, 90);
    if (A) beeAt(ctx, 600, 420 + A.dy, 1.25, t, { kind: 'queen', crown: true });
    [[140, 150, 0.4], [1130, 170, 0.45], [150, 610, 0.45], [1150, 610, 0.4]].forEach(([x, y, s], i) => { if (t > PS(6) + 0.2 * i) beeAt(ctx, x, y, s, t, { flip: x > 640, ph: i, rot: x > 640 ? -0.2 : 0.2 }); });
    ctx.restore();
    tag(ctx, 'THE BOSS?', 930, 215, t, P(7, 'boss') - 0.15, { px: 62, col: C.coral });
    bigCross(ctx, 930, 215, t, P(8, 'doesnt') - 0.05, 0.9);
    tag(ctx, 'NO ORDERS', 640, 620, t, P(8, 'orders') - 0.15, { px: 62, col: C.ink, rot: -0.015 });
  };
  const sEggs = (ctx, t) => {
    ctx.drawImage(comb('eggs', C.waxD, C.wax, 72), 0, 0);
    const n = 5, cells = [[170, 560], [420, 560], [670, 560], [920, 560], [1170, 560]], a = P(9, 'eggs') - 0.1;
    cells.forEach(([x, y], i) => { put(ctx, cellS(C.brood, 92), x, y, { d: 0.6 }); const st = a + i * 0.7; if (t > st) { const e = E.back(cl((t - st) / 0.3)); put(ctx, egg(), x, y - 4, { s: e, rot: 0.2 }); } });
    const u = cl((t - a) / 2.8), qx = 170 + u * 1000 + Math.sin(t * 2) * 8;
    beeAt(ctx, Math.min(qx, 1000), 385, 0.62, t, { kind: 'queen', crown: true });
    const B = dropIn(t, P(10, 'fifteen') - 0.15, 0.4, 70);
    if (B) { put(ctx, cardS(760, 170, C.card), 400, 120 + B.dy, { d: 1.3 + B.d }); numberRow(ctx, '1,500', 300, 120 + B.dy, 100, C.coral, { center: true }); put(ctx, wordSpr('A DAY', 60, C.ink, null), 625, 124 + B.dy, { d: 0.2 }); }
    const D = dropIn(t, P(11, 'one') - 0.12, 0.4, 60);
    if (D) put(ctx, wordSpr('1 EGG EVERY MINUTE', 42, C.card, C.ink, 12), 930, 260 + D.dy, { d: 1 + D.d, rot: 0.015 });
    tag(ctx, 'DAY + NIGHT', 1040, 90, t, P(12, 'all') - 0.1, { px: 44, col: C.teal, rot: 0.03 });
  };
  const sDrones = (ctx, t) => {
    ctx.drawImage(comb('drones', '#8a5a2a', '#b07a3c'), 0, 0);
    [[290, 370, 0.95, 0], [720, 450, 1.05, 1], [1080, 330, 0.8, 2]].forEach(([x, y, s, i]) => { const A = dropIn(t, PS(13) + i * 0.3, 0.42, 80); if (A) beeAt(ctx, x, y + A.dy, s, t, { kind: 'drone', ph: i, flip: i === 2 }); });
    tag(ctx, 'A FEW HUNDRED', 340, 100, t, P(13, 'few') - 0.1, { px: 52, col: C.ink, rot: -0.02 });
    tag(ctx, 'DRONES', 880, 110, t, P(14, 'drones') - 0.15, { px: 78, col: C.coral, rot: 0.02 });
    tag(ctx, 'ONE JOB: MATE WITH A QUEEN', 640, 640, t, P(15, 'mate') - 0.15, { px: 42, col: C.ink });
  };
  const sEvict = (ctx, t) => {
    outdoor(ctx, 'autumn', PAL_G, t, { noFore: true });
    snowfall(ctx, t, 16);
    put(ctx, hiveBox(), 860, 440, { s: 1.1, d: 1.5 });
    const a = P(17, 'shove') - 0.1, u = cl((t - a) / 0.8), e = E.out(u);
    if (t > a - 0.3) beeAt(ctx, 840, 600, 0.45, t, { flip: true, ph: 2, rot: 0.06 });
    beeAt(ctx, 780 - e * 480, 560 - Math.sin(u * Math.PI) * 170, 0.72, t, { kind: 'drone', flip: true, rot: -u * 1.6, ph: 1 });
    tag(ctx, 'FALL', 200, 110, t, P(16, 'fall') - 0.15, { px: 74, col: C.amber, rot: -0.03 });
    const A = popIn(t, a + 0.1, 0.3); if (A) { put(ctx, burstSpr(C.coral), 330, 300, { s: 0.75 * A.s, rot: t * 0.1 }); put(ctx, wordSpr('OUT!', 76, C.ink, C.card, 12), 330, 300, { s: A.s, d: 1 }); }
  };
  const sWorkers = (ctx, t) => {
    ctx.drawImage(comb('work', '#7e9c6a', '#9db97e'), 0, 0);
    for (let j = 0; j < 3; j++) for (let i = 0; i < 6; i++) { const st = PS(18) + (i + j * 2) * 0.09, A = dropIn(t, st, 0.3, 40); if (A) beeAt(ctx, 150 + i * 200 + (j % 2) * 90, 300 + j * 150 + A.dy, 0.5, t, { ph: i + j * 7 }); }
    tag(ctx, 'EVERYONE ELSE: WORKERS', 640, 90, t, P(18, 'worker') - 0.15, { px: 52, col: C.ink });
    const A = popIn(t, P(19, 'female') - 0.1, 0.35); if (A) { put(ctx, burstSpr(C.gold), 640, 190, { s: 0.6 * A.s, rot: t * 0.1, d: 0.7 }); put(ctx, wordSpr('ALL FEMALE', 62, C.coral, C.card, 12), 640, 190, { s: A.s, d: 1.2 }); }
  };
  const sSameEgg = (ctx, t) => {
    ctx.drawImage(comb('same', '#d2c4a0', '#e6dbbd'), 0, 0);
    const a = PS(20), gx = 320, wx = 960, split = P(21, 'food') - 0.1;
    [gx, wx].forEach((x, i) => { const A = dropIn(t, a + i * 0.25, 0.4, 70); if (!A) return; put(ctx, cellS(C.brood, 130), x, 370 + A.dy, { d: 1 }); put(ctx, t < P(22, 'future') ? egg() : larva(), x, 370 + A.dy, { s: t < P(22, 'future') ? 1.6 : 1.05 }); });
    tag(ctx, 'SAME KIND OF EGG', 640, 95, t, P(20, 'same') - 0.1, { px: 58, col: C.ink });
    if (t > split) { const A = popIn(t, split, 0.35); put(ctx, wordSpr('FOOD', 72, C.coral, C.card, 12), 640, 370, { s: A.s, d: 1.2 + A.d, rot: -0.03 }); }
    const jel = P(22, 'royal') - 0.1;
    for (let i = 0; i < 14; i++) { const st = jel + i * 0.08, u = cl((t - st) / 0.35); if (u > 0) { const r = H.rng(i + 400), a0 = r() * TAU; put(ctx, popJelly(), gx + Math.cos(a0) * r.range(70, 112), 370 + Math.sin(a0) * r.range(62, 104), { s: E.back(u) * r.range(0.6, 1.1), d: 0.3 }); } }
    tag(ctx, 'ROYAL JELLY: LOADS', gx, 590, t, jel, { px: 42, col: C.purple });
    const les = P(23, 'less') - 0.3;
    for (let i = 0; i < 3; i++) { const st = les + i * 0.1, u = cl((t - st) / 0.3); if (u > 0) put(ctx, popJelly(), wx - 80 + i * 80, 280, { s: E.back(u) * 0.7, d: 0.3 }); }
    tag(ctx, 'WORKER: FAR LESS', wx, 590, t, les, { px: 42, col: C.ink });
    const Q = popIn(t, jel + 0.2, 0.35); if (Q) put(ctx, crown(), gx, 215, { s: Q.s, d: 0.8 + Q.d });
  };
  const popJelly = () => cache('jelly', () => paperize(50, 50, (x) => { x.fillStyle = C.white; x.beginPath(); poly(x, circPts(H.rng(70), 25, 25, 19, 7, 0.8)); x.fill(); x.fillStyle = '#ecd9f2'; x.beginPath(); x.arc(21, 22, 9, 0, TAU); x.fill(); }, { seed: 71 }));
  // --- chapter 2: a career in six weeks
  const STOPS = [['DAY 1', 'CLEANER', C.teal], ['DAY 5', 'NURSE', C.pink], ['DAY 12', 'BUILDER', C.amber], ['DAY 15', 'GUARD', C.blue], ['DAY 21+', 'FORAGER', C.leafD]];
  const dayTile = (ctx, i, t, st) => { const A = dropIn(t, st, 0.4, 70); if (!A) return; put(ctx, wordSpr(STOPS[i][0], 60, C.card, STOPS[i][2], 12), 190, 92 + A.dy, { d: 1 + A.d, rot: -0.03 }); };
  const sCareer = (ctx, t) => {
    ctx.drawImage(comb('career', '#5a7d8c', '#6f97a6'), 0, 0);
    const A = dropIn(t, P(24, 'six') - 0.12, 0.4, 70);
    if (A) { put(ctx, cardS(600, 150, C.card), 640, 265 + A.dy, { d: 1.2 + A.d }); put(ctx, wordSpr('6 WEEKS', 86, C.coral, null), 640, 265 + A.dy, { d: 0.2 }); }
    const st = P(25, 'changes') - 0.1, x0 = 140, gap = 250;
    arrow(ctx, 90, 530, 640, 525, 1210, 530, cl((t - st) / 2.2), C.gold, 301);
    STOPS.forEach((s, i) => { const B = dropIn(t, st + i * 0.42, 0.35, 50); if (!B) return; put(ctx, wordSpr(s[1], 30, C.card, s[2], 8), x0 + i * gap, 610 + B.dy, { d: 0.9 + B.d }); put(ctx, wordSpr(s[0], 30, C.ink, C.card, 8), x0 + i * gap, 450 + B.dy, { d: 0.9 + B.d }); });
    const u = cl((t - st) / 2.2); beeAt(ctx, 90 + u * 1080, 530, 0.34, t, { fly: true });
  };
  const sCleaner = (ctx, t) => {
    ctx.drawImage(comb('clean', '#6ba99f', '#86c0b4'), 0, 0);
    dayTile(ctx, 0, t, P(26, 'day') - 0.12);
    put(ctx, cellS(C.broodD, 200), 780, 380, { d: 1 });
    const w = Math.sin(t * 6); beeAt(ctx, 690 + w * 90, 390 + Math.cos(t * 6) * 40, 0.8, t, { rot: w * 0.2 });
    tag(ctx, 'CLEANER', 280, 280, t, P(26, 'cleaner') - 0.15, { px: 66, col: C.teal, rot: -0.02 });
    tag(ctx, 'HER OWN CELL', 280, 400, t, P(27, 'polishing') - 0.1, { px: 42, col: C.ink, rot: 0.01 });
    if (t > P(27, 'polishing')) [[900, 230, 1], [660, 200, 2], [960, 530, 3]].forEach(([x, y, s]) => { const p = 0.6 + 0.4 * Math.sin(t * 7 + s); ctx.save(); ctx.translate(x, y); ctx.rotate(t * 1.5); ctx.scale(p, p); ctx.fillStyle = C.card; ctx.beginPath(); for (let i = 0; i < 8; i++) { const r = i % 2 ? 9 : 30, a = i * TAU / 8; i ? ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r) : ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.fill(); ctx.restore(); });
  };
  const sNurse = (ctx, t) => {
    ctx.drawImage(comb('nurse', '#c07a8c', '#d694a4'), 0, 0);
    dayTile(ctx, 1, t, P(28, 'day') - 0.12);
    [[560, 480], [840, 480], [1120, 480]].forEach(([x, y], i) => { put(ctx, cellS(C.brood, 130), x, y, { d: 0.9 }); put(ctx, larva(), x, y + Math.sin(t * 3 + i) * 3, { s: 0.95 + Math.sin(t * 5 + i) * 0.04 }); });
    const a = PS(29), i = Math.min(2, Math.max(0, Math.floor((t - a) / 0.65))), tx = 560 + i * 280;
    beeAt(ctx, tx - 110, 280 + Math.sin(t * 8) * 8, 0.72, t, { rot: 0.5 });
    tag(ctx, 'NURSE', 300, 280, t, P(28, 'nurse') - 0.15, { px: 76, col: C.coral, rot: -0.02 });
    tag(ctx, 'FEEDS THE BABIES', 300, 620, t, P(29, 'feeding') - 0.1, { px: 42, col: C.ink });
  };
  const sBuilder = (ctx, t) => {
    ctx.drawImage(comb('build', '#cf9a4a', '#e0b463'), 0, 0);
    dayTile(ctx, 2, t, P(30, 'day') - 0.12);
    const b = PS(31) - 0.2;
    const A = dropIn(t, PS(30) + 0.1, 0.4, 60); if (A) beeAt(ctx, 330, 420 + A.dy, 1.05, t, { rot: -0.1 });
    tag(ctx, 'WAX GLANDS', 330, 620, t, P(30, 'wax') - 0.12, { px: 46, col: C.amber });
    const w0 = P(30, 'belly'); for (let i = 0; i < 4; i++) { const u = cl((t - w0 - i * 0.2) / 0.3); if (u > 0) { ctx.save(); ctx.fillStyle = C.card; ctx.globalAlpha = 1; ctx.translate(230 + i * 44, 490 + Math.sin(i) * 6); ctx.scale(u, u); ctx.beginPath(); ctx.ellipse(0, 0, 20, 11, 0.2, 0, TAU); ctx.shadowColor = 'rgba(14,10,30,0.4)'; ctx.shadowBlur = 4; ctx.fill(); ctx.restore(); } }
    const rr = 74, pos = []; for (let j = 0; j < 3; j++) for (let i = 0; i < 3; i++) pos.push([760 + i * rr * 1.76 + (j % 2 ? rr * 0.88 : 0), 200 + j * rr * 1.52]);
    pos.forEach(([x, y], i) => { const u = cl((t - b - i * 0.13) / 0.3); if (u > 0) put(ctx, cellS(C.waxD, rr - 6), x, y, { s: E.back(u), d: 0.7 }); });
    tag(ctx, 'BUILDER', 900, 620, t, P(31, 'builder') - 0.15, { px: 66, col: C.ink, rot: 0.01 });
  };
  const sGuard = (ctx, t) => {
    outdoor(ctx, 'meadow2', PAL_M, t, { noFore: true });
    dayTile(ctx, 3, t, P(32, 'day') - 0.12);
    put(ctx, hiveBox(), 640, 400, { s: 1.5, d: 1.6 });
    beeAt(ctx, 520, 640, 0.5, t, { ph: 1 }); beeAt(ctx, 760, 640, 0.5, t, { flip: true, ph: 2 });
    tag(ctx, 'GUARD', 1040, 110, t, P(32, 'guard') - 0.15, { px: 86, col: C.blue, rot: 0.02 });
  };
  const sForager = (ctx, t) => {
    outdoor(ctx, 'meadow3', PAL_M, t);
    for (let i = 0; i < 8; i++) { const r = H.rng(i + 90); put(ctx, flower([C.pink, C.white, C.gold, C.purple][i % 4]), 70 + i * 165, 560 + r() * 60, { s: 0.8 + r() * 0.5, d: 0.8, rot: Math.sin(t + i) * 0.03 }); }
    dayTile(ctx, 4, t, PS(33) - 0.05);
    const a = PS(34) - 0.3, u = cl((t - a) / 2.8), e = E.inOut(u);
    if (t > a) beeAt(ctx, 60 + e * 1040, 330 - Math.sin(e * 6) * 90 + e * 70, 0.7, t, { fly: true });
    tag(ctx, '3 WEEKS IN', 640, 100, t, P(33, 'three') - 0.12, { px: 60, col: C.coral });
    tag(ctx, 'FINALLY OUTSIDE', 640, 195, t, P(34, 'outside') - 0.15, { px: 48, col: C.ink, rot: -0.01 });
    tag(ctx, 'FORAGER', 1040, 300, t, P(35, 'hunting') - 0.12, { px: 60, col: C.leafD, rot: 0.02 });
  };
  // --- chapter 3: wax and hexagons
  const sWax = (ctx, t) => {
    ctx.drawImage(comb('wax', '#8f4f24', '#a9632f'), 0, 0);
    const a = P(37, 'eight') - 0.12;
    for (let i = 0; i < 8; i++) { const A = dropIn(t, a + i * 0.12, 0.33, 60); if (A) put(ctx, jar(), 110 + (i % 4) * 118, 300 + Math.floor(i / 4) * 176 + A.dy, { s: 0.78, d: 0.9 + A.d }); }
    tag(ctx, '8 LB OF HONEY', 290, 110, t, a, { px: 58, col: C.amber, rot: -0.02 });
    arrow(ctx, 580, 390, 640, 340, 730, 390, cl((t - P(38, 'make')) / 0.5), C.gold, 303);
    const B = dropIn(t, P(38, 'one') - 0.12, 0.4, 70); if (B) put(ctx, waxBlock(), 950, 390 + B.dy, { s: 1.7, d: 1.3 + B.d });
    tag(ctx, '1 LB OF WAX', 950, 110, t, P(38, 'one') - 0.12, { px: 58, col: C.ink, rot: 0.02 });
    tag(ctx, 'EXPENSIVE!', 640, 630, t, P(39, 'waste') - 0.25, { px: 62, col: C.red });
  };
  const shapeTile = (ctx, kind, x, y, r, col) => { const sp = cache('shape' + kind, () => paperize(560, 460, (c) => { c.fillStyle = col; const R = 66; if (kind === 'circle') for (let j = 0; j < 3; j++) for (let i = 0; i < 4; i++) { c.beginPath(); c.arc(78 + i * 134, 96 + j * 134, R - 2, 0, TAU); c.fill(); } if (kind === 'square') for (let j = 0; j < 4; j++) for (let i = 0; i < 5; i++) c.fillRect(i * 112 + 3, j * 112 + 3, 106, 106); if (kind === 'tri') for (let j = 0; j < 4; j++) for (let i = -1; i < 7; i++) { const s = 128, h = s * 0.866, ox = i * s + (j % 2 ? s / 2 : 0), oy = j * h; c.beginPath(); poly(c, [[ox + 3, oy + h - 2], [ox + s / 2, oy + 3], [ox + s - 3, oy + h - 2]]); c.fill(); c.beginPath(); poly(c, [[ox + s / 2 + 3, oy + 2], [ox + s + s / 2 - 3, oy + 2], [ox + s, oy + h - 3]]); c.fill(); } if (kind === 'hex') for (let j = -1; j < 6; j++) for (let i = -1; i < 7; i++) { c.beginPath(); poly(c, hexPts(i * 112 + (j % 2 ? 56 : 0), j * 97, 62)); c.fill(); } }, { seed: 80 })); put(ctx, sp, x, y, { s: r, d: 0.8 }); };
  const sCircles = (ctx, t) => {
    ctx.fillStyle = '#3d5f7a'; ctx.drawImage(comb('sh1', '#2f4f66', '#3a5d76', 90, 0.3), 0, 0);
    const A = dropIn(t, PS(40) - 0.1, 0.4, 80); if (A) { ctx.save(); ctx.translate(0, A.dy); shapeTile(ctx, 'circle', 640, 390, 1.15, C.wax); ctx.restore(); }
    tag(ctx, 'CIRCLES LEAVE GAPS', 640, 90, t, P(40, 'gaps') - 0.3, { px: 62, col: C.red });
    if (t > P(40, 'gaps')) { [0, 1, 2, 3, 4, 5].map((n) => [640 + (145 + (n % 3) * 134 - 280) * 1.15, 390 + (163 + (n > 2 ? 134 : 0) - 230) * 1.15]).forEach(([x, y], i) => { const A2 = popIn(t, P(40, 'gaps') + i * 0.04, 0.2); if (A2) { ctx.save(); ctx.strokeStyle = C.red; ctx.lineWidth = 7; ctx.beginPath(); ctx.arc(x, y, 30 * A2.s, 0, TAU); ctx.stroke(); ctx.restore(); } }); }
  };
  const sSquares = (ctx, t) => {
    ctx.drawImage(comb('sh1', '#2f4f66', '#3a5d76', 90, 0.3), 0, 0);
    const A = dropIn(t, P(41, 'squares') - 0.12, 0.4, 70), B = dropIn(t, P(41, 'triangles') - 0.12, 0.4, 70);
    if (A) { ctx.save(); ctx.beginPath(); ctx.rect(70, 170, 540, 400); ctx.clip(); shapeTile(ctx, 'square', 340, 370 + A.dy, 1, C.teal); ctx.restore(); }
    if (B) { ctx.save(); ctx.beginPath(); ctx.rect(670, 170, 540, 400); ctx.clip(); shapeTile(ctx, 'tri', 940, 370 + B.dy, 1, C.coral); ctx.restore(); }
    tag(ctx, 'THEY FIT...', 640, 90, t, P(41, 'fit') - 0.12, { px: 62, col: C.ink });
    tag(ctx, '...BUT MORE WALL', 640, 640, t, P(42, 'more') - 0.12, { px: 58, col: C.red });
  };
  const sHex = (ctx, t) => {
    ctx.drawImage(comb('sh1', '#2f4f66', '#3a5d76', 90, 0.3), 0, 0);
    const a = P(43, 'hexagons') - 0.15, A = dropIn(t, a, 0.45, 80);
    if (A) { const b = cl((t - a) / 0.6), s = 1.02 + Math.sin(t * 2) * 0.01; put(ctx, burstSpr(C.gold), 640, 380, { s: 2.05 * E.back(b), rot: t * 0.08, d: 0.7 }); ctx.save(); ctx.translate(640, 380 + A.dy); ctx.beginPath(); poly(ctx, hexPts(0, 0, 250)); ctx.clip(); shapeTile(ctx, 'hex', 0, 0, 1.05 * s, C.wax); ctx.restore(); }
    tag(ctx, 'MOST ROOM', 250, 200, t, P(43, 'most') - 0.12, { px: 56, col: C.leafD, rot: -0.03 });
    tag(ctx, 'LEAST WAX', 1030, 560, t, P(44, 'least') - 0.12, { px: 56, col: C.coral, rot: 0.02 });
  };
  const sProof = (ctx, t) => {
    ctx.drawImage(comb('proof', '#2c4a3e', '#35594a', 80, 0.3), 0, 0);
    const a = PS(45);
    ctx.save(); ctx.font = AF(40); ctx.fillStyle = 'rgba(243,236,220,0.55)'; const eq = ['WALL = 6s', 'ROOM = 2.6 s²', 'LEAST WALL?']; eq.forEach((s, i) => { if (t > a + 0.2 + i * 0.4) ctx.fillText(s, 90 + i * 400, 150 + (i % 2) * 40); }); ctx.restore();
    tag(ctx, 'CENTURIES OF GUESSING', 640, 280, t, P(45, 'centuries') - 0.12, { px: 50, col: C.ink, rot: -0.01 });
    const B = dropIn(t, P(46, 'nineteen') - 0.12, 0.4, 70); if (B) { numberRow(ctx, '1999', 640, 430 + B.dy, 150, C.coral, { center: true }); }
    tag(ctx, 'PROVEN', 1040, 400, t, P(46, 'proved') - 0.12, { px: 56, col: C.teal, rot: 0.05 });
    const C0 = dropIn(t, PS(47), 0.4, 60); if (C0) { beeAt(ctx, 240, 590 + C0.dy, 0.62, t, { rot: -0.1 }); put(ctx, wordSpr('BEES: NO MATH', 52, C.ink, C.gold, 12), 760, 620 + C0.dy, { d: 1.2 + C0.d }); }
  };
  // --- chapter 4: the dance
  const danceAt = (u, cx, cy, L, ang, rad) => {
    // one cycle: run, right loop, run, left loop. ang = run direction, 0 = straight up
    const ux = Math.sin(ang), uy = -Math.cos(ang), px = Math.cos(ang), py = Math.sin(ang);
    const f = u % 1, m = f < 0.5 ? f * 2 : (f - 0.5) * 2, side = f < 0.5 ? 1 : -1, sp = 0.55;
    if (m < sp) { const v = m / sp, a = -L / 2 + v * L, wag = Math.sin(v * 44) * 9; return { x: cx + ux * a + px * wag, y: cy + uy * a + py * wag, h: ang, run: true }; }
    const v = (m - sp) / (1 - sp), th = Math.PI * v, a = Math.cos(th) * L / 2, b = Math.sin(th) * rad * side;
    return { x: cx + ux * a + px * b, y: cy + uy * a + py * b, h: ang + Math.PI * v * side + Math.PI * 0, run: false };
  };
  const sDark = (ctx, t) => {
    const a = PS(49);
    if (t < PS(50) - 0.05) { outdoor(ctx, 'far', PAL_M, t, { noFore: true }); for (let i = 0; i < 6; i++) put(ctx, flower(i % 2 ? C.pink : C.purple), 800 + i * 80, 570 + (i % 2) * 40, { s: 1, d: 0.8 }); put(ctx, hiveBox(), 170, 500, { s: 0.7, d: 1.2 }); const u = cl((t - a) / 2); beeAt(ctx, 300 + E.inOut(u) * 560, 300 + Math.sin(u * 7) * 30, 0.62, t, { fly: true }); tag(ctx, 'THE COOLEST TRICK', 640, 225, t, PS(48), { px: 58, col: C.coral }); tag(ctx, 'FLOWERS, FAR AWAY', 980, 440, t, P(49, 'flowers') - 0.15, { px: 42, col: C.ink, rot: 0.02 }); return; }
    ctx.drawImage(comb('dark', '#0e0c1c', '#1a1830'), 0, 0);
    [[250, 240, 0.7, 1], [1030, 220, 0.7, 2], [300, 560, 0.75, 3], [1000, 560, 0.75, 4]].forEach(([x, y, s, i]) => beeAt(ctx, x, y, s, t, { flip: x > 640, ph: i }));
    tag(ctx, 'PITCH DARK', 640, 110, t, P(51, 'pitch') - 0.1, { px: 66, col: C.ink });
    tag(ctx, 'NO WORDS', 640, 220, t, P(51, 'words') - 0.15, { px: 54, col: C.coral, rot: 0.02 });
    const q = popIn(t, PS(50), 0.3); if (q) put(ctx, wordSpr('?', 170, C.gold, null), 640, 420, { s: q.s, rot: Math.sin(t * 2) * 0.05, d: 1 });
  };
  const figure8 = (key, cx, cy, L, ang, rad) => cache('f8' + key, () => paperize(W, HH, (c) => { c.strokeStyle = C.card; c.lineWidth = 11; c.lineCap = 'round'; c.lineJoin = 'round'; c.beginPath(); for (let i = 0; i <= 300; i++) { const u = i / 300, f = u, m = f < 0.5 ? f * 2 : (f - 0.5) * 2, side = f < 0.5 ? 1 : -1, sp = 0.55, ux = Math.sin(ang), uy = -Math.cos(ang), px = Math.cos(ang), py = Math.sin(ang); let a, b; if (m < sp) { a = -L / 2 + (m / sp) * L; b = 0; } else { const th = Math.PI * (m - sp) / (1 - sp); a = Math.cos(th) * L / 2; b = Math.sin(th) * rad * side; } const x = cx + ux * a + px * b, y = cy + uy * a + py * b; i ? c.lineTo(x, y) : c.moveTo(x, y); } c.stroke(); }, { seed: 88 }));
  const sDance = (ctx, t) => {
    ctx.drawImage(comb('dancebg', '#a96a24', '#c88a35'), 0, 0);
    const a = PS(52), cx = 640, cy = 390, L = 310, rad = 180;
    const on = cl((t - PS(53) + 0.2) / 0.5); if (on > 0) { ctx.save(); ctx.globalAlpha = on; shadowDraw(ctx, figure8('up', cx, cy, L, 0, rad), 0, 0, 0.5, 0.35); ctx.restore(); }
    const per = 3.0, u = (t - PS(53)) / per, q = t > PS(53) - 0.1 ? danceAt(Math.max(0, u), cx, cy, L, 0, rad) : { x: cx, y: cy + L / 2, h: 0, run: false };
    if (t > a - 0.1) beeAt(ctx, q.x, q.y, 0.42, t, { rot: q.h - Math.PI / 2, shake: q.run ? 8 : 0, d: 1.2 });
    [[210, 220], [1080, 200], [180, 560]].forEach(([x, y], i) => beeAt(ctx, x, y, 0.5, t, { flip: x > 640, ph: i }));
    tag(ctx, 'SHE DANCES', 640, 80, t, P(52, 'dances') - 0.15, { px: 70, col: C.coral });
    tag(ctx, 'THE WAGGLE RUN', 280, 390, t, P(53, 'straight') - 0.1, { px: 40, col: C.ink, rot: -0.02 });
    tag(ctx, 'SHAKE!', 1000, 330, t, P(54, 'shaking') - 0.1, { px: 56, col: C.red, rot: 0.04 });
    tag(ctx, 'LOOP BACK', 1000, 450, t, P(55, 'loops') - 0.1, { px: 46, col: C.teal, rot: -0.02 });
    tag(ctx, 'AGAIN', 1010, 560, t, P(56, 'again') - 0.2, { px: 46, col: C.ink });
  };
  const sAngle = (ctx, t) => {
    ctx.drawImage(comb('anglebg', '#a96a24', '#c88a35'), 0, 0);
    const sw = P(59, 'sixty') - 0.1, ang = -E.inOut(cl((t - sw) / 0.9)) * Math.PI / 3, deg = Math.round(-ang * 180 / Math.PI);
    // left panel: comb, dance angle against "up"
    put(ctx, cardS(560, 500, '#e0b463'), 320, 400, { d: 1.1 });
    const lx = 320, ly = 420, L = 290;
    ctx.save(); ctx.strokeStyle = C.ink; ctx.setLineDash([16, 12]); ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(lx, ly + 150); ctx.lineTo(lx, ly - 190); ctx.stroke(); ctx.setLineDash([]);
    const ex = lx + Math.sin(ang) * L * 0.72, ey = ly - Math.cos(ang) * L * 0.72;
    ctx.strokeStyle = C.coral; ctx.lineWidth = 13; ctx.lineCap = 'round'; ctx.shadowColor = 'rgba(14,10,30,0.4)'; ctx.shadowBlur = 5; ctx.shadowOffsetY = 3; ctx.beginPath(); ctx.moveTo(lx - Math.sin(ang) * L * 0.4, ly + Math.cos(ang) * L * 0.4); ctx.lineTo(ex, ey); ctx.stroke(); ctx.restore();
    const wg = Math.sin(t * 28) * 6, v = ((t * 0.5) % 1), bx = lx + Math.sin(ang) * (L * (v * 1.1 - 0.4)) + Math.cos(ang) * wg, by = ly - Math.cos(ang) * (L * (v * 1.1 - 0.4)) + Math.sin(ang) * wg;
    beeAt(ctx, bx, by, 0.34, t, { rot: ang - Math.PI / 2, shake: 4 });
    put(ctx, wordSpr('UP', 44, C.ink, C.card, 8), lx, 188, { d: 0.8 });
    // right panel: the sky
    const px = 960, py = 620;
    put(ctx, cache('skycard', () => paperize(560, 500, (x) => { const g = x.createLinearGradient(0, 0, 0, 500); g.addColorStop(0, '#8fd0e0'); g.addColorStop(1, '#e3f1cf'); x.fillStyle = g; x.beginPath(); poly(x, cutLines(H.rng(5), [[6, 6], [554, 6], [554, 494], [6, 494], [6, 6]], 26, 0.6)); x.fill(); x.fillStyle = PAL_M.ground; x.fillRect(7, 410, 546, 83); }, { seed: 6 })), 960, 400, { d: 1.1 });
    put(ctx, cache('sunS', () => { const r = H.rng(6); return compose(150, 150, [[(x) => { x.fillStyle = C.gold; x.beginPath(); poly(x, circPts(r, 75, 75, 64, 10, 0.6)); x.fill(); }, 0]]); }), px, 225, { d: 0.6 });
    put(ctx, hiveBox(), px, py - 25, { s: 0.25, d: 0.6 });
    const fL = 300, fx = px + Math.sin(ang) * fL, fy = py - 65 - Math.cos(ang) * fL * 1.02;
    ctx.save(); ctx.strokeStyle = C.coral; ctx.lineWidth = 11; ctx.lineCap = 'round'; ctx.setLineDash([22, 16]); ctx.lineDashOffset = -t * 60; ctx.beginPath(); ctx.moveTo(px, py - 70); ctx.lineTo(fx, fy); ctx.stroke(); ctx.restore();
    if (t > sw) put(ctx, flower(C.pink), Math.max(730, fx), Math.max(fy, 240) + 40, { s: 0.75, d: 0.8 });
    const sp = cl((t - PS(58)) / 1); beeAt(ctx, px + (fx - px) * (0.25 + 0.6 * ((t * 0.35) % 1)), py - 70 + (fy - py + 70) * (0.25 + 0.6 * ((t * 0.35) % 1)), 0.2, t, { fly: true, flip: ang < -0.2, rot: 0 });
    tag(ctx, 'ANGLE = DIRECTION', 640, 70, t, P(57, 'angle') - 0.12, { px: 56, col: C.ink });
    if (t > PS(58) - 0.1 && t < sw) tag(ctx, 'UP = TOWARD SUN', 640, 660, t, P(58, 'straight') - 0.1, { px: 46, col: C.coral });
    if (t >= sw) { const A = popIn(t, sw, 0.3); put(ctx, wordSpr(deg + '° LEFT', 54, C.coral, C.card, 10), 640, 660, { s: A ? A.s : 1, d: 1 }); }
  };
  const sDist = (ctx, t) => {
    outdoor(ctx, 'dist', PAL_M, t, { noFore: true });
    const a = P(62, 'two') - 0.15, u = cl((t - a) / 2.5);
    const A = dropIn(t, PS(61), 0.4, 60);
    if (A) { put(ctx, cache('watch', () => { const r = H.rng(7); return compose(290, 330, [[(x) => { x.fillStyle = C.dark; x.fillRect(125, 2, 40, 40); }, 0], [(x) => { x.fillStyle = C.ink; x.beginPath(); poly(x, circPts(r, 145, 180, 142, 12, 0.5)); x.fill(); }, 0.4], [(x) => { x.fillStyle = C.card; x.beginPath(); poly(x, circPts(r, 145, 180, 116, 12, 0.5)); x.fill(); }, 0.3]]); }), 210, 300 + A.dy, { d: 1.2 + A.d }); ctx.save(); ctx.translate(210, 325 + A.dy); ctx.rotate(u * TAU * (2.5 / 5)); ctx.strokeStyle = C.red; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -92); ctx.stroke(); ctx.restore(); }
    tag(ctx, 'LENGTH = DISTANCE', 750, 80, t, P(61, 'length') - 0.15, { px: 54, col: C.ink, rot: -0.01 });
    tag(ctx, '2.5 SECONDS', 210, 560, t, a, { px: 44, col: C.coral });
    const m = P(63, 'flowers') - 0.15, v = E.inOut(cl((t - m) / 1.6));
    put(ctx, hiveBox(), 480, 460, { s: 0.42, d: 0.9 });
    if (t > m) { arrow(ctx, 560, 500, 840, 420, 1110, 500, v, C.coral, 305); beeAt(ctx, 560 + 540 * v, 500 - Math.sin(v * Math.PI) * 54 - 28, 0.24, t, { fly: true }); }
    for (let i = 0; i < 4; i++) put(ctx, flower(i % 2 ? C.pink : C.white), 1120 + (i % 2 ? 90 : 0), 500 + i * 26, { s: 0.75, d: 0.7 });
    const B = dropIn(t, P(63, 'mile') - 0.15, 0.4, 70); if (B) put(ctx, wordSpr('1.5+ MILES', 72, C.coral, C.card, 14), 800, 240 + B.dy, { d: 1.3 + B.d, rot: 0.015 });
  };
  const sNobel = (ctx, t) => {
    ctx.drawImage(comb('nob', '#3a3560', '#4a4478', 80, 0.3), 0, 0);
    const a = PS(64); put(ctx, burstSpr(C.gold), 640, 360, { s: 1.5 * E.out(cl((t - a) / 0.4)), rot: t * 0.1, d: 0.6 });
    const A = dropIn(t, P(65, 'nobel') - 0.15, 0.45, 90);
    if (A) { put(ctx, cache('medal', () => { const r = H.rng(8); return compose(280, 280, [[(x) => { x.fillStyle = C.amber; x.beginPath(); poly(x, circPts(r, 140, 140, 130, 11, 0.6)); x.fill(); }, 0], [(x) => { x.fillStyle = C.gold; x.beginPath(); poly(x, circPts(r, 140, 140, 104, 11, 0.6)); x.fill(); }, 0.3]]); }), 640, 340 + A.dy, { d: 1.3 + A.d }); beeAt(ctx, 640, 340 + A.dy, 0.4, t, { d: 0.5 }); }
    tag(ctx, 'THE DANCE CODE', 640, 80, t, P(64, 'code') - 0.15, { px: 58, col: C.ink });
    tag(ctx, 'NOBEL PRIZE', 310, 560, t, P(65, 'nobel') - 0.1, { px: 56, col: C.coral, rot: -0.02 });
    const B = dropIn(t, P(65, 'nineteen') - 0.12, 0.4, 60); if (B) numberRow(ctx, '1973', 900, 570 + B.dy, 100, C.gold, { center: true });
  };
  // --- chapter 5: the thermostat
  const sBabies = (ctx, t) => {
    ctx.drawImage(comb('brood2', C.broodD, C.brood), 0, 0);
    [[230, 230], [500, 230], [230, 500], [500, 500], [770, 370]].forEach(([x, y], i) => { put(ctx, cellS(C.broodD, 120), x, y, { d: 0.9 }); put(ctx, larva(), x, y + Math.sin(t * 2.5 + i) * 3, { s: 0.92 }); });
    thermo(ctx, 1090, 330, 1.25, 0.85 * E.out(cl((t - P(67, 'ninety') + 0.2) / 0.8)));
    const B = dropIn(t, P(67, 'ninety') - 0.12, 0.4, 70); if (B) put(ctx, wordSpr('95°F', 110, C.coral, C.card, 16), 1000, 610 + B.dy, { d: 1.3 + B.d, rot: -0.02 });
    tag(ctx, 'PICKY BABIES', 500, 670, t, P(66, 'picky') - 0.12, { px: 58, col: C.ink, rot: -0.01 });
  };
  const sCold = (ctx, t) => {
    ctx.drawImage(comb('cold', '#3d6fa8', '#5a8cc0'), 0, 0); snowfall(ctx, t, 18);
    const s = P(69, 'shiver') - 0.1;
    [[250, 430], [640, 460], [1030, 430]].forEach(([x, y], i) => { const on = t > s; beeAt(ctx, x, y, 0.82, t, { ph: i, shake: on ? 7 : 0, flip: i === 2 }); if (t > P(71, 'heaters') - 0.2) heat(ctx, x + (i === 2 ? -50 : 50), y - 90, t + i, C.coral, 3, 1); });
    const A = dropIn(t, PS(68) - 0.1, 0.4, 70); if (A) put(ctx, wordSpr('TOO COLD?', 90, C.blue, C.card, 16), 640, 95 + A.dy, { d: 1.3 + A.d, rot: -0.015 });
    tag(ctx, 'SHIVER THE MUSCLES', 640, 640, t, s, { px: 48, col: C.ink });
    if (t > P(70, 'without') - 0.1 && t < P(71, 'heaters') - 0.2) tag(ctx, 'NO FLAPPING', 640, 230, t, P(70, 'without') - 0.1, { px: 46, col: C.red });
    tag(ctx, 'TINY HEATERS', 640, 230, t, P(71, 'heaters') - 0.2, { px: 56, col: C.coral, rot: 0.01 });
  };
  const sHot = (ctx, t) => {
    ctx.drawImage(comb('hot', '#d9742c', '#ea9142'), 0, 0);
    const A = dropIn(t, PS(72) - 0.1, 0.4, 70); if (A) put(ctx, wordSpr('TOO HOT?', 90, C.red, C.card, 16), 640, 95 + A.dy, { d: 1.3 + A.d, rot: 0.015 });
    const a = P(73, 'water') - 0.2, u = E.inOut(cl((t - a) / 1)), dx = 160 + u * 300, dy = 330 + Math.sin(u * 3) * 30;
    if (t > a) { beeAt(ctx, dx, dy, 0.6, t, { fly: u < 1 }); if (t < P(74, 'spread')) put(ctx, drop(), dx + 70, dy + 70, { s: 0.9 }); }
    tag(ctx, 'FETCH WATER', 240, 220, t, P(73, 'water') - 0.12, { px: 44, col: C.blue });
    const sp = P(74, 'spread') - 0.1; if (t > sp) { [[400, 520], [520, 590], [640, 520], [760, 590], [880, 520]].forEach(([x, y], i) => { const v = E.back(cl((t - sp - i * 0.1) / 0.3)); put(ctx, cellS('#5fb7d8', 76), x, y, { s: v, d: 0.6 }); }); }
    tag(ctx, 'ON THE COMB', 640, 660, t, P(74, 'comb') - 0.15, { px: 40, col: C.ink });
    const f = P(75, 'fan') - 0.1; if (t > f) { [[930, 300, 0], [1120, 410, 1]].forEach(([x, y, i]) => beeAt(ctx, x, y, 0.72, t, { flip: true, fly: true, ph: i })); tag(ctx, 'FAN!', 1080, 200, t, f, { px: 62, col: C.teal, rot: 0.03 }); [0, 1, 2].forEach((i) => { const p = ((t * 1.1 + i * 0.33) % 1); ctx.save(); ctx.globalAlpha = 1 - p; ctx.strokeStyle = C.card; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(800 - p * 240, 380 + i * 34); ctx.lineTo(720 - p * 240, 380 + i * 34); ctx.stroke(); ctx.restore(); }); }
  };
  const sCool = (ctx, t) => {
    outdoor(ctx, 'cool', PAL_M, t);
    ctx.save(); kb(ctx, t, PS(76), PE(78), 1, 1.05, 640, 460); put(ctx, hiveBox(), 640, 450, { s: 1.15, d: 1.5 });
    for (let i = 0; i < 6; i++) { const p = (t * 0.45 + i / 6) % 1; ctx.save(); ctx.globalAlpha = 0.9 * (1 - p); ctx.translate(0, -p * 160); put(ctx, drop(), 400 + i * 96, 300, { s: 0.45 + p * 0.3, d: 0.3 }); ctx.restore(); }
    ctx.restore();
    tag(ctx, 'EVAPORATING = COOLER', 640, 90, t, P(76, 'evaporates') - 0.15, { px: 50, col: C.blue });
    const A = dropIn(t, P(77, 'air') - 0.12, 0.4, 70); if (A) put(ctx, wordSpr('AIR CON', 84, C.teal, C.card, 14), 250, 300 + A.dy, { d: 1.3 + A.d, rot: -0.03 });
    tag(ctx, 'BEE POWERED', 1030, 300, t, P(78, 'powered') - 0.12, { px: 54, col: C.coral, rot: 0.03 });
    beeAt(ctx, 1040, 470, 0.5, t, { flip: true, fly: true }); beeAt(ctx, 240, 470, 0.5, t, { fly: true, ph: 2 });
  };
  const ball = (ctx, cx, cy, t, R, tight) => { const n = 120; for (let i = n - 1; i >= 0; i--) { const r = H.rng(i + 3000), a = r() * TAU, d = Math.sqrt((i + 6) / n) * R, out = 1 + (1 - tight) * r.range(0.8, 2.4), x = cx + Math.cos(a + t * 0.05) * d * out, y = cy + Math.sin(a + t * 0.05) * d * out; beeAt(ctx, x, y, 0.2, t, { ph: i, rot: a, noWing: true, shake: tight > 0.9 ? 3 : 0, d: 0.4 }); } };
  const sWinter = (ctx, t) => {
    outdoor(ctx, 'winter', { sky: ['#1d1f45', '#33356a'], stars: true, far: '#3a4278', mid: '#2e3f62', ground: '#dde8ee', fore: '#7f9bb0' }, t, { noFore: true });
    snowfall(ctx, t, 28);
    put(ctx, cardS(760, 540, '#3a241b'), 640, 400, { d: 1.5 });
    const tight = E.inOut(cl((t - P(81, 'tight') + 0.5) / 1.2));
    ctx.save(); ctx.beginPath(); ctx.rect(270, 140, 740, 520); ctx.clip(); ball(ctx, 640, 410, t, 210, tight); beeAt(ctx, 640, 410, 0.46, t, { kind: 'queen', crown: true, noWing: true, d: 1 }); ctx.restore();
    tag(ctx, 'NO HIBERNATING', 640, 70, t, P(79, 'hibernate') - 0.2, { px: 54, col: C.blue });
    const B = dropIn(t, P(80, 'fifty') - 0.12, 0.4, 60); if (B) put(ctx, wordSpr('57°F', 74, C.blue, C.card, 12), 170, 240 + B.dy, { d: 1.2 + B.d, rot: -0.03 });
    tag(ctx, 'A BALL OF BEES', 1090, 610, t, P(81, 'ball') - 0.15, { px: 34, col: C.ink, rot: 0.02 });
  };
  const sFuel = (ctx, t) => {
    ctx.drawImage(comb('fuel', '#5a3320', '#764a2c'), 0, 0);
    const A = dropIn(t, P(82, 'burn') - 0.25, 0.4, 70); if (A) put(ctx, jar(), 310, 380 + A.dy, { s: 1.8, d: 1.3 + A.d });
    arrow(ctx, 480, 380, 620, 320, 760, 380, cl((t - P(82, 'burn')) / 0.5), C.gold, 307);
    const F = popIn(t, P(82, 'heat') - 0.1, 0.35); if (F) { put(ctx, flame(), 940, 360 + Math.sin(t * 9) * 4, { s: F.s * (2 + Math.sin(t * 13) * 0.06), d: 1, rot: Math.sin(t * 7) * 0.03 }); }
    tag(ctx, 'HONEY', 310, 600, t, P(82, 'honey') - 0.12, { px: 62, col: C.amber });
    tag(ctx, 'HEAT', 940, 600, t, P(82, 'heat') - 0.12, { px: 62, col: C.coral });
    const B = dropIn(t, P(84, 'winter') - 0.15, 0.45, 80); if (B) put(ctx, wordSpr('WINTER FUEL', 88, C.ink, C.gold, 16), 640, 110 + B.dy, { d: 1.5 + B.d, rot: -0.015 });
  };
  // --- the payoff: one giant animal made of bees
  const SIL = (() => { const r = H.rng(5150), o = []; const tries = (cx, cy, rx, ry, n, col) => { for (let i = 0; i < n; i++) { const a = r() * TAU, d = Math.sqrt(r()); o.push([cx + Math.cos(a) * d * rx, cy + Math.sin(a) * d * ry, col]); } }; tries(440, 400, 230, 150, 170); tries(740, 380, 110, 110, 70); tries(910, 370, 80, 80, 40); tries(620, 170, 170, 70, 40); return o; })();
  const sEnd = (ctx, t) => {
    ctx.drawImage(comb('end', '#3e6b5c', '#4f8370', 70, 0.4), 0, 0);
    const a = PS(87), u = E.inOut(cl((t - a) / 2.6));
    if (u > 0.6) { const g = cache('giant', () => compose(W, HH, [[(x) => { x.fillStyle = 'rgba(236,246,250,0.9)'; x.beginPath(); x.ellipse(620, 165, 195, 85, -0.1, 0, TAU); x.fill(); }, 0], [(x) => { x.fillStyle = C.gold; x.beginPath(); x.ellipse(440, 400, 250, 165, 0, 0, TAU); x.fill(); x.save(); x.clip(); x.fillStyle = C.dark; [270, 380, 490, 600].forEach((v) => x.fillRect(v, 225, 46, 350)); x.restore(); }, 0.3], [(x) => { x.fillStyle = '#a06a2a'; x.beginPath(); x.arc(740, 380, 120, 0, TAU); x.fill(); x.fillStyle = C.dark; x.beginPath(); x.arc(915, 370, 90, 0, TAU); x.fill(); x.fillStyle = C.white; x.beginPath(); x.arc(950, 345, 26, 0, TAU); x.fill(); }, 0.3]])); ctx.save(); ctx.globalAlpha = cl((u - 0.6) / 0.4) * 0.9; ctx.drawImage(g, 0, 0); ctx.restore(); }
    SIL.forEach(([x, y], i) => { const r = H.rng(i + 7000), sx = r.range(-40, 1320), sy = r.range(30, 690), sc = 0.16 * (1 - u * 0.25), wob = 1 - u; beeAt(ctx, sx + (x - sx) * u + Math.sin(t * 1.3 + i) * 34 * wob + Math.sin(t * 3 + i) * 4, sy + (y - sy) * u + Math.cos(t * 1.1 + i) * 24 * wob, sc, t, { fly: true, ph: i, noWing: i % 3 !== 0, d: 0.3 }); });
    tag(ctx, 'NO BEE KNOWS THE PLAN', 640, 80, t, P(85, 'single') - 0.12, { px: 54, col: C.ink });
    if (t < a) tag(ctx, 'SIMPLE RULES', 640, 640, t, P(86, 'simple') - 0.12, { px: 56, col: C.coral });
    if (t > a) numberRow(ctx, '60,000', 300, 645, 70, C.coral, { center: true });
    tag(ctx, 'ONE GIANT ANIMAL', 880, 645, t, P(88, 'giant') - 0.12, { px: 50, col: C.ink, rot: -0.01 });
  };
  const soap = () => cache('soap', () => { const r = H.rng(9); return compose(320, 200, [[(x) => { x.fillStyle = '#c8e8e8'; x.beginPath(); x.roundRect(14, 30, 292, 140, 44); x.fill(); }, 0], [(x) => { x.fillStyle = '#e4f6f4'; x.beginPath(); x.roundRect(46, 56, 228, 88, 30); x.fill(); }, 0.2]]); });
  const cilantro = () => cache('cil', () => { const r = H.rng(10); return compose(300, 330, [[(x) => { x.strokeStyle = C.leafD; x.lineWidth = 9; x.lineCap = 'round'; x.beginPath(); x.moveTo(150, 320); x.lineTo(150, 130); x.moveTo(150, 220); x.lineTo(70, 130); x.moveTo(150, 220); x.lineTo(230, 130); x.stroke(); }, 0.1], [(x) => { x.fillStyle = C.leaf; [[150, 80], [70, 100], [230, 100]].forEach(([a, b]) => { x.beginPath(); for (let i = 0; i < 5; i++) { const an = -Math.PI / 2 + (i - 2) * 0.8; poly(x, circPts(r, a + Math.cos(an) * 32, b + Math.sin(an) * 32, 26, 7, 1.2)); } x.fill(); }); }, 0.4]]); });
  const sNext = (ctx, t) => {
    ctx.drawImage(comb('next', C.waxD, C.wax), 0, 0);
    const a = PS(89);
    tag(ctx, 'NEXT UP', 640, 80, t, a, { px: 58, col: C.coral });
    const A = dropIn(t, P(89, 'cilantro') - 0.15, 0.4, 70); if (A) put(ctx, cilantro(), 370, 340 + A.dy, { s: 1.05, rot: Math.sin(t * 2) * 0.03, d: 1.2 + A.d });
    const B = popIn(t, P(89, 'soap') - 0.15, 0.35); if (B) { put(ctx, wordSpr('=', 110, C.ink, null), 620, 350, { s: B.s, d: 0.5 }); put(ctx, soap(), 900, 350, { s: B.s * 1.05, d: 1.2 + B.d, rot: 0.03 }); }
    tag(ctx, 'WHY, FOR SOME PEOPLE?', 640, 610, t, PS(90) - 0.1, { px: 52, col: C.ink });
  };
  const SC = [
    { s: 0, f: sHook }, { s: PS(2), f: sPromise, tr: 'cut' }, { s: PS(5), f: sTitle, tr: 'rip' },
    { s: PS(6), f: sQueen, tr: 'drop', ch: [1, 'THE QUEEN'] }, { s: PS(9), f: sEggs, tr: 'pan' }, { s: PS(13), f: sDrones, tr: 'pan' }, { s: PS(16), f: sEvict, tr: 'rip' }, { s: PS(18), f: sWorkers, tr: 'drop' }, { s: PS(20), f: sSameEgg, tr: 'pan' },
    { s: PS(24), f: sCareer, tr: 'rip', ch: [2, 'THE CAREER'] }, { s: PS(26), f: sCleaner, tr: 'pan' }, { s: PS(28), f: sNurse, tr: 'pan' }, { s: PS(30), f: sBuilder, tr: 'pan' }, { s: PS(32), f: sGuard, tr: 'pan' }, { s: PS(33), f: sForager, tr: 'pan' },
    { s: PS(36), f: sWax, tr: 'rip', ch: [3, 'THE WAX'], chAt: PS(36) - 0.05 }, { s: PS(40), f: sCircles, tr: 'drop' }, { s: PS(41), f: sSquares, tr: 'pan' }, { s: PS(43), f: sHex, tr: 'pan' }, { s: PS(45), f: sProof, tr: 'drop' },
    { s: PS(48), f: sDark, tr: 'rip', ch: [4, 'THE DANCE'] }, { s: PS(52), f: sDance, tr: 'drop' }, { s: PS(57), f: sAngle, tr: 'pan' }, { s: PS(61), f: sDist, tr: 'pan' }, { s: PS(64), f: sNobel, tr: 'drop' },
    { s: PS(66), f: sBabies, tr: 'rip', ch: [5, 'THE THERMOSTAT'] }, { s: PS(68), f: sCold, tr: 'drop' }, { s: PS(72), f: sHot, tr: 'pan' }, { s: PS(76), f: sCool, tr: 'pan' }, { s: PS(79), f: sWinter, tr: 'rip' }, { s: PS(82), f: sFuel, tr: 'pan' },
    { s: PS(85), f: sEnd, tr: 'rip' }, { s: PS(89), f: sNext, tr: 'rip' },
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
    const buzz = (t, d = 1, g = 0.06) => k.noise(t, { dur: d, filter: 'bandpass', f: 240, q: 7, gain: g, a: 0.1, minor: true });
    hit(P(0, 'sixty') - 0.05, 0.9); nope(P(0, 'no')); buzz(0.3, 2.5);
    k.play('ding', P(4, 'dancing'), { f: 'E5', gain: 0.35 }); k.play('sparkle', P(5, 'hive'), { gain: 0.5 });
    nope(P(8, 'doesnt')); hit(P(10, 'fifteen') - 0.05, 1);
    for (let i = 0; i < 5; i++) pop(P(9, 'eggs') + i * 0.7, 0.5);
    k.play('slap', P(17, 'shove'), { gain: 0.8 }); k.play('whoosh', P(17, 'shove') + 0.1, { dur: 0.5, gain: 0.4 });
    k.play('ding', P(19, 'female'), { f: 'G5', gain: 0.35 }); k.play('sparkle', P(22, 'royal'), { gain: 0.6 });
    hit(P(24, 'six') - 0.05, 0.9);
    STOPS.forEach((_, i) => k.play('ding', P(25, 'changes') + i * 0.42, { f: ['C5', 'D5', 'E5', 'G5', 'A5'][i], gain: 0.28 }));
    for (let x = 0; x < 1.2; x += 0.16) k.noise(P(27, 'polishing') + x, { dur: 0.1, filter: 'bandpass', f: 3000, q: 1, gain: 0.08, minor: true });
    k.play('sparkle', P(27, 'cell'), { gain: 0.4 }); pop(PS(29)); pop(PS(29) + 0.65); pop(PS(29) + 1.3);
    for (let i = 0; i < 9; i++) flick(PS(31) - 0.2 + i * 0.13, 1.2);
    k.play('stamp', P(32, 'guard'), { gain: 0.5 }); k.play('riser', P(34, 'outside') - 0.4, { dur: 0.5, gain: 0.3 }); buzz(PS(34), 2.5);
    hit(P(37, 'eight') - 0.05, 1); k.play('thud', P(38, 'one'), { f: 110, gain: 0.6 }); k.play('error', P(39, 'waste') - 0.1, { gain: 0.3 });
    k.play('error', P(40, 'gaps'), { gain: 0.35 }); nope(P(42, 'more')); k.play('success', P(43, 'hexagons'), { gain: 0.45 });
    k.play('ding', P(44, 'least'), { f: 'A5', gain: 0.35 }); hit(P(46, 'nineteen') - 0.05, 1); k.play('slap', P(47, 'no'), { gain: 0.4 });
    k.play('sparkle', P(48, 'coolest'), { gain: 0.5 }); k.play('ding', P(52, 'dances'), { f: 'C6', gain: 0.4 });
    for (let c = 0; c < 2; c++) for (let x = 0; x < 0.8; x += 0.05) k.noise(PS(53) + c * 1.5 + x, { dur: 0.035, filter: 'bandpass', f: 500 + 300 * (x % 0.1 > 0.05), q: 3, gain: 0.08, minor: true });
    k.play('ding', P(58, 'sun'), { f: 'E5', gain: 0.35 }); k.play('whoosh', P(59, 'sixty'), { dur: 0.7, gain: 0.3 }); hit(P(60, 'sixty') - 0.05, 0.7);
    for (let x = 0; x < 2.5; x += 0.25) k.noise(P(62, 'two') + x, { dur: 0.02, filter: 'bandpass', f: 3200, q: 3, gain: 0.14, minor: true });
    hit(P(63, 'mile') - 0.05, 0.9); k.play('sparkle', P(65, 'nobel'), { gain: 0.7 }); k.play('stamp', P(65, 'nineteen'), { gain: 0.6 });
    hit(P(67, 'ninety') - 0.05, 1); for (let x = 0; x < 1.5; x += 0.06) k.noise(P(69, 'shiver') + x, { dur: 0.05, filter: 'bandpass', f: 320, q: 5, gain: 0.08, minor: true });
    k.play('ding', P(71, 'heaters'), { f: 'G5', gain: 0.35 }); k.play('pop', P(73, 'water'), { gain: 0.7 }); buzz(P(75, 'fan'), 1.5, 0.08);
    k.play('success', P(77, 'air'), { gain: 0.4 }); k.play('thud', P(80, 'fifty'), { f: 100, gain: 0.4 }); k.play('whoosh', P(81, 'tight') - 0.1, { dur: 0.6, gain: 0.35 });
    hit(P(84, 'winter') - 0.05, 0.9); k.play('riser', P(87, 'sixty') - 0.2, { dur: 2.2, gain: 0.35 }); buzz(PS(87), 3, 0.1);
    hit(P(88, 'giant') - 0.05, 1); ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', P(88, 'animal') + 0.1 + i * 0.09, { f, gain: 0.42 }));
    k.play('ding', P(89, 'next'), { f: 'G5', gain: 0.4 }); nope(P(89, 'soap'));
  }
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    ctx.drawImage(comb('thumb', C.waxD, C.wax), 0, 0);
    put(ctx, burstSpr(C.coral), 900, 400, { s: 1.6, d: 0.7 });
    beeAt(ctx, 900, 410, 1.0, 0, { rot: -0.9 });
    put(ctx, wordSpr('THEY', 130, C.ink, C.card, 20), 300, 170, { d: 1.8, rot: -0.03 });
    put(ctx, wordSpr('DANCE', 150, C.coral, C.card, 22), 370, 360, { d: 1.8, rot: 0.02 });
    put(ctx, wordSpr('MAPS', 130, C.card, C.ink, 20), 300, 560, { d: 1.8, rot: -0.02 });
    finish(ctx, 0, [700, 400]);
    ctx.restore();
  }
  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s - 0.05 ? j : a), 0) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();
