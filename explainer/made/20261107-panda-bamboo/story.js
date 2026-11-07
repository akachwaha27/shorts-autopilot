// ===== Kawaii Anime, vertical: "Why do pandas waste 83% of their bamboo?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'もぐもぐすやすやガーンやったーキラぽりぽり';
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

  // ---------- story: "Why do pandas waste 83% of their bamboo?" Kawaii Anime, 1080x1920 ----------
  const W = 1080, HH = 1920;
  const P_ = [{"s": 0.25, "e": 3.43, "text": "Pandas waste eighty-three percent of the bamboo they eat.", "words": [["pandas", 0.25], ["waste", 0.66], ["eightythree", 1.0], ["percent", 1.74], ["of", 2.21], ["the", 2.35], ["bamboo", 2.55], ["they", 2.96], ["eat", 3.23]]}, {"s": 3.98, "e": 5.44, "text": "Here's why you never see it.", "words": [["heres", 3.98], ["why", 4.33], ["you", 4.54], ["never", 4.75], ["see", 5.09], ["it", 5.3]]}, {"s": 5.99, "e": 8.31, "text": "Inside, a panda has a meat-eater's gut,", "words": [["inside", 5.99], ["a", 6.47], ["panda", 6.55], ["has", 6.95], ["a", 7.19], ["meateaters", 7.27], ["gut", 8.07]]}, {"s": 8.61, "e": 10.11, "text": "built just like a bear's:", "words": [["built", 8.61], ["just", 9.01], ["like", 9.32], ["a", 9.64], ["bears", 9.72]]}, {"s": 10.41, "e": 12.0, "text": "short, simple intestines,", "words": [["short", 10.41], ["simple", 10.79], ["intestines", 11.24]]}, {"s": 12.3, "e": 14.37, "text": "and no cow-style stomach chambers.", "words": [["and", 12.3], ["no", 12.52], ["cowstyle", 12.67], ["stomach", 13.26], ["chambers", 13.78]]}, {"s": 14.92, "e": 16.68, "text": "So bamboo rushes straight through,", "words": [["so", 14.92], ["bamboo", 15.04], ["rushes", 15.41], ["straight", 15.77], ["through", 16.25]]}, {"s": 16.98, "e": 19.26, "text": "and most of it comes out in less than a day.", "words": [["and", 16.98], ["most", 17.18], ["of", 17.46], ["it", 17.6], ["comes", 17.74], ["out", 18.08], ["in", 18.29], ["less", 18.43], ["than", 18.71], ["a", 18.98], ["day", 19.05]]}, {"s": 19.81, "e": 22.64, "text": "So pandas eat for up to fourteen hours a day,", "words": [["so", 19.81], ["pandas", 19.97], ["eat", 20.46], ["for", 20.7], ["up", 20.94], ["to", 21.1], ["fourteen", 21.27], ["hours", 21.91], ["a", 22.32], ["day", 22.4]]}, {"s": 22.94, "e": 25.6, "text": "crunching up to thirty-eight kilos of bamboo.", "words": [["crunching", 22.94], ["up", 23.59], ["to", 23.73], ["thirtyeight", 23.87], ["kilos", 24.66], ["of", 25.02], ["bamboo", 25.17]]}, {"s": 26.15, "e": 29.21, "text": "And they save energy like a phone on low battery.", "words": [["and", 26.15], ["they", 26.39], ["save", 26.7], ["energy", 27.01], ["like", 27.48], ["a", 27.8], ["phone", 27.88], ["on", 28.27], ["low", 28.43], ["battery", 28.66]]}, {"s": 29.76, "e": 31.33, "text": "Their thyroid runs slow,", "words": [["their", 29.76], ["thyroid", 30.15], ["runs", 30.7], ["slow", 31.02]]}, {"s": 31.63, "e": 33.35, "text": "their brain and liver are small,", "words": [["their", 31.63], ["brain", 31.96], ["and", 32.29], ["liver", 32.49], ["are", 32.82], ["small", 33.02]]}, {"s": 33.65, "e": 34.85, "text": "and they nap a lot.", "words": [["and", 33.65], ["they", 33.91], ["nap", 34.25], ["a", 34.51], ["lot", 34.59]]}, {"s": 35.4, "e": 38.34, "text": "A panda burns barely forty percent of the energy", "words": [["a", 35.4], ["panda", 35.47], ["burns", 35.84], ["barely", 36.21], ["forty", 36.65], ["percent", 37.02], ["of", 37.53], ["the", 37.68], ["energy", 37.9]]}, {"s": 38.64, "e": 40.23, "text": "you'd expect for its size.", "words": [["youd", 38.64], ["expect", 38.96], ["for", 39.44], ["its", 39.67], ["size", 39.91]]}, {"s": 40.78, "e": 42.58, "text": "Scientists think it all started", "words": [["scientists", 40.78], ["think", 41.45], ["it", 41.78], ["all", 41.91], ["started", 42.11]]}, {"s": 42.88, "e": 44.8, "text": "when their ancestors lost a gene", "words": [["when", 42.88], ["their", 43.16], ["ancestors", 43.52], ["lost", 44.16], ["a", 44.44], ["gene", 44.51]]}, {"s": 45.1, "e": 46.99, "text": "for tasting meat's savory flavor.", "words": [["for", 45.1], ["tasting", 45.31], ["meats", 45.8], ["savory", 46.15], ["flavor", 46.57]]}, {"s": 47.54, "e": 50.6, "text": "Could you eat just one food every day, like a panda?", "words": [["could", 47.54], ["you", 47.92], ["eat", 48.15], ["just", 48.38], ["one", 48.69], ["food", 48.92], ["every", 49.22], ["day", 49.61], ["like", 49.83], ["a", 50.14], ["panda", 50.22]]}];
  const BEATS = [
    { id: 'hook', s: P_[0].s, e: P_[1].e }, { id: 'gut', s: P_[2].s, e: P_[3].e }, { id: 'tube', s: P_[4].s, e: P_[5].e },
    { id: 'rush', s: P_[6].s, e: P_[7].e }, { id: 'eat', s: P_[8].s, e: P_[9].e }, { id: 'battery', s: P_[10].s, e: P_[10].e },
    { id: 'body', s: P_[11].s, e: P_[13].e }, { id: 'energy', s: P_[14].s, e: P_[15].e }, { id: 'gene', s: P_[16].s, e: P_[18].e },
    { id: 'end', s: P_[19].s, e: P_[19].e },
  ];
  const w = (i, word) => { const f = P_[i].words.find((x) => x[0] === word); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  const CUTS = BEATS.slice(1).map((b, i) => ({ t: (BEATS[i].e + b.s) / 2, shape: i % 3 === 2 ? 'heart' : 'star' }));
  const CUTW = 0.5;
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.05, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = C.butter) => { const p = pop(t, t0); if (p.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  function bgV(ctx, t, th, seed) { ctx.save(); ctx.scale(1.5, 1.5); bg(ctx, W / 1.5, HH / 1.5, t, th, seed); ctx.restore(); }
  const popAt = (ctx, t, t0, x, y, fn, k = 1.2) => { const p = pop(t, t0, k); if (p.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); fn(); ctx.restore(); };
  const PB = '#4a3a52', PBS = '#33263b'; // panda "black": soft plum-charcoal

  // ---------- original cast ----------
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
  function bambooStalk(ctx, x, y, len, rot, s = 1, leaves = true) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const seg = 110, n = Math.max(1, Math.round(len / seg));
    for (let i = 0; i < n; i++) cel(ctx, rrP(-24, -(i + 1) * seg, 48, seg - 6, 16), '#9be08a', '#5fbf62', -5, -4, 4.5);
    for (let i = 1; i < n; i++) cel(ctx, rrP(-30, -i * seg - 10, 60, 14, 7), '#7fd06f', '#4fa852', -2, -2, 4);
    if (leaves) { const top = -n * seg; [[-0.9, -40], [0.8, -10], [-0.3, 10]].forEach(([a, dy]) => { ctx.save(); ctx.translate(0, top + 30 + dy); ctx.rotate(a); cel(ctx, ellP(0, -60, 22, 62), C.mintD, '#2c946f', -3, -3, 4.5); ctx.restore(); }); }
    ctx.restore();
  }
  function chunk(ctx, x, y, r, rot) { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); cel(ctx, rrP(-r * 0.4, -r, r * 0.8, r * 2, r * 0.3), '#9be08a', '#5fbf62', -3, -3, 4); ctx.restore(); }
  // the panda: round head, plum-charcoal ears and eye patches, glossy anime eyes
  function panda(ctx, x, y, s, P = {}) {
    ctx.save(); rig(ctx, x, y, s, P, 300);
    if (!P.headOnly) {
      for (const sd of [-1, 1]) cel(ctx, ellP(sd * 64, 290, 52, 40), PB, PBS, -5, -5, 5);
      cel(ctx, ellP(0, 190, 132, 122), C.white, C.creamS, -12, -12, 5);
      if (P.xray) {
        const xp = ellP(0, 196, 98, 92); ctx.save(); ctx.fillStyle = '#e8f6ff'; ctx.fill(xp); ctx.clip(xp);
        ctx.strokeStyle = C.plum; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.lineWidth = 36;
        const gp = () => { ctx.beginPath(); ctx.moveTo(-10, 100); ctx.quadraticCurveTo(-60, 130, -40, 170); ctx.quadraticCurveTo(-10, 210, 40, 190); ctx.quadraticCurveTo(70, 230, 20, 260); ctx.lineTo(0, 300); };
        gp(); ctx.stroke(); ctx.strokeStyle = C.pink; ctx.lineWidth = 24; gp(); ctx.stroke();
        ctx.restore(); ol(ctx, xp, 4);
      }
      const arm = (sd, a) => { ctx.save(); ctx.translate(sd * 100, 130); ctx.rotate(-sd * a); cel(ctx, ellP(sd * 6, 50, 40, 66, -sd * 0.2), PB, PBS, -5, -5, 5); ctx.restore(); };
      arm(-1, P.armL == null ? 0.25 : P.armL); arm(1, P.armR == null ? 0.25 : P.armR);
    }
    for (const sd of [-1, 1]) cel(ctx, ellP(sd * 108, -98, 44, 42), PB, PBS, -5, -5, 5);
    cel(ctx, ellP(0, 0, 160, 136), C.white, C.creamS, -14, -14, 5);
    shine(ctx, -96, -62, 26, 11, -0.6);
    for (const sd of [-1, 1]) { ctx.fillStyle = PB; ctx.fill(ellP(sd * 58, 8, 44, 56, sd * -0.5)); }
    const ek = P.eyes || 'normal', lk = P.look || [0, 0];
    if (ek === 'normal' || ek === 'shock' || ek === 'star') { eye(ctx, -56, 6, 26, 34, '#5d8a3a', ek, 1, lk); eye(ctx, 56, 6, 26, 34, '#5d8a3a', ek, -1, lk); }
    else { ctx.save(); ctx.strokeStyle = C.white; ctx.lineCap = 'round'; ctx.lineWidth = 9; ctx.beginPath();
      for (const sd of [-1, 1]) { if (ek === 'happy') { ctx.moveTo(sd * 56 - 22, 14); ctx.quadraticCurveTo(sd * 56, -16, sd * 56 + 22, 14); } else if (ek === 'squeeze') { ctx.moveTo(sd * 56 - 18 * sd, -10); ctx.lineTo(sd * 56 + 16 * sd, 6); ctx.lineTo(sd * 56 - 18 * sd, 22); } else { ctx.moveTo(sd * 56 - 22, 6); ctx.quadraticCurveTo(sd * 56, 26, sd * 56 + 22, 6); } }
      ctx.stroke(); ctx.restore(); }
    blush(ctx, -104, 58, 20, 11); blush(ctx, 104, 58, 20, 11);
    ctx.fillStyle = PB; ctx.fill(ellP(0, 50, 17, 11));
    const chew = P.chew ? Math.abs(Math.sin((P.t || 0) * 14)) : 0;
    mouth(ctx, 0, 76 + chew * 4, 14, P.mouth || (P.chew ? (chew > 0.5 ? 'o' : 'w') : 'smile'));
    if (P.bamboo) bambooStalk(ctx, 150, 250, 330, 0.5, 0.85);
    ctx.restore();
  }
  // a bear for comparison (brown, round ears)
  function bear(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    for (const sd of [-1, 1]) { cel(ctx, ellP(sd * 108, -96, 42, 40), C.brown, C.brownS, -5, -5, 5); ctx.fillStyle = C.peachS; ctx.fill(ellP(sd * 108, -94, 20, 18)); }
    cel(ctx, ellP(0, 0, 160, 136), C.brown, C.brownS, -14, -14, 5);
    cel(ctx, ellP(0, 50, 62, 44), C.peach, C.peachS, -4, -4, 4);
    ctx.fillStyle = C.dark; ctx.fill(ellP(0, 30, 18, 12));
    eye(ctx, -58, -8, 24, 31, '#7a4a2a', P.eyes || 'normal', 1); eye(ctx, 58, -8, 24, 31, '#7a4a2a', P.eyes || 'normal', -1);
    blush(ctx, -100, 40, 18, 10); blush(ctx, 100, 40, 18, 10);
    mouth(ctx, 0, 62, 12, 'w');
    ctx.restore();
  }
  function gutTube(ctx, pts, prog = 1, wd = 70) {
    const n = Math.max(2, Math.round(pts.length * prog)); const sub = pts.slice(0, n);
    ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const path = () => { ctx.beginPath(); sub.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); };
    path(); ctx.strokeStyle = C.plum; ctx.lineWidth = wd + 12; ctx.stroke();
    path(); ctx.strokeStyle = C.pinkS; ctx.lineWidth = wd; ctx.stroke();
    ctx.save(); ctx.translate(-6, -6); path(); ctx.strokeStyle = C.pink; ctx.lineWidth = wd - 16; ctx.stroke(); ctx.restore();
    ctx.restore();
  }
  function cowStomach(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const cols = [[C.lav, C.lavS], [C.sky, C.skyS], [C.butter, C.butterS], [C.mint, C.mintS]];
    [[-90, -70, 92], [70, -80, 78], [90, 60, 70], [-60, 80, 76]].forEach(([a, b, r], i) => { cel(ctx, ellP(a, b, r, r * 0.86), cols[i][0], cols[i][1], -6, -6, 5); ctx.fillStyle = C.plum; ctx.font = `700 64px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(i + 1), a, b + 4); });
    ctx.restore();
  }
  function clock(ctx, x, y, r, hrs, col = C.pink) {
    ctx.save(); ctx.translate(x, y);
    cel(ctx, ellP(0, 0, r, r), C.white, C.creamS, -8, -8, 6);
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, r * 0.82, -Math.PI / 2, -Math.PI / 2 + TAU * (hrs / 24)); ctx.closePath(); ctx.fillStyle = H.rgba(col, 0.8); ctx.fill();
    ctx.strokeStyle = C.plum; ctx.lineCap = 'round'; ctx.lineWidth = r * 0.07;
    for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; ctx.beginPath(); ctx.moveTo(Math.cos(a) * r * 0.86, Math.sin(a) * r * 0.86); ctx.lineTo(Math.cos(a) * r * 0.95, Math.sin(a) * r * 0.95); ctx.stroke(); }
    const ha = -Math.PI / 2 + TAU * (hrs / 12), ma = -Math.PI / 2 + TAU * hrs;
    ctx.lineWidth = r * 0.09; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(ha) * r * 0.45, Math.sin(ha) * r * 0.45); ctx.stroke();
    ctx.lineWidth = r * 0.06; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(ma) * r * 0.7, Math.sin(ma) * r * 0.7); ctx.stroke();
    ctx.fillStyle = C.plum; ctx.fill(ellP(0, 0, r * 0.07, r * 0.07));
    ctx.restore();
  }
  function phone(ctx, x, y, s, lvl, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); ctx.scale(s, s);
    cel(ctx, rrP(-170, -320, 340, 640, 60), C.lavD, '#6d55c4', -8, -8, 6);
    cel(ctx, rrP(-140, -280, 280, 560, 36), '#fffdfb', C.creamS, -5, -5, 4);
    // battery
    cel(ctx, rrP(-90, -230, 170, 90, 18), C.white, C.creamS, -3, -3, 5); cel(ctx, rrP(80, -205, 20, 40, 6), C.plum, C.plum, 0, 0, 0);
    const col = lvl < 0.3 ? C.red : C.mintD; ctx.fillStyle = col; ctx.fill(rrP(-78, -218, 146 * lvl, 66, 10));
    eye(ctx, -50, 40, 30, 40, '#8a6cf0', P.eyes || 'blink', 1); eye(ctx, 50, 40, 30, 40, '#8a6cf0', P.eyes || 'blink', -1);
    blush(ctx, -92, 96, 18, 10); blush(ctx, 92, 96, 18, 10); mouth(ctx, 0, 112, 14, P.mouth || 'flat');
    ctx.restore();
  }
  function snail(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const body = new Path2D(); body.moveTo(-130, 60); body.quadraticCurveTo(-140, 0, -100, -10); body.lineTo(120, 30); body.quadraticCurveTo(150, 60, 120, 70); body.closePath();
    cel(ctx, body, C.peach, C.peachS, -4, -4, 5);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-110, -6); ctx.lineTo(-130, -60); ctx.moveTo(-96, -4); ctx.lineTo(-90, -62); ctx.stroke(); ctx.restore();
    ctx.fillStyle = C.plum; ctx.fill(ellP(-130, -64, 9, 9)); ctx.fill(ellP(-90, -66, 9, 9));
    cel(ctx, ellP(20, -30, 86, 80), C.lav, C.lavS, -8, -8, 5);
    ctx.save(); ctx.strokeStyle = C.lavD; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); for (let a = 0; a < Math.PI * 4; a += 0.2) { const r = 60 * a / (Math.PI * 4); const px = 20 + Math.cos(a) * r, py = -30 + Math.sin(a) * r; a ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.stroke(); ctx.restore();
    ctx.restore();
  }
  function liver(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(-130, -40); p.bezierCurveTo(-120, -110, 120, -110, 140, -60); p.bezierCurveTo(150, -20, 40, 80, -40, 80); p.bezierCurveTo(-110, 80, -140, 20, -130, -40); p.closePath();
    cel(ctx, p, '#ff8d80', '#e2636a', -7, -7, 5);
    eye(ctx, -30, -10, 18, 24, '#a0482a', 'normal', 1); eye(ctx, 30, -10, 18, 24, '#a0482a', 'normal', -1); mouth(ctx, 0, 28, 9, 'w');
    ctx.restore();
  }
  function steak(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(-120, -20); p.bezierCurveTo(-130, -100, 60, -110, 110, -50); p.bezierCurveTo(150, 0, 100, 90, 0, 90); p.bezierCurveTo(-90, 90, -110, 40, -120, -20); p.closePath();
    cel(ctx, p, '#e8846a', '#c4604e', -7, -7, 5);
    ctx.save(); ctx.clip(p); ctx.strokeStyle = '#ffd9c8'; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-80, -30); ctx.quadraticCurveTo(-10, -60, 60, -20); ctx.stroke(); ctx.restore();
    cel(ctx, ellP(40, 10, 26, 22), C.cream, C.creamS, -3, -3, 4);
    ctx.restore();
  }
  function dna(ctx, cx, y0, y1, t, gap) { // vertical double helix; gap = [index, offset] for the popped rung
    const n = 12;
    for (let i = 0; i < n; i++) {
      const y = H.lerp(y0, y1, i / (n - 1)), a = i * 0.62 + t * 1.6, dx = Math.sin(a) * 140;
      if (gap && i === gap[0]) continue;
      ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 20; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(cx - dx, y); ctx.lineTo(cx + dx, y); ctx.stroke();
      ctx.strokeStyle = i % 2 ? C.butterD : C.skyS; ctx.lineWidth = 11; ctx.stroke(); ctx.restore();
      cel(ctx, ellP(cx - dx, y, 26, 26), C.pinkD, '#e2507f', -3, -3, 4.5); cel(ctx, ellP(cx + dx, y, 26, 26), C.lavD, '#6d55c4', -3, -3, 4.5);
    }
  }

  // ---------- scenes ----------
  const scenes = [
    function hook(ctx, t) {
      bgV(ctx, t, TH.mint, 31);
      const p = pop(t, 0.05, 1.2);
      panda(ctx, 540, 900 + bob(t, 0, 8), 1.55 * p.s, { sq: [p.sx / (p.s || 1), p.sy / (p.s || 1)], chew: true, t, bamboo: true, armR: 0.9, eyes: t > w(1, 'never') - 0.1 ? 'happy' : 'normal' });
      // bamboo chunks flying away
      const t0 = w(0, 'waste') - 0.1;
      if (t > t0) { const r = H.rng(4); for (let i = 0; i < 9; i++) { const u = ((t - t0) * 0.7 + i / 9) % 1, a = r.range(-2.6, -0.5), d = 200 + u * 600; ctx.save(); ctx.globalAlpha = 1 - u * 0.6; chunk(ctx, 540 + Math.cos(a) * d * 1.1, 1180 + Math.sin(a) * d * 0.3 + u * u * 600, 26, u * 8 + i); ctx.restore(); } }
      popAt(ctx, t, w(0, 'eightythree') - 0.15, 540, 470, () => kText(ctx, '83%', 0, 0, 280, { fill: C.butter, line: C.mintD, outer: C.plum, ow: 0.08, lw: 0.15 }), 1.3);
      big(ctx, 'WASTED!', 540, 1560, 170, t, w(0, 'bamboo') - 0.12, { line: C.red });
      twinkles(ctx, W, HH, t, 21, 12, (x, y) => y > 250 && y < 1650 && x > 200 && x < 880);
    },
    function gutS(ctx, t) {
      bgV(ctx, t, TH.lav, 32);
      const bt = w(3, 'built') - 0.12, bearIn = t >= bt;
      const slide = H.ease.inOut(H.clamp((t - bt) / 0.5));
      panda(ctx, H.lerp(540, 330, slide), 760, H.lerp(1.45, 1.0, slide), { xray: t > w(2, 'inside') - 0.1, eyes: 'shock', mouth: 'o', t });
      big(ctx, 'MEAT-EATER', 540, 290, 128, t, w(2, 'meateaters') - 0.15, { line: C.red, fill: C.butter });
      big(ctx, 'GUT!', 540, 440, 140, t, w(2, 'gut') - 0.12, { line: C.pinkD });
      if (bearIn) { popAt(ctx, t, bt, 790, 1000, () => bear(ctx, 0, 0, 1.0, { eyes: 'happy' })); }
      if (bearIn) popAt(ctx, t, w(3, 'bears') - 0.15, 540, 1500, () => { cel(ctx, rrP(-360, -100, 720, 170, 80), C.white, C.creamS, -6, -6, 6); kText(ctx, '= SAME GUT', 0, 28, 100, { fill: C.butter, line: C.lavD, outer: C.plum, ow: 0.08, lw: 0.16 }); });
    },
    function tubeS(ctx, t) {
      bgV(ctx, t, TH.pink, 33);
      const pts = bez([180, 400], [700, 330], [900, 600], [540, 700]).concat(bez([540, 700], [200, 790], [300, 1000], [860, 1000]).slice(1));
      const prog = H.ease.out(H.clamp((t - w(4, 'short') + 0.15) / 0.8));
      gutTube(ctx, pts, prog);
      label(ctx, 'SHORT + SIMPLE', 540, 1140, 72, t, w(4, 'simple') - 0.12, C.butter);
      const ct = w(5, 'cowstyle') - 0.15;
      popAt(ctx, t, ct, 540, 1420, () => cowStomach(ctx, 0, 0, 1.15));
      if (t >= w(5, 'no') - 0.1) label(ctx, 'cow stomach', 820, 1260, 56, t, ct, C.sky);
      const nx = pop(t, w(5, 'chambers') - 0.1);
      if (nx.s > 0) { ctx.save(); ctx.translate(540, 1420); ctx.scale(nx.sx, nx.sy); ctx.lineCap = 'round'; for (const [c, lw] of [[C.plum, 62], [C.red, 40]]) { ctx.strokeStyle = c; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(-170, -170); ctx.lineTo(170, 170); ctx.moveTo(170, -170); ctx.lineTo(-170, 170); ctx.stroke(); } ctx.restore(); }
      big(ctx, 'INTESTINES', 540, 270, 120, t, w(4, 'intestines') - 0.12, { line: C.pinkD, fill: C.butter });
    },
    function rushS(ctx, t) {
      bgV(ctx, t, TH.butter, 34);
      const pts = bez([-80, 600], [400, 420], [700, 900], [1160, 760]);
      gutTube(ctx, pts, 1, 150);
      const t0 = w(6, 'rushes') - 0.2;
      if (t > w(6, 'bamboo') - 0.1) { for (let i = 0; i < 5; i++) { const u = ((t - t0) * 0.55 + i / 5) % 1; if (t < t0) continue; const [x, y, a] = along(pts, plen(pts) * u); chunk(ctx, x, y, 52, a + Math.PI / 2); } }
      if (t > w(6, 'rushes') - 0.1) { ctx.save(); ctx.strokeStyle = C.plum; ctx.lineCap = 'round'; ctx.lineWidth = 9; for (let i = 0; i < 4; i++) { const yy = 470 + i * 50, xx = 140 + ((t * 600 + i * 90) % 300); ctx.beginPath(); ctx.moveTo(xx, yy - 120); ctx.lineTo(xx + 90, yy - 120); ctx.stroke(); } ctx.restore(); }
      big(ctx, 'WHOOSH!', 540, 300, 170, t, w(6, 'rushes') - 0.12, { line: C.skyD });
      popAt(ctx, t, w(7, 'comes') - 0.12, 330, 1290, () => clock(ctx, 0, 0, 200, 22 * H.ease.out(H.clamp((t - w(7, 'comes') + 0.1) / 2.0)), C.mint));
      big(ctx, '< 1 DAY', 780, 1310, 120, t, w(7, 'less') - 0.12, { line: C.mintD, fill: C.butter, align: 'center' });
      label(ctx, 'mostly undigested', 540, 1560, 64, t, w(7, 'most') - 0.12, C.pink);
    },
    function eatS(ctx, t) {
      bgV(ctx, t, TH.mint, 35);
      const ht = w(8, 'fourteen') - 0.15;
      popAt(ctx, t, w(8, 'eat') - 0.1, 260, 460, () => clock(ctx, 0, 0, 170, 14 * H.ease.inOut(H.clamp((t - ht + 0.3) / 0.9)), C.pinkD));
      big(ctx, '14 HRS', 720, 500, 150, t, ht, { line: C.pinkD, fill: C.butter });
      // bamboo pile grows
      const pg = H.clamp((t - w(9, 'crunching') + 0.1) / 2.4);
      const n = Math.floor(pg * 10); let k = 0;
      for (let r = 0; r < 4; r++) for (let j = 0; j < 4 - r; j++) { if (k++ >= n) break; const cx = 540 + (j - (3 - r) / 2) * 230; bambooStalk(ctx, cx + 110, 1440 - r * 52, 220, -Math.PI / 2 + (j % 2 ? 0.02 : -0.02), 1, false); }
      panda(ctx, 540, 900, 1.2, { chew: true, t, bamboo: true, armR: 0.9, eyes: 'happy' });
      big(ctx, '38 KG', 430, 1600, 150, t, w(9, 'thirtyeight') - 0.15, { line: C.mintD, fill: C.white });
      if (t > w(9, 'crunching') - 0.1) kana(ctx, 'ぽりぽり', 830, 640, 84, 0.12, pop(t, w(9, 'crunching') - 0.1).s, C.butter);
      label(ctx, '84 lb', 840, 1560, 60, t, w(9, 'kilos') - 0.1, C.sky);
    },
    function batteryS(ctx, t) {
      bgV(ctx, t, { base: '#ffe0e4', dot: '#ffcbd4', acc: '#fff3b0', kind: 'hearts' }, 36);
      const lowT = w(10, 'low') - 0.15;
      const lvl = H.lerp(0.9, 0.12, H.ease.inOut(H.clamp((t - w(10, 'save') + 0.1) / (lowT - w(10, 'save') + 0.2))));
      popAt(ctx, t, w(10, 'phone') - 0.15, 540, 980, () => phone(ctx, 0, 0, 1.6, lvl, { eyes: lvl < 0.3 ? 'blink' : 'normal', mouth: lvl < 0.3 ? 'flat' : 'smile', rot: 0.03 * Math.sin(t * 2) }));
      if (t < w(10, 'phone') - 0.1) panda(ctx, 540, 900, 1.3 * pop(t, w(10, 'and') - 0.1).s, { eyes: 'blink', mouth: 'flat' });
      big(ctx, 'SAVE', 540, 300, 150, t, w(10, 'save') - 0.12, { line: C.mintD });
      big(ctx, 'ENERGY', 540, 460, 150, t, w(10, 'energy') - 0.12, { line: C.mintD, fill: C.butter });
      big(ctx, 'LOW POWER!', 540, 1620, 120, t, lowT, { line: C.red });
    },
    function bodyS(ctx, t) {
      bgV(ctx, t, TH.lav, 37);
      const nap = t >= w(13, 'nap') - 0.15;
      panda(ctx, 540, 1230, 1.2, { eyes: nap ? 'blink' : 'normal', mouth: nap ? 'w' : 'smile', tilt: nap ? 0.12 : 0, t });
      if (!nap) {
        popAt(ctx, t, w(11, 'thyroid') - 0.15, 280, 560, () => snail(ctx, 0, 0, 1.45));
        label(ctx, 'thyroid: SLOW', 280, 790, 62, t, w(11, 'slow') - 0.12, C.butter);
        popAt(ctx, t, w(12, 'brain') - 0.15, 740, 470, () => brain(ctx, 0, 0, 0.85, { eyes: 'normal', mouth: 'w' }));
        popAt(ctx, t, w(12, 'liver') - 0.15, 800, 730, () => liver(ctx, 0, 0, 1.0));
        label(ctx, 'small!', 800, 880, 66, t, w(12, 'small') - 0.12, C.pink);
      } else {
        const z = pop(t, w(13, 'nap') - 0.15);
        for (let i = 0; i < 3; i++) { const u = ((t * 0.6) + i / 3) % 1; ctx.save(); ctx.globalAlpha = 1 - u; kText(ctx, 'Z', 730 + u * 140 + i * 30, 1060 - u * 260, (70 + i * 26) * z.s, { line: C.lavD, outer: C.plum, ow: 0.1, lw: 0.17 }); ctx.restore(); }
        kana(ctx, 'すやすや', 540, 420, 110, -0.06, z.s, C.lav);
        big(ctx, 'NAP TIME', 540, 600, 130, t, w(13, 'nap') - 0.12, { line: C.lavD, fill: C.butter });
      }
    },
    function energyS(ctx, t) {
      bgV(ctx, t, TH.butter, 38);
      const base = 1440, Hmax = 820;
      const g1 = H.ease.out(H.clamp((t - w(14, 'burns') + 0.2) / 0.6));
      const g2 = H.ease.out(H.clamp((t - w(14, 'forty') + 0.2) / 0.6)) * 0.4;
      const bar = (x, f, col, sh) => { if (f <= 0) return; cel(ctx, rrP(x - 120, base - Hmax * f, 240, Hmax * f, 30), col, sh, -8, -8, 6); };
      cel(ctx, rrP(80, base - 6, 920, 16, 8), C.plum, C.plum, 0, 0, 0);
      bar(310, g1, C.sky, C.skyS); bar(770, g2, C.mint, C.mintS);
      if (g1 > 0) { bear(ctx, 310, base + 140, 0.55, {}); label(ctx, 'expected', 310, base - Hmax * g1 - 60, 56, t, w(14, 'burns') - 0.1, C.sky); }
      panda(ctx, 770, base + 120, 0.5, { headOnly: true, eyes: 'happy', shadow: false });
      if (g2 > 0) popAt(ctx, t, w(14, 'forty') - 0.15, 770, base - Hmax * g2 - 70, () => kText(ctx, '40%', 0, 0, 150, { fill: C.butter, line: C.mintD, outer: C.plum, ow: 0.08, lw: 0.16 }));
      big(ctx, 'ENERGY USED', 540, 290, 120, t, w(14, 'energy') - 0.12, { line: C.pinkD, fill: C.white });
      if (t > w(15, 'size') - 0.15) label(ctx, 'for its size', 540, 440, 70, t, w(15, 'size') - 0.15, C.pink);
    },
    function geneS(ctx, t) {
      bgV(ctx, t, TH.pink, 39);
      const lt = w(17, 'lost') - 0.12, lost = t >= lt;
      const gap = lost ? [5, 0] : null;
      dna(ctx, 250, 420, 1460, t, gap);
      if (lost) { const u = H.ease.out(H.clamp((t - lt) / 0.6)); const x = H.lerp(250, 780, u), y = H.lerp(420 + 5 * 1040 / 11, 760, u);
        ctx.save(); ctx.translate(x, y); ctx.rotate(u * 0.6); ctx.strokeStyle = C.plum; ctx.lineWidth = 20; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-150, 0); ctx.lineTo(150, 0); ctx.stroke(); ctx.strokeStyle = C.red; ctx.lineWidth = 11; ctx.stroke(); ctx.restore(); }
      label(ctx, 'ancestors', 250, 300, 64, t, w(17, 'ancestors') - 0.12, C.lav);
      big(ctx, 'GENE LOST', 780, 620, 100, t, lt, { line: C.red, fill: C.butter });
      const st = w(18, 'meats') - 0.15;
      popAt(ctx, t, st, 780, 1060, () => steak(ctx, 0, 0, 1.25));
      if (t > w(18, 'savory') - 0.1) { popAt(ctx, t, w(18, 'savory') - 0.1, 780, 1320, () => kText(ctx, 'NO TASTE?', 0, 0, 96, { fill: C.white, line: C.pinkD, outer: C.plum, ow: 0.1, lw: 0.17 })); }
      if (t < st) label(ctx, 'scientists think...', 540, 1620, 60, t, w(16, 'scientists') - 0.12, C.butter);
      else label(ctx, 'meat taste = umami', 540, 1620, 60, t, w(18, 'flavor') - 0.12, C.butter);
    },
    function endS(ctx, t) {
      bgV(ctx, t, TH.mint, 40);
      big(ctx, 'ONE FOOD', 540, 350, 160, t, w(19, 'one') - 0.12, { line: C.mintD, fill: C.butter });
      big(ctx, 'FOREVER?', 540, 530, 160, t, w(19, 'every') - 0.12, { line: C.pinkD });
      const p = pop(t, w(19, 'could') - 0.1, 1.2);
      panda(ctx, 540, 900 + bob(t, 0, 8), 1.25 * p.s, { chew: true, t, bamboo: true, armR: 0.9, eyes: t >= w(19, 'panda') - 0.1 ? 'happy' : 'star' });
      popAt(ctx, t, w(19, 'panda') - 0.1, 540, 1560, () => { cel(ctx, rrP(-400, -90, 800, 170, 80), C.white, C.creamS, -6, -6, 6); ctx.font = `700 72px ${FONT}`; ctx.textAlign = 'center'; ctx.fillStyle = C.plum; ctx.fillText('tell me below!', 0, 18); });
      confetti(ctx, t, w(19, 'panda') + 0.1, 540, 1100, 60, 9);
      twinkles(ctx, W, HH, t, 23, 12, (x, y) => y > 250 && y < 1650 && x > 200 && x < 880);
    },
  ];

  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) {
      scenes[i - 1](ctx, t);
      wipe(ctx, W_, H_, (t - (c.t - CUTW / 2)) / CUTW, c.shape, 540, 900, () => scenes[i](ctx, t));
    } else scenes[i](ctx, t);
  }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    CUTS.forEach((c) => { k.noise(c.t - 0.22, { dur: 0.42, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.42, 3000]], q: 0.9, gain: 0.3, a: 0.08 }); k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    pop_(0.05, 500, 0.9, 0, false); big_(w(0, 'eightythree') - 0.12); k.play('error', w(0, 'bamboo') - 0.08, { f: 'A3', gain: 0.35 });
    pop_(w(2, 'inside') - 0.1, 600); big_(w(2, 'meateaters') - 0.12, 'C6'); pop_(w(3, 'built') - 0.1, 800, 0.8, 0.3, false); k.play('stamp', w(3, 'bears') - 0.12, { gain: 0.5 });
    k.play('sparkle', w(4, 'short') - 0.1, { n: 5, gain: 0.5 }); pop_(w(5, 'cowstyle') - 0.12, 500, 0.8, 0, false); k.play('error', w(5, 'chambers') - 0.08, { f: 'A3', gain: 0.5 });
    k.noise(w(6, 'rushes') - 0.2, { dur: 0.8, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.8, 2500]], q: 0.8, gain: 0.4, a: 0.05 }); big_(w(7, 'less') - 0.1, 'G5');
    pop_(w(8, 'eat') - 0.1, 600); k.play('riser', w(8, 'fourteen') - 0.5, { dur: 0.6, gain: 0.45 }); big_(w(8, 'fourteen') - 0.12, 'A5');
    for (let i = 0; i < 6; i++) pop_(w(9, 'crunching') + i * 0.35, 800 + i * 70, 0.45); big_(w(9, 'thirtyeight') - 0.12, 'C6');
    pop_(w(10, 'phone') - 0.12, 600, 0.8, 0, false); k.play('buzz', w(10, 'low') - 0.1, { f: 196, dur: 0.5, gain: 0.3 });
    pop_(w(11, 'thyroid') - 0.12, 500); pop_(w(12, 'brain') - 0.12, 800); pop_(w(12, 'liver') - 0.12, 900); k.play('sparkle', w(13, 'nap') - 0.1, { n: 5, gain: 0.45 });
    k.play('riser', w(14, 'burns') - 0.2, { dur: 0.7, gain: 0.4 }); big_(w(14, 'forty') - 0.12, 'E6');
    pop_(w(17, 'ancestors') - 0.1, 600); k.play('impact', w(17, 'lost') - 0.1, { gain: 0.6 }); pop_(w(18, 'meats') - 0.12, 700, 0.8, 0, false); k.play('error', w(18, 'savory') - 0.08, { f: 'A3', gain: 0.4 });
    big_(w(19, 'one') - 0.1, 'C6'); k.play('success', w(19, 'panda') + 0.05, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(19, 'panda') + 0.05, { n: 8, gain: 0.7 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.VIDEO_W = W; window.VIDEO_H = HH;

})();
