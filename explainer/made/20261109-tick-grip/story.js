// ===== Brick Toy (Lemo-Opuscar style), vertical: "How does a tick hold on so tight?" =====
// Canvas 2D port of the brick-film grammar: glossy ABS bricks with studs, AO seams, softbox highlights,
// a real desk blurred behind, bricks stepping at 12 fps while the camera moves on ones.
(function () {
  const PH = [{"s":0.25,"e":3.11,"text":"A tick glues itself into your skin in thirty minutes,","words":[["a",0.25],["tick",0.32],["glues",0.58],["itself",0.92],["into",1.31],["your",1.58],["skin",1.85],["in",2.11],["thirty",2.25],["minutes",2.64]]},{"s":3.49,"e":4.49,"text":"and you never feel it.","words":[["and",3.49],["you",3.67],["never",3.84],["feel",4.14],["it",4.37]]},{"s":4.88,"e":6.67,"text":"First, two tiny scissor blades","words":[["first",4.88],["two",5.24],["tiny",5.45],["scissor",5.74],["blades",6.24]]},{"s":6.67,"e":8.03,"text":"snip a hole in your skin.","words":[["snip",6.67],["a",6.96],["hole",7.03],["in",7.32],["your",7.46],["skin",7.75]]},{"s":8.48,"e":11.1,"text":"Then it slides in a spear called the hypostome,","words":[["then",8.48],["it",8.75],["slides",8.89],["in",9.31],["a",9.44],["spear",9.51],["called",9.86],["the",10.27],["hypostome",10.48]]},{"s":11.67,"e":13.49,"text":"covered in barbs that point backwards,","words":[["covered",11.67],["in",12.07],["barbs",12.18],["that",12.46],["point",12.69],["backwards",12.98]]},{"s":13.56,"e":14.77,"text":"like a fishhook.","words":[["like",13.56],["a",13.93],["fishhook",14.03]]},{"s":15.12,"e":17.27,"text":"Once it's in, it won't slide back out.","words":[["once",15.12],["its",15.44],["in",15.68],["it",15.84],["wont",16.0],["slide",16.32],["back",16.72],["out",17.04]]},{"s":17.68,"e":18.93,"text":"Now the wild part.","words":[["now",17.68],["the",17.95],["wild",18.22],["part",18.57]]},{"s":19.31,"e":20.03,"text":"Within minutes,","words":[["within",19.31],["minutes",19.64]]},{"s":20.37,"e":22.32,"text":"some ticks start oozing saliva","words":[["some",20.37],["ticks",20.67],["start",21.04],["oozing",21.42],["saliva",21.87]]},{"s":22.32,"e":23.56,"text":"that hardens into cement,","words":[["that",22.32],["hardens",22.56],["into",22.97],["cement",23.2]]},{"s":24.15,"e":26.34,"text":"a little cone of glue around the spear.","words":[["a",24.15],["little",24.22],["cone",24.64],["of",24.93],["glue",25.07],["around",25.35],["the",25.77],["spear",25.99]]},{"s":26.8,"e":28.6,"text":"And that spit carries a painkiller,","words":[["and",26.8],["that",26.98],["spit",27.23],["carries",27.48],["a",27.92],["painkiller",27.98]]},{"s":28.91,"e":30.14,"text":"so you don't notice a thing.","words":[["so",28.91],["you",29.03],["dont",29.2],["notice",29.44],["a",29.79],["thing",29.85]]},{"s":30.61,"e":32.44,"text":"It can hang on for a week or more,","words":[["it",30.61],["can",30.76],["hang",30.98],["on",31.27],["for",31.42],["a",31.64],["week",31.71],["or",32.0],["more",32.15]]},{"s":32.99,"e":34.34,"text":"and some females swell up","words":[["and",32.99],["some",33.19],["females",33.44],["swell",33.89],["up",34.21]]},{"s":34.44,"e":36.48,"text":"to a hundred times their size.","words":[["to",34.44],["a",34.61],["hundred",34.7],["times",35.29],["their",35.71],["size",36.14]]},{"s":36.94,"e":37.62,"text":"When it's full,","words":[["when",36.94],["its",37.18],["full",37.37]]},{"s":37.86,"e":40.37,"text":"it breaks free from its own glue in a minute or two,","words":[["it",37.86],["breaks",37.98],["free",38.36],["from",38.61],["its",38.86],["own",39.05],["glue",39.24],["in",39.49],["a",39.61],["minute",39.67],["or",40.05],["two",40.18]]},{"s":40.58,"e":41.54,"text":"and drops off.","words":[["and",40.58],["drops",40.84],["off",41.28]]},{"s":41.96,"e":43.28,"text":"So which grip is scarier,","words":[["so",41.96],["which",42.09],["grip",42.42],["is",42.68],["scarier",42.81]]},{"s":43.54,"e":44.82,"text":"the barbs or the glue?","words":[["the",43.54],["barbs",43.76],["or",44.14],["the",44.29],["glue",44.52]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); if (!x) throw new Error('no word ' + w + ' in ' + i); return x[1]; };
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2, FONT = '"Fredoka"';
  const DURATION = +(PE(PH.length - 1) + 1.0).toFixed(2);
  const q12 = (t) => Math.floor(t * 12 + 1e-6) / 12;
  const C = {
    red: '#c91a09', blue: '#0055bf', yellow: '#f2cd37', green: '#237841', white: '#f2f2ee', black: '#1b2a34',
    orange: '#fe8a18', lgrey: '#a0a5a9', dgrey: '#6c6e68', tan: '#e4cd9e', azure: '#36aebf',
    tick: '#7d2a18', tickD: '#561b10', scut: '#4a3020', head: '#5e3a26', spear: '#6e5a4a',
    skin: '#f3bfa6', derm: '#e79a86', fat: '#f4d58e', blood: '#b3101c', cement: '#f3e6c0', grey: '#8f8878',
  };
  const sh = (c, k) => H.rgba(k < 0 ? H.mix(c, '#000000', -k) : H.mix(c, '#ffffff', k));
  const SN = [], DINGS = [];          // sound schedule, filled while scenes are laid out
  const snap = (t) => (SN.push(t), t);
  const lab = (t) => (DINGS.push(t), t);

  // ---------------- primitives ----------------
  function rr(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.roundRect(x, y, w, h, Math.max(0, Math.min(r, w / 2, h / 2))); }
  function blob(ctx, x, y, rx, ry, a = 0.32) {
    ctx.save(); const g = ctx.createRadialGradient(x, y, 0, x, y, rx);
    g.addColorStop(0, `rgba(20,14,10,${a})`); g.addColorStop(1, 'rgba(20,14,10,0)');
    ctx.fillStyle = g; ctx.translate(x, y); ctx.scale(1, ry / rx); ctx.translate(-x, -y);
    ctx.beginPath(); ctx.arc(x, y, rx, 0, TAU); ctx.fill(); ctx.restore();
  }
  function stud(ctx, cx, cy, U, col, tf = 0.45, trans = false) {
    const rx = U * 0.3, ry = rx * tf, h = U * 0.17;
    ctx.fillStyle = 'rgba(0,0,0,0.22)'; ctx.beginPath(); ctx.ellipse(cx + U * 0.03, cy + U * 0.02, rx * 1.12, ry * 1.15, 0, 0, TAU); ctx.fill();
    const g = ctx.createLinearGradient(cx - rx, 0, cx + rx, 0);
    g.addColorStop(0, sh(col, 0.08)); g.addColorStop(0.35, sh(col, 0.22)); g.addColorStop(1, sh(col, -0.3));
    ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI); ctx.lineTo(cx - rx, cy - h); ctx.ellipse(cx, cy - h, rx, ry, 0, Math.PI, 0, true); ctx.closePath(); ctx.fill();
    ctx.fillStyle = sh(col, trans ? 0.3 : 0.14); ctx.beginPath(); ctx.ellipse(cx, cy - h, rx, ry, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.beginPath(); ctx.ellipse(cx - rx * 0.35, cy - h - ry * 0.25, rx * 0.32, ry * 0.3, -0.2, 0, TAU); ctx.fill();
  }
  // brick seen from a slightly high front camera. x,y = top-left of the FRONT face; w studs, h plates (3 = brick), d studs deep
  function brick(ctx, x, y, w, h, d, col, U, o = {}) {
    const fw = w * U, fh = h * 0.4 * U, tf = o.tf || 0.36, th = d * U * tf, r = U * 0.07;
    ctx.save(); if (o.alpha != null) ctx.globalAlpha *= o.alpha;
    if (o.shadow !== false) blob(ctx, x + fw / 2 + U * 0.25, y + fh, fw * 0.62, U * 0.35, 0.28);
    if (d > 0) {
      const gt = ctx.createLinearGradient(0, y - th, 0, y);
      gt.addColorStop(0, sh(col, 0.02)); gt.addColorStop(1, sh(col, 0.16));
      ctx.fillStyle = gt; rr(ctx, x, y - th, fw, th + r, r); ctx.fill();
    }
    const g = ctx.createLinearGradient(0, y, 0, y + fh);
    g.addColorStop(0, sh(col, 0.06)); g.addColorStop(0.55, col); g.addColorStop(1, sh(col, -0.3));
    ctx.fillStyle = g; rr(ctx, x, y, fw, fh, r); ctx.fill();
    const ge = ctx.createLinearGradient(x, 0, x + fw, 0);
    ge.addColorStop(0, 'rgba(255,255,255,0.10)'); ge.addColorStop(0.06, 'rgba(255,255,255,0)'); ge.addColorStop(0.94, 'rgba(0,0,0,0)'); ge.addColorStop(1, 'rgba(0,0,0,0.22)');
    ctx.fillStyle = ge; rr(ctx, x, y, fw, fh, r); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.fillRect(x + r, y - 0.5, fw - 2 * r, Math.max(2, U * 0.045));
    if (!o.matte) { ctx.fillStyle = `rgba(255,255,255,${o.trans ? 0.4 : 0.2})`; rr(ctx, x + fw * 0.07, y + fh * 0.16, Math.min(fw * 0.2, U * 0.9), fh * 0.5, U * 0.04); ctx.fill(); }
    ctx.fillStyle = 'rgba(0,0,0,0.38)'; ctx.fillRect(x + r * 0.5, y + fh - Math.max(2, U * 0.04), fw - r, Math.max(2, U * 0.04));
    if (o.studs !== false && d > 0) {
      for (let j = 0; j < d; j++) for (let i = 0; i < w; i++) {
        if (o.skip && o.skip(i, j)) continue;
        stud(ctx, x + (i + 0.5) * U, y - th + (j + 0.5) * th / d + U * 0.04, U, col, tf * 1.25, o.trans);
      }
    }
    ctx.restore();
  }
  // a round brick / cylinder: centre x, top y
  function roundB(ctx, cx, y, rx, h, col, U, o = {}) {
    const ry = rx * (o.tf || 0.4);
    ctx.save(); if (o.alpha != null) ctx.globalAlpha *= o.alpha;
    if (o.shadow !== false) blob(ctx, cx + U * 0.2, y + h, rx * 1.3, U * 0.3, 0.26);
    const g = ctx.createLinearGradient(cx - rx, 0, cx + rx, 0);
    g.addColorStop(0, sh(col, -0.15)); g.addColorStop(0.28, sh(col, 0.3)); g.addColorStop(0.42, sh(col, 0.05)); g.addColorStop(1, sh(col, -0.38));
    ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(cx, y + h, rx, ry, 0, 0, Math.PI); ctx.lineTo(cx - rx, y); ctx.ellipse(cx, y, rx, ry, 0, Math.PI, 0, true); ctx.closePath(); ctx.fill();
    ctx.fillStyle = sh(col, o.trans ? 0.3 : 0.15); ctx.beginPath(); ctx.ellipse(cx, y, rx, ry, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.fillRect(cx - rx * 0.55, y + ry * 0.4, rx * 0.12, Math.max(0, h - ry * 0.4));
    if (o.stud) stud(ctx, cx, y + U * 0.02, U, col, (o.tf || 0.4) * 1.1, o.trans);
    ctx.restore();
  }
  // a rigid bar between two points (legs, blades): rounded, glossy
  function bar(ctx, x1, y1, x2, y2, th, col) {
    const L = Math.hypot(x2 - x1, y2 - y1), a = Math.atan2(y2 - y1, x2 - x1);
    ctx.save(); ctx.translate(x1, y1); ctx.rotate(a);
    const g = ctx.createLinearGradient(0, -th / 2, 0, th / 2);
    g.addColorStop(0, sh(col, 0.35)); g.addColorStop(0.3, sh(col, 0.08)); g.addColorStop(1, sh(col, -0.4));
    ctx.fillStyle = g; rr(ctx, -th * 0.2, -th / 2, L + th * 0.4, th, th * 0.35); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.45)'; ctx.fillRect(th * 0.2, -th * 0.33, L - th * 0.2, th * 0.12);
    ctx.restore();
  }
  function joint(ctx, x, y, r, col) {
    const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.35, r * 0.1, x, y, r);
    g.addColorStop(0, sh(col, 0.45)); g.addColorStop(0.5, col); g.addColorStop(1, sh(col, -0.4));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
  }
  // wedge (slope brick face) as a glossy polygon
  function wedge(ctx, pts, col) {
    const ys = pts.map((p) => p[1]), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const g = ctx.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, sh(col, 0.28)); g.addColorStop(1, sh(col, -0.3));
    ctx.fillStyle = g; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); ctx.lineTo(pts[1][0], pts[1][1]); ctx.stroke();
  }

  // ---------------- motion grammar ----------------
  // bricks fly in on an arc and snap with a tiny overshoot; everything on 12 fps steps
  function flyIn(t, tl, dx = 0, dy = -260, dur = 0.34) {
    const q = q12(t), u = (q - (tl - dur)) / dur;
    if (u < 0) return null;
    if (u < 1) { const e = H.ease.out(u); return { x: dx * (1 - e), y: dy * (1 - e) - Math.sin(e * Math.PI) * 60, a: 1, land: false }; }
    const v = q - tl; const ov = v < 0.17 ? -Math.sin((v / 0.17) * Math.PI) * 9 : 0;
    return { x: 0, y: ov, a: 1, land: true };
  }
  function popS(t, t0) {
    const u = q12(t) - t0; if (u < -1e-6) return 0;
    if (u < 1 / 12) return 0.55; if (u < 2 / 12) return 1.14; if (u < 3 / 12) return 0.96; return 1;
  }
  function shake(t, t0, amp = 14, dur = 0.35) {
    const u = t - t0; if (u < 0 || u > dur) return [0, 0];
    const k = (1 - u / dur) * amp; return [Math.sin(u * 83) * k, Math.cos(u * 61) * k * 0.7];
  }

  // ---------------- type on toy elements ----------------
  const MC = document.createElement('canvas').getContext('2d');
  function tile(ctx, cx, cy, text, size, t, t0, o = {}) {
    const s = popS(t, t0); if (s <= 0) return;
    const bg = o.bg || C.white, fg = o.fg || C.black;
    MC.font = `700 ${size}px ${FONT}`; const tw = MC.measureText(text).width;
    const w = tw + size * 0.9, h = size * 1.32, th = size * 0.22;
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(o.rot || 0); ctx.scale(s, s);
    blob(ctx, size * 0.15, h / 2 + 6, w * 0.6, size * 0.28, 0.35);
    ctx.fillStyle = sh(bg, 0.14); rr(ctx, -w / 2, -h / 2 - th, w, th + 10, size * 0.16); ctx.fill();
    const g = ctx.createLinearGradient(0, -h / 2, 0, h / 2); g.addColorStop(0, sh(bg, 0.05)); g.addColorStop(1, sh(bg, -0.22));
    ctx.fillStyle = g; rr(ctx, -w / 2, -h / 2, w, h, size * 0.16); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.65)'; ctx.fillRect(-w / 2 + 10, -h / 2 - 1, w - 20, 3);
    ctx.fillStyle = 'rgba(255,255,255,0.18)'; rr(ctx, -w / 2 + w * 0.05, -h / 2 + h * 0.14, w * 0.12, h * 0.5, 6); ctx.fill();
    if (o.brick) { const bx = -w / 2 + size * 0.18; ctx.fillStyle = o.brick; rr(ctx, bx, -size * 0.18, size * 0.32, size * 0.36, 5); ctx.fill(); }
    ctx.font = `700 ${size}px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = fg; ctx.fillText(text, (o.brick ? size * 0.16 : 0), size * 0.05);
    ctx.restore();
    if (o.strike) { // a grey plate slapped across the tile
      const s2 = popS(t, o.strike); if (s2 > 0) { ctx.save(); ctx.translate(cx, cy); ctx.rotate(-0.12); ctx.scale(s2, s2); brick(ctx, -w * 0.6, -size * 0.18, Math.ceil(w * 1.2 / (size * 0.5)), 1, 1, C.dgrey, size * 0.5, { shadow: false }); ctx.restore(); }
    }
  }

  // ---------------- real desk backgrounds (cached) ----------------
  const BGK = {
    walnut: { wall: ['#d8cdbd', '#bfb09c'], wood: [107, 74, 51], hor: 820, props: [['mug', 230, 600, 1], ['plant', 880, 520, 1.1], ['bokeh', 600, 300, 1]] },
    macro: { wall: ['#e2d3bf', '#c9b192'], wood: [126, 88, 58], hor: 640, props: [['bokeh', 300, 240, 2.2], ['bokeh', 820, 420, 1.8], ['mug', 860, 460, 1.6]] },
    oak: { wall: ['#d3dade', '#b9c4ca'], wood: [186, 140, 92], hor: 760, props: [['window', 760, 300, 1], ['book', 170, 640, 1], ['bokeh', 400, 260, 1]] },
    sill: { wall: ['#bfd8ea', '#e7eef2'], wood: [226, 222, 212], hor: 840, props: [['trees', 540, 600, 1], ['window', 300, 280, 0.8], ['plant', 160, 640, 0.9]] },
    paper: { wall: ['#cfc7bb', '#a99d8e'], wood: [150, 104, 70], hor: 700, props: [['lamp', 830, 420, 1], ['book', 220, 560, 0.8], ['bokeh', 520, 260, 1]], paper: true },
    kitchen: { wall: ['#e6e1d6', '#cfc8b8'], wood: [168, 120, 78], hor: 780, props: [['tiles', 540, 400, 1], ['mug', 860, 640, 0.9], ['plant', 170, 600, 0.8]] },
  };
  const BGC = {};
  function bg(kind) {
    if (BGC[kind]) return BGC[kind];
    const k = BGK[kind], L = H.layer(W0, H0), c = L.getContext('2d'), hor = k.hor;
    const g = c.createLinearGradient(0, 0, 0, hor); g.addColorStop(0, k.wall[0]); g.addColorStop(1, k.wall[1]);
    c.fillStyle = g; c.fillRect(0, 0, W0, hor + 4);
    c.save(); c.filter = 'blur(26px)';
    const R = H.rng(kind);
    k.props.forEach(([p, x, y, s]) => {
      if (p === 'mug') { c.fillStyle = '#f4f1ea'; rr(c, x - 110 * s, y - 120 * s, 220 * s, 260 * s, 30 * s); c.fill(); c.strokeStyle = '#ece6da'; c.lineWidth = 34 * s; c.beginPath(); c.arc(x + 130 * s, y, 60 * s, -1.2, 1.2); c.stroke(); c.fillStyle = '#c84a3a'; c.fillRect(x - 110 * s, y - 20 * s, 220 * s, 40 * s); }
      if (p === 'plant') { c.fillStyle = '#b87a52'; c.fillRect(x - 80 * s, y + 40 * s, 160 * s, 200 * s); c.fillStyle = '#4f7d43'; for (let i = 0; i < 9; i++) { c.beginPath(); c.ellipse(x + R.range(-150, 150) * s, y + R.range(-260, 20) * s, 70 * s, 120 * s, R.range(-1, 1), 0, TAU); c.fill(); } }
      if (p === 'bokeh') { for (let i = 0; i < 9; i++) { c.fillStyle = `rgba(255,${R.int(220, 250)},${R.int(180, 230)},${R.range(0.25, 0.6)})`; c.beginPath(); c.arc(x + R.range(-380, 380) * s, y + R.range(-200, 200) * s, R.range(30, 80) * s, 0, TAU); c.fill(); } }
      if (p === 'window') { c.fillStyle = 'rgba(255,255,250,0.95)'; c.fillRect(x - 220 * s, y - 220 * s, 440 * s, 520 * s); c.fillStyle = 'rgba(160,190,210,0.6)'; c.fillRect(x - 10, y - 220 * s, 20, 520 * s); }
      if (p === 'book') { ['#2f5d8c', '#b8463a', '#d8b54a'].forEach((cc, i) => { c.fillStyle = cc; c.fillRect(x - 120 * s + i * 85 * s, y - 280 * s + i * 30 * s, 75 * s, 300 * s - i * 30 * s); }); }
      if (p === 'trees') { c.fillStyle = '#7fae6a'; for (let i = 0; i < 12; i++) { c.beginPath(); c.arc(R.range(0, W0), y + R.range(-120, 140), R.range(80, 170), 0, TAU); c.fill(); } }
      if (p === 'lamp') { c.fillStyle = '#2b2b2e'; c.beginPath(); c.moveTo(x - 140, y - 60); c.lineTo(x + 140, y - 60); c.lineTo(x + 70, y - 220); c.lineTo(x - 70, y - 220); c.fill(); c.fillStyle = 'rgba(255,240,200,0.9)'; c.beginPath(); c.ellipse(x, y - 50, 150, 40, 0, 0, TAU); c.fill(); c.fillStyle = '#2b2b2e'; c.fillRect(x - 12, y - 60, 24, 400); }
      if (p === 'tiles') { c.strokeStyle = 'rgba(255,255,255,0.8)'; c.lineWidth = 10; for (let i = -6; i < 8; i++) { c.beginPath(); c.moveTo(i * 120, 0); c.lineTo(i * 120, hor); c.stroke(); } for (let j = 0; j < 8; j++) { c.beginPath(); c.moveTo(0, j * 120); c.lineTo(W0, j * 120); c.stroke(); } }
    });
    c.restore();
    // the desk: wood grain in perspective, by pixels
    const img = c.getImageData(0, hor, W0, H0 - hor), d = img.data, nz = H.makeNoise(kind.length * 7 + 3), [br, bgc, bb] = k.wood;
    for (let y = 0; y < H0 - hor; y++) {
      const v = -2600 / (y + 90), dep = H.clamp(y / 500);
      for (let x = 0; x < W0; x++) {
        const xx = (x - 540) * (0.0018 + 0.0012 * (1 - dep));
        let s;
        if (k.paper && x > 120 && x < 960 && y > 40) s = 1.0 + (Math.abs(((v * 3.2) % 1 + 1) % 1 - 0.5) < 0.03 ? -0.08 : 0);
        else { const gr = nz.fbm2(xx * 2.2, v * 0.6, 2); s = 0.8 + 0.22 * (0.5 + 0.5 * Math.sin(gr * 16 + v * 0.4)); }
        const i = (y * W0 + x) * 4;
        const shade = 0.82 + 0.24 * dep;
        if (k.paper && x > 120 && x < 960 && y > 40) { d[i] = 240 * s * shade; d[i + 1] = 234 * s * shade; d[i + 2] = 220 * s * shade; }
        else { d[i] = br * s * shade; d[i + 1] = bgc * s * shade; d[i + 2] = bb * s * shade; }
        d[i + 3] = 255;
      }
    }
    c.putImageData(img, 0, hor);
    // far desk is out of focus
    const far = H.layer(W0, 260), fc = far.getContext('2d'); fc.filter = 'blur(7px)'; fc.drawImage(L, 0, hor - 10, W0, 260, 0, 0, W0, 260);
    c.drawImage(far, 0, 0, W0, 240, 0, hor - 10, W0, 240);
    const ed = c.createLinearGradient(0, hor - 8, 0, hor + 14); ed.addColorStop(0, 'rgba(0,0,0,0)'); ed.addColorStop(0.5, 'rgba(255,255,255,0.18)'); ed.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = ed; c.fillRect(0, hor - 8, W0, 22);
    // key light from the upper left, slightly cool grade
    const kl = c.createRadialGradient(150, 200, 100, 300, 500, 1700); kl.addColorStop(0, 'rgba(255,248,236,0.22)'); kl.addColorStop(1, 'rgba(0,0,0,0.18)');
    c.fillStyle = kl; c.fillRect(0, 0, W0, H0);
    c.fillStyle = 'rgba(120,150,190,0.05)'; c.fillRect(0, 0, W0, H0);
    return (BGC[kind] = L);
  }

  // ---------------- the brick tick (side view, facing left) ----------------
  // x,y = ground point under the body centre; sw = swell 0..1 (rebuilt in brick steps)
  function tick(ctx, x, y, U, o = {}) {
    const sw = Math.round((o.swell || 0) * 6) / 6, bw = 1 + sw * 1.1, bh = 1 + sw * 1.25;
    const body = '#' + H.mix(C.tick, '#8a7f86', sw * 0.75).map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
    const lift = o.lift || 0, ph = o.walk == null ? null : o.walk;
    ctx.save(); ctx.translate(x, y); if (o.rot) ctx.rotate(o.rot);
    blob(ctx, U * 0.4, 0, U * 3.6 * bw, U * 0.55, 0.32);
    const by = -U * 1.0 - lift;
    const leg = (lx, side, k) => {
      const sw2 = ph == null ? 0 : Math.sin(ph * Math.PI + k * 1.7) * 0.55 * U;
      const hip = [lx * bw, by + U * 0.2], knee = [lx * bw * 1.25 + side * U * 0.6 + sw2, by - U * 0.9], foot = [lx * bw * 1.45 + side * U * 1.3 + sw2, -lift * 0];
      const col = side < 0 ? '#3a1d14' : '#2c140e';
      bar(ctx, hip[0], hip[1], knee[0], knee[1], U * 0.34, col); bar(ctx, knee[0], knee[1], foot[0], foot[1], U * 0.3, col);
      joint(ctx, knee[0], knee[1], U * 0.22, '#4a2a1e');
    };
    [[-1.8, -1, 0], [-0.6, -1, 1], [0.6, 1, 2], [1.8, 1, 3]].forEach(([lx, sd, k]) => leg(lx * U, sd, k + 4));
    // body rows (stacked bricks, narrowing)
    const rows = [[6, 3], [5, 3], [3, 2]];
    let yy = by;
    rows.forEach(([w, h], i) => {
      const ww = w * bw, hh = h * bh;
      const wq = Math.max(1, Math.round(ww));
      yy -= hh * 0.4 * U;
      brick(ctx, -wq * U / 2, yy, wq, Math.max(1, Math.round(hh)), 2, i === 2 && sw < 0.3 ? C.scut : body, U, { shadow: false });
    });
    // head (capitulum) at the front-left with palps and eyes
    const hx = -(3 * bw) * U - U * 1.2, hy = by - U * 0.9;
    brick(ctx, hx, hy, 2, 2, 1, C.head, U, { shadow: false });
    joint(ctx, hx + U * 0.55, hy + U * 0.35, U * 0.2, '#f6f2ea'); joint(ctx, hx + U * 0.6, hy + U * 0.38, U * 0.09, '#111');
    if (o.mouth !== false) {
      const md = o.mouthDepth == null ? 0.9 : o.mouthDepth;
      bar(ctx, hx + U * 0.25, hy + U * 0.8, hx + U * 0.1, hy + U * 0.8 + U * md + lift, U * 0.18, C.spear);
    }
    // front legs in front of the body
    [[-1.2, -1, 1.2], [1.2, 1, 2.6]].forEach(([lx, sd, k]) => leg(lx * U, sd, k));
    ctx.restore();
  }

  // ---------------- skin, cut away like a brick wall ----------------
  const SEC = { U: 54, top: 1000, hole: [486, 594] };
  function section(ctx, o = {}) {
    const U = SEC.U, x0 = -U * 4, cols = 28, top = SEC.top, [h0, h1] = SEC.hole;
    const inHole = (xa, xb) => xb > h0 + 1 && xa < h1 - 1;
    const rowsDef = [[C.skin, 1], [C.skin, 1], [C.derm, 3], [C.derm, 3], [C.derm, 3], [C.derm, 3], [C.fat, 3], [C.fat, 3], [C.fat, 3]];
    let y = top;
    rowsDef.forEach(([col, h], r) => {
      const off = r % 2 ? U : 0, bwid = 2;
      for (let c = -1; c < cols / bwid + 1; c++) {
        const xa = x0 + off + c * bwid * U, xb = xa + bwid * U;
        const holeDepth = o.holeDepth == null ? 6 : o.holeDepth;
        if (r < holeDepth && inHole(xa, xb)) {
          // split brick around the hole
          if (xa < h0) brick(ctx, xa, y, Math.round((h0 - xa) / U), h, r === 0 ? 1 : 0, col, U, { shadow: false, matte: true });
          if (xb > h1) brick(ctx, h1, y, Math.round((xb - h1) / U), h, r === 0 ? 1 : 0, col, U, { shadow: false, matte: true });
          continue;
        }
        brick(ctx, xa, y, bwid, h, r === 0 ? 1 : 0, col, U, { shadow: false, matte: true });
      }
      y += h * 0.4 * U;
    });
    // hole interior
    const hd = o.holeDepth == null ? 6 : o.holeDepth; let hy = top; for (let r = 0; r < hd; r++) hy += rowsDef[r][1] * 0.4 * U;
    if (hd > 0) { const g = ctx.createLinearGradient(h0, 0, h1, 0); g.addColorStop(0, '#5a1f1c'); g.addColorStop(0.5, '#8a3a33'); g.addColorStop(1, '#4a1715'); ctx.fillStyle = g; ctx.fillRect(h0, top - 2, h1 - h0, hy - top + 2); ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(h0, top - 2, 8, hy - top); }
    // blood vessels end-on
    [[200, 1180], [860, 1120], [330, 1270], [720, 1250], [130, 1080], [960, 1290]].forEach(([vx, vy]) => {
      ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.beginPath(); ctx.arc(vx + 4, vy + 4, 30, 0, TAU); ctx.fill();
      joint(ctx, vx, vy, 28, C.blood); ctx.fillStyle = '#5c0810'; ctx.beginPath(); ctx.arc(vx, vy, 12, 0, TAU); ctx.fill();
    });
    // the cut face is lit flat; the desk under it gets a contact shadow
    blob(ctx, 540, y + 6, 900, 40, 0.4);
    return y;
  }
  // tick head seen from the front, above the skin
  function headFront(ctx, o = {}) {
    const U = SEC.U, cx = 540, hy = o.y == null ? 800 : o.y;
    brick(ctx, cx - 5 * U, hy - 3 * 1.2 * U, 10, 3, 2, C.tick, U, { shadow: false });
    brick(ctx, cx - 4 * U, hy - 2 * 1.2 * U, 8, 3, 0, C.tickD, U, { shadow: false });
    brick(ctx, cx - 3 * U, hy - 1.2 * U, 6, 3, 0, C.scut, U, { shadow: false });
    brick(ctx, cx - 2 * U, hy, 4, 3, 0, C.head, U, { shadow: false });
    joint(ctx, cx - 0.9 * U, hy + 0.5 * U, U * 0.32, '#f6f2ea'); joint(ctx, cx - 0.85 * U, hy + 0.55 * U, U * 0.15, '#111');
    joint(ctx, cx + 0.9 * U, hy + 0.5 * U, U * 0.32, '#f6f2ea'); joint(ctx, cx + 0.95 * U, hy + 0.55 * U, U * 0.15, '#111');
    // palps rest on the skin either side
    const pl = (sx) => { brick(ctx, sx, hy + 1.2 * U, 1, 3, 0, C.head, U, { shadow: false }); brick(ctx, sx, hy + 2.4 * U, 1, 2, 0, sh(C.head, -0.1), U, { shadow: false }); };
    pl(cx - 3 * U); pl(cx + 2 * U);
  }
  // the hypostome: a spear with backward barbs. tip at (540, tipY); nb = barbs shown (fractional = flying in)
  function spear(ctx, tipY, len, t, barbTimes) {
    const U = SEC.U, w = U * 0.7, cx = 540, top = tipY - len;
    const g = ctx.createLinearGradient(cx - w / 2, 0, cx + w / 2, 0); g.addColorStop(0, sh(C.spear, 0.3)); g.addColorStop(0.4, C.spear); g.addColorStop(1, sh(C.spear, -0.4));
    ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(cx - w / 2, top); ctx.lineTo(cx + w / 2, top); ctx.lineTo(cx + w / 2, tipY - w); ctx.lineTo(cx, tipY); ctx.lineTo(cx - w / 2, tipY - w); ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.fillRect(cx - w * 0.3, top, w * 0.1, len - w);
    (barbTimes || []).forEach((bt, i) => {
      const f = flyIn(t, bt, 0, 0, 0.17); if (!f) return;
      const by = tipY - w * 1.2 - i * U * 1.25, bw = U * 0.62, bh = U * 0.8;
      [-1, 1].forEach((s) => wedge(ctx, [[cx + s * w / 2, by + f.y - bh * 0.1], [cx + s * (w / 2 + bw), by - bh * 0.75 + f.y], [cx + s * w / 2, by + bh * 0.45 + f.y]], sh(C.spear, -0.05)));
    });
  }

  // ---------------- scenes ----------------
  function cam(ctx, z, fx, fy, sx = 0, sy = 0) { ctx.translate(540 + sx, 960 + sy); ctx.scale(z, z); ctx.translate(-fx, -fy); }

  // S1 hook: the tick walks onto skin and glues itself in
  const S1 = { glue: [0, 1, 2, 3, 4].map((i) => snap(P(0, 'glues') + 0.08 + i * 0.09)) };
  lab(P(0, 'tick')); lab(P(0, 'thirty')); lab(P(1, 'never'));
  function sceneHook(ctx, t) {
    ctx.drawImage(bg('walnut'), 0, 0);
    ctx.save(); const z = H.lerp(0.94, 1.08, H.smooth(0, 4.9, t)); cam(ctx, z, 560, 960);
    const U = 84;
    brick(ctx, -60, 1190, 15, 1, 6, C.skin, U, { matte: true, tf: 0.4 });
    const walkEnd = P(0, 'glues');
    const q = q12(t), wu = H.clamp((q - 0.0) / walkEnd);
    const tx = H.lerp(1100, 680, H.ease.out(wu));
    const plant = q >= walkEnd;
    const ty = 1180;
    tick(ctx, tx, ty, U, { walk: plant ? null : q * 6, mouthDepth: plant ? 1.2 : 0.5 });
    // glue bricks pop around the mouthparts
    S1.glue.forEach((tl, i) => {
      const f = flyIn(t, tl, (i - 2) * 30, -80, 0.17); if (!f) return;
      const hx = tx - 3 * U - U * 1.2 + U * 0.1;
      brick(ctx, hx - U * 0.9 + (i - 2) * U * 0.42 + f.x, ty - U * 0.3 + f.y, 1, 1, 1, C.cement, U * 0.6, { trans: true });
    });
    ctx.restore();
    tile(ctx, 540, 330, 'GLUED IN', 110, t, P(0, 'tick'), { bg: C.white, fg: C.black, brick: C.red });
    tile(ctx, 540, 520, '30 MIN', 150, t, P(0, 'thirty') - 0.1, { bg: C.yellow, fg: C.black, rot: -0.03 });
    tile(ctx, 540, 1480, 'YOU NEVER FEEL IT', 64, t, P(1, 'never') - 0.1, { bg: C.black, fg: '#ffffff', brick: C.yellow });
  }

  // S2 macro: two scissor blades snip a hole
  const S2 = { snip: snap(P(3, 'snip')), cut2: snap(P(3, 'hole')) };
  lab(P(2, 'scissor')); lab(P(3, 'snip'));
  function sceneSnip(ctx, t) {
    ctx.drawImage(bg('macro'), 0, 0);
    const U = 72, tf = 0.72, px = 0, py = 1520, d = 9, th = d * U * tf;
    ctx.save(); const z = H.lerp(1.0, 1.12, H.smooth(PS(2), PS(4), t)); cam(ctx, z, 540, 1060);
    const cut = q12(t) >= S2.snip;
    // patch of skin: columns 6..8, rows 4..6 (3x3 studs) is the piece that gets snipped out
    const inPatch = (i, j) => i >= 6 && i <= 8 && j >= 4 && j <= 6;
    brick(ctx, px, py, 15, 1, d, C.skin, U, { matte: true, tf, skip: inPatch });
    const pxp = px + 6 * U, pyp = py - th + 4 * th / d, pw = 3 * U, ph = 3 * th / d;
    // hole
    ctx.fillStyle = '#7a2a26'; rr(ctx, pxp, pyp, pw, ph, 10); ctx.fill();
    ctx.fillStyle = 'rgba(0,0,0,0.45)'; rr(ctx, pxp, pyp, pw, ph * 0.35, 10); ctx.fill();
    if (!cut) brick(ctx, pxp, pyp + ph - U * 0.4 * 0, 3, 0, 3, C.skin, U, { matte: true, tf, shadow: false });
    else { // the snipped piece flies away and tumbles (break without harm)
      const u = q12(t) - S2.snip;
      const fx = pxp + u * 520, fy = pyp - 60 - u * 900 + u * u * 1400, rot = u * 5;
      ctx.save(); ctx.translate(fx + pw / 2, fy); ctx.rotate(rot); brick(ctx, -pw / 2, -U * 0.2, 3, 1, 2, C.skin, U * 0.9, { matte: true, shadow: false }); ctx.restore();
    }
    // the blades: open-close on 12 fps
    const q = q12(t), open = q < P(2, 'scissor') ? 0.6 : (q < S2.snip ? 0.6 + 0.4 * Math.abs(Math.sin((q - P(2, 'scissor')) * 7)) : (q < S2.snip + 0.25 ? 0.05 : 0.5));
    const hx = 540, hy = 820;
    headTop(ctx, hx, hy, U);
    const bl = (s) => { const a = s * (0.18 + open * 0.32); const tipx = 540 + s * (14 + open * 190), tipy = 1290; bar(ctx, hx + s * 30, hy, tipx, tipy, U * 0.42, C.lgrey); wedge(ctx, [[tipx - s * 4, tipy - 50], [tipx - s * 50, tipy + 40], [tipx + s * 20, tipy - 10]], C.lgrey); joint(ctx, hx + s * 30, hy, U * 0.35, C.dgrey); };
    bl(-1); bl(1);
    ctx.restore();
    tile(ctx, 540, 300, 'CHELICERAE', 84, t, P(2, 'scissor') - 0.1, { bg: C.white, fg: C.black, brick: C.blue });
    tile(ctx, 230, 1620 - 120, 'SNIP!', 120, t, P(3, 'snip') - 0.05, { bg: C.red, fg: '#ffffff', rot: -0.06 });
  }
  function headTop(ctx, hx, hy, U) {
    brick(ctx, hx - 4 * U, hy - U * 1.6 - U * 1.6, 8, 4, 2, C.tick, U, { shadow: false });
    brick(ctx, hx - 2.5 * U, hy - U * 1.6, 5, 4, 0, C.head, U, { shadow: false });
    joint(ctx, hx - U * 1.1, hy - U * 1.05, U * 0.32, '#f6f2ea'); joint(ctx, hx - U * 1.05, hy - U, U * 0.15, '#111');
    joint(ctx, hx + U * 1.1, hy - U * 1.05, U * 0.32, '#f6f2ea'); joint(ctx, hx + U * 1.15, hy - U, U * 0.15, '#111');
  }

  // S3 cross-section: the hypostome slides in, barbs, fishhook
  const S3 = { slideA: P(4, 'slides'), slideB: P(4, 'spear') + 0.2, barbs: [0, 1, 2, 3].map((i) => snap(P(5, 'barbs') + i * 0.17)) };
  snap(S3.slideB); lab(P(4, 'hypostome')); lab(P(5, 'backwards')); lab(P(6, 'fishhook'));
  const TIP = 1300, SLEN = 470;
  function sceneSpear(ctx, t) {
    ctx.drawImage(bg('oak'), 0, 0);
    ctx.save();
    const z = H.lerp(0.98, 1.1, H.smooth(PS(5), PE(5), t)), fy = H.lerp(1050, 1090, H.smooth(PS(5), PE(5), t));
    cam(ctx, z, 540, fy);
    section(ctx);
    const u = H.clamp((q12(t) - S3.slideA) / (S3.slideB - S3.slideA));
    const tipY = H.lerp(SEC.top - 60, TIP, H.ease.inOut(u));
    spear(ctx, tipY, SLEN, t, S3.barbs);
    headFront(ctx, { y: tipY - SLEN - 3 });
    // the fishhook, built from a grey bar piece
    const fs = popS(t, P(6, 'fishhook') - 0.1);
    if (fs > 0) { ctx.save(); ctx.translate(850, 560); ctx.scale(fs, fs); hook(ctx); ctx.restore(); }
    ctx.restore();
    tile(ctx, 290, 360, 'HYPOSTOME', 76, t, P(4, 'hypostome') - 0.1, { bg: C.white, fg: C.black, brick: C.orange });
    if (q12(t) >= P(5, 'backwards') - 0.1) { tile(ctx, 290, 500, 'BARBS POINT BACK', 52, t, P(5, 'backwards') - 0.1, { bg: C.yellow, fg: C.black }); }
    tile(ctx, 820, 840, 'FISHHOOK', 56, t, P(6, 'fishhook') - 0.05, { bg: C.blue, fg: '#ffffff' });
  }
  function hook(ctx) {
    ctx.save(); ctx.lineCap = 'round';
    const path = () => { ctx.beginPath(); ctx.moveTo(0, -210); ctx.lineTo(0, 40); ctx.arc(-60, 40, 60, 0, Math.PI * 0.95); ctx.lineTo(-125, -10); };
    ctx.strokeStyle = '#5d6166'; ctx.lineWidth = 34; path(); ctx.stroke();
    ctx.strokeStyle = '#a7adb3'; ctx.lineWidth = 22; path(); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-6, -200); ctx.lineTo(-6, 30); ctx.stroke();
    wedge(ctx, [[-125, -40], [-95, 20], [-140, 15]], '#8d939a');
    joint(ctx, 0, -225, 26, '#7b8086');
    ctx.restore();
  }

  // S4 tug: it won't slide back out
  const S4 = { tugs: [P(7, 'wont'), P(7, 'slide') + 0.08, P(7, 'out')] };
  S4.tugs.forEach(snap); lab(P(7, 'wont'));
  function sceneStuck(ctx, t) {
    ctx.drawImage(bg('sill'), 0, 0);
    ctx.save();
    let sx = 0, sy = 0; S4.tugs.forEach((tt) => { const s = shake(t, tt, 12, 0.3); sx += s[0]; sy += s[1]; });
    cam(ctx, H.lerp(1.3, 1.42, H.smooth(PS(7), PS(8), t)), 540, 1020, sx, sy);
    section(ctx);
    let lift = 0; S4.tugs.forEach((tt) => { const u = q12(t) - tt; if (u >= 0 && u < 0.25) lift = Math.max(lift, u < 0.12 ? 22 : 10); });
    spear(ctx, TIP - lift, SLEN, t, [0, 0, 0, 0]);
    headFront(ctx, { y: TIP - lift - SLEN - 3 });
    // the yellow brick arrow pulling up
    const ay = 560 - lift;
    ctx.restore();
    tile(ctx, 540, 1520, 'STUCK!', 140, t, P(7, 'wont') - 0.05, { bg: C.red, fg: '#ffffff', rot: 0.04 });
  }

  // S5 cement: saliva oozes and hardens into a cone of glue
  const CEM = [];
  (function () {
    // fill the hole around the spear bottom-up, then a collar on top that narrows (a cone)
    const t0 = P(11, 'hardens'), t1 = P(12, 'spear');
    const U = SEC.U, cells = [];
    const rowsY = [1043 + 65 * 3, 1043 + 65 * 2, 1043 + 65, 1043, 1022, 1000];
    rowsY.forEach((y, r) => { const h = r < 4 ? 3 : 1; cells.push({ x: 486, y, w: 0.5, h }, { x: 540 + 19, y, w: 0.65, h }); });
    // collar above the surface (cone)
    [[4, 0], [3, 1], [2, 2]].forEach(([w, r]) => { const yy = 1000 - (r + 1) * 0.4 * U * 2; cells.push({ x: 540 - w * U / 2, y: yy, w: w / 2 - 0.35, h: 2, collar: 'L', W: w }, { x: 540 + 19, y: yy, w: w / 2 - 0.35, h: 2, collar: 'R', W: w }); });
    cells.forEach((c, i) => { c.tl = snap(H.lerp(t0, t1, i / (cells.length - 1))); CEM.push(c); });
  })();
  lab(P(8, 'wild')); lab(P(9, 'minutes')); lab(P(11, 'cement')); lab(P(12, 'cone'));
  function sceneCement(ctx, t) {
    ctx.drawImage(bg('kitchen'), 0, 0);
    ctx.save();
    const z = H.lerp(0.95, 1.18, H.smooth(PS(10), PE(12), t)); cam(ctx, z, 540, H.lerp(1040, 1010, H.smooth(PS(10), PE(12), t)));
    section(ctx);
    // cement cells (behind the spear inside the hole, collar in front)
    const drawCell = (c) => {
      const f = flyIn(t, c.tl, 0, -220, 0.25); if (!f) return;
      const U = SEC.U, fw = c.w;
      brick(ctx, c.x + f.x, c.y + f.y, 1, c.h, c.collar ? 1 : 0, f.land ? C.cement : '#f7e58a', U * fw, { shadow: false, trans: !f.land, alpha: f.land ? 1 : 0.75, studs: false });
    };
    CEM.filter((c) => !c.collar).forEach(drawCell);
    spear(ctx, TIP, SLEN, t, [0, 0, 0, 0]);
    CEM.filter((c) => c.collar).forEach((c) => {
      const f = flyIn(t, c.tl, c.collar === 'L' ? -160 : 160, -200, 0.25); if (!f) return;
      const U = SEC.U, wpx = (c.W * U - SEC.U * 0.7) / 2, x = c.collar === 'L' ? 540 - c.W * U / 2 : 540 + SEC.U * 0.35;
      ctx.save(); ctx.globalAlpha = f.land ? 1 : 0.8; brickW(ctx, x + f.x, c.y + f.y, wpx, c.h * 0.4 * U, f.land ? C.cement : '#f7e58a', U); ctx.restore();
    });
    headFront(ctx, { y: TIP - SLEN - 3 });
    // saliva droplets oozing down the spear (translucent round plates, 12 fps)
    const q = q12(t), d0 = P(10, 'oozing') - 0.2, d1 = P(11, 'hardens');
    if (q >= d0 && q < d1 + 0.3) for (let i = 0; i < 5; i++) {
      const u = ((q - d0) * 1.4 + i * 0.2) % 1, side = i % 2 ? 1 : -1;
      roundB(ctx, 540 + side * 34, H.lerp(870, 1080, u), 16, 14, '#cfe9f2', 30, { trans: true, alpha: 0.8, shadow: false });
    }
    ctx.restore();
    // the brick clock: within minutes
    const cs = popS(t, P(9, 'minutes') - 0.15);
    if (cs > 0) { ctx.save(); ctx.translate(170, 640); ctx.scale(cs, cs); roundB(ctx, 0, -40, 105, 50, C.white, 54, { shadow: true }); const a = -Math.PI / 2 + Math.floor((q12(t) - P(9, 'minutes')) * 12) * 0.5; ctx.save(); ctx.translate(0, -40); ctx.scale(1, 0.42); bar(ctx, 0, 0, Math.cos(a) * 80, Math.sin(a) * 80, 22, C.red); ctx.restore(); joint(ctx, 0, -40, 14, C.black); ctx.restore(); }
    tile(ctx, 400, 300, 'THE WILD PART', 84, t, P(8, 'wild') - 0.1, { bg: C.yellow, fg: C.black, brick: C.red });
    tile(ctx, 170, 790, 'MINUTES', 52, t, P(9, 'minutes') - 0.05, { bg: C.black, fg: '#ffffff' });
    tile(ctx, 300, 1540, 'CEMENT', 120, t, P(11, 'cement') - 0.1, { bg: C.cement, fg: C.black, brick: C.tan });
    tile(ctx, 770, 1460, 'CONE OF GLUE', 56, t, P(12, 'cone') - 0.1, { bg: C.white, fg: C.black, rot: 0.04 });
  }
  function brickW(ctx, x, y, w, h, col, U) {
    const r = U * 0.07, th = U * 0.36 * 2;
    ctx.fillStyle = sh(col, 0.14); rr(ctx, x, y - th, w, th + r, r); ctx.fill();
    const g = ctx.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, sh(col, 0.06)); g.addColorStop(1, sh(col, -0.3));
    ctx.fillStyle = g; rr(ctx, x, y, w, h, r); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.fillRect(x + r, y - 0.5, w - 2 * r, 2.5);
    ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(x, y + h - 2.5, w, 2.5);
    const n = Math.max(1, Math.round(w / U)); for (let i = 0; i < n; i++) stud(ctx, x + (i + 0.5) * (w / n), y - th / 2, U * 0.9, col, 0.5);
  }

  // S6 painkiller: the pain siren goes quiet
  const S6 = { drop: snap(P(13, 'painkiller') + 0.25) };
  lab(P(13, 'painkiller')); snap(P(14, 'notice'));
  function scenePain(ctx, t) {
    ctx.drawImage(bg('paper'), 0, 0);
    ctx.save(); cam(ctx, H.lerp(1.04, 0.96, H.smooth(PS(13), PS(15), t)), 540, 1000);
    const U = 60, q = q12(t);
    // base and siren
    brick(ctx, 360, 1180, 6, 3, 4, C.black, U);
    brick(ctx, 420, 1110, 4, 1, 3, C.lgrey, U);
    const calm = q >= P(14, 'notice');
    const flash = !calm && Math.floor(q * 6) % 2 === 0;
    if (flash) { ctx.save(); const g = ctx.createRadialGradient(540, 980, 20, 540, 980, 330); g.addColorStop(0, 'rgba(255,60,40,0.55)'); g.addColorStop(1, 'rgba(255,60,40,0)'); ctx.fillStyle = g; ctx.fillRect(140, 600, 800, 800); ctx.restore(); }
    roundB(ctx, 540, 900, 110, 200, calm ? '#9aa0a6' : (flash ? '#ff3b2a' : '#d42a1c'), U, { trans: true, stud: true });
    // the painkiller drop falls in on 12 fps steps
    const f = flyIn(t, S6.drop, 0, -520, 0.4);
    if (f) { if (!f.land) roundB(ctx, 540 + f.x, 780 + f.y, 70, 50, C.azure, U, { trans: true, alpha: 0.85, stud: true }); else { const sp = H.clamp((q - S6.drop) / 0.5); ctx.save(); ctx.globalAlpha = 0.6 * (1 - sp * 0.5); ctx.fillStyle = C.azure; ctx.beginPath(); ctx.ellipse(540, 905, 110, 44, 0, 0, TAU); ctx.fill(); ctx.restore(); } }
    ctx.restore();
    tile(ctx, 540, 330, 'PAINKILLER', 110, t, P(13, 'painkiller') - 0.1, { bg: C.azure, fg: '#ffffff', brick: C.white });
    tile(ctx, 540, 500, 'IN ITS SPIT', 64, t, P(13, 'painkiller') + 0.15, { bg: C.white, fg: C.black });
    tile(ctx, 540, 1520, 'OUCH!', 130, t, PS(13) + 0.1, { bg: C.red, fg: '#ffffff', strike: P(14, 'notice') - 0.05 });
  }

  // S7 a week, and swelling up 100x
  const S7 = { days: [0, 1, 2, 3, 4, 5, 6].map((i) => snap(H.lerp(P(15, 'hang'), P(15, 'week') + 0.1, i / 6))), plus: snap(P(15, 'more')), sw0: P(16, 'swell'), sw1: P(17, 'size') + 0.2 };
  for (let i = 1; i <= 6; i++) snap(H.lerp(S7.sw0, S7.sw1, i / 6));
  lab(P(15, 'week')); lab(P(17, 'hundred'));
  function sceneSwell(ctx, t) {
    ctx.drawImage(bg('walnut'), 0, 0);
    const q = q12(t), sw = H.clamp((q - S7.sw0) / (S7.sw1 - S7.sw0));
    // calendar row of plates (screen space, above the action)
    S7.days.forEach((tl, i) => {
      const f = flyIn(t, tl, 0, -160, 0.17); if (!f) return;
      const x = 95 + i * 128, y = 310 + f.y;
      brick(ctx, x, y, 2, 1, 2, i === 6 ? C.yellow : C.white, 56);
      ctx.save(); ctx.font = `700 46px ${FONT}`; ctx.textAlign = 'center'; ctx.fillStyle = C.black; ctx.fillText(String(i + 1), x + 56, y - 2); ctx.restore();
    });
    tile(ctx, 540, 470, 'A WEEK OR MORE', 76, t, P(15, 'more') - 0.1, { bg: C.black, fg: '#ffffff', brick: C.yellow });
    ctx.save(); cam(ctx, H.lerp(1.12, 0.86, H.smooth(S7.sw0, S7.sw1, t)), 560, 1080);
    const U = 44;
    brick(ctx, -60, 1210, 27, 1, 7, C.skin, U, { matte: true, tf: 0.4 });
    tick(ctx, 600, 1200, U, { swell: sw, mouthDepth: 1.3 });
    ctx.restore();
    tile(ctx, 820, 640, '×100', 150, t, P(17, 'hundred') - 0.1, { bg: C.yellow, fg: C.black, rot: 0.05 });
    tile(ctx, 820, 775, 'THEIR SIZE', 50, t, P(17, 'size') - 0.1, { bg: C.white, fg: C.black, rot: 0.05 });
  }

  // S8 full: breaks free of its own glue and drops off
  const S8 = { free: P(19, 'breaks'), drop: P(20, 'drops'), land: P(20, 'off') + 0.25, bits: [] };
  (function () { const R = H.rng('bits'); for (let i = 0; i < 7; i++) S8.bits.push({ t: S8.free + i * 0.08, vx: R.range(-420, 420), vy: R.range(-900, -600), spin: R.range(-8, 8), dx: R.range(-60, 60) }); S8.bits.forEach((b) => snap(b.t)); })();
  snap(S8.land); lab(P(18, 'full')); lab(P(19, 'minute'));
  function sceneRelease(ctx, t) {
    ctx.drawImage(bg('oak'), 0, 0);
    const q = q12(t), U = 30;
    const sk = shake(t, S8.land, 16, 0.4);
    ctx.save(); cam(ctx, 1.0, 540, 1080, sk[0], sk[1]);
    brick(ctx, 60, 1170, 22, 2, 7, C.skin, 44, { matte: true, tf: 0.4 });
    // the full tick: lifts, tips and drops off the edge to the desk
    let x = 520, y = 1160, rot = 0, lift = 0;
    if (q >= S8.drop) {
      const u = q - S8.drop, ul = S8.land - S8.drop;
      if (u < ul) { const e = u / ul; x = 520 + e * 220; y = 1160 - Math.sin(e * Math.PI) * 120 + e * e * 420; rot = e * 0.5; }
      else { const v = u - ul; x = 740 + Math.min(v, 0.3) * 40; y = 1580 - (v < 0.25 ? Math.sin(v / 0.25 * Math.PI) * 50 : 0); rot = 0.5 - Math.min(v, 0.3) * 1.6; }
    } else if (q >= S8.free) lift = 10;
    // glue collar at the bite (until it breaks)
    if (q < S8.free) { brick(ctx, 310, 1140, 2, 2, 1, C.cement, 40, { shadow: false }); }
    tick(ctx, x, y, U * 1.0 * 1.45, { swell: 1, rot, lift, mouth: q < S8.drop });
    S8.bits.forEach((b) => { const u = q - b.t; if (u < 0) return; const bx = 350 + b.dx + b.vx * u, by = 1140 + b.vy * u + 1300 * u * u; if (by > 1900) return; ctx.save(); ctx.translate(bx, by); ctx.rotate(b.spin * u); brick(ctx, -20, -10, 1, 2, 1, C.cement, 40, { shadow: false }); ctx.restore(); });
    ctx.restore();
    tile(ctx, 540, 330, 'FULL!', 120, t, P(18, 'full') - 0.1, { bg: C.green, fg: '#ffffff', brick: C.yellow });
    tile(ctx, 540, 520, 'LET\'S GO IN 1–2 MIN', 64, t, P(19, 'minute') - 0.1, { bg: C.white, fg: C.black });
  }

  // S9 end: two builds on the desk, the scale reveal, one question
  lab(P(21, 'grip')); lab(P(22, 'barbs')); lab(P(22, 'glue'));
  snap(P(22, 'barbs')); snap(P(22, 'glue'));
  function sceneEnd(ctx, t) {
    ctx.drawImage(bg('walnut'), 0, 0);
    ctx.save(); cam(ctx, H.lerp(1.15, 0.9, H.smooth(PS(21), DURATION, t)), 540, 1150);
    const U = 40;
    // left: the barbed spear on a stand
    const sL = popS(t, P(22, 'barbs') - 0.1), sR = popS(t, P(22, 'glue') - 0.1);
    brick(ctx, 120, 1300, 8, 3, 4, C.lgrey, U);
    brick(ctx, 580, 1300, 8, 3, 4, C.lgrey, U);
    if (sL > 0) { ctx.save(); ctx.translate(280, 1300); ctx.scale(sL, sL); ctx.translate(-540, -TIP + 0); ctx.scale(1, 1); spear(ctx, TIP, 520, 99, [0, 0, 0, 0]); ctx.restore(); }
    else { ctx.save(); ctx.translate(280, 1300); ctx.translate(-540, -TIP); spear(ctx, TIP, 520, 99, [0, 0, 0, 0]); ctx.restore(); }
    // right: the cone of glue
    ctx.save(); ctx.translate(740, 1300); const k = sR > 0 ? sR : 1; ctx.scale(k, k);
    [[6, 0], [5, 1], [4, 2], [3, 3], [2, 4]].forEach(([w, r]) => brick(ctx, -w * U / 2, -(r + 1) * 1.2 * U, w, 3, 2, C.cement, U, { shadow: r === 0 }));
    ctx.restore();
    ctx.restore();
    tile(ctx, 540, 300, 'WHICH GRIP IS', 96, t, P(21, 'which') - 0.1, { bg: C.white, fg: C.black });
    tile(ctx, 540, 450, 'SCARIER?', 130, t, P(21, 'scarier') - 0.1, { bg: C.red, fg: '#ffffff', rot: -0.03 });
    tile(ctx, 290, 1480, 'BARBS', 84, t, P(22, 'barbs') - 0.1, { bg: C.spear, fg: '#ffffff' });
    tile(ctx, 540, 1350, 'OR', 70, t, P(22, 'or') - 0.05, { bg: C.yellow, fg: C.black });
    tile(ctx, 790, 1480, 'GLUE', 84, t, P(22, 'glue') - 0.1, { bg: C.cement, fg: C.black });
  }

  // ---------------- edit ----------------
  const LA = H.layer(W0, H0), LB = H.layer(W0, H0);
  function render(f, L, t) { const c = L.getContext('2d'); c.setTransform(1, 0, 0, 1, 0, 0); c.globalAlpha = 1; c.clearRect(0, 0, W0, H0); f(c, t); return L; }
  const WHIP = 0.3;
  function whip(ctx, t, cut, fOld, fNew) { // a whip along the desk
    const u = (t - cut) / WHIP + 0.5;
    if (u <= 0) return fOld(ctx, t); if (u >= 1) return fNew(ctx, t);
    const e = H.ease.inOut(u), v = Math.sin(u * Math.PI);
    render(fOld, LA, t); render(fNew, LB, t);
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W0, H0);
    for (let k = 3; k >= 0; k--) {
      ctx.globalAlpha = k ? 0.22 : 1;
      ctx.drawImage(LA, -e * W0 + k * 60 * v, 0); ctx.drawImage(LB, (1 - e) * W0 + k * 60 * v, 0);
    }
    ctx.globalAlpha = 1;
  }
  function lensBrick(ctx, t, cut, fOld, fNew) { // a big red brick passes over the lens
    const D = 0.5, u = (t - cut) / D + 0.5;
    if (u <= 0) return fOld(ctx, t); if (u >= 1) return fNew(ctx, t);
    (u < 0.5 ? fOld : fNew)(ctx, t);
    const y = H.lerp(H0 + 200, -2400, q12(u * D) / D);
    brick(ctx, -60, y, 5, 22, 1, C.red, 240, { shadow: false });
  }
  const SC = [
    { f: sceneHook }, { p: 2, f: sceneSnip, tr: whip }, { p: 4, f: sceneSpear, tr: whip }, { p: 7, f: sceneStuck, tr: null },
    { p: 8, f: sceneCement, tr: lensBrick }, { p: 13, f: scenePain, tr: whip }, { p: 15, f: sceneSwell, tr: whip },
    { p: 18, f: sceneRelease, tr: whip }, { p: 21, f: sceneEnd, tr: lensBrick },
  ];
  SC.forEach((s) => { if (s.p != null) s.cut = PS(s.p) - 0.12; });
  function explainer(ctx, Wd, Hd, t) {
    ctx.save(); ctx.scale(Wd / W0, Hd / H0);
    let i = 0; for (let k = 1; k < SC.length; k++) if (t >= SC[k].cut - 0.3) i = k;
    const s = SC[i];
    if (i === 0 || !s.tr) s.f(ctx, t); else s.tr(ctx, t, s.cut, SC[i - 1].f, s.f);
    H.vignette(ctx, W0, H0, 0.28);
    ctx.restore();
  }

  // ---------------- sound ----------------
  function scoreSound(k) {
    const click = (t, g = 1, p = 0) => { // brick click: short transient + resonances near 2.9 and 4.6 kHz
      k.noise(t, { dur: 0.02, filter: 'highpass', f: 2500, gain: 0.3 * g, a: 0.0005, pan: p, minor: true });
      k.tone(t, { f: 2900, dur: 0.05, gain: 0.07 * g, pan: p, minor: true }); k.tone(t, { f: 4600, dur: 0.035, gain: 0.05 * g, pan: p, minor: true });
    };
    const R = H.rng('clicks');
    SN.forEach((t) => { if (t >= 0 && t < DURATION) click(t, R.range(0.7, 1), R.range(-0.4, 0.4)); });
    DINGS.forEach((t, i) => k.play('pop', t - 0.03, { gain: 0.32, f: 600 + (i % 4) * 90 }));
    SC.forEach((s) => { if (s.cut != null) k.play('whoosh', s.cut - 0.15, { dur: 0.35, gain: 0.42 }); });
    // little plastic footsteps while the tick walks in
    for (let x = 0.1; x < P(0, 'glues'); x += 1 / 6) k.play('tick', x, { gain: 0.18, minor: true });
    k.play('ding', P(0, 'thirty'), { f: 'E5', gain: 0.3 });
    k.play('swish', P(3, 'snip') - 0.02, { gain: 0.5 });
    k.play('thud', S3.slideB, { gain: 0.5, f: 120 });
    S4.tugs.forEach((t) => k.play('thud', t, { gain: 0.55, f: 95 }));
    k.play('sparkle', P(8, 'wild'), { n: 5, gain: 0.3 });
    for (let i = 0; i < 6; i++) k.play('tock', P(9, 'minutes') + i * (1 / 12) * 2, { gain: 0.2, minor: true });
    k.play('pop', S6.drop, { gain: 0.45, f: 380 });
    for (let x = PS(13); x < P(14, 'notice'); x += 1 / 3) k.play('blip', x, { gain: 0.14, minor: true });
    k.play('ding', P(15, 'week'), { f: 'C5', gain: 0.28 });
    k.play('powerup', S7.sw0, { gain: 0.25 });
    k.play('impact', S8.land, { gain: 0.6 });
    ['C5', 'E5', 'G5'].forEach((f, i) => k.play('ding', P(22, 'glue') + 0.35 + i * 0.1, { f, gain: 0.3 - i * 0.04, pan: (i - 1) * 0.25 }));
  }

  const BEATS = PH.map((p, i) => ({ i, s: p.s, e: p.e, text: p.text }));
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W0; window.VIDEO_H = H0;
})();
