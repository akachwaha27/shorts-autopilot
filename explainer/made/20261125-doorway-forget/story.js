// ===== Kawaii Anime, vertical: "Why do you forget why you walked into a room?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || "") + "";
  const TAU = Math.PI * 2;
  const C = {
    plum: '#2e3350', dark: '#1f2238',
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
    hall: { base: '#e3e9f5', dot: '#d3dcef', acc: '#fbe7c6', kind: 'dots' },
    lab: { base: '#efe9ff', dot: '#e2d8ff', acc: '#ffe1b8', kind: 'stars' },
    sage: { base: '#e4f2e6', dot: '#d0e8d4', acc: '#fff0b8', kind: 'clouds' },
    peach: { base: '#fff0e2', dot: '#ffe0c7', acc: '#c9dcff', kind: 'stars' },
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
    if (o.shadow !== false) { ctx.shadowColor = o.shadow || 'rgba(46,51,80,0.32)'; ctx.shadowBlur = size * 0.12; ctx.shadowOffsetY = size * 0.07; }
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
    kText(ctx, str, 0, 0, size, { font: FONT, weight: 700, fill, line: C.white, outer: C.plum, lw: 0.22 });
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



  // ---------- format ----------
  const W = 1080, HH = 1920;
  const P_ = [{"s":0.25,"e":2.81,"text":"Why do you forget why you walked into a room?","words":[["why",0.25],["do",0.47],["you",0.62],["forget",0.83],["why",1.27],["you",1.49],["walked",1.71],["into",2.15],["a",2.44],["room",2.51]]},{"s":3.28,"e":4.37,"text":"Blame the door.","words":[["blame",3.28],["the",3.73],["door",4.01]]},{"s":4.67,"e":9.1,"text":"In 2011, psychologist Gabriel Radvansky tested it.","words":[["in",4.67],["2011",4.88],["psychologist",5.31],["gabriel",6.57],["radvansky",7.31],["tested",8.26],["it",8.89]]},{"s":9.5,"e":13.25,"text":"People carried objects between tables, in virtual rooms.","words":[["people",9.5],["carried",9.98],["objects",10.54],["between",11.1],["tables",11.65],["in",12.13],["virtual",12.29],["rooms",12.85]]},{"s":13.63,"e":16.47,"text":"Crossing one big room, they remembered better.","words":[["crossing",13.63],["one",14.23],["big",14.45],["room",14.68],["they",14.97],["remembered",15.27],["better",16.02]]},{"s":16.95,"e":19.66,"text":"Walking through a doorway, they forgot more.","words":[["walking",16.95],["through",17.47],["a",18.0],["doorway",18.08],["they",18.61],["forgot",18.91],["more",19.36]]},{"s":20.02,"e":23.17,"text":"Your brain saves life in chapters, called events.","words":[["your",20.02],["brain",20.34],["saves",20.73],["life",21.12],["in",21.44],["chapters",21.59],["called",22.22],["events",22.69]]},{"s":23.54,"e":25.68,"text":"A doorway tells it: new scene.","words":[["a",23.54],["doorway",23.63],["tells",24.28],["it",24.75],["new",24.93],["scene",25.21]]},{"s":26.06,"e":28.11,"text":"So it files the last chapter away,","words":[["so",26.06],["it",26.21],["files",26.36],["the",26.74],["last",26.97],["chapter",27.28],["away",27.81]]},{"s":28.41,"e":29.84,"text":"with your plan inside.","words":[["with",28.41],["your",28.73],["plan",29.05],["inside",29.37]]},{"s":30.32,"e":33.5,"text":"Weirdly, walking back into the first room didn't help.","words":[["weirdly",30.32],["walking",30.83],["back",31.35],["into",31.65],["the",31.95],["first",32.17],["room",32.54],["didnt",32.83],["help",33.2]]},{"s":33.89,"e":35.66,"text":"A 2021 study found it hits hardest","words":[["a",33.89],["2021",33.95],["study",34.2],["found",34.52],["it",34.83],["hits",34.96],["hardest",35.21]]},{"s":35.98,"e":40.25,"text":"when your mind is already juggling something else.","words":[["when",35.98],["your",36.38],["mind",36.79],["is",37.2],["already",37.4],["juggling",38.11],["something",38.93],["else",39.84]]},{"s":40.68,"e":43.35,"text":"So what did a door make you forget today?","words":[["so",40.68],["what",40.84],["did",41.18],["a",41.43],["door",41.51],["make",41.85],["you",42.18],["forget",42.43],["today",42.93]]}];

  // ---------- timing (from phrases.json) ----------
  const BEATS = [
    { id: 'hook', s: 0, e: P_[1].e, on: 'FULL FRAME at 0 s: anime girl standing in an open kitchen doorway, thought bubble with a water glass that poofs into "?", DOORS DELETE YOUR PLANS; door gets a CULPRIT arrow on "blame"' },
    { id: 'study', s: P_[2].s, e: P_[3].e, on: '2011 MEMORY STUDY clipboard, then a top-down map of virtual rooms: a token carries a box table to table through doorways' },
    { id: 'compare', s: P_[4].s, e: P_[5].e, on: 'split: SAME ROOM walker keeps the glass (check), THROUGH A DOOR walker loses it at the doorway (cross), SAME DISTANCE ruler' },
    { id: 'chapters', s: P_[6].s, e: P_[9].e, on: 'chibi brain with chapter books, EVENTS; NEW SCENE clapper on "doorway"; the open chapter with the GET WATER note closes and slides into a drawer' },
    { id: 'back', s: P_[10].s, e: P_[10].e, on: 'girl walks BACK through the doorway, still "?", NOPE stamp' },
    { id: 'juggle', s: P_[11].s, e: P_[12].e, on: '2021 STUDY, girl juggling phone, keys, chat and the water glass; the glass drops, MORE FORGETTING' },
    { id: 'end', s: P_[13].s, e: P_[13].e, on: 'girl peeks round the door frame, big "?", YOUR TURN + COMMENT pill' },
  ];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.05, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = C.butter, out) => { let p = pop(t, t0); if (p.s <= 0) return; if (out != null) { const k = popOut(t, out); if (k <= 0) return; p = { s: p.s * k, sx: p.sx * k, sy: p.sy * k }; } ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  function bgV(ctx, t, th, seed) { ctx.save(); ctx.scale(1.5, 1.5); bg(ctx, W / 1.5, HH / 1.5, t, th, seed); ctx.restore(); }
  const numPop = (ctx, str, x, y, size, t, t0, o = {}) => { const n = pop(t, t0, 1.3); if (n.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(n.sx, n.sy); kText(ctx, str, 0, 0, size, { fill: o.fill || C.white, line: o.line || C.skyD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); };
  const grow = (t, t0, d) => H.ease.out(H.clamp((t - t0) / d));
  function qmark(ctx, x, y, sz, t, t0, ph = 0) {
    const p = pop(t, t0, 1.4); if (p.s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(0.14 * Math.sin(t * 9 + ph)); ctx.scale(p.sx, p.sy);
    kText(ctx, '?', 0, 0, sz, { fill: C.butter, line: C.skyD, outer: C.plum, lw: 0.2 }); ctx.restore();
  }

  // ---------- palette for this film: evening apartment, dusty blue, sage, warm wood, kitchen-light butter ----------
  const PAL = {
    wall: '#b9c8e6', wallS: '#9fb2d9', wains: '#e9eef8', wainsS: '#cdd7ec',
    floor: '#d9a878', floorS: '#bf8a5c', wood: '#c48a5c', woodS: '#9e6a43', woodL: '#e0ae80',
    kitchen: '#fff3cf', kitchenS: '#ffe2a0', tile: '#f6e7c0',
    hair: '#3f5288', hairS: '#2c3c6c', hairH: '#7f96d6', skin: '#ffe4d2', skinS: '#f6c3a6',
    sweater: '#a8d5b0', sweaterS: '#7fbb8c', pants: '#565f8a', pantsS: '#3f4770', shoe: '#f4f1ea',
    glass: '#d8f1ff', water: '#8fd0f5', brain: '#ffc9d6', brainS: '#f29bb3',
  };

  // ---------- characters ----------
  // anime girl "Mio": origin at her feet. o: eyes, mouth, look, arms ('down'|'carry'|'juggle'|'wave'|'point'), walk (phase or null), tilt
  function girl(ctx, x, y, s, o = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s * (o.flip || 1), s);
    const wp = o.walk == null ? null : o.walk, sw = wp == null ? 0 : Math.sin(wp * TAU);
    const lift = wp == null ? 0 : Math.abs(Math.cos(wp * TAU)) * 10;
    ctx.translate(0, -lift);
    // legs
    const leg = (dx, a) => { ctx.save(); ctx.translate(dx, -150); ctx.rotate(a); cel(ctx, rrP(-24, 0, 48, 140, 22), PAL.pants, PAL.pantsS, -6, -4, 4.5); cel(ctx, rrP(-30, 120, 66, 34, 16), PAL.shoe, '#d8d2c6', -3, -3, 4.5); ctx.restore(); };
    leg(-30, sw * 0.38); leg(30, -sw * 0.38);
    // arms behind for juggle are drawn after body; others before
    const arm = (side, a, len = 130) => { ctx.save(); ctx.translate(side * 78, -330); ctx.rotate(a); cel(ctx, rrP(-20, -10, 40, len, 20), PAL.sweater, PAL.sweaterS, -5, -4, 4.5); cel(ctx, ellP(0, len - 4, 22, 22), PAL.skin, PAL.skinS, -3, -3, 4); ctx.restore(); };
    const arms = o.arms || 'down';
    if (arms === 'down') { arm(-1, 0.18 + sw * 0.3); arm(1, -0.18 - sw * 0.3); }
    // torso: sweater with a collar
    const torso = new Path2D(); torso.moveTo(-82, -350); torso.quadraticCurveTo(0, -372, 82, -350); torso.lineTo(98, -168); torso.quadraticCurveTo(0, -150, -98, -168); torso.closePath();
    cel(ctx, torso, PAL.sweater, PAL.sweaterS, -12, -8, 4.5);
    ctx.save(); ctx.clip(torso); ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(-120, -210, 240, 14); ctx.restore();
    cel(ctx, roundPoly([[-40, -360], [0, -322], [40, -360]], 8), C.white, C.creamS, -2, -2, 4);
    if (arms === 'carry') { arm(-1, -0.9, 110); arm(1, 0.9, 110); }
    if (arms === 'juggle') { const j = o.jt || 0; arm(-1, 2.6 + Math.sin(j * 7) * 0.25, 125); arm(1, -2.6 - Math.sin(j * 7 + 1.6) * 0.25, 125); }
    if (arms === 'wave') { arm(-1, 0.2); const a = -2.5 + Math.sin((o.jt || 0) * 10) * 0.35; arm(1, a, 125); }
    if (arms === 'point') { arm(-1, 0.2); arm(1, -1.75, 128); }
    // head (bob with tilt)
    ctx.save(); ctx.translate(0, -470); ctx.rotate(o.tilt || 0);
    // back hair
    cel(ctx, rrP(-128, -120, 256, 230, 110), PAL.hair, PAL.hairS, -10, -8, 4.5);
    // face
    cel(ctx, ellP(0, 10, 104, 98), PAL.skin, PAL.skinS, -10, -10, 4.5);
    // side locks framing the face
    [-1, 1].forEach((sd) => { const l = new Path2D(); l.moveTo(sd * 92, -30); l.quadraticCurveTo(sd * 132, 60, sd * 112, 150); l.lineTo(sd * 96, 120); l.lineTo(sd * 84, 160); l.quadraticCurveTo(sd * 70, 60, sd * 70, -10); l.closePath(); cel(ctx, l, PAL.hair, PAL.hairS, -4, -6, 4.5); });
    // bangs: jagged anime fringe
    const b = new Path2D(); b.moveTo(-118, 10); b.quadraticCurveTo(-130, -120, 0, -122); b.quadraticCurveTo(130, -120, 118, 10);
    b.lineTo(96, -20); b.lineTo(78, 18); b.lineTo(56, -34); b.lineTo(30, 4); b.lineTo(8, -40); b.lineTo(-16, 2); b.lineTo(-40, -36); b.lineTo(-62, 12); b.lineTo(-82, -24); b.lineTo(-100, 22); b.closePath();
    cel(ctx, b, PAL.hair, PAL.hairS, -8, -10, 4.5);
    // hair shine band
    ctx.save(); ctx.strokeStyle = PAL.hairH; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, -10, 92, Math.PI * 1.18, Math.PI * 1.36); ctx.stroke(); ctx.beginPath(); ctx.arc(0, -10, 92, Math.PI * 1.46, Math.PI * 1.52); ctx.stroke(); ctx.restore();
    // ahoge (anime cowlick)
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.fillStyle = PAL.hair;
    const ah = new Path2D(); ah.moveTo(-6, -118); ah.quadraticCurveTo(10 + Math.sin((o.jt || 0) * 5) * 6, -190, 46, -168); ah.quadraticCurveTo(20, -160, 10, -118); ah.closePath(); ctx.fill(ah); ctx.stroke(ah); ctx.restore();
    // hair clip
    cel(ctx, starP(78, -60, 20, -Math.PI / 2, 0.5), C.butterD, C.butterS, -2, -2, 3.5);
    const ey = 30, ex = 42;
    eye(ctx, -ex, ey, 24, 32, '#5f86e0', o.eyes || 'normal', -1, o.look || [0, 0]);
    eye(ctx, ex, ey, 24, 32, '#5f86e0', o.eyes || 'normal', 1, o.look || [0, 0]);
    blush(ctx, -66, 72, 18, 9); blush(ctx, 66, 72, 18, 9);
    mouth(ctx, 0, 82, 11, o.mouth || 'smile');
    ctx.restore();
    ctx.restore();
  }
  // a doorway seen from the front, hinge on the left, door swung open into the next room
  function doorway(ctx, cx, fy, dw, dh, o = {}) {
    const x0 = cx - dw / 2, y0 = fy - dh;
    // next room seen through the opening
    ctx.save(); const hole = rrP(x0, y0, dw, dh, 18); ctx.clip(hole);
    ctx.fillStyle = o.in || PAL.kitchen; ctx.fillRect(x0, y0, dw, dh);
    if (o.drawIn) o.drawIn(x0, y0, dw, dh);
    // the open door slab, angled into the room
    const sw = dw * 0.26;
    const slab = new Path2D(); slab.moveTo(x0, y0); slab.lineTo(x0 + sw, y0 + dh * 0.07); slab.lineTo(x0 + sw, fy - dh * 0.03); slab.lineTo(x0, fy); slab.closePath();
    cel(ctx, slab, PAL.woodL, PAL.wood, 6, 0, 4);
    cel(ctx, ellP(x0 + sw - 16, y0 + dh * 0.55, 8, 10), C.butterD, C.butterS, -1, -1, 3);
    ctx.restore();
    ol(ctx, hole, 5);
    // frame
    const fr = new Path2D(); fr.rect(x0 - 36, y0 - 36, dw + 72, dh + 36); fr.rect(x0, y0, dw, dh + 1);
    ctx.save(); ctx.fillStyle = PAL.wood; ctx.fill(fr, 'evenodd'); ctx.clip(fr, 'evenodd'); ctx.fillStyle = PAL.woodS; ctx.fillRect(x0 + dw, y0 - 36, 40, dh + 40); ctx.fillRect(x0 - 40, y0 - 36, dw + 80, 10); ctx.restore();
    ol(ctx, rrP(x0 - 36, y0 - 36, dw + 72, dh + 36, 8), 5);
  }
  function kitchenIn(x0, y0, dw, dh) {
    return (ctx) => {};
  }
  function drawKitchen(ctx, x0, y0, dw, dh) {
    // back wall tiles + counter + fridge, all warm lamplight
    ctx.fillStyle = PAL.tile; ctx.fillRect(x0, y0 + dh * 0.42, dw, dh * 0.3);
    ctx.strokeStyle = 'rgba(46,51,80,0.18)'; ctx.lineWidth = 3;
    for (let x = x0; x < x0 + dw; x += 48) { ctx.beginPath(); ctx.moveTo(x, y0 + dh * 0.42); ctx.lineTo(x, y0 + dh * 0.72); ctx.stroke(); }
    for (let y = y0 + dh * 0.42; y < y0 + dh * 0.72; y += 48) { ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x0 + dw, y); ctx.stroke(); }
    cel(ctx, rrP(x0 + dw * 0.55, y0 + dh * 0.18, dw * 0.38, dh * 0.82, 20), '#f2f7ff', '#cfdcf2', -6, -6, 4.5);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(x0 + dw * 0.55, y0 + dh * 0.45); ctx.lineTo(x0 + dw * 0.93, y0 + dh * 0.45); ctx.stroke(); ctx.restore();
    cel(ctx, rrP(x0 + dw * 0.6, y0 + dh * 0.3, 12, 60, 6), '#9fb2d9', '#7d92c0', -1, -1, 3);
    cel(ctx, rrP(x0 - 10, y0 + dh * 0.72, dw * 0.6, dh * 0.3, 10), PAL.woodL, PAL.wood, -4, -6, 4.5);
    // hanging lamp glow
    ctx.save(); const g = ctx.createRadialGradient(x0 + dw * 0.3, y0 + dh * 0.12, 10, x0 + dw * 0.3, y0 + dh * 0.12, dw * 0.7); g.addColorStop(0, 'rgba(255,240,180,0.85)'); g.addColorStop(1, 'rgba(255,240,180,0)'); ctx.fillStyle = g; ctx.fillRect(x0, y0, dw, dh); ctx.restore();
    cel(ctx, new Path2D(`M${x0 + dw * 0.3 - 60} ${y0 + dh * 0.12} Q${x0 + dw * 0.3} ${y0 + dh * 0.02} ${x0 + dw * 0.3 + 60} ${y0 + dh * 0.12} Z`), C.butterD, C.butterS, -2, -2, 4);
  }
  function hallBg(ctx, t, seed, floorY = 1500) {
    ctx.fillStyle = PAL.wall; ctx.fillRect(0, 0, W, floorY);
    // soft wallpaper diamonds drifting slowly
    const r = H.rng(seed), ox = (t * 6) % 90;
    ctx.fillStyle = 'rgba(255,255,255,0.22)';
    for (let j = 0; j < floorY / 90 + 1; j++) for (let i = -1; i < W / 90 + 1; i++) { const x = i * 90 + (j & 1 ? 45 : 0) + ox, y = j * 90; ctx.fill(roundPoly([[x, y - 12], [x + 9, y], [x, y + 12], [x - 9, y]], 3)); }
    cel(ctx, rrP(-20, floorY - 300, W + 40, 300, 0), PAL.wains, PAL.wainsS, 0, -10, 0);
    ctx.fillStyle = PAL.wood; ctx.fillRect(0, floorY - 312, W, 16); ol(ctx, rrP(-20, floorY - 312, W + 40, 16, 0), 4);
    cel(ctx, rrP(-20, floorY, W + 40, HH - floorY + 20, 0), PAL.floor, PAL.floorS, 0, -12, 4.5);
    ctx.strokeStyle = 'rgba(120,70,40,0.35)'; ctx.lineWidth = 4;
    for (let i = 0; i < 9; i++) { const y = floorY + 40 + i * i * 9; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
  }
  function glassIcon(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const g = new Path2D(); g.moveTo(-34, -46); g.lineTo(34, -46); g.lineTo(26, 46); g.quadraticCurveTo(0, 54, -26, 46); g.closePath();
    ctx.save(); ctx.clip(g); ctx.fillStyle = PAL.glass; ctx.fillRect(-40, -50, 80, 110); ctx.fillStyle = PAL.water; ctx.fillRect(-40, -8, 80, 70); ctx.restore();
    ol(ctx, g, 4.5); shine(ctx, -16, -16, 5, 20, 0.08, 0.9);
    ctx.restore();
  }
  function poof(ctx, x, y, t, t0, s = 1) {
    const u = (t - t0) / 0.5; if (u < 0 || u > 1) return;
    ctx.save(); ctx.globalAlpha = 1 - u;
    for (let i = 0; i < 7; i++) { const a = i / 7 * TAU, rr = (20 + u * 80) * s; cel(ctx, ellP(x + Math.cos(a) * rr, y + Math.sin(a) * rr, (26 - u * 12) * s, (26 - u * 12) * s), C.white, '#dfe6f5', -2, -2, 3.5); }
    ctx.restore();
  }
  function thinkCloud(ctx, x, y, s, tail, t) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(Math.sin(t * 2.4) * 0.03);
    union(ctx, [cloudP(0, 0, 1.0)], C.white);
    const tx = (tail[0] - x) / s, ty = (tail[1] - y) / s;
    union(ctx, [ellP(tx * 0.5, ty * 0.5 + 10, 18, 15)], C.white); union(ctx, [ellP(tx * 0.8, ty * 0.8, 10, 9)], C.white);
    ctx.restore();
  }
  function speedLines(ctx, cx, cy, t, n = 28, col = C.plum, r0 = 360, alpha = 0.5) {
    const r = H.rng(Math.floor(t * 15) + 5);
    ctx.save(); ctx.strokeStyle = col; ctx.lineCap = 'round'; ctx.globalAlpha = alpha;
    for (let i = 0; i < n; i++) { const a = i / n * TAU + r() * 0.15, a0 = r0 + r() * 120, len = 140 + r() * 260; ctx.lineWidth = 3 + r() * 6; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * a0, cy + Math.sin(a) * a0); ctx.lineTo(cx + Math.cos(a) * (a0 + len), cy + Math.sin(a) * (a0 + len)); ctx.stroke(); }
    ctx.restore();
  }
  function stamp(ctx, str, x, y, size, t, t0, col = C.red, rot = -0.12) {
    const u = t - t0; if (u < 0) return;
    const s = u < 0.12 ? 2.2 - (u / 0.12) * 1.2 : 1 + Math.exp(-14 * (u - 0.12)) * Math.sin(30 * (u - 0.12)) * 0.06;
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    ctx.font = `700 ${size}px ${FONT}`; const tw = ctx.measureText(str).width + size * 0.7, th = size * 1.3;
    ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fill(rrP(-tw / 2, -th / 2, tw, th, 18));
    ctx.strokeStyle = col; ctx.lineWidth = 10; ctx.stroke(rrP(-tw / 2, -th / 2, tw, th, 18));
    ctx.fillStyle = col; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(str, 0, 4);
    ctx.restore();
  }
  function arrowTo(ctx, x0, y0, x1, y1, col, prog, bend = 0) {
    if (prog <= 0) return;
    const mx = (x0 + x1) / 2 + bend, my = (y0 + y1) / 2 - Math.abs(bend) * 0.4;
    dotted(ctx, bez([x0, y0], [mx, my], [mx, my], [x1, y1]), prog, col, 9, 30, 1.4);
  }
  // chibi brain mascot
  function brainP(s) {
    const p = new Path2D();
    [[-120, -10, 95], [-60, -80, 92], [40, -88, 95], [118, -18, 92], [80, 60, 92], [-30, 70, 98], [-118, 52, 76]].forEach(([x, y, r]) => { p.moveTo((x + r) * s, y * s); p.arc(x * s, y * s, r * s, 0, TAU); });
    return p;
  }
  function brain(ctx, x, y, s, o = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(o.sx || 1, o.sy || 1);
    union(ctx, [brainP(s)], PAL.brain, 5);
    ctx.save(); ctx.clip(brainP(s)); ctx.fillStyle = PAL.brainS; ctx.translate(14 * s, 14 * s); ctx.globalCompositeOperation = 'source-atop'; ctx.restore();
    ctx.save(); ctx.strokeStyle = H.rgba(H.mix(PAL.brainS, C.plum, 0.25)); ctx.lineWidth = 6 * s; ctx.lineCap = 'round';
    [[-150, -30, -90, -60, -110, 10], [60, -140, 20, -90, 70, -70], [130, 30, 90, 0, 150, -40], [-60, 120, -20, 90, 20, 130]].forEach(([a, b, c, d, e, f]) => { ctx.beginPath(); ctx.moveTo(a * s, b * s); ctx.quadraticCurveTo(c * s, d * s, e * s, f * s); ctx.stroke(); });
    ctx.restore();
    shine(ctx, -90 * s, -90 * s, 26 * s, 14 * s, -0.6);
    face(ctx, 0, 10 * s, s * 1.4, o);
    ctx.restore();
  }
  function face(ctx, x, y, s, o = {}) {
    const ex = 34 * s, er = 26 * s;
    eye(ctx, x - ex, y, er * 0.8, er, o.iris || '#d0577e', o.eyes || 'normal', -1, o.look || [0, 0]);
    eye(ctx, x + ex, y, er * 0.8, er, o.iris || '#d0577e', o.eyes || 'normal', 1, o.look || [0, 0]);
    blush(ctx, x - ex * 1.55, y + er * 0.95, 16 * s, 9 * s); blush(ctx, x + ex * 1.55, y + er * 0.95, 16 * s, 9 * s);
    mouth(ctx, x, y + er * 1.25, 12 * s, o.mouth || 'smile');
  }
  function book(ctx, x, y, s, col, colS, title, rot = 0) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    cel(ctx, rrP(-70, -100, 140, 200, 14), col, colS, -6, -6, 4.5);
    cel(ctx, rrP(-70, -100, 26, 200, 10), colS, H.rgba(H.mix(colS, C.plum, 0.2)), -2, -2, 4);
    ctx.fillStyle = C.white; ctx.fill(rrP(-36, -40, 96, 64, 10)); ol(ctx, rrP(-36, -40, 96, 64, 10), 3);
    ctx.fillStyle = C.plum; ctx.font = `700 26px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    title.split('\n').forEach((ln, i, a) => ctx.fillText(ln, 12, -8 + (i - (a.length - 1) / 2) * 28));
    ctx.restore();
  }
  function note(ctx, x, y, s, str, rot = 0.06) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    cel(ctx, rrP(-80, -60, 160, 120, 6), C.butter, C.butterS, -4, -4, 4);
    ctx.fillStyle = C.plum; ctx.font = `700 30px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    str.split('\n').forEach((ln, i, a) => ctx.fillText(ln, 0, (i - (a.length - 1) / 2) * 34));
    ctx.restore();
  }
  function ball(ctx, x, y, r, col, colS, icon) {
    cel(ctx, ellP(x, y, r, r), col, colS, -r * 0.18, -r * 0.18, 4.5); shine(ctx, x - r * 0.45, y - r * 0.45, r * 0.22, r * 0.13, -0.6);
    ctx.save(); ctx.translate(x, y);
    if (icon === 'glass') glassIcon(ctx, 0, 2, r / 70);
    else if (icon === 'phone') { cel(ctx, rrP(-24, -38, 48, 76, 10), '#5c6698', '#454e7e', -2, -2, 3.5); ctx.fillStyle = C.sky; ctx.fillRect(-17, -28, 34, 50); }
    else if (icon === 'keys') { ol(ctx, ellP(-10, -10, 18, 18), 5, C.plum); ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(2, 2); ctx.lineTo(26, 26); ctx.moveTo(18, 18); ctx.lineTo(26, 10); ctx.stroke(); ctx.restore(); }
    else if (icon === 'chat') { union(ctx, [rrP(-32, -24, 64, 40, 14)], C.white, 3.5); ctx.fillStyle = C.plum; for (let i = -1; i <= 1; i++) ctx.fill(ellP(i * 15, -4, 5, 5)); }
    ctx.restore();
  }
  // door-swing transition: the next scene is revealed behind a door slab that sweeps across
  function wipeDoor(ctx, u, drawB) {
    const e = H.ease.inOut(H.clamp(u)), edge = -160 + e * (W + 320);
    ctx.save(); ctx.beginPath(); ctx.rect(0, 0, Math.max(0, edge), HH); ctx.clip(); drawB(); ctx.restore();
    const sw = 150 + Math.sin(e * Math.PI) * 110;
    const slab = new Path2D(); slab.moveTo(edge, -20); slab.lineTo(edge + sw, 60); slab.lineTo(edge + sw, HH - 60); slab.lineTo(edge, HH + 20); slab.closePath();
    cel(ctx, slab, PAL.woodL, PAL.wood, 10, 0, 6);
    ctx.save(); ctx.clip(slab); ctx.strokeStyle = 'rgba(158,106,67,0.6)'; ctx.lineWidth = 8;
    ctx.strokeRect(edge + 24, 220, sw - 48, 600); ctx.strokeRect(edge + 24, 1000, sw - 48, 700); ctx.restore();
    cel(ctx, ellP(edge + sw - 34, HH / 2, 16, 20), C.butterD, C.butterS, -2, -2, 4);
  }

  // ---------- scenes ----------
  const scenes = [
    // 0: HOOK. Full frame at t=0: girl in the open kitchen doorway + hook words, motion from frame one.
    { s: 0, draw(ctx, t) {
      const push = 1 + 0.05 * H.clamp(t / 4.4);
      ctx.save(); ctx.translate(540, 1150); ctx.scale(push, push); ctx.translate(-540, -1150);
      hallBg(ctx, t, 4, 1520);
      const blame = w(1, 'blame') - 0.1, shake = t > blame && t < blame + 0.35 ? Math.sin((t - blame) * 70) * 8 * (1 - (t - blame) / 0.35) : 0;
      ctx.save(); ctx.translate(shake, 0);
      doorway(ctx, 540, 1520, 560, 900, { drawIn: (x0, y0, dw, dh) => drawKitchen(ctx, x0, y0, dw, dh) });
      ctx.restore();
      // the girl, frozen in the doorway
      const f0 = w(0, 'forget') - 0.1;
      const confused = t > f0;
      const looking = t > blame;
      girl(ctx, 540, 1530 + bob(t, 0, 4), 1.28, { eyes: confused ? (looking ? 'normal' : 'shock') : 'normal', mouth: confused ? (looking ? 'wobble' : 'o') : 'smile', look: looking ? [-1, -0.2] : [0, 0], tilt: Math.sin(t * 1.6) * 0.06 + (confused ? 0.12 : 0), jt: t });
      if (confused) sweat(ctx, 680, 820, 1.1);
      // thought bubble: the plan (a glass of water) poofs into a question mark on "forget"
      thinkCloud(ctx, 830, 700, 1.15, [660, 860], t);
      if (!confused) glassIcon(ctx, 830, 700, 1.15 + Math.sin(t * 6) * 0.03);
      poof(ctx, 830, 700, t, f0, 1.1);
      if (confused) { const p = pop(t, f0 + 0.08, 1.4); ctx.save(); ctx.translate(830, 735); ctx.rotate(0.12 * Math.sin(t * 8)); ctx.scale(p.sx, p.sy); kText(ctx, '?', 0, 0, 150, { fill: C.butter, line: C.skyD, outer: C.plum, lw: 0.2 }); ctx.restore(); }
      if (confused) kana(ctx, '!?', 300, 820, 96, -0.15, pop(t, f0).s, C.pink);
      // "blame the door": culprit arrow at the door frame
      if (looking) {
        arrowTo(ctx, 190, 1280, 252, 1000, C.red, grow(t, blame, 0.3), -60);
        label(ctx, 'CULPRIT', 210, 1360, 58, t, w(1, 'door') - 0.15, '#ffc2cf');
        impactLines(ctx, 252, 900, 70, t, w(1, 'door') - 0.1, 9, C.red);
      }
      ctx.restore();
      twinkles(ctx, W, HH, t, 3, 8, (x, y) => y > 560);
      // hook words: full size + full opacity from frame 0
      ctx.save(); ctx.translate(540, 300); ctx.rotate(Math.sin(t * 3) * 0.015);
      kText(ctx, 'DOORS DELETE', 0, 0, 122, { fill: C.white, line: C.skyD, outer: C.plum, ow: 0.1, lw: 0.17 });
      ctx.restore();
      ctx.save(); ctx.translate(540, 440); ctx.rotate(-Math.sin(t * 3) * 0.015);
      kText(ctx, 'YOUR PLANS', 0, 0, 122, { fill: C.butter, line: '#ff7e9c', outer: C.plum, ow: 0.1, lw: 0.17 });
      ctx.restore();
      sparkle(ctx, 90 + Math.sin(t * 3) * 6, 230, 26 + 6 * Math.sin(t * 5), C.butter, 0, 4);
      sparkle(ctx, 990, 400, 22 + 6 * Math.sin(t * 4 + 1), C.white, 0, 4);
    } },

    // 1: the 2011 study: clipboard, then a top-down map of virtual rooms
    { s: P_[2].s, draw(ctx, t) {
      bgV(ctx, t, TH.lab, 21);
      const s0 = P_[2].s, mapT = P_[3].s - 0.1;
      const toMap = H.ease.inOut(H.clamp((t - mapT) / 0.5));
      // clipboard card, shrinks up into a header when the map arrives
      ctx.save(); ctx.translate(540, H.lerp(960, 330, toMap)); const sc = H.lerp(1, 0.5, toMap); ctx.scale(sc, sc);
      const cp = pop(t, s0 + 0.02, 0.8);
      ctx.scale(cp.sx || 0.001, cp.sy || 0.001);
      cel(ctx, rrP(-330, -400, 660, 800, 40), '#c99a6e', '#a8784f', -8, -8, 5);
      cel(ctx, rrP(-290, -350, 580, 720, 20), C.white, C.creamS, -4, -4, 4);
      cel(ctx, rrP(-110, -440, 220, 90, 26), '#9aa6c9', '#7884aa', -3, -3, 4.5);
      ctx.restore();
      if (toMap < 1) {
        ctx.save(); ctx.globalAlpha = 1 - toMap;
        numPop(ctx, '2011', 540, 900, 230, t, w(2, '2011') - 0.15, { line: C.lavD, fill: C.butter });
        label(ctx, 'MEMORY STUDY', 540, 1080, 64, t, w(2, 'psychologist') - 0.15, C.mint);
        // little brain + checklist marks
        for (let i = 0; i < 3; i++) { const p = pop(t, w(2, 'tested') - 0.15 + i * 0.12, 1.2); if (p.s <= 0) continue; ctx.save(); ctx.translate(380 + i * 160, 1220); ctx.scale(p.sx, p.sy); cel(ctx, rrP(-40, -40, 80, 80, 14), C.white, C.creamS, -2, -2, 4); ctx.strokeStyle = C.mintD; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-20, 0); ctx.lineTo(-4, 18); ctx.lineTo(24, -18); ctx.stroke(); ctx.restore(); }
        ctx.restore();
      }
      if (toMap > 0) {
        ctx.save(); ctx.globalAlpha = toMap;
        kText(ctx, '2011', 540, 300, 96, { fill: C.butter, line: C.lavD, outer: C.plum, ow: 0.08, lw: 0.16 });
        ctx.restore();
        // top-down map: three rooms, doorways, tables
        const mp = pop(t, mapT + 0.1, 0.9); if (mp.s > 0) {
          ctx.save(); ctx.translate(540, 1050); ctx.scale(mp.sx, mp.sy); ctx.rotate(-0.04 + Math.sin(t * 0.8) * 0.01);
          const rooms = [[-400, -440, 800, 400], [-400, -40, 380, 480], [-20, -40, 420, 480]];
          rooms.forEach(([x, y, ww, hh], i) => cel(ctx, rrP(x, y, ww, hh, 10), [C.sky, '#ffe6bf', C.mint][i], [C.skyS, '#f6cf92', C.mintS][i], -6, -6, 0));
          ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 22; ctx.lineCap = 'round';
          // walls with doorway gaps
          const seg = (a, b, c, d) => { ctx.beginPath(); ctx.moveTo(a, b); ctx.lineTo(c, d); ctx.stroke(); };
          seg(-400, -440, 400, -440); seg(400, -440, 400, 440); seg(400, 440, -400, 440); seg(-400, 440, -400, -440);
          seg(-400, -40, -260, -40); seg(-120, -40, 120, -40); seg(260, -40, 400, -40); // two doorways in the middle wall
          seg(-20, -40, -20, 140); seg(-20, 280, -20, 440); // doorway between bottom rooms
          ctx.restore();
          // tables with objects
          const tables = [[-230, -260], [230, -260], [-210, 240], [210, 240]];
          tables.forEach(([x, y], i) => { cel(ctx, ellP(x, y, 72, 72), PAL.woodL, PAL.wood, -5, -5, 4.5); const ic = i % 3; if (ic === 0) cel(ctx, starP(x, y, 30), C.butterD, C.butterS, -2, -2, 3.5); else if (ic === 1) cel(ctx, heartP(x, y, 28), C.pinkD, C.pinkS, -2, -2, 3.5); else cel(ctx, rrP(x - 26, y - 26, 52, 52, 8), C.lavD, C.lavS, -2, -2, 3.5); });
          // the walker token carrying a box: table 0 -> through door -> table 2 -> through door -> table 3
          const path = [[-230, -180], [-190, -40], [-210, 160], [-100, 210], [-20, 210], [100, 210], [210, 160]];
          const u = H.clamp((t - (w(3, 'carried') - 0.1)) / (P_[3].e - w(3, 'carried') + 0.3));
          const L = plen(path), [px, py] = along(path, L * H.ease.inOut(u));
          dotted(ctx, path, H.ease.inOut(u), H.rgba(C.plum, 0.5), 6, 26, 0);
          ctx.save(); ctx.translate(px, py + Math.sin(t * 14) * 4);
          cel(ctx, ellP(0, 0, 58, 58), PAL.hair, PAL.hairS, -5, -5, 4.5);
          cel(ctx, ellP(0, 8, 42, 40), PAL.skin, PAL.skinS, -4, -4, 3.5);
          cel(ctx, rrP(20, -14, 54, 46, 8), '#dcb27f', '#b98a58', -3, -3, 4); ctx.strokeStyle = C.plum; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(20, 4); ctx.lineTo(74, 4); ctx.stroke();
          ctx.restore();
          ctx.restore();
          label(ctx, 'CARRY OBJECTS', 330, 1600, 54, t, w(3, 'objects') - 0.15, C.butter);
          label(ctx, 'VIRTUAL ROOMS', 760, 1520, 54, t, w(3, 'virtual') - 0.15, C.sky);
        }
      }
    } },

    // 2: same distance, one room vs through a doorway
    { s: P_[4].s, draw(ctx, t) {
      bgV(ctx, t, TH.peach, 31);
      const panel = (y0, withDoor, tStart, tEnd, keyT, ok) => {
        ctx.save();
        const pp = rrP(70, y0, 940, 600, 36);
        ctx.save(); ctx.clip(pp);
        ctx.fillStyle = withDoor ? '#cfd9f0' : '#d6ecd9'; ctx.fillRect(70, y0, 940, 600);
        ctx.fillStyle = withDoor ? PAL.floor : '#dcb88f'; ctx.fillRect(70, y0 + 470, 940, 130);
        if (withDoor) {
          // a wall with an open doorway in the middle; right room is warmer
          ctx.fillStyle = '#fff0cc'; ctx.fillRect(560, y0, 450, 470);
          cel(ctx, rrP(500, y0 - 20, 60, 490, 0), PAL.wood, PAL.woodS, -6, 0, 4.5);
          cel(ctx, rrP(540, y0 + 90, 30, 380, 0), PAL.woodL, PAL.wood, 0, 0, 3.5);
        } else {
          // a window and a plant, one long room
          cel(ctx, rrP(420, y0 + 90, 240, 200, 20), '#eaf6ff', '#c8e2f7', -4, -4, 4.5);
          ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(540, y0 + 90); ctx.lineTo(540, y0 + 290); ctx.stroke();
          cel(ctx, rrP(850, y0 + 380, 80, 90, 14), '#e2896b', '#c66a4f', -3, -3, 4);
          cel(ctx, ellP(890, y0 + 340, 60, 50), C.mintD, '#2e9c74', -4, -4, 4);
        }
        // the walker crosses left to right
        const u = H.clamp((t - tStart) / (tEnd - tStart)), x = H.lerp(190, 880, H.ease.inOut(u));
        const walking = u > 0 && u < 1, lost = withDoor && t > keyT;
        girl(ctx, x, y0 + 560, 0.62, { walk: walking ? t * 1.6 : null, eyes: lost ? 'swirl' : 'normal', mouth: lost ? 'wobble' : 'smile', jt: t });
        // memory bubble over her head: the glass stays, or poofs at the doorway
        const bx = x + 70, by = y0 + 150;
        thinkCloud(ctx, bx, by, 0.6, [x + 20, y0 + 230], t);
        if (!lost) glassIcon(ctx, bx, by, 0.62);
        else { poof(ctx, bx, by, t, keyT, 0.6); kText(ctx, '?', bx, by + 26, 80, { fill: C.butter, line: C.skyD, outer: C.plum, lw: 0.2 }); }
        ctx.restore();
        ol(ctx, pp, 6);
        ctx.restore();
      };
      const pA = pop(t, P_[4].s + 0.02, 0.8), pB = pop(t, P_[5].s - 0.3, 0.8);
      ctx.save(); ctx.translate(540, 560); ctx.scale(pA.sx, pA.sy); ctx.translate(-540, -560);
      panel(260, false, P_[4].s, P_[4].e - 0.2, 1e9, true); ctx.restore();
      label(ctx, 'SAME ROOM', 300, 280, 52, t, w(4, 'one') - 0.15, C.mint);
      if (t > w(4, 'remembered') - 0.15) { const p = pop(t, w(4, 'remembered') - 0.15, 1.3); ctx.save(); ctx.translate(900, 300); ctx.scale(p.sx, p.sy); cel(ctx, ellP(0, 0, 66, 66), C.mintD, '#2e9c74', -4, -4, 5); ctx.strokeStyle = C.white; ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(-28, 2); ctx.lineTo(-6, 24); ctx.lineTo(30, -22); ctx.stroke(); ctx.restore(); }
      if (pB.s > 0) {
        ctx.save(); ctx.translate(540, 1340); ctx.scale(pB.sx, pB.sy); ctx.translate(-540, -1340);
        panel(1040, true, P_[5].s - 0.1, P_[5].e - 0.2, w(5, 'doorway') + 0.05, false); ctx.restore();
        label(ctx, 'THROUGH A DOOR', 340, 1060, 52, t, w(5, 'through') - 0.15, '#c9dcff');
        if (t > w(5, 'forgot') - 0.15) { const p = pop(t, w(5, 'forgot') - 0.15, 1.3); ctx.save(); ctx.translate(900, 1080); ctx.scale(p.sx, p.sy); cel(ctx, ellP(0, 0, 66, 66), C.red, '#e0485f', -4, -4, 5); ctx.strokeStyle = C.white; ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-24, -24); ctx.lineTo(24, 24); ctx.moveTo(24, -24); ctx.lineTo(-24, 24); ctx.stroke(); ctx.restore(); }
        // same-distance ruler between the panels
        const rp = grow(t, P_[5].s, 0.5);
        if (rp > 0) {
          ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 8; ctx.lineCap = 'round';
          ctx.beginPath(); ctx.moveTo(190, 950); ctx.lineTo(H.lerp(190, 890, rp), 950); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(190, 925); ctx.lineTo(190, 975); if (rp > 0.98) { ctx.moveTo(890, 925); ctx.lineTo(890, 975); } ctx.stroke(); ctx.restore();
          label(ctx, 'SAME DISTANCE', 540, 950, 44, t, P_[5].s + 0.25, C.butter);
        }
      }
      if (t > w(5, 'forgot') - 0.15) kText(ctx, 'FORGOT MORE', 540, 1760 - 60, 0.001 + 0, {});
    } },

    // 3: your brain saves life in chapters; a doorway = new scene; the chapter (and the plan) gets filed away
    { s: P_[6].s, draw(ctx, t) {
      bgV(ctx, t, TH.sage, 41);
      const s0 = P_[6].s;
      const cam = H.ease.inOut(H.clamp((t - P_[8].s + 0.2) / 0.6));
      ctx.save(); ctx.translate(540, 1000); const z = 1 + 0.06 * cam; ctx.scale(z, z); ctx.translate(-540 + 40 * cam, -1000);
      // bookshelf
      cel(ctx, rrP(120, 520, 840, 420, 26), PAL.wood, PAL.woodS, -8, -8, 5);
      cel(ctx, rrP(150, 550, 780, 360, 16), '#8c5a38', '#74482b', 0, 0, 0);
      const books = [['WAKE\nUP', C.sky, C.skyS], ['BREAK\nFAST', C.pink, C.pinkS], ['HALL\nWAY', C.lav, C.lavS]];
      books.forEach(([ttl, c, cs], i) => { const p = pop(t, w(6, 'chapters') - 0.2 + i * 0.12, 1.2); if (p.s <= 0) return; ctx.save(); ctx.translate(260 + i * 175, 735); ctx.scale(p.sx, p.sy); book(ctx, 0, 0, 0.95, c, cs, ttl, (i - 1) * 0.03); ctx.restore(); });
      // drawer for filed chapters (right side of shelf)
      const drawerOpen = t > w(8, 'files') - 0.3 && t < w(8, 'away') + 0.25 ? 1 : 0;
      const dOpen = H.clamp((t - (w(8, 'files') - 0.3)) / 0.25) * (1 - H.clamp((t - (w(8, 'away') + 0.05)) / 0.2));
      cel(ctx, rrP(780 + dOpen * 0, 600 + 0, 130, 260, 12), PAL.woodL, PAL.wood, -4, -4, 4.5);
      cel(ctx, rrP(820, 720, 50, 18, 9), C.butterD, C.butterS, -1, -1, 3);
      if (dOpen > 0) { cel(ctx, rrP(760, 600 - dOpen * 120, 170, 120 * dOpen, 10), '#f4d6b4', PAL.woodL, -3, -3, 4); }
      // brain mascot
      const sq = squash(t, s0 + 0.05, 0.25);
      const scene = t > w(7, 'scene') - 0.15, filed = t > w(8, 'away');
      brain(ctx, 340, 1400, 1.25, { eyes: filed ? 'swirl' : (scene ? 'star' : 'normal'), mouth: filed ? 'wobble' : 'smile', sx: sq[0], sy: sq[1], look: [0.6, -0.4] });
      // the current chapter: open book + plan sticky note, which slides into the drawer
      const fileU = H.ease.inOut(H.clamp((t - w(8, 'files') + 0.05) / (w(8, 'away') - w(8, 'files') + 0.1)));
      const op = pop(t, w(6, 'events') - 0.15, 1.1);
      if (op.s > 0 && fileU < 1) {
        const bx = H.lerp(770, 845, fileU), by = H.lerp(1150, 560, fileU), bs = H.lerp(1.15, 0.5, fileU);
        ctx.save(); ctx.translate(bx, by); ctx.scale(op.sx * bs, op.sy * bs);
        // open book
        const pg = (sgn) => { const p = new Path2D(); p.moveTo(0, -120); p.quadraticCurveTo(sgn * 90, -150, sgn * 190, -120); p.lineTo(sgn * 190, 110); p.quadraticCurveTo(sgn * 90, 80, 0, 110); p.closePath(); return p; };
        const closing = H.clamp(fileU * 2.2);
        ctx.save(); ctx.scale(1 - closing * 0.5, 1); cel(ctx, pg(-1), C.white, C.creamS, -4, -4, 4.5); cel(ctx, pg(1), C.white, C.creamS, -4, -4, 4.5); ctx.restore();
        ctx.fillStyle = C.plum; ctx.font = `700 34px ${FONT}`; ctx.textAlign = 'center'; if (closing < 0.3) { ctx.fillText('KITCHEN', -95, -60); }
        note(ctx, 90, -10, 0.85, 'GET\nWATER', 0.08);
        ctx.restore();
      }
      ctx.restore();
      label(ctx, 'EVENTS', 330, 1070, 60, t, w(6, 'events') - 0.15, C.butter, P_[8].s - 0.1);
      big(ctx, 'CHAPTERS', 540, 420, 104, t, w(6, 'chapters') - 0.15, { fill: C.white, line: C.mintD });
      // doorway -> NEW SCENE clapper
      if (t > w(7, 'doorway') - 0.15 && t < P_[8].s + 0.1) {
        const k = popOut(t, P_[8].s - 0.05, 0.2);
        const p = pop(t, w(7, 'doorway') - 0.15, 1.2); ctx.save(); ctx.translate(790, 1520); ctx.scale(p.sx * k, p.sy * k);
        cel(ctx, rrP(-150, -60, 300, 200, 18), '#3d4466', '#2a3050', -4, -4, 5);
        const snap = H.clamp((t - (w(7, 'scene') - 0.2)) / 0.12), a = -0.5 * (1 - snap);
        ctx.save(); ctx.translate(-150, -60); ctx.rotate(a); cel(ctx, rrP(0, -60, 300, 60, 10), C.white, C.creamS, -2, -2, 5);
        ctx.fillStyle = '#3d4466'; for (let i = 0; i < 5; i++) ctx.fill(roundPoly([[20 + i * 60, -60], [50 + i * 60, -60], [30 + i * 60, 0], [0 + i * 60, 0]], 2)); ctx.restore();
        ctx.fillStyle = C.white; ctx.font = `700 46px ${FONT}`; ctx.textAlign = 'center'; ctx.fillText('NEW', 0, 40); ctx.fillText('SCENE!', 0, 92);
        ctx.restore();
        impactLines(ctx, 790, 1520, 190, t, w(7, 'scene') - 0.1, 10, C.plum);
      }
      if (t > w(8, 'files') - 0.15) label(ctx, 'FILED AWAY', 780, 1250, 58, t, w(8, 'away') - 0.15, '#c9dcff');
      if (t > w(9, 'plan') - 0.15) label(ctx, 'YOUR PLAN TOO', 760, 1360, 58, t, w(9, 'plan') - 0.15, C.pink);
    } },

    // 4: walking back into the first room doesn't help
    { s: P_[10].s, draw(ctx, t) {
      // reverse angle: we are in the kitchen looking back at the hallway through the doorway
      ctx.fillStyle = PAL.kitchen; ctx.fillRect(0, 0, W, HH);
      ctx.fillStyle = PAL.tile; ctx.fillRect(0, 900, W, 300);
      ctx.strokeStyle = 'rgba(46,51,80,0.16)'; ctx.lineWidth = 3;
      for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 900); ctx.lineTo(x, 1200); ctx.stroke(); }
      cel(ctx, rrP(-20, 1520, W + 40, 420, 0), '#e9c79a', '#d2aa78', 0, -12, 4.5);
      doorway(ctx, 540, 1520, 560, 900, { in: PAL.wall, drawIn: (x0, y0, dw, dh) => { ctx.fillStyle = PAL.wains; ctx.fillRect(x0, y0 + dh * 0.66, dw, dh * 0.34); ctx.fillStyle = PAL.wood; ctx.fillRect(x0, y0 + dh * 0.65, dw, 14); cel(ctx, rrP(x0 + dw * 0.55, y0 + dh * 0.25, 120, 160, 10), '#ffe9a8', '#ffd47a', -3, -3, 4); } });
      speedLines(ctx, 540, 1100, t, 26, C.plum, 430, 0.18);
      // she walks back away from us, through the door (shrinking a little)
      const u = H.clamp((t - P_[10].s - 0.1) / 2.2), sc = H.lerp(1.4, 1.05, H.ease.inOut(u));
      const gy = H.lerp(1720, 1530, H.ease.inOut(u));
      girl(ctx, 540, gy, sc, { walk: u < 1 ? t * 1.7 : null, eyes: 'normal', mouth: t > w(10, 'didnt') - 0.1 ? 'wobble' : 'flat', look: [0.2, -0.3], tilt: 0.1, jt: t });
      arrowTo(ctx, 820, 1600, 760, 1150, C.lavD, grow(t, w(10, 'back') - 0.15, 0.35), 60);
      label(ctx, 'GO BACK', 860, 1660, 56, t, w(10, 'back') - 0.15, C.lav);
      qmark(ctx, 540 + 160, gy - 760 * sc / 1.4 - 40, 140, t, P_[10].s + 0.1, 0.4);
      stamp(ctx, 'NOPE!', 540, 520, 150, t, w(10, 'didnt') - 0.12, C.red, -0.1);
      kText(ctx, 'STILL LOST', 540, 330, 96, { fill: C.white, line: C.skyD, outer: C.plum, ow: 0.1, lw: 0.17 });
    } },

    // 5: 2021: hits hardest when your mind is already juggling
    { s: P_[11].s, draw(ctx, t) {
      bgV(ctx, t, TH.hall, 51);
      const s0 = P_[11].s;
      speedLines(ctx, 540, 1080, t, 30, C.skyS, 470, 0.35);
      numPop(ctx, '2021', 540, 320, 170, t, w(11, '2021') - 0.15, { line: C.skyD, fill: C.butter });
      label(ctx, 'NEW STUDY', 540, 430, 52, t, w(11, 'study') - 0.15, C.mint);
      const jug = t > w(12, 'juggling') - 0.2;
      const drop = w(12, 'something') + 0.1, dropped = t > drop;
      girl(ctx, 540, 1640, 1.15, { arms: 'juggle', jt: t, eyes: dropped ? 'swirl' : (jug ? 'shock' : 'normal'), mouth: dropped ? 'wobble' : 'o', tilt: Math.sin(t * 5) * 0.05 });
      if (dropped) { sweat(ctx, 700, 1000, 1.2); sweat(ctx, 380, 1040, 0.9, -0.3); }
      // balls orbiting over her head; speed up while "juggling"
      const items = [['phone', C.lav, C.lavS], ['keys', C.butter, C.butterS], ['chat', C.pink, C.pinkS], ['glass', C.sky, C.skyS]];
      const sp = jug ? 3.4 : 1.8, n = items.length;
      items.forEach(([ic, c, cs], i) => {
        const p = pop(t, w(11, 'hardest') - 0.4 + i * 0.12 + (i === 3 ? -0.2 : 0), 1.2); if (p.s <= 0) return;
        let a = t * sp + i * TAU / n, x = 540 + Math.cos(a) * 300, y = 900 - Math.abs(Math.sin(a)) * 210 + Math.sin(a) * 30;
        if (ic === 'glass' && dropped) { const u = t - drop; x = 760 + u * 200; y = 800 + 900 * u * u + 300 * u; if (y > 1700) return; }
        ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); ctx.rotate(ic === 'glass' && dropped ? (t - drop) * 6 : 0); ball(ctx, 0, 0, 82, c, cs, ic); ctx.restore();
      });
      label(ctx, 'JUGGLING', 260, 1180, 56, t, w(12, 'juggling') - 0.15, C.butter);
      if (dropped) { stamp(ctx, 'DROPPED!', 800, 1350, 70, t, drop + 0.25, '#e0485f', 0.1); }
      label(ctx, 'HARDEST HIT', 540, 530, 58, t, w(11, 'hardest') - 0.15, '#ffc2cf', w(12, 'juggling') - 0.3);
    } },

    // 6: end: she peeks round the door frame; comment prompt loops back to the hook
    { s: P_[13].s, draw(ctx, t) {
      hallBg(ctx, t, 9, 1560);
      doorway(ctx, 600, 1560, 520, 880, { drawIn: (x0, y0, dw, dh) => drawKitchen(ctx, x0, y0, dw, dh) });
      const p = pop(t, P_[13].s + 0.02, 0.8);
      ctx.save(); ctx.translate(250, 1600); ctx.scale(p.sx, p.sy); ctx.translate(-250, -1600);
      girl(ctx, 250, 1600, 1.15, { arms: 'wave', jt: t, eyes: t > w(13, 'today') - 0.1 ? 'happy' : 'normal', mouth: 'smile', look: [0.6, 0], tilt: -0.08 });
      ctx.restore();
      qmark(ctx, 620, 1000, 260, t, w(13, 'what') - 0.12, 0.2);
      kText(ctx, 'YOUR TURN', 540, 360, 128, { fill: C.white, line: C.skyD, outer: C.plum, ow: 0.1, lw: 0.17 });
      big(ctx, 'WHAT WAS IT?', 540, 500, 92, t, w(13, 'forget') - 0.15, { fill: C.butter, line: '#ff7e9c' });
      label(ctx, 'COMMENT BELOW', 760, 1480, 58, t, w(13, 'today') - 0.1, C.pink);
      confetti(ctx, t, w(13, 'today'), 620, 900, 30, 9, 1);
      twinkles(ctx, W, HH, t, 13, 8, (x, y) => y > 600 && y < 1600);
    } },
  ];

  const CUTS = scenes.slice(1).map((sc) => { const prev = P_.filter((p) => p.e <= sc.s + 0.01).pop(); return { t: (prev.e + sc.s) / 2 }; });
  const CUTW = 0.42;

  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) { scenes[i - 1].draw(ctx, t); wipeDoor(ctx, (t - (c.t - CUTW / 2)) / CUTW, () => scenes[i].draw(ctx, t)); }
    else scenes[i].draw(ctx, t);
  }
  function thumbnail(ctx) { scenes[0].draw(ctx, 2.0); }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    CUTS.forEach((c) => { k.noise(c.t - 0.2, { dur: 0.4, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.4, 2200]], q: 0.9, gain: 0.3, a: 0.07 }); k.play('thud', c.t + 0.12, { f: 120, gain: 0.25 }); });
    // hook
    k.play('sparkle', 0.05, { n: 5, gain: 0.4 }); pop_(0.1, 650, 0.6, 0, false);
    k.noise(w(0, 'forget') - 0.1, { dur: 0.3, color: 'white', filter: 'highpass', f: 2000, gain: 0.25 }); pop_(w(0, 'forget') - 0.1, 500, 0.8, 0.4, false);
    k.play('error', w(0, 'room') - 0.1, { f: 'A3', gain: 0.35 });
    k.play('impact', w(1, 'blame') - 0.1, { gain: 0.6 }); pop_(w(1, 'door') - 0.15, 800, 0.7, -0.4, false);
    // study
    big_(w(2, '2011') - 0.15, 'C6'); pop_(w(2, 'psychologist') - 0.15, 700, 0.6);
    for (let i = 0; i < 3; i++) k.play('tick', w(2, 'tested') - 0.15 + i * 0.12, { f: 2200, gain: 0.35, minor: true });
    k.play('whoosh', P_[3].s - 0.1, { dur: 0.5, gain: 0.3 });
    for (let i = 0; i < 12; i++) k.play('tick', w(3, 'carried') + i * 0.26, { f: 1400 + (i % 2) * 300, gain: 0.2, minor: true });
    pop_(w(3, 'objects') - 0.15, 700, 0.6); pop_(w(3, 'virtual') - 0.15, 850, 0.6);
    // compare
    pop_(P_[4].s + 0.02, 600, 0.6, -0.3); pop_(w(4, 'one') - 0.15, 700, 0.6);
    k.play('success', w(4, 'remembered') - 0.15, { f: 'C6', gain: 0.4 });
    pop_(P_[5].s - 0.3, 600, 0.6, 0.3); k.play('whoosh', P_[5].s, { dur: 0.5, gain: 0.25 });
    k.noise(w(5, 'doorway') + 0.05, { dur: 0.3, color: 'white', filter: 'highpass', f: 2200, gain: 0.25 });
    k.play('error', w(5, 'forgot') - 0.15, { f: 'G3', gain: 0.45 });
    // chapters
    pop_(P_[6].s + 0.05, 600, 0.7, 0, false);
    for (let i = 0; i < 3; i++) pop_(w(6, 'chapters') - 0.2 + i * 0.12, 600 + i * 120, 0.6, (i - 1) * 0.4);
    big_(w(6, 'events') - 0.15, 'E6');
    k.play('stamp', w(7, 'scene') - 0.18, { gain: 0.5 }); k.play('tick', w(7, 'scene') - 0.18, { f: 3000, gain: 0.5 });
    k.play('whoosh', w(8, 'files') - 0.1, { dur: 0.7, gain: 0.35 }); k.play('thud', w(8, 'away') + 0.1, { f: 110, gain: 0.5 });
    pop_(w(9, 'plan') - 0.15, 800, 0.7, 0, false);
    // back
    for (let i = 0; i < 5; i++) k.play('tick', P_[10].s + 0.2 + i * 0.36, { f: 900, gain: 0.25, minor: true });
    pop_(w(10, 'back') - 0.15, 650, 0.6); k.play('impact', w(10, 'didnt') - 0.12, { gain: 0.7 }); k.play('error', w(10, 'help') - 0.05, { f: 'F3', gain: 0.35 });
    // juggle
    big_(w(11, '2021') - 0.15, 'G6'); pop_(w(11, 'study') - 0.15, 700, 0.6);
    for (let i = 0; i < 4; i++) pop_(w(11, 'hardest') - 0.4 + i * 0.12, 600 + i * 100, 0.6, (i - 1.5) * 0.3);
    for (let i = 0; i < 10; i++) k.play('jump', w(12, 'juggling') - 0.2 + i * 0.22, { gain: 0.18, minor: true });
    k.play('whoosh', w(12, 'something') + 0.1, { dur: 0.6, gain: 0.35 }); k.play('thud', w(12, 'something') + 0.75, { f: 80, gain: 0.5 }); k.play('stamp', w(12, 'something') + 0.35, { gain: 0.4 });
    // end
    pop_(P_[13].s + 0.05, 600, 0.7, -0.4); big_(w(13, 'what') - 0.12, 'C6');
    k.play('success', w(13, 'today') - 0.1, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(13, 'today'), { n: 8, gain: 0.6 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
