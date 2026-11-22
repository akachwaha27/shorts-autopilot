// ================= Brick Toy, vertical 1080x1920: "Why do goats have rectangle-shaped pupils?" =================
// Lemo-Opuscar "Brick Toy" style (MIT) drawn in Canvas 2D for this repo's harness. Unattended run: no storyboard step.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'p1', s: 0.25, e: 3.91, w: {rectangle: 0.25, pupils: 1.09, let: 1.66, your: 1.94, goat: 2.31, see: 2.69, n320: 2.97, degrees: 3.25} },
    { id: 'p2', s: 4.03, e: 6.34, w: {almost: 4.03, behind: 4.66, its: 5.29, own: 5.6, head: 5.92} },
    { id: 'p3', s: 6.78, e: 7.98, w: {why: 6.78, rectangles: 7.06} },
    { id: 'p4', s: 8.43, e: 11.24, w: {goats: 8.43, are: 8.82, on: 9.06, the: 9.21, menu: 9.45, for: 9.76, wolves: 9.99, and: 10.46, big: 10.7, cats: 10.93} },
    { id: 'p5', s: 11.38, e: 14.87, w: {so: 11.38, they: 11.54, need: 11.86, to: 12.17, spot: 12.33, danger: 12.65, from: 13.12, almost: 13.44, any: 13.92, direction: 14.15} },
    { id: 'p6', s: 15.22, e: 18.37, w: {a: 15.22, long: 15.29, sideways: 15.59, slit: 16.19, stretches: 16.49, their: 17.17, view: 17.54, out: 17.84, wide: 18.07} },
    { id: 'p7', s: 18.82, e: 19.92, w: {right: 18.82, along: 19.1, the: 19.39, ground: 19.57} },
    { id: 'p8', s: 20.4, e: 22.31, w: {where: 20.4, predators: 20.73, actually: 21.32, sneak: 21.85, up: 22.18} },
    { id: 'p9', s: 22.7, e: 24.47, w: {with: 22.7, eyes: 22.96, on: 23.23, the: 23.36, sides: 23.55, of: 23.88, head: 24.21} },
    { id: 'p10', s: 25.01, e: 27.84, w: {only: 25.01, a: 25.36, thin: 25.45, blind: 25.81, spot: 26.25, is: 26.6, left: 26.78, behind: 27.13, it: 27.66} },
    { id: 'p11', s: 28.26, e: 31.08, w: {the: 28.26, slit: 28.48, also: 28.78, blocks: 29.08, glare: 29.52, from: 29.89, bright: 30.41, sky: 30.86} },
    { id: 'p12', s: 31.55, e: 33.09, w: {now: 31.55, heres: 31.78, the: 32.16, weird: 32.4, part: 32.78} },
    { id: 'p13', s: 33.48, e: 34.98, w: {when: 33.48, a: 33.77, goat: 33.84, drops: 34.12, its: 34.48, head: 34.69} },
    { id: 'p14', s: 35.04, e: 35.8, w: {to: 35.04, eat: 35.19, grass: 35.42} },
    { id: 'p15', s: 36.22, e: 38.03, w: {its: 36.22, eyeballs: 36.43, roll: 36.99, the: 37.26, other: 37.47, way: 37.82} },
    { id: 'p16', s: 38.34, e: 39.76, w: {about: 38.34, n50: 38.73, degrees: 38.89, each: 39.44} },
    { id: 'p17', s: 39.84, e: 42.71, w: {so: 39.84, the: 40.01, slits: 40.27, stay: 40.71, level: 41.06, with: 41.49, horizon: 42.1} },
    { id: 'p18', s: 43.16, e: 45.41, w: {you: 43.16, can: 43.41, only: 43.66, do: 43.99, that: 44.16, a: 44.49, few: 44.57, degrees: 44.82} },
    { id: 'p19', s: 45.81, e: 47.69, w: {so: 45.81, would: 45.94, you: 46.26, swap: 46.46, your: 46.72, round: 46.97, pupils: 47.3} },
    { id: 'p20', s: 48.04, e: 49.52, w: {for: 48.04, a: 48.27, goats: 48.35, rectangles: 48.74} },
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
  const SUN = ['..XXX..', '.XXXXX.', 'XXXXXXX', 'XXXXXXX', 'XXXXXXX', '.XXXXX.', '..XXX..'];
  const shadowBlob = (ctx, x, y, rx, ry, a = 0.32) => { const g = ctx.createRadialGradient(x, y, 0, x, y, rx); g.addColorStop(0, `rgba(30,20,10,${a})`); g.addColorStop(1, 'rgba(30,20,10,0)'); ctx.save(); ctx.translate(x, y); ctx.scale(1, ry / rx); ctx.translate(-x, -y); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, rx, 0, 7); ctx.fill(); ctx.restore(); };
  // ---------- top-down studs, eyes, arrows ----------
  function topStud(ctx, x, y, r, col) {
    ctx.fillStyle = 'rgba(0,0,0,0.28)'; ctx.beginPath(); ctx.arc(x + r * 0.2, y + r * 0.28, r, 0, 7); ctx.fill();
    const g = ctx.createRadialGradient(x - r * 0.4, y - r * 0.4, r * 0.1, x, y, r); g.addColorStop(0, shade(col, 0.45)); g.addColorStop(1, shade(col, -0.08));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  }
  const AMBER = '#d99a2b', AMBERL = '#f2c45a', FUR = '#ecebe4', HORN = '#8f8a80', TAN = PAL.tan, BEARD = '#d8d4c8';
  // the macro eye: o.pupil morph 0 round .. 1 rectangle, o.rot pupil angle, o.socketRot fur ring angle, o.iris colour
  function bigEye(ctx, cx, cy, R, o = {}) {
    const m = o.morph == null ? 1 : o.morph, iris = o.iris || AMBER, irisL = o.irisL || AMBERL;
    ctx.save(); ctx.translate(cx, cy);
    // socket: a ring of fur plates with studs (rotates with the head)
    ctx.save(); ctx.rotate(o.socketRot || 0);
    ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.beginPath(); ctx.arc(10, 18, R * 1.32, 0, 7); ctx.fill();
    ctx.fillStyle = o.socket || '#d9d7cf'; ctx.beginPath(); ctx.arc(0, 0, R * 1.3, 0, 7); ctx.fill();
    for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2; topStud(ctx, Math.cos(a) * R * 1.16, Math.sin(a) * R * 1.16, R * 0.085, o.socket || '#d9d7cf'); }
    // a stripe that shows which way the head points
    if (o.mark) { ctx.fillStyle = shade(o.socket || '#d9d7cf', -0.25); rr(ctx, R * 1.02, -R * 0.07, R * 0.26, R * 0.14, 6); ctx.fill(); rr(ctx, -R * 1.28, -R * 0.07, R * 0.26, R * 0.14, 6); ctx.fill(); }
    ctx.restore();
    // iris: a glossy round tile
    const g = ctx.createRadialGradient(-R * 0.3, -R * 0.35, R * 0.1, 0, 0, R); g.addColorStop(0, irisL); g.addColorStop(0.7, iris); g.addColorStop(1, shade(iris, -0.35));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, R, 0, 7); ctx.fill();
    ctx.strokeStyle = shade(iris, -0.5); ctx.lineWidth = R * 0.05; ctx.stroke();
    ctx.strokeStyle = 'rgba(0,0,0,0.14)'; ctx.lineWidth = 2;
    for (let i = 0; i < 28; i++) { const a = i / 28 * 6.283; ctx.beginPath(); ctx.moveTo(Math.cos(a) * R * 0.45, Math.sin(a) * R * 0.45); ctx.lineTo(Math.cos(a) * R * 0.92, Math.sin(a) * R * 0.92); ctx.stroke(); }
    // pupil: black plate, round -> long rectangle, studs on top
    ctx.save(); ctx.rotate(o.rot || 0);
    const pw = H.lerp(R * 0.52, R * 1.36, m), ph_ = H.lerp(R * 0.52, R * 0.34, m), cr = H.lerp(ph_ / 2, ph_ * 0.22, m);
    ctx.fillStyle = 'rgba(0,0,0,0.35)'; rr(ctx, -pw / 2 + 6, -ph_ / 2 + 8, pw, ph_, cr); ctx.fill();
    ctx.fillStyle = '#121619'; rr(ctx, -pw / 2, -ph_ / 2, pw, ph_, cr); ctx.fill();
    const ns = m > 0.5 ? 4 : 1; for (let i = 0; i < ns; i++) topStud(ctx, ns === 1 ? 0 : -pw / 2 + pw * (i + 0.5) / ns, 0, ph_ * 0.28, '#1b2a34');
    ctx.restore();
    // softbox reflection: clean rectangle + dot
    ctx.fillStyle = 'rgba(255,255,255,0.6)'; rr(ctx, -R * 0.62, -R * 0.66, R * 0.36, R * 0.2, 8); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.35)'; rr(ctx, R * 0.35, R * 0.45, R * 0.16, R * 0.1, 5); ctx.fill();
    ctx.restore();
  }
  // a brick arrow (plates + a wedge head) pointing along angle a, tip at (x,y)
  function arrow(ctx, x, y, a, len, col, k = 1) {
    if (k <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.scale(k, k);
    const u = 34; for (let i = 0; i < Math.round(len / u); i++) brick(ctx, -len + i * u - 10, u * 0.2, 1, 1, col, { u, plate: true, d: 14 });
    ctx.fillStyle = shade(col, -0.25); poly(ctx, [-6, -40, 26, 2, -6, 44]); ctx.fill(); ctx.fillStyle = col; poly(ctx, [-10, -36, 18, 0, -10, 36]); ctx.fill();
    ctx.restore();
  }
  // ---------- the brick-built goat (side view, facing right) ----------
  // o: {t, head 0..1 (down to graze), roll true = pupils counter-rotate, walk}
  function goat(ctx, x, y, s, o = {}) {
    const u = 34 * s, a = (o.head || 0) * 1.05;
    ctx.save(); ctx.translate(x, y); if (o.flip) ctx.scale(-1, 1);
    if (!o.noShadow) shadowBlob(ctx, 0, 0, 3.3 * u, 0.5 * u, 0.32);
    const legs = [[-1.75, 1], [1.25, 1], [-1.15, 0], [1.85, 0]];
    legs.forEach(([lx, front]) => { const c = front ? FUR : shade(FUR, -0.12); brick(ctx, lx * u - 0.28 * u, -0.25 * u, 1, 1, c, { u: 0.56 * u, h: 2.4, tile: true, d: 0.3 * u }); brick(ctx, lx * u - 0.3 * u, 0, 1, 1, '#4a3b30', { u: 0.6 * u, plate: true, tile: true, d: 0.3 * u }); });
    // tail
    ctx.save(); ctx.translate(-2.15 * u, -2.6 * u); ctx.rotate(-0.5); brick(ctx, -0.15 * u, 0, 1, 1, FUR, { u: 0.36 * u, h: 1.8 }); ctx.restore();
    // body
    brick(ctx, -2.1 * u, -1.45 * u, 4, 2, FUR, { u: u * 1.08, h: 1.25 });
    brick(ctx, -1.3 * u, -1.4 * u, 2, 1, '#dcd8cc', { u: u * 0.9, plate: true, tile: true, d: 0.2 * u });
    // neck + head pivot at the shoulder
    ctx.save(); ctx.translate(1.75 * u, -2.55 * u); ctx.rotate(a);
    brick(ctx, -0.35 * u, 0.55 * u, 1, 1, FUR, { u: 0.95 * u, h: 1.7 });
    const hx = 0.15 * u, hy = -0.7 * u;
    // horns: grey round bricks curving back
    [[0.45, -1.75, 0.2], [0.25, -2.12, 0.18], [-0.05, -2.38, 0.16], [-0.38, -2.45, 0.13]].forEach(([px, py, r]) => roundBrick(ctx, hx + px * u, hy + (py + 0.85) * u, r * u, 0.42 * u, HORN, { noStud: true }));
    // ear: a plate sticking back
    ctx.save(); ctx.translate(hx - 0.1 * u, hy - 0.75 * u); ctx.rotate(0.45); brick(ctx, -0.7 * u, 0, 2, 1, shade(FUR, -0.06), { u: 0.38 * u, plate: true, d: 0.2 * u }); ctx.restore();
    brick(ctx, hx, hy, 2, 1, FUR, { u: 0.85 * u, h: 1.15 });
    brick(ctx, hx + 1.45 * u, hy + 0.02 * u, 1, 1, TAN, { u: 0.62 * u, h: 1.15, tile: true, d: 0.3 * u });
    ctx.fillStyle = '#5a4636'; ctx.beginPath(); ctx.arc(hx + 1.95 * u, hy - 0.55 * u, 0.07 * u, 0, 7); ctx.fill();
    // beard
    brick(ctx, hx + 1.15 * u, hy + 0.55 * u, 1, 1, BEARD, { u: 0.28 * u, h: 1.7, tile: true, d: 0.15 * u });
    // eye: amber with a black bar; with roll on, the bar counter-rotates to stay level
    const ex = hx + 0.95 * u, ey = hy - 0.62 * u, er = 0.21 * u * (o.eyeK || 1);
    ctx.fillStyle = '#2b2620'; ctx.beginPath(); ctx.arc(ex, ey, er * 1.18, 0, 7); ctx.fill();
    ctx.fillStyle = AMBER; ctx.beginPath(); ctx.arc(ex, ey, er, 0, 7); ctx.fill();
    ctx.save(); ctx.translate(ex, ey); ctx.rotate(o.roll ? -a : 0); ctx.fillStyle = '#121619'; rr(ctx, -er * 0.78, -er * 0.24, er * 1.56, er * 0.48, er * 0.1); ctx.fill(); ctx.restore();
    ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.fillRect(ex - er * 0.55, ey - er * 0.7, er * 0.35, er * 0.22);
    ctx.restore();
    ctx.restore();
  }
  // a brick predator, low and creeping (side view, facing right). kind 'wolf' or 'cat'
  function predator(ctx, x, y, s, o = {}) {
    const u = 30 * s, f = Math.floor(ST(o.t || 0) * 12), cat = o.kind === 'cat', col = cat ? '#d9a35a' : '#8a8f94', dk = shade(col, -0.2);
    ctx.save(); ctx.translate(x, y); if (o.flip) ctx.scale(-1, 1);
    shadowBlob(ctx, 0, 0, 2.8 * u, 0.4 * u, 0.28);
    const st = o.walk ? (f % 2 ? 0.2 : -0.2) * u : 0;
    [[-1.5, st], [1.1, -st], [-1.0, -st], [1.6, st]].forEach(([lx, d], i) => brick(ctx, lx * u + d - 0.25 * u, 0, 1, 1, i < 2 ? dk : col, { u: 0.5 * u, h: 1.6, tile: true, d: 0.25 * u }));
    // tail
    ctx.save(); ctx.translate(-2.0 * u, -1.5 * u); ctx.rotate(cat ? -1.0 : 0.5); brick(ctx, -1.3 * u, 0, cat ? 4 : 3, 1, cat ? col : shade(col, 0.1), { u: (cat ? 0.32 : 0.45) * u, h: cat ? 0.9 : 1.2, d: 0.2 * u }); ctx.restore();
    brick(ctx, -2.0 * u, -0.75 * u, 4, 1, col, { u: 0.98 * u, h: 1.1 });
    if (cat) for (let i = 0; i < 5; i++) { ctx.fillStyle = '#6b4520'; ctx.beginPath(); ctx.arc(-1.6 * u + i * 0.75 * u, -1.25 * u + (i % 2) * 0.3 * u, 0.12 * u, 0, 7); ctx.fill(); }
    // head
    const hx = 1.75 * u, hy = -1.0 * u;
    if (cat) { roundBrick(ctx, hx + 0.25 * u, hy - 0.95 * u, 0.2 * u, 0.25 * u, col, { noStud: true }); roundBrick(ctx, hx + 0.85 * u, hy - 0.95 * u, 0.2 * u, 0.25 * u, col, { noStud: true }); }
    else { ctx.fillStyle = dk; poly(ctx, [hx + 0.1 * u, hy - 0.9 * u, hx + 0.35 * u, hy - 1.55 * u, hx + 0.6 * u, hy - 0.9 * u]); ctx.fill(); ctx.fillStyle = col; poly(ctx, [hx + 0.55 * u, hy - 0.9 * u, hx + 0.8 * u, hy - 1.5 * u, hx + 1.05 * u, hy - 0.9 * u]); ctx.fill(); }
    brick(ctx, hx, hy, 1, 1, col, { u: 1.15 * u, h: 0.8 });
    brick(ctx, hx + 1.1 * u, hy - 0.05 * u, 1, 1, cat ? shade(col, 0.15) : shade(col, 0.1), { u: (cat ? 0.45 : 0.8) * u, h: cat ? 1.0 : 0.6, tile: true, d: 0.3 * u });
    ctx.fillStyle = '#1b2a34'; ctx.beginPath(); ctx.arc(hx + (cat ? 1.5 : 1.85) * u, hy - 0.45 * u, 0.08 * u, 0, 7); ctx.fill();
    ctx.fillStyle = PAL.tyellow; ctx.beginPath(); ctx.arc(hx + 0.75 * u, hy - 0.62 * u, 0.13 * u, 0, 7); ctx.fill(); ctx.fillStyle = '#111'; ctx.fillRect(hx + 0.73 * u, hy - 0.73 * u, 0.05 * u, 0.22 * u);
    ctx.restore();
  }
  // plan view goat (head at the top) as a mosaic of plates
  const GOAT_TOP = ['...TTT...', '...WWW...', '..eWWWe..', '..gWWWg..', '...WWW...', '..WWWWW..', '.WWWWWWW.', '.WWWWWWW.', '.WWWWWWW.', '.WWWWWWW.', '..WWWWW..', '....W....'];
  // the field of view: translucent plates in rings around the head, covering +-half of `deg` from straight ahead
  function viewFan(ctx, ox, oy, deg, rings, col, o = {}) {
    const half = deg / 2 * Math.PI / 180;
    for (let k = 1; k <= rings; k++) {
      const r = 70 + k * 58, n = Math.floor(2 * Math.PI * r / 62);
      for (let i = 0; i < n; i++) {
        const a = -Math.PI + (i + 0.5) / n * 2 * Math.PI; // 0 = straight ahead (up)
        if (Math.abs(a) > half) continue;
        const x = ox + Math.sin(a) * r, y = oy - Math.cos(a) * r;
        ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.globalAlpha = (o.alpha || 0.6) * (1 - k / (rings + 3));
        ctx.fillStyle = col; rr(ctx, -24, -24, 48, 48, 5); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(-22, -22, 44, 6);
        ctx.globalAlpha = 1; ctx.restore();
      }
    }
  }
  function blindWedge(ctx, ox, oy, deg, R, k = 1) {
    const half = deg / 2 * Math.PI / 180 * k; if (half <= 0) return;
    ctx.save(); ctx.fillStyle = 'rgba(27,42,52,0.55)'; ctx.beginPath(); ctx.moveTo(ox, oy);
    ctx.arc(ox, oy, R, Math.PI / 2 - half, Math.PI / 2 + half); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = PAL.red; ctx.lineWidth = 8; ctx.setLineDash([22, 14]); ctx.stroke(); ctx.restore();
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
  // ---------- scenes ----------
  const ORDER = [['eye', 0], ['fan', 3.95], ['menu', 8.3], ['slit', 15.05], ['blind', 22.55], ['glare', 28.1], ['weird', 31.4], ['roll', 36.1], ['you', 43.0], ['end', 45.65]];
  const WIPE = 0.5;
  const SC = {};
  SC.eye = (ctx, t) => {
    const s = ST(t);
    ctx.save(); cam(ctx, t, 0, 3.95, 1.12, 1.0, 540, 1000); drawBG(ctx, 'face');
    // the pupil snaps from a dot into a long rectangle on "rectangle"
    const m = s < T('p1', 'rectangle') - 0.1 ? 0.15 : H.ease.back(ph(s, T('p1', 'rectangle') - 0.1, T('p1', 'pupils')));
    bigEye(ctx, 540, 1000, 330, { morph: H.clamp(m, 0, 1.15), mark: true });
    ctx.restore(); ctxRef = ctx;
    tl(t, 'RECTANGLE PUPILS', 540, TOP, 96, T('p1', 'rectangle'), { bg: PAL.black, icon: PAL.yellow });
    tl(t, '320°', 540, BOT, 150, T('p1', 'n320'), { bg: PAL.yellow, fg: PAL.black });
  };
  SC.fan = (ctx, t) => {
    const s = ST(t), t0 = 3.95;
    ctx.save(); cam(ctx, t, t0, 8.3, 1.0, 1.06, 540, 1000); drawBG(ctx, 'desk');
    const c = 46, x0 = 540 - 4.5 * c, y0 = 820, ox = x0 + 4.5 * c, oy = y0 + 2.5 * c;
    // the view sweeps round from the front to almost behind the head
    const sw = s < T('p2', 'almost') ? 0.25 : H.lerp(0.25, 1, EO(s, T('p2', 'almost'), T('p2', 'head') + 0.2));
    viewFan(ctx, ox, oy, 320 * sw, 8, PAL.tyellow);
    if (s >= T('p3', 'why') - 0.1) blindWedge(ctx, ox, oy, 40, 560, EO(s, T('p3', 'why') - 0.1, T('p3', 'why') + 0.3));
    shadowBlob(ctx, ox, y0 + 6.5 * c, 260, 320, 0.3);
    mosaic(ctx, GOAT_TOP, x0, y0, c, { W: FUR, T: TAN, e: AMBER, g: HORN });
    ctx.restore(); ctxRef = ctx;
    tl(t, 'ALMOST BEHIND ITS HEAD', 540, TOP, 72, T('p2', 'behind'), { bg: PAL.blue });
    tl(t, 'WHY RECTANGLES?', 540, BOT, 104, T('p3', 'why'), { bg: PAL.red });
  };
  SC.menu = (ctx, t) => {
    const s = ST(t), t0 = 8.3;
    ctx.save(); cam(ctx, t, t0, 15.05, 1.0, 0.94, 540, 1250); drawBG(ctx, 'menu');
    // a little hill of green bricks with the goat on top
    brick(ctx, 280, 1460, 6, 2, PAL.green, { u: 86, h: 1.0 }); brick(ctx, 380, 1374, 4, 2, PAL.lime, { u: 86, h: 0.8 });
    goat(ctx, 560, 1305, 2.2, { t, roll: true });
    // predators creep in from both sides, stepping on twos
    const tw = T('p4', 'wolves') - 0.15, tc = T('p4', 'big') - 0.15;
    if (s >= tw) predator(ctx, H.lerp(-260, 150, EO(s, tw, tw + 1.4)), 1640, 2.0, { t, kind: 'wolf', walk: s < tw + 1.4 });
    if (s >= tc) predator(ctx, H.lerp(1340, 930, EO(s, tc, tc + 1.4)), 1700, 2.0, { t, kind: 'cat', flip: true, walk: s < tc + 1.4 });
    // danger arrows from every side on "almost any direction"
    const dirs = [[-2.6, 0], [-1.9, 0.1], [-0.55, 0.2], [0.45, 0.3], [1.35, 0.4], [2.5, 0.5]];
    dirs.forEach(([a, d], i) => { const k = popK(t, T('p5', 'almost') + d * 1.4); if (k <= 0) return; const R = 330, tx = 600 + Math.sin(a) * 240, ty = 1180 - Math.cos(a) * 190; arrow(ctx, tx, ty, a - Math.PI / 2 + Math.PI, R * 0.6, PAL.red, k); });
    ctx.restore(); ctxRef = ctx;
    tl(t, 'ON THE MENU', 540, TOP, 104, T('p4', 'menu'), { bg: PAL.red });
    tl(t, 'DANGER FROM ANY SIDE', 540, 520, 72, T('p5', 'danger'), { bg: PAL.white, fg: PAL.red });
  };
  SC.slit = (ctx, t) => {
    const s = ST(t), t0 = 15.05;
    ctx.save(); cam(ctx, t, t0, 22.55, 1.0, 1.05, 540, 1300); drawBG(ctx, 'slit');
    // ground scene: a small goat and its view band hugging the desk
    const gy = 1420, ex = 600, ey = gy - 120;
    const wide = s < T('p6', 'stretches') ? 0.15 : EO(s, T('p6', 'stretches'), T('p6', 'wide') + 0.2);
    const low = EO(s, T('p7', 'ground') - 0.1, T('p7', 'ground') + 0.3);
    const halfW = H.lerp(80, 620, wide), bandH = H.lerp(150, 90, low), by = H.lerp(ey - 40, gy - 50, low);
    for (let x = ex - halfW; x < ex + halfW; x += 54) for (let y = by - bandH / 2; y < by + bandH / 2; y += 50) { ctx.globalAlpha = 0.45 * (1 - Math.abs(x - ex) / (halfW + 60)); brick(ctx, x, y + 25, 1, 1, PAL.tyellow, { u: 50, plate: true, d: 14 }); }
    ctx.globalAlpha = 1;
    // a predator sneaking along the ground, caught inside the band
    const tp = T('p8', 'predators') - 0.1;
    if (s >= tp) predator(ctx, H.lerp(-120, 130, EO(s, tp, T('p8', 'up'))), gy + 10, 1.25, { t, kind: 'wolf', walk: s < T('p8', 'up') });
    goat(ctx, 560, gy + 30, 1.25, { t });
    if (s >= T('p8', 'sneak')) { const k = popK(t, T('p8', 'sneak')); ctx.save(); ctx.translate(250, 1170); ctx.scale(k, k); topStud(ctx, 0, 0, 34, PAL.red); ctx.fillStyle = '#fff'; ctx.font = '700 48px "Fredoka"'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('!', 0, 2); ctx.restore(); }
    // the loupe: a grey round frame showing the pupil turning from round to a slit
    const m = s < T('p6', 'slit') - 0.1 ? 0 : H.clamp(H.ease.back(ph(s, T('p6', 'slit') - 0.1, T('p6', 'slit') + 0.3)), 0, 1.1);
    ctx.save(); ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.beginPath(); ctx.arc(552, 762, 300, 0, 7); ctx.fill();
    ctx.fillStyle = PAL.dgrey; ctx.beginPath(); ctx.arc(540, 750, 300, 0, 7); ctx.fill(); ctx.restore();
    for (let i = 0; i < 18; i++) { const a = i / 18 * 6.283; topStud(ctx, 540 + Math.cos(a) * 272, 750 + Math.sin(a) * 272, 16, PAL.grey); }
    bigEye(ctx, 540, 750, 190, { morph: m, socket: FUR });
    ctx.restore(); ctxRef = ctx;
    tl(t, 'A LONG SIDEWAYS SLIT', 540, TOP, 80, T('p6', 'slit'), { bg: PAL.black });
    tl(t, 'WIDE VIEW ↔', 540, 1140, 76, T('p6', 'wide'), { bg: PAL.yellow, fg: PAL.black, end: T('p7', 'ground') });
    tl(t, 'ALONG THE GROUND', 540, BOT + 40, 88, T('p7', 'ground'), { bg: PAL.green });
  };
  SC.blind = (ctx, t) => {
    const s = ST(t), t0 = 22.55;
    ctx.save(); cam(ctx, t, t0, 28.1, 1.06, 1.0, 540, 1050); drawBG(ctx, 'mat');
    const c = 50, x0 = 540 - 4.5 * c, y0 = 760, ox = x0 + 4.5 * c, oy = y0 + 2.5 * c;
    viewFan(ctx, ox, oy, 320, 9, PAL.tyellow, { alpha: 0.65 });
    const tb = T('p10', 'blind') - 0.1;
    if (s >= tb) blindWedge(ctx, ox, oy, 40, 640, EO(s, tb, tb + 0.4));
    shadowBlob(ctx, ox, y0 + 6.5 * c, 280, 340, 0.3);
    mosaic(ctx, GOAT_TOP, x0, y0, c, { W: FUR, T: TAN, e: AMBER, g: HORN });
    // the side eyes pop on "eyes on the sides"
    const k = popK(t, T('p9', 'sides'));
    if (k > 0) [[2, 2], [6, 2]].forEach(([i, j], n) => { const x = x0 + (i + 0.5) * c, y = y0 + (j + 0.5) * c; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.strokeStyle = PAL.red; ctx.lineWidth = 8; ctx.beginPath(); ctx.arc(0, 0, 46, 0, 7); ctx.stroke(); ctx.restore(); arrow(ctx, x + (n ? 60 : -60), y, n ? Math.PI : 0, 110, PAL.red, k); });
    ctx.restore(); ctxRef = ctx;
    tl(t, 'EYES ON THE SIDES', 540, TOP, 92, T('p9', 'eyes'), { bg: PAL.blue });
    tl(t, 'TINY BLIND SPOT', 540, BOT + 60, 96, T('p10', 'blind'), { bg: PAL.black, icon: PAL.red });
  };
  SC.glare = (ctx, t) => {
    const s = ST(t), t0 = 28.1;
    ctx.save(); cam(ctx, t, t0, 31.4, 1.0, 1.06, 540, 1100); drawBG(ctx, 'sky');
    mosaic(ctx, SUN, 700, 330, 46, { X: PAL.yellow });
    const sx = 860, sy = 490, ex = 470, ey = 1180, R = 250;
    // rays of translucent plates fall from the sun and stop on the iris above the slit (stepped)
    const tg = T('p11', 'glare') - 0.3;
    if (s >= tg) for (let i = 0; i < 7; i++) {
      const tx = ex - 140 + i * 50, ty = ey - R * 0.75, dx = tx - sx, dy = ty - sy, L = Math.hypot(dx, dy), a = Math.atan2(dy, dx);
      const reach = H.clamp((s - tg - i * 0.04) * 1600, 0, L);
      for (let d = 60; d < reach; d += 56) { ctx.save(); ctx.translate(sx + Math.cos(a) * d, sy + Math.sin(a) * d); ctx.rotate(a); ctx.globalAlpha = 0.55; ctx.fillStyle = PAL.torange; rr(ctx, -24, -14, 48, 28, 5); ctx.fill(); ctx.restore(); }
    }
    ctx.globalAlpha = 1;
    bigEye(ctx, ex, ey, R, { morph: 1, socket: FUR, mark: true });
    if (s >= T('p11', 'blocks')) { const k = popK(t, T('p11', 'blocks')); ctx.save(); ctx.translate(ex + 20, ey - R * 0.95); ctx.scale(k, k); ctx.rotate(0.785); brick(ctx, -110, 20, 8, 1, PAL.red, { u: 28, plate: true }); ctx.rotate(-1.57); brick(ctx, -110, 20, 8, 1, PAL.red, { u: 28, plate: true }); ctx.restore(); }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'BLOCKS SKY GLARE', 540, BOT + 40, 92, T('p11', 'blocks'), { bg: PAL.orange, fg: PAL.black });
  };
  SC.weird = (ctx, t) => {
    const s = ST(t), t0 = 31.4;
    ctx.save(); cam(ctx, t, t0, 36.1, 1.0, 1.1, 640, 1300); drawBG(ctx, 'meadow');
    const hd = s < T('p13', 'drops') - 0.05 ? 0 : EO(s, T('p13', 'drops') - 0.05, T('p13', 'head') + 0.25);
    goat(ctx, 430, 1460, 3.1, { t, head: hd, roll: true });
    for (let i = 0; i < 6; i++) grass(ctx, 120 + i * 160 + (i % 2) * 40, 1540 + (i % 3) * 50, 4, 1.4);
    ctx.restore(); ctxRef = ctx;
    tl(t, 'NOW THE WEIRD PART', 540, TOP, 88, T('p12', 'weird'), { bg: PAL.yellow, fg: PAL.black });
    tl(t, 'HEAD DOWN TO GRAZE', 540, 520, 76, T('p13', 'drops'), { bg: PAL.green });
  };
  SC.roll = (ctx, t) => {
    const s = ST(t), t0 = 36.1;
    const head = 0.87; // ~50 degrees, the head is down
    // the pupil starts turned with the head, then rolls back to level on "roll the other way"
    const back = s < T('p15', 'roll') - 0.05 ? 0 : EO(s, T('p15', 'roll') - 0.05, T('p15', 'way') + 0.2);
    ctx.save(); cam(ctx, t, t0, 43.0, 1.0, 1.05, 540, 1000);
    ctx.save(); ctx.translate(540, 1000); ctx.rotate(head); ctx.scale(2.1, 2.1); ctx.translate(-540, -1000); drawBG(ctx, 'face'); ctx.restore();
    // the horizon: a row of green plates the pupil lines up with
    const lv = popK(t, T('p17', 'level'));
    if (lv > 0) for (let x = -40; x < W + 40; x += 64) brick(ctx, x, 1000 + 18, 1, 1, PAL.green, { u: 60, plate: true, d: 12, alpha: 0.9 });
    bigEye(ctx, 540, 1000, 300, { morph: 1, rot: head * (1 - back), socketRot: head, mark: true });
    // the angle: an arc of yellow studs between where the head points and level
    if (s >= T('p16', 'n50') - 0.1) { const k = EO(s, T('p16', 'n50') - 0.1, T('p16', 'degrees') + 0.2); for (let i = 0; i <= 8 * k; i++) { const a = head * i / 8; topStud(ctx, 540 + Math.cos(a) * 460, 1000 + Math.sin(a) * 460, 18, PAL.yellow); } }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'EYEBALLS ROLL BACK', 540, TOP, 88, T('p15', 'eyeballs'), { bg: PAL.blue });
    tl(t, '≈ 50° EACH EYE', 540, BOT, 104, T('p16', 'n50'), { bg: PAL.yellow, fg: PAL.black, end: T('p17', 'level') });
    tl(t, 'LEVEL WITH THE HORIZON', 540, BOT, 72, T('p17', 'level'), { bg: PAL.green });
  };
  SC.you = (ctx, t) => {
    const s = ST(t), t0 = 43.0;
    ctx.save(); cam(ctx, t, t0, 45.65, 1.0, 1.04, 540, 1400); drawBG(ctx, 'chart');
    // a brick bar chart: the goat's tower snaps up fast, yours is one plate
    const g0 = t0 + 0.1;
    for (let i = 0; i < 10; i++) { const sn = snap(t, g0 + i * 0.12, 220); if (sn) brick(ctx, 600, 1540 - i * 86 + sn.dy, 3, 2, i % 2 ? AMBERL : AMBER, { u: 72, h: 1.2 }); }
    const sy = snap(t, T('p18', 'few'), 220); if (sy) brick(ctx, 200, 1540 + sy.dy, 3, 2, PAL.blue, { u: 72, plate: true });
    ctx.restore(); ctxRef = ctx;
    tl(t, 'GOAT ≈ 50°', 816, 520, 72, g0 + 0.2, { bg: AMBER, fg: PAL.black });
    tl(t, 'YOU: A FEW°', 330, 1300, 72, T('p18', 'few'), { bg: PAL.blue });
  };
  SC.end = (ctx, t) => {
    const s = ST(t), t0 = 45.65;
    ctx.save(); cam(ctx, t, t0, DURATION, 1.0, 1.05, 540, 1000); drawBG(ctx, 'face');
    const a = snap(t, T('p19', 'round'), 300), b = snap(t, T('p20', 'rectangles'), 300);
    if (a) bigEye(ctx, 300, 980 + a.dy, 190, { morph: 0, iris: '#3b6fb6', irisL: '#7fb0e8' });
    if (b) bigEye(ctx, 780, 980 + b.dy, 190, { morph: 1, mark: true });
    if (s >= T('p19', 'swap')) { const k = popK(t, T('p19', 'swap')); arrow(ctx, 610, 1290, 0, 170, PAL.red, k); arrow(ctx, 470, 1380, Math.PI, 170, PAL.red, k); }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'SWAP YOUR PUPILS?', 540, TOP, 92, T('p19', 'swap'), { bg: PAL.red, icon: PAL.yellow });
    tl(t, 'ROUND or RECTANGLE? ↓', 540, BOT, 76, T('p20', 'rectangles'), { bg: PAL.black });
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

  // ---------- sound: brick clicks, clacks on wood, whooshes ----------
  function scoreSound(k) {
    const D = DURATION;
    const click = (t, g = 0.8, p = 0, minor = false) => { k.play('click', t, { f: 2900, gain: g, pan: p, minor }); k.play('tick', t + 0.004, { f: 4600, gain: g * 0.6, pan: p, minor }); };
    const clack = (t, g = 0.6, p = 0) => k.play('tock', t, { f: 620, gain: g, pan: p, minor: true });
    k.bed('room', 0, D, { gain: 0.18 });
    for (let j = 1; j < ORDER.length; j++) { const c = ORDER[j][1]; k.play('whoosh', c - 0.28, { dur: 0.5, gain: 0.6, top: 2200 }); clack(c + 0.22, 0.55); }
    click(T('p1', 'rectangle')); k.play('ding', T('p1', 'pupils'), { f: 'E5', gain: 0.25 }); click(T('p1', 'n320'));
    k.play('riser', T('p2', 'almost') - 0.1, { dur: 1.9, gain: 0.2, minor: true }); click(T('p2', 'behind'), 0.6); click(T('p3', 'why'), 0.9);
    click(T('p4', 'menu')); for (let x = T('p4', 'wolves') - 0.15; x < T('p4', 'wolves') + 1.2; x += 1 / 6) k.play('tick', x, { f: 1500, gain: 0.25, minor: true });
    for (let x = T('p4', 'big') - 0.15; x < T('p4', 'big') + 1.2; x += 1 / 6) k.play('tick', x, { f: 1300, gain: 0.25, pan: 0.4, minor: true });
    click(T('p5', 'danger')); for (let i = 0; i < 6; i++) click(T('p5', 'almost') + [0, 0.1, 0.2, 0.3, 0.4, 0.5][i] * 1.4, 0.45, i % 2 ? 0.4 : -0.4, true);
    click(T('p6', 'slit')); k.play('swish', T('p6', 'stretches'), { gain: 0.35 }); click(T('p6', 'wide'), 0.6); click(T('p7', 'ground'));
    k.play('error', T('p8', 'sneak'), { f: 'A3', gain: 0.3 });
    click(T('p9', 'eyes')); click(T('p9', 'sides'), 0.7); k.play('impact', T('p10', 'blind'), { gain: 0.3 }); click(T('p10', 'blind'));
    k.noise(T('p11', 'glare') - 0.3, { dur: 1.4, color: 'pink', filter: 'bandpass', f: [[0, 2500], [1.4, 900]], gain: 0.1, a: 0.1, minor: true }); click(T('p11', 'blocks'));
    k.play('success', T('p12', 'weird'), { f: 'C6', gain: 0.25 }); click(T('p12', 'weird'));
    for (let i = 0; i < 4; i++) click(T('p13', 'drops') + i * 0.15, 0.4, 0.2, true); clack(T('p14', 'grass'), 0.5);
    click(T('p15', 'eyeballs')); k.play('swish', T('p15', 'roll'), { gain: 0.4 }); for (let i = 0; i < 5; i++) click(T('p15', 'roll') + i * 0.18, 0.4, -0.2, true);
    click(T('p16', 'n50')); k.play('ding', T('p17', 'level'), { f: 'G5', gain: 0.25 }); click(T('p17', 'level'));
    for (let i = 0; i < 10; i++) clack(43.1 + i * 0.12, 0.4, 0.3); click(T('p18', 'few'), 0.8, -0.3);
    click(T('p19', 'round'), 0.8, -0.4); click(T('p19', 'swap')); click(T('p20', 'rectangles'), 0.8, 0.4); k.play('ding', T('p20', 'rectangles') + 0.1, { f: 'G5', gain: 0.3 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
