// ===== Kawaii Anime, vertical: "Why does chili feel hot when it isn't?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'ぽよんもぐもぐガーンやったーキラぴょん';
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

  // ---------- story: "Why does chili feel hot when it isn't?" Kawaii Anime, 1080x1920 ----------
  const W = 1080, HH = 1920;
  const P_ = [{"s": 0.25, "e": 1.4, "text": "Chili isn't hot.", "words": [["chili", 0.25], ["isnt", 0.73], ["hot", 1.11]]}, {"s": 1.95, "e": 4.13, "text": "You've been fooled every single time.", "words": [["youve", 1.95], ["been", 2.31], ["fooled", 2.6], ["every", 3.04], ["single", 3.4], ["time", 3.84]]}, {"s": 4.68, "e": 5.92, "text": "Put one in the fridge,", "words": [["put", 4.68], ["one", 4.9], ["in", 5.12], ["the", 5.26], ["fridge", 5.48]]}, {"s": 6.22, "e": 7.38, "text": "and it still burns.", "words": [["and", 6.22], ["it", 6.45], ["still", 6.61], ["burns", 7.0]]}, {"s": 7.93, "e": 10.41, "text": "Your tongue is covered in tiny heat alarms.", "words": [["your", 7.93], ["tongue", 8.22], ["is", 8.64], ["covered", 8.78], ["in", 9.28], ["tiny", 9.42], ["heat", 9.7], ["alarms", 9.98]]}, {"s": 10.96, "e": 12.01, "text": "They stay quiet,", "words": [["they", 10.96], ["stay", 11.28], ["quiet", 11.6]]}, {"s": 12.31, "e": 15.59, "text": "until something hits about forty-three degrees Celsius,", "words": [["until", 12.31], ["something", 12.66], ["hits", 13.29], ["about", 13.57], ["fortythree", 13.92], ["degrees", 14.61], ["celsius", 15.1]]}, {"s": 15.89, "e": 17.78, "text": "that's a hundred and nine Fahrenheit.", "words": [["thats", 15.89], ["a", 16.21], ["hundred", 16.27], ["and", 16.71], ["nine", 16.9], ["fahrenheit", 17.15]]}, {"s": 18.33, "e": 21.13, "text": "But chili carries a molecule called capsaicin,", "words": [["but", 18.33], ["chili", 18.54], ["carries", 18.9], ["a", 19.41], ["molecule", 19.48], ["called", 20.05], ["capsaicin", 20.49]]}, {"s": 21.43, "e": 23.29, "text": "and it fits that alarm like a key.", "words": [["and", 21.43], ["it", 21.65], ["fits", 21.79], ["that", 22.08], ["alarm", 22.36], ["like", 22.72], ["a", 23.0], ["key", 23.07]]}, {"s": 23.84, "e": 26.15, "text": "The alarm goes off at body temperature,", "words": [["the", 23.84], ["alarm", 24.05], ["goes", 24.41], ["off", 24.7], ["at", 24.92], ["body", 25.06], ["temperature", 25.35]]}, {"s": 26.45, "e": 28.76, "text": "and yells to your brain: this is burning!", "words": [["and", 26.45], ["yells", 26.66], ["to", 27.02], ["your", 27.17], ["brain", 27.46], ["this", 27.82], ["is", 28.11], ["burning", 28.25]]}, {"s": 29.31, "e": 30.74, "text": "So you even start to sweat,", "words": [["so", 29.31], ["you", 29.44], ["even", 29.65], ["start", 29.92], ["to", 30.26], ["sweat", 30.4]]}, {"s": 31.04, "e": 32.97, "text": "but nothing's actually heating up.", "words": [["but", 31.04], ["nothings", 31.25], ["actually", 31.8], ["heating", 32.35], ["up", 32.83]]}, {"s": 33.52, "e": 34.79, "text": "Water won't save you,", "words": [["water", 33.52], ["wont", 33.92], ["save", 34.24], ["you", 34.56]]}, {"s": 35.09, "e": 36.79, "text": "capsaicin won't mix with it.", "words": [["capsaicin", 35.09], ["wont", 35.79], ["mix", 36.1], ["with", 36.33], ["it", 36.64]]}, {"s": 37.34, "e": 39.58, "text": "Milk's protein, casein, wraps it up,", "words": [["milks", 37.34], ["protein", 37.76], ["casein", 38.34], ["wraps", 38.83], ["it", 39.25], ["up", 39.41]]}, {"s": 39.88, "e": 41.11, "text": "and carries it away.", "words": [["and", 39.88], ["carries", 40.11], ["it", 40.65], ["away", 40.8]]}, {"s": 41.66, "e": 43.1, "text": "Birds don't even feel it,", "words": [["birds", 41.66], ["dont", 42.04], ["even", 42.34], ["feel", 42.64], ["it", 42.95]]}, {"s": 43.4, "e": 44.97, "text": "so they happily eat chilis,", "words": [["so", 43.4], ["they", 43.54], ["happily", 43.83], ["eat", 44.33], ["chilis", 44.54]]}, {"s": 45.27, "e": 46.47, "text": "and spread the seeds.", "words": [["and", 45.27], ["spread", 45.49], ["the", 45.91], ["seeds", 46.12]]}, {"s": 47.02, "e": 49.54, "text": "What's the spiciest chili that's ever fooled you?", "words": [["whats", 47.02], ["the", 47.35], ["spiciest", 47.54], ["chili", 48.06], ["thats", 48.38], ["ever", 48.7], ["fooled", 48.96], ["you", 49.35]]}];
  const BEATS = [
    { id: 'hook', s: P_[0].s, e: P_[1].e }, { id: 'fridge', s: P_[2].s, e: P_[3].e }, { id: 'tongue', s: P_[4].s, e: P_[5].e },
    { id: 'thermo', s: P_[6].s, e: P_[7].e }, { id: 'key', s: P_[8].s, e: P_[9].e }, { id: 'yell', s: P_[10].s, e: P_[11].e },
    { id: 'sweat', s: P_[12].s, e: P_[13].e }, { id: 'water', s: P_[14].s, e: P_[15].e }, { id: 'milk', s: P_[16].s, e: P_[17].e },
    { id: 'bird', s: P_[18].s, e: P_[20].e }, { id: 'end', s: P_[21].s, e: P_[21].e },
  ];
  const w = (i, word) => { const f = P_[i].words.find((x) => x[0] === word); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  const CUTS = BEATS.slice(1).map((b, i) => ({ t: (BEATS[i].e + b.s) / 2, shape: i % 3 === 2 ? 'heart' : 'star' }));
  const CUTW = 0.5;
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.05, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = C.butter) => { const p = pop(t, t0); if (p.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  function bgV(ctx, t, th, seed) { ctx.save(); ctx.scale(1.5, 1.5); bg(ctx, W / 1.5, HH / 1.5, t, th, seed); ctx.restore(); }

  // ---------- original cast ----------
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
    const fill = P.fire ? '#ff8d80' : C.butter, shade = P.fire ? '#ef5c6c' : C.butterS;
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
    if (ring > 0.05) { const q = (Math.floor(P.t * 7.5) % 2) * 14; ctx.save(); ctx.strokeStyle = C.red; ctx.lineCap = 'round'; ctx.lineWidth = 9 * s + 2; for (const sd of [-1, 1]) for (const r of [150, 190]) { ctx.beginPath(); ctx.arc(x, y - 6 * s, (r + q) * s, sd > 0 ? -0.55 : Math.PI - 0.55, sd > 0 ? 0.55 : Math.PI + 0.55); ctx.stroke(); } ctx.restore(); }
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
  function milk(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); const sq = P.sq || [1, 1]; ctx.scale(s * sq[0], s * sq[1]);
    cel(ctx, roundPoly([[-150, -120], [-90, -240], [90, -240], [150, -120]], 16), C.sky, C.skyS, -6, -6, 6);
    cel(ctx, rrP(-70, -278, 140, 44, 10), C.skyD, '#3f8fd0', -3, -3, 6);
    cel(ctx, rrP(-150, -124, 300, 340, 26), C.cream, C.creamS, -11, -11, 6);
    eye(ctx, -48, 10, 30, 39, '#3f8fd0', P.eyes || 'normal', 1); eye(ctx, 48, 10, 30, 39, '#3f8fd0', P.eyes || 'normal', -1);
    blush(ctx, -92, 58, 17, 10); blush(ctx, 92, 58, 17, 10); mouth(ctx, 0, 66, 15, P.mouth || 'smile');
    ctx.restore();
  }
  function bird(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); const sq = P.sq || [1, 1]; ctx.scale(s * sq[0], s * sq[1]);
    cel(ctx, roundPoly([[-150, 30], [-290, -20], [-270, 70], [-150, 100]], 12), C.skyD, '#3f8fd0', -4, -4, 6);
    for (const sd of [-36, 36]) { ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(sd, 180); ctx.lineTo(sd, 232); ctx.moveTo(sd - 24, 240); ctx.lineTo(sd + 24, 240); ctx.stroke(); ctx.restore(); }
    cel(ctx, ellP(0, 0, 190, 190), C.sky, C.skyS, -14, -14, 6);
    ctx.fillStyle = C.cream; ctx.fill(ellP(10, 90, 118, 88));
    const flap = Math.sin((P.t || 0) * 16) * 0.2;
    ctx.save(); ctx.translate(-130, 30); ctx.rotate(-0.2 + flap); cel(ctx, ellP(-10, 22, 54, 84, 0.3), C.skyD, '#3f8fd0', -5, -5, 6); ctx.restore();
    const e = P.eyes || 'normal';
    eye(ctx, -28, -40, 32, 42, '#3a4fa0', e, 1); eye(ctx, 92, -40, 32, 42, '#3a4fa0', e, -1);
    blush(ctx, -64, 8, 18, 10); blush(ctx, 132, 8, 18, 10);
    cel(ctx, roundPoly([[8, 0], [78, 0], [44, 56]], 10), C.butterD, C.butterS, -3, -3, 6);
    ctx.restore();
  }
  function seed(ctx, x, y, r) { const p = ellP(x, y, r, r * 0.72, 0.4); cel(ctx, p, C.butter, C.butterS, -2, -2, 4.5); }
  function sprout(ctx, x, y, k) {
    if (k <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 20; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -100); ctx.stroke(); ctx.strokeStyle = C.mintD; ctx.lineWidth = 10; ctx.stroke();
    cel(ctx, ellP(-44, -116, 48, 26, 0.4), C.mintD, '#2c946f', -3, -3, 5); cel(ctx, ellP(44, -116, 48, 26, -0.4), C.mintD, '#2c946f', -3, -3, 5); ctx.restore();
  }

  // ---------- scenes ----------
  const scenes = [
    function hook(ctx, t) {
      bgV(ctx, t, TH.pink, 11);
      big(ctx, 'NOT', 540, 400, 190, t, w(0, 'isnt') - 0.15, { line: C.skyD });
      big(ctx, 'HOT!', 540, 590, 210, t, w(0, 'hot') - 0.12, { line: C.pinkD, fill: C.butter });
      const fooled = t >= w(1, 'fooled') - 0.1;
      const p = pop(t, 0.05, 1.2);
      chili(ctx, 540, 960 + bob(t, 0, 10), 1.75 * p.s, { sq: [p.sx / (p.s || 1), p.sy / (p.s || 1)], eyes: fooled ? 'happy' : 'normal', mouth: fooled ? 'smile' : 'w', rot: 0.06 * Math.sin(t * 3) });
      const pf = pop(t, w(1, 'fooled') - 0.1, 1.3);
      if (pf.s > 0) { ctx.save(); ctx.translate(540, 1540); ctx.rotate(-0.04); ctx.scale(pf.sx, pf.sy); kText(ctx, 'FOOLED!', 0, 0, 170, { line: C.lavD, outer: C.plum, ow: 0.1, lw: 0.17 }); ctx.restore(); }
      twinkles(ctx, W, HH, t, 21, 14, (x, y) => y > 250 && y < 1600 && x > 220 && x < 860);
    },
    function fridgeS(ctx, t) {
      bgV(ctx, t, { base: '#d9efff', dot: '#c6e7ff', acc: '#fff', kind: 'stars' }, 12);
      const p = pop(t, w(2, 'put') - 0.1); ctx.save(); ctx.translate(540, 900); ctx.scale(p.sx, p.sy); ctx.translate(-540, -900); fridge(ctx, 540, 900, 1.25);
      const r = H.rng(3); for (let i = 0; i < 7; i++) { const x = r.range(230, 850), y = r.range(420, 680); snow(ctx, x, y + 8 * Math.sin(t * 2 + i), 26); }
      const burn = t >= w(3, 'burns') - 0.1;
      const p2 = pop(t, w(2, 'fridge') - 0.15);
      if (burn) for (let i = 0; i < 5; i++) { const a = pop(t, w(3, 'burns') - 0.1 + i * 0.05).s; flame(ctx, 300 + i * 120, 1140 - [0, 70, 110, 70, 0][i], 1.15 * a, t, i); }
      if (p2.s > 0) chili(ctx, 540, 900, 1.0 * p2.s, { rot: burn ? 0.05 * Math.sin(t * 28) : 0, eyes: burn ? 'squeeze' : 'normal', mouth: burn ? 'O' : 'smile' });
      ctx.restore();
      label(ctx, 'COLD', 280, 300, 80, t, w(2, 'fridge') - 0.1, C.sky);
      if (burn) big(ctx, 'STILL BURNS!', 540, 1610, 112, t, w(3, 'burns') - 0.12, { line: C.red });
    },
    function tongueS(ctx, t) {
      bgV(ctx, t, TH.lav, 13);
      big(ctx, 'HEAT', 540, 300, 170, t, w(4, 'heat') - 0.12, { line: C.pinkD });
      big(ctx, 'ALARMS', 540, 500, 170, t, w(4, 'alarms') - 0.12, { line: C.pinkD, fill: C.butter });
      const up = H.ease.out(H.clamp((t - w(4, 'your') + 0.1) / 0.45));
      ctx.save(); ctx.translate(0, (1 - up) * 800); tongue(ctx, 540, 640);
      const spots = [[300, 880], [540, 800], [780, 880], [200, 1130], [430, 1090], [660, 1090], [880, 1130], [320, 1370], [560, 1340], [790, 1370]];
      const quiet = t >= w(5, 'stay') - 0.1;
      spots.forEach(([x, y], i) => { const q = pop(t, w(4, 'tiny') - 0.1 + i * 0.05, 1.2); if (q.s > 0) { const b = quiet ? 0 : 4 * Math.sin(t * 6 + i); alarm(ctx, x, y + b, 0.74 * q.s, { eyes: quiet ? 'blink' : 'normal', mouth: quiet ? 'flat' : 'w', t }); } });
      ctx.restore();
      if (quiet) { const z = pop(t, w(5, 'quiet') - 0.15); if (z.s > 0) { ctx.save(); ctx.translate(540, 1600); ctx.scale(z.sx, z.sy); tag(ctx, 0, 0, 'shhh... quiet', C.mint, 1, 72); ctx.restore(); } }
    },
    function thermoS(ctx, t) {
      bgV(ctx, t, TH.butter, 14);
      const t0 = w(6, 'hits') - 0.5, t1 = w(6, 'fortythree');
      const f = 0.25 + 0.6 * H.ease.inOut(H.clamp((t - t0) / (t1 - t0)));
      const hit = t >= t1 - 0.1;
      thermo(ctx, 300, 1320, 2.1, f, hit ? C.red : C.skyD);
      const a = pop(t, t1 - 0.1, 1.2);
      alarm(ctx, 760, 1120, 1.55, { eyes: hit ? 'shock' : 'blink', mouth: hit ? 'O' : 'flat', ring: hit ? 1 : 0, t, fire: hit });
      const n = pop(t, t1 - 0.12, 1.3);
      if (n.s > 0) { ctx.save(); ctx.translate(690, 480); ctx.scale(n.sx, n.sy); kText(ctx, '43°C', 0, 0, 230, { fill: C.butter, line: C.red, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); }
      const n2 = pop(t, w(7, 'hundred') - 0.12, 1.3);
      if (n2.s > 0) { ctx.save(); ctx.translate(700, 700); ctx.scale(n2.sx, n2.sy); kText(ctx, '109°F', 0, 0, 170, { fill: C.white, line: C.skyD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); }
      if (hit) impactLines(ctx, 760, 1120, 220, t, t1 - 0.05, 10, C.red);
    },
    function keyS(ctx, t) {
      bgV(ctx, t, TH.mint, 15);
      const nm = w(8, 'capsaicin') - 0.15;
      // chili on the left hands over the key
      const out = H.clamp((t - w(8, 'but') + 0.05) / 0.3);
      const fit = H.ease.inOut(H.clamp((t - w(9, 'fits') + 0.1) / (w(9, 'key') - w(9, 'fits') - 0.05)));
      const inK = t >= w(9, 'key') - 0.1;
      if (t < w(9, 'and')) chili(ctx, 250, 1240, 1.1 * pop(t, w(8, 'chili') - 0.12).s, { eyes: t > nm ? 'happy' : 'normal' });
      const al = pop(t, w(9, 'alarm') - 0.35);
      const ax = 760, ay = 1180;
      if (al.s > 0) alarm(ctx, ax, ay, 1.45 * al.s, { eyes: inK ? 'shock' : 'blink', mouth: inK ? 'O' : 'flat', ring: inK ? 1 : 0, t, fire: inK });
      const kp = pop(t, w(8, 'molecule') - 0.15, 1.2);
      if (kp.s > 0) {
        const kx = H.lerp(540, 200, fit), ky = H.lerp(800, 1190, fit), sc = H.lerp(1.5, 1.0, fit);
        capKey(ctx, kx, ky, sc * kp.s, { eyes: inK ? 'star' : 'happy', rot: 0.05 * Math.sin(t * 4) * (1 - fit) });
      }
      big(ctx, 'CAPSAICIN', 540, 470, 140, t, nm, { line: '#ee7238', fill: C.butter });
      if (inK) big(ctx, 'CLICK!', 540, 1610, 150, t, w(9, 'key') - 0.1, { line: C.red });
      if (inK) impactLines(ctx, 560, 1190, 90, t, w(9, 'key') - 0.05, 10);
    },
    function yellS(ctx, t) {
      bgV(ctx, t, { base: '#ffe0e4', dot: '#ffcbd4', acc: '#fff3b0', kind: 'hearts' }, 16);
      alarm(ctx, 300, 1290, 1.5, { eyes: 'shock', mouth: 'O', ring: 1, t, fire: true });
      const lb = pop(t, w(10, 'body') - 0.12, 1.2);
      if (lb.s > 0) { ctx.save(); ctx.translate(300, 1610); ctx.scale(lb.sx, lb.sy); kText(ctx, '37°C', 0, 0, 170, { fill: C.butter, line: C.skyD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); label(ctx, 'body temp', 720, 1570, 74, t, w(10, 'temperature') - 0.15, C.sky); }
      const pts = bez([410, 1110], [560, 900], [680, 800], [720, 690]);
      dotted(ctx, pts, H.ease.out(H.clamp((t - w(11, 'yells') + 0.1) / 0.6)), C.red, 11, 38, 1.5);
      const bp = pop(t, w(11, 'brain') - 0.15, 1.1);
      const burn = t >= w(11, 'burning') - 0.12;
      if (bp.s > 0) brain(ctx, 720, 500, 1.3 * bp.s, { eyes: burn ? 'swirl' : 'shock', mouth: burn ? 'wobble' : 'O', sq: squash(t, w(11, 'burning') - 0.1) });
      if (burn) { const b = pop(t, w(11, 'burning') - 0.12, 1.2); ctx.save(); ctx.translate(380, 880); ctx.rotate(-0.05); ctx.scale(b.sx, b.sy); kText(ctx, 'BURNING!', 0, 0, 130, { fill: C.butter, line: C.red, outer: C.plum, ow: 0.1, lw: 0.18 }); ctx.restore(); for (let i = 0; i < 3; i++) flame(ctx, 170 + i * 160 + 280, 280, 0.6 * b.s, t, i); }
    },
    function sweatS(ctx, t) {
      bgV(ctx, t, TH.pink, 17);
      const p = pop(t, w(12, 'so') - 0.1);
      const sw = t >= w(12, 'sweat') - 0.1;
      kid(ctx, 540, 800, 2.2 * p.s, { eyes: sw ? 'squeeze' : 'shock', mouth: 'wobble' });
      if (sw) { big(ctx, 'SWEATY!', 540, 370, 170, t, w(12, 'sweat') - 0.12, { line: C.skyD }); for (let i = 0; i < 4; i++) { const u = ((t - w(12, 'sweat')) * 0.9 + i * 0.25) % 1; const q = pop(t, w(12, 'sweat') - 0.1 + i * 0.06).s; sweat(ctx, [190, 900, 140, 950][i], 560 + i * 90 + u * 120, 2.1 * q, i % 2 ? -0.25 : 0.25); } }
      const nh = w(13, 'nothings') - 0.12;
      if (t >= nh) { const q = pop(t, nh, 1.2); ctx.save(); ctx.translate(540, 1500); ctx.scale(q.sx, q.sy); cel(ctx, rrP(-430, -130, 860, 220, 60), C.white, C.creamS, -6, -6, 6); kText(ctx, '+0°', -240, 40, 150, { fill: C.butter, line: C.mintD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.font = `700 62px ${FONT}`; ctx.fillStyle = C.plum; ctx.textAlign = 'left'; ctx.fillText('no real heat', -70, 16); ctx.fillStyle = C.mintD; ctx.fillText('on your tongue', -70, 76); ctx.restore(); }
    },
    function waterS(ctx, t) {
      bgV(ctx, t, { base: '#d9efff', dot: '#c6e7ff', acc: '#fff', kind: 'dots' }, 18);
      big(ctx, "WON'T MIX!", 540, 400, 140, t, w(15, 'wont') - 0.12, { line: C.skyD, fill: C.butter });
      const p = pop(t, w(14, 'water') - 0.12);
      if (p.s > 0) { ctx.save(); ctx.translate(540, 1000); ctx.scale(p.sx, p.sy);
        const gl = new Path2D(); gl.moveTo(-340, -380); gl.lineTo(-280, 520); gl.quadraticCurveTo(0, 560, 280, 520); gl.lineTo(340, -380); gl.closePath();
        ctx.fillStyle = '#ffffffb0'; ctx.fill(gl);
        ctx.save(); ctx.clip(gl); ctx.fillStyle = C.skyS; ctx.beginPath(); ctx.moveTo(-400, -160); for (let x = -400; x <= 400; x += 40) ctx.lineTo(x, -160 + 10 * Math.sin(x * 0.02 + t * 3)); ctx.lineTo(400, 600); ctx.lineTo(-400, 600); ctx.closePath(); ctx.fill(); ctx.restore();
        ol(ctx, gl, 7); ctx.restore(); }
      const m = pop(t, w(15, 'capsaicin') - 0.12, 1.2);
      if (m.s > 0) { const u = t - w(15, 'capsaicin'); const hop = Math.abs(Math.sin(u * 4.2)) * 60; capKey(ctx, 480, 800 - hop, 1.05 * m.s, { eyes: 'happy', rot: 0.08 * Math.sin(t * 6) }); ctx.save(); ctx.strokeStyle = C.plum; ctx.restore(); }
      const d = pop(t, w(15, 'mix') - 0.1);
      if (d.s > 0) { ctx.save(); ctx.translate(540, 1240); ctx.scale(d.sx, d.sy); ctx.lineCap = 'round'; for (const [c, lw] of [[C.plum, 62], [C.red, 40]]) { ctx.strokeStyle = c; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(-110, -110); ctx.lineTo(110, 110); ctx.moveTo(110, -110); ctx.lineTo(-110, 110); ctx.stroke(); } ctx.restore(); }
    },
    function milkS(ctx, t) {
      bgV(ctx, t, TH.butter, 19);
      const p = pop(t, w(16, 'milks') - 0.12);
      if (p.s > 0) milk(ctx, 280, 1260, 1.15 * p.s, { sq: [p.sx / (p.s || 1), p.sy / (p.s || 1)], eyes: t > w(17, 'away') ? 'happy' : 'normal' });
      big(ctx, 'CASEIN', 540, 430, 190, t, w(16, 'casein') - 0.12, { line: C.mintD, fill: C.white });
      const wrap = H.ease.out(H.clamp((t - w(16, 'wraps') + 0.1) / 0.5));
      const away = H.ease.inOut(H.clamp((t - w(17, 'carries') + 0.1) / (w(17, 'away') - w(17, 'carries') + 0.5)));
      const x = H.lerp(690, 1320, away), y = H.lerp(850, 660, away) + 10 * Math.sin(t * 5);
      const kp = pop(t, w(16, 'protein') - 0.2);
      if (kp.s > 0) capKey(ctx, x - 30, y, 0.9 * kp.s, { eyes: wrap > 0.6 ? 'blink' : 'normal', mouth: 'w' });
      if (wrap > 0) { ctx.save(); ctx.globalAlpha = 0.55; const ball = ellP(x, y, 330 * wrap, 250 * wrap); ctx.fillStyle = C.white; ctx.fill(ball); ctx.globalAlpha = 1; ol(ctx, ball, 6); ctx.restore(); shine(ctx, x - 170 * wrap, y - 130 * wrap, 40 * wrap, 18 * wrap, -0.6); }
      if (t > w(16, 'wraps') - 0.1) label(ctx, 'wraps it up', 730, 1200, 72, t, w(16, 'wraps') - 0.1, C.mint);
      if (t > w(17, 'away') - 0.2) big(ctx, 'BYE BYE!', 540, 1640, 120, t, w(17, 'away') - 0.15, { line: C.pinkD });
    },
    function birdS(ctx, t) {
      bgV(ctx, t, TH.mint, 20);
      const p = pop(t, w(18, 'birds') - 0.12);
      const eat = t >= w(19, 'eat') - 0.1, ss = t >= w(20, 'spread') - 0.12;
      const by = ss ? 770 : 880, bb = bob(t, 0, 10);
      if (p.s > 0) bird(ctx, ss ? H.lerp(480, 620, H.clamp((t - w(20, 'spread')) / 0.5)) : 480, by + bb, 1.4 * p.s, { eyes: eat ? 'star' : 'normal', t });
      if (t < w(19, 'eat') + 0.1) { const q = pop(t, w(19, 'so') - 0.12); if (q.s > 0) { const u = H.clamp((t - w(19, 'eat') + 0.2) / 0.3); chili(ctx, H.lerp(800, 610, u), H.lerp(1180, 950, u), 0.8 * q.s * (1 - u * 0.95), { rot: 0.5 }); } }
      big(ctx, 'NO BURN!', 540, 370, 170, t, w(18, 'feel') - 0.12, { line: C.mintD, fill: C.butter });
      if (eat && !ss) { const q = pop(t, w(19, 'eat')); kana(ctx, 'もぐもぐ', 540, 1400, 96, -0.1, q.s, C.pink); }
      if (ss) { // seeds fall, sprouts grow
        ctx.fillStyle = '#b48a5a'; ctx.fillRect(0, 1480, W, 440); ctx.fillStyle = C.plum; ctx.fillRect(0, 1474, W, 8);
        [[200, 0], [430, 0.12], [680, 0.24], [900, 0.36]].forEach(([x, d], i) => { const u = H.clamp((t - w(20, 'spread') - d) / 0.5); if (u < 1 && u > 0) seed(ctx, x, H.lerp(900, 1470, u * u), 26); sprout(ctx, x, 1478, pop(t, w(20, 'seeds') + d - 0.15).s * 1.4); });
      }
    },
    function endS(ctx, t) {
      bgV(ctx, t, TH.lav, 22);
      const t0 = w(21, 'whats') - 0.1;
      big(ctx, 'SPICIEST', 540, 380, 180, t, w(21, 'spiciest') - 0.12, { line: C.red, fill: C.butter });
      big(ctx, 'CHILI?', 540, 570, 190, t, w(21, 'chili') - 0.12, { line: C.pinkD });
      const p = pop(t, t0, 1.2);
      chili(ctx, 540, 1000 + bob(t, 0, 10), 1.5 * p.s, { eyes: t >= w(21, 'fooled') - 0.1 ? 'happy' : 'star', mouth: 'smile', rot: 0.08 * Math.sin(t * 3.5) });
      const q = pop(t, w(21, 'fooled') - 0.1, 1.2);
      if (q.s > 0) { ctx.save(); ctx.translate(540, 1540); ctx.scale(q.sx, q.sy); cel(ctx, rrP(-400, -90, 800, 170, 80), C.white, C.creamS, -6, -6, 6); ctx.font = `700 72px ${FONT}`; ctx.textAlign = 'center'; ctx.fillStyle = C.plum; ctx.fillText('tell me below!', 0, 18); ctx.restore(); }
      confetti(ctx, t, w(21, 'you') + 0.05, 540, 1100, 60, 9);
      twinkles(ctx, W, HH, t, 23, 12, (x, y) => y > 250 && y < 1600 && x > 200 && x < 880);
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
    pop_(0.05, 500, 0.9, 0, false); big_(w(0, 'hot') - 0.1); k.play('error', w(1, 'fooled') - 0.05, { f: 'A3', gain: 0.35 }); 
    pop_(w(2, 'put') - 0.1, 500); k.play('sparkle', w(2, 'fridge') - 0.1, { n: 5, gain: 0.5 }); k.play('impact', w(3, 'burns') - 0.08, { gain: 0.6 }); 
    for (let i = 0; i < 10; i++) pop_(w(4, 'tiny') - 0.1 + i * 0.05, 700 + i * 60, 0.5);
    k.play('riser', w(6, 'hits') - 0.5, { dur: w(6, 'fortythree') - w(6, 'hits') + 0.5, gain: 0.55 }); k.play('impact', w(6, 'fortythree') - 0.08, { gain: 0.7 }); big_(w(7, 'hundred') - 0.1, 'A5');
    pop_(w(8, 'molecule') - 0.15, 600, 0.8, 0, false); big_(w(8, 'capsaicin') - 0.12, 'C6'); k.play('stamp', w(9, 'key') - 0.08, { gain: 0.6 });
    k.play('buzz', w(10, 'alarm') - 0.05, { f: 196, dur: 0.5, gain: 0.3 }); big_(w(10, 'body') - 0.1, 'G5'); pop_(w(11, 'brain') - 0.1, 800, 0.8, 0.3, false); k.play('impact', w(11, 'burning') - 0.1, { gain: 0.8 }); k.play('error', w(11, 'burning'), { f: 'A3', gain: 0.4 });
    pop_(w(12, 'so') - 0.1, 500); for (let i = 0; i < 4; i++) pop_(w(12, 'sweat') - 0.1 + i * 0.06, 1000 + i * 120, 0.5); k.play('ding', w(13, 'nothings'), { f: 'C5', gain: 0.3 });
    pop_(w(14, 'water') - 0.1, 450, 0.8, 0, false); k.play('error', w(15, 'mix') - 0.08, { f: 'A3', gain: 0.5 });
    pop_(w(16, 'milks') - 0.1, 600, 0.8, 0, false); big_(w(16, 'casein') - 0.1, 'E6'); k.play('sparkle', w(16, 'wraps'), { n: 6, gain: 0.6 }); k.play('success', w(17, 'away') - 0.1, { f: 'C6', gain: 0.4 });
    pop_(w(18, 'birds') - 0.1, 800, 0.8, 0, false); big_(w(18, 'feel') - 0.1, 'G6'); pop_(w(19, 'eat'), 1000); pop_(w(19, 'eat') + 0.15, 1100); pop_(w(19, 'eat') + 0.3, 1200);
    [0, 0.12, 0.24, 0.36].forEach((d, i) => pop_(w(20, 'seeds') + d - 0.15, 700 + i * 120, 0.6));
    big_(w(21, 'spiciest') - 0.1, 'C6'); k.play('success', w(21, 'you') + 0.05, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(21, 'you') + 0.05, { n: 8, gain: 0.7 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.VIDEO_W = W; window.VIDEO_H = HH;

})();
