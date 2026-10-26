// ================= Kawaii Anime, 16:9 1280x720: "What happens to your food after you swallow it?" =================
// Long explainer (3:37), 6 chapters, 28 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A chibi onigiri ("the bite") rides the whole digestive tract; organs, enzymes and microbes are kawaii characters.
// Scene changes: star / heart iris wipes between chapters, slides and pop-cuts inside a chapter. Everything on twos.
(function () {
  const W0 = 1280, H0 = 720, TAU = Math.PI * 2;
  // ---------- voiceover phrases (phrases.json, Kokoro am_michael) ----------
  const PH = [
    {"s":0.25,"e":2.04,"text":"What actually happens to your food,","words":[["what",0.25],["actually",0.5],["happens",0.99],["to",1.42],["your",1.54],["food",1.79]]},
    {"s":2.34,"e":3.48,"text":"after you swallow it?","words":[["after",2.34],["you",2.67],["swallow",2.87],["it",3.34]]},
    {"s":4.03,"e":6.21,"text":"It's one of the longest trips in your body.","words":[["its",4.03],["one",4.22],["of",4.42],["the",4.56],["longest",4.75],["trips",5.22],["in",5.55],["your",5.68],["body",5.95]]},
    {"s":6.76,"e":8.18,"text":"And for most of history,","words":[["and",6.76],["for",6.98],["most",7.21],["of",7.51],["history",7.66]]},
    {"s":8.48,"e":10.44,"text":"nobody really knew how it worked.","words":[["nobody",8.48],["really",8.92],["knew",9.35],["how",9.64],["it",9.86],["worked",10.01]]},
    {"s":10.99,"e":13.13,"text":"Many ancient doctors thought the stomach","words":[["many",10.99],["ancient",11.24],["doctors",11.66],["thought",12.09],["the",12.52],["stomach",12.7]]},
    {"s":13.43,"e":15.39,"text":"simply cooked your food, like a pot.","words":[["simply",13.43],["cooked",13.85],["your",14.27],["food",14.55],["like",14.83],["a",15.11],["pot",15.18]]},
    {"s":15.94,"e":17.81,"text":"Then, in the seventeen hundreds,","words":[["then",15.94],["in",16.23],["the",16.37],["seventeen",16.59],["hundreds",17.23]]},
    {"s":18.11,"e":19.65,"text":"scientists fed animals","words":[["scientists",18.11],["fed",18.88],["animals",19.11]]},
    {"s":19.95,"e":22.3,"text":"food sealed inside little metal tubes.","words":[["food",19.95],["sealed",20.24],["inside",20.68],["little",21.12],["metal",21.56],["tubes",21.93]]},
    {"s":22.85,"e":24.29,"text":"The food couldn't be squished,","words":[["the",22.85],["food",23.03],["couldnt",23.27],["be",23.69],["squished",23.81]]},
    {"s":24.59,"e":25.89,"text":"but it still dissolved.","words":[["but",24.59],["it",24.8],["still",24.93],["dissolved",25.27]]},
    {"s":26.44,"e":29.1,"text":"Italian scientist Lazzaro Spallanzani","words":[["italian",26.44],["scientist",26.98],["lazzaro",27.69],["spallanzani",28.24]]},
    {"s":29.4,"e":31.01,"text":"even tried it on himself,","words":[["even",29.4],["tried",29.72],["it",30.12],["on",30.28],["himself",30.44]]},
    {"s":31.31,"e":33.56,"text":"swallowing tiny linen bags of food.","words":[["swallowing",31.31],["tiny",32.09],["linen",32.4],["bags",32.78],["of",33.1],["food",33.25]]},
    {"s":34.11,"e":35.62,"text":"The answer was a liquid.","words":[["the",34.11],["answer",34.35],["was",34.83],["a",35.07],["liquid",35.15]]},
    {"s":36.17,"e":37.84,"text":"He called it gastric juice.","words":[["he",36.17],["called",36.33],["it",36.78],["gastric",36.93],["juice",37.46]]},
    {"s":38.39,"e":39.88,"text":"So let's follow one bite,","words":[["so",38.39],["lets",38.54],["follow",38.86],["one",39.33],["bite",39.57]]},
    {"s":40.18,"e":41.26,"text":"all the way through.","words":[["all",40.18],["the",40.38],["way",40.58],["through",40.78]]},
    {"s":41.81,"e":43.12,"text":"Step one: your mouth.","words":[["step",41.81],["one",42.13],["your",42.38],["mouth",42.71]]},
    {"s":43.67,"e":45.57,"text":"Your teeth crush the bite into mush,","words":[["your",43.67],["teeth",43.93],["crush",44.26],["the",44.58],["bite",44.78],["into",45.04],["mush",45.31]]},
    {"s":45.87,"e":47.12,"text":"and saliva soaks it.","words":[["and",45.87],["saliva",46.1],["soaks",46.57],["it",46.96]]},
    {"s":47.67,"e":50.19,"text":"Saliva holds an enzyme called amylase,","words":[["saliva",47.67],["holds",48.14],["an",48.53],["enzyme",48.69],["called",49.16],["amylase",49.64]]},
    {"s":50.49,"e":52.52,"text":"that starts turning starch into sugar,","words":[["that",50.49],["starts",50.74],["turning",51.12],["starch",51.57],["into",51.95],["sugar",52.2]]},
    {"s":52.82,"e":54.19,"text":"before you even swallow.","words":[["before",52.82],["you",53.23],["even",53.43],["swallow",53.71]]},
    {"s":54.74,"e":56.71,"text":"Then your tongue pushes the food back,","words":[["then",54.74],["your",54.99],["tongue",55.25],["pushes",55.63],["the",56.01],["food",56.2],["back",56.45]]},
    {"s":57.01,"e":59.03,"text":"and a tiny flap, the epiglottis,","words":[["and",57.01],["a",57.25],["tiny",57.33],["flap",57.66],["the",57.98],["epiglottis",58.22]]},
    {"s":59.33,"e":61.22,"text":"folds down over your windpipe,","words":[["folds",59.33],["down",59.71],["over",60.01],["your",60.31],["windpipe",60.62]]},
    {"s":61.52,"e":63.27,"text":"so nothing goes the wrong way.","words":[["so",61.52],["nothing",61.67],["goes",62.18],["the",62.47],["wrong",62.69],["way",63.06]]},
    {"s":63.82,"e":65.93,"text":"Now the food enters the esophagus,","words":[["now",63.82],["the",64.05],["food",64.28],["enters",64.58],["the",65.03],["esophagus",65.25]]},
    {"s":66.23,"e":69.19,"text":"a muscle tube about twenty-five centimeters long.","words":[["a",66.23],["muscle",66.3],["tube",66.73],["about",67.02],["twentyfive",67.38],["centimeters",68.11],["long",68.9]]},
    {"s":69.74,"e":70.95,"text":"It doesn't just fall.","words":[["it",69.74],["doesnt",69.89],["just",70.35],["fall",70.65]]},
    {"s":71.5,"e":73.48,"text":"Rings of muscle squeeze behind it,","words":[["rings",71.5],["of",71.85],["muscle",71.99],["squeeze",72.42],["behind",72.91],["it",73.34]]},
    {"s":73.78,"e":75.36,"text":"like toothpaste in a tube.","words":[["like",73.78],["toothpaste",74.08],["in",74.83],["a",74.98],["tube",75.06]]},
    {"s":75.91,"e":77.42,"text":"That's called peristalsis.","words":[["thats",75.91],["called",76.25],["peristalsis",76.67]]},
    {"s":77.97,"e":79.94,"text":"The trip takes about nine seconds,","words":[["the",77.97],["trip",78.18],["takes",78.46],["about",78.82],["nine",79.17],["seconds",79.45]]},
    {"s":80.24,"e":82.05,"text":"and it works even upside down.","words":[["and",80.24],["it",80.47],["works",80.62],["even",80.99],["upside",81.3],["down",81.75]]},
    {"s":82.6,"e":83.92,"text":"Next stop, the stomach.","words":[["next",82.6],["stop",82.89],["the",83.19],["stomach",83.41]]},
    {"s":84.47,"e":86.11,"text":"It's a stretchy bag of muscle,","words":[["its",84.47],["a",84.69],["stretchy",84.76],["bag",85.32],["of",85.54],["muscle",85.68]]},
    {"s":86.41,"e":88.23,"text":"filled with hydrochloric acid.","words":[["filled",86.41],["with",86.83],["hydrochloric",87.11],["acid",87.95]]},
    {"s":88.78,"e":91.43,"text":"Stomach acid can drop to around pH two,","words":[["stomach",88.78],["acid",89.38],["can",89.72],["drop",89.98],["to",90.32],["around",90.49],["ph",91.0],["two",91.17]]},
    {"s":91.73,"e":93.62,"text":"about as sour as lemon juice.","words":[["about",91.73],["as",92.14],["sour",92.3],["as",92.63],["lemon",92.8],["juice",93.21]]},
    {"s":94.17,"e":95.82,"text":"It kills a lot of germs,","words":[["it",94.17],["kills",94.36],["a",94.81],["lot",94.91],["of",95.18],["germs",95.36]]},
    {"s":96.12,"e":98.0,"text":"and helps an enzyme called pepsin","words":[["and",96.12],["helps",96.32],["an",96.66],["enzyme",96.79],["called",97.19],["pepsin",97.59]]},
    {"s":98.3,"e":99.84,"text":"start chopping up protein.","words":[["start",98.3],["chopping",98.65],["up",99.21],["protein",99.35]]},
    {"s":100.39,"e":101.89,"text":"About three times a minute,","words":[["about",100.39],["three",100.73],["times",101.07],["a",101.41],["minute",101.48]]},
    {"s":102.19,"e":104.19,"text":"the stomach walls squeeze and churn,","words":[["the",102.19],["stomach",102.39],["walls",102.86],["squeeze",103.19],["and",103.66],["churn",103.86]]},
    {"s":104.49,"e":107.18,"text":"mixing everything into a thick soup called chyme.","words":[["mixing",104.49],["everything",104.89],["into",105.54],["a",105.81],["thick",105.87],["soup",106.2],["called",106.46],["chyme",106.86]]},
    {"s":107.73,"e":109.62,"text":"That can take two to four hours.","words":[["that",107.73],["can",108.04],["take",108.26],["two",108.57],["to",108.79],["four",108.94],["hours",109.25]]},
    {"s":110.17,"e":112.65,"text":"So why doesn't your stomach digest itself?","words":[["so",110.17],["why",110.32],["doesnt",110.54],["your",110.97],["stomach",111.26],["digest",111.77],["itself",112.21]]},
    {"s":113.2,"e":115.46,"text":"Its lining makes a thick coat of mucus,","words":[["its",113.2],["lining",113.42],["makes",113.85],["a",114.22],["thick",114.29],["coat",114.66],["of",114.95],["mucus",115.09]]},
    {"s":115.76,"e":117.97,"text":"plus bicarbonate to calm the acid.","words":[["plus",115.76],["bicarbonate",116.08],["to",116.94],["calm",117.1],["the",117.42],["acid",117.65]]},
    {"s":118.52,"e":121.56,"text":"And the lining cells get replaced every few days.","words":[["and",118.52],["the",118.75],["lining",118.98],["cells",119.43],["get",119.81],["replaced",120.04],["every",120.65],["few",121.03],["days",121.25]]},
    {"s":122.11,"e":123.71,"text":"Then a little valve opens,","words":[["then",122.11],["a",122.41],["little",122.49],["valve",122.95],["opens",123.33]]},
    {"s":124.01,"e":126.5,"text":"and lets the chyme out, a squirt at a time,","words":[["and",124.01],["lets",124.25],["the",124.56],["chyme",124.79],["out",125.18],["a",125.41],["squirt",125.49],["at",125.96],["a",126.11],["time",126.19]]},
    {"s":126.8,"e":128.32,"text":"into the small intestine.","words":[["into",126.8],["the",127.09],["small",127.31],["intestine",127.67]]},
    {"s":128.87,"e":131.16,"text":"This is where the real magic happens.","words":[["this",128.87],["is",129.17],["where",129.32],["the",129.71],["real",129.94],["magic",130.24],["happens",130.62]]},
    {"s":131.71,"e":133.33,"text":"It's about five meters long,","words":[["its",131.71],["about",131.93],["five",132.3],["meters",132.6],["long",133.04]]},
    {"s":133.63,"e":135.26,"text":"coiled up inside your belly.","words":[["coiled",133.63],["up",134.06],["inside",134.2],["your",134.62],["belly",134.91]]},
    {"s":135.81,"e":137.24,"text":"Your liver sends in bile,","words":[["your",135.81],["liver",136.1],["sends",136.45],["in",136.81],["bile",136.95]]},
    {"s":137.54,"e":139.8,"text":"which breaks fat into tiny droplets.","words":[["which",137.54],["breaks",137.91],["fat",138.37],["into",138.59],["tiny",138.9],["droplets",139.2]]},
    {"s":140.35,"e":142.34,"text":"Your pancreas adds more enzymes,","words":[["your",140.35],["pancreas",140.65],["adds",141.24],["more",141.53],["enzymes",141.83]]},
    {"s":142.64,"e":144.34,"text":"and neutralizes the acid.","words":[["and",142.64],["neutralizes",142.89],["the",143.77],["acid",144.02]]},
    {"s":144.89,"e":148.11,"text":"The walls are covered in millions of tiny fingers,","words":[["the",144.89],["walls",145.12],["are",145.52],["covered",145.75],["in",146.3],["millions",146.46],["of",147.09],["tiny",147.25],["fingers",147.56]]},
    {"s":148.41,"e":149.32,"text":"called villi,","words":[["called",148.41],["villi",148.91]]},
    {"s":149.62,"e":152.77,"text":"and those are covered in even tinier microvilli.","words":[["and",149.62],["those",149.86],["are",150.25],["covered",150.49],["in",151.04],["even",151.2],["tinier",151.51],["microvilli",151.99]]},
    {"s":153.32,"e":156.3,"text":"Spread flat, scientists estimate your gut lining","words":[["spread",153.32],["flat",153.76],["scientists",154.05],["estimate",154.77],["your",155.35],["gut",155.65],["lining",155.86]]},
    {"s":156.6,"e":158.85,"text":"covers about thirty-two square meters.","words":[["covers",156.6],["about",157.02],["thirtytwo",157.37],["square",158.01],["meters",158.43]]},
    {"s":159.4,"e":161.05,"text":"That's half a badminton court!","words":[["thats",159.4],["half",159.74],["a",160.02],["badminton",160.09],["court",160.7]]},
    {"s":161.6,"e":163.69,"text":"Old textbooks said a whole tennis court,","words":[["old",161.6],["textbooks",161.79],["said",162.36],["a",162.61],["whole",162.68],["tennis",162.99],["court",163.37]]},
    {"s":163.99,"e":165.76,"text":"but half a court is still huge.","words":[["but",163.99],["half",164.21],["a",164.51],["court",164.58],["is",164.95],["still",165.1],["huge",165.47]]},
    {"s":166.31,"e":168.21,"text":"Right here, most of the nutrients","words":[["right",166.31],["here",166.66],["most",166.94],["of",167.23],["the",167.37],["nutrients",167.58]]},
    {"s":168.51,"e":169.78,"text":"slip into your blood.","words":[["slip",168.51],["into",168.81],["your",169.11],["blood",169.41]]},
    {"s":170.33,"e":172.85,"text":"What's left moves on to the large intestine.","words":[["whats",170.33],["left",170.69],["moves",170.98],["on",171.34],["to",171.48],["the",171.63],["large",171.84],["intestine",172.2]]},
    {"s":173.4,"e":176.57,"text":"It's wider, but only about one and a half meters long.","words":[["its",173.4],["wider",173.64],["but",174.02],["only",174.25],["about",174.56],["one",174.95],["and",175.18],["a",175.41],["half",175.49],["meters",175.8],["long",176.26]]},
    {"s":177.12,"e":179.18,"text":"Its main job is soaking up water.","words":[["its",177.12],["main",177.36],["job",177.68],["is",177.91],["soaking",178.07],["up",178.62],["water",178.78]]},
    {"s":179.73,"e":181.95,"text":"And it's home to trillions of bacteria.","words":[["and",179.73],["its",179.94],["home",180.16],["to",180.45],["trillions",180.59],["of",181.23],["bacteria",181.38]]},
    {"s":182.5,"e":185.7,"text":"Scientists estimate about thirty-eight trillion live in you,","words":[["scientists",182.5],["estimate",183.13],["about",183.63],["thirtyeight",183.95],["trillion",184.64],["live",185.14],["in",185.39],["you",185.52]]},
    {"s":186.0,"e":187.23,"text":"mostly right here.","words":[["mostly",186.0],["right",186.49],["here",186.9]]},
    {"s":187.78,"e":189.88,"text":"They munch the fiber you can't digest,","words":[["they",187.78],["munch",188.06],["the",188.41],["fiber",188.62],["you",188.97],["cant",189.18],["digest",189.46]]},
    {"s":190.18,"e":192.05,"text":"and make some vitamins in return.","words":[["and",190.18],["make",190.38],["some",190.66],["vitamins",190.94],["in",191.49],["return",191.63]]},
    {"s":192.6,"e":194.62,"text":"So how long does the whole trip take?","words":[["so",192.6],["how",192.74],["long",192.95],["does",193.23],["the",193.5],["whole",193.71],["trip",194.06],["take",194.34]]},
    {"s":195.17,"e":198.2,"text":"About six hours through the stomach and small intestine,","words":[["about",195.17],["six",195.49],["hours",195.69],["through",196.01],["the",196.46],["stomach",196.66],["and",197.11],["small",197.3],["intestine",197.62]]},
    {"s":198.5,"e":201.55,"text":"and up to another two days in the large intestine.","words":[["and",198.5],["up",198.73],["to",198.88],["another",199.04],["two",199.57],["days",199.8],["in",200.1],["the",200.25],["large",200.48],["intestine",200.86]]},
    {"s":202.1,"e":203.89,"text":"Whatever your body can't use,","words":[["whatever",202.1],["your",202.72],["body",203.03],["cant",203.34],["use",203.66]]},
    {"s":204.19,"e":205.25,"text":"leaves at the end.","words":[["leaves",204.19],["at",204.64],["the",204.79],["end",205.02]]},
    {"s":205.8,"e":206.66,"text":"But the rest?","words":[["but",205.8],["the",206.06],["rest",206.32]]},
    {"s":207.21,"e":208.95,"text":"That bite became your energy,","words":[["that",207.21],["bite",207.5],["became",207.79],["your",208.22],["energy",208.51]]},
    {"s":209.25,"e":210.14,"text":"your muscles,","words":[["your",209.25],["muscles",209.57]]},
    {"s":210.44,"e":212.51,"text":"even the thoughts you're having right now.","words":[["even",210.44],["the",210.68],["thoughts",210.87],["youre",211.35],["having",211.66],["right",212.02],["now",212.33]]},
    {"s":213.06,"e":214.43,"text":"So which food do you think","words":[["so",213.06],["which",213.19],["food",213.51],["do",213.78],["you",213.91],["think",214.1]]},
    {"s":214.73,"e":216.1,"text":"takes the longest trip?","words":[["takes",214.73],["the",215.09],["longest",215.3],["trip",215.81]]}
  ];
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  // time of a spoken word (visuals lead it by 0.08 s)
  const T = (i, w, lead = 0.08) => { const f = PH[i].words.find((x) => x[0].startsWith(w)); if (!f) { console.warn('no word', i, w); return PH[i].s; } return f[1] - lead; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);

  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'ごっくんもぐもぐキラキラすごいバイバイ';
  const C = {
    plum: '#5a3659', dark: '#3b2342',
    pink: '#ffbfd2', pinkS: '#f597b7', pinkD: '#ff6f9c',
    mint: '#bff0dc', mintS: '#86d6b9', mintD: '#3fb98e',
    butter: '#fff0a6', butterS: '#f5d06a', butterD: '#ffd84d',
    lav: '#ded2ff', lavS: '#b7a2f2', lavD: '#8f74e6',
    sky: '#c6e7ff', skyS: '#8cc6f2', skyD: '#5aa9ea',
    cream: '#fffaf4', creamS: '#e4d8f6',
    peach: '#ffe2cf', peachS: '#f2b996', brown: '#dca07a', brownS: '#b97b5a',
    red: '#ff6b8a', white: '#ffffff', nori: '#3d5a52', noriS: '#2c443d',
    liver: '#f59a9a', liverS: '#dd7480', bile: '#b6e57a', bileS: '#8cc95a',
  };
  const TH = {
    pink: { base: '#ffe7ef', dot: '#ffd3e1', acc: '#fff3b0', kind: 'dots' },
    mint: { base: '#ddf6ec', dot: '#c4ecdb', acc: '#fff1a0', kind: 'stars' },
    lav: { base: '#efe8ff', dot: '#e0d4ff', acc: '#ffd0e0', kind: 'clouds' },
    butter: { base: '#fff6d8', dot: '#ffeab0', acc: '#ffc4d6', kind: 'hearts' },
    sky: { base: '#e3f3ff', dot: '#cfe8fb', acc: '#ffd6e4', kind: 'stars' },
  };
  const FONT = '"Fredoka"', KANA = '"Zen Maru Gothic","Noto Sans CJK JP","Noto Sans JP",sans-serif';
  const q15 = (t) => Math.floor(t * 15 + 1e-6) / 15; // anime "on twos" at 30 fps

  // ---------- paths ----------
  const scaleOf = (ctx) => { const m = ctx.getTransform(); return Math.hypot(m.a, m.b) || 1; };
  const rrP = (x, y, w, h, r) => { const p = new Path2D(); p.roundRect(x, y, w, h, r); return p; };
  const ellP = (x, y, rx, ry, rot = 0) => { const p = new Path2D(); p.ellipse(x, y, Math.max(rx, 0.01), Math.max(ry, 0.01), rot, 0, TAU); return p; };
  function roundPoly(pts, rad) {
    const p = new Path2D(), n = pts.length, mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const s = mid(pts[n - 1], pts[0]); p.moveTo(s[0], s[1]);
    for (let i = 0; i < n; i++) { const c = pts[i], m = mid(c, pts[(i + 1) % n]); p.arcTo(c[0], c[1], m[0], m[1], rad); }
    p.closePath(); return p;
  }
  const starPts = (cx, cy, R, r, n = 5, rot = -Math.PI / 2) => {
    const out = [];
    for (let i = 0; i < n * 2; i++) { const a = rot + i * Math.PI / n, rr = i % 2 ? r : R; out.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]); }
    return out;
  };
  const starP = (cx, cy, R, rot = -Math.PI / 2, ratio = 0.5, n = 5) => roundPoly(starPts(cx, cy, R, R * ratio, n, rot), R * 0.12);
  function heartP(cx, cy, s, rot = 0) {
    const p = new Path2D(), m = new DOMMatrix().translate(cx, cy).rotate(rot * 180 / Math.PI).scale(s, s), q = new Path2D();
    q.moveTo(0, 0.9);
    q.bezierCurveTo(-0.15, 0.75, -1, 0.3, -1, -0.25);
    q.bezierCurveTo(-1, -0.78, -0.35, -0.98, 0, -0.5);
    q.bezierCurveTo(0.35, -0.98, 1, -0.78, 1, -0.25);
    q.bezierCurveTo(1, 0.3, 0.15, 0.75, 0, 0.9);
    q.closePath(); p.addPath(q, m); return p;
  }
  function spark4P(cx, cy, R, rot = 0) {
    const p = new Path2D(), k = R * 0.16, pts = [[0, -R], [R, 0], [0, R], [-R, 0]], cs = [[k, -k], [k, k], [-k, k], [-k, -k]];
    const tr = ([x, y]) => [cx + x * Math.cos(rot) - y * Math.sin(rot), cy + x * Math.sin(rot) + y * Math.cos(rot)];
    const s0 = tr(pts[0]); p.moveTo(s0[0], s0[1]);
    for (let i = 0; i < 4; i++) { const c = tr(cs[i]), e = tr(pts[(i + 1) % 4]); p.quadraticCurveTo(c[0], c[1], e[0], e[1]); }
    p.closePath(); return p;
  }
  function cloudP(cx, cy, s) {
    const p = new Path2D();
    [[-70, 10, 42], [-30, -18, 52], [22, -26, 58], [70, 4, 44], [30, 22, 46], [-22, 24, 44]].forEach(([x, y, r]) => { p.moveTo(cx + (x + r) * s, cy + y * s); p.arc(cx + x * s, cy + y * s, r * s, 0, TAU); });
    return p;
  }
  const hexP = (cx, cy, r, rot = 0) => roundPoly(Array.from({ length: 6 }, (_, i) => [cx + Math.cos(rot + i * Math.PI / 3) * r, cy + Math.sin(rot + i * Math.PI / 3) * r]), r * 0.25);

  // ---------- inking ----------
  function ol(ctx, p, w = 4.5, col = C.plum) { ctx.save(); ctx.lineWidth = w / scaleOf(ctx); ctx.strokeStyle = col; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.stroke(p); ctx.restore(); }
  function cel(ctx, p, base, shade, dx = -8, dy = -8, w = 4.5) {
    ctx.save(); ctx.fillStyle = shade; ctx.fill(p); ctx.clip(p); ctx.translate(dx, dy); ctx.fillStyle = base; ctx.fill(p); ctx.restore();
    if (w) ol(ctx, p, w);
  }
  function union(ctx, paths, fill, w = 4.5) {
    ctx.save(); ctx.lineWidth = (2 * w) / scaleOf(ctx); ctx.strokeStyle = C.plum; ctx.lineJoin = 'round';
    paths.forEach((p) => ctx.stroke(p)); ctx.fillStyle = fill; paths.forEach((p) => ctx.fill(p)); ctx.restore();
  }
  function shine(ctx, x, y, rx, ry, rot = -0.6, a = 0.95) { ctx.save(); ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill(ellP(x, y, rx, ry, rot)); ctx.restore(); }
  // a soft tube: plum outline, flat fill, a highlight stripe (pts = polyline)
  function tube(ctx, pts, w, fill, shade, hl = true) {
    if (pts.length < 2) return;
    const path = new Path2D(); path.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) path.lineTo(pts[i][0], pts[i][1]);
    ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.strokeStyle = C.plum; ctx.lineWidth = w + 9; ctx.stroke(path);
    ctx.strokeStyle = shade || fill; ctx.lineWidth = w; ctx.stroke(path);
    ctx.strokeStyle = fill; ctx.lineWidth = w * 0.72; ctx.translate(-w * 0.08, -w * 0.08); ctx.stroke(path);
    if (hl) { ctx.strokeStyle = 'rgba(255,255,255,0.7)'; ctx.lineWidth = Math.max(3, w * 0.12); ctx.translate(-w * 0.14, -w * 0.14); ctx.stroke(path); }
    ctx.restore();
  }
  const partial = (pts, u) => { if (u >= 1) return pts; if (u <= 0) return []; const L = plen(pts) * u, out = [pts[0]]; let acc = 0; for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); if (acc + l >= L) { const k = (L - acc) / l; out.push([pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * k, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * k]); return out; } acc += l; out.push(pts[i]); } return out; };

  // ---------- motion grammar ----------
  function pop(t, t0, k = 1) {
    const u = t - t0;
    if (u <= 0) return { s: 0, sx: 0, sy: 0, u };
    const s = 1 - Math.exp(-9 * u) * Math.cos(18 * u), q = Math.exp(-8 * u) * Math.sin(18 * u) * 0.28 * k;
    return { s, sx: s * (1 + q), sy: s * (1 - q), u };
  }
  const popOut = (t, t1, d = 0.2) => 1 - H.clamp((t - t1) / d);
  function squash(t, tl, amp = 0.22) { const u = t - tl; if (u < 0) return [1, 1]; const q = Math.exp(-7 * u) * Math.cos(16 * u) * amp; return [1 + q, 1 - q]; }
  const bob = (t, ph = 0, a = 8) => Math.sin(t * TAU * 0.85 + ph) * a;
  const prog = (t, a, b) => H.clamp((t - a) / (b - a));
  // pop something in at t0 (optionally out at t1) around (x,y)
  function popIn(ctx, t, t0, x, y, fn, k = 1, t1 = null) {
    const p = pop(t, t0, k); if (p.s <= 0) return 0;
    const o = t1 == null ? 1 : popOut(t, t1); if (o <= 0) return 0;
    ctx.save(); ctx.translate(x, y); ctx.scale(p.sx * o, p.sy * o); fn(p); ctx.restore(); return p.s * o;
  }

  // ---------- lettering ----------
  function kText(ctx, str, x, y, size, o = {}) {
    ctx.save();
    ctx.font = `${o.weight || 700} ${size}px ${o.font || FONT}`; ctx.textAlign = o.align || 'center'; ctx.textBaseline = 'alphabetic';
    ctx.lineJoin = 'round'; ctx.miterLimit = 2;
    const lw = size * (o.lw || 0.24);
    if (o.outer) { ctx.strokeStyle = o.outer; ctx.lineWidth = lw + size * (o.ow || 0.13); ctx.strokeText(str, x, y); }
    if (o.shadow !== false) { ctx.shadowColor = o.shadow || 'rgba(90,54,89,0.32)'; ctx.shadowBlur = size * 0.12; ctx.shadowOffsetY = size * 0.07; }
    ctx.strokeStyle = o.line || C.pinkD; ctx.lineWidth = lw; ctx.strokeText(str, x, y);
    ctx.shadowColor = 'transparent'; ctx.fillStyle = o.fill || C.white; ctx.fillText(str, x, y);
    ctx.restore();
  }
  function kWord(ctx, str, cx, y, size, t, t0, stg, o = {}) {
    ctx.save(); ctx.font = `${o.weight || 700} ${size}px ${o.font || FONT}`;
    const ws = [...str].map((c) => ctx.measureText(c).width), tot = ws.reduce((a, b) => a + b, 0) + (o.track || 0) * (str.length - 1);
    ctx.restore();
    const out = o.t1 == null ? 1 : popOut(t, o.t1);
    if (out <= 0) return tot;
    let x = o.align === 'left' ? cx : cx - tot / 2;
    const fills = o.fills;
    [...str].forEach((c, i) => {
      const w = ws[i]; const p = pop(t, t0 + i * stg, 1.3);
      if (c !== ' ' && p.s > 0) {
        const hop = p.u < 0.25 ? -Math.sin((p.u / 0.25) * Math.PI) * size * 0.18 : 0;
        ctx.save(); ctx.translate(x + w / 2, y + hop); ctx.rotate((o.wob || 0) * Math.sin(t * 6 + i * 1.3)); ctx.scale(Math.min(p.sx, p.s, 1) * out, p.sy * out);
        kText(ctx, c, 0, 0, size, { ...o, fill: fills ? fills[i % fills.length] : o.fill });
        ctx.restore();
      }
      x += w + (o.track || 0);
    });
    return tot;
  }
  function kana(ctx, str, x, y, size, rot, s, fill) {
    if (s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    kText(ctx, str, 0, 0, size, { font: KANA, weight: 900, fill, line: C.white, outer: C.plum, lw: 0.22 });
    ctx.restore();
  }
  // a popping label pill
  function tag(ctx, x, y, label, fill, flip = 1, size = 30) {
    ctx.save(); ctx.translate(x, y); ctx.scale(flip, 1);
    ctx.font = `700 ${size}px ${FONT}`; const w = Math.max(ctx.measureText(label).width + size * 1.1, size * 1.6), h = size * 1.5;
    cel(ctx, rrP(-w / 2, -h / 2, w, h, h / 2), fill, H.rgba(H.mix(fill, C.plum, 0.15)), -3, -3, 3.5);
    ctx.fillStyle = C.plum; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, 0, 2);
    ctx.restore();
  }
  const ptag = (ctx, t, t0, x, y, label, fill, size = 32, t1 = null) => popIn(ctx, t, t0, x, y, () => tag(ctx, 0, 0, label, fill, 1, size), 1.2, t1);
  const ptext = (ctx, t, t0, x, y, str, size, o = {}, t1 = null) => popIn(ctx, t, t0, x, y, () => kText(ctx, str, 0, 0, size, o), 1.3, t1);

  // ---------- anime face parts ----------
  function eye(ctx, x, y, rx, ry, iris, kind = 'normal', side = 1, look = [0, 0]) {
    ctx.save(); ctx.translate(x, y); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = C.dark;
    if (kind === 'happy' || kind === 'blink') {
      ctx.beginPath();
      if (kind === 'happy') { ctx.moveTo(-rx * 0.95, ry * 0.18); ctx.quadraticCurveTo(0, -ry * 0.85, rx * 0.95, ry * 0.18); }
      else { ctx.moveTo(-rx * 0.95, -ry * 0.05); ctx.quadraticCurveTo(0, ry * 0.45, rx * 0.95, -ry * 0.05); }
      ctx.lineWidth = rx * 0.32; ctx.stroke();
    } else if (kind === 'squeeze') {
      ctx.beginPath(); ctx.moveTo(-rx * 0.65 * side, -ry * 0.5); ctx.lineTo(rx * 0.6 * side, 0); ctx.lineTo(-rx * 0.65 * side, ry * 0.5);
      ctx.lineWidth = rx * 0.3; ctx.stroke();
    } else if (kind === 'swirl') {
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 5.2; a += 0.15) { const r = rx * 0.95 * a / (Math.PI * 5.2), px = Math.cos(a * side) * r, py = Math.sin(a * side) * r * ry / rx; a === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); }
      ctx.lineWidth = rx * 0.17; ctx.stroke();
    } else if (kind === 'star') {
      const p = starP(0, 0, rx * 1.2, -Math.PI / 2, 0.5);
      ctx.fillStyle = C.butterD; ctx.fill(p); ctx.lineWidth = rx * 0.15; ctx.stroke(p);
      shine(ctx, -rx * 0.22, -rx * 0.28, rx * 0.2, rx * 0.14, -0.5, 1);
    } else if (kind === 'shock') {
      ctx.fillStyle = C.white; ctx.fill(ellP(0, 0, rx * 0.78, ry * 0.82)); ctx.lineWidth = rx * 0.14; ctx.stroke(ellP(0, 0, rx * 0.78, ry * 0.82));
      ctx.fillStyle = C.dark; ctx.fill(ellP(look[0] * rx * 0.2, look[1] * ry * 0.2, rx * 0.17, ry * 0.17));
    } else {
      const lx = look[0] * rx * 0.16, ly = look[1] * ry * 0.12;
      ctx.fillStyle = C.dark; ctx.fill(ellP(0, 0, rx, ry));
      const g = ctx.createLinearGradient(0, -ry, 0, ry);
      g.addColorStop(0, C.dark); g.addColorStop(0.42, H.rgba(H.mix(iris, C.dark, 0.35))); g.addColorStop(1, H.rgba(H.mix(iris, '#ffffff', 0.45)));
      ctx.fillStyle = g; ctx.fill(ellP(lx, ly + ry * 0.06, rx * 0.8, ry * 0.82));
      ctx.fillStyle = '#28142c'; ctx.fill(ellP(lx, ly + ry * 0.02, rx * 0.42, ry * 0.44));
      ctx.fillStyle = H.rgba(H.mix(iris, '#ffffff', 0.65), 0.9); ctx.fill(ellP(lx, ly + ry * 0.6, rx * 0.46, ry * 0.16));
      ctx.fillStyle = C.white;
      ctx.fill(ellP(lx - rx * 0.3, ly - ry * 0.36, rx * 0.34, ry * 0.28));
      ctx.fill(ellP(lx + rx * 0.34, ly + ry * 0.3, rx * 0.14, ry * 0.12));
      ctx.beginPath(); ctx.ellipse(0, 0, rx * 1.06, ry * 1.04, 0, Math.PI * 1.13, Math.PI * 1.87); ctx.lineWidth = rx * 0.22; ctx.stroke();
    }
    ctx.restore();
  }
  function mouth(ctx, x, y, w, kind = 'smile') {
    ctx.save(); ctx.translate(x, y); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = C.dark; ctx.lineWidth = w * 0.26;
    const inner = '#b8456f';
    if (kind === 'w') { ctx.beginPath(); ctx.moveTo(-w, -w * 0.15); ctx.quadraticCurveTo(-w * 0.5, w * 0.75, 0, 0); ctx.quadraticCurveTo(w * 0.5, w * 0.75, w, -w * 0.15); ctx.stroke(); }
    else if (kind === 'flat') { ctx.beginPath(); ctx.moveTo(-w * 0.5, 0); ctx.lineTo(w * 0.5, 0); ctx.stroke(); }
    else if (kind === 'wobble') { ctx.beginPath(); ctx.moveTo(-w, 0); for (let i = 1; i <= 4; i++) ctx.quadraticCurveTo(-w + (i - 0.5) * w / 2, (i % 2 ? -1 : 1) * w * 0.4, -w + i * w / 2, 0); ctx.stroke(); }
    else if (kind === 'o' || kind === 'O') {
      const k = kind === 'O' ? 0.8 : 0.5, p = ellP(0, 0, w * k, w * k * 1.15);
      ctx.fillStyle = inner; ctx.fill(p); ctx.save(); ctx.clip(p); ctx.fillStyle = '#ff8fab'; ctx.fill(ellP(0, w * k * 0.9, w * k * 0.7, w * k * 0.5)); ctx.restore(); ctx.lineWidth = w * 0.22; ctx.stroke(p);
    } else {
      const p = new Path2D(); p.moveTo(-w, -w * 0.2); p.quadraticCurveTo(0, w * 1.7, w, -w * 0.2); p.closePath();
      ctx.fillStyle = inner; ctx.fill(p); ctx.save(); ctx.clip(p); ctx.fillStyle = '#ff8fab'; ctx.fill(ellP(0, w * 0.85, w * 0.6, w * 0.42)); ctx.restore(); ctx.lineWidth = w * 0.22; ctx.stroke(p);
    }
    ctx.restore();
  }
  function blush(ctx, x, y, rx, ry) {
    ctx.save(); ctx.fillStyle = 'rgba(255,135,170,0.55)'; ctx.fill(ellP(x, y, rx, ry));
    ctx.strokeStyle = 'rgba(255,95,145,0.85)'; ctx.lineWidth = rx * 0.13; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = -1; i <= 1; i++) { ctx.moveTo(x + i * rx * 0.45 - rx * 0.1, y + ry * 0.35); ctx.lineTo(x + i * rx * 0.45 + rx * 0.1, y - ry * 0.35); }
    ctx.stroke(); ctx.restore();
  }
  // a face that sits on any character or organ (local units, centre between the eyes)
  function face(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const ek = P.eyes || 'normal', look = P.look || [0, 0], iris = P.iris || '#8a6cf0';
    eye(ctx, -34, 0, 22, 29, iris, ek, 1, look); eye(ctx, 34, 0, 22, 29, iris, ek, -1, look);
    if (P.blush !== false) { blush(ctx, -60, 30, 15, 8); blush(ctx, 60, 30, 15, 8); }
    mouth(ctx, 0, 32, 10, P.mouth || 'smile');
    ctx.restore();
  }

  // ---------- emotes / props ----------
  function bubble(ctx, x, y, w, h, tail, s = [1, 1], fill = C.white) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s[0], s[1]);
    const p = rrP(-w / 2, -h / 2, w, h, h * 0.46), tx = tail[0] - x, ty = tail[1] - y;
    const bx = H.clamp(tx * 0.45, -w / 2 + 34, w / 2 - 34), tp = new Path2D();
    tp.moveTo(bx - 24, h / 2 - 8); tp.quadraticCurveTo(bx - 6, (h / 2 + ty) / 2 + 4, tx, ty); tp.quadraticCurveTo(bx + 4, (h / 2 + ty) / 2 - 6, bx + 22, h / 2 - 8); tp.closePath();
    union(ctx, [p, tp], fill);
    ctx.restore();
  }
  function thought(ctx, x, y, s, tail, dots, tq) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    union(ctx, [cloudP(0, 0, 1.05)], C.white);
    const [tx, ty] = [(tail[0] - x) / s, (tail[1] - y) / s];
    union(ctx, [ellP(tx * 0.55, ty * 0.55 + 20, 16, 14)], C.white); union(ctx, [ellP(tx * 0.85, ty * 0.85, 10, 9)], C.white);
    for (let i = 0; i < dots; i++) { ctx.fillStyle = C.plum; ctx.fill(ellP(-34 + i * 34, 4 + Math.sin(tq * 8 + i) * 3, 9, 9)); }
    ctx.restore();
  }
  function sweat(ctx, x, y, s, rot = 0.25) {
    if (s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(0, -30); p.bezierCurveTo(8, -12, 20, 2, 20, 14); p.arc(0, 14, 20, 0, Math.PI); p.bezierCurveTo(-20, 2, -8, -12, 0, -30); p.closePath();
    cel(ctx, p, C.sky, C.skyS, -4, -4, 4); shine(ctx, -6, 12, 4, 7, 0.3);
    ctx.restore();
  }
  function drop(ctx, x, y, s, fill = C.sky, shade = C.skyS, w = 4) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(0, -30); p.bezierCurveTo(8, -12, 20, 2, 20, 14); p.arc(0, 14, 20, 0, Math.PI); p.bezierCurveTo(-20, 2, -8, -12, 0, -30); p.closePath();
    cel(ctx, p, fill, shade, -4, -4, w); shine(ctx, -6, 10, 4, 7, 0.3);
    ctx.restore();
  }
  function sparkle(ctx, x, y, R, fill = C.white, rot = 0, w = 3.5) { if (R <= 0) return; const p = spark4P(x, y, R, rot); ctx.fillStyle = fill; ctx.fill(p); if (w) ol(ctx, p, w); }
  function heart(ctx, x, y, s, fill = C.pinkD, rot = 0) { if (s <= 0) return; cel(ctx, heartP(x, y, s, rot), fill, H.rgba(H.mix(fill, C.plum, 0.25)), -s * 0.12, -s * 0.12, 3.5); shine(ctx, x - s * 0.45, y - s * 0.35, s * 0.18, s * 0.12, -0.6); }
  function impactLines(ctx, x, y, r0, t, t0, n = 8, col = C.plum) {
    const u = (t - t0) / 0.3; if (u < 0 || u > 1) return;
    ctx.save(); ctx.strokeStyle = col; ctx.lineCap = 'round'; ctx.lineWidth = 6; ctx.globalAlpha = 1 - u * 0.6; ctx.beginPath();
    for (let i = 0; i < n; i++) { const a = i / n * TAU + 0.3, a0 = r0 + u * 30, a1 = r0 + 24 + u * 46; ctx.moveTo(x + Math.cos(a) * a0, y + Math.sin(a) * a0); ctx.lineTo(x + Math.cos(a) * a1, y + Math.sin(a) * a1); }
    ctx.stroke(); ctx.restore();
  }
  function confetti(ctx, t, t0, x, y, n, seed, spread = 1) {
    const tau = t - t0; if (tau < 0 || tau > 2.4) return;
    const r = H.rng(seed), cols = [C.pinkD, C.mintD, C.butterD, C.skyD, C.lavD, C.pink];
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + (r() - 0.5) * 2.6 * spread, v = r.range(380, 820), rs = r.range(-8, 8), c = cols[i % cols.length], kind = i % 4, sz = r.range(9, 15);
      const px = x + Math.cos(a) * v * tau * 0.8, py = y + Math.sin(a) * v * tau * 0.8 + 520 * tau * tau;
      if (py > 760) continue;
      ctx.save(); ctx.translate(px, py); ctx.rotate(rs * tau); ctx.scale(1, Math.cos(tau * 9 + i));
      ctx.fillStyle = c;
      if (kind === 0) ctx.fill(rrP(-sz * 0.6, -sz * 0.35, sz * 1.2, sz * 0.7, 3));
      else if (kind === 1) ctx.fill(ellP(0, 0, sz * 0.45, sz * 0.45));
      else if (kind === 2) ctx.fill(starP(0, 0, sz * 0.7));
      else ctx.fill(heartP(0, 0, sz * 0.5));
      ctx.restore();
    }
  }
  function poof(ctx, x, y, t, t0, R = 50, col = C.white) { // a little puff of cloud when something vanishes
    const u = (t - t0) / 0.45; if (u < 0 || u > 1) return;
    ctx.save(); ctx.globalAlpha = 1 - u;
    for (let i = 0; i < 6; i++) { const a = i / 6 * TAU, d = R * (0.3 + u); cel(ctx, ellP(x + Math.cos(a) * d, y + Math.sin(a) * d, R * 0.38 * (1 - u * 0.5), R * 0.38 * (1 - u * 0.5)), col, C.creamS, -3, -3, 3); }
    ctx.restore();
  }
  // dotted connector that draws on, chunky rounded arrowhead at the tip
  const bez = (p0, p1, p2, p3, n = 60) => Array.from({ length: n + 1 }, (_, i) => { const u = i / n, v = 1 - u; return [v * v * v * p0[0] + 3 * v * v * u * p1[0] + 3 * v * u * u * p2[0] + u * u * u * p3[0], v * v * v * p0[1] + 3 * v * v * u * p1[1] + 3 * v * u * u * p2[1] + u * u * u * p3[1]]; });
  const arcPts = (cx, cy, r, a0, a1, n = 50) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * i / n; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; });
  function along(pts, d) {
    let acc = 0;
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); if (acc + l >= d) { const u = (d - acc) / l; return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * u, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * u, Math.atan2(pts[i][1] - pts[i - 1][1], pts[i][0] - pts[i - 1][0])]; } acc += l; }
    const a = pts[pts.length - 1], b = pts[pts.length - 2]; return [a[0], a[1], Math.atan2(a[1] - b[1], a[0] - b[0])];
  }
  const plen = (pts) => pts.reduce((s, p, i) => (i ? s + Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]) : 0), 0);
  function dotted(ctx, pts, prog_, col, r = 6, gap = 22, head = 1) {
    if (prog_ <= 0) return;
    const L = plen(pts) * prog_;
    for (let d = 0; d < L - (head ? 16 : 0); d += gap) { const [x, y] = along(pts, d); ctx.fillStyle = col; ctx.fill(ellP(x, y, r, r)); }
    if (head) {
      const [x, y, a] = along(pts, L), s = 20 * head;
      ctx.save(); ctx.translate(x, y); ctx.rotate(a);
      const p = roundPoly([[s * 0.9, 0], [-s * 0.6, -s * 0.85], [-s * 0.6, s * 0.85]], s * 0.25);
      cel(ctx, p, col, H.rgba(H.mix(col, C.plum, 0.25)), -2, -2, 4); ctx.restore();
    }
  }
  // chunky check / cross stamps
  function check(ctx, x, y, s, t, t0) { popIn(ctx, t, t0, x, y, () => { ctx.scale(s, s); cel(ctx, ellP(0, 0, 40, 40), C.mintD, '#2fa078', -5, -5, 5); ctx.strokeStyle = C.white; ctx.lineWidth = 11; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(-17, 2); ctx.lineTo(-4, 15); ctx.lineTo(18, -12); ctx.stroke(); }, 1.5); impactLines(ctx, x, y, 54 * s, t, t0, 10, C.mintD); }
  function cross(ctx, x, y, s, t, t0) { popIn(ctx, t, t0, x, y, () => { ctx.rotate(-0.12); ctx.scale(s, s); cel(ctx, ellP(0, 0, 44, 44), C.red, '#e2486c', -5, -5, 5); ctx.strokeStyle = C.white; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-16, -16); ctx.lineTo(16, 16); ctx.moveTo(16, -16); ctx.lineTo(-16, 16); ctx.stroke(); }, 1.6); impactLines(ctx, x, y, 58 * s, t, t0, 10, C.red); }
  function clock(ctx, x, y, R, spin) {
    ctx.save(); ctx.translate(x, y);
    cel(ctx, ellP(0, 0, R, R), C.white, C.creamS, -6, -6, 5);
    for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; ctx.fillStyle = i % 3 ? C.lavS : C.pinkD; ctx.fill(ellP(Math.cos(a) * R * 0.78, Math.sin(a) * R * 0.78, R * 0.05, R * 0.05)); }
    ctx.lineCap = 'round'; ctx.strokeStyle = C.plum;
    ctx.lineWidth = R * 0.09; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(spin / 12 - Math.PI / 2) * R * 0.45, Math.sin(spin / 12 - Math.PI / 2) * R * 0.45); ctx.stroke();
    ctx.lineWidth = R * 0.06; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(spin - Math.PI / 2) * R * 0.65, Math.sin(spin - Math.PI / 2) * R * 0.65); ctx.stroke();
    ctx.fillStyle = C.pinkD; ctx.fill(ellP(0, 0, R * 0.08, R * 0.08));
    cel(ctx, rrP(-R * 0.16, -R - R * 0.2, R * 0.32, R * 0.18, 4), C.pink, C.pinkS, -2, -2, 3.5);
    ctx.restore();
  }

  // ---------- characters (local units) ----------
  // the bite: a chibi onigiri. (x,y) = centre, its base sits at y + 72*s
  function bite(ctx, x, y, s, P = {}) {
    s *= 1.25; ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    if (P.shadow !== false) { const k = 1 - Math.min(P.lift || 0, 140) / 280; ctx.fillStyle = 'rgba(90,54,89,0.13)'; ctx.fill(ellP(0, 84, 90 * k, 14 * k)); }
    ctx.translate(0, -(P.lift || 0));
    const sq = P.sq || [1, 1]; ctx.translate(0, 72); ctx.rotate(P.tilt || 0); ctx.scale(sq[0], sq[1]); ctx.translate(0, -72);
    for (const sd of [-1, 1]) { const a = sd < 0 ? (P.armL == null ? 0.2 : P.armL) : (P.armR == null ? 0.2 : P.armR); ctx.save(); ctx.translate(sd * 52, 34); ctx.rotate(-sd * a); cel(ctx, ellP(sd * 12, 12, 15, 22, -sd * 0.3), C.cream, C.creamS, -3, -3, 4); ctx.restore(); }
    const body = roundPoly([[0, -96], [96, 74], [-96, 74]], 40);
    cel(ctx, body, C.cream, C.creamS, -10, -10);
    ctx.save(); ctx.clip(body); const nb = rrP(-38, 34, 76, 70, 6); ctx.fillStyle = C.noriS; ctx.fill(nb); ctx.fillStyle = C.nori; ctx.fillRect(-38, 34, 70, 70);
    ctx.fillStyle = 'rgba(255,255,255,0.18)'; ctx.fillRect(-28, 42, 6, 26); ol(ctx, nb, 3.5); ctx.restore();
    ol(ctx, body);
    ctx.fillStyle = C.creamS; [[-48, -6], [52, -14], [-20, -52], [24, -40], [-62, 40], [64, 44]].forEach(([gx, gy], i) => ctx.fill(ellP(gx, gy, 6, 3.5, i)));
    shine(ctx, -34, -40, 14, 6, -1.0);
    face(ctx, 0, -10, 0.72, P);
    ctx.restore();
  }
  // a little chunk of chewed food (rice clump)
  function crumb(ctx, x, y, r, rot = 0, fill = C.cream) { cel(ctx, roundPoly([[x + Math.cos(rot) * r, y + Math.sin(rot) * r], [x + Math.cos(rot + 2.2) * r * 0.9, y + Math.sin(rot + 2.2) * r * 0.9], [x + Math.cos(rot + 4.1) * r, y + Math.sin(rot + 4.1) * r]], r * 0.45), fill, C.creamS, -2, -2, 3.5); }
  // a ball of mush with a tiny face (the bite after chewing)
  function mush(ctx, x, y, r, P = {}) { ctx.save(); ctx.translate(x, y); cel(ctx, ellP(0, 0, r, r * 0.9), P.fill || '#fff1d6', P.shade || '#ecd3a8', -r * 0.15, -r * 0.15, 4); ctx.fillStyle = C.nori; ctx.fill(ellP(r * 0.35, r * 0.35, r * 0.18, r * 0.1, 0.4)); shine(ctx, -r * 0.4, -r * 0.4, r * 0.18, r * 0.09, -0.8); face(ctx, 0, -r * 0.05, r / 110, P); ctx.restore(); }
  // chibi person: head centre (x,y); P.hair, P.coat, P.wig, P.beard
  function chibi(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    if (P.shadow !== false) { ctx.fillStyle = 'rgba(90,54,89,0.13)'; ctx.fill(ellP(0, 196, 90, 14)); }
    ctx.translate(0, -(P.lift || 0)); ctx.rotate(P.tilt || 0);
    const coat = P.coat || [C.sky, C.skyS];
    for (const sd of [-1, 1]) { const a = sd < 0 ? (P.armL == null ? 0.2 : P.armL) : (P.armR == null ? 0.2 : P.armR); ctx.save(); ctx.translate(sd * 54, 104); ctx.rotate(-sd * a); cel(ctx, rrP(-18 + sd * 8, -6, 36, 66, 18), coat[0], coat[1], -4, -4, 4); cel(ctx, ellP(sd * 8, 64, 15, 14), C.peach, C.peachS, -2, -2, 4); ctx.restore(); }
    cel(ctx, rrP(-62, 74, 124, 110, [44, 44, 26, 26]), coat[0], coat[1], -8, -8);
    if (P.collar) cel(ctx, roundPoly([[-26, 74], [26, 74], [0, 108]], 8), C.white, C.creamS, -2, -2, 3.5);
    for (const sd of [-1, 1]) cel(ctx, ellP(sd * 28, 188, 26, 13), C.plum, C.dark, -2, -2, 3);
    if (P.wig) { for (const sd of [-1, 1]) for (let j = 0; j < 3; j++) cel(ctx, ellP(sd * 92, -10 + j * 34, 26, 22), C.white, C.creamS, -3, -3, 4); }
    const head = ellP(0, 0, 96, 86); cel(ctx, head, C.peach, C.peachS, -10, -10);
    const hair = P.hair || '#7b4f6b';
    if (P.wig) { cel(ctx, rrP(-96, -88, 192, 66, [60, 60, 18, 18]), C.white, C.creamS, -5, -5, 4); }
    else if (hair !== 'none') { const hp = new Path2D(); hp.moveTo(-98, 6); hp.bezierCurveTo(-104, -96, 104, -96, 98, 6); hp.lineTo(70, -20); hp.lineTo(40, -6); hp.lineTo(14, -32); hp.lineTo(-20, -8); hp.lineTo(-50, -30); hp.lineTo(-74, -4); hp.closePath(); cel(ctx, hp, hair, H.rgba(H.mix(hair, C.dark, 0.3)), -5, -5, 4); shine(ctx, -40, -58, 18, 6, -0.4, 0.5); }
    if (P.beard) { const bp = new Path2D(); bp.moveTo(-60, 40); bp.quadraticCurveTo(0, 130, 60, 40); bp.quadraticCurveTo(0, 82, -60, 40); bp.closePath(); cel(ctx, bp, P.beard, C.creamS, -3, -3, 4); }
    if (P.band) cel(ctx, rrP(-96, -44, 192, 18, 9), P.band, H.rgba(H.mix(P.band, C.plum, 0.2)), -2, -2, 3.5);
    face(ctx, 0, 18, 0.95, P);
    ctx.restore();
  }
  // a round chibi bird (side-ish view, facing right)
  function bird(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.fillStyle = 'rgba(90,54,89,0.13)'; ctx.fill(ellP(0, 112, 80, 12));
    ctx.translate(0, -(P.lift || 0)); const sq = P.sq || [1, 1]; ctx.translate(0, 100); ctx.scale(sq[0], sq[1]); ctx.translate(0, -100);
    cel(ctx, roundPoly([[-80, 30], [-150, 0], [-140, 60]], 14), C.skyS, C.skyD, -3, -3, 4);
    for (const sd of [-1, 1]) cel(ctx, rrP(sd * 26 - 6, 82, 12, 22, 6), C.butterD, C.butterS, -2, -2, 3);
    cel(ctx, ellP(0, 10, 100, 92), C.sky, C.skyS, -10, -10);
    cel(ctx, ellP(18, 44, 56, 46), C.cream, C.creamS, -4, -4, 0);
    const wa = P.flap ? Math.sin(P.flap) * 0.5 : 0;
    ctx.save(); ctx.translate(-40, 20); ctx.rotate(wa); cel(ctx, ellP(0, 10, 36, 46, 0.5), C.skyS, C.skyD, -4, -4, 4); ctx.restore();
    const open = P.beak || 0;
    cel(ctx, roundPoly([[84, -10 - open * 14], [140, 2], [86, 16]], 8), C.butterD, C.butterS, -2, -2, 4);
    if (open > 0) cel(ctx, roundPoly([[84, 18], [126, 22 + open * 10], [84, 32]], 6), C.butterD, C.butterS, -2, -2, 4);
    eye(ctx, 46, -18, 18, 24, '#5aa9ea', P.eyes || 'normal', -1, P.look || [0.5, 0]);
    blush(ctx, 58, 18, 12, 7);
    ctx.restore();
  }
  // stomach: a soft J-shaped bag. local frame centred on the bag; s scales; P.fill/acid/face/sx/sy
  function stomachPath(sx = 1, sy = 1) {
    const p = new Path2D(), m = new DOMMatrix().scale(sx, sy), q = new Path2D();
    q.moveTo(-70, -150); q.bezierCurveTo(-60, -110, -80, -90, -120, -60);
    q.bezierCurveTo(-190, -10, -170, 130, -60, 150); q.bezierCurveTo(40, 168, 130, 120, 160, 60);
    q.bezierCurveTo(175, 30, 200, 10, 230, 20); q.lineTo(236, -24); q.bezierCurveTo(196, -40, 160, -20, 140, 0);
    q.bezierCurveTo(110, 30, 70, 30, 40, -10); q.bezierCurveTo(10, -50, -10, -110, -20, -150); q.closePath();
    p.addPath(q, m); return p;
  }
  function stomach(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const sq = P.sq || [1, 1], path = stomachPath(sq[0], sq[1]);
    cel(ctx, path, P.fill || C.pink, P.shade || C.pinkS, -12, -12, 0);
    if (P.acid > 0) { // liquid inside, clipped to the bag
      ctx.save(); ctx.clip(path); const lv = 160 - 210 * P.acid, wv = P.wave || 0;
      const lq = new Path2D(); lq.moveTo(-260, lv); for (let xx = -260; xx <= 260; xx += 20) lq.lineTo(xx, lv + Math.sin(xx * 0.03 + wv) * 8); lq.lineTo(260, 260); lq.lineTo(-260, 260); lq.closePath();
      ctx.fillStyle = P.acidCol || 'rgba(190,240,140,0.85)'; ctx.fill(lq);
      const r = H.rng(77); for (let i = 0; i < 9; i++) { const bx = r.range(-140, 140), by = lv + 20 + ((r.range(0, 120) - (P.wave || 0) * 14) % 120 + 120) % 120; ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = 3; ctx.stroke(ellP(bx, by, 7, 7)); }
      ctx.restore();
    }
    if (P.inner) { ctx.save(); ctx.clip(path); P.inner(ctx); ctx.restore(); }
    ol(ctx, path, 5);
    shine(ctx, -110 * sq[0], -30 * sq[1], 24, 10, -1.1);
    if (P.face !== false) { const fa = P.faceAt || [-10, 50]; face(ctx, fa[0] * sq[0], fa[1] * sq[1], 0.9, P); }
    ctx.restore();
  }
  // enzyme critter: a round chomper (pac-shaped) facing right, mouth opening `open` 0..1
  function chomper(ctx, x, y, s, open, col = [C.lav, C.lavS], P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s * (P.flip || 1), s);
    const a = 0.08 + open * 0.55, p = new Path2D(); p.moveTo(10, 0); p.arc(0, 0, 70, a, TAU - a); p.closePath();
    cel(ctx, p, col[0], col[1], -7, -7);
    shine(ctx, -30, -40, 14, 6, -0.7);
    eye(ctx, -6, -34, 11, 14, '#8a6cf0', P.eyes || 'normal', -1, [0.6, 0]);
    blush(ctx, -30, -6, 10, 6);
    ctx.restore();
  }
  function germ(ctx, x, y, s, col, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const n = 9, pts = []; for (let i = 0; i < n * 2; i++) { const a = i / (n * 2) * TAU + (P.rot || 0), r = i % 2 ? 54 : 68; pts.push([Math.cos(a) * r, Math.sin(a) * r]); }
    cel(ctx, roundPoly(pts, 10), col[0], col[1], -6, -6);
    face(ctx, 0, -2, 0.62, { eyes: P.eyes || 'normal', mouth: P.mouth || 'w', look: P.look || [0, 0] });
    ctx.restore();
  }
  function microbe(ctx, x, y, s, kind, col, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); ctx.scale(s, s);
    if (kind === 0) cel(ctx, rrP(-70, -34, 140, 68, 34), col[0], col[1], -5, -5);
    else if (kind === 1) cel(ctx, ellP(0, 0, 46, 46), col[0], col[1], -5, -5);
    else { const p = new Path2D(); p.moveTo(-80, 0); for (let i = 1; i <= 8; i++) p.lineTo(-80 + i * 20, Math.sin(i * 1.2) * 18); ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 40; ctx.stroke(p); ctx.strokeStyle = col[0]; ctx.lineWidth = 31; ctx.stroke(p); ctx.restore(); }
    if (P.tails) { ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.beginPath(); for (let i = 0; i < 3; i++) { ctx.moveTo(-70, -12 + i * 12); ctx.quadraticCurveTo(-92, -20 + i * 12 + Math.sin((P.ph || 0) + i) * 8, -110, -12 + i * 12); } ctx.stroke(); ctx.restore(); }
    ctx.rotate(-(P.rot || 0) * 0.8);
    face(ctx, 0, -4, kind === 1 ? 0.5 : 0.55, { eyes: P.eyes || 'normal', mouth: P.mouth || 'smile', blush: true });
    ctx.restore();
  }
  function lemon(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(-120, 0); p.quadraticCurveTo(-110, -90, 0, -92); p.quadraticCurveTo(110, -90, 120, 0); p.quadraticCurveTo(110, 90, 0, 92); p.quadraticCurveTo(-110, 90, -120, 0); p.closePath();
    cel(ctx, p, C.butterD, C.butterS, -10, -10);
    cel(ctx, ellP(-124, 0, 12, 14), C.butterD, C.butterS, -2, -2, 4); cel(ctx, ellP(124, 0, 12, 14), C.butterD, C.butterS, -2, -2, 4);
    cel(ctx, ellP(30, -98, 34, 14, -0.4), C.mint, C.mintS, -3, -3, 4);
    shine(ctx, -60, -46, 20, 8, -0.7);
    face(ctx, 0, 0, 0.95, { eyes: P.eyes || 'squeeze', mouth: P.mouth || 'wobble' });
    ctx.restore();
  }
  // background: soft pastel with simple patterns (from the reference)
  function bg(ctx, W, H_, t, th, seed = 1) {
    ctx.fillStyle = th.base; ctx.fillRect(0, 0, W, H_);
    const r = H.rng(seed);
    ctx.save(); ctx.globalAlpha = th.kind === 'clouds' ? 0.95 : 0.7; ctx.fillStyle = C.white;
    const nc = th.kind === 'clouds' ? 6 : 3;
    for (let i = 0; i < nc; i++) { const s = r.range(0.9, 1.6), x = ((r.range(0, W + 300) + t * r.range(8, 16)) % (W + 300)) - 150, y = r.range(60, H_ - 40); ctx.fill(cloudP(x, y, s)); }
    ctx.restore();
    const sx = 66, sy = 48, ox = (t * 12) % (sx * 2), oy = (t * 7) % (sy * 2);
    for (let j = -2; j < H_ / sy + 2; j++) for (let i = -2; i < W / sx + 2; i++) {
      const x = i * sx + (j & 1 ? sx / 2 : 0) + ox, y = j * sy + oy;
      if ((j & 1) && th.kind !== 'dots' && th.kind !== 'clouds') {
        ctx.fillStyle = th.acc;
        if (th.kind === 'stars') ctx.fill(starP(x, y, 10, -Math.PI / 2 + (i + j) * 0.3));
        else ctx.fill(heartP(x, y, 9));
      } else { ctx.fillStyle = th.dot; ctx.fill(ellP(x, y, 8, 8)); }
    }
  }
  function twinkles(ctx, W, H_, t, seed, n = 9, avoid) {
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const x = r.range(40, W - 40), y = r.range(40, H_ - 40), R = r.range(9, 18), ph = r() * TAU, sp = r.range(2.5, 4.5);
      if (avoid && avoid(x, y)) continue;
      const k = Math.max(0, Math.sin(t * sp + ph)); if (k < 0.1) continue;
      sparkle(ctx, x, y, R * (0.4 + 0.6 * k), i % 3 ? C.white : C.butter, 0, 0);
    }
  }
  function wipe(ctx, W, H_, u, shape, cx, cy, drawB) {
    const e = u * u * (3 - 2 * u), rot = -Math.PI / 2 + u * 0.9;
    const p = shape === 'heart' ? heartP(cx, cy, 1900 * e * e + 4, 0) : starP(cx, cy, 1800 * e * e + 4, rot, 0.52);
    ctx.save(); ctx.clip(p); drawB(); ctx.restore();
    ctx.save(); ctx.lineJoin = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.stroke(p); ctx.strokeStyle = shape === 'heart' ? C.pink : C.butter; ctx.lineWidth = 24; ctx.stroke(p);
    ctx.strokeStyle = C.white; ctx.lineWidth = 6; ctx.globalAlpha = 0.8; ctx.stroke(p); ctx.restore();
  }

  // ---------- sound events, registered next to the visuals they belong to ----------
  const SFX = [];
  const sfx = (t, kind, o = {}) => SFX.push([t, kind, o]);
  const W = W0, HH = H0;

  // ======================================== SCENES ========================================
  const SC = [];
  const scene = (first, tr, theme, seed, draw, wx = 640, wy = 380) => SC.push({ s: first === 0 ? 0 : PS(first) - 0.5, first, tr, theme, seed, draw, wx, wy });
  const CH = [[0, 'The Mystery'], [19, 'The Mouth'], [37, 'The Stomach'], [53, 'Small Intestine'], [73, 'Large Intestine'], [81, 'The Whole Trip']];

  // small props used by several scenes
  function flame(ctx, x, y, s, ph) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s * (1 + 0.06 * Math.sin(ph * 2)), s * (1 + 0.1 * Math.sin(ph * 3 + 1)));
    const f = (k) => { const p = new Path2D(); p.moveTo(0, -90 * k); p.bezierCurveTo(30 * k, -40 * k, 52 * k, -10 * k, 46 * k, 18 * k); p.arc(0, 18 * k, 46 * k, 0, Math.PI); p.bezierCurveTo(-52 * k, -10 * k, -30 * k, -40 * k, 0, -90 * k); p.closePath(); return p; };
    cel(ctx, f(1), C.pinkD, '#e2527f', -4, -4, 4); cel(ctx, f(0.55), C.butterD, C.butterS, -2, -2, 0);
    ctx.restore();
  }
  function steam(ctx, x, y, t, n = 3) {
    ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.lineCap = 'round'; ctx.lineWidth = 10;
    for (let i = 0; i < n; i++) { const u = ((t * 0.6 + i / n) % 1), yy = y - u * 120; ctx.globalAlpha = Math.sin(u * Math.PI); ctx.beginPath(); ctx.moveTo(x + (i - 1) * 50, yy); ctx.bezierCurveTo(x + (i - 1) * 50 + 20, yy - 20, x + (i - 1) * 50 - 20, yy - 40, x + (i - 1) * 50, yy - 60); ctx.stroke(); }
    ctx.restore();
  }
  function sack(ctx, x, y, s, rot = 0) { // a small linen bag on a string
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(-20, -40); p.quadraticCurveTo(-70, 10, -54, 50); p.quadraticCurveTo(0, 80, 54, 50); p.quadraticCurveTo(70, 10, 20, -40); p.closePath();
    cel(ctx, p, '#f6ead2', '#dccaa4', -5, -5);
    ctx.strokeStyle = C.plum; ctx.lineWidth = 3; ctx.setLineDash([6, 7]); ctx.beginPath(); ctx.moveTo(-40, 20); ctx.quadraticCurveTo(0, 40, 40, 20); ctx.stroke(); ctx.setLineDash([]);
    cel(ctx, rrP(-26, -50, 52, 16, 8), C.pinkD, '#e2527f', -2, -2, 3.5);
    ctx.restore();
  }
  function flask(ctx, x, y, s, fill, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(-30, -150); p.lineTo(-30, -60); p.bezierCurveTo(-130, -30, -130, 120, 0, 120); p.bezierCurveTo(130, 120, 130, -30, 30, -60); p.lineTo(30, -150); p.closePath();
    ctx.save(); ctx.fillStyle = 'rgba(255,255,255,0.75)'; ctx.fill(p); ctx.clip(p);
    const lv = -20 + Math.sin(P.wave || 0) * 6; ctx.fillStyle = fill; ctx.fillRect(-140, lv, 280, 160);
    const r = H.rng(5); for (let i = 0; i < 7; i++) { const bx = r.range(-80, 80), by = lv + 20 + ((r.range(0, 100) - (P.wave || 0) * 20) % 100 + 100) % 100; ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.lineWidth = 3; ctx.stroke(ellP(bx, by, 7, 7)); }
    ctx.restore(); ol(ctx, p, 5);
    cel(ctx, rrP(-42, -168, 84, 24, 10), C.pink, C.pinkS, -2, -2, 4);
    shine(ctx, -60, 10, 10, 26, 0.3, 0.8);
    face(ctx, 0, 60, 0.8, P);
    ctx.restore();
  }

  // ---------------- CHAPTER 1: THE MYSTERY ----------------
  // S1 hook (p0-p2): the bite drops in, "swallow it...?" and the longest trip in your body
  {
    const land = 0.55, fd = T(0, 'food'), sw = T(1, 'swallow'), it = T(1, 'it'), lg = T(2, 'longest');
    const path = bez([520, 470], [700, 330], [820, 640], [960, 520]).concat(bez([960, 520], [1080, 420], [1060, 250], [1240, 230]));
    sfx(0.2, 'whoosh', { d: 0.35, g: 0.3 }); sfx(land, 'boing', { g: 1.1 });
    sfx(fd, 'pop', { f: 600 }); sfx(sw, 'slurp', { d: 0.35 }); sfx(sw + 0.05, 'pop', { f: 380, g: 1.1 }); sfx(it, 'pop', { f: 700, g: 1 }); sfx(it + 0.15, 'popm', { f: 820 });
    sfx(lg, 'stroke', { n: 8, d: 0.9, pan: 0.4 }); sfx(lg + 0.3, 'pop', { f: 500 });
    scene(0, null, TH.pink, 3, (ctx, t) => {
      twinkles(ctx, W, HH, t, 21, 10, (x, y) => y > 200 && y < 640 && x > 260 && x < 920);
      dotted(ctx, path, H.ease.out(prog(t, lg, lg + 0.9)), C.pinkD, 7, 24);
      const bx = H.lerp(640, 420, H.ease.inOut(prog(t, lg - 0.5, lg)));
      if (t >= 0.15) {
        let y = 440, sq; if (t < land) { const u = (t - 0.15) / (land - 0.15); y = 440 - 600 * (1 - u * u); sq = [0.86, 1.16]; } else sq = squash(t, land, 0.26);
        const gulp = t >= sw && t < sw + 0.7;
        bite(ctx, bx, y, 1.4, { sq, lift: t > land + 0.5 ? bob(t) : 0, eyes: t >= lg ? 'star' : gulp ? 'shock' : 'normal', look: [0.2, -0.6], mouth: gulp ? 'O' : t < fd ? 'o' : 'smile', armL: t > sw ? 2.2 : 0.2, armR: t >= lg ? 2.4 : 0.2, tilt: gulp ? 0.06 * Math.sin(t * 30) : 0 });
      }
      ptag(ctx, t, lg + 0.3, 1010, 650, 'longest trip!', C.butter, 34);
      kWord(ctx, 'Your food...', 640, 150, 84, t, fd, 0.04, { wob: 0.02, t1: sw - 0.15 });
      kWord(ctx, 'Swallow it...', 600, 150, 84, t, sw, 0.04, { wob: 0.02, fill: C.white, line: C.skyD });
      for (const [tt, x, y, sz, ph] of [[it, 1010, 200, 120, 0], [it + 0.15, 1110, 120, 74, 1.7]]) popIn(ctx, t, tt, x, y, () => { ctx.rotate(0.14 * Math.sin(t * 9 + ph)); kText(ctx, '?', 0, 0, sz, { fill: C.butter, line: C.pinkD, outer: C.plum, lw: 0.2 }); }, 1.4);
      kana(ctx, 'ごっくん', 200, 600, 50, -0.15, t > sw && t < sw + 1.5 ? pop(t, sw).s * popOut(t, sw + 1.3) : 0, C.sky);
    });
  }
  // S2 (p3-p4): for most of history nobody knew
  {
    const mo = T(3, 'most'), nb = T(4, 'nobody'), hw = T(4, 'how');
    sfx(mo, 'pop', { f: 480 }); sfx(nb, 'pop', { f: 420 }); sfx(nb + 0.05, 'aww'); sfx(hw, 'popm', { f: 640 });
    scene(3, 'slide', TH.lav, 7, (ctx, t) => {
      twinkles(ctx, W, HH, t, 31, 8, (x, y) => y > 180);
      popIn(ctx, t, mo, 360, 430, () => {
        ctx.rotate(-0.05);
        cel(ctx, rrP(-190, -150, 380, 300, 22), '#fff7e6', '#ead9b8', -6, -6);
        for (const yy of [-160, 150]) cel(ctx, rrP(-215, yy - 18, 430, 36, 18), C.butterD, C.butterS, -3, -3, 4);
        kText(ctx, 'History', 0, -50, 58, { fill: C.white, line: C.brown, lw: 0.2 });
        ctx.strokeStyle = C.lavS; ctx.lineWidth = 8; ctx.lineCap = 'round';
        for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(-130, 10 + i * 36); ctx.lineTo(130 - i * 40, 10 + i * 36); ctx.stroke(); }
        kText(ctx, '???', 70, 120, 44, { fill: C.butter, line: C.pinkD, lw: 0.2 });
      }, 1.1);
      const conf = t >= nb;
      popIn(ctx, t, nb - 0.25, 880, 370, () => chibi(ctx, 0, 0, 1, { hair: '#8a6a4f', coat: [C.mint, C.mintS], beard: C.white, eyes: conf ? 'swirl' : 'normal', mouth: conf ? 'wobble' : 'o', tilt: conf ? 0.05 * Math.sin(t * 20) : 0, armR: conf ? 2.6 : 0.2, armL: conf ? 2.6 : 0.2 }), 1.1);
      if (conf) { sweat(ctx, 985, 290, pop(t, nb + 0.07).s * 1.1, 0.35); ptext(ctx, t, nb + 0.05, 720, 300, '!?', 76, { fill: C.red, line: C.white, outer: C.plum, lw: 0.2 }); }
      kWord(ctx, 'How does it work??', 660, 140, 66, t, hw, 0.03, { fill: C.white, line: C.lavD });
    });
  }
  // S3 (p5-p6): ancient doctors thought the stomach cooked food like a pot
  {
    const dc = T(5, 'doctors'), st = T(5, 'stomach'), ck = T(6, 'cooked'), pt = T(6, 'pot');
    sfx(dc, 'pop', { f: 460 }); sfx(st, 'boing', { g: 0.7 }); sfx(ck, 'fizz', { d: 2.0 }); sfx(ck, 'whoosh', { d: 0.4, g: 0.3, minor: true }); sfx(pt, 'pop', { f: 700, g: 1 });
    scene(5, 'cut', TH.butter, 9, (ctx, t) => {
      twinkles(ctx, W, HH, t, 41, 8, (x, y) => y > 160);
      popIn(ctx, t, dc, 290, 350, () => chibi(ctx, 0, 0, 0.95, { hair: '#5f4a6e', coat: [C.white, C.creamS], beard: '#e8e0f0', band: C.mintD, armR: t > st ? 2.0 : 0.2, eyes: t > ck ? 'happy' : 'normal', mouth: 'smile' }), 1.1);
      ptag(ctx, t, dc + 0.25, 290, 640, 'ancient doctor', C.mint, 32);
      if (t >= ck) for (let i = 0; i < 3; i++) popIn(ctx, t, ck + i * 0.08, 760 + i * 90, 640, () => flame(ctx, 0, 0, 0.75, t * 6 + i * 2), 1.2);
      const ps = popIn(ctx, t, st, 840, 360, () => {
        stomach(ctx, 0, 0, 0.82, { sq: squash(t, st, 0.2), eyes: t > ck ? 'squeeze' : 'normal', mouth: t > ck ? 'w' : 'o', acid: t > ck ? 0.45 : 0, acidCol: 'rgba(255,214,120,0.9)', wave: t * 3 });
        if (t > pt) { cel(ctx, rrP(-200, -150, 60, 26, 13), C.lavS, C.lavD, -2, -2, 4); cel(ctx, rrP(150, -40, 60, 26, 13), C.lavS, C.lavD, -2, -2, 4); }
      }, 1.0);
      if (ps > 0 && t > ck) steam(ctx, 790, 200, t);
      kWord(ctx, 'A cooking pot?', 820, 140, 70, t, pt, 0.035, { fill: C.white, line: C.pinkD });
    });
  }
  // S4 (p7-p11): 1700s, animals fed food sealed in metal tubes: can't squish, still dissolves
  {
    const yr = T(7, 'seventeen'), an = T(8, 'animals'), mt = T(9, 'metal'), sq_ = T(10, 'squished'), ds = T(11, 'dissolved');
    sfx(yr, 'big'); sfx(an, 'pyon'); sfx(an + 0.1, 'popm', { f: 900 }); sfx(mt, 'tock', { f: 1800, g: 0.6 }); sfx(mt, 'pop', { f: 520 });
    sfx(sq_ - 0.25, 'whoosh', { d: 0.25, g: 0.3 }); sfx(sq_, 'thud', { f: 160, g: 0.6 }); sfx(sq_ + 0.05, 'tock', { f: 2000, g: 0.6 }); sfx(sq_ + 0.1, 'pop', { f: 760 });
    sfx(ds, 'fizz', { d: 1.0 }); sfx(ds + 0.5, 'success');
    scene(7, 'slide', TH.mint, 13, (ctx, t) => {
      twinkles(ctx, W, HH, t, 51, 7, (x, y) => y > 180);
      kWord(ctx, 'the 1700s', 640, 150, 96, t, yr, 0.04, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 });
      popIn(ctx, t, an, 300, 440, () => bird(ctx, 0, 0, 1.15, { eyes: t > ds ? 'star' : 'normal', look: [0.8, 0], beak: t > mt && t < mt + 0.5 ? 1 : 0, flap: t > ds ? t * 14 : 0, lift: t > ds ? Math.max(0, bob(t, 0, 14)) : 0 }), 1.1);
      const pr = prog(t, sq_ - 0.25, sq_), up = prog(t, sq_ + 0.1, sq_ + 0.5), py = 230 + 80 * H.ease.in(pr) - 140 * H.ease.out(up);
      if (t > sq_ - 0.25 && up < 1) { ctx.save(); ctx.globalAlpha = 1 - up; cel(ctx, rrP(700, py - 160, 280, 90, 22), C.lav, C.lavS, -6, -6); ctx.restore(); }
      popIn(ctx, t, mt, 840, 430, () => {
        const sq = squash(t, sq_, 0.12); ctx.scale(sq[0], sq[1]);
        const fk = 1 - H.ease.inOut(prog(t, ds, ds + 0.7));
        if (fk > 0) { ctx.save(); ctx.scale(fk, fk); cel(ctx, rrP(-70, -42, 140, 84, 22), '#ff9eb0', '#f07892', -5, -5); ctx.strokeStyle = '#ffd6de'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-40, -10); ctx.quadraticCurveTo(0, 10, 40, -14); ctx.stroke(); ctx.restore(); }
        if (t > ds) { const r = H.rng(9); for (let i = 0; i < 8; i++) { const u = ((t - ds) * 1.2 + i / 8) % 1; ctx.strokeStyle = 'rgba(90,54,89,0.6)'; ctx.lineWidth = 3; ctx.stroke(ellP(r.range(-120, 120), 40 - u * 90, 8 * (1 - u) + 2, 8 * (1 - u) + 2)); } }
        const cap = rrP(-180, -78, 360, 156, 78);
        ctx.save(); ctx.fillStyle = 'rgba(214,226,242,0.45)'; ctx.fill(cap); ctx.restore();
        ctx.save(); ctx.clip(cap); ctx.strokeStyle = '#9fb0c8'; ctx.lineWidth = 10; for (let x = -150; x <= 150; x += 50) { ctx.beginPath(); ctx.moveTo(x, -90); ctx.lineTo(x, 90); ctx.stroke(); } ctx.restore();
        ol(ctx, cap, 6); shine(ctx, -120, -50, 30, 8, -0.1, 0.8);
      }, 1.0);
      ptag(ctx, t, sq_ + 0.1, 840, 620, "can't squish!", C.butter, 34, ds - 0.15);
      ptext(ctx, t, ds, 840, 640, 'dissolved!', 64, { fill: C.mint, line: C.mintD, outer: C.plum, ow: 0.08, lw: 0.16 });
      impactLines(ctx, 840, 430, 190, t, sq_, 12, C.plum);
    });
  }
  // S5 (p12-p16): Spallanzani swallows linen bags of food -> gastric juice
  {
    const it = T(12, 'italian'), lz = T(12, 'lazzaro'), hm = T(13, 'himself'), ln = T(14, 'linen'), fd = T(14, 'food'), lq = T(15, 'liquid'), gj = T(16, 'gastric');
    sfx(it, 'pop', { f: 460 }); sfx(lz, 'popm', { f: 620 }); sfx(hm, 'pop', { f: 560 }); sfx(ln, 'pyon', { g: 0.7 }); sfx(fd, 'nom'); sfx(lq, 'slurp', { d: 0.5 }); sfx(lq + 0.05, 'pop', { f: 480 });
    sfx(gj, 'big'); sfx(gj + 0.3, 'twinkle', { n: 5 });
    scene(12, 'cut', TH.sky, 17, (ctx, t) => {
      twinkles(ctx, W, HH, t, 61, 8, (x, y) => x < 700 || y > 200);
      const pend = 0.22 * Math.sin(t * 3.2);
      if (t >= ln) {
        const hx = 330 + 70, hy = 360 + 170, bx = 640 + Math.sin(pend) * 160, by = 330 + Math.cos(pend) * 160;
        ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(hx, hy); ctx.quadraticCurveTo((hx + 640) / 2, 330, 640, 310); ctx.lineTo(bx, by - 44); ctx.stroke(); ctx.restore();
        popIn(ctx, t, ln, bx, by, () => { sack(ctx, 0, 0, 1.1, -pend); if (t > fd) { ctx.rotate(-pend); crumb(ctx, -8, 18, 22, t * 0.2); crumb(ctx, 16, 26, 16, 1); } }, 1.2);
        ptag(ctx, t, ln + 0.2, 640, 640, 'linen bag', C.butter, 32);
      }
      popIn(ctx, t, it - 0.1, 330, 360, () => chibi(ctx, 0, 0, 0.95, { wig: true, coat: [C.lav, C.lavS], collar: true, armR: t > ln ? 1.0 : 0.2, armL: t > hm && t < ln ? 2.4 : 0.2, eyes: t > gj ? 'star' : t > hm && t < ln ? 'happy' : 'normal', mouth: t > gj ? 'smile' : 'o' }), 1.1);
      ptag(ctx, t, lz, 330, 650, 'Lazzaro Spallanzani', C.pink, 30);
      if (t >= hm && t < lq) { const pb = pop(t, hm); bubble(ctx, 540, 160, 200, 104, [430, 270], [pb.sx, pb.sy]); ctx.save(); ctx.translate(540, 178); ctx.scale(pb.s, pb.s); kText(ctx, 'on me!', 0, 0, 46, { fill: C.sky, line: C.skyD, shadow: false, lw: 0.16 }); ctx.restore(); }
      popIn(ctx, t, lq, 1000, 440, () => flask(ctx, 0, 0, 1.05, 'rgba(255,224,110,0.95)', { wave: t * 4, eyes: t > gj ? 'happy' : 'normal', mouth: 'w' }), 1.1);
      kWord(ctx, 'gastric juice!', 960, 150, 64, t, gj, 0.03, { fill: C.butter, line: C.pinkD });
      if (t > gj) for (let i = 0; i < 5; i++) { const a = i / 5 * TAU + t * 1.4, kk = Math.max(0, Math.sin(t * 8 + i * 2)); sparkle(ctx, 1000 + Math.cos(a) * 190, 450 + Math.sin(a) * 170, 10 + 9 * kk, i % 2 ? C.white : C.butter, 0, 3); }
    });
  }
  // S6 (p17-p18): let's follow one bite, all the way through
  {
    const fl = T(17, 'follow'), ob = T(17, 'bite'), al = T(18, 'all');
    const route = [[900, 340], [900, 390], [870, 420], [930, 450], [870, 480], [930, 515], [900, 560]];
    sfx(PS(17) - 0.3, 'pyon', { g: 1 }); sfx(fl, 'popm'); sfx(ob, 'pop', { f: 620, g: 1 }); sfx(al, 'stroke', { n: 8, d: 1.0, pan: 0.4 }); sfx(al + 1.0, 'twinkle', { n: 4 });
    scene(17, 'slide', TH.pink, 19, (ctx, t) => {
      twinkles(ctx, W, HH, t, 71, 9, (x, y) => y > 200);
      popIn(ctx, t, PS(17) - 0.2, 900, 420, () => chibi(ctx, 0, -150, 1.25, { hair: '#7b4f6b', coat: [C.lav, C.lavS], eyes: 'happy', mouth: 'O' }), 1.0);
      dotted(ctx, route, H.ease.out(prog(t, al, al + 1.0)), C.pinkD, 6, 18);
      const lp = pop(t, PS(17) - 0.3);
      if (lp.s > 0) bite(ctx, 380, 450, 1.2 * lp.s, { sq: squash(t, PS(17), 0.2), lift: Math.max(0, bob(t, 0, 16)), eyes: t > ob ? 'star' : 'normal', armR: 2.4 + 0.3 * Math.sin(t * 10), armL: 0.4, mouth: 'smile', look: [0.7, -0.2] });
      kWord(ctx, "Let's follow one bite!", 660, 140, 68, t, fl, 0.03, { fill: C.white, line: C.pinkD });
    });
  }

  // ---------------- CHAPTER 2: THE MOUTH ----------------
  // S7 (p19-p21): teeth crush the bite into mush, saliva soaks it
  {
    const sp = T(19, 'step'), te = T(20, 'teeth'), chomps = [T(20, 'crush'), T(20, 'bite'), T(20, 'mush')], sl = T(21, 'saliva'), so = T(21, 'soaks');
    sfx(sp, 'popm', { f: 560 }); sfx(te, 'pop', { f: 760 });
    chomps.forEach((c, i) => { sfx(c, 'thud', { f: 200 + i * 20, g: 0.4 }); sfx(c, 'nom', { g: 1.2 }); sfx(c + 0.02, 'squish', { g: 0.6 }); });
    sfx(sl, 'pop', { f: 480 }); for (let i = 0; i < 5; i++) sfx(sl + 0.1 + i * 0.12, 'popm', { f: 900 - i * 60, g: 0.4 }); sfx(so, 'slurp', { d: 0.5 });
    const openAt = (t) => { let o = 1; for (const c of chomps) { if (t >= c - 0.12 && t < c) o = Math.min(o, H.lerp(1, 0.04, (t - (c - 0.12)) / 0.12)); else if (t >= c && t < c + 0.25) o = Math.min(o, H.lerp(0.04, 1, H.ease.out((t - c) / 0.25))); } return o; };
    scene(19, 'heart', TH.butter, 23, (ctx, t) => {
      twinkles(ctx, W, HH, t, 81, 8, (x, y) => x > 300 && x < 980);
      const cx = 640, cy = 420, o = openAt(t), h = 40 + 220 * o, sq = squash(t, chomps[2], 0.06);
      ctx.save(); ctx.translate(cx, cy); ctx.scale(sq[0], sq[1]); ctx.translate(-cx, -cy);
      const inner = rrP(cx - 280, cy - h / 2 - 80, 560, h + 160, 110);
      ctx.save(); ctx.lineJoin = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 78; ctx.stroke(inner); ctx.strokeStyle = C.pinkD; ctx.lineWidth = 66; ctx.stroke(inner); ctx.strokeStyle = '#ff9bba'; ctx.lineWidth = 30; ctx.translate(-6, -6); ctx.stroke(inner); ctx.restore();
      ctx.fillStyle = '#9c3a62'; ctx.fill(inner);
      ctx.save(); ctx.clip(inner);
      cel(ctx, ellP(cx, cy + h / 2 + 90, 230, 90), '#ff8fab', '#ef6f92', -6, -6, 4); // tongue
      // the food between the teeth
      const n = chomps.filter((c) => t >= c).length;
      if (n === 0) bite(ctx, cx, cy - 30, 0.8, { eyes: 'shock', mouth: 'O', shadow: false });
      else if (n < 3) { const r = H.rng(30 + n), k = n === 1 ? 3 : 6; for (let i = 0; i < k; i++) crumb(ctx, cx + r.range(-150, 150), cy + r.range(-40, 40), n === 1 ? 64 : 42, r.range(0, 6)); }
      else { const wet = pop(t, sl).s; mush(ctx, cx, cy + 10, 78, { eyes: 'happy', mouth: 'w', fill: H.rgba(H.mix('#fff1d6', '#e8f4ff', wet * 0.6)) }); if (wet > 0) { shine(ctx, cx - 30, cy - 40, 18, 8, -0.8); shine(ctx, cx + 40, cy + 10, 10, 5, -0.8); } }
      for (let i = 0; i < 5; i++) {
        const x = cx - 240 + i * 96;
        cel(ctx, rrP(x + 6, cy - h / 2 - 90, 84, 90, [0, 0, 26, 26]), C.white, C.creamS, -4, -4, 4);
        cel(ctx, rrP(x + 6, cy + h / 2, 84, 90, [26, 26, 0, 0]), C.white, C.creamS, -4, -4, 4);
      }
      ctx.restore();
      ctx.restore();
      // saliva drops
      if (t >= sl) for (let i = 0; i < 5; i++) { const u = prog(t, sl + i * 0.12, sl + i * 0.12 + 0.6); if (u <= 0 || u >= 1) continue; drop(ctx, 420 + i * 110, H.lerp(150, cy, H.ease.in(u)), 0.9); }
      ptag(ctx, t, te, 200, 230, 'teeth', C.white, 34);
      ptag(ctx, t, sl, 1090, 230, 'saliva', C.sky, 34);
      kWord(ctx, 'Your mouth', 640, 120, 66, t, sp, 0.035, { fill: C.white, line: C.pinkD });
      kana(ctx, 'もぐもぐ', 180, 620, 48, -0.12, t > chomps[0] ? pop(t, chomps[0]).s * (Math.floor(t * 7.5) % 2 ? 1 : 0.94) : 0, C.butter);
    });
  }
  // S8 (p22-p24): amylase turns starch into sugar before you swallow
  {
    const dr = PS(22) - 0.2, am = T(22, 'amylase'), st_ = T(23, 'starch'), mv0 = T(23, 'turning'), su = T(23, 'sugar'), bf = T(24, 'before');
    const mv1 = su + 0.45, X0 = 430, DX = 100, N = 8, ex = (t) => H.lerp(300, X0 + (N - 1) * DX + 40, H.ease.inOut(prog(t, mv0, mv1)));
    const cutT = (i) => mv0 + (mv1 - mv0) * H.clamp(((X0 + i * DX) - 300 + 40) / ((X0 + (N - 1) * DX + 40) - 300));
    sfx(dr, 'pop', { f: 420 }); sfx(am, 'pop', { f: 620, g: 1 }); sfx(PS(23) - 0.1, 'stroke', { n: 8, d: 0.4 }); sfx(st_, 'popm', { f: 700 });
    for (let i = 0; i < N; i++) { sfx(cutT(i), 'nom', { g: 0.6, pan: -0.6 + i * 0.17 }); sfx(cutT(i) + 0.03, 'popm', { f: 700 + i * 50, g: 0.5 }); }
    sfx(su, 'success'); sfx(bf, 'pop', { f: 540 });
    scene(22, 'slide', TH.mint, 29, (ctx, t) => {
      twinkles(ctx, W, HH, t, 91, 7, (x, y) => y > 200 && y < 640);
      const dOut = t > mv0 ? popOut(t, mv0, 0.3) : 1;
      if (dOut > 0) popIn(ctx, t, dr, 300, 420, () => { ctx.scale(dOut, dOut); drop(ctx, 0, 0, 3.2, C.sky, C.skyS, 4); face(ctx, 0, 40, 0.75, { eyes: 'happy', mouth: 'smile' }); }, 1.1);
      if (dOut > 0) ptag(ctx, t, dr + 0.1, 300, 640, 'saliva', C.sky, 32, mv0);
      // starch chain
      const ch0 = pop(t, PS(23) - 0.1);
      if (ch0.s > 0) for (let i = 0; i < N; i++) {
        const x = X0 + i * DX, cut = t >= cutT(i), dy = cut ? 70 * H.ease.out(prog(t, cutT(i), cutT(i) + 0.3)) : 0;
        if (i < N - 1 && !(t >= cutT(i + 1) || cut)) { ctx.fillStyle = C.plum; ctx.fillRect(x + 30, 446, 40, 9); }
        const sq = cut ? squash(t, cutT(i) + 0.3, 0.25) : [1, 1];
        ctx.save(); ctx.translate(x, 450 + dy - (cut ? Math.max(0, Math.sin((t - cutT(i)) * 4 + i)) * 10 : 0)); ctx.scale(ch0.s * sq[0], ch0.s * sq[1]);
        cel(ctx, hexP(0, 0, 40, Math.PI / 6), cut ? C.pink : C.butter, cut ? C.pinkS : C.butterS, -4, -4, 4);
        if (cut) { eye(ctx, -10, -4, 5, 7, '#8a6cf0', 'happy'); eye(ctx, 10, -4, 5, 7, '#8a6cf0', 'happy'); }
        ctx.restore();
        if (cut) sparkle(ctx, x + 30, 410 + dy, 10 * Math.max(0, 1 - (t - cutT(i)) * 1.5), C.butter, 0, 3);
      }
      ptag(ctx, t, st_, 780, 330, 'starch', C.butter, 34, su - 0.1);
      ptext(ctx, t, su, 780, 650, 'sugar!', 76, { fill: C.pink, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 });
      // the enzyme
      const pe = pop(t, am);
      if (pe.s > 0) { const moving = t > mv0 && t < mv1; chomper(ctx, ex(t), 450 + (moving ? 0 : bob(t, 0, 6)), 0.75 * pe.s, moving ? 0.5 + 0.5 * Math.sin(t * 24) : 0.35, [C.lav, C.lavS], { eyes: t > su ? 'happy' : 'normal' }); }
      ptag(ctx, t, am, 300, 300, 'amylase', C.lav, 36, mv0);
      kWord(ctx, 'Before you swallow!', 640, 140, 62, t, bf, 0.03, { fill: C.white, line: C.mintD });
    });
  }
  // S9 (p25-p28): tongue pushes the food back, the epiglottis folds over the windpipe
  {
    const pu = T(25, 'pushes'), ep = T(26, 'epiglottis'), fo = T(27, 'folds'), wp = T(27, 'windpipe'), no = T(28, 'nothing'), wr = T(28, 'wrong');
    const throat = [[640, 60], [640, 300]], wind = bez([600, 290], [570, 420], [480, 520], [450, 720], 30), eso = bez([680, 290], [730, 420], [820, 520], [840, 720], 30);
    const hinge = [575, 300];
    sfx(pu, 'whoosh', { d: 0.5, g: 0.35 }); sfx(pu, 'squish'); sfx(ep, 'pop', { f: 620 }); sfx(fo, 'thud', { f: 180, g: 0.4 }); sfx(fo + 0.05, 'popm', { f: 500 }); sfx(wp, 'popm', { f: 680 });
    sfx(no, 'slurp', { d: 0.6 }); sfx(wr, 'pop', { f: 360 }); sfx(wr + 0.25, 'success');
    scene(25, 'cut', TH.lav, 37, (ctx, t) => {
      twinkles(ctx, W, HH, t, 101, 8, (x, y) => x > 380 && x < 900);
      tube(ctx, wind, 104, C.sky, C.skyS);
      ctx.save(); ctx.strokeStyle = C.skyS; ctx.lineWidth = 7; ctx.lineCap = 'round';
      for (let d = 60; d < plen(wind) - 20; d += 46) { const [x, y, a] = along(wind, d); ctx.beginPath(); ctx.moveTo(x + Math.cos(a + 1.57) * 40, y + Math.sin(a + 1.57) * 40); ctx.lineTo(x - Math.cos(a + 1.57) * 40, y - Math.sin(a + 1.57) * 40); ctx.stroke(); }
      ctx.restore();
      tube(ctx, eso, 104, C.pink, C.pinkS);
      tube(ctx, throat, 150, C.pink, C.pinkS);
      // food ball
      let fx = 640, fy = 70;
      if (t >= pu) { fy = H.lerp(70, 250, H.ease.inOut(prog(t, pu, pu + 1.0))); }
      if (t >= no) { const [x, y] = along(eso, plen(eso) * 0.62 * H.ease.inOut(prog(t, no, no + 1.2))); fx = x; fy = y; }
      mush(ctx, fx, fy, 50, { eyes: t > wr ? 'happy' : 'normal', mouth: 'w', look: [0, 1] });
      // epiglottis flap
      const a = H.lerp(-1.75, 0.45, H.ease.back(prog(t, fo, fo + 0.35)));
      ctx.save(); ctx.translate(hinge[0], hinge[1]); ctx.rotate(a); cel(ctx, ellP(52, 0, 60, 20), C.mint, C.mintS, -3, -3, 4.5); shine(ctx, 40, -6, 14, 4, 0); ctx.restore();
      impactLines(ctx, hinge[0] + 50, hinge[1] + 20, 40, t, fo + 0.2, 8, C.mintD);
      if (t > ep) { ctx.save(); dotted(ctx, bez([330, 290], [420, 250], [480, 260], [548, 288], 30), H.ease.out(prog(t, ep, ep + 0.35)), C.mintD, 5, 18, 0.8); ctx.restore(); }
      ptag(ctx, t, ep, 250, 260, 'epiglottis', C.mint, 34);
      ptag(ctx, t, wp, 260, 600, 'windpipe', C.sky, 34);
      cross(ctx, 470, 470, 0.8, t, wr);
      check(ctx, 900, 470, 0.9, t, wr + 0.25);
      kana(ctx, 'ごっくん', 980, 200, 48, 0.12, t > no && t < no + 1.6 ? pop(t, no).s * popOut(t, no + 1.4) : 0, C.pink);
    });
  }
  // S10 (p29-p30): the esophagus, a muscle tube about 25 cm long
  {
    const es = T(29, 'esophagus'), mu = T(30, 'muscle'), tf = T(30, 'twentyfive');
    const pipe = [[600, 40], [610, 200], [590, 400], [600, 690]];
    sfx(es, 'pop', { f: 540 }); sfx(mu, 'popm', { f: 680 }); sfx(tf - 0.35, 'stroke', { n: 10, d: 0.35, pan: 0.3 }); sfx(tf, 'big');
    scene(29, 'slide', TH.sky, 41, (ctx, t) => {
      twinkles(ctx, W, HH, t, 111, 8, (x, y) => x > 480 && x < 900);
      tube(ctx, bez(pipe[0], pipe[1], pipe[2], pipe[3], 40), 130, C.pink, C.pinkS);
      ctx.save(); ctx.strokeStyle = C.pinkS; ctx.lineWidth = 6; ctx.lineCap = 'round'; const bp = bez(pipe[0], pipe[1], pipe[2], pipe[3], 40);
      for (let d = 40; d < plen(bp); d += 54) { const [x, y] = along(bp, d); ctx.beginPath(); ctx.moveTo(x - 50, y); ctx.quadraticCurveTo(x, y + 12, x + 50, y); ctx.stroke(); } ctx.restore();
      const [fx, fy] = along(bp, plen(bp) * H.lerp(0.08, 0.42, prog(t, PS(29), PE(30) + 0.4)));
      mush(ctx, fx, fy, 50, { eyes: 'happy', mouth: 'w' });
      // ruler
      const rp = H.ease.out(prog(t, tf - 0.35, tf));
      if (rp > 0) {
        const y0 = 70, len = 590 * rp;
        cel(ctx, rrP(760, y0, 64, len, 12), C.butter, C.butterS, -4, -4, 4.5);
        ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 4; ctx.lineCap = 'round';
        for (let i = 0; i <= 25; i++) { const y = y0 + 10 + i * 22.8; if (y > y0 + len - 6) break; ctx.beginPath(); ctx.moveTo(760, y); ctx.lineTo(760 + (i % 5 ? 18 : 32), y); ctx.stroke(); } ctx.restore();
      }
      kWord(ctx, 'esophagus', 300, 300, 64, t, es, 0.03, { fill: C.white, line: C.pinkD });
      ptag(ctx, t, mu, 300, 400, 'muscle tube', C.pink, 34);
      popIn(ctx, t, tf, 1040, 420, () => kText(ctx, '25 cm', 0, 0, 120, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 }), 1.5);
      impactLines(ctx, 1040, 380, 160, t, tf, 12, C.pinkD);
    });
  }
  // S11 (p31-p34): it doesn't just fall: rings of muscle squeeze behind it (peristalsis)
  {
    const fa = T(31, 'fall'), ri = T(32, 'rings'), sq_ = T(32, 'squeeze'), tp = T(33, 'toothpaste'), pe = T(34, 'peristalsis'), end = PE(34) + 0.4;
    const ballX = (t) => H.lerp(220, 1060, H.ease.inOut(prog(t, ri, end)));
    sfx(fa, 'pop', { f: 360 }); sfx(fa + 0.25, 'aww'); sfx(ri, 'popm', { f: 520 });
    for (let x = ri; x < end; x += 0.42) sfx(x, 'squish', { g: 0.7 });
    sfx(tp, 'pop', { f: 640, g: 1 }); sfx(tp + 0.2, 'slurp', { d: 0.3 }); sfx(pe, 'big');
    scene(31, 'cut', TH.pink, 43, (ctx, t) => {
      twinkles(ctx, W, HH, t, 121, 8, (x, y) => y > 300 && y < 560);
      const cy = 440, bx = ballX(t), wx = bx - 110, moving = t > ri;
      const R = (x) => 86 - (moving ? 46 * Math.exp(-Math.pow((x - wx) / 52, 2)) : 0);
      const top = [], bot = [];
      for (let x = 30; x <= 1250; x += 10) { top.push([x, cy - R(x)]); bot.push([x, cy + R(x)]); }
      const body = new Path2D(); body.moveTo(top[0][0], top[0][1]); top.forEach((p) => body.lineTo(p[0], p[1])); for (let i = bot.length - 1; i >= 0; i--) body.lineTo(bot[i][0], bot[i][1]); body.closePath();
      ctx.save(); ctx.fillStyle = C.pinkS; ctx.fill(body); ctx.clip(body); ctx.fillStyle = C.pink; ctx.fillRect(0, cy - 120, W, 150);
      ctx.strokeStyle = 'rgba(245,151,183,0.9)'; ctx.lineWidth = 6; for (let x = 60; x < 1250; x += 64) { ctx.beginPath(); ctx.moveTo(x, cy - 100); ctx.quadraticCurveTo(x + 14, cy, x, cy + 100); ctx.stroke(); }
      mush(ctx, bx, cy, 56, { eyes: moving ? 'happy' : 'normal', mouth: moving ? 'w' : 'o' });
      ctx.restore();
      ctx.save(); ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 6;
      for (const line of [top, bot]) { ctx.beginPath(); line.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); }
      ctx.strokeStyle = 'rgba(255,255,255,0.75)'; ctx.lineWidth = 6; ctx.beginPath(); top.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1] + 14) : ctx.moveTo(p[0], p[1] + 14))); ctx.stroke();
      ctx.restore();
      if (moving && t > sq_) { for (const sd of [-1, 1]) dotted(ctx, [[wx, cy + sd * 170], [wx, cy + sd * 74]], 1, C.pinkD, 5, 16, 0.8); kana(ctx, 'ぎゅっ', Math.max(150, wx), cy - 190, 46, -0.1, pop(t, sq_).s, C.pink); }
      // "doesn't just fall": a gravity arrow, crossed out
      if (t >= fa && t < ri + 0.3) { const o = popOut(t, ri + 0.1); ctx.save(); ctx.globalAlpha = o; dotted(ctx, [[220, 150], [220, 330]], H.ease.out(prog(t, fa, fa + 0.3)), C.lavD, 7, 22); ctx.restore(); if (o > 0) cross(ctx, 300, 220, 0.75 * o, t, fa + 0.25); }
      popIn(ctx, t, tp, 1050, 170, () => { ctx.rotate(-0.25); cel(ctx, roundPoly([[-110, -40], [70, -30], [70, 30], [-110, 40]], 16), C.sky, C.skyS, -5, -5); cel(ctx, rrP(68, -22, 46, 44, 10), C.white, C.creamS, -3, -3, 4); const pp = prog(t, tp + 0.15, tp + 0.6); if (pp > 0) tube(ctx, partial([[114, 0], [150, -10], [170, 20], [200, 0]], pp), 22, C.mint, C.mintS, false); face(ctx, -30, -6, 0.5, { eyes: 'squeeze', mouth: 'w' }); }, 1.2);
      kWord(ctx, 'peristalsis', 640, 670, 78, t, pe, 0.035, { fill: C.white, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.18 });
    });
  }
  // S12 (p35-p36): about nine seconds, and it works even upside down
  {
    const tr = T(35, 'trip'), ni = T(35, 'nine'), up = T(36, 'upside'), dn = T(36, 'down');
    sfx(tr, 'pop', { f: 520 }); for (let i = 0; i < 9; i++) sfx(tr + (ni - tr) * i / 9, 'tock', { f: 1300 + i * 30, g: 0.35 }); sfx(ni, 'big');
    sfx(up - 0.3, 'whoosh', { d: 0.4, g: 0.4 }); sfx(up + 0.1, 'boing'); sfx(dn, 'success'); sfx(dn + 0.2, 'twinkle', { n: 5 });
    scene(35, 'slide', TH.mint, 47, (ctx, t) => {
      twinkles(ctx, W, HH, t, 131, 8, (x, y) => y > 160);
      popIn(ctx, t, tr, 360, 390, () => { const sp = TAU * 0.95 * H.ease.out(prog(t, tr, ni)); clock(ctx, 0, 0, 160, sp * 12); }, 1.1);
      popIn(ctx, t, ni, 360, 660, () => kText(ctx, '9 sec', 0, 0, 104, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 }), 1.5);
      // the kid flips into a handstand; food still goes "down" to the stomach
      const pk = pop(t, up - 0.5);
      if (pk.s > 0) {
        const fl = H.ease.back(prog(t, up - 0.25, up + 0.2));
        ctx.save(); ctx.translate(930, 400); ctx.rotate(Math.PI * fl); ctx.scale(pk.sx, pk.sy);
        chibi(ctx, 0, -60, 1.0, { hair: '#7b4f6b', coat: [C.pink, C.pinkS], eyes: t > dn ? 'happy' : 'normal', mouth: t > dn ? 'smile' : 'O', armL: 2.9, armR: 2.9, shadow: false });
        ctx.restore();
        if (t > dn) { dotted(ctx, [[1060, 560], [1060, 300]], H.ease.out(prog(t, dn, dn + 0.4)), C.pinkD, 6, 20); }
      }
      ptext(ctx, t, dn, 930, 120, 'Upside down!', 60, { fill: C.white, line: C.mintD });
      kana(ctx, 'すごい!', 1130, 640, 46, 0.12, t > dn ? pop(t, dn + 0.15).s : 0, C.butter);
    });
  }

  // ---------------- CHAPTER 3: THE STOMACH ----------------
  // S13 (p37-p39): next stop the stomach: a stretchy bag of muscle filled with hydrochloric acid
  {
    const ns = T(37, 'next'), sm = T(37, 'stomach'), sv = T(38, 'stretchy'), hc = T(39, 'hydrochloric');
    sfx(ns, 'popm', { f: 600 }); sfx(sm, 'boing', { g: 1.1 }); sfx(sm + 0.5, 'slurp', { d: 0.4 }); sfx(sv, 'boing', { g: 0.8 }); sfx(sv + 0.1, 'pop', { f: 700 });
    sfx(hc, 'fizz', { d: 2.2, g: 1.2 }); sfx(hc + 0.1, 'pop', { f: 460 });
    scene(37, 'star', TH.butter, 53, (ctx, t) => {
      twinkles(ctx, W, HH, t, 141, 9, (x, y) => x > 330 && x < 900 && y > 180);
      const st = prog(t, sv, sv + 0.9), k = Math.sin(st * Math.PI);
      const sq0 = squash(t, sm, 0.18), sq = [sq0[0] * (1 + 0.24 * k), sq0[1] * (1 - 0.1 * k)];
      const ac = 0.48 * H.ease.out(prog(t, hc, hc + 0.9));
      popIn(ctx, t, sm - 0.15, 600, 420, () => stomach(ctx, 0, 0, 1.25, {
        sq, eyes: t > hc ? 'happy' : 'normal', mouth: t > sv ? 'smile' : 'o', acid: ac, wave: t * 3, faceAt: [-40, -10],
        inner: (c) => { const u = prog(t, sm + 0.3, sm + 1.0); if (u > 0) mush(c, H.lerp(-50, 40, u), H.lerp(-170, 100, H.ease.in(u)) + (u >= 1 ? Math.sin(t * 3) * 6 : 0), 36, { eyes: 'happy', mouth: 'w' }); },
      }), 1.0);
      ptag(ctx, t, sv, 1060, 250, 'stretchy!', C.pink, 36);
      if (t > hc) dotted(ctx, bez([1000, 560], [930, 600], [860, 580], [790, 540], 30), H.ease.out(prog(t, hc + 0.2, hc + 0.5)), C.mintD, 5, 18, 0.8);
      ptag(ctx, t, hc, 1080, 560, 'HCl acid', C.mint, 36);
      kWord(ctx, 'Next stop: Stomach!', 640, 125, 64, t, ns, 0.03, { fill: C.white, line: C.pinkD });
      impactLines(ctx, 600, 420, 230, t, sv, 12, C.pinkD);
    });
  }
  // S14 (p40-p41): stomach acid can drop to about pH 2, as sour as lemon juice
  {
    const ac = T(40, 'acid'), two = T(40, 'two'), so = T(41, 'sour'), le = T(41, 'lemon');
    const X0 = 108, DX = 76, cellX = (i) => X0 + i * DX + 34;
    const col = (i) => i < 4 ? H.mix(C.pinkD, C.butterD, i / 4) : i < 8 ? H.mix(C.butterD, C.mintD, (i - 4) / 4) : H.mix(C.mintD, C.lavD, (i - 8) / 6);
    sfx(ac, 'popm', { f: 500 }); for (let i = 0; i < 15; i++) sfx(ac + i * 0.05, 'tock', { f: 900 + i * 50, g: 0.25, pan: -0.8 + i * 0.11 });
    sfx(two - 0.25, 'pyon'); sfx(two, 'big'); sfx(so, 'popm', { f: 820 }); sfx(le, 'boing', { g: 0.9 }); sfx(le + 0.1, 'pop', { f: 640 });
    scene(40, 'slide', TH.lav, 59, (ctx, t) => {
      twinkles(ctx, W, HH, t, 151, 7, (x, y) => y > 380);
      for (let i = 0; i < 15; i++) {
        const p = pop(t, ac + i * 0.05); if (p.s <= 0) continue;
        const c = col(i), on = i === 2 && t > two, k = on ? 1 + 0.1 * Math.max(0, Math.sin((t - two) * 10)) * Math.exp(-(t - two) * 2) : 1;
        ctx.save(); ctx.translate(cellX(i), 520); ctx.scale(p.sx * k, p.sy * k);
        cel(ctx, rrP(-34, -38, 68, 76, 18), H.rgba(H.mix(c, '#ffffff', 0.25)), H.rgba(c), -4, -4, on ? 6 : 4);
        ctx.font = `700 34px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = C.plum; ctx.fillText(String(i), 0, 3);
        ctx.restore();
      }
      ptag(ctx, t, ac + 0.8, 230, 630, 'acid', C.pink, 30); ptag(ctx, t, ac + 0.85, 640, 630, 'neutral', C.mint, 30); ptag(ctx, t, ac + 0.9, 1100, 630, 'basic', C.lav, 30);
      // marker drops onto 2
      const dp = prog(t, two - 0.25, two);
      if (dp > 0) { const y = H.lerp(250, 440, H.ease.in(dp)), sq = squash(t, two, 0.3); ctx.save(); ctx.translate(cellX(2), y); ctx.scale(sq[0], sq[1]); heart(ctx, 0, 0, 28, C.pinkD, Math.PI); ctx.restore(); impactLines(ctx, cellX(2), 520, 60, t, two, 10, C.pinkD); }
      popIn(ctx, t, two, 420, 290, () => kText(ctx, 'pH 2', 0, 0, 136, { fill: C.pink, line: C.white, outer: C.plum, ow: 0.07, lw: 0.13 }), 1.5);
      popIn(ctx, t, le - 0.1, 920, 280, () => lemon(ctx, 0, 0, 0.9, { eyes: 'squeeze', mouth: 'wobble' }), 1.1);
      ptag(ctx, t, le + 0.1, 920, 410, 'lemon juice', C.butter, 32);
      kana(ctx, 'すっぱい!', 1140, 150, 44, 0.15, t > so ? pop(t, so).s : 0, C.butter);
    });
  }
  // S15 (p42-p44): it kills germs; pepsin starts chopping up protein
  {
    const ki = T(42, 'kills'), ge = T(42, 'germs'), pe = T(43, 'pepsin'), ch = T(44, 'chopping'), pr = T(44, 'protein'), end = PE(44) + 0.4;
    const G = [[380, 270, 0], [560, 200, 1], [760, 250, 2], [930, 190, 3], [1080, 290, 4]], GC = [[C.lav, C.lavS], [C.mint, C.mintS], [C.sky, C.skyS], [C.butter, C.butterS], [C.lav, C.lavS]];
    const goneT = (i) => ge + 0.2 + i * 0.1;
    const NB = 12, bx = (i) => 450 + i * 58, by = (i) => 520 + (i % 2 ? -28 : 28), BC = [C.mint, C.sky, C.lav, C.butter];
    const cx = (t) => H.lerp(260, 1150, H.ease.inOut(prog(t, ch, end))), cutT = (i) => ch + (end - ch) * H.clamp((bx(i) - 260 + 30) / (1150 - 260));
    G.forEach((g, i) => { sfx(PS(42) - 0.3 + i * 0.06, 'popm', { f: 700 + i * 60, g: 0.4 }); sfx(goneT(i), 'pop', { f: 360 + i * 30, g: 0.6 }); });
    sfx(ki, 'fizz', { d: 1.2 }); sfx(ki + 0.2, 'aww'); sfx(pe, 'pop', { f: 560, g: 1 }); sfx(pe + 0.3, 'stroke', { n: 6, d: 0.4 }); sfx(pr, 'popm', { f: 640 });
    for (let i = 0; i < NB; i += 2) sfx(cutT(i), 'nom', { g: 0.7, pan: -0.5 + i * 0.08 });
    scene(42, 'cut', TH.mint, 61, (ctx, t) => {
      twinkles(ctx, W, HH, t, 161, 7, (x, y) => y > 150);
      // acid rain on the germs
      if (t > ki && t < goneT(4) + 0.3) { const r = H.rng(41); for (let i = 0; i < 10; i++) { const u = ((t - ki) * 1.6 + r()) % 1; drop(ctx, r.range(330, 1130), H.lerp(90, 300, u), 0.55, '#c9f29b', '#9ed46a', 3); } }
      G.forEach(([x, y, ph], i) => {
        const p = pop(t, PS(42) - 0.3 + i * 0.06); if (p.s <= 0) return;
        if (t > goneT(i)) { poof(ctx, x, y, t, goneT(i), 60); return; }
        germ(ctx, x, y + bob(t, ph, 6), 0.95 * p.s, GC[i], { eyes: t > ki + 0.2 + i * 0.08 ? 'swirl' : 'normal', mouth: t > ki ? 'wobble' : 'w', rot: t * 0.6 + ph });
      });
      ptag(ctx, t, ge, 640, 390, 'germs', C.lav, 34, goneT(4) + 0.2);
      // protein chain and pepsin
      const pc = pop(t, pe + 0.3);
      if (pc.s > 0) for (let i = 0; i < NB; i++) {
        const cut = t > cutT(i), k = cut ? H.ease.out(prog(t, cutT(i), cutT(i) + 0.3)) : 0, pair = Math.floor(i / 2), dx = cut ? (i % 2 ? 1 : -1) * 0 + (pair - 2.5) * 22 * k : 0, dy = cut ? 40 * k * (pair % 2 ? 1 : -1) : 0;
        if (i < NB - 1 && !cut) { ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(bx(i), by(i)); ctx.lineTo(bx(i + 1), by(i + 1)); ctx.stroke(); ctx.restore(); }
        if (cut && i % 2 === 0) { ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(bx(i) + dx, by(i) + dy); ctx.lineTo(bx(i + 1) + dx, by(i + 1) + dy); ctx.stroke(); ctx.restore(); }
        cel(ctx, ellP(bx(i) + dx, by(i) + dy, 28 * pc.s, 28 * pc.s), BC[i % 4], H.rgba(H.mix(BC[i % 4], C.plum, 0.18)), -3, -3, 4);
      }
      const pp = pop(t, pe);
      if (pp.s > 0) { const mv = t > ch && t < end; chomper(ctx, cx(t), 520 + (mv ? 0 : bob(t, 0, 6)), 0.8 * pp.s, mv ? 0.5 + 0.5 * Math.sin(t * 24) : 0.3, [C.pink, C.pinkS], { eyes: t > end ? 'happy' : 'normal' }); }
      ptag(ctx, t, pe, 260, 650, 'pepsin', C.pink, 34, ch);
      ptag(ctx, t, pr, 780, 660, 'protein', C.sky, 34);
    });
  }
  // S16 (p45-p48): three times a minute the walls squeeze and churn -> chyme, 2 to 4 hours
  {
    const th = T(45, 'three'), sq_ = T(46, 'squeeze'), ch = T(47, 'chyme'), so = T(47, 'soup'), tw = T(48, 'two');
    sfx(th, 'big'); for (let x = sq_; x < PE(48); x += 0.62) sfx(x, 'squish', { g: 0.8 }); sfx(so, 'popm', { f: 520 }); sfx(ch, 'pop', { f: 600, g: 1 });
    sfx(tw - 0.2, 'pop', { f: 480 }); for (let i = 0; i < 12; i++) sfx(tw + i * 0.1, 'tock', { f: 1400, g: 0.25 }); sfx(tw + 0.4, 'bell', { f: 'E5' });
    scene(45, 'slide', TH.pink, 67, (ctx, t) => {
      twinkles(ctx, W, HH, t, 171, 8, (x, y) => x < 820 && y > 150);
      const on = t > sq_ ? 1 : 0, w = Math.sin((t - sq_) * TAU * 1.6) * on;
      const sq = [1 + 0.07 * w, 1 - 0.07 * Math.sin((t - sq_) * TAU * 1.6 + 0.8) * on];
      const ac = H.lerp(0.42, 0.62, prog(t, so, so + 0.6));
      stomach(ctx, 470, 420, 1.15, {
        sq, acid: ac, acidCol: t > so ? 'rgba(255,226,165,0.96)' : 'rgba(190,240,140,0.85)', wave: t * 5, eyes: on ? 'squeeze' : 'normal', mouth: on ? 'w' : 'smile', faceAt: [-40, -20],
        inner: (c) => { const r = H.rng(12); for (let i = 0; i < 8; i++) { const a = t * 2.2 * on + i / 8 * TAU, rr = r.range(30, 90); crumb(c, Math.cos(a) * rr * 1.4 + 20, 100 + Math.sin(a) * rr * 0.35, r.range(12, 22) * (1 - prog(t, so, so + 1.2) * 0.6), a); } },
      });
      if (on) for (let i = 0; i < 3; i++) { const u = ((t - sq_) * 0.8 + i / 3) % 1; ctx.save(); ctx.globalAlpha = Math.sin(u * Math.PI); ctx.strokeStyle = C.pinkD; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(470 - 250 + u * 380, 430, 175, -0.5, 0.5); ctx.stroke(); ctx.restore(); }
      popIn(ctx, t, th, 1030, 200, () => { kText(ctx, '3×', 0, 0, 120, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 }); kText(ctx, 'a minute', 0, 66, 44, { fill: C.white, line: C.pinkD }); }, 1.5);
      ptag(ctx, t, ch, 470, 655, 'chyme', C.butter, 40);
      popIn(ctx, t, tw - 0.2, 1030, 470, () => clock(ctx, 0, 0, 100, (t - tw) * 9), 1.1);
      ptext(ctx, t, tw, 1030, 655, '2-4 hours', 64, { fill: C.white, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.18 });
      kana(ctx, 'ぐるぐる', 160, 150, 46, -0.12, t > sq_ ? pop(t, sq_).s : 0, C.pink);
    });
  }
  // S17 (p49-p52): why doesn't it digest itself? mucus, bicarbonate, new cells every few days
  {
    const wh = T(49, 'why'), dg = T(49, 'digest'), mu = T(50, 'mucus'), co = T(50, 'coat'), bi = T(51, 'bicarbonate'), re = T(52, 'replaced'), fe = T(52, 'few');
    const NC = 7, cellX = (i) => 610 + i * 92;
    sfx(wh, 'pop', { f: 420 }); sfx(dg, 'aww'); sfx(co, 'squish', { g: 1 }); sfx(mu, 'pop', { f: 560, g: 1 }); sfx(bi, 'fizz', { d: 1.5, g: 0.8 }); sfx(bi + 0.1, 'popm', { f: 760 });
    for (let i = 0; i < NC; i++) sfx(re + i * 0.1, 'popm', { f: 600 + i * 70, g: 0.5 }); sfx(fe, 'success');
    scene(49, 'cut', TH.sky, 71, (ctx, t) => {
      twinkles(ctx, W, HH, t, 181, 7, (x, y) => x > 520);
      const safe = t > mu;
      stomach(ctx, 260, 400, 0.72, { eyes: safe ? 'happy' : 'shock', mouth: safe ? 'smile' : 'wobble', faceAt: [-40, 0], sq: squash(t, mu, 0.15) });
      if (!safe) sweat(ctx, 330, 270, pop(t, wh + 0.1).s * 1.1, 0.35);
      // wall cross-section
      ctx.save(); ctx.beginPath(); ctx.rect(540, 120, 740, 600); ctx.clip();
      cel(ctx, rrP(560, 640, 700, 120, 24), C.pinkS, '#e07ea0', -4, -4, 4);
      for (let i = 0; i < NC; i++) {
        const fresh = t > re + i * 0.1, p = fresh ? pop(t, re + i * 0.1) : { s: 1, sx: 1, sy: 1 }, hit = !safe && t > wh;
        ctx.save(); ctx.translate(cellX(i), 600); ctx.scale(p.sx, p.sy);
        cel(ctx, rrP(-42, -42, 84, 84, 26), fresh ? C.pink : '#ffcfdc', C.pinkS, -4, -4, 4);
        face(ctx, 0, -6, 0.42, { eyes: hit ? 'shock' : fresh ? 'happy' : 'normal', mouth: hit ? 'o' : 'w', blush: false });
        ctx.restore();
        if (fresh) sparkle(ctx, cellX(i) + 30, 555, 12 * Math.max(0, 1 - (t - re - i * 0.1) * 1.2), C.butter, 0, 3);
      }
      const mh = 92 * H.ease.back(prog(t, mu - 0.05, mu + 0.35));
      if (mh > 0) { const band = rrP(565, 556 - mh, 690, mh, 30); ctx.save(); ctx.fillStyle = 'rgba(191,240,220,0.88)'; ctx.fill(band); ctx.restore(); ol(ctx, band, 4); shine(ctx, 620, 556 - mh + 18, 30, 6, 0, 0.8); }
      if (t > bi) { const r = H.rng(51); for (let i = 0; i < 9; i++) { const u = ((t - bi) * 0.9 + r()) % 1; ctx.strokeStyle = C.skyD; ctx.lineWidth = 3.5; ctx.stroke(ellP(r.range(590, 1230), 540 - u * 70, 9, 9)); } }
      // acid drops raining down: they reach the cells until the mucus is there
      const r = H.rng(61); for (let i = 0; i < 7; i++) { const u = ((t - wh) * 0.9 + r()) % 1; if (t < wh) break; const x = r.range(600, 1200), stop = safe ? 450 : 550, y = H.lerp(130, stop, Math.min(1, u * 1.3)); if (u * 1.3 >= 1) { poof(ctx, x, stop + 10, u, 1 / 1.3, 22, '#e6fbcf'); continue; } drop(ctx, x, y, 0.55, '#c9f29b', '#9ed46a', 3); }
      ctx.restore();
      if (mh > 60) { ctx.save(); ctx.font = `700 34px ${FONT}`; ctx.fillStyle = C.mintD; ctx.textAlign = 'left'; ctx.fillText('mucus', 590, 546 - mh / 2 + 34); ctx.restore(); }
      ptag(ctx, t, bi, 1050, 410, 'bicarbonate', C.sky, 32);
      ptag(ctx, t, fe - 0.15, 900, 690, 'new cells every few days', C.pink, 28);
      kWord(ctx, 'Digest itself?!', 640, 130, 66, t, dg, 0.03, { fill: C.white, line: C.skyD });
    });
  }

  // ---------------- CHAPTER 4: SMALL INTESTINE ----------------
  // S18 (p53-p55): a little valve opens and lets the chyme out a squirt at a time
  {
    const va = T(53, 'valve'), op = T(53, 'opens'), sq_ = T(54, 'squirt'), sm = T(55, 'small');
    const path = bez([600, 330], [880, 300], [1120, 420], [1040, 600], 50).concat(bez([1040, 600], [980, 700], [820, 680], [760, 640], 30));
    const blobT = (k) => sq_ - 0.3 + k * 0.5;
    sfx(va, 'pop', { f: 560 }); sfx(op, 'tock', { f: 700, g: 0.6 }); sfx(op + 0.05, 'popm', { f: 820 });
    for (let k = 0; k < 4; k++) sfx(blobT(k), 'squish', { g: 0.9 }); sfx(sm, 'big');
    scene(53, 'heart', TH.butter, 79, (ctx, t) => {
      twinkles(ctx, W, HH, t, 191, 8, (x, y) => y > 220 && y < 620);
      tube(ctx, path, 84, C.pink, C.pinkS);
      // chyme squirts travelling down the tube
      for (let k = 0; k < 4; k++) { const u = prog(t, blobT(k), blobT(k) + 1.6); if (u <= 0 || u >= 1) continue; const [x, y] = along(path, plen(path) * H.ease.out(u)); cel(ctx, ellP(x, y, 26, 22), '#ffe2a5', '#f2c477', -3, -3, 4); }
      const sv = squash(t, op, 0.15);
      stomach(ctx, 320, 330, 0.95, { eyes: t > op ? 'happy' : 'normal', mouth: 'w', acid: 0.5, acidCol: 'rgba(255,226,165,0.96)', wave: t * 4, faceAt: [-40, -20], sq: sv });
      // the valve: a ring with two little doors
      const o = H.ease.back(prog(t, op, op + 0.35));
      ctx.save(); ctx.translate(560, 330);
      cel(ctx, ellP(0, 0, 40, 52), C.butterD, C.butterS, -4, -4, 5);
      ctx.save(); ctx.clip(ellP(0, 0, 28, 40)); ctx.fillStyle = '#9c3a62'; ctx.fillRect(-30, -42, 60, 84);
      cel(ctx, rrP(-28, -40 - o * 34, 56, 40, 10), C.pink, C.pinkS, -2, -2, 3.5); cel(ctx, rrP(-28, 0 + o * 34, 56, 40, 10), C.pink, C.pinkS, -2, -2, 3.5); ctx.restore();
      ctx.restore();
      if (t > va) dotted(ctx, [[560, 190], [560, 262]], H.ease.out(prog(t, va, va + 0.3)), C.pinkD, 5, 16, 0.8);
      ptag(ctx, t, va, 560, 160, 'valve', C.butter, 36);
      kWord(ctx, 'small intestine', 480, 650, 70, t, sm, 0.03, { fill: C.white, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.18 });
    });
  }
  // S19 (p56-p58): where the magic happens: about five meters long, coiled up inside your belly
  {
    const ma = T(56, 'magic'), fv = T(57, 'five'), co = T(58, 'coiled'), be = T(58, 'belly');
    const rows = [250, 320, 390, 460, 530, 600], xl = 440, xr = 840, rr = 35;
    const coil = [[640, 160], [640, 215], [xl, 215]];
    rows.forEach((y, i) => { const right = i % 2 === 0; const a = right ? [xl, y] : [xr, y], b = right ? [xr, y] : [xl, y]; if (i === 0) coil.push([xl, y]); coil.push(b); if (i < rows.length - 1) { const nx = right ? xr : xl, sgn = right ? 1 : -1; for (let k = 1; k <= 8; k++) { const ang = -Math.PI / 2 + k / 8 * Math.PI; coil.push([nx + sgn * Math.cos(ang) * rr, y + rr + Math.sin(ang) * rr]); } } });
    sfx(PS(56) - 0.3, 'stroke', { n: 14, d: 1.4 }); sfx(ma, 'big'); sfx(ma + 0.2, 'twinkle', { n: 6 });
    sfx(fv - 0.4, 'stroke', { n: 10, d: 0.4, pan: 0.5 }); sfx(fv, 'pop', { f: 520, g: 1.2 }); sfx(co, 'pyon'); sfx(be, 'boing', { g: 0.7 });
    scene(56, 'slide', TH.lav, 83, (ctx, t) => {
      twinkles(ctx, W, HH, t, 201, 8, (x, y) => x > 300 && x < 980);
      const bp = pop(t, PS(56) - 0.4, 0.8);
      if (bp.s > 0) { ctx.save(); ctx.translate(640, 410); ctx.scale(bp.sx, bp.sy); const sq = squash(t, be, 0.08); ctx.scale(sq[0], sq[1]); cel(ctx, rrP(-300, -270, 600, 540, 220), C.peach, C.peachS, -10, -10); shine(ctx, -200, -170, 40, 14, -0.8); ctx.restore(); }
      tube(ctx, partial(coil, H.ease.inOut(prog(t, PS(56) - 0.3, co + 0.5))), 44, C.pink, C.pinkS);
      if (t > ma) for (let i = 0; i < 10; i++) { const a = i / 10 * TAU + t * 0.8, kk = Math.max(0, Math.sin(t * 7 + i * 2)), R = 340 + 20 * Math.sin(t * 3 + i); sparkle(ctx, 640 + Math.cos(a) * R, 410 + Math.sin(a) * R * 0.75, (10 + 10 * kk) * pop(t, ma + i * 0.03).s, i % 2 ? C.white : C.butter, 0, 3); }
      kWord(ctx, 'Magic!', 640, 120, 76, t, ma, 0.04, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 });
      const tp = H.ease.out(prog(t, fv - 0.4, fv));
      if (tp > 0) { cel(ctx, rrP(980, 640 - 520 * tp, 56, 520 * tp, 12), C.butter, C.butterS, -4, -4, 4.5); ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 4; for (let y = 640 - 20; y > 640 - 520 * tp + 10; y -= 26) { ctx.beginPath(); ctx.moveTo(980, y); ctx.lineTo(1000, y); ctx.stroke(); } ctx.restore(); }
      popIn(ctx, t, fv, 1150, 400, () => { kText(ctx, '5 m', 0, 0, 104, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 }); kText(ctx, 'long', 0, 60, 40, { fill: C.white, line: C.pinkD }); }, 1.5);
      kana(ctx, 'キラキラ', 170, 600, 46, -0.12, t > ma ? pop(t, ma + 0.1).s : 0, C.butter);
    });
  }
  // S20 (p59-p62): the liver sends bile (fat -> tiny droplets); the pancreas adds enzymes and neutralizes the acid
  {
    const li = T(59, 'liver'), bi = T(59, 'bile'), fa = T(60, 'fat'), ti = T(60, 'tiny'), pa = T(61, 'pancreas'), en = T(61, 'enzymes'), ne = T(62, 'neutralizes');
    const blob = [800, 420], bilePath = bez([440, 270], [560, 230], [700, 300], [740, 360], 40), enzPath = bez([430, 560], [560, 600], [680, 540], [740, 480], 40);
    const DR = Array.from({ length: 9 }, (_, i) => { const a = i / 9 * TAU + 0.3, r = i % 2 ? 120 : 80; return [blob[0] + Math.cos(a) * r, blob[1] + Math.sin(a) * r * 0.8]; });
    sfx(li, 'pop', { f: 440, g: 1 }); sfx(bi, 'stroke', { n: 8, d: 0.6 }); for (let k = 0; k < 4; k++) sfx(bi + 0.3 + k * 0.35, 'popm', { f: 900, g: 0.4 });
    sfx(fa, 'boing', { g: 0.8 }); sfx(ti, 'pop', { f: 760, g: 1 }); for (let i = 0; i < 9; i++) sfx(ti + i * 0.03, 'popm', { f: 800 + i * 60, g: 0.35 });
    sfx(pa, 'pop', { f: 520 }); sfx(en, 'sparkle'); sfx(en, 'twinkle', { n: 4, minor: true }); sfx(ne, 'success');
    scene(59, 'cut', TH.mint, 89, (ctx, t) => {
      twinkles(ctx, W, HH, t, 211, 7, (x, y) => x > 560);
      popIn(ctx, t, li - 0.05, 300, 270, () => { const p = roundPoly([[-180, -50], [140, -95], [175, -20], [60, 75], [-160, 45]], 50); cel(ctx, p, C.liver, C.liverS, -8, -8); shine(ctx, -110, -30, 22, 8, -0.4); face(ctx, -10, -10, 0.75, { eyes: t > bi ? 'happy' : 'normal', mouth: 'w' }); }, 1.0);
      ptag(ctx, t, li, 300, 380, 'liver', C.liver, 34);
      if (t > bi) { dotted(ctx, bilePath, H.ease.out(prog(t, bi, bi + 0.4)), C.bileS, 5, 18, 0.8); for (let k = 0; k < 4; k++) { const u = ((t - bi - 0.3) * 0.9 + k / 4) % 1; if (t < bi + 0.3) break; const [x, y] = along(bilePath, plen(bilePath) * u); drop(ctx, x, y, 0.6, C.bile, C.bileS, 3); } }
      ptag(ctx, t, bi, 590, 200, 'bile', C.bile, 34);
      // the fat blob splits into droplets
      const sp = H.ease.back(prog(t, ti, ti + 0.45));
      if (t < ti) popIn(ctx, t, fa, blob[0], blob[1], () => { const w = squash(t, fa + 0.6, 0.08); ctx.scale(w[0], w[1]); cel(ctx, ellP(0, 0, 130, 115), C.butter, C.butterS, -10, -10); shine(ctx, -60, -60, 26, 12, -0.7); face(ctx, 0, 6, 0.9, { eyes: 'shock', mouth: 'o' }); }, 1.1);
      else DR.forEach(([x, y], i) => { const px = H.lerp(blob[0], x, sp), py = H.lerp(blob[1], y, sp) + bob(t, i, 5); cel(ctx, ellP(px, py, 34, 30), C.butter, C.butterS, -4, -4, 4); eye(ctx, px - 9, py - 2, 5, 7, '#8a6cf0', 'happy'); eye(ctx, px + 9, py - 2, 5, 7, '#8a6cf0', 'happy'); });
      ptag(ctx, t, fa, blob[0], 610, 'fat', C.butter, 36, ti - 0.1);
      ptag(ctx, t, ti + 0.1, blob[0], 620, 'tiny droplets!', C.butter, 34);
      popIn(ctx, t, pa - 0.05, 300, 560, () => { const p = new Path2D(); p.moveTo(-150, 10); p.bezierCurveTo(-150, -60, 60, -50, 130, -40); p.bezierCurveTo(170, -34, 170, 20, 130, 26); p.bezierCurveTo(40, 40, -70, 70, -150, 10); p.closePath(); cel(ctx, p, '#ffe9a8', C.butterS, -6, -6); face(ctx, -20, -4, 0.62, { eyes: t > en ? 'happy' : 'normal', mouth: 'smile' }); }, 1.1);
      ptag(ctx, t, pa, 300, 660, 'pancreas', C.butterD, 34);
      if (t > en) { dotted(ctx, enzPath, H.ease.out(prog(t, en, en + 0.4)), C.lavD, 5, 18, 0.8); for (let k = 0; k < 5; k++) { const u = ((t - en) * 0.8 + k / 5) % 1; const [x, y] = along(enzPath, plen(enzPath) * u); sparkle(ctx, x, y - 10, 14, C.lav, t * 3, 3); } }
      popIn(ctx, t, PS(62) - 0.1, 1090, 190, () => { const ok = t > ne; tag(ctx, 0, 0, ok ? 'acid: neutral!' : 'acid!', ok ? C.mint : C.red, 1, 34); }, 1.2);
      if (t > ne) impactLines(ctx, 1090, 190, 110, t, ne, 10, C.mintD);
    });
  }
  // S21 (p63-p65): the walls are covered in millions of tiny fingers (villi), covered in microvilli
  {
    const cv = T(63, 'covered'), mi = T(63, 'millions'), fi = T(63, 'fingers'), vi = T(64, 'villi'), tn = T(65, 'tinier'), mv = T(65, 'microvilli');
    const NV = 11, vx = (i) => 70 + i * 114;
    sfx(cv, 'stroke', { n: 11, d: 0.6 }); for (let i = 0; i < NV; i++) sfx(cv + i * 0.06, 'popm', { f: 600 + i * 40, g: 0.35, pan: -0.8 + i * 0.16 });
    sfx(mi, 'pop', { f: 680 }); sfx(vi, 'big'); sfx(tn - 0.1, 'whoosh', { d: 0.4, g: 0.4 }); sfx(tn + 0.2, 'pop', { f: 820 }); sfx(mv, 'twinkle', { n: 5 });
    scene(63, 'slide', TH.pink, 97, (ctx, t) => {
      twinkles(ctx, W, HH, t, 221, 7, (x, y) => y > 260);
      cel(ctx, rrP(-30, 600, 1340, 160, 30), C.pinkS, '#e07ea0', -6, -6, 5);
      for (let i = 0; i < NV; i++) {
        const p = pop(t, cv + i * 0.06, 1.3); if (p.s <= 0) continue;
        ctx.save(); ctx.translate(vx(i), 610); ctx.rotate(0.08 * Math.sin(t * 2.4 + i)); ctx.scale(p.sx, p.sy);
        cel(ctx, rrP(-38, -270, 76, 290, 38), C.pink, C.pinkS, -6, -6, 4.5); shine(ctx, -16, -230, 7, 16, 0, 0.8);
        ctx.restore();
      }
      kWord(ctx, 'villi', 300, 170, 104, t, vi, 0.05, { fill: C.white, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 });
      ptag(ctx, t, mi, 300, 260, 'millions!', C.butter, 34);
      // magnifier on one villus tip: microvilli
      const mg = pop(t, tn, 1.0);
      if (mg.s > 0) {
        ctx.save(); ctx.translate(960, 250); ctx.scale(mg.sx, mg.sy);
        ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 30; ctx.beginPath(); ctx.moveTo(110, 110); ctx.lineTo(170, 170); ctx.stroke(); ctx.strokeStyle = C.lavS; ctx.lineWidth = 20; ctx.stroke(); ctx.restore();
        const lens = ellP(0, 0, 160, 160); ctx.save(); ctx.fillStyle = '#fff6fa'; ctx.fill(lens); ctx.clip(lens);
        cel(ctx, rrP(-110, -40, 220, 300, 110), C.pink, C.pinkS, -8, -8, 5);
        for (let k = 0; k < 18; k++) { const a = Math.PI + k / 17 * Math.PI, x0 = Math.cos(a) * 110, y0 = 70 + Math.sin(a) * 110, len = 26 + 4 * Math.sin(t * 6 + k); const g = pop(t, mv - 0.2 + k * 0.02).s; if (g <= 0) continue; ctx.save(); ctx.translate(x0, y0); ctx.rotate(a + Math.PI / 2); ctx.scale(1, g); cel(ctx, rrP(-6, -len, 12, len + 4, 6), C.pinkD, '#e2527f', -1, -1, 3); ctx.restore(); }
        ctx.restore();
        ol(ctx, lens, 7); ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, 0, 135, -2.6, -1.9); ctx.stroke(); ctx.restore();
        ctx.restore();
      }
      ptag(ctx, t, mv, 960, 460, 'microvilli', C.lav, 36);
    });
  }
  // S22 (p66-p70): spread flat, about 32 square meters: half a badminton court (old textbooks: a tennis court)
  {
    const sp = T(66, 'spread'), cv = T(67, 'covers'), tt = T(67, 'thirtytwo'), bd = T(68, 'badminton'), od = T(69, 'old'), tn = T(69, 'tennis'), bu = T(70, 'but'), hu = T(70, 'huge');
    sfx(sp, 'whoosh', { d: 0.8, g: 0.5 }); sfx(cv, 'count', { n: 10, d: tt - cv }); sfx(tt, 'big');
    sfx(bd - 0.1, 'pop', { f: 520, g: 1 }); sfx(bd + 0.2, 'twinkle', { n: 5 }); sfx(od, 'popm', { f: 500 }); sfx(tn, 'pop', { f: 420 }); sfx(bu, 'thud', { f: 120, g: 0.5 }); sfx(bu, 'aww'); sfx(hu, 'success');
    const court = (ctx, w, h, fill, shade, net = true) => { cel(ctx, rrP(-w / 2, -h / 2, w, h, 14), fill, shade, -5, -5, 5); ctx.save(); ctx.strokeStyle = C.white; ctx.lineWidth = 5; ctx.strokeRect(-w / 2 + 16, -h / 2 + 16, w - 32, h - 32); ctx.beginPath(); ctx.moveTo(-w / 2 + 16, -h / 2 + 46); ctx.lineTo(w / 2 - 16, -h / 2 + 46); ctx.moveTo(-w / 2 + 16, h / 2 - 46); ctx.lineTo(w / 2 - 16, h / 2 - 46); ctx.moveTo(-w / 4, -h / 2 + 16); ctx.lineTo(-w / 4, h / 2 - 16); ctx.moveTo(w / 4, -h / 2 + 16); ctx.lineTo(w / 4, h / 2 - 16); ctx.stroke(); if (net) { ctx.strokeStyle = C.plum; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(0, -h / 2 - 10); ctx.lineTo(0, h / 2 + 10); ctx.stroke(); } ctx.restore(); };
    scene(66, 'cut', TH.butter, 101, (ctx, t) => {
      twinkles(ctx, W, HH, t, 231, 8, (x, y) => y > 260);
      // the lining sheet unfolds, then becomes the badminton half
      const sh = H.ease.back(prog(t, sp, sp + 0.9)), so = popOut(t, bd - 0.1, 0.25);
      if (sh > 0 && so > 0) { ctx.save(); ctx.translate(640, 460); ctx.scale(H.lerp(0.2, 1, sh) * so, H.lerp(0.3, 1, sh) * so); cel(ctx, rrP(-320, -140, 640, 280, 30), C.pink, C.pinkS, -8, -8); ctx.fillStyle = C.pinkS; for (let j = 0; j < 4; j++) for (let i = 0; i < 9; i++) ctx.fill(ellP(-270 + i * 68 + (j % 2) * 34, -100 + j * 66, 10, 10)); ctx.restore(); }
      const v = t < cv ? 0 : t >= tt ? 32 : Math.round(32 * prog(t, cv, tt));
      if (t > cv) { const k = t >= tt ? 1 + 0.3 * Math.exp(-6 * (t - tt)) * Math.cos(14 * (t - tt)) : pop(t, cv).s; ctx.save(); ctx.translate(640, 225); ctx.scale(k, k); kText(ctx, `${v} m²`, 0, 0, 128, t >= tt ? { fill: C.pinkD, line: C.white, outer: C.plum, ow: 0.07, lw: 0.13 } : { fill: C.white, line: C.pinkD, lw: 0.16 }); ctx.restore(); }
      impactLines(ctx, 640, 190, 190, t, tt, 12, C.pinkD);
      const bp = pop(t, bd - 0.1);
      if (bp.s > 0) {
        ctx.save(); ctx.translate(400, 480); ctx.scale(bp.sx, bp.sy); court(ctx, 440, 240, C.mint, C.mintS);
        const glow = 0.55 + 0.25 * Math.sin(t * 6); ctx.fillStyle = `rgba(255,111,156,${glow})`; ctx.fill(rrP(-220, -120, 220, 240, [14, 0, 0, 14])); ol(ctx, rrP(-220, -120, 220, 240, [14, 0, 0, 14]), 5); kText(ctx, '32 m²', -110, 14, 40, { fill: C.white, line: C.pinkD });
        ctx.restore();
      }
      ptag(ctx, t, bd + 0.1, 400, 650, 'half a badminton court!', C.mint, 30);
      popIn(ctx, t, tn, 960, 480, () => court(ctx, 400, 260, C.sky, C.skyS), 1.0);
      ptag(ctx, t, od, 960, 650, 'old textbooks: tennis court', C.sky, 26);
      cross(ctx, 960, 480, 1.3, t, bu);
      if (t > hu) for (let i = 0; i < 5; i++) { const kk = Math.max(0, Math.sin(t * 8 + i * 2)); sparkle(ctx, 180 + i * 110, 340 + (i % 2) * 290, 10 + 10 * kk, C.butter, 0, 3); }
      kana(ctx, 'でかい!', 120, 140, 44, -0.12, t > hu ? pop(t, hu).s : 0, C.pink);
    });
  }
  // S23 (p71-p72): right here, most of the nutrients slip into your blood
  {
    const nu = T(71, 'nutrients'), sl = T(72, 'slip'), bl = T(72, 'blood');
    const vessel = [[350, 640], [350, 260]].concat(arcPts(420, 260, 70, Math.PI, TAU, 16)).concat([[490, 260], [490, 600], [560, 640], [1300, 640]]);
    const N = 10, start = (i) => { const r = H.rng(300 + i); return [r.range(700, 1180), r.range(210, 470)]; };
    sfx(nu, 'pop', { f: 600 }); sfx(nu + 0.1, 'twinkle', { n: 4, minor: true }); sfx(sl, 'whoosh', { d: 0.8, g: 0.5 }); for (let i = 0; i < N; i++) sfx(sl + 0.4 + i * 0.09, 'popm', { f: 900 + i * 40, g: 0.3 }); sfx(bl, 'pop', { f: 480, g: 1 });
    scene(71, 'slide', TH.sky, 107, (ctx, t) => {
      twinkles(ctx, W, HH, t, 241, 7, (x, y) => x < 640);
      cel(ctx, rrP(260, 140, 320, 620, 160), C.pink, C.pinkS, -10, -10, 5); shine(ctx, 300, 210, 10, 30, 0, 0.8);
      tube(ctx, vessel, 26, C.red, '#e2486c', false);
      // red cells flowing
      const vl = plen(vessel); for (let i = 0; i < 14; i++) { const d = ((t * 120 + i * vl / 14) % vl); const [x, y] = along(vessel, d); ctx.fillStyle = '#ffd0da'; ctx.fill(ellP(x, y, 7, 7)); }
      for (let i = 0; i < N; i++) {
        const p = pop(t, nu - 0.1 + i * 0.04); if (p.s <= 0) continue;
        const [sx, sy] = start(i), u = prog(t, sl + i * 0.09, sl + i * 0.09 + 2.2);
        let x, y;
        if (u < 0.35) { const k = H.ease.inOut(u / 0.35); x = H.lerp(sx, 420, k); y = H.lerp(sy + bob(t, i, 8), 230, k); }
        else { [x, y] = along(vessel, H.lerp(vl * 0.4, vl, (u - 0.35) / 0.65)); }
        if (u >= 1) continue;
        const kind = i % 3, c = [C.butterD, C.mintD, C.lavD][i % 3], s = 24 * p.s;
        if (kind === 0) cel(ctx, starP(x, y, s * 1.3, t * 2 + i), c, H.rgba(H.mix(c, C.plum, 0.2)), -2, -2, 3.5);
        else if (kind === 1) heart(ctx, x, y, s, c); else cel(ctx, ellP(x, y, s, s), c, H.rgba(H.mix(c, C.plum, 0.2)), -2, -2, 3.5);
      }
      ptag(ctx, t, nu, 940, 150, 'nutrients', C.butter, 38);
      ptag(ctx, t, bl, 1000, 560, 'into your blood!', C.red, 36);
      ptag(ctx, t, PS(71) - 0.2, 420, 100, 'villus', C.pink, 32);
    });
  }

  // ---------------- CHAPTER 5: LARGE INTESTINE ----------------
  // S24 (p73-p75): wider, only about 1.5 m long, its main job is soaking up water
  {
    const lg = T(73, 'large'), wi = T(74, 'wider'), on = T(74, 'one'), wa = T(75, 'water'), so = T(75, 'soaking');
    const frame = [[1040, 680], [1040, 270]].concat(bez([1040, 270], [1040, 190], [990, 180], [920, 180], 12)).concat([[360, 180]]).concat(bez([360, 180], [290, 180], [240, 190], [240, 270], 12)).concat([[240, 680]]);
    const small = bez([440, 420], [760, 380], [420, 520], [720, 530], 30).concat(bez([720, 530], [900, 540], [520, 640], [840, 640], 30));
    sfx(PS(73) - 0.3, 'stroke', { n: 12, d: 1.2 }); sfx(lg, 'big'); sfx(wi, 'pop', { f: 560 }); sfx(wi + 0.1, 'stroke', { n: 4, d: 0.3 }); sfx(on, 'pop', { f: 480, g: 1.2 }); sfx(on + 0.1, 'twinkle', { n: 3, minor: true });
    sfx(so, 'slurp', { d: 0.6 }); for (let i = 0; i < 6; i++) sfx(wa + i * 0.15, 'popm', { f: 1000 - i * 50, g: 0.4 });
    scene(73, 'star', TH.mint, 113, (ctx, t) => {
      twinkles(ctx, W, HH, t, 251, 8, (x, y) => x > 200 && x < 1080 && y > 140);
      const fp = H.ease.inOut(prog(t, PS(73) - 0.4, lg + 0.4));
      { const so = popOut(t, on - 0.2, 0.3); if (so > 0) { ctx.save(); ctx.globalAlpha = so; tube(ctx, partial(small, fp), 30, C.pink, C.pinkS); ctx.restore(); } }
      const part = partial(frame, fp);
      tube(ctx, part, 130, C.peach, C.peachS);
      if (part.length > 1) { ctx.save(); ctx.strokeStyle = C.peachS; ctx.lineWidth = 6; ctx.lineCap = 'round'; const L = plen(part); for (let d = 50; d < L - 30; d += 62) { const [x, y, a] = along(part, d); const nx = Math.cos(a + 1.57), ny = Math.sin(a + 1.57); ctx.beginPath(); ctx.moveTo(x + nx * 54, y + ny * 54); ctx.quadraticCurveTo(x + Math.cos(a) * 14, y + Math.sin(a) * 14, x - nx * 54, y - ny * 54); ctx.stroke(); } ctx.restore(); }
      if (fp >= 1) face(ctx, 640, 180, 0.7, { eyes: t > wa ? 'happy' : 'normal', mouth: t > so ? 'w' : 'smile' });
      kWord(ctx, 'large intestine', 640, 330, 60, t, lg, 0.03, { fill: C.white, line: C.peachS, outer: C.plum, ow: 0.08, lw: 0.18 });
      if (t > wi) { for (const [a, b] of [[[240, 520], [150, 520]], [[240, 520], [330, 520]]]) dotted(ctx, [a, b], H.ease.out(prog(t, wi, wi + 0.3)), C.pinkD, 5, 16, 0.8); }
      ptag(ctx, t, wi, 240, 600, 'wider!', C.pink, 32);
      popIn(ctx, t, on, 640, 480, () => kText(ctx, '1.5 m', 0, 0, 110, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 }), 1.5);
      ptag(ctx, t, wa, 640, 610, 'soaks up water', C.sky, 34);
      if (t > wa) for (let i = 0; i < 8; i++) { const u = ((t - wa) * 0.7 + i / 8) % 1, x = 380 + i * 80, y = H.lerp(170, 60, u); ctx.save(); ctx.globalAlpha = Math.sin(u * Math.PI); drop(ctx, x, y, 0.6, C.sky, C.skyS, 3); ctx.restore(); }
    });
  }
  // S25 (p76-p80): home to trillions of bacteria (~38 trillion, mostly here); they munch fiber and make vitamins
  {
    const ba = T(76, 'bacteria'), tl = T(76, 'trillions'), tt = T(77, 'thirtyeight'), mo = T(78, 'mostly'), mu = T(79, 'munch'), fi = T(79, 'fiber'), vi = T(80, 'vitamins');
    const N = 24, M = Array.from({ length: N }, (_, i) => { const r = H.rng(500 + i); let x, y; do { x = r.range(80, 1200); y = r.range(300, 670); } while (Math.abs(x - 640) < 180 && y < 380); return { x, y, k: i % 3, c: [[C.mint, C.mintS], [C.lav, C.lavS], [C.sky, C.skyS], [C.butter, C.butterS], [C.pink, C.pinkS]][i % 5], ph: r() * TAU, s: r.range(0.5, 0.75), rot: r.range(-0.6, 0.6) }; });
    const F = [[260, 420], [520, 600], [800, 470], [1060, 600], [1000, 360]];
    sfx(tl - 0.3, 'count', { n: 12, d: 1.4 }); for (let i = 0; i < N; i += 3) sfx(tl - 0.3 + i * 0.06, 'popm', { f: 700 + i * 20, g: 0.35 });
    sfx(tt, 'big'); sfx(mo, 'pop', { f: 560 }); sfx(fi, 'pop', { f: 420 }); for (let i = 0; i < 6; i++) sfx(mu + i * 0.25, 'nom', { g: 0.8, pan: -0.6 + i * 0.24 }); sfx(vi, 'pop', { f: 700 }); sfx(vi + 0.1, 'success');
    scene(76, 'slide', TH.lav, 127, (ctx, t) => {
      twinkles(ctx, W, HH, t, 261, 7, (x, y) => y > 260);
      // fiber strands
      if (t > fi - 0.1) F.forEach(([x, y], i) => { const left = 1 - 0.85 * prog(t, mu + i * 0.2, mu + i * 0.2 + 1.6), p = pop(t, fi - 0.1 + i * 0.05).s; if (p <= 0) return; const pts = []; for (let k = 0; k <= 10; k++) pts.push([x - 70 + k * 14 * left, y + Math.sin(k * 1.3 + t * 3 + i) * 10]); ctx.save(); ctx.globalAlpha = p; tube(ctx, pts, 16, C.bile, C.bileS, false); ctx.restore(); });
      M.forEach((m, i) => {
        const p = pop(t, tl - 0.3 + i * 0.06); if (p.s <= 0) return;
        const eat = t > mu && t < vi + 1 && i % 2 === 0;
        microbe(ctx, m.x + Math.sin(t * 1.5 + m.ph) * 10, m.y + bob(t, m.ph, 7), m.s * p.s, m.k, m.c, { rot: m.rot + 0.15 * Math.sin(t * 2 + m.ph), eyes: t > vi ? 'happy' : 'normal', mouth: eat ? (Math.floor(t * 7.5 + i) % 2 ? 'O' : 'w') : 'smile', tails: m.k === 0, ph: t * 8 + m.ph });
      });
      // vitamins
      if (t > vi) for (let i = 0; i < 7; i++) { const m = M[i * 3], u = prog(t, vi + i * 0.07, vi + i * 0.07 + 1.6); if (u <= 0) continue; const x = m.x, y = m.y - 40 - 120 * H.ease.out(u); ctx.save(); ctx.translate(x, y); ctx.rotate(0.5 + i); const p = pop(t, vi + i * 0.07, 1.3); ctx.scale(p.sx, p.sy); cel(ctx, rrP(-26, -12, 52, 24, 12), C.butterD, C.butterS, -2, -2, 3.5); ctx.fillStyle = C.pinkD; ctx.fill(rrP(0, -12, 26, 24, [0, 12, 12, 0])); ol(ctx, rrP(-26, -12, 52, 24, 12), 3.5); ctx.restore(); }
      kWord(ctx, 'trillions!', 640, 160, 84, t, tl, 0.04, { fill: C.white, line: C.lavD, t1: tt - 0.1 });
      popIn(ctx, t, tt, 640, 175, () => kText(ctx, '38 trillion', 0, 0, 104, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 }), 1.5);
      impactLines(ctx, 640, 140, 280, t, tt, 12, C.pinkD);
      ptag(ctx, t, mo, 640, 265, 'mostly right here!', C.lav, 32, fi - 0.1);
      ptag(ctx, t, fi, 640, 265, 'fiber = yum', C.bile, 32, vi - 0.1);
      ptag(ctx, t, vi, 640, 265, 'vitamins!', C.butter, 36);
    });
  }

  // ---------------- CHAPTER 6: THE WHOLE TRIP ----------------
  // S26 (p81-p83): about six hours through the stomach and small intestine, up to two more days in the large intestine
  {
    const hw = T(81, 'how'), sx = T(82, 'six'), si = T(82, 'intestine'), tw = T(83, 'two'), la = T(83, 'large'), en = PE(83) + 0.3;
    const X = [170, 610, 1070], Y = 440;
    const bx = (t) => t < sx ? X[0] : t < si + 0.3 ? H.lerp(X[0], X[1], H.ease.inOut(prog(t, sx, si + 0.3))) : H.lerp(X[1], X[2], H.ease.inOut(prog(t, tw, en)));
    sfx(hw, 'pop', { f: 520 }); sfx(sx, 'big'); for (let i = 0; i < 5; i++) sfx(sx + 0.2 + i * 0.3, 'pyon', { g: 0.4 }); sfx(tw, 'big'); for (let i = 0; i < 8; i++) sfx(tw + 0.2 + i * 0.3, 'pyon', { g: 0.35 }); sfx(en, 'success');
    scene(81, 'heart', TH.butter, 131, (ctx, t) => {
      twinkles(ctx, W, HH, t, 271, 8, (x, y) => y > 200 && y < 620);
      // track
      cel(ctx, rrP(120, Y + 70, 1000, 30, 15), C.white, C.creamS, -3, -3, 4);
      const p1 = prog(t, sx, si + 0.3), p2 = prog(t, tw, en);
      if (p1 > 0) cel(ctx, rrP(120, Y + 70, (X[1] - 120) * p1 + 10, 30, 15), C.pink, C.pinkS, -3, -3, 4);
      if (p2 > 0) cel(ctx, rrP(X[1], Y + 70, (X[2] + 50 - X[1]) * p2, 30, 15), C.peach, C.peachS, -3, -3, 4);
      // stations
      popIn(ctx, t, PS(81) - 0.3, X[0], Y + 180, () => tag(ctx, 0, 0, 'mouth', C.white, 1, 30), 1.2);
      popIn(ctx, t, PS(81) - 0.2, X[1], Y + 180, () => { stomach(ctx, -10, -20, 0.28, { face: false }); }, 1.2);
      popIn(ctx, t, PS(81) - 0.1, X[2], Y + 180, () => { tube(ctx, [[-40, 40], [-40, -20], [40, -20], [40, 40]], 26, C.peach, C.peachS, false); }, 1.2);
      // timers
      popIn(ctx, t, sx, (X[0] + X[1]) / 2, 300, () => { kText(ctx, '~6 hours', 0, 0, 72, { fill: C.white, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.18 }); }, 1.5);
      popIn(ctx, t, tw, (X[1] + X[2]) / 2 + 40, 300, () => { kText(ctx, 'up to', 0, -78, 40, { fill: C.white, line: C.peachS }); kText(ctx, '+2 days', 0, 0, 80, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 }); }, 1.5);
      const moving = (t > sx && t < si + 0.3) || (t > tw && t < en);
      bite(ctx, bx(t), Y - 10, 0.7, { lift: moving ? Math.abs(Math.sin(t * 8)) * 26 : bob(t, 0, 4), sq: moving ? [0.95, 1.05] : [1, 1], eyes: t > en ? 'star' : moving ? 'happy' : 'normal', mouth: 'smile', armL: moving ? 1.6 : 0.2, armR: moving ? 1.6 : 0.2 });
      popIn(ctx, t, la - 0.6, 1170, 140, () => clock(ctx, 0, 0, 62, (t - la) * 12), 1.1);
      kWord(ctx, 'How long?', 640, 130, 80, t, hw, 0.04, { fill: C.white, line: C.pinkD, t1: tw - 0.6 });
    });
  }
  // S27 (p84-p86): whatever your body can't use leaves at the end. But the rest?
  {
    const ca = T(84, 'cant'), le = T(85, 'leaves'), en = T(85, 'end'), bu = T(86, 'but'), re = T(86, 'rest');
    const crumbs = [[420, 520], [500, 470], [560, 540], [640, 490]];
    sfx(ca, 'pop', { f: 420 }); sfx(le, 'whoosh', { d: 0.4, g: 0.3 }); crumbs.forEach((c, i) => sfx(le + 0.1 + i * 0.15, 'pyon', { g: 0.5 })); sfx(en + 0.3, 'thud', { f: 160, g: 0.4 });
    sfx(bu, 'pop', { f: 520 }); sfx(re, 'riser', { d: 0.6 }); sfx(re + 0.5, 'twinkle', { n: 5 });
    scene(84, 'cut', TH.pink, 137, (ctx, t) => {
      twinkles(ctx, W, HH, t, 281, 8, (x, y) => y > 200);
      // door
      const op = prog(t, le - 0.1, le + 0.2) * (1 - prog(t, en + 0.2, en + 0.4));
      ctx.save(); ctx.translate(960, 420);
      cel(ctx, rrP(-120, -180, 240, 360, [110, 110, 12, 12]), '#9c3a62', '#7c2a4e', -4, -4, 5);
      ctx.save(); ctx.translate(-110, 0); ctx.scale(1 - 0.8 * op, 1); ctx.translate(110, 0); cel(ctx, rrP(-110, -170, 220, 340, [100, 100, 8, 8]), C.lav, C.lavS, -6, -6, 4.5); ctx.restore();
      if (op < 0.3) cel(ctx, ellP(70, 10, 14, 14), C.butterD, C.butterS, -2, -2, 3.5);
      cel(ctx, rrP(-80, -250, 160, 56, 16), C.butter, C.butterS, -3, -3, 4); kText(ctx, 'EXIT', 0, -207, 40, { fill: C.white, line: C.pinkD, shadow: false });
      ctx.restore();
      crumbs.forEach(([x, y], i) => {
        const p = pop(t, ca + i * 0.06); if (p.s <= 0) return;
        const u = prog(t, le + 0.1 + i * 0.15, le + 0.1 + i * 0.15 + 0.6); if (u >= 1) return;
        const px = H.lerp(x, 960, H.ease.in(u)), py = H.lerp(y, 480, u) - Math.sin(u * Math.PI) * 80;
        ctx.save(); ctx.translate(px, py); ctx.scale(p.s * (1 - u * 0.5), p.s * (1 - u * 0.5)); crumb(ctx, 0, 0, 44, i, '#efe6f2'); eye(ctx, -8, -2, 5, 7, '#8a6cf0', 'happy'); eye(ctx, 8, -2, 5, 7, '#8a6cf0', 'happy'); ctx.restore();
      });
      ptag(ctx, t, ca + 0.1, 520, 360, "can't use", C.lav, 32, le + 0.3);
      const rest = t > re;
      bite(ctx, 250, 460, 1.0, { eyes: rest ? 'star' : 'happy', mouth: 'smile', armR: rest ? 2.4 : 2.2 + 0.4 * Math.sin(t * 10), armL: rest ? 2.4 : 0.2, lift: rest ? Math.max(0, bob(t, 0, 14)) : 0, sq: squash(t, re, 0.15) });
      kana(ctx, 'バイバイ', 520, 640, 46, -0.1, t > le && t < bu ? pop(t, le).s * popOut(t, bu - 0.2) : 0, C.lav);
      if (rest) for (let i = 0; i < 8; i++) { const a = i / 8 * TAU + t * 1.5, kk = Math.max(0, Math.sin(t * 8 + i * 2)); sparkle(ctx, 250 + Math.cos(a) * 170, 440 + Math.sin(a) * 150, (10 + 10 * kk) * pop(t, re + i * 0.03).s, i % 2 ? C.white : C.butter, 0, 3); }
      kWord(ctx, 'But the rest?', 640, 140, 76, t, bu, 0.04, { fill: C.white, line: C.pinkD });
    });
  }
  // S28 (p87-p91): that bite became your energy, your muscles, even your thoughts. Which food takes the longest trip?
  {
    const ey = T(87, 'energy'), mu = T(88, 'muscles'), th = T(89, 'thoughts'), q1 = PS(90), q2 = T(91, 'takes'), lo = T(91, 'longest');
    const kid = [640, 300];
    sfx(PS(87) - 0.3, 'riser', { d: 0.6 }); sfx(ey, 'pop', { f: 620, g: 1 }); sfx(ey + 0.05, 'sparkle'); sfx(mu, 'pop', { f: 700, g: 1 }); sfx(mu + 0.05, 'boing', { g: 0.6 }); sfx(th, 'pop', { f: 800, g: 1 }); sfx(th + 0.1, 'twinkle', { n: 5 });
    sfx(q1, 'popm', { f: 520 }); sfx(q2, 'popm', { f: 640 }); sfx(lo, 'big'); sfx(lo + 0.3, 'success');
    const icon = (ctx, kind) => {
      if (kind === 0) { const p = roundPoly([[10, -70], [-40, 10], [0, 10], [-14, 70], [44, -14], [4, -14], [22, -70]], 6); cel(ctx, p, C.butterD, C.butterS, -4, -4, 4.5); }
      else if (kind === 1) { const p = new Path2D(); p.moveTo(-60, 40); p.quadraticCurveTo(-70, -10, -30, -30); p.quadraticCurveTo(-10, -70, 20, -60); p.quadraticCurveTo(50, -50, 30, -20); p.quadraticCurveTo(70, -10, 60, 30); p.quadraticCurveTo(50, 60, 0, 50); p.closePath(); cel(ctx, p, C.peach, C.peachS, -5, -5); cel(ctx, ellP(10, -45, 18, 14), C.peach, C.peachS, -2, -2, 3.5); }
      else { union(ctx, [cloudP(0, 0, 0.7)], C.white); heart(ctx, -16, 0, 18, C.pinkD); sparkle(ctx, 26, -8, 14, C.butter, 0, 3); }
    };
    scene(87, 'slide', TH.lav, 139, (ctx, t) => {
      twinkles(ctx, W, HH, t, 291, 9, (x, y) => Math.abs(x - 640) < 200);
      const qo = popOut(t, q1 - 0.15);
      chibi(ctx, kid[0], kid[1] + 30, 1.0, { hair: '#7b4f6b', coat: [C.pink, C.pinkS], eyes: t > th ? 'star' : 'happy', mouth: 'smile', armL: t > mu ? 2.5 : 0.3, armR: t > mu ? 2.5 : 0.3, lift: t > lo ? Math.max(0, bob(t, 0, 18)) : 0 });
      // the bite turns into sparkles that stream into the kid
      const bs = 1 - prog(t, PS(87) - 0.3, ey + 0.2);
      if (bs > 0) bite(ctx, 230, 470, 0.9 * bs, { eyes: 'happy', mouth: 'smile', armL: 2.4, armR: 2.4 });
      if (t > PS(87) - 0.4 && t < ey + 1.2) for (let i = 0; i < 12; i++) { const u = ((t - PS(87)) * 1.4 + i / 12) % 1, k = 1 - prog(t, ey + 0.6, ey + 1.2); const x = H.lerp(230, kid[0], u), y = H.lerp(470, kid[1] + 80, u) - Math.sin(u * Math.PI) * 120; sparkle(ctx, x, y, 12 * k * Math.sin(u * Math.PI), i % 2 ? C.butter : C.white, 0, 3); }
      if (qo > 0) {
        [[ey, 280, 230, 0, 'energy', C.butter], [mu, 1000, 230, 1, 'muscles', C.peach], [th, 640, 110, 2, 'thoughts', C.white]].forEach(([tt, x, y, k, lbl, c]) => {
          popIn(ctx, t, tt, x, y + bob(t, k, 6), () => { ctx.scale(qo, qo); icon(ctx, k); }, 1.3);
          if (k < 2) ptag(ctx, t, tt + 0.08, x, y + 110, lbl, c, 32, q1 - 0.15);
        });
      }
      // the closing question
      if (t > q1) { const pb = pop(t, q1); ctx.save(); ctx.translate(640, 130); ctx.scale(pb.sx, pb.sy); union(ctx, [rrP(-420, -95, 840, 190, 70)], C.white); ctx.restore(); }
      kWord(ctx, 'Which food takes', 640, 115, 62, t, q1 + 0.05, 0.025, { fill: C.white, line: C.pinkD });
      kWord(ctx, 'the longest trip?', 640, 190, 62, t, q2, 0.025, { fill: C.butter, line: C.pinkD });
      if (t > q2) { popIn(ctx, t, q2 + 0.1, 220, 520, () => bite(ctx, 0, 0, 0.75, { eyes: 'normal', look: [0.6, -0.4], mouth: 'o' }), 1.2); popIn(ctx, t, q2 + 0.2, 1060, 520, () => lemon(ctx, 0, 0, 0.7, { eyes: 'normal', mouth: 'o' }), 1.2); }
      for (const [tt, x, y, sz] of [[lo, 380, 400, 90], [lo + 0.12, 900, 400, 70]]) popIn(ctx, t, tt, x, y, () => { ctx.rotate(0.14 * Math.sin(t * 9 + x)); kText(ctx, '?', 0, 0, sz, { fill: C.butter, line: C.pinkD, outer: C.plum, lw: 0.2 }); }, 1.4);
      confetti(ctx, t, lo, 640, 300, 50, 9, 1.1);
      for (let i = 0; i < 6; i++) { const u = ((t - lo) * 0.6 + i / 6) % 1; if (t < lo) break; heart(ctx, [150, 470, 820, 1140, 380, 900][i] + Math.sin(u * 9 + i) * 14, 720 - u * 300, 12 + 6 * Math.sin(u * Math.PI), [C.pinkD, C.pink, C.red][i % 3]); }
    });
  }


  // ======================================== PLAYER ========================================
  function header(ctx, t) {
    if (t < PS(3) - 0.2) return;
    let ci = 0; CH.forEach(([p], i) => { if (t >= (p === 0 ? 0 : PS(p) - 0.5)) ci = i; });
    const t0 = (CH[ci][0] === 0 ? PS(3) - 0.2 : PS(CH[ci][0]) + 0.3), str = `${ci + 1}  ${CH[ci][1]}`;
    const p = pop(t, t0, 1.2); if (p.s <= 0) return;
    ctx.save(); ctx.font = `700 30px ${FONT}`; const tw = ctx.measureText(str).width; ctx.restore();
    const pw = tw + 48, ph = 54, hx = 22 + pw / 2, hy = 18 + ph / 2;
    ctx.save(); ctx.translate(hx, hy); ctx.scale(p.sx, p.sy);
    cel(ctx, rrP(-pw / 2, -ph / 2, pw, ph, ph / 2), C.butter, C.butterS, -4, -4);
    ctx.font = `700 30px ${FONT}`; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillStyle = C.pinkD; ctx.fillText(String(ci + 1), -pw / 2 + 22, 2); ctx.fillStyle = C.plum; ctx.fillText(CH[ci][1], -pw / 2 + 22 + ctx.measureText(String(ci + 1) + '  ').width, 2);
    ctx.restore();
  }
  function drawScene(ctx, sc, tq) { ctx.save(); bg(ctx, W, HH, tq, sc.theme, sc.seed); sc.draw(ctx, tq); ctx.restore(); }
  function explainer(ctx, W_, H_, t) {
    const tq = q15(t);
    let cur = 0; for (let i = 0; i < SC.length; i++) if (t >= SC[i].s) cur = i;
    const s = SC[cur], d = s.tr === 'slide' ? 0.45 : 0.5, u = cur > 0 ? (t - s.s) / d : 1;
    if (u < 1 && s.tr !== 'cut') {
      if (s.tr === 'slide') {
        const e = H.ease.inOut(H.clamp(u));
        ctx.save(); ctx.translate(-W * e, 0); drawScene(ctx, SC[cur - 1], tq); ctx.restore();
        ctx.save(); ctx.translate(W * (1 - e), 0); drawScene(ctx, s, tq); ctx.restore();
      } else { drawScene(ctx, SC[cur - 1], tq); wipe(ctx, W, HH, H.clamp(u), s.tr, s.wx, s.wy, () => drawScene(ctx, s, tq)); }
    } else drawScene(ctx, s, tq);
    header(ctx, tq);
  }

  // ======================================== SOUND ========================================
  function scoreSound(k) {
    const vis = (t0) => (Math.floor(t0 * 15 + 1e-6) + 1) / 15;
    const bloop = (t, f = 420, g = 1, o = {}) => { k.tone(t, { f: [[0, f * 0.7], [0.07, f * 1.35]], dur: 0.11, gain: 0.2 * g, pan: o.pan, minor: o.minor }); k.noise(t, { dur: 0.012, filter: 'bandpass', f: 1600, q: 1.2, gain: 0.05 * g, pan: o.pan, minor: o.minor }); };
    const boing = (t, g = 1, o = {}) => { k.tone(t, { f: [[0, 150], [0.05, 290], [0.12, 190], [0.2, 250], [0.3, 210], [0.4, 225]], type: 'triangle', dur: 0.45, gain: 0.22 * g, pan: o.pan, minor: o.minor }); k.tone(t, { f: [[0, 75], [0.06, 140], [0.3, 110]], dur: 0.3, gain: 0.2 * g, minor: o.minor }); };
    const pyon = (t, g = 1, o = {}) => { k.tone(t, { f: [[0, 330], [0.15, 860]], type: 'triangle', dur: 0.19, gain: 0.1 * g, a: 0.005, pan: o.pan, minor: o.minor }); k.tone(t, { f: [[0, 165], [0.15, 430]], dur: 0.19, gain: 0.12 * g, pan: o.pan, minor: o.minor }); };
    const bell = (t, f, g = 1, o = {}) => { const hz = k.hz(f); k.tone(t, { f: hz, dur: o.dur || 0.9, gain: 0.09 * g, a: 0.004, verb: 0.35, pan: o.pan, minor: o.minor }); k.tone(t, { f: hz * 2, dur: 0.3, gain: 0.025 * g, a: 0.003, verb: 0.3, pan: o.pan, minor: o.minor }); };
    const twinkle = (t, n = 4, g = 1, minor = true) => { const ns = ['G4', 'C5', 'E5', 'G5', 'A5', 'C6']; for (let i = 0; i < n; i++) bell(t + i * 0.06, ns[(i * 2 + n) % ns.length], 0.55 * g, { dur: 0.7, pan: (i % 2 ? 0.35 : -0.35), minor }); };
    const nom = (t, g = 1, pan = 0.3) => { k.tone(t, { f: [[0, 280], [0.09, 170]], dur: 0.12, gain: 0.22 * g, pan, minor: true }); k.noise(t, { dur: 0.05, color: 'pink', filter: 'lowpass', f: 900, gain: 0.08 * g, pan, minor: true }); };
    const iris = (t, d = 0.5, base = 'C5') => { k.tone(t, { f: [[0, k.hz(base) / 2], [d, k.hz(base) * 1.5]], dur: d + 0.05, gain: 0.06, a: d * 0.6, verb: 0.3 }); k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 300], [d, 1800]], q: 0.8, gain: 0.14, a: d * 0.7 }); twinkle(t + d * 0.75, 3, 0.8, false); };
    const aww = (t) => { k.tone(t, { f: [[0, 'E4'], [0.3, 'D#4']], type: 'triangle', dur: 0.32, gain: 0.07, a: 0.03, hold: 0.15 }); k.tone(t + 0.3, { f: [[0, 'C4'], [0.5, 'A3']], type: 'triangle', dur: 0.55, gain: 0.07, a: 0.03, hold: 0.2 }); };
    const fizz = (t, d = 0.8, g = 1) => { const r = H.rng(Math.floor(t * 100)); for (let x = 0; x < d; x += 0.03 + r() * 0.05) k.noise(t + x, { dur: 0.02, filter: 'highpass', f: 3000 + r() * 2000, gain: 0.06 * g * r(), minor: true, pan: r() * 1.2 - 0.6 }); };
    const squish = (t, g = 1) => { k.tone(t, { f: [[0, 220], [0.12, 120]], type: 'triangle', dur: 0.16, gain: 0.16 * g, minor: true }); k.noise(t, { dur: 0.12, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.12, 260]], q: 2, gain: 0.12 * g, minor: true }); };
    const slurp = (t, d = 0.4) => k.tone(t, { f: [[0, 300], [d, 700]], type: 'sine', dur: d, gain: 0.08, a: d * 0.4, minor: true });
    const big = (t) => { bloop(t, 320, 1.2); k.play('thud', t, { f: 140, gain: 0.35 }); twinkle(t + 0.12, 4, 0.8, false); };

    // transitions
    SC.forEach((s, i) => { if (!i) return; if (s.tr === 'slide') k.play('whoosh', s.s, { dur: 0.45, gain: 0.35, minor: true }); else if (s.tr === 'cut') { bloop(vis(s.s), 560, 0.6, { minor: true }); } else iris(s.s, 0.5, i % 2 ? 'C5' : 'D5'); });
    // chapter pill
    CH.forEach(([p], i) => bloop(vis(i ? PS(p) + 0.3 : PS(3) - 0.2), 640, 0.5, { minor: true }));
    // scene events
    SFX.forEach(([t0, kind, o]) => {
      const t = vis(t0);
      switch (kind) {
        case 'pop': bloop(t, o.f || 520, o.g || 0.9, o); break;
        case 'popm': bloop(t, o.f || 600, o.g || 0.6, { ...o, minor: true }); break;
        case 'boing': boing(t, o.g || 1); break;
        case 'pyon': pyon(t, o.g || 1, o); break;
        case 'nom': nom(t, o.g || 1, o.pan || 0.3); break;
        case 'bell': bell(t, o.f || 'E5', o.g || 1); break;
        case 'twinkle': twinkle(t, o.n || 4, o.g || 1, !!o.minor); break;
        case 'aww': aww(t); break;
        case 'thud': k.play('thud', t, { f: o.f || 120, gain: o.g || 0.5 }); break;
        case 'fizz': fizz(t, o.d || 0.8, o.g || 1); break;
        case 'squish': squish(t, o.g || 1); break;
        case 'slurp': slurp(t, o.d || 0.4); break;
        case 'big': big(t); break;
        case 'sparkle': k.play('sparkle', t, { n: o.n || 6, gain: o.g || 0.5 }); break;
        case 'tock': k.play('tock', t, { f: o.f || 900, gain: o.g || 0.3, minor: true, pan: o.pan || 0 }); break;
        case 'whoosh': k.play('whoosh', t, { dur: o.d || 0.5, gain: o.g || 0.45, minor: !!o.minor }); break;
        case 'riser': k.play('riser', t, { dur: o.d || 0.8, gain: o.g || 0.4 }); break;
        case 'success': ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bell(t + i * 0.07, n, 1 - i * 0.08, { dur: 0.8 })); break;
        case 'count': { const n = o.n || 10; for (let i = 0; i < n; i++) k.play('tock', t + i * (o.d || 0.8) / n, { f: 1200 + i * 40, gain: 0.3, minor: true }); break; }
        case 'stroke': for (let i = 0; i < (o.n || 6); i++) k.play('tock', t + i * (o.d || 0.5) / (o.n || 6), { f: 1500, gain: 0.22, minor: true, pan: o.pan || 0 }); break;
        default: bloop(t, 500, 0.8);
      }
    });
  }

  // ======================================== THUMBNAIL ========================================
  function thumbnail(ctx, W_, H_) {
    const t = 3.2;
    bg(ctx, W, HH, t, TH.pink, 11);
    twinkles(ctx, W, HH, t, 5, 14, (x, y) => x < 820);
    tube(ctx, bez([1300, 40], [1100, 20], [960, 140], [967, 330]), 64, C.pink, C.pinkS);
    stomach(ctx, 1010, 460, 0.95, { eyes: 'star', mouth: 'smile', acid: 0.35, wave: 2 });
    bite(ctx, 1110, 160, 0.95, { eyes: 'shock', mouth: 'O', armL: 2.4, armR: 2.2, tilt: 0.35, shadow: false });
    sweat(ctx, 1190, 110, 1.1, 0.3);
    kText(ctx, "FOOD'S", 400, 250, 168, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 });
    kText(ctx, 'SECRET', 400, 430, 168, { fill: C.white, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 });
    kText(ctx, 'TRIP', 400, 610, 168, { fill: C.mint, line: C.mintD, outer: C.plum, ow: 0.08, lw: 0.16 });
    for (const [x, y, R] of [[740, 140, 26], [90, 560, 20], [720, 600, 18]]) sparkle(ctx, x, y, R, C.butter, 0, 3.5);
  }

  const BEATS = PH.map((p, i) => ({ i, start: p.s, end: p.e, text: p.text, scene: SC.reduce((a, s, j) => (p.s >= s.s ? j : a), 0) }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W0; window.VIDEO_H = H0; window.SCENES = SC;
})();
