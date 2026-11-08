// Flat-Vector Science, vertical 1080x1920: "Why do your baby teeth fall out?"
// Unattended run: no storyboard step (STUDIO.md), test frames checked instead.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [{"s":0.25,"e":2.14,"text":"Every baby tooth you ever lost,","words":[["every",0.25],["baby",0.63],["tooth",0.93],["you",1.31],["ever",1.54],["lost",1.84]]},{"s":2.44,"e":3.74,"text":"was secretly eaten.","words":[["was",2.44],["secretly",2.69],["eaten",3.34]]},{"s":4.29,"e":5.04,"text":"By what?","words":[["by",4.29],["what",4.54]]},{"s":5.59,"e":7.28,"text":"Kids have twenty baby teeth.","words":[["kids",5.59],["have",5.88],["twenty",6.18],["baby",6.62],["teeth",6.91]]},{"s":7.83,"e":9.23,"text":"Adults have thirty-two.","words":[["adults",7.83],["have",8.27],["thirtytwo",8.57]]},{"s":9.78,"e":12.3,"text":"But a tiny jaw can't fit big adult teeth,","words":[["but",9.78],["a",10.02],["tiny",10.11],["jaw",10.43],["cant",10.67],["fit",11.0],["big",11.24],["adult",11.49],["teeth",11.89]]},{"s":12.6,"e":13.88,"text":"so the new ones wait,","words":[["so",12.6],["the",12.76],["new",13.0],["ones",13.24],["wait",13.56]]},{"s":14.18,"e":15.84,"text":"hidden in the bone underneath.","words":[["hidden",14.18],["in",14.58],["the",14.71],["bone",14.91],["underneath",15.18]]},{"s":16.39,"e":17.54,"text":"Around age six,","words":[["around",16.39],["age",16.97],["six",17.25]]},{"s":17.84,"e":19.6,"text":"an adult tooth starts pushing up.","words":[["an",17.84],["adult",17.97],["tooth",18.29],["starts",18.62],["pushing",19.01],["up",19.47]]},{"s":20.15,"e":22.14,"text":"That pressure wakes up special cells,","words":[["that",20.15],["pressure",20.41],["wakes",20.92],["up",21.24],["special",21.37],["cells",21.82]]},{"s":22.44,"e":23.91,"text":"called odontoclasts.","words":[["called",22.44],["odontoclasts",22.93]]},{"s":24.46,"e":26.41,"text":"They dissolve the baby tooth's root,","words":[["they",24.46],["dissolve",24.73],["the",25.27],["baby",25.47],["tooths",25.74],["root",26.14]]},{"s":26.71,"e":27.65,"text":"bit by bit.","words":[["bit",26.71],["by",27.06],["bit",27.29]]},{"s":28.2,"e":30.21,"text":"No root means nothing holding on,","words":[["no",28.2],["root",28.34],["means",28.64],["nothing",29.01],["holding",29.54],["on",30.06]]},{"s":30.51,"e":31.54,"text":"so it wobbles,","words":[["so",30.51],["it",30.69],["wobbles",30.88]]},{"s":31.84,"e":32.8,"text":"and pops out.","words":[["and",31.84],["pops",32.13],["out",32.51]]},{"s":33.35,"e":35.16,"text":"That's why a lost baby tooth,","words":[["thats",33.35],["why",33.76],["a",34.01],["lost",34.09],["baby",34.42],["tooth",34.75]]},{"s":35.46,"e":37.22,"text":"looks like it has no root at all.","words":[["looks",35.46],["like",35.81],["it",36.09],["has",36.24],["no",36.45],["root",36.59],["at",36.87],["all",37.01]]},{"s":37.77,"e":38.76,"text":"It got eaten.","words":[["it",37.77],["got",37.97],["eaten",38.27]]},{"s":39.31,"e":41.51,"text":"Then the adult tooth slides into the gap.","words":[["then",39.31],["the",39.58],["adult",39.78],["tooth",40.11],["slides",40.45],["into",40.85],["the",41.11],["gap",41.31]]},{"s":42.06,"e":43.42,"text":"By about age twelve,","words":[["by",42.06],["about",42.23],["age",42.66],["twelve",42.91]]},{"s":43.72,"e":45.36,"text":"most baby teeth are gone.","words":[["most",43.72],["baby",44.05],["teeth",44.37],["are",44.78],["gone",45.03]]},{"s":45.91,"e":47.9,"text":"So which of yours got eaten first?","words":[["so",45.91],["which",46.06],["of",46.43],["yours",46.57],["got",46.94],["eaten",47.16],["first",47.53]]}];
  const T = (i, w) => { const hit = BEATS[i].words.find((x) => x[0] === w); return hit ? hit[1] : BEATS[i].s; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const cut = (i) => BEATS[i].s - 0.25;
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { ink: '#1d1d3a', cream: '#fff6e6', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', teal: '#1fb6a6', green: '#58c26b', lime: '#c6ec4a', yellow: '#ffd23f', pink: '#ff7f9f', purple: '#6b3fd4', violet: '#9b6bff', white: '#ffffff', baby: '#ffffff', adult: '#fff1c9', gum: '#f27a96', gum2: '#e35d7e', bone: '#f6dfb8', bone2: '#e9c994' };
  const rr = (ctx, x, y, w, h, r) => { r = Math.min(r, w / 2, h / 2); ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
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
  const rays = (ctx, x, y, t, a = 0.2, dir = 1) => { ctx.save(); ctx.translate(x, y); ctx.rotate(t * 0.15 * dir); ctx.fillStyle = `rgba(255,255,255,${a})`; for (let i = 0; i < 12; i++) { const q = i / 12 * Math.PI * 2; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 1500, q, q + 0.26); ctx.fill(); } ctx.restore(); };

  // ---------- a flat cartoon tooth; origin = gum line (crown above, roots below) ----------
  const toothPath = (ctx, root) => {
    ctx.beginPath(); ctx.moveTo(-105, 0); ctx.lineTo(-110, -120);
    ctx.bezierCurveTo(-112, -205, -30, -218, 0, -178);
    ctx.bezierCurveTo(30, -218, 112, -205, 110, -120);
    ctx.lineTo(105, 0);
    if (root > 0.02) {
      const L = 270 * root;
      ctx.quadraticCurveTo(100, L * 0.6, 68, L); ctx.quadraticCurveTo(52, L + 20, 36, L);
      ctx.quadraticCurveTo(26, L * 0.45, 0, Math.min(46, L * 0.35) + 4);
      ctx.quadraticCurveTo(-26, L * 0.45, -36, L); ctx.quadraticCurveTo(-52, L + 20, -68, L);
      ctx.quadraticCurveTo(-100, L * 0.6, -105, 0);
    } else {
      // ragged little stub where the root was eaten away
      ctx.lineTo(70, 22); ctx.lineTo(40, 8); ctx.lineTo(10, 26); ctx.lineTo(-20, 8); ctx.lineTo(-52, 24); ctx.lineTo(-80, 8);
    }
    ctx.closePath();
  };
  const tooth = (ctx, x, y, s, t, o = {}) => {
    if (s <= 0.01) return;
    const root = o.root ?? 1, col = o.col || PAL.baby;
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || col; toothPath(ctx, root); ctx.fill(); }, o.sh ?? 18);
    ctx.strokeStyle = 'rgba(160,190,230,0.45)'; ctx.lineWidth = 14; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(-72, -40); ctx.quadraticCurveTo(-82, -130, -52, -160); ctx.stroke();
    if (o.face) {
      const bl = ((t + (o.seed || 0)) % 3.3) < 0.12 ? 0.15 : 1;
      [[-42, -100], [42, -100]].forEach(([ex, ey]) => { ctx.save(); ctx.translate(ex, ey); ctx.scale(1, bl); circle(ctx, 0, 0, 22, PAL.ink); circle(ctx, 7, -7, 7, PAL.white); ctx.restore(); });
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 10; ctx.beginPath();
      if (o.worried) { ctx.arc(0, -30, 26, Math.PI + 0.5, -0.5); } else ctx.arc(0, -72, 28, 0.3, Math.PI - 0.3);
      ctx.stroke();
      circle(ctx, -78, -62, 15, 'rgba(255,110,140,0.55)'); circle(ctx, 78, -62, 15, 'rgba(255,110,140,0.55)');
    }
    ctx.restore();
  };
  // ---------- odontoclast: a purple root-munching cell ----------
  const clast = (ctx, x, y, r, t, o = {}) => {
    if (r <= 1) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.ang || 0);
    const m = o.chomp ? 0.12 + Math.abs(Math.sin(t * 9 + (o.seed || 0))) * 0.55 : 0.08;
    const col = o.dark ? 'rgba(40,20,80,0.85)' : (o.col || PAL.purple);
    longShadow(ctx, (c) => { ctx.fillStyle = c || col; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, r, m, Math.PI * 2 - m); ctx.closePath(); ctx.fill(); }, Math.min(12, r * 0.2));
    if (!o.dark) { circle(ctx, r * 0.15, -r * 0.45, r * 0.2, PAL.white); circle(ctx, r * 0.2, -r * 0.45, r * 0.1, PAL.ink); }
    else { circle(ctx, r * 0.15, -r * 0.45, r * 0.13, PAL.yellow); }
    ctx.restore();
  };
  const crumbs = (ctx, t, t0, x, y, seed, n = 10, col = PAL.white) => {
    const u = ph(t, t0, t0 + 0.9); if (u <= 0 || u >= 1) return; const r = H.rng(seed);
    for (let i = 0; i < n; i++) { const a = r() * Math.PI * 2, d = 60 + r() * 160; ctx.save(); ctx.globalAlpha = 1 - u; circle(ctx, x + Math.cos(a) * d * u, y + Math.sin(a) * d * u + 200 * u * u, 8 + r() * 10, col); ctx.restore(); }
  };

  // ---------- jaw cross-section (shared by jaw / push / dissolve scenes) ----------
  const GUM = 980;
  const jaw = (ctx, t, p) => {
    // bone with spongy holes
    ctx.fillStyle = PAL.bone; ctx.fillRect(-400, GUM + 70, W + 800, HH);
    const r = H.rng(11); ctx.fillStyle = PAL.bone2;
    for (let i = 0; i < 42; i++) { const x = r() * W, y = GUM + 120 + r() * 700, s = 10 + r() * 26; ctx.beginPath(); ctx.ellipse(x, y, s * 1.3, s, r() * 3, 0, Math.PI * 2); ctx.fill(); }
    // gum band
    ctx.fillStyle = PAL.gum; ctx.beginPath(); ctx.moveTo(-400, GUM + 90);
    for (let x = -400; x <= W + 400; x += 20) ctx.lineTo(x, GUM - 30 + Math.cos((x - 540) / 260) * -24);
    ctx.lineTo(W + 400, GUM + 90); ctx.closePath(); ctx.fill();
    ctx.fillStyle = PAL.gum2; ctx.fillRect(-400, GUM + 70, W + 800, 22);
    const root = p.root ?? 1, babyY = GUM - 30 + (p.babyLift || 0);
    // adult tooth waits in its crypt right under the baby roots
    const tip = babyY + 270 * root * 1.0;
    const aY = Math.max(tip + 250, GUM + 30) + (p.adultDrop || 0);
    if (p.adult > 0.01) {
      ctx.save(); ctx.globalAlpha = Math.min(1, p.adult); ctx.fillStyle = 'rgba(190,140,90,0.35)'; ctx.beginPath(); ctx.ellipse(540, aY - 110, 170, 175, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      tooth(ctx, 540, aY, 1.12 * Math.min(1, p.adult), t, { root: p.adultRoot ?? 0.15, col: PAL.adult, sh: 12 });
      if (p.push > 0.01) { // pressure arrows
        ctx.save(); ctx.globalAlpha = p.push; ctx.fillStyle = PAL.orange;
        [-1, 1].forEach((sd) => { const yy = aY - 60 - ((t * 120) % 60); ctx.save(); ctx.translate(540 + sd * 230, yy); ctx.beginPath(); ctx.moveTo(0, -60); ctx.lineTo(40, 0); ctx.lineTo(14, 0); ctx.lineTo(14, 60); ctx.lineTo(-14, 60); ctx.lineTo(-14, 0); ctx.lineTo(-40, 0); ctx.closePath(); ctx.fill(); ctx.restore(); });
        ctx.restore();
      }
    }
    tooth(ctx, 540 + (p.babyX || 0), babyY, 1, t, { root, face: p.face, worried: p.worried, rot: p.babyRot || 0 });
    // odontoclasts around the root tips
    if (p.clasts > 0.01) {
      const tipY = babyY + 270 * root;
      [[-120, -10, 0.4], [120, 0, Math.PI - 0.4], [-40, 70, -Math.PI / 2 + 0.3], [60, 80, -Math.PI / 2 - 0.4], [-170, -90, 0.2], [170, -80, Math.PI - 0.2]].forEach(([dx, dy, a], i) => {
        const k = H.ease.back(H.clamp(p.clasts * 1.6 - i * 0.12));
        clast(ctx, 540 + dx + Math.sin(t * 3 + i) * 6, tipY + dy + Math.cos(t * 2.6 + i) * 6, 46 * k, t, { ang: a, chomp: p.chomp, seed: i });
      });
    }
  };

  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#d9f1ff', '#9fd6ff'); rays(ctx, 540, 980, t, 0.22);
    ctx.fillStyle = '#7cc4f2'; ctx.fillRect(0, 1560, W, HH);
    const eat = EI(t, T(1, 'eaten') - 0.1, T(1, 'eaten') + 0.7);
    const shake = t > T(1, 'eaten') - 0.1 && t < T(1, 'eaten') + 0.7 ? Math.sin(t * 60) * 8 : 0;
    const z = 1.45 + EO(t, 0, 5) * 0.12;
    tooth(ctx, 540 + shake, 1190, z * pop(t, 0.05), t, { root: 1 - eat, face: true, worried: t > T(1, 'eaten') });
    crumbs(ctx, t, T(1, 'eaten'), 540, 1430, 5, 14);
    // mystery munchers peek in
    const mk = EO(t, T(2, 'by') - 0.15, T(2, 'what') + 0.2);
    [[180, 1460, 0.3], [900, 1430, Math.PI - 0.3], [540, 1560, -Math.PI / 2]].forEach(([x, y, a], i) => clast(ctx, x, y + (1 - mk) * 260, 80 * H.clamp(mk * 1.5), t, { ang: a, dark: true, chomp: true, seed: i }));
    pill(ctx, 'EVERY BABY TOOTH', 540, 300, { k: pop(t, T(0, 'baby') - 0.15) * bump(t, T(0, 'lost')), bg: PAL.cream, size: 76 });
    big(ctx, 'EATEN?!', 540, 520, 150, PAL.red, pop(t, T(1, 'eaten') - 0.15) * bump(t, T(1, 'eaten')));
    pill(ctx, 'BY WHAT?', 540, 700, { k: pop(t, T(2, 'what') - 0.15), bg: PAL.ink, col: PAL.yellow, size: 80 });
  };
  S.count = (ctx, t) => {
    sky(ctx, '#fff3d1', '#ffd98a');
    ctx.fillStyle = '#ffc861'; ctx.fillRect(0, 1600, W, HH);
    // kids: 20 teeth
    const kc = EO(t, T(3, 'twenty') - 0.15, T(3, 'teeth') + 0.3), kn = Math.round(kc * 20);
    pill(ctx, 'KIDS', 270, 300, { k: pop(t, T(3, 'kids') - 0.15), bg: PAL.teal, col: PAL.white, size: 70 });
    big(ctx, String(kn), 720, 300, 170, PAL.ink, pop(t, T(3, 'twenty') - 0.2) * bump(t, T(3, 'teeth')));
    for (let i = 0; i < kn; i++) { const row = Math.floor(i / 10), col = i % 10; tooth(ctx, 135 + col * 90, 560 + row * 150, 0.3, t, { root: 0.55, sh: 6 }); }
    // adults: 32 teeth
    const ac = EO(t, T(4, 'thirtytwo') - 0.15, T(4, 'thirtytwo') + 0.8), an = Math.round(ac * 32);
    pill(ctx, 'ADULTS', 290, 960, { k: pop(t, T(4, 'adults') - 0.15), bg: PAL.orange, col: PAL.white, size: 70 });
    big(ctx, String(an), 740, 960, 170, PAL.ink, pop(t, T(4, 'thirtytwo') - 0.2) * bump(t, T(4, 'thirtytwo') + 0.8));
    for (let i = 0; i < an; i++) { const row = Math.floor(i / 8), col = i % 8; tooth(ctx, 155 + col * 110, 1180 + row * 115, 0.36, t, { root: 0.4, col: PAL.adult, sh: 6 }); }
  };
  S.jaw = (ctx, t) => {
    sky(ctx, '#ffe3ec', '#ffc2d4');
    const ak = EO(t, T(6, 'new') - 0.2, T(6, 'wait'));
    jaw(ctx, t, { root: 1, adult: ak, face: true });
    // tiny jaw vs big teeth
    pill(ctx, 'TINY JAW', 540, 260, { k: pop(t, T(5, 'tiny') - 0.15, BEATS[6].s - 0.1) * bump(t, T(5, 'jaw')), bg: PAL.ink, col: PAL.cream, size: 76 });
    const fk = pop(t, T(5, 'big') - 0.15, BEATS[6].s - 0.1);
    if (fk > 0.01) {
      ctx.save(); ctx.translate(540, 520); ctx.scale(fk, fk);
      tooth(ctx, -170, 70, 0.5, t, { root: 0.4, col: PAL.adult, sh: 8 }); tooth(ctx, 0, 70, 0.5, t, { root: 0.4, col: PAL.adult, sh: 8 }); tooth(ctx, 170, 70, 0.5, t, { root: 0.4, col: PAL.adult, sh: 8 });
      ctx.restore();
      const xk = EO(t, T(5, 'fit') - 0.15, T(5, 'fit') + 0.2);
      if (xk > 0) { ctx.save(); ctx.strokeStyle = PAL.red; ctx.lineWidth = 30; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(330, 380); ctx.lineTo(H.lerp(330, 750, xk), H.lerp(380, 660, xk)); ctx.stroke(); ctx.restore(); }
    }
    pill(ctx, 'THE NEW ONES WAIT', 540, 260, { k: pop(t, T(6, 'new') - 0.15, BEATS[7].s - 0.1) * bump(t, T(6, 'wait')), bg: PAL.adult, size: 70 });
    // zzz above crypt
    if (ak > 0.5) { for (let i = 0; i < 3; i++) { const u = (t * 0.6 + i / 3) % 1; ctx.save(); ctx.globalAlpha = (1 - u) * Math.min(1, (ak - 0.5) * 2); text(ctx, 'z', 800 + u * 60 + i * 8, 1450 - u * 140, 50 + i * 10, PAL.ink); ctx.restore(); } }
    pill(ctx, 'HIDDEN IN THE BONE', 540, 260, { k: pop(t, T(7, 'hidden') - 0.15) * bump(t, T(7, 'bone')), bg: PAL.bone2, size: 70 });
    const ar = pop(t, T(7, 'underneath') - 0.2);
    if (ar > 0.01) { ctx.save(); ctx.globalAlpha = Math.min(1, ar); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(540, 360); ctx.quadraticCurveTo(960, 700, 760, 1400); ctx.stroke(); ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.moveTo(740, 1440); ctx.lineTo(720, 1370); ctx.lineTo(790, 1385); ctx.fill(); ctx.restore(); }
  };
  S.push = (ctx, t) => {
    sky(ctx, '#e7ddff', '#c3b0ff');
    const z = 1 + EI(t, BEATS[9].s, BEATS[11].e) * 0.12;
    ctx.save(); ctx.translate(540, 1200); ctx.scale(z, z); ctx.translate(-540, -1200);
    const push = EO(t, T(9, 'pushing') - 0.15, T(9, 'up') + 0.3);
    jaw(ctx, t, { root: 1, adult: 1, adultDrop: (1 - push) * 70, push: ph(t, T(9, 'pushing') - 0.15, T(9, 'pushing')) * (1 - ph(t, T(10, 'special'), T(10, 'special') + 0.4)), face: true, worried: t > T(9, 'pushing'), clasts: ph(t, T(10, 'special') - 0.15, T(10, 'cells') + 0.4) });
    ctx.restore();
    big(ctx, 'AGE 6', 540, 300, 150, PAL.purple, pop(t, T(8, 'age') - 0.15, BEATS[9].s - 0.1) * bump(t, T(8, 'six')));
    pill(ctx, 'PUSHING UP', 540, 280, { k: pop(t, T(9, 'pushing') - 0.15, BEATS[10].s - 0.1) * bump(t, T(9, 'up')), bg: PAL.orange, col: PAL.white, size: 80 });
    pill(ctx, 'PRESSURE', 540, 280, { k: pop(t, T(10, 'pressure') - 0.15, T(10, 'special') - 0.2), bg: PAL.red, col: PAL.white, size: 80 });
    pill(ctx, 'SPECIAL CELLS WAKE UP', 540, 280, { k: pop(t, T(10, 'special') - 0.15, BEATS[11].s - 0.1), bg: PAL.cream, size: 62 });
    pill(ctx, 'ODONTOCLASTS', 540, 280, { k: pop(t, T(11, 'odontoclasts') - 0.15) * bump(t, T(11, 'odontoclasts') + 0.4), bg: PAL.purple, col: PAL.white, size: 84 });
  };
  S.dissolve = (ctx, t) => {
    sky(ctx, '#fff0c2', '#ffd27a');
    const eat = EI(t, T(12, 'dissolve') - 0.1, BEATS[13].e + 0.2);
    const z = 1.3;
    ctx.save(); ctx.translate(540, 1250); ctx.scale(z, z); ctx.translate(-540, -1180);
    jaw(ctx, t, { root: 1 - eat * 0.92, adult: 1, adultRoot: 0.15 + eat * 0.2, face: true, worried: true, clasts: 1, chomp: true });
    ctx.restore();
    // crumbs on each "bit"
    ['bit', 'by'].forEach((w, i) => crumbs(ctx, t, T(13, w) + i * 0.3, 540, 1400 - eat * 300, 30 + i, 10, PAL.white));
    crumbs(ctx, t, T(13, 'bit', 2) + 0.6, 540, 1250, 33, 10, PAL.white);
    pill(ctx, 'ROOT DISSOLVES', 540, 280, { k: pop(t, T(12, 'dissolve') - 0.15) * bump(t, T(12, 'root')), bg: PAL.purple, col: PAL.white, size: 80 });
    pill(ctx, 'BIT BY BIT', 540, 460, { k: pop(t, T(13, 'bit') - 0.15) * bump(t, BEATS[13].e - 0.3), bg: PAL.cream, size: 72 });
  };
  S.wobble = (ctx, t) => {
    sky(ctx, '#d6ffe8', '#8fe3b5'); rays(ctx, 540, 800, t, 0.18, -1);
    const wob = ph(t, T(15, 'wobbles') - 0.15, T(16, 'pops')) > 0 && t < T(16, 'pops') ? Math.sin(t * 22) * 0.22 : 0;
    const fly = EO(t, T(16, 'pops') - 0.05, T(16, 'pops') + 0.9);
    const lift = -fly * 1200 + fly * fly * 300, fx = fly * 560;
    jaw(ctx, t, { root: 0, adult: 1, adultRoot: 0.4, babyLift: lift, babyX: fx, babyRot: wob + fly * 5, face: true, worried: t < T(16, 'pops') });
    if (fly > 0 && fly < 0.6) for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; ctx.save(); ctx.globalAlpha = 1 - fly / 0.6; ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(540 + Math.cos(a) * (100 + fly * 300), 900 + Math.sin(a) * (100 + fly * 300)); ctx.lineTo(540 + Math.cos(a) * (160 + fly * 400), 900 + Math.sin(a) * (160 + fly * 400)); ctx.stroke(); ctx.restore(); }
    pill(ctx, 'NO ROOT = NOTHING HOLDING IT', 540, 280, { k: pop(t, T(14, 'root') - 0.15, BEATS[15].s - 0.1), bg: PAL.cream, size: 52 });
    big(ctx, 'WOBBLE', 540, 300, 130, PAL.teal, pop(t, T(15, 'wobbles') - 0.15, T(16, 'pops') - 0.1) * (1 + wob * 0.4));
    big(ctx, 'POP!', 330, 560, 190, PAL.orange, pop(t, T(16, 'pops') - 0.15) * bump(t, T(16, 'pops')));
  };
  S.lost = (ctx, t) => {
    sky(ctx, '#e3ecff', '#b3c8ff');
    // pillow
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#7aa2ff'; rr(ctx, 100, 1180, 880, 340, 120); ctx.fill(); }, 20);
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; rr(ctx, 160, 1210, 760, 60, 30); ctx.fill();
    const ghost = EO(t, T(18, 'root') - 0.2, T(18, 'root') + 0.3) * (1 - ph(t, T(19, 'eaten'), T(19, 'eaten') + 0.4));
    const tk = pop(t, BEATS[17].s - 0.45);
    ctx.save(); ctx.translate(540, 1000); ctx.scale(1.5 * tk, 1.5 * tk);
    if (ghost > 0.01) { ctx.save(); ctx.globalAlpha = ghost; ctx.setLineDash([22, 18]); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 9; toothPath(ctx, 1); ctx.stroke(); ctx.restore(); }
    ctx.restore();
    tooth(ctx, 540, 1000, 1.5 * tk, t, { root: 0, face: true, worried: t > T(18, 'root') && t < T(19, 'eaten') });
    if (ghost > 0.3) big(ctx, '?', 840, 1260, 150, PAL.red, ghost);
    pill(ctx, 'A LOST BABY TOOTH', 540, 300, { k: pop(t, T(17, 'lost') - 0.15, BEATS[18].s - 0.1), bg: PAL.cream, size: 70 });
    pill(ctx, 'NO ROOT AT ALL', 540, 300, { k: pop(t, T(18, 'root') - 0.15, BEATS[19].s - 0.1) * bump(t, T(18, 'all')), bg: PAL.red, col: PAL.white, size: 76 });
    const ek = pop(t, T(19, 'eaten') - 0.15);
    big(ctx, 'IT GOT EATEN', 540, 320, 120, PAL.purple, ek * bump(t, T(19, 'eaten')));
    if (ek > 0.01) clast(ctx, 840, 620, 90 * ek, t, { ang: Math.PI - 0.3, chomp: true });
  };
  S.gap = (ctx, t) => {
    sky(ctx, '#ffe9d6', '#ffbf94');
    const n = 7, sp = 128, x0 = 540 - (n - 1) / 2 * sp, base = 1180;
    // mouth
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#8a2346'; rr(ctx, 70, 760, 940, 560, 200); ctx.fill(); }, 20);
    const slide = EO(t, T(20, 'slides') - 0.2, T(20, 'gap') + 0.2);
    const swap = (i) => EO(t, T(21, 'twelve') + 0.2 + Math.abs(i - 3) * 0.28, T(21, 'twelve') + 0.6 + Math.abs(i - 3) * 0.28);
    for (let i = 0; i < n; i++) {
      const x = x0 + i * sp;
      if (i === 3) { const y = base + (1 - slide) * 230; ctx.save(); ctx.fillStyle = PAL.adult; rr(ctx, x - 54, y - 210, 108, 230, 40); ctx.fill(); ctx.restore(); continue; }
      const s = swap(i), hgt = H.lerp(150, 200, s), wd = H.lerp(92, 106, s);
      ctx.fillStyle = s > 0.5 ? PAL.adult : PAL.baby; rr(ctx, x - wd / 2, base - hgt, wd, hgt + 30, 34); ctx.fill();
    }
    // gum covers the emerging tooth
    ctx.fillStyle = PAL.gum; rr(ctx, 70, base, 940, 160, 50); ctx.fill();
    ctx.fillStyle = PAL.gum2; ctx.fillRect(110, base + 120, 860, 18);
    if (slide > 0.9 && slide < 1.0 || ph(t, T(20, 'gap'), T(20, 'gap') + 0.5) > 0 && t < T(20, 'gap') + 0.5) crumbs(ctx, t, T(20, 'gap'), 540, 980, 71, 8, PAL.yellow);
    pill(ctx, 'ADULT TOOTH SLIDES IN', 540, 300, { k: pop(t, T(20, 'adult') - 0.15, BEATS[21].s - 0.1) * bump(t, T(20, 'gap')), bg: PAL.adult, size: 62 });
    big(ctx, 'AGE 12', 540, 320, 150, PAL.ink, pop(t, T(21, 'twelve') - 0.2) * bump(t, T(21, 'twelve')));
    pill(ctx, 'MOST BABY TEETH GONE', 540, 520, { k: pop(t, T(22, 'most') - 0.15) * bump(t, T(22, 'gone')), bg: PAL.green, col: PAL.white, size: 62 });
    pill(ctx, 'BABY', 300, 1500, { k: pop(t, BEATS[20].s), bg: PAL.baby, size: 50, sh: 10 });
    pill(ctx, 'ADULT', 780, 1500, { k: pop(t, BEATS[20].s + 0.15), bg: PAL.adult, size: 50, sh: 10 });
  };
  S.ask = (ctx, t) => {
    sky(ctx, '#d9f1ff', '#9fd6ff'); rays(ctx, 540, 1000, t, 0.2);
    tooth(ctx, 540, 1080, 1.3 * pop(t, BEATS[23].s - 0.2), t, { root: 0, face: true });
    clast(ctx, 260, 1400, 80 * pop(t, T(23, 'eaten') - 0.15), t, { ang: -0.3, chomp: true });
    clast(ctx, 820, 1420, 80 * pop(t, T(23, 'eaten') - 0.05), t, { ang: Math.PI + 0.3, chomp: true, seed: 2 });
    pill(ctx, 'WHICH OF YOURS', 540, 300, { k: pop(t, T(23, 'which') - 0.15) * bump(t, T(23, 'yours')), bg: PAL.ink, col: PAL.cream, size: 76 });
    big(ctx, 'GOT EATEN FIRST?', 540, 490, 104, PAL.purple, pop(t, T(23, 'eaten') - 0.15) * bump(t, T(23, 'first')));
    pill(ctx, 'TELL ME BELOW', 540, 1620, { k: pop(t, T(23, 'first') + 0.2), bg: PAL.yellow, size: 54 });
  };

  const ORDER = [['hook', 0], ['count', cut(3)], ['jaw', cut(5)], ['push', cut(8)], ['dissolve', cut(12)], ['wobble', cut(14)], ['lost', cut(17)], ['gap', cut(20)], ['ask', cut(23)]];
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
    const crunch = (t, g = 0.18) => k.noise(t, { dur: 0.25, color: 'white', filter: 'bandpass', f: 2500, gain: g, a: 0.01, minor: true });
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 108, gain: 0.3, chords: [['D4', 'F#4', 'A4', 'C#5'], ['B3', 'D4', 'F#4', 'A4'], ['G3', 'B3', 'D4', 'F#4'], ['A3', 'C#4', 'E4', 'G4']] });
    popAt(0.05, 520, 0.8, 0, false);
    popAt(T(0, 'baby') - 0.15, 640, 0.9, 0, false);
    k.play('impact', T(1, 'eaten'), { gain: 0.7 }); for (let i = 0; i < 5; i++) crunch(T(1, 'eaten') + i * 0.13, 0.22);
    popAt(T(2, 'what') - 0.15, 560, 0.9, 0, false); k.play('riser', T(2, 'by') - 0.3, { dur: 0.8, gain: 0.35 });
    ORDER.slice(1).forEach((o) => wipe(o[1]));
    popAt(T(3, 'kids') - 0.15, 620, 0.8, -0.3, false);
    for (let f = Math.ceil((T(3, 'twenty') - 0.15) * 12); f < (T(3, 'teeth') + 0.3) * 12; f += 2) k.play('tick', f / 12, { f: 3000, gain: 0.6, minor: true });
    k.play('ding', T(3, 'teeth') + 0.3, { f: 'E6', gain: 0.3 });
    popAt(T(4, 'adults') - 0.15, 620, 0.8, 0.3, false);
    for (let f = Math.ceil((T(4, 'thirtytwo') - 0.15) * 12); f < (T(4, 'thirtytwo') + 0.8) * 12; f += 2) k.play('tick', f / 12, { f: 3300, gain: 0.6, minor: true });
    k.play('stamp', T(4, 'thirtytwo') + 0.8, { gain: 0.5 });
    popAt(T(5, 'tiny') - 0.15, 700, 0.8, 0, false); popAt(T(5, 'big') - 0.15, 480, 0.8, 0, false); k.play('error', T(5, 'fit'), { f: 'A3', gain: 0.4 });
    popAt(T(6, 'new') - 0.15, 600, 0.8, 0, false); k.play('thud', T(6, 'wait'), { f: 140, gain: 0.5 });
    popAt(T(7, 'hidden') - 0.15, 560, 0.8, 0, false); k.play('swish', T(7, 'underneath') - 0.2, { gain: 0.5 });
    k.play('impact', T(8, 'six'), { gain: 0.6 }); popAt(T(8, 'age') - 0.15, 720, 0.9, 0, false);
    k.play('riser', T(9, 'pushing') - 0.3, { dur: 1.2, gain: 0.45 }); popAt(T(9, 'pushing') - 0.15, 600, 0.8, 0, false);
    k.play('thud', T(10, 'pressure'), { f: 100, gain: 0.7 }); popAt(T(10, 'pressure') - 0.15, 520, 0.8, 0, false);
    for (let i = 0; i < 6; i++) popAt(T(10, 'special') - 0.1 + i * 0.12, 900 + i * 80, 0.35);
    k.play('ding', T(11, 'odontoclasts') + 0.4, { f: 'A5', gain: 0.32 }); popAt(T(11, 'odontoclasts') - 0.15, 640, 0.9, 0, false);
    popAt(T(12, 'dissolve') - 0.15, 600, 0.9, 0, false);
    for (let i = 0; i < 18; i++) crunch(T(12, 'dissolve') + i * 0.17, 0.12);
    ['bit', 'by'].forEach((w) => k.play('tock', T(13, w), { f: 700, gain: 0.6 })); k.play('tock', BEATS[13].e - 0.3, { f: 900, gain: 0.6 });
    popAt(T(14, 'root') - 0.15, 620, 0.8, 0, false);
    for (let i = 0; i < 6; i++) k.play('tock', T(15, 'wobbles') + i * 0.14, { f: 350 + (i % 2) * 150, gain: 0.4, minor: true });
    k.play('pop', T(16, 'pops') - 0.02, { f: 300, gain: 1.0 }); k.play('whoosh', T(16, 'pops'), { dur: 0.6, gain: 0.7, top: 3000 }); k.play('sparkle', T(16, 'pops') + 0.1, { n: 6, gain: 0.5 });
    popAt(T(17, 'lost') - 0.15, 600, 0.8, 0, false);
    k.play('error', T(18, 'root'), { f: 'G3', gain: 0.4 }); popAt(T(18, 'root') - 0.15, 560, 0.8, 0, false);
    k.play('impact', T(19, 'eaten'), { gain: 0.7 }); for (let i = 0; i < 4; i++) crunch(T(19, 'eaten') + 0.1 + i * 0.13, 0.2);
    popAt(T(20, 'adult') - 0.15, 640, 0.8, 0, false); k.play('swish', T(20, 'slides') - 0.1, { gain: 0.6 }); k.play('success', T(20, 'gap'), { f: 'C6', gain: 0.32 });
    k.play('stamp', T(21, 'twelve'), { gain: 0.5 }); for (let i = 0; i < 6; i++) popAt(T(21, 'twelve') + 0.4 + i * 0.14, 800 + i * 70, 0.35);
    popAt(T(22, 'most') - 0.15, 700, 0.8, 0, false); k.play('ding', T(22, 'gone'), { f: 'G5', gain: 0.3 });
    popAt(T(23, 'which') - 0.15, 600, 0.8, 0, false); popAt(T(23, 'eaten') - 0.15, 700, 0.9, 0, false);
    k.play('success', T(23, 'first') + 0.3, { f: 'D6', gain: 0.35 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
