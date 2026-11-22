// ================= Synthwave Outrun, 9:16 1080x1920: "Why do male seahorses get pregnant?" =================
// Short (~49 s). Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// An 80s neon night: a wireframe seahorse dad floats over the outrun grid. CRT glitch cuts move between the twirling
// mating dance in a starry sky, a cut-away of the dad's brood pouch (vessels, oxygen, food, salt gauge), labor on the
// highway with a rolling DAYS odometer and a cloud of babies, a split HE / SHE panel, the morning-to-evening arc in
// the sky, and the chrome payoff question. Base style functions reused from 20261028-electric-eel (same reference).
(function () {
  const W = 1080, HH = 1920;
  // ---------- voiceover phrases (phrases.json, Kokoro am_michael, natural mode) ----------
  const PH = [{"s":0.25,"e":1.96,"text":"Male seahorses get pregnant,","words":[["male",0.25],["seahorses",0.54],["get",1.18],["pregnant",1.39]]},{"s":2.34,"e":4.83,"text":"and you've never seen a weirder birth:","words":[["and",2.34],["youve",2.59],["never",3.0],["seen",3.42],["a",3.75],["weirder",3.83],["birth",4.42]]},{"s":4.92,"e":6.81,"text":"up to a thousand babies at once.","words":[["up",4.92],["to",5.07],["a",5.22],["thousand",5.3],["babies",5.9],["at",6.35],["once",6.51]]},{"s":7.26,"e":8.76,"text":"So why him, and not her?","words":[["so",7.26],["why",7.44],["him",7.7],["and",7.97],["not",8.23],["her",8.5]]},{"s":9.22,"e":11.05,"text":"After a twirly mating dance,","words":[["after",9.22],["a",9.62],["twirly",9.7],["mating",10.18],["dance",10.65]]},{"s":11.46,"e":12.51,"text":"the female drops her eggs","words":[["the",11.46],["female",11.61],["drops",11.91],["her",12.16],["eggs",12.31]]},{"s":12.6,"e":14.82,"text":"into a pouch on the male's belly.","words":[["into",12.6],["a",12.96],["pouch",13.05],["on",13.49],["the",13.67],["males",13.93],["belly",14.38]]},{"s":15.25,"e":17.05,"text":"He seals them inside","words":[["he",15.25],["seals",15.46],["them",15.99],["inside",16.42]]},{"s":17.13,"e":18.89,"text":"and grows tiny blood vessels around them,","words":[["and",17.13],["grows",17.29],["tiny",17.55],["blood",17.75],["vessels",18.01],["around",18.37],["them",18.68]]},{"s":19.4,"e":20.69,"text":"a lot like a placenta.","words":[["a",19.4],["lot",19.48],["like",19.71],["a",20.01],["placenta",20.08]]},{"s":21.06,"e":23.37,"text":"He feeds them oxygen and nutrients","words":[["he",21.06],["feeds",21.22],["them",21.62],["oxygen",21.94],["and",22.41],["nutrients",22.65]]},{"s":23.76,"e":25.87,"text":"and keeps the water just salty enough.","words":[["and",23.76],["keeps",23.96],["the",24.31],["water",24.51],["just",24.85],["salty",25.12],["enough",25.46]]},{"s":26.35,"e":27.82,"text":"About two to four weeks later,","words":[["about",26.35],["two",26.66],["to",26.84],["four",26.96],["weeks",27.21],["later",27.51]]},{"s":28.33,"e":29.38,"text":"he goes into labor,","words":[["he",28.33],["goes",28.47],["into",28.75],["labor",29.03]]},{"s":29.75,"e":33.15,"text":"pumping and squeezing until the babies shoot out in a cloud.","words":[["pumping",29.75],["and",30.24],["squeezing",30.44],["until",31.07],["the",31.42],["babies",31.62],["shoot",32.04],["out",32.39],["in",32.59],["a",32.73],["cloud",32.8]]},{"s":33.6,"e":34.81,"text":"Here's the clever bit.","words":[["heres",33.6],["the",33.96],["clever",34.17],["bit",34.6]]},{"s":35.12,"e":36.37,"text":"While he's busy carrying,","words":[["while",35.12],["hes",35.43],["busy",35.62],["carrying",35.87]]},{"s":36.83,"e":39.19,"text":"she's already making her next batch of eggs.","words":[["shes",36.83],["already",37.1],["making",37.57],["her",37.98],["next",38.18],["batch",38.45],["of",38.79],["eggs",38.92]]},{"s":39.58,"e":41.59,"text":"Some dads give birth in the morning","words":[["some",39.58],["dads",39.86],["give",40.13],["birth",40.41],["in",40.76],["the",40.9],["morning",41.1]]},{"s":41.98,"e":43.74,"text":"and are pregnant again by evening.","words":[["and",41.98],["are",42.17],["pregnant",42.36],["again",42.86],["by",43.18],["evening",43.3]]},{"s":44.15,"e":45.74,"text":"More babies, way faster.","words":[["more",44.15],["babies",44.49],["way",44.99],["faster",45.24]]},{"s":46.09,"e":48.51,"text":"So would you trade jobs with a seahorse dad?","words":[["so",46.09],["would",46.23],["you",46.57],["trade",46.78],["jobs",47.13],["with",47.41],["a",47.68],["seahorse",47.75],["dad",48.31]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); return x ? x[1] : PH[i].s; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const BEATS = [
    { s: PH[0].s, e: PH[2].e, text: 'hook: male seahorses get pregnant, weirdest birth, up to 1,000 babies', screen: 'outrun road, neon seahorse dad, chrome SEAHORSE DADS, PREGNANT tube, chrome 1,000 BABIES burst from the pouch' },
    { s: PH[3].s, e: PH[3].e, text: 'why him and not her', screen: 'HIM? / HER? neon tubes light on their words' },
    { s: PH[4].s, e: PH[6].e, text: 'mating dance, female drops eggs into the pouch on his belly', screen: 'starry sky, two seahorses twirl, MATING DANCE, eggs arc into the male pouch, EGGS / POUCH labels' },
    { s: PH[7].s, e: PH[11].e, text: 'he seals them, grows vessels like a placenta, feeds oxygen and nutrients, keeps water salty enough', screen: 'cut-away pouch on a neon grid, SEALED, VESSELS grow, like a placenta, O2 + FOOD stream in, SALT gauge JUST RIGHT' },
    { s: PH[12].s, e: PH[14].e, text: 'two to four weeks later, labor, babies shoot out in a cloud', screen: 'road, DAYS odometer, chrome 2-4 WEEKS, LABOR, pouch pumps, baby cloud, BABIES counter to 1,000' },
    { s: PH[15].s, e: PH[17].e, text: 'clever bit: while he carries, she makes the next batch', screen: 'split panels HE / SHE, CARRYING, eggs fill NEXT BATCH' },
    { s: PH[18].s, e: PH[20].e, text: 'birth in the morning, pregnant again by evening, more babies faster', screen: 'sky arc sun to moon, MORNING BIRTH, EVENING PREGNANT AGAIN, chrome MORE BABIES, WAY FASTER' },
    { s: PH[21].s, e: PH[21].e, text: 'payoff question', screen: 'seahorse dad on the road, WOULD YOU, chrome TRADE JOBS?' },
  ];
  // scene cuts (CRT glitch) sit in the pauses between phrases
  const CUT = { dance: 9.0, pouch: 15.04, labor: 26.1, clever: 33.38, cycle: 39.39, end: 45.92 };
  const E = H.ease, cl = H.clamp;
  const ph = (t, a, b) => cl((t - a) / (b - a));
  try { ['800 120px "Orbitron"', '500 40px "Orbitron"', '700 100px "Caveat"'].forEach((f) => document.fonts.load(f, 'AaZz09?,')); } catch (e) {}
  // ---------- projection (re-laid out for 9:16: horizon low, road fills the bottom third) ----------
  const HZ = 1180, VPX = 540, FOC = 640, CAMH = 1.25;
  const proj = (x, h, z) => [VPX + (x / z) * FOC, HZ + ((CAMH - h) / z) * FOC];

  // ---------- reference style functions (synthwave.js), adapted to 1080x1920 ----------
  function skyAndStars(c, t) {
    const g = c.createLinearGradient(0, 0, 0, HZ);
    g.addColorStop(0, '#05021a'); g.addColorStop(0.45, '#1c0640'); g.addColorStop(0.78, '#5a0f6e'); g.addColorStop(0.94, '#c41a7e'); g.addColorStop(1, '#ff4fa0');
    c.fillStyle = g; c.fillRect(0, 0, W, HZ + 2);
    const r = H.rng(404);
    for (let i = 0; i < 300; i++) {
      const x = r.range(0, W), y = Math.pow(r(), 1.6) * HZ * 0.8, s = r.range(0.8, 2.4);
      const tw = (0.55 + 0.45 * Math.sin(t * r.range(1, 4) + i)) * cl((t - r() * 1.4) / 0.25);
      c.fillStyle = `rgba(255,${r.int(200, 255)},255,${(0.35 + r() * 0.6) * tw})`;
      c.fillRect(x, y, s, s);
      if (s > 2.2 && y < HZ * 0.5) { c.fillStyle = `rgba(200,240,255,${0.5 * tw})`; c.fillRect(x - 8, y + s / 2 - 0.5, 16 + s, 1.2); c.fillRect(x + s / 2 - 0.5, y - 8, 1.2, 16 + s); }
    }
  }
  function extraStars(c, top, bot, seed) {
    const r = H.rng(seed);
    for (let i = 0; i < 260; i++) { const y = r.range(top, bot); c.fillStyle = `rgba(255,230,255,${r.range(0.3, 0.9)})`; const s = r.range(1.2, 2.6); c.fillRect(r.range(0, W), y, s, s); }
  }
  let SUNL = null;
  function sun(c0, cx, cy, R, t) {
    const L = SUNL || (SUNL = H.layer(W, HH)), c = L.getContext('2d');
    c.setTransform(1, 0, 0, 1, 0, 0); c.globalCompositeOperation = 'source-over'; c.clearRect(0, 0, W, HH);
    const bg = c0.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 2.1);
    bg.addColorStop(0, 'rgba(255,90,150,0.55)'); bg.addColorStop(0.5, 'rgba(255,40,140,0.15)'); bg.addColorStop(1, 'rgba(255,40,140,0)');
    c0.fillStyle = bg; c0.fillRect(cx - R * 2.2, cy - R * 2.2, R * 4.4, R * 4.4);
    c.beginPath(); c.arc(cx, cy, R, 0, Math.PI * 2);
    const g = c.createLinearGradient(0, cy - R, 0, cy + R * 0.6);
    g.addColorStop(0, '#fff6a0'); g.addColorStop(0.3, '#ffd23f'); g.addColorStop(0.55, '#ff8a3d'); g.addColorStop(0.8, '#ff3d7f'); g.addColorStop(1, '#d4147f');
    c.fillStyle = g; c.fill();
    c.globalCompositeOperation = 'destination-out';
    const st = 34, sc = (t * 15) % st;
    for (let k = -1; k < 14; k++) { const y = cy - R * 0.18 + k * st + sc; const f = cl((y - (cy - R * 0.22)) / (R * 1.0)); c.fillRect(cx - R, y, R * 2, 3 + f * 17); }
    c.globalCompositeOperation = 'source-over';
    c0.drawImage(L, 0, 0);
  }
  const MNZ = H.makeNoise(19);
  function mountains(c) {
    const xs = [], zs = [];
    for (let x = -64; x <= 64; x += 2.6) xs.push(x);
    for (let z = 80; z >= 26; z -= 2.4) zs.push(z);
    const hAt = (x, z) => { const ax = Math.abs(x); const ridge = H.smooth(4.5, 15, ax); const n = MNZ.fbm2(x * 0.075 + 3, z * 0.09, 4) * 0.5 + 0.5; const peaks = Math.pow(n, 1.6) * 30 + 2; const back = H.smooth(30, 60, z) * 0.5 + 0.5; const front = H.smooth(26, 40, z); return ridge * peaks * back * front; };
    const Pm = zs.map((z) => xs.map((x) => { const h = hAt(x, z); return [...proj(x, h, z), h]; }));
    c.save(); c.lineJoin = 'round';
    for (let j = 0; j < zs.length - 1; j++) {
      const depth = 1 - j / (zs.length - 1);
      for (let i = 0; i < xs.length - 1; i++) {
        const a = Pm[j][i], b = Pm[j][i + 1], cc = Pm[j + 1][i + 1], d = Pm[j + 1][i];
        const hh = (a[2] + b[2] + cc[2] + d[2]) / 4; if (hh < 0.01) continue;
        if (Math.max(a[0], b[0]) < -20 || Math.min(a[0], b[0]) > W + 20) continue;
        const shade = cl(hh / 26);
        c.fillStyle = H.rgba(H.mix('#120531', '#3a0f63', shade * 0.8), 1);
        c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.lineTo(cc[0], cc[1]); c.lineTo(d[0], d[1]); c.closePath(); c.fill();
        const lc = H.mix('#b02cff', '#4ff3ff', H.smooth(0.55, 1, shade));
        const qh = Math.max(Math.abs(d[1] - a[1]), Math.abs(cc[1] - b[1])); const dens = cl((qh - 1) / 7);
        c.strokeStyle = H.rgba(lc, (0.3 + 0.6 * (1 - depth)) * dens); c.lineWidth = 1.5; c.stroke();
        c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(cc[0], cc[1]); c.strokeStyle = H.rgba(lc, (0.15 + 0.3 * (1 - depth)) * dens); c.stroke();
      }
    }
    c.restore();
  }
  function floorAndRoad(c, t, speed = 7) {
    const yTop = HZ + 1;
    const g = c.createLinearGradient(0, yTop, 0, HH); g.addColorStop(0, '#2a0838'); g.addColorStop(0.15, '#12041f'); g.addColorStop(1, '#07010f');
    c.fillStyle = g; c.fillRect(0, yTop, W, HH - yTop);
    const zFar = 34, zNear = 0.5, road = 2.4;
    c.save(); c.beginPath(); c.rect(0, HZ, W, HH - HZ); c.clip();
    const strokeGrid = (lw, col) => {
      c.strokeStyle = col; c.lineWidth = lw; c.beginPath();
      for (let x = road + 0.0001; x <= 60; x += 2.6) for (const s of [-1, 1]) { const [x0, y0] = proj(s * x, 0, zNear), [x1, y1] = proj(s * x, 0, zFar + 40); c.moveTo(x0, y0); c.lineTo(x1, y1); }
      const off = (t * speed) % 2.6;
      for (let z = 1 - off; z < zFar + 40; z += 2.6) { if (z < 0.3) continue; const [, y] = proj(0, 0, z); const [xl] = proj(-road, 0, z), [xr] = proj(road, 0, z); c.moveTo(0, y); c.lineTo(xl, y); c.moveTo(xr, y); c.lineTo(W, y); }
      c.stroke();
    };
    c.globalCompositeOperation = 'lighter';
    strokeGrid(8, 'rgba(255,30,170,0.12)'); strokeGrid(3.4, 'rgba(255,50,190,0.35)'); strokeGrid(1.5, 'rgba(255,150,230,0.9)');
    c.globalCompositeOperation = 'source-over';
    const [l0x, l0y] = proj(-road, 0, zNear), [r0x] = proj(road, 0, zNear), [l1x, l1y] = proj(-road, 0, 80), [r1x] = proj(road, 0, 80);
    const rg = c.createLinearGradient(0, HZ, 0, HH); rg.addColorStop(0, '#1a0830'); rg.addColorStop(1, '#0b0418');
    c.fillStyle = rg; c.beginPath(); c.moveTo(l0x, l0y); c.lineTo(l1x, l1y); c.lineTo(r1x, l1y); c.lineTo(r0x, l0y); c.closePath(); c.fill();
    const sg = c.createLinearGradient(0, HZ, 0, HH); sg.addColorStop(0, 'rgba(255,120,120,0.55)'); sg.addColorStop(0.35, 'rgba(255,60,160,0.15)'); sg.addColorStop(1, 'rgba(255,60,160,0)');
    c.fillStyle = sg; c.beginPath(); c.moveTo(VPX - 3, HZ); c.lineTo(VPX + 3, HZ); c.lineTo(VPX + 200, HH); c.lineTo(VPX - 200, HH); c.fill();
    c.globalCompositeOperation = 'lighter';
    for (const [lw, a] of [[13, 0.12], [5, 0.35], [2, 1]]) { c.strokeStyle = `rgba(80,240,255,${a})`; c.lineWidth = lw; c.beginPath(); c.moveTo(l0x, l0y); c.lineTo(l1x, l1y); c.moveTo(r0x, l0y); c.lineTo(r1x, l1y); c.stroke(); }
    const off = (t * speed) % 3.2;
    for (let z = 0.6 - off; z < 60; z += 3.2) { const z0 = Math.max(0.35, z), z1 = z + 1.5; if (z1 < 0.4) continue; const [ax, ay] = proj(-0.08, 0, z0), [bx] = proj(0.08, 0, z0), [cx, cy] = proj(0.08, 0, z1), [dx] = proj(-0.08, 0, z1); c.fillStyle = 'rgba(255,240,200,0.85)'; c.beginPath(); c.moveTo(ax, ay); c.lineTo(bx, ay); c.lineTo(cx, cy); c.lineTo(dx, cy); c.fill(); }
    c.restore();
    c.save(); c.globalCompositeOperation = 'lighter';
    const hl = c.createLinearGradient(0, 0, W, 0); hl.addColorStop(0, 'rgba(255,80,180,0)'); hl.addColorStop(0.5, 'rgba(255,200,230,0.95)'); hl.addColorStop(1, 'rgba(255,80,180,0)');
    c.fillStyle = hl; c.fillRect(0, HZ - 1, W, 3);
    const hg = c.createLinearGradient(0, HZ - 14, 0, HZ + 40); hg.addColorStop(0, 'rgba(255,60,160,0)'); hg.addColorStop(0.3, 'rgba(255,60,160,0.35)'); hg.addColorStop(1, 'rgba(255,60,160,0)');
    c.fillStyle = hg; c.fillRect(0, HZ - 14, W, 54); c.restore();
  }
  function bloom(ctx, amt, blur) {
    const s = H.layer(W / 4, HH / 4), sc = s.getContext('2d');
    sc.filter = `blur(${blur}px)`; sc.drawImage(ctx.canvas, 0, 0, W / 4, HH / 4);
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalCompositeOperation = 'screen'; ctx.globalAlpha = amt; ctx.imageSmoothingEnabled = true; ctx.drawImage(s, 0, 0, ctx.canvas.width, ctx.canvas.height); ctx.restore();
  }
  function chromeTitle(c, text, cx, by, size) {
    c.save();
    c.font = `800 ${size}px "Orbitron"`; c.textAlign = 'center'; c.textBaseline = 'alphabetic'; c.letterSpacing = '4px';
    const top = by - size * 0.74, bot = by + 2, ex = size / 56;
    c.translate(cx, by); c.transform(1, 0, -0.22, 1, 0, 0); c.translate(-cx, -by);
    for (let i = 14; i >= 1; i--) { const k = i / 14; c.fillStyle = H.rgba(H.mix('#ff2fb0', '#1a0533', 0.35 + k * 0.6), 1); c.fillText(text, cx + i * 0.55 * ex, by + i * 0.9 * ex); }
    c.lineJoin = 'round'; c.strokeStyle = '#12032a'; c.lineWidth = 9 * Math.sqrt(ex); c.strokeText(text, cx, by);
    const g = c.createLinearGradient(0, top, 0, bot);
    g.addColorStop(0, '#0e2a6b'); g.addColorStop(0.18, '#3d7fd6'); g.addColorStop(0.42, '#d9f2ff'); g.addColorStop(0.5, '#ffffff');
    g.addColorStop(0.505, '#2a0a2e'); g.addColorStop(0.58, '#5a1d3a'); g.addColorStop(0.75, '#d0602a'); g.addColorStop(0.9, '#ffc06a'); g.addColorStop(1, '#fff1c8');
    c.fillStyle = g; c.fillText(text, cx, by);
    c.strokeStyle = 'rgba(255,255,255,0.55)'; c.lineWidth = 2; c.save(); c.globalCompositeOperation = 'source-atop'; c.strokeText(text, cx - 1.5, by - 2); c.restore();
    c.strokeStyle = 'rgba(255,170,240,0.55)'; c.lineWidth = 1.6; c.strokeText(text, cx, by);
    c.restore();
  }
  function glint(c, x, y, s, a) {
    c.save(); c.globalCompositeOperation = 'lighter';
    const rg = c.createRadialGradient(x, y, 0, x, y, s * 0.5); rg.addColorStop(0, `rgba(255,255,255,${a})`); rg.addColorStop(1, 'rgba(255,200,255,0)');
    c.fillStyle = rg; c.fillRect(x - s, y - s, s * 2, s * 2); c.fillStyle = `rgba(255,255,255,${a})`;
    c.beginPath(); c.moveTo(x - s, y); c.lineTo(x, y - 2.2); c.lineTo(x + s, y); c.lineTo(x, y + 2.2); c.fill();
    c.beginPath(); c.moveTo(x, y - s * 0.7); c.lineTo(x - 2, y); c.lineTo(x, y + s * 0.7); c.lineTo(x + 2, y); c.fill();
    c.restore();
  }
  function neonStroke(c, col, w, draw) {
    c.save(); c.lineCap = 'round'; c.lineJoin = 'round'; c.globalCompositeOperation = 'lighter';
    c.strokeStyle = col; c.globalAlpha *= 0.18; c.lineWidth = w * 5; c.beginPath(); draw(); c.stroke();
    c.globalAlpha = c.globalAlpha / 0.18 * 0.45; c.lineWidth = w * 2.2; c.beginPath(); draw(); c.stroke();
    c.globalAlpha = c.globalAlpha / 0.45; c.strokeStyle = '#fff'; c.lineWidth = Math.max(1, w * 0.7); c.beginPath(); draw(); c.stroke();
    c.restore();
  }
  function neonText(c, txt, x, y, font, col, on = 1, align = 'center') {
    if (on <= 0) return;
    c.save(); c.font = font; c.textAlign = align; c.textBaseline = 'middle';
    const base = c.globalAlpha;
    c.globalAlpha = base * on * 0.55; c.shadowColor = 'rgba(14,0,34,0.9)'; c.shadowBlur = 16; c.fillStyle = 'rgba(20,0,44,0.6)'; c.fillText(txt, x, y);
    c.globalAlpha = base * on; c.shadowColor = col; c.shadowBlur = 30; c.fillStyle = col; c.fillText(txt, x, y);
    c.shadowBlur = 10; c.fillText(txt, x, y);
    c.shadowBlur = 0; const fs = parseFloat((/(\d+(?:\.\d+)?)px/.exec(font) || [0, 24])[1]);
    c.strokeStyle = H.rgba(H.mix(col, '#ffffff', 0.62), 0.9); c.lineWidth = Math.max(0.8, fs * 0.04); c.lineJoin = 'round'; c.strokeText(txt, x, y);
    c.fillStyle = H.rgba(H.mix(col, '#ffffff', 0.45), 1); c.globalAlpha = base * on * 0.22; c.fillText(txt, x, y);
    c.restore();
  }
  function deadTube(c, txt, x, y, font, col) {
    c.save(); c.font = font; c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineJoin = 'round';
    c.fillStyle = 'rgba(255,120,220,0.08)'; c.fillText(txt, x, y);
    c.strokeStyle = col; c.globalAlpha *= 0.6; c.lineWidth = 2.4; c.strokeText(txt, x, y);
    c.restore();
  }
  const FLK = [1, 0, 1, 0.3, 0, 1, 1, 0.5, 1, 1];
  const flick = (t, t0) => { if (t < t0) return 0; const d = t - t0; if (d > 0.32) return 1; return FLK[Math.floor(d / 0.032)] ?? 1; };
  const win = (t, a, b, fo = 0.25) => (t < a ? 0 : t > b + fo ? 0 : t > b ? 1 - (t - b) / fo : flick(t, a));
  function neonPath(c, pts, prog, col, w = 3.5, head = true) {
    let total = 0; const L = []; for (let i = 0; i < pts.length - 1; i++) { const l = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]); L.push(l); total += l; }
    let rem = total * cl(prog); const out = [pts[0]]; let dir = [1, 0];
    for (let i = 0; i < L.length && rem > 0; i++) { const u = Math.min(1, rem / L[i]); out.push([H.lerp(pts[i][0], pts[i + 1][0], u), H.lerp(pts[i][1], pts[i + 1][1], u)]); dir = [(pts[i + 1][0] - pts[i][0]) / L[i], (pts[i + 1][1] - pts[i][1]) / L[i]]; rem -= L[i]; }
    if (prog <= 0) return;
    neonStroke(c, col, w, () => {
      c.moveTo(...out[0]); for (const p of out) c.lineTo(...p);
      if (head && prog >= 1) { const [ex, ey] = out[out.length - 1], a = Math.atan2(dir[1], dir[0]); c.moveTo(ex - Math.cos(a - 0.5) * 26, ey - Math.sin(a - 0.5) * 26); c.lineTo(ex, ey); c.lineTo(ex - Math.cos(a + 0.5) * 26, ey - Math.sin(a + 0.5) * 26); }
    });
  }
  function glowDot(c, x, y, r, col, a = 1) {
    c.save(); c.globalCompositeOperation = 'lighter'; c.globalAlpha *= a;
    const g = c.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, H.rgba(col, 0.85)); g.addColorStop(1, H.rgba(col, 0));
    c.fillStyle = g; c.fillRect(x - r, y - r, r * 2, r * 2); c.restore();
  }
  function panel(c, x, y, w, h) {
    c.save(); const g = c.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, 'rgba(8,2,22,0.92)'); g.addColorStop(1, 'rgba(3,0,10,0.96)');
    c.fillStyle = g; c.beginPath(); c.roundRect(x, y, w, h, 22); c.fill(); c.restore();
    neonStroke(c, '#4ff3ff', 1.6, () => c.roundRect(x, y, w, h, 22));
    c.save(); c.strokeStyle = 'rgba(255,255,255,0.3)'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(x + 24, y + 6); c.lineTo(x + w - 24, y + 6); c.stroke(); c.restore();
  }
  const F = (px, w = 800) => `${w} ${px}px "Orbitron"`;
  function roadBG(ctx, t, tilt = 0, speed = 7) {
    ctx.fillStyle = '#05021a'; ctx.fillRect(0, 0, W, HH);
    if (tilt > 0) extraStars(ctx, 0, tilt + 60, 77);
    ctx.save(); ctx.translate(0, tilt);
    skyAndStars(ctx, t + 3); sun(ctx, VPX, HZ - 175, 290, t); mountains(ctx); floorAndRoad(ctx, t, speed);
    ctx.restore();
  }
  // ---------- CRT glitch cut: slices of the frame tear sideways, RGB split, a scanline burst ----------
  function glitch(ctx, k, seed) {
    if (k <= 0) return;
    const r = H.rng(seed), cv = ctx.canvas;
    ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0);
    for (let i = 0; i < 14; i++) { const y = r.range(0, HH), h = r.range(20, 140), dx = (r() - 0.5) * 260 * k; ctx.drawImage(cv, 0, y, W, h, dx, y, W, h); }
    ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = 0.35 * k;
    ctx.drawImage(cv, 14 * k, 0); ctx.globalAlpha = 1;
    ctx.fillStyle = `rgba(79,243,255,${0.12 * k})`; for (let y = 0; y < HH; y += 6) ctx.fillRect(0, y, W, 2);
    ctx.globalCompositeOperation = 'source-over'; ctx.restore();
  }
  function noSign(c, x, y, r, on) { if (on <= 0) return; c.save(); c.globalAlpha *= on; neonStroke(c, '#ff2a4a', 5, () => { c.moveTo(x + r, y); c.arc(x, y, r, 0, 7); c.moveTo(x - r * 0.7, y - r * 0.7); c.lineTo(x + r * 0.7, y + r * 0.7); }); c.restore(); }
  function popTitle(ctx, txt, x, y, size, t0, t, k = 1.4) {
    if (t < t0) return 0; const p = ph(t, t0, t0 + 0.35);
    ctx.save(); ctx.globalAlpha *= cl(p * 4); const sc = 1 + k * Math.pow(1 - p, 3); ctx.translate(x, y); ctx.scale(sc, sc); ctx.translate(-x, -y);
    chromeTitle(ctx, txt, x, y, size); ctx.restore(); return p;
  }
  function gridBG(ctx, tint = 'rgba(90,15,110,0.55)') {
    ctx.fillStyle = '#06021a'; ctx.fillRect(0, 0, W, HH);
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.strokeStyle = 'rgba(176,44,255,0.16)'; ctx.lineWidth = 1.5; ctx.beginPath();
    for (let x = 0; x <= W; x += 60) { ctx.moveTo(x, 0); ctx.lineTo(x, HH); } for (let y = 0; y <= HH; y += 60) { ctx.moveTo(0, y); ctx.lineTo(W, y); } ctx.stroke(); ctx.restore();
    const wg = ctx.createRadialGradient(540, 900, 100, 540, 900, 1000); wg.addColorStop(0, tint); wg.addColorStop(1, 'rgba(5,2,26,0)'); ctx.fillStyle = wg; ctx.fillRect(0, 0, W, HH);
  }

  // ---------- new props for this story ----------
  const CY = '#4ff3ff', PK = '#ff4fd8', YL = '#ffe066', OR = '#ffb347', GR = '#5cffb0', RD = '#ff3d6e', LV = '#b9a2ff';
  const bez = (p0, p1, p2, p3, u) => { const v = 1 - u; return [v * v * v * p0[0] + 3 * v * v * u * p1[0] + 3 * v * u * u * p2[0] + u * u * u * p3[0], v * v * v * p0[1] + 3 * v * v * u * p1[1] + 3 * v * u * u * p2[1] + u * u * u * p3[1]]; };
  // tail centre line: down from the tail root, then a spiral that curls forward and under
  function tailPts(curl = 1) {
    const out = [];
    for (let i = 0; i <= 14; i++) { const u = i / 14; out.push([H.lerp(-8, 0, u), H.lerp(150, 250, u)]); }
    for (let i = 1; i <= 40; i++) { const v = i / 40, a = Math.PI - 2.3 * Math.PI * v * curl, r = 42 * (1 - 0.72 * v); out.push([42 + Math.cos(a) * r, 250 + Math.sin(a) * r]); }
    return out;
  }
  function tailEdges(curl) {
    const c = tailPts(curl), L = [], R = [];
    for (let i = 0; i < c.length; i++) {
      const a = c[Math.max(0, i - 1)], b = c[Math.min(c.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1;
      const w = H.lerp(23, 3, i / (c.length - 1));
      L.push([c[i][0] - (dy / d) * w, c[i][1] + (dx / d) * w]); R.push([c[i][0] + (dy / d) * w, c[i][1] - (dx / d) * w]);
    }
    return { c, L, R };
  }
  // the seahorse, drawn facing right in local units (about 560 tall); o: col, dir, bulge, glow, flex, a, female, t, fill
  function seahorse(c, x, y, s, o = {}) {
    const col = o.col || CY, b = o.bulge == null ? 0.25 : o.bulge, t = o.t || 0, dir = o.dir || 1, a = o.a == null ? 1 : o.a;
    if (a <= 0) return;
    c.save(); c.globalAlpha *= a; c.translate(x, y); c.rotate((o.rot || 0)); c.scale(s * dir, s);
    const flex = o.flex || 0;
    const bodyPath = () => {
      c.moveTo(15, 150);
      c.bezierCurveTo(75 + 50 * b + 18 * flex, 110, 95 + 50 * b + 18 * flex, -30, 55, -90);
      c.bezierCurveTo(45, -120, 8, -140, 18, -178);
      c.bezierCurveTo(24, -198, 45, -210, 72, -214);
      c.lineTo(150, -222); c.lineTo(155, -246); c.lineTo(76, -251);
      c.bezierCurveTo(56, -286, 22, -306, -8, -300);
      c.bezierCurveTo(-40, -294, -56, -250, -40, -215);
      c.bezierCurveTo(-110, -150, -105, -30, -80, 40);
      c.bezierCurveTo(-65, 100, -45, 130, -30, 150);
    };
    const te = tailEdges(o.curl == null ? 1 : o.curl);
    const tailPath = () => { c.moveTo(...te.L[0]); for (const p of te.L) c.lineTo(...p); for (let i = te.R.length - 1; i >= 0; i--) c.lineTo(...te.R[i]); c.closePath(); };
    // dark glass fill so the grid / sun do not show through
    c.fillStyle = o.fill || 'rgba(14,2,34,0.88)'; c.beginPath(); bodyPath(); c.closePath(); c.fill(); c.beginPath(); tailPath(); c.fill();
    // pouch glow (behind the outline)
    if (!o.female && (o.glow || 0) > 0) {
      const gx = 50 + 25 * b, g = c.createRadialGradient(gx, 45, 5, gx, 45, 95);
      g.addColorStop(0, H.rgba(OR, 0.55 * o.glow)); g.addColorStop(1, H.rgba(OR, 0));
      c.save(); c.globalCompositeOperation = 'lighter'; c.fillStyle = g; c.fillRect(gx - 100, -55, 200, 200); c.restore();
    }
    // dorsal fin flutters on the back
    const backP = (u) => bez([-40, -215], [-110, -150], [-105, -30], [-80, 40], u);
    neonStroke(c, LV, 1.4 / s * 1.1, () => {
      const f0 = backP(0.42), f1 = backP(0.78);
      c.moveTo(...f0);
      for (let i = 0; i <= 8; i++) { const u = H.lerp(0.42, 0.78, i / 8), p = backP(u), wv = Math.sin(t * 14 + i * 0.9) * 6; c.lineTo(p[0] - 40 - wv, p[1] + 4); }
      c.lineTo(...f1);
      for (let i = 1; i < 8; i++) { const u = H.lerp(0.42, 0.78, i / 8), p = backP(u), wv = Math.sin(t * 14 + i * 0.9) * 6; c.moveTo(p[0] - 4, p[1]); c.lineTo(p[0] - 38 - wv, p[1] + 4); }
    });
    // pectoral fin behind the head
    neonStroke(c, LV, 1.2 / s * 1.1, () => { const w = Math.sin(t * 16) * 5; c.moveTo(-22, -200); c.quadraticCurveTo(-58 - w, -210, -50 - w, -172); c.lineTo(-24, -182); });
    // body + tail outline
    const w0 = 2.2 / Math.sqrt(s) * 1.4;
    neonStroke(c, col, w0, () => { bodyPath(); });
    neonStroke(c, col, w0 * 0.9, tailPath);
    // bony rings: ticks along back and belly, rungs across the tail
    c.save(); c.globalAlpha *= 0.7;
    neonStroke(c, col, w0 * 0.45, () => {
      for (let i = 1; i < 9; i++) { const p = backP(i / 9); c.moveTo(p[0], p[1]); c.lineTo(p[0] + 20, p[1] + 2); }
      for (let i = 1; i < 7; i++) { const p = bez([15, 150], [75 + 50 * b + 18 * flex, 110], [95 + 50 * b + 18 * flex, -30], [55, -90], i / 7); c.moveTo(p[0], p[1]); c.lineTo(p[0] - 16, p[1]); }
      for (let i = 3; i < te.c.length - 6; i += 3) { c.moveTo(...te.L[i]); c.lineTo(...te.R[i]); }
    });
    c.restore();
    // coronet and eye
    neonStroke(c, col, w0 * 0.6, () => { c.moveTo(-14, -300); c.lineTo(-22, -330); c.lineTo(-2, -303); c.moveTo(6, -302); c.lineTo(10, -326); c.lineTo(20, -297); });
    c.save(); c.fillStyle = '#05010e'; c.beginPath(); c.arc(28, -258, 11, 0, 7); c.fill(); c.restore();
    neonStroke(c, YL, w0 * 0.55, () => { c.moveTo(39, -258); c.arc(28, -258, 11, 0, 7); });
    c.save(); c.fillStyle = '#fff'; c.beginPath(); c.arc(31, -261, 3.5, 0, 7); c.fill(); c.restore();
    // brood pouch seam on the male's belly
    if (!o.female) {
      c.save(); c.globalAlpha *= 0.85;
      neonStroke(c, OR, w0 * 0.55, () => { c.moveTo(18, 128); c.bezierCurveTo(55 + 38 * b + 14 * flex, 100, 66 + 38 * b + 14 * flex, 0, 40, -60); });
      c.restore();
    }
    c.restore();
  }
  // local seahorse point -> canvas (same transform as seahorse(), without rot)
  const loc = (x, y, s, dir, lx, ly) => [x + lx * s * dir, y + ly * s];
  const pouchC = (b) => [55 + 22 * b, 40];
  const bob = (t, k = 1, ph0 = 0) => Math.sin(t * 2.2 * k + ph0) * 14;

  // ---------- baby sprite (cached once) and a cloud of babies ----------
  let BABY = null;
  function baby() {
    if (BABY) return BABY;
    BABY = H.layer(90, 120); const c = BABY.getContext('2d');
    seahorse(c, 38, 66, 0.15, { col: YL, bulge: 0, female: true, fill: 'rgba(30,20,10,0.7)' });
    return BABY;
  }
  function babyCloud(c, ox, oy, t0, t, n, seed, o = {}) {
    if (t < t0) return;
    const r = H.rng(seed), dt = t - t0, spd = o.speed || 1;
    for (let i = 0; i < n; i++) {
      const ang = (o.ang == null ? -Math.PI / 2 : o.ang) + r.range(-1, 1) * (o.spread || 1.4), v = r.range(220, 780) * spd, delay = r.range(0, o.stagger == null ? 0.9 : o.stagger), sc = r.range(0.55, 1.15), wob = r.range(0, 7);
      const d = dt - delay; if (d < 0) continue;
      const k = 1.6, dist = (v * (1 - Math.exp(-k * d))) / k;
      const x = ox + Math.cos(ang) * dist + Math.sin(d * 2 + wob) * 18, y = oy + Math.sin(ang) * dist - d * 30;
      const a = cl(d / 0.15) * (o.fade ? 1 - ph(t, o.fade, o.fade + 0.4) : 1);
      if (a <= 0 || y < 160) continue;
      const s2 = sc * H.lerp(0.4, 1, cl(d / 0.4)) * (o.size || 1);
      c.save(); c.globalAlpha *= a; c.translate(x, y); c.rotate(Math.sin(d * 3 + wob) * 0.3); if (r() < 0.5) c.scale(-1, 1);
      c.drawImage(baby(), -45 * s2, -66 * s2, 90 * s2, 120 * s2); c.restore();
    }
  }
  function egg(c, x, y, r, a = 1, grow = 0, t = 0) {
    c.save(); c.globalAlpha *= a;
    const g = c.createRadialGradient(x - r * 0.3, y - r * 0.3, 1, x, y, r); g.addColorStop(0, '#ffe2a8'); g.addColorStop(0.6, '#ff9a3d'); g.addColorStop(1, 'rgba(255,90,60,0.4)');
    c.fillStyle = g; c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); c.restore();
    neonStroke(c, OR, 1.1, () => { c.moveTo(x + r, y); c.arc(x, y, r, 0, 7); });
    if (grow > 0) { c.save(); c.globalAlpha *= a * grow; c.fillStyle = '#05010e'; c.beginPath(); c.arc(x + r * 0.25, y - r * 0.2, r * 0.18, 0, 7); c.fill(); c.strokeStyle = 'rgba(60,10,20,0.9)'; c.lineWidth = r * 0.14; c.beginPath(); c.arc(x, y + r * 0.05, r * 0.5, -0.6, 2.6); c.stroke(); c.restore(); }
  }
  function labelArrow(c, txt, x, y, col, on, to, size = 46) {
    if (on <= 0) return;
    neonText(c, txt, x, y, F(size), col, on);
    if (to) { c.save(); c.globalAlpha *= on; neonPath(c, [[to[0][0], to[0][1]], [to[1][0], to[1][1]]], 1, col, 2.6); c.restore(); }
  }
  function sunIcon(c, x, y, R, on, t) {
    if (on <= 0) return; c.save(); c.globalAlpha *= on;
    const g = c.createLinearGradient(0, y - R, 0, y + R); g.addColorStop(0, '#fff6a0'); g.addColorStop(0.5, '#ff8a3d'); g.addColorStop(1, '#ff3d7f');
    c.fillStyle = g; c.beginPath(); c.arc(x, y, R, 0, 7); c.fill(); c.restore();
    c.save(); c.globalAlpha *= on; neonStroke(c, YL, 2.2, () => { for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 + t * 0.5; c.moveTo(x + Math.cos(a) * (R + 14), y + Math.sin(a) * (R + 14)); c.lineTo(x + Math.cos(a) * (R + 36), y + Math.sin(a) * (R + 36)); } }); c.restore();
  }
  function moonIcon(c, x, y, R, on) {
    if (on <= 0) return; c.save(); c.globalAlpha *= on;
    neonStroke(c, CY, 2.6, () => { c.moveTo(x + R * 0.2, y - R); c.arc(x, y, R, -1.37, 1.37, true); c.quadraticCurveTo(x - R * 0.55, y, x + R * 0.2, y - R); }); c.restore();
  }
  function gauge(c, x, y, R, v, on, t) {
    if (on <= 0) return; c.save(); c.globalAlpha *= on;
    c.fillStyle = 'rgba(8,2,22,0.9)'; c.beginPath(); c.arc(x, y, R + 16, Math.PI, 0); c.closePath(); c.fill();
    const seg = [[Math.PI, Math.PI * 1.33, '#4f7bff'], [Math.PI * 1.33, Math.PI * 1.67, GR], [Math.PI * 1.67, Math.PI * 2, RD]];
    for (const [a0, a1, col] of seg) neonStroke(c, col, 3.4, () => c.arc(x, y, R, a0 + 0.04, a1 - 0.04));
    const a = Math.PI * (1 + v); neonStroke(c, YL, 3, () => { c.moveTo(x, y); c.lineTo(x + Math.cos(a) * R * 0.86, y + Math.sin(a) * R * 0.86); });
    glowDot(c, x, y, 18, YL, 0.9); c.restore();
  }

  // ---------- scenes ----------
  function sHook(ctx, t) {
    roadBG(ctx, t, 0, 7);
    const shrink = E.inOut(ph(t, 4.75, 5.2));
    const s = H.lerp(1.3, 0.95, shrink), x = 540, y = H.lerp(1030, 1110, shrink) + bob(t);
    const tp = P(0, 'pregnant'), tw = P(1, 'weirder'), tth = P(2, 'thousand'), tb = P(2, 'babies');
    const bul = H.lerp(0.25, 0.9, E.out(ph(t, tp - 0.15, tp + 0.35)));
    const glow = t > tw - 0.15 ? 0.6 + 0.4 * Math.sin(t * 9) : 0;
    seahorse(ctx, x + H.lerp(-500, 0, E.out(ph(t, 0, 0.9))), y, s, { t, bulge: bul, glow, a: cl(t / 0.3), flex: t > tw - 0.15 && t < tb ? Math.max(0, Math.sin((t - tw) * 9)) : 0 });
    // PREGNANT tube under the road edge, arrow to the belly
    const pc = loc(x, y, s, 1, ...pouchC(bul));
    const onP = win(t, tp - 0.15, 4.7);
    if (onP > 0) labelArrow(ctx, 'PREGNANT', 540, 1520, OR, onP, [[640, 1470], [pc[0] + 30, pc[1] + 70]], 74);
    // 1,000 babies
    if (t > tth - 0.15 && t < CUT.dance) {
      const fo = 1 - ph(t, 7.05, 7.3);
      ctx.save(); ctx.globalAlpha = fo; popTitle(ctx, '1,000', 540, 640, 210, tth - 0.15, t, 1.6); ctx.restore();
      neonText(ctx, 'BABIES', 540, 740, F(80), YL, flick(t, tb - 0.15) * fo);
    }
    babyCloud(ctx, pc[0], pc[1], tb - 0.1, t, 60, 31, { speed: 1.1, spread: 1.7, fade: 7.0, size: 1.35 });
    // why him, not her
    const th = P(3, 'him'), tr = P(3, 'her');
    if (t > 7.1) {
      deadTube(ctx, 'HIM?', 290, 1520, F(110), CY); deadTube(ctx, 'HER?', 790, 1520, F(110), PK);
      neonText(ctx, 'HIM?', 290, 1520, F(110), CY, flick(t, th - 0.12));
      neonText(ctx, 'HER?', 790, 1520, F(110), PK, flick(t, tr - 0.12));
      ctx.save(); ctx.translate(540, 1395); ctx.rotate(-0.06); neonText(ctx, 'why...', 0, 0, '700 96px "Caveat"', LV, flick(t, P(3, 'why') - 0.12)); ctx.restore();
    }
  }

  function sDance(ctx, t) {
    roadBG(ctx, t, 760, 4);
    const td = P(4, 'dance'), tf = P(5, 'female'), te = P(5, 'eggs'), tpo = P(6, 'pouch'), tbe = P(6, 'belly');
    // twirl: they circle each other until the eggs move, then settle face to face
    const settle = E.inOut(ph(t, 11.2, 11.9));
    const ang = (t - CUT.dance) * 2.4 * (1 - settle * 0.999);
    const ang2 = H.lerp(ang, Math.round(ang / (Math.PI * 2)) * Math.PI * 2, settle);
    const rx = H.lerp(230, 210, settle), cx = 540, cy = 960;
    const fx = cx - Math.cos(ang2) * rx, fy = cy - Math.sin(ang2) * 110 + bob(t, 1.2), mx = cx + Math.cos(ang2) * rx, my = cy + Math.sin(ang2) * 110 + bob(t, 1.2, 0.4);
    const front = Math.sin(ang2) > 0; // which one is nearer the camera
    const sF = 0.8 * (front ? 0.95 : 1.05), sM = 0.86 * (front ? 1.05 : 0.95);
    const drawF = () => seahorse(ctx, fx, fy, sF, { col: PK, female: true, bulge: 0.05, t, dir: 1, a: ph(t, CUT.dance, CUT.dance + 0.3) });
    const drawM = () => seahorse(ctx, mx, my, sM, { t, dir: -1, bulge: 0.3, glow: t > te ? 0.5 + 0.3 * Math.sin(t * 8) : 0, a: ph(t, CUT.dance, CUT.dance + 0.3) });
    if (front) { drawF(); drawM(); } else { drawM(); drawF(); }
    // neon heart sparkles while they dance
    if (t < 11.6) for (let i = 0; i < 6; i++) { const r = H.rng(900 + i), p = ((t - CUT.dance) * 0.6 + r()) % 1; glowDot(ctx, cx + r.range(-260, 260), cy - 300 - p * 380, 16, i % 2 ? PK : CY, Math.sin(p * Math.PI)); }
    if (t > td - 0.15) { ctx.save(); ctx.translate(540, 560); ctx.rotate(-0.05); neonText(ctx, 'mating dance', 0, 0, '700 120px "Caveat"', PK, win(t, td - 0.15, 14.95)); ctx.restore(); }
    // eggs arc from her into his pouch
    const pc = loc(mx, my, sM, -1, ...pouchC(0.3)), fb = loc(fx, fy, sF, 1, 60, 60);
    for (let i = 0; i < 14; i++) {
      const t0 = te - 0.1 + i * 0.12, p = E.inOut(ph(t, t0, t0 + 0.7)); if (t < t0) continue;
      const x = H.lerp(fb[0], pc[0], p), y = H.lerp(fb[1], pc[1], p) - Math.sin(p * Math.PI) * 120;
      egg(ctx, x, y, 13, p >= 1 ? 1 - ph(t, t0 + 0.7, t0 + 0.85) : 1);
    }
    labelArrow(ctx, 'EGGS', 330, 1360, OR, win(t, te - 0.15, 14.95), [[400, 1310], [500, 1050]], 66);
    labelArrow(ctx, 'POUCH', 790, 1360, CY, win(t, tpo - 0.15, 14.95), [[750, 1310], [pc[0] + 10, pc[1] + 60]], 66);
  }

  function sPouch(ctx, t) {
    gridBG(ctx, 'rgba(20,80,120,0.5)');
    const s = 1.75, x = 360, y = 1010 + bob(t, 0.6) * 0.5, b = 0.95;
    const tse = P(7, 'seals'), tve = P(8, 'vessels'), tpl = P(9, 'placenta'), tox = P(10, 'oxygen'), tnu = P(10, 'nutrients'), tsa = P(11, 'salty'), ten = P(11, 'enough');
    seahorse(ctx, x, y, s, { t, bulge: b, glow: 0.35, fill: 'rgba(14,2,34,0.92)' });
    // cut-away window into the pouch
    const [pcx, pcy] = loc(x, y, s, 1, 52 + 20 * b, 42), rx = 86, ry = 150;
    ctx.save(); ctx.beginPath(); ctx.ellipse(pcx, pcy, rx, ry, -0.12, 0, 7);
    const wg = ctx.createRadialGradient(pcx, pcy, 10, pcx, pcy, ry); wg.addColorStop(0, 'rgba(70,10,40,0.95)'); wg.addColorStop(1, 'rgba(20,0,30,0.95)');
    ctx.fillStyle = wg; ctx.fill(); ctx.clip();
    // blood vessels grow from the pouch wall
    const vp = E.out(ph(t, tve - 0.6, tve + 0.9));
    if (vp > 0) {
      const r = H.rng(77);
      neonStroke(ctx, RD, 1.6, () => {
        for (let k = 0; k < 7; k++) {
          let px = pcx + (k % 2 ? rx : -rx) * 0.95, py = pcy + H.lerp(-ry * 0.8, ry * 0.8, k / 6), a = k % 2 ? Math.PI : 0;
          ctx.moveTo(px, py); const n = Math.floor(8 * vp);
          for (let j = 0; j < n; j++) { a += r.range(-0.5, 0.5); px += Math.cos(a) * 16; py += Math.sin(a) * 16; ctx.lineTo(px, py); if (j === 3) { const bx = px, by = py; ctx.moveTo(bx, by); ctx.lineTo(bx + Math.cos(a + 1) * 22, by + Math.sin(a + 1) * 22); ctx.moveTo(px, py); } }
        }
      });
    }
    // eggs grow into curled babies
    const grow = ph(t, tox, ten + 0.3);
    const r2 = H.rng(5);
    for (let i = 0; i < 13; i++) { const ex = pcx + r2.range(-0.6, 0.6) * rx, ey = pcy + r2.range(-0.75, 0.75) * ry; egg(ctx, ex + Math.sin(t * 2 + i) * 2, ey, 14 + 4 * grow, 1, grow, t); }
    // oxygen bubbles and food dots stream into the eggs
    if (t > tox - 0.15) for (let i = 0; i < 10; i++) { const p = ((t - tox) * 0.9 + i / 10) % 1, yy = pcy + ry * 0.9 - p * ry * 1.8, xx = pcx - rx * 0.5 + Math.sin(i * 3 + p * 6) * 20; ctx.save(); ctx.globalAlpha = Math.sin(p * Math.PI); neonStroke(ctx, CY, 1, () => { ctx.moveTo(xx + 7, yy); ctx.arc(xx, yy, 7, 0, 7); }); ctx.restore(); }
    if (t > tnu - 0.15) for (let i = 0; i < 10; i++) { const p = ((t - tnu) * 0.8 + i / 10) % 1, yy = pcy - ry * 0.9 + p * ry * 1.8, xx = pcx + rx * 0.45 + Math.sin(i * 2 + p * 5) * 20; glowDot(ctx, xx, yy, 12, GR, Math.sin(p * Math.PI)); }
    ctx.restore();
    // the window rim, sealing shut on "seals"
    const seal = E.inOut(ph(t, tse - 0.1, tse + 0.5));
    neonStroke(ctx, OR, 2.6, () => ctx.ellipse(pcx, pcy, rx, ry, -0.12, 0, 7));
    if (seal < 1) { ctx.save(); ctx.globalAlpha = 1 - seal; neonStroke(ctx, YL, 3, () => { ctx.moveTo(pcx + 40, pcy - ry - 20); ctx.lineTo(pcx + 40, pcy - ry + 40); }); ctx.restore(); }
    // right-hand label column
    const LX = 820;
    const dim = (t0) => (t > t0 ? 0.45 : 1);
    labelArrow(ctx, 'SEALED', LX, 640, OR, flick(t, tse - 0.12) * dim(tve - 0.2), [[LX - 150, 660], [pcx + 60, pcy - ry + 10]], 56);
    if (t > tve - 0.15) { ctx.save(); ctx.globalAlpha = dim(tox - 0.2); neonText(ctx, 'BLOOD', LX, 790, F(54), RD, flick(t, tve - 0.15)); neonText(ctx, 'VESSELS', LX, 860, F(54), RD, flick(t, tve - 0.05)); ctx.restore(); }
    if (t > tpl - 0.15) { ctx.save(); ctx.translate(540, 1620); ctx.rotate(-0.04); neonText(ctx, 'like a placenta', 0, 0, '700 104px "Caveat"', PK, flick(t, tpl - 0.15)); ctx.restore(); }
    labelArrow(ctx, 'O₂', LX - 70, 1010, CY, flick(t, tox - 0.12), null, 80);
    labelArrow(ctx, 'FOOD', LX + 80, 1010, GR, flick(t, tnu - 0.12), null, 54);
    if (t > tox - 0.12) { ctx.save(); ctx.globalAlpha = flick(t, tox - 0.12); neonPath(ctx, [[LX - 120, 1060], [pcx + rx + 10, pcy + 20]], ph(t, tox, tox + 0.3), CY, 2.4); ctx.restore(); }
    // salt gauge settles to the middle
    if (t > tsa - 0.4) {
      const on = flick(t, tsa - 0.4), v = 0.5 + Math.sin((t - tsa) * 9) * 0.35 * Math.exp(-(t - tsa) * 2.2) + (t < tsa ? 0.3 : 0);
      gauge(ctx, LX, 1290, 120, cl(v, 0.05, 0.95), on, t);
      neonText(ctx, 'SALT', LX, 1340, F(48), YL, on);
      neonText(ctx, 'JUST RIGHT', LX, 1410, F(40), GR, flick(t, ten - 0.1));
    }
  }

  function sLabor(ctx, t) {
    roadBG(ctx, t, 0, 9);
    const ttw = P(12, 'two'), twk = P(12, 'weeks'), tla = P(13, 'labor'), tpu = P(14, 'pumping'), tsq = P(14, 'squeezing'), tsh = P(14, 'shoot');
    const pumping = t > tpu - 0.1 && t < tsh + 0.2;
    const flex = pumping ? Math.max(0, Math.sin((t - tpu) * 11)) : 0;
    const s = 1.2, x = 540, y = 1030 + bob(t) + flex * 10;
    const bul = t < tsh ? 1 : H.lerp(1, 0.3, E.out(ph(t, tsh, tsh + 0.6)));
    seahorse(ctx, x, y, s, { t, bulge: bul, glow: 0.4 + flex * 0.6, flex, rot: -flex * 0.05 });
    // time passing: DAYS odometer
    const days = 28 * E.inOut(ph(t, CUT.labor + 0.2, twk + 0.3));
    const onO = t < tla - 0.3 ? cl((t - CUT.labor) / 0.3) : 1 - ph(t, tla - 0.3, tla);
    if (onO > 0) {
      ctx.save(); ctx.globalAlpha = onO; panel(ctx, 270, 1440, 540, 150);
      neonText(ctx, String(Math.floor(days)).padStart(2, '0'), 440, 1515, F(100), CY, 1);
      neonText(ctx, 'DAYS', 660, 1515, F(56), YL, 1); ctx.restore();
    }
    if (t > ttw - 0.15) { ctx.save(); ctx.globalAlpha = 1 - ph(t, tla - 0.35, tla - 0.1); popTitle(ctx, '2-4 WEEKS', 540, 520, 104, ttw - 0.15, t, 1.4); ctx.restore(); }
    if (t > tla - 0.15) { neonText(ctx, 'LABOR!', 540, 500, F(130), PK, flick(t, tla - 0.15) * (1 - ph(t, tsh - 0.3, tsh))); }
    if (pumping && t < tsh) { neonText(ctx, 'PUMP', 250, 1420, F(60), OR, flick(t, tpu - 0.1)); neonText(ctx, 'SQUEEZE', 800, 1420, F(56), OR, flick(t, tsq - 0.1)); }
    const pc = loc(x, y, s, 1, ...pouchC(1));
    babyCloud(ctx, pc[0] + 20, pc[1] - 20, tsh - 0.08, t, 140, 77, { ang: -Math.PI / 3, spread: 1.5, speed: 1.2, stagger: 0.7, size: 1.3 });
    if (t > tsh - 0.1) {
      const n = Math.round(1000 * E.out(ph(t, tsh, tsh + 0.9)));
      panel(ctx, 220, 1440, 640, 150);
      neonText(ctx, n.toLocaleString('en-US'), 430, 1515, F(96), YL, 1);
      neonText(ctx, 'BABIES', 735, 1515, F(50), PK, 1);
      if (n >= 1000) glint(ctx, 560, 1470, 50 * (0.75 + 0.25 * Math.sin(t * 4)), 0.85);
    }
  }

  function sClever(ctx, t) {
    gridBG(ctx, 'rgba(110,20,120,0.5)');
    const tcl = P(15, 'clever'), tca = P(16, 'carrying'), tal = P(17, 'already'), tnx = P(17, 'next'), teg = P(17, 'eggs');
    const slide = E.out(ph(t, P(16, 'while') - 0.3, P(16, 'while') + 0.2));
    if (t < P(16, 'while') + 0.1) { ctx.save(); ctx.translate(540, 940); ctx.rotate(-0.05); neonText(ctx, 'the clever bit', 0, 0, '700 130px "Caveat"', YL, flick(t, tcl - 0.4) * (1 - slide)); ctx.restore(); }
    if (slide <= 0) return;
    ctx.save(); ctx.globalAlpha = slide;
    // HE panel
    ctx.save(); ctx.translate(-(1 - slide) * 1100, 0);
    panel(ctx, 60, 330, 960, 580);
    neonText(ctx, 'HE', 160, 400, F(64), CY, 1);
    seahorse(ctx, 330, 650 + bob(t, 0.8) * 0.5, 0.72, { t, bulge: 0.95, glow: 0.6 + 0.3 * Math.sin(t * 6) });
    if (t > tca - 0.15) { neonText(ctx, 'CARRYING', 760, 600, F(58), OR, flick(t, tca - 0.15)); for (let i = 0; i < 5; i++) egg(ctx, 640 + i * 60, 700, 16, ph(t, tca + i * 0.08, tca + i * 0.08 + 0.15), 0.8, t); }
    ctx.restore();
    // SHE panel
    ctx.save(); ctx.translate((1 - slide) * 1100, 0);
    panel(ctx, 60, 960, 960, 600);
    neonText(ctx, 'SHE', 175, 1030, F(64), PK, 1);
    seahorse(ctx, 330, 1290 + bob(t, 0.8, 1) * 0.5, 0.72, { t, col: PK, female: true, bulge: 0.05, dir: 1 });
    if (t > tnx - 0.15) neonText(ctx, 'NEXT BATCH', 760, 1180, F(54), PK, flick(t, tnx - 0.15));
    // egg meter fills
    for (let i = 0; i < 12; i++) { const cx = 610 + (i % 4) * 100, cy = 1290 + Math.floor(i / 4) * 90; neonStroke(ctx, 'rgba(255,180,90,0.5)', 1, () => { ctx.moveTo(cx + 22, cy); ctx.arc(cx, cy, 22, 0, 7); }); const ti = tal + i * ((teg - tal + 0.3) / 12); egg(ctx, cx, cy, 20 * E.back(ph(t, ti, ti + 0.2)), ph(t, ti, ti + 0.1)); }
    ctx.restore();
    ctx.restore();
  }

  function sCycle(ctx, t) {
    roadBG(ctx, t, 420, 4);
    const tmo = P(18, 'morning'), tbi = P(18, 'birth'), tpr = P(19, 'pregnant'), tev = P(19, 'evening'), tmore = P(20, 'more'), tfa = P(20, 'faster');
    const arcOn = 1 - ph(t, tmore - 0.4, tmore - 0.1);
    const A = (u) => [H.lerp(170, 910, u), 1000 - Math.sin(u * Math.PI) * 430];
    const s = 0.8, x = 540, y = 1200 + bob(t);
    const u = E.inOut(ph(t, tmo - 0.1, tev));
    const preg = t > tev - 0.15;
    seahorse(ctx, x, y, s, { t, bulge: preg ? H.lerp(0.3, 0.8, ph(t, tev - 0.15, tev + 0.4)) : t > tbi ? 0.3 : 0.8, glow: preg ? 0.7 : 0.2 });
    if (arcOn > 0) {
      ctx.save(); ctx.globalAlpha = arcOn;
      ctx.setLineDash([10, 16]); neonStroke(ctx, LV, 1.4, () => { ctx.moveTo(...A(0)); for (let i = 1; i <= 40; i++) ctx.lineTo(...A(i / 40)); }); ctx.setLineDash([]);
      neonPath(ctx, Array.from({ length: 41 }, (_, i) => A(i / 40 * u)), u > 0.02 ? 1 : 0, YL, 3, false);
      const [px, py] = A(u);
      if (u < 0.55) sunIcon(ctx, px, py, 44, flick(t, tmo - 0.15), t); else moonIcon(ctx, px, py, 46, 1);
      neonText(ctx, 'MORNING', 220, 1090, F(46), YL, flick(t, tmo - 0.15));
      neonText(ctx, 'BIRTH', 220, 1160, F(56), PK, flick(t, tbi - 0.12));
      neonText(ctx, 'EVENING', 860, 1090, F(46), CY, flick(t, tev - 0.12));
      neonText(ctx, 'PREGNANT', 860, 1160, F(46), OR, flick(t, tpr - 0.12));
      neonText(ctx, 'AGAIN', 860, 1220, F(46), OR, flick(t, P(19, 'again') - 0.12));
      ctx.restore();
    }
    const pc = loc(x, y, s, 1, ...pouchC(0.8));
    babyCloud(ctx, pc[0], pc[1], tbi - 0.1, t, 40, 222, { speed: 0.7, fade: tpr, size: 0.9 });
    // eggs fly back in for the evening
    if (t > tpr - 0.2) for (let i = 0; i < 8; i++) { const t0 = tpr - 0.2 + i * 0.1, p = E.inOut(ph(t, t0, t0 + 0.5)); if (p >= 1 || t < t0) continue; egg(ctx, H.lerp(980, pc[0], p), H.lerp(1350, pc[1], p) - Math.sin(p * Math.PI) * 90, 11); }
    if (t > tmore - 0.15) {
      popTitle(ctx, 'MORE BABIES', 540, 620, 92, tmore - 0.15, t, 1.4);
      neonText(ctx, 'WAY FASTER', 540, 760, F(80), YL, flick(t, tfa - 0.15));
      if (t > tfa - 0.15) for (let k = 0; k < 3; k++) { const p = ((t - tfa) * 2.2 + k / 3) % 1; ctx.save(); ctx.globalAlpha = Math.sin(p * Math.PI); neonStroke(ctx, PK, 4, () => { const cx = 300 + p * 480; ctx.moveTo(cx, 850); ctx.lineTo(cx + 40, 880); ctx.lineTo(cx, 910); }); ctx.restore(); }
    }
  }

  function sEnd(ctx, t) {
    roadBG(ctx, t, 0, 9);
    const two = P(21, 'would'), ttr = P(21, 'trade'), tdad = P(21, 'dad');
    const s = 1.15, x = 540, y = 1060 + bob(t);
    seahorse(ctx, x + H.lerp(500, 0, E.out(ph(t, CUT.end, CUT.end + 0.7))), y, s, { t, bulge: 0.9, glow: 0.6 + 0.3 * Math.sin(t * 6) });
    if (t > two - 0.15) neonText(ctx, 'WOULD YOU', 540, 450, F(70), CY, flick(t, two - 0.15));
    if (t > ttr - 0.2) { const p = popTitle(ctx, 'TRADE JOBS?', 540, 600, 98, ttr - 0.2, t, 1.5); if (p >= 1) glint(ctx, 880, 540, 52 * (0.75 + 0.25 * Math.sin(t * 4)), 0.85); }
    if (t > tdad - 0.2) { ctx.save(); ctx.translate(540, 1520); ctx.rotate(-0.05); neonText(ctx, 'with a seahorse dad', 0, 0, '700 96px "Caveat"', PK, flick(t, tdad - 0.3)); ctx.restore(); }
  }

  // ---------- header: the hook title slams in big, then glides into the top and stays ----------
  function header(ctx, t) {
    if (t < 0.12) return;
    const pS = ph(t, 0.12, 0.5), pM = E.inOut(ph(t, 1.85, 2.3));
    const fade = t > CUT.end - 0.2 ? 1 - ph(t, CUT.end - 0.2, CUT.end + 0.2) : 1;
    if (fade <= 0) return;
    const sc = (1 + 1.5 * Math.pow(1 - pS, 3)) * H.lerp(1, 0.46, pM);
    const cy = H.lerp(470, 225, pM);
    ctx.save(); ctx.globalAlpha = cl(pS * 4) * fade; ctx.translate(540, cy); ctx.scale(sc, sc); ctx.translate(-540, -470);
    if (pM < 0.5) { chromeTitle(ctx, 'SEAHORSE', 540, 430, 128); chromeTitle(ctx, 'DADS', 540, 590, 150); }
    ctx.restore();
    if (pM >= 0.5) { ctx.save(); ctx.globalAlpha = fade * ph(pM, 0.5, 0.8); chromeTitle(ctx, 'SEAHORSE DADS', 540, 250, 66); ctx.restore(); }
    if (pS >= 1 && t < 0.95) { const fl = Math.exp(-(t - 0.5) * 8); ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(255,200,255,${0.35 * fl})`; ctx.fillRect(0, 0, W, HH); ctx.restore(); }
    if (t > 0.6 && t < 1.8) glint(ctx, 180 + (t - 0.6) / 1.2 * 720, 400, 56, 0.9);
  }

  const ORDER = [['hook', 0, sHook], ['dance', CUT.dance, sDance], ['pouch', CUT.pouch, sPouch], ['labor', CUT.labor, sLabor], ['clever', CUT.clever, sClever], ['cycle', CUT.cycle, sCycle], ['end', CUT.end, sEnd]];
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1]) i++;
    ctx.save(); ORDER[i][2](ctx, t); ctx.restore();
    ctx.globalAlpha = 1;
    header(ctx, t);
    for (const [, tc] of ORDER) { if (!tc) continue; const d = Math.abs(t - tc); if (d < 0.22) glitch(ctx, 1 - d / 0.22, Math.floor(t * 30) + 7); }
    bloom(ctx, 0.3, 4);
    ctx.fillStyle = 'rgba(0,0,0,0.12)';
    for (let y = Math.floor(t * 20) % 4; y < Hd; y += 4) ctx.fillRect(0, y, Wd, 1.5);
    H.grain(ctx, Wd, Hd, 0.04, 12 + Math.floor(t * 12), true);
    H.vignette(ctx, Wd, Hd, 0.5, '6,0,20');
  }

  // ---------- SOUND: 80s night swim. Gated snares + saw stabs on the slams, neon strikes, analog zaps, bubbly blips ----------
  function scoreSound(k) {
    const END = DURATION;
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
    const slam = (t, notes, g = 1, pan = 0) => { k.noise(t - 0.3, { dur: 0.3, color: 'pink', filter: 'bandpass', f: [[0, 400], [0.28, 3000]], q: 1, gain: 0.16 * g, a: 0.28 }); snare(t + 0.1, g, pan); k.play('thud', t + 0.1, { f: 90, gain: 0.6 * g }); stab(t + 0.1, notes, g, 0.6, pan); };
    const glitchS = (t) => { k.play('glitch', t - 0.15, { gain: 0.9 }); k.noise(t - 0.2, { dur: 0.4, filter: 'highpass', f: 2500, gain: 0.12, a: 0.2 }); k.play('thud', t, { f: 70, gain: 0.4 }); };
    const bubbles = (t0, t1, g = 1, seed = 1) => { const r = H.rng(seed); for (let t = t0; t < t1; t += r.range(0.07, 0.18)) { const f = r.range(500, 1300); k.tone(t, { f: [[0, f], [0.05, f * 1.8]], type: 'sine', dur: 0.06, gain: 0.07 * g, a: 0.002, pan: r.range(-0.6, 0.6), minor: true }); } };
    const counter = (t0, t1, fn, step, play) => { let last = -1, lastV = fn(t0); for (let t = t0; t <= t1 + 1e-6; t += 1 / 120) { const v = fn(t); if (Math.abs(v - lastV) >= step && t - last >= 1 / 12) { play(t, v); last = t; lastV = v; } } };

    k.music('pulse', 0.5, CUT.dance, { bpm: 100, gain: 0.4, chords: [['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4']] });
    k.music('pad', CUT.dance, CUT.labor, { bpm: 100, gain: 0.4, chords: [['F3', 'A3', 'C4', 'E4'], ['C4', 'E4', 'G4', 'B4']] });
    k.music('pulse', CUT.labor, CUT.cycle, { bpm: 100, gain: 0.38, chords: [['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['C4', 'E4', 'G4', 'B4'], ['G3', 'B3', 'D4', 'F4']] });
    k.music('pad', CUT.cycle, END, { bpm: 100, gain: 0.4, chords: [['C4', 'E4', 'G4', 'B4'], ['F3', 'A3', 'C4', 'E4']] });
    k.bed('hiss', 0, END, { gain: 0.8 });

    // hook
    slam(0.4, ['A3', 'E4', 'A4', 'C5'], 1.1);
    const tp = P(0, 'pregnant'); strike(tp - 0.15, 0.9, 0.2); k.tone(tp, { f: [[0, 'C4'], [0.35, 'G4']], type: 'triangle', dur: 0.4, gain: 0.08, verb: 0.3 });
    const tw = P(1, 'weirder'); k.play('buzz', tw, { f: 98, dur: 0.6, gain: 0.35 });
    const tth = P(2, 'thousand'); k.play('whoosh', 4.75, { dur: 0.4, gain: 0.5 }); slam(tth - 0.25, ['C4', 'G4', 'C5'], 1.0, 0.1);
    const tb = P(2, 'babies'); strike(tb - 0.15, 0.7, 0, true); k.play('sparkle', tb, { n: 8, gain: 0.9 }); bubbles(tb, tb + 1.2, 1, 3);
    strike(P(3, 'why') - 0.12, 0.5, 0, true); strike(P(3, 'him') - 0.12, 0.8, -0.5); strike(P(3, 'her') - 0.12, 0.8, 0.5);
    // dance
    glitchS(CUT.dance); k.play('riser', CUT.dance + 0.1, { dur: 1.0, gain: 0.4 });
    for (let i = 0; i < 10; i++) k.tone(CUT.dance + 0.3 + i * 0.22, { f: ['A4', 'C5', 'E5', 'G5', 'E5'][i % 5], type: 'triangle', dur: 0.2, gain: 0.06, verb: 0.35, pan: i % 2 ? 0.4 : -0.4, minor: true });
    strike(P(4, 'dance') - 0.15, 0.8, 0);
    const te = P(5, 'eggs'); for (let i = 0; i < 14; i++) k.play('pop', te - 0.1 + i * 0.12 + 0.7, { f: 700 + (i % 4) * 120, gain: 0.35, minor: true });
    strike(te - 0.15, 0.6, -0.5, true); strike(P(6, 'pouch') - 0.15, 0.7, 0.5); k.play('ding', P(6, 'pouch'), { f: 'E6', gain: 0.3 });
    // pouch
    glitchS(CUT.pouch); k.play('boot', CUT.pouch, { gain: 0.4 });
    const tse = P(7, 'seals'); k.play('tape', tse, { dur: 0.5, gain: 0.6 }); k.play('click', tse + 0.45, { gain: 1.0 }); strike(tse - 0.12, 0.6, 0.4, true);
    const tve = P(8, 'vessels'); k.tone(tve - 0.6, { f: [[0, 'A2'], [1.4, 'A3']], type: 'sawtooth', dur: 1.5, gain: 0.05, a: 0.3, hold: 1, filter: 'lowpass', f2: [[0, 300], [1.4, 1500]], minor: true }); strike(tve - 0.15, 0.7, 0.4);
    const tpl = P(9, 'placenta'); strike(tpl - 0.15, 0.8, 0); stab(tpl, ['F3', 'C4', 'A4'], 0.8, 0.6);
    const tox = P(10, 'oxygen'); bubbles(tox, P(11, 'enough'), 0.8, 9); strike(tox - 0.12, 0.6, 0.4, true); strike(P(10, 'nutrients') - 0.12, 0.6, 0.5, true);
    const tsa = P(11, 'salty'); zap(tsa - 0.4, 0.5, 300, 900, 0.8, 0.4); counter(tsa - 0.3, tsa + 1.0, (t) => Math.round(10 * Math.sin((t - tsa) * 9) * Math.exp(-(t - tsa) * 2.2)), 1, (t) => k.play('tick', t, { gain: 0.5, pan: 0.4, minor: true }));
    k.play('success', P(11, 'enough'), { f: 'C6', gain: 0.35 });
    // labor
    glitchS(CUT.labor);
    const twk = P(12, 'weeks'); counter(CUT.labor + 0.2, twk + 0.3, (t) => Math.floor(28 * E.inOut(ph(t, CUT.labor + 0.2, twk + 0.3))), 1, (t) => k.noise(t, { dur: 0.012, filter: 'bandpass', f: 1800, q: 3, gain: 0.17, a: 0.0005, minor: true }));
    slam(P(12, 'two') - 0.25, ['E4', 'A4', 'C5'], 0.9, 0.1);
    const tla = P(13, 'labor'); strike(tla - 0.15, 1.0, 0); k.play('buzz', tla, { f: 110, dur: 0.5, gain: 0.45 });
    const tpu = P(14, 'pumping'), tsh = P(14, 'shoot');
    for (let t = tpu; t < tsh; t += (Math.PI * 2) / 11) { k.play('thud', t + 0.07, { f: 70, gain: 0.45 }); k.noise(t + 0.07, { dur: 0.2, color: 'brown', filter: 'lowpass', f: 500, gain: 0.15, minor: true }); }
    k.play('riser', tsh - 0.8, { dur: 0.8, gain: 0.7 });
    snare(tsh, 1.3); k.play('impact', tsh, { f: 70, gain: 1.0 }); stab(tsh, ['F3', 'C4', 'E4', 'A4', 'C5'], 1.3, 1.1); k.play('sparkle', tsh + 0.05, { n: 10, gain: 1 }); bubbles(tsh, tsh + 1.3, 1.2, 21);
    counter(tsh, tsh + 0.9, (t) => Math.round(1000 * E.out(ph(t, tsh, tsh + 0.9))), 40, (t) => k.noise(t, { dur: 0.012, filter: 'bandpass', f: 2200, q: 3, gain: 0.15, a: 0.0005, minor: true }));
    // clever
    glitchS(CUT.clever); strike(P(15, 'clever') - 0.4, 0.8, 0);
    const twh = P(16, 'while'); k.play('whoosh', twh - 0.3, { dur: 0.5, gain: 0.7 }); strike(P(16, 'carrying') - 0.15, 0.7, 0.3, true);
    const tal = P(17, 'already'), teg = P(17, 'eggs'); for (let i = 0; i < 12; i++) k.play('pop', tal + i * ((teg - tal + 0.3) / 12), { f: 600 + i * 40, gain: 0.35, minor: true });
    strike(P(17, 'next') - 0.15, 0.8, 0.4);
    // cycle
    glitchS(CUT.cycle); k.noise(CUT.cycle, { dur: 0.7, color: 'pink', filter: 'bandpass', f: [[0, 300], [0.7, 2400]], q: 1.4, gain: 0.14, a: 0.5 });
    const tmo = P(18, 'morning'), tev = P(19, 'evening');
    strike(tmo - 0.15, 0.7, -0.5); k.tone(tmo - 0.1, { f: [[0, 'A3'], [tev - tmo, 'A4']], type: 'sawtooth', dur: tev - tmo + 0.1, gain: 0.04, a: 0.1, hold: tev - tmo - 0.3, filter: 'lowpass', f2: 1300, minor: true });
    k.play('sparkle', P(18, 'birth'), { n: 6, gain: 0.7 }); strike(P(18, 'birth') - 0.12, 0.6, -0.5, true);
    strike(tev - 0.12, 0.8, 0.5); k.play('ding', tev, { f: 'G6', gain: 0.3, pan: 0.5 }); strike(P(19, 'pregnant') - 0.12, 0.6, 0.5, true);
    const tmore = P(20, 'more'); slam(tmore - 0.25, ['C4', 'E4', 'G4', 'C5'], 1.0); zap(P(20, 'faster') - 0.15, 0.4, 300, 1400, 1.0, 0, false);
    // payoff
    glitchS(CUT.end); k.play('whoosh', CUT.end, { dur: 0.6, gain: 0.6 });
    strike(P(21, 'would') - 0.15, 0.7, 0, true);
    slam(P(21, 'trade') - 0.3, ['F3', 'C4', 'A4', 'C5'], 1.2);
    strike(P(21, 'dad') - 0.3, 0.7, 0.2, true);
    k.tone(P(21, 'dad') + 0.4, { f: 'C5', type: 'triangle', dur: 1.0, gain: 0.12, verb: 0.4 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
