// ================= Kawaii Anime, vertical 1080x1920: "Why don't hippos get sunburned?" =================
// Short (~55 s), 9 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A chibi hippo acts it out: red "blood sweat", hours in the sun with almost no hair, glands ooze clear goo,
// clear -> red -> orange-brown in minutes, not blood / not sweat, two pigments soak up UV (sunscreen), the red one
// stops bacteria in lab tests (handy for rival scratches), own sunscreen + antibiotic, the colour question.
// Scene changes: star / heart iris wipes; continuous moves inside scenes. Everything on twos.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  // ---------- voiceover phrases (phrases.json, Kokoro am_michael) ----------
  const PH = [
    {"s":0.25,"e":1.6,"text":"Hippos sweat red goo,","words":[["hippos",0.25],["sweat",0.73],["red",1.13],["goo",1.36]]},
    {"s":1.9,"e":3.66,"text":"and you'll never see one sunburned.","words":[["and",1.9],["youll",2.09],["never",2.41],["see",2.72],["one",2.91],["sunburned",3.09]]},
    {"s":4.21,"e":5.01,"text":"But why?","words":[["but",4.21],["why",4.61]]},
    {"s":5.56,"e":8.0,"text":"A hippo spends hours in the African sun,","words":[["a",5.56],["hippo",5.63],["spends",6.02],["hours",6.47],["in",6.86],["the",7.01],["african",7.24],["sun",7.77]]},
    {"s":8.3,"e":10.2,"text":"with almost no hair to protect it.","words":[["with",8.3],["almost",8.58],["no",9.0],["hair",9.14],["to",9.42],["protect",9.56],["it",10.06]]},
    {"s":10.75,"e":12.21,"text":"So its skin fights back.","words":[["so",10.75],["its",10.9],["skin",11.13],["fights",11.44],["back",11.9]]},
    {"s":12.76,"e":14.01,"text":"Glands under the skin","words":[["glands",12.76],["under",13.18],["the",13.53],["skin",13.73]]},
    {"s":14.31,"e":15.65,"text":"ooze a thick, clear goo.","words":[["ooze",14.31],["a",14.61],["thick",14.68],["clear",15.05],["goo",15.42]]},
    {"s":16.2,"e":17.31,"text":"Within a few minutes,","words":[["within",16.2],["a",16.59],["few",16.66],["minutes",16.85]]},
    {"s":17.61,"e":18.92,"text":"it turns bright red,","words":[["it",17.61],["turns",17.77],["bright",18.18],["red",18.67]]},
    {"s":19.22,"e":20.86,"text":"then a rusty orange-brown.","words":[["then",19.22],["a",19.53],["rusty",19.61],["orangebrown",20.0]]},
    {"s":21.41,"e":23.37,"text":"That's why people call it blood sweat.","words":[["thats",21.41],["why",21.73],["people",21.93],["call",22.32],["it",22.58],["blood",22.71],["sweat",23.04]]},
    {"s":23.92,"e":25.03,"text":"But it's not blood,","words":[["but",23.92],["its",24.16],["not",24.4],["blood",24.64]]},
    {"s":25.33,"e":26.65,"text":"and it's not really sweat.","words":[["and",25.33],["its",25.53],["not",25.73],["really",25.93],["sweat",26.32]]},
    {"s":27.2,"e":29.02,"text":"The color comes from two pigments,","words":[["the",27.2],["color",27.39],["comes",27.72],["from",28.04],["two",28.3],["pigments",28.5]]},
    {"s":29.32,"e":30.73,"text":"one red, one orange.","words":[["one",29.32],["red",29.6],["one",29.88],["orange",30.17]]},
    {"s":31.28,"e":33.79,"text":"Together, they soak up ultraviolet light,","words":[["together",31.28],["they",31.87],["soak",32.17],["up",32.46],["ultraviolet",32.61],["light",33.42]]},
    {"s":34.09,"e":35.55,"text":"like built-in sunscreen.","words":[["like",34.09],["builtin",34.38],["sunscreen",34.89]]},
    {"s":36.1,"e":37.86,"text":"And the red one does even more.","words":[["and",36.1],["the",36.32],["red",36.54],["one",36.76],["does",36.98],["even",37.27],["more",37.57]]},
    {"s":38.41,"e":39.51,"text":"In lab tests,","words":[["in",38.41],["lab",38.63],["tests",38.96]]},
    {"s":39.81,"e":42.16,"text":"it stopped nasty bacteria from growing.","words":[["it",39.81],["stopped",39.95],["nasty",40.45],["bacteria",40.81],["from",41.38],["growing",41.66]]},
    {"s":42.71,"e":45.67,"text":"Handy, when rivals leave scratches all over you.","words":[["handy",42.71],["when",43.09],["rivals",43.39],["leave",43.85],["scratches",44.23],["all",44.91],["over",45.14],["you",45.44]]},
    {"s":46.22,"e":48.17,"text":"So a hippo makes its own sunscreen,","words":[["so",46.22],["a",46.36],["hippo",46.43],["makes",46.78],["its",47.13],["own",47.34],["sunscreen",47.54]]},
    {"s":48.47,"e":50.14,"text":"and its own antibiotic.","words":[["and",48.47],["its",48.74],["own",49.0],["antibiotic",49.26]]},
    {"s":50.69,"e":52.13,"text":"If you could sweat any color,","words":[["if",50.69],["you",50.82],["could",51.01],["sweat",51.32],["any",51.63],["color",51.82]]},
    {"s":52.43,"e":53.72,"text":"which one would you pick?","words":[["which",52.43],["one",52.76],["would",52.95],["you",53.27],["pick",53.46]]}
  ];
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  // time of a spoken word (visuals lead it by 0.08 s)
  const T = (i, w, lead = 0.08) => { const f = PH[i].words.find((x) => x[0].startsWith(w)); if (!f) { console.warn('no word', i, w); return PH[i].s; } return f[1] - lead; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);

  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'ぷんぷんぬるぬるガーンガリッ!?';
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
  const toHex = (c) => '#' + c.map((v) => Math.round(H.clamp(v, 0, 255)).toString(16).padStart(2, '0')).join('');
  const mixC = (a, b, u) => [toHex(H.mix(a[0], b[0], u)), toHex(H.mix(a[1], b[1], u))];
  const HIPPO = ['#cbb5dc', '#a88fc0'], MUZZLE = ['#f8cbd8', '#e7a3b9'];
  const CLEAR = ['#f2f8ff', '#bcd6ee'], REDG = ['#ff5a76', '#d93a5c'], RUST = ['#e8874a', '#c0622c'];
  const GERM = ['#b6e57a', '#8cc95a'];
  // goo colour over time: clear -> red -> orange-brown
  const gooAt = (u1, u2) => mixC(mixC(CLEAR, REDG, u1), RUST, u2);

  // chibi hippo, front view. (x,y) = head centre; feet at y + 330*s.
  // P: t, eyes, mouth, look, sq, lift, goo (0..1 amount of droplets), gooCol, gooT (pop time), scratch (0..1), cover (0..1 goo over scratches), tint
  function hippo(ctx, x, y, s, P = {}) {
    const t = P.t || 0, col = P.col || HIPPO;
    ctx.save(); ctx.translate(x, y - (P.lift || 0)); ctx.scale(s, s);
    const sq = P.sq || [1, 1]; ctx.translate(0, 330); ctx.scale(sq[0], sq[1]); ctx.translate(0, -330);
    // legs
    for (const lx of [-150, -60, 60, 150]) cel(ctx, rrP(lx - 42, 230, 84, 100, 34), lx === -60 || lx === 60 ? col[1] : col[0], col[1], -5, -5, 4.5);
    for (const lx of [-150, -60, 60, 150]) { ctx.fillStyle = H.rgba(H.mix(col[1], C.plum, 0.25)); for (const tx of [-18, 0, 18]) ctx.fill(ellP(lx + tx, 318, 8, 6)); }
    // body
    const bodyP = ellP(0, 170, 220, 150);
    cel(ctx, bodyP, col[0], col[1], -12, -12, 5);
    ctx.save(); ctx.clip(bodyP); ctx.fillStyle = H.rgba(H.mix(col[0], '#ffffff', 0.4)); ctx.fill(ellP(0, 230, 120, 70)); ctx.restore();
    // ears
    for (const sd of [-1, 1]) { const ex = sd * 112, ey = -150 + Math.sin(t * 5 + sd) * 3; cel(ctx, ellP(ex, ey, 30, 26, sd * 0.4), col[0], col[1], -3, -3, 4.5); ctx.fillStyle = C.pink; ctx.fill(ellP(ex, ey + 2, 15, 12, sd * 0.4)); }
    // head + muzzle
    const headP = ellP(0, -50, 165, 125), muzP = ellP(0, 55, 205, 108);
    union(ctx, [headP, muzP], col[0], 5);
    ctx.save(); ctx.clip(headP); ctx.fillStyle = col[1]; ctx.fill(ellP(0, 70, 230, 150)); ctx.fillStyle = col[0]; ctx.fill(ellP(-10, -62, 160, 118)); ctx.restore();
    cel(ctx, muzP, MUZZLE[0], MUZZLE[1], -10, -10, 5);
    shine(ctx, -110, -110, 26, 14, -0.6, 0.85);
    // eyes on top of the head
    const ek = P.eyes || 'normal', look = P.look || [0, 0];
    eye(ctx, -62, -70, 26, 32, '#8a6cf0', ek, 1, look); eye(ctx, 62, -70, 26, 32, '#8a6cf0', ek, -1, look);
    // nostrils + mouth + blush
    ctx.fillStyle = C.dark; for (const sd of [-1, 1]) ctx.fill(ellP(sd * 62, 22, 16, 11, sd * 0.4));
    mouth(ctx, 0, 112, 26, P.mouth || 'smile');
    if (P.blush !== false) { blush(ctx, -140, 70, 22, 11); blush(ctx, 140, 70, 22, 11); }
    // scratches (from a rival) on the body
    const sc = H.clamp(P.scratch || 0);
    if (sc > 0) {
      ctx.save(); ctx.strokeStyle = '#d65b7a'; ctx.lineCap = 'round'; ctx.lineWidth = 9;
      for (let i = 0; i < 3; i++) { const u = H.clamp(sc * 3 - i); if (u <= 0) continue; ctx.beginPath(); ctx.moveTo(60 + i * 32, 110); ctx.lineTo(60 + i * 32 + 70 * u, 110 + 110 * u); ctx.stroke(); }
      ctx.restore();
    }
    // red sweat droplets
    const g = P.goo || 0, gc = P.gooCol || REDG;
    if (g > 0) {
      const r = H.rng(77), spots = [[-120, -120], [110, -100], [-170, 40], [175, 30], [-40, -150], [40, 120], [-150, 190], [150, 200], [-60, 240], [90, 260], [0, -10], [-100, 140]];
      spots.forEach(([dx, dy], i) => {
        const k = P.gooT != null ? pop(t, P.gooT + i * 0.05, 1.2).s : H.clamp(g * spots.length - i);
        if (k <= 0) return;
        const slide = ((t * 0.35 + r()) % 1) * 14;
        drop(ctx, dx, dy + slide, 0.55 * k, gc[0], gc[1], 3.5);
      });
    }
    const cv = H.clamp(P.cover || 0);
    if (cv > 0 && sc > 0) { ctx.save(); ctx.globalAlpha = 0.55 * cv; ctx.fillStyle = REDG[0]; for (let i = 0; i < 3; i++) ctx.fill(ellP(95 + i * 32, 160 + i * 6, 34 * cv + 1, 70 * cv + 1, -0.55)); ctx.restore(); for (let i = 0; i < 3; i++) shine(ctx, 85 + i * 32, 135 + i * 6, 6 * cv, 14 * cv, -0.55, 0.8 * cv); }
    ctx.restore();
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
  // a medic shield with a cross (antibiotic)
  function shield(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const p = new Path2D(); p.moveTo(0, -120); p.quadraticCurveTo(70, -95, 105, -95); p.quadraticCurveTo(110, 40, 0, 125); p.quadraticCurveTo(-110, 40, -105, -95); p.quadraticCurveTo(-70, -95, 0, -120); p.closePath();
    cel(ctx, p, C.mint, C.mintS, -8, -8, 5);
    cel(ctx, rrP(-18, -62, 36, 110, 10), C.white, C.creamS, -2, -2, 3.5); cel(ctx, rrP(-55, -25, 110, 36, 10), C.white, C.creamS, -2, -2, 3.5);
    ctx.fillStyle = C.white; ctx.fill(rrP(-17, -60, 34, 106, 9));
    ctx.restore();
  }
  // a gland: a round sac with a sleepy face, a duct up to the skin surface
  function gland(ctx, x, y, r, t, ek = 'happy') {
    cel(ctx, ellP(x, y, r, r * 0.85), C.pink, C.pinkS, -6, -6, 5);
    face(ctx, x, y - 4, r / 120, { eyes: ek, mouth: 'w' });
  }
  // a germ: lumpy green blob with bumps and a grumpy face
  function germ(ctx, x, y, r, t, ek = 'normal', mk = 'flat', seed = 1) {
    const bumps = [];
    for (let i = 0; i < 8; i++) { const a = i / 8 * TAU + seed; bumps.push(ellP(x + Math.cos(a) * r * 0.95, y + Math.sin(a) * r * 0.95, r * 0.24, r * 0.24)); }
    bumps.push(ellP(x, y, r, r));
    union(ctx, bumps, GERM[0], 4.5);
    ctx.save(); ctx.clip(ellP(x, y, r, r)); ctx.fillStyle = GERM[1]; ctx.fill(ellP(x + r * 0.3, y + r * 0.4, r, r)); ctx.restore();
    face(ctx, x, y - r * 0.1, r / 110, { eyes: ek, mouth: mk, blush: false, iris: '#3fb98e' });
  }
  // a chibi pigment blob
  function pigment(ctx, x, y, r, col, t, ek = 'happy', mk = 'smile') {
    const p = ellP(x, y, r, r * 0.92);
    cel(ctx, p, col[0], col[1], -r * 0.1, -r * 0.1, 5); shine(ctx, x - r * 0.45, y - r * 0.45, r * 0.2, r * 0.12, -0.6);
    face(ctx, x, y, r / 100, { eyes: ek, mouth: mk });
  }
  const HEAD_Y = 400; // headline baseline (safe below the top 150 px)
  const head = (ctx, t, t0, str, size = 112, o = {}, t1 = null, y = HEAD_Y) => ptext(ctx, t, t0, 540, y, str, size, o, t1);
  const num = { fill: C.butter, line: C.pinkD, outer: C.plum, ow: 0.08, lw: 0.16 };
  const bigNum = { fill: C.pinkD, line: C.white, outer: C.plum, ow: 0.07, lw: 0.13 };
  const HO = (fill, line) => ({ fill, line, outer: C.plum, ow: 0.08, lw: 0.2 });
  const SAVANNA = { base: '#fff3d6', dot: '#ffe7b3', acc: '#ffc4d6', kind: 'hearts' };
  const SKIN = { base: '#fff1e6', dot: '#ffe0cc', acc: '#ffd3e1', kind: 'dots' };
  const LAB = { base: '#e6f7ef', dot: '#cdeedd', acc: '#fff3b0', kind: 'stars' };
  function riverbank(ctx, y, t) {
    // water band with little waves + a mint grass mound
    const wp = rrP(-60, y + 40, 1200, 400, 80); cel(ctx, wp, C.sky, C.skyS, -6, -6, 5);
    ctx.save(); ctx.strokeStyle = C.white; ctx.lineWidth = 8; ctx.lineCap = 'round';
    for (let i = 0; i < 6; i++) { const wx = ((i * 210 + t * 30) % 1300) - 100, wy = y + 110 + (i % 2) * 60; ctx.beginPath(); ctx.moveTo(wx, wy); ctx.quadraticCurveTo(wx + 25, wy - 14, wx + 50, wy); ctx.quadraticCurveTo(wx + 75, wy + 14, wx + 100, wy); ctx.stroke(); }
    ctx.restore();
    cel(ctx, ellP(540, y + 20, 700, 90), C.mint, C.mintS, -6, -6, 5);
  }

  // ======================================== SCENES ========================================
  const SC = [];
  const scene = (first, tr, theme, seed, draw, wx = 540, wy = 1000) => SC.push({ s: first === 0 ? 0 : PS(first) - 0.5, first, tr, theme, seed, draw, wx, wy });

  // 1 HOOK: hippos sweat red goo -> never sunburned -> but why?
  scene(0, null, TH.pink, 3, (ctx, t) => {
    twinkles(ctx, W, HH, t, 21, 12, (x, y) => y > 600 && y < 1600);
    const why = T(2, 'why'), burnT = T(1, 'sunburned');
    hippo(ctx, 540, 1130, 1.25, { t, goo: 1, gooT: T(0, 'red') - 0.05, eyes: t >= why ? 'shock' : t >= burnT ? 'star' : 'normal', mouth: t >= why ? 'O' : 'smile', look: [0, -0.4], lift: bob(t, 0, 6), sq: squash(t, T(0, 'goo'), 0.12) });
    kWord(ctx, 'RED SWEAT?!', 540, HEAD_Y, 118, t, T(0, 'sweat'), 0.03, { ...HO(C.white, REDG[1]), fills: [C.white, C.white, C.white, C.white, REDG[0], REDG[0], REDG[0], REDG[0], REDG[0], C.butter, C.butter], t1: PS(1) - 0.1 });
    if (t >= PS(1) - 0.2 && t < PS(2)) {
      popIn(ctx, t, PS(1) - 0.2, 860, 640, () => sun(ctx, 0, 0, 80, t, 'normal'), 1, PS(2) - 0.15);
      ptag(ctx, t, T(1, 'sunburned'), 340, 600, 'sunburn', C.red, 64, PS(2) - 0.15);
      if (t >= T(1, 'never')) cross(ctx, 560, 590, 1.3, t, T(1, 'never'));
      head(ctx, t, T(1, 'never'), 'NEVER!', 120, HO(C.butter, C.pinkD), PS(2) - 0.15, 380);
    }
    if (t >= PS(2) - 0.1) {
      const p = pop(t, why, 1.6);
      if (p.s > 0) { ctx.save(); ctx.translate(540, 470); ctx.rotate(-0.06 + 0.04 * Math.sin(t * 14)); ctx.scale(p.sx, p.sy); kText(ctx, 'WHY?', 0, 0, 210, bigNum); ctx.restore(); impactLines(ctx, 540, 400, 230, t, why, 14, C.pinkD); }
      for (const [tt, x, y, sz] of [[T(2, 'but'), 170, 720, 120], [why + 0.1, 910, 720, 110]]) { const q = pop(t, tt, 1.4); if (q.s <= 0) continue; ctx.save(); ctx.translate(x, y); ctx.rotate(0.14 * Math.sin(t * 9 + x)); ctx.scale(q.sx, q.sy); kText(ctx, '?', 0, 0, sz, HO(C.butter, C.pinkD)); ctx.restore(); }
      if (t >= why) sweat(ctx, 760, 900, pop(t, why).s * 1.4, 0.3);
    }
  });

  // 2 THE SAVANNA SUN: hours in the sun, almost no hair, skin fights back
  scene(3, 'star', SAVANNA, 5, (ctx, t) => {
    twinkles(ctx, W, HH, t, 31, 8, (x, y) => y > 500 && y < 1700);
    riverbank(ctx, 1470, t);
    const fb = T(5, 'fights'), hot = t >= T(3, 'sun') && t < fb;
    hippo(ctx, 540, 1140, 1.0, { t, eyes: t >= fb ? 'star' : hot ? 'squeeze' : 'normal', mouth: t >= fb ? 'w' : hot ? 'wobble' : 'smile', look: [0.3, -0.5], lift: bob(t, 0, 5), sq: squash(t, fb, 0.18) });
    popIn(ctx, t, T(3, 'sun') - 0.1, 830, 690, () => sun(ctx, 0, 0, 100, t, hot ? 'happy' : 'normal'), 1);
    if (t >= T(3, 'sun')) for (let i = 0; i < 3; i++) { const u = H.ease.out(prog(t, T(3, 'sun') + i * 0.15, T(3, 'sun') + i * 0.15 + 0.4)); dotted(ctx, [[760 - i * 40, 800 + i * 30], [600 - i * 70, 940 + i * 20]], u, C.butterS, 7, 22, 1); }
    // hours: a clock + label
    if (t < PS(4) + 0.1) { popIn(ctx, t, T(3, 'hours') - 0.1, 230, 680, () => clock(ctx, 0, 0, 95, (t - T(3, 'hours')) * 5), 1.3, PS(4)); ptext(ctx, t, T(3, 'hours'), 230, 860, 'hours', 70, num, PS(4)); }
    head(ctx, t, T(3, 'african'), 'African sun', 108, HO(C.butter, C.pinkD), PS(4) - 0.1);
    // almost no hair
    if (t >= PS(4) - 0.1 && t < fb) {
      head(ctx, t, T(4, 'almost'), 'almost no hair', 100, HO(C.white, C.lavD), fb - 0.1);
      ptag(ctx, t, T(4, 'hair'), 260, 700, 'fur', C.butter, 60, fb - 0.1);
      if (t >= T(4, 'no')) cross(ctx, 400, 690, 1.0, t, T(4, 'hair'));
      // a single wispy hair strand on the head
      ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(540, 1140 - 172); ctx.quadraticCurveTo(560, 1140 - 215, 530, 1140 - 230); ctx.stroke(); ctx.restore();
      if (t >= T(4, 'protect')) sweat(ctx, 700, 960, pop(t, T(4, 'protect')).s * 1.2, 0.3);
    }
    if (t >= fb) { head(ctx, t, fb, 'FIGHTS BACK!', 112, HO(C.butter, C.red)); kana(ctx, 'ぷんぷん', 850, 900, 66, 0.15, pop(t, fb + 0.1).s, C.pink); impactLines(ctx, 540, 1000, 300, t, fb, 12, C.red); }
  });

  // 3 UNDER THE SKIN: glands ooze a thick, clear goo
  scene(6, 'heart', SKIN, 7, (ctx, t) => {
    twinkles(ctx, W, HH, t, 41, 8, (x, y) => y > 500 && y < 1700);
    const ps = pop(t, PS(6) - 0.2, 0.8);
    ctx.save(); ctx.translate(540, 1100); ctx.scale(Math.max(0.01, ps.sx), Math.max(0.01, ps.sy)); ctx.translate(-540, -1100);
    // skin surface band + dermis
    const derm = rrP(90, 800, 900, 800, 70); cel(ctx, derm, '#ffe9ef', C.pinkS, -8, -8, 5);
    const surf = rrP(70, 720, 940, 130, 50); cel(ctx, surf, HIPPO[0], HIPPO[1], -6, -6, 5);
    const GX = [260, 540, 820];
    GX.forEach((gx, i) => {
      const gu = pop(t, T(6, 'glands') + i * 0.1, 1.2).s;
      if (gu <= 0) return;
      // duct
      tube(ctx, [[gx, 1330], [gx + Math.sin(i) * 20, 1050], [gx, 800]], 26 * gu, C.pink, C.pinkS, false);
      ctx.save(); ctx.translate(gx, 1380); ctx.scale(gu, gu); gland(ctx, 0, 0, 110, t, t >= T(7, 'ooze') ? 'squeeze' : 'happy'); ctx.restore();
    });
    // clear goo beads up out of the pores
    const oz = T(7, 'ooze');
    if (t >= oz) GX.forEach((gx, i) => {
      const u = H.ease.back(prog(t, oz + i * 0.12, oz + i * 0.12 + 0.6));
      // little beads travelling up the duct
      for (let b = 0; b < 3; b++) { const v = ((t - oz) * 0.9 + b / 3 + i * 0.2) % 1; ctx.fillStyle = 'rgba(255,255,255,0.95)'; ctx.fill(ellP(gx, 1300 - v * 480, 11, 11)); ol(ctx, ellP(gx, 1300 - v * 480, 11, 11), 3, C.skyS); }
      ctx.save(); ctx.translate(gx, 700); ctx.scale(u * 1.6, u * 1.6); drop(ctx, 0, -20, 1, CLEAR[0], CLEAR[1], 4); ctx.restore();
    });
    ctx.restore();
    ptag(ctx, t, T(6, 'skin'), 860, 1660 - 30, 'hippo skin', HIPPO[0], 46);
    head(ctx, t, T(6, 'glands'), 'GLANDS', 124, HO(C.white, C.pinkD), T(7, 'clear') - 0.1);
    if (t >= T(7, 'thick')) kana(ctx, 'ぬるぬる', 200, 560, 62, -0.15, pop(t, T(7, 'thick')).s, C.sky);
    head(ctx, t, T(7, 'clear'), 'clear goo', 124, HO(CLEAR[0], C.skyD));
  });

  // 4 COLOUR CHANGE: within a few minutes -> bright red -> rusty orange-brown
  scene(8, 'star', TH.lav, 9, (ctx, t) => {
    twinkles(ctx, W, HH, t, 51, 12, (x, y) => y > 560 && y < 1600);
    const rT = T(9, 'red'), oT = T(10, 'rusty');
    const u1 = H.ease.inOut(prog(t, rT - 0.15, rT + 0.35)), u2 = H.ease.inOut(prog(t, oT - 0.1, T(10, 'orange') + 0.5));
    const gc = gooAt(u1, u2), sq = t >= oT ? squash(t, oT, 0.2) : squash(t, rT, 0.22);
    ctx.save(); ctx.translate(540, 1130 + bob(t, 0, 10)); ctx.scale(sq[0], sq[1]);
    drop(ctx, 0, -60, 9.5, gc[0], gc[1], 0.6);
    face(ctx, 0, 100, 1.5, { eyes: t >= oT ? 'happy' : t >= rT ? 'star' : 'normal', mouth: t >= rT ? 'O' : 'smile' });
    ctx.restore();
    // clock: a few minutes
    if (t < PS(9) + 0.1) { popIn(ctx, t, T(8, 'few') - 0.1, 540, 560, () => clock(ctx, 0, 0, 120, (t - T(8, 'few')) * 6), 1.3, PS(9) - 0.05); ptext(ctx, t, T(8, 'minutes'), 540, 800, 'a few minutes', 76, num, PS(9) - 0.05); }
    if (t >= rT - 0.1) { kWord(ctx, 'BRIGHT RED!', 540, HEAD_Y, 124, t, T(9, 'bright'), 0.03, { ...HO(REDG[0], C.white), t1: PS(10) - 0.05 }); impactLines(ctx, 540, 1100, 380, t, rT, 14, REDG[1]); }
    if (t >= PS(10) - 0.1) { kWord(ctx, 'rusty', 540, HEAD_Y - 40, 104, t, T(10, 'rusty'), 0.03, HO(C.butter, RUST[1])); kWord(ctx, 'orange-brown', 540, HEAD_Y + 90, 100, t, T(10, 'orange'), 0.025, HO(RUST[0], C.white)); }
    if (t >= rT) for (let i = 0; i < 4; i++) sparkle(ctx, [190, 900, 210, 880][i], [960, 1000, 1500, 1460][i], (18 + 8 * Math.sin(t * 8 + i)) * pop(t, rT + i * 0.07).s, i % 2 ? C.white : C.butter, 0, 3.5);
  });

  // 5 "BLOOD SWEAT" ... not blood, not really sweat
  scene(11, 'heart', TH.butter, 11, (ctx, t) => {
    twinkles(ctx, W, HH, t, 61, 10, (x, y) => y > 560 && y < 1700);
    const nb = T(12, 'not'), ns = T(13, 'sweat');
    hippo(ctx, 540, 1230, 0.9, { t, goo: 1, gooCol: REDG, eyes: t >= ns + 0.1 ? 'happy' : t >= nb ? 'normal' : 'normal', mouth: t >= ns + 0.1 ? 'w' : 'smile', look: [0, -0.5], lift: bob(t, 0, 5) });
    kWord(ctx, 'BLOOD', 540, HEAD_Y - 20, 132, t, T(11, 'blood'), 0.04, HO(REDG[0], C.white));
    kWord(ctx, 'SWEAT', 540, HEAD_Y + 120, 132, t, T(11, 'sweat'), 0.04, HO(C.sky, C.skyD));
    if (t >= T(11, 'call')) kana(ctx, '!?', 900, 300, 90, 0.15, pop(t, T(11, 'call')).s, C.butter);
    // blood drop: no; sweat drop: no
    popIn(ctx, t, T(12, 'blood') - 0.1, 220, 800, () => drop(ctx, 0, 0, 2.6, '#e8364f', '#b8253c', 2), 1.3);
    if (t >= T(12, 'blood')) { ptag(ctx, t, T(12, 'blood'), 220, 950, 'blood', C.white, 46); cross(ctx, 300, 760, 1.0, t, T(12, 'blood') + 0.05); }
    popIn(ctx, t, ns - 0.1, 860, 800, () => drop(ctx, 0, 0, 2.6, C.sky, C.skyS, 2), 1.3);
    if (t >= ns) { ptag(ctx, t, ns, 860, 950, 'sweat', C.white, 46); cross(ctx, 940, 760, 1.0, t, ns + 0.05); }
  });

  // 6 TWO PIGMENTS: one red, one orange -> soak up UV -> built-in sunscreen
  scene(14, 'star', TH.sky, 13, (ctx, t) => {
    twinkles(ctx, W, HH, t, 71, 10, (x, y) => y > 560 && y < 1700);
    const uvT = T(16, 'ultraviolet'), ssT = T(17, 'sunscreen'), tog = PS(16) - 0.1;
    const mv = H.ease.inOut(prog(t, tog, tog + 0.6));
    const ry = H.lerp(1000, 1320, mv), lx = H.lerp(310, 400, mv), rx = H.lerp(770, 680, mv);
    // the pigment shield (both pigments hold hands under it)
    if (mv > 0) { const sw = 820 * H.ease.back(mv); const sp = rrP(540 - sw / 2, 1110, Math.max(1, sw), 70, 35); ctx.save(); const g = ctx.createLinearGradient(130, 0, 950, 0); g.addColorStop(0, REDG[0]); g.addColorStop(1, '#ffb070'); ctx.fillStyle = g; ctx.fill(sp); ctx.restore(); ol(ctx, sp, 5); shine(ctx, 540 - sw * 0.3, 1130, sw * 0.12, 8, 0); }
    const absorbed = t >= T(16, 'soak');
    if (t >= T(15, 'red') - 0.1) { const p = pop(t, T(15, 'red') - 0.1, 1.2); ctx.save(); ctx.translate(lx, ry); ctx.scale(p.sx, p.sy); pigment(ctx, 0, 0, 150, REDG, t, t >= ssT ? 'star' : 'happy', 'smile'); ctx.restore(); }
    if (t >= T(15, 'orange') - 0.1) { const p = pop(t, T(15, 'orange') - 0.1, 1.2); ctx.save(); ctx.translate(rx, ry); ctx.scale(p.sx, p.sy); pigment(ctx, 0, 0, 150, ['#ffb070', '#f07f4a'], t, t >= ssT ? 'star' : 'happy', 'smile'); ctx.restore(); }
    if (t < tog) {
      const p = pop(t, T(14, 'two'), 1.6); if (p.s > 0) { ctx.save(); ctx.translate(540, 560); ctx.scale(p.sx * popOut(t, tog - 0.1), p.sy * popOut(t, tog - 0.1)); kText(ctx, '2', 0, 0, 240, bigNum); ctx.restore(); }
      head(ctx, t, T(14, 'pigments'), 'pigments', 104, HO(C.white, C.lavD), tog - 0.1, 740);
      ptag(ctx, t, T(15, 'red'), 310, 1250, 'red', C.pink, 56, tog - 0.1);
      ptag(ctx, t, T(15, 'orange'), 770, 1250, 'orange', C.butter, 56, tog - 0.1);
    }
    // the sun shoots UV rays; they stop at the pigment shield
    if (t >= tog) {
      popIn(ctx, t, tog, 540, 760, () => sun(ctx, 0, 0, 100, t, absorbed ? 'normal' : 'happy'), 1);
      [[-260, 0.0], [0, 0.12], [260, 0.24]].forEach(([dx, dl], i) => {
        const u = H.ease.out(prog(t, uvT - 0.5 + dl, uvT + dl));
        ray(ctx, [540 + dx * 0.4, 880], [540 + dx, 1090], u, C.lav, C.lavD, 16, 3, t);
      });
      if (t >= uvT) { ptag(ctx, t, uvT, 860, 560, 'UV', C.lav, 64); for (let i = 0; i < 3; i++) poof(ctx, 540 + [-260, 0, 260][i], 1100, t, uvT + 0.3 + i * 0.12, 40, C.lav); }
      head(ctx, t, T(16, 'soak'), 'soak up UV!', 104, HO(C.white, C.lavD), ssT - 0.15, 400);
    }
    if (t >= ssT - 0.15) { popIn(ctx, t, ssT - 0.1, 190, 640, () => bottle(ctx, 0, 0, 0.9), 1.4); head(ctx, t, ssT, 'SUNSCREEN', 112, HO(C.butter, C.pinkD), null, 400); impactLines(ctx, 190, 640, 150, t, ssT, 12, C.pinkD); }
  });

  // 7 LAB TESTS: the red pigment stops nasty bacteria from growing
  scene(18, 'heart', LAB, 15, (ctx, t) => {
    twinkles(ctx, W, HH, t, 81, 10, (x, y) => y > 560 && y < 1700);
    const stp = T(20, 'stopped'), grw = T(20, 'growing');
    // petri dish
    const dish = ellP(540, 1180, 430, 300);
    cel(ctx, ellP(540, 1205, 440, 305), C.skyS, C.skyS, 0, 0, 5);
    ctx.save(); ctx.fillStyle = '#eef8ff'; ctx.fill(dish); ctx.clip(dish); ctx.fillStyle = 'rgba(255,240,170,0.55)'; ctx.fill(ellP(540, 1200, 400, 270)); ctx.restore(); ol(ctx, dish, 5);
    shine(ctx, 280, 1000, 60, 16, -0.4, 0.9);
    // germs multiply until the red pigment arrives
    const G = [[540, 1170], [380, 1120], [700, 1110], [450, 1290], [640, 1280], [300, 1230], [790, 1220], [540, 1030]];
    const nShow = t < PS(19) ? 1 + Math.floor(H.clamp((t - PS(18)) / 1.0) * 2) : Math.min(G.length, 3 + Math.floor(H.clamp((t - PS(19)) / (stp - PS(19))) * 5));
    const stopped = t >= stp;
    G.forEach(([gx, gy], i) => {
      if (i >= nShow) return;
      const p = pop(t, i < 3 ? PS(18) - 0.3 + i * 0.4 : PS(19) + (i - 3) * (stp - PS(19)) / 5, 1.3);
      const shrink = stopped ? 1 - 0.25 * H.ease.out(prog(t, stp, stp + 0.5)) : 1;
      ctx.save(); ctx.translate(gx, gy + bob(t, i, 4)); ctx.scale(p.sx * shrink, p.sy * shrink);
      germ(ctx, 0, 0, 62, t, stopped ? 'swirl' : 'normal', stopped ? 'wobble' : 'flat', i);
      ctx.restore();
    });
    // the red pigment drops in
    const dIn = T(18, 'red');
    if (t >= dIn - 0.3) { const fy = H.lerp(560, 860, H.ease.out(prog(t, dIn - 0.3, dIn + 0.3))); pigment(ctx, 540, fy, 110, REDG, t, t >= stp ? 'star' : 'normal', 'smile'); }
    head(ctx, t, T(18, 'more'), 'even more!', 104, HO(C.white, C.pinkD), T(19, 'lab') - 0.1, 400);
    if (t >= T(19, 'lab') - 0.1 && t < stp) { head(ctx, t, T(19, 'lab'), 'LAB TESTS', 120, HO(C.mint, C.mintD), stp - 0.05, 400); }
    if (t >= T(20, 'bacteria')) ptag(ctx, t, T(20, 'bacteria'), 820, 1560, 'bacteria', GERM[0], 50);
    if (t >= stp) { head(ctx, t, stp, 'STOPPED!', 132, HO(C.butter, C.red), null, 400); impactLines(ctx, 540, 1180, 440, t, stp, 14, C.red); kana(ctx, 'ガーン', 220, 1520, 70, -0.15, pop(t, stp + 0.15).s, GERM[0]); }
    if (t >= grw) for (let i = 0; i < 4; i++) sparkle(ctx, [160, 920, 180, 900][i], [880, 900, 1520, 1500][i], (18 + 8 * Math.sin(t * 8 + i)) * pop(t, grw + i * 0.07).s, i % 2 ? C.white : C.butter, 0, 3.5);
  });

  // 8 RIVALS: scratches all over you, and the red goo covers them
  scene(21, 'star', SAVANNA, 17, (ctx, t) => {
    twinkles(ctx, W, HH, t, 91, 8, (x, y) => y > 560 && y < 1700);
    riverbank(ctx, 1500, t);
    const rv = T(21, 'rivals'), scT = T(21, 'scratches'), ov = T(21, 'all');
    const rx = H.lerp(1400, 830, H.ease.out(prog(t, rv - 0.3, rv + 0.3)));
    hippo(ctx, rx, 1180, 0.75, { t, col: ['#b8c6e8', '#8c9fd0'], eyes: 'squeeze', mouth: 'O', lift: bob(t, 2, 5) });
    hippo(ctx, 330, 1180, 0.85, { t, eyes: t >= scT && t < ov + 0.3 ? 'shock' : t >= ov + 0.3 ? 'happy' : 'normal', mouth: t >= scT && t < ov + 0.3 ? 'O' : 'smile', look: [0.6, 0], scratch: prog(t, scT - 0.1, scT + 0.4), cover: H.ease.out(prog(t, ov, ov + 0.6)), goo: 1, lift: bob(t, 0, 5), sq: squash(t, scT, 0.12) });
    if (t >= rv) { const p = pop(t, rv, 1.5); ctx.save(); ctx.translate(590, 860); ctx.rotate(-0.12 + 0.05 * Math.sin(t * 20)); ctx.scale(p.sx, p.sy); kText(ctx, '!?', 0, 0, 120, HO(C.red, C.white)); ctx.restore(); }
    ptag(ctx, t, rv, 830, 1560, 'rival', C.lav, 52);
    head(ctx, t, T(21, 'handy'), 'HANDY!', 128, HO(C.butter, C.pinkD), scT - 0.1, 400);
    if (t >= scT) { head(ctx, t, scT, 'scratches?', 116, HO(C.white, C.red), ov + 0.5, 400); kana(ctx, 'ガリッ', 560, 1060, 66, 0.2, pop(t, scT).s, C.pink); }
    if (t >= ov + 0.5) { head(ctx, t, ov + 0.5, 'goo to the rescue', 84, HO(REDG[0], C.white), null, 400); }
  });

  // 9 PAYOFF + QUESTION: its own sunscreen and antibiotic -> what colour would YOU sweat?
  scene(22, 'heart', TH.mint, 19, (ctx, t) => {
    twinkles(ctx, W, HH, t, 101, 12, (x, y) => y > 600 && y < 1700);
    const q0 = PS(24) - 0.15, pk = T(25, 'pick');
    const cols = [REDG, [C.sky, C.skyS], [C.mintD, '#2fa078'], [C.butterD, C.butterS], [C.lavD, '#6f55c9'], [C.pinkD, '#e2527f']];
    const cu = t < T(24, 'color') ? 0 : (t - T(24, 'color')) * 1.8, i0 = Math.floor(cu) % cols.length, f = H.smooth(0.55, 1, cu % 1);
    const gc = t < T(24, 'color') ? REDG : mixC(cols[i0], cols[(i0 + 1) % cols.length], f);
    hippo(ctx, 540, 1180, 1.05, { t, goo: 1, gooCol: gc, eyes: t >= pk ? 'star' : t >= q0 ? 'normal' : 'happy', mouth: t >= pk ? 'O' : 'smile', look: [0, -0.4], lift: bob(t, 0, 7), sq: t >= pk ? squash(t, pk, 0.2) : squash(t, T(23, 'antibiotic'), 0.15) });
    if (t < q0) {
      popIn(ctx, t, T(22, 'sunscreen') - 0.1, 190, 760, () => bottle(ctx, 0, 0, 0.85), 1.4, q0 - 0.1);
      popIn(ctx, t, T(23, 'antibiotic') - 0.1, 890, 760, () => shield(ctx, 0, 0, 0.95), 1.4, q0 - 0.1);
      kWord(ctx, 'own SUNSCREEN', 540, HEAD_Y - 30, 96, t, T(22, 'own'), 0.025, { ...HO(C.butter, C.pinkD), t1: q0 - 0.1 });
      kWord(ctx, '+ ANTIBIOTIC', 540, HEAD_Y + 100, 96, t, T(23, 'own'), 0.025, { ...HO(C.mint, C.mintD), t1: q0 - 0.1 });
      if (t >= T(23, 'antibiotic')) { impactLines(ctx, 890, 760, 140, t, T(23, 'antibiotic'), 12, C.mintD); }
    } else {
      kWord(ctx, 'What color', 540, 380, 104, t, T(24, 'if'), 0.03, { fill: C.white, line: C.lavD, track: 2 });
      kWord(ctx, 'would YOU sweat?', 540, 530, 92, t, T(24, 'sweat') - 0.05, 0.03, { ...HO(C.butter, C.pinkD), track: 2 });
      cols.forEach((c, i) => popIn(ctx, t, T(24, 'color') + i * 0.08, 140 + i * 160, 700, () => drop(ctx, 0, 0, 1.5, c[0], c[1], 3), 1.3));
      if (t >= pk) { impactLines(ctx, 540, 1150, 360, t, pk + 0.05, 14, C.pinkD); confetti(ctx, t, pk + 0.05, 540, 900, 50, 9, 1.2); ptag(ctx, t, pk + 0.25, 540, 1590, 'comment below!', C.pink, 52); }
    }
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
    { const t = vis(T(0, 'sweat')); bloop(t, 420, 0.9); }
    { const t = vis(T(0, 'red') - 0.05); for (let i = 0; i < 12; i++) bloop(t + i * 0.05, 500 + (i % 5) * 60, 0.5, { minor: true }); }
    bloop(vis(PS(1) - 0.2), 380, 0.7, { minor: true }); bloop(vis(T(1, 'sunburned')), 520, 0.8);
    { const t = vis(T(1, 'never')); k.play('error', t, { gain: 0.6 }); k.play('thud', t, { f: 120, gain: 0.35 }); }
    bloop(vis(T(2, 'but')), 360, 0.8); { const t = vis(T(2, 'why')); big(t); aww(t + 0.15); }
    // 2 savanna
    k.play('whoosh', T(3, 'sun') - 0.3, { dur: 0.5, gain: 0.5 }); { const t = vis(T(3, 'sun') - 0.1); bloop(t, 460, 0.9); shimmer(t + 0.1, 0.5, 0.7); }
    { const c0 = T(3, 'hours') - 0.1; bloop(vis(c0), 500, 0.9); for (let i = 0; i < 10; i++) k.play('tick', c0 + i * 0.13, { gain: 0.45, minor: true }); }
    bloop(vis(T(3, 'african')), 560, 0.8);
    bloop(vis(T(4, 'almost')), 420, 0.8); bloop(vis(T(4, 'hair')), 520, 0.8); { const t = vis(T(4, 'hair')); k.play('error', t + 0.05, { gain: 0.45 }); }
    { const t = vis(T(5, 'fights')); k.play('impact', t, { gain: 0.45 }); boing(t + 0.05, 1); }
    // 3 glands
    k.play('whoosh', PS(6) - 0.3, { dur: 0.5, gain: 0.5 });
    for (let i = 0; i < 3; i++) bloop(vis(T(6, 'glands') + i * 0.1), 360 + i * 80, 0.8);
    { const a = T(7, 'ooze'); for (let i = 0; i < 3; i++) { k.tone(a + i * 0.12, { f: [[0, 200], [0.5, 520]], type: 'sine', dur: 0.55, gain: 0.12, a: 0.3, minor: true }); bloop(a + i * 0.12 + 0.5, 700, 0.7, { minor: true }); } }
    { const t = vis(T(7, 'clear')); bell(t, 'E6', 1); twinkle(t + 0.1, 4, 0.8); }
    // 4 colour change
    { const c0 = T(8, 'few') - 0.1; bloop(vis(c0), 500, 0.9); for (let i = 0; i < 10; i++) k.play('tick', c0 + i * 0.12, { gain: 0.45, minor: true }); k.play('bell', T(8, 'minutes') + 0.4, { f: 'A6', gain: 0.22 }); }
    { const t = vis(T(9, 'red')); big(t); k.play('success', t + 0.05, { gain: 0.3 }); }
    { const t = vis(T(10, 'rusty')); boing(t, 0.9); k.tone(t, { f: [[0, 520], [1.0, 300]], type: 'triangle', dur: 1.0, gain: 0.08, a: 0.5, minor: true }); bloop(vis(T(10, 'orange')), 440, 0.9); }
    // 5 blood sweat
    { const t = vis(T(11, 'blood')); k.play('stamp', t, { gain: 0.35 }); bloop(vis(T(11, 'sweat')), 560, 1); bloop(vis(T(11, 'call')), 640, 0.7, { minor: true }); }
    bloop(vis(T(12, 'blood') - 0.1), 400, 0.8); { const t = vis(T(12, 'blood') + 0.05); k.play('error', t, { gain: 0.45 }); }
    bloop(vis(T(13, 'sweat') - 0.1), 500, 0.8); { const t = vis(T(13, 'sweat') + 0.05); k.play('error', t, { gain: 0.45 }); }
    // 6 pigments
    big(vis(T(14, 'two'))); bloop(vis(T(14, 'pigments')), 520, 0.8);
    bloop(vis(T(15, 'red') - 0.1), 440, 1); bloop(vis(T(15, 'orange') - 0.1), 560, 1);
    { const a = PS(16) - 0.1; k.play('swish', a, { gain: 0.5 }); k.tone(a, { f: [[0, 260], [0.6, 520]], type: 'triangle', dur: 0.6, gain: 0.08, a: 0.4 }); }
    for (let i = 0; i < 3; i++) zap(T(16, 'ultraviolet') - 0.5 + i * 0.12, 500, 1300);
    { const t = vis(T(16, 'ultraviolet')); bloop(t, 600, 1); for (let i = 0; i < 3; i++) k.play('pop', t + 0.3 + i * 0.12, { f: 500, gain: 0.35, minor: true }); }
    bloop(vis(T(16, 'soak')), 480, 0.8);
    { const t = vis(T(17, 'sunscreen')); big(t); k.play('ding', t + 0.05, { f: 'C6', gain: 0.25 }); }
    // 7 lab
    pops(PS(18) - 0.3, 3, 0.4, 0.3); bloop(vis(T(18, 'more')), 520, 0.8);
    k.play('whoosh', T(18, 'red') - 0.3, { dur: 0.4, gain: 0.4 }); k.play('slap', T(18, 'red') + 0.3, { gain: 0.35 });
    bloop(vis(T(19, 'lab')), 600, 0.9); pops(PS(19), 5, (T(20, 'stopped') - PS(19)) / 5, 0.3);
    bloop(vis(T(20, 'bacteria')), 360, 0.7, { minor: true });
    { const t = vis(T(20, 'stopped')); k.play('impact', t, { gain: 0.45 }); aww(t + 0.2); }
    twinkle(vis(T(20, 'growing')), 4, 0.8);
    // 8 rivals
    k.play('whoosh', T(21, 'rivals') - 0.3, { dur: 0.6, gain: 0.5 }); { const t = vis(T(21, 'rivals')); k.play('thud', t, { f: 120, gain: 0.45 }); }
    bloop(vis(T(21, 'handy')), 520, 0.9);
    { const t = T(21, 'scratches'); for (let i = 0; i < 3; i++) k.play('swish', t + i * 0.12, { gain: 0.5, dur: 0.12 }); }
    { const t = vis(T(21, 'all') + 0.5); k.play('success', t, { gain: 0.3 }); twinkle(t + 0.1, 4, 0.8); }
    // 9 payoff + question
    { const t = vis(T(22, 'sunscreen') - 0.1); bloop(t, 520, 1); }
    { const t = vis(T(23, 'antibiotic') - 0.1); big(t); }
    bloop(vis(T(24, 'if')), 520, 0.8, { minor: true });
    { const c0 = T(24, 'color'); for (let i = 0; i < 6; i++) bloop(vis(c0 + i * 0.08), 400 + i * 60, 0.6, { minor: true }); }
    { const t = vis(T(25, 'pick')); boing(t, 1.3); k.play('impact', t, { gain: 0.5 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bell(t + 0.1 + i * 0.05, n, 1.4, { dur: 1.2 })); twinkle(t + 0.3, 5, 0.9, false); }
  }

  window.BEATS = PH; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
