// ================= Brick Toy, vertical 1080x1920: "Why do hamsters stuff food in their cheeks?" =================
// Lemo-Opuscar "Brick Toy" style (MIT) drawn in Canvas 2D for this repo's harness. Unattended run: no storyboard step.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'p1', s: 0.25, e: 4.22, w: {your: 0.25, hamster: 0.54, hides: 1.06, two: 1.43, secret: 1.65, pockets: 2.09, that: 2.6, nearly: 2.9, triple: 3.34, in: 3.78, size: 3.93} },
    { id: 'p2', s: 4.61, e: 5.15, w: {why: 4.61} },
    { id: 'p3', s: 5.61, e: 8.42, w: {inside: 5.61, each: 6.1, cheek: 6.42, is: 6.82, a: 6.98, long: 7.06, stretchy: 7.38, pouch: 8.02} },
    { id: 'p4', s: 8.9, e: 12.48, w: {a: 8.9, deadend: 8.98, sleeve: 9.49, that: 9.93, runs: 10.22, all: 10.51, the: 10.73, way: 10.95, back: 11.17, to: 11.46, shoulders: 11.82} },
    { id: 'p5', s: 12.94, e: 15.44, w: {stuffed: 12.94, full: 13.41, it: 13.68, balloons: 13.82, out: 14.36, like: 14.56, a: 14.83, backpack: 14.9} },
    { id: 'p6', s: 15.91, e: 18.54, w: {some: 15.91, hamsters: 16.19, fit: 16.74, a: 16.95, whole: 17.02, baby: 17.36, carrot: 17.64, in: 18.05, there: 18.19} },
    { id: 'p7', s: 18.92, e: 22.65, w: {wild: 18.92, hamsters: 19.21, live: 19.78, where: 20.07, food: 20.43, is: 20.71, scarce: 20.86, and: 21.29, the: 21.5, weathers: 21.72, harsh: 22.29} },
    { id: 'p8', s: 23.09, e: 24.65, w: {so: 23.09, they: 23.23, dont: 23.52, eat: 23.8, on: 24.01, the: 24.16, spot: 24.37} },
    { id: 'p9', s: 25.04, e: 27.04, w: {they: 25.04, fill: 25.42, up: 25.8, fast: 25.99, run: 26.38, home: 26.66} },
    { id: 'p10', s: 27.32, e: 29.59, w: {and: 27.32, stash: 27.52, it: 27.86, all: 27.99, in: 28.19, an: 28.32, underground: 28.46, pantry: 29.19} },
    { id: 'p11', s: 30.04, e: 33.64, w: {to: 30.04, unload: 30.2, they: 30.68, push: 31.0, from: 31.32, the: 31.64, back: 31.88, with: 32.2, their: 32.52, front: 32.92, paws: 33.32} },
    { id: 'p12', s: 33.72, e: 34.81, w: {and: 33.72, out: 33.93, it: 34.13, all: 34.26, pours: 34.47} },
    { id: 'p13', s: 35.26, e: 38.0, w: {a: 35.26, special: 35.34, muscle: 35.84, pulls: 36.27, the: 36.63, empty: 36.85, pouch: 37.21, back: 37.57, in: 37.86} },
    { id: 'p14', s: 38.35, e: 41.36, w: {and: 38.35, heres: 38.57, a: 38.94, bonus: 39.01, some: 39.38, puff: 39.67, their: 39.96, pouches: 40.33, with: 40.84, air: 41.14} },
    { id: 'p15', s: 41.42, e: 42.94, w: {to: 41.42, float: 41.58, when: 41.98, they: 42.3, swim: 42.62} },
    { id: 'p16', s: 43.41, e: 45.36, w: {so: 43.41, if: 43.56, you: 43.71, had: 43.94, two: 44.16, secret: 44.39, pockets: 44.84} },
    { id: 'p17', s: 45.71, e: 47.3, w: {what: 45.71, would: 45.96, you: 46.26, carry: 46.45, home: 46.75, first: 47.0} },
  ];
  const B = Object.fromEntries(BEATS.map((b) => [b.id, b]));
  const T = (id, w) => B[id].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
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
  const HEART = ['.XX...XX.', 'XXXX.XXXX', 'XXXXXXXXX', 'XXXXXXXXX', '.XXXXXXX.', '..XXXXX..', '...XXX...', '....X....'];
  const MOON = ['..XXX..', '.XXXX..', 'XXX....', 'XXX....', 'XXX....', '.XXXX..', '..XXX..'];
  const SUN = ['..XXX..', '.XXXXX.', 'XXXXXXX', 'XXXXXXX', 'XXXXXXX', '.XXXXX.', '..XXX..'];
  const FLAKE = ['X.X.X', '.XXX.', 'XXXXX', '.XXX.', 'X.X.X'];
  const shadowBlob = (ctx, x, y, rx, ry, a = 0.32) => { const g = ctx.createRadialGradient(x, y, 0, x, y, rx); g.addColorStop(0, `rgba(30,20,10,${a})`); g.addColorStop(1, 'rgba(30,20,10,0)'); ctx.save(); ctx.translate(x, y); ctx.scale(1, ry / rx); ctx.translate(-x, -y); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, rx, 0, 7); ctx.fill(); ctx.restore(); };
  // ---------- the brick-built hamster (side view, facing right) ----------
  // x,y = ground point under the body; s = scale; o: {t, puff 0..1+, run, push, flip, blink, wet}
  const GOLD = '#e08a3c', GOLDL = '#f0a65a', CREAM = '#f6e7cf', PINK = '#f2a3a0', BROWN = '#583927', SEED = '#e9c46a';
  function pouchPts(u, by, n) { const pts = []; for (let i = 0; i < n; i++) { const k = n === 1 ? 0 : i / (n - 1); pts.push([H.lerp(1.75 * u, -0.5 * u, k), H.lerp(by - 0.2 * u, by - 0.75 * u, k) - Math.sin(k * Math.PI) * 0.25 * u]); } return pts; }
  function hamster(ctx, x, y, s, o = {}) {
    const u = 34 * s, t = o.t || 0, f = Math.floor(ST(t) * 12), puff = o.puff || 0;
    ctx.save(); ctx.translate(x, y); if (o.flip) ctx.scale(-1, 1);
    if (!o.noShadow) shadowBlob(ctx, 0.2 * u, 0, 3.0 * u, 0.55 * u, 0.3);
    const bob = o.run ? (f % 2 ? -0.12 * u : 0) : 0, by = -0.35 * u + bob;
    // feet (pink plates), stepping on twos when running
    const st = o.run ? (f % 2 ? 0.35 : -0.35) * u : 0;
    brick(ctx, -1.5 * u + st, 0, 1, 1, PINK, { u: u * 0.6, plate: true }); brick(ctx, 0.9 * u - st, 0, 1, 1, PINK, { u: u * 0.6, plate: true });
    // tail nub
    roundBrick(ctx, -2.05 * u, by - 0.4 * u, 0.22 * u, 0.3 * u, GOLDL, { noStud: true });
    // body: chunky gold brick + cream belly
    brick(ctx, -1.9 * u, by, 3, 2, GOLD, { u: u * 1.15, h: 1.35 });
    brick(ctx, -1.2 * u, by + 0.02 * u, 2, 1, CREAM, { u: u * 1.0, plate: true, tile: true });
    // head: round brick + ears
    const hx = 1.55 * u, hy = by - 0.25 * u;
    roundBrick(ctx, hx - 0.25 * u, hy - 1.35 * u, 0.3 * u, 0.32 * u, PINK, { noStud: true });
    roundBrick(ctx, hx, hy, 0.95 * u, 1.35 * u, GOLD, { noStud: true });
    roundBrick(ctx, hx + 0.45 * u, hy - 1.25 * u, 0.3 * u, 0.32 * u, PINK, { noStud: true });
    // cheek pouch: a cluster of round bricks that snaps on, back toward the shoulder
    if (puff > 0.01) {
      const n = Math.max(1, Math.round(puff * 4)), pts = pouchPts(u, by, n).map(([a, b]) => [a * 0.85 + 0.15 * u, b + 0.15 * u]), r = 0.6 * u * (0.75 + 0.5 * Math.min(puff, 1.3));
      for (let i = pts.length - 1; i >= 0; i--) roundBrick(ctx, pts[i][0], pts[i][1] + r * 0.6, r, r * 1.05, GOLDL, { noStud: i > 0 });
    }
    // muzzle + nose + whiskers
    brick(ctx, hx + 0.55 * u, hy - 0.15 * u, 1, 1, CREAM, { u: u * 0.7, plate: true, tile: true });
    ctx.fillStyle = PINK; ctx.beginPath(); ctx.arc(hx + 1.15 * u, hy - 0.42 * u, 0.13 * u, 0, 7); ctx.fill();
    ctx.strokeStyle = 'rgba(40,30,20,0.55)'; ctx.lineWidth = Math.max(1.5, 0.04 * u); for (let i = -1; i <= 1; i++) { ctx.beginPath(); ctx.moveTo(hx + 1.0 * u, hy - 0.35 * u); ctx.lineTo(hx + 1.9 * u, hy - 0.35 * u + i * 0.22 * u); ctx.stroke(); }
    // eye
    if (o.blink) { ctx.strokeStyle = PAL.black; ctx.lineWidth = 0.1 * u; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(hx + 0.45 * u, hy - 0.95 * u, 0.15 * u, 0.2, Math.PI - 0.2); ctx.stroke(); }
    else { ctx.fillStyle = PAL.black; ctx.beginPath(); ctx.arc(hx + 0.45 * u, hy - 0.92 * u, 0.17 * u, 0, 7); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(hx + 0.5 * u, hy - 0.98 * u, 0.06 * u, 0, 7); ctx.fill(); }
    // front paw: raised to the cheek when pushing
    if (o.push) { ctx.save(); ctx.translate(1.1 * u, by - 0.3 * u); ctx.rotate(-0.9 + (f % 2) * 0.2); brick(ctx, -0.2 * u, 0, 1, 1, PINK, { u: u * 0.55 }); ctx.restore(); }
    else brick(ctx, 0.95 * u, by + 0.1 * u, 1, 1, PINK, { u: u * 0.5, plate: true });
    ctx.restore();
  }
  // a baby carrot: tapering orange bricks + green leaf plates
  function carrot(ctx, x, y, s, rot = 0) {
    const u = 30 * s; ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    brick(ctx, -2.2 * u, 0.5 * u, 2, 1, PAL.green, { u: u * 0.5, plate: true });
    brick(ctx, -1.6 * u, 0.6 * u, 2, 1, PAL.orange, { u: u * 0.9, h: 1.3 });
    brick(ctx, 0.2 * u, 0.5 * u, 2, 1, PAL.orange, { u: u * 0.7, h: 1.2 });
    brick(ctx, 1.6 * u, 0.4 * u, 1, 1, PAL.orange, { u: u * 0.6, h: 1.0 });
    ctx.restore();
  }
  const seed = (ctx, x, y, s = 1, col = SEED) => brick(ctx, x, y, 1, 1, col, { u: 22 * s, plate: true });

  // ---------- real-world sets (cached, blurred props, wood) ----------
  const BG = {};
  function bgSet(name) {
    if (BG[name]) return BG[name];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(name), nz = H.makeNoise(name.length * 7 + 3);
    const S = {
      hook: { wall: ['#eef1ee', '#d2dbd6'], top: '#c8955f', grain: '#8f5a2e', props: 'plant', yH: 1180 },
      xray: { wall: ['#1f3a5c', '#10223a'], top: '#2c5d8f', grain: null, props: 'grid', yH: 1300, mat: true, dark: true },
      pack: { wall: ['#f3eadf', '#e1d2bf'], top: '#dfe6ee', grain: null, props: 'kitchen', yH: 1220, cloth: true },
      wild: { wall: ['#c9d3da', '#9fb0bc'], top: '#b9a27a', grain: '#6e5a3a', props: 'field', yH: 1200 },
      run: { wall: ['#e9eef0', '#cdd7da'], top: '#c08a58', grain: '#7d4f2b', props: 'books', yH: 1000 },
      unload: { wall: ['#dfe7e2', '#c4cfc8'], top: '#2f7a5a', grain: null, props: 'mug', yH: 1150, mat: true },
      muscle: { wall: ['#e4dde9', '#c9bfd2'], top: '#d8c8b0', grain: '#9a8466', props: 'lamp', yH: 1200 },
      float: { wall: ['#e3f1f6', '#bcd9e4'], top: '#f4f4f2', grain: null, props: 'bath', yH: 1150 },
      end: { wall: ['#eef1ee', '#d2dbd6'], top: '#c8955f', grain: '#8f5a2e', props: 'none', yH: 1240 },
    }[name];
    const gw = g.createLinearGradient(0, 0, 0, S.yH); gw.addColorStop(0, S.wall[0]); gw.addColorStop(1, S.wall[1]); g.fillStyle = gw; g.fillRect(0, 0, W, S.yH);
    g.save(); g.filter = 'blur(26px)';
    const P = S.props;
    if (P === 'plant') { g.fillStyle = '#a7c4cf'; g.fillRect(620, 120, 380, 620); g.fillStyle = '#f7fbff'; g.fillRect(650, 150, 150, 260); g.fillRect(830, 150, 140, 260); g.fillRect(650, 440, 150, 260); g.fillRect(830, 440, 140, 260);
      g.fillStyle = '#b5653a'; g.fillRect(80, 860, 260, 320); g.fillStyle = '#3f7d3a'; for (let i = 0; i < 9; i++) { g.beginPath(); g.ellipse(210 + r.range(-160, 160), 700 + r.range(-200, 120), 70, 150, r.range(-1, 1), 0, 7); g.fill(); } }
    if (P === 'grid') { g.fillStyle = 'rgba(160,210,255,0.25)'; for (let i = 0; i < 8; i++) g.fillRect(i * 150, 0, 6, S.yH); for (let j = 0; j < 9; j++) g.fillRect(0, j * 150, W, 6); g.fillStyle = '#f4f8ff'; g.fillRect(760, 160, 260, 340); }
    if (P === 'mug') { g.fillStyle = '#f1f1ee'; g.fillRect(760, 620, 260, 330); g.beginPath(); g.ellipse(890, 620, 130, 40, 0, 0, 7); g.fill(); g.fillStyle = '#3b2a20'; g.beginPath(); g.ellipse(890, 620, 110, 30, 0, 0, 7); g.fill(); g.fillStyle = '#8a7b6a'; g.fillRect(40, 760, 420, 40); g.fillStyle = '#e9c46a'; g.fillRect(60, 700, 360, 60); }
    if (P === 'kitchen') { g.fillStyle = '#ffffff'; g.fillRect(80, 520, 220, 480); g.fillStyle = '#e7b94b'; g.fillRect(100, 700, 180, 300); g.fillStyle = '#e8772e'; for (let i = 0; i < 5; i++) g.fillRect(640 + i * 70, 820 + r.range(-30, 30), 50, 260); g.fillStyle = '#7cae4f'; g.beginPath(); g.arc(860, 760, 120, 0, 7); g.fill(); g.fillStyle = '#d9cbb5'; g.fillRect(0, 300, W, 40); }
    if (P === 'field') { g.fillStyle = '#eef3f6'; g.fillRect(0, 0, W, 600); g.fillStyle = '#8a9a6a'; for (let i = 0; i < 14; i++) { g.beginPath(); g.ellipse(r.range(0, W), r.range(850, 1150), r.range(90, 200), r.range(40, 90), 0, 0, 7); g.fill(); } g.fillStyle = '#5c6b80'; g.fillRect(0, 650, W, 140); }
    if (P === 'lamp') { const lg = g.createRadialGradient(830, 330, 10, 830, 330, 520); lg.addColorStop(0, 'rgba(255,224,170,0.9)'); lg.addColorStop(1, 'rgba(255,224,170,0)'); g.fillStyle = lg; g.fillRect(0, 0, W, S.yH); g.fillStyle = '#2b2b2b'; g.fillRect(820, 330, 24, 900); g.fillStyle = '#6a5a7a'; g.fillRect(60, 600, 300, 600); }
    if (P === 'books') { const cols = ['#7b2d26', '#2f4b6e', '#c79a3a', '#3d6b4a', '#6b3f6e', '#9a4a2a']; for (let i = 0; i < 12; i++) { g.fillStyle = cols[i % cols.length]; g.fillRect(40 + i * 85, 380 + r.range(0, 120), 76, 700); } }
    if (P === 'bath') { g.fillStyle = '#ffffff'; for (let j = 0; j < 6; j++) for (let i = 0; i < 6; i++) g.fillRect(i * 190 + 6, j * 190 + 6, 178, 178); g.fillStyle = '#f2c94c'; g.beginPath(); g.ellipse(820, 900, 110, 80, 0, 0, 7); g.fill(); }
    g.restore();
    const gt = g.createLinearGradient(0, S.yH, 0, HH); gt.addColorStop(0, shade(S.top, -0.12)); gt.addColorStop(0.35, S.top); gt.addColorStop(1, shade(S.top, 0.06)); g.fillStyle = gt; g.fillRect(0, S.yH, W, HH - S.yH);
    if (S.grain) { g.save(); g.filter = 'blur(1.2px)'; for (let i = 0; i < 90; i++) { const v = i / 90, y = S.yH + (HH - S.yH) * Math.pow(v, 1.7); g.strokeStyle = H.rgba(S.grain, 0.08 + 0.12 * r()); g.lineWidth = 1 + v * 3; g.beginPath(); for (let x = 0; x <= W; x += 24) g.lineTo(x, y + nz.n2(x * 0.004, i * 0.7) * (6 + 20 * v)); g.stroke(); } g.restore(); }
    if (S.mat) { g.strokeStyle = 'rgba(255,255,255,0.22)'; g.lineWidth = 2; for (let i = -12; i <= 12; i++) { g.beginPath(); g.moveTo(540 + i * 40, S.yH); g.lineTo(540 + i * 140, HH); g.stroke(); } for (let i = 0; i < 16; i++) { const y = S.yH + (HH - S.yH) * Math.pow(i / 16, 1.6); g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); } }
    if (S.cloth) { g.fillStyle = 'rgba(200,80,80,0.16)'; for (let i = 0; i < 12; i++) { const y0 = S.yH + (HH - S.yH) * Math.pow(i / 12, 1.6), y1 = S.yH + (HH - S.yH) * Math.pow((i + 0.5) / 12, 1.6); g.fillRect(0, y0, W, y1 - y0); } }
    g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(0, S.yH - 4, W, 8);
    g.fillStyle = S.dark ? 'rgba(20,40,90,0.15)' : 'rgba(120,160,220,0.05)'; g.fillRect(0, 0, W, HH);
    H.vignette(g, W, HH, S.dark ? 0.5 : 0.28, S.dark ? '5,8,20' : '40,30,20');
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

  // ---------- scenes ----------
  const ORDER = [['hook', 0], ['xray', 5.4], ['pack', 12.75], ['wild', 18.75], ['run', 24.85], ['unload', 29.85], ['muscle', 35.08], ['float', 38.2], ['end', 43.2]];
  const WIPE = 0.5;
  const SC = {};
  SC.hook = (ctx, t) => {
    const s = ST(t);
    ctx.save(); cam(ctx, t, 0, 5.4, 1.0, 1.12, 560, 1250);
    drawBG(ctx, 'hook');
    // puff grows on "triple": stepped
    const puff = s < T('p1', 'pockets') ? 0 : s < T('p1', 'nearly') ? 0.35 : H.lerp(0.35, 1.1, EO(s, T('p1', 'nearly'), T('p1', 'size')));
    hamster(ctx, 470, 1380, 4.3, { t, puff, blink: s >= T('p2', 'why') && s < T('p2', 'why') + 0.25 });
    // sunflower seeds scattered on the desk
    [[150, 1560], [860, 1500], [930, 1610], [220, 1680], [780, 1700]].forEach(([x, y]) => seed(ctx, x, y, 1.4));
    ctx.restore(); ctxRef = ctx;
    tl(t, '2 SECRET POCKETS', 540, TOP, 96, T('p1', 'two'), { bg: PAL.red, icon: PAL.yellow });
    if (s >= T('p1', 'triple') - 0.1) tile(ctx, '≈ 3× BIGGER', 540, 520, 104, { k: popK(t, T('p1', 'triple')), bg: PAL.blue });
    tl(t, 'WHY?', 540, BOT, 130, T('p2', 'why'), { bg: PAL.yellow, fg: PAL.black });
  };
  SC.xray = (ctx, t) => {
    const s = ST(t), t0 = 5.4;
    ctx.save(); cam(ctx, t, t0, 12.75, 1.0, 1.07, 540, 1150); drawBG(ctx, 'xray');
    const x = 400, y = 1360, sc = 4.4, u = 34 * sc, by = -0.35 * u;
    ctx.save(); ctx.globalAlpha = 0.55; hamster(ctx, x, y, sc, { t, noShadow: false }); ctx.restore();
    // the pouch drawn as a translucent tube from the cheek back to the shoulder; it grows on "long" and reaches on "shoulders"
    const reach = s < T('p3', 'cheek') ? 0 : s < T('p4', 'runs') ? 0.35 : H.lerp(0.35, 1, EO(s, T('p4', 'runs'), T('p4', 'shoulders')));
    if (reach > 0) {
      const n = Math.max(2, Math.round(8 * reach)), pts = pouchPts(u, by, 8).slice(0, n);
      ctx.save(); ctx.translate(x, y);
      pts.slice().reverse().forEach(([px, py], i) => roundBrick(ctx, px, py + 0.4 * u, 0.42 * u, 0.5 * u, PAL.tblue, { noStud: true, alpha: 0.85 }));
      // a few seeds inside
      pts.forEach(([px, py], i) => { if (i % 2 === 0) seed(ctx, px - 10, py + 0.1 * u, 1.1); });
      ctx.restore();
    }
    // shoulder marker
    if (s >= T('p4', 'shoulders') - 0.1) { ctx.fillStyle = PAL.yellow; mosaic(ctx, ['X'], x - 0.5 * u - 24, y + by - 2.2 * u, 48, { X: PAL.yellow }); }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'CHEEK POUCH', 540, TOP, 104, T('p3', 'cheek'), { bg: PAL.blue });
    tl(t, 'LONG + STRETCHY', 540, 520, 76, T('p3', 'stretchy'), { bg: PAL.white, fg: PAL.blue, end: T('p4', 'deadend') });
    tl(t, 'DEAD END', 540, 520, 84, T('p4', 'deadend'), { bg: PAL.black });
    tl(t, '→ TO THE SHOULDERS', 540, BOT, 76, T('p4', 'shoulders'), { bg: PAL.yellow, fg: PAL.black });
  };
  SC.pack = (ctx, t) => {
    const s = ST(t), t0 = 12.75;
    ctx.save(); cam(ctx, t, t0, 18.75, 1.04, 1.0, 540, 1250); drawBG(ctx, 'pack');
    const tc = T('p6', 'carrot');
    const puff = s < T('p5', 'full') ? 0.3 : s < tc + 0.1 ? H.lerp(0.3, 0.95, EO(s, T('p5', 'full'), T('p5', 'balloons') + 0.3)) : 1.25;
    hamster(ctx, 380, 1400, 4.2, { t, puff });
    // the carrot flies in on an arc and vanishes into the cheek on "carrot"
    if (s >= T('p6', 'whole') - 0.3 && s < tc + 0.1) { const u = EI(s, T('p6', 'whole') - 0.3, tc); carrot(ctx, H.lerp(880, 620, u), H.lerp(1560, 1310, u) - Math.sin(u * Math.PI) * 220, 1.6 * (1 - 0.5 * u), H.lerp(0.4, -0.1, u)); }
    if (s < T('p6', 'whole') - 0.3) carrot(ctx, 860, 1600, 1.6, 0.25);
    ctx.restore(); ctxRef = ctx;
    tl(t, 'STUFFED FULL', 540, TOP, 104, T('p5', 'full'), { bg: PAL.orange, fg: PAL.black });
    tl(t, 'A FACE BACKPACK', 540, 520, 80, T('p5', 'backpack'), { bg: PAL.green, end: T('p6', 'whole') });
    tl(t, 'A WHOLE CARROT!', 540, BOT, 92, T('p6', 'carrot'), { bg: PAL.red });
  };
  SC.wild = (ctx, t) => {
    const s = ST(t), t0 = 18.75;
    ctx.save(); cam(ctx, t, t0, 24.85, 1.08, 1.0, 540, 1100); drawBG(ctx, 'wild');
    // wind of white plates blowing across after "harsh"
    const harsh = T('p7', 'harsh') - 0.1;
    if (s >= harsh) for (let i = 0; i < 16; i++) { const r = H.rng(i * 7 + 2), x = (r.range(0, 1200) + (s - harsh) * r.range(500, 800)) % 1250 - 100, y = r.range(300, 1400); brick(ctx, x, y, 1, 1, PAL.white, { u: 24, plate: true, alpha: 0.85 }); }
    // sparse seeds; a dry tuft of grass bricks
    for (let i = 0; i < 3; i++) roundBrick(ctx, 120 + i * 26, 1500, 10, 90 + i * 30, '#9a8a4a', { noStud: true });
    seed(ctx, 880, 1580, 1.5); seed(ctx, 980, 1630, 1.5);
    hamster(ctx, 360, 1420, 3.6, { t, puff: 0.2, blink: s > harsh && Math.floor(s * 3) % 3 === 0 });
    // a big red X on "don't eat"
    if (s >= T('p8', 'dont') - 0.1) { const k = popK(t, T('p8', 'dont')); ctx.save(); ctx.translate(920, 1330); ctx.scale(k, k); ctx.rotate(0.785); brick(ctx, -110, 20, 8, 1, PAL.red, { u: 28, plate: true }); ctx.rotate(-1.57); brick(ctx, -110, 20, 8, 1, PAL.red, { u: 28, plate: true }); ctx.restore(); }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'FOOD IS SCARCE', 540, TOP, 96, T('p7', 'scarce'), { bg: PAL.black });
    tl(t, 'HARSH WEATHER', 540, 520, 84, T('p7', 'harsh'), { bg: PAL.blue, end: T('p8', 'dont') });
    tl(t, "DON'T EAT HERE", 540, BOT, 92, T('p8', 'eat'), { bg: PAL.red });
  };
  SC.run = (ctx, t) => {
    const s = ST(t), t0 = 24.85, split = T('p10', 'and') - 0.05;
    ctx.save();
    if (t < split) {
      // tracking shot: the desk scrolls on ones, the hamster steps on twos
      cam(ctx, t, t0, split, 1.0, 1.0); drawBG(ctx, 'run');
      const scroll = (t - t0) * 420;
      for (let i = 0; i < 9; i++) { const x = ((i * 260 - scroll) % 2340 + 2340) % 2340 - 300; seed(ctx, x, 1560 + (i % 3) * 60, 1.4); }
      // burrow entrance ahead: a dark arch of brown bricks
      const bx = H.lerp(1500, 900, ph(t, t0 + 0.6, split));
      brick(ctx, bx - 80, 1500, 6, 2, BROWN, { u: 50 }); ctx.fillStyle = '#140c06'; ctx.beginPath(); ctx.ellipse(bx + 70, 1450, 90, 60, 0, Math.PI, 0); ctx.fill();
      const puff = s < T('p9', 'fill') ? 0.3 : H.lerp(0.3, 1.1, EO(s, T('p9', 'fill'), T('p9', 'fast')));
      hamster(ctx, 360, 1450, 3.4, { t, puff, run: s >= T('p9', 'run') - 0.1 });
      ctx.restore(); ctxRef = ctx;
      tl(t, 'FILL UP FAST', 540, TOP, 104, T('p9', 'fill'), { bg: PAL.orange, fg: PAL.black });
      tl(t, 'RUN HOME!', 540, BOT, 104, T('p9', 'run'), { bg: PAL.green });
    } else {
      // cutaway of the burrow: soil of brown bricks, a chamber filling with seeds
      cam(ctx, t, split, 29.85, 1.0, 1.06, 540, 1200);
      ctx.fillStyle = '#cfe0e8'; ctx.fillRect(0, 0, W, 560); ctx.fillStyle = '#5f8f3a'; ctx.fillRect(0, 540, W, 40);
      const soil = ['#6b4a32', '#5a3d28', '#7a5638'];
      for (let j = 0; j < 12; j++) for (let i = -1; i < 9; i++) { const x = i * 140 + (j % 2) * 70, y = 700 + j * 112; brick(ctx, x, y, 3, 1, soil[(i + j + 9) % 3], { u: 46, tile: true, d: 12 }); }
      ctx.fillStyle = '#1e140c'; rr(ctx, 160, 1040, 760, 460, 200); ctx.fill(); // chamber
      ctx.fillRect(470, 560, 110, 500); // tunnel
      const n = Math.floor(30 * EO(s, T('p10', 'stash'), T('p10', 'pantry') + 0.3));
      const R = H.rng(5); for (let i = 0; i < 30; i++) { const px = 240 + R() * 560, py = 1470 - Math.floor(i / 8) * 26 - R() * 20; if (i < n) seed(ctx, px, py, 1.3, i % 5 === 0 ? PAL.orange : SEED); }
      hamster(ctx, 360, 1300, 1.5, { t, puff: s < T('p10', 'stash') ? 1 : H.lerp(1, 0.2, ph(s, T('p10', 'stash'), T('p10', 'pantry'))), noShadow: true });
      ctx.restore(); ctxRef = ctx;
      tl(t, 'UNDERGROUND', 540, TOP, 104, T('p10', 'underground'), { bg: PAL.black });
      tl(t, 'PANTRY', 540, BOT + 70, 110, T('p10', 'pantry'), { bg: PAL.yellow, fg: PAL.black });
    }
  };
  SC.unload = (ctx, t) => {
    const s = ST(t), t0 = 29.85, tp = T('p12', 'pours');
    ctx.save(); cam(ctx, t, t0, 35.1, 1.0, 1.12, 620, 1200, s >= tp && s < tp + 0.25 ? 9 : 0); drawBG(ctx, 'unload');
    const puff = s < T('p11', 'push') ? 1.2 : s < T('p12', 'out') ? H.lerp(1.2, 0.7, ph(s, T('p11', 'push'), T('p12', 'out'))) : H.lerp(0.7, 0.15, ph(s, T('p12', 'out'), tp + 0.3));
    hamster(ctx, 420, 1330, 4.0, { t, puff, push: s >= T('p11', 'push') - 0.1 });
    // seeds pour out on "out it all pours": pre-simulated arcs, bounce, settle (stepped on twos)
    const t1 = T('p12', 'out') - 0.05;
    for (let i = 0; i < 26; i++) {
      const R = H.rng(i * 31 + 7), st0 = t1 + i * 0.035; if (s < st0) continue;
      const dt = s - st0, vx = R.range(180, 520), vy = R.range(-520, -200), g = 1600, x0 = 670, y0 = 1240;
      let x = x0 + vx * dt, y = y0 + vy * dt + 0.5 * g * dt * dt; const floor = 1520 + R.range(0, 140);
      if (y > floor) { const tl0 = (-vy + Math.sqrt(vy * vy + 2 * g * (floor - y0))) / g; x = x0 + vx * tl0 + vx * 0.3 * Math.min(dt - tl0, 0.3); y = floor; }
      seed(ctx, Math.min(x, 1020), y, 1.4, i % 6 === 0 ? PAL.orange : SEED);
    }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'UNLOAD!', 540, TOP, 110, T('p11', 'unload'), { bg: PAL.blue });
    tl(t, 'FRONT PAWS PUSH', 540, 520, 80, T('p11', 'front'), { bg: PAL.white, fg: PAL.black });
    tl(t, 'POUR!', 540, BOT, 120, tp, { bg: PAL.yellow, fg: PAL.black });
  };
  SC.muscle = (ctx, t) => {
    const s = ST(t), t0 = 35.08;
    ctx.save(); cam(ctx, t, t0, 38.2, 1.05, 1.0, 540, 1150); drawBG(ctx, 'muscle');
    const x = 380, y = 1400, sc = 4.4, u = 34 * sc, by = -0.35 * u;
    const pull = EO(s, T('p13', 'pulls') - 0.1, T('p13', 'back') + 0.2);
    hamster(ctx, x, y, sc, { t, puff: H.lerp(0.9, 0, pull) });
    // the retractor muscle: a red band of plates from the shoulder to the pouch; it shortens as it pulls
    if (s >= T('p13', 'muscle') - 0.1) {
      const k = popK(t, T('p13', 'muscle')), len = H.lerp(4.2, 1.8, pull);
      ctx.save(); ctx.translate(x - 1.4 * u, y + by - 1.7 * u); ctx.scale(k, k); ctx.rotate(0.08);
      for (let i = 0; i < Math.round(len * 2); i++) brick(ctx, i * 0.5 * u, 0, 1, 1, i % 2 ? PAL.red : '#e8473a', { u: 0.5 * u, plate: true });
      ctx.restore();
    }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'SPECIAL MUSCLE', 540, TOP, 96, T('p13', 'muscle'), { bg: PAL.red });
    tl(t, 'PULLS IT BACK IN', 540, BOT, 80, T('p13', 'pulls'), { bg: PAL.white, fg: PAL.red });
  };
  SC.float = (ctx, t) => {
    const s = ST(t), t0 = 38.2;
    ctx.save(); cam(ctx, t, t0, 43.2, 1.0, 1.08, 540, 1200); drawBG(ctx, 'float');
    const air = s < T('p14', 'puff') ? 0 : H.lerp(0, 1.15, EO(s, T('p14', 'puff'), T('p14', 'air')));
    const wy = 1400, sink = H.lerp(150, -40, air), bob = Math.sin(ST(t) * 4) * 10;
    // back water layer
    ctx.fillStyle = 'rgba(80,170,230,0.35)'; ctx.fillRect(0, wy - 30, W, HH - wy + 30);
    hamster(ctx, 420, wy + 80 + sink + bob, 4.0, { t, puff: air, noShadow: true });
    // front water: translucent blue plates in a row, jittered per drawing
    const R = H.rng(Math.floor(ST(t) * 12));
    ctx.save(); ctx.globalAlpha = 0.72; for (let i = -1; i < 12; i++) brick(ctx, i * 100 + R.range(-6, 6), wy + 40 + R.range(-6, 6), 2, 1, '#4fa8e0', { u: 50, plate: true }); ctx.restore();
    ctx.fillStyle = 'rgba(60,150,220,0.55)'; ctx.fillRect(0, wy + 40, W, HH - wy - 40);
    ctx.restore(); ctxRef = ctx;
    tl(t, 'BONUS!', 540, TOP, 120, T('p14', 'bonus'), { bg: PAL.yellow, fg: PAL.black });
    tl(t, 'AIR IN THE POUCHES', 540, 520, 76, T('p14', 'air'), { bg: PAL.blue });
    tl(t, 'BUILT-IN FLOATIES', 540, BOT, 84, T('p15', 'float'), { bg: PAL.white, fg: PAL.blue });
  };
  SC.end = (ctx, t) => {
    const s = ST(t), t0 = 43.2;
    ctx.save(); cam(ctx, t, t0, DURATION, 1.0, 1.05, 540, 1200); drawBG(ctx, 'end');
    hamster(ctx, 420, 1400, 3.8, { t, puff: 0.6, blink: Math.floor(s * 2) % 5 === 0 });
    // two empty pocket bricks snap onto the desk, a question tile pops between
    const a = snap(t, T('p16', 'secret'), 280), b = snap(t, T('p16', 'pockets'), 280);
    if (a) brick(ctx, 110, 1640 + a.dy, 3, 2, PAL.blue, { u: 70 });
    if (b) brick(ctx, 760, 1640 + b.dy, 3, 2, PAL.red, { u: 70 });
    ctx.restore(); ctxRef = ctx;
    tl(t, '2 SECRET POCKETS?', 540, TOP, 92, T('p16', 'two'), { bg: PAL.red, icon: PAL.yellow });
    tl(t, 'WHAT GOES IN FIRST?', 540, 520, 80, T('p17', 'carry'), { bg: PAL.blue });
    tl(t, 'TELL ME BELOW ↓', 540, 710, 76, T('p17', 'first'), { bg: PAL.black });
  };
  // a giant brick slides across the lens to change set
  function brickWipe(ctx, u, col) {
    const x = H.lerp(W + 40, -1500, u), c = 180;
    ctx.save(); ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(x - 30, 0, 1460, HH);
    ctx.fillStyle = shade(col, -0.05); ctx.fillRect(x, 0, 1440, HH);
    for (let j = 0; j < 11; j++) for (let i = 0; i < 8; i++) { const cx = x + 90 + i * c, cy = 90 + j * c; const r = c * 0.32; ctx.fillStyle = 'rgba(0,0,0,0.28)'; ctx.beginPath(); ctx.arc(cx + 8, cy + 10, r, 0, 7); ctx.fill(); const g = ctx.createRadialGradient(cx - r * 0.4, cy - r * 0.4, 4, cx, cy, r); g.addColorStop(0, shade(col, 0.45)); g.addColorStop(1, shade(col, -0.05)); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.fill(); }
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillRect(x, 0, 10, HH); ctx.restore();
  }
  const WIPECOL = [PAL.red, PAL.yellow, PAL.blue, PAL.green, PAL.orange, PAL.red, PAL.blue, PAL.yellow];
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    ctxRef = ctx;
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1]) i++;
    SC[ORDER[i][0]](ctx, t);
    for (let j = 1; j < ORDER.length; j++) { const c = ORDER[j][1]; if (t > c - WIPE / 2 && t < c + WIPE / 2) brickWipe(ctx, ph(t, c - WIPE / 2, c + WIPE / 2), WIPECOL[(j - 1) % WIPECOL.length]); }
    if (!GR) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.025 * 255; d[j] = d[j + 1] = d[j + 2] = n > 0 ? 255 : 0; d[j + 3] = Math.min(255, Math.abs(n) * 2); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  // ---------- sound: brick clicks, clacks on wood, whooshes, plastic patter ----------
  function scoreSound(k) {
    const D = DURATION;
    const click = (t, g = 0.8, p = 0, minor = false) => { k.play('click', t, { f: 2900, gain: g, pan: p, minor }); k.play('tick', t + 0.004, { f: 4600, gain: g * 0.6, pan: p, minor }); };
    const clack = (t, g = 0.6, p = 0) => k.play('tock', t, { f: 620, gain: g, pan: p, minor: true });
    k.bed('room', 0, D, { gain: 0.18 });
    for (let j = 1; j < ORDER.length; j++) { const c = ORDER[j][1]; k.play('whoosh', c - 0.28, { dur: 0.5, gain: 0.6, top: 2200 }); clack(c + 0.22, 0.55); }
    // hook
    click(T('p1', 'two')); click(T('p1', 'pockets'), 0.6, 0.3);
    for (let i = 0; i < 4; i++) click(T('p1', 'nearly') + i * 0.17, 0.5, 0.3, true);
    click(T('p1', 'triple')); k.play('ding', T('p1', 'triple') + 0.05, { f: 'E5', gain: 0.25 }); click(T('p2', 'why'), 0.9);
    // xray
    click(T('p3', 'cheek')); k.play('riser', T('p4', 'runs') - 0.1, { dur: 1.6, gain: 0.2, minor: true });
    for (let i = 0; i < 6; i++) click(T('p4', 'runs') + i * 0.27, 0.45, -0.2, true);
    click(T('p4', 'deadend'), 0.7); click(T('p4', 'shoulders')); k.play('ding', T('p4', 'shoulders') + 0.05, { f: 'G5', gain: 0.2 });
    // backpack
    click(T('p5', 'full')); for (let i = 0; i < 4; i++) click(T('p5', 'balloons') + i * 0.1, 0.5, 0.3, true); click(T('p5', 'backpack'), 0.7);
    k.play('whoosh', T('p6', 'whole') - 0.3, { dur: 0.5, gain: 0.45 }); k.play('impact', T('p6', 'carrot'), { gain: 0.35 }); click(T('p6', 'carrot'));
    // wild
    click(T('p7', 'scarce')); k.noise(T('p7', 'harsh') - 0.1, { dur: 2.6, color: 'pink', filter: 'bandpass', f: [[0, 500], [1.3, 1400], [2.6, 600]], gain: 0.12, a: 0.3, minor: true });
    click(T('p7', 'harsh'), 0.6); k.play('error', T('p8', 'dont'), { f: 'A3', gain: 0.35 }); click(T('p8', 'eat'));
    // run
    click(T('p9', 'fill')); for (let x = T('p9', 'run'); x < T('p10', 'and') - 0.1; x += 1 / 6) k.play('tick', x, { f: 1800, gain: 0.3, minor: true });
    click(T('p9', 'run'), 0.7); click(T('p10', 'underground'));
    for (let i = 0; i < 10; i++) clack(T('p10', 'stash') + i * 0.12, 0.35, (i % 2 ? 0.4 : -0.4)); click(T('p10', 'pantry')); k.play('ding', T('p10', 'pantry') + 0.05, { f: 'C6', gain: 0.2 });
    // unload
    click(T('p11', 'unload')); click(T('p11', 'push'), 0.6); click(T('p11', 'front'), 0.6);
    for (let i = 0; i < 26; i++) clack(T('p12', 'out') + 0.25 + i * 0.035, 0.3, (i % 2 ? 0.5 : -0.3)); click(T('p12', 'pours'));
    // muscle
    click(T('p13', 'muscle')); k.play('swish', T('p13', 'pulls'), { gain: 0.4 }); for (let i = 0; i < 4; i++) click(T('p13', 'pulls') + i * 0.2, 0.4, -0.3, true);
    // float
    k.play('success', T('p14', 'bonus'), { f: 'C6', gain: 0.3 }); click(T('p14', 'bonus'));
    k.noise(T('p14', 'puff'), { dur: 1.0, color: 'pink', filter: 'bandpass', f: [[0, 700], [1.0, 2200]], gain: 0.15, a: 0.1, minor: true }); click(T('p14', 'air'), 0.6);
    k.noise(38.3, { dur: 4.8, color: 'pink', filter: 'lowpass', f: 900, gain: 0.05, a: 0.4, minor: true }); click(T('p15', 'float'));
    // end
    click(T('p16', 'two')); click(T('p16', 'secret'), 0.8, -0.4); click(T('p16', 'pockets'), 0.8, 0.4); click(T('p17', 'carry'));
    k.play('ding', T('p17', 'first'), { f: 'G5', gain: 0.3 }); click(T('p17', 'first'));
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
