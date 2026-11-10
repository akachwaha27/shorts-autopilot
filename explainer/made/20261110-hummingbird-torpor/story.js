// ================= Brick Toy, vertical 1080x1920: "How does a hummingbird not starve overnight?" =================
// Lemo-Opuscar "Brick Toy" style (MIT) drawn in Canvas 2D for this repo's harness. Unattended run: no storyboard step.
(function () {
  const W = 1080, HH = 1920;
  // ---------- BEATS: from phrases.json (Kokoro voiceover) ----------
  const BEATS = [
    { id: 'p1', s: 0.25, e: 2.57, w: { hummingbirds: 0.25, almost: 1.02, shut: 1.41, down: 1.67, night: 2.25 } },
    { id: 'p2', s: 3.0, e: 4.08, w: { you: 3.19, never: 3.38, notice: 3.7 } },
    { id: 'p3', s: 4.49, e: 7.63, w: { why: 4.49, heart: 5.09, drop: 5.42, twelve: 5.96, hundred: 6.36, beats: 6.83, fifty: 7.3 } },
    { id: 'p4', s: 8.11, e: 10.73, w: { tiny: 8.55, engine: 8.9, burns: 9.42, fuel: 9.86, fast: 10.38 } },
    { id: 'p5', s: 10.88, e: 13.67, w: { sip: 11.34, three: 11.53, times: 11.85, their: 12.18, weight: 12.5, nectar: 13.02, day: 13.47 } },
    { id: 'p6', s: 14.15, e: 15.77, w: { night: 14.48, no: 15.23, nectar: 15.37 } },
    { id: 'p7', s: 16.14, e: 18.55, w: { long: 16.2, night: 16.47, food: 17.28, starve: 17.88 } },
    { id: 'p8', s: 18.93, e: 20.47, w: { drop: 19.39, torpor: 20.01 } },
    { id: 'p9', s: 20.89, e: 23.51, w: { body: 21.22, cools: 21.48, hundred: 22.14, five: 22.79, degrees: 23.05 } },
    { id: 'p10', s: 23.61, e: 24.71, w: { almost: 23.78, fifty: 24.29 } },
    { id: 'p11', s: 25.12, e: 27.61, w: { heartbeat: 25.43, crashes: 25.97, fifty: 26.89, minute: 27.25 } },
    { id: 'p12', s: 28.01, e: 31.26, w: { hang: 28.73, upside: 29.09, down: 29.63, stiff: 29.99, statue: 30.72 } },
    { id: 'p13', s: 31.74, e: 35.39, w: { andes: 31.94, species: 32.27, chills: 32.73, thirtyeight: 33.53, fahrenheit: 34.72 } },
    { id: 'p14', s: 35.93, e: 37.29, w: { barely: 35.93, above: 36.36, freezing: 36.72 } },
    { id: 'p15', s: 37.72, e: 41.47, w: { slows: 37.89, metabolism: 38.72, ninetyfive: 40.05, percent: 40.88 } },
    { id: 'p16', s: 41.89, e: 44.57, w: { sunrise: 42.03, shiver: 42.83, flight: 43.62, muscles: 44.06 } },
    { id: 'p17', s: 44.88, e: 46.52, w: { warm: 45.09, about: 45.73, hour: 46.23 } },
    { id: 'p18', s: 46.97, e: 48.5, w: { off: 47.48, breakfast: 47.84 } },
    { id: 'p19', s: 48.91, e: 52.56, w: { you: 49.42, rather: 49.64, shut: 50.08, night: 51.03, hummingbird: 51.76 } },
    { id: 'p20', s: 52.69, e: 54.84, w: { or: 52.69, eat: 52.82, three: 53.02, weight: 53.93, day: 54.64 } },
  ];
  const B = Object.fromEntries(BEATS.map((b) => [b.id, b]));
  const T = (id, w) => B[id].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;

  // scenes: [name, start]
  const ORDER = [['hook', 0], ['heart', 4.3], ['fuel', 7.92], ['night', 13.95], ['torpor', 18.75], ['asleep', 24.93], ['andes', 31.55], ['meta', 37.55], ['dawn', 41.7], ['end', 48.72]];
  const WIPE = 0.5;

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

  // ---------- the brick-built hummingbird ----------
  // x,y = point between the feet; s = scale; o: {t, hover, sleep, upside, shiver, rot}
  function bird(ctx, x, y, s, o = {}) {
    const u = 34 * s, t = o.t || 0, f = Math.floor(ST(t) * 12);
    ctx.save(); ctx.translate(x, y);
    if (o.shiver) ctx.translate((f % 2 ? 1 : -1) * 5 * o.shiver, (f % 3 - 1) * 2 * o.shiver);
    if (o.rot) ctx.rotate(o.rot);
    if (o.flip) ctx.scale(-1, 1);
    // feet (black plates)
    if (!o.hover) { brick(ctx, -0.9 * u, 0, 1, 1, PAL.black, { u: u * 0.55, plate: true }); brick(ctx, 0.2 * u, 0, 1, 1, PAL.black, { u: u * 0.55, plate: true }); }
    const by = o.hover ? 0 : -0.25 * u;
    // tail: dark green wedge plates
    ctx.fillStyle = shade(PAL.dgreen, 0); poly(ctx, [-1.6 * u, by - 0.9 * u, -3.1 * u, by - 0.2 * u, -3.0 * u, by + 0.35 * u, -1.6 * u, by - 0.2 * u]); ctx.fill();
    ctx.fillStyle = shade(PAL.dgreen, 0.25); poly(ctx, [-1.6 * u, by - 0.9 * u, -3.1 * u, by - 0.2 * u, -3.0 * u, by - 0.05 * u]); ctx.fill();
    // far wing (behind)
    const flapA = o.sleep ? 0.15 : [-1.15, -0.35, 0.45, -0.35][f % 4];
    const wing = (dxp, alpha, a) => { ctx.save(); ctx.translate(-0.4 * u + dxp, by - 1.25 * u); ctx.rotate(a); ctx.globalAlpha *= alpha; brick(ctx, -2.6 * u, 0.1 * u, 3, 1, PAL.tblue, { u: u * 0.9, plate: true }); ctx.restore(); };
    wing(0.5 * u, 0.55, flapA + 0.25);
    // body: green 1x3 brick, white belly plate, red throat plate
    brick(ctx, -1.7 * u, by, 3, 2, PAL.green, { u });
    brick(ctx, -1.2 * u, by + 0.02 * u, 2, 1, PAL.white, { u: u * 0.9, plate: true, tile: true });
    brick(ctx, 0.55 * u, by - 0.35 * u, 1, 1, PAL.red, { u: u * 0.75, plate: true, tile: true });
    // head: round brick
    roundBrick(ctx, 0.85 * u, by - 1.15 * u, 0.62 * u, 0.95 * u, PAL.green);
    // beak: a long grey bar
    ctx.fillStyle = PAL.dgrey; rr(ctx, 1.35 * u, by - 1.62 * u, 2.3 * u, 0.2 * u, 0.08 * u); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.fillRect(1.4 * u, by - 1.6 * u, 2.1 * u, 0.05 * u);
    // eye
    if (o.sleep) { ctx.strokeStyle = PAL.black; ctx.lineWidth = 0.12 * u; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(1.0 * u, by - 1.62 * u, 0.18 * u, 0.2, Math.PI - 0.2); ctx.stroke(); }
    else { ctx.fillStyle = PAL.black; ctx.beginPath(); ctx.arc(1.02 * u, by - 1.6 * u, 0.2 * u, 0, 7); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(1.08 * u, by - 1.67 * u, 0.07 * u, 0, 7); ctx.fill(); }
    // near wing
    wing(0, 0.8, flapA);
    if (o.frost) { ctx.globalAlpha = o.frost; ctx.fillStyle = 'rgba(225,245,255,0.55)'; rr(ctx, -1.8 * u, by - 2.2 * u, 3.3 * u, 2.3 * u, 0.5 * u); ctx.fill(); ctx.globalAlpha = 1; }
    ctx.restore();
  }
  // a flower built from bricks: stem of round bricks, petals of plates, nectar cup
  function flower(ctx, x, y, s, o = {}) {
    const u = 34 * s;
    shadowBlob(ctx, x + 10, y + 4, 2.4 * u, 0.6 * u);
    brick(ctx, x - 1.5 * u, y + 0.4 * u, 3, 3, PAL.green, { u, plate: true });
    for (let i = 0; i < 5; i++) roundBrick(ctx, x, y - i * 0.9 * u, 0.4 * u, 0.9 * u, PAL.lime, { noStud: i < 4 });
    const top = y - 4.5 * u;
    ctx.save(); ctx.translate(x, top); ctx.rotate(-0.15);
    [[-1.7, -0.2], [0.5, -0.2], [-0.6, -1.0]].forEach(([px, py]) => brick(ctx, px * u, py * u, 2, 1, o.col || PAL.pink, { u: u * 0.8, plate: true }));
    roundBrick(ctx, 0, 0.2 * u, 0.55 * u, 0.6 * u, PAL.yellow, { noStud: true });
    if (o.nectar) roundBrick(ctx, 0, -0.2 * u, 0.4 * u, 0.35 * u * o.nectar, PAL.torange, { noStud: true, alpha: 0.85 });
    ctx.restore();
    return { x, y: top };
  }
  // stack column of round bricks: a thermometer / meter
  function column(ctx, x, y, n, filled, colOn, colOff, u) {
    shadowBlob(ctx, x + 10, y + 6, u * 1.3, u * 0.35);
    for (let i = 0; i < n; i++) { const on = i < filled; roundBrick(ctx, x, y - i * u * 0.95, u * 0.55, u * 0.95, on ? colOn : colOff, { noStud: i < n - 1 && i < filled - 1, alpha: on ? 1 : 0.55 }); }
  }

  // ---------- real-world sets (cached, blurred props, wood) ----------
  const BG = {};
  function bgSet(name) {
    if (BG[name]) return BG[name];
    const c = H.layer(W, HH), g = c.getContext('2d'), r = H.rng(name), nz = H.makeNoise(name.length * 7 + 3);
    const S = {
      hook: { wall: ['#e9eef0', '#cdd7da'], top: '#c8955f', grain: '#8f5a2e', props: 'plant', yH: 1180 },
      heart: { wall: ['#dfe7e2', '#c4cfc8'], top: '#2f7a5a', grain: null, props: 'mug', yH: 1050, mat: true },
      fuel: { wall: ['#f3eadf', '#e1d2bf'], top: '#dfe6ee', grain: null, props: 'kitchen', yH: 1160, cloth: true },
      night: { wall: ['#18223f', '#0d1427'], top: '#5a3f2b', grain: '#2e1e12', props: 'window', yH: 1250, dark: true },
      torpor: { wall: ['#1d2333', '#121722'], top: '#6b4a32', grain: '#3a2716', props: 'lamp', yH: 1220, dark: true },
      asleep: { wall: ['#2a3248', '#161b2b'], top: '#7a6a5a', grain: '#4a3d30', props: 'books', yH: 1240, dark: true },
      andes: { wall: ['#eef3f7', '#d3dde5'], top: '#f4f4f2', grain: null, props: 'cool', yH: 1200 },
      meta: { wall: ['#dfe4ea', '#c3ccd6'], top: '#2c5d8f', grain: null, props: 'mug2', yH: 1100, mat: true },
      dawn: { wall: ['#ffd9b0', '#f3a978'], top: '#c08a58', grain: '#7d4f2b', props: 'dawn', yH: 1230 },
      end: { wall: ['#e9eef0', '#cdd7da'], top: '#c8955f', grain: '#8f5a2e', props: 'none', yH: 1240 },
    }[name];
    const gw = g.createLinearGradient(0, 0, 0, S.yH); gw.addColorStop(0, S.wall[0]); gw.addColorStop(1, S.wall[1]); g.fillStyle = gw; g.fillRect(0, 0, W, S.yH);
    // blurred real props behind the set (out of focus: macro lens)
    g.save(); g.filter = 'blur(26px)';
    const P = S.props;
    if (P === 'plant') { g.fillStyle = '#a7c4cf'; g.fillRect(620, 120, 380, 620); g.fillStyle = '#f7fbff'; g.fillRect(650, 150, 150, 260); g.fillRect(830, 150, 140, 260); g.fillRect(650, 440, 150, 260); g.fillRect(830, 440, 140, 260);
      g.fillStyle = '#b5653a'; g.fillRect(80, 860, 260, 320); g.fillStyle = '#3f7d3a'; for (let i = 0; i < 9; i++) { g.beginPath(); g.ellipse(210 + r.range(-160, 160), 700 + r.range(-200, 120), 70, 150, r.range(-1, 1), 0, 7); g.fill(); } }
    if (P === 'mug' || P === 'mug2') { g.fillStyle = P === 'mug' ? '#f1f1ee' : '#e9573f'; g.fillRect(760, 620, 260, 330); g.beginPath(); g.ellipse(890, 620, 130, 40, 0, 0, 7); g.fill(); g.fillStyle = '#3b2a20'; g.beginPath(); g.ellipse(890, 620, 110, 30, 0, 0, 7); g.fill();
      g.fillStyle = '#8a7b6a'; g.fillRect(40, 760, 420, 40); g.fillStyle = '#e9c46a'; g.fillRect(60, 700, 360, 60); }
    if (P === 'kitchen') { g.fillStyle = '#ffffff'; g.fillRect(80, 520, 220, 480); g.fillStyle = '#e7b94b'; g.fillRect(100, 700, 180, 300); g.fillStyle = '#c75b39'; g.beginPath(); g.arc(840, 900, 150, 0, 7); g.fill(); g.fillStyle = '#7cae4f'; g.beginPath(); g.arc(700, 980, 90, 0, 7); g.fill(); g.fillStyle = '#d9cbb5'; g.fillRect(0, 300, W, 40); }
    if (P === 'window') { g.fillStyle = '#2b3d6b'; g.fillRect(140, 140, 800, 900); g.fillStyle = '#ffcf6b'; for (let i = 0; i < 22; i++) { g.globalAlpha = r.range(0.3, 0.9); g.beginPath(); g.arc(r.range(160, 920), r.range(700, 1020), r.range(10, 30), 0, 7); g.fill(); } g.globalAlpha = 1; }
    if (P === 'lamp') { const lg = g.createRadialGradient(830, 330, 10, 830, 330, 520); lg.addColorStop(0, 'rgba(255,214,150,0.95)'); lg.addColorStop(1, 'rgba(255,214,150,0)'); g.fillStyle = lg; g.fillRect(0, 0, W, S.yH); g.fillStyle = '#2b2b2b'; g.fillRect(820, 330, 24, 900); g.fillStyle = '#4c5a6a'; g.fillRect(60, 600, 300, 600); }
    if (P === 'books') { const cols = ['#7b2d26', '#2f4b6e', '#c79a3a', '#3d6b4a', '#6b3f6e', '#9a4a2a']; for (let i = 0; i < 12; i++) { g.fillStyle = cols[i % cols.length]; g.fillRect(40 + i * 85, 520 + r.range(0, 120), 76, 700); } }
    if (P === 'cool') { g.fillStyle = '#ffffff'; g.fillRect(560, 100, 460, 700); g.fillStyle = '#9fb7c9'; g.fillRect(60, 760, 320, 440); g.fillStyle = '#c94f4f'; g.fillRect(90, 700, 260, 60); }
    if (P === 'dawn') { g.fillStyle = '#ffe9c9'; g.fillRect(120, 120, 840, 900); g.fillStyle = '#f6b06b'; g.fillRect(120, 700, 840, 320); g.fillStyle = '#7d5a4a'; g.fillRect(100, 1000, 880, 60); }
    g.restore();
    // table surface with perspective wood grain
    const gt = g.createLinearGradient(0, S.yH, 0, HH); gt.addColorStop(0, shade(S.top, -0.12)); gt.addColorStop(0.35, S.top); gt.addColorStop(1, shade(S.top, 0.06)); g.fillStyle = gt; g.fillRect(0, S.yH, W, HH - S.yH);
    if (S.grain) { g.save(); g.filter = 'blur(1.2px)'; for (let i = 0; i < 90; i++) { const v = i / 90, y = S.yH + (HH - S.yH) * Math.pow(v, 1.7); g.strokeStyle = H.rgba(S.grain, 0.08 + 0.12 * r()); g.lineWidth = 1 + v * 3; g.beginPath(); for (let x = 0; x <= W; x += 24) g.lineTo(x, y + nz.n2(x * 0.004, i * 0.7) * (6 + 20 * v)); g.stroke(); } g.restore(); }
    if (S.mat) { g.strokeStyle = 'rgba(255,255,255,0.22)'; g.lineWidth = 2; for (let i = -12; i <= 12; i++) { g.beginPath(); g.moveTo(540 + i * 40, S.yH); g.lineTo(540 + i * 140, HH); g.stroke(); } for (let i = 0; i < 16; i++) { const y = S.yH + (HH - S.yH) * Math.pow(i / 16, 1.6); g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); } }
    if (S.cloth) { g.fillStyle = 'rgba(80,120,190,0.18)'; for (let i = 0; i < 12; i++) { const y0 = S.yH + (HH - S.yH) * Math.pow(i / 12, 1.6), y1 = S.yH + (HH - S.yH) * Math.pow((i + 0.5) / 12, 1.6); g.fillRect(0, y0, W, y1 - y0); } for (let i = -10; i <= 10; i += 2) { g.beginPath(); g.moveTo(540 + i * 50, S.yH); g.lineTo(540 + (i + 1) * 50, S.yH); g.lineTo(540 + (i + 1) * 170, HH); g.lineTo(540 + i * 170, HH); g.closePath(); g.fill(); } }
    // edge of table: soft contact line, then cool grade + vignette
    g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(0, S.yH - 4, W, 8);
    g.fillStyle = S.dark ? 'rgba(20,40,90,0.18)' : 'rgba(120,160,220,0.05)'; g.fillRect(0, 0, W, HH);
    H.vignette(g, W, HH, S.dark ? 0.55 : 0.28, S.dark ? '5,8,20' : '40,30,20');
    BG[name] = c; return c;
  }
  const drawBG = (ctx, name) => ctx.drawImage(bgSet(name), 0, 0);
  // camera: smooth push-in on ones (scale about a point), plus optional shake
  function cam(ctx, t, t0, t1, z0, z1, cx = 540, cy = 1000, shake = 0) {
    const z = H.lerp(z0, z1, EI(t, t0, t1)); ctx.translate(cx, cy); ctx.scale(z, z); ctx.translate(-cx, -cy);
    if (shake) { const r = H.rng(Math.floor(t * 24)); ctx.translate((r() - 0.5) * shake, (r() - 0.5) * shake); }
  }
  const tl = (t, s, x, y, size, t0, o = {}) => { const k = popK(t, t0); if (k > 0 && (o.end == null || t < o.end)) tile(ctxRef, s, x, y, size, Object.assign({}, o, { k })); };
  let ctxRef = null;

  // ---------- scenes ----------
  const SC = {};
  SC.hook = (ctx, t) => {
    ctx.save(); cam(ctx, t, 0, 4.4, 1.0, 1.08, 560, 1100);
    drawBG(ctx, 'hook');
    flower(ctx, 800, 1460, 1.9, { nectar: 1 });
    const land = ST(t) >= T('p2', 'you');
    const s = ST(t), bob = Math.sin(s * 9) * 8;
    if (!land) { const ax = H.lerp(-200, 380, EO(s, 0.0, 1.0)); shadowBlob(ctx, ax, 1480, 150, 26, 0.18); bird(ctx, ax, 1000 + bob, 2.3, { t, hover: true }); }
    else bird(ctx, 400, 1440, 2.1, { t, sleep: ST(t) >= T('p2', 'never') });
    ctx.restore();
    // nightfall overlay
    const n = EO(ST(t), T('p1', 'night') - 0.1, T('p1', 'night') + 0.5);
    if (n > 0) { ctx.fillStyle = `rgba(12,20,52,${0.62 * n})`; ctx.fillRect(0, 0, W, HH); if (n > 0.5) mosaic(ctx, MOON, 790, 230, 26, { X: PAL.tyellow }); }
    ctxRef = ctx;
    tl(t, 'SHUT DOWN', 540, 330, 120, T('p1', 'shut'), { bg: PAL.red, icon: PAL.yellow });
    tl(t, 'EVERY NIGHT', 540, 520, 104, T('p1', 'night'), { bg: PAL.blue });
    if (ST(t) >= T('p2', 'notice')) tl(t, 'z z z', 380, 1080, 64, T('p2', 'notice'), { bg: PAL.white, fg: PAL.black });
  };
  SC.heart = (ctx, t) => {
    const t0 = 4.3, s = ST(t);
    ctx.save(); cam(ctx, t, t0, 7.9, 1.04, 1.0, 540, 900);
    drawBG(ctx, 'heart');
    const fifty = T('p3', 'fifty');
    const period = s < fifty ? 0.17 : 0.9, beat = (s % period) / period < 0.5 ? 1.08 : 1.0;
    const hk = s < T('p3', 'heart') - 0.15 ? 0 : beat * popK(t, T('p3', 'heart'));
    if (hk > 0) { const c = 78; ctx.save(); ctx.translate(540, 930); ctx.scale(hk, hk); mosaic(ctx, HEART, -4.5 * c, -4 * c, c, { X: PAL.red }); ctx.restore(); }
    ctx.restore();
    ctxRef = ctx;
    tl(t, 'WHY?', 540, 330, 120, T('p3', 'why'), { bg: PAL.yellow, fg: PAL.black });
    let num = null;
    if (s >= T('p3', 'twelve') - 0.1 && s < fifty - 0.1) num = Math.round(1200 * EO(s, T('p3', 'twelve') - 0.1, T('p3', 'hundred')) / 10) * 10;
    if (s >= fifty - 0.1) num = 50;
    if (num != null) {
      const k = s >= fifty - 0.1 ? popK(t, fifty) : popK(t, T('p3', 'twelve'));
      tile(ctx, num.toLocaleString('en-US'), 540, 1440, 150, { k, bg: num === 50 ? PAL.blue : PAL.red, w: measure(ctx, '1,200', 150) });
      if (s >= T('p3', 'beats') - 0.1) tile(ctx, 'BEATS / MIN', 540, 1600, 56, { k: popK(t, T('p3', 'beats')), bg: PAL.white, fg: PAL.black });
    }
  };
  SC.fuel = (ctx, t) => {
    const s = ST(t), split = 11.3;
    ctx.save();
    if (t < split) {
      cam(ctx, t, 7.92, split, 1.0, 1.07, 540, 1100); drawBG(ctx, 'fuel');
      const bob = Math.sin(s * 9) * 8;
      shadowBlob(ctx, 330, 1390, 120, 24, 0.2); bird(ctx, 300, 1000 + bob, 2.0, { t, hover: true });
      // battery: stack of yellow bricks draining fast
      const n0 = 6, burnt = s < T('p4', 'burns') - 0.1 ? 0 : Math.min(5, Math.floor((s - T('p4', 'burns') + 0.1) / 0.18));
      const refill = s > T('p4', 'fast') ? Math.min(5, Math.floor((s - T('p4', 'fast')) / 0.14)) : 0;
      const k = popK(t, T('p4', 'engine'));
      if (k > 0) { shadowBlob(ctx, 790, 1400, 150, 28); brick(ctx, 680, 1400, 3, 2, PAL.black, { u: 70, plate: true }); for (let i = 0; i < n0 - burnt + refill; i++) brick(ctx, 690, 1372 - i * 70 * 1.2 * 0.92, 3, 2, i === 0 && burnt >= 5 && !refill ? PAL.red : PAL.yellow, { u: 64 }); }
      // brick flames from the burnt pieces
      if (s > T('p4', 'burns') && s < T('p4', 'fast') + 0.3) { const r = H.rng(Math.floor(s * 12)); for (let i = 0; i < 6; i++) brick(ctx, 700 + r.range(0, 170), 840 - r.range(0, 200), 1, 1, r.chance(0.5) ? PAL.torange : PAL.tyellow, { u: 40, alpha: 0.85 }); }
      ctx.restore(); ctxRef = ctx;
      tl(t, 'TINY ENGINE', 540, 330, 104, T('p4', 'engine'), { bg: PAL.black });
      tl(t, 'BURNS FAST!', 540, 1610, 84, T('p4', 'burns'), { bg: PAL.red });
    } else {
      cam(ctx, t, split, 13.95, 1.0, 1.05, 540, 1100); drawBG(ctx, 'fuel');
      // balance scale built from bricks
      const drops = [T('p5', 'three'), T('p5', 'times'), T('p5', 'their')].filter((x) => s >= x).length;
      const ang = H.lerp(0.18, -0.16, drops / 3) * 1; // + = bird side down
      shadowBlob(ctx, 540, 1430, 300, 40);
      brick(ctx, 400, 1430, 7, 3, PAL.dgrey, { u: 40, plate: true });
      for (let i = 0; i < 6; i++) brick(ctx, 510, 1414 - i * 44, 1, 1, PAL.grey, { u: 44 });
      ctx.save(); ctx.translate(540, 1150); ctx.rotate(ang);
      brick(ctx, -420, 0, 21, 1, PAL.tan, { u: 40, plate: true });
      ctx.restore();
      const pan = (sx) => [540 + Math.cos(ang) * sx, 1150 + Math.sin(ang) * sx];
      const [lx, ly] = pan(-330), [rx, ry] = pan(330);
      ctx.strokeStyle = PAL.dgrey; ctx.lineWidth = 6; [[lx, ly], [rx, ry]].forEach(([x, y]) => { ctx.beginPath(); ctx.moveTo(x - 70, y + 200); ctx.lineTo(x, y); ctx.lineTo(x + 70, y + 200); ctx.stroke(); });
      brick(ctx, lx - 110, ly + 220, 5, 2, PAL.blue, { u: 44, plate: true }); brick(ctx, rx - 110, ry + 220, 5, 2, PAL.blue, { u: 44, plate: true });
      bird(ctx, lx - 10, ly + 200, 1.05, { t });
      for (let i = 0; i < 3; i++) { const sn = snap(t, [T('p5', 'three'), T('p5', 'times'), T('p5', 'their')][i], 300); if (sn) brick(ctx, rx - 70, ry + 200 + sn.dy - i * 0.92 * 1.2 * 46, 3, 2, PAL.torange, { u: 46, alpha: 0.88 }); }
      ctx.restore(); ctxRef = ctx;
      tl(t, '3× ITS WEIGHT', 540, 330, 104, T('p5', 'weight'), { bg: PAL.orange, fg: PAL.black });
      tl(t, 'IN NECTAR, A DAY', 540, 1640, 72, T('p5', 'nectar'), { bg: PAL.black });
    }
  };
  SC.night = (ctx, t) => {
    const s = ST(t);
    ctx.save(); cam(ctx, t, 13.95, 18.75, 1.06, 1.0, 540, 1000); drawBG(ctx, 'night');
    mosaic(ctx, MOON, 640, 520, 38, { X: PAL.tyellow });
    flower(ctx, 800, 1510, 1.8, { nectar: 0 });
    bird(ctx, 420, 1500, 2.1, { t });
    // tiny battery: last brick blinks red at "starve"
    const left = s < T('p7', 'food') ? 2 : 1; const blink = s >= T('p7', 'starve') - 0.1 && Math.floor(s * 6) % 2 === 0;
    const k = popK(t, T('p7', 'long'));
    if (k > 0) { brick(ctx, 120, 1180, 3, 2, PAL.black, { u: 50, plate: true }); for (let i = 0; i < left; i++) brick(ctx, 126, 1160 - i * 55, 3, 2, left === 1 ? (blink ? '#ff3b2f' : PAL.red) : PAL.yellow, { u: 46 }); for (let i = left; i < 5; i++) { ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.setLineDash([8, 8]); ctx.lineWidth = 3; ctx.strokeRect(126, 1160 - (i + 1) * 55, 138, 55); ctx.setLineDash([]); } }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'NO NECTAR', 540, 330, 110, T('p6', 'no'), { bg: PAL.red });
    tl(t, 'EMPTY TANK', 540, 1640, 84, T('p7', 'starve'), { bg: PAL.white, fg: PAL.red });
  };
  SC.torpor = (ctx, t) => {
    const s = ST(t);
    ctx.save(); cam(ctx, t, 18.75, 24.95, 1.0, 1.06, 400, 1150); drawBG(ctx, 'torpor');
    // twig branch: brown bricks
    shadowBlob(ctx, 330, 1460, 260, 30);
    for (let i = 0; i < 4; i++) brick(ctx, 120 + i * 0, 1460 - i * 46, 1, 1, '#583927', { u: 46 });
    brick(ctx, 120, 1276, 9, 1, '#583927', { u: 46, plate: true });
    bird(ctx, 360, 1262, 2.0, { t, sleep: s >= T('p8', 'drop') });
    // thermometer of round bricks
    const n = 10; let filled = 0;
    if (s >= T('p9', 'hundred') - 0.15) filled = 10;
    if (s >= T('p10', 'almost')) filled = Math.max(5, 10 - Math.floor((s - T('p10', 'almost')) / 0.1));
    const k = popK(t, T('p9', 'body'));
    if (k > 0) column(ctx, 820, 1480, n, filled, filled <= 5 ? PAL.blue : PAL.red, PAL.white, 74);
    ctx.restore(); ctxRef = ctx;
    // T O R P O R snapping in letter by letter
    const L = 'TORPOR', t0 = T('p8', 'torpor') - 0.08;
    for (let i = 0; i < L.length; i++) { const k2 = popK(t, t0 + i * 0.07); if (k2 > 0) tile(ctx, L[i], 540 + (i - 2.5) * 148, 330, 112, { k: k2, bg: [PAL.red, PAL.yellow, PAL.blue, PAL.green, PAL.orange, PAL.purple][i], fg: i === 1 ? PAL.black : PAL.white, w: 90 }); }
    if (s >= T('p9', 'hundred') - 0.1 && s < T('p10', 'fifty') - 0.1) tile(ctx, '105°F', 540, 1640, 110, { k: popK(t, T('p9', 'hundred')), bg: PAL.red, w: measure(ctx, '↓ 50°F', 110) });
    if (s >= T('p10', 'fifty') - 0.1) tile(ctx, '↓ 50°F', 540, 1640, 110, { k: popK(t, T('p10', 'fifty')), bg: PAL.blue, w: measure(ctx, '↓ 50°F', 110) });
  };
  SC.asleep = (ctx, t) => {
    const s = ST(t), split = 28.35;
    ctx.save(); drawBG(ctx, 'asleep');
    if (t < split) {
      cam(ctx, t, 24.93, split, 1.0, 1.05, 540, 900);
      const period = 1.15, beat = (s % period) / period < 0.15 ? 1.06 : 1.0, c = 58;
      ctx.save(); ctx.translate(540, 760); ctx.scale(beat, beat); mosaic(ctx, HEART, -4.5 * c, -4 * c, c, { X: PAL.red }); ctx.restore();
      brick(ctx, 290, 1490, 12, 3, PAL.tan, { u: 42, plate: true });
      bird(ctx, 560, 1460, 1.9, { t, sleep: true });
      ctx.restore(); ctxRef = ctx;
      tl(t, 'CRASH!', 540, 330, 112, T('p11', 'crashes'), { bg: PAL.blue });
      tl(t, '50 / MIN', 540, 1640, 120, T('p11', 'fifty'), { bg: PAL.white, fg: PAL.black });
    } else {
      cam(ctx, t, split, 31.55, 1.0, 1.1, 540, 900, s >= T('p12', 'stiff') && s < T('p12', 'stiff') + 0.25 ? 10 : 0);
      // a branch across the top of the set; the bird swings under it on twos
      brick(ctx, 120, 760, 20, 1, '#583927', { u: 42, plate: true });
      for (let i = 0; i < 3; i++) brick(ctx, 880, 1500 - i * 50, 2, 1, '#583927', { u: 50 });
      for (let i = 0; i < 14; i++) brick(ctx, 900, 1340 - i * 42, 1, 1, '#583927', { u: 42, h: 1.0 });
      const rot = Math.PI * EO(s, T('p12', 'hang') - 0.1, T('p12', 'upside'));
      const fr = EO(s, T('p12', 'stiff') - 0.1, T('p12', 'stiff') + 0.4);
      shadowBlob(ctx, 500, 1450, 140, 26, 0.25);
      bird(ctx, 520, 750, 2.1, { t, sleep: true, rot, frost: fr, flip: rot > 1.6 });
      if (fr > 0) { const r = H.rng(Math.floor(s * 6)); for (let i = 0; i < 8; i++) { ctx.globalAlpha = 0.8; mosaic(ctx, ['X'], 300 + r.range(0, 420), 820 + r.range(0, 360), 22, { X: '#e6f7ff' }); } ctx.globalAlpha = 1; }
      ctx.restore(); ctxRef = ctx;
      tl(t, 'UPSIDE DOWN', 540, 330, 104, T('p12', 'upside'), { bg: PAL.yellow, fg: PAL.black });
      tl(t, 'STIFF AS A STATUE', 540, 1640, 76, T('p12', 'stiff'), { bg: PAL.white, fg: PAL.blue });
    }
  };
  SC.andes = (ctx, t) => {
    const s = ST(t);
    ctx.save(); cam(ctx, t, 31.55, 37.55, 1.08, 1.0, 540, 1100); drawBG(ctx, 'andes');
    // brick mountains: stepped stacks with white caps
    const mtn = (cx, base, levels, u, col) => { for (let l = 0; l < levels; l++) { const n = levels - l; brick(ctx, cx - n * u / 2, base - l * u * 1.2, n, 2, l >= levels - 2 ? PAL.white : col, { u }); } };
    mtn(260, 1460, 7, 52, PAL.dgrey); mtn(820, 1480, 6, 52, PAL.grey); mtn(540, 1520, 9, 56, PAL.dgrey);
    const peakY = 1520 - 9 * 56 * 1.2 - 4;
    bird(ctx, 545, peakY + 8, 0.95, { t, sleep: true, frost: EO(s, T('p14', 'freezing') - 0.1, T('p14', 'freezing') + 0.4) * 0.7 });
    // brick snow after "freezing"
    if (s >= T('p14', 'freezing') - 0.1) { for (let i = 0; i < 14; i++) { const r = H.rng(i * 13 + 1), y = (r.range(0, 1400) + (s - T('p14', 'freezing')) * r.range(240, 420)) % 1300 + 200; brick(ctx, r.range(40, 1000), y, 1, 1, PAL.white, { u: 26, plate: true }); } }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'ANDES', 540, 330, 120, T('p13', 'andes'), { bg: PAL.green });
    if (s >= T('p13', 'thirtyeight') - 0.1) tile(ctx, '38°F', 540, 560, 170, { k: popK(t, T('p13', 'thirtyeight')), bg: PAL.blue });
    tl(t, 'BARELY ABOVE', 540, 1500, 84, T('p14', 'barely'), { bg: PAL.white, fg: PAL.black });
    tl(t, 'FREEZING', 540, 1636, 84, T('p14', 'freezing'), { bg: PAL.blue });
  };
  SC.meta = (ctx, t) => {
    const s = ST(t), t95 = T('p15', 'ninetyfive');
    ctx.save(); cam(ctx, t, 37.55, 41.7, 1.0, 1.06, 540, 1200); drawBG(ctx, 'meta');
    shadowBlob(ctx, 560, 1500, 200, 34);
    brick(ctx, 420, 1500, 6, 3, PAL.black, { u: 46, plate: true });
    // a tower of 20 plates: 19 fly off on "ninety-five"
    for (let i = 19; i >= 0; i--) {
      let x = 440, y = 1478 - i * 0.4 * 46 * 0.98;
      if (i > 0 && s >= t95 - 0.1) { const u = ph(s, t95 - 0.1 + (19 - i) * 0.02, t95 + 0.5 + (19 - i) * 0.02), r = H.rng(i); x += (r() < 0.5 ? -1 : 1) * u * r.range(500, 900); y -= u * r.range(200, 700) - u * u * 900; if (u >= 1) continue; }
      brick(ctx, x, y, 5, 2, i === 0 ? PAL.red : PAL.yellow, { u: 46, plate: true });
    }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'METABOLISM', 540, 330, 104, T('p15', 'metabolism'), { bg: PAL.black });
    if (s >= t95 - 0.1) tile(ctx, '−95%', 540, 620, 200, { k: popK(t, t95), bg: PAL.red });
    tl(t, 'UP TO', 540, 1640, 70, T('p15', 'percent'), { bg: PAL.white, fg: PAL.black });
  };
  SC.dawn = (ctx, t) => {
    const s = ST(t), bf = T('p18', 'breakfast');
    ctx.save(); cam(ctx, t, 41.7, 48.75, 1.05, 1.0, 540, 1100); drawBG(ctx, 'dawn');
    const sy = H.lerp(1050, 620, EO(t, T('p16', 'sunrise') - 0.2, T('p16', 'sunrise') + 1.6)); // sun rises on ones (it is light)
    ctx.save(); ctx.beginPath(); ctx.rect(120, 120, 840, 900); ctx.clip(); mosaic(ctx, SUN, 540 - 3.5 * 44, sy, 44, { X: PAL.torange }); ctx.restore();
    brick(ctx, 110, 1500, 9, 2, '#583927', { u: 46, plate: true });
    const fl = s >= T('p18', 'off') - 0.1 ? flower(ctx, 840, 1530, 1.8, { nectar: 1, col: PAL.pink }) : null;
    const shiv = s >= T('p16', 'shiver') - 0.1 && s < T('p18', 'off') ? 1.2 : 0;
    if (s < T('p18', 'off') - 0.1) bird(ctx, 340, 1480, 2.2, { t, sleep: s < T('p16', 'shiver') - 0.1, shiver: shiv });
    else { const u = EO(s, T('p18', 'off') - 0.1, bf); bird(ctx, H.lerp(340, 470, u), H.lerp(1480, 1240, u) + Math.sin(s * 9) * 6, 2.2, { t, hover: true }); }
    // warm-up meter: 6 round bricks filling
    const warm = Math.floor(6 * EO(s, T('p17', 'warm') - 0.1, T('p17', 'hour')) + 1e-6);
    if (s >= T('p17', 'warm') - 0.1 && s < T('p18', 'off')) column(ctx, 880, 1500, 6, warm, PAL.orange, PAL.white, 70);
    if (s >= bf) { const r = H.rng(Math.floor(s * 12)); for (let i = 0; i < 4; i++) brick(ctx, 760 + r.range(0, 140), 900 - r.range(0, 120), 1, 1, PAL.tyellow, { u: 26, plate: true, alpha: 0.9 }); }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'SUNRISE', 540, 330, 112, T('p16', 'sunrise'), { bg: PAL.orange, fg: PAL.black });
    tl(t, 'SHIVER!', 540, 520, 96, T('p16', 'shiver'), { bg: PAL.blue, end: T('p18', 'off') });
    if (s >= T('p17', 'about') - 0.1 && s < T('p18', 'off')) tile(ctx, '≈ 1 HOUR', 540, 1640, 96, { k: popK(t, T('p17', 'hour') - 0.15), bg: PAL.white, fg: PAL.black });
    tl(t, 'BREAKFAST!', 540, 1640, 96, bf, { bg: PAL.green });
  };
  SC.end = (ctx, t) => {
    const s = ST(t);
    ctx.save(); cam(ctx, t, 48.72, DURATION, 1.0, 1.04, 540, 1000); drawBG(ctx, 'end');
    // two builds on the same desk: night side and day side
    const sideL = snap(t, T('p19', 'shut'), 300), sideR = snap(t, T('p20', 'eat'), 300);
    if (sideL) { ctx.save(); ctx.translate(0, sideL.dy); ctx.fillStyle = '#16204a'; rr(ctx, 50, 660, 470, 820, 26); ctx.fill(); mosaic(ctx, MOON, 330, 720, 24, { X: PAL.tyellow }); brick(ctx, 90, 1440, 9, 1, '#583927', { u: 42, plate: true }); bird(ctx, 290, 1420, 1.25, { t, sleep: true }); ctx.restore(); }
    if (sideR) { ctx.save(); ctx.translate(0, sideR.dy); ctx.fillStyle = '#bfe3f2'; rr(ctx, 560, 660, 470, 820, 26); ctx.fill(); mosaic(ctx, SUN, 880, 720, 16, { X: PAL.torange }); bird(ctx, 700, 1220 + Math.sin(s * 9) * 6, 1.05, { t, hover: true });
      for (let i = 0; i < 3; i++) { const sn = snap(t, T('p20', 'three') + i * 0.12, 260); if (sn) brick(ctx, 830, 1450 + sn.dy - i * 0.92 * 1.2 * 48, 3, 2, PAL.torange, { u: 48, alpha: 0.88 }); } ctx.restore(); }
    ctx.restore(); ctxRef = ctx;
    tl(t, 'WHICH ONE?', 540, 330, 110, T('p19', 'you'), { bg: PAL.yellow, fg: PAL.black });
    tl(t, 'SHUT DOWN', 285, 560, 64, T('p19', 'shut'), { bg: PAL.blue });
    tl(t, 'OR', 540, 1070, 96, T('p20', 'or'), { bg: PAL.red });
    tl(t, 'EAT 3×', 795, 560, 64, T('p20', 'eat'), { bg: PAL.orange, fg: PAL.black });
    tl(t, 'TELL ME BELOW ↓', 540, 1620, 72, T('p20', 'day'), { bg: PAL.black });
  };

  // a giant brick slides across the lens to change set
  function brickWipe(ctx, u, col) {
    const x = H.lerp(W + 40, -1500, u), c = 180;
    ctx.save(); ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(x - 30, 0, 1460, HH);
    ctx.fillStyle = shade(col, -0.05); ctx.fillRect(x, 0, 1440, HH);
    for (let j = 0; j < 11; j++) for (let i = 0; i < 8; i++) { const cx = x + 90 + i * c, cy = 90 + j * c; const r = c * 0.32; ctx.fillStyle = 'rgba(0,0,0,0.28)'; ctx.beginPath(); ctx.arc(cx + 8, cy + 10, r, 0, 7); ctx.fill(); const g = ctx.createRadialGradient(cx - r * 0.4, cy - r * 0.4, 4, cx, cy, r); g.addColorStop(0, shade(col, 0.45)); g.addColorStop(1, shade(col, -0.05)); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.fill(); }
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillRect(x, 0, 10, HH); ctx.restore();
  }
  const WIPECOL = [PAL.red, PAL.yellow, PAL.blue, PAL.green, PAL.red, PAL.blue, PAL.yellow, PAL.green, PAL.orange];

  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    ctxRef = ctx;
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1]) i++;
    SC[ORDER[i][0]](ctx, t);
    // wipe around each cut: brick covers the frame at the cut time
    for (let j = 1; j < ORDER.length; j++) { const c = ORDER[j][1]; if (t > c - WIPE / 2 && t < c + WIPE / 2) brickWipe(ctx, ph(t, c - WIPE / 2, c + WIPE / 2), WIPECOL[(j - 1) % WIPECOL.length]); }
    if (!GR) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.025 * 255; d[j] = d[j + 1] = d[j + 2] = n > 0 ? 255 : 0; d[j + 3] = Math.min(255, Math.abs(n) * 2); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  // ---------- sound: brick clicks, clacks on wood, whooshes, a ding of discovery ----------
  function scoreSound(k) {
    const D = DURATION;
    const click = (t, g = 0.8, p = 0, minor = false) => { k.play('click', t, { f: 2900, gain: g, pan: p, minor }); k.play('tick', t + 0.004, { f: 4600, gain: g * 0.6, pan: p, minor }); };
    const clack = (t, g = 0.6, p = 0) => k.play('tock', t, { f: 620, gain: g, pan: p, minor: true });
    k.bed('room', 0, D, { gain: 0.18 });
    for (let j = 1; j < ORDER.length; j++) { const c = ORDER[j][1]; k.play('whoosh', c - 0.28, { dur: 0.5, gain: 0.7, top: 2200 }); clack(c + 0.22, 0.6); }
    // hook
    for (let i = 0; i < 6; i++) k.play('swish', 0.1 + i * 0.16, { dur: 0.1, gain: 0.25, minor: true });
    click(T('p1', 'shut')); click(T('p1', 'night'), 0.8, 0.2); k.play('ding', T('p1', 'night') + 0.1, { f: 'E5', gain: 0.25 });
    clack(T('p2', 'you'), 0.7); click(T('p2', 'notice'), 0.5, -0.3, true);
    // heart
    click(T('p3', 'why')); click(T('p3', 'heart'));
    for (let x = T('p3', 'heart'); x < T('p3', 'fifty'); x += 0.17) k.play('thud', x, { f: 120, gain: 0.35, minor: true });
    for (let f = Math.ceil(T('p3', 'twelve') * 15); f < T('p3', 'hundred') * 15; f++) k.play('count', f / 15, { gain: 0.6, minor: true });
    click(T('p3', 'twelve')); k.play('impact', T('p3', 'fifty'), { gain: 0.7 }); click(T('p3', 'fifty'));
    // fuel
    click(T('p4', 'engine'));
    for (let i = 0; i < 5; i++) clack(T('p4', 'burns') + i * 0.18, 0.5, 0.4);
    k.noise(T('p4', 'burns'), { dur: 1.1, color: 'pink', filter: 'bandpass', f: [[0, 600], [1.1, 1800]], gain: 0.15, a: 0.1, minor: true });
    for (let i = 0; i < 5; i++) click(T('p4', 'fast') + i * 0.14, 0.4, 0.4, true);
    click(T('p4', 'burns'), 0.6);
    ['three', 'times', 'their'].forEach((w, i) => { k.play('whoosh', T('p5', w) - 0.3, { dur: 0.3, gain: 0.35, minor: true }); click(T('p5', w), 0.9, 0.4); });
    click(T('p5', 'weight')); click(T('p5', 'nectar'), 0.6);
    // night
    k.tone(14.0, { f: 'A4', type: 'triangle', dur: 1.5, gain: 0.05, a: 0.2, minor: true });
    k.play('error', T('p6', 'no'), { f: 'A3', gain: 0.4 }); click(T('p6', 'no'));
    click(T('p7', 'long'), 0.6); for (let i = 0; i < 3; i++) k.play('blip', T('p7', 'starve') + i * 0.33, { f: 'A5', gain: 0.5, minor: true }); click(T('p7', 'starve'));
    // torpor
    for (let i = 0; i < 6; i++) click(T('p8', 'torpor') - 0.08 + i * 0.07, 0.75, (i - 2.5) * 0.15);
    click(T('p9', 'body'), 0.5); click(T('p9', 'hundred')); k.play('riser', T('p9', 'cools') - 0.1, { dur: 0.6, gain: 0.25, minor: true });
    for (let i = 0; i < 5; i++) clack(T('p10', 'almost') + i * 0.1, 0.5, 0.4);
    k.noise(T('p10', 'fifty') - 0.2, { dur: 1.0, color: 'pink', filter: 'bandpass', f: [[0, 3200], [1.0, 500]], q: 1.1, gain: 0.2, a: 0.2 }); click(T('p10', 'fifty'));
    // asleep
    click(T('p11', 'crashes')); for (let x = 25.0; x < 28.3; x += 1.15) k.play('thud', x, { f: 90, gain: 0.45 }); click(T('p11', 'fifty'));
    for (let i = 0; i < 4; i++) clack(T('p12', 'hang') + i * 0.09, 0.4, -0.2);
    click(T('p12', 'upside')); k.play('impact', T('p12', 'stiff'), { gain: 0.45 }); k.play('sparkle', T('p12', 'stiff') + 0.05, { n: 5, gain: 0.4 }); click(T('p12', 'stiff'), 0.6);
    // andes
    click(T('p13', 'andes')); k.play('stamp', T('p13', 'thirtyeight'), { gain: 0.5 }); click(T('p13', 'thirtyeight'));
    click(T('p14', 'barely'), 0.7); click(T('p14', 'freezing')); k.noise(T('p14', 'freezing'), { dur: 1.4, color: 'pink', filter: 'highpass', f: 3000, gain: 0.08, a: 0.3, minor: true });
    // metabolism
    click(T('p15', 'metabolism'));
    k.play('whoosh', T('p15', 'ninetyfive') - 0.15, { dur: 0.5, gain: 0.6 });
    for (let i = 0; i < 19; i++) clack(T('p15', 'ninetyfive') + 0.4 + i * 0.03, 0.25, (i % 2 ? 0.5 : -0.5));
    click(T('p15', 'ninetyfive')); click(T('p15', 'percent'), 0.6);
    // dawn
    k.play('riser', T('p16', 'sunrise') - 0.2, { dur: 1.4, gain: 0.25 }); click(T('p16', 'sunrise'));
    for (let x = T('p16', 'shiver'); x < T('p18', 'off'); x += 1 / 12) k.play('tick', x, { f: 3600, gain: 0.25, minor: true });
    click(T('p16', 'shiver')); for (let i = 0; i < 6; i++) click(T('p17', 'warm') + i * 0.2, 0.5, 0.4, true);
    click(T('p17', 'hour') - 0.15); k.play('swish', T('p18', 'off') - 0.1, { gain: 0.4 }); k.play('success', T('p18', 'breakfast'), { f: 'C6', gain: 0.35 }); click(T('p18', 'breakfast'));
    // end
    click(T('p19', 'you')); k.play('whoosh', T('p19', 'shut') - 0.3, { dur: 0.3, gain: 0.4 }); click(T('p19', 'shut'), 0.8, -0.4);
    click(T('p20', 'or')); k.play('whoosh', T('p20', 'eat') - 0.3, { dur: 0.3, gain: 0.4 }); click(T('p20', 'eat'), 0.8, 0.4);
    for (let i = 0; i < 3; i++) click(T('p20', 'three') + i * 0.12, 0.6, 0.4, true);
    k.play('ding', T('p20', 'day'), { f: 'G5', gain: 0.3 }); click(T('p20', 'day'));
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
