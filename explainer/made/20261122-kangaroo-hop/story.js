// ===== Kawaii Anime, vertical: "Why do kangaroos hop instead of run?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || "") + "ぴょんハァハァすごい！ボーナスよいしょ？";
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
  const P_ = [{"s":0.25,"e":4.94,"text":"How do kangaroos hit 50 kilometres an hour with almost no extra energy,","words":[["how",0.25],["do",0.49],["kangaroos",0.65],["hit",1.38],["50",1.62],["kilometres",1.79],["an",2.59],["hour",2.76],["with",3.08],["almost",3.4],["no",3.89],["extra",4.05],["energy",4.45]]},{"s":5.41,"e":6.51,"text":"when you'd be gasping?","words":[["when",5.41],["youd",5.67],["be",5.93],["gasping",6.06]]},{"s":6.96,"e":8.9,"text":"As a red kangaroo hops faster,","words":[["as",6.96],["a",7.12],["red",7.21],["kangaroo",7.45],["hops",8.09],["faster",8.42]]},{"s":9.38,"e":11.58,"text":"its oxygen use barely changes.","words":[["its",9.38],["oxygen",9.65],["use",10.18],["barely",10.44],["changes",10.97]]},{"s":11.98,"e":13.66,"text":"So why hop instead of run?","words":[["so",11.98],["why",12.15],["hop",12.4],["instead",12.66],["of",13.24],["run",13.41]]},{"s":14.2,"e":15.46,"text":"It's all in the legs.","words":[["its",14.2],["all",14.45],["in",14.71],["the",14.87],["legs",15.13]]},{"s":15.9,"e":18.23,"text":"Each one has a huge Achilles tendon,","words":[["each",15.9],["one",16.22],["has",16.46],["a",16.71],["huge",16.79],["achilles",17.11],["tendon",17.75]]},{"s":18.7,"e":20.44,"text":"and it works like a pogo spring.","words":[["and",18.7],["it",18.91],["works",19.05],["like",19.4],["a",19.67],["pogo",19.74],["spring",20.02]]},{"s":20.84,"e":23.33,"text":"When the kangaroo lands, the tendon stretches,","words":[["when",20.84],["the",21.1],["kangaroo",21.3],["lands",21.83],["the",22.15],["tendon",22.35],["stretches",22.74]]},{"s":23.4,"e":24.47,"text":"storing energy.","words":[["storing",23.4],["energy",23.98]]},{"s":24.92,"e":25.9,"text":"Then it snaps back","words":[["then",24.92],["it",25.18],["snaps",25.31],["back",25.64]]},{"s":25.97,"e":27.41,"text":"and launches the next hop.","words":[["and",25.97],["launches",26.18],["the",26.73],["next",26.93],["hop",27.21]]},{"s":27.87,"e":30.21,"text":"One bound can cover up to nine metres.","words":[["one",27.87],["bound",28.1],["can",28.49],["cover",28.73],["up",29.12],["to",29.27],["nine",29.43],["metres",29.74]]},{"s":30.63,"e":31.75,"text":"And there's a bonus.","words":[["and",30.63],["theres",30.85],["a",31.3],["bonus",31.37]]},{"s":32.07,"e":34.43,"text":"Every bounce sloshes its gut up and down,","words":[["every",32.07],["bounce",32.43],["sloshes",32.86],["its",33.36],["gut",33.58],["up",33.79],["and",33.93],["down",34.15]]},{"s":34.94,"e":37.16,"text":"which pumps air in and out of its lungs.","words":[["which",34.94],["pumps",35.3],["air",35.66],["in",35.87],["and",36.02],["out",36.23],["of",36.45],["its",36.59],["lungs",36.8]]},{"s":37.55,"e":39.27,"text":"So hopping helps it breathe too.","words":[["so",37.55],["hopping",37.68],["helps",38.14],["it",38.47],["breathe",38.61],["too",39.07]]},{"s":39.73,"e":41.67,"text":"Going slow is the clumsy part.","words":[["going",39.73],["slow",40.13],["is",40.45],["the",40.62],["clumsy",40.86],["part",41.34]]},{"s":42.09,"e":43.63,"text":"Then it walks on five legs,","words":[["then",42.09],["it",42.38],["walks",42.53],["on",42.89],["five",43.04],["legs",43.33]]},{"s":44.0,"e":45.62,"text":"using its tail as the fifth.","words":[["using",44.0],["its",44.37],["tail",44.59],["as",44.88],["the",45.03],["fifth",45.25]]},{"s":46.03,"e":48.01,"text":"So if you had pogo-spring legs,","words":[["so",46.03],["if",46.2],["you",46.36],["had",46.61],["pogospring",46.86],["legs",47.68]]},{"s":48.34,"e":49.53,"text":"would you ever walk again?","words":[["would",48.34],["you",48.63],["ever",48.8],["walk",49.02],["again",49.25]]}];

  // ---------- timing (from phrases.json) ----------
  const BEATS = [
    { id: 'hook', s: P_[0].s, e: P_[1].e, on: 'kangaroo hopping / 50 km/h / energy battery stays full vs kid gasping' },
    { id: 'oxygen', s: P_[2].s, e: P_[3].e, on: 'graph: speed up, OXYGEN line stays flat, BARELY CHANGES' },
    { id: 'why', s: P_[4].s, e: P_[5].e, on: 'HOP? or RUN? -> THE LEGS' },
    { id: 'tendon', s: P_[6].s, e: P_[11].e, on: 'leg + Achilles tendon spring, pogo, land=stretch, ENERGY STORED, snap back, NEXT HOP' },
    { id: 'bound', s: P_[12].s, e: P_[12].e, on: 'arc jump, UP TO 9 m' },
    { id: 'breathe', s: P_[13].s, e: P_[16].e, on: 'BONUS! cutaway gut + lungs, IN/OUT, FREE BREATHS' },
    { id: 'slow', s: P_[17].s, e: P_[19].e, on: 'clumsy slow walk, 5 LEGS counter, TAIL = LEG 5' },
    { id: 'end', s: P_[20].s, e: P_[21].e, on: 'kid on pogo legs: WALK AGAIN? YES / NO' },
  ];
  const w = (i, word, n = 1) => { let k = 0; const f = P_[i].words.find((x) => x[0] === word && ++k === n); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.05, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = C.butter) => { const p = pop(t, t0); if (p.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  function bgV(ctx, t, th, seed) { ctx.save(); ctx.scale(1.5, 1.5); bg(ctx, W / 1.5, HH / 1.5, t, th, seed); ctx.restore(); }
  const numPop = (ctx, str, x, y, size, t, t0, o = {}) => { const n = pop(t, t0, 1.3); if (n.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(n.sx, n.sy); kText(ctx, str, 0, 0, size, { fill: o.fill || C.white, line: o.line || C.skyD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); };
  const grow = (t, t0, d) => H.ease.out(H.clamp((t - t0) / d));

  // ---------- palette for this film ----------
  const FUR = { b: '#eea77c', s: '#cf8058' }, BELLY = { b: '#fff1e2', s: '#f0cfb4' }, KIRIS = '#a8653c';
  const SKIN = { b: '#ffe2cf', s: '#f2b996' }, HAIR = { b: '#7a4a5e', s: '#5e3448' };

  // ground: soft rounded hill strip with scrolling dots (speed)
  function ground(ctx, t, y, scroll = 0, fill = '#bfe9b0', shade = '#8fd18a') {
    const p = new Path2D(); p.moveTo(-40, y + 30); p.bezierCurveTo(300, y - 20, 760, y - 20, 1120, y + 30); p.lineTo(1120, HH + 40); p.lineTo(-40, HH + 40); p.closePath();
    cel(ctx, p, fill, shade, 0, -14, 5);
    ctx.save(); ctx.clip(p); ctx.fillStyle = H.rgba(H.mix(shade, '#ffffff', 0.25));
    const off = ((scroll % 160) + 160) % 160;
    for (let j = 0; j < 3; j++) for (let i = -1; i < 9; i++) { const x = i * 160 - off + (j % 2) * 80, yy = y + 70 + j * 70; ctx.fill(ellP(x, yy, 22 - j * 3, 8)); }
    ctx.restore();
  }
  function speedLines(ctx, t, x0, x1, y0, y1, seed, a = 1) {
    const r = H.rng(seed); ctx.save(); ctx.globalAlpha = a; ctx.lineCap = 'round';
    for (let i = 0; i < 9; i++) { const y = r.range(y0, y1), len = r.range(90, 200), sp = r.range(1400, 2000), x = x1 - ((r() * (x1 - x0) + t * sp) % (x1 - x0 + len));
      ctx.strokeStyle = C.white; ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + len, y); ctx.stroke(); }
    ctx.restore();
  }

  // ---------- cast: Hoppi, a chibi red kangaroo, side view facing right. (x,y) = ground under the feet ----------
  // P: lift (local px), sq [sx,sy], tilt, eyes, mouth, look, five (0..1 pentapedal lean), inside {breath, gut} cutaway
  function kanga(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    if (P.flip) ctx.scale(-1, 1);
    const lift = P.lift || 0, five = P.five || 0;
    if (P.shadow !== false) { const k = 1 - Math.min(lift, 300) / 500; ctx.fillStyle = 'rgba(90,54,89,0.14)'; ctx.fill(ellP(-20, 8, 210 * k, 22 * k)); }
    ctx.translate(0, -lift);
    const sq = P.sq || [1, 1]; ctx.scale(sq[0], sq[1]); ctx.rotate(P.tilt || 0);
    // tail: chain of discs along a curve (union-outlined), touching the ground behind
    const tailEnd = P.tailUp ? [-260, -60] : [-268, -6];
    const tp = bez([-40, -150], [-120, -120], [-190, -40], tailEnd, 22);
    ctx.save(); ctx.lineWidth = 10; ctx.strokeStyle = C.plum; tp.forEach((p, i) => { ctx.beginPath(); ctx.arc(p[0], p[1], H.lerp(40, 13, i / 22), 0, TAU); ctx.stroke(); });
    tp.forEach((p, i) => { ctx.fillStyle = i > 18 ? FUR.s : FUR.b; ctx.beginPath(); ctx.arc(p[0], p[1], H.lerp(40, 13, i / 22), 0, TAU); ctx.fill(); }); ctx.restore();
    if (P.tailGlow) { ctx.save(); ctx.globalAlpha = 0.5 + 0.3 * Math.sin(P.tailGlow * 10); ctx.lineWidth = 14; ctx.strokeStyle = C.butterD; ctx.lineCap = 'round'; ctx.beginPath(); tp.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.stroke(); ctx.restore(); }
    // big back foot (long!) + thigh
    const crouch = P.crouch || 0;
    cel(ctx, rrP(-70, -30, 210, 34, 17), FUR.b, FUR.s, -4, -4, 4.5);
    cel(ctx, ellP(-12, -112 + crouch * 18, 72, 92 - crouch * 14, -0.35), FUR.b, FUR.s, -9, -9, 4.5);
    // upper body leans forward with five
    ctx.save(); ctx.translate(-10, -130); ctx.rotate(five * 0.75); ctx.translate(10, 130);
    const body = ellP(24, -220, 92, 128, 0.32);
    cel(ctx, body, FUR.b, FUR.s, -10, -10, 4.5);
    ctx.save(); ctx.clip(body); ctx.fillStyle = BELLY.b; ctx.fill(ellP(78, -200, 56, 112, 0.32)); ctx.restore(); ol(ctx, body, 4.5);
    if (P.inside) insides(ctx, P.inside, body);
    // arms (short) unless planted on the ground (drawn below)
    if (five < 0.3) cel(ctx, ellP(112, -232, 17, 38, -0.7), FUR.b, FUR.s, -3, -3, 4);
    // head
    const hx = 92, hy = -372;
    for (const [ex, rot] of [[-34, -0.32], [12, 0.05]]) { const e = ellP(hx + ex, hy - 108, 26, 70, rot); cel(ctx, e, FUR.b, FUR.s, -4, -4, 4.5); ctx.fillStyle = C.pink; ctx.fill(ellP(hx + ex + 3, hy - 100, 12, 46, rot)); }
    cel(ctx, ellP(hx, hy, 104, 90), FUR.b, FUR.s, -12, -12, 4.5);
    cel(ctx, ellP(hx + 86, hy + 26, 56, 42, 0.1), BELLY.b, BELLY.s, -5, -5, 4.5);
    shine(ctx, hx - 50, hy - 46, 26, 11, -0.6);
    ctx.fillStyle = C.dark; ctx.fill(ellP(hx + 136, hy + 14, 15, 11)); shine(ctx, hx + 132, hy + 10, 5, 3, -0.3);
    eye(ctx, hx + 34, hy - 6, 30, 38, KIRIS, P.eyes || 'normal', 1, P.look || [0.3, 0]);
    blush(ctx, hx + 58, hy + 40, 20, 11);
    mouth(ctx, hx + 112, hy + 46, 11, P.mouth || 'w');
    ctx.restore();
    if (five >= 0.3) { // arms planted in front
      const a = five * 0.75, sx = -10 + Math.cos(a) * 112 - Math.sin(a) * (-232 + 130), sy = -130 + Math.sin(a) * 112 + Math.cos(a) * (-232 + 130);
      const arm = new Path2D(); arm.moveTo(sx - 18, sy); arm.quadraticCurveTo(sx + 30, (sy) / 2, sx + 40, -8); arm.lineTo(sx + 74, -8); arm.quadraticCurveTo(sx + 50, sy / 2, sx + 20, sy - 6); arm.closePath();
      cel(ctx, arm, FUR.b, FUR.s, -3, -3, 4);
    }
    ctx.restore();
  }
  // cutaway: two lungs high in the chest, the gut below; breath 0..1 inflates lungs, gut shifts
  function insides(ctx, I, body) {
    ctx.save(); ctx.clip(body);
    ctx.fillStyle = 'rgba(255,250,244,0.92)'; ctx.fill(body);
    const b = I.breath, g = I.gut;
    for (const sd of [-1, 1]) { const l = ellP(30 + sd * 34, -268 + g * 0.2, 30 * (0.8 + 0.35 * b), 52 * (0.8 + 0.3 * b), sd * 0.15); cel(ctx, l, C.pink, C.pinkS, -4, -4, 4); }
    ctx.lineWidth = 8; ctx.strokeStyle = C.pinkS; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(30, -350); ctx.lineTo(30, -300); ctx.stroke();
    // diaphragm line
    ctx.strokeStyle = C.lavD; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(-50, -210 + g); ctx.quadraticCurveTo(30, -240 + g, 110, -210 + g); ctx.stroke();
    const gut = new Path2D(); gut.moveTo(-40, -170 + g); gut.bezierCurveTo(-20, -215 + g, 90, -215 + g, 105, -165 + g); gut.bezierCurveTo(120, -110 + g, 10, -90 + g, -40, -120 + g); gut.closePath();
    cel(ctx, gut, C.butter, C.butterS, -5, -5, 4);
    ctx.strokeStyle = C.butterS; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-10, -150 + g); ctx.quadraticCurveTo(30, -175 + g, 60, -145 + g); ctx.quadraticCurveTo(80, -125 + g, 40, -125 + g); ctx.stroke();
    ctx.restore();
  }
  // hop cycle helper: returns { lift, sq, crouch, landT } for a hopping kangaroo with period per seconds
  function hopCycle(t, t0, per, height) {
    if (t < t0) return { lift: 0, sq: [1, 1], crouch: 0, ph: 0, n: -1 };
    const u = (t - t0) / per, n = Math.floor(u), ph = u - n;
    const air = 0.78; // fraction of cycle in the air
    if (ph < air) { const a = ph / air; return { lift: 4 * height * a * (1 - a), sq: [1 - 0.08 * Math.sin(a * Math.PI), 1 + 0.1 * Math.sin(a * Math.PI)], crouch: 0, ph, n }; }
    const c = Math.sin(((ph - air) / (1 - air)) * Math.PI); return { lift: 0, sq: [1 + 0.16 * c, 1 - 0.16 * c], crouch: c, ph, n };
  }

  // a chibi kid (front view). (x,y) = ground. P: eyes, mouth, pogo {c: compress 0..1}, lift, sweat
  function kid(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    if (P.shadow !== false) { ctx.fillStyle = 'rgba(90,54,89,0.14)'; ctx.fill(ellP(0, 8, 120, 16)); }
    ctx.translate(0, -(P.lift || 0));
    const legH = P.pogo ? 150 - 60 * (P.pogo.c || 0) : 100;
    if (P.pogo) {
      for (const sd of [-1, 1]) {
        ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); const x0 = sd * 34, n = 6;
        for (let i = 0; i <= n * 2; i++) { const yy = -legH * (1 - i / (n * 2)), xx = x0 + (i === 0 || i === n * 2 ? 0 : (i % 2 ? 22 : -22)); i ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); }
        ctx.strokeStyle = C.plum; ctx.lineWidth = 22; ctx.stroke(); ctx.strokeStyle = C.lavD; ctx.lineWidth = 12; ctx.stroke(); ctx.restore();
        cel(ctx, rrP(x0 - 34, -16, 68, 22, 11), C.pinkD, C.pinkS, -2, -2, 4);
      }
    } else for (const sd of [-1, 1]) { cel(ctx, rrP(sd * 34 - 18, -legH, 36, legH, 16), SKIN.b, SKIN.s, -3, -3, 4); cel(ctx, rrP(sd * 34 - 30, -22, 60, 26, 13), C.pinkD, C.pinkS, -2, -2, 4); }
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
  // vertical battery: level 0..1
  function battery(ctx, x, y, s, level, col) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-24, -112, 48, 22, 8), C.cream, C.creamS, -2, -2, 4);
    cel(ctx, rrP(-60, -96, 120, 196, 26), C.white, C.creamS, -5, -5, 5);
    const h = 168 * H.clamp(level); ctx.save(); ctx.clip(rrP(-46, -82, 92, 168, 16)); ctx.fillStyle = col; ctx.fillRect(-46, 86 - h, 92, h); ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(-36, 86 - h, 16, h); ctx.restore();
    ctx.restore();
  }
  // the Achilles tendon as a candy spring between two points; stretch 0..1 tints it hot
  function spring(ctx, a, b, coils, wdt, stretch) {
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy), ang = Math.atan2(dy, dx);
    ctx.save(); ctx.translate(a[0], a[1]); ctx.rotate(ang); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(L * 0.1, 0);
    const n = coils * 2; for (let i = 1; i < n; i++) ctx.lineTo(L * 0.1 + (L * 0.8) * i / n, (i % 2 ? -1 : 1) * wdt); ctx.lineTo(L * 0.9, 0); ctx.lineTo(L, 0);
    ctx.strokeStyle = C.plum; ctx.lineWidth = 26; ctx.stroke(); ctx.strokeStyle = H.rgba(H.mix(C.butterD, C.pinkD, stretch)); ctx.lineWidth = 15; ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.7)'; ctx.lineWidth = 4; ctx.stroke();
    ctx.restore();
    for (const p of [a, b]) cel(ctx, ellP(p[0], p[1], 18, 18), C.lav, C.lavS, -3, -3, 4);
  }
  function choice(ctx, x, y, label_, fill, t, t0) {
    const p = pop(t, t0, 1.2); if (p.s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy);
    cel(ctx, rrP(-190, -80, 380, 160, 80), fill, H.rgba(H.mix(fill, C.plum, 0.18)), -6, -6, 5);
    kText(ctx, label_, 0, 26, 78, { line: C.plum, fill: C.white, lw: 0.2, shadow: false });
    ctx.restore();
  }

  // ---------- scenes ----------
  const scenes = [
    // 0: hook — Hoppi zooms along; 50 km/h; battery stays full; then a kid runner gasps
    { s: 0, draw(ctx, t) {
      bgV(ctx, t, TH.butter, 71);
      const split = grow(t, P_[1].s - 0.3, 0.45);
      const speed = 1700;
      ground(ctx, t, 1430, t * speed * (1 - split * 0.6));
      speedLines(ctx, t, 0, W, 900, 1380, 5, 1 - split);
      const hc = hopCycle(t, 0.1, 0.62, 90);
      const kx = H.lerp(430, 300, split), ks = H.lerp(1.25, 0.9, split);
      const fq = pop(t, 0.0, 1.0);
      ctx.save(); ctx.translate(kx, 1430); ctx.scale(fq.sx, fq.sy);
      kanga(ctx, 40, 0, ks, { lift: hc.lift, sq: hc.sq, crouch: hc.crouch, eyes: t > w(0, 'energy') ? 'happy' : 'normal', mouth: 'smile' });
      ctx.restore();
      big(ctx, 'KANGAROOS', 540, 300, 120, t, w(0, 'kangaroos') - 0.15, { line: C.pinkD, fill: C.white });
      numPop(ctx, '50 km/h', 540, 520, 190, t, w(0, '50') - 0.15, { line: C.pinkD, fill: C.butter });
      // energy battery for Hoppi: stays full
      if (t >= w(0, 'almost') - 0.15) {
        const bp = pop(t, w(0, 'almost') - 0.15, 1.2);
        const bx = H.lerp(900, 300, split), by = H.lerp(900, 760, split);
        ctx.save(); ctx.translate(bx, by); ctx.scale(bp.sx, bp.sy); battery(ctx, 0, 0, 0.75, 0.94 + 0.03 * Math.sin(t * 9), C.mintD); ctx.restore();
        if (split < 0.5) label(ctx, 'almost no extra energy', 540, 680, 54, t, w(0, 'extra') - 0.12, C.white);
        else label(ctx, 'FULL', 300, 960, 54, t, P_[1].s, C.mint);
      }
      // kid gasping on the right
      if (t >= P_[1].s - 0.2) {
        const kp = pop(t, P_[1].s - 0.2, 1.1), bobk = Math.abs(Math.sin(t * 9)) * 18;
        ctx.save(); ctx.translate(790, 1440); ctx.scale(kp.sx, kp.sy); kid(ctx, 0, 0, 0.95, { lift: bobk, eyes: 'swirl', mouth: 'O' }); ctx.restore();
        if (t >= w(1, 'gasping') - 0.15) { sweat(ctx, 900, 1050, 1.2); sweat(ctx, 680, 1080, 0.9, -0.3); const q = pop(t, w(1, 'gasping') - 0.15, 1.2); kana(ctx, 'ハァハァ', 790, 1590, 72, -0.05, q.s, C.white); }
        const bp = pop(t, P_[1].s, 1.2); ctx.save(); ctx.translate(790, 760); ctx.scale(bp.sx, bp.sy); battery(ctx, 0, 0, 0.75, H.lerp(0.9, 0.12, grow(t, P_[1].s, 0.8)), C.red); ctx.restore();
        label(ctx, 'EMPTY', 790, 960, 54, t, w(1, 'gasping') - 0.1, C.pink);
      }
    } },
    // 1: the oxygen graph — speed climbs, line stays flat
    { s: P_[2].s, draw(ctx, t) {
      bgV(ctx, t, TH.mint, 72);
      big(ctx, 'HOP FASTER', 540, 300, 120, t, w(2, 'hops') - 0.15, { line: C.mintD, fill: C.white });
      const cp = pop(t, P_[2].s + 0.05, 0.9);
      ctx.save(); ctx.translate(540, 1050); ctx.scale(cp.sx, cp.sy);
      cel(ctx, rrP(-450, -420, 900, 820, 60), C.white, C.creamS, -8, -8, 5);
      // axes
      ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(-340, -320); ctx.lineTo(-340, 250); ctx.lineTo(380, 250); ctx.stroke();
      ctx.restore();
      if (cp.s > 0.5) {
        // axis labels
        ctx.save(); ctx.translate(250, 1050); ctx.rotate(-Math.PI / 2); ctx.restore();
        label(ctx, 'SPEED →', 640, 1390, 50, t, w(2, 'faster') - 0.12, C.sky);
        label(ctx, 'OXYGEN USE', 440, 1110, 50, t, w(3, 'oxygen') - 0.15, C.pink);
        // kangaroo riding the flat line as speed grows
        const g = grow(t, w(2, 'hops') - 0.1, 3.6);
        const lx0 = 200, lx1 = 200 + 720 * g, ly = 1010;
        ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 26; ctx.beginPath(); ctx.moveTo(lx0, ly); ctx.lineTo(lx1, ly - 10 * g); ctx.stroke(); ctx.strokeStyle = C.pinkD; ctx.lineWidth = 16; ctx.stroke(); ctx.restore();
        const hc = hopCycle(t, P_[2].s, 0.42, 60);
        kanga(ctx, lx1 - 10, ly - 26 - 10 * g, 0.32, { lift: hc.lift, sq: hc.sq, crouch: hc.crouch, shadow: false, eyes: t > w(3, 'barely') ? 'happy' : 'normal' });
        // speed tick marks pop as it passes
        for (let i = 1; i <= 4; i++) { const xi = 200 + i * 170; if (lx1 > xi) { const p = pop(t, w(2, 'hops') - 0.1 + 3.6 * (1 - Math.cbrt(1 - i * 170 / 720)) * 0.6, 1.2); ctx.save(); ctx.translate(xi, 1300); ctx.scale(p.s, p.s); ctx.fillStyle = C.plum; ctx.fill(rrP(-6, -30, 12, 30, 6)); ctx.restore(); } }
        if (t >= w(3, 'barely') - 0.12) { const p = pop(t, w(3, 'barely') - 0.12, 1.3); ctx.save(); ctx.translate(560, 730); ctx.rotate(-0.05); ctx.scale(p.sx, p.sy); bubble(ctx, 0, 0, 640, 150, [200, 170], [1, 1], C.butter); kText(ctx, 'BARELY CHANGES', 0, 24, 66, { line: C.mintD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); }
      }
      numPop(ctx, 'O₂', 880, 560, 130, t, w(3, 'oxygen') - 0.15, { line: C.skyD, fill: C.white, rot: 0.1 });
      twinkles(ctx, W, HH, t, 8, 7, (x, y) => y > 200 && y < 1500);
    } },
    // 2: why hop? -> it's the legs
    { s: P_[4].s, draw(ctx, t) {
      bgV(ctx, t, TH.lav, 73);
      ground(ctx, t, 1500, 0, '#cfe8ff', '#9cc9ef');
      const legs = t >= w(5, 'legs') - 0.15;
      const z = H.ease.inOut(H.clamp((t - (w(5, 'all') - 0.1)) / 0.7));
      ctx.save(); ctx.translate(540, 1500); ctx.scale(1 + z * 0.55, 1 + z * 0.55); ctx.translate(-540, -1500 + z * 30);
      kanga(ctx, 560, 1500, 1.15, { eyes: legs ? 'star' : 'normal', look: [-0.3, -0.6], mouth: legs ? 'smile' : 'flat', crouch: 0.2 });
      ctx.restore();
      if (!legs) {
        big(ctx, 'WHY HOP?', 540, 320, 140, t, w(4, 'hop') - 0.15, { line: C.lavD, fill: C.white });
        if (t >= w(4, 'run') - 0.15) { big(ctx, 'NOT RUN?', 540, 480, 120, t, w(4, 'run') - 0.15, { line: C.pinkD, fill: C.butter }); }
        if (t >= w(4, 'why')) thought(ctx, 830, 720, 0.9, [700, 900], 3, t);
      } else {
        big(ctx, 'THE LEGS!', 540, 380, 150, t, w(5, 'legs') - 0.15, { line: C.pinkD, fill: C.butter });
        impactLines(ctx, 520, 1420, 200, t, w(5, 'legs') - 0.1, 10, C.pinkD);
        dotted(ctx, bez([300, 560], [200, 800], [260, 1100], [400, 1280]), grow(t, w(5, 'legs') - 0.1, 0.45), C.pinkD, 8, 26, 1.2);
      }
    } },
    // 3: the tendon spring — a big cutaway leg
    { s: P_[6].s, draw(ctx, t) {
      bgV(ctx, t, TH.pink, 74);
      // land / stretch / snap timings
      const tl = w(8, 'lands') - 0.12, ts = w(10, 'snaps') - 0.12;
      let comp = 0; // 0 = standing, 1 = fully loaded
      if (t >= tl) comp = H.ease.out(H.clamp((t - tl) / 0.5));
      if (t >= ts) comp = 1 - H.ease.out(H.clamp((t - ts) / 0.18));
      const launch = t >= ts ? H.clamp((t - ts) / 0.9) : 0;
      const liftL = launch > 0 ? Math.sin(Math.min(launch, 1) * Math.PI) * 360 : 0;
      // leg geometry (screen coords): hip, knee, heel, toe; compression folds the joints
      const gy = 1500 - liftL;
      const ang = H.lerp(0.35, 0.9, comp);
      const heel = [430, gy - 60 - (1 - comp) * 30], toe = [880, gy - 10];
      const knee = [heel[0] + 80 + Math.sin(ang) * 40, heel[1] - 330 + comp * 70];
      const hip = [knee[0] - 230 - comp * 30, knee[1] - 130 + comp * 50];
      ctx.save();
      ctx.fillStyle = 'rgba(90,54,89,0.14)'; ctx.fill(ellP(640, 1520, 330 * (1 - liftL / 900), 30));
      // thigh + shin + foot as chunky rounded limbs
      const limb = (a, b, r1, r2) => { const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy), an = Math.atan2(dy, dx); const p = new Path2D(); const m = new DOMMatrix().translate(a[0], a[1]).rotate(an * 180 / Math.PI); const q = new Path2D(); q.moveTo(0, -r1); q.lineTo(L, -r2); q.arc(L, 0, r2, -Math.PI / 2, Math.PI / 2); q.lineTo(0, r1); q.arc(0, 0, r1, Math.PI / 2, Math.PI * 1.5); q.closePath(); p.addPath(q, m); return p; };
      const thigh = limb(hip, knee, 120, 70), shin = limb(knee, heel, 70, 44), foot = limb(heel, toe, 46, 34);
      union(ctx, [thigh, shin, foot], FUR.b, 5);
      ctx.save(); ctx.clip(thigh); ctx.fillStyle = FUR.s; ctx.fill(ellP(hip[0] + 60, hip[1] + 80, 110, 60)); ctx.restore();
      shine(ctx, hip[0] - 40, hip[1] - 60, 40, 14, -0.6, 0.7);
      // the Achilles tendon: back of the shin, calf -> heel
      const show = t >= w(6, 'achilles') - 0.15;
      if (show) {
        const sp = pop(t, w(6, 'achilles') - 0.15, 1.2);
        const calf = [knee[0] - 40, knee[1] + 70], hb = [heel[0] - 50, heel[1] - 4];
        ctx.save(); ctx.globalAlpha = Math.min(1, sp.s);
        const cx = (calf[0] + hb[0]) / 2, cy = (calf[1] + hb[1]) / 2;
        ctx.translate(cx, cy); ctx.scale(sp.s, sp.s); ctx.translate(-cx, -cy);
        spring(ctx, calf, [hb[0] - comp * 40, hb[1] + comp * 30], 6, H.lerp(30, 18, comp), comp);
        ctx.restore();
        if (comp > 0.6 && t < ts) { ctx.save(); ctx.globalAlpha = 0.5 + 0.3 * Math.sin(t * 20); const g = ctx.createRadialGradient(cx, cy, 10, cx, cy, 200); g.addColorStop(0, 'rgba(255,111,156,0.7)'); g.addColorStop(1, 'rgba(255,111,156,0)'); ctx.fillStyle = g; ctx.fillRect(cx - 200, cy - 200, 400, 400); ctx.restore(); }
      }
      ctx.restore();
      // inset: where this leg is on Hoppi
      if (t < tl - 0.1) { const ip = pop(t, P_[6].s + 0.1, 1.1); if (ip.s > 0) { ctx.save(); ctx.translate(850, 760); ctx.scale(ip.sx, ip.sy); const cp = ellP(0, 0, 160, 160); cel(ctx, cp, C.white, C.creamS, -5, -5, 5); ctx.save(); ctx.clip(cp); kanga(ctx, 10, 120, 0.42, { shadow: false }); ctx.restore(); ctx.save(); ctx.setLineDash([14, 10]); ctx.lineWidth = 8; ctx.strokeStyle = C.pinkD; ctx.stroke(ellP(-2, 72, 62, 52)); ctx.restore(); ctx.restore(); label(ctx, 'BACK LEG', 850, 960, 48, t, P_[6].s + 0.3, C.pink); } }
      // text track
      if (t < w(7, 'pogo') - 0.15) {
        big(ctx, 'ACHILLES', 540, 300, 130, t, w(6, 'achilles') - 0.15, { line: C.pinkD, fill: C.white });
        big(ctx, 'TENDON', 540, 450, 130, t, w(6, 'tendon') - 0.15, { line: C.pinkD, fill: C.butter });
        label(ctx, 'HUGE', 830, 640, 60, t, w(6, 'huge') - 0.12, C.mint);
      } else if (t < tl) {
        big(ctx, 'POGO SPRING', 540, 330, 120, t, w(7, 'pogo') - 0.15, { line: C.lavD, fill: C.butter });
        // a little pogo stick icon bouncing
        const pb = pop(t, w(7, 'spring') - 0.15, 1.2); if (pb.s > 0) { const by = Math.abs(Math.sin(t * 8)) * -40; ctx.save(); ctx.translate(880, 640 + by); ctx.scale(pb.sx * 0.9, pb.sy * 0.9); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 22; ctx.beginPath(); ctx.moveTo(0, -140); ctx.lineTo(0, 120); ctx.stroke(); ctx.strokeStyle = C.skyD; ctx.lineWidth = 12; ctx.stroke(); spring(ctx, [0, 40], [0, 150], 4, 20, 0); cel(ctx, rrP(-70, -150, 140, 30, 15), C.pinkD, C.pinkS, -3, -3, 4); cel(ctx, rrP(-60, 0, 120, 24, 12), C.butter, C.butterS, -3, -3, 4); ctx.restore(); }
      } else if (t < ts) {
        big(ctx, 'LAND...', 540, 300, 130, t, tl, { line: C.skyD, fill: C.white });
        big(ctx, 'STRETCH!', 540, 450, 130, t, w(8, 'stretches') - 0.15, { line: C.pinkD, fill: C.butter });
        if (t >= w(9, 'storing') - 0.15) { const bp = pop(t, w(9, 'storing') - 0.15, 1.2); ctx.save(); ctx.translate(880, 720); ctx.scale(bp.sx, bp.sy); battery(ctx, 0, 0, 0.8, grow(t, w(9, 'storing'), 0.8), C.butterD); ctx.restore(); label(ctx, 'ENERGY STORED', 740, 900, 52, t, w(9, 'energy') - 0.12, C.butter); }
        if (t >= tl && t < tl + 0.3) impactLines(ctx, 640, 1500, 120, t, tl, 10, C.plum);
      } else {
        big(ctx, 'SNAP!', 540, 330, 170, t, ts, { line: C.pinkD, fill: C.butter });
        if (t >= w(11, 'next') - 0.15) big(ctx, 'NEXT HOP', 540, 500, 120, t, w(11, 'next') - 0.15, { line: C.mintD, fill: C.white });
        if (t < ts + 0.6) { const q = pop(t, ts, 1.2); kana(ctx, 'ぴょん', 850, 720, 90, 0.12, q.s * popOut(t, ts + 0.5, 0.15), C.pink); }
        speedLines(ctx, t, 0, W, 1100, 1600, 9, H.clamp(1 - (t - ts) / 0.8) * 0.8);
      }
    } },
    // 4: one bound up to 9 m — arc across the screen with a tape measure
    { s: P_[12].s, draw(ctx, t) {
      bgV(ctx, t, TH.butter, 75);
      ground(ctx, t, 1460, 0);
      const t0 = w(12, 'bound') - 0.15, u = H.clamp((t - t0) / 1.4), e = H.ease.inOut(u);
      const x0 = 150, x1 = 930, x = H.lerp(x0, x1, e), lift = Math.sin(e * Math.PI) * 520;
      dotted(ctx, Array.from({ length: 41 }, (_, i) => { const v = i / 40; return [H.lerp(x0, x1, v), 1460 - 120 - Math.sin(v * Math.PI) * 520]; }), e, C.pinkD, 7, 26, 0);
      const landed = u >= 1, ls = landed ? squash(t, t0 + 1.4, 0.2) : (u > 0 ? [0.92, 1.1] : [1, 1]);
      kanga(ctx, x, 1460, 0.6, { lift: lift / 0.6, sq: ls, tilt: u > 0 && !landed ? -0.25 + e * 0.5 : 0, eyes: landed ? 'happy' : 'normal', mouth: 'smile', tailUp: u > 0 && !landed });
      // tape
      const tg = grow(t, w(12, 'cover') - 0.15, 0.9);
      if (tg > 0) { ctx.save(); const tw = (x1 - x0) * tg; cel(ctx, rrP(x0, 1560, tw, 64, 14), C.butterD, C.butterS, -3, -3, 4.5); ctx.fillStyle = C.plum; for (let i = 0; i <= 9; i++) { const xi = x0 + (x1 - x0) * i / 9; if (xi <= x0 + tw) ctx.fillRect(xi - 3, 1566, 6, i % 3 ? 22 : 40); } ctx.restore(); }
      big(ctx, 'ONE BOUND', 540, 320, 130, t, w(12, 'bound') - 0.15, { line: C.pinkD, fill: C.white });
      label(ctx, 'up to', 540, 490, 60, t, w(12, 'up') - 0.12, C.white);
      numPop(ctx, '9 m', 540, 780, 240, t, w(12, 'nine') - 0.15, { line: C.pinkD, fill: C.butter });
      confetti(ctx, t, w(12, 'metres'), 540, 700, 26, 33, 0.9);
    } },
    // 5: bonus — cutaway: gut sloshes, lungs pump
    { s: P_[13].s, draw(ctx, t) {
      bgV(ctx, t, TH.mint, 76);
      ground(ctx, t, 1560, t * 600, '#ffe0ea', '#f5b3c8');
      const bonus = t < P_[14].s - 0.1;
      const t0 = w(14, 'bounce') - 0.12;
      const hc = hopCycle(t, t0, 0.9, 140);
      // gut lags behind the body: down on landing (lungs fill), up in the air (lungs squeeze)
      const ph = hc.n < 0 ? 0 : hc.ph, gut = hc.n < 0 ? 0 : Math.cos(ph * TAU) * 26, breath = hc.n < 0 ? 0.5 : 0.5 + 0.5 * Math.cos(ph * TAU);
      const inside = t >= w(14, 'gut') - 0.15 ? { breath, gut } : null;
      kanga(ctx, 500, 1560, 1.25, { lift: hc.lift, sq: hc.sq, crouch: hc.crouch, inside, eyes: t > w(16, 'breathe') - 0.1 ? 'happy' : 'normal', mouth: breath > 0.6 ? 'o' : 'w' });
      if (bonus) {
        const p = pop(t, w(13, 'bonus') - 0.15, 1.3);
        if (p.s > 0) { ctx.save(); ctx.translate(540, 560); ctx.rotate(t * 0.6); ctx.scale(p.s, p.s); cel(ctx, starP(0, 0, 230, -Math.PI / 2, 0.55), C.butter, C.butterS, -8, -8, 5); ctx.restore(); kWord(ctx, 'BONUS!', 540, 600, 120, t, w(13, 'bonus') - 0.1, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, line: C.pinkD }); }
        if (t > w(13, 'bonus')) { const q = pop(t, w(13, 'bonus'), 1.2); kana(ctx, 'ボーナス', 820, 860, 66, 0.12, q.s, C.white); }
      } else {
        const hx = 500 - 0, hy = 1560 - hc.lift * 1.25;
        if (t < P_[16].s - 0.1) {
          big(ctx, 'GUT SLOSHES', 540, 300, 115, t, w(14, 'sloshes') - 0.15, { line: C.butterS, fill: C.white });
          if (inside) {
            label(ctx, 'GUT', 820, hy - 210, 56, t, w(14, 'gut') - 0.12, C.butter);
            dotted(ctx, [[740, hy - 210], [680, hy - 220], [600, hy - 215]], grow(t, w(14, 'gut') - 0.1, 0.3), C.butterS, 6, 20, 0.8);
          }
          if (t >= w(15, 'lungs') - 0.15) { label(ctx, 'LUNGS', 830, hy - 420, 56, t, w(15, 'lungs') - 0.15, C.pink); dotted(ctx, [[740, hy - 420], [680, hy - 410], [610, hy - 390]], grow(t, w(15, 'lungs') - 0.1, 0.3), C.pinkS, 6, 20, 0.8); }
          if (t >= w(15, 'air') - 0.15) { const inn = breath > 0.5; label(ctx, inn ? 'AIR IN' : 'AIR OUT', 540, 500, 70, t, w(15, 'air') - 0.15, inn ? C.sky : C.lav); }
        } else {
          big(ctx, 'FREE', 540, 300, 150, t, w(16, 'helps') - 0.15, { line: C.mintD, fill: C.butter });
          big(ctx, 'BREATHS', 540, 460, 130, t, w(16, 'breathe') - 0.15, { line: C.mintD, fill: C.white });
          for (let i = 0; i < 4; i++) { const p = pop(t, w(16, 'breathe') + i * 0.12, 1.2); if (p.s > 0) heart(ctx, 200 + i * 230, 640 + Math.sin(t * 4 + i) * 14, 40 * p.s, [C.pinkD, C.mintD, C.skyD, C.lavD][i]); }
        }
        // breath puffs from the nose
        if (inside && breath < 0.35) { ctx.save(); ctx.globalAlpha = 0.85; union(ctx, [cloudP(hx + 330, hy - 440, 0.35)], C.white, 4); ctx.restore(); }
      }
      twinkles(ctx, W, HH, t, 12, 6, (x, y) => y > 200 && y < 1600);
    } },
    // 6: slow = clumsy, walks on five legs (tail is the fifth)
    { s: P_[17].s, draw(ctx, t) {
      bgV(ctx, t, TH.lav, 77);
      ground(ctx, t, 1500, t * 60, '#d6f2c4', '#a6dc94');
      const five = t >= w(18, 'walks') - 0.4 ? 1 : 0.15;
      // shuffle: the body rocks forward onto the arms + tail, then swings the big feet
      const cyc = (t * 1.1) % 1, rock = five > 0.5 ? Math.sin(cyc * TAU) * 0.08 : Math.sin(t * 7) * 0.05;
      const tg = t >= w(19, 'tail') - 0.15 ? t : 0;
      kanga(ctx, 560, 1500, 1.05, { five: five > 0.5 ? 0.85 + rock : 0.1, tilt: five > 0.5 ? 0 : rock, eyes: t < P_[18].s ? 'squeeze' : 'normal', mouth: t < P_[18].s ? 'wobble' : 'w', tailGlow: tg });
      if (t < P_[18].s - 0.1) {
        big(ctx, 'SLOW?', 540, 320, 150, t, w(17, 'slow') - 0.15, { line: C.lavD, fill: C.white });
        big(ctx, 'CLUMSY', 540, 480, 130, t, w(17, 'clumsy') - 0.15, { line: C.pinkD, fill: C.butter });
        if (t >= w(17, 'clumsy')) { sweat(ctx, 760, 900, 1.3); const q = pop(t, w(17, 'clumsy'), 1.2); kana(ctx, 'よいしょ', 830, 1080, 64, 0.1, q.s, C.white); }
      } else {
        big(ctx, 'LEGS', 640, 380, 140, t, w(18, 'legs') - 0.15, { line: C.lavD, fill: C.white });
        // counter 1..5 on the word five
        const t5 = w(18, 'five') - 0.15;
        if (t >= t5) { const n = Math.min(5, 1 + Math.floor((t - t5) / 0.09)); numPop(ctx, String(n), 330, 400, 200, t, t5 + (n - 1) * 0.09, { line: C.pinkD, fill: C.butter }); }
        // numbered dots on the contact points: 2 feet, 2 hands, tail
        const pts = [[530, 1490], [620, 1490], [730, 1490], [820, 1490], [290, 1490]];
        pts.forEach((p, i) => { const q = pop(t, t5 + i * 0.09, 1.3); if (q.s > 0) { ctx.save(); ctx.translate(p[0], p[1] + 60); ctx.scale(q.sx, q.sy); cel(ctx, ellP(0, 0, 34, 34), i === 4 ? C.butterD : C.white, C.creamS, -3, -3, 4); ctx.fillStyle = C.plum; ctx.font = `700 40px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(i + 1), 0, 2); ctx.restore(); } });
        if (t >= w(19, 'tail') - 0.15) { label(ctx, 'TAIL = LEG 5', 340, 1290, 60, t, w(19, 'tail') - 0.15, C.butter); }
      }
    } },
    // 7: ending — the kid on pogo-spring legs
    { s: P_[20].s, draw(ctx, t) {
      bgV(ctx, t, TH.pink, 78);
      ground(ctx, t, 1500, 0, '#c6e7ff', '#8cc6f2');
      const hc = hopCycle(t, P_[20].s + 0.2, 0.55, 150);
      kid(ctx, 540, 1500, 1.15, { pogo: { c: hc.crouch }, lift: hc.lift, eyes: t > w(21, 'walk') ? 'star' : 'happy', mouth: 'smile' });
      if (hc.crouch > 0.5) impactLines(ctx, 540, 1490, 80, t, t - 0.05, 8, C.plum);
      if (t < w(21, 'walk') - 0.15) {
        big(ctx, 'POGO LEGS?', 540, 330, 130, t, w(20, 'pogospring') - 0.15, { line: C.pinkD, fill: C.butter });
      } else {
        big(ctx, 'WALK', 540, 300, 140, t, w(21, 'walk') - 0.15, { line: C.lavD, fill: C.white });
        big(ctx, 'AGAIN?', 540, 450, 140, t, w(21, 'again') - 0.15, { line: C.lavD, fill: C.butter });
        choice(ctx, 300, 640, 'YES', C.mint, t, w(21, 'again') + 0.15);
        choice(ctx, 780, 640, 'NO WAY', C.sky, t, w(21, 'again') + 0.35);
        const q = pop(t, w(21, 'again') + 0.6, 1.2);
        if (q.s > 0) { ctx.save(); ctx.translate(540, 1620); ctx.scale(q.sx, q.sy); cel(ctx, rrP(-380, -55, 760, 100, 50), C.white, C.creamS, -6, -6, 5); ctx.font = `700 52px ${FONT}`; ctx.textAlign = 'center'; ctx.fillStyle = C.plum; ctx.fillText('tell me in the comments!', 0, 16); ctx.restore(); }
      }
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
  function thumbnail(ctx) { scenes[0].draw(ctx, 4.6); }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    const hops = (t0, t1, per, gain = 0.5) => { for (let at = t0 + per * 0.78; at < t1; at += per) k.play('thud', at, { gain, minor: true }); for (let at = t0; at < t1; at += per) k.play('jump', at, { gain: gain * 0.6, minor: true }); };
    CUTS.forEach((c) => { k.noise(c.t - 0.22, { dur: 0.42, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.42, 3000]], q: 0.9, gain: 0.3, a: 0.08 }); k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    // hook
    pop_(0.05, 600, 0.7, 0, false); hops(0.1, P_[1].e, 0.62, 0.45); k.play('whoosh', 0.2, { dur: 1.2, gain: 0.25 });
    pop_(w(0, 'kangaroos') - 0.15, 700); big_(w(0, '50') - 0.12, 'G5');
    k.play('powerup', w(0, 'almost') - 0.15, { gain: 0.3 }); pop_(w(0, 'extra') - 0.12, 800);
    k.play('error', w(1, 'gasping') - 0.1, { f: 'A3', gain: 0.22 }); k.play('hurt', P_[1].s, { gain: 0.25, minor: true });
    // graph
    pop_(w(2, 'hops') - 0.15, 700, 0.8, 0, false); k.play('riser', w(2, 'hops'), { dur: 3.0, gain: 0.2 });
    for (let i = 1; i <= 4; i++) k.play('tick', w(2, 'hops') + i * 0.6, { gain: 0.5, minor: true });
    pop_(w(3, 'oxygen') - 0.15, 900, 0.8, 0.3, false); big_(w(3, 'barely') - 0.12, 'C6');
    // why
    big_(w(4, 'hop') - 0.15, 'A5'); pop_(w(4, 'run') - 0.15, 600, 0.8, 0, false); k.play('whoosh', w(5, 'all') - 0.1, { dur: 0.7, gain: 0.35 });
    k.play('impact', w(5, 'legs') - 0.1, { gain: 0.4 }); k.play('sparkle', w(5, 'legs'), { n: 5, gain: 0.4 });
    // tendon
    pop_(w(6, 'achilles') - 0.15, 700, 0.8, 0, false); pop_(w(6, 'tendon') - 0.15, 900); pop_(w(6, 'huge') - 0.12, 600, 0.6, 0.4);
    pop_(w(7, 'pogo') - 0.15, 800, 0.8, 0, false); for (let i = 0; i < 4; i++) k.play('jump', w(7, 'spring') - 0.15 + i * 0.39, { gain: 0.35, minor: true });
    k.play('thud', w(8, 'lands') - 0.12, { gain: 0.6 }); k.play('riser', w(8, 'stretches') - 0.15, { dur: 0.6, gain: 0.3 });
    k.play('powerup', w(9, 'storing') - 0.15, { gain: 0.35 }); k.play('ding', w(9, 'energy') - 0.1, { f: 'E6', gain: 0.3 });
    k.play('slap', w(10, 'snaps') - 0.12, { gain: 0.5 }); k.play('jump', w(10, 'snaps') - 0.1, { gain: 0.7 }); k.play('whoosh', w(10, 'snaps'), { dur: 0.6, gain: 0.35 });
    pop_(w(11, 'next') - 0.15, 900, 0.8, 0, false);
    // bound
    pop_(w(12, 'bound') - 0.15, 700, 0.8, 0, false); k.play('jump', w(12, 'bound') - 0.15, { gain: 0.6 }); k.play('whoosh', w(12, 'bound'), { dur: 1.2, gain: 0.3 });
    k.play('tape', w(12, 'cover') - 0.15, { gain: 0.35 }); pop_(w(12, 'up') - 0.12, 800);
    big_(w(12, 'nine') - 0.12, 'E6'); k.play('thud', w(12, 'bound') - 0.15 + 1.4, { gain: 0.5 }); k.play('success', w(12, 'metres'), { f: 'C6', gain: 0.35 });
    // bonus + breathing
    k.play('coin', w(13, 'bonus') - 0.15, { gain: 0.5 }); k.play('sparkle', w(13, 'bonus'), { n: 6, gain: 0.45 });
    hops(w(14, 'bounce') - 0.12, P_[16].e, 0.9, 0.4);
    pop_(w(14, 'sloshes') - 0.15, 600, 0.8, 0, false); pop_(w(14, 'gut') - 0.12, 700, 0.8, 0.3, false);
    for (let at = w(14, 'bounce') - 0.12; at < P_[16].e; at += 0.9) k.noise(at + 0.1, { dur: 0.5, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.5, 1400]], q: 0.7, gain: 0.08, a: 0.15, minor: true });
    pop_(w(15, 'lungs') - 0.15, 900, 0.8, 0.3, false); pop_(w(15, 'air') - 0.15, 800);
    big_(w(16, 'helps') - 0.15, 'G6'); for (let i = 0; i < 4; i++) pop_(w(16, 'breathe') + i * 0.12, 800 + i * 120, 0.5);
    // slow
    pop_(w(17, 'slow') - 0.15, 500, 0.8, 0, false); k.play('buzz', w(17, 'clumsy') - 0.15, { dur: 0.25, f: 140, gain: 0.3 });
    for (let at = w(18, 'walks') - 0.3; at < P_[19].e; at += 0.9) { k.play('tock', at, { f: 500, gain: 0.4, minor: true }); k.play('tock', at + 0.3, { f: 380, gain: 0.35, minor: true }); }
    for (let i = 0; i < 5; i++) k.play('count', w(18, 'five') - 0.15 + i * 0.09, { gain: 0.4, minor: true });
    big_(w(18, 'five') - 0.15 + 0.4, 'C6'); pop_(w(19, 'tail') - 0.15, 900, 0.8, -0.3, false); k.play('sparkle', w(19, 'fifth') - 0.1, { n: 5, gain: 0.4 });
    // end
    pop_(w(20, 'pogospring') - 0.15, 800, 0.8, 0, false);
    for (let at = P_[20].s + 0.2 + 0.55 * 0.78; at < DURATION - 0.2; at += 0.55) k.play('jump', at, { gain: 0.35, minor: true });
    pop_(w(21, 'walk') - 0.15, 700, 0.8, 0, false); pop_(w(21, 'again') - 0.15, 900, 0.8, 0, false);
    pop_(w(21, 'again') + 0.15, 600, 0.8, -0.5, false); pop_(w(21, 'again') + 0.35, 900, 0.8, 0.5, false);
    k.play('success', w(21, 'again') + 0.6, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(21, 'again') + 0.6, { n: 8, gain: 0.6 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
