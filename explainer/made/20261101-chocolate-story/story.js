// ================= Claymation Set, 16:9 1280x720: "The Story of Chocolate: How It All Started" =================
// Long explainer. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// One clay studio: every scene is a sculpted set (wall + table), every piece a baked plasticine lump popped on with
// squash-and-stretch on twos (12 fps), slid, or knocked off the table at the end of the beat.
(function () {
  const W0 = 1280, H0 = 720, TAU = Math.PI * 2;
  // ---------- BEATS: one entry per voiceover phrase (phrases.json, Kokoro am_michael) ----------
  const PH = [
    {"s":0.25,"e":3.14,"text":"You could buy a turkey with a hundred cocoa beans.","words":[["you",0.25],["could",0.47],["buy",0.83],["a",1.05],["turkey",1.12],["with",1.55],["a",1.84],["hundred",1.91],["cocoa",2.42],["beans",2.78]]},
    {"s":3.69,"e":5.99,"text":"So why did chocolate stop being money,","words":[["so",3.69],["why",3.84],["did",4.06],["chocolate",4.29],["stop",4.95],["being",5.25],["money",5.62]]},
    {"s":6.29,"e":8.05,"text":"and how did it end up in your hand?","words":[["and",6.29],["how",6.49],["did",6.7],["it",6.9],["end",7.03],["up",7.24],["in",7.37],["your",7.51],["hand",7.78]]},
    {"s":8.6,"e":10.32,"text":"This is the story of chocolate.","words":[["this",8.6],["is",8.88],["the",9.01],["story",9.22],["of",9.57],["chocolate",9.7]]},
    {"s":10.87,"e":13.16,"text":"It starts with a tree in the rainforest.","words":[["it",10.87],["starts",11.02],["with",11.45],["a",11.73],["tree",11.8],["in",12.09],["the",12.23],["rainforest",12.45]]},
    {"s":13.71,"e":16.81,"text":"The cacao tree grows big, football-shaped pods,","words":[["the",13.71],["cacao",13.96],["tree",14.37],["grows",14.69],["big",15.1],["footballshaped",15.34],["pods",16.48]]},
    {"s":17.11,"e":18.24,"text":"right on its trunk.","words":[["right",17.11],["on",17.49],["its",17.64],["trunk",17.86]]},
    {"s":18.79,"e":21.49,"text":"Inside each pod are thirty to fifty seeds,","words":[["inside",18.79],["each",19.27],["pod",19.58],["are",19.82],["thirty",20.06],["to",20.54],["fifty",20.7],["seeds",21.09]]},
    {"s":21.79,"e":23.35,"text":"wrapped in sweet white pulp.","words":[["wrapped",21.79],["in",22.26],["sweet",22.4],["white",22.74],["pulp",23.08]]},
    {"s":23.9,"e":25.77,"text":"Those seeds are cocoa beans.","words":[["those",23.9],["seeds",24.31],["are",24.71],["cocoa",24.96],["beans",25.36]]},
    {"s":26.32,"e":28.85,"text":"Scientists found traces of cacao in pots","words":[["scientists",26.32],["found",27.07],["traces",27.44],["of",27.88],["cacao",28.03],["in",28.41],["pots",28.56]]},
    {"s":29.15,"e":30.96,"text":"from the Amazon in Ecuador,","words":[["from",29.15],["the",29.48],["amazon",29.73],["in",30.22],["ecuador",30.39]]},
    {"s":31.26,"e":33.73,"text":"about five thousand three hundred years old.","words":[["about",31.26],["five",31.6],["thousand",31.86],["three",32.4],["hundred",32.73],["years",33.2],["old",33.53]]},
    {"s":34.28,"e":36.04,"text":"Later, the Olmec and the Maya","words":[["later",34.28],["the",34.66],["olmec",34.89],["and",35.27],["the",35.5],["maya",35.73]]},
    {"s":36.34,"e":38.05,"text":"turned the beans into a drink.","words":[["turned",36.34],["the",36.77],["beans",36.98],["into",37.34],["a",37.62],["drink",37.7]]},
    {"s":38.6,"e":41.05,"text":"They roasted them, ground them into paste,","words":[["they",38.6],["roasted",38.89],["them",39.39],["ground",39.68],["them",40.11],["into",40.4],["paste",40.69]]},
    {"s":41.35,"e":43.62,"text":"and mixed in water, chili, and cornmeal.","words":[["and",41.35],["mixed",41.57],["in",41.93],["water",42.08],["chili",42.45],["and",42.81],["cornmeal",43.03]]},
    {"s":44.17,"e":45.66,"text":"Then they poured it from high up,","words":[["then",44.17],["they",44.4],["poured",44.63],["it",44.97],["from",45.09],["high",45.32],["up",45.55]]},
    {"s":45.96,"e":47.49,"text":"from one cup into another,","words":[["from",45.96],["one",46.25],["cup",46.47],["into",46.69],["another",46.98]]},
    {"s":47.79,"e":49.66,"text":"to whip up a thick foam on top.","words":[["to",47.79],["whip",47.95],["up",48.28],["a",48.44],["thick",48.52],["foam",48.93],["on",49.26],["top",49.42]]},
    {"s":50.21,"e":51.29,"text":"And here's the thing.","words":[["and",50.21],["heres",50.41],["the",50.75],["thing",50.95]]},
    {"s":51.84,"e":53.14,"text":"It wasn't sweet at all.","words":[["it",51.84],["wasnt",51.99],["sweet",52.37],["at",52.75],["all",52.91]]},
    {"s":53.69,"e":55.89,"text":"It was bitter, spicy, and very special.","words":[["it",53.69],["was",53.83],["bitter",54.05],["spicy",54.49],["and",54.86],["very",55.08],["special",55.37]]},
    {"s":56.44,"e":58.22,"text":"The Aztecs loved it so much","words":[["the",56.44],["aztecs",56.68],["loved",57.17],["it",57.57],["so",57.73],["much",57.89]]},
    {"s":58.52,"e":60.2,"text":"they used the beans as money.","words":[["they",58.52],["used",58.81],["the",59.1],["beans",59.32],["as",59.69],["money",59.83]]},
    {"s":60.75,"e":63.79,"text":"One record from the fifteen hundreds lists prices.","words":[["one",60.75],["record",60.97],["from",61.4],["the",61.69],["fifteen",61.91],["hundreds",62.41],["lists",62.99],["prices",63.36]]},
    {"s":64.34,"e":65.98,"text":"A tomato cost one bean.","words":[["a",64.34],["tomato",64.43],["cost",64.98],["one",65.34],["bean",65.62]]},
    {"s":66.53,"e":68.29,"text":"An avocado, three beans.","words":[["an",66.53],["avocado",66.72],["three",67.37],["beans",67.83]]},
    {"s":68.84,"e":70.49,"text":"A turkey hen, one hundred.","words":[["a",68.84],["turkey",68.93],["hen",69.42],["one",69.67],["hundred",69.91]]},
    {"s":71.04,"e":73.22,"text":"Some people even made fake beans,","words":[["some",71.04],["people",71.36],["even",71.85],["made",72.17],["fake",72.49],["beans",72.81]]},
    {"s":73.52,"e":75.45,"text":"by stuffing empty shells with mud.","words":[["by",73.52],["stuffing",73.66],["empty",74.21],["shells",74.55],["with",74.97],["mud",75.24]]},
    {"s":76.0,"e":77.73,"text":"Then, in the fifteen hundreds,","words":[["then",76.0],["in",76.29],["the",76.43],["fifteen",76.65],["hundreds",77.15]]},
    {"s":78.03,"e":81.29,"text":"Spanish explorers carried cacao back across the ocean.","words":[["spanish",78.03],["explorers",78.53],["carried",79.16],["cacao",79.66],["back",80.02],["across",80.3],["the",80.72],["ocean",80.94]]},
    {"s":81.84,"e":83.79,"text":"The Spanish court tried the bitter drink,","words":[["the",81.84],["spanish",82.01],["court",82.41],["tried",82.7],["the",82.99],["bitter",83.16],["drink",83.5]]},
    {"s":84.09,"e":85.37,"text":"and did something new.","words":[["and",84.09],["did",84.3],["something",84.52],["new",85.15]]},
    {"s":85.92,"e":86.96,"text":"They added sugar,","words":[["they",85.92],["added",86.22],["sugar",86.59]]},
    {"s":87.26,"e":88.77,"text":"plus cinnamon and vanilla.","words":[["plus",87.26],["cinnamon",87.54],["and",88.08],["vanilla",88.29]]},
    {"s":89.32,"e":90.9,"text":"Suddenly, Europe was hooked.","words":[["suddenly",89.32],["europe",89.87],["was",90.28],["hooked",90.48]]},
    {"s":91.45,"e":94.09,"text":"Fancy chocolate houses opened in London,","words":[["fancy",91.45],["chocolate",91.84],["houses",92.53],["opened",93.0],["in",93.47],["london",93.62]]},
    {"s":94.39,"e":96.05,"text":"where rich people sipped it hot.","words":[["where",94.39],["rich",94.71],["people",94.96],["sipped",95.35],["it",95.73],["hot",95.86]]},
    {"s":96.6,"e":98.49,"text":"But for almost three hundred years,","words":[["but",96.6],["for",96.8],["almost",96.99],["three",97.38],["hundred",97.71],["years",98.17]]},
    {"s":98.79,"e":100.69,"text":"chocolate was still only a drink.","words":[["chocolate",98.79],["was",99.43],["still",99.64],["only",99.99],["a",100.27],["drink",100.34]]},
    {"s":101.24,"e":102.1,"text":"Here's why.","words":[["heres",101.24],["why",101.78]]},
    {"s":102.65,"e":104.59,"text":"A cocoa bean is about half fat,","words":[["a",102.65],["cocoa",102.73],["bean",103.14],["is",103.46],["about",103.62],["half",104.03],["fat",104.35]]},
    {"s":104.89,"e":106.16,"text":"called cocoa butter.","words":[["called",104.89],["cocoa",105.34],["butter",105.71]]},
    {"s":106.71,"e":109.6,"text":"Grind the beans, and you get a thick, greasy paste.","words":[["grind",106.71],["the",107.08],["beans",107.3],["and",107.67],["you",107.89],["get",108.12],["a",108.34],["thick",108.41],["greasy",108.79],["paste",109.23]]},
    {"s":110.15,"e":111.53,"text":"In eighteen twenty eight,","words":[["in",110.15],["eighteen",110.28],["twenty",110.81],["eight",111.2]]},
    {"s":111.83,"e":114.07,"text":"a Dutch chemist named Coenraad van Houten","words":[["a",111.83],["dutch",111.89],["chemist",112.21],["named",112.66],["coenraad",112.98],["van",113.49],["houten",113.68]]},
    {"s":114.37,"e":117.15,"text":"built a press that squeezed out most of that butter.","words":[["built",114.37],["a",114.7],["press",114.76],["that",115.1],["squeezed",115.36],["out",115.89],["most",116.09],["of",116.35],["that",116.49],["butter",116.75]]},
    {"s":117.7,"e":119.61,"text":"What was left became a dry cake,","words":[["what",117.7],["was",118.01],["left",118.23],["became",118.54],["a",119.0],["dry",119.08],["cake",119.31]]},
    {"s":119.91,"e":122.03,"text":"that could be crushed into cocoa powder.","words":[["that",119.91],["could",120.17],["be",120.49],["crushed",120.62],["into",121.07],["cocoa",121.33],["powder",121.65]]},
    {"s":122.58,"e":124.41,"text":"Then in eighteen forty seven,","words":[["then",122.58],["in",122.89],["eighteen",123.04],["forty",123.65],["seven",124.03]]},
    {"s":124.71,"e":127.53,"text":"an English company called Fry's flipped the idea.","words":[["an",124.71],["english",124.85],["company",125.35],["called",125.84],["frys",126.26],["flipped",126.54],["the",127.04],["idea",127.25]]},
    {"s":128.08,"e":129.83,"text":"They mixed cocoa powder and sugar","words":[["they",128.08],["mixed",128.33],["cocoa",128.64],["powder",128.96],["and",129.33],["sugar",129.52]]},
    {"s":130.13,"e":132.17,"text":"with extra melted cocoa butter,","words":[["with",130.13],["extra",130.45],["melted",130.84],["cocoa",131.31],["butter",131.7]]},
    {"s":132.47,"e":133.96,"text":"and poured it into a mold.","words":[["and",132.47],["poured",132.69],["it",133.14],["into",133.29],["a",133.59],["mold",133.66]]},
    {"s":134.51,"e":135.45,"text":"It set hard.","words":[["it",134.51],["set",134.72],["hard",135.03]]},
    {"s":136.0,"e":137.99,"text":"The first modern chocolate bar.","words":[["the",136.0],["first",136.23],["modern",136.61],["chocolate",137.07],["bar",137.76]]},
    {"s":138.54,"e":140.54,"text":"It was still gritty, and a bit bitter.","words":[["it",138.54],["was",138.68],["still",138.88],["gritty",139.23],["and",139.64],["a",139.85],["bit",139.92],["bitter",140.13]]},
    {"s":141.09,"e":142.74,"text":"Two Swiss makers fixed that.","words":[["two",141.09],["swiss",141.31],["makers",141.66],["fixed",142.09],["that",142.45]]},
    {"s":143.29,"e":144.84,"text":"In eighteen seventy five,","words":[["in",143.29],["eighteen",143.44],["seventy",144.03],["five",144.55]]},
    {"s":145.14,"e":146.8,"text":"Daniel Peter added milk,","words":[["daniel",145.14],["peter",145.64],["added",146.05],["milk",146.47]]},
    {"s":147.1,"e":150.07,"text":"using milk powder from his neighbor, Henri Nestlé.","words":[["using",147.1],["milk",147.46],["powder",147.75],["from",148.19],["his",148.48],["neighbor",148.69],["henri",149.27],["nestlé",149.64]]},
    {"s":150.62,"e":152.19,"text":"Milk chocolate was born.","words":[["milk",150.62],["chocolate",150.94],["was",151.64],["born",151.88]]},
    {"s":152.74,"e":154.59,"text":"Then in eighteen seventy nine,","words":[["then",152.74],["in",153.04],["eighteen",153.19],["seventy",153.78],["nine",154.3]]},
    {"s":154.89,"e":157.53,"text":"Rodolphe Lindt built a machine called a conche.","words":[["rodolphe",154.89],["lindt",155.44],["built",155.77],["a",156.11],["machine",156.18],["called",156.65],["a",157.06],["conche",157.13]]},
    {"s":158.08,"e":161.04,"text":"It rolls warm chocolate back and forth for hours,","words":[["it",158.08],["rolls",158.23],["warm",158.6],["chocolate",158.9],["back",159.56],["and",159.86],["forth",160.08],["for",160.45],["hours",160.67]]},
    {"s":161.34,"e":163.6,"text":"grinding every bit smaller and smaller,","words":[["grinding",161.34],["every",161.89],["bit",162.23],["smaller",162.44],["and",162.91],["smaller",163.12]]},
    {"s":163.9,"e":165.61,"text":"until it turns silky smooth.","words":[["until",163.9],["it",164.27],["turns",164.42],["silky",164.79],["smooth",165.16]]},
    {"s":166.16,"e":167.46,"text":"So what happens today?","words":[["so",166.16],["what",166.3],["happens",166.59],["today",167.1]]},
    {"s":168.01,"e":169.58,"text":"Farmers cut open the pods","words":[["farmers",168.01],["cut",168.53],["open",168.76],["the",169.06],["pods",169.28]]},
    {"s":169.88,"e":172.07,"text":"and let the beans ferment for about a week.","words":[["and",169.88],["let",170.07],["the",170.27],["beans",170.46],["ferment",170.78],["for",171.23],["about",171.43],["a",171.75],["week",171.81]]},
    {"s":172.62,"e":175.25,"text":"That's where most of the chocolate flavor comes from.","words":[["thats",172.62],["where",172.93],["most",173.23],["of",173.48],["the",173.6],["chocolate",173.78],["flavor",174.34],["comes",174.7],["from",175.01]]},
    {"s":175.8,"e":178.39,"text":"Then the beans are dried, roasted, and cracked.","words":[["then",175.8],["the",176.08],["beans",176.29],["are",176.64],["dried",176.85],["roasted",177.2],["and",177.69],["cracked",177.9]]},
    {"s":178.94,"e":181.07,"text":"It takes around four hundred beans","words":[["it",178.94],["takes",179.09],["around",179.46],["four",179.9],["hundred",180.19],["beans",180.71]]},
    {"s":181.37,"e":182.96,"text":"to make one pound of chocolate.","words":[["to",181.37],["make",181.5],["one",181.75],["pound",181.94],["of",182.26],["chocolate",182.39]]},
    {"s":183.51,"e":185.21,"text":"And the best trick is in the butter.","words":[["and",183.51],["the",183.69],["best",183.87],["trick",184.12],["is",184.42],["in",184.54],["the",184.66],["butter",184.84]]},
    {"s":185.76,"e":189.39,"text":"Cocoa butter melts at about thirty four degrees Celsius,","words":[["cocoa",185.76],["butter",186.14],["melts",186.61],["at",186.99],["about",187.15],["thirty",187.53],["four",188.0],["degrees",188.3],["celsius",188.84]]},
    {"s":189.69,"e":192.04,"text":"just below the heat inside your mouth.","words":[["just",189.69],["below",189.99],["the",190.37],["heat",190.6],["inside",190.9],["your",191.36],["mouth",191.66]]},
    {"s":192.59,"e":194.87,"text":"That's why a bar stays solid in your hand,","words":[["thats",192.59],["why",192.95],["a",193.16],["bar",193.23],["stays",193.45],["solid",193.8],["in",194.16],["your",194.3],["hand",194.59]]},
    {"s":195.17,"e":196.49,"text":"but melts on your tongue.","words":[["but",195.17],["melts",195.37],["on",195.7],["your",195.83],["tongue",196.09]]},
    {"s":197.04,"e":198.99,"text":"From a bitter drink worth real money,","words":[["from",197.04],["a",197.3],["bitter",197.36],["drink",197.75],["worth",198.08],["real",198.4],["money",198.66]]},
    {"s":199.29,"e":200.93,"text":"to the bar in your lunchbox.","words":[["to",199.29],["the",199.44],["bar",199.66],["in",199.88],["your",200.03],["lunchbox",200.33]]},
    {"s":201.48,"e":203.94,"text":"So, would you rather have the drink, or the bar?","words":[["so",201.48],["would",201.61],["you",201.96],["rather",202.16],["have",202.57],["the",202.85],["drink",203.05],["or",203.39],["the",203.53],["bar",203.73]]},
    {"s":204.49,"e":208.03,"text":"Next time, how do tiny ants build an underground city","words":[["next",204.49],["time",204.82],["how",205.15],["do",205.4],["tiny",205.56],["ants",205.89],["build",206.22],["an",206.63],["underground",206.8],["city",207.7]]},
    {"s":208.33,"e":209.92,"text":"for millions of workers?","words":[["for",208.33],["millions",208.57],["of",209.21],["workers",209.36]]}
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
  Object.assign(C, { choc: '#6b3a22', chocD: '#4a2616', milk: '#a8653a', cocoa: '#c8732e', pod: '#d98a2b', podR: '#b8502a', pulp: '#f4eedf',
    bean: '#7a4630', trunk: '#7a5236', leafG: '#4f9a52', leafL: '#6bb865', pot: '#c9784a', potD: '#9a5432', stone: '#a49a8c', chili: '#d9473b',
    corn: '#f2c14e', water: '#7fd0e0', foam: '#e9d2b0', butter: '#f3d77a', gold: '#e8b33c', tomato: '#e5533d', avo: '#5e8f3a', avoIn: '#cfe39a',
    turkey: '#8a5a3a', turkeyR: '#d9473b', sea: '#3f86b8', ship: '#9a6a44', sail: '#f6efe3', cinna: '#a8592e', vanilla: '#3b2a1e',
    metal: '#9aa0a8', metalD: '#6e747c', milkW: '#f7f4ee', mtn: '#8fa4b8', snow: '#f4f6fb', banana: '#6aa84f', sun: '#f6c14e', tongue: '#ef8fa0', ant: '#a8472a', skin: '#e8a77c' });
  const ell = (c, x, y, rx, ry, a = 0) => { c.beginPath(); c.ellipse(x, y, rx, ry, a, 0, TAU); c.fill(); };
  const poly = (c, pts) => { c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.closePath(); c.fill(); };
  const SP2 = {
    bean: (n = 0, col = C.bean) => SP.shape('bean' + n + col, 46, 30, col, (c) => ell(c, 23, 15, 21, 13, 0.15 * ((n % 3) - 1)), { R: 7, seed: 600 + (n % 4), spec: 0.5, marks: [[8, 15, 38, 15, 1.0]], fps: [] }),
    pile: (n, k = '') => group('pile' + n + k, 260, 120, Array.from({ length: n }, (_, i) => { const r = H.rng(610 + i), row = Math.floor(Math.sqrt(i * 2)); const y = 90 - row * 14 + r.range(-4, 4), x = 130 + r.range(-1, 1) * (110 - row * 16); return [SP2.bean(i), x - 23, y - 15, 0.3]; }).sort((a, b) => a[2] - b[2])),
    pod: (col = C.pod) => SP.shape('pod' + col, 180, 96, col, (c) => ell(c, 90, 48, 88, 44), { R: 18, seed: 480, marks: [[20, 30, 160, 30, 1.6], [12, 50, 168, 50, 1.6], [20, 70, 160, 70, 1.6]], markW: 6 }),
    podV: (col = C.pod) => SP.shape('podV' + col, 70, 130, col, (c) => ell(c, 35, 65, 33, 63), { R: 14, seed: 481, marks: [[20, 10, 20, 120, 1.4], [35, 4, 35, 126, 1.4], [50, 10, 50, 120, 1.4]], markW: 5 }),
    podHalf: () => group('podHalf', 300, 150, [
      [SP.shape('phshell', 300, 150, C.podR, (c) => { c.beginPath(); c.ellipse(150, 40, 148, 108, 0, 0, Math.PI); c.fill(); }, { R: 16, seed: 482 }), 0, 0],
      [SP.shape('phpulp', 270, 120, C.pulp, (c) => { c.beginPath(); c.ellipse(135, 22, 128, 90, 0, 0, Math.PI); c.fill(); }, { R: 14, seed: 483, fps: [] }), 15, 18, 0.15],
    ]),
    trunk: () => SP.shape('trunk', 120, 470, C.trunk, (c) => { c.beginPath(); c.moveTo(30, 470); c.lineTo(40, 0); c.lineTo(85, 0); c.lineTo(95, 470); c.closePath(); c.fill(); }, { R: 14, seed: 484, marks: [[50, 40, 52, 200, 1.6], [70, 120, 72, 330, 1.6], [58, 260, 60, 440, 1.6]], markW: 6 }),
    canopy: (n = 0) => SP.shape('can' + n, 320, 170, n % 2 ? C.leafG : C.leafL, (c) => { const r = H.rng(485 + n); for (let i = 0; i < 6; i++) ell(c, 50 + i * 44, 90 + r.range(-30, 30), r.range(44, 64), r.range(40, 60)); }, { R: 16, seed: 485 + n, fps: [] }),
    leaf: (n = 0, col) => SP.shape('leaf' + n + (col || ''), 110, 56, col || (n % 2 ? C.leafG : C.leafL), (c) => { c.beginPath(); c.moveTo(0, 28); c.quadraticCurveTo(55, -16, 110, 28); c.quadraticCurveTo(55, 72, 0, 28); c.fill(); }, { R: 8, seed: 490 + (n % 4), marks: [[6, 28, 104, 28, 1.2]], fps: [] }),
    potJar: () => group('potJar', 200, 220, [
      [SP.shape('potb', 200, 190, C.pot, (c) => { ell(c, 100, 110, 96, 80); c.fillRect(55, 10, 90, 60); }, { R: 18, seed: 491, marks: [[20, 100, 180, 100, 1.6], [30, 130, 170, 130, 1.4]], markW: 6 }), 0, 30],
      [SP.rect('potlip', 120, 30, C.potD, 12, { R: 8, seed: 492, fps: [] }), 40, 20],
    ]),
    metate: () => group('metate', 300, 130, [
      [SP.shape('met', 300, 100, C.stone, (c) => poly(c, [[0, 30], [300, 10], [290, 60], [250, 100], [210, 70], [90, 76], [50, 100], [12, 70]]), { R: 14, seed: 493 }), 0, 30],
      [SP.rect('mano', 200, 34, '#8f867a', 17, { R: 12, seed: 494 }), 50, 0],
    ]),
    paste: () => SP.shape('paste', 160, 60, C.choc, (c) => { ell(c, 80, 36, 76, 24); ell(c, 60, 22, 30, 18); ell(c, 100, 24, 34, 20); }, { R: 12, seed: 495, spec: 0.6 }),
    chili: () => SP.shape('chili', 140, 50, C.chili, (c) => { c.lineCap = 'round'; c.lineWidth = 34; c.beginPath(); c.moveTo(22, 22); c.quadraticCurveTo(80, 10, 125, 40); c.stroke(); }, { R: 10, seed: 496, spec: 0.7, fps: [] }),
    corn: () => group('corn', 70, 160, [[SP.shape('cobk', 60, 150, C.corn, (c) => ell(c, 30, 75, 28, 72), { R: 10, seed: 497, marks: [[15, 10, 15, 140, 1.2], [30, 6, 30, 144, 1.2], [45, 10, 45, 140, 1.2], [6, 50, 54, 50, 1.0], [6, 90, 54, 90, 1.0]], markW: 3 }), 5, 0], [SP.shape('husk', 70, 90, C.leafL, (c) => poly(c, [[0, 0], [35, 90], [70, 0], [50, 60], [20, 60]]), { R: 8, seed: 498, fps: [] }), 0, 80]]),
    drop: (col = C.water, k = 'w') => SP.shape('drop' + k, 80, 110, col, (c) => { c.beginPath(); c.moveTo(40, 0); c.bezierCurveTo(52, 36, 80, 58, 80, 76); c.arc(40, 76, 40, 0, Math.PI); c.bezierCurveTo(0, 58, 28, 36, 40, 0); c.fill(); }, { R: 12, seed: 499, spec: 0.8 }),
    cup: (col = C.pot, k = 'a') => SP.shape('cup' + k, 130, 150, col, (c) => poly(c, [[0, 0], [130, 0], [112, 150], [18, 150]]), { R: 14, seed: 500, marks: [[10, 40, 120, 40, 1.4]] }),
    foam: () => SP.shape('foam', 170, 60, C.foam, (c) => { [[30, 36, 28], [70, 26, 34], [115, 30, 30], [148, 38, 22]].forEach(([x, y, r]) => { c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); }); }, { R: 12, seed: 501, fps: [] }),
    sugar: (n = 0) => SP.rect('sugar' + n, 44, 44, '#fbf6ea', 6, { R: 6, seed: 502 + n, spec: 0.6, fps: [] }),
    turkey: () => group('turkey', 260, 230, [
      ...[0, 1, 2, 3, 4].map((i) => [SP.shape('tf' + i, 70, 150, ['#c76b3c', '#8a5a3a', '#f2c14e', '#8a5a3a', '#c76b3c'][i], (c) => ell(c, 35, 75, 32, 72), { R: 10, seed: 503 + i, marks: [[35, 12, 35, 140, 1.2]], fps: [] }), 30 + i * 36, 0 + Math.abs(i - 2) * 16, 0.25]),
      [SP.shape('tbody', 180, 140, C.turkey, (c) => ell(c, 90, 70, 86, 66), { R: 18, seed: 510 }), 30, 80],
      [SP.ball(C.turkey, 30, 511, 0.4), 160, 50],
      [SP.ball(C.cream, 9, 512, 0.6), 178, 60, 0.2], [SP.ball(C.ink, 4, 513, 0.9), 184, 64, 0],
      [SP.shape('beak', 30, 20, C.yellow, (c) => poly(c, [[0, 0], [30, 10], [0, 20]]), { R: 4, seed: 514, fps: [] }), 214, 72, 0.2],
      [SP.shape('wattle', 20, 40, C.turkeyR, (c) => ell(c, 10, 20, 9, 19), { R: 5, seed: 515, fps: [] }), 206, 86, 0.2],
      [SP.rect('tleg', 12, 30, C.yellow, 5, { R: 4, seed: 516, fps: [] }), 100, 200], [SP.rect('tleg', 12, 30, C.yellow, 5, { R: 4, seed: 516, fps: [] }), 140, 200],
    ]),
    tomato: () => group('tomato', 110, 100, [[SP.ball(C.tomato, 50, 517, 0.6), 5, 0], [SP.shape('tstem', 50, 24, C.leafG, (c) => poly(c, [[0, 12], [25, 0], [50, 12], [25, 24]]), { R: 5, seed: 518, fps: [] }), 30, -6, 0.2]]),
    avocado: () => group('avocado', 130, 160, [[SP.shape('avo', 120, 160, C.avo, (c) => { ell(c, 60, 100, 56, 58); ell(c, 60, 50, 38, 46); }, { R: 16, seed: 519 }), 5, 0], [SP.shape('avoin', 90, 120, C.avoIn, (c) => { ell(c, 45, 74, 40, 42); ell(c, 45, 36, 26, 32); }, { R: 10, seed: 520, fps: [] }), 20, 20, 0.15], [SP.ball(C.wood, 22, 521, 0.5), 43, 74, 0.2]]),
    shell: () => SP.shape('bshell', 60, 40, C.bean, (c) => { c.lineWidth = 9; c.beginPath(); c.ellipse(30, 20, 26, 16, 0, 0, TAU); c.stroke(); }, { R: 5, seed: 522, fps: [] }),
    mud: () => SP.shape('mud', 60, 46, '#6e5a44', (c) => ell(c, 30, 23, 28, 20), { R: 9, seed: 523, lump: 2 }),
    ship: () => group('ship', 360, 330, [
      [SP.rect('mast', 18, 260, C.wood, 6, { R: 6, seed: 524, fps: [] }), 170, 0],
      [SP.shape('sail1', 150, 170, C.sail, (c) => poly(c, [[0, 0], [150, 10], [140, 170], [8, 160]]), { R: 10, seed: 525, marks: [[10, 80, 140, 84, 1.2]] }), 25, 30],
      [SP.shape('sail2', 120, 140, C.sail, (c) => poly(c, [[0, 10], [120, 0], [112, 140], [6, 130]]), { R: 10, seed: 526 }), 192, 50],
      [SP.shape('hull', 360, 100, C.ship, (c) => poly(c, [[0, 10], [360, 0], [300, 100], [50, 100]]), { R: 14, seed: 527, marks: [[20, 40, 340, 36, 1.6]], markW: 6 }), 0, 230],
    ]),
    wave: (n = 0) => SP.shape('wave' + n, 1400, 90, n ? '#5fa7d6' : C.sea, (c) => { c.beginPath(); c.moveTo(0, 90); for (let x = 0; x <= 1400; x += 20) c.lineTo(x, 30 + Math.sin(x * 0.02 + n * 2) * 18); c.lineTo(1400, 90); c.closePath(); c.fill(); }, { R: 12, seed: 528 + n, fps: [] }),
    sack: () => SP.shape('sack', 110, 120, '#c9a26a', (c) => { ell(c, 55, 72, 52, 48); poly(c, [[30, 30], [80, 30], [70, 0], [40, 0]]); }, { R: 14, seed: 530, marks: [[30, 34, 80, 34, 1.4]] }),
    cinna: () => SP.rect('cinna', 160, 26, C.cinna, 12, { R: 8, seed: 531, marks: [[10, 13, 150, 13, 1.4]], fps: [] }),
    vanilla: () => SP.shape('vanilla', 190, 30, C.vanilla, (c) => { c.lineCap = 'round'; c.lineWidth = 16; c.beginPath(); c.moveTo(10, 20); c.quadraticCurveTo(95, 4, 180, 16); c.stroke(); }, { R: 6, seed: 532, fps: [] }),
    heart: (s = 1) => SP.shape('heart' + s, 100 * s, 90 * s, C.red, (c) => { const w = 100 * s, h = 90 * s; ell(c, w * 0.3, h * 0.33, w * 0.28, h * 0.3); ell(c, w * 0.7, h * 0.33, w * 0.28, h * 0.3); c.beginPath(); c.moveTo(w * 0.04, h * 0.42); c.lineTo(w * 0.5, h * 0.98); c.lineTo(w * 0.96, h * 0.42); c.closePath(); c.fill(); }, { R: 12 * s, seed: 533, spec: 0.5 }),
    house: () => group('house', 440, 380, [
      [SP.rect('hwall', 400, 300, '#c76b3c', 10, { R: 12, seed: 534, marks: [[0, 60, 400, 60, 1.0], [0, 120, 400, 120, 1.0], [0, 180, 400, 180, 1.0], [0, 240, 400, 240, 1.0]], markW: 4 }), 20, 80],
      [SP.shape('hroof', 440, 100, '#5a3a26', (c) => poly(c, [[0, 100], [220, 0], [440, 100]]), { R: 12, seed: 535 }), 0, 0],
      [SP.rect('hdoor', 90, 140, C.wood, 30, { R: 10, seed: 536 }), 175, 240, 0.3],
      [SP.rect('hwin', 80, 70, C.yellow, 8, { R: 8, seed: 537, spec: 0.7, fps: [] }), 50, 150, 0.3], [SP.rect('hwin', 80, 70, C.yellow, 8, { R: 8, seed: 537, spec: 0.7, fps: [] }), 310, 150, 0.3],
      [SP.rect('hsign', 260, 50, C.cream, 10, { R: 8, seed: 538, fps: [] }), 90, 92, 0.3],
    ]),
    steam: (b = 0) => SP.shape('steam' + b, 40, 90, '#efe8de', (c) => { c.lineCap = 'round'; c.lineWidth = 12; c.beginPath(); for (let i = 0; i <= 10; i++) { const y = 84 - i * 8, x = 20 + Math.sin(i * 0.9 + b * 2) * 10; i ? c.lineTo(x, y) : c.moveTo(x, y); } c.stroke(); }, { R: 6, seed: 539 + b, fps: [] }),
    beanBig: () => group('beanBig', 420, 260, [
      [SP.shape('bbig', 420, 260, C.bean, (c) => ell(c, 210, 130, 206, 124), { R: 24, seed: 540, marks: [[40, 130, 380, 130, 2.0]], markW: 6 }), 0, 0],
      [SP.shape('bfat', 180, 200, C.butter, (c) => { c.beginPath(); c.moveTo(0, 0); c.ellipse(0, 100, 176, 100, 0, -Math.PI / 2, Math.PI / 2); c.closePath(); c.fill(); }, { R: 14, seed: 541, fps: [] }), 214, 30, 0],
    ]),
    press: () => group('press', 300, 420, [
      [SP.rect('pbase', 300, 50, C.metalD, 10, { R: 10, seed: 542 }), 0, 370],
      [SP.rect('ppost', 34, 380, C.metal, 10, { R: 8, seed: 543, fps: [] }), 10, 0], [SP.rect('ppost', 34, 380, C.metal, 10, { R: 8, seed: 543, fps: [] }), 256, 0],
      [SP.rect('ptop', 300, 50, C.metalD, 10, { R: 10, seed: 544 }), 0, 0],
      [SP.rect('pscrew', 28, 120, '#c9b26a', 8, { R: 6, seed: 545, marks: [[0, 20, 28, 30, 1.2], [0, 50, 28, 60, 1.2], [0, 80, 28, 90, 1.2]], markW: 3, fps: [] }), 136, -60],
      [SP.rect('pwheel', 160, 22, C.red, 10, { R: 7, seed: 546, fps: [] }), 70, -70],
    ]),
    plate: () => SP.rect('pplate', 220, 30, C.metal, 8, { R: 8, seed: 547, fps: [] }),
    cake: () => SP.rect('ccake', 200, 70, C.cocoa, 18, { R: 12, seed: 548, lump: 1.6 }),
    powder: () => SP.shape('powder', 260, 110, '#9a5a32', (c) => { c.beginPath(); c.moveTo(0, 110); c.quadraticCurveTo(130, -40, 260, 110); c.closePath(); c.fill(); }, { R: 16, seed: 549, lump: 2.4 }),
    bowl: () => SP.shape('bowl', 300, 150, C.cream, (c) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(300, 0); c.quadraticCurveTo(290, 150, 150, 150); c.quadraticCurveTo(10, 150, 0, 0); c.fill(); }, { R: 16, seed: 550, marks: [[20, 30, 280, 30, 1.4]] }),
    mold: () => SP.rect('mold', 340, 90, '#9aa0a8', 14, { R: 12, seed: 551, marks: [[30, 20, 310, 20, 1.6], [30, 70, 310, 70, 1.6], [30, 20, 30, 70, 1.6], [310, 20, 310, 70, 1.6]], markW: 5 }),
    bar: (col = C.choc, k = 'd') => SP.rect('bar' + k, 280, 130, col, 12, { R: 10, seed: 552, marks: [[93, 6, 93, 124, 1.8], [186, 6, 186, 124, 1.8], [6, 65, 274, 65, 1.8]], markW: 6 }),
    bottle: () => group('bottle', 110, 230, [[SP.shape('bot', 110, 200, C.milkW, (c) => { c.beginPath(); c.roundRect(5, 70, 100, 130, 20); c.fill(); c.fillRect(30, 0, 50, 90); }, { R: 14, seed: 553, spec: 0.5 }), 0, 30], [SP.rect('cap', 56, 30, C.blue, 8, { R: 6, seed: 554, fps: [] }), 27, 14, 0.2], [SP.rect('blab', 90, 50, C.blue, 10, { R: 6, seed: 555, fps: [] }), 10, 140, 0.2]]),
    mountain: (n = 0, w = 520, h = 300) => group('mtn' + n, w, h, [[SP.shape('mtnb' + n, w, h, n ? '#7f95aa' : C.mtn, (c) => poly(c, [[0, h], [w * 0.5, 0], [w, h]]), { R: 16, seed: 556 + n }), 0, 0], [SP.shape('mtns' + n, w * 0.3, h * 0.28, C.snow, (c) => poly(c, [[0, h * 0.28], [w * 0.15, 0], [w * 0.3, h * 0.28], [w * 0.2, h * 0.2], [w * 0.1, h * 0.24]]), { R: 8, seed: 558 + n, fps: [] }), w * 0.35, 0, 0.1]]),
    trough: () => SP.shape('trough', 520, 140, '#d8cfbf', (c) => { c.beginPath(); c.roundRect(0, 0, 520, 140, 40); c.fill(); }, { R: 16, seed: 560, marks: [[30, 30, 490, 30, 1.6]] }),
    choco: () => SP.shape('chocpool', 460, 60, C.milk, (c) => ell(c, 230, 30, 226, 26), { R: 12, seed: 561, spec: 0.8, fps: [] }),
    roller: () => SP.rect('roller', 70, 150, '#c9b26a', 30, { R: 14, seed: 562, marks: [[10, 20, 60, 20, 1.2], [10, 130, 60, 130, 1.2]] }),
    box: () => SP.rect('fbox', 420, 150, C.wood, 12, { R: 14, seed: 563, marks: [[0, 50, 420, 50, 1.4], [0, 100, 420, 100, 1.4]], markW: 5 }),
    banana: (n = 0) => SP.shape('banana' + n, 300, 70, C.banana, (c) => { c.beginPath(); c.moveTo(0, 50); c.quadraticCurveTo(150, -30, 300, 40); c.quadraticCurveTo(150, 90, 0, 50); c.fill(); }, { R: 10, seed: 564 + n, marks: [[10, 46, 290, 40, 1.4]], fps: [] }),
    knife: () => group('knife', 220, 50, [[SP.rect('kblade', 150, 34, C.metal, 14, { R: 8, seed: 566, spec: 0.8, fps: [] }), 0, 8], [SP.rect('khand', 80, 30, C.wood, 12, { R: 8, seed: 567, fps: [] }), 140, 10]]),
    sunB: () => SP.ball(C.sun, 60, 568, 0.5),
    flame: (b = 0) => SP.shape('flame' + b, 90, 130, '#f07b3a', (c) => { const j = [0, 8, -6][b]; c.beginPath(); c.moveTo(45 + j, 0); c.bezierCurveTo(86, 54, 90, 84, 45, 130); c.bezierCurveTo(0, 84, 4, 54, 45 + j, 0); c.fill(); }, { R: 12, seed: 569 + b, boil: b, spec: 0.5 }),
    nibs: () => group('nibs', 160, 70, [0, 1, 2, 3, 4, 5].map((i) => [SP.shape('nib' + i, 40, 30, C.bean, (c) => poly(c, [[0, 10], [18, 0], [40, 14], [30, 30], [6, 28]].map(([x, y]) => [x, (y + i * 3) % 30])), { R: 5, seed: 570 + i, fps: [] }), 10 + (i % 3) * 48, i < 3 ? 34 : 4, 0.3])),
    tube: () => SP.rect('ttube', 46, 320, C.cream, 22, { R: 12, seed: 574 }),
    tfill: (h) => SP.rect('tfill' + h, 20, Math.max(10, h), C.red, 10, { R: 7, seed: 575, fps: [] }),
    bulb: () => SP.ball(C.red, 42, 576, 0.6),
    hand: () => group('hand', 220, 180, [[SP.shape('palm', 220, 140, C.skin, (c) => { c.beginPath(); c.roundRect(0, 30, 200, 110, 40); c.fill(); }, { R: 16, seed: 577 }), 0, 40], [SP.shape('thumb', 70, 110, C.skin, (c) => ell(c, 35, 55, 30, 52, 0.5), { R: 12, seed: 578 }), 160, 0]]),
    tongue: () => SP.shape('tongue', 300, 160, C.tongue, (c) => { c.beginPath(); c.moveTo(0, 20); c.quadraticCurveTo(150, -10, 300, 20); c.quadraticCurveTo(300, 160, 150, 160); c.quadraticCurveTo(0, 160, 0, 20); c.fill(); }, { R: 18, seed: 579, spec: 0.6, marks: [[150, 30, 150, 130, 1.8]], markW: 6 }),
    melt: (n = 0) => SP.shape('melt' + n, 120, 70, C.choc, (c) => { ell(c, 60, 34, 56, 26); ell(c, 30 + n * 10, 50, 16, 20); ell(c, 88 - n * 8, 54, 12, 16); }, { R: 12, seed: 580 + n, spec: 0.8, fps: [] }),
    ant: (n = 0) => group('ant' + n, 150, 80, [
      [SP.ball(C.ant, 22, 582, 0.5), 0, 30], [SP.ball(C.ant, 16, 583, 0.5), 46, 36], [SP.ball(C.ant, 20, 584, 0.5), 80, 28],
      ...[0, 1, 2].map((i) => [SP.shape('aleg' + i + n, 20, 40, '#6e2a18', (c) => { c.lineWidth = 6; c.lineCap = 'round'; c.beginPath(); c.moveTo(10, 0); c.lineTo(i % 2 ? 2 : 18, 38); c.stroke(); }, { R: 3, seed: 585 + i, fps: [] }), 30 + i * 22, 58, 0.2]),
      [SP.ball(C.cream, 6, 588, 0.6), 110, 34, 0.1], [SP.ball(C.ink, 3, 589, 0.9), 114, 38, 0],
    ]),
  };
  const mug = (x, y, st, en, o = {}) => obj(SP2.cup(o.col || C.pot, o.k || 'a'), x, y, st, en, { ct: [70, 8], seed: o.seed || 3, ...o });
  // a counter of pressed clay numbers: vals[k] shows from times[k]
  const counter = (vals, times, cx, y, px, en, cols = C.yellow) => {
    if (REC) { vals.forEach((v, k) => wordC(v, cx, y, px, times[k], null, 'fall', cols, 1 / 24)); if (en != null) rec({ k: 'exit', t: en, mode: 'fall', x: cx, n: 1 }); return; }
    let k = -1; times.forEach((t, i) => { if (TQ + 1e-6 >= t) k = i; });
    if (k >= 0) wordC(vals[k], cx, y, px, times[k], en, 'fall', cols, 1 / 24);
  };
  const thermo = (x, baseY, st, en, level) => {
    obj(SP2.tube(), x, baseY - 330, st, en, { seed: 1 });
    const h = Math.round(level / 10) * 10;
    if (h > 0) obj(SP2.tfill(h), x + 13, baseY - 20 - h, st, en, { seed: 2, shadow: false });
    obj(SP2.bulb(), x - 19, baseY - 66, st, en, { seed: 3 });
  };

  // ======================= CHAPTER 0: the hook =======================
  // 1. a turkey on one side of the table, a pile of 100 beans on the other: "= 100 beans"
  scene(0, 'hook', () => {
    set('hook', '#6c5a8e', '#d6b07a');
    obj(SP2.turkey(), 820, TOP - 230, at(0, 'turkey'), X, { ct: [110, 10], seed: 1, big: true });
    const n = Math.min(40, Math.max(0, Math.floor((TQ - at(0, 'hundred')) * 40)));
    if (TQ >= at(0, 'hundred')) obj(SP2.pile(Math.max(1, Math.round(n / 4) * 4), 'h' + Math.round(n / 4)), 120, TOP - 130, at(0, 'hundred'), X, { ct: [150, 8], seed: 2, sx: 1.3, sy: 1.3, shadow: { blur: 6, dx: 3, dy: 4, a: 0.3 } });
    word('=', 570, 440, 200, at(0, 'with'), X, 'fall', C.cream, 1 / 12);
    counter(['10', '50', '100'], [at(0, 'hundred'), at(0, 'cocoa') - 0.1, at(0, 'beans')], 290, 170, 150, X, C.yellow);
    word('BEANS', 200, 250, 64, at(0, 'beans'), X, 'fall', C.cocoa, 1 / 24, 0, 'stamp');
  });
  // 2. money? a gold coin pops on and turns into a bean; then a bar lands in a hand
  scene(PS(1) - 0.15, 'money', () => {
    set('money', '#3f6f5a', '#c99b6a', { glow: 0.24 });
    const flip = at(1, 'money') + 0.3;
    if (TQ < flip) obj(SP.ball(C.gold, 80, 590, 0.8), 240, 200, at(1, 'money'), null, { seed: 1, hit: 'ding' });
    else obj(SP2.bean(0), 210, 240, flip, X, { seed: 1, sx: 3.4, sy: 3.4 });
    wordC('MONEY?', 330, 140, 96, at(1, 'money'), X, 'fall', [C.gold, C.yellow], 1 / 24);
    obj(SP2.hand(), 760, TOP - 150, at(2, 'hand') - 0.25, X, { ct: [110, 10], seed: 2 });
    obj(SP2.bar(), 760, TOP - 270, at(2, 'hand'), X, { seed: 3, rot: -0.12, sx: 0.8, sy: 0.8, hit: 'pop' });
    word('your hand', 790, 620, 52, at(2, 'your'), X, 'fall', C.cream, 1 / 24);
  });
  // 3. title card: THE STORY OF CHOCOLATE (pod + bar)
  scene(PS(3) - 0.15, 'title', () => {
    set('title', '#7a4f2f', '#d6b07a', { glow: 0.3 });
    wordC('THE STORY OF', 640, 170, 72, at(3, 'story'), X, 'fall', C.cream, 1 / 24);
    wordC('CHOCOLATE', 640, 320, 150, at(3, 'chocolate'), X, 'fall', [C.choc, C.milk, C.cocoa], 1 / 24, 0, 'impact');
    obj(SP2.pod(), 170, TOP - 96, at(3, 'this'), X, { ct: [90, 10], seed: 1 });
    obj(SP2.bar(), 870, TOP - 130, at(3, 'chocolate') + 0.25, X, { ct: [130, 10], seed: 2, sx: 0.9, sy: 0.9 });
  });

  // ======================= CHAPTER 1: a bitter drink =======================
  // 4. the cacao tree in the rainforest: pods grow right on its trunk (camera tilts down the trunk)
  scene(PS(4) - 0.15, 'tree', () => {
    set('jungle', '#2f5a3e', '#6b4a2a', { glow: 0.18, light: [520, 120] });
    const z = 1 + step6(at(6, 'trunk'), 1.0, 6) * 0.22;
    cam(z, 560, 420, () => {
      obj(SP2.canopy(1), 60, 20, at(4, 'rainforest') + 0.15, X, { seed: 5, minor: true });
      obj(SP2.canopy(0), 900, 40, at(4, 'rainforest') + 0.25, X, { seed: 6, minor: true });
      obj(SP2.trunk(), 500, TOP - 470, at(4, 'tree'), X, { ct: [80, 10], seed: 1, big: true });
      obj(SP2.canopy(0), 380, -40, at(4, 'tree') + 0.1, X, { seed: 2 });
      [[455, 200, -0.2], [590, 250, 0.2], [460, 330, -0.15], [600, 380, 0.15]].forEach(([x, y, r], i) => obj(SP2.podV(i % 2 ? C.pod : C.podR), x, y, at(5, 'pods') + i / 8, X, { seed: 10 + i, rot: r, hit: i ? null : 'pop' }));
    });
    word('cacao tree', 60, 640, 64, at(5, 'cacao'), X, 'fall', [C.cream, C.yellow], 1 / 24);
    word('pods grow on the trunk!', 690, 640, 50, at(6, 'trunk'), X, 'fall', C.cream, 1 / 24);
  });
  // 5. a pod split open: 30-50 seeds in sweet white pulp = cocoa beans
  scene(PS(7) - 0.15, 'pod', () => {
    set('pod', '#e7c9a0', '#c08a6a', { glow: 0.22 });
    obj(SP2.podHalf(), 140, TOP - 170, at(7, 'pod'), X, { ct: [150, 12], seed: 1, sx: 1.2, sy: 1.2 });
    const t0 = at(7, 'thirty');
    for (let i = 0; i < 12; i++) { const r = H.rng(700 + i), x = 200 + (i % 6) * 44 + r.range(-6, 6), y = TOP - 150 + Math.floor(i / 6) * 34 + r.range(-4, 4); obj(SP2.bean(i, '#ece2cc'), x, y, t0 + i / 24, X, { seed: i, minor: true, shadow: { blur: 3, dx: 2, dy: 2, a: 0.25 } }); }
    counter(['30', '50'], [at(7, 'thirty'), at(7, 'fifty')], 900, 300, 150, X, C.yellow);
    word('seeds', 980, 300, 64, at(7, 'seeds'), X, 'fall', C.cream, 1 / 24);
    word('sweet white pulp', 90, 150, 60, at(8, 'sweet'), X, 'fall', [C.pulp, C.cream], 1 / 24);
    if (TQ >= at(9, 'cocoa')) [0, 1, 2].forEach((i) => obj(SP2.bean(i), 760 + i * 120, TOP - 60, at(9, 'cocoa') + i / 12, X, { seed: i, sx: 2, sy: 2, ct: [40, 6] }));
    wordC('= cocoa beans', 900, 420, 64, at(9, 'beans'), X, 'fall', [C.cocoa, C.cream], 1 / 24, 0, 'stamp');
  });
  // 6. traces in 5,300-year-old pots from the Amazon in Ecuador
  scene(PS(10) - 0.15, 'pots', () => {
    set('dig', '#b9824f', '#8a5a3a', { glow: 0.2 });
    obj(SP2.potJar(), 160, TOP - 220, at(10, 'pots'), X, { ct: [100, 10], seed: 1 });
    obj(SP2.potJar(), 380, TOP - 200, at(10, 'pots') + 0.15, X, { ct: [100, 10], seed: 2, sx: 0.85, sy: 0.85 });
    word('traces!', 140, 160, 70, at(10, 'traces'), X, 'fall', C.cream, 1 / 24, 0, 'ding');
    word('Amazon, Ecuador', 650, 160, 60, at(11, 'amazon'), X, 'fall', [C.green, C.cream], 1 / 24);
    counter(['5,000', '5,300'], [at(12, 'five'), at(12, 'three')], 900, 380, 150, X, C.yellow);
    wordC('YEARS OLD', 900, 470, 64, at(12, 'years'), X, 'fall', C.cream, 1 / 24, 0, 'impact');
  });
  // 7. the Olmec and the Maya: roast, grind on a stone, mix with water, chili and cornmeal
  scene(PS(13) - 0.15, 'maya', () => {
    set('maya', '#4f9fae', '#c76b3c', { glow: 0.22 });
    word('Olmec', 80, 150, 76, at(13, 'olmec'), X, 'fall', C.yellow, 1 / 24);
    word('& Maya', 340, 150, 76, at(13, 'maya'), X, 'fall', C.coral, 1 / 24);
    word('= a drink', 700, 150, 76, at(14, 'drink'), at(15, 'roasted') - 0.1, 'fall', C.cream, 1 / 24);
    obj(SP2.metate(), 150, TOP - 130, at(15, 'ground') - 0.2, X, { ct: [140, 10], seed: 1 });
    obj(SP2.paste(), 220, TOP - 150, at(15, 'paste'), X, { seed: 2 });
    const st = at(15, 'roasted');
    [0, 1, 2].forEach((i) => obj(SP2.bean(i, '#5a2e1c'), 760 + i * 70, 220, st + i / 12, X, { seed: i, minor: true, sx: 1.5, sy: 1.5 }));
    if (TQ >= st && TQ < at(15, 'ground')) obj(SP2.flame((FRN >> 1) % 3), 820, 270, st, null, { seed: 4, shadow: false, sx: 0.7, sy: 0.7, minor: true });
    word('roast', 760, 390, 50, st, X, 'fall', C.cream, 1 / 24);
    word('grind', 200, 620, 50, at(15, 'ground'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.drop(), 640, TOP - 110, at(16, 'water'), X, { ct: [40, 8], seed: 5 });
    obj(SP2.chili(), 760, TOP - 50, at(16, 'chili'), X, { ct: [60, 8], seed: 6, hit: 'pop' });
    obj(SP2.corn(), 960, TOP - 160, at(16, 'cornmeal'), X, { ct: [40, 8], seed: 7, rot: 0.2 });
  });
  // 8. poured from high up, cup to cup, to whip a thick foam
  scene(PS(17) - 0.15, 'pour', () => {
    set('pour', '#7a4f7f', '#d6b07a');
    obj(SP2.cup(C.pot, 'hi'), 700, 80, at(17, 'poured'), X, { seed: 1, rot: -1.0 });
    obj(SP2.cup(C.potD, 'lo'), 470, TOP - 150, at(18, 'cup') - 0.2, X, { seed: 2, ct: [70, 8] });
    if (TQ >= at(17, 'high')) { const len = Math.round(step6(at(17, 'high'), 0.5, 6) * 6) / 6; coil('stream' + len, [[598, 212], [572, 250], [552, 250 + len * 105]], C.choc, at(17, 'high'), X, { head: false, wdt: 20 }); }
    if (TQ >= at(19, 'foam')) { const g = step6(at(19, 'foam'), 0.6, 3); obj(SP2.foam(), 450, TOP - 175 - g * 20, at(19, 'foam'), X, { seed: 3, sx: 0.8 + g * 0.3, sy: 0.8 + g * 0.4 }); }
    word('from high up', 840, 380, 60, at(17, 'high'), X, 'fall', C.cream, 1 / 24);
    word('FOAM!', 820, 500, 110, at(19, 'foam'), X, 'fall', [C.foam, C.cream], 1 / 24, 0, 'stamp');
  });
  // 9. but it wasn't sweet: bitter, spicy, special
  scene(PS(20) - 0.15, 'bitter', () => {
    set('bitter', '#d0703f', '#8a5a3a', { glow: 0.24 });
    mug(160, TOP - 150, PS(20), X, { seed: 1 });
    obj(SP2.foam(), 140, TOP - 175, PS(20) + 0.08, X, { seed: 2, sx: 0.85, sy: 0.85 });
    obj(SP2.sugar(0), 470, 250, at(21, 'sweet') - 0.1, X, { seed: 3, sx: 2.2, sy: 2.2 });
    obj(SP.xmark(), 450, 230, at(21, 'all'), X, { seed: 4, hit: 'slap', big: true });
    word('not sweet', 420, 450, 56, at(21, 'sweet'), X, 'fall', C.cream, 1 / 24);
    word('bitter', 830, 180, 80, at(22, 'bitter'), X, 'fall', C.cocoa, 1 / 24);
    word('spicy', 860, 300, 80, at(22, 'spicy'), X, 'fall', C.chili, 1 / 24);
    obj(SP2.chili(), 1030, 330, at(22, 'spicy') + 0.15, X, { seed: 5, rot: -0.4, minor: true });
    word('special', 840, 420, 80, at(22, 'special'), X, 'fall', [C.yellow, C.gold], 1 / 24, 0, 'ding');
  });

  // ======================= CHAPTER 2: money that grew on trees =======================
  // 10. the Aztecs used the beans as money: beans drop into a coin purse / onto a stack, "MONEY"
  scene(PS(23) - 0.15, 'aztec', () => {
    set('aztec', '#2e6e74', '#e0a040', { glow: 0.22 });
    wordC('AZTECS', 640, 150, 110, at(23, 'aztecs'), X, 'fall', [C.yellow, C.coral, C.green], 1 / 24);
    obj(SP2.heart(1.1), 580, 200, at(23, 'loved'), at(24, 'used') - 0.1, { seed: 1, mode: 'up' });
    const st = at(24, 'beans');
    for (let i = 0; i < 6; i++) obj(SP2.bean(i), 230 + i * 140, TOP - 64, st + i / 12, X, { seed: i, sx: 2.2, sy: 2.2, ct: [40, 6], minor: i > 0 });
    wordC('= MONEY', 640, 330, 120, at(24, 'money'), X, 'fall', [C.gold, C.yellow], 1 / 24, 0, 'impact');
  });
  // 11. a price list from the 1500s: tomato 1, avocado 3, turkey hen 100 (market table, camera slides right)
  scene(PS(25) - 0.15, 'prices', () => {
    set('market', '#c76b3c', '#d6b07a', { glow: 0.25 });
    word('1500s price list', 70, 130, 64, at(25, 'record'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.tomato(), 120, TOP - 100, at(26, 'tomato'), X, { ct: [50, 8], seed: 1, sx: 1.3, sy: 1.3 });
    word('1', 130, 300, 120, at(26, 'one'), X, 'fall', C.yellow, 1 / 12);
    obj(SP2.bean(0), 230, 220, at(26, 'bean'), X, { seed: 2, sx: 1.6, sy: 1.6 });
    obj(SP2.avocado(), 440, TOP - 160, at(27, 'avocado'), X, { ct: [60, 8], seed: 3 });
    word('3', 460, 300, 120, at(27, 'three'), X, 'fall', C.yellow, 1 / 12);
    [0, 1, 2].forEach((i) => obj(SP2.bean(i), 540 + i * 50, 220, at(27, 'beans') + i / 12, X, { seed: 4 + i, minor: true }));
    obj(SP2.turkey(), 820, TOP - 230, at(28, 'turkey'), X, { ct: [110, 10], seed: 7, big: true });
    word('100', 880, 250, 150, at(28, 'hundred'), X, 'fall', C.yellow, 1 / 12, 0, 'impact');
    word('beans', 930, 330, 52, at(28, 'hundred') + 0.15, X, 'fall', C.cocoa, 1 / 24);
  });
  // 12. fake beans: an empty shell stuffed with mud. FAKE!
  scene(PS(29) - 0.15, 'fake', () => {
    set('fake', '#5c6f7d', '#a9b8c4', { glow: 0.18 });
    word('fake beans', 80, 150, 84, at(29, 'fake'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.shell(), 280, TOP - 140, at(30, 'empty'), X, { seed: 1, sx: 3, sy: 3 });
    word('empty shell', 170, 470, 48, at(30, 'shells'), X, 'fall', C.cream, 1 / 24);
    const sq = at(30, 'mud');
    const u = step6(sq, 0.5, 4);
    obj(SP2.mud(), 600 - u * 290, 260 + u * 80, sq - 0.3, X, { seed: 2, sx: 2.2 - u * 0.6, sy: 2.2 - u * 0.8 });
    word('+ mud', 620, 230, 70, sq - 0.25, X, 'fall', '#b59a7a', 1 / 24);
    obj(SP.xmark(), 900, 230, sq + 0.6, X, { seed: 3, hit: 'slap', big: true });
    word('FAKE!', 860, 470, 110, sq + 0.6, X, 'fall', C.red, 1 / 12, 0, 'stamp');
  });

  // ======================= CHAPTER 3: Europe adds sugar =======================
  // 13. 1500s: Spanish ship slides across the ocean with sacks of cacao
  scene(PS(31) - 0.15, 'ship', () => {
    set('sea', '#7fb0d0', '#3f86b8', { glow: 0.3, ty: 470 });
    word('1500s', 70, 140, 110, at(31, 'fifteen'), X, 'fall', C.yellow, 1 / 24, 0, 'stamp');
    const u = Math.round(H.clamp((TQ - at(32, 'carried')) / 4.2) * 24) / 24;
    const bob = Math.round(Math.sin(TQ * 3) * 3) * 2;
    obj(SP2.ship(), 80 + u * 640, 170 + bob, at(32, 'spanish'), X, { seed: 1, big: true, mode: 'right' });
    if (TQ >= at(32, 'cacao')) [0, 1].forEach((i) => obj(SP2.sack(), 100 + u * 640 + i * 230, 318 + bob, at(32, 'cacao') + i / 12, X, { seed: 2 + i, sx: 0.7, sy: 0.7, mode: 'right' }));
    obj(SP2.wave(1), -40 + Math.round(Math.sin(TQ * 1.5) * 4) * 5, 440, PS(31), X, { seed: 4, shadow: false, minor: true });
    obj(SP2.wave(0), -60 - Math.round(Math.sin(TQ * 1.5) * 4) * 5, 500, PS(31) + 0.05, X, { seed: 5, shadow: false, minor: true });
    word('across the ocean', 600, 140, 56, at(32, 'ocean'), X, 'fall', C.cream, 1 / 24);
  });
  // 14. the Spanish court adds sugar, cinnamon and vanilla to the cup; Europe is hooked
  scene(PS(33) - 0.15, 'sugar', () => {
    set('court', '#8e3a4c', '#d6b07a', { glow: 0.3 });
    word('Spanish court', 70, 140, 64, at(33, 'court'), X, 'fall', [C.gold, C.cream], 1 / 24);
    mug(530, TOP - 150, at(33, 'bitter'), X, { seed: 1, col: C.gold, k: 'g' });
    word('something new...', 70, 220, 50, at(34, 'new'), at(35, 'added'), 'fall', C.cream, 1 / 24);
    const drop = (spr, x, t0, i) => { if (TQ < t0) return; const u = Math.round(H.clamp((TQ - t0) / 0.5) * 6) / 6; if (u < 1) obj(spr, x, 60 + u * 250, t0, null, { seed: 10 + i, rot: u * 2 * (i % 2 ? 1 : -1) }); };
    [0, 1, 2].forEach((i) => drop(SP2.sugar(i), 560 + i * 30, at(35, 'sugar') + i * 0.18, i));
    drop(SP2.cinna(), 520, at(36, 'cinnamon'), 3);
    drop(SP2.vanilla(), 500, at(36, 'vanilla'), 4);
    word('SUGAR', 820, 220, 100, at(35, 'sugar'), X, 'fall', [C.cream, C.yellow], 1 / 24, 0, 'stamp');
    word('+ cinnamon', 830, 310, 52, at(36, 'cinnamon'), X, 'fall', C.cinna, 1 / 24);
    word('+ vanilla', 830, 380, 52, at(36, 'vanilla'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.heart(0.8), 140, TOP - 140, at(37, 'hooked'), X, { seed: 5, hit: 'ding' });
    obj(SP2.heart(0.6), 270, TOP - 110, at(37, 'hooked') + 0.12, X, { seed: 6, minor: true });
    word('Europe: hooked!', 690, 620, 64, at(37, 'europe'), X, 'fall', [C.pink, C.cream], 1 / 24);
  });
  // 15. fancy chocolate houses open in London, rich people sip it hot
  scene(PS(38) - 0.15, 'london', () => {
    set('london', '#5c6f7d', '#8a6a48', { glow: 0.2 });
    obj(SP2.house(), 90, TOP - 380, at(38, 'houses') - 0.2, X, { ct: [200, 12], seed: 1, big: true });
    word('CHOCOLATE', 196, TOP - 260, 32, at(38, 'chocolate'), X, 'fall', C.choc, 1 / 48);
    word('London', 700, 150, 96, at(38, 'london'), X, 'fall', [C.red, C.cream], 1 / 24, 0, 'stamp');
    [0, 1, 2].forEach((i) => { mug(660 + i * 180, TOP - 150, at(39, 'sipped') + i * 0.15, X, { seed: 2 + i, col: [C.cream, C.pink, C.cyan][i], k: 'l' + i, sx: 0.8, sy: 0.8 }); if (TQ >= at(39, 'hot')) obj(SP2.steam((FRN >> 1) % 2 + i), 690 + i * 180, TOP - 250, at(39, 'hot') + i / 12, X, { seed: 5 + i, shadow: false, minor: true }); });
    word('sipped hot', 760, 260, 56, at(39, 'hot'), X, 'fall', C.cream, 1 / 24);
  });
  // 16. for almost 300 years, still only a drink. Why?
  scene(PS(40) - 0.15, 'only', () => {
    set('only', '#6c5a8e', '#d6b07a');
    counter(['100', '200', '300'], [at(40, 'three') - 0.3, at(40, 'three') - 0.15, at(40, 'three')], 400, 300, 180, X, C.yellow);
    word('YEARS', 270, 400, 72, at(40, 'years'), X, 'fall', C.cream, 1 / 24);
    mug(820, TOP - 150, at(41, 'drink') - 0.2, X, { seed: 1 });
    word('only a drink', 720, 260, 60, at(41, 'only'), X, 'fall', C.cream, 1 / 24);
    wordC('WHY?', 640, 640, 100, at(42, 'why'), X, 'fall', [C.coral, C.yellow], 1 / 24, 0, 'ding');
  });

  // ======================= CHAPTER 4: the press and the first bar =======================
  // 17. a bean cut in half: about half is fat = cocoa butter; ground beans = greasy paste
  scene(PS(43) - 0.15, 'fat', () => {
    set('fat', '#e7c9a0', '#c08a6a', { glow: 0.22 });
    const paste = at(45, 'grind');
    obj(SP2.beanBig(), 160, 110, at(43, 'bean'), paste - 0.1, { seed: 1, big: true });
    word('50%', 820, 250, 160, at(43, 'half'), X, 'fall', C.butter, 1 / 12, 0, 'impact');
    word('FAT', 860, 350, 80, at(43, 'fat'), X, 'fall', C.cream, 1 / 24);
    word('cocoa butter', 760, 460, 64, at(44, 'butter'), X, 'fall', [C.butter, C.yellow], 1 / 24);
    obj(SP2.metate(), 150, TOP - 130, paste, X, { ct: [140, 10], seed: 2 });
    obj(SP2.paste(), 200, TOP - 170, at(45, 'thick'), X, { seed: 3, sx: 1.3, sy: 1.3, hit: 'pop' });
    if (TQ >= at(45, 'greasy')) [0, 1, 2].forEach((i) => obj(SP2.drop(C.butter, 'b'), 200 + i * 70, TOP - 210 - (i % 2) * 30, at(45, 'greasy') + i / 12, X, { seed: 4 + i, sx: 0.35, sy: 0.35, minor: true }));
    word('greasy paste', 150, 630, 52, at(45, 'greasy'), X, 'fall', C.cream, 1 / 24);
  });
  // 18. 1828, Coenraad van Houten's press squeezes the butter out (plate steps down, butter drips)
  scene(PS(46) - 0.15, 'press', () => {
    set('lab', '#4f6f8f', '#a9b8c4', { glow: 0.2 });
    word('1828', 70, 170, 140, at(46, 'eighteen'), X, 'fall', C.yellow, 1 / 12, 0, 'stamp');
    word('van Houten', 70, 270, 64, at(47, 'van'), X, 'fall', [C.coral, C.cream], 1 / 24);
    word('Dutch chemist', 70, 340, 48, at(47, 'dutch'), X, 'fall', C.cream, 1 / 24);
    const px = 640, sq = at(48, 'squeezed');
    obj(SP2.press(), px, TOP - 420, at(48, 'press') - 0.3, X, { ct: [150, 10], seed: 1, big: true });
    const d = Math.round(step6(sq, 1.0, 5) * 5) / 5;
    obj(SP2.paste(), px + 70, TOP - 110 + d * 20, at(48, 'press') - 0.2, X, { seed: 2, sx: 1, sy: 1 - d * 0.5, shadow: false });
    obj(SP2.plate(), px + 40, 120 + d * 220, at(48, 'press') - 0.2, X, { seed: 3, shadow: { blur: 8, dx: 4, dy: 8, a: 0.4 } });
    if (TQ >= sq + 0.3) for (let i = 0; i < 4; i++) { const ph = ((TQ - sq) * 1.4 + i * 0.25) % 1; obj(SP2.drop(C.butter, 'b'), px + (i % 2 ? 300 : -30), TOP - 70 + Math.round(ph * 6) / 6 * 60, sq + 0.3, X, { seed: 5 + i, sx: 0.3, sy: 0.3, shadow: false, minor: true }); }
    word('butter out!', 1000, 200, 56, at(48, 'butter'), X, 'fall', C.butter, 1 / 24);
  });
  // 19. what's left is a dry cake, crushed into cocoa powder
  scene(PS(49) - 0.15, 'powder', () => {
    set('powder', '#b9824f', '#d6b07a', { glow: 0.22 });
    const cr = at(50, 'crushed');
    obj(SP2.cake(), 200, TOP - 70, at(49, 'cake'), cr + 0.2, { ct: [100, 8], seed: 1 });
    word('dry cake', 190, 330, 64, at(49, 'dry'), X, 'fall', C.cream, 1 / 24);
    if (TQ >= cr) obj(SP.ball(C.metal, 50, 591, 0.8), 260, 100 + Math.round(step6(cr, 0.3, 3) * 3) / 3 * 230, cr, X, { seed: 2, hit: 'thud' });
    coil('cake2pow', curve(470, 420, 590, 330, 700, 420, 14), C.cream, at(50, 'cocoa') - 0.2, X, { wdt: 14 });
    obj(SP2.powder(), 760, TOP - 110, at(50, 'cocoa'), X, { ct: [130, 8], seed: 3, big: true });
    word('COCOA POWDER', 640, 250, 72, at(50, 'powder'), X, 'fall', [C.cocoa, C.cream], 1 / 24, 0, 'stamp');
  });
  // 20. 1847, Fry's flips it: powder + sugar + extra melted butter, poured into a mold
  scene(PS(51) - 0.15, 'fry', () => {
    set('fry', '#3f6f5a', '#c99b6a', { glow: 0.24 });
    word('1847', 70, 170, 140, at(51, 'eighteen'), X, 'fall', C.yellow, 1 / 12, 0, 'stamp');
    word("Fry's", 420, 170, 110, at(52, 'frys'), X, 'fall', [C.coral, C.cream], 1 / 24);
    word('flipped it', 740, 160, 64, at(52, 'flipped'), X, 'fall', C.cream, 1 / 24);
    const pour = at(55, 'poured');
    const tilt = Math.round(step6(pour, 0.5, 4) * 4) / 4;
    obj(SP2.bowl(), 160, TOP - 220 - tilt * 60, at(53, 'mixed'), X, { seed: 1, rot: tilt * 0.6, ct: tilt ? null : [140, 10] });
    const ins = [[SP2.powder(), 'cocoa', 0.4], [SP2.sugar(1), 'sugar', 1], [SP2.drop(C.butter, 'b'), 'melted', 0.6]];
    ins.forEach(([s, w, k], i) => { const t0 = at(i < 2 ? 53 : 54, w); if (TQ < t0 || TQ >= pour) return; const u = Math.round(H.clamp((TQ - t0) / 0.4) * 5) / 5; obj(s, 230 + i * 50, 40 + u * 170, t0, null, { seed: 4 + i, sx: k, sy: k }); });
    word('+ powder', 900, 280, 48, at(53, 'powder'), X, 'fall', C.cocoa, 1 / 24);
    word('+ sugar', 900, 340, 48, at(53, 'sugar'), X, 'fall', C.cream, 1 / 24);
    word('+ extra butter', 900, 400, 48, at(54, 'extra'), X, 'fall', C.butter, 1 / 24);
    if (TQ >= pour + 0.3) coil('fpour', [[440, 250], [500, 300], [520, 390]], C.choc, pour + 0.3, X, { head: false, wdt: 24 });
    obj(SP2.mold(), 420, TOP - 90, at(55, 'mold') - 0.2, X, { ct: [160, 8], seed: 7 });
    if (TQ >= pour + 0.6) obj(SP.rect('mfill', 270, 40, C.choc, 10, { R: 8, seed: 592, spec: 0.7, fps: [] }), 455, TOP - 70, pour + 0.6, X, { seed: 8, shadow: false });
  });
  // 21. it set hard: the first modern chocolate bar (still gritty and a bit bitter)
  scene(PS(56) - 0.15, 'firstbar', () => {
    set('firstbar', '#7a4f2f', '#d6b07a', { glow: 0.3 });
    obj(SP2.bar(), 480, TOP - 150, at(56, 'set'), X, { ct: [140, 10], seed: 1, big: true, hit: 'thud' });
    word('HARD', 160, 250, 110, at(56, 'hard'), X, 'fall', C.cream, 1 / 24, 0, 'slap');
    wordC('THE FIRST BAR', 640, 140, 100, at(57, 'first'), X, 'fall', [C.yellow, C.gold, C.cream], 1 / 24, 0, 'success');
    word('gritty', 920, 300, 64, at(58, 'gritty'), X, 'fall', '#b59a7a', 1 / 24);
    word('bitter', 920, 390, 64, at(58, 'bitter'), X, 'fall', C.cocoa, 1 / 24);
  });

  // ======================= CHAPTER 5: the Swiss =======================
  // 22. two Swiss makers; 1875: Daniel Peter adds milk (Nestlé's milk powder) = milk chocolate
  scene(PS(59) - 0.15, 'milk', () => {
    set('alps', '#7fb0d0', '#7a9a4a', { glow: 0.3 });
    obj(SP2.mountain(0), 40, TOP - 300, PS(59), X, { seed: 1, shadow: { blur: 16, dx: 6, dy: 4, a: 0.25 }, minor: true });
    obj(SP2.mountain(1, 420, 240), 380, TOP - 240, PS(59) + 0.1, X, { seed: 2, shadow: { blur: 16, dx: 6, dy: 4, a: 0.25 }, minor: true });
    word('SWISS', 760, 150, 100, at(59, 'swiss'), at(60, 'eighteen') - 0.1, 'fall', [C.red, C.cream], 1 / 24, 0, 'stamp');
    word('1875', 760, 150, 120, at(60, 'eighteen'), X, 'fall', C.yellow, 1 / 12);
    word('Daniel Peter', 760, 240, 60, at(61, 'daniel'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.bottle(), 760, TOP - 230, at(61, 'milk'), X, { ct: [60, 8], seed: 3, hit: 'pop' });
    word('+ Nestlé milk powder', 760, 310, 40, at(62, 'powder'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.bar(C.milk, 'm'), 920, TOP - 140, at(63, 'milk'), X, { ct: [130, 10], seed: 4, sx: 0.9, sy: 0.9, big: true });
    wordC('MILK CHOCOLATE!', 640, 650, 84, at(63, 'born'), X, 'fall', [C.milk, C.cream], 1 / 24, 0, 'success');
  });
  // 23. 1879: Rodolphe Lindt's conche rolls warm chocolate back and forth for hours, grit shrinks, silky smooth
  scene(PS(64) - 0.15, 'conche', () => {
    set('conche', '#8e5a3a', '#d6b07a', { glow: 0.26 });
    word('1879', 70, 160, 120, at(64, 'eighteen'), X, 'fall', C.yellow, 1 / 12, 0, 'stamp');
    word('Lindt', 380, 160, 90, at(65, 'rodolphe'), X, 'fall', [C.coral, C.cream], 1 / 24);
    word('the CONCHE', 720, 160, 80, at(65, 'conche'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.trough(), 380, TOP - 140, at(65, 'machine'), X, { ct: [260, 12], seed: 1, big: true });
    obj(SP2.choco(), 410, TOP - 120, at(65, 'machine') + 0.1, X, { seed: 2, shadow: false });
    const rs = at(66, 'rolls');
    const rx = TQ >= rs ? Math.round((Math.sin((TQ - rs) * 2.2) * 0.5 + 0.5) * 8) / 8 : 0.5;
    obj(SP2.roller(), 440 + rx * 320, TOP - 230, at(65, 'machine') + 0.2, X, { seed: 3 });
    word('back & forth', 70, 300, 50, at(66, 'back'), X, 'fall', C.cream, 1 / 24);
    const shr = H.clamp((TQ - at(67, 'smaller')) / 2.5), gs = Math.max(0.15, 1 - Math.round(shr * 6) / 6);
    if (TQ >= at(67, 'grinding') && TQ < at(68, 'silky')) [0, 1, 2, 3, 4, 5].forEach((i) => obj(SP.ball('#5a2e1c', Math.max(3, Math.round(14 * gs)), 593 + i, 0.4), 470 + i * 60, TOP - 130, at(67, 'grinding') + i / 24, null, { seed: i, shadow: false, minor: true }));
    word('smaller...', 1000, 300, 50, at(67, 'smaller'), X, 'fall', C.cream, 1 / 24);
    word('SILKY SMOOTH', 400, 650, 76, at(68, 'silky'), X, 'fall', [C.milk, C.cream, C.cocoa], 1 / 24, 0, 'ding');
  });

  // ======================= CHAPTER 6: today, and the melting trick =======================
  // 24. today: farmers cut open the pods; beans ferment under banana leaves for about a week
  scene(PS(69) - 0.15, 'farm', () => {
    set('farm', '#2f5a3e', '#8a6a48', { glow: 0.2, light: [520, 140] });
    wordC('TODAY', 640, 140, 110, at(69, 'today'), at(70, 'farmers') + 0.6, 'fall', [C.yellow, C.cream], 1 / 24);
    obj(SP2.pod(), 100, TOP - 100, at(70, 'pods') - 0.2, at(71, 'ferment'), { ct: [90, 10], seed: 1 });
    const cut = at(70, 'open');
    if (TQ >= cut) obj(SP2.knife(), 120, TOP - 160 + Math.round(step6(cut, 0.3, 3) * 3) / 3 * 50, cut, at(71, 'ferment'), { seed: 2, rot: -0.2, hit: 'slap' });
    const fm = at(71, 'ferment');
    obj(SP2.box(), 430, TOP - 150, fm - 0.2, X, { ct: [210, 10], seed: 3, big: true });
    if (TQ >= fm) obj(SP2.pile(20, 'f'), 510, TOP - 230, fm, X, { seed: 4, shadow: false, minor: true });
    [0, 1].forEach((i) => obj(SP2.banana(i), 400 + i * 160, TOP - 200 - i * 10, fm + 0.3 + i / 12, X, { seed: 5 + i, rot: i ? 0.1 : -0.1 }));
    const days = ['day 1', 'day 3', 'day 5', 'day 7'], dt = at(71, 'week');
    counter(days, days.map((_, i) => dt - 0.6 + i * 0.25), 1080, 330, 64, X, C.yellow);
    word('FLAVOR!', 900, 450, 84, at(72, 'flavor'), X, 'fall', [C.cocoa, C.cream], 1 / 24, 0, 'ding');
  });
  // 25. dried (sun), roasted (flame), cracked (nibs)
  scene(PS(73) - 0.15, 'steps', () => {
    set('steps', '#d0703f', '#d6b07a', { glow: 0.28 });
    const xs = [220, 640, 1060];
    obj(SP2.sunB(), xs[0] - 60, 220, at(73, 'dried'), X, { seed: 1, hit: 'pop' });
    obj(SP2.flame((FRN >> 1) % 3), xs[1] - 45, 200, at(73, 'roasted'), X, { seed: 2 });
    obj(SP2.nibs(), xs[2] - 130, 240, at(73, 'cracked'), X, { seed: 3, sx: 2, sy: 2, hit: 'slap' });
    [0, 1, 2].forEach((i) => obj(SP2.bean(i), xs[i] - 23, TOP - 40, [at(73, 'dried'), at(73, 'roasted'), at(73, 'cracked')][i] + 0.1, X, { seed: 4 + i, sx: 1.8, sy: 1.8, ct: [36, 6], minor: true }));
    ['dried', 'roasted', 'cracked'].forEach((w, i) => wordC(w, xs[i], 620, 60, at(73, w), X, 'fall', C.cream, 1 / 24));
  });
  // 26. about 400 beans make one pound of chocolate
  scene(PS(74) - 0.15, 'four00', () => {
    set('four00', '#6c5a8e', '#d6b07a');
    const st = at(74, 'four'), n = Math.min(40, Math.max(1, Math.floor((TQ - st) * 24)));
    obj(SP2.pile(Math.round(n / 4) * 4 || 4, 'q' + Math.round(n / 4)), 90, TOP - 130, st, X, { ct: [140, 10], seed: 1, sx: 1.3, sy: 1.3 });
    counter(['100', '200', '300', '400'], [st, st + 0.2, st + 0.4, at(74, 'beans')], 300, 200, 170, X, C.yellow);
    word('BEANS', 210, 280, 64, at(74, 'beans'), X, 'fall', C.cocoa, 1 / 24);
    word('=', 590, 440, 200, at(75, 'make'), X, 'fall', C.cream, 1 / 12);
    obj(SP2.bar(), 760, TOP - 150, at(75, 'pound'), X, { ct: [140, 10], seed: 2, big: true, hit: 'thud' });
    word('1 POUND', 760, 260, 90, at(75, 'one'), X, 'fall', [C.cream, C.yellow], 1 / 24, 0, 'stamp');
  });
  // 27. the butter trick: melts at ~34 C, just below the 37 C inside your mouth; solid in hand, melts on tongue
  scene(PS(76) - 0.15, 'melt', () => {
    set('melt', '#4f9fae', '#c99b6a', { glow: 0.24 });
    word('the butter trick', 70, 140, 64, at(76, 'trick'), X, 'fall', [C.butter, C.cream], 1 / 24);
    const lv = TQ >= at(78, 'heat') ? 230 : TQ >= at(77, 'thirty') ? 200 : 120;
    thermo(140, TOP + 20, at(77, 'cocoa'), X, lv);
    word('34°C', 240, 330, 110, at(77, 'thirty'), X, 'fall', C.butter, 1 / 12, 0, 'impact');
    word('mouth 37°C', 240, 430, 52, at(78, 'mouth'), X, 'fall', C.pink, 1 / 24);
    obj(SP2.hand(), 640, TOP - 150, at(79, 'hand') - 0.2, X, { ct: [110, 10], seed: 1, sx: 0.85, sy: 0.85 });
    obj(SP2.bar(), 650, TOP - 250, at(79, 'solid'), X, { seed: 2, sx: 0.6, sy: 0.6, rot: -0.1 });
    word('solid', 660, 610, 56, at(79, 'solid'), X, 'fall', C.cream, 1 / 24, 0, 'thud');
    obj(SP2.tongue(), 940, TOP - 160, at(80, 'tongue') - 0.25, X, { ct: [140, 10], seed: 3 });
    const m = at(80, 'melts');
    if (TQ >= m) { const u = Math.min(2, Math.floor((TQ - m) * 3)); obj(SP2.melt(u), 1030, TOP - 170 + u * 6, m, X, { seed: 4, shadow: false }); }
    word('melts!', 990, 610, 60, at(80, 'melts'), X, 'fall', C.choc, 1 / 24, 0, 'ding');
  });
  // 28. recap: from a bitter drink worth money to the bar in your lunchbox; drink or bar?
  scene(PS(81) - 0.15, 'recap', () => {
    set('recap', '#7a4f2f', '#d6b07a', { glow: 0.3 });
    mug(180, TOP - 150, at(81, 'drink'), X, { seed: 1 });
    obj(SP2.foam(), 160, TOP - 175, at(81, 'drink') + 0.08, X, { seed: 2, sx: 0.85, sy: 0.85 });
    [0, 1, 2].forEach((i) => obj(SP2.bean(i), 360 + i * 50, TOP - 40, at(81, 'money') + i / 12, X, { seed: 3 + i, minor: true, ct: [24, 5] }));
    coil('recap', curve(480, 380, 640, 270, 800, 380, 16), C.cream, at(82, 'bar') - 0.3, X, { wdt: 16 });
    obj(SP2.bar(), 860, TOP - 150, at(82, 'bar'), X, { ct: [140, 10], seed: 6, big: true });
    word('drink', 160, 620, 64, at(83, 'drink'), X, 'fall', C.cocoa, 1 / 24);
    word('or', 590, 620, 64, at(83, 'or'), X, 'fall', C.cream, 1 / 24);
    word('bar?', 930, 620, 64, at(83, 'bar'), X, 'fall', C.yellow, 1 / 24);
    wordC('YOUR PICK?', 640, 160, 110, at(83, 'rather'), X, 'fall', [C.coral, C.yellow], 1 / 24, 0, 'ding');
  });
  // 29. next time: leafcutter ants and their underground city
  scene(PS(84) - 0.15, 'next', () => {
    set('next', '#5a3a26', '#8a6a48', { glow: 0.2 });
    word('NEXT TIME', 70, 140, 80, at(84, 'next'), null, 'fall', C.yellow, 1 / 24);
    const u = Math.round(H.clamp((TQ - at(84, 'ants')) / 3) * 18) / 18;
    [0, 1, 2].forEach((i) => { const x = 1200 - u * 700 - i * 190; obj(SP2.ant(i), x, TOP - 80, at(84, 'ants') + i * 0.1, null, { seed: i, ct: [60, 6] }); obj(SP2.leaf(i, C.leafL), x + 30, TOP - 150, at(84, 'ants') + i * 0.1 + 1 / 12, null, { seed: 5 + i, rot: -0.4, minor: true }); });
    wordC('an ant city?', 640, 300, 110, at(84, 'city'), null, 'fall', [C.coral, C.cream], 1 / 24, 0, 'ding');
    word('millions of workers', 380, 650, 60, at(85, 'millions'), null, 'fall', C.cream, 1 / 24, 0, 'end');
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
    // grinding stone, press, conche: low clay rumbles
    [[at(15, 'ground'), 1.0], [at(45, 'grind'), 1.0], [at(48, 'squeezed'), 1.2]].forEach(([t, d]) => k.noise(q(t), { dur: d, color: 'brown', filter: 'lowpass', f: 300, gain: 0.35, a: 0.1 }));
    { const a = at(66, 'rolls'); for (let t = a; t < PS(68); t += 1.43) k.noise(q(t), { dur: 0.7, color: 'brown', filter: 'bandpass', f: [[0, 220], [0.7, 420]], q: 1.2, gain: 0.3, a: 0.2 }); }
    // pouring from high: a long liquid smear; foam fizz
    k.noise(q(at(17, 'high')), { dur: 1.6, color: 'pink', filter: 'bandpass', f: [[0, 900], [1.6, 500]], q: 1.4, gain: 0.25, a: 0.1 });
    { const r = H.rng(77); for (let i = 0; i < 10; i++) k.play('pop', q(at(19, 'foam')) + i * r.range(0.06, 0.14), { f: r.range(700, 1300), gain: 0.18, minor: true }); }
    // the sea crossing: waves and a whoosh
    k.play('whoosh', q(at(32, 'carried')), { dur: 1.2, gain: 0.5, top: 900 });
    for (let i = 0; i < 3; i++) k.noise(q(PS(31) + 0.4 + i * 1.6), { dur: 1.2, color: 'pink', filter: 'lowpass', f: 700, gain: 0.18, a: 0.5 });
    // sugar plinks into the cup
    [at(35, 'sugar'), at(35, 'sugar') + 0.18, at(35, 'sugar') + 0.36, at(36, 'cinnamon'), at(36, 'vanilla')].forEach((t, i) => k.play('blip', q(t + 0.5), { f: ['A5', 'C6', 'E6', 'G5', 'D6'][i], type: 'sine', dur: 0.08, gain: 0.4, minor: true }));
    // butter drips
    for (let i = 0; i < 6; i++) k.play('blip', q(at(48, 'squeezed') + 0.4 + i * 0.36), { f: ['E5', 'C5'][i % 2], type: 'sine', dur: 0.06, gain: 0.35, minor: true });
    // pour into the mold, then the melt
    k.noise(q(at(55, 'poured') + 0.3), { dur: 0.9, color: 'brown', filter: 'bandpass', f: [[0, 500], [0.9, 300]], q: 1.3, gain: 0.3, a: 0.1 });
    k.noise(q(at(80, 'melts')), { dur: 0.8, color: 'brown', filter: 'bandpass', f: [[0, 400], [0.8, 200]], q: 1.2, gain: 0.3, a: 0.2 });
    k.play('riser', q(at(57, 'first')) - 0.6, { dur: 0.6, gain: 0.35 });
    k.play('sparkle', q(at(68, 'silky')) + 0.1, { n: 6, gain: 0.5 });
    // ants scurry
    { const a = at(84, 'ants'); for (let t = a; t < a + 3; t += 1 / 6) k.noise(q(t), { dur: 0.02, filter: 'highpass', f: 3500, gain: 0.06, minor: true }); }
    // stop-motion cuts: a soft table bump on each new set
    SC.slice(1).forEach((s) => squelch(q(s.s), 0.35, 0, 0.1));
  }

  function thumbnail(ctx, W, H_) {
    ctxG = ctx; TQ = 3; FRN = 36; X = 999;
    set('thumb', '#7a4f2f', '#d6b07a', { glow: 0.32 });
    obj(SP2.pile(40, 'th'), 40, TOP - 150, 0, null, { ct: [160, 12], seed: 1, sx: 1.6, sy: 1.6 });
    obj(SP.ball(C.gold, 70, 590, 0.8), 330, 120, 0, null, { seed: 2 });
    obj(SP2.bar(), 120, 170, 0, null, { seed: 3, rot: -0.2, sx: 0.8, sy: 0.8 });
    word('IT WAS', 600, 300, 150, 0, null, 'fall', C.cream, 0);
    word('MONEY', 540, 520, 180, 0, null, 'fall', [C.gold, C.yellow], 0);
    finish(ctx);
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0; window.SCENES = SC;
})();
