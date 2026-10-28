// ================= Low-Poly Faceted, 16:9 1280x720: "Gravity explained in simple words: why don't we fly off the Earth?" =================
// Long video (~3.5 min), 5 chapters + intro/outro, 31 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A faceted world seen by a flying camera: a spinning icosphere Earth, the reference's dusk valley, a grey moon plain,
// Newton's cannon mountain on a toy planet, a faceted space station, a U magnet. Facets flip in from the camera out
// (the reference's build move) as the scene-change, plus camera flights, push-ins and whip pans inside scenes.
// Cut-corner tags pinned to objects, two-tone ribbon arrows, Space Grotesk counters, depth fog, flat Lambert facets.
(function () {
  // ---------- voiceover phrases (phrases.json, Kokoro am_michael) ----------
  const PH = [{"s":0.25,"e":3.06,"text":"You spin a thousand miles an hour, every day,","words":[["you",0.25],["spin",0.49],["a",0.81],["thousand",0.89],["miles",1.54],["an",1.94],["hour",2.1],["every",2.42],["day",2.82]]},{"s":3.36,"e":5.45,"text":"so why don't you fly off into space?","words":[["so",3.36],["why",3.52],["dont",3.75],["you",4.06],["fly",4.29],["off",4.52],["into",4.75],["space",5.06]]},{"s":6.0,"e":7.41,"text":"The answer is gravity,","words":[["the",6.0],["answer",6.23],["is",6.7],["gravity",6.86]]},{"s":7.71,"e":9.23,"text":"and it's weirder than you think.","words":[["and",7.71],["its",7.89],["weirder",8.08],["than",8.5],["you",8.74],["think",8.92]]},{"s":9.78,"e":11.76,"text":"Let's explain it in simple words.","words":[["lets",9.78],["explain",10.08],["it",10.62],["in",10.77],["simple",10.92],["words",11.38]]},{"s":12.31,"e":13.63,"text":"Here's the big idea.","words":[["heres",12.31],["the",12.75],["big",13.02],["idea",13.28]]},{"s":14.18,"e":16.76,"text":"Everything with mass pulls on everything else.","words":[["everything",14.18],["with",14.84],["mass",15.11],["pulls",15.37],["on",15.7],["everything",15.83],["else",16.49]]},{"s":17.31,"e":18.56,"text":"The Earth pulls on you,","words":[["the",17.31],["earth",17.51],["pulls",17.86],["on",18.21],["you",18.35]]},{"s":18.86,"e":20.58,"text":"your phone pulls on your coffee,","words":[["your",18.86],["phone",19.12],["pulls",19.45],["on",19.79],["your",19.92],["coffee",20.18]]},{"s":20.88,"e":22.66,"text":"and you pull on the whole Earth too.","words":[["and",20.88],["you",21.07],["pull",21.26],["on",21.52],["the",21.64],["whole",21.84],["earth",22.15],["too",22.47]]},{"s":23.21,"e":27.59,"text":"Isaac Newton wrote this down in 1687.","words":[["isaac",23.21],["newton",23.94],["wrote",24.82],["this",25.55],["down",26.13],["in",26.72],["1687",27.01]]},{"s":28.14,"e":29.68,"text":"His rule has two parts.","words":[["his",28.14],["rule",28.4],["has",28.74],["two",29.0],["parts",29.25]]},{"s":30.23,"e":32.06,"text":"More mass means a stronger pull,","words":[["more",30.23],["mass",30.51],["means",30.79],["a",31.15],["stronger",31.22],["pull",31.78]]},{"s":32.36,"e":34.46,"text":"and more distance means a weaker one.","words":[["and",32.36],["more",32.57],["distance",32.85],["means",33.41],["a",33.76],["weaker",33.83],["one",34.25]]},{"s":35.01,"e":36.24,"text":"Double the distance,","words":[["double",35.01],["the",35.44],["distance",35.66]]},{"s":36.54,"e":38.75,"text":"and the pull drops to just one quarter.","words":[["and",36.54],["the",36.75],["pull",36.97],["drops",37.25],["to",37.61],["just",37.75],["one",38.03],["quarter",38.25]]},{"s":39.3,"e":40.5,"text":"The Earth is huge,","words":[["the",39.3],["earth",39.55],["is",39.98],["huge",40.16]]},{"s":40.8,"e":43.1,"text":"about six trillion trillion kilograms,","words":[["about",40.8],["six",41.15],["trillion",41.36],["trillion",41.91],["kilograms",42.47]]},{"s":43.4,"e":45.29,"text":"so its pull on you wins easily.","words":[["so",43.4],["its",43.55],["pull",43.79],["on",44.1],["you",44.26],["wins",44.5],["easily",44.81]]},{"s":45.84,"e":47.8,"text":"That pull is what you feel as weight.","words":[["that",45.84],["pull",46.11],["is",46.38],["what",46.51],["you",46.78],["feel",46.99],["as",47.26],["weight",47.39]]},{"s":48.35,"e":50.52,"text":"On the Moon, which has much less mass,","words":[["on",48.35],["the",48.5],["moon",48.72],["which",49.02],["has",49.4],["much",49.62],["less",49.92],["mass",50.22]]},{"s":50.82,"e":52.79,"text":"you'd weigh about one sixth as much.","words":[["youd",50.82],["weigh",51.1],["about",51.45],["one",51.81],["sixth",52.02],["as",52.37],["much",52.51]]},{"s":53.34,"e":54.7,"text":"So, back to the spin.","words":[["so",53.34],["back",53.52],["to",53.88],["the",54.06],["spin",54.34]]},{"s":55.25,"e":57.34,"text":"At the equator, you really are moving","words":[["at",55.25],["the",55.39],["equator",55.6],["you",56.08],["really",56.29],["are",56.71],["moving",56.92]]},{"s":57.64,"e":59.6,"text":"at about a thousand miles an hour.","words":[["at",57.64],["about",57.78],["a",58.15],["thousand",58.22],["miles",58.8],["an",59.17],["hour",59.31]]},{"s":60.15,"e":62.19,"text":"Spinning does try to fling you outward,","words":[["spinning",60.15],["does",60.66],["try",60.91],["to",61.11],["fling",61.23],["you",61.55],["outward",61.74]]},{"s":62.49,"e":64.56,"text":"like water off a spinning bike wheel.","words":[["like",62.49],["water",62.76],["off",63.11],["a",63.31],["spinning",63.38],["bike",63.94],["wheel",64.21]]},{"s":65.11,"e":68.36,"text":"But Earth's gravity is about three hundred times stronger","words":[["but",65.11],["earths",65.31],["gravity",65.72],["is",66.19],["about",66.33],["three",66.67],["hundred",67.01],["times",67.48],["stronger",67.82]]},{"s":68.66,"e":69.59,"text":"than that fling.","words":[["than",68.66],["that",68.95],["fling",69.24]]},{"s":70.14,"e":72.29,"text":"So you stay put, held to the ground.","words":[["so",70.14],["you",70.3],["stay",70.54],["put",70.86],["held",71.1],["to",71.42],["the",71.58],["ground",71.82]]},{"s":72.84,"e":74.14,"text":"For you to float away,","words":[["for",72.84],["you",73.07],["to",73.3],["float",73.45],["away",73.84]]},{"s":74.44,"e":77.63,"text":"Earth would have to spin about seventeen times faster.","words":[["earth",74.44],["would",74.8],["have",75.15],["to",75.44],["spin",75.58],["about",75.86],["seventeen",76.21],["times",76.85],["faster",77.21]]},{"s":78.18,"e":79.49,"text":"A whole day would last","words":[["a",78.18],["whole",78.25],["day",78.62],["would",78.83],["last",79.2]]},{"s":79.79,"e":81.42,"text":"less than an hour and a half.","words":[["less",79.79],["than",80.08],["an",80.38],["hour",80.53],["and",80.83],["a",81.05],["half",81.12]]},{"s":81.97,"e":83.59,"text":"And you don't feel the spin at all,","words":[["and",81.97],["you",82.16],["dont",82.34],["feel",82.59],["the",82.84],["spin",83.03],["at",83.28],["all",83.4]]},{"s":83.89,"e":85.67,"text":"because the ground, the air and you","words":[["because",83.89],["the",84.33],["ground",84.53],["the",84.91],["air",85.1],["and",85.29],["you",85.48]]},{"s":85.97,"e":87.63,"text":"all move together, smoothly,","words":[["all",85.97],["move",86.19],["together",86.48],["smoothly",87.05]]},{"s":87.93,"e":90.01,"text":"like passengers on a calm plane.","words":[["like",87.93],["passengers",88.25],["on",89.05],["a",89.21],["calm",89.29],["plane",89.61]]},{"s":90.56,"e":92.12,"text":"Now here's the wild part.","words":[["now",90.56],["heres",90.81],["the",91.22],["wild",91.46],["part",91.79]]},{"s":92.67,"e":94.44,"text":"The Moon is falling toward us,","words":[["the",92.67],["moon",92.89],["is",93.18],["falling",93.33],["toward",93.85],["us",94.29]]},{"s":94.74,"e":96.57,"text":"right now, and it never stops.","words":[["right",94.74],["now",95.14],["and",95.37],["it",95.61],["never",95.77],["stops",96.17]]},{"s":97.12,"e":99.27,"text":"Newton pictured a cannon on a mountain.","words":[["newton",97.12],["pictured",97.52],["a",98.06],["cannon",98.13],["on",98.53],["a",98.67],["mountain",98.74]]},{"s":99.82,"e":101.41,"text":"Fire a cannonball slowly,","words":[["fire",99.82],["a",100.13],["cannonball",100.2],["slowly",100.96]]},{"s":101.71,"e":103.67,"text":"and it curves down and hits the ground.","words":[["and",101.71],["it",101.9],["curves",102.02],["down",102.4],["and",102.66],["hits",102.85],["the",103.1],["ground",103.29]]},{"s":104.22,"e":106.93,"text":"Fire it faster, and it lands farther away.","words":[["fire",104.22],["it",104.55],["faster",104.71],["and",105.2],["it",105.45],["lands",105.61],["farther",106.02],["away",106.6]]},{"s":107.48,"e":108.73,"text":"Fire it fast enough,","words":[["fire",107.48],["it",107.79],["fast",107.95],["enough",108.26]]},{"s":109.03,"e":110.92,"text":"and the ground curves away beneath it","words":[["and",109.03],["the",109.21],["ground",109.39],["curves",109.76],["away",110.12],["beneath",110.37],["it",110.79]]},{"s":111.22,"e":112.65,"text":"as fast as it falls.","words":[["as",111.22],["fast",111.41],["as",111.79],["it",111.98],["falls",112.17]]},{"s":113.2,"e":115.09,"text":"It keeps falling, and keeps missing.","words":[["it",113.2],["keeps",113.33],["falling",113.65],["and",114.11],["keeps",114.31],["missing",114.63]]},{"s":115.64,"e":116.65,"text":"That's an orbit.","words":[["thats",115.64],["an",116.06],["orbit",116.23]]},{"s":117.2,"e":118.87,"text":"The Moon does exactly this,","words":[["the",117.2],["moon",117.42],["does",117.73],["exactly",118.03],["this",118.56]]},{"s":119.17,"e":120.47,"text":"falling around the Earth","words":[["falling",119.17],["around",119.6],["the",119.97],["earth",120.16]]},{"s":120.77,"e":123.03,"text":"about once every twenty-seven days.","words":[["about",120.77],["once",121.16],["every",121.47],["twentyseven",121.86],["days",122.72]]},{"s":123.58,"e":125.25,"text":"The Moon pulls back on us, too.","words":[["the",123.58],["moon",123.8],["pulls",124.09],["back",124.45],["on",124.74],["us",124.89],["too",125.03]]},{"s":125.8,"e":127.77,"text":"Its gravity tugs on the oceans,","words":[["its",125.8],["gravity",126.04],["tugs",126.59],["on",126.91],["the",127.06],["oceans",127.3]]},{"s":128.07,"e":129.54,"text":"making a bulge of water","words":[["making",128.07],["a",128.54],["bulge",128.61],["of",129.0],["water",129.15]]},{"s":129.84,"e":131.43,"text":"on the side facing the Moon,","words":[["on",129.84],["the",129.98],["side",130.2],["facing",130.49],["the",130.93],["moon",131.14]]},{"s":131.73,"e":133.37,"text":"and another on the far side.","words":[["and",131.73],["another",131.96],["on",132.48],["the",132.62],["far",132.85],["side",133.07]]},{"s":133.92,"e":135.82,"text":"As Earth turns through those bulges,","words":[["as",133.92],["earth",134.04],["turns",134.36],["through",134.68],["those",135.12],["bulges",135.44]]},{"s":136.12,"e":138.45,"text":"most beaches get two high tides a day.","words":[["most",136.12],["beaches",136.43],["get",136.98],["two",137.21],["high",137.44],["tides",137.75],["a",138.14],["day",138.21]]},{"s":139.0,"e":140.09,"text":"And astronauts?","words":[["and",139.0],["astronauts",139.25]]},{"s":140.64,"e":141.87,"text":"On the space station,","words":[["on",140.64],["the",140.78],["space",141.0],["station",141.36]]},{"s":142.17,"e":144.16,"text":"about two hundred fifty miles up,","words":[["about",142.17],["two",142.54],["hundred",142.76],["fifty",143.27],["miles",143.64],["up",144.01]]},{"s":144.46,"e":147.06,"text":"gravity is still about ninety percent as strong.","words":[["gravity",144.46],["is",144.92],["still",145.05],["about",145.37],["ninety",145.7],["percent",146.09],["as",146.54],["strong",146.67]]},{"s":147.61,"e":149.4,"text":"They float because they're falling,","words":[["they",147.61],["float",147.86],["because",148.17],["theyre",148.6],["falling",148.97]]},{"s":149.7,"e":151.12,"text":"just like that cannonball,","words":[["just",149.7],["like",149.96],["that",150.22],["cannonball",150.48]]},{"s":151.42,"e":154.87,"text":"racing sideways at seventeen thousand miles an hour.","words":[["racing",151.42],["sideways",151.89],["at",152.52],["seventeen",152.68],["thousand",153.38],["miles",154.01],["an",154.4],["hour",154.56]]},{"s":155.42,"e":156.9,"text":"They circle the whole Earth","words":[["they",155.42],["circle",155.68],["the",156.06],["whole",156.26],["earth",156.58]]},{"s":157.2,"e":158.5,"text":"every ninety minutes.","words":[["every",157.2],["ninety",157.56],["minutes",157.99]]},{"s":159.05,"e":160.92,"text":"Here's the strangest fact of all.","words":[["heres",159.05],["the",159.41],["strangest",159.62],["fact",160.27],["of",160.56],["all",160.7]]},{"s":161.47,"e":164.32,"text":"Gravity is by far the weakest force in nature.","words":[["gravity",161.47],["is",162.01],["by",162.16],["far",162.32],["the",162.55],["weakest",162.78],["force",163.32],["in",163.7],["nature",163.86]]},{"s":164.87,"e":166.23,"text":"A tiny fridge magnet","words":[["a",164.87],["tiny",164.95],["fridge",165.27],["magnet",165.75]]},{"s":166.53,"e":167.85,"text":"can lift a paperclip","words":[["can",166.53],["lift",166.76],["a",167.08],["paperclip",167.15]]},{"s":168.15,"e":170.23,"text":"against the pull of the entire planet.","words":[["against",168.15],["the",168.62],["pull",168.82],["of",169.09],["the",169.23],["entire",169.43],["planet",169.83]]},{"s":170.78,"e":172.12,"text":"Gravity only wins","words":[["gravity",170.78],["only",171.41],["wins",171.77]]},{"s":172.42,"e":174.85,"text":"because it adds up, and never switches off.","words":[["because",172.42],["it",172.92],["adds",173.07],["up",173.35],["and",173.5],["never",173.71],["switches",174.07],["off",174.64]]},{"s":175.4,"e":176.87,"text":"So the next time you jump,","words":[["so",175.4],["the",175.55],["next",175.77],["time",176.06],["you",176.36],["jump",176.58]]},{"s":177.17,"e":177.85,"text":"remember,","words":[["remember",177.17]]},{"s":178.15,"e":180.15,"text":"you pull the whole Earth up toward you,","words":[["you",178.15],["pull",178.34],["the",178.6],["whole",178.79],["earth",179.12],["up",179.44],["toward",179.57],["you",179.96]]},{"s":180.45,"e":181.91,"text":"just a tiny, tiny bit.","words":[["just",180.45],["a",180.82],["tiny",180.91],["tiny",181.27],["bit",181.64]]},{"s":182.46,"e":183.33,"text":"Next time:","words":[["next",182.46],["time",182.9]]},{"s":183.63,"e":186.01,"text":"what would happen if all the insects disappeared?","words":[["what",183.63],["would",183.86],["happen",184.15],["if",184.5],["all",184.62],["the",184.79],["insects",184.96],["disappeared",185.37]]}];
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
    const vs = g.v.map((v) => { let p = rotY(v, ry); if (rx) p = rotX(p, rx); if (o.rz) p = rotZ(p, o.rz); return [c[0] + p[0] * r * sx, c[1] + p[1] * r * sy, c[2] + p[2] * r]; });
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
    const tris = [], moon = kind === 'moon', beach = kind === 'beach';
    const hf = moon ? moonH : beach ? beachH : valleyH;
    const CELL = moon ? 4 : 4.4, X0 = -110, X1 = 130, Z0 = -20, Z1 = 230;
    const nx = Math.round((X1 - X0) / CELL), nzc = Math.round((Z1 - Z0) / CELL);
    const jr = H.rng(moon ? 15 : 5), V = [];
    for (let j = 0; j <= nzc; j++) { const row = []; for (let i = 0; i <= nx; i++) { const x = X0 + i * CELL + (i > 0 && i < nx ? jr.range(-0.38, 0.38) * CELL : 0), z = Z0 + j * CELL + (j > 0 && j < nzc ? jr.range(-0.38, 0.38) * CELL : 0); row.push([x, hf(x, z), z]); } V.push(row); }
    const tc = (y, slope) => {
      if (moon) { const g = H.clamp(0.55 + y * 0.04 + NZ.n2(y, slope * 9) * 0.08); return H.mix([96, 92, 112], [196, 192, 206], g); }
      let c;
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
        if (!moon && !beach && Math.max(f[0][1], f[1][1], f[2][1]) < WATER) { tris.push({ p: f.map((p) => [p[0], WATER + NZ.n2(p[0] * 0.4, p[2] * 0.4) * 0.35, p[2]]), col: [96, 120, 190], water: true }); continue; }
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
        if (NZ.fbm2(x * 0.05 + 40, z * 0.05, 2) < -0.05) continue;
        const s = tr.range(1.5, 2.4), g = H.mix([40, 110, 90], [70, 140, 100], tr()), rot = tr() * 6;
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

  // ================= scenes =================
  const SC = [], SFX = [];
  const fx = (t, kind, o = {}) => SFX.push([t, kind, o]);
  const TRD = { facet: 0.7, whip: 0.45, cut: 0, build: 0, none: 0 };
  function scene(i0, i1, tr, draw) { const s = SC.length ? PE(i0 - 1) + 0.03 : 0; SC.push({ i0, i1, s, tr, draw }); }
  let BUILD = null; // set per frame for 'build' scenes: facets flip in from the camera out
  const pnt = (ctx, C, o = {}) => paint(ctx, C, Object.assign({ build: BUILD }, o));
  const tagT = (t, t0, out = 1e9) => bk(t, t0) * (1 - ph(t, out, out + 0.25));
  const LAND = (i, w, n) => P(i, w, n) - 0.12; // visuals lead the word by 0.12 s
  const fmt = (v) => Math.round(v).toLocaleString('en-US');
  const PERSON = [14, 3.2, 40];
  function valley(ctx, C, push, o = {}) {
    skyDusk(ctx, C, o.hz ?? 0.62, o.seed ?? 77);
    if (o.clouds) { cloud(ctx, 260 + o.clouds * 8, 250, 80, 0.85, 1); cloud(ctx, 1040 - o.clouds * 5, 140, 70, 0.75, 2); }
    pushTerrain(o.kind || 'valley');
    if (push) push();
    pnt(ctx, C, o);
  }
  // simple 2D faceted clock dial
  function clockDial(ctx, x, y, r, hours, k = 1) {
    if (k <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    for (let i = 0; i < 12; i++) {
      const a0 = i / 12 * Math.PI * 2, a1 = (i + 1) / 12 * Math.PI * 2;
      ctx.fillStyle = H.rgba(H.mix([255, 246, 240], [210, 196, 236], 0.5 + 0.5 * Math.sin(a0 + 0.8)));
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a0) * r, Math.sin(a0) * r); ctx.lineTo(Math.cos(a1) * r, Math.sin(a1) * r); ctx.closePath(); ctx.fill(); ctx.strokeStyle = ctx.fillStyle; ctx.stroke();
    }
    ctx.strokeStyle = '#2a1f4f'; ctx.lineWidth = 6; ctx.beginPath(); for (let i = 0; i <= 12; i++) { const a = i / 12 * Math.PI * 2; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.stroke();
    for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; ctx.fillStyle = INK; ctx.fillRect(Math.cos(a) * r * 0.82 - 4, Math.sin(a) * r * 0.82 - 4, 8, 8); }
    const ha = hours / 12 * Math.PI * 2 - Math.PI / 2, ma = hours * Math.PI * 2 - Math.PI / 2;
    const hand = (a, L, w, col) => { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(Math.cos(a + 1.57) * w, Math.sin(a + 1.57) * w); ctx.lineTo(Math.cos(a) * L, Math.sin(a) * L); ctx.lineTo(Math.cos(a - 1.57) * w, Math.sin(a - 1.57) * w); ctx.closePath(); ctx.fill(); };
    hand(ma, r * 0.8, 6, '#2a1f4f'); hand(ha, r * 0.55, 9, '#ff7060');
    ctx.fillStyle = '#2a1f4f'; ctx.beginPath(); ctx.arc(0, 0, 9, 0, 7); ctx.fill();
    ctx.restore();
  }
  // spinning-Earth (axis toward camera) with a person on the rim: S0, S12, S15
  function spinEarth(ctx, t, spin, o = {}) {
    skySpace(ctx, t, o.seed || 5, [1100, 110]);
    const C = look(o.cp || [0, 3, -40], o.at || [0, 3, 0], 760);
    sphere([0, 0, 0], 12, 3, earthCol, { rz: -spin, rx: 0, soft: true });
    const lift = o.lift || 0;
    person([0, 12 + lift, 0], 2.1, [255, 112, 96], { arms: o.arms || 0, ry: 0.5 });
    pnt(ctx, C, { fogN: 400, fogF: 900 });
    halo(ctx, C, [0, 0, 0], 12);
    return C;
  }

  // ---------------- INTRO ----------------
  scene(0, 1, 'none', (c, t) => {
    const spin = t * 0.35;
    const lift = 1.6 * Math.sin(Math.PI * ph(t, LAND(1, 'fly'), LAND(1, 'fly') + 1.4));
    const C = spinEarth(c, t, spin, { cp: [0, H.lerp(10, 7, io(t, 0, 4)), H.lerp(-46, -36, io(t, 0, 4))], at: [0, 7, 0], lift, arms: lift > 0 ? 0.8 : 0 });
    const top = scr(C, [0, 12, 0]);
    // spin ribbon along the rim
    const rr = (a) => scr(C, [Math.sin(a) * 13.6, Math.cos(a) * 13.6, 0]);
    lpArrow(c, rr(-0.9), rr(0), rr(0.9), up(t, LAND(0, 'spin'), 0.6), WHITE, 12);
    const v = 1000 * E.out(ph(t, LAND(0, 'thousand'), LAND(0, 'hour') + 0.2));
    bigTag(c, top[0] + 300, top[1] + 40, fmt(v) + ' mph', tagT(t, LAND(0, 'thousand')), { px: 72 });
    darkTag(c, top[0] + 300, top[1] + 125, 'every single day', tagT(t, LAND(0, 'every')), { font: SG(36), h: 64 });
    coralTag(c, top[0] - 280, top[1] - 30, 'fly off?', tagT(t, LAND(1, 'fly')), { font: SG(52), h: 86 });
  });
  fx(LAND(0, 'spin'), 'gust', { d: 1.2 }); fx(LAND(0, 'thousand'), 'count', { d: P(0, 'hour') + 0.3 - P(0, 'thousand'), f: 3000 }); fx(LAND(0, 'hour') + 0.2, 'facet', { f: 600 }); fx(LAND(0, 'every'), 'facet', { f: 470, minor: true });
  fx(LAND(1, 'fly'), 'riser', { d: 0.7 }); fx(LAND(1, 'fly') + 0.05, 'facet', { f: 420 });

  scene(2, 4, 'build', (c, t) => {
    const s = PE(1) + 0.03;
    const C = flight([[s, 0, 44, -30, 0, 30, 60], [s + 3, -4, 22, 0, -2, 14, 60], [PE(4) + 1, -6, 18, 14, -2, 14, 80]], t);
    valley(c, C, null);
    const k = tagT(t, LAND(2, 'gravity'));
    bigTag(c, 640, 250, 'GRAVITY', k, { px: 110, h: 150 });
    coralTag(c, 640, 360, 'weirder than you think', tagT(t, LAND(3, 'weirder'), PS(4) - 0.1), { font: SG(40), h: 70 });
    darkTag(c, 640, 360, 'explained in simple words', tagT(t, LAND(4, 'simple')), { font: SG(40), h: 70 });
  });
  fx(LAND(2, 'gravity'), 'big'); fx(LAND(3, 'weirder'), 'facet', { f: 520 }); fx(LAND(4, 'simple'), 'facet', { f: 470 }); fx(PE(1) + 0.03, 'build');

  // ---------------- 1 · THE BIG IDEA ----------------
  const BODIES = [[-9, 1, 4, 2.6, 11], [9, -1, 6, 3.4, 12], [-2, 7, 14, 1.8, 13], [4, -7, 2, 1.5, 14]];
  scene(5, 6, 'facet', (c, t) => {
    skySpace(c, t, 21, [140, 120]);
    const C = look([0, 2, H.lerp(-30, -25, io(t, PS(5), PE(6)))], [0, 0, 6], 760);
    const n = t > LAND(6, 'everything', 2) ? 4 : 2;
    BODIES.slice(0, n).forEach(([x, y, z, r, sd], i) => { const k = i < 2 ? 1 : E.back(ph(t, LAND(6, 'everything', 2), LAND(6, 'everything', 2) + 0.4)); if (k > 0.01) sphere([x, y + Math.sin(t + i) * 0.3, z], r * k * 1.25, 1, H.mix([190, 184, 214], [240, 180, 150], i / 3), { jitter: 0.35, seed: sd, ry: t * 0.3 + i }); });
    pnt(c, C, { fogN: 400, fogF: 900 });
    const S = BODIES.map(([x, y, z], i) => scr(C, [x, y + Math.sin(t + i) * 0.3, z]));
    if (t > LAND(6, 'mass')) { darkTag(c, S[0][0], S[0][1] - 110, 'mass', tagT(t, LAND(6, 'mass'))); darkTag(c, S[1][0], S[1][1] - 130, 'mass', tagT(t, LAND(6, 'mass') + 0.1)); }
    const pr = up(t, LAND(6, 'pulls'), 0.5);
    const pair = (a, b, w) => { const d = [b[0] - a[0], b[1] - a[1]], L = Math.hypot(...d); const ua = [a[0] + d[0] / L * 90, a[1] + d[1] / L * 90], ub = [b[0] - d[0] / L * 100, b[1] - d[1] / L * 100], m = [(ua[0] + ub[0]) / 2, (ua[1] + ub[1]) / 2]; lpArrow(c, m, m, ua, pr, CORALA, w); lpArrow(c, m, m, ub, pr, CORALA, w); };
    pair(S[0], S[1], 12);
    if (n > 2) { const p2 = up(t, LAND(6, 'else'), 0.5); if (p2 > 0) { c.save(); c.globalAlpha = p2; pair(S[2], S[0], 8); pair(S[2], S[1], 8); pair(S[3], S[0], 8); pair(S[3], S[1], 8); c.restore(); } }
    lpTag(c, 640, 640, 'everything pulls on everything', { k: tagT(t, LAND(6, 'else')), font: SG(40), h: 70 });
  });
  fx(LAND(6, 'mass'), 'facet', { f: 520 }); fx(LAND(6, 'pulls'), 'ribbon'); fx(LAND(6, 'everything', 2), 'pop'); fx(LAND(6, 'else'), 'glass', { n: ['D4', 'A4', 'D5'] });

  scene(7, 7, 'cut', (c, t) => {
    const C = flight([[PE(6), 22, 9, 26, 14, 5.5, 40], [PE(7) + 0.5, 20, 7.5, 30, 14, 5.5, 40]], t);
    valley(c, C, () => person(PERSON, 1.3, [255, 112, 96], { ry: -0.5 }));
    const head = scr(C, [14, 6.4, 40]), feet = scr(C, [14, 2.2, 40]);
    arrow(c, [head[0] + 70, head[1] - 20], [feet[0] + 70, feet[1] + 60], up(t, LAND(7, 'pulls'), 0.45), CORALA, 16, 0.08);
    darkTag(c, head[0] + 250, head[1] + 40, 'Earth pulls you', tagT(t, LAND(7, 'earth')), { font: SG(36), h: 64 });
  });
  fx(LAND(7, 'earth'), 'facet', { f: 470 }); fx(LAND(7, 'pulls'), 'ribbon', { down: 1 });

  scene(8, 8, 'whip', (c, t) => {
    const C = look([H.lerp(4, 6, ph(t, PS(8), PE(8))), 6.4, 32], [14, 4.4, 40], 900);
    valley(c, C, () => {
      box(9, 3.2, 37, 19, 4.0, 43, [196, 140, 110]); // table top
      for (const [x, z] of [[9.6, 37.6], [18.4, 37.6], [9.6, 42.4], [18.4, 42.4]]) box(x - 0.3, 0, z - 0.3, x + 0.3, 3.2, z + 0.3, [150, 100, 80]);
      box(10.5, 4.0, 39, 13.2, 4.25, 41, [60, 56, 90]); // phone
      box(10.7, 4.25, 39.2, 13.0, 4.27, 40.8, [120, 200, 230], { emissive: true });
      prism(16, 4.0, 40, 1.0, 1.9, 8, [255, 246, 240], 0.2); prism(16, 5.7, 40, 0.86, 0.12, 8, [120, 70, 50], 0.2, { emissive: false }); // mug + coffee
      tube([17, 5.2, 40], [17.6, 4.6, 40], 0.18, 5, [255, 246, 240]);
    }, { fogN: 60 });
    const a = scr(C, [12.4, 4.6, 40]), b = scr(C, [15.6, 5.0, 40]);
    const pr = up(t, LAND(8, 'pulls'), 0.4);
    lpArrow(c, [a[0] + 30, a[1] - 60], [(a[0] + b[0]) / 2, a[1] - 110], [b[0] - 30, b[1] - 70], pr, GOLD, 9);
    lpArrow(c, [b[0] - 30, b[1] - 70], [(a[0] + b[0]) / 2, a[1] - 110], [a[0] + 30, a[1] - 60], pr, GOLD, 9);
    darkTag(c, a[0] - 40, a[1] + 110, 'phone', tagT(t, LAND(8, 'phone'))); darkTag(c, b[0] + 40, b[1] + 120, 'coffee', tagT(t, LAND(8, 'coffee')));
    lpTag(c, (a[0] + b[0]) / 2, a[1] - 180, 'a teeny tiny pull', { k: tagT(t, LAND(8, 'pulls') + 0.2) });
  });
  fx(LAND(8, 'phone'), 'facet', { f: 560, minor: true }); fx(LAND(8, 'pulls'), 'ribbon'); fx(LAND(8, 'coffee'), 'facet', { f: 470, minor: true });

  scene(9, 9, 'cut', (c, t) => {
    skySpace(c, t, 33, [1120, 140]);
    const C = look([0, 4, -46], [0, 3, 0], 760);
    earth([0, -4, 0], 9, t * 0.2);
    person([0, 5, 0], 2.4, [255, 112, 96], { ry: 0.4 });
    pnt(c, C, { fogN: 400, fogF: 900 }); halo(c, C, [0, -4, 0], 9);
    const head = scr(C, [0, 10.6, 0]), ec = scr(C, [0, -4, 0]);
    arrow(c, [head[0] + 90, head[1] - 10], [head[0] + 90, head[1] + 120], up(t, PS(9), 0.4), CORALA, 14, 0.05);
    arrow(c, [ec[0] - 90, ec[1] + 40], [ec[0] - 90, ec[1] - 70], up(t, LAND(9, 'pull'), 0.4), TEAL, 14, -0.05);
    darkTag(c, head[0] + 260, head[1] + 60, 'Earth pulls you', tagT(t, PS(9)));
    coralTag(c, ec[0] - 320, ec[1] - 20, 'you pull Earth too', tagT(t, LAND(9, 'whole')), { font: SG(36), h: 64 });
  });
  fx(PS(9), 'facet', { f: 470, minor: true }); fx(LAND(9, 'pull'), 'ribbon'); fx(LAND(9, 'whole'), 'facet', { f: 620 });

  scene(10, 11, 'facet', (c, t) => {
    const s = PE(9) + 0.03;
    const C = flight([[s, -10, 14, 48, -22, 7, 70], [PE(11) + 0.4, -14, 11, 56, -22, 7, 70]], t);
    valley(c, C, () => {
      prism(-22, 4.5, 70, 2.2, 3.4, 6, [150, 140, 180], 0.2); // lectern
      box(-26, 7.9, 67.5, -18, 9.1, 72.5, [255, 112, 96]); // book cover
      box(-25.6, 9.1, 67.8, -18.4, 9.5, 72.2, [255, 240, 220]); // pages
      box(-26, 9.5, 67.5, -18, 9.8, 72.5, [230, 96, 84]);
    });
    const b = scr(C, [-22, 10, 70]);
    darkTag(c, 300, 150, 'Isaac Newton', tagT(t, LAND(10, 'newton')), { font: SG(40), h: 70 });
    bigTag(c, 300, 265, '1687', tagT(t, LAND(10, '1687')), { px: 84 });
    const k2 = tagT(t, LAND(11, 'two'));
    lpTag(c, b[0] - 260, b[1] + 190, '1  mass', { k: k2, bg: '#ff7060', col: '#fff', font: SG(40), h: 70 });
    lpTag(c, b[0] + 260, b[1] + 190, '2  distance', { k: tagT(t, LAND(11, 'two') + 0.25), bg: '#ff7060', col: '#fff', font: SG(40), h: 70 });
  });
  fx(LAND(10, 'newton'), 'facet', { f: 470 }); fx(LAND(10, '1687'), 'stampg'); fx(LAND(11, 'two'), 'facet', { f: 560 }); fx(LAND(11, 'two') + 0.25, 'facet', { f: 620 });

  scene(12, 13, 'cut', (c, t) => {
    skySpace(c, t, 44, null);
    const C = look([0, 2, -40], [0, 0, 0], 760);
    const grow = io(t, LAND(12, 'mass'), LAND(12, 'stronger'));
    const apart = io(t, LAND(13, 'distance'), LAND(13, 'weaker'));
    const rB = H.lerp(2.2, 4.6, grow), sep = H.lerp(14, 26, apart);
    sphere([-sep / 2, 0, 0], 2.2, 1, [190, 184, 214], { jitter: 0.3, seed: 3, ry: t * 0.3 });
    sphere([sep / 2, 0, 0], rB, 2, [240, 180, 150], { jitter: 0.25, seed: 4, ry: -t * 0.25 });
    pnt(c, C, { fogN: 400, fogF: 900 });
    const a = scr(C, [-sep / 2, 0, 0]), b = scr(C, [sep / 2, 0, 0]);
    const w = H.lerp(10, 26, grow) * H.lerp(1, 0.4, apart);
    const ra = pxs(C, [-sep / 2, 0, 0], 2.2) + 20, rb = pxs(C, [sep / 2, 0, 0], rB) + 20, m = [(a[0] + b[0]) / 2, a[1]];
    const pr = up(t, PS(12), 0.4);
    lpArrow(c, m, m, [a[0] + ra, a[1]], pr, CORALA, w); lpArrow(c, m, m, [b[0] - rb, b[1]], pr, CORALA, w);
    lpTag(c, 640, 150, 'more mass  →  stronger pull', { k: tagT(t, LAND(12, 'stronger'), LAND(13, 'distance')), bg: '#ff7060', col: '#fff', font: SG(44), h: 76 });
    lpTag(c, 640, 150, 'more distance  →  weaker pull', { k: tagT(t, LAND(13, 'weaker')), bg: '#2a1f4f', col: '#fff', font: SG(44), h: 76 });
    darkTag(c, b[0], b[1] + rb + 40, 'more mass', tagT(t, LAND(12, 'mass'), LAND(13, 'distance')));
    if (t > LAND(13, 'distance')) { arrow(c, [a[0], a[1] + 150], [b[0], b[1] + 150], up(t, LAND(13, 'distance'), 0.5), WHITE, 8, 0); darkTag(c, m[0], a[1] + 210, 'distance', tagT(t, LAND(13, 'distance'))); }
  });
  fx(PS(12), 'ribbon'); fx(LAND(12, 'mass'), 'grow', { d: P(12, 'stronger') - P(12, 'mass') }); fx(LAND(12, 'stronger'), 'facet', { f: 560 });
  fx(LAND(13, 'distance'), 'gust', { d: 0.9 }); fx(LAND(13, 'weaker'), 'facet', { f: 470 });

  const IS = [[1, 100], [2, 25], [3, 11]];
  scene(14, 15, 'whip', (c, t) => {
    const s = PE(13) + 0.03;
    const C = flight([[s, -22, 19, 33, -22, 7, 72], [PE(15) + 0.6, -21, 18, 36, -22, 7, 72]], t);
    valley(c, C, () => IS.forEach(([d, v], i) => {
      const g = i === 0 ? 1 : up(t, i === 1 ? LAND(15, 'quarter') : LAND(15, 'quarter') + 0.5, 0.5);
      if (g > 0) prism(-38 + i * 16, 4.5, 72, 2, v * 0.12 * g + 0.1, 6, i === 1 ? [255, 120, 100] : H.mix([150, 170, 250], [110, 225, 190], i / 2), 0.3);
    }));
    IS.forEach(([d, v], i) => {
      const g = i === 0 ? 1 : up(t, i === 1 ? LAND(15, 'quarter') : LAND(15, 'quarter') + 0.5, 0.5);
      const p = scr(C, [-38 + i * 16, 4.5 + v * 0.12 * g + 1.6, 72]), base = scr(C, [-38 + i * 16, 4.5, 72]);
      darkTag(c, base[0], base[1] + 50, d + '× distance', i === 0 ? tagT(t, PS(14)) : i === 1 ? tagT(t, LAND(14, 'double')) : tagT(t, LAND(15, 'quarter') + 0.5));
      if (g > 0.05) lpTag(c, p[0], p[1] - 40, i === 0 ? '1' : i === 1 ? '1/4' : '1/9', { k: g, font: SG(i === 1 ? 72 : 44), h: i === 1 ? 104 : 72, bg: i === 1 ? '#ff7060' : '#fff6f0', col: i === 1 ? '#fff' : INK });
    });
    lpTag(c, 640, 110, 'pull', { k: tagT(t, PS(14)), bg: '#2a1f4f', col: '#fff' });
  });
  fx(LAND(14, 'double'), 'facet', { f: 520 }); fx(LAND(15, 'quarter'), 'pillar'); fx(LAND(15, 'quarter') + 0.5, 'pillar', { minor: true });

  scene(16, 18, 'facet', (c, t) => {
    skySpace(c, t, 55, [1140, 100]);
    const C = look([H.lerp(-8, 0, io(t, PS(16), PE(18))), 4, H.lerp(-60, -50, io(t, PS(16), PE(18)))], [4, 0, 0], 760);
    earth([17, -2, 0], 14, t * 0.15);
    pnt(c, C, { fogN: 400, fogF: 900 }); halo(c, C, [17, -2, 0], 14);
    bigTag(c, 330, 250, '6 trillion trillion', tagT(t, LAND(17, 'six')), { px: 56 });
    darkTag(c, 330, 340, 'kilograms', tagT(t, LAND(17, 'kilograms')), { font: SG(40), h: 70 });
    lpTag(c, 330, 430, '6,000,000,000,000,000,000,000,000 kg', { k: tagT(t, LAND(17, 'kilograms') + 0.3), font: SG(28) });
    coralTag(c, 330, 560, 'its pull wins', tagT(t, LAND(18, 'wins')), { font: SG(48), h: 82 });
    darkTag(c, 950, 120, 'Earth is huge', tagT(t, LAND(16, 'huge')));
  });
  fx(LAND(16, 'huge'), 'facet', { f: 470 }); fx(LAND(17, 'six'), 'big'); fx(LAND(17, 'kilograms'), 'facet', { f: 560 }); fx(LAND(17, 'kilograms') + 0.3, 'typing'); fx(LAND(18, 'wins'), 'right');

  function scale(x, y, z) { box(x - 1.6, y, z - 1.4, x + 1.6, y + 0.45, z + 1.4, [236, 230, 244]); box(x - 0.7, y + 0.45, z - 1.25, x + 0.7, y + 0.47, z - 0.7, [80, 210, 200], { emissive: true }); }
  scene(19, 19, 'cut', (c, t) => {
    const C = flight([[PE(18), 25, 8.5, 28, 14, 5, 40], [PE(19) + 0.4, 23, 8, 30, 14, 5, 40]], t);
    valley(c, C, () => { scale(14, 3.2, 40); person([14, 3.65, 40], 1.3, [255, 112, 96], { ry: -0.5 }); });
    const p = scr(C, [14, 3.6, 39]);
    bigTag(c, p[0] + 300, p[1] - 120, '100 lb', tagT(t, LAND(19, 'weight')), { px: 72 });
    darkTag(c, p[0] + 300, p[1] - 30, 'weight = the pull', tagT(t, LAND(19, 'weight') + 0.15));
    arrow(c, [p[0] + 140, p[1] - 220], [p[0] + 140, p[1] + 20], up(t, PS(19), 0.4), CORALA, 14, 0.04);
  });
  fx(PS(19), 'ribbon', { down: 1 }); fx(LAND(19, 'weight'), 'stampg');

  scene(20, 21, 'facet', (c, t) => {
    const s = PE(19) + 0.03;
    const C = flight([[s, 28, 10, 22, 14, 5, 42], [PE(21) + 0.5, 25, 8, 28, 14, 5, 42]], t);
    skySpace(c, t, 66, null);
    { const sp = scr(C, [-50, 46, 200]); if (sp[2] > 0) { TR = []; earth([-50, 46, 200], 18, t * 0.1, { lvl: 2 }); pnt(c, C, { fogN: 900, fogF: 2000 }); halo(c, C, [-50, 46, 200], 18); } }
    pushTerrain('moon'); scale(14, 1.2, 40); person([14, 1.65, 40], 1.3, [255, 112, 96], { ry: -0.5 });
    pnt(c, C, { fogN: 60, fogF: 300, fogC: [40, 36, 70] });
    const p = scr(C, [14, 1.6, 39]);
    const lb = H.lerp(100, 17, io(t, LAND(21, 'one'), LAND(21, 'sixth') + 0.3));
    bigTag(c, p[0] + 300, p[1] - 130, fmt(lb) + ' lb', tagT(t, LAND(20, 'moon')), { px: 72 });
    coralTag(c, p[0] + 300, p[1] - 30, 'about 1/6', tagT(t, LAND(21, 'sixth')), { font: SG(52), h: 86 });
    darkTag(c, 360, 120, 'on the Moon', tagT(t, LAND(20, 'moon')), { font: SG(40), h: 70 });
    darkTag(c, 360, 200, 'less mass', tagT(t, LAND(20, 'less')));
  });
  fx(LAND(20, 'moon'), 'facet', { f: 470 }); fx(LAND(20, 'less'), 'facet', { f: 560, minor: true }); fx(LAND(21, 'one'), 'count', { d: P(21, 'sixth') + 0.3 - P(21, 'one'), f: 2600, down: 1 }); fx(LAND(21, 'sixth'), 'glass', { n: ['A4', 'E5'] });

  // ---------------- 2 · WHY YOU STAY PUT ----------------
  scene(22, 24, 'facet', (c, t) => {
    const C = spinEarth(c, t, t * 0.35, { cp: [0, 6, -48], at: [0, 4, 0], seed: 9 });
    const top = scr(C, [0, 12, 0]);
    const rr = (a) => scr(C, [Math.sin(a) * 13.4, Math.cos(a) * 13.4, 0]);
    // equator ring
    if (t > LAND(23, 'equator')) { c.save(); c.globalAlpha = up(t, LAND(23, 'equator'), 0.4); lpArrow(c, rr(-1.6), rr(0), rr(1.6), up(t, LAND(23, 'equator'), 0.7), GOLD, 10); c.restore(); }
    darkTag(c, top[0] - 300, top[1] + 60, 'the equator', tagT(t, LAND(23, 'equator')), { font: SG(38), h: 66 });
    const v = 1000 * E.out(ph(t, LAND(24, 'about'), LAND(24, 'hour') + 0.2));
    bigTag(c, top[0] + 300, top[1] + 40, fmt(v) + ' mph', tagT(t, LAND(24, 'about')), { px: 72 });
    lpTag(c, top[0] + 300, top[1] + 125, '≈ 1,670 km/h', { k: tagT(t, LAND(24, 'hour')) });
  });
  fx(LAND(23, 'equator'), 'ribbon'); fx(LAND(24, 'about'), 'facet', { f: 520 }); fx(LAND(24, 'about'), 'count', { d: P(24, 'hour') - P(24, 'about') + 0.2, f: 3000 }); fx(LAND(24, 'hour') + 0.2, 'facet', { f: 620 });

  scene(25, 26, 'whip', (c, t) => {
    skyDusk(c, null, 1.0, 88); cloud(c, 260 + t * 4, 560, 90, 0.7, 4); cloud(c, 1000 - t * 3, 600, 80, 0.6, 5);
    const C = look([0, 0, -26], [0, 0, 0], 760);
    const ang = t * 3.2, R = 7;
    for (let i = 0; i < 24; i++) { const a0 = ang + i / 24 * Math.PI * 2, a1 = ang + (i + 1) / 24 * Math.PI * 2; tube([Math.cos(a0) * R, Math.sin(a0) * R, 0], [Math.cos(a1) * R, Math.sin(a1) * R, 0], 0.55, 5, [60, 56, 90]); }
    for (let i = 0; i < 12; i++) { const a = ang + i / 12 * Math.PI * 2; tube([0, 0, 0], [Math.cos(a) * R * 0.94, Math.sin(a) * R * 0.94, 0], 0.08, 4, [210, 206, 222]); }
    tube([0, 0, -0.8], [0, 0, 0.8], 0.7, 8, [255, 112, 96]);
    // droplets fling off along the tangent
    const t0 = LAND(25, 'fling'), dr = H.rng(71);
    for (let k = 0; k < 70; k++) {
      const rel = dr.range(0, 3.5), ph0 = dr() * 6.283, tk = t0 - 0.6 + rel;
      if (t < tk) continue;
      const age = t - tk; if (age > 1.6) continue;
      const a = ang - (t - tk) * 3.2 + ph0 * 0 + (k / 40) * 6.283 - (t - tk) * 0; // release angle at tk
      const ra = 3.2 * tk + k / 70 * 6.283;
      const p0 = [Math.cos(ra) * (R + 0.6), Math.sin(ra) * (R + 0.6), 0], tg = [-Math.sin(ra), Math.cos(ra), 0];
      const v = 3.2 * R * 0.9;
      sphere([p0[0] + tg[0] * v * age, p0[1] + tg[1] * v * age - 3 * age * age, -0.3], 0.6 * (1 - age / 2.2), 0, [120, 190, 240], { ry: k });
      void a; void ph0;
    }
    pnt(c, C, { fogN: 400, fogF: 900 });
    coralTag(c, 1000, 150, 'fling!', tagT(t, LAND(25, 'fling')), { font: SG(52), h: 86 });
    darkTag(c, 1000, 240, 'spin pushes outward', tagT(t, LAND(25, 'outward')));
    lpTag(c, 260, 640, 'water off a bike wheel', { k: tagT(t, LAND(26, 'water')), font: SG(36), h: 64 });
  });
  fx(PE(24) + 0.03, 'whir', { d: PE(26) - PE(24) }); fx(LAND(25, 'fling'), 'splash'); fx(LAND(25, 'outward'), 'facet', { f: 470, minor: true }); fx(LAND(26, 'water'), 'facet', { f: 560 });

  scene(27, 29, 'cut', (c, t) => {
    const s = PE(26) + 0.03;
    const C = flight([[s, -22, 26, 36, -22, 11, 72], [PE(29) + 0.5, -21, 24, 40, -22, 10, 72]], t);
    const g = up(t, LAND(27, 'gravity'), 1.1), f2 = up(t, PS(28), 0.4);
    valley(c, C, () => {
      prism(-27, 4.5, 72, 2.4, 0.1 + 16 * g, 6, [255, 120, 100], 0.3);
      prism(-17, 4.5, 73, 2.4, 0.1 + 0.055 * f2, 6, [150, 170, 250], 0.3);
      if (t > PS(29)) person([-22, 4.5, 66], 1.1, [255, 246, 240], { ry: 0.2 });
    });
    const ta = scr(C, [-27, 4.5 + 16 * g + 1.5, 72]), tb = scr(C, [-17, 6, 73]), ba = scr(C, [-27, 4.5, 72]), bb = scr(C, [-17, 4.5, 73]);
    darkTag(c, ba[0] - 30, ba[1] + 50, 'gravity', tagT(t, LAND(27, 'gravity')));
    darkTag(c, bb[0] + 40, bb[1] + 50, 'fling', tagT(t, PS(28)));
    bigTag(c, 1000, 190, '300×', tagT(t, LAND(27, 'three')), { px: 88, bg: '#ff7060', col: '#fff' });
    lpTag(c, 1000, 290, 'stronger', { k: tagT(t, LAND(27, 'stronger')), font: SG(40), h: 70 });
    coralTag(c, 640, 640, 'you stay put  ✓', tagT(t, LAND(29, 'stay')), { font: SG(48), h: 82, bg: '#3ccf9a' });
  });
  fx(LAND(27, 'gravity'), 'pillar'); fx(LAND(27, 'three'), 'big'); fx(PS(28), 'pillar', { minor: true }); fx(LAND(29, 'stay'), 'right');

  scene(30, 33, 'facet', (c, t) => {
    const k17 = io(t, LAND(31, 'seventeen'), LAND(31, 'faster') + 0.3);
    // spin angle = integral of a speed that ramps 1x -> 17x
    const t0 = PE(29), t1 = LAND(31, 'seventeen'), t2 = LAND(31, 'faster') + 0.3, w0 = 0.35;
    const ang = w0 * (t - t0) + (t > t1 ? w0 * 16 * (Math.min(t, t2) - t1) * 0.5 + (t > t2 ? w0 * 16 * (t - t2) : 0) : 0);
    const lift = 3.2 * E.out(ph(t, LAND(30, 'float'), LAND(30, 'away') + 0.6)) * (t < PS(32) ? 1 : 1 - E.inOut(ph(t, PS(32), PS(32) + 0.6)));
    const C = spinEarth(c, t, ang, { cp: [-18, 6, -50], at: [-17, 3, 0], seed: 12, lift, arms: lift > 0.2 ? 1 : 0 });
    const top = scr(C, [0, 12 + lift, 0]);
    coralTag(c, top[0] - 220, top[1] - 40, 'float away?', tagT(t, LAND(30, 'float'), PS(32)), { font: SG(44), h: 76 });
    bigTag(c, 1030, 150, '17× faster', tagT(t, LAND(31, 'seventeen')), { px: 64 });
    const dk = tagT(t, LAND(32, 'day'));
    clockDial(c, 1060, 420, 115, H.lerp(24, 1.4, io(t, LAND(33, 'less'), LAND(33, 'half') + 0.2)) % 12 + 0.001, dk);
    darkTag(c, 1060, 262, '1 day', tagT(t, LAND(32, 'day')), { font: SG(34) });
    lpTag(c, 1060, 612, '< 1.5 hours', { k: tagT(t, LAND(33, 'hour')), bg: '#ff7060', col: '#fff', font: SG(52), h: 86 });
    lpTag(c, 1060, 612, '24 hours', { k: tagT(t, LAND(32, 'day'), LAND(33, 'hour') - 0.25), font: SG(44), h: 76 });
  });
  fx(LAND(30, 'float'), 'riser', { d: 0.8 }); fx(LAND(31, 'seventeen'), 'big'); fx(LAND(31, 'seventeen'), 'whir', { d: PE(33) - P(31, 'seventeen'), fast: 1 }); fx(LAND(32, 'day'), 'facet', { f: 520 }); fx(LAND(33, 'less'), 'clock', { d: P(33, 'half') + 0.2 - P(33, 'less') }); fx(LAND(33, 'hour'), 'stampg');

  function plane(c0, s, bank = 0) {
    const tf = (p) => add3(c0, rotX(scl(p, s), bank));
    tube(tf([-6, 0, 0]), tf([5, 0, 0]), 0.95 * s, 8, [244, 240, 250], { tf: null });
    tube(tf([5, 0, 0]), tf([7, -0.15, 0]), 0.95 * s, 8, [244, 240, 250], { r1: 0.15 * s });
    tube(tf([-6, 0, 0]), tf([-8, 0.5, 0]), 0.95 * s, 8, [244, 240, 250], { r1: 0.2 * s });
    box(-1.5, -0.35, -7, 1.2, -0.1, 7, [255, 112, 96], { tf, twoSided: true });
    box(-8, 0.3, -2.4, -6.6, 0.45, 2.4, [255, 112, 96], { tf });
    box(-8, 0.4, -0.12, -6.5, 3.2, 0.12, [255, 112, 96], { tf });
    for (let i = 0; i < 8; i++) box(-4 + i * 1.1, 0.25, -0.96, -3.5 + i * 1.1, 0.6, 0.96, [60, 56, 120], { tf });
  }
  scene(34, 37, 'cut', (c, t) => {
    skyDusk(c, null, 1.0, 99);
    const dx = (t - PE(33)) * 60;
    for (let i = 0; i < 6; i++) cloud(c, ((i * 300 - dx * (0.6 + (i % 2) * 0.4)) % 1700 + 1700) % 1700 - 200, 560 + (i % 3) * 40, 90 + (i % 2) * 30, 0.9, 20 + i);
    const C = look([-3, 2.5, -21], [0, 0.3, 0], 760);
    plane([0, Math.sin(t * 1.2) * 0.25, 0], 1, Math.sin(t * 0.7) * 0.04);
    pnt(c, C, { fogN: 400, fogF: 900 });
    darkTag(c, 640, 110, "you don't feel the spin", tagT(t, LAND(34, 'feel'), PS(35) - 0.1), { font: SG(40), h: 70 });
    const words = [['ground', 330], ['air', 640], ['you', 950]];
    words.forEach(([w, x], i) => lpTag(c, x, 120, w, { k: tagT(t, LAND(35, w)), bg: i === 2 ? '#ff7060' : '#fff6f0', col: i === 2 ? '#fff' : INK, font: SG(40), h: 70 }));
    if (t > LAND(36, 'together')) { const pr = up(t, LAND(36, 'together'), 0.6); words.forEach(([w, x]) => arrow(c, [x - 90, 200], [x + 90, 200], pr, WHITE, 10, 0)); }
    lpTag(c, 640, 270, 'all moving together', { k: tagT(t, LAND(36, 'together')), bg: '#2a1f4f', col: '#fff' });
    coralTag(c, 640, 620, 'like a calm plane ride', tagT(t, LAND(37, 'calm')), { font: SG(40), h: 70 });
  });
  fx(PE(33) + 0.03, 'air', { d: PE(37) - PE(33) }); fx(LAND(34, 'feel'), 'facet', { f: 470 });
  ['ground', 'air', 'you'].forEach((w, i) => fx(LAND(35, w), 'facet', { f: 470 + i * 60, minor: true })); fx(LAND(36, 'together'), 'ribbon'); fx(LAND(37, 'calm'), 'glass', { n: ['D4', 'F#4', 'A4'] });

  // ---------------- 3 · THE MOON IS FALLING ----------------
  scene(38, 40, 'facet', (c, t) => {
    skySpace(c, t, 101, [160, 110]);
    const C = look([H.lerp(-10, -4, io(t, PS(38), PE(40))), 3, -40], [6, 0, 0], 760);
    moon([-12, 3, -4], 6.5, t * 0.1);
    earth([30, -5, 24], 10, t * 0.2, { lvl: 3 });
    pnt(c, C, { fogN: 400, fogF: 900 }); halo(c, C, [30, -5, 24], 10);
    const m = scr(C, [-12, 3, -4]), e = scr(C, [30, -5, 24]);
    lpArrow(c, [m[0] + 190, m[1]], [(m[0] + e[0]) / 2, m[1] - 40], [e[0] - 120, e[1]], up(t, LAND(39, 'falling'), 0.7), CORALA, 16);
    darkTag(c, m[0], m[1] + 230, 'the Moon', tagT(t, LAND(39, 'moon')), { font: SG(38), h: 66 });
    coralTag(c, (m[0] + e[0]) / 2 + 40, m[1] - 110, 'falling', tagT(t, LAND(39, 'falling')), { font: SG(52), h: 86 });
    lpTag(c, (m[0] + e[0]) / 2 + 40, m[1] - 20, 'nonstop', { k: tagT(t, LAND(40, 'never')) });
  });
  fx(LAND(38, 'wild'), 'facet', { f: 470 }); fx(LAND(39, 'moon'), 'glass', { n: ['F#4', 'A4'] }); fx(LAND(39, 'falling'), 'ribbon'); fx(LAND(39, 'falling') + 0.05, 'facet', { f: 620 }); fx(LAND(40, 'never'), 'facet', { f: 520, minor: true });

  // Newton's cannon: real paths around a point mass (planet centre at y = -20, launch radius 24.7, v = k * circular speed)
  const PC = [0, -20, 0], LR = 24.7;
  const PATHS = [0.42, 0.62, 1.0].map((k) => {
    let x = 1.8, y = LR, vx = k * 1.0, vy = 0; const GM = LR, pts = [[x, y]], dt = 0.05;
    for (let i = 0; i < 6000; i++) {
      const r = Math.hypot(x, y), a = -GM / (r * r * r); vx += a * x * dt; vy += a * y * dt; x += vx * dt; y += vy * dt;
      if (i % 4 === 0) pts.push([x, y]);
      if (r < 20.3) break;
      if (k === 1 && i > 50 && Math.atan2(x, y) < 0 && Math.atan2(x, y) > -0.08) break;
    }
    return pts;
  });
  const pathPt = (k, u) => { const P2 = PATHS[k], f = u * (P2.length - 1), i = Math.min(P2.length - 2, Math.floor(f)), r = f - i; return [H.lerp(P2[i][0], P2[i + 1][0], r), H.lerp(P2[i][1], P2[i + 1][1], r) + PC[1], 0]; };
  function cannonWorld(t) {
    earth(PC, 20, 0.6, { lvl: 3, rx: -1.35 });
    cone([0, -0.9, 0], 4.2, 5.4, 7, [118, 110, 128], 0.2); cone([0, 2.6, 0], 1.7, 2.1, 7, [244, 238, 248], 0.4);
    tube([-0.6, 4.55, 0], [1.9, 4.75, 0], 0.42, 8, [70, 64, 96]); box(-0.9, 4.1, -0.6, 0.6, 4.5, 0.6, [150, 100, 80]);
    person([-2.2, 3.6, -1.2], 0.55, [255, 112, 96], { ry: 1.2 });
  }
  // shot k fired at time tf over duration d; draws trail + ball, returns impact time
  function shot(c, C, t, k, tf, d) {
    if (t < tf) return;
    const u = Math.min(1, (t - tf) / d), trail = [];
    for (let i = 0; i <= 40; i++) trail.push(scr(C, pathPt(k, u * i / 40)));
    c.save(); c.strokeStyle = 'rgba(255,246,240,0.85)'; c.lineWidth = 4; c.setLineDash([10, 9]); c.beginPath(); trail.forEach((p, i) => i ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])); c.stroke(); c.restore();
    const b = trail[trail.length - 1];
    if (u < 1 || k === 2) { c.fillStyle = INK; c.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; c.lineTo(b[0] + Math.cos(a) * 11, b[1] + Math.sin(a) * 11); } c.fill(); c.fillStyle = 'rgba(255,255,255,0.35)'; c.beginPath(); c.moveTo(b[0], b[1]); c.lineTo(b[0] + 11, b[1]); c.lineTo(b[0] + 5, b[1] - 9); c.lineTo(b[0] - 5, b[1] - 9); c.fill(); }
    else { const pk = ph(t, tf + d, tf + d + 0.6); if (pk < 1) { c.save(); c.globalAlpha = 1 - pk; c.fillStyle = '#fff6f0'; for (let i = 0; i < 7; i++) { const a = i / 7 * 6.283, r = 10 + 40 * pk; c.beginPath(); c.moveTo(b[0], b[1]); c.lineTo(b[0] + Math.cos(a) * r, b[1] + Math.sin(a) * r); c.lineTo(b[0] + Math.cos(a + 0.5) * r * 0.6, b[1] + Math.sin(a + 0.5) * r * 0.6); c.fill(); } c.restore(); } }
  }
  const FIRE = [LAND(42, 'cannonball'), LAND(44, 'fire'), LAND(45, 'fire')];
  scene(41, 44, 'cut', (c, t) => {
    const s = PE(40) + 0.03;
    const C = flight([[s, 4, 6, -22, 4, 3, 0], [FIRE[1], 6, 6, -30, 6, 1, 0], [PE(44) + 0.5, 8, 6, -40, 8, -2, 0]], t);
    skySpace(c, t, 111, [1150, 90]);
    cannonWorld(t); pnt(c, C, { fogN: 400, fogF: 900 }); halo(c, C, PC, 20);
    shot(c, C, t, 0, FIRE[0], 0.8); shot(c, C, t, 1, FIRE[1], 1.3);
    const m = scr(C, [0, 5.6, 0]);
    darkTag(c, m[0] - 40, m[1] - 120, 'a cannon on a mountain', tagT(t, LAND(41, 'cannon'), FIRE[1] - 0.3), { font: SG(36), h: 64 });
    lpTag(c, 330, 600, 'slow → lands close', { k: tagT(t, LAND(42, 'slowly'), FIRE[1] - 0.2) });
    lpTag(c, 940, 600, 'faster → lands farther', { k: tagT(t, LAND(44, 'faster')), bg: '#ff7060', col: '#fff' });
  });
  fx(LAND(41, 'cannon'), 'facet', { f: 470 }); fx(FIRE[0], 'boom'); fx(FIRE[0] + 0.8, 'thud', { g: 0.5 }); fx(FIRE[1], 'boom'); fx(FIRE[1] + 1.3, 'thud', { g: 0.5 }); fx(LAND(42, 'slowly'), 'facet', { f: 520, minor: true }); fx(LAND(44, 'faster'), 'facet', { f: 620 });

  scene(45, 49, 'cut', (c, t) => {
    const s = PE(44) + 0.03;
    const C = flight([[s, 8, 6, -40, 8, -2, 0], [FIRE[2] + 1.2, 6, 10, -95, 0, -14, 0], [PE(49) + 0.5, 0, 12, -100, 0, -18, 0]], t);
    skySpace(c, t, 121, [1150, 90]);
    cannonWorld(t); pnt(c, C, { fogN: 400, fogF: 900 }); halo(c, C, PC, 20);
    shot(c, C, t, 1, FIRE[1] - 20, 1.3);
    shot(c, C, t, 2, FIRE[2], P(49, 'orbit') - FIRE[2] + 0.2);
    const top = scr(C, [0, 26, 0]);
    lpTag(c, 640, 110, 'fast enough…', { k: tagT(t, LAND(45, 'enough'), PS(48) - 0.1), bg: '#2a1f4f', col: '#fff', font: SG(40), h: 70 });
    lpTag(c, 980, 330, 'ground curves away', { k: tagT(t, LAND(46, 'curves'), PS(49)) });
    coralTag(c, 330, 330, 'keeps falling', tagT(t, LAND(48, 'falling'), PS(49)), { font: SG(40), h: 70 });
    darkTag(c, 330, 420, '…keeps missing', tagT(t, LAND(48, 'missing'), PS(49)), { font: SG(40), h: 70 });
    bigTag(c, 1010, 610, 'ORBIT', tagT(t, LAND(49, 'orbit')), { px: 96, bg: '#ff7060', col: '#fff' });
    void top;
  });
  fx(FIRE[2], 'boom', { g: 1.2 }); fx(FIRE[2] + 0.2, 'gust', { d: P(49, 'orbit') - FIRE[2] }); fx(LAND(46, 'curves'), 'facet', { f: 520, minor: true }); fx(LAND(48, 'falling'), 'facet', { f: 560 }); fx(LAND(48, 'missing'), 'facet', { f: 470 }); fx(LAND(49, 'orbit'), 'big');

  scene(50, 52, 'facet', (c, t) => {
    skySpace(c, t, 131, [1180, 90]);
    const s = PE(49) + 0.03;
    const C = look([0, 26, -50], [0, -3, 0], 760);
    earth([0, 0, 0], 8, t * 0.6, { lvl: 3 });
    const u = io(t, LAND(51, 'falling'), LAND(52, 'days') + 0.6), a = -1.2 + u * Math.PI * 2;
    const MR = 25;
    moon([Math.cos(a) * MR, 0, Math.sin(a) * MR], 3, t * 0.1);
    pnt(c, C, { fogN: 400, fogF: 900 }); halo(c, C, [0, 0, 0], 8);
    const ring = []; for (let i = 0; i <= 64; i++) { const q = -1.2 + i / 64 * Math.PI * 2 * Math.max(0.02, u); ring.push(scr(C, [Math.cos(q) * MR, 0, Math.sin(q) * MR])); }
    c.save(); c.strokeStyle = 'rgba(255,246,240,0.8)'; c.lineWidth = 4; c.setLineDash([12, 10]); c.beginPath(); ring.forEach((p, i) => i ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])); c.stroke(); c.restore();
    const mp = scr(C, [Math.cos(a) * MR, 4, Math.sin(a) * MR]);
    darkTag(c, mp[0], mp[1] - 50, 'Moon', tagT(t, s + 0.1), { font: SG(32) });
    const days = Math.round(27 * io(t, LAND(52, 'once'), LAND(52, 'days') + 0.6));
    bigTag(c, 1050, 230, days + ' days', tagT(t, LAND(52, 'once')), { px: 72 });
    lpTag(c, 1050, 140, 'one lap', { k: tagT(t, LAND(52, 'once')), bg: '#2a1f4f', col: '#fff' });
    coralTag(c, 300, 600, 'same trick', tagT(t, LAND(50, 'exactly')), { font: SG(44), h: 76 });
  });
  fx(LAND(50, 'exactly'), 'facet', { f: 520 }); fx(LAND(51, 'falling'), 'gust', { d: P(52, 'days') + 0.6 - P(51, 'falling') }); fx(LAND(52, 'once'), 'count', { d: P(52, 'days') + 0.6 - P(52, 'once'), f: 2800, n: 27 }); fx(LAND(52, 'days') + 0.6, 'glass', { n: ['D4', 'A4', 'D5'] });

  // ---------------- 4 · TIDES & ASTRONAUTS ----------------
  scene(53, 57, 'facet', (c, t) => {
    skySpace(c, t, 141, null);
    const C = look([-6, 26, -46], [6, 0, 0], 760);
    const bulge = io(t, LAND(55, 'bulge'), LAND(57, 'far') + 0.6);
    earth([0, 0, 0], 9, t * 0.15, { lvl: 3 });
    sphere([0, 0, 0], 9.3, 2, [70, 120, 220], { sx: 1 + 0.42 * bulge, sy: 1 - 0.08 * bulge, alpha: 0.5, water: false, soft: true, noBuild: false });
    moon([34, 0, 6], 3.4, t * 0.1);
    pnt(c, C, { fogN: 400, fogF: 900 }); halo(c, C, [0, 0, 0], 9.4);
    const mp = scr(C, [34, 0, 6]), near = scr(C, [13.5, 0, 0]), far = scr(C, [-13.5, 0, 0]);
    lpArrow(c, [mp[0] - 70, mp[1]], [(mp[0] + near[0]) / 2, mp[1] - 30], [near[0] + 30, near[1]], up(t, LAND(54, 'tugs'), 0.6), CORALA, 14);
    darkTag(c, mp[0], mp[1] + 90, 'Moon', tagT(t, PS(53)));
    lpTag(c, (mp[0] + near[0]) / 2, mp[1] - 90, 'tug', { k: tagT(t, LAND(54, 'tugs')), bg: '#ff7060', col: '#fff' });
    lpTag(c, near[0] + 40, near[1] + 130, 'bulge', { k: tagT(t, LAND(56, 'facing')), font: SG(40), h: 70 });
    lpTag(c, far[0] - 30, far[1] + 130, 'far-side bulge', { k: tagT(t, LAND(57, 'far')), font: SG(40), h: 70 });
    darkTag(c, 640, 110, 'oceans', tagT(t, LAND(54, 'oceans')), { font: SG(40), h: 70 });
  });
  fx(LAND(54, 'tugs'), 'ribbon'); fx(LAND(54, 'oceans'), 'facet', { f: 470 }); fx(LAND(55, 'bulge'), 'swell', { d: P(57, 'far') + 0.6 - P(55, 'bulge') }); fx(LAND(56, 'facing'), 'facet', { f: 560 }); fx(LAND(57, 'far'), 'facet', { f: 620 });

  scene(58, 59, 'whip', (c, t) => {
    const s = PE(57) + 0.03;
    const C = flight([[s, -2, 7, 12, 20, 0, 42], [PE(59) + 0.5, 1, 6.5, 16, 22, 0, 46]], t);
    const u = ph(t, LAND(58, 'turns'), PE(59) + 0.3), lvl = -1.2 + 2.6 * (0.5 - 0.5 * Math.cos(u * Math.PI * 4));
    skyDusk(c, C, 0.62, 151);
    pushTerrain('beach'); sea(lvl, t, -10, 120, 0, 200);
    for (const [x, z] of [[11, 36], [15, 44], [19, 52]]) { for (let j = 0; j < 5; j++) prism(x, -3 + j * 1.0, z, 0.45, 1.0, 6, j % 2 ? [255, 246, 240] : [255, 112, 96], 0.2); }
    pnt(c, C);
    const hi = Math.sin(u * Math.PI * 4 - Math.PI / 2) > 0.85;
    bigTag(c, 640, 600, '2 high tides a day', tagT(t, LAND(59, 'two')), { px: 60 });
    lpTag(c, 1040, 130, hi ? 'high tide' : 'low tide', { k: tagT(t, LAND(58, 'turns')), bg: hi ? '#ff7060' : '#2a1f4f', col: '#fff' });
    lpTag(c, 260, 130, 'Earth turns', { k: tagT(t, LAND(58, 'turns')) });
  });
  fx(LAND(58, 'turns'), 'waves', { d: PE(59) + 0.3 - P(58, 'turns') }); fx(LAND(59, 'two'), 'big');

  function iss(c0, s, ry = 0) {
    const tf = (p) => add3(c0, rotY(scl(p, s), ry));
    box(-7, -0.25, -0.25, 7, 0.25, 0.25, [210, 206, 222], { tf });
    tube(tf([-1.6, 0, -0.3]), tf([1.6, 0, -0.3]), 0.7 * s, 8, [244, 240, 250]);
    tube(tf([0, 0, -0.3]), tf([0, 0, -4]), 0.6 * s, 8, [236, 230, 244]);
    tube(tf([0, 0, -1.6]), tf([2.4, 0, -1.6]), 0.5 * s, 8, [236, 230, 244]);
    for (const x of [-6.2, -4.4, 4.4, 6.2]) for (const sz of [-1, 1]) { const z0 = sz * 0.5, z1 = sz * 3.6; tri(tf([x - 0.75, z0, 0]), tf([x + 0.75, z0, 0]), tf([x + 0.75, z1, 0]), [200, 140, 70], { twoSided: true }); tri(tf([x - 0.75, z0, 0]), tf([x + 0.75, z1, 0]), tf([x - 0.75, z1, 0]), [170, 110, 60], { twoSided: true }); }
  }
  scene(60, 63, 'facet', (c, t) => {
    skySpace(c, t, 161, [1150, 100]);
    const s = PE(59) + 0.03;
    const C = flight([[s, -4, 7, -20, 0, 2, 0], [PE(63) + 0.5, 3, 4, -23, 2, 0, 0]], t);
    sphere([0, -66, 20], 60, 3, earthCol, { ry: t * 0.03, rx: 1.35, soft: true });
    iss([0, 4, 0], 1.3, 0.5 + t * 0.05);
    pnt(c, C, { fogN: 400, fogF: 900 }); halo(c, C, [0, -66, 20], 60, '150,190,255', 0.45);
    const p = scr(C, [0, 4, 0]), g = scr(C, [0, -5.5, 0]);
    darkTag(c, p[0], p[1] - 150, 'space station', tagT(t, LAND(61, 'station')), { font: SG(38), h: 66 });
    if (t > LAND(62, 'two')) { arrow(c, [p[0] + 240, p[1]], [g[0] + 240, g[1] + 40], up(t, LAND(62, 'two'), 0.5), WHITE, 9, 0); arrow(c, [g[0] + 240, g[1] + 40], [p[0] + 240, p[1]], up(t, LAND(62, 'two'), 0.5), WHITE, 9, 0); }
    lpTag(c, p[0] + 420, (p[1] + g[1]) / 2, '250 miles up', { k: tagT(t, LAND(62, 'two')) });
    const pct = Math.round(90 * E.out(ph(t, LAND(63, 'gravity'), LAND(63, 'percent') + 0.2)));
    bigTag(c, 300, 560, pct + '%', tagT(t, LAND(63, 'gravity')), { px: 88, bg: '#ff7060', col: '#fff' });
    darkTag(c, 300, 450, 'gravity still', tagT(t, LAND(63, 'gravity')));
  });
  fx(LAND(60, 'astronauts'), 'facet', { f: 470 }); fx(LAND(61, 'station'), 'glass', { n: ['A4', 'E5'] }); fx(LAND(62, 'two'), 'ribbon'); fx(LAND(63, 'gravity'), 'facet', { f: 560 }); fx(LAND(63, 'gravity'), 'count', { d: P(63, 'percent') - P(63, 'gravity') + 0.2, f: 3000 }); fx(LAND(63, 'percent') + 0.2, 'stampg');

  scene(64, 68, 'cut', (c, t) => {
    skySpace(c, t, 171, [1150, 90]);
    const C = look([0, 12, -54], [0, -1, 0], 760);
    earth([0, 0, 0], 11, t * 0.25, { lvl: 3 });
    const lap = io(t, LAND(67, 'circle'), LAND(68, 'minutes') + 0.5), a = -0.35 + (t - PE(63)) * 0.06 + lap * Math.PI * 2, OR = 17;
    const ip = [Math.cos(a) * OR, 0, Math.sin(a) * OR];
    iss(ip, 0.55, -a);
    pnt(c, C, { fogN: 400, fogF: 900 }); halo(c, C, [0, 0, 0], 12);
    const ring = []; for (let i = 0; i <= 64; i++) { const q = i / 64 * 6.283; ring.push(scr(C, [Math.cos(q) * OR, 0, Math.sin(q) * OR])); }
    c.save(); c.strokeStyle = 'rgba(255,246,240,0.55)'; c.lineWidth = 3; c.setLineDash([10, 10]); c.beginPath(); ring.forEach((p, i) => i ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])); c.stroke(); c.restore();
    const sp = scr(C, ip), ctr = scr(C, [0, 0, 0]);
    const dn = [ctr[0] - sp[0], ctr[1] - sp[1]], L = Math.hypot(...dn), dd = [dn[0] / L, dn[1] / L];
    const tg = scr(C, [Math.cos(a + 0.25) * OR, 0, Math.sin(a + 0.25) * OR]);
    const pd = up(t, LAND(64, 'falling'), 0.5), ps = up(t, LAND(66, 'sideways'), 0.5);
    if (t < PS(67)) {
      lpArrow(c, [sp[0] + dd[0] * 40, sp[1] + dd[1] * 40], [sp[0] + dd[0] * 80, sp[1] + dd[1] * 80], [sp[0] + dd[0] * 130, sp[1] + dd[1] * 130], pd, CORALA, 12);
      const tv = [tg[0] - sp[0], tg[1] - sp[1]], tl = Math.hypot(...tv);
      lpArrow(c, [sp[0] + tv[0] / tl * 40, sp[1] + tv[1] / tl * 40], [sp[0] + tv[0] / tl * 100, sp[1] + tv[1] / tl * 100], [sp[0] + tv[0] / tl * 170, sp[1] + tv[1] / tl * 170], ps, GOLD, 12);
    }
    coralTag(c, 300, 140, 'falling', tagT(t, LAND(64, 'falling'), PS(67)), { font: SG(48), h: 82 });
    darkTag(c, 300, 230, 'like the cannonball', tagT(t, LAND(65, 'cannonball'), PS(67)));
    const mph = 17000 * E.out(ph(t, LAND(66, 'seventeen'), LAND(66, 'hour') + 0.2));
    bigTag(c, 980, 140, fmt(mph) + ' mph', tagT(t, LAND(66, 'seventeen')), { px: 64 });
    lpTag(c, 980, 225, 'sideways', { k: tagT(t, LAND(66, 'sideways')), bg: '#ffd27a' });
    bigTag(c, 640, 620, '1 lap = 90 min', tagT(t, LAND(68, 'ninety')), { px: 60, bg: '#ff7060', col: '#fff' });
  });
  fx(LAND(64, 'falling'), 'ribbon', { down: 1 }); fx(LAND(65, 'cannonball'), 'facet', { f: 470, minor: true }); fx(LAND(66, 'sideways'), 'ribbon'); fx(LAND(66, 'seventeen'), 'count', { d: P(66, 'hour') - P(66, 'seventeen') + 0.2, f: 3000 }); fx(LAND(66, 'hour') + 0.2, 'facet', { f: 620 }); fx(LAND(67, 'circle'), 'gust', { d: P(68, 'minutes') + 0.5 - P(67, 'circle') }); fx(LAND(68, 'ninety'), 'big');

  // ---------------- 5 · THE WEAKEST FORCE ----------------
  scene(69, 70, 'facet', (c, t) => {
    const s = PE(68) + 0.03;
    const C = flight([[s, -22, 26, 36, -22, 11, 72], [PE(70) + 0.5, -21, 24, 40, -22, 10, 72]], t);
    const g = up(t, LAND(70, 'weakest'), 0.9);
    valley(c, C, () => {
      prism(-27, 4.5, 72, 2.4, 0.1 + 17 * g, 6, [150, 124, 240], 0.3);
      prism(-17, 4.5, 73, 2.4, 0.18, 6, [255, 120, 100], 0.3);
    });
    const ba = scr(C, [-27, 4.5, 72]), bb = scr(C, [-17, 4.5, 73]);
    darkTag(c, ba[0] - 40, ba[1] + 50, 'electromagnetism', tagT(t, LAND(70, 'force')));
    coralTag(c, bb[0] + 60, bb[1] + 50, 'gravity', tagT(t, LAND(70, 'gravity')));
    bigTag(c, 640, 120, 'the weakest force', tagT(t, LAND(70, 'weakest')), { px: 60 });
  });
  fx(LAND(69, 'strangest'), 'facet', { f: 470 }); fx(LAND(70, 'gravity'), 'facet', { f: 560 }); fx(LAND(70, 'weakest'), 'big'); fx(LAND(70, 'force'), 'pillar');

  scene(71, 73, 'cut', (c, t) => {
    const C = flight([[PE(70), 26, 10, 22, 14, 7.5, 40], [PE(73) + 0.5, 25, 9.5, 25, 14, 7.5, 40]], t);
    const lift = E.inOut(ph(t, LAND(72, 'lift'), LAND(72, 'paperclip') + 0.5));
    valley(c, C, () => {
      // U magnet (opening down): coral body, silver tips
      const my = 9.6;
      box(11.4, my + 1.6, 39.4, 16.6, my + 2.6, 40.6, [255, 112, 96]);
      box(11.4, my, 39.4, 12.6, my + 1.6, 40.6, [255, 112, 96]); box(15.4, my, 39.4, 16.6, my + 1.6, 40.6, [255, 112, 96]);
      box(11.4, my - 1, 39.4, 12.6, my, 40.6, [220, 216, 232]); box(15.4, my - 1, 39.4, 16.6, my, 40.6, [220, 216, 232]);
      // paperclip: two nested loops in a vertical plane
      const y0 = H.lerp(3.4, my - 3.6, lift), cx = 14;
      const loop = (w, h, yb) => { const pts = [[cx - w, yb], [cx - w, yb + h], [cx + w, yb + h], [cx + w, yb + 0.3]]; for (let i = 0; i < 3; i++) tube([pts[i][0], pts[i][1], 40], [pts[i + 1][0], pts[i + 1][1], 40], 0.12, 5, [190, 196, 214]); };
      loop(0.55, 2.4, y0); loop(0.35, 1.8, y0 + 0.4);
    });
    const m = scr(C, [14, 10.8, 40]), pc = scr(C, [14, H.lerp(4.6, 7.2, lift), 40]);
    darkTag(c, 300, 150, 'fridge magnet', tagT(t, LAND(71, 'magnet')), { font: SG(36), h: 64 });
    arrow(c, [pc[0] + 150, pc[1] + 80], [pc[0] + 150, pc[1] - 60], up(t, LAND(72, 'lift'), 0.4), CORALA, 14, 0);
    arrow(c, [pc[0] - 150, pc[1] - 60], [pc[0] - 150, pc[1] + 90], up(t, LAND(73, 'planet'), 0.4), TEAL, 9, 0);
    lpTag(c, pc[0] - 330, pc[1] + 50, 'the whole planet', { k: tagT(t, LAND(73, 'entire')) });
    coralTag(c, 640, 640, 'magnet wins  ✓', tagT(t, LAND(73, 'planet') + 0.4), { font: SG(48), h: 82, bg: '#3ccf9a' });
  });
  fx(LAND(71, 'magnet'), 'facet', { f: 470 }); fx(LAND(72, 'lift'), 'clink'); fx(LAND(72, 'paperclip') + 0.5, 'clink', { g: 1.4 }); fx(LAND(73, 'entire'), 'facet', { f: 520, minor: true }); fx(LAND(73, 'planet') + 0.4, 'right');

  const ROCKS = (() => { const g = geo(1), r = H.rng(181); return g.v.map((d, i) => ({ d, from: [r.range(-40, 40), r.range(-24, 24), r.range(-10, 30)], s: r.range(0.9, 1.6), seed: i })); })();
  scene(74, 75, 'facet', (c, t) => {
    skySpace(c, t, 191, [150, 100]);
    const C = look([0, 3, -44], [0, 0, 0], 760);
    const u = io(t, LAND(75, 'adds'), LAND(75, 'up') + 0.9);
    ROCKS.forEach((q, i) => { const tgt = scl(q.d, 8.5), p = lerp3(q.from, tgt, E.inOut(cl(u * 1.3 - (i % 7) * 0.04))); sphere(p, q.s * H.lerp(1, 1.4, u), 0, H.mix([150, 146, 170], [210, 160, 140], (i % 5) / 4), { jitter: 0.4, seed: q.seed, ry: t * 0.4 + i }); });
    if (u > 0.85) sphere([0, 0, 0], 8.6, 2, (q, d) => moonCol(q, d), { soft: true, ry: t * 0.2, alpha: ph(u, 0.85, 1) });
    pnt(c, C, { fogN: 400, fogF: 900 });
    lpTag(c, 640, 110, 'gravity only wins…', { k: tagT(t, LAND(74, 'wins')), font: SG(44), h: 76 });
    coralTag(c, 330, 620, 'it adds up', tagT(t, LAND(75, 'adds')), { font: SG(48), h: 82 });
    darkTag(c, 950, 620, 'never switches off', tagT(t, LAND(75, 'never')), { font: SG(40), h: 70 });
  });
  fx(LAND(74, 'wins'), 'facet', { f: 470 }); fx(LAND(75, 'adds'), 'gather', { d: P(75, 'up') + 0.9 - P(75, 'adds') }); fx(LAND(75, 'never'), 'facet', { f: 560 });

  scene(76, 79, 'cut', (c, t) => {
    const C = flight([[PE(75), 24, 8, 26, 14, 5.5, 40], [PE(79) + 1.2, 26, 10, 20, 14, 5.5, 40]], t);
    const tj = LAND(76, 'jump'), jh = 4 * Math.max(0, Math.sin(Math.PI * ph(t, tj, tj + 1.0)));
    valley(c, C, () => person([14, 3.2 + jh, 40], 1.3, [255, 112, 96], { ry: -0.6, arms: jh > 0.2 ? 1 : 0 }));
    const f = scr(C, [14, 3.2, 40]);
    arrow(c, [f[0] - 170, f[1] + 130], [f[0] - 170, f[1] + 10], up(t, LAND(78, 'pull'), 0.5), TEAL, 12, 0);
    lpTag(c, 330, 520, 'Earth moves up too', { k: tagT(t, LAND(78, 'earth')), bg: '#2a1f4f', col: '#fff', font: SG(36), h: 64 });
    coralTag(c, 330, 610, 'a tiny, tiny bit', tagT(t, LAND(79, 'tiny')), { font: SG(36), h: 64 });
    bigTag(c, 640, 110, 'mass pulls on mass', tagT(t, LAND(79, 'bit') + 0.3), { px: 56 });
  });
  fx(LAND(76, 'jump'), 'jump'); fx(LAND(76, 'jump') + 1.0, 'thud', { g: 0.4 }); fx(LAND(78, 'earth'), 'facet', { f: 470 }); fx(LAND(78, 'pull'), 'ribbon'); fx(LAND(79, 'tiny'), 'facet', { f: 620, minor: true }); fx(LAND(79, 'bit') + 0.3, 'take');

  function bee(c0, s, t) {
    const tf = (p) => add3(c0, scl(p, s));
    sphere(tf([0, 0, 0]), 1.0 * s, 1, (q, d) => (Math.floor((d[0] + 1) * 2.6) % 2 ? [60, 46, 60] : [255, 200, 80]), { sx: 1.5, sy: 0.9, soft: true, ry: 0.2 });
    sphere(tf([1.6, 0.25, 0]), 0.55 * s, 0, [60, 46, 60], { soft: true });
    const fl = Math.sin(t * 40) * 0.6;
    for (const sz of [-1, 1]) { const root = tf([0, 0.7, sz * 0.3]); tri(root, tf([-0.8, 0.7 + 1.6 * Math.cos(fl), sz * (0.4 + 1.6 * Math.abs(Math.sin(fl + 1)))]), tf([0.9, 0.9 + 1.4 * Math.cos(fl), sz * (0.4 + 1.2 * Math.abs(Math.sin(fl + 1)))]), [236, 240, 255], { twoSided: true, emissive: true, alpha: 0.6 }); }
  }
  scene(80, 81, 'facet', (c, t) => {
    const s = PE(79) + 0.03;
    const C = flight([[s, 6, 7, 26, 14, 5.5, 40], [DURATION, 8, 6.5, 30, 14, 5.5, 40]], t);
    valley(c, C, () => {
      const fr = H.rng(201);
      for (let i = 0; i < 14; i++) { const x = 14 + fr.range(-6, 6), z = 40 + fr.range(-5, 5); tube([x, 3.1, z], [x, 4.4, z], 0.07, 4, [70, 140, 100]); sphere([x, 4.6, z], 0.35, 0, fr.pick([[255, 112, 96], [255, 210, 120], [236, 140, 200], [150, 124, 240]]), { ry: i }); }
      bee([14 + Math.sin(t * 1.3) * 1.2, 6.4 + Math.sin(t * 2.4) * 0.4, 38], 0.8, t);
    });
    darkTag(c, 640, 110, 'next time', tagT(t, LAND(80, 'next')), { font: SG(40), h: 70 });
    bigTag(c, 640, 610, 'What if insects vanished?', tagT(t, LAND(81, 'insects')), { px: 52, bg: '#ff7060', col: '#fff' });
  });
  fx(LAND(80, 'next'), 'facet', { f: 470 }); fx(LAND(81, 'insects'), 'big'); fx(LAND(81, 'insects') - 0.3, 'buzzbee', { d: DURATION - P(81, 'insects') });

  const CH = [[5, '1 · The big idea'], [22, '2 · Why you stay put'], [38, '3 · The Moon is falling'], [53, '4 · Tides & astronauts'], [69, '5 · The weakest force']];
  // ================= chapter header: the chapter title lands centre-stage, then shrinks into the corner (reference hook → header) =================
  function header(c, t) {
    for (let j = 0; j < CH.length; j++) {
      const i = CH[j][0], st = PS(i) - 0.15, en = j + 1 < CH.length ? PE(CH[j + 1][0] - 1) + 0.03 : PE(79) + 0.03;
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
        case 'build': for (let j = 0; j < 14; j++) facet(t + j * 0.07, 300 + j * 25, 0.3, (j / 13 - 0.5), true); break;
        case 'chapter': facet(t, 470, 1); glass(t + 0.05, 'D5', 0.7); break;
      }
    });
  }

  // ================= THUMBNAIL =================
  function thumbnail(ctx, Wd, Hd) {
    const t = 3;
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    skySpace(ctx, t, 5, [160, 110]);
    const C = look([-2, 7, -48], [14, 6, 0], 760);
    sphere([0, 0, 0], 12, 3, earthCol, { rz: -0.8, soft: true });
    person([0, 12, 0], 1.8, [255, 112, 96], { arms: 0, ry: 0.5 });
    paint(ctx, C, { fogN: 400, fogF: 900 }); halo(ctx, C, [0, 0, 0], 12);
    const p = scr(C, [0, 17, 0]);
    lpArrow(ctx, [p[0] + 150, p[1] - 150], [p[0] + 120, p[1] - 40], [p[0] + 40, p[1] + 20], 1, CORALA, 18);
    bigTag(ctx, 905, 250, 'GRAVITY', 1, { px: 104, h: 144 });
    bigTag(ctx, 905, 410, 'WINS', 1, { px: 104, h: 144, bg: '#ff7060', col: '#fff' });
    lpTag(ctx, 905, 545, '300× stronger than the spin', { k: 1, bg: '#2a1f4f', col: '#fff', font: SG(38), h: 68 });
    ctx.restore();
  }

  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s - 0.05 ? j : a), 0) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();
