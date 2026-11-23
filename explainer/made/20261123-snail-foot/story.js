// ===== Kawaii Anime, vertical: "How does a snail crawl on just one foot?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || "") + "";
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


  const W = 1080, HH = 1920;
  const P_ = [{"s":0.25,"e":2.25,"text":"A snail never lifts its one foot.","words":[["a",0.25],["snail",0.33],["never",0.71],["lifts",1.09],["its",1.48],["one",1.71],["foot",1.94]]},{"s":2.62,"e":4.13,"text":"Can you guess how it moves?","words":[["can",2.62],["you",2.83],["guess",3.05],["how",3.41],["it",3.62],["moves",3.77]]},{"s":4.7,"e":7.05,"text":"Put a snail on glass and look underneath.","words":[["put",4.7],["a",4.91],["snail",4.98],["on",5.34],["glass",5.48],["and",5.84],["look",6.05],["underneath",6.34]]},{"s":7.41,"e":9.45,"text":"Dark stripes ripple along the sole,","words":[["dark",7.41],["stripes",7.69],["ripple",8.18],["along",8.61],["the",8.96],["sole",9.17]]},{"s":9.81,"e":11.29,"text":"from the tail toward the head.","words":[["from",9.81],["the",10.06],["tail",10.24],["toward",10.49],["the",10.86],["head",11.04]]},{"s":11.71,"e":13.13,"text":"Those are waves of muscle,","words":[["those",11.71],["are",12.05],["waves",12.25],["of",12.59],["muscle",12.72]]},{"s":13.47,"e":15.14,"text":"squeezing and stretching the foot.","words":[["squeezing",13.47],["and",13.99],["stretching",14.16],["the",14.74],["foot",14.91]]},{"s":15.6,"e":17.37,"text":"But the real trick is the slime.","words":[["but",15.6],["the",15.81],["real",16.03],["trick",16.31],["is",16.66],["the",16.8],["slime",17.02]]},{"s":17.78,"e":19.92,"text":"Under the still parts of the foot,","words":[["under",17.78],["the",18.18],["still",18.42],["parts",18.82],["of",19.21],["the",19.37],["foot",19.61]]},{"s":19.98,"e":21.44,"text":"it's thick and sticky, like glue.","words":[["its",19.98],["thick",20.16],["and",20.45],["sticky",20.63],["like",20.97],["glue",21.21]]},{"s":21.82,"e":23.14,"text":"Where a wave pushes on it,","words":[["where",21.82],["a",22.15],["wave",22.21],["pushes",22.48],["on",22.87],["it",23.0]]},{"s":23.49,"e":25.06,"text":"it turns runny and slippery.","words":[["it",23.49],["turns",23.62],["runny",23.97],["and",24.31],["slippery",24.51]]},{"s":25.42,"e":27.72,"text":"So each wave slides forward on liquid,","words":[["so",25.42],["each",25.57],["wave",25.86],["slides",26.16],["forward",26.61],["on",27.12],["liquid",27.27]]},{"s":28.16,"e":29.85,"text":"while the rest stays stuck down.","words":[["while",28.16],["the",28.48],["rest",28.68],["stays",28.94],["stuck",29.26],["down",29.59]]},{"s":30.32,"e":31.9,"text":"Glue, slide, glue, slide.","words":[["glue",30.32],["slide",30.67],["glue",31.11],["slide",31.46]]},{"s":32.18,"e":34.79,"text":"That grip lets a snail climb straight up a stem,","words":[["that",32.18],["grip",32.45],["lets",32.73],["a",33.0],["snail",33.07],["climb",33.41],["straight",33.76],["up",34.31],["a",34.44],["stem",34.51]]},{"s":35.24,"e":36.56,"text":"or hang under a leaf.","words":[["or",35.24],["hang",35.4],["under",35.73],["a",36.14],["leaf",36.23]]},{"s":36.99,"e":38.27,"text":"The catch? It's slow.","words":[["the",36.99],["catch",37.25],["its",37.67],["slow",37.93]]},{"s":38.65,"e":40.66,"text":"Roughly one millimetre a second.","words":[["roughly",38.65],["one",39.17],["millimetre",39.4],["a",40.14],["second",40.21]]},{"s":41.1,"e":42.51,"text":"So would you trade your two feet","words":[["so",41.1],["would",41.21],["you",41.48],["trade",41.64],["your",41.91],["two",42.13],["feet",42.29]]},{"s":42.59,"e":43.78,"text":"for one slimy one?","words":[["for",42.59],["one",42.85],["slimy",43.1],["one",43.53]]}];

  // ---------- timing (from phrases.json) ----------
  const BEATS = [
    { id: 'hook', s: P_[0].s, e: P_[1].e, on: 'chibi snail, ONE FOOT, never lifts off, HOW?' },
    { id: 'glass', s: P_[2].s, e: P_[4].e, on: 'snail on a glass pane, flips to the sole seen from below, stripes ripple TAIL -> HEAD' },
    { id: 'muscle', s: P_[5].s, e: P_[6].e, on: 'MUSCLE WAVES, SQUEEZE / STRETCH' },
    { id: 'slime', s: P_[7].s, e: P_[9].e, on: 'cutaway: foot over a slime layer, SLIME, still parts = GLUE (sticky)' },
    { id: 'runny', s: P_[10].s, e: P_[11].e, on: 'a wave pushes: slime under it turns RUNNY / SLIPPERY' },
    { id: 'slide', s: P_[12].s, e: P_[13].e, on: 'wave slides FORWARD on liquid, rest STUCK' },
    { id: 'rhythm', s: P_[14].s, e: P_[14].e, on: 'GLUE / SLIDE / GLUE / SLIDE, snail inches along' },
    { id: 'climb', s: P_[15].s, e: P_[16].e, on: 'climbs STRAIGHT UP a stem, hangs UPSIDE DOWN under a leaf' },
    { id: 'slow', s: P_[17].s, e: P_[18].e, on: 'THE CATCH: ruler, ~1 mm / second' },
    { id: 'end', s: P_[19].s, e: P_[20].e, on: 'kid with 2 FEET vs snail 1 SLIMY foot, comment question' },
  ];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.05, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = C.butter, out) => { let p = pop(t, t0); if (p.s <= 0) return; if (out != null) { const k = popOut(t, out); if (k <= 0) return; p = { s: p.s * k, sx: p.sx * k, sy: p.sy * k }; } ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  function bgV(ctx, t, th, seed) { ctx.save(); ctx.scale(1.5, 1.5); bg(ctx, W / 1.5, HH / 1.5, t, th, seed); ctx.restore(); }
  const numPop = (ctx, str, x, y, size, t, t0, o = {}) => { const n = pop(t, t0, 1.3); if (n.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(n.sx, n.sy); kText(ctx, str, 0, 0, size, { fill: o.fill || C.white, line: o.line || C.skyD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); };
  const grow = (t, t0, d) => H.ease.out(H.clamp((t - t0) / d));

  // ---------- palette for this film ----------
  const BODY = { b: '#ffd8c4', s: '#f2ae90' }, SOLE = { b: '#ffc9b3', s: '#eea086', band: '#c9776a' };
  const SHELL = { b: '#ffcf8a', s: '#eaa25c', band: '#f59bb5' };
  const SLIME = { glue: '#a8ecd2', glueS: '#6fd0ad', run: '#bfe6ff', runS: '#7fc2ee' };
  const SKIN = { b: '#ffe2cf', s: '#f2b996' }, HAIR = { b: '#7a4a5e', s: '#5e3448' };
  const LEAF = { b: '#aee7a0', s: '#78c972', vein: '#5aa957' };

  // ---------- the snail: local units, facing right, sole on y=0, (0,0) under the shell ----------
  function snail(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    if (P.flipY) ctx.scale(1, -1);
    if (P.shadow !== false && !P.flipY) { ctx.fillStyle = 'rgba(90,54,89,0.13)'; ctx.fill(ellP(-10, 10, 220, 18)); }
    const sq = P.sq || [1, 1]; ctx.scale(sq[0], sq[1]);
    const st = P.stretch || 0; // inching: the front reaches forward
    const front = 175 + st * 40;
    // eye stalks (behind head outline)
    const wig = Math.sin((P.t || 0) * 5) * 6;
    const stalks = [[118, -132, 128 + wig, -262], [146, -128, 192 + wig * 0.7, -240]];
    ctx.save(); ctx.lineCap = 'round';
    for (const [x0, y0, x1, y1] of stalks) { ctx.beginPath(); ctx.moveTo(x0, y0); ctx.quadraticCurveTo((x0 + x1) / 2 - 6, (y0 + y1) / 2, x1, y1); ctx.strokeStyle = C.plum; ctx.lineWidth = 30; ctx.stroke(); ctx.strokeStyle = BODY.b; ctx.lineWidth = 20; ctx.stroke(); }
    // short lower tentacles
    for (const [x0, y0, x1, y1] of [[front - 10, -50, front + 34, -40], [front - 22, -40, front + 18, -16]]) { ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.strokeStyle = C.plum; ctx.lineWidth = 22; ctx.stroke(); ctx.strokeStyle = BODY.b; ctx.lineWidth = 13; ctx.stroke(); }
    ctx.restore();
    // body / foot: long soft slug shape with a raised head at the front
    const b = new Path2D();
    b.moveTo(-235, 0);
    b.bezierCurveTo(-200, -46, -120, -58, 40, -62);
    b.bezierCurveTo(80, -64, 90, -150, 140, -158);
    b.bezierCurveTo(196, -164, front + 18, -110, front + 8, -40);
    b.bezierCurveTo(front + 2, -6, front - 20, 0, front - 40, 0);
    b.closePath();
    cel(ctx, b, BODY.b, BODY.s, -8, -10, 4.5);
    // sole stripe (the foot edge)
    ctx.save(); ctx.clip(b); ctx.fillStyle = H.rgba(SOLE.s, 0.55); ctx.fillRect(-240, -14, 460, 16); ctx.restore();
    shine(ctx, 136, -132, 16, 8, -0.4);
    // shell: butter spiral
    const shx = -40, shy = -150, R = 108;
    const sh = ellP(shx, shy, R, R * 0.98);
    cel(ctx, sh, SHELL.b, SHELL.s, -12, -12, 4.5);
    ctx.save(); ctx.clip(sh); ctx.lineCap = 'round';
    ctx.beginPath();
    for (let a = 0; a <= Math.PI * 5.4; a += 0.08) { const r = R * 0.95 * (1 - a / (Math.PI * 5.8)), px = shx + 6 + Math.cos(a + 0.3) * r, py = shy + 4 + Math.sin(a + 0.3) * r; a === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py); }
    ctx.strokeStyle = SHELL.band; ctx.lineWidth = 15; ctx.stroke(); ctx.strokeStyle = C.plum; ctx.lineWidth = 4.5; ctx.stroke();
    ctx.restore(); ol(ctx, sh);
    shine(ctx, shx - 52, shy - 54, 22, 11, -0.7); shine(ctx, shx - 22, shy - 76, 6, 6, 0);
    // eyes on the stalk tips
    const ek = P.eyes || 'normal', look = P.look || [0.3, 0];
    for (const [, , x1, y1] of stalks) { cel(ctx, ellP(x1, y1, 30, 30), BODY.b, BODY.s, -4, -4, 4); eye(ctx, x1, y1 + 2, 19, 24, '#3fb98e', ek, 1, look); }
    blush(ctx, 160, -92, 16, 9);
    mouth(ctx, front - 18, -76, 10, P.mouth || 'w');
    ctx.restore();
  }
  // slime trail: glossy ribbon behind the snail
  function trail(ctx, x0, x1, y, h = 16) {
    if (x1 <= x0) return;
    const p = rrP(x0, y - h / 2, x1 - x0, h, h / 2);
    ctx.save(); ctx.fillStyle = H.rgba(SLIME.glue, 0.75); ctx.fill(p); ctx.strokeStyle = H.rgba(SLIME.glueS, 0.9); ctx.lineWidth = 3; ctx.stroke(p);
    ctx.fillStyle = 'rgba(255,255,255,0.8)'; for (let x = x0 + 30; x < x1 - 20; x += 90) ctx.fill(ellP(x, y - 3, 14, 3)); ctx.restore();
  }
  function kid(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    if (P.shadow !== false) { ctx.fillStyle = 'rgba(90,54,89,0.14)'; ctx.fill(ellP(0, 8, 120, 16)); }
    ctx.translate(0, -(P.lift || 0));
    const legH = 100;
    for (const sd of [-1, 1]) { cel(ctx, rrP(sd * 34 - 18, -legH, 36, legH, 16), SKIN.b, SKIN.s, -3, -3, 4); cel(ctx, rrP(sd * 34 - 30, -22, 60, 26, 13), C.pinkD, C.pinkS, -2, -2, 4); }
    ctx.translate(0, -legH);
    cel(ctx, rrP(-70, -140, 140, 150, 56), C.sky, C.skyS, -8, -8, 4.5);
    for (const sd of [-1, 1]) cel(ctx, ellP(sd * 82, -70, 20, 40, sd * 0.4), SKIN.b, SKIN.s, -3, -3, 4);
    const hy = -230;
    union(ctx, [ellP(0, hy - 10, 112, 100)], HAIR.b, 5);
    cel(ctx, ellP(0, hy + 10, 100, 90), SKIN.b, SKIN.s, -9, -9, 4.5);
    const cap = new Path2D(); cap.moveTo(-104, hy - 4); cap.bezierCurveTo(-110, hy - 120, 110, hy - 120, 104, hy - 4); cap.bezierCurveTo(70, hy - 60, 20, hy - 70, 0, hy - 50); cap.bezierCurveTo(-20, hy - 70, -70, hy - 60, -104, hy - 4); cap.closePath();
    cel(ctx, cap, HAIR.b, HAIR.s, -6, -6, 4.5);
    eye(ctx, -40, hy + 18, 22, 29, '#6aa8e0', P.eyes || 'normal', -1, P.look || [0, 0]); eye(ctx, 40, hy + 18, 22, 29, '#6aa8e0', P.eyes || 'normal', 1, P.look || [0, 0]);
    blush(ctx, -66, hy + 52, 16, 9); blush(ctx, 66, hy + 52, 16, 9);
    mouth(ctx, 0, hy + 62, 13, P.mouth || 'w');
    ctx.restore();
  }
  function choice(ctx, x, y, label_, fill, t, t0, size = 74) {
    const p = pop(t, t0, 1.2); if (p.s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy);
    cel(ctx, rrP(-200, -78, 400, 156, 78), fill, H.rgba(H.mix(fill, C.plum, 0.18)), -6, -6, 5);
    kText(ctx, label_, 0, size * 0.34, size, { line: C.plum, fill: C.white, lw: 0.2, shadow: false });
    ctx.restore();
  }
  function qmark(ctx, x, y, sz, t, t0, ph = 0) {
    const p = pop(t, t0, 1.4); if (p.s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(0.14 * Math.sin(t * 9 + ph)); ctx.scale(p.sx, p.sy);
    kText(ctx, '?', 0, 0, sz, { fill: C.butter, line: C.pinkD, outer: C.plum, lw: 0.2 }); ctx.restore();
  }
  // a chunky candy arrow (straight) that pops in
  function arrow(ctx, x0, y0, x1, y1, col, prog) {
    if (prog <= 0) return;
    const pts = [[x0, y0], [H.lerp(x0, x1, 0.5), H.lerp(y0, y1, 0.5)], [x1, y1]];
    dotted(ctx, pts, prog, col, 9, 30, 1.4);
  }

  // ---------- scenes ----------
  const scenes = [
    // 0: hook - a snail on one foot that never lifts
    { s: 0, draw(ctx, t) {
      bgV(ctx, t, TH.pink, 31);
      twinkles(ctx, W, HH, t, 11, 12, (x, y) => y > 700 && y < 1500);
      const fy = 1300;
      ctx.save(); ctx.fillStyle = '#ffd0df'; ctx.fill(rrP(-40, fy, W + 80, 700, 0)); ctx.restore();
      cel(ctx, rrP(-40, fy - 6, W + 80, 40, 20), '#ffc2d6', C.pinkS, 0, -6, 5);
      const ld = pop(t, 0.05, 1.0);
      const inch = Math.max(0, Math.sin(t * 2.4)) * 14;
      trail(ctx, 0, 300 + inch, fy + 6, 18);
      if (ld.s > 0) {
        const lookUp = t > P_[1].s - 0.1;
        snail(ctx, 560 + inch, fy + 4, 1.55 * ld.s, { t, sq: [ld.sx / ld.s, ld.sy / ld.s], stretch: inch / 14, eyes: (t > 1.6 && t < 1.74) ? 'blink' : 'normal', look: lookUp ? [0.2, -0.8] : [0.4, 0.2], mouth: lookUp ? 'o' : 'w' });
      }
      big(ctx, 'ONE FOOT', 540, 330, 150, t, w(0, 'one') - 0.15, { line: C.pinkD, fill: C.white });
      // the foot: dotted arrow + tag
      arrow(ctx, 230, 1540, 360, 1330, C.pinkD, grow(t, w(0, 'foot') - 0.15, 0.3));
      label(ctx, 'FOOT', 220, 1580, 60, t, w(0, 'foot') - 0.1, C.butter);
      // never lifts: a glued-down badge
      if (t > w(0, 'never') - 0.15) {
        label(ctx, 'never lifts off!', 540, 520, 62, t, w(0, 'never') - 0.15, C.mint, P_[1].s - 0.1);
        for (let i = 0; i < 3; i++) { const p = pop(t, w(0, 'lifts') + i * 0.08); if (p.s > 0) sparkle(ctx, 460 + i * 170, 1320 + (i % 2) * 20, 22 * p.s, i % 2 ? C.white : C.butterD, 0, 3.5); }
      }
      // how?
      big(ctx, 'HOW?!', 540, 560, 170, t, w(1, 'how') - 0.15, { line: C.lavD, fill: C.butter });
      qmark(ctx, 880, 780, 130, t, w(1, 'guess') - 0.12, 0);
      qmark(ctx, 180, 820, 96, t, w(1, 'moves') - 0.12, 1.7);
    } },

    // 1: on glass, flip to see the sole; stripes ripple tail -> head; muscle waves
    { s: P_[2].s, draw(ctx, t) {
      bgV(ctx, t, TH.lav, 41);
      const flipT = w(2, 'underneath') - 0.1, fu = H.clamp((t - flipT) / 0.5);
      // the glass pane
      const gp = pop(t, w(2, 'glass') - 0.15, 0.8);
      const drawPane = () => {
        if (gp.s <= 0) return;
        ctx.save(); ctx.translate(540, 1060); ctx.scale(gp.sx, gp.sy);
        const pane = rrP(-430, -640, 860, 1280, 50);
        ctx.fillStyle = 'rgba(198,231,255,0.55)'; ctx.fill(pane); ol(ctx, pane, 6, C.skyD);
        ctx.save(); ctx.clip(pane); ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.lineCap = 'round';
        for (const [x, l, lw] of [[-300, 260, 22], [-220, 160, 12], [250, 220, 18]]) { ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(x, -520); ctx.lineTo(x + l * 0.5, -520 + l); ctx.stroke(); }
        ctx.restore(); ctx.restore();
      };
      drawPane();
      if (gp.s > 0) label(ctx, 'GLASS', 540, 330, 66, t, w(2, 'glass') - 0.12, C.sky, flipT);
      if (fu < 0.5) {
        // side view sitting on the glass edge, then squashing flat for the flip
        const k = 1 - fu * 2;
        const ld = pop(t, P_[2].s - 0.1, 1.0);
        ctx.save(); ctx.translate(540, 1380); ctx.scale(1, Math.max(0.02, k)); ctx.translate(-540, -1380);
        snail(ctx, 560, 1380, 1.5 * ld.s, { t, look: [0, 0.9], mouth: 'w' });
        ctx.restore();
      } else {
        // the sole, seen from below through the glass
        const k = (fu - 0.5) * 2, sp = pop(t, flipT + 0.25, 0.8);
        ctx.save(); ctx.translate(540, 1080); ctx.scale(Math.max(0.02, k) * (sp.sx / Math.max(sp.s, 0.01) || 1), 1);
        const sole = new Path2D(); sole.ellipse(0, 0, 230, 560, 0, 0, TAU);
        const head = new Path2D(); head.ellipse(0, -560, 150, 90, 0, Math.PI, TAU);
        // head-end tentacle stubs
        for (const sd of [-1, 1]) cel(ctx, ellP(sd * 100, -640, 26, 46, sd * 0.3), BODY.b, BODY.s, -3, -3, 4);
        cel(ctx, sole, SOLE.b, SOLE.s, -10, -10, 0);
        // stripes travel from tail (bottom) to head (top)
        const st0 = w(3, 'stripes') - 0.15;
        if (t > st0) {
          const vis = grow(t, st0, 0.35), gap = 170, speed = 120;
          ctx.save(); ctx.clip(sole);
          for (let i = -1; i < 9; i++) {
            const yy = 560 - (((i * gap) + (t - st0) * speed) % (gap * 8 + 120));
            ctx.fillStyle = H.rgba(SOLE.band, 0.75 * vis);
            ctx.beginPath(); ctx.ellipse(0, yy, 250, 34, 0, 0, TAU); ctx.fill();
            ctx.fillStyle = H.rgba('#ffffff', 0.35 * vis); ctx.beginPath(); ctx.ellipse(-60, yy - 40, 90, 8, 0, 0, TAU); ctx.fill();
          }
          ctx.restore();
        }
        ol(ctx, sole, 4.5);
        shine(ctx, -120, -300, 26, 70, 0.1, 0.6);
        ctx.restore();
        label(ctx, 'SOLE', 870, 1080, 58, t, w(3, 'sole') - 0.12, C.butter);
        label(ctx, 'TAIL', 540, 1740 - 70, 56, t, w(4, 'tail') - 0.12, C.pink);
        label(ctx, 'HEAD', 540, 380, 56, t, w(4, 'head') - 0.12, C.mint);
        // dotted candy arrow, tail -> head, beside the sole
        arrow(ctx, 200, 1500, 200, 620, C.pinkD, grow(t, w(4, 'toward') - 0.15, 0.6));
        // muscle waves
        big(ctx, 'MUSCLE', 540, 250, 116, t, w(5, 'muscle') - 0.15, { line: C.lavD, fill: C.white });
        label(ctx, 'WAVES', 880, 760, 58, t, w(5, 'waves') - 0.12, C.lav);
        // squeeze / stretch: arrows on a band
        if (t > w(6, 'squeezing') - 0.15) {
          const p = pop(t, w(6, 'squeezing') - 0.15, 1.2);
          ctx.save(); ctx.translate(870, 1350); ctx.scale(p.sx, p.sy);
          tag(ctx, 0, 0, 'SQUEEZE', C.pink, 1, 50);
          ctx.restore();
          const q = pop(t, w(6, 'stretching') - 0.15, 1.2);
          if (q.s > 0) { ctx.save(); ctx.translate(870, 1490); ctx.scale(q.sx, q.sy); tag(ctx, 0, 0, 'STRETCH', C.sky, 1, 50); ctx.restore(); }
        }
      }
    } },

    // 2: cutaway - foot over the slime: glue under still parts, runny under the wave
    { s: P_[7].s, draw(ctx, t) {
      bgV(ctx, t, TH.mint, 51);
      const gy = 1350, sy0 = 1236; // ground top, slime top
      // ground
      cel(ctx, rrP(-40, gy, W + 80, 700, 30), '#e8dcff', C.lavS, 0, -10, 5);
      const r = H.rng(9); ctx.fillStyle = '#d7c8fb'; for (let i = 0; i < 18; i++) ctx.fill(ellP(r.range(0, W), r.range(gy + 60, 1900), r.range(8, 18), r.range(6, 12)));
      // waves travelling tail(left) -> head(right)
      const wv0 = w(10, 'wave') - 0.15;
      const per = 2.0, waveX = (k) => -60 + ((t - wv0) / per - k) * 1150;
      const waves = []; if (t > wv0) for (let k = 0; k < 8; k++) { const x = waveX(k); if (x > -80 && x < 1120) waves.push(x); }
      const runny = (x) => waves.some((wx) => Math.abs(x - wx) < 120);
      // slime layer draws on
      const sl = grow(t, w(7, 'slime') - 0.15, 0.6);
      if (sl > 0) {
        const x1 = -40 + (W + 80) * sl;
        for (let x = -40; x < x1; x += 12) {
          const rn = runny(x);
          ctx.fillStyle = rn ? SLIME.run : SLIME.glue;
          const h = gy - sy0 + 6;
          ctx.fillRect(x, sy0, 13, h);
        }
        // runny ripples
        ctx.save(); ctx.strokeStyle = SLIME.runS; ctx.lineWidth = 6; ctx.lineCap = 'round';
        for (const wx of waves) for (let j = 0; j < 2; j++) { ctx.beginPath(); for (let x = wx - 110; x <= wx + 110; x += 8) { const yy = sy0 + 30 + j * 34 + Math.sin(x * 0.08 - t * 12) * 6; x === wx - 110 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy); } ctx.stroke(); }
        ctx.restore();
        // glue dots in the still slime
        if (t > w(9, 'thick') - 0.15) { ctx.fillStyle = SLIME.glueS; for (let x = 10; x < x1; x += 46) if (!runny(x)) ctx.fill(ellP(x, sy0 + 34 + ((x / 46) % 2) * 12, 7, 7)); }
        ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-40, sy0); ctx.lineTo(x1, sy0); ctx.stroke(); ctx.restore();
      }
      // the big snail: its foot sits on the slime
      const bx = 470 + (t > wv0 ? (t - wv0) * 4 : 0);
      snail(ctx, bx, sy0 + 2, 2.5, { t, shadow: false, look: [0.3, 0.6], mouth: t > w(11, 'runny') - 0.2 && t < P_[12].s ? 'o' : 'w', eyes: t > w(9, 'glue') && t < w(9, 'glue') + 0.6 ? 'happy' : 'normal' });
      // wave in the foot: the sole bulges as the muscle squeezes, with a darker contracted ring
      for (const wx of waves) { if (wx < bx - 560 || wx > bx + 400) continue; ctx.save(); ctx.translate(wx, sy0 + 2); const p = ellP(0, -10, 105, 26); cel(ctx, p, SOLE.b, SOLE.s, -4, -4, 4.5); ctx.fillStyle = H.rgba(SOLE.band, 0.6); ctx.fill(ellP(0, -12, 50, 12)); ctx.restore(); }
      // labels
      big(ctx, 'SLIME', 540, 300, 170, t, w(7, 'slime') - 0.15, { line: C.mintD, fill: C.white });
      label(ctx, 'still', 250, 500, 58, t, w(8, 'still') - 0.12, C.white, wv0);
      label(ctx, 'thick + sticky', 600, 1500, 60, t, w(9, 'thick') - 0.12, C.mint, P_[10].s);
      if (t > w(9, 'glue') - 0.15 && t < P_[10].s) { numPop(ctx, 'GLUE!', 540, 520, 150, t, w(9, 'glue') - 0.15, { line: C.mintD, fill: C.butter }); kana(ctx, 'stick!', 820, 640, 70, 0.12, pop(t, w(9, 'glue')).s, C.mint); }
      // runny tag rides the newest visible wave
      if (t > w(11, 'runny') - 0.15 && waves.length) {
        const wx = H.clamp(waves[waves.length - 1], 200, 880);
        label(ctx, 'RUNNY', wx, 1470, 60, t, w(11, 'runny') - 0.12, C.sky);
        arrow(ctx, wx, 1420, wx, sy0 + 70, C.skyD, grow(t, w(11, 'runny') - 0.1, 0.25));
      }
      if (t > w(11, 'slippery') - 0.15 && t < P_[12].s + 0.1) { numPop(ctx, 'SLIPPERY!', 540, 540, 120, t, w(11, 'slippery') - 0.15, { line: C.skyD, fill: C.white }); kana(ctx, 'sloosh~', 800, 660, 62, 0.1, pop(t, w(11, 'slippery')).s, C.sky); }
      // slides forward on liquid / rest stays stuck
      if (t > w(12, 'forward') - 0.15) {
        arrow(ctx, 260, 560, 820, 560, C.pinkD, grow(t, w(12, 'forward') - 0.15, 0.4));
        label(ctx, 'FORWARD', 540, 470, 62, t, w(12, 'forward') - 0.1, C.pink);
      }
      label(ctx, 'on liquid', 540, 660, 54, t, w(12, 'liquid') - 0.12, C.sky);
      if (t > w(13, 'stuck') - 0.15) { label(ctx, 'STUCK', 230, 1610, 56, t, w(13, 'stuck') - 0.12, C.mint); label(ctx, 'STUCK', 850, 1610, 56, t, w(13, 'stuck') - 0.04, C.mint); }
    } },

    // 3: glue, slide, glue, slide - the snail inches along
    { s: P_[14].s, draw(ctx, t) {
      bgV(ctx, t, TH.butter, 61);
      const fy = 1250;
      cel(ctx, rrP(-40, fy, W + 80, 800, 30), '#ffe5a8', C.butterS, 0, -10, 5);
      const ws = [w(14, 'glue'), w(14, 'slide'), w(14, 'glue', 2), w(14, 'slide', 2)];
      let x = 330; ws.forEach((wt, i) => { if (i % 2) x += 120 * H.ease.inOut(H.clamp((t - wt + 0.1) / 0.3)); });
      x += Math.max(0, t - ws[3] - 0.3) * 40;
      const lastGlue = t > ws[2] - 0.12 ? ws[2] : ws[0];
      trail(ctx, -40, x - 280, fy + 6, 20);
      snail(ctx, x, fy + 4, 1.45, { t, sq: squash(t, lastGlue - 0.1, 0.12), stretch: (t > ws[1] - 0.1 && t < ws[1] + 0.25) || (t > ws[3] - 0.1 && t < ws[3] + 0.25) ? 1 : 0, eyes: 'happy', mouth: 'smile' });
      const spots = [[300, 420, C.mint, C.mintD, 'GLUE'], [780, 420, C.sky, C.skyD, 'SLIDE'], [300, 680, C.mint, C.mintD, 'GLUE'], [780, 680, C.sky, C.skyD, 'SLIDE']];
      spots.forEach(([sx, sy, f, l, s], i) => numPop(ctx, s, sx, sy, 130, t, ws[i] - 0.12, { line: l, fill: C.white, rot: i % 2 ? 0.06 : -0.06 }));
      kana(ctx, 'wheee~', 800, 960, 66, 0.1, pop(t, ws[1]).s, C.sky);
    } },

    // 4: grip - straight up a stem, then hanging under a leaf
    { s: P_[15].s, draw(ctx, t) {
      bgV(ctx, t, TH.mint, 71);
      const hangT = w(16, 'hang') - 0.15;
      // stem
      const stem = new Path2D(); stem.moveTo(300, 1960); stem.bezierCurveTo(330, 1500, 280, 1100, 340, 560); stem.lineTo(392, 560); stem.bezierCurveTo(332, 1100, 382, 1500, 352, 1960); stem.closePath();
      cel(ctx, stem, LEAF.b, LEAF.s, -6, -6, 5);
      // leaf at the top, sticking out to the right
      const lp = pop(t, P_[15].s - 0.2, 0.8);
      ctx.save(); ctx.translate(366, 600); ctx.scale(lp.s, lp.s);
      const leaf = new Path2D(); leaf.moveTo(0, 0); leaf.bezierCurveTo(160, -170, 560, -140, 680, 30); leaf.bezierCurveTo(520, 120, 180, 120, 0, 0); leaf.closePath();
      cel(ctx, leaf, LEAF.b, LEAF.s, -8, -8, 5);
      ctx.save(); ctx.strokeStyle = LEAF.vein; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(10, 0); ctx.quadraticCurveTo(340, -20, 660, 28); for (let i = 1; i < 5; i++) { const vx = i * 130; ctx.moveTo(vx, -4 - i * 2); ctx.lineTo(vx + 60, -70); ctx.moveTo(vx, -4 - i * 2); ctx.lineTo(vx + 60, 50); } ctx.stroke(); ctx.restore();
      ctx.restore();
      if (t < hangT) {
        // climbing: snail rotated so its sole presses on the stem's right side
        const cy = H.lerp(1560, 1000, H.ease.inOut(H.clamp((t - P_[15].s) / (P_[15].e - P_[15].s + 0.3))));
        ctx.save(); ctx.translate(306, cy); ctx.rotate(-Math.PI / 2);
        snail(ctx, 0, 0, 1.0, { t, shadow: false, look: [0.6, 0], mouth: 'smile', stretch: Math.max(0, Math.sin(t * 6)) });
        ctx.restore();
                ctx.save(); ctx.fillStyle = H.rgba(SLIME.glue, 0.8); ctx.fill(rrP(296, cy + 200, 14, Math.max(0, 1800 - cy - 200), 7)); ctx.restore();
      } else {
        // hanging upside down under the leaf
        const hp = pop(t, hangT, 1.1);
        ctx.save(); ctx.translate(700, 668); ctx.rotate(0.06);
        snail(ctx, 0, 0, 1.0 * Math.max(hp.s, 0.01), { t, flipY: true, look: [0.4, 0], eyes: t > w(16, 'leaf') + 0.2 ? 'happy' : 'normal', mouth: 'smile' });
        ctx.restore();
      }
      if (t < hangT) big(ctx, 'GRIP!', 540, 330, 160, t, w(15, 'grip') - 0.15, { line: C.mintD, fill: C.white });
      label(ctx, 'STRAIGHT UP', 720, 1260, 62, t, w(15, 'straight') - 0.12, C.butter, hangT);
      if (t < hangT) arrow(ctx, 560, 1440, 560, 1000, C.pinkD, grow(t, w(15, 'climb') - 0.15, 0.5));
      label(ctx, 'UPSIDE DOWN', 640, 1150, 66, t, w(16, 'hang') - 0.1, C.pink);
      label(ctx, 'under a leaf', 640, 1290, 54, t, w(16, 'leaf') - 0.12, C.white);
      if (t > hangT) kana(ctx, 'stick!', 860, 380, 80, -0.1, pop(t, hangT + 0.1).s, C.mint);
    } },

    // 5: the catch - about one millimetre a second
    { s: P_[17].s, draw(ctx, t) {
      bgV(ctx, t, TH.butter, 81);
      const ry = 1230;
      // ruler
      const rp = pop(t, P_[17].s - 0.1, 0.8);
      ctx.save(); ctx.translate(540, ry + 90); ctx.scale(rp.sx, rp.sy);
      cel(ctx, rrP(-520, -70, 1040, 150, 26), '#fff6d8', C.butterS, -6, -6, 5);
      ctx.strokeStyle = C.plum; ctx.lineCap = 'round';
      for (let i = 0; i <= 50; i++) { const x = -480 + i * 19.2, L = i % 10 === 0 ? 60 : i % 5 === 0 ? 42 : 24; ctx.lineWidth = i % 10 === 0 ? 5 : 3; ctx.beginPath(); ctx.moveTo(x, -70); ctx.lineTo(x, -70 + L); ctx.stroke(); }
      ctx.font = `700 44px ${FONT}`; ctx.fillStyle = C.plum; ctx.textAlign = 'center'; for (let i = 0; i <= 5; i++) ctx.fillText(String(i), -480 + i * 192, 52);
      ctx.restore();
      // snail creeping 1 mm (= 19.2 px) per second
      const sx = 380 + Math.max(0, t - P_[17].s) * 19.2;
      trail(ctx, 0, sx - 280, ry + 4, 16);
      snail(ctx, sx, ry + 4, 1.1, { t, eyes: t > w(17, 'slow') - 0.1 && t < w(18, 'roughly') ? 'blink' : 'normal', look: [0.3, -0.4], mouth: 'flat' });
      big(ctx, 'THE CATCH?', 540, 300, 112, t, w(17, 'catch') - 0.15, { line: C.pinkD, fill: C.white });
      if (t > w(17, 'slow') - 0.15) kana(ctx, 'slooow...', 280, 780, 72, -0.1, pop(t, w(17, 'slow') - 0.1).s, C.butter);
      numPop(ctx, '~1 mm', 540, 560, 210, t, w(18, 'one') - 0.15, { line: C.pinkD, fill: C.butter });
      label(ctx, 'per second', 760, 760, 66, t, w(18, 'second') - 0.12, C.sky);
      // 1 mm bracket on the ruler
      if (t > w(18, 'millimetre') - 0.15) { const p = pop(t, w(18, 'millimetre') - 0.15, 1.2); ctx.save(); ctx.translate(540 - 480 + 19.2 * 15 + 9.6, ry + 280); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, '1 mm', C.pink, 1, 50); ctx.restore(); }
    } },

    // 6: end - two feet or one slimy one?
    { s: P_[19].s, draw(ctx, t) {
      bgV(ctx, t, TH.pink, 91);
      const fy = 1360;
      cel(ctx, rrP(-40, fy, W + 80, 700, 30), '#ffd0df', C.pinkS, 0, -10, 5);
      const kp = pop(t, P_[19].s - 0.1, 1.1);
      if (kp.s > 0) { ctx.save(); ctx.translate(270, fy + 10); ctx.scale(kp.sx, kp.sy); kid(ctx, 0, 0, 1.0, { look: [0.6, 0], mouth: t > w(19, 'trade') ? 'o' : 'w', lift: Math.max(0, Math.sin(t * 6)) * 10 }); ctx.restore(); }
      const sp = pop(t, w(20, 'one') - 0.2, 1.1);
      if (sp.s > 0) snail(ctx, 800, fy + 6, 1.05 * sp.s, { t, look: [-0.6, -0.2], eyes: 'happy', mouth: 'smile', sq: [sp.sx / sp.s, sp.sy / sp.s] });
      big(ctx, 'TRADE?', 540, 320, 150, t, w(19, 'trade') - 0.15, { line: C.lavD, fill: C.white });
      choice(ctx, 270, 620, '2 FEET', C.sky, t, w(19, 'two') - 0.12);
      choice(ctx, 810, 620, '1 SLIMY', C.mint, t, w(20, 'slimy') - 0.12, 70);
      kana(ctx, '?', 540, 640, 90, 0, pop(t, w(20, 'one', 2) - 0.1).s, C.butter);
      const q = pop(t, P_[20].e + 0.1, 1.2);
      if (q.s > 0) { ctx.save(); ctx.translate(540, 1540); ctx.scale(q.sx, q.sy); cel(ctx, rrP(-400, -58, 800, 108, 54), C.white, C.creamS, -6, -6, 5); ctx.font = `700 54px ${FONT}`; ctx.textAlign = 'center'; ctx.fillStyle = C.plum; ctx.fillText('tell me in the comments!', 0, 18); ctx.restore(); }
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
  function thumbnail(ctx) { scenes[0].draw(ctx, 4.2); }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    const squelch = (at, g = 1, minor = true) => { k.noise(at, { dur: 0.14, color: 'brown', filter: 'lowpass', f: [[0, 900], [0.14, 250]], gain: 0.35 * g, minor }); k.tone(at, { f: [[0, 260], [0.1, 120]], dur: 0.14, gain: 0.12 * g, minor }); };
    const slide = (at, d = 0.4, g = 1) => k.noise(at, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 600], [d, 1600]], q: 1.4, gain: 0.18 * g, a: d * 0.4, minor: true });
    CUTS.forEach((c) => { k.noise(c.t - 0.22, { dur: 0.42, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.42, 3000]], q: 0.9, gain: 0.3, a: 0.08 }); k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    // hook
    pop_(0.05, 600, 0.7, 0, false); squelch(0.2, 0.8);
    big_(w(0, 'one') - 0.12, 'G5'); pop_(w(0, 'foot') - 0.1, 800); k.play('tock', w(0, 'foot'), { f: 1300, gain: 0.3, minor: true });
    pop_(w(0, 'never') - 0.12, 900, 0.7, 0, false); k.play('sparkle', w(0, 'lifts'), { n: 5, gain: 0.4 });
    pop_(w(1, 'how') - 0.15, 500, 0.9, 0, false); pop_(w(1, 'guess') - 0.1, 650, 0.7, 0.4); pop_(w(1, 'moves') - 0.1, 780, 0.7, -0.4);
    // glass + sole
    k.play('ding', w(2, 'glass') - 0.12, { f: 'A6', gain: 0.25 }); pop_(w(2, 'glass') - 0.1, 900);
    k.play('whoosh', w(2, 'underneath') - 0.1, { dur: 0.5, gain: 0.35 }); pop_(w(2, 'underneath') + 0.3, 600, 0.8, 0, false);
    for (let i = 0; i < 5; i++) slide(w(3, 'stripes') - 0.15 + i * 0.7, 0.5, 0.8);
    pop_(w(3, 'sole') - 0.1, 700, 0.6, 0.4); pop_(w(4, 'tail') - 0.1, 600); pop_(w(4, 'head') - 0.1, 900);
    for (let i = 0; i < 7; i++) k.play('tock', w(4, 'toward') - 0.15 + i * 0.08, { f: 1100 + i * 60, gain: 0.25, minor: true });
    big_(w(5, 'muscle') - 0.12, 'C6'); pop_(w(5, 'waves') - 0.1, 800, 0.6, 0.4);
    squelch(w(6, 'squeezing') - 0.12, 1, false); k.play('riser', w(6, 'stretching') - 0.15, { dur: 0.5, gain: 0.25 });
    // slime
    k.noise(w(7, 'slime') - 0.15, { dur: 0.6, color: 'brown', filter: 'lowpass', f: [[0, 300], [0.6, 900]], gain: 0.3, a: 0.2 }); big_(w(7, 'slime') - 0.1, 'E6');
    pop_(w(8, 'still') - 0.1, 600); pop_(w(9, 'thick') - 0.1, 700);
    squelch(w(9, 'sticky') - 0.05, 1.1, false); k.play('stamp', w(9, 'glue') - 0.12, { gain: 0.45 }); k.play('sparkle', w(9, 'glue'), { n: 4, gain: 0.35 });
    const wv0 = w(10, 'wave') - 0.15;
    for (let at = wv0; at < P_[13].e; at += 2.0) slide(at + 0.3, 1.0, 1.1);
    pop_(w(11, 'runny') - 0.1, 650, 0.8, 0, false); k.play('whoosh', w(11, 'slippery') - 0.15, { dur: 0.6, gain: 0.35 }); big_(w(11, 'slippery') - 0.1, 'A5');
    k.play('swish', w(12, 'forward') - 0.15, { dur: 0.4, gain: 0.5 }); pop_(w(12, 'forward'), 900, 0.7, 0, false); pop_(w(12, 'liquid') - 0.1, 700);
    k.play('stamp', w(13, 'stuck') - 0.12, { gain: 0.35, pan: -0.4 }); k.play('stamp', w(13, 'stuck') - 0.04, { gain: 0.35, pan: 0.4 });
    // glue slide
    [w(14, 'glue'), w(14, 'slide'), w(14, 'glue', 2), w(14, 'slide', 2)].forEach((at, i) => { if (i % 2) { k.play('swish', at - 0.12, { dur: 0.3, gain: 0.5 }); pop_(at - 0.1, 900, 0.8, 0.3, false); } else { squelch(at - 0.12, 1.1, false); pop_(at - 0.1, 600, 0.8, -0.3, false); } });
    // climb + hang
    big_(w(15, 'grip') - 0.12, 'C6');
    for (let at = w(15, 'climb') - 0.15; at < w(16, 'hang') - 0.2; at += 0.52) squelch(at, 0.6);
    pop_(w(15, 'straight') - 0.1, 800, 0.7, 0.3, false);
    k.play('whoosh', w(16, 'hang') - 0.2, { dur: 0.4, gain: 0.3 }); k.play('slap', w(16, 'hang') - 0.05, { gain: 0.4 }); pop_(w(16, 'hang'), 900, 0.8, 0, false);
    pop_(w(16, 'leaf') - 0.1, 700); k.play('sparkle', w(16, 'leaf') + 0.2, { n: 5, gain: 0.4 });
    // slow
    pop_(w(17, 'catch') - 0.12, 600, 0.8, 0, false); k.tone(w(17, 'slow') - 0.1, { f: [[0, 'E4'], [0.6, 'B3']], type: 'triangle', dur: 0.7, gain: 0.12, a: 0.05, hold: 0.3 });
    big_(w(18, 'one') - 0.12, 'E6'); pop_(w(18, 'millimetre') - 0.1, 800, 0.6, 0.3); pop_(w(18, 'second') - 0.1, 900, 0.6, 0.4);
    for (let i = 0; i < 4; i++) k.play('tick', w(18, 'roughly') + i * 1.0, { gain: 0.4, minor: true });
    // end
    pop_(w(19, 'trade') - 0.12, 700, 0.8, 0, false); pop_(w(19, 'two') - 0.1, 600, 0.8, -0.4, false);
    squelch(w(20, 'one') - 0.2, 0.8); pop_(w(20, 'slimy') - 0.1, 900, 0.8, 0.4, false);
    k.play('success', P_[20].e + 0.1, { f: 'C6', gain: 0.5 }); k.play('sparkle', P_[20].e + 0.1, { n: 8, gain: 0.6 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
