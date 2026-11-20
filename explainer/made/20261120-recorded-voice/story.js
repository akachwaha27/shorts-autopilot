// ================= Flat-Vector Science, vertical 1080x1920: "Why does your voice sound so weird on a recording?" =================
// Unattended run: no storyboard step. Every frame is a pure function of t.
(function () {
  const W = 1080, HH = 1920;
  const BEATS = [
    {"s": 0.25, "e": 4.61, "w": {"only": 0.25, "38": 0.6, "percent": 0.77, "of": 1.38, "people": 1.56, "knew": 2.08, "their": 2.43, "own": 2.87, "voice": 3.13, "on": 3.57, "a": 3.74, "recording": 3.83}}, // 0
    {"s": 5.08, "e": 6.32, "w": {"your": 5.08, "skull": 5.43, "is": 5.88, "why": 6.06}}, // 1
    {"s": 6.66, "e": 11.01, "w": {"thats": 6.66, "a": 7.25, "1967": 7.37, "study": 7.84, "with": 8.43, "five": 8.9, "seconds": 9.36, "to": 10.19, "guess": 10.42}}, // 2
    {"s": 11.43, "e": 13.95, "w": {"when": 11.43, "you": 11.71, "talk": 11.92, "your": 12.2, "vocal": 12.48, "cords": 12.83, "shake": 13.18, "the": 13.53, "air": 13.74}}, // 3
    {"s": 14.48, "e": 17.1, "w": {"and": 14.48, "that": 14.71, "sound": 15.01, "curls": 15.38, "around": 15.75, "into": 16.2, "your": 16.5, "ears": 16.8}}, // 4
    {"s": 17.58, "e": 19.36, "w": {"but": 17.58, "the": 17.77, "buzz": 17.96, "also": 18.21, "takes": 18.47, "a": 18.78, "shortcut": 18.85}}, // 5
    {"s": 19.81, "e": 21.68, "w": {"straight": 19.81, "through": 20.25, "the": 20.63, "bones": 20.8, "of": 21.07, "your": 21.18, "skull": 21.4}}, // 6
    {"s": 22.16, "e": 24.51, "w": {"your": 22.16, "skull": 22.42, "works": 22.76, "like": 23.1, "a": 23.37, "builtin": 23.43, "subwoofer": 23.9}}, // 7
    {"s": 24.86, "e": 26.38, "w": {"it": 24.86, "boosts": 25.01, "the": 25.47, "deep": 25.7, "tones": 26.0}}, // 8
    {"s": 26.76, "e": 29.08, "w": {"so": 26.76, "you": 26.89, "sound": 27.09, "fuller": 27.42, "and": 27.82, "deeper": 28.02, "to": 28.42, "yourself": 28.55}}, // 9
    {"s": 29.42, "e": 31.9, "w": {"a": 29.42, "microphone": 29.5, "only": 30.27, "catches": 30.58, "the": 31.12, "air": 31.35, "part": 31.59}}, // 10
    {"s": 32.3, "e": 33.76, "w": {"no": 32.3, "bones": 32.53, "bass": 33.31}}, // 11
    {"s": 34.15, "e": 36.29, "w": {"so": 34.15, "the": 34.27, "recording": 34.45, "sounds": 34.98, "higher": 35.34, "and": 35.7, "thinner": 35.88}}, // 12
    {"s": 36.77, "e": 38.92, "w": {"and": 36.77, "thats": 36.97, "the": 37.29, "voice": 37.49, "everyone": 37.81, "else": 38.33, "hears": 38.59}}, // 13
    {"s": 39.26, "e": 40.54, "w": {"and": 39.26, "in": 39.51, "a": 39.68, "2013": 39.77, "study": 40.11}}, // 14
    {"s": 40.54, "e": 43.86, "w": {"people": 40.54, "rated": 41.06, "their": 41.5, "own": 41.93, "voice": 42.2, "more": 42.63, "attractive": 42.98}}, // 15
    {"s": 43.96, "e": 46.15, "w": {"when": 43.96, "they": 44.27, "didnt": 44.58, "know": 44.98, "it": 45.29, "was": 45.44, "theirs": 45.68}}, // 16
    {"s": 46.52, "e": 49.44, "w": {"so": 46.52, "your": 46.69, "voice": 47.02, "isnt": 47.44, "bad": 47.77, "its": 48.02, "just": 48.27, "unfamiliar": 48.61}}, // 17
    {"s": 49.83, "e": 52.63, "w": {"be": 49.83, "honest": 49.98, "would": 50.41, "you": 50.77, "have": 50.98, "spotted": 51.27, "your": 51.77, "own": 52.06, "voice": 52.27}}, // 18
  ];
  const T = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + i + ' ' + w); return v; };
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const CUTS = { study: 6.49, air: 11.22, bone: 17.34, sub: 21.92, mic: 29.25, compare: 34.0, s2013: 39.09, end: 46.33 };
  // ---------- Flat-Vector Science house kit ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const PAL = { ink: '#1d1d3a', cream: '#fff6e6', red: '#ef4a4a', red2: '#c93636', blue: '#2f7bff', yellow: '#ffd23f', orange: '#ff9a1f', green: '#1f9e5a', lime: '#8fd94a', white: '#ffffff', coral: '#ff6b5b', teal: '#1fb6a6', purple: '#8a5cf6', steel: '#3b4a6b' };
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
  const bigText = (ctx, s, x, y, size, col, k = 1, sh = 20) => { if (k <= 0.01) return; const mw = measure(ctx, s, size); const fit = Math.min(1, 980 / mw); ctx.save(); ctx.translate(x, y); ctx.scale(k * fit, k * fit); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col), sh); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, Math.max(0, r), 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const burst = (ctx, cx, cy, t, a = 0.08, n = 14) => { ctx.save(); ctx.fillStyle = `rgba(255,255,255,${a})`; for (let i = 0; i < n; i++) { const an = i / n * Math.PI * 2 + t * 0.12; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, 1500, an, an + 0.12); ctx.closePath(); ctx.fill(); } ctx.restore(); };
  const limb = (ctx, pts, wdt, col) => { ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore(); };
  const cross = (ctx, x, y, s, col, k) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k * s, k * s); longShadow(ctx, (c) => circle(ctx, 0, 0, 60, c || col), 12); limb(ctx, [[-22, -22], [22, 22]], 16, PAL.white); limb(ctx, [[22, -22], [-22, 22]], 16, PAL.white); ctx.restore(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 22, k = 1) => { if (k <= 0.01) return; const xe = x0 + (x1 - x0) * k, ye = y0 + (y1 - y0) * k, a = Math.atan2(ye - y0, xe - x0); limb(ctx, [[x0, y0], [xe - Math.cos(a) * 20, ye - Math.sin(a) * 20]], wdt, col); ctx.save(); ctx.translate(xe, ye); ctx.rotate(a); ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt, -wdt * 1.5); ctx.lineTo(-wdt, wdt * 1.5); ctx.closePath(); ctx.fill(); ctx.restore(); };


  const ground = (ctx, y0, col, col2) => { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(0, y0); ctx.quadraticCurveTo(540, y0 - 60, W, y0); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.closePath(); ctx.fill(); if (col2) { ctx.fillStyle = col2; ctx.fillRect(0, y0 + 110, W, HH); } };
  const SKIN = { face: '#ffc39b', shade: '#f0a57c', hair: '#3b2a5a', lip: '#e0606a' };
  const BONE = '#fff3dc', BONE2 = '#e9d3ad', AIRC = '#3fb5ff', BONEC = '#ff8a1f';

  // ---------- cubic bezier path sampler ----------
  const bez = (P, u) => { const [a, b, c, d] = P, v = 1 - u; return [v * v * v * a[0] + 3 * v * v * u * b[0] + 3 * v * u * u * c[0] + u * u * u * d[0], v * v * v * a[1] + 3 * v * v * u * b[1] + 3 * v * u * u * c[1] + u * u * u * d[1]]; };
  const strokePath = (ctx, P, u0, u1, col, wdt, dash) => { ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; if (dash) ctx.setLineDash(dash); ctx.beginPath(); for (let j = 0; j <= 40; j++) { const p = bez(P, H.lerp(u0, u1, j / 40)); j ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); } ctx.stroke(); ctx.restore(); };
  // chevron "sound packets" travelling along a path
  const packets = (ctx, P, t, k, col, n = 5, speed = 0.55, size = 34) => { if (k <= 0.01) return; for (let i = 0; i < n; i++) { const u = ((t * speed + i / n) % 1) * k; const p = bez(P, u), q = bez(P, Math.min(1, u + 0.01)); const a = Math.atan2(q[1] - p[1], q[0] - p[0]); ctx.save(); ctx.translate(p[0], p[1]); ctx.rotate(a); ctx.globalAlpha = Math.min(1, (1 - u) * 4) * Math.min(1, u * 8); ctx.strokeStyle = col; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(-size * 0.6, 0, size, -0.7, 0.7); ctx.stroke(); ctx.beginPath(); ctx.arc(-size * 1.2, 0, size * 0.7, -0.7, 0.7); ctx.stroke(); ctx.restore(); } };

  // ---------- cartoon skull icon (origin = centre, ~200 px tall at s=1) ----------
  const skull = (ctx, x, y, s, k = 1, t = 0, chatter = 0) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k);
    const jawY = chatter * (0.5 + 0.5 * Math.sin(t * 22)) * 14;
    longShadow(ctx, (c) => { ctx.fillStyle = c || BONE; ctx.beginPath(); ctx.arc(0, -20, 100, Math.PI * 0.85, Math.PI * 2.15); ctx.lineTo(62, 40); ctx.lineTo(-62, 40); ctx.closePath(); ctx.fill(); rr(ctx, -56, 30 + jawY, 112, 62, 22); ctx.fill(); }, 16);
    ctx.fillStyle = BONE2; rr(ctx, -56, 66 + jawY, 112, 26, 12); ctx.fill();
    ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.ellipse(-38, -14, 26, 30, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(38, -14, 26, 30, 0, 0, Math.PI * 2); ctx.fill();
    circle(ctx, -30, -22, 8, PAL.white); circle(ctx, 46, -22, 8, PAL.white);
    ctx.beginPath(); ctx.moveTo(0, 14); ctx.lineTo(-11, 32); ctx.lineTo(11, 32); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = BONE2; ctx.lineWidth = 6; for (const dx of [-28, -9, 9, 28]) { ctx.beginPath(); ctx.moveTo(dx, 46 + jawY); ctx.lineTo(dx, 64 + jawY); ctx.stroke(); }
    ctx.restore(); };

  // ---------- side-view head facing right. origin = cranium centre. ----------
  // anchors (local): mouth (205,120), ear (-25,20), throat/vocal cords (40,350), inner ear (-40,30)
  const ANCH = { mouth: [212, 122], ear: [-25, 20], cords: [55, 345], inner: [-45, 30] };
  const head = (ctx, x, y, s, t, o = {}) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const talk = o.talk ? (0.5 + 0.5 * Math.sin(t * 17)) * (0.6 + 0.4 * Math.sin(t * 5.3)) : 0;
    const shape = (c) => { const f = c || SKIN.face;
      ctx.fillStyle = f; rr(ctx, -20, 230, 150, 300, 40); ctx.fill(); // neck
      ctx.beginPath(); ctx.arc(0, 0, 230, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.moveTo(150, -80); ctx.quadraticCurveTo(230, -40, 238, 20); ctx.lineTo(292, 60); ctx.quadraticCurveTo(300, 80, 250, 92); ctx.quadraticCurveTo(250, 140, 240, 170); ctx.quadraticCurveTo(250, 210, 200, 250); ctx.quadraticCurveTo(120, 280, 60, 240); ctx.closePath(); ctx.fill();
    };
    longShadow(ctx, shape, o.sh ?? 22);
    // jaw shade + cheek
    ctx.fillStyle = SKIN.shade; ctx.beginPath(); ctx.ellipse(150, 150, 50, 30, 0, 0, Math.PI * 2); ctx.globalAlpha = 0.5; ctx.fill(); ctx.globalAlpha = 1;
    // hair
    ctx.fillStyle = SKIN.hair; ctx.beginPath(); ctx.arc(0, 0, 236, Math.PI * 0.95, Math.PI * 1.88); ctx.quadraticCurveTo(120, -150, 40, -120); ctx.quadraticCurveTo(-60, -60, -110, 40); ctx.quadraticCurveTo(-200, 120, -228, 60); ctx.closePath(); ctx.fill();
    // x-ray skull
    const xr = o.xray || 0;
    if (xr > 0.01) { ctx.save(); ctx.globalAlpha = xr * 0.92;
      ctx.fillStyle = BONE; ctx.beginPath(); ctx.arc(-5, -10, 190, Math.PI * 0.7, Math.PI * 2.08); ctx.quadraticCurveTo(240, 60, 205, 110); ctx.lineTo(150, 120); ctx.lineTo(110, 170); ctx.lineTo(-60, 150); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(110, 160); ctx.lineTo(205, 168); ctx.quadraticCurveTo(215, 230, 150, 236); ctx.lineTo(40, 220); ctx.lineTo(-10, 150); ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#ffb36b'; ctx.beginPath(); ctx.ellipse(130, -30, 46, 40, 0, 0, Math.PI * 2); ctx.fill(); // eye socket
      ctx.fillStyle = BONE2; for (let i = 0; i < 5; i++) { rr(ctx, 120 + i * 17, 150, 12, 26, 5); ctx.fill(); }
      // spine bits in the neck
      for (let i = 0; i < 4; i++) { ctx.fillStyle = BONE; rr(ctx, 20, 250 + i * 64, 70, 48, 14); ctx.fill(); }
      ctx.restore(); }
    // ear
    ctx.fillStyle = SKIN.shade; ctx.beginPath(); ctx.ellipse(-25, 20, 48, 70, -0.1, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = SKIN.face; ctx.beginPath(); ctx.ellipse(-20, 20, 30, 50, -0.1, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = SKIN.shade; ctx.beginPath(); ctx.ellipse(-18, 26, 12, 20, 0, 0, Math.PI * 2); ctx.fill();
    // eye (closed-ish happy when xray, normal otherwise)
    if (xr < 0.5) { const blink = Math.sin(t * 1.1 + 2) > 0.97 ? 0.15 : 1; ctx.save(); ctx.translate(140, -30); ctx.scale(1, blink); circle(ctx, 0, 0, 20, PAL.ink); circle(ctx, 6, -7, 7, PAL.white); ctx.restore(); }
    else circle(ctx, 140, -30, 16, PAL.ink);
    limb(ctx, [[100, -82], [170, -78]], 12, SKIN.hair); // brow
    // mouth
    ctx.fillStyle = '#7a2a3a'; ctx.beginPath(); ctx.ellipse(232, 122, 26, 6 + talk * 22, 0, 0, Math.PI * 2); ctx.fill();
    // vocal cords glow
    const vc = o.cords || 0; if (vc > 0.01) { ctx.save(); ctx.translate(ANCH.cords[0], ANCH.cords[1]); const sh = Math.sin(t * 60) * 5 * vc; ctx.globalAlpha = vc; circle(ctx, 0, 0, 52, 'rgba(255,90,110,0.35)'); limb(ctx, [[-26, -20 + sh], [0, 22]], 10, '#e8455d'); limb(ctx, [[26, -20 - sh], [0, 22]], 10, '#e8455d'); ctx.restore(); }
    // inner ear cochlea glow
    const ie = o.inner || 0; if (ie > 0.01) { ctx.save(); ctx.translate(ANCH.inner[0], ANCH.inner[1]); ctx.globalAlpha = ie; circle(ctx, 0, 0, 40 + Math.sin(t * 10) * 4, 'rgba(255,210,63,0.55)'); ctx.strokeStyle = '#c96a00'; ctx.lineWidth = 8; ctx.beginPath(); for (let a = 0; a < 12; a += 0.3) { const r = 4 + a * 2.2; const px = Math.cos(a) * r, py = Math.sin(a) * r; a ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.stroke(); ctx.restore(); }
    ctx.restore();
  };
  const toWorld = (x, y, s, a) => [x + a[0] * s, y + a[1] * s];

  // ---------- small props ----------
  const WAVES = (seed, n) => { const r = H.rng(seed); return Array.from({ length: n }, () => r.range(0.25, 1)); };
  const waveform = (ctx, x, y, w, h, col, t, amp = 1, seed = 1, n = 22, live = true) => { const v = WAVES(seed, n), bw = w / n; ctx.fillStyle = col; for (let i = 0; i < n; i++) { const a = v[i] * (live ? 0.6 + 0.4 * Math.sin(t * 7 + i * 1.3) : 1) * amp; const bh = Math.max(10, h * a); rr(ctx, x - w / 2 + i * bw + bw * 0.18, y - bh / 2, bw * 0.64, bh, bw * 0.3); ctx.fill(); } };
  // equaliser: 8 bars low->high, levels() returns 0..1 for bar i
  const eq = (ctx, x, y, w, h, levels, t, lab = true) => { const n = 8, bw = w / n; for (let i = 0; i < n; i++) { const lv = H.clamp(levels(i)) * (0.92 + 0.08 * Math.sin(t * 9 + i)); const bh = 20 + (h - 20) * lv; const col = H.rgba(H.mix('#ff6b2c', '#3fb5ff', i / (n - 1))); ctx.fillStyle = col; rr(ctx, x - w / 2 + i * bw + 8, y - bh, bw - 16, bh, 14); ctx.fill(); }
    ctx.fillStyle = 'rgba(29,29,58,0.25)'; rr(ctx, x - w / 2, y + 8, w, 10, 5); ctx.fill();
    if (lab) { text(ctx, 'LOW', x - w / 2 + bw, y + 58, 40, PAL.ink, 700); text(ctx, 'HIGH', x + w / 2 - bw, y + 58, 40, PAL.ink, 700); } };
  const mic = (ctx, x, y, s, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#4b5a7d'; rr(ctx, -20, 140, 40, 220, 18); ctx.fill(); rr(ctx, -110, 350, 220, 40, 20); ctx.fill(); ctx.fillStyle = c || '#cfd8ea'; rr(ctx, -95, -170, 190, 300, 95); ctx.fill(); }, 20);
    ctx.strokeStyle = '#4b5a7d'; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, 0, 130, 0.15, Math.PI - 0.15); ctx.stroke();
    ctx.fillStyle = '#9fb0cf'; for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) circle(ctx, -48 + c * 32, -120 + r * 40, 9, '#9fb0cf');
    ctx.restore(); };
  const boneIcon = (ctx, x, y, s, rot = 0) => { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || BONE; rr(ctx, -110, -24, 220, 48, 24); ctx.fill(); for (const [bx, by] of [[-110, -28], [-110, 28], [110, -28], [110, 28]]) circle(ctx, bx, by, 36, c || BONE); }, 12); ctx.restore(); };
  const stopwatch = (ctx, x, y, r, frac, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.coral; rr(ctx, -40, -r - 80, 80, 60, 16); ctx.fill(); circle(ctx, 0, 0, r + 30, c || PAL.coral); }, 22);
    circle(ctx, 0, 0, r, PAL.cream);
    if (frac > 0) { ctx.fillStyle = 'rgba(255,107,91,0.35)'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, r - 20, -Math.PI / 2, -Math.PI / 2 + frac * Math.PI * 2); ctx.closePath(); ctx.fill(); }
    ctx.strokeStyle = PAL.ink; ctx.lineCap = 'round'; for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; ctx.lineWidth = i % 3 ? 6 : 12; ctx.beginPath(); ctx.moveTo(Math.cos(a) * (r - 18), Math.sin(a) * (r - 18)); ctx.lineTo(Math.cos(a) * (r - 46), Math.sin(a) * (r - 46)); ctx.stroke(); }
    const a = -Math.PI / 2 + frac * Math.PI * 2; limb(ctx, [[0, 0], [Math.cos(a) * (r - 60), Math.sin(a) * (r - 60)]], 14, PAL.ink); circle(ctx, 0, 0, 20, PAL.ink);
    ctx.restore(); };
  const cassette = (ctx, x, y, s, t, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.ink; rr(ctx, -260, -160, 520, 320, 30); ctx.fill(); }, 18);
    ctx.fillStyle = PAL.yellow; rr(ctx, -220, -130, 440, 150, 18); ctx.fill(); text(ctx, 'MY VOICE', 0, -100, 42, PAL.ink, 700);
    ctx.fillStyle = '#2b2b4f'; rr(ctx, -150, -60, 300, 70, 35); ctx.fill();
    for (const cx of [-90, 90]) { ctx.save(); ctx.translate(cx, -25); ctx.rotate(t * 3); circle(ctx, 0, 0, 30, PAL.cream); ctx.fillStyle = PAL.ink; for (let i = 0; i < 6; i++) { ctx.rotate(Math.PI / 3); rr(ctx, -4, 12, 8, 14, 3); ctx.fill(); } ctx.restore(); }
    ctx.fillStyle = '#3d3d66'; ctx.beginPath(); ctx.moveTo(-160, 160); ctx.lineTo(-120, 70); ctx.lineTo(120, 70); ctx.lineTo(160, 160); ctx.closePath(); ctx.fill();
    ctx.restore(); };
  const subwoofer = (ctx, x, y, s, t, pump, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#2b2b4f'; rr(ctx, -300, -340, 600, 680, 50); ctx.fill(); }, 24);
    const p = 1 + pump * 0.06 * Math.max(0, Math.sin(t * 13));
    circle(ctx, 0, 0, 250, '#1b1b36'); circle(ctx, 0, 0, 225 * p, '#454579'); circle(ctx, 0, 0, 170 * p, '#5a5a95');
    ctx.restore(); skull(ctx, x, y, 0.95 * s * k * p, 1, t, pump * 0.6); };
  const card2 = (ctx, x, y, w, h, k, bg = PAL.cream) => { if (k <= 0.01) return false; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => { ctx.fillStyle = c || bg; rr(ctx, -w / 2, -h / 2, w, h, 44); ctx.fill(); }, 16); ctx.restore(); return true; };
  const star = (ctx, x, y, r, col) => { ctx.fillStyle = col; ctx.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rad = i % 2 ? r * 0.45 : r; i ? ctx.lineTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad) : ctx.moveTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad); } ctx.closePath(); ctx.fill(); };
  const check = (ctx, x, y, s, col, k) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k * s, k * s); longShadow(ctx, (c) => circle(ctx, 0, 0, 60, c || col), 12); limb(ctx, [[-26, 2], [-6, 24], [28, -22]], 16, PAL.white); ctx.restore(); };

  // ---------- scenes ----------
  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#5b4bd6', '#2a1f7a'); burst(ctx, 540, 1060, t, 0.06);
    const fill = 0.38 * EO(t, T(0, '38') - 0.1, T(0, 'percent') + 0.5);
    const cx = 540, cy = 1060, R = 330;
    const dk = pop(t, 0);
    ctx.save(); ctx.translate(cx, cy); ctx.scale(dk, dk);
    longShadow(ctx, (c) => circle(ctx, 0, 0, R, c || '#3a2f9a'), 24);
    ctx.lineCap = 'butt'; ctx.lineWidth = 90; ctx.strokeStyle = 'rgba(255,255,255,0.14)'; ctx.beginPath(); ctx.arc(0, 0, R - 70, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = PAL.yellow; ctx.beginPath(); ctx.arc(0, 0, R - 70, -Math.PI / 2, -Math.PI / 2 + fill * Math.PI * 2); ctx.stroke();
    circle(ctx, 0, 0, R - 125, PAL.cream);
    ctx.restore();
    const sk = pop(t, T(1, 'skull') - 0.15);
    const wk = dk * (1 - sk);
    if (wk > 0.01) { ctx.save(); ctx.translate(cx, cy); ctx.scale(wk, wk); waveform(ctx, 0, -30, 300, 180, PAL.purple, t, 1, 3, 13); text(ctx, '?', 0, 120, 110, PAL.coral, 700); ctx.restore(); }
    skull(ctx, cx, cy + 6, 0.95, sk, t, 0.3);
    const outA = T(1, 'your') - 0.25;
    bigText(ctx, '38%', 540, 330, 230, PAL.yellow, pop(t, T(0, '38') - 0.15, outA), 22);
    pill(ctx, 'KNEW THEIR OWN VOICE', 540, 1530, { k: pop(t, T(0, 'knew') - 0.15, outA), bg: PAL.cream, size: 52 });
    pill(ctx, 'ON A RECORDING', 540, 530, { k: pop(t, T(0, 'recording') - 0.15, outA), bg: PAL.coral, col: PAL.white, size: 54, rot: -0.03 });
    bigText(ctx, 'YOUR SKULL', 540, 320, 160, PAL.cream, pop(t, T(1, 'your') - 0.15), 20);
    pill(ctx, 'IS WHY', 540, 1530, { k: pop(t, T(1, 'why') - 0.15), bg: PAL.yellow, size: 64 });
  };
  S.study = (ctx, t) => {
    sky(ctx, '#ffd88a', '#ff9f6b'); burst(ctx, 540, 900, t, 0.08);
    ground(ctx, 1450, '#e3875e', '#d27650');
    bigText(ctx, '1967 STUDY', 540, 320, 150, PAL.ink, pop(t, T(2, '1967') - 0.15), 18);
    const f = EI(t, T(2, 'five') - 0.1, T(2, 'guess') + 0.2);
    stopwatch(ctx, 540, 860, 260, f * 5 / 12, pop(t, T(2, 'with') - 0.3));
    cassette(ctx, 540, 1390, 0.85, t, pop(t, T(2, 'study') - 0.1));
    const n = Math.max(1, 5 - Math.floor(H.clamp((t - T(2, 'five')) / 1.3) * 5));
    pill(ctx, t < T(2, 'five') ? '5 SECONDS' : n + ' SEC', 540, 500, { k: pop(t, T(2, 'five') - 0.15), bg: PAL.coral, col: PAL.white, size: 62 });
    pill(ctx, 'GUESS!', 840, 1100, { k: pop(t, T(2, 'guess') - 0.15), bg: PAL.yellow, size: 58, rot: 0.08 });
  };
  const AIRP = (x, y, s) => { const m = toWorld(x, y, s, ANCH.mouth), e = toWorld(x, y, s, ANCH.ear); return [[m[0] + 20, m[1]], [m[0] + 360 * s, m[1] - 140 * s], [e[0] - 30 * s, e[1] - 640 * s], [e[0] - 90 * s, e[1] - 60 * s]]; };
  S.air = (ctx, t) => {
    sky(ctx, '#9fe3ff', '#4fa8e8');
    const r = H.rng(4); for (let i = 0; i < 6; i++) { const x = ((r() * 1300 + t * 20 * (i % 2 ? 1 : 0.6)) % 1300) - 120, y = 250 + r() * 1300; ctx.fillStyle = 'rgba(255,255,255,0.5)'; rr(ctx, x, y, 180, 50, 25); ctx.fill(); }
    const x = 380, y = 960, s = 1.15;
    const P = AIRP(x, y, s);
    head(ctx, x, y, s, t, { talk: t > T(3, 'talk') - 0.1 && t < 17.0, cords: EO(t, T(3, 'vocal') - 0.2, T(3, 'cords')), inner: EO(t, T(4, 'ears') - 0.2, T(4, 'ears') + 0.2) });
    const ak = EO(t, T(3, 'air') - 0.25, T(4, 'ears') + 0.1);
    strokePath(ctx, P, 0, ak, 'rgba(255,255,255,0.6)', 10, [4, 26]);
    packets(ctx, P, t, ak, AIRC, 5, 0.5);
    pill(ctx, 'VOCAL CORDS', 700, 1430, { k: pop(t, T(3, 'vocal') - 0.15), bg: '#e8455d', col: PAL.white, size: 50, sh: 10 });
    arrow(ctx, 560, 1400, x + ANCH.cords[0] * s + 60, y + ANCH.cords[1] * s + 10, PAL.ink, 14, EO(t, T(3, 'cords') - 0.1, T(3, 'cords') + 0.3));
    bigText(ctx, 'SHAKE THE AIR', 540, 300, 130, PAL.ink, pop(t, T(3, 'shake') - 0.15), 16);
    pill(ctx, 'AIR PATH', 860, 560, { k: pop(t, T(4, 'curls') - 0.15), bg: AIRC, col: PAL.white, size: 52 });
    pill(ctx, 'INTO YOUR EARS', 540, 450, { k: pop(t, T(4, 'ears') - 0.15), bg: PAL.cream, size: 52 });
  };
  S.bone = (ctx, t) => {
    sky(ctx, '#2b2d6e', '#151640');
    const r = H.rng(12); for (let i = 0; i < 26; i++) circle(ctx, r() * W, r() * HH, r.range(3, 9), 'rgba(255,255,255,0.08)');
    const zt = EI(t, T(6, 'straight') - 0.4, T(6, 'skull') + 0.3);
    const s = H.lerp(1.15, 1.6, zt), x = H.lerp(380, 400, zt), y = H.lerp(960, 900, zt);
    const xr = EO(t, T(6, 'bones') - 0.35, T(6, 'bones') + 0.1);
    head(ctx, x, y, s, t, { talk: true, cords: 1, xray: xr, inner: EO(t, T(6, 'skull') - 0.2, T(6, 'skull') + 0.2) });
    // bone-conduction ripples: from the cords up through the jaw and skull to the inner ear
    const bk = EO(t, T(5, 'shortcut') - 0.3, T(6, 'skull'));
    const c = toWorld(x, y, s, ANCH.cords), e = toWorld(x, y, s, ANCH.inner);
    if (bk > 0.01) for (let i = 0; i < 5; i++) { const f = ((t * 0.9 + i / 5) % 1); const px = H.lerp(c[0], e[0], f * bk), py = H.lerp(c[1], e[1], f * bk); ctx.save(); ctx.globalAlpha = (1 - f) * 0.9; ctx.strokeStyle = BONEC; ctx.lineWidth = 12; ctx.beginPath(); ctx.arc(px, py, 30 + f * 60, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
    if (bk > 0.01) { ctx.save(); ctx.setLineDash([2, 26]); ctx.lineCap = 'round'; ctx.strokeStyle = BONEC; ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(c[0], c[1]); ctx.lineTo(H.lerp(c[0], e[0], bk), H.lerp(c[1], e[1], bk)); ctx.stroke(); ctx.restore(); }
    bigText(ctx, 'SHORTCUT', 540, 300, 160, PAL.yellow, pop(t, T(5, 'shortcut') - 0.15, T(6, 'straight') - 0.2), 18);
    bigText(ctx, 'THROUGH BONE', 540, 300, 140, PAL.cream, pop(t, T(6, 'bones') - 0.2), 18);
    pill(ctx, 'BUZZ', 860, 1450, { k: pop(t, T(5, 'buzz') - 0.15), bg: BONEC, col: PAL.white, size: 56 });
    pill(ctx, 'SKULL', 820, 520, { k: pop(t, T(6, 'skull') - 0.15), bg: BONE, size: 50, sh: 10 });
  };
  S.sub = (ctx, t) => {
    sky(ctx, '#ff7a59', '#c23b6a'); burst(ctx, 540, 860, t, 0.07);
    const pump = EO(t, T(8, 'boosts') - 0.3, T(8, 'boosts') + 0.2) * 0.8 + 0.2;
    const k = pop(t, T(7, 'builtin') - 0.2);
    // bass rings
    if (k > 0.5) for (let i = 0; i < 4; i++) { const f = (t * 0.8 + i / 4) % 1; ctx.save(); ctx.globalAlpha = (1 - f) * 0.5 * pump; ctx.strokeStyle = PAL.cream; ctx.lineWidth = 14; ctx.beginPath(); ctx.arc(540, 760, 330 + f * 380, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); }
    subwoofer(ctx, 540, 760, 0.82, t, pump, k);
    bigText(ctx, 'SUBWOOFER', 540, 300, 150, PAL.cream, pop(t, T(7, 'subwoofer') - 0.15), 18);
    const boost = EO(t, T(8, 'deep') - 0.3, T(8, 'tones') + 0.2);
    const ek = pop(t, T(8, 'it') - 0.2);
    if (ek > 0.01) { ctx.save(); ctx.translate(540, 1500); ctx.scale(ek, ek); ctx.translate(-540, -1500); card2(ctx, 540, 1420, 900, 330, 1); eq(ctx, 540, 1510, 780, 230, (i) => 0.45 + (i < 3 ? boost * (0.55 - i * 0.08) : -0.05 * i * boost), t, false); ctx.restore(); }
    pill(ctx, 'DEEP TONES ↑', 540, 1230, { k: pop(t, T(8, 'deep') - 0.15), bg: PAL.orange, col: PAL.white, size: 48, sh: 10 });
    pill(ctx, 'FULLER', 250, 1110, { k: pop(t, T(9, 'fuller') - 0.15), bg: PAL.yellow, size: 54, rot: -0.06 });
    pill(ctx, 'DEEPER', 830, 1110, { k: pop(t, T(9, 'deeper') - 0.15), bg: PAL.yellow, size: 54, rot: 0.06 });
  };
  S.mic = (ctx, t) => {
    sky(ctx, '#a6f0c6', '#3fbf8a');
    ground(ctx, 1500, '#2f9e6e');
    mic(ctx, 330, 900, 1.05, pop(t, T(10, 'microphone') - 0.2));
    // air waves arriving from the right
    const ak = EO(t, T(10, 'air') - 0.3, T(10, 'part'));
    const P = [[1080, 820], [880, 760], [700, 860], [470, 820]];
    packets(ctx, P, t, ak, AIRC, 4, 0.6, 40);
    check(ctx, 820, 600, 0.9, PAL.green, pop(t, T(10, 'air') - 0.1));
    pill(ctx, 'AIR ONLY', 820, 470, { k: pop(t, T(10, 'only') - 0.15), bg: AIRC, col: PAL.white, size: 56 });
    // bone path: crossed out
    const bkk = pop(t, T(11, 'bones') - 0.2);
    if (bkk > 0.01) { boneIcon(ctx, 780, 1080, 0.85 * bkk, -0.3); cross(ctx, 900, 1000, 0.85, PAL.red, pop(t, T(11, 'bones') + 0.05)); }
    const drop = EO(t, T(11, 'bass') - 0.2, T(11, 'bass') + 0.3);
    const ek = pop(t, T(11, 'bass') - 0.25);
    if (ek > 0.01) { ctx.save(); ctx.translate(540, 1560); ctx.scale(ek, ek); ctx.translate(-540, -1560); card2(ctx, 540, 1430, 860, 300, 1); eq(ctx, 540, 1510, 740, 200, (i) => i < 3 ? 0.95 - drop * (0.85 - i * 0.1) : 0.5, t, false); ctx.restore(); }
    bigText(ctx, 'NO BONES', 540, 290, 150, PAL.ink, pop(t, T(11, 'no') - 0.15), 18);
    pill(ctx, 'NO BASS', 540, 1240, { k: pop(t, T(11, 'bass') - 0.15), bg: PAL.red, col: PAL.white, size: 60 });
  };
  S.compare = (ctx, t) => {
    sky(ctx, '#fff1c9', '#ffd27a');
    const hl = EO(t, T(13, 'everyone') - 0.3, T(13, 'hears'));
    // top: in your head
    if (card2(ctx, 540, 640, 900, 420, pop(t, CUTS.compare + 0.05), H.rgba(H.mix('#fff6e6', '#e8e1d2', hl)))) {
      text(ctx, 'IN YOUR HEAD', 540, 500, 56, PAL.ink, 700);
      ctx.save(); ctx.globalAlpha = 1 - hl * 0.5; eq(ctx, 540, 760, 760, 200, (i) => 0.95 - i * 0.09, t, false); ctx.restore();
    }
    const rk = pop(t, T(12, 'recording') - 0.2);
    if (card2(ctx, 540, 1250, 900, 420, rk, PAL.cream)) {
      if (hl > 0.01) { ctx.save(); ctx.globalAlpha = hl; ctx.strokeStyle = PAL.coral; ctx.lineWidth = 16; rr(ctx, 80, 1030, 920, 440, 52); ctx.stroke(); ctx.restore(); }
      text(ctx, 'RECORDING', 540, 1110, 56, PAL.ink, 700);
      const hi = EO(t, T(12, 'higher') - 0.3, T(12, 'thinner') + 0.2);
      eq(ctx, 540, 1370, 760, 200, (i) => H.lerp(0.95 - i * 0.09, 0.2 + i * 0.1, hi), t, false);
    }
    pill(ctx, 'HIGHER', 250, 1010, { k: pop(t, T(12, 'higher') - 0.15), bg: AIRC, col: PAL.white, size: 50, sh: 10, rot: -0.05 });
    pill(ctx, 'THINNER', 830, 1010, { k: pop(t, T(12, 'thinner') - 0.15), bg: PAL.purple, col: PAL.white, size: 50, sh: 10, rot: 0.05 });
    bigText(ctx, 'WHAT OTHERS', 540, 250, 130, PAL.ink, pop(t, T(13, 'everyone') - 0.15), 16);
    bigText(ctx, 'HEAR', 540, 380, 130, PAL.coral, pop(t, T(13, 'hears') - 0.15), 16);
    arrow(ctx, 900, 420, 900, 1020, PAL.coral, 18, EO(t, T(13, 'hears') - 0.05, T(13, 'hears') + 0.35));
  };
  const VOICE_CARDS = [[300, 860, 3], [780, 860, 2], [300, 1300, 5], [780, 1300, 3]];
  S.s2013 = (ctx, t) => {
    sky(ctx, '#ff9ccc', '#c84f9a'); burst(ctx, 540, 1080, t, 0.07);
    bigText(ctx, '2013 STUDY', 540, 300, 150, PAL.cream, pop(t, T(14, '2013') - 0.15), 18);
    VOICE_CARDS.forEach(([x, y, stars], i) => { const k = pop(t, T(14, 'study') - 0.1 + i * 0.12); if (k <= 0.01) return; const mine = i === 2;
      ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -210, -170, 420, 340, 40); ctx.fill(); }, 14);
      waveform(ctx, 0, -50, 300, 130, mine ? PAL.purple : '#7d84a8', t, 1, 20 + i, 12);
      const sf = EO(t, T(15, 'rated') - 0.1 + i * 0.15, T(15, 'rated') + 0.6 + i * 0.15);
      const shown = mine ? Math.round(sf * 5 * EO(t, T(15, 'attractive') - 0.4, T(15, 'attractive'))) + Math.round(sf * 3) * (1 - EO(t, T(15, 'attractive') - 0.4, T(15, 'attractive'))) : Math.round(sf * stars);
      for (let s = 0; s < 5; s++) star(ctx, -128 + s * 64, 90, 28, s < Math.round(shown) ? PAL.yellow : 'rgba(29,29,58,0.15)');
      ctx.restore(); });
    // the hidden "you" card reveal
    const yk = pop(t, T(16, 'theirs') - 0.15);
    pill(ctx, 'SECRETLY YOU', 300, 1520, { k: yk, bg: PAL.purple, col: PAL.white, size: 46, sh: 10 });
    pill(ctx, 'MORE ATTRACTIVE', 540, 520, { k: pop(t, T(15, 'more') - 0.15), bg: PAL.yellow, size: 58 });
    pill(ctx, "DIDN'T KNOW", 780, 1520, { k: pop(t, T(16, 'didnt') - 0.15), bg: PAL.ink, col: PAL.white, size: 46, sh: 10 });
  };
  const ENDW = [[300, 980, 31], [780, 980, 32], [300, 1340, 33], [780, 1340, 34]];
  S.end = (ctx, t) => {
    sky(ctx, '#5b4bd6', '#2a1f7a'); burst(ctx, 540, 1100, t, 0.08, 16);
    const q = T(18, 'be') - 0.25;
    bigText(ctx, 'NOT BAD', 540, 330, 170, PAL.cream, pop(t, T(17, 'bad') - 0.2, q), 20);
    bigText(ctx, 'JUST NEW', 540, 500, 130, PAL.yellow, pop(t, T(17, 'unfamiliar') - 0.15, q), 16);
    const hk = pop(t, T(17, 'voice') - 0.2, q);
    if (hk > 0.01) { ctx.save(); ctx.translate(540, 1160); ctx.scale(hk * 0.8, hk * 0.8); ctx.translate(-540, -1160); head(ctx, 420, 1050, 0.9, t, { talk: true }); ctx.restore(); check(ctx, 820, 1300, 1, PAL.green, pop(t, T(17, 'bad') - 0.05, q)); }
    bigText(ctx, 'WOULD YOU', 540, 300, 140, PAL.cream, pop(t, T(18, 'would') - 0.15), 18);
    bigText(ctx, 'SPOT YOURS?', 540, 450, 140, PAL.yellow, pop(t, T(18, 'spotted') - 0.2), 18);
    ENDW.forEach(([x, y, sd], i) => { const k = pop(t, T(18, 'your') - 0.25 + i * 0.1); if (k <= 0.01) return; ctx.save(); ctx.translate(x, y + Math.sin(t * 2 + i) * 8); ctx.scale(k, k); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -200, -140, 400, 280, 40); ctx.fill(); }, 14); waveform(ctx, 0, -20, 280, 130, [PAL.purple, PAL.coral, AIRC, PAL.green][i], t, 1, sd, 11); text(ctx, '?', 0, 95, 64, PAL.ink, 700); ctx.restore(); });
  };

  const ORDER = [['hook', 0], ['study', CUTS.study], ['air', CUTS.air], ['bone', CUTS.bone], ['sub', CUTS.sub], ['mic', CUTS.mic], ['compare', CUTS.compare], ['s2013', CUTS.s2013], ['end', CUTS.end]];
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
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 100, gain: 0.22, chords: [['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['C4', 'E4', 'G4', 'B4'], ['G3', 'B3', 'D4', 'F4']] });
    for (let i = 0; i < 6; i++) k.play('tick', T(0, '38') + i * 0.12, { gain: 0.25, minor: true });
    k.play('stamp', T(0, '38') - 0.15, { gain: 0.5 }); popAt(T(0, 'knew') - 0.15, 600, 0.5); popAt(T(0, 'recording') - 0.15, 720, 0.5, 0.3);
    k.play('impact', T(1, 'skull') - 0.1, { gain: 0.5 }); k.play('ding', T(1, 'why') - 0.1, { f: 'E5', gain: 0.25 });
    wipe(CUTS.study);
    k.play('stamp', T(2, '1967') - 0.15, { gain: 0.45 });
    for (let i = 0; i < 5; i++) k.play('tick', T(2, 'five') + i * 0.3, { gain: 0.35, minor: true });
    popAt(T(2, 'guess') - 0.15, 760, 0.6, 0.4, false);
    wipe(CUTS.air);
    for (let i = 0; i < 6; i++) k.play('blip', T(3, 'talk') + i * 0.2, { gain: 0.12, minor: true });
    popAt(T(3, 'vocal') - 0.15, 560, 0.6, 0.2); k.play('swish', T(3, 'air') - 0.25, { gain: 0.4 });
    popAt(T(4, 'curls') - 0.15, 700, 0.5, 0.4); k.play('ding', T(4, 'ears') - 0.1, { f: 'G5', gain: 0.25 });
    wipe(CUTS.bone);
    popAt(T(5, 'buzz') - 0.15, 480, 0.6, 0.3, false); k.play('stamp', T(5, 'shortcut') - 0.15, { gain: 0.45 });
    k.play('riser', T(6, 'straight') - 0.4, { dur: 0.8, gain: 0.3 }); k.play('thud', T(6, 'bones') - 0.1, { f: 90, gain: 0.5 }); popAt(T(6, 'skull') - 0.15, 600, 0.5, 0.3);
    wipe(CUTS.sub);
    k.play('impact', T(7, 'builtin') - 0.1, { gain: 0.45 }); k.play('stamp', T(7, 'subwoofer') - 0.15, { gain: 0.45 });
    for (let i = 0; i < 6; i++) k.play('thud', T(8, 'boosts') + i * 0.48, { f: 60, gain: 0.35, minor: true });
    popAt(T(8, 'deep') - 0.15, 420, 0.6, -0.3); popAt(T(9, 'fuller') - 0.15, 600, 0.6, -0.4, false); popAt(T(9, 'deeper') - 0.15, 500, 0.6, 0.4, false);
    wipe(CUTS.mic);
    popAt(T(10, 'microphone') - 0.2, 640, 0.6); k.play('swish', T(10, 'air') - 0.3, { gain: 0.35 }); k.play('success', T(10, 'air') - 0.05, { f: 'C6', gain: 0.2 });
    k.play('error', T(11, 'bones') + 0.05, { f: 'A3', gain: 0.25 }); k.play('stamp', T(11, 'no') - 0.15, { gain: 0.4 }); k.play('error', T(11, 'bass') - 0.05, { f: 'G3', gain: 0.25 });
    wipe(CUTS.compare);
    popAt(T(12, 'recording') - 0.2, 600, 0.6); popAt(T(12, 'higher') - 0.15, 880, 0.6, -0.4, false); popAt(T(12, 'thinner') - 0.15, 980, 0.6, 0.4, false);
    k.play('stamp', T(13, 'everyone') - 0.15, { gain: 0.45 }); k.play('ding', T(13, 'hears') - 0.1, { f: 'A5', gain: 0.25 });
    wipe(CUTS.s2013);
    k.play('stamp', T(14, '2013') - 0.15, { gain: 0.45 });
    for (let i = 0; i < 4; i++) popAt(T(14, 'study') - 0.1 + i * 0.12, 600 + i * 80, 0.4, (i % 2 ? 0.3 : -0.3));
    for (let i = 0; i < 8; i++) k.play('tick', T(15, 'rated') + i * 0.12, { gain: 0.2, minor: true });
    k.play('sparkle', T(15, 'attractive') - 0.15, { n: 5, gain: 0.35 }); popAt(T(16, 'didnt') - 0.15, 560, 0.5, 0.3); k.play('success', T(16, 'theirs') - 0.1, { f: 'C6', gain: 0.25 });
    wipe(CUTS.end);
    k.play('stamp', T(17, 'bad') - 0.2, { gain: 0.45 }); k.play('ding', T(17, 'unfamiliar') - 0.1, { f: 'E5', gain: 0.25 });
    k.play('swish', T(18, 'be') - 0.25, { gain: 0.35 });
    for (let i = 0; i < 4; i++) popAt(T(18, 'your') - 0.25 + i * 0.1, 600 + i * 90, 0.45, (i % 2 ? 0.3 : -0.3));
    k.play('ding', T(18, 'voice') - 0.05, { f: 'C6', gain: 0.3 });
    k.tone(T(18, 'voice') + 0.6, { f: 'A4', type: 'triangle', dur: 0.9, gain: 0.1, a: 0.02 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
