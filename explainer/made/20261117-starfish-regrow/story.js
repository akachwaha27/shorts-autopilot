// ===== Kawaii Anime, vertical: "Why can a starfish regrow a whole arm?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'ポイッにょきニョキキラガーンパッぷにっ';
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
  const P_ = [{"s":0.25,"e":1.51,"text":"You can't regrow a finger,","words":[["you",0.25],["cant",0.44],["regrow",0.69],["a",1.07],["finger",1.13]]},{"s":1.99,"e":3.86,"text":"but one starfish arm can grow","words":[["but",1.99],["one",2.22],["starfish",2.46],["arm",3.08],["can",3.32],["grow",3.55]]},{"s":3.86,"e":5.83,"text":"four new arms and a whole body.","words":[["four",3.86],["new",4.19],["arms",4.44],["and",4.77],["a",5.01],["whole",5.09],["body",5.51]]},{"s":6.23,"e":9.76,"text":"When a crab grabs one, it can drop the arm on purpose.","words":[["when",6.23],["a",6.57],["crab",6.66],["grabs",7.0],["one",7.43],["it",7.69],["can",7.86],["drop",8.12],["the",8.47],["arm",8.73],["on",8.98],["purpose",9.16]]},{"s":10.12,"e":13.31,"text":"A muscle at the base squeezes, and the arm lets go.","words":[["a",10.12],["muscle",10.21],["at",10.7],["the",10.86],["base",11.11],["squeezes",11.43],["and",12.09],["the",12.33],["arm",12.58],["lets",12.82],["go",13.15]]},{"s":13.7,"e":15.35,"text":"Then the wound seals itself shut,","words":[["then",13.7],["the",13.95],["wound",14.13],["seals",14.44],["itself",14.74],["shut",15.11]]},{"s":15.83,"e":18.42,"text":"and skin creeps over it in about two days.","words":[["and",15.83],["skin",16.07],["creeps",16.38],["over",16.85],["it",17.17],["in",17.33],["about",17.48],["two",17.87],["days",18.11]]},{"s":18.77,"e":21.34,"text":"Muscle cells turn back into simpler cells","words":[["muscle",18.77],["cells",19.21],["turn",19.58],["back",19.88],["into",20.17],["simpler",20.46],["cells",20.98]]},{"s":21.7,"e":23.16,"text":"and crawl toward the stump.","words":[["and",21.7],["crawl",21.9],["toward",22.23],["the",22.63],["stump",22.83]]},{"s":23.61,"e":25.2,"text":"The first part to grow back?","words":[["the",23.61],["first",23.82],["part",24.19],["to",24.48],["grow",24.62],["back",24.91]]},{"s":25.74,"e":27.44,"text":"A tiny tube foot at the tip.","words":[["a",25.74],["tiny",25.82],["tube",26.14],["foot",26.47],["at",26.79],["the",26.95],["tip",27.2]]},{"s":27.89,"e":29.59,"text":"It works like a signal tower,","words":[["it",27.89],["works",28.04],["like",28.41],["a",28.7],["signal",28.78],["tower",29.22]]},{"s":30.06,"e":32.4,"text":"telling everything behind it where to grow.","words":[["telling",30.06],["everything",30.52],["behind",31.17],["it",31.56],["where",31.69],["to",32.01],["grow",32.14]]},{"s":32.76,"e":36.2,"text":"Tube feet, little bones and muscle fill in, one by one.","words":[["tube",32.76],["feet",33.08],["little",33.41],["bones",33.9],["and",34.31],["muscle",34.56],["fill",35.05],["in",35.38],["one",35.54],["by",35.79],["one",35.95]]},{"s":36.58,"e":39.16,"text":"The whole arm takes a few months to over a year.","words":[["the",36.58],["whole",36.79],["arm",37.14],["takes",37.35],["a",37.7],["few",37.77],["months",37.98],["to",38.4],["over",38.53],["a",38.81],["year",38.88]]},{"s":39.6,"e":41.05,"text":"And in Linckia sea stars,","words":[["and",39.6],["in",39.82],["linckia",39.96],["sea",40.47],["stars",40.69]]},{"s":41.45,"e":44.1,"text":"one arm alone can grow a brand new body.","words":[["one",41.45],["arm",41.71],["alone",41.96],["can",42.39],["grow",42.65],["a",42.99],["brand",43.07],["new",43.5],["body",43.76]]},{"s":44.48,"e":46.85,"text":"So if one arm can make a whole starfish,","words":[["so",44.48],["if",44.63],["one",44.79],["arm",45.02],["can",45.25],["make",45.48],["a",45.78],["whole",45.86],["starfish",46.24]]},{"s":47.28,"e":49.32,"text":"which one is the real starfish?","words":[["which",47.28],["one",47.69],["is",47.93],["the",48.1],["real",48.34],["starfish",48.67]]}];
  // ---------- timing ----------
  const BEATS = [
    { id: 'hook', s: P_[0].s, e: P_[2].e }, { id: 'crab', s: P_[3].s, e: P_[3].e }, { id: 'muscle', s: P_[4].s, e: P_[4].e },
    { id: 'heal', s: P_[5].s, e: P_[6].e }, { id: 'cells', s: P_[7].s, e: P_[8].e }, { id: 'tip', s: P_[9].s, e: P_[12].e },
    { id: 'fill', s: P_[13].s, e: P_[14].e }, { id: 'linckia', s: P_[15].s, e: P_[16].e }, { id: 'end', s: P_[17].s, e: P_[18].e },
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

  // ---------- palette for this film ----------
  const SF = { b: '#ffa98a', s: '#f27e6a', dot: '#ffe0c4', tip: '#e2475f' };          // coral sea star
  const LK = { b: '#8fc8ff', s: '#5a9be8', dot: '#d6ecff', tip: '#3f6fd0' };          // blue Linckia
  const SEA = { base: '#d9f1ff', dot: '#c2e6fb', acc: '#fff1a0', kind: 'stars' };
  const CRAB = { b: '#ff8a7a', s: '#e0605a' };

  // ---------- cast ----------
  // one tapered arm as a rounded polygon, base at the origin, pointing along +x
  function armLocal(len, wb, wt) {
    const L = Math.max(len, wt * 1.2);
    return roundPoly([[-wb * 0.3, -wb], [L, -wt], [L + wt * 0.9, 0], [L, wt], [-wb * 0.3, wb]], wt * 0.95);
  }
  function armP(a, len, wb, wt, r0 = 0) { const p = new Path2D(); p.addPath(armLocal(len, wb, wt), new DOMMatrix().rotate(a * 180 / Math.PI).translate(r0, 0)); return p; }
  // Stella: a chibi sea star. (x,y) = disc centre. P: arms[5] (0..1 length), disc (0..1), rot, eyes, mouth, look, sq, col, face
  function seaStar(ctx, x, y, s, P = {}) {
    const col = P.col || SF, arms = P.arms || [1, 1, 1, 1, 1], R = 165, wb = 50, wt = 19, disc = P.disc == null ? 1 : P.disc;
    const sq = P.sq || [1, 1];
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); ctx.scale(s * sq[0], s * sq[1]);
    const paths = [], dr = 70 * (0.45 + 0.55 * disc);
    paths.push(ellP(0, 0, dr, dr));
    const A = (i) => -Math.PI / 2 + i * TAU / 5;
    arms.forEach((l, i) => { if (l > 0.02) paths.push(armP(A(i), (R - 30) * l + 10, wb * (0.55 + 0.45 * Math.min(1, l * 1.6)) * (0.6 + 0.4 * disc), wt * (0.6 + 0.4 * Math.min(1, l * 2)), 20)); });
    // union: thick plum outline under, then shade fill, then the base tone shifted up-left (one cel tone)
    ctx.save(); ctx.lineJoin = 'round'; ctx.lineWidth = 11; ctx.strokeStyle = C.plum; paths.forEach((p) => ctx.stroke(p)); ctx.restore();
    const all = new Path2D(); paths.forEach((p) => all.addPath(p));
    ctx.fillStyle = col.s; ctx.fill(all);
    ctx.save(); ctx.clip(all); ctx.translate(-9, -9); ctx.fillStyle = col.b; ctx.fill(all); ctx.restore();
    // bumpy texture dots and the red eyespot at each tip
    arms.forEach((l, i) => {
      if (l < 0.15) return; const a = A(i), ca = Math.cos(a), sa = Math.sin(a), len = (R - 30) * l + 30;
      for (let d = 46; d < len - 18; d += 26) { const rr = 7 * (1 - d / (len + 60)); ctx.fillStyle = col.dot; ctx.fill(ellP(ca * d - sa * 13, sa * d + ca * 13, rr, rr)); ctx.fill(ellP(ca * d + sa * 13, sa * d - ca * 13, rr, rr)); }
      if (l > 0.35) { ctx.fillStyle = col.tip; ctx.fill(ellP(ca * (len + 4), sa * (len + 4), 6, 6)); }
    });
    shine(ctx, -36, -dr * 0.62, 18, 9, -0.5, 0.75);
    if (P.face !== false && disc > 0.6) {
      ctx.save(); ctx.rotate(-(P.rot || 0) * 0.6);
      const ey = P.eyes || 'normal';
      eye(ctx, -27, -8, 15, 20, col === LK ? '#4a7fd6' : '#d4567a', ey, -1, P.look || [0, 0]);
      eye(ctx, 27, -8, 15, 20, col === LK ? '#4a7fd6' : '#d4567a', ey, 1, P.look || [0, 0]);
      blush(ctx, -44, 18, 12, 7); blush(ctx, 44, 18, 12, 7);
      mouth(ctx, 0, 22, 9, P.mouth || 'w');
      ctx.restore();
    }
    ctx.restore();
  }
  // a lone arm (base torn flat), base at (x,y), pointing at angle a
  function looseArm(ctx, x, y, a, s, col = SF, grown = 0) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.scale(s, s);
    const p = armLocal(150, 48, 19);
    cel(ctx, p, col.b, col.s, -8, -8, 5.5);
    for (let d = 26; d < 140; d += 26) { const rr = 7 * (1 - d / 220); ctx.fillStyle = col.dot; ctx.fill(ellP(d, -13, rr, rr)); ctx.fill(ellP(d, 13, rr, rr)); }
    ctx.fillStyle = col.tip; ctx.fill(ellP(170, 0, 6, 6));
    ctx.restore();
  }
  function finger(ctx, x, y, s, rot = 0) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const p = rrP(-60, -230, 120, 420, 60); cel(ctx, p, C.peach, C.peachS, -8, -8, 5.5);
    const n = rrP(-38, -205, 76, 90, 32); cel(ctx, n, '#fff4f0', '#f6d6d6', -4, -4, 4);
    ctx.strokeStyle = C.peachS; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-30, -40); ctx.quadraticCurveTo(0, -30, 30, -40); ctx.moveTo(-26, -20); ctx.quadraticCurveTo(0, -10, 26, -20); ctx.stroke();
    ctx.restore();
  }
  function bigX(ctx, x, y, s, prog) {
    if (prog <= 0) return; ctx.save(); ctx.translate(x, y); ctx.lineCap = 'round';
    const segs = [[-1, -1, 1, 1], [1, -1, -1, 1]];
    segs.forEach(([a, b, c, d], i) => { const u = H.clamp(prog * 2 - i); if (u <= 0) return; ctx.beginPath(); ctx.moveTo(a * s, b * s); ctx.lineTo(H.lerp(a, c, u) * s, H.lerp(b, d, u) * s); ctx.lineWidth = 58; ctx.strokeStyle = C.plum; ctx.stroke(); ctx.lineWidth = 40; ctx.strokeStyle = C.red; ctx.stroke(); });
    ctx.restore();
  }
  // chibi crab with one big claw that can pinch (pinch 0 open .. 1 closed)
  function crab(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.strokeStyle = C.plum; ctx.lineCap = 'round';
    for (let i = 0; i < 3; i++) for (const sd of [-1, 1]) { ctx.lineWidth = 22; ctx.beginPath(); ctx.moveTo(sd * 90, 30 + i * 22); ctx.quadraticCurveTo(sd * 160, 20 + i * 30, sd * 175, 90 + i * 26); ctx.stroke(); ctx.lineWidth = 12; ctx.strokeStyle = CRAB.s; ctx.stroke(); ctx.strokeStyle = C.plum; }
    // claw arm reaching right
    const reach = P.reach || 0, cx = 170 + reach, cy = -60;
    ctx.lineWidth = 34; ctx.beginPath(); ctx.moveTo(60, -20); ctx.quadraticCurveTo(120, -90, cx - 40, cy); ctx.stroke(); ctx.lineWidth = 20; ctx.strokeStyle = CRAB.b; ctx.stroke();
    const op = (1 - (P.pinch || 0)) * 0.55;
    ctx.save(); ctx.translate(cx, cy);
    const up = new Path2D(); up.ellipse(30, 0, 70, 34, -op, Math.PI, TAU); up.closePath();
    const dn = new Path2D(); dn.ellipse(30, 0, 70, 30, op, 0, Math.PI); dn.closePath();
    cel(ctx, up, CRAB.b, CRAB.s, -5, -5, 5); cel(ctx, dn, CRAB.b, CRAB.s, -5, -5, 5);
    ctx.restore();
    const body = ellP(0, 0, 130, 88); cel(ctx, body, CRAB.b, CRAB.s, -9, -9, 5.5);
    for (const sd of [-1, 1]) { ctx.lineWidth = 14; ctx.strokeStyle = C.plum; ctx.beginPath(); ctx.moveTo(sd * 40, -70); ctx.lineTo(sd * 48, -120); ctx.stroke(); ctx.fillStyle = C.white; ctx.fill(ellP(sd * 48, -136, 26, 26)); ol(ctx, ellP(sd * 48, -136, 26, 26), 4); ctx.fillStyle = C.dark; ctx.fill(ellP(sd * 48 + 6, -134, 12, 14)); ctx.fillStyle = C.white; ctx.fill(ellP(sd * 48 + 2, -140, 4, 4)); }
    mouth(ctx, 0, 18, 14, P.mouth || 'w'); blush(ctx, -70, 10, 18, 10); blush(ctx, 70, 10, 18, 10);
    ctx.restore();
  }
  // a cell: 'muscle' (long striped spindle) morphs to 'simple' (round, nucleus, cute face) with m 0..1
  function cell(ctx, x, y, r, m, t, ph = 0) {
    const rx = r * H.lerp(2.0, 1.0, m), ry = r * H.lerp(0.62, 1.0, m), wob = Math.sin(t * 6 + ph) * 0.05;
    const base = H.rgba(H.mix('#ff9db8', '#c8b6ff', m)), sh = H.rgba(H.mix('#f277a0', '#9d86e8', m));
    ctx.save(); ctx.translate(x, y); ctx.scale(1 + wob, 1 - wob);
    const p = ellP(0, 0, rx, ry); cel(ctx, p, base, sh, -5, -5, 4.5);
    if (m < 0.6) { ctx.save(); ctx.clip(p); ctx.globalAlpha = 1 - m / 0.6; ctx.strokeStyle = 'rgba(160,50,100,0.45)'; ctx.lineWidth = 5; ctx.beginPath(); for (let i = -4; i <= 4; i++) { ctx.moveTo(i * rx * 0.2, -ry); ctx.lineTo(i * rx * 0.2, ry); } ctx.stroke(); ctx.restore(); }
    ctx.fillStyle = H.rgba(H.mix('#c2457a', '#6b4fc8', m), 0.85); ctx.fill(ellP(rx * 0.25, -ry * 0.1, r * 0.28, r * 0.24));
    if (m > 0.7) { eye(ctx, -r * 0.35, -r * 0.05, r * 0.13, r * 0.17, '#6b4fc8', 'normal'); eye(ctx, -r * 0.02, -r * 0.05, r * 0.13, r * 0.17, '#6b4fc8', 'normal'); mouth(ctx, -r * 0.18, r * 0.25, r * 0.08, 'w'); }
    shine(ctx, -rx * 0.45, -ry * 0.5, rx * 0.16, ry * 0.12, -0.5, 0.8);
    ctx.restore();
  }
  function calendar(ctx, x, y, s, str, sub) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-120, -110, 240, 230, 34), C.white, C.creamS, -6, -6, 5.5);
    const top = rrP(-120, -110, 240, 70, [34, 34, 0, 0]); cel(ctx, top, C.pinkD, '#e05080', -4, -4, 5.5);
    for (const sx of [-60, 60]) { ctx.fillStyle = C.plum; ctx.fill(rrP(sx - 9, -135, 18, 50, 9)); }
    kText(ctx, str, 0, 55, 96, { line: C.lavD, outer: C.plum, ow: 0.06, lw: 0.14 });
    if (sub) { ctx.font = `700 34px ${FONT}`; ctx.fillStyle = C.white; ctx.textAlign = 'center'; ctx.fillText(sub, 0, -62); }
    ctx.restore();
  }
  function bubbles(ctx, t, seed, n = 14) {
    const r = H.rng(seed);
    for (let i = 0; i < n; i++) { const x = r.range(60, W - 60), sp = r.range(50, 110), R = r.range(8, 22), y = HH - ((r.range(0, HH) + t * sp) % (HH + 100)); ctx.save(); ctx.globalAlpha = 0.6; ctx.strokeStyle = C.white; ctx.lineWidth = 5; ctx.stroke(ellP(x + Math.sin(t * 2 + i) * 10, y, R, R)); ctx.restore(); shine(ctx, x - R * 0.3 + Math.sin(t * 2 + i) * 10, y - R * 0.3, R * 0.25, R * 0.15, -0.5, 0.7); }
  }
  function sand(ctx, y, col = '#ffe6b3', shade = '#f2c985') {
    const p = new Path2D(); p.moveTo(-20, y); for (let x = 0; x <= W + 40; x += 60) p.quadraticCurveTo(x + 30, y - 18 + (x % 120 ? 10 : 0), x + 60, y); p.lineTo(W + 20, HH + 20); p.lineTo(-20, HH + 20); p.closePath();
    cel(ctx, p, col, shade, 0, -10, 5);
  }
  // signal rings radiating from a point
  function rings(ctx, x, y, t, t0, col) {
    if (t < t0) return;
    for (let i = 0; i < 3; i++) { const u = ((t - t0) * 0.9 + i / 3) % 1, R = 30 + u * 230; ctx.save(); ctx.globalAlpha = (1 - u) * 0.9; ctx.lineWidth = 14; ctx.strokeStyle = col; ctx.setLineDash([2, 26]); ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(x, y, R, -Math.PI * 0.95, Math.PI * 0.95); ctx.stroke(); ctx.restore(); }
  }

  // ---------- scenes ----------
  const scenes = [
    function hook(ctx, t) {
      bgV(ctx, t, TH.butter, 61);
      const t1 = P_[1].s - 0.1;
      if (t < t1) {
        const p = pop(t, 0.05, 1.1);
        ctx.save(); ctx.translate(540, 1150); ctx.scale(p.sx, p.sy); finger(ctx, 0, 0, 1.15, 0.12 + Math.sin(t * 5) * 0.03); ctx.restore();
        bigX(ctx, 540, 1080, 230, grow(t, w(0, 'regrow') - 0.15, 0.35));
        big(ctx, 'REGROW?', 540, 420, 150, t, w(0, 'regrow') - 0.12, { line: C.pinkD });
        label(ctx, 'your finger', 540, 1620, 64, t, w(0, 'finger') - 0.15, C.white);
      } else {
        // one arm sprouts a whole new body ("comet" form)
        const g = grow(t, w(2, 'four') - 0.15, w(2, 'body') - w(2, 'four') + 0.3);
        const p = pop(t, t1, 1.1), disc = H.lerp(0.25, 1, grow(t, w(2, 'whole') - 0.2, 0.5));
        const sm = (k) => H.clamp(g * 1.3 - k * 0.08);
        seaStar(ctx, 540, 1120 + bob(t, 0, 8), 2.0 * p.s, { arms: [1, sm(0), sm(1), sm(2), sm(3)], disc, rot: 0.25, eyes: t >= w(2, 'body') - 0.1 ? 'star' : 'normal', mouth: t >= w(2, 'body') - 0.1 ? 'smile' : 'w', look: [0, -0.3] });
        big(ctx, '1 ARM', 540, 380, 170, t, w(1, 'one') - 0.12, { line: C.pinkD, fill: C.butter });
        if (t >= w(2, 'four') - 0.12) { numPop(ctx, '+4 ARMS', 540, 580, 130, t, w(2, 'four') - 0.12, { fill: C.white, line: SF.s }); for (let i = 0; i < 4; i++) { const q = pop(t, w(2, 'four') - 0.1 + i * 0.12, 1.3); kana(ctx, 'にょき', [230, 850, 260, 830][i], [900, 960, 1440, 1400][i], 56, (i % 2 ? 0.2 : -0.2), q.s * (t < w(2, 'whole') ? 1 : 0), C.butter); } }
        if (t >= w(2, 'whole') - 0.12) { big(ctx, 'WHOLE BODY!', 540, 1610, 110, t, w(2, 'whole') - 0.12, { line: C.mintD, fill: C.butter }); confetti(ctx, t, w(2, 'body'), 540, 1100, 50, 7); }
      }
      twinkles(ctx, W, HH, t, 21, 10, (x, y) => y > 200 && y < 1700 && x > 150 && x < 930);
    },
    function crabS(ctx, t) {
      bgV(ctx, t, SEA, 62); bubbles(ctx, t, 3); sand(ctx, 1420);
      const tg = w(3, 'grabs') - 0.15, td = w(3, 'drop') - 0.12;
      const reach = grow(t, w(3, 'crab') - 0.2, 0.5) * 70, pinch = H.clamp((t - tg) / 0.15);
      const dropped = t >= td, run = dropped ? H.ease.inOut(H.clamp((t - td) / 0.9)) : 0;
      crab(ctx, 250, 1290, 1.05, { reach, pinch, mouth: pinch > 0.5 ? 'smile' : 'w' });
      // the starfish: arm 3 (lower-left) held by the claw; after the drop the star scoots right, the arm stays in the claw
      const sx = 700 + run * 200, sy = 1180 - Math.abs(Math.sin(run * Math.PI * 3)) * 40 * (1 - run);
      seaStar(ctx, sx, sy, 1.15, { arms: dropped ? [1, 1, 1, 0, 1] : [1, 1, 1, 1, 1], rot: 0.3 + run * 0.4, eyes: pinch > 0.3 && !dropped ? 'shock' : dropped ? (run > 0.95 ? 'happy' : 'squeeze') : 'normal', mouth: pinch > 0.3 ? 'O' : 'w', sq: dropped ? squash(t, td) : [1, 1] });
      if (pinch > 0.3 && !dropped) { sweat(ctx, 860, 1000, 1.2); impactLines(ctx, 520, 1240, 40, t, tg, 8); }
      if (dropped) { looseArm(ctx, 470, 1235, Math.PI * 0.82, 1.15); impactLines(ctx, 560, 1200, 40, t, td, 9, C.pinkD); const q = pop(t, td, 1.2); kana(ctx, 'ポイッ', 560, 980, 96, -0.12, q.s, C.butter); }
      big(ctx, 'CRAB!', 540, 380, 150, t, w(3, 'crab') - 0.12, { line: CRAB.s });
      if (dropped) { stampLike(ctx, 'ON PURPOSE!', 540, 600, 100, t, w(3, 'purpose') - 0.12); label(ctx, 'drop the arm', 540, 760, 56, t, td, C.white); }
    },
    function muscleS(ctx, t) {
      bgV(ctx, t, TH.lav, 63);
      // close-up of an arm joint: disc on the left, arm going right, a ring muscle at the base
      const y = 1080, xb = 450, sq = t >= w(4, 'squeezes') - 0.12, lg = w(4, 'lets') - 0.12;
      const sep = grow(t, lg, 0.5) * 140, k = sq ? 0.5 + 0.5 * Math.sin((t - w(4, 'squeezes')) * 18) * Math.exp(-(t - w(4, 'squeezes')) * 2) : 0;
      const disc = ellP(140, y, 260, 300); cel(ctx, disc, SF.b, SF.s, -12, -12, 6);
      ctx.save(); ctx.translate(sep, 0);
      const arm = roundPoly([[xb, y - 150 + k * 30], [1040, y - 90], [1110, y], [1040, y + 90], [xb, y + 150 - k * 30]], 70);
      cel(ctx, arm, SF.b, SF.s, -12, -12, 6);
      for (let d = 560; d < 1020; d += 70) { ctx.fillStyle = SF.dot; ctx.fill(ellP(d, y - 50, 14, 14)); ctx.fill(ellP(d, y + 50, 14, 14)); }
      ctx.restore();
      // the ring muscle (a squeezing band at the base)
      const mp = pop(t, w(4, 'muscle') - 0.12, 1.2);
      if (mp.s > 0) {
        ctx.save(); ctx.translate(xb + 10 + sep * 0.15, y); ctx.scale(mp.sx * (1 - k * 0.12), mp.sy * (1 - k * 0.25));
        const band = rrP(-36, -170, 72, 340, 36); cel(ctx, band, C.pinkD, '#e0507f', -5, -5, 5);
        ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 6; ctx.beginPath(); for (let j = -130; j <= 130; j += 40) { ctx.moveTo(-22, j); ctx.lineTo(22, j + 16); } ctx.stroke();
        ctx.restore();
        if (sq && t < lg + 0.3) { for (const sd of [-1, 1]) { const a = 20 + 10 * Math.sin(t * 20); ctx.save(); ctx.translate(xb + 10, y + sd * (250 + a)); ctx.rotate(sd > 0 ? -Math.PI / 2 : Math.PI / 2); dotted(ctx, [[0, 0], [60, 0]], 1, C.pinkD, 8, 22, 1.1); ctx.restore(); } }
      }
      label(ctx, 'muscle at the base', 520, 760, 58, t, w(4, 'base') - 0.15, C.pink);
      big(ctx, 'SQUEEZE!', 540, 420, 150, t, w(4, 'squeezes') - 0.12, { line: C.pinkD, fill: C.butter });
      if (t >= lg) { const q = pop(t, lg, 1.2); kana(ctx, 'パッ', 820, 1400, 110, 0.12, q.s, C.butter); big(ctx, 'LET GO!', 540, 1610, 120, t, lg, { line: C.lavD, fill: C.white }); impactLines(ctx, xb + 70, y, 60, t, lg, 10); }
    },
    function healS(ctx, t) {
      bgV(ctx, t, TH.pink, 64);
      // looking straight at the stump: a round wound that closes, then skin creeps over it
      const cx = 540, cy = 1080, R = 260;
      const sk = ellP(cx, cy, R + 70, R + 70); cel(ctx, sk, SF.b, SF.s, -12, -12, 6);
      const r = H.rng(5); for (let i = 0; i < 26; i++) { const a = r() * TAU, d = r.range(R * 0.98, R + 55); ctx.fillStyle = SF.dot; ctx.fill(ellP(cx + Math.cos(a) * d, cy + Math.sin(a) * d, 10, 10)); }
      const close = grow(t, w(5, 'seals') - 0.15, w(5, 'shut') - w(5, 'seals') + 0.4); // ring contracts
      const wr = R * H.lerp(0.95, 0.55, close);
      const wound = ellP(cx, cy, wr, wr * 0.92); cel(ctx, wound, '#ff7f9e', '#e85b80', -6, -6, 5);
      // ring of contracting tissue (the hemostatic ring)
      if (close > 0) { ctx.save(); ctx.globalAlpha = Math.min(1, close * 2); ctx.lineWidth = 22; ctx.strokeStyle = C.pinkD; ctx.setLineDash([30, 18]); ctx.lineDashOffset = -t * 60; ctx.stroke(ellP(cx, cy, wr + 22, wr * 0.92 + 22)); ctx.restore(); }
      // skin creeps in from the edge as a growing plum-outlined disc of skin colour
      const cr = grow(t, w(6, 'creeps') - 0.15, w(6, 'days') - w(6, 'creeps') + 0.2);
      if (cr > 0) { const ir = wr * (1 - cr); ctx.save(); const ring = new Path2D(); ring.ellipse(cx, cy, wr + 2, wr * 0.92 + 2, 0, 0, TAU); ring.ellipse(cx, cy, Math.max(ir, 0.1), Math.max(ir * 0.92, 0.1), 0, 0, TAU); ctx.fillStyle = SF.b; ctx.fill(ring, 'evenodd'); ctx.restore(); if (ir > 2) ol(ctx, ellP(cx, cy, ir, ir * 0.92), 4, C.pinkD); }
      if (cr >= 1) { shine(ctx, cx - 60, cy - 70, 40, 18, -0.5, 0.8); sparkle(ctx, cx + 110, cy - 120, 30, C.white, t); }
      label(ctx, 'wound', 330, 1460, 56, t, w(5, 'wound') - 0.15, C.white);
      big(ctx, 'SEALED!', 540, 400, 150, t, w(5, 'seals') - 0.12, { line: C.pinkD, fill: C.butter });
      label(ctx, 'new skin', 760, 1460, 56, t, w(6, 'skin') - 0.15, C.butter);
      if (t >= w(6, 'two') - 0.15) { const q = pop(t, w(6, 'two') - 0.15, 1.2); calendar(ctx, 870, 680, 0.9 * q.s, '~2', 'DAYS'); }
      if (t >= w(6, 'days') - 0.12) big(ctx, 'ABOUT 2 DAYS', 540, 1630, 100, t, w(6, 'days') - 0.12, { line: C.lavD, fill: C.white });
    },
    function cellsS(ctx, t) {
      bgV(ctx, t, TH.mint, 65);
      // the stump at the top, cells below that simplify and crawl up toward it
      const stump = rrP(300, 380, 480, 330, [0, 0, 160, 160]); cel(ctx, stump, SF.b, SF.s, -10, -10, 6);
      ctx.fillStyle = SF.b; ctx.fillRect(296, 300, 488, 90); ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(300, 300); ctx.lineTo(300, 390); ctx.moveTo(780, 300); ctx.lineTo(780, 390); ctx.stroke(); ctx.restore();
      label(ctx, 'stump', 540, 560, 60, t, w(8, 'stump') - 0.15, C.white);
      const m = grow(t, w(7, 'simpler') - 0.3, 0.6), cr = grow(t, w(8, 'crawl') - 0.15, P_[8].e - w(8, 'crawl') + 0.2);
      const pos = [[240, 1300], [540, 1200], [840, 1310], [380, 1500], [700, 1500]];
      pos.forEach(([x, y], i) => { const q = pop(t, P_[7].s - 0.05 + i * 0.07, 1.2); if (q.s <= 0) return; const tx = 280 + i * 130, ty = 800 + (i % 2) * 110; const px = H.lerp(x, tx, cr), py = H.lerp(y, ty, cr) + Math.sin(t * 8 + i) * 6 * cr; ctx.save(); ctx.translate(px, py); ctx.scale(q.s, q.s); cell(ctx, 0, 0, 62, m, t, i); ctx.restore(); });
      if (cr > 0 && cr < 1) for (let i = 0; i < 3; i++) dotted(ctx, [[260 + i * 280, 1640], [400 + i * 140, 980]], cr, C.mintD, 8, 26, 1.1);
      if (t < w(7, 'simpler') - 0.15) big(ctx, 'MUSCLE CELLS', 540, 1650, 100, t, w(7, 'muscle') - 0.12, { line: C.pinkD, fill: C.white });
      else if (t < w(8, 'crawl') - 0.15) big(ctx, 'SIMPLER CELLS', 540, 1650, 96, t, w(7, 'simpler') - 0.12, { line: C.lavD, fill: C.white });
      else big(ctx, 'CRAWL UP!', 540, 1650, 110, t, w(8, 'crawl') - 0.12, { line: C.mintD, fill: C.butter });
      if (m > 0.5 && m < 1) { const q = pop(t, w(7, 'simpler') - 0.1, 1.2); kana(ctx, 'ぷにっ', 860, 1060, 70, 0.15, q.s, C.lav); }
    },
    function tipS(ctx, t) {
      bgV(ctx, t, SEA, 66); bubbles(ctx, t, 6, 10);
      // the stump seen from the side: disc left, little bud on the right growing a tube foot at its tip
      const y = 1120;
      const bud = grow(t, P_[9].s, 1.2) * 0.25 + grow(t, w(12, 'grow') - 0.2, 0.6) * 0.15;
      const bx0 = 340, bl = 120 + bud * 300;
      const b = roundPoly([[bx0 - 40, y - 70], [bx0 + bl, y - 32], [bx0 + bl + 30, y], [bx0 + bl, y + 32], [bx0 - 40, y + 70]], 30);
      cel(ctx, b, SF.b, SF.s, -8, -8, 5.5);
      seaStar(ctx, 220, y, 1.35, { arms: [1, 0.08, 1, 1, 1], rot: TAU / 20, eyes: t >= w(10, 'tip') - 0.1 ? 'happy' : 'normal', look: [0.8, 0] });
      const fx = bx0 + bl + 34;
      // tube foot: a little stalk with a sucker
      const tf = pop(t, w(10, 'tube') - 0.12, 1.3);
      if (tf.s > 0) { ctx.save(); ctx.translate(fx, y); ctx.scale(tf.sx, tf.sy); const st = rrP(-6, -16, 64, 32, 16); cel(ctx, st, '#ffd3c2', '#f2a890', -3, -3, 4.5); const su = ellP(66, 0, 16, 26); cel(ctx, su, '#ffd3c2', '#f2a890', -3, -3, 4.5); ctx.restore(); sparkle(ctx, fx + 90, y - 70, 24 * tf.s, C.butter, t); }
      if (t < w(10, 'tube') - 0.12) { big(ctx, 'FIRST?', 540, 420, 160, t, w(9, 'first') - 0.12, { line: C.skyD, fill: C.butter }); const q = pop(t, w(9, 'first') - 0.1, 1.2); if (q.s > 0) { ctx.save(); ctx.translate(880, 820); ctx.scale(q.sx, q.sy); bubble(ctx, 0, 0, 200, 140, [-80, 140]); kText(ctx, '?', 0, 36, 110, { line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 }); ctx.restore(); } }
      else if (t < w(11, 'signal') - 0.12) { big(ctx, 'TUBE FOOT', 540, 420, 140, t, w(10, 'tube') - 0.12, { line: C.skyD, fill: C.white }); label(ctx, 'at the tip', 760, 900, 58, t, w(10, 'tip') - 0.15, C.butter); }
      else { big(ctx, 'SIGNAL', 540, 360, 150, t, w(11, 'signal') - 0.12, { line: C.pinkD, fill: C.butter }); big(ctx, 'TOWER', 540, 530, 150, t, w(11, 'tower') - 0.12, { line: C.pinkD, fill: C.butter }); }
      rings(ctx, fx + 66, y, t, w(11, 'signal') - 0.12, C.pinkD);
      if (t >= w(12, 'telling') - 0.12) {
        [-1, 1].forEach((sd, i) => { const pr = grow(t, w(12, 'behind') - 0.15 + i * 0.12, 0.5); dotted(ctx, [[fx + 20, y + sd * 150], [(fx + bx0) / 2, y + sd * 190], [bx0 + 60, y + sd * 150]], pr, C.skyD, 9, 26, 1.2); });
        label(ctx, 'grow here!', 420, 1440, 60, t, w(12, 'where') - 0.12, C.white);
      }
    },
    function fillS(ctx, t) {
      bgV(ctx, t, TH.butter, 67);
      // the arm fills in, part by part (cutaway), then the time it takes
      const y = 900, x0 = 120, L = 860;
      const g = grow(t, P_[13].s - 0.1, P_[13].e - P_[13].s);
      const len = 260 + g * 600;
      const arm = roundPoly([[x0, y - 150], [x0 + len, y - 70], [x0 + len + 60, y], [x0 + len, y + 70], [x0, y + 150]], 66);
      cel(ctx, arm, SF.b, SF.s, -12, -12, 6);
      ctx.save(); ctx.clip(arm);
      const T1 = w(13, 'tube') - 0.12, T2 = w(13, 'bones') - 0.12, T3 = w(13, 'muscle') - 0.12;
      // muscle bands
      if (t >= T3) { const q = grow(t, T3, 0.4); ctx.globalAlpha = q; ctx.fillStyle = '#ff8fab'; ctx.fillRect(x0, y - 20, len * q, 40); ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 5; ctx.beginPath(); for (let x = x0; x < x0 + len * q; x += 30) { ctx.moveTo(x, y - 18); ctx.lineTo(x + 14, y + 18); } ctx.stroke(); ctx.globalAlpha = 1; }
      // little bones (ossicles) as a lattice of rounded plates
      for (let x = x0 + 50, i = 0; x < x0 + len - 20; x += 64, i++) { const q = pop(t, T2 + i * 0.04, 1.2); if (q.s <= 0) continue; for (const sd of [-1, 1]) { const p = roundPoly([[x - 22 * q.s, y + sd * 80], [x, y + sd * (60 - 26 * q.s)], [x + 22 * q.s, y + sd * 80], [x, y + sd * (100 + 20 * q.s)]], 8); cel(ctx, p, C.cream, C.creamS, -2, -2, 3.5); } }
      ctx.restore();
      ol(ctx, arm, 6);
      // tube feet poking out below, popping in one by one
      for (let x = x0 + 60, i = 0; x < x0 + len - 10; x += 52, i++) { const q = pop(t, T1 + i * 0.05, 1.3); if (q.s <= 0) continue; ctx.save(); ctx.translate(x, y + 138 - (x - x0) / len * 60); ctx.scale(q.sx, q.sy); const st = rrP(-9, 0, 18, 46, 9); cel(ctx, st, '#ffd3c2', '#f2a890', -2, -2, 3.5); cel(ctx, ellP(0, 50, 16, 9), '#ffd3c2', '#f2a890', -2, -2, 3.5); ctx.restore(); }
      label(ctx, 'tube feet', 280, 1180, 56, t, T1, C.white);
      label(ctx, 'little bones', 560, 640, 56, t, T2, C.butter);
      label(ctx, 'muscle', 820, 1180, 56, t, T3, C.pink);
      if (t < P_[14].s - 0.1) big(ctx, 'ONE BY ONE', 540, 400, 130, t, w(13, 'one') - 0.12, { line: C.pinkD, fill: C.butter });
      else {
        big(ctx, 'MONTHS', 540, 330, 120, t, w(14, 'months') - 0.12, { line: C.lavD, fill: C.white });
        big(ctx, 'TO 1+ YEAR', 540, 480, 120, t, w(14, 'year') - 0.12, { line: C.pinkD, fill: C.butter });
        const q = pop(t, w(14, 'few') - 0.12, 1.2);
        if (q.s > 0) { const flip = t >= w(14, 'year') - 0.12; calendar(ctx, 540, 1430, 1.15 * q.s, flip ? '1 YR+' : '3–6', flip ? 'TIME' : 'MONTHS'); if (flip) impactLines(ctx, 540, 1430, 150, t, w(14, 'year') - 0.12, 10); }
      }
    },
    function linckiaS(ctx, t) {
      bgV(ctx, t, TH.lav, 68); bubbles(ctx, t, 9, 8);
      const p0 = pop(t, P_[15].s - 0.05, 1.1);
      const t1 = w(16, 'grow') - 0.2, g = grow(t, t1, P_[16].e - t1);
      const sm = (k) => H.clamp(g * 1.3 - k * 0.08);
      if (p0.s > 0) seaStar(ctx, 540, 1150 + bob(t, 0, 8), 1.9 * p0.s, { col: LK, arms: [1, sm(0), sm(1), sm(2), sm(3)], disc: H.lerp(0.25, 1, g), rot: -0.2, eyes: t >= w(16, 'body') - 0.1 ? 'star' : 'normal', mouth: 'smile', look: [0, -0.3] });
      big(ctx, 'LINCKIA', 540, 380, 160, t, w(15, 'linckia') - 0.12, { line: LK.s, fill: C.white });
      label(ctx, 'a blue sea star', 540, 560, 58, t, w(15, 'sea') - 0.15, C.sky);
      label(ctx, 'one arm alone', 760, 760, 54, t, w(16, 'alone') - 0.12, C.white);
      if (t >= w(16, 'brand') - 0.12) { big(ctx, 'NEW BODY!', 540, 1620, 120, t, w(16, 'brand') - 0.12, { line: C.lavD, fill: C.butter }); confetti(ctx, t, w(16, 'body'), 540, 1150, 50, 11); }
      if (t >= w(16, 'grow') - 0.12 && t < w(16, 'brand')) { const q = pop(t, w(16, 'grow') - 0.1, 1.2); kana(ctx, 'ニョキニョキ', 540, 1580, 76, -0.05, q.s, C.butter); }
    },
    function endS(ctx, t) {
      bgV(ctx, t, TH.pink, 69);
      // the original star (regrowing its arm) and the new star from its old arm, face to face
      const p = pop(t, P_[17].s - 0.05, 1.2), q2 = pop(t, w(17, 'whole') - 0.12, 1.2);
      const which = t >= w(18, 'which') - 0.1, real = t >= w(18, 'real') - 0.1;
      seaStar(ctx, 300, 1150 + bob(t, 0, 8), 1.05 * p.s, { col: LK, arms: [1, 1, 1, 0.35, 1], eyes: which ? (real ? 'swirl' : 'shock') : 'normal', look: [0.8, 0], rot: 0.05 * Math.sin(t * 3) });
      seaStar(ctx, 790, 1150 + bob(t, 1.5, 8), 1.05 * q2.s, { col: LK, arms: [1, 1, 1, 1, 1], eyes: which ? (real ? 'swirl' : 'shock') : 'happy', look: [-0.8, 0], rot: -0.05 * Math.sin(t * 3) });
      if (t >= w(17, 'one') - 0.12) dotted(ctx, [[360, 1420], [545, 1500], [730, 1420]], grow(t, w(17, 'one') - 0.1, 0.6), C.lavD, 8, 26, 1.1);
      big(ctx, 'WHICH ONE', 540, 330, 130, t, w(18, 'which') - 0.12, { line: C.lavD });
      big(ctx, 'IS REAL?', 540, 500, 150, t, w(18, 'real') - 0.12, { line: C.pinkD, fill: C.butter });
      if (which) { label(ctx, 'A?', 300, 860, 64, t, w(18, 'which') - 0.1, C.sky); label(ctx, 'B?', 790, 860, 64, t, w(18, 'one') - 0.1, C.butter); sweat(ctx, 440, 960, 1.1); }
      const q = pop(t, w(18, 'starfish') + 0.1, 1.2);
      if (q.s > 0) { ctx.save(); ctx.translate(540, 1590); ctx.scale(q.sx, q.sy); cel(ctx, rrP(-400, -90, 800, 170, 80), C.white, C.creamS, -6, -6, 6); ctx.font = `700 72px ${FONT}`; ctx.textAlign = 'center'; ctx.fillStyle = C.plum; ctx.fillText('tell me in the comments!', 0, 18); ctx.restore(); }
    },
  ];
  // a red "stamp" pill for the ON PURPOSE beat
  function stampLike(ctx, str, x, y, size, t, t0, rot = -0.08) {
    const p = pop(t, t0, 1.6); if (p.s <= 0) return; const k = 1 + 0.4 * Math.exp(-14 * p.u);
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(p.sx * k, p.sy * k);
    ctx.font = `700 ${size}px ${FONT}`; const tw = ctx.measureText(str).width + size;
    cel(ctx, rrP(-tw / 2, -size * 0.85, tw, size * 1.5, size * 0.4), C.white, '#ffe0ea', -5, -5, 0);
    ctx.lineWidth = 12; ctx.strokeStyle = C.red; ctx.stroke(rrP(-tw / 2, -size * 0.85, tw, size * 1.5, size * 0.4));
    ctx.fillStyle = C.red; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(str, 0, -size * 0.08);
    ctx.restore();
  }

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
    // hook
    pop_(0.05, 500, 0.9, 0, false); big_(w(0, 'regrow') - 0.1, 'C6'); k.play('error', w(0, 'finger') - 0.05, { f: 'A3', gain: 0.25 });
    pop_(P_[1].s - 0.1, 600, 0.9, 0, false); big_(w(1, 'one') - 0.1, 'G5');
    for (let i = 0; i < 4; i++) k.play('jump', w(2, 'four') - 0.1 + i * 0.12, { gain: 0.35, minor: true });
    k.play('success', w(2, 'whole') - 0.1, { f: 'C6', gain: 0.45 }); k.play('sparkle', w(2, 'body'), { n: 8, gain: 0.6 });
    // crab
    pop_(w(3, 'crab') - 0.12, 500, 0.9, 0, false); k.play('swish', w(3, 'crab') - 0.2, { gain: 0.4 });
    k.play('tock', w(3, 'grabs') - 0.15, { f: 1300, gain: 0.8 }); k.play('impact', w(3, 'drop') - 0.12, { gain: 0.5 }); k.play('whoosh', w(3, 'drop') - 0.05, { dur: 0.5, gain: 0.4 });
    for (let i = 0; i < 5; i++) k.play('tick', w(3, 'drop') + 0.05 + i * 0.16, { minor: true, gain: 0.5 });
    k.play('stamp', w(3, 'purpose') - 0.1, { gain: 0.6 });
    // muscle
    pop_(w(4, 'muscle') - 0.12, 600, 0.8, 0, false); pop_(w(4, 'base') - 0.15, 800);
    for (let i = 0; i < 4; i++) k.play('tock', w(4, 'squeezes') - 0.1 + i * 0.17, { f: 500, gain: 0.35, minor: true });
    big_(w(4, 'squeezes') - 0.1, 'E6'); k.play('impact', w(4, 'lets') - 0.12, { gain: 0.5 }); k.play('swish', w(4, 'go') - 0.1, { gain: 0.5 });
    // heal
    k.play('riser', w(5, 'seals') - 0.15, { dur: 0.9, gain: 0.35 }); big_(w(5, 'seals') - 0.1, 'C6'); pop_(w(5, 'wound') - 0.15, 700);
    k.play('stroke', w(6, 'creeps') - 0.15, { material: 'brush', dur: 1.6, gain: 0.6, minor: true }); pop_(w(6, 'skin') - 0.15, 800);
    big_(w(6, 'two') - 0.12, 'G5'); k.play('paper', w(6, 'two') - 0.1, { gain: 0.5 });
    // cells
    for (let i = 0; i < 5; i++) pop_(P_[7].s - 0.05 + i * 0.07, 600 + i * 80, 0.5);
    k.play('sparkle', w(7, 'simpler') - 0.1, { n: 6, gain: 0.5 }); big_(w(7, 'simpler') - 0.1, 'A5');
    for (let i = 0; i < 9; i++) k.play('blip', w(8, 'crawl') - 0.1 + i * 0.15, { f: i % 2 ? 'E6' : 'C6', type: 'triangle', gain: 0.6, minor: true });
    pop_(w(8, 'stump') - 0.15, 750);
    // tip
    pop_(w(9, 'first') - 0.12, 900, 0.8, 0, false); k.play('riser', P_[9].s, { dur: 1.2, gain: 0.3 });
    big_(w(10, 'tube') - 0.12, 'E6'); k.play('sparkle', w(10, 'tip') - 0.1, { n: 6, gain: 0.5 });
    for (let i = 0; i < 6; i++) k.play('blip', w(11, 'signal') - 0.1 + i * 0.3, { f: 'A6', type: 'sine', dur: 0.12, gain: 0.7, minor: true });
    big_(w(11, 'tower') - 0.1, 'C6'); k.play('swish', w(12, 'behind') - 0.15, { gain: 0.4 }); pop_(w(12, 'where') - 0.12, 800);
    // fill
    for (let i = 0; i < 12; i++) pop_(w(13, 'tube') - 0.1 + i * 0.05, 700 + i * 40, 0.4);
    for (let i = 0; i < 10; i++) k.play('tick', w(13, 'bones') - 0.1 + i * 0.04, { minor: true, gain: 0.5 });
    k.play('stroke', w(13, 'muscle') - 0.1, { material: 'marker', dur: 0.5, gain: 0.6, minor: true });
    big_(w(13, 'one') - 0.1, 'G5');
    k.play('paper', w(14, 'few') - 0.12, { gain: 0.5 }); pop_(w(14, 'months') - 0.12, 700, 0.7, 0, false);
    k.play('paper', w(14, 'year') - 0.15, { dur: 0.5, gain: 0.6 }); k.play('stamp', w(14, 'year') - 0.1, { gain: 0.5 });
    // linckia
    pop_(P_[15].s - 0.05, 500, 0.9, 0, false); big_(w(15, 'linckia') - 0.1, 'E6'); pop_(w(15, 'sea') - 0.15, 800); pop_(w(16, 'alone') - 0.12, 700);
    for (let i = 0; i < 4; i++) k.play('jump', w(16, 'grow') - 0.1 + i * 0.25, { gain: 0.35, minor: true });
    k.play('success', w(16, 'brand') - 0.1, { f: 'C6', gain: 0.45 }); k.play('sparkle', w(16, 'body'), { n: 8, gain: 0.6 });
    // end
    pop_(P_[17].s - 0.05, 600, 0.8, 0, false); pop_(w(17, 'whole') - 0.12, 800, 0.8, 0, false); k.play('swish', w(17, 'one') - 0.1, { gain: 0.4 });
    big_(w(18, 'which') - 0.1, 'G5'); k.play('error', w(18, 'real') - 0.05, { f: 'C4', gain: 0.2 }); big_(w(18, 'real') - 0.1, 'C6');
    k.play('success', w(18, 'starfish') + 0.1, { f: 'C6', gain: 0.5 }); k.play('sparkle', w(18, 'starfish') + 0.1, { n: 8, gain: 0.7 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
