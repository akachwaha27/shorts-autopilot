// ================= Kawaii Anime, vertical 1080x1920: "How does a chameleon change colour?" =================
// Short (~52 s), 8 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A chibi chameleon acts it out: not hiding, guanine nanocrystals in a grid, calm = close = blue (+ yellow = green),
// rival = skin stretches = crystals spread = yellow/orange, a deeper heat-reflecting layer, the mood question.
// Scene changes: star / heart iris wipes; continuous moves inside scenes. Everything on twos.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  // ---------- voiceover phrases (phrases.json, Kokoro am_michael) ----------
  const PH = [
    {"s":0.25,"e":2.47,"text":"Chameleons don't change color to hide.","words":[["chameleons",0.25],["dont",0.97],["change",1.25],["color",1.69],["to",2.04],["hide",2.19]]},
    {"s":3.02,"e":4.93,"text":"The real reason is way weirder,","words":[["the",3.02],["real",3.25],["reason",3.56],["is",4.01],["way",4.17],["weirder",4.4]]},
    {"s":5.23,"e":6.91,"text":"and you've probably never heard it:","words":[["and",5.23],["youve",5.41],["probably",5.71],["never",6.19],["heard",6.49],["it",6.79]]},
    {"s":7.21,"e":9.51,"text":"crystals that move thirty percent apart.","words":[["crystals",7.21],["that",7.75],["move",8.02],["thirty",8.29],["percent",8.7],["apart",9.17]]},
    {"s":10.06,"e":11.98,"text":"Under their skin are special cells,","words":[["under",10.06],["their",10.39],["skin",10.72],["are",10.99],["special",11.18],["cells",11.65]]},
    {"s":12.28,"e":13.83,"text":"packed with tiny crystals,","words":[["packed",12.28],["with",12.7],["tiny",12.98],["crystals",13.26]]},
    {"s":14.13,"e":15.61,"text":"lined up in a neat grid.","words":[["lined",14.13],["up",14.54],["in",14.71],["a",14.87],["neat",14.95],["grid",15.28]]},
    {"s":16.16,"e":17.59,"text":"When a chameleon is calm,","words":[["when",16.16],["a",16.45],["chameleon",16.52],["is",17.17],["calm",17.31]]},
    {"s":17.89,"e":19.56,"text":"the crystals sit close together","words":[["the",17.89],["crystals",18.08],["sit",18.57],["close",18.76],["together",19.07]]},
    {"s":19.86,"e":21.29,"text":"and bounce back blue light.","words":[["and",19.86],["bounce",20.05],["back",20.44],["blue",20.7],["light",20.96]]},
    {"s":21.84,"e":23.53,"text":"Add the yellow skin on top,","words":[["add",21.84],["the",22.08],["yellow",22.32],["skin",22.8],["on",23.13],["top",23.29]]},
    {"s":23.83,"e":24.92,"text":"and you get green.","words":[["and",23.83],["you",24.06],["get",24.3],["green",24.53]]},
    {"s":25.47,"e":26.93,"text":"But when a rival shows up,","words":[["but",25.47],["when",25.69],["a",25.98],["rival",26.06],["shows",26.42],["up",26.78]]},
    {"s":27.23,"e":29.04,"text":"the chameleon stretches its skin.","words":[["the",27.23],["chameleon",27.42],["stretches",28.0],["its",28.58],["skin",28.78]]},
    {"s":29.59,"e":31.35,"text":"The crystals spread farther apart,","words":[["the",29.59],["crystals",29.77],["spread",30.25],["farther",30.62],["apart",31.05]]},
    {"s":31.65,"e":33.96,"text":"so now they bounce back yellow and orange.","words":[["so",31.65],["now",31.79],["they",31.99],["bounce",32.26],["back",32.67],["yellow",32.94],["and",33.35],["orange",33.55]]},
    {"s":34.51,"e":36.45,"text":"Green turns to fiery orange","words":[["green",34.51],["turns",34.93],["to",35.35],["fiery",35.52],["orange",35.94]]},
    {"s":36.75,"e":38.3,"text":"in just a couple of minutes.","words":[["in",36.75],["just",36.89],["a",37.17],["couple",37.24],["of",37.67],["minutes",37.81]]},
    {"s":38.85,"e":40.74,"text":"It's not hiding, it's showing off.","words":[["its",38.85],["not",39.08],["hiding",39.31],["its",39.76],["showing",39.99],["off",40.52]]},
    {"s":41.29,"e":43.03,"text":"And a deeper layer of crystals","words":[["and",41.29],["a",41.5],["deeper",41.57],["layer",41.99],["of",42.34],["crystals",42.48]]},
    {"s":43.33,"e":44.67,"text":"reflects the sun's heat,","words":[["reflects",43.33],["the",43.89],["suns",44.1],["heat",44.39]]},
    {"s":44.97,"e":46.42,"text":"like built-in sunscreen.","words":[["like",44.97],["builtin",45.26],["sunscreen",45.77]]},
    {"s":46.97,"e":48.73,"text":"So if your skin showed your mood,","words":[["so",46.97],["if",47.11],["your",47.25],["skin",47.52],["showed",47.79],["your",48.19],["mood",48.46]]},
    {"s":49.03,"e":50.78,"text":"what color would you be right now?","words":[["what",49.03],["color",49.29],["would",49.62],["you",49.94],["be",50.13],["right",50.26],["now",50.59]]}
  ];
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  // time of a spoken word (visuals lead it by 0.08 s)
  const T = (i, w, lead = 0.08) => { const f = PH[i].words.find((x) => x[0].startsWith(w)); if (!f) { console.warn('no word', i, w); return PH[i].s; } return f[1] - lead; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);

  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'ドキッガーンキラキラぽかぽかピカッ';
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
  const W = W0, HH = H0;
  const GREEN = ['#a6e98a', '#6fc762'], ORANGE = ['#ffb070', '#f07f4a'], BLUEC = ['#9fd4ff', '#5aa9ea'];
  const toHex = (c) => '#' + c.map((v) => Math.round(H.clamp(v, 0, 255)).toString(16).padStart(2, '0')).join('');
  const mixC = (a, b, u) => [toHex(H.mix(a[0], b[0], u)), toHex(H.mix(a[1], b[1], u))];
  const BARK = ['#dca07a', '#b97b5a'];

  // the chameleon, side view facing right. (x,y) = body centre; feet grip a branch at y + 128*s.
  // P.col [base, shade], P.eyes, P.mouth 'smile'|'O'|'flat'|'grr', P.look, P.stretch 0..1 (puffed up, tall), P.flip
  function chameleon(ctx, x, y, s, P = {}) {
    const t = P.t || 0, col = P.col || GREEN, st = H.clamp(P.stretch || 0);
    const light = H.rgba(H.mix(col[0], '#ffffff', 0.45));
    ctx.save(); ctx.translate(x, y); ctx.scale((P.flip ? -1 : 1) * s, s);
    ctx.translate(0, -(P.lift || 0));
    const sq = P.sq || [1, 1]; ctx.scale(sq[0], sq[1]);
    // curled tail: a spiral of shrinking circles, merged under one outline
    const tail = [];
    for (let i = 0; i <= 40; i++) {
      const u = i / 40, a = 0.15 + u * 4.3 + Math.sin(t * 2) * 0.05 * u, R = H.lerp(80, 20, u);
      tail.push(ellP(-245 + Math.cos(a) * R, 70 + Math.sin(a) * R * 0.95, H.lerp(38, 9, u), H.lerp(38, 9, u)));
    }
    union(ctx, tail, col[0], 4.5);
    // legs (back pair darker)
    const legY = 128;
    tube(ctx, [[-70, 40], [-95, 90], [-80, legY]], 34, col[1], col[1], false);
    tube(ctx, [[95, 40], [120, 90], [110, legY]], 34, col[1], col[1], false);
    // body: tall when puffed up at a rival
    const rx = 165 + 10 * st, ry = 100 + 32 * st;
    const bodyP = ellP(0, -st * 18, rx, ry, -0.05);
    // dorsal crest bumps
    const crest = [];
    for (let i = 0; i < 7; i++) { const a = Math.PI * (1.18 + i * 0.1); crest.push(ellP(Math.cos(a) * rx * 0.98, -st * 18 + Math.sin(a) * ry * 0.98 - 4, 15, 15)); }
    union(ctx, crest, col[0], 4.5);
    ctx.save(); ctx.fillStyle = col[1]; ctx.fill(bodyP); ctx.clip(bodyP); ctx.translate(-10, -12); ctx.fillStyle = col[0]; ctx.fill(bodyP);
    // belly + soft stripes
    ctx.fillStyle = light; ctx.fill(ellP(10, ry * 0.75 - st * 18, rx * 0.95, ry * 0.42));
    ctx.strokeStyle = H.rgba(H.mix(col[1], '#ffffff', 0.2), 0.8); ctx.lineWidth = 16; ctx.lineCap = 'round';
    for (const sx of [-80, -20, 40]) { ctx.beginPath(); ctx.moveTo(sx, -ry * 0.85 - st * 18); ctx.quadraticCurveTo(sx + 18, -st * 18, sx, ry * 0.3 - st * 18); ctx.stroke(); }
    ctx.restore(); ol(ctx, bodyP, 5);
    // front legs
    tube(ctx, [[-40, 50 - st * 8], [-60, 95], [-45, legY]], 38, col[0], col[1], true);
    tube(ctx, [[120, 40 - st * 8], [150, 92], [140, legY]], 38, col[0], col[1], true);
    for (const fx of [-45, 140]) cel(ctx, ellP(fx, legY + 4, 30, 16), col[0], col[1], -3, -3, 4);
    // head with a casque
    ctx.save(); ctx.translate(160 + st * 6, -50 - st * 26);
    const casque = roundPoly([[-40, -40], [-80, -150], [70, -60]], 22);
    cel(ctx, casque, col[0], col[1], -6, -6);
    const headP = roundPoly([[-70, -70], [70, -70], [150, 0], [100, 60], [-60, 70]], 48);
    cel(ctx, headP, col[0], col[1], -10, -10);
    // turret eye: a skin cone with an anime eye in it
    cel(ctx, ellP(30, -20, 58, 58), col[0], col[1], -6, -6);
    eye(ctx, 34, -20, 32, 38, '#5aa9ea', P.eyes || 'normal', -1, P.look || [0.4, 0]);
    if (P.blush !== false) blush(ctx, 60, 42, 18, 9);
    const mk = P.mouth || 'smile';
    ctx.strokeStyle = C.dark; ctx.lineWidth = 7; ctx.lineCap = 'round';
    if (mk === 'O') { const p = ellP(125, 28, 14, 16); ctx.fillStyle = '#b8456f'; ctx.fill(p); ol(ctx, p, 5); }
    else if (mk === 'grr') { ctx.beginPath(); ctx.moveTo(85, 30); for (let i = 1; i <= 4; i++) ctx.lineTo(85 + i * 12, 30 + (i % 2 ? -8 : 0)); ctx.stroke(); }
    else if (mk === 'flat') { ctx.beginPath(); ctx.moveTo(90, 30); ctx.lineTo(135, 26); ctx.stroke(); }
    else { ctx.beginPath(); ctx.moveTo(80, 22); ctx.quadraticCurveTo(110, 48, 140, 18); ctx.stroke(); }
    ctx.restore();
    ctx.restore();
  }
  function branch(ctx, y, x0 = -40, x1 = 1120, t = 0) {
    const pts = []; for (let i = 0; i <= 12; i++) { const u = i / 12; pts.push([H.lerp(x0, x1, u), y + Math.sin(u * 5) * 10]); }
    tube(ctx, pts, 48, BARK[0], BARK[1], true);
    for (const [lx, ly, a] of [[180, y - 30, -0.6], [860, y - 34, 0.5], [620, y + 34, 2.6]]) { ctx.save(); ctx.translate(lx, ly); ctx.rotate(a + Math.sin(t * 2 + lx) * 0.06); cel(ctx, ellP(0, -38, 26, 46), C.mint, C.mintS, -4, -4, 4); ctx.restore(); }
  }
  // a guanine crystal: rounded hexagon, icy white with a sparkle
  function crystal(ctx, x, y, r, tint = C.sky) { cel(ctx, hexP(x, y, r, Math.PI / 6), H.rgba(H.mix(tint, '#ffffff', 0.7)), tint, -3, -3, 3.5); shine(ctx, x - r * 0.3, y - r * 0.35, r * 0.25, r * 0.14, -0.6); }
  // a grid of crystals in a cell. gap = centre spacing; jitter 0..1 = messy -> neat
  function crystalGrid(ctx, cx, cy, cols, rows, gap, r, jitter, seed, tint, t, popT = -1, stg = 0.02) {
    const R = H.rng(seed);
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const jx = R.range(-1, 1) * gap * 0.45 * jitter, jy = R.range(-1, 1) * gap * 0.45 * jitter, rot = R();
      const x = cx + (i - (cols - 1) / 2) * gap + (j & 1 ? gap * 0.5 : 0) - gap * 0.25 + jx, y = cy + (j - (rows - 1) / 2) * gap * 0.87 + jy;
      if (popT >= 0) { const p = pop(t, popT + (i + j * cols) * stg, 1.2); if (p.s <= 0) continue; ctx.save(); ctx.translate(x, y); ctx.scale(p.sx, p.sy); ctx.rotate(rot * jitter); crystal(ctx, 0, 0, r, tint); ctx.restore(); }
      else crystal(ctx, x, y, r, tint);
    }
  }
  // a wavy light ray from a to b, drawn on by u; arrowhead at the tip
  function ray(ctx, a, b, u, col, shade, amp = 22, waves = 4, t = 0) {
    if (u <= 0) return;
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]), dx = (b[0] - a[0]) / L, dy = (b[1] - a[1]) / L, pts = [];
    for (let i = 0; i <= 60 * u; i++) { const d = i / 60 * L, w = Math.sin(d / L * waves * TAU - t * 10) * amp * Math.min(1, (L - d) / 60); pts.push([a[0] + dx * d - dy * w, a[1] + dy * d + dx * w]); }
    tube(ctx, pts, 18, col, shade, true);
    const tip = pts[pts.length - 1], ang = Math.atan2(dy, dx), s = 34;
    ctx.save(); ctx.translate(tip[0], tip[1]); ctx.rotate(ang); cel(ctx, roundPoly([[s * 0.9, 0], [-s * 0.6, -s * 0.85], [-s * 0.6, s * 0.85]], s * 0.25), col, shade, -2, -2, 4.5); ctx.restore();
  }
  function sun(ctx, x, y, R, t, fk = 'happy') {
    ctx.save(); ctx.translate(x, y); ctx.rotate(t * 0.4);
    for (let i = 0; i < 10; i++) { ctx.save(); ctx.rotate(i / 10 * TAU); cel(ctx, roundPoly([[R * 1.05, -R * 0.2], [R * 1.5, 0], [R * 1.05, R * 0.2]], 8), C.butterD, C.butterS, -2, -2, 4); ctx.restore(); }
    ctx.restore();
    cel(ctx, ellP(x, y, R, R), C.butterD, C.butterS, -8, -8, 5);
    face(ctx, x, y - 4, R / 95, { eyes: fk, mouth: 'smile', iris: '#f5a623' });
  }
  function bottle(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-24, -150, 48, 40, 10), C.pinkD, '#e2527f', -3, -3, 4.5);
    cel(ctx, rrP(-70, -115, 140, 220, 46), C.white, C.creamS, -8, -8, 5);
    cel(ctx, rrP(-52, -40, 104, 70, 18), C.butter, C.butterS, -3, -3, 4);
    ctx.fillStyle = C.plum; ctx.font = `700 40px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('SPF', 0, -4);
    face(ctx, 0, 62, 0.42, { eyes: 'happy', mouth: 'w' });
    ctx.restore();
  }
  const HEAD_Y = 400; // headline baseline (safe below the top 150 px)
  const head = (ctx, t, t0, str, size = 112, o = {}, t1 = null, y = HEAD_Y) => ptext(ctx, t, t0, 540, y, str, size, o, t1);
  const num = { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 };
  const bigNum = { fill: C.pinkD, line: C.white, outer: C.plum, ow: 0.07, lw: 0.13 };
  const JUNGLE = { base: '#e4f7e4', dot: '#cdeecd', acc: '#fff3b0', kind: 'stars' };
  const SKIN = { base: '#fff1e6', dot: '#ffe0cc', acc: '#ffd3e1', kind: 'dots' };

  // skin cross-section panel: the yellow pigment layer on top, a big rounded "special cell" of crystals below
  function skinSlab(ctx, x, y, w, h, yel, t) {
    const top = rrP(x - w / 2, y - h / 2, w, 120, 40);
    cel(ctx, top, C.butter, C.butterS, -6, -6, 5);
    ctx.save(); ctx.globalAlpha = yel; ctx.fillStyle = 'rgba(255,216,77,0.65)'; ctx.fill(top); ctx.restore();
    const cell = rrP(x - w / 2 + 20, y - h / 2 + 140, w - 40, h - 160, 70);
    cel(ctx, cell, '#f3eeff', C.lav, -8, -8, 5);
    return { cellTop: y - h / 2 + 140, cellH: h - 160 };
  }

  // ======================================== SCENES ========================================
  const SC = [];
  const scene = (first, tr, theme, seed, draw, wx = 540, wy = 1000) => SC.push({ s: first === 0 ? 0 : PS(first) - 0.5, first, tr, theme, seed, draw, wx, wy });

  // 1 HOOK: not hiding! -> weirder -> crystals that move 30% apart
  scene(0, null, JUNGLE, 3, (ctx, t) => {
    twinkles(ctx, W, HH, t, 21, 12, (x, y) => y > 600 && y < 1500);
    branch(ctx, 1240, -40, 1120, t);
    const shock = t >= T(1, 'real') && t < PS(3);
    const zoom = H.ease.inOut(prog(t, PS(3) - 0.3, PS(3) + 0.4));
    chameleon(ctx, H.lerp(500, 380, zoom), 1112, 1.35, { t, eyes: shock ? 'shock' : t >= T(2, 'never') ? 'normal' : 'normal', mouth: shock ? 'O' : 'smile', look: [0.3, -0.3], lift: bob(t, 0, 6), sq: squash(t, T(0, 'hide'), 0.12) });
    // "to hide?" ghost leaf + cross
    if (t >= T(0, 'hide') && t < PS(1) + 1.2) {
      ptag(ctx, t, T(0, 'change'), 540, 620, 'to hide?', C.mint, 64, PS(1) + 1.0);
      cross(ctx, 820, 600, 1.6, t, T(0, 'hide'));
    }
    head(ctx, t, T(0, 'chameleons'), 'CHAMELEONS', 118, { fill: C.white, line: C.mintD, outer: C.plum, ow: 0.08, lw: 0.2 }, T(1, 'way') - 0.1);
    head(ctx, t, T(1, 'weirder'), 'way weirder!', 116, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.2 }, PS(3) - 0.1);
    if (t >= T(1, 'real') && t < PS(3)) sweat(ctx, 860, 860, pop(t, T(1, 'real')).s * 1.5, 0.3);
    for (const [tt, x, y, sz] of [[T(2, 'never'), 880, 760, 140], [T(2, 'heard'), 980, 650, 96]]) { if (t >= PS(3)) break; const p = pop(t, tt, 1.4); if (p.s <= 0) continue; ctx.save(); ctx.translate(x, y); ctx.rotate(0.14 * Math.sin(t * 9 + x)); ctx.scale(p.sx, p.sy); kText(ctx, '?', 0, 0, sz, { fill: C.butter, line: C.pinkD, outer: C.plum, lw: 0.2 }); ctx.restore(); }
    // magnifier bubble with crystals spreading apart
    if (t >= T(3, 'crystals')) {
      const p = pop(t, T(3, 'crystals'), 1.1), mx = 760, my = 860;
      ctx.save(); ctx.translate(mx, my); ctx.scale(p.sx, p.sy);
      dotted(ctx, [[-170, 170], [-260, 300]], 1, C.plum, 6, 20, 0);
      const ring = ellP(0, 0, 230, 230);
      ctx.save(); ctx.fillStyle = '#f3eeff'; ctx.fill(ring); ctx.clip(ring);
      const g = H.lerp(62, 81, H.ease.inOut(prog(t, T(3, 'move'), T(3, 'apart') + 0.3)));
      crystalGrid(ctx, 0, 0, 7, 7, g, 22, 0, 5, C.sky, t);
      ctx.restore();
      ctx.lineWidth = 26; ctx.strokeStyle = C.plum; ctx.stroke(ring); ctx.lineWidth = 16; ctx.strokeStyle = C.pink; ctx.stroke(ring);
      ctx.restore();
      const pn = pop(t, T(3, 'thirty'), 1.6);
      if (pn.s > 0) { ctx.save(); ctx.translate(540, 470); ctx.scale(pn.sx, pn.sy); kText(ctx, '30%', 0, 0, 230, bigNum); ctx.restore(); impactLines(ctx, 540, 390, 210, t, T(3, 'thirty'), 14, C.pinkD); }
      ptext(ctx, t, T(3, 'apart'), 540, 600, 'apart!', 84, { fill: C.white, line: C.skyD });
      ptag(ctx, t, T(3, 'crystals') + 0.1, 760, 1150, 'crystals', C.sky, 56);
    }
  });

  // 2 UNDER THE SKIN: special cells packed with crystals, lined up in a grid
  scene(4, 'star', SKIN, 5, (ctx, t) => {
    twinkles(ctx, W, HH, t, 31, 10, (x, y) => y > 500 && y < 1600);
    const ps = pop(t, PS(4) - 0.2, 0.8);
    ctx.save(); ctx.translate(540, 1080); ctx.scale(Math.max(0.01, ps.sx), Math.max(0.01, ps.sy)); ctx.translate(-540, -1080);
    const L = skinSlab(ctx, 540, 1080, 900, 940, 0, t);
    const neat = H.ease.inOut(prog(t, T(6, 'lined'), T(6, 'grid') + 0.2));
    if (t >= T(5, 'packed')) crystalGrid(ctx, 540, L.cellTop + L.cellH / 2, 8, 8, 92, 30, 1 - neat, 9, C.sky, t, T(5, 'packed'), 0.012);
    ctx.restore();
    ptag(ctx, t, T(4, 'skin'), 540, 600, 'skin', C.butter, 60);
    head(ctx, t, T(4, 'special'), 'special cells', 104, { fill: C.white, line: C.lavD, outer: C.plum, ow: 0.08, lw: 0.2 }, T(5, 'crystals') - 0.1);
    head(ctx, t, T(5, 'crystals'), 'crystals!', 120, { fill: C.sky, line: C.skyD, outer: C.plum, ow: 0.08, lw: 0.2 }, T(6, 'lined') - 0.1);
    head(ctx, t, T(6, 'neat'), 'neat grid', 120, { fill: C.white, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.2 });
    ptag(ctx, t, T(5, 'tiny'), 840, 1620, 'guanine', C.white, 46);
    if (t >= T(6, 'grid')) for (let i = 0; i < 4; i++) sparkle(ctx, [150, 930, 170, 910][i], [800, 820, 1500, 1480][i], (18 + 8 * Math.sin(t * 8 + i)) * pop(t, T(6, 'grid') + i * 0.07).s, i % 2 ? C.white : C.butter, 0, 3.5);
  });

  // 3 CALM: crystals close together -> bounce back blue; add yellow -> green
  scene(7, 'heart', TH.sky, 7, (ctx, t) => {
    twinkles(ctx, W, HH, t, 41, 10, (x, y) => y > 500 && y < 1600);
    const L = skinSlab(ctx, 540, 1100, 860, 760, prog(t, T(10, 'yellow'), T(10, 'yellow') + 0.4), t);
    const close = H.ease.inOut(prog(t, T(8, 'close'), T(8, 'together') + 0.3));
    crystalGrid(ctx, 540, L.cellTop + L.cellH / 2, 8, 6, H.lerp(84, 62, close), 26, 0, 9, C.sky, t);
    // calm chameleon face peeking in the corner
    const calmEyes = t >= T(7, 'calm') ? 'happy' : 'normal';
    const gu = prog(t, T(11, 'green') - 0.1, T(11, 'green') + 0.3);
    chameleon(ctx, 330, 1555, 0.5, { t, col: mixC(['#f5f0ff', '#d9cff5'], GREEN, gu), eyes: calmEyes, look: [0.3, 0], lift: bob(t, 0, 4) });
    head(ctx, t, T(7, 'calm'), 'calm', 130, { fill: C.white, line: C.mintD, outer: C.plum, ow: 0.08, lw: 0.2 }, T(9, 'bounce') - 0.1);
    if (t >= T(8, 'close')) { for (const sd of [-1, 1]) dotted(ctx, [[540 + sd * 400, L.cellTop + L.cellH / 2], [540 + sd * 300, L.cellTop + L.cellH / 2]], H.ease.out(prog(t, T(8, 'close'), T(8, 'close') + 0.4)) * (1 - prog(t, T(9, 'bounce'), T(9, 'bounce') + 0.3)), C.lavD, 8, 26, 1.2); }
    // white light in, blue light out
    const inU = H.ease.out(prog(t, T(9, 'bounce') - 0.4, T(9, 'bounce') + 0.1)), outU = H.ease.out(prog(t, T(9, 'blue'), T(9, 'blue') + 0.4));
    ray(ctx, [700, 560], [600, 1000], inU, C.white, C.creamS, 18, 4, t);
    ray(ctx, [480, 1000], [380, 600], outU, BLUEC[0], BLUEC[1], 18, 4, t);
    if (t >= T(9, 'blue')) head(ctx, t, T(9, 'blue'), 'BLUE', 140, { fill: BLUEC[0], line: C.skyD, outer: C.plum, ow: 0.08, lw: 0.2 }, T(10, 'yellow') - 0.1);
    // blue + yellow = green
    if (t >= T(10, 'yellow')) {
      const y = HEAD_Y - 40;
      popIn(ctx, t, T(10, 'yellow') - 0.1, 220, y, () => cel(ctx, ellP(0, 0, 70, 70), BLUEC[0], BLUEC[1], -6, -6, 5), 1.3);
      ptext(ctx, t, T(10, 'yellow'), 380, y + 30, '+', 110, { fill: C.white, line: C.plum });
      popIn(ctx, t, T(10, 'yellow'), 540, y, () => cel(ctx, ellP(0, 0, 70, 70), C.butterD, C.butterS, -6, -6, 5), 1.3);
      ptext(ctx, t, T(11, 'get'), 700, y + 30, '=', 110, { fill: C.white, line: C.plum });
      popIn(ctx, t, T(11, 'green'), 870, y, () => cel(ctx, ellP(0, 0, 86, 86), GREEN[0], GREEN[1], -6, -6, 5), 1.6);
      ptag(ctx, t, T(10, 'yellow') + 0.1, 760, 1580, 'yellow skin', C.butter, 50);
      if (t >= T(11, 'green')) { impactLines(ctx, 870, y, 100, t, T(11, 'green'), 12, C.mintD); ptext(ctx, t, T(11, 'green'), 870, y + 190, 'green!', 80, { fill: GREEN[0], line: C.mintD, outer: C.plum, ow: 0.08 }); }
    }
  });

  // 4 A RIVAL SHOWS UP: face-off, the chameleon stretches its skin
  scene(12, 'star', JUNGLE, 11, (ctx, t) => {
    twinkles(ctx, W, HH, t, 51, 10, (x, y) => y > 500 && y < 1600);
    branch(ctx, 1290, -40, 1120, t);
    const rv = T(12, 'rival'), stT = T(13, 'stretches'), su = H.ease.back(prog(t, stT, stT + 0.5));
    const rx = H.lerp(1500, 900, H.ease.out(prog(t, rv - 0.3, rv + 0.3)));
    chameleon(ctx, rx, 1162, 0.95, { t, flip: true, col: ['#c9b8ff', '#9f86ea'], eyes: 'normal', mouth: 'grr', look: [0.5, 0], lift: bob(t, 2, 5) });
    chameleon(ctx, 210, 1162, 0.95, { t, eyes: t >= rv && t < stT ? 'shock' : 'normal', mouth: t >= stT ? 'grr' : t >= rv ? 'O' : 'smile', look: [0.6, 0], stretch: su, sq: squash(t, stT + 0.5, 0.1), lift: bob(t, 0, 5) });
    if (t >= rv) { const p = pop(t, rv, 1.5); ctx.save(); ctx.translate(560, 860); ctx.rotate(-0.12 + 0.05 * Math.sin(t * 20)); ctx.scale(p.sx, p.sy); kText(ctx, '!?', 0, 0, 130, { fill: C.red, line: C.white, outer: C.plum, lw: 0.2 }); ctx.restore(); kana(ctx, 'ドキッ', 300, 760, 72, -0.15, pop(t, rv + 0.1).s, C.pink); }
    ptag(ctx, t, rv, 880, 1480, 'rival', C.lav, 56);
    head(ctx, t, PS(12), 'uh oh...', 112, { fill: C.white, line: C.lavD, outer: C.plum, ow: 0.08, lw: 0.2 }, stT - 0.1);
    head(ctx, t, stT, 'STRETCH!', 140, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.2 });
    if (t >= stT) for (const sx of [90, 340]) dotted(ctx, [[sx, 960], [sx + (sx < 300 ? -40 : 40), 700]], H.ease.out(prog(t, stT, stT + 0.4)), C.pinkD, 8, 26, 1.2);
  });

  // 5 THE CRYSTALS SPREAD: farther apart -> yellow and orange light
  scene(14, 'heart', SKIN, 13, (ctx, t) => {
    twinkles(ctx, W, HH, t, 61, 10, (x, y) => y > 500 && y < 1600);
    const L = skinSlab(ctx, 540, 1150, 860, 820, 1, t);
    const sp = H.ease.inOut(prog(t, T(14, 'spread'), T(14, 'apart') + 0.3));
    crystalGrid(ctx, 540, L.cellTop + L.cellH / 2, 8, 6, H.lerp(62, 82, sp), 26, 0, 9, '#ffc79e', t);
    if (t >= T(14, 'spread')) for (const sd of [-1, 1]) dotted(ctx, [[540 + sd * 120, L.cellTop + L.cellH / 2], [540 + sd * 420, L.cellTop + L.cellH / 2]], H.ease.out(prog(t, T(14, 'spread'), T(14, 'apart') + 0.2)) * (1 - prog(t, T(15, 'bounce'), T(15, 'bounce') + 0.3)), C.pinkD, 8, 26, 1.3);
    head(ctx, t, T(14, 'spread'), 'spread out!', 116, { fill: C.white, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.2 }, T(15, 'yellow') - 0.1);
    { const p = pop(t, T(14, 'farther'), 1.5), o = popOut(t, T(15, 'yellow') - 0.1); if (p.s > 0 && o > 0) { ctx.save(); ctx.translate(540, 600); ctx.scale(p.sx * o, p.sy * o); kText(ctx, '+30%', 0, 0, 120, num); ctx.restore(); } }
    const inU = H.ease.out(prog(t, T(15, 'bounce') - 0.4, T(15, 'bounce') + 0.1));
    ray(ctx, [740, 560], [620, 1000], inU, C.white, C.creamS, 18, 4, t);
    ray(ctx, [520, 1000], [340, 600], H.ease.out(prog(t, T(15, 'yellow'), T(15, 'yellow') + 0.4)), C.butterD, C.butterS, 18, 4, t);
    ray(ctx, [460, 1010], [180, 700], H.ease.out(prog(t, T(15, 'orange'), T(15, 'orange') + 0.4)), ORANGE[0], ORANGE[1], 18, 3, t);
    if (t >= T(15, 'yellow')) { kWord(ctx, 'YELLOW', 540, HEAD_Y - 40, 110, t, T(15, 'yellow'), 0.03, { fill: C.butterD, line: C.butterS, outer: C.plum, ow: 0.08, lw: 0.2 }); }
    if (t >= T(15, 'orange')) { kWord(ctx, '& ORANGE', 540, HEAD_Y + 100, 110, t, T(15, 'orange'), 0.03, { fill: ORANGE[0], line: ORANGE[1], outer: C.plum, ow: 0.08, lw: 0.2 }); }
  });

  // 6 GREEN TURNS ORANGE in a couple of minutes: not hiding, showing off
  scene(16, 'star', TH.butter, 15, (ctx, t) => {
    twinkles(ctx, W, HH, t, 71, 12, (x, y) => y > 560 && y < 1560);
    branch(ctx, 1330, -40, 1120, t);
    const c0 = T(16, 'green'), c1 = T(16, 'orange') + 0.3, cu = H.ease.inOut(prog(t, c0 + 0.2, c1));
    const off = T(18, 'showing');
    const proud = t >= off;
    chameleon(ctx, 470, 1200, 1.3, { t, col: mixC(GREEN, ORANGE, cu), eyes: proud ? 'star' : 'normal', mouth: proud ? 'smile' : 'smile', look: [0.3, -0.2], stretch: 0.3 * cu, lift: bob(t, 0, 7), sq: squash(t, off, 0.16) });
    kWord(ctx, 'green', 300, HEAD_Y, 100, t, c0, 0.03, { fill: GREEN[0], line: C.mintD, outer: C.plum, ow: 0.08, lw: 0.2, t1: T(17, 'in') - 0.1 });
    ptext(ctx, t, T(16, 'turns'), 540, HEAD_Y, '→', 100, { fill: C.white, line: C.plum }, T(17, 'in') - 0.1);
    kWord(ctx, 'orange', 790, HEAD_Y, 100, t, T(16, 'orange'), 0.03, { fill: ORANGE[0], line: ORANGE[1], outer: C.plum, ow: 0.08, lw: 0.2, t1: T(17, 'in') - 0.1 });
    // clock: a couple of minutes
    const k0 = T(17, 'couple');
    if (t >= T(17, 'in') - 0.1 && t < PS(18) - 0.1) { popIn(ctx, t, T(17, 'in') - 0.1, 400, 460, () => clock(ctx, 0, 0, 110, (t - k0) * 6), 1.3, PS(18) - 0.2); ptext(ctx, t, T(17, 'minutes'), 700, 500, '~2 min', 100, num, PS(18) - 0.2); }
    if (t >= T(18, 'hiding') && t < off + 0.05) { ptag(ctx, t, T(18, 'hiding'), 540, HEAD_Y - 30, 'hiding', C.mint, 64, off); cross(ctx, 760, HEAD_Y - 40, 1.2, t, T(18, 'not')); }
    head(ctx, t, off, 'SHOWING OFF!', 112, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.2 });
    if (proud) { kana(ctx, 'キラキラ', 840, 700, 70, 0.15, pop(t, off + 0.1).s, C.butter); for (let i = 0; i < 6; i++) sparkle(ctx, [150, 930, 200, 950, 700, 120][i], [700, 900, 1500, 1460, 640, 1100][i], (18 + 9 * Math.sin(t * 8 + i)) * pop(t, off + i * 0.06).s, i % 2 ? C.white : C.butter, 0, 3.5); confetti(ctx, t, off, 540, 900, 40, 5, 1.1); }
  });

  // 7 THE DEEPER LAYER: reflects the sun's heat, like built-in sunscreen
  scene(19, 'heart', TH.pink, 17, (ctx, t) => {
    twinkles(ctx, W, HH, t, 81, 8, (x, y) => y > 500 && y < 1600);
    const sunU = pop(t, PS(19) - 0.1, 0.8);
    // slab: yellow top, the small-crystal cell, then a deeper cell with bigger crystals
    const top = rrP(110, 760, 860, 100, 36); cel(ctx, top, C.butter, C.butterS, -6, -6, 5);
    const c1 = rrP(130, 880, 820, 300, 60); cel(ctx, c1, '#f3eeff', C.lav, -8, -8, 5);
    crystalGrid(ctx, 540, 1030, 10, 4, 74, 22, 0, 3, C.sky, t);
    const dp = H.ease.out(prog(t, T(19, 'deeper') - 0.1, T(19, 'layer') + 0.2));
    const c2 = rrP(130, 1200, 820, 330 * Math.max(0.02, dp), 60);
    if (dp > 0) { cel(ctx, c2, '#ffeef5', C.pinkS, -8, -8, 5); if (t >= T(19, 'crystals')) { ctx.save(); ctx.clip(c2); crystalGrid(ctx, 540, 1365, 6, 3, 120, 44, 0, 4, C.pinkS, t, T(19, 'crystals'), 0.03); ctx.restore(); } }
    ptag(ctx, t, T(19, 'deeper'), 800, 1610, 'deeper layer', C.pink, 50);
    // sun + heat waves bouncing off
    popIn(ctx, t, PS(19) - 0.1, 850, 500, () => sun(ctx, 0, 0, 95, t), 1);
    const hu = H.ease.out(prog(t, T(20, 'reflects') - 0.5, T(20, 'reflects'))), bu = H.ease.out(prog(t, T(20, 'reflects'), T(20, 'reflects') + 0.4));
    ray(ctx, [780, 580], [620, 1260], hu, C.red, '#e2486c', 20, 5, t);
    ray(ctx, [540, 1260], [330, 620], bu, C.red, '#e2486c', 20, 5, t);
    if (t >= T(20, 'heat')) ptag(ctx, t, T(20, 'heat'), 260, 560, 'heat', C.red, 60, T(21, 'like') - 0.1);
    head(ctx, t, T(20, 'reflects'), 'bounces heat!', 104, { fill: C.white, line: C.red, outer: C.plum, ow: 0.08, lw: 0.2 }, T(21, 'like') - 0.1, 300);
    if (t >= T(21, 'like')) kana(ctx, 'ぽかぽか', 880, 720, 64, 0.12, pop(t, T(21, 'like')).s, C.pink);
    if (t >= T(21, 'sunscreen') - 0.3) { popIn(ctx, t, T(21, 'sunscreen') - 0.1, 250, 520, () => bottle(ctx, 0, 0, 1.0), 1.4); head(ctx, t, T(21, 'sunscreen'), 'SUNSCREEN', 104, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.2 }, null, 300); impactLines(ctx, 250, 520, 160, t, T(21, 'sunscreen'), 12, C.pinkD); }
  });

  // 8 THE QUESTION: what colour would YOU be?
  scene(22, 'star', TH.lav, 19, (ctx, t) => {
    twinkles(ctx, W, HH, t, 91, 12, (x, y) => y > 600 && y < 1500);
    branch(ctx, 1300, -40, 1120, t);
    // the chameleon cycles through mood colours
    const moods = [GREEN, BLUEC, [C.pink, C.pinkS], ORANGE, [C.butterD, C.butterS], [C.lav, C.lavS]];
    const m0 = T(22, 'mood'), mu = t < m0 ? 0 : (t - m0) * 1.6, i0 = Math.floor(mu) % moods.length, i1 = (i0 + 1) % moods.length, f = H.smooth(0.6, 1, mu % 1);
    const col = t < m0 ? GREEN : mixC(moods[i0], moods[i1], f);
    const nw = T(23, 'now');
    chameleon(ctx, 470, 1172, 1.2, { t, col, eyes: t >= nw ? 'star' : t >= T(22, 'your') ? 'normal' : 'happy', look: [0.6, -0.3], lift: bob(t, 0, 8), sq: t >= nw ? squash(t, nw, 0.2) : [1, 1] });
    if (t >= m0) moods.forEach((c, i) => popIn(ctx, t, m0 + i * 0.08, 140 + i * 160, 700, () => cel(ctx, heartP(0, 0, 46), c[0], c[1], -4, -4, 4.5), 1.3));
    kWord(ctx, 'What color', 540, 380, 104, t, T(23, 'what'), 0.03, { fill: C.white, line: C.lavD, track: 2 });
    kWord(ctx, 'are YOU?', 540, 540, 140, t, T(23, 'you') - 0.05, 0.035, { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.2, track: 3 });
    if (t >= T(22, 'mood')) ptag(ctx, t, T(22, 'mood'), 540, 1600, 'your mood?', C.pink, 52, nw - 0.05);
    if (t >= nw) { impactLines(ctx, 540, 1100, 340, t, nw + 0.1, 14, C.pinkD); confetti(ctx, t, nw + 0.1, 540, 900, 50, 9, 1.2); ptag(ctx, t, nw + 0.3, 540, 1600, 'comment below!', C.pink, 52); }
  });

  // ======================================== PLAYBACK ========================================
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
    const bloop = (t, f = 420, g = 1, o = {}) => { k.tone(t, { f: [[0, f * 0.7], [0.07, f * 1.35]], dur: 0.11, gain: 0.2 * g, pan: o.pan, minor: o.minor }); k.noise(t, { dur: 0.012, filter: 'bandpass', f: 1600, q: 1.2, gain: 0.05 * g, pan: o.pan, minor: o.minor }); };
    const boing = (t, g = 1, o = {}) => { k.tone(t, { f: [[0, 150], [0.05, 290], [0.12, 190], [0.2, 250], [0.3, 210], [0.4, 225]], type: 'triangle', dur: 0.45, gain: 0.22 * g, pan: o.pan, minor: o.minor }); k.tone(t, { f: [[0, 75], [0.06, 140], [0.3, 110]], dur: 0.3, gain: 0.2 * g, minor: o.minor }); };
    const bell = (t, f, g = 1, o = {}) => { const hz = k.hz(f); k.tone(t, { f: hz, dur: o.dur || 0.9, gain: 0.09 * g, a: 0.004, verb: 0.35, pan: o.pan, minor: o.minor }); k.tone(t, { f: hz * 2, dur: 0.3, gain: 0.025 * g, a: 0.003, verb: 0.3, pan: o.pan, minor: o.minor }); };
    const twinkle = (t, n = 4, g = 1, minor = true) => { const ns = ['G4', 'C5', 'E5', 'G5', 'A5', 'C6']; for (let i = 0; i < n; i++) bell(t + i * 0.06, ns[(i * 2 + n) % ns.length], 0.55 * g, { dur: 0.7, pan: (i % 2 ? 0.35 : -0.35), minor }); };
    const iris = (t, d = 0.5, base = 'C5') => { k.tone(t, { f: [[0, k.hz(base) / 2], [d, k.hz(base) * 1.5]], dur: d + 0.05, gain: 0.06, a: d * 0.6, verb: 0.3 }); k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 300], [d, 1800]], q: 0.8, gain: 0.14, a: d * 0.7 }); twinkle(t + d * 0.75, 3, 0.8, false); };
    const aww = (t) => { k.tone(t, { f: [[0, 'E4'], [0.3, 'D#4']], type: 'triangle', dur: 0.32, gain: 0.07, a: 0.03, hold: 0.15 }); k.tone(t + 0.3, { f: [[0, 'C4'], [0.5, 'A3']], type: 'triangle', dur: 0.55, gain: 0.07, a: 0.03, hold: 0.2 }); };
    const big = (t) => { bloop(t, 320, 1.2); k.play('thud', t, { f: 140, gain: 0.35 }); twinkle(t + 0.12, 4, 0.8, false); };
    const shimmer = (t, d, g = 1) => { for (let x = 0; x < d; x += 0.09) bell(t + x, ['C6', 'E6', 'G6', 'B6'][Math.floor(x / 0.09) % 4], 0.35 * g, { dur: 0.4, minor: true, pan: Math.sin(x * 9) * 0.5 }); };
    const zap = (t, f0 = 500, f1 = 1400) => k.tone(t, { f: [[0, f0], [0.35, f1]], type: 'triangle', dur: 0.4, gain: 0.08, a: 0.05, minor: true });
    const pops = (t0, n, step, g = 0.35) => { for (let i = 0; i < n; i++) k.play('pop', t0 + i * step, { f: 600 + (i % 7) * 50, gain: g, minor: true }); };
    SC.forEach((sc, i) => { if (i > 0) iris(sc.s, 0.5, ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'C6', 'D6'][i % 8]); });
    // 1 hook
    bloop(vis(T(0, 'chameleons')), 420, 0.8);
    { const t = vis(T(0, 'hide')); k.play('error', t, { gain: 0.6 }); k.play('thud', t, { f: 120, gain: 0.4 }); }
    aww(vis(T(1, 'real')) + 0.05); bloop(vis(T(1, 'weirder')), 520, 1);
    bloop(vis(T(2, 'never')), 360, 1); bloop(vis(T(2, 'heard')), 470, 0.9);
    { const t = vis(T(3, 'crystals')); boing(t, 0.8); twinkle(t + 0.1, 4, 0.9); }
    k.tone(T(3, 'move'), { f: [[0, 300], [1.0, 600]], type: 'triangle', dur: 1.0, gain: 0.08, a: 0.6, minor: true });
    big(vis(T(3, 'thirty'))); bloop(vis(T(3, 'apart')), 600, 0.8);
    // 2 under the skin
    k.play('whoosh', PS(4) - 0.3, { dur: 0.5, gain: 0.5 });
    bloop(vis(T(4, 'skin')), 400, 0.9); bloop(vis(T(4, 'special')), 520, 0.9);
    pops(T(5, 'packed'), 22, 0.035, 0.3); bloop(vis(T(5, 'crystals')), 640, 1);
    for (let i = 0; i < 8; i++) k.play('tock', T(6, 'lined') + i * 0.12, { f: 800 + i * 60, gain: 0.3, minor: true });
    { const t = vis(T(6, 'grid')); k.play('ding', t, { f: 'E6', gain: 0.3 }); twinkle(t + 0.1, 4, 0.8); }
    // 3 calm, blue, green
    bloop(vis(T(7, 'calm')), 380, 0.9); bell(vis(T(7, 'calm')) + 0.1, 'G5', 0.8);
    for (let i = 0; i < 6; i++) k.play('tock', T(8, 'close') + i * 0.1, { f: 1200 - i * 60, gain: 0.3, minor: true });
    zap(T(9, 'bounce') - 0.4, 400, 900); { const t = vis(T(9, 'blue')); zap(t, 900, 1500); bloop(t, 560, 1.1); shimmer(t + 0.1, 0.5); }
    bloop(vis(T(10, 'yellow') - 0.1), 420, 0.8); bloop(vis(T(10, 'yellow')), 520, 0.8); bloop(vis(T(11, 'get')), 380, 0.6, { minor: true });
    { const t = vis(T(11, 'green')); k.play('success', t, { gain: 0.35 }); twinkle(t + 0.1, 5, 0.9); }
    // 4 rival
    k.play('whoosh', T(12, 'rival') - 0.3, { dur: 0.6, gain: 0.6 });
    { const t = vis(T(12, 'rival')); k.play('thud', t, { f: 120, gain: 0.5 }); bloop(t, 300, 1); }
    { const a = T(13, 'stretches'), b = a + 0.5; k.tone(a, { f: [[0, 140], [b - a, 420]], type: 'triangle', dur: b - a + 0.1, gain: 0.16, a: (b - a) * 0.7 }); boing(vis(b), 1); k.play('buzz', b + 0.1, { f: 90, dur: 0.35, gain: 0.5 }); }
    // 5 spread
    { const a = T(14, 'spread'), b = T(14, 'apart') + 0.3; k.tone(a, { f: [[0, 600], [b - a, 300]], type: 'triangle', dur: b - a, gain: 0.1, a: (b - a) * 0.6 }); for (let x = a; x < b; x += 0.1) k.play('tock', x, { f: 1000 - (x - a) * 300, gain: 0.25, minor: true }); }
    big(vis(T(14, 'farther')));
    zap(T(15, 'bounce') - 0.4, 400, 900);
    { const t = vis(T(15, 'yellow')); zap(t, 700, 1100); bloop(t, 520, 1); }
    { const t = vis(T(15, 'orange')); zap(t, 500, 800); bloop(t, 440, 1); shimmer(t + 0.1, 0.4); }
    // 6 green -> orange, showing off
    bloop(vis(T(16, 'green')), 500, 0.9);
    k.tone(T(16, 'green') + 0.2, { f: [[0, 260], [1.4, 520]], type: 'sine', dur: 1.5, gain: 0.08, a: 1.0 }); shimmer(T(16, 'turns'), 1.2, 0.8);
    bloop(vis(T(16, 'orange')), 620, 1);
    { const c0 = T(17, 'in') - 0.1; bloop(vis(c0), 500, 0.9); for (let i = 0; i < 12; i++) k.play('tick', c0 + i * 0.12, { gain: 0.5, minor: true }); k.play('bell', T(17, 'minutes') + 0.3, { f: 'A6', gain: 0.25 }); }
    { const t = vis(T(18, 'not')); k.play('error', t, { gain: 0.5 }); }
    { const t = vis(T(18, 'showing')); k.play('impact', t, { gain: 0.45 }); boing(t + 0.05, 1); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bell(t + 0.1 + i * 0.05, n, 1.2, { dur: 1.1 })); }
    // 7 deeper layer, heat, sunscreen
    bloop(vis(T(19, 'deeper') - 0.1), 300, 0.9); pops(T(19, 'crystals'), 18, 0.03, 0.3);
    { const a = T(20, 'reflects') - 0.5; k.noise(a, { dur: 0.5, color: 'pink', filter: 'bandpass', f: [[0, 500], [0.5, 1400]], q: 1, gain: 0.12, a: 0.4 }); const t = vis(T(20, 'reflects')); k.play('slap', t, { gain: 0.5 }); bloop(t, 600, 1); }
    bloop(vis(T(20, 'heat')), 360, 0.8);
    { const t = vis(T(21, 'sunscreen')); big(t); k.play('ding', t + 0.05, { f: 'C6', gain: 0.25 }); }
    // 8 question
    bloop(vis(T(22, 'skin')), 420, 0.8);
    { const m0 = T(22, 'mood'); for (let i = 0; i < 6; i++) bloop(vis(m0 + i * 0.08), 400 + i * 60, 0.6, { minor: true }); }
    bloop(vis(T(23, 'what')), 520, 0.8, { minor: true }); bloop(vis(T(23, 'you')), 620, 0.9, { minor: true });
    { const t = vis(T(23, 'now')); boing(t, 1.3); k.play('impact', t, { gain: 0.5 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bell(t + 0.1 + i * 0.05, n, 1.4, { dur: 1.2 })); twinkle(t + 0.3, 5, 0.9, false); }
  }

  window.BEATS = PH; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
