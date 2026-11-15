// ===== Kawaii Anime, vertical: "Why does mint make your mouth feel cold when it isn't?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'ブルブルガーンキラ';
  const TAU = Math.PI * 2;
  const C = {
    plum: '#5a3659', dark: '#3b2342',
    pink: '#ffbfd2', pinkS: '#f597b7', pinkD: '#ff6f9c',
    mint: '#bff0dc', mintS: '#86d6b9', mintD: '#3fb98e',
    butter: '#fff0a6', butterS: '#f5d06a', butterD: '#ffd84d',
    lav: '#ded2ff', lavS: '#b7a2f2', lavD: '#8f74e6',
    sky: '#c6e7ff', skyS: '#8cc6f2', skyD: '#5aa9ea',
    cream: '#fffaf4', creamS: '#e4d8f6',
    peach: '#ffe2cf', peachS: '#f2b996', brown: '#dca07a', brownS: '#b97b5a',
    red: '#ff6b8a', white: '#ffffff',
  };
  const TH = {
    pink: { base: '#ffe7ef', dot: '#ffd3e1', acc: '#fff3b0', kind: 'dots' },
    mint: { base: '#ddf6ec', dot: '#c4ecdb', acc: '#fff1a0', kind: 'stars' },
    lav: { base: '#efe8ff', dot: '#e0d4ff', acc: '#ffd0e0', kind: 'clouds' },
    butter: { base: '#fff6d8', dot: '#ffeab0', acc: '#ffc4d6', kind: 'hearts' },
  };
  const FONT = '"Fredoka"', KANA = '"Zen Maru Gothic"';
  const q15 = (t) => Math.floor(t * 15 + 1e-6) / 15; // anime "on twos" at 30 fps

  // ---------- paths ----------
  const scaleOf = (ctx) => { const m = ctx.getTransform(); return Math.hypot(m.a, m.b) || 1; };
  const rrP = (x, y, w, h, r) => { const p = new Path2D(); p.roundRect(x, y, w, h, r); return p; };
  const ellP = (x, y, rx, ry, rot = 0) => { const p = new Path2D(); p.ellipse(x, y, rx, ry, rot, 0, TAU); return p; };
  function roundPoly(pts, rad) {
    const p = new Path2D(), n = pts.length, mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const s = mid(pts[n - 1], pts[0]); p.moveTo(s[0], s[1]);
    for (let i = 0; i < n; i++) { const c = pts[i], m = mid(c, pts[(i + 1) % n]); p.arcTo(c[0], c[1], m[0], m[1], rad); }
    p.closePath(); return p;
  }
  const starPts = (cx, cy, R, r, n = 5, rot = -Math.PI / 2) => {
    const out = [];
    for (let i = 0; i < n * 2; i++) { const a = rot + i * Math.PI / n, rr = i % 2 ? r : R; out.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]); }
    return out;
  };
  const starP = (cx, cy, R, rot = -Math.PI / 2, ratio = 0.5, n = 5) => roundPoly(starPts(cx, cy, R, R * ratio, n, rot), R * 0.12);
  function heartP(cx, cy, s, rot = 0) {
    const p = new Path2D(), m = new DOMMatrix().translate(cx, cy).rotate(rot * 180 / Math.PI).scale(s, s), q = new Path2D();
    q.moveTo(0, 0.9);
    q.bezierCurveTo(-0.15, 0.75, -1, 0.3, -1, -0.25);
    q.bezierCurveTo(-1, -0.78, -0.35, -0.98, 0, -0.5);
    q.bezierCurveTo(0.35, -0.98, 1, -0.78, 1, -0.25);
    q.bezierCurveTo(1, 0.3, 0.15, 0.75, 0, 0.9);
    q.closePath(); p.addPath(q, m); return p;
  }
  function spark4P(cx, cy, R, rot = 0) {
    const p = new Path2D(), k = R * 0.16, pts = [[0, -R], [R, 0], [0, R], [-R, 0]], cs = [[k, -k], [k, k], [-k, k], [-k, -k]];
    const tr = ([x, y]) => [cx + x * Math.cos(rot) - y * Math.sin(rot), cy + x * Math.sin(rot) + y * Math.cos(rot)];
    const s0 = tr(pts[0]); p.moveTo(s0[0], s0[1]);
    for (let i = 0; i < 4; i++) { const c = tr(cs[i]), e = tr(pts[(i + 1) % 4]); p.quadraticCurveTo(c[0], c[1], e[0], e[1]); }
    p.closePath(); return p;
  }
  function cloudP(cx, cy, s) {
    const p = new Path2D();
    [[-70, 10, 42], [-30, -18, 52], [22, -26, 58], [70, 4, 44], [30, 22, 46], [-22, 24, 44]].forEach(([x, y, r]) => { p.moveTo(cx + (x + r) * s, cy + y * s); p.arc(cx + x * s, cy + y * s, r * s, 0, TAU); });
    return p;
  }

  // ---------- inking ----------
  function ol(ctx, p, w = 4.5, col = C.plum) { ctx.save(); ctx.lineWidth = (w * 1.3) / scaleOf(ctx); ctx.strokeStyle = col; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.stroke(p); ctx.restore(); }
  // flat fill + ONE cel-shadow tone (light from top-left: the base is shifted up-left inside the shape, shade remains bottom-right)
  function cel(ctx, p, base, shade, dx = -8, dy = -8, w = 4.5) {
    ctx.save(); ctx.fillStyle = shade; ctx.fill(p); ctx.clip(p); ctx.translate(dx, dy); ctx.fillStyle = base; ctx.fill(p); ctx.restore();
    if (w) ol(ctx, p, w);
  }
  // union outline: outline every sub-shape, then fill them all (interior seams vanish)
  function union(ctx, paths, fill, w = 4.5) {
    ctx.save(); ctx.lineWidth = (2 * w) / scaleOf(ctx); ctx.strokeStyle = C.plum; ctx.lineJoin = 'round';
    paths.forEach((p) => ctx.stroke(p)); ctx.fillStyle = fill; paths.forEach((p) => ctx.fill(p)); ctx.restore();
  }
  function shine(ctx, x, y, rx, ry, rot = -0.6, a = 0.95) { ctx.save(); ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill(ellP(x, y, rx, ry, rot)); ctx.restore(); }

  // ---------- motion grammar ----------
  // bouncy pop: 0 -> overshoot -> settle, with squash & stretch
  function pop(t, t0, k = 1) {
    const u = t - t0;
    if (u <= 0) return { s: 0, sx: 0, sy: 0, u };
    const s = 1 - Math.exp(-9 * u) * Math.cos(18 * u), q = Math.exp(-8 * u) * Math.sin(18 * u) * 0.28 * k;
    return { s, sx: s * (1 + q), sy: s * (1 - q), u };
  }
  const popOut = (t, t1, d = 0.2) => 1 - H.clamp((t - t1) / d);
  function squash(t, tl, amp = 0.22) { const u = t - tl; if (u < 0) return [1, 1]; const q = Math.exp(-7 * u) * Math.cos(16 * u) * amp; return [1 + q, 1 - q]; }
  const bob = (t, ph = 0, a = 8) => Math.sin(t * TAU * 0.85 + ph) * a;

  // ---------- lettering: bold rounded type, colored outline, soft drop shadow ----------
  function kText(ctx, str, x, y, size, o = {}) {
    ctx.save();
    ctx.font = `${o.weight || 700} ${size}px ${o.font || FONT}`; ctx.textAlign = o.align || 'center'; ctx.textBaseline = 'alphabetic';
    ctx.lineJoin = 'round'; ctx.miterLimit = 2;
    const lw = size * (o.lw || 0.24);
    if (o.outer) { ctx.strokeStyle = o.outer; ctx.lineWidth = lw + size * (o.ow || 0.13); ctx.strokeText(str, x, y); }
    if (o.shadow !== false) { ctx.shadowColor = o.shadow || 'rgba(90,54,89,0.32)'; ctx.shadowBlur = size * 0.12; ctx.shadowOffsetY = size * 0.07; }
    ctx.strokeStyle = o.line || C.pinkD; ctx.lineWidth = lw; ctx.strokeText(str, x, y);
    ctx.shadowColor = 'transparent'; ctx.fillStyle = o.fill || C.white; ctx.fillText(str, x, y);
    ctx.restore();
  }
  // per-letter bounce-in (each glyph pops on its own, anchored at the baseline)
  function kWord(ctx, str, cx, y, size, t, t0, stg, o = {}) {
    ctx.save(); ctx.font = `${o.weight || 700} ${size}px ${o.font || FONT}`;
    const ws = [...str].map((c) => ctx.measureText(c).width), tot = ws.reduce((a, b) => a + b, 0) + (o.track || 0) * (str.length - 1);
    ctx.restore();
    let x = o.align === 'left' ? cx : cx - tot / 2;
    const fills = o.fills;
    [...str].forEach((c, i) => {
      const w = ws[i]; const p = pop(t, t0 + i * stg, 1.3);
      if (c !== ' ' && p.s > 0) {
        const hop = p.u < 0.25 ? -Math.sin((p.u / 0.25) * Math.PI) * size * 0.18 : 0;
        ctx.save(); ctx.translate(x + w / 2, y + hop); ctx.rotate((o.wob || 0) * Math.sin(t * 6 + i * 1.3)); ctx.scale(Math.min(p.sx, p.s, 1), p.sy);
        kText(ctx, c, 0, 0, size, { ...o, fill: fills ? fills[i % fills.length] : o.fill });
        ctx.restore();
      }
      x += w + (o.track || 0);
    });
    return tot;
  }
  function kana(ctx, str, x, y, size, rot, s, fill) {
    if (s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    kText(ctx, str, 0, 0, size, { font: KANA, weight: 900, fill, line: C.white, outer: C.plum, lw: 0.22 });
    ctx.restore();
  }

  // ---------- anime face parts ----------
  function eye(ctx, x, y, rx, ry, iris, kind = 'normal', side = 1, look = [0, 0]) {
    ctx.save(); ctx.translate(x, y); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = C.dark;
    if (kind === 'happy' || kind === 'blink') {
      ctx.beginPath();
      if (kind === 'happy') { ctx.moveTo(-rx * 0.95, ry * 0.18); ctx.quadraticCurveTo(0, -ry * 0.85, rx * 0.95, ry * 0.18); }
      else { ctx.moveTo(-rx * 0.95, -ry * 0.05); ctx.quadraticCurveTo(0, ry * 0.45, rx * 0.95, -ry * 0.05); }
      ctx.lineWidth = rx * 0.32; ctx.stroke();
    } else if (kind === 'squeeze') {
      ctx.beginPath(); ctx.moveTo(-rx * 0.65 * side, -ry * 0.5); ctx.lineTo(rx * 0.6 * side, 0); ctx.lineTo(-rx * 0.65 * side, ry * 0.5);
      ctx.lineWidth = rx * 0.3; ctx.stroke();
    } else if (kind === 'swirl') {
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 5.2; a += 0.15) { const r = rx * 0.95 * a / (Math.PI * 5.2), px = Math.cos(a * side) * r, py = Math.sin(a * side) * r * ry / rx; a === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); }
      ctx.lineWidth = rx * 0.17; ctx.stroke();
    } else if (kind === 'star') {
      const p = starP(0, 0, rx * 1.2, -Math.PI / 2, 0.5);
      ctx.fillStyle = C.butterD; ctx.fill(p); ctx.lineWidth = rx * 0.15; ctx.stroke(p);
      shine(ctx, -rx * 0.22, -rx * 0.28, rx * 0.2, rx * 0.14, -0.5, 1);
    } else if (kind === 'shock') {
      ctx.fillStyle = C.white; ctx.fill(ellP(0, 0, rx * 0.78, ry * 0.82)); ctx.lineWidth = rx * 0.14; ctx.stroke(ellP(0, 0, rx * 0.78, ry * 0.82));
      ctx.fillStyle = C.dark; ctx.fill(ellP(look[0] * rx * 0.2, look[1] * ry * 0.2, rx * 0.17, ry * 0.17));
    } else {
      // glossy anime eye: dark lid shape, gradient iris, big pupil, two white highlight dots, top lash
      const lx = look[0] * rx * 0.16, ly = look[1] * ry * 0.12;
      ctx.fillStyle = C.dark; ctx.fill(ellP(0, 0, rx, ry));
      const g = ctx.createLinearGradient(0, -ry, 0, ry);
      g.addColorStop(0, C.dark); g.addColorStop(0.42, H.rgba(H.mix(iris, C.dark, 0.35))); g.addColorStop(1, H.rgba(H.mix(iris, '#ffffff', 0.45)));
      ctx.fillStyle = g; ctx.fill(ellP(lx, ly + ry * 0.06, rx * 0.8, ry * 0.82));
      ctx.fillStyle = '#28142c'; ctx.fill(ellP(lx, ly + ry * 0.02, rx * 0.42, ry * 0.44));
      ctx.fillStyle = H.rgba(H.mix(iris, '#ffffff', 0.65), 0.9); ctx.fill(ellP(lx, ly + ry * 0.6, rx * 0.46, ry * 0.16));
      ctx.fillStyle = C.white;
      ctx.fill(ellP(lx - rx * 0.3, ly - ry * 0.36, rx * 0.34, ry * 0.28));
      ctx.fill(ellP(lx + rx * 0.34, ly + ry * 0.3, rx * 0.14, ry * 0.12));
      ctx.beginPath(); ctx.ellipse(0, 0, rx * 1.06, ry * 1.04, 0, Math.PI * 1.13, Math.PI * 1.87); ctx.lineWidth = rx * 0.22; ctx.stroke();
    }
    ctx.restore();
  }
  function mouth(ctx, x, y, w, kind = 'smile') {
    ctx.save(); ctx.translate(x, y); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = C.dark; ctx.lineWidth = w * 0.26;
    const inner = '#b8456f';
    if (kind === 'w') { ctx.beginPath(); ctx.moveTo(-w, -w * 0.15); ctx.quadraticCurveTo(-w * 0.5, w * 0.75, 0, 0); ctx.quadraticCurveTo(w * 0.5, w * 0.75, w, -w * 0.15); ctx.stroke(); }
    else if (kind === 'flat') { ctx.beginPath(); ctx.moveTo(-w * 0.5, 0); ctx.lineTo(w * 0.5, 0); ctx.stroke(); }
    else if (kind === 'wobble') { ctx.beginPath(); ctx.moveTo(-w, 0); for (let i = 1; i <= 4; i++) ctx.quadraticCurveTo(-w + (i - 0.5) * w / 2, (i % 2 ? -1 : 1) * w * 0.4, -w + i * w / 2, 0); ctx.stroke(); }
    else if (kind === 'o' || kind === 'O') {
      const k = kind === 'O' ? 0.8 : 0.5, p = ellP(0, 0, w * k, w * k * 1.15);
      ctx.fillStyle = inner; ctx.fill(p); ctx.save(); ctx.clip(p); ctx.fillStyle = '#ff8fab'; ctx.fill(ellP(0, w * k * 0.9, w * k * 0.7, w * k * 0.5)); ctx.restore(); ctx.lineWidth = w * 0.22; ctx.stroke(p);
    } else { // open smile with tongue
      const p = new Path2D(); p.moveTo(-w, -w * 0.2); p.quadraticCurveTo(0, w * 1.7, w, -w * 0.2); p.closePath();
      ctx.fillStyle = inner; ctx.fill(p); ctx.save(); ctx.clip(p); ctx.fillStyle = '#ff8fab'; ctx.fill(ellP(0, w * 0.85, w * 0.6, w * 0.42)); ctx.restore(); ctx.lineWidth = w * 0.22; ctx.stroke(p);
    }
    ctx.restore();
  }
  function blush(ctx, x, y, rx, ry) {
    ctx.save(); ctx.fillStyle = 'rgba(255,135,170,0.55)'; ctx.fill(ellP(x, y, rx, ry));
    ctx.strokeStyle = 'rgba(255,95,145,0.85)'; ctx.lineWidth = rx * 0.13; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = -1; i <= 1; i++) { ctx.moveTo(x + i * rx * 0.45 - rx * 0.1, y + ry * 0.35); ctx.lineTo(x + i * rx * 0.45 + rx * 0.1, y - ry * 0.35); }
    ctx.stroke(); ctx.restore();
  }

  // ---------- characters (local units; (x,y) = head centre) ----------
  function rig(ctx, x, y, s, P, footY) {
    ctx.translate(x, y); ctx.scale(s, s);
    if (P.shadow !== false) { const k = 1 - Math.min(P.lift || 0, 140) / 280; ctx.fillStyle = 'rgba(90,54,89,0.13)'; ctx.fill(ellP(0, footY + 40, 115 * k, 17 * k)); }
    ctx.translate(0, -(P.lift || 0));
    const sq = P.sq || [1, 1]; ctx.translate(0, footY); ctx.rotate(P.tilt || 0); ctx.scale(sq[0], sq[1]); ctx.translate(0, -footY);
  }
  // the AI mascot: round robot, heart antenna, ear pods, candy-knob belly panel
  function bot(ctx, x, y, s, P = {}) {
    ctx.save(); rig(ctx, x, y, s, P, 200);
    // arms
    const arm = (side, a) => { ctx.save(); ctx.translate(side * 80, 108); ctx.rotate(-side * a); const p = ellP(side * 12, 30, 22, 32, -side * 0.25); cel(ctx, p, C.pink, C.pinkS, -5, -5); ctx.restore(); };
    const aL = P.armL || 0.15, aR = P.armR || 0.15;
    if (aL < 1.2) arm(-1, aL); if (aR < 1.2) arm(1, aR);
    // body + belly panel + knobs (the model's weights)
    cel(ctx, rrP(-86, 68, 172, 132, 56), C.pink, C.pinkS, -11, -11);
    shine(ctx, -58, 140, 9, 20, 0.2, 0.75);
    cel(ctx, rrP(-60, 104, 120, 66, 28), C.mint, C.mintS, -5, -5);
    const kc = [[C.butter, C.butterS], [C.sky, C.skyS], [C.lav, C.lavS]], ka = P.knobs || [-2.3, -0.5, -1.9];
    for (let i = 0; i < 3; i++) {
      const kx = -34 + i * 34, ky = 137;
      cel(ctx, ellP(kx, ky, 14, 14), kc[i][0], kc[i][1], -3, -3, 3.5);
      ctx.save(); ctx.strokeStyle = C.plum; ctx.lineCap = 'round'; ctx.lineWidth = 4.5; ctx.beginPath(); ctx.moveTo(kx, ky); ctx.lineTo(kx + Math.cos(ka[i]) * 10, ky + Math.sin(ka[i]) * 10); ctx.stroke(); ctx.restore();
    }
    // ear pods
    for (const sd of [-1, 1]) { cel(ctx, ellP(sd * 140, -4, 30, 34), C.pink, C.pinkS, -6, -6); ctx.fillStyle = C.pinkS; ctx.fill(ellP(sd * 146, -4, 11, 14)); }
    // antenna with heart bulb
    ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 15; ctx.beginPath(); ctx.moveTo(0, -98); ctx.quadraticCurveTo(4, -125, 0, -146); ctx.stroke();
    ctx.strokeStyle = C.lav; ctx.lineWidth = 6; ctx.stroke(); ctx.restore();
    if (P.glow) { const g = ctx.createRadialGradient(0, -166, 4, 0, -166, 70); g.addColorStop(0, `rgba(255,140,180,${0.6 * P.glow})`); g.addColorStop(1, 'rgba(255,140,180,0)'); ctx.fillStyle = g; ctx.fillRect(-80, -240, 160, 150); }
    const hs = 24 * (1 + 0.25 * (P.glow || 0));
    cel(ctx, heartP(0, -166, hs), P.glow > 0.3 ? C.pinkD : C.pink, C.pinkS, -4, -4, 4);
    shine(ctx, -9, -174, 5, 3.5, -0.6);
    // head
    cel(ctx, rrP(-138, -106, 276, 204, 98), C.cream, C.creamS, -13, -13);
    shine(ctx, -90, -64, 30, 13, -0.6); shine(ctx, -52, -86, 7, 7, 0);
    if (aL >= 1.2) arm(-1, aL); if (aR >= 1.2) arm(1, aR);
    // face
    const ek = P.eyes || 'normal', look = P.look || [0, 0];
    eye(ctx, -56, 2, 36, 48, '#8a6cf0', ek, 1, look); eye(ctx, 56, 2, 36, 48, '#8a6cf0', ek, -1, look);
    if (P.blush !== false) { blush(ctx, -98, 46, 24, 13); blush(ctx, 98, 46, 24, 13); }
    mouth(ctx, 0, 50, 15, P.mouth || 'smile');
    ctx.restore();
  }
  function cat(ctx, x, y, s, P = {}) {
    ctx.save(); rig(ctx, x, y, s, P, 182);
    if (!P.headOnly) {
      const wag = P.wag || 0;
      ctx.save(); ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(50, 150); ctx.bezierCurveTo(120, 160, 128 + wag * 18, 90, 100 + wag * 34, 48);
      ctx.strokeStyle = C.plum; ctx.lineWidth = 30; ctx.stroke(); ctx.strokeStyle = C.butter; ctx.lineWidth = 20; ctx.stroke(); ctx.restore();
      cel(ctx, ellP(0, 124, 72, 60), C.butter, C.butterS, -8, -8);
      for (const sd of [-1, 1]) cel(ctx, ellP(sd * 32, 174, 24, 15), C.butter, C.butterS, -3, -3);
    }
    for (const sd of [-1, 1]) {
      cel(ctx, roundPoly([[sd * 106, -26], [sd * 90, -130], [sd * 22, -86]], 16), C.butter, C.butterS, -5, -5);
      ctx.fillStyle = C.pink; ctx.fill(roundPoly([[sd * 88, -50], [sd * 81, -106], [sd * 45, -80]], 9));
    }
    cel(ctx, ellP(0, 0, 116, 96), C.butter, C.butterS, -12, -12);
    ctx.save(); ctx.strokeStyle = C.butterS; ctx.lineCap = 'round'; ctx.lineWidth = 8; ctx.beginPath();
    ctx.moveTo(0, -90); ctx.lineTo(0, -70); ctx.moveTo(-26, -86); ctx.lineTo(-21, -68); ctx.moveTo(26, -86); ctx.lineTo(21, -68); ctx.stroke(); ctx.restore();
    shine(ctx, -66, -46, 20, 9, -0.6);
    const ek = P.eyes || 'normal';
    eye(ctx, -44, 8, 28, 37, '#3fbf95', ek, 1, P.look || [0, 0]); eye(ctx, 44, 8, 28, 37, '#3fbf95', ek, -1, P.look || [0, 0]);
    blush(ctx, -78, 42, 18, 10); blush(ctx, 78, 42, 18, 10);
    ctx.fillStyle = C.pinkD; ctx.fill(roundPoly([[-7, 33], [7, 33], [0, 41]], 3));
    mouth(ctx, 0, 46, 11, P.mouth || 'w');
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 3.5; ctx.lineCap = 'round'; ctx.beginPath();
    for (const sd of [-1, 1]) { ctx.moveTo(sd * 100, 26); ctx.lineTo(sd * 134, 18); ctx.moveTo(sd * 100, 40); ctx.lineTo(sd * 136, 44); }
    ctx.stroke(); ctx.restore();
    ctx.restore();
  }
  function dog(ctx, x, y, s, P = {}) {
    ctx.save(); rig(ctx, x, y, s, P, 182);
    if (!P.headOnly) {
      const wag = P.wag || 0;
      ctx.save(); ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-52, 140); ctx.quadraticCurveTo(-100, 130, -108 - wag * 22, 84 + Math.abs(wag) * 6);
      ctx.strokeStyle = C.plum; ctx.lineWidth = 30; ctx.stroke(); ctx.strokeStyle = C.brown; ctx.lineWidth = 20; ctx.stroke(); ctx.restore();
      cel(ctx, ellP(0, 124, 72, 60), C.peach, C.peachS, -8, -8);
      for (const sd of [-1, 1]) cel(ctx, ellP(sd * 32, 174, 24, 15), C.peach, C.peachS, -3, -3);
    }
    const head = ellP(0, 0, 112, 98);
    cel(ctx, head, C.peach, C.peachS, -12, -12, 0);
    ctx.save(); ctx.clip(head); ctx.fillStyle = '#efbf9c'; ctx.fill(ellP(46, -8, 38, 34)); ctx.fillStyle = '#fff6ee'; ctx.fill(ellP(0, 42, 54, 36)); ctx.restore();
    ol(ctx, head);
    shine(ctx, -64, -52, 20, 9, -0.6);
    const ek = P.eyes || 'normal';
    eye(ctx, -44, -4, 27, 36, '#b06c42', ek, 1, P.look || [0, 0]); eye(ctx, 44, -4, 27, 36, '#b06c42', ek, -1, P.look || [0, 0]);
    blush(ctx, -76, 36, 17, 10); blush(ctx, 76, 36, 17, 10);
    ctx.fillStyle = C.dark; ctx.fill(ellP(0, 26, 17, 11)); shine(ctx, -5, 22, 5, 3, -0.3);
    ctx.save(); ctx.strokeStyle = C.dark; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 36); ctx.lineTo(0, 44); ctx.stroke(); ctx.restore();
    if (P.tongue !== false) { const tp = new Path2D(); tp.moveTo(-10, 50); tp.lineTo(10, 50); tp.quadraticCurveTo(10, 68, 0, 68); tp.quadraticCurveTo(-10, 68, -10, 50); ctx.fillStyle = '#ff8fab'; ctx.fill(tp); ol(ctx, tp, 3); }
    mouth(ctx, 0, 48, 13, 'w');
    for (const sd of [-1, 1]) cel(ctx, ellP(sd * 104, 2, 30, 62, sd * -0.38), C.brown, C.brownS, -5, -6);
    ctx.restore();
  }

  // ---------- props / emotes ----------
  function tag(ctx, x, y, label, fill, flip = 1, size = 28) {
    ctx.save(); ctx.translate(x, y); ctx.scale(flip, 1);
    ctx.font = `700 ${size}px ${FONT}`; const w = Math.max(ctx.measureText(label).width + size * 1.1, size * 1.6), h = size * 1.5;
    cel(ctx, rrP(-w / 2, -h / 2, w, h, h / 2), fill, H.rgba(H.mix(fill, C.plum, 0.15)), -3, -3, 3.5);
    ctx.fillStyle = C.plum; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, 0, 2);
    ctx.restore();
  }
  function card(ctx, x, y, s, kind, label, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); ctx.scale(s * (P.sx || 1), s * (P.sy || 1));
    cel(ctx, rrP(-82, -92, 164, 176, 26), '#fffdfb', '#eadcf2', -6, -6);
    const inner = rrP(-68, -78, 136, 126, 18);
    ctx.save(); ctx.clip(inner); ctx.fillStyle = kind === 'cat' ? '#dff0ff' : '#ffe6ef'; ctx.fillRect(-70, -80, 140, 130);
    ctx.fillStyle = kind === 'cat' ? '#cbe5fb' : '#ffd4e2';
    for (let j = 0; j < 5; j++) for (let i = 0; i < 6; i++) ctx.fill(ellP(-62 + i * 26 + (j % 2) * 13, -70 + j * 28, 4, 4));
    (kind === 'cat' ? cat : dog)(ctx, 0, 8, 0.52, { headOnly: true, shadow: false, eyes: P.eyes });
    ctx.restore(); ol(ctx, inner, 3.5);
    if (label) tag(ctx, 0, 92, label, P.tagFill || (kind === 'cat' ? C.butter : C.sky), P.flip == null ? 1 : P.flip, P.tagSize || 28);
    ctx.restore();
  }
  function bubble(ctx, x, y, w, h, tail, s = [1, 1], fill = C.white) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s[0], s[1]);
    const p = rrP(-w / 2, -h / 2, w, h, h * 0.46), tx = tail[0] - x, ty = tail[1] - y;
    const bx = H.clamp(tx * 0.45, -w / 2 + 34, w / 2 - 34), tp = new Path2D();
    tp.moveTo(bx - 24, h / 2 - 8); tp.quadraticCurveTo(bx - 6, (h / 2 + ty) / 2 + 4, tx, ty); tp.quadraticCurveTo(bx + 4, (h / 2 + ty) / 2 - 6, bx + 22, h / 2 - 8); tp.closePath();
    union(ctx, [p, tp], fill);
    ctx.restore();
  }
  function thought(ctx, x, y, s, tail, dots, tq) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    union(ctx, [cloudP(0, 0, 1.05)], C.white);
    const [tx, ty] = [(tail[0] - x) / s, (tail[1] - y) / s];
    union(ctx, [ellP(tx * 0.55, ty * 0.55 + 20, 16, 14)], C.white); union(ctx, [ellP(tx * 0.85, ty * 0.85, 10, 9)], C.white);
    for (let i = 0; i < dots; i++) { ctx.fillStyle = C.plum; ctx.fill(ellP(-34 + i * 34, 4 + Math.sin(tq * 8 + i) * 3, 9, 9)); }
    ctx.restore();
  }
  function sweat(ctx, x, y, s, rot = 0.25) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(0, -30); p.bezierCurveTo(8, -12, 20, 2, 20, 14); p.arc(0, 14, 20, 0, Math.PI); p.bezierCurveTo(-20, 2, -8, -12, 0, -30); p.closePath();
    cel(ctx, p, C.sky, C.skyS, -4, -4, 4); shine(ctx, -6, 12, 4, 7, 0.3);
    ctx.restore();
  }
  function vein(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.strokeStyle = C.red; ctx.lineCap = 'round'; ctx.lineWidth = 7;
    for (let i = 0; i < 4; i++) { ctx.save(); ctx.rotate(i * Math.PI / 2 + Math.PI / 4); ctx.beginPath(); ctx.moveTo(-14, -6); ctx.quadraticCurveTo(-6, -6, -6, -14); ctx.translate(0, 0); ctx.stroke(); ctx.restore(); }
    ctx.restore();
  }
  function sparkle(ctx, x, y, R, fill = C.white, rot = 0, w = 3.5) { const p = spark4P(x, y, R, rot); ctx.fillStyle = fill; ctx.fill(p); if (w) ol(ctx, p, w); }
  function heart(ctx, x, y, s, fill = C.pinkD, rot = 0) { cel(ctx, heartP(x, y, s, rot), fill, H.rgba(H.mix(fill, C.plum, 0.25)), -s * 0.12, -s * 0.12, 3.5); shine(ctx, x - s * 0.45, y - s * 0.35, s * 0.18, s * 0.12, -0.6); }
  function impactLines(ctx, x, y, r0, t, t0, n = 8, col = C.plum) {
    const u = (t - t0) / 0.3; if (u < 0 || u > 1) return;
    ctx.save(); ctx.strokeStyle = col; ctx.lineCap = 'round'; ctx.lineWidth = 6; ctx.globalAlpha = 1 - u * 0.6; ctx.beginPath();
    for (let i = 0; i < n; i++) { const a = i / n * TAU + 0.3, a0 = r0 + u * 30, a1 = r0 + 24 + u * 46; ctx.moveTo(x + Math.cos(a) * a0, y + Math.sin(a) * a0); ctx.lineTo(x + Math.cos(a) * a1, y + Math.sin(a) * a1); }
    ctx.stroke(); ctx.restore();
  }
  function confetti(ctx, t, t0, x, y, n, seed, spread = 1) {
    const tau = t - t0; if (tau < 0 || tau > 2.4) return;
    const r = H.rng(seed), cols = [C.pinkD, C.mintD, C.butterD, C.skyD, C.lavD, C.pink];
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + (r() - 0.5) * 2.6 * spread, v = r.range(380, 820), rs = r.range(-8, 8), c = cols[i % cols.length], kind = i % 4, sz = r.range(9, 15);
      const px = x + Math.cos(a) * v * tau * 0.8, py = y + Math.sin(a) * v * tau * 0.8 + 520 * tau * tau;
      if (py > 1900) continue;
      ctx.save(); ctx.translate(px, py); ctx.rotate(rs * tau); ctx.scale(1, Math.cos(tau * 9 + i));
      if (kind === 0) { ctx.fillStyle = c; ctx.fill(rrP(-sz * 0.6, -sz * 0.35, sz * 1.2, sz * 0.7, 3)); }
      else if (kind === 1) { ctx.fillStyle = c; ctx.fill(ellP(0, 0, sz * 0.45, sz * 0.45)); }
      else if (kind === 2) { ctx.fillStyle = c; ctx.fill(starP(0, 0, sz * 0.7)); }
      else { ctx.fillStyle = c; ctx.fill(heartP(0, 0, sz * 0.5)); }
      ctx.restore();
    }
  }
  // dotted connector that draws on, chunky rounded arrowhead at the tip
  const bez = (p0, p1, p2, p3, n = 60) => Array.from({ length: n + 1 }, (_, i) => { const u = i / n, v = 1 - u; return [v * v * v * p0[0] + 3 * v * v * u * p1[0] + 3 * v * u * u * p2[0] + u * u * u * p3[0], v * v * v * p0[1] + 3 * v * v * u * p1[1] + 3 * v * u * u * p2[1] + u * u * u * p3[1]]; });
  const arcPts = (cx, cy, r, a0, a1, n = 50) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * i / n; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; });
  function along(pts, d) {
    let acc = 0;
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); if (acc + l >= d) { const u = (d - acc) / l; return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * u, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * u, Math.atan2(pts[i][1] - pts[i - 1][1], pts[i][0] - pts[i - 1][0])]; } acc += l; }
    const a = pts[pts.length - 1], b = pts[pts.length - 2]; return [a[0], a[1], Math.atan2(a[1] - b[1], a[0] - b[0])];
  }
  const plen = (pts) => pts.reduce((s, p, i) => (i ? s + Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]) : 0), 0);
  function dotted(ctx, pts, prog, col, r = 6, gap = 22, head = 1) {
    if (prog <= 0) return;
    const L = plen(pts) * prog;
    for (let d = 0; d < L - (head ? 16 : 0); d += gap) { const [x, y] = along(pts, d); ctx.fillStyle = col; ctx.fill(ellP(x, y, r, r)); }
    if (head) {
      const [x, y, a] = along(pts, L), s = 20 * head;
      ctx.save(); ctx.translate(x, y); ctx.rotate(a);
      const p = roundPoly([[s * 0.9, 0], [-s * 0.6, -s * 0.85], [-s * 0.6, s * 0.85]], s * 0.25);
      cel(ctx, p, col, H.rgba(H.mix(col, C.plum, 0.25)), -2, -2, 4); ctx.restore();
    }
  }

  // ---------- backgrounds: soft pastel with simple patterns ----------
  function bg(ctx, W, H_, t, th, seed = 1) {
    ctx.fillStyle = th.base; ctx.fillRect(0, 0, W, H_);
    const r = H.rng(seed);
    // big soft clouds (no outline) drifting
    ctx.save(); ctx.globalAlpha = th.kind === 'clouds' ? 0.95 : 0.7; ctx.fillStyle = C.white;
    const nc = th.kind === 'clouds' ? 6 : 3;
    for (let i = 0; i < nc; i++) { const s = r.range(0.9, 1.6), x = ((r.range(0, W + 300) + t * r.range(8, 16)) % (W + 300)) - 150, y = r.range(60, H_ - 40); ctx.fill(cloudP(x, y, s)); }
    ctx.restore();
    const sx = 66, sy = 48, ox = (t * 12) % (sx * 2), oy = (t * 7) % (sy * 2);
    for (let j = -2; j < H_ / sy + 2; j++) for (let i = -2; i < W / sx + 2; i++) {
      const x = i * sx + (j & 1 ? sx / 2 : 0) + ox, y = j * sy + oy;
      if ((j & 1) && th.kind !== 'dots' && th.kind !== 'clouds') {
        ctx.fillStyle = th.acc;
        if (th.kind === 'stars') ctx.fill(starP(x, y, 10, -Math.PI / 2 + (i + j) * 0.3));
        else ctx.fill(heartP(x, y, 9));
      } else { ctx.fillStyle = th.dot; ctx.fill(ellP(x, y, 8, 8)); }
    }
  }
  function twinkles(ctx, W, H_, t, seed, n = 9, avoid) {
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) {
      const x = r.range(40, W - 40), y = r.range(40, H_ - 40), R = r.range(9, 18), ph = r() * TAU, sp = r.range(2.5, 4.5);
      if (avoid && avoid(x, y)) continue;
      const k = Math.max(0, Math.sin(t * sp + ph)); if (k < 0.1) continue;
      sparkle(ctx, x, y, R * (0.4 + 0.6 * k), i % 3 ? C.white : C.butter, 0, 0);
    }
  }
  // star / heart iris wipe with a thick candy rim
  function wipe(ctx, W, H_, u, shape, cx, cy, drawB) {
    const e = u * u * (3 - 2 * u), rot = -Math.PI / 2 + u * 0.9;
    const p = shape === 'heart' ? heartP(cx, cy, 1900 * e * e + 4, 0) : starP(cx, cy, 1800 * e * e + 4, rot, 0.52);
    ctx.save(); ctx.clip(p); drawB(); ctx.restore();
    ctx.save(); ctx.lineJoin = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.stroke(p); ctx.strokeStyle = shape === 'heart' ? C.pink : C.butter; ctx.lineWidth = 24; ctx.stroke(p);
    ctx.strokeStyle = C.white; ctx.lineWidth = 6; ctx.globalAlpha = 0.8; ctx.stroke(p); ctx.restore();
  }

  const W = 1080, HH = 1920;
  const P_ = [{"s": 0.25, "e": 3.3, "text": "Mint never cools your mouth, not even one degree.", "words": [["mint", 0.25], ["never", 0.56], ["cools", 0.95], ["your", 1.35], ["mouth", 1.66], ["not", 2.05], ["even", 2.28], ["one", 2.6], ["degree", 2.83]]}, {"s": 3.66, "e": 5.36, "text": "So why does it feel freezing?", "words": [["so", 3.66], ["why", 3.81], ["does", 4.03], ["it", 4.33], ["feel", 4.47], ["freezing", 4.77]]}, {"s": 5.84, "e": 8.14, "text": "It's a trick, and your brain falls for it.", "words": [["its", 5.84], ["a", 6.06], ["trick", 6.14], ["and", 6.51], ["your", 6.73], ["brain", 7.03], ["falls", 7.4], ["for", 7.77], ["it", 7.99]]}, {"s": 8.55, "e": 11.24, "text": "Your mouth is packed with tiny cold alarms.", "words": [["your", 8.55], ["mouth", 8.86], ["is", 9.24], ["packed", 9.39], ["with", 9.85], ["tiny", 10.16], ["cold", 10.47], ["alarms", 10.78]]}, {"s": 11.7, "e": 13.74, "text": "At body temperature they stay quiet,", "words": [["at", 11.7], ["body", 11.83], ["temperature", 12.1], ["they", 12.85], ["stay", 13.12], ["quiet", 13.4]]}, {"s": 14.28, "e": 18.27, "text": "and they only start ringing below about twenty-six degrees Celsius.", "words": [["and", 14.28], ["they", 14.49], ["only", 14.78], ["start", 15.06], ["ringing", 15.42], ["below", 15.92], ["about", 16.27], ["twentysix", 16.63], ["degrees", 17.27], ["celsius", 17.77]]}, {"s": 18.75, "e": 20.85, "text": "That's around seventy-nine Fahrenheit.", "words": [["thats", 18.75], ["around", 19.07], ["seventynine", 19.47], ["fahrenheit", 20.19]]}, {"s": 21.21, "e": 23.7, "text": "But mint carries a molecule called menthol,", "words": [["but", 21.21], ["mint", 21.42], ["carries", 21.69], ["a", 22.18], ["molecule", 22.25], ["called", 22.8], ["menthol", 23.21]]}, {"s": 24.19, "e": 26.07, "text": "and it fits that alarm like a key.", "words": [["and", 24.19], ["it", 24.41], ["fits", 24.55], ["that", 24.84], ["alarm", 25.13], ["like", 25.49], ["a", 25.78], ["key", 25.85]]}, {"s": 26.45, "e": 29.6, "text": "Now the alarm rings at a cozy thirty-seven degrees,", "words": [["now", 26.45], ["the", 26.68], ["alarm", 26.91], ["rings", 27.3], ["at", 27.68], ["a", 27.84], ["cozy", 27.91], ["thirtyseven", 28.22], ["degrees", 29.07]]}, {"s": 29.82, "e": 32.0, "text": "and shouts to your brain: freezing!", "words": [["and", 29.82], ["shouts", 30.06], ["to", 30.52], ["your", 30.68], ["brain", 30.99], ["freezing", 31.38]]}, {"s": 32.35, "e": 34.62, "text": "Yet your mouth hasn't cooled down one bit.", "words": [["yet", 32.35], ["your", 32.55], ["mouth", 32.83], ["hasnt", 33.17], ["cooled", 33.52], ["down", 33.93], ["one", 34.21], ["bit", 34.41]]}, {"s": 35.07, "e": 37.68, "text": "That's why a sip of water after mint gum", "words": [["thats", 35.07], ["why", 35.49], ["a", 35.74], ["sip", 35.83], ["of", 36.08], ["water", 36.25], ["after", 36.67], ["mint", 37.09], ["gum", 37.42]]}, {"s": 37.97, "e": 39.97, "text": "feels like you just drank a glacier.", "words": [["feels", 37.97], ["like", 38.31], ["you", 38.59], ["just", 38.79], ["drank", 39.07], ["a", 39.41], ["glacier", 39.48]]}, {"s": 40.4, "e": 42.08, "text": "The alarms are already primed,", "words": [["the", 40.4], ["alarms", 40.6], ["are", 41.0], ["already", 41.2], ["primed", 41.67]]}, {"s": 42.48, "e": 44.65, "text": "so even cool water feels icy.", "words": [["so", 42.48], ["even", 42.66], ["cool", 43.04], ["water", 43.42], ["feels", 43.89], ["icy", 44.37]]}, {"s": 45.04, "e": 47.59, "text": "And honestly, it's the same trick chili plays,", "words": [["and", 45.04], ["honestly", 45.25], ["its", 45.82], ["the", 46.03], ["same", 46.24], ["trick", 46.53], ["chili", 46.88], ["plays", 47.24]]}, {"s": 48.0, "e": 49.92, "text": "just on the heat alarm instead.", "words": [["just", 48.0], ["on", 48.31], ["the", 48.46], ["heat", 48.69], ["alarm", 49.0], ["instead", 49.38]]}, {"s": 50.26, "e": 53.15, "text": "Be honest, did you think mint was actually cold?", "words": [["be", 50.26], ["honest", 50.41], ["did", 50.87], ["you", 51.1], ["think", 51.33], ["mint", 51.71], ["was", 52.01], ["actually", 52.24], ["cold", 52.85]]}];
  function chili(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); const sq = P.sq || [1, 1]; ctx.scale(s * sq[0], s * sq[1]);
    const b = new Path2D(); b.moveTo(-96, -86); b.bezierCurveTo(-130, 40, -70, 170, 70, 268); b.bezierCurveTo(84, 276, 92, 262, 84, 250); b.bezierCurveTo(50, 170, 120, 60, 96, -86); b.bezierCurveTo(60, -130, -60, -130, -96, -86); b.closePath();
    cel(ctx, b, '#ff5b6e', '#e23a58', -12, -10, 6);
    shine(ctx, -62, -40, 11, 34, 0.1, 0.8);
    const cap = roundPoly([[-92, -86], [-54, -128], [0, -112], [54, -128], [92, -86], [40, -74], [0, -60], [-40, -74]], 14);
    cel(ctx, cap, C.mintD, '#2c946f', -4, -4, 6);
    ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 30; ctx.beginPath(); ctx.moveTo(0, -112); ctx.quadraticCurveTo(10, -160, 42, -176); ctx.stroke(); ctx.strokeStyle = C.mintD; ctx.lineWidth = 18; ctx.stroke(); ctx.restore();
    const e = P.eyes || 'normal';
    eye(ctx, -40, 0, 27, 36, '#7a3cc0', e, 1, P.look || [0, 0]); eye(ctx, 40, 0, 27, 36, '#7a3cc0', e, -1, P.look || [0, 0]);
    blush(ctx, -68, 38, 16, 9); blush(ctx, 66, 38, 16, 9);
    mouth(ctx, 0, 48, 13, P.mouth || 'smile');
    ctx.restore();
  }
  // a heat alarm: a little bell with a face
  function alarm(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const ring = P.ring || 0; ctx.rotate(ring * Math.sin(P.t * 34) * 0.2);
    const fill = P.fire ? '#ff8d80' : P.cold ? '#bfe6ff' : C.butter, shade = P.fire ? '#ef5c6c' : P.cold ? C.skyS : C.butterS;
    cel(ctx, ellP(0, 112, 26, 20), C.pinkD, C.red, -3, -3, 5);
    const b = new Path2D(); b.moveTo(-104, 104); b.bezierCurveTo(-74, 70, -88, -92, 0, -96); b.bezierCurveTo(88, -92, 74, 70, 104, 104); b.quadraticCurveTo(0, 126, -104, 104); b.closePath();
    cel(ctx, b, fill, shade, -9, -8, 6);
    cel(ctx, ellP(0, -106, 18, 15), fill, shade, -2, -2, 5);
    shine(ctx, -44, -46, 8, 22, 0.25, 0.85);
    const e = P.eyes || 'normal';
    eye(ctx, -32, 2, 23, 30, '#8a6cf0', e, 1, P.look || [0, 0]); eye(ctx, 32, 2, 23, 30, '#8a6cf0', e, -1, P.look || [0, 0]);
    blush(ctx, -56, 36, 13, 8); blush(ctx, 56, 36, 13, 8);
    mouth(ctx, 0, 54, 11, P.mouth || 'w');
    ctx.restore();
    if (ring > 0.05) { const q = (Math.floor(P.t * 7.5) % 2) * 14; ctx.save(); ctx.strokeStyle = P.cold ? C.skyD : C.red; ctx.lineCap = 'round'; ctx.lineWidth = 9 * s + 2; for (const sd of [-1, 1]) for (const r of [150, 190]) { ctx.beginPath(); ctx.arc(x, y - 6 * s, (r + q) * s, sd > 0 ? -0.55 : Math.PI - 0.55, sd > 0 ? 0.55 : Math.PI + 0.55); ctx.stroke(); } ctx.restore(); }
  }
  // capsaicin drawn as a friendly key
  function capKey(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); ctx.scale(s, s);
    union(ctx, [rrP(70, -19, 230, 38, 14), rrP(244, 10, 26, 50, 8), rrP(196, 10, 26, 36, 8)], '#ff9a5c', 6);
    cel(ctx, ellP(0, 0, 104, 96), '#ff9a5c', '#ee7238', -9, -9, 6);
    shine(ctx, -56, -46, 18, 9, -0.6);
    const e = P.eyes || 'normal';
    eye(ctx, -32, -4, 24, 31, '#a0482a', e, 1, P.look || [0, 0]); eye(ctx, 32, -4, 24, 31, '#a0482a', e, -1, P.look || [0, 0]);
    blush(ctx, -58, 34, 13, 8); blush(ctx, 58, 34, 13, 8);
    mouth(ctx, 0, 44, 11, P.mouth || 'w');
    ctx.restore();
  }
  function brain(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); const sq = P.sq || [1, 1]; ctx.scale(s * sq[0], s * sq[1]);
    const ps = [[-96, -30, 72], [-40, -78, 74], [38, -80, 74], [98, -28, 72], [66, 40, 74], [-62, 42, 74], [0, 10, 100]].map(([a, b, r]) => ellP(a, b, r, r * 0.92));
    union(ctx, ps, C.pink, 6);
    ctx.save(); ctx.strokeStyle = C.pinkS; ctx.lineWidth = 8; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(0, -130); ctx.quadraticCurveTo(-18, -100, 0, -74); ctx.moveTo(-118, -60); ctx.quadraticCurveTo(-90, -48, -78, -76); ctx.moveTo(118, -60); ctx.quadraticCurveTo(90, -48, 78, -76); ctx.stroke(); ctx.restore();
    const e = P.eyes || 'normal';
    eye(ctx, -40, 8, 27, 35, '#8a6cf0', e, 1); eye(ctx, 40, 8, 27, 35, '#8a6cf0', e, -1);
    blush(ctx, -74, 42, 15, 9); blush(ctx, 74, 42, 15, 9);
    mouth(ctx, 0, 56, 14, P.mouth || 'O');
    ctx.restore();
  }
  function kid(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-104, 150, 208, 170, 70), C.sky, C.skyS, -8, -8, 6);
    union(ctx, [ellP(-136, 0, 26, 32), ellP(136, 0, 26, 32)], C.peach, 6);
    cel(ctx, ellP(0, 10, 150, 150), C.peach, C.peachS, -12, -12, 6);
    const hair = new Path2D(); hair.moveTo(-154, 14); hair.bezierCurveTo(-170, -190, 170, -190, 154, 14); hair.quadraticCurveTo(110, -60, 40, -66); hair.quadraticCurveTo(30, -30, -10, -66); hair.quadraticCurveTo(-90, -70, -154, 14); hair.closePath();
    cel(ctx, hair, C.lavD, '#6d55c4', -7, -7, 6);
    const e = P.eyes || 'normal';
    eye(ctx, -56, 22, 34, 44, '#3f8fd0', e, 1); eye(ctx, 56, 22, 34, 44, '#3f8fd0', e, -1);
    blush(ctx, -96, 72, 22, 12); blush(ctx, 96, 72, 22, 12);
    mouth(ctx, 0, 90, 18, P.mouth || 'wobble');
    ctx.restore();
  }
  function thermo(ctx, x, y, s, frac, col) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    union(ctx, [rrP(-36, -420, 72, 440, 36), ellP(0, 40, 66, 66)], C.white, 6);
    const lv = H.clamp(frac) * 400;
    ctx.fillStyle = col; ctx.fill(ellP(0, 40, 50, 50)); ctx.fill(rrP(-20, 10 - lv, 40, lv + 20, 18));
    shine(ctx, -20, 22, 8, 14, 0.4, 0.8);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath(); for (let i = 1; i <= 6; i++) { const yy = 10 - i * 60; ctx.moveTo(14, yy); ctx.lineTo(32, yy); } ctx.stroke(); ctx.restore();
    ctx.restore();
  }
  function flame(ctx, x, y, s, t, ph = 0) {
    const q = 1 + 0.12 * Math.sin(t * 15 + ph), sway = 0.12 * Math.sin(t * 11 + ph * 2);
    ctx.save(); ctx.translate(x, y); ctx.rotate(sway); ctx.scale(s, s * q);
    const f = (k) => { const p = new Path2D(); p.moveTo(0, -130 * k); p.bezierCurveTo(30 * k, -70 * k, 78 * k, -30 * k, 66 * k, 22 * k); p.arc(0, 22 * k, 66 * k, 0, Math.PI); p.bezierCurveTo(-78 * k, -30 * k, -30 * k, -70 * k, 0, -130 * k); p.closePath(); return p; };
    cel(ctx, f(1), '#ff8c4d', C.red, -6, -6, 6); ctx.fillStyle = C.butterD; ctx.fill(f(0.55));
    ctx.restore();
  }
  function fridge(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-340, -440, 680, 900, 60), C.cream, C.creamS, -12, -12, 7);
    cel(ctx, rrP(-300, -400, 600, 820, 36), '#e6f5ff', C.sky, -8, -8, 5);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 8; ctx.lineCap = 'round'; for (const yy of [-110, 270]) { ctx.beginPath(); ctx.moveTo(-296, yy); ctx.lineTo(296, yy); ctx.stroke(); } ctx.restore();
    ctx.restore();
  }
  function snow(ctx, x, y, R) { ctx.save(); ctx.translate(x, y); ctx.strokeStyle = C.skyD; ctx.lineCap = 'round'; ctx.lineWidth = R * 0.18; for (let i = 0; i < 3; i++) { ctx.rotate(Math.PI / 3); ctx.beginPath(); ctx.moveTo(-R, 0); ctx.lineTo(R, 0); ctx.stroke(); } ctx.restore(); }
  function tongue(ctx, cx, top) {
    const p = new Path2D(); p.moveTo(cx - 470, HH + 40); p.lineTo(cx - 470, top + 300); p.bezierCurveTo(cx - 470, top - 40, cx + 470, top - 40, cx + 470, top + 300); p.lineTo(cx + 470, HH + 40); p.closePath();
    cel(ctx, p, '#ff9db8', '#f277a0', -14, -14, 7);
    ctx.save(); ctx.clip(p); ctx.strokeStyle = '#ef6f99'; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(cx, top + 130); ctx.lineTo(cx, HH); ctx.stroke();
    const r = H.rng(5); ctx.fillStyle = '#ffc0d2'; for (let i = 0; i < 70; i++) ctx.fill(ellP(r.range(cx - 450, cx + 450), r.range(top + 60, HH), 13, 10)); ctx.restore();
  }

  // ---------- timing ----------
  const BEATS = [
    { id: 'hook', s: P_[0].s, e: P_[1].e }, { id: 'trick', s: P_[2].s, e: P_[2].e }, { id: 'mouth', s: P_[3].s, e: P_[4].e },
    { id: 'thermo', s: P_[5].s, e: P_[6].e }, { id: 'key', s: P_[7].s, e: P_[8].e }, { id: 'shout', s: P_[9].s, e: P_[10].e },
    { id: 'nochange', s: P_[11].s, e: P_[11].e }, { id: 'water', s: P_[12].s, e: P_[13].e }, { id: 'primed', s: P_[14].s, e: P_[15].e },
    { id: 'chili', s: P_[16].s, e: P_[17].e }, { id: 'end', s: P_[18].s, e: P_[18].e },
  ];
  const w = (i, word) => { const f = P_[i].words.find((x) => x[0] === word); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  const CUTS = BEATS.slice(1).map((b, i) => ({ t: (BEATS[i].e + b.s) / 2, shape: i % 3 === 2 ? 'heart' : 'star' }));
  const CUTW = 0.5;
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.05, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = C.butter) => { const p = pop(t, t0); if (p.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  function bgV(ctx, t, th, seed) { ctx.save(); ctx.scale(1.5, 1.5); bg(ctx, W / 1.5, HH / 1.5, t, th, seed); ctx.restore(); }
  const ICE = { base: '#dcf1ff', dot: '#c4e6ff', acc: '#ffffff', kind: 'stars' };
  const numPop = (ctx, str, x, y, size, t, t0, o = {}) => { const n = pop(t, t0, 1.3); if (n.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(n.sx, n.sy); kText(ctx, str, 0, 0, size, { fill: o.fill || C.white, line: o.line || C.skyD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); };

  // ---------- original cast ----------
  // Minty: a mint leaf with a face
  function mintLeaf(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); const sq = P.sq || [1, 1]; ctx.scale(s * sq[0], s * sq[1]);
    // stem
    ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 30; ctx.beginPath(); ctx.moveTo(0, 190); ctx.quadraticCurveTo(-10, 250, 20, 290); ctx.stroke(); ctx.strokeStyle = C.mintD; ctx.lineWidth = 18; ctx.stroke(); ctx.restore();
    const b = new Path2D(); b.moveTo(0, -230); b.bezierCurveTo(150, -170, 200, -20, 160, 80); b.bezierCurveTo(130, 160, 50, 200, 0, 200); b.bezierCurveTo(-50, 200, -130, 160, -160, 80); b.bezierCurveTo(-200, -20, -150, -170, 0, -230); b.closePath();
    cel(ctx, b, '#7fe0b4', '#3fb98e', -12, -10, 6);
    // serrated edge hints + veins
    ctx.save(); ctx.clip(b); ctx.strokeStyle = '#4fc79c'; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, -200); ctx.lineTo(0, -120);
    for (const sd of [-1, 1]) { ctx.moveTo(0, -150); ctx.quadraticCurveTo(sd * 60, -170, sd * 110, -150); ctx.moveTo(0, 140); ctx.quadraticCurveTo(sd * 70, 130, sd * 120, 90); }
    ctx.stroke(); ctx.restore();
    shine(ctx, -90, -90, 14, 40, 0.3, 0.8);
    const e = P.eyes || 'normal';
    eye(ctx, -50, 0, 30, 40, '#2f8f6a', e, 1, P.look || [0, 0]); eye(ctx, 50, 0, 30, 40, P.wink ? '#2f8f6a' : '#2f8f6a', P.wink ? 'happy' : e, -1, P.look || [0, 0]);
    blush(ctx, -88, 44, 18, 10); blush(ctx, 88, 44, 18, 10);
    mouth(ctx, 0, 56, 14, P.mouth || 'smile');
    ctx.restore();
  }
  // menthol drawn as a frosty green key
  function mKey(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); ctx.scale(s, s);
    union(ctx, [rrP(70, -19, 230, 38, 14), rrP(244, 10, 26, 50, 8), rrP(196, 10, 26, 36, 8)], '#9ff0cf', 6);
    cel(ctx, ellP(0, 0, 104, 96), '#9ff0cf', C.mintS, -9, -9, 6);
    snow(ctx, 0, -70, 0); shine(ctx, -56, -46, 18, 9, -0.6);
    const e = P.eyes || 'normal';
    eye(ctx, -32, -4, 24, 31, '#2f8f6a', e, 1, P.look || [0, 0]); eye(ctx, 32, -4, 24, 31, '#2f8f6a', e, -1, P.look || [0, 0]);
    blush(ctx, -58, 34, 13, 8); blush(ctx, 58, 34, 13, 8);
    mouth(ctx, 0, 44, 11, P.mouth || 'w');
    ctx.restore();
  }
  function iceCube(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); ctx.scale(s, s);
    ctx.globalAlpha = 0.92; cel(ctx, rrP(-130, -130, 260, 260, 40), '#e8f7ff', C.skyS, -12, -12, 6); ctx.globalAlpha = 1;
    shine(ctx, -70, -70, 30, 12, -0.6); shine(ctx, 80, 70, 10, 24, 0.3, 0.6);
    const e = P.eyes || 'normal';
    eye(ctx, -42, 0, 24, 31, '#5aa9ea', e, 1); eye(ctx, 42, 0, 24, 31, '#5aa9ea', e, -1);
    blush(ctx, -74, 36, 14, 8); blush(ctx, 74, 36, 14, 8); mouth(ctx, 0, 50, 12, P.mouth || 'wobble');
    ctx.restore();
  }
  function glass(ctx, x, y, s, t, level = 1) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const gl = new Path2D(); gl.moveTo(-150, -200); gl.lineTo(-120, 220); gl.quadraticCurveTo(0, 240, 120, 220); gl.lineTo(150, -200); gl.closePath();
    ctx.fillStyle = 'rgba(255,255,255,0.75)'; ctx.fill(gl);
    ctx.save(); ctx.clip(gl); ctx.fillStyle = C.skyS; const top = 240 - 400 * level; ctx.beginPath(); ctx.moveTo(-200, top); for (let xx = -200; xx <= 200; xx += 20) ctx.lineTo(xx, top + 7 * Math.sin(xx * 0.03 + t * 3)); ctx.lineTo(200, 300); ctx.lineTo(-200, 300); ctx.closePath(); ctx.fill(); ctx.restore();
    shine(ctx, -100, -60, 10, 60, 0.05, 0.8); ol(ctx, gl, 6);
    ctx.restore();
  }
  function shiver(t, a = 6) { return [Math.sin(t * 61) * a, Math.cos(t * 47) * a * 0.6]; }
  function flakes(ctx, t, seed, n, x0, x1, y0, y1, R = 22) { const r = H.rng(seed); for (let i = 0; i < n; i++) { const x = r.range(x0, x1), sp = r.range(60, 140), y = y0 + ((r.range(0, y1 - y0) + t * sp) % (y1 - y0)); snow(ctx, x + 14 * Math.sin(t * 1.5 + i), y, R * r.range(0.7, 1.2)); } }
  function brrr(ctx, x, y, t, t0) { const q = pop(t, t0, 1.2); kana(ctx, 'ブルブル', x, y, 90, -0.12, q.s, C.sky); }

  // ---------- scenes ----------
  const scenes = [
    function hook(ctx, t) {
      bgV(ctx, t, TH.mint, 31);
      numPop(ctx, '0°', 540, 430, 260, t, w(0, 'never') - 0.15, { fill: C.butter, line: C.skyD });
      label(ctx, 'not even one degree cooler', 540, 560, 56, t, w(0, 'degree') - 0.15, C.white);
      const p = pop(t, 0.05, 1.2), fz = t >= w(1, 'freezing') - 0.12;
      const [sx, sy] = fz ? shiver(t, 7) : [0, 0];
      mintLeaf(ctx, 540 + sx, 1020 + sy + bob(t, 0, 10), 1.6 * p.s, { sq: [p.sx / (p.s || 1), p.sy / (p.s || 1)], eyes: fz ? 'squeeze' : t >= w(0, 'never') ? 'normal' : 'happy', mouth: fz ? 'wobble' : 'smile', rot: 0.05 * Math.sin(t * 3) });
      if (fz) { big(ctx, 'FREEZING?', 540, 1600, 150, t, w(1, 'freezing') - 0.12, { line: C.skyD, fill: C.white }); flakes(ctx, t, 4, 10, 120, 960, 650, 1450, 24); }
      else if (t >= w(1, 'why') - 0.1) big(ctx, 'WHY?', 540, 1600, 170, t, w(1, 'why') - 0.12, { line: C.lavD });
      twinkles(ctx, W, HH, t, 21, 12, (x, y) => y > 250 && y < 1680 && x > 200 && x < 880);
    },
    function trick(ctx, t) {
      bgV(ctx, t, TH.lav, 32);
      big(ctx, 'IT\'S A', 540, 330, 130, t, w(2, 'its') - 0.12, { line: C.lavD });
      big(ctx, 'TRICK!', 540, 520, 190, t, w(2, 'trick') - 0.12, { line: C.pinkD, fill: C.butter });
      const fl = t >= w(2, 'falls') - 0.12;
      const bp = pop(t, w(2, 'brain') - 0.15, 1.1);
      if (bp.s > 0) brain(ctx, 600, 1120, 1.55 * bp.s, { eyes: fl ? 'swirl' : 'normal', mouth: fl ? 'wobble' : 'smile', sq: squash(t, w(2, 'falls') - 0.1) });
      const mp = pop(t, w(2, 'trick') - 0.1);
      if (mp.s > 0) mintLeaf(ctx, 230, 1480, 0.75 * mp.s, { wink: true, eyes: 'normal', mouth: 'w', rot: -0.15 });
      if (fl) { const q = pop(t, w(2, 'falls') - 0.1); kana(ctx, 'ガーン', 820, 800, 100, 0.12, q.s, C.lav); }
    },
    function mouthS(ctx, t) {
      bgV(ctx, t, TH.pink, 33);
      big(ctx, 'COLD', 540, 300, 170, t, w(3, 'cold') - 0.12, { line: C.skyD });
      big(ctx, 'ALARMS', 540, 490, 170, t, w(3, 'alarms') - 0.12, { line: C.skyD, fill: C.butter });
      const up = H.ease.out(H.clamp((t - w(3, 'your') + 0.1) / 0.45));
      ctx.save(); ctx.translate(0, (1 - up) * 800); tongue(ctx, 540, 640);
      const spots = [[300, 880], [540, 800], [780, 880], [200, 1120], [430, 1080], [660, 1080], [880, 1120], [320, 1340], [560, 1310], [790, 1340]];
      const quiet = t >= w(4, 'they') - 0.1;
      spots.forEach(([x, y], i) => { const q = pop(t, w(3, 'tiny') - 0.1 + i * 0.05, 1.2); if (q.s > 0) { const b = quiet ? 0 : 4 * Math.sin(t * 6 + i); alarm(ctx, x, y + b, 0.72 * q.s, { cold: true, eyes: quiet ? 'blink' : 'normal', mouth: quiet ? 'flat' : 'w', t }); } });
      ctx.restore();
      if (t >= w(4, 'body') - 0.12) { numPop(ctx, '37°C', 280, 1610, 120, t, w(4, 'body') - 0.12, { fill: C.butter, line: C.pinkD }); }
      if (quiet) label(ctx, 'shhh... quiet', 730, 1580, 64, t, w(4, 'quiet') - 0.15, C.mint);
    },
    function thermoS(ctx, t) {
      bgV(ctx, t, ICE, 34);
      const t0 = w(5, 'start') - 0.3, t1 = w(5, 'twentysix');
      const f = 0.82 - 0.42 * H.ease.inOut(H.clamp((t - t0) / (t1 - t0)));
      const hit = t >= t1 - 0.1;
      thermo(ctx, 290, 1360, 2.1, f, hit ? C.skyD : C.red);
      alarm(ctx, 760, 1180, 1.5, { cold: true, eyes: hit ? 'shock' : 'blink', mouth: hit ? 'O' : 'flat', ring: hit ? 1 : 0, t });
      label(ctx, 'below...', 720, 360, 70, t, w(5, 'below') - 0.12, C.white);
      numPop(ctx, '26°C', 700, 560, 220, t, t1 - 0.12, { fill: C.white, line: C.skyD });
      numPop(ctx, '79°F', 720, 770, 150, t, w(6, 'seventynine') - 0.12, { fill: C.butter, line: C.lavD });
      if (hit) { impactLines(ctx, 760, 1180, 220, t, t1 - 0.05, 10, C.skyD); flakes(ctx, t, 8, 6, 560, 1000, 1400, 1700, 20); }
    },
    function keyS(ctx, t) {
      bgV(ctx, t, TH.mint, 35);
      const nm = w(7, 'menthol') - 0.15;
      const fit = H.ease.inOut(H.clamp((t - w(8, 'fits') + 0.1) / (w(8, 'key') - w(8, 'fits') - 0.05)));
      const inK = t >= w(8, 'key') - 0.1;
      if (t < w(8, 'and')) mintLeaf(ctx, 250, 1260, 0.75 * pop(t, w(7, 'mint') - 0.12).s, { eyes: t > nm ? 'happy' : 'normal' });
      const al = pop(t, w(8, 'alarm') - 0.35), ax = 760, ay = 1180;
      if (al.s > 0) alarm(ctx, ax, ay, 1.45 * al.s, { cold: true, eyes: inK ? 'shock' : 'blink', mouth: inK ? 'O' : 'flat', ring: inK ? 1 : 0, t });
      const kp = pop(t, w(7, 'molecule') - 0.15, 1.2);
      if (kp.s > 0) { const kx = H.lerp(540, 200, fit), ky = H.lerp(820, 1190, fit), sc = H.lerp(1.5, 1.0, fit); mKey(ctx, kx, ky, sc * kp.s, { eyes: inK ? 'star' : 'happy', rot: 0.05 * Math.sin(t * 4) * (1 - fit) }); }
      big(ctx, 'MENTHOL', 540, 470, 160, t, nm, { line: C.mintD, fill: C.white });
      if (inK) { big(ctx, 'CLICK!', 540, 1610, 150, t, w(8, 'key') - 0.1, { line: C.skyD }); impactLines(ctx, 560, 1190, 90, t, w(8, 'key') - 0.05, 10); }
    },
    function shoutS(ctx, t) {
      bgV(ctx, t, { base: '#ffeede', dot: '#ffe0c8', acc: '#fff3b0', kind: 'hearts' }, 36);
      const ring = t >= w(9, 'rings') - 0.1;
      alarm(ctx, 300, 1300, 1.5, { cold: true, eyes: ring ? 'shock' : 'normal', mouth: ring ? 'O' : 'w', ring: ring ? 1 : 0, t });
      label(ctx, 'cozy', 300, 1080, 60, t, w(9, 'cozy') - 0.12, C.peach);
      numPop(ctx, '37°C', 300, 1620, 160, t, w(9, 'thirtyseven') - 0.12, { fill: C.butter, line: C.pinkD });
      const pts = bez([410, 1120], [560, 920], [680, 820], [720, 700]);
      dotted(ctx, pts, H.ease.out(H.clamp((t - w(10, 'shouts') + 0.1) / 0.6)), C.skyD, 11, 38, 1.5);
      const bp = pop(t, w(10, 'brain') - 0.15, 1.1), fz = t >= w(10, 'freezing') - 0.12;
      const [sx, sy] = fz ? shiver(t, 8) : [0, 0];
      if (bp.s > 0) brain(ctx, 720 + sx, 500 + sy, 1.3 * bp.s, { eyes: fz ? 'squeeze' : 'shock', mouth: fz ? 'wobble' : 'O' });
      if (fz) { numPop(ctx, 'FREEZING!', 640, 900, 120, t, w(10, 'freezing') - 0.12, { fill: C.white, line: C.skyD, rot: -0.05 }); flakes(ctx, t, 12, 8, 480, 1000, 180, 820, 22); brrr(ctx, 860, 250, t, w(10, 'freezing')); }
    },
    function noChange(ctx, t) {
      bgV(ctx, t, TH.butter, 37);
      const p = pop(t, w(11, 'yet') - 0.1);
      if (p.s > 0) { ctx.save(); ctx.translate(540, 1000); ctx.scale(p.sx, p.sy); ctx.translate(-540, -1000); thermo(ctx, 300, 1340, 2.0, 0.82, C.red); ctx.restore(); }
      big(ctx, 'STILL', 680, 520, 140, t, w(11, 'hasnt') - 0.12, { line: C.pinkD });
      numPop(ctx, '37°C', 690, 760, 200, t, w(11, 'cooled') - 0.12, { fill: C.butter, line: C.red });
      const q = pop(t, w(11, 'one') - 0.12, 1.2);
      if (q.s > 0) { ctx.save(); ctx.translate(690, 1180); ctx.scale(q.sx, q.sy); cel(ctx, rrP(-300, -110, 600, 200, 60), C.white, C.creamS, -6, -6, 6); kText(ctx, '+0°', -130, 40, 130, { fill: C.butter, line: C.mintD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.font = `700 54px ${FONT}`; ctx.fillStyle = C.plum; ctx.textAlign = 'left'; ctx.fillText('no real', 10, 10); ctx.fillStyle = C.mintD; ctx.fillText('change', 10, 66); ctx.restore(); }
    },
    function waterS(ctx, t) {
      bgV(ctx, t, ICE, 38);
      const gl = t >= w(13, 'glacier') - 0.12, sip = t >= w(12, 'sip') - 0.1;
      const kp = pop(t, w(12, 'thats') - 0.1);
      const [sx, sy] = gl ? shiver(t, 7) : [0, 0];
      if (kp.s > 0) kid(ctx, 540 + sx, 820 + sy, 1.9 * kp.s, { eyes: gl ? 'squeeze' : sip ? 'happy' : 'normal', mouth: gl ? 'wobble' : 'smile' });
      if (sip && !gl) { const u = H.clamp((t - w(12, 'sip')) / 0.4); glass(ctx, H.lerp(860, 700, u), H.lerp(1350, 1150, u), 0.9, t, 0.8 - 0.2 * u); }
      const gp = pop(t, w(12, 'gum') - 0.12);
      if (gp.s > 0 && !gl) mintLeaf(ctx, 220, 1380, 0.55 * gp.s, { eyes: 'happy', mouth: 'w' });
      if (gl) {
        ctx.save(); ctx.globalAlpha = 0.55 * pop(t, w(13, 'glacier') - 0.12).s; ctx.fillStyle = '#e8f7ff'; ctx.fill(rrP(160, 400, 760, 900, 80)); ctx.restore();
        iceCube(ctx, 820, 1360, 0.85 * pop(t, w(13, 'glacier') - 0.05).s, { eyes: 'shock', mouth: 'O', rot: 0.15 });
        big(ctx, 'GLACIER!', 540, 1610, 150, t, w(13, 'glacier') - 0.12, { line: C.skyD, fill: C.white });
        flakes(ctx, t, 15, 12, 80, 1000, 200, 1500, 26); brrr(ctx, 270, 360, t, w(13, 'glacier'));
      } else big(ctx, 'WATER + MINT', 540, 330, 110, t, w(12, 'water') - 0.12, { line: C.skyD });
    },
    function primedS(ctx, t) {
      bgV(ctx, t, TH.mint, 39);
      big(ctx, 'PRIMED!', 540, 360, 180, t, w(14, 'primed') - 0.12, { line: C.mintD, fill: C.butter });
      const icy = t >= w(15, 'icy') - 0.12;
      const row = [[230, 1250], [540, 1180], [850, 1250]];
      row.forEach(([x, y], i) => { const q = pop(t, w(14, 'alarms') - 0.1 + i * 0.07, 1.2); if (q.s > 0) { mKey(ctx, x - 20, y - 200, 0.45 * q.s, { eyes: 'happy', rot: 0.3 }); alarm(ctx, x, y, 0.95 * q.s, { cold: true, eyes: icy ? 'shock' : 'normal', mouth: icy ? 'O' : 'w', ring: icy ? 1 : 0, t: t + i }); } });
      const dp = pop(t, w(15, 'cool') - 0.12);
      if (dp.s > 0) { const u = H.clamp((t - w(15, 'cool') + 0.1) / 0.6); glass(ctx, 540, H.lerp(620, 760, u), 0.7 * dp.s, t, 0.7); label(ctx, 'just cool', 540, 980, 58, t, w(15, 'cool') - 0.1, C.white); }
      if (icy) { big(ctx, 'ICY!', 540, 1610, 170, t, w(15, 'icy') - 0.12, { line: C.skyD, fill: C.white }); flakes(ctx, t, 21, 10, 80, 1000, 500, 1500, 22); }
    },
    function chiliS(ctx, t) {
      bgV(ctx, t, TH.butter, 40);
      big(ctx, 'SAME', 540, 330, 170, t, w(16, 'same') - 0.12, { line: C.pinkD });
      big(ctx, 'TRICK!', 540, 520, 170, t, w(16, 'trick') - 0.12, { line: C.pinkD, fill: C.butter });
      const mp = pop(t, w(16, 'honestly') - 0.12);
      if (mp.s > 0) mintLeaf(ctx, 280, 1000 + bob(t, 0, 8), 0.8 * mp.s, { eyes: 'happy', mouth: 'smile' });
      const cp = pop(t, w(16, 'chili') - 0.12);
      if (cp.s > 0) chili(ctx, 790, 960 + bob(t, 1, 8), 0.85 * cp.s, { eyes: 'happy', mouth: 'smile', rot: 0.08 });
      const hp = t >= w(17, 'heat') - 0.12;
      const a1 = pop(t, w(16, 'plays') - 0.1);
      if (a1.s > 0) { alarm(ctx, 280, 1410, 0.8 * a1.s, { cold: true, eyes: 'shock', mouth: 'O', ring: 1, t }); label(ctx, 'COLD', 280, 1620, 60, t, w(16, 'plays'), C.sky); }
      if (hp) { alarm(ctx, 790, 1410, 0.8 * pop(t, w(17, 'heat') - 0.12).s, { fire: true, eyes: 'shock', mouth: 'O', ring: 1, t }); label(ctx, 'HEAT', 790, 1620, 60, t, w(17, 'heat') - 0.1, C.pink); }
    },
    function endS(ctx, t) {
      bgV(ctx, t, TH.lav, 41);
      big(ctx, 'ACTUALLY', 540, 380, 160, t, w(18, 'actually') - 0.12, { line: C.lavD, fill: C.butter });
      big(ctx, 'COLD?', 540, 570, 190, t, w(18, 'cold') - 0.12, { line: C.skyD });
      const p = pop(t, w(18, 'be') - 0.1, 1.2);
      mintLeaf(ctx, 540, 1040 + bob(t, 0, 10), 1.4 * p.s, { eyes: t >= w(18, 'think') - 0.1 ? 'star' : 'normal', wink: t >= w(18, 'cold'), mouth: 'smile', rot: 0.07 * Math.sin(t * 3.5) });
      const q = pop(t, w(18, 'mint') - 0.1, 1.2);
      if (q.s > 0) { ctx.save(); ctx.translate(540, 1560); ctx.scale(q.sx, q.sy); cel(ctx, rrP(-400, -90, 800, 170, 80), C.white, C.creamS, -6, -6, 6); ctx.font = `700 72px ${FONT}`; ctx.textAlign = 'center'; ctx.fillStyle = C.plum; ctx.fillText('yes or no? comment!', 0, 18); ctx.restore(); }
      confetti(ctx, t, w(18, 'cold') + 0.05, 540, 1100, 60, 9);
      twinkles(ctx, W, HH, t, 23, 12, (x, y) => y > 250 && y < 1650 && x > 200 && x < 880);
    },
  ];

  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) { scenes[i - 1](ctx, t); wipe(ctx, W_, H_, (t - (c.t - CUTW / 2)) / CUTW, c.shape, 540, 900, () => scenes[i](ctx, t)); }
    else scenes[i](ctx, t);
  }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    CUTS.forEach((c) => { k.noise(c.t - 0.22, { dur: 0.42, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.42, 3000]], q: 0.9, gain: 0.3, a: 0.08 }); k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    pop_(0.05, 500, 0.9, 0, false); big_(w(0, 'not') - 0.1, 'C6'); k.play('sparkle', w(1, 'freezing') - 0.1, { n: 6, gain: 0.5 });
    big_(w(2, 'trick') - 0.1, 'G5'); k.play('error', w(2, 'falls') - 0.05, { f: 'A3', gain: 0.35 });
    for (let i = 0; i < 10; i++) pop_(w(3, 'tiny') - 0.1 + i * 0.05, 700 + i * 60, 0.5);
    k.play('riser', w(5, 'start') - 0.3, { dur: w(5, 'twentysix') - w(5, 'start') + 0.3, gain: 0.5 }); k.play('impact', w(5, 'twentysix') - 0.08, { gain: 0.7 }); big_(w(6, 'seventynine') - 0.1, 'A5');
    pop_(w(7, 'molecule') - 0.15, 600, 0.8, 0, false); big_(w(7, 'menthol') - 0.12, 'C6'); k.play('stamp', w(8, 'key') - 0.08, { gain: 0.6 });
    k.play('buzz', w(9, 'rings') - 0.05, { f: 220, dur: 0.5, gain: 0.3 }); big_(w(9, 'thirtyseven') - 0.1, 'G5'); pop_(w(10, 'brain') - 0.1, 800, 0.8, 0.3, false); k.play('impact', w(10, 'freezing') - 0.1, { gain: 0.8 }); k.play('sparkle', w(10, 'freezing'), { n: 8, gain: 0.6 });
    pop_(w(11, 'yet') - 0.1, 500); big_(w(11, 'cooled') - 0.1, 'E5'); k.play('ding', w(11, 'one'), { f: 'C5', gain: 0.3 });
    pop_(w(12, 'thats') - 0.1, 500); pop_(w(12, 'sip'), 900, 0.6); k.play('impact', w(13, 'glacier') - 0.1, { gain: 0.7 }); k.play('sparkle', w(13, 'glacier'), { n: 8, gain: 0.6 });
    [0, 0.07, 0.14].forEach((d, i) => pop_(w(14, 'alarms') - 0.1 + d, 800 + i * 150, 0.6)); big_(w(14, 'primed') - 0.1, 'C6'); k.play('buzz', w(15, 'icy') - 0.05, { f: 220, dur: 0.4, gain: 0.25 }); big_(w(15, 'icy') - 0.1, 'G6');
    pop_(w(16, 'honestly') - 0.1, 700); pop_(w(16, 'chili') - 0.1, 800, 0.8, 0, false); big_(w(16, 'same') - 0.1, 'E6'); pop_(w(16, 'plays') - 0.1, 600); pop_(w(17, 'heat') - 0.1, 700, 0.8, 0, false);
    pop_(w(18, 'be') - 0.1, 600, 0.8, 0, false); big_(w(18, 'actually') - 0.1, 'C6'); k.play('success', w(18, 'cold') + 0.05, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(18, 'cold') + 0.05, { n: 8, gain: 0.7 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
