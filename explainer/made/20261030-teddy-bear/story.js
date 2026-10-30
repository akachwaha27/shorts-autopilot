// ================= Cut-Paper Diorama, 16:9 1280x720: "The Story of the Teddy Bear: How It All Started" =================
// Long video (~3.3 min), 6 chapters + intro/teaser. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A cardstock shadow-box told scene by scene: a Mississippi swamp, a newspaper desk, a Brooklyn candy shop, a German workshop,
// a toy fair, a measuring table, an auction and a bedroom. Every shape is a scissor-cut sheet with fibre texture, lit edges and
// drop shadows (the reference's paperize/shadowDraw); labels are paper tags dropped on what they name, numbers are cut digit
// tiles, arrows are paper strips, emphasis is a paper ring or sunburst. Scene changes: camera pans along the diorama,
// a new backdrop sheet dropping in on top, and a torn-paper rip for the twist.
(function () {
  // ---------- voiceover phrases (phrases.json, Kokoro am_michael) ----------
  const PH = [{"s":0.25,"e":3.9,"text":"In nineteen-oh-two, a president refused to shoot one bear,","words":[["in",0.25],["nineteenohtwo",0.41],["a",1.44],["president",1.52],["refused",2.23],["to",2.79],["shoot",2.94],["one",3.34],["bear",3.58]]},{"s":4.2,"e":6.15,"text":"and that's why your teddy bear exists.","words":[["and",4.2],["thats",4.39],["why",4.72],["your",4.91],["teddy",5.17],["bear",5.5],["exists",5.76]]},{"s":6.7,"e":8.27,"text":"Here's how it all started,","words":[["heres",6.7],["how",7.09],["it",7.32],["all",7.48],["started",7.72]]},{"s":8.57,"e":10.92,"text":"on a muddy hunting trip in Mississippi.","words":[["on",8.57],["a",8.71],["muddy",8.79],["hunting",9.16],["trip",9.67],["in",9.96],["mississippi",10.11]]},{"s":11.47,"e":12.37,"text":"It's November.","words":[["its",11.47],["november",11.71]]},{"s":12.92,"e":15.99,"text":"President Theodore Roosevelt is out in the swamps,","words":[["president",12.92],["theodore",13.57],["roosevelt",14.16],["is",14.82],["out",14.96],["in",15.18],["the",15.33],["swamps",15.55]]},{"s":16.29,"e":18.34,"text":"on a bear hunt with the state's governor.","words":[["on",16.29],["a",16.42],["bear",16.48],["hunt",16.74],["with",16.99],["the",17.25],["states",17.44],["governor",17.82]]},{"s":18.89,"e":20.26,"text":"After days of searching,","words":[["after",18.89],["days",19.23],["of",19.51],["searching",19.64]]},{"s":20.56,"e":22.65,"text":"Roosevelt hasn't seen a single bear.","words":[["roosevelt",20.56],["hasnt",21.21],["seen",21.57],["a",21.86],["single",21.93],["bear",22.36]]},{"s":23.2,"e":24.97,"text":"So his guide, Holt Collier,","words":[["so",23.2],["his",23.37],["guide",23.62],["holt",24.04],["collier",24.38]]},{"s":25.27,"e":27.45,"text":"tracks one down with the hunting dogs,","words":[["tracks",25.27],["one",25.69],["down",25.9],["with",26.18],["the",26.46],["hunting",26.67],["dogs",27.16]]},{"s":27.75,"e":29.11,"text":"and ties it to a tree.","words":[["and",27.75],["ties",28.0],["it",28.34],["to",28.51],["a",28.68],["tree",28.77]]},{"s":29.66,"e":31.69,"text":"Everyone waits for the president to shoot.","words":[["everyone",29.66],["waits",30.12],["for",30.41],["the",30.59],["president",30.76],["to",31.28],["shoot",31.4]]},{"s":32.24,"e":33.71,"text":"But Roosevelt says no.","words":[["but",32.24],["roosevelt",32.48],["says",33.22],["no",33.55]]},{"s":34.26,"e":36.19,"text":"Shooting a tied-up bear isn't fair,","words":[["shooting",34.26],["a",34.83],["tiedup",34.9],["bear",35.33],["isnt",35.62],["fair",35.9]]},{"s":36.49,"e":37.73,"text":"so he refuses.","words":[["so",36.49],["he",36.72],["refuses",36.94]]},{"s":38.28,"e":39.41,"text":"A few days later,","words":[["a",38.28],["few",38.37],["days",38.63],["later",38.98]]},{"s":39.71,"e":41.72,"text":"a cartoonist named Clifford Berryman","words":[["a",39.71],["cartoonist",39.78],["named",40.4],["clifford",40.72],["berryman",41.22]]},{"s":42.02,"e":44.35,"text":"draws the moment for the Washington Post.","words":[["draws",42.02],["the",42.36],["moment",42.57],["for",42.98],["the",43.18],["washington",43.39],["post",44.08]]},{"s":44.9,"e":47.46,"text":"In his cartoon, the bear is small and scared,","words":[["in",44.9],["his",45.05],["cartoon",45.27],["the",45.78],["bear",46.0],["is",46.29],["small",46.43],["and",46.8],["scared",47.02]]},{"s":47.76,"e":49.1,"text":"with big round eyes.","words":[["with",47.76],["big",48.09],["round",48.34],["eyes",48.76]]},{"s":49.65,"e":50.63,"text":"Readers love it.","words":[["readers",49.65],["love",50.18],["it",50.48]]},{"s":51.18,"e":53.79,"text":"Berryman keeps drawing that little bear for years,","words":[["berryman",51.18],["keeps",51.68],["drawing",51.99],["that",52.43],["little",52.67],["bear",53.05],["for",53.3],["years",53.48]]},{"s":54.09,"e":56.01,"text":"like Roosevelt's furry sidekick.","words":[["like",54.09],["roosevelts",54.38],["furry",55.09],["sidekick",55.44]]},{"s":56.56,"e":58.53,"text":"Now jump to Brooklyn, New York.","words":[["now",56.56],["jump",56.81],["to",57.13],["brooklyn",57.3],["new",57.95],["york",58.2]]},{"s":59.08,"e":61.75,"text":"Morris and Rose Michtom run a small shop,","words":[["morris",59.08],["and",59.56],["rose",59.8],["michtom",60.13],["run",60.69],["a",60.94],["small",61.02],["shop",61.42]]},{"s":62.05,"e":63.63,"text":"selling candy and toys.","words":[["selling",62.05],["candy",62.63],["and",63.04],["toys",63.29]]},{"s":64.18,"e":65.46,"text":"They see the cartoon,","words":[["they",64.18],["see",64.48],["the",64.7],["cartoon",64.93]]},{"s":65.76,"e":67.85,"text":"and Rose sews a soft, stuffed bear.","words":[["and",65.76],["rose",65.99],["sews",66.3],["a",66.61],["soft",66.69],["stuffed",67.0],["bear",67.54]]},{"s":68.4,"e":69.81,"text":"They put it in the window,","words":[["they",68.4],["put",68.69],["it",68.9],["in",69.04],["the",69.18],["window",69.39]]},{"s":70.11,"e":72.2,"text":"with a sign that says, Teddy's bear.","words":[["with",70.11],["a",70.42],["sign",70.5],["that",70.81],["says",71.12],["teddys",71.43],["bear",71.89]]},{"s":72.75,"e":75.43,"text":"The story goes, they even wrote to Roosevelt","words":[["the",72.75],["story",72.97],["goes",73.34],["they",73.64],["even",73.94],["wrote",74.24],["to",74.61],["roosevelt",74.76]]},{"s":75.73,"e":77.65,"text":"to ask if they could use his name.","words":[["to",75.73],["ask",75.87],["if",76.1],["they",76.24],["could",76.54],["use",76.91],["his",77.13],["name",77.35]]},{"s":78.2,"e":79.7,"text":"The bears sell out fast.","words":[["the",78.2],["bears",78.44],["sell",78.83],["out",79.15],["fast",79.39]]},{"s":80.25,"e":81.71,"text":"So many people want one,","words":[["so",80.25],["many",80.41],["people",80.71],["want",81.17],["one",81.48]]},{"s":82.01,"e":85.15,"text":"the Michtoms start a whole toy company, called Ideal.","words":[["the",82.01],["michtoms",82.23],["start",82.82],["a",83.18],["whole",83.25],["toy",83.62],["company",83.84],["called",84.35],["ideal",84.79]]},{"s":85.7,"e":86.91,"text":"But here's the twist.","words":[["but",85.7],["heres",85.93],["the",86.31],["twist",86.53]]},{"s":87.46,"e":89.56,"text":"At almost the same time, in Germany,","words":[["at",87.46],["almost",87.61],["the",88.06],["same",88.28],["time",88.58],["in",88.88],["germany",89.03]]},{"s":89.86,"e":92.76,"text":"a toy maker called Steiff was making bears too.","words":[["a",89.86],["toy",89.94],["maker",90.16],["called",90.55],["steiff",91.0],["was",91.46],["making",91.69],["bears",92.15],["too",92.53]]},{"s":93.31,"e":95.24,"text":"Margarete Steiff started the company","words":[["margarete",93.31],["steiff",93.85],["started",94.21],["the",94.63],["company",94.82]]},{"s":95.54,"e":97.11,"text":"by sewing felt elephants.","words":[["by",95.54],["sewing",95.69],["felt",96.14],["elephants",96.44]]},{"s":97.66,"e":100.15,"text":"Her nephew Richard loved sketching bears,","words":[["her",97.66],["nephew",97.87],["richard",98.3],["loved",98.8],["sketching",99.15],["bears",99.79]]},{"s":100.45,"e":103.39,"text":"and he designed one with arms and legs that move.","words":[["and",100.45],["he",100.67],["designed",100.82],["one",101.43],["with",101.66],["arms",101.96],["and",102.26],["legs",102.49],["that",102.79],["move",103.09]]},{"s":103.94,"e":105.22,"text":"In nineteen-oh-three,","words":[["in",103.94],["nineteenohthree",104.09]]},{"s":105.52,"e":107.71,"text":"he took it to a big toy fair in Leipzig.","words":[["he",105.52],["took",105.67],["it",105.96],["to",106.11],["a",106.25],["big",106.33],["toy",106.55],["fair",106.77],["in",107.06],["leipzig",107.2]]},{"s":108.26,"e":110.22,"text":"At first, almost nobody cared.","words":[["at",108.26],["first",108.43],["almost",108.83],["nobody",109.32],["cared",109.81]]},{"s":110.77,"e":113.49,"text":"Then an American buyer ordered three thousand.","words":[["then",110.77],["an",111.05],["american",111.19],["buyer",111.75],["ordered",112.09],["three",112.58],["thousand",112.93]]},{"s":114.04,"e":115.4,"text":"By nineteen-oh-seven,","words":[["by",114.04],["nineteenohseven",114.2]]},{"s":115.7,"e":119.48,"text":"Steiff was making nine hundred seventy-four thousand bears.","words":[["steiff",115.7],["was",116.15],["making",116.38],["nine",116.83],["hundred",117.13],["seventyfour",117.66],["thousand",118.49],["bears",119.1]]},{"s":120.03,"e":122.1,"text":"So the teddy bear was born twice,","words":[["so",120.03],["the",120.19],["teddy",120.43],["bear",120.82],["was",121.14],["born",121.38],["twice",121.7]]},{"s":122.4,"e":125.37,"text":"on two continents, at almost the same moment.","words":[["on",122.4],["two",122.57],["continents",122.81],["at",123.64],["almost",123.8],["the",124.3],["same",124.55],["moment",124.88]]},{"s":125.92,"e":128.27,"text":"Now look closely at a teddy from back then.","words":[["now",125.92],["look",126.13],["closely",126.41],["at",126.89],["a",127.03],["teddy",127.1],["from",127.44],["back",127.72],["then",128.0]]},{"s":128.82,"e":131.26,"text":"Long snout, low forehead, skinny arms.","words":[["long",128.82],["snout",129.15],["low",129.56],["forehead",129.8],["skinny",130.45],["arms",130.93]]},{"s":131.81,"e":133.29,"text":"It looks like a real bear.","words":[["it",131.81],["looks",131.96],["like",132.33],["a",132.63],["real",132.7],["bear",133.0]]},{"s":133.84,"e":135.95,"text":"But scientists who measured old teddies","words":[["but",133.84],["scientists",134.03],["who",134.65],["measured",134.83],["old",135.33],["teddies",135.51]]},{"s":136.25,"e":138.57,"text":"found they slowly changed over the years.","words":[["found",136.25],["they",136.59],["slowly",136.86],["changed",137.27],["over",137.75],["the",138.02],["years",138.23]]},{"s":139.12,"e":140.48,"text":"The snouts got shorter.","words":[["the",139.12],["snouts",139.33],["got",139.76],["shorter",139.98]]},{"s":141.03,"e":142.44,"text":"The foreheads got bigger.","words":[["the",141.03],["foreheads",141.23],["got",141.84],["bigger",142.04]]},{"s":142.99,"e":144.31,"text":"The eyes got rounder.","words":[["the",142.99],["eyes",143.23],["got",143.54],["rounder",143.77]]},{"s":144.86,"e":147.12,"text":"Teddy bears started to look like babies.","words":[["teddy",144.86],["bears",145.2],["started",145.54],["to",146.02],["look",146.16],["like",146.43],["babies",146.71]]},{"s":147.67,"e":149.96,"text":"Why? Because people pick the cutest one.","words":[["why",147.67],["because",147.88],["people",148.38],["pick",148.81],["the",149.1],["cutest",149.32],["one",149.75]]},{"s":150.51,"e":153.55,"text":"Our brains are wired to love baby-like faces,","words":[["our",150.51],["brains",150.76],["are",151.27],["wired",151.52],["to",151.94],["love",152.11],["babylike",152.45],["faces",153.13]]},{"s":153.85,"e":157.0,"text":"so the cutest bears sold best, year after year.","words":[["so",153.85],["the",154.02],["cutest",154.27],["bears",154.78],["sold",155.21],["best",155.55],["year",155.89],["after",156.23],["year",156.66]]},{"s":157.55,"e":159.63,"text":"It's evolution, but in a toy shop.","words":[["its",157.55],["evolution",157.8],["but",158.54],["in",158.79],["a",158.96],["toy",159.04],["shop",159.29]]},{"s":160.18,"e":162.1,"text":"Today, teddy bears are everywhere.","words":[["today",160.18],["teddy",160.52],["bears",160.86],["are",161.21],["everywhere",161.41]]},{"s":162.65,"e":164.59,"text":"In two thousand, one Steiff bear,","words":[["in",162.65],["two",162.8],["thousand",163.02],["one",163.62],["steiff",163.84],["bear",164.29]]},{"s":164.89,"e":166.86,"text":"with sapphire and diamond eyes,","words":[["with",164.89],["sapphire",165.19],["and",165.8],["diamond",166.03],["eyes",166.56]]},{"s":167.16,"e":169.12,"text":"sold at an auction in Monaco","words":[["sold",167.16],["at",167.5],["an",167.67],["auction",167.84],["in",168.44],["monaco",168.61]]},{"s":169.42,"e":171.47,"text":"for two point one million dollars.","words":[["for",169.42],["two",169.64],["point",169.86],["one",170.22],["million",170.44],["dollars",170.95]]},{"s":172.02,"e":173.97,"text":"And it's not just kids who love them.","words":[["and",172.02],["its",172.23],["not",172.44],["just",172.65],["kids",172.92],["who",173.2],["love",173.41],["them",173.69]]},{"s":174.52,"e":175.82,"text":"In one British survey,","words":[["in",174.52],["one",174.67],["british",174.88],["survey",175.38]]},{"s":176.12,"e":179.17,"text":"about a third of adults said they still sleep with a teddy.","words":[["about",176.12],["a",176.44],["third",176.51],["of",176.83],["adults",176.96],["said",177.35],["they",177.61],["still",177.87],["sleep",178.19],["with",178.52],["a",178.78],["teddy",178.84]]},{"s":179.72,"e":182.56,"text":"All because, more than a hundred twenty years ago,","words":[["all",179.72],["because",179.93],["more",180.43],["than",180.71],["a",181.0],["hundred",181.07],["twenty",181.56],["years",181.99],["ago",182.34]]},{"s":182.86,"e":184.8,"text":"one president wouldn't shoot one bear.","words":[["one",182.86],["president",183.04],["wouldnt",183.61],["shoot",184.05],["one",184.36],["bear",184.55]]},{"s":185.35,"e":186.22,"text":"Next time:","words":[["next",185.35],["time",185.78]]},{"s":186.52,"e":189.6,"text":"how some animals freeze solid, and wake up again.","words":[["how",186.52],["some",186.75],["animals",187.07],["freeze",187.62],["solid",188.1],["and",188.49],["wake",188.73],["up",189.04],["again",189.2]]}];
  const P = (i, w, n = 1) => { let k = 0; for (const q of PH[i].words) if (q[0] === w && ++k === n) return q[1]; return PH[i].s; };
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
  const q = (v) => Math.round(v * 20) / 20;
  const teddy = (o = {}) => {
    const sn = q(o.snout ?? 0.3), fo = q(o.fore ?? 0.6), ey = q(o.eye ?? 0.6), ar = q(o.arms ?? 0.3);
    const col = o.col || '#c98a4b', dark = o.dark || '#8d5a2b', light = o.light || '#ecc893';
    const key = ['ted', sn, fo, ey, ar, col, o.scared ? 1 : 0, o.gem ? 1 : 0, o.bow || '', o.patch ? 1 : 0, o.noLimbs ? 1 : 0].join('|');
    return cache(key, () => {
      const r = H.rng(key.length * 31 + (o.seed || 3));
      const hx = 150, hy = 128 - fo * 6, hrx = 74 + fo * 10 - sn * 8, hry = 62 + fo * 22;
      const eyeY = hy - 6 + fo * 16 + sn * 4, eyeDx = 26 + fo * 4 - sn * 6, eyeR = 5 + ey * 8;
      const muzY = hy + 34 + sn * 22 - fo * 4, muzRx = 22 + (1 - sn) * 14, muzRy = 20 + sn * 34;
      const armW = 22 - ar * 9, armL = 54 + ar * 30;
      return compose(300, 400, [
        [(c) => { c.fillStyle = col; c.beginPath(); poly(c, circPts(r, hx - hrx * 0.78, hy - hry * 0.72, 24 + (1 - sn) * 4, 9, 0.4)); poly(c, circPts(r, hx + hrx * 0.78, hy - hry * 0.72, 24 + (1 - sn) * 4, 9, 0.4)); c.fill(); }, 0],
        ...(o.noLimbs ? [] : [[(c) => { c.fillStyle = col; c.beginPath(); poly(c, ellPts(r, 112, 340, 28, 36, 0.15)); poly(c, ellPts(r, 188, 340, 28, 36, -0.15)); c.fill(); }, 0.2],
        [(c) => { c.fillStyle = dark; c.beginPath(); poly(c, ellPts(r, 112, 362, 18, 12)); poly(c, ellPts(r, 188, 362, 18, 12)); c.fill(); }, 0.15]]),
        [(c) => { c.fillStyle = col; c.beginPath(); poly(c, ellPts(r, 150, 268, 68 - ar * 8, 80)); c.fill(); }, 0.35],
        [(c) => { c.fillStyle = light; c.beginPath(); poly(c, ellPts(r, 150, 278, 40 - ar * 4, 50)); c.fill(); }, 0.15],
        ...(o.noLimbs ? [] : [[(c) => { c.fillStyle = col; c.beginPath(); poly(c, ellPts(r, 150 - 66 + ar * 6, 228 + armL * 0.42, armW, armL / 2 + 6, 0.45)); poly(c, ellPts(r, 150 + 66 - ar * 6, 228 + armL * 0.42, armW, armL / 2 + 6, -0.45)); c.fill(); }, 0.4]]),
        [(c) => { c.fillStyle = col; c.beginPath(); poly(c, ellPts(r, hx, hy, hrx, hry)); c.fill(); }, 0.55],
        [(c) => { c.fillStyle = dark; c.beginPath(); poly(c, circPts(r, hx - hrx * 0.78, hy - hry * 0.72, 12, 8, 0.3)); poly(c, circPts(r, hx + hrx * 0.78, hy - hry * 0.72, 12, 8, 0.3)); c.fill(); }, 0.1],
        [(c) => { c.fillStyle = light; c.beginPath(); poly(c, ellPts(r, hx, muzY, muzRx, muzRy)); c.fill(); }, 0.3],
        [(c) => {
          if (o.scared) { c.fillStyle = '#fbf6ea'; c.beginPath(); c.arc(hx - eyeDx, eyeY, eyeR + 6, 0, TAU); c.arc(hx + eyeDx, eyeY, eyeR + 6, 0, TAU); c.fill(); }
          c.fillStyle = o.gem ? '#2c5fd0' : '#24161c'; c.beginPath(); c.arc(hx - eyeDx, eyeY, eyeR, 0, TAU); c.arc(hx + eyeDx, eyeY, eyeR, 0, TAU); c.fill();
          c.fillStyle = '#fbf6ea'; c.beginPath(); c.arc(hx - eyeDx - eyeR * 0.35, eyeY - eyeR * 0.35, 1.5 + ey * 2.5, 0, TAU); c.arc(hx + eyeDx - eyeR * 0.35, eyeY - eyeR * 0.35, 1.5 + ey * 2.5, 0, TAU); c.fill();
          c.fillStyle = '#24161c'; c.beginPath(); poly(c, ellPts(r, hx, muzY - muzRy * 0.45, 12, 8, 0, 0.3)); c.fill();
          c.strokeStyle = '#24161c'; c.lineWidth = 3.5; c.lineCap = 'round'; c.beginPath();
          c.moveTo(hx, muzY - muzRy * 0.3); c.lineTo(hx, muzY + muzRy * 0.35);
          if (o.scared) { c.moveTo(hx - 9, muzY + muzRy * 0.55); c.quadraticCurveTo(hx, muzY + muzRy * 0.3, hx + 9, muzY + muzRy * 0.55); }
          else { c.moveTo(hx - 11, muzY + muzRy * 0.3); c.quadraticCurveTo(hx, muzY + muzRy * 0.55, hx + 11, muzY + muzRy * 0.3); }
          c.stroke();
        }, 0.15],
        ...(o.bow ? [[(c) => { c.fillStyle = o.bow; c.beginPath(); poly(c, [[150, 196], [112, 178], [112, 216]]); poly(c, [[150, 196], [188, 178], [188, 216]]); c.fill(); c.beginPath(); c.arc(150, 196, 9, 0, TAU); c.fill(); }, 0.3]] : []),
        ...(o.patch ? [[(c) => { c.fillStyle = '#e8604a'; c.beginPath(); poly(c, rect(r, 170, 250, 196, 276, 10, 0.4)); c.fill(); c.strokeStyle = '#fbf6ea'; c.lineWidth = 2; c.setLineDash([4, 4]); c.strokeRect(173, 253, 20, 20); }, 0.2]] : []),
      ]);
    });
  };
  // a real American black bear, side view (facing right)
  const blackBear = () => cache('bbear', () => {
    const r = H.rng(501), col = '#2c2522', mid = '#3d3330';
    return compose(330, 220, [
      [(c) => { c.fillStyle = '#231d1b'; c.beginPath(); poly(c, rect(r, 70, 120, 98, 205, 14)); poly(c, rect(r, 210, 120, 238, 205, 14)); c.fill(); }, 0],
      [(c) => { c.fillStyle = col; c.beginPath(); poly(c, ellPts(r, 160, 118, 112, 62)); poly(c, ellPts(r, 112, 92, 60, 44)); c.fill(); }, 0.35],
      [(c) => { c.fillStyle = mid; c.beginPath(); poly(c, rect(r, 98, 140, 126, 208, 14)); poly(c, rect(r, 238, 136, 266, 208, 14)); c.fill(); }, 0.3],
      [(c) => { c.fillStyle = col; c.beginPath(); poly(c, circPts(r, 272, 92, 40, 9)); poly(c, circPts(r, 262, 54, 13, 7)); c.fill(); }, 0.45],
      [(c) => { c.fillStyle = '#b0865a'; c.beginPath(); poly(c, cutLines(r, [[284, 78], [322, 92], [322, 110], [282, 112], [284, 78]], 10, 0.4)); c.fill(); }, 0.2],
      [(c) => { c.fillStyle = '#120c0c'; c.beginPath(); c.ellipse(320, 96, 7, 6, 0, 0, TAU); c.fill(); c.beginPath(); c.arc(276, 82, 5, 0, TAU); c.fill(); c.fillStyle = '#fbf6ea'; c.beginPath(); c.arc(274.5, 80.5, 1.6, 0, TAU); c.fill(); }, 0.1],
    ]);
  });
  // paper people: o = { skin, coat, pants, hat:'brim'|'derby'|'none', hatCol, glasses, mustache, hair, apron, beard, scarf, tie }
  const person = (name, o) => cache('pp' + name, () => {
    const r = H.rng(name.length * 97 + 11), cx = 80;
    return compose(160, 360, [
      [(c) => { c.fillStyle = o.pants || '#3a3546'; c.beginPath(); poly(c, rect(r, cx - 30, 230, cx - 6, 344, 14)); poly(c, rect(r, cx + 6, 230, cx + 30, 344, 14)); c.fill(); c.fillStyle = '#2a1e1c'; c.beginPath(); poly(c, rect(r, cx - 36, 336, cx - 4, 352, 10)); poly(c, rect(r, cx + 4, 336, cx + 36, 352, 10)); c.fill(); }, 0],
      [(c) => { c.fillStyle = o.coat || '#7a6a48'; c.beginPath(); poly(c, cutLines(r, o.dress ? [[cx - 34, 120], [cx + 34, 120], [cx + 56, 300], [cx - 56, 300], [cx - 34, 120]] : [[cx - 36, 118], [cx + 36, 118], [cx + 42, 250], [cx - 42, 250], [cx - 36, 118]], 18, 0.5)); c.fill(); }, 0.35],
      ...(o.apron ? [[(c) => { c.fillStyle = o.apron; c.beginPath(); poly(c, cutLines(r, [[cx - 24, 150], [cx + 24, 150], [cx + 34, o.dress ? 290 : 246], [cx - 34, o.dress ? 290 : 246], [cx - 24, 150]], 16, 0.4)); c.fill(); }, 0.2]] : []),
      ...(o.tie ? [[(c) => { c.fillStyle = '#fbf6ea'; c.beginPath(); poly(c, [[cx - 12, 118], [cx + 12, 118], [cx, 150]]); c.fill(); c.fillStyle = o.tie; c.beginPath(); poly(c, [[cx - 5, 122], [cx + 5, 122], [cx + 7, 168], [cx, 176], [cx - 7, 168]]); c.fill(); }, 0.15]] : []),
      ...(o.scarf ? [[(c) => { c.fillStyle = o.scarf; c.beginPath(); poly(c, rect(r, cx - 26, 112, cx + 26, 128, 10)); poly(c, rect(r, cx + 8, 124, cx + 22, 166, 10)); c.fill(); }, 0.2]] : []),
      [(c) => { c.fillStyle = o.coat || '#7a6a48'; c.beginPath(); poly(c, ellPts(r, cx - 46, 182, 13, 60, 0.12)); poly(c, ellPts(r, cx + 46, 182, 13, 60, -0.12)); c.fill(); c.fillStyle = o.skin; c.beginPath(); poly(c, circPts(r, cx - 52, 240, 11, 7)); poly(c, circPts(r, cx + 52, 240, 11, 7)); c.fill(); }, 0.4],
      [(c) => { c.fillStyle = o.skin; c.beginPath(); poly(c, rect(r, cx - 10, 96, cx + 10, 120, 8)); poly(c, circPts(r, cx, 74, 34, 9)); c.fill(); }, 0.5],
      ...(o.hair ? [[(c) => { c.fillStyle = o.hair; c.beginPath(); c.arc(cx, 66, 35, Math.PI * 1.02, Math.PI * 1.98); c.lineTo(cx + 34, 76); c.lineTo(cx - 34, 76); c.closePath(); c.fill(); if (o.bun) { c.beginPath(); poly(c, circPts(r, cx, 34, 16, 7)); c.fill(); } }, 0.2]] : []),
      [(c) => {
        c.fillStyle = '#24161c'; c.beginPath(); c.arc(cx - 12, 74, 3.6, 0, TAU); c.arc(cx + 12, 74, 3.6, 0, TAU); c.fill();
        if (o.glasses) { c.strokeStyle = '#2a2420'; c.lineWidth = 2.5; c.beginPath(); c.arc(cx - 12, 74, 9, 0, TAU); c.moveTo(cx + 21, 74); c.arc(cx + 12, 74, 9, 0, TAU); c.moveTo(cx - 3, 73); c.lineTo(cx + 3, 73); c.stroke(); }
        if (o.mustache) { c.fillStyle = o.mustache; c.beginPath(); poly(c, [[cx - 20, 92], [cx - 6, 84], [cx, 88], [cx + 6, 84], [cx + 20, 92], [cx + 8, 96], [cx, 92], [cx - 8, 96]]); c.fill(); }
        if (o.beard) { c.fillStyle = o.beard; c.beginPath(); c.arc(cx, 84, 30, 0.15 * Math.PI, 0.85 * Math.PI); c.lineTo(cx - 14, 92); c.lineTo(cx + 14, 92); c.closePath(); c.fill(); }
        c.strokeStyle = '#5a2a2a'; c.lineWidth = 2.5; c.lineCap = 'round'; if (!o.mustache && !o.beard) { c.beginPath(); c.arc(cx, 88, 8, 0.2 * Math.PI, 0.8 * Math.PI); c.stroke(); }
      }, 0.12],
      ...(o.hat && o.hat !== 'none' ? [[(c) => {
        c.fillStyle = o.hatCol || '#6b4a2a'; c.beginPath();
        if (o.hat === 'brim') { poly(c, ellPts(r, cx, 50, 56, 10)); poly(c, cutLines(r, [[cx - 30, 52], [cx - 26, 22], [cx, 16], [cx + 26, 22], [cx + 30, 52]], 10, 0.4)); }
        else { poly(c, ellPts(r, cx, 48, 42, 8)); c.moveTo(cx - 28, 50); c.arc(cx, 44, 28, Math.PI, 0); c.closePath(); }
        c.fill(); c.fillStyle = 'rgba(20,10,10,0.35)'; c.fillRect(cx - 29, 40, 58, 8);
      }, 0.3]] : []),
    ]);
  });
  const ROOSEVELT = { skin: '#f0c9a2', coat: '#8a7a4e', pants: '#5b4f36', hat: 'brim', hatCol: '#a68a5a', glasses: true, mustache: '#6a4a2e', scarf: '#c0563f' };
  const COLLIER = { skin: '#7a4b30', coat: '#5d4a3a', pants: '#3a3240', hat: 'brim', hatCol: '#3c2e26', mustache: '#d9d2c6', beard: null };
  const GOVERNOR = { skin: '#f2cfae', coat: '#2f3046', pants: '#26273a', hat: 'derby', hatCol: '#1f1f2c', mustache: '#8a8274', tie: '#a23a3a' };
  const MORRIS = { skin: '#f0caa6', coat: '#4a4f6e', pants: '#2f3046', hat: 'derby', hatCol: '#2a2a36', mustache: '#4a3424', apron: '#f3ecdc' };
  const ROSE = { skin: '#f3d0b0', coat: '#8c3f52', dress: true, hair: '#4a2e22', bun: true, apron: '#fbf6ea' };
  const RICHARD = { skin: '#f2cfae', coat: '#5a6a4e', pants: '#3a3a3a', hair: '#7a5536', mustache: '#7a5536', tie: '#2f7f86' };
  const MARGARETE = { skin: '#f3d0b0', coat: '#3f3a5a', dress: true, hair: '#6a5a4a', bun: true };
  const BUYER = { skin: '#f0c9a2', coat: '#6e2f3a', pants: '#2b2b38', hat: 'derby', hatCol: '#26262f', mustache: '#3a2a20', tie: '#f2b545' };
  const hound = (col = '#b07a4c') => cache('dog' + col, () => {
    const r = H.rng(611);
    return compose(170, 120, [
      [(c) => { c.fillStyle = '#6e4428'; c.beginPath(); poly(c, rect(r, 34, 66, 46, 112, 8)); poly(c, rect(r, 112, 66, 124, 112, 8)); c.fill(); }, 0],
      [(c) => { c.fillStyle = col; c.beginPath(); poly(c, ellPts(r, 80, 64, 56, 24)); poly(c, cutLines(r, [[26, 56], [4, 30], [10, 26], [32, 50]], 6, 0.3)); c.fill(); }, 0.3],
      [(c) => { c.fillStyle = col; c.beginPath(); poly(c, rect(r, 50, 70, 62, 114, 8)); poly(c, rect(r, 98, 70, 110, 114, 8)); poly(c, circPts(r, 140, 40, 20, 7)); poly(c, cutLines(r, [[146, 32], [168, 44], [164, 56], [146, 52]], 6, 0.3)); c.fill(); }, 0.35],
      [(c) => { c.fillStyle = '#6e4428'; c.beginPath(); poly(c, ellPts(r, 130, 50, 9, 20, 0.2)); c.fill(); c.fillStyle = '#24161c'; c.beginPath(); c.arc(146, 36, 3.5, 0, TAU); c.arc(167, 48, 4, 0, TAU); c.fill(); }, 0.15],
    ]);
  });
  // bald cypress with Spanish moss
  const cypress = (seed, h = 460, col = '#2f5a48') => cache('cyp' + seed + h + col, () => {
    const r = H.rng(seed), w = 300;
    return compose(w, h, [
      [(c) => { c.fillStyle = '#5a4436'; c.beginPath(); poly(c, cutLines(r, [[w / 2 - 14, 60], [w / 2 + 14, 60], [w / 2 + 22, h - 40], [w / 2 + 52, h - 4], [w / 2 - 52, h - 4], [w / 2 - 22, h - 40], [w / 2 - 14, 60]], 18, 0.6)); c.fill(); }, 0],
      [(c) => { c.fillStyle = col; c.beginPath(); for (let i = 0; i < 9; i++) { const y = 40 + i * (h * 0.55 / 9), xx = w / 2 + r.range(-50, 50); poly(c, ellPts(r, xx, y, r.range(46, 80), r.range(18, 28))); } c.fill(); }, 0.5],
      [(c) => { c.strokeStyle = '#9aa58a'; c.lineCap = 'round'; for (let i = 0; i < 10; i++) { const x = w / 2 + r.range(-80, 80), y = r.range(60, h * 0.55); c.lineWidth = r.range(4, 7); c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + r.range(-6, 6), y + 26, x + r.range(-4, 4), y + r.range(40, 70)); c.stroke(); } }, 0.25],
    ]);
  });
  const heartSpr = (col = '#e8604a') => cache('heart' + col, () => paperize(90, 84, (c) => { c.fillStyle = col; c.beginPath(); c.moveTo(45, 78); c.bezierCurveTo(-14, 36, 10, -8, 45, 22); c.bezierCurveTo(80, -8, 104, 36, 45, 78); c.fill(); }, { seed: 33 }));
  const bubble = (txt, px = 54, col = '#d9473b') => cache('bub' + txt + px + col, () => {
    const w = Math.max(200, measure(txt, AF(px)) + 90), h = px * 2.3;
    return compose(w, h + 40, [
      [(c) => { c.fillStyle = '#fbf6ea'; c.beginPath(); c.ellipse(w / 2, h / 2 + 4, w / 2 - 6, h / 2 - 4, 0, 0, TAU); c.moveTo(w * 0.3, h * 0.8); c.lineTo(w * 0.18, h + 36); c.lineTo(w * 0.46, h * 0.86); c.fill(); }, 0],
      [(c) => { c.font = AF(px); c.fillStyle = col; const tw = measure(txt, AF(px)); c.fillText(txt, w / 2 - tw / 2, h / 2 + px * 0.38); }, 0.35],
    ]);
  });

  // ================= backdrops =================
  // outdoor shadow-box: backboard, far ridge, mid ridge, torn ground with white core, dark foreground strip; slow parallax drift
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
  const US_PTS = [[30, 60], [140, 40], [300, 46], [420, 42], [470, 30], [500, 58], [560, 40], [592, 70], [566, 110], [544, 150], [522, 196], [492, 228], [474, 288], [452, 322], [432, 272], [384, 252], [300, 262], [262, 302], [222, 252], [150, 240], [92, 202], [40, 150]];
  const usMap = () => cache('usmap', () => { const r = H.rng(701); return compose(640, 380, [
    [(c) => { c.fillStyle = '#d9b77a'; c.beginPath(); poly(c, cutLines(r, [...US_PTS, US_PTS[0]].map(([x, y]) => [x + 10, y + 20]), 20, 1.2)); c.fill(); }, 0],
    [(c) => { c.strokeStyle = 'rgba(90,60,30,0.35)'; c.lineWidth = 2; c.setLineDash([6, 6]); [[120, 60, 140, 250], [260, 56, 250, 280], [380, 50, 384, 270], [470, 50, 500, 240]].forEach(([a, b, d, e]) => { c.beginPath(); c.moveTo(a, b); c.lineTo(d, e); c.stroke(); }); }, 0],
  ]); });
  const msPiece = () => cache('ms', () => paperize(60, 90, (c) => { c.fillStyle = '#d9473b'; c.beginPath(); poly(c, cutLines(H.rng(702), [[8, 6], [44, 6], [46, 70], [54, 82], [20, 84], [8, 80], [8, 6]], 12, 0.4)); c.fill(); }, { seed: 703 }));
  const pin = () => cache('pin', () => compose(40, 70, [[(c) => { c.fillStyle = '#5a4a3a'; c.fillRect(18, 26, 4, 42); }, 0], [(c) => { c.fillStyle = '#e8604a'; c.beginPath(); c.arc(20, 20, 15, 0, TAU); c.fill(); }, 0.4]]));
  const landCard = (key, pts, col) => cache('land' + key, () => paperize(420, 360, (c) => { c.fillStyle = col; c.beginPath(); poly(c, cutLines(H.rng(key.length * 9), [...pts, pts[0]], 18, 1)); c.fill(); }, { seed: 710 + key.length }));
  const NA_PTS = [[30, 60], [150, 20], [300, 30], [390, 70], [380, 150], [330, 200], [300, 260], [260, 330], [210, 280], [140, 250], [70, 200], [20, 130]];
  const EU_PTS = [[60, 90], [130, 40], [220, 50], [300, 30], [380, 80], [370, 170], [320, 230], [250, 270], [200, 320], [150, 280], [100, 230], [40, 170]];
  const newspaper = (w = 560, h = 400) => cache('news' + w, () => { const r = H.rng(720); return compose(w, h, [
    [(c) => { c.fillStyle = '#efe6d0'; c.beginPath(); poly(c, rect(r, 6, 6, w - 6, h - 6, 30, 0.6)); c.fill(); }, 0],
    [(c) => { c.fillStyle = '#3a3440'; c.fillRect(24, 74, w - 48, 5); c.fillRect(24, 84, w - 48, 2); for (let col = 0; col < 2; col++) for (let y = 100; y < h - 20; y += 14) c.fillRect(24 + col * 112, y, 96 - (y % 3) * 6, 5); }, 0],
    [(c) => { c.fillStyle = '#fbf6ea'; c.fillRect(250, 98, w - 274, h - 122); c.strokeStyle = '#2b2033'; c.lineWidth = 4; c.strokeRect(250, 98, w - 274, h - 122); }, 0.3],
  ]); });
  const pencil = () => cache('pencil', () => compose(260, 40, [[(c) => { c.fillStyle = '#f2b545'; c.fillRect(30, 8, 200, 24); c.fillStyle = '#e8c79a'; c.beginPath(); poly(c, [[30, 8], [30, 32], [4, 20]]); c.fill(); c.fillStyle = '#2b2033'; c.beginPath(); poly(c, [[12, 15], [12, 25], [4, 20]]); c.fill(); c.fillStyle = '#e8839a'; c.fillRect(230, 8, 24, 24); }, 0]]));
  const brownstones = () => cache('brown', () => { const r = H.rng(730); const C = H.layer(W + 400, 420), c = C.getContext('2d');
    let x = -10; let k = 0;
    while (x < W + 400) { const w = r.range(150, 210), h = r.range(250, 330), col = ['#9a5a44', '#a8664c', '#8a4e3c', '#b0745a'][k++ % 4];
      const sp = compose(w, h + 10, [
        [(cc) => { cc.fillStyle = col; cc.beginPath(); poly(cc, rect(r, 0, 20, w, h + 10, 26, 0.5)); cc.fill(); cc.fillStyle = '#5a3328'; cc.fillRect(-4, 6, w + 8, 18); }, 0],
        [(cc) => { cc.fillStyle = '#f6d28a'; for (let yy = 50; yy < h - 70; yy += 70) for (let xx = 20; xx < w - 40; xx += 52) if (r.chance(0.7)) cc.fillRect(xx, yy, 30, 44); cc.fillStyle = '#3a2420'; cc.fillRect(w / 2 - 22, h - 70, 44, 80); }, 0.3],
      ]);
      shadowDraw(c, sp, x, 420 - h - 10, 0.8, 0.45); x += w + 6; }
    return C; });
  const shopFront = () => cache('shop', () => { const r = H.rng(740); return compose(760, 470, [
    [(c) => { c.fillStyle = '#6e3b46'; c.beginPath(); poly(c, rect(r, 10, 40, 750, 470, 30)); c.fill(); }, 0],
    [(c) => { c.fillStyle = '#bfe0e6'; c.beginPath(); poly(c, rect(r, 60, 190, 430, 430, 24)); c.fill(); c.fillStyle = '#4a2a30'; c.beginPath(); poly(c, rect(r, 500, 200, 640, 470, 24)); c.fill(); }, 0.4],
    [(c) => { for (let i = 0; i < 12; i++) { c.fillStyle = i % 2 ? '#fbf6ea' : '#d9473b'; c.beginPath(); poly(c, [[30 + i * 60, 110], [90 + i * 60, 110], [96 + i * 60, 176], [36 + i * 60, 176]]); c.fill(); c.beginPath(); c.arc(66 + i * 60, 176, 30, 0, Math.PI); c.fill(); } }, 0.6],
    [(c) => { c.fillStyle = '#f2b545'; [[110, 370], [190, 380], [270, 365], [350, 378]].forEach(([x, y], i) => { c.fillStyle = ['#f2b545', '#58b0a6', '#e8839a', '#e8604a'][i]; c.beginPath(); poly(c, rect(r, x - 28, y - 70, x + 28, y + 40, 12)); c.fill(); }); }, 0.3],
  ]); });
  const windowFrame = () => cache('wframe', () => { const r = H.rng(745); return compose(820, 560, [
    [(c) => { c.fillStyle = '#6e3b46'; c.beginPath(); poly(c, rect(r, 0, 0, 820, 560, 30)); c.fill(); c.globalCompositeOperation = 'destination-out'; c.fillRect(70, 60, 680, 440); }, 0],
    [(c) => { c.fillStyle = '#4a2a30'; c.fillRect(404, 60, 14, 440); c.fillRect(70, 270, 680, 12); }, 0.4],
  ]); });
  const envelope = () => cache('env', () => compose(200, 140, [[(c) => { c.fillStyle = '#f3ecdc'; c.beginPath(); poly(c, rect(H.rng(750), 6, 6, 194, 134, 20)); c.fill(); }, 0], [(c) => { c.strokeStyle = '#b8a888'; c.lineWidth = 4; c.beginPath(); c.moveTo(8, 10); c.lineTo(100, 80); c.lineTo(192, 10); c.stroke(); c.fillStyle = '#d9473b'; c.fillRect(150, 22, 30, 34); }, 0.2]]));
  const whiteHouse = () => cache('wh', () => { const r = H.rng(760); return compose(420, 280, [
    [(c) => { c.fillStyle = '#f3ecdc'; c.beginPath(); poly(c, rect(r, 20, 90, 400, 270, 26)); c.fill(); }, 0],
    [(c) => { c.fillStyle = '#e8e0cc'; c.beginPath(); poly(c, [[130, 92], [210, 30], [290, 92]]); c.fill(); for (let i = 0; i < 5; i++) c.fillRect(140 + i * 34, 96, 14, 150); }, 0.4],
    [(c) => { c.fillStyle = '#7a8aa8'; for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) { c.fillRect(44 + j * 40, 120 + i * 60, 22, 36); c.fillRect(336 + j * 40, 120 + i * 60, 22, 36); } }, 0.2],
  ]); });
  const shelf = (w = 1100) => cache('shelf' + w, () => compose(w, 40, [[(c) => { c.fillStyle = '#8a5a3a'; c.beginPath(); poly(c, rect(H.rng(770), 4, 6, w - 4, 34, 30)); c.fill(); }, 0]]));
  const elephant = () => cache('eleph', () => { const r = H.rng(780), col = '#9aa8c8'; return compose(300, 230, [
    [(c) => { c.fillStyle = '#7f8db0'; c.beginPath(); poly(c, rect(r, 70, 140, 100, 216, 10)); poly(c, rect(r, 190, 140, 220, 216, 10)); c.fill(); }, 0],
    [(c) => { c.fillStyle = col; c.beginPath(); poly(c, ellPts(r, 150, 120, 100, 62)); poly(c, rect(r, 100, 140, 130, 220, 10)); poly(c, rect(r, 220, 140, 250, 214, 10)); c.fill(); }, 0.35],
    [(c) => { c.fillStyle = col; c.beginPath(); poly(c, circPts(r, 250, 90, 46, 9)); poly(c, cutLines(r, [[280, 100], [292, 150], [282, 200], [266, 204], [272, 150], [262, 110]], 10, 0.4)); c.fill(); }, 0.45],
    [(c) => { c.fillStyle = '#c7a8d8'; c.beginPath(); poly(c, ellPts(r, 222, 92, 30, 38, 0.2)); c.fill(); c.fillStyle = '#24161c'; c.beginPath(); c.arc(262, 80, 5, 0, TAU); c.fill(); c.fillStyle = '#d9473b'; c.beginPath(); poly(c, rect(r, 100, 66, 190, 96, 12)); c.fill(); }, 0.2],
  ]); });
  const sketchbook = () => cache('sketch', () => { const r = H.rng(790); return compose(460, 330, [
    [(c) => { c.fillStyle = '#fbf6ea'; c.beginPath(); poly(c, rect(r, 10, 10, 450, 320, 26)); c.fill(); c.fillStyle = '#c0563f'; c.fillRect(10, 10, 16, 310); }, 0],
  ]); });
  const babyFace = () => cache('baby', () => { const r = H.rng(800); return compose(240, 240, [
    [(c) => { c.fillStyle = '#f3d0b0'; c.beginPath(); poly(c, ellPts(r, 120, 116, 96, 104)); poly(c, circPts(r, 26, 130, 18, 7)); poly(c, circPts(r, 214, 130, 18, 7)); c.fill(); }, 0],
    [(c) => { c.fillStyle = '#e9a98a'; c.beginPath(); c.arc(70, 168, 16, 0, TAU); c.arc(170, 168, 16, 0, TAU); c.fill(); c.fillStyle = '#24161c'; c.beginPath(); c.arc(84, 140, 13, 0, TAU); c.arc(156, 140, 13, 0, TAU); c.fill(); c.fillStyle = '#fff'; c.beginPath(); c.arc(80, 135, 4.5, 0, TAU); c.arc(152, 135, 4.5, 0, TAU); c.fill(); c.strokeStyle = '#7a3a3a'; c.lineWidth = 4; c.lineCap = 'round'; c.beginPath(); c.arc(120, 176, 14, 0.2 * Math.PI, 0.8 * Math.PI); c.stroke(); c.fillStyle = '#7a5536'; c.beginPath(); c.moveTo(110, 18); c.quadraticCurveTo(126, 40, 120, 52); c.quadraticCurveTo(140, 30, 128, 16); c.fill(); }, 0.2],
  ]); });
  const brain = () => cache('brain', () => { const r = H.rng(21), parts = []; [[-70, 10, 48], [-40, -40, 52], [12, -56, 54], [64, -32, 48], [84, 18, 42], [40, 40, 50], [-24, 42, 52], [-8, 0, 58]].forEach(([x, y, rr]) => parts.push(circPts(r, 140 + x, 110 + y, rr, 12, 0.6)));
    return compose(280, 220, [[(c) => { c.fillStyle = '#e8839a'; c.beginPath(); parts.forEach((p) => poly(c, p)); c.fill(); }, 0], [(c) => { c.strokeStyle = '#f3a7b6'; c.lineWidth = 11; c.lineCap = 'round'; [[[60, 100], [84, 66], [114, 80], [104, 50]], [[170, 50], [200, 70], [182, 98], [212, 116]], [[96, 160], [120, 140]], [[170, 170], [200, 160]]].forEach((ln) => { c.beginPath(); ln.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.stroke(); }); c.fillStyle = '#c95f7a'; c.fillRect(137, 50, 7, 130); }, 0.35]]); });
  const bed = () => cache('bed', () => { const r = H.rng(820); return compose(760, 330, [
    [(c) => { c.fillStyle = '#6e4428'; c.beginPath(); poly(c, rect(r, 10, 20, 60, 320, 16)); poly(c, rect(r, 700, 120, 750, 320, 16)); c.fill(); }, 0],
    [(c) => { c.fillStyle = '#fbf6ea'; c.beginPath(); poly(c, rect(r, 50, 150, 720, 260, 30)); c.fill(); }, 0.4],
    [(c) => { c.fillStyle = '#f3ecdc'; c.beginPath(); poly(c, ellPts(r, 150, 140, 90, 34)); c.fill(); }, 0.5],
  ]); });
  const blanket = () => cache('blanket', () => { const r = H.rng(821); return compose(760, 330, [
    [(c) => { c.fillStyle = '#58b0a6'; c.beginPath(); poly(c, cutLines(r, [[230, 118], [700, 132], [712, 270], [220, 270], [230, 118]], 30, 0.8)); c.fill(); c.fillStyle = 'rgba(255,255,255,0.25)'; for (let i = 0; i < 6; i++) c.fillRect(260 + i * 74, 130, 26, 140); }, 0.6],
  ]); });
  const gavel = () => cache('gavel', () => compose(240, 120, [[(c) => { c.fillStyle = '#7a4a2a'; c.fillRect(100, 52, 130, 16); }, 0], [(c) => { c.fillStyle = '#5a3420'; c.beginPath(); poly(c, rect(H.rng(830), 40, 14, 110, 106, 12)); c.fill(); c.fillStyle = '#f2b545'; c.fillRect(40, 28, 70, 8); c.fillRect(40, 84, 70, 8); }, 0.4]]));
  const frogIce = () => cache('frog', () => { const r = H.rng(840); return compose(460, 380, [
    [(c) => { c.fillStyle = '#9a6a3a'; c.beginPath(); poly(c, ellPts(r, 230, 220, 120, 70)); poly(c, ellPts(r, 130, 270, 50, 22, 0.4)); poly(c, ellPts(r, 330, 270, 50, 22, -0.4)); c.fill(); }, 0],
    [(c) => { c.fillStyle = '#6a4a2a'; c.beginPath(); poly(c, ellPts(r, 300, 180, 40, 14, -0.2)); c.fill(); c.fillStyle = '#24161c'; c.beginPath(); poly(c, ellPts(r, 312, 170, 26, 9, -0.2)); c.fill(); c.fillStyle = '#e8c070'; c.beginPath(); c.arc(318, 160, 11, 0, TAU); c.fill(); c.fillStyle = '#24161c'; c.beginPath(); c.arc(320, 160, 5, 0, TAU); c.fill(); }, 0.2],
    [(c) => { c.fillStyle = 'rgba(200,236,248,0.3)'; c.beginPath(); poly(c, cutLines(r, [[30, 60], [420, 40], [440, 340], [50, 360], [30, 60]], 30, 1)); c.fill(); c.strokeStyle = 'rgba(235,250,255,0.9)'; c.lineWidth = 8; c.stroke(); c.lineWidth = 6; c.beginPath(); c.moveTo(70, 90); c.lineTo(150, 80); c.moveTo(380, 300); c.lineTo(410, 220); c.stroke(); }, 0, { hi: 0.7, tex: 0.4 }],
  ]); });
  const sparkle = (ctx, x, y, s, t, seed) => { const r = H.rng(seed); for (let i = 0; i < 5; i++) { const a = r() * TAU, d = r.range(30, 90) * s, tw = 0.5 + 0.5 * Math.sin(t * 6 + i * 2); put(ctx, cache('spk', () => paperize(40, 40, (c) => { c.fillStyle = '#f8f0c8'; c.beginPath(); poly(c, [[20, 0], [25, 15], [40, 20], [25, 25], [20, 40], [15, 25], [0, 20], [15, 15]]); c.fill(); }, { seed: 850 })), x + Math.cos(a) * d, y + Math.sin(a) * d, { s: (0.5 + tw * 0.6) * s, d: 0.4, rot: t * 0.5 }); } };
  const rope = (ctx, pts, p = 1) => { if (p <= 0) return; ctx.save(); ctx.strokeStyle = '#c9a46a'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.shadowColor = 'rgba(14,10,30,0.45)'; ctx.shadowBlur = 5; ctx.shadowOffsetX = 2; ctx.shadowOffsetY = 3; ctx.beginPath(); const n = Math.max(2, Math.ceil(pts.length * p)); pts.slice(0, n).forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore(); };
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
  const fig = (ctx, name, o, x, feet, t, st, op = {}) => {
    const A = dropIn(t, st, 0.4, 70); if (!A) return;
    const s = op.s ?? 1, bob = op.walk ? Math.abs(Math.sin(t * 7)) * 6 : 0;
    put(ctx, person(name, o), x, feet - 176 * s + A.dy - bob, { s: A.s * s, sx: (op.flip ? -1 : 1) * A.s * s, sy: A.s * s, d: 0.9 + A.d, rot: op.rot ?? (op.walk ? Math.sin(t * 7) * 0.03 : 0) });
  };
  const sprAt = (ctx, spr, x, y, t, st, op = {}) => { const A = op.pop ? popIn(t, st, op.du ?? 0.35) : dropIn(t, st, op.du ?? 0.4, op.dist ?? 60); if (!A) return null; put(ctx, spr, x, y + (A.dy || 0), { s: A.s * (op.s ?? 1), sx: op.flip ? -A.s * (op.s ?? 1) : undefined, sy: op.flip ? A.s * (op.s ?? 1) : undefined, d: (op.d ?? 1) + A.d, rot: op.rot ?? 0 }); return A; };
  const burstAt = (ctx, x, y, t, st, s = 1, col) => { const u = cl((t - st) / 0.4); if (u <= 0) return; put(ctx, burstSpr(col), x, y, { s: s * (0.2 + 0.8 * E.back(u)), rot: t * 0.25, d: 0.7 }); };
  const ringAt = (ctx, x, y, t, st, s = 1, col) => { const u = cl((t - st) / 0.3); if (u <= 0) return; put(ctx, ringSpr(col), x, y, { s: s * (0.7 + 0.3 * E.back(u)), d: 0.6, rot: 0.05 }); };
  const sheetIn = (ctx, col, a, seed = 1) => { if (a <= 0) return; ctx.save(); ctx.globalAlpha = a; ctx.drawImage(cache('sheet' + col, () => paperize(W, HH, (c) => { c.fillStyle = col; c.fillRect(0, 0, W, HH); }, { rim: false, seed })), 0, 0); ctx.restore(); };
  const tiedBearPts = (bx, by) => [[bx - 60, by - 10], [bx - 20, by + 4], [bx + 30, by - 4], [bx + 64, by + 8], [bx + 80, by - 6]];

  const dayCard = (moon) => cache('day' + moon, () => compose(96, 96, [[(c) => { c.fillStyle = '#fbf6ea'; c.beginPath(); poly(c, rect(H.rng(5 + moon), 4, 4, 92, 92, 16, 0.4)); c.fill(); }, 0], [(c) => { if (moon) { c.fillStyle = '#2b2d5a'; c.beginPath(); c.arc(48, 48, 28, 0, TAU); c.fill(); c.globalCompositeOperation = 'destination-out'; c.beginPath(); c.arc(62, 40, 24, 0, TAU); c.fill(); } else { c.fillStyle = '#e8604a'; c.beginPath(); for (let i = 0; i < 16; i++) { const a = i / 16 * TAU, rr = i % 2 ? 22 : 34; c.lineTo(48 + Math.cos(a) * rr, 48 + Math.sin(a) * rr); } c.closePath(); c.fill(); } }, 0.3]]));
  // ================= SCENES =================
  // A0 intro: 1902, the president, the bear, the teddy
  const sIntro = (ctx, t) => {
    outdoor(ctx, 'dusk', PAL.dusk, t);
    const Y = dropIn(t, P(0, 'nineteenohtwo') - 0.1, 0.4, 60); if (Y) numberRow(ctx, '1902', 640, 150 + Y.dy, 112, '#f2b545', { center: true });
    fig(ctx, 'roos', ROOSEVELT, 330, 610, t, P(0, 'president') - 0.1);
    if (t < P(1, 'teddy')) {
      sprAt(ctx, blackBear(), 900, 520, t, P(0, 'bear') - 0.1, { s: 1.1 });
      const B = dropIn(t, P(0, 'refused'), 0.3, 40);
      if (B) put(ctx, bubble('NO!', 64), 470, 300 + B.dy, { s: B.s, d: 1 + B.d });
    } else {
      burstAt(ctx, 900, 430, t, P(1, 'teddy') - 0.05, 0.95);
      sprAt(ctx, teddy({ bow: '#d9473b' }), 900, 440, t, P(1, 'teddy') - 0.05, { pop: true, s: 0.95, d: 1.3 });
      tag(ctx, 'TEDDY BEAR', 900, 640, t, P(1, 'bear'), { px: 44, col: '#e8604a' });
      const B = dropIn(t, P(0, 'refused'), 0.3, 40); if (B) put(ctx, bubble('NO!', 64), 470, 300, { d: 1 });
    }
  };
  // A1 map: a hunting trip in Mississippi
  const sMap = (ctx, t) => {
    interior(ctx, 'desk', { wall: '#3b5a4e', stripe: '#355247', floor: '#7a5236', floorY: 640 });
    const M = dropIn(t, PS(2) - 0.2, 0.45, 80);
    if (M) put(ctx, usMap(), 640, 360 + M.dy, { s: 1.45 * M.s, d: 1.2 + M.d, rot: -0.02 });
    sprAt(ctx, msPiece(), 640 + (393 - 320) * 1.45, 360 + (238 - 190) * 1.45, t, P(3, 'mississippi') - 0.1, { pop: true, s: 1.4, d: 1.2 });
    sprAt(ctx, pin(), 640 + 73 * 1.45 + 10, 360 + 48 * 1.45 - 50, t, P(3, 'mississippi'), { d: 1.4 });
    tag(ctx, 'MISSISSIPPI', 900, 610, t, P(3, 'mississippi') + 0.1, { px: 44, col: '#d9473b' });
    tag(ctx, 'HUNTING TRIP', 330, 110, t, P(3, 'hunting'), { px: 36, rot: -0.04 });
    if (t > P(3, 'mississippi')) arrow(ctx, 790, 590, 790, 520, 760, 460, io(t, P(3, 'mississippi') + 0.1, P(3, 'mississippi') + 0.45), '#d9473b', 701);
  };
  // A2 ch1: the swamp, Roosevelt and the governor
  const swampTrees = (dr, set = 0) => (ctx) => { [[160, 470], [1060, 520], [1210, 430]].forEach(([x, h], i) => shadowDraw(ctx, cypress(300 + i + set * 10, h), x - 150 - dr * 0.85, 600 - h, 1.2)); };
  const sSwamp1 = (ctx, t) => {
    const lt = t - PS(4);
    outdoor(ctx, 'swamp', PAL.swamp, lt + 10, { mid2: (dr) => swampTrees(dr)(ctx) });
    tag(ctx, 'NOVEMBER 1902', 250, 340, t, P(4, 'november'), { px: 40, col: '#e8604a' });
    fig(ctx, 'roos', ROOSEVELT, 520, 640, t, P(5, 'roosevelt') - 0.15);
    tag(ctx, 'TEDDY ROOSEVELT', 520, 270, t, P(5, 'roosevelt') + 0.05, { px: 36, rot: -0.03 });
    tag(ctx, 'PRESIDENT', 520, 210, t, P(5, 'president'), { px: 30, col: '#e8604a', rot: 0.03 });
    fig(ctx, 'gov', GOVERNOR, 780, 640, t, P(6, 'governor') - 0.2);
    tag(ctx, 'GOVERNOR', 780, 290, t, P(6, 'governor'), { px: 32, rot: 0.04 });
    tag(ctx, 'SWAMPS', 1080, 470, t, P(5, 'swamps'), { px: 30, col: '#2f7f86' });
  };
  // A3 searching for days, zero bears
  const sSearch = (ctx, t) => {
    const lt = t - PS(7);
    outdoor(ctx, 'swamp', PAL.swamp, lt + 22, { drift: 12, mid2: (dr) => swampTrees(dr, 1)(ctx) });
    const wx = 260 + Math.min(lt, 4.5) * 40;
    fig(ctx, 'roos', ROOSEVELT, wx + 140, 640, t, PS(7) - 0.4, { walk: lt < 4.5 && lt > 0 });
    fig(ctx, 'gov', GOVERNOR, wx, 640, t, PS(7) - 0.4, { walk: lt < 4.5 && lt > 0 });
    tag(ctx, 'DAYS OF SEARCHING', 640, 130, t, P(7, 'days'), { px: 40, rot: -0.02 });
    // day-by-day sun and moon cards ticking by
    for (let i = 0; i < 4; i++) sprAt(ctx, dayCard(i % 2), 470 + i * 110, 230, t, P(7, 'days') + 0.15 + i * 0.25, { pop: true });
    const Z = dropIn(t, P(8, 'single') - 0.1, 0.4, 60);
    if (Z) { numberRow(ctx, '0', 980, 330 + Z.dy, 120, '#d9473b', { center: true }); put(ctx, wordSpr('BEARS', 44, '#2b2d5a'), 980, 440 + Z.dy, { d: 0.8 + Z.d }); }
    tag(ctx, '?', 1150, 300, t, P(8, 'bear'), { px: 64, col: '#e8604a', rot: 0.1 });
  };
  // A4 Holt Collier, the dogs, the bear tied to a tree
  const sCollier = (ctx, t) => {
    const lt = t - PS(9);
    outdoor(ctx, 'swamp2', PAL.swamp, lt + 5, { drift: 4 });
    shadowDraw(ctx, cypress(320, 520), 860, 90, 1.3);
    fig(ctx, 'collier', COLLIER, 250, 650, t, P(9, 'holt') - 0.2);
    tag(ctx, 'HOLT COLLIER', 250, 250, t, P(9, 'holt'), { px: 36, rot: -0.03 });
    tag(ctx, 'GUIDE', 250, 192, t, P(9, 'guide'), { px: 30, col: '#e8604a', rot: 0.04 });
    // dogs run in from the left, bear trots to the tree
    const dg = ph(t, P(10, 'dogs') - 0.3, P(10, 'dogs') + 1.0);
    if (dg > 0) { put(ctx, hound(), H.lerp(-120, 520, E.out(dg)), 600 + Math.abs(Math.sin(t * 14)) * -8 * (1 - dg), { d: 0.9 }); put(ctx, hound('#c9a46a'), H.lerp(-260, 640, E.out(dg)), 612 + Math.abs(Math.sin(t * 14 + 1)) * -8 * (1 - dg), { d: 0.9 }); }
    tag(ctx, 'HUNTING DOGS', 600, 700, t, P(10, 'dogs'), { px: 30, col: '#2f7f86' });
    const bw = ph(t, P(10, 'tracks') - 0.2, P(11, 'tree') - 0.1);
    if (bw > 0) put(ctx, blackBear(), H.lerp(1400, 960, E.out(bw)), 545, { sx: -1, sy: 1, d: 1 });
    rope(ctx, [[848, 518], [895, 494], [945, 472], [1000, 458], [1018, 470], [1000, 482]], io(t, P(11, 'ties'), P(11, 'tree') + 0.3));
    tag(ctx, 'TIED TO A TREE', 1000, 300, t, P(11, 'tree'), { px: 34, col: '#d9473b', rot: 0.03 });
  };
  // A5 everyone waits... Roosevelt says no
  const sNo = (ctx, t) => {
    const lt = t - PS(12);
    outdoor(ctx, 'swamp2', PAL.swamp, lt + 12, { drift: 4 });
    shadowDraw(ctx, cypress(320, 520), 860, 90, 1.3);
    put(ctx, blackBear(), 960, 545, { sx: -1, sy: 1, d: 1 });
    rope(ctx, [[848, 518], [895, 494], [945, 472], [1000, 458], [1018, 470], [1000, 482]], 1);
    fig(ctx, 'collier', COLLIER, 130, 650, t, PS(12) - 0.6, { s: 0.85 });
    fig(ctx, 'gov', GOVERNOR, 290, 650, t, PS(12) - 0.6, { s: 0.85 });
    const turn = io(t, P(15, 'refuses') - 0.1, P(15, 'refuses') + 0.35);
    fig(ctx, 'roos', ROOSEVELT, 520, 650, t, PS(12) - 0.6, { flip: turn > 0.5 });
    [[130, 300], [290, 300], [520, 260]].forEach(([x, y], i) => { if (t < PS(13)) tag(ctx, '?', x, y, t, P(12, 'waits') + i * 0.12, { px: 50, col: '#e8604a' }); });
    if (t >= PS(13) - 0.05) { ringAt(ctx, 640, 230, t, P(13, 'no') - 0.05, 0.8, '#f2b545'); const B = dropIn(t, P(13, 'no') - 0.05, 0.3, 40); if (B) put(ctx, bubble('NO!', 72), 650, 240 + B.dy, { s: B.s, d: 1.2 + B.d }); }
    const S = dropIn(t, P(14, 'shooting'), 0.35, 50);
    if (S) { put(ctx, wordSpr('TIED-UP BEAR', 34, '#2b2d5a', '#fbf6ea', 10), 1040, 330 + S.dy, { d: 0.9 + S.d, rot: 0.03 }); }
    const X = dropIn(t, P(14, 'fair') - 0.1, 0.25, 40); if (X) put(ctx, crossSpr(), 1040, 330 + X.dy, { s: X.s * 1.1, d: 0.9 + X.d, rot: 0.1 });
    tag(ctx, 'NOT FAIR', 1040, 420, t, P(14, 'fair'), { px: 44, col: '#d9473b' });
  };
  // A6 ch2: Berryman draws it for the Washington Post
  const DESK = { wall: '#2f4a5a', stripe: '#2b4453', floor: '#8a5a3a', floorY: 610, wains: '#5a3a2a', wainY: 470 };
  const cartoonInPaper = (ctx, nx, ny, s, t, st) => { // the cartoon drawn into the newspaper's panel (panel centre = sprite + (393-280, 238-200))
    const px = nx + 113 * s, py = ny + 38 * s, p = io(t, st, st + 1.6);
    if (p <= 0) return;
    ctx.save(); ctx.beginPath(); ctx.rect(px - 140 * s, py - 138 * s, 280 * s * Math.min(1, p * 1.4), 276 * s); ctx.clip();
    put(ctx, person('roosS', ROOSEVELT), px - 70 * s, py + 10 * s, { s: 0.62 * s, d: 0.3, sx: -0.62 * s, sy: 0.62 * s });
    put(ctx, teddy({ scared: true, snout: 0.35, fore: 0.6, eye: 0.85, col: '#5a4438', dark: '#3a2a24', light: '#b8a090' }), px + 70 * s, py + 40 * s, { s: 0.42 * s, d: 0.3 });
    ctx.restore();
  };
  const sPaper = (ctx, t) => {
    interior(ctx, 'desk2', DESK);
    const N = dropIn(t, PS(16) - 0.2, 0.45, 80); if (N) put(ctx, newspaper(), 560, 330 + N.dy, { d: 1.2 + N.d, rot: -0.02, s: 1.25 });
    if (N) { tag(ctx, 'WASHINGTON POST', 560, 100, t, P(18, 'washington'), { px: 36, col: '#2b2033', back: '#efe6d0', rot: -0.02 }); }
    cartoonInPaper(ctx, 560, 330, 1.25, t, P(18, 'draws'));
    const pd = io(t, P(18, 'draws'), P(18, 'draws') + 1.6);
    if (pd > 0 && pd < 1) put(ctx, pencil(), 640 + Math.sin(pd * 14) * 60 + pd * 160 + 130, 330 + Math.cos(pd * 11) * 70, { rot: -0.7, d: 2 });
    else if (pd >= 1) put(ctx, pencil(), 1040, 560, { rot: -0.2, d: 0.8 });
    fig(ctx, 'berry', { skin: '#f0c9a2', coat: '#4a5a3a', pants: '#2f3046', hair: '#5a3a2a', mustache: '#5a3a2a', tie: '#d9473b' }, 1110, 700, t, P(17, 'cartoonist') - 0.2, { s: 0.95 });
    tag(ctx, 'CLIFFORD BERRYMAN', 1060, 220, t, P(17, 'clifford'), { px: 32, rot: 0.03 });
    tag(ctx, 'CARTOONIST', 1080, 160, t, P(17, 'cartoonist'), { px: 30, col: '#e8604a', rot: -0.03 });
    tag(ctx, 'A FEW DAYS LATER', 260, 640, t, P(16, 'few'), { px: 32, col: '#2f7f86' });
  };
  // A7 inside the cartoon: small, scared, big round eyes
  const sCartoon = (ctx, t) => {
    interior(ctx, 'paperbig', { wall: '#efe6d0', floor: '#efe6d0', floorY: 760 });
    ctx.save(); ctx.strokeStyle = '#2b2033'; ctx.lineWidth = 10; ctx.strokeRect(70, 50, 1140, 620); ctx.restore();
    const z = 1 + 0.05 * io(t, PS(19), PE(20));
    ctx.save(); ctx.translate(640, 380); ctx.scale(z, z); ctx.translate(-640, -380);
    put(ctx, person('roosS', ROOSEVELT), 360, 400, { s: 1.15, sx: -1.15, sy: 1.15, d: 0.8 });
    shadowDraw(ctx, cypress(330, 470, '#6a7a5a'), 900, 120, 0.7);
    const sh = t > P(19, 'scared') && t < P(19, 'scared') + 0.5 ? Math.sin(t * 60) * 4 : 0;
    put(ctx, teddy({ scared: true, snout: 0.35, fore: 0.6, eye: 0.85, col: '#5a4438', dark: '#3a2a24', light: '#b8a090' }), 860 + sh, 470, { s: 0.85, d: 1 });
    rope(ctx, [[960, 480], [920, 470], [890, 495], [860, 480]], 1);
    ctx.restore();
    tag(ctx, 'SMALL', 640, 600, t, P(19, 'small'), { px: 40, col: '#2f7f86', rot: -0.04 });
    tag(ctx, 'SCARED', 1060, 600, t, P(19, 'scared'), { px: 40, col: '#d9473b', rot: 0.04 });
    ringAt(ctx, 860 * z - 640 * (z - 1) + 0, 470 - 0.85 * 200 * 0.48, t, P(20, 'eyes') - 0.2, 0.55, '#f2b545');
    tag(ctx, 'BIG ROUND EYES', 860, 140, t, P(20, 'big'), { px: 40, col: '#e8604a' });
  };
  // A8 readers love it; years of the little bear
  const sLove = (ctx, t) => {
    interior(ctx, 'desk2', DESK);
    for (let i = 0; i < 3; i++) { const A = dropIn(t, PS(21) - 0.4 + i * 0.12, 0.4, 70); if (A) { put(ctx, newspaper(), 330 + i * 300, 300 + A.dy + (i % 2) * 30, { s: 0.6, d: 1 + A.d }); cartoonInPaper(ctx, 330 + i * 300, 300 + A.dy + (i % 2) * 30, 0.6, t, -10); } }
    for (let i = 0; i < 6; i++) { const u = ph(t, P(21, 'love') + i * 0.08, P(21, 'love') + 1.4 + i * 0.08); if (u > 0) put(ctx, heartSpr(i % 2 ? '#e8604a' : '#e8839a'), 300 + i * 140, 250 - u * 150, { s: 0.5 + 0.5 * E.back(cl(u * 3)), d: 1.2, rot: Math.sin(i + t * 3) * 0.2 }); }
    tag(ctx, 'READERS LOVE IT', 640, 600, t, P(21, 'love'), { px: 44, col: '#e8604a' });
    if (t > PS(22) - 0.3) {
      // a strip of cartoon panels slides along: the little bear keeps coming back
      const sl = io(t, PS(22), PE(23));
      ctx.save(); ctx.fillStyle = 'rgba(20,12,30,0.35)'; ctx.fillRect(0, 0, W, HH); ctx.restore();
      for (let i = 0; i < 6; i++) { const x = 1400 - sl * 900 + i * 300, A = dropIn(t, PS(22) - 0.3 + i * 0.05, 0.4, 40);
        if (A) { put(ctx, cache('panel', () => compose(260, 260, [[(c) => { c.fillStyle = '#fbf6ea'; c.beginPath(); poly(c, rect(H.rng(4), 6, 6, 254, 254, 26, 0.5)); c.fill(); c.strokeStyle = '#2b2033'; c.lineWidth = 6; c.strokeRect(18, 18, 224, 224); }, 0]])), x, 340 + A.dy, { d: 1 + A.d, rot: (i % 2 ? 0.04 : -0.04) });
          put(ctx, teddy({ scared: i === 0, snout: 0.35, fore: 0.6, eye: 0.85, col: '#5a4438', dark: '#3a2a24', light: '#b8a090' }), x + 40, 370 + A.dy, { s: 0.42, d: 0.3 });
          put(ctx, person('roosS', ROOSEVELT), x - 50, 350 + A.dy, { s: 0.48, d: 0.3 }); } }
      tag(ctx, 'FOR YEARS', 640, 120, t, P(22, 'years'), { px: 48, col: '#f2b545', back: '#2b2d5a' });
      tag(ctx, 'FURRY SIDEKICK', 640, 600, t, P(23, 'sidekick'), { px: 44, col: '#2f7f86' });
    }
  };
  // A9 ch3: Brooklyn street
  const sBrooklyn = (ctx, t) => {
    const lt = t - PS(24);
    outdoor(ctx, 'bk', { sky: ['#e8a07a', '#f6d2a0'], sun: ['#e9845b', '#f3ad62', '#f8d891'], sunX: 300, sunY: 160, far: '#9a7a8a', mid: '#7a6a7a', ground: '#6a6470', fore: '#2a2630' }, lt + 3, { scene: (dr) => shadowDraw(ctx, brownstones(), -60 - dr * 0.9, 210, 1.2) });
    tag(ctx, 'BROOKLYN', 640, 330, t, P(24, 'brooklyn'), { px: 64, col: '#e8604a' });
    tag(ctx, 'NEW YORK', 640, 425, t, P(24, 'york') - 0.1, { px: 40 });
  };
  // A10 the Michtoms' candy and toy shop
  const sShop = (ctx, t) => {
    const lt = t - PS(25);
    outdoor(ctx, 'bk', { sky: ['#e8a07a', '#f6d2a0'], sun: ['#e9845b', '#f3ad62', '#f8d891'], sunX: 300, sunY: 160, far: '#9a7a8a', mid: '#7a6a7a', ground: '#6a6470', fore: '#2a2630' }, lt + 8, { scene: () => { const A = dropIn(t, PS(25) - 0.45, 0.45, 60); if (A) put(ctx, shopFront(), 560, 360 + A.dy, { d: 1.3 + A.d }); } });
    fig(ctx, 'morris', MORRIS, 1000, 690, t, P(25, 'morris') - 0.1, { s: 0.95 });
    fig(ctx, 'rose', ROSE, 1160, 690, t, P(25, 'rose') - 0.1, { s: 0.92 });
    tag(ctx, 'MORRIS', 1000, 300, t, P(25, 'morris'), { px: 32, rot: -0.04 });
    tag(ctx, 'ROSE', 1160, 300, t, P(25, 'rose'), { px: 32, rot: 0.04 });
    tag(ctx, 'CANDY + TOYS', 560, 120, t, P(26, 'candy'), { px: 44, col: '#d9473b', back: '#fbf6ea' });
  };
  // A11 the cartoon pinned up; Rose sews a stuffed bear
  const SHOPIN = { wall: '#e8d8b8', stripe: '#e0cca8', floor: '#8a5a3a', floorY: 600, wains: '#6e3b46', wainY: 440 };
  const sSew = (ctx, t) => {
    interior(ctx, 'shopin', SHOPIN);
    const N = dropIn(t, P(27, 'cartoon') - 0.2, 0.4, 60); if (N) { put(ctx, newspaper(), 280, 250 + N.dy, { s: 0.62, d: 0.9 + N.d, rot: -0.06 }); cartoonInPaper(ctx, 280, 250 + N.dy, 0.62, t, -10); put(ctx, pin(), 280, 140 + N.dy, { d: 0.5, s: 0.8 }); }
    tag(ctx, 'THE CARTOON', 280, 420, t, P(27, 'cartoon'), { px: 32, rot: -0.03 });
    fig(ctx, 'rose', ROSE, 1080, 690, t, PS(28) - 0.3, { s: 0.92, flip: true });
    // sewing: a dashed stitch line runs round the bear, then the stuffed bear pops
    const sw = io(t, P(28, 'sews'), P(28, 'stuffed'));
    if (sw > 0 && t < P(28, 'stuffed')) { ctx.save(); ctx.strokeStyle = '#d9473b'; ctx.lineWidth = 5; ctx.setLineDash([14, 10]); ctx.beginPath(); ctx.ellipse(700, 400, 130, 180, 0, -Math.PI / 2, -Math.PI / 2 + TAU * sw); ctx.stroke(); ctx.restore(); }
    if (t >= P(28, 'stuffed') - 0.1) { burstAt(ctx, 700, 400, t, P(28, 'stuffed') - 0.1, 0.9, '#f2b545'); sprAt(ctx, teddy({}), 700, 410, t, P(28, 'stuffed') - 0.1, { pop: true, s: 0.95, d: 1.3 }); }
    tag(ctx, 'STUFFED BEAR', 700, 650, t, P(28, 'stuffed'), { px: 40, col: '#e8604a' });
    tag(ctx, 'SOFT', 930, 210, t, P(28, 'soft'), { px: 34, col: '#2f7f86', rot: -0.06 });
  };
  // A12 in the window, with a sign: Teddy's Bear
  const sWindow = (ctx, t) => {
    interior(ctx, 'shopin', SHOPIN);
    put(ctx, teddy({}), 640, 400, { s: 1.0, d: 1.3 });
    ctx.save(); ctx.fillStyle = 'rgba(190,224,230,0.18)'; ctx.fillRect(0, 0, W, HH); ctx.restore();
    put(ctx, windowFrame(), 640, 360, { s: 1.6, d: 1.6 });
    tag(ctx, 'IN THE WINDOW', 640, 70, t, P(29, 'window'), { px: 36, col: '#fbf6ea', back: '#6e3b46' });
    const S = dropIn(t, P(30, 'teddys') - 0.15, 0.45, 70); if (S) { ctx.save(); ctx.strokeStyle = '#3a2420'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(560, 470 + S.dy); ctx.lineTo(600, 420); ctx.moveTo(720, 470 + S.dy); ctx.lineTo(680, 420); ctx.stroke(); ctx.restore(); put(ctx, wordSpr("TEDDY'S BEAR", 56, '#d9473b', '#fbf6ea', 16), 640, 540 + S.dy, { s: S.s, d: 1.2 + S.d, rot: -0.03 }); }
  };
  // A13 the letter to Roosevelt
  const sLetter = (ctx, t) => {
    outdoor(ctx, 'dusk', PAL.dusk, t - PS(31) + 4, { drift: 3 });
    sprAt(ctx, shopFront(), 220, 420, t, PS(31) - 0.4, { s: 0.42 });
    sprAt(ctx, whiteHouse(), 1060, 450, t, PS(31) - 0.3, { s: 0.9 });
    tag(ctx, 'ROOSEVELT', 1060, 260, t, P(31, 'roosevelt'), { px: 34, rot: 0.03 });
    tag(ctx, 'THE STORY GOES', 640, 90, t, P(31, 'story'), { px: 36, col: '#e8604a' });
    const fl = io(t, P(31, 'wrote'), P(32, 'ask'));
    if (fl > 0) { arrow(ctx, 300, 330, 640, 120, 960, 330, Math.min(1, fl * 1.1), '#f2b545', 731); put(ctx, envelope(), H.lerp(300, 960, fl), H.lerp(330, 330, fl) - Math.sin(fl * Math.PI) * 190, { rot: Math.sin(fl * 6) * 0.15, d: 1.6, s: 0.8 }); }
    const L = dropIn(t, P(32, 'use') - 0.2, 0.4, 60); if (L) put(ctx, cache('letter', () => { const a = wordSpr('MAY WE USE', 40, '#2b2d5a', null), b = wordSpr('YOUR NAME?', 40, '#d9473b', null), C = H.layer(Math.max(a.width, b.width) + 60, 200), c = C.getContext('2d'); shadowDraw(c, paperize(C.width, 200, (x) => { x.fillStyle = '#fbf6ea'; x.beginPath(); poly(x, rect(H.rng(77), 6, 6, C.width - 6, 194, 30, 0.6)); x.fill(); }, { seed: 78 }), 0, 0, 0); shadowDraw(c, a, 30, 30, 0.3); shadowDraw(c, b, 30, 104, 0.3); return C; }), 640, 520 + L.dy, { s: L.s, d: 1.4 + L.d, rot: 0.02 });
  };
  // A14 sold out -> a whole toy company called Ideal
  const sIdeal = (ctx, t) => {
    interior(ctx, 'shopin', SHOPIN);
    [220, 400].forEach((y, row) => { shadowDraw(ctx, shelf(1000), 140, y + 120, 0.8); for (let i = 0; i < 6; i++) { const gone = P(33, 'sell') + (row * 6 + i) * 0.1; if (t < gone || t > PS(35) + 0.2) { const A = t > PS(35) ? dropIn(t, PS(35) + 0.2 + (row * 6 + i) * 0.05, 0.35, 50) : { dy: 0, s: 1, d: 0 }; if (A) put(ctx, teddy({ bow: ['#d9473b', '#58b0a6', '#f2b545'][i % 3] }), 230 + i * 165, y + 40 + A.dy, { s: 0.36 * A.s, d: 0.8 + A.d }); } } });
    const SO = dropIn(t, P(33, 'out') - 0.1, 0.3, 50); if (SO && t < PS(35)) put(ctx, wordSpr('SOLD OUT', 72, '#d9473b', '#fbf6ea', 16), 640, 330 + SO.dy, { s: SO.s, d: 1.4 + SO.d, rot: -0.08 });
    for (let i = 0; i < 5; i++) { if (t > PS(34) && t < PS(35) + 0.2) fig(ctx, 'cust' + i, { skin: ['#f0c9a2', '#c98e6a', '#f3d0b0', '#8a5a3e', '#e8b896'][i], coat: ['#2f7f86', '#e8604a', '#5a4a7a', '#f2b545', '#3a6a4a'][i], pants: '#2f3046', hat: i % 2 ? 'derby' : 'none', hatCol: '#2a2a36' }, 200 + i * 220, 760, t, PS(34) + i * 0.1, { s: 0.9 }); }
    if (t > PS(35) - 0.05) { const B = dropIn(t, PS(35), 0.4, 60); if (B) { ctx.save(); ctx.fillStyle = 'rgba(20,12,30,0.25)'; ctx.fillRect(0, 0, W, HH); ctx.restore(); }
      tag(ctx, 'TOY COMPANY', 640, 640, t, P(35, 'company'), { px: 44, col: '#2f7f86' });
      burstAt(ctx, 640, 320, t, P(35, 'ideal') - 0.1, 0.9, '#f2b545');
      cutTitle(ctx, 'IDEAL', 640, 340, 120, t, P(35, 'ideal') - 0.15, { step: 0.04 }); }
  };
  // A15 ch4: the twist
  const sTwist = (ctx, t) => {
    outdoor(ctx, 'twist', { sky: ['#58b0a6', '#9ad0c4'], sun: ['#e8604a', '#f2b545', '#f8d891'], sunX: 640, sunY: 330, far: '#3f8a84', mid: '#2f6b66', ground: '#2b5a54', fore: '#163a3a' }, t - PS(36));
    burstAt(ctx, 640, 330, t, P(36, 'twist') - 0.2, 1.3, '#f2b545');
    cutTitle(ctx, 'THE TWIST', 640, 360, 104, t, P(36, 'twist') - 0.3, { step: 0.04 });
  };
  // A16 two continents, same time: Germany and Steiff
  const OCEAN = { wall: '#3c6f8a', stripe: '#386a84', floor: '#2f5a74', floorY: 650 };
  const twoLands = (ctx, t, st) => {
    interior(ctx, 'ocean', OCEAN);
    ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 4; for (let i = 0; i < 14; i++) { const r = H.rng(i + 3), x = r.range(80, 1200), y = r.range(80, 640); ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + 20, y - 10, x + 40, y); ctx.quadraticCurveTo(x + 60, y + 10, x + 80, y); ctx.stroke(); } ctx.restore();
    sprAt(ctx, landCard('na', NA_PTS, '#d9b77a'), 250, 360, t, st, { d: 1.2 });
    sprAt(ctx, landCard('eu', EU_PTS, '#c9a46a'), 1030, 360, t, st + 0.1, { d: 1.2 });
  };
  const sGermany = (ctx, t) => {
    twoLands(ctx, t, PS(37) - 0.5);
    put(ctx, teddy({ bow: '#d9473b' }), 250, 380, { s: 0.5, d: 1 });
    tag(ctx, 'USA', 250, 560, t, PS(37) - 0.4, { px: 34 });
    tag(ctx, 'SAME TIME', 640, 660, t, P(37, 'same'), { px: 44, col: '#e8604a' });
    tag(ctx, 'GERMANY', 1030, 560, t, P(37, 'germany'), { px: 40, col: '#d9473b' });
    sprAt(ctx, pin(), 1030, 230, t, P(37, 'germany') + 0.05, { d: 1.2 });
    tag(ctx, 'STEIFF', 1030, 150, t, P(38, 'steiff'), { px: 48, col: '#2f7f86' });
    sprAt(ctx, teddy({ col: '#d8b07a', dark: '#9a7448', light: '#f3dcae', snout: 0.85, fore: 0.15, eye: 0.25, arms: 0.85 }), 1030, 380, t, P(38, 'bears') - 0.1, { pop: true, s: 0.5 });
  };
  // A17 Margarete Steiff and her felt elephants
  const WORK = { wall: '#5a6a5a', stripe: '#546454', floor: '#7a5236', floorY: 620, wains: '#3e4a3e', wainY: 480 };
  const sMargarete = (ctx, t) => {
    interior(ctx, 'work', WORK);
    fig(ctx, 'marg', MARGARETE, 330, 700, t, P(39, 'margarete') - 0.2);
    tag(ctx, 'MARGARETE STEIFF', 330, 250, t, P(39, 'margarete'), { px: 34, rot: -0.03 });
    shadowDraw(ctx, shelf(700), 540, 560, 0.9);
    burstAt(ctx, 880, 420, t, P(40, 'elephants') - 0.1, 0.8, '#e8839a');
    sprAt(ctx, elephant(), 880, 450, t, P(40, 'elephants') - 0.15, { pop: true, s: 1.1, d: 1.3 });
    tag(ctx, 'FELT ELEPHANT', 880, 640, t, P(40, 'felt'), { px: 40, col: '#5a4a7a' });
    tag(ctx, 'SEWING', 700, 160, t, P(40, 'sewing'), { px: 34, col: '#e8604a', rot: 0.04 });
  };
  // A18 Richard sketches bears and makes one whose arms and legs move
  const jointedBear = (ctx, x, y, s, t, st) => {
    const sw = (k) => (t > st ? Math.sin((t - st) * 4 + k) * 0.55 * cl((t - st) * 2) : 0);
    const col = '#d8b07a';
    const L = (k, lx, ly, len, w, base) => { ctx.save(); ctx.translate(x + lx * s, y + ly * s); ctx.rotate(base + sw(k)); ctx.scale(s, s); put(ctx, cache('limb' + len + w, () => paperize(w * 2 + 10, len + 20, (c) => { c.fillStyle = col; c.beginPath(); poly(c, ellPts(H.rng(len), w + 5, len / 2 + 10, w, len / 2 + 6)); c.fill(); c.fillStyle = '#9a7448'; c.beginPath(); c.arc(w + 5, 18, 5, 0, TAU); c.fill(); }, { seed: 33 })), 0, len / 2 - 4, { d: 0.8 }); ctx.restore(); };
    L(2, -40, 90, 70, 22, 0.15); L(3, 40, 90, 70, 22, -0.15);
    put(ctx, teddy({ col, dark: '#9a7448', light: '#f3dcae', snout: 0.85, fore: 0.15, eye: 0.25, arms: 0.85, noLimbs: true }), x, y, { s, d: 1 });
    L(0, -56, 12, 92, 15, 0.5); L(1, 56, 12, 92, 15, -0.5);
  };
  const sRichard = (ctx, t) => {
    interior(ctx, 'work', WORK);
    fig(ctx, 'rich', RICHARD, 180, 700, t, PS(41) - 0.3);
    tag(ctx, 'RICHARD STEIFF', 200, 240, t, P(41, 'richard'), { px: 30, rot: -0.03 });
    const B = dropIn(t, P(41, 'sketching') - 0.2, 0.4, 70);
    if (B) { put(ctx, sketchbook(), 560, 330 + B.dy, { d: 1.2 + B.d, rot: -0.04 });
      const p = io(t, P(41, 'sketching'), P(41, 'sketching') + 1.6); ctx.save(); ctx.translate(0, B.dy); ctx.strokeStyle = '#3a3440'; ctx.lineWidth = 3; ctx.lineCap = 'round';
      [[440, 330], [640, 300]].forEach(([cx, cy], i) => { const q = cl(p * 2 - i); if (q <= 0) return; ctx.beginPath(); ctx.ellipse(cx, cy, 52, 44, 0, 0, TAU * q); ctx.stroke(); ctx.beginPath(); ctx.ellipse(cx, cy - 70, 34, 30, 0, 0, TAU * q); ctx.stroke(); if (q > 0.6) { ctx.beginPath(); ctx.arc(cx - 26, cy - 96, 11, 0, TAU); ctx.arc(cx + 26, cy - 96, 11, 0, TAU); ctx.stroke(); ctx.beginPath(); ctx.ellipse(cx + 14, cy - 64, 14, 9, 0, 0, TAU); ctx.stroke(); } }); ctx.restore();
      if (p > 0) put(ctx, pencil(), 520 + p * 170, 300 + Math.sin(p * 20) * 40 + B.dy, { rot: -0.8, d: 1.8 }); }
    tag(ctx, 'SKETCHING BEARS', 560, 560, t, P(41, 'sketching'), { px: 34, col: '#2f7f86' });
    if (t > P(42, 'designed') - 0.2) { const A = popIn(t, P(42, 'designed') - 0.2); if (A) { ctx.save(); ctx.translate(1010, 380); ctx.scale(A.s, A.s); ctx.translate(-1010, -380); jointedBear(ctx, 1010, 380, 0.85, t, P(42, 'arms') - 0.1); ctx.restore(); } }
    tag(ctx, 'ARMS', 860, 200, t, P(42, 'arms'), { px: 34, col: '#e8604a', rot: -0.05 });
    tag(ctx, 'LEGS', 1160, 610, t, P(42, 'legs'), { px: 34, col: '#e8604a', rot: 0.05 });
    tag(ctx, 'THEY MOVE!', 1080, 120, t, P(42, 'move'), { px: 40, col: '#2b2d5a' });
  };
  // A19 Leipzig toy fair 1903: nobody cares... then 3,000
  const FAIR = { wall: '#7a3a4a', stripe: '#723646', floor: '#a07a50', floorY: 600, wains: '#4a2a34', wainY: 470 };
  const bunting = (ctx) => ctx.drawImage(cache('bunt', () => { const C = H.layer(W, 120), c = C.getContext('2d'); shadowDraw(c, paperize(W, 120, (x) => { for (let i = 0; i < 24; i++) { x.fillStyle = ['#f2b545', '#58b0a6', '#e8604a', '#fbf6ea'][i % 4]; x.beginPath(); poly(x, [[i * 56, 20 + Math.sin(i * 0.5) * 6], [i * 56 + 50, 20 + Math.sin(i * 0.5 + 0.5) * 6], [i * 56 + 25, 80]]); x.fill(); } }, { seed: 61 }), 0, 0, 0.8); return C; }), 0, 0);
  const sFair = (ctx, t) => {
    interior(ctx, 'fair', FAIR); bunting(ctx);
    const Y = dropIn(t, P(43, 'nineteenohthree') - 0.1, 0.4, 60); if (Y) numberRow(ctx, '1903', 640, 190 + Y.dy, 96, '#f2b545', { center: true });
    if (t < P(46, 'three') - 0.15) { tag(ctx, 'TOY FAIR', 360, 300, t, P(44, 'toy'), { px: 40, col: '#2f7f86', rot: -0.04 }); tag(ctx, 'LEIPZIG', 920, 300, t, P(44, 'leipzig'), { px: 44, col: '#d9473b', rot: 0.04 }); }
    // the booth table with the jointed bear
    const T = dropIn(t, PS(44), 0.4, 70); if (T) { put(ctx, cache('table', () => compose(560, 150, [[(c) => { c.fillStyle = '#2f7f86'; c.beginPath(); poly(c, rect(H.rng(9), 6, 6, 554, 150, 30)); c.fill(); c.fillStyle = '#f3ecdc'; for (let i = 0; i < 9; i++) c.fillRect(20 + i * 60, 6, 30, 30); }, 0]])), 640, 600 + T.dy, { d: 1.2 + T.d }); jointedBear(ctx, 640, 440 + T.dy, 0.6, t, 1e9); }
    if (t > P(45, 'nobody') - 0.1 && t < PS(46)) { const sz = 1 + 0.06 * Math.sin(t * 5); put(ctx, bubble('...', 64, '#2b2d5a'), 900, 430, { s: sz, d: 1 }); tag(ctx, 'NOBODY CARED', 300, 460, t, P(45, 'nobody'), { px: 34, col: '#2b2d5a', rot: -0.03 }); }
    if (t > PS(46) - 0.4) { const wk = ph(t, PS(46) - 0.4, P(46, 'buyer')); fig(ctx, 'buyer', BUYER, H.lerp(1400, 1060, E.out(wk)), 730, t, PS(46) - 0.4, { walk: wk < 1 });
      tag(ctx, 'AMERICAN BUYER', 1060, 330, t, P(46, 'buyer'), { px: 30, rot: 0.03 });
      if (t > P(46, 'three') - 0.15) { ctx.save(); ctx.fillStyle = 'rgba(20,12,30,0.3)'; ctx.fillRect(0, 0, W, HH); ctx.restore(); burstAt(ctx, 640, 340, t, P(46, 'three') - 0.15, 1.2, '#f2b545'); const D = dropIn(t, P(46, 'three') - 0.15, 0.4, 70); if (D) numberRow(ctx, '3,000', 640, 330 + D.dy, 120, '#d9473b', { center: true }); tag(ctx, 'BEARS ORDERED', 640, 460, t, P(46, 'thousand'), { px: 44, col: '#2b2d5a' }); }
    }
  };
  // A20 by 1907: 974,000 bears
  const sFactory = (ctx, t) => {
    interior(ctx, 'work', WORK);
    const Y = dropIn(t, P(47, 'nineteenohseven') - 0.1, 0.4, 60); if (Y) numberRow(ctx, '1907', 640, 120 + Y.dy, 84, '#f2b545', { center: true });
    const c0 = P(48, 'nine') - 0.05, c1 = P(48, 'bears');
    const n = 974000 * Math.pow(ph(t, c0, c1), 0.6);
    // shelves fill with bears as the counter runs
    [380, 560].forEach((y, row) => { shadowDraw(ctx, shelf(1180), 50, y + 60, 0.8); for (let i = 0; i < 14; i++) { const st = c0 + (row * 14 + i) * 0.09; const A = popIn(t, st, 0.25); if (A) put(ctx, teddy({ col: '#d8b07a', dark: '#9a7448', light: '#f3dcae', snout: 0.85, fore: 0.15, eye: 0.25, arms: 0.85 }), 95 + i * 84, y - 6, { s: 0.24 * A.s, d: 0.6 }); } });
    if (t > c0 - 0.1) { const D = dropIn(t, c0 - 0.1, 0.35, 50); numberRow(ctx, fmt(n), 640, 240 + (D ? D.dy : 0), 96, '#d9473b', { center: true }); }
    tag(ctx, 'BEARS', 640, 700, t, P(48, 'bears'), { px: 40, col: '#2b2d5a' });
    if (t > c1) burstAt(ctx, 1140, 120, t, c1, 0.4, '#f2b545');
  };
  // A21 born twice
  const sTwice = (ctx, t) => {
    twoLands(ctx, t, -10);
    sprAt(ctx, teddy({ bow: '#d9473b' }), 250, 380, t, PS(49) - 0.4, { pop: true, s: 0.75 });
    sprAt(ctx, teddy({ col: '#d8b07a', dark: '#9a7448', light: '#f3dcae', snout: 0.85, fore: 0.15, eye: 0.25, arms: 0.85 }), 1030, 380, t, PS(49) - 0.3, { pop: true, s: 0.75 });
    cutTitle(ctx, 'BORN TWICE', 640, 140, 88, t, P(49, 'twice') - 0.3, { step: 0.04 });
    tag(ctx, 'USA', 250, 620, t, P(50, 'continents') - 0.2, { px: 36 });
    tag(ctx, 'GERMANY', 1030, 620, t, P(50, 'continents'), { px: 36, col: '#d9473b' });
    arrow(ctx, 430, 470, 640, 560, 850, 470, io(t, P(50, 'same'), P(50, 'moment')), '#f2b545', 741);
    arrow(ctx, 850, 470, 640, 560, 430, 470, io(t, P(50, 'same') + 0.2, P(50, 'moment') + 0.2), '#f2b545', 742);
  };
  // A22 ch5: an early teddy looks like a real bear
  const LAB = { wall: '#e8dcc4', stripe: '#e0d2b8', floor: '#5a6a7a', floorY: 620, wains: '#4a5a6a', wainY: 500 };
  const OLD = { col: '#d8b07a', dark: '#9a7448', light: '#f3dcae', snout: 1, fore: 0, eye: 0.15, arms: 1 };
  const sOld = (ctx, t) => {
    interior(ctx, 'lab', LAB);
    const C = dropIn(t, PS(51) - 0.3, 0.45, 80); if (C) { put(ctx, cache('specimen', () => compose(420, 560, [[(c) => { c.fillStyle = '#fbf6ea'; c.beginPath(); poly(c, rect(H.rng(91), 6, 6, 414, 554, 30, 0.6)); c.fill(); c.fillStyle = '#2f7f86'; c.fillRect(6, 6, 408, 50); }, 0]])), 520, 370 + C.dy, { d: 1.3 + C.d, rot: -0.01 }); put(ctx, teddy(OLD), 520, 400 + C.dy, { s: 1.15, d: 1 }); }
    tag(ctx, 'EARLY 1900s', 1010, 300, t, P(51, 'teddy'), { px: 34, col: '#fbf6ea', back: '#2f7f86' });
    arrow(ctx, 860, 210, 760, 220, 600, 300, io(t, P(52, 'snout'), P(52, 'snout') + 0.3), '#e8604a', 751); tag(ctx, 'LONG SNOUT', 990, 210, t, P(52, 'snout'), { px: 34, col: '#e8604a' });
    arrow(ctx, 230, 150, 300, 150, 430, 210, io(t, P(52, 'forehead'), P(52, 'forehead') + 0.3), '#2f7f86', 752); tag(ctx, 'LOW FOREHEAD', 200, 110, t, P(52, 'forehead'), { px: 32, col: '#2f7f86' });
    arrow(ctx, 230, 520, 300, 480, 400, 460, io(t, P(52, 'arms'), P(52, 'arms') + 0.3), '#5a4a7a', 753); tag(ctx, 'SKINNY ARMS', 200, 560, t, P(52, 'skinny'), { px: 32, col: '#5a4a7a' });
    const R = dropIn(t, P(53, 'real') - 0.2, 0.4, 60); if (R) { put(ctx, blackBear(), 1010, 470 + R.dy, { s: 0.85, sx: -0.85, sy: 0.85, d: 1 + R.d }); }
    tag(ctx, 'REAL BEAR', 1010, 610, t, P(53, 'real'), { px: 34 });
  };
  // A23 scientists measured old teddies over the years
  const lerpB = (u) => ({ col: '#c98a4b', dark: '#8d5a2b', light: '#ecc893', snout: 1 - u, fore: u, eye: 0.15 + 0.85 * u, arms: 1 - u });
  const sMeasure = (ctx, t) => {
    interior(ctx, 'lab', LAB);
    const R = dropIn(t, P(54, 'measured') - 0.2, 0.4, 60);
    if (R) put(ctx, cache('ruler', () => compose(1100, 70, [[(c) => { c.fillStyle = '#f2b545'; c.beginPath(); poly(c, rect(H.rng(3), 4, 6, 1096, 64, 30, 0.4)); c.fill(); c.fillStyle = '#5a3a1a'; for (let i = 0; i < 110; i++) c.fillRect(12 + i * 10, 6, 3, i % 5 ? 14 : 26); }, 0]])), 640, 600 + R.dy, { d: 1 + R.d });
    tag(ctx, 'SCIENTISTS MEASURED', 640, 90, t, P(54, 'scientists'), { px: 40, col: '#2f7f86' });
    for (let i = 0; i < 4; i++) sprAt(ctx, teddy(lerpB(i / 3)), 220 + i * 280, 360, t, P(55, 'slowly') - 0.2 + i * 0.25, { pop: true, s: 0.7 });
    arrow(ctx, 120, 530, 640, 500, 1160, 530, io(t, P(55, 'changed'), PE(55)), '#e8604a', 761);
    tag(ctx, 'OVER THE YEARS', 640, 680, t, P(55, 'years'), { px: 34, col: '#e8604a' });
  };
  // A24 the morph: shorter snout, bigger forehead, rounder eyes -> like a baby
  const sMorph = (ctx, t) => {
    interior(ctx, 'lab2', { wall: '#58b0a6', stripe: '#52a89e', floor: '#2f6b66', floorY: 640 });
    const a = io(t, P(56, 'snouts'), P(56, 'shorter') + 0.4), b = io(t, P(57, 'foreheads'), P(57, 'bigger') + 0.4), e = io(t, P(58, 'eyes'), P(58, 'rounder') + 0.4);
    const mv = io(t, PS(59) - 0.1, PS(59) + 0.5);
    put(ctx, teddy({ col: '#c98a4b', dark: '#8d5a2b', light: '#ecc893', snout: 1 - a, fore: b, eye: 0.15 + 0.85 * e, arms: 1 - 0.8 * a }), 640 - mv * 260, 370, { s: 1.2 - mv * 0.15, d: 1.2 });
    const lx = 640 - mv * 260;
    if (t < PS(59)) { tag(ctx, 'SHORTER SNOUT', 1020, 360, t, P(56, 'shorter'), { px: 36, col: '#e8604a' }); tag(ctx, 'BIGGER FOREHEAD', 1000, 180, t, P(57, 'bigger'), { px: 36, col: '#2b2d5a' }); tag(ctx, 'ROUNDER EYES', 260, 250, t, P(58, 'rounder'), { px: 36, col: '#5a4a7a' }); }
    if (t > P(57, 'bigger') - 0.1 && t < PS(59)) ringAt(ctx, lx, 280, t, P(57, 'bigger') - 0.1, 0.65, '#f2b545');
    if (t > PS(59) - 0.1) { sprAt(ctx, babyFace(), 920, 330, t, P(59, 'babies') - 0.3, { pop: true, s: 1.2 }); tag(ctx, '=', 660, 330, t, P(59, 'look'), { px: 72, col: '#fbf6ea', back: '#2b2d5a' }); tag(ctx, 'LIKE BABIES', 920, 560, t, P(59, 'babies'), { px: 48, col: '#e8604a' }); }
  };
  // A25 why: people pick the cutest one -> evolution in a toy shop
  const sCutest = (ctx, t) => {
    interior(ctx, 'shopin', SHOPIN);
    shadowDraw(ctx, shelf(1000), 140, 470, 0.8);
    [0, 0.5, 1].forEach((u, i) => put(ctx, teddy(lerpB(u)), 300 + i * 340, 372, { s: 0.6, d: 0.9 }));
    tag(ctx, 'WHY?', 640, 90, t, P(60, 'why') - 0.05, { px: 56, col: '#e8604a' });
    const pk = ph(t, P(60, 'cutest') - 0.1, P(60, 'cutest') + 0.4);
    if (pk > 0) { ringAt(ctx, 980, 330, t, P(60, 'cutest') - 0.1, 0.9, '#f2b545'); put(ctx, checkSpr(), 1100, 200, { s: E.back(pk), d: 1 }); put(ctx, crossSpr(), 300, 220, { s: E.back(pk) * 0.7, d: 1 }); }
    if (t > PS(61) - 0.3) {
      sheetIn(ctx, '#3a3a6a', ph(t, PS(61) - 0.3, PS(61)), 3);
      sprAt(ctx, brain(), 330, 330, t, P(61, 'brains') - 0.2, { pop: true, s: 1 }); tag(ctx, 'BRAIN', 330, 500, t, P(61, 'brains'), { px: 34, col: '#e8839a', back: '#2b2d5a' });
      for (let i = 0; i < 3; i++) sprAt(ctx, heartSpr(), 560 + i * 60, 260 - i * 30, t, P(61, 'love') + i * 0.1, { pop: true, s: 0.6 });
      sprAt(ctx, babyFace(), 900, 320, t, P(61, 'baby') - 0.2, { pop: true, s: 0.9 }); tag(ctx, 'BABY-LIKE FACES', 900, 500, t, P(61, 'faces'), { px: 34, col: '#fbf6ea', back: '#e8604a' });
    }
    if (t > PS(62) - 0.3) {
      sheetIn(ctx, '#e8d8b8', ph(t, PS(62) - 0.3, PS(62)), 4);
      // sales bars: cuter bears sell more, year after year
      const base = 560; [0, 0.5, 1].forEach((u, i) => { const hgt = [90, 190, 330][i] * E.out(ph(t, P(62, 'sold') + i * 0.15, P(62, 'sold') + 0.6 + i * 0.15)); if (hgt > 1) shadowDraw(ctx, cache('sbar' + i, () => paperize(120, 330, (c) => { c.fillStyle = ['#9aa8c8', '#58b0a6', '#e8604a'][i]; c.beginPath(); poly(c, rect(H.rng(i), 2, 2, 118, 330, 24, 0.5)); c.fill(); }, { seed: 60 + i })), 300 + i * 340 - 60, base - hgt, 0.9); put(ctx, teddy(lerpB(u)), 300 + i * 340, base + 70, { s: 0.3, d: 0.6 }); });
      tag(ctx, 'SOLD BEST', 980, 170, t, P(62, 'best'), { px: 44, col: '#e8604a' });
      if (t > PS(63) - 0.1) { ctx.save(); ctx.fillStyle = `rgba(20,12,30,${0.4 * ph(t, PS(63) - 0.1, PS(63) + 0.2)})`; ctx.fillRect(0, 0, W, HH); ctx.restore(); cutTitle(ctx, 'EVOLUTION', 640, 300, 100, t, P(63, 'evolution') - 0.25, { step: 0.035 }); tag(ctx, 'IN A TOY SHOP', 640, 450, t, P(63, 'toy'), { px: 48, col: '#2f7f86' }); }
    }
  };
  // A26 ch6: teddy bears everywhere
  const sEverywhere = (ctx, t) => {
    interior(ctx, 'room', { wall: '#f2c0b0', stripe: '#eab6a6', floor: '#a07a50', floorY: 620 });
    const r = H.rng(5);
    for (let i = 0; i < 16; i++) { const x = r.range(80, 1200), y = r.range(200, 620), u = i / 15; sprAt(ctx, teddy({ ...lerpB(0.7 + r() * 0.3), col: r.pick(['#c98a4b', '#d8b07a', '#a86a3a', '#e0c090', '#8a5a3a']), bow: r.pick(['#d9473b', '#58b0a6', '#f2b545', '']) }), x, y, t, PS(64) - 0.2 + u * 1.6, { pop: true, s: r.range(0.3, 0.55) }); }
    tag(ctx, 'EVERYWHERE', 640, 650, t, P(64, 'everywhere'), { px: 64, col: '#e8604a' });
  };
  // A27 a $2.1 million bear
  const sAuction = (ctx, t) => {
    interior(ctx, 'auction', { wall: '#5a2230', stripe: '#52202c', floor: '#3a1a22', floorY: 610, wains: '#3a1620', wainY: 500 });
    const Y = dropIn(t, P(65, 'two') - 0.1, 0.4, 60); if (Y) numberRow(ctx, '2000', 230, 120 + Y.dy, 72, '#f2b545', { center: true });
    burstAt(ctx, 640, 360, t, P(65, 'bear') - 0.2, 1, '#f2b545');
    sprAt(ctx, teddy({ col: '#d9b44a', dark: '#a08030', light: '#f6e2a0', gem: true, snout: 0.6, fore: 0.35, eye: 0.45, arms: 0.6 }), 640, 380, t, P(65, 'steiff') - 0.1, { pop: true, s: 1 });
    if (t > P(66, 'sapphire')) sparkle(ctx, 640, 290, 1.2, t, 9);
    tag(ctx, 'SAPPHIRE + DIAMOND EYES', 640, 110, t, P(66, 'sapphire'), { px: 32, col: '#2c5fd0' });
    tag(ctx, 'MONACO', 1040, 200, t, P(67, 'monaco'), { px: 36, rot: 0.04 });
    const G = ph(t, P(67, 'sold') - 0.2, P(67, 'sold') + 0.1); if (G > 0) put(ctx, gavel(), 1040, 330, { rot: -0.6 + 0.9 * E.back(G), d: 1.2 });
    if (t > P(68, 'two') - 0.15) { ctx.save(); ctx.fillStyle = 'rgba(20,6,12,0.35)'; ctx.fillRect(0, 0, W, HH); ctx.restore(); const D = dropIn(t, P(68, 'two') - 0.15, 0.4, 60); if (D) numberRow(ctx, '$2.1', 640, 560 + D.dy, 110, '#f2b545', { center: true }); tag(ctx, 'MILLION', 640, 670, t, P(68, 'million'), { px: 44, col: '#d9473b' }); }
  };
  // A28 a third of British adults still sleep with a teddy
  const sBed = (ctx, t) => {
    outdoor(ctx, 'night', PAL.night, t - PS(69), { noFore: true, drift: 2 });
    ctx.save(); ctx.fillStyle = 'rgba(20,16,40,0.0)'; ctx.restore();
    const B = dropIn(t, PS(69) - 0.4, 0.45, 80); if (B) { put(ctx, bed(), 640, 520 + B.dy, { d: 1.4 + B.d }); put(ctx, person('sleeper', { skin: '#e8b896', coat: '#e8839a', hair: '#5a3a2a', mustache: '#5a3a2a' }), 495, 488 + B.dy, { s: 0.75, rot: -1.45, d: 0.6 }); put(ctx, teddy({ bow: '#d9473b' }), 520, 445 + B.dy, { s: 0.36, rot: 0.25, d: 0.8 }); put(ctx, blanket(), 640, 520 + B.dy, { d: 1 }); }
    tag(ctx, 'NOT JUST KIDS', 640, 110, t, P(69, 'kids'), { px: 44, col: '#f2b545', back: '#2b2d5a' });
    if (t > PS(70) - 0.2) { sheetIn(ctx, '#2b2d5a', ph(t, PS(70) - 0.2, PS(70) + 0.15), 5);
      tag(ctx, 'BRITISH SURVEY', 640, 110, t, P(70, 'british'), { px: 44, col: '#2b2d5a' });
      for (let i = 0; i < 3; i++) { const hi = i === 1 && t > P(71, 'third') - 0.1; fig(ctx, 'adult' + i + (hi ? 'h' : ''), { skin: ['#f0c9a2', '#c98e6a', '#f3d0b0'][i], coat: hi ? '#e8604a' : '#7a7a8a', pants: '#2f3046', hair: '#4a3020' }, 380 + i * 260, 640, t, PS(71) - 0.3 + i * 0.12, { s: 0.85 }); if (hi) put(ctx, teddy({ bow: '#d9473b' }), 380 + i * 260, 450, { s: 0.3, d: 1 }); }
      const D = dropIn(t, P(71, 'third') - 0.1, 0.4, 60); if (D) { numberRow(ctx, '1 IN 3', 640, 250 + D.dy, 84, '#e8604a', { center: true }); }
      tag(ctx, 'ADULTS', 1060, 250, t, P(71, 'adults'), { px: 36 });
    }
  };
  // A29 back to the swamp: one bear -> every teddy
  const sEnd = (ctx, t) => {
    outdoor(ctx, 'dusk', PAL.dusk, t - PS(72) + 8);
    shadowDraw(ctx, cypress(320, 480, '#2a5560'), 780, 130, 1.3);
    fig(ctx, 'roos', ROOSEVELT, 330, 640, t, PS(72) - 0.5, { flip: true });
    tag(ctx, '120+ YEARS AGO', 640, 100, t, P(72, 'hundred'), { px: 40, col: '#f2b545', back: '#2b2d5a' });
    const m = P(73, 'bear') - 0.15;
    if (t < m) { put(ctx, blackBear(), 900, 545, { sx: -1, sy: 1, d: 1 }); rope(ctx, [[788, 518], [835, 494], [885, 472], [930, 458], [948, 470], [930, 482]], 1); }
    else { burstAt(ctx, 900, 440, t, m, 1, '#f2b545'); sprAt(ctx, teddy({ bow: '#d9473b' }), 900, 450, t, m, { pop: true, s: 0.9, d: 1.3 }); }
    tag(ctx, 'ONE BEAR', 900, 240, t, P(73, 'one', 2), { px: 44, col: '#e8604a' });
  };
  // A30 next time: frozen solid
  const sNext = (ctx, t) => {
    outdoor(ctx, 'ice', PAL.ice, t - PS(74));
    tag(ctx, 'NEXT TIME', 640, 90, t, P(74, 'next'), { px: 44, col: '#fbf6ea', back: '#2f7f86' });
    sprAt(ctx, frogIce(), 640, 400, t, P(75, 'freeze') - 0.2, { s: 0.95 });
    tag(ctx, 'FROZEN SOLID', 340, 230, t, P(75, 'solid'), { px: 40, col: '#2b6a8a', rot: -0.04 });
    const hb = t > P(75, 'wake') ? 1 + 0.15 * Math.abs(Math.sin((t - P(75, 'wake')) * 6)) : 0;
    if (hb) put(ctx, heartSpr(), 860, 310, { s: 0.6 * hb, d: 1 });
    tag(ctx, '...THEN WAKES UP!', 920, 620, t, P(75, 'wake'), { px: 40, col: '#e8604a', rot: 0.03 });
  };

  // ================= scene list + transitions =================
  // tr: 'pan' = the camera travels along the diorama, 'drop' = a new backdrop sheet falls in on top, 'rip' = the sheet tears apart
  const SC = [
    { s: 0, f: sIntro, name: 'intro' },
    { s: PS(2), f: sMap, tr: 'pan' },
    { s: PS(4), f: sSwamp1, tr: 'drop', ch: [1, 'THE HUNT'] },
    { s: PS(7), f: sSearch, tr: 'pan' },
    { s: PS(9), f: sCollier, tr: 'pan' },
    { s: PS(12), f: sNo, tr: 'cut' },
    { s: PS(16), f: sPaper, tr: 'drop', ch: [2, 'THE CARTOON'] },
    { s: PS(19), f: sCartoon, tr: 'drop' },
    { s: PS(21), f: sLove, tr: 'pan' },
    { s: PS(24), f: sBrooklyn, tr: 'drop', ch: [3, 'A SHOP IN BROOKLYN'] },
    { s: PS(25), f: sShop, tr: 'pan' },
    { s: PS(27), f: sSew, tr: 'drop' },
    { s: PS(29), f: sWindow, tr: 'pan' },
    { s: PS(31), f: sLetter, tr: 'pan' },
    { s: PS(33), f: sIdeal, tr: 'drop' },
    { s: PS(36), f: sTwist, tr: 'rip', ch: [4, 'MEANWHILE IN GERMANY'], chAt: PS(37) },
    { s: PS(37), f: sGermany, tr: 'pan' },
    { s: PS(39), f: sMargarete, tr: 'drop' },
    { s: PS(41), f: sRichard, tr: 'pan' },
    { s: PS(43), f: sFair, tr: 'drop' },
    { s: PS(47), f: sFactory, tr: 'pan' },
    { s: PS(49), f: sTwice, tr: 'drop' },
    { s: PS(51), f: sOld, tr: 'drop', ch: [5, 'TEDDY EVOLUTION'] },
    { s: PS(54), f: sMeasure, tr: 'pan' },
    { s: PS(56), f: sMorph, tr: 'drop' },
    { s: PS(60), f: sCutest, tr: 'pan' },
    { s: PS(64), f: sEverywhere, tr: 'drop', ch: [6, 'TEDDY BEARS TODAY'] },
    { s: PS(65), f: sAuction, tr: 'drop' },
    { s: PS(69), f: sBed, tr: 'drop' },
    { s: PS(72), f: sEnd, tr: 'pan' },
    { s: PS(74) + 0.3, f: sNext, tr: 'rip' },
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
    nope(P(0, 'refused') + 0.1);
    hit(P(1, 'teddy'), 0.9); k.play('sparkle', P(1, 'teddy') + 0.1, { gain: 0.7 });
    for (let i = 0; i < 6; i++) k.play('tick', P(7, 'days') + i * 0.25, { minor: true, gain: 0.6 });
    k.play('error', P(8, 'single'), { gain: 0.5 });
    for (let x = 0; x < 1.2; x += 0.09) k.noise(P(10, 'dogs') - 0.3 + x, { dur: 0.04, color: 'brown', filter: 'lowpass', f: 500, gain: 0.25, minor: true });
    k.tone(P(10, 'dogs'), { f: [[0, 520], [0.15, 380]], type: 'sawtooth', dur: 0.18, gain: 0.03, filter: 'lowpass', f2: 1200 });
    k.play('tape', P(11, 'ties'), { dur: 0.7, gain: 0.6, minor: true });
    hit(P(13, 'no') - 0.05, 1.1); nope(P(14, 'fair') - 0.02);
    k.play('paper', P(15, 'refuses'), { dur: 0.3, gain: 0.4, minor: true });
    k.play('stroke', P(18, 'draws'), { dur: 1.6, material: 'pencil', gain: 0.8 });
    k.play('ding', P(20, 'eyes'), { f: 'E6', gain: 0.4 });
    for (let i = 0; i < 6; i++) k.play('pop', P(21, 'love') + i * 0.08, { f: 700 + i * 60, gain: 0.5, minor: true });
    k.play('stroke', P(28, 'sews'), { dur: P(28, 'stuffed') - P(28, 'sews'), material: 'pen', gain: 0.7 });
    hit(P(28, 'stuffed') - 0.1, 0.8);
    k.play('bell', P(29, 'window'), { gain: 0.35 });
    k.play('whoosh', P(31, 'wrote'), { dur: P(32, 'ask') - P(31, 'wrote'), gain: 0.4 });
    k.play('stamp', P(33, 'out') - 0.03, { gain: 0.8 });
    hit(P(35, 'ideal') - 0.1, 1);
    hit(P(36, 'twist') - 0.2, 1.1); k.play('riser', P(36, 'twist') - 1.0, { dur: 0.8, gain: 0.5 });
    k.play('sparkle', P(40, 'elephants'), { gain: 0.5 });
    k.play('stroke', P(41, 'sketching'), { dur: 1.6, material: 'pencil', gain: 0.8 });
    for (let i = 0; i < 8; i++) k.play('tock', P(42, 'arms') + i * 0.39, { f: 500, gain: 0.3, minor: true });
    for (let i = 0; i < 4; i++) k.tone(P(45, 'nobody') + i * 0.45, { f: [[0, 4200], [0.05, 4600]], type: 'sine', dur: 0.08, gain: 0.03, minor: true });
    hit(P(46, 'three') - 0.15, 1.2); k.play('success', P(46, 'thousand'), { gain: 0.5 });
    { const c0 = P(48, 'nine') - 0.05, c1 = P(48, 'bears'); for (let t = c0; t < c1; t += 0.07) flick(t, 0.8); card(c1, 1.2, 0, 1.3, false); k.play('ding', c1, { f: 'E5', gain: 0.5 }); }
    hit(P(49, 'twice') - 0.3, 0.9);
    for (let i = 0; i < 3; i++) k.play('stroke', P(52, ['snout', 'forehead', 'arms'][i]), { dur: 0.3, material: 'marker', gain: 0.6 });
    [P(56, 'shorter'), P(57, 'bigger'), P(58, 'rounder')].forEach((t, i) => { k.tone(t - 0.4, { f: [[0, 300 + i * 80], [0.8, 600 + i * 120]], type: 'triangle', dur: 0.8, gain: 0.05, a: 0.5 }); });
    k.play('success', P(59, 'babies'), { f: 'C6', gain: 0.5 });
    k.play('success', P(60, 'cutest'), { f: 'G5', gain: 0.5 });
    hit(P(63, 'evolution') - 0.25, 1);
    k.play('sparkle', P(66, 'sapphire'), { gain: 0.8, n: 8 });
    k.play('stamp', P(67, 'sold') + 0.05, { gain: 1 });
    hit(P(68, 'two') - 0.15, 1.2); k.play('success', P(68, 'million'), { gain: 0.55 });
    k.play('ding', P(71, 'third'), { f: 'C6', gain: 0.45 });
    hit(P(73, 'bear') - 0.15, 1); ['C4', 'G4', 'E5'].forEach((f, i) => k.play('ding', P(73, 'bear') + 0.1 + i * 0.09, { f, gain: 0.45 - i * 0.04 }));
    k.play('glitch', P(75, 'freeze') - 0.1, { gain: 0.25 });
    for (let i = 0; i < 4; i++) k.play('thud', P(75, 'wake') + i * 0.5, { f: 90, gain: 0.5, minor: true });
  }

  // ================= THUMBNAIL =================
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    outdoor(ctx, 'dusk', PAL.dusk, 0);
    put(ctx, burstSpr('#f2b545'), 930, 400, { s: 1.35, d: 0.8, rot: 0.2 });
    put(ctx, teddy({ bow: '#d9473b' }), 930, 420, { s: 1.25, d: 1.5 });
    put(ctx, person('roos', ROOSEVELT), 140, 520, { s: 1.1, d: 1.2 });
    put(ctx, wordSpr('1902', 88, '#f2b545', '#2b2d5a', 14), 930, 110, { d: 1.2, rot: 0.04 });
    put(ctx, wordSpr('HE SAID', 96, '#2b2d5a', '#fbf6ea', 20), 470, 470, { d: 1.6, rot: -0.04 });
    put(ctx, wordSpr('NO', 150, '#d9473b', '#fbf6ea', 22), 520, 610, { d: 1.8, rot: 0.03 });
    finish(ctx, 0, [700, 400]);
    ctx.restore();
  }

  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s - 0.05 ? j : a), 0) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();
