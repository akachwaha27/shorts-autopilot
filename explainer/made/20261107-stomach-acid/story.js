// Flat-Vector Science, vertical 1080x1920: "Why doesn't your stomach digest itself?"
// Unattended run: no storyboard step (STUDIO.md), test frames checked instead.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [{"s":0.25,"e":2.29,"text":"Your stomach acid dissolves metal,","words":[["your",0.25],["stomach",0.53],["acid",1.03],["dissolves",1.31],["metal",1.94]]},{"s":2.59,"e":4.32,"text":"so how does your stomach survive it,","words":[["so",2.59],["how",2.71],["does",2.89],["your",3.13],["stomach",3.37],["survive",3.79],["it",4.2]]},{"s":4.62,"e":5.78,"text":"three times a day?","words":[["three",4.62],["times",5.04],["a",5.45],["day",5.53]]},{"s":6.33,"e":9.01,"text":"The acid can drop to pH one point five.","words":[["the",6.33],["acid",6.6],["can",6.96],["drop",7.22],["to",7.58],["ph",7.76],["one",7.94],["point",8.21],["five",8.66]]},{"s":9.56,"e":11.23,"text":"Strong enough to eat through zinc,","words":[["strong",9.56],["enough",9.92],["to",10.28],["eat",10.4],["through",10.58],["zinc",11.0]]},{"s":11.53,"e":12.88,"text":"and turn a steak to mush.","words":[["and",11.53],["turn",11.75],["a",12.03],["steak",12.1],["to",12.45],["mush",12.59]]},{"s":13.43,"e":15.17,"text":"But your stomach has three tricks.","words":[["but",13.43],["your",13.61],["stomach",13.86],["has",14.3],["three",14.49],["tricks",14.8]]},{"s":15.72,"e":17.91,"text":"Trick one: a thick blanket of mucus,","words":[["trick",15.72],["one",16.11],["a",16.35],["thick",16.42],["blanket",16.81],["of",17.36],["mucus",17.52]]},{"s":18.21,"e":19.69,"text":"loaded with bicarbonate,","words":[["loaded",18.21],["with",18.63],["bicarbonate",18.91]]},{"s":19.99,"e":21.57,"text":"basically baking soda.","words":[["basically",19.99],["baking",20.74],["soda",21.24]]},{"s":22.12,"e":23.59,"text":"So right against the wall,","words":[["so",22.12],["right",22.26],["against",22.61],["the",23.1],["wall",23.31]]},{"s":23.89,"e":25.61,"text":"the acid gets neutralized.","words":[["the",23.89],["acid",24.12],["gets",24.43],["neutralized",24.75]]},{"s":26.16,"e":28.69,"text":"Trick two: pepsin, the meat-eating enzyme,","words":[["trick",26.16],["two",26.54],["pepsin",26.77],["the",27.23],["meateating",27.46],["enzyme",28.23]]},{"s":28.99,"e":30.25,"text":"is made switched off.","words":[["is",28.99],["made",29.14],["switched",29.44],["off",30.03]]},{"s":30.8,"e":32.82,"text":"It only turns on out in the acid,","words":[["it",30.8],["only",30.96],["turns",31.28],["on",31.69],["out",31.85],["in",32.09],["the",32.25],["acid",32.49]]},{"s":33.12,"e":34.33,"text":"away from your cells.","words":[["away",33.12],["from",33.4],["your",33.69],["cells",33.98]]},{"s":34.88,"e":38.27,"text":"Trick three: your lining sheds around half a million cells,","words":[["trick",34.88],["three",35.24],["your",35.59],["lining",35.87],["sheds",36.29],["around",36.65],["half",37.07],["a",37.35],["million",37.42],["cells",37.91]]},{"s":38.57,"e":39.42,"text":"every minute,","words":[["every",38.57],["minute",38.96]]},{"s":39.72,"e":41.89,"text":"and rebuilds itself every few days.","words":[["and",39.72],["rebuilds",39.95],["itself",40.55],["every",41.0],["few",41.37],["days",41.59]]},{"s":42.44,"e":45.09,"text":"So damage gets replaced before it spreads.","words":[["so",42.44],["damage",42.59],["gets",43.05],["replaced",43.35],["before",43.96],["it",44.41],["spreads",44.56]]},{"s":45.64,"e":47.51,"text":"Your stomach isn't acid-proof.","words":[["your",45.64],["stomach",45.95],["isnt",46.5],["acidproof",46.81]]},{"s":48.06,"e":50.09,"text":"It just heals faster than it melts.","words":[["it",48.06],["just",48.2],["heals",48.49],["faster",48.85],["than",49.29],["it",49.58],["melts",49.73]]},{"s":50.64,"e":54.23,"text":"Which trick would you want: the slime, the switch, or the shedding?","words":[["which",50.64],["trick",50.98],["would",51.33],["you",51.67],["want",51.88],["the",52.16],["slime",52.36],["the",52.71],["switch",52.91],["or",53.33],["the",53.47],["shedding",53.67]]}];
  const T = (i, w) => { const hit = BEATS[i].words.find((x) => x[0] === w); return hit ? hit[1] : BEATS[i].s; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const cut = (i) => BEATS[i].s - 0.25;
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { ink: '#1d1d3a', cream: '#fff6e6', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', teal: '#1fb6a6', green: '#58c26b', lime: '#c6ec4a', yellow: '#ffd23f', pink: '#ff7f9f', pink2: '#e85d84', purple: '#6b3fd4', white: '#ffffff', mucus: 'rgba(120,225,215,0.78)', cell: '#ff9fb4', cell2: '#f37a98', metal: '#a8b4c6' };
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
  const surf = (ctx, y, amp, len, t, col, bottom = HH) => { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(0, bottom); for (let x = 0; x <= W; x += 12) ctx.lineTo(x, y + Math.sin(x / len + t * 2.2) * amp); ctx.lineTo(W, bottom); ctx.closePath(); ctx.fill(); };
  const bubbles = (ctx, t, seed, n, x0, x1, y0, y1, col, rMax = 14) => { const r = H.rng(seed); for (let i = 0; i < n; i++) { const off = r(), x = H.lerp(x0, x1, r()), sp = 0.25 + r() * 0.35, u = (t * sp + off) % 1, rad = 4 + r() * rMax; ctx.save(); ctx.globalAlpha = 0.75 * (1 - u); ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(x + Math.sin(u * 9 + i) * 10, H.lerp(y1, y0, u), rad, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); } };

  // ---------- the stomach: a flat pink J-shaped organ ----------
  const stomach = (ctx, x, y, s, t, o = {}) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(o.rot || 0);
    const col = o.col || PAL.pink;
    const shape = (c) => {
      ctx.fillStyle = c || col; rr(ctx, -100, -340, 84, 220, 42); ctx.fill();
      ctx.beginPath(); ctx.ellipse(30, 10, 205, 245, -0.45, 0, Math.PI * 2); ctx.fill();
      ctx.lineCap = 'round'; ctx.strokeStyle = c || col; ctx.lineWidth = 74; ctx.beginPath(); ctx.moveTo(-90, 200); ctx.quadraticCurveTo(-200, 270, -285, 180); ctx.stroke();
    };
    longShadow(ctx, shape, o.sh ?? 18);
    // soft fold highlights
    ctx.strokeStyle = 'rgba(255,255,255,0.28)'; ctx.lineWidth = 14; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(60, 20, 150, -1.9, -0.6); ctx.stroke();
    if (o.acid) {
      ctx.save(); ctx.beginPath(); ctx.ellipse(30, 10, 170, 210, -0.45, 0, Math.PI * 2); ctx.clip();
      ctx.fillStyle = '#b8325a'; ctx.fillRect(-300, -300, 600, 600);
      const lvl = o.lvl ?? -10; ctx.fillStyle = PAL.lime; ctx.beginPath(); ctx.moveTo(-260, 300);
      for (let xx = -260; xx <= 320; xx += 10) ctx.lineTo(xx, lvl + Math.sin(xx / 38 + t * 3) * 12);
      ctx.lineTo(320, 300); ctx.closePath(); ctx.fill();
      bubbles(ctx, t, 41, 14, -120, 200, lvl + 10, 220, 'rgba(255,255,255,0.9)', 12);
      ctx.restore();
    }
    if (o.face) {
      const bl = (t % 3.1) < 0.12 ? 0.15 : 1;
      [[-30, -70], [90, -40]].forEach(([ex, ey]) => { ctx.save(); ctx.translate(ex, ey); ctx.scale(1, bl); circle(ctx, 0, 0, 30, PAL.white); circle(ctx, 6, 4, 15, PAL.ink); ctx.restore(); });
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 12; ctx.beginPath(); ctx.arc(40, 10, 50, 0.25, Math.PI - 0.25); ctx.stroke();
      circle(ctx, -60, 10, 18, 'rgba(255,90,120,0.6)'); circle(ctx, 140, 40, 18, 'rgba(255,90,120,0.6)');
    }
    ctx.restore();
  };
  // a hex nut (the "metal")
  const nut = (ctx, x, y, r, rot, col = PAL.metal) => {
    if (r < 2) return; ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    longShadow(ctx, (c) => { ctx.fillStyle = c || col; ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; i ? ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r) : ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill(); }, Math.min(14, r * 0.2));
    circle(ctx, 0, 0, r * 0.42, '#6d7a8e'); ctx.restore();
  };
  // a row of lining cells from x0..x1, top at y, height h
  const cells = (ctx, y, h, n, o = {}) => {
    const w = W / n;
    for (let i = 0; i < n; i++) {
      const g = o.grow ? o.grow(i) : 1, lift = o.lift ? o.lift(i) : 0, a = o.alpha ? o.alpha(i) : 1; if (g <= 0.01 || a <= 0.01) continue;
      ctx.save(); ctx.globalAlpha = a; const hh = h * g, yy = y + (h - hh) - lift;
      ctx.fillStyle = i % 2 ? PAL.cell : PAL.cell2; rr(ctx, i * w + 6, yy, w - 12, hh, 34); ctx.fill();
      circle(ctx, i * w + w / 2, yy + hh * 0.62, Math.min(26, hh * 0.18), '#b8325a');
      ctx.restore();
    }
  };
  const acidDrop = (ctx, x, y, r) => { ctx.save(); ctx.translate(x, y); ctx.fillStyle = PAL.red; ctx.beginPath(); ctx.moveTo(0, -r * 1.6); ctx.quadraticCurveTo(r * 1.1, 0, 0, r); ctx.quadraticCurveTo(-r * 1.1, 0, 0, -r * 1.6); ctx.fill(); if (r > 20) text(ctx, 'H+', 0, -2, r * 0.75, PAL.white); ctx.restore(); };

  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#ffe3b8', '#ffb08a');
    ctx.fillStyle = '#ff9a78'; ctx.fillRect(0, 1500, W, HH);
    const sx = 590, sy = 1010;
    stomach(ctx, sx, sy, 1.6, t, { acid: true, lvl: -20 });
    // a nut drops in and fizzes away
    const d0 = 0.15, fall = EO(t, d0, d0 + 0.7), melt = EO(t, T(0, 'dissolves') - 0.1, T(2, 'day') + 0.3);
    const nx = sx + 70, ny = H.lerp(560, sy + 150, fall);
    ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, HH); ctx.clip();
    nut(ctx, nx, ny, 80 * (1 - melt), t * 0.8 + fall * 2);
    if (melt > 0 && melt < 1) bubbles(ctx, t, 7, 16, nx - 90, nx + 90, ny - 160, ny + 40, PAL.white, 16);
    ctx.restore();
    big(ctx, 'STOMACH ACID', 540, 260, 104, PAL.ink, pop(t, T(0, 'acid') - 0.15));
    pill(ctx, 'DISSOLVES METAL', 540, 420, { k: pop(t, T(0, 'dissolves') - 0.15) * bump(t, T(0, 'metal')), bg: PAL.lime, size: 66 });
    pill(ctx, 'SO HOW DOES IT SURVIVE?', 540, 1500, { k: pop(t, T(1, 'survive') - 0.15), bg: PAL.ink, col: PAL.cream, size: 56 });
    pill(ctx, '3X A DAY', 830, 600, { k: pop(t, T(2, 'three') - 0.15) * bump(t, T(2, 'day')), bg: PAL.orange, col: PAL.white, size: 76 });
  };
  S.acid = (ctx, t) => {
    sky(ctx, '#e9ffc9', '#bfe86a');
    ctx.fillStyle = '#9fd04a'; ctx.fillRect(0, 1460, W, HH);
    // pH scale
    const bx = 90, bw = 900, by = 380, bh = 96, cols = ['#e5322d', '#f0592a', '#f7832b', '#fbb02d', '#f6d330', '#d9e43a', '#9bd245', '#46b85a', '#1fb6a6', '#2a9ad8', '#3a6fd4', '#4c4cc4', '#6b3fd4', '#7d2fb0'];
    const k = EO(t, BEATS[3].s - 0.2, BEATS[3].s + 0.3);
    ctx.save(); ctx.globalAlpha = k; longShadow(ctx, (c) => { ctx.fillStyle = c || '#fff'; rr(ctx, bx - 14, by - 14, bw + 28, bh + 28, 30); ctx.fill(); }, 16);
    cols.forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(bx + i * bw / 14, by, bw / 14 + 1, bh); });
    [0, 7, 14].forEach((v) => text(ctx, String(v), bx + v / 14 * bw, by + bh + 60, 48, PAL.ink));
    ctx.restore();
    const mv = EI(t, T(3, 'drop') - 0.1, T(3, 'five')), val = H.lerp(7, 1.5, mv), mx = bx + val / 14 * bw;
    if (k > 0.01) { ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.moveTo(mx, by - 6); ctx.lineTo(mx - 30, by - 60); ctx.lineTo(mx + 30, by - 60); ctx.fill(); ctx.fillRect(mx - 6, by - 6, 12, bh + 12); }
    big(ctx, 'pH ' + (mv >= 1 ? '1.5' : val.toFixed(1)), 540, 720, 150, PAL.red, pop(t, T(3, 'ph') - 0.15) * bump(t, T(3, 'five')));
    pill(ctx, 'ACID', 260, 230, { k: pop(t, T(3, 'acid') - 0.15), bg: PAL.ink, col: PAL.lime, size: 60 });
    // zinc fizzing
    const zk = pop(t, T(4, 'zinc') - 0.2), zm = EO(t, T(4, 'zinc'), BEATS[6].s);
    if (zk > 0.01) { ctx.save(); ctx.translate(290, 1080); ctx.scale(zk, zk); nut(ctx, 0, 0, 160 * (1 - zm * 0.55), t * 0.3, '#b9c2cf'); bubbles(ctx, t, 13, 18, -130, 130, -260, 60, '#ffffff', 16); ctx.restore(); }
    pill(ctx, 'ZINC', 290, 1330, { k: zk * bump(t, T(4, 'zinc')), bg: PAL.cream, size: 60 });
    // steak -> mush
    const sk = pop(t, T(5, 'steak') - 0.2), mu = EI(t, T(5, 'mush') - 0.15, T(5, 'mush') + 0.5);
    if (sk > 0.01) {
      ctx.save(); ctx.translate(790, 1100); ctx.scale(1.3 * sk * H.lerp(1, 1.25, mu), 1.3 * sk * H.lerp(1, 0.45, mu));
      longShadow(ctx, (c) => { ctx.fillStyle = c || H.rgba(H.mix('#b8443a', '#c98a5a', mu)); ctx.beginPath(); ctx.ellipse(0, 0, 150, 105, -0.2, 0, Math.PI * 2); ctx.fill(); }, 14);
      if (mu < 0.7) { ctx.globalAlpha = 1 - mu / 0.7; ctx.strokeStyle = '#ffe0d0'; ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-100, -20); ctx.quadraticCurveTo(0, 40, 110, -10); ctx.stroke(); }
      ctx.restore();
      if (mu > 0) bubbles(ctx, t, 19, 10, 620, 960, 960, 1130, '#ffffff', 12);
    }
    pill(ctx, mu > 0.5 ? 'MUSH' : 'STEAK', 790, 1330, { k: sk * bump(t, T(5, 'mush')), bg: mu > 0.5 ? PAL.orange : PAL.cream, col: mu > 0.5 ? PAL.white : PAL.ink, size: 60 });
  };
  S.tricks = (ctx, t) => {
    sky(ctx, '#d7ecff', '#9fd0ff');
    ctx.save(); ctx.translate(540, 1000); ctx.rotate(t * 0.15); ctx.fillStyle = 'rgba(255,255,255,0.22)'; for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 1400, a, a + 0.26); ctx.fill(); } ctx.restore();
    const z = 1.55 + EO(t, BEATS[6].s, BEATS[7].s) * 0.12;
    stomach(ctx, 560, 1040, z, t, { face: true });
    big(ctx, '3 TRICKS', 540, 330, 150, PAL.ink, pop(t, T(6, 'three') - 0.15) * bump(t, T(6, 'tricks')));
    const badges = [[230, PAL.teal], [540, PAL.orange], [850, PAL.purple]];
    badges.forEach(([x, c], i) => { const kk = pop(t, T(6, 'tricks') - 0.15 + i * 0.12); if (kk <= 0.01) return; ctx.save(); ctx.translate(x, 1530); ctx.scale(kk, kk); longShadow(ctx, (cc) => circle(ctx, 0, 0, 82, cc || c), 16); text(ctx, String(i + 1), 0, 4, 100, PAL.white); ctx.restore(); });
  };
  // stomach wall cross-section used by trick 1 and 2
  const WALL_TOP = 1300, MUCUS_TOP = 1010;
  const wall = (ctx, t, mucusK, acidCol = '#e4f79a') => {
    sky(ctx, acidCol, '#c6ec4a');
    bubbles(ctx, t, 3, 14, 40, 1040, 200, MUCUS_TOP, 'rgba(255,255,255,0.8)', 14);
    if (mucusK > 0) { ctx.save(); ctx.globalAlpha = Math.min(1, mucusK); const top = H.lerp(WALL_TOP, MUCUS_TOP, mucusK); surf(ctx, top, 16, 70, t, PAL.mucus, WALL_TOP + 40); ctx.restore(); }
    ctx.fillStyle = '#c94a6c'; ctx.fillRect(0, WALL_TOP + 230, W, HH);
    cells(ctx, WALL_TOP, 240, 6);
  };
  S.mucus = (ctx, t) => {
    const mk = EO(t, T(7, 'thick') - 0.2, T(7, 'mucus') + 0.2), bic = EO(t, T(8, 'bicarbonate') - 0.2, T(8, 'bicarbonate') + 0.3);
    wall(ctx, t, mk);
    // bicarbonate dots rising in the mucus
    if (bic > 0) { const r = H.rng(51); for (let i = 0; i < 22; i++) { const off = r(), x = r() * W, u = (t * 0.22 + off) % 1, y = H.lerp(WALL_TOP - 10, MUCUS_TOP + 30, u); ctx.save(); ctx.globalAlpha = bic * (0.9 - u * 0.4); circle(ctx, x, y, 14, PAL.blue); ctx.restore(); } }
    // acid drops falling; neutralised when they reach the mucus
    const r = H.rng(77);
    for (let i = 0; i < 9; i++) {
      const off = r(), x = 80 + r() * 920, sp = 0.18 + r() * 0.1, u = (t * sp + off) % 1, y = H.lerp(140, MUCUS_TOP + 120, u);
      if (y < MUCUS_TOP + 10 || mk < 0.5) { if (y < MUCUS_TOP + 10 || mk <= 0) acidDrop(ctx, x, y, 30); }
      else { const v = ph(y, MUCUS_TOP + 10, MUCUS_TOP + 120); ctx.save(); ctx.globalAlpha = 1 - v; ctx.strokeStyle = PAL.white; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(x, y, 20 + v * 50, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
    }
    pill(ctx, 'TRICK 1', 540, 240, { k: pop(t, T(7, 'trick') - 0.1), bg: PAL.teal, col: PAL.white, size: 64 });
    pill(ctx, 'MUCUS BLANKET', 540, 1140, { k: pop(t, T(7, 'blanket') - 0.15, BEATS[10].s - 0.2) * bump(t, T(7, 'mucus')), bg: PAL.cream, size: 70 });
    // bicarbonate -> baking soda
    pill(ctx, 'BICARBONATE', 540, 420, { k: pop(t, T(8, 'bicarbonate') - 0.15, BEATS[10].s - 0.1), bg: PAL.blue, col: PAL.white, size: 72 });
    const bk = pop(t, T(9, 'baking') - 0.15, BEATS[10].s - 0.1);
    if (bk > 0.01) { ctx.save(); ctx.translate(540, 680); ctx.scale(bk, bk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.orange; rr(ctx, -110, -120, 220, 240, 24); ctx.fill(); }, 16); ctx.fillStyle = PAL.cream; rr(ctx, -90, -50, 180, 100, 16); ctx.fill(); text(ctx, 'SODA', 0, 2, 48, PAL.ink); ctx.restore(); }
    pill(ctx, '= BAKING SODA', 540, 880, { k: pop(t, T(9, 'baking') - 0.1, BEATS[10].s - 0.1) * bump(t, T(9, 'soda')), bg: PAL.yellow, size: 64 });
    // at the wall: neutral
    const wk = pop(t, T(10, 'wall') - 0.15);
    pill(ctx, 'AT THE WALL', 540, 420, { k: wk, bg: PAL.ink, col: PAL.cream, size: 66 });
    if (wk > 0.01) { ctx.save(); ctx.globalAlpha = Math.min(1, wk); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(540, 500); ctx.lineTo(540, 1180 - 50); ctx.stroke(); ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.moveTo(540, 1200 - 30); ctx.lineTo(505, 1120); ctx.lineTo(575, 1120); ctx.fill(); ctx.restore(); }
    pill(ctx, 'NEUTRALIZED', 540, 720, { k: pop(t, T(11, 'neutralized') - 0.15) * bump(t, T(11, 'neutralized')), bg: PAL.green, col: PAL.white, size: 84 });
  };
  // pepsin: an orange pac-man enzyme with an on/off switch
  const pepsin = (ctx, x, y, s, t, on) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const m = on ? 0.15 + Math.abs(Math.sin(t * 8)) * 0.5 : 0.04;
    longShadow(ctx, (c) => { ctx.fillStyle = c || (on ? PAL.orange : '#c7a58f'); ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 100, m, Math.PI * 2 - m); ctx.closePath(); ctx.fill(); }, 16);
    if (on) circle(ctx, 20, -50, 14, PAL.ink); else { ctx.strokeStyle = PAL.ink; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(6, -50); ctx.lineTo(34, -50); ctx.stroke(); }
    // switch badge
    ctx.translate(-60, -110); longShadow(ctx, (c) => { ctx.fillStyle = c || (on ? PAL.green : '#7b7f93'); rr(ctx, -70, -34, 140, 68, 34); ctx.fill(); }, 8);
    circle(ctx, on ? 36 : -36, 0, 26, PAL.white); text(ctx, on ? 'ON' : 'OFF', on ? -18 : 18, 2, 30, PAL.white);
    ctx.restore();
  };
  S.pepsin = (ctx, t) => {
    wall(ctx, t, 1, '#f1fbc0');
    const on = t >= T(14, 'on') - 0.1;
    const rise = EI(t, T(14, 'turns') - 0.4, T(14, 'acid')), born = pop(t, T(12, 'pepsin') - 0.15);
    const px = 540, py = H.lerp(1180, 600, rise);
    // protein chain to chomp, top of the acid
    const chomp = EO(t, T(14, 'acid'), T(15, 'cells'));
    const ck = pop(t, T(14, 'turns') - 0.2);
    if (ck > 0.01) { const beads = 9; for (let i = 0; i < beads; i++) { const x = 140 + i * 100, broken = chomp > 0 && i >= 4 && i <= 5; const dy = broken ? -chomp * 60 : 0, dx = broken ? (i === 4 ? -1 : 1) * chomp * 50 : 0; const kk = ck * (broken ? 1 - chomp : 1); if (kk <= 0.01) continue; ctx.save(); ctx.translate(x + dx + (i > 5 ? chomp * 30 : i < 4 ? -chomp * 30 : 0), 520 + Math.sin(i + t * 2) * 12 + dy); ctx.scale(kk, kk); circle(ctx, 0, 0, 36, i % 2 ? '#c0504d' : '#e07a5f'); ctx.restore(); } }
    if (born > 0.01) pepsin(ctx, px, py, 1.25 * born, t, on);
    pill(ctx, 'TRICK 2', 540, 240, { k: pop(t, T(12, 'trick') - 0.1, T(14, 'turns') - 0.5), bg: PAL.orange, col: PAL.white, size: 64 });
    pill(ctx, 'PEPSIN', 540, 420, { k: pop(t, T(12, 'pepsin') - 0.15, T(14, 'turns') - 0.5) * bump(t, T(12, 'pepsin')), bg: PAL.ink, col: PAL.cream, size: 92 });
    pill(ctx, 'MEAT-EATING ENZYME', 540, 600, { k: pop(t, T(12, 'meateating') - 0.15, T(13, 'switched') - 0.2), bg: PAL.cream, size: 58 });
    pill(ctx, 'MADE SWITCHED OFF', 540, 640, { k: pop(t, T(13, 'switched') - 0.15, T(14, 'turns') - 0.5) * bump(t, T(13, 'off')), bg: '#7b7f93', col: PAL.white, size: 64 });
    pill(ctx, 'ON IN THE ACID', 540, 260, { k: pop(t, T(14, 'on') - 0.15) * bump(t, T(14, 'acid')), bg: PAL.green, col: PAL.white, size: 70 });
    pill(ctx, 'AWAY FROM YOUR CELLS', 540, 1460, { k: pop(t, T(15, 'away') - 0.15), bg: PAL.cream, size: 58 });
  };
  S.shed = (ctx, t) => {
    sky(ctx, '#ffe2ec', '#ffb3c8');
    // zoomed lining: tall cells that peel off upward and regrow
    const n = 5, w = W / n, y = 1080, h = 420, period = 2.4;
    ctx.fillStyle = '#c94a6c'; ctx.fillRect(0, y + h - 10, W, HH);
    const zk = EO(t, BEATS[16].s - 0.2, BEATS[16].s + 0.6);
    for (let i = 0; i < n; i++) {
      const off = (i * 0.37) % 1, u = ((t / period) + off) % 1;
      const x = i * w + w / 2;
      // new cell growing in
      const g = H.smooth(0.0, 0.5, u);
      ctx.fillStyle = i % 2 ? PAL.cell : PAL.cell2; const hh = h * Math.max(0.15, g); rr(ctx, i * w + 10, y + h - hh, w - 20, hh, 40); ctx.fill(); circle(ctx, x, y + h - hh * 0.4, Math.min(30, hh * 0.15), '#b8325a');
      // old cell drifting away
      if (zk > 0.3) { const v = ph(u, 0.0, 0.7), a = 1 - v; if (a > 0.02) { ctx.save(); ctx.globalAlpha = a; ctx.translate(x + Math.sin(i + v * 4) * 40, y + h / 2 - 40 - v * 700); ctx.rotate(v * (i % 2 ? 1 : -1)); ctx.fillStyle = i % 2 ? PAL.cell2 : PAL.cell; rr(ctx, -w / 2 + 14, -h / 2 * 0.8, w - 28, h * 0.8, 40); ctx.fill(); ctx.restore(); } }
    }
    pill(ctx, 'TRICK 3', 540, 240, { k: pop(t, T(16, 'trick') - 0.1, T(16, 'half') - 0.4), bg: PAL.purple, col: PAL.white, size: 64 });
    pill(ctx, 'SHEDDING', 540, 240, { k: pop(t, T(16, 'sheds') - 0.15) * bump(t, T(16, 'sheds')), bg: PAL.purple, col: PAL.white, size: 64 });
    const c = EO(t, T(16, 'half') - 0.1, T(16, 'cells') + 0.2), num = Math.round(c * 500000);
    pill(ctx, '~' + num.toLocaleString('en-US'), 540, 470, { k: pop(t, T(16, 'half') - 0.15) * bump(t, T(16, 'cells') + 0.2), bg: PAL.cream, size: 120, h: 210 });
    pill(ctx, 'CELLS EVERY MINUTE', 540, 650, { k: pop(t, T(17, 'every') - 0.15) * bump(t, T(17, 'minute')), bg: PAL.ink, col: PAL.cream, size: 58 });
    // calendar: new lining every few days
    const ck = pop(t, T(18, 'rebuilds') - 0.15);
    if (ck > 0.01) { ctx.save(); ctx.translate(540, 860); ctx.scale(ck, ck); longShadow(ctx, (cc) => { ctx.fillStyle = cc || PAL.white; rr(ctx, -260, -90, 520, 180, 28); ctx.fill(); }, 14); ctx.fillStyle = PAL.red; rr(ctx, -260, -90, 520, 50, 24); ctx.fill(); ctx.fillRect(-260, -60, 520, 20);
      for (let d = 0; d < 5; d++) { const on = t > T(18, 'every') + d * 0.12; circle(ctx, -200 + d * 100, 30, 30, on ? (d % 2 ? PAL.green : PAL.lime) : '#e6e0d6'); } ctx.restore(); }
    pill(ctx, 'NEW LINING EVERY FEW DAYS', 540, 1000, { k: pop(t, T(18, 'every') - 0.15) * bump(t, T(18, 'days')), bg: PAL.green, col: PAL.white, size: 50 });
  };
  S.heal = (ctx, t) => {
    sky(ctx, '#e4f79a', '#c6ec4a');
    const z = 1 + EI(t, BEATS[19].s - 0.2, BEATS[19].e + 0.4) * 0.15;
    ctx.save(); ctx.translate(540, 1300); ctx.scale(z, z); ctx.translate(-540, -1300);
    bubbles(ctx, t, 61, 10, 40, 1040, 200, 1000, 'rgba(255,255,255,0.8)', 14);
    surf(ctx, 1060, 12, 70, t, PAL.mucus, 1340);
    ctx.fillStyle = '#c94a6c'; ctx.fillRect(0, 1560, W, HH);
    const dmg = EO(t, T(19, 'damage') - 0.15, T(19, 'damage') + 0.3), fix = EO(t, T(19, 'replaced') - 0.1, T(19, 'spreads'));
    cells(ctx, 1320, 240, 6, { grow: (i) => (i === 2 || i === 3 ? (dmg > 0 ? H.lerp(1 - dmg * 0.85, 1, fix) : 1) : 1) });
    if (dmg > 0 && fix < 1) { ctx.save(); ctx.globalAlpha = dmg * (1 - fix); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 14; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(400, 1330); ctx.lineTo(470, 1420); ctx.lineTo(520, 1370); ctx.lineTo(600, 1470); ctx.lineTo(660, 1400); ctx.stroke(); ctx.restore(); }
    for (let i = 0; i < 4; i++) { const u = (t * 0.35 + i / 4) % 1; acidDrop(ctx, 300 + i * 160, H.lerp(300, 1040, u), 26); }
    if (fix > 0 && fix < 1) for (let s = 0; s < 6; s++) { const a = s / 6 * Math.PI * 2 + t; circle(ctx, 540 + Math.cos(a) * 200 * fix, 1440 + Math.sin(a) * 90 * fix, 12, PAL.yellow); }
    ctx.restore();
    pill(ctx, 'DAMAGE', 540, 300, { k: pop(t, T(19, 'damage') - 0.15, T(19, 'replaced') - 0.2), bg: PAL.red, col: PAL.white, size: 76 });
    pill(ctx, 'REPLACED', 540, 300, { k: pop(t, T(19, 'replaced') - 0.15) * bump(t, T(19, 'replaced')), bg: PAL.green, col: PAL.white, size: 84 });
    pill(ctx, 'BEFORE IT SPREADS', 540, 480, { k: pop(t, T(19, 'before') - 0.15), bg: PAL.cream, size: 62 });
  };
  S.race = (ctx, t) => {
    sky(ctx, '#2b1a5e', '#5a2d8f');
    ctx.save(); ctx.translate(540, 1050); ctx.rotate(-t * 0.12); ctx.fillStyle = 'rgba(255,255,255,0.06)'; for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 1400, a, a + 0.26); ctx.fill(); } ctx.restore();
    // "acid-proof" shield crossed out
    const sk = pop(t, T(20, 'stomach') - 0.15, T(21, 'it') - 0.2), x = EO(t, T(20, 'isnt') - 0.1, T(20, 'isnt') + 0.25);
    if (sk > 0.01) { ctx.save(); ctx.translate(540, 900); ctx.scale(sk, sk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.metal; ctx.beginPath(); ctx.moveTo(0, -230); ctx.lineTo(200, -150); ctx.quadraticCurveTo(200, 120, 0, 240); ctx.quadraticCurveTo(-200, 120, -200, -150); ctx.closePath(); ctx.fill(); }, 20); text(ctx, 'ACID', 0, -30, 70, PAL.ink); text(ctx, 'PROOF', 0, 50, 70, PAL.ink);
      if (x > 0) { ctx.strokeStyle = PAL.red; ctx.lineWidth = 34; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-230, -230); ctx.lineTo(H.lerp(-230, 230, x), H.lerp(-230, 230, x)); ctx.stroke(); } ctx.restore(); }
    pill(ctx, "IT'S NOT", 540, 420, { k: pop(t, T(20, 'isnt') - 0.15, T(21, 'it') - 0.2), bg: PAL.red, col: PAL.white, size: 76 });
    // race bars
    const rk = EO(t, T(21, 'it') - 0.2, T(21, 'it') + 0.2);
    if (rk > 0.01) {
      const base = 1450, g = EO(t, T(21, 'heals') - 0.1, T(21, 'melts') + 0.6), m = EO(t, T(21, 'heals'), T(21, 'melts') + 0.6);
      const bar = (bx, hgt, col, lbl) => { longShadow(ctx, (c) => { ctx.fillStyle = c || col; rr(ctx, bx - 150, base - hgt, 300, Math.max(hgt, 40), 30); ctx.fill(); }, 18); text(ctx, lbl, bx, base + 70, 60, PAL.cream); };
      ctx.save(); ctx.globalAlpha = rk;
      bar(300, 160 + g * 640, PAL.green, 'HEALING'); bar(780, 160 + m * 300, PAL.red, 'MELTING');
      ctx.restore();
    }
    big(ctx, 'HEALS', 540, 330, 130, PAL.lime, pop(t, T(21, 'heals') - 0.15));
    big(ctx, 'FASTER', 540, 480, 130, PAL.cream, pop(t, T(21, 'faster') - 0.15) * bump(t, T(21, 'melts')));
  };
  S.ask = (ctx, t) => {
    sky(ctx, '#fff1d6', '#ffc9a0');
    stomach(ctx, 560, 640, 0.95, t, { face: true });
    pill(ctx, 'WHICH TRICK?', 540, 240, { k: pop(t, T(22, 'which') - 0.15) * bump(t, T(22, 'trick')), bg: PAL.ink, col: PAL.cream, size: 76 });
    const cards = [['SLIME', T(22, 'slime'), PAL.teal, 1060], ['SWITCH', T(22, 'switch'), PAL.orange, 1260], ['SHEDDING', T(22, 'shedding'), PAL.purple, 1460]];
    cards.forEach(([s, tt, bg, y], i) => { const k = pop(t, tt - 0.15) * bump(t, tt); if (k <= 0.01) return; ctx.save(); ctx.translate(540, y); ctx.scale(k, k);
      longShadow(ctx, (c) => { ctx.fillStyle = c || bg; rr(ctx, -380, -80, 760, 160, 40); ctx.fill(); }, 18);
      circle(ctx, -300, 0, 52, PAL.cream); text(ctx, String(i + 1), -300, 4, 66, bg); text(ctx, s, 60, 4, 92, PAL.white); ctx.restore(); });
  };

  const ORDER = [['hook', 0], ['acid', cut(3)], ['tricks', cut(6)], ['mucus', cut(7)], ['pepsin', cut(12)], ['shed', cut(16)], ['heal', cut(19)], ['race', cut(20)], ['ask', cut(22)]];
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
    const fizz = (t, dur, g = 0.14) => k.noise(t, { dur, color: 'white', filter: 'highpass', f: 3500, gain: g, a: 0.2, minor: true });
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 104, gain: 0.3, chords: [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['G3', 'B3', 'D4', 'F4']] });
    k.play('thud', 0.85, { f: 160, gain: 0.6 });
    popAt(T(0, 'acid') - 0.15, 520, 0.9, 0, false); popAt(T(0, 'dissolves') - 0.15, 640, 0.9, 0, false); fizz(T(0, 'dissolves'), 4.2);
    popAt(T(1, 'survive') - 0.15, 560, 0.8, 0, false); popAt(T(2, 'three') - 0.15, 760, 0.9, 0, false); k.play('ding', T(2, 'day'), { f: 'E6', gain: 0.3 });
    ORDER.slice(1).forEach((o) => wipe(o[1]));
    popAt(T(3, 'acid') - 0.15, 600, 0.7);
    for (let f = Math.ceil((T(3, 'drop') - 0.1) * 12); f < T(3, 'five') * 12; f += 2) k.play('tick', f / 12, { f: 3000, gain: 0.7, minor: true });
    k.play('stamp', T(3, 'five'), { gain: 0.5 }); k.play('impact', T(3, 'five'), { gain: 0.6 });
    popAt(T(4, 'zinc') - 0.2, 700, 0.8, -0.4, false); fizz(T(4, 'zinc'), 2.2, 0.16);
    popAt(T(5, 'steak') - 0.2, 520, 0.8, 0.4, false); k.play('thud', T(5, 'mush'), { f: 110, gain: 0.6, pan: 0.4 });
    k.play('impact', T(6, 'three'), { gain: 0.8 }); [0, 1, 2].forEach((i) => popAt(T(6, 'tricks') - 0.15 + i * 0.12, 600 + i * 120, 0.8, i - 1, false));
    popAt(T(7, 'trick') - 0.1, 620, 0.7); k.noise(T(7, 'thick') - 0.2, { dur: 1.2, color: 'pink', filter: 'lowpass', f: [[0, 400], [1.2, 1200]], gain: 0.16, a: 0.3, minor: true }); popAt(T(7, 'blanket') - 0.15, 560, 0.9, 0, false);
    popAt(T(8, 'bicarbonate') - 0.15, 700, 0.9, 0, false); for (let i = 0; i < 6; i++) k.play('pop', T(8, 'bicarbonate') + 0.2 + i * 0.16, { f: 1200 + i * 90, gain: 0.25, minor: true });
    popAt(T(9, 'baking') - 0.15, 640, 0.8, 0, false); k.play('ding', T(9, 'soda'), { f: 'G5', gain: 0.3 });
    popAt(T(10, 'wall') - 0.15, 600, 0.7); k.play('swish', T(10, 'wall'), { gain: 0.5 });
    k.play('success', T(11, 'neutralized'), { f: 'C6', gain: 0.35 }); popAt(T(11, 'neutralized') - 0.15, 760, 0.9, 0, false);
    popAt(T(12, 'trick') - 0.1, 620, 0.7); popAt(T(12, 'pepsin') - 0.15, 520, 0.9, 0, false); popAt(T(12, 'meateating') - 0.15, 700, 0.7);
    k.play('error', T(13, 'off'), { f: 'A3', gain: 0.4 }); popAt(T(13, 'switched') - 0.15, 560, 0.7);
    k.play('riser', T(14, 'turns') - 0.5, { dur: 0.9, gain: 0.5 }); k.play('tock', T(14, 'on'), { f: 900, gain: 0.7 }); k.play('ding', T(14, 'on'), { f: 'E6', gain: 0.3 });
    for (let i = 0; i < 5; i++) k.play('tock', T(14, 'acid') + i * 0.2, { f: 300 + (i % 2) * 120, gain: 0.45, minor: true });
    popAt(T(15, 'away') - 0.15, 640, 0.7);
    popAt(T(16, 'trick') - 0.1, 620, 0.7); k.play('swish', T(16, 'sheds') - 0.1, { gain: 0.6 });
    for (let f = Math.ceil((T(16, 'half') - 0.1) * 12); f < (T(16, 'cells') + 0.2) * 12; f += 2) k.play('tick', f / 12, { f: 3200, gain: 0.8, minor: true });
    k.play('stamp', T(16, 'cells') + 0.2, { gain: 0.5 }); k.play('impact', T(16, 'cells') + 0.2, { gain: 0.6 });
    popAt(T(17, 'every') - 0.15, 700, 0.8, 0, false);
    popAt(T(18, 'rebuilds') - 0.15, 560, 0.8, 0, false); for (let d = 0; d < 5; d++) k.play('pop', T(18, 'every') + d * 0.12, { f: 900 + d * 100, gain: 0.3, minor: true }); k.play('ding', T(18, 'days'), { f: 'A5', gain: 0.3 });
    k.play('thud', T(19, 'damage'), { f: 90, gain: 0.7 }); k.play('impact', T(19, 'damage'), { gain: 0.4 });
    k.play('sparkle', T(19, 'replaced'), { n: 6, gain: 0.5 }); popAt(T(19, 'replaced') - 0.15, 760, 0.9, 0, false); popAt(T(19, 'before') - 0.15, 620, 0.6);
    popAt(T(20, 'stomach') - 0.15, 520, 0.7); k.play('error', T(20, 'isnt'), { f: 'G3', gain: 0.45 });
    popAt(T(21, 'heals') - 0.15, 640, 0.9, 0, false); popAt(T(21, 'faster') - 0.15, 760, 0.9, 0, false); k.play('riser', T(21, 'heals') - 0.2, { dur: 1.2, gain: 0.4 }); k.play('impact', T(21, 'melts'), { gain: 0.7 });
    popAt(T(22, 'which') - 0.15, 600, 0.8, 0, false);
    [['slime', 'C5'], ['switch', 'E5'], ['shedding', 'G5']].forEach(([w, n], i) => { popAt(T(22, w) - 0.15, 520 + i * 90, 0.9, 0, false); k.play('ding', T(22, w), { f: n, gain: 0.32 }); });
    k.play('success', T(22, 'shedding') + 0.6, { f: 'C6', gain: 0.35 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
