// ================= Flat-Vector Science, vertical 1080x1920: "Why do pigeons bob their heads?" =================
(function () {
  const W = 1080, HH = 1920;
  // ---------- BEATS: exact phrase timing from phrases.json ----------
  const PH = [{"s":0.25,"e":1.89,"w":{"pigeon":0.25,"heads":0.77,"never":1.2,"bob":1.63}},{"s":2.19,"e":4.25,"w":{"youve":2.19,"been":2.49,"watching":2.72,"them":3.19,"freeze":3.42,"in":3.78,"midair":3.89}},{"s":4.8,"e":5.89,"w":{"watch":4.8,"one":5.25,"walk":5.53}},{"s":6.19,"e":7.52,"w":{"the":6.19,"head":6.39,"shoots":6.66,"forward":7.05}},{"s":7.82,"e":8.97,"w":{"about":7.82,"two":8.23,"inches":8.48}},{"s":9.52,"e":10.54,"w":{"thats":9.52,"the":9.89,"thrust":10.1}},{"s":11.09,"e":12.3,"w":{"then":11.09,"it":11.41,"stops":11.57,"dead":11.97}},{"s":12.6,"e":13.65,"w":{"locked":12.6,"in":13.08,"place":13.24}},{"s":13.95,"e":15.62,"w":{"while":13.95,"the":14.23,"body":14.41,"walks":14.64,"underneath":14.93,"it":15.5}},{"s":16.17,"e":17.15,"w":{"thats":16.17,"the":16.58,"hold":16.83}},{"s":17.7,"e":18.9,"w":{"then":17.7,"forward":18.0,"again":18.52}},{"s":19.2,"e":21.09,"w":{"five":19.2,"to":19.48,"eight":19.62,"times":19.97,"every":20.32,"second":20.67}},{"s":21.64,"e":22.63,"w":{"but":21.64,"why":21.89,"bother":22.13}},{"s":23.18,"e":24.73,"w":{"in":23.18,"nineteen":23.32,"seventyeight":23.88}},{"s":25.03,"e":27.99,"w":{"scientists":25.03,"in":25.77,"canada":25.92,"put":26.36,"a":27.25,"pigeon":26.66,"on":27.1,"treadmill":27.32}},{"s":28.54,"e":29.98,"w":{"its":28.54,"legs":28.78,"kept":29.1,"walking":29.42}},{"s":30.28,"e":32.14,"w":{"but":30.28,"the":30.46,"world":30.65,"around":30.96,"it":31.33,"stayed":31.46,"still":31.83}},{"s":32.44,"e":33.69,"w":{"and":32.44,"the":32.63,"bobbing":32.82,"stopped":33.26}},{"s":34.24,"e":35.96,"w":{"so":34.24,"it":34.42,"isnt":34.59,"about":34.93,"balance":35.36}},{"s":36.26,"e":37.98,"w":{"its":36.26,"about":36.48,"what":36.86,"the":37.16,"bird":37.38,"sees":37.68}},{"s":38.53,"e":40.83,"w":{"holding":38.53,"its":38.96,"head":39.15,"still":39.4,"keeps":39.71,"the":40.02,"view":40.21,"steady":40.45}},{"s":41.13,"e":42.86,"w":{"like":41.13,"a":42.26,"camera":41.56,"on":42.08,"tripod":42.34}},{"s":43.16,"e":44.82,"w":{"while":43.16,"the":43.52,"world":43.74,"slides":44.1,"past":44.53}},{"s":45.37,"e":47.04,"w":{"chickens":45.37,"and":45.93,"cranes":46.14,"do":46.55,"it":46.69,"too":46.83}},{"s":47.59,"e":49.25,"w":{"so":47.59,"next":47.73,"time":48.02,"you":48.31,"see":48.53,"a":48.74,"pigeon":48.81}},{"s":49.55,"e":50.47,"w":{"watch":49.55,"the":49.93,"head":50.17}},{"s":51.02,"e":51.94,"w":{"is":51.02,"it":51.19,"bobbing":51.36}},{"s":52.24,"e":53.39,"w":{"or":52.24,"standing":52.4,"still":53.01}}];
  const GROUPS = { hook: [0, 1], thrust: [2, 5], hold: [6, 9], rate: [10, 11], why: [12, 12], lab: [13, 17], sees: [18, 19], tripod: [20, 22], others: [23, 23], end: [24, 27] };
  const BEATS = Object.entries(GROUPS).map(([id, [a, b]]) => ({ id, s: PH[a].s, e: PH[b].e, w: Object.assign({}, ...PH.slice(a, b + 1).map((p) => p.w)) }));
  const B = Object.fromEntries(BEATS.map((b) => [b.id, b]));
  const T = (id, w) => B[id].w[w];
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { ink: '#1d1d3a', cream: '#fff6e6', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', teal: '#1fb6a6', yellow: '#ffd23f', purple: '#6c4ad9', white: '#ffffff', pink: '#ff7fa8', grey: '#8d9ab5', greyD: '#66728f', greyL: '#b9c3d8' };
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 26, col = 'rgba(20,20,60,0.16)') => { ctx.save(); for (let i = len; i > 0; i -= 3) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700, align = 'center') => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 52, padX = size * 0.7, h = size * 1.7, w = measure(ctx, s, size) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); if (o.rot) ctx.rotate(o.rot);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 18);
    text(ctx, s, 0, 2, size, o.col || PAL.ink); ctx.restore();
  };
  const big = (ctx, s, x, y, size, col, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col), 20); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 14, prog = 1) => {
    if (prog <= 0) return; const x = H.lerp(x0, x1, prog), y = H.lerp(y0, y1, prog), a = Math.atan2(y1 - y0, x1 - x0);
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = col; ctx.translate(x, y); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt * 1.2, -wdt * 1.4); ctx.lineTo(-wdt * 1.2, wdt * 1.4); ctx.closePath(); ctx.fill(); ctx.restore();
  };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const ground = (ctx, y, col, col2) => { ctx.fillStyle = col; ctx.fillRect(0, y, W, HH - y); if (col2) { ctx.fillStyle = col2; for (let i = 0; i < 8; i++) { ctx.fillRect(i * 150 - 20, y + 60 + (i % 2) * 90, 90, 14); } } };
  // the true motion: head position in space jumps forward quickly (thrust), then holds while the body catches up.
  // Returns 0..1, how far the head is ahead of the body. Phase c counts steps.
  const bob = (c) => { const f = c - Math.floor(c); return ((f < 0.25 ? H.ease.out(f / 0.25) : 1) - f) / 0.75; };
  const HEADX = 150, HEADY = -385; // head position relative to the feet, at off=0
  // flat pigeon, facing right. off = neck stretch in local px, leg = stride -1..1
  const pigeon = (ctx, x, y, s, o = {}) => {
    const off = o.off || 0, leg = o.leg || 0;
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => {
      const col = (v) => c || v;
      // legs
      ctx.strokeStyle = col(PAL.pink); ctx.lineWidth = 16; ctx.lineCap = 'round';
      [[-14, leg], [24, -leg]].forEach(([lx, l]) => { const fx = lx + l * 46, lift = Math.max(0, l) * 16; ctx.beginPath(); ctx.moveTo(lx, -105); ctx.lineTo(fx, -8 - lift); ctx.lineTo(fx + 40, -8 - lift); ctx.stroke(); });
      // tail
      ctx.fillStyle = col(PAL.greyD); ctx.beginPath(); ctx.moveTo(-90, -210); ctx.lineTo(-265, -120); ctx.lineTo(-235, -80); ctx.lineTo(-70, -135); ctx.closePath(); ctx.fill();
      // neck: a flexible band from the shoulders to the head
      const hx = HEADX + off, hy = HEADY;
      ctx.fillStyle = col('#5e7fb8'); ctx.beginPath(); ctx.moveTo(30, -280); ctx.quadraticCurveTo(hx - 70, hy + 60, hx - 44, hy); ctx.lineTo(hx + 44, hy); ctx.quadraticCurveTo(hx + 30, hy + 90, 130, -175); ctx.closePath(); ctx.fill();
      // iridescent neck patch
      if (!c) { ctx.fillStyle = '#4fbf9f'; ctx.beginPath(); ctx.moveTo(50, -265); ctx.quadraticCurveTo(hx - 50, hy + 90, hx - 26, hy + 44); ctx.lineTo(hx + 28, hy + 50); ctx.quadraticCurveTo(hx + 10, hy + 120, 118, -215); ctx.closePath(); ctx.fill(); }
      // body
      ctx.fillStyle = col(PAL.grey); ctx.beginPath(); ctx.ellipse(0, -190, 158, 104, -0.16, 0, Math.PI * 2); ctx.fill();
      // wing
      ctx.fillStyle = col(PAL.greyL); ctx.beginPath(); ctx.moveTo(60, -250); ctx.quadraticCurveTo(-60, -290, -170, -150); ctx.quadraticCurveTo(-30, -115, 60, -180); ctx.closePath(); ctx.fill();
      if (!c) { ctx.fillStyle = PAL.ink; ctx.fillRect(-110, -206, 86, 15); ctx.fillRect(-72, -170, 86, 15); }
      // head
      circle(ctx, hx, hy, 62, col('#5e7fb8'));
      ctx.fillStyle = col('#f4b740'); ctx.beginPath(); ctx.moveTo(hx + 52, hy - 16); ctx.lineTo(hx + 108, hy + 8); ctx.lineTo(hx + 50, hy + 22); ctx.closePath(); ctx.fill();
      if (!c) { circle(ctx, hx + 54, hy - 18, 11, PAL.cream); circle(ctx, hx + 18, hy - 14, 21, PAL.orange); circle(ctx, hx + 20, hy - 14, 11, PAL.ink); circle(ctx, hx + 24, hy - 19, 4, PAL.white); }
    }, o.sh ?? 22);
    ctx.restore();
  };
  const headX = (x, s, off) => x + s * (HEADX + off);
  const headY = (y, s) => y + s * HEADY;
  const dashed = (ctx, x, y0, y1, col = PAL.cream, wdt = 8) => { ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.setLineDash([26, 22]); ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x, y0); ctx.lineTo(x, y1); ctx.stroke(); ctx.restore(); };
  const padlock = (ctx, x, y, s) => { if (s <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.strokeStyle = c || PAL.cream; ctx.lineWidth = 16; ctx.beginPath(); ctx.arc(0, -30, 34, Math.PI, 0); ctx.lineTo(34, 0); ctx.moveTo(-34, -30); ctx.lineTo(-34, 0); ctx.stroke(); ctx.fillStyle = c || PAL.yellow; rr(ctx, -56, -6, 112, 88, 18); ctx.fill(); }, 14); circle(ctx, 0, 32, 14, PAL.ink); ctx.restore(); };
  const city = (ctx, gy, off, cols) => { const r = H.rng(11); for (let i = -1; i < 12; i++) { const w = r.range(120, 200), h = r.range(180, 460), span = 170 * 12, x = ((i * 170 - off) % span + span) % span - 200; ctx.fillStyle = cols[i & 1 ? 1 : 0]; ctx.fillRect(x, gy - h, w, h); ctx.fillStyle = 'rgba(255,255,255,0.28)'; for (let a = 0; a < 3; a++) for (let b = 0; b < Math.floor(h / 80); b++) ctx.fillRect(x + 22 + a * ((w - 44) / 3), gy - h + 26 + b * 74, 22, 34); } };
  const crosshair = (ctx, x, y, r, col, k) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.strokeStyle = col; ctx.lineWidth = 12; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke(); [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([a, b]) => { ctx.beginPath(); ctx.moveTo(a * r * 0.86, b * r * 0.86); ctx.lineTo(a * r * 1.22, b * r * 1.22); ctx.stroke(); }); ctx.restore(); };

  // ---------- scenes ----------
  const S = {};
  S.hook = (ctx, t) => {
    sky(ctx, '#7fd4f2', '#d7f3ff'); city(ctx, 1320, 0, ['#5aa7cf', '#74bbdc']); ground(ctx, 1320, '#d8cdb9', '#c5b8a0');
    const fz = T('hook', 'freeze');
    const c = t < fz ? t / 0.7 : fz / 0.7, s = 1.4, x = 400, y = 1560, off = 120 * bob(c);
    pigeon(ctx, x, y, s, { off, leg: t < fz ? Math.sin(c * Math.PI * 2) : Math.sin(fz / 0.7 * Math.PI * 2) });
    big(ctx, 'NEVER', 540, 330, 190, PAL.ink, pop(t, T('hook', 'never') - 0.15));
    big(ctx, 'BOB!', 540, 510, 210, PAL.orange, pop(t, T('hook', 'bob') - 0.15));
    const hx = headX(x, s, off), hy = headY(y, s);
    crosshair(ctx, hx, hy, 150, PAL.red, pop(t, fz - 0.1));
    pill(ctx, 'FROZEN MIDAIR', 540, 700, { k: pop(t, T('hook', 'midair') - 0.15), bg: PAL.blue, col: PAL.white, size: 64 });
  };
  S.thrust = (ctx, t) => {
    sky(ctx, '#ffb65c', '#ff8f4a'); ground(ctx, 1500, '#7a3f22', '#8e4f2e');
    const sh = T('thrust', 'shoots'), s = 1.4, x = 380, y = 1500, off = 125 * EO(t, sh - 0.1, sh + 0.14);
    const walking = t < sh;
    pigeon(ctx, x, y, s, { off, leg: walking ? Math.sin(t * 8) : 0 });
    const hx0 = headX(x, s, 0), hx1 = headX(x, s, 125), hy = headY(y, s);
    pill(ctx, 'WATCH THE WALK', 540, 300, { k: pop(t, B.thrust.s - 0.1, sh - 0.15), size: 64 });
    arrow(ctx, hx0, hy - 150, hx1 + 40, hy - 150, PAL.white, 20, EO(t, sh - 0.1, sh + 0.15));
    const rk = pop(t, T('thrust', 'two') - 0.15);
    if (rk > 0.01) { ctx.save(); ctx.globalAlpha = Math.min(1, rk); ctx.fillStyle = PAL.yellow; rr(ctx, hx0, hy - 240, hx1 - hx0, 46, 8); ctx.fill(); ctx.fillStyle = PAL.ink; for (let i = 0; i <= 8; i++) ctx.fillRect(hx0 + (hx1 - hx0 - 6) * i / 8, hy - 240, 6, i % 4 ? 18 : 30); ctx.restore();
      big(ctx, '2 INCHES', 540, 520, 140, PAL.white, rk * bump(t, T('thrust', 'two'))); }
    big(ctx, 'THRUST!', 540, 330, 170, PAL.ink, pop(t, T('thrust', 'thrust') - 0.15));
  };
  S.hold = (ctx, t) => {
    sky(ctx, '#4b3a9c', '#8a5bc9'); ground(ctx, 1500, '#2d2263', '#3d3080');
    const s = 1.4, y = 1500, hxFix = 800, move = EI(t, T('hold', 'body') - 0.25, T('hold', 'it') + 0.2), off = 125 * (1 - move);
    const x = hxFix - s * (HEADX + off), hy = headY(y, s);
    dashed(ctx, hxFix, 680, 1490, PAL.yellow);
    const moving = move > 0 && move < 1;
    pigeon(ctx, x, y, s, { off, leg: moving ? Math.sin(t * 11) : 0 });
    padlock(ctx, hxFix, hy - 210, pop(t, T('hold', 'locked') - 0.15));
    pill(ctx, 'STOPS DEAD', 340, 620, { k: pop(t, T('hold', 'stops') - 0.15, T('hold', 'hold') - 0.3), bg: PAL.red, col: PAL.white, size: 62 });
    arrow(ctx, 170, 1660 - 40, 520, 1660 - 40, PAL.cream, 18, EO(t, T('hold', 'body') - 0.2, T('hold', 'it')));
    big(ctx, 'HOLD!', 540, 340, 190, PAL.yellow, pop(t, T('hold', 'hold') - 0.15));
    if (t < T('hold', 'hold') - 0.2) { pill(ctx, 'BODY KEEPS WALKING', 540, 340, { k: pop(t, T('hold', 'body') - 0.15), size: 62 }); }
  };
  S.rate = (ctx, t) => {
    sky(ctx, '#ff6f61', '#ffb05c'); const f5 = T('rate', 'five');
    const shift = t * 300; ground(ctx, 1500, '#6b2137'); ctx.fillStyle = '#8a2f49'; for (let i = -1; i < 9; i++) ctx.fillRect(((i * 170 - shift) % 1360 + 1360) % 1360 - 150, 1560, 90, 18);
    const c = t < f5 ? t / 0.55 : f5 / 0.55 + (t - f5) * 6;
    pigeon(ctx, 390, 1500, 1.4, { off: 110 * bob(c), leg: Math.sin(c * Math.PI * 2) });
    pill(ctx, 'AGAIN!', 540, 340, { k: pop(t, T('rate', 'forward') - 0.15, f5 - 0.2), size: 72, bg: PAL.yellow });
    big(ctx, '5 TO 8', 540, 370, 190, PAL.white, pop(t, f5 - 0.15) * bump(t, T('rate', 'eight')));
    pill(ctx, 'TIMES A SECOND', 540, 570, { k: pop(t, T('rate', 'times') - 0.15), size: 66 });
  };
  S.why = (ctx, t) => {
    sky(ctx, '#17214d', '#2b3a80'); ground(ctx, 1500, '#101838');
    const sway = Math.sin(t * 5) * 0.08;
    ctx.save(); ctx.translate(690, 760); ctx.rotate(sway); const k = pop(t, B.why.s - 0.1); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, '?', 0, 0, 520, c || PAL.yellow), 30); ctx.restore();
    pigeon(ctx, 360, 1500, 1.3, { off: 50 });
    big(ctx, 'WHY BOTHER?', 540, 320, 130, PAL.cream, pop(t, T('why', 'why') - 0.15));
  };
  S.lab = (ctx, t) => {
    sky(ctx, '#1fb6a6', '#7fe0cf'); ctx.fillStyle = '#16998c'; ctx.fillRect(0, 1460, W, HH - 1460);
    // treadmill
    const by = 1390, bx = 130, bw = 820;
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.ink; rr(ctx, bx, by, bw, 74, 37); ctx.fill(); }, 20);
    ctx.save(); rr(ctx, bx, by, bw, 74, 37); ctx.clip(); ctx.fillStyle = PAL.greyL; const sft = (t * 260) % 90; for (let i = -1; i < 12; i++) ctx.fillRect(bx + bw - i * 90 - sft, by + 6, 34, 14); ctx.restore();
    [bx + 38, bx + bw - 38].forEach((rx) => { circle(ctx, rx, by + 44, 24, PAL.greyD); });
    ctx.fillStyle = PAL.ink; ctx.fillRect(bx + 70, by + 72, 40, 70); ctx.fillRect(bx + bw - 110, by + 72, 40, 70);
    // bird
    const stop = EI(t, T('lab', 'bobbing') - 0.3, T('lab', 'stopped')), c = (t - B.lab.s) / 0.7;
    const s = 1.1, x = 420;
    pigeon(ctx, x, by + 8, s, { off: 80 * bob(c) * (1 - stop) + 40 * stop, leg: Math.sin(t * 9) });
    // plexiglass box
    ctx.save(); ctx.globalAlpha = 0.16; ctx.fillStyle = PAL.white; rr(ctx, 110, 800, 860, 590, 26); ctx.fill(); ctx.globalAlpha = 0.85; ctx.strokeStyle = PAL.white; ctx.lineWidth = 10; rr(ctx, 110, 800, 860, 590, 26); ctx.stroke(); ctx.restore();
    const lg = T('lab', 'legs');
    big(ctx, '1978', 540, 310, 190, PAL.white, pop(t, T('lab', 'nineteen') - 0.15, lg - 0.35));
    pill(ctx, 'CANADA', 540, 520, { k: pop(t, T('lab', 'canada') - 0.15, lg - 0.35), bg: PAL.red, col: PAL.white, size: 66 });
    pill(ctx, 'TREADMILL', 540, 1600, { k: pop(t, T('lab', 'treadmill') - 0.15), size: 56 });
    pill(ctx, 'LEGS: WALKING', 540, 280, { k: pop(t, lg - 0.05), size: 62 });
    pill(ctx, 'WORLD: STILL', 540, 430, { k: pop(t, T('lab', 'world') - 0.15), bg: PAL.blue, col: PAL.white, size: 62 });
    pill(ctx, 'NO MORE BOB!', 540, 610, { k: pop(t, T('lab', 'stopped') - 0.15), bg: PAL.red, col: PAL.white, size: 78, rot: -0.05 });
  };
  S.sees = (ctx, t) => {
    sky(ctx, '#fff0d6', '#ffd0a8');
    const bk = pop(t, T('sees', 'balance') - 0.2);
    pill(ctx, 'BALANCE', 540, 340, { k: bk, size: 92, bg: PAL.white });
    const xk = EO(t, T('sees', 'balance') + 0.1, T('sees', 'balance') + 0.35);
    if (xk > 0) { ctx.save(); ctx.strokeStyle = PAL.red; ctx.lineWidth = 26; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(240, 340 - 70 * 0 + 60); ctx.lineTo(H.lerp(240, 840, xk), 400 - 120 * xk); ctx.stroke(); ctx.restore(); }
    const k = pop(t, T('sees', 'its') - 0.15), look = Math.sin(t * 1.3) * 26;
    if (k > 0.01) { ctx.save(); ctx.translate(540, 1000); ctx.scale(k, k);
      longShadow(ctx, (c) => circle(ctx, 0, 0, 340, c || '#5e7fb8'), 30); circle(ctx, 0, 0, 270, PAL.cream); circle(ctx, look * 0.5, 0, 210, PAL.orange); circle(ctx, look, 0, 112, PAL.ink); circle(ctx, look + 40, -48, 36, PAL.white); ctx.restore(); }
    pill(ctx, 'WHAT IT SEES', 540, 1520, { k: pop(t, T('sees', 'sees') - 0.15), bg: PAL.purple, col: PAL.white, size: 76 });
  };
  S.tripod = (ctx, t) => {
    sky(ctx, '#ffe29a', '#a6e3f0');
    const slide = EI(t, B.tripod.s, B.tripod.e) * 900 + t * 60;
    city(ctx, 1400, slide * 0.5, ['#f5a46c', '#ee8a5a']); city(ctx, 1460, slide * 1.0 + 300, ['#54a39b', '#3d8c88']);
    ctx.fillStyle = '#2e6a68'; ctx.fillRect(0, 1460, W, HH - 1460);
    const hx = 500, hy = 790, r = 2.3, tk = EO(t, T('tripod', 'tripod') - 0.5, T('tripod', 'tripod') + 0.05);
    // tripod legs
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 26; ctx.lineCap = 'round'; const ly = H.lerp(hy + 170, 1500, tk);
    if (tk > 0) { [-270, 0, 270].forEach((d) => { ctx.beginPath(); ctx.moveTo(hx, hy + 170); ctx.lineTo(hx + d * tk, ly); ctx.stroke(); }); } ctx.restore();
    // big head on a neck stub
    ctx.save(); ctx.translate(hx, hy); ctx.scale(r, r);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#4fbf9f'; rr(ctx, -46, 10, 92, 76, 28); ctx.fill(); circle(ctx, 0, 0, 62, c || '#5e7fb8'); ctx.fillStyle = c || '#f4b740'; ctx.beginPath(); ctx.moveTo(52, -16); ctx.lineTo(108, 8); ctx.lineTo(50, 22); ctx.closePath(); ctx.fill(); }, 12);
    circle(ctx, 54, -18, 11, PAL.cream); circle(ctx, 18, -14, 21, PAL.orange); circle(ctx, 20, -14, 11, PAL.ink); circle(ctx, 24, -19, 4, PAL.white); ctx.restore();
    // viewfinder corners, dead steady
    const vk = pop(t, T('tripod', 'view') - 0.15);
    if (vk > 0.01) { ctx.save(); ctx.translate(540, 790); ctx.scale(vk, vk); ctx.strokeStyle = PAL.white; ctx.lineWidth = 16; ctx.lineCap = 'round'; const a = 400, b = 310, L = 90; [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([p, q]) => { ctx.beginPath(); ctx.moveTo(p * a, q * (b - L)); ctx.lineTo(p * a, q * b); ctx.lineTo(p * (a - L), q * b); ctx.stroke(); }); ctx.restore(); }
    big(ctx, 'HEAD STILL', 540, 300, 120, PAL.ink, pop(t, T('tripod', 'head') - 0.15, T('tripod', 'view') - 0.3));
    pill(ctx, 'STEADY VIEW', 540, 310, { k: pop(t, T('tripod', 'view') - 0.15), bg: PAL.teal, col: PAL.white, size: 74 });
    pill(ctx, 'WORLD SLIDES PAST', 540, 1590, { k: pop(t, T('tripod', 'world') - 0.15), size: 58 });
  };
  const chicken = (ctx, x, y, s, off, leg) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.strokeStyle = c || PAL.yellow; ctx.lineWidth = 14; ctx.lineCap = 'round'; [[-22, leg], [20, -leg]].forEach(([l, m]) => { ctx.beginPath(); ctx.moveTo(l, -70); ctx.lineTo(l + m * 30, -6); ctx.lineTo(l + m * 30 + 34, -6); ctx.stroke(); }); ctx.fillStyle = c || '#e8743b'; ctx.beginPath(); ctx.moveTo(-100, -240); ctx.lineTo(-170, -290); ctx.lineTo(-120, -130); ctx.closePath(); ctx.fill(); ctx.beginPath(); ctx.ellipse(-10, -140, 120, 82, -0.12, 0, Math.PI * 2); ctx.fill(); const hx = 90 + off, hy = -260; ctx.fillStyle = c || '#f2915a'; ctx.beginPath(); ctx.moveTo(30, -200); ctx.lineTo(hx - 36, hy); ctx.lineTo(hx + 36, hy); ctx.lineTo(100, -110); ctx.closePath(); ctx.fill(); circle(ctx, hx, hy, 46, c || '#f2915a'); ctx.fillStyle = c || PAL.red; ctx.beginPath(); ctx.arc(hx - 14, hy - 48, 18, 0, Math.PI * 2); ctx.arc(hx + 14, hy - 50, 18, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = c || PAL.yellow; ctx.beginPath(); ctx.moveTo(hx + 40, hy - 12); ctx.lineTo(hx + 86, hy + 4); ctx.lineTo(hx + 38, hy + 18); ctx.closePath(); ctx.fill(); if (!c) { circle(ctx, hx + 16, hy - 10, 11, PAL.ink); } }, 16); ctx.restore(); };
  const crane = (ctx, x, y, s, off, leg) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.strokeStyle = c || PAL.ink; ctx.lineWidth = 13; ctx.lineCap = 'round'; [[-16, leg], [18, -leg]].forEach(([l, m]) => { ctx.beginPath(); ctx.moveTo(l, -340); ctx.lineTo(l + m * 40, -6); ctx.lineTo(l + m * 40 + 40, -6); ctx.stroke(); }); ctx.fillStyle = c || '#eef3f9'; ctx.beginPath(); ctx.ellipse(-20, -400, 130, 76, -0.1, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = c || PAL.ink; ctx.beginPath(); ctx.moveTo(-90, -400); ctx.lineTo(-210, -340); ctx.lineTo(-60, -350); ctx.closePath(); ctx.fill(); const hx = 90 + off, hy = -690; ctx.strokeStyle = c || '#eef3f9'; ctx.lineWidth = 36; ctx.beginPath(); ctx.moveTo(70, -430); ctx.quadraticCurveTo(120, -560, hx, hy); ctx.stroke(); circle(ctx, hx, hy, 38, c || '#eef3f9'); ctx.fillStyle = c || PAL.red; ctx.beginPath(); ctx.arc(hx, hy - 26, 22, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = c || '#556'; ctx.beginPath(); ctx.moveTo(hx + 30, hy - 10); ctx.lineTo(hx + 108, hy + 6); ctx.lineTo(hx + 30, hy + 14); ctx.closePath(); ctx.fill(); if (!c) { circle(ctx, hx + 10, hy - 6, 8, PAL.ink); } }, 14); ctx.restore(); };
  S.others = (ctx, t) => {
    sky(ctx, '#bdf0a6', '#e9fbd0'); ground(ctx, 1450, '#62b84f', '#4fa33f');
    const k1 = EO(t, T('others', 'chickens') - 0.3, T('others', 'chickens')), k2 = EO(t, T('others', 'cranes') - 0.3, T('others', 'cranes'));
    crane(ctx, H.lerp(1250, 720, k2), 1490, 1.05, 55 * bob(t / 0.8), Math.sin(t * 8) * 0.8);
    chicken(ctx, H.lerp(-260, 270, k1), 1540, 1.25, 50 * bob(t / 0.6), Math.sin(t * 10.5));
    pill(ctx, 'CHICKENS', 270, 1090, { k: pop(t, T('others', 'chickens') - 0.1), bg: PAL.orange, col: PAL.white, size: 54 });
    pill(ctx, 'CRANES', 760, 600, { k: pop(t, T('others', 'cranes') - 0.1), bg: PAL.purple, col: PAL.white, size: 54 });
    big(ctx, 'THEY DO IT TOO', 540, 300, 100, PAL.ink, pop(t, T('others', 'do') - 0.15));
  };
  S.end = (ctx, t) => {
    sky(ctx, '#ffae70', '#ffe0a8'); city(ctx, 1320, 300, ['#c86f5a', '#df8a68']); ground(ctx, 1320, '#d8cdb9', '#c5b8a0');
    const c = t / 0.9, s = 1.4, x = 400, y = 1560, off = 120 * bob(c), hx = headX(x, s, off), hy = headY(y, s);
    pigeon(ctx, x, y, s, { off, leg: Math.sin(c * Math.PI * 2) });
    const wh = T('end', 'watch');
    crosshair(ctx, hx, hy, 150, PAL.red, pop(t, T('end', 'head') - 0.15));
    pill(ctx, 'NEXT TIME...', 540, 300, { k: pop(t, B.end.s - 0.1, wh - 0.25), size: 74 });
    pill(ctx, 'WATCH THE HEAD', 540, 300, { k: pop(t, wh - 0.15, T('end', 'is') - 0.2), bg: PAL.ink, col: PAL.cream, size: 68 });
    big(ctx, 'BOBBING?', 540, 320, 150, PAL.ink, pop(t, T('end', 'bobbing') - 0.15));
    big(ctx, 'OR STILL?', 540, 500, 150, PAL.red, pop(t, T('end', 'standing') - 0.1));
    pill(ctx, 'TELL ME IN THE COMMENTS', 540, 1630, { k: pop(t, T('end', 'still') + 0.1), bg: PAL.cream, size: 50 });
  };

  const CUTS = {}; BEATS.forEach((b, i) => { if (i) CUTS[b.id] = (BEATS[i - 1].e + b.s) / 2; });
  const ORDER = BEATS.map((b, i) => [b.id, i ? CUTS[b.id] : 0]);
  const WIPE = 0.46;
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
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.abs(n) * 3; } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  function scoreSound(k) {
    const D = DURATION;
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    const wipe = (t) => { k.play('whoosh', t - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); k.play('tock', t + 0.2, { f: 420, gain: 0.5 }); };
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 104, gain: 0.3, chords: [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['G3', 'B3', 'D4', 'F4']] });
    popAt(T('hook', 'never') - 0.15, 560, 0.9, 0, false); popAt(T('hook', 'bob') - 0.15, 680, 0.9, 0, false); k.play('stamp', T('hook', 'freeze'), { gain: 0.45 }); popAt(T('hook', 'midair') - 0.1, 800, 0.7);
    Object.keys(CUTS).forEach((c) => wipe(CUTS[c]));
    popAt(B.thrust.s - 0.1, 600, 0.7); k.play('whoosh', T('thrust', 'shoots') - 0.1, { dur: 0.25, gain: 0.7 }); k.play('tock', T('thrust', 'shoots') + 0.12, { f: 620, gain: 0.5 });
    popAt(T('thrust', 'two') - 0.1, 760, 0.8, 0, false); k.play('impact', T('thrust', 'thrust'), { gain: 0.7 });
    k.play('stamp', T('hold', 'stops'), { gain: 0.5 }); k.play('tock', T('hold', 'locked'), { f: 900, gain: 0.6 }); popAt(T('hold', 'body') - 0.1, 500, 0.6); k.play('ding', T('hold', 'hold'), { f: 'A5', gain: 0.35 });
    popAt(T('rate', 'forward') - 0.1, 700, 0.8, 0, false);
    for (let tt = T('rate', 'five'); tt < B.rate.e; tt += 1 / 6) k.play('tick', tt, { f: 3000, gain: 0.7, minor: true });
    k.play('ding', T('rate', 'second'), { f: 'E6', gain: 0.3 });
    k.play('riser', B.why.s, { dur: 0.7, gain: 0.35 }); popAt(T('why', 'why') - 0.1, 480, 0.9, 0, false);
    k.play('stamp', T('lab', 'nineteen'), { gain: 0.45 }); popAt(T('lab', 'canada') - 0.1, 640, 0.8, 0, false); popAt(T('lab', 'treadmill') - 0.1, 700, 0.7);
    k.noise(T('lab', 'treadmill'), { dur: 5.5, color: 'brown', filter: 'lowpass', f: [[0, 500], [5.5, 500]], gain: 0.09, a: 0.3 });
    popAt(T('lab', 'legs') - 0.05, 620, 0.7); popAt(T('lab', 'world') - 0.1, 820, 0.7); k.play('error', T('lab', 'stopped'), { f: 'A3', gain: 0.45 });
    popAt(T('sees', 'balance') - 0.15, 560, 0.8, 0, false); k.play('buzz', T('sees', 'balance') + 0.15, { f: 110, dur: 0.25, gain: 0.45 });
    k.play('sparkle', T('sees', 'its'), { n: 5, gain: 0.5 }); k.play('ding', T('sees', 'sees'), { f: 'C6', gain: 0.35 });
    popAt(T('tripod', 'head') - 0.1, 620, 0.7); k.play('tock', T('tripod', 'view'), { f: 800, gain: 0.5 }); k.play('tock', T('tripod', 'tripod'), { f: 500, gain: 0.5 }); k.play('swish', T('tripod', 'world') - 0.1, { gain: 0.6 });
    popAt(T('others', 'chickens') - 0.1, 620, 0.8, -0.4, false); popAt(T('others', 'cranes') - 0.1, 760, 0.8, 0.4, false); k.play('ding', T('others', 'too'), { f: 'G5', gain: 0.3 });
    popAt(B.end.s - 0.1, 560, 0.6); popAt(T('end', 'watch') - 0.1, 700, 0.7); popAt(T('end', 'bobbing') - 0.1, 620, 0.9, -0.3, false); popAt(T('end', 'standing') - 0.1, 760, 0.9, 0.3, false); k.play('success', T('end', 'still') + 0.15, { f: 'C6', gain: 0.4 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
