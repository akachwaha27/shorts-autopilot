// ================= Low-Poly Faceted, 16:9: "Why can some animals see colors we can't even imagine?" =================
// Long explainer (3 min). Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// Medium: the reference's tiny flat-shaded 3D pipeline (faceted terrain, Lambert facets, depth fog, cone trees) for the
// outdoor scenes, and its 2D faceted toolkit (cut-corner tags, two-tone ribbon arrows, hex badges, faceted gems,
// mosaic backdrops, facet-flip transitions) for the diagram scenes.
(function () {
  // ---------- BEATS: voiceover phrases (phrases.json, Kokoro af_heart, natural mode) ----------
  const PH = [{"s":0.25,"e":2.73,"text":"Hummingbirds see colors your brain has never made.","words":[["hummingbirds",0.25],["see",0.96],["colors",1.14],["your",1.49],["brain",1.73],["has",2.02],["never",2.2],["made",2.5]]},{"s":3.16,"e":5.21,"text":"Not brighter colors, or sharper ones.","words":[["not",3.16],["brighter",3.36],["colors",3.91],["or",4.32],["sharper",4.46],["ones",4.93]]},{"s":5.67,"e":7.53,"text":"Whole new colors, with no names.","words":[["whole",5.67],["new",6.04],["colors",6.26],["with",6.71],["no",7.01],["names",7.16]]},{"s":7.9,"e":10.98,"text":"So how can an animal see a color we can't even imagine?","words":[["so",7.9],["how",8.04],["can",8.26],["an",8.48],["animal",8.63],["see",9.07],["a",9.29],["color",9.37],["we",9.73],["cant",9.88],["even",10.17],["imagine",10.47]]},{"s":11.5,"e":13.42,"text":"To find out, we have to start with you.","words":[["to",11.5],["find",11.63],["out",11.9],["we",12.1],["have",12.23],["to",12.49],["start",12.63],["with",12.96],["you",13.22]]},{"s":13.84,"e":16.01,"text":"Light travels in waves of different lengths.","words":[["light",13.84],["travels",14.13],["in",14.54],["waves",14.66],["of",14.95],["different",15.07],["lengths",15.6]]},{"s":16.48,"e":18.61,"text":"Your eyes catch a tiny slice of them,","words":[["your",16.48],["eyes",16.77],["catch",17.06],["a",17.43],["tiny",17.5],["slice",17.8],["of",18.16],["them",18.31]]},{"s":19.0,"e":21.76,"text":"from about 400 to 700 nanometers.","words":[["from",19.0],["about",19.41],["400",19.92],["to",20.23],["700",20.43],["nanometers",20.74]]},{"s":22.22,"e":23.55,"text":"That slice is the rainbow,","words":[["that",22.22],["slice",22.47],["is",22.79],["the",22.91],["rainbow",23.1]]},{"s":23.9,"e":25.99,"text":"violet at one end and red at the other.","words":[["violet",23.9],["at",24.32],["one",24.45],["end",24.66],["and",24.87],["red",25.08],["at",25.29],["the",25.43],["other",25.64]]},{"s":26.47,"e":29.77,"text":"Inside your eye are three kinds of color cells, called cones.","words":[["inside",26.47],["your",26.87],["eye",27.14],["are",27.35],["three",27.55],["kinds",27.88],["of",28.22],["color",28.36],["cells",28.69],["called",29.03],["cones",29.43]]},{"s":30.23,"e":33.75,"text":"One likes blue light best, one likes green, and one likes red.","words":[["one",30.23],["likes",30.45],["blue",30.82],["light",31.11],["best",31.48],["one",31.77],["likes",31.99],["green",32.36],["and",32.73],["one",32.95],["likes",33.17],["red",33.53]]},{"s":34.2,"e":35.67,"text":"Every color you've ever seen,","words":[["every",34.2],["color",34.52],["youve",34.84],["ever",35.16],["seen",35.41]]},{"s":36.09,"e":39.2,"text":"is your brain comparing how hard those three are firing.","words":[["is",36.09],["your",36.22],["brain",36.49],["comparing",36.83],["how",37.44],["hard",37.65],["those",37.92],["three",38.26],["are",38.59],["firing",38.8]]},{"s":39.58,"e":42.64,"text":"Yellow? That's your red and green cones firing together.","words":[["yellow",39.58],["thats",39.99],["your",40.33],["red",40.6],["and",40.8],["green",41.01],["cones",41.35],["firing",41.69],["together",42.09]]},{"s":43.02,"e":44.17,"text":"And here's a fun one.","words":[["and",43.02],["heres",43.25],["a",43.63],["fun",43.71],["one",43.94]]},{"s":44.51,"e":46.29,"text":"Purple isn't in the rainbow at all.","words":[["purple",44.51],["isnt",44.91],["in",45.17],["the",45.3],["rainbow",45.5],["at",45.96],["all",46.09]]},{"s":46.72,"e":50.13,"text":"When your red and blue cones fire, but green stays quiet,","words":[["when",46.72],["your",47.02],["red",47.32],["and",47.55],["blue",47.78],["cones",48.08],["fire",48.46],["but",48.76],["green",48.99],["stays",49.37],["quiet",49.75]]},{"s":50.57,"e":52.7,"text":"your brain invents a color to fill the gap.","words":[["your",50.57],["brain",50.82],["invents",51.13],["a",51.57],["color",51.63],["to",51.94],["fill",52.07],["the",52.32],["gap",52.51]]},{"s":53.07,"e":55.32,"text":"Scientists call that a non-spectral color.","words":[["scientists",53.07],["call",53.71],["that",53.97],["a",54.23],["nonspectral",54.29],["color",55.0]]},{"s":55.76,"e":57.1,"text":"Hold on to that idea.","words":[["hold",55.76],["on",56.09],["to",56.26],["that",56.43],["idea",56.76]]},{"s":57.46,"e":58.89,"text":"Now take one cone away.","words":[["now",57.46],["take",57.7],["one",58.02],["cone",58.25],["away",58.57]]},{"s":59.33,"e":61.69,"text":"Dogs have just two, tuned to blue and yellow.","words":[["dogs",59.33],["have",59.6],["just",59.87],["two",60.14],["tuned",60.34],["to",60.68],["blue",60.82],["and",61.08],["yellow",61.29]]},{"s":62.09,"e":63.93,"text":"So a red ball on green grass,","words":[["so",62.09],["a",62.26],["red",62.34],["ball",62.59],["on",62.93],["green",63.09],["grass",63.51]]},{"s":64.29,"e":66.83,"text":"looks to a dog like two similar, muddy shades.","words":[["looks",64.29],["to",64.64],["a",64.78],["dog",64.85],["like",65.07],["two",65.35],["similar",65.56],["muddy",66.05],["shades",66.4]]},{"s":67.27,"e":68.91,"text":"Fewer cones, fewer colors.","words":[["fewer",67.27],["cones",67.66],["fewer",68.05],["colors",68.44]]},{"s":69.17,"e":70.52,"text":"So what happens with more?","words":[["so",69.17],["what",69.3],["happens",69.55],["with",70.0],["more",70.26]]},{"s":71.07,"e":73.69,"text":"Honeybees have three cones too, but they're shifted.","words":[["honeybees",71.07],["have",71.63],["three",71.88],["cones",72.19],["too",72.5],["but",72.69],["theyre",72.88],["shifted",73.25]]},{"s":74.15,"e":76.35,"text":"They see ultraviolet, blue and green.","words":[["they",74.15],["see",74.44],["ultraviolet",74.66],["blue",75.47],["and",75.77],["green",75.99]]},{"s":76.7,"e":79.01,"text":"Red? To a bee, red mostly looks dark.","words":[["red",76.7],["to",76.95],["a",77.12],["bee",77.21],["red",77.47],["mostly",77.72],["looks",78.24],["dark",78.66]]},{"s":79.39,"e":81.74,"text":"Lots of flowers that look plain yellow to us,","words":[["lots",79.39],["of",79.65],["flowers",79.78],["that",80.24],["look",80.5],["plain",80.76],["yellow",81.09],["to",81.48],["us",81.61]]},{"s":82.09,"e":84.55,"text":"have dark ultraviolet bullseyes in the middle.","words":[["have",82.09],["dark",82.35],["ultraviolet",82.6],["bullseyes",83.29],["in",83.86],["the",83.99],["middle",84.18]]},{"s":84.91,"e":86.33,"text":"They work like landing lights,","words":[["they",84.91],["work",85.14],["like",85.37],["landing",85.59],["lights",85.99]]},{"s":86.6,"e":88.25,"text":"pointing the bee straight to the nectar.","words":[["pointing",86.6],["the",87.0],["bee",87.15],["straight",87.3],["to",87.7],["the",87.8],["nectar",87.95]]},{"s":88.6,"e":90.38,"text":"Many birds go one step further.","words":[["many",88.6],["birds",88.89],["go",89.24],["one",89.39],["step",89.6],["further",89.88]]},{"s":90.84,"e":94.2,"text":"They have four cone types, including one for ultraviolet.","words":[["they",90.84],["have",91.13],["four",91.42],["cone",91.7],["types",91.99],["including",92.34],["one",92.99],["for",93.2],["ultraviolet",93.42]]},{"s":94.67,"e":97.81,"text":"Male and female blue tits look almost the same to us.","words":[["male",94.67],["and",94.97],["female",95.19],["blue",95.64],["tits",95.94],["look",96.24],["almost",96.54],["the",96.99],["same",97.21],["to",97.51],["us",97.66]]},{"s":98.24,"e":101.17,"text":"But in ultraviolet, the males' crowns shine brighter.","words":[["but",98.24],["in",98.45],["ultraviolet",98.58],["the",99.33],["males",99.54],["crowns",99.88],["shine",100.29],["brighter",100.63]]},{"s":101.54,"e":102.75,"text":"Now remember purple.","words":[["now",101.54],["remember",101.75],["purple",102.32]]},{"s":103.08,"e":105.89,"text":"With three cones, you get one non-spectral color.","words":[["with",103.08],["three",103.37],["cones",103.73],["you",104.09],["get",104.3],["one",104.52],["nonspectral",104.73],["color",105.53]]},{"s":106.29,"e":108.9,"text":"With four cones, there are way more ways to mix.","words":[["with",106.29],["four",106.57],["cones",106.85],["there",107.2],["are",107.56],["way",107.77],["more",107.98],["ways",108.26],["to",108.54],["mix",108.68]]},{"s":109.26,"e":114.04,"text":"In 2020, scientists tested wild hummingbirds in the Rocky Mountains.","words":[["in",109.26],["2020",109.43],["scientists",109.77],["tested",110.6],["wild",111.11],["hummingbirds",111.44],["in",112.45],["the",112.61],["rocky",112.86],["mountains",113.28]]},{"s":114.48,"e":118.06,"text":"They lit up feeders with mixes like ultraviolet plus green.","words":[["they",114.48],["lit",114.78],["up",115.0],["feeders",115.14],["with",115.65],["mixes",115.95],["like",116.31],["ultraviolet",116.6],["plus",117.41],["green",117.7]]},{"s":118.47,"e":121.31,"text":"And the birds learned to tell them apart from plain green.","words":[["and",118.47],["the",118.65],["birds",118.83],["learned",119.13],["to",119.55],["tell",119.67],["them",119.92],["apart",120.16],["from",120.46],["plain",120.7],["green",121.01]]},{"s":121.68,"e":123.22,"text":"That's a color you will never see.","words":[["thats",121.68],["a",121.98],["color",122.04],["you",122.33],["will",122.51],["never",122.75],["see",123.04]]},{"s":123.64,"e":125.17,"text":"It isn't greenish, or bluish.","words":[["it",123.64],["isnt",123.78],["greenish",124.06],["or",124.61],["bluish",124.75]]},{"s":125.62,"e":127.74,"text":"It's something your brain has no slot for,","words":[["its",125.62],["something",125.81],["your",126.39],["brain",126.64],["has",126.96],["no",127.16],["slot",127.29],["for",127.54]]},{"s":128.13,"e":130.51,"text":"like trying to picture a brand new primary color.","words":[["like",128.13],["trying",128.36],["to",128.72],["picture",128.84],["a",129.26],["brand",129.32],["new",129.62],["primary",129.8],["color",130.22]]},{"s":130.94,"e":133.52,"text":"So more cones always means more colors, right?","words":[["so",130.94],["more",131.08],["cones",131.36],["always",131.71],["means",132.12],["more",132.47],["colors",132.75],["right",133.17]]},{"s":134.01,"e":135.29,"text":"Meet the mantis shrimp.","words":[["meet",134.01],["the",134.28],["mantis",134.48],["shrimp",134.88]]},{"s":135.57,"e":137.93,"text":"It has around twelve kinds of color receptors.","words":[["it",135.57],["has",135.69],["around",135.88],["twelve",136.25],["kinds",136.62],["of",136.94],["color",137.06],["receptors",137.37]]},{"s":138.33,"e":141.44,"text":"For years, people said it must see a mind-blowing rainbow.","words":[["for",138.33],["years",138.53],["people",138.87],["said",139.28],["it",139.55],["must",139.68],["see",139.95],["a",140.16],["mindblowing",140.22],["rainbow",140.97]]},{"s":141.81,"e":145.24,"text":"But in 2014, scientists actually tested it.","words":[["but",141.81],["in",142.1],["2014",142.3],["scientists",142.69],["actually",143.67],["tested",144.46],["it",145.05]]},{"s":145.62,"e":148.23,"text":"And it was worse than you at telling close shades apart.","words":[["and",145.62],["it",145.79],["was",145.91],["worse",146.08],["than",146.37],["you",146.61],["at",146.78],["telling",146.9],["close",147.3],["shades",147.59],["apart",147.94]]},{"s":148.59,"e":150.57,"text":"Instead of comparing cones like we do,","words":[["instead",148.59],["of",149.04],["comparing",149.17],["cones",149.74],["like",150.06],["we",150.32],["do",150.45]]},{"s":151.0,"e":154.18,"text":"it seems to read colors directly, like a barcode scanner.","words":[["it",151.0],["seems",151.14],["to",151.49],["read",151.63],["colors",151.9],["directly",152.32],["like",152.87],["a",153.15],["barcode",153.22],["scanner",153.7]]},{"s":154.58,"e":155.83,"text":"Fast, but not fine.","words":[["fast",154.58],["but",154.94],["not",155.2],["fine",155.47]]},{"s":156.2,"e":158.4,"text":"So why bother seeing ultraviolet at all?","words":[["so",156.2],["why",156.33],["bother",156.53],["seeing",156.93],["ultraviolet",157.33],["at",158.06],["all",158.2]]},{"s":158.85,"e":161.16,"text":"Take reindeer, out in the snowy Arctic.","words":[["take",158.85],["reindeer",159.15],["out",159.74],["in",159.97],["the",160.12],["snowy",160.34],["arctic",160.71]]},{"s":161.63,"e":165.93,"text":"Snow reflects ultraviolet, but their favorite food, lichen, soaks it up.","words":[["snow",161.63],["reflects",161.93],["ultraviolet",162.52],["but",163.34],["their",163.56],["favorite",163.93],["food",164.52],["lichen",164.82],["soaks",165.26],["it",165.63],["up",165.78]]},{"s":166.35,"e":169.4,"text":"So scientists think lichen pops out as dark patches,","words":[["so",166.35],["scientists",166.5],["think",167.2],["lichen",167.56],["pops",167.98],["out",168.27],["as",168.48],["dark",168.62],["patches",168.91]]},{"s":169.79,"e":171.06,"text":"against the glowing snow.","words":[["against",169.79],["the",170.22],["glowing",170.4],["snow",170.82]]},{"s":171.45,"e":174.24,"text":"Every animal sees the colors it needs to survive.","words":[["every",171.45],["animal",171.8],["sees",172.22],["the",172.5],["colors",172.71],["it",173.12],["needs",173.26],["to",173.61],["survive",173.75]]},{"s":174.7,"e":177.45,"text":"Your three cones are just one version of the world.","words":[["your",174.7],["three",174.97],["cones",175.3],["are",175.64],["just",175.84],["one",176.11],["version",176.31],["of",176.78],["the",176.91],["world",177.12]]},{"s":177.81,"e":180.36,"text":"And somewhere, a hummingbird is looking at a flower,","words":[["and",177.81],["somewhere",177.99],["a",178.54],["hummingbird",178.6],["is",179.27],["looking",179.39],["at",179.82],["a",179.94],["flower",180.0]]},{"s":180.73,"e":181.95,"text":"in a color you'll never know.","words":[["in",180.73],["a",180.84],["color",180.9],["youll",181.17],["never",181.45],["know",181.72]]},{"s":182.37,"e":184.02,"text":"Next up, what actually happens,","words":[["next",182.37],["up",182.63],["what",182.77],["actually",183.03],["happens",183.56]]},{"s":184.25,"e":185.21,"text":"when a bee stings you?","words":[["when",184.25],["a",184.48],["bee",184.53],["stings",184.7],["you",185.04]]}];
  const P = (i, w, n = 1) => { let k = 0; for (const q of PH[i].words) if (q[0] === w && ++k === n) return q[1]; if (window.MISSWORD) window.MISSWORD.push([i, w]); return PH[i].s; };
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const W = 1280, HH = 720, TAU = Math.PI * 2;
  const cl = H.clamp;
  const ph = (t, a, b) => cl((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const BK = (t, a, d = 0.3) => (t <= a ? 0 : H.ease.back(ph(t, a, a + d)));
  const OUT = (t, a, d = 0.3) => 1 - EI(t, a, a + d);
  const INK = '#2a1f4f', CORAL = '#ff7060', MINT = '#3ccf9a', CREAM = '#fff6f0';
  const FONT = (px) => `700 ${px}px "Space Grotesk"`;
  try { ['700 64px "Space Grotesk"', '400 28px "Space Grotesk"'].forEach((f) => document.fonts.load(f, 'AaZz09?!')); } catch (e) {}

  // colour of light by wavelength (nm), for rainbow strips
  function wl(n) {
    const S = [[380, [120, 60, 200]], [420, [110, 70, 230]], [460, [60, 110, 255]], [490, [40, 200, 230]], [520, [70, 210, 110]], [560, [190, 225, 60]], [580, [255, 220, 50]], [610, [255, 140, 40]], [650, [240, 60, 50]], [700, [190, 30, 50]]];
    if (n <= S[0][0]) return S[0][1];
    for (let i = 0; i < S.length - 1; i++) if (n <= S[i + 1][0]) return H.mix(S[i][1], S[i + 1][1], (n - S[i][0]) / (S[i + 1][0] - S[i][0]));
    return S[S.length - 1][1];
  }
  const COL = { uv: [176, 92, 255], blue: [70, 120, 255], green: [70, 205, 110], red: [245, 72, 60], yellow: [255, 214, 60], purple: [190, 60, 200] };

  // ================= 2D faceted toolkit (from the reference) =================
  function tri2(ctx, a, b, c, col) { ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.lineTo(c[0], c[1]); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  function lpTag(ctx, x, y, text, o = {}) {
    const k = o.k ?? 1; if (k <= 0.01) return;
    ctx.save();
    ctx.font = o.font || FONT(32);
    const fsz = parseInt((ctx.font.match(/(\d+)px/) || [0, 32])[1]);
    const w = ctx.measureText(text).width + fsz * 1.3, h = o.h || Math.round(fsz * 1.75), ch = h * 0.32;
    ctx.translate(x, y); ctx.scale(k, k);
    const pts = [[-w / 2 + ch, -h / 2], [w / 2, -h / 2], [w / 2, h / 2 - ch], [w / 2 - ch, h / 2], [-w / 2, h / 2], [-w / 2, -h / 2 + ch]];
    ctx.fillStyle = o.shadow || 'rgba(40,20,70,0.35)'; ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0] + 4, p[1] + 4) : ctx.moveTo(p[0] + 4, p[1] + 4)); ctx.closePath(); ctx.fill();
    const bg = H.hex(o.bg || CREAM);
    ctx.fillStyle = H.rgba(bg); ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.closePath(); ctx.fill();
    ctx.fillStyle = H.rgba(H.mix(bg, [255, 255, 255], 0.5)); ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); ctx.lineTo(pts[1][0], pts[1][1]); ctx.lineTo(w / 2 - h * 0.6, 0); ctx.lineTo(-w / 2, 0); ctx.lineTo(pts[5][0], pts[5][1]); ctx.closePath(); ctx.fill();
    ctx.fillStyle = o.col || INK; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 0, 1);
    ctx.restore();
  }
  function lpArrow(ctx, a, c, b, prog, colA, w = 12) {
    if (prog <= 0) return null;
    const q = (u) => [(1 - u) * (1 - u) * a[0] + 2 * u * (1 - u) * c[0] + u * u * b[0], (1 - u) * (1 - u) * a[1] + 2 * u * (1 - u) * c[1] + u * u * b[1]];
    const N = 8, pts = []; for (let i = 0; i <= N; i++) pts.push(q(prog * i / N));
    const light = H.rgba(H.mix(colA, [255, 255, 255], 0.3)), dark = H.rgba(H.mix(colA, [40, 20, 70], 0.25));
    const end = pts.length - 1;
    for (let i = 0; i < end; i++) {
      const p0 = pts[i], p1 = pts[i + 1], dx = p1[0] - p0[0], dy = p1[1] - p0[1], L = Math.hypot(dx, dy) || 1;
      const nx = -dy / L * w / 2, ny = dx / L * w / 2, shrink = i === end - 1 ? 0.35 : 0, p1b = [p1[0] - dx * shrink, p1[1] - dy * shrink];
      ctx.fillStyle = light; ctx.beginPath(); ctx.moveTo(p0[0] + nx, p0[1] + ny); ctx.lineTo(p1b[0] + nx, p1b[1] + ny); ctx.lineTo(p1b[0], p1b[1]); ctx.lineTo(p0[0], p0[1]); ctx.closePath(); ctx.fill();
      ctx.fillStyle = dark; ctx.beginPath(); ctx.moveTo(p0[0] - nx, p0[1] - ny); ctx.lineTo(p1b[0] - nx, p1b[1] - ny); ctx.lineTo(p1b[0], p1b[1]); ctx.lineTo(p0[0], p0[1]); ctx.closePath(); ctx.fill();
    }
    const e = pts[end], e0 = pts[end - 1], ang = Math.atan2(e[1] - e0[1], e[0] - e0[0]);
    ctx.save(); ctx.translate(e[0], e[1]); ctx.rotate(ang);
    ctx.fillStyle = light; ctx.beginPath(); ctx.moveTo(4, 0); ctx.lineTo(-w * 1.4, -w * 1.1); ctx.lineTo(-w * 1.4, 0); ctx.closePath(); ctx.fill();
    ctx.fillStyle = dark; ctx.beginPath(); ctx.moveTo(4, 0); ctx.lineTo(-w * 1.4, w * 1.1); ctx.lineTo(-w * 1.4, 0); ctx.closePath(); ctx.fill();
    ctx.restore(); return q;
  }
  function hexBadge(ctx, x, y, k, ok, r = 30) {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.rotate(0.12);
    ctx.fillStyle = ok ? MINT : '#ff5a4a'; ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * TAU; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.beginPath(); ctx.moveTo(0, 0); for (let i = 3; i <= 6; i++) { const a = i / 6 * TAU; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = r * 0.2; ctx.lineJoin = 'miter'; ctx.beginPath(); const s = r / 24;
    if (ok) { ctx.moveTo(-10 * s, 0); ctx.lineTo(-3 * s, 8 * s); ctx.lineTo(11 * s, -9 * s); } else { ctx.moveTo(-8 * s, -8 * s); ctx.lineTo(8 * s, 8 * s); ctx.moveTo(8 * s, -8 * s); ctx.lineTo(-8 * s, 8 * s); }
    ctx.stroke(); ctx.restore();
  }
  // faceted gem: 8 facets around a centre, lit from the top-left
  function gem(ctx, x, y, r, c, k = 1, rot = 0, glow = 0) {
    if (k <= 0.01) return;
    const col = Array.isArray(c) ? c : H.hex(c);
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.rotate(rot);
    if (glow > 0.01) { const g = ctx.createRadialGradient(0, 0, r * 0.4, 0, 0, r * 2.4); g.addColorStop(0, H.rgba(H.mix(col, [255, 255, 255], 0.4), 0.6 * glow)); g.addColorStop(1, H.rgba(col, 0)); ctx.fillStyle = g; ctx.fillRect(-r * 2.5, -r * 2.5, r * 5, r * 5); }
    const n = 8, inner = [];
    for (let i = 0; i < n; i++) { const a = (i + 0.5) / n * TAU - Math.PI / 2; inner.push([Math.cos(a) * r * 0.5, Math.sin(a) * r * 0.5]); }
    for (let i = 0; i < n; i++) {
      const a0 = i / n * TAU - Math.PI / 2, a1 = (i + 1) / n * TAU - Math.PI / 2, p0 = [Math.cos(a0) * r, Math.sin(a0) * r], p1 = [Math.cos(a1) * r, Math.sin(a1) * r];
      const lit = 0.5 + 0.5 * Math.cos((a0 + a1) / 2 + 2.3);
      tri2(ctx, p0, p1, inner[i], H.rgba(H.mix(H.mix(col, [40, 20, 70], 0.3), H.mix(col, [255, 255, 255], 0.35), lit)));
      tri2(ctx, inner[i], inner[(i + n - 1) % n], p0, H.rgba(H.mix(col, [255, 255, 255], 0.1 + 0.25 * lit)));
      tri2(ctx, [0, -r * 0.05], inner[i], inner[(i + 1) % n], H.rgba(H.mix(col, [255, 255, 255], 0.2 + 0.3 * lit)));
    }
    ctx.restore();
  }
  // faceted fill of any convex-ish outline: outer ring + inner ring + centre
  const shadeA = (a) => 0.5 + 0.5 * Math.cos(a + 2.2);
  function facetPoly(ctx, pts, light, dark, seed, inner = 0.55) {
    const n = pts.length; let cx = 0, cy = 0; pts.forEach((p) => { cx += p[0]; cy += p[1]; }); cx /= n; cy /= n;
    const r = H.rng(seed);
    const inn = pts.map((p, i) => { const q = pts[(i + 1) % n]; return [H.lerp(cx, (p[0] + q[0]) / 2, inner), H.lerp(cy, (p[1] + q[1]) / 2, inner)]; });
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n, h = (i + n - 1) % n;
      [[pts[i], pts[j], inn[i]], [pts[i], inn[i], inn[h]], [inn[h], inn[i], [cx, cy]]].forEach((f, k) => {
        const mx = (f[0][0] + f[1][0] + f[2][0]) / 3 - cx, my = (f[0][1] + f[1][1] + f[2][1]) / 3 - cy;
        const sh = shadeA(Math.atan2(my, mx)) * (k === 2 ? 0.6 : 1) + (k === 2 ? 0.25 : 0);
        const col = H.mix(dark, light, cl(sh * 0.85 + 0.1)).map((v) => Math.min(255, v * (0.95 + r() * 0.09)));
        tri2(ctx, f[0], f[1], f[2], H.rgba(col));
      });
    }
  }
  const ell = (cx, cy, rx, ry, n = 10, rot = 0) => { const o = []; for (let i = 0; i < n; i++) { const a = rot + i / n * TAU; o.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]); } return o; };
  function bigNumber(ctx, x, y, str, px, k, fill = '#fff') {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.font = FONT(px); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = 'rgba(30,20,60,0.45)'; ctx.fillText(str, 6, 6); ctx.lineJoin = 'round'; ctx.lineWidth = px * 0.1; ctx.strokeStyle = INK; ctx.strokeText(str, 0, 0); ctx.fillStyle = fill; ctx.fillText(str, 0, 0);
    ctx.restore();
  }
  // faceted vertical bar (cone "firing" level)
  function pillar(ctx, x, base, w, h, col, k = 1) {
    if (h <= 1 || k <= 0.01) return;
    const c = Array.isArray(col) ? col : H.hex(col), d = w * 0.28;
    tri2(ctx, [x - w / 2, base], [x, base + d * 0.5], [x, base - h + d * 0.5], H.rgba(H.mix(c, [255, 255, 255], 0.22)));
    tri2(ctx, [x - w / 2, base], [x, base - h + d * 0.5], [x - w / 2, base - h], H.rgba(H.mix(c, [255, 255, 255], 0.22)));
    tri2(ctx, [x + w / 2, base], [x, base + d * 0.5], [x, base - h + d * 0.5], H.rgba(H.mix(c, [40, 20, 70], 0.18)));
    tri2(ctx, [x + w / 2, base], [x, base - h + d * 0.5], [x + w / 2, base - h], H.rgba(H.mix(c, [40, 20, 70], 0.18)));
    tri2(ctx, [x - w / 2, base - h], [x, base - h + d * 0.5], [x + w / 2, base - h], H.rgba(H.mix(c, [255, 255, 255], 0.5)));
    tri2(ctx, [x - w / 2, base - h], [x, base - h - d * 0.5], [x + w / 2, base - h], H.rgba(H.mix(c, [255, 255, 255], 0.62)));
  }

  // ---------- mosaic backdrops (cached per key) ----------
  const BG = {};
  function mosaicLayer(key, top, bot, glow, glowCol, cs = 120) {
    if (BG[key]) return BG[key];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(key), nx = Math.ceil(W / cs) + 1, ny = Math.ceil(HH / cs) + 1, V = [];
    for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) row.push([i * cs + (i > 0 && i < nx ? r.range(-0.4, 0.4) * cs : 0), j * cs + (j > 0 && j < ny ? r.range(-0.4, 0.4) * cs : 0)]); V.push(row); }
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const a = V[j][i], b = V[j][i + 1], cc = V[j + 1][i], d = V[j + 1][i + 1];
      for (const f of (i + j) % 2 ? [[a, cc, b], [b, cc, d]] : [[a, cc, d], [a, d, b]]) {
        const cy = (f[0][1] + f[1][1] + f[2][1]) / 3, cx = (f[0][0] + f[1][0] + f[2][0]) / 3;
        let col = H.mix(top, bot, cl(cy / HH));
        col = H.mix(col, glowCol, Math.max(0, 1 - Math.hypot(cx - glow[0], cy - glow[1]) / 700) * 0.45);
        tri2(g, f[0], f[1], f[2], H.rgba(col.map((v) => v * (0.94 + r() * 0.1))));
      }
    }
    return (BG[key] = c);
  }
  const bg = (ctx, key, top, bot, glow, glowCol) => ctx.drawImage(mosaicLayer(key, top, bot, glow, glowCol), 0, 0);
  function stars(ctx, n, ymax, seed, a0 = 0.8) { const R0 = H.rng(seed); for (let i = 0; i < n; i++) { const x = R0() * W, y = R0() * ymax, a = (1 - y / ymax) * R0() * a0; ctx.fillStyle = `rgba(255,240,255,${a})`; const s = R0() < 0.15 ? 3 : 2; ctx.fillRect(x, y, s, s); } }

  // ================= tiny 3D pipeline (from the reference): perspective camera + flat-shaded, depth-sorted triangles =================
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  const scl = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
  const ICO = (() => {
    const t = (1 + Math.sqrt(5)) / 2;
    const v = [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]].map(norm);
    const f = [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]];
    return { v, f };
  })();
  function makeCamYaw(pos, yaw, pitch, f) {
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    return {
      pos, f,
      proj(p) {
        const dx = p[0] - pos[0], dy = p[1] - pos[1], dz = p[2] - pos[2];
        const x1 = dx * cy - dz * sy, z1 = dx * sy + dz * cy;
        const y2 = dy * cp + z1 * sp, z2 = -dy * sp + z1 * cp;
        return [W / 2 + (f * x1) / z2, HH / 2 - (f * y2) / z2, z2];
      },
    };
  }
  // camera keyframes [t, x, y, z, yaw, pitch(, f)] eased between
  function camKF(KF, t) {
    let k = 0; while (k < KF.length - 2 && t > KF[k + 1][0]) k++;
    const A = KF[k], B = KF[k + 1], u = H.ease.inOut(cl((t - A[0]) / (B[0] - A[0])));
    const L = (i) => H.lerp(A[i] ?? 760, B[i] ?? 760, u);
    return makeCamYaw([L(1), L(2), L(3)], L(4), L(5), L(6));
  }

  // ---------- views: how a viewer's eye maps colours (human, dog, UV false colour) ----------
  function viewCol(col, uv, view) {
    if (view === 'dog') { const y = col[0] * 0.55 + col[1] * 0.45; return [y * 0.98, y * 0.9, col[2] * 0.9 + y * 0.1]; }
    if (view === 'uv') { const lum = (col[0] * 0.3 + col[1] * 0.55 + col[2] * 0.15) / 255; return H.mix([34, 16, 62], [236, 216, 255], cl(uv * 0.85 + lum * 0.15)); }
    return col;
  }

  // ---------- terrains (cached): meadow valley at dusk, Rocky Mountain morning, Arctic snowfield ----------
  const TER = {};
  function terrain(kind) {
    if (TER[kind]) return TER[kind];
    const nz = H.makeNoise(kind === 'meadow' ? 31 : kind === 'rockies' ? 57 : 83);
    const WATER = -0.6;
    const height = (x, z) => {
      let h;
      if (kind === 'meadow') {
        const valley = Math.pow(Math.abs(x - 14 - 5 * Math.sin(z * 0.035)) / 55, 1.7) * 20;
        h = nz.fbm2(x * 0.045, z * 0.045, 4) * 6 + valley + H.smooth(110, 190, z) * 18 - 2.5;
      } else if (kind === 'rockies') {
        const valley = Math.pow(Math.abs(x - 3 * Math.sin(z * 0.03)) / 50, 1.6) * 22;
        const peaks = H.smooth(70, 150, z) * (22 + Math.abs(nz.n2(x * 0.03, 7.1)) * 40);
        h = nz.fbm2(x * 0.05, z * 0.05, 4) * 7 + valley + peaks - 1;
      } else {
        h = nz.fbm2(x * 0.035, z * 0.035, 4) * 4.5 + Math.pow(Math.abs(x) / 70, 1.6) * 10 + H.smooth(90, 170, z) * 16 + 0.5;
      }
      const d = Math.hypot(x, z - 40); return H.lerp(2, h, H.smooth(7, 15, d)); // plateau for the hero object
    };
    const tris = [], CELL = 4.2, X0 = -100, X1 = 100, Z0 = -14, Z1 = 210;
    const nx = Math.round((X1 - X0) / CELL), nzc = Math.round((Z1 - Z0) / CELL), jr = H.rng(5), V = [];
    for (let j = 0; j <= nzc; j++) { const row = []; for (let i = 0; i <= nx; i++) { const x = X0 + i * CELL + (i > 0 && i < nx ? jr.range(-0.38, 0.38) * CELL : 0), z = Z0 + j * CELL + (j > 0 && j < nzc ? jr.range(-0.38, 0.38) * CELL : 0); row.push([x, height(x, z), z]); } V.push(row); }
    const tc = (y, slope, x, z) => {
      if (kind === 'arctic') {
        const lich = nz.fbm2(x * 0.09 + 11, z * 0.09, 3);
        if (lich > 0.2 && y < 7 && z < 120) return { c: H.mix([128, 132, 96], [160, 150, 104], cl((lich - 0.2) * 3)), uv: 0.06 };
        return { c: slope > 0.5 ? [206, 214, 236] : [240, 244, 252], uv: 0.95 };
      }
      let c;
      const snow = kind === 'rockies' ? 24 : 22;
      if (y < WATER + 0.6) c = [214, 196, 150];
      else if (y < 6) c = H.mix([86, 160, 112], [60, 128, 96], cl(y / 6));
      else if (y < 14) c = H.mix([60, 128, 96], [110, 112, 120], H.smooth(9, 14, y));
      else if (y < snow) c = [118, 110, 128]; else c = [244, 238, 248];
      if (slope > 0.55 && y > 3 && y < snow) c = H.mix(c, [124, 112, 124], 0.6);
      return { c, uv: y >= snow ? 0.9 : 0.22 };
    };
    for (let j = 0; j < nzc; j++) for (let i = 0; i < nx; i++) {
      const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1];
      for (const f of (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]]) {
        if (kind !== 'arctic' && Math.max(f[0][1], f[1][1], f[2][1]) < WATER) { tris.push({ p: f.map((p) => [p[0], WATER + nz.n2(p[0] * 0.4, p[2] * 0.4) * 0.35, p[2]]), col: [96, 120, 190], water: true, uv: 0.3 }); continue; }
        let n = norm(cross(sub(f[1], f[0]), sub(f[2], f[0]))); if (n[1] < 0) n = scl(n, -1);
        const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cz = (f[0][2] + f[1][2] + f[2][2]) / 3;
        const q = tc((f[0][1] + f[1][1] + f[2][1]) / 3, 1 - Math.abs(n[1]), cx, cz);
        tris.push({ p: f, col: q.c, uv: q.uv, terrain: true });
      }
    }
    // cone trees (two stacked 5-sided cones), clustered; sparse dark spruce in the Arctic
    const tr = H.rng(9);
    const cone = (base, r, h, col, rot) => { const vs = [add3(base, [0, h, 0])]; for (let i = 0; i < 5; i++) { const a = rot + i / 5 * TAU; vs.push(add3(base, [Math.cos(a) * r, 0, Math.sin(a) * r])); } for (let i = 0; i < 5; i++) tris.push({ p: [vs[0], vs[1 + i], vs[1 + (i + 1) % 5]], col, uv: 0.15, center: add3(base, [0, h * 0.3, 0]) }); };
    const maxT = kind === 'arctic' ? 40 : 190;
    for (let kk = 0, placed = 0; kk < 1800 && placed < maxT; kk++) {
      const x = tr.range(-80, 90), z = tr.range(4, 160), y = height(x, z);
      if (y < 0.6 || y > 13) continue;
      if (Math.hypot(x, z - 40) < 18) continue;
      if (Math.abs(x) < 12 && z < 40) continue; // keep the camera's foreground open
      if (nz.fbm2(x * 0.05 + 40, z * 0.05, 2) < (kind === 'arctic' ? 0.25 : -0.05)) continue;
      const s = tr.range(1.5, 2.4), g = kind === 'arctic' ? H.mix([40, 70, 70], [60, 90, 84], tr()) : H.mix([40, 110, 90], [70, 140, 100], tr()), rot = tr() * 6;
      cone([x, y - 0.2, z], s * 0.75, s * 1.6, g, rot); cone([x, y + s * 0.85, z], s * 0.55, s * 1.4, H.mix(g, kind === 'arctic' ? [230, 236, 250] : [120, 180, 120], 0.25), rot + 0.6);
      placed++;
    }
    return (TER[kind] = { tris, height });
  }

  // ---------- mesh builders (push into a triangle list) ----------
  // local -> world transform: position, yaw about Y, uniform scale
  const xf = (pos, yaw, s = 1) => { const c = Math.cos(yaw), sn = Math.sin(yaw); return (l) => [pos[0] + (l[0] * c - l[2] * sn) * s, pos[1] + l[1] * s, pos[2] + (l[0] * sn + l[2] * c) * s]; };
  function blob(T, X, c, r, col, opt = {}) { // icosahedron blob in local space c=[x,y,z], r=[rx,ry,rz]
    const vs = ICO.v.map((v) => X([c[0] + v[0] * r[0], c[1] + v[1] * r[1], c[2] + v[2] * r[2]])), C = X(c);
    for (const [i, j, k] of ICO.f) T.push({ p: [vs[i], vs[j], vs[k]], col: typeof col === 'function' ? col(ICO.v[i], ICO.v[j], ICO.v[k]) : col, center: C, uv: opt.uv ?? 0.2, ...opt });
  }
  function prismL(T, X, c, r, h, sides, col, rot = 0, opt = {}) { // vertical prism in local space
    const vs = [];
    for (let i = 0; i < sides; i++) { const a = rot + i / sides * TAU; vs.push(X([c[0] + Math.cos(a) * r, c[1], c[2] + Math.sin(a) * r])); }
    for (let i = 0; i < sides; i++) { const a = rot + i / sides * TAU; vs.push(X([c[0] + Math.cos(a) * r, c[1] + h, c[2] + Math.sin(a) * r])); }
    const C = X([c[0], c[1] + h / 2, c[2]]);
    for (let i = 0; i < sides; i++) { const j = (i + 1) % sides; T.push({ p: [vs[i], vs[j], vs[sides + j]], col, center: C, uv: opt.uv ?? 0.2, ...opt }, { p: [vs[i], vs[sides + j], vs[sides + i]], col, center: C, uv: opt.uv ?? 0.2, ...opt }); }
    for (let i = 1; i < sides - 1; i++) T.push({ p: [vs[sides], vs[sides + i], vs[sides + i + 1]], col, center: C, uv: opt.uv ?? 0.2, ...opt });
  }
  function beam(T, X, a, b, r, col, opt = {}) { // 4-sided bar from local a to local b
    const d = sub(b, a), up = Math.abs(d[1]) > 0.9 * Math.hypot(...d) ? [1, 0, 0] : [0, 1, 0];
    const u = scl(norm(cross(d, up)), r), v = scl(norm(cross(d, u)), r), C = X(scl(add3(a, b), 0.5));
    const ring = (p) => [add3(p, u), add3(p, v), sub(p, u), sub(p, v)].map(X), A = ring(a), B = ring(b);
    for (let i = 0; i < 4; i++) { const j = (i + 1) % 4; T.push({ p: [A[i], A[j], B[j]], col, center: C, uv: opt.uv ?? 0.2, ...opt }, { p: [A[i], B[j], B[i]], col, center: C, uv: opt.uv ?? 0.2, ...opt }); }
  }
  // hummingbird: emerald back, ruby throat, needle beak, blurred faceted wings
  function hummingbird(T, pos, yaw, t, s = 1, throat = [228, 40, 86]) {
    const X = xf(pos, yaw, s);
    blob(T, X, [0, 0, 0], [1.25, 0.62, 0.6], (a, b, c) => ((a[1] + b[1] + c[1]) > -0.2 ? [56, 168, 112] : [226, 230, 214]), { bird: true, uv: 0.5 });
    blob(T, X, [1.15, 0.38, 0], [0.5, 0.48, 0.46], (a, b, c) => ((a[1] + b[1] + c[1]) < -0.5 ? throat : [48, 150, 104]), { bird: true, uv: 0.6 });
    const tip = X([3.1, 0.25, 0]), b0 = X([1.55, 0.36, 0.1]), b1 = X([1.55, 0.36, -0.1]), b2 = X([1.55, 0.2, 0]);
    T.push({ p: [tip, b0, b1], col: [40, 30, 40], twoSided: true }, { p: [tip, b1, b2], col: [30, 24, 34], twoSided: true }, { p: [tip, b2, b0], col: [50, 40, 50], twoSided: true });
    const tl = [X([-1.1, 0.05, 0]), X([-2.3, -0.2, 0.45]), X([-2.3, -0.2, -0.45])];
    T.push({ p: tl, col: [40, 110, 90], twoSided: true });
    const flap = Math.sin(t * TAU * 7.5) * 0.9;
    for (const sd of [1, -1]) {
      const root = [0.2, 0.35, 0.35 * sd], tipW = [-0.3, 0.35 + flap * 1.8, (0.35 + 2.4 * Math.cos(flap * 0.6)) * sd], mid = [0.85, 0.4 + flap * 1.1, (0.35 + 1.6 * Math.cos(flap * 0.6)) * sd];
      T.push({ p: [X(root), X(mid), X(tipW)], col: [176, 176, 206], twoSided: true, uv: 0.4 }, { p: [X(root), X(tipW), X([-0.6, 0.3, 0.3 * sd])], col: [150, 150, 186], twoSided: true, uv: 0.4 });
    }
    const eye = X([1.42, 0.5, 0.36 * 1]), eye2 = X([1.42, 0.5, -0.36]);
    return { head: X([1.2, 0.9, 0]), eye, eye2 };
  }
  // flower on a stem: ring of two-sided petals tilted toward the viewer, faceted centre
  function flower3(T, base, h, petal, centre, opt = {}) {
    const X = xf(base, opt.yaw || 0, 1);
    prismL(T, X, [0, 0, 0], 0.18, h, 5, [70, 140, 90], 0, { uv: 0.2 });
    const n = opt.n || 10, R = opt.R || 2.6, tilt = opt.tilt ?? 0.55, C = [0, h, 0];
    const tp = (r, a) => [Math.cos(a) * r, h + Math.sin(a) * r * Math.sin(tilt), -Math.sin(a) * r * Math.cos(tilt) * 0.2 - r * 0.05];
    for (let i = 0; i < n; i++) {
      const a = i / n * TAU, w = TAU / n * 0.42;
      const p0 = tp(R * 0.3, a - w * 1.4), p1 = tp(R, a - w * 0.5), p2 = tp(R * 1.05, a + w * 0.2), p3 = tp(R * 0.3, a + w * 1.4);
      T.push({ p: [X(C), X(p0), X(p1)], col: H.mix(petal, [255, 255, 255], 0.12), twoSided: true, uv: opt.petalUV ?? 0.6, petal: true });
      T.push({ p: [X(C), X(p1), X(p2)], col: petal, twoSided: true, uv: opt.petalUV ?? 0.6, petal: true });
      T.push({ p: [X(C), X(p2), X(p3)], col: H.mix(petal, [120, 60, 30], 0.12), twoSided: true, uv: opt.petalUV ?? 0.6, petal: true });
    }
    blob(T, X, [0, h + 0.15, -0.25], [0.7, 0.55, 0.45], centre, { uv: 0.05, bias: -0.6 });
    return X([0, h, 0]);
  }
  // reindeer: faceted body, white neck ruff, branching antlers
  function reindeer(T, pos, yaw, t, s = 1) {
    const X = xf(pos, yaw, s), fur = [128, 98, 76], dark = [92, 70, 56], ruff = [232, 226, 214];
    blob(T, X, [0, 3.2, 0], [2.4, 1.15, 1.0], fur, { uv: 0.2 });
    blob(T, X, [2.1, 3.7, 0], [0.9, 1.0, 0.85], ruff, { uv: 0.6 });
    const graze = 0.5 + 0.5 * Math.sin(t * 0.9);
    const hx = 3.0 + graze * 0.3, hy = 4.9 - graze * 1.6;
    beam(T, X, [2.2, 4.0, 0], [hx, hy, 0], 0.45, fur, { uv: 0.2 });
    blob(T, X, [hx + 0.55, hy - 0.15, 0], [0.85, 0.48, 0.42], dark, { uv: 0.15 });
    for (const sd of [1, -1]) {
      for (const lx of [1.6, -1.6]) beam(T, X, [lx, 2.6, 0.55 * sd], [lx + 0.1, 0, 0.55 * sd], 0.22, dark, { uv: 0.15 });
      const a0 = [hx + 0.1, hy + 0.35, 0.25 * sd], a1 = [hx - 0.6, hy + 2.0, 0.9 * sd], a2 = [hx - 1.4, hy + 3.1, 1.2 * sd];
      beam(T, X, a0, a1, 0.1, [196, 176, 150]); beam(T, X, a1, a2, 0.08, [196, 176, 150]);
      beam(T, X, a1, [hx + 0.4, hy + 2.6, 1.05 * sd], 0.07, [196, 176, 150]);
      beam(T, X, [hx - 1.0, hy + 2.6, 1.05 * sd], [hx - 0.5, hy + 3.5, 1.3 * sd], 0.06, [196, 176, 150]);
    }
    blob(T, X, [-2.3, 3.6, 0], [0.4, 0.35, 0.35], ruff, { uv: 0.6 });
  }
  function feeder(T, pos, light, glow) { // garden-style feeder on a post with a coloured light panel
    const X = xf(pos, 0, 1);
    prismL(T, X, [0, 0, 0], 0.22, 6, 5, [120, 100, 130]);
    prismL(T, X, [0, 6, 0], 1.2, 1.4, 6, [244, 238, 248], 0.3);
    const L = H.mix(light, [255, 255, 255], 0.25 + 0.25 * glow);
    T.push({ p: [X([-1.2, 7.7, -1.25]), X([1.2, 7.7, -1.25]), X([1.2, 9.9, -1.25])], col: L, emissive: true, twoSided: true });
    T.push({ p: [X([-1.2, 7.7, -1.25]), X([1.2, 9.9, -1.25]), X([-1.2, 9.9, -1.25])], col: H.mix(L, [255, 255, 255], 0.2), emissive: true, twoSided: true });
    prismL(T, X, [0, 7.4, 0.2], 0.35, 0.5, 6, [255, 112, 96]);
  }

  // ---------- shade, cull, project, sort, draw ----------
  const ENV = {
    dusk: { sun: norm([0.75, 0.55, 0.45]), sunCol: [255, 226, 190], amb: [104, 98, 150], fog: [236, 160, 150], fogHi: [180, 140, 190], sky: ['#1b2350', '#4d3f84', '#c06a93', '#ffb08a'], halo: 'rgba(255,214,160,0.5)', sunC: ['#ffd49a', '#fff4d8'] },
    morning: { sun: norm([-0.6, 0.6, 0.5]), sunCol: [255, 238, 214], amb: [120, 130, 170], fog: [214, 196, 214], fogHi: [190, 200, 236], sky: ['#3a5aa8', '#7b93d6', '#d9b3d2', '#ffd3b0'], halo: 'rgba(255,236,200,0.55)', sunC: ['#ffe7b8', '#fffaf0'] },
    arctic: { sun: norm([0.7, 0.35, 0.6]), sunCol: [255, 222, 200], amb: [150, 156, 200], fog: [214, 206, 236], fogHi: [190, 196, 236], sky: ['#1d2a5c', '#46519a', '#b48fc2', '#f6c6b8'], halo: 'rgba(255,214,200,0.45)', sunC: ['#ffd8c0', '#fff4ec'] },
  };
  function sky(ctx, cam, env, view, seed = 77) {
    let cols = env.sky;
    if (view !== 'human') cols = cols.map((c) => H.rgba(viewCol(H.hex(c), view === 'uv' ? 0.75 : 0, view)));
    const g = ctx.createLinearGradient(0, 0, 0, HH * 0.62);
    g.addColorStop(0, cols[0]); g.addColorStop(0.38, cols[1]); g.addColorStop(0.7, cols[2]); g.addColorStop(1, cols[3]);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    stars(ctx, 90, 170, seed, 0.7);
    const sp = cam.proj([cam.pos[0] + 30, cam.pos[1] + 14, cam.pos[2] + 400]);
    if (sp[2] > 0 && view !== 'uv') {
      const gg = ctx.createRadialGradient(sp[0], sp[1], 30, sp[0], sp[1], 320); gg.addColorStop(0, env.halo); gg.addColorStop(1, 'rgba(255,214,160,0)');
      ctx.fillStyle = gg; ctx.fillRect(0, 0, W, HH);
      for (let i = 0; i < 14; i++) { const a0 = (i / 14) * TAU, a1 = ((i + 1) / 14) * TAU; tri2(ctx, sp, [sp[0] + Math.cos(a0) * 50, sp[1] + Math.sin(a0) * 50], [sp[0] + Math.cos(a1) * 50, sp[1] + Math.sin(a1) * 50], H.rgba(viewCol(H.mix(env.sunC[0], env.sunC[1], 0.5 + 0.5 * Math.cos(a0 - 2.3)), 0, view))); }
    }
  }
  function render3D(ctx, cam, tris, env, view = 'human', fogFar = 240) {
    const out = [];
    for (const tri of tris) {
      const [a, b, c] = tri.p;
      let n = norm(cross(sub(b, a), sub(c, a)));
      const cen = scl(add3(add3(a, b), c), 1 / 3);
      if (tri.terrain || tri.water) { if (n[1] < 0) n = scl(n, -1); }
      else if (tri.center) { if (dot(n, sub(cen, tri.center)) < 0) n = scl(n, -1); }
      const toCam = sub(cam.pos, cen);
      if (tri.twoSided) { if (dot(n, toCam) < 0) n = scl(n, -1); }
      else if (dot(n, toCam) <= 0) continue;
      const pa = cam.proj(a), pb = cam.proj(b), pc = cam.proj(c);
      if (pa[2] < 0.5 || pb[2] < 0.5 || pc[2] < 0.5) continue;
      const mnx = Math.min(pa[0], pb[0], pc[0]), mxx = Math.max(pa[0], pb[0], pc[0]), mny = Math.min(pa[1], pb[1], pc[1]), mxy = Math.max(pa[1], pb[1], pc[1]);
      if (mxx < -20 || mnx > W + 20 || mxy < -20 || mny > HH + 20) continue;
      const depth = (pa[2] + pb[2] + pc[2]) / 3 + (tri.bias || 0);
      let col;
      if (tri.emissive) col = tri.col;
      else {
        const lam = Math.max(0, dot(n, env.sun));
        let kk = tri.petal ? 0.55 + 0.5 * lam : tri.bird ? 0.35 + 0.8 * lam : lam;
        if (tri.terrain && lam > 0) {
          const e2 = Math.max((pa[0] - pb[0]) ** 2 + (pa[1] - pb[1]) ** 2, (pb[0] - pc[0]) ** 2 + (pb[1] - pc[1]) ** 2, (pc[0] - pa[0]) ** 2 + (pc[1] - pa[1]) ** 2);
          const area2 = Math.abs((pb[0] - pa[0]) * (pc[1] - pa[1]) - (pc[0] - pa[0]) * (pb[1] - pa[1]));
          if (e2 > 3600) kk *= H.lerp(0.15, 1, H.smooth(0.06, 0.2, area2 / e2));
        }
        const fill = tri.terrain ? 0 : Math.max(0, dot(n, norm([-0.55, 0.6, -0.6]))) * 0.4;
        col = [0, 1, 2].map((i) => tri.col[i] * (env.amb[i] / 255 * 0.85 + env.sunCol[i] / 255 * kk * 0.95 + [176, 186, 255][i] / 255 * fill));
        if (tri.water) {
          const v = norm(toCam), rf = sub(scl(n, 2 * dot(n, v)), v), spec = Math.pow(Math.max(0, dot(rf, norm([0.5, 0.2, 1]))), 12);
          col = H.mix(H.mix([120, 110, 190], [250, 170, 165], cl(0.45 + n[0] * 4 + n[2] * 2)), [255, 236, 200], spec);
        }
      }
      if (view !== 'human') col = viewCol(col, tri.uv ?? 0.2, view);
      const fogK = tri.emissive ? 0 : cl(Math.pow(H.smooth(30, fogFar, depth), 1.15) * 0.9);
      let fc = H.mix(env.fog, env.fogHi, cl(cen[1] / 30)); if (view !== 'human') fc = viewCol(fc, 0.7, view);
      col = H.mix(col, fc, fogK);
      out.push({ pa, pb, pc, depth, col });
    }
    out.sort((p, q) => q.depth - p.depth);
    ctx.lineJoin = 'round';
    for (const o of out) {
      const fs = `rgb(${o.col[0] | 0},${o.col[1] | 0},${o.col[2] | 0})`;
      ctx.fillStyle = fs; ctx.strokeStyle = fs; ctx.lineWidth = 0.9;
      ctx.beginPath(); ctx.moveTo(o.pa[0], o.pa[1]); ctx.lineTo(o.pb[0], o.pb[1]); ctx.lineTo(o.pc[0], o.pc[1]); ctx.closePath(); ctx.fill(); ctx.stroke();
    }
  }
  const sz = (cam, p, wu) => wu * cam.f / p[2];

  // ================= characters & props (2D faceted) =================
  function petFace(c, x, y, r, col, k = 1) { // faceted dog face (reference lpPetFace, dog variant)
    if (k <= 0.01) return;
    c.save(); c.translate(x, y); c.scale(k, k);
    const facet = (pts, cc) => { c.fillStyle = H.rgba(cc); c.strokeStyle = H.rgba(cc); c.lineWidth = 1; c.beginPath(); pts.forEach((p, i) => i ? c.lineTo(p[0] * r, p[1] * r) : c.moveTo(p[0] * r, p[1] * r)); c.closePath(); c.fill(); c.stroke(); };
    const light = H.mix(col, [255, 255, 255], 0.25), dark = H.mix(col, [60, 40, 90], 0.25);
    facet([[-0.75, -0.6], [-1.15, 0.0], [-0.85, 0.75], [-0.55, -0.1]], dark); facet([[0.75, -0.6], [1.15, 0.0], [0.85, 0.75], [0.55, -0.1]], dark);
    const hx = [[0, -0.95], [0.82, -0.48], [0.9, 0.35], [0, 0.95], [-0.9, 0.35], [-0.82, -0.48]];
    for (let i = 0; i < 6; i++) facet([[0, 0], hx[i], hx[(i + 1) % 6]], H.mix(light, dark, i / 5));
    c.fillStyle = INK;
    for (const sx of [-1, 1]) { c.beginPath(); c.moveTo(sx * 0.42 * r, -0.22 * r); c.lineTo(sx * 0.28 * r, -0.05 * r); c.lineTo(sx * 0.48 * r, -0.02 * r); c.closePath(); c.fill(); }
    c.beginPath(); c.moveTo(-0.16 * r, 0.22 * r); c.lineTo(0.16 * r, 0.22 * r); c.lineTo(0, 0.42 * r); c.closePath(); c.fill();
    c.restore();
  }
  function bee2(ctx, x, y, s, t, rot = 0, view = 'human') { // faceted honeybee, side view facing right
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const Y = view === 'uv' ? [120, 90, 160] : [255, 196, 60], K = view === 'uv' ? [40, 24, 60] : [52, 36, 40];
    const flap = Math.sin(t * TAU * 9);
    for (const sd of [0, 1]) { const wy = -34 - flap * 10 - sd * 4; tri2(ctx, [-4, -16], [-30 + sd * 10, wy], [14 + sd * 6, wy - 6], H.rgba([226, 232, 255], 0.75 - sd * 0.2)); }
    facetPoly(ctx, ell(-26, 4, 34, 26, 10), H.mix(Y, [255, 255, 255], 0.3), H.mix(Y, [120, 60, 20], 0.35), 11);
    for (const bx of [-38, -20]) { ctx.save(); ctx.beginPath(); ell(-26, 4, 34, 26, 10).forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.clip(); tri2(ctx, [bx, -30], [bx + 9, -30], [bx + 3, 40], H.rgba(K)); tri2(ctx, [bx + 9, -30], [bx + 12, 40], [bx + 3, 40], H.rgba(K)); ctx.restore(); }
    facetPoly(ctx, ell(14, 0, 18, 17, 8), H.mix(Y, [255, 255, 255], 0.1), H.mix(Y, [90, 50, 20], 0.5), 12);
    facetPoly(ctx, ell(36, 2, 13, 13, 7), H.mix(K, [255, 255, 255], 0.25), K, 13);
    tri2(ctx, [-60, 6], [-70, 4], [-60, 0], H.rgba(K));
    ctx.strokeStyle = H.rgba(K); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(42, -8); ctx.lineTo(52, -24); ctx.moveTo(38, -10); ctx.lineTo(44, -26); ctx.stroke();
    ctx.restore();
  }
  // blue tit, side view; uv: 0 = human colours, 1 = UV false colour; crown = crown UV strength
  function blueTit(ctx, x, y, s, flip, uv, crown) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s * (flip ? -1 : 1), s);
    const C = (hc, u) => H.mix(hc, H.mix([40, 22, 70], [236, 214, 255], u), uv);
    const blue = C([70, 130, 220], 0.25 + 0.75 * crown), wing = C([80, 120, 200], 0.3), belly = C([250, 214, 70], 0.18), back = C([140, 170, 120], 0.2), white = C([248, 248, 244], 0.55), black = C([30, 30, 50], 0.05);
    // tail + legs
    tri2(ctx, [-60, 10], [-118, 26], [-112, 40], H.rgba(H.mix(wing, [40, 20, 70], 0.15))); tri2(ctx, [-60, 10], [-112, 40], [-64, 30], H.rgba(wing));
    ctx.strokeStyle = H.rgba(C([90, 90, 120], 0.1)); ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(-6, 54); ctx.lineTo(-10, 80); ctx.moveTo(12, 54); ctx.lineTo(10, 80); ctx.stroke();
    facetPoly(ctx, ell(-6, 18, 64, 44, 12), H.mix(belly, [255, 255, 255], 0.25), H.mix(belly, [120, 80, 20], 0.35), 21);
    facetPoly(ctx, [[-66, 4], [-30, -24], [20, -20], [26, 6], [-20, 18]], H.mix(back, [255, 255, 255], 0.2), H.mix(back, [40, 40, 60], 0.3), 22);
    facetPoly(ctx, [[-62, 6], [-24, -10], [14, -2], [-8, 26], [-56, 24]], H.mix(wing, [255, 255, 255], 0.25), H.mix(wing, [30, 20, 70], 0.3), 23);
    facetPoly(ctx, ell(44, -24, 36, 34, 10), H.mix(white, [255, 255, 255], 0.3), H.mix(white, [150, 150, 170], 0.5), 24);
    facetPoly(ctx, [[14, -36], [30, -58], [56, -60], [76, -44], [72, -32], [24, -30]], H.mix(blue, [255, 255, 255], 0.3), H.mix(blue, [30, 20, 80], 0.25), 25);
    tri2(ctx, [16, -24], [80, -30], [78, -22], H.rgba(black)); tri2(ctx, [16, -24], [78, -22], [22, -16], H.rgba(black));
    tri2(ctx, [30, 4], [64, -6], [44, 12], H.rgba(H.mix(black, blue, 0.4)));
    facetPoly(ctx, ell(58, -26, 6, 6, 6), [80, 80, 100], [10, 10, 20], 26);
    tri2(ctx, [78, -26], [94, -20], [78, -16], H.rgba(black));
    ctx.restore();
    if (uv > 0.5 && crown > 0.5) { const cx = x + (flip ? -1 : 1) * 46 * s, cy = y - 50 * s, g = ctx.createRadialGradient(cx, cy, 6, cx, cy, 90 * s); g.addColorStop(0, `rgba(236,214,255,${0.55 * (uv - 0.5) * 2})`); g.addColorStop(1, 'rgba(236,214,255,0)'); ctx.fillStyle = g; ctx.fillRect(cx - 100 * s, cy - 100 * s, 200 * s, 200 * s); }
  }
  // flat flower, front view: petals + centre; uvK 0..1 blends to the bee's UV view (pale tips, dark bullseye)
  function flower2(ctx, x, y, R, petal, centre, uvK = 0, k = 1, seed = 3) {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    const n = 12, r = H.rng(seed);
    const tip = H.mix(petal, [226, 206, 255], uvK), inner = H.mix(petal, [64, 30, 96], uvK);
    for (let i = 0; i < n; i++) {
      const a = i / n * TAU + 0.13, w = 0.2, L = R * (0.94 + r() * 0.1);
      const P0 = [Math.cos(a) * R * 0.2, Math.sin(a) * R * 0.2], P1 = [Math.cos(a - w) * L * 0.62, Math.sin(a - w) * L * 0.62], P2 = [Math.cos(a) * L, Math.sin(a) * L], P3 = [Math.cos(a + w) * L * 0.62, Math.sin(a + w) * L * 0.62];
      const lit = 0.5 + 0.5 * Math.cos(a + 2.2);
      tri2(ctx, P0, P1, P2, H.rgba(H.mix(tip, [255, 255, 255], 0.1 + 0.2 * lit))); tri2(ctx, P0, P2, P3, H.rgba(H.mix(tip, [120, 60, 40], 0.08 + 0.12 * (1 - lit))));
      if (uvK > 0.01) { const m = 0.58, Q1 = [P1[0] * 0.85, P1[1] * 0.85], Q3 = [P3[0] * 0.85, P3[1] * 0.85], Q2 = [P2[0] * m, P2[1] * m];
        ctx.globalAlpha = uvK; tri2(ctx, P0, Q1, Q2, H.rgba(H.mix(inner, [255, 255, 255], 0.08 * lit))); tri2(ctx, P0, Q2, Q3, H.rgba(H.mix(inner, [0, 0, 0], 0.15))); ctx.globalAlpha = 1; }
    }
    facetPoly(ctx, ell(0, 0, R * 0.26, R * 0.26, 9), H.mix(H.mix(centre, [30, 12, 40], uvK), [255, 255, 255], 0.25), H.mix(centre, [10, 4, 20], 0.5 + 0.4 * uvK), seed + 9);
    ctx.restore();
  }
  function eye2(ctx, x, y, R, t, k = 1) { // faceted human eye
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    const lid = [[-R * 1.5, 0], [-R * 0.9, -R * 0.78], [0, -R * 1.02], [R * 0.9, -R * 0.78], [R * 1.5, 0], [R * 0.9, R * 0.72], [0, R * 0.94], [-R * 0.9, R * 0.72]];
    facetPoly(ctx, lid, [252, 246, 250], [196, 186, 214], 41);
    facetPoly(ctx, ell(0, 0, R * 0.72, R * 0.72, 14), [96, 196, 210], [34, 92, 120], 42, 0.62);
    facetPoly(ctx, ell(0, 0, R * 0.32, R * 0.32, 10), [60, 50, 90], [14, 10, 30], 43);
    gem(ctx, -R * 0.22, -R * 0.24, R * 0.12, [255, 255, 255]);
    ctx.restore();
  }
  function coneCell(ctx, x, base, h, col, k = 1) { // faceted cone photoreceptor
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, base); ctx.scale(k, k);
    const c = Array.isArray(col) ? col : H.hex(col), w = 46;
    tri2(ctx, [0, -h], [-w, 0], [0, 10], H.rgba(H.mix(c, [255, 255, 255], 0.3))); tri2(ctx, [0, -h], [w, 0], [0, 10], H.rgba(H.mix(c, [40, 20, 70], 0.22)));
    tri2(ctx, [0, -h], [-w * 0.35, -h * 0.35], [0, -h * 0.25], H.rgba(H.mix(c, [255, 255, 255], 0.55)));
    facetPoly(ctx, [[-w, 0], [0, 10], [w, 0], [w * 0.7, 60], [0, 74], [-w * 0.7, 60]], H.mix(c, [255, 255, 255], 0.15), H.mix(c, [40, 20, 70], 0.4), 51);
    ctx.restore();
  }
  function shrimp2(ctx, x, y, s, t) { // faceted mantis shrimp, side view facing right
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const segC = [[60, 170, 120], [70, 190, 150], [80, 160, 210], [230, 120, 60], [240, 180, 60], [200, 80, 160]];
    for (let i = 5; i >= 0; i--) { const sx = -40 - i * 34, sy = 6 + Math.sin(t * 2 + i * 0.6) * 3 + i * i * 0.8; facetPoly(ctx, ell(sx, sy, 26, 30 - i, 8), H.mix(segC[i], [255, 255, 255], 0.3), H.mix(segC[i], [30, 20, 60], 0.35), 60 + i); }
    tri2(ctx, [-236, 40], [-290, 24], [-282, 70], H.rgba([80, 120, 220])); tri2(ctx, [-236, 40], [-282, 70], [-240, 64], H.rgba([240, 110, 80]));
    facetPoly(ctx, [[-20, -30], [40, -36], [86, -18], [92, 18], [40, 32], [-20, 30]], [110, 210, 150], [30, 110, 90], 70);
    // raptorial claw (folded, like a closed pocketknife)
    const sw = Math.sin(t * 1.3) * 0.08;
    ctx.save(); ctx.translate(70, 22); ctx.rotate(sw);
    facetPoly(ctx, [[0, 0], [40, 18], [52, 40], [20, 36]], [250, 120, 110], [170, 50, 70], 71);
    facetPoly(ctx, [[46, 30], [78, 22], [90, 34], [56, 46]], [255, 170, 120], [200, 80, 70], 72);
    ctx.restore();
    // stalked eyes
    for (const [ex, ey, ph0] of [[86, -60, 0], [100, -52, 1.7]]) {
      const ox = Math.sin(t * 1.7 + ph0) * 5;
      ctx.strokeStyle = H.rgba([90, 160, 140]); ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(80, -24); ctx.lineTo(ex + ox, ey); ctx.stroke();
      facetPoly(ctx, ell(ex + ox, ey - 6, 14, 10, 8, 0.4), [120, 230, 200], [30, 90, 100], 73 + ph0);
      tri2(ctx, [ex + ox - 12, ey - 6], [ex + ox + 12, ey - 6], [ex + ox, ey - 4], 'rgba(30,20,50,0.9)');
    }
    ctx.strokeStyle = H.rgba([240, 150, 110]); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(90, -14); ctx.lineTo(150, -70); ctx.moveTo(92, -10); ctx.lineTo(160, -40); ctx.stroke();
    ctx.restore();
  }
  // faceted rainbow strip between x0..x1 (wavelength nm a..b), with a jittered triangle mesh
  function rainbowStrip(ctx, x0, y0, x1, y1, a = 400, b = 700, seed = 5, cols = 18) {
    const r = H.rng(seed), rows = 2, V = [];
    for (let j = 0; j <= rows; j++) { const row = []; for (let i = 0; i <= cols; i++) row.push([H.lerp(x0, x1, i / cols) + (i > 0 && i < cols ? r.range(-0.3, 0.3) * (x1 - x0) / cols : 0), H.lerp(y0, y1, j / rows) + (j > 0 && j < rows ? r.range(-0.25, 0.25) * (y1 - y0) / rows : 0)]); V.push(row); }
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const A = V[j][i], B = V[j][i + 1], C = V[j + 1][i], D = V[j + 1][i + 1];
      for (const f of (i + j) % 2 ? [[A, C, B], [B, C, D]] : [[A, C, D], [A, D, B]]) {
        const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cy = (f[0][1] + f[1][1] + f[2][1]) / 3;
        const base = wl(H.lerp(a, b, cl((cx - x0) / (x1 - x0))));
        tri2(ctx, f[0], f[1], f[2], H.rgba(H.mix(base, cy < (y0 + y1) / 2 ? [255, 255, 255] : [40, 20, 70], 0.08 + r() * 0.1)));
      }
    }
  }
  // cut-corner panel
  function panel(ctx, x, y, w, h, col, k = 1, a = 1) {
    if (k <= 0.01) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.globalAlpha = a;
    const c = 18, pts = [[-w / 2 + c, -h / 2], [w / 2, -h / 2], [w / 2, h / 2 - c], [w / 2 - c, h / 2], [-w / 2, h / 2], [-w / 2, -h / 2 + c]];
    ctx.fillStyle = 'rgba(20,10,40,0.35)'; ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0] + 6, p[1] + 6) : ctx.moveTo(p[0] + 6, p[1] + 6)); ctx.closePath(); ctx.fill();
    const cc = Array.isArray(col) ? col : H.hex(col); ctx.fillStyle = H.rgba(cc); ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.closePath(); ctx.fill();
    ctx.fillStyle = H.rgba(H.mix(cc, [255, 255, 255], 0.12)); ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); ctx.lineTo(pts[1][0], pts[1][1]); ctx.lineTo(w / 2 - h * 0.5, 0); ctx.lineTo(-w / 2, 0); ctx.lineTo(pts[5][0], pts[5][1]); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  function title2(ctx, lines, x, y, px, k, cols) { // big headline in white with ink drop shadow
    if (k <= 0.01) return;
    ctx.save(); ctx.globalAlpha = cl(k); ctx.font = FONT(px); ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    lines.forEach((l, i) => { const yy = y + i * px * 1.12 + (1 - cl(k)) * 24; ctx.fillStyle = 'rgba(30,20,60,0.45)'; ctx.fillText(l, x + 4, yy + 4); ctx.fillStyle = (cols && cols[i]) || '#fff'; ctx.fillText(l, x, yy); });
    ctx.restore();
  }

  // ================= SCENES =================
  // ---- A. Hook: dusk meadow, a hummingbird at a flower (3D) ----
  function meadowWorld(t, extra) {
    const T = terrain('meadow'), tris = T.tris.slice(), y0 = T.height(0, 40);
    flower3(tris, [0, y0, 40], 6, [255, 120, 160], [255, 200, 80], { tilt: 0.75 });
    const hov = [Math.sin(t * 1.3) * 0.25, Math.sin(t * 2.1) * 0.35, Math.sin(t * 0.9) * 0.2];
    const hb = hummingbird(tris, [-3.6 + hov[0], y0 + 6.4 + hov[1], 40.6 + hov[2]], 0, t, 0.85);
    if (extra) extra(tris, y0);
    return { tris, hb, y0, flowerC: [0, y0 + 6, 40] };
  }
  function sceneHook(ctx, t, endMode) {
    const KF = endMode
      ? [[PS(64) - 0.3, -6, 10.5, 28, 0.2, 0.07], [DURATION, -4.5, 9.8, 31, 0.15, 0.05]]
      : [[0, 0, 34, -24, 0, 0.36], [3.2, 0, 17, 6, 0, 0.24], [7.4, -1.5, 9.8, 28, 0.0, 0.07], [11.3, -1.5, 9.8, 29.5, 0.0, 0.07], [13.6, 2, 18, 8, 0.06, 0.22]];
    const cam = camKF(KF, t), env = ENV.dusk;
    sky(ctx, cam, env, 'human');
    const M = meadowWorld(t);
    render3D(ctx, cam, M.tris, env);
    const fp = cam.proj(M.flowerC), hp = cam.proj(M.hb.head);
    if (endMode) {
      const a = PS(64);
      lpTag(ctx, hp[0] - 40, hp[1] - 80, 'hummingbird', { k: BK(t, a + 0.2) });
      const qk = BK(t, P(65, 'color')); gem(ctx, fp[0] + 150, fp[1] - 120, 56, H.mix([200, 120, 255], [120, 255, 200], 0.5 + 0.5 * Math.sin(t * 3)), qk, t * 0.6, 1);
      if (qk > 0.01) { ctx.save(); ctx.font = FONT(56); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#fff'; ctx.globalAlpha = cl(qk); ctx.fillText('?', fp[0] + 150, fp[1] - 118); ctx.restore(); }
      lpTag(ctx, 640, 640, "a color you'll never know", { k: BK(t, P(65, 'never')), font: FONT(42), bg: INK, col: '#fff' });
      return;
    }
    // 0: hummingbird tag
    const hk = BK(t, P(0, 'hummingbirds') - 0.1) * OUT(t, 7.6);
    lpTag(ctx, hp[0] + 10, hp[1] - 70, 'hummingbird', { k: hk });
    lpTag(ctx, 640, 120, 'sees colors your brain never made', { k: BK(t, P(0, 'brain')) * OUT(t, 3.0), font: FONT(40), bg: INK, col: '#fff' });
    // 1: not brighter, not sharper
    const o1 = OUT(t, 7.5);
    [['brighter', 'brighter', 380], ['sharper', 'sharper', 900]].forEach(([w, lab, x]) => {
      const k = BK(t, P(1, w) - 0.1) * o1; lpTag(ctx, x, 150, lab, { k, font: FONT(40) }); hexBadge(ctx, x + 110, 120, BK(t, P(1, w) + 0.15) * o1, false, 26);
    });
    // 2: whole new colours, no names: shimmering swatch gems
    for (let i = 0; i < 3; i++) {
      const k = BK(t, P(2, 'new') + i * 0.12) * o1, x = 900 + i * 120, y = 300;
      const c = H.mix(H.mix([190, 80, 255], [80, 255, 200], 0.5 + 0.5 * Math.sin(t * 2.4 + i * 2)), [255, 120, 200], 0.3 + 0.3 * Math.sin(t * 1.7 + i));
      gem(ctx, x, y, 48, c, k, t * 0.4 + i, 0.8);
      if (k > 0.01) { ctx.save(); ctx.globalAlpha = cl(k); ctx.font = FONT(44); ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('?', x, y + 2); ctx.restore(); }
    }
    lpTag(ctx, 1020, 390, 'no names', { k: BK(t, P(2, 'names') - 0.1) * o1, bg: INK, col: '#fff' });
    // 3: the question
    const qk = EO(t, PS(3) - 0.1, PS(3) + 0.4) * OUT(t, 13.3);
    if (qk > 0.01) { ctx.save(); ctx.globalAlpha = qk * 0.55; ctx.fillStyle = INK; ctx.fillRect(0, 470, W, 200); ctx.restore(); }
    title2(ctx, ['Why can animals see colors'], 640, 550, 58, qk);
    title2(ctx, ["we can't even imagine?"], 640, 620, 58, EO(t, P(3, 'cant') - 0.1, P(3, 'cant') + 0.3) * OUT(t, 13.3), [CORAL]);
    // 4: start with you
    lpTag(ctx, 640, 410, 'start with YOU', { k: BK(t, P(4, 'you') - 0.15) * OUT(t, 13.3), font: FONT(44), bg: CORAL, col: '#fff' });
  }

  // ---- B/C. Light waves -> the visible slice -> the rainbow ----
  function sceneSpectrum(ctx, t) {
    bg(ctx, 'spec', [22, 18, 56], [64, 40, 110], [640, 380], [130, 80, 170]);
    stars(ctx, 60, 300, 12, 0.5);
    const z = EI(t, PS(8) - 0.3, PS(8) + 0.6); // zoom into the slice
    const S0 = 560, S1 = 720, X0 = H.lerp(80, 80 - (S0 - 80) * 2.4, z), X1 = H.lerp(1200, 1200 + (1200 - S1) * 2.4, z);
    const sx0 = H.lerp(S0, 130, z), sx1 = H.lerp(S1, 1150, z), yC = H.lerp(360, 380, z);
    const draw = EO(t, PS(5), P(5, 'lengths') + 0.3);
    // a zig-zag ribbon whose wavelength grows from left to right (gamma ... radio)
    const pts = []; let ph0 = 0;
    for (let x = X0; x <= X0 + (X1 - X0) * draw; x += 3) {
      const u = (x - X0) / (X1 - X0), per = 6 * Math.pow(60, u) * H.lerp(1, 4, z); ph0 += 3 / per * TAU;
      pts.push([x, yC + Math.sin(ph0 - t * 3) * H.lerp(34, 60, z)]);
    }
    const slice = EO(t, P(6, 'slice') - 0.2, P(6, 'slice') + 0.3);
    for (let i = 0; i < pts.length - 1; i++) {
      const [a, b] = [pts[i], pts[i + 1]], inS = a[0] >= sx0 && a[0] <= sx1;
      let col = [150, 140, 190];
      if (inS) col = H.mix(col, wl(H.lerp(400, 700, (a[0] - sx0) / (sx1 - sx0))), slice);
      else col = H.mix(col, [90, 80, 130], slice * 0.6);
      const w = (inS ? H.lerp(9, 14, slice) : 7) * H.lerp(1, 1.4, z), dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L * w, ny = dx / L * w;
      tri2(ctx, [a[0] + nx, a[1] + ny], [b[0] + nx, b[1] + ny], b, H.rgba(H.mix(col, [255, 255, 255], 0.25)));
      tri2(ctx, [a[0] - nx, a[1] - ny], [b[0] - nx, b[1] - ny], b, H.rgba(H.mix(col, [40, 20, 70], 0.2))); tri2(ctx, a, [a[0] + nx, a[1] + ny], b, H.rgba(H.mix(col, [255, 255, 255], 0.25))); tri2(ctx, a, [a[0] - nx, a[1] - ny], b, H.rgba(H.mix(col, [40, 20, 70], 0.2)));
    }
    const oz = 1 - z;
    lpTag(ctx, 200, 230, 'short waves', { k: BK(t, P(5, 'different')) * oz });
    lpTag(ctx, 1080, 230, 'long waves', { k: BK(t, P(5, 'lengths')) * oz });
    lpTag(ctx, 640, 230, 'Light', { k: BK(t, P(5, 'light')) * oz * OUT(t, P(5, 'different')), font: FONT(44), bg: CORAL, col: '#fff' });
    // the slice bracket
    if (slice > 0.01 && z < 1) {
      ctx.save(); ctx.globalAlpha = slice * oz; ctx.strokeStyle = '#fff'; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(sx0, 280); ctx.lineTo(sx0, 450); ctx.moveTo(sx1, 280); ctx.lineTo(sx1, 450); ctx.stroke(); ctx.restore();
      lpTag(ctx, 640, 500, 'all you can see', { k: slice * oz, bg: INK, col: '#fff' });
    }
    lpTag(ctx, sx0 - 90, 600, '400', { k: BK(t, P(7, '400') - 0.1) * oz, font: FONT(64), h: 96 });
    lpTag(ctx, sx1 + 90, 600, '700', { k: BK(t, P(7, '700') - 0.1) * oz, font: FONT(64), h: 96 });
    lpTag(ctx, 640, 660, 'nanometers', { k: BK(t, P(7, 'nanometers') - 0.1) * oz, bg: INK, col: '#fff' });
    // C: rainbow strip
    if (z > 0.6) {
      const a = (z - 0.6) / 0.4;
      ctx.save(); ctx.globalAlpha = a; rainbowStrip(ctx, 130, 300, 1150, 460, 400, 700, 7, 22); ctx.restore();
      lpTag(ctx, 640, 220, 'the rainbow', { k: BK(t, P(8, 'rainbow') - 0.1), font: FONT(48), bg: INK, col: '#fff' });
      lpTag(ctx, 200, 530, 'violet', { k: BK(t, P(9, 'violet') - 0.1), font: FONT(40), bg: '#7a46d8', col: '#fff' });
      lpTag(ctx, 1080, 530, 'red', { k: BK(t, P(9, 'red') - 0.1), font: FONT(40), bg: '#e8463c', col: '#fff' });
      lpTag(ctx, 200, 620, '400 nm', { k: BK(t, P(9, 'violet')) }); lpTag(ctx, 1080, 620, '700 nm', { k: BK(t, P(9, 'red')) });
    }
  }

  // ---- D. Your eye's three cones ----
  const CONE3 = [['blue', COL.blue], ['green', COL.green], ['red', COL.red]];
  function sceneCones(ctx, t) {
    bg(ctx, 'cones', [40, 28, 84], [92, 52, 120], [380, 360], [160, 120, 200]);
    const a = PS(10);
    eye2(ctx, 300, 380, 120, t, BK(t, a - 0.2, 0.45));
    lpTag(ctx, 300, 560, 'your eye', { k: BK(t, P(10, 'eye')) });
    panel(ctx, 900, 400, 560, 420, '#2a1f4f', BK(t, a + 0.2, 0.4));
    lpArrow(ctx, [440, 340], [560, 250], [640, 330], EI(t, a + 0.3, a + 1.0), [255, 246, 240], 12);
    CONE3.forEach(([n, c], i) => {
      const x = 760 + i * 140, k = BK(t, P(10, 'cones') - 0.1 + i * 0.08), lit = EO(t, P(11, n) - 0.1, P(11, n) + 0.25);
      coneCell(ctx, x, 470, 190 + Math.sin(t * 2 + i) * 4, H.mix([170, 160, 200], c, lit), k);
      lpTag(ctx, x, 590, n, { k: BK(t, P(11, n) - 0.1), bg: H.rgba(c), col: '#fff' });
    });
    lpTag(ctx, 900, 240, '3 kinds of cones', { k: BK(t, P(10, 'three') - 0.1), font: FONT(44), bg: CORAL, col: '#fff' });
  }

  // ---- E/F. Mixing: yellow, and purple, the colour your brain invents ----
  function bars3(ctx, t, x0, base, lv, k, labels = true) {
    CONE3.forEach(([n, c], i) => {
      const x = x0 + i * 130; pillar(ctx, x, base, 84, 20 + 240 * lv[i] * k, c, k);
      if (labels) lpTag(ctx, x, base + 46, n, { k, bg: H.rgba(c), col: '#fff', font: FONT(28) });
    });
  }
  const mixCol = (lv) => [40 + 215 * lv[2], 40 + 190 * lv[1], 40 + 215 * lv[0]];
  function sceneMix(ctx, t) {
    bg(ctx, 'mix', [34, 26, 78], [80, 48, 118], [900, 360], [150, 110, 190]);
    const a = PS(12), y = P(14, 'yellow');
    const dance = (i) => 0.5 + 0.45 * Math.sin(t * (2.3 + i * 0.9) + i * 2);
    const target = [0.12, 0.85, 1.0], s = EI(t, y - 0.2, y + 0.5);
    const lv = [0, 1, 2].map((i) => H.lerp(dance(i), target[i], s));
    bars3(ctx, t, 300, 560, lv, BK(t, a - 0.1, 0.4));
    lpTag(ctx, 430, 160, 'how hard each one fires', { k: BK(t, P(13, 'firing') - 0.1), bg: INK, col: '#fff' });
    lpArrow(ctx, [600, 380], [720, 300], [820, 370], EI(t, P(13, 'comparing') - 0.1, P(13, 'comparing') + 0.6), [255, 246, 240], 12);
    lpTag(ctx, 720, 270, 'brain compares', { k: BK(t, P(13, 'brain') - 0.1) });
    gem(ctx, 980, 390, 120, mixCol(lv), BK(t, a + 0.3, 0.4), 0, 0.4 + 0.4 * s);
    lpTag(ctx, 980, 560, 'yellow!', { k: BK(t, y - 0.1), font: FONT(48), bg: '#ffd23c', col: INK });
    lpTag(ctx, 980, 640, 'red + green', { k: BK(t, P(14, 'together') - 0.2) });
  }
  function scenePurple(ctx, t) {
    bg(ctx, 'purple', [30, 22, 70], [74, 40, 110], [900, 420], [170, 80, 190]);
    rainbowStrip(ctx, 140, 120, 1140, 200, 400, 700, 9, 22);
    lpTag(ctx, 640, 70, 'the rainbow', { k: 1 });
    // a faceted magnifier hunts along the rainbow for purple
    const sA = PS(16), sw = EI(t, sA, P(16, 'all') - 0.1), mx = H.lerp(150, 1130, sw);
    if (t < P(17, 'when') + 0.2) {
      const k = BK(t, PS(15) + 0.4) * OUT(t, P(17, 'when'));
      ctx.save(); ctx.globalAlpha = cl(k); ctx.strokeStyle = '#fff'; ctx.lineWidth = 6; ctx.beginPath(); for (let i = 0; i <= 6; i++) { const a = i / 6 * TAU; ctx.lineTo(mx + Math.cos(a) * 60, 160 + Math.sin(a) * 60); } ctx.stroke(); ctx.restore();
      lpTag(ctx, mx, 270, 'purple?', { k, font: FONT(40), bg: '#b43cc8', col: '#fff' });
      hexBadge(ctx, 1150, 270, BK(t, P(16, 'all') - 0.05) * OUT(t, P(17, 'when')), false, 34);
      lpTag(ctx, 640, 380, 'not in the rainbow', { k: BK(t, P(16, 'rainbow') - 0.1) * OUT(t, P(17, 'when')), font: FONT(48), bg: INK, col: '#fff' });
    }
    // red + blue fire, green stays quiet
    const b = PS(17);
    const lv = [EO(t, P(17, 'blue') - 0.1, P(17, 'blue') + 0.4) * 0.9, 0.05 + 0.55 * (1 - EO(t, P(17, 'quiet') - 0.2, P(17, 'quiet') + 0.3)) * EO(t, b, b + 0.4), EO(t, P(17, 'red') - 0.1, P(17, 'red') + 0.4) * 0.95];
    bars3(ctx, t, 300, 600, lv, BK(t, b - 0.1, 0.35));
    lpTag(ctx, 430, 300, 'green: quiet', { k: BK(t, P(17, 'quiet') - 0.1), bg: '#46cd6e', col: '#fff' });
    const pk = BK(t, P(18, 'invents') - 0.1, 0.45);
    gem(ctx, 960, 440, 120, COL.purple, pk, Math.sin(t) * 0.1, 0.6 + 0.3 * Math.sin(t * 3));
    lpArrow(ctx, [600, 470], [730, 380], [820, 440], EI(t, P(18, 'brain') - 0.1, P(18, 'invents') + 0.2), [255, 246, 240], 12);
    lpTag(ctx, 960, 270, 'your brain invents it', { k: BK(t, P(18, 'invents') + 0.2) * OUT(t, P(19, 'nonspectral') - 0.1), bg: INK, col: '#fff' });
    lpTag(ctx, 960, 270, 'non-spectral color', { k: BK(t, P(19, 'nonspectral') - 0.1), font: FONT(40), bg: CORAL, col: '#fff' });
    const hk = BK(t, P(20, 'hold') - 0.1);
    lpTag(ctx, 960, 620, 'remember this one!', { k: hk, bg: '#ffd23c' });
  }

  // ---- G. Dogs: two cones; red ball on green grass ----
  function dogWorld(t) {
    const T = terrain('meadow'), tris = T.tris.slice(), y0 = T.height(0, 40);
    for (const bx of [-3.2, 3.2]) blob(tris, xf([bx, y0 + 1.3, 40], 0, 1), [0, 0, 0], [1.3, 1.3, 1.3], [232, 52, 52], { uv: 0.1 });
    return { tris, y0 };
  }
  function sceneDog(ctx, t) {
    const a = PS(21), sp = PS(24);
    const cam = camKF([[a - 0.3, -6, 12, 14, 0.1, 0.26], [PS(23), 0, 7.5, 26, 0, 0.2], [sp, 0, 6.5, 28, 0, 0.18], [PS(25), 0, 6.3, 28.6, 0, 0.18]], t);
    const env = ENV.dusk, Wd = dogWorld(t);
    const split = EI(t, sp, sp + 0.7), cut = H.lerp(W + 10, 640, split);
    sky(ctx, cam, env, 'human'); render3D(ctx, cam, Wd.tris, env, 'human');
    if (split > 0.001) {
      ctx.save(); ctx.beginPath(); ctx.rect(cut, 0, W - cut, HH); ctx.clip();
      sky(ctx, cam, env, 'dog'); render3D(ctx, cam, Wd.tris, env, 'dog'); ctx.restore();
      ctx.fillStyle = '#fff'; ctx.fillRect(cut - 3, 0, 6, HH);
      lpTag(ctx, 320, 90, 'YOU', { k: BK(t, sp + 0.3), font: FONT(44) });
      lpTag(ctx, 960, 90, 'DOG', { k: BK(t, sp + 0.5), font: FONT(44), bg: INK, col: '#fff' });
      lpTag(ctx, 960, 620, 'two muddy shades', { k: BK(t, P(24, 'muddy') - 0.1), font: FONT(36), bg: '#c8b46a' });
    }
    // cone gems: three -> two (blue + yellow)
    const o = OUT(t, PS(23));
    const g0 = BK(t, a, 0.35) * o, merge = EI(t, P(21, 'away') - 0.1, P(21, 'away') + 0.5);
    gem(ctx, 520, 150, 44, COL.blue, g0);
    gem(ctx, H.lerp(640, 700, merge), 150, 44, H.mix(COL.green, COL.yellow, merge), g0);
    gem(ctx, H.lerp(760, 700, merge), 150, 44, H.mix(COL.red, COL.yellow, merge), g0 * (1 - merge * 0.999));
    lpTag(ctx, 640, 240, 'one cone away', { k: BK(t, P(21, 'cone') - 0.1) * OUT(t, P(22, 'dogs') - 0.1) });
    lpTag(ctx, 520, 240, 'blue', { k: BK(t, P(22, 'blue') - 0.1) * o, bg: H.rgba(COL.blue), col: '#fff' });
    lpTag(ctx, 700, 240, 'yellow', { k: BK(t, P(22, 'yellow') - 0.1) * o, bg: '#ffd23c' });
    petFace(ctx, 200, 560, 90, [242, 180, 130], BK(t, P(22, 'dogs') - 0.15, 0.4) * OUT(t, sp));
    lpTag(ctx, 200, 690, '2 cones', { k: BK(t, P(22, 'two') - 0.1) * OUT(t, sp), font: FONT(36), bg: CORAL, col: '#fff' });
    const bp = cam.proj([-3.2, Wd.y0 + 3.2, 40]);
    lpTag(ctx, bp[0], bp[1] - 40, 'red ball', { k: BK(t, P(23, 'red') - 0.1) * OUT(t, sp), bg: '#e8463c', col: '#fff' });
    lpTag(ctx, 320, 640, 'green grass', { k: BK(t, P(23, 'grass') - 0.1) * OUT(t, sp), bg: '#46a46e', col: '#fff' });
  }

  // ---- H. Fewer cones, fewer colours; what about more? ----
  function sceneGrid(ctx, t) {
    bg(ctx, 'grid', [30, 24, 70], [72, 46, 112], [640, 360], [140, 100, 180]);
    const cols = [[300, 3, 'dog', 0], [640, 6, 'you', 1], [980, 6, '?', 2]];
    const ts = [P(25, 'fewer', 1) - 0.1, P(25, 'colors') - 0.1, P(26, 'more') - 0.1];
    cols.forEach(([cx, n, lab, j]) => {
      const k = BK(t, ts[j], 0.4), cs = 210 / n; if (k <= 0.01) return;
      panel(ctx, cx, 360, 270, 270, '#2a1f4f', k);
      for (let gy = 0; gy < n; gy++) for (let gx = 0; gx < n; gx++) {
        const x = cx - 105 + (gx + 0.5) * cs, y = 360 - 105 + (gy + 0.5) * cs, u = gx / (n - 1), v = gy / (n - 1);
        let c;
        if (j === 0) c = viewCol(H.mix(wl(H.lerp(420, 680, u)), [255, 255, 255], v * 0.4), 0, 'dog');
        else if (j === 1) c = H.mix(wl(H.lerp(400, 700, u)), v < 0.5 ? [255, 255, 255] : [30, 20, 50], Math.abs(v - 0.5) * 1.2);
        else c = H.mix([90, 70, 140], [150, 120, 200], 0.5 + 0.5 * Math.sin(t * 3 + gx + gy * 2));
        gem(ctx, x, y, cs * 0.46, c, k * EO(t, ts[j] + (gx + gy) * 0.03, ts[j] + 0.3 + (gx + gy) * 0.03), 0.4);
        if (j === 2 && k > 0.5) { ctx.save(); ctx.globalAlpha = 0.85; ctx.font = FONT(26); ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('?', x, y + 1); ctx.restore(); }
      }
      lpTag(ctx, cx, 545, [ '2 cones', '3 cones', 'more cones?'][j], { k, font: FONT(36), bg: j === 2 ? CORAL : CREAM, col: j === 2 ? '#fff' : INK });
      lpTag(ctx, cx, 180, lab, { k, bg: INK, col: '#fff' });
    });
  }

  // ---- I. Honeybees: UV, blue, green; red looks dark ----
  function sceneBeeCones(ctx, t) {
    bg(ctx, 'beecones', [36, 24, 70], [96, 60, 96], [900, 300], [200, 140, 120]);
    const a = PS(27);
    const slots = [380, 520, 660, 800];
    lpTag(ctx, 200, 250, 'YOU', { k: BK(t, a - 0.1), font: FONT(40) });
    [[1, COL.blue], [2, COL.green], [3, COL.red]].forEach(([s, c], i) => gem(ctx, slots[s], 250, 46, c, BK(t, a + i * 0.08)));
    bee2(ctx, 190, 470, 1.1, t, 0, 'human');
    lpTag(ctx, 190, 560, 'BEE', { k: BK(t, P(27, 'honeybees') - 0.1), font: FONT(40), bg: INK, col: '#fff' });
    [['ultraviolet', COL.uv, 0], ['blue', COL.blue, 1], ['green', COL.green, 2]].forEach(([w, c, s]) => {
      const k = BK(t, P(28, w) - 0.1); gem(ctx, slots[s], 470, 46, c, k, 0, w === 'ultraviolet' ? 0.8 : 0);
      lpTag(ctx, slots[s], 555, w === 'ultraviolet' ? 'UV' : w, { k, bg: H.rgba(c), col: '#fff', font: FONT(30) });
    });
    lpArrow(ctx, [660, 330], [600, 380], [530, 410], EI(t, P(27, 'shifted') - 0.1, P(27, 'shifted') + 0.5), [255, 246, 240], 12);
    lpTag(ctx, 640, 150, 'same 3 cones, shifted', { k: BK(t, P(27, 'shifted') - 0.1), bg: CORAL, col: '#fff' });
    // red flower goes dark for the bee
    const r0 = PS(29), dk = EI(t, P(29, 'dark') - 0.3, P(29, 'dark') + 0.2);
    flower2(ctx, 1060, 420, 120, H.mix([240, 60, 60], [44, 30, 50], dk), H.mix([255, 200, 80], [30, 20, 30], dk), 0, BK(t, r0 - 0.1, 0.4), 31);
    lpTag(ctx, 1060, 600, 'red looks dark', { k: BK(t, P(29, 'dark') - 0.1), font: FONT(34), bg: INK, col: '#fff' });
    hexBadge(ctx, 800, 250, BK(t, P(29, 'red', 2) - 0.1) * OUT(t, P(30, 'lots') - 0.4), false, 22);
  }

  // ---- J. The hidden ultraviolet bullseye ----
  function sceneBullseye(ctx, t) {
    bg(ctx, 'bulls', [44, 70, 74], [24, 44, 50], [360, 380], [120, 150, 120]);
    const a = PS(30), u = P(31, 'ultraviolet');
    flower2(ctx, 360, 390, 230, [255, 210, 50], [140, 80, 30], 0, BK(t, a - 0.1, 0.45), 17);
    lpTag(ctx, 360, 120, 'what you see', { k: BK(t, P(30, 'yellow') - 0.1), font: FONT(36) });
    // right: the bee's UV view, flipping in facet by facet
    const vk = BK(t, u - 0.2, 0.45);
    if (vk > 0.01) { ctx.save(); ctx.globalAlpha = cl(vk); ctx.fillStyle = 'rgba(28,14,52,0.85)'; ctx.fillRect(660, 0, 620, HH); ctx.restore(); }
    flower2(ctx, 940, 390, 230, [255, 210, 50], [140, 80, 30], 1, vk, 17);
    lpTag(ctx, 940, 120, 'what a bee sees', { k: BK(t, u), font: FONT(36), bg: INK, col: '#fff' });
    lpTag(ctx, 940, 650, 'UV bullseye', { k: BK(t, P(31, 'bullseyes') - 0.1), font: FONT(40), bg: '#b05cff', col: '#fff' });
    // landing lights: chevrons pulse inward
    const ll = EO(t, P(32, 'landing') - 0.1, P(32, 'landing') + 0.3);
    if (ll > 0.01) for (let i = 0; i < 6; i++) {
      const ang = i / 6 * TAU + 0.3, d = 150 - ((t * 90 + i * 30) % 90);
      const x = 940 + Math.cos(ang) * d, y = 390 + Math.sin(ang) * d;
      ctx.save(); ctx.translate(x, y); ctx.rotate(ang + Math.PI); ctx.globalAlpha = ll * cl((d - 60) / 30);
      tri2(ctx, [16, 0], [-8, -14], [-2, 0], '#fff6c8'); tri2(ctx, [16, 0], [-8, 14], [-2, 0], '#ffd27a'); ctx.restore();
    }
    lpTag(ctx, 940, 650, 'landing lights', { k: BK(t, P(32, 'lights') - 0.1) * OUT(t, P(33, 'nectar') - 0.2), font: FONT(40), bg: '#ffd23c' });
    // a bee flies in to the centre
    const fl = EI(t, P(32, 'landing'), P(33, 'nectar'));
    const bx = H.lerp(1240, 960, fl) + Math.sin(t * 5) * 4 * (1 - fl), by = H.lerp(80, 360, fl) + Math.sin(t * 7) * 5;
    if (t > P(32, 'landing') - 0.3) bee2(ctx, bx, by, 0.9, t, 0.5 * (1 - fl) + 0.3, 'uv');
    lpTag(ctx, 940, 650, 'nectar here', { k: BK(t, P(33, 'nectar') - 0.15), font: FONT(40), bg: CORAL, col: '#fff' });
  }

  // ---- K. Birds: four cones ----
  function sceneBird4(ctx, t) {
    bg(ctx, 'bird4', [30, 34, 86], [70, 60, 130], [640, 340], [150, 130, 210]);
    const a = PS(34), f = P(35, 'four');
    lpTag(ctx, 640, 120, 'one step further', { k: BK(t, P(34, 'step') - 0.1) * OUT(t, f - 0.2), font: FONT(40) });
    bigNumber(ctx, 230, 440, '4', 220, BK(t, f - 0.1, 0.4), '#ffd23c');
    lpTag(ctx, 230, 520, 'cone types', { k: BK(t, P(35, 'cone') - 0.1), font: FONT(36), bg: CORAL, col: '#fff' });
    [['UV', COL.uv], ['blue', COL.blue], ['green', COL.green], ['red', COL.red]].forEach(([n, c], i) => {
      const x = 500 + i * 150, k = BK(t, f + i * 0.09); gem(ctx, x, 340, 56, c, k, 0, i === 0 ? 0.6 + 0.4 * Math.sin(t * 4) : 0);
      lpTag(ctx, x, 440, n, { k, bg: H.rgba(c), col: '#fff', font: FONT(30) });
    });
    lpTag(ctx, 500, 220, 'ultraviolet!', { k: BK(t, P(35, 'ultraviolet') - 0.1), font: FONT(36), bg: '#b05cff', col: '#fff' });
    blueTit(ctx, 1080, 560, 0.9, false, 0, 0);
    lpTag(ctx, 1080, 670, 'many birds', { k: BK(t, P(34, 'birds') - 0.1) });
  }

  // ---- L. Blue tits in ultraviolet ----
  function sceneTits(ctx, t) {
    const u = EI(t, P(37, 'ultraviolet') - 0.4, P(37, 'ultraviolet') + 0.3);
    bg(ctx, 'tits', [96, 140, 120], [56, 96, 84], [640, 300], [190, 210, 160]);
    if (u > 0.001) { ctx.save(); ctx.globalAlpha = u; bg(ctx, 'titsuv', [26, 12, 48], [50, 24, 80], [640, 300], [90, 50, 130]); ctx.restore(); }
    // branch
    const br = H.mix([110, 80, 60], [60, 40, 80], u);
    tri2(ctx, [0, 520], [W, 500], [W, 540], H.rgba(br)); tri2(ctx, [0, 520], [W, 540], [0, 556], H.rgba(H.mix(br, [40, 20, 40], 0.3)));
    const a = PS(36);
    blueTit(ctx, 420, 418, 1.35 * BK(t, a - 0.2, 0.4), false, u, 1);
    blueTit(ctx, 880, 418, 1.35 * BK(t, a, 0.4), true, u, 0.35);
    lpTag(ctx, 420, 640, 'male', { k: BK(t, P(36, 'male') - 0.1), font: FONT(36) });
    lpTag(ctx, 880, 640, 'female', { k: BK(t, P(36, 'female') - 0.1), font: FONT(36) });
    lpTag(ctx, 640, 120, 'almost the same to us', { k: BK(t, P(36, 'same') - 0.1) * OUT(t, P(37, 'ultraviolet') - 0.3), font: FONT(36), bg: INK, col: '#fff' });
    lpTag(ctx, 640, 120, 'UV view', { k: BK(t, P(37, 'ultraviolet')), font: FONT(40), bg: '#b05cff', col: '#fff' });
    lpTag(ctx, 420, 200, 'crown shines', { k: BK(t, P(37, 'crowns') - 0.1), font: FONT(34), bg: '#ffd23c' });
  }

  // ---- M. Mixing: triangle (3 cones) -> tetrahedron (4 cones) ----
  function sceneTetra(ctx, t) {
    bg(ctx, 'tetra', [26, 22, 66], [66, 42, 108], [900, 380], [140, 90, 190]);
    const a = PS(38);
    gem(ctx, 640, 120, 50, COL.purple, BK(t, P(38, 'purple') - 0.15) * OUT(t, PS(39) + 0.3), Math.sin(t) * 0.2, 0.8);
    lpTag(ctx, 640, 200, 'purple', { k: BK(t, P(38, 'purple') - 0.1) * OUT(t, PS(39) + 0.3), bg: '#b43cc8', col: '#fff' });
    // 3 cones: a triangle; purple sits on the blue-red edge
    const tk = BK(t, PS(39) - 0.2, 0.4), T3 = [[330, 250], [180, 520], [480, 520]], C3 = [COL.blue, COL.green, COL.red];
    if (tk > 0.01) {
      ctx.save(); ctx.translate(330, 430); ctx.scale(tk, tk); ctx.translate(-330, -430);
      const cen = [330, 430];
      for (let i = 0; i < 3; i++) { const j = (i + 1) % 3; tri2(ctx, cen, T3[i], T3[j], H.rgba(H.mix(H.mix(C3[i], C3[j], 0.5), [40, 20, 70], 0.25 + i * 0.08))); }
      T3.forEach((p, i) => gem(ctx, p[0], p[1], 34, C3[i]));
      const pp = [(T3[0][0] + T3[2][0]) / 2, (T3[0][1] + T3[2][1]) / 2];
      gem(ctx, pp[0], pp[1], 26, COL.purple, BK(t, P(39, 'nonspectral') - 0.2), 0, 0.8);
      ctx.restore();
      lpTag(ctx, 330, 610, '3 cones: 1 extra color', { k: BK(t, P(39, 'one') - 0.1), font: FONT(30) });
    }
    // 4 cones: a rotating faceted tetrahedron; new mixes glow on the UV edges
    const qk = BK(t, P(40, 'four') - 0.15, 0.45);
    if (qk > 0.01) {
      const rot = t * 0.6, cx = 900, cy = 420, R = 190 * qk;
      const V0 = [[0, 1, 0], [0.94, -0.33, 0], [-0.47, -0.33, 0.82], [-0.47, -0.33, -0.82]];
      const VC = [COL.uv, COL.red, COL.green, COL.blue];
      const pt = -0.42, R3 = V0.map((v) => { const x = v[0] * Math.cos(rot) - v[2] * Math.sin(rot), z0 = v[0] * Math.sin(rot) + v[2] * Math.cos(rot); return [x, v[1] * Math.cos(pt) - z0 * Math.sin(pt), v[1] * Math.sin(pt) + z0 * Math.cos(pt)]; });
      const P3 = R3.map((v) => { const s = 3.2 / (3.2 + v[2] * 0.6); return [cx + v[0] * R * s, cy - v[1] * R * s, v[2]]; });
      const F = [[0, 1, 2], [0, 2, 3], [0, 3, 1], [1, 3, 2]], LD = norm([-0.5, 0.7, -0.5]);
      const faces = F.map((f) => ({ f, z: (P3[f[0]][2] + P3[f[1]][2] + P3[f[2]][2]) / 3 })).sort((p, q) => q.z - p.z);
      for (const { f } of faces) {
        let n = norm(cross(sub(R3[f[1]], R3[f[0]]), sub(R3[f[2]], R3[f[0]]))); const cen = scl(add3(add3(R3[f[0]], R3[f[1]]), R3[f[2]]), 1 / 3); if (dot(n, cen) < 0) n = scl(n, -1);
        if (n[2] > 0.05) continue; // back faces
        const c = H.mix(H.mix(VC[f[0]], VC[f[1]], 0.5), VC[f[2]], 0.33), lam = Math.max(0, dot(n, LD));
        tri2(ctx, P3[f[0]], P3[f[1]], P3[f[2]], H.rgba(H.mix(H.mix(c, [30, 20, 60], 0.35), H.mix(c, [255, 255, 255], 0.3), lam)));
      }
      P3.forEach((p, i) => gem(ctx, p[0], p[1], 28, VC[i], 1, 0, i === 0 ? 0.7 : 0));
      [[1, 'UV+red'], [2, 'UV+green'], [3, 'UV+blue']].forEach(([j, lab], n) => {
        const m = [(P3[0][0] + P3[j][0]) / 2, (P3[0][1] + P3[j][1]) / 2], k = BK(t, P(40, 'ways') - 0.1 + n * 0.15);
        gem(ctx, m[0], m[1], 20, H.mix(COL.uv, VC[j], 0.5), k, 0, 0.9);
      });
      lpTag(ctx, 900, 150, '4 cones', { k: qk, font: FONT(40), bg: CORAL, col: '#fff' });
      lpTag(ctx, 900, 660, 'way more mixes', { k: BK(t, P(40, 'mix') - 0.15), font: FONT(36), bg: '#ffd23c' });
    }
  }

  // ---- N. 2020: wild hummingbirds in the Rockies ----
  function sceneRockies(ctx, t) {
    const a = PS(41), b = PS(42), c = PS(43);
    const cam = camKF([[a - 0.3, 0, 30, -26, 0, 0.3], [P(41, 'rocky'), 0, 22, -6, 0, 0.22], [b, 0, 12, 16, 0, 0.1], [c, 0, 11, 20, 0, 0.08], [c + 4, 1, 10.5, 22, 0.02, 0.07]], t);
    const env = ENV.morning, T = terrain('rockies'), tris = T.tris.slice(), y0 = T.height(0, 40);
    const glow = 0.5 + 0.5 * Math.sin(t * 4);
    feeder(tris, [-6, y0, 40], [176, 92, 255], glow);
    tris.push({ p: [[-6 + 0, y0 + 7.7, 40 - 1.26], [-6 + 1.2, y0 + 7.7, 40 - 1.26], [-6 + 1.2, y0 + 9.9, 40 - 1.26]], col: H.mix(COL.green, [255, 255, 255], 0.3), emissive: true, twoSided: true, bias: -0.2 });
    tris.push({ p: [[-6 + 0, y0 + 7.7, 40 - 1.26], [-6 + 1.2, y0 + 9.9, 40 - 1.26], [-6 + 0, y0 + 9.9, 40 - 1.26]], col: H.mix(COL.green, [255, 255, 255], 0.4), emissive: true, twoSided: true, bias: -0.2 });
    feeder(tris, [6, y0, 40], COL.green, glow);
    // the hummingbird checks both, then picks the UV+green light
    const pick = EI(t, P(43, 'learned') - 0.3, P(43, 'apart'));
    const bxp = H.lerp(2 + Math.sin(t * 1.4) * 3, -3.0, pick), byp = y0 + H.lerp(9.5, 7.8, pick) + Math.sin(t * 2.3) * 0.3;
    hummingbird(tris, [bxp, byp, 37.5], pick > 0.5 ? Math.PI * 0.95 : Math.sin(t * 0.8) * 0.6 + Math.PI, t, 0.8);
    sky(ctx, cam, env, 'human', 33); render3D(ctx, cam, tris, env, 'human', 300);
    lpTag(ctx, 640, 600, 'Rocky Mountains', { k: BK(t, P(41, 'rocky') - 0.1) * OUT(t, b - 0.2), font: FONT(40) });
    bigNumber(ctx, 640, 230, '2020', 120, BK(t, P(41, '2020') - 0.1, 0.4) * OUT(t, b - 0.2), '#ffd23c');
    lpTag(ctx, 640, 300, 'wild hummingbirds tested', { k: BK(t, P(41, 'tested') - 0.1) * OUT(t, b - 0.2), bg: INK, col: '#fff' });
    const L = cam.proj([-6, y0 + 11, 40]), R = cam.proj([6, y0 + 11, 40]);
    lpTag(ctx, L[0], L[1] - 30, 'UV + green', { k: BK(t, P(42, 'ultraviolet') - 0.1), font: FONT(34), bg: '#b05cff', col: '#fff' });
    lpTag(ctx, R[0], R[1] - 30, 'plain green', { k: BK(t, P(43, 'plain') - 0.1), font: FONT(34), bg: '#46b46e', col: '#fff' });
    hexBadge(ctx, L[0] + 120, L[1] - 90, BK(t, P(43, 'apart') - 0.1, 0.35), true, 34);
    lpTag(ctx, 640, 660, 'they can tell them apart', { k: BK(t, P(43, 'apart') + 0.1), font: FONT(36), bg: CORAL, col: '#fff' });
  }

  // ---- O. A colour with no slot in your brain ----
  function sceneSlot(ctx, t) {
    bg(ctx, 'slot', [24, 20, 60], [60, 40, 100], [1000, 330], [130, 90, 180]);
    const a = PS(44);
    const sl = [COL.red, [255, 150, 50], COL.yellow, COL.green, COL.blue, COL.purple];
    const show = EO(t, PS(47) - 0.3, PS(47) + 0.3);
    sl.forEach((c, i) => { const x = 170 + i * 150, k = BK(t, a - 0.2 + i * 0.06) * (1 - show * 0.999); panel(ctx, x, 330, 120, 140, '#2a1f4f', k); gem(ctx, x, 330, 42, c, k); });
    // the empty 7th slot: a gem that never settles
    const ek = BK(t, P(44, 'never') - 0.1, 0.4) * (1 - show * 0.999);
    panel(ctx, 1080, 330, 140, 160, '#4a3c86', ek);
    if (ek > 0.01) {
      ctx.save(); ctx.translate(1080, 330); ctx.scale(ek, ek);
      const r = H.rng(Math.floor(t * 12));
      for (let i = 0; i < 8; i++) { const a0 = i / 8 * TAU, a1 = (i + 1) / 8 * TAU; tri2(ctx, [0, 0], [Math.cos(a0) * 48, Math.sin(a0) * 48], [Math.cos(a1) * 48, Math.sin(a1) * 48], H.rgba([r.int(60, 220), r.int(60, 220), r.int(120, 255)], 0.85)); }
      ctx.font = FONT(56); ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('?', 0, 3); ctx.restore();
    }
    lpTag(ctx, 640, 140, "a color you'll never see", { k: BK(t, P(44, 'never') - 0.1) * OUT(t, PS(45) - 0.2), font: FONT(40), bg: INK, col: '#fff' });
    [['greenish', 620], ['bluish', 770]].forEach(([w, x]) => { const k = BK(t, P(45, w) - 0.1) * OUT(t, PS(46) - 0.2); lpTag(ctx, x, 500, w + '?', { k, font: FONT(32) }); hexBadge(ctx, x + 70, 470, BK(t, P(45, w) + 0.15) * OUT(t, PS(46) - 0.2), false, 22); });
    lpTag(ctx, 640, 520, 'no slot for it in your brain', { k: BK(t, P(46, 'slot') - 0.1) * (1 - show), font: FONT(40), bg: CORAL, col: '#fff' });
    // 47: like a brand-new primary colour
    if (show > 0.01) {
      [COL.red, COL.green, COL.blue].forEach((c, i) => gem(ctx, 330 + i * 220, 360, 80, c, BK(t, PS(47) + i * 0.08)));
      gem(ctx, 1000, 360, 80, H.mix([200, 120, 255], [120, 255, 220], 0.5 + 0.5 * Math.sin(t * 5)), BK(t, P(47, 'new') - 0.1), t, 1);
      if (t > P(47, 'new')) { ctx.save(); ctx.font = FONT(80); ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('?', 1000, 364); ctx.restore(); }
      lpTag(ctx, 550, 520, 'red  green  blue', { k: BK(t, PS(47) + 0.2), font: FONT(34) });
      lpTag(ctx, 1000, 520, 'a new primary?', { k: BK(t, P(47, 'primary') - 0.1), font: FONT(36), bg: '#ffd23c' });
    }
  }

  // ---- P/Q. The mantis shrimp: 12 colour receptors ----
  function sceneShrimp(ctx, t) {
    bg(ctx, 'reef', [20, 70, 100], [10, 36, 60], [640, 120], [80, 170, 190]);
    // light shafts
    for (let i = 0; i < 4; i++) { const x = 200 + i * 300 + Math.sin(t * 0.4 + i) * 30; ctx.fillStyle = 'rgba(200,240,255,0.06)'; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 90, 0); ctx.lineTo(x + 260, HH); ctx.lineTo(x + 120, HH); ctx.closePath(); ctx.fill(); }
    tri2(ctx, [0, 600], [W, 580], [W, HH], H.rgba([40, 60, 70])); tri2(ctx, [0, 600], [W, HH], [0, HH], H.rgba([30, 46, 56]));
    const a = PS(48), m = P(49, 'mantis');
    lpTag(ctx, 640, 110, 'more cones = more colors?', { k: BK(t, P(48, 'cones') - 0.1) * OUT(t, m - 0.2), font: FONT(44), bg: INK, col: '#fff' });
    const sk = BK(t, m - 0.15, 0.45);
    // Q: hyped rainbow burst
    const burst = EO(t, P(51, 'rainbow') - 0.5, P(51, 'rainbow')) * OUT(t, P(52, 'tested') - 0.3, 0.5);
    if (burst > 0.01) for (let i = 0; i < 16; i++) { const a0 = i / 16 * TAU + t * 0.3, a1 = a0 + TAU / 32; tri2(ctx, [640, 360], [640 + Math.cos(a0) * 900 * burst, 360 + Math.sin(a0) * 900 * burst], [640 + Math.cos(a1) * 900 * burst, 360 + Math.sin(a1) * 900 * burst], H.rgba(wl(400 + (i % 8) * 40), 0.55)); }
    if (sk > 0.01) shrimp2(ctx, 720, 400, 1.15 * sk, t);
    lpTag(ctx, 640, 600, 'mantis shrimp', { k: BK(t, m) * OUT(t, P(50, 'twelve') - 0.1), font: FONT(40), bg: CORAL, col: '#fff' });
    // 12 receptors pop as pillars
    const tw = P(50, 'twelve');
    for (let i = 0; i < 12; i++) { const k = BK(t, tw - 0.3 + i * 0.05, 0.3) * OUT(t, PS(51) - 0.1); pillar(ctx, 200 + i * 80, 690, 50, 70 + 20 * Math.sin(i * 1.3 + t * 2), wl(330 + i * 34), k); }
    bigNumber(ctx, 200, 230, '12', 140, BK(t, tw - 0.1, 0.4) * OUT(t, PS(51) - 0.1), '#ffd23c');
    lpTag(ctx, 200, 300, 'color receptors', { k: BK(t, P(50, 'receptors') - 0.1) * OUT(t, PS(51) - 0.1), font: FONT(32) });
    lpTag(ctx, 640, 110, 'a mind-blowing rainbow?', { k: BK(t, PS(51) + 0.6) * OUT(t, PS(52) - 0.1), font: FONT(44), bg: INK, col: '#fff' });
    bigNumber(ctx, 640, 170, '2014', 110, BK(t, P(52, '2014') - 0.1, 0.4), '#ffd23c');
    lpTag(ctx, 640, 230, 'put to the test', { k: BK(t, P(52, 'tested') - 0.1), font: FONT(34), bg: CORAL, col: '#fff' });
  }

  // ---- R. The result: worse at close shades; reads colour like a scanner ----
  function sceneScanner(ctx, t) {
    bg(ctx, 'scan', [30, 26, 74], [70, 48, 112], [640, 360], [140, 100, 190]);
    const a = PS(53);
    gem(ctx, 560, 150, 60, [80, 200, 110], BK(t, a - 0.2)); gem(ctx, 720, 150, 60, [104, 206, 92], BK(t, a - 0.1));
    lpTag(ctx, 640, 250, 'two close shades', { k: BK(t, P(53, 'close') - 0.1), font: FONT(34) });
    // rows
    lpTag(ctx, 170, 400, 'YOU', { k: BK(t, P(53, 'you') - 0.1), font: FONT(40) });
    hexBadge(ctx, 290, 400, BK(t, P(53, 'you') + 0.1), true, 30);
    shrimp2(ctx, 210, 610, 0.55 * BK(t, P(53, 'apart') - 0.3, 0.4), t);
    hexBadge(ctx, 290, 560, BK(t, P(53, 'apart') - 0.05), false, 30);
    // you: compare 3 cones
    const ck = BK(t, P(54, 'comparing') - 0.1, 0.4);
    if (ck > 0.01) { bars3(ctx, t, 480, 440, [0.3 + 0.1 * Math.sin(t * 3), 0.8, 0.25 + 0.1 * Math.sin(t * 2)], ck * 0.5, false); lpTag(ctx, 610, 490, 'compares cones', { k: ck, font: FONT(32), bg: CREAM }); }
    // shrimp: 12 slots, a scanning beam lights one at a time
    const sk = BK(t, P(55, 'read') - 0.1, 0.4);
    if (sk > 0.01) {
      const x0 = 420, w = 40;
      for (let i = 0; i < 12; i++) { const hit = Math.abs(((t - P(55, 'barcode')) * 6) % 12 - i) < 0.6 && t > P(55, 'barcode') - 0.2; panel(ctx, x0 + i * (w + 6), 590, w, 90, H.mix(wl(330 + i * 34), [30, 20, 60], hit ? 0 : 0.55), sk); }
      const sx = x0 + (((t - P(55, 'barcode')) * 6) % 12) * (w + 6);
      if (t > P(55, 'barcode') - 0.2) { ctx.fillStyle = 'rgba(255,90,74,0.85)'; ctx.fillRect(sx - 3, 530, 6, 120); }
      lpTag(ctx, 1060, 590, 'scans', { k: BK(t, P(55, 'scanner') - 0.1), font: FONT(36), bg: CORAL, col: '#fff' });
    }
    lpTag(ctx, 1060, 300, 'fast', { k: BK(t, P(56, 'fast') - 0.1), font: FONT(40), bg: MINT, col: '#fff' });
    lpTag(ctx, 1060, 380, 'not fine', { k: BK(t, P(56, 'fine') - 0.1), font: FONT(40), bg: '#ff5a4a', col: '#fff' });
  }

  // ---- S/T. Reindeer: snow reflects UV, lichen soaks it up ----
  function arcticWorld(t) {
    const T = terrain('arctic'), tris = T.tris.slice(), y0 = T.height(2, 40);
    reindeer(tris, [3, y0, 40], 2.6, t, 1.1);
    return { tris, y0 };
  }
  function sceneArctic(ctx, t) {
    const a = PS(57), r0 = PS(58), u = PS(60);
    const cam = camKF([[a - 0.3, 0, 28, -20, 0, 0.32], [r0, -2, 14, 6, 0.04, 0.2], [PS(59), -4, 11, 16, 0.08, 0.16], [u, -4, 11, 18, 0.08, 0.16], [DURATION, -5, 12, 14, 0.1, 0.2]], t);
    const env = ENV.arctic, A = arcticWorld(t);
    const sw = EI(t, u, u + 1.0), cut = H.lerp(-10, W + 10, sw);
    sky(ctx, cam, env, 'human', 91); render3D(ctx, cam, A.tris, env, 'human', 260);
    if (sw > 0.001) {
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, cut, HH); ctx.clip(); sky(ctx, cam, env, 'uv', 91); render3D(ctx, cam, A.tris, env, 'uv', 260); ctx.restore();
      if (sw < 1) { ctx.fillStyle = '#fff'; ctx.fillRect(cut - 3, 0, 6, HH); }
    }
    lpTag(ctx, 640, 110, 'why see ultraviolet?', { k: BK(t, a) * OUT(t, r0 - 0.2), font: FONT(44), bg: INK, col: '#fff' });
    const rp = cam.proj([3, A.y0 + 9, 40]);
    lpTag(ctx, rp[0], rp[1] - 40, 'reindeer', { k: BK(t, P(58, 'reindeer') - 0.1) * OUT(t, PS(59) + 1), font: FONT(36) });
    lpTag(ctx, 1040, 110, 'Arctic', { k: BK(t, P(58, 'arctic') - 0.1) * OUT(t, u - 0.2), bg: '#7fb0e6', col: INK });
    lpTag(ctx, 330, 160, 'snow reflects UV', { k: BK(t, P(59, 'reflects') - 0.1) * OUT(t, u - 0.2), font: FONT(34), bg: CREAM });
    lpTag(ctx, 900, 560, 'lichen soaks it up', { k: BK(t, P(59, 'lichen') - 0.1) * OUT(t, u - 0.2), font: FONT(34), bg: '#a0a068', col: INK });
    lpTag(ctx, 640, 110, 'UV view', { k: BK(t, u + 0.6), font: FONT(44), bg: '#b05cff', col: '#fff' });
    lpTag(ctx, 640, 640, 'lichen pops out dark', { k: BK(t, P(60, 'dark') - 0.1), font: FONT(40), bg: INK, col: '#fff' });
  }

  // ---- U. Line-up: every animal its own version of colour ----
  function sceneLineup(ctx, t) {
    bg(ctx, 'lineup', [30, 24, 72], [84, 50, 118], [640, 300], [150, 110, 190]);
    const a = PS(62), hi = EI(t, P(63, 'three') - 0.2, P(63, 'three') + 0.3);
    const cards = [['dog', [COL.blue, COL.yellow], '2'], ['you', [COL.blue, COL.green, COL.red], '3'], ['bee', [COL.uv, COL.blue, COL.green], '3'], ['bird', [COL.uv, COL.blue, COL.green, COL.red], '4'], ['shrimp', null, '12']];
    cards.forEach(([n, gs, num], i) => {
      const x = 160 + i * 240, k = BK(t, a + 0.15 + i * 0.25, 0.4), isYou = i === 1, sc = isYou ? 1 + hi * 0.14 : 1 - hi * 0.06;
      if (k <= 0.01) return;
      ctx.save(); ctx.translate(x, 380); ctx.scale(sc, sc); ctx.translate(-x, -380);
      panel(ctx, x, 380, 200, 300, isYou ? H.mix([42, 31, 79], [255, 112, 96], hi * 0.6) : '#2a1f4f', k);
      bigNumber(ctx, x, 380, num, 96, k, '#ffd23c');
      if (gs) gs.forEach((c, j) => gem(ctx, x + (j - (gs.length - 1) / 2) * 40, 440, 17, c, k));
      else for (let j = 0; j < 12; j++) gem(ctx, x - 82 + (j % 6) * 33, 430 + Math.floor(j / 6) * 30, 12, wl(330 + j * 34), k);
      lpTag(ctx, x, 270, n, { k, font: FONT(34), bg: isYou ? CORAL : CREAM, col: isYou ? '#fff' : INK });
      ctx.restore();
    });
    lpTag(ctx, 640, 110, 'the colors it needs', { k: BK(t, P(62, 'needs') - 0.1) * OUT(t, PS(63) - 0.1), font: FONT(44), bg: INK, col: '#fff' });
    lpTag(ctx, 640, 110, 'just one version of the world', { k: BK(t, P(63, 'version') - 0.1), font: FONT(44), bg: INK, col: '#fff' });
    lpTag(ctx, 640, 610, 'cone types', { k: BK(t, a + 1.2) });
  }

  // ---- X. Teaser: next question ----
  function sceneNext(ctx, t) {
    bg(ctx, 'next', [27, 35, 80], [192, 106, 147], [900, 400], [255, 176, 138]);
    stars(ctx, 70, 250, 5);
    const a = PS(66);
    lpTag(ctx, 300, 200, 'NEXT UP', { k: BK(t, a - 0.1), font: FONT(44), bg: CORAL, col: '#fff' });
    title2(ctx, ['What actually happens'], 420, 340, 56, EO(t, P(66, 'what') - 0.1, P(66, 'what') + 0.3));
    title2(ctx, ['when a bee stings you?'], 420, 410, 56, EO(t, PS(67) - 0.1, PS(67) + 0.3), ['#ffd23c']);
    bee2(ctx, 1010 + Math.sin(t * 1.5) * 20, 380 + Math.sin(t * 2.3) * 16, 2.6 * BK(t, a, 0.45), t, -0.15);
  }

  // ================= timeline =================
  const SC = [
    { s: 0, f: (c, t) => sceneHook(c, t, false) },
    { s: PS(5) - 0.3, f: sceneSpectrum, ch: '1  How you see color' },
    { s: PS(10) - 0.3, f: sceneCones },
    { s: PS(12) - 0.3, f: sceneMix },
    { s: PS(15) - 0.3, f: scenePurple },
    { s: PS(21) - 0.3, f: sceneDog, ch: '2  Fewer cones' },
    { s: PS(25) - 0.3, f: sceneGrid },
    { s: PS(27) - 0.3, f: sceneBeeCones, ch: '3  Bees see UV' },
    { s: PS(30) - 0.3, f: sceneBullseye },
    { s: PS(34) - 0.3, f: sceneBird4, ch: '4  Birds: 4 cones' },
    { s: PS(36) - 0.3, f: sceneTits },
    { s: PS(38) - 0.3, f: sceneTetra },
    { s: PS(41) - 0.3, f: sceneRockies },
    { s: PS(44) - 0.3, f: sceneSlot },
    { s: PS(48) - 0.3, f: sceneShrimp, ch: '5  The mantis shrimp' },
    { s: PS(53) - 0.3, f: sceneScanner },
    { s: PS(57) - 0.3, f: sceneArctic, ch: '6  Why see UV?' },
    { s: PS(62) - 0.3, f: sceneLineup },
    { s: PS(64) - 0.3, f: (c, t) => sceneHook(c, t, true) },
    { s: PS(66) - 0.3, f: sceneNext },
  ];
  const WIPE = 0.5;
  const sceneAt = (t) => { let j = 0; for (let i = 0; i < SC.length; i++) if (t >= SC[i].s) j = i; return j; };
  // facet-flip transition (from the reference's terrain build): the new scene's triangles flip in across the frame
  let MOS = null, LAYER = null;
  function mosaic() {
    if (MOS) return MOS;
    const r = H.rng(808), cs = 110, nx = Math.ceil(W / cs), ny = Math.ceil(HH / cs), V = [];
    for (let j = 0; j <= ny; j++) { const row = []; for (let i = 0; i <= nx; i++) row.push([i * (W / nx) + (i > 0 && i < nx ? r.range(-0.35, 0.35) * cs : 0), j * (HH / ny) + (j > 0 && j < ny ? r.range(-0.35, 0.35) * cs : 0)]); V.push(row); }
    const tr = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const a = V[j][i], b = V[j][i + 1], c = V[j + 1][i], d = V[j + 1][i + 1]; for (const f of (i + j) % 2 ? [[a, c, b], [b, c, d]] : [[a, c, d], [a, d, b]]) { const cx = (f[0][0] + f[1][0] + f[2][0]) / 3, cy = (f[0][1] + f[1][1] + f[2][1]) / 3; tr.push({ f, cx, cy, d: (cx / W) * 0.7 + (cy / HH) * 0.15 + r() * 0.15 }); } }
    return (MOS = tr);
  }
  function chapterTag(ctx, t) {
    let cur = null; for (const s of SC) if (s.ch && t >= s.s) cur = s;
    if (!cur || t > PS(62) - 0.3) return;
    const big = 1 - EI(t, cur.s + 1.6, cur.s + 2.2), k = BK(t, cur.s + 0.25, 0.35);
    ctx.save(); ctx.font = FONT(28); const w = ctx.measureText(cur.ch).width + 36; ctx.restore();
    if (big > 0.01) lpTag(ctx, 640, 360, cur.ch, { k: k * big * 1.6, font: FONT(28), bg: INK, col: '#fff' });
    lpTag(ctx, 36 + w / 2, 44, cur.ch, { k: k * (1 - big), font: FONT(28), bg: 'rgba(42,31,79,1)', col: '#fff' });
  }
  function explainer(ctx, W_, H_, t) {
    ctx.save(); ctx.lineJoin = 'round';
    const j = sceneAt(t), S = SC[j];
    if (j > 0 && t < S.s + WIPE) {
      SC[j - 1].f(ctx, S.s - 0.001);
      if (!LAYER) LAYER = H.layer(W, HH);
      const lc = LAYER.getContext('2d'); lc.setTransform(1, 0, 0, 1, 0, 0); lc.clearRect(0, 0, W, HH); lc.lineJoin = 'round'; S.f(lc, t);
      const u = (t - S.s) / WIPE, flashes = [];
      ctx.save(); ctx.beginPath();
      for (const m of mosaic()) {
        const p = H.ease.out(cl((u * 1.35 - m.d) / 0.35)); if (p <= 0) continue;
        const f = m.f.map((q) => [m.cx + (q[0] - m.cx) * p, m.cy + (q[1] - m.cy) * p]);
        ctx.moveTo(f[0][0], f[0][1]); ctx.lineTo(f[1][0], f[1][1]); ctx.lineTo(f[2][0], f[2][1]); ctx.closePath();
        if (p < 1) flashes.push([f, 1 - p]);
      }
      ctx.clip(); ctx.drawImage(LAYER, 0, 0); ctx.restore();
      for (const [f, al] of flashes) { ctx.fillStyle = `rgba(255,226,190,${al * 0.7})`; ctx.beginPath(); ctx.moveTo(f[0][0], f[0][1]); ctx.lineTo(f[1][0], f[1][1]); ctx.lineTo(f[2][0], f[2][1]); ctx.closePath(); ctx.fill(); }
    } else S.f(ctx, t);
    chapterTag(ctx, t);
    ctx.restore();
  }

  // ================= thumbnail: the hummingbird at its flower + 2 huge words =================
  function thumbnail(ctx, W_, H_) {
    ctx.save(); ctx.scale(W_ / W, H_ / HH);
    const t = 9.5, cam = makeCamYaw([-7.5, 9.4, 28], 0.02, 0.05, 760), env = ENV.dusk;
    sky(ctx, cam, env, 'human');
    const M = meadowWorld(t);
    render3D(ctx, cam, M.tris, env);
    const g = ctx.createLinearGradient(0, 0, 640, 0); g.addColorStop(0, 'rgba(27,20,60,0.75)'); g.addColorStop(1, 'rgba(27,20,60,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, 760, HH);
    lpTag(ctx, 300, 250, 'INVISIBLE', { font: FONT(104), h: 150, bg: CREAM, col: INK });
    lpTag(ctx, 300, 430, 'COLORS', { font: FONT(124), h: 170, bg: CORAL, col: '#fff' });
    const fp = cam.proj(M.flowerC);
    for (let i = 0; i < 3; i++) gem(ctx, fp[0] + 120 + i * 90, fp[1] - 190 + (i % 2) * 40, 40, H.mix([190, 80, 255], [80, 255, 200], i / 2), 1, i, 1);
    ctx.restore();
  }

  // ================= sound: faceted valley kit (reference lpSound helpers), voiceover mode =================
  function scoreSound(k) {
    const glass = (t, f, g, p = 0, dur = 0.9, minor) => { const F = k.hz(f); k.tone(t, { f: F, type: 'triangle', dur, gain: 0.09 * g, a: 0.003, pan: p, verb: 0.35, minor }); k.tone(t, { f: F * 2.32, dur: dur * 0.5, gain: 0.03 * g, a: 0.002, pan: p, verb: 0.35, minor }); };
    const facet = (t, f = 520, g = 1, p = 0, minor = true) => { k.play('tock', t, { f, gain: 0.45 * g, pan: p, minor }); k.noise(t, { dur: 0.02, filter: 'bandpass', f: f * 2.6, q: 3, gain: 0.18 * g, a: 0.001, pan: p, minor }); };
    const gust = (t0, t1, g = 1) => { const d = t1 - t0, steps = [260, 420, 610, 470, 300]; steps.forEach((f, i) => { const s = t0 + (d * i) / steps.length, dd = (d / steps.length) * 1.9; k.noise(s, { dur: dd, color: 'pink', filter: 'bandpass', f: [[0, f], [dd, f * 1.25]], q: 1.4, gain: 0.05 * g * Math.sin(((i + 0.5) / steps.length) * Math.PI), a: dd * 0.45, verb: 0.15 }); }); };
    const flip = (t) => { k.noise(t, { dur: 0.5, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.5, 2200]], q: 1, gain: 0.07, a: 0.25 }); for (let i = 0; i < 7; i++) k.play('tick', t + 0.05 + i * 0.055, { f: 2600 + i * 180, gain: 0.35, minor: true }); };
    const hit = (t, notes = ['D4', 'A4', 'D5'], g = 1.2) => { k.play('impact', t, { gain: 0.8 * g }); notes.forEach((n, i) => glass(t + i * 0.03, n, g, (i - 1) * 0.25, 1.4)); };
    const hum = (t0, t1) => { for (let x = t0; x < t1; x += 0.5) k.tone(x, { f: 92 + 6 * Math.sin(x), type: 'sawtooth', dur: 0.55, gain: 0.018, a: 0.2, hold: 0.1, filter: 'lowpass', f2: 500, minor: true, pan: -0.3 }); };
    const W_ = (i, w, n) => P(i, w, n);
    // scene changes: facet flips
    SC.forEach((s, i) => { if (i) flip(s.s); });
    // hook
    glass(0.2, 'A4', 1.1, 0, 1.4); glass(0.2, 'D4', 0.8, 0, 1.4); gust(0, 3.4, 1.1); hum(0.3, 13.4);
    facet(W_(0, 'hummingbirds') - 0.1, 560, 1, 0); facet(W_(0, 'brain'), 480);
    k.play('error', W_(1, 'brighter') + 0.15, { f: 'A3', gain: 0.4, pan: -0.4 }); k.play('error', W_(1, 'sharper') + 0.15, { f: 'A3', gain: 0.4, pan: 0.4 });
    k.play('sparkle', W_(2, 'new'), { gain: 0.9, n: 8 }); facet(W_(2, 'names') - 0.1);
    k.play('riser', PS(3) - 0.6, { dur: 0.7, gain: 0.6 }); hit(PS(3), ['D4', 'F#4', 'A4']); glass(W_(3, 'cant'), 'E5', 0.8);
    facet(W_(4, 'you') - 0.15, 620, 1.2, 0, false); gust(11.4, 13.6, 0.8);
    // spectrum
    k.noise(PS(5), { dur: 1.8, color: 'pink', filter: 'bandpass', f: [[0, 300], [1.8, 2400]], q: 0.8, gain: 0.06, a: 0.6, minor: true });
    facet(W_(5, 'light')); facet(W_(5, 'different'), 480, 1, -0.5); facet(W_(5, 'lengths'), 480, 1, 0.5);
    k.play('ding', W_(6, 'slice') - 0.2, { f: 'E6', gain: 0.6 });
    k.play('stamp', W_(7, '400') - 0.1, { gain: 0.6, pan: -0.3 }); k.play('stamp', W_(7, '700') - 0.1, { gain: 0.6, pan: 0.3 }); facet(W_(7, 'nanometers'));
    k.play('whoosh', PS(8) - 0.3, { dur: 0.9, gain: 0.7 }); k.play('sparkle', PS(8) + 0.4, { gain: 1, n: 10 }); facet(W_(8, 'rainbow'));
    facet(W_(9, 'violet'), 440, 1, -0.6); facet(W_(9, 'red'), 640, 1, 0.6);
    // cones
    k.play('pop', W_(10, 'eye'), { f: 520, gain: 0.5, minor: true });
    ['blue', 'green', 'red'].forEach((n, i) => glass(W_(11, n) - 0.1, ['C5', 'E5', 'G5'][i], 1, -0.4 + i * 0.4));
    hit(W_(10, 'three') - 0.1, ['C4', 'G4', 'C5'], 0.9);
    // mix
    for (let x = PS(12); x < W_(14, 'yellow') - 0.2; x += 0.22) k.play('tick', x, { f: 3200 + (x * 700) % 900, gain: 0.25, minor: true });
    k.noise(W_(13, 'comparing') - 0.1, { dur: 0.6, color: 'pink', filter: 'bandpass', f: [[0, 600], [0.6, 1500]], q: 1.2, gain: 0.06, a: 0.3, minor: true });
    k.play('success', W_(14, 'yellow') - 0.1, { f: 'D5', gain: 0.5 }); facet(W_(14, 'together') - 0.2);
    // purple
    k.noise(PS(16), { dur: 1.6, color: 'pink', filter: 'bandpass', f: [[0, 700], [1.6, 1800]], q: 2, gain: 0.04, a: 0.4, minor: true });
    k.play('error', W_(16, 'all') - 0.05, { f: 'G3', gain: 0.7 });
    glass(W_(17, 'red') - 0.1, 'A4', 0.8, 0.4); glass(W_(17, 'blue') - 0.1, 'D4', 0.8, -0.4); k.tone(W_(17, 'quiet') - 0.2, { f: [[0, 400], [0.4, 180]], type: 'triangle', dur: 0.45, gain: 0.08 });
    hit(W_(18, 'invents') - 0.1, ['D4', 'A4', 'F#5'], 1.3); k.play('sparkle', W_(18, 'invents'), { gain: 1, n: 8 });
    k.play('stamp', W_(19, 'nonspectral') - 0.1, { gain: 0.6 }); k.play('bell', W_(20, 'hold') - 0.1, { gain: 0.5 });
    // dog
    gust(PS(21) - 0.3, PS(23) + 0.4, 0.7);
    k.play('pop', W_(21, 'away'), { f: 300, gain: 0.6 }); k.play('pop', W_(22, 'dogs') - 0.1, { f: 420, gain: 0.7 }); facet(W_(22, 'two') - 0.1, 600, 1.1, -0.5, false);
    facet(W_(22, 'blue') - 0.1, 470); facet(W_(22, 'yellow') - 0.1, 520); facet(W_(23, 'red') - 0.1); facet(W_(23, 'grass') - 0.1, 460);
    k.play('swish', PS(24), { dur: 0.6, gain: 0.8 }); facet(PS(24) + 0.3); facet(PS(24) + 0.5, 440); k.play('buzz', W_(24, 'muddy') - 0.1, { f: 98, dur: 0.35, gain: 0.5 });
    // grid
    [W_(25, 'fewer', 1), W_(25, 'colors'), W_(26, 'more')].forEach((x, i) => { k.play('pop', x - 0.1, { f: 380 + i * 120, gain: 0.6 }); for (let j = 0; j < 6; j++) k.play('tick', x + j * 0.04, { f: 3000 + j * 200, gain: 0.25, minor: true }); });
    // bees
    k.play('buzz', PS(27), { f: 220, dur: 0.8, gain: 0.25 }); k.play('whoosh', W_(27, 'shifted') - 0.1, { dur: 0.5, gain: 0.5 });
    ['ultraviolet', 'blue', 'green'].forEach((w, i) => glass(W_(28, w) - 0.1, ['B5', 'E5', 'G#4'][i], 0.9, -0.5 + i * 0.3));
    k.tone(W_(29, 'dark') - 0.3, { f: [[0, 500], [0.5, 110]], type: 'triangle', dur: 0.6, gain: 0.12 }); facet(W_(29, 'dark') - 0.1);
    k.play('pop', PS(30), { f: 500, gain: 0.5 }); facet(W_(30, 'yellow') - 0.1);
    k.play('riser', W_(31, 'ultraviolet') - 0.6, { dur: 0.5, gain: 0.5 }); hit(W_(31, 'bullseyes') - 0.1, ['E4', 'B4', 'E5'], 1);
    for (let i = 0; i < 5; i++) k.play('blip', W_(32, 'landing') + i * 0.3, { f: 'E6', gain: 0.5, minor: true });
    k.play('buzz', W_(32, 'landing'), { f: 230, dur: 1.6, gain: 0.25 }); k.play('success', W_(33, 'nectar') - 0.1, { f: 'E5', gain: 0.45 });
    // birds
    facet(W_(34, 'step') - 0.1); hit(W_(35, 'four') - 0.1, ['C4', 'G4', 'C5', 'E5'], 1.1);
    [0, 1, 2, 3].forEach((i) => glass(W_(35, 'four') + i * 0.09, ['B5', 'E5', 'G5', 'C6'][i], 0.6, -0.5 + i * 0.33, 0.7, true));
    facet(W_(35, 'ultraviolet') - 0.1, 620);
    k.play('pop', PS(36) - 0.2, { f: 460, gain: 0.5 }); k.play('pop', PS(36), { f: 520, gain: 0.5 }); facet(W_(36, 'male') - 0.1, 500, 1, -0.4); facet(W_(36, 'female') - 0.1, 540, 1, 0.4);
    k.play('riser', W_(37, 'ultraviolet') - 0.6, { dur: 0.6, gain: 0.5 }); k.play('sparkle', W_(37, 'crowns') - 0.1, { gain: 1, n: 8, pan: -0.4 });
    // tetra
    glass(W_(38, 'purple') - 0.15, 'F#4', 1); k.play('pop', PS(39) - 0.2, { f: 480, gain: 0.5 }); glass(W_(39, 'nonspectral') - 0.2, 'A5', 0.8, -0.4);
    hit(W_(40, 'four') - 0.15, ['D4', 'A4', 'E5'], 1); [0, 1, 2].forEach((i) => glass(W_(40, 'ways') - 0.1 + i * 0.15, ['B5', 'D6', 'F#6'][i], 0.6, 0.4, 0.7, true));
    // rockies
    gust(PS(41) - 0.3, PS(42) + 0.4, 1.1); hum(PS(42), PS(44) - 0.3);
    hit(W_(41, '2020') - 0.1, ['C4', 'E4', 'G4'], 1.2); facet(W_(41, 'tested') - 0.1); facet(W_(41, 'rocky') - 0.1, 460);
    k.play('ding', W_(42, 'ultraviolet') - 0.1, { f: 'B5', gain: 0.4, pan: -0.4 }); k.play('ding', W_(43, 'plain') - 0.1, { f: 'G5', gain: 0.4, pan: 0.4 });
    k.play('success', W_(43, 'apart') - 0.1, { f: 'C6', gain: 0.6 });
    // slot
    for (let i = 0; i < 6; i++) facet(PS(44) - 0.2 + i * 0.06, 400 + i * 40, 0.8);
    k.play('glitch', W_(44, 'never') - 0.1, { gain: 0.6 });
    k.play('error', W_(45, 'greenish') + 0.15, { f: 'A3', gain: 0.4 }); k.play('error', W_(45, 'bluish') + 0.15, { f: 'G3', gain: 0.4 });
    k.play('stamp', W_(46, 'slot') - 0.1, { gain: 0.6 });
    [0, 1, 2].forEach((i) => glass(PS(47) + i * 0.08, ['C5', 'E5', 'G5'][i], 0.7)); k.play('glitch', W_(47, 'new') - 0.1, { gain: 0.5 }); facet(W_(47, 'primary') - 0.1);
    // shrimp
    k.noise(PS(48) - 0.3, { dur: 7.5, color: 'brown', filter: 'lowpass', f: 400, gain: 0.05, a: 1, hold: 5.5, minor: true });
    facet(W_(48, 'cones') - 0.1); k.play('pop', W_(49, 'mantis') - 0.15, { f: 360, gain: 0.7 });
    for (let i = 0; i < 12; i++) k.play('blip', W_(50, 'twelve') - 0.3 + i * 0.05, { f: k.hz('C5') * Math.pow(2, i / 12), gain: 0.45, minor: true });
    hit(W_(50, 'twelve') - 0.1, ['D4', 'A4', 'D5'], 1);
    k.play('riser', W_(51, 'rainbow') - 0.6, { dur: 0.6, gain: 0.6 }); k.play('sparkle', W_(51, 'rainbow'), { gain: 1.1, n: 12 });
    k.play('stamp', W_(52, '2014') - 0.1, { gain: 0.8 }); facet(W_(52, 'tested') - 0.1);
    // scanner
    facet(PS(53) - 0.2, 480); facet(PS(53) - 0.1, 500); k.play('success', W_(53, 'you') + 0.1, { f: 'C6', gain: 0.4 }); k.play('error', W_(53, 'apart') - 0.05, { f: 'G3', gain: 0.6 });
    facet(W_(54, 'comparing') - 0.1); for (let x = W_(55, 'barcode') - 0.2; x < PS(57) - 0.4; x += 1 / 6) k.play('blip', x, { f: 'A6', dur: 0.03, gain: 0.3, minor: true });
    k.play('buzz', W_(55, 'scanner') - 0.1, { f: 440, dur: 0.2, gain: 0.25 });
    k.play('success', W_(56, 'fast') - 0.1, { f: 'E6', gain: 0.4 }); k.play('error', W_(56, 'fine') - 0.1, { f: 'A3', gain: 0.5 });
    // arctic
    gust(PS(57) - 0.3, PS(58) + 0.5, 1.2); k.noise(PS(57), { dur: 14, color: 'pink', filter: 'highpass', f: 3500, gain: 0.012, a: 2, hold: 10, minor: true });
    facet(PS(57) + 0.1); facet(W_(58, 'reindeer') - 0.1, 460); facet(W_(58, 'arctic') - 0.1, 560);
    glass(W_(59, 'reflects') - 0.1, 'E6', 0.7, -0.4); k.tone(W_(59, 'soaks') - 0.1, { f: [[0, 600], [0.5, 150]], type: 'triangle', dur: 0.55, gain: 0.1, pan: 0.4 }); facet(W_(59, 'lichen') - 0.1, 440);
    k.play('whoosh', PS(60), { dur: 1.0, gain: 0.8 }); k.play('sparkle', PS(60) + 0.8, { gain: 1, n: 8 }); hit(W_(60, 'dark') - 0.1, ['C4', 'G4', 'D5'], 1);
    // lineup
    for (let i = 0; i < 5; i++) k.play('pop', PS(62) + 0.15 + i * 0.25, { f: 400 + i * 60, gain: 0.55 });
    facet(W_(62, 'needs') - 0.1); hit(W_(63, 'three') - 0.2, ['D4', 'F#4', 'A4', 'D5'], 1.1); facet(W_(63, 'version') - 0.1);
    // end + teaser
    hum(PS(64), PS(66) - 0.4); gust(PS(64) - 0.3, PS(65), 0.8); glass(W_(65, 'color') - 0.1, 'A4', 1.2, 0, 1.6); glass(W_(65, 'never') - 0.1, 'D5', 1, 0, 1.6);
    k.play('stamp', PS(66) - 0.1, { gain: 0.7 }); k.play('buzz', PS(67) - 0.2, { f: 220, dur: 1.2, gain: 0.3 });
    ['D4', 'A4', 'D5', 'F#5'].forEach((n, i) => glass(PE(67) + 0.05 + i * 0.05, n, 1.1, (i - 1.5) * 0.25, 1.2));
  }

  window.BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: sceneAt(p.s) }));
  window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH; window.SCENES = SC;
})();
