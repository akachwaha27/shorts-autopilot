// ================= Flat-Vector Science, vertical 1080x1920: "Why do your teeth chatter when you're cold?" =================
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    {"s": 0.25, "e": 4.66, "w": {"your": 0.25, "chattering": 0.54, "teeth": 1.28, "mean": 1.65, "your2": 1.94, "brain": 2.24, "is": 2.6, "burning": 2.75, "fuel": 3.27, "before": 3.56, "you": 4.0, "freeze": 4.22}},
    {"s": 5.07, "e": 6.64, "w": {"when": 5.07, "your": 5.35, "skin": 5.64, "senses": 5.92, "cold": 6.35}},
    {"s": 7.23, "e": 10.06, "w": {"a": 7.23, "spot": 7.3, "deep": 7.57, "in": 7.85, "your": 7.99, "brain": 8.26, "called": 8.61, "the": 9.02, "hypothalamus": 9.23}},
    {"s": 10.21, "e": 11.34, "w": {"hits": 10.21, "the": 10.46, "panic": 10.65, "button": 10.97}},
    {"s": 11.69, "e": 13.41, "w": {"it": 11.69, "cant": 11.81, "just": 12.06, "crank": 12.31, "up": 12.61, "a": 12.74, "thermostat": 12.8}},
    {"s": 13.72, "e": 15.24, "w": {"so": 13.72, "it": 13.84, "makes": 13.96, "your": 14.25, "muscles": 14.48, "shiver": 14.89}},
    {"s": 15.63, "e": 17.79, "w": {"tiny": 15.63, "fast": 15.95, "squeezes": 16.27, "over": 16.91, "and": 17.23, "over2": 17.47}},
    {"s": 18.25, "e": 20.73, "w": {"and": 18.25, "every": 18.46, "squeeze": 18.8, "burns": 19.28, "fuel": 19.63, "and2": 19.9, "leaks": 20.11, "heat": 20.46}},
    {"s": 21.12, "e": 24.62, "w": {"at": 21.12, "full": 21.29, "blast": 21.63, "shivering": 22.05, "can": 22.82, "make": 23.08, "about": 23.42, "five": 23.85, "times": 24.19}},
    {"s": 24.75, "e": 26.33, "w": {"the": 24.75, "heat": 24.93, "your": 25.17, "body": 25.41, "makes": 25.66, "at": 25.96, "rest": 26.08}},
    {"s": 26.73, "e": 28.54, "w": {"your": 26.73, "jaw": 27.04, "muscles": 27.28, "join": 27.83, "in": 28.14, "too": 28.3}},
    {"s": 28.89, "e": 30.66, "w": {"but": 28.89, "your": 29.1, "jaw": 29.38, "is": 29.6, "small": 29.74, "and": 30.09, "light": 30.3}},
    {"s": 31.03, "e": 32.29, "w": {"and": 31.03, "it": 31.24, "hangs": 31.38, "on": 31.73, "a": 31.87, "hinge": 31.94}},
    {"s": 32.64, "e": 34.08, "w": {"so": 32.64, "every": 32.78, "twitch": 33.12, "swings": 33.53, "it": 33.94}},
    {"s": 34.48, "e": 36.28, "w": {"top": 34.48, "teeth": 34.7, "smack": 35.08, "bottom": 35.46, "teeth2": 35.91}},
    {"s": 36.65, "e": 37.71, "w": {"click": 36.65, "click2": 37.0, "click3": 37.36}},
    {"s": 38.0, "e": 40.11, "w": {"your": 38.0, "legs": 38.28, "and": 38.56, "back": 38.77, "are": 39.06, "shivering": 39.27, "too": 39.9}},
    {"s": 40.51, "e": 42.04, "w": {"theyre": 40.51, "just": 40.86, "too": 41.1, "heavy": 41.28, "to": 41.57, "rattle": 41.69}},
    {"s": 42.4, "e": 44.53, "w": {"and": 42.4, "honestly": 42.63, "thats": 43.24, "kind": 43.62, "of": 43.92, "genius": 44.08}},
    {"s": 45.0, "e": 47.78, "w": {"your": 45.0, "body": 45.29, "turns": 45.59, "its": 45.95, "own": 46.17, "muscles": 46.39, "into": 46.9, "a": 47.19, "furnace": 47.26}},
    {"s": 48.22, "e": 49.2, "w": {"so": 48.22, "be": 48.42, "honest": 48.61}},
    {"s": 49.49, "e": 52.89, "w": {"when": 49.49, "youre": 49.75, "freezing": 50.06, "what": 50.56, "chatters": 50.81, "first": 51.32, "your": 51.63, "teeth": 51.88, "or": 52.2, "your2": 52.32, "knees": 52.58}},
  ];
  const T = (i, w) => BEATS[i].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const CUTS = { brain: 4.86, shiver: 11.5, five: 20.92, jaw: 26.53, heavy: 37.85, furnace: 44.76, end: 48.0 };

  // ---------- helpers (Flat-Vector Science house kit) ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const PAL = { ink: '#1d1d3a', cream: '#fff6e6', skin: '#ffc9a3', skin2: '#f2a983', cold: '#c9d9ff', ice: '#9fd8ff', ice2: '#5fb4f0', red: '#ef4a4a', muscle: '#e85a5a', muscle2: '#c94444', flame: '#ff8a1f', flame2: '#ffd23f', coral: '#ff6b5b', blue: '#2f7bff', yellow: '#ffd23f', teal: '#1fb6a6', green: '#3ccf7a', white: '#ffffff', grey: '#9a9aa8', pink: '#ff9ec7', brain: '#ff9ec7', brain2: '#f07cad', purple: '#8a5cf6', beanie: '#ef4a4a', beanie2: '#c93636', scarf: '#1fb6a6', tooth: '#ffffff', gum: '#ff7b8f', mouth: '#7a1f3a' };
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 26, col = 'rgba(10,15,50,0.18)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700, align = 'center') => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 48, padX = size * 0.7, h = size * 1.7, w = measure(ctx, s, size) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 18);
    text(ctx, s, 0, 2, size, o.col || PAL.ink, 700); ctx.restore();
  };
  const bigText = (ctx, s, x, y, size, col, k = 1, sh = 20) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col), sh); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, Math.max(0, r), 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const burst = (ctx, cx, cy, t, a = 0.08, n = 14) => { ctx.save(); ctx.fillStyle = `rgba(255,255,255,${a})`; for (let i = 0; i < n; i++) { const an = i / n * Math.PI * 2 + t * 0.12; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, 1500, an, an + 0.12); ctx.closePath(); ctx.fill(); } ctx.restore(); };
  const limb = (ctx, pts, wdt, col) => { ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore(); };
  const cross = (ctx, x, y, s, col, k) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k * s, k * s); longShadow(ctx, (c) => circle(ctx, 0, 0, 60, c || col), 12); limb(ctx, [[-22, -22], [22, 22]], 16, PAL.white); limb(ctx, [[22, -22], [-22, 22]], 16, PAL.white); ctx.restore(); };
  // frame-locked jitter (30 fps), pure function of t
  const jit = (t, amp, seed = 1) => { const r = H.rng(Math.floor(t * 30) * 7 + seed); return [(r() - 0.5) * 2 * amp, (r() - 0.5) * 2 * amp]; };
  const chatterOpen = (t) => Math.abs(Math.sin(t * Math.PI * 7.5)); // ~7-8 clacks a second
  // falling snow (seeded)
  const FLAKES = (() => { const r = H.rng(41); return Array.from({ length: 46 }, () => ({ x: r() * W, y: r() * HH, s: r.range(8, 22), v: r.range(80, 190), d: r() * 6 })); })();
  const snow = (ctx, t, a = 0.85) => { ctx.save(); ctx.globalAlpha = a; FLAKES.forEach((f) => { const y = (f.y + t * f.v) % (HH + 60) - 30, x = f.x + Math.sin(t * 1.3 + f.d) * 30; circle(ctx, x, y, f.s, PAL.white); }); ctx.restore(); };
  // flame icon
  const flame = (ctx, x, y, s, t, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k * (1 + Math.sin(t * 13) * 0.05));
    const f = (c, sc) => { ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(0, -120 * sc); ctx.bezierCurveTo(60 * sc, -60 * sc, 80 * sc, -10 * sc, 70 * sc, 30 * sc); ctx.bezierCurveTo(60 * sc, 80 * sc, -60 * sc, 80 * sc, -70 * sc, 30 * sc); ctx.bezierCurveTo(-80 * sc, -20 * sc, -30 * sc, -40 * sc, 0, -120 * sc); ctx.fill(); };
    longShadow(ctx, (c) => f(c || PAL.flame, 1), 12); f(PAL.flame2, 0.55); ctx.restore(); };
  // heat wave squiggle
  const heatWave = (ctx, x, y, len, t, a) => { if (a <= 0.01) return; ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = PAL.flame; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); for (let i = 0; i <= 20; i++) { const yy = y - i / 20 * len, xx = x + Math.sin(i * 0.9 - t * 8) * 16; i ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); ctx.restore(); };

  // ---------- the cold kid, front view: shivering head + chattering teeth ----------
  const kid = (ctx, x, y, s, t, o = {}) => {
    const shake = o.shake ?? 1, open = (o.chat ?? 1) * chatterOpen(t);
    const [jx, jy] = jit(t, 7 * shake, 3);
    ctx.save(); ctx.translate(x + jx, y + jy * 0.5); ctx.scale(s, s);
    // shoulders + scarf
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#2f7bff'; rr(ctx, -300, 260, 600, 420, 160); ctx.fill(); }, 16);
    ctx.fillStyle = PAL.scarf; rr(ctx, -210, 200, 420, 110, 55); ctx.fill(); rr(ctx, 70, 250, 90, 260, 40); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; for (let i = 0; i < 4; i++) ctx.fillRect(-170 + i * 100, 200, 28, 110);
    // head
    const skin = H.rgba(H.mix(PAL.skin, PAL.cold, o.cold ?? 0.35));
    longShadow(ctx, (c) => circle(ctx, 0, 0, 240, c || skin), 18);
    circle(ctx, -238, 20, 46, skin); circle(ctx, 238, 20, 46, skin);
    // beanie
    ctx.fillStyle = PAL.beanie; ctx.beginPath(); ctx.arc(0, -40, 250, Math.PI * 1.02, Math.PI * 1.98); ctx.closePath(); ctx.fill();
    ctx.fillStyle = PAL.beanie2; rr(ctx, -265, -110, 530, 80, 40); ctx.fill();
    circle(ctx, 0, -300, 58, PAL.cream);
    // eyes squeezed, brows worried
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 14; ctx.lineCap = 'round';
    [-1, 1].forEach((sd) => { ctx.beginPath(); ctx.moveTo(sd * 70 - 34, 10); ctx.lineTo(sd * 70 + 30 * sd * 0 + 10 * sd, 26); ctx.lineTo(sd * 70 + 34 * (sd > 0 ? 1 : -1) * -1 + sd * 0, 42); ctx.stroke(); });
    [-1, 1].forEach((sd) => { ctx.beginPath(); ctx.moveTo(sd * 40, -40); ctx.lineTo(sd * 110, -58); ctx.stroke(); });
    // rosy cold cheeks + nose
    circle(ctx, -140, 80, 40, 'rgba(255,110,140,0.45)'); circle(ctx, 140, 80, 40, 'rgba(255,110,140,0.45)');
    circle(ctx, 0, 60, 30, '#ff8fa3');
    // mouth with two rows of teeth; bottom row drops with the jaw
    const mo = 18 + open * 34;
    ctx.fillStyle = PAL.mouth; rr(ctx, -110, 110, 220, 50 + mo, 26); ctx.fill();
    ctx.fillStyle = PAL.tooth; for (let i = 0; i < 5; i++) rr(ctx, -100 + i * 41, 112, 36, 38, 8), ctx.fill();
    for (let i = 0; i < 5; i++) rr(ctx, -100 + i * 41, 112 + 10 + mo, 36, 36, 8), ctx.fill();
    // chin follows jaw
    ctx.restore();
    return open;
  };
  // "CLACK" spark marks near the mouth when teeth meet
  const clacks = (ctx, x, y, t, k) => { if (k <= 0.01) return; const o = chatterOpen(t); if (o > 0.35) return; ctx.save(); ctx.globalAlpha = k * (1 - o / 0.35); ctx.strokeStyle = PAL.white; ctx.lineWidth = 10; ctx.lineCap = 'round'; [[-1, -0.5], [-1, 0.2], [1, -0.5], [1, 0.2]].forEach(([sd, a]) => { ctx.beginPath(); ctx.moveTo(x + sd * 150, y + a * 80); ctx.lineTo(x + sd * 210, y + a * 120); ctx.stroke(); }); ctx.restore(); };

  // ---------- scenes ----------
  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#8fd3ff', '#3f8fe0'); burst(ctx, 540, 1000, t, 0.08);
    ctx.fillStyle = '#eaf6ff'; ctx.beginPath(); ctx.moveTo(0, 1420); ctx.quadraticCurveTo(540, 1340, W, 1420); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.fill();
    snow(ctx, t);
    const zk = 1 + 0.08 * EI(t, 0, 4.5);
    kid(ctx, 540, 900, 1.15 * zk, t, { chat: 0.3 + 0.7 * ph(t, T(0, 'chattering') - 0.2, T(0, 'chattering')), shake: 0.6 + 0.6 * ph(t, T(0, 'chattering') - 0.2, T(0, 'teeth')) });
    clacks(ctx, 540, 1060 * zk - 60, t, pop(t, T(0, 'teeth') - 0.15));
    bigText(ctx, 'CHATTER!', 540, 300, 150, PAL.cream, pop(t, T(0, 'chattering') - 0.15));
    const fk = pop(t, T(0, 'burning') - 0.15);
    if (fk > 0.01) { ctx.save(); ctx.translate(540, 1560); ctx.rotate(-0.04); ctx.scale(fk, fk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.ink; rr(ctx, -430, -80, 860, 160, 50); ctx.fill(); }, 14); text(ctx, 'BURNING FUEL', 70, 4, 76, PAL.yellow); ctx.restore(); flame(ctx, 205, 1575, 0.6, t, fk); }
    pill(ctx, 'BEFORE YOU FREEZE', 540, 470, { k: pop(t, T(0, 'freeze') - 0.2), bg: PAL.ice, size: 52, rot: 0.03 });
  };
  S.brain = (ctx, t) => {
    sky(ctx, '#2a2f6b', '#141838');
    const r = H.rng(9); ctx.fillStyle = 'rgba(255,255,255,0.06)'; for (let i = 0; i < 30; i++) circle(ctx, r() * W, r() * HH, r.range(4, 12), 'rgba(255,255,255,0.08)');
    // head silhouette in profile (facing right)
    const hx = 520, hy = 820;
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#3b4290'; ctx.beginPath(); ctx.ellipse(hx, hy, 360, 330, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.moveTo(hx + 250, hy + 120); ctx.lineTo(hx + 360, hy + 230); ctx.lineTo(hx + 300, hy + 260); ctx.lineTo(hx + 300, hy + 380); ctx.lineTo(hx - 40, hy + 420); ctx.lineTo(hx - 140, hy + 300); ctx.closePath(); ctx.fill(); rr(ctx, hx - 180, hy + 330, 260, 500, 80); ctx.fill(); }, 20);
    // brain
    const bk = pop(t, T(2, 'brain') - 0.2);
    if (bk > 0.01) {
      ctx.save(); ctx.translate(hx - 10, hy - 60); ctx.scale(bk, bk);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.brain; [[-150, -40, 120], [-40, -110, 130], [90, -80, 120], [150, 30, 100], [-110, 70, 110], [20, 40, 130]].forEach(([x, y, rd]) => { ctx.beginPath(); ctx.arc(x, y, rd, 0, Math.PI * 2); ctx.fill(); }); }, 12);
      ctx.strokeStyle = PAL.brain2; ctx.lineWidth = 12; ctx.lineCap = 'round';
      [[[-200, -40], [-130, -90], [-60, -30]], [[-20, -160], [30, -90], [100, -140]], [[60, 0], [130, -30], [200, 30]], [[-160, 80], [-80, 40], [-10, 110]]].forEach((pts) => { ctx.beginPath(); ctx.moveTo(...pts[0]); ctx.quadraticCurveTo(...pts[1], ...pts[2]); ctx.stroke(); });
      ctx.restore();
    }
    // hypothalamus: glowing dot at the base of the brain
    const hk = pop(t, T(2, 'hypothalamus') - 0.2);
    const pk = ph(t, T(3, 'panic') - 0.1, T(3, 'panic') + 0.1);
    const hpx = hx + 40, hpy = hy + 90;
    if (hk > 0.01) { const glow = 1 + 0.15 * Math.sin(t * 10) * (pk > 0 ? 1 : 0.3); circle(ctx, hpx, hpy, 70 * hk * glow, 'rgba(255,210,63,0.35)'); circle(ctx, hpx, hpy, 38 * hk, pk > 0 ? PAL.red : PAL.yellow); }
    pill(ctx, 'HYPOTHALAMUS', 540, 1360, { k: hk, bg: PAL.yellow, size: 64 });
    if (hk > 0.01) { ctx.save(); ctx.globalAlpha = Math.min(1, hk); ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 8; ctx.setLineDash([4, 22]); ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(hpx, hpy + 50); ctx.lineTo(560, 1290); ctx.stroke(); ctx.restore(); }
    // cold skin: a hand bottom-left with snowflake + signal travelling up a nerve
    const sk = pop(t, T(1, 'skin') - 0.2);
    if (sk > 0.01) {
      ctx.save(); ctx.translate(200, 1600); ctx.scale(sk, sk);
      longShadow(ctx, (c) => { ctx.fillStyle = c || H.rgba(H.mix(PAL.skin, PAL.cold, 0.4)); circle(ctx, 0, 0, 90, ctx.fillStyle); [[-70, -90], [-25, -120], [25, -120], [70, -95]].forEach(([x, y]) => { rr(ctx, x - 22, y - 50, 44, 110, 22); ctx.fill(); }); rr(ctx, 70, -20, 110, 44, 22); ctx.fill(); }, 12);
      ctx.restore();
      ctx.save(); ctx.translate(330, 1460); ctx.rotate(t * 0.8); ctx.scale(sk, sk); ctx.strokeStyle = PAL.ice; ctx.lineWidth = 12; ctx.lineCap = 'round'; for (let i = 0; i < 6; i++) { ctx.rotate(Math.PI / 3); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -60); ctx.moveTo(0, -36); ctx.lineTo(-16, -50); ctx.moveTo(0, -36); ctx.lineTo(16, -50); ctx.stroke(); } ctx.restore();
      pill(ctx, 'COLD!', 330, 1290, { k: pop(t, T(1, 'cold') - 0.15, T(2, 'hypothalamus') - 0.4), bg: PAL.ice, size: 52 });
    }
    const nk = ph(t, T(1, 'senses') - 0.1, T(1, 'senses') + 0.2);
    if (nk > 0) {
      const path = [[230, 1500], [260, 1250], [380, 1150], [hpx, hpy + 40]];
      ctx.save(); ctx.strokeStyle = 'rgba(159,216,255,0.5)'; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(...path[0]); ctx.bezierCurveTo(...path[1], ...path[2], ...path[3]); ctx.stroke(); ctx.restore();
      for (let i = 0; i < 4; i++) { const u = ((t - T(1, 'senses')) * 0.9 + i * 0.25) % 1; if (t < T(1, 'senses')) continue; const b = (p0, p1, p2, p3, u) => { const v = 1 - u; return v * v * v * p0 + 3 * v * v * u * p1 + 3 * v * u * u * p2 + u * u * u * p3; }; circle(ctx, b(path[0][0], path[1][0], path[2][0], path[3][0], u), b(path[0][1], path[1][1], path[2][1], path[3][1], u), 18, PAL.ice); }
    }
    bigText(ctx, 'BRAIN ALERT', 540, 300, 120, PAL.cream, pop(t, T(2, 'spot') - 0.15, T(3, 'panic') - 0.3));
    // panic button
    const bt = pop(t, T(3, 'hits') - 0.2);
    if (bt > 0.01) {
      bigText(ctx, 'PANIC!', 540, 300, 160, PAL.red, pop(t, T(3, 'panic') - 0.15));
      ctx.save(); ctx.translate(850, 1560); ctx.scale(bt, bt);
      ctx.fillStyle = '#5a6a8a'; rr(ctx, -150, 0, 300, 90, 30); ctx.fill();
      const press = pk * (1 - 0.5 * ph(t, T(3, 'button'), T(3, 'button') + 0.4));
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.red; ctx.beginPath(); ctx.ellipse(0, -10 + press * 30, 120, 70, 0, 0, Math.PI * 2); ctx.fill(); rr(ctx, -120, -10 + press * 30, 240, 40 - press * 30, 0); ctx.fill(); }, 10);
      ctx.restore();
      if (pk > 0) { ctx.save(); ctx.globalAlpha = 1 - ph(t, T(3, 'panic'), T(3, 'panic') + 0.6); ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 12; ctx.lineCap = 'round'; for (let i = 0; i < 7; i++) { const a = -Math.PI * (0.15 + i * 0.12); ctx.beginPath(); ctx.moveTo(850 + Math.cos(a) * 160, 1560 + Math.sin(a) * 120); ctx.lineTo(850 + Math.cos(a) * 230, 1560 + Math.sin(a) * 180); ctx.stroke(); } ctx.restore(); }
    }
  };
  // muscle fibre bundle that squeezes fast
  const muscleBundle = (ctx, x, y, w, h, t, act) => {
    const sq = act * (0.5 + 0.5 * Math.sin(t * Math.PI * 10));
    const ww = w * (1 - 0.12 * sq), hh = h * (1 + 0.14 * sq);
    ctx.save(); ctx.translate(x, y);
    // tendons
    ctx.fillStyle = PAL.cream; rr(ctx, -ww / 2 - 120, -26, 140, 52, 26); ctx.fill(); rr(ctx, ww / 2 - 20, -26, 140, 52, 26); ctx.fill();
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.muscle; ctx.beginPath(); ctx.ellipse(0, 0, ww / 2, hh / 2, 0, 0, Math.PI * 2); ctx.fill(); }, 18);
    ctx.strokeStyle = PAL.muscle2; ctx.lineWidth = 10; ctx.lineCap = 'round';
    for (let i = -3; i <= 3; i++) { const yy = i * hh / 9; const half = Math.sqrt(Math.max(0, 1 - (yy / (hh / 2)) ** 2)) * ww / 2 * 0.85; ctx.beginPath(); ctx.moveTo(-half, yy); ctx.lineTo(half, yy); ctx.stroke(); }
    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.beginPath(); ctx.ellipse(-ww * 0.18, -hh * 0.25, ww * 0.16, hh * 0.08, -0.1, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  };
  S.shiver = (ctx, t) => {
    sky(ctx, '#ffb36b', '#ff6b6b'); burst(ctx, 540, 1000, t, 0.08);
    // thermostat with a cross
    const tk = pop(t, T(4, 'thermostat') - 0.25, T(5, 'muscles') - 0.3);
    if (tk > 0.01) {
      ctx.save(); ctx.translate(540, 820); ctx.scale(tk, tk);
      longShadow(ctx, (c) => circle(ctx, 0, 0, 230, c || PAL.cream), 18);
      circle(ctx, 0, 0, 170, '#e8e0d0'); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 16; ctx.lineCap = 'round'; const a = -Math.PI * 0.75 + 0.3 * Math.sin(t * 3); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * 140, Math.sin(a) * 140); ctx.stroke(); circle(ctx, 0, 0, 30, PAL.ink);
      for (let i = 0; i < 9; i++) { const b = Math.PI * (0.75 + i * 0.1875); limb(ctx, [[Math.cos(b) * 185, Math.sin(b) * 185], [Math.cos(b) * 210, Math.sin(b) * 210]], 10, PAL.grey); }
      ctx.restore();
      cross(ctx, 750, 640, 1.3, PAL.red, pop(t, T(4, 'cant') - 0.12, T(5, 'muscles') - 0.3));
      pill(ctx, 'NO THERMOSTAT', 540, 1180, { k: pop(t, T(4, 'crank') - 0.12, T(5, 'muscles') - 0.3), bg: PAL.ink, col: PAL.cream, size: 56 });
    }
    const mk = pop(t, T(5, 'muscles') - 0.2);
    if (mk > 0.01) {
      const act = ph(t, T(5, 'shiver') - 0.15, T(5, 'shiver') + 0.1);
      ctx.save(); ctx.translate(540, 900); ctx.scale(mk, mk); ctx.translate(-540, -900);
      muscleBundle(ctx, 540, 900, 640, 330, t, act);
      ctx.restore();
      bigText(ctx, 'SHIVER', 540, 320, 160, PAL.cream, pop(t, T(5, 'shiver') - 0.15));
      pill(ctx, 'TINY FAST SQUEEZES', 540, 520, { k: pop(t, T(6, 'squeezes') - 0.15), bg: PAL.yellow, size: 54 });
      // little squeeze counter ticks
      const ck = pop(t, T(6, 'over') - 0.1);
      if (ck > 0.01) { const n = Math.floor(Math.max(0, t - T(6, 'over')) * 10) + 1; pill(ctx, `SQUEEZE x${n}`, 540, 1200, { k: ck, bg: PAL.cream, size: 48, sh: 10 }); }
      // fuel burns -> flames, heat leaks -> waves
      flame(ctx, 300, 1470, 0.8, t, pop(t, T(7, 'burns') - 0.15));
      pill(ctx, 'BURNS FUEL', 300, 1650, { k: pop(t, T(7, 'fuel') - 0.15), bg: PAL.ink, col: PAL.yellow, size: 46 });
      const hk = ph(t, T(7, 'leaks') - 0.2, T(7, 'leaks') + 0.3);
      for (let i = 0; i < 4; i++) heatWave(ctx, 640 + i * 90, 1640, 300, t + i * 0.3, hk);
      pill(ctx, 'HEAT', 780, 1290, { k: pop(t, T(7, 'heat') - 0.15), bg: PAL.flame, col: PAL.white, size: 60 });
    }
  };
  S.five = (ctx, t) => {
    sky(ctx, '#3a1c5c', '#1d0f33'); burst(ctx, 540, 900, t, 0.06);
    bigText(ctx, 'FULL BLAST', 540, 300, 128, PAL.flame2, pop(t, T(8, 'full') - 0.15));
    // two bars: REST and SHIVERING
    const base = 1500, unit = 150;
    const grow = EO(t, T(8, 'five') - 0.3, T(8, 'times') + 0.4);
    const mult = 1 + 4 * grow;
    const rk = pop(t, T(8, 'shivering') - 0.2);
    if (rk > 0.01) {
      ctx.save(); ctx.globalAlpha = Math.min(1, rk);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.ice2; rr(ctx, 170, base - unit, 260, unit, 30); ctx.fill(); }, 16);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.flame; rr(ctx, 620, base - unit * mult, 260, unit * mult, 30); ctx.fill(); }, 16);
      ctx.fillStyle = 'rgba(255,255,255,0.18)'; for (let i = 1; i < Math.floor(mult + 0.001); i++) ctx.fillRect(620, base - unit * i - 4, 260, 8);
      ctx.restore();
      flame(ctx, 750, base - unit * mult - 70, 0.55 + 0.25 * grow, t, rk);
      pill(ctx, 'AT REST', 300, 1620, { k: pop(t, T(9, 'rest') - 0.2), bg: PAL.ice, size: 50 });
      pill(ctx, 'SHIVERING', 750, 1620, { k: rk, bg: PAL.flame, col: PAL.white, size: 50 });
      const nk = pop(t, T(8, 'five') - 0.15);
      if (nk > 0.01) bigText(ctx, '~' + Math.max(1, Math.round(mult)) + 'x', 300, 860, 200, PAL.cream, nk * (1 + 0.1 * pop(t, T(8, 'times') - 0.1, T(8, 'times') + 0.25)));
      pill(ctx, 'THE HEAT', 300, 1250, { k: pop(t, T(9, 'heat') - 0.15), bg: PAL.cream, size: 46, sh: 10 });
    }
  };
  // side profile head with a hinged jaw (facing right). origin = hinge
  const profile = (ctx, x, y, s, t, o = {}) => {
    const ang = (o.swing ?? 0) * chatterOpen(t) * 0.16;
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const skin = H.rgba(H.mix(PAL.skin, PAL.cold, 0.3));
    // neck
    ctx.fillStyle = PAL.skin2; rr(ctx, -170, 120, 200, 420, 60); ctx.fill();
    // cranium + upper face (fixed)
    longShadow(ctx, (c) => { ctx.fillStyle = c || skin; ctx.beginPath(); ctx.ellipse(-60, -230, 330, 300, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.moveTo(150, -200); ctx.lineTo(300, -60); ctx.lineTo(270, -20); ctx.lineTo(300, 40); ctx.lineTo(-40, 60); ctx.lineTo(-200, -100); ctx.closePath(); ctx.fill(); }, 16);
    ctx.fillStyle = PAL.beanie; ctx.beginPath(); ctx.ellipse(-60, -260, 340, 300, 0, Math.PI * 1.0, Math.PI * 1.95); ctx.closePath(); ctx.fill();
    circle(ctx, 180, -150, 18, PAL.ink); // eye
    circle(ctx, -60, -40, 60, PAL.skin2); // ear
    // upper teeth
    ctx.fillStyle = PAL.gum; rr(ctx, 120, 20, 175, 34, 14); ctx.fill();
    ctx.fillStyle = PAL.tooth; for (let i = 0; i < 4; i++) { rr(ctx, 130 + i * 40, 44, 34, 34, 8); ctx.fill(); }
    // jaw (rotates about hinge at origin)
    ctx.save(); ctx.rotate(ang);
    if (o.muscle) { const mq = 0.5 + 0.5 * Math.sin(t * Math.PI * 15); ctx.fillStyle = H.rgba(H.mix(PAL.muscle, PAL.muscle2, mq * o.muscle)); ctx.beginPath(); ctx.moveTo(-10, -30); ctx.quadraticCurveTo(80, 40, 60, 180); ctx.lineTo(-30, 200); ctx.quadraticCurveTo(-40, 80, -10, -30); ctx.fill(); }
    longShadow(ctx, (c) => { ctx.fillStyle = c || (o.jawCol || skin); ctx.beginPath(); ctx.moveTo(-40, 40); ctx.lineTo(300, 120); ctx.quadraticCurveTo(320, 210, 250, 240); ctx.lineTo(20, 240); ctx.quadraticCurveTo(-60, 200, -40, 40); ctx.closePath(); ctx.fill(); }, 10);
    if (o.muscle) { ctx.save(); ctx.globalAlpha = 0.85; const mq = 0.5 + 0.5 * Math.sin(t * Math.PI * 15); ctx.fillStyle = H.rgba(H.mix(PAL.muscle, PAL.muscle2, mq)); ctx.beginPath(); ctx.ellipse(40, 120, 50 * (1 - 0.1 * mq), 100 * (1 + 0.06 * mq), -0.2, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
    ctx.fillStyle = PAL.gum; rr(ctx, 120, 112, 175, 30, 12); ctx.fill();
    ctx.fillStyle = PAL.tooth; for (let i = 0; i < 4; i++) { rr(ctx, 130 + i * 40, 84, 34, 32, 8); ctx.fill(); }
    ctx.restore();
    // hinge pin
    if (o.pin) { circle(ctx, 0, 0, 34 * o.pin, PAL.ink); circle(ctx, 0, 0, 16 * o.pin, PAL.yellow); }
    ctx.restore();
    return ang;
  };
  const CLICKS = ['click', 'click2', 'click3'];
  S.jaw = (ctx, t) => {
    sky(ctx, '#8fe0c8', '#2fae9e'); burst(ctx, 540, 960, t, 0.07);
    const swing = ph(t, T(13, 'twitch') - 0.2, T(13, 'swings')) * 1 + 0.25 * ph(t, T(10, 'join') - 0.2, T(10, 'join'));
    const z = 1 + 0.12 * EI(t, T(14, 'top') - 0.4, T(14, 'top') + 0.3);
    const hx = 540, hy = 1000, PS = 1.05;
    profile(ctx, hx, hy, PS * z, t, { swing, muscle: ph(t, T(10, 'jaw') - 0.2, T(10, 'jaw')), pin: pop(t, T(12, 'hinge') - 0.15), jawCol: undefined });
    bigText(ctx, 'JAW MUSCLES', 540, 300, 118, PAL.cream, pop(t, T(10, 'jaw') - 0.15, T(11, 'small') - 0.2));
    pill(ctx, 'JOIN IN', 230, 1470, { k: pop(t, T(10, 'join') - 0.15, T(12, 'hinge') - 0.3), bg: PAL.muscle, col: PAL.white, size: 50 });
    bigText(ctx, 'SMALL + LIGHT', 540, 300, 112, PAL.yellow, pop(t, T(11, 'small') - 0.15, T(14, 'top') - 0.3));
    pill(ctx, 'HINGE', hx - 120, hy - 200 * z, { k: pop(t, T(12, 'hinge') - 0.15), bg: PAL.yellow, size: 54 });
    pill(ctx, 'EVERY TWITCH = SWING', 540, 1640, { k: pop(t, T(13, 'twitch') - 0.15, T(14, 'top') - 0.2), bg: PAL.ink, col: PAL.cream, size: 50 });
    pill(ctx, 'TOP TEETH', 800, 880, { k: pop(t, T(14, 'top') - 0.15), bg: PAL.cream, size: 46, sh: 10 });
    pill(ctx, 'BOTTOM TEETH', 760, 1330, { k: pop(t, T(14, 'bottom') - 0.15), bg: PAL.cream, size: 46, sh: 10 });
    bigText(ctx, 'SMACK!', 540, 300, 150, PAL.cream, pop(t, T(14, 'smack') - 0.15, T(15, 'click') - 0.2));
    // CLICK x3 stamps
    CLICKS.forEach((c, i) => { const k = pop(t, T(15, c) - 0.1); bigText(ctx, 'CLICK', 300 + i * 240, 260 + (i % 2) * 110, 96, [PAL.cream, PAL.yellow, PAL.white][i], k, 12); });
    // impact flash at teeth on clicks
    const near = Math.min(...CLICKS.map((c) => Math.abs(t - T(15, c))));
    if (t > T(15, 'click') - 0.2 && near < 0.15) { ctx.save(); ctx.globalAlpha = 1 - near / 0.15; ctx.strokeStyle = PAL.white; ctx.lineWidth = 12; ctx.lineCap = 'round'; const cx = hx + 300 * PS * z, cy = hy + 85 * PS * z; for (let i = 0; i < 6; i++) { const a = -0.9 + i * 0.36; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * 60, cy + Math.sin(a) * 60); ctx.lineTo(cx + Math.cos(a) * 120, cy + Math.sin(a) * 120); ctx.stroke(); } ctx.restore(); }
  };
  S.heavy = (ctx, t) => {
    sky(ctx, '#ffd98a', '#ffa94d');
    ctx.fillStyle = '#e8904a'; ctx.fillRect(0, 1450, W, HH - 1450);
    // big thigh + back silhouette (left), small jaw (right)
    const lk = pop(t, T(16, 'legs') - 0.2);
    if (lk > 0.01) {
      const [jx, jy] = jit(t, 2.5, 11);
      ctx.save(); ctx.translate(320 + jx, 1060 + jy); ctx.scale(lk, lk);
      longShadow(ctx, (c) => { ctx.fillStyle = c || '#2f7bff'; rr(ctx, -150, -480, 300, 380, 110); ctx.fill(); ctx.beginPath(); ctx.arc(0, -580, 95, 0, Math.PI * 2); ctx.fill(); }, 16); // back/torso + head
      longShadow(ctx, (c) => { ctx.fillStyle = c || '#245fcc'; rr(ctx, -140, -140, 130, 520, 60); ctx.fill(); rr(ctx, 10, -140, 130, 520, 60); ctx.fill(); }, 16); // legs
      ctx.fillStyle = PAL.ink; rr(ctx, -150, 350, 150, 60, 30); ctx.fill(); rr(ctx, 0, 350, 150, 60, 30); ctx.fill();
      ctx.restore();
      // tiny tremble marks
      ctx.save(); ctx.strokeStyle = 'rgba(29,29,58,0.5)'; ctx.lineWidth = 8; ctx.lineCap = 'round'; [[110, 900], [530, 900], [110, 1200], [530, 1200]].forEach(([x, y], i) => { const o = Math.sin(t * 40 + i) * 4; ctx.beginPath(); ctx.moveTo(x + o, y - 30); ctx.lineTo(x + o, y + 30); ctx.stroke(); }); ctx.restore();
      pill(ctx, 'LEGS + BACK', 320, 760, { k: lk, bg: PAL.blue, col: PAL.white, size: 52 });
    }
    // weight block
    const wk = pop(t, T(17, 'heavy') - 0.2);
    if (wk > 0.01) { ctx.save(); ctx.translate(320, 1560); ctx.scale(wk, wk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.ink; ctx.beginPath(); ctx.moveTo(-150, 90); ctx.lineTo(-110, -60); ctx.lineTo(110, -60); ctx.lineTo(150, 90); ctx.closePath(); ctx.fill(); }, 12); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 18; ctx.beginPath(); ctx.arc(0, -70, 50, Math.PI, 0); ctx.stroke(); text(ctx, 'HEAVY', 0, 24, 54, PAL.yellow); ctx.restore(); }
    // little jaw on the right rattling hard
    const jk = pop(t, T(16, 'shivering') - 0.2);
    if (jk > 0.01) {
      ctx.save(); ctx.translate(800, 1050); ctx.scale(jk, jk); ctx.translate(-800, -1050);
      profile(ctx, 730, 1000, 0.62, t, { swing: 1.6 });
      ctx.restore();
      pill(ctx, 'JAW', 800, 720, { k: jk, bg: PAL.cream, size: 52 });
      pill(ctx, 'RATTLES!', 800, 1360, { k: pop(t, T(17, 'rattle') - 0.15), bg: PAL.red, col: PAL.white, size: 52, rot: -0.05 });
    }
    bigText(ctx, 'SHIVERING TOO', 540, 300, 112, PAL.ink, pop(t, T(16, 'shivering') - 0.15, T(17, 'too') - 0.2), 14);
    bigText(ctx, 'TOO HEAVY', 540, 300, 130, PAL.ink, pop(t, T(17, 'too') - 0.15), 14);
  };
  S.furnace = (ctx, t) => {
    sky(ctx, '#2a1240', '#5c1f2e'); burst(ctx, 540, 1000, t, 0.06);
    const k = EO(t, CUTS.furnace - 0.2, CUTS.furnace + 0.4);
    // body silhouette, glowing muscles inside
    ctx.save(); ctx.translate(540, 1050); ctx.scale(k, k);
    const glow = 0.6 + 0.4 * ph(t, T(19, 'furnace') - 0.4, T(19, 'furnace'));
    const g = ctx.createRadialGradient(0, -100, 50, 0, -100, 700); g.addColorStop(0, `rgba(255,160,40,${0.55 * glow})`); g.addColorStop(1, 'rgba(255,120,40,0)'); ctx.fillStyle = g; ctx.fillRect(-700, -900, 1400, 1600);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#3b2a6b'; circle(ctx, 0, -520, 130, ctx.fillStyle); rr(ctx, -220, -380, 440, 520, 120); ctx.fill(); rr(ctx, -330, -360, 110, 420, 55); ctx.fill(); rr(ctx, 220, -360, 110, 420, 55); ctx.fill(); rr(ctx, -200, 100, 170, 500, 70); ctx.fill(); rr(ctx, 30, 100, 170, 500, 70); ctx.fill(); }, 18);
    // muscles glowing (pulsing)
    const mq = 0.5 + 0.5 * Math.sin(t * Math.PI * 10);
    const mcol = H.rgba(H.mix(PAL.flame, PAL.flame2, mq), glow);
    [[-100, -220, 80, 120], [100, -220, 80, 120], [-275, -170, 40, 130], [275, -170, 40, 130], [-115, 260, 60, 150], [115, 260, 60, 150], [-90, -20, 70, 70], [90, -20, 70, 70]].forEach(([x, y, rx, ry]) => { ctx.fillStyle = mcol; ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fill(); });
    ctx.restore();
    flame(ctx, 540, 900, 0.7, t, pop(t, T(19, 'furnace') - 0.15));
    bigText(ctx, 'GENIUS', 540, 300, 170, PAL.yellow, pop(t, T(18, 'genius') - 0.15, T(19, 'body') - 0.2));
    bigText(ctx, 'MUSCLES', 540, 260, 130, PAL.cream, pop(t, T(19, 'muscles') - 0.15));
    bigText(ctx, '= FURNACE', 540, 410, 120, PAL.flame, pop(t, T(19, 'furnace') - 0.15));
  };
  S.end = (ctx, t) => {
    sky(ctx, '#9fd8ff', '#5f9cf0'); burst(ctx, 540, 1000, t, 0.09, 16);
    ctx.fillStyle = '#eaf6ff'; ctx.beginPath(); ctx.moveTo(0, 1460); ctx.quadraticCurveTo(540, 1380, W, 1460); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.fill();
    snow(ctx, t);
    kid(ctx, 540, 960, 1.0, t, { chat: 1, shake: 1.1, cold: 0.5 });
    clacks(ctx, 540, 1080, t, pop(t, T(21, 'teeth') - 0.15));
    bigText(ctx, 'BE HONEST', 540, 300, 130, PAL.cream, pop(t, T(20, 'honest') - 0.15, T(21, 'what') - 0.2));
    bigText(ctx, 'WHAT CHATTERS', 540, 270, 108, PAL.cream, pop(t, T(21, 'what') - 0.15));
    bigText(ctx, 'FIRST?', 540, 410, 140, PAL.yellow, pop(t, T(21, 'first') - 0.15));
    pill(ctx, 'TEETH', 300, 1620, { k: pop(t, T(21, 'teeth') - 0.1), bg: PAL.cream, size: 62 });
    pill(ctx, 'KNEES', 780, 1620, { k: pop(t, T(21, 'knees') - 0.1), bg: PAL.coral, col: PAL.white, size: 62 });
    text(ctx, 'OR', 540, 1620, 56, PAL.ink, 700);
  };

  const ORDER = [['hook', 0], ['brain', CUTS.brain], ['shiver', CUTS.shiver], ['five', CUTS.five], ['jaw', CUTS.jaw], ['heavy', CUTS.heavy], ['furnace', CUTS.furnace], ['end', CUTS.end]];
  const WIPE = 0.45;
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
    H.vignette(ctx, Wd, Hd, 0.16, '20,10,50');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  function scoreSound(k) {
    const D = DURATION;
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    const wipe = (t) => { k.play('whoosh', t - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); k.play('tock', t + 0.2, { f: 420, gain: 0.5 }); };
    const chatter = (a, b, g = 0.22) => { for (let t = a; t < b; t += 1 / 7.5) k.play('tick', t, { f: 3200, gain: g, minor: true }); };
    k.bed('room', 0, D, { gain: 0.2 });
    k.noise(0, { dur: D, color: 'pink', filter: 'bandpass', f: [[0, 700]], gain: 0.05, a: 0.5 });
    k.music('pulse', 0.2, D, { bpm: 100, gain: 0.24, chords: [['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['C4', 'E4', 'G4', 'B4'], ['G3', 'B3', 'D4', 'F4']] });
    chatter(T(0, 'chattering'), CUTS.brain - 0.3);
    popAt(T(0, 'chattering') - 0.15, 560, 0.9, 0, false);
    k.play('stamp', T(0, 'burning') - 0.1, { gain: 0.5 }); popAt(T(0, 'freeze') - 0.2, 760, 0.6, 0.4);
    wipe(CUTS.brain);
    popAt(T(1, 'skin') - 0.2, 600, 0.6, -0.4); k.play('blip', T(1, 'senses'), { gain: 0.35 }); popAt(T(1, 'cold') - 0.15, 820, 0.6, -0.3);
    popAt(T(2, 'brain') - 0.2, 520, 0.8, 0, false); k.play('ding', T(2, 'hypothalamus') - 0.1, { f: 'E6', gain: 0.3 }); popAt(T(2, 'hypothalamus') - 0.2, 700, 0.7, 0.2);
    k.play('impact', T(3, 'panic') - 0.1, { gain: 0.6 }); k.play('buzz', T(3, 'panic'), { f: 140, dur: 0.5, gain: 0.3 });
    wipe(CUTS.shiver);
    popAt(T(4, 'thermostat') - 0.25, 560, 0.7, 0); k.play('error', T(4, 'cant') - 0.05, { f: 'A3', gain: 0.3 });
    popAt(T(5, 'muscles') - 0.2, 520, 0.8, 0, false); k.play('stamp', T(5, 'shiver') - 0.1, { gain: 0.55 });
    for (let t = T(5, 'shiver'); t < CUTS.five - 0.4; t += 0.1) k.play('tick', t, { f: 1800, gain: 0.18, minor: true });
    popAt(T(6, 'squeezes') - 0.15, 700, 0.6, 0.3);
    k.noise(T(7, 'burns') - 0.15, { dur: 1.6, color: 'brown', filter: 'lowpass', f: [[0, 500], [1.6, 1200]], gain: 0.22, a: 0.2, verb: 0.2 });
    popAt(T(7, 'heat') - 0.15, 820, 0.7, 0.4);
    wipe(CUTS.five);
    k.play('stamp', T(8, 'full') - 0.15, { gain: 0.5 });
    k.play('riser', T(8, 'five') - 0.6, { dur: 1.0, gain: 0.45 });
    for (let i = 0; i < 5; i++) k.play('tick', T(8, 'five') - 0.3 + i * 0.14, { f: 2400 + i * 200, gain: 0.5, minor: true });
    k.play('impact', T(8, 'times') - 0.05, { gain: 0.65 }); k.play('success', T(9, 'rest') - 0.1, { f: 'C6', gain: 0.25 });
    wipe(CUTS.jaw);
    popAt(T(10, 'jaw') - 0.15, 560, 0.8, 0, false); popAt(T(11, 'small') - 0.15, 760, 0.6, 0.3);
    k.play('blip', T(12, 'hinge') - 0.1, { gain: 0.4 });
    chatter(T(13, 'twitch'), CUTS.heavy - 0.3, 0.25);
    k.play('thud', T(14, 'smack') - 0.05, { f: 120, gain: 0.5 });
    ['click', 'click2', 'click3'].forEach((c, i) => { k.play('tock', T(15, c) - 0.03, { f: 900 + i * 120, gain: 0.7 }); popAt(T(15, c) - 0.1, 700 + i * 100, 0.5, -0.4 + i * 0.4); });
    wipe(CUTS.heavy);
    popAt(T(16, 'legs') - 0.2, 520, 0.7, -0.4); popAt(T(16, 'shivering') - 0.2, 780, 0.6, 0.4);
    k.play('thud', T(17, 'heavy') - 0.1, { f: 70, gain: 0.6 }); chatter(T(16, 'shivering'), CUTS.furnace - 0.3, 0.18);
    wipe(CUTS.furnace);
    k.play('sparkle', T(18, 'genius') - 0.2, { n: 6, gain: 0.55 }); k.play('ding', T(18, 'genius'), { f: 'A5', gain: 0.3 });
    k.noise(T(19, 'furnace') - 0.4, { dur: 1.4, color: 'brown', filter: 'lowpass', f: [[0, 400], [1.4, 900]], gain: 0.25, a: 0.2 });
    popAt(T(19, 'muscles') - 0.15, 600, 0.7, 0); k.play('impact', T(19, 'furnace') - 0.1, { gain: 0.5 });
    wipe(CUTS.end);
    chatter(CUTS.end, D - 0.4, 0.2);
    popAt(T(21, 'what') - 0.15, 560, 0.8, 0, false); popAt(T(21, 'teeth') - 0.1, 640, 0.6, -0.4); popAt(T(21, 'knees') - 0.1, 760, 0.6, 0.4);
    k.tone(T(21, 'knees') + 0.6, { f: 'A3', type: 'triangle', dur: 1.0, gain: 0.1, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
