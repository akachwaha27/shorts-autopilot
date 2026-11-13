// ================= Kawaii Anime, vertical 1080x1920: "Why does ice cream give you brain freeze?" =================
// Short, 8 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// Cold on the palate -> anterior cerebral artery dilates, blood flow rush raises pressure; trigeminal nerve refers the pain to the forehead;
// artery constricts as it warms and the pain fades, usually within ~30 s (Serrador et al. 2012, Harvard / FASEB; Healthline; Science Notes). Tongue on the palate warms it.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  const PH = [{"s": 0.25, "e": 2.47, "text": "Ice cream gives you a 30-second headache,", "words": [["ice", 0.25], ["cream", 0.45], ["gives", 0.79], ["you", 1.12], ["a", 1.33], ["30second", 1.39], ["headache", 1.93]]}, {"s": 3.02, "e": 4.86, "text": "but your brain never freezes.", "words": [["but", 3.02], ["your", 3.25], ["brain", 3.56], ["never", 3.94], ["freezes", 4.32]]}, {"s": 5.32, "e": 6.52, "text": "So what's going on?", "words": [["so", 5.32], ["whats", 5.49], ["going", 5.92], ["on", 6.34]]}, {"s": 7.04, "e": 8.86, "text": "It starts on the roof of your mouth.", "words": [["it", 7.04], ["starts", 7.17], ["on", 7.56], ["the", 7.69], ["roof", 7.89], ["of", 8.15], ["your", 8.28], ["mouth", 8.54]]}, {"s": 9.29, "e": 11.49, "text": "It's packed with nerves and blood vessels,", "words": [["its", 9.29], ["packed", 9.49], ["with", 9.88], ["nerves", 10.13], ["and", 10.52], ["blood", 10.72], ["vessels", 11.04]]}, {"s": 11.89, "e": 14.19, "text": "and ice cream chills it super fast.", "words": [["and", 11.89], ["ice", 12.14], ["cream", 12.39], ["chills", 12.8], ["it", 13.29], ["super", 13.45], ["fast", 13.86]]}, {"s": 14.56, "e": 17.63, "text": "Scientists think a big artery behind your eyes", "words": [["scientists", 14.56], ["think", 15.35], ["a", 15.74], ["big", 15.82], ["artery", 16.06], ["behind", 16.53], ["your", 17.0], ["eyes", 17.32]]}, {"s": 17.72, "e": 18.4, "text": "suddenly opens wide,", "words": [["suddenly", 17.72], ["opens", 18.04], ["wide", 18.24]]}, {"s": 19.02, "e": 20.56, "text": "to rush in warm blood.", "words": [["to", 19.02], ["rush", 19.2], ["in", 19.56], ["warm", 19.75], ["blood", 20.11]]}, {"s": 20.98, "e": 22.0, "text": "That flood of blood", "words": [["that", 20.98], ["flood", 21.24], ["of", 21.56], ["blood", 21.68]]}, {"s": 22.06, "e": 24.26, "text": "pushes up the pressure inside your head.", "words": [["pushes", 22.06], ["up", 22.46], ["the", 22.59], ["pressure", 22.79], ["inside", 23.33], ["your", 23.72], ["head", 23.99]]}, {"s": 24.61, "e": 26.72, "text": "Your trigeminal nerve feels it,", "words": [["your", 24.61], ["trigeminal", 24.93], ["nerve", 25.74], ["feels", 26.15], ["it", 26.55]]}, {"s": 26.9, "e": 27.81, "text": "but it gets mixed up,", "words": [["but", 26.9], ["it", 27.07], ["gets", 27.18], ["mixed", 27.41], ["up", 27.69]]}, {"s": 28.25, "e": 30.71, "text": "and sends the pain to your forehead instead.", "words": [["and", 28.25], ["sends", 28.45], ["the", 28.79], ["pain", 29.0], ["to", 29.27], ["your", 29.41], ["forehead", 29.69], ["instead", 30.23]]}, {"s": 31.07, "e": 32.67, "text": "That's called referred pain.", "words": [["thats", 31.07], ["called", 31.42], ["referred", 31.84], ["pain", 32.4]]}, {"s": 32.95, "e": 33.94, "text": "Once things warm up,", "words": [["once", 32.95], ["things", 33.2], ["warm", 33.57], ["up", 33.82]]}, {"s": 34.08, "e": 36.03, "text": "the artery narrows again,", "words": [["the", 34.08], ["artery", 34.36], ["narrows", 34.92], ["again", 35.57]]}, {"s": 36.1, "e": 39.0, "text": "and the ache fades, usually in under 30 seconds.", "words": [["and", 36.1], ["the", 36.33], ["ache", 36.56], ["fades", 36.86], ["usually", 37.25], ["in", 37.78], ["under", 37.93], ["30", 38.32], ["seconds", 38.47]]}, {"s": 39.47, "e": 40.67, "text": "Want it gone faster?", "words": [["want", 39.47], ["it", 39.77], ["gone", 39.92], ["faster", 40.22]]}, {"s": 41.17, "e": 42.05, "text": "Press your warm tongue", "words": [["press", 41.17], ["your", 41.4], ["warm", 41.59], ["tongue", 41.77]]}, {"s": 42.13, "e": 43.64, "text": "to the roof of your mouth.", "words": [["to", 42.13], ["the", 42.28], ["roof", 42.51], ["of", 42.81], ["your", 42.96], ["mouth", 43.26]]}, {"s": 44.02, "e": 47.05, "text": "Honestly, your head's just overreacting to dessert.", "words": [["honestly", 44.02], ["your", 44.6], ["heads", 44.89], ["just", 45.25], ["overreacting", 45.54], ["to", 46.4], ["dessert", 46.55]]}, {"s": 47.47, "e": 49.24, "text": "So which hits you harder:", "words": [["so", 47.47], ["which", 47.65], ["hits", 48.09], ["you", 48.44], ["harder", 48.71]]}, {"s": 49.3, "e": 50.53, "text": "ice cream or a slushie?", "words": [["ice", 49.3], ["cream", 49.5], ["or", 49.85], ["a", 49.98], ["slushie", 50.05]]}];
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
    ctx.save(); ctx.globalAlpha = th.noCloud ? 0 : th.kind === 'clouds' ? 0.95 : 0.7; ctx.fillStyle = C.white;
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

  const W = W0, HH = H0;
  const HO = (fill, line) => ({ fill, line, outer: C.plum, ow: 0.08, lw: 0.2, track: 7 });
  function zzz(ctx, x, y, t, t0) { for (let i = 0; i < 3; i++) { const u = ((t - t0) * 0.6 + i / 3) % 1; if (t < t0) return; ctx.save(); ctx.globalAlpha = Math.sin(u * Math.PI); kText(ctx, 'Z', x + u * 120 + i * 10, y - u * 220, 60 + i * 18, HO(C.white, C.lavD)); ctx.restore(); } }
  function pill(ctx, w, label, fill, size) { cel(ctx, rrP(-w / 2, -62, w, 124, 62), fill, H.rgba(H.mix(fill, C.plum, 0.18)), -5, -5, 5); ctx.fillStyle = C.plum; ctx.font = `700 ${size}px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, 0, 4); }

  const SC = [];
  const scene = (first, tr, theme, seed, draw, wx = 540, wy = 1000) => SC.push({ s: first === 0 ? 0 : PS(first) - 0.5, first, tr, theme, seed, draw, wx, wy });
  const NOTM = (x, y) => y > 420 && y < 1620;
  TH.uv = { base: '#2b2145', dot: '#3a2d5c', acc: '#5d4a96', kind: 'stars', noCloud: true };
  // ---------- this story's props ----------
  const IC = { cone: '#f6c27a', coneS: '#d9934c', scoop: '#ffb8d0', scoopS: '#f28bb0', skin: '#ffe2cf', skinS: '#f2b996', hair: '#7a5488', hairS: '#57386a',
    blood: '#ff6283', bloodS: '#d93a5d', nerve: '#ffd84d', nerveS: '#e8b52e', roof: '#ffa9c0', roofS: '#f4869f', cave: '#b8456f', caveS: '#93315a', tongue: '#ff8aa6', tongueS: '#ee6688',
    slush: '#8fd4ff', slushS: '#5aa9ea' };
  const coneP = roundPoly([[-98, -6], [98, -6], [0, 250]], 16);
  function iceCream(ctx, x, y, s, t, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); if (P.rot) ctx.rotate(P.rot); if (P.sq) ctx.scale(P.sq[0], P.sq[1]);
    cel(ctx, coneP, IC.cone, IC.coneS, -6, -6, 5);
    ctx.save(); ctx.clip(coneP); ctx.strokeStyle = IC.coneS; ctx.lineWidth = 5; ctx.beginPath();
    for (let i = -6; i <= 6; i++) { ctx.moveTo(i * 38 - 130, -10); ctx.lineTo(i * 38 + 130, 260); ctx.moveTo(i * 38 + 130, -10); ctx.lineTo(i * 38 - 130, 260); }
    ctx.stroke(); ctx.restore(); ol(ctx, coneP, 5);
    union(ctx, [ellP(0, -70, 128, 108), ellP(-80, 4, 34, 30), ellP(-28, 14, 26, 36), ellP(34, 10, 30, 30), ellP(88, 2, 28, 26), ellP(-22, 44, 14, 18)], P.col || IC.scoop, 5);
    shine(ctx, -60, -120, 30, 16, -0.6, 0.9); shine(ctx, -92, -88, 9, 6, -0.6, 0.9);
    cel(ctx, ellP(18, -178, 24, 24), C.red, '#d93a5d', -3, -3, 4); shine(ctx, 10, -186, 6, 4);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(22, -200); ctx.quadraticCurveTo(30, -228, 52, -236); ctx.stroke(); ctx.restore();
    if (P.face !== false) face(ctx, 0, -70, 0.85, { eyes: P.eyes || 'happy', mouth: P.mouth || 'w', look: P.look });
    ctx.restore();
  }
  function slushie(ctx, x, y, s, t, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); if (P.sq) ctx.scale(P.sq[0], P.sq[1]);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(30, -100); ctx.lineTo(80, -260); ctx.lineTo(130, -280); ctx.stroke(); ctx.strokeStyle = C.pinkD; ctx.lineWidth = 22; ctx.stroke(); ctx.restore();
    union(ctx, [ellP(0, -96, 110, 60), ellP(-60, -120, 46, 40), ellP(50, -128, 50, 42), ellP(0, -150, 52, 40)], IC.slush, 5);
    shine(ctx, -50, -140, 18, 10, -0.6, 0.9);
    const cup = roundPoly([[-112, -70], [112, -70], [82, 230], [-82, 230]], 18);
    cel(ctx, cup, C.white, C.creamS, -6, -6, 5);
    ctx.save(); ctx.clip(cup); ctx.fillStyle = C.sky; for (let i = -3; i <= 3; i++) ctx.fillRect(i * 64 - 16, -80, 32, 330); ctx.restore(); ol(ctx, cup, 5);
    if (P.face !== false) face(ctx, 0, 60, 0.8, { eyes: P.eyes || 'happy', mouth: P.mouth || 'smile' });
    ctx.restore();
  }
  function bolt(ctx, x, y, s, rot = 0, fill = C.butterD) {
    if (s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    const p = roundPoly([[-8, -62], [32, -62], [12, -14], [36, -14], [-18, 64], [-4, 8], [-30, 8]], 5);
    cel(ctx, p, fill, H.rgba(H.mix(fill, C.plum, 0.25)), -3, -3, 4.5); ctx.restore();
  }
  function flake(ctx, x, y, R, rot = 0) {
    if (R <= 0) return; ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.lineCap = 'round';
    for (const [w, c] of [[R * 0.32, C.plum], [R * 0.17, C.white]]) {
      ctx.strokeStyle = c; ctx.lineWidth = w; ctx.beginPath();
      for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3, ca = Math.cos(a), sa = Math.sin(a); ctx.moveTo(0, 0); ctx.lineTo(ca * R, sa * R); const bx = ca * R * 0.55, by = sa * R * 0.55; for (const d of [-1, 1]) { const b = a + d * 0.8; ctx.moveTo(bx, by); ctx.lineTo(bx + Math.cos(b) * R * 0.32, by + Math.sin(b) * R * 0.32); } }
      ctx.stroke();
    }
    ctx.restore();
  }
  function brain(ctx, x, y, s, t, P = {}) {
    if (s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    union(ctx, [ellP(-62, -10, 95, 80), ellP(62, -10, 95, 80), ellP(-32, -58, 82, 62), ellP(32, -58, 82, 62), ellP(0, 32, 124, 60)], '#ffc6d9', 5);
    ctx.save(); ctx.strokeStyle = '#f08cb0'; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, -116); ctx.quadraticCurveTo(-8, -86, 0, -64);
    [[-128, -24, -96, -64, -76, -30], [128, -24, 96, -64, 76, -30], [-118, 44, -100, 16, -80, 52], [118, 44, 100, 16, 80, 52], [-60, -100, -40, -80, -60, -66], [60, -100, 40, -80, 60, -66]].forEach(([a, b, c, d, e, f]) => { ctx.moveTo(a, b); ctx.quadraticCurveTo(c, d, e, f); });
    ctx.stroke(); ctx.restore();
    shine(ctx, -84, -76, 26, 14, -0.6, 0.85);
    face(ctx, 0, 12, 0.72, { eyes: P.eyes || 'happy', mouth: P.mouth || 'w' });
    ctx.restore();
  }
  function thermo(ctx, x, y, s, lvl, col) {
    if (s <= 0) return; ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    union(ctx, [rrP(-26, -170, 52, 250, 26), ellP(0, 92, 48, 48)], C.white, 5);
    ctx.save(); ctx.clip(rrP(-14, -158, 28, 250, 14)); const top = H.lerp(80, -150, H.clamp(lvl)); ctx.fillStyle = col; ctx.fillRect(-14, top, 28, 200); ctx.restore();
    cel(ctx, ellP(0, 92, 36, 36), col, H.rgba(H.mix(col, C.plum, 0.25)), -3, -3, 0); shine(ctx, -10, 80, 9, 6);
    ctx.strokeStyle = C.plum; ctx.lineWidth = 4; for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.moveTo(26, -130 + i * 45); ctx.lineTo(40, -130 + i * 45); ctx.stroke(); }
    ctx.restore();
  }
  // a chibi kid, front view. (x,y) = middle of the face. xray(ctx) draws inside the head under the face.
  const HEAD = ellP(0, 0, 265, 252);
  function kid(ctx, x, y, s, t, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); if (P.sq) ctx.scale(P.sq[0], P.sq[1]);
    cel(ctx, rrP(-210, 250, 420, 170, 90), P.shirt || C.mint, H.rgba(H.mix(P.shirt || C.mint, C.plum, 0.18)), -6, -6, 5);
    cel(ctx, rrP(-52, 200, 104, 96, 30), IC.skin, IC.skinS, -4, -4, 5);
    for (const sd of [-1, 1]) { cel(ctx, ellP(sd * 262, 34, 46, 58), IC.skin, IC.skinS, -4, -4, 5); }
    cel(ctx, HEAD, IC.skin, IC.skinS, -10, -10, 0);
    if (P.xray) { ctx.save(); ctx.clip(HEAD); P.xray(ctx); ctx.restore(); }
    if (P.frost > 0) { ctx.save(); ctx.clip(HEAD); ctx.fillStyle = `rgba(150,210,255,${0.45 * P.frost})`; ctx.fill(HEAD); ctx.restore(); }
    if (P.throb > 0) { ctx.save(); ctx.clip(HEAD); const g = ctx.createRadialGradient(0, -100, 10, 0, -100, 200); g.addColorStop(0, `rgba(255,80,120,${0.6 * P.throb})`); g.addColorStop(1, 'rgba(255,80,120,0)'); ctx.fillStyle = g; ctx.fill(HEAD); ctx.restore(); }
    ol(ctx, HEAD, 6);
    const hp = new Path2D(); hp.moveTo(-274, 20); hp.bezierCurveTo(-296, -320, 296, -320, 274, 20); hp.bezierCurveTo(240, -90, 170, -150, 70, -138); hp.quadraticCurveTo(30, -96, -4, -146); hp.bezierCurveTo(-110, -160, -236, -110, -274, 20); hp.closePath();
    cel(ctx, hp, IC.hair, IC.hairS, -8, -8, 6); shine(ctx, -110, -196, 56, 16, -0.4, 0.45);
    face(ctx, 0, 40, 1.8, { eyes: P.eyes || 'normal', mouth: P.mouth || 'smile', look: P.look || [0, 0], iris: '#8a6cf0' });
    if (P.pain > 0) { const k = P.pain, w = Math.sin(t * 30) * 0.08; bolt(ctx, -150, -150, 0.9 * k, -0.4 + w); bolt(ctx, 150, -160, 0.9 * k, 0.4 - w); bolt(ctx, 0, -200, 1.0 * k, w); }
    ctx.restore();
  }
  // vessel: a tube with blood cells flowing along it
  function vessel(ctx, pts, w, t, speed = 160, n = 8, cellR = 1) {
    tube(ctx, pts, w, IC.blood, IC.bloodS);
    const L = plen(pts); if (cellR <= 0) return;
    for (let i = 0; i < n; i++) { const d = ((t * speed + i * L / n) % L + L) % L, [x, y] = along(pts, d); const r = Math.min(w * 0.3, 22) * cellR; cel(ctx, ellP(x, y, r, r * 0.8), '#ffd0da', '#ff9fb3', -2, -2, 3); ctx.fillStyle = 'rgba(217,58,93,0.5)'; ctx.fill(ellP(x, y, r * 0.4, r * 0.32)); }
  }
  function nerveLine(ctx, pts, u, t, sig = -1) {
    const pp = partial(pts, u); if (pp.length < 2) return;
    tube(ctx, pp, 22, IC.nerve, IC.nerveS);
    if (sig >= 0 && sig <= 1) { const [x, y] = along(pts, plen(pts) * sig); ctx.save(); ctx.shadowColor = C.white; ctx.shadowBlur = 30; sparkle(ctx, x, y, 34, C.white, t * 4, 4); ctx.restore(); }
  }
  // open mouth seen from the front: the roof (palate) on top, the tongue at the bottom
  const CAVE = ellP(0, 0, 400, 320);
  function mouthCave(ctx, x, y, s, t, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.save(); ctx.lineWidth = 64; ctx.strokeStyle = C.plum; ctx.stroke(CAVE); ctx.lineWidth = 52; ctx.strokeStyle = '#ff8fab'; ctx.stroke(CAVE); ctx.lineWidth = 12; ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.stroke(ellP(-6, -10, 410, 330)); ctx.restore();
    ctx.fillStyle = IC.cave; ctx.fill(CAVE);
    ctx.save(); ctx.clip(CAVE);
    const roof = ellP(0, -250, 380, 210);
    cel(ctx, roof, P.cold ? H.rgba(H.mix(IC.roof, '#cfeaff', P.cold)) : IC.roof, IC.roofS, -6, -8, 5);
    ctx.save(); ctx.clip(roof); ctx.strokeStyle = IC.roofS; ctx.lineWidth = 7; ctx.lineCap = 'round';
    for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.moveTo(-90 + i * 8, -150 + i * 22); ctx.quadraticCurveTo(0, -120 + i * 22, 90 - i * 8, -150 + i * 22); ctx.stroke(); }
    ctx.restore();
    if (P.inside) P.inside(ctx);
    // upper teeth
    for (let i = -3; i <= 3; i++) { const tx = i * 92, ty = -320 * Math.sqrt(1 - (tx / 420) ** 2) - 6; cel(ctx, rrP(tx - 40, ty, 80, 70, 22), C.white, C.creamS, -3, -3, 4); }
    // tongue
    const ty = H.lerp(190, P.tongueTo || -40, P.tongue || 0);
    const tp = ellP(0, ty, 270, 160);
    cel(ctx, tp, IC.tongue, IC.tongueS, -8, -8, 5);
    ctx.strokeStyle = IC.tongueS; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, ty - 110); ctx.lineTo(0, ty - 20); ctx.stroke();
    shine(ctx, -120, ty - 80, 40, 16, -0.3, 0.6);
    for (let i = -2; i <= 2; i++) { const tx = i * 100, tyy = 320 * Math.sqrt(1 - (tx / 420) ** 2) - 64; cel(ctx, rrP(tx - 40, tyy, 80, 64, 22), C.white, C.creamS, -3, -3, 4); }
    ctx.restore();
    ol(ctx, CAVE, 6);
    ctx.restore();
  }
  function gauge(ctx, x, y, s, v) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const base = new Path2D(); base.arc(0, 0, 230, Math.PI, 0); base.lineTo(230, 40); base.lineTo(-230, 40); base.closePath();
    cel(ctx, base, C.white, C.creamS, -6, -6, 6);
    [[C.mintD, 0, 0.4], [C.butterD, 0.4, 0.7], [C.pinkD, 0.7, 1]].forEach(([c, a, b]) => { ctx.strokeStyle = c; ctx.lineWidth = 34; ctx.beginPath(); ctx.arc(0, 0, 175, Math.PI + a * Math.PI, Math.PI + b * Math.PI); ctx.stroke(); });
    const a = Math.PI + H.clamp(v) * Math.PI;
    ctx.save(); ctx.rotate(a); cel(ctx, roundPoly([[160, 0], [0, -18], [-20, 0], [0, 18]], 8), C.plum, C.dark, -2, -2, 0); ctx.restore();
    cel(ctx, ellP(0, 0, 30, 30), C.pinkD, '#e2487a', -3, -3, 5);
    ctx.restore();
  }
  const ART = [[0, 330], [0, 200], [0, 60], [-6, -60], [-30, -170], [-90, -250]];
  const ART2 = [[0, 60], [10, -60], [40, -170], [100, -250]];
  const NRV = [[-70, 175], [-190, 150], [-240, 40], [-232, -60], [-160, -128], [-30, -125]];

  // 1 HOOK: ice cream = a 30-second headache, but the brain never freezes
  scene(0, null, TH.pink, 3, (ctx, t) => {
    twinkles(ctx, W, HH, t, 21, 12, NOTM);
    const ic = T(0, 'ice'), hd = T(0, 'headache'), n30 = T(0, '30second'), br = T(1, 'brain'), nv = T(1, 'never'), fr = T(1, 'freezes'), so = T(2, 'so'), go = T(2, 'going');
    const pain = H.clamp((t - hd) / 0.15);
    const kx = t < br ? 540 : H.lerp(540, 380, H.ease.inOut(H.clamp((t - br) / 0.5)));
    kid(ctx, kx, 1010, 1.15 * pop(t, 0.02).s, t, { eyes: t > go ? 'normal' : t > hd ? 'squeeze' : 'happy', mouth: t > go ? 'o' : t > hd ? 'wobble' : 'smile', pain: t < br + 0.3 ? pain : t < so ? 1 - H.clamp((t - br - 0.3) / 0.3) : 0, look: t > br ? [1, -0.6] : [0, 0], frost: t < br ? 0.5 * pain : 0, sq: squash(t, hd, 0.1) });
    if (t < br + 0.2) popIn(ctx, t, ic, 830, 1300, () => iceCream(ctx, 0, 0, 0.95, t, { rot: -0.35 + Math.sin(t * 3) * 0.05, eyes: t > hd ? 'happy' : 'normal' }), 1, br);
    kWord(ctx, 'ICE CREAM', 540, 300, 140, t, ic, 0.03, { ...HO(C.white, C.pinkD), t1: br - 0.12 });
    if (t >= n30 - 0.05 && t < br) { ptext(ctx, t, n30, 540, 440, '30-SEC HEADACHE', 96, HO(C.butter, C.pinkD), br - 0.12); impactLines(ctx, 540, 830, 340, t, hd, 12); }
    if (t >= br - 0.05) {
      kWord(ctx, 'YOUR BRAIN', 540, 300, 130, t, br, 0.025, HO(C.white, C.lavD));
      const bs = pop(t, br).s; brain(ctx, 800, 760, 0.95 * bs, t, { eyes: t > fr ? 'happy' : 'normal', mouth: 'w' });
      if (t >= nv) { thermo(ctx, 830, 1150, 0.75 * pop(t, nv).s, 0.75, C.pinkD); ptag(ctx, t, nv, 830, 1350, '37°C', C.white, 56); }
      if (t >= fr - 0.05) { kWord(ctx, 'NOT FROZEN!', 540, 440, 104, t, fr, 0.02, HO(C.butter, C.skyD)); popIn(ctx, t, fr, 640, 600, () => { flake(ctx, 0, 0, 56, t); }, 1.2); cross(ctx, 640, 600, 0.95, t, fr + 0.1); }
      if (t >= so) { kana(ctx, '?', 880, 520, 170, 0.15, pop(t, so).s, C.butter); kana(ctx, '?', 220, 610, 120, -0.2, pop(t, go).s, C.white); }
      if (t >= go) ptag(ctx, t, go, 540, 1560, "so what's going on?", C.white, 52);
    }
  });

  // 2 THE ROOF OF YOUR MOUTH: nerves + blood vessels, ice cream chills it fast
  scene(3, 'star', TH.sky, 7, (ctx, t) => {
    twinkles(ctx, W, HH, t, 41, 9, NOTM);
    const ro = T(3, 'roof'), mo = T(3, 'mouth'), ne = T(4, 'nerves'), bv = T(4, 'blood'), ic = T(5, 'ice'), ch = T(5, 'chills'), sf = T(5, 'super'), fa = T(5, 'fast');
    const cold = H.ease.out(H.clamp((t - ch) / 0.6));
    mouthCave(ctx, 540, 1000, 1.18 * pop(t, PS(3) - 0.3).s, t, { cold, tongue: 0, inside: (c) => {
      // nerves (yellow) and vessels (red) on the roof
      const nu = H.ease.out(H.clamp((t - ne) / 0.7)), vu = H.ease.out(H.clamp((t - bv) / 0.7));
      if (vu > 0) { [[[-300, -170], [-180, -120], [-60, -150], [60, -120], [180, -150], [300, -110]], [[-260, -230], [-120, -200], [20, -230], [160, -200], [280, -230]]].forEach((pts, i) => { const pp = partial(pts, vu); if (pp.length > 1) vessel(c, pp, 24, t, i ? -90 : 90, 6, 0.9); }); }
      if (nu > 0) { [[[-320, -110], [-200, -80], [-100, -100], [0, -80], [100, -100], [210, -80], [320, -100]]].forEach((pts) => nerveLine(c, pts, nu, t)); }
      if (cold > 0) { const r = H.rng(5); for (let i = 0; i < 10; i++) flake(c, r.range(-300, 300), r.range(-260, -90), 26 * cold * pop(t, ch + i * 0.05).s, t * 0.8 + i); }
    } });
    // the ice cream scoops in from below
    if (t >= ic - 0.2) { const u = H.ease.out(H.clamp((t - ic + 0.2) / 0.5)); iceCream(ctx, 540 + 260, H.lerp(1900, 1420, u), 0.8, t, { rot: -0.25, eyes: t > ch ? 'happy' : 'normal', mouth: 'w' }); }
    kWord(ctx, 'ROOF OF', 540, 300, 140, t, ro, 0.03, { ...HO(C.white, C.skyD), t1: ne - 0.12 });
    if (t < ne) kWord(ctx, 'YOUR MOUTH', 540, 440, 112, t, mo, 0.025, { ...HO(C.butter, C.pinkD), t1: ne - 0.12 });
    if (t >= ne - 0.05 && t < ch) { ptag(ctx, t, ne, 330, 360, 'NERVES', C.butter, 66, ch - 0.12); ptag(ctx, t, bv, 690, 460, 'BLOOD VESSELS', C.pink, 66, ch - 0.12); }
    if (t >= ch - 0.05) { kWord(ctx, 'BRRR!', 540, 320, 170, t, ch, 0.04, { ...HO(C.white, C.skyD), wob: 0.04 }); ptag(ctx, t, sf, 540, 470, 'super fast', C.white, 56); thermo(ctx, 170, 1450, 0.7 * pop(t, ch).s, H.lerp(0.75, 0.2, cold), C.skyD); }
    if (t > fa) impactLines(ctx, 540, 850, 300, t, fa, 10, C.skyD);
  });

  // 3 A BIG ARTERY BEHIND YOUR EYES opens wide, warm blood rushes in
  scene(6, 'heart', TH.lav, 11, (ctx, t) => {
    twinkles(ctx, W, HH, t, 51, 10, NOTM);
    const sc = T(6, 'scientists'), ar = T(6, 'artery'), be = T(6, 'behind'), ey = T(6, 'eyes'), op = T(7, 'opens'), wi = T(7, 'wide'), ru = T(8, 'rush'), wa = T(8, 'warm'), bl = T(8, 'blood');
    const au = H.ease.out(H.clamp((t - ar) / 0.6)), wide = H.ease.back(H.clamp((t - op) / 0.45));
    const w = H.lerp(26, 70, wide), sp = t < ru ? 70 : 380;
    kid(ctx, 540, 1040, 1.25 * pop(t, PS(6) - 0.3).s, t, { shirt: C.lav, eyes: t > op ? 'shock' : 'normal', mouth: t > op ? 'O' : 'smile', look: [0, -0.4], xray: (c) => {
      c.fillStyle = 'rgba(90,54,89,0.22)'; c.fill(HEAD);
      if (au > 0) { const p1 = partial(ART, au), p2 = partial(ART2, H.clamp(au * 2 - 1)); if (p2.length > 1) vessel(c, p2, w * 0.75, t, sp, 5); if (p1.length > 1) vessel(c, p1, w, t, sp, 9, t > ru ? 1.2 : 0.8); }
    } });
    if (t >= wa) for (let i = 0; i < 4; i++) { const y = 1040 + 380 - ((t - wa) * 260 + i * 110) % 440; ctx.save(); ctx.globalAlpha = 0.85; heart(ctx, 540 + (i % 2 ? 60 : -60) * 1.25, y, 22 * pop(t, wa + i * 0.1).s, C.red); ctx.restore(); }
    ptag(ctx, t, sc, 540, 440, 'scientists think...', C.white, 54, ar - 0.12);
    if (t >= ar - 0.05 && t < op) { kWord(ctx, 'BIG ARTERY', 540, 300, 140, t, ar, 0.025, { ...HO(C.white, IC.bloodS), t1: op - 0.12 }); ptag(ctx, t, be, 540, 440, 'behind your eyes', C.butter, 56, op - 0.12); }
    if (t >= ey && t < op) dotted(ctx, bez([860, 1560], [900, 1300], [800, 1100], [640, 1030]), H.clamp((t - ey) * 3), C.pinkD);
    if (t >= op - 0.05) { kWord(ctx, 'OPENS WIDE!', 540, 300, 130, t, op, 0.025, HO(C.butter, IC.bloodS)); impactLines(ctx, 540, 1000, 140, t, wi, 10, C.red); }
    if (t >= wa - 0.05) ptag(ctx, t, wa, 540, 440, 'warm blood rushes in', C.pink, 56);
  });

  // 4 THE FLOOD OF BLOOD pushes up the pressure inside your head
  scene(9, 'star', TH.butter, 13, (ctx, t) => {
    twinkles(ctx, W, HH, t, 61, 9, NOTM);
    const fl = T(9, 'flood'), pu = T(10, 'pushes'), pr = T(10, 'pressure'), hd = T(10, 'head');
    const inf = H.ease.out(H.clamp((t - pu) / (hd - pu + 0.3)));
    const sqz = 1 + inf * 0.12 + Math.sin(t * 9) * 0.015 * inf;
    kid(ctx, 540, 1120, 1.05 * pop(t, PS(9) - 0.3).s, t, { shirt: C.butter, eyes: t > pr ? 'swirl' : 'shock', mouth: t > pr ? 'wobble' : 'o', sq: [sqz, sqz], xray: (c) => {
      const lvl = H.lerp(260, -40 - 200 * inf, H.ease.out(H.clamp((t - fl + 0.1) / 0.9)));
      c.fillStyle = 'rgba(255,98,131,0.45)'; c.fillRect(-300, lvl, 600, 600);
      c.strokeStyle = 'rgba(255,255,255,0.6)'; c.lineWidth = 8; c.beginPath(); for (let x = -300; x <= 300; x += 10) { const y = lvl + Math.sin(x * 0.03 + t * 6) * 10; x === -300 ? c.moveTo(x, y) : c.lineTo(x, y); } c.stroke();
    } });
    if (t >= pu) for (let i = 0; i < 6; i++) { const a = -Math.PI / 2 + (i - 2.5) * 0.45, R = 360 + 30 * Math.sin(t * 8 + i); ctx.save(); ctx.strokeStyle = C.pinkD; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.globalAlpha = 0.8 * inf; ctx.beginPath(); ctx.moveTo(540 + Math.cos(a) * R, 1120 + Math.sin(a) * R); ctx.lineTo(540 + Math.cos(a) * (R + 50), 1120 + Math.sin(a) * (R + 50)); ctx.stroke(); ctx.restore(); }
    kWord(ctx, 'BLOOD FLOOD', 540, 300, 130, t, fl, 0.025, { ...HO(C.white, IC.bloodS), t1: pr - 0.12 });
    if (t >= pr - 0.05) kWord(ctx, 'PRESSURE UP!', 540, 300, 124, t, pr, 0.025, HO(C.butter, C.pinkD));
    if (t >= pu - 0.1) popIn(ctx, t, pu - 0.1, 540, 560, () => gauge(ctx, 0, 0, 0.7, H.lerp(0.1, 0.92, inf)), 1.2);
    if (t > hd + 0.1) kana(ctx, 'ドキ', 900, 760, 90, 0.15, pop(t, hd + 0.1).s, C.pink);
  });

  // 5 THE TRIGEMINAL NERVE feels it, gets mixed up, sends the pain to your forehead = referred pain
  scene(11, 'heart', TH.mint, 17, (ctx, t) => {
    twinkles(ctx, W, HH, t, 71, 8, NOTM);
    const tg = T(11, 'trigeminal'), fe = T(11, 'feels'), mx = T(12, 'mixed'), se = T(13, 'sends'), pa = T(13, 'pain'), fo = T(13, 'forehead'), rf = T(14, 'referred'), rp = T(14, 'pain');
    const nu = H.ease.out(H.clamp((t - tg) / 0.7)), sig = t < se ? -1 : H.clamp((t - se) / (fo - se));
    const pain = H.clamp((t - fo) / 0.15);
    kid(ctx, 540, 1060, 1.25 * pop(t, PS(11) - 0.3).s, t, { eyes: t > fo ? 'squeeze' : t > mx ? 'swirl' : 'normal', mouth: t > fo ? 'wobble' : t > mx ? 'o' : 'smile', pain, throb: pain * (0.7 + 0.3 * Math.sin(t * 12)), xray: (c) => {
      c.fillStyle = 'rgba(90,54,89,0.16)'; c.fill(HEAD);
      nerveLine(c, NRV, nu, t, sig);
      if (t > fe && t < se) { const k = 0.5 + 0.5 * Math.sin(t * 14); c.save(); c.globalAlpha = k; c.strokeStyle = C.white; c.lineWidth = 8; c.stroke(ellP(-40, 120, 60, 40)); c.restore(); }
    } });
    kWord(ctx, 'TRIGEMINAL', 540, 300, 130, t, tg, 0.02, { ...HO(C.butter, C.mintD), t1: mx - 0.12 });
    ptag(ctx, t, tg + 0.3, 540, 440, 'a big face nerve', C.white, 56, mx - 0.12);
    if (t >= mx - 0.05 && t < fo) { kWord(ctx, 'MIXED UP!', 540, 300, 140, t, mx, 0.03, { ...HO(C.white, C.lavD), wob: 0.05, t1: fo - 0.12 }); kana(ctx, '?', 880, 640, 140, 0.2, pop(t, mx).s, C.butter); kana(ctx, '?', 200, 700, 110, -0.2, pop(t, mx + 0.15).s, C.white); }
    if (t >= fo - 0.05 && t < rf) kWord(ctx, 'FOREHEAD!', 540, 300, 150, t, fo, 0.03, { ...HO(C.white, C.pinkD), t1: rf - 0.12 });
    if (t >= pa && t < rf) ptag(ctx, t, pa, 540, 440, 'pain shows up here', C.pink, 56, rf - 0.12);
    if (t >= rf - 0.05) { kWord(ctx, 'REFERRED', 540, 300, 150, t, rf, 0.03, HO(C.butter, C.mintD)); kWord(ctx, 'PAIN', 540, 450, 130, t, rp, 0.03, HO(C.white, C.pinkD)); }
    if (t > fo) impactLines(ctx, 540, 820, 200, t, fo, 12, C.red);
  });

  // 6 WARM UP: the artery narrows again, the ache fades in under 30 seconds
  scene(15, 'star', TH.sky, 23, (ctx, t) => {
    twinkles(ctx, W, HH, t, 81, 10, NOTM);
    const wu = T(15, 'warm'), na = T(16, 'narrows'), ac = T(17, 'ache'), fd = T(17, 'fades'), un = T(17, 'under'), n30 = T(17, '30'), sec = T(17, 'seconds');
    const nar = H.ease.inOut(H.clamp((t - na) / 0.6)), fade = H.ease.out(H.clamp((t - fd) / 0.8));
    kid(ctx, 540, 1060, 1.15 * pop(t, PS(15) - 0.3).s, t, { shirt: C.sky, eyes: t > fd ? 'happy' : 'blink', mouth: t > fd ? 'w' : 'wobble', pain: (1 - fade) * 0.8, xray: (c) => {
      c.fillStyle = 'rgba(90,54,89,0.16)'; c.fill(HEAD);
      vessel(c, ART2, H.lerp(52, 22, nar), t, H.lerp(300, 80, nar), 5); vessel(c, ART, H.lerp(70, 28, nar), t, H.lerp(300, 80, nar), 9);
    } });
    if (t >= wu && t < un) { for (let i = 0; i < 3; i++) heart(ctx, 260 + i * 280, 700 + Math.sin(t * 3 + i) * 10, 30 * pop(t, wu + i * 0.1).s, C.butterD); }
    kWord(ctx, 'WARMING UP', 540, 300, 130, t, wu, 0.025, { ...HO(C.butter, C.skyD), t1: ac - 0.12 });
    if (t >= na - 0.05 && t < ac) ptag(ctx, t, na, 540, 440, 'artery narrows', C.pink, 56, ac - 0.12);
    if (t >= ac - 0.05 && t < un) kWord(ctx, 'ACHE FADES', 540, 300, 130, t, ac, 0.025, { ...HO(C.white, C.mintD), t1: un - 0.12 });
    if (t >= un - 0.05) {
      kWord(ctx, 'UNDER', 540, 300, 130, t, un, 0.03, HO(C.white, C.skyD));
      popIn(ctx, t, n30, 540, 460, () => { const q = squash(t, sec, 0.12); ctx.scale(q[0], q[1]); kText(ctx, '30 SEC', 0, 0, 150, HO(C.butter, C.pinkD)); }, 1.2);
      popIn(ctx, t, n30, 860, 1500, () => { const left = H.clamp(1 - (t - n30) / 2.2); clock(ctx, 0, 0, 90, -left * TAU * 2); }, 1);
    }
    if (t > sec + 0.2) confetti(ctx, t, sec + 0.2, 540, 1300, 26, 13);
  });

  // 7 WANT IT GONE FASTER? press your warm tongue to the roof of your mouth. head just overreacting to dessert
  scene(18, 'heart', TH.pink, 29, (ctx, t) => {
    twinkles(ctx, W, HH, t, 91, 9, NOTM);
    const wa = T(18, 'want'), fa = T(18, 'faster'), pr = T(19, 'press'), tg = T(19, 'tongue'), ro = T(20, 'roof'), mo = T(20, 'mouth'), ho = T(21, 'honestly'), ov = T(21, 'overreacting'), de = T(21, 'dessert');
    const up = H.ease.back(H.clamp((t - pr) / (ro - pr + 0.2)));
    const warmth = H.clamp((t - ro) / 0.8);
    const z = H.ease.inOut(H.clamp((t - ho) / 0.6));
    if (z < 1) { ctx.save(); ctx.globalAlpha = 1 - z; ctx.translate(540, 1000); ctx.scale(1 - 0.4 * z, 1 - 0.4 * z); ctx.translate(-540, -1000);
      mouthCave(ctx, 540, 1000, 1.18 * pop(t, PS(18) - 0.3).s, t, { cold: 1 - warmth, tongue: up, tongueTo: -60, inside: (c) => { if (warmth > 0) { c.save(); c.globalAlpha = 0.6 * warmth; c.fillStyle = '#ffd36b'; c.fill(ellP(0, -200, 300 * warmth, 120 * warmth)); c.restore(); } } });
      if (t >= ro) for (let i = 0; i < 5; i++) heart(ctx, 540 + (i - 2) * 140, 760 - Math.abs(i - 2) * 30 - (t - ro) * 40, 30 * pop(t, ro + i * 0.08).s, C.pinkD);
      ctx.restore(); }
    if (t >= ho - 0.2) popIn(ctx, t, ho - 0.1, 540, 1050, () => iceCream(ctx, 0, 0, 1.6, t, { eyes: t > ov ? 'happy' : 'normal', mouth: t > de ? 'w' : 'smile', rot: Math.sin(t * 2.5) * 0.06, sq: squash(t, ov, 0.14) }));
    kWord(ctx, 'GONE FASTER?', 540, 300, 124, t, wa, 0.025, { ...HO(C.white, C.pinkD), t1: pr - 0.12 });
    if (t >= pr - 0.05 && t < ho) { kWord(ctx, 'PRESS YOUR', 540, 300, 130, t, pr, 0.025, { ...HO(C.white, C.pinkD), t1: ho - 0.12 }); kWord(ctx, 'WARM TONGUE', 540, 440, 112, t, tg - 0.2, 0.02, { ...HO(C.butter, C.pinkD), t1: ho - 0.12 }); }
    if (t >= ro && t < ho) ptag(ctx, t, ro, 540, 1530, 'to the roof of your mouth', C.white, 52, ho - 0.12);
    if (t >= ho - 0.05) { kWord(ctx, 'JUST', 540, 300, 130, t, ho, 0.03, HO(C.white, C.lavD)); kWord(ctx, 'OVERREACTING', 540, 440, 104, t, ov, 0.02, { ...HO(C.butter, C.pinkD), wob: 0.03 }); }
    if (t >= de) { ptag(ctx, t, de, 540, 1560, 'to dessert', C.butter, 60); kana(ctx, 'テヘ', 880, 760, 90, 0.15, pop(t, de).s, C.pink); }
  });

  // 8 THE QUESTION: which hits you harder, ice cream or a slushie?
  scene(22, 'star', TH.butter, 31, (ctx, t) => {
    twinkles(ctx, W, HH, t, 101, 9, NOTM);
    const wh = T(22, 'which'), hi = T(22, 'hits'), ic = T(23, 'ice'), sl = T(23, 'slushie');
    const a = squash(t, ic, 0.18), b = squash(t, sl, 0.18);
    popIn(ctx, t, PS(22) - 0.3, 290, 950, () => iceCream(ctx, 0, 0, 1.0, t, { eyes: t > ic ? 'star' : 'happy', mouth: 'w', sq: a, rot: -0.08 }));
    popIn(ctx, t, PS(22) - 0.15, 790, 990, () => slushie(ctx, 0, 0, 1.05, t, { eyes: t > sl ? 'star' : 'happy', mouth: 'w', sq: b }));
    kWord(ctx, 'WHICH HITS', 540, 300, 136, t, wh, 0.025, HO(C.white, C.pinkD));
    kWord(ctx, 'YOU HARDER?', 540, 440, 108, t, hi, 0.02, HO(C.butter, C.pinkD));
    popIn(ctx, t, ic, 290, 1400, () => { ctx.rotate(-0.03); pill(ctx, 440, 'ICE CREAM?', C.pink, 66); }, 1.3);
    popIn(ctx, t, sl, 790, 1400, () => { ctx.rotate(0.03); pill(ctx, 400, 'SLUSHIE?', C.sky, 66); }, 1.3);
    if (t > sl) kana(ctx, 'VS', 540, 1000, 120, 0, pop(t, ic + 0.15).s, C.butter);
    else if (t > ic) kana(ctx, 'VS', 540, 1000, 120, 0, pop(t, ic + 0.15).s, C.butter);
    if (t > sl + 0.3) { flake(ctx, 540, 1580, 40 * pop(t, sl + 0.3).s, t); }
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
    const bell = (t, f, g = 1, o = {}) => { k.tone(t, { f: k.hz(f), dur: o.dur || 0.9, gain: 0.09 * g, a: 0.004, verb: 0.35, pan: o.pan, minor: o.minor }); };
    const twinkle = (t, n = 4, g = 1, minor = true) => { const ns = ['G4', 'C5', 'E5', 'G5', 'A5', 'C6']; for (let i = 0; i < n; i++) bell(t + i * 0.06, ns[(i * 2 + n) % ns.length], 0.55 * g, { dur: 0.7, pan: (i - n / 2) * 0.2, minor }); };
    const iris = (t, d = 0.5, base = 'C5') => { k.tone(t, { f: [[0, k.hz(base) / 2], [d, k.hz(base) * 1.5]], dur: d + 0.05, gain: 0.06, a: d * 0.6, verb: 0.3 }); };
    const big = (t) => { bloop(t, 320, 1.2); k.play('thud', t, { f: 140, gain: 0.35 }); twinkle(t + 0.12, 4, 0.8, false); };
    const brr = (t, g = 1) => { k.noise(t, { dur: 0.5, color: 'white', filter: 'highpass', f: [[0, 3000], [0.5, 6000]], q: 1, gain: 0.05 * g, minor: true }); for (let i = 0; i < 4; i++) bell(t + i * 0.05, ['C6', 'E6', 'G6', 'B6'][i], 0.4, { dur: 0.5, minor: true }); };
    const zap = (t) => { k.play('buzz', t, { gain: 0.18, dur: 0.18 }); k.play('error', t + 0.02, { f: 'A3', gain: 0.25 }); };
    SC.forEach((sc, i) => { if (i > 0) iris(sc.s, 0.5, ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'C6', 'D6'][i % 8]); });
    // 1 hook
    bloop(vis(0.02), 380, 0.8); bloop(vis(T(0, 'ice')), 520, 0.9);
    zap(vis(T(0, 'headache')));
    big(vis(T(1, 'brain')));
    bell(vis(T(1, 'never')), 'E5', 0.8, { minor: true });
    k.play('stamp', vis(T(1, 'freezes') + 0.1), { gain: 0.45 });
    bloop(vis(T(2, 'so')), 600, 0.8, { minor: true }); bloop(vis(T(2, 'going')), 680, 0.8, { minor: true });
    // 2 roof of mouth
    k.play('swish', PS(3) - 0.3, { gain: 0.35 });
    for (let i = 0; i < 6; i++) k.play('blip', T(4, 'nerves') + i * 0.1, { f: 'A5', gain: 0.3, minor: true });
    bloop(vis(T(4, 'nerves')), 560, 0.9); bloop(vis(T(4, 'blood')), 480, 0.9);
    k.play('whoosh', T(5, 'ice') - 0.2, { dur: 0.5, gain: 0.4 });
    big(vis(T(5, 'chills'))); brr(T(5, 'chills'));
    k.play('pop', vis(T(5, 'super')), { f: 700, gain: 0.35, minor: true });
    // 3 artery
    bloop(vis(T(6, 'scientists')), 460, 0.7, { minor: true });
    k.play('riser', T(6, 'artery'), { dur: T(7, 'opens') - T(6, 'artery'), gain: 0.3 });
    big(vis(T(7, 'opens'))); k.play('impact', vis(T(7, 'wide')), { f: 110, gain: 0.35 });
    k.play('whoosh', T(8, 'rush'), { dur: 0.8, gain: 0.45 });
    for (let i = 0; i < 4; i++) k.play('pop', T(8, 'warm') + i * 0.1, { f: 500 + i * 60, gain: 0.3, minor: true });
    // 4 pressure
    k.noise(T(9, 'flood'), { dur: 1.2, color: 'pink', filter: 'lowpass', f: [[0, 300], [1.2, 900]], q: 1, gain: 0.06, minor: true });
    k.play('riser', T(10, 'pushes'), { dur: T(10, 'head') - T(10, 'pushes') + 0.2, gain: 0.35 });
    for (let i = 0; i < 8; i++) k.play('tock', T(10, 'pushes') + i * 0.2, { f: 900 + i * 60, gain: 0.25, minor: true });
    big(vis(T(10, 'pressure')));
    k.play('thud', vis(T(10, 'head') + 0.1), { f: 90, gain: 0.3 });
    // 5 nerve
    for (let i = 0; i < 6; i++) k.play('blip', T(11, 'trigeminal') + i * 0.11, { f: 'E5', gain: 0.3, minor: true });
    bell(vis(T(11, 'trigeminal')), 'G5', 1);
    k.tone(T(12, 'mixed'), { f: [[0, 600], [0.3, 300], [0.6, 700]], type: 'triangle', dur: 0.7, gain: 0.07, a: 0.02 });
    k.play('whoosh', T(13, 'sends'), { dur: T(13, 'forehead') - T(13, 'sends'), gain: 0.35 });
    zap(vis(T(13, 'forehead'))); k.play('impact', vis(T(13, 'forehead')), { f: 120, gain: 0.35 });
    big(vis(T(14, 'referred')));
    // 6 fade
    twinkle(T(15, 'warm'), 5, 0.8);
    k.tone(T(16, 'narrows'), { f: [[0, 500], [0.6, 300]], type: 'triangle', dur: 0.65, gain: 0.06, a: 0.05 });
    for (let i = 0; i < 6; i++) k.play('tock', T(17, '30') + i * 0.3, { f: 1400, gain: 0.2, minor: true });
    { const t = vis(T(17, 'seconds') + 0.2); k.play('success', t, { f: 'C6', gain: 0.4 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bell(t + i * 0.012, n, 1.3, { dur: 1.2 })); }
    // 7 tongue
    bloop(vis(T(18, 'want')), 500, 0.8);
    k.play('swish', T(19, 'press'), { gain: 0.4 }); bloop(vis(T(20, 'roof')), 380, 1.1);
    twinkle(T(20, 'roof') + 0.1, 5, 0.9);
    k.play('whoosh', T(21, 'honestly') - 0.1, { dur: 0.5, gain: 0.35 });
    bloop(vis(T(21, 'overreacting')), 640, 1);
    k.play('pop', vis(T(21, 'dessert')), { f: 800, gain: 0.4 });
    // 8 question
    bloop(vis(T(22, 'which')), 500, 0.8, { minor: true });
    bloop(vis(T(23, 'ice')), 480, 1); bloop(vis(T(23, 'slushie')), 640, 1);
    { const t = PE(23) + 0.1; ['G4', 'C5', 'E5', 'G5'].forEach((n, i) => bell(t + i * 0.05, n, 1.2, { dur: 1.2 })); }
  }

  window.BEATS = PH; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
