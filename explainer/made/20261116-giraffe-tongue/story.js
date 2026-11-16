// ===== Kawaii Anime, vertical: "Why is a giraffe's tongue dark purple?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'ペロカチンガーンキラ';
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
  const P_ = [{"s": 0.25, "e": 2.14, "text": "Giraffe tongues are almost black,", "words": [["giraffe", 0.25], ["tongues", 0.72], ["are", 1.19], ["almost", 1.4], ["black", 1.8]]}, {"s": 2.5, "e": 3.79, "text": "and you'd never guess why.", "words": [["and", 2.5], ["youd", 2.69], ["never", 2.95], ["guess", 3.27], ["why", 3.6]]}, {"s": 4.25, "e": 7.03, "text": "They can spend up to twelve hours a day out in the sun.", "words": [["they", 4.25], ["can", 4.51], ["spend", 4.71], ["up", 5.04], ["to", 5.17], ["twelve", 5.31], ["hours", 5.7], ["a", 6.03], ["day", 6.1], ["out", 6.3], ["in", 6.5], ["the", 6.63], ["sun", 6.83]]}, {"s": 7.4, "e": 10.33, "text": "That tongue is forty-five to fifty centimeters long,", "words": [["that", 7.4], ["tongue", 7.67], ["is", 8.08], ["fortyfive", 8.21], ["to", 8.83], ["fifty", 8.96], ["centimeters", 9.3], ["long", 10.05]]}, {"s": 10.89, "e": 12.5, "text": "longer than your whole forearm.", "words": [["longer", 10.89], ["than", 11.26], ["your", 11.51], ["whole", 11.76], ["forearm", 12.07]]}, {"s": 12.98, "e": 15.53, "text": "It wraps thorny acacia branches like a hand,", "words": [["it", 12.98], ["wraps", 13.12], ["thorny", 13.47], ["acacia", 13.9], ["branches", 14.32], ["like", 14.89], ["a", 15.17], ["hand", 15.24]]}, {"s": 16.18, "e": 17.96, "text": "and tough little bumps called papillae", "words": [["and", 16.18], ["tough", 16.34], ["little", 16.61], ["bumps", 16.93], ["called", 17.2], ["papillae", 17.53]]}, {"s": 18.02, "e": 19.86, "text": "armor it against the spikes.", "words": [["armor", 18.02], ["it", 18.42], ["against", 18.58], ["the", 19.14], ["spikes", 19.38]]}, {"s": 20.23, "e": 22.85, "text": "But all that eating happens in the African sun.", "words": [["but", 20.23], ["all", 20.43], ["that", 20.64], ["eating", 20.92], ["happens", 21.33], ["in", 21.81], ["the", 21.95], ["african", 22.16], ["sun", 22.64]]}, {"s": 23.23, "e": 26.64, "text": "So scientists think the dark color is built-in sunscreen.", "words": [["so", 23.23], ["scientists", 23.38], ["think", 24.1], ["the", 24.46], ["dark", 24.68], ["color", 24.97], ["is", 25.34], ["builtin", 25.48], ["sunscreen", 25.99]]}, {"s": 27.08, "e": 29.11, "text": "The front, the part that sticks out,", "words": [["the", 27.08], ["front", 27.3], ["the", 27.66], ["part", 27.88], ["that", 28.17], ["sticks", 28.46], ["out", 28.89]]}, {"s": 29.17, "e": 30.55, "text": "is packed with dark pigment.", "words": [["is", 29.17], ["packed", 29.29], ["with", 29.65], ["dark", 29.89], ["pigment", 30.13]]}, {"s": 30.95, "e": 32.79, "text": "The base, tucked inside the mouth,", "words": [["the", 30.95], ["base", 31.16], ["tucked", 31.43], ["inside", 31.84], ["the", 32.25], ["mouth", 32.45]]}, {"s": 32.87, "e": 33.68, "text": "is plain pink.", "words": [["is", 32.87], ["plain", 33.02], ["pink", 33.39]]}, {"s": 34.15, "e": 36.28, "text": "And honestly, that's kind of genius.", "words": [["and", 34.15], ["honestly", 34.38], ["thats", 34.99], ["kind", 35.37], ["of", 35.67], ["genius", 35.82]]}, {"s": 36.65, "e": 37.89, "text": "But it's not proven.", "words": [["but", 36.65], ["its", 36.9], ["not", 37.14], ["proven", 37.39]]}, {"s": 38.26, "e": 40.52, "text": "The okapi, the giraffe's forest cousin,", "words": [["the", 38.26], ["okapi", 38.48], ["the", 38.84], ["giraffes", 39.06], ["forest", 39.64], ["cousin", 40.08]]}, {"s": 40.96, "e": 43.12, "text": "has the same dark tongue in the shade.", "words": [["has", 40.96], ["the", 41.17], ["same", 41.39], ["dark", 41.68], ["tongue", 41.97], ["in", 42.4], ["the", 42.54], ["shade", 42.76]]}, {"s": 43.6, "e": 46.08, "text": "So why is a giraffe's tongue almost black?", "words": [["so", 43.6], ["why", 43.75], ["is", 43.97], ["a", 44.12], ["giraffes", 44.2], ["tongue", 44.8], ["almost", 45.25], ["black", 45.7]]}, {"s": 46.61, "e": 48.26, "text": "Sunscreen, or something else?", "words": [["sunscreen", 46.61], ["or", 47.23], ["something", 47.37], ["else", 47.99]]}];

  // ---------- timing ----------
  const BEATS = [
    { id: 'hook', s: P_[0].s, e: P_[2].e }, { id: 'length', s: P_[3].s, e: P_[4].e }, { id: 'acacia', s: P_[5].s, e: P_[7].e },
    { id: 'sun', s: P_[8].s, e: P_[9].e }, { id: 'diagram', s: P_[10].s, e: P_[13].e }, { id: 'genius', s: P_[14].s, e: P_[15].e },
    { id: 'okapi', s: P_[16].s, e: P_[17].e }, { id: 'end', s: P_[18].s, e: P_[19].e },
  ];
  const w = (i, word) => { const f = P_[i].words.find((x) => x[0] === word); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  const CUTS = BEATS.slice(1).map((b, i) => ({ t: (BEATS[i].e + b.s) / 2, shape: i % 3 === 2 ? 'heart' : 'star' }));
  const CUTW = 0.5;
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.05, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = C.butter) => { const p = pop(t, t0); if (p.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  function bgV(ctx, t, th, seed) { ctx.save(); ctx.scale(1.5, 1.5); bg(ctx, W / 1.5, HH / 1.5, t, th, seed); ctx.restore(); }
  const numPop = (ctx, str, x, y, size, t, t0, o = {}) => { const n = pop(t, t0, 1.3); if (n.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(n.sx, n.sy); kText(ctx, str, 0, 0, size, { fill: o.fill || C.white, line: o.line || C.skyD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); };
  const grow = (t, t0, d) => H.ease.out(H.clamp((t - t0) / d));

  // ---------- palette for this film ----------
  const G = { body: '#ffd98a', bodyS: '#f2b562', patch: '#e39a52', patchS: '#c97c3c', muzzle: '#fff1d8', muzzleS: '#efd3ad', knob: '#8a5a3c',
    tongue: '#5b3a7a', tongueS: '#3f2559', tongueHi: '#8d6bb3', tPink: '#ff9db8', tPinkS: '#f277a0',
    okapi: '#8b5a3c', okapiS: '#6b4029', bark: '#b5835c', barkS: '#8f6242', leaf: '#8edc9f', leafS: '#56b574' };
  const SUNNY = { base: '#fff3cf', dot: '#ffe6a6', acc: '#ffc4d6', kind: 'hearts' };
  const FOREST = { base: '#dcefdc', dot: '#c6e4c8', acc: '#fff1a0', kind: 'stars' };

  // ---------- the tongue: a thick rounded stroke, pink at the base, dark purple from the lips out ----------
  function subPts(pts, prog) {
    if (prog >= 1) return pts;
    const L = plen(pts) * prog, out = [pts[0]]; let acc = 0;
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); if (acc + l >= L) { const [x, y] = along(pts, L); out.push([x, y]); return out; } acc += l; out.push(pts[i]); }
    return out;
  }
  function strokePts(ctx, pts, lw, col) { if (pts.length < 2) return; ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]); ctx.lineWidth = lw; ctx.strokeStyle = col; ctx.stroke(); }
  function tongueStroke(ctx, pts, prog, lw, baseFrac = 0.2, bumps = 0) {
    if (prog <= 0) return;
    const P = subPts(pts, prog), Ltot = plen(pts), Lb = Ltot * baseFrac;
    ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    strokePts(ctx, P, lw + 13, C.plum);
    const base = subPts(pts, Math.min(prog, baseFrac));
    strokePts(ctx, P, lw, G.tongue);
    strokePts(ctx, base, lw, G.tPink);
    // cel shadow along the lower edge
    ctx.save(); ctx.translate(lw * 0.12, lw * 0.16); ctx.globalAlpha = 0.55; strokePts(ctx, P.slice(Math.max(1, Math.floor(P.length * baseFrac))), lw * 0.45, G.tongueS); ctx.restore();
    // glossy highlight
    const hi = P.slice(Math.max(1, Math.floor(P.length * (baseFrac + 0.05))));
    ctx.save(); ctx.translate(-lw * 0.16, -lw * 0.2); strokePts(ctx, hi, lw * 0.16, G.tongueHi); ctx.restore();
    if (bumps) { const r = H.rng(3); for (let d = Lb + 12; d < Ltot * prog - 10; d += 26) { const [x, y] = along(pts, d); ctx.fillStyle = 'rgba(40,20,60,0.45)'; ctx.fill(ellP(x + r.range(-lw * 0.25, lw * 0.25), y + r.range(-lw * 0.25, lw * 0.25), 3.5, 3.5)); } }
    ctx.restore();
  }

  // ---------- cast ----------
  // Gigi: a chibi giraffe. (x,y) = head centre. P: eyes, mouth, tongue (0..1), tPts (local tongue path), neck, look, rot, sq, okapi
  function giraffe(ctx, x, y, s, P = {}) {
    const ok = !!P.okapi, body = ok ? G.okapi : G.body, bodyS = ok ? G.okapiS : G.bodyS;
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); const sq = P.sq || [1, 1]; ctx.scale(s * sq[0], s * sq[1]);
    if (P.neck !== false) {
      const nk = new Path2D(); nk.moveTo(-62, 60); const NL = ok ? 0.36 : 1; nk.bezierCurveTo(-70, 300 * NL, -96, 600 * NL, -110, 900 * NL); nk.lineTo(110, 900 * NL); nk.bezierCurveTo(96, 600 * NL, 70, 300 * NL, 62, 60); nk.closePath();
      cel(ctx, nk, body, bodyS, -9, -6, 6);
      ctx.save(); ctx.clip(nk);
      if (!ok) { const r = H.rng(11); for (let j = 0; j < 7; j++) for (let i = -1; i <= 1; i++) { const px = i * 70 + r.range(-12, 12) + (j % 2) * 35, py = 150 + j * 110 + r.range(-10, 10); cel(ctx, roundPoly([[px - 30, py - 34], [px + 32, py - 28], [px + 36, py + 30], [px - 28, py + 36]], 16), G.patch, G.patchS, -3, -3, 0); } }
      else { ctx.fillStyle = G.okapiS; ctx.fill(ellP(30, 200, 40, 120)); }
      ctx.restore();
      // mane
      if (!ok) { ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.beginPath(); ctx.moveTo(0, 90); ctx.lineTo(0, 900); ctx.globalAlpha = 0; ctx.stroke(); ctx.restore(); }
    }
    // ossicones
    const oh = ok ? 0.45 : 1;
    for (const sd of [-1, 1]) {
      ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.beginPath(); ctx.moveTo(sd * 48, -100); ctx.lineTo(sd * 60, -100 - 95 * oh); ctx.stroke(); ctx.strokeStyle = body; ctx.lineWidth = 22; ctx.stroke(); ctx.restore();
      cel(ctx, ellP(sd * 61, -106 - 95 * oh, 24, 21), G.knob, '#6b4029', -3, -3, 5);
    }
    // ears
    const er = ok ? 1.35 : 1;
    for (const sd of [-1, 1]) { const e = ellP(sd * 138, -62, 56 * er, 24 * er, sd * 0.45); cel(ctx, e, body, bodyS, -4, -4, 5); ctx.fillStyle = ok ? '#c98b6a' : C.pink; ctx.fill(ellP(sd * 144, -60, 32 * er, 10 * er, sd * 0.45)); }
    const head = ellP(0, 0, 136, 124);
    cel(ctx, head, body, bodyS, -12, -12, 0);
    ctx.save(); ctx.clip(head);
    if (!ok) { [[-92, -62, 34], [96, -50, 30], [-110, 30, 22], [112, 40, 24], [0, -92, 26]].forEach(([px, py, r]) => cel(ctx, ellP(px, py, r, r * 0.85), G.patch, G.patchS, -3, -3, 0)); }
    ctx.fillStyle = ok ? '#f3e6d2' : G.muzzle; ctx.fill(ellP(0, 82, 100, 66));
    ctx.fillStyle = ok ? '#dccab0' : G.muzzleS; ctx.fill(ellP(14, 96, 92, 50));
    ctx.fillStyle = ok ? '#f3e6d2' : G.muzzle; ctx.fill(ellP(-6, 78, 92, 56));
    ctx.restore();
    ol(ctx, head, 6);
    shine(ctx, -70, -56, 22, 10, -0.6);
    // nostrils
    ctx.fillStyle = C.plum; ctx.fill(ellP(-26, 64, 8, 5, 0.3)); ctx.fill(ellP(26, 64, 8, 5, -0.3));
    const ek = P.eyes || 'normal', iris = ok ? '#7a4a2a' : '#a0602a';
    eye(ctx, -54, -18, 30, 40, iris, ek, 1, P.look || [0, 0]); eye(ctx, 54, -18, 30, 40, iris, ek, -1, P.look || [0, 0]);
    blush(ctx, -98, 30, 20, 11); blush(ctx, 98, 30, 20, 11);
    if (P.tongue > 0) {
      const tp = P.tPts || bez([0, 108], [30, 200], [150, 230], [200, 150]);
      ctx.save(); ctx.fillStyle = '#b8456f'; ctx.fill(ellP(0, 106, 26, 16)); ol(ctx, ellP(0, 106, 26, 16), 4); ctx.restore();
      tongueStroke(ctx, tp, P.tongue, 40, 0.08, 1);
    } else mouth(ctx, 0, 104, 13, P.mouth || 'w');
    ctx.restore();
  }
  // okapi body with zebra-striped legs, drawn behind the head
  function okapiBody(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    for (const lx of [-170, -90, 90, 170]) {
      const leg = rrP(lx - 26, 60, 52, 330, 24); cel(ctx, leg, '#f6efe2', '#ddd0bd', -4, -4, 0);
      ctx.save(); ctx.clip(leg); ctx.fillStyle = '#5a3424'; for (let k = 0; k < 6; k++) ctx.fill(rrP(lx - 30, 80 + k * 46, 60, 22, 10)); ctx.restore(); ol(ctx, leg, 5);
      cel(ctx, rrP(lx - 30, 380, 60, 28, 12), '#3b2342', '#2a1830', -2, -2, 4);
    }
    cel(ctx, ellP(0, 40, 240, 120), G.okapi, G.okapiS, -10, -10, 6);
    ctx.restore();
  }
  function sun(ctx, x, y, s, t, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.save(); ctx.rotate(t * 0.6);
    for (let i = 0; i < 10; i++) { ctx.save(); ctx.rotate(i * TAU / 10); const L = 1 + 0.08 * Math.sin(t * 8 + i); cel(ctx, roundPoly([[150 * L + 70, 0], [140, -28], [140, 28]], 10), C.butterD, '#f5b83d', -2, -2, 5); ctx.restore(); }
    ctx.restore();
    cel(ctx, ellP(0, 0, 130, 130), '#ffd84d', '#ffb43c', -12, -12, 6);
    shine(ctx, -64, -60, 24, 11, -0.6);
    const e = P.eyes || 'happy';
    eye(ctx, -44, -8, 24, 31, '#e08a2a', e, 1); eye(ctx, 44, -8, 24, 31, '#e08a2a', e, -1);
    blush(ctx, -78, 30, 18, 10); blush(ctx, 78, 30, 18, 10); mouth(ctx, 0, 44, 13, P.mouth || 'smile');
    ctx.restore();
  }
  function sunscreen(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); ctx.scale(s, s);
    cel(ctx, rrP(-34, -230, 68, 70, 14), C.pinkD, C.red, -3, -3, 5);
    cel(ctx, rrP(-110, -170, 220, 340, 60), C.sky, C.skyS, -10, -10, 6);
    shine(ctx, -70, -110, 12, 40, 0.1, 0.8);
    cel(ctx, rrP(-80, 40, 160, 90, 26), C.white, C.creamS, -4, -4, 4);
    ctx.font = `700 60px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = C.skyD; ctx.fillText('SPF', 0, 88);
    const e = P.eyes || 'happy';
    eye(ctx, -40, -60, 22, 29, '#3f8fd0', e, 1); eye(ctx, 40, -60, 22, 29, '#3f8fd0', e, -1);
    blush(ctx, -70, -26, 14, 8); blush(ctx, 70, -26, 14, 8); mouth(ctx, 0, -14, 11, P.mouth || 'w');
    ctx.restore();
  }
  // acacia branch with long white thorns and little leaflets (pts = the branch spine)
  function branch(ctx, pts, t, seed = 4) {
    ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    strokePts(ctx, pts, 62, C.plum); strokePts(ctx, pts, 48, G.bark);
    ctx.save(); ctx.translate(4, 8); ctx.globalAlpha = 0.6; strokePts(ctx, pts, 18, G.barkS); ctx.restore();
    const r = H.rng(seed), L = plen(pts);
    for (let d = 60; d < L - 30; d += 120) {
      const [x, y, a] = along(pts, d);
      for (const sd of [-1, 1]) {
        const aa = a + sd * (Math.PI / 2 - 0.45), len = r.range(80, 110);
        const tip = [x + Math.cos(aa) * len, y + Math.sin(aa) * len], b1 = [x + Math.cos(aa + 1.4) * 12, y + Math.sin(aa + 1.4) * 12], b2 = [x + Math.cos(aa - 1.4) * 12, y + Math.sin(aa - 1.4) * 12];
        const th = new Path2D(); th.moveTo(b1[0], b1[1]); th.lineTo(tip[0], tip[1]); th.lineTo(b2[0], b2[1]); th.closePath();
        ctx.fillStyle = '#fffaf0'; ctx.fill(th); ol(ctx, th, 3.5);
      }
      // leaflet cluster
      const la = a - Math.PI / 2 + r.range(-0.5, 0.5), lx = x + Math.cos(la) * 70 + 50, ly = y + Math.sin(la) * 70;
      for (let k = 0; k < 5; k++) { const q = ellP(lx + (k - 2) * 26, ly + Math.sin(t * 2 + k + d) * 4 - Math.abs(k - 2) * 10, 16, 28, (k - 2) * 0.35); cel(ctx, q, G.leaf, G.leafS, -3, -3, 3.5); }
    }
    ctx.restore();
  }
  function forearm(ctx, x0, x1, y, P = {}) {
    const arm = rrP(x0, y - 50, x1 - x0, 100, 50);
    cel(ctx, arm, C.peach, C.peachS, -6, -6, 6);
    cel(ctx, ellP(x1 + 30, y, 70, 62), C.peach, C.peachS, -6, -6, 6);
    ctx.save(); ctx.strokeStyle = C.peachS; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); for (let i = -1; i <= 1; i++) { ctx.moveTo(x1 + 64, y + i * 24); ctx.lineTo(x1 + 84, y + i * 24); } ctx.stroke(); ctx.restore();
  }
  function ruler(ctx, x0, x1, y, prog) {
    cel(ctx, rrP(x0 - 30, y - 50, x1 - x0 + 60, 100, 18), C.butter, C.butterS, -5, -5, 5);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath();
    const n = 10, k = Math.floor(n * prog + 1e-6);
    for (let i = 0; i <= k; i++) { const xx = x0 + (x1 - x0) * i / n; ctx.moveTo(xx, y - 48); ctx.lineTo(xx, y - (i % 5 === 0 ? 4 : 22)); }
    ctx.stroke(); ctx.restore();
  }
  function heat(ctx, x, y, t, n = 3, col = '#ff9a5c') {
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 9; ctx.lineCap = 'round';
    for (let i = 0; i < n; i++) { const xx = x + (i - (n - 1) / 2) * 60, ph = t * 6 + i; ctx.beginPath(); for (let k = 0; k <= 10; k++) { const yy = y - k * 12, px = xx + Math.sin(ph + k * 0.8) * 10; k ? ctx.lineTo(px, yy) : ctx.moveTo(px, yy); } ctx.stroke(); }
    ctx.restore();
  }
  function stampBox(ctx, x, y, str, size, t, t0, rot = -0.1) {
    const p = pop(t, t0, 1.6); if (p.s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(p.sx * (1 + 0.4 * Math.exp(-14 * p.u)), p.sy * (1 + 0.4 * Math.exp(-14 * p.u)));
    ctx.font = `700 ${size}px ${FONT}`; const tw = ctx.measureText(str).width + size;
    cel(ctx, rrP(-tw / 2, -size * 0.85, tw, size * 1.5, size * 0.4), C.white, '#ffe0ea', -5, -5, 0);
    ctx.lineWidth = 12; ctx.strokeStyle = C.red; ctx.stroke(rrP(-tw / 2, -size * 0.85, tw, size * 1.5, size * 0.4));
    ctx.fillStyle = C.red; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(str, 0, -size * 0.08);
    ctx.restore();
  }

  // ---------- scenes ----------
  const scenes = [
    function hook(ctx, t) {
      bgV(ctx, t, TH.butter, 51);
      const later = t >= P_[2].s - 0.15;
      const tg = w(0, 'tongues') - 0.1, why = t >= w(1, 'why') - 0.12;
      const p = pop(t, 0.05, 1.1);
      if (later) sun(ctx, 870, 760, 0.62 * pop(t, w(2, 'sun') - 0.15).s || 0.0001, t, { eyes: 'happy' });
      giraffe(ctx, 540, 1180 + bob(t, 0, 8), 1.6 * p.s, { sq: [p.sx / (p.s || 1), p.sy / (p.s || 1)], eyes: why && !later ? 'shock' : t >= w(2, 'sun') - 0.1 ? 'squeeze' : 'normal', tongue: grow(t, tg, 0.5), look: [0.4, 0.3] });
      if (t >= w(2, 'sun') - 0.1) heat(ctx, 820, 1250, t, 3);
      if (!later) {
        big(ctx, 'ALMOST', 540, 340, 130, t, w(0, 'almost') - 0.12, { line: C.lavD });
        big(ctx, 'BLACK!', 540, 540, 190, t, w(0, 'black') - 0.12, { line: C.tongue || G.tongue, fill: G.tongueHi });
        if (why) { const q = pop(t, w(1, 'why') - 0.12, 1.2); ctx.save(); ctx.translate(840, 840); ctx.scale(q.sx, q.sy); bubble(ctx, 0, 0, 300, 160, [-90, 140]); kText(ctx, 'WHY?', 0, 30, 100, { line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); }
      } else {
        numPop(ctx, '12 HOURS', 540, 400, 170, t, w(2, 'twelve') - 0.12, { fill: C.butter, line: C.pinkD });
        label(ctx, 'a day, in the sun', 450, 580, 64, t, w(2, 'day') - 0.15, C.white);
      }
      twinkles(ctx, W, HH, t, 21, 10, (x, y) => y > 200 && y < 1700 && x > 150 && x < 930);
    },
    function lengthS(ctx, t) {
      bgV(ctx, t, TH.pink, 52);
      const tp = bez([250, 900], [450, 880], [700, 930], [960, 880]);
      giraffe(ctx, 170, 800, 0.95, { neck: false, eyes: t >= w(4, 'forearm') - 0.1 ? 'happy' : 'normal', tongue: 0.001, look: [0.6, 0.2] });
      tongueStroke(ctx, tp, grow(t, w(3, 'tongue') - 0.15, w(3, 'long') - w(3, 'tongue')), 70, 0.0, 1);
      ruler(ctx, 260, 960, 1060, grow(t, w(3, 'fortyfive') - 0.3, 1.2));
      numPop(ctx, '45–50 cm', 560, 520, 170, t, w(3, 'fortyfive') - 0.12, { fill: C.white, line: G.tongue });
      label(ctx, 'about 18–20 inches', 560, 680, 54, t, w(3, 'fifty') - 0.1, C.butter);
      const fa = pop(t, w(4, 'your') - 0.12);
      if (fa.s > 0) { ctx.save(); ctx.translate(500, 1300); ctx.scale(fa.sx, fa.sy); ctx.translate(-500, -1300); forearm(ctx, 260, 700, 1300); ctx.restore(); }
      label(ctx, 'your forearm', 480, 1440, 58, t, w(4, 'forearm') - 0.15, C.sky);
      if (t >= w(4, 'longer') - 0.12) { const pts = [[880, 1250], [930, 1110]]; dotted(ctx, pts, grow(t, w(4, 'longer'), 0.4), C.pinkD, 9, 28, 1.2); }
      big(ctx, 'LONGER!', 540, 1600, 130, t, w(4, 'longer') - 0.12, { line: C.pinkD, fill: C.butter });
    },
    function acaciaS(ctx, t) {
      bgV(ctx, t, TH.mint, 53);
      branch(ctx, bez([-40, 760], [300, 640], [700, 760], [1120, 600]), t, 4);
      const wrap = arcPts(560, 726, 64, Math.PI * 0.62, Math.PI * 0.62 - Math.PI * 1.7, 40);
      const tp = bez([700, 1980], [760, 1500], [420, 1150], [520, 790]).concat(wrap.slice(1));
      const t0 = w(5, 'wraps') - 0.25;
      tongueStroke(ctx, tp, grow(t, t0, 1.0), 74, 0.0, 1);
      label(ctx, 'thorns!', 200, 560, 58, t, w(5, 'thorny') - 0.12, C.white);
      big(ctx, 'LIKE A', 540, 300, 110, t, w(5, 'like') - 0.12, { line: C.mintD });
      big(ctx, 'HAND!', 540, 460, 150, t, w(5, 'hand') - 0.12, { line: C.mintD, fill: C.butter });
      // magnifier on the tongue surface
      const mp = pop(t, w(6, 'bumps') - 0.15, 1.1);
      if (mp.s > 0) {
        const cx = 770, cy = 1230, R = 220 * mp.s;
        ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.clip();
        ctx.fillStyle = G.tongue; ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
        const armor = t >= w(7, 'armor') - 0.1;
        for (let j = 0; j < 5; j++) for (let i = 0; i < 6; i++) {
          const bx = cx - 220 + i * 84 + (j % 2) * 42, by = cy - 170 + j * 90, q = pop(t, w(6, 'bumps') - 0.1 + (i + j) * 0.03, 1.2);
          if (q.s <= 0) continue; const b = roundPoly([[bx - 26, by + 22], [bx, by - 30 * q.s], [bx + 26, by + 22]], 12);
          cel(ctx, b, '#7b58a0', G.tongueS, -3, -3, 3.5);
          if (armor) shine(ctx, bx - 6, by - 4, 4, 8, 0.3, 0.7);
        }
        // a thorn pokes in and bounces off
        if (t >= w(7, 'spikes') - 0.6) { const u = t - (w(7, 'spikes') - 0.6), d = u < 0.45 ? H.ease.in(u / 0.45) : 1 - 0.5 * H.ease.out(H.clamp((u - 0.45) / 0.3));
          ctx.save(); ctx.translate(cx + 60, cy - 260 + 200 * d); const th = new Path2D(); th.moveTo(-18, -160); th.lineTo(0, 30); th.lineTo(18, -160); th.closePath(); ctx.fillStyle = '#fffaf0'; ctx.fill(th); ol(ctx, th, 4); ctx.restore(); }
        ctx.restore();
        ctx.save(); ctx.lineWidth = 22; ctx.strokeStyle = C.plum; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.stroke(); ctx.lineWidth = 12; ctx.strokeStyle = C.lav; ctx.stroke(); ctx.restore();
        if (mp.s > 0.5) { ctx.save(); ctx.lineCap = 'round'; ctx.lineWidth = 40; ctx.strokeStyle = C.plum; ctx.beginPath(); ctx.moveTo(cx - R * 0.72, cy + R * 0.72); ctx.lineTo(cx - R * 1.15, cy + R * 1.15); ctx.stroke(); ctx.lineWidth = 26; ctx.strokeStyle = C.lavD; ctx.stroke(); ctx.restore(); }
        if (t >= w(7, 'spikes') - 0.15) { impactLines(ctx, cx + 60, cy - 60, 50, t, w(7, 'spikes') - 0.15, 8); const q = pop(t, w(7, 'spikes') - 0.15, 1.2); kana(ctx, 'カチン', cx + 30, cy - 280, 84, 0.12, q.s, C.butter); }
      }
      big(ctx, 'PAPILLAE', 540, 1620, 120, t, w(6, 'papillae') - 0.12, { line: C.lavD });
    },
    function sunS(ctx, t) {
      bgV(ctx, t, SUNNY, 54);
      const sp = pop(t, w(8, 'sun') - 0.15, 1.1);
      if (sp.s > 0) sun(ctx, 540, 470, 1.0 * sp.s, t, { eyes: t >= w(9, 'sunscreen') - 0.1 ? 'shock' : 'happy', mouth: t >= w(9, 'sunscreen') - 0.1 ? 'O' : 'smile' });
      label(ctx, 'the African sun', 540, 760, 62, t, w(8, 'african') - 0.12, C.white);
      const ss = t >= w(9, 'sunscreen') - 0.12;
      giraffe(ctx, 400, 1230, 1.25, { eyes: ss ? 'happy' : t >= w(8, 'eating') - 0.1 ? 'squeeze' : 'normal', tongue: 1, look: [0.3, -0.4] });
      if (!ss && t >= w(8, 'sun') - 0.1) { heat(ctx, 660, 1340, t, 3); sweat(ctx, 270, 1050, 1.2); }
      label(ctx, 'scientists think...', 540, 880, 60, t, w(9, 'scientists') - 0.12, C.lav);
      if (ss) {
        const q = pop(t, w(9, 'sunscreen') - 0.12, 1.2);
        sunscreen(ctx, 860, 1220, 0.95 * q.s, { eyes: 'happy', rot: 0.12 });
        ctx.save(); ctx.globalAlpha = 0.5 * q.s; ctx.strokeStyle = C.sky; ctx.lineWidth = 16; ctx.beginPath(); ctx.arc(620, 1400, 120, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke(); ctx.restore();
        sparkle(ctx, 700, 1330, 26 * q.s, C.white, t);
        big(ctx, 'SUNSCREEN!', 540, 1620, 120, t, w(9, 'sunscreen') - 0.12, { line: C.skyD, fill: C.white });
      }
    },
    function diagram(ctx, t) {
      bgV(ctx, t, TH.lav, 55);
      const y = 1050, x0 = 150, x1 = 960, xb = 440;
      const app = pop(t, P_[10].s - 0.05, 1.0);
      ctx.save(); ctx.translate(540, y); ctx.scale(app.sx, app.sy); ctx.translate(-540, -y);
      const shape = rrP(x0, y - 140, x1 - x0, 280, 140);
      cel(ctx, shape, G.tongue, G.tongueS, -12, -12, 0);
      ctx.save(); ctx.clip(shape);
      ctx.fillStyle = G.tPinkS; ctx.fillRect(x0 - 10, y - 160, xb - x0 + 10, 320); ctx.fillStyle = G.tPink; ctx.fillRect(x0 - 22, y - 172, xb - x0 + 10, 320);
      // soft blend at the lips line
      const g = ctx.createLinearGradient(xb - 40, 0, xb + 40, 0); g.addColorStop(0, 'rgba(91,58,122,0)'); g.addColorStop(1, 'rgba(91,58,122,1)'); ctx.fillStyle = g; ctx.fillRect(xb - 40, y - 160, 80, 320);
      ctx.strokeStyle = 'rgba(40,20,60,0.35)'; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0 + 60, y); ctx.lineTo(x1 - 120, y); ctx.stroke();
      // pigment dots crowd into the front on "pigment"
      const pg = grow(t, w(11, 'pigment') - 0.15, 0.6), r = H.rng(9);
      for (let i = 0; i < 90; i++) { const px = r.range(xb + 20, x1 - 20), py = r.range(y - 130, y + 130), sh = r(); if (sh > pg) continue; ctx.fillStyle = 'rgba(30,14,46,0.75)'; ctx.fill(ellP(px, py, 9, 9)); }
      const r2 = H.rng(10); for (let i = 0; i < 40; i++) { ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fill(ellP(r2.range(x0 + 20, x1 - 20), r2.range(y - 120, y + 120), 4, 4)); }
      ctx.restore();
      ol(ctx, shape, 6); shine(ctx, xb + 160, y - 90, 90, 16, -0.05, 0.45);
      ctx.restore();
      // lips: the inside-mouth zone
      const lm = grow(t, w(12, 'inside') - 0.15, 0.5);
      if (lm > 0) { ctx.save(); ctx.setLineDash([2, 26]); ctx.lineCap = 'round'; ctx.lineWidth = 16; ctx.strokeStyle = C.plum; ctx.globalAlpha = lm; ctx.stroke(rrP(x0 - 60, y - 230, xb - x0 + 80, 460, 80)); ctx.restore(); label(ctx, 'inside the mouth', 330, 1380, 50, t, w(12, 'mouth') - 0.15, C.white); }
      // labels
      label(ctx, 'FRONT', 740, 820, 64, t, w(10, 'front') - 0.15, C.lav);
      if (t >= w(10, 'sticks') - 0.12) dotted(ctx, [[820, 1220], [1000, 1220]], grow(t, w(10, 'sticks') - 0.1, 0.5), C.lavD, 9, 28, 1.3);
      label(ctx, 'sticks out', 820, 1300, 52, t, w(10, 'sticks') - 0.1, C.white);
      big(ctx, 'DARK', 540, 330, 130, t, w(11, 'dark') - 0.12, { line: G.tongue, fill: G.tongueHi });
      big(ctx, 'PIGMENT', 540, 500, 130, t, w(11, 'pigment') - 0.12, { line: G.tongue, fill: C.white });
      label(ctx, 'BASE', 300, 820, 64, t, w(12, 'base') - 0.15, C.pink);
      big(ctx, 'PLAIN PINK', 540, 1600, 120, t, w(13, 'pink') - 0.12, { line: C.pinkD, fill: G.tPink });
    },
    function genius(ctx, t) {
      bgV(ctx, t, TH.pink, 56);
      const np = t >= w(15, 'not') - 0.12;
      const p = pop(t, P_[14].s - 0.05, 1.2);
      giraffe(ctx, 540, 1200 + (np ? 0 : bob(t, 0, 10)), 1.55 * p.s, { eyes: np ? 'shock' : t >= w(14, 'genius') - 0.12 ? 'star' : 'happy', tongue: np ? 0 : 1, mouth: 'O', sq: np ? squash(t, w(15, 'not') - 0.1) : [1, 1], rot: np ? 0 : 0.06 * Math.sin(t * 4) });
      if (!np) { big(ctx, 'GENIUS!', 540, 480, 170, t, w(14, 'genius') - 0.12, { line: C.pinkD, fill: C.butter }); confetti(ctx, t, w(14, 'genius'), 540, 1000, 50, 7); twinkles(ctx, W, HH, t, 22, 10, (x, y) => y > 600 && y < 1700 && x > 180 && x < 900); }
      else { stampBox(ctx, 540, 480, 'NOT PROVEN', 110, t, w(15, 'not') - 0.12); sweat(ctx, 760, 900, 1.6); const q = pop(t, w(15, 'proven') - 0.1, 1.2); kana(ctx, 'ガーン', 270, 820, 96, -0.12, q.s, C.lav); }
    },
    function okapiS(ctx, t) {
      bgV(ctx, t, FOREST, 57);
      const sh = grow(t, w(17, 'shade') - 0.4, 0.5);
      // forest canopy along the top and sides
      const r = H.rng(77);
      for (let i = 0; i < 9; i++) { const x = i * 135 - 20 + r.range(-20, 20), yy = 150 + r.range(-40, 60) + Math.sin(t * 1.2 + i) * 6; cel(ctx, ellP(x, yy, 120, 90, r.range(-0.4, 0.4)), '#7ccc8c', '#55a96b', -6, -6, 5); }
      for (const sx of [70, 1010]) { cel(ctx, rrP(sx - 40, 200, 80, 1600, 30), G.bark, G.barkS, -6, -6, 6); }
      const p = pop(t, w(16, 'okapi') - 0.12, 1.1);
      if (p.s > 0) {
        ctx.save(); ctx.translate(540, 1300); ctx.scale(p.sx, p.sy); ctx.translate(-540, -1300);
        okapiBody(ctx, 540, 1330, 1.05);
        const tpts = bez([0, 108], [30, 200], [150, 230], [200, 150]);
        giraffe(ctx, 540, 1010 + bob(t, 1, 6), 1.3, { okapi: true, neck: true, eyes: t >= w(17, 'shade') - 0.1 ? 'happy' : 'normal', tongue: grow(t, w(17, 'tongue') - 0.3, 0.45), tPts: tpts, look: [0.4, 0.2] });
        ctx.restore();
      }
      if (sh > 0) { ctx.save(); ctx.globalAlpha = 0.28 * sh; ctx.fillStyle = '#2f5a3e'; ctx.fillRect(0, 0, W, HH); ctx.restore(); }
      big(ctx, 'OKAPI', 540, 470, 170, t, w(16, 'okapi') - 0.12, { line: C.mintD, fill: C.butter });
      label(ctx, "giraffe's forest cousin", 540, 640, 56, t, w(16, 'cousin') - 0.15, C.white);
      label(ctx, 'same dark tongue', 760, 780, 52, t, w(17, 'same') - 0.12, C.lav);
      big(ctx, 'IN THE SHADE?!', 540, 1610, 105, t, w(17, 'shade') - 0.12, { line: C.mintD, fill: C.white });
    },
    function endS(ctx, t) {
      bgV(ctx, t, TH.butter, 58);
      const p = pop(t, P_[18].s - 0.05, 1.2);
      giraffe(ctx, 280, 1240 + bob(t, 0, 8), 1.15 * p.s, { eyes: t >= w(19, 'else') - 0.1 ? 'star' : 'normal', tongue: 1, look: [0.6, -0.3], rot: 0.05 * Math.sin(t * 3) });
      big(ctx, 'WHY SO', 540, 330, 140, t, w(18, 'why') - 0.12, { line: C.lavD });
      big(ctx, 'DARK?', 540, 510, 170, t, w(18, 'black') - 0.12, { line: G.tongue, fill: G.tongueHi });
      const a = pop(t, w(19, 'sunscreen') - 0.12, 1.2);
      if (a.s > 0) { sun(ctx, 660, 830, 0.38 * a.s, t); label(ctx, 'SUNSCREEN?', 790, 1000, 62, t, w(19, 'sunscreen') - 0.12, C.sky); }
      const b = pop(t, w(19, 'something') - 0.12, 1.2);
      if (b.s > 0) { label(ctx, 'SOMETHING ELSE?', 760, 1160, 62, t, w(19, 'something') - 0.12, C.lav); }
      const q = pop(t, w(19, 'else') - 0.05, 1.2);
      if (q.s > 0) { ctx.save(); ctx.translate(560, 1560); ctx.scale(q.sx, q.sy); cel(ctx, rrP(-400, -90, 800, 170, 80), C.white, C.creamS, -6, -6, 6); ctx.font = `700 72px ${FONT}`; ctx.textAlign = 'center'; ctx.fillStyle = C.plum; ctx.fillText('tell me in the comments!', 0, 18); ctx.restore(); }
      confetti(ctx, t, w(19, 'else') + 0.1, 540, 1100, 60, 9);
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
    pop_(0.05, 500, 0.9, 0, false); k.play('swish', w(0, 'tongues') - 0.1, { dur: 0.4, gain: 0.6 }); big_(w(0, 'black') - 0.1, 'C6');
    pop_(w(1, 'why') - 0.1, 800, 0.8, 0, false); big_(w(2, 'twelve') - 0.1, 'G5'); k.play('sparkle', w(2, 'sun') - 0.1, { n: 6, gain: 0.5 });
    k.play('riser', w(3, 'tongue') - 0.15, { dur: w(3, 'long') - w(3, 'tongue'), gain: 0.45 }); big_(w(3, 'fortyfive') - 0.1, 'E6');
    for (let i = 0; i <= 10; i++) k.play('tick', w(3, 'fortyfive') - 0.3 + i * 0.12, { minor: true, gain: 0.5 });
    pop_(w(4, 'your') - 0.1, 600); k.play('stamp', w(4, 'longer') - 0.08, { gain: 0.5 });
    k.play('swish', w(5, 'wraps') - 0.2, { dur: 0.8, gain: 0.5 }); pop_(w(5, 'thorny') - 0.1, 900); big_(w(5, 'hand') - 0.1, 'C6');
    for (let i = 0; i < 8; i++) pop_(w(6, 'bumps') - 0.1 + i * 0.06, 700 + i * 70, 0.45); big_(w(6, 'papillae') - 0.1, 'A5');
    k.play('whoosh', w(7, 'spikes') - 0.6, { dur: 0.45, gain: 0.4 }); k.play('tock', w(7, 'spikes') - 0.15, { f: 1400, gain: 0.8 }); k.play('ding', w(7, 'spikes') - 0.1, { f: 'A6', gain: 0.25 });
    pop_(w(8, 'sun') - 0.15, 500, 0.9, 0, false); k.play('sparkle', w(8, 'african') - 0.1, { n: 5, gain: 0.4 }); pop_(w(9, 'scientists') - 0.1, 700);
    k.play('impact', w(9, 'sunscreen') - 0.1, { gain: 0.6 }); k.play('success', w(9, 'sunscreen'), { f: 'C6', gain: 0.4 });
    pop_(P_[10].s - 0.05, 500, 0.8, 0, false); pop_(w(10, 'front') - 0.1, 800); k.play('swish', w(10, 'sticks') - 0.1, { gain: 0.4 });
    big_(w(11, 'dark') - 0.1, 'G5'); for (let i = 0; i < 10; i++) k.play('tick', w(11, 'pigment') - 0.1 + i * 0.05, { minor: true, gain: 0.45 });
    pop_(w(12, 'base') - 0.1, 600); pop_(w(12, 'mouth') - 0.1, 750); big_(w(13, 'pink') - 0.1, 'E6');
    k.play('sparkle', w(14, 'genius') - 0.1, { n: 8, gain: 0.6 }); big_(w(14, 'genius') - 0.1, 'C6');
    k.play('stamp', w(15, 'not') - 0.08, { gain: 0.7 }); k.play('error', w(15, 'proven') - 0.05, { f: 'A3', gain: 0.3 });
    pop_(w(16, 'okapi') - 0.12, 500, 0.9, 0, false); big_(w(16, 'okapi') - 0.05, 'G5'); pop_(w(16, 'cousin') - 0.1, 750);
    k.play('swish', w(17, 'tongue') - 0.3, { gain: 0.5 }); pop_(w(17, 'same') - 0.1, 800); k.play('whoosh', w(17, 'shade') - 0.4, { dur: 0.5, gain: 0.35 }); big_(w(17, 'shade') - 0.1, 'E5');
    pop_(P_[18].s - 0.05, 600, 0.8, 0, false); big_(w(18, 'black') - 0.1, 'C6');
    pop_(w(19, 'sunscreen') - 0.1, 800, 0.7, -0.2, false); pop_(w(19, 'something') - 0.1, 900, 0.7, 0.2, false);
    k.play('success', w(19, 'else') + 0.1, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(19, 'else') + 0.1, { n: 8, gain: 0.7 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
