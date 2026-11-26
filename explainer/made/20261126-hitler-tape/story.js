// ===== Kawaii Anime (serious muted palette: pine green, steel blue, lamp amber), vertical: "The only tape of Hitler not shouting" =====
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
  const P_ = [{"s": 0.25, "e": 3.64, "text": "This is the only known tape of Hitler not shouting.", "words": [["this", 0.25], ["is", 0.58], ["the", 0.75], ["only", 0.99], ["known", 1.33], ["tape", 1.74], ["of", 2.07], ["hitler", 2.24], ["not", 2.73], ["shouting", 2.98]]}, {"s": 4.07, "e": 5.82, "text": "You were never supposed to hear it.", "words": [["you", 4.07], ["were", 4.26], ["never", 4.51], ["supposed", 4.82], ["to", 5.32], ["hear", 5.45], ["it", 5.7]]}, {"s": 6.29, "e": 11.81, "text": "June 1942: Hitler visits Finland for Marshal Mannerheim's birthday.", "words": [["june", 6.29], ["1942", 6.69], ["hitler", 7.08], ["visits", 7.67], ["finland", 8.26], ["for", 8.96], ["marshal", 9.25], ["mannerheims", 9.94], ["birthday", 11.03]]}, {"s": 12.17, "e": 14.67, "text": "A Finnish engineer records the speeches,", "words": [["a", 12.17], ["finnish", 12.24], ["engineer", 12.76], ["records", 13.34], ["the", 13.86], ["speeches", 14.08]]}, {"s": 15.02, "e": 16.55, "text": "then leaves his mic running.", "words": [["then", 15.02], ["leaves", 15.28], ["his", 15.68], ["mic", 15.88], ["running", 16.08]]}, {"s": 16.99, "e": 19.54, "text": "In a railway car, Hitler just talks.", "words": [["in", 16.99], ["a", 17.17], ["railway", 17.26], ["car", 17.9], ["hitler", 18.17], ["just", 18.72], ["talks", 19.08]]}, {"s": 19.9, "e": 20.94, "text": "No shouting.", "words": [["no", 19.9], ["shouting", 20.1]]}, {"s": 21.25, "e": 23.69, "text": "He admits Soviet factories shocked him.", "words": [["he", 21.25], ["admits", 21.39], ["soviet", 21.84], ["factories", 22.28], ["shocked", 22.95], ["him", 23.47]]}, {"s": 24.17, "e": 27.34, "text": "Eleven minutes in, the SS guards spot the mic.", "words": [["eleven", 24.17], ["minutes", 24.7], ["in", 25.32], ["the", 25.49], ["ss", 25.76], ["guards", 25.93], ["spot", 26.46], ["the", 26.82], ["mic", 27.08]]}, {"s": 27.82, "e": 30.35, "text": "One draws a finger across his throat.", "words": [["one", 27.82], ["draws", 28.08], ["a", 28.5], ["finger", 28.58], ["across", 29.09], ["his", 29.59], ["throat", 29.85]]}, {"s": 30.72, "e": 32.64, "text": "They want the tape destroyed.", "words": [["they", 30.72], ["want", 31.04], ["the", 31.36], ["tape", 31.6], ["destroyed", 31.92]]}, {"s": 33.08, "e": 35.71, "text": "Instead, it's sealed, never to be opened.", "words": [["instead", 33.08], ["its", 33.67], ["sealed", 33.93], ["never", 34.44], ["to", 34.86], ["be", 35.03], ["opened", 35.2]]}, {"s": 36.09, "e": 38.89, "text": "Later, actor Bruno Ganz studied it to play him.", "words": [["later", 36.09], ["actor", 36.47], ["bruno", 36.85], ["ganz", 37.23], ["studied", 37.53], ["it", 38.06], ["to", 38.21], ["play", 38.36], ["him", 38.66]]}, {"s": 39.36, "e": 42.48, "text": "So does the calm voice make him less scary, or more?", "words": [["so", 39.36], ["does", 39.51], ["the", 39.82], ["calm", 40.06], ["voice", 40.37], ["make", 40.76], ["him", 41.08], ["less", 41.31], ["scary", 41.62], ["or", 42.01], ["more", 42.17]]}];
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

  // ---------- timing (from phrases.json) ----------
  const BEATS = [
    { id: 'hook', s: 0, e: P_[1].e, on: 'FULL FRAME at 0 s: a big 1940s tape recorder with spinning reels and a microphone in a lamp-lit wood-panelled railway car, THE SECRET TAPE; ONLY ONE tag on "only", calm waveform on "shouting", TOP SECRET stamp on "never", SHH on "hear"' },
    { id: 'trip', s: P_[2].s, e: P_[2].e, on: 'Finnish pine forest under a pale June sky, a plane crosses with speed lines; JUNE 1942; FINLAND tag; Mannerheim (old marshal, white moustache) with a 75 cake on "birthday"' },
    { id: 'engineer', s: P_[3].s, e: P_[4].e, on: 'beside the parked train: a young radio engineer in headphones at his recorder; OFFICIAL SPEECHES tick; camera pushes to the mic, red REC light, STILL RECORDING' },
    { id: 'car', s: P_[5].s, e: P_[7].e, on: 'inside the railway car: Hitler as a dark figure from behind, Mannerheim across the table; calm waveform bubble; crossed-out megaphone + QUIET TONE; thought cloud: factory + tank line, SOVIET TANKS, "!?"' },
    { id: 'spotted', s: P_[8].s, e: P_[9].e, on: 'clock counts to 11:00; two grey-uniformed guards turn, shocked eyes, "!"; close-up: a guard draws a finger across his throat (gesture only), STOP, engineer sweats' },
    { id: 'sealed', s: P_[10].s, e: P_[11].e, on: 'archive: the reel, DESTROY IT? stamp; it drops into a metal can, lid shuts, wax seal, SEALED, DO NOT OPEN' },
    { id: 'ganz', s: P_[12].s, e: P_[12].e, on: 'film set: clapperboard DOWNFALL 2004, an actor listening in headphones to the reel, BRUNO GANZ tag' },
    { id: 'end', s: P_[13].s, e: P_[13].e, on: 'back to the recorder (loop to the hook): CALM VOICE, LESS SCARY? / MORE SCARY? tags, COMMENT' },
  ];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;

  // ---------- serious palette: pine green, steel blue, lamp amber, earth (no neon) ----------
  const PAL = {
    coat: '#4c5446', coatS: '#3a4136', hairD: '#2b2a33', skin: '#f6dcc6', skinS: '#dfb79c',
    paper: '#efe6cf', paperS: '#d3c6a6', brick: '#a5523f', brickS: '#7e3c2f',
    wood: '#7a553d', woodS: '#5c3f2d', woodL: '#9b7055', gold: '#d8b25a', goldS: '#ad8a3c',
    pine: '#3f5a4a', pineS: '#2f4639', pineL: '#5b7a62', steel: '#5f7186', steelS: '#4a596b', steelL: '#8698ad',
    leather: '#6b4f3a', leatherS: '#523b2b', metal: '#b9bdc4', metalS: '#8e939c', lamp: '#f2cf86',
    grey: '#7d8079', greyS: '#63665f', ink: '#2e3350',
  };
  const TXT = { fill: '#fff4dc', line: '#7a4a32' };
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.03, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.04, fill: TXT.fill, line: TXT.line, ...o });
  const still = (ctx, s, x, y, size, o = {}) => kText(ctx, s, x, y, size, { outer: C.plum, ow: 0.1, lw: 0.17, fill: TXT.fill, line: TXT.line, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = PAL.paper) => { const p = pop(t, t0); if (p.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  const numPop = (ctx, str, x, y, size, t, t0, o = {}) => { const n = pop(t, t0, 1.2); if (n.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(n.sx, n.sy); kText(ctx, str, 0, 0, size, { fill: o.fill || TXT.fill, line: o.line || TXT.line, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); };
  const grow = (t, t0, d) => H.ease.out(H.clamp((t - t0) / d));

  // ---------- props ----------
  function reel(ctx, x, y, r, ang) {
    cel(ctx, ellP(x, y, r, r), PAL.metal, PAL.metalS, -6, -6, 4.5);
    cel(ctx, ellP(x, y, r * 0.78, r * 0.78), '#4a3628', '#36271d', -4, -4, 3.5); // wound tape
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
    for (let i = 0; i < 3; i++) { ctx.rotate(TAU / 3); cel(ctx, ellP(r * 0.45, 0, r * 0.2, r * 0.2), '#2c2a2e', '#1f1d21', -2, -2, 3); }
    ctx.restore();
    cel(ctx, ellP(x, y, r * 0.16, r * 0.16), PAL.metal, PAL.metalS, -2, -2, 3.5);
    shine(ctx, x - r * 0.5, y - r * 0.55, r * 0.16, r * 0.08, -0.7, 0.6);
  }
  // 1940s portable tape recorder, origin at its centre
  function recorder(ctx, cx, cy, s, t, o = {}) {
    ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s);
    cel(ctx, rrP(-280, -60, 560, 300, 30), PAL.leather, PAL.leatherS, -10, -10, 5);
    cel(ctx, rrP(-250, -40, 500, 70, 14), PAL.metal, PAL.metalS, -4, -4, 4);
    // tape path
    ctx.save(); ctx.strokeStyle = '#3a2a20'; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(-250, -150); ctx.lineTo(-60, 0); ctx.lineTo(60, 0); ctx.lineTo(250, -150); ctx.stroke(); ctx.restore();
    const sp = o.speed == null ? 2.2 : o.speed;
    reel(ctx, -150, -150, 120, t * sp); reel(ctx, 150, -150, 120, t * sp * 1.1);
    cel(ctx, rrP(-70, -18, 140, 38, 10), '#3a3d44', '#2a2c31', -2, -2, 3.5);
    // VU meter
    cel(ctx, rrP(-200, 70, 180, 120, 16), '#f3e7c4', '#d9c99b', -3, -3, 4);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(-110, 190, 80, Math.PI * 1.2, Math.PI * 1.8); ctx.stroke();
    const lvl = o.level == null ? 0.35 : o.level, na = Math.PI * (1.25 + 0.5 * H.clamp(lvl + Math.sin(t * 9) * 0.04 + Math.sin(t * 23) * 0.03));
    ctx.strokeStyle = PAL.brick; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-110, 185); ctx.lineTo(-110 + Math.cos(na) * 92, 185 + Math.sin(na) * 92); ctx.stroke(); ctx.restore();
    // knobs + REC lamp
    [40, 130].forEach((x) => cel(ctx, ellP(x, 130, 34, 34), '#3a3d44', '#2a2c31', -3, -3, 4));
    const on = o.rec !== false && Math.floor(t * 2) % 2 === 0;
    cel(ctx, ellP(215, 130, 22, 22), on ? '#e0614f' : '#6e3a33', on ? '#b84436' : '#542b26', -2, -2, 4);
    if (on) shine(ctx, 208, 122, 6, 4, -0.6, 0.9);
    ctx.restore();
  }
  // ribbon microphone on a stand, origin at the base
  function mic(ctx, x, y, s, t, h = 420) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, ellP(0, 0, 90, 22), '#3a3d44', '#2a2c31', -3, -3, 4.5);
    cel(ctx, rrP(-9, -h, 18, h, 8), PAL.metal, PAL.metalS, -2, -2, 4);
    cel(ctx, rrP(-60, -h - 150, 120, 170, 50), PAL.metal, PAL.metalS, -8, -8, 4.5);
    ctx.save(); ctx.clip(rrP(-60, -h - 150, 120, 170, 50)); ctx.strokeStyle = 'rgba(46,51,80,0.45)'; ctx.lineWidth = 4;
    for (let i = 0; i < 9; i++) { ctx.beginPath(); ctx.moveTo(-60, -h - 140 + i * 19); ctx.lineTo(60, -h - 140 + i * 19); ctx.stroke(); } ctx.restore();
    shine(ctx, -30, -h - 120, 12, 26, 0, 0.6);
    ctx.restore();
  }
  function pineTree(ctx, x, y, s, col, colS) {
    const p = new Path2D(); p.moveTo(x, y - 300 * s);
    for (let i = 0; i < 4; i++) { const yy = y - 300 * s + (i + 1) * 70 * s, ww = (40 + i * 30) * s; p.lineTo(x + ww, yy); p.lineTo(x + ww * 0.45, yy); }
    p.lineTo(x + 20 * s, y); p.lineTo(x - 20 * s, y);
    for (let i = 3; i >= 0; i--) { const yy = y - 300 * s + (i + 1) * 70 * s, ww = (40 + i * 30) * s; p.lineTo(x - ww * 0.45, yy); p.lineTo(x - ww, yy); }
    p.closePath(); cel(ctx, p, col, colS, -6, -4, 3.5);
  }
  function forest(ctx, y, seed, s, col, colS, shift = 0) { const r = H.rng(seed); for (let i = 0; i < 12; i++) { const x = ((i * 110 + r.range(-30, 30) + shift) % 1320 + 1320) % 1320 - 120; pineTree(ctx, x, y + r.range(-20, 20), s * r.range(0.8, 1.2), col, colS); } }
  function woodWall(ctx, y0, y1) {
    const g = ctx.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, '#4a3628'); g.addColorStop(1, '#6b4f3a');
    ctx.fillStyle = g; ctx.fillRect(0, y0, W, y1 - y0);
    ctx.strokeStyle = 'rgba(30,20,14,0.35)'; ctx.lineWidth = 5; for (let x = 60; x < W; x += 180) { ctx.beginPath(); ctx.moveTo(x, y0); ctx.lineTo(x, y1); ctx.stroke(); }
  }
  function lampGlow(ctx, x, y, r, a = 0.35) { const g = ctx.createRadialGradient(x, y, 10, x, y, r); g.addColorStop(0, `rgba(242,207,134,${a})`); g.addColorStop(1, 'rgba(242,207,134,0)'); ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2); }
  function trainWindow(ctx, x, y, w_, h_, t, seed) {
    ctx.save(); const p = rrP(x, y, w_, h_, 30); ctx.clip(p);
    const g = ctx.createLinearGradient(0, y, 0, y + h_); g.addColorStop(0, '#b9cfd6'); g.addColorStop(1, '#e8d9bc'); ctx.fillStyle = g; ctx.fillRect(x, y, w_, h_);
    ctx.translate(x, y); ctx.scale(w_ / 1080, w_ / 1080);
    forest(ctx, h_ * 1080 / w_ + 40, seed, 1.1, PAL.pineL, PAL.pine, t * 4);
    ctx.restore();
    ctx.save(); ctx.lineWidth = 22; ctx.strokeStyle = PAL.woodL; ctx.stroke(rrP(x, y, w_, h_, 30)); ctx.lineWidth = 5; ctx.strokeStyle = C.plum; ctx.stroke(rrP(x - 11, y - 11, w_ + 22, h_ + 22, 38)); ctx.restore();
  }
  function plane(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-200, -38, 400, 76, 38), PAL.metal, PAL.metalS, -6, -6, 4.5);
    cel(ctx, roundPoly([[-40, 0], [40, 0], [10, 150], [-60, 150]], 10), PAL.metalS, '#787d86', -3, -3, 4);
    cel(ctx, roundPoly([[-180, -20], [-150, -20], [-200, -110], [-230, -110]], 8), PAL.metalS, '#787d86', -3, -3, 4);
    for (let i = 0; i < 5; i++) cel(ctx, ellP(-90 + i * 45, -8, 12, 12), '#5d6680', '#4a5269', -2, -2, 3);
    cel(ctx, ellP(200, 0, 18, 18), '#3a3d44', '#2a2c31', -2, -2, 3.5);
    ctx.restore();
  }
  function cake(ctx, x, y, s, t) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-120, -90, 240, 90, 20), '#f3e3c7', '#d9c4a0', -5, -5, 4.5);
    cel(ctx, rrP(-90, -160, 180, 76, 18), '#e9d2b0', '#cfb48c', -4, -4, 4.5);
    ctx.fillStyle = PAL.brick; ctx.font = `700 52px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('75', 0, -120);
    [-50, 0, 50].forEach((cx, i) => { cel(ctx, rrP(cx - 8, -215, 16, 56, 6), PAL.paper, PAL.paperS, -1, -1, 3); const f = 1 + Math.sin(t * 14 + i) * 0.12; cel(ctx, ellP(cx, -230, 10 * f, 18 * f), '#f2c66b', '#e09a44', -2, -2, 3); });
    ctx.restore();
  }
  // dark figure seated, seen from behind (never a face), origin at seat level
  function seatedBack(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const coat = new Path2D(); coat.moveTo(-150, 0); coat.quadraticCurveTo(-160, -260, -100, -330); coat.quadraticCurveTo(0, -360, 100, -330); coat.quadraticCurveTo(160, -260, 150, 0); coat.closePath();
    cel(ctx, coat, '#4a4d45', '#363931', -16, -8, 4.5);
    ctx.save(); ctx.clip(coat); ctx.strokeStyle = 'rgba(20,20,20,0.35)'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(0, -330); ctx.lineTo(0, 0); ctx.stroke(); ctx.restore();
    cel(ctx, rrP(-30, -380, 60, 60, 14), PAL.skinS, '#c99d80', -3, -3, 4);
    cel(ctx, ellP(-76, -436, 14, 24), PAL.skinS, '#c99d80', -2, -2, 3.5); cel(ctx, ellP(76, -436, 14, 24), PAL.skinS, '#c99d80', -2, -2, 3.5);
    cel(ctx, ellP(0, -440, 74, 80), '#2b2a33', '#1d1c24', -8, -8, 4.5); // back of the head: hair
    ctx.save(); ctx.clip(ellP(0, -440, 74, 80)); ctx.fillStyle = PAL.skinS; ctx.fillRect(-74, -385, 148, 40); ctx.restore(); // nape
    ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.22)'; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, -450, 58, Math.PI * 1.15, Math.PI * 1.4); ctx.stroke(); ctx.restore();
    ctx.restore();
  }
  function headphones(ctx, x, y, s) { // drawn over a person() head; x,y = head centre
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.strokeStyle = C.plum; ctx.lineWidth = 26; ctx.beginPath(); ctx.arc(0, 0, 112, Math.PI * 1.08, Math.PI * 1.92); ctx.stroke();
    ctx.strokeStyle = '#4a4d55'; ctx.lineWidth = 16; ctx.stroke();
    [-1, 1].forEach((sd) => cel(ctx, rrP(sd * 108 - 26, -30, 52, 84, 22), '#3a3d44', '#2a2c31', -3, -3, 4.5));
    ctx.restore();
  }
  function wave(ctx, x, y, w_, amp, t, col = PAL.pine, lw = 9) {
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath();
    for (let i = 0; i <= 60; i++) { const u = i / 60, xx = x - w_ / 2 + u * w_, env = Math.sin(u * Math.PI); const yy = y + Math.sin(u * 22 + t * 8) * amp * env * (0.6 + 0.4 * Math.sin(u * 7 + t * 3)); i ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); }
    ctx.stroke(); ctx.restore();
  }
  function megaphone(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, roundPoly([[-90, -30], [60, -90], [60, 90], [-90, 30]], 12), PAL.paper, PAL.paperS, -4, -4, 4.5);
    cel(ctx, rrP(-130, -34, 46, 68, 12), PAL.grey, PAL.greyS, -2, -2, 4);
    ctx.restore();
  }
  function factory(ctx, x, y, s, t) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    [-110, -40].forEach((cx, i) => { cel(ctx, rrP(cx, -230, 44, 160, 6), PAL.brick, PAL.brickS, -3, -3, 4); const r = H.rng(i + 4); for (let k = 0; k < 3; k++) { const u = ((t * 0.6 + k / 3 + i * 0.2) % 1); ctx.fillStyle = `rgba(200,200,205,${0.8 - u * 0.7})`; ctx.fill(ellP(cx + 22 + u * 40, -250 - u * 110, 20 + u * 26, 16 + u * 20)); } });
    cel(ctx, roundPoly([[-160, -80], [-100, -120], [-100, -80], [-40, -120], [-40, -80], [20, -120], [20, -80], [160, -80], [160, 40], [-160, 40]], 6), PAL.grey, PAL.greyS, -6, -6, 4.5);
    ctx.restore();
  }
  function tank(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-70, -10, 140, 34, 16), '#3a3d44', '#2a2c31', -2, -2, 3.5);
    cel(ctx, roundPoly([[-62, -10], [62, -10], [48, -40], [-48, -40]], 8), PAL.pineL, PAL.pine, -3, -3, 3.5);
    cel(ctx, rrP(-26, -66, 52, 30, 12), PAL.pineL, PAL.pine, -2, -2, 3.5);
    cel(ctx, rrP(20, -58, 70, 12, 5), PAL.pineL, PAL.pine, -1, -1, 3);
    ctx.restore();
  }
  function hand(ctx, x, y, s, rot = 0) { // flat hand with an extended index finger
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    cel(ctx, rrP(-10, -16, 120, 30, 15), PAL.skin, PAL.skinS, -2, -2, 4);
    cel(ctx, rrP(-70, -34, 90, 72, 30), PAL.skin, PAL.skinS, -4, -4, 4.5);
    cel(ctx, rrP(-150, -30, 90, 62, 24), PAL.coat, PAL.coatS, -3, -3, 4.5);
    ctx.restore();
  }
  function canister(ctx, x, y, s, lid, t) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, ellP(0, 60, 230, 60), PAL.metalS, '#787d86', -4, -4, 4.5);
    cel(ctx, rrP(-230, -20, 460, 80, 10), PAL.metal, PAL.metalS, -8, -6, 4.5);
    cel(ctx, ellP(0, -20, 230, 60), '#9ea3ab', '#7d828a', -4, -4, 4.5);
    ctx.restore();
  }
  function canLid(ctx, x, y, s) { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); cel(ctx, ellP(0, 0, 240, 64), PAL.metal, PAL.metalS, -6, -6, 4.5); cel(ctx, ellP(0, -6, 190, 46), '#c7cbd1', PAL.metalS, -4, -4, 3.5); ctx.restore(); }
  function clapper(ctx, x, y, s, open) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-200, -60, 400, 240, 14), '#2f3136', '#222428', -6, -6, 4.5);
    ctx.save(); ctx.translate(-200, -60); ctx.rotate(-open);
    const top = rrP(0, -60, 400, 60, 10); cel(ctx, top, '#2f3136', '#222428', -3, -3, 4.5);
    ctx.save(); ctx.clip(top); ctx.fillStyle = '#efe6cf'; for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.moveTo(i * 80, -60); ctx.lineTo(i * 80 + 40, -60); ctx.lineTo(i * 80 + 10, 0); ctx.lineTo(i * 80 - 30, 0); ctx.closePath(); ctx.fill(); } ctx.restore();
    ctx.restore();
    ctx.fillStyle = '#efe6cf'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = `700 64px ${FONT}`; ctx.fillText('DOWNFALL', 0, 30); ctx.font = `700 56px ${FONT}`; ctx.fillText('2004', 0, 120);
    ctx.restore();
  }
  // transition: a strip of magnetic tape sweeps down the screen, revealing the next scene above it
  function tapeWipe(ctx, u, drawB) {
    const e = H.ease.inOut(H.clamp(u)), edge = -200 + e * (HH + 400);
    ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, Math.max(0, edge)); ctx.clip(); drawB(); ctx.restore();
    const band = new Path2D(); band.moveTo(-20, edge - 70); band.lineTo(W + 20, edge - 120); band.lineTo(W + 20, edge + 60); band.lineTo(-20, edge + 110); band.closePath();
    cel(ctx, band, '#5a3f2e', '#3e2b20', 0, 8, 6);
    ctx.save(); ctx.clip(band); ctx.strokeStyle = 'rgba(255,230,190,0.35)'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(-20, edge - 30); ctx.lineTo(W + 20, edge - 80); ctx.stroke(); ctx.restore();
  }
  function vign(ctx, a = 0.45) { H.vignette(ctx, W, HH, a, '24,26,30'); }
  function car(ctx) { woodWall(ctx, 0, HH); }

  // ---------- scenes ----------
  const scenes = [
    // 0 HOOK: finished frame at t=0: big recorder + mic in the lamp-lit carriage, THE SECRET TAPE
    { s: 0, draw(ctx, t) {
      const push = 1 + 0.07 * H.clamp(t / 5.8);
      ctx.save(); ctx.translate(540, 1150); ctx.scale(push, push); ctx.translate(-540, -1150);
      car(ctx);
      trainWindow(ctx, 170, 560, 740, 330, t, 5);
      lampGlow(ctx, 540, 520, 620, 0.32);
      cel(ctx, rrP(-40, 1330, W + 80, 600, 0), PAL.wood, PAL.woodS, 0, -14, 5); // table
      recorder(ctx, 560, 1260, 1.42, t, { level: 0.3 });
      mic(ctx, 150, 1560, 0.95, t, 480);
      ctx.restore();
      // hook words: full size and opacity from frame 0
      const sway = Math.sin(t * 2.1) * 0.012;
      ctx.save(); ctx.translate(540, 320); ctx.rotate(sway);
      still(ctx, 'THE SECRET', 0, 0, 120);
      still(ctx, 'TAPE', 0, 185, 200, { fill: '#ffe2a6' });
      ctx.restore();
      label(ctx, 'ONLY ONE', 830, 1640, 58, t, w(0, 'only') - 0.15, PAL.gold);
      // calm waveform on "shouting": the needle barely moves
      const sh = w(0, 'shouting') - 0.15;
      if (t > sh) { const p = pop(t, sh); ctx.save(); ctx.translate(560, 840); ctx.scale(p.sx, p.sy); bubble(ctx, 0, 0, 520, 140, [-60, 160]); wave(ctx, 0, 0, 420, 14, t); ctx.restore(); }
      if (t > w(1, 'never') - 0.15) stamp(ctx, 'TOP SECRET', 560, 1500, 74, t, w(1, 'never') - 0.15);
      kana(ctx, 'SHH', 880, 1140, 84, 0.18, pop(t, w(1, 'hear') - 0.15).s, '#d9e4ea');
      twinkles(ctx, W, HH, t, 9, 6, (x, y) => y > 560 && y < 1700);
      vign(ctx, 0.42);
    } },

    // 1 TRIP: Finnish pine forest, plane, JUNE 1942, Mannerheim + 75 cake
    { s: P_[2].s, draw(ctx, t) {
      const lt = t - P_[2].s;
      sky(ctx, t, ['#9fb8c4', '#c9d3cc', '#ecd9b8'], 21, { cloud: '#ffffff', cloudA: 0.35, cloudMax: 800 });
      forest(ctx, 1300, 3, 1.6, '#6f8f7a', '#5b7a66', -lt * 10);
      forest(ctx, 1500, 8, 2.0, PAL.pineL, PAL.pine, -lt * 25);
      ctx.fillStyle = '#5b7a62'; ctx.fillRect(0, 1490, W, HH);
      ctx.fillStyle = '#4f6c56'; ctx.fillRect(0, 1490, W, 14);
      const px = H.lerp(-260, 1340, H.clamp(lt / 4.2)), py = 700 + Math.sin(lt * 2) * 14;
      if (px < 1300) { speedLines(ctx, px, py, t, 14, '#ffffff', 260, 0.35); plane(ctx, px, py, 1.0); }
      big(ctx, 'JUNE', 540, 330, 120, t, P_[2].s - 0.1);
      numPop(ctx, '1942', 540, 500, 170, t, w(2, '1942') - 0.15);
      label(ctx, 'FINLAND', 540, 650, 66, t, w(2, 'finland') - 0.15, PAL.paper);
      const mp = pop(t, w(2, 'mannerheims') - 0.2);
      if (mp.s > 0) {
        ctx.save(); ctx.translate(380, 1650); ctx.scale(mp.sx, mp.sy);
        person(ctx, 0, 0, 1.15, { hs: 'cap', capCol: PAL.grey, coat: '#8a8d7f', coatS: '#6f7265', stache: 'walrus', buttons: true, brows: 'smug', iris: '#7b8fa8', pants: '#6f7265' });
        ctx.restore();
        label(ctx, 'MANNERHEIM', 380, 880, 54, t, w(2, 'mannerheims') - 0.1, PAL.gold);
      }
      const cp = pop(t, w(2, 'birthday') - 0.15);
      if (cp.s > 0) { ctx.save(); ctx.translate(800, 1560); ctx.scale(cp.sx, cp.sy); cake(ctx, 0, 0, 1.3, t); ctx.restore(); sparkle(ctx, 680, 1230, 22 * cp.s, C.white); sparkle(ctx, 930, 1270, 16 * cp.s, C.butter); }
      vign(ctx, 0.3);
    } },

    // 2 ENGINEER: young radio engineer beside the train, mic left running
    { s: P_[3].s, draw(ctx, t) {
      const mt = w(4, 'mic') - 0.25, z = 1 + 0.55 * H.ease.inOut(H.clamp((t - mt) / 0.6)), fx = H.lerp(540, 820, H.ease.inOut(H.clamp((t - mt) / 0.6))), fy = H.lerp(960, 980, H.ease.inOut(H.clamp((t - mt) / 0.6)));
      ctx.save(); ctx.translate(540, 960); ctx.scale(z, z); ctx.translate(-fx, -fy);
      sky(ctx, t, ['#a8bcc6', '#d2d6cc', '#e8dcc2'], 31, { cloud: '#ffffff', cloudA: 0.3, cloudMax: 500 });
      forest(ctx, 760, 12, 1.2, '#7a9784', '#66836f');
      // train carriage side
      cel(ctx, rrP(-60, 600, W + 120, 760, 24), PAL.steel, PAL.steelS, -10, -10, 5);
      for (let i = 0; i < 4; i++) cel(ctx, rrP(20 + i * 270, 700, 200, 230, 18), '#3b4252', '#2d3340', -4, -4, 4);
      cel(ctx, rrP(-60, 1000, W + 120, 30, 6), PAL.steelL, PAL.steel, -2, -2, 4);
      ground(ctx, 1360, '#8b8a76', '#76755f');
      // engineer
      person(ctx, 290, 1700, 1.15, { hs: 'crew', hair: '#c9a46a', coat: '#6f6553', coatS: '#585042', shirt: '#efe9dc', tie: '#4b5d73', brows: lt(t) > 2.8 ? 'worried' : 'stern', iris: '#5d86b0', look: [1, 0], arms: 'down' });
      headphones(ctx, 290, 1700 - 500 * 1.15 - 10, 1.15);
      if (t > w(4, 'leaves') - 0.15) sweat(ctx, 430, 1050, 1.3);
      cel(ctx, rrP(560, 1420, 440, 240, 12), PAL.wood, PAL.woodS, -6, -6, 4.5); // crate
      recorder(ctx, 780, 1300, 0.72, t, { level: 0.25 });
      mic(ctx, 860, 1000, 0.6, t, 300);
      ctx.restore();
      label(ctx, 'OFFICIAL SPEECHES', 540, 330, 62, t, w(3, 'speeches') - 0.15, PAL.paper);
      if (t > w(3, 'speeches') + 0.25) { const p = pop(t, w(3, 'speeches') + 0.25); ctx.save(); ctx.translate(540, 450); ctx.scale(p.sx, p.sy); kText(ctx, 'DONE', 0, 0, 70, { fill: '#cfe3c4', line: PAL.pine, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); }
      if (t > mt + 0.3) { stamp(ctx, 'STILL RECORDING', 540, 1500, 70, t, w(4, 'running') - 0.15, PAL.brick, -0.08); }
      vign(ctx, 0.35);
    } },

    // 3 CAR: inside the carriage, Hitler from behind, Mannerheim across the table
    { s: P_[5].s, draw(ctx, t) {
      const lt = t - P_[5].s, cam = Math.sin(lt * 0.5) * 12;
      ctx.save(); ctx.translate(cam, 0);
      car(ctx);
      trainWindow(ctx, 140, 470, 800, 360, t * 0.2, 17);
      lampGlow(ctx, 540, 450, 700, 0.3);
      cel(ctx, rrP(80, 900, 920, 420, 40), PAL.steel, PAL.steelS, -10, -10, 5); // seat back
      person(ctx, 640, 1560, 0.95, { hs: 'cap', capCol: PAL.grey, coat: '#8a8d7f', coatS: '#6f7265', stache: 'walrus', buttons: true, brows: t > w(7, 'soviet') ? 'worried' : 'stern', iris: '#7b8fa8', look: [-0.6, 0.3] });
      cel(ctx, rrP(-60, 1330, W + 120, 120, 16), PAL.woodL, PAL.wood, -6, -10, 5); // table
      seatedBack(ctx, 300, 1820, 1.15);
      ctx.restore();
      // calm bubble
      const tk = w(5, 'talks') - 0.15;
      if (t > tk) { const p = pop(t, tk); ctx.save(); ctx.translate(380, 300); ctx.scale(p.sx, p.sy); bubble(ctx, 0, 0, 560, 160, [-60, 1000 - 300]); wave(ctx, 0, 0, 460, 16, t); ctx.restore(); }
      // no shouting
      const ns = w(6, 'no') - 0.15;
      if (t > ns && t < w(7, 'soviet') - 0.3) {
        const p = pop(t, ns); ctx.save(); ctx.translate(820, 560); ctx.scale(p.sx, p.sy); megaphone(ctx, 0, 0, 1.1);
        ctx.strokeStyle = PAL.brick; ctx.lineWidth = 22; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-140, -110); ctx.lineTo(120, 110); ctx.stroke(); ctx.restore();
        label(ctx, 'QUIET TONE', 820, 740, 54, t, ns + 0.1, PAL.gold);
      }
      // thought: Soviet factories + tanks
      const so = w(7, 'soviet') - 0.2;
      if (t > so) {
        const p = pop(t, so); ctx.save(); ctx.translate(700, 620); ctx.scale(p.sx * 2.6, p.sy * 2.6); union(ctx, [cloudP(0, 0, 1.25)], C.white); ctx.restore();
        ctx.save(); ctx.translate(700, 640); ctx.scale(p.s, p.s);
        factory(ctx, -120, 60, 0.85, t);
        for (let i = 0; i < 4; i++) { const tx = 10 + i * 90 + ((t - so) * 60 % 90); if (tx < 330) tank(ctx, tx, 110, 0.55); }
        ctx.restore();
        label(ctx, 'SOVIET TANKS', 700, 940, 54, t, w(7, 'factories') - 0.15, PAL.paper);
      }
      const sk = w(7, 'shocked') - 0.15;
      if (t > sk) { kana(ctx, '!?', 470, 1060, 120, -0.15, pop(t, sk).s, '#ffe2a6'); impactLines(ctx, 300, 1360, 230, t, sk, 10, '#fff4dc'); }
      vign(ctx, 0.42);
    } },

    // 4 SPOTTED: clock to 11:00, guards turn, the gesture
    { s: P_[8].s, draw(ctx, t) {
      const cl = w(9, 'one') - 0.35; // close-up starts
      if (t < cl) {
        car(ctx); lampGlow(ctx, 540, 600, 700, 0.25);
        cel(ctx, rrP(580, 560, 400, 1100, 20), '#3d342c', '#2d261f', -6, -6, 5); // open door
        const gp = H.clamp((t - (w(8, 'guards') - 0.3)) / 0.3);
        person(ctx, 700, 1720, 1.0, { hs: 'cap', capCol: '#6c6e66', coat: PAL.grey, coatS: PAL.greyS, pants: PAL.greyS, buttons: true, eyes: t > w(8, 'spot') - 0.15 ? 'shock' : 'normal', brows: 'stern', look: [-1, 0], iris: '#6d7a6e' });
        person(ctx, 900, 1760, 1.0, { hs: 'cap', capCol: '#6c6e66', coat: PAL.grey, coatS: PAL.greyS, pants: PAL.greyS, buttons: true, eyes: t > w(8, 'spot') - 0.05 ? 'shock' : 'normal', brows: 'stern', look: [-1, 0], iris: '#6d7a6e', flip: -1 });
        recorder(ctx, 260, 1500, 0.62, t, { level: 0.3 }); mic(ctx, 210, 1300, 0.55, t, 280);
        label(ctx, 'SS GUARDS', 790, 700, 56, t, w(8, 'guards') - 0.15, PAL.paper);
        // clock
        const ck = H.clamp((t - P_[8].s) / (w(8, 'minutes') - P_[8].s + 0.2)), secs = Math.round(H.lerp(650, 660, ck));
        const p = pop(t, P_[8].s - 0.1); ctx.save(); ctx.translate(540, 400); ctx.scale(p.sx, p.sy);
        cel(ctx, rrP(-260, -120, 520, 220, 40), PAL.paper, PAL.paperS, -6, -6, 5);
        ctx.fillStyle = C.plum; ctx.font = `700 150px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(`${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}`, 0, 0); ctx.restore();
        if (t > w(8, 'spot') - 0.15) { kana(ctx, '!', 640, 960, 130, 0.1, pop(t, w(8, 'spot') - 0.15).s, '#ffe2a6'); kana(ctx, '!', 980, 1000, 110, -0.1, pop(t, w(8, 'spot') - 0.05).s, '#ffe2a6'); impactLines(ctx, 240, 1100, 160, t, w(8, 'mic') - 0.15, 10, '#fff4dc'); }
      } else {
        // close-up of one guard making the gesture
        sky(ctx, t, ['#4a4f50', '#5f6461', '#6d706a'], 41, { cloudA: 0.001 });
        speedLines(ctx, 540, 1000, t, 30, '#d8dccf', 480, 0.35);
        person(ctx, 540, 2280, 2.0, { hs: 'cap', capCol: '#6c6e66', coat: PAL.grey, coatS: PAL.greyS, buttons: true, brows: 'stern', iris: '#6d7a6e', mouth: 'flat' });
        const gs = w(9, 'finger') - 0.15, ge = w(9, 'throat') + 0.1, u = H.ease.inOut(H.clamp((t - gs) / (ge - gs)));
        const hx = H.lerp(340, 760, u), hy = 1540;
        if (u > 0.05 && u < 1) { ctx.save(); ctx.strokeStyle = 'rgba(255,244,220,0.8)'; ctx.lineWidth = 8; ctx.lineCap = 'round'; for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(hx - 120 - i * 30, hy - 30 + i * 30); ctx.lineTo(hx - 220 - i * 40, hy - 30 + i * 30); ctx.stroke(); } ctx.restore(); }
        hand(ctx, hx, hy, 1.6);
        stamp(ctx, 'STOP!', 540, 420, 130, t, w(9, 'throat') - 0.15, PAL.brick, -0.1);
        if (t > w(9, 'throat')) sweat(ctx, 860, 1000, 1.6);
      }
      vign(ctx, 0.45);
    } },

    // 5 SEALED: DESTROY IT? -> into the can, lid, SEALED
    { s: P_[10].s, draw(ctx, t) {
      sky(ctx, t, ['#5e6b76', '#7a8590', '#959ea6'], 51, { cloudA: 0.001 });
      // archive shelves
      for (let j = 0; j < 4; j++) { cel(ctx, rrP(-40, 560 + j * 300, W + 80, 26, 6), PAL.woodL, PAL.wood, -2, -2, 4); for (let i = 0; i < 7; i++) cel(ctx, rrP(30 + i * 150, 440 + j * 300, 110, 120, 10), i % 2 ? '#8e939c' : '#a7aab0', '#787d86', -3, -3, 3.5); }
      ctx.fillStyle = 'rgba(40,45,55,0.35)'; ctx.fillRect(0, 0, W, HH);
      const st = w(11, 'sealed') - 0.6, d = H.ease.in(H.clamp((t - st) / 0.45));
      canister(ctx, 540, 1460, 1.2, 0, t);
      if (d < 1) { const ry = H.lerp(1030, 1440, d); ctx.save(); ctx.translate(540, ry); ctx.scale(1, 1 - d * 0.6); reel(ctx, 0, 0, 230, t * 0.8); ctx.restore(); }
      if (t > w(10, 'destroyed') - 0.15 && t < w(11, 'instead') - 0.05) stamp(ctx, 'DESTROY IT?', 540, 520, 96, t, w(10, 'destroyed') - 0.15, PAL.brick, -0.08);
      if (t > w(11, 'instead') - 0.05) { const p = pop(t, w(11, 'instead') - 0.05); if (t < w(11, 'sealed') - 0.15) { ctx.save(); ctx.translate(540, 520); ctx.scale(p.sx, p.sy); kText(ctx, 'NO.', 0, 0, 140, { fill: TXT.fill, line: TXT.line, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); } }
      const lt0 = w(11, 'sealed') - 0.2, ld = H.ease.out(H.clamp((t - lt0) / 0.3));
      if (t > lt0 - 0.3) canLid(ctx, 540, H.lerp(700, 1435, ld), 1.2);
      if (t > lt0 + 0.3) { cel(ctx, ellP(540, 1435, 70, 30), PAL.brick, PAL.brickS, -3, -3, 4); impactLines(ctx, 540, 1435, 300, t, lt0 + 0.3, 12, '#fff4dc'); }
      if (t > w(11, 'sealed') - 0.15) stamp(ctx, 'SEALED', 540, 520, 130, t, w(11, 'sealed') - 0.05, PAL.brick, -0.08);
      label(ctx, 'DO NOT OPEN', 540, 1720 - 120, 60, t, w(11, 'never') - 0.15, PAL.gold);
      vign(ctx, 0.45);
    } },

    // 6 GANZ: film set, an actor listens to the tape
    { s: P_[12].s, draw(ctx, t) {
      sky(ctx, t, ['#3e4655', '#58606c', '#7b7a76'], 61, { cloudA: 0.001 });
      lampGlow(ctx, 540, 900, 800, 0.35);
      ground(ctx, 1500, '#5a5148', '#4a423a');
      person(ctx, 360, 1760, 1.1, { hs: 'bob', hair: '#b9b2a6', coat: '#4f5560', coatS: '#3d424b', eyes: 'blink', brows: 'stern', mouth: 'flat' });
      headphones(ctx, 360, 1760 - 500 * 1.1 - 10, 1.1);
      recorder(ctx, 790, 1440, 0.62, t, { level: 0.3 });
      // tape sound travelling to the headphones
      for (let i = 0; i < 4; i++) { const u = ((t * 0.8 + i / 4) % 1); ctx.save(); ctx.globalAlpha = 1 - u; ctx.strokeStyle = '#ffe2a6'; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(H.lerp(720, 520, u), H.lerp(1260, 1180, u), 30 + u * 20, Math.PI * 0.7, Math.PI * 1.3); ctx.stroke(); ctx.restore(); }
      const cp = pop(t, w(12, 'actor') - 0.15);
      if (cp.s > 0) { const open = t < w(12, 'bruno') - 0.1 ? 0.45 : 0.45 * (1 - H.clamp((t - (w(12, 'bruno') - 0.1)) / 0.12)); ctx.save(); ctx.translate(540, 440); ctx.scale(cp.sx, cp.sy); clapper(ctx, 0, 0, 1.4, open); ctx.restore(); }
      label(ctx, 'BRUNO GANZ', 360, 1000, 60, t, w(12, 'bruno') - 0.15, PAL.gold);
      label(ctx, 'STUDYING THE TAPE', 720, 1640, 48, t, w(12, 'studied') - 0.15, PAL.paper);
      twinkles(ctx, W, HH, t, 66, 6, (x, y) => y > 300 && y < 1700);
      vign(ctx, 0.4);
    } },

    // 7 END: loop back to the recorder
    { s: P_[13].s, draw(ctx, t) {
      car(ctx);
      trainWindow(ctx, 170, 560, 740, 330, t, 5);
      lampGlow(ctx, 540, 520, 620, 0.32);
      cel(ctx, rrP(-40, 1330, W + 80, 600, 0), PAL.wood, PAL.woodS, 0, -14, 5);
      recorder(ctx, 560, 1260, 1.42, t, { level: 0.3 });
      mic(ctx, 150, 1560, 0.95, t, 480);
      big(ctx, 'CALM VOICE', 540, 330, 120, t, w(13, 'calm') - 0.15);
      label(ctx, 'LESS SCARY?', 290, 500, 60, t, w(13, 'less') - 0.15, '#c9dccb');
      label(ctx, 'MORE SCARY?', 790, 610, 60, t, w(13, 'more') - 0.15, '#e8c2b4');
      if (t > w(13, 'more') + 0.2) still(ctx, 'COMMENT BELOW', 540, 1620, 84, {});
      vign(ctx, 0.42);
    } },
  ];
  function lt(t) { return t - P_[3].s; }

  const CUTS = scenes.slice(1).map((sc) => { const prev = P_.filter((p) => p.e <= sc.s + 0.01).pop(); return { t: (prev.e + sc.s) / 2 }; });
  const CUTW = 0.42;
  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) { scenes[i - 1].draw(ctx, t); tapeWipe(ctx, (t - (c.t - CUTW / 2)) / CUTW, () => scenes[i].draw(ctx, t)); }
    else scenes[i].draw(ctx, t);
  }
  function thumbnail(ctx) { scenes[0].draw(ctx, 0.0); }

  function scoreSound(k) {
    const pop_ = (at, f = 600, g = 0.5, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const hit = (at) => { k.play('thud', at, { f: 110, gain: 0.5 }); pop_(at, 500, 0.5, 0, false); };
    CUTS.forEach((c) => { k.noise(c.t - 0.2, { dur: 0.4, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.4, 1400]], q: 0.9, gain: 0.26, a: 0.07 }); k.play('thud', c.t + 0.12, { f: 95, gain: 0.25 }); });
    // hook: tape hiss under the recorder, ticks of the reels
    k.noise(0.0, { dur: 5.8, color: 'pink', filter: 'highpass', f: 3000, gain: 0.05, a: 0.05 });
    k.play('whoosh', 0.02, { dur: 0.6, gain: 0.25 }); pop_(w(0, 'only') - 0.15, 600, 0.5, 0.3, false);
    hit(w(0, 'shouting') - 0.15); k.play('stamp', w(1, 'never') - 0.15, { gain: 0.55 }); pop_(w(1, 'hear') - 0.15, 700, 0.4, 0.4);
    // trip
    k.play('whoosh', P_[2].s + 0.3, { dur: 1.4, gain: 0.3 }); hit(w(2, '1942') - 0.15); pop_(w(2, 'finland') - 0.15, 600, 0.5, 0, false);
    pop_(w(2, 'mannerheims') - 0.2, 500, 0.5, -0.3, false); k.play('ding', w(2, 'birthday') - 0.15, { f: 'E5', gain: 0.25 });
    // engineer
    pop_(w(3, 'speeches') - 0.15, 600, 0.5, 0, false); k.play('ding', w(3, 'speeches') + 0.25, { f: 'C5', gain: 0.2 });
    k.play('whoosh', w(4, 'mic') - 0.25, { dur: 0.6, gain: 0.3 }); k.play('stamp', w(4, 'running') - 0.15, { gain: 0.55 });
    for (let i = 0; i < 6; i++) k.play('tick', w(4, 'running') + i * 0.5, { f: 1200, gain: 0.12, minor: true });
    // car
    pop_(w(5, 'talks') - 0.15, 600, 0.45, -0.3); k.play('error', w(6, 'no') - 0.15, { f: 'D3', gain: 0.3 }); pop_(w(6, 'no') - 0.05, 500, 0.4, 0.3);
    k.play('whoosh', w(7, 'soviet') - 0.3, { dur: 0.5, gain: 0.3 }); for (let i = 0; i < 6; i++) k.play('tick', w(7, 'factories') - 0.1 + i * 0.12, { f: 700, gain: 0.15, minor: true });
    k.play('impact', w(7, 'shocked') - 0.15, { gain: 0.5 });
    // spotted
    for (let i = 0; i < 10; i++) k.play('tick', P_[8].s + i * 0.1, { f: 1500, gain: 0.18, minor: true });
    k.play('ding', w(8, 'minutes') - 0.1, { f: 'A4', gain: 0.3 }); hit(w(8, 'spot') - 0.15);
    k.play('whoosh', w(9, 'one') - 0.35, { dur: 0.4, gain: 0.3 }); k.play('whoosh', w(9, 'finger') - 0.1, { dur: 0.8, gain: 0.35 }); k.play('stamp', w(9, 'throat') - 0.15, { gain: 0.6 });
    // sealed
    k.play('stamp', w(10, 'destroyed') - 0.15, { gain: 0.55 }); k.play('error', w(11, 'instead') - 0.05, { f: 'F3', gain: 0.25 });
    k.play('whoosh', w(11, 'sealed') - 0.6, { dur: 0.4, gain: 0.3 }); k.play('impact', w(11, 'sealed') + 0.1, { gain: 0.6 }); pop_(w(11, 'never') - 0.15, 550, 0.5, 0, false);
    // ganz
    k.play('impact', w(12, 'bruno') - 0.1, { gain: 0.35 }); pop_(w(12, 'actor') - 0.15, 600, 0.45); pop_(w(12, 'studied') - 0.15, 650, 0.4, 0.3);
    // end
    k.play('whoosh', P_[13].s, { dur: 0.5, gain: 0.25 }); pop_(w(13, 'less') - 0.15, 600, 0.5, -0.4); pop_(w(13, 'more') - 0.15, 650, 0.5, 0.4);
    k.play('ding', w(13, 'more') + 0.25, { f: 'G4', gain: 0.3 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
