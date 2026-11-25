// ===== Kawaii Anime (serious muted palette), vertical: "How did Hitler get handed Germany?" =====
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
  const P_ = [{"s": 0.25, "e": 1.72, "text": "Hitler never won a majority.", "words": [["hitler", 0.25], ["never", 0.63], ["won", 0.95], ["a", 1.14], ["majority", 1.21]]}, {"s": 2.11, "e": 3.87, "text": "So how did he get handed Germany?", "words": [["so", 2.11], ["how", 2.24], ["did", 2.45], ["he", 2.65], ["get", 2.79], ["handed", 2.99], ["germany", 3.39]]}, {"s": 4.44, "e": 7.32, "text": "In 1929, the Great Depression hit.", "words": [["in", 4.44], ["1929", 4.65], ["the", 5.08], ["great", 5.4], ["depression", 5.93], ["hit", 7.0]]}, {"s": 7.75, "e": 11.97, "text": "By 1932, about six million Germans had no job.", "words": [["by", 7.75], ["1932", 7.98], ["about", 8.45], ["six", 9.04], ["million", 9.39], ["germans", 10.21], ["had", 11.03], ["no", 11.38], ["job", 11.62]]}, {"s": 12.37, "e": 15.04, "text": "Angry voters drifted to the extremes,", "words": [["angry", 12.37], ["voters", 12.8], ["drifted", 13.32], ["to", 13.92], ["the", 14.1], ["extremes", 14.35]]}, {"s": 15.11, "e": 17.23, "text": "and his party peaked at 37 percent.", "words": [["and", 15.11], ["his", 15.34], ["party", 15.57], ["peaked", 15.95], ["at", 16.4], ["37", 16.55], ["percent", 16.7]]}, {"s": 17.58, "e": 19.55, "text": "By November, it slipped to 33.", "words": [["by", 17.58], ["november", 17.75], ["it", 18.44], ["slipped", 18.61], ["to", 19.21], ["33", 19.38]]}, {"s": 19.91, "e": 21.57, "text": "Then a few insiders made a deal.", "words": [["then", 19.91], ["a", 20.17], ["few", 20.24], ["insiders", 20.44], ["made", 20.97], ["a", 21.23], ["deal", 21.3]]}, {"s": 21.95, "e": 24.78, "text": "They got President Hindenburg to name him chancellor,", "words": [["they", 21.95], ["got", 22.2], ["president", 22.39], ["hindenburg", 22.95], ["to", 23.58], ["name", 23.71], ["him", 23.96], ["chancellor", 24.15]]}, {"s": 24.94, "e": 26.46, "text": "sure they could control him.", "words": [["sure", 24.94], ["they", 25.2], ["could", 25.47], ["control", 25.8], ["him", 26.26]]}, {"s": 26.91, "e": 30.13, "text": "One bragged he'd be squeezed into a corner within two months.", "words": [["one", 26.91], ["bragged", 27.11], ["hed", 27.57], ["be", 27.77], ["squeezed", 27.9], ["into", 28.42], ["a", 28.69], ["corner", 28.75], ["within", 29.15], ["two", 29.54], ["months", 29.74]]}, {"s": 30.52, "e": 32.3, "text": "Four weeks later, the Reichstag burned.", "words": [["four", 30.52], ["weeks", 30.74], ["later", 31.02], ["the", 31.29], ["reichstag", 31.46], ["burned", 31.96]]}, {"s": 32.74, "e": 34.55, "text": "A decree suspended basic rights.", "words": [["a", 32.74], ["decree", 32.8], ["suspended", 33.21], ["basic", 33.81], ["rights", 34.15]]}, {"s": 34.9, "e": 38.44, "text": "In March, the Enabling Act let him make laws without parliament.", "words": [["in", 34.9], ["march", 35.04], ["the", 35.38], ["enabling", 35.58], ["act", 36.13], ["let", 36.33], ["him", 36.54], ["make", 36.74], ["laws", 37.01], ["without", 37.28], ["parliament", 37.76]]}, {"s": 38.83, "e": 40.25, "text": "So who really opened the door?", "words": [["so", 38.83], ["who", 38.95], ["really", 39.13], ["opened", 39.48], ["the", 39.84], ["door", 40.01]]}];

  // ---------- timing (from phrases.json) ----------
  const BEATS = [
    { id: 'hook', s: 0, e: P_[1].e, on: 'FULL FRAME at 0 s: the Reichstag at dusk, big and centred, a dark-coated figure seen from behind, pie chart stuck at 37% under a 50% line, NEVER WON 50%; a GERMANY key is handed down on "handed"' },
    { id: 'crash', s: P_[2].s, e: P_[3].e, on: 'rainy grey-blue street: 1929 + crashing chart line on "depression"; queue of worried workers, 6,000,000 counter, NO JOB' },
    { id: 'votes', s: P_[4].s, e: P_[6].e, on: 'ballot box, ballots fly to EXTREMES; bar JULY 1932 grows to 37% under a dashed MAJORITY 50% line; NOV 1932 bar slips to 33%' },
    { id: 'deal', s: P_[7].s, e: P_[9].e, on: 'lamp-lit back room: old President Hindenburg behind a desk, two insiders; CHANCELLOR paper stamped 30 JAN 1933; THE PLAN: CONTROL HIM' },
    { id: 'corner', s: P_[10].s, e: P_[10].e, on: 'chessboard: dark king slides into a corner, calendar 2 MONTHS' },
    { id: 'fire', s: P_[11].s, e: P_[12].e, on: 'night: the Reichstag dome in stylised flames, 27 FEB 1933; EMERGENCY DECREE paper, FREE PRESS / FREE SPEECH / ASSEMBLY crossed out, SUSPENDED stamp' },
    { id: 'enabling', s: P_[13].s, e: P_[13].e, on: 'parliament half-circle, ENABLING ACT book, 444 YES vs 94 NO, seats fade grey: NO PARLIAMENT NEEDED' },
    { id: 'end', s: P_[14].s, e: P_[14].e, on: 'a door ajar with light spilling out, VOTERS? / INSIDERS? tags, WHO OPENED IT?, COMMENT' },
  ];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;

  // ---------- serious palette: dusk, grey-blue, earth tones (no neon) ----------
  const PAL = {
    stone: '#d8ccb6', stoneS: '#b3a58c', stoneD: '#8c806b', roof: '#7d8a92', roofS: '#5f6b74',
    lit: '#f2cf86', litS: '#d9a95a', unlit: '#5d6680',
    coat: '#3b4054', coatS: '#2a2e3e', hairD: '#2b2a33',
    skin: '#f6dcc6', skinS: '#dfb79c',
    paper: '#f1e8d4', paperS: '#d6c9ab', brick: '#a5523f', brickS: '#7e3c2f', olive: '#7f8b5e', oliveS: '#626c46',
    wood: '#8a5f43', woodS: '#6a4632', woodL: '#a9785a', gold: '#d8b25a', goldS: '#ad8a3c',
    slate: '#56607a', slateS: '#424a61', mist: '#c7ccd8', ink: '#2e3350',
  };
  const TXT = { fill: '#fff4dc', line: '#9a4b3c' };

  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.03, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.04, fill: TXT.fill, line: TXT.line, ...o });
  const still = (ctx, s, x, y, size, o = {}) => kText(ctx, s, x, y, size, { outer: C.plum, ow: 0.1, lw: 0.17, fill: TXT.fill, line: TXT.line, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = PAL.paper, out) => { let p = pop(t, t0); if (p.s <= 0) return; if (out != null) { const k = popOut(t, out); if (k <= 0) return; p = { s: p.s * k, sx: p.sx * k, sy: p.sy * k }; } ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  const numPop = (ctx, str, x, y, size, t, t0, o = {}) => { const n = pop(t, t0, 1.2); if (n.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(n.sx, n.sy); kText(ctx, str, 0, 0, size, { fill: o.fill || TXT.fill, line: o.line || TXT.line, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); };
  const grow = (t, t0, d) => H.ease.out(H.clamp((t - t0) / d));

  // ---------- backgrounds ----------
  function sky(ctx, t, cols, seed, o = {}) {
    const g = ctx.createLinearGradient(0, 0, 0, HH);
    cols.forEach((c, i) => g.addColorStop(i / (cols.length - 1), c));
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
    const r = H.rng(seed);
    if (o.stars) { for (let i = 0; i < 40; i++) { const x = r.range(0, W), y = r.range(0, 800), k = 0.5 + 0.5 * Math.sin(t * r.range(1.5, 3) + i); ctx.fillStyle = `rgba(255,244,220,${0.25 + 0.5 * k})`; ctx.fill(ellP(x, y, 3, 3)); } }
    ctx.save(); ctx.globalAlpha = o.cloudA || 0.22; ctx.fillStyle = o.cloud || '#ffffff';
    for (let i = 0; i < 5; i++) { const s = r.range(1.2, 2.2), x = ((r.range(0, W + 500) + t * r.range(10, 22)) % (W + 500)) - 250, y = r.range(120, o.cloudMax || 900); ctx.fill(cloudP(x, y, s)); }
    ctx.restore();
  }
  function vign(ctx, a = 0.45) { H.vignette(ctx, W, HH, a, '30,28,48'); }
  function rain(ctx, t, a = 0.35) {
    const r = H.rng(77), tt = q15(t);
    ctx.save(); ctx.strokeStyle = `rgba(220,228,245,${a})`; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = 0; i < 90; i++) { const x0 = r.range(-100, W + 100), sp = r.range(1400, 2000), y = ((r.range(0, HH) + tt * sp) % (HH + 200)) - 100, x = x0 - (y * 0.12); ctx.moveTo(x, y); ctx.lineTo(x - 10, y + 60); }
    ctx.stroke(); ctx.restore();
  }

  // ---------- the Reichstag building (front view; origin at the base centre) ----------
  function reichstag(ctx, cx, by, s, o = {}) {
    const t = o.t || 0, lit = o.lit == null ? 1 : o.lit;
    ctx.save(); ctx.translate(cx, by); ctx.scale(s, s);
    // glass-and-steel dome on a drum
    cel(ctx, rrP(-150, -480, 300, 90, 8), PAL.stone, PAL.stoneS, -6, -6, 4.5);
    const dome = new Path2D(); dome.moveTo(-160, -478); dome.bezierCurveTo(-150, -600, -70, -650, 0, -655); dome.bezierCurveTo(70, -650, 150, -600, 160, -478); dome.closePath();
    cel(ctx, dome, o.domeCol || '#9fb0bf', o.domeS || '#7d8fa1', -14, -10, 4.5);
    ctx.save(); ctx.clip(dome); ctx.strokeStyle = 'rgba(46,51,80,0.55)'; ctx.lineWidth = 4;
    for (let i = -4; i <= 4; i++) { ctx.beginPath(); ctx.moveTo(i * 36, -478); ctx.quadraticCurveTo(i * 22, -600, 0, -655); ctx.stroke(); }
    for (let j = 1; j < 4; j++) { ctx.beginPath(); ctx.ellipse(0, -478, 160 - j * 30, 30 + j * 30, 0, Math.PI, TAU); ctx.stroke(); }
    ctx.restore();
    cel(ctx, rrP(-24, -690, 48, 40, 8), PAL.stone, PAL.stoneS, -3, -3, 4);
    // main block
    cel(ctx, rrP(-410, -330, 820, 330, 6), PAL.stone, PAL.stoneS, -14, -10, 4.5);
    cel(ctx, rrP(-420, -350, 840, 30, 6), PAL.stoneS, PAL.stoneD, -4, -4, 4);
    // windows (warm lit at dusk, flicker slightly)
    const r = H.rng(5);
    const win = (x, y, ww, hh) => { const on = r() < 0.8 * lit; const f = on ? 0.85 + 0.15 * Math.sin(t * 2 + x) : 0; cel(ctx, rrP(x, y, ww, hh, 6), on ? H.rgba(H.mix(PAL.unlit, PAL.lit, f)) : PAL.unlit, on ? PAL.litS : PAL.slateS, -3, -3, 3.5); };
    for (const side of [-1, 1]) for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) win(side * (215 + i * 58) - 16, -280 + j * 110, 32, 62);
    // corner towers
    for (const side of [-1, 1]) {
      const tx = side * 395;
      cel(ctx, rrP(tx - 75, -430, 150, 430, 6), PAL.stone, PAL.stoneS, -10, -8, 4.5);
      cel(ctx, rrP(tx - 85, -455, 170, 34, 6), PAL.stoneS, PAL.stoneD, -4, -4, 4);
      cel(ctx, roundPoly([[tx - 70, -455], [tx, -505], [tx + 70, -455]], 8), PAL.roof, PAL.roofS, -4, -4, 4);
      for (let j = 0; j < 3; j++) win(tx - 18, -390 + j * 115, 36, 66);
    }
    // portico: steps, six columns, entablature, pediment
    cel(ctx, rrP(-215, -40, 430, 40, 4), PAL.stoneS, PAL.stoneD, -4, -4, 4);
    cel(ctx, rrP(-185, -270, 370, 232, 4), H.rgba(H.mix(PAL.stoneS, PAL.slate, 0.35)), PAL.stoneD, -4, -4, 4);
    for (let i = 0; i < 6; i++) cel(ctx, rrP(-162 + i * 60, -268, 28, 228, 8), PAL.stone, PAL.stoneS, -5, 0, 4);
    cel(ctx, rrP(-200, -310, 400, 44, 4), PAL.stone, PAL.stoneS, -6, -6, 4.5);
    cel(ctx, roundPoly([[-210, -308], [0, -395], [210, -308]], 10), PAL.stone, PAL.stoneS, -8, -8, 4.5);
    ctx.restore();
  }
  // stylised anime flames (no destruction detail), origin at flame base
  function flames(ctx, x, y, s, t, k = 1) {
    if (k <= 0) return;
    const tt = q15(t);
    ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k);
    const g = ctx.createRadialGradient(0, -120, 20, 0, -120, 420); g.addColorStop(0, 'rgba(240,150,80,0.35)'); g.addColorStop(1, 'rgba(240,150,80,0)');
    ctx.fillStyle = g; ctx.fillRect(-420, -540, 840, 840);
    const tongue = (dx, hgt, wd, col, colS, ph) => {
      const sw = Math.sin(tt * 9 + ph) * 18, p = new Path2D();
      p.moveTo(dx - wd, 0); p.bezierCurveTo(dx - wd, -hgt * 0.45, dx - wd * 0.2 + sw, -hgt * 0.6, dx + sw * 1.4, -hgt);
      p.bezierCurveTo(dx + wd * 0.3 + sw, -hgt * 0.6, dx + wd, -hgt * 0.45, dx + wd, 0); p.closePath();
      cel(ctx, p, col, colS, -6, -6, 4);
    };
    [[-120, 220, 60, 0.3], [120, 240, 64, 1.7], [-50, 330, 80, 2.6], [50, 300, 76, 4.1], [0, 400, 90, 5.2]].forEach(([dx, hh, wd, ph]) => tongue(dx, hh + Math.sin(tt * 7 + ph) * 25, wd, '#e8894f', '#c8643a', ph));
    [[-40, 200, 44, 1], [40, 230, 48, 3], [0, 280, 54, 2]].forEach(([dx, hh, wd, ph]) => tongue(dx, hh + Math.sin(tt * 8 + ph) * 18, wd, '#f6c66e', '#e8a14f', ph));
    ctx.restore();
  }
  function smoke(ctx, x, y, t, s = 1) {
    const r = H.rng(31);
    ctx.save();
    for (let i = 0; i < 7; i++) { const u = ((t * 0.18 + r()) % 1), px = x + Math.sin(i * 2 + t) * 40 + u * 160 * (r() - 0.3), py = y - u * 700; ctx.globalAlpha = 0.5 * (1 - u); ctx.fillStyle = '#6d7186'; ctx.fill(cloudP(px, py, (0.6 + u * 1.2) * s)); }
    ctx.restore();
  }

  // ---------- people (anime style, serious faces). origin at the feet ----------
  function person(ctx, x, y, s, o = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s * (o.flip || 1), s);
    const wp = o.walk == null ? null : o.walk, sw = wp == null ? 0 : Math.sin(wp * TAU);
    ctx.translate(0, wp == null ? 0 : -Math.abs(Math.cos(wp * TAU)) * 8);
    const coat = o.coat || PAL.coat, coatS = o.coatS || PAL.coatS, pants = o.pants || '#4a4f63', skin = o.skin || PAL.skin, skinS = o.skinS || PAL.skinS;
    const leg = (dx, a) => { ctx.save(); ctx.translate(dx, -160); ctx.rotate(a); cel(ctx, rrP(-24, 0, 48, 150, 20), pants, H.rgba(H.mix(pants, C.plum, 0.3)), -5, -4, 4.5); cel(ctx, rrP(-30, 128, 64, 30, 14), '#3a3036', '#2a2228', -3, -3, 4.5); ctx.restore(); };
    leg(-30, sw * 0.35); leg(30, -sw * 0.35);
    const arm = (side, a, len = 150) => { ctx.save(); ctx.translate(side * 82, -370); ctx.rotate(a); cel(ctx, rrP(-21, -10, 42, len, 20), coat, coatS, -5, -4, 4.5); cel(ctx, ellP(0, len - 2, 21, 21), skin, skinS, -3, -3, 4); ctx.restore(); };
    const arms = o.arms || 'down';
    if (arms === 'down') { arm(-1, 0.12 + sw * 0.3); arm(1, -0.12 - sw * 0.3); }
    const torso = new Path2D(); torso.moveTo(-86, -385); torso.quadraticCurveTo(0, -405, 86, -385); torso.lineTo(o.long ? 112 : 100, o.long ? -110 : -150); torso.quadraticCurveTo(0, o.long ? -92 : -134, o.long ? -112 : -100, o.long ? -110 : -150); torso.closePath();
    cel(ctx, torso, coat, coatS, -12, -8, 4.5);
    // collar / shirt / tie
    cel(ctx, roundPoly([[-36, -392], [0, -330], [36, -392]], 6), o.shirt || '#efe9dc', '#cfc7b6', -2, -2, 3.5);
    if (o.tie) cel(ctx, roundPoly([[-9, -372], [9, -372], [12, -300], [0, -284], [-12, -300]], 4), o.tie, H.rgba(H.mix(o.tie, C.plum, 0.3)), -2, -2, 3);
    if (o.buttons) for (let i = 0; i < 4; i++) cel(ctx, ellP(0, -320 + i * 42, 8, 8), PAL.gold, PAL.goldS, -1, -1, 3);
    if (arms === 'point') { arm(-1, 0.15); arm(1, -1.7, 150); }
    if (arms === 'hold') { arm(-1, -0.7, 130); arm(1, 0.7, 130); }
    if (arms === 'fold') { arm(-1, -1.2, 120); arm(1, 1.2, 120); }
    // head
    ctx.save(); ctx.translate(0, -500); ctx.rotate(o.tilt || 0);
    const hair = o.hair || PAL.hairD, hairS = o.hairS || H.rgba(H.mix(hair, '#000000', 0.25));
    if (o.hs === 'bob') cel(ctx, rrP(-118, -110, 236, 200, 100), hair, hairS, -8, -8, 4.5);
    cel(ctx, ellP(0, 10, 98, 94), skin, skinS, -10, -10, 4.5);
    if (o.hs === 'cap') {
      cel(ctx, rrP(-108, -96, 216, 70, 34), o.capCol || '#6b6458', '#544e44', -6, -6, 4.5);
      cel(ctx, ellP(30, -30, 110, 22, 0), o.capCol || '#6b6458', '#544e44', -4, -4, 4.5);
    } else if (o.hs === 'crew') {
      cel(ctx, rrP(-92, -92, 184, 70, 30), hair, hairS, -6, -6, 4.5);
    } else if (o.hs === 'bob') {
      const b = new Path2D(); b.moveTo(-108, 20); b.quadraticCurveTo(-120, -110, 0, -112); b.quadraticCurveTo(120, -110, 108, 20); b.lineTo(80, -30); b.lineTo(50, 0); b.lineTo(20, -40); b.lineTo(-10, -4); b.lineTo(-40, -42); b.lineTo(-70, 2); b.lineTo(-92, -24); b.closePath();
      cel(ctx, b, hair, hairS, -6, -8, 4.5);
    } else { // slick side part
      const b = new Path2D(); b.moveTo(-104, 10); b.quadraticCurveTo(-112, -108, 10, -110); b.quadraticCurveTo(112, -104, 104, 0); b.quadraticCurveTo(60, -60, -20, -56); b.quadraticCurveTo(-70, -40, -104, 10); b.closePath();
      cel(ctx, b, hair, hairS, -6, -8, 4.5);
      ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, -10, 86, Math.PI * 1.2, Math.PI * 1.38); ctx.stroke(); ctx.restore();
    }
    const ey = 22, ex = 40, ik = o.eyes || 'normal';
    eye(ctx, -ex, ey, o.er || 20, (o.er || 20) * 1.3, o.iris || '#6b7fa8', ik, -1, o.look || [0, 0]);
    eye(ctx, ex, ey, o.er || 20, (o.er || 20) * 1.3, o.iris || '#6b7fa8', ik, 1, o.look || [0, 0]);
    // brows
    ctx.save(); ctx.strokeStyle = C.dark; ctx.lineWidth = 7; ctx.lineCap = 'round';
    const bw = o.brows || 'stern';
    [-1, 1].forEach((sd) => { ctx.beginPath();
      if (bw === 'worried') { ctx.moveTo(sd * 18, -14); ctx.lineTo(sd * 62, -4); }
      else if (bw === 'smug') { ctx.moveTo(sd * 20, -10); ctx.quadraticCurveTo(sd * 42, -24, sd * 64, -12); }
      else { ctx.moveTo(sd * 18, -6); ctx.lineTo(sd * 62, -16); }
      ctx.stroke(); });
    ctx.restore();
    if (o.stache === 'walrus') {
      const m = new Path2D(); m.moveTo(0, 58); m.bezierCurveTo(-30, 46, -70, 52, -78, 84); m.bezierCurveTo(-50, 74, -24, 80, 0, 72); m.bezierCurveTo(24, 80, 50, 74, 78, 84); m.bezierCurveTo(70, 52, 30, 46, 0, 58); m.closePath();
      cel(ctx, m, '#eeeae2', '#c9c3b8', -3, -3, 4);
    } else mouth(ctx, 0, 70, 10, o.mouth || 'flat');
    ctx.restore();
    ctx.restore();
  }
  // a figure seen from behind in a long dark coat (never a face), origin at the feet
  function figureBack(ctx, x, y, s, t) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const coat = new Path2D(); coat.moveTo(-96, -430); coat.quadraticCurveTo(0, -455, 96, -430); coat.lineTo(130, -40); coat.quadraticCurveTo(0, -20, -130, -40); coat.closePath();
    cel(ctx, rrP(-60, -60, 46, 70, 16), '#24252e', '#1a1b22', -3, -3, 4.5); cel(ctx, rrP(14, -60, 46, 70, 16), '#24252e', '#1a1b22', -3, -3, 4.5);
    cel(ctx, coat, '#3a3c4a', '#2a2b36', -16, -8, 4.5);
    ctx.save(); ctx.clip(coat); ctx.strokeStyle = 'rgba(20,20,30,0.45)'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(0, -300); ctx.lineTo(0, -30); ctx.moveTo(-70, -250); ctx.lineTo(70, -250); ctx.stroke(); ctx.restore();
    cel(ctx, rrP(-118, -420, 40, 300, 20), '#3a3c4a', '#2a2b36', -4, -4, 4.5); cel(ctx, rrP(78, -420, 40, 300, 20), '#3a3c4a', '#2a2b36', -4, -4, 4.5);
    cel(ctx, rrP(-28, -470, 56, 50, 12), PAL.skinS, '#c99d80', -3, -3, 4);
    cel(ctx, ellP(0, -530, 70, 74), '#2b2a33', '#1d1c24', -10, -10, 4.5);
    ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.22)'; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, -540, 56, Math.PI * 1.15, Math.PI * 1.4); ctx.stroke(); ctx.restore();
    ctx.restore();
  }
  function pie(ctx, cx, cy, r, frac, col, colS) {
    cel(ctx, ellP(cx, cy, r, r), PAL.paper, PAL.paperS, -6, -6, 4.5);
    if (frac > 0) { const p = new Path2D(); p.moveTo(cx, cy); p.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + frac * TAU); p.closePath(); cel(ctx, p, col, colS, -4, -4, 4); }
    ctx.save(); ctx.setLineDash([14, 12]); ctx.strokeStyle = C.plum; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(cx, cy - r - 24); ctx.lineTo(cx, cy + r + 24); ctx.stroke(); ctx.restore();
  }
  function key(ctx, x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const ring = new Path2D(); ring.arc(-70, 0, 46, 0, TAU); ring.arc(-70, 0, 20, 0, TAU, true);
    cel(ctx, ring, PAL.gold, PAL.goldS, -4, -4, 4.5);
    cel(ctx, rrP(-28, -14, 150, 28, 10), PAL.gold, PAL.goldS, -3, -3, 4.5);
    cel(ctx, rrP(80, 8, 22, 40, 6), PAL.gold, PAL.goldS, -2, -2, 4); cel(ctx, rrP(40, 8, 22, 30, 6), PAL.gold, PAL.goldS, -2, -2, 4);
    shine(ctx, -88, -18, 12, 7, -0.6);
    ctx.restore();
  }
  function paperDoc(ctx, x, y, s, rot, title, lines = []) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    cel(ctx, rrP(-220, -280, 440, 560, 14), PAL.paper, PAL.paperS, -8, -8, 4.5);
    ctx.fillStyle = C.plum; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = `700 52px ${FONT}`; title.split('\n').forEach((ln, i) => ctx.fillText(ln, 0, -200 + i * 60));
    ctx.fillStyle = 'rgba(46,51,80,0.25)'; for (let i = 0; i < 5; i++) ctx.fill(rrP(-170, -40 + i * 50, 340 - (i % 2) * 80, 14, 7));
    lines.forEach(() => {});
    ctx.restore();
  }
  function wipeDoor(ctx, u, drawB) {
    const e = H.ease.inOut(H.clamp(u)), edge = -160 + e * (W + 320);
    ctx.save(); ctx.beginPath(); ctx.rect(0, 0, Math.max(0, edge), HH); ctx.clip(); drawB(); ctx.restore();
    const sw = 150 + Math.sin(e * Math.PI) * 110;
    const slab = new Path2D(); slab.moveTo(edge, -20); slab.lineTo(edge + sw, 60); slab.lineTo(edge + sw, HH - 60); slab.lineTo(edge, HH + 20); slab.closePath();
    cel(ctx, slab, PAL.woodL, PAL.wood, 10, 0, 6);
    ctx.save(); ctx.clip(slab); ctx.strokeStyle = 'rgba(80,50,35,0.55)'; ctx.lineWidth = 8;
    ctx.strokeRect(edge + 24, 220, sw - 48, 600); ctx.strokeRect(edge + 24, 1000, sw - 48, 700); ctx.restore();
    cel(ctx, ellP(edge + sw - 34, HH / 2, 16, 20), PAL.gold, PAL.goldS, -2, -2, 4);
  }
  function speedLines(ctx, cx, cy, t, n = 28, col = '#fff4dc', r0 = 380, alpha = 0.45) {
    const r = H.rng(Math.floor(t * 15) + 5);
    ctx.save(); ctx.strokeStyle = col; ctx.lineCap = 'round'; ctx.globalAlpha = alpha;
    for (let i = 0; i < n; i++) { const a = i / n * TAU + r() * 0.15, a0 = r0 + r() * 120, len = 140 + r() * 260; ctx.lineWidth = 3 + r() * 6; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * a0, cy + Math.sin(a) * a0); ctx.lineTo(cx + Math.cos(a) * (a0 + len), cy + Math.sin(a) * (a0 + len)); ctx.stroke(); }
    ctx.restore();
  }
  function stamp(ctx, str, x, y, size, t, t0, col = PAL.brick, rot = -0.12) {
    const u = t - t0; if (u < 0) return;
    const s = u < 0.12 ? 2.2 - (u / 0.12) * 1.2 : 1 + Math.exp(-14 * (u - 0.12)) * Math.sin(30 * (u - 0.12)) * 0.06;
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    ctx.font = `700 ${size}px ${FONT}`; const tw = ctx.measureText(str).width + size * 0.7, th = size * 1.3;
    ctx.fillStyle = 'rgba(255,248,236,0.88)'; ctx.fill(rrP(-tw / 2, -th / 2, tw, th, 18));
    ctx.strokeStyle = col; ctx.lineWidth = 10; ctx.stroke(rrP(-tw / 2, -th / 2, tw, th, 18));
    ctx.fillStyle = col; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(str, 0, 4);
    ctx.restore();
  }
  function crossOut(ctx, x0, y, x1, prog) { if (prog <= 0) return; ctx.save(); ctx.strokeStyle = PAL.brick; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x0 + (x1 - x0) * prog, y - 6 * prog); ctx.stroke(); ctx.restore(); }
  function ground(ctx, y, col, colS) { ctx.fillStyle = col; ctx.fillRect(0, y, W, HH - y); ctx.fillStyle = colS; ctx.fillRect(0, y, W, 14); }

  // ---------- scenes ----------
  const scenes = [
    // 0 HOOK: full frame at t=0, the Reichstag at dusk, a figure from behind, 37% pie under the 50% line, hook words
    { s: 0, draw(ctx, t) {
      const push = 1 + 0.06 * H.clamp(t / 4.2), drift = t * 6;
      sky(ctx, t, ['#3e4766', '#6f6f8f', '#b98a7a', '#e2b083'], 3, { cloud: '#f4d6c0', cloudA: 0.28, cloudMax: 700 });
      ctx.save(); ctx.translate(540, 1200); ctx.scale(push, push); ctx.translate(-540 + drift * 0.3, -1200);
      ground(ctx, 1290, '#59596c', '#47475a');
      reichstag(ctx, 540, 1300, 1.08, { t });
      ctx.restore();
      // figure from behind, foreground (parallax: moves faster)
      const fx = 540 - drift * 0.6;
      figureBack(ctx, fx, 1980 + Math.sin(t * 1.2) * 4, 1.25 * push, t);
      // pie: stuck at 37%, never past the 50% line
      const pp = pop(t, w(0, 'majority') - 0.15, 0.6), pr = 1 + (pp.s > 0 ? (pp.sy - pp.s) * 0.6 : 0);
      ctx.save(); ctx.translate(215, 1180); ctx.scale(pr, pr);
      pie(ctx, 0, 0, 130, 0.37 + Math.sin(t * 3) * 0.004, PAL.slate, PAL.slateS);
      ctx.restore();
      kText(ctx, '37%', 215, 1385, 72, { fill: TXT.fill, line: PAL.slate, outer: C.plum, ow: 0.08, lw: 0.16 });
      kText(ctx, '50%', 215, 1008, 44, { fill: PAL.paper, line: C.plum, outer: C.plum, ow: 0.06, lw: 0.1, shadow: false });
      // hook words: full size, full opacity from frame 0 (different words from the voice)
      const sway = Math.sin(t * 2.2) * 0.012;
      ctx.save(); ctx.translate(540, 360); ctx.rotate(sway);
      still(ctx, 'NEVER WON', 0, 0, 130);
      still(ctx, '50%', 0, 175, 190, { fill: '#ffe2a6' });
      ctx.restore();
      // "handed": a gold GERMANY key drops into the figure's reach
      const hk = w(1, 'handed') - 0.15;
      if (t > hk - 0.3) {
        const u = H.clamp((t - hk + 0.3) / 0.45), e = H.ease.out(u);
        const kx = H.lerp(980, 760, e), ky = H.lerp(500, 1010, e) + (u >= 1 ? Math.sin((t - hk) * 4) * 8 : 0);
        if (u > 0.6 && t < hk + 0.9) speedLines(ctx, kx, ky, t, 22, '#fff4dc', 200, 0.4);
        key(ctx, kx, ky, 1.25, -0.5 + e * 0.3);
        label(ctx, 'GERMANY', kx - 10, ky + 120, 52, t, hk + 0.1, PAL.gold);
      }
      vign(ctx, 0.35);
    } },

    // 1 CRASH: 1929, falling chart, a queue of jobless workers, 6,000,000
    { s: P_[2].s, draw(ctx, t) {
      sky(ctx, t, ['#5b6680', '#7d879c', '#9aa1b0'], 11, { cloud: '#d6dae4', cloudA: 0.35, cloudMax: 900 });
      ground(ctx, 1500, '#6c6f7d', '#585b69');
      // street fronts
      for (let i = 0; i < 4; i++) { const x = -40 + i * 290; cel(ctx, rrP(x, 760 + (i % 2) * 60, 270, 760, 6), i % 2 ? '#8e8c94' : '#a39d9a', i % 2 ? '#77757e' : '#8a837f', -8, -8, 4.5); for (let j = 0; j < 3; j++) for (let k = 0; k < 2; k++) cel(ctx, rrP(x + 40 + k * 110, 860 + (i % 2) * 60 + j * 170, 70, 100, 6), '#5d6680', '#4a5269', -3, -3, 3.5); }
      cel(ctx, rrP(330, 1140, 330, 70, 10), PAL.paper, PAL.paperS, -4, -4, 4); ctx.fillStyle = C.plum; ctx.font = `700 46px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('NO WORK', 495, 1177);
      // chart card
      const t19 = w(2, '1929') - 0.15, dp = w(2, 'depression') - 0.15;
      const cp = pop(t, P_[2].s - 0.05);
      if (cp.s > 0) {
        ctx.save(); ctx.translate(540, 520); ctx.scale(cp.sx, cp.sy);
        cel(ctx, rrP(-400, -230, 800, 440, 24), PAL.paper, PAL.paperS, -8, -8, 4.5);
        ctx.save(); ctx.strokeStyle = 'rgba(46,51,80,0.18)'; ctx.lineWidth = 3; for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.moveTo(-350, -150 + i * 90); ctx.lineTo(350, -150 + i * 90); ctx.stroke(); } ctx.restore();
        const pts = [[-340, -120], [-260, -150], [-180, -130], [-120, -170], [-60, -60], [20, 40], [120, 80], [220, 130], [330, 160]];
        const pr = grow(t, dp, 1.0), n = Math.max(2, Math.ceil(pts.length * Math.max(pr, 0.45)));
        ctx.save(); ctx.strokeStyle = PAL.brick; ctx.lineWidth = 16; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.beginPath(); pts.slice(0, n).forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
        if (pr >= 1) { const [x, y] = pts[pts.length - 1]; cel(ctx, roundPoly([[x + 30, y + 30], [x - 30, y + 10], [x + 10, y - 30]], 6), PAL.brick, PAL.brickS, -2, -2, 4); }
        ctx.restore();
      }
      if (t < w(3, 'six') - 0.15) numPop(ctx, '1929', 540, 260, 150, t, t19, { line: PAL.slate });
      label(ctx, 'GREAT DEPRESSION', 540, 800, 56, t, dp, PAL.paper, P_[3].s + 0.4);
      // queue of worried workers walks in
      const qs = P_[3].s - 0.2;
      const cols = [['#6b6458', '#4f4a42', 'cap'], ['#4f5a72', '#3e475c', 'slick'], ['#7a6a5a', '#5f5244', 'bob'], ['#5a6450', '#474f3f', 'cap'], ['#685a6c', '#514655', 'slick']];
      cols.forEach(([c, cs, hs], i) => {
        const tx = 140 + i * 205, arrive = qs + i * 0.12, u = H.clamp((t - arrive) / 0.8), x = H.lerp(tx + 700, tx, H.ease.out(u));
        if (t < arrive - 0.01 && P_[3].s > t + 1) return;
        person(ctx, x, 1660, 0.62, { coat: c, coatS: cs, hs, hair: hs === 'bob' ? '#6a4a3a' : '#3b3434', walk: u < 1 ? (t - arrive) * 1.6 : null, eyes: 'normal', brows: 'worried', mouth: i % 2 ? 'wobble' : 'flat', look: [0, 0.6], iris: ['#7a8db0', '#8a7b6b', '#6f8f7a', '#8f7aa0', '#7a8db0'][i], long: true });
      });
      // 6,000,000 counter, ticks up from "six" to "million"
      const six = w(3, 'six') - 0.15, mil = w(3, 'million') + 0.3;
      if (t > six) {
        const v = Math.round(6000000 * H.ease.out(H.clamp((t - six) / (mil - six))));
        numPop(ctx, v.toLocaleString('en-US'), 540, 250, 140, t, six, { line: PAL.brick });
      }
      label(ctx, 'NO JOB', 540, 1020, 64, t, w(3, 'job') - 0.15, '#e8c9b8');
      rain(ctx, t, 0.3);
      vign(ctx, 0.4);
    } },

    // 2 VOTES: ballots fly to the extremes; 37% peak under a dashed 50% line, then 33%
    { s: P_[4].s, draw(ctx, t) {
      sky(ctx, t, ['#d9c6a6', '#cdb894', '#b9a27e'], 21, { cloud: '#fff4e0', cloudA: 0.25, cloudMax: 600 });
      // chart area
      const x0 = 160, x1 = 920, yb = 1300, yTop = 520, k = (yb - yTop) / 50; // 50% at yTop
      ctx.save(); ctx.fillStyle = 'rgba(255,248,236,0.55)'; ctx.fill(rrP(110, 380, 860, 1000, 30)); ctx.restore();
      ol(ctx, rrP(110, 380, 860, 1000, 30), 4);
      ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(x0, yb); ctx.lineTo(x1, yb); ctx.stroke(); ctx.restore();
      // majority line
      ctx.save(); ctx.setLineDash([26, 18]); ctx.strokeStyle = PAL.olive; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(x0, yTop); ctx.lineTo(x1, yTop); ctx.stroke(); ctx.restore();
      kText(ctx, 'MAJORITY 50%', 540, yTop - 34, 56, { fill: TXT.fill, line: PAL.olive, outer: C.plum, ow: 0.08, lw: 0.14 });
      const bar = (cx, pct, t0, col, colS, lab) => {
        const g = grow(t, t0, 0.7), h = pct * k * g, sq = squash(t, t0 + 0.7, 0.12);
        if (g > 0) { ctx.save(); ctx.translate(cx, yb); ctx.scale(sq[1], sq[0]); cel(ctx, rrP(-120, -h, 240, h, 18), col, colS, -10, -10, 4.5); ctx.restore(); }
        kText(ctx, lab, cx, yb + 80, 52, { fill: C.plum, line: PAL.paper, outer: null, lw: 0.1, shadow: false });
        return yb - h;
      };
      const jt = w(5, '37') - 0.15, nt = w(6, 'november') - 0.15, st = w(6, '33') - 0.15;
      const topJ = bar(360, 37, w(5, 'party') - 0.15, PAL.slate, PAL.slateS, 'JULY 1932');
      numPop(ctx, '37%', 360, topJ - 40, 130, t, jt, { line: PAL.slate });
      label(ctx, 'PEAK', 360, topJ + 90, 52, t, jt + 0.2, PAL.paper);
      // November: grows to 37 then slips to 33
      const ng = grow(t, nt, 0.5), slip = grow(t, w(6, 'slipped') - 0.1, 0.6), pctN = 37 - 4 * slip;
      if (ng > 0) { const h = pctN * k * ng; cel(ctx, rrP(720 - 120, yb - h, 240, h, 18), '#7a8296', '#5f667a', -10, -10, 4.5); }
      kText(ctx, 'NOV 1932', 720, yb + 80, 52, { fill: C.plum, line: PAL.paper, outer: null, lw: 0.1, shadow: false });
      numPop(ctx, '33%', 720, yb - 33 * k - 40, 130, t, st, { line: PAL.brick });
      if (slip > 0 && slip < 1) speedLines(ctx, 720, yb - pctN * k, t, 10, PAL.brick, 140, 0.4);
      // ballot box + ballots flying to both edges ("extremes")
      const bx = 540, by = 1560;
      cel(ctx, rrP(bx - 150, by - 140, 300, 190, 14), PAL.wood, PAL.woodS, -8, -8, 4.5);
      cel(ctx, rrP(bx - 80, by - 150, 160, 18, 8), C.plum, C.dark, 0, 0, 3);
      const vt = w(4, 'voters') - 0.15, ex = w(4, 'extremes') - 0.2;
      for (let i = 0; i < 8; i++) {
        const t0 = vt + i * 0.18, u = H.clamp((t - t0) / 0.9); if (u <= 0 || u >= 1 || t > P_[5].s + 0.3) continue;
        const side = i % 2 ? 1 : -1, px = bx + side * u * 520, py = by - 160 - Math.sin(u * Math.PI) * 360;
        ctx.save(); ctx.translate(px, py); ctx.rotate(u * 5 * side); ctx.scale(1.7, 1.7); cel(ctx, rrP(-40, -28, 80, 56, 6), PAL.paper, PAL.paperS, -3, -3, 3.5); ctx.restore();
      }
      label(ctx, '◀ EXTREMES ▶', 540, 1250 - 600, 58, t, ex, '#e8c9b8', P_[5].s + 0.2);
      vign(ctx, 0.3);
    } },

    // 3 DEAL: lamp-lit back room, old President Hindenburg, two insiders, the chancellor paper
    { s: P_[7].s, draw(ctx, t) {
      const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, '#3b3038'); g.addColorStop(1, '#5a4538'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
      // wall panels
      for (let i = 0; i < 4; i++) ol(ctx, rrP(60 + i * 250, 300, 210, 700, 10), 4, 'rgba(20,15,20,0.5)');
      // lamp cone
      const lg = ctx.createRadialGradient(540, 600, 40, 540, 1100, 800); lg.addColorStop(0, 'rgba(255,220,150,0.45)'); lg.addColorStop(1, 'rgba(255,220,150,0)');
      ctx.fillStyle = lg; ctx.fillRect(0, 0, W, HH);
      ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(540, 0); ctx.lineTo(540, 520); ctx.stroke(); ctx.restore();
      cel(ctx, roundPoly([[440, 600], [490, 510], [590, 510], [640, 600]], 12), '#5e7a5a', '#476044', -6, -6, 4.5);
      const swy = Math.sin(t * 1.4) * 6;
      cel(ctx, ellP(540 + swy, 604, 100, 16), PAL.lit, PAL.litS, -2, -2, 4);
      // characters
      const dl = w(7, 'deal') - 0.15, hb = w(8, 'hindenburg') - 0.15;
      person(ctx, 540, 1500, 0.95, { coat: '#4d5a6b', coatS: '#3b4655', hs: 'crew', hair: '#c9c6c0', er: 16, iris: '#7a8aa0', stache: 'walrus', brows: 'stern', buttons: true, look: [0, 0.3], shirt: '#d8d0c0' });
      if (t > hb) label(ctx, 'PRESIDENT HINDENBURG', 540, 450, 52, t, hb, PAL.paper, P_[9].s + 0.2);
      const p1 = pop(t, P_[7].s + 0.05), p2 = pop(t, dl - 0.25);
      if (p1.s > 0) { ctx.save(); ctx.translate(200, 1560); ctx.scale(p1.sx, p1.sy); person(ctx, 0, 0, 0.9, { coat: '#3e3a44', coatS: '#2e2b33', hs: 'slick', hair: '#3b3434', tie: '#7a3b3b', eyes: 'happy', brows: 'smug', mouth: 'smile', arms: t > dl ? 'point' : 'down', flip: 1 }); ctx.restore(); }
      if (p2.s > 0) { ctx.save(); ctx.translate(880, 1560); ctx.scale(p2.sx, p2.sy); person(ctx, 0, 0, 0.9, { coat: '#4a4038', coatS: '#382f29', hs: 'slick', hair: '#5a4a3a', tie: '#3b5a7a', eyes: 'normal', brows: 'smug', mouth: 'smile', arms: 'fold', flip: -1, iris: '#8a7b6b' }); ctx.restore(); }
      label(ctx, 'INSIDERS', 200, 880, 52, t, w(7, 'insiders') - 0.15, '#e8c9b8', hb);
      // desk
      cel(ctx, rrP(120, 1400, 840, 120, 14), PAL.wood, PAL.woodS, -8, -8, 4.5);
      cel(ctx, rrP(160, 1520, 760, 200, 10), PAL.woodS, '#523625', -6, -6, 4.5);
      // chancellor paper slides onto the desk + stamp
      const ch = w(8, 'chancellor') - 0.2;
      if (t > ch - 0.4) {
        const u = H.ease.out(H.clamp((t - ch + 0.4) / 0.45));
        paperDoc(ctx, 540, H.lerp(2300, 1080, u), 0.82, -0.04, 'CHANCELLOR');
        stamp(ctx, '30 JAN 1933', 560, 1200, 60, t, ch + 0.25, PAL.brick, -0.14);
      }
      // the plan
      const ct = w(9, 'control') - 0.2;
      if (t > ct) { big(ctx, 'THE PLAN:', 540, 250, 92, t, ct - 0.2); big(ctx, 'CONTROL HIM', 540, 370, 110, t, ct, { fill: '#ffe2a6' }); }
      vign(ctx, 0.5);
    } },

    // 4 CORNER: chessboard, the dark king pushed into a corner, 2 MONTHS calendar
    { s: P_[10].s, draw(ctx, t) {
      const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, '#4b4a5e'); g.addColorStop(1, '#6d6070'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
      const n = 5, cs = 150, bx = 540 - n * cs / 2, by = 820, push = 1 + 0.04 * H.clamp((t - P_[10].s) / 3);
      ctx.save(); ctx.translate(540, 1200); ctx.scale(push, push); ctx.translate(-540, -1200);
      cel(ctx, rrP(bx - 30, by - 30, n * cs + 60, n * cs + 60, 20), PAL.wood, PAL.woodS, -8, -8, 4.5);
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { ctx.fillStyle = (i + j) % 2 ? '#c9b48e' : '#efe2c4'; ctx.fillRect(bx + i * cs, by + j * cs, cs, cs); }
      ol(ctx, rrP(bx, by, n * cs, n * cs, 4), 4);
      // king slides from the centre square into the corner on "corner"
      const cr = w(10, 'corner') - 0.6, u = H.ease.inOut(H.clamp((t - cr) / 0.7));
      const kx = H.lerp(bx + 2.5 * cs, bx + 0.5 * cs, u), ky = H.lerp(by + 2.5 * cs, by + 0.5 * cs, u);
      // insiders' pieces (two light pawns) close in
      const pawn = (x, y) => { cel(ctx, ellP(x, y - 20, 44, 16), '#f2ead8', '#cfc4ad', -3, -3, 4); cel(ctx, roundPoly([[x - 34, y - 24], [x - 14, y - 100], [x + 14, y - 100], [x + 34, y - 24]], 10), '#f2ead8', '#cfc4ad', -4, -4, 4); cel(ctx, ellP(x, y - 118, 30, 30), '#f2ead8', '#cfc4ad', -4, -4, 4); };
      pawn(H.lerp(bx + 3.5 * cs, bx + 1.5 * cs, u), by + 0.5 * cs + 40); pawn(bx + 0.5 * cs, H.lerp(by + 3.5 * cs, by + 1.5 * cs, u) + 40);
      const kp = (x, y) => { cel(ctx, ellP(x, y + 20, 56, 18), '#3a3c4a', '#2a2b36', -3, -3, 4.5); cel(ctx, roundPoly([[x - 44, y + 14], [x - 22, y - 120], [x + 22, y - 120], [x + 44, y + 14]], 12), '#3a3c4a', '#2a2b36', -6, -6, 4.5); cel(ctx, rrP(x - 8, y - 190, 16, 70, 6), '#3a3c4a', '#2a2b36', -2, -2, 4); cel(ctx, rrP(x - 30, y - 168, 60, 16, 6), '#3a3c4a', '#2a2b36', -2, -2, 4); };
      kp(kx, ky + 40);
      if (u > 0.95 && t < cr + 1.2) impactLines(ctx, kx, ky, 90, t, cr + 0.7, 8, '#fff4dc');
      ctx.restore();
      big(ctx, 'INTO A', 540, 330, 100, t, w(10, 'squeezed') - 0.15);
      big(ctx, 'CORNER?', 540, 460, 130, t, w(10, 'corner') - 0.15, { fill: '#ffe2a6' });
      // calendar 2 MONTHS
      const tw = w(10, 'two') - 0.15, cp = pop(t, tw);
      if (cp.s > 0) {
        ctx.save(); ctx.translate(800, 1640 - 120); ctx.rotate(0.06); ctx.scale(cp.sx, cp.sy);
        cel(ctx, rrP(-150, -130, 300, 260, 18), PAL.paper, PAL.paperS, -6, -6, 4.5);
        cel(ctx, rrP(-150, -130, 300, 70, 18), PAL.brick, PAL.brickS, -3, -3, 4.5);
        ctx.fillStyle = C.plum; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = `700 100px ${FONT}`; ctx.fillText('2', 0, 10); ctx.font = `700 46px ${FONT}`; ctx.fillText('MONTHS', 0, 92);
        ctx.restore();
      }
      vign(ctx, 0.45);
    } },

    // 5 FIRE: the Reichstag at night, stylised flames from the dome; emergency decree crosses out rights
    { s: P_[11].s, draw(ctx, t) {
      sky(ctx, t, ['#1f2338', '#2f3450', '#5a4a5a'], 41, { stars: true, cloud: '#8a8aa0', cloudA: 0.18, cloudMax: 600 });
      const bu = w(11, 'burned') - 0.2, dc = w(12, 'decree') - 0.15;
      const zoom = 1 + 0.05 * H.clamp((t - P_[11].s) / 3);
      ctx.save(); ctx.translate(540, 1300); ctx.scale(zoom, zoom); ctx.translate(-540, -1300);
      ground(ctx, 1390, '#353748', '#2a2b3a');
      reichstag(ctx, 540, 1400, 1.0, { t, lit: 0.35, domeCol: '#6f7890', domeS: '#59627a' });
      const fk = grow(t, bu, 0.5);
      if (fk > 0) { smoke(ctx, 540, 650, t); flames(ctx, 540, 770, 0.72, t, fk); }
      ctx.restore();
      label(ctx, '27 FEB 1933', 540, 330, 64, t, w(11, 'four') - 0.15, PAL.paper);
      big(ctx, 'REICHSTAG FIRE', 540, 470, 100, t, w(11, 'reichstag') - 0.15);
      // the decree slides up over the lower half
      if (t > dc - 0.3) {
        const u = H.ease.out(H.clamp((t - dc + 0.3) / 0.45)), y = H.lerp(2400, 1250, u);
        ctx.save(); ctx.translate(540, y); ctx.rotate(0.03);
        cel(ctx, rrP(-330, -330, 660, 640, 18), PAL.paper, PAL.paperS, -8, -8, 4.5);
        ctx.fillStyle = C.plum; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = `700 54px ${FONT}`; ctx.fillText('EMERGENCY', 0, -250); ctx.fillText('DECREE', 0, -186);
        const items = ['FREE PRESS', 'FREE SPEECH', 'ASSEMBLY'], rt = w(12, 'rights') - 0.25;
        ctx.font = `700 58px ${FONT}`;
        items.forEach((s, i) => { ctx.fillStyle = C.plum; ctx.fillText(s, 0, -70 + i * 100); });
        items.forEach((s, i) => crossOut(ctx, -230, -70 + i * 100, 230, grow(t, rt + i * 0.15, 0.25)));
        ctx.restore();
        stamp(ctx, 'SUSPENDED', 560, y + 250, 78, t, w(12, 'suspended') - 0.15, PAL.brick, -0.12);
      }
      vign(ctx, 0.5);
    } },

    // 6 ENABLING ACT: parliament half circle, 444 vs 94, seats go grey
    { s: P_[13].s, draw(ctx, t) {
      const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, '#d7cbb4'); g.addColorStop(1, '#b4a283'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
      const ea = w(13, 'enabling') - 0.15, wp = w(13, 'without') - 0.15, cx = 540, cy = 1380;
      const grey = grow(t, wp, 0.8);
      // seats: 6 rows of a half circle
      const r = H.rng(9);
      for (let row = 0; row < 6; row++) {
        const R = 200 + row * 62, nS = 14 + row * 4;
        for (let i = 0; i < nS; i++) {
          const a = Math.PI + (i + 0.5) / nS * Math.PI, x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R * 0.9;
          const yes = (i / nS) > 0.17; // about 444 of 538 voted yes
          const base = yes ? '#7a8296' : PAL.brick;
          const col = H.rgba(H.mix(base, '#b7b2a8', grey * 0.85));
          cel(ctx, ellP(x, y, 20, 20), col, H.rgba(H.mix(col, C.plum, 0.25)), -3, -3, 3);
        }
      }
      cel(ctx, rrP(cx - 110, cy - 30, 220, 110, 14), PAL.wood, PAL.woodS, -6, -6, 4.5);
      label(ctx, '23 MARCH 1933', 540, 1610, 54, t, w(13, 'march') - 0.15, PAL.paper);
      // book
      const bp = pop(t, ea);
      if (bp.s > 0) {
        ctx.save(); ctx.translate(540, 700); ctx.scale(bp.sx, bp.sy); ctx.rotate(-0.04);
        cel(ctx, rrP(-260, -170, 520, 340, 18), PAL.brick, PAL.brickS, -8, -8, 4.5);
        cel(ctx, rrP(-260, -170, 50, 340, 12), PAL.brickS, '#5f2c22', -2, -2, 4);
        ctx.fillStyle = TXT.fill; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = `700 74px ${FONT}`; ctx.fillText('ENABLING', 25, -40); ctx.fillText('ACT', 25, 50);
        ctx.restore();
      }
      numPop(ctx, '444 YES', 290, 1500, 84, t, w(13, 'act') - 0.05, { line: PAL.slate });
      numPop(ctx, '94 NO', 790, 1500, 84, t, w(13, 'let') - 0.05, { line: PAL.brick });
      if (t > wp) { big(ctx, 'NO PARLIAMENT', 540, 300, 100, t, wp); big(ctx, 'NEEDED', 540, 420, 100, t, wp + 0.25, { fill: '#ffe2a6' }); }
      else big(ctx, 'LAWS BY ONE MAN', 540, 360, 88, t, w(13, 'make') - 0.15);
      vign(ctx, 0.35);
    } },

    // 7 END: a door ajar, light spilling, the question
    { s: P_[14].s, draw(ctx, t) {
      const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, '#2c2f44'); g.addColorStop(1, '#4a4152'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
      const fx = 540, fy = 1520, dw = 420, dh = 860, open = 0.35 + 0.08 * Math.sin(t * 1.3) + 0.25 * grow(t, w(14, 'opened') - 0.15, 0.6);
      // light wedge on floor
      ctx.save(); ctx.fillStyle = 'rgba(242,207,134,0.35)'; ctx.beginPath(); ctx.moveTo(fx - dw / 2, fy); ctx.lineTo(fx + dw / 2, fy); ctx.lineTo(fx + dw * 1.1, HH); ctx.lineTo(fx - dw * 1.1, HH); ctx.closePath(); ctx.fill(); ctx.restore();
      cel(ctx, rrP(fx - dw / 2 - 30, fy - dh - 30, dw + 60, dh + 30, 10), PAL.woodS, '#523625', -4, -4, 4.5);
      cel(ctx, rrP(fx - dw / 2, fy - dh, dw, dh, 6), PAL.lit, PAL.litS, -6, -6, 4.5);
      // door slab hinged left, swung open
      const sw = dw * (1 - open);
      const slab = new Path2D(); slab.moveTo(fx - dw / 2, fy - dh); slab.lineTo(fx - dw / 2 + sw, fy - dh + 40 * open); slab.lineTo(fx - dw / 2 + sw, fy - 40 * open); slab.lineTo(fx - dw / 2, fy); slab.closePath();
      cel(ctx, slab, PAL.woodL, PAL.wood, -6, -6, 4.5);
      cel(ctx, ellP(fx - dw / 2 + sw - 30, fy - dh / 2, 14, 18), PAL.gold, PAL.goldS, -2, -2, 4);
      label(ctx, 'THE VOTERS?', 270, 1180, 54, t, w(14, 'who') - 0.15, '#c9d2e4');
      label(ctx, 'THE INSIDERS?', 790, 1340, 54, t, w(14, 'really') - 0.1, '#e8c9b8');
      still(ctx, 'WHO OPENED', 540, 300, 112);
      still(ctx, 'THE DOOR?', 540, 430, 120, { fill: '#ffe2a6' });
      label(ctx, 'COMMENT BELOW', 540, 1580, 56, t, w(14, 'door') - 0.1, PAL.paper);
      vign(ctx, 0.4);
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
  function thumbnail(ctx) { scenes[0].draw(ctx, 0.0); }

  function scoreSound(k) {
    const pop_ = (at, f = 600, g = 0.5, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const hit = (at) => { k.play('thud', at, { f: 110, gain: 0.5 }); pop_(at, 500, 0.5, 0, false); };
    CUTS.forEach((c) => { k.noise(c.t - 0.2, { dur: 0.4, color: 'pink', filter: 'bandpass', f: [[0, 400], [0.4, 1600]], q: 0.9, gain: 0.28, a: 0.07 }); k.play('thud', c.t + 0.12, { f: 100, gain: 0.25 }); });
    // hook
    k.play('whoosh', 0.02, { dur: 0.6, gain: 0.25 }); hit(w(0, 'majority') - 0.15);
    k.play('whoosh', w(1, 'handed') - 0.45, { dur: 0.5, gain: 0.35 }); k.play('impact', w(1, 'handed') + 0.05, { gain: 0.5 });
    // crash
    hit(w(2, '1929') - 0.15); k.play('whoosh', w(2, 'depression') - 0.15, { dur: 1.0, gain: 0.3 }); k.play('error', w(2, 'hit') - 0.1, { f: 'D3', gain: 0.35 });
    for (let i = 0; i < 10; i++) k.play('tick', P_[3].s - 0.2 + i * 0.16, { f: 900, gain: 0.2, minor: true });
    for (let i = 0; i < 14; i++) k.play('tick', w(3, 'six') - 0.15 + i * 0.08, { f: 1800, gain: 0.18, minor: true });
    hit(w(3, 'job') - 0.15);
    // votes
    for (let i = 0; i < 8; i++) k.play('whoosh', w(4, 'voters') - 0.15 + i * 0.18, { dur: 0.25, gain: 0.12, minor: true });
    pop_(w(4, 'extremes') - 0.2, 600, 0.5, 0, false);
    k.play('ding', w(5, '37') - 0.15, { f: 'C5', gain: 0.25 }); hit(w(5, '37') - 0.15);
    k.play('whoosh', w(6, 'slipped') - 0.1, { dur: 0.5, gain: 0.3 }); k.play('error', w(6, '33') - 0.15, { f: 'A2', gain: 0.35 });
    // deal
    pop_(P_[7].s + 0.05, 500, 0.5); pop_(w(7, 'deal') - 0.25, 550, 0.5);
    pop_(w(8, 'hindenburg') - 0.15, 600, 0.5);
    k.play('whoosh', w(8, 'chancellor') - 0.6, { dur: 0.5, gain: 0.3 }); k.play('stamp', w(8, 'chancellor') + 0.05, { gain: 0.6 });
    hit(w(9, 'control') - 0.2);
    // corner
    k.play('whoosh', w(10, 'corner') - 0.6, { dur: 0.7, gain: 0.3 }); k.play('impact', w(10, 'corner') + 0.1, { gain: 0.55 }); pop_(w(10, 'two') - 0.15, 600, 0.5, 0.3, false);
    // fire
    k.noise(w(11, 'burned') - 0.2, { dur: 2.2, color: 'brown', filter: 'lowpass', f: 900, gain: 0.25, a: 0.3 });
    k.play('impact', w(11, 'burned') - 0.2, { gain: 0.5 });
    k.play('whoosh', w(12, 'decree') - 0.45, { dur: 0.5, gain: 0.3 });
    for (let i = 0; i < 3; i++) k.noise(w(12, 'rights') - 0.25 + i * 0.15, { dur: 0.18, color: 'white', filter: 'highpass', f: 2500, gain: 0.18 });
    k.play('stamp', w(12, 'suspended') - 0.15, { gain: 0.6 });
    // enabling
    hit(w(13, 'enabling') - 0.15); pop_(w(13, 'act') - 0.05, 600, 0.5, -0.4, false); pop_(w(13, 'let') - 0.05, 450, 0.5, 0.4, false);
    k.play('error', w(13, 'without') - 0.1, { f: 'F2', gain: 0.35 });
    // end
    k.play('whoosh', P_[14].s, { dur: 0.6, gain: 0.25 }); pop_(w(14, 'who') - 0.15, 600, 0.5, -0.4); pop_(w(14, 'really') - 0.1, 600, 0.5, 0.4);
    k.play('ding', w(14, 'door') - 0.1, { f: 'G4', gain: 0.3 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
