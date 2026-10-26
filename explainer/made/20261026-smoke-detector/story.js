// ================= Flat-Vector Science, vertical 1080x1920: "How do smoke detectors know there's a fire?" =================
// Unattended run: no storyboard step. BEATS copied from phrases.json (Kokoro am_michael).
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    { id: 'p0', s: 0.25, e: 2.84, w: {"your": 0.25, "smoke": 0.57, "alarm": 0.98, "might": 1.38, "be": 1.79, "radioactive": 1.95} },  // Your smoke alarm might be radioactive.
    { id: 'p1', s: 3.39, e: 4.54, w: {"nobody": 3.39, "tells": 3.88, "you": 4.29} },  // Nobody tells you,
    { id: 'p2', s: 4.84, e: 6.43, w: {"but": 4.84, "thats": 5.04, "how": 5.37, "it": 5.57, "smells": 5.7, "smoke": 6.1} },  // but that's how it smells smoke.
    { id: 'p3', s: 6.98, e: 8.95, w: {"inside": 6.98, "sits": 7.42, "a": 7.71, "speck": 7.78, "of": 8.15, "americium": 8.29} },  // Inside sits a speck of americium,
    { id: 'p4', s: 9.25, e: 11.64, w: {"which": 9.25, "fires": 9.64, "out": 10.02, "tiny": 10.25, "alpha": 10.56, "particles": 10.95} },  // which fires out tiny alpha particles.
    { id: 'p5', s: 12.19, e: 13.51, w: {"they": 12.19, "slam": 12.48, "into": 12.78, "the": 13.07, "air": 13.29} },  // They slam into the air
    { id: 'p6', s: 13.81, e: 15.35, w: {"between": 13.81, "two": 14.32, "metal": 14.54, "plates": 14.91} },  // between two metal plates,
    { id: 'p7', s: 15.65, e: 17.29, w: {"knocking": 15.65, "electrons": 16.25, "loose": 16.92} },  // knocking electrons loose.
    { id: 'p8', s: 17.84, e: 19.76, w: {"now": 17.84, "the": 18.05, "air": 18.27, "carries": 18.48, "electricity": 18.98} },  // Now the air carries electricity,
    { id: 'p9', s: 20.06, e: 22.09, w: {"so": 20.06, "a": 20.22, "tiny": 20.3, "steady": 20.63, "current": 21.12, "flows": 21.69} },  // so a tiny, steady current flows.
    { id: 'p10', s: 22.64, e: 23.87, w: {"when": 22.64, "smoke": 22.93, "drifts": 23.29, "in": 23.73} },  // When smoke drifts in,
    { id: 'p11', s: 24.17, e: 26.82, w: {"bits": 24.17, "of": 24.47, "smoke": 24.62, "grab": 24.98, "those": 25.28, "charged": 25.65, "particles": 26.16} },  // bits of smoke grab those charged particles.
    { id: 'p12', s: 27.37, e: 28.50, w: {"the": 27.37, "current": 27.6, "drops": 28.13} },  // The current drops,
    { id: 'p13', s: 28.80, e: 30.19, w: {"and": 28.8, "the": 29.03, "alarm": 29.26, "screams": 29.65} },  // and the alarm screams.
    { id: 'p14', s: 30.74, e: 32.70, w: {"other": 30.74, "alarms": 31.12, "use": 31.57, "light": 31.79, "instead": 32.17} },  // Other alarms use light instead.
    { id: 'p15', s: 33.25, e: 35.66, w: {"an": 33.25, "led": 33.41, "shines": 33.66, "across": 34.16, "a": 34.66, "dark": 34.74, "chamber": 35.08} },  // An LED shines across a dark chamber,
    { id: 'p16', s: 35.96, e: 37.14, w: {"away": 35.96, "from": 36.27, "a": 36.59, "sensor": 36.67} },  // away from a sensor.
    { id: 'p17', s: 37.69, e: 39.39, w: {"no": 37.69, "smoke": 37.86, "light": 38.46, "hits": 38.88, "it": 39.22} },  // No smoke, no light hits it.
    { id: 'p18', s: 39.94, e: 41.59, w: {"but": 39.94, "smoke": 40.16, "scatters": 40.52, "the": 41.09, "beam": 41.31} },  // But smoke scatters the beam,
    { id: 'p19', s: 41.89, e: 43.69, w: {"bouncing": 41.89, "light": 42.44, "into": 42.79, "the": 43.07, "sensor": 43.27} },  // bouncing light into the sensor.
    { id: 'p20', s: 44.24, e: 44.84, w: {"beep": 44.24} },  // Beep!
    { id: 'p21', s: 45.39, e: 46.58, w: {"and": 45.39, "that": 45.61, "americium": 45.91} },  // And that americium?
    { id: 'p22', s: 47.13, e: 49.95, w: {"its": 47.13, "halflife": 47.35, "is": 47.95, "four": 48.09, "hundred": 48.39, "thirtytwo": 48.91, "years": 49.58} },  // Its half-life is four hundred thirty-two years,
    { id: 'p23', s: 50.25, e: 52.62, w: {"so": 50.25, "it": 50.4, "outlasts": 50.55, "your": 51.14, "alarm": 51.44, "by": 51.81, "centuries": 51.95} },  // so it outlasts your alarm by centuries.
    { id: 'p24', s: 53.17, e: 54.85, w: {"so": 53.17, "is": 53.32, "the": 53.47, "one": 53.7, "above": 53.93, "your": 54.32, "bed": 54.62} },  // So, is the one above your bed
    { id: 'p25', s: 55.15, e: 57.41, w: {"radioactive": 55.15, "or": 56.07, "running": 56.24, "on": 56.83, "light": 57.0} },  // radioactive, or running on light?
  ];
  const B = BEATS;
  const T = (i, w) => { const v = B[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const DURATION = B[B.length - 1].e + 1.0;
  const cutAt = (i) => (B[i - 1].e + B[i].s) / 2;
  const CUTS = { inside: cutAt(3), plates: cutAt(5), current: cutAt(8), smoke: cutAt(10), photo: cutAt(14), scatter: cutAt(17), half: cutAt(21), end: cutAt(24) };

  // ---------- helpers ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { navy: '#1b2a5c', ink: '#1d1d3a', cream: '#fff6e6', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', ice: '#cfeeff', teal: '#1fb6a6', yellow: '#ffd23f', green: '#5ad17a', grey: '#8d93a6', smoke: '#6f7385', white: '#ffffff', purple: '#7b5cff' };
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 26, col = 'rgba(20,20,60,0.16)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700, align = 'center') => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 48, padX = size * 0.7, h = o.h || size * 1.7, w = measure(ctx, s, size) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 18);
    text(ctx, s, 0, 2, size, o.col || PAL.ink, o.weight || 700);
    ctx.restore();
  };
  const big = (ctx, s, x, y, size, col, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col, 700), 20); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 14, prog = 1) => {
    if (prog <= 0) return; const x = H.lerp(x0, x1, prog), y = H.lerp(y0, y1, prog), a = Math.atan2(y1 - y0, x1 - x0);
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = col; ctx.translate(x, y); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt * 1.2, -wdt * 1.4); ctx.lineTo(-wdt * 1.2, wdt * 1.4); ctx.closePath(); ctx.fill(); ctx.restore();
  };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const trefoil = (ctx, x, y, r, col = PAL.ink, bg = PAL.yellow) => {
    circle(ctx, x, y, r, bg); ctx.fillStyle = col;
    for (let i = 0; i < 3; i++) { const a = -Math.PI / 2 + i * (Math.PI * 2 / 3) - Math.PI / 6; ctx.beginPath(); ctx.arc(x, y, r * 0.86, a, a + Math.PI / 3); ctx.arc(x, y, r * 0.24, a + Math.PI / 3, a, true); ctx.closePath(); ctx.fill(); }
    circle(ctx, x, y, r * 0.15, col);
  };
  // the smoke alarm seen from the side, hanging from a ceiling at y
  const alarm = (ctx, x, y, s, ledOn, col = '#f4f1ea') => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || col; ctx.beginPath(); ctx.moveTo(-220, 0); ctx.lineTo(220, 0); ctx.quadraticCurveTo(210, 110, 120, 130); ctx.lineTo(-120, 130); ctx.quadraticCurveTo(-210, 110, -220, 0); ctx.closePath(); ctx.fill(); }, 22);
    ctx.fillStyle = '#d9d4c8'; for (let i = -3; i <= 3; i++) rr(ctx, i * 50 - 14, 40, 28, 50, 12), ctx.fill();
    ctx.fillStyle = '#d9d4c8'; rr(ctx, -110, 120, 220, 26, 12); ctx.fill();
    circle(ctx, 170, 70, 14, ledOn ? PAL.red : '#8a3a3a');
    if (ledOn) { ctx.globalAlpha = 0.35; circle(ctx, 170, 70, 34, PAL.red); }
    ctx.restore();
  };
  const smokePuff = (ctx, x, y, r, a = 0.85, col = PAL.smoke) => { ctx.save(); ctx.globalAlpha = a; ctx.fillStyle = col; [[0, 0, 1], [-0.7, 0.2, 0.7], [0.7, 0.15, 0.75], [-0.3, -0.5, 0.65], [0.35, -0.45, 0.6]].forEach(([dx, dy, k]) => { ctx.beginPath(); ctx.arc(x + dx * r, y + dy * r, r * k, 0, Math.PI * 2); ctx.fill(); }); ctx.restore(); };
  const header = (ctx, t) => {
    const k = EO(t, B[2].e + 0.3, B[2].e + 0.8); if (k <= 0) return;
    ctx.save(); ctx.globalAlpha = k; pill(ctx, 'HOW SMOKE ALARMS WORK', 540, 215, { size: 40, bg: PAL.ink, col: PAL.cream, sh: 10 }); ctx.restore();
  };
  // chamber plates shared by three scenes
  const PL = { x0: 230, x1: 850, y0: 640, y1: 1360 };
  const mols = (() => { const r = H.rng(11), a = []; for (let i = 0; i < 22; i++) a.push({ x: H.lerp(PL.x0 + 90, PL.x1 - 90, r()), y: H.lerp(PL.y0 + 60, PL.y1 - 60, r()), ph: r() * 6.28, hit: r() }); return a; })();
  const plates = (ctx, t, k = 1) => {
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.red; rr(ctx, PL.x0 - 60, PL.y0 - 40, 60, PL.y1 - PL.y0 + 80, 18); ctx.fill(); }, 18);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.blue; rr(ctx, PL.x1, PL.y0 - 40, 60, PL.y1 - PL.y0 + 80, 18); ctx.fill(); }, 18);
    text(ctx, '+', PL.x0 - 30, PL.y0 + 10, 64, PAL.white); text(ctx, '−', PL.x1 + 30, PL.y0 + 10, 64, PAL.white);
  };
  const meter = (ctx, x, y, val, col) => { // dial gauge, val 0..1
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, x - 150, y - 110, 300, 190, 40); ctx.fill(); }, 18);
    ctx.strokeStyle = '#d7cfbf'; ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(x, y + 40, 110, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke();
    ctx.strokeStyle = col; ctx.beginPath(); ctx.arc(x, y + 40, 110, Math.PI * 1.1, Math.PI * (1.1 + 0.8 * val)); ctx.stroke();
    const a = Math.PI * (1.1 + 0.8 * val); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(x, y + 40); ctx.lineTo(x + Math.cos(a) * 95, y + 40 + Math.sin(a) * 95); ctx.stroke(); circle(ctx, x, y + 40, 16, PAL.ink);
  };
  const wire = (ctx, t, flow, col) => { // loop from + plate over the top to the meter and back to − plate
    ctx.save(); ctx.strokeStyle = '#2b2f4a'; ctx.lineWidth = 16; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(PL.x0 - 30, PL.y0 - 40); ctx.lineTo(PL.x0 - 30, 470); ctx.lineTo(PL.x1 + 30, 470); ctx.lineTo(PL.x1 + 30, PL.y0 - 40); ctx.stroke();
    if (flow > 0.02) { ctx.strokeStyle = col; ctx.lineWidth = 8; ctx.setLineDash([24, 30]); ctx.lineDashOffset = -t * 220 * flow; ctx.globalAlpha = Math.min(1, flow * 1.4); ctx.stroke(); }
    ctx.restore();
  };
  // ions drifting: electrons (yellow) to + plate (left), positive ions (orange) to − plate (right). speed 0..1, stick 0..1 = share grabbed by smoke
  const ionFlow = (ctx, t, speed, stick, smokeK) => {
    const r = H.rng(21);
    for (let i = 0; i < 26; i++) {
      const y = H.lerp(PL.y0 + 50, PL.y1 - 50, r()), off = r(), grabbed = r() < stick, isE = i % 2 === 0;
      let u = (off + t * 0.32 * speed) % 1; if (grabbed) u = off;
      const x = isE ? H.lerp(540, PL.x0 + 20, u) : H.lerp(540, PL.x1 - 20, u);
      const xx = H.lerp(540 + (r() - 0.5) * 400, x, grabbed ? 0 : 1);
      if (grabbed && smokeK > 0) { smokePuff(ctx, xx, y, 40 * smokeK, 0.9); }
      if (isE) circle(ctx, xx, y, 13, PAL.yellow); else { circle(ctx, xx, y, 24, PAL.orange); text(ctx, '+', xx, y + 2, 34, PAL.white); }
    }
  };

  // ---------- scenes ----------
  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#ffe7c2', '#ffc38a');
    // ceiling with the alarm, camera pushes in slowly
    const z = 1 + 0.12 * EI(t, 0, CUTS.inside);
    ctx.save(); ctx.translate(540, 700); ctx.scale(z, z); ctx.translate(-540, -700);
    ctx.fillStyle = '#f7efe3'; ctx.fillRect(-100, 0, W + 200, 520); ctx.fillStyle = '#e8dccb'; ctx.fillRect(-100, 500, W + 200, 30);
    alarm(ctx, 540, 530, 1.5, Math.floor(t * 1.5) % 2 === 0);
    ctx.restore();
    const rk = pop(t, T(0, 'radioactive') - 0.15) * bump(t, T(0, 'radioactive') + 0.1);
    if (rk > 0.01) { ctx.save(); ctx.translate(540, 1080); ctx.scale(rk, rk); ctx.rotate(Math.sin(t * 2) * 0.05); longShadow(ctx, (c) => circle(ctx, 0, 0, 190, c || PAL.yellow), 30); trefoil(ctx, 0, 0, 190); ctx.restore(); }
    pill(ctx, 'YOUR SMOKE ALARM', 540, 830, { k: pop(t, T(0, 'smoke') - 0.15), bg: PAL.ink, col: PAL.cream, size: 56 });
    big(ctx, 'RADIOACTIVE?', 540, 1420, 120, PAL.ink, pop(t, T(0, 'radioactive')));
    pill(ctx, 'NOBODY TELLS YOU', 540, 1590, { k: pop(t, T(1, 'nobody') - 0.1, T(2, 'smells') - 0.4), bg: PAL.ink, col: PAL.cream, size: 52 });
    // wisps of smoke rising toward the alarm on "smells smoke"
    const sk = EO(t, T(2, 'smells') - 0.2, T(2, 'smoke') + 0.4);
    if (sk > 0) for (let i = 0; i < 5; i++) { const u = (t * 0.25 + i / 5) % 1; smokePuff(ctx, 300 + i * 120 + Math.sin(t * 2 + i) * 30, H.lerp(1500, 800, u), 40 + u * 30, sk * 0.7 * (1 - u)); }
    pill(ctx, 'IT SMELLS SMOKE', 540, 1590, { k: pop(t, T(2, 'smells') - 0.15), bg: PAL.orange, col: PAL.white, size: 56 });
  };
  S.inside = (ctx, t) => {
    sky(ctx, '#20264f', '#3b3f8f');
    // the alarm opened up: a big housing ring with the chamber inside, zooming in on the speck
    const z = 1 + 0.2 * EI(t, CUTS.inside, T(3, 'americium'));
    ctx.save(); ctx.translate(540, 960); ctx.scale(z, z); ctx.translate(-540, -960);
    longShadow(ctx, (c) => circle(ctx, 540, 960, 340, c || '#f4f1ea'), 30);
    circle(ctx, 540, 960, 280, '#2b2f4a');
    ctx.fillStyle = '#9aa3b8'; rr(ctx, 390, 860, 300, 200, 30); ctx.fill(); ctx.fillStyle = '#c6ccdb'; rr(ctx, 410, 880, 260, 160, 24); ctx.fill();
    ctx.restore();
    const sp = pop(t, T(3, 'speck') - 0.15);
    const sx = 540, sy = 960;
    if (sp > 0.01) { ctx.save(); ctx.globalAlpha = 0.4 + 0.2 * Math.sin(t * 6); circle(ctx, sx, sy, 70 * sp, PAL.green); ctx.restore(); circle(ctx, sx, sy, 32 * sp, '#b7ff8a'); }
    // alpha particles fire out in all directions from "fires"
    const tf = T(4, 'fires') - 0.1;
    if (t > tf) { const r = H.rng(5); for (let i = 0; i < 40; i++) { const a = r() * Math.PI * 2, sp2 = 600 + r() * 300, born = tf + i * 0.05; let age = t - born; if (age < 0) continue; age = age % 0.9; const d = 40 + age * sp2; if (d > 560) continue; const x = sx + Math.cos(a) * d, y = sy + Math.sin(a) * d; ctx.strokeStyle = 'rgba(255,122,61,0.5)'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(x - Math.cos(a) * 50, y - Math.sin(a) * 50); ctx.lineTo(x, y); ctx.stroke(); circle(ctx, x, y, 12, PAL.orange); } }
    pill(ctx, 'AMERICIUM-241', 540, 350, { k: pop(t, T(3, 'americium') - 0.1), bg: PAL.green, col: PAL.ink, size: 64 });
    pill(ctx, 'a speck of radioactive metal', 540, 465, { k: pop(t, T(3, 'speck') - 0.1), size: 40, weight: 600 });
    big(ctx, 'ALPHA', 540, 1470, 130, PAL.orange, pop(t, T(4, 'alpha') - 0.1));
    pill(ctx, 'PARTICLES', 540, 1600, { k: pop(t, T(4, 'particles') - 0.1), bg: PAL.orange, col: PAL.white, size: 56 });
  };
  S.plates = (ctx, t) => {
    sky(ctx, '#e8f4ff', '#bfe0ff');
    plates(ctx, t);
    const tslam = T(5, 'slam'), tloose = T(7, 'loose');
    // alpha source at bottom, rays upward across the gap
    circle(ctx, 540, 1470, 40, PAL.green);
    const r = H.rng(9);
    for (let i = 0; i < 10; i++) { const born = tslam - 0.3 + i * 0.18; let age = t - born; if (age < 0) continue; age = age % 1.2; const tx = H.lerp(PL.x0 + 80, PL.x1 - 80, r()), u = H.clamp(age / 0.6); const x = H.lerp(540, tx, u), y = H.lerp(1440, PL.y0, u); if (u < 1) { circle(ctx, x, y, 12, PAL.orange); } }
    // molecules: neutral blue pairs; after being hit they flash and drop an electron
    mols.forEach((m, i) => {
      const thit = tslam + 0.2 + m.hit * (tloose - tslam);
      const hk = ph(t, thit, thit + 0.25), x = m.x + Math.sin(t * 1.5 + m.ph) * 8, y = m.y + Math.cos(t * 1.3 + m.ph) * 8;
      if (hk > 0) { // ion: orange with +
        circle(ctx, x, y, 26, H.rgba(H.mix('#8fb7e8', PAL.orange, hk))); text(ctx, '+', x, y + 2, 34, PAL.white);
        if (hk < 1) { ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(x, y, 26 + 40 * hk, 0, Math.PI * 2); ctx.globalAlpha = 1 - hk; ctx.stroke(); ctx.globalAlpha = 1; }
        const ek = EO(t, thit, thit + 0.7); circle(ctx, x - 20 - ek * 70, y - 20 - ek * 20, 13, PAL.yellow);
      } else { circle(ctx, x - 14, y, 20, '#8fb7e8'); circle(ctx, x + 14, y, 20, '#6d9fd8'); }
    });
    pill(ctx, 'AIR', 540, 520, { k: pop(t, T(5, 'air') - 0.1), bg: PAL.blue, col: PAL.white, size: 56 });
    pill(ctx, 'TWO METAL PLATES', 540, 1620, { k: pop(t, T(6, 'plates') - 0.15, T(7, 'loose') - 0.3), size: 52 });
    pill(ctx, 'ELECTRONS KNOCKED LOOSE', 540, 1620, { k: pop(t, T(7, 'loose') - 0.15), bg: PAL.yellow, col: PAL.ink, size: 48 });
  };
  S.current = (ctx, t) => {
    sky(ctx, '#1f3b2f', '#2f6b4f');
    const fk = EO(t, T(9, 'current') - 0.3, T(9, 'flows'));
    wire(ctx, t, fk, PAL.yellow);
    plates(ctx, t);
    ionFlow(ctx, t, 1, 0, 0);
    meter(ctx, 540, 470, 0.15 + 0.6 * fk + 0.02 * Math.sin(t * 5) * fk, PAL.green);
    pill(ctx, 'AIR CARRIES ELECTRICITY', 540, 1560, { k: pop(t, T(8, 'electricity') - 0.15), bg: PAL.cream, size: 46 });
    big(ctx, 'TINY CURRENT', 540, 1700, 100, PAL.yellow, pop(t, T(9, 'current') - 0.1) * bump(t, T(9, 'flows')));
  };
  S.smoke = (ctx, t) => {
    sky(ctx, '#3a3346', '#5b4f6e');
    const sIn = EO(t, T(10, 'smoke') - 0.2, T(11, 'grab')), stick = EO(t, T(11, 'grab') - 0.1, T(12, 'drops'));
    const flow = 1 - 0.85 * stick, scream = T(13, 'screams'), sc = t > scream - 0.1;
    wire(ctx, t, flow, PAL.yellow);
    plates(ctx, t);
    // smoke drifting in from the top
    for (let i = 0; i < 7; i++) { const u = H.clamp(sIn * 1.3 - i * 0.05); const x = 300 + i * 80 + Math.sin(t + i) * 20, y = H.lerp(500, 760 + (i % 3) * 180, u); if (u > 0) smokePuff(ctx, x, y, 50, 0.55 * u); }
    ionFlow(ctx, t, flow, stick * 0.8, stick);
    meter(ctx, 540, 470, 0.75 - 0.6 * stick, stick > 0.5 ? PAL.red : PAL.green);
    if (sc) { const fl = (Math.floor((t - scream) * 6) % 2 === 0) ? 0.28 : 0.1; ctx.fillStyle = `rgba(239,74,74,${fl})`; ctx.fillRect(0, 0, W, HH); }
    pill(ctx, 'SMOKE', 540, 1560, { k: pop(t, T(10, 'smoke') - 0.1, T(12, 'drops') - 0.3), bg: PAL.smoke, col: PAL.white, size: 56 });
    pill(ctx, 'grabs the charged bits', 540, 1680, { k: pop(t, T(11, 'grab') - 0.1, T(12, 'drops') - 0.3), size: 42, weight: 600 });
    pill(ctx, 'CURRENT DROPS', 540, 1560, { k: pop(t, T(12, 'drops') - 0.15) * bump(t, T(12, 'drops')), bg: PAL.red, col: PAL.white, size: 60 });
    big(ctx, 'BEEEEP!', 540, 1710, 120, PAL.cream, pop(t, scream - 0.1) * (1 + 0.05 * Math.sin(t * 30)));
  };
  // light chamber geometry (for photo + scatter)
  const LC = { ledX: 170, beamY: 900, trapX: 940, senX: 540, senY: 1330 };
  const lightChamber = (ctx, t, dark) => {
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#1a1c2e'; rr(ctx, 90, 700, 900, 420, 50); ctx.fill(); rr(ctx, 400, 1000, 280, 400, 40); ctx.fill(); }, 24);
    // wall that hides the sensor from the beam
    ctx.fillStyle = '#2d3150'; rr(ctx, 400, 1040, 70, 60, 12); ctx.fill(); rr(ctx, 610, 1040, 70, 60, 12); ctx.fill();
    // LED
    ctx.fillStyle = '#c6ccdb'; rr(ctx, 100, LC.beamY - 50, 80, 100, 16); ctx.fill(); circle(ctx, LC.ledX + 20, LC.beamY, 34, '#ff5a5a');
    // light trap
    ctx.fillStyle = '#0d0e18'; rr(ctx, LC.trapX - 20, LC.beamY - 70, 60, 140, 20); ctx.fill();
    // sensor
    ctx.fillStyle = '#c6ccdb'; rr(ctx, LC.senX - 80, LC.senY, 160, 60, 14); ctx.fill();
  };
  const beam = (ctx, prog, a = 1) => { if (prog <= 0) return; ctx.save(); ctx.globalAlpha = a; const x1 = H.lerp(LC.ledX + 40, LC.trapX, prog); const g = ctx.createLinearGradient(LC.ledX, 0, x1, 0); g.addColorStop(0, 'rgba(255,90,90,0.95)'); g.addColorStop(1, 'rgba(255,140,120,0.7)'); ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(LC.ledX + 40, LC.beamY - 22); ctx.lineTo(x1, LC.beamY - 34); ctx.lineTo(x1, LC.beamY + 34); ctx.lineTo(LC.ledX + 40, LC.beamY + 22); ctx.closePath(); ctx.fill(); ctx.restore(); };
  const sensorGlow = (ctx, k) => { if (k <= 0) return; ctx.save(); ctx.globalAlpha = k; circle(ctx, LC.senX, LC.senY + 10, 90, 'rgba(255,210,63,0.45)'); ctx.fillStyle = PAL.yellow; rr(ctx, LC.senX - 80, LC.senY, 160, 60, 14); ctx.fill(); ctx.restore(); };
  S.photo = (ctx, t) => {
    sky(ctx, '#ffd6e0', '#ff9fb8');
    lightChamber(ctx, t);
    beam(ctx, EO(t, T(15, 'shines') - 0.2, T(15, 'chamber')));
    big(ctx, 'LIGHT INSTEAD', 540, 470, 110, PAL.ink, pop(t, T(14, 'light') - 0.1));
    pill(ctx, 'LED', 170, 690, { k: pop(t, T(15, 'led') - 0.1), bg: PAL.red, col: PAL.white, size: 52 });
    pill(ctx, 'DARK CHAMBER', 640, 640, { k: pop(t, T(15, 'dark') - 0.1), bg: PAL.ink, col: PAL.cream, size: 44 });
    pill(ctx, 'SENSOR', 540, 1520, { k: pop(t, T(16, 'sensor') - 0.15), bg: PAL.yellow, col: PAL.ink, size: 56 });
    pill(ctx, 'out of the beam\'s path', 540, 1640, { k: pop(t, T(16, 'away') - 0.1), size: 40, weight: 600 });
  };
  S.scatter = (ctx, t) => {
    sky(ctx, '#d7f2ea', '#8fd8c4');
    lightChamber(ctx, t);
    beam(ctx, 1);
    const sIn = EO(t, T(18, 'smoke') - 0.3, T(18, 'scatters') + 0.2);
    const pts = [[420, 900], [560, 880], [700, 910], [830, 895]];
    pts.forEach(([x, y], i) => { if (sIn > 0) smokePuff(ctx, x + Math.sin(t * 1.5 + i) * 10, H.lerp(720, y, sIn), 45, 0.8 * sIn, '#d7dbe6'); });
    const sc = EO(t, T(18, 'scatters') - 0.1, T(19, 'sensor'));
    if (sc > 0) { const r = H.rng(4); pts.forEach(([x, y]) => { for (let j = 0; j < 4; j++) { const a = r() * Math.PI * 2; arrow(ctx, x, y, x + Math.cos(a) * 110, y + Math.sin(a) * 110, 'rgba(255,140,120,0.9)', 7, sc); } }); const hit = EO(t, T(19, 'bouncing'), T(19, 'sensor')); pts.forEach(([x, y]) => arrow(ctx, x, y + 20, LC.senX + (x - 540) * 0.15, LC.senY - 20, PAL.yellow, 9, hit)); }
    const glow = EO(t, T(19, 'sensor') - 0.1, T(19, 'sensor') + 0.2);
    sensorGlow(ctx, glow);
    pill(ctx, 'NO SMOKE = NO LIGHT', 540, 470, { k: pop(t, T(17, 'no') - 0.1, T(18, 'scatters') - 0.3), bg: PAL.ink, col: PAL.cream, size: 56 });
    pill(ctx, 'SMOKE SCATTERS LIGHT', 540, 470, { k: pop(t, T(18, 'scatters') - 0.15), bg: PAL.orange, col: PAL.white, size: 56 });
    pill(ctx, 'SENSOR: DARK', 540, 1520, { k: pop(t, T(17, 'hits') - 0.1, T(19, 'sensor') - 0.3), size: 48 });
    pill(ctx, 'SENSOR: LIT!', 540, 1520, { k: pop(t, T(19, 'sensor') - 0.1), bg: PAL.yellow, col: PAL.ink, size: 56 });
    const bk = pop(t, T(20, 'beep') - 0.12);
    if (bk > 0.01) { big(ctx, 'BEEP!', 540, 1680, 140, PAL.red, bk * bump(t, T(20, 'beep'))); }
  };
  S.half = (ctx, t) => {
    sky(ctx, '#14324a', '#1f6f8b');
    const sp = pop(t, T(21, 'americium') - 0.15);
    if (sp > 0.01) { ctx.save(); ctx.translate(540, 520); ctx.scale(sp, sp); ctx.globalAlpha = 0.35 + 0.15 * Math.sin(t * 5); circle(ctx, 0, 0, 150, PAL.green); ctx.globalAlpha = 1; longShadow(ctx, (c) => circle(ctx, 0, 0, 90, c || '#b7ff8a'), 20); trefoil(ctx, 0, 0, 60, PAL.ink, '#b7ff8a'); ctx.restore(); }
    pill(ctx, 'HALF-LIFE', 540, 740, { k: pop(t, T(22, 'halflife') - 0.1), bg: PAL.cream, size: 56 });
    const t0 = T(22, 'four') - 0.1, tn = T(22, 'years'); const n = Math.round(432 * EO(t, t0, tn));
    const nk = pop(t, t0 - 0.1) * bump(t, tn);
    if (nk > 0.01) { ctx.save(); ctx.translate(540, 910); ctx.scale(nk, nk); longShadow(ctx, (c) => text(ctx, `${n}`, 0, 0, 200, c || (n >= 432 ? PAL.yellow : PAL.cream), 700), 24); ctx.restore(); }
    pill(ctx, 'YEARS', 540, 1060, { k: nk, bg: PAL.yellow, col: PAL.ink, size: 52 });
    // bars: alarm life vs half-life
    const bk = EO(t, T(23, 'outlasts') - 0.2, T(23, 'centuries'));
    if (bk > 0) {
      ctx.save(); ctx.globalAlpha = H.clamp(bk * 3);
      text(ctx, 'your alarm', 140, 1190, 48, PAL.cream, 600, 'left'); ctx.fillStyle = PAL.red; rr(ctx, 140, 1230, Math.max(30, 800 * 10 / 432), 64, 22); ctx.fill(); text(ctx, '~10 years', 200, 1262, 48, PAL.cream, 700, 'left');
      text(ctx, 'americium half-life', 140, 1350, 48, PAL.cream, 600, 'left'); ctx.fillStyle = PAL.green; rr(ctx, 140, 1390, 800 * bk, 64, 22); ctx.fill(); if (bk > 0.6) text(ctx, '432 years', 140 + 800 * bk - 24, 1422, 46, PAL.ink, 700, 'right');
      ctx.restore();
    }
    big(ctx, 'CENTURIES!', 540, 1570, 110, PAL.cream, pop(t, T(23, 'centuries') - 0.1));
  };
  S.end = (ctx, t) => {
    sky(ctx, '#2a2550', '#5a4a9a');
    // bedroom: ceiling + alarm, bed at the bottom
    ctx.fillStyle = '#3a3470'; ctx.fillRect(0, 0, W, 330); ctx.fillStyle = '#4a4288'; ctx.fillRect(0, 320, W, 20);
    alarm(ctx, 540, 340, 1.0, Math.floor(t * 1.5) % 2 === 0);
    const bk = pop(t, T(24, 'bed') - 0.15);
    ctx.save(); ctx.translate(540, 1560); ctx.scale(1, bk || 0.001);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#c2603a'; rr(ctx, -420, -40, 840, 180, 30); ctx.fill(); }, 18);
    ctx.fillStyle = PAL.cream; rr(ctx, -380, -90, 220, 80, 30); ctx.fill(); ctx.fillStyle = '#5ab0e8'; rr(ctx, -140, -70, 540, 90, 30); ctx.fill();
    ctx.restore();
    text(ctx, 'z', 760, 1360 - (t * 40) % 80, 60, 'rgba(255,246,230,0.8)', 700); text(ctx, 'z', 820, 1300 - (t * 40 + 40) % 80, 44, 'rgba(255,246,230,0.6)', 700);
    // two choices
    const c1 = pop(t, T(25, 'radioactive') - 0.15) * bump(t, T(25, 'radioactive')), c2 = pop(t, T(25, 'light') - 0.15) * bump(t, T(25, 'light'));
    if (c1 > 0.01) { ctx.save(); ctx.translate(290, 850); ctx.scale(c1, c1); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -210, -230, 420, 440, 40); ctx.fill(); }, 22); trefoil(ctx, 0, -60, 110); text(ctx, 'RADIOACTIVE', 0, 140, 50, PAL.ink); ctx.restore(); }
    if (c2 > 0.01) { ctx.save(); ctx.translate(790, 850); ctx.scale(c2, c2); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -210, -230, 420, 440, 40); ctx.fill(); }, 22);
      ctx.save(); ctx.globalAlpha = 0.4; circle(ctx, 0, -70, 120, PAL.yellow); ctx.restore(); circle(ctx, 0, -80, 80, PAL.yellow); ctx.fillStyle = '#9aa3b8'; rr(ctx, -40, -10, 80, 60, 12); ctx.fill(); text(ctx, 'LIGHT', 0, 140, 56, PAL.ink); ctx.restore(); }
    if (c1 > 0.5) text(ctx, 'or', 540, 850, 56, PAL.cream, 700);
    const qk = pop(t, B[25].e + 0.1);
    big(ctx, 'WHICH IS YOURS?', 540, 1250, 84, PAL.yellow, qk);
  };

  const ORDER = [['hook', 0], ['inside', CUTS.inside], ['plates', CUTS.plates], ['current', CUTS.current], ['smoke', CUTS.smoke], ['photo', CUTS.photo], ['scatter', CUTS.scatter], ['half', CUTS.half], ['end', CUTS.end]];
  const WIPE = 0.5;
  // continuous moves: plates->current->smoke share the chamber, so those cuts slide (camera pan) instead of wiping
  const SLIDE = { current: true, smoke: true, scatter: true };
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1] - WIPE / 2) i++;
    const cur = ORDER[i], next = ORDER[i + 1];
    if (next && t >= next[1] - WIPE / 2) {
      const u = H.ease.inOut(ph(t, next[1] - WIPE / 2, next[1] + WIPE / 2));
      if (SLIDE[next[0]]) {
        ctx.save(); ctx.translate(-W * u, 0); S[cur[0]](ctx, t); ctx.restore();
        ctx.save(); ctx.translate(W * (1 - u), 0); S[next[0]](ctx, t); ctx.restore();
      } else {
        if (u < 1) S[cur[0]](ctx, t);
        ctx.save(); ctx.beginPath(); ctx.arc(540, 960, u * 1300, 0, Math.PI * 2); ctx.clip(); S[next[0]](ctx, t); ctx.restore();
        if (u > 0 && u < 1) { ctx.strokeStyle = PAL.cream; ctx.lineWidth = 24; ctx.beginPath(); ctx.arc(540, 960, u * 1300, 0, Math.PI * 2); ctx.stroke(); }
      }
    } else S[cur[0]](ctx, t);
    header(ctx, t);
    H.vignette(ctx, Wd, Hd, 0.16, '40,20,60');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  function scoreSound(k) {
    const D = DURATION;
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    const wipe = (t) => { k.play('whoosh', t - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); k.play('tock', t + 0.2, { f: 420, gain: 0.5 }); };
    const slide = (t) => k.play('swish', t - 0.2, { gain: 0.6 });
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 100, gain: 0.3, chords: [['D4', 'F4', 'A4', 'C5'], ['Bb3', 'D4', 'F4', 'A4'], ['G3', 'Bb3', 'D4', 'F4'], ['A3', 'C#4', 'E4', 'G4']] });
    // hook
    k.play('buzz', T(0, 'radioactive') - 0.05, { f: 110, dur: 0.3, gain: 0.4 }); k.play('impact', T(0, 'radioactive'), { gain: 0.7 }); popAt(T(0, 'radioactive'), 520, 0.9, 0, false);
    popAt(T(1, 'nobody') - 0.1, 600, 0.8, -0.3, false);
    k.noise(T(2, 'smells') - 0.2, { dur: 1.2, color: 'pink', filter: 'lowpass', f: [[0, 400], [1.2, 900]], gain: 0.15, a: 0.3, verb: 0.2 }); popAt(T(2, 'smells') - 0.15, 700, 0.8, 0.3, false);
    wipe(CUTS.inside);
    k.play('sparkle', T(3, 'speck') - 0.1, { n: 5, gain: 0.6 }); popAt(T(3, 'americium') - 0.1, 600, 0.8, 0, false); popAt(T(3, 'speck') - 0.1, 900, 0.5, 0);
    for (let i = 0; i < 12; i++) k.play('tick', T(4, 'fires') - 0.1 + i * 0.12, { f: 2600 + (i % 3) * 600, gain: 0.5, pan: (i % 5) * 0.4 - 0.8, minor: true });
    k.play('whoosh', T(4, 'alpha') - 0.25, { dur: 0.3, gain: 0.6 }); popAt(T(4, 'particles') - 0.1, 800, 0.8, 0, false);
    wipe(CUTS.plates);
    popAt(T(5, 'air') - 0.1, 700, 0.7, 0, false);
    for (let i = 0; i < 10; i++) k.play('tock', T(5, 'slam') + 0.2 + i * (T(7, 'loose') - T(5, 'slam')) / 10, { f: 500 + i * 40, gain: 0.4, pan: (i % 2 ? 0.4 : -0.4), minor: true });
    popAt(T(6, 'plates') - 0.15, 600, 0.8, 0, false); k.play('ding', T(7, 'loose'), { f: 'A5', gain: 0.3 }); popAt(T(7, 'loose') - 0.15, 900, 0.7, 0, false);
    slide(CUTS.current);
    k.play('riser', T(8, 'electricity') - 0.4, { dur: 0.5, gain: 0.4 }); popAt(T(8, 'electricity') - 0.15, 700, 0.7, 0, false);
    k.tone(T(9, 'current') - 0.2, { f: 'A2', type: 'sine', dur: 2.0, gain: 0.08, a: 0.2, minor: true }); popAt(T(9, 'current') - 0.1, 600, 0.9, 0, false);
    slide(CUTS.smoke);
    k.noise(T(10, 'smoke') - 0.2, { dur: 2.0, color: 'brown', filter: 'lowpass', f: [[0, 300], [2, 700]], gain: 0.2, a: 0.5, verb: 0.2 }); popAt(T(10, 'smoke') - 0.1, 500, 0.8, 0, false);
    popAt(T(11, 'grab') - 0.1, 800, 0.5, 0.3);
    k.tone(T(12, 'drops') - 0.15, { f: [[0, 600], [0.5, 150]], type: 'triangle', dur: 0.5, gain: 0.2 }); popAt(T(12, 'drops') - 0.15, 450, 0.8, 0, false);
    for (let i = 0; i < 4; i++) k.tone(T(13, 'screams') - 0.05 + i * 0.32, { f: 3100, type: 'square', dur: 0.18, gain: 0.07 });
    wipe(CUTS.photo);
    popAt(T(14, 'light') - 0.1, 600, 0.8, 0, false); popAt(T(15, 'led') - 0.1, 900, 0.7, -0.5, false);
    k.play('riser', T(15, 'shines') - 0.2, { dur: 0.8, gain: 0.35 }); popAt(T(15, 'dark') - 0.1, 500, 0.6, 0.3); popAt(T(16, 'sensor') - 0.15, 700, 0.8, 0, false);
    slide(CUTS.scatter);
    k.play('error', T(17, 'no') - 0.05, { f: 'A3', gain: 0.35 }); popAt(T(17, 'no') - 0.1, 520, 0.8, 0, false);
    k.noise(T(18, 'smoke') - 0.3, { dur: 1.4, color: 'pink', filter: 'lowpass', f: [[0, 500], [1.4, 1200]], gain: 0.15, a: 0.3, verb: 0.2 });
    k.play('sparkle', T(18, 'scatters') - 0.05, { n: 6, gain: 0.7 }); popAt(T(18, 'scatters') - 0.15, 700, 0.8, 0, false);
    k.play('ding', T(19, 'sensor'), { f: 'E6', gain: 0.35 }); popAt(T(19, 'sensor') - 0.1, 1000, 0.8, 0, false);
    for (let i = 0; i < 3; i++) k.tone(T(20, 'beep') - 0.02 + i * 0.25, { f: 3100, type: 'square', dur: 0.14, gain: 0.07 });
    wipe(CUTS.half);
    k.play('sparkle', T(21, 'americium') - 0.15, { n: 5, gain: 0.6 }); popAt(T(21, 'americium') - 0.15, 600, 0.8, 0, false); popAt(T(22, 'halflife') - 0.1, 700, 0.7, 0, false);
    for (let f = Math.ceil((T(22, 'four') - 0.1) * 15); f < T(22, 'years') * 15; f++) k.play('count', f / 15, { gain: 0.8, minor: true });
    k.play('impact', T(22, 'years'), { gain: 1.0 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => k.play('ding', T(22, 'years') + i * 0.03, { f: n, gain: 0.32 - i * 0.05, pan: (i - 1.5) * 0.25 }));
    k.play('riser', T(23, 'outlasts') - 0.2, { dur: 1.4, gain: 0.4 }); popAt(T(23, 'centuries') - 0.1, 600, 0.9, 0, false);
    wipe(CUTS.end);
    k.play('thud', T(24, 'bed') - 0.1, { f: 140, gain: 0.4 }); popAt(T(25, 'radioactive') - 0.15, 520, 0.9, -0.5, false); popAt(T(25, 'light') - 0.15, 760, 0.9, 0.5, false);
    k.play('success', B[25].e + 0.15, { f: 'D6', gain: 0.4 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
