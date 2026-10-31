// ================= Claymation Set, 16:9 1280x720: "How do animals survive being frozen solid?" =================
// Long explainer. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// One clay studio: every scene is a sculpted set (wall + table), every piece a baked plasticine lump popped on with
// squash-and-stretch on twos (12 fps), slid, or knocked off the table at the end of the beat.
(function () {
  const W0 = 1280, H0 = 720, TAU = Math.PI * 2;
  // ---------- BEATS: one entry per voiceover phrase (phrases.json, Kokoro am_michael) ----------
  const PH = [
    {"s":0.25,"e":2.23,"text":"Frozen solid for seven months.","words":[["frozen",0.25],["solid",0.72],["for",1.12],["seven",1.36],["months",1.75]]},
    {"s":2.78,"e":4.54,"text":"No heartbeat. No breathing.","words":[["no",2.78],["heartbeat",2.94],["no",3.66],["breathing",3.82]]},
    {"s":5.09,"e":5.98,"text":"You'd be dead.","words":[["youd",5.09],["be",5.45],["dead",5.63]]},
    {"s":6.53,"e":8.64,"text":"This frog just hops away in spring.","words":[["this",6.53],["frog",6.83],["just",7.13],["hops",7.44],["away",7.74],["in",8.04],["spring",8.19]]},
    {"s":9.19,"e":11.68,"text":"So how do animals survive being frozen?","words":[["so",9.19],["how",9.34],["do",9.58],["animals",9.73],["survive",10.28],["being",10.82],["frozen",11.21]]},
    {"s":12.23,"e":14.34,"text":"Today, four champions of the cold,","words":[["today",12.23],["four",12.62],["champions",12.93],["of",13.64],["the",13.79],["cold",14.03]]},
    {"s":14.64,"e":16.5,"text":"each with a totally different trick.","words":[["each",14.64],["with",14.89],["a",15.13],["totally",15.2],["different",15.63],["trick",16.19]]},
    {"s":17.05,"e":18.26,"text":"Meet the wood frog.","words":[["meet",17.05],["the",17.37],["wood",17.61],["frog",17.94]]},
    {"s":18.81,"e":20.79,"text":"It lives as far north as Alaska,","words":[["it",18.81],["lives",18.97],["as",19.36],["far",19.52],["north",19.76],["as",20.15],["alaska",20.31]]},
    {"s":21.09,"e":22.69,"text":"and it doesn't hide from winter.","words":[["and",21.09],["it",21.28],["doesnt",21.41],["hide",21.79],["from",22.05],["winter",22.31]]},
    {"s":23.24,"e":25.22,"text":"It just lies down under the leaves,","words":[["it",23.24],["just",23.39],["lies",23.67],["down",23.95],["under",24.23],["the",24.59],["leaves",24.8]]},
    {"s":25.52,"e":26.86,"text":"and lets the ice come.","words":[["and",25.52],["lets",25.76],["the",26.08],["ice",26.31],["come",26.55]]},
    {"s":27.41,"e":30.4,"text":"The problem with freezing is sharp ice crystals.","words":[["the",27.41],["problem",27.64],["with",28.16],["freezing",28.46],["is",29.06],["sharp",29.21],["ice",29.58],["crystals",29.8]]},
    {"s":30.95,"e":32.56,"text":"If they grow inside a cell,","words":[["if",30.95],["they",31.1],["grow",31.41],["inside",31.72],["a",32.18],["cell",32.25]]},
    {"s":32.86,"e":35.02,"text":"they rip it apart like tiny knives.","words":[["they",32.86],["rip",33.17],["it",33.4],["apart",33.55],["like",33.94],["tiny",34.25],["knives",34.56]]},
    {"s":35.57,"e":37.43,"text":"So the frog plays a clever game.","words":[["so",35.57],["the",35.72],["frog",35.94],["plays",36.24],["a",36.61],["clever",36.69],["game",37.14]]},
    {"s":37.98,"e":39.59,"text":"As ice touches its skin,","words":[["as",37.98],["ice",38.15],["touches",38.41],["its",39.0],["skin",39.25]]},
    {"s":39.89,"e":41.9,"text":"its liver floods the body with sugar,","words":[["its",39.89],["liver",40.09],["floods",40.43],["the",40.83],["body",41.03],["with",41.3],["sugar",41.57]]},
    {"s":42.2,"e":44.31,"text":"up to ten times the normal amount.","words":[["up",42.2],["to",42.36],["ten",42.51],["times",42.75],["the",43.14],["normal",43.37],["amount",43.84]]},
    {"s":44.86,"e":46.78,"text":"That sugar soaks into every cell,","words":[["that",44.86],["sugar",45.15],["soaks",45.5],["into",45.86],["every",46.14],["cell",46.5]]},
    {"s":47.08,"e":48.82,"text":"like a syrup that won't freeze.","words":[["like",47.08],["a",47.37],["syrup",47.44],["that",47.81],["wont",48.1],["freeze",48.39]]},
    {"s":49.37,"e":52.01,"text":"So the ice can only grow outside the cells,","words":[["so",49.37],["the",49.53],["ice",49.76],["can",49.99],["only",50.23],["grow",50.54],["outside",50.85],["the",51.39],["cells",51.62]]},
    {"s":52.31,"e":53.91,"text":"in the spaces in between.","words":[["in",52.31],["the",52.47],["spaces",52.71],["in",53.19],["between",53.35]]},
    {"s":54.46,"e":57.16,"text":"Up to sixty percent of the frog turns to ice.","words":[["up",54.46],["to",54.61],["sixty",54.76],["percent",55.15],["of",55.69],["the",55.85],["frog",56.08],["turns",56.39],["to",56.77],["ice",56.93]]},
    {"s":57.71,"e":59.41,"text":"No heartbeat. No breath.","words":[["no",57.71],["heartbeat",57.89],["no",58.7],["breath",58.88]]},
    {"s":59.96,"e":61.91,"text":"In Alaska, it can stay like this","words":[["in",59.96],["alaska",60.12],["it",60.59],["can",60.74],["stay",60.97],["like",61.28],["this",61.6]]},
    {"s":62.21,"e":63.83,"text":"for as long as seven months.","words":[["for",62.21],["as",62.43],["long",62.57],["as",62.87],["seven",63.02],["months",63.38]]},
    {"s":64.38,"e":66.35,"text":"Then spring comes, the ice melts,","words":[["then",64.38],["spring",64.68],["comes",65.14],["the",65.51],["ice",65.74],["melts",65.97]]},
    {"s":66.65,"e":68.38,"text":"and the heart starts beating again.","words":[["and",66.65],["the",66.83],["heart",67.01],["starts",67.31],["beating",67.67],["again",68.08]]},
    {"s":68.93,"e":70.14,"text":"Our second champion","words":[["our",68.93],["second",69.15],["champion",69.57]]},
    {"s":70.44,"e":72.03,"text":"uses the opposite trick.","words":[["uses",70.44],["the",70.76],["opposite",70.99],["trick",71.63]]},
    {"s":72.58,"e":75.33,"text":"The Arctic ground squirrel never freezes at all,","words":[["the",72.58],["arctic",72.79],["ground",73.2],["squirrel",73.61],["never",74.16],["freezes",74.51],["at",74.99],["all",75.12]]},
    {"s":75.63,"e":77.97,"text":"even when its body drops below zero.","words":[["even",75.63],["when",75.95],["its",76.28],["body",76.52],["drops",76.84],["below",77.25],["zero",77.65]]},
    {"s":78.52,"e":81.92,"text":"Scientists measured one at almost minus three degrees,","words":[["scientists",78.52],["measured",79.26],["one",79.85],["at",80.08],["almost",80.22],["minus",80.67],["three",81.04],["degrees",81.41]]},
    {"s":82.22,"e":84.74,"text":"the coldest body ever found in a mammal.","words":[["the",82.22],["coldest",82.46],["body",83.01],["ever",83.32],["found",83.64],["in",84.03],["a",84.19],["mammal",84.27]]},
    {"s":85.29,"e":87.02,"text":"How? It's called supercooling.","words":[["how",85.29],["its",85.51],["called",85.72],["supercooling",86.15]]},
    {"s":87.57,"e":90.1,"text":"Water needs a tiny seed to start freezing,","words":[["water",87.57],["needs",87.94],["a",88.31],["tiny",88.39],["seed",88.69],["to",88.98],["start",89.13],["freezing",89.5]]},
    {"s":90.4,"e":92.69,"text":"like a speck of dust, or a bit of ice.","words":[["like",90.4],["a",90.74],["speck",90.82],["of",91.25],["dust",91.42],["or",91.75],["a",91.92],["bit",92.01],["of",92.26],["ice",92.43]]},
    {"s":93.24,"e":95.02,"text":"The squirrel's blood is so clean,","words":[["the",93.24],["squirrels",93.44],["blood",94.06],["is",94.4],["so",94.54],["clean",94.68]]},
    {"s":95.32,"e":97.22,"text":"there's nothing for ice to grow on.","words":[["theres",95.32],["nothing",95.74],["for",96.23],["ice",96.45],["to",96.66],["grow",96.8],["on",97.08]]},
    {"s":97.77,"e":100.02,"text":"So it stays liquid, below freezing.","words":[["so",97.77],["it",97.93],["stays",98.09],["liquid",98.49],["below",98.97],["freezing",99.37]]},
    {"s":100.57,"e":101.63,"text":"But that's risky.","words":[["but",100.57],["thats",100.81],["risky",101.22]]},
    {"s":102.18,"e":104.53,"text":"So every few weeks, the squirrel shivers,","words":[["so",102.18],["every",102.32],["few",102.68],["weeks",102.89],["the",103.25],["squirrel",103.46],["shivers",104.03]]},
    {"s":104.83,"e":107.0,"text":"warms itself back up for a little while,","words":[["warms",104.83],["itself",105.17],["back",105.58],["up",105.85],["for",105.98],["a",106.19],["little",106.25],["while",106.66]]},
    {"s":107.3,"e":109.31,"text":"then drops back into the deep cold.","words":[["then",107.3],["drops",107.59],["back",107.95],["into",108.23],["the",108.52],["deep",108.74],["cold",109.03]]},
    {"s":109.86,"e":112.05,"text":"Now, dive under the Antarctic ice.","words":[["now",109.86],["dive",110.11],["under",110.43],["the",110.83],["antarctic",111.08],["ice",111.8]]},
    {"s":112.6,"e":115.19,"text":"The sea here is almost minus two degrees,","words":[["the",112.6],["sea",112.83],["here",113.07],["is",113.38],["almost",113.54],["minus",114.01],["two",114.4],["degrees",114.64]]},
    {"s":115.49,"e":117.66,"text":"cold enough to freeze most fish solid.","words":[["cold",115.49],["enough",115.77],["to",116.19],["freeze",116.33],["most",116.75],["fish",117.03],["solid",117.31]]},
    {"s":118.21,"e":120.95,"text":"But these Antarctic fish swim around just fine.","words":[["but",118.21],["these",118.42],["antarctic",118.77],["fish",119.4],["swim",119.68],["around",119.97],["just",120.39],["fine",120.67]]},
    {"s":121.5,"e":123.97,"text":"Their blood is full of antifreeze proteins.","words":[["their",121.5],["blood",121.84],["is",122.18],["full",122.32],["of",122.6],["antifreeze",122.73],["proteins",123.42]]},
    {"s":124.52,"e":126.62,"text":"When a tiny ice crystal sneaks in,","words":[["when",124.52],["a",124.83],["tiny",124.91],["ice",125.22],["crystal",125.45],["sneaks",126.0],["in",126.47]]},
    {"s":126.92,"e":128.51,"text":"the proteins grab onto it,","words":[["the",126.92],["proteins",127.15],["grab",127.76],["onto",128.06],["it",128.36]]},
    {"s":128.81,"e":130.45,"text":"and wrap it up so it can't grow.","words":[["and",128.81],["wrap",129.03],["it",129.31],["up",129.45],["so",129.6],["it",129.74],["cant",129.88],["grow",130.17]]},
    {"s":131.0,"e":132.81,"text":"One of their cousins, the icefish,","words":[["one",131.0],["of",131.2],["their",131.34],["cousins",131.67],["the",132.14],["icefish",132.34]]},
    {"s":133.11,"e":134.23,"text":"went even further.","words":[["went",133.11],["even",133.41],["further",133.71]]},
    {"s":134.78,"e":136.84,"text":"Its blood has no red cells at all.","words":[["its",134.78],["blood",135.02],["has",135.42],["no",135.65],["red",135.81],["cells",136.05],["at",136.44],["all",136.6]]},
    {"s":137.39,"e":138.73,"text":"It's clear, like water.","words":[["its",137.39],["clear",137.63],["like",138.02],["water",138.33]]},
    {"s":139.28,"e":141.31,"text":"And then there's the toughest of them all.","words":[["and",139.28],["then",139.46],["theres",139.71],["the",140.08],["toughest",140.26],["of",140.75],["them",140.88],["all",141.12]]},
    {"s":141.86,"e":143.7,"text":"The tardigrade, or water bear,","words":[["the",141.86],["tardigrade",142.09],["or",142.86],["water",143.01],["bear",143.39]]},
    {"s":144.0,"e":145.67,"text":"smaller than a grain of sand.","words":[["smaller",144.0],["than",144.51],["a",144.8],["grain",144.87],["of",145.23],["sand",145.38]]},
    {"s":146.22,"e":148.84,"text":"When things get bad, it dries itself out,","words":[["when",146.22],["things",146.55],["get",147.04],["bad",147.28],["it",147.53],["dries",147.69],["itself",148.1],["out",148.59]]},
    {"s":149.14,"e":151.46,"text":"curls into a tiny ball called a tun,","words":[["curls",149.14],["into",149.55],["a",149.88],["tiny",149.97],["ball",150.3],["called",150.63],["a",151.13],["tun",151.22]]},
    {"s":151.76,"e":153.69,"text":"and basically pauses its life.","words":[["and",151.76],["basically",152.0],["pauses",152.69],["its",153.15],["life",153.38]]},
    {"s":154.24,"e":158.32,"text":"In nineteen eighty three, scientists collected moss in Antarctica,","words":[["in",154.24],["nineteen",154.38],["eighty",154.97],["three",155.4],["scientists",155.77],["collected",156.5],["moss",157.15],["in",157.44],["antarctica",157.59]]},
    {"s":158.62,"e":161.04,"text":"and kept it in a freezer at minus twenty.","words":[["and",158.62],["kept",158.85],["it",159.15],["in",159.3],["a",159.45],["freezer",159.53],["at",160.06],["minus",160.21],["twenty",160.59]]},
    {"s":161.59,"e":163.85,"text":"Thirty years later, they thawed it out.","words":[["thirty",161.59],["years",162.03],["later",162.4],["they",162.76],["thawed",163.05],["it",163.49],["out",163.63]]},
    {"s":164.4,"e":165.88,"text":"Two water bears woke up,","words":[["two",164.4],["water",164.63],["bears",165.02],["woke",165.41],["up",165.73]]},
    {"s":166.18,"e":168.67,"text":"and one of them went on to lay nineteen eggs.","words":[["and",166.18],["one",166.4],["of",166.61],["them",166.75],["went",167.04],["on",167.32],["to",167.46],["lay",167.61],["nineteen",167.82],["eggs",168.39]]},
    {"s":169.22,"e":170.9,"text":"So why do scientists care?","words":[["so",169.22],["why",169.38],["do",169.62],["scientists",169.78],["care",170.58]]},
    {"s":171.45,"e":172.88,"text":"Because we can't do this yet.","words":[["because",171.45],["we",171.9],["cant",172.03],["do",172.29],["this",172.42],["yet",172.68]]},
    {"s":173.43,"e":174.82,"text":"A donor heart on ice","words":[["a",173.43],["donor",173.51],["heart",173.95],["on",174.38],["ice",174.56]]},
    {"s":175.12,"e":177.38,"text":"only lasts about four to six hours.","words":[["only",175.12],["lasts",175.44],["about",175.85],["four",176.25],["to",176.57],["six",176.73],["hours",176.97]]},
    {"s":177.93,"e":180.19,"text":"Researchers are studying the frog's sugar,","words":[["researchers",177.93],["are",178.64],["studying",178.83],["the",179.35],["frogs",179.55],["sugar",179.87]]},
    {"s":180.49,"e":182.07,"text":"and the fish's antifreeze,","words":[["and",180.49],["the",180.72],["fishs",180.94],["antifreeze",181.32]]},
    {"s":182.37,"e":184.58,"text":"to keep organs alive for much longer.","words":[["to",182.37],["keep",182.52],["organs",182.81],["alive",183.25],["for",183.62],["much",183.84],["longer",184.13]]},
    {"s":185.13,"e":186.84,"text":"Four animals, four tricks:","words":[["four",185.13],["animals",185.45],["four",186.03],["tricks",186.35]]},
    {"s":187.14,"e":190.1,"text":"sugar, supercooling, antifreeze, and drying out.","words":[["sugar",187.14],["supercooling",187.52],["antifreeze",188.43],["and",189.19],["drying",189.41],["out",189.87]]},
    {"s":190.65,"e":191.93,"text":"Which one would you pick?","words":[["which",190.65],["one",190.97],["would",191.16],["you",191.48],["pick",191.67]]},
    {"s":192.48,"e":194.15,"text":"Next time, how did a bitter bean","words":[["next",192.48],["time",192.75],["how",193.01],["did",193.21],["a",193.41],["bitter",193.48],["bean",193.88]]},
    {"s":194.45,"e":196.59,"text":"become the world's favorite treat, chocolate?","words":[["become",194.45],["the",194.79],["worlds",194.97],["favorite",195.32],["treat",195.78],["chocolate",196.07]]}
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
  Object.assign(C, { frog: '#b9824f', frogD: '#86593a', mask: '#4a2e22', belly: '#efd9b0', ice: '#c8ecfa', iceD: '#8fcbe6', heart: '#d9473b',
    cell: '#f2b8a8', sugar: '#fbf6ea', liver: '#8e3a2c', squir: '#c98d52', squirD: '#8f5a30', fish: '#7e98ab', icef: '#e9edf1', bear: '#d8b48a',
    moss: '#5f9a3e', snow: '#f4f6fb', choc: '#6b3a22', cocoa: '#c8732e', leaf: '#c96a2c', leaf2: '#e0a040', white: '#f7f4ee' });
  const ICE = ['#dff4ff', '#bfe6f5', '#f6efe3', '#9fd8ef'];

  // ---------- story sprites ----------
  const ell = (c, x, y, rx, ry, a = 0) => { c.beginPath(); c.ellipse(x, y, rx, ry, a, 0, TAU); c.fill(); };
  const SP2 = {
    // wood frog, side view facing right; closed = eyes shut (frozen)
    frog: (closed = false) => group('frog' + closed, 250, 150, [
      [SP.shape('fleg', 130, 62, C.frogD, (c) => ell(c, 65, 31, 63, 29, -0.1), { R: 12, seed: 401 }), 0, 82],
      [SP.shape('fbody', 210, 120, C.frog, (c) => { ell(c, 95, 66, 92, 50, -0.12); ell(c, 168, 46, 42, 34, 0.1); }, { R: 16, seed: 402 }), 14, 10],
      [SP.shape('fbelly', 120, 36, C.belly, (c) => ell(c, 60, 18, 58, 15, -0.05), { R: 8, seed: 403, fps: [] }), 90, 98, 0.2],
      [SP.shape('fmask', 70, 26, C.mask, (c) => ell(c, 35, 13, 34, 11, 0.15), { R: 6, seed: 404, fps: [] }), 160, 44, 0.2],
      [SP.ball(closed ? C.frogD : C.cream, 16, 405, 0.6), 166, 8, 0.3],
      ...(closed ? [[SP.rect('lid', 30, 7, C.mask, 3, { R: 3, seed: 406, fps: [] }), 167, 22, 0]] : [[SP.ball(C.ink, 7, 407, 0.8), 180, 18, 0]]),
      [SP.rect('farm', 22, 46, C.frogD, 10, { R: 7, seed: 408, fps: [] }), 176, 100],
    ]),
    iceblk: (w = 340, h = 220) => SP.rect('iceblk' + w + h, w, h, C.ice, 28, { R: 18, spec: 0.9, lump: 1.6, seed: 410, sss: [0.95, 1.02, 1.1] }),
    heart: (s = 1) => SP.shape('heart' + s, 100 * s, 90 * s, C.heart, (c) => { const w = 100 * s, h = 90 * s; ell(c, w * 0.3, h * 0.33, w * 0.28, h * 0.3); ell(c, w * 0.7, h * 0.33, w * 0.28, h * 0.3); c.beginPath(); c.moveTo(w * 0.04, h * 0.42); c.lineTo(w * 0.5, h * 0.98); c.lineTo(w * 0.96, h * 0.42); c.closePath(); c.fill(); }, { R: 12 * s, seed: 411, spec: 0.5 }),
    crystal: (s = 1, n = 0) => SP.shape('cry' + s + n, 120 * s, 120 * s, ICE[n % 4], (c) => { const r = 58 * s; c.lineCap = 'round'; c.lineWidth = 11 * s; c.beginPath(); for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU + n * 0.3, ex = 60 * s + Math.cos(a) * r, ey = 60 * s + Math.sin(a) * r; c.moveTo(60 * s, 60 * s); c.lineTo(ex, ey); const mx = 60 * s + Math.cos(a) * r * 0.55, my = 60 * s + Math.sin(a) * r * 0.55; c.moveTo(mx, my); c.lineTo(mx + Math.cos(a + 0.8) * r * 0.32, my + Math.sin(a + 0.8) * r * 0.32); c.moveTo(mx, my); c.lineTo(mx + Math.cos(a - 0.8) * r * 0.32, my + Math.sin(a - 0.8) * r * 0.32); } c.stroke(); }, { R: 5 * s + 2, lump: 0.4, seed: 412 + n, spec: 0.9, fps: [] }),
    cell: (r = 110, col = C.cell, k = '') => group('cell' + r + col + k, r * 2, r * 2, [[SP.ball(col, r, 413, 0.35), 0, 0, 0.3], [SP.ball('#b5677a', r * 0.28, 414, 0.5), r * 0.55, r * 0.6, 0.3]]),
    sugar: (n = 0) => SP.rect('sugar' + n, 38, 38, C.sugar, 6, { R: 6, seed: 415 + n, spec: 0.6, fps: [] }),
    liver: () => SP.shape('liver', 200, 110, C.liver, (c) => { c.beginPath(); c.moveTo(10, 40); c.bezierCurveTo(40, -5, 170, -5, 195, 30); c.bezierCurveTo(200, 70, 150, 105, 90, 100); c.bezierCurveTo(40, 95, 0, 75, 10, 40); c.fill(); }, { R: 16, seed: 420, spec: 0.5 }),
    page: (n) => group('page' + n, 120, 130, [[SP.rect('pg', 120, 130, C.cream, 10, { R: 8, seed: 421 }), 0, 0], [SP.rect('pgtop', 120, 30, C.red, 8, { R: 6, seed: 422, fps: [] }), 0, 0, 0.2]]),
    squirrel: () => group('squirrel', 230, 220, [
      [SP.shape('stail', 120, 190, C.squirD, (c) => { c.beginPath(); c.moveTo(100, 190); c.bezierCurveTo(-30, 170, -10, 20, 60, 10); c.bezierCurveTo(110, 5, 120, 60, 80, 70); c.bezierCurveTo(50, 80, 60, 140, 110, 160); c.closePath(); c.fill(); }, { R: 18, seed: 423 }), 0, 20],
      [SP.shape('sbody', 130, 150, C.squir, (c) => ell(c, 65, 80, 60, 68), { R: 18, seed: 424 }), 70, 64],
      [SP.ball(C.squir, 46, 425, 0.4), 110, 10],
      [SP.ball(C.squirD, 13, 426, 0.4), 128, 0, 0.2],
      [SP.ball(C.belly, 32, 427, 0.3), 95, 120, 0.2],
      [SP.ball(C.ink, 7, 428, 0.9), 172, 38, 0], [SP.ball('#4a2e22', 7, 429, 0.6), 198, 58, 0],
    ]),
    squirCurl: () => group('squirCurl', 220, 150, [
      [SP.shape('scbody', 200, 140, C.squir, (c) => ell(c, 100, 72, 96, 66), { R: 20, seed: 430 }), 0, 6],
      [SP.shape('sctail', 170, 70, C.squirD, (c) => { c.lineCap = 'round'; c.lineWidth = 46; c.beginPath(); c.arc(85, 120, 92, -2.6, -0.5); c.stroke(); }, { R: 16, seed: 431, fps: [] }), 22, 0],
      [SP.ball(C.squir, 40, 432, 0.4), 120, 52],
      [SP.rect('sclid', 22, 6, C.ink, 3, { R: 3, seed: 433, fps: [] }), 156, 80, 0],
    ]),
    tube: () => SP.rect('ttube', 46, 320, C.cream, 22, { R: 12, seed: 434 }),
    tfill: (h) => SP.rect('tfill' + h, 20, Math.max(10, h), C.red, 10, { R: 7, seed: 435, fps: [] }),
    bulb: () => SP.ball(C.red, 42, 436, 0.6),
    fish: (col = C.fish, k = 'f') => group('fish' + k, 280, 130, [
      [SP.shape('ftail' + k, 80, 100, col, (c) => { c.beginPath(); c.moveTo(80, 50); c.lineTo(0, 0); c.lineTo(14, 50); c.lineTo(0, 100); c.closePath(); c.fill(); }, { R: 12, seed: 437 }), 0, 15],
      [SP.shape('fbody' + k, 220, 110, col, (c) => ell(c, 110, 55, 108, 48), { R: 18, seed: 438, marks: [[150, 20, 150, 90, 1.4]] }), 55, 10],
      [SP.shape('ffin' + k, 70, 40, col, (c) => { c.beginPath(); c.moveTo(0, 40); c.lineTo(40, 0); c.lineTo(70, 40); c.closePath(); c.fill(); }, { R: 8, seed: 439, fps: [] }), 120, 0],
      [SP.ball(C.cream, 13, 440, 0.6), 225, 40, 0.2], [SP.ball(C.ink, 6, 441, 0.8), 234, 47, 0],
    ]),
    protein: (n = 0) => SP.shape('prot' + n, 70, 40, C.yellow, (c) => { c.lineCap = 'round'; c.lineWidth = 12; c.beginPath(); for (let i = 0; i <= 12; i++) { const x = 6 + i * 4.8, y = 20 + Math.sin(i * 1.1 + n) * 12; i ? c.lineTo(x, y) : c.moveTo(x, y); } c.stroke(); }, { R: 6, lump: 0.4, seed: 442 + n, spec: 0.5, fps: [] }),
    drop: (col, k) => SP.shape('drop' + k, 110, 150, col, (c) => { c.beginPath(); c.moveTo(55, 0); c.bezierCurveTo(70, 50, 110, 80, 110, 105); c.arc(55, 105, 55, 0, Math.PI); c.bezierCurveTo(0, 80, 40, 50, 55, 0); c.fill(); }, { R: 16, seed: 443, spec: 0.8 }),
    bear: () => group('bear', 320, 190, [
      ...[0, 1, 2, 3].map((i) => [SP.shape('bleg' + i, 44, 56, C.bear, (c) => ell(c, 22, 28, 20, 26), { R: 10, seed: 444 + i }), 40 + i * 62, 122]),
      [SP.shape('bbody', 300, 140, C.bear, (c) => ell(c, 150, 70, 146, 64), { R: 22, seed: 450, marks: [[90, 12, 86, 128, 1.6], [150, 8, 150, 132, 1.6], [210, 12, 214, 128, 1.6]], markW: 6 }), 0, 0],
      [SP.ball(C.bear, 30, 451, 0.4), 262, 52],
      [SP.ball(C.ink, 5, 452, 0.9), 280, 60, 0], [SP.ball('#8a5a3a', 8, 453, 0.5), 306, 76, 0.2],
      ...[0, 1, 2, 3].map((i) => [SP.ball('#efd4b0', 6, 454, 0.5), 52 + i * 62, 172, 0.2]),
    ]),
    tun: () => SP.shape('tun', 150, 120, '#c99b6a', (c) => ell(c, 75, 60, 72, 56), { R: 22, seed: 460, marks: [[30, 30, 120, 34, 1.6], [20, 60, 130, 60, 1.6], [30, 90, 120, 88, 1.6]], markW: 6 }),
    moss: () => group('moss', 300, 110, Array.from({ length: 16 }, (_, i) => { const r = H.rng(461 + i); return [SP.ball(i % 3 ? C.moss : '#7fb850', r.int(18, 30), 462 + (i % 4), 0.3), r.range(0, 240), r.range(10, 50), 0.3]; })),
    freezer: () => group('freezer', 280, 330, [[SP.rect('frz', 280, 330, '#e8eef2', 22, { R: 14, seed: 470, marks: [[10, 110, 270, 110, 1.6]] }), 0, 0], [SP.rect('frzh', 18, 70, '#9aa0a8', 8, { R: 6, seed: 471, fps: [] }), 240, 140, 0.3]]),
    egg: (n) => SP.ball('#f3ead2', 14, 472 + (n % 3), 0.5),
    cooler: () => group('cooler', 320, 200, [[SP.rect('cool', 300, 160, C.blue, 18, { R: 14, seed: 475 }), 10, 40], [SP.rect('coollid', 320, 44, C.cream, 16, { R: 12, seed: 476 }), 0, 0]]),
    pod: () => SP.shape('pod', 180, 96, C.cocoa, (c) => ell(c, 90, 48, 88, 44), { R: 18, seed: 480, marks: [[20, 30, 160, 30, 1.6], [12, 50, 168, 50, 1.6], [20, 70, 160, 70, 1.6]], markW: 6 }),
    bar: () => SP.rect('bar', 240, 120, C.choc, 12, { R: 10, seed: 481, marks: [[80, 6, 80, 114, 1.8], [160, 6, 160, 114, 1.8], [6, 60, 234, 60, 1.8]], markW: 6 }),
    leaf: (n) => SP.shape('leaf' + n, 90, 50, n % 2 ? C.leaf : C.leaf2, (c) => { c.beginPath(); c.moveTo(0, 25); c.quadraticCurveTo(45, -15, 90, 25); c.quadraticCurveTo(45, 65, 0, 25); c.fill(); }, { R: 8, seed: 482 + n, marks: [[6, 25, 84, 25, 1.2]], fps: [] }),
    pause: () => group('pause', 110, 120, [[SP.rect('pz', 38, 120, C.cream, 12, { R: 9, seed: 490 }), 0, 0], [SP.rect('pz', 38, 120, C.cream, 12, { R: 9, seed: 490 }), 72, 0]]),
    grain: () => SP.ball('#e6c98a', 30, 491, 0.4),
  };
  // drifting snow on twos (seeded)
  const snow = (t0, n = 24, seed = 77, sp0 = 70) => {
    if (TQ < t0 || REC) return;
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const x0 = r.range(20, 1260), sp = r.range(sp0, sp0 + 50), ph = r.range(0, 600), rr = r.int(6, 10);
      const y = ((TQ - t0) * sp + ph) % 640 - 40, x = x0 + Math.sin(TQ * 1.5 + i) * 12;
      if (TQ - t0 < 0.4 && y > (TQ - t0) * 1600) continue;
      place(ctxG, SP.ball(C.snow, rr, 5 + (i % 3), 0.6), x, y, { shadow: { blur: 4, dx: 2, dy: 3, a: 0.3 } });
    }
  };
  // a counter of pressed clay numbers: vals[k] shows from times[k]
  const counter = (vals, times, cx, y, px, en, cols = C.yellow) => {
    if (REC) { vals.forEach((v, k) => wordC(v, cx, y, px, times[k], null, 'fall', cols, 1 / 24)); if (en != null) rec({ k: 'exit', t: en, mode: 'fall', x: cx, n: 1 }); return; }
    let k = -1; times.forEach((t, i) => { if (TQ + 1e-6 >= t) k = i; });
    if (k >= 0) wordC(vals[k], cx, y, px, times[k], en, 'fall', cols, 1 / 24);
  };
  // thermometer: level is fill height in px (0..300) at the current time
  const thermo = (x, baseY, st, en, level) => {
    obj(SP2.tube(), x, baseY - 330, st, en, { seed: 1 });
    const h = Math.round(level / 10) * 10;
    if (h > 0) obj(SP2.tfill(h), x + 13, baseY - 20 - h, st, en, { seed: 2, shadow: false });
    obj(SP2.bulb(), x - 19, baseY - 66, st, en, { seed: 3 });
  };
  const ice = (spr, x, y, st, en, o = {}) => obj(spr, x, y, st, en, { alpha: o.alpha ?? 0.45, shadow: { blur: 12, dx: 4, dy: 8, a: 0.25 }, ...o });

  // ======================= CHAPTER 0: the hook =======================
  // 1. a frog frozen in a block of ice; 7 MONTHS; no heartbeat, no breathing; you'd be dead
  scene(0, 'hook', () => {
    set('hook', '#3d6f96', '#a9b8c4', { glow: 0.2 });
    obj(SP2.frog(true), 520, TOP - 160, at(0, 'frozen'), X, { ct: [130, 10], seed: 1 });
    ice(SP2.iceblk(360, 230), 465, TOP - 236, at(0, 'solid'), X, { seed: 2, hit: 'stamp', big: true });
    coil('shine', [[495, 300], [520, 290]], C.white, at(0, 'solid') + 0.1, X, { head: false, wdt: 10 });
    word('7', 110, 330, 220, at(0, 'seven'), X, 'fall', C.yellow, 1 / 12, 0, 'impact');
    word('MONTHS', 70, 410, 64, at(0, 'months'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.heart(0.9), 930, 160, at(1, 'heartbeat'), X, { seed: 3 });
    obj(SP.xmark(), 915, 140, at(1, 'heartbeat') + 0.25, X, { rot: 0.1, hit: 'slap', big: true, seed: 4 });
    word('no breath', 880, 360, 52, at(1, 'breathing'), X, 'fall', C.cream, 1 / 24);
    wordC('YOU?', 640, 130, 96, at(2, 'youd'), X, 'fall', [C.coral, C.yellow], 1 / 24);
    obj(SP.xmark(), 760, 50, at(2, 'dead'), X, { rot: -0.1, hit: 'slap', big: true, seed: 5, sx: 0.7, sy: 0.7 });
  });
  // 2. spring: the ice block melts away, the frog wakes and hops off
  scene(PS(3) - 0.15, 'spring', () => {
    set('spring', '#7fbf8a', '#7a9a4a', { glow: 0.25 });
    [0, 1, 2, 3, 4].forEach((i) => obj(SP.ball(i % 2 ? C.pink : C.yellow, 22, 30 + i, 0.4), 120 + i * 250, TOP - 40, at(3, 'spring') + i * 0.06, X, { seed: i, minor: true }));
    const melt = H.clamp((TQ - PS(3)) / 1.0);
    if (melt < 1) ice(SP2.iceblk(360, Math.max(30, Math.round((230 * (1 - step6(PS(3), 1.0, 6))) / 10) * 10)), 465, TOP - Math.max(30, Math.round((230 * (1 - step6(PS(3), 1.0, 6))) / 10) * 10) - 6, PS(3) - 0.1, null, { seed: 2 });
    const hopT = at(3, 'hops'), u = H.clamp((TQ - hopT) / 1.3);
    const hx = 520 + Math.round(u * 6) / 6 * 520, hy = -Math.abs(Math.sin(Math.round(u * 12) / 12 * Math.PI * 2)) * 120;
    obj(SP2.frog(TQ < at(3, 'frog')), hx, TOP - 160 + hy, PS(3) - 0.1, X, { ct: [130, 10], seed: 1, hit: TQ > hopT ? null : null });
    wordC('spring!', 640, 170, 96, at(3, 'spring'), X, 'fall', [C.green, C.yellow, C.pink], 1 / 24, 0, 'ding');
  });
  // 3. the question and the four champions
  scene(PS(4) - 0.15, 'four', () => {
    set('four', '#6c5a8e', '#d6b07a');
    wordC('How do animals', 640, 120, 72, at(4, 'how'), X, 'fall', PAL, 1 / 24);
    wordC('survive freezing?', 640, 210, 80, at(4, 'survive'), X, 'fall', PAL, 1 / 24, 3);
    const st = at(5, 'four');
    obj(SP2.frog(), 40, TOP - 150, st, X, { ct: [120, 10], seed: 1, sx: 0.85, sy: 0.85 });
    obj(SP2.squirrel(), 330, TOP - 220, st + 0.17, X, { ct: [90, 10], seed: 2, sx: 0.85, sy: 0.85 });
    obj(SP2.fish(), 600, TOP - 150, st + 0.33, X, { seed: 3, sx: 0.85, sy: 0.85 });
    obj(SP2.bear(), 930, TOP - 190, st + 0.5, X, { ct: [140, 10], seed: 4, sx: 0.85, sy: 0.85 });
    wordC('4 champions', 640, 600, 60, at(5, 'champions'), X, 'fall', C.yellow, 1 / 24, 0, 'stamp');
    wordC('4 tricks', 640, 670, 52, at(6, 'trick'), X, 'fall', C.cream, 1 / 24);
  });

  // ======================= CHAPTER 1: the wood frog =======================
  // 4. meet the wood frog, as far north as Alaska, it lies down under the leaves and lets the ice come
  scene(PS(7) - 0.15, 'woodfrog', () => {
    set('forest', '#2f4f6e', '#8a6a48', { glow: 0.15 });
    const lie = at(10, 'lies');
    const z = 1 + step6(lie, 1.2, 6) * 0.15;
    cam(z, 640, 480, () => {
      obj(SP2.frog(TQ >= at(11, 'ice')), 500, TOP - 160, at(7, 'wood'), X, { ct: [130, 10], seed: 1 });
      for (let i = 0; i < 9; i++) { const r = H.rng(500 + i); obj(SP2.leaf(i), 420 + r.range(0, 340), TOP - 150 + r.range(-20, 90), lie + i / 12, X, { rot: r.range(-0.8, 0.8), seed: i, minor: true }); }
      if (TQ >= at(11, 'ice')) [0, 1, 2, 3, 4].forEach((i) => obj(SP2.crystal(0.5, i), 410 + i * 90, TOP - 190 + (i % 2) * 70, at(11, 'ice') + i / 12, X, { seed: i, minor: true, hit: i === 0 ? 'ding' : null }));
    });
    snow(at(9, 'winter'), 22, 81);
    word('WOOD FROG', 60, 140, 84, at(7, 'wood'), at(10, 'just') - 0.1, 'fall', [C.frog, C.yellow], 1 / 24);
    word('Alaska', 820, 140, 76, at(8, 'alaska'), X, 'fall', '#cfeeff', 1 / 24, 0, 'stamp');
    word('winter', 860, 230, 56, at(9, 'winter'), X, 'fall', C.cream, 1 / 24);
  });
  // 5. the problem: ice crystals grow inside a cell and rip it apart
  scene(PS(12) - 0.15, 'cellrip', () => {
    set('cell', '#e7c9a0', '#c08a6a', { glow: 0.2 });
    const rip = at(14, 'rip');
    const cellOn = true;
    if (TQ < rip + 0.25) obj(SP2.cell(150), 490, 150, PS(12) + 0.3, null, { seed: 1, ct: [150, 12] });
    else { // torn: two halves knocked apart
      const d = Math.min(1, step6(rip + 0.25, 0.4, 4));
      obj(SP2.cell(150), 490 - d * 120, 150 + d * 30, rip + 0.25, X, { seed: 1, rot: -0.3 * d, sx: 0.6, sy: 0.9, hit: 'slap' });
      obj(SP2.cell(150), 640 + d * 110, 150 + d * 30, rip + 0.25, X, { seed: 2, rot: 0.3 * d, sx: 0.6, sy: 0.9 });
    }
    wordC('ICE CRYSTALS', 640, 110, 84, at(12, 'sharp'), X, 'fall', ICE, 1 / 24);
    const g = H.clamp((TQ - at(13, 'grow')) / 1.2);
    [0, 1, 2].forEach((i) => { const s = 0.4 + Math.round(g * 4) / 4 * 0.7; if (TQ >= at(13, 'grow') && TQ < rip + 0.25) obj(SP2.crystal(Math.round(s * 10) / 10, i), 560 + [0, 80, -60][i], 230 + [0, 70, 90][i], at(13, 'grow') + i * 0.12, null, { seed: i, minor: true }); });
    if (TQ >= rip + 0.25) [0, 1, 2].forEach((i) => obj(SP2.crystal(1.1, i), 560 + [0, 80, -60][i], 230 + [0, 70, 90][i], rip + 0.25, X, { seed: i, shadow: false }));
    word('rip!', 960, 330, 96, at(14, 'rip'), X, 'fall', C.red, 1 / 12, 0, 'impact');
    word('like knives', 900, 450, 50, at(14, 'knives'), X, 'fall', C.cream, 1 / 24);
    if (!cellOn) { /* keep */ }
  });
  // 6. the clever game: ice touches the skin, the liver floods the body with sugar, x10
  scene(PS(15) - 0.15, 'liver', () => {
    set('liver', '#7a4f7f', '#d6b07a');
    wordC('the clever game', 640, 110, 72, at(15, 'clever'), at(17, 'liver') - 0.2, 'fall', C.cream, 1 / 24);
    obj(SP2.frog(), 80, TOP - 160, PS(15) - 0.1, X, { ct: [130, 10], seed: 1, sx: 0.9, sy: 0.9 });
    [0, 1, 2].forEach((i) => obj(SP2.crystal(0.45, i), 70 + i * 70, TOP - 210 - (i % 2) * 30, at(16, 'ice') + i / 12, X, { seed: i, minor: true }));
    word('skin', 120, 600, 52, at(16, 'skin'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.liver(), 470, TOP - 125, at(17, 'liver'), X, { ct: [100, 10], seed: 2 });
    word('liver', 510, 600, 52, at(17, 'liver') + 0.05, X, 'fall', C.cream, 1 / 24);
    const fl = at(17, 'sugar');
    if (TQ >= fl) for (let i = 0; i < 12; i++) {
      const t0 = fl + i * 0.16, u = H.clamp((TQ - t0) / 0.9); if (TQ < t0) continue;
      const r = H.rng(520 + i), ex = 760 + r.range(0, 420), ey = 180 + r.range(0, 260);
      const x = H.lerp(560, ex, Math.round(u * 6) / 6), y = H.lerp(TOP - 140, ey, Math.round(u * 6) / 6) - Math.sin(u * Math.PI) * 80;
      obj(SP2.sugar(i % 3), x, y, t0, X, { seed: i, minor: true, rot: r.range(-0.5, 0.5) });
    }
    word('SUGAR', 820, 140, 90, at(17, 'sugar'), X, 'fall', [C.cream, C.yellow], 1 / 24, 0, 'stamp');
    counter(['x2', 'x5', 'x10'], [at(18, 'up'), at(18, 'times') - 0.25, at(18, 'times')], 980, 580, 120, X, [C.yellow, C.coral, C.yellow]);
  });
  // 7. sugar soaks into every cell like syrup; the ice can only grow outside, in the spaces between (camera pushes in)
  scene(PS(19) - 0.15, 'syrup', () => {
    set('syrup', '#e7c9a0', '#c08a6a', { glow: 0.22 });
    const z = 1 + step6(PS(21), 1.5, 6) * 0.12;
    cam(z, 640, 330, () => {
      const xs = [250, 520, 790], soak = at(19, 'soaks');
      xs.forEach((x, i) => {
        const full = TQ >= soak + i * 0.2;
        obj(SP2.cell(110, full ? '#f2c96e' : C.cell, full ? 's' : ''), x - 110 + 130, 170, PS(19) - 0.1, X, { seed: i, ct: [110, 10], hit: full && TQ < soak + i * 0.2 + 0.1 ? null : null });
        if (TQ >= soak + i * 0.2) obj(SP2.sugar(i), x + 115, 260, soak + i * 0.2, X, { seed: i, minor: true });
      });
      const gt = at(21, 'outside');
      [[482, 150], [752, 150], [482, 330], [752, 330], [1050, 240], [190, 240]].forEach(([x, y], i) => obj(SP2.crystal(0.55, i), x, y, gt + i / 12, X, { seed: i, minor: true, hit: i === 0 ? 'ding' : null }));
    });
    word('syrup', 140, 610, 60, at(20, 'syrup'), X, 'fall', C.yellow, 1 / 24);
    word("won't freeze", 380, 610, 60, at(20, 'wont'), X, 'fall', C.cream, 1 / 24);
    wordC('ice: only in between', 640, 100, 64, at(21, 'ice'), X, 'fall', ICE, 1 / 24);
  });
  // 8. 60% of the frog turns to ice; no heartbeat, no breath
  scene(PS(23) - 0.15, 'sixty', () => {
    set('sixty', '#3d6f96', '#a9b8c4', { glow: 0.18 });
    obj(SP2.frog(true), 120, TOP - 170, PS(23) - 0.1, X, { ct: [130, 10], seed: 1, sx: 1.15, sy: 1.15 });
    // gauge fills to 60%
    obj(SP.rect('gauge', 90, 320, C.cream, 20, { R: 12, seed: 530 }), 560, 150, at(23, 'sixty'), X, { seed: 2 });
    const f = Math.round(step6(at(23, 'sixty'), 1.0, 6) * 6) / 6 * 0.6;
    if (f > 0) obj(SP.rect('gfill' + Math.round(f * 100), 60, Math.round(f * 290), C.iceD, 14, { R: 10, seed: 531, fps: [] }), 575, 150 + 305 - Math.round(f * 290), at(23, 'sixty'), X, { seed: 3, shadow: false });
    word('60%', 700, 330, 160, at(23, 'sixty'), X, 'fall', ICE, 1 / 12, 0, 'impact');
    word('ice', 760, 440, 64, at(23, 'ice'), X, 'fall', C.cream, 1 / 24);
    coil('flat', [[700, 560], [800, 560], [830, 530], [860, 590], [890, 560], [1180, 560]], C.red, at(24, 'heartbeat'), X, { head: false, wdt: 12 });
    obj(SP2.heart(0.6), 1100, 470, at(24, 'heartbeat'), X, { seed: 4, minor: true });
    if (TQ >= at(24, 'heartbeat') + 0.35) coil('flat2', [[700, 640], [1180, 640]], '#9aa0a8', at(24, 'breath'), X, { head: false, wdt: 12 });
  });
  // 9. in Alaska: up to 7 months, calendar pages pop on one by one
  scene(PS(25) - 0.15, 'months', () => {
    set('months', '#5c6f7d', '#8a6a48', { glow: 0.16 });
    snow(PS(25), 18, 91);
    word('Alaska', 70, 130, 72, at(25, 'alaska'), X, 'fall', '#cfeeff', 1 / 24);
    const t0 = at(25, 'stay'), t1 = at(26, 'months');
    for (let i = 0; i < 7; i++) {
      const st = H.lerp(t0, t1, i / 6), x = 120 + i * 150;
      obj(SP2.page(i), x, TOP - 150, st, X, { ct: [60, 8], seed: i, minor: true });
      word(String(i + 1), x + (i + 1 > 9 ? 20 : 40), TOP - 40, 64, st + 1 / 12, X, 'fall', C.ink, 1 / 24);
    }
    obj(SP2.frog(true), 520, 140, PS(25), X, { seed: 9, sx: 0.8, sy: 0.8 });
    ice(SP2.iceblk(260, 150), 490, 120, PS(25) + 0.1, X, { seed: 8 });
    wordC('7 MONTHS', 640, 650, 96, at(26, 'seven'), X, 'fall', [C.yellow, C.cream], 1 / 24, 0, 'impact');
  });
  // 10. spring: the ice melts, the heart thumps back to life
  scene(PS(27) - 0.15, 'thaw', () => {
    set('thaw', '#7fbf8a', '#7a9a4a', { glow: 0.25 });
    const melt = at(27, 'melts'), u = step6(melt, 1.2, 6);
    obj(SP2.frog(TQ < at(28, 'heart')), 150, TOP - 170, PS(27) - 0.1, X, { ct: [130, 10], seed: 1, sx: 1.15, sy: 1.15 });
    if (u < 1) ice(SP2.iceblk(400, Math.max(20, Math.round(250 * (1 - u) / 10) * 10)), 100, TOP - Math.max(20, Math.round(250 * (1 - u) / 10) * 10) - 4, PS(27) - 0.1, null, { seed: 2 });
    if (TQ >= melt) [0, 1, 2, 3].forEach((i) => { const d = ((TQ - melt) * 2 + i * 0.25) % 1; obj(SP.ball(C.ice, 9, 40 + i, 0.8), 160 + i * 90, 260 + d * 230, melt, X, { seed: i, alpha: 0.8, shadow: false }); });
    const hb = at(28, 'beating'), pulse = TQ >= hb ? (Math.floor((TQ - hb) * 12) % 10 < 2 ? 1.18 : 1) : 1;
    obj(SP2.heart(1.6), 820, 200, at(28, 'heart'), X, { seed: 3, sx: pulse, sy: pulse });
    word('thump', 800, 480, 72, at(28, 'beating'), X, 'fall', [C.red, C.coral], 1 / 24, 0, 'thud');
    wordC('spring', 640, 110, 84, at(27, 'spring'), X, 'fall', [C.green, C.yellow, C.pink], 1 / 24);
  });

  // ======================= CHAPTER 2: the Arctic ground squirrel =======================
  // 11. champion #2, the opposite trick
  scene(PS(29) - 0.15, 'champ2', () => {
    set('champ2', '#4f9fae', '#d0703f');
    wordC('#2', 640, 230, 200, at(29, 'second'), X, 'fall', C.yellow, 1 / 12, 0, 'impact');
    wordC('the opposite trick', 640, 360, 72, at(30, 'opposite'), X, 'fall', PAL, 1 / 24);
    coil('flip', curve(420, 450, 640, 560, 860, 450, 16), C.cream, at(30, 'opposite') + 0.3, X, { wdt: 14 });
  });
  // 12. the Arctic ground squirrel: never freezes, even below zero (curls up in its burrow)
  scene(PS(31) - 0.15, 'squirrel', () => {
    set('burrow', '#6b4a36', '#5a3a26', { glow: 0.14, light: [420, 260] });
    const curl = at(32, 'even');
    if (TQ < curl) obj(SP2.squirrel(), 380, TOP - 230, at(31, 'arctic'), null, { ct: [90, 10], seed: 1, sx: 1.05, sy: 1.05 });
    else obj(SP2.squirCurl(), 340, TOP - 160, curl, X, { ct: [110, 10], seed: 2, sx: 1.2, sy: 1.2 });
    word('ARCTIC GROUND', 60, 120, 64, at(31, 'arctic'), X, 'fall', C.cream, 1 / 24);
    word('SQUIRREL', 60, 200, 72, at(31, 'squirrel'), X, 'fall', [C.squir, C.yellow], 1 / 24);
    word('never freezes', 60, 290, 52, at(31, 'never'), X, 'fall', '#cfeeff', 1 / 24);
    const lev = TQ < at(32, 'drops') ? 160 : 160 - step6(at(32, 'drops'), 0.8, 6) * 110;
    thermo(980, TOP + 40, at(32, 'body'), X, lev);
    coil('zero', [[930, TOP - 150], [1080, TOP - 150]], '#cfeeff', at(32, 'zero'), X, { head: false, wdt: 10 });
    word('0°', 1100, TOP - 132, 52, at(32, 'zero'), X, 'fall', '#cfeeff', 1 / 24);
  });
  // 13. almost -3 degrees: the coldest body ever measured in a mammal
  scene(PS(33) - 0.15, 'minus3', () => {
    set('minus3', '#3b5b8a', '#a9a9ad', { glow: 0.16 });
    thermo(160, TOP + 40, PS(33) - 0.1, X, 40);
    coil('zero2', [[110, TOP - 150], [260, TOP - 150]], '#cfeeff', PS(33) - 0.1, X, { head: false, wdt: 10 });
    wordC('-2.9°C', 700, 330, 190, at(33, 'minus'), X, 'fall', ICE, 1 / 12, 0, 'impact');
    wordC('almost -3', 700, 430, 56, at(33, 'three'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.squirCurl(), 600, TOP - 140, at(34, 'mammal') - 0.3, X, { ct: [100, 10], seed: 2 });
    wordC('coldest mammal ever', 700, 120, 64, at(34, 'coldest'), X, 'fall', [C.yellow, C.cream], 1 / 24, 0, 'stamp');
  });
  // 14. supercooling: water needs a seed (a speck of dust or ice) to start freezing
  scene(PS(35) - 0.15, 'seed', () => {
    set('seed', '#c98a3e', '#7a5440', { glow: 0.18 });
    wordC('SUPERCOOLING', 640, 130, 100, at(35, 'supercooling'), X, 'fall', ICE, 1 / 24, 0, 'impact');
    const dropOn = at(36, 'water');
    const frz = at(37, 'ice') + 0.1;
    obj(TQ >= frz ? SP2.drop(C.iceD, 'frz') : SP2.drop('#9fd0ee', 'w'), 300, TOP - 220, dropOn, X, { seed: 1, ct: [70, 10], alpha: 0.85, sx: 1.3, sy: 1.3 });
    obj(SP.ball('#5a4636', 10, 50, 0.5), 345, TOP - 360 + Math.min(1, step6(at(37, 'speck'), 0.5, 4)) * 230, at(37, 'speck'), X, { seed: 2, shadow: false });
    if (TQ >= frz) [0, 1, 2].forEach((i) => obj(SP2.crystal(0.45, i), 300 + i * 40, TOP - 160 + (i % 2) * 40, frz + i / 12, X, { seed: i, minor: true, hit: i === 0 ? 'ding' : null }));
    word('seed', 520, 330, 72, at(36, 'seed'), X, 'fall', C.yellow, 1 / 24);
    coil('seedarrow', [[515, 340], [420, 380]], C.cream, at(36, 'seed') + 0.2, X, { wdt: 12 });
    word('dust', 760, 440, 60, at(37, 'dust'), X, 'fall', C.cream, 1 / 24);
    word('or ice', 920, 440, 60, at(37, 'ice'), X, 'fall', '#cfeeff', 1 / 24);
  });
  // 15. the squirrel's blood is so clean there's nothing to grow on: liquid below freezing
  scene(PS(38) - 0.15, 'clean', () => {
    set('clean', '#4f9fae', '#d0703f');
    obj(SP2.drop(C.red, 'blood'), 320, TOP - 230, at(38, 'blood'), X, { seed: 1, ct: [70, 10], sx: 1.4, sy: 1.4 });
    word('clean', 120, 160, 80, at(38, 'clean'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.crystal(0.6, 1), 700, 200, at(39, 'nothing'), X, { seed: 2 });
    obj(SP.xmark(), 690, 190, at(39, 'grow') - 0.1, X, { rot: 0.1, hit: 'slap', big: true, seed: 3, sx: 0.9, sy: 0.9 });
    wordC('LIQUID', 900, 380, 110, at(40, 'liquid'), X, 'fall', [C.cyan, C.cream], 1 / 24, 0, 'success');
    wordC('below 0°C', 900, 465, 60, at(40, 'below'), X, 'fall', '#cfeeff', 1 / 24);
  });
  // 16. risky: every few weeks it shivers, warms up for a little while, then drops back into the cold
  scene(PS(41) - 0.15, 'shiver', () => {
    set('shiver2', '#6b4a36', '#5a3a26', { glow: 0.14, light: [420, 260] });
    word('risky!', 80, 150, 90, at(41, 'risky'), X, 'fall', C.red, 1 / 24, 0, 'slap');
    const sh = at(42, 'shivers'), w2 = at(43, 'warms'), dr = at(44, 'drops');
    const jit = TQ >= sh && TQ < dr ? ((FRN % 2) ? 5 : -5) : 0;
    obj(SP2.squirCurl(), 380 + jit, TOP - 160, PS(41) - 0.1, X, { ct: [110, 10], seed: 2, sx: 1.2, sy: 1.2 });
    if (TQ >= sh && TQ < dr) [0, 1].forEach((i) => coil('shv' + i, wiggle(330 + i * 330, TOP - 60, 120, 10, 12), C.cream, sh + i * 0.1, dr - 0.1, { head: false, wdt: 10, seed: i }));
    word('every few weeks', 80, 240, 50, at(42, 'every'), X, 'fall', C.cream, 1 / 24);
    let lev = 40; if (TQ >= w2) lev = 40 + step6(w2, 0.8, 6) * 240; if (TQ >= dr) lev = 280 - step6(dr, 0.8, 6) * 240;
    thermo(1000, TOP + 40, PS(41) - 0.1, X, lev);
    word('warm!', 1070, 200, 64, at(43, 'warms'), dr, 'fall', C.coral, 1 / 24);
    word('deep cold', 820, 620, 64, at(44, 'deep'), X, 'fall', '#cfeeff', 1 / 24);
  });

  // ======================= CHAPTER 3: Antarctic fish =======================
  // underwater set: a deep-blue tank with an ice ceiling
  const SEA = () => {
    set('sea', '#24507a', '#3a5f7a', { glow: 0.2, light: [640, 80] });
    if (REC) return;
    const ceil = CLX.ceil || (CLX.ceil = SP.shape('ceil', 1340, 110, '#dff4ff', (c) => { c.beginPath(); c.moveTo(0, 0); c.lineTo(1340, 0); for (let x = 1340; x >= 0; x -= 40) c.lineTo(x, 60 + Math.sin(x * 0.05) * 18 + ((x / 40) % 3) * 10); c.closePath(); c.fill(); }, { R: 14, lump: 1.6, seed: 600, spec: 0.8, fps: [] }));
    place(ctxG, ceil, -30, -20, { alpha: 0.85, shadow: { blur: 16, dx: 0, dy: 10, a: 0.35 } });
  };
  const bubbles = (t0, x0, n = 6, seed = 1) => { if (TQ < t0 || REC) return; for (let i = 0; i < n; i++) { const d = ((TQ - t0) * 0.5 + i / n) % 1; place(ctxG, SP.ball('#bfe6f5', 6 + (i % 3) * 3, 610 + (i % 3), 0.8), x0 + Math.sin(i * 2.1 + TQ) * 14, 470 - d * 360, { alpha: 0.7, shadow: false }); } };
  // 17. dive under the Antarctic ice: the sea is almost -2 degrees, cold enough to freeze most fish
  scene(PS(45) - 0.15, 'dive', () => {
    const dv = step6(PS(45), 0.9, 6);
    if (!REC) { ctxG.fillStyle = '#2a4258'; ctxG.fillRect(0, 0, W0, H0); }
    ctxG.save(); ctxG.translate(0, (1 - dv) * -260);
    SEA();
    bubbles(PS(45), 1100, 7, 1);
    ctxG.restore();
    wordC('ANTARCTICA', 640, 220, 100, at(45, 'antarctic'), X, 'fall', ICE, 1 / 24, 0, 'impact');
    wordC('-1.9°C', 640, 400, 150, at(46, 'minus'), X, 'fall', [C.cyan, C.cream], 1 / 12, 0, 'stamp');
    obj(SP2.fish('#8a8f96', 'n'), 120, 520, at(47, 'fish'), X, { seed: 3, sx: 0.7, sy: 0.7 });
    ice(SP2.iceblk(220, 120), 90, 500, at(47, 'solid'), X, { seed: 4, hit: 'slap', big: true });
    word('most fish', 360, 620, 56, at(47, 'most'), X, 'fall', C.cream, 1 / 24);
  });
  // 18. these fish swim around fine: their blood is full of antifreeze proteins (camera follows the fish into a vessel)
  scene(PS(48) - 0.15, 'swim', () => {
    SEA();
    bubbles(PS(48), 200, 6, 2);
    const sw = Math.round(((TQ - PS(48)) * 90) / 6) * 6;
    obj(SP2.fish(), 180 + sw, 300 + Math.sin(TQ * 2) * 14, at(48, 'fish'), X, { seed: 1, sx: 1.3, sy: 1.3 });
    word('just fine', 160, 140, 72, at(48, 'fine'), at(49, 'antifreeze') - 0.3, 'fall', [C.green, C.cream], 1 / 24, 0, 'success');
    const pt = at(49, 'proteins');
    // a clay blood vessel slides in from the right
    obj(SP.rect('vessel', 520, 170, '#c9584b', 70, { R: 20, seed: 620 }), 720, 330, at(49, 'blood'), X, { seed: 2 });
    for (let i = 0; i < 6; i++) obj(SP2.protein(i), 760 + (i % 3) * 150, 360 + Math.floor(i / 3) * 70, pt + i / 12, X, { seed: i, minor: true });
    word('ANTIFREEZE', 650, 140, 90, at(49, 'antifreeze'), X, 'fall', [C.yellow, C.cream], 1 / 24, 0, 'stamp');
    word('proteins', 820, 230, 60, at(49, 'proteins'), X, 'fall', C.yellow, 1 / 24);
  });
  // 19. an ice crystal sneaks in, the proteins grab it and wrap it so it can't grow (push in)
  scene(PS(50) - 0.15, 'wrap', () => {
    set('vessel', '#c9584b', '#8e3a2c', { glow: 0.22 });
    const z = 1 + step6(at(51, 'grab'), 1.0, 6) * 0.15;
    cam(z, 640, 330, () => {
      const sn = at(50, 'crystal'), u = step6(sn, 0.8, 6);
      obj(SP2.crystal(1.0, 2), 1000 - u * 420, 270, sn, X, { seed: 1, hit: 'ding' });
      const gr = at(51, 'grab');
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * TAU, st = gr + i / 24, v = step6(st, 0.4, 4);
        const r0 = 300, r1 = 70, r = H.lerp(r0, r1, v);
        if (TQ >= st || REC) obj(SP2.protein(i), 610 + Math.cos(a) * r, 310 + Math.sin(a) * r, Math.min(st, PS(50)), X, { seed: i, minor: true, rot: a + Math.PI / 2 });
      }
    });
    word('sneaks in', 900, 560, 60, at(50, 'sneaks'), X, 'fall', C.cream, 1 / 24);
    wordC('grab!', 640, 110, 96, at(51, 'grab'), X, 'fall', C.yellow, 1 / 24, 0, 'stamp');
    word("can't grow", 120, 620, 64, at(52, 'cant'), X, 'fall', [C.cream, C.yellow], 1 / 24, 0, 'success');
  });
  // 20. the icefish: no red cells, its blood is clear like water
  scene(PS(53) - 0.15, 'icefish', () => {
    SEA();
    bubbles(PS(53), 1150, 6, 3);
    obj(SP2.fish(C.icef, 'ice'), 120, 160, at(53, 'icefish'), X, { seed: 1, sx: 1.3, sy: 1.3 });
    word('ICEFISH', 140, 420, 96, at(53, 'icefish'), X, 'fall', [C.icef, C.cyan], 1 / 24, 0, 'impact');
    obj(SP2.drop(C.red, 'red'), 760, TOP - 200, at(55, 'red'), X, { seed: 2, ct: [60, 10] });
    obj(SP.xmark(), 740, TOP - 210, at(55, 'cells'), X, { rot: 0.1, hit: 'slap', big: true, seed: 3 });
    word('red cells', 720, 600, 52, at(55, 'red'), X, 'fall', C.cream, 1 / 24);
    obj(SP2.drop('#e8f6ff', 'clear'), 1000, TOP - 200, at(56, 'clear'), X, { seed: 4, ct: [60, 10], alpha: 0.6 });
    word('clear!', 980, 600, 60, at(56, 'clear'), X, 'fall', '#e8f6ff', 1 / 24, 0, 'success');
  });

  // ======================= CHAPTER 4: the tardigrade =======================
  // 21. the toughest of them all: the water bear, smaller than a grain of sand
  scene(PS(57) - 0.15, 'bear', () => {
    set('mossy', '#5f8a4e', '#8a6a48', { glow: 0.22 });
    wordC('the toughest', 640, 120, 80, at(57, 'toughest'), X, 'fall', [C.yellow, C.coral], 1 / 24);
    obj(SP2.bear(), 300, TOP - 230, at(58, 'tardigrade'), X, { ct: [170, 12], seed: 1, sx: 1.2, sy: 1.2, hit: 'impact', big: true });
    word('TARDIGRADE', 120, 640, 72, at(58, 'tardigrade'), X, 'fall', [C.bear, C.cream], 1 / 24);
    word('water bear', 700, 640, 64, at(58, 'water'), X, 'fall', C.cyan, 1 / 24);
    obj(SP2.grain(), 1000, TOP - 230, at(59, 'grain'), X, { seed: 2, sx: 2.2, sy: 2.2, ct: [70, 10] });
    word('sand grain', 960, 300, 44, at(59, 'sand'), X, 'fall', C.cream, 1 / 24);
    word('< 1 mm', 960, 230, 52, at(59, 'smaller'), X, 'fall', C.yellow, 1 / 24);
  });
  // 22. it dries itself out and curls into a tun: life on pause
  scene(PS(60) - 0.15, 'tun', () => {
    set('dry', '#c98a3e', '#7a5440', { glow: 0.2 });
    const dry = at(60, 'dries'), tun = at(61, 'curls');
    if (TQ < tun) { const s = 1.1 - step6(dry, 0.8, 4) * 0.3; obj(SP2.bear(), 360, TOP - 200 * s - 10, PS(60) - 0.1, null, { ct: [150 * s, 10], seed: 1, sx: s, sy: s }); }
    else obj(SP2.tun(), 440, TOP - 130, tun, X, { ct: [80, 10], seed: 2, sx: 1.2, sy: 1.2, hit: 'pop' });
    if (TQ >= dry && TQ < tun) [0, 1, 2].forEach((i) => coil('vap' + i, wiggle(400 + i * 90, TOP - 240, 90, 10, 12), C.cream, dry + i * 0.1, tun, { head: false, wdt: 10, seed: i }));
    word('dries out', 100, 150, 72, at(60, 'dries'), X, 'fall', C.cream, 1 / 24);
    word('TUN', 820, 300, 150, at(61, 'tun'), X, 'fall', [C.bear, C.yellow, C.coral], 1 / 12, 0, 'impact');
    obj(SP2.pause(), 880, 360, at(62, 'pauses'), X, { seed: 3, ct: [60, 8], hit: 'stamp', big: true });
  });
  // 23. 1983: moss collected in Antarctica, kept in a freezer at -20
  scene(PS(63) - 0.15, 'freezer', () => {
    set('lab', '#4f9fae', '#d0703f');
    word('1983', 80, 200, 150, at(63, 'nineteen'), X, 'fall', C.yellow, 1 / 12, 0, 'impact');
    obj(SP2.moss(), 90, TOP - 110, at(63, 'moss'), X, { ct: [150, 10], seed: 1 });
    word('moss', 140, 300, 60, at(63, 'moss'), X, 'fall', C.green, 1 / 24);
    obj(SP2.freezer(), 760, TOP - 330, at(64, 'freezer'), X, { ct: [150, 12], seed: 2, big: true });
    word('-20°C', 790, 300, 72, at(64, 'minus'), X, 'fall', C.blue, 1 / 24, 0, 'stamp');
    coil('tofrz', curve(420, 380, 560, 280, 720, 360, 14), C.cream, at(64, 'kept'), X, { wdt: 14 });
  });
  // 24. 30 years later: thawed, two water bears wake, one lays 19 eggs
  scene(PS(65) - 0.15, 'thirty', () => {
    set('thirty', '#7fbf8a', '#7a9a4a', { glow: 0.25 });
    wordC('30 YEARS', 640, 160, 130, at(65, 'thirty'), at(66, 'woke') - 0.2, 'fall', [C.yellow, C.cream], 1 / 24, 0, 'impact');
    obj(SP2.moss(), 490, TOP - 110, PS(65) - 0.1, at(66, 'two') - 0.1, { ct: [150, 10], seed: 1, mode: 'left' });
    const wk = at(66, 'woke');
    obj(SP2.bear(), 140, TOP - 200, at(66, 'two'), X, { ct: [150, 10], seed: 2, sx: 0.95, sy: 0.95 });
    obj(SP2.bear(), 540, TOP - 200, at(66, 'two') + 0.17, X, { ct: [150, 10], seed: 3, sx: 0.95, sy: 0.95 });
    word('2 woke up', 300, 130, 80, wk, X, 'fall', C.cream, 1 / 24, 0, 'success');
    const e0 = at(67, 'lay'), e1 = at(67, 'eggs');
    for (let i = 0; i < 19; i++) obj(SP2.egg(i), 890 + (i % 5) * 42, TOP - 36 - Math.floor(i / 5) * 32, H.lerp(e0, e1, i / 18), X, { seed: i, minor: true, shadow: { blur: 4, dx: 2, dy: 3, a: 0.3 } });
    word('19 eggs', 900, 300, 80, e1, X, 'fall', [C.yellow, C.cream], 1 / 24, 0, 'ding');
  });

  // ======================= CHAPTER 5: why it matters =======================
  // 25. why do scientists care? we can't do this yet: a donor heart on ice lasts 4-6 hours
  scene(PS(68) - 0.15, 'organ', () => {
    set('organ', '#7a4f7f', '#d6b07a');
    wordC('why care?', 640, 130, 96, at(68, 'why'), at(70, 'donor') - 0.2, 'fall', PAL, 1 / 24);
    word("we can't... yet", 120, 240, 64, at(69, 'cant'), at(70, 'donor') - 0.2, 'fall', C.cream, 1 / 24);
    obj(SP2.cooler(), 200, TOP - 200, at(70, 'donor'), X, { ct: [170, 12], seed: 1, big: true });
    obj(SP2.heart(0.9), 315, TOP - 285, at(70, 'heart'), X, { seed: 2 });
    [0, 1, 2].forEach((i) => obj(SP2.crystal(0.35, i), 230 + i * 90, TOP - 250 + (i % 2) * 20, at(70, 'ice') + i / 12, X, { seed: i, minor: true }));
    wordC('4-6', 880, 330, 190, at(71, 'four'), X, 'fall', [C.coral, C.yellow, C.coral], 1 / 12, 0, 'impact');
    wordC('HOURS', 880, 440, 80, at(71, 'hours'), X, 'fall', C.cream, 1 / 24);
  });
  // 26. researchers study the frog's sugar and the fish's antifreeze to keep organs alive longer
  scene(PS(72) - 0.15, 'research', () => {
    set('research', '#4f9fae', '#d0703f');
    obj(SP2.frog(), 60, TOP - 150, at(72, 'frogs'), X, { ct: [120, 10], seed: 1, sx: 0.8, sy: 0.8 });
    [0, 1, 2].forEach((i) => obj(SP2.sugar(i), 70 + i * 50, TOP - 220, at(72, 'sugar') + i / 12, X, { seed: i, minor: true }));
    obj(SP2.fish(), 40, 60, at(73, 'fishs'), X, { seed: 2, sx: 0.75, sy: 0.75 });
    [0, 1].forEach((i) => obj(SP2.protein(i), 250 + i * 70, 190, at(73, 'antifreeze') + i / 12, X, { seed: i, minor: true }));
    coil('ar1', curve(330, 320, 500, 260, 620, 330, 14), C.cream, at(74, 'keep'), X, { wdt: 14 });
    obj(SP2.cooler(), 680, TOP - 200, at(74, 'organs'), X, { ct: [170, 12], seed: 3 });
    obj(SP2.heart(0.9), 795, TOP - 285, at(74, 'organs') + 0.1, X, { seed: 4 });
    wordC('much longer', 840, 140, 84, at(74, 'much'), X, 'fall', [C.yellow, C.green], 1 / 24, 0, 'success');
  });
  // 27. recap: four animals, four tricks; which one would you pick?
  scene(PS(75) - 0.15, 'recap', () => {
    set('four', '#6c5a8e', '#d6b07a');
    wordC('4 animals, 4 tricks', 640, 110, 72, at(75, 'four'), X, 'fall', PAL, 1 / 24);
    const xs = [170, 470, 790, 1110], tw = ['sugar', 'supercooling', 'antifreeze', 'drying'];
    obj(SP2.frog(), xs[0] - 110, TOP - 135, at(76, 'sugar'), X, { ct: [100, 10], seed: 1, sx: 0.75, sy: 0.75 });
    obj(SP2.squirCurl(), xs[1] - 85, TOP - 115, at(76, 'supercooling'), X, { ct: [80, 10], seed: 2, sx: 0.75, sy: 0.75 });
    obj(SP2.fish(), xs[2] - 105, TOP - 115, at(76, 'antifreeze'), X, { seed: 3, sx: 0.75, sy: 0.75 });
    obj(SP2.tun(), xs[3] - 60, TOP - 100, at(76, 'drying'), X, { ct: [60, 10], seed: 4, sx: 0.8, sy: 0.8 });
    const lab = ['sugar', 'supercool', 'antifreeze', 'dry out'];
    lab.forEach((l, i) => wordC(l, xs[i], 600, 44, at(76, tw[i]), X, 'fall', [C.yellow, C.cyan, C.yellow, C.bear][i], 1 / 24));
    wordC('Your pick?', 640, 300, 110, at(77, 'which'), X, 'fall', [C.coral, C.yellow], 1 / 24, 0, 'ding');
  });
  // 28. next time: how did a bitter bean become chocolate?
  scene(PS(78) - 0.15, 'next', () => {
    set('next', '#7a4f2f', '#d6b07a', { glow: 0.24 });
    word('NEXT TIME', 80, 150, 80, at(78, 'next'), null, 'fall', C.yellow, 1 / 24);
    obj(SP2.pod(), 160, TOP - 100, at(78, 'bitter'), null, { ct: [90, 10], seed: 1 });
    word('bitter bean', 120, 600, 52, at(78, 'bean'), null, 'fall', C.cream, 1 / 24);
    coil('tochoc', curve(400, 420, 560, 330, 720, 420, 14), C.cream, at(79, 'become'), null, { wdt: 14 });
    obj(SP2.bar(), 760, TOP - 125, at(79, 'chocolate'), null, { ct: [130, 10], seed: 2, big: true });
    wordC('chocolate?', 880, 300, 96, at(79, 'chocolate'), null, 'fall', [C.cocoa, C.cream], 1 / 24, 0, 'end');
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
    // ice forming: crackles where crystals spread
    [[at(0, 'solid'), 0.6], [at(11, 'ice'), 0.6], [at(13, 'grow'), 1.2], [at(21, 'outside'), 0.6], [at(23, 'sixty'), 1.0], [at(37, 'ice') + 0.1, 0.5], [at(47, 'solid'), 0.5]].forEach(([t, d]) => crackle(q(t), d));
    // melting: drips
    [at(3, 'spring') - 0.3, at(27, 'melts')].forEach((t0) => { for (let i = 0; i < 8; i++) k.play('blip', q(t0) + i * 0.17, { f: ['A6', 'E6', 'C7', 'G6'][i % 4], type: 'sine', dur: 0.06, gain: 0.5, minor: true }); });
    // frog hops away
    { const h0 = at(3, 'hops'); for (let i = 0; i < 2; i++) { k.play('swish', q(h0 + i * 0.65), { dur: 0.2, gain: 0.4, pan: 0.2 + i * 0.3 }); plop(q(h0 + 0.33 + i * 0.65), 0.7, 120, 0.3 + i * 0.3, false); } }
    // heartbeat returns
    { const hb = at(28, 'beating'); for (let t = hb; t < PS(29) - 0.4; t += 10 / 12) { k.play('thud', q(t), { f: 70, gain: 0.55 }); k.play('thud', q(t) + 0.2, { f: 60, gain: 0.35 }); } }
    // squirrel shiver: chattering
    { const a = at(42, 'shivers'), b = at(44, 'drops'); for (let t = a; t < b; t += 1 / 12) k.noise(q(t), { dur: 0.03, filter: 'bandpass', f: 900, q: 3, gain: 0.08, minor: true }); }
    // the dive underwater and bubbles
    k.play('whoosh', q(PS(45)), { dur: 0.9, gain: 0.7, top: 1200 });
    [PS(45), PS(48), PS(53)].forEach((t0, j) => { const r = H.rng(700 + j); for (let i = 0; i < 6; i++) k.play('pop', q(t0 + 0.4 + i * r.range(0.3, 0.7)), { f: r.range(500, 900), gain: 0.25, minor: true }); });
    k.play('riser', q(at(51, 'grab')) - 0.6, { dur: 0.6, gain: 0.35 });
    k.play('sparkle', q(at(66, 'woke')) + 0.1, { n: 6, gain: 0.5 });
    // stop-motion cuts: a soft table bump on each new set
    SC.slice(1).forEach((s) => squelch(q(s.s), 0.35, 0, 0.1));
  }

  function thumbnail(ctx, W, H_) {
    ctxG = ctx; TQ = 3; FRN = 36; X = 999;
    set('hook', '#3d6f96', '#a9b8c4', { glow: 0.2 });
    obj(SP2.frog(true), 120, TOP - 210, 0, null, { ct: [160, 12], seed: 1, sx: 1.4, sy: 1.4 });
    ice(SP2.iceblk(430, 300), 40, TOP - 300, 0, null, { seed: 2 });
    [0, 1, 2].forEach((i) => obj(SP2.crystal(0.6, i), 70 + i * 140, 160 + (i % 2) * 60, 0, null, { seed: i, shadow: false }));
    word('STILL', 600, 250, 170, 0, null, 'fall', ICE, 0);
    word('ALIVE?', 580, 440, 170, 0, null, 'fall', [C.yellow, C.coral], 0);
    finish(ctx);
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0; window.SCENES = SC;
})();
