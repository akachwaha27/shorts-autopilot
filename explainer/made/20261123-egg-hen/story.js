// ================= Brick Toy, vertical 1080x1920: "Why doesn't an egg crack when a hen sits on it?" =================
// Lemo-Opuscar "Brick Toy" style (MIT) drawn in Canvas 2D for this repo's harness. Unattended run: no storyboard step.
// Real eggs on a real desk; the hen, chick, weights, arrows and labels are built from bricks.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'p1', s: 0.25, e: 2.88, w: {a: 0.25, hen: 0.35, sits: 0.65, on: 1.06, her: 1.26, eggs: 1.56, for: 1.97, n21: 2.27, days: 2.48} },
    { id: 'p2', s: 3.26, e: 4.28, w: {and: 3.26, they: 3.45, dont: 3.7, crack: 3.96} },
    { id: 'p3', s: 4.74, e: 6.68, w: {so: 4.74, how: 4.88, does: 5.1, a: 5.39, tiny: 5.46, chick: 5.75, break: 6.11, out: 6.47} },
    { id: 'p4', s: 7.19, e: 8.44, w: {its: 7.19, all: 7.39, about: 7.59, the: 7.92, shape: 8.11} },
    { id: 'p5', s: 8.89, e: 11.25, w: {an: 8.89, egg: 9.07, is: 9.35, a: 9.53, dome: 9.62, like: 9.98, stone: 10.43, arch: 10.89} },
    { id: 'p6', s: 11.67, e: 12.9, w: {push: 11.67, on: 11.98, the: 12.13, outside: 12.36} },
    { id: 'p7', s: 13.18, e: 15.22, w: {and: 13.18, the: 13.34, force: 13.51, spreads: 13.79, across: 14.17, whole: 14.67, shell: 14.94} },
    { id: 'p8', s: 15.7, e: 17.92, w: {so: 15.7, no: 15.87, single: 16.04, spot: 16.55, takes: 16.89, the: 17.32, load: 17.58} },
    { id: 'p9', s: 18.3, e: 19.53, w: {squeezed: 18.3, end: 18.92, to: 19.15} },
    { id: 'p10', s: 19.91, e: 22.08, w: {an: 19.91, egg: 20.07, can: 20.31, hold: 20.55, about: 20.87, three: 21.28, kilos: 21.68} },
    { id: 'p11', s: 22.46, e: 25.92, w: {plus: 22.46, the: 22.74, hens: 22.96, weight: 23.24, is: 23.66, shared: 23.8, by: 24.23, nest: 24.58, and: 24.86, other: 25.29, eggs: 25.64} },
    { id: 'p12', s: 26.32, e: 28.45, w: {from: 26.32, the: 26.59, inside: 26.8, its: 27.21, a: 27.42, different: 27.48, story: 28.1} },
    { id: 'p13', s: 28.87, e: 30.68, w: {the: 28.87, chick: 29.09, pecks: 29.47, one: 29.85, tiny: 30.07, spot: 30.37} },
    { id: 'p14', s: 31.17, e: 33.83, w: {and: 31.17, a: 31.39, dome: 31.46, is: 31.76, weak: 31.9, against: 32.2, push: 32.79, from: 33.09, inside: 33.38} },
    { id: 'p15', s: 34.29, e: 35.64, w: {heres: 34.29, the: 34.67, clever: 34.89, part: 35.34} },
    { id: 'p16', s: 35.93, e: 39.07, w: {the: 35.93, chick: 36.13, pulls: 36.47, calcium: 36.8, from: 37.27, shell: 37.73, to: 38.07, build: 38.2, its: 38.54, bones: 38.74} },
    { id: 'p17', s: 39.52, e: 41.66, w: {so: 39.52, the: 39.66, shell: 39.88, gets: 40.23, thinner: 40.52, as: 41.02, it: 41.16, grows: 41.3} },
    { id: 'p18', s: 42.0, e: 43.88, w: {strong: 42.0, outside: 42.49, weak: 43.06, inside: 43.39} },
    { id: 'p19', s: 44.17, e: 46.81, w: {so: 44.17, could: 44.3, you: 44.64, crack: 44.85, an: 45.19, egg: 45.32, squeezing: 45.52, it: 46.13, end: 46.27, to: 46.47} },
  ];
  const B = Object.fromEntries(BEATS.map((b) => [b.id, b]));
  const T = (id, w) => B[id].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const FUR = '#ecebe4';
  // ---------- helpers ----------
  const ST = (t) => Math.ceil(t * 12) / 12;          // characters & bricks step on twos (12 fps), never late
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const PAL = { red: '#c91a09', blue: '#0055bf', yellow: '#f2cd37', green: '#237841', lime: '#58ab41', white: '#f2f2ee', black: '#1b2a34', grey: '#a0a5a9', dgrey: '#6c6e68', tan: '#e4cd9e', orange: '#fe8a18', pink: '#f785b1', dgreen: '#184632', tblue: '#aee9ef', torange: '#f9a23c', tyellow: '#f5e64b', purple: '#81007b' };
  const shade = (c, k) => H.rgba(k > 0 ? H.mix(c, '#ffffff', k) : H.mix(c, '#000000', -k));
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const poly = (ctx, pts) => { ctx.beginPath(); ctx.moveTo(pts[0], pts[1]); for (let i = 2; i < pts.length; i += 2) ctx.lineTo(pts[i], pts[i + 1]); ctx.closePath(); };
  const DX = 0.34, DY = -0.3; // oblique depth vector per px of depth

  // snap-in: pieces fly in on an arc and click home with a small overshoot (stepped)
  function snap(t, t0, from = 260) {
    const s = ST(t);
    if (s < t0 - 0.34) return null;
    if (s < t0) { const u = H.ease.in(ph(s, t0 - 0.34, t0)); return { dx: 0, dy: -from * (1 - u) - Math.sin(u * Math.PI) * 40, a: 1 }; }
    const v = ph(s, t0, t0 + 0.34); return { dx: 0, dy: v < 1 ? Math.sin(v * Math.PI * 2) * 6 * (1 - v) : 0, a: 1 };
  }
  const popK = (t, t0) => { const s = ST(t); if (s < t0 - 0.17) return 0; if (s < t0) return 0.75; const v = ph(s, t0, t0 + 0.25); return v < 1 ? 1 + 0.08 * Math.sin(v * Math.PI) : 1; };

  // ---------- brick drawing ----------
  function stud(ctx, cx, cy, r, col) {
    const ry = r * 0.5, h = r * 0.55;
    ctx.fillStyle = shade(col, -0.28); ctx.fillRect(cx - r, cy - h, r * 2, h);
    ctx.beginPath(); ctx.ellipse(cx, cy, r, ry, 0, 0, Math.PI); ctx.fill();
    const g = ctx.createLinearGradient(cx - r, 0, cx + r, 0); g.addColorStop(0, shade(col, -0.1)); g.addColorStop(0.35, shade(col, 0.25)); g.addColorStop(1, shade(col, -0.35));
    ctx.fillStyle = g; ctx.fillRect(cx - r, cy - h, r * 2, h); ctx.beginPath(); ctx.ellipse(cx, cy, r, ry, 0, 0, Math.PI); ctx.fill();
    ctx.fillStyle = shade(col, 0.2); ctx.beginPath(); ctx.ellipse(cx, cy - h, r, ry, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.beginPath(); ctx.ellipse(cx - r * 0.35, cy - h - ry * 0.1, r * 0.28, ry * 0.3, -0.3, 0, Math.PI * 2); ctx.fill();
  }
  // x,y = front-bottom-left corner; n studs wide, m deep; u = stud pitch px
  function brick(ctx, x, y, n, m, col, o = {}) {
    const u = o.u || 40, w = n * u, h = (o.plate ? 0.4 : o.h || 1.2) * u, d = o.d != null ? o.d : m * u, dx = d * DX, dy = d * DY;
    ctx.save(); if (o.alpha != null) ctx.globalAlpha *= o.alpha;
    // top
    ctx.fillStyle = shade(col, 0.16); poly(ctx, [x, y - h, x + w, y - h, x + w + dx, y - h + dy, x + dx, y - h + dy]); ctx.fill();
    // side
    ctx.fillStyle = shade(col, -0.3); poly(ctx, [x + w, y, x + w, y - h, x + w + dx, y - h + dy, x + w + dx, y + dy]); ctx.fill();
    // front with a soft vertical gradient (softbox from above)
    const g = ctx.createLinearGradient(0, y - h, 0, y); g.addColorStop(0, shade(col, 0.08)); g.addColorStop(1, shade(col, -0.14));
    ctx.fillStyle = g; ctx.fillRect(x, y - h, w, h);
    // softbox reflection + bevel highlight + seam AO
    ctx.fillStyle = 'rgba(255,255,255,0.22)'; rr(ctx, x + w * 0.06, y - h * 0.86, Math.min(w * 0.22, 60), h * 0.22, 4); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.55)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x + 2, y - h + 1); ctx.lineTo(x + w - 1, y - h + 1); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.beginPath(); ctx.moveTo(x + w, y - h); ctx.lineTo(x + w + dx, y - h + dy); ctx.stroke();
    ctx.fillStyle = 'rgba(0,0,0,0.28)'; ctx.fillRect(x, y - 3, w, 3);
    if (!o.tile) for (let j = m - 1; j >= 0; j--) for (let i = 0; i < n; i++) stud(ctx, x + (i + 0.5) * u + (j + 0.5) / m * dx, y - h + (j + 0.5) / m * dy, u * 0.3, col);
    ctx.restore();
    return { top: y - h, w, h };
  }
  // a printed tile carrying text (labels live on toy elements)
  function measure(ctx, s, size, wt = 700) { ctx.save(); ctx.font = `${wt} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; }
  function tile(ctx, s, cx, cy, size, o = {}) {
    const k = o.k == null ? 1 : o.k; if (k <= 0) return;
    const bg = o.bg || PAL.black, fg = o.fg || PAL.white, pad = size * 0.55, w = (o.w || measure(ctx, s, size)) + pad * 2, h = size * 1.45, d = size * 0.5;
    ctx.save(); ctx.translate(cx, cy); ctx.scale(k, k);
    ctx.fillStyle = 'rgba(0,0,0,0.25)'; rr(ctx, -w / 2 + 10, -h / 2 + 16, w, h, 10); ctx.fill();
    brick(ctx, -w / 2, h / 2, 1, 1, bg, { u: w, h: h / w, tile: true, d: size * 0.4 });
    ctx.restore();
    ctx.save(); ctx.translate(cx, cy); ctx.scale(k, k);
    // the depth fakes a top: shift text onto the front face
    ctx.font = `700 ${size}px "Fredoka"`; ctx.fillStyle = fg; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(s, 0, size * 0.05);
    if (o.icon) { ctx.fillStyle = o.icon; rr(ctx, -w / 2 + 12, -h / 2 + 12, size * 0.3, size * 0.3, 4); ctx.fill(); }
    ctx.restore();
    void d;
  }
  // round brick (cylinder) standing on y
  function roundBrick(ctx, cx, y, r, h, col, o = {}) {
    const ry = r * 0.45;
    ctx.save(); if (o.alpha != null) ctx.globalAlpha *= o.alpha;
    const g = ctx.createLinearGradient(cx - r, 0, cx + r, 0); g.addColorStop(0, shade(col, -0.15)); g.addColorStop(0.3, shade(col, 0.3)); g.addColorStop(0.45, shade(col, 0.05)); g.addColorStop(1, shade(col, -0.4));
    ctx.fillStyle = g; ctx.fillRect(cx - r, y - h, r * 2, h); ctx.beginPath(); ctx.ellipse(cx, y, r, ry, 0, 0, Math.PI); ctx.fill();
    ctx.fillStyle = shade(col, 0.18); ctx.beginPath(); ctx.ellipse(cx, y - h, r, ry, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.35)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(cx, y - 1, r, ry, 0, 0, Math.PI); ctx.stroke();
    if (!o.noStud) stud(ctx, cx, y - h + 2, r * 0.55, col);
    ctx.restore();
  }
  // top-down mosaic of 1x1 plates (plan view): pattern rows, map char->colour
  function mosaic(ctx, rows, x0, y0, c, map) {
    rows.forEach((row, j) => [...row].forEach((ch, i) => {
      const col = map[ch]; if (!col) return; const x = x0 + i * c, y = y0 + j * c;
      ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.fillRect(x + 3, y + 5, c, c);
      ctx.fillStyle = shade(col, -0.05); ctx.fillRect(x, y, c - 1, c - 1);
      ctx.fillStyle = shade(col, 0.12); ctx.fillRect(x, y, c - 1, 3); ctx.fillStyle = shade(col, -0.3); ctx.fillRect(x, y + c - 4, c - 1, 3);
      const r = c * 0.31; ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.beginPath(); ctx.arc(x + c / 2 + 3, y + c / 2 + 4, r, 0, 7); ctx.fill();
      const g = ctx.createRadialGradient(x + c / 2 - r * 0.4, y + c / 2 - r * 0.4, r * 0.1, x + c / 2, y + c / 2, r);
      g.addColorStop(0, shade(col, 0.45)); g.addColorStop(1, shade(col, -0.05)); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x + c / 2, y + c / 2, r, 0, 7); ctx.fill();
    }));
  }
  const SUN = ['..XXX..', '.XXXXX.', 'XXXXXXX', 'XXXXXXX', 'XXXXXXX', '.XXXXX.', '..XXX..'];
  const shadowBlob = (ctx, x, y, rx, ry, a = 0.32) => { const g = ctx.createRadialGradient(x, y, 0, x, y, rx); g.addColorStop(0, `rgba(30,20,10,${a})`); g.addColorStop(1, 'rgba(30,20,10,0)'); ctx.save(); ctx.translate(x, y); ctx.scale(1, ry / rx); ctx.translate(-x, -y); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, rx, 0, 7); ctx.fill(); ctx.restore(); };
  // ---------- top-down studs, eyes, arrows ----------
  function topStud(ctx, x, y, r, col) {
    ctx.fillStyle = 'rgba(0,0,0,0.28)'; ctx.beginPath(); ctx.arc(x + r * 0.2, y + r * 0.28, r, 0, 7); ctx.fill();
    const g = ctx.createRadialGradient(x - r * 0.4, y - r * 0.4, r * 0.1, x, y, r); g.addColorStop(0, shade(col, 0.45)); g.addColorStop(1, shade(col, -0.08));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  }
  // a brick arrow (plates + a wedge head) pointing along angle a, tip at (x,y)
  function arrow(ctx, x, y, a, len, col, k = 1) {
    if (k <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.scale(k, k);
    const u = 34; for (let i = 0; i < Math.round(len / u); i++) brick(ctx, -len + i * u - 10, u * 0.2, 1, 1, col, { u, plate: true, d: 14 });
    ctx.fillStyle = shade(col, -0.25); poly(ctx, [-6, -40, 26, 2, -6, 44]); ctx.fill(); ctx.fillStyle = col; poly(ctx, [-10, -36, 18, 0, -10, 36]); ctx.fill();
    ctx.restore();
  }
  // ---------- real-world sets (cached) ----------
  const BG = {};
  function bgSet(name) {
    if (BG[name]) return BG[name];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(name), nz = H.makeNoise(name.length * 7 + 3);
    if (name === 'face') { // macro: the goat's studded face fills the frame
      g.fillStyle = FUR; g.fillRect(0, 0, W, HH);
      for (let y = -40; y < HH + 80; y += 80) for (let x = -40; x < W + 80; x += 80) { g.fillStyle = 'rgba(0,0,0,0.06)'; g.fillRect(x - 40, y + 38, 80, 2); topStud(g, x, y, 22, FUR); }
      H.vignette(g, W, HH, 0.45, '40,35,30'); BG[name] = c; return c;
    }
    if (name === 'desk' || name === 'mat') { // plan view: a wooden desk or a green cutting mat seen from above
      if (name === 'desk') { g.fillStyle = '#c8955f'; g.fillRect(0, 0, W, HH); for (let i = 0; i < 70; i++) { g.strokeStyle = H.rgba('#8f5a2e', 0.08 + 0.12 * r()); g.lineWidth = 2 + r() * 4; g.beginPath(); const x0 = i * 16; for (let y = 0; y <= HH; y += 30) g.lineTo(x0 + nz.n2(i * 0.5, y * 0.003) * 40, y); g.stroke(); }
        g.save(); g.filter = 'blur(18px)'; g.fillStyle = '#f2f2ee'; g.fillRect(780, 1500, 360, 300); g.fillStyle = '#3b2a20'; g.beginPath(); g.arc(140, 300, 150, 0, 7); g.fill(); g.restore(); }
      else { g.fillStyle = '#2f7a5a'; g.fillRect(0, 0, W, HH); g.strokeStyle = 'rgba(255,255,255,0.22)'; g.lineWidth = 2; for (let x = 0; x < W; x += 60) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, HH); g.stroke(); } for (let y = 0; y < HH; y += 60) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); } g.strokeStyle = 'rgba(255,255,255,0.4)'; g.lineWidth = 4; for (let x = 0; x < W; x += 300) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, HH); g.stroke(); } }
      H.vignette(g, W, HH, 0.3, '30,20,10'); BG[name] = c; return c;
    }
    const S = {
      menu: { wall: ['#e6eee9', '#c9d8cf'], top: '#c8955f', grain: '#8f5a2e', props: 'plant', yH: 1150 },
      slit: { wall: ['#efe9e0', '#d9cdbd'], top: '#b9a27a', grain: '#6e5a3a', props: 'books', yH: 1180 },
      sky: { wall: ['#bfe0f5', '#e8f3fa'], top: '#e9e4da', grain: null, props: 'window', yH: 1350 },
      meadow: { wall: ['#e3eedc', '#c6d8bb'], top: '#c08a58', grain: '#7d4f2b', props: 'lamp', yH: 1180 },
      chart: { wall: ['#e4dde9', '#c9bfd2'], top: '#d8c8b0', grain: '#9a8466', props: 'mug', yH: 1500 },
      end: { wall: ['#eef1ee', '#d2dbd6'], top: '#c8955f', grain: '#8f5a2e', props: 'none', yH: 1450 },
    }[name];
    const gw = g.createLinearGradient(0, 0, 0, S.yH); gw.addColorStop(0, S.wall[0]); gw.addColorStop(1, S.wall[1]); g.fillStyle = gw; g.fillRect(0, 0, W, S.yH);
    g.save(); g.filter = 'blur(26px)';
    const P = S.props;
    if (P === 'plant') { g.fillStyle = '#b5653a'; g.fillRect(760, 820, 240, 340); g.fillStyle = '#3f7d3a'; for (let i = 0; i < 9; i++) { g.beginPath(); g.ellipse(880 + r.range(-150, 150), 680 + r.range(-200, 100), 70, 150, r.range(-1, 1), 0, 7); g.fill(); } g.fillStyle = '#f7fbff'; g.fillRect(60, 160, 360, 520); }
    if (P === 'books') { const cols = ['#7b2d26', '#2f4b6e', '#c79a3a', '#3d6b4a', '#6b3f6e', '#9a4a2a']; for (let i = 0; i < 12; i++) { g.fillStyle = cols[i % cols.length]; g.fillRect(40 + i * 85, 560 + r.range(0, 120), 76, 700); } }
    if (P === 'window') { g.fillStyle = '#ffffff'; g.fillRect(40, 900, 1000, 40); g.fillStyle = 'rgba(255,255,255,0.7)'; g.fillRect(500, 0, 40, 920); g.fillStyle = '#6aa84f'; for (let i = 0; i < 8; i++) { g.beginPath(); g.ellipse(r.range(0, W), 1250, 160, 90, 0, 0, 7); g.fill(); } }
    if (P === 'lamp') { const lg = g.createRadialGradient(850, 330, 10, 850, 330, 520); lg.addColorStop(0, 'rgba(255,224,170,0.9)'); lg.addColorStop(1, 'rgba(255,224,170,0)'); g.fillStyle = lg; g.fillRect(0, 0, W, S.yH); g.fillStyle = '#2b2b2b'; g.fillRect(840, 330, 24, 900); }
    if (P === 'mug') { g.fillStyle = '#f1f1ee'; g.fillRect(790, 1060, 240, 300); g.fillStyle = '#e9c46a'; g.fillRect(40, 1180, 360, 60); }
    g.restore();
    const gt = g.createLinearGradient(0, S.yH, 0, HH); gt.addColorStop(0, shade(S.top, -0.12)); gt.addColorStop(0.35, S.top); gt.addColorStop(1, shade(S.top, 0.06)); g.fillStyle = gt; g.fillRect(0, S.yH, W, HH - S.yH);
    if (S.grain) { g.save(); g.filter = 'blur(1.2px)'; for (let i = 0; i < 90; i++) { const v = i / 90, y = S.yH + (HH - S.yH) * Math.pow(v, 1.7); g.strokeStyle = H.rgba(S.grain, 0.08 + 0.12 * r()); g.lineWidth = 1 + v * 3; g.beginPath(); for (let x = 0; x <= W; x += 24) g.lineTo(x, y + nz.n2(x * 0.004, i * 0.7) * (6 + 20 * v)); g.stroke(); } g.restore(); }
    g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(0, S.yH - 4, W, 8);
    g.fillStyle = 'rgba(120,160,220,0.05)'; g.fillRect(0, 0, W, HH);
    H.vignette(g, W, HH, 0.28, '40,30,20');
    BG[name] = c; return c;
  }
  const drawBG = (ctx, name) => ctx.drawImage(bgSet(name), 0, 0);
  function cam(ctx, t, t0, t1, z0, z1, cx = 540, cy = 1000, shake = 0) {
    const z = H.lerp(z0, z1, EI(t, t0, t1)); ctx.translate(cx, cy); ctx.scale(z, z); ctx.translate(-cx, -cy);
    if (shake) { const r = H.rng(Math.floor(t * 24)); ctx.translate((r() - 0.5) * shake, (r() - 0.5) * shake); }
  }
  let ctxRef = null;
  const tl = (t, s, x, y, size, t0, o = {}) => { const k = popK(t, t0); if (k > 0 && (o.end == null || t < o.end)) tile(ctxRef, s, x, y, size, Object.assign({}, o, { k })); };
  const TOP = 330, BOT = 1540;
  const grass = (ctx, x, y, n = 4, s = 1) => { for (let i = 0; i < n; i++) roundBrick(ctx, x + i * 22 * s, y, 9 * s, (50 + ((i * 37) % 40)) * s, i % 2 ? PAL.green : PAL.lime, { noStud: true }); };
  // ---------- real eggs ----------
  const SHELL = '#f1e6d6', SHELLD = '#cdb79c', ALB = '#f7f1dc', YOLK = '#f2b233';
  // egg outline: pointy end up (rot 0). rx = half width
  function eggPath(ctx, rx, ry) {
    ctx.beginPath();
    for (let i = 0; i <= 64; i++) { const a = i / 64 * Math.PI * 2, s = Math.sin(a); const x = rx * Math.cos(a) * (1 + 0.13 * s), y = ry * s; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.closePath();
  }
  function egg(ctx, cx, cy, rx, o = {}) {
    const ry = rx * 1.3;
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(o.rot || 0);
    if (!o.noShadow) { ctx.save(); ctx.rotate(-(o.rot || 0)); shadowBlob(ctx, 0, ry * 0.95, rx * 1.1, rx * 0.3, 0.35); ctx.restore(); }
    const g = ctx.createRadialGradient(-rx * 0.35, -ry * 0.35, rx * 0.1, 0, 0, ry * 1.1);
    g.addColorStop(0, '#fffaf2'); g.addColorStop(0.55, o.col || SHELL); g.addColorStop(1, shade(o.col || SHELL, -0.3));
    eggPath(ctx, rx, ry); ctx.fillStyle = g; ctx.fill();
    // softbox reflection: clean rectangle
    ctx.fillStyle = 'rgba(255,255,255,0.55)'; rr(ctx, -rx * 0.5, -ry * 0.62, rx * 0.32, ry * 0.2, 6); ctx.fill();
    // speckles
    const r = H.rng(o.seed || 5); ctx.fillStyle = 'rgba(140,100,60,0.18)';
    for (let i = 0; i < 26; i++) { const a = r() * 6.283, d = Math.sqrt(r()) * 0.85; ctx.beginPath(); ctx.arc(Math.cos(a) * rx * d, Math.sin(a) * ry * d, 1.5 + r() * 3, 0, 7); ctx.fill(); }
    if (o.crack) { ctx.strokeStyle = '#5a4636'; ctx.lineWidth = Math.max(3, rx * 0.04); ctx.lineJoin = 'round'; ctx.beginPath(); const cr = o.crack, n = 7; for (let i = 0; i <= n * cr; i++) { const x = -rx * 0.55 + i * rx * 0.16, y = -ry * 0.1 + (i % 2 ? -1 : 1) * rx * 0.09; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); }
    ctx.restore();
  }
  // a cut-open egg: shell ring of thickness th (fraction of rx)
  function eggSection(ctx, cx, cy, rx, th, o = {}) {
    const ry = rx * 1.3;
    ctx.save(); ctx.translate(cx, cy);
    shadowBlob(ctx, 0, ry * 0.98, rx * 1.1, rx * 0.25, 0.3);
    eggPath(ctx, rx, ry); ctx.fillStyle = shade(SHELL, -0.04); ctx.fill();
    const k = 1 - th; ctx.save(); ctx.scale(k, k); eggPath(ctx, rx, ry); ctx.restore();
    const g = ctx.createRadialGradient(0, ry * 0.15, 10, 0, 0, ry); g.addColorStop(0, o.inner || ALB); g.addColorStop(1, shade(o.inner || ALB, -0.12));
    ctx.fillStyle = g; ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = 3; ctx.save(); ctx.scale(k, k); eggPath(ctx, rx, ry); ctx.restore(); ctx.stroke();
    ctx.strokeStyle = shade(SHELL, -0.35); ctx.lineWidth = 4; eggPath(ctx, rx, ry); ctx.stroke();
    ctx.restore();
  }
  // point on the egg outline at angle a (0 = right, -PI/2 = top)
  const eggPt = (cx, cy, rx, a, k = 1) => { const s = Math.sin(a); return [cx + rx * k * Math.cos(a) * (1 + 0.13 * s), cy + rx * 1.3 * k * s]; };

  // ---------- brick hen (side view, facing right) ----------
  const HEN = '#a95500', HENL = '#c87a2e', COMB = PAL.red, BEAK = PAL.yellow;
  function hen(ctx, x, y, s, o = {}) {
    const u = 34 * s, f = Math.floor(ST(o.t || 0) * 12);
    ctx.save(); ctx.translate(x, y);
    // tail: three plates fanned up behind
    [[-0.9, '#7d3f00'], [-0.6, HEN], [-0.3, HENL]].forEach(([a, c]) => { ctx.save(); ctx.translate(-2.2 * u, -2.1 * u); ctx.rotate(a); brick(ctx, -2.0 * u, 0, 4, 1, c, { u: 0.55 * u, plate: true, d: 0.3 * u }); ctx.restore(); });
    // body: a big brick + a wing plate
    brick(ctx, -2.3 * u, -0.2 * u, 5, 2, HEN, { u: u * 0.95, h: 1.7 });
    brick(ctx, -1.5 * u, -0.6 * u, 3, 1, '#8a4500', { u: u * 0.85, plate: true, tile: true, d: 0.2 * u });
    // neck + head (a small hop of the head on twos while "pecking" off)
    const bob = o.bob ? (f % 6 < 3 ? 0 : -0.12 * u) : 0;
    brick(ctx, 1.55 * u, -2.0 * u + bob, 1, 1, HEN, { u: 0.95 * u, h: 1.4 });
    brick(ctx, 1.35 * u, -3.1 * u + bob, 2, 1, HENL, { u: 0.75 * u, h: 1.4 });
    // comb: red round bricks, wattle
    [0, 1, 2].forEach((i) => roundBrick(ctx, 1.6 * u + i * 0.38 * u, -4.15 * u + bob, 0.17 * u, 0.4 * u, COMB, { noStud: true }));
    brick(ctx, 2.55 * u, -2.35 * u + bob, 1, 1, COMB, { u: 0.3 * u, h: 1.6, tile: true, d: 0.1 * u });
    // beak: a yellow wedge
    ctx.fillStyle = shade(BEAK, -0.2); poly(ctx, [2.85 * u, -3.55 * u + bob, 3.45 * u, -3.3 * u + bob, 2.85 * u, -3.05 * u + bob]); ctx.fill();
    ctx.fillStyle = BEAK; poly(ctx, [2.85 * u, -3.55 * u + bob, 3.45 * u, -3.3 * u + bob, 2.85 * u, -3.35 * u + bob]); ctx.fill();
    // eye
    ctx.fillStyle = '#1b2a34'; ctx.beginPath(); ctx.arc(2.4 * u, -3.75 * u + bob, 0.11 * u, 0, 7); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.fillRect(2.36 * u, -3.82 * u + bob, 0.05 * u, 0.04 * u);
    ctx.restore();
  }
  // nest: a ring of tan and brown plates (front half drawn after the hen)
  function nest(ctx, x, y, s, front) {
    const u = 30 * s, cols = [PAL.tan, '#958a73', '#d6bf8a', '#b89a62'];
    for (let row = 0; row < 3; row++) for (let i = 0; i < 7; i++) {
      const xx = x + (i - 3.5) * 1.6 * u + (row % 2) * 0.8 * u, yy = y - row * 0.45 * u;
      if (front) brick(ctx, xx, yy + 0.4 * u, 2, 1, cols[(i + row) % 4], { u: 0.8 * u, plate: true, d: 0.5 * u });
    }
  }
  // brick chick
  function chick(ctx, x, y, s, o = {}) {
    const u = 30 * s;
    ctx.save(); ctx.translate(x, y); if (o.flip) ctx.scale(-1, 1);
    roundBrick(ctx, 0, 0, 0.9 * u, 1.2 * u, PAL.yellow, { noStud: true });
    roundBrick(ctx, 0.35 * u, -1.25 * u, 0.62 * u, 0.9 * u, PAL.tyellow, { noStud: false });
    ctx.fillStyle = PAL.orange; poly(ctx, [0.9 * u, -1.85 * u, 1.45 * u + (o.peck || 0) * u, -1.68 * u, 0.9 * u, -1.5 * u]); ctx.fill();
    ctx.fillStyle = '#1b2a34'; ctx.beginPath(); ctx.arc(0.62 * u, -1.92 * u, 0.1 * u, 0, 7); ctx.fill();
    ctx.restore();
  }
  // a brick weight: a grey 2x2 stack with a printed kg tile
  function weight(ctx, x, y, s, label) {
    const u = 60 * s; brick(ctx, x - u, y, 2, 2, PAL.dgrey, { u, h: 1.1 });
    ctx.font = `700 ${Math.round(u * 0.55)}px "Fredoka"`; ctx.fillStyle = PAL.white; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, x, y - u * 0.62);
  }
  // force "studs" travelling around the shell
  function ringStuds(ctx, cx, cy, rx, k, from, spread, col, r = 18) {
    const n = 26; for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + (i / n) * Math.PI * 2; let d = Math.abs(((a - from + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
      const vis = H.clamp(spread * Math.PI * 1.05 - d); if (vis <= 0) continue;
      const [x, y] = eggPt(cx, cy, rx, a, 1.12); ctx.globalAlpha = k * Math.min(1, vis * 3); topStud(ctx, x, y, r, col); ctx.globalAlpha = 1;
    }
  }

  // ---------- scenes ----------
  const ORDER = [['nest', 0], ['chick', 4.6], ['arch', 7.05], ['spread', 13.05], ['squeeze', 18.15], ['share', 22.3], ['inside', 26.15], ['calcium', 34.12], ['sum', 41.85], ['end', 44.05]];
  const WIPE = 0.5;
  const SC = {};
  SC.nest = (ctx, t) => {
    const s = ST(t);
    ctx.save(); cam(ctx, t, 0, 4.6, 1.08, 1.0, 540, 1250); drawBG(ctx, 'menu');
    shadowBlob(ctx, 540, 1420, 470, 70, 0.35);
    // eggs peek out of the nest
    [[330, -0.25], [470, 0.1], [640, -0.1], [770, 0.3]].forEach(([x, r], i) => egg(ctx, x, 1340, 62, { rot: r, seed: i + 2, noShadow: true }));
    // the hen settles down on "sits" (stepped)
    const sit = s < T('p1', 'sits') ? 0 : EO(s, T('p1', 'sits'), T('p1', 'sits') + 0.5);
    hen(ctx, 520, H.lerp(1080, 1320, sit), 2.2, { t });
    nest(ctx, 540, 1420, 2.3, true);
    // day counter: 21 studs pop in a row on "21 days"
    const td = T('p1', 'n21') - 0.15;
    for (let i = 0; i < 21; i++) { const k = popK(t, td + i * 0.03); if (k > 0) { ctx.save(); ctx.translate(150 + (i % 11) * 78, 610 + Math.floor(i / 11) * 80); ctx.scale(k, k); topStud(ctx, 0, 0, 28, i % 2 ? PAL.yellow : PAL.orange); ctx.restore(); } }
    ctx.restore(); ctxRef = ctx;
    tl(t, '21 DAYS', 540, TOP, 120, T('p1', 'n21'), { bg: PAL.black, icon: PAL.yellow });
    tl(t, 'NO CRACKS', 540, BOT, 110, T('p2', 'crack'), { bg: PAL.green });
  };
  SC.chick = (ctx, t) => {
    const s = ST(t), t0 = 4.6;
    ctx.save(); cam(ctx, t, t0, 7.05, 1.0, 1.12, 540, 1000); drawBG(ctx, 'desk');
    const cr = s < T('p3', 'break') - 0.1 ? 0 : EO(s, T('p3', 'break') - 0.1, T('p3', 'out') + 0.2);
    egg(ctx, 540, 1000, 300, { crack: cr, seed: 9 });
    const k = popK(t, T('p3', 'chick'));
    if (cr > 0.6) { const u = ph(s, T('p3', 'out'), T('p3', 'out') + 0.3); ctx.fillStyle = PAL.orange; poly(ctx, [430, 935, 430 + 90 * u, 960, 430, 985]); ctx.fill(); }
    if (k > 0) { ctx.save(); ctx.translate(820, 1450); ctx.scale(k, k); chick(ctx, 0, 0, 2.2, { flip: true }); ctx.restore(); }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'TINY CHICK', 540, TOP, 104, T('p3', 'tiny'), { bg: PAL.yellow, fg: PAL.black });
    tl(t, 'HOW DOES IT GET OUT?', 540, BOT, 78, T('p3', 'break'), { bg: PAL.red });
  };
  SC.arch = (ctx, t) => {
    const s = ST(t), t0 = 7.05;
    ctx.save(); cam(ctx, t, t0, 13.05, 1.06, 1.0, 540, 1200); drawBG(ctx, 'slit');
    // the egg on the left, a brick arch snaps together on the right on "stone arch"
    egg(ctx, 300, 1260, 150, { seed: 3 });
    const ta = T('p5', 'like'), N = 9, cxA = 790, cyA = 1390, R = 230;
    for (let i = 0; i < N; i++) {
      const sn = snap(t, ta + i * 0.08, 240); if (!sn) continue;
      const a = Math.PI + (i + 0.5) / N * Math.PI;
      ctx.save(); ctx.translate(cxA + Math.cos(a) * R, cyA + Math.sin(a) * R + sn.dy); ctx.rotate(a + Math.PI / 2);
      brick(ctx, -45, 30, 2, 1, i === 4 ? PAL.red : PAL.grey, { u: 45, h: 1.3, d: 20 }); ctx.restore();
    }
    // pillars
    if (s >= ta) { brick(ctx, cxA - R - 50, 1440, 2, 1, PAL.dgrey, { u: 50, h: 1.2, tile: true, d: 20 }); brick(ctx, cxA + R - 50, 1440, 2, 1, PAL.dgrey, { u: 50, h: 1.2, tile: true, d: 20 }); }
    // pushes on the outside: arrows land on egg and arch on "push on the outside"
    const kp = popK(t, T('p6', 'push'));
    if (kp > 0) { arrow(ctx, 300, 1045, Math.PI / 2, 150, PAL.blue, kp); arrow(ctx, cxA, 1100, Math.PI / 2, 150, PAL.blue, kp); }
    ctx.restore(); ctxRef = ctx;
    tl(t, "IT'S THE SHAPE", 540, TOP, 100, T('p4', 'shape'), { bg: PAL.black, icon: PAL.red });
    tl(t, 'A DOME = AN ARCH', 540, 530, 80, T('p5', 'dome'), { bg: PAL.yellow, fg: PAL.black });
    tl(t, 'PUSH FROM OUTSIDE', 540, BOT, 84, T('p6', 'push'), { bg: PAL.blue });
  };
  SC.spread = (ctx, t) => {
    const s = ST(t), t0 = 13.05, cx = 540, cy = 1060, rx = 300;
    ctx.save(); cam(ctx, t, t0, 18.15, 1.02, 1.0, 540, 1000); drawBG(ctx, 'chart');
    eggSection(ctx, cx, cy, rx, 0.06);
    // a red arrow presses the top; the force travels around the shell as yellow studs
    arrow(ctx, cx, cy - rx * 1.3 - 30, Math.PI / 2, 200, PAL.red, 1);
    const sp = s < T('p7', 'spreads') - 0.1 ? 0.05 : EO(s, T('p7', 'spreads') - 0.1, T('p7', 'shell') + 0.3);
    ringStuds(ctx, cx, cy, rx, 1, -Math.PI / 2, sp, PAL.tyellow, 20);
    // "no single spot": the little load numbers on the ring
    const kn = popK(t, T('p8', 'single'));
    if (kn > 0) [[-2.2], [-0.95], [0.3], [1.57], [2.85]].forEach(([a], i) => { const [x, y] = eggPt(cx, cy, rx, a, 0.72); ctx.save(); ctx.translate(x, y); ctx.scale(kn, kn); topStud(ctx, 0, 0, 30, PAL.green); ctx.restore(); });
    ctx.restore(); ctxRef = ctx;
    tl(t, 'FORCE SPREADS OUT', 540, TOP, 88, T('p7', 'spreads'), { bg: PAL.orange, fg: PAL.black });
    tl(t, 'NO WEAK SPOT', 540, BOT, 104, T('p8', 'single'), { bg: PAL.green });
  };
  SC.squeeze = (ctx, t) => {
    const s = ST(t), t0 = 18.15;
    ctx.save(); cam(ctx, t, t0, 22.3, 1.05, 1.0, 540, 1400); drawBG(ctx, 'meadow');
    // egg standing on its end on a plate; three weights snap on top
    brick(ctx, 400, 1560, 4, 2, PAL.blue, { u: 70, plate: true });
    egg(ctx, 540, 1350, 140, { seed: 11, noShadow: true });
    const top = 1350 - 182 - 6;
    brick(ctx, 400, top, 4, 2, PAL.blue, { u: 70, plate: true });
    const kgT = [T('p10', 'hold'), T('p10', 'about'), T('p10', 'three')];
    kgT.forEach((tt, i) => { const sn = snap(t, tt, 300); if (sn) weight(ctx, 540, top - 28 - i * 82 + sn.dy, 1.2, '1 kg'); });
    // end-to-end arrows on "squeezed end to end"
    const ka = popK(t, T('p9', 'end'));
    if (ka > 0) { arrow(ctx, 540, 1720, -Math.PI / 2, 130, PAL.red, ka); }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'END TO END', 540, TOP, 104, T('p9', 'end'), { bg: PAL.red });
    tl(t, '≈ 3 KG', 540, 640, 130, T('p10', 'three'), { bg: PAL.yellow, fg: PAL.black });
  };
  SC.share = (ctx, t) => {
    const s = ST(t), t0 = 22.3;
    ctx.save(); cam(ctx, t, t0, 26.15, 1.05, 1.0, 540, 1000); drawBG(ctx, 'mat');
    // plan view: a nest ring of plates, five eggs, the hen's shadow over them
    const cx = 540, cy = 1000;
    for (let i = 0; i < 22; i++) { const a = i / 22 * 6.283; ctx.save(); ctx.translate(cx + Math.cos(a) * 330, cy + Math.sin(a) * 300); ctx.rotate(a); brick(ctx, -40, 20, 2, 1, i % 2 ? PAL.tan : '#b89a62', { u: 40, plate: true, d: 16 }); ctx.restore(); }
    const eggs = [[-130, -90], [110, -110], [-170, 110], [40, 60], [190, 120]];
    eggs.forEach(([x, y], i) => egg(ctx, cx + x, cy + y, 70, { rot: 1.2 + i * 0.4, seed: 20 + i, noShadow: true }));
    // the hen's weight: one big red arrow that splits into small ones on "shared"
    const sh = s < T('p11', 'shared') ? 0 : EO(s, T('p11', 'shared'), T('p11', 'nest') + 0.2);
    const kw = popK(t, T('p11', 'weight'));
    if (kw > 0 && sh < 0.5) { ctx.save(); ctx.translate(cx, cy); ctx.scale(kw, kw); topStud(ctx, 0, 0, 120 * (1 - sh), PAL.red); ctx.restore(); }
    if (sh > 0) { eggs.forEach(([x, y]) => { ctx.globalAlpha = sh; topStud(ctx, cx + x, cy + y, 34, PAL.red); }); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283 + 0.4; topStud(ctx, cx + Math.cos(a) * 330, cy + Math.sin(a) * 300, 30, PAL.red); } ctx.globalAlpha = 1; }
    ctx.restore(); ctxRef = ctx;
    tl(t, "HEN'S WEIGHT", 540, TOP, 104, T('p11', 'weight'), { bg: HEN });
    tl(t, 'SHARED BY NEST + EGGS', 540, BOT, 72, T('p11', 'shared'), { bg: PAL.black, icon: PAL.red });
  };
  SC.inside = (ctx, t) => {
    const s = ST(t), t0 = 26.15, cx = 540, cy = 1030, rx = 320;
    ctx.save(); cam(ctx, t, t0, 34.12, 1.0, 1.08, 540, 900); drawBG(ctx, 'face');
    eggSection(ctx, cx, cy, rx, 0.06);
    // the chick inside pecks one spot near the top
    const tp = T('p13', 'pecks'), f = Math.floor(s * 12), pk = s >= tp && s < T('p14', 'inside') + 0.3 ? (f % 4 < 2 ? 1 : 0) : 0;
    chick(ctx, cx - 40, cy + 230, 3.4, { peck: pk * 0.5 });
    const [px, py] = eggPt(cx, cy, rx, -1.05, 0.95);
    const ks = popK(t, T('p13', 'spot'));
    if (ks > 0) { ctx.save(); ctx.translate(px, py); ctx.scale(ks, ks); ctx.strokeStyle = PAL.red; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(0, 0, 55, 0, 7); ctx.stroke(); ctx.restore(); }
    // outward push arrows and a crack on "weak against a push from inside"
    const kw = popK(t, T('p14', 'push'));
    if (kw > 0) arrow(ctx, px + 150, py - 120, -0.7, 120, PAL.red, kw);
    if (s >= T('p14', 'inside')) { const c = EO(s, T('p14', 'inside'), T('p14', 'inside') + 0.4); ctx.strokeStyle = '#5a4636'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(px - 70 * c, py - 20 * c); ctx.lineTo(px - 30 * c, py + 15 * c); ctx.lineTo(px, py - 10 * c); ctx.lineTo(px + 40 * c, py + 20 * c); ctx.lineTo(px + 80 * c, py - 15 * c); ctx.stroke(); }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'FROM THE INSIDE…', 540, TOP, 92, T('p12', 'inside'), { bg: PAL.black });
    tl(t, 'ONE TINY SPOT', 540, BOT, 100, T('p13', 'one'), { bg: PAL.red, end: T('p14', 'weak') });
    tl(t, 'WEAK FROM INSIDE', 540, BOT, 96, T('p14', 'weak'), { bg: PAL.red, icon: PAL.yellow });
  };
  SC.calcium = (ctx, t) => {
    const s = ST(t), t0 = 34.12, cx = 540, cy = 1050, rx = 300;
    ctx.save(); cam(ctx, t, t0, 41.85, 1.0, 1.05, 540, 1050); drawBG(ctx, 'sky');
    // the shell thins after "calcium" until "grows"
    const thin = s < T('p16', 'calcium') ? 0 : EI(s, T('p16', 'calcium'), T('p17', 'grows') + 0.3);
    eggSection(ctx, cx, cy, rx, H.lerp(0.11, 0.035, thin));
    // white 1x1 plates fly from the shell to the chick (bones)
    const tc = T('p16', 'pulls');
    if (s >= tc) for (let i = 0; i < 14; i++) {
      const a = -Math.PI / 2 + i / 14 * 6.283, u = H.clamp((s - tc - i * 0.12) / 0.7); if (u <= 0) continue;
      const [x0, y0] = eggPt(cx, cy, rx, a, 0.95), x1 = cx - 10 + (i % 4) * 22 - 33, y1 = cy + 150 - Math.floor(i / 4) * 22;
      const x = H.lerp(x0, x1, H.ease.inOut(u)), y = H.lerp(y0, y1, H.ease.inOut(u)) - Math.sin(u * Math.PI) * 60;
      if (u < 1) brick(ctx, x - 14, y + 8, 1, 1, PAL.white, { u: 28, plate: true, d: 10 });
    }
    chick(ctx, cx - 30, cy + 240, 3.2);
    // bones: a little white brick skeleton glows in the chick on "bones"
    const kb = popK(t, T('p16', 'bones'));
    if (kb > 0) { ctx.save(); ctx.translate(cx - 30, cy + 150); ctx.scale(kb, kb); brick(ctx, -50, 0, 4, 1, PAL.white, { u: 25, plate: true, d: 10 }); brick(ctx, -12, -10, 1, 1, PAL.white, { u: 25, h: 2.6, tile: true, d: 10 }); ctx.restore(); }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'THE CLEVER PART', 540, TOP, 96, T('p15', 'clever'), { bg: PAL.yellow, fg: PAL.black, end: T('p16', 'calcium') });
    tl(t, 'CALCIUM → BONES', 540, TOP, 96, T('p16', 'calcium'), { bg: PAL.blue });
    tl(t, 'THINNER SHELL', 540, BOT, 104, T('p17', 'thinner'), { bg: PAL.black, icon: PAL.white });
  };
  SC.sum = (ctx, t) => {
    const s = ST(t), t0 = 41.85;
    ctx.save(); cam(ctx, t, t0, 44.05, 1.0, 1.04, 540, 1000); drawBG(ctx, 'desk');
    const k1 = popK(t, T('p18', 'strong')), k2 = popK(t, T('p18', 'weak'));
    if (k1 > 0) { ctx.save(); ctx.translate(320, 1000); ctx.scale(k1, k1); egg(ctx, 0, 0, 140, { seed: 31 }); ctx.restore(); [0, Math.PI / 2, Math.PI, -Math.PI / 2].forEach((a) => arrow(ctx, 320 - Math.cos(a) * 185, 1000 - Math.sin(a) * 225, a, 90, PAL.green, k1)); }
    if (k2 > 0) { ctx.save(); ctx.translate(790, 1000); ctx.scale(k2, k2); egg(ctx, 0, 0, 150, { seed: 32, crack: 1 }); ctx.restore(); arrow(ctx, 790 + 60, 1000 - 280, -Math.PI / 2 + 0.4, 110, PAL.red, k2); }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'STRONG OUTSIDE', 320, 640, 64, T('p18', 'strong'), { bg: PAL.green });
    tl(t, 'WEAK INSIDE', 790, 1380, 64, T('p18', 'weak'), { bg: PAL.red });
  };
  SC.end = (ctx, t) => {
    const s = ST(t), t0 = 44.05;
    ctx.save(); cam(ctx, t, t0, DURATION, 1.0, 1.06, 540, 1050); drawBG(ctx, 'end');
    // two big brick "fists" squeeze an egg from its ends
    const sq = s < T('p19', 'squeezing') ? 0 : EO(s, T('p19', 'squeezing'), T('p19', 'end') + 0.3);
    const gap = H.lerp(80, 8, sq);
    egg(ctx, 540, 1050, 150, { rot: Math.PI / 2, seed: 41, noShadow: true });
    brick(ctx, 540 - 195 - gap - 230, 1150, 3, 2, PAL.red, { u: 80, h: 2.6 });
    brick(ctx, 540 + 195 + gap - 10, 1150, 3, 2, PAL.blue, { u: 80, h: 2.6 });
    const ka = popK(t, T('p19', 'end'));
    if (ka > 0) { arrow(ctx, 300, 900, 0, 120, PAL.red, ka); arrow(ctx, 790, 900, Math.PI, 120, PAL.blue, ka); }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'COULD YOU CRACK IT?', 540, TOP, 90, T('p19', 'could'), { bg: PAL.black, icon: PAL.yellow });
    tl(t, 'YES or NO? ↓', 540, BOT, 104, T('p19', 'end'), { bg: PAL.yellow, fg: PAL.black });
  };
  // a giant brick slides across the lens to change set
  function brickWipe(ctx, u, col) {
    const x = H.lerp(W + 40, -1500, u), c = 180;
    ctx.save(); ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(x - 30, 0, 1460, HH);
    ctx.fillStyle = shade(col, -0.05); ctx.fillRect(x, 0, 1440, HH);
    for (let j = 0; j < 11; j++) for (let i = 0; i < 8; i++) { const cx = x + 90 + i * c, cy = 90 + j * c; const r = c * 0.32; ctx.fillStyle = 'rgba(0,0,0,0.28)'; ctx.beginPath(); ctx.arc(cx + 8, cy + 10, r, 0, 7); ctx.fill(); const g = ctx.createRadialGradient(cx - r * 0.4, cy - r * 0.4, 4, cx, cy, r); g.addColorStop(0, shade(col, 0.45)); g.addColorStop(1, shade(col, -0.05)); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.fill(); }
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillRect(x, 0, 10, HH); ctx.restore();
  }
  const WIPECOL = [PAL.yellow, PAL.green, PAL.blue, PAL.red, PAL.orange, PAL.green, PAL.blue, PAL.yellow, PAL.red];
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    ctxRef = ctx;
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1]) i++;
    SC[ORDER[i][0]](ctx, t);
    for (let j = 1; j < ORDER.length; j++) { const c = ORDER[j][1]; if (t > c - WIPE / 2 && t < c + WIPE / 2) brickWipe(ctx, ph(t, c - WIPE / 2, c + WIPE / 2), WIPECOL[(j - 1) % WIPECOL.length]); }
    if (!GR) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.025 * 255; d[j] = d[j + 1] = d[j + 2] = n > 0 ? 255 : 0; d[j + 3] = Math.min(255, Math.abs(n) * 2); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  // ---------- sound: brick clicks, clacks on wood, whooshes, a crack ----------
  function scoreSound(k) {
    const D = DURATION;
    const click = (t, g = 0.8, p = 0, minor = false) => { k.play('click', t, { f: 2900, gain: g, pan: p, minor }); k.play('tick', t + 0.004, { f: 4600, gain: g * 0.6, pan: p, minor }); };
    const clack = (t, g = 0.6, p = 0) => k.play('tock', t, { f: 620, gain: g, pan: p, minor: true });
    const crack = (t, g = 0.35) => k.noise(t, { dur: 0.18, color: 'white', filter: 'highpass', f: [[0, 3000], [0.18, 1800]], gain: g, a: 0.002 });
    k.bed('room', 0, D, { gain: 0.18 });
    for (let j = 1; j < ORDER.length; j++) { const c = ORDER[j][1]; k.play('whoosh', c - 0.28, { dur: 0.5, gain: 0.6, top: 2200 }); clack(c + 0.22, 0.55); }
    clack(T('p1', 'sits'), 0.6); for (let i = 0; i < 21; i++) k.play('tick', T('p1', 'n21') - 0.15 + i * 0.03, { f: 2400 + i * 40, gain: 0.18, minor: true });
    click(T('p1', 'n21')); k.play('ding', T('p2', 'crack'), { f: 'E5', gain: 0.25 }); click(T('p2', 'crack'));
    click(T('p3', 'chick'), 0.7, 0.3); crack(T('p3', 'break')); click(T('p3', 'break'));
    click(T('p4', 'shape')); for (let i = 0; i < 9; i++) click(T('p5', 'like') + i * 0.08, 0.4, -0.3 + i * 0.07, true); click(T('p5', 'dome'), 0.6);
    click(T('p6', 'push')); k.play('riser', T('p7', 'spreads') - 0.1, { dur: 1.4, gain: 0.2, minor: true }); click(T('p7', 'spreads'), 0.7);
    k.play('ding', T('p8', 'single'), { f: 'G5', gain: 0.25 }); click(T('p8', 'single'));
    click(T('p9', 'end')); [T('p10', 'hold'), T('p10', 'about'), T('p10', 'three')].forEach((x) => { clack(x, 0.7); click(x, 0.5); }); k.play('success', T('p10', 'kilos'), { f: 'C6', gain: 0.22 });
    click(T('p11', 'weight')); k.play('swish', T('p11', 'shared'), { gain: 0.35 }); for (let i = 0; i < 6; i++) click(T('p11', 'shared') + i * 0.08, 0.35, i % 2 ? 0.3 : -0.3, true);
    click(T('p12', 'inside')); for (let x = T('p13', 'pecks'); x < T('p14', 'inside') + 0.3; x += 1 / 3) k.play('tick', x, { f: 1800, gain: 0.3, minor: true });
    click(T('p13', 'spot')); crack(T('p14', 'inside'), 0.45); k.play('impact', T('p14', 'inside'), { gain: 0.25 });
    k.play('success', T('p15', 'clever'), { f: 'C6', gain: 0.22 }); click(T('p15', 'clever'));
    click(T('p16', 'calcium')); for (let i = 0; i < 14; i++) click(T('p16', 'pulls') + i * 0.12 + 0.7, 0.3, 0, true); k.play('ding', T('p16', 'bones'), { f: 'E5', gain: 0.22 });
    click(T('p17', 'thinner'));
    click(T('p18', 'strong'), 0.8, -0.4); crack(T('p18', 'weak'), 0.3); click(T('p18', 'weak'), 0.8, 0.4);
    click(T('p19', 'could')); k.play('swish', T('p19', 'squeezing'), { gain: 0.35 }); click(T('p19', 'end')); k.play('ding', T('p19', 'end') + 0.1, { f: 'G5', gain: 0.3 });
  }

  function thumbnail(ctx, Wd, Hd) {
    ctxRef = ctx; drawBG(ctx, 'menu');
    egg(ctx, 540, 1050, 300, { seed: 9, crack: 0.7 });
    tile(ctx, "WHY NO CRACK?", 540, 520, 110, { bg: PAL.red });
    tile(ctx, '≈ 3 KG', 540, 1550, 140, { bg: PAL.yellow, fg: PAL.black });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
