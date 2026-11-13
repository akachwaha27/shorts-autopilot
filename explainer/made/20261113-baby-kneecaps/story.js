// ================= Flat-Vector Science, vertical 1080x1920: "Why are babies born without bony kneecaps?" =================
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    {"s": 0.25, "e": 3.08, "w": {"your": 0.25, "kneecaps": 0.52, "were": 1.06, "soft": 1.33, "until": 1.6, "you": 1.94, "about": 2.41, "three": 2.75}},
    {"s": 3.45, "e": 5.7, "w": {"babies": 3.45, "dont": 3.88, "have": 4.17, "bony": 4.46, "kneecaps": 4.76, "at": 5.34, "all": 5.48}},
    {"s": 6.13, "e": 8.85, "w": {"each": 6.13, "knee": 6.42, "has": 6.71, "a": 6.92, "soft": 6.99, "disc": 7.28, "of": 7.56, "cartilage": 7.71, "instead": 8.35}},
    {"s": 9.46, "e": 12.29, "w": {"the": 9.46, "same": 9.71, "bendy": 10.03, "stuff": 10.43, "in": 10.84, "tip": 11.24, "of": 11.48, "your": 11.65, "nose": 11.97}},
    {"s": 12.64, "e": 14.0, "w": {"so": 12.64, "why": 12.84, "start": 13.13, "soft": 13.61}},
    {"s": 14.47, "e": 16.01, "w": {"first": 14.47, "theres": 14.82, "birth": 15.24, "itself": 15.59}},
    {"s": 16.38, "e": 19.3, "w": {"a": 16.38, "hard": 16.45, "kneecap": 16.71, "would": 17.18, "make": 17.51, "that": 17.77, "tight": 18.04, "squeeze": 18.37, "riskier": 18.84}},
    {"s": 19.7, "e": 20.9, "w": {"then": 19.7, "comes": 19.98, "crawling": 20.34}},
    {"s": 21.27, "e": 23.17, "w": {"knees": 21.27, "hit": 21.6, "the": 21.79, "floor": 21.99, "again": 22.32, "and": 22.65}},
    {"s": 23.73, "e": 26.55, "w": {"and": 23.73, "soft": 23.94, "cartilage": 24.21, "handles": 24.83, "that": 25.31, "better": 25.59, "than": 26.0, "bone": 26.28}},
    {"s": 26.98, "e": 29.31, "w": {"then": 26.98, "somewhere": 27.25, "between": 27.84, "ages": 28.31, "three": 28.58, "and": 28.91, "six": 29.11}},
    {"s": 29.77, "e": 33.15, "w": {"tiny": 29.77, "islands": 30.11, "of": 30.7, "bone": 30.87, "pop": 31.2, "up": 31.46, "inside": 31.63, "the": 32.13, "cartilage": 32.39}},
    {"s": 33.57, "e": 34.47, "w": {"they": 33.57, "grow": 34.02}},
    {"s": 34.55, "e": 34.76, "w": {"they": 34.55, "spread": 34.63}},
    {"s": 35.31, "e": 35.73, "w": {"and": 35.31, "by": 35.37, "your": 35.42, "early": 35.51, "teens": 35.62}},
    {"s": 35.82, "e": 38.81, "w": {"theyve": 35.82, "fused": 36.42, "into": 36.91, "one": 37.31, "solid": 37.61, "kneecap": 38.11}},
    {"s": 39.23, "e": 41.61, "w": {"and": 39.23, "honestly": 39.47, "its": 40.1, "kind": 40.34, "of": 40.66, "a": 40.81, "weird": 40.89, "bone": 41.29}},
    {"s": 41.95, "e": 43.84, "w": {"its": 41.95, "the": 42.16, "biggest": 42.37, "bone": 42.86, "in": 43.14, "your": 43.28, "body": 43.56}},
    {"s": 43.9, "e": 45.98, "w": {"that": 43.9, "grows": 44.21, "right": 44.6, "inside": 44.98, "a": 45.44, "tendon": 45.52}},
    {"s": 46.34, "e": 49.02, "w": {"thats": 46.34, "why": 46.68, "a": 46.89, "toddlers": 46.95, "knees": 47.5, "are": 47.85, "still": 48.05, "so": 48.4, "squishy": 48.54}},
    {"s": 49.39, "e": 50.39, "w": {"so": 49.39, "be": 49.59, "honest": 49.79}},
    {"s": 50.76, "e": 53.05, "w": {"did": 50.76, "you": 50.95, "know": 51.14, "were": 51.59, "born": 51.84, "without": 52.1, "kneecaps": 52.54}},
  ];
  const T = (i, w) => BEATS[i].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const CUTS = { knee: 5.92, birth: 12.47, crawl: 19.5, ossify: 26.77, tendon: 39.02, end: 46.16 };

  // ---------- helpers (Flat-Vector Science house kit) ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const PAL = { ink: '#1d1d3a', cream: '#fff6e6', skin: '#ffc9a3', skin2: '#f2a983', onesie: '#ffd23f', onesie2: '#f2b42a', cart: '#7fd3ff', cart2: '#4fb3ea', bone: '#fff1cf', bone2: '#ecd7a6', red: '#ef4a4a', muscle: '#e85a5a', tendon: '#fbe9d0', coral: '#ff6b5b', blue: '#2f7bff', yellow: '#ffd23f', teal: '#1fb6a6', green: '#3ccf7a', white: '#ffffff', grey: '#9a9aa8', pink: '#ff9ec7', purple: '#8a5cf6', hair: '#7a4a2a' };
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
  const check = (ctx, x, y, s, col, k) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k * s, k * s); longShadow(ctx, (c) => circle(ctx, 0, 0, 60, c || col), 12); limb(ctx, [[-28, 2], [-8, 24], [30, -22]], 16, PAL.white); ctx.restore(); };
  const cross = (ctx, x, y, s, col, k) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k * s, k * s); longShadow(ctx, (c) => circle(ctx, 0, 0, 60, c || col), 12); limb(ctx, [[-22, -22], [22, 22]], 16, PAL.white); limb(ctx, [[22, -22], [-22, 22]], 16, PAL.white); ctx.restore(); };
  // kneecap shape: rounded, slightly pointed at the bottom (like a real patella)
  const capPath = (ctx, rx, ry) => { ctx.beginPath(); ctx.moveTo(0, -ry); ctx.bezierCurveTo(rx * 0.95, -ry, rx * 1.05, -ry * 0.1, rx * 0.7, ry * 0.45); ctx.bezierCurveTo(rx * 0.45, ry * 0.85, rx * 0.15, ry, 0, ry); ctx.bezierCurveTo(-rx * 0.15, ry, -rx * 0.45, ry * 0.85, -rx * 0.7, ry * 0.45); ctx.bezierCurveTo(-rx * 1.05, -ry * 0.1, -rx * 0.95, -ry, 0, -ry); ctx.closePath(); };
  const softCap = (ctx, x, y, rx, ry, t, o = {}) => { // jelly cartilage disc with wobble
    const k = o.k ?? 1; if (k <= 0.01) return;
    const wob = o.wob ?? 0.04, sq = o.squash || 0;
    ctx.save(); ctx.translate(x, y); ctx.scale(k * (1 + Math.sin(t * 7) * wob + sq * 0.25), k * (1 - Math.sin(t * 7) * wob - sq * 0.3));
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.col || PAL.cart; capPath(ctx, rx, ry); ctx.fill(); }, o.sh ?? 16);
    ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.beginPath(); ctx.ellipse(-rx * 0.38, -ry * 0.45, rx * 0.16, ry * 0.25, -0.4, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  };

  // flat baby crawling, side view facing right. Origin = floor under the body.
  const baby = (ctx, x, y, s, t, o = {}) => {
    const p = (o.speed ?? 5) * t, sw = o.crawl === false ? 0 : 1;
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const bob = Math.sin(p * 2) * 5 * sw;
    const hip = [-120, -175 + bob], sh = [95, -185 + bob];
    const leg = (ph_, col) => { const a = Math.sin(p + ph_) * sw, lift = Math.max(0, Math.sin(p + ph_ + 1.6)) * 22 * sw; const knee = [-70 + a * 34, -26 - lift]; const foot = [-250 + a * 30, -40 - lift * 0.6]; limb(ctx, [hip, knee, foot], 72, col); return knee; };
    const arm = (ph_, col) => { const a = Math.sin(p + ph_) * sw, lift = Math.max(0, Math.sin(p + ph_ + 1.6)) * 26 * sw; const hand = [120 + a * 36, -18 - lift]; limb(ctx, [sh, [sh[0] + 20 + a * 18, -100 - lift * 0.5], hand], 54, col); circle(ctx, hand[0] + 6, hand[1] - 4, 30, col); };
    // shadow on floor
    ctx.fillStyle = 'rgba(10,15,50,0.15)'; ctx.beginPath(); ctx.ellipse(-20, 4, 300, 22, 0, 0, Math.PI * 2); ctx.fill();
    arm(Math.PI, PAL.skin2); leg(0, o.pants2 || '#5aa0e6');
    ctx.fillStyle = o.pants || '#78b8f5'; ctx.beginPath(); ctx.ellipse(-120, -180 + bob, 95, 85, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = o.top || PAL.onesie; ctx.beginPath(); ctx.ellipse(-5, -190 + bob, 150, 84, -0.05, 0, Math.PI * 2); ctx.fill();
    const knee = leg(Math.PI, o.pants || '#78b8f5');
    arm(0, PAL.skin);
    // head
    const hx = 205, hy = -255 + bob + Math.sin(p) * 4 * sw;
    circle(ctx, hx, hy, 100, PAL.skin);
    circle(ctx, hx - 30, hy + 8, 26, PAL.skin2); // ear
    ctx.fillStyle = PAL.hair; ctx.beginPath(); ctx.arc(hx - 5, hy - 10, 100, Math.PI * 1.08, Math.PI * 1.75); ctx.lineTo(hx - 5, hy - 10); ctx.fill();
    limb(ctx, [[hx + 10, hy - 105], [hx + 30, hy - 132], [hx + 55, hy - 118]], 12, PAL.hair);
    circle(ctx, hx + 52, hy - 2, 13, PAL.ink); circle(ctx, hx + 56, hy - 6, 4, PAL.white);
    circle(ctx, hx + 70, hy + 32, 16, 'rgba(255,120,120,0.45)');
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(hx + 66, hy + 38, 18, 0.1, Math.PI * 0.75); ctx.stroke();
    ctx.restore();
    return [x + knee[0] * s, y + knee[1] * s];
  };
  // x-ray lens on a point
  const lens = (ctx, x, y, r, k, fn) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => circle(ctx, 0, 0, r + 16, c || PAL.cream), 16); ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.clip(); ctx.fillStyle = '#16244a'; ctx.fillRect(-r, -r, 2 * r, 2 * r); fn(); ctx.restore(); };
  // side-view knee joint (bones + cap) at origin, scale s
  const kneeJoint = (ctx, s, t, o = {}) => {
    ctx.save(); ctx.scale(s, s);
    ctx.fillStyle = o.boneCol || PAL.bone;
    rr(ctx, -70, -420, 140, 360, 50); ctx.fill(); ctx.beginPath(); ctx.ellipse(0, -70, 110, 80, 0, 0, Math.PI * 2); ctx.fill(); // femur
    rr(ctx, -60, 60, 120, 380, 46); ctx.fill(); rr(ctx, -110, 40, 220, 70, 30); ctx.fill(); // tibia
    ctx.fillStyle = 'rgba(127,211,255,0.55)'; rr(ctx, -100, 4, 200, 30, 15); ctx.fill(); // joint cartilage
    if (o.cap !== false) softCap(ctx, 150, -30, 60, 80, t, { k: o.capK ?? 1, col: o.capCol || PAL.cart, sh: 8, wob: o.wob ?? 0.05 });
    ctx.restore();
  };

  // ---------- scenes: each draws its own background ----------
  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#ffb36b', '#ff7a8a'); burst(ctx, 540, 1100, t, 0.08);
    ctx.fillStyle = '#c75b7a'; ctx.fillRect(0, 1380, W, HH - 1380); ctx.fillStyle = '#b44d6c'; for (let i = 0; i < 9; i++) ctx.fillRect(i * 140 - ((t * 60) % 140), 1380, 6, HH);
    const kp = baby(ctx, 470 + Math.sin(t * 0.8) * 20, 1390, 1.35, t, { speed: 4.2 });
    const lk = pop(t, T(0, 'kneecaps') - 0.15);
    // lens hovering over the near knee
    const lx = 300, ly = 760;
    if (lk > 0.01) { ctx.save(); ctx.globalAlpha = Math.min(1, lk); ctx.strokeStyle = PAL.cream; ctx.lineWidth = 12; ctx.setLineDash([4, 26]); ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(kp[0], kp[1] - 20); ctx.lineTo(lx, ly + 250); ctx.stroke(); ctx.restore(); }
    lens(ctx, lx, ly, 230, lk, () => { kneeJoint(ctx, 0.62, t, { capK: pop(t, T(0, 'soft') - 0.12), wob: 0.09 }); });
    pill(ctx, 'SOFT!', 720, 640, { k: pop(t, T(0, 'soft') - 0.12), bg: PAL.cart, size: 66, rot: 0.06 });
    bigText(ctx, 'KNEECAPS', 540, 320, 138, PAL.cream, pop(t, T(0, 'kneecaps') - 0.15));
    pill(ctx, 'UNTIL AGE ~3', 720, 790, { k: pop(t, T(0, 'three') - 0.15), bg: PAL.ink, col: PAL.yellow, size: 52 });
    const nk = pop(t, T(1, 'bony') - 0.15);
    if (nk > 0.01) { ctx.save(); ctx.translate(540, 1560); ctx.rotate(-0.05); ctx.scale(nk, nk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.red; rr(ctx, -440, -70, 880, 140, 40); ctx.fill(); }, 14); text(ctx, 'NO BONY KNEECAPS', 0, 4, 76, PAL.white); ctx.restore(); }
  };
  S.knee = (ctx, t) => {
    sky(ctx, '#1b2b5c', '#0c1430');
    // x-ray grid
    ctx.save(); ctx.strokeStyle = 'rgba(127,211,255,0.08)'; ctx.lineWidth = 3; for (let x = 0; x < W; x += 90) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, HH); ctx.stroke(); } for (let y = 0; y < HH; y += 90) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); } ctx.restore();
    const z = 1 + 0.06 * EI(t, CUTS.knee, CUTS.birth);
    const noseK = EI(t, T(3, 'tip') - 0.5, T(3, 'tip'));
    const kx = H.lerp(430, 330, noseK), ky = 1000;
    // leg silhouette (skin) behind bones
    ctx.save(); ctx.translate(kx, ky); ctx.scale(z, z);
    ctx.fillStyle = 'rgba(255,201,163,0.18)'; rr(ctx, -190, -760, 400, 720, 160); ctx.fill(); rr(ctx, -170, -60, 350, 760, 140); ctx.fill();
    kneeJoint(ctx, 1.25, t, { capK: pop(t, T(2, 'disc') - 0.15), wob: 0.06 + 0.06 * Math.sin(ph(t, T(3, 'bendy'), T(3, 'bendy') + 1) * Math.PI) });
    ctx.restore();
    pill(ctx, 'FEMUR', kx - 10, ky - 420 * z, { k: pop(t, T(2, 'knee') - 0.1), bg: PAL.bone, size: 42, sh: 10 });
    pill(ctx, 'SHIN', kx - 10, ky + 430 * z, { k: pop(t, T(2, 'knee') - 0.05), bg: PAL.bone, size: 42, sh: 10 });
    bigText(ctx, 'CARTILAGE', 540, 330, 134, PAL.cart, pop(t, T(2, 'cartilage') - 0.15));
    const ak = pop(t, T(2, 'disc') - 0.1);
    if (ak > 0.01) { const ax = kx + 187 * z, ay = ky - 37 * z; ctx.save(); ctx.globalAlpha = Math.min(1, ak); ctx.strokeStyle = PAL.cream; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(ax + 120, ay - 240); ctx.quadraticCurveTo(ax + 140, ay - 120, ax + 90, ay - 60); ctx.stroke(); ctx.restore(); }
    pill(ctx, 'SOFT DISC', Math.min(840, kx + 360), ky - 330, { k: ak, bg: PAL.cart, size: 50 });
    // nose comparison
    const nk = pop(t, T(3, 'same') - 0.12);
    if (nk > 0.01) {
      ctx.save(); ctx.translate(830, 1150); ctx.scale(nk, nk);
      longShadow(ctx, (c) => circle(ctx, 0, 0, 170, c || PAL.cream), 16);
      ctx.beginPath(); ctx.arc(0, 0, 170, 0, Math.PI * 2); ctx.clip();
      ctx.fillStyle = PAL.skin; ctx.beginPath(); ctx.moveTo(-200, -200); ctx.lineTo(-40, -200); ctx.lineTo(-30, -60); ctx.quadraticCurveTo(70, 40, 50, 80); ctx.quadraticCurveTo(10, 110, -40, 95); ctx.lineTo(-200, 200); ctx.closePath(); ctx.fill();
      const tk = pop(t, T(3, 'tip') - 0.12);
      ctx.fillStyle = PAL.cart; ctx.globalAlpha = Math.min(1, tk) * (0.75 + 0.25 * Math.sin(t * 6)); ctx.beginPath(); ctx.ellipse(18, 55, 46 * tk, 32 * tk, 0.4, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      pill(ctx, 'NOSE TIP', 830, 1390, { k: pop(t, T(3, 'tip') - 0.12), bg: PAL.pink, size: 50 });
    }
    pill(ctx, 'SAME BENDY STUFF', 540, 1600, { k: pop(t, T(3, 'bendy') - 0.12), bg: PAL.yellow, size: 56 });
  };
  S.birth = (ctx, t) => {
    sky(ctx, '#7a5cf6', '#c35ee0'); burst(ctx, 540, 960, t, 0.07);
    const qk = pop(t, T(4, 'why') - 0.15, T(5, 'first') - 0.15);
    if (qk > 0.01) { bigText(ctx, 'WHY START', 540, 820, 130, PAL.cream, qk); bigText(ctx, 'SOFT?', 540, 990, 170, PAL.yellow, pop(t, T(4, 'soft') - 0.15, T(5, 'first') - 0.15)); softCap(ctx, 540, 1300, 110, 150, t, { k: qk, wob: 0.08 }); }
    const bk = pop(t, T(5, 'first') - 0.1);
    pill(ctx, '#1  BIRTH', 540, 320, { k: bk, bg: PAL.cream, size: 74 });
    if (bk > 0.01) {
      // the tight squeeze: a narrow passage, a hard cap vs a soft cap trying to pass
      const sq = EI(t, T(6, 'tight') - 0.3, T(6, 'squeeze') + 0.4);
      ctx.save(); ctx.globalAlpha = Math.min(1, bk);
      const wallGap = H.lerp(260, 150, sq);
      [-1, 1].forEach((sd) => { ctx.fillStyle = sd < 0 ? '#e86aa8' : '#d65595'; ctx.beginPath(); ctx.moveTo(540 + sd * 600, 460); ctx.lineTo(540 + sd * (wallGap + 160), 460); ctx.quadraticCurveTo(540 + sd * (wallGap - 10), 960, 540 + sd * (wallGap + 160), 1460); ctx.lineTo(540 + sd * 600, 1460); ctx.closePath(); ctx.fill(); });
      ctx.restore();
      // two knees side by side: the hard one jams, the soft one gives
      const hk = pop(t, T(6, 'hard') - 0.15);
      const hy = H.lerp(640, 780, sq);
      if (hk > 0.01) { ctx.save(); ctx.translate(430, hy); ctx.scale(hk, hk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.bone; capPath(ctx, 120, 150); ctx.fill(); }, 14); ctx.restore(); }
      const sy = H.lerp(640, 1180, sq);
      softCap(ctx, H.lerp(650, 560, sq), sy, 120 * (1 - sq * 0.3), 150, t, { k: hk, squash: -sq * 0.2, wob: 0.07 });
      pill(ctx, 'HARD', 260, 560, { k: hk, bg: PAL.grey, col: PAL.white, size: 46, sh: 10 });
      pill(ctx, 'SOFT', 830, 560, { k: hk, bg: PAL.cart, size: 46, sh: 10 });
      pill(ctx, 'TIGHT SQUEEZE', 540, 1580, { k: pop(t, T(6, 'tight') - 0.12), bg: PAL.ink, col: PAL.cream, size: 56 });
      const rk = pop(t, T(6, 'riskier') - 0.12);
      cross(ctx, 430, 640, 1.1, PAL.red, rk); check(ctx, 790, 1180, 1.1, PAL.green, rk);
      pill(ctx, 'RISKIER', 430, 470, { k: rk, bg: PAL.red, col: PAL.white, size: 48 });
    }
  };
  S.crawl = (ctx, t) => {
    sky(ctx, '#8fe0c8', '#3fb6a6');
    // window + wall, scrolling floor boards
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; rr(ctx, 640, 560, 300, 260, 30); ctx.fill();
    ctx.fillStyle = '#e9a65a'; ctx.fillRect(0, 1240, W, HH - 1240); ctx.fillStyle = '#d68f45'; const off = (t * 170) % 220; for (let i = -1; i < 7; i++) ctx.fillRect(i * 220 - off, 1240, 10, HH); ctx.fillRect(0, 1240, W, 14);
    pill(ctx, '#2  CRAWLING', 540, 320, { k: pop(t, T(7, 'crawling') - 0.15), bg: PAL.cream, size: 74 });
    const kp = baby(ctx, 470, 1250, 1.25, t, { speed: 5.5, top: PAL.pink, pants: '#9b7cf6', pants2: '#7d5ee0' });
    // knee taps: impact rings on every step after "knees"
    const p = 5.5 * t, tap = Math.sin(p + Math.PI + 1.6);
    const on = t > T(8, 'knees') - 0.1;
    if (on) { const ring = (1 - Math.abs(tap)); ctx.save(); ctx.strokeStyle = `rgba(255,255,255,${0.7 * ring})`; ctx.lineWidth = 10; ctx.beginPath(); ctx.ellipse(kp[0], 1250, 70 + (1 - ring) * 60, 18 + (1 - ring) * 12, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
    // counter of bumps
    const ck = pop(t, T(8, 'hit') - 0.12);
    if (ck > 0.01) { const n = Math.max(1, Math.floor((t - T(8, 'hit')) * 5.5 / Math.PI) + 1); pill(ctx, `BUMP x${n}`, 540, 500, { k: ck, bg: PAL.yellow, size: 60 }); }
    // squish panel: soft cap compresses and bounces back, bone would crack
    const sk = pop(t, T(9, 'soft') - 0.15);
    if (sk > 0.01) {
      ctx.save(); ctx.translate(540, 1570); ctx.scale(sk, sk);
      longShadow(ctx, (c) => { ctx.fillStyle = c || '#14213d'; rr(ctx, -440, -150, 880, 300, 40); ctx.fill(); }, 18);
      const sq = Math.max(0, -Math.cos(t * 6)) ;
      softCap(ctx, -230, 10 + sq * 18, 70, 90, t, { squash: sq, sh: 0, wob: 0 });
      ctx.fillStyle = '#5a6a8a'; rr(ctx, -330, 100, 200, 14, 7); ctx.fill();
      text(ctx, 'VS', 0, 0, 70, PAL.cream, 700);
      ctx.save(); ctx.translate(230, 10); ctx.fillStyle = PAL.bone2; capPath(ctx, 70, 90); ctx.fill(); const hitK = Math.max(0, -Math.cos(t * 6)); ctx.strokeStyle = PAL.red; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.globalAlpha = hitK; ctx.beginPath(); ctx.moveTo(-10, -70); ctx.lineTo(10, -30); ctx.lineTo(-12, 0); ctx.lineTo(14, 40); ctx.stroke(); ctx.restore();
      ctx.fillStyle = '#5a6a8a'; rr(ctx, 130, 100, 200, 14, 7); ctx.fill();
      text(ctx, 'OUCH', 230, -120, 40, PAL.red, 700);
      ctx.restore();
      pill(ctx, 'BETTER THAN BONE', 540, 1360, { k: pop(t, T(9, 'better') - 0.12), bg: PAL.green, col: PAL.white, size: 44, sh: 10 });
    }
  };
  // ossification: islands of bone appear inside the cartilage disc and fuse
  const ISL = (() => { const r = H.rng(84); return [[-80, -140], [90, -90], [-30, 40], [110, 120], [-120, 150]].map(([x, y], i) => ({ x, y, d: i * 0.28 + r() * 0.1 })); })();
  S.ossify = (ctx, t) => {
    sky(ctx, '#fff1d6', '#ffcf86'); burst(ctx, 540, 1010, t, 0.18);
    const cx = 540, cy = 1010, rx = 300, ry = 380;
    const dk = EO(t, CUTS.ossify - 0.2, CUTS.ossify + 0.4);
    // age counter 3 -> 6 -> teens
    const age = t < T(10, 'three') ? 2 : t < T(14, 'teens') ? Math.min(6, 3 + Math.floor(ph(t, T(10, 'three'), T(10, 'six') + 0.1) * 3.999)) : 13;
    const ak = pop(t, T(10, 'between') - 0.15);
    if (ak > 0.01) { const lbl = age >= 13 ? 'TEENS' : 'AGE ' + Math.max(3, age); bigText(ctx, lbl, 540, 330, 150, age >= 13 ? PAL.purple : PAL.coral, ak * (1 + 0.08 * pop(t, T(14, 'teens') - 0.1, T(14, 'teens') + 0.2))); }
    pill(ctx, 'AGES 3-6', 540, 500, { k: pop(t, T(10, 'six') - 0.15, T(14, 'teens') - 0.2), bg: PAL.ink, col: PAL.yellow, size: 52 });
    pill(ctx, 'EARLY TEENS', 540, 500, { k: pop(t, T(14, 'early') - 0.1), bg: PAL.purple, col: PAL.white, size: 52 });
    // disc
    const fuse = EI(t, T(15, 'fused') - 0.2, T(15, 'solid') + 0.3);
    softCap(ctx, cx, cy, rx, ry, t, { k: dk, wob: 0.03 * (1 - fuse), col: H.rgba(H.mix(PAL.cart, PAL.bone2, fuse)), sh: 26 });
    // islands, clipped to the disc
    const grow = (i) => { const d = ISL[i].d; const a = pop(t, T(11, 'islands') - 0.1 + d) * 26; const g = EO(t, T(12, 'grow') - 0.2 + d * 0.3, T(13, 'spread') + 1.2) * 110; return a + g + fuse * 260; };
    ctx.save(); ctx.translate(cx, cy); ctx.scale(dk * (1 + Math.sin(t * 7) * 0.03 * (1 - fuse)), dk * (1 - Math.sin(t * 7) * 0.03 * (1 - fuse))); capPath(ctx, rx, ry); ctx.clip();
    ISL.forEach((p, i) => { const r = grow(i); if (r > 0.5) { circle(ctx, p.x, p.y, r, PAL.bone); circle(ctx, p.x - r * 0.25, p.y - r * 0.25, r * 0.35, 'rgba(255,255,255,0.35)'); } });
    // bone texture once fused
    if (fuse > 0) { ctx.globalAlpha = fuse; const r = H.rng(5); ctx.fillStyle = PAL.bone2; for (let i = 0; i < 40; i++) circle(ctx, r.range(-rx, rx), r.range(-ry, ry), r.range(6, 16), PAL.bone2); ctx.globalAlpha = 1; }
    ctx.restore();
    pill(ctx, 'BONE ISLANDS', 790, 690, { k: pop(t, T(11, 'islands') - 0.12, T(15, 'fused') - 0.2), bg: PAL.bone, size: 46, rot: 0.05 });
    pill(ctx, 'GROW', 230, 1500, { k: pop(t, T(12, 'grow') - 0.12, T(15, 'fused') - 0.2), bg: PAL.coral, col: PAL.white, size: 50 });
    pill(ctx, 'SPREAD', 850, 1500, { k: pop(t, T(13, 'spread') - 0.12, T(15, 'fused') - 0.2), bg: PAL.coral, col: PAL.white, size: 50 });
    pill(ctx, 'ONE SOLID KNEECAP', 540, 1560, { k: pop(t, T(15, 'one') - 0.12), bg: PAL.green, col: PAL.white, size: 58 });
    if (fuse > 0.9) check(ctx, 820, 760, 1, PAL.green, pop(t, T(15, 'kneecap') - 0.1));
  };
  S.tendon = (ctx, t) => {
    sky(ctx, '#2f7bff', '#174a9e'); burst(ctx, 600, 960, t, 0.06);
    const z = 1 + 0.08 * EI(t, T(18, 'grows') - 0.4, T(18, 'tendon') + 0.3);
    ctx.save(); ctx.translate(560, 960); ctx.scale(z, z); ctx.translate(-560, -960);
    // femur and tibia
    ctx.fillStyle = PAL.bone; rr(ctx, 420, 470, 150, 430, 60); ctx.fill(); ctx.beginPath(); ctx.ellipse(500, 900, 130, 90, 0, 0, Math.PI * 2); ctx.fill();
    rr(ctx, 420, 1010, 140, 560, 50); ctx.fill(); rr(ctx, 370, 990, 250, 80, 34); ctx.fill();
    // quadriceps muscle
    const mk = pop(t, T(16, 'weird') - 0.3);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.muscle; ctx.beginPath(); ctx.moveTo(560, 470); ctx.bezierCurveTo(760, 500, 760, 640, 650, 760); ctx.lineTo(580, 760); ctx.bezierCurveTo(570, 640, 560, 560, 560, 470); ctx.closePath(); ctx.fill(); }, 16);
    ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = 6; for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.moveTo(575 + i * 25, 510 + i * 8); ctx.quadraticCurveTo(650 + i * 10, 620, 610 + i * 8, 740); ctx.stroke(); }
    // tendon strap over the knee, cap inside it
    const tk = EO(t, T(18, 'tendon') - 0.6, T(18, 'tendon'));
    ctx.fillStyle = PAL.tendon; ctx.beginPath(); ctx.moveTo(585, 740); ctx.lineTo(655, 740); ctx.quadraticCurveTo(720, 900, 690, 1060); ctx.lineTo(600, 1140); ctx.lineTo(560, 1130); ctx.quadraticCurveTo(640, 1000, 620, 900); ctx.closePath(); ctx.fill();
    if (tk > 0) { ctx.save(); ctx.globalAlpha = 0.5 + 0.5 * Math.sin(t * 8); ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 10 * tk; ctx.beginPath(); ctx.moveTo(585, 740); ctx.lineTo(655, 740); ctx.quadraticCurveTo(720, 900, 690, 1060); ctx.lineTo(600, 1140); ctx.lineTo(560, 1130); ctx.quadraticCurveTo(640, 1000, 620, 900); ctx.closePath(); ctx.stroke(); ctx.restore(); }
    ctx.save(); ctx.translate(680, 930); ctx.rotate(0.12); const bk = 1 + 0.15 * pop(t, T(17, 'biggest') - 0.1, T(17, 'biggest') + 0.35); ctx.scale(bk, bk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.bone2; capPath(ctx, 58, 82); ctx.fill(); }, 10); ctx.restore();
    ctx.restore();
    bigText(ctx, 'WEIRD BONE', 540, 320, 130, PAL.cream, pop(t, T(16, 'weird') - 0.15));
    pill(ctx, 'KNEECAP', 870, 860, { k: pop(t, T(16, 'bone') - 0.12), bg: PAL.bone, size: 46 });
    pill(ctx, 'THIGH MUSCLE', 280, 600, { k: mk, bg: PAL.muscle, col: PAL.white, size: 42, sh: 10 });
    pill(ctx, 'TENDON', 880, 1180, { k: pop(t, T(18, 'tendon') - 0.12), bg: PAL.tendon, size: 48 });
    const gk = pop(t, T(17, 'biggest') - 0.12);
    if (gk > 0.01) { ctx.save(); ctx.translate(540, 1550); ctx.scale(gk, gk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.yellow; rr(ctx, -470, -90, 940, 180, 50); ctx.fill(); }, 14); text(ctx, 'BIGGEST BONE', 0, -32, 56, PAL.ink); text(ctx, 'INSIDE A TENDON', 0, 34, 56, PAL.ink); ctx.restore(); }
  };
  // toddler, front view, wobbly squishy knees
  const toddler = (ctx, x, y, s, t, wob) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const sway = Math.sin(t * 3) * 0.05; ctx.rotate(sway);
    ctx.fillStyle = 'rgba(10,15,50,0.15)'; ctx.beginPath(); ctx.ellipse(0, 10, 220, 26, 0, 0, Math.PI * 2); ctx.fill();
    const knee = (sd) => { const kx = sd * 70 + Math.sin(t * 6 + sd) * 10 * wob, ky = -150; limb(ctx, [[sd * 70, -300], [kx, ky], [sd * 75, -30]], 70, PAL.skin); circle(ctx, sd * 82, -12, 44, '#ffffff'); softCap(ctx, kx, ky, 26, 32, t + sd, { wob: 0.12 * wob, sh: 0, col: PAL.cart }); };
    knee(-1); knee(1);
    ctx.fillStyle = '#78b8f5'; rr(ctx, -130, -380, 260, 130, 60); ctx.fill();
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.onesie; rr(ctx, -140, -640, 280, 320, 110); ctx.fill(); }, 14);
    limb(ctx, [[-120, -580], [-200, -470 + Math.sin(t * 4) * 20], [-215, -380]], 52, PAL.skin);
    limb(ctx, [[120, -580], [200, -470 - Math.sin(t * 4) * 20], [215, -380]], 52, PAL.skin);
    circle(ctx, 0, -760, 140, PAL.skin);
    ctx.fillStyle = PAL.hair; ctx.beginPath(); ctx.arc(0, -770, 142, Math.PI * 1.1, Math.PI * 1.9); ctx.fill();
    circle(ctx, -50, -760, 16, PAL.ink); circle(ctx, 50, -760, 16, PAL.ink); circle(ctx, -44, -766, 5, PAL.white); circle(ctx, 56, -766, 5, PAL.white);
    circle(ctx, -90, -715, 22, 'rgba(255,120,120,0.45)'); circle(ctx, 90, -715, 22, 'rgba(255,120,120,0.45)');
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, -720, 32, 0.25, Math.PI - 0.25); ctx.stroke();
    ctx.restore();
  };
  S.end = (ctx, t) => {
    sky(ctx, '#ff9ec7', '#ff6b8a'); burst(ctx, 540, 1000, t, 0.09, 16);
    ctx.fillStyle = '#e8577e'; ctx.fillRect(0, 1380, W, HH - 1380);
    const qk = pop(t, T(20, 'honest') - 0.12);
    toddler(ctx, 540, 1390, 1.05 * (1 - 0.15 * EI(t, T(20, 'so') - 0.2, T(20, 'so') + 0.4)), t, 1 + pop(t, T(19, 'squishy') - 0.1));
    pill(ctx, 'SQUISHY!', 820, 1180, { k: pop(t, T(19, 'squishy') - 0.12, T(20, 'so') - 0.1), bg: PAL.cart, size: 56, rot: 0.08 });
    bigText(ctx, 'TODDLER KNEES', 540, 320, 112, PAL.cream, pop(t, T(19, 'toddlers') - 0.15, T(20, 'so') - 0.1));
    if (qk > 0.01) {
      bigText(ctx, 'BORN WITHOUT', 540, 300, 112, PAL.cream, pop(t, T(21, 'born') - 0.15));
      bigText(ctx, 'KNEECAPS?', 540, 440, 130, PAL.yellow, pop(t, T(21, 'kneecaps') - 0.15));
      pill(ctx, 'I KNEW IT', 290, 1560, { k: pop(t, T(21, 'did') - 0.1), bg: PAL.green, col: PAL.white, size: 50 });
      pill(ctx, 'NO IDEA!', 790, 1560, { k: pop(t, T(21, 'know') - 0.1), bg: PAL.coral, col: PAL.white, size: 50 });
    }
  };

  const ORDER = [['hook', 0], ['knee', CUTS.knee], ['birth', CUTS.birth], ['crawl', CUTS.crawl], ['ossify', CUTS.ossify], ['tendon', CUTS.tendon], ['end', CUTS.end]];
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
    H.vignette(ctx, Wd, Hd, 0.16, '20,10,50');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  function scoreSound(k) {
    const D = DURATION;
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    const wipe = (t) => { k.play('whoosh', t - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); k.play('tock', t + 0.2, { f: 420, gain: 0.5 }); };
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 100, gain: 0.26, chords: [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['G3', 'B3', 'D4', 'F4']] });
    popAt(T(0, 'kneecaps') - 0.15, 560, 0.9, 0, false);
    k.play('pop', T(0, 'soft') - 0.1, { f: 300, gain: 0.5 }); popAt(T(0, 'soft') - 0.12, 760, 0.6, 0.4);
    popAt(T(0, 'three') - 0.15, 700, 0.6, 0.4);
    k.play('stamp', T(1, 'bony') - 0.1, { gain: 0.55 }); k.play('buzz', T(1, 'all') - 0.05, { f: 110, dur: 0.25, gain: 0.25 });
    wipe(CUTS.knee);
    popAt(T(2, 'knee') - 0.1, 500, 0.5, -0.3); popAt(T(2, 'disc') - 0.15, 640, 0.8, 0.3, false);
    k.play('ding', T(2, 'cartilage') - 0.05, { f: 'E6', gain: 0.3 }); popAt(T(2, 'cartilage') - 0.15, 560, 0.8, 0, false);
    k.play('pop', T(3, 'bendy') - 0.05, { f: 300, gain: 0.45 }); popAt(T(3, 'same') - 0.12, 700, 0.7, 0.4); popAt(T(3, 'tip') - 0.12, 900, 0.7, 0.4, false);
    wipe(CUTS.birth);
    k.play('stamp', T(4, 'why') - 0.1, { gain: 0.5 }); popAt(T(4, 'soft') - 0.15, 760, 0.8, 0, false);
    popAt(T(5, 'first') - 0.1, 560, 0.9, 0, false);
    popAt(T(6, 'hard') - 0.15, 480, 0.7, -0.4); popAt(T(6, 'hard') - 0.1, 760, 0.7, 0.4);
    k.noise(T(6, 'tight') - 0.3, { dur: 1.2, color: 'brown', filter: 'lowpass', f: [[0, 300], [1.2, 900]], gain: 0.2, a: 0.2, verb: 0.2 });
    k.play('error', T(6, 'riskier') - 0.05, { f: 'A3', gain: 0.3 }); k.play('success', T(6, 'riskier') + 0.15, { f: 'C6', gain: 0.25 });
    wipe(CUTS.crawl);
    popAt(T(7, 'crawling') - 0.15, 560, 0.9, 0, false);
    for (let t = T(8, 'knees'); t < CUTS.ossify - 0.4; t += Math.PI / 5.5) k.play('thud', t, { f: 90, gain: 0.35, minor: true });
    popAt(T(8, 'hit') - 0.12, 700, 0.6, 0);
    k.play('pop', T(9, 'soft') - 0.1, { f: 300, gain: 0.45 }); k.play('ding', T(9, 'better'), { f: 'G5', gain: 0.3 });
    wipe(CUTS.ossify);
    k.play('impact', T(10, 'between') - 0.15, { gain: 0.5 });
    for (let i = 0; i < 4; i++) k.play('tick', T(10, 'three') + i * 0.18, { f: 2600, gain: 0.5, minor: true });
    ISL.forEach((p, i) => popAt(T(11, 'islands') - 0.1 + p.d, 700 + i * 80, 0.7, -0.4 + i * 0.2, i > 0));
    k.play('riser', T(12, 'grow') - 0.2, { dur: 2.2, gain: 0.45 });
    k.play('impact', T(15, 'fused') - 0.1, { gain: 0.7 }); k.play('sparkle', T(15, 'solid') - 0.2, { n: 6, gain: 0.6 }); k.play('success', T(15, 'kneecap') - 0.05, { f: 'C6', gain: 0.35 });
    wipe(CUTS.tendon);
    k.play('stamp', T(16, 'weird') - 0.15, { gain: 0.5 }); popAt(T(16, 'bone') - 0.12, 640, 0.6, 0.4);
    k.play('ding', T(17, 'biggest'), { f: 'A5', gain: 0.3 }); popAt(T(17, 'biggest') - 0.12, 560, 0.8, 0, false);
    k.play('blip', T(18, 'tendon') - 0.1, { gain: 0.4 });
    wipe(CUTS.end);
    k.play('pop', T(19, 'squishy') - 0.1, { f: 300, gain: 0.55 }); popAt(T(19, 'squishy') - 0.12, 800, 0.7, 0.4);
    k.play('sparkle', T(21, 'born') - 0.2, { n: 5, gain: 0.5 }); popAt(T(21, 'kneecaps') - 0.15, 700, 0.9, 0, false);
    popAt(T(21, 'did') - 0.1, 640, 0.6, -0.4); popAt(T(21, 'know') - 0.1, 760, 0.6, 0.4);
    k.tone(T(21, 'kneecaps') + 0.6, { f: 'C4', type: 'triangle', dur: 1.0, gain: 0.1, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
