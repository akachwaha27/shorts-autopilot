// ===== Kawaii Anime (serious muted palette: dusk grey-blue, sand, khaki, lamp amber), vertical: "Operation Mincemeat: the spy who never existed" =====
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
  const P_ = [{"s": 0.25, "e": 4.33, "text": "Britain's best spy of 1943 never said a word.", "words": [["britains", 0.25], ["best", 1.18], ["spy", 1.65], ["of", 2.0], ["1943", 2.23], ["never", 2.7], ["said", 3.28], ["a", 3.75], ["word", 3.87]]}, {"s": 4.79, "e": 7.01, "text": "His papers said Major William Martin,", "words": [["his", 4.79], ["papers", 5.0], ["said", 5.43], ["major", 5.72], ["william", 6.08], ["martin", 6.58]]}, {"s": 7.32, "e": 8.43, "text": "who never existed.", "words": [["who", 7.32], ["never", 7.54], ["existed", 7.91]]}, {"s": 8.81, "e": 11.39, "text": "His pockets held love letters, theatre tickets,", "words": [["his", 8.81], ["pockets", 9.01], ["held", 9.47], ["love", 9.74], ["letters", 10.0], ["theatre", 10.46], ["tickets", 10.93]]}, {"s": 11.67, "e": 13.15, "text": "and an angry tailor's bill.", "words": [["and", 11.67], ["an", 11.88], ["angry", 12.02], ["tailors", 12.38], ["bill", 12.87]]}, {"s": 13.5, "e": 16.49, "text": "A briefcase chained to his wrist held secret letters:", "words": [["a", 13.5], ["briefcase", 13.57], ["chained", 14.18], ["to", 14.65], ["his", 14.79], ["wrist", 14.99], ["held", 15.33], ["secret", 15.61], ["letters", 16.01]]}, {"s": 16.91, "e": 19.31, "text": "the Allies would hit Greece and Sardinia.", "words": [["the", 16.91], ["allies", 17.12], ["would", 17.55], ["hit", 17.9], ["greece", 18.11], ["and", 18.54], ["sardinia", 18.75]]}, {"s": 19.77, "e": 23.42, "text": "The body was really Glyndwr Michael, a homeless Welshman.", "words": [["the", 19.77], ["body", 19.99], ["was", 20.29], ["really", 20.51], ["glyndwr", 20.96], ["michael", 21.63], ["a", 22.15], ["homeless", 22.22], ["welshman", 22.82]]}, {"s": 23.8, "e": 26.57, "text": "A submarine left him floating off Spain.", "words": [["a", 23.8], ["submarine", 23.89], ["left", 24.64], ["him", 24.98], ["floating", 25.23], ["off", 25.9], ["spain", 26.15]]}, {"s": 26.98, "e": 30.6, "text": "Spanish officers let German agents copy everything.", "words": [["spanish", 26.98], ["officers", 27.56], ["let", 28.21], ["german", 28.46], ["agents", 28.95], ["copy", 29.45], ["everything", 29.78]]}, {"s": 31.06, "e": 33.59, "text": "Hitler bought it and sent tanks to Greece.", "words": [["hitler", 31.06], ["bought", 31.5], ["it", 31.95], ["and", 32.1], ["sent", 32.32], ["tanks", 32.62], ["to", 32.99], ["greece", 33.14]]}, {"s": 34.02, "e": 35.95, "text": "The real target was Sicily.", "words": [["the", 34.02], ["real", 34.28], ["target", 34.63], ["was", 35.16], ["sicily", 35.43]]}, {"s": 36.41, "e": 40.52, "text": "The message to Churchill: Mincemeat swallowed rod, line and sinker.", "words": [["the", 36.41], ["message", 36.63], ["to", 37.15], ["churchill", 37.3], ["mincemeat", 37.98], ["swallowed", 38.65], ["rod", 39.32], ["line", 39.55], ["and", 39.85], ["sinker", 40.07]]}, {"s": 40.88, "e": 43.03, "text": "So would a tailor's bill have fooled you?", "words": [["so", 40.88], ["would", 41.02], ["a", 41.35], ["tailors", 41.42], ["bill", 41.89], ["have", 42.16], ["fooled", 42.43], ["you", 42.83]]}];
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
  function ground(ctx, y, col, colS) { ctx.fillStyle = col; ctx.fillRect(0, y, W, HH - y); ctx.fillStyle = colS; ctx.fillRect(0, y, W, 14); }


  // ---------- serious palette: dusk grey-blue, sand, khaki, lamp amber, earth (no neon) ----------
  const PAL = {
    coat: '#8a7d5c', coatS: '#6e6347', hairD: '#3a2f2a', skin: '#f6dcc6', skinS: '#dfb79c',
    paper: '#efe6cf', paperS: '#d3c6a6', brick: '#a5523f', brickS: '#7e3c2f',
    wood: '#7a553d', woodS: '#5c3f2d', woodL: '#9b7055', gold: '#d8b25a', goldS: '#ad8a3c',
    pine: '#4f5f4a', pineS: '#3c4a38', pineL: '#6b7d62', steel: '#5f7186', steelS: '#4a596b', steelL: '#8698ad',
    leather: '#7a5638', leatherS: '#5a3e28', metal: '#b9bdc4', metalS: '#8e939c', lamp: '#f2cf86',
    grey: '#7d8079', greyS: '#63665f', ink: '#2e3350', sea: '#5d7891', seaS: '#4a627a', seaD: '#34465a',
    sand: '#d9c39a', sandS: '#bfa67b', land: '#cdbb92', landS: '#b29f76', water: '#9db4c4',
  };
  const TXT = { fill: '#fff4dc', line: '#6a4a36' };
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.03, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.04, fill: TXT.fill, line: TXT.line, ...o });
  const still = (ctx, s, x, y, size, o = {}) => kText(ctx, s, x, y, size, { outer: C.plum, ow: 0.1, lw: 0.17, fill: TXT.fill, line: TXT.line, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = PAL.paper) => { const p = pop(t, t0); if (p.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  const numPop = (ctx, str, x, y, size, t, t0, o = {}) => { const n = pop(t, t0, 1.2); if (n.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(n.sx, n.sy); kText(ctx, str, 0, 0, size, { fill: o.fill || TXT.fill, line: o.line || TXT.line, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); };
  const grow = (t, t0, d) => H.ease.out(H.clamp((t - t0) / d));
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;

  // ---------- timing (from phrases.json) ----------
  const BEATS = [
    { id: 'hook', s: 0, e: P_[0].e, on: 'FULL FRAME at 0 s: Major William Martin (anime Royal Marines officer, briefcase chained to his wrist) standing large on a dusk beach, HE NEVER EXISTED; 1943 pops on "1943", zipped-mouth "..." bubble on "word"' },
    { id: 'idcard', s: P_[1].s, e: P_[2].e, on: 'ID card MAJOR W. MARTIN / ROYAL MARINES with his photo; on "existed" the photo empties to a dashed outline and a FAKE stamp lands' },
    { id: 'pockets', s: P_[3].s, e: P_[4].e, on: 'lamp-lit desk from above: love letter with heart seal on "love", two theatre tickets on "theatre", tailor\'s bill with OVERDUE stamp + anger mark on "angry"' },
    { id: 'briefcase', s: P_[5].s, e: P_[6].e, on: 'chained briefcase pops open, TOP SECRET letter; map of the Mediterranean with fake arrows to GREECE and SARDINIA' },
    { id: 'glyndwr', s: P_[7].s, e: P_[7].e, on: 'quiet rainy London street at night, a man in a flat cap under a lamp post; GLYNDWR MICHAEL and FROM WALES tags (serious, muted)' },
    { id: 'sub', s: P_[8].s, e: P_[8].e, on: 'moonlit sea: submarine HMS SERAPH surfaced, a tiny life-vest dot drifting toward the coast, SPAIN / HUELVA tag' },
    { id: 'copy', s: P_[9].s, e: P_[9].e, on: 'office: Spanish officer and a German agent photograph the letters, camera flash, COPY sheets fly out' },
    { id: 'map', s: P_[10].s, e: P_[11].e, on: 'map table, Hitler only as a dark figure from behind; tanks slide from France to Greece on "tanks"; then SICILY ring + ship arrows, REAL TARGET' },
    { id: 'telegram', s: P_[12].s, e: P_[12].e, on: 'telegram TO: CHURCHILL, MINCEMEAT / SWALLOWED / ROD, LINE AND SINKER lines land on their words, fishing hook swings' },
    { id: 'end', s: P_[13].s, e: P_[13].e, on: 'back to Major Martin on the beach (loop to the hook) holding the tailor\'s bill, WOULD IT FOOL YOU?, COMMENT' },
  ];

  // ---------- props ----------
  function briefcase(ctx, x, y, s, open = 0) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-40, -96, 80, 40, 16), PAL.leatherS, '#46301f', -2, -2, 4.5); // handle
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.fill(rrP(-24, -84, 48, 22, 8)); ctx.restore();
    if (open > 0) { // lid swings up showing the papers
      cel(ctx, rrP(-118, -72, 236, 40, 10), PAL.paper, PAL.paperS, -2, -2, 3.5);
      ctx.save(); ctx.translate(0, -66); ctx.scale(1, 1 - open * 1.6); cel(ctx, rrP(-130, -10, 260, 40, 14), PAL.leather, PAL.leatherS, -4, -4, 4.5); ctx.restore();
    }
    cel(ctx, rrP(-130, -70, 260, 170, 22), PAL.leather, PAL.leatherS, -10, -8, 4.5);
    ctx.save(); ctx.strokeStyle = 'rgba(40,26,16,0.45)'; ctx.lineWidth = 5; ctx.setLineDash([12, 10]); ctx.stroke(rrP(-114, -54, 228, 138, 14)); ctx.restore();
    [-70, 70].forEach((cx) => cel(ctx, rrP(cx - 18, -76, 36, 30, 6), PAL.gold, PAL.goldS, -2, -2, 3.5));
    shine(ctx, -84, -40, 30, 10, -0.2, 0.35);
    ctx.restore();
  }
  function chain(ctx, x0, y0, x1, y1, t, n = 9, k = 1) {
    for (let i = 0; i <= n; i++) {
      const u = i / n, sag = Math.sin(u * Math.PI) * 40;
      const x = H.lerp(x0, x1, u), y = H.lerp(y0, y1, u) + sag;
      ctx.save(); ctx.translate(x, y); ctx.rotate(Math.atan2(y1 - y0, x1 - x0) + (i % 2 ? Math.PI / 2 : 0));
      ctx.lineWidth = 7 * k; ctx.strokeStyle = C.plum; ctx.stroke(ellP(0, 0, 13 * k, 8 * k)); ctx.lineWidth = 4 * k; ctx.strokeStyle = PAL.metal; ctx.stroke(ellP(0, 0, 13 * k, 8 * k));
      ctx.restore();
    }
  }
  // Major William Martin (the invented officer): khaki battledress, peaked cap with a badge, briefcase chained to his right wrist
  function major(ctx, x, y, s, t, o = {}) {
    const sway = Math.sin(t * 1.6) * 0.02;
    ctx.save(); ctx.translate(x, y); ctx.rotate(sway); ctx.translate(-x, -y);
    person(ctx, x, y, s, { hs: 'cap', capCol: '#6e6347', coat: PAL.coat, coatS: PAL.coatS, pants: '#6e6347', buttons: true, tie: '#5a4a36', shirt: '#e6dcc4', brows: o.brows || 'stern', iris: '#5d7690', mouth: o.mouth || 'flat', eyes: o.eyes || 'normal', look: o.look || [0, 0], hair: '#3a2f2a' });
    // cap badge + peak
    const hx = x, hy = y - 500 * s;
    cel(ctx, ellP(hx + 30 * s, hy - 32 * s, 112 * s, 20 * s), '#3f3a2e', '#2e2a21', -2, -2, 4);
    cel(ctx, starP(hx, hy - 66 * s, 20 * s, -Math.PI / 2, 0.55, 8), PAL.gold, PAL.goldS, -2, -2, 3.5);
    // shoulder titles
    [-1, 1].forEach((sd) => cel(ctx, rrP(x + sd * 70 * s - 26 * s, y - 392 * s, 52 * s, 16 * s, 6 * s), '#a5523f', '#7e3c2f', -1, -1, 3));
    ctx.restore();
    if (o.briefcase !== false) {
      const hxw = x + 100 * s, hyw = y - 222 * s, bx = x + 175 * s, by = y - 95 * s + Math.sin(t * 1.6) * 6;
      chain(ctx, hxw, hyw, bx, by - 96 * s * 0.8, t, 7);
      briefcase(ctx, bx, by, s * 0.8);
      cel(ctx, rrP(hxw - 22 * s, hyw - 10 * s, 44 * s, 20 * s, 8 * s), PAL.metal, PAL.metalS, -2, -2, 3.5); // cuff
    }
  }
  function beach(ctx, t, seed) {
    sky(ctx, t, ['#56657e', '#8d91a3', '#d8b996', '#e7c9a0'], seed, { cloud: '#f4e3cc', cloudA: 0.28, cloudMax: 700 });
    // low sun behind clouds
    ctx.save(); ctx.globalAlpha = 0.85; cel(ctx, ellP(820, 980, 120, 120), '#f3d6a4', '#e8c08a', -6, -6, 0); ctx.restore();
    // sea bands
    ctx.fillStyle = PAL.sea; ctx.fillRect(0, 1020, W, 360);
    for (let i = 0; i < 6; i++) { const yy = 1050 + i * 55, off = (t * (18 + i * 6) + i * 140) % 260; ctx.save(); ctx.strokeStyle = 'rgba(230,236,240,0.45)'; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath(); for (let x = -260 + off; x < W + 260; x += 260) { ctx.moveTo(x, yy); ctx.quadraticCurveTo(x + 40, yy - 12, x + 80, yy); } ctx.stroke(); ctx.restore(); }
    ctx.fillStyle = PAL.seaS; ctx.fillRect(0, 1020, W, 10);
    // sand with a foam edge
    const foam = new Path2D(); foam.moveTo(0, 1390); for (let x = 0; x <= W; x += 60) foam.lineTo(x, 1380 + Math.sin(x * 0.02 + t * 1.5) * 12); foam.lineTo(W, HH); foam.lineTo(0, HH); foam.closePath();
    ctx.fillStyle = '#eef1ef'; ctx.fill(foam); ctx.save(); ctx.translate(0, 18); ctx.fillStyle = PAL.sand; ctx.fill(foam); ctx.restore();
  }
  function idCard(ctx, cx, cy, s, t, gone) {
    ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s);
    cel(ctx, rrP(-420, -280, 840, 560, 34), PAL.paper, PAL.paperS, -12, -10, 5);
    cel(ctx, rrP(-420, -280, 840, 96, { upperLeft: 34, upperRight: 34, lowerLeft: 0, lowerRight: 0 }), '#a5523f', '#7e3c2f', -4, -4, 5);
    ctx.fillStyle = '#fff4dc'; ctx.font = `700 50px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('NAVAL IDENTITY CARD', 0, -232);
    // photo
    const ph = rrP(-380, -150, 300, 360, 18);
    cel(ctx, ph, '#c9cfd6', '#b0b7c0', -4, -4, 4.5);
    ctx.save(); ctx.clip(ph);
    if (gone < 1) { ctx.globalAlpha = 1 - gone; person(ctx, -230, 560, 0.95, { hs: 'cap', capCol: '#6e6347', coat: PAL.coat, coatS: PAL.coatS, buttons: true, tie: '#5a4a36', brows: 'stern', iris: '#5d7690', hair: '#3a2f2a' }); }
    ctx.restore();
    if (gone > 0) { ctx.save(); ctx.globalAlpha = gone; ctx.setLineDash([16, 14]); ctx.lineWidth = 7; ctx.strokeStyle = C.plum; ctx.stroke(ellP(-230, 10, 90, 88)); ctx.beginPath(); ctx.moveTo(-350, 210); ctx.quadraticCurveTo(-230, 90, -110, 210); ctx.stroke(); ctx.restore(); }
    // fields
    ctx.textAlign = 'left'; ctx.fillStyle = PAL.ink;
    ctx.font = `600 40px ${FONT}`; ctx.fillStyle = '#7a6e5c'; ctx.fillText('NAME', -40, -120); ctx.fillText('RANK', -40, 10); ctx.fillText('UNIT', -40, 130);
    ctx.font = `700 54px ${FONT}`; ctx.fillStyle = PAL.ink; ctx.fillText('W. MARTIN', -40, -60); ctx.fillText('MAJOR', -40, 70); ctx.fillText('ROYAL MARINES', -40, 190);
    ctx.restore();
  }
  function envelope(ctx, x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    cel(ctx, rrP(-170, -110, 340, 220, 14), '#f4ead6', '#d9cbb0', -6, -6, 4.5);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 4.5; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(-170, -110); ctx.lineTo(0, 20); ctx.lineTo(170, -110); ctx.stroke(); ctx.restore();
    heart(ctx, 0, 20, 34, '#c4566a');
    ctx.restore();
  }
  function ticket(ctx, x, y, s, rot, txt) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const p = new Path2D(); p.roundRect(-150, -60, 300, 120, 12);
    cel(ctx, p, '#e8c98f', '#cfaa6c', -4, -4, 4.5);
    ctx.save(); ctx.setLineDash([8, 8]); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(80, -56); ctx.lineTo(80, 56); ctx.stroke(); ctx.restore();
    ctx.fillStyle = PAL.ink; ctx.font = `700 34px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(txt, -36, -12); ctx.font = `600 26px ${FONT}`; ctx.fillText('STALLS', -36, 26);
    starP && cel(ctx, starP(118, 0, 22, -Math.PI / 2, 0.5), '#a5523f', '#7e3c2f', -1, -1, 3);
    ctx.restore();
  }
  function bill(ctx, x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    cel(ctx, rrP(-160, -210, 320, 420, 10), '#fbf6ea', '#dcd3bf', -6, -6, 4.5);
    ctx.fillStyle = PAL.ink; ctx.font = `700 42px ${FONT}`; ctx.textAlign = 'center'; ctx.fillText('TAILOR', 0, -140);
    ctx.fillStyle = '#b8ad98'; for (let i = 0; i < 5; i++) ctx.fillRect(-120, -90 + i * 46, i === 4 ? 140 : 240, 14);
    ctx.fillStyle = PAL.ink; ctx.font = `700 46px ${FONT}`; ctx.fillText('£ 53', 60, 175);
    ctx.restore();
  }
  // simple map of the Mediterranean (lon/lat -> px)
  const mx = (lon) => 60 + (lon + 10) * 27, my = (lat) => 1500 - (lat - 33) * 55;
  const LAND = [
    [[-9.5, 43.5], [-1.5, 43.5], [3.2, 42], [0, 39.5], [-0.7, 37.6], [-5.5, 36], [-7.4, 37.2], [-9, 37], [-8.8, 42]],
    [[-1.5, 43.5], [3.2, 42], [4, 43.5], [7.5, 43.8], [9, 44.4], [9, 46.8], [-1.5, 46.8]],
    [[7.5, 43.8], [8.8, 44.4], [10.2, 43.9], [11, 42.4], [12.5, 41.5], [14.2, 40.8], [15.7, 40], [15.7, 38.2], [16.5, 38.8], [17, 39.5], [16.5, 40.5], [18.5, 40.2], [17, 41], [16, 41.9], [14, 42.5], [12.4, 44.3], [13.7, 45.6], [12.4, 46.8], [9, 46.8]],
    [[13.7, 45.6], [15, 44.5], [17, 43], [19.4, 41.8], [20.2, 39.7], [21, 38.3], [21.7, 36.8], [22.5, 36.5], [23, 37.5], [24, 38.2], [22.9, 39.3], [24, 40.7], [26, 40.8], [28, 41], [28, 46.8], [12.4, 46.8]],
    [[-10, 33.3], [-6, 35.8], [-2, 35.1], [3, 36.8], [9.8, 37.3], [11.1, 37], [10.2, 34.5], [11, 33.3], [28, 31.5], [28, 30], [-10, 30]],
  ];
  const ISLES = {
    sicily: [[12.4, 38.1], [15.6, 38.3], [15.1, 36.7], [14.3, 37], [12.6, 37.6]],
    sardinia: [[8.2, 41], [9.6, 41.2], [9.7, 39.2], [9, 39], [8.4, 39], [8.4, 40]],
    corsica: [[8.6, 43], [9.5, 42.9], [9.4, 41.4], [8.7, 41.6]],
    crete: [[23.5, 35.6], [26.3, 35.4], [26, 35], [23.6, 35.2]],
  };
  const polyP = (pts) => roundPoly(pts.map(([lo, la]) => [mx(lo), my(la)]), 10);
  function mapBase(ctx, t, o = {}) {
    ctx.fillStyle = PAL.water; ctx.fillRect(0, 0, W, HH);
    // soft wave dashes
    const r = H.rng(44); ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 4; ctx.lineCap = 'round';
    for (let i = 0; i < 26; i++) { const x = r.range(0, W), y = r.range(700, 1550), d = Math.sin(t * 1.5 + i) * 6; ctx.beginPath(); ctx.moveTo(x + d, y); ctx.quadraticCurveTo(x + 18 + d, y - 8, x + 36 + d, y); ctx.stroke(); }
    ctx.restore();
    LAND.forEach((pts) => cel(ctx, polyP(pts), PAL.land, PAL.landS, -6, -6, 4.5));
    Object.entries(ISLES).forEach(([k, pts]) => cel(ctx, polyP(pts), o.hi === k ? '#f0d38c' : PAL.land, o.hi === k ? PAL.goldS : PAL.landS, -4, -4, 4.5));
    // paper frame
    ctx.save(); ctx.strokeStyle = PAL.woodL; ctx.lineWidth = 26; ctx.strokeRect(13, 640, W - 26, 990); ctx.restore();
  }
  function dashArrow(ctx, p0, p1, bend, prog, col) {
    const c1 = [H.lerp(p0[0], p1[0], 0.33) + bend[0], H.lerp(p0[1], p1[1], 0.33) + bend[1]], c2 = [H.lerp(p0[0], p1[0], 0.66) + bend[0], H.lerp(p0[1], p1[1], 0.66) + bend[1]];
    dotted(ctx, bez(p0, c1, c2, p1), prog, col, 7, 24, 1.1);
    return bez(p0, c1, c2, p1);
  }
  function deskTop(ctx, t) {
    ctx.fillStyle = PAL.wood; ctx.fillRect(0, 0, W, HH);
    ctx.save(); ctx.strokeStyle = 'rgba(40,26,16,0.25)'; ctx.lineWidth = 6; for (let y = 80; y < HH; y += 150) { ctx.beginPath(); ctx.moveTo(0, y); ctx.bezierCurveTo(300, y + 20, 700, y - 20, W, y + 10); ctx.stroke(); } ctx.restore();
    lampGlow(ctx, 540, 1000, 900, 0.4);
  }
  function lampGlow(ctx, x, y, r, a = 0.35) { const g = ctx.createRadialGradient(x, y, 10, x, y, r); g.addColorStop(0, `rgba(242,207,134,${a})`); g.addColorStop(1, 'rgba(242,207,134,0)'); ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2); }
  function seatedBack(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const coat = new Path2D(); coat.moveTo(-150, 0); coat.quadraticCurveTo(-160, -260, -100, -330); coat.quadraticCurveTo(0, -360, 100, -330); coat.quadraticCurveTo(160, -260, 150, 0); coat.closePath();
    cel(ctx, coat, '#4a4d45', '#363931', -16, -8, 4.5);
    ctx.save(); ctx.clip(coat); ctx.strokeStyle = 'rgba(20,20,20,0.35)'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(0, -330); ctx.lineTo(0, 0); ctx.stroke(); ctx.restore();
    cel(ctx, rrP(-30, -380, 60, 60, 14), PAL.skinS, '#c99d80', -3, -3, 4);
    cel(ctx, ellP(-76, -436, 14, 24), PAL.skinS, '#c99d80', -2, -2, 3.5); cel(ctx, ellP(76, -436, 14, 24), PAL.skinS, '#c99d80', -2, -2, 3.5);
    cel(ctx, ellP(0, -440, 74, 80), '#2b2a33', '#1d1c24', -8, -8, 4.5);
    ctx.save(); ctx.clip(ellP(0, -440, 74, 80)); ctx.fillStyle = PAL.skinS; ctx.fillRect(-74, -385, 148, 40); ctx.restore();
    ctx.restore();
  }
  function tank(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-70, -10, 140, 34, 16), '#3a3d44', '#2a2c31', -2, -2, 3.5);
    cel(ctx, roundPoly([[-62, -10], [62, -10], [48, -40], [-48, -40]], 8), '#6f7266', '#585b50', -3, -3, 3.5);
    cel(ctx, rrP(-26, -66, 52, 30, 12), '#6f7266', '#585b50', -2, -2, 3.5);
    cel(ctx, rrP(20, -58, 70, 12, 5), '#6f7266', '#585b50', -1, -1, 3);
    ctx.restore();
  }
  function ship(ctx, x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    cel(ctx, roundPoly([[-60, -14], [60, -14], [40, 14], [-50, 14]], 6), '#5f7186', '#4a596b', -2, -2, 3.5);
    cel(ctx, rrP(-20, -38, 34, 26, 5), '#8698ad', '#5f7186', -1, -1, 3);
    ctx.restore();
  }
  function submarine(ctx, x, y, s, t) {
    ctx.save(); ctx.translate(x, y + Math.sin(t * 1.4) * 6); ctx.scale(s, s);
    cel(ctx, rrP(-330, -40, 660, 90, 45), '#3d4a59', '#2c3744', -10, -6, 4.5);
    cel(ctx, roundPoly([[-70, -40], [60, -40], [40, -150], [-50, -150]], 14), '#3d4a59', '#2c3744', -6, -6, 4.5);
    cel(ctx, rrP(-6, -230, 12, 84, 4), '#6b7787', '#4f5a68', -1, -1, 3);
    ctx.fillStyle = 'rgba(242,207,134,0.9)'; ctx.fill(ellP(-20, -110, 9, 9));
    ctx.restore();
  }
  function fishHook(ctx, x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    ctx.strokeStyle = C.plum; ctx.lineCap = 'round'; ctx.lineWidth = 18; ctx.beginPath(); ctx.moveTo(0, -260); ctx.lineTo(0, 0); ctx.stroke();
    ctx.strokeStyle = '#d8dce2'; ctx.lineWidth = 6; ctx.stroke();
    const hk = new Path2D(); hk.moveTo(0, 0); hk.lineTo(0, 90); hk.arc(-40, 90, 40, 0, Math.PI, false); hk.lineTo(-80, 60);
    ctx.lineWidth = 22; ctx.strokeStyle = C.plum; ctx.stroke(hk); ctx.lineWidth = 12; ctx.strokeStyle = PAL.metal; ctx.stroke(hk);
    cel(ctx, ellP(0, -300, 34, 46), '#c4566a', '#a24356', -3, -3, 4.5); cel(ctx, rrP(-34, -300, 68, 46, { lowerLeft: 34, lowerRight: 34, upperLeft: 0, upperRight: 0 }), '#f4ead6', '#d9cbb0', -2, -2, 4.5);
    ctx.restore();
  }
  function rain(ctx, t, seed, a = 0.4) {
    const r = H.rng(seed); ctx.save(); ctx.strokeStyle = `rgba(210,222,235,${a})`; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = 0; i < 90; i++) { const x = r.range(0, W + 200), sp = r.range(900, 1400), y = (r.range(0, HH) + t * sp) % (HH + 100) - 50, xx = x - ((y + 50) * 0.18); ctx.moveTo(xx, y); ctx.lineTo(xx - 10, y + 46); }
    ctx.stroke(); ctx.restore();
  }
  function lampPost(ctx, x, y, t) {
    cel(ctx, rrP(x - 14, y - 800, 28, 800, 8), '#3a3f48', '#2a2e35', -3, -3, 4.5);
    cel(ctx, roundPoly([[x - 60, y - 800], [x + 60, y - 800], [x + 40, y - 900], [x - 40, y - 900]], 10), '#f2cf86', '#d9b46a', -4, -4, 4.5);
    const g = ctx.createRadialGradient(x, y - 820, 10, x, y - 600, 520); g.addColorStop(0, 'rgba(242,207,134,0.45)'); g.addColorStop(1, 'rgba(242,207,134,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(x - 50, y - 790); ctx.lineTo(x - 420, y); ctx.lineTo(x + 420, y); ctx.lineTo(x + 50, y - 790); ctx.closePath(); ctx.fill();
  }
  function camera(ctx, x, y, s, flash) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-110, -70, 220, 140, 22), '#3a3d44', '#2a2c31', -5, -5, 4.5);
    cel(ctx, ellP(0, 0, 50, 50), '#6b7787', '#4f5a68', -3, -3, 4.5); cel(ctx, ellP(0, 0, 28, 28), '#2a3140', '#1c212b', -2, -2, 3.5); shine(ctx, -10, -10, 9, 6);
    cel(ctx, rrP(40, -104, 56, 34, 8), '#d6d9de', '#aab0b8', -2, -2, 3.5);
    ctx.restore();
    if (flash > 0) { ctx.save(); ctx.globalAlpha = flash; for (let i = 0; i < 10; i++) { const a = i / 10 * TAU; ctx.strokeStyle = '#fff4dc'; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x + 68 * s + Math.cos(a) * 60, y - 87 * s + Math.sin(a) * 60); ctx.lineTo(x + 68 * s + Math.cos(a) * 130, y - 87 * s + Math.sin(a) * 130); ctx.stroke(); } ctx.restore(); }
  }
  function sheet(ctx, x, y, s, rot, txt) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    cel(ctx, rrP(-110, -140, 220, 280, 10), '#fbf6ea', '#dcd3bf', -5, -5, 4.5);
    ctx.fillStyle = '#b8ad98'; for (let i = 0; i < 5; i++) ctx.fillRect(-80, -100 + i * 40, i === 4 ? 90 : 160, 12);
    if (txt) { ctx.save(); ctx.rotate(-0.25); ctx.strokeStyle = '#a5523f'; ctx.lineWidth = 7; ctx.strokeRect(-90, 50, 180, 64); ctx.fillStyle = '#a5523f'; ctx.font = `700 46px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(txt, 0, 84); ctx.restore(); }
    ctx.restore();
  }
  // transition: a diagonal ink band with anime speed streaks sweeps across, revealing the next scene
  function slashWipe(ctx, u, drawB) {
    const e = H.ease.inOut(H.clamp(u)), edge = -500 + e * (W + 1000);
    const clip = new Path2D(); clip.moveTo(-600, 0); clip.lineTo(edge + 300, 0); clip.lineTo(edge - 300, HH); clip.lineTo(-600, HH); clip.closePath();
    ctx.save(); ctx.clip(clip); drawB(); ctx.restore();
    const band = new Path2D(); band.moveTo(edge + 260, 0); band.lineTo(edge + 360, 0); band.lineTo(edge - 240, HH); band.lineTo(edge - 340, HH); band.closePath();
    ctx.fillStyle = '#2e3350'; ctx.fill(band);
    ctx.save(); ctx.strokeStyle = 'rgba(255,244,220,0.6)'; ctx.lineWidth = 5; ctx.lineCap = 'round';
    for (let i = 0; i < 9; i++) { const yy = 160 + i * 200, xx = edge + 300 - yy * 0.3125 + 50; ctx.beginPath(); ctx.moveTo(xx + 30, yy); ctx.lineTo(xx + 200 + (i % 3) * 60, yy); ctx.stroke(); }
    ctx.restore();
  }
  function zip(ctx, x, y, s) { // zipped-mouth "..." bubble for "never said a word"
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    bubble(ctx, 0, 0, 230, 120, [-120, 120]);
    for (let i = 0; i < 3; i++) { ctx.fillStyle = C.plum; ctx.fill(ellP(-56 + i * 56, 0, 13, 13)); }
    ctx.restore();
  }
  function vign(ctx, a = 0.45) { H.vignette(ctx, W, HH, a, '26,28,40'); }

  // ---------- scenes ----------
  const scenes = [
    // 0 HOOK: finished frame at t=0: Major Martin on the dusk beach, HE NEVER EXISTED
    { s: 0, draw(ctx, t) {
      const push = 1 + 0.08 * H.clamp(t / 4.6);
      ctx.save(); ctx.translate(540, 1300); ctx.scale(push, push); ctx.translate(-540, -1300);
      beach(ctx, t, 3);
      major(ctx, 470, 1720, 1.45, t);
      ctx.restore();
      ctx.save(); ctx.translate(540, 300); ctx.rotate(Math.sin(t * 2.1) * 0.012);
      still(ctx, 'HE NEVER', 0, 0, 124);
      still(ctx, 'EXISTED', 0, 170, 168, { fill: '#ffe2a6' });
      ctx.restore();
      numPop(ctx, '1943', 860, 760, 120, t, w(0, '1943') - 0.15, { rot: 0.08 });
      const zp = pop(t, w(0, 'word') - 0.2);
      if (zp.s > 0) zip(ctx, 820, 1000, zp.s);
      twinkles(ctx, W, HH, t, 9, 5, (x, y) => y > 560 && y < 1700);
      vign(ctx, 0.4);
    } },

    // 1 ID CARD: the invented officer; "never existed" empties the photo, FAKE stamp
    { s: P_[1].s, draw(ctx, t) {
      bg(ctx, W, HH, t, { base: '#cfd6df', dot: '#bfc8d3', acc: '#e9dcc0', kind: 'dots' }, 12);
      const lt = t - P_[1].s, cs = 1 + 0.05 * H.clamp(lt / 3.6);
      const gone = H.smooth(w(2, 'existed') - 0.25, w(2, 'existed') + 0.25, t);
      idCard(ctx, 540, 1040, 1.12 * cs, t, gone);
      big(ctx, 'MAJOR', 540, 420, 130, t, w(1, 'major') - 0.15);
      label(ctx, 'WILLIAM MARTIN', 540, 560, 60, t, w(1, 'william') - 0.15, PAL.gold);
      if (t > w(2, 'never') - 0.15) stamp(ctx, 'FAKE', 600, 1420, 120, t, w(2, 'never') - 0.15, PAL.brick, -0.14);
      if (t > w(2, 'existed')) speedLines(ctx, 540, 1040, t, 22, '#ffffff', 560, 0.35);
      vign(ctx, 0.3);
    } },

    // 2 POCKETS: desk from above, the fake life
    { s: P_[3].s, draw(ctx, t) {
      deskTop(ctx, t);
      big(ctx, 'HIS POCKETS', 540, 380, 110, t, P_[3].s - 0.05);
      const e = pop(t, w(3, 'love') - 0.15); if (e.s > 0) { ctx.save(); ctx.translate(330, 820); ctx.scale(e.sx, e.sy); envelope(ctx, 0, 0, 1.15, -0.12); ctx.restore(); label(ctx, 'LOVE LETTERS', 330, 1010, 50, t, w(3, 'letters') - 0.15, '#f0c9cf'); }
      const tk = pop(t, w(3, 'theatre') - 0.15); if (tk.s > 0) { ctx.save(); ctx.translate(770, 860); ctx.scale(tk.sx, tk.sy); ticket(ctx, 0, -40, 1.05, 0.14, 'THEATRE'); ticket(ctx, 20, 70, 1.05, 0.04, 'THEATRE'); ctx.restore(); }
      const b = pop(t, w(4, 'angry') - 0.15); if (b.s > 0) { ctx.save(); ctx.translate(540, 1340); ctx.scale(b.sx, b.sy); bill(ctx, 0, 0, 1.0, 0.05); ctx.restore(); }
      if (t > w(4, 'bill') - 0.15) stamp(ctx, 'OVERDUE!', 560, 1300, 80, t, w(4, 'bill') - 0.15, PAL.brick, -0.18);
      if (t > w(4, 'angry')) vein(ctx, 760, 1120, 1.4 + Math.sin(t * 9) * 0.08);
      vign(ctx, 0.45);
    } },

    // 3 BRIEFCASE -> MAP: the fake invasion plan
    { s: P_[5].s, draw(ctx, t) {
      const mapIn = H.smooth(P_[6].s - 0.35, P_[6].s + 0.05, t);
      if (mapIn < 1) {
        sky(ctx, t, ['#56657e', '#7e8aa0', '#b9b3aa'], 31, { cloudA: 0.18 });
        const op = H.smooth(w(5, 'held') - 0.2, w(5, 'secret'), t);
        chain(ctx, 30, 1700, 540, 1150 - 80 * 2.8, t, 8, 2.4);
        ctx.save(); ctx.translate(540, 1150); const pc = pop(t, P_[5].s - 0.05); ctx.scale(pc.s * 2.8, pc.s * 2.8); briefcase(ctx, 0, 0, 1, op); ctx.restore();
        big(ctx, 'CHAINED', 540, 460, 120, t, w(5, 'chained') - 0.15);
        if (op > 0.3) { const sp = pop(t, w(5, 'secret') - 0.1); ctx.save(); ctx.translate(540, 820 - sp.s * 60); ctx.scale(sp.sx, sp.sy); sheet(ctx, 0, 0, 1.25, -0.06, null); ctx.restore(); stamp(ctx, 'TOP SECRET', 540, 760, 70, t, w(5, 'secret') - 0.05); }
        vign(ctx, 0.4);
      }
      if (mapIn > 0) {
        ctx.save(); ctx.globalAlpha = mapIn;
        mapBase(ctx, t);
        big(ctx, 'THE FAKE PLAN', 540, 420, 104, t, P_[6].s);
        const gp = grow(t, w(6, 'greece') - 0.4, 0.5), sp = grow(t, w(6, 'sardinia') - 0.4, 0.5);
        dashArrow(ctx, [mx(5), my(32)], [mx(21.6), my(39)], [120, -60], gp, '#a5523f');
        dashArrow(ctx, [mx(1), my(32)], [mx(8.6), my(39.6)], [-60, 0], sp, '#a5523f');
        label(ctx, 'GREECE', mx(22.5), my(41.6), 56, t, w(6, 'greece') - 0.1, '#f0c9cf');
        label(ctx, 'SARDINIA', mx(9) - 30, my(41.9), 52, t, w(6, 'sardinia') - 0.1, '#f0c9cf');
        ctx.restore();
      }
    } },

    // 4 GLYNDWR: quiet, serious; a rainy London street at night
    { s: P_[7].s, draw(ctx, t) {
      const lt = t - P_[7].s;
      const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, '#2c3446'); g.addColorStop(1, '#4b5468'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
      // brick wall
      ctx.fillStyle = '#5a4a48'; ctx.fillRect(0, 760, W, 900);
      ctx.save(); ctx.strokeStyle = 'rgba(30,24,28,0.45)'; ctx.lineWidth = 4; for (let r = 0; r < 18; r++) { const y = 760 + r * 50; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); for (let x = (r % 2) * 60; x < W; x += 120) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 50); ctx.stroke(); } } ctx.restore();
      ctx.fillStyle = '#3a3f4a'; ctx.fillRect(0, 1620, W, 300);
      lampPost(ctx, 820, 1640, t);
      const dx = -lt * 8;
      person(ctx, 440 + dx, 1700, 1.25, { hs: 'cap', capCol: '#5d5a55', coat: '#5d6470', coatS: '#4a505a', pants: '#3f4450', brows: 'worried', look: [0, 0.6], iris: '#6b7fa8', mouth: 'flat', shirt: '#cfc9bd' });
      rain(ctx, t, 17, 0.35);
      big(ctx, 'THE REAL MAN', 540, 360, 110, t, P_[7].s - 0.05);
      label(ctx, 'GLYNDWR MICHAEL', 540, 520, 62, t, w(7, 'glyndwr') - 0.15, PAL.paper);
      label(ctx, 'FROM WALES', 540, 640, 52, t, w(7, 'welshman') - 0.2, '#c9dccb');
      vign(ctx, 0.5);
    } },

    // 5 SUBMARINE: moonlit sea off Spain
    { s: P_[8].s, draw(ctx, t) {
      const lt = t - P_[8].s;
      sky(ctx, t, ['#1f2a3d', '#34435a', '#56657e'], 51, { stars: true, cloudA: 0.12, cloudMax: 600 });
      cel(ctx, ellP(820, 520, 70, 70), '#efe6cf', '#d3c6a6', -8, -8, 4);
      // coast of Spain on the right
      const coast = new Path2D(); coast.moveTo(W, 900); coast.quadraticCurveTo(800, 930, 700, 1010); coast.lineTo(W, 1010); coast.closePath(); cel(ctx, coast, '#4a5446', '#3a4236', -4, -4, 4.5);
      ctx.fillStyle = PAL.seaD; ctx.fillRect(0, 1000, W, 920);
      for (let i = 0; i < 8; i++) { const yy = 1040 + i * 70, off = (t * (14 + i * 5) + i * 90) % 220; ctx.save(); ctx.strokeStyle = 'rgba(200,215,230,0.3)'; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath(); for (let x = -220 + off; x < W + 220; x += 220) { ctx.moveTo(x, yy); ctx.quadraticCurveTo(x + 40, yy - 12, x + 80, yy); } ctx.stroke(); ctx.restore(); }
      // moon path
      ctx.save(); ctx.globalAlpha = 0.25; ctx.fillStyle = '#efe6cf'; for (let i = 0; i < 8; i++) ctx.fillRect(760 + Math.sin(t * 2 + i) * 20, 1030 + i * 60, 120 - i * 8, 8); ctx.restore();
      submarine(ctx, 380 - lt * 10, 1310, 1.05, t);
      // tiny life-vest dot drifting toward the coast
      const dp = grow(t, w(8, 'floating') - 0.3, 2.2), fx = H.lerp(640, 760, dp), fy = 1240 + Math.sin(t * 2.2) * 6;
      if (t > w(8, 'left') - 0.1) { cel(ctx, ellP(fx, fy, 16, 10), '#d08a4a', '#b06f36', -1, -1, 3); }
      label(ctx, 'HMS SERAPH', 380, 1520, 56, t, w(8, 'submarine') - 0.15, PAL.paper);
      big(ctx, 'APRIL 1943', 540, 360, 104, t, P_[8].s - 0.05);
      label(ctx, 'SPAIN', 880, 820, 60, t, w(8, 'spain') - 0.2, PAL.gold);
      label(ctx, 'HUELVA', 880, 700, 48, t, w(8, 'spain') + 0.1, PAL.paper);
      vign(ctx, 0.45);
    } },

    // 6 COPY: Spanish officer + German agent photograph the letters
    { s: P_[9].s, draw(ctx, t) {
      const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, '#b9b09a'); g.addColorStop(1, '#8f8572'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH);
      cel(ctx, rrP(640, 620, 340, 420, 16), '#9fb4c4', '#86a0b2', -4, -4, 5); // window
      ctx.save(); ctx.strokeStyle = PAL.woodL; ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(810, 620); ctx.lineTo(810, 1040); ctx.moveTo(640, 830); ctx.lineTo(980, 830); ctx.stroke(); ctx.restore();
      lampGlow(ctx, 540, 1200, 700, 0.3);
      person(ctx, 250, 1640, 1.0, { hs: 'cap', capCol: '#5f6a4c', coat: '#6f7a58', coatS: '#586244', pants: '#56603f', buttons: true, brows: 'stern', iris: '#6b5a48', look: [0.6, 0.4], hair: '#2b2a33' });
      person(ctx, 820, 1640, 1.0, { flip: -1, hs: 'cap', capCol: '#3f4048', coat: '#7d8079', coatS: '#63665f', pants: '#4a4c52', brows: 'smug', look: [0.6, 0.4], iris: '#5d7690', hair: '#3a3036', long: true });
      cel(ctx, rrP(80, 1360, 920, 60, 14), PAL.wood, PAL.woodS, -4, -6, 4.5); // table top
      cel(ctx, rrP(110, 1420, 860, 260, 0), PAL.woodS, '#4a3324', -4, -4, 4.5);
      sheet(ctx, 470, 1310, 0.7, -0.1, null); sheet(ctx, 610, 1320, 0.7, 0.12, null);
      const flashes = [w(9, 'copy') - 0.15, w(9, 'everything') - 0.1, w(9, 'everything') + 0.35];
      let fl = 0; flashes.forEach((f) => { if (t > f) fl = Math.max(fl, 1 - (t - f) / 0.25); });
      camera(ctx, 560, 1130, 0.9, Math.max(0, fl));
      if (fl > 0) { ctx.save(); ctx.globalAlpha = fl * 0.3; ctx.fillStyle = '#fff8e8'; ctx.fillRect(0, 0, W, HH); ctx.restore(); }
      flashes.forEach((f, i) => { const u = t - f; if (u > 0) { const k = H.ease.out(H.clamp(u / 0.8)); sheet(ctx, 540 + (i - 1) * 300 * k, 1100 - 400 * k, 0.75, (i - 1) * 0.25 * k, 'COPY'); } });
      label(ctx, 'SPANISH OFFICER', 300, 560, 48, t, w(9, 'spanish') - 0.15, PAL.paper);
      label(ctx, 'GERMAN AGENT', 760, 450, 48, t, w(9, 'german') - 0.15, '#cfd6df');
      kana(ctx, 'CLICK!', 300, 1010, 80, -0.15, pop(t, w(9, 'copy') - 0.1).s, '#fff4dc');
      vign(ctx, 0.4);
    } },

    // 7 MAP: Hitler (from behind only) sends tanks to Greece; the real target is Sicily
    { s: P_[10].s, draw(ctx, t) {
      const sic = t > P_[11].s - 0.2;
      const zt = H.smooth(P_[11].s - 0.3, P_[11].s + 0.5, t), z = 1 + 0.35 * zt;
      ctx.save(); ctx.translate(mx(14), my(38)); ctx.scale(z, z); ctx.translate(-mx(14), -my(38));
      mapBase(ctx, t, { hi: sic ? 'sicily' : null });
      // tanks France -> Greece
      const tp = grow(t, w(10, 'tanks') - 0.3, 1.4);
      const path = dashArrow(ctx, [mx(2), my(46.4)], [mx(21.5), my(39.6)], [140, -40], tp, '#5a5d52');
      if (t > w(10, 'sent') - 0.2) { const [x, y] = along(path, plen(path) * tp); tank(ctx, x - 30, y + 30, 0.9); tank(ctx, x - 110, y + 10, 0.8); }
      if (sic) {
        const sp = grow(t, w(11, 'target') - 0.4, 0.7);
        dashArrow(ctx, [mx(10), my(32)], [mx(13.6), my(36.9)], [-40, 0], sp, '#2e3350');
        dashArrow(ctx, [mx(16), my(32)], [mx(15), my(36.9)], [40, 0], sp, '#2e3350');
        if (sp > 0.5) { ship(ctx, mx(11) - 10, my(34), 0.8, -0.9); ship(ctx, mx(15.6) + 10, my(34), 0.8, -2.2); }
        const rp = (t * 1.6) % 1; ctx.save(); ctx.strokeStyle = PAL.goldS; ctx.globalAlpha = 1 - rp; ctx.lineWidth = 8; ctx.stroke(ellP(mx(14), my(37.5), 70 + rp * 70, 50 + rp * 50)); ctx.restore();
      }
      ctx.restore();
      if (!sic) {
        seatedBack(ctx, 230, 1990, 1.0);
        big(ctx, 'HITLER BOUGHT IT', 540, 420, 96, t, P_[10].s - 0.05);
        label(ctx, 'TANKS TO GREECE', 700, 560, 56, t, w(10, 'greece') - 0.2, '#cfd6df');
      } else {
        big(ctx, 'REAL TARGET:', 540, 400, 110, t, P_[11].s - 0.05);
        numPop(ctx, 'SICILY', 540, 560, 140, t, w(11, 'sicily') - 0.15, { fill: '#ffe2a6' });
        label(ctx, 'JULY 1943', 540, 1500, 56, t, w(11, 'sicily') + 0.3, PAL.gold);
      }
      vign(ctx, 0.3);
    } },

    // 8 TELEGRAM: rod, line and sinker
    { s: P_[12].s, draw(ctx, t) {
      bg(ctx, W, HH, t, { base: '#d9d2bf', dot: '#cbc3ad', acc: '#e9dcc0', kind: 'dots' }, 82);
      const lt = t - P_[12].s, tilt = Math.sin(t * 1.3) * 0.015;
      ctx.save(); ctx.translate(540, 1050); ctx.rotate(-0.03 + tilt);
      cel(ctx, rrP(-430, -420, 860, 840, 18), '#f3ecd8', '#d9cfb4', -10, -10, 5);
      cel(ctx, rrP(-430, -420, 860, 100, { upperLeft: 18, upperRight: 18, lowerLeft: 0, lowerRight: 0 }), '#5f7186', '#4a596b', -4, -4, 5);
      ctx.fillStyle = '#fff4dc'; ctx.font = `700 60px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('TELEGRAM', 0, -368);
      ctx.textAlign = 'left'; ctx.fillStyle = PAL.ink; ctx.font = `700 50px ${FONT}`;
      if (t > w(12, 'churchill') - 0.2) ctx.fillText('TO: CHURCHILL', -370, -250);
      ctx.fillStyle = '#b8ad98'; ctx.fillRect(-370, -200, 740, 6);
      const lines = [['MINCEMEAT', 'mincemeat'], ['SWALLOWED', 'swallowed'], ['ROD, LINE', 'rod'], ['AND SINKER', 'sinker']];
      lines.forEach(([s, k], i) => { const p = pop(t, w(12, k) - 0.15); if (p.s > 0) { ctx.save(); ctx.translate(-370, -110 + i * 120); ctx.scale(p.s, p.s); ctx.fillStyle = i === 0 ? '#a5523f' : PAL.ink; ctx.font = `700 ${i === 0 ? 92 : 84}px ${FONT}`; ctx.fillText(s, 0, 0); ctx.restore(); } });
      ctx.restore();
      const hp = pop(t, w(12, 'rod') - 0.2); if (hp.s > 0) { ctx.save(); ctx.translate(870, 640); ctx.scale(hp.s, hp.s); fishHook(ctx, 0, 0, 0.9, Math.sin(t * 2.4) * 0.18); ctx.restore(); }
      big(ctx, 'THE MESSAGE', 540, 380, 108, t, P_[12].s - 0.05);
      if (t > w(12, 'sinker')) sparkle(ctx, 200, 1530, 26, C.butter);
      vign(ctx, 0.35);
    } },

    // 9 END: loop back to Major Martin on the beach
    { s: P_[13].s, draw(ctx, t) {
      beach(ctx, t, 3);
      major(ctx, 400, 1720, 1.3, t, { brows: 'smug' });
      const b = pop(t, w(13, 'tailors') - 0.15); if (b.s > 0) { ctx.save(); ctx.translate(820, 1150 + bob(t, 0, 10)); ctx.scale(b.sx * 0.85, b.sy * 0.85); bill(ctx, 0, 0, 1, 0.12); ctx.restore(); }
      big(ctx, 'WOULD IT', 540, 330, 120, t, P_[13].s - 0.05);
      big(ctx, 'FOOL YOU?', 540, 480, 130, t, w(13, 'fooled') - 0.2, { fill: '#ffe2a6' });
      if (t > w(13, 'you') + 0.25) still(ctx, 'COMMENT BELOW', 540, 1560, 80, {});
      vign(ctx, 0.4);
    } },
  ];

  const CUTS = scenes.slice(1).map((sc) => { const prev = P_.filter((p) => p.e <= sc.s + 0.01).pop(); return { t: (prev.e + sc.s) / 2 }; });
  const CUTW = 0.42;
  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) { scenes[i - 1].draw(ctx, t); slashWipe(ctx, (t - (c.t - CUTW / 2)) / CUTW, () => scenes[i].draw(ctx, t)); }
    else scenes[i].draw(ctx, t);
  }
  function thumbnail(ctx) { scenes[0].draw(ctx, 0.0); }

  function scoreSound(k) {
    const pop_ = (at, f = 600, g = 0.5, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const hit = (at) => { k.play('thud', at, { f: 110, gain: 0.5 }); pop_(at, 500, 0.5, 0, false); };
    CUTS.forEach((c) => { k.noise(c.t - 0.2, { dur: 0.4, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.4, 1400]], q: 0.9, gain: 0.26, a: 0.07 }); k.play('thud', c.t + 0.12, { f: 95, gain: 0.25 }); });
    // hook: sea wash
    k.noise(0.0, { dur: 4.6, color: 'pink', filter: 'lowpass', f: 700, gain: 0.08, a: 0.05 });
    k.play('whoosh', 0.02, { dur: 0.6, gain: 0.25 }); hit(w(0, '1943') - 0.15); pop_(w(0, 'word') - 0.2, 700, 0.45, 0.3, false);
    // id card
    hit(w(1, 'major') - 0.15); pop_(w(1, 'william') - 0.15, 600, 0.45); k.play('stamp', w(2, 'never') - 0.15, { gain: 0.6 }); k.play('error', w(2, 'existed') - 0.05, { f: 'D3', gain: 0.25 });
    // pockets
    pop_(w(3, 'love') - 0.15, 650, 0.5, -0.3, false); k.play('ding', w(3, 'letters') - 0.1, { f: 'E5', gain: 0.18 }); pop_(w(3, 'theatre') - 0.15, 700, 0.5, 0.3, false);
    pop_(w(4, 'angry') - 0.15, 500, 0.5, 0, false); k.play('stamp', w(4, 'bill') - 0.15, { gain: 0.55 });
    // briefcase + map
    k.play('impact', P_[5].s, { gain: 0.4 }); for (let i = 0; i < 5; i++) k.play('tick', w(5, 'chained') + i * 0.07, { f: 1800, gain: 0.12, minor: true });
    k.play('whoosh', w(5, 'held') - 0.2, { dur: 0.5, gain: 0.3 }); k.play('stamp', w(5, 'secret') - 0.05, { gain: 0.5 });
    k.play('whoosh', P_[6].s - 0.3, { dur: 0.6, gain: 0.25 }); pop_(w(6, 'greece') - 0.1, 600, 0.5, 0.3, false); pop_(w(6, 'sardinia') - 0.1, 650, 0.5, -0.3, false);
    // glyndwr: quiet rain, no jokes
    k.noise(P_[7].s - 0.1, { dur: P_[7].e - P_[7].s + 0.3, color: 'pink', filter: 'highpass', f: 2500, gain: 0.07, a: 0.2 });
    k.play('ding', w(7, 'glyndwr') - 0.15, { f: 'A3', gain: 0.18 });
    // sub
    k.noise(P_[8].s, { dur: 2.8, color: 'brown', filter: 'lowpass', f: 300, gain: 0.12, a: 0.3 }); pop_(w(8, 'submarine') - 0.15, 450, 0.4); pop_(w(8, 'spain') - 0.2, 600, 0.45, 0.4, false);
    // copy
    [w(9, 'copy') - 0.15, w(9, 'everything') - 0.1, w(9, 'everything') + 0.35].forEach((f) => { k.play('tick', f, { f: 2400, gain: 0.25 }); k.play('whoosh', f + 0.05, { dur: 0.3, gain: 0.2, minor: true }); });
    // map
    hit(P_[10].s); for (let i = 0; i < 8; i++) k.play('tick', w(10, 'tanks') - 0.2 + i * 0.16, { f: 300, gain: 0.15, minor: true });
    k.play('impact', w(11, 'target') - 0.2, { gain: 0.45 }); hit(w(11, 'sicily') - 0.15);
    // telegram
    for (let i = 0; i < 6; i++) k.play('tick', P_[12].s + i * 0.09, { f: 1600, gain: 0.14, minor: true });
    pop_(w(12, 'churchill') - 0.2, 600, 0.4); ['mincemeat', 'swallowed', 'rod', 'sinker'].forEach((x, i) => pop_(w(12, x) - 0.15, 550 + i * 60, 0.5, 0, i === 0)); k.play('ding', w(12, 'sinker') + 0.2, { f: 'G4', gain: 0.25 });
    // end
    k.play('whoosh', P_[13].s, { dur: 0.5, gain: 0.25 }); pop_(w(13, 'tailors') - 0.15, 600, 0.5, 0.4); pop_(w(13, 'fooled') - 0.2, 650, 0.5); k.play('ding', w(13, 'you') + 0.25, { f: 'C5', gain: 0.3 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
