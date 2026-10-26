// ================= Synthwave Outrun, 9:16 1080x1920: "How does a plane toilet flush at 35,000 feet?" =================
// Short (~50 s). Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// An 80s night flight: a neon wireframe airliner over the outrun grid. The camera tilts up into the sky for the
// big idea, CRT glitch cuts move between scenes (cabin cross-section, a neon flush schematic, the plane's tank,
// an altimeter + pump, the landing), and the chrome title slams in for the key numbers and the payoff.
(function () {
  const W = 1080, HH = 1920;
  // ---------- BEATS: one entry per voiceover phrase (phrases.json, Kokoro am_michael) ----------
  const PH = [{"s":0.25,"e":1.84,"text":"How does a plane toilet flush","words":[["how",0.25],["does",0.45],["a",0.72],["plane",0.78],["toilet",1.11],["flush",1.51]]},{"s":2.14,"e":3.86,"text":"at thirty-five thousand feet?","words":[["at",2.14],["thirtyfive",2.29],["thousand",3.0],["feet",3.57]]},{"s":4.41,"e":5.84,"text":"It barely uses water.","words":[["it",4.41],["barely",4.58],["uses",5.08],["water",5.42]]},{"s":6.39,"e":7.7,"text":"It uses the sky.","words":[["it",6.39],["uses",6.61],["the",7.04],["sky",7.37]]},{"s":8.25,"e":9.92,"text":"Your cabin is pressurized,","words":[["your",8.25],["cabin",8.55],["is",8.93],["pressurized",9.08]]},{"s":10.22,"e":11.8,"text":"packed with air like a balloon.","words":[["packed",10.22],["with",10.6],["air",10.85],["like",11.04],["a",11.29],["balloon",11.35]]},{"s":12.35,"e":14.24,"text":"Outside, the air is super thin.","words":[["outside",12.35],["the",12.9],["air",13.13],["is",13.37],["super",13.53],["thin",13.92]]},{"s":14.79,"e":15.77,"text":"Press the button,","words":[["press",14.79],["the",15.14],["button",15.35]]},{"s":16.07,"e":17.53,"text":"and a valve opens a pipe","words":[["and",16.07],["a",16.3],["valve",16.38],["opens",16.76],["a",17.15],["pipe",17.23]]},{"s":17.83,"e":19.91,"text":"from the bowl to that thin outside air.","words":[["from",17.83],["the",18.1],["bowl",18.3],["to",18.57],["that",18.7],["thin",18.97],["outside",19.24],["air",19.71]]},{"s":20.46,"e":22.09,"text":"The high pressure in the cabin","words":[["the",20.46],["high",20.65],["pressure",20.91],["in",21.44],["the",21.57],["cabin",21.77]]},{"s":22.39,"e":24.19,"text":"shoves everything down the pipe.","words":[["shoves",22.39],["everything",22.79],["down",23.46],["the",23.72],["pipe",23.92]]},{"s":24.74,"e":25.68,"text":"That's the whoosh.","words":[["thats",24.74],["the",25.08],["whoosh",25.28]]},{"s":26.23,"e":28.71,"text":"It all lands in a tank at the back of the plane.","words":[["it",26.23],["all",26.37],["lands",26.58],["in",26.92],["a",27.06],["tank",27.13],["at",27.41],["the",27.54],["back",27.75],["of",28.03],["the",28.16],["plane",28.37]]},{"s":29.26,"e":30.86,"text":"About three seconds later,","words":[["about",29.26],["three",29.63],["seconds",29.99],["later",30.5]]},{"s":31.16,"e":32.4,"text":"the valve slams shut.","words":[["the",31.16],["valve",31.38],["slams",31.74],["shut",32.11]]},{"s":32.95,"e":34.84,"text":"But below sixteen thousand feet,","words":[["but",32.95],["below",33.16],["sixteen",33.51],["thousand",34.0],["feet",34.56]]},{"s":35.14,"e":36.97,"text":"the outside air isn't thin enough,","words":[["the",35.14],["outside",35.35],["air",35.82],["isnt",36.03],["thin",36.3],["enough",36.57]]},{"s":37.27,"e":39.96,"text":"so an electric pump makes the vacuum instead.","words":[["so",37.27],["an",37.42],["electric",37.56],["pump",38.14],["makes",38.43],["the",38.8],["vacuum",39.02],["instead",39.45]]},{"s":40.51,"e":42.91,"text":"And no, nothing gets dumped in the sky.","words":[["and",40.51],["no",40.75],["nothing",40.91],["gets",41.47],["dumped",41.79],["in",42.27],["the",42.43],["sky",42.67]]},{"s":43.46,"e":46.02,"text":"Ground crews empty the tank after landing.","words":[["ground",43.46],["crews",43.9],["empty",44.27],["the",44.63],["tank",44.85],["after",45.15],["landing",45.51]]},{"s":46.57,"e":47.57,"text":"So, next flight,","words":[["so",46.57],["next",46.74],["flight",47.07]]},{"s":47.87,"e":49.42,"text":"are you brave enough to press it?","words":[["are",47.87],["you",48.05],["brave",48.23],["enough",48.53],["to",48.89],["press",49.0],["it",49.3]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); return x ? x[1] : PH[i].s; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);
  const BEATS = [
    { s: PH[0].s, e: PH[1].e, text: 'hook: how does a plane toilet flush at 35,000 ft', screen: 'outrun road, neon plane, chrome PLANE TOILET?, 35,000 FT' },
    { s: PH[2].s, e: PH[3].e, text: 'barely water, it uses the sky', screen: 'droplet WATER crossed, tilt up to THE SKY' },
    { s: PH[4].s, e: PH[6].e, text: 'cabin pressurized vs thin outside air', screen: 'fuselage cross-section full of air dots, HIGH PRESSURE / THIN AIR' },
    { s: PH[7].s, e: PH[12].e, text: 'button, valve, pipe to outside, cabin pressure shoves, whoosh', screen: 'neon schematic bowl-valve-tank-vent, WHOOSH' },
    { s: PH[13].s, e: PH[15].e, text: 'tank at the back, 3 seconds, valve shuts', screen: 'plane side view, glowing TANK, 3 SEC counter, valve SHUT' },
    { s: PH[16].s, e: PH[18].e, text: 'below 16,000 ft a pump makes the vacuum', screen: 'altimeter, chrome 16,000 FT, PUMP card' },
    { s: PH[19].s, e: PH[20].e, text: 'nothing dumped; emptied after landing', screen: 'plane in sky, crossed drop, tilt down, truck + hose' },
    { s: PH[21].s, e: PH[22].e, text: 'payoff question', screen: 'neon FLUSH button, BRAVE ENOUGH?' },
  ];
  // scene cuts (CRT glitch) sit in the pauses between phrases
  const CUT = { cabin: 8.0, flush: 14.5, plane: 25.95, alt: 32.65, sky: 40.2, end: 46.3 };
  const TILT_UP = [P(3, 'uses') - 0.15, P(3, 'sky') + 0.1];
  const TILT_DN = [43.1, 43.75];
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

  // ---------- new props for this story ----------
  // neon wireframe airliner, side view, nose to the right. tank: 0..1 glow on the rear waste tank
  function neonPlane(c, x, y, s, col = '#4ff3ff', tank = 0, a = 1) {
    if (a <= 0) return;
    c.save(); c.globalAlpha *= a;
    const body = () => { c.moveTo(x - 235 * s, y - 30 * s); c.lineTo(x + 170 * s, y - 30 * s); c.quadraticCurveTo(x + 250 * s, y - 28 * s, x + 262 * s, y + 4 * s); c.quadraticCurveTo(x + 250 * s, y + 30 * s, x + 170 * s, y + 32 * s); c.lineTo(x - 175 * s, y + 32 * s); c.quadraticCurveTo(x - 225 * s, y + 20 * s, x - 262 * s, y - 22 * s); c.closePath(); };
    c.fillStyle = 'rgba(10,2,28,0.82)'; c.beginPath(); body(); c.fill();
    if (tank > 0) { // waste tank in the rear hold
      c.save(); c.globalAlpha *= tank; c.fillStyle = 'rgba(255,79,216,0.35)'; c.beginPath(); c.roundRect(x - 200 * s, y + 2 * s, 70 * s, 26 * s, 6 * s); c.fill(); c.restore();
      c.save(); c.globalAlpha *= tank; neonStroke(c, '#ff4fd8', 2.4 * s, () => c.roundRect(x - 200 * s, y + 2 * s, 70 * s, 26 * s, 6 * s)); c.restore();
    }
    neonStroke(c, col, 2.2 * s, () => {
      body();
      c.moveTo(x - 205 * s, y - 30 * s); c.lineTo(x - 250 * s, y - 128 * s); c.lineTo(x - 215 * s, y - 128 * s); c.lineTo(x - 140 * s, y - 30 * s);
      c.moveTo(x - 10 * s, y + 14 * s); c.lineTo(x - 110 * s, y + 96 * s); c.lineTo(x - 72 * s, y + 96 * s); c.lineTo(x + 70 * s, y + 14 * s);
      c.moveTo(x + 28 * s, y + 52 * s); c.ellipse(x + 2 * s, y + 52 * s, 26 * s, 11 * s, 0, 0, 7);
      c.moveTo(x - 214 * s, y + 2 * s); c.lineTo(x - 250 * s, y + 6 * s); c.lineTo(x - 236 * s, y + 18 * s);
      c.moveTo(x + 205 * s, y - 10 * s); c.lineTo(x + 232 * s, y - 10 * s); c.lineTo(x + 244 * s, y + 2 * s);
    });
    c.fillStyle = H.rgba(H.mix(col, '#ffffff', 0.5), 0.9);
    for (let i = 0; i < 14; i++) c.fillRect(x + (-150 + i * 22) * s, y - 14 * s, 9 * s, 9 * s);
    c.restore();
  }
  function toiletBowl(c, x, y, s, col) {
    neonStroke(c, col, 3.2 * s, () => {
      c.moveTo(x + 190 * s, y); c.ellipse(x, y, 190 * s, 46 * s, 0, 0, 7);
      c.moveTo(x - 186 * s, y + 8 * s); c.bezierCurveTo(x - 180 * s, y + 140 * s, x - 70 * s, y + 200 * s, x - 34 * s, y + 230 * s);
      c.moveTo(x + 186 * s, y + 8 * s); c.bezierCurveTo(x + 180 * s, y + 140 * s, x + 70 * s, y + 200 * s, x + 34 * s, y + 230 * s);
      c.moveTo(x - 190 * s, y - 6 * s); c.lineTo(x - 210 * s, y - 210 * s); c.lineTo(x - 160 * s, y - 214 * s); // lid, open
    });
  }
  function valve(c, x, y, r, open, col, label) { // butterfly valve: disc lies along the flow when open (open=1)
    c.save(); c.fillStyle = 'rgba(8,0,24,0.9)'; c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); c.restore();
    neonStroke(c, col, 3, () => c.arc(x, y, r, 0, 7));
    const a = H.lerp(0, Math.PI / 2, open); // 0 = horizontal = closed (blocks a vertical pipe)
    neonStroke(c, open > 0.5 ? '#5cffb0' : '#ff3d7f', 4.5, () => { c.moveTo(x - Math.cos(a) * r * 0.82, y - Math.sin(a) * r * 0.82); c.lineTo(x + Math.cos(a) * r * 0.82, y + Math.sin(a) * r * 0.82); });
  }
  function neonDrop(c, x, y, s, col) { neonStroke(c, col, 3 * s, () => { c.moveTo(x, y - 70 * s); c.bezierCurveTo(x + 20 * s, y - 30 * s, x + 50 * s, y, x + 50 * s, y + 25 * s); c.arc(x, y + 25 * s, 50 * s, 0, Math.PI); c.bezierCurveTo(x - 50 * s, y, x - 20 * s, y - 30 * s, x, y - 70 * s); }); }
  function noSign(c, x, y, r, on) { if (on <= 0) return; c.save(); c.globalAlpha *= on; neonStroke(c, '#ff2a4a', 5, () => { c.moveTo(x + r, y); c.arc(x, y, r, 0, 7); c.moveTo(x - r * 0.7, y - r * 0.7); c.lineTo(x + r * 0.7, y + r * 0.7); }); c.restore(); }
  function fan(c, x, y, r, ang, col) {
    neonStroke(c, col, 3, () => { c.moveTo(x + r, y); c.arc(x, y, r, 0, 7); for (let i = 0; i < 5; i++) { const a = ang + i * Math.PI * 2 / 5; c.moveTo(x + Math.cos(a) * 8, y + Math.sin(a) * 8); c.quadraticCurveTo(x + Math.cos(a + 0.6) * r * 0.6, y + Math.sin(a + 0.6) * r * 0.6, x + Math.cos(a + 0.35) * r * 0.85, y + Math.sin(a + 0.35) * r * 0.85); } });
  }
  function truck(c, x, y, s, col) {
    neonStroke(c, col, 2.6 * s, () => { c.roundRect(x - 120 * s, y - 70 * s, 160 * s, 80 * s, 10 * s); c.moveTo(x + 40 * s, y - 50 * s); c.lineTo(x + 95 * s, y - 50 * s); c.lineTo(x + 120 * s, y - 15 * s); c.lineTo(x + 120 * s, y + 10 * s); c.lineTo(x + 40 * s, y + 10 * s);
      for (const wx of [-80, 80]) { c.moveTo(x + (wx + 20) * s, y + 14 * s); c.arc(x + wx * s, y + 14 * s, 20 * s, 0, 7); } });
  }
  function panel(c, x, y, w, h) {
    c.save(); const g = c.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, 'rgba(8,2,22,0.92)'); g.addColorStop(1, 'rgba(3,0,10,0.96)');
    c.fillStyle = g; c.beginPath(); c.roundRect(x, y, w, h, 22); c.fill(); c.restore();
    neonStroke(c, '#4ff3ff', 1.6, () => c.roundRect(x, y, w, h, 22));
    c.save(); c.strokeStyle = 'rgba(255,255,255,0.3)'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(x + 24, y + 6); c.lineTo(x + w - 24, y + 6); c.stroke(); c.restore();
  }
  const F = (px, w = 800) => `${w} ${px}px "Orbitron"`;
  // seeded air molecules in a disc; n of them shown
  const AIR = (() => { const r = H.rng(808), a = []; for (let i = 0; i < 320; i++) { const rr = Math.sqrt(r()) * 0.92, an = r() * 7; a.push([Math.cos(an) * rr, Math.sin(an) * rr, r() * 7, r.range(0.6, 1.4)]); } return a; })();
  const OUT = (() => { const r = H.rng(909), a = []; for (let i = 0; i < 120; i++) a.push([r(), r(), r() * 7, r.range(0.6, 1.4)]); return a; })();

  // ---------- scenes ----------
  function roadBG(ctx, t, tilt = 0, speed = 7) {
    ctx.fillStyle = '#05021a'; ctx.fillRect(0, 0, W, HH);
    if (tilt > 0) extraStars(ctx, 0, tilt + 60, 77);
    ctx.save(); ctx.translate(0, tilt);
    skyAndStars(ctx, t + 3); sun(ctx, VPX, HZ - 175, 290, t); mountains(ctx); floorAndRoad(ctx, t, speed);
    ctx.restore();
  }
  const tiltAt = (t) => {
    if (t < TILT_UP[0]) return 0;
    if (t < CUT.cabin) return 950 * E.inOut(ph(t, TILT_UP[0], TILT_UP[1]));
    if (t < TILT_DN[0]) return 950;
    return 950 * (1 - E.inOut(ph(t, TILT_DN[0], TILT_DN[1])));
  };

  function sHook(ctx, t) {
    const tilt = tiltAt(t);
    roadBG(ctx, t, tilt);
    // plane flies across the sun
    ctx.save(); ctx.translate(0, tilt);
    neonPlane(ctx, H.lerp(140, 980, t / 8), 975 - t * 6, 0.95, '#4ff3ff', 0, cl(t / 0.4));
    ctx.restore();
    // 35,000 FT on "thirty-five"
    const tn = P(1, 'thirtyfive');
    const tw0 = P(2, 'water') - 0.15;
    if (t > tn - 0.1 && t < tw0) {
      const p = ph(t, tn - 0.1, tn + 0.25), a = 1 - ph(t, PH[2].s - 0.2, tw0);
      ctx.save(); ctx.globalAlpha = cl(p * 4) * a; const sc = 1 + 1.2 * Math.pow(1 - p, 3); ctx.translate(540, 760); ctx.scale(sc, sc); ctx.translate(-540, -760);
      chromeTitle(ctx, '35,000 FT', 540, 800, 128); ctx.restore();
      neonText(ctx, 'CRUISING ALTITUDE', 540, 880, F(46), '#ffe066', flick(t, tn + 0.35) * a);
    }
    // water? barely.
    const tw = P(2, 'water');
    if (t > tw - 0.15 && t < TILT_UP[1]) {
      const a = 1 - ph(t, TILT_UP[0] + 0.2, TILT_UP[0] + 0.6);
      ctx.save(); ctx.globalAlpha = a * flick(t, tw - 0.15);
      neonDrop(ctx, 540, 560, 1.6, '#4ff3ff');
      neonText(ctx, 'WATER', 540, 800, F(96), '#4ff3ff', 1);
      const tb = P(2, 'barely');
      if (t > tb) { neonStroke(ctx, '#ff2a4a', 6, () => { ctx.moveTo(330, 800 - 6); ctx.lineTo(330 + 420 * E.out(ph(t, tb, tb + 0.25)), 800 - 6); }); neonText(ctx, 'BARELY', 540, 900, F(58), '#ff4fd8', flick(t, tb + 0.05)); }
      ctx.restore();
    }
    // tilt up into the sky: IT USES THE SKY
    const ts = P(3, 'sky');
    if (t > ts - 0.15) {
      const p = ph(t, ts - 0.15, ts + 0.2);
      ctx.save(); ctx.globalAlpha = cl(p * 4); const sc = 1 + 1.4 * Math.pow(1 - p, 3); ctx.translate(540, 900); ctx.scale(sc, sc); ctx.translate(-540, -900);
      chromeTitle(ctx, 'THE SKY', 540, 960, 168); ctx.restore();
      if (p >= 1) glint(ctx, 300 + ph(t, ts + 0.25, ts + 1.0) * 520, 880, 60, 0.9 * (t < ts + 1.0 ? 1 : 0));
      neonText(ctx, 'uses', 540, 760, '700 110px "Caveat"', '#ff4fd8', flick(t, P(3, 'uses')));
    }
  }

  function sCabin(ctx, t) {
    // night sky with a low horizon grid strip: we are inside the cross-section of the fuselage
    ctx.fillStyle = '#06021a'; ctx.fillRect(0, 0, W, HH);
    const g = ctx.createRadialGradient(540, 960, 200, 540, 960, 1100); g.addColorStop(0, '#2a0a52'); g.addColorStop(1, '#05021a'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    extraStars(ctx, 0, HH, 515);
    const cx = 540, cy = 930, s0 = P(4, 'cabin'), tb = P(5, 'balloon'), tth = P(6, 'thin'), tout = P(6, 'outside');
    const R = 360 * (1 + 0.035 * Math.sin(ph(t, tb - 0.1, tb + 0.5) * Math.PI)) * E.back(ph(t, CUT.cabin, CUT.cabin + 0.45));
    // outside: sparse molecules drifting past
    const outOn = ph(t, tout - 0.1, tout + 0.3);
    for (let i = 0; i < 26; i++) { const o = OUT[i]; let x = ((o[0] * W + t * 40 * o[3]) % W), y = o[1] * HH; if (Math.hypot(x - cx, y - cy) < R + 40 || y < 300 || y > 1650) continue; glowDot(ctx, x, y, 14, '#4ff3ff', outOn * 0.9); }
    // the cabin: packed with air
    ctx.save(); ctx.fillStyle = 'rgba(30,4,60,0.85)'; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.fill(); ctx.restore();
    const n = Math.floor(320 * E.out(ph(t, s0 - 0.2, tb + 0.3)));
    for (let i = 0; i < n; i++) { const a = AIR[i]; const x = cx + a[0] * R + Math.sin(t * 5 * a[3] + a[2]) * 7, y = cy - 30 + a[1] * R * 0.86 + Math.cos(t * 4.3 * a[3] + a[2]) * 7; if (y > cy + 190) continue; glowDot(ctx, x, y, 12, '#ff4fd8', 0.9); }
    // floor, seats and windows of the cross-section
    neonStroke(ctx, '#4ff3ff', 3.5, () => {
      ctx.moveTo(cx + R, cy); ctx.arc(cx, cy, R, 0, 7);
      const fy = cy + 200, fx = Math.sqrt(Math.max(0, R * R - 200 * 200)); ctx.moveTo(cx - fx, fy); ctx.lineTo(cx + fx, fy);
      for (const sx of [-230, -150, 70, 150]) { ctx.moveTo(cx + sx, fy); ctx.lineTo(cx + sx, fy - 60); ctx.lineTo(cx + sx + 60, fy - 60); ctx.moveTo(cx + sx + 4, fy - 60); ctx.lineTo(cx + sx - 4, fy - 150); }
      ctx.moveTo(cx - R + 22, cy - 40); ctx.lineTo(cx - R + 22, cy + 30); ctx.moveTo(cx + R - 22, cy - 40); ctx.lineTo(cx + R - 22, cy + 30);
    });
    // labels
    neonText(ctx, 'CABIN', 540, 470, F(84), '#4ff3ff', flick(t, s0 - 0.1));
    const tp = P(4, 'pressurized');
    if (t > tp - 0.15) { const p = ph(t, tp - 0.15, tp + 0.2); ctx.save(); ctx.globalAlpha = cl(p * 4); const sc = 1 + Math.pow(1 - p, 3); ctx.translate(540, 1400); ctx.scale(sc, sc); ctx.translate(-540, -1400); chromeTitle(ctx, 'HIGH', 540, 1430, 120); ctx.restore(); neonText(ctx, 'PRESSURE', 540, 1500, F(56), '#ff4fd8', flick(t, tp + 0.2)); }
    if (t > tb - 0.15) { ctx.save(); ctx.translate(790, 600); ctx.rotate(0.1); neonText(ctx, 'like a balloon', 0, 0, '700 76px "Caveat"', '#ffe066', flick(t, tb - 0.15)); ctx.restore(); }
    if (t > tth - 0.15) { const on = flick(t, tth - 0.15); ctx.save(); ctx.globalAlpha = on; panel(ctx, 230, 1555, 620, 100); ctx.restore(); neonText(ctx, 'OUTSIDE: THIN AIR', 540, 1606, F(50), '#4ff3ff', on); }
  }

  // schematic layout
  const BX = 540, BY = 600, VY = 960, TK = [380, 1210, 320, 200], VENT = [[700, 1250], [960, 1250], [960, 1080]];
  function sFlush(ctx, t) {
    ctx.fillStyle = '#06021a'; ctx.fillRect(0, 0, W, HH);
    // perspective neon grid floor for the "blueprint" set, plus a soft magenta wash
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = 'rgba(176,44,255,0.16)'; ctx.lineWidth = 1.5; ctx.beginPath();
    for (let x = 0; x <= W; x += 60) { ctx.moveTo(x, 0); ctx.lineTo(x, HH); } for (let y = 0; y <= HH; y += 60) { ctx.moveTo(0, y); ctx.lineTo(W, y); } ctx.stroke(); ctx.restore();
    const wg = ctx.createRadialGradient(540, 900, 100, 540, 900, 1000); wg.addColorStop(0, 'rgba(90,15,110,0.55)'); wg.addColorStop(1, 'rgba(5,2,26,0)'); ctx.fillStyle = wg; ctx.fillRect(0, 0, W, HH);
    const on = E.out(ph(t, CUT.flush, CUT.flush + 0.4));
    ctx.save(); ctx.globalAlpha = on;
    toiletBowl(ctx, BX, BY, 1, '#4ff3ff');
    // pipe walls
    neonStroke(ctx, '#b9a2ff', 2.4, () => { ctx.moveTo(BX - 30, BY + 232); ctx.lineTo(BX - 30, TK[1]); ctx.moveTo(BX + 30, BY + 232); ctx.lineTo(BX + 30, TK[1]); });
    // tank + vent
    ctx.save(); ctx.fillStyle = 'rgba(10,2,28,0.9)'; ctx.beginPath(); ctx.roundRect(...TK, 26); ctx.fill(); ctx.restore();
    neonStroke(ctx, '#ff4fd8', 3, () => ctx.roundRect(...TK, 26));
    neonText(ctx, 'TANK', TK[0] + TK[2] / 2, TK[1] + TK[3] / 2 + 10, F(56), '#ff4fd8', 1);
    neonStroke(ctx, '#b9a2ff', 2.4, () => { ctx.moveTo(...VENT[0]); ctx.lineTo(...VENT[1]); ctx.lineTo(...VENT[2]); });
    ctx.restore();
    // flush button
    const tpr = P(7, 'press'), pressed = t > tpr && t < tpr + 0.35 ? 1 : 0;
    ctx.save(); ctx.globalAlpha = on;
    neonText(ctx, 'FLUSH', 880, 495, F(46), '#ffe066', 1);
    const br = 62 * (pressed ? 0.86 : 1);
    ctx.save(); ctx.fillStyle = pressed ? 'rgba(255,224,102,0.45)' : 'rgba(30,8,50,0.9)'; ctx.beginPath(); ctx.arc(880, 400, br, 0, 7); ctx.fill(); ctx.restore();
    neonStroke(ctx, '#ffe066', 3, () => ctx.arc(880, 400, br, 0, 7));
    ctx.restore();
    if (t > tpr - 0.1) neonText(ctx, 'PRESS', 880, 300, F(52), '#ffe066', win(t, tpr - 0.1, P(8, 'valve') - 0.2));
    // the valve opens on "valve", shuts at CUT.plane (shown again on the plane scene)
    const tv = P(8, 'valve'), open = E.inOut(ph(t, tv, tv + 0.3));
    ctx.save(); ctx.globalAlpha = on; valve(ctx, BX, VY, 58, open, '#4ff3ff'); ctx.restore();
    if (t > tv - 0.1) neonText(ctx, 'VALVE', 330, VY, F(52), '#5cffb0', flick(t, tv - 0.1));
    if (t > tv) neonText(ctx, 'OPEN', 750, VY, F(52), '#5cffb0', win(t, tv + 0.15, P(10, 'high') - 0.3));
    // the open path to the thin outside air
    const pa = [[BX, BY + 200], [BX, TK[1] + 40], [VENT[0][0] - 60, VENT[0][1]], ...VENT];
    const t9a = P(9, 'bowl'), t9b = P(9, 'air');
    if (t > t9a - 0.1 && t < CUT.plane) neonPath(ctx, [[BX, BY + 200], [BX, TK[1] + 40], [700, 1250], [960, 1250], [960, 1060]], E.inOut(ph(t, t9a - 0.1, t9b)), '#5cffb0', 3.4);
    if (t > t9b - 0.2) {
      const oa = flick(t, t9b - 0.2);
      for (let i = 0; i < 8; i++) { const o = OUT[i + 30]; glowDot(ctx, 880 + o[0] * 180 + Math.sin(t * 2 + i) * 8, 830 + o[1] * 160, 13, '#4ff3ff', oa * 0.9); }
      neonText(ctx, 'THIN AIR', 900, 760, F(50), '#4ff3ff', oa);
    }
    // cabin pressure pushes down into the bowl
    const th = P(10, 'high');
    if (t > th - 0.15) {
      neonText(ctx, 'CABIN PRESSURE', 540, 330, F(54), '#ff4fd8', flick(t, th - 0.15), 'center');
      for (let i = 0; i < 3; i++) { const x = 430 + i * 110, k = ph(t, th + i * 0.1, th + 0.45 + i * 0.1), wob = Math.sin(t * 9 + i) * 6; neonPath(ctx, [[x, 395 + wob], [x + (540 - x) * 0.3, 520 + wob]], k, '#ff4fd8', 4); }
    }
    // everything gets shoved down the pipe (accelerating), then the WHOOSH
    const t11 = P(11, 'shoves'), t11e = P(11, 'pipe') + 0.35;
    if (t > t11 - 0.1 && t < t11e + 0.5) {
      const p = E.in(ph(t, t11 - 0.1, t11e));
      const y = H.lerp(BY + 120, TK[1] + 90, p), a = 1 - ph(t, t11e, t11e + 0.4);
      for (let k = 0; k < 7; k++) glowDot(ctx, BX, y - k * 26 * (0.3 + p), 44 - k * 4, '#ff4fd8', a * (1 - k / 8));
      ctx.save(); ctx.globalAlpha = a * cl(p * 3); neonStroke(ctx, '#ffe066', 2, () => { for (const dx of [-70, 70]) { ctx.moveTo(BX + dx, y - 160); ctx.lineTo(BX + dx, y - 40); } }); ctx.restore();
      if (p > 0.95) { const fill = ph(t, t11e - 0.05, t11e + 0.4); ctx.save(); ctx.globalAlpha = 0.4 * fill; ctx.fillStyle = '#ff4fd8'; ctx.beginPath(); ctx.roundRect(TK[0] + 10, TK[1] + TK[3] - 70 * fill, TK[2] - 20, 60 * fill, 14); ctx.fill(); ctx.restore(); }
    }
    if (t > t11e) { ctx.save(); ctx.globalAlpha = 0.4; ctx.fillStyle = '#ff4fd8'; ctx.beginPath(); ctx.roundRect(TK[0] + 10, TK[1] + TK[3] - 70, TK[2] - 20, 60, 14); ctx.fill(); ctx.restore(); }
    const twh = P(12, 'whoosh');
    if (t > twh - 0.15) {
      const p = ph(t, twh - 0.15, twh + 0.2);
      ctx.save(); ctx.globalAlpha = cl(p * 4); const sc = 1 + 1.5 * Math.pow(1 - p, 3); ctx.translate(540, 1560); ctx.scale(sc, sc); ctx.translate(-540, -1560);
      chromeTitle(ctx, 'WHOOSH!', 540, 1600, 150); ctx.restore();
      if (p >= 1 && t < twh + 1.0) glint(ctx, 240 + ph(t, twh + 0.25, twh + 1.0) * 600, 1510, 60, 0.9);
      const fl = Math.max(0, 1 - (t - twh) / 0.35); if (fl > 0 && t > twh) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(255,200,255,${0.3 * fl})`; ctx.fillRect(0, 0, W, HH); ctx.restore(); }
    }
  }

  function sPlane(ctx, t) {
    // up in the sky again: plane side view, the rear tank lights up, a 3-second timer, the valve shuts
    roadBG(ctx, t, 950, 9);
    const z = E.out(ph(t, CUT.plane - 0.1, CUT.plane + 0.6));
    const s = H.lerp(3.6, 1.95, z), x = H.lerp(540 + 165 * 3.6, 540, z), y = H.lerp(700, 960, z);
    neonPlane(ctx, x + Math.sin(t * 0.8) * 6, y + Math.sin(t * 1.3) * 5, s, '#4ff3ff', flick(t, P(13, 'tank') - 0.1), 1);
    const tt = P(13, 'tank'), tbk = P(13, 'back');
    if (t > tt - 0.1) {
      const px = 540 - 165 * 1.95, py = 960 + 15 * 1.95;
      neonPath(ctx, [[px + 40, 1290], [px, py + 40]], ph(t, tt - 0.1, tt + 0.3), '#ff4fd8', 3.4);
      neonText(ctx, 'TANK', px + 70, 1350, F(72), '#ff4fd8', flick(t, tt - 0.1));
      if (t > tbk - 0.15) neonText(ctx, 'at the back', px + 330, 1350, '700 84px "Caveat"', '#ffe066', flick(t, tbk - 0.15), 'left');
    }
    // 3-second timer
    const t3 = P(14, 'three'), tsec = P(14, 'seconds');
    if (t > t3 - 0.15) {
      const v = 3 * E.inOut(ph(t, t3 - 0.15, tsec + 0.25));
      ctx.save(); ctx.globalAlpha = flick(t, t3 - 0.15); panel(ctx, 210, 1440, 660, 210); ctx.restore();
      ctx.save(); ctx.globalAlpha = flick(t, t3 - 0.15); chromeTitle(ctx, v.toFixed(1) + ' SEC', 540, 1595, 124); ctx.restore();
    }
    // the valve inset: open, then slams shut
    const tsl = P(15, 'slams'), shut = E.back(ph(t, tsl - 0.05, tsl + 0.12));
    const ion = E.out(ph(t, CUT.plane + 0.2, CUT.plane + 0.5));
    if (ion > 0) {
      ctx.save(); ctx.globalAlpha = ion;
      valve(ctx, 540, 560, 100, 1 - cl(shut), '#4ff3ff');
      neonStroke(ctx, '#b9a2ff', 2, () => { ctx.moveTo(490, 430); ctx.lineTo(490, 460); ctx.moveTo(590, 430); ctx.lineTo(590, 460); ctx.moveTo(490, 660); ctx.lineTo(490, 690); ctx.moveTo(590, 660); ctx.lineTo(590, 690); });
      ctx.restore();
      neonText(ctx, 'VALVE', 840, 520, F(52), '#5cffb0', ion * (t < tsl ? 1 : 0));
      if (t >= tsl) { neonText(ctx, 'SHUT', 840, 560, F(84), '#ff3d7f', flick(t, tsl)); const fl = Math.max(0, 1 - (t - tsl) / 0.3); if (fl > 0) { ctx.save(); ctx.fillStyle = `rgba(255,30,80,${0.22 * fl})`; ctx.fillRect(0, 0, W, HH); ctx.restore(); } }
    }
  }

  function sAlt(ctx, t) {
    roadBG(ctx, t, 0, 4);
    const t16 = P(16, 'sixteen'), tbel = P(16, 'below'), tthin = P(17, 'thin'), tpu = P(18, 'pump'), tva = P(18, 'vacuum');
    const on = E.out(ph(t, CUT.alt, CUT.alt + 0.4));
    // altimeter scale on the left
    ctx.save(); ctx.globalAlpha = on;
    neonStroke(ctx, '#b9a2ff', 2.2, () => { ctx.moveTo(120, 380); ctx.lineTo(120, 1150); for (let i = 0; i <= 14; i++) { const y = H.lerp(1150, 380, i / 14); ctx.moveTo(120, y); ctx.lineTo(i % 2 ? 150 : 175, y); } });
    neonText(ctx, 'ALT', 135, 340, F(44), '#b9a2ff', 1);
    ctx.restore();
    const lineY = 690;
    if (t > t16 - 0.15) {
      const p = ph(t, t16 - 0.15, t16 + 0.25);
      ctx.save(); ctx.globalAlpha = flick(t, t16 - 0.15); ctx.setLineDash([26, 18]); ctx.lineDashOffset = -t * 60;
      neonStroke(ctx, '#ffe066', 2.6, () => { ctx.moveTo(120, lineY); ctx.lineTo(120 + 900 * E.out(p), lineY); }); ctx.restore();
      ctx.save(); ctx.globalAlpha = cl(p * 4); const sc = 1 + 1.3 * Math.pow(1 - p, 3); ctx.translate(590, 600); ctx.scale(sc, sc); ctx.translate(-590, -600);
      chromeTitle(ctx, '16,000 FT', 590, 640, 116); ctx.restore();
    }
    // plane cruises down below the line
    const py = H.lerp(560, 930, E.inOut(ph(t, CUT.alt, tbel + 0.6)));
    ctx.save(); neonPlane(ctx, 600 + Math.sin(t) * 10, py, 0.75, '#4ff3ff', 0, on); ctx.restore();
    // marker on the scale tracks the plane
    ctx.save(); ctx.globalAlpha = on; neonPath(ctx, [[230, py], [140, py]], 1, '#4ff3ff', 3); ctx.restore();
    if (t > tbel - 0.1) neonText(ctx, 'BELOW', 600, 1080, F(64), '#ff4fd8', flick(t, tbel - 0.1) * (1 - ph(t, tthin - 0.4, tthin - 0.1)));
    // thicker air around the plane
    if (t > tthin - 0.3) { const k = ph(t, tthin - 0.3, tthin + 0.6); for (let i = 0; i < 46 * k; i++) { const o = OUT[i]; glowDot(ctx, 210 + o[0] * 840 + Math.sin(t * 3 + i) * 6, 760 + o[1] * 380, 12, '#4ff3ff', 0.85); } neonText(ctx, 'NOT THIN ENOUGH', 600, 1080, F(56), '#4ff3ff', flick(t, tthin - 0.1)); }
    // the pump card on the road
    if (t > tpu - 0.6) {
      const a = flick(t, tpu - 0.6);
      ctx.save(); ctx.globalAlpha = a; panel(ctx, 140, 1300, 800, 330);
      fan(ctx, 330, 1465, 105, t * 14 * ph(t, tpu - 0.5, tpu), '#4ff3ff');
      ctx.restore();
      neonText(ctx, 'ELECTRIC', 660, 1395, F(48), '#b9a2ff', a);
      neonText(ctx, 'PUMP', 660, 1475, F(96), '#ff4fd8', flick(t, tpu - 0.1));
      neonText(ctx, '= VACUUM', 660, 1565, F(56), '#5cffb0', flick(t, tva - 0.1));
    }
  }

  function sSky(ctx, t) {
    const tilt = tiltAt(t);
    roadBG(ctx, t, tilt, 5);
    const tno = P(19, 'nothing'), tdu = P(19, 'dumped'), tsk = P(19, 'sky'), tgr = P(20, 'ground'), tem = P(20, 'empty'), tla = P(20, 'landing');
    // up high: the plane, a drop that never falls
    if (t < TILT_DN[1]) {
      ctx.save(); ctx.translate(0, tilt - 950);
      neonPlane(ctx, 540 + Math.sin(t) * 8, 640, 1.25, '#4ff3ff', 0.7, 1);
      if (t > tdu - 0.4) { const k = ph(t, tdu - 0.4, tdu + 0.1); ctx.save(); ctx.globalAlpha = 1 - 0.4 * ph(t, tdu, tdu + 0.3); neonDrop(ctx, 400, H.lerp(760, 900, E.out(k)), 1.0, '#ff4fd8'); ctx.restore(); noSign(ctx, 400, 905, 120, flick(t, tdu)); }
      ctx.restore();
      if (t > tno - 0.1) neonText(ctx, 'NOTHING', 540, 1180, F(104), '#ff3d7f', win(t, tno - 0.1, TILT_DN[0] - 0.1));
      if (t > tdu - 0.1) neonText(ctx, 'DUMPED', 540, 1300, F(104), '#ff3d7f', win(t, tdu - 0.1, TILT_DN[0] - 0.1));
    }
    // landed: plane on the road, the service truck hooks a hose to the tank
    if (t > TILT_DN[0]) {
      const a = E.out(ph(t, TILT_DN[0] + 0.2, TILT_DN[1]));
      ctx.save(); ctx.globalAlpha = a; neonPlane(ctx, 640, 1250, 0.95, '#4ff3ff', 1, 1); ctx.restore();
      if (t > tgr - 0.2) {
        const k = E.out(ph(t, tgr - 0.2, tgr + 0.4));
        ctx.save(); ctx.globalAlpha = flick(t, tgr - 0.2); truck(ctx, H.lerp(-100, 250, k), 1560, 1.25, '#ffe066'); ctx.restore();
        const hx0 = H.lerp(-100, 250, k) - 60, hy0 = 1490, hx1 = 640 - 165 * 0.95, hy1 = 1250 + 30;
        neonPath(ctx, [[hx0, hy0], [hx0 - 10, 1420], [hx1 - 60, 1400], [hx1, hy1]], ph(t, tem - 0.2, tem + 0.4), '#ff4fd8', 3.4, false);
        if (t > tem + 0.4 && t < CUT.end) for (let i = 0; i < 4; i++) { const u = ((t - tem) * 1.4 + i / 4) % 1; const pts = [[hx1, hy1], [hx1 - 60, 1400], [hx0 - 10, 1420], [hx0, hy0]]; const seg = Math.min(2, Math.floor(u * 3)), v = u * 3 - seg; glowDot(ctx, H.lerp(pts[seg][0], pts[seg + 1][0], v), H.lerp(pts[seg][1], pts[seg + 1][1], v), 20, '#ff4fd8', 0.9); }
      }
      neonText(ctx, 'EMPTIED', 540, 560, F(104), '#5cffb0', flick(t, tem - 0.1));
      if (t > tla - 0.15) { const p = ph(t, tla - 0.15, tla + 0.2); ctx.save(); ctx.globalAlpha = cl(p * 4); const sc = 1 + Math.pow(1 - p, 3); ctx.translate(540, 700); ctx.scale(sc, sc); ctx.translate(-540, -700); chromeTitle(ctx, 'AFTER', 540, 730, 110); chromeTitle(ctx, 'LANDING', 540, 870, 110); ctx.restore(); }
    }
  }

  function sEnd(ctx, t) {
    roadBG(ctx, t, 0, 9);
    const tn = P(21, 'next'), tbr = P(22, 'brave'), tpr = P(22, 'press');
    neonPlane(ctx, H.lerp(-200, 1300, ph(t, CUT.end, DURATION + 1)), 470, 0.6, '#b9a2ff', 0, 0.9);
    // giant neon flush button
    const pressed = t > tpr ? E.out(ph(t, tpr, tpr + 0.15)) * (1 - ph(t, tpr + 0.2, tpr + 0.5)) : 0;
    const br = 170 * E.back(ph(t, CUT.end, CUT.end + 0.4)) * (1 - 0.12 * pressed), pulse = 0.5 + 0.5 * Math.sin(t * 6);
    ctx.save(); ctx.fillStyle = `rgba(${40 + 180 * pressed},8,${60 + 40 * pressed},0.9)`; ctx.beginPath(); ctx.arc(540, 960, Math.max(1, br), 0, 7); ctx.fill(); ctx.restore();
    neonStroke(ctx, H.rgba(H.mix('#ff4fd8', '#ffffff', 0.25 * pulse + pressed * 0.6), 1), 5, () => ctx.arc(540, 960, Math.max(1, br), 0, 7));
    neonStroke(ctx, '#ff4fd8', 2, () => ctx.arc(540, 960, Math.max(1, br + 34 + 10 * pulse), 0, 7));
    neonText(ctx, 'FLUSH', 540, 965, F(72), '#ffe066', flick(t, CUT.end + 0.2));
    if (t > tn - 0.15) { ctx.save(); ctx.translate(540, 640); ctx.rotate(-0.06); neonText(ctx, 'next flight...', 0, 0, '700 120px "Caveat"', '#ff4fd8', flick(t, tn - 0.15)); ctx.restore(); }
    if (t > tbr - 0.15) { const p = ph(t, tbr - 0.15, tbr + 0.2); ctx.save(); ctx.globalAlpha = cl(p * 4); const sc = 1 + 1.3 * Math.pow(1 - p, 3); ctx.translate(540, 1420); ctx.scale(sc, sc); ctx.translate(-540, -1420); chromeTitle(ctx, 'BRAVE', 540, 1400, 128); chromeTitle(ctx, 'ENOUGH?', 540, 1560, 128); ctx.restore(); if (p >= 1) glint(ctx, 760, 1290, 46 * (0.75 + 0.25 * Math.sin(t * 4)), 0.8); }
    if (pressed > 0) { ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(255,200,255,${0.25 * pressed})`; ctx.fillRect(0, 0, W, HH); ctx.restore(); }
  }

  // ---------- header: the hook title slams in big, then glides into the top and stays ----------
  function header(ctx, t) {
    const pS = ph(t, 0.12, 0.5), pM = E.inOut(ph(t, PH[1].e + 0.1, PH[2].s + 0.05));
    if (t < 0.12) return;
    const fade = t > CUT.end - 0.2 ? 1 - ph(t, CUT.end - 0.2, CUT.end + 0.2) : 1;
    if (fade <= 0) return;
    const sc = (1 + 1.5 * Math.pow(1 - pS, 3)) * H.lerp(1, 0.46, pM);
    const cy = H.lerp(470, 225, pM);
    ctx.save(); ctx.globalAlpha = cl(pS * 4) * fade; ctx.translate(540, cy); ctx.scale(sc, sc); ctx.translate(-540, -470);
    if (pM < 0.5) { chromeTitle(ctx, 'PLANE', 540, 430, 150); chromeTitle(ctx, 'TOILET?', 540, 590, 150); }
    ctx.restore();
    if (pM >= 0.5) { ctx.save(); ctx.globalAlpha = fade * ph(pM, 0.5, 0.8); chromeTitle(ctx, 'PLANE TOILET?', 540, 250, 70); ctx.restore(); }
    if (pS >= 1 && t < 0.95) { const fl = Math.exp(-(t - 0.5) * 8); ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.fillStyle = `rgba(255,200,255,${0.35 * fl})`; ctx.fillRect(0, 0, W, HH); ctx.restore(); }
    if (t > 0.6 && t < 1.8) glint(ctx, 180 + (t - 0.6) / 1.2 * 720, 400, 56, 0.9);
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

  const ORDER = [['hook', 0, sHook], ['cabin', CUT.cabin, sCabin], ['flush', CUT.flush, sFlush], ['plane', CUT.plane, sPlane], ['alt', CUT.alt, sAlt], ['sky', CUT.sky, sSky], ['end', CUT.end, sEnd]];
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1]) i++;
    ORDER[i][2](ctx, t);
    header(ctx, t);
    // glitch around each hard cut (not the plane zoom, which is continuous)
    for (const [id, tc] of ORDER) { if (!tc || id === 'plane') continue; const d = Math.abs(t - tc); if (d < 0.22) glitch(ctx, 1 - d / 0.22, Math.floor(t * 30) + 7); }
    bloom(ctx, 0.3, 4);
    ctx.fillStyle = 'rgba(0,0,0,0.12)';
    for (let y = Math.floor(t * 20) % 4; y < Hd; y += 4) ctx.fillRect(0, y, Wd, 1.5);
    H.grain(ctx, Wd, Hd, 0.04, 12 + Math.floor(t * 12), true);
    H.vignette(ctx, Wd, Hd, 0.5, '6,0,20');
  }

  // ---------- SOUND: 80s night flight. Gated snares + saw stabs on the slams, neon strikes, analog zaps ----------
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
    const counter = (t0, t1, fn, step, play) => { let last = -1, lastV = fn(t0); for (let t = t0; t <= t1 + 1e-6; t += 1 / 120) { const v = fn(t); if (Math.abs(v - lastV) >= step && t - last >= 1 / 12) { play(t, v); last = t; lastV = v; lastV = v; } } };
    const jet = (t0, t1, g = 1) => k.noise(t0, { dur: t1 - t0, color: 'brown', filter: 'lowpass', f: 380, gain: 0.1 * g, a: 0.4, hold: t1 - t0 - 0.8, minor: true });

    k.music('pulse', 0.5, CUT.cabin, { bpm: 100, gain: 0.4, chords: [['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4']] });
    k.music('pad', CUT.cabin, CUT.flush, { bpm: 100, gain: 0.4, chords: [['F3', 'A3', 'C4', 'E4']] });
    k.music('pulse', CUT.flush, CUT.alt, { bpm: 100, gain: 0.38, chords: [['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['C4', 'E4', 'G4', 'B4'], ['G3', 'B3', 'D4', 'F4']] });
    k.music('pad', CUT.alt, END, { bpm: 100, gain: 0.4, chords: [['C4', 'E4', 'G4', 'B4'], ['F3', 'A3', 'C4', 'E4']] });
    k.bed('hiss', 0, END, { gain: 0.8 });
    jet(0, CUT.cabin); jet(CUT.plane, CUT.alt); jet(CUT.sky, TILT_DN[0], 0.8);

    // hook
    slam(0.4, ['A3', 'E4', 'A4', 'C5'], 1.1);
    k.noise(0.6, { dur: 1.2, color: 'pink', filter: 'bandpass', f: [[0, 900], [1.2, 2200]], q: 3, gain: 0.04, a: 0.4, pan: -0.6, minor: true });
    const tn = P(1, 'thirtyfive');
    slam(tn - 0.2, ['C4', 'G4', 'C5'], 0.9, 0.2); strike(tn + 0.35, 0.6, 0.3, true);
    k.noise(PH[1].e + 0.1, { dur: 0.6, color: 'brown', filter: 'lowpass', f: [[0, 500], [0.6, 200]], gain: 0.12, a: 0.25, minor: true });
    strike(P(2, 'water') - 0.15, 0.8); zap(P(2, 'barely'), 0.25, 900, 200, 1, 0.2, false); k.play('error', P(2, 'barely') + 0.05, { gain: 0.4 });
    k.noise(TILT_UP[0], { dur: 0.75, color: 'pink', filter: 'bandpass', f: [[0, 300], [0.7, 2400]], q: 1.4, gain: 0.16, a: 0.5 });
    strike(P(3, 'uses'), 0.6, -0.3, true);
    const ts = P(3, 'sky'); snare(ts + 0.05, 1.2); k.play('impact', ts + 0.05, { f: 70, gain: 0.8 }); stab(ts + 0.05, ['F3', 'C4', 'E4', 'A4', 'C5'], 1.2, 1.1);
    // cabin
    glitchS(CUT.cabin); k.play('boot', CUT.cabin, { gain: 0.5 });
    strike(P(4, 'cabin') - 0.1, 0.8, -0.2);
    for (let i = 0; i < 18; i++) k.play('blip', P(4, 'cabin') + i * 0.17, { f: ['A5', 'C6', 'E6', 'G6'][i % 4], gain: 0.5, minor: true });
    slam(P(4, 'pressurized') - 0.25, ['A3', 'E4', 'A4'], 0.8); strike(P(4, 'pressurized') + 0.2, 0.6, 0, true);
    k.tone(P(5, 'balloon') - 0.1, { f: [[0, 'C4'], [0.4, 'G4']], type: 'triangle', dur: 0.5, gain: 0.1, verb: 0.3 }); strike(P(5, 'balloon') - 0.15, 0.6, 0.5, true);
    k.noise(P(6, 'outside') - 0.1, { dur: 1.4, color: 'pink', filter: 'bandpass', f: [[0, 600], [1.4, 1800]], q: 2, gain: 0.08, a: 0.5, pan: 0.4, minor: true });
    strike(P(6, 'thin') - 0.15, 0.9, 0.3);
    // flush schematic
    glitchS(CUT.flush);
    const tpr = P(7, 'press'); k.play('click', tpr, { gain: 1.4 }); k.play('tock', tpr + 0.02, { f: 500, gain: 0.7 }); strike(tpr - 0.1, 0.5, 0.5, true);
    const tv = P(8, 'valve'); strike(tv - 0.1, 0.6, -0.5, true); k.tone(tv, { f: 'A2', type: 'sawtooth', dur: 0.35, gain: 0.07, a: 0.05, hold: 0.2, filter: 'lowpass', f2: [[0, 300], [0.3, 1600]], q: 6 }); k.play('tock', tv + 0.3, { f: 300, gain: 0.6 });
    zap(P(9, 'bowl') - 0.1, P(9, 'air') - P(9, 'bowl') + 0.1, 300, 1200, 1, 0.3);
    strike(P(9, 'air') - 0.2, 0.7, 0.6, true);
    const th = P(10, 'high'); strike(th - 0.15, 0.8); for (let i = 0; i < 3; i++) zap(th + i * 0.1, 0.4, 1200, 300, 0.7, -0.3 + i * 0.3);
    const t11 = P(11, 'shoves'), t11e = P(11, 'pipe') + 0.35;
    k.play('riser', t11 - 0.1, { dur: t11e - t11 + 0.1, gain: 0.8 });
    k.noise(t11 - 0.1, { dur: t11e - t11 + 0.3, color: 'pink', filter: 'bandpass', f: [[0, 400], [t11e - t11, 2600], [t11e - t11 + 0.3, 200]], q: 0.8, gain: 0.25, a: t11e - t11 });
    k.play('thud', t11e, { f: 80, gain: 0.7 });
    const twh = P(12, 'whoosh'); k.play('whoosh', twh - 0.3, { dur: 0.5, gain: 1.2 }); snare(twh + 0.05, 1.3); k.play('impact', twh + 0.05, { f: 70, gain: 1 }); stab(twh + 0.05, ['F3', 'C4', 'E4', 'A4', 'C5'], 1.3, 1.1);
    // plane + tank
    k.play('whoosh', CUT.plane - 0.2, { dur: 0.7, gain: 0.8, top: 1800 });
    strike(P(13, 'tank') - 0.1, 1, -0.4); zap(P(13, 'tank') - 0.1, 0.3, 400, 1000, 0.8, -0.4);
    strike(P(13, 'back') - 0.15, 0.6, 0.3, true);
    const t3 = P(14, 'three'), tsec = P(14, 'seconds'); strike(t3 - 0.15, 0.6, 0, true);
    counter(t3 - 0.15, tsec + 0.25, (t) => Math.round(30 * E.inOut(ph(t, t3 - 0.15, tsec + 0.25))) / 10, 0.1, (t) => k.noise(t, { dur: 0.012, filter: 'bandpass', f: 1800, q: 3, gain: 0.17, a: 0.0005, minor: true }));
    stab(tsec + 0.25, ['E4', 'A4', 'C5'], 0.7, 0.35);
    const tsl = P(15, 'slams'); k.play('stamp', tsl, { gain: 1.1 }); k.play('thud', tsl, { f: 70, gain: 0.9 }); strike(tsl, 0.9, 0.5);
    ['A3', 'Eb4', 'Bb4'].forEach((n, i) => k.tone(tsl, { f: [[0, n], [0.4, k.hz(n) * 0.8]], type: 'sawtooth', dur: 0.45, gain: 0.06, a: 0.004, hold: 0.2, filter: 'lowpass', f2: [[0, 2400], [0.4, 500]], verb: 0.3, pan: 0.4 + (i - 1) * 0.15 }));
    // altitude + pump
    glitchS(CUT.alt);
    slam(P(16, 'sixteen') - 0.25, ['G3', 'D4', 'G4', 'B4'], 1.1, 0.1);
    k.tone(CUT.alt + 0.2, { f: [[0, 900], [1.6, 300]], type: 'triangle', dur: 1.7, gain: 0.05, a: 0.1, hold: 1.2, minor: true });
    strike(P(16, 'below') - 0.1, 0.7, 0.2, true);
    for (let i = 0; i < 12; i++) k.play('pop', P(17, 'thin') - 0.3 + i * 0.07, { f: 700 + (i % 4) * 120, gain: 0.35, pan: (i % 5 - 2) * 0.3, minor: true });
    strike(P(17, 'thin') - 0.1, 0.7, 0, true);
    const tpu = P(18, 'pump'); strike(tpu - 0.6, 0.6, -0.3, true);
    k.tone(tpu - 0.5, { f: [[0, 60], [0.5, 220]], type: 'sawtooth', dur: 2.6, gain: 0.07, a: 0.4, hold: 1.6, filter: 'lowpass', f2: 700, q: 4 });
    k.play('buzz', tpu - 0.1, { f: 110, dur: 0.4, gain: 0.5 }); strike(tpu - 0.1, 0.9);
    strike(P(18, 'vacuum') - 0.1, 0.8, 0.3); stab(P(18, 'vacuum'), ['C4', 'E4', 'G4', 'C5'], 0.9, 0.5);
    // sky, landing
    glitchS(CUT.sky);
    const tdu = P(19, 'dumped'); strike(P(19, 'nothing') - 0.1, 0.9, -0.2); k.play('error', tdu, { gain: 0.6 }); strike(tdu - 0.1, 0.8, 0.2);
    k.noise(TILT_DN[0], { dur: 0.6, color: 'pink', filter: 'bandpass', f: [[0, 2000], [0.6, 300]], q: 1.4, gain: 0.14, a: 0.15 });
    k.play('thud', TILT_DN[1] - 0.1, { f: 60, gain: 0.6 });
    const tgr = P(20, 'ground'); k.noise(tgr - 0.2, { dur: 0.6, color: 'brown', filter: 'lowpass', f: 600, gain: 0.2, a: 0.1 }); strike(tgr - 0.2, 0.6, -0.5, true);
    const tem = P(20, 'empty'); strike(tem - 0.1, 0.8, 0); zap(tem - 0.2, 0.6, 300, 900, 0.8, -0.3);
    for (let i = 0; i < 8; i++) k.tone(tem + 0.4 + i * 0.18, { f: [[0, 300], [0.12, 120]], type: 'triangle', dur: 0.14, gain: 0.07, minor: true });
    slam(P(20, 'landing') - 0.25, ['C4', 'G4', 'C5'], 0.9);
    // payoff
    glitchS(CUT.end); k.play('boot', CUT.end + 0.1, { gain: 0.5 }); strike(CUT.end + 0.2, 0.8);
    strike(P(21, 'next') - 0.15, 1, -0.2);
    slam(P(22, 'brave') - 0.25, ['F3', 'C4', 'A4', 'C5'], 1.1);
    const tp2 = P(22, 'press'); k.play('click', tp2, { gain: 1.4 }); k.play('whoosh', tp2 + 0.05, { dur: 0.6, gain: 1.0 });
    k.tone(tp2 + 0.3, { f: 'B4', type: 'triangle', dur: 0.2, gain: 0.1, verb: 0.3 }); k.tone(tp2 + 0.48, { f: 'C5', type: 'triangle', dur: 1.0, gain: 0.12, verb: 0.4 });
    k.tone(tp2 + 0.48, { f: 'C3', type: 'sawtooth', dur: 1.0, gain: 0.06, a: 0.02, hold: 0.3, filter: 'lowpass', f2: 700 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
