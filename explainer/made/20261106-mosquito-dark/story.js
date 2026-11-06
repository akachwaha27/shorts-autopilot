// Flat-Vector Science, vertical 1080x1920: "How does a mosquito find you in the pitch dark?"
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [{"s":0.25,"e":2.69,"text":"How does a mosquito find you in the pitch dark?","words":[["how",0.25],["does",0.45],["a",0.71],["mosquito",0.78],["find",1.31],["you",1.57],["in",1.77],["the",1.9],["pitch",2.1],["dark",2.43]]},{"s":3.24,"e":4.02,"text":"Your breath.","words":[["your",3.24],["breath",3.55]]},{"s":4.57,"e":5.95,"text":"Only females hunt you,","words":[["only",4.57],["females",4.88],["hunt",5.41],["you",5.72]]},{"s":6.25,"e":8.27,"text":"because they need blood to make eggs.","words":[["because",6.25],["they",6.72],["need",6.99],["blood",7.26],["to",7.6],["make",7.73],["eggs",8.0]]},{"s":8.82,"e":10.25,"text":"Every time you breathe out,","words":[["every",8.82],["time",9.15],["you",9.41],["breathe",9.6],["out",10.05]]},{"s":10.55,"e":12.83,"text":"you leave a trail of carbon dioxide.","words":[["you",10.55],["leave",10.78],["a",11.18],["trail",11.26],["of",11.65],["carbon",11.81],["dioxide",12.28]]},{"s":13.38,"e":14.95,"text":"Scientists think she can smell it","words":[["scientists",13.38],["think",13.94],["she",14.22],["can",14.39],["smell",14.56],["it",14.84]]},{"s":15.25,"e":17.03,"text":"from up to fifty meters away,","words":[["from",15.25],["up",15.56],["to",15.72],["fifty",15.87],["meters",16.26],["away",16.72]]},{"s":17.33,"e":18.96,"text":"about half a football field.","words":[["about",17.33],["half",17.69],["a",17.97],["football",18.04],["field",18.61]]},{"s":19.51,"e":21.62,"text":"She follows that invisible trail.","words":[["she",19.51],["follows",19.74],["that",20.26],["invisible",20.57],["trail",21.25]]},{"s":22.17,"e":24.52,"text":"Closer in, she picks up your body odor.","words":[["closer",22.17],["in",22.64],["she",22.8],["picks",23.03],["up",23.43],["your",23.58],["body",23.9],["odor",24.21]]},{"s":25.07,"e":28.27,"text":"In daylight, she'd spot you from about fifteen meters,","words":[["in",25.07],["daylight",25.22],["shed",25.82],["spot",26.11],["you",26.41],["from",26.63],["about",26.93],["fifteen",27.3],["meters",27.82]]},{"s":28.57,"e":30.09,"text":"but tonight, that's no help.","words":[["but",28.57],["tonight",28.78],["thats",29.29],["no",29.66],["help",29.8]]},{"s":30.64,"e":32.21,"text":"So here's her secret weapon.","words":[["so",30.64],["heres",30.79],["her",31.14],["secret",31.36],["weapon",31.78]]},{"s":32.76,"e":34.59,"text":"Tiny pits on her antenna tips","words":[["tiny",32.76],["pits",33.07],["on",33.37],["her",33.52],["antenna",33.75],["tips",34.28]]},{"s":34.89,"e":37.38,"text":"sense the infrared heat your skin gives off,","words":[["sense",34.89],["the",35.23],["infrared",35.44],["heat",36.0],["your",36.27],["skin",36.55],["gives",36.83],["off",37.18]]},{"s":37.68,"e":39.68,"text":"from about seventy centimeters away.","words":[["from",37.68],["about",37.94],["seventy",38.26],["centimeters",38.72],["away",39.43]]},{"s":40.23,"e":42.46,"text":"In one lab study, adding that heat","words":[["in",40.23],["one",40.4],["lab",40.65],["study",40.89],["adding",41.31],["that",41.8],["heat",42.13]]},{"s":42.76,"e":44.89,"text":"doubled how hard mosquitoes searched.","words":[["doubled",42.76],["how",43.23],["hard",43.43],["mosquitoes",43.69],["searched",44.36]]},{"s":45.44,"e":47.02,"text":"Breath, then smell, then heat.","words":[["breath",45.44],["then",45.85],["smell",46.13],["then",46.47],["heat",46.75]]},{"s":47.57,"e":48.47,"text":"And she lands.","words":[["and",47.57],["she",47.82],["lands",48.06]]},{"s":49.02,"e":49.92,"text":"So tell me:","words":[["so",49.02],["tell",49.24],["me",49.69]]},{"s":50.22,"e":53.05,"text":"do mosquitoes always pick you, or someone else?","words":[["do",50.22],["mosquitoes",50.37],["always",51.11],["pick",51.56],["you",51.86],["or",52.08],["someone",52.23],["else",52.75]]}];
  const T = (i, w) => { const hit = BEATS[i].words.find((x) => x[0] === w); return hit ? hit[1] : BEATS[i].s; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const cut = (i) => BEATS[i].s - 0.25;
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { ink: '#1d1d3a', cream: '#fff6e6', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', teal: '#1fb6a6', green: '#58c26b', lime: '#b7e04a', yellow: '#ffd23f', pink: '#ff6fa3', purple: '#6b3fd4', white: '#ffffff', skin: '#f3c7a0', skin2: '#e0a878', hair: '#3a2a4d', night: '#0e1436' };
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 26, col = 'rgba(20,20,60,0.16)') => { ctx.save(); for (let i = len; i > 0; i -= 3) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 56, padX = size * 0.7, h = o.h || size * 1.7, w = measure(ctx, s, size) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 18);
    text(ctx, s, 0, 2, size, o.col || PAL.ink, o.weight || 700); ctx.restore();
  };
  const big = (ctx, s, x, y, size, col, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col), 20); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const stars = (ctx, t, seed, n, h) => { const r = H.rng(seed); for (let i = 0; i < n; i++) { const x = r() * W, y = r() * h, s = 2 + r() * 3; circle(ctx, x, y, s, `rgba(255,250,230,${0.3 + 0.7 * Math.abs(Math.sin(t * 2 + i))})`); } };
  // the mosquito: flat body, striped abdomen, blurred wings, faces +x
  const mosquito = (ctx, x, y, s, t, o = {}) => {
    const dir = o.dir || 1, col = o.col || '#2b2b4f', bob = Math.sin(t * 5 + x * 0.01) * 6;
    ctx.save(); ctx.translate(x, y + (o.still ? 0 : bob)); ctx.scale(s * dir, s); ctx.rotate(o.rot || 0);
    const body = (c) => {
      ctx.strokeStyle = c || col; ctx.lineCap = 'round'; ctx.lineWidth = 5;
      [[-20, 90, -60], [5, 100, 10], [25, 90, 70]].forEach(([bx, ky, fx]) => { ctx.beginPath(); ctx.moveTo(bx, 8); ctx.lineTo(bx + (fx - bx) * 0.4, ky * 0.55); ctx.lineTo(fx, ky + (o.still ? 8 : 0)); ctx.stroke(); });
      ctx.fillStyle = c || col; ctx.beginPath(); ctx.ellipse(-70, 6, 66, 18, 0.12, 0, Math.PI * 2); ctx.fill();
      circle(ctx, 8, 0, 28, c || col); circle(ctx, 44, -6, 18, c || col);
      ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(58, -2); ctx.lineTo(120, 16); ctx.stroke();
      ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(50, -18); ctx.quadraticCurveTo(70, -50, 104, -56); ctx.moveTo(44, -22); ctx.quadraticCurveTo(58, -60, 86, -74); ctx.stroke();
    };
    longShadow(ctx, body, o.sh ?? 12);
    ctx.fillStyle = PAL.cream; [-104, -80, -56, -32].forEach((bx) => { ctx.beginPath(); ctx.ellipse(bx, 6 - (bx + 70) * 0.12, 4.5, 15, 0.12, 0, Math.PI * 2); ctx.fill(); });
    circle(ctx, 50, -9, 7, o.eye || PAL.red);
    const fl = o.still ? 0.25 : Math.sin(t * 90) * 0.35;
    ctx.fillStyle = 'rgba(190,225,255,0.7)';
    [0.45 + fl, 0.8 - fl].forEach((a) => { ctx.save(); ctx.translate(0, -18); ctx.rotate(a); ctx.beginPath(); ctx.ellipse(-74, 0, 76, 20, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore(); });
    ctx.restore();
  };
  // a person asleep in bed, side-on
  const sleeper = (ctx, x, y, s, t, blanket = PAL.teal) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const br = Math.sin(t * 1.6) * 5;
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#7b4a2d'; rr(ctx, -320, 40, 640, 70, 16); ctx.fill(); ctx.fillRect(-320, 100, 36, 50); ctx.fillRect(284, 100, 36, 50); rr(ctx, -340, -70, 40, 220, 14); ctx.fill(); }, 16);
    ctx.fillStyle = PAL.cream; rr(ctx, -295, -28, 170, 72, 30); ctx.fill();
    circle(ctx, -200, -46, 60, PAL.skin); ctx.fillStyle = PAL.hair; ctx.beginPath(); ctx.arc(-205, -52, 62, Math.PI * 0.75, Math.PI * 1.75); ctx.fill();
    ctx.fillStyle = PAL.ink; ctx.fillRect(-182, -56, 24, 6);
    ctx.fillStyle = blanket; ctx.beginPath(); ctx.moveTo(-150, 44); ctx.quadraticCurveTo(-130, -60 - br, 40, -50 - br); ctx.quadraticCurveTo(240, -40, 300, 44); ctx.closePath(); ctx.fill();
    ctx.restore();
  };
  const wave = (ctx, x0, x1, y, amp, len, ph0, col, w) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); for (let x = x0; x <= x1; x += 10) { const yy = y + Math.sin(x / len + ph0) * amp; x === x0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy); } ctx.stroke(); };
  const puff = (ctx, x, y, r, col) => { circle(ctx, x, y, r, col); circle(ctx, x + r * 0.8, y + r * 0.1, r * 0.75, col); circle(ctx, x - r * 0.8, y + r * 0.15, r * 0.7, col); };

  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#070b24', '#1a1f55'); stars(ctx, t, 5, 50, 800);
    // window with moon
    ctx.fillStyle = '#26307a'; rr(ctx, 660, 300, 280, 340, 20); ctx.fill(); circle(ctx, 800, 440, 66, '#fff4d6'); ctx.fillStyle = '#10163f'; ctx.fillRect(794, 300, 12, 340); ctx.fillRect(660, 468, 280, 12);
    ctx.fillStyle = '#10143a'; ctx.fillRect(0, 1340, W, HH);
    sleeper(ctx, 540, 1230, 1.25, t, '#2d6f88');
    const k = pop(t, 0.2);
    pill(ctx, 'HOW?', 190, 230, { k: pop(t, 0.1), bg: PAL.yellow, size: 66 });
    big(ctx, 'PITCH', 340, 370, 130, PAL.cream, pop(t, T(0, 'pitch') - 0.15));
    big(ctx, 'DARK?', 340, 510, 130, PAL.yellow, pop(t, T(0, 'dark') - 0.15));
    // mosquito circling in
    const a = t * 1.3; mosquito(ctx, 620 + Math.cos(a) * 260, 840 + Math.sin(a * 1.4) * 90, 1.3, t, { dir: Math.sin(a) > 0 ? -1 : 1 });
    // breath glows on "breath"
    const b = BEATS[1].s, bk = EO(t, b - 0.15, b + 0.5);
    if (bk > 0) { for (let i = 0; i < 5; i++) { const u = (t * 0.45 + i / 5) % 1; ctx.save(); ctx.globalAlpha = bk * (1 - u) * 0.8; circle(ctx, 395 + u * 200, 1160 - u * 180, 18 + u * 46, PAL.lime); ctx.restore(); } pill(ctx, 'YOUR BREATH', 540, 1500, { k: pop(t, b - 0.12) * bump(t, b), bg: PAL.lime, size: 76 }); }
  };
  S.female = (ctx, t) => {
    sky(ctx, '#ffd6e4', '#ff9dbd'); ctx.fillStyle = '#f77ca4'; ctx.fillRect(0, 1370, W, HH);
    const fk = pop(t, T(2, 'females') - 0.15);
    pill(ctx, 'ONLY FEMALES', 540, 300, { k: pop(t, T(2, 'only') - 0.1) * bump(t, T(2, 'females')), bg: PAL.ink, col: PAL.cream, size: 78 });
    pill(ctx, 'HUNT YOU', 540, 450, { k: pop(t, T(2, 'hunt') - 0.15), bg: PAL.red, col: PAL.white, size: 62 });
    const a = EO(t, BEATS[2].s, BEATS[2].s + 0.5);
    mosquito(ctx, 540, 800, 2.5 * fk, t);
    // blood drop -> eggs
    const dk = pop(t, T(3, 'blood') - 0.15), ek = pop(t, T(3, 'eggs') - 0.15);
    if (dk > 0.01) { ctx.save(); ctx.translate(280, 1230); ctx.scale(dk, dk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.red; ctx.beginPath(); ctx.moveTo(0, -120); ctx.quadraticCurveTo(95, 10, 0, 70); ctx.quadraticCurveTo(-95, 10, 0, -120); ctx.fill(); }, 16); ctx.restore(); pill(ctx, 'BLOOD', 280, 1420, { k: dk, bg: PAL.red, col: PAL.white, size: 56 }); }
    if (ek > 0.01) {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.ink; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.globalAlpha = ek > 1 ? 1 : ek; ctx.beginPath(); ctx.moveTo(420, 1210); ctx.lineTo(620, 1210); ctx.stroke(); ctx.beginPath(); ctx.moveTo(650, 1210); ctx.lineTo(600, 1175); ctx.lineTo(600, 1245); ctx.fill(); ctx.restore();
      ctx.save(); ctx.translate(810, 1220); ctx.scale(ek, ek); [[-70, 30], [0, 30], [70, 30], [-35, -40], [35, -40], [0, -105]].forEach(([x, y]) => longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; ctx.beginPath(); ctx.ellipse(x, y, 38, 46, 0, 0, Math.PI * 2); ctx.fill(); }, 8)); ctx.restore();
      pill(ctx, 'EGGS', 810, 1420, { k: ek, bg: PAL.cream, size: 56 });
    }
  };
  const co2 = (ctx, x, y, r, a) => { ctx.save(); ctx.globalAlpha = a; circle(ctx, x, y, r, PAL.lime); if (r > 48) text(ctx, 'CO2', x, y + 2, 40, PAL.ink); ctx.restore(); };
  S.breath = (ctx, t) => {
    sky(ctx, '#123a63', '#1a6f8f');
    // big head in profile, facing right
    const hx = 240, hy = 900;
    longShadow(ctx, (c) => { circle(ctx, hx, hy, 210, c || PAL.skin); ctx.fillStyle = c || PAL.skin; ctx.beginPath(); ctx.moveTo(hx + 190, hy - 50); ctx.lineTo(hx + 265, hy + 30); ctx.lineTo(hx + 185, hy + 45); ctx.fill(); rr(ctx, hx - 110, hy + 150, 200, 480, 50); ctx.fill(); }, 24);
    ctx.fillStyle = PAL.hair; ctx.beginPath(); ctx.arc(hx - 12, hy - 18, 214, Math.PI * 0.82, Math.PI * 1.82); ctx.fill();
    circle(ctx, hx + 110, hy - 60, 15, PAL.ink);
    ctx.fillStyle = '#8e3d3d'; const open = 16 + Math.max(0, Math.sin(t * 2.6)) * 16; ctx.beginPath(); ctx.ellipse(hx + 165, hy + 95, 30, open, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = PAL.teal; rr(ctx, -40, hy + 480, 420, 400, 70); ctx.fill();
    // plume drifting out of the mouth
    const on = EO(t, T(4, 'breathe') - 0.2, T(4, 'out')), rt = H.rng(11);
    const grow = EO(t, BEATS[5].s, BEATS[5].e);
    for (let i = 0; i < 26; i++) { const off = rt(), jy = rt() * 2 - 1, u = (t * 0.28 + off) % 1; const reach = H.lerp(0.45, 1, grow); if (on <= 0 || u > reach) continue; const x = 420 + u * 680, y = 990 - u * 170 + jy * (30 + u * 190) + Math.sin(u * 8 + off * 6) * 26, r = 14 + u * 44 + off * 14; co2(ctx, x, y, r, on * (0.95 - u * 0.5)); }
    pill(ctx, 'EVERY BREATH', 540, 340, { k: pop(t, T(4, 'every') - 0.1), bg: PAL.cream, size: 72 });
    pill(ctx, 'A TRAIL OF', 700, 1370, { k: pop(t, T(5, 'trail') - 0.15), bg: PAL.ink, col: PAL.cream, size: 58 });
    pill(ctx, 'CARBON DIOXIDE', 590, 1510, { k: pop(t, T(5, 'carbon') - 0.15) * bump(t, T(5, 'dioxide')), bg: PAL.lime, size: 76 });
  };
  S.field = (ctx, t) => {
    ctx.fillStyle = '#3fa85b'; ctx.fillRect(0, 0, W, HH);
    const y0 = 1500, y50 = 420, yOf = (m) => H.lerp(y0, y50, m / 50);
    for (let m = 0; m < 50; m += 10) { ctx.fillStyle = m % 20 ? '#3fa85b' : '#4bb867'; ctx.fillRect(0, yOf(m + 10), W, yOf(m) - yOf(m + 10)); }
    ctx.fillStyle = '#2f8a48'; ctx.fillRect(0, y0, W, HH);
    ctx.fillStyle = PAL.white; for (let m = 0; m <= 50; m += 10) { ctx.fillRect(0, yOf(m) - 5, W, 10); text(ctx, String(m), 90, yOf(m) - 38, 46, PAL.white); }
    sleeper(ctx, 500, 1540, 0.62, t, PAL.orange);
    const reach = EO(t, T(7, 'up') - 0.1, T(7, 'meters')), top = H.lerp(0, 50, reach);
    // plume rising up the field
    const rt = H.rng(23); for (let i = 0; i < 44; i++) { const f = rt(), j = rt() * 2 - 1, u = (t * 0.1 + f) % 1, m = u * 52; if (m > Math.max(top, 8) + 1) continue; const y = yOf(m), x = 470 + j * (40 + m * 3.2) + Math.sin(m * 0.5 + f * 9) * 26; ctx.save(); ctx.globalAlpha = 0.6; circle(ctx, x, y, 22 + m * 0.5, PAL.lime); ctx.restore(); }
    // mosquito at the far end
    mosquito(ctx, 520, yOf(Math.max(top, 2)) - 30, 1.1 * pop(t, T(6, 'she') - 0.15), t, { dir: 1, rot: 1.2 });
    pill(ctx, 'SHE SMELLS IT', 620, 240, { k: pop(t, T(6, 'smell') - 0.15), bg: PAL.ink, col: PAL.cream, size: 66 });
    const n = Math.round(top), nk = pop(t, T(7, 'up') - 0.1) * bump(t, T(7, 'fifty') + 0.2);
    pill(ctx, n >= 50 ? '50 M' : `${n} M`, 790, 880, { k: nk, bg: n >= 50 ? PAL.orange : PAL.cream, col: n >= 50 ? PAL.white : PAL.ink, size: 130, h: 220 });
    pill(ctx, 'UP TO', 790, 720, { k: pop(t, T(7, 'up') - 0.15), bg: PAL.ink, col: PAL.cream, size: 52 });
    pill(ctx, 'HALF A FOOTBALL FIELD', 540, 1090, { k: pop(t, T(8, 'half') - 0.15), bg: PAL.cream, size: 62 });
  };
  S.trail = (ctx, t) => {
    sky(ctx, '#2c1a63', '#7d2f9b'); stars(ctx, t, 9, 40, 900);
    ctx.fillStyle = '#1e1148'; ctx.fillRect(0, 1460, W, HH);
    const s = T(9, 'follows'), p = EI(t, s - 0.2, BEATS[9].e + 0.2);
    const pathX = (u) => 120 + u * 840, pathY = (u) => 500 + u * 780 + Math.sin(u * 9) * 130;
    ctx.strokeStyle = 'rgba(183,224,74,0.85)'; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.setLineDash([6, 38]); ctx.lineDashOffset = -t * 100; ctx.beginPath(); for (let u = 0; u <= 1.001; u += 0.02) { u === 0 ? ctx.moveTo(pathX(u), pathY(u)) : ctx.lineTo(pathX(u), pathY(u)); } ctx.stroke(); ctx.setLineDash([]);
    const rt = H.rng(31); for (let i = 0; i < 18; i++) { const u = rt(); ctx.save(); ctx.globalAlpha = 0.22; circle(ctx, pathX(u) + (rt() - 0.5) * 120, pathY(u) + (rt() - 0.5) * 120, 40 + rt() * 40, PAL.lime); ctx.restore(); }
    const u = H.lerp(0.02, 0.86, p), du = 0.01, ang = Math.atan2(pathY(u + du) - pathY(u), pathX(u + du) - pathX(u));
    mosquito(ctx, pathX(u), pathY(u), 1.5, t, { rot: ang * 0.6 });
    pill(ctx, 'FOLLOW THE TRAIL', 540, 300, { k: pop(t, T(9, 'follows') - 0.15) * bump(t, T(9, 'trail')), bg: PAL.lime, size: 76 });
  };
  S.odor = (ctx, t) => {
    sky(ctx, '#123e3a', '#1f7a62'); ctx.fillStyle = '#0d2f2b'; ctx.fillRect(0, 1340, W, HH);
    sleeper(ctx, 540, 1230, 1.25, t, PAL.orange);
    const on = EO(t, T(10, 'body') - 0.3, T(10, 'odor') + 0.1);
    if (on > 0) for (let i = 0; i < 6; i++) { ctx.save(); ctx.globalAlpha = on * 0.8; wave(ctx, 170 + i * 120, 260 + i * 120, 0, 0, 1, 0, 'transparent', 1); ctx.strokeStyle = PAL.lime; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.beginPath(); const bx = 200 + i * 135; for (let j = 0; j <= 16; j++) { const yy = 1110 - j * 20 - ((t * 60 + i * 20) % 20); const xx = bx + Math.sin(j * 0.7 + t * 3 + i) * 26; j === 0 ? ctx.moveTo(xx, yy) : ctx.lineTo(xx, yy); } ctx.stroke(); ctx.restore(); }
    mosquito(ctx, 780 - EO(t, BEATS[10].s, BEATS[10].e) * 180, 640, 1.5, t, { dir: -1 });
    pill(ctx, 'CLOSER IN...', 540, 300, { k: pop(t, T(10, 'closer') - 0.1), bg: PAL.cream, size: 72 });
    pill(ctx, 'BODY ODOR', 540, 1520, { k: pop(t, T(10, 'body') - 0.15) * bump(t, T(10, 'odor')), bg: PAL.lime, size: 88 });
  };
  const eye = (ctx, x, y, s, crossed) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; ctx.beginPath(); ctx.moveTo(-130, 0); ctx.quadraticCurveTo(0, -115, 130, 0); ctx.quadraticCurveTo(0, 115, -130, 0); ctx.fill(); }, 14);
    circle(ctx, 0, 0, 52, PAL.blue); circle(ctx, 0, 0, 26, PAL.ink);
    if (crossed > 0) { ctx.strokeStyle = PAL.red; ctx.lineWidth = 24; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-130, -110); ctx.lineTo(H.lerp(-130, 130, crossed), H.lerp(-110, 110, crossed)); ctx.stroke(); }
    ctx.restore();
  };
  S.vision = (ctx, t) => {
    sky(ctx, '#7fd1ff', '#d8f3ff');
    circle(ctx, 930, 480, 80, PAL.yellow);
    ctx.fillStyle = '#6fc36f'; ctx.fillRect(0, 1380, W, HH);
    // person standing right
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.orange; rr(ctx, 790, 1040, 130, 260, 44); ctx.fill(); ctx.fillStyle = c || PAL.ink; ctx.fillRect(805, 1290, 42, 100); ctx.fillRect(863, 1290, 42, 100); circle(ctx, 855, 970, 70, c || PAL.skin); }, 16);
    mosquito(ctx, 200, 1060, 1.1, t);
    const lk = EO(t, T(11, 'spot') - 0.1, T(11, 'you') + 0.3);
    if (lk > 0) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 12; ctx.setLineDash([24, 26]); ctx.beginPath(); ctx.moveTo(320, 1060); ctx.lineTo(H.lerp(320, 770, lk), 1060); ctx.stroke(); ctx.restore(); }
    pill(ctx, '15 M', 545, 930, { k: pop(t, T(11, 'fifteen') - 0.15) * bump(t, T(11, 'meters')), bg: PAL.orange, col: PAL.white, size: 120, h: 190 });
    pill(ctx, 'IN DAYLIGHT', 540, 300, { k: pop(t, T(11, 'daylight') - 0.15), bg: PAL.cream, size: 72 });
    const dark = EO(t, T(12, 'tonight') - 0.15, T(12, 'tonight') + 0.25);
    if (dark > 0) { ctx.fillStyle = `rgba(7,10,36,${dark * 0.97})`; ctx.fillRect(0, 0, W, HH); }
    eye(ctx, 540, 640, 1.5 * pop(t, T(11, 'spot') - 0.15), EO(t, T(12, 'no') - 0.15, T(12, 'no') + 0.15));
    if (dark > 0) pill(ctx, 'NO HELP AT NIGHT', 540, 930, { k: pop(t, T(12, 'no') - 0.15), bg: PAL.red, col: PAL.white, size: 76 });
  };
  S.weapon = (ctx, t) => {
    sky(ctx, '#2a0f55', '#6b3fd4');
    ctx.save(); ctx.translate(540, 900); ctx.rotate(t * 0.2); ctx.fillStyle = 'rgba(255,255,255,0.07)'; for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 1300, a, a + 0.26); ctx.fill(); } ctx.restore();
    big(ctx, 'SECRET', 540, 480, 150, PAL.cream, pop(t, T(13, 'secret') - 0.15));
    big(ctx, 'WEAPON', 540, 640, 150, PAL.yellow, pop(t, T(13, 'weapon') - 0.15));
    mosquito(ctx, 500, 1080, 2.4, t, { eye: PAL.yellow });
  };
  S.antenna = (ctx, t) => {
    sky(ctx, '#160b35', '#34155e');
    const zoom = EI(t, BEATS[14].s, BEATS[14].s + 0.8);
    // skin far below, glowing
    const irOn = EO(t, T(15, 'infrared') - 0.2, T(15, 'heat'));
    ctx.fillStyle = PAL.skin2; ctx.fillRect(0, 1430, W, HH); ctx.fillStyle = PAL.skin; ctx.fillRect(0, 1430, W, 30);
    if (irOn > 0) { const g = ctx.createLinearGradient(0, 1020, 0, 1430); g.addColorStop(0, 'rgba(255,90,40,0)'); g.addColorStop(1, `rgba(255,90,40,${irOn * 0.6})`); ctx.fillStyle = g; ctx.fillRect(0, 1020, W, 410);
      for (let i = 0; i < 5; i++) { const u = (t * 0.5 + i / 5) % 1, y = 1420 - u * 420; ctx.save(); ctx.globalAlpha = irOn * (1 - u); wave(ctx, 120, 900, y, 16, 44, t * 3 + i, i % 2 ? PAL.orange : PAL.red, 12); ctx.restore(); } }
    // magnified antenna: a long tapered shape, tip lower-right, with pits along it
    ctx.save();
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#2b2b4f'; ctx.beginPath(); ctx.moveTo(-40, 320); ctx.quadraticCurveTo(420, 300, 840, 660); ctx.lineTo(800, 712); ctx.quadraticCurveTo(400, 430, -40, 480); ctx.closePath(); ctx.fill(); }, 20);
    ctx.fillStyle = '#4a4a78'; ctx.beginPath(); ctx.moveTo(-40, 340); ctx.quadraticCurveTo(420, 320, 835, 665); ctx.lineTo(825, 678); ctx.quadraticCurveTo(410, 350, -40, 372); ctx.closePath(); ctx.fill();
    ctx.restore();
    circle(ctx, -10, 400, 150, '#2b2b4f'); circle(ctx, 70, 500, 34, PAL.red);
    // pits light up one by one
    const pts = [[520, 500], [600, 548], [675, 600], [745, 650], [790, 675]];
    pts.forEach(([x, y], i) => { const k = pop(t, T(14, 'pits') - 0.1 + i * 0.1); if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k * (1 + zoom * 0.1), k * (1 + zoom * 0.1)); circle(ctx, 0, 0, 24, irOn > 0 ? PAL.orange : PAL.yellow); circle(ctx, 0, 0, 11, PAL.ink); ctx.restore(); });
    pill(ctx, 'TINY PITS', 310, 660, { k: pop(t, T(14, 'pits') - 0.15), bg: PAL.yellow, size: 66 });
    pill(ctx, 'ANTENNA TIPS', 540, 240, { k: pop(t, T(14, 'antenna') - 0.15), bg: PAL.cream, size: 72 });
    pill(ctx, 'INFRARED HEAT', 400, 860, { k: pop(t, T(15, 'infrared') - 0.15) * bump(t, T(15, 'heat')), bg: PAL.orange, col: PAL.white, size: 76 });
    pill(ctx, 'YOUR SKIN', 790, 1540, { k: pop(t, T(15, 'skin') - 0.15), bg: PAL.cream, size: 56 });
    // the 70 cm ruler from skin to tip
    const rk = EO(t, T(16, 'seventy') - 0.2, T(16, 'centimeters'));
    if (rk > 0) { const yTop = H.lerp(1430, 720, rk); ctx.strokeStyle = PAL.cream; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(800, 1430); ctx.lineTo(800, yTop); ctx.stroke(); ctx.beginPath(); ctx.moveTo(765, yTop); ctx.lineTo(835, yTop); ctx.stroke(); }
    pill(ctx, '70 CM', 450, 1130, { k: pop(t, T(16, 'seventy') - 0.15) * bump(t, T(16, 'centimeters')), bg: PAL.red, col: PAL.white, size: 130, h: 220 });
  };
  S.study = (ctx, t) => {
    sky(ctx, '#e8fbff', '#b5ecf5'); ctx.fillStyle = '#4bb6c8'; ctx.fillRect(0, 1370, W, HH);
    pill(ctx, 'ONE LAB STUDY', 540, 300, { k: pop(t, T(17, 'lab') - 0.15), bg: PAL.ink, col: PAL.cream, size: 72 });
    const base = 1370, g1 = EO(t, T(17, 'lab'), T(17, 'adding')), g2 = EO(t, T(17, 'heat') - 0.2, T(18, 'doubled') + 0.2);
    const bar = (x, h, col) => longShadow(ctx, (c) => { ctx.fillStyle = c || col; rr(ctx, x - 130, base - h, 260, h, 26); ctx.fill(); }, 20);
    if (g1 > 0) bar(290, 340 * g1, PAL.blue);
    if (g2 > 0) bar(780, 680 * g2, PAL.orange);
    text(ctx, 'NO HEAT', 290, 1460, 58, PAL.ink); text(ctx, '+ HEAT', 780, 1460, 58, PAL.ink);
    const dk = pop(t, T(18, 'doubled') - 0.15) * bump(t, T(18, 'doubled'));
    pill(ctx, '2X', 290, 780, { k: dk, bg: PAL.red, col: PAL.white, size: 170, h: 260 });
    pill(ctx, 'THE SEARCHING', 540, 460, { k: pop(t, T(18, 'searched') - 0.15), bg: PAL.cream, size: 62 });
    mosquito(ctx, 780, 610 + Math.sin(t * 4) * 16, 0.9 * pop(t, T(18, 'hard') - 0.15), t);
  };
  S.recap = (ctx, t) => {
    sky(ctx, '#0f2f3f', '#0f5e5a');
    const cards = [['BREATH', T(19, 'breath'), PAL.lime, PAL.ink, 340], ['SMELL', T(19, 'smell'), PAL.yellow, PAL.ink, 780], ['HEAT', T(19, 'heat'), PAL.orange, PAL.white, 1220]];
    cards.forEach(([s, tt, bg, col, y], i) => { const k = pop(t, tt - 0.15) * bump(t, tt); if (k <= 0.01) return; ctx.save(); ctx.translate(540, y); ctx.scale(k, k);
      longShadow(ctx, (c) => { ctx.fillStyle = c || bg; rr(ctx, -400, -170, 800, 340, 44); ctx.fill(); }, 22); text(ctx, s, 100, 4, 112, col); 
      ctx.save(); ctx.translate(-250, 0);
      if (i === 0) { puff(ctx, 0, 0, 60, PAL.cream); }
      if (i === 1) { for (let j = -1; j <= 1; j++) { ctx.strokeStyle = PAL.ink; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.beginPath(); for (let q = 0; q <= 10; q++) { const yy = 80 - q * 16, xx = j * 44 + Math.sin(q * 0.9) * 12; q ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); } }
      if (i === 2) { ctx.fillStyle = PAL.cream; ctx.beginPath(); ctx.moveTo(0, -95); ctx.quadraticCurveTo(80, 0, 40, 60); ctx.quadraticCurveTo(0, 105, -40, 60); ctx.quadraticCurveTo(-80, 0, 0, -95); ctx.fill(); }
      ctx.restore(); ctx.restore(); });
  };
  S.land = (ctx, t) => {
    sky(ctx, '#ffb86b', '#ff8a5c'); ctx.fillStyle = PAL.skin; ctx.fillRect(0, 1180, W, HH); ctx.fillStyle = PAL.skin2; ctx.fillRect(0, 1180, W, 26);
    const l = T(20, 'lands'), u = EO(t, BEATS[20].s - 0.1, l + 0.1), y = H.lerp(450, 1010, u);
    mosquito(ctx, 520, y, 2.6, t, { still: u >= 1 });
    big(ctx, 'SHE LANDS', 540, 400, 132, PAL.ink, pop(t, l - 0.15));
  };
  S.ask = (ctx, t) => {
    sky(ctx, '#1b1650', '#7a2fbf'); stars(ctx, t, 17, 30, 1000);
    big(ctx, 'ALWAYS', 540, 370, 136, PAL.cream, pop(t, T(22, 'always') - 0.15));
    const fig = (x, col, k) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, 1190); ctx.scale(k, k); longShadow(ctx, (c) => { ctx.fillStyle = c || col; rr(ctx, -95, -120, 190, 340, 60); ctx.fill(); circle(ctx, 0, -210, 92, c || PAL.skin); }, 18); ctx.restore(); };
    const ky = pop(t, T(22, 'you') - 0.15), ks = pop(t, T(22, 'someone') - 0.15);
    fig(210, PAL.orange, ky); fig(810, PAL.teal, ks);
    pill(ctx, 'YOU?', 190, 1500, { k: ky * bump(t, T(22, 'you')), bg: PAL.orange, col: PAL.white, size: 76 });
    pill(ctx, 'SOMEONE ELSE?', 720, 1500, { k: ks * bump(t, T(22, 'else')), bg: PAL.teal, col: PAL.white, size: 62 });
    const sway = Math.sin(t * 2.1) * 200; mosquito(ctx, 540 + sway, 700, 1.4, t, { dir: Math.cos(t * 2.1) > 0 ? 1 : -1 });
    pill(ctx, 'TELL ME', 540, 560, { k: pop(t, T(21, 'tell') - 0.15, T(22, 'always') - 0.3), bg: PAL.yellow, size: 66 });
  };
  const ORDER = [['hook', 0], ['female', cut(2)], ['breath', cut(4)], ['field', cut(6)], ['trail', cut(9)], ['odor', cut(10)], ['vision', cut(11)], ['weapon', cut(13)], ['antenna', cut(14)], ['study', cut(17)], ['recap', cut(19)], ['land', cut(20)], ['ask', cut(21)]];
  const WIPE = 0.5;
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1] - WIPE / 2) i++;
    const cur = ORDER[i], next = ORDER[i + 1];
    if (next && t >= next[1] - WIPE / 2) {
      const u = H.ease.inOut(ph(t, next[1] - WIPE / 2, next[1] + WIPE / 2));
      if (u < 1) S[cur[0]](ctx, t);
      ctx.save(); ctx.beginPath(); ctx.arc(540, 960, u * 1300, 0, Math.PI * 2); ctx.clip(); S[next[0]](ctx, t); ctx.restore();
      if (u > 0 && u < 1) { ctx.strokeStyle = PAL.cream; ctx.lineWidth = 24; ctx.beginPath(); ctx.arc(540, 960, u * 1300, 0, Math.PI * 2); ctx.stroke(); }
    } else S[cur[0]](ctx, t);
    H.vignette(ctx, Wd, Hd, 0.16, '40,20,60');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }
  function scoreSound(k) {
    const D = DURATION;
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    const wipe = (t) => { k.play('whoosh', t - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); k.play('tock', t + 0.2, { f: 420, gain: 0.5 }); };
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 100, gain: 0.3, chords: [['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['C4', 'E4', 'G4', 'B4'], ['G3', 'B3', 'D4', 'F4']] });
    for (let i = 0; i < 6; i++) k.tone(0.1 + i * 0.6, { f: [[0, 880], [0.3, 960], [0.5, 900]], dur: 0.5, gain: 0.025, pan: Math.sin(i) * 0.6, minor: true });
    popAt(T(0, 'pitch') - 0.15, 520, 0.9, 0, false); popAt(T(0, 'dark') - 0.15, 600, 0.9, 0, false);
    k.play('ding', BEATS[1].s, { f: 'E6', gain: 0.35 }); popAt(BEATS[1].s - 0.12, 700, 0.9, 0, false);
    ORDER.slice(1).forEach((o) => wipe(o[1]));
    popAt(T(2, 'only') - 0.1, 560, 0.8, 0, false); popAt(T(2, 'hunt') - 0.15, 480, 0.7);
    k.play('thud', T(3, 'blood'), { f: 130, gain: 0.5, pan: -0.4 }); popAt(T(3, 'eggs') - 0.15, 900, 0.8, 0.4, false);
    popAt(T(4, 'every') - 0.1, 620, 0.7);
    k.noise(T(4, 'breathe') - 0.2, { dur: 1.6, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.8, 1700], [1.6, 500]], q: 0.8, gain: 0.18, a: 0.3, verb: 0.2 });
    popAt(T(5, 'trail') - 0.15, 700, 0.7, 0.3); popAt(T(5, 'carbon') - 0.15, 620, 0.9, 0, false); k.play('ding', T(5, 'dioxide'), { f: 'A5', gain: 0.3 });
    popAt(T(6, 'smell') - 0.15, 580, 0.8, 0.2, false);
    for (let f = Math.ceil((T(7, 'up') - 0.1) * 12); f < T(7, 'meters') * 12; f += 2) k.play('tick', f / 12, { f: 3200, gain: 0.8, minor: true });
    k.play('stamp', T(7, 'meters'), { gain: 0.5 }); k.play('impact', T(7, 'meters'), { gain: 0.6 });
    popAt(T(8, 'half') - 0.15, 760, 0.8, 0, false);
    k.play('swish', T(9, 'follows') - 0.2, { gain: 0.6 }); popAt(T(9, 'follows') - 0.15, 640, 0.8, 0, false);
    popAt(T(10, 'closer') - 0.1, 600, 0.7); popAt(T(10, 'body') - 0.15, 480, 0.9, 0, false); k.play('buzz', T(10, 'odor'), { f: 110, dur: 0.25, gain: 0.35 });
    popAt(T(11, 'daylight') - 0.15, 620, 0.7); popAt(T(11, 'fifteen') - 0.15, 700, 0.9, 0, false); k.play('stamp', T(11, 'meters'), { gain: 0.4 });
    k.play('thud', T(12, 'tonight'), { f: 90, gain: 0.7 }); k.play('error', T(12, 'no'), { f: 'A3', gain: 0.45 });
    k.play('riser', BEATS[13].s - 0.1, { dur: 1.0, gain: 0.6 }); k.play('impact', T(13, 'weapon'), { gain: 0.9 }); k.play('sparkle', T(13, 'weapon'), { n: 6, gain: 0.6 });
    for (let i = 0; i < 5; i++) k.play('tock', T(14, 'pits') - 0.1 + i * 0.1, { f: 500 + i * 70, gain: 0.4, minor: true });
    popAt(T(14, 'antenna') - 0.15, 620, 0.7);
    k.play('riser', T(15, 'infrared') - 0.2, { dur: 0.9, gain: 0.5 }); popAt(T(15, 'infrared') - 0.15, 560, 0.9, 0, false); popAt(T(15, 'skin') - 0.15, 800, 0.6, 0.4);
    for (let f = Math.ceil((T(16, 'seventy') - 0.2) * 12); f < T(16, 'centimeters') * 12; f += 2) k.play('tick', f / 12, { f: 2800, gain: 0.7, minor: true });
    k.play('stamp', T(16, 'centimeters'), { gain: 0.5 });
    popAt(T(17, 'lab') - 0.15, 620, 0.7); k.play('impact', T(18, 'doubled'), { gain: 0.9 }); k.play('ding', T(18, 'doubled'), { f: 'C6', gain: 0.35 }); popAt(T(18, 'searched') - 0.15, 760, 0.6);
    [['breath', 'C5'], ['smell', 'E5'], ['heat', 'G5']].forEach(([w, n], i) => { popAt(T(19, w) - 0.15, 520 + i * 90, 0.9, 0, false); k.play('ding', T(19, w), { f: n, gain: 0.32 }); });
    k.play('whoosh', BEATS[20].s - 0.1, { dur: 0.45, gain: 0.7 }); k.play('thud', T(20, 'lands'), { f: 150, gain: 0.8 }); k.play('impact', T(20, 'lands'), { gain: 0.6 });
    popAt(T(21, 'tell') - 0.15, 700, 0.7); popAt(T(22, 'always') - 0.15, 560, 0.8, 0, false); popAt(T(22, 'you') - 0.15, 640, 0.8, -0.4, false); popAt(T(22, 'someone') - 0.15, 760, 0.8, 0.4, false); k.play('success', T(22, 'else') + 0.3, { f: 'C6', gain: 0.35 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
