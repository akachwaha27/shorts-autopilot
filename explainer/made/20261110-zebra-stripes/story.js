// ================= Flat-Vector Science, vertical 1080x1920: "Why do zebras have stripes?" =================
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'hook', s: 0.25, e: 3.38, w: {zebra: 0.25, stripes: 0.71, stop: 1.35, n3: 1.72, out: 1.81, of: 2.09, n4: 2.28, fly: 2.37, landings: 2.64} },
    { id: 'see', s: 3.75, e: 4.9, w: {and: 3.75, you: 3.98, can: 4.21, see: 4.44, why: 4.67} },
    { id: 'africa', s: 5.29, e: 8.99, w: {in: 5.29, africa: 5.46, biting: 5.98, horseflies: 6.49, swarm: 7.35, grazing: 7.78, animals: 8.39} },
    { id: 'disease', s: 9.07, e: 12.11, w: {and: 9.07, their: 9.33, bites: 9.76, can: 10.2, spread: 10.46, nasty: 10.98, diseases: 11.42} },
    { id: 'brit', s: 12.47, e: 15.02, w: {so: 12.47, researchers: 12.63, in: 13.48, britain: 13.63, filmed: 14.17, flies: 14.64} },
    { id: 'buzz', s: 15.11, e: 17.25, w: {buzzing: 15.11, around: 15.65, zebras: 16.11, and: 16.56, horses: 16.79} },
    { id: 'both', s: 17.64, e: 20.26, w: {the: 17.64, flies: 17.89, flew: 18.31, up: 18.65, to: 18.82, both: 18.99, just: 19.33, as: 19.67, often: 19.83} },
    { id: 'quarter', s: 20.65, e: 23.91, w: {but: 20.65, they: 20.88, landed: 21.17, on: 21.62, zebras: 21.76, less: 22.21, than: 22.5, a: 22.8, quarter: 22.87, as: 23.39, often: 23.54} },
    { id: 'q', s: 24.33, e: 25.53, w: {so: 24.33, whats: 24.51, going: 24.93, on: 25.36} },
    { id: 'horse', s: 26.03, e: 29.21, w: {near: 26.03, a: 26.37, horse: 26.45, a2: 26.87, fly: 26.95, slows: 27.2, down: 27.62, for: 27.95, a3: 28.2, soft: 28.29, landing: 28.62} },
    { id: 'zeb', s: 29.63, e: 32.56, w: {near: 29.63, a: 29.92, zebra: 29.99, the: 30.34, stripes: 30.56, seem: 31.06, to: 31.34, scramble: 31.49, its: 32.06, eyes: 32.27} },
    { id: 'brake', s: 32.95, e: 33.93, w: {so: 32.95, it: 33.08, never: 33.21, brakes: 33.54} },
    { id: 'bump', s: 34.3, e: 36.62, w: {and: 34.3, it: 34.54, bumps: 34.7, right: 35.1, off: 35.5, or: 35.74, zooms: 35.9, past: 36.3} },
    { id: 'coats', s: 37.07, e: 39.3, w: {then: 37.07, they: 37.33, dressed: 37.58, horses: 38.03, in: 38.41, striped: 38.53, coats: 38.98} },
    { id: 'miss', s: 39.76, e: 41.42, w: {flies: 39.76, kept: 40.1, missing: 40.38, the: 40.86, coats: 41.07} },
    { id: 'heads', s: 41.79, e: 43.72, w: {but: 41.79, still: 41.98, landed: 42.3, on: 42.69, their: 42.82, bare: 43.14, heads: 43.4} },
    { id: 'genius', s: 44.13, e: 46.04, w: {honestly: 44.13, thats: 44.74, kind: 45.12, of: 45.43, genius: 45.58} },
    { id: 'other', s: 46.5, e: 50.31, w: {camouflage: 46.5, keeping: 47.3, cool: 47.85, the: 48.17, evidence: 48.41, for: 49.04, those: 49.28, is: 49.68, weaker: 49.84} },
    { id: 'end', s: 50.79, e: 53.12, w: {so: 50.79, would: 50.92, you: 51.23, wear: 51.42, stripes: 51.67, to: 52.11, your: 52.24, next: 52.49, picnic: 52.74} },  ];
  const B = Object.fromEntries(BEATS.map((b) => [b.id, b]));
  const T = (id, w) => B[id].w[w];
  const DURATION = +(BEATS[BEATS.length - 1].e + 1.0).toFixed(2);
  const CUTS = { africa: 5.08, study: 12.3, q: 24.1, horse: 25.8, zeb: 29.42, coats: 36.85, ideas: 43.95, end: 50.58 };

  // ---------- helpers ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { navy: '#1b2a5c', ink: '#1d1d3a', cream: '#fff6e6', sand: '#f2c66d', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', teal: '#1fb6a6', green: '#5cc96b', grass: '#7cc95a', brown: '#9a5b34', dbrown: '#4a2a17', white: '#ffffff', zw: '#f7f4ee', yellow: '#ffd23f', purple: '#7b5cff' };
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 26, col = 'rgba(20,20,60,0.16)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700, align = 'center') => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 48, padX = size * 0.7, h = o.h || size * 1.7, w = measure(ctx, s, size) + padX * 2;
    ctx.save(); ctx.translate(x, y); if (o.rot) ctx.rotate(o.rot); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 18);
    text(ctx, s, 0, 2, size, o.col || PAL.ink, o.weight || 700);
    ctx.restore();
  };
  const big = (ctx, s, x, y, size, col, k = 1, sh = 20) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col, 700), sh); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const hills = (ctx, y0, cols, seed = 0) => { cols.forEach((c, i) => { ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(0, HH); ctx.lineTo(0, y0 + i * 90); for (let x = 0; x <= W; x += 20) ctx.lineTo(x, y0 + i * 90 + Math.sin(x * 0.005 + i * 2 + seed) * 30 + Math.sin(x * 0.013 + i + seed) * 12); ctx.lineTo(W, HH); ctx.closePath(); ctx.fill(); }); };
  const cross = (ctx, x, y, r, col = PAL.red, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.strokeStyle = col; ctx.lineWidth = r * 0.32; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-r, -r); ctx.lineTo(r, r); ctx.moveTo(r, -r); ctx.lineTo(-r, r); ctx.stroke(); ctx.restore(); };
  const check = (ctx, x, y, r, col = PAL.green, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.strokeStyle = col; ctx.lineWidth = r * 0.32; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(-r, 0); ctx.lineTo(-r * 0.3, r * 0.7); ctx.lineTo(r, -r * 0.7); ctx.stroke(); ctx.restore(); };
  const burst = (ctx, x, y, t, t0, col = PAL.yellow, r0 = 60) => { if (t < t0 || t > t0 + 0.6) return; const u = ph(t, t0, t0 + 0.6); ctx.save(); ctx.globalAlpha = 1 - u; ctx.strokeStyle = col; ctx.lineWidth = 12; ctx.lineCap = 'round'; const r = r0 + 120 * H.ease.out(u); for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; ctx.beginPath(); ctx.moveTo(x + Math.cos(a) * r, y + Math.sin(a) * r); ctx.lineTo(x + Math.cos(a) * (r + 36), y + Math.sin(a) * (r + 36)); ctx.stroke(); } ctx.restore(); };

  // ---------- the horse / zebra (side view, facing right, origin on the ground under the body) ----------
  let EQ = null, HEADP = null;
  const equinePath = () => {
    if (EQ) return EQ;
    const p = new Path2D();
    p.ellipse(0, -235, 205, 95, 0, 0, Math.PI * 2);
    p.moveTo(105, -295); p.lineTo(198, -432); p.lineTo(262, -405); p.lineTo(208, -205); p.closePath();
    const hp = new Path2D(); hp.moveTo(-80 + 30, -32); hp.arcTo(80, -32, 80, 32, 30); hp.arcTo(80, 32, -80, 32, 30); hp.arcTo(-80, 32, -80, -32, 30); hp.arcTo(-80, -32, 80, -32, 30); hp.closePath();
    p.addPath(hp, new DOMMatrix().translate(282, -378).rotate(46));
    p.moveTo(212, -428); p.lineTo(222, -486); p.lineTo(246, -424); p.closePath();
    [-155, -108, 112, 160].forEach((x) => { p.moveTo(x - 18, -220); p.lineTo(x + 18, -220); p.lineTo(x + 15, -14); p.lineTo(x - 15, -14); p.closePath(); });
    EQ = p; return p;
  };
  const MANE = [[100, -300], [196, -440], [176, -458], [80, -312]];
  // coat: 'zebra' | 'horse' | 'blanket' ; o.stripes = 0..1 left-to-right reveal of stripes ; o.blanket = 0..1
  const equine = (ctx, x, y, s, coat, o = {}) => {
    const p = equinePath(), flip = o.flip ? -1 : 1;
    ctx.save(); ctx.translate(x, y); ctx.scale(s * flip, s);
    const base = coat === 'zebra' ? PAL.zw : PAL.brown, dark = coat === 'zebra' ? PAL.ink : PAL.dbrown;
    // tail
    const sw = Math.sin((o.t || 0) * (o.swish ? 7 : 2)) * (o.swish ? 0.35 : 0.08);
    ctx.save(); ctx.translate(-198, -270); ctx.rotate(sw); ctx.strokeStyle = coat === 'zebra' ? PAL.zw : dark; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(-40, 60, -30, 150); ctx.stroke(); ctx.fillStyle = dark; ctx.beginPath(); ctx.ellipse(-30, 165, 18, 34, 0.1, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    longShadow(ctx, (c) => { ctx.fillStyle = c || base; ctx.fill(p); ctx.fillStyle = c || dark; ctx.beginPath(); MANE.forEach(([a, b], i) => (i ? ctx.lineTo(a, b) : ctx.moveTo(a, b))); ctx.closePath(); ctx.fill(); }, o.sh ?? 22);
    if (coat === 'zebra') {
      const rev = o.stripes ?? 1;
      if (rev > 0) {
        ctx.save(); ctx.clip(p); ctx.beginPath(); ctx.rect(-260, -520, 680 * rev, 560); ctx.clip();
        ctx.fillStyle = PAL.ink;
        // body: vertical bands that curve with the belly
        ctx.save(); ctx.beginPath(); ctx.rect(-260, -340, 400, 130); ctx.clip();
        for (let i = -6; i <= 3; i++) { const x0 = i * 44 + 8; ctx.beginPath(); ctx.moveTo(x0 - 11, -345); ctx.quadraticCurveTo(x0 + 18, -240, x0 - 6, -130); ctx.lineTo(x0 + 14, -130); ctx.quadraticCurveTo(x0 + 40, -240, x0 + 11, -345); ctx.closePath(); ctx.fill(); }
        ctx.restore();
        // rump: curved stripes
        ctx.save(); ctx.beginPath(); ctx.rect(-260, -340, 120, 130); ctx.clip(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 20; for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.arc(-200, -230, 40 + i * 42, -1.2, 1.2); ctx.stroke(); } ctx.restore();
        // neck and head: bands across the neck
        ctx.save(); ctx.beginPath(); ctx.rect(140, -520, 260, 330); ctx.clip(); ctx.translate(210, -330); ctx.rotate(0.55); for (let i = -8; i <= 8; i++) { ctx.fillRect(-200, i * 34, 400, 16); } ctx.restore();
        // legs: horizontal bands
        ctx.save(); ctx.beginPath(); ctx.rect(-260, -210, 680, 200); ctx.clip(); for (let yy = -200; yy < 0; yy += 28) ctx.fillRect(-260, yy, 680, 13); ctx.restore();
        ctx.restore();
      }
      // dark muzzle
      ctx.save(); ctx.translate(282, -378); ctx.rotate(46 * Math.PI / 180); ctx.fillStyle = PAL.ink; rr(ctx, 40, -32, 40, 64, 26); ctx.fill(); ctx.restore();
      // white bands in the mane
      ctx.save(); ctx.beginPath(); MANE.forEach(([a, b], i) => (i ? ctx.lineTo(a, b) : ctx.moveTo(a, b))); ctx.closePath(); ctx.clip(); ctx.strokeStyle = PAL.zw; ctx.lineWidth = 9; for (let i = 0; i < 8; i++) { const u = i / 8; const mx = H.lerp(90, 188, u), my = H.lerp(-306, -449, u); ctx.beginPath(); ctx.moveTo(mx + 30, my + 18); ctx.lineTo(mx - 30, my - 18); ctx.stroke(); } ctx.restore();
    } else {
      ctx.save(); ctx.translate(282, -378); ctx.rotate(46 * Math.PI / 180); ctx.fillStyle = '#7a4527'; rr(ctx, 40, -32, 40, 64, 26); ctx.fill(); ctx.restore();
      ctx.fillStyle = '#f3ead8'; ctx.beginPath(); ctx.ellipse(250, -392, 10, 26, 0.8, 0, Math.PI * 2); ctx.fill(); // blaze
      if (coat === 'blanket' && (o.blanket ?? 1) > 0) {
        const bk = o.blanket ?? 1;
        ctx.save(); ctx.translate(0, -60 * (1 - bk)); ctx.globalAlpha = Math.min(1, bk * 1.5);
        const bp = new Path2D(); bp.moveTo(-200, -270); bp.quadraticCurveTo(-30, -350, 150, -300); bp.lineTo(190, -255); bp.lineTo(170, -150); bp.quadraticCurveTo(0, -125, -195, -165); bp.closePath();
        longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.zw; ctx.fill(bp); }, 10, 'rgba(20,20,60,0.2)');
        ctx.save(); ctx.clip(bp); ctx.fillStyle = PAL.ink; for (let i = -6; i <= 5; i++) { const x0 = i * 40; ctx.beginPath(); ctx.moveTo(x0 - 10, -360); ctx.lineTo(x0 + 10, -360); ctx.lineTo(x0 + 22, -120); ctx.lineTo(x0 + 2, -120); ctx.closePath(); ctx.fill(); } ctx.restore();
        ctx.fillStyle = PAL.red; ctx.beginPath(); ctx.moveTo(-200, -270); ctx.quadraticCurveTo(-30, -350, 150, -300); ctx.lineTo(152, -290); ctx.quadraticCurveTo(-30, -338, -200, -258); ctx.closePath(); ctx.fill();
        ctx.restore();
      }
    }
    // hooves, eye, nostril, ear tip
    ctx.fillStyle = PAL.ink; [-155, -108, 112, 160].forEach((xx) => { rr(ctx, xx - 17, -24, 34, 24, 6); ctx.fill(); });
    circle(ctx, 258, -398, 10, PAL.ink); circle(ctx, 261, -401, 3.5, PAL.white);
    circle(ctx, 330, -330, 6, coat === 'zebra' ? '#555' : PAL.dbrown);
    ctx.restore();
  };
  // world position of a point given in equine-local coordinates
  const eqPt = (x, y, s, lx, ly, flip) => [x + lx * s * (flip ? -1 : 1), y + ly * s];

  // ---------- a horsefly: grey body, huge green eyes, buzzing wings ----------
  const fly = (ctx, x, y, s, ang, t, o = {}) => {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.scale(s, s);
    if (o.lines) { ctx.strokeStyle = 'rgba(255,255,255,0.7)'; ctx.lineWidth = 5; ctx.lineCap = 'round'; for (let i = -1; i <= 1; i++) { ctx.beginPath(); ctx.moveTo(-60, i * 12); ctx.lineTo(-60 - 60 * o.lines, i * 12); ctx.stroke(); } }
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; for (let i = -1; i <= 1; i++) { ctx.beginPath(); ctx.moveTo(i * 10, 6); ctx.lineTo(i * 14 - 4, 22); ctx.stroke(); }
    ctx.fillStyle = '#4b4b5e'; ctx.beginPath(); ctx.ellipse(-14, 0, 30, 14, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#6b6b80'; for (let i = 0; i < 3; i++) { ctx.fillRect(-36 + i * 13, -12, 5, 24); }
    ctx.fillStyle = '#3a3a48'; ctx.beginPath(); ctx.ellipse(14, 0, 14, 12, 0, 0, Math.PI * 2); ctx.fill();
    circle(ctx, 28, -5, 10, '#3fd17a'); circle(ctx, 28, 6, 10, '#2fb36a'); circle(ctx, 31, -8, 3, 'rgba(255,255,255,0.8)');
    const fl = o.still ? 0.3 : Math.sin(t * 80 + x * 0.01) * 0.5 + 0.5;
    ctx.fillStyle = 'rgba(220,240,255,0.65)'; ctx.beginPath(); ctx.ellipse(-6, -12 - 6 * fl, 28, 9 + 4 * fl, -0.35, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(220,240,255,0.45)'; ctx.beginPath(); ctx.ellipse(-10, 12 + 6 * fl, 26, 8 + 4 * fl, 0.35, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  };
  // orbiting fly around a centre
  const orbitFly = (ctx, t, cx, cy, rx, ry, sp, ph0, s) => { const a = t * sp + ph0, x = cx + Math.cos(a) * rx + Math.sin(a * 2.3) * 20, y = cy + Math.sin(a) * ry + Math.cos(a * 1.7) * 15; const dx = -Math.sin(a) * rx * sp, dy = Math.cos(a) * ry * sp; fly(ctx, x, y, s, Math.atan2(dy, dx), t); };
  // speed gauge
  const gauge = (ctx, x, y, r, v, k, label) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; ctx.beginPath(); ctx.arc(0, 0, r, Math.PI, 0); ctx.lineTo(r, 30); ctx.lineTo(-r, 30); ctx.closePath(); ctx.fill(); }, 14);
    const seg = [[PAL.green, 0, 0.4], [PAL.yellow, 0.4, 0.7], [PAL.red, 0.7, 1]]; seg.forEach(([c, a, b]) => { ctx.strokeStyle = c; ctx.lineWidth = 22; ctx.beginPath(); ctx.arc(0, 0, r - 30, Math.PI + a * Math.PI, Math.PI + b * Math.PI); ctx.stroke(); });
    const a = Math.PI + v * Math.PI; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * (r - 50), Math.sin(a) * (r - 50)); ctx.stroke(); circle(ctx, 0, 0, 16, PAL.ink);
    text(ctx, label, 0, -r * 0.36, 34, PAL.ink, 700); ctx.restore(); };
  const header = (ctx, t) => { const k = EO(t, CUTS.africa + 0.2, CUTS.africa + 0.7) * (1 - EO(t, CUTS.end - 0.2, CUTS.end + 0.2)); if (k <= 0) return; ctx.save(); ctx.globalAlpha = k; pill(ctx, 'WHY STRIPES?', 540, 212, { size: 38, bg: PAL.ink, col: PAL.cream, sh: 8 }); ctx.restore(); };
  const savannaBg = (ctx, c0, c1, g1, g2, y0 = 1260) => { sky(ctx, c0, c1); hills(ctx, y0, [g1, g2]); };
  const acacia = (ctx, x, y, s, col) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = col; ctx.fillRect(-12, -260, 24, 260); ctx.beginPath(); ctx.moveTo(0, -150); ctx.lineTo(-90, -270); ctx.lineTo(-76, -278); ctx.lineTo(4, -180); ctx.fill(); ctx.beginPath(); ctx.ellipse(-30, -300, 190, 44, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(60, -330, 120, 34, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore(); };
  const germ = (ctx, x, y, r, col, t, k) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.rotate(t * 0.8); ctx.scale(k, k); ctx.strokeStyle = col; ctx.lineWidth = 8; ctx.lineCap = 'round'; for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; ctx.beginPath(); ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r); ctx.lineTo(Math.cos(a) * (r + 18), Math.sin(a) * (r + 18)); ctx.stroke(); circle(ctx, Math.cos(a) * (r + 20), Math.sin(a) * (r + 20), 7, col); } circle(ctx, 0, 0, r, col); circle(ctx, -r * 0.3, -r * 0.2, r * 0.2, 'rgba(255,255,255,0.5)'); ctx.restore(); };

  // ---------- scenes ----------
  const S = {};
  // fly path that hits a point at tc then bounces off (zebra) or decelerates and lands (horse)
  const flyHit = (ctx, t, from, to, t0, tc, mode, s, back) => {
    if (t < t0) return null;
    if (t <= tc) { const u = ph(t, t0, tc), e = mode === 'land' ? H.ease.out(u) : u; const x = H.lerp(from[0], to[0], e), y = H.lerp(from[1], to[1], e) - Math.sin(u * Math.PI) * 40; fly(ctx, x, y, s, Math.atan2(to[1] - from[1], to[0] - from[0]), t, { lines: mode === 'land' ? 0 : 0.8 }); return null; }
    if (mode === 'land') { fly(ctx, to[0], to[1], s, Math.atan2(to[1] - from[1], to[0] - from[0]) * 0.3, t, { still: true }); return 'landed'; }
    const u = ph(t, tc, tc + 0.8); if (u >= 1) return 'gone'; const bx = back || [from[0], from[1] - 300];
    fly(ctx, H.lerp(to[0], bx[0], H.ease.out(u)), H.lerp(to[1], bx[1], H.ease.out(u)), s, u * 12, t); return 'bounced';
  };

  S.hook = (ctx, t) => {
    savannaBg(ctx, '#8fd8ff', '#fff1c9', '#e8c56a', '#d8a94c', 1300);
    circle(ctx, 880, 820, 90, '#fff3b0');
    const zx = 474, zy = 1420, zs = 1.1;
    equine(ctx, zx, zy, zs, 'zebra', { t, stripes: EO(t, T('hook', 'stripes') - 0.15, T('hook', 'stripes') + 0.5), swish: true });
    // four flies try to land: three bounce off, one gets through
    const targets = [[-60, -260], [60, -220], [150, -260], [-150, -230]];
    const froms = [[-120, 900], [1200, 1000], [1220, 700], [-140, 1250]];
    const hits = [T('hook', 'n3') - 0.05, T('hook', 'out') + 0.15, T('hook', 'of') + 0.1, T('hook', 'n4') + 0.15];
    targets.forEach((tg, i) => { const to = eqPt(zx, zy, zs, tg[0], tg[1]); flyHit(ctx, t, froms[i], to, T('hook', 'stop') - 0.3 + i * 0.12, hits[i], i === 3 ? 'land' : 'hit', 1.2, [to[0] + (i % 2 ? 300 : -300), to[1] - 380]); if (i < 3) burst(ctx, to[0], to[1], t, hits[i], PAL.yellow, 30); });
    big(ctx, 'ZEBRA STRIPES', 540, 360, 104, PAL.ink, pop(t, T('hook', 'zebra') - 0.15));
    big(ctx, '3 OUT OF 4', 540, 520, 150, PAL.orange, pop(t, T('hook', 'n3') - 0.15) * bump(t, T('hook', 'n4')), 24);
    pill(ctx, 'FLY LANDINGS STOPPED', 540, 680, { k: pop(t, T('hook', 'landings') - 0.15), bg: PAL.ink, col: PAL.cream, size: 50 });
    // tally row
    for (let i = 0; i < 4; i++) { const k = pop(t, hits[i]); if (k <= 0.01) continue; const x = 270 + i * 180, y = 1530; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => circle(ctx, 0, 0, 62, c || (i < 3 ? PAL.cream : '#ffd9d9')), 12); fly(ctx, 0, 0, 0.9, 0, t, { still: true }); ctx.restore(); if (i < 3) cross(ctx, x, y, 44, PAL.red, k); }
    pill(ctx, 'SEE WHY', 540, 1620 - 0, { k: pop(t, T('see', 'see') - 0.15), bg: PAL.orange, col: PAL.white, size: 44, h: 76 });
  };
  S.africa = (ctx, t) => {
    savannaBg(ctx, '#ff9a4a', '#ffd27a', '#c9873a', '#b06f2b', 1280);
    circle(ctx, 300, 700, 140, '#ffe08a');
    acacia(ctx, 880, 1300, 1.2, '#5a3a1e');
    const zx = 420, zy = 1460, zs = 0.85;
    equine(ctx, zx, zy, zs, 'zebra', { t, swish: true, flip: false });
    // swarm around the zebra
    const sw = EO(t, T('africa', 'swarm') - 0.2, T('africa', 'swarm') + 0.6);
    for (let i = 0; i < 9; i++) { if (sw * 9 < i) continue; orbitFly(ctx, t, zx + 60, zy - 250, 300, 170, 1.4 + (i % 3) * 0.3, i * 0.7, 0.9); }
    // hero horsefly
    const hk = pop(t, T('africa', 'horseflies') - 0.2);
    if (hk > 0.01) { const hx = 600, hy = 820 + Math.sin(t * 3) * 14; ctx.save(); ctx.translate(hx, hy); ctx.scale(hk, hk); longShadow(ctx, (c) => circle(ctx, 0, 0, 150, c || 'rgba(255,255,255,0.85)'), 16); fly(ctx, 0, 0, 3.0, -0.1, t); ctx.restore(); }
    pill(ctx, 'AFRICA', 540, 380, { k: pop(t, T('africa', 'africa') - 0.15), bg: PAL.ink, col: PAL.cream, size: 60 });
    pill(ctx, 'BITING HORSEFLY', 540, 1040, { k: pop(t, T('africa', 'biting') - 0.15), bg: PAL.red, col: PAL.white, size: 50 });
    // bites and disease
    const bk = pop(t, T('disease', 'bites') - 0.15);
    if (bk > 0.01) { const [bx, by] = eqPt(zx, zy, zs, 20, -250); ctx.save(); ctx.globalAlpha = bk; circle(ctx, bx, by, 26 + 6 * Math.sin(t * 8), PAL.red); ctx.restore(); pill(ctx, 'BITE!', bx + 10, by - 120, { k: bk * bump(t, T('disease', 'bites')), bg: PAL.yellow, size: 52 }); }
    const gk = pop(t, T('disease', 'spread') - 0.15);
    [[180, 1150], [880, 1500], [260, 1580], [800, 1150], [560, 1250]].forEach(([gx, gy], i) => germ(ctx, gx, gy, 34, i % 2 ? '#8be04e' : '#c06cff', t, pop(t, T('disease', 'spread') - 0.15 + i * 0.12)));
    pill(ctx, 'SPREAD DISEASE', 540, 1620, { k: pop(t, T('disease', 'diseases') - 0.15), bg: '#6d3bd1', col: PAL.white, size: 52, h: 80 });
    if (gk < 0) return;
  };
  S.study = (ctx, t) => {
    sky(ctx, '#bfe8ff', '#eaf8ff'); hills(ctx, 820, ['#9ad66b', '#7cc95a']);
    // fence
    ctx.fillStyle = '#c99a62'; for (let x = 30; x < W; x += 150) ctx.fillRect(x, 840, 18, 110); ctx.fillRect(0, 860, W, 14); ctx.fillRect(0, 905, W, 14);
    // ground band for the chart
    ctx.fillStyle = '#eaf6df'; ctx.fillRect(0, 1130, W, HH);
    const hx = 250, zx = 760, gy = 1090, s = 0.62;
    equine(ctx, hx, gy, s, 'horse', { t });
    equine(ctx, zx, gy, s, 'zebra', { t, swish: true });
    pill(ctx, 'BRITISH FARM', 540, 360, { k: pop(t, T('brit', 'britain') - 0.15), bg: PAL.ink, col: PAL.cream, size: 52 });
    // camera filming
    const ck = pop(t, T('brit', 'filmed') - 0.15);
    if (ck > 0.01) { ctx.save(); ctx.translate(540, 520); ctx.scale(ck, ck); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.ink; rr(ctx, -80, -50, 140, 100, 18); ctx.fill(); ctx.beginPath(); ctx.moveTo(60, -20); ctx.lineTo(110, -45); ctx.lineTo(110, 45); ctx.lineTo(60, 20); ctx.closePath(); ctx.fill(); }, 14); circle(ctx, -40, -20, 14, Math.sin(t * 6) > 0 ? PAL.red : '#802020'); ctx.restore(); }
    // flies: orbit both, then land on the horse but bounce off the zebra
    const land = T('quarter', 'landed');
    for (let i = 0; i < 4; i++) {
      const [hcx, hcy] = eqPt(hx, gy, s, 20, -260), [zcx, zcy] = eqPt(zx, gy, s, 20, -260);
      if (t < T('buzz', 'buzzing') - 0.2) continue;
      if (t < land + i * 0.15) { orbitFly(ctx, t, hcx, hcy, 190, 120, 1.6 + i * 0.2, i * 1.6, 0.8); orbitFly(ctx, t, zcx, zcy, 190, 120, 1.7 + i * 0.2, i * 1.6 + 0.5, 0.8); }
      else { const lp = [[-60, -250], [30, -220], [100, -270], [-120, -230]][i]; const [lx, ly] = eqPt(hx, gy, s, lp[0], lp[1]); fly(ctx, lx, ly, 0.8, 0.2, t, { still: true });
        if (i < 3) { const u = ph(t, land + i * 0.15, land + i * 0.15 + 0.9); if (u < 1) fly(ctx, zcx + Math.cos(i * 2) * 90 * (1 + 4 * u), zcy - 80 - 400 * H.ease.out(u), 0.8, u * 10, t); }
        else orbitFly(ctx, t, zcx, zcy, 200, 130, 1.8, 1, 0.8); }
    }
    // chart
    const ck2 = pop(t, T('buzz', 'buzzing') - 0.15);
    if (ck2 > 0.01) {
      ctx.save(); ctx.globalAlpha = Math.min(1, ck2);
      const bar = (y, v, coat, lbl) => { const x0 = 230, wmax = 640; circle(ctx, 150, y, 32, coat === 'zebra' ? PAL.zw : PAL.brown); if (coat === 'zebra') { ctx.save(); ctx.beginPath(); ctx.arc(150, y, 32, 0, 7); ctx.clip(); ctx.fillStyle = PAL.ink; for (let i = -3; i <= 3; i++) ctx.fillRect(150 + i * 16 - 4, y - 40, 8, 80); ctx.restore(); }
        ctx.fillStyle = 'rgba(29,29,58,0.1)'; rr(ctx, x0, y - 26, wmax, 52, 26); ctx.fill();
        if (v > 0.01) { ctx.fillStyle = coat === 'zebra' ? PAL.ink : PAL.brown; rr(ctx, x0, y - 26, Math.max(52, wmax * v), 52, 26); ctx.fill(); } };
      const ap = EO(t, T('both', 'flew') - 0.1, T('both', 'both') + 0.3);
      text(ctx, 'FLIES THAT FLEW UP', 540, 1210, 46, PAL.ink, 700);
      bar(1290, ap * 0.9, 'horse'); bar(1370, ap * 0.9, 'zebra');
      pill(ctx, 'SAME!', 870, 1210, { k: pop(t, T('both', 'often') - 0.2), bg: PAL.green, col: PAL.white, size: 40, sh: 8 });
      const lk = EO(t, T('quarter', 'landed') - 0.1, T('quarter', 'landed') + 0.5);
      text(ctx, 'FLIES THAT LANDED', 540, 1460, 46, PAL.ink, lk > 0 ? 700 : 700);
      bar(1540, lk * 0.9, 'horse'); bar(1620, lk * 0.9 * H.lerp(1, 0.2, EO(t, T('quarter', 'less') - 0.1, T('quarter', 'quarter') + 0.2)), 'zebra');
      ctx.restore();
    }
    const qk = pop(t, T('quarter', 'quarter') - 0.15) * bump(t, T('quarter', 'quarter'));
    if (qk > 0.01) { pill(ctx, '< 1/4', 690, 1590, { k: qk, bg: PAL.orange, col: PAL.white, size: 120, h: 170 }); }
  };
  S.q = (ctx, t) => {
    sky(ctx, '#ffe066', '#ffb347');
    for (let i = 0; i < 12; i++) { ctx.fillStyle = i % 2 ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0)'; ctx.beginPath(); ctx.moveTo(540, 960); const a = i / 12 * Math.PI * 2 + t * 0.2; ctx.arc(540, 960, 1600, a, a + Math.PI / 6); ctx.closePath(); ctx.fill(); }
    big(ctx, '?', 540, 900, 520, PAL.ink, pop(t, CUTS.q + 0.05) * (1 + 0.04 * Math.sin(t * 6)), 30);
    big(ctx, "WHAT'S", 540, 1330, 120, PAL.cream, pop(t, T('q', 'whats') - 0.15));
    big(ctx, 'GOING ON?', 540, 1470, 120, PAL.cream, pop(t, T('q', 'going') - 0.15));
    orbitFly(ctx, t, 540, 880, 300, 200, 2.5, 0, 1.3);
  };
  // big close-up of a flank: horse or zebra
  const flank = (ctx, coat, t) => { equine(ctx, 400, 2350, 3.0, coat, { t, sh: 0 }); };
  S.horse = (ctx, t) => {
    sky(ctx, '#a7e0ff', '#e9f8ff'); hills(ctx, 1100, ['#9ad66b']);
    flank(ctx, 'horse', t);
    pill(ctx, 'NEAR A HORSE', 540, 360, { k: pop(t, T('horse', 'horse') - 0.15), bg: PAL.brown, col: PAL.white, size: 56 });
    const v = H.lerp(0.85, 0.12, EI(t, T('horse', 'slows') - 0.1, T('horse', 'landing') + 0.1));
    gauge(ctx, 800, 700, 180, v, pop(t, T('horse', 'fly') - 0.2), 'FLY SPEED');
    // the fly curves in and slows, its trail dots get closer together
    const t0 = T('horse', 'fly') - 0.3, tc = T('horse', 'landing') + 0.05; const from = [80, 620], to = [460, 1420];
    const pos = (tt) => { const u = H.ease.out(ph(tt, t0, tc)); return [H.lerp(from[0], to[0], u) + Math.sin(u * Math.PI) * 160, H.lerp(from[1], to[1], u)]; };
    if (t > t0) { for (let j = 1; j <= 10; j++) { const tt = t - j * 0.14; if (tt < t0) break; const [px, py] = pos(tt); circle(ctx, px, py, 9, 'rgba(29,29,58,0.35)'); } const [fx, fy] = pos(t), [gx, gy] = pos(t + 0.05); fly(ctx, fx, fy, 2.2, t > tc ? 0.15 : Math.atan2(gy - fy, gx - fx), t, { still: t > tc }); }
    pill(ctx, 'SLOWS DOWN', 300, 980, { k: pop(t, T('horse', 'slows') - 0.15), bg: PAL.yellow, size: 54 });
    pill(ctx, 'SOFT LANDING', 520, 1560, { k: pop(t, T('horse', 'soft') - 0.15), bg: PAL.green, col: PAL.white, size: 56, h: 90 });
    check(ctx, 880, 1560, 40, PAL.green, pop(t, T('horse', 'landing') - 0.05));
  };
  S.zeb = (ctx, t) => {
    sky(ctx, '#7fd0ff', '#d9f3ff'); hills(ctx, 1100, ['#e8c56a']);
    flank(ctx, 'zebra', t);
    pill(ctx, 'NEAR A ZEBRA', 540, 360, { k: pop(t, T('zeb', 'zebra') - 0.15), bg: PAL.ink, col: PAL.cream, size: 56 });
    // the fly's-eye view: stripes that shimmer and wobble
    const vk = pop(t, T('zeb', 'scramble') - 0.2, T('brake', 'never') - 0.1);
    if (vk > 0.01) { ctx.save(); ctx.translate(540, 820); ctx.scale(vk, vk);
      longShadow(ctx, (c) => circle(ctx, 0, 0, 260, c || PAL.cream), 18);
      ctx.save(); ctx.beginPath(); ctx.arc(0, 0, 236, 0, Math.PI * 2); ctx.clip(); ctx.fillStyle = PAL.zw; ctx.fillRect(-240, -240, 480, 480);
      ctx.fillStyle = PAL.ink; for (let yy = -240; yy < 240; yy += 8) for (let i = -8; i <= 8; i++) { const x0 = i * 44 + Math.sin(yy * 0.03 + t * 9 + i) * 26 + Math.sin(t * 5) * 20; ctx.fillRect(x0, yy, 20, 8); }
      for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2 + t * 3; ctx.fillStyle = `hsla(${(i * 50 + t * 300) % 360},90%,60%,0.25)`; ctx.beginPath(); ctx.arc(Math.cos(a) * 90, Math.sin(a) * 90, 80, 0, 7); ctx.fill(); }
      ctx.restore(); ctx.restore();
      pill(ctx, "FLY'S VIEW", 540, 1130, { k: vk, bg: PAL.purple, col: PAL.white, size: 48 });
      pill(ctx, 'SCRAMBLED!', 540, 520, { k: pop(t, T('zeb', 'scramble') + 0.1, T('brake', 'never') - 0.1), bg: PAL.yellow, size: 52, rot: -0.06 }); }
    pill(ctx, 'STRIPES', 540, 1500, { k: pop(t, T('zeb', 'stripes') - 0.15, T('zeb', 'scramble') - 0.2), bg: PAL.cream, size: 60 });
    // gauge stays pinned high: it never brakes
    gauge(ctx, 800, 700, 180, 0.86 + Math.sin(t * 20) * 0.02, pop(t, T('brake', 'so') - 0.2), 'FLY SPEED');
    pill(ctx, 'NEVER BRAKES', 300, 980, { k: pop(t, T('brake', 'never') - 0.15), bg: PAL.red, col: PAL.white, size: 54 });
    // fly 1 bumps off the flank
    const tc = T('bump', 'bumps');
    const st = flyHit(ctx, t, [-80, 760], [470, 1420], T('brake', 'so') - 0.1, tc, 'hit', 2.2, [-200, 1150]);
    burst(ctx, 470, 1420, t, tc, PAL.yellow, 50);
    pill(ctx, 'BONK!', 560, 1250, { k: pop(t, tc - 0.05, T('bump', 'or')), bg: PAL.yellow, size: 70, rot: 0.08 });
    // fly 2 zooms straight past
    const z0 = T('bump', 'zooms') - 0.2, z1 = z0 + 0.7;
    if (t > z0 && t < z1 + 0.1) { const u = ph(t, z0, z1); fly(ctx, H.lerp(1180, -120, u), H.lerp(1180, 1300, u), 2.2, Math.PI + 0.1, t, { lines: 1 }); }
    pill(ctx, 'ZOOMS PAST', 700, 1600, { k: pop(t, T('bump', 'zooms') - 0.15), bg: PAL.blue, col: PAL.white, size: 54, h: 88 });
    if (st === null) return;
  };
  S.coats = (ctx, t) => {
    sky(ctx, '#bfe8ff', '#f0fbff'); hills(ctx, 1150, ['#9ad66b', '#7cc95a']);
    const x = 470, y = 1420, s = 1.25;
    equine(ctx, x, y, s, 'blanket', { t, blanket: EO(t, T('coats', 'striped') - 0.3, T('coats', 'coats') + 0.1) });
    pill(ctx, 'HORSE IN A', 540, 360, { k: pop(t, T('coats', 'dressed') - 0.15), bg: PAL.ink, col: PAL.cream, size: 52 });
    pill(ctx, 'STRIPED COAT', 540, 470, { k: pop(t, T('coats', 'striped') - 0.15), bg: PAL.cream, size: 64 });
    // flies miss the coat
    const m0 = T('miss', 'flies') - 0.4;
    const coatT = [[-120, -250], [0, -300], [100, -240], [-40, -200]];
    const froms = [[-120, 1000], [300, 620], [1200, 900], [-100, 1300]];
    coatT.forEach((p, i) => { const to = eqPt(x, y, s, p[0], p[1]); const tc = m0 + 0.5 + i * 0.3; flyHit(ctx, t, froms[i], to, m0 + i * 0.3, tc, 'hit', 1.3, [to[0] + (i % 2 ? 260 : -260), to[1] - 420]); burst(ctx, to[0], to[1], t, tc, PAL.yellow, 26); });
    pill(ctx, 'MISS!', 260, 1560, { k: pop(t, T('miss', 'missing') - 0.15), bg: PAL.yellow, size: 60, h: 92 });
    // but they land on the bare head
    const headT = [[300, -350], [250, -410], [330, -310]];
    headT.forEach((p, i) => { const to = eqPt(x, y, s, p[0], p[1]); flyHit(ctx, t, [1200, 700 + i * 160], to, T('heads', 'but') - 0.4 + i * 0.15, T('heads', 'landed') + i * 0.12, 'land', 1.3); });
    pill(ctx, 'HEAD: STILL BITTEN', 640, 640, { k: pop(t, T('heads', 'bare') - 0.15), bg: PAL.red, col: PAL.white, size: 50 });
  };
  S.ideas = (ctx, t) => {
    sky(ctx, '#1d6f6a', '#22b3a3');
    for (let i = -4; i < 14; i++) { ctx.fillStyle = 'rgba(255,255,255,0.05)'; ctx.save(); ctx.translate(i * 120, 0); ctx.transform(1, 0, 0.3, 1, 0, 0); ctx.fillRect(0, 0, 50, HH); ctx.restore(); }
    big(ctx, 'GENIUS!', 540, 430, 150, PAL.yellow, pop(t, T('genius', 'genius') - 0.25) * bump(t, T('genius', 'genius')), 24);
    burst(ctx, 540, 430, t, T('genius', 'genius'), PAL.cream, 200);
    const card = (y, label, col, fg, k, icon, dim) => { if (k <= 0.01) return; ctx.save(); ctx.translate(540, y); ctx.scale(k, k); ctx.globalAlpha = 1 - dim * 0.5; longShadow(ctx, (c) => { ctx.fillStyle = c || col; rr(ctx, -420, -100, 840, 200, 40); ctx.fill(); }, 20); ctx.save(); ctx.translate(-300, 0); icon(fg); ctx.restore(); text(ctx, label, 70, 4, 64, fg, 700); ctx.restore(); };
    const flyIcon = () => { ctx.save(); circle(ctx, 0, 0, 70, PAL.zw); ctx.save(); ctx.beginPath(); ctx.arc(0, 0, 70, 0, 7); ctx.clip(); ctx.fillStyle = PAL.ink; for (let i = -4; i <= 4; i++) ctx.fillRect(i * 30 - 8, -80, 16, 160); ctx.restore(); ctx.restore(); };
    const eyeIcon = (c) => { ctx.fillStyle = c; ctx.beginPath(); ctx.ellipse(0, 0, 70, 40, 0, 0, Math.PI * 2); ctx.fill(); circle(ctx, 0, 0, 26, PAL.ink); };
    const sunIcon = (c) => { circle(ctx, 0, 0, 40, c); ctx.strokeStyle = c; ctx.lineWidth = 10; ctx.lineCap = 'round'; for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; ctx.beginPath(); ctx.moveTo(Math.cos(a) * 54, Math.sin(a) * 54); ctx.lineTo(Math.cos(a) * 72, Math.sin(a) * 72); ctx.stroke(); } };
    const dim = EO(t, T('other', 'evidence') - 0.1, T('other', 'evidence') + 0.4);
    card(720, 'FLY SHIELD', PAL.cream, PAL.ink, pop(t, T('genius', 'thats') - 0.15), flyIcon, 0);
    check(ctx, 900, 720, 44, PAL.green, pop(t, T('genius', 'genius') - 0.1));
    card(1010, 'CAMOUFLAGE?', '#ffb38a', PAL.ink, pop(t, T('other', 'camouflage') - 0.15), eyeIcon, dim);
    card(1270, 'KEEPING COOL?', '#ffe08a', PAL.ink, pop(t, T('other', 'keeping') - 0.15), sunIcon, dim);
    pill(ctx, 'WEAKER EVIDENCE', 540, 1140, { k: pop(t, T('other', 'weaker') - 0.2) * bump(t, T('other', 'weaker')), bg: PAL.red, col: PAL.white, size: 62, rot: -0.08 });
  };
  S.end = (ctx, t) => {
    sky(ctx, '#9fe0ff', '#e6f7ff'); hills(ctx, 1080, ['#8fd36a', '#74c25a']);
    circle(ctx, 880, 640, 80, '#fff3b0');
    // picnic blanket
    ctx.save(); ctx.translate(540, 1400); ctx.transform(1, 0, -0.5, 0.45, 0, 0); for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { ctx.fillStyle = (i + j) % 2 ? PAL.red : PAL.cream; ctx.fillRect(-400 + i * 100, -400 + j * 100, 100, 100); } ctx.restore();
    // a person in a striped shirt sitting
    const px = 540, py = 1330;
    ctx.save(); ctx.translate(px, py);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.zw; rr(ctx, -110, -260, 220, 260, 60); ctx.fill(); }, 18);
    ctx.save(); rr(ctx, -110, -260, 220, 260, 60); ctx.clip(); ctx.fillStyle = PAL.ink; for (let yy = -250; yy < 0; yy += 44) ctx.fillRect(-120, yy, 240, 20); ctx.restore();
    ctx.fillStyle = '#3a5fb0'; rr(ctx, -120, -20, 300, 70, 30); ctx.fill();
    circle(ctx, 0, -340, 80, '#f3c7a0'); ctx.fillStyle = '#4a2a17'; ctx.beginPath(); ctx.arc(0, -360, 84, Math.PI, 0); ctx.fill();
    circle(ctx, -28, -335, 9, PAL.ink); circle(ctx, 28, -335, 9, PAL.ink); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, -310, 26, 0.2, Math.PI - 0.2); ctx.stroke();
    ctx.fillStyle = '#e8a64a'; rr(ctx, 150, -110, 60, 80, 14); ctx.fill();
    ctx.restore();
    // a fly bounces off the shirt, again and again
    const cyc = ((t - CUTS.end) % 1.3) / 1.3, ang = cyc < 0.5 ? 0 : 1; const tx = 600, ty = 1180;
    if (cyc < 0.5) { const u = cyc / 0.5; fly(ctx, H.lerp(1000, tx, u), H.lerp(900, ty, u), 1.2, Math.atan2(ty - 900, tx - 1000), t, { lines: 0.6 }); } else { const u = (cyc - 0.5) / 0.5; fly(ctx, H.lerp(tx, 980, H.ease.out(u)), H.lerp(ty, 820, H.ease.out(u)), 1.2, u * 9, t); if (u < 0.3) burst(ctx, tx, ty, u, 0, PAL.yellow, 20); }
    if (ang < 0) return;
    big(ctx, 'STRIPES AT', 540, 380, 112, PAL.ink, pop(t, T('end', 'stripes') - 0.25));
    big(ctx, 'YOUR PICNIC?', 540, 510, 112, PAL.orange, pop(t, T('end', 'picnic') - 0.25));
    pill(ctx, 'YES OR NO?  COMMENT', 540, 1610, { k: pop(t, T('end', 'picnic') + 0.1), bg: PAL.ink, col: PAL.cream, size: 46, h: 80 });
  };

  const ORDER = [['hook', 0], ['africa', CUTS.africa], ['study', CUTS.study], ['q', CUTS.q], ['horse', CUTS.horse], ['zeb', CUTS.zeb], ['coats', CUTS.coats], ['ideas', CUTS.ideas], ['end', CUTS.end]];
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
    header(ctx, t);
    H.vignette(ctx, Wd, Hd, 0.16, '40,20,60');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  // ---------- sound ----------
  function scoreSound(k) {
    const D = DURATION;
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    const wipe = (t) => { k.play('whoosh', t - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); k.play('tock', t + 0.2, { f: 420, gain: 0.5 }); };
    const buzz = (t, dur, g = 0.12, p = 0) => k.play('buzz', t, { f: 210, dur, gain: g, pan: p, minor: true });
    const bonk = (t, p = 0) => { k.play('tock', t, { f: 700, gain: 0.6, pan: p, minor: true }); k.play('swish', t + 0.05, { gain: 0.3, pan: p, minor: true }); };
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 104, gain: 0.28, chords: [['D4', 'F#4', 'A4', 'C#5'], ['B3', 'D4', 'F#4', 'A4'], ['G3', 'B3', 'D4', 'F#4'], ['A3', 'C#4', 'E4', 'G4']] });
    // hook
    popAt(T('hook', 'zebra') - 0.15, 560, 0.9, 0, false);
    k.play('swish', T('hook', 'stripes') - 0.1, { gain: 0.6 });
    buzz(T('hook', 'stop') - 0.3, 1.4, 0.14);
    [T('hook', 'n3') - 0.05, T('hook', 'out') + 0.15, T('hook', 'of') + 0.1].forEach((t, i) => { bonk(t, [-0.4, 0.4, 0.5][i]); popAt(t, 700 + i * 80, 0.7); });
    k.play('impact', T('hook', 'n3') - 0.1, { gain: 0.8 }); k.play('thud', T('hook', 'n4') + 0.15, { f: 160, gain: 0.4 });
    popAt(T('hook', 'landings') - 0.15, 600, 0.8, 0, false); popAt(T('see', 'see') - 0.15, 800, 0.7, 0);
    wipe(CUTS.africa);
    popAt(T('africa', 'africa') - 0.15, 520, 0.8, 0, false);
    k.play('riser', T('africa', 'horseflies') - 0.4, { dur: 0.4, gain: 0.4 }); popAt(T('africa', 'horseflies') - 0.2, 480, 0.9, 0, false); buzz(T('africa', 'horseflies') - 0.2, 1.2, 0.16, 0.2);
    popAt(T('africa', 'biting') - 0.15, 700, 0.7, 0); buzz(T('africa', 'swarm') - 0.2, 3.2, 0.12, -0.3);
    k.play('thud', T('disease', 'bites'), { f: 140, gain: 0.5 }); popAt(T('disease', 'bites') - 0.15, 800, 0.8, 0.2, false);
    for (let i = 0; i < 5; i++) popAt(T('disease', 'spread') - 0.15 + i * 0.12, 400 + i * 90, 0.5, (i - 2) * 0.3);
    k.play('error', T('disease', 'diseases'), { f: 'A3', gain: 0.35 });
    wipe(CUTS.study);
    popAt(T('brit', 'britain') - 0.15, 600, 0.8, 0, false); k.play('stamp', T('brit', 'filmed'), { gain: 0.4 });
    buzz(T('buzz', 'buzzing') - 0.2, 5.5, 0.1);
    for (let f = Math.ceil((T('both', 'flew') - 0.1) * 12); f < (T('both', 'both') + 0.3) * 12; f += 2) k.play('tick', f / 12, { f: 3000, gain: 0.6, minor: true });
    popAt(T('both', 'often') - 0.2, 900, 0.7, 0.4, false);
    for (let i = 0; i < 3; i++) bonk(T('quarter', 'landed') + i * 0.15, 0.5);
    for (let f = Math.ceil((T('quarter', 'less') - 0.1) * 12); f < (T('quarter', 'quarter') + 0.2) * 12; f += 2) k.play('tick', f / 12, { f: 2400, gain: 0.6, minor: true });
    k.play('impact', T('quarter', 'quarter'), { gain: 1.0 }); ['D5', 'F#5', 'A5', 'D6'].forEach((n, i) => k.play('ding', T('quarter', 'quarter') + i * 0.03, { f: n, gain: 0.34 - i * 0.05 }));
    wipe(CUTS.q); k.play('riser', CUTS.q - 0.2, { dur: 0.5, gain: 0.4 }); popAt(T('q', 'whats') - 0.15, 600, 0.8, 0, false); popAt(T('q', 'going') - 0.15, 700, 0.8, 0, false); buzz(CUTS.q, 1.6, 0.1);
    wipe(CUTS.horse);
    popAt(T('horse', 'horse') - 0.15, 560, 0.8, 0, false); buzz(T('horse', 'fly') - 0.3, 2.0, 0.14, -0.3);
    k.tone(T('horse', 'slows') - 0.1, { f: [[0, 900], [1.4, 300]], dur: 1.4, gain: 0.06, minor: true });
    popAt(T('horse', 'slows') - 0.15, 700, 0.7, -0.3); k.play('ding', T('horse', 'landing'), { f: 'A5', gain: 0.35 }); popAt(T('horse', 'soft') - 0.15, 900, 0.7, 0, false);
    wipe(CUTS.zeb);
    popAt(T('zeb', 'zebra') - 0.15, 560, 0.8, 0, false); popAt(T('zeb', 'stripes') - 0.15, 700, 0.6, 0);
    k.noise(T('zeb', 'scramble') - 0.2, { dur: 1.4, color: 'pink', filter: 'bandpass', f: [[0, 600], [0.7, 3000], [1.4, 900]], q: 2, gain: 0.18, a: 0.2, verb: 0.2 }); k.play('sparkle', T('zeb', 'scramble'), { n: 6, gain: 0.5 });
    k.play('buzz', T('brake', 'never'), { f: 98, dur: 0.3, gain: 0.4 }); popAt(T('brake', 'never') - 0.15, 500, 0.8, -0.3, false); buzz(T('brake', 'so') - 0.1, 1.8, 0.16, -0.3);
    k.play('impact', T('bump', 'bumps'), { gain: 0.9 }); bonk(T('bump', 'bumps'), 0); popAt(T('bump', 'bumps') - 0.05, 400, 0.9, 0, false);
    k.play('whoosh', T('bump', 'zooms') - 0.2, { dur: 0.6, gain: 0.8, top: 3000 }); popAt(T('bump', 'zooms') - 0.15, 800, 0.7, 0.3);
    wipe(CUTS.coats);
    popAt(T('coats', 'dressed') - 0.15, 560, 0.7, 0); k.play('paper', T('coats', 'striped') - 0.3, { dur: 0.6, gain: 0.8 }); popAt(T('coats', 'striped') - 0.15, 700, 0.8, 0, false);
    for (let i = 0; i < 4; i++) bonk(T('miss', 'flies') + 0.1 + i * 0.3, i % 2 ? 0.4 : -0.4);
    popAt(T('miss', 'missing') - 0.15, 800, 0.8, -0.4, false);
    buzz(T('heads', 'but') - 0.4, 1.4, 0.14, 0.4); k.play('error', T('heads', 'bare'), { f: 'G3', gain: 0.35 }); popAt(T('heads', 'bare') - 0.15, 600, 0.8, 0.3, false);
    wipe(CUTS.ideas);
    popAt(T('genius', 'thats') - 0.15, 600, 0.6, 0); k.play('success', T('genius', 'genius'), { f: 'D6', gain: 0.4 }); k.play('sparkle', T('genius', 'genius'), { n: 8, gain: 0.7 });
    popAt(T('other', 'camouflage') - 0.15, 560, 0.7, -0.2, false); popAt(T('other', 'keeping') - 0.15, 640, 0.7, 0.2, false);
    k.play('stamp', T('other', 'weaker') - 0.05, { gain: 0.55 });
    wipe(CUTS.end);
    for (let c = CUTS.end; c < D - 0.3; c += 1.3) bonk(c + 0.65, 0.3);
    popAt(T('end', 'stripes') - 0.25, 560, 0.8, 0, false); popAt(T('end', 'picnic') - 0.25, 700, 0.9, 0, false); k.play('ding', T('end', 'picnic') + 0.1, { f: 'D6', gain: 0.3 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
