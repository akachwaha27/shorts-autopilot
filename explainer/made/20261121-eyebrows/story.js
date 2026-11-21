// ===== Kawaii Anime, vertical: "Why do we have eyebrows?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'キラッえっ？ムカッびっくりなるほどポタポタ';
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

  // ---------- props / emotes ----------
  function tag(ctx, x, y, label, fill, flip = 1, size = 28) {
    ctx.save(); ctx.translate(x, y); ctx.scale(flip, 1);
    ctx.font = `700 ${size}px ${FONT}`; const w = Math.max(ctx.measureText(label).width + size * 1.1, size * 1.6), h = size * 1.5;
    cel(ctx, rrP(-w / 2, -h / 2, w, h, h / 2), fill, H.rgba(H.mix(fill, C.plum, 0.15)), -3, -3, 3.5);
    ctx.fillStyle = C.plum; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, 0, 2);
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
  const P_ = [{"s":0.25,"e":4.58,"text":"Lose your eyebrows and 54% of people can't name your face.","words":[["lose",0.25],["your",0.63],["eyebrows",1.02],["and",1.79],["54",2.08],["of",2.27],["people",2.46],["cant",3.04],["name",3.42],["your",3.81],["face",4.19]]},{"s":4.98,"e":8.07,"text":"MIT scientists tested it in 2003.","words":[["mit",4.98],["scientists",5.33],["tested",6.47],["it",7.16],["in",7.39],["2003",7.61]]},{"s":8.42,"e":11.46,"text":"They showed people famous faces with the eyes erased,","words":[["they",8.42],["showed",8.7],["people",9.12],["famous",9.53],["faces",9.94],["with",10.29],["the",10.57],["eyes",10.77],["erased",11.05]]},{"s":11.92,"e":13.64,"text":"and they still named sixty percent.","words":[["and",11.92],["they",12.1],["still",12.34],["named",12.64],["sixty",12.93],["percent",13.23]]},{"s":14.02,"e":15.68,"text":"But erase just the eyebrows,","words":[["but",14.02],["erase",14.24],["just",14.6],["the",14.89],["eyebrows",15.1]]},{"s":16.01,"e":17.61,"text":"and it dropped to forty-six.","words":[["and",16.01],["it",16.23],["dropped",16.37],["to",16.88],["fortysix",17.03]]},{"s":18.0,"e":19.75,"text":"So why do we even have them?","words":[["so",18.0],["why",18.16],["do",18.41],["we",18.58],["even",18.75],["have",19.08],["them",19.42]]},{"s":20.21,"e":22.49,"text":"Picture sweat rolling down your forehead.","words":[["picture",20.21],["sweat",20.67],["rolling",20.99],["down",21.45],["your",21.71],["forehead",21.97]]},{"s":22.87,"e":25.81,"text":"Your brow bone and that arch catch it like a gutter,","words":[["your",22.87],["brow",23.16],["bone",23.44],["and",23.73],["that",23.95],["arch",24.23],["catch",24.52],["it",24.88],["like",25.02],["a",25.31],["gutter",25.38]]},{"s":26.32,"e":28.83,"text":"and the hairs all point out toward your ears,","words":[["and",26.32],["the",26.53],["hairs",26.74],["all",27.09],["point",27.3],["out",27.64],["toward",27.85],["your",28.27],["ears",28.55]]},{"s":29.25,"e":31.57,"text":"so the drops slide off to the sides,","words":[["so",29.25],["the",29.42],["drops",29.66],["slide",30.08],["off",30.49],["to",30.74],["the",30.91],["sides",31.16]]},{"s":31.92,"e":33.29,"text":"and not into your eyes.","words":[["and",31.92],["not",32.15],["into",32.38],["your",32.68],["eyes",32.99]]},{"s":33.75,"e":34.62,"text":"Rain too.","words":[["rain",33.75],["too",34.25]]},{"s":35.02,"e":38.42,"text":"Each brow has about 250 hairs on the job.","words":[["each",35.02],["brow",35.45],["has",35.87],["about",36.19],["250",36.72],["hairs",37.04],["on",37.57],["the",37.79],["job",38.11]]},{"s":38.88,"e":40.21,"text":"But their biggest job?","words":[["but",38.88],["their",39.1],["biggest",39.47],["job",39.99]]},{"s":40.67,"e":42.07,"text":"Talking without words.","words":[["talking",40.67],["without",41.19],["words",41.7]]},{"s":42.41,"e":44.0,"text":"One brow up means, really?","words":[["one",42.41],["brow",42.65],["up",42.97],["means",43.13],["really",43.52]]},{"s":44.47,"e":46.06,"text":"Both up means surprise!","words":[["both",44.47],["up",44.81],["means",44.97],["surprise",45.39]]},{"s":46.43,"e":49.13,"text":"Pulled down and together? Somebody's grumpy.","words":[["pulled",46.43],["down",46.88],["and",47.18],["together",47.41],["somebodys",48.01],["grumpy",48.68]]},{"s":49.53,"e":51.52,"text":"So can you raise just one eyebrow?","words":[["so",49.53],["can",49.68],["you",49.9],["raise",50.12],["just",50.49],["one",50.78],["eyebrow",51.0]]},{"s":52.0,"e":53.28,"text":"Left, right, or neither?","words":[["left",52.0],["right",52.28],["or",52.64],["neither",52.78]]}];

  // ---------- timing (from phrases.json) ----------
  const BEATS = [
    { id: 'hook', s: P_[0].s, e: P_[1].e, on: 'NO EYEBROWS / 54% / MIT 2003' },
    { id: 'study', s: P_[2].s, e: P_[5].e, on: 'no eyes 60% vs no brows 46%' },
    { id: 'why', s: P_[6].s, e: P_[6].e, on: 'WHY?' },
    { id: 'sweat', s: P_[7].s, e: P_[11].e, on: 'sweat, brow bone, arch, gutter, hairs -> ears, to the sides, dry eyes' },
    { id: 'rain', s: P_[12].s, e: P_[12].e, on: 'RAIN TOO' },
    { id: 'hairs', s: P_[13].s, e: P_[13].e, on: '~250 hairs' },
    { id: 'job', s: P_[14].s, e: P_[15].e, on: 'BIGGEST JOB? / NO WORDS' },
    { id: 'faces', s: P_[16].s, e: P_[18].e, on: 'one up REALLY? / both up SURPRISE / down GRUMPY' },
    { id: 'end', s: P_[19].s, e: P_[20].e, on: 'ONE BROW? LEFT RIGHT NEITHER' },
  ];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.05, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = C.butter) => { const p = pop(t, t0); if (p.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  function bgV(ctx, t, th, seed) { ctx.save(); ctx.scale(1.5, 1.5); bg(ctx, W / 1.5, HH / 1.5, t, th, seed); ctx.restore(); }
  const numPop = (ctx, str, x, y, size, t, t0, o = {}) => { const n = pop(t, t0, 1.3); if (n.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(n.sx, n.sy); kText(ctx, str, 0, 0, size, { fill: o.fill || C.white, line: o.line || C.skyD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); };
  const grow = (t, t0, d) => H.ease.out(H.clamp((t - t0) / d));
  function stampLike(ctx, str, x, y, size, t, t0, rot = -0.08) {
    const p = pop(t, t0, 1.6); if (p.s <= 0) return; const k = 1 + 0.4 * Math.exp(-14 * p.u);
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(p.sx * k, p.sy * k);
    ctx.font = `700 ${size}px ${FONT}`; const tw = ctx.measureText(str).width + size;
    cel(ctx, rrP(-tw / 2, -size * 0.85, tw, size * 1.5, size * 0.4), C.white, '#ffe0ea', -5, -5, 0);
    ctx.lineWidth = 12; ctx.strokeStyle = C.red; ctx.stroke(rrP(-tw / 2, -size * 0.85, tw, size * 1.5, size * 0.4));
    ctx.fillStyle = C.red; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(str, 0, -size * 0.08);
    ctx.restore();
  }
  function bigX(ctx, x, y, s, prog) {
    if (prog <= 0) return; ctx.save(); ctx.translate(x, y); ctx.lineCap = 'round';
    [[-1, -1, 1, 1], [1, -1, -1, 1]].forEach(([a, b, c, d], i) => { const u = H.clamp(prog * 2 - i); if (u <= 0) return; ctx.beginPath(); ctx.moveTo(a * s, b * s); ctx.lineTo(H.lerp(a, c, u) * s, H.lerp(b, d, u) * s); ctx.lineWidth = 58; ctx.strokeStyle = C.plum; ctx.stroke(); ctx.lineWidth = 40; ctx.strokeStyle = C.red; ctx.stroke(); });
    ctx.restore();
  }

  // ---------- palette for this film ----------
  const SKIN = { b: '#ffe2cf', s: '#f2b996' }, HAIR = { b: '#7a4a5e', s: '#5e3448', hi: '#a8708a' }, BROW = '#5e3448';
  const IRIS = '#6aa8e0';

  // ---------- cast: Momo, a chibi face. (x,y) = face centre. ----------
  // brow geometry in face coords (side -1 = viewer's left). raise lifts the whole brow, inner lifts the inner end
  // (negative = pulled down and together). erase 0..1 removes it from the inner end outward.
  function browPts(side, B) {
    const raise = (B.raise || 0) * 34, inner = (B.inner || 0) * 30, pull = (B.inner || 0) < 0 ? -B.inner * 14 : 0;
    const p0 = [side * (42 - pull), -62 - raise - inner], p1 = [side * 112, -104 - raise], p2 = [side * 160, -66 - raise];
    return Array.from({ length: 25 }, (_, i) => { const u = i / 24, v = 1 - u; return [v * v * p0[0] + 2 * v * u * p1[0] + u * u * p2[0], v * v * p0[1] + 2 * v * u * p1[1] + u * u * p2[1]]; });
  }
  function drawBrow(ctx, side, B, hairs = 0) {
    if (B.erase >= 1) return;
    const pts = browPts(side, B), k0 = Math.floor((B.erase || 0) * 24);
    const seg = pts.slice(k0); if (seg.length < 2) return;
    ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    // tapered: thick near the inner end, thinner at the tail
    for (let pass = 0; pass < 2; pass++) for (let i = 1; i < seg.length; i++) {
      const u = (k0 + i) / 24, wdt = H.lerp(30, 16, u);
      ctx.beginPath(); ctx.moveTo(seg[i - 1][0], seg[i - 1][1]); ctx.lineTo(seg[i][0], seg[i][1]);
      ctx.lineWidth = pass ? wdt : wdt + 10; ctx.strokeStyle = pass ? BROW : C.plum; ctx.stroke();
    }
    // tiny highlight
    if (seg.length > 8) { ctx.strokeStyle = HAIR.hi; ctx.lineWidth = 4; ctx.beginPath(); for (let i = 3; i < Math.min(seg.length, 14); i++) { const [x, y] = seg[i]; i === 3 ? ctx.moveTo(x, y - 6) : ctx.lineTo(x, y - 6); } ctx.stroke(); }
    // hairs: little strokes all angled out toward the ear
    if (hairs > 0) {
      const n = Math.floor(22 * hairs);
      ctx.strokeStyle = HAIR.hi; ctx.lineWidth = 5;
      for (let i = 0; i < n; i++) { const u = (i + 0.5) / 22, [x, y] = pts[Math.round(u * 24)], len = 26; ctx.beginPath(); ctx.moveTo(x - side * 8, y + 12); ctx.lineTo(x + side * len, y - 6); ctx.stroke(); }
    }
    ctx.restore();
  }
  function face(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    // back hair
    union(ctx, [ellP(0, -40, 250, 240)], HAIR.b, 5);
    // ears
    for (const sd of [-1, 1]) { cel(ctx, ellP(sd * 228, 30, 34, 46), SKIN.b, SKIN.s, -3, -3, 4.5); }
    // head
    const head = ellP(0, 10, 228, 212); cel(ctx, head, SKIN.b, SKIN.s, -10, -10, 5);
    // hair cap: stops above the forehead so the brows stay visible
    const cap = new Path2D(); cap.moveTo(-232, -70); cap.bezierCurveTo(-250, -250, 250, -250, 232, -70); cap.bezierCurveTo(200, -150, 120, -178, 40, -180); cap.quadraticCurveTo(0, -160, -40, -180); cap.bezierCurveTo(-120, -178, -200, -150, -232, -70); cap.closePath();
    cel(ctx, cap, HAIR.b, HAIR.s, -8, -8, 5); shine(ctx, -110, -170, 46, 12, -0.25, 0.45);
    // eyes
    const ek = P.eyes || 'normal';
    if (P.eyesGone) { ctx.save(); ctx.setLineDash([12, 10]); ctx.strokeStyle = 'rgba(90,54,89,0.45)'; ctx.lineWidth = 5; ctx.stroke(ellP(-95, 20, 42, 52)); ctx.stroke(ellP(95, 20, 42, 52)); ctx.restore(); }
    else { eye(ctx, -95, 20, 42, 52, IRIS, ek, -1, P.look || [0, 0]); eye(ctx, 95, 20, 42, 52, IRIS, ek, 1, P.look || [0, 0]); }
    // brows
    const bl = Object.assign({}, P.brow || {}, P.browL || {}), br = Object.assign({}, P.brow || {}, P.browR || {});
    if (!P.browsGone) { drawBrow(ctx, -1, bl, P.hairs || 0); drawBrow(ctx, 1, br, P.hairs || 0); }
    blush(ctx, -150, 92, 30, 14); blush(ctx, 150, 92, 30, 14);
    // nose + mouth
    ctx.save(); ctx.strokeStyle = SKIN.s; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-6, 82); ctx.lineTo(4, 90); ctx.stroke(); ctx.restore();
    mouth(ctx, 0, 130, 20, P.mouth || 'w');
    if (P.after) P.after(ctx);
    ctx.restore();
  }
  // a sweat / rain drop in face coords
  const drop = (ctx, x, y, s, rot = 0) => sweat(ctx, x, y, s, rot);
  // path a drop takes: forehead -> brow ridge -> along the arch -> down the side, past the eye
  function dropPath(side) {
    return [[side * 70, -165], [side * 72, -125], [side * 100, -128], [side * 140, -112], [side * 182, -86], [side * 204, -40], [side * 212, 30], [side * 205, 110]];
  }
  function card(ctx, x, y, w_, h_, fill, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s[0], s[1]);
    cel(ctx, rrP(-w_ / 2, -h_ / 2, w_, h_, 40), fill, H.rgba(H.mix(fill, C.plum, 0.12)), -8, -8, 5);
    ctx.restore();
  }
  function rain(ctx, t, seed, x0, x1, y0, y1, a = 1) {
    const r = H.rng(seed);
    ctx.save(); ctx.globalAlpha = a; ctx.lineCap = 'round';
    for (let i = 0; i < 46; i++) {
      const x = r.range(x0, x1), sp = r.range(900, 1300), ph = r(), len = r.range(40, 70);
      const y = y0 + ((ph * (y1 - y0) + t * sp) % (y1 - y0));
      ctx.strokeStyle = C.plum; ctx.lineWidth = 11; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 10, y + len); ctx.stroke();
      ctx.strokeStyle = C.sky; ctx.lineWidth = 6; ctx.stroke();
    }
    ctx.restore();
  }
  function umbrellaCloud(ctx, x, y, s, t) {
    ctx.save(); ctx.translate(x, y + bob(t, 2, 6)); ctx.scale(s, s);
    union(ctx, [cloudP(0, 0, 1.2)], '#eef3ff', 5);
    eye(ctx, -40, 0, 9, 12, '#5a74b8', 'happy', -1); eye(ctx, 40, 0, 9, 12, '#5a74b8', 'happy', 1); mouth(ctx, 0, 18, 7, 'w');
    ctx.restore();
  }
  function choice(ctx, x, y, label_, fill, t, t0) {
    const p = pop(t, t0, 1.2); if (p.s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy);
    cel(ctx, rrP(-150, -70, 300, 140, 70), fill, H.rgba(H.mix(fill, C.plum, 0.18)), -6, -6, 5);
    kText(ctx, label_, 0, 22, 62, { line: C.plum, fill: C.white, lw: 0.2, shadow: false });
    ctx.restore();
  }

  // ---------- scenes ----------
  const scenes = [
    // 0: hook — Momo loses her brows and turns into a stranger
    { s: 0, draw(ctx, t) {
      bgV(ctx, t, TH.pink, 91);
      const er = grow(t, w(0, 'cant') - 0.15, 0.7), q = t >= w(0, 'name') - 0.1;
      const fq = pop(t, 0.0, 1.0);
      ctx.save(); ctx.translate(540, 1300); ctx.scale(fq.sx, fq.sy);
      face(ctx, 0, 0, 1.5, { brow: { erase: er }, eyes: q ? 'shock' : 'normal', mouth: q ? 'o' : 'w' });
      ctx.restore();
      // eraser sweeping over the brows
      if (er > 0 && er < 1) { const ex = H.lerp(540 - 70, 540 - 260, er), ex2 = H.lerp(540 + 70, 540 + 260, er); for (const xx of [ex, ex2]) { ctx.save(); ctx.translate(xx, 1300 - 150 + Math.sin(t * 40) * 6); ctx.rotate(-0.3); cel(ctx, rrP(-50, -34, 100, 68, 16), C.pink, C.pinkS, -4, -4, 4.5); ctx.fillStyle = C.sky; ctx.fill(rrP(-50, -34, 40, 68, [16, 0, 0, 16])); ol(ctx, rrP(-50, -34, 100, 68, 16), 4.5); ctx.restore(); } }
      big(ctx, 'NO EYEBROWS', 540, 330, 120, t, w(0, 'eyebrows') - 0.15, { line: C.pinkD, fill: C.white });
      numPop(ctx, '54%', 540, 560, 210, t, w(0, '54') - 0.15, { line: C.pinkD, fill: C.butter });
      if (t < w(1, 'mit') - 0.12) label(ctx, "can't name you", 540, 700, 60, t, w(0, 'cant') - 0.12, C.white);
      if (q) { const k = pop(t, w(0, 'face') - 0.1, 1.2); kana(ctx, 'だれ？', 860, 900, 84, 0.12, k.s, C.butter); kText(ctx, '?', 230, 960, 150 * Math.min(1, k.s), { line: C.lavD, outer: C.plum, ow: 0.08, lw: 0.16 }); }
      // MIT 2003 tag
      if (t >= w(1, 'mit') - 0.12) {
        label(ctx, 'MIT', 380, 720, 64, t, w(1, 'mit') - 0.12, C.mint);
        numPop(ctx, '2003', 660, 750, 100, t, w(1, '2003') - 0.12, { line: C.mintD, fill: C.white });
      }
      twinkles(ctx, W, HH, t, 6, 8, (x, y) => y > 250 && y < 1760);
    } },
    // 1: the study — eyes gone vs brows gone
    { s: P_[2].s, draw(ctx, t) {
      bgV(ctx, t, TH.lav, 92);
      big(ctx, 'FAMOUS FACES', 540, 320, 110, t, w(2, 'famous') - 0.12, { line: C.lavD, fill: C.white });
      const a = pop(t, w(2, 'eyes') - 0.15, 1.1), b = pop(t, w(4, 'eyebrows') - 0.15, 1.1);
      if (a.s > 0) { card(ctx, 290, 830, 440, 640, C.white, [a.sx, a.sy]); ctx.save(); ctx.translate(290, 790); ctx.scale(a.sx, a.sy); face(ctx, 0, 0, 0.78, { eyesGone: true }); ctx.restore(); label(ctx, 'no eyes', 290, 1220, 56, t, w(2, 'erased') - 0.12, C.sky); }
      if (b.s > 0) { card(ctx, 790, 830, 440, 640, C.white, [b.sx, b.sy]); ctx.save(); ctx.translate(790, 790); ctx.scale(b.sx, b.sy); face(ctx, 0, 0, 0.78, { browsGone: true, eyes: 'normal' }); ctx.restore(); label(ctx, 'no brows', 790, 1220, 56, t, w(4, 'eyebrows') - 0.05, C.pink); }
      numPop(ctx, '60%', 290, 1440, 170, t, w(3, 'sixty') - 0.12, { line: C.mintD, fill: C.white });
      if (t >= w(3, 'percent')) label(ctx, 'named', 290, 1570, 50, t, w(3, 'named') - 0.1, C.mint);
      numPop(ctx, '46%', 790, 1440, 170, t, w(5, 'fortysix') - 0.12, { line: C.red, fill: C.butter });
      if (t >= w(5, 'dropped') - 0.12) { const g = grow(t, w(5, 'dropped') - 0.12, 0.4); dotted(ctx, [[470, 1400], [540, 1340], [610, 1400]], g, C.red, 7, 22, 1); }
      if (t >= w(5, 'fortysix')) { const q = pop(t, w(5, 'fortysix') + 0.1, 1.2); kana(ctx, 'えっ？', 900, 560, 80, 0.12, q.s, C.white); }
    } },
    // 2: why? -> camera pushes into the forehead; sweat and rain run along the brow
    { s: P_[6].s, draw(ctx, t) {
      bgV(ctx, t, TH.mint, 93);
      const z = H.ease.inOut(H.clamp((t - (w(7, 'picture') - 0.2)) / 0.9));
      const fs = H.lerp(1.45, 2.25, z), fy = H.lerp(1300, 1330, z);
      const sweatOn = t >= w(7, 'sweat') - 0.12, dry = t >= w(11, 'eyes') - 0.12;
      const raining = t >= w(12, 'rain') - 0.15;
      const slide = t >= w(10, 'slide') - 0.12;
      face(ctx, 540, fy, fs, {
        eyes: dry ? 'happy' : sweatOn ? 'normal' : 'normal', mouth: dry ? 'smile' : 'w', look: [0, -0.6], hairs: t >= w(9, 'hairs') - 0.12 ? grow(t, w(9, 'hairs') - 0.12, 0.6) : 0,
        after(c) {
          if (!sweatOn) return;
          // drops: each loops along its path; before "slide" they stop at the brow
          for (const sd of [-1, 1]) {
            const path = dropPath(sd), L = plen(path);
            const n = raining ? 3 : 2;
            for (let i = 0; i < n; i++) {
              const t0 = w(7, 'sweat') - 0.12 + i * 0.45 + (sd > 0 ? 0.2 : 0), u = t - t0; if (u < 0) continue;
              const brake = plen(path.slice(0, 3));
              let d = slide ? ((u * 260) % (L + 120)) : Math.min(u * 200, brake);
              if (d > L) continue;
              const [x, y, a] = along(path, d);
              drop(c, x, y, raining ? 0.85 : 0.75, a - Math.PI / 2);
            }
          }
          // arrows along the arch, pointing to the ears
          if (t >= w(9, 'point') - 0.12) for (const sd of [-1, 1]) dotted(c, [[sd * 60, -140], [sd * 120, -150], [sd * 200, -120], [sd * 240, -70]], grow(t, w(9, 'point') - 0.12, 0.5), C.skyD, 5, 18, 0.8);
        },
      });
      if (raining) { rain(ctx, t, 31, 0, W, 560, HH, grow(t, w(12, 'rain') - 0.15, 0.3)); umbrellaCloud(ctx, 220, 740, 1.1, t); }
      // titles
      if (t < w(7, 'picture') - 0.15) {
        big(ctx, 'WHY?', 540, 420, 220, t, w(6, 'why') - 0.12, { line: C.mintD, fill: C.butter });
        if (t >= w(6, 'them')) { const q = pop(t, w(6, 'them'), 1.2); kana(ctx, 'なるほど？', 790, 640, 64, 0.1, q.s, C.white); }
      } else if (t < w(8, 'brow') - 0.12) {
        big(ctx, 'SWEAT', 540, 380, 170, t, w(7, 'sweat') - 0.12, { line: C.skyD, fill: C.white });
        if (t >= w(7, 'forehead') - 0.12) label(ctx, 'forehead', 540, 560, 64, t, w(7, 'forehead') - 0.12, C.white);
      } else if (t < w(9, 'hairs') - 0.12) {
        label(ctx, 'brow bone', 300, 330, 60, t, w(8, 'bone') - 0.12, C.butter);
        label(ctx, 'arch', 800, 330, 60, t, w(8, 'arch') - 0.12, C.pink);
        big(ctx, 'GUTTER!', 540, 560, 160, t, w(8, 'gutter') - 0.12, { line: C.skyD, fill: C.white });
      } else if (t < w(10, 'slide') - 0.12) {
        big(ctx, 'HAIRS', 540, 380, 160, t, w(9, 'hairs') - 0.12, { line: C.mintD, fill: C.white });
        big(ctx, 'TO EARS', 540, 560, 130, t, w(9, 'ears') - 0.12, { line: C.mintD, fill: C.butter });
      } else if (!dry) {
        big(ctx, 'TO THE', 540, 380, 150, t, w(10, 'slide') - 0.12, { line: C.skyD, fill: C.white });
        big(ctx, 'SIDES', 540, 560, 170, t, w(10, 'sides') - 0.12, { line: C.skyD, fill: C.butter });
      } else if (!raining) {
        big(ctx, 'DRY EYES', 540, 450, 150, t, w(11, 'eyes') - 0.12, { line: C.mintD, fill: C.white });
        const q = pop(t, w(11, 'eyes'), 1.2); kana(ctx, 'キラッ', 860, 640, 70, 0.1, q.s, C.butter);
      } else {
        big(ctx, 'RAIN TOO!', 540, 400, 150, t, w(12, 'rain') - 0.12, { line: C.skyD, fill: C.white });
      }
    } },
    // 3: about 250 hairs per brow
    { s: P_[13].s, draw(ctx, t) {
      bgV(ctx, t, TH.butter, 94);
      const g = grow(t, w(13, 'each') - 0.1, w(13, '250') - w(13, 'each'));
      // one giant brow drawn hair by hair
      ctx.save(); ctx.translate(540, 1150); ctx.scale(5, 5);
      ctx.fillStyle = SKIN.b; ctx.strokeStyle = C.plum; ctx.lineWidth = 1.6;
      const pts = browPts(-1, {}).map(([x, y]) => [x + 100, y + 84]);
      const r = H.rng(250), N = 120;
      ctx.lineCap = 'round';
      for (let i = 0; i < Math.floor(N * g); i++) {
        const u = r(), k = Math.min(24, Math.round(u * 24)), [x, y] = pts[k], off = r.range(-8, 8) * H.lerp(1, 0.5, u), len = r.range(13, 20) * H.lerp(1, 0.75, u);
        ctx.strokeStyle = C.plum; ctx.lineWidth = 3.4; ctx.beginPath(); ctx.moveTo(x + 4, y + off + 3); ctx.lineTo(x - len, y + off - 5 - u * 4); ctx.stroke();
        ctx.strokeStyle = i % 5 ? BROW : HAIR.hi; ctx.lineWidth = 2; ctx.stroke();
      }
      ctx.restore();
      // the eye under it, peeking
      eye(ctx, 470, 1520, 70, 86, IRIS, t >= w(13, 'job') - 0.1 ? 'happy' : 'normal', -1, [0.2, -0.8]);
      big(ctx, 'EACH BROW', 540, 330, 120, t, w(13, 'each') - 0.12, { line: C.pinkD, fill: C.white });
      const shown = Math.round(250 * g);
      if (g > 0) { ctx.save(); const q = squash(t, w(13, '250') - 0.1, 0.2); ctx.translate(540, 640); ctx.scale(q[0], q[1]); kText(ctx, (g >= 1 ? '~' : '') + shown, 0, 0, 220, { line: C.pinkD, fill: C.butter, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); }
      label(ctx, 'hairs', 540, 790, 64, t, w(13, 'hairs') - 0.12, C.white);
      if (t >= w(13, 'job') - 0.12) { label(ctx, 'on the job!', 790, 1600, 56, t, w(13, 'job') - 0.12, C.mint); }
    } },
    // 4: talking without words — the expressions
    { s: P_[14].s, draw(ctx, t) {
      const ph = t < P_[16].s - 0.12 ? 0 : t < P_[17].s - 0.12 ? 1 : t < P_[18].s - 0.12 ? 2 : 3;
      bgV(ctx, t, [TH.lav, TH.pink, TH.butter, TH.mint][ph], 95 + ph);
      const ease = (t0) => grow(t, t0, 0.25);
      let P = { eyes: 'normal', mouth: 'w' };
      if (ph === 0) {
        const talk = t >= w(15, 'talking') - 0.12;
        P = { mouth: talk ? 'flat' : 'w', eyes: 'normal', brow: { raise: talk ? 0.3 * Math.max(0, Math.sin(t * 9)) : 0 } };
        big(ctx, 'BIGGEST', 540, 330, 150, t, w(14, 'biggest') - 0.12, { line: C.lavD, fill: C.white });
        big(ctx, 'JOB?', 540, 490, 150, t, w(14, 'job') - 0.12, { line: C.lavD, fill: C.butter });
        if (talk) { const q = pop(t, w(15, 'words') - 0.12, 1.2); if (q.s > 0) { ctx.save(); ctx.translate(800, 760); ctx.scale(q.sx, q.sy); bubble(ctx, 0, 0, 380, 150, [-120, 160]); kText(ctx, 'NO WORDS', 0, 22, 62, { line: C.lavD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); } }
      } else if (ph === 1) {
        const k = ease(w(16, 'one') - 0.12);
        P = { eyes: 'normal', mouth: 'flat', look: [0.5, 0], browR: { raise: 1.6 * k }, browL: { inner: -0.5 * k } };
        big(ctx, 'ONE UP', 540, 330, 150, t, w(16, 'one') - 0.12, { line: C.pinkD, fill: C.white });
        big(ctx, '"REALLY?"', 540, 500, 130, t, w(16, 'really') - 0.12, { line: C.pinkD, fill: C.butter });
      } else if (ph === 2) {
        const k = ease(w(17, 'both') - 0.12);
        P = { eyes: 'shock', mouth: 'O', brow: { raise: 1.8 * k } };
        big(ctx, 'BOTH UP', 540, 330, 150, t, w(17, 'both') - 0.12, { line: C.butterS, fill: C.white });
        big(ctx, 'SURPRISE!', 540, 500, 140, t, w(17, 'surprise') - 0.12, { line: C.pinkD, fill: C.butter });
        if (t >= w(17, 'surprise') - 0.1) { impactLines(ctx, 540, 1250, 420, t, w(17, 'surprise') - 0.1, 12, C.pinkD); const q = pop(t, w(17, 'surprise'), 1.2); kana(ctx, 'びっくり', 830, 760, 70, 0.12, q.s, C.white); }
      } else {
        const k = ease(w(18, 'pulled') - 0.12);
        P = { eyes: 'normal', mouth: 'wobble', look: [0, 0.2], brow: { inner: -1.2 * k, raise: -0.3 * k } };
        big(ctx, 'DOWN +', 540, 330, 140, t, w(18, 'pulled') - 0.12, { line: C.mintD, fill: C.white });
        big(ctx, 'TOGETHER', 540, 490, 130, t, w(18, 'together') - 0.12, { line: C.mintD, fill: C.butter });
        if (t >= w(18, 'grumpy') - 0.12) { vein(ctx, 820, 900, 1.6 * pop(t, w(18, 'grumpy') - 0.12, 1.3).s); stampLike(ctx, 'GRUMPY', 540, 700, 90, t, w(18, 'grumpy') - 0.08, -0.06); const q = pop(t, w(18, 'grumpy'), 1.2); kana(ctx, 'ムカッ', 200, 900, 74, -0.12, q.s, C.white); }
      }
      const sq = squash(t, [P_[16].s, P_[17].s, P_[18].s, P_[14].s][(ph + 3) % 4] - 0.12, 0.08);
      ctx.save(); ctx.translate(540, 1270); ctx.scale(sq[0], sq[1]); face(ctx, 0, 0, 1.55, P); ctx.restore();
      if (ph === 2 && t >= w(17, 'surprise') - 0.1) { sweat(ctx, 860, 1060, 1.2); }
    } },
    // 5: ending question
    { s: P_[19].s, draw(ctx, t) {
      bgV(ctx, t, TH.pink, 99);
      // Momo trying to lift one brow: left, then right, wobbling
      const tr = t - w(19, 'raise');
      const side = tr < 0 ? 0 : Math.floor(tr / 0.8) % 2 ? 1 : -1, k = tr < 0 ? 0 : 0.5 + 0.5 * Math.sin(tr * TAU / 0.8 - Math.PI / 2);
      const P = { eyes: 'normal', mouth: 'w', look: [side * 0.6, -0.6] };
      if (side < 0) { P.browL = { raise: 1.5 * k }; P.browR = { inner: -0.4 * k }; } else if (side > 0) { P.browR = { raise: 1.5 * k }; P.browL = { inner: -0.4 * k }; }
      face(ctx, 540, 1010, 1.25, P);
      if (tr > 0) sweat(ctx, 810, 780, 1.0);
      if (t < P_[20].s - 0.12) {
        big(ctx, 'RAISE JUST', 540, 320, 120, t, w(19, 'raise') - 0.12, { line: C.pinkD, fill: C.white });
        big(ctx, 'ONE BROW?', 540, 470, 130, t, w(19, 'one') - 0.12, { line: C.pinkD, fill: C.butter });
      } else {
        big(ctx, 'CAN YOU?', 540, 400, 150, t, P_[20].s - 0.12, { line: C.lavD, fill: C.butter });
      }
      choice(ctx, 210, 1430, 'LEFT', C.sky, t, w(20, 'left') - 0.12);
      choice(ctx, 540, 1430, 'RIGHT', C.mint, t, w(20, 'right') - 0.12);
      choice(ctx, 870, 1430, 'NEITHER', C.lav, t, w(20, 'neither') - 0.12);
      const q = pop(t, w(20, 'neither') + 0.4, 1.2);
      if (q.s > 0) { ctx.save(); ctx.translate(540, 1585); ctx.scale(q.sx, q.sy); cel(ctx, rrP(-380, -55, 760, 100, 50), C.white, C.creamS, -6, -6, 5); ctx.font = `700 52px ${FONT}`; ctx.textAlign = 'center'; ctx.fillStyle = C.plum; ctx.fillText('tell me in the comments!', 0, 16); ctx.restore(); }
    } },
  ];
  const CUTS = scenes.slice(1).map((sc, i) => { const prev = P_.filter((p) => p.e <= sc.s + 0.01).pop(); return { t: (prev.e + sc.s) / 2, shape: i % 2 ? 'heart' : 'star' }; });
  const CUTW = 0.5;

  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) { scenes[i - 1].draw(ctx, t); wipe(ctx, W_, H_, (t - (c.t - CUTW / 2)) / CUTW, c.shape, 540, 1100, () => scenes[i].draw(ctx, t)); }
    else scenes[i].draw(ctx, t);
  }
  function thumbnail(ctx) { scenes[0].draw(ctx, 4.4); }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    CUTS.forEach((c) => { k.noise(c.t - 0.22, { dur: 0.42, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.42, 3000]], q: 0.9, gain: 0.3, a: 0.08 }); k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    // hook
    pop_(0.05, 600, 0.7, 0, false); pop_(w(0, 'eyebrows') - 0.15, 700); big_(w(0, '54') - 0.12, 'G5');
    k.play('erase', w(0, 'cant') - 0.15, { dur: 0.7, gain: 0.5 }); k.play('error', w(0, 'face') - 0.1, { f: 'A3', gain: 0.22 });
    pop_(w(1, 'mit') - 0.12, 800, 0.8, -0.3, false); k.play('stamp', w(1, '2003') - 0.1, { gain: 0.4 });
    // study
    pop_(w(2, 'famous') - 0.12, 700, 0.8, 0, false); k.play('slap', w(2, 'eyes') - 0.15, { gain: 0.35, pan: -0.4 }); k.play('erase', w(2, 'erased') - 0.1, { dur: 0.35, gain: 0.35, minor: true });
    big_(w(3, 'sixty') - 0.1, 'C6'); k.play('slap', w(4, 'eyebrows') - 0.15, { gain: 0.35, pan: 0.4 });
    k.play('swish', w(5, 'dropped') - 0.12, { gain: 0.35 }); k.play('error', w(5, 'fortysix') - 0.1, { f: 'C4', gain: 0.25 }); pop_(w(5, 'fortysix') - 0.1, 500, 0.8, 0.4, false);
    // why + sweat + rain
    big_(w(6, 'why') - 0.1, 'A5'); k.play('whoosh', w(7, 'picture') - 0.2, { dur: 0.8, gain: 0.35 });
    for (let i = 0; i < 6; i++) k.play('blip', w(7, 'sweat') + i * 0.45, { f: i % 2 ? 'E6' : 'B5', type: 'sine', dur: 0.08, gain: 0.8, minor: true });
    pop_(w(7, 'forehead') - 0.12, 800); pop_(w(8, 'bone') - 0.12, 700, 0.7, -0.3); pop_(w(8, 'arch') - 0.12, 900, 0.7, 0.3); k.play('tock', w(8, 'gutter') - 0.1, { f: 900, gain: 0.6 });
    k.play('sparkle', w(9, 'hairs') - 0.1, { n: 5, gain: 0.4 }); k.play('swish', w(9, 'point') - 0.12, { gain: 0.3 }); pop_(w(9, 'ears') - 0.12, 1000, 0.8, 0, false);
    k.play('swish', w(10, 'slide') - 0.12, { dur: 0.4, gain: 0.35, pan: -0.4 }); k.play('swish', w(10, 'sides') - 0.1, { dur: 0.4, gain: 0.35, pan: 0.4 });
    k.play('success', w(11, 'eyes') - 0.1, { f: 'C6', gain: 0.4 });
    k.noise(w(12, 'rain') - 0.15, { dur: 1.6, color: 'pink', filter: 'bandpass', f: 2600, q: 0.5, gain: 0.12, a: 0.2, hold: 0.9 });
    pop_(w(12, 'rain') - 0.12, 800, 0.8, 0, false);
    // hairs
    pop_(w(13, 'each') - 0.12, 700, 0.8, 0, false);
    for (let at = w(13, 'each'); at < w(13, '250') - 0.1; at += 0.07) k.play('stroke', at, { material: 'pencil', dur: 0.05, gain: 0.5, minor: true });
    big_(w(13, '250') - 0.1, 'E6'); pop_(w(13, 'job') - 0.12, 900);
    // expressions
    pop_(w(14, 'biggest') - 0.12, 700, 0.8, 0, false); pop_(w(14, 'job') - 0.12, 800); k.play('ding', w(15, 'words') - 0.1, { f: 'G6', gain: 0.3 });
    k.play('jump', w(16, 'one') - 0.12, { gain: 0.5 }); pop_(w(16, 'really') - 0.12, 900, 0.8, 0, false);
    k.play('jump', w(17, 'both') - 0.12, { gain: 0.6 }); k.play('impact', w(17, 'surprise') - 0.1, { gain: 0.45 }); k.play('sparkle', w(17, 'surprise'), { n: 5, gain: 0.4 });
    k.play('buzz', w(18, 'pulled') - 0.12, { dur: 0.25, f: 140, gain: 0.35 }); k.play('stamp', w(18, 'grumpy') - 0.08, { gain: 0.5 });
    // end
    pop_(w(19, 'raise') - 0.12, 700, 0.8, 0, false); pop_(w(19, 'one') - 0.12, 800);
    for (let at = w(19, 'raise') + 0.4; at < DURATION - 0.3; at += 0.8) k.play('blip', at, { f: 'A5', type: 'sine', dur: 0.06, gain: 0.6, minor: true });
    pop_(w(20, 'left') - 0.12, 600, 0.8, -0.5, false); pop_(w(20, 'right') - 0.12, 750, 0.8, 0, false); pop_(w(20, 'neither') - 0.12, 900, 0.8, 0.5, false);
    k.play('success', w(20, 'neither') + 0.4, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(20, 'neither') + 0.4, { n: 8, gain: 0.6 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
