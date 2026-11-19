// ===== Kawaii Anime, vertical: "Why don't woodpeckers get headaches?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'コンカンドドドぷにょガーンキラ';
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
  const P_ = [{"s":0.25,"e":2.16,"text":"Woodpecker pecks would concuss you.","words":[["woodpecker",0.25],["pecks",0.89],["would",1.21],["concuss",1.53],["you",1.97]]},{"s":2.63,"e":4.03,"text":"They do up to 20 a second,","words":[["they",2.63],["do",2.93],["up",3.07],["to",3.22],["20",3.37],["a",3.52],["second",3.59]]},{"s":4.21,"e":5.71,"text":"around 12,000 a day,","words":[["around",4.21],["12000",4.81],["a",5.31],["day",5.41]]},{"s":5.99,"e":7.97,"text":"and never get a headache. Why?","words":[["and",5.99],["never",6.25],["get",6.68],["a",6.94],["headache",7.02],["why",7.71]]},{"s":8.54,"e":11.59,"text":"For years, people said their skull was a shock absorber,","words":[["for",8.54],["years",8.75],["people",9.08],["said",9.49],["their",9.76],["skull",10.1],["was",10.44],["a",10.64],["shock",10.71],["absorber",11.05]]},{"s":11.99,"e":13.14,"text":"like a built-in helmet.","words":[["like",11.99],["a",12.25],["builtin",12.31],["helmet",12.76]]},{"s":13.5,"e":16.72,"text":"But in 2022, scientists filmed woodpeckers","words":[["but",13.5],["in",13.77],["2022",13.95],["scientists",14.31],["filmed",15.2],["woodpeckers",15.74]]},{"s":16.8,"e":18.68,"text":"with high-speed cameras.","words":[["with",16.8],["highspeed",17.18],["cameras",18.02]]},{"s":19.04,"e":20.86,"text":"And the head didn't cushion anything.","words":[["and",19.04],["the",19.22],["head",19.41],["didnt",19.65],["cushion",19.95],["anything",20.38]]},{"s":21.24,"e":23.02,"text":"The beak and the brain stopped together,","words":[["the",21.24],["beak",21.4],["and",21.61],["the",21.77],["brain",21.94],["stopped",22.21],["together",22.58]]},{"s":23.37,"e":24.68,"text":"like one stiff hammer.","words":[["like",23.37],["one",23.66],["stiff",23.88],["hammer",24.24]]},{"s":25.05,"e":26.58,"text":"Which honestly makes sense.","words":[["which",25.05],["honestly",25.38],["makes",25.91],["sense",26.24]]},{"s":26.93,"e":29.55,"text":"Nobody builds a hammer with a sponge inside.","words":[["nobody",26.93],["builds",27.37],["a",27.81],["hammer",27.88],["with",28.32],["a",28.61],["sponge",28.68],["inside",29.12]]},{"s":30.02,"e":31.48,"text":"It would waste every swing.","words":[["it",30.02],["would",30.15],["waste",30.49],["every",30.82],["swing",31.15]]},{"s":31.83,"e":33.61,"text":"So the real secret is size.","words":[["so",31.83],["the",32.0],["real",32.26],["secret",32.59],["is",33.1],["size",33.27]]},{"s":34.06,"e":37.59,"text":"A woodpecker's brain is hundreds of times smaller than yours,","words":[["a",34.06],["woodpeckers",34.13],["brain",34.91],["is",35.26],["hundreds",35.4],["of",35.97],["times",36.11],["smaller",36.46],["than",36.96],["yours",37.24]]},{"s":38.06,"e":40.94,"text":"and tiny brains can take much bigger jolts.","words":[["and",38.06],["tiny",38.31],["brains",38.64],["can",39.13],["take",39.38],["much",39.71],["bigger",40.04],["jolts",40.53]]},{"s":41.33,"e":43.06,"text":"That jolt that would knock you out?","words":[["that",41.33],["jolt",41.58],["that",41.83],["would",42.08],["knock",42.38],["you",42.69],["out",42.88]]},{"s":43.64,"e":46.07,"text":"For them, it's well below the danger line.","words":[["for",43.64],["them",43.87],["its",44.17],["well",44.4],["below",44.7],["the",45.08],["danger",45.31],["line",45.76]]},{"s":46.44,"e":48.77,"text":"They'd have to hit twice as fast to get hurt.","words":[["theyd",46.44],["have",46.78],["to",47.06],["hit",47.19],["twice",47.4],["as",47.74],["fast",47.88],["to",48.15],["get",48.29],["hurt",48.5]]},{"s":49.2,"e":51.11,"text":"So if a woodpecker were as big as you,","words":[["so",49.2],["if",49.33],["a",49.46],["woodpecker",49.53],["were",50.19],["as",50.45],["big",50.58],["as",50.78],["you",50.91]]},{"s":51.38,"e":52.26,"text":"could it still peck?","words":[["could",51.38],["it",51.65],["still",51.76],["peck",52.04]]}];
  // ---------- timing ----------
  const BEATS = [
    { id: 'hook', s: P_[0].s, e: P_[3].e }, { id: 'myth', s: P_[4].s, e: P_[5].e }, { id: 'film', s: P_[6].s, e: P_[7].e },
    { id: 'nocushion', s: P_[8].s, e: P_[8].e }, { id: 'hammer', s: P_[9].s, e: P_[10].e }, { id: 'sponge', s: P_[11].s, e: P_[13].e },
    { id: 'size', s: P_[14].s, e: P_[16].e }, { id: 'danger', s: P_[17].s, e: P_[19].e }, { id: 'end', s: P_[20].s, e: P_[21].e },
  ];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  const CUTS = BEATS.slice(1).map((b, i) => ({ t: (BEATS[i].e + b.s) / 2, shape: i % 3 === 2 ? 'heart' : 'star' }));
  const CUTW = 0.5;
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

  // ---------- palette for this film ----------
  const WP = { body: '#6f5f8c', bodyS: '#54466e', belly: '#fffaf4', bellyS: '#e4d8f6', cap: '#ff5c7a', capS: '#e0405f', beak: '#d9d2e8', beakS: '#ada4c4', iris: '#7a4f9a' };
  const BARK = { b: '#d9a27c', s: '#b47c5c', line: '#9a6448', in: '#7a4a38' };
  const BRAIN = { b: '#ffb3c8', s: '#f28aa8', fold: '#e0668e' };
  const SKY = { base: '#e3f4ff', dot: '#cfeafc', acc: '#fff1a0', kind: 'clouds' };

  // ---------- peck rhythm: anime "on twos", 4 drawings per peck (rest, wind, HIT, recoil) ----------
  const PK = [0, 0.45, 1, 0.55];
  const peckAt = (t, t0 = 0) => (t < t0 ? 0 : PK[Math.floor((t - t0) * 15 + 1e-6) % 4]);
  const isHit = (t, t0 = 0) => t >= t0 && Math.floor((t - t0) * 15 + 1e-6) % 4 === 2;
  const TRUNK_X = 243; // local x of the trunk surface (where the beak tip lands at full peck)

  // ---------- cast ----------
  // Pip the chibi woodpecker, facing right, clinging to a trunk. (x,y) = the pivot near its feet.
  // P: peck 0..1, eyes, mouth, look, xray 0..1 (shows the little brain), sponge 0..1 (the myth's cushion), helmet 0..1
  function woodpecker(ctx, x, y, s, P = {}) {
    const a = H.lerp(-0.22, 0.08, P.peck || 0);
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    // feet gripping the trunk (do not rotate)
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineCap = 'round'; ctx.lineWidth = 16;
    ctx.beginPath(); ctx.moveTo(185, 35); ctx.lineTo(TRUNK_X - 6, 25); ctx.moveTo(185, 60); ctx.lineTo(TRUNK_X - 6, 70); ctx.stroke();
    ctx.lineWidth = 9; ctx.strokeStyle = WP.beakS; ctx.stroke(); ctx.restore();
    ctx.rotate(a);
    // stiff tail braced against the trunk
    const tail = roundPoly([[120, 60], [175, 50], [TRUNK_X - 4, 215], [TRUNK_X - 45, 240]], 14);
    cel(ctx, tail, WP.body, WP.bodyS, -5, -5, 5);
    ctx.save(); ctx.strokeStyle = WP.bodyS; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(150, 70); ctx.lineTo(TRUNK_X - 26, 222); ctx.stroke(); ctx.restore();
    // body
    const body = ellP(122, -10, 66, 104, -0.32);
    cel(ctx, body, WP.body, WP.bodyS, -8, -8, 5);
    ctx.save(); ctx.clip(body); cel(ctx, ellP(155, 8, 40, 85, -0.32), WP.belly, WP.bellyS, -4, -4, 0); ctx.restore();
    const wing = ellP(92, 10, 38, 78, -0.25); cel(ctx, wing, WP.bodyS, '#40355a', -4, -4, 4.5);
    const r = H.rng(4); for (let i = 0; i < 7; i++) { ctx.fillStyle = C.white; ctx.fill(ellP(80 + i * 3 + r.range(-12, 18), -40 + i * 14, 6, 4, -0.2)); }
    // beak (drawn under the head outline)
    const beak = roundPoly([[118, -178], [228, -150], [116, -128]], 7);
    cel(ctx, beak, WP.beak, WP.beakS, -3, -3, 5);
    ctx.save(); ctx.strokeStyle = WP.beakS; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(122, -152); ctx.lineTo(215, -150); ctx.stroke(); ctx.restore();
    // head
    const head = ellP(62, -150, 84, 80);
    cel(ctx, head, WP.body, WP.bodyS, -8, -8, 0);
    ctx.save(); ctx.clip(head);
    ctx.fillStyle = WP.belly; ctx.fill(ellP(78, -120, 70, 42, 0.1));
    ctx.fillStyle = WP.cap; ctx.fill(ellP(40, -228, 90, 56, -0.2)); ctx.fillStyle = WP.capS; ctx.fill(ellP(-10, -205, 50, 40, -0.2));
    // x-ray / myth window
    const xr = P.xray || 0, sp = P.sponge || 0;
    if (xr > 0) {
      ctx.globalAlpha = xr; ctx.fillStyle = '#fff3f7'; ctx.fill(ellP(55, -150, 70, 64));
      if (sp > 0) {
        ctx.globalAlpha = xr * sp; cel(ctx, ellP(55, -150, 66, 60), C.butter, C.butterS, -4, -4, 0);
        const rs = H.rng(9); for (let i = 0; i < 22; i++) { const aa = rs() * TAU, d = rs.range(40, 60); ctx.fillStyle = '#f0c45a'; ctx.fill(ellP(55 + Math.cos(aa) * d, -150 + Math.sin(aa) * d * 0.9, rs.range(4, 8), rs.range(3, 6))); }
      }
      ctx.globalAlpha = xr; brainShape(ctx, 50, -152, 36, P.brainFace || 'w', 0);
      ctx.globalAlpha = 1;
    }
    ctx.restore();
    ol(ctx, head, 5);
    if (xr > 0) { ctx.save(); ctx.globalAlpha = xr; ctx.setLineDash([10, 9]); ol(ctx, ellP(55, -150, 70, 64), 3.5, C.plum); ctx.restore(); }
    // crest tuft
    const tuft = roundPoly([[-10, -205], [-55, -232], [-20, -190]], 6); cel(ctx, tuft, WP.cap, WP.capS, -2, -2, 4.5);
    // face (the eye sits in front of the window)
    eye(ctx, 92, -158, 15, 20, WP.iris, P.eyes || 'normal', 1, P.look || [0.5, 0]);
    blush(ctx, 100, -118, 13, 7);
    if (P.mouth) mouth(ctx, 140, -132, 8, P.mouth);
    // helmet (the myth)
    const hm = P.helmet || 0;
    if (hm > 0) {
      ctx.save(); ctx.translate(0, (1 - hm) * -120); ctx.globalAlpha = Math.min(1, hm * 1.5);
      const hp = new Path2D(); hp.ellipse(55, -170, 98, 90, 0, Math.PI * 0.98, Math.PI * 2.02); hp.closePath();
      cel(ctx, hp, C.sky, C.skyS, -6, -6, 5); ctx.fillStyle = C.skyD; ctx.fill(rrP(-48, -182, 206, 22, 11)); ol(ctx, rrP(-48, -182, 206, 22, 11), 4);
      shine(ctx, 20, -235, 26, 10, -0.4, 0.85); sparkle(ctx, 110, -250, 14, C.white, 0, 2.5);
      ctx.restore();
    }
    ctx.restore();
  }
  // the tip of the beak in world space (for chips/impacts)
  const tipXY = (x, y, s, peck) => { const a = H.lerp(-0.22, 0.08, peck), lx = 228, ly = -150; return [x + s * (lx * Math.cos(a) - ly * Math.sin(a)), y + s * (lx * Math.sin(a) + ly * Math.cos(a))]; };
  function trunk(ctx, x0, w_, holes = []) {
    const p = rrP(x0, -40, w_, HH + 80, 30); cel(ctx, p, BARK.b, BARK.s, 16, 0, 6);
    ctx.save(); ctx.clip(p); ctx.strokeStyle = BARK.line; ctx.lineCap = 'round'; ctx.lineWidth = 7;
    const r = H.rng(31); for (let i = 0; i < 16; i++) { const xx = x0 + r.range(30, w_ - 20), yy = r.range(0, HH), L = r.range(60, 140); ctx.beginPath(); ctx.moveTo(xx, yy); ctx.quadraticCurveTo(xx + 10, yy + L / 2, xx - 4, yy + L); ctx.stroke(); }
    holes.forEach(([hy, hr]) => { cel(ctx, ellP(x0 + 18, hy, hr * 0.7, hr), BARK.in, '#5c3428', 3, 3, 4); });
    ctx.restore();
  }
  function chips(ctx, x, y, t, t0, seed) {
    const u = t - t0; if (u < 0 || u > 0.45) return;
    const r = H.rng(seed);
    for (let i = 0; i < 6; i++) { const a = Math.PI + r.range(-1.1, 1.1), v = r.range(260, 520), px = x + Math.cos(a) * v * u, py = y + Math.sin(a) * v * u + 900 * u * u; ctx.save(); ctx.translate(px, py); ctx.rotate(u * 12 + i); cel(ctx, rrP(-11, -5, 22, 10, 4), C.butter, BARK.b, -2, -2, 3); ctx.restore(); }
  }
  // a kawaii brain: lumpy pink blob with fold squiggles and an optional face
  function brainShape(ctx, cx, cy, r, face = 'w', wob = 0) {
    const p = new Path2D(); [[-0.45, -0.18, 0.55], [0.0, -0.38, 0.6], [0.45, -0.2, 0.55], [0.5, 0.2, 0.5], [0, 0.25, 0.62], [-0.5, 0.2, 0.5]].forEach(([x, y, rr]) => { p.moveTo(cx + (x + rr) * r, cy + y * r); p.arc(cx + x * r, cy + y * r, rr * r, 0, TAU); });
    ctx.save(); ctx.lineJoin = 'round'; ctx.lineWidth = Math.max(4, r * 0.09); ctx.strokeStyle = C.plum; ctx.stroke(p); ctx.fillStyle = BRAIN.s; ctx.fill(p);
    ctx.save(); ctx.clip(p); ctx.translate(-r * 0.08, -r * 0.08); ctx.fillStyle = BRAIN.b; ctx.fill(p); ctx.restore();
    ctx.strokeStyle = BRAIN.fold; ctx.lineCap = 'round'; ctx.lineWidth = Math.max(2.5, r * 0.06); ctx.beginPath();
    ctx.moveTo(cx, cy - r * 0.85); ctx.quadraticCurveTo(cx + r * 0.1, cy - r * 0.3, cx - r * 0.02, cy + r * 0.05);
    ctx.moveTo(cx - r * 0.7, cy - r * 0.35); ctx.quadraticCurveTo(cx - r * 0.45, cy - r * 0.55, cx - r * 0.3, cy - r * 0.3);
    ctx.moveTo(cx + r * 0.35, cy - r * 0.55); ctx.quadraticCurveTo(cx + r * 0.6, cy - r * 0.4, cx + r * 0.75, cy - r * 0.15);
    ctx.stroke();
    shine(ctx, cx - r * 0.45, cy - r * 0.5, r * 0.16, r * 0.09, -0.5, 0.8);
    if (face && r > 25) { eye(ctx, cx - r * 0.3, cy + r * 0.12, r * 0.13, r * 0.17, '#c2457a', face === 'w' ? 'normal' : face, -1); eye(ctx, cx + r * 0.3, cy + r * 0.12, r * 0.13, r * 0.17, '#c2457a', face === 'w' ? 'normal' : face, 1); mouth(ctx, cx, cy + r * 0.42, r * 0.08, face === 'swirl' ? 'wobble' : face === 'shock' ? 'O' : 'w'); blush(ctx, cx - r * 0.55, cy + r * 0.38, r * 0.1, r * 0.06); blush(ctx, cx + r * 0.55, cy + r * 0.38, r * 0.1, r * 0.06); }
    ctx.restore();
  }
  // a chibi high-speed camera with a face, on a little tripod
  function camera(ctx, x, y, s, t, rec) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.strokeStyle = C.plum; ctx.lineCap = 'round'; ctx.lineWidth = 16; ctx.beginPath(); ctx.moveTo(0, 90); ctx.lineTo(-80, 330); ctx.moveTo(0, 90); ctx.lineTo(80, 330); ctx.moveTo(0, 90); ctx.lineTo(0, 330); ctx.stroke(); ctx.lineWidth = 8; ctx.strokeStyle = C.lavS; ctx.stroke();
    cel(ctx, rrP(-150, -100, 300, 200, 50), C.lav, C.lavS, -8, -8, 5.5);
    cel(ctx, rrP(-110, -150, 110, 60, 22), C.lavS, C.lavD, -4, -4, 5);
    const lens = ellP(150, 0, 70, 78); cel(ctx, lens, C.sky, C.skyS, -6, -6, 5.5); cel(ctx, ellP(160, 0, 42, 48), '#3b4f8a', '#2a3866', -3, -3, 4.5); shine(ctx, 145, -22, 14, 9, -0.5);
    if (rec && Math.floor(t * 2.5) % 2 === 0) { ctx.fillStyle = C.red; ctx.fill(ellP(100, -60, 15, 15)); ol(ctx, ellP(100, -60, 15, 15), 3.5); }
    eye(ctx, -70, 0, 15, 20, '#8f74e6', rec ? 'normal' : 'happy', -1, [1, 0]); eye(ctx, 0, 0, 15, 20, '#8f74e6', rec ? 'normal' : 'happy', 1, [1, 0]);
    blush(ctx, -95, 40, 14, 8); blush(ctx, 25, 40, 14, 8); mouth(ctx, -35, 45, 9, 'w');
    ctx.restore();
  }
  // hammer with a face. sponge 0..1 swaps the steel head for a squishy sponge
  function hammer(ctx, x, y, s, rot, sponge, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s); ctx.translate(0, -340);
    cel(ctx, rrP(-24, -40, 48, 380, 22), C.brown, C.brownS, -5, -5, 5.5);
    ctx.fillStyle = C.pinkD; ctx.fill(rrP(-26, 220, 52, 120, 24)); ol(ctx, rrP(-26, 220, 52, 120, 24), 5);
    const sq = P.sq || [1, 1];
    ctx.save(); ctx.translate(0, -60); ctx.scale(sq[0], sq[1]);
    if (sponge < 0.5) { const hp = rrP(-170, -70, 340, 140, 30); cel(ctx, hp, '#c9d6ea', '#94a6c4', -6, -6, 5.5); ctx.fillStyle = '#94a6c4'; ctx.fill(rrP(150, -70, 20, 140, 8)); shine(ctx, -110, -40, 40, 10, -0.1, 0.8); }
    else { const hp = rrP(-180, -80, 360, 160, 40); cel(ctx, hp, C.butterD, C.butterS, -6, -6, 5.5); const r = H.rng(12); for (let i = 0; i < 16; i++) { ctx.fillStyle = '#e8b840'; ctx.fill(ellP(r.range(-150, 150), r.range(-55, 55), r.range(7, 14), r.range(5, 10))); } }
    eye(ctx, -50, -5, 13, 17, '#5a74b8', P.eyes || 'normal', -1); eye(ctx, 20, -5, 13, 17, '#5a74b8', P.eyes || 'normal', 1);
    blush(ctx, -78, 28, 12, 7); blush(ctx, 48, 28, 12, 7); mouth(ctx, -15, 32, 8, P.mouth || 'w');
    ctx.restore(); ctx.restore();
  }
  function nail(ctx, x, y, s, depth, face = 'normal') {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const up = 160 * (1 - depth);
    cel(ctx, rrP(-16, -up, 32, up + 10, 8), '#c9d6ea', '#94a6c4', -3, -3, 4.5);
    cel(ctx, rrP(-60, -up - 26, 120, 30, 14), '#c9d6ea', '#94a6c4', -3, -3, 4.5);
    ctx.restore();
  }
  function plank(ctx, y) { const p = rrP(60, y, 960, 120, 24); cel(ctx, p, BARK.b, BARK.s, -8, -8, 6); ctx.save(); ctx.clip(p); ctx.strokeStyle = BARK.line; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); for (let i = 0; i < 4; i++) { ctx.moveTo(100 + i * 230, y + 40 + (i % 2) * 30); ctx.quadraticCurveTo(200 + i * 230, y + 25 + (i % 2) * 30, 280 + i * 230, y + 45 + (i % 2) * 30); } ctx.stroke(); ctx.restore(); }
  // chibi kid for scale
  function kid(ctx, x, y, s, eyes = 'normal') {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    for (const sd of [-1, 1]) { cel(ctx, rrP(sd * 34 - 22, -150, 44, 150, 22), C.skyD, '#3f8fd0', -4, -4, 5); }
    cel(ctx, rrP(-85, -380, 170, 250, 70), C.mint, C.mintS, -8, -8, 5.5);
    for (const sd of [-1, 1]) { ctx.save(); ctx.translate(sd * 80, -350); ctx.rotate(sd * 0.35); cel(ctx, rrP(-22, 0, 44, 170, 22), C.peach, C.peachS, -4, -4, 5); ctx.restore(); }
    const hd = ellP(0, -520, 150, 140); cel(ctx, hd, C.peach, C.peachS, -8, -8, 5.5);
    const hair = new Path2D(); hair.ellipse(0, -545, 158, 130, 0, Math.PI * 1.02, Math.PI * 1.98); hair.quadraticCurveTo(60, -560, 0, -575); hair.quadraticCurveTo(-60, -560, -156, -560); hair.closePath(); cel(ctx, hair, C.brown, C.brownS, -6, -6, 5);
    eye(ctx, -55, -500, 22, 30, '#7a5a3a', eyes, -1, [0.6, -0.3]); eye(ctx, 55, -500, 22, 30, '#7a5a3a', eyes, 1, [0.6, -0.3]);
    blush(ctx, -90, -455, 18, 10); blush(ctx, 90, -455, 18, 10); mouth(ctx, 0, -450, 12, eyes === 'shock' ? 'O' : 'w');
    ctx.restore();
  }
  // a candy "jolt meter": a rounded tube with a danger line and a fill level
  function meter(ctx, x, yb, h, danger, level, col, title, t) {
    const tw = 150;
    cel(ctx, rrP(x - tw / 2, yb - h, tw, h, tw / 2), C.white, C.creamS, -6, -6, 5.5);
    const lv = H.clamp(level, 0, 1.1), fh = Math.max(0, (h - 20) * lv);
    if (fh > 0) { ctx.save(); ctx.clip(rrP(x - tw / 2 + 10, yb - h + 10, tw - 20, h - 20, tw / 2 - 10)); cel(ctx, rrP(x - tw / 2 + 10, yb - 10 - fh, tw - 20, fh + 40, 30), col, H.rgba(H.mix(col, C.plum, 0.2)), -5, -5, 0); ctx.restore(); }
    const dy = yb - 10 - (h - 20) * danger;
    ctx.save(); ctx.strokeStyle = C.red; ctx.lineWidth = 10; ctx.setLineDash([22, 14]); ctx.lineDashOffset = -t * 40; ctx.beginPath(); ctx.moveTo(x - tw / 2 - 40, dy); ctx.lineTo(x + tw / 2 + 40, dy); ctx.stroke(); ctx.restore();
    return dy;
  }

  // ---------- scenes ----------
  const scenes = [
    function hook(ctx, t) {
      bgV(ctx, t, SKY, 71);
      trunk(ctx, 800, 360, [[700, 34], [1500, 26]]);
      const bx = 800 - TRUNK_X * 2.0, by = 1360, pk = peckAt(t, 0.1);
      const e3 = t >= w(3, 'headache') - 0.1;
      // speed smear on wind/recoil frames
      if (pk > 0.3 && pk < 0.9) { ctx.save(); ctx.globalAlpha = 0.35; woodpecker(ctx, bx, by, 2.0, { peck: pk * 0.35 }); ctx.restore(); }
      woodpecker(ctx, bx, by + bob(t, 0, 3), 2.0, { peck: pk, eyes: e3 ? 'happy' : pk === 1 ? 'squeeze' : 'normal', mouth: e3 ? 'smile' : null });
      const [tx, ty] = tipXY(bx, by, 2.0, 1);
      if (isHit(t, 0.1)) impactLines(ctx, tx + 10, ty, 26, t, Math.floor((t - 0.1) * 15 + 1e-6) / 15 + 0.1 - 0.01, 7);
      const hitN = Math.floor((t - 0.1) * 15 / 4); chips(ctx, tx, ty, t, 0.1 + (hitN * 4 + 2) / 15, 100 + hitN);
      const dq = pop(t, 0.3, 1.2); kana(ctx, 'ドドド', 880, 560 + Math.sin(t * 20) * 6, 92, 0.12, dq.s * (t < P_[1].s ? 1 : 0.0), C.butter);
      if (!e3) {
        big(ctx, 'CONCUSS', 470, 330, 140, t, w(0, 'concuss') - 0.12, { line: C.pinkD, fill: C.white });
        big(ctx, 'YOU?', 470, 480, 140, t, w(0, 'you') - 0.12, { line: C.pinkD, fill: C.butter });
        numPop(ctx, '20 / SEC', 400, 680, 120, t, w(1, '20') - 0.12, { line: C.skyD, rot: -0.05 });
      } else {
        big(ctx, 'NO', 400, 360, 160, t, w(3, 'headache') - 0.12, { line: C.mintD, fill: C.butter });
        big(ctx, 'HEADACHE?', 470, 540, 130, t, w(3, 'headache') - 0.05, { line: C.mintD, fill: C.white });
        const q = pop(t, w(3, 'why') - 0.12, 1.3); if (q.s > 0) { ctx.save(); ctx.translate(240, 830); ctx.scale(q.sx, q.sy); bubble(ctx, 0, 0, 220, 150, [120, 140]); kText(ctx, 'WHY?', 0, 30, 70, { line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); }
        sparkle(ctx, 210, 1050, 30, C.butter, t); sparkle(ctx, 690, 900, 22, C.white, -t);
      }
      if (t >= w(2, '12000') - 0.12) numPop(ctx, '12,000 / DAY', 470, 1600, 100, t, w(2, '12000') - 0.12, { line: C.lavD, fill: C.butter });
    },
    function myth(ctx, t) {
      bgV(ctx, t, TH.butter, 72);
      // close-up of Pip's head, x-ray window shows the brain wrapped in an imagined cushion
      const s = 2.7, bx = 540 - 62 * s - 30, by = 1050 + 150 * s;
      const xr = grow(t, w(4, 'skull') - 0.2, 0.4), sp = grow(t, w(4, 'shock') - 0.15, 0.4), hm = grow(t, w(5, 'helmet') - 0.15, 0.35);
      woodpecker(ctx, bx, by, s, { peck: 0.15, xray: xr, sponge: sp, helmet: hm, eyes: hm > 0.5 ? 'happy' : 'normal', brainFace: 'happy' });
      big(ctx, 'THE OLD', 540, 300, 120, t, w(4, 'years') - 0.12, { line: C.lavD, fill: C.white });
      big(ctx, 'THEORY', 540, 440, 130, t, w(4, 'people') - 0.12, { line: C.lavD, fill: C.butter });
      label(ctx, 'skull', 200, 760, 56, t, w(4, 'skull') - 0.12, C.white);
      if (sp > 0) { label(ctx, 'shock absorber', 540, 1540, 64, t, w(4, 'shock') - 0.12, C.butter); dotted(ctx, [[470, 1480], [440, 1350], [470, 1240]], grow(t, w(4, 'absorber') - 0.1, 0.4), C.butterS, 8, 24, 1.1); }
      if (hm > 0) { label(ctx, 'built-in helmet', 760, 640, 58, t, w(5, 'helmet') - 0.12, C.sky); const q = pop(t, w(5, 'helmet'), 1.2); kana(ctx, 'キラ', 900, 820, 70, 0.15, q.s, C.butter); }
    },
    function film(ctx, t) {
      bgV(ctx, t, TH.lav, 73);
      trunk(ctx, 820, 360, [[1150, 30]]);
      const bx = 820 - TRUNK_X * 1.35, by = 1330, pk = peckAt(t, BEATS[2].s);
      woodpecker(ctx, bx, by, 1.35, { peck: pk, eyes: pk === 1 ? 'squeeze' : 'normal' });
      const [tx, ty] = tipXY(bx, by, 1.35, 1);
      if (isHit(t, BEATS[2].s)) impactLines(ctx, tx + 6, ty, 18, t, t - 0.01, 6);
      const cq = pop(t, w(6, 'scientists') - 0.12, 1.1);
      if (cq.s > 0) { ctx.save(); ctx.translate(170, 1180); ctx.scale(cq.sx, cq.sy); camera(ctx, 0, 0, 0.8, t, t >= w(6, 'filmed') - 0.1); ctx.restore(); }
      if (t >= w(6, 'filmed') - 0.1) { ctx.save(); ctx.globalAlpha = 0.25 + 0.1 * Math.sin(t * 8); ctx.fillStyle = C.butter; ctx.beginPath(); ctx.moveTo(330, 1180); ctx.lineTo(760, 860); ctx.lineTo(760, 1420); ctx.closePath(); ctx.fill(); ctx.restore(); }
      big(ctx, '2022', 540, 400, 190, t, w(6, '2022') - 0.12, { line: C.pinkD, fill: C.butter });
      label(ctx, 'scientists filmed', 540, 580, 60, t, w(6, 'scientists') - 0.12, C.white);
      if (t >= w(7, 'highspeed') - 0.12) {
        big(ctx, 'HIGH-SPEED', 540, 760, 110, t, w(7, 'highspeed') - 0.12, { line: C.lavD, fill: C.white });
        // film strip of frames along the bottom
        const fs = grow(t, w(7, 'cameras') - 0.15, 0.4);
        ctx.save(); ctx.translate(540 - (1 - fs) * 1200, 1530);
        cel(ctx, rrP(-500, -100, 1000, 200, 24), C.plum, C.dark, -4, -4, 0);
        for (let i = 0; i < 4; i++) { const fx = -375 + i * 250; ctx.fillStyle = '#fffaf4'; ctx.fill(rrP(fx - 100, -70, 200, 140, 14)); ctx.save(); ctx.beginPath(); ctx.rect(fx - 100, -70, 200, 140); ctx.clip(); woodpecker(ctx, fx - 60, 60, 0.38, { peck: PK[i] }); ctx.fillStyle = BARK.b; ctx.fillRect(fx - 60 + TRUNK_X * 0.38, -70, 80, 140); ctx.restore(); }
        for (let i = 0; i < 12; i++) { ctx.fillStyle = '#fffaf4'; ctx.fill(rrP(-480 + i * 82, -94, 34, 16, 5)); ctx.fill(rrP(-480 + i * 82, 78, 34, 16, 5)); }
        ctx.restore();
      }
    },
    function noCushion(ctx, t) {
      bgV(ctx, t, TH.pink, 74);
      const s = 2.7, bx = 540 - 62 * s - 30, by = 1050 + 150 * s;
      const off = grow(t, w(8, 'didnt') - 0.12, 0.35);
      woodpecker(ctx, bx, by, s, { peck: 0.15, xray: 1, sponge: 1 - off, eyes: off > 0.3 ? 'shock' : 'normal', brainFace: 'normal' });
      bigX(ctx, 440, 1000, 200, grow(t, w(8, 'cushion') - 0.15, 0.35));
      big(ctx, 'NO', 540, 330, 160, t, w(8, 'didnt') - 0.12, { line: C.red, fill: C.white });
      big(ctx, 'CUSHION!', 540, 500, 150, t, w(8, 'cushion') - 0.12, { line: C.red, fill: C.butter });
      if (off > 0.3) sweat(ctx, 860, 760, 1.4);
      label(ctx, 'nothing', 540, 1560, 64, t, w(8, 'anything') - 0.12, C.white);
    },
    function hammerS(ctx, t) {
      bgV(ctx, t, TH.mint, 75);
      // the x-ray head strikes the trunk: two markers (beak tip and brain) stop on the SAME frame
      trunk(ctx, 900, 260, []);
      const s = 1.9, bx = 900 - TRUNK_X * s, by = 1330;
      const cyc = (t - BEATS[4].s) % 1.2, pk = cyc < 0.6 ? 0 : cyc < 0.8 ? H.ease.in((cyc - 0.6) / 0.2) : cyc < 0.95 ? 1 : 1 - (cyc - 0.95) / 0.25;
      const pq = Math.floor(pk * 4) / 4;
      woodpecker(ctx, bx, by, s, { peck: pq, xray: 1, eyes: pq === 1 ? 'squeeze' : 'normal', brainFace: pq === 1 ? 'happy' : 'normal' });
      const hit = cyc >= 0.8 && cyc < 0.95;
      const [tx, ty] = tipXY(bx, by, s, pq);
      if (hit) impactLines(ctx, tx + 8, ty, 22, t, t - 0.02, 7);
      // markers
      const a = H.lerp(-0.22, 0.08, pq), bxy = [bx + s * (50 * Math.cos(a) + 152 * Math.sin(a)), by + s * (50 * Math.sin(a) - 152 * Math.cos(a))];
      if (t >= w(9, 'beak') - 0.12) { const q = pop(t, w(9, 'beak') - 0.12); ctx.fillStyle = C.butterD; ctx.fill(ellP(tx, ty, 16 * q.s, 16 * q.s)); ol(ctx, ellP(tx, ty, 16 * q.s, 16 * q.s), 4); label(ctx, 'beak', 700, 760, 58, t, w(9, 'beak') - 0.12, C.butter); }
      if (t >= w(9, 'brain') - 0.12) { const q = pop(t, w(9, 'brain') - 0.12); ctx.save(); ctx.lineWidth = 8; ctx.strokeStyle = C.pinkD; ctx.stroke(ellP(bxy[0], bxy[1], 70 * q.s, 70 * q.s)); ctx.restore(); label(ctx, 'brain', 200, 760, 58, t, w(9, 'brain') - 0.12, C.pink); }
      if (t < P_[10].s - 0.1) big(ctx, 'TOGETHER!', 540, 420, 140, t, w(9, 'together') - 0.12, { line: C.mintD, fill: C.butter });
      else {
        big(ctx, 'ONE STIFF', 540, 340, 130, t, w(10, 'stiff') - 0.12, { line: C.lavD, fill: C.white });
        big(ctx, 'HAMMER', 540, 500, 150, t, w(10, 'hammer') - 0.12, { line: C.pinkD, fill: C.butter });
        const q = pop(t, w(10, 'hammer') - 0.1, 1.2); if (q.s > 0) { hammer(ctx, 330, 1640, 0.55 * q.s, -0.5, 0, { eyes: 'happy' }); kana(ctx, 'ガーン', 300, 1180, 70, -0.1, q.s, C.butter); }
      }
    },
    function spongeS(ctx, t) {
      bgV(ctx, t, TH.butter, 76);
      plank(ctx, 1330);
      const sp = t >= w(12, 'sponge') - 0.12 ? 1 : 0;
      const t0 = P_[11].s, cyc = 0.9, u = ((t - t0) % cyc) / cyc, n = Math.floor((t - t0) / cyc);
      const swing = u < 0.55 ? H.lerp(-0.2, -1.1, H.ease.out(u / 0.55)) : u < 0.7 ? H.lerp(-1.1, 0.05, H.ease.in((u - 0.55) / 0.15)) : 0.05;
      const hitT = t0 + n * cyc + 0.7 * cyc;
      // steel hammer drives the nail before the sponge swap; after it the nail never moves
      const hitsSteel = Math.max(0, Math.min(3, Math.floor((Math.min(t, w(12, 'sponge') - 0.12) - t0 - 0.63) / cyc) + 1));
      const depth = Math.min(0.6, hitsSteel * 0.2);
      nail(ctx, 600, 1335, 1.1, depth);
      const justHit = t >= hitT && t < hitT + 0.25;
      hammer(ctx, 250, 1235, 0.92, 1.19 + swing, sp, { eyes: sp ? (t >= w(13, 'waste') - 0.12 ? 'swirl' : 'shock') : 'normal', mouth: sp ? 'wobble' : 'w', sq: sp && justHit ? squash(t, hitT, 0.35) : [1, 1] });
      if (justHit) { impactLines(ctx, 610, 1110, 40, t, hitT, 8, sp ? C.butterS : C.plum); const q = pop(t, hitT, 1.2); kana(ctx, sp ? 'ぷにょ' : 'カン', 820, 1000, 90, 0.12, q.s * (1 - H.clamp((t - hitT - 0.2) / 0.05)), sp ? C.butter : C.white); }
      if (t < P_[12].s - 0.1) big(ctx, 'MAKES SENSE', 540, 420, 120, t, w(11, 'makes') - 0.12, { line: C.mintD, fill: C.white });
      else if (t < w(12, 'sponge') - 0.12) big(ctx, 'NOBODY...', 540, 420, 130, t, w(12, 'nobody') - 0.12, { line: C.lavD, fill: C.white });
      else if (t < P_[13].s - 0.1) { big(ctx, 'SPONGE', 540, 360, 150, t, w(12, 'sponge') - 0.12, { line: C.butterS, fill: C.butter }); big(ctx, 'HAMMER?', 540, 530, 140, t, w(12, 'sponge') - 0.02, { line: C.pinkD, fill: C.white }); }
      else { big(ctx, 'WASTED', 540, 360, 150, t, w(13, 'waste') - 0.12, { line: C.red, fill: C.white }); big(ctx, 'SWING!', 540, 530, 150, t, w(13, 'swing') - 0.12, { line: C.red, fill: C.butter }); sweat(ctx, 350, 760, 1.2); }
    },
    function sizeS(ctx, t) {
      bgV(ctx, t, TH.pink, 77);
      big(ctx, 'IT\'S SIZE!', 540, 360, 160, t, w(14, 'size') - 0.12, { line: C.pinkD, fill: C.butter });
      const hq = pop(t, w(15, 'than') - 0.15, 1.1), wq = pop(t, w(15, 'brain') - 0.12, 1.3);
      const shake = t >= w(16, 'jolts') - 0.12 ? Math.sin(t * 60) * 10 * Math.exp(-(t - w(16, 'jolts')) * 3) : 0;
      if (hq.s > 0) { ctx.save(); ctx.translate(380, 1080); ctx.scale(hq.sx, hq.sy); brainShape(ctx, 0, 0, 260, 'normal'); ctx.restore(); label(ctx, 'yours', 380, 1440, 62, t, w(15, 'yours') - 0.12, C.white); }
      if (wq.s > 0) { ctx.save(); ctx.translate(880 + shake, 1180); ctx.scale(wq.sx, wq.sy); brainShape(ctx, 0, 0, 30, null); ctx.restore(); label(ctx, 'woodpecker', 860, 1320, 52, t, w(15, 'brain') - 0.1, C.butter); dotted(ctx, [[860, 1270], [870, 1230]], 1, C.plum, 5, 14, 0.6); }
      if (t >= w(15, 'hundreds') - 0.12 && t < P_[16].s - 0.1) numPop(ctx, '100s× SMALLER', 540, 640, 100, t, w(15, 'hundreds') - 0.12, { line: C.lavD, fill: C.white });
      if (t >= P_[16].s - 0.1) {
        big(ctx, 'TINY BRAIN', 540, 620, 100, t, w(16, 'tiny') - 0.12, { line: C.mintD, fill: C.white });
        big(ctx, 'BIGGER JOLTS', 540, 1610, 100, t, w(16, 'bigger') - 0.12, { line: C.pinkD, fill: C.butter });
        impactLines(ctx, 880, 1180, 50, t, w(16, 'jolts') - 0.12, 10, C.pinkD);
        const q = pop(t, w(16, 'jolts'), 1.2); kana(ctx, 'へっちゃら', 860, 980, 54, 0.1, q.s, C.mint);
      }
    },
    function dangerS(ctx, t) {
      bgV(ctx, t, TH.lav, 78);
      // two jolt meters fed the same jolt: yours tips over the danger line, theirs stays far below
      const yb = 1520, h = 820;
      const lvl = grow(t, w(17, 'jolt') - 0.1, 0.6) * 0.42;
      const tw2 = t >= w(19, 'twice') - 0.12;
      const lvlW = tw2 ? H.lerp(0.42, 0.84, grow(t, w(19, 'twice') - 0.12, 0.6)) : lvl;
      const dy1 = meter(ctx, 300, yb, h, 0.3, lvl, C.pinkD, 'YOU', t);
      const dy2 = meter(ctx, 780, yb, h, 0.84, lvlW, C.mintD, 'PIP', t);
      const over = lvl > 0.3;
      brainShape(ctx, 300, yb + 120, 70, over ? 'swirl' : 'normal');
      ctx.save(); ctx.translate(780, yb + 130); brainShape(ctx, 0, 0, 34, null); ctx.restore();
      label(ctx, 'you', 160, yb + 230, 52, t, P_[17].s, C.white); label(ctx, 'woodpecker', 820, yb + 230, 50, t, P_[17].s, C.butter);
      label(ctx, 'danger', 300, dy1 - 60, 48, t, w(18, 'danger') - 0.12, C.pink); label(ctx, 'danger', 780, dy2 - 60, 48, t, w(18, 'danger') - 0.12, C.pink);
      if (over && t < P_[18].s - 0.1) { const q = pop(t, w(17, 'knock') - 0.12, 1.2); kana(ctx, 'ガーン', 300, 560, 80, -0.1, q.s, C.butter); }
      if (t < P_[18].s - 0.1) big(ctx, 'KNOCKOUT!', 540, 400, 140, t, w(17, 'knock') - 0.12, { line: C.red, fill: C.butter });
      else if (t < P_[19].s - 0.1) { big(ctx, 'WELL BELOW', 540, 400, 120, t, w(18, 'well') - 0.12, { line: C.mintD, fill: C.white }); if (t >= w(18, 'below') - 0.1) dotted(ctx, [[900, dy2 + 20], [960, (dy2 + yb - h * 0.42) / 2 + 40], [900, yb - 10 - (h - 20) * 0.42]], grow(t, w(18, 'below') - 0.1, 0.5), C.mintD, 8, 22, 1.1); }
      else { numPop(ctx, '2× FASTER', 540, 400, 130, t, w(19, 'twice') - 0.12, { line: C.pinkD, fill: C.butter }); label(ctx, 'to get hurt', 540, 560, 56, t, w(19, 'hurt') - 0.12, C.white); }
    },
    function endS(ctx, t) {
      bgV(ctx, t, SKY, 79);
      trunk(ctx, 840, 300, []);
      const g = grow(t, w(20, 'big') - 0.2, 0.6), s = H.lerp(0.9, 2.1, g);
      const bx = 840 - TRUNK_X * s, by = 1620 - 250 * s;
      woodpecker(ctx, bx, by, s, { peck: t >= w(21, 'peck') - 0.12 ? peckAt(t, w(21, 'peck') - 0.12) : 0, eyes: g > 0.5 ? 'star' : 'normal', look: [-0.5, 0] });
      kid(ctx, 230, 1620, 0.95, g > 0.5 ? 'shock' : 'normal');
      // height marks: the woodpecker reaches the kid's height
      if (g > 0) { ctx.save(); ctx.globalAlpha = g; dotted(ctx, [[70, 1620 - 0.95 * 660], [520, 1620 - 0.95 * 660]], g, C.lavD, 7, 22, 0); ctx.restore(); }
      big(ctx, 'AS BIG', 540, 300, 130, t, w(20, 'big') - 0.12, { line: C.lavD, fill: C.white });
      big(ctx, 'AS YOU?', 540, 450, 130, t, w(20, 'you') - 0.12, { line: C.lavD, fill: C.butter });
      if (t >= P_[21].s - 0.1) { big(ctx, 'STILL PECK?', 540, 620, 110, t, w(21, 'still') - 0.12, { line: C.pinkD, fill: C.butter }); }
      const q = pop(t, w(21, 'peck') + 0.25, 1.2);
      if (q.s > 0) { ctx.save(); ctx.translate(540, 1560); ctx.scale(q.sx, q.sy); cel(ctx, rrP(-400, -80, 800, 150, 75), C.white, C.creamS, -6, -6, 6); ctx.font = `700 64px ${FONT}`; ctx.textAlign = 'center'; ctx.fillStyle = C.plum; ctx.fillText('tell me in the comments!', 0, 16); ctx.restore(); }
    },
  ];
  function bigX(ctx, x, y, s, prog) {
    if (prog <= 0) return; ctx.save(); ctx.translate(x, y); ctx.lineCap = 'round';
    [[-1, -1, 1, 1], [1, -1, -1, 1]].forEach(([a, b, c, d], i) => { const u = H.clamp(prog * 2 - i); if (u <= 0) return; ctx.beginPath(); ctx.moveTo(a * s, b * s); ctx.lineTo(H.lerp(a, c, u) * s, H.lerp(b, d, u) * s); ctx.lineWidth = 58; ctx.strokeStyle = C.plum; ctx.stroke(); ctx.lineWidth = 40; ctx.strokeStyle = C.red; ctx.stroke(); });
    ctx.restore();
  }

  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) { scenes[i - 1](ctx, t); wipe(ctx, W_, H_, (t - (c.t - CUTW / 2)) / CUTW, c.shape, 540, 900, () => scenes[i](ctx, t)); }
    else scenes[i](ctx, t);
  }

  function thumbnail(ctx, W_, H_) {
    scenes[0](ctx, 7.6);
  }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    const pecks = (t0, t1, f = 1500, g = 0.55) => { for (let n = 0; ; n++) { const at = t0 + (n * 4 + 2) / 15; if (at > t1) break; k.play('tock', at, { f, gain: g, minor: true }); } };
    CUTS.forEach((c) => { k.noise(c.t - 0.22, { dur: 0.42, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.42, 3000]], q: 0.9, gain: 0.3, a: 0.08 }); k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    // hook: drumming on wood the whole time
    pecks(0.1, CUTS[0].t - 0.2);
    big_(w(0, 'concuss') - 0.1, 'C6'); k.play('error', w(0, 'you') - 0.05, { f: 'A3', gain: 0.22 });
    big_(w(1, '20') - 0.1, 'G5'); big_(w(2, '12000') - 0.1, 'A5');
    k.play('success', w(3, 'headache') - 0.1, { f: 'C6', gain: 0.4 }); pop_(w(3, 'why') - 0.12, 900, 0.8, 0, false);
    // myth
    pop_(w(4, 'years') - 0.12, 600, 0.8, 0, false); pop_(w(4, 'people') - 0.12, 700);
    k.play('riser', w(4, 'skull') - 0.2, { dur: 0.5, gain: 0.3 }); pop_(w(4, 'skull') - 0.12, 800);
    k.play('stroke', w(4, 'shock') - 0.15, { material: 'brush', dur: 0.6, gain: 0.5, minor: true }); pop_(w(4, 'shock') - 0.12, 650, 0.7, 0, false);
    k.play('swish', w(5, 'helmet') - 0.2, { gain: 0.4 }); big_(w(5, 'helmet') - 0.1, 'E6'); k.play('sparkle', w(5, 'helmet'), { n: 6, gain: 0.5 });
    // film
    pecks(BEATS[2].s, CUTS[2].t - 0.2, 1500, 0.35);
    big_(w(6, '2022') - 0.1, 'C6'); pop_(w(6, 'scientists') - 0.12, 700, 0.8, 0, false);
    for (let i = 0; i < 8; i++) k.play('tick', w(6, 'filmed') + i * 0.12, { minor: true, gain: 0.5 });
    big_(w(7, 'highspeed') - 0.1, 'G5'); k.play('whoosh', w(7, 'cameras') - 0.15, { dur: 0.5, gain: 0.4 });
    // no cushion
    k.play('error', w(8, 'didnt') - 0.1, { f: 'C4', gain: 0.3 }); k.play('impact', w(8, 'cushion') - 0.12, { gain: 0.5 }); k.play('stamp', w(8, 'cushion') - 0.05, { gain: 0.5 });
    // hammer
    for (let c = BEATS[4].s; c < CUTS[4].t - 0.3; c += 1.2) k.play('tock', c + 0.8, { f: 1300, gain: 0.7, minor: true });
    pop_(w(9, 'beak') - 0.12, 800); pop_(w(9, 'brain') - 0.12, 900); k.play('success', w(9, 'together') - 0.1, { f: 'C6', gain: 0.4 });
    pop_(w(10, 'stiff') - 0.12, 700, 0.8, 0, false); big_(w(10, 'hammer') - 0.1, 'E6');
    // sponge
    const t0 = P_[11].s, sw = w(12, 'sponge') - 0.12;
    for (let n = 0; ; n++) { const at = t0 + n * 0.9 + 0.63; if (at > CUTS[5].t - 0.2) break; k.play('swish', at - 0.15, { gain: 0.3, minor: true }); if (at < sw) k.play('tock', at, { f: 1800, gain: 0.8 }); else k.play('pop', at, { f: 220, gain: 0.7 }); }
    pop_(w(11, 'makes') - 0.12, 800, 0.8, 0, false); big_(w(12, 'sponge') - 0.1, 'A5');
    k.play('error', w(13, 'waste') - 0.1, { f: 'A3', gain: 0.25 }); pop_(w(13, 'swing') - 0.12, 700, 0.8, 0, false);
    // size
    big_(w(14, 'size') - 0.1, 'C6'); pop_(w(15, 'brain') - 0.12, 1200, 0.6, 0.3); pop_(w(15, 'than') - 0.15, 400, 0.9, -0.3, false);
    big_(w(15, 'hundreds') - 0.1, 'G5'); pop_(w(16, 'tiny') - 0.12, 900); k.play('impact', w(16, 'jolts') - 0.12, { gain: 0.45 }); k.play('success', w(16, 'jolts'), { f: 'E6', gain: 0.35 });
    // danger
    k.play('riser', w(17, 'jolt') - 0.1, { dur: 0.7, gain: 0.35 }); k.play('impact', w(17, 'knock') - 0.12, { gain: 0.6 }); k.play('error', w(17, 'out') - 0.05, { f: 'C4', gain: 0.3 });
    pop_(w(18, 'well') - 0.12, 700, 0.8, 0, false); k.play('success', w(18, 'line') - 0.1, { f: 'C6', gain: 0.4 });
    k.play('riser', w(19, 'twice') - 0.15, { dur: 0.6, gain: 0.35 }); big_(w(19, 'twice') - 0.1, 'A5'); pop_(w(19, 'hurt') - 0.12, 800);
    // end
    k.play('riser', w(20, 'big') - 0.25, { dur: 0.6, gain: 0.4 }); big_(w(20, 'big') - 0.1, 'G5'); pop_(w(20, 'you') - 0.12, 800, 0.8, 0, false);
    pop_(w(21, 'still') - 0.12, 800, 0.8, 0, false); pecks(w(21, 'peck') - 0.12, DURATION - 0.2, 900, 0.6);
    k.play('success', w(21, 'peck') + 0.25, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(21, 'peck') + 0.25, { n: 8, gain: 0.7 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
