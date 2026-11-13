// ================= Watercolor Brush, 16:9 1280x720: "Your Liver Explained: the organ that does 500 jobs" =================
// Long video (~3 min), 5 chapters + teaser. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A journal page that paints itself: the liver, its lobules, bile, glycogen and regrowth are laid in stroke by stroke with the
// Lemo-Opuscar watercolor stroke engine (window.LEMO: mk / drawS / drawList / sprite, MIT), hand notes with pen leaders,
// brush-edge wipes, page turns for chapters and paper-mist erases. One accent: vermilion. Base helpers from 20261112-bones-alive.
(function () {
  const LM = window.LEMO;
  const { mk, drawS, drawList, qcurve, qctrl, polar, withSeed, rnd, pick, sprite, edgeOf, ss, eio, eo, seg, clamp, lerp, mixc, rgba } = LM;
  const PAPER = '#f1e9da', INK = '#2b2520', INK2 = '#3d3129';
  const W = 1280, HH = 720;
  try { ['italic 500 40px "Bodoni Moda"', '600 40px "Bodoni Moda"', '700 40px "Caveat"', '500 20px "DM Mono"'].forEach((f) => document.fonts.load(f, 'AaZz09%·→≈')); } catch (e) { /* render anyway */ }

  // ---------- voiceover phrases (phrases.json, Kokoro af_heart, natural mode) ----------
  const PH = [{"s":0.25,"e":3.89,"text":"You could lose two thirds of your liver, and it would actually grow back.","words":[["you",0.25],["could",0.44],["lose",0.75],["two",1.0],["thirds",1.19],["of",1.57],["your",1.69],["liver",1.94],["and",2.26],["it",2.45],["would",2.57],["actually",2.88],["grow",3.39],["back",3.64]]},{"s":4.33,"e":6.91,"text":"In a few weeks, it's almost back to full size.","words":[["in",4.33],["a",4.48],["few",4.56],["weeks",4.79],["its",5.16],["almost",5.39],["back",5.85],["to",6.15],["full",6.3],["size",6.61]]},{"s":7.37,"e":9.92,"text":"No other organ inside you can pull that off.","words":[["no",7.37],["other",7.52],["organ",7.88],["inside",8.25],["you",8.68],["can",8.9],["pull",9.12],["that",9.41],["off",9.7]]},{"s":10.32,"e":13.98,"text":"And while it's doing that, it's still running more than five hundred jobs.","words":[["and",10.32],["while",10.51],["its",10.82],["doing",11.01],["that",11.33],["its",11.58],["still",11.77],["running",12.09],["more",12.53],["than",12.78],["five",13.03],["hundred",13.29],["jobs",13.73]]},{"s":14.44,"e":16.84,"text":"So what is this thing, and how does it do it all?","words":[["so",14.44],["what",14.57],["is",14.84],["this",14.97],["thing",15.24],["and",15.57],["how",15.77],["does",15.97],["it",16.24],["do",16.37],["it",16.5],["all",16.64]]},{"s":17.29,"e":19.57,"text":"Let's paint it out, one job at a time.","words":[["lets",17.29],["paint",17.63],["it",18.05],["out",18.22],["one",18.48],["job",18.73],["at",18.98],["a",19.15],["time",19.24]]},{"s":19.93,"e":22.42,"text":"Chapter one. The biggest organ inside you.","words":[["chapter",19.93],["one",20.44],["the",20.66],["biggest",20.88],["organ",21.39],["inside",21.76],["you",22.2]]},{"s":22.86,"e":24.59,"text":"Tuck your hand under your right ribs.","words":[["tuck",22.86],["your",23.09],["hand",23.32],["under",23.55],["your",23.84],["right",24.07],["ribs",24.36]]},{"s":25.01,"e":26.67,"text":"That's roughly where your liver sits.","words":[["thats",25.01],["roughly",25.28],["where",25.67],["your",25.95],["liver",26.17],["sits",26.44]]},{"s":27.01,"e":30.48,"text":"It's a soft, reddish-brown wedge about the size of a football,","words":[["its",27.01],["a",27.22],["soft",27.3],["reddishbrown",27.59],["wedge",28.45],["about",28.82],["the",29.18],["size",29.39],["of",29.68],["a",29.83],["football",29.9]]},{"s":30.9,"e":32.86,"text":"and it weighs around one and a half kilos.","words":[["and",30.9],["it",31.08],["weighs",31.2],["around",31.55],["one",31.91],["and",32.09],["a",32.27],["half",32.32],["kilos",32.56]]},{"s":33.22,"e":35.34,"text":"That makes it your biggest internal organ.","words":[["that",33.22],["makes",33.46],["it",33.77],["your",33.89],["biggest",34.13],["internal",34.55],["organ",35.03]]},{"s":35.71,"e":38.72,"text":"And it's always full of blood, about a pint at any moment.","words":[["and",35.71],["its",35.91],["always",36.12],["full",36.53],["of",36.8],["blood",36.94],["about",37.28],["a",37.63],["pint",37.7],["at",37.97],["any",38.11],["moment",38.31]]},{"s":39.07,"e":41.17,"text":"Most of that blood comes straight from your gut,","words":[["most",39.07],["of",39.28],["that",39.39],["blood",39.61],["comes",39.88],["straight",40.15],["from",40.58],["your",40.79],["gut",41.01]]},{"s":41.61,"e":43.86,"text":"through one big pipe called the portal vein.","words":[["through",41.61],["one",42.05],["big",42.23],["pipe",42.42],["called",42.67],["the",43.05],["portal",43.24],["vein",43.61]]},{"s":44.28,"e":47.6,"text":"So everything you eat and drink passes through your liver first,","words":[["so",44.28],["everything",44.41],["you",45.04],["eat",45.22],["and",45.41],["drink",45.6],["passes",45.91],["through",46.29],["your",46.73],["liver",46.98],["first",47.29]]},{"s":47.99,"e":49.76,"text":"before it reaches the rest of your body.","words":[["before",47.99],["it",48.32],["reaches",48.43],["the",48.82],["rest",48.98],["of",49.2],["your",49.32],["body",49.54]]},{"s":50.15,"e":51.73,"text":"Chapter two. The filter.","words":[["chapter",50.15],["two",50.73],["the",50.98],["filter",51.23]]},{"s":52.04,"e":54.4,"text":"Think of your liver as a security checkpoint.","words":[["think",52.04],["of",52.36],["your",52.49],["liver",52.74],["as",53.06],["a",53.19],["security",53.25],["checkpoint",53.76]]},{"s":54.8,"e":58.86,"text":"Inside, it's built from millions of tiny cells called hepatocytes,","words":[["inside",54.8],["its",55.25],["built",55.47],["from",55.85],["millions",56.15],["of",56.75],["tiny",56.9],["cells",57.2],["called",57.58],["hepatocytes",58.03]]},{"s":59.28,"e":61.62,"text":"lined up in rows like the pages of a book.","words":[["lined",59.28],["up",59.64],["in",59.79],["rows",59.94],["like",60.23],["the",60.52],["pages",60.74],["of",61.11],["a",61.26],["book",61.33]]},{"s":62.07,"e":64.18,"text":"Blood seeps slowly between those rows,","words":[["blood",62.07],["seeps",62.4],["slowly",62.73],["between",63.12],["those",63.58],["rows",63.91]]},{"s":64.57,"e":66.8,"text":"and the cells grab anything that shouldn't be there.","words":[["and",64.57],["the",64.73],["cells",64.89],["grab",65.15],["anything",65.37],["that",65.79],["shouldnt",66.01],["be",66.43],["there",66.54]]},{"s":67.26,"e":71.77,"text":"Old medicines, leftover chemicals, and alcohol all get broken down here.","words":[["old",67.26],["medicines",67.49],["leftover",68.18],["chemicals",68.79],["and",69.48],["alcohol",69.71],["all",70.24],["get",70.47],["broken",70.7],["down",71.16],["here",71.47]]},{"s":72.15,"e":74.6,"text":"Your muscles also make a waste called ammonia,","words":[["your",72.15],["muscles",72.41],["also",72.86],["make",73.12],["a",73.38],["waste",73.44],["called",73.76],["ammonia",74.15]]},{"s":74.99,"e":76.68,"text":"which is toxic if it builds up.","words":[["which",74.99],["is",75.34],["toxic",75.48],["if",75.84],["it",75.98],["builds",76.12],["up",76.54]]},{"s":77.03,"e":78.57,"text":"Your liver turns it into urea,","words":[["your",77.03],["liver",77.29],["turns",77.61],["it",77.93],["into",78.06],["urea",78.31]]},{"s":78.95,"e":81.46,"text":"a much safer waste that your kidneys flush out.","words":[["a",78.95],["much",79.02],["safer",79.28],["waste",79.61],["that",79.94],["your",80.2],["kidneys",80.47],["flush",80.93],["out",81.26]]},{"s":81.88,"e":83.76,"text":"Chapter three. The bile factory.","words":[["chapter",81.88],["three",82.39],["the",82.75],["bile",82.96],["factory",83.25]]},{"s":84.14,"e":87.13,"text":"Your liver also makes bile, a greenish-yellow juice,","words":[["your",84.14],["liver",84.43],["also",84.78],["makes",85.07],["bile",85.42],["a",85.71],["greenishyellow",85.78],["juice",86.78]]},{"s":87.46,"e":89.27,"text":"up to about a litre of it every day.","words":[["up",87.46],["to",87.6],["about",87.73],["a",88.06],["litre",88.13],["of",88.47],["it",88.6],["every",88.74],["day",89.07]]},{"s":89.61,"e":91.37,"text":"Bile works a lot like dish soap.","words":[["bile",89.61],["works",89.9],["a",90.25],["lot",90.32],["like",90.53],["dish",90.81],["soap",91.09]]},{"s":91.82,"e":94.64,"text":"It breaks big blobs of fat into tiny droplets,","words":[["it",91.82],["breaks",91.97],["big",92.43],["blobs",92.66],["of",93.04],["fat",93.19],["into",93.42],["tiny",93.72],["droplets",94.03]]},{"s":95.01,"e":97.11,"text":"so your gut can actually digest them.","words":[["so",95.01],["your",95.15],["gut",95.43],["can",95.64],["actually",95.85],["digest",96.41],["them",96.83]]},{"s":97.53,"e":101.08,"text":"Between meals, the bile waits in a little pouch called the gallbladder.","words":[["between",97.53],["meals",97.96],["the",98.26],["bile",98.45],["waits",98.69],["in",99.0],["a",99.12],["little",99.18],["pouch",99.55],["called",99.86],["the",100.22],["gallbladder",100.41]]},{"s":101.53,"e":102.79,"text":"And here's a weird one.","words":[["and",101.53],["heres",101.75],["a",102.12],["weird",102.2],["one",102.57]]},{"s":103.17,"e":106.05,"text":"Bile carries leftovers from old red blood cells,","words":[["bile",103.17],["carries",103.46],["leftovers",103.97],["from",104.61],["old",104.9],["red",105.12],["blood",105.33],["cells",105.69]]},{"s":106.43,"e":108.15,"text":"and that's what turns your poop brown.","words":[["and",106.43],["thats",106.61],["what",106.89],["turns",107.12],["your",107.4],["poop",107.63],["brown",107.86]]},{"s":108.54,"e":110.23,"text":"Chapter four. The pantry.","words":[["chapter",108.54],["four",109.13],["the",109.47],["pantry",109.72]]},{"s":110.53,"e":113.49,"text":"After a meal, your liver packs extra sugar away","words":[["after",110.53],["a",110.92],["meal",111.0],["your",111.31],["liver",111.62],["packs",112.01],["extra",112.4],["sugar",112.79],["away",113.18]]},{"s":113.64,"e":115.17,"text":"as a starch called glycogen.","words":[["as",113.64],["a",113.78],["starch",113.84],["called",114.24],["glycogen",114.64]]},{"s":115.63,"e":117.79,"text":"Then, between meals or while you sleep,","words":[["then",115.63],["between",115.91],["meals",116.4],["or",116.75],["while",116.89],["you",117.23],["sleep",117.44]]},{"s":118.22,"e":120.4,"text":"it turns that glycogen back into sugar,","words":[["it",118.22],["turns",118.36],["that",118.7],["glycogen",118.97],["back",119.52],["into",119.79],["sugar",120.06]]},{"s":120.76,"e":122.73,"text":"so your brain never runs out of fuel.","words":[["so",120.76],["your",120.9],["brain",121.17],["never",121.51],["runs",121.85],["out",122.12],["of",122.33],["fuel",122.46]]},{"s":123.11,"e":126.37,"text":"It also keeps a stash of vitamin A, vitamin D,","words":[["it",123.11],["also",123.3],["keeps",123.67],["a",124.14],["stash",124.23],["of",124.7],["vitamin",124.88],["a",125.54],["vitamin",125.63],["d",126.28]]},{"s":126.67,"e":129.14,"text":"vitamin B twelve, and iron, for later.","words":[["vitamin",126.67],["b",127.27],["twelve",127.36],["and",127.87],["iron",128.12],["for",128.46],["later",128.72]]},{"s":129.59,"e":131.61,"text":"And it builds proteins your blood needs,","words":[["and",129.59],["it",129.77],["builds",129.9],["proteins",130.26],["your",130.75],["blood",131.0],["needs",131.3]]},{"s":131.96,"e":134.27,"text":"including the ones that make a cut stop bleeding.","words":[["including",131.96],["the",132.48],["ones",132.65],["that",132.88],["make",133.11],["a",133.34],["cut",133.4],["stop",133.57],["bleeding",133.81]]},{"s":134.64,"e":136.62,"text":"Chapter five. The comeback organ.","words":[["chapter",134.64],["five",135.15],["the",135.44],["comeback",135.66],["organ",136.25]]},{"s":137.07,"e":138.62,"text":"Now back to that superpower.","words":[["now",137.07],["back",137.27],["to",137.54],["that",137.68],["superpower",137.95]]},{"s":138.96,"e":141.88,"text":"Doctors can remove up to two thirds of a healthy liver,","words":[["doctors",138.96],["can",139.43],["remove",139.63],["up",140.03],["to",140.16],["two",140.29],["thirds",140.49],["of",140.89],["a",141.02],["healthy",141.09],["liver",141.55]]},{"s":142.29,"e":144.35,"text":"and the rest starts growing right away.","words":[["and",142.29],["the",142.49],["rest",142.68],["starts",142.94],["growing",143.32],["right",143.77],["away",144.1]]},{"s":144.72,"e":146.84,"text":"The cells that are left simply divide,","words":[["the",144.72],["cells",144.93],["that",145.27],["are",145.54],["left",145.75],["simply",146.02],["divide",146.43]]},{"s":147.25,"e":150.07,"text":"and the liver can get back most of its size in a few weeks.","words":[["and",147.25],["the",147.44],["liver",147.63],["can",147.94],["get",148.13],["back",148.32],["most",148.57],["of",148.82],["its",148.94],["size",149.13],["in",149.38],["a",149.5],["few",149.57],["weeks",149.75]]},{"s":150.46,"e":152.4,"text":"That's why living donors are possible.","words":[["thats",150.46],["why",150.77],["living",150.96],["donors",151.34],["are",151.71],["possible",151.9]]},{"s":152.75,"e":156.15,"text":"A healthy adult gives part of their liver to someone who needs it,","words":[["a",152.75],["healthy",152.81],["adult",153.26],["gives",153.58],["part",153.9],["of",154.16],["their",154.29],["liver",154.61],["to",154.93],["someone",155.06],["who",155.51],["needs",155.7],["it",156.02]]},{"s":156.67,"e":159.25,"text":"and both pieces grow into full-size livers.","words":[["and",156.67],["both",156.89],["pieces",157.18],["grow",157.63],["into",157.92],["fullsize",158.22],["livers",158.8]]},{"s":159.6,"e":163.55,"text":"And scientists are still working out exactly how it knows when to stop.","words":[["and",159.6],["scientists",159.81],["are",160.49],["still",160.69],["working",161.03],["out",161.51],["exactly",161.71],["how",162.19],["it",162.39],["knows",162.53],["when",162.87],["to",163.14],["stop",163.28]]},{"s":163.92,"e":166.0,"text":"So the next time you eat a meal,","words":[["so",163.92],["the",164.09],["next",164.35],["time",164.7],["you",165.05],["eat",165.31],["a",165.57],["meal",165.65]]},{"s":166.06,"e":167.72,"text":"remember the quiet organ under your ribs,","words":[["remember",166.06],["the",166.45],["quiet",166.6],["organ",166.84],["under",167.09],["your",167.33],["ribs",167.52]]},{"s":168.12,"e":170.73,"text":"filtering, storing, building, and regrowing,","words":[["filtering",168.12],["storing",168.77],["building",169.28],["and",169.86],["regrowing",170.08]]},{"s":171.15,"e":173.51,"text":"more than five hundred jobs, all at once.","words":[["more",171.15],["than",171.45],["five",171.74],["hundred",172.04],["jobs",172.55],["all",172.85],["at",173.07],["once",173.22]]},{"s":173.86,"e":176.95,"text":"Next time, what really happens if you swallow chewing gum?","words":[["next",173.86],["time",174.12],["what",174.38],["really",174.65],["happens",175.04],["if",175.5],["you",175.63],["swallow",175.83],["chewing",176.29],["gum",176.75]]},{"s":177.4,"e":179.88,"text":"Does it actually stay inside you for seven years?","words":[["does",177.4],["it",177.65],["actually",177.77],["stay",178.27],["inside",178.52],["you",178.89],["for",179.08],["seven",179.26],["years",179.57]]}];
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
  // ================= scenes =================
  const SC = [], SFX = [];
  const fx = (t, kind, o = {}) => SFX.push([t, kind, o]);
  const TRD = { wipe: 0.8, turn: 0.75, mist: 1.1, cut: 0 };
  function scene(i0, i1, tr, draw, o = {}) { const s = SC.length ? PE(i0 - 1) + 0.03 : 0; SC.push({ i0, i1, s, tr, draw, still: !!o.still, seed: SC.length * 13 + 5 }); }
  // chapter card on a fresh sheet: chapter numeral, title, a test swatch and a small painted bone
  const CH = [];
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

  // ---------------- liver palette + shape helpers ----------------
  const LIVL = '#c97a62', LIV2 = '#74302a', BILE = '#a9ab3c', BILE2 = '#6f7a2a', FAT = '#e8c25a', BROWN = '#8a5a32';
  const SUG = '#e7cf8a', GLY = '#cf9a3e', SKIN = '#e8c3a4', GUT = '#d99a7a', MOSS = '#7f9a5a';
  function chaikin(pts, k = 2) { let P = pts; for (let j = 0; j < k; j++) { const o = []; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; o.push([a[0] * 0.75 + b[0] * 0.25, a[1] * 0.75 + b[1] * 0.25], [a[0] * 0.25 + b[0] * 0.75, a[1] * 0.25 + b[1] * 0.75]); } P = o; } return P; }
  function polyX(poly, y) { let lo = 1e9, hi = -1e9; for (let i = 0; i < poly.length; i++) { const a = poly[i], b = poly[(i + 1) % poly.length]; if ((a[1] - y) * (b[1] - y) <= 0 && a[1] !== b[1]) { const x = a[0] + ((y - a[1]) / (b[1] - a[1])) * (b[0] - a[0]); lo = Math.min(lo, x); hi = Math.max(hi, x); } } return lo < hi ? [lo, hi] : null; }
  function edgeStrokes(poly, col, w, a = 0.6) { const S = [], n = poly.length, k = 5; for (let j = 0; j < k; j++) { const pts = []; for (let i = Math.floor((j * n) / k); i <= Math.floor(((j + 1) * n) / k); i++) pts.push(poly[i % n]); if (pts.length > 1) S.push(mk(pts, w, col, { prof: 'even', nb: 0, a, rough: 0.35 })); } return S; }
  // fill a closed shape with horizontal brush strokes (wet strokes that overlap like transparent pigment), then a darker edge
  function fillStrokes(poly, col, o = {}) {
    const S = [], step = o.step || 14; let y0 = 1e9, y1 = -1e9; for (const p of poly) { y0 = Math.min(y0, p[1]); y1 = Math.max(y1, p[1]); }
    for (let y = y0 + step * 0.45; y < y1 - step * 0.2; y += step) {
      const r = polyX(poly, y); if (!r) continue; const ins = step * 0.35; if (r[1] - r[0] < ins * 2 + 4) continue;
      const cc = o.cols ? pick(o.cols) : col;
      const a0 = r[0] + ins, a1 = r[1] - ins, L = a1 - a0, segs = L > 160 ? 2 : 1;
      for (let k = 0; k < segs; k++) { const u0 = k ? rnd(0.35, 0.5) : 0, u1 = k || segs === 1 ? 1 : rnd(0.55, 0.75); const x0 = a0 + L * u0, x1 = a0 + L * u1;
        S.push(mk(qcurve(x0, y + rnd(-3, 3), x1, y + rnd(-3, 3), rnd(-7, 7), Math.max(4, Math.round((x1 - x0) / 26))), step * rnd(1.7, 2.1), cc, { prof: 'brush', a: (o.a ?? 0.55) * rnd(0.7, 1.05), rough: 0.3 })); }
    }
    if (o.edge !== false) S.push(...edgeStrokes(poly, o.ink || mixc(col, INK, 0.45), o.ew || 3));
    return S;
  }
  const ellPts = (cx, cy, rx, ry, n = 28, rot = 0) => { const o = []; for (let i = 0; i < n; i++) { const a = (i / n) * 6.283, x = Math.cos(a) * rx, y = Math.sin(a) * ry; o.push([cx + x * Math.cos(rot) - y * Math.sin(rot), cy + x * Math.sin(rot) + y * Math.cos(rot)]); } return o; };
  // the liver: a soft wedge, big right lobe (viewer's left) tapering to the left lobe; centred on 0,0, ~470 x 230
  const LIVER_RAW = [[-232, -8], [-218, -82], [-160, -120], [-60, -124], [60, -112], [170, -94], [246, -72], [264, -54], [232, -38], [150, -16], [80, 2], [34, 26], [-18, 66], [-90, 98], [-160, 104], [-212, 70]];
  const LIVERP = chaikin(LIVER_RAW, 2);
  function liverStrokes(o = {}) {
    const col = o.col || LIV, S = fillStrokes(LIVERP, col, { cols: [col, mixc(col, LIVL, 0.5), col], step: 13, a: 0.5, ink: LIV2, ew: 3.2 });
    // shadow along the lower edge, a second glaze on the big lobe, the ligament that splits the lobes
    S.push(mk(qcurve(-190, 70, 20, 30, -14, 12), 18, LIV2, { prof: 'brush', a: 0.3 }), mk(qcurve(40, 0, 220, -40, -6, 10), 10, LIV2, { prof: 'tip', a: 0.25 }));
    S.push(mk(qcurve(-190, -40, -60, -70, -12, 10), 26, col, { prof: 'leaf', a: 0.3 }));
    S.push(mk(qcurve(36, -108, 28, 22, 8, 8), 2.6, LIV2, { prof: 'tip', nb: 0, a: 0.75 }));
    if (o.gb) { const g = chaikin(ellPts(-30, 84, 34, 20, 10, 0.4), 1); S.push(...fillStrokes(g, BILE, { step: 8, a: 0.6, ink: BILE2, ew: 2 })); }
    return S;
  }
  const LIVERF = (o = {}) => () => liverStrokes(o);
  // the liver drawn with a vertical cut: only x in [xa, xb] (local, unscaled) shows; wavy wet edge on the cut
  function liverClip(c, key, seed, o, x, y, s, xa, xb, p = 1) {
    c.save(); c.translate(x, y); c.scale(s, s); c.beginPath(); c.moveTo(xa, -170);
    for (let yy = -170; yy <= 170; yy += 10) c.lineTo(xa + Math.sin(yy * 0.05 + seed) * 6, yy);
    c.lineTo(xb, 170); c.lineTo(xb, -170); c.closePath(); c.clip();
    paint(c, key, seed, LIVERF(o), p); c.restore();
  }
  // simple painted organs for comparison and for the body
  const HEARTF = () => () => { const P = chaikin([[0, 50], [-48, 6], [-52, -28], [-26, -46], [0, -26], [26, -46], [52, -28], [48, 6]], 2); return fillStrokes(P, RED, { step: 9, a: 0.55, ew: 2.4 }); };
  const KIDF = () => () => { const P = chaikin([[-18, -46], [14, -50], [30, -20], [12, 0], [30, 22], [14, 50], [-18, 46], [-30, 0]], 2); return fillStrokes(P, MAR, { step: 8, a: 0.55, ew: 2.4 }); };
  const LUNGF = () => () => { const S = []; for (const sx of [-1, 1]) { const P = chaikin([[sx * 8, -60], [sx * 40, -48], [sx * 52, 10], [sx * 46, 58], [sx * 12, 52]], 2); S.push(...fillStrokes(P, ROSE, { step: 9, a: 0.55, ew: 2.4 })); } return S; };
  const BRAINF = () => () => { const S = fillStrokes(chaikin(ellPts(0, 0, 70, 50, 14), 1), ROSE, { step: 9, a: 0.5, ew: 2.4 }); for (let i = 0; i < 7; i++) S.push(mk(qcurve(-55 + i * 17, -30 + (i % 2) * 18, -45 + i * 17, 10 + (i % 3) * 10, rnd(-10, 10), 6), 2.4, mixc(ROSE, INK, 0.4), { prof: 'tip', nb: 0, a: 0.6 })); return S; };
  // coiled gut: one long stroke snaking down
  const GUTF = () => () => { const S = [], pts = []; for (let i = 0; i <= 60; i++) { const u = i / 60, row = Math.floor(u * 4), f = (u * 4) % 1, dir = row % 2 ? -1 : 1; pts.push([dir * (-90 + 180 * f) + Math.sin(f * 9) * 6, -50 + row * 34 + Math.sin(f * 3.14) * 10]); } S.push(mk(pts, 22, GUT, { prof: 'even', a: 0.6, rough: 0.2 })); S.push(mk(pts.map(([x, y]) => [x, y + 7]), 5, mixc(GUT, INK, 0.4), { prof: 'even', nb: 0, a: 0.45 })); return S; };
  // torso outline + ribs (front view), centred on 0,0, ~ 330 wide, 560 tall
  const TORSOF = () => () => {
    const S = [], ink = INK2;
    S.push(mk(qctrl(-40, -280, -50, -240, -150, -215, 10), 5, ink, { prof: 'even', nb: 0, a: 0.6 }), mk(qctrl(40, -280, 50, -240, 150, -215, 10), 5, ink, { prof: 'even', nb: 0, a: 0.6 }));
    S.push(mk(qctrl(-150, -215, -175, 0, -140, 280, 14), 5, ink, { prof: 'even', nb: 0, a: 0.6 }), mk(qctrl(150, -215, 175, 0, 140, 280, 14), 5, ink, { prof: 'even', nb: 0, a: 0.6 }));
    for (let i = 0; i < 6; i++) for (const sx of [-1, 1]) { const y = -150 + i * 34; S.push(mk(qctrl(sx * 10, y, sx * 120, y - 10, sx * (110 + i * 4), y + 46 + i * 6, 10), 7 - i * 0.4, BONE2, { prof: 'tip', a: 0.6 })); }
    S.push(mk(qcurve(0, -175, 0, -20, 0, 8), 12, BONE2, { prof: 'even', a: 0.55 }));
    return S;
  };
  // small painted items
  const PILLF = () => () => [mk(qcurve(-22, 0, 22, 0, 0, 6), 18, '#d9a07a', { prof: 'even', a: 0.75 }), mk(qcurve(0, 0, 22, 0, 0, 4), 18, '#8fa6b8', { prof: 'even', a: 0.75 })];
  const GLASSF = () => () => [mk(qcurve(-18, -26, -12, 26, 0, 6), 3, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(18, -26, 12, 26, 0, 6), 3, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(-12, 26, 12, 26, 0, 4), 3, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(-15, 0, 15, 0, 0, 4), 22, OCH, { prof: 'even', a: 0.5 }), mk(qcurve(-13, 14, 13, 14, 0, 4), 22, OCH, { prof: 'even', a: 0.5 })];
  const FLASKF = () => () => [mk(qcurve(-8, -30, -8, -6, 0, 4), 3, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(8, -30, 8, -6, 0, 4), 3, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(-8, -6, -26, 26, 0, 4), 3, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(8, -6, 26, 26, 0, 4), 3, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(-26, 26, 26, 26, 0, 4), 3, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(-18, 18, 18, 18, 0, 4), 12, VIO, { prof: 'even', a: 0.55 })];
  // a tiny person (head dab + body strokes), standing on 0,0, ~ 200 tall
  const PERSONF = (col) => () => { const S = []; S.push(...fillStrokes(chaikin(ellPts(0, -170, 26, 30, 10), 1), SKIN, { step: 8, a: 0.6, ew: 2 })); S.push(mk(qcurve(0, -135, 0, -50, 0, 8), 46, col, { prof: 'even', a: 0.6 })); for (const sx of [-1, 1]) { S.push(mk(qcurve(sx * 10, -50, sx * 18, 0, 0, 6), 14, mixc(col, INK, 0.3), { prof: 'tip', a: 0.6 })); S.push(mk(qcurve(sx * 22, -128, sx * 40, -70, sx * 4, 6), 11, col, { prof: 'tip', a: 0.6 })); } return S; };

  // chapter card on a fresh sheet: chapter numeral, title, a test swatch and a small painted liver
  function card(c, t, i, num, name, col, seed) {
    bg(c, 'card' + seed, (g) => { swatch(g, 640, 330, 330, 120, col, 0.26, seed); band(g, 610, 760, col, 0.12, seed + 4, 10); });
    mono(c, 'chapter ' + num, 640, 238, 22, pr(t, PS(i), 0.5));
    title(c, name, 640, 330, 70, pr(t, P(i, PH[i].words[2][0]) - 0.1, 1.1));
    paint(c, 'livA', 21, LIVERF(), pr(t, PS(i) + 0.2, 1.2), 640, 470, 0.32, -0.05);
  }
  const cardFx = (i) => { fx(PS(i) - 0.05, 'turn'); fx(PS(i) + 0.2, 'brush', { d: 1.2 }); fx(P(i, PH[i].words[2][0]) - 0.1, 'pen', { d: 1 }); };
  // ---------------- 1. hook: two thirds of a liver washes away, and it grows back ----------------
  scene(0, 1, 'cut', (c, t) => {
    bg(c, 's1', (g) => { swatch(g, 640, 380, 380, 190, ROSE, 0.14, 11); band(g, 620, 760, SAGE, 0.16, 12); });
    const tL = P(0, 'lose'), tB = P(0, 'grow'), tE = PE(1);
    const cut = ss(ph(t, tL, tL + 1.1)), grow = ss(ph(t, tB - 0.2, tE));
    const xa = -260 + 300 * cut - 300 * grow;
    liverClip(c, 'livA', 21, {}, 640, 360, 1.25, xa, 280, pr(t, 0.1, 1.3));
    if (cut > 0 && cut < 1) { c.save(); c.globalAlpha *= 0.5 * Math.sin(cut * 3.14); blob(c, 640 + (xa - 30) * 1.25, 360, 60, 140, PAPER, 0.8, 19, 0.3); c.restore(); }
    if (cut > 0 && grow < 1) { c.save(); c.globalAlpha *= 0.5 * (1 - grow); c.setLineDash([8, 9]); c.strokeStyle = INK2; c.lineWidth = 2; c.beginPath(); c.moveTo(640 + 40 * 1.25, 190); c.lineTo(640 + 40 * 1.25, 520); c.stroke(); c.restore(); }
    mono(c, 'the human liver', 640, 110, 22, pr(t, 0.2, 0.6));
    hand(c, '− 2/3', 390, 230, 64, pr(t, P(0, 'two'), 0.6) * (1 - ss(pr(t, tB, 0.6))), RED);
    hand(c, 'it grows back!', 390, 230, 52, pr(t, tB + 0.2, 0.8), RED);
    note(c, 'in a few weeks', 960, 590, 900, 470, P(1, 'few') - 0.1, t, 40, INK2, 'center', 14);
  }, { still: true });
  fx(0.1, 'brush', { d: 1.3 }); fx(P(0, 'lose'), 'erase', { d: 1.1 }); fx(P(0, 'grow'), 'wet', { d: 2.5 }); fx(P(1, 'few'), 'pen', { d: 0.8 });

  // ---------------- 2. no other organ can; 500+ jobs ----------------
  scene(2, 3, 'wipe', (c, t) => {
    bg(c, 's2', (g) => { band(g, 600, 760, SAGE, 0.18, 21); swatch(g, 640, 320, 240, 160, ROSE, 0.12, 22); });
    const orgs = [['heart', HEARTF(), 190, 250], ['lungs', LUNGF(), 1090, 250], ['kidney', KIDF(), 190, 520], ['brain', BRAINF(), 1090, 520]];
    orgs.forEach(([n, f, x, y], j) => { const p = pr(t, PS(2) + j * 0.25, 0.8); paint(c, 'org' + n, 30 + j, f, p, x, y, 0.9, 0, 1 - 0.5 * ss(pr(t, P(2, 'pull'), 0.6))); hand(c, n, x, y + 80, 28, p, INK2); if (t > P(2, 'pull')) hand(c, '✗', x + 70, y - 40, 40, pr(t, P(2, 'pull') + j * 0.08, 0.3), GREY); });
    paint(c, 'livA', 21, LIVERF(), pr(t, PS(2), 0.8), 640, 330, 0.85);
    const tj = P(3, 'more'), k = ss(ph(t, tj, P(3, 'jobs') + 0.3));
    bignum(c, (k >= 1 ? '500+' : String(Math.round(k * 500))), 640, 520, 96, pr(t, tj - 0.2, 0.4), RED);
    mono(c, 'jobs, all at once', 640, 600, 22, pr(t, P(3, 'jobs'), 0.6));
  });
  fx(PS(2), 'brush', { d: 1.2 }); fx(P(2, 'pull'), 'tick'); fx(P(3, 'more'), 'patter', { d: 1.4 }); fx(P(3, 'jobs'), 'glock', { n: ['C5', 'G5'] });

  // ---------------- 3. a hand-written question, answered by painting ----------------
  scene(4, 5, 'mist', (c, t) => {
    bg(c, 's3', (g) => { swatch(g, 1100, 600, 140, 80, BLUE, 0.16, 31); swatch(g, 180, 140, 110, 70, OCH, 0.15, 32); });
    hand(c, 'what is this thing?', 640, 190, 70, pr(t, PS(4) + 0.05, 1.2), INK2);
    hand(c, 'and how does it do it all?', 640, 270, 44, pr(t, P(4, 'how'), 1.0), INK2);
    paint(c, 'livS3', 33, LIVERF(), pr(t, P(5, 'paint'), 1.4), 640, 440, 0.7, -0.04);
    const jobs = ['filter', 'bile', 'pantry', 'regrow'];
    jobs.forEach((j, i) => hand(c, (i + 1) + '. ' + j, 210 + i * 287, 640, 32, pr(t, P(5, 'one') + i * 0.2, 0.5), i % 2 ? RED : INK2));
  });
  fx(PS(4) + 0.05, 'pen', { d: 1.2 }); fx(P(4, 'how'), 'pen', { d: 1 }); fx(P(5, 'paint'), 'brush', { d: 1.4 }); fx(P(5, 'one'), 'pen', { d: 0.9 });

  // ================= CHAPTER 1: the biggest organ inside you =================
  CH.push([6, 'I · the biggest organ inside you']);
  scene(6, 6, 'turn', (c, t) => card(c, t, 6, 'one', 'The biggest organ inside you', LIV, 61), { still: true });
  cardFx(6);

  // ---------------- under your right ribs ----------------
  scene(7, 8, 'wipe', (c, t) => {
    bg(c, 's5', (g) => { swatch(g, 640, 380, 220, 300, SKIN, 0.2, 51); swatch(g, 1080, 160, 100, 60, BLUE, 0.15, 52); });
    paint(c, 'torso', 53, TORSOF(), pr(t, PS(7), 1.2), 640, 400, 1);
    // the hand (a flat palm wash) tucks under the person's right ribs = viewer's left
    const hp = ss(pr(t, P(7, 'hand'), 0.9)); if (hp > 0) { c.save(); c.globalAlpha *= hp * (1 - ss(pr(t, P(8, 'liver'), 0.5)) * 0.6); blob(c, lerp(380, 560, hp), 420, 70, 44, SKIN, 0.6, 54, 0.2); for (let i = 0; i < 4; i++) blob(c, lerp(380, 560, hp) + 60, 392 + i * 18, 26, 8, SKIN, 0.55, 55 + i, 0.2); c.restore(); }
    paint(c, 'livA', 21, LIVERF(), pr(t, P(8, 'liver') - 0.1, 1.1), 610, 430, 0.5);
    note(c, 'your right ribs', 300, 250, 520, 330, P(7, 'right') - 0.1, t, 36, INK2, 'center', 14);
    note(c, 'your liver lives here', 1000, 560, 700, 450, P(8, 'liver'), t, 38, RED, 'center', -14);
    mono(c, "(your right is the viewer's left)", 640, 680, 16, pr(t, P(8, 'roughly'), 0.6));
  });
  fx(PS(7), 'brush', { d: 1.2 }); fx(P(7, 'hand'), 'swish'); fx(P(8, 'liver') - 0.1, 'brush', { d: 1.1 }); fx(P(8, 'liver'), 'pen', { d: 1 });

  // ---------------- size of a football, ~1.5 kg, biggest internal organ ----------------
  const BALLF = () => () => { const S = fillStrokes(chaikin(ellPts(0, 0, 120, 74, 16), 1), BROWN, { step: 12, a: 0.5, ew: 3 }); S.push(mk(qcurve(-60, 0, 60, 0, -6, 8), 3, PAPER, { prof: 'even', nb: 0, a: 0.9 })); for (let i = 0; i < 6; i++) S.push(mk(qcurve(-40 + i * 16, -10, -40 + i * 16, 10, 0, 3), 3, PAPER, { prof: 'even', nb: 0, a: 0.9 })); return S; };
  scene(9, 11, 'wipe', (c, t) => {
    bg(c, 's6', (g) => { band(g, 560, 760, OCH, 0.14, 61); swatch(g, 420, 330, 280, 160, ROSE, 0.12, 62); });
    paint(c, 'livA', 21, LIVERF(), pr(t, PS(9), 1.2), 430, 330, 0.95);
    note(c, 'soft, reddish-brown wedge', 430, 130, 400, 230, P(9, 'soft') - 0.1, t, 34, LIV2, 'center', 10);
    paint(c, 'ball', 63, BALLF(), pr(t, P(9, 'football') - 0.15, 0.8), 960, 330, 1, -0.15);
    hand(c, '≈ the size of a football', 960, 460, 32, pr(t, P(9, 'football'), 0.8), INK2);
    bignum(c, '≈ 1.5 kg', 430, 520, 74, pr(t, P(10, 'one') - 0.1, 0.5), RED);
    mono(c, 'about 3 pounds', 430, 580, 18, pr(t, P(10, 'kilos'), 0.5));
    mono(c, 'biggest internal organ', 960, 560, 22, pr(t, P(11, 'biggest') - 0.1, 0.7));
    hand(c, '#1', 960, 610, 48, pr(t, P(11, 'internal'), 0.5), RED);
  });
  fx(PS(9), 'brush', { d: 1.2 }); fx(P(9, 'football') - 0.15, 'brush', { d: 0.8 }); fx(P(10, 'one'), 'thump'); fx(P(11, 'biggest'), 'glock', { n: ['E5', 'B5'] });

  // ---------------- always full of blood, about a pint ----------------
  scene(12, 12, 'wipe', (c, t) => {
    bg(c, 's7', (g) => { swatch(g, 640, 360, 360, 200, RED, 0.08, 71); });
    paint(c, 'livA', 21, LIVERF(), 1, 640, 340, 1.05);
    const f = ss(ph(t, PS(12) + 0.2, P(12, 'pint') + 0.4));
    if (f > 0) { c.save(); c.translate(640, 340); c.scale(1.05, 1.05); c.beginPath(); LIVERP.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.closePath(); c.clip(); c.fillStyle = rgba(RED, 0.22); const lv = lerp(130, -130, f); c.beginPath(); c.moveTo(-260, 140); for (let x = -260; x <= 260; x += 20) c.lineTo(x, lv + Math.sin(x * 0.03 + t * 3) * 5); c.lineTo(260, 140); c.closePath(); c.fill(); c.restore(); }
    for (let i = 0; i < 14; i++) { const r = H.rng(700 + i), u = ((t * 0.25 + r()) % 1); rbc(c, 640 + (r() - 0.5) * 380, 340 + Math.sin(u * 6.28 + i) * 70, 7, f, 710 + i, u * 3); }
    bignum(c, '≈ 1 pint', 640, 580, 70, pr(t, P(12, 'pint') - 0.2, 0.5), RED);
    mono(c, 'of your blood at any moment', 640, 640, 20, pr(t, P(12, 'any'), 0.6));
  });
  fx(PS(12) + 0.2, 'flow', { d: 3 }); fx(P(12, 'pint'), 'glock', { n: ['G5'] });

  // ---------------- gut -> portal vein -> liver -> body ----------------
  const PV = qctrl(640, 520, 760, 440, 690, 300, 16); // gut to liver
  const OUTV = qctrl(760, 220, 860, 140, 1000, 140, 12); // liver to heart
  const PVF = () => () => [mk(PV, 16, '#6f5a8a', { prof: 'even', a: 0.55 }), mk(OUTV, 12, '#6f5a8a', { prof: 'even', a: 0.5 })];
  const along = (pts, u) => { const m = (pts.length - 1) * clamp(u), k = Math.min(pts.length - 2, Math.floor(m)), f = m - k; return [lerp(pts[k][0], pts[k + 1][0], f), lerp(pts[k][1], pts[k + 1][1], f)]; };
  scene(13, 16, 'wipe', (c, t) => {
    bg(c, 's8', (g) => { swatch(g, 640, 560, 260, 120, GUT, 0.12, 81); swatch(g, 1040, 150, 120, 80, RED, 0.1, 82); });
    paint(c, 'gut', 83, GUTF(), pr(t, PS(13) + 0.2, 1.1), 640, 590, 0.95);
    note(c, 'your gut', 330, 600, 520, 590, P(13, 'gut') - 0.1, t, 34, INK2, 'center', 10);
    paint(c, 'livA', 21, LIVERF(), pr(t, PS(13), 0.9), 620, 230, 0.75);
    paint(c, 'pv', 84, PVF(), pr(t, P(14, 'one') - 0.2, 1.0));
    note(c, 'the portal vein', 940, 430, 735, 400, P(14, 'portal') - 0.1, t, 38, VIO, 'center', -12);
    paint(c, 'heartB', 85, HEARTF(), pr(t, P(16, 'rest') - 0.3, 0.6), 1060, 150, 0.7);
    hand(c, 'the rest of your body', 1060, 230, 28, pr(t, P(16, 'rest'), 0.7), RED);
    // food and drink ride up the vein, stop in the liver, then go on
    const t0 = P(15, 'everything');
    if (t > t0) for (let i = 0; i < 6; i++) {
      const u = (t - t0 - i * 0.55) / 2.2; if (u < 0) continue; const uu = u % 1.6;
      let xy; if (uu < 1) xy = along(PV, eio(uu)); else { const v = (uu - 1) / 0.6; xy = v < 0.4 ? [lerp(690, 760, v / 0.4), lerp(300, 220, v / 0.4)] : along(OUTV, (v - 0.4) / 0.6); }
      const col = [OCH, MOSS, BLUE, MAR, YEL, VIO][i]; blob(c, xy[0], xy[1], 9, 8, col, 0.75, 860 + i, 0.15);
    }
    hand(c, 'everything you eat + drink', 330, 380, 32, pr(t, t0, 0.9), INK2);
    hand(c, 'stops here first', 330, 300, 40, pr(t, P(15, 'first') - 0.1, 0.7), RED);
    leader(c, 440, 300, 520, 250, pr(t, P(15, 'first'), 0.5));
  });
  fx(PS(13), 'brush', { d: 1 }); fx(P(13, 'gut'), 'pen', { d: 0.8 }); fx(P(14, 'one') - 0.2, 'brush', { d: 1 }); fx(P(14, 'portal'), 'pen', { d: 1 }); fx(P(15, 'everything'), 'flow', { d: 4 }); fx(P(16, 'rest'), 'pen', { d: 0.7 });

  // ================= CHAPTER 2: the filter =================
  CH.push([17, 'II · the filter']);
  scene(17, 17, 'turn', (c, t) => card(c, t, 17, 'two', 'The filter', VIO, 171), { still: true });
  cardFx(17);

  // ---------------- a security checkpoint ----------------
  const GATEF = () => () => [mk(qcurve(560, 560, 560, 300, 0, 8), 12, INK2, { prof: 'even', a: 0.7 }), mk(qcurve(720, 560, 720, 300, 0, 8), 12, INK2, { prof: 'even', a: 0.7 }), mk(qcurve(540, 300, 740, 300, -4, 8), 14, LIV, { prof: 'even', a: 0.7 })];
  scene(18, 18, 'wipe', (c, t) => {
    bg(c, 's18', (g) => { band(g, 560, 760, GREY, 0.18, 181); swatch(g, 640, 200, 220, 90, LIV, 0.12, 182); });
    paint(c, 'gate', 183, GATEF(), pr(t, PS(18), 0.9));
    paint(c, 'livG', 21, LIVERF(), pr(t, PS(18) + 0.2, 0.9), 640, 230, 0.42);
    const arm = ss(pr(t, P(18, 'security'), 0.6)); c.save(); c.translate(720, 430); c.rotate(-1.4 * (1 - arm)); drawS(c, obj('garm', 184, () => mk(qcurve(0, 0, -170, 0, 0, 8), 12, RED, { prof: 'even', a: 0.75 })), pr(t, P(18, 'security') - 0.3, 0.4)); c.restore();
    for (let i = 0; i < 8; i++) { const r = H.rng(1850 + i), x = 120 + ((t - PS(18)) * 90 + i * 70) % 420, bad = i % 3 === 1; blob(c, x, 500 - (i % 2) * 20, 16, 15, bad ? INK2 : [RED, OCH, MOSS][i % 3], bad ? 0.55 : 0.6, 1860 + i, 0.2); }
    for (let i = 0; i < 5; i++) { const x = 790 + ((t - PS(18)) * 90 + i * 90) % 420; blob(c, x, 500 - (i % 2) * 20, 15, 14, [RED, OCH, MOSS][i % 3], 0.6, 1870 + i, 0.2); }
    hand(c, 'checkpoint', 640, 640, 46, pr(t, P(18, 'checkpoint') - 0.1, 0.8), RED);
  });
  fx(PS(18), 'brush', { d: 0.9 }); fx(P(18, 'security'), 'thock'); fx(P(18, 'checkpoint'), 'pen', { d: 0.8 });

  // ---------------- a lobule: hepatocytes in rows like the pages of a book ----------------
  const LOB = (() => { const o = []; const cx = 640, cy = 360, R = 230; for (let k = 0; k < 18; k++) { const a = (k / 18) * 6.283; for (let j = 1; j <= 7; j++) { const d = 30 + j * 27; const hexK = 1 / Math.cos(((a + Math.PI / 6) % (Math.PI / 3)) - Math.PI / 6); if (d > R * hexK * 0.98) continue; o.push({ x: cx + Math.cos(a) * d, y: cy + Math.sin(a) * d * 0.92, k, j, a }); } } return o; })();
  const HEXP = (() => { const o = []; for (let i = 0; i < 6; i++) { const a = (i / 6) * 6.283 + Math.PI / 6; o.push([640 + Math.cos(a) * 250, 360 + Math.sin(a) * 250 * 0.92]); } return o; })();
  const HEXF = () => () => [...edgeStrokes([...HEXP, HEXP[0]].slice(0, 6), INK2, 3, 0.55), mk([HEXP[5], HEXP[0]], 3, INK2, { prof: 'even', nb: 0, a: 0.55 })];
  function lobule(c, t, t0, grow = 1.6) {
    blob(c, 640, 360, 250, 228, ROSE, 0.18, 1901, 0.06);
    paint(c, 'hex', 1902, HEXF(), pr(t, t0, 0.8));
    LOB.forEach((q, i) => cell(c, q.x, q.y, 11, i % 4 ? LIVL : LIV, pr(t, t0 + 0.2 + (q.j / 7) * grow * 0.6 + (q.k / 18) * grow * 0.4, 0.35), 1, 1910 + i, LIV2));
    blob(c, 640, 360, 22, 20, VIO, 0.5 * ss(pr(t, t0 + 0.2, 0.5)), 1903);
  }
  scene(19, 20, 'wipe', (c, t) => {
    bg(c, 's19', (g) => { swatch(g, 1110, 600, 120, 70, VIO, 0.14, 191); swatch(g, 170, 130, 110, 70, LIV, 0.14, 192); });
    lobule(c, t, PS(19));
    note(c, 'hepatocytes', 1060, 210, 790, 300, P(19, 'hepatocytes') - 0.1, t, 40, LIV2, 'center', -12);
    mono(c, 'millions of liver cells', 1060, 260, 18, pr(t, P(19, 'hepatocytes') + 0.4, 0.6));
    note(c, 'rows, like pages', 200, 560, 470, 420, P(20, 'rows') - 0.1, t, 38, INK2, 'center', 12);
    mono(c, 'one tiny lobule', 640, 680, 18, pr(t, PS(19) + 0.5, 0.6));
    // book pages hint: a small fan of strokes at the corner
    if (t > P(20, 'book') - 0.2) for (let i = 0; i < 6; i++) drawS(c, obj('pg' + i, 1930 + i, () => mk(qcurve(200, 480, 200 + Math.cos(-2.6 + i * 0.25) * 90, 480 + Math.sin(-2.6 + i * 0.25) * 90, 6, 8), 4, INK2, { prof: 'tip', nb: 0, a: 0.6 })), pr(t, P(20, 'book') - 0.2 + i * 0.06, 0.4));
  }, { still: true });
  fx(PS(19), 'brush', { d: 0.8 }); fx(PS(19) + 0.2, 'patter', { d: 1.6 }); fx(P(19, 'hepatocytes'), 'pen', { d: 1 }); fx(P(20, 'rows'), 'pen', { d: 1 }); fx(P(20, 'book'), 'paper', {});

  // ---------------- blood seeps between the rows; cells grab what shouldn't be there ----------------
  scene(21, 23, 'cut', (c, t) => {
    bg(c, 's19', (g) => { swatch(g, 1110, 600, 120, 70, VIO, 0.14, 191); swatch(g, 170, 130, 110, 70, LIV, 0.14, 192); });
    lobule(c, t, -10);
    const t0 = PS(21);
    for (let i = 0; i < 36; i++) {
      const r = H.rng(2100 + i), k = Math.floor(r() * 18) + 0.5, a = (k / 18) * 6.283, sp = 0.22 + r() * 0.08, u = 1 - (((t - t0) * sp + r()) % 1);
      if (t < t0) continue; const d = 30 + u * 200, x = 640 + Math.cos(a) * d, y = 360 + Math.sin(a) * d * 0.92;
      const bad = i % 4 === 0, grabbed = bad && t > P(22, 'grab') + (i % 5) * 0.2;
      if (bad) { const g = grabbed ? ss(pr(t, P(22, 'grab') + (i % 5) * 0.2, 0.7)) : 0; blob(c, x, y, 7, 6, mixc(INK2, LIVL, g), 0.7 * (1 - g * 0.8), 2150 + i, 0.2); }
      else rbc(c, x, y, 6, ss(pr(t, t0, 0.5)), 2200 + i, a);
    }
    hand(c, 'blood seeps through', 1060, 150, 36, pr(t, P(21, 'blood'), 0.9), RED);
    hand(c, 'grab!', 1080, 360, 52, pr(t, P(22, 'grab') - 0.1, 0.5), INK2);
    const items = [['pg', PILLF(), 'old medicines', 'medicines'], ['gl', GLASSF(), 'alcohol', 'alcohol'], ['fl', FLASKF(), 'chemicals', 'chemicals']];
    items.forEach(([k, f, lab, w], j) => { const tt = P(23, w) - 0.15, x = 180, y = 230 + j * 140; paint(c, 'it' + k, 2300 + j, f, pr(t, tt, 0.5), x, y, 1.2); hand(c, lab, x, y + 52, 26, pr(t, tt + 0.1, 0.6), INK2);
      const br = ss(pr(t, P(23, 'broken'), 0.8)); if (br > 0) hand(c, '✗', x + 52, y - 10, 36, br, RED); });
    hand(c, 'broken down here', 640, 660, 40, pr(t, P(23, 'broken') - 0.1, 0.8), RED);
  }, { still: true });
  fx(PS(21), 'flow', { d: 2.5 }); fx(P(22, 'grab'), 'pop'); fx(P(23, 'old'), 'pen', { d: 0.6 }); fx(P(23, 'alcohol'), 'pen', { d: 0.5 }); fx(P(23, 'broken'), 'erase', { d: 0.8 });

  // ---------------- ammonia -> urea -> kidneys ----------------
  const ARMF = () => () => { const P2 = chaikin([[-120, -20], [-60, -60], [10, -70], [60, -40], [110, -30], [120, 10], [60, 20], [0, 30], [-80, 30], [-125, 15]], 2); return fillStrokes(P2, MAR, { step: 10, a: 0.5, ew: 2.6 }); };
  scene(24, 27, 'wipe', (c, t) => {
    bg(c, 's24', (g) => { band(g, 600, 760, SAGE, 0.16, 241); swatch(g, 640, 300, 150, 120, LIV, 0.1, 242); });
    paint(c, 'arm', 243, ARMF(), pr(t, PS(24), 0.9), 200, 300, 1);
    hand(c, 'muscles', 200, 380, 32, pr(t, P(24, 'muscles') - 0.1, 0.6), INK2);
    const ta = P(24, 'ammonia'), tox = P(25, 'toxic');
    for (let i = 0; i < 10; i++) { const r = H.rng(2400 + i), u = ((t - ta) * 0.35 + r()) % 1; if (t < ta) continue; const x = lerp(290, 560, u) + Math.sin(u * 9 + i) * 12, y = 290 + (r() - 0.5) * 90; blob(c, x, y, 9 + (t > tox ? 3 * Math.sin(t * 8 + i) : 0), 8, MOSS, 0.65 * ss(pr(t, ta, 0.4)) * (1 - u * 0.3), 2410 + i, 0.25); }
    note(c, 'ammonia', 420, 170, 420, 260, ta - 0.1, t, 42, MOSS, 'center', 8);
    mono(c, 'toxic if it builds up', 420, 125, 18, pr(t, tox - 0.1, 0.6), RED);
    paint(c, 'livA', 21, LIVERF(), pr(t, PS(24) + 0.3, 0.9), 680, 300, 0.48);
    const tu = P(26, 'urea');
    for (let i = 0; i < 8; i++) { const r = H.rng(2500 + i), u = ((t - tu) * 0.35 + r()) % 1; if (t < tu) continue; const x = lerp(800, 1030, u), y = 300 + (r() - 0.5) * 60 + u * 140; blob(c, x, y, 7, 9, YEL, 0.7 * ss(pr(t, tu, 0.4)), 2510 + i, 0.2); }
    note(c, 'urea (much safer)', 900, 170, 860, 300, tu - 0.1, t, 38, '#9a7a1a', 'center', -8);
    paint(c, 'kidL', 2520, KIDF(), pr(t, P(27, 'kidneys') - 0.3, 0.6), 1080, 470, 1);
    hand(c, 'kidneys flush it out', 1060, 580, 34, pr(t, P(27, 'kidneys'), 0.8), INK2);
    arrow(c, 980, 560, 1080, 650, pr(t, P(27, 'flush'), 0.5), BLUE, 5, 2530);
  });
  fx(PS(24), 'brush', { d: 0.9 }); fx(P(24, 'ammonia'), 'wet', { d: 1.5 }); fx(P(25, 'toxic'), 'low'); fx(P(26, 'urea'), 'glock', { n: ['E5', 'A5'] }); fx(P(27, 'flush'), 'flow', { d: 1.5 });

  // ================= CHAPTER 3: the bile factory =================
  CH.push([28, 'III · the bile factory']);
  scene(28, 28, 'turn', (c, t) => card(c, t, 28, 'three', 'The bile factory', BILE, 281), { still: true });
  cardFx(28);

  // ---------------- bile, greenish-yellow, up to about a litre a day ----------------
  const JUGF = () => () => [mk(qcurve(-80, -140, -70, 140, 4, 10), 4, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(80, -140, 70, 140, -4, 10), 4, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(-70, 140, 70, 140, -3, 8), 4, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qctrl(80, -100, 140, -60, 78, 40, 8), 4, INK2, { prof: 'even', nb: 0, a: 0.6 }), ...[0, 1, 2, 3].map((i) => mk(qcurve(-74, 100 - i * 60, -44, 100 - i * 60, 0, 3), 2.5, INK2, { prof: 'even', nb: 0, a: 0.6 }))];
  scene(29, 30, 'wipe', (c, t) => {
    bg(c, 's29', (g) => { swatch(g, 380, 330, 260, 170, BILE, 0.12, 291); band(g, 610, 760, OCH, 0.13, 292); });
    paint(c, 'livA', 21, LIVERF(), pr(t, PS(29), 0.8), 380, 300, 0.8);
    const tb = P(29, 'bile');
    for (let i = 0; i < 7; i++) { const u = ((t - tb) * 0.5 + i / 7) % 1; if (t < tb) continue; blob(c, lerp(470, 820, u), 380 + Math.sin(u * 3.14) * -60 + u * 40, 8, 10, BILE, 0.7 * ss(pr(t, tb, 0.4)), 2930 + i, 0.15); }
    note(c, 'bile', 380, 120, 400, 210, tb - 0.1, t, 54, BILE2, 'center', 8);
    mono(c, 'greenish-yellow juice', 380, 520, 20, pr(t, P(29, 'greenishyellow') - 0.1, 0.6));
    paint(c, 'jug', 2940, JUGF(), pr(t, PS(29) + 0.4, 0.8), 930, 380, 1);
    const lv = ss(ph(t, tb, P(30, 'day') + 0.3));
    if (lv > 0) { c.save(); c.beginPath(); c.rect(856, 380 + 136 - 250 * lv, 148, 250 * lv); c.clip(); wash(c, [[856, 260], [1004, 260], [1000, 516], [860, 516]], BILE, 0.5, 2950, 3); c.restore(); }
    bignum(c, '≈ 1 litre', 930, 600, 64, pr(t, P(30, 'litre') - 0.15, 0.5), BILE2);
    mono(c, 'every day', 930, 655, 18, pr(t, P(30, 'day') - 0.1, 0.5));
  });
  fx(PS(29), 'brush', { d: 0.8 }); fx(P(29, 'bile'), 'wet', { d: 2.5 }); fx(P(30, 'litre'), 'glock', { n: ['D5', 'A5'] });

  // ---------------- like dish soap: big fat blobs -> tiny droplets ----------------
  const DROPS = (() => { const r = H.rng(3101), o = []; for (let i = 0; i < 40; i++) { const a = r() * 6.283, d = 40 + r() * 170; o.push({ x: Math.cos(a) * d * 1.3, y: Math.sin(a) * d * 0.8, r: 6 + r() * 8 }); } return o; })();
  scene(31, 33, 'wipe', (c, t) => {
    bg(c, 's31', (g) => { swatch(g, 640, 380, 380, 200, BLUE, 0.1, 311); swatch(g, 1120, 130, 100, 60, BILE, 0.16, 312); });
    hand(c, 'bile ≈ dish soap', 640, 120, 54, pr(t, P(31, 'dish') - 0.3, 0.9), BILE2);
    const tb = P(32, 'breaks'), sp = ss(ph(t, tb, P(32, 'droplets') + 0.4));
    if (sp < 1) { c.save(); c.globalAlpha *= 1 - sp; blob(c, 520, 380, 120 * ss(pr(t, PS(31), 0.8)), 90 * ss(pr(t, PS(31), 0.8)), FAT, 0.6, 3110, 0.12); blob(c, 770, 400, 80 * ss(pr(t, PS(31) + 0.2, 0.8)), 62 * ss(pr(t, PS(31) + 0.2, 0.8)), FAT, 0.6, 3111, 0.12); c.restore(); }
    if (sp > 0) DROPS.forEach((d, i) => blob(c, 640 + d.x * sp, 390 + d.y * sp, d.r * ss(sp), d.r * ss(sp) * 0.9, FAT, 0.7, 3120 + i, 0.1));
    for (let i = 0; i < 10; i++) { const r = H.rng(3150 + i), a = r() * 6.283; if (t > tb - 0.4) drawS(c, obj('bl' + i, 3160 + i, () => mk(polar(640 + Math.cos(a) * 260, 390 + Math.sin(a) * 160, a + Math.PI, 70, rnd(-12, 12), 6), 9, BILE, { prof: 'tip', a: 0.7 })), pr(t, tb - 0.4 + i * 0.05, 0.5)); }
    hand(c, 'big blobs of fat', 300, 230, 34, pr(t, P(32, 'big') - 0.1, 0.7) * (1 - sp * 0.6), '#9a7a1a');
    hand(c, 'tiny droplets', 1000, 600, 40, pr(t, P(32, 'droplets') - 0.1, 0.7), '#9a7a1a');
    hand(c, 'now your gut can digest them', 640, 670, 34, pr(t, P(33, 'digest') - 0.2, 0.9), INK2);
  });
  fx(PS(31), 'brush', { d: 0.8 }); fx(P(31, 'dish'), 'pen', { d: 0.8 }); fx(P(32, 'breaks'), 'patter', { d: 1.5 }); fx(P(33, 'digest'), 'pen', { d: 0.9 });

  // ---------------- the gallbladder waits between meals ----------------
  scene(34, 34, 'wipe', (c, t) => {
    bg(c, 's34', (g) => { swatch(g, 640, 360, 300, 170, LIV, 0.08, 341); band(g, 620, 760, SAGE, 0.15, 342); });
    paint(c, 'livB', 21, LIVERF(), 1, 640, 320, 1.2);
    const tg = P(34, 'pouch') - 0.2, f = ss(ph(t, tg, PE(34)));
    paint(c, 'gbag', 3400, () => fillStrokes(chaikin(ellPts(0, 0, 44, 26, 12, 0.4), 1), BILE, { step: 8, a: 0.55, ink: BILE2, ew: 2.2 }), pr(t, tg, 0.7), 640 - 30 * 1.2, 320 + 96 * 1.2, 1.2);
    if (f > 0) { c.save(); c.globalAlpha *= f; blob(c, 604, 435, 34, 20, BILE2, 0.45, 3401, 0.15); c.restore(); }
    note(c, 'the gallbladder', 900, 560, 640, 440, P(34, 'gallbladder') - 0.2, t, 42, BILE2, 'center', -14);
    hand(c, 'between meals, bile waits here', 330, 140, 34, pr(t, PS(34) + 0.1, 1.0), INK2);
  });
  fx(P(34, 'pouch') - 0.2, 'brush', { d: 0.7 }); fx(P(34, 'gallbladder'), 'pen', { d: 1 });

  // ---------------- old red blood cells -> why poop is brown ----------------
  scene(35, 37, 'mist', (c, t) => {
    bg(c, 's35', (g) => { swatch(g, 900, 380, 200, 160, BROWN, 0.1, 351); swatch(g, 250, 380, 200, 150, RED, 0.08, 352); });
    hand(c, "here's a weird one", 640, 130, 52, pr(t, PS(35), 0.9), RED);
    const tc = P(36, 'old'), tt = P(37, 'turns');
    for (let i = 0; i < 9; i++) { const r = H.rng(3500 + i), x = 180 + (i % 3) * 70 + r() * 20, y = 300 + Math.floor(i / 3) * 70; const k = ss(ph(t, tc + 0.4, tt)); c.save(); c.globalAlpha *= 1 - k * 0.5; rbc(c, x, y, 22, pr(t, tc - 0.3 + i * 0.05, 0.4), 3510 + i, r()); c.restore(); }
    hand(c, 'old red blood cells', 250, 560, 32, pr(t, tc, 0.8), RED);
    arrow(c, 400, 370, 560, 370, pr(t, P(36, 'leftovers'), 0.5), INK2, 5, 3530);
    const kb = ss(pr(t, P(36, 'leftovers') + 0.2, 1));
    for (let i = 0; i < 6; i++) blob(c, 610 + (i % 3) * 26, 350 + Math.floor(i / 3) * 30, 11 * kb, 10 * kb, mixc(BILE, OCH, 0.5), 0.6, 3540 + i, 0.2);
    mono(c, 'leftovers ride out in bile', 650, 440, 16, pr(t, P(36, 'leftovers') + 0.3, 0.6));
    arrow(c, 720, 370, 830, 370, pr(t, tt - 0.2, 0.5), INK2, 5, 3550);
    const kp = ss(pr(t, tt, 1.1)); blob(c, 960, 370, 95 * kp, 80 * kp, BROWN, 0.55, 3560, 0.15); blob(c, 945, 355, 55 * kp, 40 * kp, mixc(BROWN, OCH, 0.4), 0.3, 3561, 0.2);
    hand(c, "that's why poop is brown", 960, 520, 38, pr(t, P(37, 'poop') - 0.1, 0.8), BROWN);
  });
  fx(PS(35), 'pen', { d: 0.9 }); fx(P(36, 'old'), 'patter', { d: 0.6 }); fx(P(36, 'leftovers'), 'brush', { d: 0.8 }); fx(P(37, 'turns'), 'wet', { d: 1 }); fx(P(37, 'poop'), 'boing');

  // ================= CHAPTER 4: the pantry =================
  CH.push([38, 'IV · the pantry']);
  scene(38, 38, 'turn', (c, t) => card(c, t, 38, 'four', 'The pantry', OCH, 381), { still: true });
  cardFx(38);

  // ---------------- extra sugar packed away as glycogen ----------------
  // glycogen granule: a branching cluster of sugar dabs (a painted tree of beads)
  const GRAN = (() => { const o = []; const br = (x, y, a, n, d) => { for (let i = 0; i < n; i++) { x += Math.cos(a) * 14; y += Math.sin(a) * 14; o.push([x, y, d + i]); if (i === 2 && d < 2) br(x, y, a + 0.9, n - 1, d + 1); if (i === 4 && d < 2) br(x, y, a - 0.8, n - 2, d + 1); } }; for (let k = 0; k < 5; k++) br(0, 0, (k / 5) * 6.283, 6, 0); return o; })();
  function granule(c, x, y, s, p, seed) { GRAN.forEach(([gx, gy, d], i) => { const q = pr(p, (d / 10) * 0.6 + (i % 5) * 0.02, 0.35); if (q > 0) blob(c, x + gx * s, y + gy * s, 6 * s * eo(q), 6 * s * eo(q), i % 3 ? GLY : SUG, 0.7, seed + i, 0.2); }); }
  scene(39, 40, 'wipe', (c, t) => {
    bg(c, 's39', (g) => { swatch(g, 640, 360, 360, 200, OCH, 0.1, 391); band(g, 620, 760, SAGE, 0.14, 392); });
    paint(c, 'livA', 21, LIVERF(), pr(t, PS(39), 0.8), 820, 330, 1.0);
    const ts = P(39, 'sugar') - 0.2;
    for (let i = 0; i < 14; i++) { const r = H.rng(3900 + i), u = clamp((t - ts - i * 0.12) / 1.4); if (u <= 0) continue; const x = lerp(140 + r() * 120, 680 + r() * 300, eio(u)), y = lerp(260 + r() * 240, 260 + r() * 140, eio(u)); c.save(); c.globalAlpha *= 1 - ss(ph(t, P(40, 'glycogen') - 0.2, P(40, 'glycogen') + 0.4)) * (u >= 1 ? 1 : 0); blob(c, x, y, 9, 9, SUG, 0.85, 3920 + i, 0.15); c.restore(); }
    hand(c, 'extra sugar', 230, 200, 40, pr(t, ts, 0.7), '#9a7a1a');
    const tg = P(40, 'glycogen') - 0.3;
    [[740, 300], [880, 280], [820, 380]].forEach(([x, y], j) => granule(c, x, y, 1.1, ph(t, tg + j * 0.2, tg + j * 0.2 + 1.2), 3950 + j * 40));
    note(c, 'glycogen', 820, 560, 820, 420, P(40, 'glycogen') - 0.1, t, 48, GLY, 'center', 10);
    mono(c, 'a starch made of packed sugar', 820, 615, 18, pr(t, P(40, 'starch'), 0.6));
  });
  fx(PS(39), 'brush', { d: 0.8 }); fx(P(39, 'sugar') - 0.2, 'patter', { d: 1.6 }); fx(P(40, 'glycogen') - 0.3, 'coin'); fx(P(40, 'glycogen'), 'pen', { d: 1 });

  // ---------------- at night it unpacks sugar for the brain ----------------
  scene(41, 43, 'mist', (c, t) => {
    bg(c, 's41', (g) => { band(g, -80, 260, NAVY, 0.2, 411); band(g, 600, 760, NAVY, 0.1, 412); swatch(g, 1110, 110, 46, 46, YEL, 0.45, 413); swatch(g, 1095, 100, 40, 40, PAPER, 0.5, 414); });
    hand(c, 'between meals · while you sleep', 640, 110, 38, pr(t, PS(41), 1.0), NAVY);
    for (let i = 0; i < 3; i++) hand(c, 'z', 1000 + i * 28, 210 - i * 26, 30 + i * 6, pr(t, P(41, 'sleep') + i * 0.2, 0.3), NAVY);
    paint(c, 'livA', 21, LIVERF(), 1, 380, 420, 0.75);
    const un = ss(ph(t, P(42, 'turns'), P(42, 'sugar') + 0.4));
    [[340, 400], [440, 390], [400, 460]].forEach(([x, y], j) => { c.save(); c.globalAlpha *= 1 - un * 0.7; granule(c, x, y, 0.75, 1, 4100 + j * 40); c.restore(); });
    paint(c, 'brain', 4150, BRAINF(), pr(t, P(43, 'brain') - 0.4, 0.8), 960, 400, 1.3);
    if (un > 0) for (let i = 0; i < 12; i++) { const u = ((t - P(42, 'turns')) * 0.4 + i / 12) % 1; const x = lerp(470, 880, u), y = 420 + Math.sin(u * 3.14) * -80; blob(c, x, y, 7, 7, SUG, 0.85 * un, 4160 + i, 0.15); }
    hand(c, 'glycogen → sugar', 400, 560, 36, pr(t, P(42, 'glycogen') - 0.1, 0.8), '#9a7a1a');
    note(c, 'fuel for your brain', 960, 560, 960, 470, P(43, 'brain') - 0.1, t, 38, RED, 'center', 8);
  });
  fx(PS(41), 'pen', { d: 1 }); fx(P(42, 'turns'), 'flow', { d: 2.5 }); fx(P(43, 'brain'), 'glock', { n: ['C5', 'E5'] });

  // ---------------- the pantry shelf: vitamins A, D, B12 and iron ----------------
  const JAR = (col) => () => [mk(qcurve(-42, -50, -46, 56, 2, 8), 3.5, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(42, -50, 46, 56, -2, 8), 3.5, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(-46, 56, 46, 56, -2, 6), 3.5, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(-48, -58, 48, -58, -1, 6), 12, BROWN, { prof: 'even', a: 0.6 }), ...[0, 1, 2, 3, 4].map((i) => mk(qcurve(-36, 40 - i * 14, 36, 40 - i * 14, rnd(-3, 3), 6), 14, col, { prof: 'even', a: 0.42 }))];
  const SHELFF = () => () => [mk(qcurve(160, 470, 1120, 470, -3, 14), 16, BROWN, { prof: 'even', a: 0.55 }), mk(qcurve(180, 486, 1100, 486, 2, 14), 4, mixc(BROWN, INK, 0.4), { prof: 'even', nb: 0, a: 0.45 })];
  scene(44, 45, 'wipe', (c, t) => {
    bg(c, 's44', (g) => { swatch(g, 640, 380, 480, 160, OCH, 0.1, 441); swatch(g, 1130, 120, 90, 60, RED, 0.12, 442); });
    paint(c, 'shelf', 4400, SHELFF(), pr(t, PS(44), 0.8));
    const J = [['A', OCH, P(44, 'a')], ['D', YEL, P(44, 'd')], ['B12', RED, P(45, 'b')], ['iron', GREY, P(45, 'iron')]];
    J.forEach(([n, col, tt], j) => { const x = 300 + j * 230; paint(c, 'jar' + j, 4410 + j, JAR(col), pr(t, tt - 0.3, 0.6), x, 405, 1); hand(c, n === 'iron' ? 'iron' : 'vit. ' + n, x, 405, n.length > 2 ? 34 : 40, pr(t, tt - 0.05, 0.5), INK); });
    hand(c, 'stored for later', 640, 580, 42, pr(t, P(45, 'later') - 0.2, 0.8), RED);
    mono(c, 'the liver keeps a stash', 640, 190, 22, pr(t, P(44, 'stash') - 0.1, 0.6));
  });
  fx(PS(44), 'brush', { d: 0.8 }); [P(44, 'a'), P(44, 'd'), P(45, 'b'), P(45, 'iron')].forEach((tt) => fx(tt - 0.1, 'thock')); fx(P(45, 'later'), 'pen', { d: 0.8 });

  // ---------------- proteins that make a cut stop bleeding ----------------
  scene(46, 47, 'wipe', (c, t) => {
    bg(c, 's46', (g) => { swatch(g, 640, 380, 400, 180, SKIN, 0.22, 461); });
    paint(c, 'livA', 21, LIVERF(), pr(t, PS(46), 0.7), 210, 200, 0.4);
    const tp = P(46, 'proteins');
    for (let i = 0; i < 8; i++) { const u = ((t - tp) * 0.4 + i / 8) % 1; if (t < tp) continue; blob(c, lerp(300, 560, u), lerp(220, 360, u), 6, 6, VIO, 0.7 * ss(pr(t, tp, 0.4)), 4600 + i, 0.2); }
    hand(c, 'clotting proteins', 430, 180, 34, pr(t, tp - 0.1, 0.7), VIO);
    // a skin cut: a red line, then a mesh of strands closes it
    paint(c, 'cutline', 4610, () => [mk(qcurve(600, 400, 960, 380, -10, 12), 9, RED, { prof: 'tip', a: 0.75 })], pr(t, P(47, 'cut') - 0.3, 0.5));
    const mesh = ph(t, P(47, 'stop') - 0.2, PE(47) + 0.3);
    for (let i = 0; i < 16; i++) drawS(c, obj('mesh' + i, 4620 + i, () => { const x = 610 + i * 22; return mk(qcurve(x, 360 + rnd(-8, 8), x + rnd(-30, 30), 425 + rnd(-8, 8), rnd(-8, 8), 6), 2.2, VIO, { prof: 'even', nb: 0, a: 0.75 }); }), pr(mesh, i / 22, 0.3));
    if (mesh > 0.7) { c.save(); c.globalAlpha *= ss((mesh - 0.7) / 0.3); blob(c, 780, 392, 180, 22, mixc(RED, BROWN, 0.5), 0.35, 4650, 0.2); c.restore(); }
    hand(c, 'a cut stops bleeding', 780, 520, 42, pr(t, P(47, 'stop') - 0.1, 0.8), RED);
  });
  fx(PS(46), 'brush', { d: 0.7 }); fx(P(46, 'proteins'), 'flow', { d: 2 }); fx(P(47, 'cut') - 0.3, 'swish'); fx(P(47, 'stop'), 'pen', { d: 1 });

  // ================= CHAPTER 5: the comeback organ =================
  CH.push([48, 'V · the comeback organ']);
  scene(48, 48, 'turn', (c, t) => card(c, t, 48, 'five', 'The comeback organ', SAGE, 481), { still: true });
  cardFx(48);

  // ---------------- up to two thirds removed; the rest starts growing ----------------
  scene(49, 51, 'wipe', (c, t) => {
    bg(c, 's49', (g) => { swatch(g, 640, 360, 380, 190, ROSE, 0.12, 491); band(g, 620, 760, SAGE, 0.15, 492); });
    hand(c, 'that superpower', 640, 110, 46, pr(t, P(49, 'superpower') - 0.2, 0.8), RED);
    const tr = P(50, 'remove'), cut = ss(ph(t, tr, P(50, 'thirds') + 0.3));
    liverClip(c, 'livA', 21, {}, 640, 370, 1.15, -260 + 300 * cut, 280, 1);
    if (cut > 0 && cut < 1) { c.save(); c.globalAlpha *= 0.5 * Math.sin(cut * 3.14); blob(c, 640 + (-260 + 300 * cut - 30) * 1.15, 370, 60, 140, PAPER, 0.8, 4930, 0.3); c.restore(); }
    c.save(); c.globalAlpha *= 0.55 * ss(pr(t, PS(50), 0.4)); c.setLineDash([8, 9]); c.strokeStyle = INK2; c.lineWidth = 2; c.beginPath(); LIVERP.forEach(([x, y], i) => (i ? c.lineTo(640 + x * 1.15, 370 + y * 1.15) : c.moveTo(640 + x * 1.15, 370 + y * 1.15))); c.closePath(); c.stroke(); c.restore();
    hand(c, 'up to 2/3 removed', 400, 560, 40, pr(t, P(50, 'two') - 0.1, 0.8), INK2);
    const tg = P(51, 'growing');
    if (t > tg) for (let j = 0; j < 3; j++) { const q = ((t - tg) * 0.8 + j / 3) % 1; c.save(); c.globalAlpha *= 0.55 * (1 - q); c.strokeStyle = SAGE; c.lineWidth = 3; c.beginPath(); c.arc(640 + 40 * 1.15, 370, 30 + q * 90, 2.2, 4.1); c.stroke(); c.restore(); }
    note(c, 'starts growing right away', 960, 580, 760, 420, tg - 0.1, t, 38, MOSS, 'center', -12);
  });
  fx(P(49, 'superpower'), 'pen', { d: 0.8 }); fx(P(50, 'remove'), 'erase', { d: 1.2 }); fx(P(51, 'growing'), 'glock', { n: ['C5', 'E5', 'G5'] });

  // ---------------- the cells divide; most of its size back in a few weeks ----------------
  scene(52, 53, 'wipe', (c, t) => {
    bg(c, 's52', (g) => { swatch(g, 330, 330, 220, 200, LIVL, 0.1, 521); swatch(g, 930, 360, 260, 160, ROSE, 0.1, 522); });
    const td = P(52, 'divide') - 0.3, gens = clamp((t - td) / 0.7, 0, 3.999), g = Math.floor(gens), f = ss(gens - g), n = 1 << g;
    cell(c, 0, 0, 0, LIV, 0);
    for (let i = 0; i < n; i++) { const pos = (k, m) => { const cols = Math.ceil(Math.sqrt(m)), rows = Math.ceil(m / cols); return [330 + ((k % cols) - (cols - 1) / 2) * (180 / cols + 20), 330 + (Math.floor(k / cols) - (rows - 1) / 2) * (180 / rows + 20)]; };
      const [x0, y0] = t < td ? [330, 330] : pos(i, n), [x1a, y1a] = pos(2 * i, n * 2), [x1b, y1b] = pos(2 * i + 1, n * 2), r = 70 / Math.sqrt(n);
      if (g >= 3 || t < td) cell(c, x0, y0, g >= 3 ? 70 / Math.sqrt(8) : 70, LIVL, pr(t, PS(52), 0.5), 1, 5200 + i, LIV2);
      else { const rr = lerp(r, 70 / Math.sqrt(n * 2), f); cell(c, lerp(x0, x1a, f), lerp(y0, y1a, f), rr, LIVL, 1, 1, 5200 + 2 * i, LIV2); cell(c, lerp(x0, x1b, f), lerp(y0, y1b, f), rr, LIVL, 1, 1, 5201 + 2 * i, LIV2); }
    }
    hand(c, 'cells divide', 330, 560, 42, pr(t, td + 0.2, 0.8), LIV2);
    const tw = P(53, 'liver') - 0.2, gr = ss(ph(t, tw, P(53, 'weeks') + 0.6));
    liverClip(c, 'livA', 21, {}, 930, 330, 0.85, lerp(40, -250, gr), 280, pr(t, tw - 0.6, 0.6));
    const wk = Math.min(4, Math.floor(gr * 4 + 0.001));
    for (let i = 0; i < 4; i++) { const on = i < wk; c.save(); c.globalAlpha *= pr(t, tw, 0.4); blob(c, 810 + i * 80, 520, 26, 22, on ? SAGE : GREY, on ? 0.5 : 0.18, 5300 + i, 0.15); c.restore(); mono(c, 'wk ' + (i + 1), 810 + i * 80, 520, 14, pr(t, tw, 0.4)); }
    hand(c, 'most of it back in weeks', 930, 600, 38, pr(t, P(53, 'few') - 0.2, 0.8), RED);
  });
  fx(P(52, 'divide') - 0.3, 'pop'); fx(P(52, 'divide') + 0.4, 'pop'); fx(P(52, 'divide') + 1.1, 'pop'); fx(P(53, 'liver') - 0.2, 'wet', { d: 2.5 }); fx(P(53, 'weeks'), 'glock', { n: ['G5', 'C6'] });

  // ---------------- living donors: both pieces grow into full-size livers ----------------
  scene(54, 56, 'wipe', (c, t) => {
    bg(c, 's54', (g) => { band(g, 600, 760, SAGE, 0.18, 541); swatch(g, 640, 300, 200, 120, ROSE, 0.12, 542); });
    hand(c, 'living donors', 640, 90, 52, pr(t, P(54, 'living') - 0.2, 0.8), INK2);
    paint(c, 'pA', 5400, PERSONF(BLUE), pr(t, PS(55), 0.8), 260, 590, 1.3);
    paint(c, 'pB', 5401, PERSONF(OCH), pr(t, P(55, 'someone') - 0.3, 0.8), 1020, 590, 1.3);
    hand(c, 'healthy donor', 260, 650, 30, pr(t, P(55, 'healthy') - 0.1, 0.6), INK2);
    hand(c, 'someone in need', 1020, 650, 30, pr(t, P(55, 'needs') - 0.1, 0.6), INK2);
    const tx = P(55, 'gives'), mv = ss(ph(t, tx, tx + 1.4)), gw = ss(ph(t, P(56, 'grow') - 0.2, PE(56) + 0.4));
    // donor keeps the big lobe, the gift (left lobe) travels across, then both grow to full
    liverClip(c, 'livA', 21, {}, 260, 230, 0.5, -260, lerp(t < tx ? 280 : 40, 280, gw), pr(t, PS(55) + 0.3, 0.7));
    if (t > tx) { const x = lerp(260, 1020, mv), y = 230 - Math.sin(mv * 3.14) * 60; liverClip(c, 'livA', 21, {}, x, y, 0.5, lerp(40, -260, gw), 280, 1); }
    arrow(c, 420, 330, 860, 330, pr(t, tx, 0.8) * (1 - gw), RED, 5, 5410);
    hand(c, 'both grow back to full size', 640, 520, 40, pr(t, P(56, 'grow') - 0.1, 0.9), RED);
  });
  fx(P(54, 'living'), 'pen', { d: 0.8 }); fx(PS(55), 'brush', { d: 0.8 }); fx(P(55, 'gives'), 'swish'); fx(P(56, 'grow'), 'wet', { d: 2 }); fx(P(56, 'fullsize'), 'glock', { n: ['E5', 'A5'] });

  // ---------------- how does it know when to stop? ----------------
  scene(57, 57, 'mist', (c, t) => {
    bg(c, 's57', (g) => { swatch(g, 640, 380, 300, 160, BLUE, 0.1, 571); });
    paint(c, 'axes', 5700, () => [mk(qcurve(380, 520, 900, 520, 0, 10), 3, INK2, { prof: 'even', nb: 0, a: 0.7 }), mk(qcurve(380, 520, 380, 240, 0, 8), 3, INK2, { prof: 'even', nb: 0, a: 0.7 })], pr(t, PS(57), 0.6));
    paint(c, 'curve', 5701, () => { const pts = []; for (let i = 0; i <= 30; i++) { const u = i / 30; pts.push([390 + u * 500, 510 - 230 / (1 + Math.exp(-(u - 0.35) * 12))]); } return [mk(pts, 7, SAGE, { prof: 'even', a: 0.75 })]; }, pr(t, PS(57) + 0.3, 1.8));
    mono(c, 'liver size', 330, 230, 16, pr(t, PS(57) + 0.2, 0.5), INK2, 'left');
    mono(c, 'time', 900, 548, 16, pr(t, PS(57) + 0.2, 0.5));
    hand(c, 'stop!', 900, 250, 46, pr(t, P(57, 'stop') - 0.2, 0.5), RED);
    hand(c, 'how does it know? scientists are still working it out', 640, 640, 32, pr(t, P(57, 'scientists'), 1.4), INK2);
  });
  fx(PS(57) + 0.3, 'brush', { d: 1.8 }); fx(P(57, 'stop') - 0.2, 'tick');

  // ---------------- ending: the quiet organ under your ribs, four jobs, 500+ ----------------
  CH.push([58, '']);
  scene(58, 61, 'wipe', (c, t) => {
    bg(c, 's58', (g) => { swatch(g, 640, 380, 220, 300, SKIN, 0.18, 581); band(g, 640, 760, SAGE, 0.14, 582); });
    paint(c, 'torso', 53, TORSOF(), pr(t, PS(58), 1.0), 640, 400, 1);
    paint(c, 'livA', 21, LIVERF(), pr(t, P(59, 'quiet') - 0.2, 1.0), 610, 430, 0.5);
    const words = [['filtering', VIO, 260, 220], ['storing', '#9a7a1a', 1020, 220], ['building', RED, 260, 560], ['regrowing', MOSS, 1020, 560]];
    words.forEach(([w, col, x, y]) => note(c, w, x, y, 610 + (x < 640 ? -60 : 60), 430 + (y < 400 ? -30 : 30), P(60, w) - 0.1, t, 44, col, 'center', x < 640 ? 10 : -10));
    const cl = ss(ph(t, P(61, 'more') - 0.3, P(61, 'once') + 0.5));
    if (cl > 0) { const g = c.createRadialGradient(610, 430, lerp(900, 120, cl), 610, 430, lerp(1000, 260, cl)); g.addColorStop(0, rgba(PAPER, 0)); g.addColorStop(1, rgba(PAPER, 0.92)); c.fillStyle = g; c.fillRect(-100, -100, W + 200, HH + 200); }
    bignum(c, '500+ jobs', 640, 140, 80, pr(t, P(61, 'five') - 0.2, 0.6), RED);
    hand(c, 'all at once', 640, 640, 40, pr(t, P(61, 'all') - 0.1, 0.7), INK2);
  });
  fx(PS(58), 'brush', { d: 1 }); fx(P(59, 'quiet') - 0.2, 'brush', { d: 1 }); ['filtering', 'storing', 'building', 'regrowing'].forEach((w) => fx(P(60, w) - 0.1, 'pen', { d: 0.6 })); fx(P(61, 'five'), 'glock', { n: ['C5', 'G5', 'C6'] }); fx(P(61, 'more'), 'mist', { d: 2 });

  // ---------------- teaser: what happens if you swallow chewing gum? ----------------
  scene(62, 63, 'turn', (c, t) => {
    bg(c, 's62', (g) => { swatch(g, 640, 400, 340, 160, '#e7a1b3', 0.12, 621); });
    mono(c, 'next time', 640, 120, 24, pr(t, PS(62), 0.5));
    title(c, 'Swallowed gum?', 640, 200, 72, pr(t, P(62, 'swallow') - 0.2, 0.9));
    const gp = pr(t, P(62, 'chewing') - 0.2, 1.2); if (gp > 0) { const k = eo(gp); blob(c, 640, 400, 110 * k, 70 * k, '#e7a1b3', 0.6, 622, 0.18); blob(c, 620, 385, 60 * k, 34 * k, '#f3c9d4', 0.4, 623, 0.2); blob(c, 680, 420, 30 * k, 20 * k, '#cf7f96', 0.3, 624, 0.2); }
    hand(c, 'stuck inside for 7 years?', 640, 600, 46, pr(t, P(63, 'seven') - 0.4, 1.0), RED);
  });
  fx(PS(62) - 0.05, 'turn'); fx(P(62, 'chewing') - 0.2, 'wet', { d: 1.2 }); fx(P(63, 'seven') - 0.4, 'pen', { d: 1 });

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
  // ================= THUMBNAIL: a painted liver beside huge words =================
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    ctx.drawImage(paperL(), 0, 0);
    swatch(ctx, 360, 380, 330, 210, ROSE, 0.22, 901); band(ctx, 640, 760, SAGE, 0.25, 902); swatch(ctx, 920, 560, 300, 90, RED, 0.12, 903);
    paint(ctx, 'livA', 21, LIVERF(), 1, 350, 400, 1.15);
    txt(ctx, 'YOUR LIVER', 910, 170, '600 104px "Bodoni Moda"', INK, 1, 'center', true);
    txt(ctx, 'does', 910, 290, 'italic 500 84px "Bodoni Moda"', INK2, 1, 'center', true);
    bignum(ctx, '500 JOBS', 910, 430, 124, 1, RED);
    hand(ctx, '…and it grows back!', 910, 590, 50, 1, INK2);
    ctx.restore();
  }
  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s - 0.05 ? j : a), 0) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();