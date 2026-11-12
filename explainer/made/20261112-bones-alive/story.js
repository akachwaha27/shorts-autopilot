// ================= Watercolor Brush, 16:9 1280x720: "Your Bones Explained: why your skeleton is alive" =================
// Long video (~3 min), 5 chapters + teaser, 32 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A naturalist's journal page that paints itself: every bone, cell and number is laid in stroke by stroke with the
// Lemo-Opuscar watercolor stroke engine (window.LEMO: mk / drawS / drawList / sprite, MIT), hand notes with pen
// leaders beside each specimen, brush-edge wipes, page turns for chapters and paper-mist erases. One accent: vermilion
// for blood and "alive". Fonts: Bodoni Moda italic (nearest serif to the style's Cormorant), Caveat notes, DM Mono labels.
(function () {
  const LM = window.LEMO;
  const { mk, drawS, drawList, qcurve, qctrl, polar, withSeed, rnd, sprite, edgeOf, ss, eio, eo, seg, clamp, lerp, mixc, rgba } = LM;
  const PAPER = '#f1e9da', INK = '#2b2520', INK2 = '#3d3129';
  const W = 1280, HH = 720;
  try { ['italic 500 40px "Bodoni Moda"', '600 40px "Bodoni Moda"', '700 40px "Caveat"', '500 20px "DM Mono"'].forEach((f) => document.fonts.load(f, 'AaZz09%·→≈')); } catch (e) { /* render anyway */ }

  // ---------- voiceover phrases (phrases.json, Kokoro af_heart, natural mode) ----------
  const PH = [{"s":0.25,"e":2.55,"text":"You were born with nearly three hundred bones.","words":[["you",0.25],["were",0.43],["born",0.67],["with",0.92],["nearly",1.16],["three",1.52],["hundred",1.83],["bones",2.25]]},{"s":3.02,"e":4.87,"text":"So where did almost a hundred of them go?","words":[["so",3.02],["where",3.13],["did",3.42],["almost",3.6],["a",3.94],["hundred",4.0],["of",4.41],["them",4.52],["go",4.75]]},{"s":5.39,"e":7.79,"text":"The answer is that your skeleton is alive,","words":[["the",5.39],["answer",5.6],["is",6.02],["that",6.16],["your",6.45],["skeleton",6.73],["is",7.29],["alive",7.43]]},{"s":8.26,"e":9.97,"text":"and it's rebuilding itself right now.","words":[["and",8.26],["its",8.43],["rebuilding",8.6],["itself",9.17],["right",9.52],["now",9.8]]},{"s":10.33,"e":12.79,"text":"Most of us picture bones as dry white sticks,","words":[["most",10.33],["of",10.61],["us",10.74],["picture",10.88],["bones",11.36],["as",11.7],["dry",11.84],["white",12.04],["sticks",12.38]]},{"s":12.87,"e":15.74,"text":"like the plastic skeleton in a science class.","words":[["like",12.87],["the",13.18],["plastic",13.42],["skeleton",13.96],["in",14.58],["a",14.73],["science",14.81],["class",15.35]]},{"s":16.13,"e":18.35,"text":"But the bones inside you have blood vessels,","words":[["but",16.13],["the",16.32],["bones",16.5],["inside",16.81],["you",17.18],["have",17.36],["blood",17.61],["vessels",17.92]]},{"s":18.7,"e":21.05,"text":"nerves, and billions of busy cells.","words":[["nerves",18.7],["and",19.2],["billions",19.46],["of",20.13],["busy",20.3],["cells",20.63]]},{"s":21.42,"e":23.19,"text":"So what's actually going on in there?","words":[["so",21.42],["whats",21.54],["actually",21.85],["going",22.34],["on",22.64],["in",22.76],["there",22.88]]},{"s":23.63,"e":25.79,"text":"Let's paint it out, one bone at a time.","words":[["lets",23.63],["paint",23.94],["it",24.32],["out",24.48],["one",24.71],["bone",24.94],["at",25.25],["a",25.4],["time",25.48]]},{"s":26.19,"e":28.39,"text":"Chapter one. More bones than you think.","words":[["chapter",26.19],["one",26.68],["more",26.9],["bones",27.18],["than",27.54],["you",27.82],["think",28.03]]},{"s":28.8,"e":31.28,"text":"A grown-up has about two hundred and six bones.","words":[["a",28.8],["grownup",28.87],["has",29.34],["about",29.54],["two",29.87],["hundred",30.08],["and",30.54],["six",30.75],["bones",30.95]]},{"s":31.65,"e":33.82,"text":"But a newborn has close to three hundred.","words":[["but",31.65],["a",31.84],["newborn",31.91],["has",32.37],["close",32.57],["to",32.9],["three",33.03],["hundred",33.36]]},{"s":34.19,"e":35.75,"text":"The missing ones didn't disappear.","words":[["the",34.19],["missing",34.36],["ones",34.75],["didnt",34.97],["disappear",35.25]]},{"s":36.13,"e":37.77,"text":"They fused together as you grew.","words":[["they",36.13],["fused",36.38],["together",36.7],["as",37.2],["you",37.33],["grew",37.52]]},{"s":38.22,"e":40.25,"text":"A baby's skull is a set of soft plates,","words":[["a",38.22],["babys",38.29],["skull",38.64],["is",38.99],["a",39.13],["set",39.2],["of",39.41],["soft",39.55],["plates",39.83]]},{"s":40.62,"e":42.67,"text":"with gaps that slowly close and lock.","words":[["with",40.62],["gaps",40.9],["that",41.17],["slowly",41.44],["close",41.85],["and",42.19],["lock",42.4]]},{"s":43.08,"e":45.97,"text":"Five little bones at the bottom of your spine","words":[["five",43.08],["little",43.39],["bones",43.86],["at",44.25],["the",44.41],["bottom",44.64],["of",45.11],["your",45.27],["spine",45.58]]},{"s":46.03,"e":47.47,"text":"join up into one solid piece.","words":[["join",46.03],["up",46.28],["into",46.4],["one",46.65],["solid",46.84],["piece",47.15]]},{"s":47.9,"e":50.73,"text":"Your hands and feet hold one hundred and six bones,","words":[["your",47.9],["hands",48.17],["and",48.52],["feet",48.72],["hold",49.0],["one",49.28],["hundred",49.48],["and",49.97],["six",50.17],["bones",50.38]]},{"s":51.1,"e":52.71,"text":"more than half of your whole skeleton.","words":[["more",51.1],["than",51.3],["half",51.51],["of",51.72],["your",51.82],["whole",52.03],["skeleton",52.29]]},{"s":53.18,"e":55.26,"text":"Chapter two. What bone is made of.","words":[["chapter",53.18],["two",53.74],["what",53.98],["bone",54.3],["is",54.62],["made",54.78],["of",55.1]]},{"s":55.64,"e":57.88,"text":"Bone is a mix of two very different things.","words":[["bone",55.64],["is",55.9],["a",56.04],["mix",56.1],["of",56.3],["two",56.43],["very",56.63],["different",56.89],["things",57.48]]},{"s":58.28,"e":59.48,"text":"The first is collagen,","words":[["the",58.28],["first",58.48],["is",58.82],["collagen",58.95]]},{"s":59.73,"e":61.69,"text":"a stretchy protein, a bit like rope.","words":[["a",59.73],["stretchy",59.8],["protein",60.36],["a",60.85],["bit",60.92],["like",61.13],["rope",61.41]]},{"s":62.11,"e":64.63,"text":"The second is a hard mineral made of calcium,","words":[["the",62.11],["second",62.32],["is",62.74],["a",62.88],["hard",62.95],["mineral",63.23],["made",63.72],["of",64.0],["calcium",64.14]]},{"s":65.04,"e":67.24,"text":"packed between the ropes like tiny bricks.","words":[["packed",65.04],["between",65.42],["the",65.86],["ropes",66.05],["like",66.36],["tiny",66.61],["bricks",66.86]]},{"s":67.59,"e":70.23,"text":"Rope alone would bend, bricks alone would shatter.","words":[["rope",67.59],["alone",67.84],["would",68.17],["bend",68.49],["bricks",68.74],["alone",69.13],["would",69.45],["shatter",69.78]]},{"s":70.58,"e":73.29,"text":"Together, you get something tough and a little springy.","words":[["together",70.58],["you",71.06],["get",71.24],["something",71.42],["tough",71.96],["and",72.26],["a",72.44],["little",72.5],["springy",72.86]]},{"s":73.73,"e":75.34,"text":"And your bones are also a bank.","words":[["and",73.73],["your",73.93],["bones",74.2],["are",74.54],["also",74.74],["a",75.0],["bank",75.07]]},{"s":75.74,"e":78.82,"text":"They store about ninety nine percent of your body's calcium.","words":[["they",75.74],["store",75.99],["about",76.3],["ninety",76.62],["nine",77.0],["percent",77.25],["of",77.69],["your",77.81],["bodys",78.06],["calcium",78.38]]},{"s":79.29,"e":80.43,"text":"When your blood runs low,","words":[["when",79.29],["your",79.51],["blood",79.74],["runs",80.03],["low",80.26]]},{"s":80.7,"e":81.82,"text":"your bones pay some out,","words":[["your",80.7],["bones",80.93],["pay",81.23],["some",81.4],["out",81.64]]},{"s":81.88,"e":83.96,"text":"so your heart and muscles keep working.","words":[["so",81.88],["your",82.01],["heart",82.27],["and",82.59],["muscles",82.79],["keep",83.24],["working",83.5]]},{"s":84.34,"e":86.28,"text":"Chapter three. The demolition crew.","words":[["chapter",84.34],["three",84.81],["the",85.14],["demolition",85.34],["crew",86.01]]},{"s":86.69,"e":89.91,"text":"Deep inside every bone, two kinds of cells take turns.","words":[["deep",86.69],["inside",86.99],["every",87.44],["bone",87.82],["two",88.12],["kinds",88.34],["of",88.71],["cells",88.86],["take",89.24],["turns",89.54]]},{"s":90.37,"e":93.35,"text":"Osteoclasts dissolve tiny pockets of old bone.","words":[["osteoclasts",90.37],["dissolve",91.21],["tiny",91.82],["pockets",92.13],["of",92.66],["old",92.81],["bone",93.04]]},{"s":93.7,"e":95.15,"text":"Then osteoblasts move in,","words":[["then",93.7],["osteoblasts",93.98],["move",94.73],["in",95.01]]},{"s":95.45,"e":97.24,"text":"and fill the hole with fresh new bone.","words":[["and",95.45],["fill",95.63],["the",95.87],["hole",96.04],["with",96.28],["fresh",96.52],["new",96.82],["bone",97.0]]},{"s":97.63,"e":99.64,"text":"Dig, then fill. Dig, then fill.","words":[["dig",97.63],["then",97.9],["fill",98.27],["dig",98.63],["then",98.91],["fill",99.27]]},{"s":100.03,"e":102.62,"text":"In adults, around ten percent of the skeleton","words":[["in",100.03],["adults",100.17],["around",100.59],["ten",101.01],["percent",101.22],["of",101.71],["the",101.85],["skeleton",102.06]]},{"s":102.72,"e":104.07,"text":"gets rebuilt every year.","words":[["gets",102.72],["rebuilt",102.99],["every",103.47],["year",103.8]]},{"s":104.45,"e":106.91,"text":"That works out to roughly a brand new skeleton","words":[["that",104.45],["works",104.71],["out",105.04],["to",105.23],["roughly",105.36],["a",105.81],["brand",105.88],["new",106.2],["skeleton",106.4]]},{"s":107.17,"e":108.42,"text":"about every ten years.","words":[["about",107.17],["every",107.52],["ten",107.87],["years",108.07]]},{"s":108.82,"e":111.25,"text":"This same crew is why a broken bone can heal.","words":[["this",108.82],["same",109.09],["crew",109.37],["is",109.65],["why",109.79],["a",110.0],["broken",110.07],["bone",110.48],["can",110.76],["heal",110.97]]},{"s":111.64,"e":114.02,"text":"First a soft bridge forms across the crack,","words":[["first",111.64],["a",111.98],["soft",112.05],["bridge",112.32],["forms",112.73],["across",113.07],["the",113.48],["crack",113.68]]},{"s":114.1,"e":117.0,"text":"then the crew slowly turns it into hard bone again.","words":[["then",114.1],["the",114.38],["crew",114.6],["slowly",114.88],["turns",115.3],["it",115.66],["into",115.8],["hard",116.08],["bone",116.37],["again",116.65]]},{"s":117.45,"e":119.34,"text":"Chapter four. The blood factory.","words":[["chapter",117.45],["four",117.96],["the",118.25],["blood",118.47],["factory",118.83]]},{"s":119.8,"e":122.55,"text":"Now look inside a big bone, like your thigh bone.","words":[["now",119.8],["look",120.02],["inside",120.31],["a",120.74],["big",120.81],["bone",121.03],["like",121.32],["your",121.61],["thigh",121.9],["bone",122.26]]},{"s":122.92,"e":124.54,"text":"The middle is filled with soft marrow,","words":[["the",122.92],["middle",123.08],["is",123.39],["filled",123.5],["with",123.81],["soft",124.02],["marrow",124.23]]},{"s":124.88,"e":126.29,"text":"and that marrow is a factory.","words":[["and",124.88],["that",125.06],["marrow",125.31],["is",125.68],["a",125.8],["factory",125.86]]},{"s":126.68,"e":128.19,"text":"It makes your red blood cells,","words":[["it",126.68],["makes",126.81],["your",127.12],["red",127.37],["blood",127.56],["cells",127.88]]},{"s":128.51,"e":130.17,"text":"the white cells that fight germs,","words":[["the",128.51],["white",128.7],["cells",129.0],["that",129.31],["fight",129.56],["germs",129.86]]},{"s":130.5,"e":132.2,"text":"and the platelets that plug up cuts.","words":[["and",130.5],["the",130.68],["platelets",130.85],["that",131.38],["plug",131.62],["up",131.85],["cuts",131.97]]},{"s":132.65,"e":133.98,"text":"How many? Scientists estimate","words":[["how",132.65],["many",132.81],["scientists",133.02],["estimate",133.56]]},{"s":134.04,"e":136.68,"text":"around two hundred billion red blood cells,","words":[["around",134.04],["two",134.48],["hundred",134.7],["billion",135.22],["red",135.73],["blood",135.95],["cells",136.32]]},{"s":137.03,"e":138.02,"text":"every single day.","words":[["every",137.03],["single",137.38],["day",137.81]]},{"s":138.38,"e":140.41,"text":"Chapter five. Use it or lose it.","words":[["chapter",138.38],["five",138.97],["use",139.31],["it",139.56],["or",139.73],["lose",139.9],["it",140.24]]},{"s":140.89,"e":142.99,"text":"Your bones listen to how you use them.","words":[["your",140.89],["bones",141.17],["listen",141.52],["to",141.94],["how",142.08],["you",142.29],["use",142.5],["them",142.71]]},{"s":143.44,"e":145.08,"text":"Push on them, and they build up.","words":[["push",143.44],["on",143.72],["them",143.85],["and",144.13],["they",144.33],["build",144.6],["up",144.94]]},{"s":145.55,"e":147.72,"text":"Rest them for too long, and they let go.","words":[["rest",145.55],["them",145.84],["for",146.13],["too",146.34],["long",146.56],["and",146.85],["they",147.07],["let",147.36],["go",147.58]]},{"s":148.13,"e":149.76,"text":"Astronauts floating in space can lose","words":[["astronauts",148.13],["floating",148.64],["in",149.04],["space",149.15],["can",149.4],["lose",149.55]]},{"s":150.07,"e":153.29,"text":"about one percent of the bone in their hips each month.","words":[["about",150.07],["one",150.43],["percent",150.65],["of",151.16],["the",151.31],["bone",151.53],["in",151.82],["their",151.97],["hips",152.33],["each",152.63],["month",152.92]]},{"s":153.76,"e":155.88,"text":"Meanwhile, studies of tennis players find","words":[["meanwhile",153.76],["studies",154.31],["of",154.73],["tennis",154.85],["players",155.21],["find",155.64]]},{"s":156.19,"e":158.4,"text":"the bones in their racket arm are thicker","words":[["the",156.19],["bones",156.39],["in",156.71],["their",156.84],["racket",157.17],["arm",157.56],["are",157.75],["thicker",157.95]]},{"s":158.53,"e":160.35,"text":"than the bones in their other arm.","words":[["than",158.53],["the",158.8],["bones",159.0],["in",159.34],["their",159.48],["other",159.81],["arm",160.15]]},{"s":160.82,"e":163.61,"text":"So every jump, every run, every climb up the stairs","words":[["so",160.82],["every",160.96],["jump",161.31],["every",161.59],["run",161.94],["every",162.15],["climb",162.5],["up",162.84],["the",162.98],["stairs",163.19]]},{"s":163.67,"e":167.13,"text":"is a little message telling your skeleton to stay strong.","words":[["is",163.67],["a",163.82],["little",163.89],["message",164.33],["telling",164.85],["your",165.36],["skeleton",165.66],["to",166.25],["stay",166.39],["strong",166.69]]},{"s":167.48,"e":169.9,"text":"So no, your skeleton isn't a dead frame.","words":[["so",167.48],["no",167.65],["your",167.81],["skeleton",168.13],["isnt",168.77],["a",169.09],["dead",169.17],["frame",169.5]]},{"s":170.32,"e":172.11,"text":"It's a living, growing part of you,","words":[["its",170.32],["a",170.53],["living",170.6],["growing",171.01],["part",171.49],["of",171.77],["you",171.9]]},{"s":172.41,"e":176.02,"text":"quietly rebuilding itself, one tiny pocket at a time.","words":[["quietly",172.41],["rebuilding",173.0],["itself",173.84],["one",174.34],["tiny",174.6],["pocket",174.93],["at",175.44],["a",175.6],["time",175.69]]},{"s":176.39,"e":177.67,"text":"Next time, your liver,","words":[["next",176.39],["time",176.69],["your",177.0],["liver",177.3]]},{"s":178.04,"e":180.43,"text":"the organ that does hundreds of jobs at once.","words":[["the",178.04],["organ",178.24],["that",178.57],["does",178.84],["hundreds",179.1],["of",179.63],["jobs",179.76],["at",180.03],["once",180.16]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); return x ? x[1] : PH[i].s; };
  const Pn = (i, w, n) => { let k = 0; for (const q of PH[i].words) if (q[0] === w && ++k === n) return q[1]; return P(i, w); };
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  const DURATION = PH[PH.length - 1].e + 1;
  const ph = (t, a, b) => clamp((t - a) / (b - a));
  const pr = (t, t0, d = 0.8) => clamp((t - t0) / d);

  // ---------- palette (3-5 hues per scene + ink; vermilion is the one accent) ----------
  const BONE = '#e2cc9c', BONE2 = '#c49e66', BONE3 = '#8f6e45', NEWB = '#efd9ae', OLDB = '#c9bc9c';
  const RED = '#c8442a', ROSE = '#d99a8a', VIO = '#8a6aa8', TEAL = '#4f9a90', BLUE = '#8fa6b8', SAGE = '#8ea888';
  const OCH = '#d9a441', MAR = '#cf6a4a', LIV = '#9c4a3a', NAVY = '#33405f', GREY = '#a8a49c', YEL = '#e2b84a';

  // ---------- paper + backgrounds ----------
  let PAPERL = null;
  function paperL() {
    if (PAPERL) return PAPERL;
    const L = H.layer(W, HH), c = L.getContext('2d');
    H.paper(c, W, HH, PAPER, 11, 0.035);
    const r = H.rng(5); c.lineCap = 'round';
    for (let i = 0; i < 1800; i++) {
      const x = r() * W, y = r() * HH, a = r() * 6.283, l = 4 + r() * 12;
      c.strokeStyle = rgba(r() < 0.5 ? '#d6c9b0' : '#fbf6ec', 0.35); c.lineWidth = 0.6;
      c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + Math.cos(a) * l * 0.5 + r() * 3, y + Math.sin(a) * l * 0.5 + r() * 3, x + Math.cos(a) * l, y + Math.sin(a) * l); c.stroke();
    }
    H.vignette(c, W, HH, 0.16, '90,70,40');
    return (PAPERL = L);
  }
  const BG = new Map();
  function bg(c, key, fn) {
    let L = BG.get(key);
    if (!L) {
      L = H.layer(W, HH); const lc = L.getContext('2d'); lc.drawImage(paperL(), 0, 0); if (fn) fn(lc);
      BG.set(key, L); if (BG.size > 6) BG.delete(BG.keys().next().value);
    } else { BG.delete(key); BG.set(key, L); }
    c.drawImage(L, 0, 0);
  }
  // translucent wash: 3 jittered passes, edges darken where the passes disagree (pooled edge)
  function wash(c, pts, col, a = 0.5, seed = 1, jit = 4) {
    const r = H.rng(seed);
    for (let p = 0; p < 3; p++) {
      c.beginPath();
      pts.forEach(([x, y], i) => { const X = x + (r() - 0.5) * jit * 2, Y = y + (r() - 0.5) * jit * 2; i ? c.lineTo(X, Y) : c.moveTo(X, Y); });
      c.closePath(); c.fillStyle = rgba(col, a / 3); c.fill();
      if (p === 2) { c.lineWidth = 1.5; c.strokeStyle = rgba(col, Math.min(1, a * 0.5)); c.stroke(); }
    }
  }
  function blobPts(cx, cy, rx, ry, seed, n = 40, rough = 0.1) {
    const r = H.rng(seed), q = r() * 10, out = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 6.283, k = 1 + rough * (Math.sin(a * 3 + q) * 0.5 + Math.sin(a * 5 + q * 2) * 0.3 + (r() - 0.5) * 0.4);
      out.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
    }
    return out;
  }
  const blob = (c, cx, cy, rx, ry, col, a = 0.5, seed = 1, rough = 0.1) => { if (rx > 0.5 && ry > 0.5) wash(c, blobPts(cx, cy, rx, ry, seed, 40, rough), col, a, seed + 7, Math.min(4, rx * 0.05 + 1)); };
  // wavy horizontal band of wash (sky, ground, a table top), extended past the frame so no seams show
  function band(c, y0, y1, col, a, seed, amp = 14) {
    const r = H.rng(seed), q = r() * 9, pts = [];
    for (let x = -60; x <= W + 60; x += 40) pts.push([x, y0 + Math.sin(x * 0.006 + q) * amp + Math.sin(x * 0.017 + q * 2) * amp * 0.4]);
    for (let x = W + 60; x >= -60; x -= 40) pts.push([x, y1 + Math.sin(x * 0.005 + q * 3) * amp + Math.sin(x * 0.021 + q) * amp * 0.4]);
    wash(c, pts, col, a, seed + 3, 6);
  }
  // a soft swatch in a corner or behind a specimen (the painter testing the colour)
  const swatch = (c, x, y, rx, ry, col, a, seed) => { blob(c, x, y, rx, ry, col, a, seed, 0.18); blob(c, x + rx * 0.15, y - ry * 0.1, rx * 0.7, ry * 0.65, col, a * 0.5, seed + 1, 0.2); };

  // ---------- type ----------
  const FS = { serif: (s) => `italic 500 ${s}px "Bodoni Moda"`, hand: (s) => `700 ${s}px "Caveat"`, mono: (s) => `500 ${s}px "DM Mono"`, num: (s) => `600 ${s}px "Bodoni Moda"` };
  function txt(c, str, x, y, font, col, p = 1, align = 'center', halo = true, ls = 0) {
    if (p <= 0) return;
    c.save(); c.font = font; c.textAlign = align; c.textBaseline = 'middle'; if (ls) c.letterSpacing = ls + 'px';
    const w = c.measureText(str).width, x0 = align === 'center' ? x - w / 2 : align === 'right' ? x - w : x;
    if (p < 1) { c.beginPath(); c.rect(x0 - 20, y - 300, (w + 40) * p, 600); c.clip(); }
    if (halo) { c.lineJoin = 'round'; c.lineWidth = 9; c.strokeStyle = rgba(PAPER, 0.8); c.strokeText(str, x, y); }
    c.fillStyle = col; c.fillText(str, x, y); c.restore();
  }
  // hand note: written twice over a paper halo, revealed left to right like writing
  function hand(c, str, x, y, s, p, col = INK2, align = 'center') { txt(c, str, x, y, FS.hand(s), rgba(col, 0.9), p, align); txt(c, str, x + 0.7, y + 0.5, FS.hand(s), rgba(col, 0.35), p, align, false); }
  const title = (c, str, x, y, s, p, col = INK, align = 'center') => txt(c, str, x, y, FS.serif(s), col, p, align);
  const mono = (c, str, x, y, s, p, col = INK2, align = 'center') => txt(c, str.toUpperCase(), x, y, FS.mono(s), rgba(col, 0.85), p, align, true, Math.round(s * 0.2));
  // painted numeral: two translucent passes of pigment, no outline
  function bignum(c, str, x, y, s, p, col = RED, align = 'center') {
    if (p <= 0) return; const a = ss(p);
    c.save(); c.translate(x, y); c.scale(0.92 + 0.08 * eo(p), 0.92 + 0.08 * eo(p));
    txt(c, str, 0, 0, FS.num(s), rgba(col, 0.62 * a), 1, align, true); txt(c, str, 2.5, 2, FS.num(s), rgba(col, 0.38 * a), 1, align, false);
    c.restore();
  }
  // pen leader line that grows to its specimen, with a dot at the end
  function leader(c, x0, y0, x1, y1, p, col = INK2, bend = 14) {
    if (p <= 0) return; const pts = qcurve(x0, y0, x1, y1, bend, 16), m = (pts.length - 1) * clamp(p);
    c.save(); c.strokeStyle = rgba(col, 0.75); c.lineWidth = 1.5; c.lineCap = 'round'; c.beginPath();
    for (let i = 0; i <= Math.floor(m); i++) i ? c.lineTo(pts[i][0], pts[i][1]) : c.moveTo(pts[i][0], pts[i][1]);
    const k = Math.floor(m), f = m - k; if (k < pts.length - 1) c.lineTo(lerp(pts[k][0], pts[k + 1][0], f), lerp(pts[k][1], pts[k + 1][1], f));
    c.stroke(); if (p >= 1) { c.fillStyle = rgba(col, 0.8); c.beginPath(); c.arc(x1, y1, 2.6, 0, 6.283); c.fill(); }
    c.restore();
  }
  // specimen note: leader from note to the subject, then the note is written
  function note(c, str, nx, ny, sx, sy, t0, t, s = 30, col = INK2, align = 'center', bend = 14) {
    leader(c, nx + (align === 'left' ? -8 : align === 'right' ? 8 : 0), ny + s * 0.55, sx, sy, pr(t, t0, 0.45), col, bend);
    hand(c, str, nx, ny, s, pr(t, t0 + 0.15, 0.7), col, align);
  }
  // painted arrow (brush shaft + two short strokes)
  function arrow(c, x0, y0, x1, y1, p, col = INK2, w = 5, seed = 1) {
    if (p <= 0) return;
    const L = obj('arw' + [x0, y0, x1, y1, w, col].join(','), seed, () => {
      const S = [mk(qcurve(x0, y0, x1, y1, rnd(-6, 6), 10), w, col, { prof: 'tip', nb: 0, a: 0.85 })];
      const a = Math.atan2(y1 - y0, x1 - x0); for (const s of [-1, 1]) S.push(mk(polar(x1, y1, a + Math.PI + s * 0.55, w * 4, 0, 4), w * 0.8, col, { prof: 'tip', nb: 0, a: 0.85 }));
      return S;
    });
    drawList(c, L, p);
  }

  // ---------- stroke objects: built once under a fixed seed, painted in stroke by stroke, cached as a sprite when done ----------
  const OBJ = {}, SPR = {};
  const obj = (key, seed, build) => OBJ[key] || (OBJ[key] = withSeed(seed, build));
  function paint(c, key, seed, build, p, x = 0, y = 0, s = 1, rot = 0, am = 1) {
    if (p <= 0) return; const L = obj(key, seed, build);
    c.save(); c.translate(x, y); if (rot) c.rotate(rot); if (s !== 1) c.scale(s, s);
    if (p >= 1) { const sp = SPR[key] || (SPR[key] = sprite(L)); c.globalAlpha *= am; c.drawImage(sp.cv, sp.x0, sp.y0); }
    else drawList(c, L, p, null, am);
    c.restore();
  }
  const arcPts = (cx, cy, r, a0, a1, n = 10, ry) => { const o = []; for (let i = 0; i <= n; i++) { const a = lerp(a0, a1, i / n); o.push([cx + Math.cos(a) * r, cy + Math.sin(a) * (ry || r)]); } return o; };
  // a long bone lying horizontally, centred on 0,0: two knobbed ends, a pinched shaft, a shadow wash, ink edges
  function boneStrokes(len, th, o = {}) {
    const S = [], hl = len / 2, col = o.col || BONE, sh = o.sh || BONE2, ink = o.ink || INK2;
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) {
      const cx = sx * (hl - th * 0.45), cy = sy * th * 0.36;
      for (let k = 0; k < 3; k++) { const a = rnd(0, 6.283), r0 = th * 0.26; S.push(mk(polar(cx - Math.cos(a) * r0, cy - Math.sin(a) * r0, a, r0 * 2, rnd(-3, 3), 6), th * 0.6, col, { prof: 'leaf', nb: th > 24 ? 3 : 0, a: 0.72 })); }
    }
    S.push(mk(qcurve(-hl + th * 0.4, -th * 0.1, hl - th * 0.4, -th * 0.1, th * 0.05, 14), th * 0.6, col, { prof: 'even', a: 0.85, nb: th > 16 ? 5 : 0 }));
    S.push(mk(qcurve(-hl + th * 0.5, th * 0.16, hl - th * 0.5, th * 0.16, -th * 0.05, 14), th * 0.32, sh, { prof: 'even', a: 0.55, nb: 0 }));
    S.push(mk(qcurve(-hl + th * 0.8, -th * 0.34, hl - th * 0.8, -th * 0.34, th * 0.14, 16), Math.min(2.6, Math.max(1.3, th * 0.03)), ink, { prof: 'even', nb: 0, a: 0.55 }));
    S.push(mk(qcurve(-hl + th * 0.8, th * 0.36, hl - th * 0.8, th * 0.36, -th * 0.14, 16), Math.min(3, Math.max(1.5, th * 0.04)), ink, { prof: 'even', nb: 0, a: 0.65 }));
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) {
      const cx = sx * (hl - th * 0.45), cy = sy * th * 0.36; let a0 = sy < 0 ? -2.5 : -0.1, a1 = sy < 0 ? 0.1 : 2.5;
      if (sx < 0) { const b0 = Math.PI - a1, b1 = Math.PI - a0; a0 = b0; a1 = b1; }
      S.push(mk(arcPts(cx, cy, th * 0.4, a0, a1, 10), Math.min(2.4, Math.max(1.2, th * 0.03)), ink, { prof: 'even', nb: 0, a: 0.55 }));
    }
    return S;
  }
  const BONEF = (len, th, o) => () => boneStrokes(len, th, o);
  function limb(S, x0, y0, x1, y1, w, col = BONE) {
    const s = mk(qcurve(x0, y0, x1, y1, rnd(-1, 1) * w * 0.15, 8), w, col, { prof: 'even', a: 0.85, nb: w > 9 ? 3 : 0 });
    S.push(mk(polar(x0, y0, rnd(0, 6.28), w * 0.4, 0, 4), w * 1.35, col, { prof: 'leaf', nb: 0, a: 0.75 }));
    S.push(s); S.push(edgeOf(s, 1, Math.max(1, w * 0.12), INK2, 0.55));
    S.push(mk(polar(x1, y1, rnd(0, 6.28), w * 0.4, 0, 4), w * 1.35, col, { prof: 'leaf', nb: 0, a: 0.75 }));
  }
  // a standing skeleton, origin at the pelvis; skull top near -235, feet near +215 (o.head, o.torso, o.limb set proportions)
  function skelStrokes(o = {}) {
    const S = [], hr = o.head || 28, la = o.limb || 1, to = o.torso || 1, w = o.w || 9, col = o.col || BONE, sh = o.sh || BONE2;
    const sy = -150 * to - hr * 1.6;
    for (let k = 0; k < 6; k++) { const a = (k / 6) * 6.283 + rnd(-0.2, 0.2); S.push(mk(arcPts(0, sy, hr * 0.6, a, a + 1.5, 8), hr * 0.8, col, { prof: 'brush', a: 0.68, nb: 3 })); }
    S.push(mk(arcPts(0, sy, hr, -3.7, 0.55, 18), 2, INK2, { prof: 'even', nb: 0, a: 0.7 }));
    for (const ex of [-1, 1]) S.push(mk(polar(ex * hr * 0.36 - hr * 0.09, sy + hr * 0.1, 0, hr * 0.18, 0, 4), hr * 0.3, BONE3, { prof: 'leaf', nb: 0, a: 0.75 }));
    S.push(mk(qcurve(-hr * 0.55, sy + hr * 0.62, hr * 0.55, sy + hr * 0.62, hr * 0.3, 10), hr * 0.3, col, { prof: 'even', a: 0.8, nb: 0 }));
    S.push(mk(qcurve(-hr * 0.58, sy + hr * 0.8, hr * 0.58, sy + hr * 0.8, hr * 0.3, 10), 1.6, INK2, { prof: 'even', nb: 0, a: 0.6 }));
    const sp0 = sy + hr * 1.15, n = 13;
    for (let i = 0; i < n; i++) { const y = lerp(sp0, -6, i / (n - 1)); S.push(mk(qcurve(-w * 0.5, y, w * 0.5, y, 0, 4), w * 0.95, i % 2 ? col : sh, { prof: 'leaf', nb: 0, a: 0.85 })); }
    const rt = sp0 + 16 * to, rb = rt + 70 * to;
    for (let i = 0; i < 5; i++) { const y = lerp(rt, rb, i / 4), sp = 34 + i * 3 - (i > 3 ? 6 : 0); for (const sx of [-1, 1]) S.push(mk(qctrl(sx * 4, y, sx * (sp + 12), y - 6, sx * (sp + 4), y + 22, 10), w * 0.55, col, { prof: 'tip', a: 0.8, nb: 0 })); }
    for (const sx of [-1, 1]) S.push(mk(qcurve(sx * 5, sp0 + 8, sx * 48, sp0 + 6, -4, 6), w * 0.6, col, { prof: 'even', a: 0.8, nb: 0 }));
    for (const sx of [-1, 1]) S.push(mk(qctrl(sx * 4, -8, sx * 42, -28, sx * 26, 14, 10), w * 1.7, col, { prof: 'leaf', a: 0.72, nb: 3 }));
    const shy = sp0 + 10;
    for (const sx of [-1, 1]) {
      const ex = sx * 58, ey = shy + 74 * la, wx = sx * 62, wy = ey + 66 * la;
      limb(S, sx * 48, shy, ex, ey, w, col); limb(S, ex, ey, wx, wy, w * 0.8, col);
      for (let f = 0; f < 4; f++) S.push(mk(polar(wx + sx * 2, wy + 5, Math.PI / 2 + sx * (f - 1.5) * 0.2, 15 * la, 0, 4), w * 0.35, col, { prof: 'tip', a: 0.8, nb: 0 }));
    }
    for (const sx of [-1, 1]) {
      const kx = sx * 24, ky = 104 * la, ax = sx * 24, ay = 200 * la;
      limb(S, sx * 20, 12, kx, ky, w * 1.15, col); limb(S, kx, ky, ax, ay, w, col);
      S.push(mk(qcurve(ax, ay + 5, ax + sx * 22, ay + 11, 2, 5), w * 0.8, col, { prof: 'tip', a: 0.85, nb: 0 }));
    }
    return S;
  }
  const SKEL = (o) => () => skelStrokes(o);
  // round cell: wash body, darker nucleus dabs, pooled rim
  function cell(c, x, y, r, col, p = 1, nuc = 1, seed = 1, ncol) {
    if (p <= 0) return; const k = eo(p);
    blob(c, x, y, r * k, r * 0.9 * k, col, 0.55, seed, 0.16);
    blob(c, x - r * 0.12, y - r * 0.1, r * 0.6 * k, r * 0.5 * k, col, 0.3, seed + 2, 0.2);
    const rr = H.rng(seed + 9);
    for (let i = 0; i < nuc; i++) { const a = rr() * 6.283, d = nuc > 1 ? r * 0.38 : 0; blob(c, x + Math.cos(a) * d, y + Math.sin(a) * d * 0.8, r * 0.2 * k, r * 0.17 * k, ncol || mixc(col, INK, 0.45), 0.7, seed + 20 + i, 0.2); }
  }
  // red blood cell: a disc with a paler dimple
  function rbc(c, x, y, r, p = 1, seed = 1, tilt = 0) {
    if (p <= 0) return; const k = eo(p);
    c.save(); c.translate(x, y); c.rotate(tilt);
    blob(c, 0, 0, r * k, r * 0.86 * k, RED, 0.6, seed, 0.07);
    blob(c, r * 0.05, r * 0.04, r * 0.42 * k, r * 0.34 * k, '#f0b8a6', 0.55, seed + 3, 0.12);
    c.restore();
  }

  // ================= scenes =================
  const SC = [], SFX = [];
  const fx = (t, kind, o = {}) => SFX.push([t, kind, o]);
  const TRD = { wipe: 0.8, turn: 0.75, mist: 1.1, cut: 0 };
  function scene(i0, i1, tr, draw, o = {}) { const s = SC.length ? PE(i0 - 1) + 0.03 : 0; SC.push({ i0, i1, s, tr, draw, still: !!o.still, seed: SC.length * 13 + 5 }); }
  // chapter card on a fresh sheet: chapter numeral, title, a test swatch and a small painted bone
  function card(c, t, i, num, name, col, seed) {
    bg(c, 'card' + seed, (g) => { swatch(g, 640, 330, 330, 120, col, 0.28, seed); band(g, 610, 760, col, 0.12, seed + 4, 10); });
    mono(c, 'chapter ' + num, 640, 238, 22, pr(t, PS(i), 0.5));
    title(c, name, 640, 330, 74, pr(t, P(i, PH[i].words[2][0]) - 0.1, 1.1));
    paint(c, 'cardbone', 77, BONEF(150, 30), pr(t, PS(i) + 0.2, 1.2), 640, 450, 1, -0.08);
    fx(PS(i) + 0.2, 'brush', { d: 1.2 }); fx(P(i, PH[i].words[2][0]) - 0.1, 'pen', { d: 1 });
  }
  const CH = [];
  // ---------------- 1. hook: nearly 300 little bones paint in, then almost 100 of them vanish ----------------
  const DAB = (() => { const r = H.rng(301), o = []; for (let i = 0; i < 300; i++) { let x, y; do { x = r() * 2 - 1; y = r() * 2 - 1; } while (x * x + y * y > 1); const gone = i % 16 < 5 && o.filter((d) => d.gone).length < 94; o.push({ x: 640 + x * 420, y: 400 + y * 190, a: r() * 3.14, l: 14 + r() * 14, c: r() < 0.3 ? BONE2 : BONE, gone, dx: (r() - 0.5) * 30, dy: (r() - 0.5) * 30 }); } return o; })();
  const DABS = withSeed(302, () => DAB.map((d) => mk(polar(d.x - Math.cos(d.a) * d.l / 2, d.y - Math.sin(d.a) * d.l / 2, d.a, d.l, rnd(-2, 2), 4), 8, d.c, { prof: 'even', nb: 0, a: 0.85 })));
  scene(0, 1, 'cut', (c, t) => {
    bg(c, 's1', (g) => { swatch(g, 640, 400, 430, 220, ROSE, 0.16, 11); swatch(g, 1120, 130, 90, 60, OCH, 0.18, 12); });
    const t1 = P(1, 'almost'), t2 = P(1, 'go') + 0.2; let n = 0;
    for (let i = 0; i < 300; i++) {
      const d = DAB[i], p = pr(t, 0.15 + (2.0 * i) / 300, 0.35); if (p <= 0) continue;
      let am = 1, ox = 0, oy = 0;
      if (d.gone) { const k = ss(ph(t, t1 + (i % 7) * 0.08, t2 - 0.4 + (i % 7) * 0.08)); am = 1 - k; ox = d.dx * k; oy = d.dy * k; }
      if (am <= 0.01) continue; if (!d.gone || am > 0.5) n++;
      c.save(); c.translate(ox, oy); drawS(c, DABS[i], p, null, am); c.restore();
    }
    mono(c, 'bones at birth', 640, 120, 22, pr(t, 0.3, 0.6));
    bignum(c, t < t1 ? String(Math.min(300, Math.round(n / 5) * 5 || n)) : String(Math.max(206, n)), 640, 180, 76, pr(t, 0.4, 0.4), INK2);
    hand(c, 'nearly 300!', 1010, 250, 38, pr(t, P(0, 'three'), 0.7), RED);
    hand(c, 'so where did ~100 go?', 640, 640, 44, pr(t, t1, 1.1), RED);
  }, { still: true });
  fx(0.15, 'patter', { d: 2.1 }); fx(P(0, 'three'), 'pen', { d: 0.7 }); fx(P(1, 'almost'), 'erase', { d: 1.1 }); fx(P(1, 'almost') + 0.1, 'pen', { d: 1 });

  // ---------------- 2. your skeleton is alive ----------------
  scene(2, 3, 'wipe', (c, t) => {
    bg(c, 's2', (g) => { band(g, 600, 760, SAGE, 0.22, 21); swatch(g, 640, 330, 260, 250, ROSE, 0.14, 22); });
    const p = pr(t, PS(2) + 0.1, P(3, 'rebuilding') - PS(2));
    paint(c, 'skelA', 31, SKEL({}), p, 640, 360, 1.15);
    if (t > P(2, 'alive')) { const k = 0.5 + 0.5 * Math.sin((t - P(2, 'alive')) * 5); c.save(); c.globalAlpha *= ss(pr(t, P(2, 'alive'), 0.5)); blob(c, 640, 250, 12 + 4 * k, 11 + 4 * k, RED, 0.55, 23); c.restore(); }
    note(c, 'alive!', 870, 190, 655, 250, P(2, 'alive') - 0.1, t, 52, RED, 'left', -20);
    note(c, 'rebuilding itself, right now', 300, 560, 600, 470, P(3, 'rebuilding'), t, 32, INK2, 'center', 20);
    for (let j = 0; j < 5; j++) { const tt = P(3, 'rebuilding') + 0.3 + j * 0.25; if (t > tt) { const q = (t - tt) % 1.4 / 1.4; c.save(); c.globalAlpha *= 0.7 * (1 - q); blob(c, [598, 690, 615, 668, 640][j], [470, 470, 590, 590, 330][j], 6 + 10 * q, 6 + 10 * q, RED, 0.5, 40 + j); c.restore(); } }
  });
  fx(PS(2) + 0.1, 'brush', { d: 2.4 }); fx(P(2, 'alive') - 0.1, 'glock', { n: ['C5', 'G5'] }); fx(P(3, 'rebuilding'), 'pen', { d: 1 });

  // ---------------- 3. what we picture: dry white sticks, a plastic classroom skeleton ----------------
  scene(4, 5, 'wipe', (c, t) => {
    bg(c, 's3', (g) => { band(g, -60, 140, BLUE, 0.2, 31); band(g, 620, 760, GREY, 0.2, 32); });
    paint(c, 'stand', 33, () => [mk(qcurve(640, 120, 640, 640, 2, 10), 5, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(560, 645, 720, 645, -3, 8), 10, INK2, { prof: 'even', nb: 3, a: 0.7 }), mk(qcurve(640, 120, 640, 165, 0, 4), 3, INK2, { prof: 'even', nb: 0, a: 0.8 })], pr(t, PS(4), 0.6));
    paint(c, 'skelG', 34, SKEL({ col: '#dcdad2', sh: GREY }), pr(t, PS(4) + 0.2, 1.8), 640, 400, 1.0);
    paint(c, 'sticks', 35, () => { const S = []; for (let i = 0; i < 4; i++) S.push(...boneStrokes(120 - i * 8, 18, { col: '#e4e1d8', sh: GREY })); return S.map((s, j) => s); }, 0);
    for (let i = 0; i < 3; i++) paint(c, 'stk' + i, 36 + i, BONEF(130 - i * 12, 18, { col: '#e2dfd6', sh: GREY }), pr(t, P(4, 'dry') + i * 0.15, 0.5), 1010 + (i % 2) * 20, 300 + i * 46, 1, -0.2 + i * 0.18);
    note(c, 'dry white sticks?', 1030, 200, 1000, 290, P(4, 'dry') - 0.1, t, 36, INK2, 'center', 10);
    mono(c, 'the classroom skeleton', 330, 300, 20, pr(t, P(5, 'plastic'), 0.7));
    hand(c, 'plastic, not alive', 330, 345, 32, pr(t, P(5, 'plastic') + 0.3, 0.9), RED);
    leader(c, 420, 330, 590, 360, pr(t, P(5, 'skeleton'), 0.5));
  });
  fx(PS(4) + 0.2, 'brush', { d: 1.8 }); fx(P(4, 'dry'), 'brush', { d: 0.8 }); fx(P(5, 'plastic'), 'pen', { d: 1 });

  // ---------------- 4. inside: blood vessels, nerves, billions of cells ----------------
  const VESS = withSeed(41, () => { const S = []; const br = (x, y, a, l, w, d) => { if (d > 3 || l < 12) return; const s = mk(polar(x, y, a, l, rnd(-6, 6), 8), w, RED, { prof: 'tip', nb: 0, a: 0.8 }); S.push(s); const e = s.pts[s.pts.length - 1]; br(e[0], e[1], a + rnd(0.3, 0.6), l * 0.72, w * 0.7, d + 1); br(e[0], e[1], a - rnd(0.3, 0.6), l * 0.72, w * 0.7, d + 1); }; br(430, 372, -0.02, 110, 6, 0); br(850, 380, Math.PI + 0.03, 100, 6, 0); return S; });
  const NERV = withSeed(42, () => { const S = []; for (let k = 0; k < 2; k++) { const y = 352 + k * 38, pts = []; for (let x = 440; x <= 840; x += 20) pts.push([x, y + Math.sin(x * 0.05 + k * 2) * 6]); S.push(mk(pts, 2.6, YEL, { prof: 'even', nb: 0, a: 0.9 })); } return S; });
  scene(6, 7, 'wipe', (c, t) => {
    bg(c, 's4', (g) => { swatch(g, 640, 370, 520, 210, BONE, 0.12, 41); swatch(g, 140, 610, 110, 70, ROSE, 0.2, 42); });
    paint(c, 'bigbone', 43, BONEF(860, 190), pr(t, PS(6), 1.3), 640, 370);
    const w = ss(pr(t, PS(6) + 0.8, 0.8));
    if (w > 0) { c.save(); c.beginPath(); c.ellipse(640, 368, 240 * w, 46, 0, 0, 6.283); c.clip(); c.fillStyle = rgba('#f3d5c4', 0.95); c.fillRect(380, 300, 520, 140); blob(c, 640, 368, 240, 44, ROSE, 0.35, 44); drawList(c, VESS, pr(t, P(6, 'blood') - 0.1, 1.2)); drawList(c, NERV, pr(t, P(7, 'nerves') - 0.1, 0.9));
      for (let i = 0; i < 46; i++) { const r = H.rng(500 + i), x = 420 + r() * 440, y = 330 + r() * 76, tt = P(7, 'billions') + i * 0.02; cell(c, x, y, 4 + r() * 3, i % 3 ? VIO : TEAL, pr(t, tt, 0.3), 1, 600 + i); }
      c.restore(); c.save(); c.strokeStyle = rgba(INK2, 0.5 * w); c.lineWidth = 1.5; c.beginPath(); c.ellipse(640, 368, 240 * w, 46, 0, 0, 6.283); c.stroke(); c.restore(); }
    note(c, 'blood vessels', 500, 175, 520, 352, P(6, 'blood') - 0.1, t, 36, RED, 'center', -12);
    note(c, 'nerves', 320, 545, 470, 392, P(7, 'nerves') - 0.1, t, 36, '#9a7a1a', 'center', 12);
    note(c, 'billions of busy cells', 900, 560, 760, 395, P(7, 'billions') - 0.1, t, 36, VIO, 'center', -12);
  });
  fx(PS(6), 'brush', { d: 1.3 }); fx(P(6, 'blood') - 0.1, 'brush', { d: 1.2 }); fx(P(7, 'nerves') - 0.1, 'pen', { d: 0.9 }); fx(P(7, 'billions'), 'patter', { d: 0.9 });

  // ---------------- 5. a hand-written question, answered by painting ----------------
  scene(8, 9, 'mist', (c, t) => {
    bg(c, 's5', (g) => { swatch(g, 1100, 600, 140, 80, BLUE, 0.16, 51); });
    hand(c, "so what's going on in there?", 640, 230, 66, pr(t, PS(8) + 0.1, 1.5), INK2);
    paint(c, 's5bone', 52, BONEF(420, 92), pr(t, P(9, 'paint'), 1.4), 640, 420, 1, -0.05);
    hand(c, 'one bone at a time', 640, 560, 38, pr(t, P(9, 'one'), 0.8), RED);
  });
  fx(PS(8) + 0.1, 'pen', { d: 1.5 }); fx(P(9, 'paint'), 'brush', { d: 1.4 }); fx(P(9, 'one'), 'pen', { d: 0.8 });

  // ================= CHAPTER 1: more bones than you think =================
  CH.push([10, 'I · more bones than you think']);
  scene(10, 10, 'turn', (c, t) => card(c, t, 10, 'one', 'More bones than you think', OCH, 61), { still: true });
  fx(PS(10) - 0.05, 'turn');

  scene(11, 12, 'wipe', (c, t) => {
    bg(c, 's7', (g) => { band(g, 630, 760, SAGE, 0.2, 71); swatch(g, 400, 320, 200, 230, BONE, 0.12, 72); swatch(g, 880, 380, 150, 170, ROSE, 0.13, 73); });
    paint(c, 'skelA', 31, SKEL({}), pr(t, PS(11), 1.3), 400, 360, 1.0);
    bignum(c, '206', 400, 640, 70, pr(t, P(11, 'two'), 0.5), INK2);
    hand(c, 'grown-up', 400, 100, 36, pr(t, P(11, 'grownup') - 0.1, 0.6));
    paint(c, 'skelB', 74, SKEL({ head: 38, limb: 0.62, torso: 0.7, w: 7 }), pr(t, PS(12), 1.0), 880, 420, 1.0);
    bignum(c, '≈300', 880, 640, 70, pr(t, P(12, 'three'), 0.5), RED);
    hand(c, 'newborn', 880, 190, 36, pr(t, P(12, 'newborn') - 0.1, 0.6), RED);
  });
  fx(PS(11), 'brush', { d: 1.3 }); fx(P(11, 'two'), 'glock', { n: ['E5'] }); fx(PS(12), 'brush', { d: 1 }); fx(P(12, 'three'), 'glock', { n: ['G5'] });

  // ---------------- fused, not lost ----------------
  scene(13, 14, 'wipe', (c, t) => {
    bg(c, 's8', (g) => { swatch(g, 640, 390, 470, 160, OCH, 0.12, 81); });
    const k = ss(ph(t, P(14, 'fused') - 0.1, P(14, 'grew')));
    for (let j = 0; j < 3; j++) {
      const x = 300 + j * 340, y = 390, gap = lerp(34, 0, k);
      paint(c, 'fa' + j, 82 + j, BONEF(110, 40), pr(t, PS(13) + j * 0.2, 0.7), x - 55 - gap / 2, y, 1, 0);
      paint(c, 'fb' + j, 85 + j, BONEF(110, 40), pr(t, PS(13) + j * 0.2 + 0.3, 0.7), x + 55 + gap / 2, y, 1, 0);
      if (k > 0.6) { c.save(); c.globalAlpha *= ss((k - 0.6) / 0.4); blob(c, x, y, 120, 20, BONE2, 0.35, 88 + j, 0.05); c.restore(); }
    }
    mono(c, '2 bones → 1 bone', 640, 520, 24, pr(t, P(14, 'fused'), 0.8));
    hand(c, "they didn't disappear...", 640, 220, 46, pr(t, P(13, 'didnt') - 0.2, 1), INK2);
    hand(c, 'they fused!', 640, 600, 52, pr(t, P(14, 'fused'), 0.6), RED);
  });
  fx(PS(13), 'brush', { d: 1.2 }); fx(P(14, 'fused') - 0.1, 'thump'); fx(P(14, 'fused'), 'pen', { d: 0.6 });

  // ---------------- a baby's skull: soft plates, gaps that close ----------------
  scene(15, 16, 'wipe', (c, t) => {
    bg(c, 's9', (g) => { band(g, -60, 120, ROSE, 0.14, 91); swatch(g, 640, 390, 260, 250, BONE, 0.1, 92); });
    const cx = 640, cy = 390, a = ss(pr(t, PS(15), 1.2)), k = ss(ph(t, P(16, 'slowly'), P(16, 'lock') + 0.2)), gw = lerp(16, 1.5, k);
    if (a > 0) {
      c.save(); c.globalAlpha *= a; blob(c, cx, cy, 150, 190, BONE, 0.7, 93, 0.04); blob(c, cx + 20, cy + 30, 110, 140, BONE2, 0.25, 94, 0.1); c.restore();
      c.save(); c.globalAlpha *= a; c.lineCap = 'round';
      const sut = () => { c.beginPath(); c.moveTo(cx, cy - 120); c.lineTo(cx, cy + 120); c.moveTo(cx - 148, cy - 40); c.quadraticCurveTo(cx, cy - 150, cx + 148, cy - 40); c.moveTo(cx - 130, cy + 100); c.quadraticCurveTo(cx, cy + 150, cx + 130, cy + 100); c.moveTo(cx, cy - 190); c.lineTo(cx, cy - 120); };
      sut(); c.strokeStyle = rgba(PAPER, 0.95); c.lineWidth = gw; c.stroke(); c.strokeStyle = rgba(INK2, 0.45); c.lineWidth = 1.3; c.stroke();
      const fs = lerp(46, 4, k); c.fillStyle = rgba('#f3e2cf', 0.95); c.beginPath(); c.moveTo(cx, cy - 104 - fs); c.lineTo(cx + fs * 0.8, cy - 104); c.lineTo(cx, cy - 104 + fs); c.lineTo(cx - fs * 0.8, cy - 104); c.closePath(); c.fill(); c.strokeStyle = rgba(INK2, 0.4); c.stroke();
      c.restore();
    }
    mono(c, 'baby skull · seen from above', 640, 140, 20, pr(t, PS(15), 0.8));
    note(c, 'soft plates', 960, 300, 760, 330, P(15, 'plates') - 0.15, t, 38);
    note(c, 'soft spot', 330, 250, 615, 290, P(16, 'gaps') - 0.1, t, 36, RED, 'center', -16);
    hand(c, 'close... and lock', 960, 560, 40, pr(t, P(16, 'close'), 0.9), INK2);
  });
  fx(PS(15), 'brush', { d: 1.2 }); fx(P(15, 'plates') - 0.15, 'pen', { d: 0.8 }); fx(P(16, 'lock'), 'thump');

  // ---------------- five spine bones become one (sacrum) ----------------
  scene(17, 18, 'wipe', (c, t) => {
    bg(c, 's10', (g) => { swatch(g, 640, 380, 240, 260, BLUE, 0.12, 101); band(g, 640, 760, SAGE, 0.16, 102); });
    for (let i = 0; i < 6; i++) paint(c, 'vt' + i, 110 + i, () => [mk(qcurve(-34, 0, 34, 0, 0, 5), 22, i % 2 ? BONE : BONE2, { prof: 'leaf', nb: 3, a: 0.85 })], pr(t, PS(17) + i * 0.1, 0.4), 640, 90 + i * 30);
    const k = ss(ph(t, P(18, 'join') - 0.1, P(18, 'piece')));
    for (let i = 0; i < 5; i++) {
      const wv = lerp(150, 62, i / 4), y = 290 + i * lerp(60, 46, k) + i * 0, p = pr(t, P(17, 'five') + i * 0.18, 0.5);
      if (p <= 0) continue; const hgt = lerp(40, 46, k);
      c.save(); c.globalAlpha *= ss(p); wash(c, [[640 - wv / 2, y - hgt / 2], [640 + wv / 2, y - hgt / 2], [640 + wv * 0.42, y + hgt / 2], [640 - wv * 0.42, y + hgt / 2]], i % 2 ? BONE : mixc(BONE, BONE2, 0.4), 0.85, 120 + i, 3); c.restore();
    }
    if (k > 0.5) { c.save(); c.globalAlpha *= ss((k - 0.5) / 0.5); wash(c, [[565, 268], [715, 268], [668, 480], [612, 480]], BONE2, 0.3, 130, 4); c.strokeStyle = rgba(INK2, 0.6); c.lineWidth = 2; c.beginPath(); c.moveTo(565, 268); c.lineTo(715, 268); c.lineTo(668, 480); c.lineTo(612, 480); c.closePath(); c.stroke(); c.restore(); }
    bignum(c, k < 0.5 ? '5' : '5 → 1', 960, 380, 92, pr(t, P(17, 'five'), 0.5), RED);
    note(c, 'bottom of your spine', 300, 330, 560, 340, P(17, 'bottom') - 0.1, t, 36, INK2, 'center', 12);
    hand(c, 'one solid piece', 330, 520, 40, pr(t, P(18, 'solid') - 0.1, 0.8), RED);
  });
  fx(P(17, 'five'), 'brush', { d: 1 }); fx(P(18, 'join'), 'thump'); fx(P(18, 'solid'), 'pen', { d: 0.8 });

  // ---------------- hands and feet: 106 bones, more than half ----------------
  function handStrokes() {
    const S = [];
    for (let i = 0; i < 8; i++) S.push(mk(polar(-24 + (i % 4) * 16, 10 + Math.floor(i / 4) * 16, rnd(0, 6), 6, 0, 4), 14, i % 2 ? BONE : BONE2, { prof: 'leaf', nb: 0, a: 0.85 }));
    const base = [[-46, -2, -2.3], [-24, -10, -1.75], [-2, -14, -1.57], [20, -12, -1.4], [40, -6, -1.2]];
    base.forEach(([x, y, a], f) => {
      let px = x, py = y; const segs = f === 0 ? [44, 30, 24] : [62, 36, 24, 18];
      segs.forEach((L, j) => { const aa = a + (f === 0 ? 0.25 * j : 0); const s = mk(polar(px, py, aa, L, rnd(-2, 2), 5), j ? 8 : 10, BONE, { prof: 'even', nb: 0, a: 0.85 }); S.push(s); S.push(edgeOf(s, 1, 1, INK2, 0.5)); px += Math.cos(aa) * (L + 5); py += Math.sin(aa) * (L + 5); });
    });
    return S;
  }
  function footStrokes() {
    const S = [];
    S.push(mk(qcurve(-110, 20, -70, 10, 0, 5), 46, BONE2, { prof: 'leaf', nb: 3, a: 0.8 }));
    for (let i = 0; i < 6; i++) S.push(mk(polar(-62 + (i % 3) * 20, -8 + Math.floor(i / 3) * 22, rnd(0, 6), 8, 0, 4), 18, i % 2 ? BONE : BONE2, { prof: 'leaf', nb: 0, a: 0.85 }));
    for (let f = 0; f < 5; f++) {
      let px = -2, py = -20 + f * 13; const segs = f === 0 ? [70, 24, 20] : [62, 18, 14, 10];
      segs.forEach((L, j) => { const aa = 0.06 * (f - 2) + (j ? 0.05 : 0); const s = mk(polar(px, py, aa, L, rnd(-2, 2), 5), f === 0 ? 12 : 9, BONE, { prof: 'even', nb: 0, a: 0.85 }); S.push(s); S.push(edgeOf(s, 1, 1, INK2, 0.5)); px += Math.cos(aa) * (L + 4); py += Math.sin(aa) * (L + 4); });
    }
    return S;
  }
  scene(19, 20, 'wipe', (c, t) => {
    bg(c, 's11', (g) => { swatch(g, 360, 400, 190, 210, ROSE, 0.13, 141); swatch(g, 930, 420, 230, 150, SAGE, 0.14, 142); });
    paint(c, 'hand', 143, handStrokes, pr(t, P(19, 'hands') - 0.1, 1.0), 360, 470, 1.5);
    paint(c, 'foot', 144, footStrokes, pr(t, P(19, 'feet') - 0.1, 1.0), 900, 440, 1.5);
    mono(c, '27 + 27', 360, 640, 22, pr(t, P(19, 'hands'), 0.6)); mono(c, '26 + 26', 930, 640, 22, pr(t, P(19, 'feet'), 0.6));
    bignum(c, '106', 640, 160, 96, pr(t, P(19, 'one'), 0.5), RED);
    const pk = pr(t, P(20, 'more') - 0.1, 0.9);
    if (pk > 0) { c.save(); c.globalAlpha *= ss(pk); c.strokeStyle = rgba(INK2, 0.6); c.lineWidth = 1.6; c.beginPath(); c.arc(640, 330, 52, 0, 6.283); c.stroke(); c.beginPath(); c.moveTo(640, 330); c.arc(640, 330, 50, -Math.PI / 2, -Math.PI / 2 + 6.283 * 0.515 * eo(pk)); c.closePath(); c.fillStyle = rgba(RED, 0.45); c.fill(); c.restore(); }
    hand(c, 'more than half!', 640, 410, 38, pr(t, P(20, 'half') - 0.1, 0.8), INK2);
  });
  fx(P(19, 'hands') - 0.1, 'brush', { d: 1 }); fx(P(19, 'feet') - 0.1, 'brush', { d: 1 }); fx(P(19, 'one'), 'glock', { n: ['E5', 'A5'] }); fx(P(20, 'half'), 'pen', { d: 0.8 });
  // ================= CHAPTER 2: what bone is made of =================
  CH.push([21, 'II · what bone is made of']);
  scene(21, 21, 'turn', (c, t) => card(c, t, 21, 'two', 'What bone is made of', ROSE, 211), { still: true });
  fx(PS(21) - 0.05, 'turn');
  // collagen: two strands twisting round each other, laid as short leaf strokes along a sine
  function ropeStrokes(x0, x1, y, amp = 14, col1 = '#cf8f86', col2 = '#b0645c', step = 16) {
    const S = [];
    for (let x = x0; x < x1; x += step) for (const k of [0, 1]) {
      const yy = (xx) => y + Math.sin(xx * 0.045 + k * Math.PI) * amp, a = Math.atan2(yy(x + step) - yy(x), step);
      S.push(mk(polar(x, yy(x), a, step * 1.25, rnd(-2, 2), 4), 9, k ? col2 : col1, { prof: 'leaf', nb: 0, a: 0.8 }));
    }
    return S;
  }
  scene(22, 24, 'wipe', (c, t) => {
    bg(c, 's13', (g) => { swatch(g, 640, 390, 470, 120, ROSE, 0.12, 221); swatch(g, 1110, 140, 80, 50, BLUE, 0.16, 222); });
    hand(c, 'two very different things', 640, 150, 50, pr(t, P(22, 'two') - 0.1, 1));
    mono(c, '1 · collagen', 640, 250, 24, pr(t, P(23, 'collagen') - 0.1, 0.7), '#a0524a');
    paint(c, 'rope1', 223, () => ropeStrokes(250, 1030, 0, 18), pr(t, P(23, 'collagen') - 0.1, 1.6), 0, 390);
    note(c, 'a stretchy protein', 420, 540, 470, 405, P(24, 'stretchy') - 0.1, t, 38, INK2, 'center', 12);
    note(c, '...a bit like rope', 870, 560, 820, 405, P(24, 'rope') - 0.15, t, 38, '#a0524a', 'center', -12);
  });
  fx(P(22, 'two'), 'pen', { d: 1 }); fx(P(23, 'collagen') - 0.1, 'brush', { d: 1.6 }); fx(P(24, 'rope'), 'pen', { d: 0.7 });

  const BRICK = (() => { const r = H.rng(241), o = []; for (let row = 0; row < 2; row++) for (let x = 270; x < 1010; x += 42 + r() * 10) o.push({ x, y: 345 + row * 90 + (r() - 0.5) * 6, w: 30 + r() * 10, h: 22 + r() * 6, c: r() < 0.5 ? BLUE : '#b9c3c8' }); return o; })();
  function bricks(c, t0, d, t, list = BRICK, dx = 0, dy = 0) {
    list.forEach((b, i) => { const p = pr(t, t0 + (d * i) / list.length, 0.3); if (p <= 0) return; const w = b.w * eo(p), h = b.h * eo(p); c.save(); c.translate(dx, dy); wash(c, [[b.x - w / 2, b.y - h / 2], [b.x + w / 2, b.y - h / 2 + 1], [b.x + w / 2 - 1, b.y + h / 2], [b.x - w / 2 + 1, b.y + h / 2]], b.c, 0.85, 250 + i, 1.5); c.restore(); });
  }
  scene(25, 26, 'wipe', (c, t) => {
    bg(c, 's14', (g) => { swatch(g, 640, 390, 480, 170, BLUE, 0.1, 242); });
    for (let r = 0; r < 3; r++) paint(c, 'rope' + (r + 2), 243 + r, () => ropeStrokes(250, 1030, 0, 9, '#cf8f86', '#b0645c', 14), pr(t, PS(25) + r * 0.2, 0.9), 0, 300 + r * 90);
    bricks(c, P(26, 'packed') - 0.1, 1.6, t);
    mono(c, '2 · calcium mineral', 640, 190, 24, pr(t, P(25, 'mineral') - 0.1, 0.7), '#56707e');
    note(c, 'hard mineral', 330, 590, 380, 450, P(25, 'hard') - 0.1, t, 36, '#56707e', 'center', 10);
    note(c, 'like tiny bricks', 930, 600, 880, 455, P(26, 'tiny') - 0.1, t, 38, INK2, 'center', -10);
  });
  fx(PS(25), 'brush', { d: 1.2 }); fx(P(26, 'packed') - 0.1, 'patter', { d: 1.6 }); fx(P(26, 'tiny'), 'pen', { d: 0.7 });

  scene(27, 28, 'wipe', (c, t) => {
    bg(c, 's15', (g) => { for (let k = 0; k < 3; k++) swatch(g, 250 + k * 390, 380, 165, 150, [ROSE, BLUE, OCH][k], 0.12, 270 + k); });
    // rope alone sags and bends
    const sag = 60 * ss(ph(t, P(27, 'bend') - 0.2, P(27, 'bend') + 0.5));
    c.save(); const pa = pr(t, PS(27), 0.6); c.globalAlpha *= ss(pa); c.lineCap = 'round';
    for (const [col, off] of [['#cf8f86', 0], ['#b0645c', 6]]) { c.strokeStyle = rgba(col, 0.75); c.lineWidth = 7; c.beginPath(); c.moveTo(130, 330 + off); c.quadraticCurveTo(250, 330 + off + sag * 2, 370, 330 + off); c.stroke(); }
    c.restore(); paint(c, 'peg1', 271, () => [mk(qcurve(130, 300, 130, 360, 0, 4), 8, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(370, 300, 370, 360, 0, 4), 8, INK2, { prof: 'even', nb: 0, a: 0.7 })], pa);
    hand(c, 'rope alone: bends', 250, 520, 36, pr(t, P(27, 'bend') - 0.2, 0.8));
    // bricks alone shatter
    const sh = ss(ph(t, P(27, 'shatter') - 0.05, P(27, 'shatter') + 0.6)), r = H.rng(281);
    for (let i = 0; i < 9; i++) { const bx = 590 + (i % 3) * 50, by = 300 + Math.floor(i / 3) * 34, a = r() * 6.28, d = sh * (40 + r() * 60);
      if (pr(t, PS(27) + 0.4 + i * 0.05, 0.3) <= 0) continue; c.save(); c.translate(bx + Math.cos(a) * d, by + Math.sin(a) * d * 0.6 + sh * sh * 60); c.rotate(sh * (r() - 0.5) * 2); wash(c, [[-21, -14], [21, -14], [21, 14], [-21, 14]], i % 2 ? BLUE : '#b9c3c8', 0.85, 290 + i, 1.5); c.restore(); }
    if (sh > 0 && sh < 0.6) { c.save(); c.strokeStyle = rgba(INK, 0.7 * (1 - sh / 0.6)); c.lineWidth = 2; c.beginPath(); c.moveTo(620, 280); c.lineTo(645, 320); c.lineTo(630, 345); c.lineTo(660, 380); c.stroke(); c.restore(); }
    hand(c, 'bricks alone: shatter', 640, 520, 36, pr(t, P(27, 'shatter') - 0.2, 0.8));
    // together: tough and a little springy
    const tb = P(28, 'tough') - 0.1, flex = t > tb ? Math.sin((t - tb) * 9) * Math.exp(-(t - tb) * 1.6) * 0.09 : 0;
    c.save(); c.translate(1030, 340); c.transform(1, 0, 0, 1, 0, 0); c.rotate(0); c.scale(1, 1);
    c.translate(0, 0); c.setTransform(c.getTransform().multiply(new DOMMatrix([1, flex, 0, 1, 0, 0]))); paint(c, 'tbone', 282, BONEF(250, 64), pr(t, PS(28), 0.9), 0, 0); c.restore();
    arrow(c, 1030, 230, 1030, 290, pr(t, tb, 0.4), INK2, 4, 283);
    hand(c, 'together: tough + springy', 1030, 520, 36, pr(t, P(28, 'springy') - 0.4, 0.9), RED);
  });
  fx(P(27, 'bend') - 0.2, 'swish'); fx(P(27, 'shatter') - 0.05, 'shatter'); fx(P(28, 'tough') - 0.1, 'boing');

  // ---------------- the calcium bank ----------------
  const COINP = (u) => { const q = clamp(u); if (q < 0.4) { const k = q / 0.4; return [lerp(430, 560, k), lerp(380, 520, k)]; } const k = (q - 0.4) / 0.6; return [lerp(560, 1060, k), 520 - Math.sin(k * Math.PI) * 6]; };
  scene(29, 33, 'wipe', (c, t) => {
    bg(c, 's16', (g) => { swatch(g, 330, 340, 230, 170, OCH, 0.14, 291); band(g, 495, 545, ROSE, 0.0, 292); });
    paint(c, 'bankbone', 293, BONEF(380, 96), pr(t, PS(29), 1.1), 330, 350, 1, -0.35);
    note(c, 'a calcium bank', 330, 150, 330, 300, P(29, 'bank') - 0.15, t, 44, INK2, 'center', 10);
    bignum(c, '99%', 330, 560, 96, pr(t, P(30, 'ninety') - 0.1, 0.6), '#b07a1a');
    mono(c, "of your body's calcium", 330, 625, 18, pr(t, P(30, 'calcium') - 0.2, 0.7));
    // blood vessel to the heart
    const vp = pr(t, P(31, 'blood') - 0.3, 0.9);
    paint(c, 'vessel', 294, () => [mk(qcurve(540, 520, 1060, 520, -10, 16), 30, RED, { prof: 'even', nb: 6, a: 0.55 }), mk(qcurve(540, 532, 1060, 532, -10, 16), 8, '#a8331f', { prof: 'even', nb: 0, a: 0.4 })], vp);
    const hp = pr(t, P(33, 'heart') - 0.2, 0.6);
    if (hp > 0) { const k = eo(hp) * (1 + 0.05 * Math.sin(t * 7)); c.save(); c.translate(1110, 470); c.scale(k, k); wash(c, [[0, 30], [-50, -10], [-40, -50], [-10, -50], [0, -30], [10, -50], [40, -50], [50, -10]], RED, 0.7, 295, 3); c.restore(); }
    hand(c, 'heart & muscles', 1060, 600, 32, pr(t, P(33, 'heart') - 0.1, 0.9), RED);
    // blood calcium gauge dips, then the bones pay out
    const lowT = P(31, 'low'), payT = P(32, 'pay'), lvl = 0.75 - 0.45 * ss(ph(t, lowT - 0.4, lowT + 0.2)) + 0.45 * ss(ph(t, payT + 0.5, PE(33)));
    const gp = pr(t, PS(31), 0.5);
    if (gp > 0) { c.save(); c.globalAlpha *= ss(gp); c.strokeStyle = rgba(INK2, 0.6); c.lineWidth = 1.6; c.strokeRect(780, 220, 46, 180); wash(c, [[783, 397 - 174 * lvl], [823, 397 - 174 * lvl], [823, 397], [783, 397]], RED, 0.55, 296, 1.5); c.restore();
      mono(c, 'blood calcium', 803, 195, 16, gp); }
    hand(c, 'running low!', 940, 300, 36, pr(t, lowT - 0.1, 0.7), RED);
    for (let i = 0; i < 7; i++) { const u = ph(t, payT + i * 0.22, payT + i * 0.22 + 1.6); if (u <= 0 || u >= 1) continue; const [x, y] = COINP(u); c.save(); blob(c, x, y, 15, 15, OCH, 0.75, 297 + i, 0.05); c.restore(); mono(c, 'Ca', x, y, 13, 1, INK); }
    hand(c, 'pay some out', 560, 430, 34, pr(t, payT - 0.1, 0.7), '#b07a1a');
  });
  fx(PS(29), 'brush', { d: 1.1 }); fx(P(30, 'ninety') - 0.1, 'glock', { n: ['E5', 'B5'] }); fx(P(31, 'blood') - 0.3, 'brush', { d: 0.9 }); fx(P(31, 'low'), 'low');
  for (let i = 0; i < 7; i++) fx(P(32, 'pay') + i * 0.22, 'coin'); fx(P(33, 'heart') - 0.2, 'beat');

  // ================= CHAPTER 3: the demolition crew =================
  CH.push([34, 'III · the demolition crew']);
  scene(34, 34, 'turn', (c, t) => card(c, t, 34, 'three', 'The demolition crew', VIO, 341), { still: true });
  fx(PS(34) - 0.05, 'turn');
  const SURF = 430;
  const POCK = [
    { x: 640, d0: P(36, 'dissolve') - 0.1, d1: P(36, 'bone') + 0.2, f0: P(38, 'fill') - 0.1, f1: P(38, 'bone') + 0.4, D: 110 },
    { x: 330, d0: P(39, 'dig') - 0.1, d1: P(39, 'dig') + 0.45, f0: Pn(39, 'fill', 1) - 0.1, f1: Pn(39, 'fill', 1) + 0.5, D: 85 },
    { x: 950, d0: Pn(39, 'dig', 2) - 0.1, d1: Pn(39, 'dig', 2) + 0.4, f0: Pn(39, 'fill', 2) - 0.1, f1: Pn(39, 'fill', 2) + 0.6, D: 85 },
  ];
  scene(35, 39, 'wipe', (c, t) => {
    bg(c, 's18', (g) => {
      g.fillStyle = rgba('#f3d5c4', 0.6); g.fillRect(0, 0, W, SURF); band(g, -60, SURF - 4, ROSE, 0.22, 351, 4);
      band(g, SURF, 780, BONE, 0.85, 352, 2); band(g, SURF + 40, 780, BONE2, 0.25, 353, 8);
      const r = H.rng(354); for (let i = 0; i < 70; i++) { const x = r() * W, y = SURF + 60 + r() * 260; blob(g, x, y, 8 + r() * 18, 5 + r() * 10, PAPER, 0.7, 360 + i, 0.3); }
      g.strokeStyle = rgba(INK2, 0.5); g.lineWidth = 2; g.beginPath(); for (let x = -10; x <= W + 10; x += 20) g.lineTo(x, SURF + Math.sin(x * 0.03) * 2); g.stroke();
    });
    for (const q of POCK) {
      const d = q.D * eio(ph(t, q.d0, q.d1)), f = q.D * eio(ph(t, q.f0, q.f1)), w = 75; if (d <= 0) continue;
      c.save(); c.beginPath(); c.ellipse(q.x, SURF, w, d, 0, 0, Math.PI); c.closePath(); c.fillStyle = rgba('#f3d5c4', 1); c.fill(); c.clip();
      if (f > 0) { c.fillStyle = rgba(NEWB, 1); c.fillRect(q.x - w - 2, SURF + d - f, 2 * w + 4, f + 2); c.strokeStyle = rgba(BONE2, 0.6); c.lineWidth = 1.2; for (let y = SURF + d - 6; y > SURF + d - f; y -= 9) { c.beginPath(); c.ellipse(q.x, SURF, w * 0.95, y - SURF, 0, 0.25, Math.PI - 0.25); c.stroke(); } }
      c.restore();
      c.save(); c.strokeStyle = rgba(INK2, 0.55); c.lineWidth = 1.6; c.beginPath(); c.ellipse(q.x, SURF, w, d, 0, 0.05, Math.PI - 0.05); c.stroke(); c.restore();
      // osteoclast: a big many-nucleus cell that sits in the pocket while it digs, then leaves
      const on = ph(t, q.d0 - 0.5, q.d0), off = ph(t, q.d1, q.d1 + 0.7);
      if (on > 0 && off < 1) { const y = SURF - 30 + d * 0.35 - off * 200, x = q.x + off * 120; c.save(); c.globalAlpha *= ss(on) * (1 - off); cell(c, x, y, 48, VIO, 1, 4, 370 + q.x); c.restore(); }
      // osteoblasts: small builders that line the fill front
      const bo = ph(t, q.f0 - 0.5, q.f0), bf = ph(t, q.f1, q.f1 + 0.8);
      if (bo > 0 && bf < 1) for (let j = 0; j < 4; j++) { const a = Math.PI * (0.2 + 0.2 * j), yy = SURF + (d - f) * Math.sin(a) - 14, xx = q.x + Math.cos(a) * w * 0.8; c.save(); c.globalAlpha *= ss(bo) * (1 - bf); cell(c, xx, yy - bf * 120, 15, TEAL, 1, 1, 380 + j + q.x); c.restore(); }
    }
    mono(c, 'inside every bone · two crews take turns', 640, 70, 20, pr(t, PS(35), 0.9));
    note(c, 'osteoclast: dissolves old bone', 1000, 170, 690, 400, P(36, 'osteoclasts') - 0.1, t, 36, VIO, 'center', -16);
    note(c, 'osteoblasts: build new bone', 300, 170, 600, 400, P(37, 'osteoblasts') - 0.1, t, 36, TEAL, 'center', 16);
    hand(c, 'dig', 330, 300, 54, pr(t, P(39, 'dig') - 0.1, 0.35), VIO); hand(c, 'fill', 330, 640, 54, pr(t, Pn(39, 'fill', 1) - 0.1, 0.35), TEAL);
    hand(c, 'dig', 950, 300, 54, pr(t, Pn(39, 'dig', 2) - 0.1, 0.35), VIO); hand(c, 'fill', 950, 640, 54, pr(t, Pn(39, 'fill', 2) - 0.1, 0.35), TEAL);
  });
  for (const q of POCK) { fx(q.d0, 'dig', { d: q.d1 - q.d0 }); fx(q.f0, 'fill', { d: q.f1 - q.f0 }); }
  fx(P(36, 'osteoclasts') - 0.1, 'pen', { d: 1 }); fx(P(37, 'osteoblasts') - 0.1, 'pen', { d: 1 });

  // ---------------- ~10% a year: band by band the skeleton is repainted ----------------
  scene(40, 43, 'wipe', (c, t) => {
    bg(c, 's20', (g) => { swatch(g, 640, 360, 230, 270, SAGE, 0.12, 401); band(g, 625, 760, BONE, 0.16, 402); });
    const yr = 10 * ph(t, P(40, 'ten') - 0.2, P(43, 'years'));
    const sx = 640, sy = 350, sc = 1.12;
    paint(c, 'skelOld', 403, SKEL({ col: '#c4beb0', sh: '#9a968c' }), pr(t, PS(40), 0.9), sx, sy, sc);
    for (let k = 0; k < 10; k++) {
      const a = clamp(yr - k); if (a <= 0) break;
      const y0 = sy - 240 * sc + k * 46 * sc;
      c.save(); c.beginPath(); c.rect(sx - 140, y0, 280, 46 * sc + 1); c.clip(); c.globalAlpha *= ss(a); paint(c, 'skelNew', 404, SKEL({ col: '#ecc684', sh: '#d08f3c' }), 1, sx, sy, sc); c.restore();
    }
    for (let k = 0; k < 10; k++) { const x = 330 + k * 69, on = yr > k + 0.5; if (pr(t, PS(40), 0.6) <= 0) break; c.save(); c.fillStyle = rgba(on ? OCH : INK2, on ? 0.8 : 0.35); c.beginPath(); c.arc(x, 670, on ? 7 : 4, 0, 6.283); c.fill(); c.restore(); mono(c, 'yr ' + (k + 1), x, 695, 13, pr(t, PS(40) + k * 0.05, 0.4)); }
    hand(c, '~10% rebuilt every year', 1020, 210, 40, pr(t, P(40, 'ten') - 0.1, 0.9), '#b07a1a');
    bignum(c, 'year ' + Math.max(1, Math.min(10, Math.ceil(yr))), 230, 330, 54, pr(t, P(40, 'ten'), 0.4), INK2);
    hand(c, 'a brand new skeleton', 1020, 440, 40, pr(t, P(42, 'brand') - 0.1, 0.9), RED);
    hand(c, 'about every 10 years', 1020, 490, 40, pr(t, P(43, 'every') - 0.1, 0.8), RED);
  });
  fx(PS(40), 'brush', { d: 0.9 }); for (let k = 0; k < 10; k++) fx(P(40, 'ten') - 0.2 + (k + 0.5) * (P(43, 'years') - P(40, 'ten') + 0.2) / 10, 'tick'); fx(P(42, 'brand') - 0.1, 'glock', { n: ['C5', 'E5', 'G5'] });

  // ---------------- a broken bone heals: crack, soft bridge, hard bone ----------------
  const CRACK = [[628, 300], [646, 330], [630, 352], [652, 380], [636, 410], [650, 440]];
  scene(44, 46, 'wipe', (c, t) => {
    bg(c, 's21', (g) => { swatch(g, 640, 370, 470, 150, ROSE, 0.1, 441); band(g, 610, 760, SAGE, 0.14, 442); });
    const heal = ss(ph(t, P(46, 'turns'), P(46, 'again') + 0.3)), gap = lerp(16, 0, ss(ph(t, P(45, 'soft'), P(45, 'crack'))));
    const bp = pr(t, PS(44), 0.9);
    for (const side of [-1, 1]) { c.save(); c.beginPath(); if (side < 0) { c.moveTo(0, 0); CRACK.forEach(([x, y], i) => c.lineTo(x, i ? y : 0)); c.lineTo(CRACK[5][0], HH); c.lineTo(0, HH); } else { c.moveTo(W, 0); CRACK.forEach(([x, y], i) => c.lineTo(x, i ? y : 0)); c.lineTo(CRACK[5][0], HH); c.lineTo(W, HH); } c.closePath(); c.clip(); c.translate(side * gap, 0); paint(c, 'brk', 443, BONEF(760, 150), bp, 640, 370); c.restore(); }
    if (heal < 0.9 && bp >= 1) { c.save(); c.strokeStyle = rgba(INK, 0.7 * (1 - heal)); c.lineWidth = 2; c.beginPath(); CRACK.forEach(([x, y], i) => i ? c.lineTo(x, y) : c.moveTo(x, y)); c.stroke(); c.restore(); }
    const bs = pr(t, P(45, 'soft') - 0.1, 0.9);
    if (bs > 0) { const k = eo(bs); c.save(); c.globalAlpha *= 1 - heal * 0.9; blob(c, 640, 370, 70 * k, 70 * k, ROSE, 0.7, 444, 0.15); blob(c, 640, 370, 50 * k, 52 * k, '#e7b3a3', 0.5, 445, 0.2); c.restore();
      if (heal > 0) { c.save(); c.globalAlpha *= heal; blob(c, 640, 368, lerp(70, 46, heal), lerp(70, 50, heal), BONE, 0.8, 446, 0.08); blob(c, 640, 380, 40, 30, BONE2, 0.25, 447, 0.1); c.restore(); } }
    note(c, 'crack', 470, 170, 632, 300, P(44, 'broken') - 0.1, t, 40, INK2, 'center', 10);
    note(c, 'soft bridge', 850, 580, 690, 420, P(45, 'soft') - 0.1, t, 40, '#b0645c', 'center', -12);
    hand(c, 'hard bone again!', 640, 640, 44, pr(t, P(46, 'hard') - 0.1, 0.8), RED);
  });
  fx(PS(44), 'brush', { d: 0.9 }); fx(P(44, 'broken'), 'crack'); fx(P(45, 'soft') - 0.1, 'brush', { d: 0.9 }); fx(P(46, 'hard') - 0.1, 'glock', { n: ['G4', 'D5'] });
  // ================= CHAPTER 4: the blood factory =================
  CH.push([47, 'IV · the blood factory']);
  scene(47, 47, 'turn', (c, t) => card(c, t, 47, 'four', 'The blood factory', RED, 471), { still: true });
  fx(PS(47) - 0.05, 'turn');
  scene(48, 50, 'wipe', (c, t) => {
    bg(c, 's23', (g) => { swatch(g, 330, 370, 170, 300, BONE, 0.12, 481); swatch(g, 870, 380, 330, 190, ROSE, 0.12, 482); });
    paint(c, 'femur', 483, BONEF(560, 120), pr(t, PS(48), 1.1), 300, 370, 1, Math.PI / 2 - 0.06);
    mono(c, 'thigh bone (femur)', 300, 690, 18, pr(t, P(48, 'thigh') - 0.1, 0.7));
    // opened lengthwise: hard wall, spongy ends, marrow in the middle
    const op = pr(t, PS(49) - 0.3, 0.9);
    if (op > 0) {
      c.save(); c.translate(870, 380); c.rotate(-0.04);
      paint(c, 'femurO', 484, BONEF(600, 200), op, 0, 0);
      const mp = pr(t, P(49, 'marrow') - 0.25, 1.0);
      if (mp > 0) { c.beginPath(); c.ellipse(0, -4, 250, 44, 0, 0, 6.283); c.clip(); const k = eo(mp); blob(c, -250 + 250 * k, -4, 250 * k, 46, MAR, 0.7, 485, 0.08); blob(c, -200 + 200 * k, 6, 190 * k, 26, YEL, 0.35, 486, 0.15); for (let i = 0; i < 26; i++) { const r = H.rng(490 + i); blob(c, (r() - 0.5) * 480 * k, (r() - 0.5) * 60, 4 + r() * 4, 3 + r() * 3, RED, 0.5, 500 + i, 0.2); } }
      c.restore();
      for (const ex of [-1, 1]) { if (op < 1) break; const r = H.rng(510 + ex); for (let i = 0; i < 18; i++) blob(c, 870 + ex * (270 + r() * 40), 380 + (r() - 0.5) * 90, 5 + r() * 5, 4 + r() * 4, BONE3, 0.35, 520 + i + ex * 30, 0.3); }
    }
    arrow(c, 400, 370, 560, 380, pr(t, PS(49) - 0.4, 0.5), INK2, 4, 487);
    note(c, 'soft marrow', 870, 170, 860, 360, P(49, 'marrow') - 0.1, t, 42, MAR, 'center', -12);
    note(c, 'spongy ends', 1130, 590, 1150, 420, P(49, 'middle'), t, 32, BONE3, 'center', 10);
    hand(c, '...a factory!', 760, 590, 48, pr(t, P(50, 'factory') - 0.15, 0.7), RED);
  });
  fx(PS(48), 'brush', { d: 1.1 }); fx(PS(49) - 0.3, 'brush', { d: 0.9 }); fx(P(49, 'marrow') - 0.25, 'wet', { d: 1 }); fx(P(50, 'factory') - 0.15, 'pen', { d: 0.7 });

  scene(51, 53, 'wipe', (c, t) => {
    bg(c, 's24', (g) => { swatch(g, 640, 400, 560, 260, MAR, 0.12, 511); swatch(g, 640, 400, 180, 150, YEL, 0.14, 512); });
    const r0 = pr(t, PS(51) - 0.2, 0.6), wob = Math.sin(t * 3) * 2;
    cell(c, 640, 400 + wob, 62, ROSE, r0, 1, 513);
    mono(c, 'marrow stem cell', 640, 500, 16, r0);
    const outs = [{ x: 260, y: 260, t0: P(51, 'red') - 0.2 }, { x: 1020, y: 260, t0: P(52, 'white') - 0.2 }, { x: 640, y: 640, t0: P(53, 'platelets') - 0.2 }];
    outs.forEach((o, j) => { arrow(c, lerp(640, o.x, 0.25), lerp(400, o.y, 0.25), lerp(640, o.x, 0.66), lerp(400, o.y, 0.66), pr(t, o.t0, 0.4), INK2, 4, 514 + j); });
    for (let i = 0; i < 4; i++) rbc(c, 230 + (i % 2) * 70 - 20, 230 + Math.floor(i / 2) * 64, 26, pr(t, outs[0].t0 + 0.2 + i * 0.12, 0.4), 520 + i, i * 0.4);
    for (let i = 0; i < 2; i++) { const p = pr(t, outs[1].t0 + 0.2 + i * 0.2, 0.4); cell(c, 990 + i * 74, 250 + i * 30, 32, '#b8c4dc', p, 3, 530 + i, '#5a5f9e'); }
    for (let i = 0; i < 7; i++) { const p = pr(t, outs[2].t0 + 0.2 + i * 0.07, 0.3); const r = H.rng(540 + i); blob(c, 560 + i * 26, 630 + (r() - 0.5) * 30, 7 * eo(p), 5 * eo(p), '#c9a0c8', 0.75, 541 + i, 0.3); }
    hand(c, 'red blood cells', 260, 120, 40, pr(t, P(51, 'red') - 0.1, 0.8), RED);
    hand(c, 'white cells: fight germs', 1010, 120, 38, pr(t, P(52, 'white') - 0.1, 0.9), '#5a5f9e');
    hand(c, 'platelets: plug cuts', 960, 640, 38, pr(t, P(53, 'platelets') - 0.1, 0.9), '#8a5a8a', 'left');
  });
  fx(PS(51) - 0.2, 'brush', { d: 0.6 }); fx(P(51, 'red') - 0.2, 'pop'); fx(P(52, 'white') - 0.2, 'pop'); fx(P(53, 'platelets') - 0.2, 'patter', { d: 0.6 });

  scene(54, 56, 'wipe', (c, t) => {
    bg(c, 's25', (g) => { band(g, 300, 470, ROSE, 0.35, 551, 10); band(g, 318, 452, RED, 0.12, 552, 6); });
    const k = ss(ph(t, PS(54), P(55, 'billion'))), n = Math.floor(10 + 60 * k);
    for (let i = 0; i < n; i++) { const r = H.rng(560 + i), sp = 90 + r() * 80, x = ((r() * 1500 + (t - PS(54)) * sp) % 1500) - 110, y = 330 + r() * 110; rbc(c, x, y, 14 + r() * 7, pr(t, PS(54) + i * 0.02, 0.3), 600 + i, r() * 3); }
    hand(c, 'how many? scientists estimate...', 640, 150, 40, pr(t, P(54, 'how') - 0.1, 1.2));
    bignum(c, '200,000,000,000', 640, 560, 80, pr(t, P(55, 'two') - 0.1, 0.6), RED);
    mono(c, 'red blood cells', 640, 625, 20, pr(t, P(55, 'red') - 0.1, 0.6));
    hand(c, 'every single day!', 640, 680, 42, pr(t, P(56, 'every') - 0.1, 0.8), INK2);
  });
  fx(PS(54), 'flow', { d: PE(56) - PS(54) }); fx(P(55, 'two') - 0.1, 'glock', { n: ['C5', 'G5', 'C6'] }); fx(P(56, 'every') - 0.1, 'pen', { d: 0.8 });

  // ================= CHAPTER 5: use it or lose it =================
  CH.push([57, 'V · use it or lose it']);
  scene(57, 57, 'turn', (c, t) => card(c, t, 57, 'five', 'Use it or lose it', SAGE, 571), { still: true });
  fx(PS(57) - 0.05, 'turn');
  scene(58, 60, 'wipe', (c, t) => {
    bg(c, 's27', (g) => { swatch(g, 360, 380, 230, 170, SAGE, 0.14, 581); swatch(g, 920, 380, 230, 170, BLUE, 0.13, 582); });
    hand(c, 'your bones listen', 640, 110, 50, pr(t, P(58, 'listen') - 0.1, 0.9));
    const up = ss(ph(t, P(59, 'build') - 0.2, P(59, 'up') + 0.5)), dn = ss(ph(t, P(60, 'let') - 0.2, P(60, 'go') + 0.6));
    c.save(); c.translate(360, 380); c.scale(1 + 0.08 * up, 1 + 0.4 * up); paint(c, 'pb1', 583, BONEF(320, 80), pr(t, PS(58), 0.9), 0, 0); c.restore();
    c.save(); c.translate(920, 380); c.scale(1, 1 - 0.35 * dn); c.globalAlpha *= 1 - 0.35 * dn; paint(c, 'pb2', 584, BONEF(320, 80), pr(t, PS(58) + 0.3, 0.9), 0, 0); c.restore();
    if (dn > 0) for (let i = 0; i < 9; i++) { const r = H.rng(590 + i); blob(c, 830 + r() * 180, 372 + (r() - 0.5) * 22, 6 * dn, 3 * dn, PAPER, 0.8, 591 + i, 0.3); }
    for (let i = 0; i < 3; i++) { arrow(c, 280 + i * 80, 240, 280 + i * 80, 315, pr(t, P(59, 'push') - 0.1 + i * 0.1, 0.35), INK2, 4, 600 + i); arrow(c, 280 + i * 80, 520, 280 + i * 80, 445, pr(t, P(59, 'push') + i * 0.1, 0.35), INK2, 4, 610 + i); }
    hand(c, 'push → build up', 360, 610, 40, pr(t, P(59, 'build') - 0.2, 0.8), '#5e7a52');
    hand(c, 'z z z', 1010, 270, 40, pr(t, P(60, 'rest') - 0.1, 0.6), BLUE);
    hand(c, 'rest → let go', 920, 610, 40, pr(t, P(60, 'let') - 0.2, 0.8), '#56707e');
  });
  fx(PS(58), 'brush', { d: 1.2 }); fx(P(59, 'push') - 0.1, 'thump'); fx(P(59, 'build'), 'glock', { n: ['C5', 'G5'] }); fx(P(60, 'let'), 'low');

  function astroStrokes() {
    const S = [], SUIT = '#e9e4da', SH = '#a9a49a';
    S.push(mk(qcurve(-6, -10, 6, 70, 0, 6), 64, SUIT, { prof: 'even', a: 0.95, nb: 5 }));
    S.push(mk(qcurve(-20, -4, -16, 66, 0, 6), 18, SH, { prof: 'even', a: 0.35, nb: 0 }));
    for (const sx of [-1, 1]) { S.push(mk(qctrl(sx * 30, 0, sx * 70, 10, sx * 80, 50, 8), 22, SUIT, { prof: 'even', a: 0.95, nb: 3 })); S.push(mk(qctrl(sx * 14, 70, sx * 30, 110, sx * 40, 140, 8), 26, SUIT, { prof: 'even', a: 0.95, nb: 3 })); S.push(mk(polar(sx * 40, 140, Math.PI / 2, 14, 0, 4), 26, SH, { prof: 'leaf', a: 0.8, nb: 0 })); }
    for (let k = 0; k < 6; k++) { const a = (k / 6) * 6.283; S.push(mk(arcPts(0, -48, 22, a, a + 1.4, 8), 28, SUIT, { prof: 'brush', a: 0.9, nb: 3 })); }
    S.push(mk(qcurve(-18, -52, 18, -52, 6, 6), 22, OCH, { prof: 'leaf', a: 0.9, nb: 0 }));
    S.push(mk(arcPts(0, -48, 38, -3.6, 0.5, 18), 2, INK2, { prof: 'even', nb: 0, a: 0.6 }));
    S.push(mk(qcurve(-28, 10, 28, 10, 0, 4), 18, BLUE, { prof: 'even', a: 0.7, nb: 0 }));
    return S;
  }
  scene(61, 62, 'wipe', (c, t) => {
    bg(c, 's28', (g) => { band(g, -80, 600, NAVY, 0.9, 611, 10); band(g, -80, 380, '#1f2842', 0.5, 612, 20); const r = H.rng(613); for (let i = 0; i < 70; i++) blob(g, r() * 820, r() * 560, 1.5 + r() * 2.5, 1.5 + r() * 2.5, PAPER, 0.9, 620 + i, 0.2); wash(g, arcPts(400, 1300, 900, -Math.PI, 0, 40), '#5f8f86', 0.75, 614, 6); { const bp = blobPts(1030, 360, 230, 290, 615, 40, 0.06); g.beginPath(); bp.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.closePath(); g.save(); g.clip(); g.drawImage(paperL(), 0, 0); g.restore(); wash(g, bp, BONE, 0.25, 616, 2); } });
    const tt = t - PS(61);
    paint(c, 'astro', 617, astroStrokes, pr(t, PS(61), 1.0), 400 + tt * 6, 300 + Math.sin(tt * 0.9) * 12, 1.3, -0.3 + Math.sin(tt * 0.6) * 0.15);
    // the note card: a hip bone that thins month by month
    const m = ph(t, P(62, 'one'), PE(62) + 0.6);
    paint(c, 'pelvis', 618, () => { const S = []; for (const sx of [-1, 1]) { S.push(mk(qctrl(sx * 6, -10, sx * 80, -60, sx * 50, 30, 12), 46, BONE, { prof: 'leaf', a: 0.75, nb: 4 })); S.push(mk(arcPts(sx * 30, 40, 18, 0, 6.28, 12), 8, BONE, { prof: 'even', a: 0.8, nb: 0 })); } S.push(mk(qcurve(0, -50, 0, 40, 0, 6), 22, BONE2, { prof: 'leaf', a: 0.8, nb: 0 })); return S; }, pr(t, PS(61) + 0.3, 1.0), 1030, 330, 1.2, 0, 1 - 0.3 * m);
    mono(c, 'hip bone in space', 1030, 170, 18, pr(t, PS(61) + 0.3, 0.7));
    bignum(c, '−1%', 1030, 500, 84, pr(t, P(62, 'one') - 0.1, 0.5), RED);
    hand(c, 'each month', 1030, 570, 40, pr(t, P(62, 'month') - 0.2, 0.7), INK2);
    txt(c, 'floating = no push on the bones', 400, 650, FS.hand(40), rgba(PAPER, 0.95), pr(t, P(61, 'floating') - 0.1, 0.9), 'center', false);
  });
  fx(PS(61), 'space', { d: PE(62) - PS(61) }); fx(P(62, 'one') - 0.1, 'glock', { n: ['A4', 'E4'] });

  scene(63, 65, 'wipe', (c, t) => {
    bg(c, 's29', (g) => { swatch(g, 480, 390, 140, 250, BLUE, 0.12, 631); swatch(g, 800, 390, 160, 250, OCH, 0.13, 632); band(g, 640, 760, SAGE, 0.18, 633); });
    mono(c, 'studies of tennis players', 640, 70, 22, pr(t, P(63, 'studies') - 0.1, 0.9));
    paint(c, 'arm1', 634, BONEF(420, 58), pr(t, PS(63) + 0.2, 1.0), 480, 380, 1, Math.PI / 2);
    paint(c, 'arm2', 635, BONEF(420, 84), pr(t, PS(63) + 0.5, 1.0), 800, 380, 1, Math.PI / 2);
    paint(c, 'racket', 636, () => [mk(arcPts(0, -90, 52, 0, 6.3, 28, 72), 7, RED, { prof: 'even', nb: 3, a: 0.8 }), mk(qcurve(0, -18, 0, 120, 0, 8), 14, INK2, { prof: 'even', nb: 3, a: 0.75 }), ...[-30, -10, 10, 30].map((x) => mk(qcurve(x, -150, x, -30, 0, 6), 1.5, INK2, { prof: 'even', nb: 0, a: 0.4 })), ...[-130, -105, -80, -55].map((y) => mk(qcurve(-44, y, 44, y, 0, 6), 1.5, INK2, { prof: 'even', nb: 0, a: 0.4 }))], pr(t, P(64, 'racket') - 0.2, 0.8), 1040, 380, 1, 0.25);
    const bk = pr(t, P(64, 'thicker') - 0.15, 0.5);
    if (bk > 0) { c.save(); c.globalAlpha *= ss(bk); c.strokeStyle = rgba(RED, 0.8); c.lineWidth = 2; for (const [x0, x1] of [[766, 834]]) { c.beginPath(); c.moveTo(x0, 600); c.lineTo(x0, 620); c.lineTo(x1, 620); c.lineTo(x1, 600); c.stroke(); } c.strokeStyle = rgba(INK2, 0.6); c.beginPath(); c.moveTo(456, 600); c.lineTo(456, 620); c.lineTo(504, 620); c.lineTo(504, 600); c.stroke(); c.restore(); }
    hand(c, 'racket arm: thicker!', 800, 670, 40, pr(t, P(64, 'thicker') - 0.15, 0.8), RED);
    hand(c, 'other arm', 480, 670, 40, pr(t, P(65, 'other') - 0.15, 0.7), INK2);
  });
  fx(PS(63) + 0.2, 'brush', { d: 1.3 }); fx(P(64, 'racket') - 0.2, 'thock'); fx(P(64, 'thicker') - 0.15, 'pen', { d: 0.8 });

  const STEP = (k) => [180 + k * 150, 640 - k * 80];
  scene(66, 67, 'wipe', (c, t) => {
    bg(c, 's30', (g) => { for (let k = 0; k < 6; k++) { const [x, y] = STEP(k); wash(g, [[x - 10, y], [x + 150, y], [x + 150, 780], [x - 10, 780]], k % 2 ? SAGE : mixc(SAGE, BONE, 0.5), 0.35, 661 + k, 3); } swatch(g, 1100, 140, 120, 80, OCH, 0.16, 668); });
    const words = [[P(66, 'jump'), 'jump'], [P(66, 'run'), 'run'], [P(66, 'climb'), 'climb']];
    for (let k = 0; k < 6; k++) { const tk = P(66, 'jump') - 0.2 + k * 0.38, [x, y] = STEP(k); if (t > tk) { c.save(); c.globalAlpha *= ss(pr(t, tk, 0.25)); blob(c, x + 50, y - 8, 14, 7, BONE3, 0.6, 670 + k, 0.2); blob(c, x + 90, y - 12, 14, 7, BONE3, 0.6, 680 + k, 0.2); c.restore(); } }
    words.forEach(([tw, wd], j) => { const [x, y] = STEP(j * 2); hand(c, wd + '!', x + 70, y - 60, 40, pr(t, tw - 0.1, 0.5), INK2); });
    paint(c, 'skelA', 31, SKEL({}), pr(t, P(67, 'message') - 0.4, 0.8), 1080, 210, 0.42);
    note(c, 'stay strong!', 870, 110, 1030, 170, P(67, 'stay') - 0.2, t, 42, RED, 'center', -10);
    hand(c, 'every step is a little message', 470, 160, 38, pr(t, P(67, 'message') - 0.1, 1.0), INK2);
  });
  fx(P(66, 'jump') - 0.2, 'steps', { n: 6, d: 0.38 }); fx(P(67, 'message') - 0.4, 'brush', { d: 0.8 }); fx(P(67, 'stay') - 0.2, 'glock', { n: ['C5', 'E5', 'G5', 'C6'] });

  // ---------------- ending: not a dead frame; mist closes in on one tiny pocket ----------------
  scene(68, 70, 'mist', (c, t) => {
    bg(c, 's31', (g) => { swatch(g, 640, 380, 300, 300, ROSE, 0.13, 681); band(g, 640, 760, SAGE, 0.18, 682); });
    paint(c, 'skelA', 31, SKEL({}), pr(t, PS(68), 1.6), 640, 400, 1.3);
    const pa = P(69, 'living');
    if (t > pa) { const k = 0.5 + 0.5 * Math.sin((t - pa) * 4); c.save(); c.globalAlpha *= ss(pr(t, pa, 0.6)); blob(c, 640, 268, 14 + 5 * k, 13 + 5 * k, RED, 0.55, 683); c.restore(); }
    hand(c, 'not a dead frame', 300, 200, 44, pr(t, P(68, 'dead') - 0.2, 0.8), INK2);
    hand(c, 'living + growing', 990, 200, 48, pr(t, pa - 0.1, 0.9), RED);
    const cl = ss(ph(t, P(70, 'quietly'), P(70, 'pocket')));
    if (cl > 0) { const g = c.createRadialGradient(640, 330, lerp(900, 70, cl), 640, 330, lerp(1000, 190, cl)); g.addColorStop(0, rgba(PAPER, 0)); g.addColorStop(1, rgba(PAPER, 1)); c.fillStyle = g; c.fillRect(-100, -100, W + 200, HH + 200); }
    if (cl > 0.6) { const q = (t % 1.6) / 1.6; c.save(); c.globalAlpha *= (cl - 0.6) / 0.4 * (1 - q); blob(c, 640, 330, 10 + 14 * q, 10 + 14 * q, TEAL, 0.5, 684); c.restore(); }
    hand(c, 'one tiny pocket at a time', 640, 560, 44, pr(t, P(70, 'one') - 0.1, 1.0), INK2);
  });
  fx(PS(68), 'brush', { d: 1.6 }); fx(P(69, 'living') - 0.1, 'glock', { n: ['E5', 'A5'] }); fx(P(70, 'quietly'), 'mist', { d: 2 });

  CH.push([68, '']);
  scene(71, 72, 'turn', (c, t) => {
    bg(c, 's32', (g) => { swatch(g, 640, 380, 360, 180, LIV, 0.08, 711); });
    mono(c, 'next time', 640, 120, 24, pr(t, PS(71), 0.5));
    title(c, 'Your liver', 640, 200, 72, pr(t, P(71, 'liver') - 0.2, 0.9));
    const lp = pr(t, P(71, 'liver'), 2.6);
    if (lp > 0) { const k = eo(lp); blob(c, 560, 400, 220 * k, 110 * k, LIV, 0.6, 712, 0.1); blob(c, 760, 420, 130 * k, 80 * k, LIV, 0.55, 713, 0.12); blob(c, 600, 380, 150 * k, 60 * k, ROSE, 0.25, 714, 0.15); }
    hand(c, 'the organ with hundreds of jobs', 640, 600, 42, pr(t, P(72, 'hundreds') - 0.2, 1.0), RED);
  });
  fx(PS(71) - 0.05, 'turn'); fx(P(71, 'liver'), 'wet', { d: 2.6 }); fx(P(72, 'hundreds') - 0.2, 'pen', { d: 1 });

  // ================= chapter tag, transitions, frame =================
  function header(c, t) {
    for (let j = 0; j < CH.length; j++) {
      const st = PE(CH[j][0]) + 0.3, en = j + 1 < CH.length ? PE(CH[j + 1][0] - 1) : DURATION;
      if (t >= st && t < en && CH[j][1]) {
        const a = pr(t, st, 0.8) * (1 - pr(t, en - 0.4, 0.4));
        c.save(); c.globalAlpha *= a; blob(c, 34, 38, 6, 6, RED, 0.7, 3); c.restore();
        hand(c, CH[j][1], 50, 38, 26, pr(t, st, 0.9), INK2, 'left');
      }
    }
  }
  function drawScene(c, sc, t) {
    c.save();
    if (!sc.still) { const nx = SC[SC.indexOf(sc) + 1], end = nx ? nx.s + 1 : DURATION, z = 1 + 0.035 * ph(t, sc.s, end); c.translate(640, 380); c.scale(z, z); c.translate(-640, -380); }
    sc.draw(c, t); c.restore();
  }
  function wavyX(y, e, seed) { return -70 + (W + 140) * e + Math.sin(y * 0.021 + seed) * 22 + Math.sin(y * 0.067 + seed * 2) * 9; }
  function explainer(ctx, Wd, Hd, t) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    let cur = 0; for (let i = 0; i < SC.length; i++) if (t >= SC[i].s) cur = i;
    const s = SC[cur], d = TRD[s.tr] || 0, u = cur > 0 && d > 0 ? (t - s.s) / d : 1;
    ctx.fillStyle = PAPER; ctx.fillRect(0, 0, W, HH);
    if (u < 1) {
      const prev = SC[cur - 1], e = eio(clamp(u));
      if (s.tr === 'wipe') { // brush-edge wipe: a wavy wet edge sweeps across and the new page is painted behind it
        drawScene(ctx, prev, t);
        ctx.save(); ctx.beginPath(); ctx.moveTo(-80, -10); for (let y = -10; y <= HH + 10; y += 12) ctx.lineTo(wavyX(y, e, s.seed), y); ctx.lineTo(-80, HH + 10); ctx.closePath(); ctx.clip(); drawScene(ctx, s, t); ctx.restore();
        ctx.save(); ctx.beginPath(); for (let y = -10; y <= HH + 10; y += 12) { const x = wavyX(y, e, s.seed); y < 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.lineWidth = 7; ctx.strokeStyle = rgba(BONE3, 0.12); ctx.stroke(); ctx.lineWidth = 2; ctx.strokeStyle = rgba(BONE3, 0.18); ctx.stroke(); ctx.restore();
      } else if (s.tr === 'turn') { // a new sheet slides over the journal
        drawScene(ctx, prev, t); ctx.fillStyle = `rgba(60,45,30,${0.18 * e})`; ctx.fillRect(0, 0, W, HH);
        const x = W * (1 - e); ctx.save(); ctx.translate(x, 0);
        const g = ctx.createLinearGradient(-30, 0, 0, 0); g.addColorStop(0, 'rgba(60,45,30,0)'); g.addColorStop(1, 'rgba(60,45,30,0.28)'); ctx.fillStyle = g; ctx.fillRect(-30, 0, 30, HH);
        ctx.beginPath(); ctx.rect(0, 0, W, HH); ctx.clip(); ctx.translate(-x * 0.0, 0); drawScene(ctx, s, t); ctx.restore();
      } else if (s.tr === 'mist') { // paper mist rises and washes the page away, then lifts off the new one
        const up = u < 0.5, k = up ? eio(u / 0.5) : eio((u - 0.5) / 0.5);
        drawScene(ctx, up ? prev : s, t);
        const edge = up ? HH + 60 - (HH + 160) * k : HH + 60 - (HH + 160) * (1 - k);
        ctx.save(); ctx.beginPath(); ctx.moveTo(-20, HH + 20);
        for (let x = -20; x <= W + 20; x += 16) ctx.lineTo(x, edge + Math.sin(x * 0.012 + s.seed) * 26 + Math.sin(x * 0.041 + s.seed) * 10);
        ctx.lineTo(W + 20, HH + 20); ctx.closePath(); ctx.clip(); ctx.drawImage(paperL(), 0, 0);
        const g = ctx.createLinearGradient(0, edge - 40, 0, edge + 90); g.addColorStop(0, rgba(PAPER, 0)); g.addColorStop(1, rgba(PAPER, 0.5)); ctx.fillStyle = g; ctx.fillRect(0, edge - 40, W, 140);
        ctx.restore();
      }
    } else drawScene(ctx, s, t);
    header(ctx, t);
    ctx.restore();
  }
  // ================= SOUND (voiceover mode; same word times as the picture) =================
  // paper-and-brush foley: band-passed rustles for painting-in, pen scratches for notes, page turns, soft glockenspiel
  function scoreSound(k) {
    const brush = (t, d = 0.8, g = 1, pan = 0) => { k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 1400], [d, 2600]], q: 0.7, gain: 0.07 * g, a: Math.min(0.2, d * 0.3), hold: d * 0.4, pan, minor: true }); };
    const pen = (t, d = 0.8) => { for (let x = 0; x < d; x += 0.07) k.noise(t + x, { dur: 0.05, filter: 'bandpass', f: 3200 + (x * 997) % 1500, q: 2, gain: 0.05, a: 0.005, minor: true, pan: 0.2 }); };
    const glock = (t, notes) => notes.forEach((n, i) => { k.tone(t + i * 0.09, { f: n, type: 'sine', dur: 1.1, gain: 0.09, a: 0.003, verb: 0.4, pan: (i - 1) * 0.2 }); k.tone(t + i * 0.09, { f: k.hz(n) * 3, type: 'sine', dur: 0.3, gain: 0.02, a: 0.002, verb: 0.3 }); });
    k.music('pad', 0.2, DURATION - 0.5, { bpm: 72, gain: 0.35, chords: [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['G3', 'B3', 'D4', 'F4']] });
    k.bed('room', 0, DURATION, { gain: 0.5 });
    SC.forEach((s, i) => {
      if (!i) return;
      if (s.tr === 'wipe') brush(s.s, 0.8, 1.2);
      else if (s.tr === 'turn') k.play('paper', s.s, { dur: 0.5, gain: 0.8 });
      else if (s.tr === 'mist') k.noise(s.s, { dur: 1.2, color: 'pink', filter: 'lowpass', f: [[0, 400], [0.6, 1600], [1.2, 400]], gain: 0.08, a: 0.5, hold: 0.2, minor: true });
    });
    SFX.forEach(([t, kind, o]) => {
      switch (kind) {
        case 'brush': brush(t, o.d || 0.8); break;
        case 'pen': pen(t, o.d || 0.8); break;
        case 'turn': break;
        case 'patter': for (let x = 0; x < o.d; x += 0.06) k.noise(t + x, { dur: 0.03, filter: 'bandpass', f: 1800 + (x * 3331) % 1800, q: 1.5, gain: 0.05, a: 0.003, minor: true, pan: Math.sin(x * 7) * 0.5 }); break;
        case 'glock': glock(t, o.n || ['E5']); break;
        case 'erase': k.play('erase', t, { dur: o.d || 0.8, gain: 0.5, minor: true }); break;
        case 'thump': k.play('thud', t, { f: 110, gain: 0.45 }); break;
        case 'swish': k.play('swish', t, { dur: 0.5, gain: 0.5, minor: true }); break;
        case 'shatter': for (let i = 0; i < 9; i++) k.tone(t + i * 0.035, { f: 1800 + i * 230, type: 'triangle', dur: 0.12, gain: 0.04, a: 0.001, minor: true, pan: (i % 3 - 1) * 0.4 }); k.play('thud', t, { f: 200, gain: 0.25 }); break;
        case 'boing': k.tone(t, { f: [[0, 180], [0.15, 320], [0.35, 220], [0.6, 260]], type: 'sine', dur: 0.8, gain: 0.09, a: 0.01, minor: true }); break;
        case 'low': k.tone(t, { f: [[0, 'E4'], [0.5, 'B3']], type: 'triangle', dur: 0.6, gain: 0.07, a: 0.02, verb: 0.3 }); break;
        case 'coin': k.tone(t, { f: 'E6', type: 'sine', dur: 0.25, gain: 0.05, a: 0.002, minor: true, verb: 0.2 }); k.tone(t + 0.05, { f: 'B6', type: 'sine', dur: 0.2, gain: 0.03, a: 0.002, minor: true }); break;
        case 'beat': for (let i = 0; i < 3; i++) { k.tone(t + i * 0.8, { f: [[0, 70], [0.1, 45]], dur: 0.15, gain: 0.22 }); k.tone(t + i * 0.8 + 0.22, { f: [[0, 60], [0.1, 40]], dur: 0.12, gain: 0.15 }); } break;
        case 'dig': for (let x = 0; x < o.d; x += 0.09) k.noise(t + x, { dur: 0.07, color: 'brown', filter: 'bandpass', f: 600 + (x * 777) % 300, q: 1, gain: 0.08, a: 0.01, minor: true, pan: -0.2 }); break;
        case 'fill': k.tone(t, { f: [[0, 'C5'], [o.d, 'G5']], type: 'triangle', dur: o.d + 0.1, gain: 0.04, a: 0.05, minor: true, pan: 0.2 }); brush(t, o.d, 0.8); break;
        case 'tick': k.play('tick', t, { gain: 0.6, minor: true }); break;
        case 'crack': k.noise(t, { dur: 0.12, filter: 'highpass', f: 1500, gain: 0.18, a: 0.001, minor: true }); k.play('thud', t, { f: 160, gain: 0.3 }); break;
        case 'wet': k.noise(t, { dur: o.d || 1, color: 'pink', filter: 'lowpass', f: 900, gain: 0.07, a: 0.2, hold: (o.d || 1) * 0.5, minor: true }); break;
        case 'pop': k.play('pop', t, { gain: 0.6, minor: true }); break;
        case 'flow': for (let x = 0; x < o.d; x += 0.5) k.noise(t + x, { dur: 0.6, color: 'pink', filter: 'bandpass', f: 500, q: 0.8, gain: 0.05, a: 0.25, minor: true, pan: 0.2 * Math.sin(x) }); break;
        case 'space': k.tone(t, { f: 'A2', type: 'sine', dur: o.d, gain: 0.05, a: 0.8, hold: o.d - 1.6, verb: 0.5, minor: true }); k.tone(t, { f: 'E3', type: 'sine', dur: o.d, gain: 0.03, a: 1, hold: o.d - 2, verb: 0.5, minor: true }); break;
        case 'thock': k.noise(t, { dur: 0.06, filter: 'bandpass', f: 1200, q: 2, gain: 0.2, a: 0.001 }); k.tone(t, { f: 420, type: 'sine', dur: 0.1, gain: 0.08 }); break;
        case 'steps': for (let i = 0; i < o.n; i++) k.noise(t + i * o.d, { dur: 0.08, color: 'brown', filter: 'lowpass', f: 700, gain: 0.14, a: 0.005, minor: true, pan: i % 2 ? 0.2 : -0.2 }); break;
        case 'mist': k.noise(t, { dur: o.d, color: 'pink', filter: 'lowpass', f: [[0, 300], [o.d, 1200]], gain: 0.06, a: o.d * 0.5, minor: true }); break;
      }
    });
  }
  // ================= THUMBNAIL: a painted skeleton beside huge words =================
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    ctx.drawImage(paperL(), 0, 0);
    swatch(ctx, 330, 370, 260, 330, ROSE, 0.22, 901); band(ctx, 640, 760, SAGE, 0.25, 902); swatch(ctx, 900, 560, 300, 90, RED, 0.12, 903);
    paint(ctx, 'skelA', 31, SKEL({}), 1, 330, 390, 1.45);
    blob(ctx, 330, 230, 18, 17, RED, 0.6, 904);
    txt(ctx, 'YOUR BONES', 860, 190, '600 108px "Bodoni Moda"', INK, 1, 'center', true);
    txt(ctx, 'ARE', 860, 320, 'italic 500 96px "Bodoni Moda"', INK2, 1, 'center', true);
    bignum(ctx, 'ALIVE', 860, 470, 170, 1, RED);
    hand(ctx, 'and they rebuild themselves!', 860, 610, 46, 1, INK2);
    ctx.restore();
  }
  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s - 0.05 ? j : a), 0) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();
