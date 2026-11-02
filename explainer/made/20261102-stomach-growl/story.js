// ================= Kawaii Anime, vertical 1080x1920: "Why does your stomach growl?" =================
// Short (~54 s), 9 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A chibi stomach acts it out: it growls every couple of hours until you eat, the gut is a muscle tube squeezing in
// waves (peristalsis) about 3 times a minute in the stomach, food muffles the sound but an empty gut is gas and air so
// it echoes, the cleaning wave (migrating motor complex) sweeps leftovers and bacteria down the gut for 10-20 minutes
// every 1-2 hours until you eat, the Greeks named it borborygmi (rumbling), takeaway: your gut taking out the trash.
// Scene changes: star / heart iris wipes; continuous moves inside scenes. Everything on twos.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  // ---------- voiceover phrases (phrases.json, Kokoro am_michael) ----------
  const PH = [
    {"s":0.25,"e":3.74,"text":"Your empty stomach growls every two hours until you eat.","words":[["your",0.25],["empty",0.55],["stomach",0.93],["growls",1.46],["every",1.92],["two",2.3],["hours",2.53],["until",2.9],["you",3.28],["eat",3.51]]},
    {"s":4.29,"e":5.51,"text":"But why won't it stop?","words":[["but",4.29],["why",4.52],["wont",4.75],["it",5.05],["stop",5.2]]},
    {"s":6.06,"e":8.09,"text":"Your gut is one long muscle tube,","words":[["your",6.06],["gut",6.37],["is",6.61],["one",6.76],["long",7.0],["muscle",7.31],["tube",7.78]]},
    {"s":8.39,"e":10.28,"text":"and its walls squeeze in waves.","words":[["and",8.39],["its",8.62],["walls",8.84],["squeeze",9.22],["in",9.75],["waves",9.9]]},
    {"s":10.83,"e":12.35,"text":"That's called peristalsis.","words":[["thats",10.83],["called",11.18],["peristalsis",11.59]]},
    {"s":12.9,"e":15.34,"text":"They push food, liquid and gas along,","words":[["they",12.9],["push",13.23],["food",13.57],["liquid",13.91],["and",14.41],["gas",14.66],["along",14.92]]},
    {"s":15.64,"e":18.04,"text":"about three squeezes a minute in your stomach.","words":[["about",15.64],["three",15.95],["squeezes",16.27],["a",16.77],["minute",16.84],["in",17.22],["your",17.34],["stomach",17.59]]},
    {"s":18.59,"e":20.89,"text":"After a meal, food muffles the sound.","words":[["after",18.59],["a",18.98],["meal",19.06],["food",19.38],["muffles",19.7],["the",20.26],["sound",20.5]]},
    {"s":21.44,"e":23.83,"text":"But empty? It's mostly gas and air,","words":[["but",21.44],["empty",21.72],["its",22.18],["mostly",22.45],["gas",23.0],["and",23.28],["air",23.55]]},
    {"s":24.13,"e":26.38,"text":"so every squeeze echoes like a drum.","words":[["so",24.13],["every",24.28],["squeeze",24.67],["echoes",25.21],["like",25.68],["a",25.99],["drum",26.07]]},
    {"s":26.93,"e":28.54,"text":"When you've been empty a while,","words":[["when",26.93],["youve",27.2],["been",27.53],["empty",27.8],["a",28.14],["while",28.21]]},
    {"s":28.84,"e":30.51,"text":"a big cleaning wave kicks in.","words":[["a",28.84],["big",28.91],["cleaning",29.13],["wave",29.71],["kicks",30.0],["in",30.37]]},
    {"s":31.06,"e":33.24,"text":"It sweeps leftover food and bacteria","words":[["it",31.06],["sweeps",31.2],["leftover",31.62],["food",32.19],["and",32.47],["bacteria",32.68]]},
    {"s":33.54,"e":34.68,"text":"down the whole gut.","words":[["down",33.54],["the",33.84],["whole",34.07],["gut",34.45]]},
    {"s":35.23,"e":37.28,"text":"It rumbles for ten to twenty minutes,","words":[["it",35.23],["rumbles",35.36],["for",35.84],["ten",36.05],["to",36.25],["twenty",36.39],["minutes",36.8]]},
    {"s":37.58,"e":39.94,"text":"then comes back every one to two hours,","words":[["then",37.58],["comes",37.89],["back",38.27],["every",38.57],["one",38.95],["to",39.18],["two",39.33],["hours",39.56]]},
    {"s":40.24,"e":41.48,"text":"until you eat again.","words":[["until",40.24],["you",40.63],["eat",40.86],["again",41.1]]},
    {"s":42.03,"e":44.19,"text":"The ancient Greeks called it borborygmi,","words":[["the",42.03],["ancient",42.22],["greeks",42.67],["called",43.05],["it",43.43],["borborygmi",43.55]]},
    {"s":44.49,"e":45.7,"text":"which means rumbling.","words":[["which",44.49],["means",44.83],["rumbling",45.16]]},
    {"s":46.25,"e":48.14,"text":"So that growl isn't just hunger.","words":[["so",46.25],["that",46.4],["growl",46.71],["isnt",47.08],["just",47.39],["hunger",47.69]]},
    {"s":48.69,"e":50.52,"text":"It's your gut taking out the trash.","words":[["its",48.69],["your",48.89],["gut",49.16],["taking",49.37],["out",49.77],["the",49.98],["trash",50.18]]},
    {"s":51.07,"e":53.46,"text":"When did your stomach growl at the worst moment?","words":[["when",51.07],["did",51.32],["your",51.5],["stomach",51.74],["growl",52.17],["at",52.48],["the",52.6],["worst",52.79],["moment",53.09]]},
  ];
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  // time of a spoken word (visuals lead it by 0.08 s)
  const T = (i, w, lead = 0.08) => { const f = PH[i].words.find((x) => x[0].startsWith(w)); if (!f) { console.warn('no word', i, w); return PH[i].s; } return f[1] - lead; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);

  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'ぐ〜ゴロゴロもぐもぐピカピカしーん!?~';
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

  // ======================================== CHARACTERS ========================================
  const W = W0, HH = H0;
  const HO = (fill, line) => ({ fill, line, outer: C.plum, ow: 0.08, lw: 0.2 });
  const GUTC = ['#ffc9b5', '#f29e86'];          // gut wall: warm peach-pink
  const FOODS = [[C.butter, C.butterS], [C.brown, C.brownS], [C.mint, C.mintS], [C.peach, C.peachS]];

  // union fill with one cel tone: outline every sub-shape, fill shade, then base shifted up-left inside the union
  function celU(ctx, paths, base, shade, dx = -10, dy = -10, w = 4.5) {
    ctx.save(); ctx.lineJoin = 'round'; ctx.lineWidth = (2 * w) / scaleOf(ctx); ctx.strokeStyle = C.plum;
    paths.forEach((p) => ctx.stroke(p)); ctx.fillStyle = shade; paths.forEach((p) => ctx.fill(p)); ctx.restore();
    const U = new Path2D(); paths.forEach((p) => U.addPath(p));
    ctx.save(); ctx.clip(U); ctx.translate(dx, dy); ctx.fillStyle = base; paths.forEach((p) => ctx.fill(p)); ctx.restore();
    return U;
  }
  function bubbleDot(ctx, x, y, r) { cel(ctx, ellP(x, y, r, r), '#f4fbff', C.skyS, -r * 0.18, -r * 0.18, 3.5); shine(ctx, x - r * 0.35, y - r * 0.35, r * 0.25, r * 0.17, -0.6); }

  // the chibi stomach. (x,y) = body centre. P: t, eyes, mouth, look, shake (px), squeeze (0..1), fill: 'full'|'gas'|null
  const ST_BODY = ellP(0, 0, 178, 132, -0.32), ST_FUNDUS = ellP(78, -78, 96, 84);
  function stomach(ctx, x, y, s, P = {}) {
    const t = P.t || 0, sh = P.shake || 0, q = P.squeeze || 0;
    ctx.save(); ctx.translate(x + Math.sin(t * 57) * sh, y - (P.lift || 0) + Math.cos(t * 43) * sh * 0.4); ctx.scale(s * (1 - 0.12 * q), s * (1 + 0.08 * q));
    const sq = P.sq || [1, 1]; ctx.scale(sq[0], sq[1]);
    if (P.shadow !== false) { ctx.fillStyle = 'rgba(90,54,89,0.13)'; ctx.fill(ellP(0, 190 + (P.lift || 0) / s, 170, 22)); }
    // food pipe in, small intestine out (behind the body)
    tube(ctx, [[-10, -110], [-22, -170], [-30, -230]], 52, GUTC[0], GUTC[1]);
    tube(ctx, [[-130, 70], [-180, 95], [-205, 140], [-200, 185]], 50, GUTC[0], GUTC[1]);
    const U = celU(ctx, [ST_BODY, ST_FUNDUS], C.pink, C.pinkS, -14, -14);
    // what is inside, seen through a little window in the lower belly
    if (P.fill) {
      ctx.save(); ctx.clip(U);
      const r = H.rng(P.fill === 'full' ? 5 : 8);
      if (P.fill === 'full') {
        for (let i = 0; i < 16; i++) { const fx = r.range(-150, 150), fy = r.range(58, 120), rr = r.range(18, 30), c = FOODS[i % 4]; cel(ctx, ellP(fx, fy, rr, rr * 0.85, r.range(0, 3)), c[0], c[1], -4, -4, 3.5); }
      } else {
        for (let i = 0; i < 9; i++) { const ph = r() * TAU, bx = r.range(-140, 140), by = 120 - ((t * r.range(30, 60) + r.range(0, 120)) % 120), br = r.range(10, 22); bubbleDot(ctx, bx + Math.sin(t * 3 + ph) * 6, by + 20, br); }
      }
      ctx.restore();
    }
    shine(ctx, -96, -58, 34, 14, -0.7); shine(ctx, -52, -86, 8, 8, 0); shine(ctx, 70, -128, 18, 8, -0.4);
    face(ctx, 6, -26, 1.45, { eyes: P.eyes, mouth: P.mouth, look: P.look, iris: '#d0567f' });
    ctx.restore();
  }

  function onigiri(ctx, x, y, s, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(P.rot || 0);
    cel(ctx, roundPoly([[0, -78], [80, 62], [-80, 62]], 34), C.white, C.creamS, -7, -7);
    cel(ctx, rrP(-38, 22, 76, 46, 8), C.nori, C.noriS, -3, -3, 4);
    face(ctx, 0, -8, 0.55, { eyes: P.eyes || 'happy', mouth: P.mouth || 'w' });
    ctx.restore();
  }
  function crumb(ctx, x, y, s, i) { const c = FOODS[i % 4]; cel(ctx, roundPoly([[-20 * s, -14 * s], [18 * s, -18 * s], [22 * s, 12 * s], [-16 * s, 18 * s]], 7 * s), c[0], c[1], -3, -3, 3.5); }
  function germ(ctx, x, y, s, t, ph = 0, P = {}) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(Math.sin(t * 5 + ph) * 0.15);
    ctx.strokeStyle = C.plum; ctx.lineWidth = 4; ctx.lineCap = 'round';
    for (let i = 0; i < 6; i++) { const a = i / 6 * TAU, w = Math.sin(t * 9 + i + ph) * 6; ctx.beginPath(); ctx.moveTo(Math.cos(a) * 34, Math.sin(a) * 26); ctx.quadraticCurveTo(Math.cos(a) * 46 + w, Math.sin(a) * 38, Math.cos(a) * 54, Math.sin(a) * 42 + w); ctx.stroke(); }
    cel(ctx, ellP(0, 0, 38, 30), C.bile, C.bileS, -5, -5, 4);
    face(ctx, 0, -4, 0.42, { eyes: P.eyes || 'normal', mouth: P.mouth || 'o', iris: '#3fb98e' });
    ctx.restore();
  }
  function column(ctx, x, y0, y1, w) {
    ctx.save();
    cel(ctx, rrP(x - w * 0.62, y0 - 34, w * 1.24, 40, 10), C.cream, C.creamS, -4, -4);
    cel(ctx, rrP(x - w / 2, y0, w, y1 - y0, 6), C.cream, C.creamS, -6, -6);
    ctx.strokeStyle = C.creamS; ctx.lineWidth = 6; ctx.lineCap = 'round';
    for (let i = -1; i <= 1; i++) { ctx.beginPath(); ctx.moveTo(x + i * w * 0.25, y0 + 22); ctx.lineTo(x + i * w * 0.25, y1 - 22); ctx.stroke(); }
    cel(ctx, rrP(x - w * 0.7, y1 - 6, w * 1.4, 44, 10), C.cream, C.creamS, -4, -4);
    ctx.restore();
  }
  function trashBag(ctx, x, y, s, t) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.rotate(Math.sin(t * 6) * 0.08);
    const p = new Path2D(); p.moveTo(-26, -70); p.bezierCurveTo(-110, -40, -100, 80, -60, 90); p.lineTo(60, 90); p.bezierCurveTo(100, 80, 110, -40, 26, -70); p.closePath();
    cel(ctx, p, C.lavD, '#6f55c7', -8, -8);
    cel(ctx, ellP(0, -76, 26, 16), C.lavD, '#6f55c7', -3, -3, 4);
    cel(ctx, roundPoly([[-8, -88], [-40, -126], [-10, -112]], 6), C.lavD, '#6f55c7', -2, -2, 4);
    cel(ctx, roundPoly([[8, -88], [40, -126], [10, -112]], 6), C.lavD, '#6f55c7', -2, -2, 4);
    shine(ctx, -50, -10, 9, 22, 0.2, 0.7);
    face(ctx, 0, 20, 0.5, { eyes: 'happy', mouth: 'w' });
    ctx.restore();
  }

  // ---- the gut: one long muscle tube snaking down the screen, squeezed by travelling waves ----
  function gutPts(y0, y1, n = 240, amp = 270) { return Array.from({ length: n + 1 }, (_, i) => { const p = i / n; return [540 + amp * Math.sin(p * Math.PI * 3), y0 + (y1 - y0) * p]; }); }
  const GUT_A = gutPts(560, 1540), GUT_B = gutPts(600, 1560);
  const atU = (pts, u) => { const f = H.clamp(u) * (pts.length - 1), i = Math.min(pts.length - 2, Math.floor(f)), k = f - i; return [H.lerp(pts[i][0], pts[i + 1][0], k), H.lerp(pts[i][1], pts[i + 1][1], k)]; };
  // waves: [{u, s}]: u = position along the tube (0..1), s = strength. drawn = how much of the tube has drawn on.
  function gut(ctx, pts, r0, waves, drawn = 1) {
    const n = Math.floor((pts.length - 1) * H.clamp(drawn)); if (n < 1) return;
    const R = [];
    for (let i = 0; i <= n; i++) {
      const u = i / (pts.length - 1); let k = 1;
      for (const w of waves) { const d = u - w.u; k += w.s * (-0.5 * Math.exp(-((d / 0.022) ** 2)) + 0.22 * Math.exp(-(((d - 0.05) / 0.03) ** 2))); }
      R.push(r0 * k);
    }
    ctx.save();
    ctx.fillStyle = C.plum; for (let i = 0; i <= n; i++) ctx.fill(ellP(pts[i][0], pts[i][1], R[i] + 5, R[i] + 5));
    ctx.fillStyle = GUTC[1]; for (let i = 0; i <= n; i++) ctx.fill(ellP(pts[i][0], pts[i][1], R[i], R[i]));
    ctx.fillStyle = GUTC[0]; for (let i = 0; i <= n; i++) ctx.fill(ellP(pts[i][0] - R[i] * 0.16, pts[i][1] - R[i] * 0.16, R[i] * 0.78, R[i] * 0.78));
    // muscle ring stripes
    ctx.strokeStyle = 'rgba(214,110,110,0.45)'; ctx.lineWidth = 5; ctx.lineCap = 'round';
    for (let i = 6; i <= n - 3; i += 10) {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], ang = Math.atan2(b[1] - a[1], b[0] - a[0]) + Math.PI / 2, r = R[i] * 0.72;
      ctx.beginPath(); ctx.moveTo(pts[i][0] + Math.cos(ang) * r, pts[i][1] + Math.sin(ang) * r); ctx.lineTo(pts[i][0] - Math.cos(ang) * r, pts[i][1] - Math.sin(ang) * r); ctx.stroke();
    }
    ctx.fillStyle = 'rgba(255,255,255,0.55)'; for (let i = 0; i <= n; i += 2) ctx.fill(ellP(pts[i][0] - R[i] * 0.42, pts[i][1] - R[i] * 0.42, R[i] * 0.1, R[i] * 0.1));
    ctx.restore();
  }
  // a squeeze ring marker (little motion arcs both sides of the pinch)
  function squeezeMarks(ctx, pts, u, t) {
    const [x, y] = atU(pts, u), a = atU(pts, u - 0.01), b = atU(pts, u + 0.01), ang = Math.atan2(b[1] - a[1], b[0] - a[0]) + Math.PI / 2;
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.strokeStyle = C.pinkD; ctx.lineWidth = 7; ctx.lineCap = 'round';
    for (const sd of [-1, 1]) { const o = 92 + Math.sin(t * 20) * 4; ctx.beginPath(); ctx.moveTo(sd * o, -22); ctx.lineTo(sd * (o - 22), 0); ctx.lineTo(sd * o, 22); ctx.stroke(); }
    ctx.restore();
  }
  function echo(ctx, x, y, t, t0, n = 3, R0 = 240, col = C.pinkD) {
    if (t < t0) return;
    ctx.save(); ctx.lineCap = 'round';
    for (let i = 0; i < n; i++) { const u = ((t - t0) * 1.1 + i / n) % 1; ctx.globalAlpha = 1 - u; ctx.strokeStyle = col; ctx.lineWidth = 10 * (1 - u) + 3;
      for (const sd of [-1, 1]) { ctx.beginPath(); ctx.arc(x, y, R0 + u * 170, sd > 0 ? -0.6 : Math.PI - 0.6, sd > 0 ? 0.6 : Math.PI + 0.6); ctx.stroke(); } }
    ctx.restore();
  }
  const growl = (t, t0, d = 1.2) => (t >= t0 && t < t0 + d ? 14 * (1 - (t - t0) / d) : 0);

  // ======================================== SCENES ========================================
  const SC = [];
  const scene = (first, tr, theme, seed, draw, wx = 540, wy = 1000) => SC.push({ s: first === 0 ? 0 : PS(first) - 0.5, first, tr, theme, seed, draw, wx, wy });

  // 1 HOOK: your empty stomach growls every two hours until you eat. But why won't it stop?
  scene(0, null, TH.pink, 3, (ctx, t) => {
    twinkles(ctx, W, HH, t, 21, 12, (x, y) => y > 560 && y < 1620);
    const land = 0.55, gr = T(0, 'growls'), two = T(0, 'two'), eat = T(0, 'eat'), why = T(1, 'why');
    let y = 1040, sq = [1, 1];
    if (t < land) { const u = H.clamp((t - 0.1) / (land - 0.1)); y = 1040 - 900 * (1 - u * u); sq = [0.88, 1.12]; } else sq = squash(t, land, 0.24);
    const shake = growl(t, gr, 1.4) + growl(t, why, 1.2);
    stomach(ctx, 540, y, 1.32, { t, sq, shake, eyes: t >= why ? 'swirl' : t >= eat ? 'star' : t >= gr ? 'squeeze' : 'normal', mouth: t >= why ? 'wobble' : t >= gr ? 'O' : 'smile', look: [0, -0.4], lift: t > land + 0.4 && !shake ? bob(t, 0, 6) : 0 });
    kana(ctx, 'ぐ〜', 820, 760, 96, 0.2, t > gr && t < PS(1) ? pop(t, gr).s : 0, C.butter);
    if (t > gr) impactLines(ctx, 540, 1040, 270, t, gr, 12, C.pinkD);
    kWord(ctx, 'EMPTY STOMACH', 540, 330, 100, t, T(0, 'empty'), 0.025, { ...HO(C.white, C.pinkD), t1: PS(1) - 0.15 });
    // every 2 hours: a clock + the number
    popIn(ctx, t, T(0, 'every'), 280, 1470, () => clock(ctx, 0, 0, 105, (t - T(0, 'every')) * 5), 1.2, PS(1) - 0.1);
    ptext(ctx, t, two, 690, 1515, '2 hrs', 150, HO(C.butter, C.pinkD), PS(1) - 0.1);
    // until you eat: a rice ball floats in, just out of reach
    const op = pop(t, eat - 0.1, 1.2);
    if (op.s > 0) { const o = t >= why ? popOut(t, why, 0.3) : 1; if (o > 0) onigiri(ctx, 860, 600 + bob(t, 1, 10), 0.9 * op.s * o, { eyes: 'happy' }); }
    // but WHY won't it stop?
    if (t >= why - 0.1) {
      kWord(ctx, 'but WHY?', 540, 360, 150, t, why - 0.1, 0.035, HO(C.butter, C.pinkD));
      for (const [x, yy, sz, ph] of [[860, 760, 120, 0], [230, 820, 90, 1.7]]) { const p = pop(t, why + ph * 0.1, 1.4); if (p.s <= 0) continue; ctx.save(); ctx.translate(x, yy); ctx.rotate(0.14 * Math.sin(t * 9 + ph)); ctx.scale(p.sx, p.sy); kText(ctx, ph ? '!' : '?', 0, 0, sz, { fill: C.butter, line: C.pinkD, outer: C.plum, lw: 0.2 }); ctx.restore(); }
      sweat(ctx, 770, 880, pop(t, why + 0.2).s * 1.4, 0.3);
    }
  });

  // 2 THE GUT: one long muscle tube -> walls squeeze in waves -> peristalsis -> pushing food, liquid and gas along
  scene(2, 'star', TH.mint, 5, (ctx, t) => {
    twinkles(ctx, W, HH, t, 31, 10, (x, y) => y > 480 && y < 1620);
    const gt = T(2, 'gut'), sqz = T(3, 'squeeze'), per = T(4, 'peristalsis'), push = T(5, 'push');
    const drawn = H.ease.out(prog(t, gt - 0.1, gt + 1.1));
    const waves = [];
    if (t >= sqz) for (let j = 0; j < 3; j++) { const u = (t - sqz) * 0.26 - j * 0.4; if (u > -0.05 && u < 1.08) waves.push({ u, s: H.clamp((t - sqz) / 0.3) }); }
    gut(ctx, GUT_A, 58, waves, drawn);
    // contents ride just ahead of the first wave once the narrator says "push"
    if (t >= push - 0.1) {
      const items = [['food', T(5, 'food'), 0.32], ['liquid', T(5, 'liquid'), 0.17], ['gas', T(5, 'gas'), 0.02]];
      items.forEach(([kind, t0, off], i) => {
        const ps = pop(t, t0 - 0.05, 1.3); if (ps.s <= 0) return;
        const u = H.clamp(0.08 + off + Math.max(0, t - push) * 0.08, 0, 0.95), [x, y] = atU(GUT_A, u);
        ctx.save(); ctx.translate(x, y); ctx.scale(ps.sx, ps.sy);
        if (kind === 'food') crumb(ctx, 0, 0, 2.2, 1); else if (kind === 'liquid') drop(ctx, 0, 0, 1.6); else { bubbleDot(ctx, -12, 6, 30); bubbleDot(ctx, 26, -18, 18); }
        ctx.restore();
        const side = x > 540 ? -1 : 1;
        ptag(ctx, t, t0 - 0.05, x + side * 210, y, kind, [C.butter, C.sky, C.lav][i], 50, PS(6) - 0.6);
      });
    }
    if (t >= sqz) for (const w of waves) if (w.u > 0.02 && w.u < 0.98) squeezeMarks(ctx, GUT_A, w.u, t);
    ptag(ctx, t, T(2, 'muscle'), 800, 470, 'muscle tube', C.butter, 56, sqz - 0.1);
    ptag(ctx, t, T(3, 'waves'), 820, 470, 'squeeze!', C.pink, 60, per - 0.1);
    kWord(ctx, 'YOUR GUT', 540, 330, 120, t, gt, 0.03, { ...HO(C.white, C.mintD), t1: per - 0.15 });
    kWord(ctx, 'PERISTALSIS', 540, 360, 110, t, per - 0.05, 0.03, HO(C.butter, C.pinkD));
  }, 540, 900);

  // 3 ~3 squeezes a minute in your stomach
  scene(6, 'heart', TH.butter, 7, (ctx, t) => {
    twinkles(ctx, W, HH, t, 41, 10, (x, y) => y > 600 && y < 1560);
    const th = T(6, 'three'), st = T(6, 'stomach');
    const beats = [th, th + 0.6, th + 1.2];
    let q = 0; for (const b of beats) if (t >= b) q = Math.max(q, Math.max(0, 1 - (t - b) / 0.35));
    stomach(ctx, 540, 1180, 1.3, { t, squeeze: q, eyes: q > 0.3 ? 'squeeze' : 'happy', mouth: q > 0.3 ? 'w' : 'smile', lift: bob(t, 0, 5) });
    beats.forEach((b, i) => { impactLines(ctx, 540, 1180, 260, t, b, 10, C.pinkD); popIn(ctx, t, b, 300 + i * 240, 1600, () => cel(ctx, heartP(0, 0, 34), C.pinkD, '#e2527f', -4, -4, 4), 1.4); });
    const n = beats.filter((b) => t >= b).length;
    if (t >= th - 0.1) {
      const p = pop(t, th - 0.1, 1.3); ctx.save(); ctx.translate(540, 520); ctx.scale(p.sx, p.sy); kText(ctx, String(Math.max(1, n)), 0, 0, 280, HO(C.white, C.pinkD)); ctx.restore();
    }
    ptext(ctx, t, T(6, 'squeezes'), 540, 690, 'squeezes a minute', 70, HO(C.white, C.lavD));
    ptag(ctx, t, st, 540, 870, 'in your stomach', C.mint, 56);
    if (t < th) kWord(ctx, 'ABOUT...', 540, 520, 120, t, PS(6) - 0.05, 0.03, { ...HO(C.white, C.lavD), t1: th - 0.12 });
  });

  // 4 FULL = muffled vs EMPTY = gas and air, every squeeze echoes like a drum
  scene(7, 'star', TH.lav, 9, (ctx, t) => {
    twinkles(ctx, W, HH, t, 51, 8, (x, y) => x > 250 && x < 830);
    const meal = T(7, 'meal'), muf = T(7, 'muffles'), emp = T(8, 'empty'), gas = T(8, 'gas'), ech = T(9, 'echoes'), sqz = T(9, 'squeeze');
    // top: after a meal
    popIn(ctx, t, meal - 0.1, 540, 720, () => stomach(ctx, 0, 0, 0.82, { t, fill: 'full', eyes: 'happy', mouth: 'w', lift: bob(t, 0, 4), shadow: false }), 1.1);
    ptag(ctx, t, PS(7) - 0.05, 540, 470, 'after a meal', C.butter, 54);
    if (t >= muf) { ptag(ctx, t, muf, 870, 840, 'quiet', C.mint, 52); kana(ctx, 'しーん', 210, 860, 52, -0.15, pop(t, muf).s, C.mint); }
    // bottom: empty
    const pulses = [ech, ech + 0.55, ech + 1.1];
    let shake = 0; for (const p of pulses) shake = Math.max(shake, growl(t, p, 0.45));
    popIn(ctx, t, emp - 0.1, 540, 1330, () => stomach(ctx, 0, 0, 0.82, { t, fill: t >= gas - 0.1 ? 'gas' : null, shake, eyes: t >= ech ? 'shock' : 'normal', mouth: t >= ech ? 'O' : 'o', lift: shake ? 0 : bob(t, 1, 4), shadow: false }), 1.1);
    ptag(ctx, t, emp - 0.1, 540, 1080, 'empty', C.pink, 58);
    if (t >= gas - 0.1) ptag(ctx, t, gas - 0.1, 870, 1240, 'gas + air', C.sky, 48);
    if (t >= sqz) { echo(ctx, 540, 1330, t, sqz, 3, 250); ptext(ctx, t, ech, 820, 1520, 'LOUD!', 110, HO(C.butter, C.pinkD)); kana(ctx, 'ゴロゴロ', 250, 1560, 70, -0.12, pop(t, ech + 0.1).s, C.butter); }
    kWord(ctx, 'FULL vs EMPTY', 540, 300, 96, t, PS(7) - 0.4, 0.025, HO(C.white, C.lavD));
  }, 540, 1000);

  // 5 THE CLEANING WAVE: after a while empty, a big wave sweeps leftovers + bacteria down the whole gut
  scene(10, 'heart', TH.sky, 11, (ctx, t) => {
    twinkles(ctx, W, HH, t, 61, 8, (x, y) => y > 500 && y < 1640);
    const wh = T(10, 'when'), cl = T(11, 'cleaning'), wv = T(11, 'wave'), lo = T(12, 'leftover'), ba = T(12, 'bacteria'), dn = T(13, 'down');
    const wu = t < wv ? -0.1 : H.ease.inOut(prog(t, wv, PE(13) + 0.1)) * 1.12 - 0.04;
    const waves = t >= wv ? [{ u: wu, s: 1.6 }] : [];
    gut(ctx, GUT_B, 58, waves, 1);
    // sparkles behind the wave: swept clean
    if (t >= wv) for (let i = 0; i < 8; i++) { const u = wu - 0.05 - i * 0.07; if (u < 0) break; const [x, y] = atU(GUT_B, u); sparkle(ctx, x + Math.sin(i * 3) * 20, y, 16 * (0.6 + 0.4 * Math.sin(t * 8 + i)), i % 2 ? C.white : C.butter, 0, 3); }
    // leftovers and germs sit in the tube, then get pushed ahead of the wave
    const stuff = [[0.18, 'c', 0], [0.3, 'g', 1], [0.42, 'c', 2], [0.55, 'g', 3], [0.66, 'c', 1], [0.78, 'g', 4], [0.88, 'c', 3]];
    stuff.forEach(([u0, kind, i]) => {
      const t0 = kind === 'c' ? lo - 0.1 + i * 0.05 : ba - 0.1 + i * 0.05;
      const ps = pop(t, Math.min(t0, PS(10) + 0.2 + u0), 1.2); if (ps.s <= 0) return;
      const u = Math.max(u0, wu + 0.045 + i * 0.006); if (u > 1.02) return;
      const [x, y] = atU(GUT_B, u);
      ctx.save(); ctx.translate(x, y); ctx.scale(ps.sx, ps.sy);
      if (kind === 'c') crumb(ctx, 0, 0, 1.9, i); else germ(ctx, 0, 0, 1.0, t, i, { eyes: t >= wv && u > u0 + 0.01 ? 'swirl' : 'normal', mouth: t >= wv && u > u0 + 0.01 ? 'O' : 'o' });
      ctx.restore();
    });
    if (t >= wv) squeezeMarks(ctx, GUT_B, H.clamp(wu, 0.02, 0.98), t);
    ptag(ctx, t, lo, 220, 1000, 'leftovers', C.butter, 50, PE(13) + 0.2);
    ptag(ctx, t, ba, 860, 1180, 'bacteria', C.mint, 50, PE(13) + 0.2);
    if (t >= dn) poof(ctx, 540, 1580, t, PE(13) - 0.1, 70);
    // clock first, then the headline
    popIn(ctx, t, wh - 0.05, 540, 360, () => clock(ctx, 0, 0, 120, (t - wh) * 6), 1.2, cl - 0.15);
    kWord(ctx, 'CLEANING', 540, 300, 120, t, cl - 0.05, 0.03, HO(C.white, C.skyD));
    kWord(ctx, 'WAVE!', 540, 440, 120, t, wv - 0.05, 0.04, HO(C.butter, C.pinkD));
  }, 540, 1000);

  // 6 rumbles for 10-20 minutes, comes back every 1-2 hours, until you eat again
  scene(14, 'star', TH.pink, 13, (ctx, t) => {
    twinkles(ctx, W, HH, t, 71, 10, (x, y) => y > 500 && y < 1640);
    const ru = T(14, 'rumbles'), ten = T(14, 'ten'), ev = T(15, 'every'), one = T(15, 'one'), eat = T(16, 'eat'), ag = T(16, 'again');
    const fed = t >= eat + 0.35;
    const shake = fed ? 0 : (t >= ru ? 7 + 4 * Math.sin(t * 3) : 0);
    stomach(ctx, 540, 760, 1.05, { t, shake, eyes: fed ? 'happy' : t >= ru ? 'squeeze' : 'normal', mouth: fed ? 'w' : t >= ru ? 'O' : 'o', sq: fed ? squash(t, eat + 0.35, 0.2) : [1, 1], lift: fed ? bob(t, 0, 6) : 0 });
    if (!fed) kana(ctx, 'ゴロゴロ', 830, 520, 64, 0.15, t >= ru ? pop(t, ru).s : 0, C.butter);
    else { kana(ctx, 'もぐもぐ', 830, 520, 64, 0.15, pop(t, eat + 0.35).s, C.mint); heart(ctx, 260, 560 - (t - eat) * 40, 26); }
    // 10-20 min bar, then the 1-2 hour loop
    ptext(ctx, t, ten - 0.05, 540, 1190, '10-20 min', 130, HO(C.white, C.pinkD));
    popIn(ctx, t, ten + 0.1, 540, 1290, () => { cel(ctx, rrP(-300, -22, 600, 44, 22), C.white, C.creamS, -3, -3, 4); const u = H.clamp((t - ten - 0.1) / 1.4); if (u > 0.02) cel(ctx, rrP(-296, -18, 592 * u, 36, 18), C.pinkD, '#e2527f', -3, -3, 0); });
    popIn(ctx, t, ev - 0.05, 230, 1500, () => clock(ctx, 0, 0, 95, (t - ev) * 7), 1.2);
    ptext(ctx, t, one - 0.05, 640, 1545, '1-2 hrs', 130, HO(C.butter, C.lavD));
    if (t >= ev + 0.3) dotted(ctx, arcPts(540, 1380, 420, Math.PI * 0.95, Math.PI * 1.95, 50), H.clamp((t - ev - 0.3) / 0.8), C.lavD, 7, 26, 1);
    // until you eat again: a rice ball flies in and gets eaten
    if (t >= eat - 0.35 && t < eat + 0.4) { const u = H.ease.in(prog(t, eat - 0.35, eat + 0.35)); onigiri(ctx, H.lerp(980, 560, u), H.lerp(320, 640, u), 0.8 * (1 - u * 0.6), { eyes: 'happy', rot: u * 2 }); }
    if (fed) { poof(ctx, 560, 640, t, eat + 0.35, 60); check(ctx, 860, 860, 1.2, t, ag - 0.05); }
    kWord(ctx, 'RUMBLE TIME', 540, 300, 100, t, PS(14) - 0.2, 0.025, HO(C.white, C.pinkD));
  }, 540, 800);

  // 7 the ancient Greeks called it borborygmi, which means rumbling
  scene(17, 'heart', TH.lav, 15, (ctx, t) => {
    twinkles(ctx, W, HH, t, 81, 10, (x, y) => x > 200 && x < 880);
    const an = T(17, 'ancient'), bo = T(17, 'borborygmi'), ru = T(18, 'rumbling');
    popIn(ctx, t, PS(17) - 0.3, 110, 1100, () => column(ctx, 0, -400, 420, 100), 1.0);
    popIn(ctx, t, PS(17) - 0.2, 970, 1100, () => column(ctx, 0, -400, 420, 100), 1.0);
    kWord(ctx, 'Ancient Greeks', 540, 330, 92, t, an, 0.025, HO(C.white, C.lavD));
    // a laurel crown on a scroll ribbon
    popIn(ctx, t, an + 0.4, 540, 520, () => { ctx.strokeStyle = C.mintD; ctx.lineWidth = 8; ctx.lineCap = 'round'; for (const sd of [-1, 1]) { ctx.beginPath(); ctx.arc(0, 30, 90, sd > 0 ? -0.2 : Math.PI + 0.2, sd > 0 ? 1.2 : Math.PI - 1.2, sd < 0); ctx.stroke(); for (let i = 0; i < 5; i++) { const a = sd > 0 ? -0.1 + i * 0.3 : Math.PI + 0.1 - i * 0.3; cel(ctx, ellP(Math.cos(a) * 90, 30 + Math.sin(a) * 90, 22, 11, a + Math.PI / 2 * sd), C.mint, C.mintS, -2, -2, 3.5); } } }, 1.2);
    kWord(ctx, 'BORBORYGMI', 540, 880, 112, t, bo - 0.05, 0.035, HO(C.butter, C.pinkD));
    ptext(ctx, t, ru - 0.05, 540, 1040, '= "rumbling"', 84, HO(C.white, C.lavD));
    const shake = t >= ru ? growl(t, ru, 1.5) : 0;
    popIn(ctx, t, bo + 0.2, 540, 1380, () => stomach(ctx, 0, 0, 0.82, { t, shake, eyes: t >= ru ? 'squeeze' : 'happy', mouth: t >= ru ? 'O' : 'w', shadow: false }), 1.2);
    if (t >= ru) kana(ctx, 'ゴロゴロ', 720, 1210, 62, 0.15, pop(t, ru).s, C.butter);
  }, 540, 900);

  // 8 TAKEAWAY: not just hunger, it's your gut taking out the trash
  scene(19, 'star', TH.mint, 17, (ctx, t) => {
    twinkles(ctx, W, HH, t, 91, 12, (x, y) => y > 600 && y < 1600);
    const hu = T(19, 'hunger'), tk = T(20, 'taking'), tr = T(20, 'trash');
    stomach(ctx, 470, 1130, 1.15, { t, eyes: t >= tr ? 'star' : t >= tk ? 'happy' : 'normal', mouth: t >= tk ? 'smile' : 'o', lift: t >= tk ? Math.max(0, Math.sin(t * TAU * 1.4)) * 18 : bob(t, 0, 5), sq: squash(t, tk, 0.18) });
    popIn(ctx, t, tk - 0.05, 830, 1240, () => trashBag(ctx, 0, 0, 1.5, t), 1.3);
    if (t < PS(20) - 0.1) { popIn(ctx, t, hu - 0.15, 860, 800, () => onigiri(ctx, 0, 0, 0.75, { eyes: 'normal', mouth: 'o' }), 1.2); cross(ctx, 860, 800, 1.3, t, hu + 0.15); }
    kWord(ctx, 'NOT JUST', 540, 300, 120, t, T(19, 'isnt') - 0.05, 0.03, { ...HO(C.white, C.mintD), t1: PS(20) - 0.15 });
    kWord(ctx, 'HUNGER', 540, 440, 120, t, hu - 0.05, 0.03, { ...HO(C.white, C.pinkD), t1: PS(20) - 0.15 });
    kWord(ctx, 'TAKING OUT', 540, 300, 120, t, tk - 0.05, 0.03, HO(C.white, C.mintD));
    kWord(ctx, 'THE TRASH!', 540, 440, 130, t, tr - 0.1, 0.035, HO(C.butter, C.pinkD));
    if (t >= tr) { impactLines(ctx, 470, 1130, 240, t, tr, 14, C.pinkD); confetti(ctx, t, tr + 0.05, 540, 1000, 50, 9, 1.2); }
  }, 540, 1000);

  // 9 QUESTION: when did your stomach growl at the worst moment?
  scene(21, 'heart', TH.butter, 19, (ctx, t) => {
    twinkles(ctx, W, HH, t, 101, 10, (x, y) => y > 600 && y < 1600);
    const gr = T(21, 'growl'), wo = T(21, 'worst');
    const shake = growl(t, gr, 1.3);
    stomach(ctx, 540, 1120, 1.25, { t, shake, eyes: t >= wo ? 'shock' : 'normal', mouth: t >= gr ? 'O' : 'o', lift: shake ? 0 : bob(t, 0, 5) });
    if (t >= wo) { sweat(ctx, 790, 920, pop(t, wo).s * 1.4, 0.3); blush(ctx, 380, 1150, 40, 20); }
    kana(ctx, 'ぐ〜', 830, 820, 96, 0.2, t >= gr ? pop(t, gr).s : 0, C.butter);
    kWord(ctx, 'Your WORST', 540, 300, 110, t, PS(21) - 0.05, 0.03, HO(C.white, C.lavD));
    kWord(ctx, 'growl moment?', 540, 440, 104, t, gr - 0.05, 0.03, HO(C.butter, C.pinkD));
    ptag(ctx, t, PE(21) + 0.05, 540, 1580, 'comment below!', C.pink, 56);
  }, 540, 1100);

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
    const boing = (t, g = 1) => { k.tone(t, { f: [[0, 150], [0.05, 290], [0.12, 190], [0.2, 250], [0.3, 210], [0.4, 225]], type: 'triangle', dur: 0.45, gain: 0.22 * g }); k.tone(t, { f: [[0, 75], [0.06, 140], [0.3, 110]], dur: 0.3, gain: 0.2 * g }); };
    const bell = (t, f, g = 1, o = {}) => { const hz = k.hz(f); k.tone(t, { f: hz, dur: o.dur || 0.9, gain: 0.09 * g, a: 0.004, verb: 0.35, pan: o.pan, minor: o.minor }); k.tone(t, { f: hz * 2, dur: 0.3, gain: 0.025 * g, a: 0.003, verb: 0.3, pan: o.pan, minor: o.minor }); };
    const twinkle = (t, n = 4, g = 1, minor = true) => { const ns = ['G4', 'C5', 'E5', 'G5', 'A5', 'C6']; for (let i = 0; i < n; i++) bell(t + i * 0.06, ns[(i * 2 + n) % ns.length], 0.55 * g, { dur: 0.7, pan: (i % 2 ? 0.35 : -0.35), minor }); };
    const iris = (t, d = 0.5, base = 'C5') => { k.tone(t, { f: [[0, k.hz(base) / 2], [d, k.hz(base) * 1.5]], dur: d + 0.05, gain: 0.06, a: d * 0.6, verb: 0.3 }); k.noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 300], [d, 1800]], q: 0.8, gain: 0.14, a: d * 0.7 }); twinkle(t + d * 0.75, 3, 0.8, false); };
    const aww = (t) => { k.tone(t, { f: [[0, 'E4'], [0.3, 'D#4']], type: 'triangle', dur: 0.32, gain: 0.07, a: 0.03, hold: 0.15 }); k.tone(t + 0.3, { f: [[0, 'C4'], [0.5, 'A3']], type: 'triangle', dur: 0.55, gain: 0.07, a: 0.03, hold: 0.2 }); };
    const big = (t) => { bloop(t, 320, 1.2); k.play('thud', t, { f: 140, gain: 0.35 }); twinkle(t + 0.12, 4, 0.8, false); };
    // the tummy rumble: a wobbling low sawtooth through a lowpass, plus a soft gurgle
    const rumble = (t, d = 1.0, g = 1) => {
      k.tone(t, { f: [[0, 62], [d * 0.25, 92], [d * 0.5, 58], [d * 0.75, 84], [d, 55]], type: 'sawtooth', filter: 'lowpass', f2: 260, q: 2, dur: d, gain: 0.3 * g, a: 0.06, hold: d * 0.5 });
      k.noise(t, { dur: d, color: 'brown', filter: 'lowpass', f: 300, gain: 0.25 * g, a: 0.08, hold: d * 0.4 });
      for (let i = 0; i < 4; i++) k.tone(t + d * (0.2 + i * 0.18), { f: [[0, 220 + i * 40], [0.08, 420 + i * 30]], dur: 0.1, gain: 0.07 * g, minor: true });
    };
    const squish = (t, g = 1) => { k.noise(t, { dur: 0.22, color: 'pink', filter: 'lowpass', f: [[0, 1200], [0.22, 250]], gain: 0.18 * g, a: 0.02, minor: true }); k.tone(t, { f: [[0, 200], [0.18, 120]], dur: 0.2, gain: 0.08 * g, minor: true }); };
    SC.forEach((sc, i) => { if (i > 0) iris(sc.s, 0.5, ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'C6', 'D6', 'E6'][i % 9]); });
    // 1 hook
    k.tone(vis(0.1), { f: [[0, 700], [0.4, 320]], dur: 0.42, gain: 0.05, minor: true });
    boing(vis(0.55), 1.1);
    bloop(vis(T(0, 'empty')), 520, 0.8, { minor: true });
    rumble(T(0, 'growls'), 1.3, 1.1);
    k.play('tick', vis(T(0, 'every')), { gain: 0.5 }); for (let i = 1; i < 6; i++) k.play('tock', vis(T(0, 'every')) + i * 0.12, { f: 1500, gain: 0.2, minor: true });
    big(vis(T(0, 'two')));
    bloop(vis(T(0, 'eat') - 0.1), 600, 0.9);
    bloop(vis(T(1, 'why') - 0.1), 360, 1.1); aww(T(1, 'why') + 0.2); rumble(T(1, 'why') + 0.1, 0.9, 0.8);
    // 2 gut
    k.play('whoosh', T(2, 'gut') - 0.1, { dur: 1.1, gain: 0.5 });
    bloop(vis(T(2, 'muscle')), 480, 0.8, { minor: true });
    for (let j = 0; j < 9; j++) squish(T(3, 'squeeze') + j * 0.95, 0.8);
    bloop(vis(T(3, 'waves')), 560, 0.8, { minor: true });
    big(vis(T(4, 'peristalsis') - 0.05));
    bloop(vis(T(5, 'food') - 0.05), 440, 0.8); bloop(vis(T(5, 'liquid') - 0.05), 520, 0.8); bloop(vis(T(5, 'gas') - 0.05), 620, 0.8);
    // 3 three squeezes
    bloop(vis(PS(6) - 0.05), 480, 0.6, { minor: true });
    [0, 0.6, 1.2].forEach((d, i) => { squish(T(6, 'three') + d, 1.3); k.play('thud', vis(T(6, 'three') + d), { f: 120, gain: 0.3 }); bell(vis(T(6, 'three') + d) + 0.05, ['C5', 'E5', 'G5'][i], 0.8); });
    bloop(vis(T(6, 'stomach')), 560, 0.7, { minor: true });
    // 4 full vs empty
    bloop(vis(T(7, 'meal') - 0.1), 440, 0.9); k.play('tock', vis(T(7, 'muffles')), { f: 400, gain: 0.25 });
    bloop(vis(T(8, 'empty') - 0.1), 380, 0.9);
    for (let i = 0; i < 5; i++) bloop(T(8, 'gas') + i * 0.11, 700 + i * 60, 0.4, { minor: true });
    [0, 0.55, 1.1].forEach((d) => { k.play('thud', T(9, 'echoes') + d, { f: 90, gain: 0.55 }); rumble(T(9, 'echoes') + d, 0.45, 0.7); });
    big(vis(T(9, 'echoes')) + 0.02);
    // 5 cleaning wave
    for (let i = 0; i < 8; i++) k.play('tock', T(10, 'when') + i * 0.18, { f: 1300, gain: 0.25, minor: true });
    bloop(vis(T(11, 'cleaning') - 0.05), 500, 0.9);
    k.play('whoosh', T(11, 'wave'), { dur: 1.2, gain: 0.7, top: 2000 }); k.play('riser', T(11, 'wave') + 0.8, { dur: 2.5, gain: 0.25 });
    for (let i = 0; i < 4; i++) bloop(vis(T(12, 'leftover') - 0.1 + i * 0.05), 420 + i * 40, 0.4, { minor: true });
    for (let i = 0; i < 4; i++) bloop(vis(T(12, 'bacteria') - 0.1 + i * 0.05), 640 + i * 50, 0.4, { minor: true });
    k.play('sparkle', T(12, 'leftover'), { n: 8, gain: 0.5 });
    k.play('whoosh', T(13, 'down') - 0.1, { dur: 0.9, gain: 0.6 }); bell(PE(13), 'E6', 1.1);
    // 6 timing
    rumble(T(14, 'rumbles'), 1.6, 0.9);
    big(vis(T(14, 'ten') - 0.05));
    for (let i = 0; i < 10; i++) k.play('tick', T(14, 'ten') + 0.1 + i * 0.14, { f: 4800, gain: 0.35, minor: true });
    k.play('tick', vis(T(15, 'every') - 0.05), { gain: 0.5 }); for (let i = 1; i < 6; i++) k.play('tock', T(15, 'every') + i * 0.12, { f: 1400, gain: 0.2, minor: true });
    bloop(vis(T(15, 'one') - 0.05), 500, 1.1); bell(vis(T(15, 'one')), 'G5', 0.9);
    rumble(T(15, 'every') + 0.4, 1.2, 0.6);
    k.play('swish', T(16, 'eat') - 0.35, { dur: 0.4, gain: 0.6 });
    for (let i = 0; i < 4; i++) k.tone(T(16, 'eat') + 0.35 + i * 0.13, { f: [[0, 280], [0.09, 170]], dur: 0.12, gain: 0.2, minor: true });
    k.play('success', T(16, 'again'), { f: 'C6', gain: 0.4 });
    // 7 Greeks
    k.play('paper', PS(17) - 0.3, { dur: 0.5, gain: 0.6 });
    bloop(vis(T(17, 'ancient')), 470, 0.8, { minor: true });
    for (let i = 0; i < 10; i++) bloop(vis(T(17, 'borborygmi') - 0.05 + i * 0.035), 520 + i * 25, 0.35, { minor: true });
    big(vis(T(17, 'borborygmi') + 0.35));
    rumble(T(18, 'rumbling'), 1.4, 1.0);
    // 8 takeaway
    bloop(vis(T(19, 'isnt') - 0.05), 480, 0.8, { minor: true }); bloop(vis(T(19, 'hunger') - 0.05), 560, 0.8);
    k.play('error', vis(T(19, 'hunger') + 0.1), { f: 'A3', gain: 0.4 });
    boing(vis(T(20, 'taking') - 0.05), 0.8);
    { const t = vis(T(20, 'trash')); k.play('impact', t, { f: 110, gain: 0.45 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bell(t + i * 0.012, n, 1.6, { dur: 1.5, pan: (i - 1.5) * 0.3 })); twinkle(t + 0.25, 5, 0.9); }
    // 9 question
    bloop(vis(PS(21) - 0.05), 500, 0.8, { minor: true });
    rumble(T(21, 'growl'), 1.2, 1.0);
    bloop(vis(T(21, 'worst')), 380, 1.0);
    { const t = PE(21) + 0.1; ['G4', 'C5', 'E5', 'G5'].forEach((n, i) => bell(t + i * 0.05, n, 1.2, { dur: 1.2 })); }
  }

  window.BEATS = PH; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
