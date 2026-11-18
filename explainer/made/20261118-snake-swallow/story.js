// ================= Pictogram Motion (Lemo-Opuscar, MIT style guide), vertical 1080x1920: "How does a snake swallow something wider than its head without choking?" =================
// Unattended run: no storyboard step. Drawing technique ported from the Pictogram Motion engine; all figures, story and layout are ours.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'hook', s: 0.25, e: 3.41, w: {'snakes': 0.25, 'never': 0.67, 'choke': 1.02, 'on': 1.38, 'meals': 1.52, 'wider': 1.87, 'than': 2.22, 'their': 2.5, 'own': 2.85, 'heads': 3.06} },
    { id: 'how', s: 3.77, e: 5.58, w: {'your': 3.77, 'jaw': 4.1, 'could': 4.34, 'never': 4.75, 'so': 5.16, 'how': 5.33} },
    { id: 'myth', s: 6.04, e: 6.95, w: {'first': 6.04, 'a': 6.49, 'myth': 6.59} },
    { id: 'unhinge', s: 7.3, e: 9.34, w: {'snakes': 7.3, 'dont': 7.77, 'unhinge': 8.09, 'their': 8.64, 'jaws': 9.03} },
    { id: 'halves', s: 9.78, e: 12.91, w: {'the': 9.78, 'two': 9.99, 'halves': 10.21, 'of': 10.63, 'the2': 10.78, 'lower': 10.99, 'jaw': 11.35, 'arent': 11.56, 'fused': 11.91, 'at': 12.27, 'the3': 12.41, 'chin': 12.63} },
    { id: 'lig', s: 13.3, e: 14.94, w: {'a': 13.3, 'stretchy': 13.37, 'ligament': 13.87, 'joins': 14.38, 'them': 14.69} },
    { id: 'spread', s: 15.35, e: 17.0, w: {'so': 15.35, 'they': 15.51, 'spread': 15.83, 'wide': 16.3, 'apart': 16.61} },
    { id: 'own', s: 17.35, e: 19.23, w: {'then': 17.35, 'each': 17.65, 'side': 17.95, 'moves': 18.25, 'on': 18.62, 'its': 18.77, 'own': 19.0} },
    { id: 'grips', s: 19.69, e: 21.75, w: {'left': 19.69, 'grips': 19.99, 'right': 20.37, 'slides': 20.75, 'forward': 21.21} },
    { id: 'left', s: 21.91, e: 22.82, w: {'then': 21.91, 'left': 22.19, 'again': 22.47} },
    { id: 'walk', s: 23.29, e: 26.11, w: {'the': 23.29, 'snake': 23.5, 'basically': 23.86, 'walks': 24.49, 'its': 24.84, 'head': 25.05, 'over': 25.34, 'its2': 25.62, 'meal': 25.83} },
    { id: 'breathe', s: 26.58, e: 29.06, w: {'but': 26.58, 'with': 26.78, 'a': 27.04, 'mouth': 27.11, 'that': 27.45, 'full': 27.71, 'how': 27.98, 'does': 28.18, 'it': 28.45, 'breathe': 28.59} },
    { id: 'pipe', s: 29.63, e: 32.19, w: {'its': 29.63, 'windpipe': 29.85, 'opening': 30.44, 'sits': 30.95, 'low': 31.24, 'in': 31.46, 'the': 31.61, 'mouth': 31.82} },
    { id: 'push', s: 32.64, e: 34.9, w: {'and': 32.64, 'it': 32.84, 'can': 32.97, 'push': 33.17, 'forward': 33.44, 'and2': 33.9, 'off': 34.1, 'to': 34.3, 'the': 34.44, 'side': 34.63} },
    { id: 'snork', s: 35.3, e: 36.75, w: {'like': 35.3, 'a': 35.61, 'builtin': 35.68, 'snorkel': 36.21} },
    { id: 'ribs', s: 37.18, e: 39.45, w: {'and': 37.18, 'its': 37.41, 'ribs': 37.64, 'only': 37.94, 'attach': 38.24, 'to': 38.69, 'the': 38.85, 'spine': 39.07} },
    { id: 'stretch', s: 39.98, e: 42.25, w: {'so': 39.98, 'the': 40.11, 'whole': 40.3, 'body': 40.61, 'stretches': 40.86, 'around': 41.43, 'the2': 41.81, 'meal': 41.99} },
    { id: 'king', s: 42.64, e: 44.96, w: {'king': 42.64, 'snakes': 42.91, 'can': 43.3, 'even': 43.5, 'swallow': 43.77, 'other': 44.23, 'snakes2': 44.56} },
    { id: 'long', s: 45.13, e: 46.61, w: {'as': 45.13, 'long': 45.29, 'as2': 45.62, 'themselves': 45.79} },
    { id: 'ask', s: 47.04, e: 49.92, w: {'so': 47.04, 'whats': 47.16, 'the': 47.46, 'biggest': 47.64, 'thing': 48.06, 'you': 48.36, 'think': 48.54, 'a': 48.84, 'snake': 48.9, 'could': 49.2, 'swallow': 49.5} },
  ];
  const B = Object.fromEntries(BEATS.map((b) => [b.id, b]));
  const T = (id, w) => B[id].w[w];
  const DURATION = +(BEATS[BEATS.length - 1].e + 1.0).toFixed(2);

  // ---------- maths ----------
  // ---------- maths ----------
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const inv = (a, b, x) => clamp((x - a) / (b - a));
  const oExp = (t) => (t = clamp(t), t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
  const ioExp = (t) => (t = clamp(t), t <= 0 ? 0 : t >= 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2);
  const io3 = (t) => (t = clamp(t), t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const oBack = (t, s = 1.7) => (t = clamp(t) - 1, t * t * ((s + 1) * t + s) + 1);
  const rng = (seed) => { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let q = Math.imul(a ^ (a >>> 15), 1 | a); q = (q + Math.imul(q ^ (q >>> 7), 61 | q)) ^ q; return ((q ^ (q >>> 14)) >>> 0) / 4294967296; }; };
  // ---------- colour: "reptile house" set, five hues + one dark neutral, five tones each (names are ours) ----------
  const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const toHex = (c) => '#' + c.map((v) => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, t) => { const A = hex(a), Bc = hex(b); return toHex(A.map((v, i) => lerp(v, Bc[i], t))); };
  const rgba = (h, a) => { const c = hex(h); return `rgba(${c[0]},${c[1]},${c[2]},${a})`; };
  const CREAM = '#fbf6ec', INK = '#14201a';
  const PAL = {
    moss:  { t: ['#163f26', '#1f5532', '#2a6e40', '#4a8d5a', '#7cb486'], fg: CREAM },
    sand:  { t: ['#c9973f', '#d8a84f', '#e5bb66', '#eecd8a', '#f5e0b4'], fg: INK },
    rust:  { t: ['#8f2f1c', '#a83d24', '#c1512f', '#d4714f', '#e49a7d'], fg: CREAM },
    lagoon:{ t: ['#0b4a52', '#105e68', '#187783', '#3a949d', '#70b6bb'], fg: CREAM },
    lime:  { t: ['#8fae22', '#a1c032', '#b5d14a', '#c8de75', '#dceaa6'], fg: INK },
    night: { t: ['#0c1110', '#131b19', '#1b2724', '#283834', '#3c504a'], fg: CREAM, accent: '#e5bb66' },
  };
  for (const k in PAL) PAL[k].far = mix(PAL[k].fg, PAL[k].t[2], 0.42);
  const EGG = '#fbf3df', EGG2 = '#e7d9b8', PINK = '#e58a8a';

  // ---------- primitives (round caps, flat fills) ----------
  // ---------- primitives (round caps, flat fills) ----------
  const disc = (ctx, x, y, r, col) => { if (r <= 0) return; ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); };
  const seg = (ctx, a, b, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); };
  const poly = (ctx, pts, col) => { ctx.fillStyle = col; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.fill(); };
  const arcS = (ctx, x, y, r, a0, a1, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(x, y, r, a0, a1); ctx.stroke(); };
  const rrect = (ctx, x, y, w, h, r, col) => { ctx.fillStyle = col; ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fill(); };
  const ell = (ctx, x, y, rx, ry, col, rot = 0) => { ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(x, y, Math.max(0.1, rx), Math.max(0.1, ry), rot, 0, Math.PI * 2); ctx.fill(); };
  const path = (ctx, pts, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); };

  // ---------- pictograms ----------
  // a wavy snake body (side/top neutral): from (x0,y) to (x1,y), thickness w, sine wiggle; head disc at x1 facing right
  function snake(ctx, x0, x1, y, w, amp, ph, col, col2, head = true) {
    const pts = []; for (let x = x0; x <= x1; x += 10) { const f = (x - x0) / Math.max(1, x1 - x0); pts.push([x, y + Math.sin(x * 0.012 + ph) * amp * (0.3 + 0.7 * (1 - f))]); }
    path(ctx, pts, w, col);
    if (head) { const hy = pts[pts.length - 1][1]; ell(ctx, x1 + w * 0.35, hy, w * 0.85, w * 0.6, col); disc(ctx, x1 + w * 0.6, hy - w * 0.22, w * 0.13, col2); seg(ctx, [x1 + w * 1.15, hy + w * 0.05], [x1 + w * 1.5, hy + w * 0.05], w * 0.08, PINK); }
  }
  // side view: snake head with mouth stretched around an egg. (x,y) egg centre, r egg radius, k = how far in (0 egg in front, 1 egg swallowed into neck)
  function gulp(ctx, x, y, r, k, col, col2, open = 1) {
    // body coming from the left
    path(ctx, [[x - 900, y + 40], [x - 620, y - 20], [x - 360, y + 30], [x - r * 0.6, y]], r * 0.55, col);
    const ex = x - k * r * 1.4;
    ell(ctx, ex, y, r * 1.08, r * 0.86 * (0.9 + 0.1 * open), col); // skin stretched over the meal
    const tip = 1 - k; // egg front still showing
    if (tip > 0.02) { ctx.save(); ctx.beginPath(); ctx.rect(ex + r * 0.15, y - r, r * 2, r * 2); ctx.clip(); ell(ctx, ex + r * 0.25 * tip, y, r * 0.92, r * 0.74, EGG); ell(ctx, ex + r * 0.5 * tip, y - r * 0.2, r * 0.25, r * 0.16, '#ffffff'); ctx.restore(); }
    // jaws: upper and lower wedges sliding along the egg
    const jx = ex + r * (0.2 + 0.75 * tip);
    poly(ctx, [[ex - r * 0.3, y - r * 0.86], [jx + r * 0.25, y - r * 0.62 * open], [jx + r * 0.1, y - r * 0.4 * open], [ex - r * 0.1, y - r * 0.5]], col);
    poly(ctx, [[ex - r * 0.3, y + r * 0.86], [jx + r * 0.2, y + r * 0.62 * open], [jx, y + r * 0.42 * open], [ex - r * 0.1, y + r * 0.5]], col);
    disc(ctx, ex + r * 0.15, y - r * 0.62, r * 0.11, col2);
  }
  function egg(ctx, x, y, r, col = EGG, rot = 0) { ell(ctx, x, y, r * 0.8, r, col, rot); ell(ctx, x - r * 0.25, y - r * 0.35, r * 0.2, r * 0.13, '#ffffff', rot); }
  function mouse(ctx, x, y, s, col, col2) {
    ell(ctx, x, y, s, s * 0.6, col); disc(ctx, x + s * 0.75, y - s * 0.15, s * 0.42, col); disc(ctx, x + s * 0.6, y - s * 0.6, s * 0.22, col); disc(ctx, x + s * 0.6, y - s * 0.6, s * 0.11, PINK);
    disc(ctx, x + s * 0.92, y - s * 0.22, s * 0.07, col2); arcS(ctx, x - s * 1.4, y + s * 0.1, s * 0.5, -0.2, 1.6, s * 0.1, col);
  }
  // top view of a snake's lower jaw: two bars that meet at the chin. spread 0..1, gapK 0..1 (gap at chin), lig 0..1 ligament
  function jawTop(ctx, x, y, L, spread, gapK, lig, col, colL) {
    const a = 0.32 + spread * 0.42, g = 10 + gapK * 30 + spread * 50;
    const lt = [x - g, y - L * 0.5], rt = [x + g, y - L * 0.5];
    const lb = [lt[0] - Math.sin(a) * L, lt[1] + Math.cos(a) * L], rb = [rt[0] + Math.sin(a) * L, rt[1] + Math.cos(a) * L];
    seg(ctx, lt, lb, 52, col); seg(ctx, rt, rb, 52, col);
    for (const [p, q, sd] of [[lt, lb, -1], [rt, rb, 1]]) for (let i = 1; i < 6; i++) { const f = i / 6, px = lerp(p[0], q[0], f), py = lerp(p[1], q[1], f); seg(ctx, [px, py], [px - sd * 22, py - 16], 10, CREAM); }
    if (lig > 0) { const n = 7, pts = []; for (let i = 0; i <= n; i++) { const f = i / n; pts.push([lerp(lt[0] + 18, rt[0] - 18, f), lt[1] + (i % 2 ? -1 : 1) * (14 + spread * 6) * (i && i < n ? 1 : 0)]); }
      ctx.save(); ctx.globalAlpha = lig; path(ctx, pts, 12, colL); ctx.restore(); }
    return { lt, rt, lb, rb };
  }
  // top view: head halves (left and right) "walking" over a meal. offL / offR = forward offset of each side
  function walkTop(ctx, x, y, offL, offR, preyY, col, col2) {
    // neck going down
    rrect(ctx, x - 130, y + 120, 260, 520, 120, col);
    // meal (egg seen from above) partly inside
    ell(ctx, x, preyY, 150, 190, EGG);
    for (const [sd, off] of [[-1, offL], [1, offR]]) {
      const hx = x + sd * 120, hy = y - off;
      ctx.save(); ctx.beginPath(); ctx.ellipse(hx, hy, 120, 260, sd * 0.05, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); ctx.restore();
      for (let i = 0; i < 5; i++) seg(ctx, [x + sd * 6, hy - 170 + i * 70], [x + sd * 6 + sd * 26, hy - 150 + i * 70], 12, CREAM); // backward hooked teeth
      disc(ctx, hx + sd * 50, hy - 150, 22, col2);
    }
    // re-draw the egg part that sits between the jaws, on top
    ctx.save(); ctx.beginPath(); ctx.rect(x - 28, 0, 56, HH); ctx.clip(); ell(ctx, x, preyY, 150, 190, EGG2); ctx.restore();
  }
  // side cutaway: head with windpipe tube sliding forward. push 0..1
  function snorkelHead(ctx, x, y, s, push, col, col2, tube, airT) {
    ell(ctx, x - s * 0.4, y, s * 1.2, s * 0.8, col); // full mouth / bulge
    ell(ctx, x - s * 0.25, y - s * 0.05, s * 0.8, s * 0.52, EGG); // meal inside (cutaway)
    path(ctx, [[x - s * 2.4, y + s * 0.1], [x - s * 1.4, y]], s * 0.7, col);
    poly(ctx, [[x - s * 0.2, y - s * 0.78], [x + s * 1.05, y - s * 0.5], [x + s * 0.95, y - s * 0.3], [x + s * 0.2, y - s * 0.55]], col);
    poly(ctx, [[x - s * 0.2, y + s * 0.78], [x + s * 1.0, y + s * 0.5], [x + s * 0.9, y + s * 0.3], [x + s * 0.2, y + s * 0.55]], col);
    disc(ctx, x + s * 0.25, y - s * 0.62, s * 0.1, col2);
    // windpipe: runs under the meal along the floor of the mouth, then its opening pushes forward and down out to the side
    const ox = lerp(x + s * 0.2, x + s * 1.05, push), oy = lerp(y + s * 0.62, y + s * 0.95, push);
    path(ctx, [[x - s * 1.8, y + s * 0.6], [x - s * 0.6, y + s * 0.66], [ox - s * 0.2, oy - s * 0.04], [ox, oy]], s * 0.2, tube);
    disc(ctx, ox, oy, s * 0.15, tube); disc(ctx, ox, oy, s * 0.07, col2);
    if (airT != null) for (let k = 0; k < 4; k++) { const p = ((airT * 0.9) + k / 4) % 1, ax = lerp(ox + s * 0.6, x - s * 1.6, p), ay = p < 0.25 ? lerp(oy + s * 0.05, oy, p * 4) : lerp(oy, y + s * 0.62, (p - 0.25) / 0.75);
      ctx.globalAlpha = Math.sin(p * Math.PI) * clamp(push * 3); disc(ctx, ax, ay, s * 0.06, CREAM); ctx.globalAlpha = 1; }
  }
  // spine + ribs side/top view; open 0..1 spreads the ribs around a meal of radius r
  function ribcage(ctx, x0, x1, y, r, open, mealX, col, colSp) {
    const n = 16;
    for (let i = 0; i < n; i++) { const x = lerp(x0, x1, i / (n - 1)), d = Math.abs(x - mealX), bump = Math.max(0, 1 - d / (r * 1.6)), h = 120 + open * bump * r * 0.95;
      for (const sd of [-1, 1]) path(ctx, [[x, y], [x + 22, y + sd * h * 0.6], [x + 6, y + sd * h]], 16, col); }
    seg(ctx, [x0 - 40, y], [x1 + 40, y], 30, colSp);
    for (let i = 0; i < n; i++) disc(ctx, lerp(x0, x1, i / (n - 1)), y, 20, colSp);
  }
  function stamp(ctx, x, y, text, col, k, rot = -0.12) {
    if (k <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(rot); const s = lerp(1.8, 1, oExp(k)); ctx.scale(s, s); ctx.globalAlpha = clamp(k * 3);
    ctx.font = F.en(900, 120); ctx.letterSpacing = '6px'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; const w = ctx.measureText(text).width + 70;
    ctx.strokeStyle = col; ctx.lineWidth = 14; ctx.beginPath(); ctx.roundRect(-w / 2, -86, w, 172, 28); ctx.stroke(); ctx.fillStyle = col; ctx.fillText(text, 0, 6); ctx.restore();
  }
  function cross(ctx, x, y, s, col, k) { if (k <= 0) return; seg(ctx, [x - s, y - s], [lerp(x - s, x + s, oExp(k)), lerp(y - s, y + s, oExp(k))], s * 0.32, col); const k2 = inv(0.4, 1, k); if (k2 > 0) seg(ctx, [x + s, y - s], [lerp(x + s, x - s, oExp(k2)), lerp(y - s, y + s, oExp(k2))], s * 0.32, col); }

  // ---------- grid pattern (cell = 1/6 of the frame width), rows cut and shifted ----------
  const CELL = 180;
  function motif(ctx, kind, x, y, s, c, r) {
    const [a, b, cc] = c; ctx.save(); ctx.beginPath(); ctx.rect(x, y, s, s); ctx.clip(); ctx.fillStyle = a; ctx.fillRect(x, y, s, s);
    const rot = Math.floor(r() * 4), upright = kind >= 12;
    ctx.translate(x + s / 2, y + s / 2); if (!upright) ctx.rotate(rot * Math.PI / 2); ctx.translate(-s / 2, -s / 2);
    switch (kind) {
      case 0: disc(ctx, 0, 0, s, b); break;
      case 1: disc(ctx, s / 2, s, s / 2, b); break;
      case 2: disc(ctx, s / 2, s / 2, s / 2, b); disc(ctx, s * 0.62, s * 0.42, s * 0.13, cc); break;
      case 3: { const k = s / 4; for (let row = 0; row < 5; row++) for (let i = -1; i < 5; i++) { const cx = i * k + (row % 2 ? k / 2 : 0), cy = row * k * 0.5 + k * 0.5; disc(ctx, cx, cy, k * 0.5, row % 2 ? b : cc); disc(ctx, cx, cy, k * 0.3, a); } break; } // scales
      case 4: for (let i = 5; i >= 1; i--) disc(ctx, 0, s, (s * i) / 5, i % 2 ? b : a); break;
      case 5: disc(ctx, s / 2, s / 2, s * 0.46, b); disc(ctx, s * 0.66, s * 0.38, s * 0.4, a); break;
      case 6: disc(ctx, 0, s / 2, s / 2, b); disc(ctx, s, s / 2, s / 2, cc); break;
      case 7: { const k = s / 3; for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { ctx.fillStyle = (i + j) % 2 ? b : cc; ctx.beginPath(); ctx.moveTo(i * k + k / 2, j * k); ctx.lineTo(i * k + k, j * k + k / 2); ctx.lineTo(i * k + k / 2, j * k + k); ctx.lineTo(i * k, j * k + k / 2); ctx.fill(); } break; } // diamond scales
      // this film's own motifs (upright)
      case 12: egg(ctx, s / 2, s / 2, s * 0.3, b); break;
      case 13: snake(ctx, s * 0.12, s * 0.7, s / 2, s * 0.12, s * 0.12, 0, b, a); break;
      case 14: mouse(ctx, s * 0.5, s * 0.58, s * 0.2, b, a); break;
    }
    ctx.restore();
  }
  const LIB = [0, 1, 2, 3, 3, 4, 5, 6, 7, 12, 13, 13, 14];

  const patCache = new Map();
  function pattern(pk, seed, spread, density = 0.5) {
    const key = pk + '|' + seed + '|' + spread;
    if (patCache.has(key)) { const v = patCache.get(key); patCache.delete(key); patCache.set(key, v); return v; }
    if (patCache.size > 6) patCache.delete(patCache.keys().next().value);
    const S = CELL, P = PAL[pk], base = P.t[2], Tn = P.t.map((c) => mix(base, c, spread));
    const cols = Math.ceil(W / S) + 3, rows = Math.ceil(HH / S) + 1;
    const cv = document.createElement('canvas'); cv.width = cols * S; cv.height = rows * S; const c = cv.getContext('2d');
    const r = rng(seed * 7919 + 13);
    c.fillStyle = Tn[1]; c.fillRect(0, 0, cv.width, cv.height);
    for (let j = -1; j < rows; j++) for (let i = -1; i < cols; i++) { const k = r(), cx = i * S, cy = j * S;
      if (k < 0.34) disc(c, cx + S, cy + S, S, Tn[Math.floor(r() * 4)]);
      else if (k < 0.5) { disc(c, cx + S, cy + S, S, Tn[3]); disc(c, cx + S, cy + S, S * 0.5, Tn[0]); } }
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) { if (r() > density) continue;
      const pick = () => Tn[Math.floor(r() * 5)]; let a = pick(), b = pick(); while (b === a) b = pick(); let cc = pick(); while (cc === b) cc = pick();
      motif(c, LIB[Math.floor(r() * LIB.length)], i * S, j * S, S, [a, b, cc], r); }
    patCache.set(key, cv); return cv;
  }
  function drawPattern(ctx, pat, offs, y0 = 0, y1 = HH) {
    const S = CELL;
    for (let j = Math.floor(y0 / S); j * S < y1; j++) { let dx = offs(j); dx = ((dx % S) + S) % S - S; ctx.drawImage(pat, 0, j * S, pat.width, S, dx, j * S, pat.width, S + 0.5); }
  }
  const drift = (lt, sp = 14) => (j) => (j % 2 ? 1 : -1) * lt * sp + (j % 3) * 37;

  // ---------- type ----------
  const F = { en: (w, px) => `${w} ${px}px "Inter Tight"`, mono: (px) => `500 ${px}px "DM Mono"` };
  function maskText(ctx, text, x, y, font, col, p, o = {}) {
    if (p <= 0) return 0;
    ctx.save(); ctx.font = font; ctx.letterSpacing = o.ls || '0px'; ctx.textAlign = o.align || 'left'; ctx.textBaseline = 'alphabetic';
    const m = ctx.measureText(text), asc = m.actualBoundingBoxAscent, desc = m.actualBoundingBoxDescent, h = asc + desc, w = m.width + 40;
    const x0 = o.align === 'center' ? x - w / 2 : o.align === 'right' ? x - w : x - 20;
    ctx.beginPath(); ctx.rect(x0, y - asc - 8, w, h + 16); ctx.clip();
    ctx.fillStyle = col; ctx.fillText(text, x, y + (1 - oExp(p)) * (h + 20)); ctx.restore(); return m.width;
  }
  function fitPx(ctx, text, w, px, weight = 900, ls = '-4px') { ctx.save(); ctx.font = F.en(weight, px); ctx.letterSpacing = ls; const m = ctx.measureText(text).width; ctx.restore(); return m > w ? Math.floor(px * w / m) : px; }
  function typeText(ctx, text, x, y, font, col, p, align = 'left') { const n = Math.floor(text.length * clamp(p) + 0.001); ctx.save(); ctx.font = font; ctx.letterSpacing = '4px'; ctx.fillStyle = col; ctx.textAlign = align; ctx.fillText(text.slice(0, n), x, y); ctx.restore(); }
  function chip(ctx, text, x, y, bg, fg, p) {
    if (p <= 0) return; ctx.save(); ctx.font = F.mono(34); ctx.letterSpacing = '4px'; const w = ctx.measureText(text).width + 44;
    ctx.beginPath(); ctx.rect(x - 4, y - 40, (w + 8) * oExp(p), 64); ctx.clip(); rrect(ctx, x, y - 36, w, 56, 28, bg); ctx.fillStyle = fg; ctx.fillText(text, x + 22, y + 2); ctx.restore();
  }
  // title block in the band: title, a heavy second line ~0.08 s later, a mono tag after
  function textBlock(ctx, t, t0, o) {
    const x = 80, y = o.y || 560, px = fitPx(ctx, o.title, 920, o.px || 200), spx = fitPx(ctx, o.sub || '', 920, o.spx || 58, 800, '-1px');
    maskText(ctx, o.title, x, y, F.en(900, px), o.fg, inv(t0, t0 + 0.45, t), { ls: '-4px' });
    if (o.sub) maskText(ctx, o.sub, x + 4, y + 86, F.en(800, spx), o.sfg || o.fg, inv(t0 + 0.08, t0 + 0.55, t), { ls: '-1px' });
    if (o.tag) chip(ctx, o.tag, x + 4, y + 166 - (o.sub ? 0 : 80), o.tbg, o.tfg, inv((o.tagAt ?? t0 + 0.25), (o.tagAt ?? t0 + 0.25) + 0.4, t));
  }


  // ---------- scenes ----------
  const SC = [
    { id: 'hook',    t0: 0,                  pk: 'moss',   seed: 3,  full: true },
    { id: 'myth',    t0: B.myth.s - 0.15,    pk: 'rust',   seed: 11, tr: 'rows' },
    { id: 'halves',  t0: B.halves.s - 0.15,  pk: 'sand',   seed: 5,  tr: 'quarter' },
    { id: 'walk',    t0: B.own.s - 0.15,     pk: 'lagoon', seed: 21, tr: 'cols' },
    { id: 'breathe', t0: B.breathe.s - 0.15, pk: 'night',  seed: 8,  tr: 'rows', full: true },
    { id: 'pipe',    t0: B.pipe.s - 0.15,    pk: 'lime',   seed: 31, tr: 'quarter' },
    { id: 'ribs',    t0: B.ribs.s - 0.15,    pk: 'rust',   seed: 17, tr: 'cols' },
    { id: 'king',    t0: B.king.s - 0.15,    pk: 'moss',   seed: 44, tr: 'rows' },
    { id: 'ask',     t0: B.ask.s - 0.15,     pk: 'sand',   seed: 61, tr: 'quarter', full: true },
  ];
  const N = SC.length;

  const BAND0 = 180, BAND1 = 760, SX = 540, SY = 1210, SR = 400;
  function base(ctx, sc, lt, idx) {
    const P = PAL[sc.pk];
    ctx.fillStyle = P.t[2]; ctx.fillRect(0, 0, W, HH);
    const beatJump = sc.full ? Math.floor(lt / 0.6) * CELL * 0.25 : 0;
    drawPattern(ctx, pattern(sc.pk, sc.seed, sc.full ? 1 : 0.42), (j) => drift(lt)(j) + (j % 2 ? beatJump : -beatJump));
    ctx.fillStyle = P.fg === CREAM ? P.t[0] : P.t[4]; ctx.fillRect(0, BAND0, W, BAND1 - BAND0);
    hud(ctx, idx, lt, P);
  }
  function stage(ctx, sc, lt, col, r = SR, x = SX, y = SY) {
    const k = oExp(inv(0, 0.5, lt));
    const n = 6; for (let i = 0; i < n; i++) { const y0 = y - r + (2 * r * i) / n, off = (1 - k) * (i % 2 ? 1 : -1) * 700;
      ctx.save(); ctx.beginPath(); ctx.rect(0, y0, W, 2 * r / n + 1); ctx.clip(); disc(ctx, x + off, y, r, col); ctx.restore(); }
    ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.clip();
    const sx = lerp(x - r * 1.6, x + r * 1.6, ((lt * 0.18) % 1)); const g = ctx.createLinearGradient(sx - 160, 0, sx + 160, 0);
    g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.5, 'rgba(255,255,255,0.10)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(x - r, y - r, 2 * r, 2 * r); ctx.restore();
  }
  function hud(ctx, idx, lt, P) {
    const fg = P.fg, dk = fg === CREAM ? '#fbf6ec' : INK, dim = rgba(dk, 0.55);
    typeText(ctx, 'ZORBLY · FIELD NOTES', 80, 250, F.mono(28), dim, inv(0.05, 0.5, lt));
    typeText(ctx, String(idx + 1).padStart(2, '0') + ' / ' + String(N).padStart(2, '0'), 1000, 250, F.mono(28), fg, inv(0.05, 0.3, lt), 'right');
    const x0 = 80, wd = 920, gap = 10, tw = (wd - gap * (N - 1)) / N;
    for (let i = 0; i < N; i++) { const cur = i === idx; ctx.fillStyle = cur ? fg : rgba(dk, i < idx ? 0.5 : 0.18); ctx.fillRect(x0 + i * (tw + gap), cur ? 284 : 290, tw, cur ? 14 : 6); }
  }

  const S = {};
  // 01 hook: a snake gulps an egg wider than its head; your jaw could never
  S.hook = (ctx, t, lt, sc, i) => {
    const P = PAL.moss; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const w = T('hook', 'wider'), k = 0.15 * io3(inv(w, T('hook', 'heads') + 0.3, t)) + 0.12 * io3(inv(T('how', 'so'), T('how', 'how') + 0.4, t));
    gulp(ctx, SX + 120, SY + 10, 190, k, P.t[0], CREAM, 1);
    // width brackets: meal vs head
    const bk = oExp(inv(w - 0.15, w + 0.3, t));
    if (bk > 0) { const ex = SX + 120 - k * 266, top = SY - 210, bot = SY + 230;
      seg(ctx, [ex + 260, top], [ex + 260, lerp(top, bot, bk)], 12, CREAM); seg(ctx, [ex + 240, top], [ex + 280, top], 12, CREAM); if (bk > 0.95) seg(ctx, [ex + 240, bot], [ex + 280, bot], 12, CREAM);
      typeText(ctx, 'MEAL', ex + 300, SY + 20, F.mono(44), CREAM, bk); }
    const yj = oExp(inv(T('how', 'jaw') - 0.2, T('how', 'never') + 0.1, t));
    if (yj > 0 && t < T('how', 'so') + 0.1) { ctx.globalAlpha = yj; rrect(ctx, 120, 1480, 300, 120, 60, P.t[0]); typeText(ctx, 'YOUR JAW', 150, 1555, F.mono(40), CREAM, 1); cross(ctx, 470, 1540, 50, PAL.rust.t[3], inv(T('how', 'never') - 0.1, T('how', 'never') + 0.25, t)); ctx.globalAlpha = 1; }
    const px = fitPx(ctx, 'WIDER THAN', 920, 210);
    maskText(ctx, 'NEVER CHOKES', 80, 470, F.en(900, fitPx(ctx, 'NEVER CHOKES', 920, 170)), CREAM, inv(T('hook', 'never') - 0.1, T('hook', 'never') + 0.35, t), { ls: '-4px' });
    if (t < T('how', 'so') - 0.1) maskText(ctx, 'ON MEALS WIDER THAN ITS HEAD', 88, 590, F.en(800, fitPx(ctx, 'ON MEALS WIDER THAN ITS HEAD', 910, 64, 800, '-1px')), P.t[4], inv(T('hook', 'meals') - 0.1, T('hook', 'meals') + 0.35, t), { ls: '-1px' });
    else maskText(ctx, 'SO HOW?', 84, 650, F.en(900, 150), PAL.lime.t[3], inv(T('how', 'so') - 0.1, T('how', 'how') + 0.2, t), { ls: '-4px' });
  };
  // 02 myth: snakes don't unhinge their jaws
  S.myth = (ctx, t, lt, sc, i) => {
    const P = PAL.rust; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    // a jaw "hinge" being pulled apart, then crossed out
    const hk = oExp(inv(T('unhinge', 'unhinge') - 0.3, T('unhinge', 'unhinge') + 0.3, t));
    seg(ctx, [SX - 250, SY - 120], [SX + 150, SY - 160 - 40 * hk], 60, CREAM);
    seg(ctx, [SX - 250, SY + 40 + 120 * hk], [SX + 150, SY + 120 + 200 * hk], 60, CREAM);
    disc(ctx, SX - 260, SY - 120, 54, P.t[0]); disc(ctx, SX - 260, SY + 40 + 120 * hk, 54, P.t[0]);
    ctx.save(); ctx.setLineDash([4, 26]); ctx.lineCap = 'round'; ctx.lineWidth = 14; ctx.strokeStyle = CREAM; ctx.beginPath(); ctx.moveTo(SX - 260, SY - 70); ctx.lineTo(SX - 260, SY - 10 + 120 * hk); ctx.stroke(); ctx.restore();
    cross(ctx, SX + 30, SY, 230, INK, inv(T('unhinge', 'dont') - 0.05, T('unhinge', 'jaws'), t));
    stamp(ctx, SX + 150, SY - 300, 'MYTH', CREAM, inv(T('myth', 'myth') - 0.1, T('myth', 'myth') + 0.35, t));
    if (t < B.unhinge.s - 0.15) maskText(ctx, 'FIRST, A MYTH', 80, 560, F.en(900, fitPx(ctx, 'FIRST, A MYTH', 920, 200)), CREAM, inv(T('myth', 'first') - 0.1, T('myth', 'first') + 0.35, t), { ls: '-4px' });
    else textBlock(ctx, t, T('unhinge', 'snakes') - 0.1, { title: 'NOT UNHINGED', sub: 'THE JAWS NEVER DISLOCATE', fg: CREAM, sfg: P.t[4], px: 200, tag: 'MYTH BUSTED', tbg: CREAM, tfg: P.t[0], tagAt: T('unhinge', 'jaws') });
  };
  // 03 the two lower-jaw halves aren't fused; a stretchy ligament joins them; they spread
  S.halves = (ctx, t, lt, sc, i) => {
    const P = PAL.sand; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const gapK = oExp(inv(T('halves', 'fused') - 0.2, T('halves', 'chin') + 0.1, t));
    const lig = oExp(inv(T('lig', 'stretchy') - 0.1, T('lig', 'ligament') + 0.2, t));
    const sp = io3(inv(T('spread', 'spread') - 0.15, T('spread', 'apart') + 0.2, t)) * (1 - 0.25 * (0.5 + 0.5 * Math.sin((t - T('spread', 'apart')) * 4)) * inv(T('spread', 'apart'), T('spread', 'apart') + 0.5, t));
    const hv = oExp(inv(T('halves', 'two') - 0.2, T('halves', 'halves') + 0.2, t));
    const j = jawTop(ctx, SX, SY - 40 + (1 - hv) * 60, 420, sp, gapK, lig, PAL.moss.t[1], PAL.rust.t[2]);
    if (gapK > 0 && lig < 0.5) { typeText(ctx, 'CHIN', SX - 60, j.lt[1] - 70, F.mono(40), INK, gapK); seg(ctx, [SX, j.lt[1] - 50], [SX, j.lt[1] - 20], 8, INK); }
    if (lig > 0) typeText(ctx, 'LIGAMENT', SX - 110, j.lt[1] - 70, F.mono(40), PAL.rust.t[1], lig);
    if (sp > 0.05) { for (const sd of [-1, 1]) { const x = SX + sd * (200 + 160 * sp); seg(ctx, [x, SY + 300], [x + sd * 60, SY + 300], 14, INK); poly(ctx, [[x + sd * 90, SY + 300], [x + sd * 55, SY + 278], [x + sd * 55, SY + 322]], INK); } }
    if (t < B.lig.s - 0.15) textBlock(ctx, t, T('halves', 'two') - 0.1, { title: 'TWO HALVES', sub: 'NOT FUSED AT THE CHIN', fg: INK, sfg: PAL.rust.t[1], px: 200, tag: 'LOWER JAW', tbg: PAL.moss.t[1], tfg: CREAM, tagAt: T('halves', 'lower') });
    else if (t < B.spread.s - 0.15) textBlock(ctx, t, T('lig', 'a') - 0.1, { title: 'STRETCHY', sub: 'A LIGAMENT JOINS THEM', fg: INK, sfg: PAL.rust.t[1], px: 220 });
    else textBlock(ctx, t, T('spread', 'so') - 0.1, { title: 'SPREAD WIDE', sub: 'THE CHIN OPENS UP', fg: INK, sfg: PAL.rust.t[1], px: 200, tag: 'APART', tbg: PAL.rust.t[2], tfg: CREAM, tagAt: T('spread', 'apart') });
  };
  // 04 each side moves on its own: left grips, right slides forward, left again; it walks its head over the meal
  S.walk = (ctx, t, lt, sc, i) => {
    const P = PAL.lagoon; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const st = [T('grips', 'left'), T('grips', 'right'), T('left', 'left'), T('walk', 'walks'), T('walk', 'head'), T('walk', 'meal')];
    let offL = 0, offR = 0, prog = 0;
    st.forEach((s, n) => { const k = io3(inv(s - 0.15, s + 0.3, t)); if (n % 2 === 0) offL += (k - (n > 0 ? 0 : 0)) * 70; else offR += k * 70; prog += k; });
        const centre = (offL + offR) / 2, preyY = SY - 330 + centre * 1.6;
    ctx.save(); ctx.beginPath(); ctx.rect(0, BAND1, W, 1660 - BAND1); ctx.clip();
    walkTop(ctx, SX, SY + 40, (offL - centre) * 1.4, (offR - centre) * 1.4, preyY, P.t[0], CREAM);
    ctx.restore();
    const lab = (txt, x, at) => typeText(ctx, txt, x, 1610, F.mono(48), P.fg, inv(at - 0.1, at + 0.2, t), 'center');
    lab('L', SX - 300, st[0]); lab('R', SX + 300, st[1]);
    if (t > st[0] - 0.1 && t < st[3]) { const isL = t < st[1] - 0.1 || t > st[2] - 0.1; disc(ctx, isL ? SX - 300 : SX + 300, 1660 - 130, 0, P.fg); rrect(ctx, (isL ? SX - 300 : SX + 300) - 50, 1630, 100, 12, 6, PAL.lime.t[3]); }
    if (t < B.grips.s - 0.15) textBlock(ctx, t, T('own', 'each') - 0.1, { title: 'EACH SIDE', sub: 'MOVES ON ITS OWN', fg: CREAM, sfg: P.t[4], px: 220 });
    else if (t < B.walk.s - 0.15) { maskText(ctx, 'LEFT GRIPS', 80, 470, F.en(900, fitPx(ctx, 'LEFT GRIPS', 920, 180)), CREAM, inv(T('grips', 'left') - 0.1, T('grips', 'left') + 0.3, t), { ls: '-4px' });
      maskText(ctx, 'RIGHT SLIDES', 80, 640, F.en(900, fitPx(ctx, 'RIGHT SLIDES', 920, 180)), PAL.lime.t[3], inv(T('grips', 'right') - 0.1, T('grips', 'right') + 0.3, t), { ls: '-4px' }); }
    else textBlock(ctx, t, T('walk', 'the') - 0.1, { title: 'IT WALKS', sub: 'ITS HEAD OVER THE MEAL', fg: CREAM, sfg: P.t[4], px: 240, tag: 'ONE SIDE AT A TIME', tbg: P.t[3], tfg: CREAM, tagAt: T('walk', 'meal') });
  };
  // 05 with a mouth that full, how does it breathe?
  S.breathe = (ctx, t, lt, sc, i) => {
    const P = PAL.night; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    gulp(ctx, SX + 80, SY, 200, 0.55, PAL.moss.t[2], CREAM, 1);
    const qk = oBack(inv(T('breathe', 'how') - 0.2, T('breathe', 'breathe') + 0.1, t));
    if (qk > 0) { ctx.save(); ctx.font = F.en(900, Math.round(300 * qk)); ctx.textAlign = 'center'; ctx.fillStyle = P.accent; ctx.fillText('?', SX + 300, SY - 160); ctx.restore(); }
    const fk = oExp(inv(T('breathe', 'full') - 0.2, T('breathe', 'full') + 0.2, t));
    if (fk > 0) { rrect(ctx, 120, 1500, 380 * fk, 34, 17, PAL.rust.t[2]); typeText(ctx, 'MOUTH: 100% FULL', 120, 1590, F.mono(38), CREAM, fk); }
    maskText(ctx, 'HOW DOES IT', 80, 470, F.en(900, fitPx(ctx, 'HOW DOES IT', 920, 170)), CREAM, inv(T('breathe', 'how') - 0.15, T('breathe', 'how') + 0.3, t), { ls: '-4px' });
    maskText(ctx, 'BREATHE?', 80, 650, F.en(900, fitPx(ctx, 'BREATHE?', 920, 210)), P.accent, inv(T('breathe', 'breathe') - 0.1, T('breathe', 'breathe') + 0.3, t), { ls: '-4px' });
  };
  // 06 windpipe opening sits low in the mouth, pushes forward and off to the side: a built-in snorkel
  S.pipe = (ctx, t, lt, sc, i) => {
    const P = PAL.lime; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const push = io3(inv(T('push', 'push') - 0.1, T('push', 'side') + 0.2, t));
    const pk = oExp(inv(T('pipe', 'windpipe') - 0.2, T('pipe', 'windpipe') + 0.3, t));
    snorkelHead(ctx, SX + 30, SY - 40, 230, push, PAL.moss.t[0], CREAM, mix(PINK, PAL.rust.t[2], 0.3), t > T('snork', 'snorkel') - 0.3 ? t - T('snork', 'snorkel') : null);
    if (pk > 0 && t < B.push.s) { const lx = SX + 30 + 230 * 0.2, ly = SY - 40 + 230 * 0.62; seg(ctx, [lx, ly + 30], [lx, lerp(ly + 30, 1560, pk)], 8, INK); typeText(ctx, 'WINDPIPE OPENING', lx - 230, 1610, F.mono(40), INK, pk); }
    const sk = oBack(inv(T('snork', 'snorkel') - 0.25, T('snork', 'snorkel') + 0.15, t));
    if (sk > 0) { ctx.save(); ctx.translate(880, 1520); ctx.scale(sk, sk); path(ctx, [[0, 60], [0, -90], [-50, -130]], 30, INK); rrect(ctx, -80, 40, 120, 60, 30, INK); ctx.restore(); }
    if (t < B.push.s - 0.15) textBlock(ctx, t, T('pipe', 'its') - 0.1, { title: 'WINDPIPE', sub: 'ITS OPENING SITS LOW IN THE MOUTH', fg: INK, sfg: PAL.moss.t[1], px: 210 });
    else if (t < B.snork.s - 0.15) textBlock(ctx, t, T('push', 'and') - 0.1, { title: 'PUSHED OUT', sub: 'FORWARD AND OFF TO THE SIDE', fg: INK, sfg: PAL.moss.t[1], px: 210 });
    else textBlock(ctx, t, T('snork', 'like') - 0.1, { title: 'SNORKEL', sub: 'BUILT RIGHT INTO ITS MOUTH', fg: INK, sfg: PAL.moss.t[1], px: 240, tag: 'KEEPS BREATHING', tbg: PAL.moss.t[1], tfg: CREAM, tagAt: T('snork', 'snorkel') });
  };
  // 07 ribs only attach to the spine: the body stretches around the meal
  S.ribs = (ctx, t, lt, sc, i) => {
    const P = PAL.rust; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const op = io3(inv(T('stretch', 'stretches') - 0.2, T('stretch', 'meal') + 0.2, t));
    const mx = lerp(SX + 600, SX, io3(inv(T('stretch', 'whole') - 0.3, T('stretch', 'stretches') + 0.1, t)));
    ctx.save(); ctx.beginPath(); ctx.rect(0, BAND1, W, 1660 - BAND1); ctx.clip();
    ell(ctx, SX, SY, 640, 150 + op * 150, PAL.moss.t[1]); // body skin
    if (mx < SX + 560) egg(ctx, mx, SY, 170 * (0.6 + 0.4 * op), EGG, Math.PI / 2);
    const rk = oExp(inv(T('ribs', 'ribs') - 0.25, T('ribs', 'ribs') + 0.25, t));
    ctx.globalAlpha = rk; ribcage(ctx, 120, 960, SY, 170, op, mx, CREAM, INK); ctx.globalAlpha = 1;
    ctx.restore();
    const nk = oExp(inv(T('ribs', 'only') - 0.1, T('ribs', 'only') + 0.3, t));
    if (nk > 0) { rrect(ctx, 100, 1500, 520, 70, 35, P.t[0]); typeText(ctx, 'NO BREASTBONE', 135, 1548, F.mono(38), CREAM, nk); }
    if (t < B.stretch.s - 0.15) textBlock(ctx, t, T('ribs', 'and') - 0.1, { title: 'FREE RIBS', sub: 'JOINED ONLY TO THE SPINE', fg: CREAM, sfg: P.t[4], px: 230, tag: 'SPINE', tbg: INK, tfg: CREAM, tagAt: T('ribs', 'spine') });
    else textBlock(ctx, t, T('stretch', 'so') - 0.1, { title: 'STRETCH', sub: 'THE BODY WRAPS THE MEAL', fg: CREAM, sfg: P.t[4], px: 250 });
  };
  // 08 king snakes swallow snakes as long as themselves
  S.king = (ctx, t, lt, sc, i) => {
    const P = PAL.moss; base(ctx, sc, lt, i); stage(ctx, sc, lt, P.t[4]);
    const a = oExp(inv(T('king', 'king') - 0.2, T('king', 'king') + 0.3, t)), b = oExp(inv(T('king', 'other') - 0.2, T('king', 'snakes2') + 0.1, t));
    const L = 700, x0 = SX - L / 2 - 30;
    snake(ctx, lerp(-800, x0, a), lerp(-800, x0, a) + L, SY - 130, 70, 26, t * 2, INK, CREAM);
    // stripes on the king snake
    if (b > 0) snake(ctx, lerp(W + 100, x0, b), lerp(W + 100, x0, b) + L, SY + 130, 62, 22, t * 2 + 1, PAL.sand.t[2], INK);
    const lk = oExp(inv(T('long', 'long') - 0.2, T('long', 'themselves') + 0.2, t));
    if (lk > 0) { const y = SY + 320; seg(ctx, [x0, y], [lerp(x0, x0 + L + 80, lk), y], 12, P.fg); seg(ctx, [x0, y - 30], [x0, y + 30], 12, P.fg); if (lk > 0.95) seg(ctx, [x0 + L + 80, y - 30], [x0 + L + 80, y + 30], 12, P.fg);
      typeText(ctx, 'SAME LENGTH', SX, y + 90, F.mono(44), P.fg, lk, 'center'); }
    if (t < B.long.s - 0.15) textBlock(ctx, t, T('king', 'king') - 0.1, { title: 'KING SNAKES', sub: 'SWALLOW OTHER SNAKES', fg: CREAM, sfg: P.t[4], px: 200 });
    else { maskText(ctx, '1 : 1', 80, 560, F.en(900, 300), CREAM, inv(T('long', 'as') - 0.1, T('long', 'long') + 0.2, t), { ls: '-6px' }); maskText(ctx, 'AS LONG AS THEMSELVES', 88, 660, F.en(800, fitPx(ctx, 'AS LONG AS THEMSELVES', 910, 66, 800, '-1px')), P.t[4], inv(T('long', 'long') - 0.1, T('long', 'themselves') + 0.2, t), { ls: '-1px' }); }
  };
  // 09 ask: how big a meal could a snake swallow? size ladder of meals
  S.ask = (ctx, t, lt, sc, i) => {
    const P = PAL.sand; base(ctx, sc, lt, i);
    ctx.fillStyle = P.t[4]; ctx.fillRect(0, BAND1, W, 1660 - BAND1);
    const items = [[200, 1380, 60, 'egg'], [430, 1350, 90, 'mouse'], [700, 1300, 140, 'q']];
    items.forEach(([x, y, r, k], n) => { const at = T('ask', 'biggest') + n * 0.35, a = oBack(inv(at - 0.2, at + 0.15, t)); if (a <= 0) return;
      ctx.save(); ctx.translate(x, y); ctx.scale(a, a);
      if (k === 'egg') egg(ctx, 0, 0, r); else if (k === 'mouse') mouse(ctx, 0, 0, r * 0.7, PAL.moss.t[1], CREAM);
      else { disc(ctx, 0, 0, r * 1.4, PAL.rust.t[2]); ctx.font = F.en(900, 220); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = CREAM; ctx.fillText('?', 0, 12); }
      ctx.restore(); });
    snake(ctx, -40, 560, 1000, 70, 30, t * 2.5, PAL.moss.t[1], CREAM);
    textBlock(ctx, t, T('ask', 'so') - 0.1, { title: 'HOW BIG?', sub: 'TELL US IN THE COMMENTS', fg: INK, sfg: PAL.rust.t[1], px: 260 });
  };

  // ---------- grid transitions ----------
  const TR = 0.42;
  function drawScene(ctx, idx, t) { const sc = SC[idx]; S[sc.id](ctx, t, t - sc.t0, sc, idx); }
  function transClip(ctx, kind, u) {
    ctx.beginPath();
    if (kind === 'rows') { const rows = Math.ceil(HH / CELL); for (let j = 0; j < rows; j++) { const uu = ioExp(clamp(u * 1.6 - j * 0.6 / rows)); const w = W * uu; ctx.rect(j % 2 ? W - w : 0, j * CELL, w, CELL + 1); } }
    else if (kind === 'cols') { const cols = W / CELL; for (let i = 0; i < cols; i++) { const uu = ioExp(clamp(u * 1.6 - i * 0.6 / cols)); ctx.rect(i * CELL, 0, CELL + 1, HH * uu); } }
    else { const cols = W / CELL, rows = Math.ceil(HH / CELL); for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) { const uu = ioExp(clamp(u * 1.5 - ((i + j) % 4) * 0.12)); if (uu <= 0) continue; const cx = i * CELL, cy = j * CELL; ctx.moveTo(cx, cy); ctx.arc(cx, cy, CELL * 1.42 * uu, 0, Math.PI / 2); ctx.closePath(); } }
    ctx.clip();
  }
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < N - 1 && t >= SC[i + 1].t0 - TR / 2) i++;
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    if (i > 0 && t < SC[i].t0 + TR / 2) {
      const u = inv(SC[i].t0 - TR / 2, SC[i].t0 + TR / 2, t);
      drawScene(ctx, i - 1, t); ctx.save(); transClip(ctx, SC[i].tr, u); drawScene(ctx, i, t); ctx.restore();
    } else drawScene(ctx, i, t);
    ctx.restore();
    if (!GR || GR.width !== Wd) { GR = document.createElement('canvas'); GR.width = Wd; GR.height = Hd; const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  // ---------- sound: percussion spine, an accent on every cut, foley for each action ----------
  function scoreSound(k) {
    SC.forEach((sc, idx) => { if (idx === 0) return;
      k.play('whoosh', sc.t0 - 0.25, { dur: 0.35, gain: 0.45, top: 2600 });
      k.play('thud', sc.t0 + 0.05, { f: 110, gain: 0.55 });
      k.play('tock', sc.t0 + 0.05, { f: 520, gain: 0.35, minor: true }); });
    for (let tb = 0.2; tb < DURATION - 0.6; tb += 0.6) k.play('tock', tb, { f: (Math.round(tb / 0.6) % 4 === 0) ? 180 : 260, gain: 0.12, minor: true });
    // hook: gulp, brackets, your jaw crossed out
    k.play('thud', 0.25, { f: 90, gain: 0.7 });
    k.play('swish', T('hook', 'wider') - 0.1, { gain: 0.4 });
    k.play('pop', T('hook', 'heads'), { f: 300, gain: 0.5 });
    k.play('error', T('how', 'never'), { f: 'A3', gain: 0.3 });
    k.play('pop', T('how', 'how') - 0.05, { f: 640, gain: 0.7 });
    // myth stamp, cross
    k.play('stamp', T('myth', 'myth'), { gain: 0.6 });
    k.play('swish', T('unhinge', 'dont'), { gain: 0.4 }); k.play('impact', T('unhinge', 'jaws'), { gain: 0.5 });
    // jaw halves, ligament, spread
    k.play('click', T('halves', 'halves'), { gain: 0.35 }); k.play('ding', T('halves', 'chin'), { f: 'A4', gain: 0.25 });
    k.play('riser', T('lig', 'stretchy') - 0.1, { dur: 0.9, gain: 0.25 });
    k.play('swish', T('spread', 'spread') - 0.1, { gain: 0.45 }); k.play('thud', T('spread', 'apart'), { f: 140, gain: 0.45 });
    // walking jaws: alternate left/right taps
    [[T('grips', 'left'), -0.5], [T('grips', 'right'), 0.5], [T('left', 'left'), -0.5], [T('walk', 'walks'), 0.5], [T('walk', 'head'), -0.5], [T('walk', 'meal'), 0.5]].forEach(([tt, pan], n) => {
      k.play('tock', tt, { f: n % 2 ? 420 : 340, gain: 0.45, pan }); k.play('click', tt + 0.15, { gain: 0.25, minor: true, pan }); });
    // breathe?
    k.play('thud', T('breathe', 'full'), { f: 80, gain: 0.5 }); k.play('ding', T('breathe', 'breathe'), { f: 'E5', gain: 0.3 });
    // windpipe push + snorkel air
    k.play('swish', T('push', 'push') - 0.1, { gain: 0.45 }); k.play('pop', T('push', 'side'), { f: 500, gain: 0.45 });
    k.noise(T('snork', 'snorkel'), { dur: 1.2, color: 'pink', filter: 'bandpass', f: [[0, 600], [1.2, 1400]], q: 1.5, gain: 0.12, a: 0.2, verb: 0.2 });
    k.play('success', T('snork', 'snorkel') + 0.1, { f: 'C6', gain: 0.3 });
    // ribs
    for (let r = 0; r < 8; r++) k.play('tick', T('ribs', 'ribs') - 0.2 + r * 0.05, { gain: 0.25, minor: true });
    k.play('riser', T('stretch', 'whole'), { dur: 1.2, gain: 0.3 }); k.play('impact', T('stretch', 'meal'), { gain: 0.5 });
    // king snakes
    k.play('swish', T('king', 'king') - 0.2, { gain: 0.45, pan: -0.5 }); k.play('swish', T('king', 'other') - 0.2, { gain: 0.45, pan: 0.5 });
    k.play('impact', T('long', 'themselves'), { gain: 0.6 }); ['C5', 'E5', 'G5'].forEach((n, j) => k.play('ding', T('long', 'themselves') + j * 0.03, { f: n, gain: 0.22 }));
    // ask
    for (let n = 0; n < 3; n++) k.play('pop', T('ask', 'biggest') + n * 0.35, { f: 500 + n * 150, gain: 0.5 });
    k.play('ding', T('ask', 'swallow') + 0.3, { f: 'C6', gain: 0.3 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
