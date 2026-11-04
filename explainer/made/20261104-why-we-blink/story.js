// ================= Kawaii Anime, vertical 1080x1920: "Why do you go blind 15,000 times a day?" =================
// Short, 10 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// ~15 blinks/min = ~15,000 a day, 100-150 ms each; tear film (mucus, water, oil) feeds the avascular cornea;
// visual system suppressed during blinks (Bristow 2005; Golan 2016 "deleting" transients).
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s": 0.25, "e": 3.15, "text": "You go blind fifteen thousand times every day.", "words": [["you", 0.25], ["go", 0.48], ["blind", 0.63], ["fifteen", 1.01], ["thousand", 1.55], ["times", 2.15], ["every", 2.54], ["day", 2.92]]}, {"s": 3.7, "e": 4.84, "text": "Why can't you tell?", "words": [["why", 3.7], ["cant", 3.94], ["you", 4.27], ["tell", 4.52]]}, {"s": 5.39, "e": 6.56, "text": "It's called blinking.", "words": [["its", 5.39], ["called", 5.6], ["blinking", 6.01]]}, {"s": 7.11, "e": 9.54, "text": "Each blink lasts about a tenth of a second.", "words": [["each", 7.11], ["blink", 7.4], ["lasts", 7.75], ["about", 8.11], ["a", 8.47], ["tenth", 8.54], ["of", 8.89], ["a", 9.04], ["second", 9.11]]}, {"s": 10.09, "e": 13.01, "text": "The clear front of your eye has no blood vessels,", "words": [["the", 10.09], ["clear", 10.31], ["front", 10.69], ["of", 11.06], ["your", 11.21], ["eye", 11.51], ["has", 11.74], ["no", 11.96], ["blood", 12.11], ["vessels", 12.49]]}, {"s": 13.31, "e": 15.69, "text": "so it relies on a film of tears instead.", "words": [["so", 13.31], ["it", 13.47], ["relies", 13.62], ["on", 14.08], ["a", 14.23], ["film", 14.31], ["of", 14.62], ["tears", 14.77], ["instead", 15.15]]}, {"s": 16.24, "e": 17.73, "text": "That film has three parts:", "words": [["that", 16.24], ["film", 16.52], ["has", 16.81], ["three", 17.02], ["parts", 17.38]]}, {"s": 18.03, "e": 19.46, "text": "mucus, water, and oil.", "words": [["mucus", 18.03], ["water", 18.48], ["and", 18.93], ["oil", 19.19]]}, {"s": 20.01, "e": 21.84, "text": "Every blink wipes on a fresh coat,", "words": [["every", 20.01], ["blink", 20.35], ["wipes", 20.69], ["on", 21.03], ["a", 21.17], ["fresh", 21.23], ["coat", 21.57]]}, {"s": 22.14, "e": 23.93, "text": "like a tiny windshield wiper,", "words": [["like", 22.14], ["a", 22.44], ["tiny", 22.52], ["windshield", 22.81], ["wiper", 23.55]]}, {"s": 24.23, "e": 26.36, "text": "and sweeps dust toward your eye's drain.", "words": [["and", 24.23], ["sweeps", 24.43], ["dust", 24.83], ["toward", 25.09], ["your", 25.5], ["eyes", 25.76], ["drain", 26.03]]}, {"s": 26.91, "e": 28.94, "text": "So why doesn't the world go black?", "words": [["so", 26.91], ["why", 27.07], ["doesnt", 27.3], ["the", 27.77], ["world", 28.0], ["go", 28.39], ["black", 28.55]]}, {"s": 29.49, "e": 32.23, "text": "Scientists scanned people's brains during blinks,", "words": [["scientists", 29.49], ["scanned", 30.14], ["peoples", 30.6], ["brains", 31.06], ["during", 31.45], ["blinks", 31.84]]}, {"s": 32.53, "e": 35.32, "text": "and found parts of the visual system go quiet,", "words": [["and", 32.53], ["found", 32.76], ["parts", 33.14], ["of", 33.51], ["the", 33.66], ["visual", 33.89], ["system", 34.34], ["go", 34.8], ["quiet", 34.95]]}, {"s": 35.62, "e": 37.48, "text": "right as your eyelid comes down.", "words": [["right", 35.62], ["as", 35.98], ["your", 36.13], ["eyelid", 36.41], ["comes", 36.84], ["down", 37.2]]}, {"s": 38.03, "e": 39.76, "text": "Your brain deletes the blackout,", "words": [["your", 38.03], ["brain", 38.29], ["deletes", 38.61], ["the", 39.06], ["blackout", 39.25]]}, {"s": 40.06, "e": 41.52, "text": "before you can ever see it.", "words": [["before", 40.06], ["you", 40.48], ["can", 40.69], ["ever", 40.9], ["see", 41.17], ["it", 41.38]]}, {"s": 42.07, "e": 45.79, "text": "Altogether, your eyes are shut for about half an hour every day.", "words": [["altogether", 42.07], ["your", 42.8], ["eyes", 43.09], ["are", 43.38], ["shut", 43.6], ["for", 43.9], ["about", 44.11], ["half", 44.48], ["an", 44.77], ["hour", 44.92], ["every", 45.21], ["day", 45.57]]}, {"s": 46.34, "e": 48.82, "text": "So how many seconds can you go without blinking?", "words": [["so", 46.34], ["how", 46.47], ["many", 46.66], ["seconds", 46.91], ["can", 47.36], ["you", 47.55], ["go", 47.74], ["without", 47.87], ["blinking", 48.31]]}, {"s": 49.37, "e": 50.47, "text": "Tell me your record.", "words": [["tell", 49.37], ["me", 49.65], ["your", 49.78], ["record", 50.06]]}];
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  // time of a spoken word (visuals lead it by 0.08 s)
  const T = (i, w, lead = 0.08) => { const f = PH[i].words.find((x) => x[0].startsWith(w)); if (!f) { console.warn('no word', i, w); return PH[i].s; } return f[1] - lead; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);

  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'キラ!?';
  const C = {
    plum: '#5a3659', dark: '#3b2342',
    pink: '#ffbfd2', pinkS: '#f597b7', pinkD: '#ff6f9c',
    mint: '#bff0dc', mintS: '#86d6b9', mintD: '#3fb98e',
    butter: '#fff0a6', butterS: '#f5d06a', butterD: '#ffd84d',
    lav: '#ded2ff', lavS: '#b7a2f2', lavD: '#8f74e6',
    sky: '#c6e7ff', skyS: '#8cc6f2', skyD: '#5aa9ea',
    cream: '#fffaf4', creamS: '#e4d8f6',
    peach: '#ffe2cf', peachS: '#f2b996', brown: '#dca07a', brownS: '#b97b5a',
    red: '#ff6b8a', white: '#ffffff', nori: '#3d5a52', noriS: '#2c443d',
    liver: '#f59a9a', liverS: '#dd7480', bile: '#b6e57a', bileS: '#8cc95a',
  };
  const TH = {
    pink: { base: '#ffe7ef', dot: '#ffd3e1', acc: '#fff3b0', kind: 'dots' },
    mint: { base: '#ddf6ec', dot: '#c4ecdb', acc: '#fff1a0', kind: 'stars' },
    lav: { base: '#efe8ff', dot: '#e0d4ff', acc: '#ffd0e0', kind: 'clouds' },
    butter: { base: '#fff6d8', dot: '#ffeab0', acc: '#ffc4d6', kind: 'hearts' },
    sky: { base: '#e3f3ff', dot: '#cfe8fb', acc: '#ffd6e4', kind: 'stars' },
  };
  const FONT = '"Fredoka"', KANA = '"Zen Maru Gothic","Noto Sans CJK JP","Noto Sans JP",sans-serif';
  const q15 = (t) => Math.floor(t * 15 + 1e-6) / 15; // anime "on twos" at 30 fps

  // ---------- paths ----------
  const scaleOf = (ctx) => { const m = ctx.getTransform(); return Math.hypot(m.a, m.b) || 1; };
  const rrP = (x, y, w, h, r) => { const p = new Path2D(); p.roundRect(x, y, w, h, r); return p; };
  const ellP = (x, y, rx, ry, rot = 0) => { const p = new Path2D(); p.ellipse(x, y, Math.max(rx, 0.01), Math.max(ry, 0.01), rot, 0, TAU); return p; };
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
  const hexP = (cx, cy, r, rot = 0) => roundPoly(Array.from({ length: 6 }, (_, i) => [cx + Math.cos(rot + i * Math.PI / 3) * r, cy + Math.sin(rot + i * Math.PI / 3) * r]), r * 0.25);

  // ---------- inking ----------
  function ol(ctx, p, w = 4.5, col = C.plum) { ctx.save(); ctx.lineWidth = w / scaleOf(ctx); ctx.strokeStyle = col; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.stroke(p); ctx.restore(); }
  function cel(ctx, p, base, shade, dx = -8, dy = -8, w = 4.5) {
    ctx.save(); ctx.fillStyle = shade; ctx.fill(p); ctx.clip(p); ctx.translate(dx, dy); ctx.fillStyle = base; ctx.fill(p); ctx.restore();
    if (w) ol(ctx, p, w);
  }
  function union(ctx, paths, fill, w = 4.5) {
    ctx.save(); ctx.lineWidth = (2 * w) / scaleOf(ctx); ctx.strokeStyle = C.plum; ctx.lineJoin = 'round';
    paths.forEach((p) => ctx.stroke(p)); ctx.fillStyle = fill; paths.forEach((p) => ctx.fill(p)); ctx.restore();
  }
  function shine(ctx, x, y, rx, ry, rot = -0.6, a = 0.95) { ctx.save(); ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill(ellP(x, y, rx, ry, rot)); ctx.restore(); }
  // a soft tube: plum outline, flat fill, a highlight stripe (pts = polyline)
  function tube(ctx, pts, w, fill, shade, hl = true) {
    if (pts.length < 2) return;
    const path = new Path2D(); path.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) path.lineTo(pts[i][0], pts[i][1]);
    ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.strokeStyle = C.plum; ctx.lineWidth = w + 9; ctx.stroke(path);
    ctx.strokeStyle = shade || fill; ctx.lineWidth = w; ctx.stroke(path);
    ctx.strokeStyle = fill; ctx.lineWidth = w * 0.72; ctx.translate(-w * 0.08, -w * 0.08); ctx.stroke(path);
    if (hl) { ctx.strokeStyle = 'rgba(255,255,255,0.7)'; ctx.lineWidth = Math.max(3, w * 0.12); ctx.translate(-w * 0.14, -w * 0.14); ctx.stroke(path); }
    ctx.restore();
  }
  const partial = (pts, u) => { if (u >= 1) return pts; if (u <= 0) return []; const L = plen(pts) * u, out = [pts[0]]; let acc = 0; for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); if (acc + l >= L) { const k = (L - acc) / l; out.push([pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * k, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * k]); return out; } acc += l; out.push(pts[i]); } return out; };

  // ---------- motion grammar ----------
  function pop(t, t0, k = 1) {
    const u = t - t0;
    if (u <= 0) return { s: 0, sx: 0, sy: 0, u };
    const s = 1 - Math.exp(-9 * u) * Math.cos(18 * u), q = Math.exp(-8 * u) * Math.sin(18 * u) * 0.28 * k;
    return { s, sx: s * (1 + q), sy: s * (1 - q), u };
  }
  const popOut = (t, t1, d = 0.2) => 1 - H.clamp((t - t1) / d);
  function squash(t, tl, amp = 0.22) { const u = t - tl; if (u < 0) return [1, 1]; const q = Math.exp(-7 * u) * Math.cos(16 * u) * amp; return [1 + q, 1 - q]; }
  const bob = (t, ph = 0, a = 8) => Math.sin(t * TAU * 0.85 + ph) * a;
  const prog = (t, a, b) => H.clamp((t - a) / (b - a));
  // pop something in at t0 (optionally out at t1) around (x,y)
  function popIn(ctx, t, t0, x, y, fn, k = 1, t1 = null) {
    const p = pop(t, t0, k); if (p.s <= 0) return 0;
    const o = t1 == null ? 1 : popOut(t, t1); if (o <= 0) return 0;
    ctx.save(); ctx.translate(x, y); ctx.scale(p.sx * o, p.sy * o); fn(p); ctx.restore(); return p.s * o;
  }

  // ---------- lettering ----------
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
  function kWord(ctx, str, cx, y, size, t, t0, stg, o = {}) {
    ctx.save(); ctx.font = `${o.weight || 700} ${size}px ${o.font || FONT}`;
    const ws = [...str].map((c) => ctx.measureText(c).width), tot = ws.reduce((a, b) => a + b, 0) + (o.track || 0) * (str.length - 1);
    ctx.restore();
    const out = o.t1 == null ? 1 : popOut(t, o.t1);
    if (out <= 0) return tot;
    let x = o.align === 'left' ? cx : cx - tot / 2;
    const fills = o.fills;
    [...str].forEach((c, i) => {
      const w = ws[i]; const p = pop(t, t0 + i * stg, 1.3);
      if (c !== ' ' && p.s > 0) {
        const hop = p.u < 0.25 ? -Math.sin((p.u / 0.25) * Math.PI) * size * 0.18 : 0;
        ctx.save(); ctx.translate(x + w / 2, y + hop); ctx.rotate((o.wob || 0) * Math.sin(t * 6 + i * 1.3)); ctx.scale(Math.min(p.sx, p.s, 1) * out, p.sy * out);
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
  // a popping label pill
  function tag(ctx, x, y, label, fill, flip = 1, size = 30) {
    ctx.save(); ctx.translate(x, y); ctx.scale(flip, 1);
    ctx.font = `700 ${size}px ${FONT}`; const w = Math.max(ctx.measureText(label).width + size * 1.1, size * 1.6), h = size * 1.5;
    cel(ctx, rrP(-w / 2, -h / 2, w, h, h / 2), fill, H.rgba(H.mix(fill, C.plum, 0.15)), -3, -3, 3.5);
    ctx.fillStyle = C.plum; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, 0, 2);
    ctx.restore();
  }
  const ptag = (ctx, t, t0, x, y, label, fill, size = 32, t1 = null) => popIn(ctx, t, t0, x, y, () => tag(ctx, 0, 0, label, fill, 1, size), 1.2, t1);
  const ptext = (ctx, t, t0, x, y, str, size, o = {}, t1 = null) => popIn(ctx, t, t0, x, y, () => kText(ctx, str, 0, 0, size, o), 1.3, t1);

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
    } else {
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
  // a face that sits on any character or organ (local units, centre between the eyes)
  function face(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const ek = P.eyes || 'normal', look = P.look || [0, 0], iris = P.iris || '#8a6cf0';
    eye(ctx, -34, 0, 22, 29, iris, ek, 1, look); eye(ctx, 34, 0, 22, 29, iris, ek, -1, look);
    if (P.blush !== false) { blush(ctx, -60, 30, 15, 8); blush(ctx, 60, 30, 15, 8); }
    mouth(ctx, 0, 32, 10, P.mouth || 'smile');
    ctx.restore();
  }

  // ---------- emotes / props ----------
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
    if (s <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(0, -30); p.bezierCurveTo(8, -12, 20, 2, 20, 14); p.arc(0, 14, 20, 0, Math.PI); p.bezierCurveTo(-20, 2, -8, -12, 0, -30); p.closePath();
    cel(ctx, p, C.sky, C.skyS, -4, -4, 4); shine(ctx, -6, 12, 4, 7, 0.3);
    ctx.restore();
  }
  function drop(ctx, x, y, s, fill = C.sky, shade = C.skyS, w = 4) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(0, -30); p.bezierCurveTo(8, -12, 20, 2, 20, 14); p.arc(0, 14, 20, 0, Math.PI); p.bezierCurveTo(-20, 2, -8, -12, 0, -30); p.closePath();
    cel(ctx, p, fill, shade, -4, -4, w); shine(ctx, -6, 10, 4, 7, 0.3);
    ctx.restore();
  }
  function sparkle(ctx, x, y, R, fill = C.white, rot = 0, w = 3.5) { if (R <= 0) return; const p = spark4P(x, y, R, rot); ctx.fillStyle = fill; ctx.fill(p); if (w) ol(ctx, p, w); }
  function heart(ctx, x, y, s, fill = C.pinkD, rot = 0) { if (s <= 0) return; cel(ctx, heartP(x, y, s, rot), fill, H.rgba(H.mix(fill, C.plum, 0.25)), -s * 0.12, -s * 0.12, 3.5); shine(ctx, x - s * 0.45, y - s * 0.35, s * 0.18, s * 0.12, -0.6); }
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
      if (py > 1960) continue;
      ctx.save(); ctx.translate(px, py); ctx.rotate(rs * tau); ctx.scale(1, Math.cos(tau * 9 + i));
      ctx.fillStyle = c;
      if (kind === 0) ctx.fill(rrP(-sz * 0.6, -sz * 0.35, sz * 1.2, sz * 0.7, 3));
      else if (kind === 1) ctx.fill(ellP(0, 0, sz * 0.45, sz * 0.45));
      else if (kind === 2) ctx.fill(starP(0, 0, sz * 0.7));
      else ctx.fill(heartP(0, 0, sz * 0.5));
      ctx.restore();
    }
  }
  function poof(ctx, x, y, t, t0, R = 50, col = C.white) { // a little puff of cloud when something vanishes
    const u = (t - t0) / 0.45; if (u < 0 || u > 1) return;
    ctx.save(); ctx.globalAlpha = 1 - u;
    for (let i = 0; i < 6; i++) { const a = i / 6 * TAU, d = R * (0.3 + u); cel(ctx, ellP(x + Math.cos(a) * d, y + Math.sin(a) * d, R * 0.38 * (1 - u * 0.5), R * 0.38 * (1 - u * 0.5)), col, C.creamS, -3, -3, 3); }
    ctx.restore();
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
  function dotted(ctx, pts, prog_, col, r = 6, gap = 22, head = 1) {
    if (prog_ <= 0) return;
    const L = plen(pts) * prog_;
    for (let d = 0; d < L - (head ? 16 : 0); d += gap) { const [x, y] = along(pts, d); ctx.fillStyle = col; ctx.fill(ellP(x, y, r, r)); }
    if (head) {
      const [x, y, a] = along(pts, L), s = 20 * head;
      ctx.save(); ctx.translate(x, y); ctx.rotate(a);
      const p = roundPoly([[s * 0.9, 0], [-s * 0.6, -s * 0.85], [-s * 0.6, s * 0.85]], s * 0.25);
      cel(ctx, p, col, H.rgba(H.mix(col, C.plum, 0.25)), -2, -2, 4); ctx.restore();
    }
  }
  // chunky check / cross stamps
  function check(ctx, x, y, s, t, t0) { popIn(ctx, t, t0, x, y, () => { ctx.scale(s, s); cel(ctx, ellP(0, 0, 40, 40), C.mintD, '#2fa078', -5, -5, 5); ctx.strokeStyle = C.white; ctx.lineWidth = 11; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(-17, 2); ctx.lineTo(-4, 15); ctx.lineTo(18, -12); ctx.stroke(); }, 1.5); impactLines(ctx, x, y, 54 * s, t, t0, 10, C.mintD); }
  function cross(ctx, x, y, s, t, t0) { popIn(ctx, t, t0, x, y, () => { ctx.rotate(-0.12); ctx.scale(s, s); cel(ctx, ellP(0, 0, 44, 44), C.red, '#e2486c', -5, -5, 5); ctx.strokeStyle = C.white; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-16, -16); ctx.lineTo(16, 16); ctx.moveTo(16, -16); ctx.lineTo(-16, 16); ctx.stroke(); }, 1.6); impactLines(ctx, x, y, 58 * s, t, t0, 10, C.red); }
  function clock(ctx, x, y, R, spin) {
    ctx.save(); ctx.translate(x, y);
    cel(ctx, ellP(0, 0, R, R), C.white, C.creamS, -6, -6, 5);
    for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; ctx.fillStyle = i % 3 ? C.lavS : C.pinkD; ctx.fill(ellP(Math.cos(a) * R * 0.78, Math.sin(a) * R * 0.78, R * 0.05, R * 0.05)); }
    ctx.lineCap = 'round'; ctx.strokeStyle = C.plum;
    ctx.lineWidth = R * 0.09; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(spin / 12 - Math.PI / 2) * R * 0.45, Math.sin(spin / 12 - Math.PI / 2) * R * 0.45); ctx.stroke();
    ctx.lineWidth = R * 0.06; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(spin - Math.PI / 2) * R * 0.65, Math.sin(spin - Math.PI / 2) * R * 0.65); ctx.stroke();
    ctx.fillStyle = C.pinkD; ctx.fill(ellP(0, 0, R * 0.08, R * 0.08));
    cel(ctx, rrP(-R * 0.16, -R - R * 0.2, R * 0.32, R * 0.18, 4), C.pink, C.pinkS, -2, -2, 3.5);
    ctx.restore();
  }

  // ---------- characters (local units) ----------
  // the bite: a chibi onigiri. (x,y) = centre, its base sits at y + 72*s
  // background: soft pastel with simple patterns (from the reference)
  function bg(ctx, W, H_, t, th, seed = 1) {
    ctx.fillStyle = th.base; ctx.fillRect(0, 0, W, H_);
    const r = H.rng(seed);
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
  function wipe(ctx, W, H_, u, shape, cx, cy, drawB) {
    const e = u * u * (3 - 2 * u), rot = -Math.PI / 2 + u * 0.9;
    const p = shape === 'heart' ? heartP(cx, cy, 3600 * e * e + 4, 0) : starP(cx, cy, 3600 * e * e + 4, rot, 0.52);
    ctx.save(); ctx.clip(p); drawB(); ctx.restore();
    ctx.save(); ctx.lineJoin = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.stroke(p); ctx.strokeStyle = shape === 'heart' ? C.pink : C.butter; ctx.lineWidth = 24; ctx.stroke(p);
    ctx.strokeStyle = C.white; ctx.lineWidth = 6; ctx.globalAlpha = 0.8; ctx.stroke(p); ctx.restore();
  }



  // ======================================== CHARACTERS ========================================
  // ---------- this story ----------
  const W = W0, HH = H0;
  const HO = (fill, line) => ({ fill, line, outer: C.plum, ow: 0.08, lw: 0.2, track: 7 });
  const closeAt = (t, t0, d = 0.27) => { const u = (t - t0) / d; return u <= 0 || u >= 1 ? 0 : Math.sin(u * Math.PI); }; // 0 open .. 1 shut .. 0 open
  const blinks = (t, list, d) => list.reduce((m, b) => Math.max(m, closeAt(t, b, d)), 0);

  // big glossy anime eye, front view. close: 0 open .. 1 shut. Lid in skin tone with a heavy lash on its edge.
  function almond(rx, ry) { const p = new Path2D(); p.moveTo(-rx, 0); p.quadraticCurveTo(0, -2 * ry, rx, 0); p.quadraticCurveTo(0, 2 * ry, -rx, 0); p.closePath(); return p; }
  function heroEye(ctx, x, y, s, close = 0, P = {}) {
    const rx = 300, ry = 190, A = almond(rx, ry), iris = P.iris || '#8a6cf0', look = P.look || [0, 0];
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.save(); ctx.clip(A);
    ctx.fillStyle = C.white; ctx.fillRect(-rx, -ry * 1.2, rx * 2, ry * 2.4);
    ctx.fillStyle = C.creamS; ctx.beginPath(); ctx.rect(-rx, -ry * 1.2, rx * 2, 52); ctx.fill();
    const ix = look[0] * 70, iy = look[1] * 26, R = 158, g = ctx.createLinearGradient(0, iy - R, 0, iy + R);
    g.addColorStop(0, C.dark); g.addColorStop(0.42, H.rgba(H.mix(iris, C.dark, 0.35))); g.addColorStop(1, H.rgba(H.mix(iris, '#ffffff', 0.45)));
    ctx.fillStyle = C.dark; ctx.fill(ellP(ix, iy, R + 8, R + 8));
    ctx.fillStyle = g; ctx.fill(ellP(ix, iy, R, R));
    ctx.fillStyle = '#28142c'; ctx.fill(ellP(ix, iy, 76, 76));
    ctx.fillStyle = H.rgba(H.mix(iris, '#ffffff', 0.65), 0.9); ctx.fill(ellP(ix, iy + 104, 84, 28));
    ctx.fillStyle = C.white; ctx.fill(ellP(ix - 56, iy - 62, 56, 46)); ctx.fill(ellP(ix + 60, iy + 52, 24, 20));
    if (P.wet) { ctx.globalAlpha = P.wet * 0.3; ctx.fillStyle = C.sky; ctx.fillRect(-rx, -ry * 1.2, rx * 2, ry * 2.4); ctx.globalAlpha = 1; shine(ctx, -150, -40, 34, 13, -0.5, P.wet); shine(ctx, 170, 40, 22, 9, -0.5, P.wet); }
    if (P.inside) P.inside(ctx, rx, ry);
    // lid
    const cy = H.lerp(-2 * ry, 2 * ry, H.clamp(close));
    const lid = new Path2D(); lid.moveTo(-rx - 10, 0); lid.quadraticCurveTo(0, cy, rx + 10, 0); lid.lineTo(rx + 10, -ry * 1.3); lid.lineTo(-rx - 10, -ry * 1.3); lid.closePath();
    ctx.fillStyle = P.skin || C.peach; ctx.fill(lid);
    ctx.restore();
    ol(ctx, A, 9);
    ctx.save(); ctx.strokeStyle = C.dark; ctx.lineCap = 'round'; ctx.lineWidth = 22; ctx.beginPath(); ctx.moveTo(-rx, 0); ctx.quadraticCurveTo(0, cy, rx, 0); ctx.stroke();
    // lashes on the outer corner
    ctx.lineWidth = 14; for (const a of [0, 1]) { ctx.beginPath(); ctx.moveTo(rx - 12, -8 - a * 26); ctx.lineTo(rx + 42, -44 - a * 40); ctx.stroke(); }
    ctx.restore();
    ctx.restore();
  }
  // chibi kid: (x,y) = head centre. P.eyes, P.mouth, P.look, P.sq
  function kid(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); if (P.sq) { ctx.scale(P.sq[0], P.sq[1]); } if (P.tilt) ctx.rotate(P.tilt);
    ctx.fillStyle = 'rgba(90,54,89,0.13)'; ctx.fill(ellP(0, 290, 130, 20));
    cel(ctx, rrP(-78, 130, 156, 150, 60), C.mint, C.mintS, -9, -9);
    for (const sd of [-1, 1]) cel(ctx, ellP(sd * 94, 196, 26, 40, sd * -0.25), C.mint, C.mintS, -4, -4);
    union(ctx, [ellP(0, -20, 190, 168), ellP(-150, -70, 56, 70), ellP(150, -70, 56, 70), ellP(-70, -158, 70, 54), ellP(70, -158, 70, 54)], C.lavD, 5);
    cel(ctx, ellP(0, 16, 164, 146), C.peach, C.peachS, -9, -9);
    union(ctx, [ellP(-74, -92, 84, 44, 0.25), ellP(62, -96, 90, 40, -0.2)], C.lavD, 0);
    shine(ctx, -82, -128, 34, 10, -0.2, 0.55);
    eye(ctx, -70, 30, 40, 54, '#8a6cf0', P.eyes || 'normal', 1, P.look || [0, 0]); eye(ctx, 70, 30, 40, 54, '#8a6cf0', P.eyes || 'normal', -1, P.look || [0, 0]);
    blush(ctx, -118, 86, 26, 14); blush(ctx, 118, 86, 26, 14);
    mouth(ctx, 0, 100, 18, P.mouth || 'smile');
    ctx.restore();
  }
  // cute brain mascot
  function brain(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const lobes = [[-130, -40, 92], [-60, -110, 88], [50, -116, 90], [132, -46, 90], [-112, 58, 84], [116, 58, 84], [0, 70, 96], [0, -30, 110]].map(([a, b, r]) => ellP(a, b, r, r * 0.92));
    union(ctx, lobes, C.pink, 6);
    ctx.save(); ctx.strokeStyle = C.pinkS; ctx.lineWidth = 11; ctx.lineCap = 'round';
    for (const [a, b, c, d, e, f] of [[-160, -74, -116, -112, -74, -76], [64, -150, 112, -118, 90, -74], [142, 76, 190, 44, 176, -6], [-182, 28, -144, 66, -104, 34]]) { ctx.beginPath(); ctx.moveTo(a, b); ctx.quadraticCurveTo(c, d, e, f); ctx.stroke(); }
    ctx.restore();
    if (P.vis != null && P.vis > 0) { ctx.save(); ctx.globalAlpha = P.vis; const g = ctx.createRadialGradient(0, 112, 8, 0, 112, 120); g.addColorStop(0, C.butterD); g.addColorStop(1, 'rgba(255,216,77,0)'); ctx.fillStyle = g; ctx.fill(ellP(0, 112, 118, 66)); ctx.restore(); }
    eye(ctx, -58, 0, 32, 42, '#8a6cf0', P.eyes || 'normal', 1, P.look || [0, 0]); eye(ctx, 58, 0, 32, 42, '#8a6cf0', P.eyes || 'normal', -1, P.look || [0, 0]);
    blush(ctx, -104, 44, 20, 11); blush(ctx, 104, 44, 20, 11);
    mouth(ctx, 0, 48, 14, P.mouth || 'smile');
    ctx.restore();
  }
  function speck(ctx, x, y, r, seed) { ctx.save(); ctx.translate(x, y); ctx.rotate(seed); const p = roundPoly(starPts(0, 0, r, r * 0.68, 6, seed), r * 0.25); cel(ctx, p, C.brown, C.brownS, -2, -2, 3.5); ctx.restore(); }
  // a tiny sunny world, for the film-strip frames
  function worldFrame(ctx, x, y, w, h, dark) {
    ctx.save(); const p = rrP(x - w / 2, y - h / 2, w, h, 20); 
    if (dark) { ctx.fillStyle = C.dark; ctx.fill(p); }
    else { ctx.save(); ctx.clip(p); ctx.fillStyle = C.sky; ctx.fillRect(x - w / 2, y - h / 2, w, h); ctx.fillStyle = C.mintS; ctx.fill(ellP(x, y + h * 0.56, w * 0.8, h * 0.42)); ctx.fillStyle = C.mint; ctx.fill(ellP(x - w * 0.3, y + h * 0.6, w * 0.6, h * 0.36)); const q = ellP(x + w * 0.24, y - h * 0.22, h * 0.15, h * 0.15); ctx.fillStyle = C.butterD; ctx.fill(q); ctx.fillStyle = C.white; ctx.fill(cloudP(x - w * 0.2, y - h * 0.2, 0.42 * w / 300)); ctx.restore(); }
    ol(ctx, p, 6); ctx.restore();
  }

  const SC = [];
  const scene = (first, tr, theme, seed, draw, wx = 540, wy = 1000) => SC.push({ s: first === 0 ? 0 : PS(first) - 0.5, first, tr, theme, seed, draw, wx, wy });
  const NOTM = (x, y) => y > 420 && y < 1620;

  // 1 HOOK: you go blind 15,000 times a day
  scene(0, null, TH.pink, 3, (ctx, t) => {
    twinkles(ctx, W, HH, t, 21, 12, NOTM);
    const b = T(0, 'blind'), f = T(0, 'fifteen'), td = T(0, 'every'), wc = T(1, 'why');
    const c = blinks(t, [b, f + 0.5, f + 1.0, f + 1.5, td + 0.35, wc + 0.9], 0.27);
    kWord(ctx, 'YOU GO BLIND', 540, 300, 122, t, 0.15, 0.03, { ...HO(C.white, C.pinkD), t1: wc - 0.1 });
    if (t >= wc) {
      const p = pop(t, wc);
      kid(ctx, 540, 860, 1.5 * p.s, { eyes: c > 0.5 ? 'blink' : 'shock', mouth: 'o', look: [0, 0], sq: squash(t, wc) });
      kana(ctx, '!?', 880, 590, 150, 0.15, pop(t, wc + 0.1).s, C.butter);
      for (let i = 0; i < 2; i++) sweat(ctx, 245 - i * 34, 640 + i * 100, 1.2 * pop(t, wc + 0.15 + i * 0.1).s);
      kWord(ctx, "WHY CAN'T", 540, 1370, 112, t, wc, 0.02, HO(C.white, C.lavD));
      kWord(ctx, 'YOU TELL?', 540, 1500, 112, t, wc + 0.14, 0.02, HO(C.butter, C.lavD));
    } else {
      const p = pop(t, 0.1);
      heroEye(ctx, 540, 880, 1.45 * p.s, c, { look: [0.12 * Math.sin(t * 2), 0] });
      if (t >= f) {
        const k = H.clamp((t - f) / 0.9), v = Math.round(H.ease.out(k) * 15000), q = pop(t, f);
        popIn(ctx, t, f, 540, 1370, () => { const sq = squash(t, f + 0.9, 0.14); ctx.scale(sq[0], sq[1]); kText(ctx, v.toLocaleString('en-US'), 0, 0, 230, HO(C.butter, C.pinkD)); });
        ptext(ctx, t, td, 540, 1500, 'TIMES A DAY', 92, HO(C.white, C.lavD));
      }
    }
  });

  // 2 BLINKING: a tenth of a second
  scene(2, 'star', TH.mint, 7, (ctx, t) => {
    twinkles(ctx, W, HH, t, 41, 10, NOTM);
    const bl = T(2, 'blinking'), te = T(3, 'tenth'), ea = T(3, 'each');
    const c = blinks(t, [bl + 0.1, bl + 0.8, te + 0.2], 0.3);
    kWord(ctx, 'BLINK!', 540, 340, 190, t, bl, 0.03, { ...HO(C.white, C.mintD), wob: 0.02 });
    heroEye(ctx, 540, 790, 1.2 * pop(t, PS(2) - 0.2).s, c, { iris: '#3fb98e', look: [0, 0] });
    impactLines(ctx, 540, 790, 390, t, bl + 0.1);
    if (t >= ea - 0.05) {
      popIn(ctx, t, ea, 540, 1320, () => { clock(ctx, -300, 0, 120, (t - ea) * 8); });
      ptext(ctx, t, te, 620, 1370, '0.1', 240, HO(C.butter, C.pinkD));
      ptag(ctx, t, te + 0.15, 620, 1465, 'of a second', C.white, 56);
    }
  });

  // side view of the eyeball, for the cornea and the tear film
  function sideEye(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const R = 300;
    cel(ctx, ellP(0, 0, R, R), C.white, C.creamS, -14, -14, 7);
    // veins in the white part only
    ctx.save(); ctx.strokeStyle = C.red; ctx.lineWidth = 8; ctx.lineCap = 'round';
    for (const [a, b, c, d] of [[-280, -70, -180, -40, -120, -120], [-280, 90, -190, 60, -120, 130], [-200, -210, -130, -180, -70, -220], [-200, 210, -130, 180, -70, 220]]) { ctx.beginPath(); ctx.moveTo(a, b); ctx.quadraticCurveTo(c, d, (a + c) / 2 + 60, (b + d) / 2 - 10); ctx.stroke(); }
    ctx.restore();
    // iris + pupil behind the clear dome
    cel(ctx, rrP(170, -122, 56, 244, 26), '#8a6cf0', C.lavD, -5, -5, 5);
    ctx.fillStyle = C.dark; ctx.fillRect(205, -46, 24, 92);
    // clear dome on the front
    const dome = new Path2D(); dome.moveTo(244, -178); dome.quadraticCurveTo(450, -120, 450, 0); dome.quadraticCurveTo(450, 120, 244, 178); dome.quadraticCurveTo(300, 0, 244, -178); dome.closePath();
    ctx.save(); ctx.globalAlpha = 0.8; ctx.fillStyle = P.lit ? C.butter : C.sky; ctx.fill(dome); ctx.restore(); ol(ctx, dome, 7);
    shine(ctx, 370, -70, 12, 32, 0.4, 0.95);
    // tear film as a coat on the outside of the dome
    if (P.film > 0) { const N = 40, u = P.film; ctx.save(); ctx.strokeStyle = C.skyD; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.beginPath(); for (let i = 0; i <= N * u; i++) { const k = i / N, a = -1 + 2 * k, px = 462 - 52 * a * a * a * a - 34 * a * a, py = 190 * a; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.stroke(); ctx.restore(); }
    ctx.restore();
  }

  // 3 CORNEA: no blood vessels, tear film instead
  scene(4, 'heart', TH.sky, 11, (ctx, t) => {
    twinkles(ctx, W, HH, t, 51, 10, NOTM);
    const cl = T(4, 'clear'), ey = T(4, 'eye'), nb = T(4, 'no'), so = T(5, 'so'), fm = T(5, 'film'), te = T(5, 'tears');
    const sh = (t >= cl && t < nb + 1) ? 1 : 0;
    sideEye(ctx, 410, 900, 1.15 * pop(t, PS(4) - 0.3).s, { lit: sh, film: H.clamp((t - fm) / 1.1) });
    if (t > fm) for (let i = 0; i < 5; i++) { const u = ((t - fm) * 0.8 + i / 5) % 1; drop(ctx, 880 + (i - 2) * 26 , 520 + u * 200, 1.1 * Math.min(1, (t - fm) * 3) * (1 - u * 0.3)); }
    kWord(ctx, 'THE CLEAR FRONT', 540, 300, 104, t, cl, 0.018, { ...HO(C.white, C.skyD), t1: so - 0.15 });
    popIn(ctx, t, ey, 840, 560, () => { }, 1, so - 0.2);
    if (t >= nb && t < so - 0.05) { popIn(ctx, t, nb, 540, 1420, () => { ctx.save(); ctx.strokeStyle = C.red; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-430, -6); ctx.bezierCurveTo(-400, -50, -350, 40, -310, -6); ctx.stroke(); ctx.restore(); cross(ctx, -370, -6, 1.1, t, nb + 0.15); kText(ctx, 'NO BLOOD', 90, -50, 120, HO(C.white, C.red)); kText(ctx, 'VESSELS', 90, 80, 120, HO(C.white, C.red)); }); }
    if (t >= so) { kWord(ctx, 'FILM OF TEARS', 540, 1460, 120, t, fm - 0.15, 0.02, HO(C.white, C.skyD)); kWord(ctx, 'TEARS INSTEAD', 540, 300, 104, t, so, 0.02, HO(C.butter, C.skyD)); }
  });

  // 4 THREE LAYERS: mucus next to the eye, water, oil on top
  scene(6, 'star', TH.butter, 13, (ctx, t) => {
    twinkles(ctx, W, HH, t, 61, 8, NOTM);
    const th = T(6, 'three'), mu = T(7, 'mucus'), wa = T(7, 'water'), oi = T(7, 'oil');
    kWord(ctx, '3 LAYERS', 540, 310, 170, t, th, 0.03, HO(C.white, C.pinkD));
    const L = [[oi, 'OIL', C.butterD, C.butterS, 600, 180, '#fff0a6'], [wa, 'WATER', C.sky, C.skyS, 790, 300, '#c6e7ff'], [mu, 'MUCUS', C.pink, C.pinkS, 1100, 190, '#ffbfd2']];
    const ww = (y, a) => { const p = new Path2D(); const x0 = 90, x1 = 990, n = 18; p.moveTo(x0, y); for (let i = 1; i <= n; i++) p.lineTo(x0 + (x1 - x0) * i / n, y + Math.sin(i * 0.9 + t * 2.4 + a) * 12); return p; };
    // eye surface at the bottom
    popIn(ctx, t, PS(6) - 0.2, 540, 1400, () => { cel(ctx, rrP(-450, -100, 900, 220, 40), C.white, C.creamS, -6, -6, 6); kText(ctx, 'YOUR EYE', 0, 36, 92, HO(C.white, C.lavD)); });
    L.slice().reverse().forEach(([t0, name, c, cs, y, h], i) => {
      const p = pop(t, t0, 1.2); if (p.s <= 0) return;
      ctx.save(); ctx.translate(540, y + h / 2); ctx.scale(1, p.s); ctx.translate(-540, -(y + h / 2));
      const q = new Path2D(); const x0 = 90, x1 = 990, n = 18; q.moveTo(x0, y + h); q.lineTo(x0, y); for (let k = 1; k <= n; k++) q.lineTo(x0 + (x1 - x0) * k / n, y + Math.sin(k * 0.9 + t * 2.4 + i) * 12); q.lineTo(x1, y + h); q.closePath();
      cel(ctx, q, c, cs, -4, -8, 6);
      ctx.restore();
      popIn(ctx, t, t0, 540, y + h / 2 + 34, () => kText(ctx, name, 0, 0, name === 'WATER' ? 128 : 112, HO(C.white, C.plum)));
    });
    if (t > wa) for (let i = 0; i < 4; i++) shine(ctx, 190 + i * 230, 880 + 70 * Math.sin(i * 2 + t * 2), 16, 8, 0, 0.75);
  });

  // 5 WIPER: fresh coat, dust to the drain
  scene(8, 'heart', TH.lav, 17, (ctx, t) => {
    twinkles(ctx, W, HH, t, 71, 8, NOTM);
    const ev = T(8, 'every'), co = T(8, 'coat'), wi = T(9, 'windshield'), du = T(10, 'dust'), dr = T(10, 'drain'), sw = T(10, 'sweeps');
    // the blink keeps coming; each one wipes
    const bl = [ev + 0.3, co + 0.1, wi, wi + 0.75, sw + 0.1, du + 0.6, dr + 0.5];
    const c = blinks(t, bl, 0.42);
    const ex = 540, ey = 860, sc = 1.55;
    const wet = H.clamp((t - co) * 2);
    const inner = -1; // drain on the inner corner (left of frame)
    const dustK = H.ease.inOut(H.clamp((t - sw) / (dr - sw + 0.2)));
    const specks = [[150, -40, 22, 1], [70, 60, 18, 2], [-40, -70, 20, 3], [210, 30, 15, 4], [-130, 40, 18, 5]];
    heroEye(ctx, ex, ey, sc, c, { wet, iris: '#5aa9ea', inside: (cx) => {
      specks.forEach(([x, y, r, s], i) => { const o = H.clamp(1 - (dustK - 0.92) * 12); if (o <= 0) return; const px = H.lerp(x, -262, Math.min(1, dustK * (1 + i * 0.04))), py = H.lerp(y, 18, dustK); speck(cx, px, py + Math.sin(t * 3 + i) * 3, r, s); });
    } });
    // wiper arm riding the lid edge
    if (t >= wi - 0.1) { const ry = 190 * sc, yy = ey + H.lerp(-ry, ry, c); popIn(ctx, t, wi - 0.1, 0, 0, () => { ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(ex - 330, yy); ctx.lineTo(ex + 330, yy); ctx.stroke(); ctx.strokeStyle = C.dark; ctx.lineWidth = 16; ctx.stroke(); ctx.restore(); }, 0.6, sw - 0.1); }
    kWord(ctx, 'FRESH COAT!', 540, 310, 128, t, T(8, 'fresh'), 0.02, { ...HO(C.white, C.lavD), t1: wi - 0.1 });
    if (t >= wi - 0.05 && t < sw) kWord(ctx, 'TINY WIPER', 540, 310, 128, t, T(9, 'tiny'), 0.02, { ...HO(C.butter, C.lavD), t1: sw - 0.12 });
    if (t >= sw) { kWord(ctx, 'DUST: OUT!', 540, 310, 128, t, du - 0.1, 0.02, HO(C.white, C.pinkD)); }
    if (t >= dr - 0.1) {
      dotted(ctx, bez([300, 1320], [180, 1280], [90, 1150], [75, 960]), H.clamp((t - dr) * 3), C.pinkD);
      ptext(ctx, t, dr, 560, 1400, 'TEAR DRAIN', 128, HO(C.butter, C.pinkD));
      ptag(ctx, t, dr + 0.12, 560, 1490, 'in the inner corner', C.white, 50);
    }
  });

  // 6 WHY NOT BLACK: the world almost goes dark
  scene(11, 'star', TH.pink, 19, (ctx, t) => {
    const wh = T(11, 'why'), wo = T(11, 'world'), bl = T(11, 'black');
    const c = H.clamp((t - wo) / 0.7) * 0.82;
    worldFrame(ctx, 540, 900, 880, 880, false);
    ctx.save(); ctx.clip(rrP(100, 460, 880, 880, 20));
    ctx.fillStyle = C.dark; const ch = 440 * c; ctx.fillRect(100, 460, 880, ch); ctx.fillRect(100, 1340 - ch, 880, ch);
    ctx.restore(); ol(ctx, rrP(100, 460, 880, 880, 20), 7);
    kid(ctx, 540, 900, 0.8 * pop(t, PS(11)).s, { eyes: t > bl ? 'shock' : 'normal', mouth: t > bl ? 'o' : 'smile', look: [0, -1] });
    kWord(ctx, 'WHY NOT', 540, 300, 150, t, wh, 0.025, HO(C.white, C.lavD));
    kWord(ctx, 'BLACK?!', 540, 1530, 170, t, bl - 0.05, 0.025, HO(C.butter, C.plum));
  });

  // 7 BRAIN SCAN: visual system goes quiet as the lid comes down
  scene(12, 'heart', TH.mint, 23, (ctx, t) => {
    twinkles(ctx, W, HH, t, 81, 9, NOTM);
    const sc = T(12, 'scanned'), fo = T(13, 'found'), vi = T(13, 'visual'), qu = T(13, 'quiet'), ri = T(14, 'right'), li = T(14, 'eyelid'), dn = T(14, 'down');
    // scanner ring
    const ring = pop(t, sc - 0.1);
    const lev = 1 - H.smooth(qu - 0.1, qu + 0.35, t);
    if (ring.s > 0) { ctx.save(); ctx.translate(540, 880); ctx.scale(ring.sx, ring.sy); const o = ellP(0, 0, 420, 420), i = ellP(0, 0, 340, 340); cel(ctx, o, C.lav, C.lavS, -9, -9, 7); ctx.fillStyle = TH.mint.base; ctx.fill(i); ol(ctx, i, 7); ctx.restore();
      const a = (t - sc) * 3; for (let k = 0; k < 3; k++) { const aa = a + k * TAU / 3; ctx.fillStyle = C.butterD; ctx.fill(ellP(540 + Math.cos(aa) * 380, 880 + Math.sin(aa) * 380, 22, 22)); ol(ctx, ellP(540 + Math.cos(aa) * 380, 880 + Math.sin(aa) * 380, 22, 22), 5); } }
    brain(ctx, 540, 880, 1.2 * pop(t, PS(12) - 0.3).s, { vis: t >= vi ? Math.max(lev, 0) : 0, eyes: t > qu ? 'blink' : t > sc ? 'normal' : 'happy', mouth: t > qu ? 'flat' : 'smile', look: [0, 0.4] });
    kWord(ctx, 'BRAIN SCAN', 540, 300, 140, t, sc - 0.1, 0.022, { ...HO(C.white, C.mintD), t1: vi - 0.1 });
    if (t >= vi) kWord(ctx, 'VISUAL SYSTEM', 540, 300, 112, t, vi, 0.018, HO(C.butter, C.mintD));
    // sound-style meter: activity
    if (t >= vi - 0.05) { popIn(ctx, t, vi, 0, 0, () => { for (let i = 0; i < 7; i++) { const on = i < Math.ceil(lev * 6) + 1 - (lev <= 0 ? 1 : 0); cel(ctx, rrP(190 + i * 100, 1400, 86, 60, 18), on ? (i > 4 ? C.pinkD : i > 2 ? C.butterD : C.mintD) : C.white, C.creamS, 0, 0, 5); } }, 0.6); }
    if (t >= qu) ptext(ctx, t, qu, 540, 1560, 'GOES QUIET', 112, HO(C.white, C.lavD));
    if (t >= ri) { const c = H.smooth(li - 0.1, dn, t); popIn(ctx, t, ri - 0.05, 880, 480, () => heroEye(ctx, 0, 0, 0.42, c, {})); }
  });

  // 8 DELETE: film strip, the black frame is removed
  scene(15, 'star', TH.butter, 29, (ctx, t) => {
    twinkles(ctx, W, HH, t, 91, 8, NOTM);
    const de = T(15, 'deletes'), bo = T(15, 'blackout'), be = T(16, 'before'), se = T(16, 'see');
    const close = H.ease.inOut(H.clamp((t - be) / 0.5));
    const zap = t >= bo + 0.2;
    const fx = [270, 540, 810].map((x, i) => i === 1 ? x : x + (i === 0 ? 1 : -1) * close * 130);
    const stripW = H.lerp(840, 590, close);
    cel(ctx, rrP(540 - stripW / 2, 760, stripW, 300, 24), C.plum, C.dark, -4, -4, 5);
    for (let i = 0; i < 9; i++) { const xx = 540 - stripW / 2 + 24 + i * (stripW - 48) / 8; for (const yy of [772, 1024]) { ctx.fillStyle = C.cream; ctx.fill(rrP(xx - 12, yy, 24, 24, 6)); } }
    worldFrame(ctx, fx[0], 910, 240, 200, false);
    worldFrame(ctx, fx[2], 910, 240, 200, false);
    const a = H.clamp(1 - (t - (bo + 0.1)) / 0.3), s0 = zap ? pop(t, bo + 0.2).s : 0;
    if (a > 0) { ctx.save(); ctx.globalAlpha = a; ctx.translate(540, 910 - (1 - a) * 280); ctx.rotate((1 - a) * 0.4); worldFrame(ctx, 0, 0, 240, 200, true); ctx.restore(); }
    poof(ctx, 540, 620, t, bo + 0.3, 90);
    if (zap) impactLines(ctx, 540, 640, 130, t, bo + 0.2);
    brain(ctx, 540, 1370, 0.85 * pop(t, PS(15) - 0.2).s, { eyes: t > be ? 'happy' : 'normal', mouth: t > be ? 'smile' : 'o', look: [0, -1] });
    kWord(ctx, 'DELETED!', 540, 330, 172, t, de, 0.03, HO(C.white, C.pinkD));
    if (t > se) { kana(ctx, 'キラ', 880, 1250, 80, 0.15, pop(t, se).s, C.butter); sparkle(ctx, 230, 1250, 48 * pop(t, se).s, C.butterD, 0, 4); }
  });

  // 9 HALF AN HOUR
  scene(17, 'heart', TH.sky, 31, (ctx, t) => {
    twinkles(ctx, W, HH, t, 101, 10, NOTM);
    const al = T(17, 'altogether'), sh = T(17, 'shut'), ha = T(17, 'half'), ho = T(17, 'hour'), ev = T(17, 'every');
    const u = H.ease.out(H.clamp((t - ha) / 0.7)), R = 330, cx = 540, cy = 880, p = pop(t, al);
    if (p.s > 0) { ctx.save(); ctx.translate(cx, cy); ctx.scale(p.sx, p.sy); cel(ctx, ellP(0, 0, R, R), C.white, C.creamS, -9, -9, 8);
      if (u > 0) { const w = new Path2D(); w.moveTo(0, 0); w.arc(0, 0, R - 24, -Math.PI / 2, -Math.PI / 2 + Math.PI * u); w.closePath(); cel(ctx, w, C.pink, C.pinkS, -4, -4, 5); }
      for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; ctx.fillStyle = i % 3 ? C.lavS : C.pinkD; ctx.fill(ellP(Math.cos(a) * (R - 44), Math.sin(a) * (R - 44), i % 3 ? 9 : 14, i % 3 ? 9 : 14)); }
      const a = -Math.PI / 2 + Math.PI * u; ctx.lineCap = 'round'; ctx.strokeStyle = C.plum; ctx.lineWidth = 18; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * (R - 80), Math.sin(a) * (R - 80)); ctx.stroke(); ctx.fillStyle = C.pinkD; ctx.fill(ellP(0, 0, 22, 22)); ctx.restore(); }
    kWord(ctx, 'EYES SHUT', 540, 310, 150, t, sh - 0.1, 0.025, HO(C.white, C.skyD));
    popIn(ctx, t, ha, 540, 1410, () => { const q = squash(t, ho, 0.12); ctx.scale(q[0], q[1]); kText(ctx, '30 MIN', 0, 0, 210, HO(C.butter, C.pinkD)); });
    ptext(ctx, t, ev, 540, 1540, 'EVERY DAY', 96, HO(C.white, C.lavD));
    if (t >= ho) { confetti(ctx, t, ho, 540, 880, 24, 311); }
  });

  // 10 QUESTION: how long without blinking?
  scene(18, 'star', TH.pink, 37, (ctx, t) => {
    twinkles(ctx, W, HH, t, 111, 10, NOTM);
    const se = T(18, 'seconds'), wi = T(18, 'without'), te = T(19, 'tell'), re = T(19, 'record');
    const strain = H.clamp((t - wi) / 1.5);
    kid(ctx, 540, 830, 1.55 * pop(t, PS(18) - 0.2).s, { eyes: 'shock', mouth: strain > 0.4 ? 'wobble' : 'o', look: [0, 0], sq: [1 + Math.sin(t * 22) * 0.006 * strain, 1] });
    if (t > wi) for (let i = 0; i < 3; i++) { const u = ((t - wi) * 0.7 + i / 3) % 1; drop(ctx, [370, 710, 330][i], 830 + u * 280, 1.1 * Math.min(1, (t - wi) * 3)); }
    if (t >= se) { const n = Math.min(99, Math.floor((t - se) * 5)); const str = `0:${String(n).padStart(2, '0')}`; ptext(ctx, t, se, 540, 400, str, 200, HO(C.butter, C.pinkD)); }
    kWord(ctx, 'NO BLINKING!', 540, 1370, 112, t, wi, 0.02, HO(C.white, C.pinkD));
    if (t >= te) { popIn(ctx, t, te, 540, 1530, () => { cel(ctx, rrP(-400, -80, 800, 160, 70), C.white, C.creamS, -4, -4); ctx.fillStyle = C.plum; ctx.font = `700 76px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('YOUR RECORD?', 0, 4); }); }
    if (t > re) heart(ctx, 870, 1480, 40 * pop(t, re).s);
  });

  function drawScene(ctx, sc, tq) { ctx.save(); bg(ctx, W, HH, tq, sc.theme, sc.seed); sc.draw(ctx, tq); ctx.restore(); }
  function explainer(ctx, W_, H_, t) {
    const tq = q15(t);
    let cur = 0; for (let i = 0; i < SC.length; i++) if (t >= SC[i].s) cur = i;
    const s = SC[cur], u = cur > 0 ? (t - s.s) / 0.5 : 1;
    if (u < 1) { drawScene(ctx, SC[cur - 1], tq); wipe(ctx, W, HH, H.clamp(u), s.tr, s.wx, s.wy, () => drawScene(ctx, s, tq)); }
    else drawScene(ctx, s, tq);
  }

  // ======================================== SOUND ========================================
  function scoreSound(k) {
    const vis = (t0) => (Math.floor(t0 * 15 + 1e-6) + 1) / 15;
    const bloop = (t, f = 420, g = 1, o = {}) => { k.tone(t, { f: [[0, f * 0.7], [0.07, f * 1.35]], dur: 0.11, gain: 0.2 * g, pan: o.pan, minor: o.minor }); };
    const bell = (t, f, g = 1, o = {}) => { const hz = k.hz(f); k.tone(t, { f: hz, dur: o.dur || 0.9, gain: 0.09 * g, a: 0.004, verb: 0.35, pan: o.pan, minor: o.minor }); };
    const twinkle = (t, n = 4, g = 1, minor = true) => { const ns = ['G4', 'C5', 'E5', 'G5', 'A5', 'C6']; for (let i = 0; i < n; i++) bell(t + i * 0.06, ns[(i * 2 + n) % ns.length], 0.55 * g, { dur: 0.7, pan: (i - n / 2) * 0.2, minor }); };
    const iris = (t, d = 0.5, base = 'C5') => { k.tone(t, { f: [[0, k.hz(base) / 2], [d, k.hz(base) * 1.5]], dur: d + 0.05, gain: 0.06, a: d * 0.6, verb: 0.3 }); };
    const big = (t) => { bloop(t, 320, 1.2); k.play('thud', t, { f: 140, gain: 0.35 }); twinkle(t + 0.12, 4, 0.8, false); };
    const blip = (t, g = 1) => { k.noise(t, { dur: 0.06, filter: 'bandpass', f: 2200, q: 1.2, gain: 0.14 * g, minor: true }); k.tone(t, { f: [[0, 620], [0.06, 300]], dur: 0.07, gain: 0.08 * g, minor: true }); };
    SC.forEach((sc, i) => { if (i > 0) iris(sc.s, 0.5, ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'C6', 'D6', 'E6', 'G6'][i % 10]); });
    // 1
    const f = T(0, 'fifteen');
    blip(T(0, 'blind'), 1.2); [0.5, 1, 1.5].forEach((d) => blip(f + d, 0.8));
    for (let i = 0; i < 12; i++) k.play('count', f + i * 0.07, { gain: 0.5, minor: true });
    big(vis(f + 0.9));
    bloop(vis(T(0, 'every')), 520, 0.7, { minor: true });
    k.play('error', vis(T(1, 'why')), { f: 'A3', gain: 0.35 });
    // 2
    big(vis(T(2, 'blinking'))); blip(T(2, 'blinking') + 0.8);
    bloop(vis(T(3, 'each')), 460, 0.7, { minor: true });
    for (let i = 0; i < 8; i++) k.play('tock', T(3, 'each') + i * 0.14, { f: 1400, gain: 0.2, minor: true });
    bell(vis(T(3, 'tenth')), 'G5', 1.1);
    // 3
    bloop(vis(T(4, 'clear')), 480, 0.8, { minor: true });
    k.play('error', vis(T(4, 'no')) + 0.15, { f: 'E3', gain: 0.35 });
    for (let i = 0; i < 5; i++) bloop(T(5, 'film') + i * 0.2, 720 - i * 40, 0.4, { minor: true });
    bell(vis(T(5, 'film')), 'E5', 0.9);
    // 4
    bloop(vis(T(6, 'three')), 420, 0.9);
    [['mucus', 340], ['water', 480], ['oil', 640]].forEach(([w, fq]) => { bloop(vis(T(7, w)), fq, 1); });
    // 5
    const b5 = [T(8, 'every') + 0.3, T(8, 'coat') + 0.1, T(9, 'windshield'), T(9, 'windshield') + 0.75, T(10, 'sweeps') + 0.1, T(10, 'dust') + 0.6, T(10, 'drain') + 0.5];
    b5.forEach((x) => k.play('swish', x, { dur: 0.2, gain: 0.5, minor: true }));
    bell(vis(T(8, 'fresh')), 'C6', 0.8);
    bloop(vis(T(10, 'dust')), 380, 0.7, { minor: true });
    k.play('success', vis(T(10, 'drain')), { f: 'C6', gain: 0.35 });
    // 6
    k.tone(T(11, 'world'), { f: [[0, 520], [0.8, 160]], type: 'triangle', dur: 0.85, gain: 0.08, a: 0.05, hold: 0.5 });
    k.play('thud', vis(T(11, 'black')), { f: 110, gain: 0.35 });
    // 7
    k.play('riser', T(12, 'scanned') - 0.1, { dur: 0.9, gain: 0.4 });
    for (let i = 0; i < 9; i++) k.play('blip', T(13, 'visual') + i * 0.11, { f: 'E6', gain: 0.5, minor: true });
    k.tone(T(13, 'quiet') - 0.05, { f: [[0, 700], [0.5, 180]], type: 'triangle', dur: 0.55, gain: 0.09, a: 0.03, hold: 0.3 });
    blip(T(14, 'eyelid'), 1);
    // 8
    k.play('stamp', vis(T(15, 'deletes')), { gain: 0.5 });
    k.play('whoosh', T(15, 'blackout') + 0.1, { dur: 0.4, gain: 0.5 });
    bloop(vis(T(16, 'before')), 520, 0.7); twinkle(T(16, 'see'), 5, 0.8);
    // 9
    bloop(vis(T(17, 'altogether')), 460, 0.8, { minor: true });
    for (let i = 0; i < 10; i++) k.play('tock', T(17, 'half') + i * 0.07, { f: 1500, gain: 0.2, minor: true });
    { const t = vis(T(17, 'hour')); k.play('impact', t, { f: 110, gain: 0.4 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bell(t + i * 0.012, n, 1.6, { dur: 1.5, pan: (i - 1.5) * 0.3 })); twinkle(t + 0.25, 5, 1, false); }
    // 10
    bloop(vis(T(18, 'seconds')), 500, 0.8, { minor: true });
    for (let i = 0; i < 12; i++) k.play('tock', T(18, 'seconds') + i * 0.2, { f: 1300, gain: 0.2, minor: true });
    bloop(vis(T(19, 'tell')), 460, 0.9);
    { const t = PE(19) + 0.1; ['G4', 'C5', 'E5', 'G5'].forEach((n, i) => bell(t + i * 0.05, n, 1.2, { dur: 1.2 })); }
  }

  window.BEATS = PH; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
