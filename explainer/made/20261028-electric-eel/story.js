// ================= Synthwave Outrun, 9:16 1080x1920: "How does an electric eel make 600 volts?" =================
// Short (~55 s). Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A neon night swim: a wireframe electric eel cruises the outrun grid. CRT glitch cuts move between a neon wall
// outlet schematic, a cut-away of the eel's body packed with electrocytes, a zoom into one cell, the cells stacking
// like flashlight batteries, the hunt with a rolling HUD counter and the ZAP, the "not an eel" twist, and the payoff.
(function () {
  const W = 1080, HH = 1920;
  // ---------- BEATS: one entry per voiceover phrase (phrases.json, Kokoro am_michael) ----------
  const PH = [{"s":0.25,"e":3.41,"text":"An electric eel can zap you with 600 volts.","words":[["an",0.25],["electric",0.44],["eel",1.18],["can",1.46],["zap",1.74],["you",2.02],["with",2.29],["600",2.67],["volts",2.94]]},{"s":3.96,"e":4.7,"text":"But how?","words":[["but",3.96],["how",4.33]]},{"s":5.25,"e":7.16,"text":"That's five times your wall outlet,","words":[["thats",5.25],["five",5.59],["times",5.87],["your",6.21],["wall",6.48],["outlet",6.75]]},{"s":7.46,"e":9.24,"text":"and there's no battery inside.","words":[["and",7.46],["theres",7.68],["no",8.13],["battery",8.27],["inside",8.79]]},{"s":9.79,"e":11.31,"text":"Its body is the battery.","words":[["its",9.79],["body",10.03],["is",10.35],["the",10.51],["battery",10.75]]},{"s":11.86,"e":13.81,"text":"Most of that long body is packed","words":[["most",11.86],["of",12.16],["that",12.31],["long",12.61],["body",12.91],["is",13.21],["packed",13.36]]},{"s":14.11,"e":16.51,"text":"with special cells called electrocytes.","words":[["with",14.11],["special",14.39],["cells",14.88],["called",15.24],["electrocytes",15.66]]},{"s":17.06,"e":18.87,"text":"Each one makes a tiny charge,","words":[["each",17.06],["one",17.37],["makes",17.61],["a",18.0],["tiny",18.08],["charge",18.39]]},{"s":19.17,"e":20.74,"text":"less than a fifth of a volt.","words":[["less",19.17],["than",19.47],["a",19.77],["fifth",19.84],["of",20.22],["a",20.37],["volt",20.44]]},{"s":21.29,"e":22.52,"text":"Alone, that's nothing.","words":[["alone",21.29],["thats",21.65],["nothing",22.01]]},{"s":23.07,"e":24.52,"text":"But they're stacked in rows,","words":[["but",23.07],["theyre",23.27],["stacked",23.66],["in",24.13],["rows",24.26]]},{"s":24.82,"e":26.62,"text":"thousands of them, head to tail,","words":[["thousands",24.82],["of",25.47],["them",25.61],["head",25.9],["to",26.19],["tail",26.33]]},{"s":26.92,"e":28.55,"text":"like batteries in a flashlight.","words":[["like",26.92],["batteries",27.17],["in",27.74],["a",27.86],["flashlight",27.92]]},{"s":29.1,"e":30.69,"text":"When the eel spots a fish,","words":[["when",29.1],["the",29.42],["eel",29.66],["spots",29.9],["a",30.29],["fish",30.37]]},{"s":30.99,"e":32.8,"text":"its brain fires one signal,","words":[["its",30.99],["brain",31.24],["fires",31.65],["one",32.06],["signal",32.31]]},{"s":33.1,"e":34.91,"text":"and every cell flips on at once.","words":[["and",33.1],["every",33.32],["cell",33.68],["flips",33.97],["on",34.33],["at",34.47],["once",34.62]]},{"s":35.46,"e":37.63,"text":"About six thousand tiny charges","words":[["about",35.46],["six",35.86],["thousand",36.1],["tiny",36.75],["charges",37.07]]},{"s":37.93,"e":39.54,"text":"add up to one giant shock.","words":[["add",37.93],["up",38.17],["to",38.33],["one",38.49],["giant",38.73],["shock",39.14]]},{"s":40.09,"e":40.63,"text":"Zap!","words":[["zap",40.09]]},{"s":41.18,"e":42.88,"text":"The fish freezes on the spot.","words":[["the",41.18],["fish",41.4],["freezes",41.69],["on",42.21],["the",42.36],["spot",42.58]]},{"s":43.43,"e":44.46,"text":"Here's the twist:","words":[["heres",43.43],["the",43.82],["twist",44.06]]},{"s":44.76,"e":46.85,"text":"an electric eel isn't even an eel.","words":[["an",44.76],["electric",44.92],["eel",45.56],["isnt",45.8],["even",46.13],["an",46.45],["eel",46.61]]},{"s":47.4,"e":48.45,"text":"It's a knifefish,","words":[["its",47.4],["a",47.64],["knifefish",47.72]]},{"s":48.75,"e":50.03,"text":"closer to a catfish.","words":[["closer",48.75],["to",49.23],["a",49.39],["catfish",49.47]]},{"s":50.58,"e":52.33,"text":"So if your body were a battery,","words":[["so",50.58],["if",50.73],["your",50.87],["body",51.17],["were",51.46],["a",51.75],["battery",51.82]]},{"s":52.63,"e":53.98,"text":"what would you power first?","words":[["what",52.63],["would",52.88],["you",53.18],["power",53.37],["first",53.68]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); return x ? x[1] : PH[i].s; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const BEATS = [
    { s: PH[0].s, e: PH[1].e, text: 'hook: an electric eel can zap 600 volts, but how', screen: 'outrun road, neon eel swims, chrome ELECTRIC EEL, 600 VOLTS, but how?' },
    { s: PH[2].s, e: PH[4].e, text: '5x a wall outlet, no battery: its body is the battery', screen: 'neon outlet 120 V x5 = 600 V, battery crossed, eel with + head and - tail, BODY = BATTERY' },
    { s: PH[5].s, e: PH[6].e, text: 'body packed with electrocytes', screen: 'cut-away eel filling with cells, ELECTROCYTES' },
    { s: PH[7].s, e: PH[9].e, text: 'each makes a tiny charge, 0.15 V, nothing alone', screen: 'zoom into one cell, + / - sides, 0.15 V, nothing' },
    { s: PH[10].s, e: PH[12].e, text: 'stacked in rows head to tail like flashlight batteries', screen: 'cells snap into rows, HEAD -> TAIL, THOUSANDS, flashlight lights up' },
    { s: PH[13].s, e: PH[17].e, text: 'spots a fish, brain fires one signal, all cells at once, 6,000 add up to one shock', screen: 'eel + fish on the road, BRAIN, signal runs down the body, cells flash, HUD 6,000 CELLS / 600 V, SHOCK' },
    { s: PH[18].s, e: PH[19].e, text: 'zap, the fish freezes', screen: 'lightning to the fish, chrome ZAP!, fish stops, STUNNED' },
    { s: PH[20].s, e: PH[23].e, text: 'twist: not an eel, a knifefish, closer to a catfish', screen: 'eel crossed out, NOT AN EEL -> KNIFEFISH, neon link to a catfish' },
    { s: PH[24].s, e: PH[25].e, text: 'payoff question', screen: 'eel battery glowing, YOUR BODY = BATTERY, WHAT WOULD YOU POWER?' },
  ];
  // scene cuts (CRT glitch) sit in the pauses between phrases
  const CUT = { outlet: 4.95, cells: 11.58, stack: 22.8, fire: 28.83, twist: 43.15, end: 50.3 };
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

  // ---------- new props for this story ----------
  // electric eel geometry: tail at x0 (left), head at x0+L (right). Long knifefish body with the anal fin underneath.
  function eelGeo(x0, y0, L, th, t, amp = 26, still = 0) {
    const N = 64, pts = [];
    const tt = H.lerp(t, 0, still);
    for (let i = 0; i <= N; i++) {
      const u = i / N, x = x0 + u * L;
      const y = y0 + amp * (1 - still) * Math.sin(u * 9 - tt * 5) * (1 - u * 0.75);
      let w = th / 2 * Math.min(1, 0.12 + u * 1.5);
      if (u > 0.88) w *= Math.sqrt(Math.max(0, 1 - Math.pow((u - 0.88) / 0.12, 2))) * 0.85 + 0.15 * (1 - (u - 0.88) / 0.12);
      pts.push([x, y, w]);
    }
    const nrm = pts.map((p, i) => { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(N, i + 1)]; const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy) || 1; return [-dy / l, dx / l]; });
    const at = (u, side = 0) => { const f = cl(u) * N, i = Math.min(N - 1, Math.floor(f)), k = f - i; const p = pts[i], q = pts[i + 1], n = nrm[i]; const x = H.lerp(p[0], q[0], k), y = H.lerp(p[1], q[1], k), w = H.lerp(p[2], q[2], k); return [x + n[0] * w * side, y + n[1] * w * side, w, n]; };
    return { pts, nrm, at, N };
  }
  function eelOutline(c, g) {
    const { pts, nrm } = g;
    c.moveTo(pts[0][0] + nrm[0][0] * pts[0][2], pts[0][1] + nrm[0][1] * pts[0][2]);
    for (let i = 1; i < pts.length; i++) c.lineTo(pts[i][0] + nrm[i][0] * pts[i][2], pts[i][1] + nrm[i][1] * pts[i][2]);
    for (let i = pts.length - 1; i >= 0; i--) c.lineTo(pts[i][0] - nrm[i][0] * pts[i][2], pts[i][1] - nrm[i][1] * pts[i][2]);
    c.closePath();
  }
  function drawEel(c, g, t, o = {}) {
    const col = o.col || '#4ff3ff', a = o.a == null ? 1 : o.a, lw = o.lw || 3;
    if (a <= 0) return;
    c.save(); c.globalAlpha *= a;
    c.fillStyle = o.fill || 'rgba(12,3,32,0.9)'; c.beginPath(); eelOutline(c, g); c.fill();
    if (o.inside) o.inside();
    neonStroke(c, col, lw, () => {
      eelOutline(c, g);
      // long anal fin running under the belly (how knifefish swim)
      for (let i = 6; i <= 46; i++) { const u = i / 64, [x, y, w, n] = g.at(u, -1); const fw = 16 + 10 * Math.sin(u * 40 - t * 14); const fx = x - n[0] * fw, fy = y - n[1] * fw; if (i === 6) c.moveTo(fx, fy); else c.lineTo(fx, fy); }
      // mouth
      const [mx, my] = g.at(0.985, -0.15), [m2x, m2y] = g.at(0.93, -0.25); c.moveTo(mx, my); c.lineTo(m2x, m2y);
    });
    const [ex, ey, ew] = g.at(0.94, 0.35);
    glowDot(c, ex, ey, Math.max(10, ew * 0.35), '#ffe066', 1);
    c.restore();
  }
  // electrocyte cells inside the eel body: cols x rows, lit 0..1 each via fn(i, j) -> [fill 0..1, glow 0..1]
  function eelCells(c, g, cols, rows, fn, col = '#ff4fd8') {
    for (let i = 0; i < cols; i++) {
      const u = H.lerp(0.12, 0.84, (i + 0.5) / cols);
      for (let j = 0; j < rows; j++) {
        const s = H.lerp(-0.75, 0.75, (j + 0.5) / rows);
        const [x, y, w] = g.at(u, s); const [f, gl] = fn(i, j); if (f <= 0) continue;
        const cw = (g.N ? 0.72 / cols * (g.pts[g.N][0] - g.pts[0][0]) : 20) * 0.62, ch = w * 1.5 / rows * 0.78;
        c.save(); c.globalAlpha *= f;
        c.fillStyle = H.rgba(H.mix('#2a0838', col, 0.25 + 0.6 * gl), 0.9); c.beginPath(); c.roundRect(x - cw / 2, y - ch / 2, cw, ch, Math.min(6, ch / 3)); c.fill();
        if (gl > 0.05) { c.globalAlpha *= gl; c.globalCompositeOperation = 'lighter'; c.strokeStyle = '#ffd6f4'; c.lineWidth = 1.6; c.stroke(); }
        c.restore();
      }
    }
  }
  function neonFish(c, x, y, s, t, col = '#5cffb0', still = 0, a = 1) {
    if (a <= 0) return;
    const wig = Math.sin(t * 12) * 0.25 * (1 - still);
    c.save(); c.globalAlpha *= a;
    c.fillStyle = 'rgba(10,2,28,0.85)'; c.beginPath(); c.ellipse(x, y, 90 * s, 46 * s, 0, 0, 7); c.fill();
    neonStroke(c, col, 3 * s, () => {
      c.moveTo(x + 90 * s, y); c.ellipse(x, y, 90 * s, 46 * s, 0, 0, 7);
      const tx = x + 88 * s; c.moveTo(tx, y); c.lineTo(tx + 60 * s, y - 42 * s + wig * 40 * s); c.lineTo(tx + 60 * s, y + 42 * s + wig * 40 * s); c.closePath();
      c.moveTo(x - 10 * s, y - 44 * s); c.quadraticCurveTo(x + 20 * s, y - 80 * s, x + 50 * s, y - 38 * s);
    });
    glowDot(c, x - 52 * s, y - 10 * s, 12 * s, '#ffe066', 1);
    c.restore();
  }
  function battery(c, x, y, w, h, col, a = 1, lit = 0) {
    if (a <= 0) return;
    c.save(); c.globalAlpha *= a;
    c.fillStyle = lit > 0 ? H.rgba(H.mix('#1a0830', col, 0.5 * lit), 0.9) : 'rgba(12,3,32,0.9)'; c.beginPath(); c.roundRect(x - w / 2, y - h / 2, w, h, h * 0.18); c.fill();
    neonStroke(c, col, 3, () => { c.roundRect(x - w / 2, y - h / 2, w, h, h * 0.18); c.roundRect(x + w / 2, y - h * 0.18, w * 0.07, h * 0.36, 4); });
    c.restore();
    neonText(c, '+', x + w * 0.3, y, F(Math.round(h * 0.5)), '#ffe066', a);
    neonText(c, '−', x - w * 0.3, y, F(Math.round(h * 0.5)), '#4ff3ff', a);
  }
  function outlet(c, x, y, s, a = 1) {
    if (a <= 0) return;
    c.save(); c.globalAlpha *= a;
    c.fillStyle = 'rgba(14,4,36,0.92)'; c.beginPath(); c.roundRect(x - 130 * s, y - 170 * s, 260 * s, 340 * s, 30 * s); c.fill();
    neonStroke(c, '#b9a2ff', 3 * s, () => {
      c.roundRect(x - 130 * s, y - 170 * s, 260 * s, 340 * s, 30 * s);
      c.roundRect(x - 52 * s, y - 95 * s, 22 * s, 70 * s, 6 * s); c.roundRect(x + 30 * s, y - 95 * s, 22 * s, 70 * s, 6 * s);
      c.moveTo(x + 22 * s, y + 70 * s); c.arc(x, y + 70 * s, 22 * s, 0, Math.PI, true); c.lineTo(x + 22 * s, y + 70 * s);
    });
    c.restore();
  }
  function bolt(c, x0, y0, x1, y1, seed, col = '#fff6a0', w = 4) {
    const r = H.rng(seed), n = 9, pts = [[x0, y0]];
    for (let i = 1; i < n; i++) { const u = i / n; pts.push([H.lerp(x0, x1, u) + (r() - 0.5) * 70, H.lerp(y0, y1, u) + (r() - 0.5) * 90]); }
    pts.push([x1, y1]);
    neonStroke(c, col, w, () => { c.moveTo(...pts[0]); for (const p of pts) c.lineTo(...p); });
  }
  function flashlight(c, x, y, s, on, a = 1) {
    if (a <= 0) return;
    c.save(); c.globalAlpha *= a;
    if (on > 0) { // beam to the right
      c.save(); c.globalCompositeOperation = 'lighter'; const g = c.createLinearGradient(x + 260 * s, 0, x + 620 * s, 0);
      g.addColorStop(0, `rgba(255,240,170,${0.55 * on})`); g.addColorStop(1, 'rgba(255,200,120,0)');
      c.fillStyle = g; c.beginPath(); c.moveTo(x + 260 * s, y - 60 * s); c.lineTo(x + 640 * s, y - 170 * s); c.lineTo(x + 640 * s, y + 170 * s); c.lineTo(x + 260 * s, y + 60 * s); c.fill(); c.restore();
    }
    c.fillStyle = 'rgba(12,3,32,0.92)'; c.beginPath(); c.roundRect(x - 300 * s, y - 50 * s, 460 * s, 100 * s, 18 * s); c.fill();
    for (let i = 0; i < 3; i++) { const bx = x - 225 * s + i * 135 * s; c.save(); c.fillStyle = H.rgba(H.mix('#2a0838', '#ff4fd8', 0.2 + 0.6 * on), 0.95); c.beginPath(); c.roundRect(bx - 55 * s, y - 32 * s, 110 * s, 64 * s, 10 * s); c.fill(); c.restore();
      neonStroke(c, '#ff4fd8', 2 * s, () => { c.roundRect(bx - 55 * s, y - 32 * s, 110 * s, 64 * s, 10 * s); c.moveTo(bx + 25 * s, y); c.lineTo(bx + 41 * s, y); c.moveTo(bx + 33 * s, y - 8 * s); c.lineTo(bx + 33 * s, y + 8 * s); }); }
    neonStroke(c, '#4ff3ff', 3 * s, () => { c.roundRect(x - 300 * s, y - 50 * s, 460 * s, 100 * s, 18 * s); c.moveTo(x + 160 * s, y - 50 * s); c.lineTo(x + 260 * s, y - 80 * s); c.lineTo(x + 260 * s, y + 80 * s); c.lineTo(x + 160 * s, y + 50 * s); });
    if (on > 0) glowDot(c, x + 262 * s, y, 70 * s * on, '#fff6a0', on);
    c.restore();
  }
  function catfish(c, x, y, s, a = 1) {
    if (a <= 0) return;
    c.save(); c.globalAlpha *= a;
    const body = () => { c.moveTo(x + 150 * s, y); c.quadraticCurveTo(x + 140 * s, y - 60 * s, x + 30 * s, y - 62 * s); c.quadraticCurveTo(x - 120 * s, y - 50 * s, x - 190 * s, y - 8 * s); c.lineTo(x - 250 * s, y - 50 * s); c.lineTo(x - 245 * s, y + 40 * s); c.lineTo(x - 190 * s, y + 8 * s); c.quadraticCurveTo(x - 100 * s, y + 46 * s, x + 30 * s, y + 50 * s); c.quadraticCurveTo(x + 140 * s, y + 48 * s, x + 150 * s, y); };
    c.fillStyle = 'rgba(12,3,32,0.9)'; c.beginPath(); body(); c.fill();
    neonStroke(c, '#ffe066', 3 * s, () => { body(); c.moveTo(x + 140 * s, y + 10 * s); c.bezierCurveTo(x + 190 * s, y + 30 * s, x + 200 * s, y + 70 * s, x + 230 * s, y + 80 * s); c.moveTo(x + 140 * s, y - 10 * s); c.bezierCurveTo(x + 200 * s, y - 30 * s, x + 220 * s, y - 10 * s, x + 250 * s, y - 30 * s); c.moveTo(x - 20 * s, y - 58 * s); c.lineTo(x - 50 * s, y - 100 * s); c.lineTo(x - 80 * s, y - 54 * s); });
    glowDot(c, x + 100 * s, y - 18 * s, 11 * s, '#4ff3ff', 1);
    c.restore();
  }
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
  function sparks(ctx, g, t, n, seed, a = 1) { // little arcs crackling along the body
    const k = Math.floor(t * 12);
    for (let i = 0; i < n; i++) { const r = H.rng(seed + k * 31 + i); if (!r.chance(0.6)) continue; const u = r.range(0.15, 0.9), [x, y] = g.at(u, r.chance(0.5) ? 1 : -1); ctx.save(); ctx.globalAlpha *= a * 0.9; bolt(ctx, x, y, x + r.range(-60, 60), y + (y > g.at(u)[1] ? 1 : -1) * r.range(40, 90), seed + k + i, '#fff6a0', 1.6); ctx.restore(); }
  }

  // ---------- scenes ----------
  function sHook(ctx, t) {
    roadBG(ctx, t, 0, 8);
    const g = eelGeo(H.lerp(-700, 160, E.out(ph(t, 0, 3.0))), 1010, 760, 120, t);
    drawEel(ctx, g, t, { a: cl(t / 0.3) });
    const t6 = P(0, '600');
    if (t > t6 - 0.15) {
      sparks(ctx, g, t, 6, 11, 1);
      popTitle(ctx, '600', 540, 620, 230, t6 - 0.15, t, 1.6);
      neonText(ctx, 'VOLTS', 540, 740, F(84), '#ffe066', flick(t, P(0, 'volts') - 0.1));
    }
    const th = P(1, 'but');
    if (t > th - 0.15) { ctx.save(); ctx.translate(540, 1420); ctx.rotate(-0.06); neonText(ctx, 'but how?', 0, 0, '700 150px "Caveat"', '#ff4fd8', flick(t, th - 0.15)); ctx.restore(); }
  }

  function sOutlet(ctx, t) {
    gridBG(ctx);
    const on = E.out(ph(t, CUT.outlet, CUT.outlet + 0.4));
    const t5 = P(2, 'five'), tno = P(3, 'no'), tbo = P(4, 'body'), tba = P(4, 'battery');
    const fadeA = 1 - ph(t, tbo - 0.4, tbo);
    // the wall outlet
    outlet(ctx, 290, 620, 1.05, on * fadeA);
    neonText(ctx, '120 V', 290, 860, F(64), '#b9a2ff', on * fadeA);
    neonText(ctx, 'WALL', 290, 410, F(46), '#b9a2ff', on * fadeA);
    if (t > t5 - 0.15) { ctx.save(); ctx.globalAlpha = fadeA; popTitle(ctx, '×5', 760, 600, 190, t5 - 0.15, t); ctx.restore(); }
    if (t > P(2, 'outlet') - 0.1) { ctx.save(); ctx.globalAlpha = fadeA; chromeTitle(ctx, '= 600 V', 760, 820, 100); ctx.restore(); }
    // no battery
    if (t > P(3, 'theres') - 0.2 && t < tbo) { const a = flick(t, P(3, 'theres') - 0.2) * fadeA; battery(ctx, 540, 1250, 360, 170, '#5cffb0', a); noSign(ctx, 540, 1250, 230, flick(t, tno - 0.05) * fadeA); neonText(ctx, 'NO BATTERY?', 540, 1520, F(68), '#ff3d7f', flick(t, P(3, 'battery') - 0.1) * fadeA); }
    // the body is the battery: the eel swims in where the battery was, + head, - tail
    if (t > tbo - 0.3) {
      const k = E.out(ph(t, tbo - 0.3, tbo + 0.4));
      const g = eelGeo(H.lerp(1200, 130, k), 1040, 820, 150, t, 20);
      drawEel(ctx, g, t, { col: '#5cffb0' });
      const [hx, hy] = g.at(0.99), [tx, ty] = g.at(0.04);
      if (t > tba - 0.15) { const a = flick(t, tba - 0.15); neonText(ctx, '+', hx - 40, hy - 170, F(130), '#ffe066', a); neonText(ctx, '−', tx + 30, ty - 150, F(130), '#4ff3ff', a); sparks(ctx, g, t, 5, 41, a); }
      popTitle(ctx, 'BODY', 540, 640, 150, tbo - 0.1, t);
      if (t > tba - 0.15) { popTitle(ctx, '= BATTERY', 540, 1400, 110, tba - 0.15, t); }
    }
  }

  // cut-away of the eel's body, packed with electrocytes; then a zoom into one cell
  const CC = 14, CR = 5;
  function sCells(ctx, t) {
    const tpk = P(5, 'packed'), tce = P(6, 'cells'), tel = P(6, 'electrocytes'), tea = P(7, 'each'), tti = P(7, 'tiny'), tfi = P(8, 'fifth'), tno = P(9, 'nothing');
    const ZOOM = [tea - 0.15, tea + 0.55];
    ctx.fillStyle = '#06021a'; ctx.fillRect(0, 0, W, HH);
    const bg = ctx.createRadialGradient(540, 960, 100, 540, 960, 1100); bg.addColorStop(0, '#2a0a52'); bg.addColorStop(1, '#05021a'); ctx.fillStyle = bg; ctx.fillRect(0, 0, W, HH);
    extraStars(ctx, 0, HH, 615);
    const z = E.inOut(ph(t, ZOOM[0], ZOOM[1]));
    // target cell (col 9, row 2)
    const g = eelGeo(-260, 960, 1600, 560, t, 14);
    const tu = H.lerp(0.12, 0.84, 9.5 / CC), [cx, cy] = g.at(tu, 0);
    if (z < 1) {
      ctx.save(); const s = H.lerp(1, 7, z); ctx.translate(540, 960); ctx.scale(s, s); ctx.translate(-cx, -cy); ctx.globalAlpha = 1 - ph(z, 0.75, 1);
      drawEel(ctx, g, t, { lw: 4, inside: () => eelCells(ctx, g, CC, CR, (i, j) => { const d = (CC - 1 - i) / CC; const f = E.out(ph(t, tpk - 0.2 + d * 0.9, tpk + 0.1 + d * 0.9)); const gl = t > tce - 0.1 ? 0.35 + 0.65 * Math.max(0, Math.sin(t * 6 + i * 0.7 + j)) : 0; return [f, gl]; }) });
      ctx.restore();
      ctx.save(); ctx.globalAlpha = 1 - z; neonText(ctx, 'EEL BODY', 540, 520, F(76), '#4ff3ff', flick(t, CUT.cells + 0.1));
      if (t > tce - 0.15) { ctx.save(); ctx.translate(540, 1370); ctx.rotate(-0.05); neonText(ctx, 'special cells', 0, 0, '700 104px "Caveat"', '#ffe066', flick(t, tce - 0.15)); ctx.restore(); }
      ctx.restore();
      if (t > tel - 0.15) { ctx.save(); ctx.globalAlpha = 1 - z; popTitle(ctx, 'ELECTROCYTES', 540, 1540, 82, tel - 0.15, t); ctx.restore(); }
    }
    if (z > 0.6) {
      // one cell, big: charges line up on its two faces
      const a = ph(z, 0.6, 1);
      ctx.save(); ctx.globalAlpha = a;
      const bw = 700, bh = 420, bx = 540, by = 900;
      const lit = t > tti - 0.15 ? (t > tno - 0.1 ? 1 - 0.75 * ph(t, tno - 0.1, tno + 0.4) : E.out(ph(t, tti - 0.15, tti + 0.3))) : 0;
      ctx.save(); ctx.fillStyle = H.rgba(H.mix('#2a0838', '#ff4fd8', 0.15 + 0.45 * lit), 0.95); ctx.beginPath(); ctx.roundRect(bx - bw / 2, by - bh / 2, bw, bh, 50); ctx.fill(); ctx.restore();
      neonStroke(ctx, '#ff4fd8', 4, () => ctx.roundRect(bx - bw / 2, by - bh / 2, bw, bh, 50));
      // ion channels as little gates on the membrane
      neonStroke(ctx, '#b9a2ff', 2, () => { for (let i = 0; i < 6; i++) { const y = by - bh / 2 + 50 + i * 64; ctx.moveTo(bx - bw / 2 - 18, y); ctx.lineTo(bx - bw / 2 + 18, y); ctx.moveTo(bx + bw / 2 - 18, y); ctx.lineTo(bx + bw / 2 + 18, y); } });
      for (let i = 0; i < 6; i++) { const y = by - bh / 2 + 50 + i * 64; neonText(ctx, '+', bx + bw / 2 - 70, y, F(52), '#ffe066', lit); neonText(ctx, '−', bx - bw / 2 + 70, y, F(52), '#4ff3ff', lit); }
      neonText(ctx, 'ONE CELL', 540, 560, F(76), '#4ff3ff', 1);
      if (lit > 0) for (let i = 0; i < 10; i++) { const r = H.rng(70 + i); const u = (t * r.range(0.4, 0.9) + r()) % 1; glowDot(ctx, H.lerp(bx - bw / 2 + 120, bx + bw / 2 - 120, u), by + r.range(-150, 150), 16, '#ffe066', lit * 0.8); }
      ctx.restore();
      if (t > tti - 0.15) neonText(ctx, 'TINY CHARGE', 540, 1240, F(64), '#ffe066', flick(t, tti - 0.15) * (1 - ph(t, tfi - 0.4, tfi - 0.2)));
      if (t > tfi - 0.15) { ctx.save(); ctx.globalAlpha = t > tno - 0.1 ? 1 - 0.6 * ph(t, tno - 0.1, tno + 0.3) : 1; popTitle(ctx, '0.15 V', 540, 1340, 150, tfi - 0.15, t); ctx.restore(); }
      if (t > tno - 0.15) { ctx.save(); ctx.translate(540, 1530); ctx.rotate(-0.05); neonText(ctx, '...that’s nothing', 0, 0, '700 104px "Caveat"', '#ff4fd8', flick(t, tno - 0.15)); ctx.restore(); }
    }
  }

  function sStack(ctx, t) {
    gridBG(ctx, 'rgba(30,60,140,0.45)');
    const tst = P(10, 'stacked'), trw = P(10, 'rows'), tth = P(11, 'thousands'), the = P(11, 'head'), tta = P(11, 'tail'), tfl = P(12, 'flashlight'), tlk = P(12, 'like');
    // cells snap together into a row, then the rows multiply
    const cols = 7, cw = 120, ch = 92, gap = 12, x0 = 540 - (cols * (cw + gap) - gap) / 2;
    const nRows = 1 + Math.floor(4 * E.out(ph(t, tth - 0.1, tth + 0.6)));
    const yTop = 540, shrink = H.lerp(1, 0.8, ph(t, tlk - 0.4, tlk));
    const snap = E.back(ph(t, tst - 0.15, tst + 0.3));
    for (let r = 0; r < nRows; r++) for (let i = 0; i < cols; i++) {
      const r0 = H.rng(500 + i + r * 13);
      const tx = x0 + i * (cw + gap), ty = yTop + r * (ch + 22) * shrink;
      const sx = r === 0 ? H.lerp(r0.range(80, 1000) - cw / 2, tx, snap) : tx, sy = r === 0 ? H.lerp(r0.range(300, 1400), ty, snap) : ty;
      const ra = r === 0 ? 1 : ph(t, tth - 0.1 + r * 0.12, tth + 0.1 + r * 0.12);
      if (ra <= 0) continue;
      const pulse = 0.4 + 0.6 * Math.max(0, Math.sin(t * 7 - i * 0.8));
      ctx.save(); ctx.globalAlpha = ra * E.out(ph(t, CUT.stack, CUT.stack + 0.3));
      ctx.fillStyle = H.rgba(H.mix('#2a0838', '#ff4fd8', 0.2 + 0.4 * pulse * (t > trw ? 1 : 0)), 0.95); ctx.beginPath(); ctx.roundRect(sx, sy, cw, ch * shrink, 16); ctx.fill();
      neonStroke(ctx, '#ff4fd8', 2.4, () => ctx.roundRect(sx, sy, cw, ch * shrink, 16));
      ctx.restore();
      if (r === 0 && snap > 0.9) { neonText(ctx, '−', sx + 28, sy + ch * shrink / 2, F(40), '#4ff3ff', ra); neonText(ctx, '+', sx + cw - 28, sy + ch * shrink / 2, F(40), '#ffe066', ra); }
    }
    if (t > trw - 0.15) neonText(ctx, 'STACKED', 540, 400, F(84), '#4ff3ff', flick(t, tst - 0.1));
    // head to tail arrow
    const ay = yTop + 5 * (ch + 22) * shrink + 30;
    if (t > the - 0.15) {
      neonPath(ctx, [[140, ay], [940, ay]], E.inOut(ph(t, the - 0.15, tta + 0.1)), '#5cffb0', 4);
      neonText(ctx, 'TAIL', 170, ay + 70, F(44), '#5cffb0', flick(t, the - 0.1), 'left');
      neonText(ctx, 'HEAD', 910, ay + 70, F(44), '#5cffb0', flick(t, tta - 0.1), 'right');
    }
    if (t > tth - 0.15 && t < tlk - 0.1) { ctx.save(); ctx.globalAlpha = 1 - ph(t, tlk - 0.5, tlk - 0.1); popTitle(ctx, 'THOUSANDS', 540, 1480, 110, tth - 0.15, t); ctx.restore(); }
    // flashlight: batteries in a row = more volts
    if (t > tlk - 0.15) {
      const on = t > tfl - 0.1 ? E.out(ph(t, tfl - 0.1, tfl + 0.15)) : 0;
      flashlight(ctx, 400, 1420, 0.95, on, flick(t, tlk - 0.15));
      if (on > 0 && on < 1) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(255,240,200,${0.2 * (1 - on)})`; ctx.fillRect(0, 0, W, HH); ctx.restore(); }
    }
  }

  function sFire(ctx, t) {
    roadBG(ctx, t, 0, 5);
    const tfi = P(13, 'fish'), tsp = P(13, 'spots'), tbr = P(14, 'brain'), tsi = P(14, 'signal'), tfl = P(15, 'flips'), tsix = P(16, 'six'), tsh = P(17, 'shock'), tz = P(18, 'zap'), tfr = P(19, 'freezes');
    const still = ph(t, tz, tz + 0.15);
    const g = eelGeo(H.lerp(-500, 20, E.out(ph(t, CUT.fire, CUT.fire + 0.8))), 1030, 740, 160, t, 22);
    const fx = 900, fy = 1000 + Math.sin(t * 2) * 14 * (1 - ph(t, tfr - 0.1, tfr + 0.1));
    // cells: off, a wave of signal runs head -> tail, then all on at once on "flips"
    const sigP = E.inOut(ph(t, tbr + 0.2, tsi + 0.4));
    const allOn = ph(t, tfl - 0.15, tfl + 0.05), boost = t > tz - 0.05 ? 1 - 0.6 * ph(t, tz + 0.3, tz + 1.4) : 0;
    drawEel(ctx, g, t, { a: 1, inside: () => eelCells(ctx, g, 12, 3, (i) => [0.9, cl(allOn * (0.6 + 0.4 * Math.sin(t * 20 + i)) + boost)]) });
    if (t > tsp - 0.4) neonFish(ctx, fx, fy, 0.95, t, '#5cffb0', ph(t, tfr - 0.1, tfr + 0.1), E.out(ph(t, tsp - 0.4, tsp)));
    // target brackets on the fish
    if (t > tfi - 0.15 && t < tz) { const a = flick(t, tfi - 0.15), r = 150 - 20 * Math.sin(t * 8); ctx.save(); ctx.globalAlpha = a; neonStroke(ctx, '#ff3d7f', 3, () => { for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { ctx.moveTo(fx + sx * r, fy + sy * (r - 50)); ctx.lineTo(fx + sx * r, fy + sy * (r - 90) * 1); ctx.moveTo(fx + sx * r, fy + sy * (r - 50)); ctx.lineTo(fx + sx * (r - 40), fy + sy * (r - 50)); } }); ctx.restore(); neonText(ctx, 'FISH', fx, fy - 170, F(52), '#ff3d7f', a); }
    // brain + signal down the spine
    const [hx, hy] = g.at(0.9, 0.2);
    if (t > tbr - 0.15) { glowDot(ctx, hx, hy, 46, '#ffe066', flick(t, tbr - 0.15)); if (t < tfl + 0.5) neonText(ctx, 'BRAIN', hx - 40, hy - 160, F(56), '#ffe066', flick(t, tbr - 0.15)); }
    if (t > tbr + 0.2 && t < tfl + 0.3) {
      const pts = []; for (let i = 0; i <= 30; i++) { const u = 0.9 - 0.8 * (i / 30); pts.push(g.at(u, 0).slice(0, 2)); }
      neonPath(ctx, pts, sigP, '#ffe066', 3, false);
      const k = Math.min(pts.length - 1, Math.floor(sigP * (pts.length - 1))); glowDot(ctx, pts[k][0], pts[k][1], 34, '#fff6a0', 1);
      if (t > tsi - 0.15) neonText(ctx, 'ONE SIGNAL', 540, 600, F(64), '#ffe066', flick(t, tsi - 0.15) * (1 - ph(t, tfl - 0.2, tfl)));
    }
    if (t > tfl - 0.15 && t < tsh - 0.2) { neonText(ctx, 'ALL AT ONCE', 540, 600, F(72), '#ff4fd8', flick(t, tfl - 0.15)); sparks(ctx, g, t, 7, 91, 1); }
    // HUD odometer: cells and volts roll together
    if (t > tsix - 0.6) {
      const a = flick(t, tsix - 0.6), v = E.inOut(ph(t, tsix - 0.15, tsh - 0.1));
      ctx.save(); ctx.globalAlpha = a; panel(ctx, 120, 1250, 840, 390); ctx.restore();
      ctx.save(); ctx.globalAlpha = a;
      chromeTitle(ctx, Math.round(6000 * v).toLocaleString('en-US'), 460, 1385, 96);
      chromeTitle(ctx, Math.round(600 * v) + ' V', 460, 1560, 96);
      ctx.restore();
      neonText(ctx, 'CELLS', 820, 1350, F(44), '#4ff3ff', a); neonText(ctx, 'VOLTS', 820, 1525, F(44), '#ffe066', a);
      neonStroke(ctx, '#b9a2ff', 1.6, () => { ctx.moveTo(170, 1442); ctx.lineTo(910, 1442); });
    }
    if (t > tsh - 0.15 && t < tz) popTitle(ctx, 'SHOCK', 540, 620, 150, tsh - 0.15, t);
    // ZAP: bolts to the fish, white flash, chrome ZAP!
    if (t > tz - 0.05) {
      const k = 1 - ph(t, tz + 0.6, tz + 1.4);
      if (k > 0) { const [mx, my] = g.at(0.99); for (let i = 0; i < 3; i++) { ctx.save(); ctx.globalAlpha = k; bolt(ctx, mx, my + (i - 1) * 30, fx - 70, fy + (i - 1) * 40, 300 + i + Math.floor(t * 20) * 7, i === 1 ? '#ffffff' : '#fff6a0', 5); ctx.restore(); } sparks(ctx, g, t, 10, 131, k); }
      popTitle(ctx, 'ZAP!', 540, 640, 220, tz - 0.05, t, 1.8);
      const fl = Math.max(0, 1 - (t - tz) / 0.35); if (fl > 0) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(255,250,220,${0.55 * fl})`; ctx.fillRect(0, 0, W, HH); ctx.restore(); }
    }
    if (t > tfr - 0.15) { ctx.save(); ctx.translate(fx - 20, fy + 160); ctx.rotate(-0.06); neonText(ctx, 'stunned!', 0, 0, '700 96px "Caveat"', '#5cffb0', flick(t, tfr - 0.15)); ctx.restore(); }
    void still;
  }

  function sTwist(ctx, t) {
    gridBG(ctx, 'rgba(120,20,90,0.5)');
    const ttw = P(20, 'twist'), tis = P(21, 'isnt'), tee = P(21, 'eel') , tkn = P(22, 'knifefish'), tcl = P(23, 'closer'), tca = P(23, 'catfish');
    const on = E.out(ph(t, CUT.twist, CUT.twist + 0.4));
    const g = eelGeo(140, 760, 800, 130, t, 18);
    drawEel(ctx, g, t, { a: on, col: '#4ff3ff' });
    if (t > ttw - 0.15) neonText(ctx, 'PLOT TWIST', 540, 470, F(76), '#ffe066', flick(t, ttw - 0.15) * (1 - ph(t, tkn - 0.4, tkn - 0.1)));
    if (t > tis - 0.1 && t < tkn - 0.1) { noSign(ctx, 540, 760, 300, flick(t, tis - 0.1) * (1 - ph(t, tkn - 0.4, tkn - 0.1))); }
    if (t > tis - 0.15 && t < tkn - 0.1) { ctx.save(); ctx.globalAlpha = 1 - ph(t, tkn - 0.4, tkn - 0.1); popTitle(ctx, 'NOT AN EEL', 540, 1150, 96, tis - 0.15, t); ctx.restore(); }
    if (t > tkn - 0.15) { popTitle(ctx, 'KNIFEFISH', 540, 1150, 104, tkn - 0.15, t); neonText(ctx, 'family: knifefishes', 540, 470, '700 92px "Caveat"', '#ffe066', flick(t, tkn)); }
    if (t > tcl - 0.15) {
      const k = E.out(ph(t, tcl - 0.15, tca));
      catfish(ctx, H.lerp(1300, 520, k), 1430, 1.0, 1);
      neonPath(ctx, [[540, 1200], [540, 1330]], ph(t, tca - 0.2, tca + 0.1), '#ffe066', 3, true);
      if (t > tca - 0.15) neonText(ctx, 'CATFISH COUSIN', 540, 1590, F(56), '#ffe066', flick(t, tca - 0.15));
    }
  }

  function sEnd(ctx, t) {
    roadBG(ctx, t, 0, 9);
    const tbo = P(24, 'body'), tba = P(24, 'battery'), tpo = P(25, 'power'), twh = P(25, 'what');
    const g = eelGeo(H.lerp(-700, 140, E.out(ph(t, CUT.end, CUT.end + 0.7))), 1010, 800, 140, t, 22);
    const lit = t > tba - 0.15 ? 0.6 + 0.4 * Math.sin(t * 10) : 0.25;
    drawEel(ctx, g, t, { col: '#5cffb0', inside: () => eelCells(ctx, g, 12, 3, (i) => [0.9, lit * (0.7 + 0.3 * Math.sin(t * 15 + i))]) });
    if (t > tba - 0.15) { const [hx, hy] = g.at(0.99), [tx, ty] = g.at(0.04); neonText(ctx, '+', hx - 30, hy - 160, F(120), '#ffe066', flick(t, tba - 0.15)); neonText(ctx, '−', tx + 20, ty - 140, F(120), '#4ff3ff', flick(t, tba - 0.15)); sparks(ctx, g, t, 6, 171, 1); }
    if (t > tbo - 0.15) { ctx.save(); ctx.translate(540, 700); ctx.rotate(-0.05); neonText(ctx, 'your body = battery?', 0, 0, '700 104px "Caveat"', '#ff4fd8', flick(t, tbo - 0.15)); ctx.restore(); }
    if (t > twh - 0.15) neonText(ctx, 'WHAT WOULD YOU', 540, 1300, F(66), '#4ff3ff', flick(t, twh - 0.15));
    if (t > tpo - 0.15) { const p = popTitle(ctx, 'POWER?', 540, 1480, 170, tpo - 0.15, t, 1.5); if (p >= 1) glint(ctx, 820, 1370, 52 * (0.75 + 0.25 * Math.sin(t * 4)), 0.85); }
  }

  // ---------- header: the hook title slams in big, then glides into the top and stays ----------
  function header(ctx, t) {
    if (t < 0.12) return;
    const pS = ph(t, 0.12, 0.5), pM = E.inOut(ph(t, 2.1, 2.55));
    const fade = t > CUT.end - 0.2 ? 1 - ph(t, CUT.end - 0.2, CUT.end + 0.2) : 1;
    if (fade <= 0) return;
    const sc = (1 + 1.5 * Math.pow(1 - pS, 3)) * H.lerp(1, 0.46, pM);
    const cy = H.lerp(470, 225, pM);
    ctx.save(); ctx.globalAlpha = cl(pS * 4) * fade; ctx.translate(540, cy); ctx.scale(sc, sc); ctx.translate(-540, -470);
    if (pM < 0.5) { chromeTitle(ctx, 'ELECTRIC', 540, 430, 150); chromeTitle(ctx, 'EEL', 540, 590, 150); }
    ctx.restore();
    if (pM >= 0.5) { ctx.save(); ctx.globalAlpha = fade * ph(pM, 0.5, 0.8); chromeTitle(ctx, 'ELECTRIC EEL', 540, 250, 68); ctx.restore(); }
    if (pS >= 1 && t < 0.95) { const fl = Math.exp(-(t - 0.5) * 8); ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(255,200,255,${0.35 * fl})`; ctx.fillRect(0, 0, W, HH); ctx.restore(); }
    if (t > 0.6 && t < 1.8) glint(ctx, 180 + (t - 0.6) / 1.2 * 720, 400, 56, 0.9);
  }

  const ORDER = [['hook', 0, sHook], ['outlet', CUT.outlet, sOutlet], ['cells', CUT.cells, sCells], ['stack', CUT.stack, sStack], ['fire', CUT.fire, sFire], ['twist', CUT.twist, sTwist], ['end', CUT.end, sEnd]];
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

  // ---------- SOUND: 80s night swim. Gated snares + saw stabs on the slams, neon strikes, analog zaps, electric crackle ----------
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
    const crackle = (t0, t1, g = 1) => { const r = H.rng(Math.floor(t0 * 100)); for (let t = t0; t < t1; t += r.range(0.05, 0.16)) k.noise(t, { dur: 0.02, filter: 'highpass', f: 3000, gain: 0.12 * g, a: 0.001, pan: r.range(-0.6, 0.6), minor: true }); };
    const counter = (t0, t1, fn, step, play) => { let last = -1, lastV = fn(t0); for (let t = t0; t <= t1 + 1e-6; t += 1 / 120) { const v = fn(t); if (Math.abs(v - lastV) >= step && t - last >= 1 / 12) { play(t, v); last = t; lastV = v; } } };

    k.music('pulse', 0.5, CUT.cells, { bpm: 104, gain: 0.4, chords: [['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4']] });
    k.music('pad', CUT.cells, CUT.stack, { bpm: 104, gain: 0.4, chords: [['F3', 'A3', 'C4', 'E4']] });
    k.music('pulse', CUT.stack, CUT.twist, { bpm: 104, gain: 0.38, chords: [['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['C4', 'E4', 'G4', 'B4'], ['G3', 'B3', 'D4', 'F4']] });
    k.music('pad', CUT.twist, END, { bpm: 104, gain: 0.4, chords: [['C4', 'E4', 'G4', 'B4'], ['F3', 'A3', 'C4', 'E4']] });
    k.bed('hiss', 0, END, { gain: 0.8 });

    // hook
    slam(0.4, ['A3', 'E4', 'A4', 'C5'], 1.1);
    const t6 = P(0, '600'); slam(t6 - 0.25, ['C4', 'G4', 'C5'], 1.0, 0.1); crackle(t6, PH[0].e + 0.4, 1); k.play('buzz', t6, { f: 120, dur: 0.5, gain: 0.5 });
    strike(P(0, 'volts') - 0.1, 0.6, 0.3, true);
    strike(P(1, 'but') - 0.15, 0.8, -0.2);
    // outlet
    glitchS(CUT.outlet); strike(CUT.outlet + 0.1, 0.6, -0.4, true);
    slam(P(2, 'five') - 0.25, ['E4', 'A4', 'C5'], 0.8, 0.3);
    stab(P(2, 'outlet') - 0.1, ['C4', 'E4', 'G4'], 0.7, 0.35);
    strike(P(3, 'theres') - 0.2, 0.7, 0, true); k.play('error', P(3, 'no'), { gain: 0.5 }); strike(P(3, 'battery') - 0.1, 0.7, 0.2, true);
    k.play('whoosh', P(4, 'body') - 0.4, { dur: 0.6, gain: 0.8 }); slam(P(4, 'body') - 0.2, ['F3', 'C4', 'A4'], 0.9);
    snare(P(4, 'battery'), 1.1); k.play('impact', P(4, 'battery'), { f: 70, gain: 0.7 }); stab(P(4, 'battery'), ['F3', 'C4', 'E4', 'A4', 'C5'], 1.1, 0.9); crackle(P(4, 'battery'), PH[4].e + 0.3, 0.8);
    // cells
    glitchS(CUT.cells); k.play('boot', CUT.cells, { gain: 0.5 }); strike(CUT.cells + 0.1, 0.7, -0.2, true);
    for (let i = 0; i < 14; i++) k.play('blip', P(5, 'packed') - 0.2 + i * 0.065, { f: ['A5', 'C6', 'E6', 'G6'][i % 4], gain: 0.45, minor: true });
    strike(P(6, 'cells') - 0.15, 0.6, 0.4, true);
    slam(P(6, 'electrocytes') - 0.25, ['A3', 'E4', 'A4'], 0.8);
    const tea = P(7, 'each'); k.play('riser', tea - 0.15, { dur: 0.7, gain: 0.6 }); k.play('whoosh', tea, { dur: 0.6, gain: 0.7, top: 2400 });
    strike(P(7, 'tiny') - 0.15, 0.7, 0.2); k.tone(P(7, 'tiny'), { f: [[0, 'C5'], [0.3, 'G5']], type: 'triangle', dur: 0.35, gain: 0.08, verb: 0.3 });
    slam(P(8, 'fifth') - 0.25, ['C4', 'E4', 'G4'], 0.7);
    const tno = P(9, 'nothing'); k.tone(tno, { f: [[0, 400], [0.6, 120]], type: 'sawtooth', dur: 0.65, gain: 0.06, filter: 'lowpass', f2: 900, pan: 0.2 });
    // stack
    glitchS(CUT.stack);
    const tst = P(10, 'stacked'); for (let i = 0; i < 7; i++) k.play('tock', tst - 0.1 + i * 0.05, { f: 400 + i * 40, gain: 0.5, minor: true }); k.play('thud', tst + 0.25, { f: 90, gain: 0.5 }); strike(tst - 0.1, 0.7, 0, true);
    const tth = P(11, 'thousands'); for (let r = 1; r < 5; r++) k.play('tock', tth - 0.1 + r * 0.12, { f: 300 + r * 60, gain: 0.6, minor: true }); slam(tth - 0.2, ['G3', 'D4', 'G4', 'B4'], 0.9);
    zap(P(11, 'head') - 0.15, P(11, 'tail') - P(11, 'head') + 0.2, 300, 1100, 0.9, 0);
    strike(P(12, 'like') - 0.15, 0.6, -0.3, true); k.play('click', P(12, 'flashlight') - 0.1, { gain: 1.3 }); stab(P(12, 'flashlight'), ['C4', 'E4', 'G4', 'C5'], 0.9, 0.6);
    // the hunt
    glitchS(CUT.fire); k.noise(CUT.fire, { dur: 1.0, color: 'pink', filter: 'bandpass', f: [[0, 400], [1, 1200]], q: 2, gain: 0.08, a: 0.4, minor: true });
    k.play('pop', P(13, 'spots') - 0.3, { f: 900, gain: 0.5 }); strike(P(13, 'fish') - 0.15, 0.8, 0.5); k.play('blip', P(13, 'fish'), { f: 'E6', gain: 0.5 }); k.play('blip', P(13, 'fish') + 0.15, { f: 'E6', gain: 0.5 });
    const tbr = P(14, 'brain'); strike(tbr - 0.15, 0.8, 0.3); zap(tbr + 0.2, P(14, 'signal') + 0.2 - tbr, 1400, 200, 1, -0.2, false);
    strike(P(14, 'signal') - 0.15, 0.6, 0, true);
    const tfl = P(15, 'flips'); snare(tfl - 0.05, 1); k.play('buzz', tfl - 0.05, { f: 110, dur: 1.2, gain: 0.6 }); crackle(tfl, P(17, 'shock'), 0.8);
    const tsix = P(16, 'six'), tsh = P(17, 'shock');
    k.tone(tsix - 0.15, { f: [[0, 80], [tsh - tsix, 400]], type: 'sawtooth', dur: tsh - tsix + 0.1, gain: 0.06, a: 0.3, hold: tsh - tsix - 0.4, filter: 'lowpass', f2: 900, q: 4 });
    counter(tsix - 0.15, tsh - 0.1, (t) => Math.round(60 * E.inOut(ph(t, tsix - 0.15, tsh - 0.1))), 1, (t) => k.noise(t, { dur: 0.012, filter: 'bandpass', f: 1800, q: 3, gain: 0.17, a: 0.0005, minor: true }));
    slam(tsh - 0.25, ['A3', 'E4', 'A4', 'C5'], 1.1);
    const tz = P(18, 'zap'); k.play('impact', tz, { f: 60, gain: 1.1 }); snare(tz, 1.4); k.noise(tz, { dur: 0.9, filter: 'highpass', f: 1800, gain: 0.3, a: 0.003, hold: 0.2 }); crackle(tz, tz + 1.2, 1.4); stab(tz + 0.02, ['F3', 'C4', 'E4', 'A4', 'C5'], 1.3, 1.1); zap(tz, 0.5, 2000, 80, 1.2, 0.3, false);
    const tfr = P(19, 'freezes'); k.tone(tfr - 0.1, { f: [[0, 'E6'], [0.5, 'B5']], type: 'triangle', dur: 0.6, gain: 0.08, verb: 0.5 }); strike(tfr - 0.15, 0.6, 0.4, true);
    // twist
    glitchS(CUT.twist); slam(P(20, 'twist') - 0.25, ['C4', 'G4', 'C5'], 0.9);
    k.play('error', P(21, 'isnt') - 0.05, { gain: 0.6 }); slam(P(21, 'isnt') - 0.25, ['A3', 'Eb4', 'Bb4'], 0.8);
    snare(P(22, 'knifefish') - 0.1, 1.1); k.play('impact', P(22, 'knifefish') - 0.1, { f: 70, gain: 0.8 }); stab(P(22, 'knifefish') - 0.1, ['F3', 'C4', 'A4', 'C5'], 1.1, 0.8);
    k.play('whoosh', P(23, 'closer') - 0.2, { dur: 0.7, gain: 0.7 }); strike(P(23, 'catfish') - 0.15, 0.9, 0.2);
    // payoff
    glitchS(CUT.end); k.play('boot', CUT.end + 0.1, { gain: 0.5 });
    strike(P(24, 'body') - 0.15, 0.8, -0.2); crackle(P(24, 'battery'), END - 0.3, 0.6); k.play('buzz', P(24, 'battery'), { f: 110, dur: 0.6, gain: 0.4 });
    strike(P(25, 'what') - 0.15, 0.7, 0, true);
    slam(P(25, 'power') - 0.25, ['F3', 'C4', 'A4', 'C5'], 1.2);
    k.tone(P(25, 'first') + 0.3, { f: 'C5', type: 'triangle', dur: 1.0, gain: 0.12, verb: 0.4 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
