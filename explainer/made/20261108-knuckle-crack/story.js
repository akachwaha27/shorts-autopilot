// ===== Kawaii Anime, vertical: "Why do your knuckles crack?" =====
(function () {
  // ---------- Kawaii anime: flat 2D chibi illustration, soft plum outlines, one cel-shadow tone, glossy anime eyes ----------
  // make sure the kana subset of Zen Maru Gothic is fetched before the first frame (H.loadFonts reads FONT_SAMPLE)
  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'ポキッポンシーンキラ';
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

  // ---------- characters (local units; (x,y) = head centre) ----------
  function rig(ctx, x, y, s, P, footY) {
    ctx.translate(x, y); ctx.scale(s, s);
    if (P.shadow !== false) { const k = 1 - Math.min(P.lift || 0, 140) / 280; ctx.fillStyle = 'rgba(90,54,89,0.13)'; ctx.fill(ellP(0, footY + 40, 115 * k, 17 * k)); }
    ctx.translate(0, -(P.lift || 0));
    const sq = P.sq || [1, 1]; ctx.translate(0, footY); ctx.rotate(P.tilt || 0); ctx.scale(sq[0], sq[1]); ctx.translate(0, -footY);
  }
  // the AI mascot: round robot, heart antenna, ear pods, candy-knob belly panel
  function bot(ctx, x, y, s, P = {}) {
    ctx.save(); rig(ctx, x, y, s, P, 200);
    // arms
    const arm = (side, a) => { ctx.save(); ctx.translate(side * 80, 108); ctx.rotate(-side * a); const p = ellP(side * 12, 30, 22, 32, -side * 0.25); cel(ctx, p, C.pink, C.pinkS, -5, -5); ctx.restore(); };
    const aL = P.armL || 0.15, aR = P.armR || 0.15;
    if (aL < 1.2) arm(-1, aL); if (aR < 1.2) arm(1, aR);
    // body + belly panel + knobs (the model's weights)
    cel(ctx, rrP(-86, 68, 172, 132, 56), C.pink, C.pinkS, -11, -11);
    shine(ctx, -58, 140, 9, 20, 0.2, 0.75);
    cel(ctx, rrP(-60, 104, 120, 66, 28), C.mint, C.mintS, -5, -5);
    const kc = [[C.butter, C.butterS], [C.sky, C.skyS], [C.lav, C.lavS]], ka = P.knobs || [-2.3, -0.5, -1.9];
    for (let i = 0; i < 3; i++) {
      const kx = -34 + i * 34, ky = 137;
      cel(ctx, ellP(kx, ky, 14, 14), kc[i][0], kc[i][1], -3, -3, 3.5);
      ctx.save(); ctx.strokeStyle = C.plum; ctx.lineCap = 'round'; ctx.lineWidth = 4.5; ctx.beginPath(); ctx.moveTo(kx, ky); ctx.lineTo(kx + Math.cos(ka[i]) * 10, ky + Math.sin(ka[i]) * 10); ctx.stroke(); ctx.restore();
    }
    // ear pods
    for (const sd of [-1, 1]) { cel(ctx, ellP(sd * 140, -4, 30, 34), C.pink, C.pinkS, -6, -6); ctx.fillStyle = C.pinkS; ctx.fill(ellP(sd * 146, -4, 11, 14)); }
    // antenna with heart bulb
    ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 15; ctx.beginPath(); ctx.moveTo(0, -98); ctx.quadraticCurveTo(4, -125, 0, -146); ctx.stroke();
    ctx.strokeStyle = C.lav; ctx.lineWidth = 6; ctx.stroke(); ctx.restore();
    if (P.glow) { const g = ctx.createRadialGradient(0, -166, 4, 0, -166, 70); g.addColorStop(0, `rgba(255,140,180,${0.6 * P.glow})`); g.addColorStop(1, 'rgba(255,140,180,0)'); ctx.fillStyle = g; ctx.fillRect(-80, -240, 160, 150); }
    const hs = 24 * (1 + 0.25 * (P.glow || 0));
    cel(ctx, heartP(0, -166, hs), P.glow > 0.3 ? C.pinkD : C.pink, C.pinkS, -4, -4, 4);
    shine(ctx, -9, -174, 5, 3.5, -0.6);
    // head
    cel(ctx, rrP(-138, -106, 276, 204, 98), C.cream, C.creamS, -13, -13);
    shine(ctx, -90, -64, 30, 13, -0.6); shine(ctx, -52, -86, 7, 7, 0);
    if (aL >= 1.2) arm(-1, aL); if (aR >= 1.2) arm(1, aR);
    // face
    const ek = P.eyes || 'normal', look = P.look || [0, 0];
    eye(ctx, -56, 2, 36, 48, '#8a6cf0', ek, 1, look); eye(ctx, 56, 2, 36, 48, '#8a6cf0', ek, -1, look);
    if (P.blush !== false) { blush(ctx, -98, 46, 24, 13); blush(ctx, 98, 46, 24, 13); }
    mouth(ctx, 0, 50, 15, P.mouth || 'smile');
    ctx.restore();
  }
  function cat(ctx, x, y, s, P = {}) {
    ctx.save(); rig(ctx, x, y, s, P, 182);
    if (!P.headOnly) {
      const wag = P.wag || 0;
      ctx.save(); ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(50, 150); ctx.bezierCurveTo(120, 160, 128 + wag * 18, 90, 100 + wag * 34, 48);
      ctx.strokeStyle = C.plum; ctx.lineWidth = 30; ctx.stroke(); ctx.strokeStyle = C.butter; ctx.lineWidth = 20; ctx.stroke(); ctx.restore();
      cel(ctx, ellP(0, 124, 72, 60), C.butter, C.butterS, -8, -8);
      for (const sd of [-1, 1]) cel(ctx, ellP(sd * 32, 174, 24, 15), C.butter, C.butterS, -3, -3);
    }
    for (const sd of [-1, 1]) {
      cel(ctx, roundPoly([[sd * 106, -26], [sd * 90, -130], [sd * 22, -86]], 16), C.butter, C.butterS, -5, -5);
      ctx.fillStyle = C.pink; ctx.fill(roundPoly([[sd * 88, -50], [sd * 81, -106], [sd * 45, -80]], 9));
    }
    cel(ctx, ellP(0, 0, 116, 96), C.butter, C.butterS, -12, -12);
    ctx.save(); ctx.strokeStyle = C.butterS; ctx.lineCap = 'round'; ctx.lineWidth = 8; ctx.beginPath();
    ctx.moveTo(0, -90); ctx.lineTo(0, -70); ctx.moveTo(-26, -86); ctx.lineTo(-21, -68); ctx.moveTo(26, -86); ctx.lineTo(21, -68); ctx.stroke(); ctx.restore();
    shine(ctx, -66, -46, 20, 9, -0.6);
    const ek = P.eyes || 'normal';
    eye(ctx, -44, 8, 28, 37, '#3fbf95', ek, 1, P.look || [0, 0]); eye(ctx, 44, 8, 28, 37, '#3fbf95', ek, -1, P.look || [0, 0]);
    blush(ctx, -78, 42, 18, 10); blush(ctx, 78, 42, 18, 10);
    ctx.fillStyle = C.pinkD; ctx.fill(roundPoly([[-7, 33], [7, 33], [0, 41]], 3));
    mouth(ctx, 0, 46, 11, P.mouth || 'w');
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 3.5; ctx.lineCap = 'round'; ctx.beginPath();
    for (const sd of [-1, 1]) { ctx.moveTo(sd * 100, 26); ctx.lineTo(sd * 134, 18); ctx.moveTo(sd * 100, 40); ctx.lineTo(sd * 136, 44); }
    ctx.stroke(); ctx.restore();
    ctx.restore();
  }
  function dog(ctx, x, y, s, P = {}) {
    ctx.save(); rig(ctx, x, y, s, P, 182);
    if (!P.headOnly) {
      const wag = P.wag || 0;
      ctx.save(); ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-52, 140); ctx.quadraticCurveTo(-100, 130, -108 - wag * 22, 84 + Math.abs(wag) * 6);
      ctx.strokeStyle = C.plum; ctx.lineWidth = 30; ctx.stroke(); ctx.strokeStyle = C.brown; ctx.lineWidth = 20; ctx.stroke(); ctx.restore();
      cel(ctx, ellP(0, 124, 72, 60), C.peach, C.peachS, -8, -8);
      for (const sd of [-1, 1]) cel(ctx, ellP(sd * 32, 174, 24, 15), C.peach, C.peachS, -3, -3);
    }
    const head = ellP(0, 0, 112, 98);
    cel(ctx, head, C.peach, C.peachS, -12, -12, 0);
    ctx.save(); ctx.clip(head); ctx.fillStyle = '#efbf9c'; ctx.fill(ellP(46, -8, 38, 34)); ctx.fillStyle = '#fff6ee'; ctx.fill(ellP(0, 42, 54, 36)); ctx.restore();
    ol(ctx, head);
    shine(ctx, -64, -52, 20, 9, -0.6);
    const ek = P.eyes || 'normal';
    eye(ctx, -44, -4, 27, 36, '#b06c42', ek, 1, P.look || [0, 0]); eye(ctx, 44, -4, 27, 36, '#b06c42', ek, -1, P.look || [0, 0]);
    blush(ctx, -76, 36, 17, 10); blush(ctx, 76, 36, 17, 10);
    ctx.fillStyle = C.dark; ctx.fill(ellP(0, 26, 17, 11)); shine(ctx, -5, 22, 5, 3, -0.3);
    ctx.save(); ctx.strokeStyle = C.dark; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 36); ctx.lineTo(0, 44); ctx.stroke(); ctx.restore();
    if (P.tongue !== false) { const tp = new Path2D(); tp.moveTo(-10, 50); tp.lineTo(10, 50); tp.quadraticCurveTo(10, 68, 0, 68); tp.quadraticCurveTo(-10, 68, -10, 50); ctx.fillStyle = '#ff8fab'; ctx.fill(tp); ol(ctx, tp, 3); }
    mouth(ctx, 0, 48, 13, 'w');
    for (const sd of [-1, 1]) cel(ctx, ellP(sd * 104, 2, 30, 62, sd * -0.38), C.brown, C.brownS, -5, -6);
    ctx.restore();
  }

  // ---------- props / emotes ----------
  function tag(ctx, x, y, label, fill, flip = 1, size = 28) {
    ctx.save(); ctx.translate(x, y); ctx.scale(flip, 1);
    ctx.font = `700 ${size}px ${FONT}`; const w = Math.max(ctx.measureText(label).width + size * 1.1, size * 1.6), h = size * 1.5;
    cel(ctx, rrP(-w / 2, -h / 2, w, h, h / 2), fill, H.rgba(H.mix(fill, C.plum, 0.15)), -3, -3, 3.5);
    ctx.fillStyle = C.plum; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, 0, 2);
    ctx.restore();
  }
  function card(ctx, x, y, s, kind, label, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); ctx.scale(s * (P.sx || 1), s * (P.sy || 1));
    cel(ctx, rrP(-82, -92, 164, 176, 26), '#fffdfb', '#eadcf2', -6, -6);
    const inner = rrP(-68, -78, 136, 126, 18);
    ctx.save(); ctx.clip(inner); ctx.fillStyle = kind === 'cat' ? '#dff0ff' : '#ffe6ef'; ctx.fillRect(-70, -80, 140, 130);
    ctx.fillStyle = kind === 'cat' ? '#cbe5fb' : '#ffd4e2';
    for (let j = 0; j < 5; j++) for (let i = 0; i < 6; i++) ctx.fill(ellP(-62 + i * 26 + (j % 2) * 13, -70 + j * 28, 4, 4));
    (kind === 'cat' ? cat : dog)(ctx, 0, 8, 0.52, { headOnly: true, shadow: false, eyes: P.eyes });
    ctx.restore(); ol(ctx, inner, 3.5);
    if (label) tag(ctx, 0, 92, label, P.tagFill || (kind === 'cat' ? C.butter : C.sky), P.flip == null ? 1 : P.flip, P.tagSize || 28);
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

  // ---------- story: "Why do your knuckles crack?" Kawaii Anime, 1080x1920 ----------
  const W = 1080, HH = 1920;
  const P_ = [{"s": 0.25, "e": 2.77, "text": "Your knuckle crack is actually a gas bubble,", "words": [["your", 0.25], ["knuckle", 0.53], ["crack", 1.02], ["is", 1.37], ["actually", 1.51], ["a", 2.07], ["gas", 2.14], ["bubble", 2.35]]}, {"s": 3.07, "e": 5.28, "text": "and it can't happen again for twenty minutes.", "words": [["and", 3.07], ["it", 3.26], ["cant", 3.38], ["happen", 3.62], ["again", 3.99], ["for", 4.3], ["twenty", 4.48], ["minutes", 4.85]]}, {"s": 5.83, "e": 8.42, "text": "Every finger joint sits in a tiny capsule,", "words": [["every", 5.83], ["finger", 6.21], ["joint", 6.66], ["sits", 7.05], ["in", 7.35], ["a", 7.5], ["tiny", 7.58], ["capsule", 7.88]]}, {"s": 8.72, "e": 10.31, "text": "filled with a slippery fluid.", "words": [["filled", 8.72], ["with", 9.12], ["a", 9.38], ["slippery", 9.45], ["fluid", 9.98]]}, {"s": 10.86, "e": 12.82, "text": "That fluid has gas dissolved in it,", "words": [["that", 10.86], ["fluid", 11.14], ["has", 11.49], ["gas", 11.7], ["dissolved", 11.91], ["in", 12.54], ["it", 12.68]]}, {"s": 13.12, "e": 14.74, "text": "like a soda with the cap on.", "words": [["like", 13.12], ["a", 13.43], ["soda", 13.51], ["with", 13.82], ["the", 14.13], ["cap", 14.36], ["on", 14.59]]}, {"s": 15.29, "e": 17.2, "text": "When you pull or bend the joint,", "words": [["when", 15.29], ["you", 15.6], ["pull", 15.83], ["or", 16.13], ["bend", 16.28], ["the", 16.59], ["joint", 16.82]]}, {"s": 17.5, "e": 18.88, "text": "the capsule stretches,", "words": [["the", 17.5], ["capsule", 17.72], ["stretches", 18.23]]}, {"s": 19.18, "e": 20.9, "text": "and the pressure inside drops.", "words": [["and", 19.18], ["the", 19.38], ["pressure", 19.59], ["inside", 20.14], ["drops", 20.55]]}, {"s": 21.45, "e": 23.36, "text": "The gas rushes out of the fluid,", "words": [["the", 21.45], ["gas", 21.68], ["rushes", 21.9], ["out", 22.36], ["of", 22.59], ["the", 22.75], ["fluid", 22.98]]}, {"s": 23.66, "e": 25.45, "text": "and a bubble forms, with a pop!", "words": [["and", 23.66], ["a", 23.89], ["bubble", 23.97], ["forms", 24.44], ["with", 24.83], ["a", 25.14], ["pop", 25.22]]}, {"s": 26.0, "e": 30.29, "text": "In 2015, scientists filmed it in an MRI scanner,", "words": [["in", 26.0], ["2015", 26.23], ["scientists", 26.68], ["filmed", 27.81], ["it", 28.49], ["in", 28.71], ["an", 28.94], ["mri", 29.16], ["scanner", 29.5]]}, {"s": 30.59, "e": 32.71, "text": "and saw the bubble appear right at the crack.", "words": [["and", 30.59], ["saw", 30.77], ["the", 30.95], ["bubble", 31.12], ["appear", 31.48], ["right", 31.83], ["at", 32.12], ["the", 32.24], ["crack", 32.42]]}, {"s": 33.26, "e": 35.51, "text": "Try that knuckle again, and... nothing.", "words": [["try", 33.26], ["that", 33.5], ["knuckle", 33.81], ["again", 34.35], ["and", 34.74], ["nothing", 34.97]]}, {"s": 36.06, "e": 38.01, "text": "The bubble needs about twenty minutes", "words": [["the", 36.06], ["bubble", 36.24], ["needs", 36.61], ["about", 36.91], ["twenty", 37.22], ["minutes", 37.58]]}, {"s": 38.31, "e": 40.16, "text": "to dissolve back into the fluid.", "words": [["to", 38.31], ["dissolve", 38.45], ["back", 39.02], ["into", 39.3], ["the", 39.59], ["fluid", 39.8]]}, {"s": 40.71, "e": 43.56, "text": "And no, studies say it won't give you arthritis.", "words": [["and", 40.71], ["no", 40.94], ["studies", 41.09], ["say", 41.63], ["it", 41.86], ["wont", 42.02], ["give", 42.32], ["you", 42.63], ["arthritis", 42.86]]}, {"s": 44.11, "e": 46.98, "text": "One doctor cracked only his left hand's knuckles", "words": [["one", 44.11], ["doctor", 44.32], ["cracked", 44.75], ["only", 45.26], ["his", 45.55], ["left", 45.76], ["hands", 46.05], ["knuckles", 46.41]]}, {"s": 47.28, "e": 48.41, "text": "for sixty years,", "words": [["for", 47.28], ["sixty", 47.55], ["years", 47.98]]}, {"s": 48.71, "e": 50.39, "text": "and both hands stayed the same.", "words": [["and", 48.71], ["both", 48.92], ["hands", 49.18], ["stayed", 49.52], ["the", 49.92], ["same", 50.12]]}, {"s": 50.94, "e": 53.22, "text": "So, how many bubbles have you made today?", "words": [["so", 50.94], ["how", 51.08], ["many", 51.29], ["bubbles", 51.58], ["have", 52.08], ["you", 52.36], ["made", 52.57], ["today", 52.86]]}];
  const BEATS = [
    { id: 'hook', s: P_[0].s, e: P_[1].e }, { id: 'capsule', s: P_[2].s, e: P_[3].e }, { id: 'soda', s: P_[4].s, e: P_[5].e },
    { id: 'pull', s: P_[6].s, e: P_[8].e }, { id: 'pop', s: P_[9].s, e: P_[10].e }, { id: 'mri', s: P_[11].s, e: P_[12].e },
    { id: 'again', s: P_[13].s, e: P_[15].e }, { id: 'arthritis', s: P_[16].s, e: P_[16].e }, { id: 'doctor', s: P_[17].s, e: P_[19].e },
    { id: 'end', s: P_[20].s, e: P_[20].e },
  ];
  const w = (i, word) => { const f = P_[i].words.find((x) => x[0] === word); if (!f) throw new Error('no word ' + word); return f[1]; };
  const DURATION = P_[P_.length - 1].e + 1.0;
  // scene starts (phrase index where each scene begins); joint scene runs continuously through 4 beats
  const SCN = [0, 2, 11, 13, 16, 20];
  const CUTS = SCN.slice(1).map((pi, i) => ({ t: (P_[pi - 1].e + P_[pi].s) / 2, shape: i % 2 ? 'heart' : 'star' }));
  const CUTW = 0.5;
  const big = (ctx, s, x, y, size, t, t0, o = {}) => kWord(ctx, s, x, y, size, t, t0, 0.035, { outer: C.plum, ow: 0.1, lw: 0.17, track: size * 0.04, ...o });
  const label = (ctx, s, x, y, size, t, t0, fill = C.butter) => { const p = pop(t, t0); if (p.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, s, fill, 1, size); ctx.restore(); };
  function bgV(ctx, t, th, seed) { ctx.save(); ctx.scale(1.5, 1.5); bg(ctx, W / 1.5, HH / 1.5, t, th, seed); ctx.restore(); }
  const popAt = (ctx, t, t0, x, y, fn, k = 1.2) => { const p = pop(t, t0, k); if (p.s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); fn(); ctx.restore(); };
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const FLUID = '#bfe6ff', FLUIDS = '#9fd3f5', BONE = '#fff7ea', BONES = '#efdcc4';

  // ---------- original cast ----------
  // chibi hand mascot: face on the palm; P.bend (0..1) folds the index finger toward us, P.pull lifts it off the knuckle
  function hand(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(P.rot || 0); ctx.scale(s, s);
    if (P.shadow !== false) { ctx.fillStyle = 'rgba(90,54,89,0.13)'; ctx.fill(ellP(0, 250, 170, 24)); }
    const fx = [-108, -36, 36, 108], fl = [205, 250, 240, 190];
    const knuckles = [];
    for (let i = 0; i < 4; i++) {
      ctx.save(); ctx.translate(fx[i], -30); ctx.rotate((i - 1.5) * 0.06 + (P.spread || 0) * (i - 1.5) * 0.05);
      let L = fl[i], lift = 0;
      if (i === 1) { L *= 1 - 0.45 * (P.bend || 0); lift = (P.pull || 0) * 40; }
      ctx.translate(0, -lift);
      const p = rrP(-31, -L, 62, L + 40, 31);
      cel(ctx, p, C.peach, C.peachS, -6, -6);
      // knuckle creases + nail
      ctx.save(); ctx.strokeStyle = C.peachS; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath();
      ctx.moveTo(-14, -L * 0.55); ctx.quadraticCurveTo(0, -L * 0.55 + 7, 14, -L * 0.55); ctx.moveTo(-12, -L * 0.25); ctx.quadraticCurveTo(0, -L * 0.25 + 6, 12, -L * 0.25); ctx.stroke(); ctx.restore();
      if (!(i === 1 && (P.bend || 0) > 0.6)) { ctx.fillStyle = '#fff1ea'; ctx.fill(rrP(-17, -L + 8, 34, 30, 14)); ol(ctx, rrP(-17, -L + 8, 34, 30, 14), 3); }
      ctx.restore();
      knuckles.push([fx[i], -30 - (i === 1 ? (P.pull || 0) * 40 : 0)]);
    }
    // thumb
    ctx.save(); ctx.translate(-150, 70); ctx.rotate(-0.75 + (P.thumb || 0)); cel(ctx, rrP(-32, -150, 64, 170, 32), C.peach, C.peachS, -6, -6); ctx.fillStyle = '#fff1ea'; ctx.fill(rrP(-16, -140, 32, 28, 13)); ol(ctx, rrP(-16, -140, 32, 28, 13), 3); ctx.restore();
    // palm
    const palm = rrP(-150, -70, 300, 290, 110);
    cel(ctx, palm, C.peach, C.peachS, -12, -12);
    shine(ctx, -95, -20, 22, 10, -0.6);
    const ek = P.eyes || 'normal';
    eye(ctx, -52, 70, 28, 37, '#c0703f', ek, 1, P.look || [0, 0]); eye(ctx, 52, 70, 28, 37, '#c0703f', ek, -1, P.look || [0, 0]);
    blush(ctx, -92, 112, 20, 11); blush(ctx, 92, 112, 20, 11);
    mouth(ctx, 0, 128, 13, P.mouth || 'w');
    ctx.restore();
    return knuckles.map(([kx, ky]) => [x + kx * s, y + ky * s]);
  }
  // glossy bubble with a tiny face
  function bubbleC(ctx, x, y, r, P = {}) {
    if (r <= 1) return;
    ctx.save(); ctx.translate(x, y);
    const g = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.1, 0, 0, r);
    g.addColorStop(0, '#ffffff'); g.addColorStop(0.7, P.col || '#e6f6ff'); g.addColorStop(1, P.rim || '#bfe3ff');
    const p = ellP(0, 0, r, r); ctx.fillStyle = g; ctx.fill(p); ol(ctx, p, Math.max(2.5, r * 0.06), C.plum);
    shine(ctx, -r * 0.42, -r * 0.42, r * 0.22, r * 0.12, -0.7);
    if (P.face !== false && r > 24) {
      eye(ctx, -r * 0.3, r * 0.05, r * 0.13, r * 0.17, '#5aa9ea', P.eyes || 'normal', 1); eye(ctx, r * 0.3, r * 0.05, r * 0.13, r * 0.17, '#5aa9ea', P.eyes || 'normal', -1);
      blush(ctx, -r * 0.52, r * 0.3, r * 0.12, r * 0.07); blush(ctx, r * 0.52, r * 0.3, r * 0.12, r * 0.07);
      mouth(ctx, 0, r * 0.33, r * 0.08, P.mouth || 'w');
    }
    ctx.restore();
  }
  // finger-joint cross-section (local units, centre = middle of the joint gap)
  function jointGeo(gap) {
    const hu = -gap / 2 - 72, hl = gap / 2 + 72;
    return {
      up: [rrP(-56, -560, 112, 520 - gap / 2 - 30, 40), ellP(0, hu, 108, 78)],
      lo: [rrP(-56, gap / 2 + 70, 112, 520, 40), ellP(0, hl, 108, 78)],
      cap: rrP(-178, -gap / 2 - 215, 356, gap + 430, 150), hu, hl,
    };
  }
  function inBone(x, y, gap) {
    const G = jointGeo(gap);
    const inE = (cy) => (x * x) / (114 * 114) + ((y - cy) * (y - cy)) / (84 * 84) < 1;
    return inE(G.hu) || inE(G.hl) || (Math.abs(x) < 64 && (y < G.hu || y > G.hl));
  }
  const GAS = (() => { const r = H.rng(77), out = []; for (let i = 0; out.length < 34 && i < 4000; i++) { const x = r.range(-160, 160), y = r.range(-230, 230); out.push([x, y, r.range(6, 11), r() * TAU]); } return out; })();
  function joint(ctx, x, y, s, t, P = {}) {
    const gap = P.gap == null ? 26 : P.gap, G = jointGeo(gap);
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    // capsule (fluid inside), stretches with the gap
    const cp = H.clamp(P.capsule == null ? 1 : P.capsule);
    if (cp > 0) {
      if ((P.fluid || 0) > 0) {
        ctx.save(); ctx.clip(G.cap);
        const top = gap / 2 + 215 - (gap + 430) * H.clamp(P.fluid);
        ctx.fillStyle = FLUIDS; ctx.fillRect(-200, top, 400, 800);
        ctx.fillStyle = FLUID; ctx.fillRect(-210, top - 10, 400, 800);
        // wave on the surface while filling
        if (P.fluid < 1) { ctx.fillStyle = C.white; ctx.globalAlpha = 0.6; for (let i = -4; i < 5; i++) ctx.fill(ellP(i * 46 + (t * 60) % 46, top, 20, 6)); }
        ctx.restore();
      }
      ctx.save(); ctx.setLineDash([2, 26 * (1 - cp) + 0.01]); ctx.lineDashOffset = 0;
      ctx.lineWidth = 16; ctx.strokeStyle = C.plum; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      if (cp < 1) { ctx.setLineDash([]); const L = 2 * (356 + gap + 430) * cp; ctx.setLineDash([L, 99999]); }
      else ctx.setLineDash([]);
      ctx.stroke(G.cap); ctx.lineWidth = 8; ctx.strokeStyle = C.lavD; ctx.stroke(G.cap); ctx.restore();
    }
    // gas: dissolved dots, then they rush into one bubble
    const ga = P.gas || 0, ru = H.clamp(P.rush || 0);
    if (ga > 0) {
      GAS.forEach(([gx, gy, gr, gp], i) => {
        if (inBone(gx, gy, gap)) return;
        const tw = 0.75 + 0.25 * Math.sin(t * 5 + gp);
        const e = H.ease.inOut(H.clamp(ru * 1.3 - (i % 5) * 0.06));
        const px = H.lerp(gx, Math.cos(gp) * 10, e), py = H.lerp(gy, Math.sin(gp) * 6, e);
        const a = ga * (1 - H.smooth(0.75, 1, e));
        if (a <= 0) return;
        ctx.save(); ctx.globalAlpha = a; const p = ellP(px, py + Math.sin(t * 3 + gp) * 3, gr * tw, gr * tw); ctx.fillStyle = C.white; ctx.fill(p); ol(ctx, p, 3, C.skyD); ctx.restore();
      });
    }
    // bones
    union(ctx, G.up, BONE, 5); union(ctx, G.lo, BONE, 5);
    ctx.save(); ctx.fillStyle = BONES; ctx.fill(ellP(30, G.hu + 22, 66, 32)); ctx.fill(ellP(30, G.hl + 26, 66, 32)); ctx.fillRect(18, -520, 30, 380 - gap / 2 - 30 + 140 - 140); ctx.restore();
    // smooth cartilage caps
    ctx.save(); ctx.strokeStyle = C.pinkS; ctx.lineWidth = 12; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.ellipse(0, G.hu, 100, 70, 0, 0.25, Math.PI - 0.25); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(0, G.hl, 100, 70, 0, Math.PI + 0.25, TAU - 0.25); ctx.stroke(); ctx.restore();
    shine(ctx, -50, G.hu - 30, 22, 10, -0.6); shine(ctx, -50, G.hl - 34, 22, 10, -0.6);
    if (P.face) { eye(ctx, -38, G.hu - 6, 16, 21, '#b97b5a', P.face, 1); eye(ctx, 38, G.hu - 6, 16, 21, '#b97b5a', P.face, -1); eye(ctx, -38, G.hl + 4, 16, 21, '#b97b5a', P.face, 1); eye(ctx, 38, G.hl + 4, 16, 21, '#b97b5a', P.face, -1); }
    // the bubble
    if ((P.bub || 0) > 0) bubbleC(ctx, 0, 0, P.bub, { eyes: P.bubEyes || 'normal', mouth: P.bubMouth || 'w' });
    ctx.restore();
  }
  function soda(ctx, x, y, s, t, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(0.05 * Math.sin(t * 3));
    const body = new Path2D(); body.moveTo(-36, -170); body.lineTo(36, -170); body.bezierCurveTo(40, -110, 95, -90, 95, -30); body.lineTo(95, 150); body.quadraticCurveTo(95, 190, 55, 190); body.lineTo(-55, 190); body.quadraticCurveTo(-95, 190, -95, 150); body.lineTo(-95, -30); body.bezierCurveTo(-95, -90, -40, -110, -36, -170); body.closePath();
    cel(ctx, body, C.mint, C.mintS, -10, -10, 5);
    ctx.save(); ctx.clip(body); ctx.fillStyle = 'rgba(255,255,255,0.35)';
    const r = H.rng(5); for (let i = 0; i < 12; i++) { const bx = r.range(-70, 70), by = 170 - ((t * r.range(40, 90) + r.range(0, 330)) % 330); ctx.fill(ellP(bx, by, r.range(5, 10), r.range(5, 10))); }
    ctx.restore();
    cel(ctx, rrP(-80, 10, 160, 90, 20), C.butter, C.butterS, -4, -4, 4);
    eye(ctx, -30, 50, 14, 19, '#3fb98e', P.eyes || 'happy', 1); eye(ctx, 30, 50, 14, 19, '#3fb98e', P.eyes || 'happy', -1); mouth(ctx, 0, 78, 8, 'w');
    const cy = -190 - (P.capOff || 0);
    cel(ctx, rrP(-48, cy - 18, 96, 40, 12), C.pinkD, '#e2507f', -3, -3, 4.5);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 4; ctx.beginPath(); for (let i = -36; i <= 36; i += 12) { ctx.moveTo(i, cy - 12); ctx.lineTo(i, cy + 14); } ctx.stroke(); ctx.restore();
    shine(ctx, -62, -40, 9, 26, 0.15, 0.8);
    ctx.restore();
  }
  function gauge(ctx, x, y, r, v) { // v: 1 = high, 0 = low
    ctx.save(); ctx.translate(x, y);
    cel(ctx, ellP(0, 0, r, r), C.white, C.creamS, -6, -6, 5);
    const a0 = Math.PI * 0.8, a1 = Math.PI * 2.2;
    ctx.lineCap = 'round'; ctx.lineWidth = r * 0.16;
    ctx.strokeStyle = C.skyS; ctx.beginPath(); ctx.arc(0, 0, r * 0.7, a0, a0 + (a1 - a0) * 0.33); ctx.stroke();
    ctx.strokeStyle = C.butterS; ctx.beginPath(); ctx.arc(0, 0, r * 0.7, a0 + (a1 - a0) * 0.33, a0 + (a1 - a0) * 0.66); ctx.stroke();
    ctx.strokeStyle = C.pinkD; ctx.beginPath(); ctx.arc(0, 0, r * 0.7, a0 + (a1 - a0) * 0.66, a1); ctx.stroke();
    const a = a0 + (a1 - a0) * v;
    ctx.strokeStyle = C.plum; ctx.lineWidth = r * 0.09; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * r * 0.72, Math.sin(a) * r * 0.72); ctx.stroke();
    cel(ctx, ellP(0, 0, r * 0.12, r * 0.12), C.pinkD, '#e2507f', -2, -2, 3.5);
    ctx.restore();
  }
  function timer(ctx, x, y, r, f, col = C.mint) { // f: 0..1 of the 20 minutes
    ctx.save(); ctx.translate(x, y);
    cel(ctx, rrP(-r * 0.22, -r * 1.28, r * 0.44, r * 0.3, 10), C.pinkD, '#e2507f', -2, -2, 4);
    cel(ctx, ellP(0, 0, r, r), C.white, C.creamS, -8, -8, 6);
    if (f > 0) { ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, r * 0.82, -Math.PI / 2, -Math.PI / 2 + TAU * f); ctx.closePath(); ctx.fillStyle = col; ctx.fill(); ol(ctx, new Path2D(), 0); }
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; ctx.moveTo(Math.cos(a) * r * 0.86, Math.sin(a) * r * 0.86); ctx.lineTo(Math.cos(a) * r * 0.74, Math.sin(a) * r * 0.74); }
    const a = -Math.PI / 2 + TAU * f; ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * r * 0.7, Math.sin(a) * r * 0.7); ctx.lineWidth = 10; ctx.stroke(); ctx.restore();
    cel(ctx, ellP(0, 0, r * 0.08, r * 0.08), C.plum, C.plum, 0, 0, 0);
    ctx.restore();
  }
  function mri(ctx, x, y, s, t, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-300, 250, 600, 90, 30), C.lav, C.lavS, -6, -6);
    const ring = new Path2D(); ring.ellipse(0, 0, 330, 330, 0, 0, TAU); ring.ellipse(0, 0, 165, 165, 0, 0, TAU);
    ctx.save(); ctx.fillStyle = C.creamS; ctx.fill(ring, 'evenodd'); ctx.clip(ring, 'evenodd'); ctx.translate(-12, -12); ctx.fillStyle = C.cream; ctx.fill(ring, 'evenodd'); ctx.restore();
    ol(ctx, ellP(0, 0, 330, 330), 6); ol(ctx, ellP(0, 0, 165, 165), 6);
    ctx.save(); ctx.lineWidth = 34; ctx.strokeStyle = C.sky; ctx.beginPath(); ctx.arc(0, 0, 250, 0, TAU); ctx.stroke(); ctx.lineWidth = 5; ctx.strokeStyle = C.plum; ctx.beginPath(); ctx.arc(0, 0, 267, 0, TAU); ctx.stroke(); ctx.beginPath(); ctx.arc(0, 0, 233, 0, TAU); ctx.stroke(); ctx.restore();
    // bore: dark inside with a hand poking in
    ctx.save(); ctx.clip(ellP(0, 0, 165, 165)); ctx.fillStyle = '#4b3a5c'; ctx.fillRect(-170, -170, 340, 340);
    if (P.handIn) hand(ctx, 0, 110 + 40 * (1 - P.handIn), 0.42, { shadow: false, eyes: 'happy', bend: P.bend || 0 });
    ctx.restore(); ol(ctx, ellP(0, 0, 165, 165), 6);
    // scanning light
    const k = 0.5 + 0.5 * Math.sin(t * 6);
    for (let i = 0; i < 6; i++) { const a = i / 6 * TAU + t * 1.5; ctx.fillStyle = H.rgba(C.mintD, 0.4 + 0.6 * k); ctx.fill(ellP(Math.cos(a) * 250, Math.sin(a) * 250, 9, 9)); }
    ctx.restore();
  }
  function screen(ctx, x, y, s, t, P = {}) { // MRI read-out: grey joint, black gas cavity appears
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-330, -230, 660, 460, 40), C.lav, C.lavS, -8, -8, 5);
    const sc = rrP(-290, -190, 580, 380, 24); ctx.save(); ctx.clip(sc); ctx.fillStyle = '#2d2433'; ctx.fillRect(-300, -200, 600, 400);
    // grey bones (horizontal finger)
    ctx.fillStyle = '#8c8396'; ctx.fill(rrP(-300, -150, 600, 300, 140));
    const gap = P.gap || 20;
    ctx.fillStyle = '#d8d2de'; ctx.fill(rrP(-300, -55, 300 - gap / 2 - 40, 110, 50)); ctx.fill(ellP(-gap / 2 - 50, 0, 60, 78));
    ctx.fill(rrP(gap / 2 + 40, -55, 300, 110, 50)); ctx.fill(ellP(gap / 2 + 50, 0, 60, 78));
    if ((P.cav || 0) > 0) { ctx.fillStyle = '#100a14'; ctx.fill(ellP(0, 0, 26 * P.cav, 44 * P.cav)); }
    // scan line
    ctx.fillStyle = 'rgba(140,255,210,0.25)'; ctx.fillRect(-300 + ((t * 300) % 600), -200, 18, 400);
    ctx.restore(); ol(ctx, sc, 4);
    ctx.fillStyle = C.red; ctx.fill(ellP(250, -205, 9, 9));
    ctx.restore();
  }
  function doctor(ctx, x, y, s, t, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.fillStyle = 'rgba(90,54,89,0.13)'; ctx.fill(ellP(0, 330, 160, 22));
    // coat body
    cel(ctx, rrP(-125, 120, 250, 200, 80), C.white, C.creamS, -10, -10);
    ctx.save(); ctx.strokeStyle = C.creamS; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(0, 130); ctx.lineTo(0, 310); ctx.stroke(); ctx.restore();
    cel(ctx, roundPoly([[-30, 122], [30, 122], [0, 175]], 8), C.sky, C.skyS, -2, -2, 4);
    // arms up, mini hands
    for (const sd of [-1, 1]) {
      ctx.save(); ctx.translate(sd * 112, 160); ctx.rotate(sd * (0.55 + (P.wave && sd === 1 ? 0.15 * Math.sin(t * 10) : 0)));
      cel(ctx, rrP(-24, -150, 48, 160, 24), C.white, C.creamS, -4, -4);
      cel(ctx, ellP(0, -170, 42, 40), C.peach, C.peachS, -5, -5);
      for (let f = -1; f <= 1; f++) cel(ctx, rrP(f * 22 - 9, -232, 18, 44, 9), C.peach, C.peachS, -2, -2, 3.5);
      ctx.restore();
    }
    // head
    cel(ctx, ellP(0, 0, 130, 118), C.peach, C.peachS, -12, -12);
    const hair = new Path2D(); hair.moveTo(-132, 10); hair.bezierCurveTo(-140, -120, 140, -140, 132, 10); hair.bezierCurveTo(90, -50, -40, -70, -132, 10); hair.closePath();
    cel(ctx, hair, '#c9c2d6', '#a99fbd', -6, -6);
    eye(ctx, -48, 18, 26, 34, '#6d55c4', P.eyes || 'happy', 1); eye(ctx, 48, 18, 26, 34, '#6d55c4', P.eyes || 'happy', -1);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(-48, 18, 40, 0, TAU); ctx.moveTo(88, 18); ctx.arc(48, 18, 40, 0, TAU); ctx.moveTo(-8, 18); ctx.lineTo(8, 18); ctx.stroke(); ctx.restore();
    blush(ctx, -88, 62, 18, 10); blush(ctx, 88, 62, 18, 10); mouth(ctx, 0, 72, 14, P.mouth || 'smile');
    ctx.restore();
  }
  function xMark(ctx, x, y, R, sc) {
    if (sc <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(sc, sc); ctx.lineCap = 'round';
    for (const [c, lw] of [[C.plum, 58], [C.red, 36]]) { ctx.strokeStyle = c; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(-R, -R); ctx.lineTo(R, R); ctx.moveTo(R, -R); ctx.lineTo(-R, R); ctx.stroke(); }
    ctx.restore();
  }
  function check(ctx, x, y, R, sc) {
    if (sc <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(sc, sc); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (const [c, lw] of [[C.plum, 50], [C.mintD, 30]]) { ctx.strokeStyle = c; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(-R, 0); ctx.lineTo(-R * 0.3, R * 0.7); ctx.lineTo(R, -R * 0.7); ctx.stroke(); }
    ctx.restore();
  }

  // ---------- scenes ----------
  const scenes = [
    function hook(ctx, t) {
      bgV(ctx, t, TH.pink, 41);
      const ct = w(0, 'crack') - 0.12, bt = w(0, 'bubble') - 0.12;
      const bend = H.ease.inOut(ph(t, w(0, 'knuckle') - 0.3, ct)) * (1 - H.ease.out(ph(t, ct + 0.15, ct + 0.6)) * 0.0);
      const p = pop(t, 0.05, 1.2);
      const shake = t > ct && t < ct + 0.25 ? Math.sin(t * 90) * 8 : 0;
      const ks = hand(ctx, 540 + shake, 1180, 1.4 * p.s, { bend: t < ct ? bend : 1 - 0.6 * ph(t, ct, ct + 0.3), eyes: t < ct ? 'normal' : t < bt ? 'squeeze' : 'star', mouth: t < ct ? 'o' : 'smile', look: [0, -0.6] });
      const [kx, ky] = ks[1];
      impactLines(ctx, kx, ky, 60, t, ct, 10, C.pinkD);
      kana(ctx, 'ポキッ', 820, 820, 96, 0.14, t > ct && t < ct + 1.6 ? pop(t, ct).s * popOut(t, ct + 1.4) : 0, C.butter);
      // the bubble rises out of the knuckle
      if (t > bt) { const u = H.ease.out(ph(t, bt, bt + 0.9)); bubbleC(ctx, H.lerp(kx, 300, u), H.lerp(ky, 760, u) + bob(t, 0, 10) * u, 150 * pop(t, bt, 1.3).s, { eyes: 'normal', mouth: 'smile' }); }
      big(ctx, 'CRACK!', 540, 330, 190, t, ct, { line: C.pinkD, fill: C.butter });
      big(ctx, '= GAS BUBBLE', 540, 500, 112, t, w(0, 'gas') - 0.12, { line: C.skyD });
      // can't happen again for 20 minutes
      const tt = w(1, 'twenty') - 0.15;
      popAt(ctx, t, w(1, 'again') - 0.12, 840, 1500, () => timer(ctx, 0, 0, 120, 0.999 * H.ease.inOut(ph(t, tt, tt + 1.4)), C.pink));
      big(ctx, '20 MIN', 360, 1560, 150, t, tt, { line: C.lavD, fill: C.white });
      twinkles(ctx, W, HH, t, 22, 12, (x, y) => y > 250 && y < 1650 && x > 160 && x < 920);
    },
    function jointS(ctx, t) {
      // one continuous shot: build the joint, push in on the fluid, then pull the bones apart and pop the bubble
      const s0 = P_[2].s, sodaT = P_[4].s, pullT = P_[6].s, popT = P_[9].s;
      const th = t < pullT - 0.3 ? TH.mint : TH.lav;
      bgV(ctx, t, TH.mint, 42);
      if (t > pullT - 0.6) { ctx.save(); ctx.globalAlpha = ph(t, pullT - 0.6, pullT); bgV(ctx, t, TH.lav, 43); ctx.restore(); }
      if (t > popT - 0.4) { ctx.save(); ctx.globalAlpha = ph(t, popT - 0.4, popT + 0.1); bgV(ctx, t, TH.pink, 44); ctx.restore(); }
      void th;
      const zoomIn = H.ease.inOut(ph(t, sodaT - 0.2, sodaT + 0.7)) * (1 - H.ease.inOut(ph(t, pullT - 0.45, pullT + 0.25)));
      const zoomPop = H.ease.inOut(ph(t, popT - 0.2, popT + 0.6));
      const Z = 1 + 0.55 * zoomIn + 0.35 * zoomPop, cy = 960 + 60 * zoomIn;
      const gapT0 = w(6, 'pull') - 0.15, gapT1 = w(7, 'stretches') + 0.2;
      const gap = 26 + 120 * H.ease.out(ph(t, gapT0, gapT1));
      const bt = w(10, 'bubble') - 0.12, popW = w(10, 'pop') - 0.12;
      const bub = t < bt ? 0 : t < popW ? 34 * H.ease.out(ph(t, bt, bt + 0.4)) : 34 + 30 * pop(t, popW, 1.5).s;
      const shake = t > popW && t < popW + 0.3 ? Math.sin(t * 80) * 10 : 0;
      ctx.save(); ctx.translate(540 + shake, cy); ctx.scale(Z, Z); ctx.translate(-540, -960);
      const bp = pop(t, s0 + 0.05, 1.1);
      joint(ctx, 540, 960, 1.0 * bp.s, t, {
        gap, capsule: ph(t, w(2, 'capsule') - 0.15, w(2, 'capsule') + 0.5), fluid: H.ease.inOut(ph(t, w(3, 'slippery') - 0.15, w(3, 'fluid') + 0.4)),
        gas: H.ease.out(ph(t, w(4, 'gas') - 0.15, w(4, 'dissolved') + 0.3)), rush: ph(t, w(9, 'rushes') - 0.15, w(10, 'bubble') + 0.1),
        bub, bubEyes: t > popW ? 'star' : 'normal', bubMouth: t > popW ? 'smile' : 'o',
        face: t > gapT0 && t < popT ? 'squeeze' : null,
      });
      if (t > popW) impactLines(ctx, 540, 960, 80, t, popW, 12, C.pinkD);
      ctx.restore();
      // labels (screen space)
      if (t < sodaT - 0.2) {
        big(ctx, 'FINGER JOINT', 540, 300, 118, t, w(2, 'finger') - 0.12, { line: C.mintD, fill: C.butter });
        label(ctx, 'bone', 230, 560, 56, t, w(2, 'joint') - 0.1, C.white);
        label(ctx, 'bone', 230, 1380, 56, t, w(2, 'joint') + 0.05, C.white);
        label(ctx, 'capsule', 850, 760, 56, t, w(2, 'capsule') - 0.12, C.lav);
        label(ctx, 'slippery fluid', 780, 1200, 56, t, w(3, 'fluid') - 0.12, C.sky);
      } else if (t < pullT - 0.3) {
        big(ctx, 'GAS INSIDE', 540, 300, 140, t, w(4, 'gas') - 0.12, { line: C.skyD, fill: C.white });
        label(ctx, 'dissolved', 540, 470, 60, t, w(4, 'dissolved') - 0.12, C.butter);
        const sp = pop(t, w(5, 'soda') - 0.15, 1.2);
        if (sp.s > 0) { ctx.save(); ctx.translate(820, 1370); ctx.scale(sp.sx, sp.sy); soda(ctx, 0, 0, 1.15, t, {}); ctx.restore(); }
        label(ctx, 'cap ON', 820, 1600, 56, t, w(5, 'cap') - 0.12, C.pink);
      } else if (t < popT - 0.3) {
        big(ctx, 'PULL!', 540, 300, 170, t, w(6, 'pull') - 0.12, { line: C.pinkD, fill: C.butter });
        if (t > gapT0) {
          const pr = H.ease.out(ph(t, gapT0, gapT0 + 0.5));
          dotted(ctx, [[540, 560], [540, 420]].map((p) => p), pr, C.pinkD, 7, 22, 1.2);
          dotted(ctx, [[540, 1360], [540, 1500]], pr, C.pinkD, 7, 22, 1.2);
        }
        label(ctx, 'stretch!', 840, 780, 60, t, w(7, 'stretches') - 0.12, C.lav);
        popAt(ctx, t, w(8, 'pressure') - 0.15, 830, 1360, () => gauge(ctx, 0, 0, 140, 0.85 - 0.75 * H.ease.inOut(ph(t, w(8, 'drops') - 0.15, w(8, 'drops') + 0.5))));
        label(ctx, 'pressure', 830, 1560, 56, t, w(8, 'pressure') - 0.12, C.white);
        big(ctx, 'DROPS', 260, 1440, 110, t, w(8, 'drops') - 0.12, { line: C.skyD, fill: C.white });
      } else {
        big(ctx, 'GAS RUSHES IN', 540, 300, 112, t, w(9, 'rushes') - 0.12, { line: C.skyD, fill: C.white });
        big(ctx, 'POP!', 540, 1580, 210, t, popW, { line: C.pinkD, fill: C.butter });
        kana(ctx, 'ポン', 850, 700, 110, 0.15, t > popW ? pop(t, popW).s : 0, C.mint);
        if (t > popW) confetti(ctx, t, popW, 540, 960, 40, 12);
      }
      twinkles(ctx, W, HH, t, 24, 8, (x, y) => y > 250 && y < 1650 && x > 120 && x < 960);
    },
    function mriS(ctx, t) {
      bgV(ctx, t, TH.butter, 45);
      const ft = w(11, 'scientists') - 0.1;
      const hin = H.ease.out(ph(t, ft, ft + 0.6));
      const crackT = w(12, 'crack') - 0.12, appT = w(12, 'appear') - 0.12;
      popAt(ctx, t, P_[11].s + 0.05, 540, 780, () => mri(ctx, 0, 0, 1.0, t, { handIn: hin, bend: ph(t, appT - 0.3, crackT) }), 1.0);
      big(ctx, '2015', 540, 300, 180, t, w(11, '2015') - 0.15, { line: C.pinkD, fill: C.butter });
      label(ctx, 'MRI scanner', 540, 1160, 60, t, w(11, 'mri') - 0.12, C.sky);
      const st = w(12, 'saw') - 0.15;
      popAt(ctx, t, st, 540, 1440, () => screen(ctx, 0, 0, 0.92, t, { gap: 14 + 20 * ph(t, appT, appT + 0.4), cav: H.ease.back(ph(t, appT, appT + 0.35)) }));
      if (t > appT) { const p = pop(t, crackT); if (p.s > 0) { ctx.save(); ctx.translate(820, 1230); ctx.scale(p.sx, p.sy); tag(ctx, 0, 0, 'bubble!', C.pink, 1, 60); ctx.restore(); } }
      if (t > appT) dotted(ctx, bez([760, 1270], [700, 1330], [620, 1380], [560, 1420], 30), ph(t, crackT, crackT + 0.35), C.pinkD, 6, 20, 1);
    },
    function againS(ctx, t) {
      bgV(ctx, t, TH.mint, 46);
      const tryT = w(13, 'try') - 0.1, nt = w(13, 'nothing') - 0.12, tw = w(14, 'twenty') - 0.15, dt = w(15, 'dissolve') - 0.12;
      const move = H.ease.inOut(ph(t, P_[14].s - 0.35, P_[14].s + 0.2));
      const effort = t > tryT && t < nt ? Math.sin(t * 40) * 6 : 0;
      const bend = t < nt ? 0.5 + 0.5 * Math.sin((t - tryT) * 7) * (t > tryT ? 1 : 0) : 1;
      const ks = hand(ctx, 540 + effort, H.lerp(1150, 1370, move), H.lerp(1.45, 0.95, move), { bend: H.clamp(bend), eyes: t < nt ? 'squeeze' : 'shock', mouth: t < nt ? 'wobble' : 'o' });
      if (t > nt) { sweat(ctx, ks[3][0] + 70, ks[3][1] - 40, 1.6 * pop(t, nt).s); }
      if (t < P_[14].s - 0.3) {
        big(ctx, 'AGAIN?', 540, 360, 160, t, w(13, 'again') - 0.12, { line: C.mintD, fill: C.butter });
        popAt(ctx, t, nt, 540, 620, () => kText(ctx, '. . . ?', 0, 0, 170, { fill: C.white, line: C.lavD, outer: C.plum, ow: 0.1, lw: 0.17 }), 1.3);
        kana(ctx, 'シーン', 830, 820, 90, 0.12, t > nt ? pop(t, nt).s : 0, C.lav);
      } else {
        popAt(ctx, t, tw, 330, 700, () => timer(ctx, 0, 0, 170, 0.999 * H.ease.inOut(ph(t, tw + 0.1, P_[15].e)), C.mint));
        big(ctx, '20', 780, 650, 230, t, tw, { line: C.pinkD, fill: C.butter });
        big(ctx, 'MIN', 780, 800, 120, t, tw + 0.15, { line: C.pinkD, fill: C.white });
        // the old bubble dissolves back into dots
        const u = ph(t, dt, P_[15].e + 0.2);
        if (u < 1) {
          const bx = 800, by = 1080;
          if (u <= 0) bubbleC(ctx, bx, by, 80 * pop(t, tw).s, { eyes: 'blink', mouth: 'w' });
          else { bubbleC(ctx, bx, by, 80 * (1 - H.ease.in(u)), { eyes: 'blink', mouth: 'w' }); const r = H.rng(8); for (let i = 0; i < 16; i++) { const a = r() * TAU, d = 40 + u * r.range(120, 240); ctx.save(); ctx.globalAlpha = 1 - u * 0.7; const p = ellP(bx + Math.cos(a) * d, by + Math.sin(a) * d, 10, 10); ctx.fillStyle = C.white; ctx.fill(p); ol(ctx, p, 3, C.skyD); ctx.restore(); } }
        }
        label(ctx, 'dissolving...', 330, 960, 56, t, dt, C.sky);
      }
    },
    function arthS(ctx, t) {
      bgV(ctx, t, TH.lav, 47);
      const docT = w(17, 'one') - 0.12;
      const up = H.ease.inOut(ph(t, docT - 0.3, docT + 0.3));
      // claim + verdict, then it shrinks into a header for the doctor
      ctx.save(); ctx.translate(540, H.lerp(760, 400, up)); ctx.scale(H.lerp(1, 0.62, up), H.lerp(1, 0.62, up)); ctx.translate(-540, -760);
      big(ctx, 'ARTHRITIS?', 540, 760, 150, t, w(16, 'arthritis') - 0.15, { line: C.lavD, fill: C.white });
      const nt = w(16, 'no') - 0.1;
      const np = pop(t, nt, 1.3);
      if (np.s > 0) { ctx.save(); ctx.translate(540, 520); ctx.rotate(-0.08); ctx.scale(np.sx, np.sy); kText(ctx, 'NO!', 0, 0, 230, { fill: C.butter, line: C.red, outer: C.plum, ow: 0.08, lw: 0.15 }); ctx.restore(); }
      if (up < 0.5) label(ctx, 'studies say', 540, 960, 60, t, w(16, 'studies') - 0.12, C.butter);
      ctx.restore();
      if (t < docT - 0.2) {
        const hp = pop(t, P_[16].s + 0.1, 1.1);
        hand(ctx, 540, 1350, 1.1 * hp.s, { eyes: t > w(16, 'arthritis') ? 'happy' : 'normal', mouth: 'smile' });
        return;
      }
      // the doctor's 60-year one-hand experiment
      const dp = pop(t, docT, 1.2);
      if (dp.s > 0) { ctx.save(); ctx.translate(540, 1080); ctx.scale(dp.sx, dp.sy); doctor(ctx, 0, 0, 1.25, t, { eyes: t > w(19, 'same') - 0.1 ? 'star' : 'happy', wave: t > w(17, 'cracked') && t < w(19, 'both') }); ctx.restore(); }
      // his left hand = viewer's right
      const lt = w(17, 'left') - 0.12;
      label(ctx, 'LEFT: cracked', 800, 610, 50, t, lt, C.pink);
      label(ctx, 'RIGHT: never', 280, 610, 50, t, w(17, 'only') - 0.12, C.sky);
      if (t > lt) for (let k = 0; k < 6; k++) impactLines(ctx, 760, 760, 40, t, lt + 0.15 + k * 0.5, 8, C.pinkD);
      const yt = w(18, 'sixty') - 0.15;
      if (t > yt) { const n = Math.round(60 * H.ease.out(ph(t, yt, yt + 0.9))); popAt(ctx, t, yt, 540, 1540, () => kText(ctx, n + ' YEARS', 0, 0, 140, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 })); }
      const st = w(19, 'same') - 0.12, bt = w(19, 'both') - 0.12;
      check(ctx, 280, 760, 50, pop(t, bt).s); check(ctx, 800, 760, 50, pop(t, bt + 0.12).s);
      if (t > st) popAt(ctx, t, st, 540, 1380, () => tag(ctx, 0, 0, 'both hands: SAME', C.mint, 1, 60));
      twinkles(ctx, W, HH, t, 25, 8, (x, y) => y > 250 && y < 1650 && x > 120 && x < 960);
    },
    function endS(ctx, t) {
      bgV(ctx, t, TH.pink, 48);
      // bubbles drifting up
      const r = H.rng(31);
      for (let i = 0; i < 9; i++) { const sp = r.range(70, 140), x0 = r.range(120, 960), rr = r.range(36, 80), ph0 = r() * 1200; const y = 1750 - ((t * sp + ph0) % 1700); bubbleC(ctx, x0 + Math.sin(t * 2 + i) * 20, y, rr * pop(t, P_[20].s + i * 0.05).s, { eyes: i % 2 ? 'happy' : 'normal', face: rr > 50 }); }
      big(ctx, 'HOW MANY', 540, 340, 150, t, w(20, 'how') - 0.12, { line: C.pinkD, fill: C.white });
      big(ctx, 'BUBBLES', 540, 510, 170, t, w(20, 'bubbles') - 0.12, { line: C.skyD, fill: C.butter });
      big(ctx, 'TODAY?', 540, 680, 150, t, w(20, 'today') - 0.12, { line: C.pinkD, fill: C.white });
      const p = pop(t, P_[20].s, 1.2);
      hand(ctx, 540, 1180 + bob(t, 0, 8), 1.1 * p.s, { bend: 0.5 + 0.5 * Math.sin(t * 5), eyes: t > w(20, 'today') ? 'happy' : 'star', mouth: 'smile' });
      popAt(ctx, t, w(20, 'today') - 0.1, 540, 1570, () => { cel(ctx, rrP(-380, -85, 760, 160, 80), C.white, C.creamS, -6, -6, 6); ctx.font = `700 70px ${FONT}`; ctx.textAlign = 'center'; ctx.fillStyle = C.plum; ctx.fillText('tell me below!', 0, 22); });
      confetti(ctx, t, w(20, 'today') + 0.1, 540, 1100, 50, 9);
    },
  ];

  function explainer(ctx, W_, H_, t0) {
    const t = q15(t0);
    let i = 0; for (let j = 0; j < CUTS.length; j++) if (t >= CUTS[j].t - CUTW / 2) i = j + 1;
    const c = CUTS[i - 1];
    if (c && t < c.t + CUTW / 2) {
      scenes[i - 1](ctx, t);
      wipe(ctx, W_, H_, (t - (c.t - CUTW / 2)) / CUTW, c.shape, 540, 960, () => scenes[i](ctx, t));
    } else scenes[i](ctx, t);
  }

  function scoreSound(k) {
    const pop_ = (at, f = 700, g = 0.6, pan = 0, minor = true) => k.play('pop', at, { f, gain: g, pan, minor });
    const big_ = (at, f = 'E6') => { k.play('ding', at, { f, gain: 0.35 }); pop_(at, 900, 0.8, 0, false); };
    const crack = (at, g = 1) => { k.noise(at, { dur: 0.03, filter: 'highpass', f: 2500, gain: 0.5 * g, a: 0.001 }); k.tone(at, { f: [[0, 900], [0.05, 300]], dur: 0.07, gain: 0.25 * g }); k.play('tock', at + 0.01, { f: 1400, gain: 0.5 * g }); };
    CUTS.forEach((c) => { k.noise(c.t - 0.22, { dur: 0.42, color: 'pink', filter: 'bandpass', f: [[0, 700], [0.42, 3000]], q: 0.9, gain: 0.3, a: 0.08 }); k.play('sparkle', c.t, { n: 4, gain: 0.35 }); });
    // hook
    pop_(0.05, 500, 0.9, 0, false);
    k.tone(w(0, 'knuckle') - 0.3, { f: [[0, 300], [0.3, 520]], dur: 0.32, gain: 0.05, minor: true });
    crack(w(0, 'crack') - 0.12, 1.2);
    k.tone(w(0, 'bubble') - 0.12, { f: [[0, 260], [0.18, 900]], dur: 0.22, gain: 0.14 }); pop_(w(0, 'bubble') - 0.08, 520, 0.8, 0, false);
    k.play('sparkle', w(0, 'gas') - 0.1, { n: 5, gain: 0.5 });
    pop_(w(1, 'again') - 0.12, 600);
    for (let i = 0; i < 10; i++) k.play('tick', w(1, 'twenty') - 0.15 + i * 0.14, { f: 4200, gain: 0.35, minor: true });
    big_(w(1, 'twenty') - 0.12, 'C6');
    // joint
    pop_(P_[2].s + 0.05, 500, 0.8, 0, false); pop_(w(2, 'joint') - 0.1, 700); pop_(w(2, 'joint') + 0.05, 760);
    k.play('stroke', w(2, 'capsule') - 0.15, { material: 'marker', dur: 0.6, gain: 0.6, minor: true }); pop_(w(2, 'capsule') - 0.12, 820);
    k.noise(w(3, 'slippery') - 0.15, { dur: 1.2, color: 'brown', filter: 'lowpass', f: [[0, 300], [1.2, 900]], gain: 0.25, a: 0.2 }); pop_(w(3, 'fluid') - 0.12, 640);
    k.play('sparkle', w(4, 'gas') - 0.12, { n: 6, gain: 0.5 }); for (let i = 0; i < 8; i++) pop_(w(4, 'dissolved') - 0.1 + i * 0.08, 1100 + i * 60, 0.3);
    pop_(w(5, 'soda') - 0.15, 600, 0.9, 0.4, false); k.noise(w(5, 'soda'), { dur: 0.8, filter: 'highpass', f: 4000, gain: 0.08, a: 0.1, pan: 0.4, minor: true }); pop_(w(5, 'cap') - 0.12, 800, 0.6, 0.4);
    k.play('whoosh', w(6, 'pull') - 0.2, { dur: 0.5, gain: 0.6 }); big_(w(6, 'pull') - 0.12, 'G5');
    k.tone(w(7, 'stretches') - 0.15, { f: [[0, 200], [0.6, 120]], type: 'triangle', dur: 0.7, gain: 0.12, a: 0.1 });
    pop_(w(8, 'pressure') - 0.15, 600, 0.8, 0.4, false); k.tone(w(8, 'drops') - 0.15, { f: [[0, 700], [0.5, 180]], dur: 0.55, gain: 0.12, a: 0.03 });
    k.play('riser', w(9, 'rushes') - 0.2, { dur: 1.0, gain: 0.5 });
    k.tone(w(10, 'bubble') - 0.12, { f: [[0, 200], [0.3, 600]], dur: 0.35, gain: 0.12 });
    { const t = w(10, 'pop') - 0.12; crack(t, 1.4); k.play('impact', t, { gain: 0.6 }); k.play('sparkle', t + 0.05, { n: 8, gain: 0.7 }); }
    // MRI
    pop_(P_[11].s + 0.05, 500, 0.8, 0, false); k.play('boot', P_[11].s + 0.2, { gain: 0.5 }); big_(w(11, '2015') - 0.15, 'A5'); pop_(w(11, 'mri') - 0.12, 760);
    k.play('blip', w(12, 'saw') - 0.15, { f: 'C6', gain: 0.8 }); crack(w(12, 'appear') - 0.12, 0.8); big_(w(12, 'crack') - 0.12, 'E6');
    // again
    for (let i = 0; i < 4; i++) k.tone(w(13, 'try') + i * 0.3, { f: [[0, 260], [0.15, 200]], dur: 0.18, gain: 0.08, minor: true });
    k.play('error', w(13, 'nothing') - 0.08, { f: 'A3', gain: 0.4 });
    pop_(w(14, 'twenty') - 0.15, 600, 0.9, 0, false); big_(w(14, 'twenty') - 0.12, 'C6');
    for (let i = 0; i < 12; i++) k.play('tick', w(14, 'twenty') + 0.1 + i * 0.25, { f: 4200, gain: 0.3, minor: true });
    k.noise(w(15, 'dissolve') - 0.12, { dur: 1.2, filter: 'highpass', f: 3500, gain: 0.08, a: 0.1, minor: true });
    // arthritis + doctor
    k.play('stamp', w(16, 'no') - 0.1, { gain: 0.6 }); pop_(w(16, 'studies') - 0.12, 700); pop_(w(16, 'arthritis') - 0.15, 600);
    pop_(w(17, 'one') - 0.12, 500, 0.9, 0, false);
    pop_(w(17, 'left') - 0.12, 800, 0.7, 0.4); for (let i = 0; i < 6; i++) crack(w(17, 'left') + 0.03 + i * 0.5, 0.35);
    pop_(w(17, 'only') - 0.12, 700, 0.7, -0.4);
    for (let i = 0; i < 12; i++) k.play('count', w(18, 'sixty') - 0.15 + i * 0.07, { gain: 0.8, minor: true }); big_(w(18, 'sixty') + 0.75, 'A5');
    pop_(w(19, 'both') - 0.12, 900, 0.7, -0.4); pop_(w(19, 'both'), 1000, 0.7, 0.4);
    k.play('success', w(19, 'same') - 0.1, { f: 'C6', gain: 0.45 });
    // end
    pop_(P_[20].s, 600, 0.8, 0, false); pop_(w(20, 'how') - 0.12, 700); pop_(w(20, 'bubbles') - 0.12, 820); big_(w(20, 'today') - 0.12, 'C6');
    k.play('sparkle', w(20, 'today') + 0.1, { n: 8, gain: 0.7 });
    k.tone(w(20, 'today') + 0.3, { f: 'C3', type: 'triangle', dur: 1.2, gain: 0.1, a: 0.02 });
  }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.VIDEO_W = W; window.VIDEO_H = HH;
})();
