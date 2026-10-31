// ================= Kawaii Anime, vertical 1080x1920: "Why does bread go stale?" =================
// Short (~55 s), 9 scenes. Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
// A chibi bread slice acts it out: the fridge stales bread up to 6x faster, starch soaks up water in the oven and its
// crystals melt into gel, cooling packs it back into crystals (retrogradation) that squeeze water out and lock it
// away, crumb turns hard though barely dried (sealed bread still stales), fastest just above freezing = fridge,
// freezer almost stops it, the oven re-melts crystals (soft, for a little while), the where-does-your-bread-live question.
// Scene changes: star / heart iris wipes; continuous moves inside scenes. Everything on twos.
(function () {
  const W0 = 1080, H0 = 1920, TAU = Math.PI * 2;
  // ---------- voiceover phrases (phrases.json, Kokoro am_michael) ----------
  const PH = [
    {"s":0.25,"e":2.23,"text":"Your fridge is wasting your bread.","words":[["your",0.25],["fridge",0.53],["is",0.96],["wasting",1.1],["your",1.6],["bread",1.88]]},
    {"s":2.78,"e":4.84,"text":"It can go stale six times faster.","words":[["it",2.78],["can",2.94],["go",3.18],["stale",3.34],["six",3.73],["times",3.97],["faster",4.37]]},
    {"s":5.39,"e":6.19,"text":"But why?","words":[["but",5.39],["why",5.79]]},
    {"s":6.74,"e":8.91,"text":"Fresh bread is soft because of starch.","words":[["fresh",6.74],["bread",7.09],["is",7.44],["soft",7.58],["because",7.86],["of",8.35],["starch",8.49]]},
    {"s":9.46,"e":11.64,"text":"In the oven, starch soaks up water,","words":[["in",9.46],["the",9.63],["oven",9.87],["starch",10.19],["soaks",10.67],["up",11.07],["water",11.23]]},
    {"s":11.94,"e":14.55,"text":"and its tight crystals melt into a soft gel.","words":[["and",11.94],["its",12.16],["tight",12.39],["crystals",12.76],["melt",13.36],["into",13.65],["a",13.95],["soft",14.03],["gel",14.33]]},
    {"s":15.1,"e":16.46,"text":"But once the bread cools,","words":[["but",15.1],["once",15.3],["the",15.57],["bread",15.78],["cools",16.12]]},
    {"s":16.76,"e":18.86,"text":"the starch packs back into crystals.","words":[["the",16.76],["starch",16.97],["packs",17.39],["back",17.74],["into",18.02],["crystals",18.3]]},
    {"s":19.41,"e":21.48,"text":"Scientists call it retrogradation.","words":[["scientists",19.41],["call",20.1],["it",20.37],["retrogradation",20.51]]},
    {"s":22.03,"e":24.0,"text":"Those crystals squeeze the water out,","words":[["those",22.03],["crystals",22.35],["squeeze",22.86],["the",23.3],["water",23.49],["out",23.81]]},
    {"s":24.3,"e":25.39,"text":"and lock it away.","words":[["and",24.3],["lock",24.55],["it",24.88],["away",25.05]]},
    {"s":25.94,"e":27.46,"text":"So the crumb turns hard,","words":[["so",25.94],["the",26.1],["crumb",26.34],["turns",26.74],["hard",27.14]]},
    {"s":27.76,"e":29.31,"text":"even though it's barely dried out.","words":[["even",27.76],["though",27.99],["its",28.34],["barely",28.51],["dried",28.85],["out",29.14]]},
    {"s":29.86,"e":31.99,"text":"That's why sealed bread still goes stale.","words":[["thats",29.86],["why",30.19],["sealed",30.38],["bread",30.76],["still",31.09],["goes",31.41],["stale",31.67]]},
    {"s":32.54,"e":34.65,"text":"And this crystal building runs fastest","words":[["and",32.54],["this",32.73],["crystal",32.99],["building",33.43],["runs",33.95],["fastest",34.2]]},
    {"s":34.95,"e":36.26,"text":"just above freezing,","words":[["just",34.95],["above",35.26],["freezing",35.64]]},
    {"s":36.56,"e":38.01,"text":"right at fridge temperature.","words":[["right",36.56],["at",36.86],["fridge",36.98],["temperature",37.35]]},
    {"s":38.56,"e":40.5,"text":"In the freezer, it almost stops.","words":[["in",38.56],["the",38.72],["freezer",38.95],["it",39.49],["almost",39.65],["stops",40.12]]},
    {"s":41.05,"e":41.82,"text":"The fix?","words":[["the",41.05],["fix",41.44]]},
    {"s":42.37,"e":44.07,"text":"Warm stale bread in the oven,","words":[["warm",42.37],["stale",42.67],["bread",43.03],["in",43.4],["the",43.55],["oven",43.77]]},
    {"s":44.37,"e":45.97,"text":"and the crystals melt again.","words":[["and",44.37],["the",44.58],["crystals",44.79],["melt",45.35],["again",45.62]]},
    {"s":46.52,"e":48.53,"text":"It goes soft, almost like fresh,","words":[["it",46.52],["goes",46.68],["soft",47.0],["almost",47.32],["like",47.81],["fresh",48.13]]},
    {"s":48.83,"e":50.4,"text":"but only for a little while.","words":[["but",48.83],["only",49.04],["for",49.33],["a",49.54],["little",49.61],["while",50.04]]},
    {"s":50.95,"e":52.92,"text":"So, fridge, counter, or freezer:","words":[["so",50.95],["fridge",51.11],["counter",51.6],["or",52.18],["freezer",52.34]]},
    {"s":53.22,"e":54.5,"text":"where does your bread live?","words":[["where",53.22],["does",53.51],["your",53.74],["bread",53.98],["live",54.27]]}
  ];
  const PS = (i) => PH[i].s, PE = (i) => PH[i].e;
  // time of a spoken word (visuals lead it by 0.08 s)
  const T = (i, w, lead = 0.08) => { const f = PH[i].words.find((x) => x[0].startsWith(w)); if (!f) { console.warn('no word', i, w); return PH[i].s; } return f[1] - lead; };
  const DURATION = +(PH[PH.length - 1].e + 1.0).toFixed(2);

  window.FONT_SAMPLE = (window.FONT_SAMPLE || '') + 'ふわふわとろカチッぎゅっコンコンガーンぴたっ!?~';
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
  const CRUST = ['#e9a15f', '#bf7638'], CRUST_OLD = ['#c99a6c', '#9a7150'];
  const CRUMB = ['#fff3d2', '#f2d9a6'], CRUMB_OLD = ['#e6dcc3', '#c7b893'];
  const CRYS = ['#ded2ff', '#a792ee'], GEL = ['#ecfff6', '#b9e9d2'];
  const WATER = [C.sky, C.skyS];
  const FRIDGE = ['#e9f6ff', '#b3d8f2'], FREEZE = ['#e7e0ff', '#b4a4ee'];

  // a chibi bread slice. (x,y) = centre; its base sits at y + 215*s.
  function breadPath() {
    const p = new Path2D();
    p.moveTo(-150, 190); p.lineTo(-150, -30);
    p.bezierCurveTo(-218, -62, -212, -212, -82, -206);
    p.bezierCurveTo(-42, -244, 42, -244, 82, -206);
    p.bezierCurveTo(212, -212, 218, -62, 150, -30);
    p.lineTo(150, 190); p.quadraticCurveTo(150, 215, 125, 215); p.lineTo(-125, 215); p.quadraticCurveTo(-150, 215, -150, 190);
    p.closePath(); return p;
  }
  const BREAD = breadPath(), CRUMBP = (() => { const p = new Path2D(); p.addPath(BREAD, new DOMMatrix().translate(0, 14).scale(0.84)); return p; })();
  // P: t, stale (0..1), eyes, mouth, look, sq, lift, steam (0..1), blush
  function bread(ctx, x, y, s, P = {}) {
    const t = P.t || 0, u = H.clamp(P.stale || 0);
    ctx.save(); ctx.translate(x, y - (P.lift || 0)); ctx.scale(s, s);
    const sq = P.sq || [1, 1]; ctx.translate(0, 215); ctx.scale(sq[0], sq[1]); ctx.translate(0, -215);
    if (P.steam) {
      ctx.save(); ctx.globalAlpha = P.steam;
      for (let i = 0; i < 3; i++) {
        const v = ((t * 0.55 + i / 3) % 1), sx = -90 + i * 90, pts = [];
        for (let k = 0; k <= 12; k++) { const yy = -260 - k * 14 - v * 90; pts.push([sx + Math.sin(k * 0.7 + t * 4 + i) * 16, yy]); }
        ctx.globalAlpha = P.steam * (1 - v); tube(ctx, pts, 16, C.white, C.creamS, false);
      }
      ctx.restore();
    }
    const cr = mixC(CRUST, CRUST_OLD, u), cm = mixC(CRUMB, CRUMB_OLD, u);
    cel(ctx, BREAD, cr[0], cr[1], -10, -10, 5);
    shine(ctx, -120, -150, 26, 13, -0.7, 0.8);
    cel(ctx, CRUMBP, cm[0], cm[1], -8, -8, 3.5);
    // airy holes in the crumb
    const r = H.rng(5);
    ctx.save(); ctx.clip(CRUMBP); ctx.fillStyle = H.rgba(H.mix(cm[1], C.plum, 0.12), 0.55);
    for (let i = 0; i < 16; i++) { const hx = r.range(-115, 115), hy = r.range(-150, 190); if (Math.abs(hx) < 95 && hy > -60 && hy < 70) continue; ctx.fill(ellP(hx, hy, r.range(6, 13), r.range(4, 9), r.range(0, 3))); }
    ctx.restore();
    // cracks when stale
    if (u > 0.35) {
      const k = H.clamp((u - 0.35) / 0.5);
      ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.globalAlpha = k;
      const cks = [[[-110, -120], [-80, -95], [-95, -70], [-70, -50]], [[105, 120], [80, 140], [95, 165], [70, 185]], [[110, -110], [88, -80], [100, -60]]];
      cks.forEach((c) => { const pp = partial(c, k); if (pp.length < 2) return; ctx.beginPath(); ctx.moveTo(pp[0][0], pp[0][1]); pp.slice(1).forEach((q) => ctx.lineTo(q[0], q[1])); ctx.stroke(); });
      ctx.restore();
    }
    face(ctx, 0, 0, 1.25, { eyes: P.eyes || 'normal', mouth: P.mouth || 'smile', look: P.look, blush: P.blush != null ? P.blush : u < 0.5, iris: '#c0803f' });
    ctx.restore();
  }
  // a chibi fridge (or freezer). (x,y) = centre; feet at y + 345*s.
  function fridge(ctx, x, y, s, P = {}) {
    const t = P.t || 0, col = P.freezer ? FREEZE : FRIDGE;
    ctx.save(); ctx.translate(x, y - (P.lift || 0)); ctx.scale(s, s);
    const sq = P.sq || [1, 1]; ctx.translate(0, 345); ctx.scale(sq[0], sq[1]); ctx.translate(0, -345);
    for (const fx of [-95, 95]) cel(ctx, rrP(fx - 26, 300, 52, 45, 16), C.lavS, C.lavD, -3, -3, 4);
    const body = rrP(-155, -330, 310, 640, 56);
    cel(ctx, body, col[0], col[1], -12, -12, 5);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-155, -120); ctx.lineTo(155, -120); ctx.stroke(); ctx.restore();
    cel(ctx, rrP(105, -270, 24, 110, 12), C.white, C.creamS, -2, -2, 4); cel(ctx, rrP(105, -80, 24, 160, 12), C.white, C.creamS, -2, -2, 4);
    shine(ctx, -110, -280, 22, 12, -0.7, 0.85);
    // snowflake badge on the top door
    ctx.save(); ctx.translate(-20, -225); ctx.strokeStyle = P.freezer ? C.lavD : C.skyD; ctx.lineWidth = 9; ctx.lineCap = 'round';
    for (let i = 0; i < 3; i++) { ctx.rotate(Math.PI / 3); ctx.beginPath(); ctx.moveTo(-42, 0); ctx.lineTo(42, 0); ctx.moveTo(28, -12); ctx.lineTo(36, 0); ctx.lineTo(28, 12); ctx.moveTo(-28, -12); ctx.lineTo(-36, 0); ctx.lineTo(-28, 12); ctx.stroke(); }
    ctx.restore();
    face(ctx, -10, 40, 1.2, { eyes: P.eyes || 'normal', mouth: P.mouth || 'smile', look: P.look, iris: P.freezer ? '#8f74e6' : '#5aa9ea' });
    if (P.frost) { ctx.save(); ctx.globalAlpha = P.frost; ctx.fillStyle = C.white; const r = H.rng(9); for (let i = 0; i < 10; i++) ctx.fill(ellP(r.range(-140, 140), -330 + r.range(-6, 10), r.range(14, 30), r.range(10, 18))); ctx.restore(); }
    ctx.restore();
  }
  // a chibi oven. (x,y) = centre; feet at y + 235*s. P.glow 0..1; P.inside(ctx) drawn clipped to the window
  function oven(ctx, x, y, s, P = {}) {
    const t = P.t || 0, g = P.glow == null ? 1 : P.glow;
    ctx.save(); ctx.translate(x, y - (P.lift || 0)); ctx.scale(s, s);
    const sq = P.sq || [1, 1]; ctx.translate(0, 235); ctx.scale(sq[0], sq[1]); ctx.translate(0, -235);
    for (const fx of [-170, 170]) cel(ctx, rrP(fx - 26, 195, 52, 40, 14), C.pinkS, C.pinkD, -3, -3, 4);
    cel(ctx, rrP(-250, -230, 500, 440, 56), C.peach, C.peachS, -12, -12, 5);
    cel(ctx, rrP(-215, -205, 430, 90, 30), C.pink, C.pinkS, -5, -5, 4);
    [-150, 150].forEach((kx, i) => { cel(ctx, ellP(kx, -160, 26, 26), C.butter, C.butterS, -3, -3, 4); ctx.save(); ctx.translate(kx, -160); ctx.rotate(t * (i ? -1.5 : 1.5)); ctx.strokeStyle = C.plum; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -18); ctx.stroke(); ctx.restore(); });
    face(ctx, 0, -168, 0.62, { eyes: P.eyes || 'happy', mouth: P.mouth || 'w', iris: '#ff6f9c' });
    const win = rrP(-195, -85, 390, 255, 40);
    ctx.save(); ctx.clip(win);
    const gr = ctx.createLinearGradient(0, -85, 0, 170); gr.addColorStop(0, H.rgba(H.mix('#5a3659', '#ffb347', g))); gr.addColorStop(1, H.rgba(H.mix('#3b2342', '#ff7a59', g)));
    ctx.fillStyle = gr; ctx.fillRect(-200, -90, 400, 270);
    // glowing heating rods
    ctx.strokeStyle = H.rgba(H.mix('#7a4f7a', '#ffe08a', g)); ctx.lineWidth = 10; ctx.lineCap = 'round';
    ctx.beginPath(); for (let i = 0; i < 4; i++) { ctx.moveTo(-160 + i * 100, -65); ctx.lineTo(-120 + i * 100, -65); } ctx.stroke();
    if (P.inside) P.inside(ctx);
    ctx.restore();
    ol(ctx, win, 5); shine(ctx, -150, -55, 30, 10, -0.3, 0.6);
    cel(ctx, rrP(-120, -110, 240, 18, 9), C.white, C.creamS, -2, -2, 3.5);
    ctx.restore();
  }
  // heat waves rising
  function heatWaves(ctx, x, y, w, t, a = 1) {
    ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = C.pinkD; ctx.lineWidth = 9; ctx.lineCap = 'round';
    for (let i = 0; i < 3; i++) { const sx = x - w / 2 + i * w / 2, v = (t * 0.8 + i * 0.33) % 1; ctx.globalAlpha = a * (1 - v); ctx.beginPath(); for (let k = 0; k <= 10; k++) { const yy = y - k * 12 - v * 60, xx = sx + Math.sin(k * 0.9 + t * 5) * 12; k ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke(); }
    ctx.restore();
  }
  // starch lattice: u = 1 packed crystal (tight hexagons), 0 = loose gel blobs. water: P.wT pop-in time (or 1),
  // P.out: 0 water sits between the blobs, 1 squeezed out to the rim, >1 further away (flying in)
  const CELLS = (() => { const out = []; for (let q = -2; q <= 2; q++) for (let r = Math.max(-2, -q - 2); r <= Math.min(2, -q + 2); r++) out.push([q + r / 2, r * Math.sqrt(3) / 2]); return out; })();
  function lattice(ctx, cx, cy, sc, u, t, P = {}) {
    const d = 98, e = H.clamp(u);
    ctx.save(); ctx.translate(cx, cy); ctx.scale(sc, sc);
    // water drops
    const nW = 12, wa = P.water == null ? 0 : P.water;
    const drops = [];
    if (wa > 0) for (let i = 0; i < nW; i++) {
      const a = i / nW * TAU + 0.26, rin = (i % 2 ? 0.9 : 1.75) * d * 1.08, rout = 370 + (i % 2) * 40, o = P.out || 0;
      const rr = o <= 1 ? H.lerp(rin, rout, o) : rout + (o - 1) * 600;
      const k = P.wT != null ? pop(t, P.wT + i * 0.04, 1.2).s : wa;
      drops.push([Math.cos(a) * rr + Math.sin(t * 3 + i) * 6, Math.sin(a) * rr + Math.cos(t * 2.6 + i) * 6, k]);
    }
    const col = mixC(GEL, CRYS, e);
    CELLS.forEach(([px, py], i) => {
      const loose = 1.75, k = H.lerp(loose, 1, H.ease.inOut(e));
      const wob = (1 - e) * 16;
      const x = px * d * k + Math.sin(t * 2.2 + i * 1.7) * wob, y = py * d * k + Math.cos(t * 1.9 + i * 1.3) * wob;
      const R = H.lerp(56, 52, e);
      const p = e > 0.5 ? hexP(x, y, R, Math.PI / 6) : ellP(x, y, R * 1.02, R * 0.92, Math.sin(t + i) * 0.3);
      cel(ctx, p, col[0], col[1], -5, -5, 4);
      shine(ctx, x - R * 0.4, y - R * 0.42, R * 0.16, R * 0.1, -0.6, 0.85);
      if (P.faces !== false) face(ctx, x, y - 4, 0.36, { eyes: P.eyes || (e > 0.8 ? 'normal' : 'happy'), mouth: P.mouth || (e > 0.8 ? 'flat' : 'w'), blush: e < 0.6 });
    });
    drops.forEach(([x, y, k]) => { if (k > 0) drop(ctx, x, y, 1.15 * k, WATER[0], WATER[1], 4); });
    if (P.lock) { const l = P.lock; ctx.save(); ctx.translate(0, -330); ctx.scale(l, l); padlock(ctx, 0, 0, 1.1); ctx.restore(); }
    ctx.restore();
  }
  function padlock(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 34; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, -20, 48, Math.PI, 0); ctx.lineTo(48, 10); ctx.moveTo(-48, -20); ctx.lineTo(-48, 10); ctx.stroke();
    ctx.strokeStyle = C.lavS; ctx.lineWidth = 22; ctx.stroke(); ctx.restore();
    cel(ctx, rrP(-78, 0, 156, 120, 28), C.butterD, C.butterS, -6, -6, 5);
    ctx.fillStyle = C.plum; ctx.fill(ellP(0, 45, 14, 14)); ctx.fill(rrP(-6, 45, 12, 38, 6));
    ctx.restore();
  }
  // a see-through bag around (x,y)
  function bag(ctx, x, y, s, k) {
    if (k <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k);
    const p = new Path2D(); p.moveTo(-230, -300); p.lineTo(230, -300); p.lineTo(250, 280); p.quadraticCurveTo(250, 310, 220, 310); p.lineTo(-220, 310); p.quadraticCurveTo(-250, 310, -250, 280); p.closePath();
    ctx.fillStyle = 'rgba(200,230,255,0.32)'; ctx.fill(p); ol(ctx, p, 5);
    ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.fill(rrP(-200, -260, 34, 300, 17));
    // twist tie on top
    cel(ctx, rrP(-70, -335, 140, 40, 20), C.pinkD, '#e2527f', -3, -3, 4);
    ctx.restore();
  }
  // a chibi counter: a cutting board with a little plate
  function board(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    cel(ctx, rrP(-160, -60, 320, 120, 40), C.brown, C.brownS, -6, -6, 5);
    cel(ctx, ellP(150, 0, 30, 30), C.cream, C.creamS, -3, -3, 4);
    ctx.fillStyle = C.brownS; for (let i = 0; i < 3; i++) ctx.fill(rrP(-120 + i * 70, 20, 40, 8, 4));
    bread(ctx, -10, -130, 0.36, { eyes: 'happy', mouth: 'w' });
    ctx.restore();
  }
  // a vertical thermometer: bulb at (x, yb), tube up to yt; level 0..1
  function thermo(ctx, x, yt, yb, level, col) {
    const tubeP = rrP(x - 34, yt, 68, yb - yt, 34), bulb = ellP(x, yb, 62, 62);
    union(ctx, [tubeP, bulb], C.white, 5);
    const ly = H.lerp(yb, yt + 40, level);
    ctx.save(); ctx.fillStyle = col; ctx.fill(rrP(x - 18, ly, 36, yb - ly, 18)); ctx.fill(ellP(x, yb, 44, 44)); ctx.restore();
    shine(ctx, x - 16, yb - 22, 12, 8, -0.6);
  }
  const SAFE = { base: '#fff3e3', dot: '#ffe5c9', acc: '#ffc4d6', kind: 'hearts' };
  const COOL = { base: '#e3f3ff', dot: '#cfe8fb', acc: '#ffffff', kind: 'stars' };
  const WARM = { base: '#fff0e0', dot: '#ffdcc4', acc: '#fff3b0', kind: 'hearts' };
  const HEAD_Y = 400; // headline baseline (safe below the top 150 px)
  const head = (ctx, t, t0, str, size = 112, o = {}, t1 = null, y = HEAD_Y) => ptext(ctx, t, t0, 540, y, str, size, o, t1);
  const bigNum = { fill: C.pinkD, line: C.white, outer: C.plum, ow: 0.07, lw: 0.13 };
  const HO = (fill, line) => ({ fill, line, outer: C.plum, ow: 0.08, lw: 0.2 });

  // ======================================== SCENES ========================================
  const SC = [];
  const scene = (first, tr, theme, seed, draw, wx = 540, wy = 1000) => SC.push({ s: first === 0 ? 0 : PS(first) - 0.5, first, tr, theme, seed, draw, wx, wy });

  // 1 HOOK: your fridge is wasting your bread -> stale 6x faster -> but why?
  scene(0, null, TH.sky, 3, (ctx, t) => {
    twinkles(ctx, W, HH, t, 21, 12, (x, y) => y > 600 && y < 1600);
    const wst = T(0, 'wasting'), six = T(1, 'six'), why = T(2, 'why');
    const stale = H.ease.inOut(prog(t, wst, wst + 1.2));
    fridge(ctx, 290, 1150, 1.0, { t, eyes: t >= why ? 'shock' : t >= wst ? 'happy' : 'normal', mouth: t >= why ? 'O' : t >= wst ? 'w' : 'smile', look: [0.5, 0], lift: bob(t, 0, 5), sq: squash(t, T(0, 'fridge'), 0.12), frost: 1 });
    const bp = pop(t, T(0, 'bread') - 0.15, 1.2);
    if (bp.s > 0) { ctx.save(); ctx.translate(770, 1280); ctx.scale(bp.sx, bp.sy); bread(ctx, 0, 0, 0.95, { t, stale, eyes: t >= why ? 'swirl' : stale > 0.5 ? 'shock' : 'normal', mouth: stale > 0.5 ? 'wobble' : 'smile', look: [-0.5, 0], lift: bob(t, 1, 5) }); ctx.restore(); }
    ptag(ctx, t, T(0, 'fridge'), 290, 700, 'fridge', C.sky, 58, PS(1) - 0.1);
    kWord(ctx, 'YOUR FRIDGE', 540, 330, 120, t, T(0, 'your'), 0.03, { ...HO(C.white, C.skyD), t1: PS(1) - 0.1 });
    if (t >= wst) kWord(ctx, 'wastes bread!', 540, 470, 100, t, wst, 0.03, { ...HO(C.butter, C.pinkD), t1: PS(1) - 0.1 });
    if (t >= wst + 0.4) sweat(ctx, 920, 1000, pop(t, wst + 0.4).s * 1.3, 0.3);
    // 6x faster
    if (t >= six - 0.05 && t < PS(2) - 0.05) {
      const p = pop(t, six - 0.05, 1.6), o = popOut(t, PS(2) - 0.1);
      ctx.save(); ctx.translate(540, 560); ctx.rotate(-0.05); ctx.scale(p.sx * o, p.sy * o); kText(ctx, '6x', 0, 0, 260, bigNum); ctx.restore();
      impactLines(ctx, 540, 480, 230, t, six, 14, C.pinkD);
      kWord(ctx, 'FASTER!', 540, 760, 110, t, T(1, 'faster'), 0.03, { ...HO(C.butter, C.pinkD), t1: PS(2) - 0.1 });
      ptag(ctx, t, T(1, 'stale'), 540, 300, 'stale', C.butter, 54, PS(2) - 0.1);
    }
    if (t >= PS(2) - 0.1) {
      const p = pop(t, why, 1.6);
      if (p.s > 0) { ctx.save(); ctx.translate(540, 520); ctx.rotate(-0.06 + 0.04 * Math.sin(t * 14)); ctx.scale(p.sx, p.sy); kText(ctx, 'WHY?', 0, 0, 210, bigNum); ctx.restore(); impactLines(ctx, 540, 450, 230, t, why, 14, C.pinkD); }
      for (const [tt, x, y, sz] of [[T(2, 'but'), 170, 760, 120], [why + 0.1, 910, 760, 110]]) { const q = pop(t, tt, 1.4); if (q.s <= 0) continue; ctx.save(); ctx.translate(x, y); ctx.rotate(0.14 * Math.sin(t * 9 + x)); ctx.scale(q.sx, q.sy); kText(ctx, '?', 0, 0, sz, HO(C.butter, C.pinkD)); ctx.restore(); }
    }
  });

  // 2 FRESH BREAD: soft because of starch
  scene(3, 'star', TH.butter, 5, (ctx, t) => {
    twinkles(ctx, W, HH, t, 31, 10, (x, y) => y > 560 && y < 1700);
    const sT = T(3, 'starch'), soft = T(3, 'soft');
    const zm = H.ease.inOut(prog(t, sT - 0.1, sT + 0.5));
    bread(ctx, H.lerp(540, 380, zm), 1150, H.lerp(1.35, 1.05, zm), { t, steam: 1, eyes: t >= soft ? 'happy' : 'normal', mouth: 'w', lift: bob(t, 0, 7), sq: squash(t, soft, 0.2) });
    head(ctx, t, T(3, 'fresh'), 'fresh bread', 104, HO(C.white, C.pinkD), sT - 0.1);
    if (t >= soft) kana(ctx, 'ふわふわ', 820, 760, 70, 0.15, pop(t, soft).s * popOut(t, sT - 0.1), C.pink);
    if (t >= sT - 0.1) {
      // magnifier onto the crumb: starch granules
      popIn(ctx, t, sT - 0.1, 760, 900, () => {
        const R = 220, c = ellP(0, 0, R, R);
        cel(ctx, c, '#fff8e6', C.butterS, -6, -6, 6);
        ctx.save(); ctx.clip(c); lattice(ctx, 0, 0, 0.42, 1, t, { faces: true }); ctx.restore();
        ol(ctx, c, 8); ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 46; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-160, 160); ctx.lineTo(-250, 250); ctx.stroke(); ctx.strokeStyle = C.pinkD; ctx.lineWidth = 32; ctx.stroke(); ctx.restore();
        shine(ctx, -90, -110, 40, 18, -0.7, 0.8);
      }, 1.2);
      dotted(ctx, bez([480, 1100], [520, 1000], [560, 960], [580, 940]), H.ease.out(prog(t, sT, sT + 0.4)), C.pinkD, 7, 22, 1);
      head(ctx, t, sT, 'STARCH', 140, HO(C.butter, C.pinkD));
      ptag(ctx, t, sT + 0.25, 760, 1180, 'tiny crystals', C.lav, 48);
    }
  });

  // 3 IN THE OVEN: starch soaks up water -> its tight crystals melt into a soft gel
  scene(4, 'heart', WARM, 7, (ctx, t) => {
    twinkles(ctx, W, HH, t, 41, 8, (x, y) => y > 560 && y < 1700);
    const wT = T(4, 'water'), sk = T(4, 'soaks'), ml = T(5, 'melt'), gel = T(5, 'gel');
    // big oven frame around the lattice
    const op = pop(t, PS(4) - 0.4, 0.8);
    ctx.save(); ctx.translate(540, 1100); ctx.scale(Math.max(0.01, op.sx), Math.max(0.01, op.sy)); ctx.translate(-540, -1100);
    const frame = rrP(60, 640, 960, 960, 80);
    cel(ctx, frame, C.peach, C.peachS, -10, -10, 5);
    const win = rrP(110, 690, 860, 860, 60);
    ctx.save(); ctx.clip(win);
    const gr = ctx.createLinearGradient(0, 690, 0, 1550); gr.addColorStop(0, '#ffd27a'); gr.addColorStop(1, '#ff9a7a'); ctx.fillStyle = gr; ctx.fillRect(100, 680, 880, 880);
    const u = 1 - H.ease.inOut(prog(t, ml, gel + 0.3));
    const out = sk > 0 ? 1 + 0.8 * (1 - H.ease.out(prog(t, sk - 0.1, wT + 0.4))) : 1;
    const soak = H.ease.inOut(prog(t, ml - 0.3, gel));
    lattice(ctx, 540, 1120, 0.95, u, t, { water: t >= sk - 0.1 ? 1 : 0, wT: sk - 0.1, out: H.lerp(out, 0, soak), eyes: u < 0.6 ? 'happy' : 'normal', mouth: u < 0.6 ? 'w' : 'smile' });
    ctx.restore(); ol(ctx, win, 6);
    ctx.restore();
    heatWaves(ctx, 540, 610, 520, t, op.s);
    head(ctx, t, T(4, 'oven'), 'IN THE OVEN', 112, HO(C.butter, C.pinkD), PS(5) - 0.1);
    if (t >= sk - 0.1 && t < PS(5)) ptag(ctx, t, wT, 540, 1660 - 40, '+ water', C.sky, 54, PS(5) - 0.1);
    if (t >= PS(5) - 0.1) {
      head(ctx, t, T(5, 'crystals'), 'crystals', 96, HO(C.lav, C.lavD), gel - 0.1, 250);
      if (t >= ml) { kWord(ctx, 'MELT', 540, 420, 128, t, ml, 0.04, { ...HO(C.butter, C.pinkD), t1: gel - 0.3 }); }
      if (t >= gel - 0.1) { kWord(ctx, 'soft GEL', 540, HEAD_Y, 128, t, gel - 0.1, 0.03, HO(GEL[0], C.mintD)); kana(ctx, 'とろ~', 860, 560, 66, 0.15, pop(t, gel).s, C.mint); }
    }
  });

  // 4 COOLING: the starch packs back into crystals (retrogradation) -> squeezes the water out -> locks it away
  scene(6, 'star', COOL, 9, (ctx, t) => {
    twinkles(ctx, W, HH, t, 51, 12, (x, y) => y > 560 && y < 1600);
    const cl = T(6, 'cools'), pk = T(7, 'packs'), rg = T(8, 'retrogradation'), sqz = T(9, 'squeeze'), lk = T(10, 'lock');
    const u = H.ease.inOut(prog(t, pk - 0.1, T(7, 'crystals') + 0.4));
    const out = H.ease.back(prog(t, sqz, sqz + 0.7));
    const zoom = H.lerp(0.95, 1.05, H.ease.inOut(prog(t, PS(9) - 0.3, PS(9) + 0.4)));
    const sq = t >= sqz ? squash(t, sqz, 0.18) : [1, 1];
    ctx.save(); ctx.translate(540, 1150); ctx.scale(sq[0], sq[1]); ctx.translate(-540, -1150);
    lattice(ctx, 540, 1150, zoom * 1.25, u, t, { water: 1, out: out * 0.95, eyes: t >= sqz ? 'squeeze' : u > 0.8 ? 'normal' : t >= cl ? 'blink' : 'happy', mouth: t >= sqz ? 'flat' : u > 0.8 ? 'flat' : 'w', lock: t >= lk ? pop(t, lk, 1.4).s : 0 });
    ctx.restore();
    // cooling breeze + snowflake
    if (t < PS(8)) {
      head(ctx, t, T(6, 'cools'), 'cools down', 108, HO(C.white, C.skyD), PS(7) - 0.1);
      for (let i = 0; i < 3; i++) { const v = H.ease.out(prog(t, cl + i * 0.12, cl + i * 0.12 + 0.6)); dotted(ctx, [[60, 820 + i * 90], [240, 800 + i * 90]], v, C.skyD, 7, 22, 1); }
      if (t >= PS(7) - 0.1) kWord(ctx, 'back into crystals', 540, HEAD_Y, 82, t, T(7, 'back'), 0.02, { ...HO(C.lav, C.lavD), t1: PS(8) - 0.1 });
      if (t >= pk) kana(ctx, 'カチッ', 880, 620, 66, 0.15, pop(t, T(7, 'crystals')).s, C.lav);
    }
    if (t >= PS(8) - 0.1 && t < PS(9) - 0.1) {
      ptag(ctx, t, T(8, 'scientists'), 540, 220, 'scientists call it', C.mint, 46, PS(9) - 0.15);
      kWord(ctx, 'RETRO-', 540, 360, 120, t, rg, 0.03, { ...HO(C.butter, C.pinkD), t1: PS(9) - 0.15 });
      kWord(ctx, 'GRADATION', 540, 500, 120, t, rg + 0.25, 0.03, { ...HO(C.butter, C.pinkD), t1: PS(9) - 0.15 });
      impactLines(ctx, 540, 430, 300, t, rg + 0.3, 14, C.pinkD);
    }
    if (t >= PS(9) - 0.1) {
      head(ctx, t, sqz, 'SQUEEZE!', 130, HO(C.sky, C.skyD), lk - 0.1);
      if (t >= sqz) kana(ctx, 'ぎゅっ', 860, 600, 72, -0.12, pop(t, sqz + 0.1).s * popOut(t, lk - 0.1), C.pink);
      if (t >= lk) head(ctx, t, lk, 'LOCKED AWAY', 112, HO(C.butter, C.lavD));
    }
  });

  // 5 STALE: crumb turns hard, barely dried out -> sealed bread still goes stale
  scene(11, 'heart', TH.lav, 11, (ctx, t) => {
    twinkles(ctx, W, HH, t, 61, 10, (x, y) => y > 560 && y < 1700);
    const hd = T(11, 'hard'), br = T(12, 'barely'), sl = T(13, 'sealed'), stl = T(13, 'stale');
    const knock = [hd, hd + 0.3];
    const sq = knock.reduce((a, k) => (t >= k ? squash(t, k, 0.1) : a), [1, 1]);
    const bx = t >= PS(13) - 0.1 ? 540 : 540;
    bread(ctx, bx, 1150, 1.15, { t, stale: 1, eyes: t >= stl ? 'swirl' : t >= hd ? 'squeeze' : 'normal', mouth: t >= hd ? 'wobble' : 'flat', lift: bob(t, 0, 4), sq });
    head(ctx, t, T(11, 'crumb'), 'crumb', 100, HO(C.white, C.lavD), hd - 0.05, 400);
    if (t >= hd && t < PS(12)) { head(ctx, t, hd, 'HARD!', 150, HO(C.butter, C.red), PS(12) - 0.1); knock.forEach((k, i) => impactLines(ctx, 760, 900, 70, t, k, 10, C.plum)); kana(ctx, 'コンコン', 840, 800, 66, 0.15, pop(t, hd).s, C.lav); popIn(ctx, t, hd - 0.15, 860, 940, () => { ctx.rotate(-0.6 + 0.2 * Math.sin(t * 20)); cel(ctx, rrP(-18, -10, 36, 150, 14), C.brown, C.brownS, -3, -3, 4); cel(ctx, rrP(-70, -60, 140, 70, 24), C.lavS, C.lavD, -4, -4, 4.5); }, 1, PS(12) - 0.1); }
    if (t >= PS(12) - 0.1 && t < PS(13) - 0.1) {
      // water meter: still almost full
      popIn(ctx, t, T(12, 'barely') - 0.1, 870, 820, () => {
        const m = rrP(-70, -170, 140, 340, 60); cel(ctx, m, C.white, C.creamS, -4, -4, 5);
        const lvl = 0.92 + 0.02 * Math.sin(t * 3);
        ctx.save(); ctx.clip(m); ctx.fillStyle = C.sky; ctx.fillRect(-80, 170 - 340 * lvl, 160, 340); ctx.restore(); ol(ctx, m, 5);
        drop(ctx, 0, -230, 1.3, WATER[0], WATER[1], 4);
      }, 1.3, PS(13) - 0.15);
      ptext(ctx, t, T(12, 'dried'), 870, 1080, 'still wet!', 60, HO(C.sky, C.skyD), PS(13) - 0.15);
      head(ctx, t, br, 'barely dried', 104, HO(C.white, C.skyD), PS(13) - 0.15);
    }
    if (t >= sl - 0.1) {
      bag(ctx, 540, 1180, 1.05, pop(t, sl - 0.1, 0.9).s);
      head(ctx, t, sl, 'sealed...', 110, HO(C.sky, C.skyD), stl - 0.05);
      if (t >= stl) { head(ctx, t, stl, 'STILL STALE', 116, HO(C.butter, C.red)); kana(ctx, 'ガーン', 220, 1620, 70, -0.15, pop(t, stl + 0.1).s, C.lav); }
    }
  });

  // 6 TEMPERATURE: crystal building is fastest just above freezing = fridge; the freezer almost stops it
  scene(14, 'star', TH.mint, 13, (ctx, t) => {
    twinkles(ctx, W, HH, t, 71, 8, (x, y) => y > 500 && y < 1700);
    const fs = T(14, 'fastest'), fz = T(15, 'freezing'), fr = T(16, 'fridge'), fzr = T(17, 'freezer'), stp = T(17, 'stops');
    // three columns: freezer, fridge, counter; bars = staling speed
    const COLS = [
      { x: 230, label: 'freezer', temp: '-18°C', h: 0.04, t0: fzr, icon: 'freezer' },
      { x: 540, label: 'fridge', temp: '4°C', h: 1.0, t0: fr, icon: 'fridge' },
      { x: 850, label: 'counter', temp: '20°C', h: 0.32, t0: PS(14) - 0.2, icon: 'board' },
    ];
    const base = 1480, maxH = 560;
    ctx.save(); ctx.strokeStyle = C.plum; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(90, base); ctx.lineTo(990, base); ctx.stroke(); ctx.restore();
    ptag(ctx, t, PS(14) - 0.2, 540, 470, 'staling speed', C.white, 50);
    COLS.forEach((c, i) => {
      if (t < c.t0 - 0.1) return;
      const g = c.icon === 'freezer' ? H.lerp(0.35, c.h, H.ease.out(prog(t, c.t0, stp + 0.2))) : c.h * H.ease.back(prog(t, c.t0, c.t0 + 0.55));
      const hh = Math.max(22, maxH * g), col = c.icon === 'fridge' ? [C.pinkD, '#e2527f'] : c.icon === 'freezer' ? [C.lav, C.lavS] : [C.butterD, C.butterS];
      cel(ctx, rrP(c.x - 95, base - hh, 190, hh, 30), col[0], col[1], -6, -6, 5);
      popIn(ctx, t, c.t0 - 0.1, c.x, base + 70, () => kText(ctx, c.label, 0, 0, 52, HO(C.white, C.lavD)), 1.2);
      popIn(ctx, t, c.t0, c.x, base + 140, () => kText(ctx, c.temp, 0, 0, 48, { fill: C.plum, line: C.white, lw: 0.18, shadow: false }), 1.2);
      // a small icon on top of each bar
      const iy = base - hh - 110;
      popIn(ctx, t, c.t0, c.x, iy, () => {
        if (c.icon === 'board') board(ctx, 0, 40, 0.5);
        else fridge(ctx, 0, -40, 0.28, { t, freezer: c.icon === 'freezer', eyes: c.icon === 'freezer' ? (t >= stp ? 'blink' : 'normal') : 'star', mouth: c.icon === 'freezer' ? 'flat' : 'O', frost: 1 });
      }, 1.2);
    });
    if (t >= fr + 0.3) { ptext(ctx, t, fr + 0.3, 540, base - maxH - 290, 'FASTEST', 74, HO(C.butter, C.red)); impactLines(ctx, 540, base - maxH / 2, 160, t, fr + 0.3, 12, C.red); }
    if (t >= stp) { ptext(ctx, t, stp, 230, base - 530, 'almost stops', 54, HO(C.white, C.lavD)); popIn(ctx, t, stp, 230, base - 410, () => { cel(ctx, ellP(0, 0, 50, 50), C.lav, C.lavS, -4, -4, 4.5); ctx.fillStyle = C.plum; ctx.fill(rrP(-20, -24, 14, 48, 5)); ctx.fill(rrP(6, -24, 14, 48, 5)); }, 1.4); }
    // headlines
    if (t < fz - 0.1) head(ctx, t, fs - 0.1, 'FASTEST WHERE?', 100, HO(C.white, C.pinkD), fz - 0.1, 330);
    if (t >= fz - 0.1 && t < fr - 0.1) head(ctx, t, fz - 0.1, 'just above 0°C', 104, HO(C.sky, C.skyD), fr - 0.1, 330);
    if (t >= fr - 0.1 && t < fzr - 0.1) head(ctx, t, fr - 0.1, 'FRIDGE TEMP!', 116, HO(C.butter, C.pinkD), fzr - 0.1, 330);
    if (t >= fzr - 0.1) head(ctx, t, fzr - 0.1, 'freezer: paused', 100, HO(C.lav, C.lavD), null, 330);
  });

  // 7 THE FIX: warm stale bread in the oven -> crystals melt again -> soft, almost like fresh -> only for a while
  scene(18, 'heart', WARM, 15, (ctx, t) => {
    twinkles(ctx, W, HH, t, 81, 10, (x, y) => y > 560 && y < 1700);
    const fx = T(18, 'fix'), wm = T(19, 'warm'), ov = T(19, 'oven'), ml = T(20, 'melt'), sf = T(21, 'soft'), lt = T(22, 'little');
    const inU = H.ease.inOut(prog(t, wm, ov + 0.3)), outU = H.ease.back(prog(t, sf - 0.3, sf + 0.3));
    const glow = H.clamp(prog(t, ov - 0.2, ov + 0.3));
    oven(ctx, 540, 1180, 1.45, { t, glow, eyes: t >= ml ? 'happy' : t >= fx ? 'normal' : 'normal', mouth: t >= ml ? 'w' : 'smile', sq: squash(t, ov + 0.3, 0.12), lift: bob(t, 0, 3), inside: (c) => {
      if (t >= ov + 0.2 && t < ml - 0.3) bread(c, 0, 0, 0.45, { t, stale: 1, eyes: 'swirl', mouth: 'wobble' });
      if (t >= ml - 0.3 && t < sf - 0.3) { const u = 1 - H.ease.inOut(prog(t, ml, ml + 0.9)); lattice(c, 0, 40, 0.34, u, t, { water: 1, out: H.lerp(0.95, 0, 1 - u) }); }
    } });
    if (t >= fx - 0.1 && t < sf - 0.3) {
      const bx = 540, by = H.lerp(560, 1220, inU), bs = H.lerp(0.9, 0.45, inU);
      if (inU < 1) bread(ctx, bx, by, bs, { t, stale: 1, eyes: 'swirl', mouth: 'wobble', lift: bob(t, 0, 4) });
    }
    if (t >= sf - 0.3) {
      const by = H.lerp(1220, 740, outU), bs = H.lerp(0.45, 1.0, outU);
      const worried = t >= lt;
      bread(ctx, 540, by, bs, { t, stale: worried ? 0.25 * H.ease.out(prog(t, lt, lt + 1.2)) : 0, steam: 1, eyes: worried ? 'normal' : 'happy', mouth: worried ? 'wobble' : 'w', lift: bob(t, 0, 6) });
      if (t >= sf) { for (let i = 0; i < 4; i++) sparkle(ctx, [250, 830, 240, 840][i], [560, 600, 900, 880][i], (22 + 8 * Math.sin(t * 8 + i)) * pop(t, sf + i * 0.07).s, i % 2 ? C.white : C.butter, 0, 3.5); kana(ctx, 'ふわっ', 860, 450, 66, 0.15, pop(t, sf + 0.1).s * popOut(t, lt - 0.1), C.pink); }
      if (worried) { sweat(ctx, 700, 600, pop(t, lt + 0.1).s * 1.3, 0.3); popIn(ctx, t, lt - 0.1, 200, 620, () => clock(ctx, 0, 0, 90, (t - lt) * 6), 1.3); }
    }
    if (t < PS(19) - 0.1) { const p = pop(t, fx, 1.5); if (p.s > 0) { ctx.save(); ctx.translate(540, 380); ctx.rotate(-0.05); ctx.scale(p.sx * popOut(t, PS(19) - 0.15), p.sy * popOut(t, PS(19) - 0.15)); kText(ctx, 'THE FIX?', 0, 0, 140, HO(C.butter, C.pinkD)); ctx.restore(); } }
    if (t >= PS(19) - 0.1 && t < PS(20) - 0.1) head(ctx, t, wm, 'WARM IT UP', 116, HO(C.butter, C.red), PS(20) - 0.1, 300);
    if (t >= PS(20) - 0.1 && t < sf - 0.3) head(ctx, t, ml, 'crystals melt', 100, HO(GEL[0], C.mintD), sf - 0.35, 300);
    if (t >= sf - 0.1 && t < lt - 0.1) head(ctx, t, sf, 'SOFT AGAIN!', 124, HO(C.butter, C.pinkD), lt - 0.1, 300);
    if (t >= lt - 0.1) head(ctx, t, lt, '...for a while', 100, HO(C.white, C.lavD), null, 300);
  });

  // 8 QUESTION: fridge, counter or freezer -> where does your bread live?
  scene(23, 'star', TH.pink, 19, (ctx, t) => {
    twinkles(ctx, W, HH, t, 101, 12, (x, y) => y > 600 && y < 1700);
    const f1 = T(23, 'fridge'), c1 = T(23, 'counter'), z1 = T(23, 'freezer'), lv = T(24, 'live');
    const SLOTS = [[210, 'fridge', f1, C.sky], [540, 'counter', c1, C.butter], [870, 'freezer', z1, C.lav]];
    SLOTS.forEach(([x, label, t0, col], i) => {
      popIn(ctx, t, t0 - 0.1, x, 1260, () => {
        cel(ctx, rrP(-145, -260, 290, 400, 40), C.white, C.creamS, -6, -6, 5);
        if (label === 'counter') board(ctx, 0, -20, 0.62); else fridge(ctx, 0, -90, 0.42, { t, freezer: label === 'freezer', eyes: 'happy', mouth: 'w', frost: 1 });
        tag(ctx, 0, 90, label, col, 1, 44);
      }, 1.3);
    });
    // the slice hops between the choices
    const hopT = (t - f1) / 0.55, idx = t < f1 ? -1 : Math.min(2, Math.floor(hopT)), fr_ = t < f1 ? 0 : hopT - Math.floor(hopT);
    const bxs = [210, 540, 870];
    let bx = 540, by = 820;
    if (t >= f1 && t < lv) { const a = bxs[Math.max(0, idx)], b = bxs[Math.min(2, idx + 1)]; const k = idx >= 2 ? 0 : H.ease.inOut(H.clamp(fr_)); bx = H.lerp(a, b, k); by = 820 - Math.sin(k * Math.PI) * 120; }
    if (t >= lv) { bx = 540; by = 820; }
    bread(ctx, bx, by, 0.78, { t, eyes: t >= lv ? 'star' : 'normal', mouth: t >= lv ? 'O' : 'smile', lift: bob(t, 0, 6), sq: t >= lv ? squash(t, lv, 0.2) : [1, 1] });
    kWord(ctx, 'Where does', 540, 340, 100, t, T(24, 'where'), 0.03, { fill: C.white, line: C.lavD, track: 2 });
    kWord(ctx, 'YOUR bread live?', 540, 480, 92, t, T(24, 'your') - 0.05, 0.03, { ...HO(C.butter, C.pinkD), track: 2 });
    if (t >= lv) { impactLines(ctx, 540, 820, 200, t, lv + 0.05, 14, C.pinkD); confetti(ctx, t, lv + 0.05, 540, 800, 50, 9, 1.2); ptag(ctx, t, lv + 0.25, 540, 1590, 'comment below!', C.pink, 52); }
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
    const melt = (t, d = 0.9) => k.tone(t, { f: [[0, 700], [d, 260]], type: 'triangle', dur: d, gain: 0.09, a: d * 0.3, minor: true });
    const crys = (t, n = 6) => { for (let i = 0; i < n; i++) k.play('tick', t + i * 0.08, { f: 5200 + i * 300, gain: 0.5, minor: true }); bell(t + n * 0.08, 'E6', 0.8); };
    const plips = (t, n, step) => { for (let i = 0; i < n; i++) bloop(t + i * step, 700 + (i % 4) * 90, 0.45, { minor: true }); };
    SC.forEach((sc, i) => { if (i > 0) iris(sc.s, 0.5, ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'C6', 'D6'][i % 8]); });
    // 1 hook
    bloop(vis(T(0, 'fridge')), 420, 0.9); bloop(vis(T(0, 'bread') - 0.15), 520, 0.9);
    { const t = vis(T(0, 'wasting')); aww(t + 0.2); k.tone(t, { f: [[0, 500], [1.1, 260]], type: 'triangle', dur: 1.1, gain: 0.07, a: 0.4, minor: true }); }
    { const t = vis(T(1, 'six') - 0.05); big(t); k.play('impact', t, { gain: 0.35 }); }
    k.play('whoosh', T(1, 'faster') - 0.1, { dur: 0.35, gain: 0.45 }); bloop(vis(T(1, 'stale')), 360, 0.7, { minor: true });
    bloop(vis(T(2, 'but')), 360, 0.8); { const t = vis(T(2, 'why')); big(t); }
    // 2 fresh bread
    { const t = vis(T(3, 'fresh')); bloop(t, 520, 0.9); shimmer(t, 0.5, 0.6); }
    { const t = vis(T(3, 'soft')); boing(t, 0.9); }
    { const t = vis(T(3, 'starch') - 0.1); k.play('swish', t, { gain: 0.45 }); big(t + 0.1); }
    // 3 oven
    k.play('whoosh', PS(4) - 0.4, { dur: 0.5, gain: 0.5 }); { const t = vis(T(4, 'oven')); k.play('thud', t, { f: 110, gain: 0.35 }); bloop(t, 460, 0.8); }
    plips(vis(T(4, 'soaks') - 0.1), 12, 0.04);
    bloop(vis(T(5, 'crystals')), 560, 0.8); { const t = vis(T(5, 'melt')); melt(t, 1.0); bloop(t, 400, 0.9); }
    { const t = vis(T(5, 'gel') - 0.1); boing(t, 1); twinkle(t + 0.1, 4, 0.7); }
    // 4 cooling + retrogradation
    { const t = T(6, 'cools'); for (let i = 0; i < 3; i++) k.play('swish', t + i * 0.12, { gain: 0.35, dur: 0.25 }); }
    crys(vis(T(7, 'packs') - 0.1), 7);
    { const t = vis(T(8, 'retrogradation')); k.play('stamp', t, { gain: 0.35 }); k.play('stamp', t + 0.25, { gain: 0.35 }); twinkle(t + 0.4, 4, 0.8, false); }
    bloop(vis(T(8, 'scientists')), 520, 0.7, { minor: true });
    { const t = vis(T(9, 'squeeze')); k.play('impact', t, { gain: 0.4 }); plips(t + 0.05, 8, 0.05); }
    { const t = vis(T(10, 'lock')); k.play('click', t, { gain: 0.8 }); k.play('tock', t + 0.06, { f: 600, gain: 0.6 }); }
    // 5 stale
    bloop(vis(T(11, 'crumb')), 480, 0.8);
    { const t = vis(T(11, 'hard')); k.play('tock', t, { f: 520, gain: 0.9 }); k.play('tock', t + 0.3, { f: 520, gain: 0.9 }); k.play('thud', t, { f: 150, gain: 0.3 }); }
    { const t = vis(T(12, 'barely') - 0.1); bloop(t, 520, 0.9); plips(t + 0.2, 3, 0.1); }
    bloop(vis(T(12, 'dried')), 620, 0.7, { minor: true });
    { const t = vis(T(13, 'sealed') - 0.1); k.play('paper', t, { dur: 0.4, gain: 0.6 }); }
    { const t = vis(T(13, 'stale')); k.play('error', t, { gain: 0.5 }); aww(t + 0.15); }
    // 6 temperature
    { const t = vis(PS(14) - 0.2); bloop(t, 440, 0.8); k.tone(t, { f: [[0, 220], [0.5, 360]], type: 'triangle', dur: 0.5, gain: 0.06, a: 0.3, minor: true }); }
    bloop(vis(T(14, 'fastest') - 0.1), 560, 0.8); bloop(vis(T(15, 'freezing') - 0.1), 600, 0.8);
    { const t = vis(T(16, 'fridge')); k.play('riser', t - 0.2, { dur: 0.5, gain: 0.5 }); big(t + 0.3); k.play('success', t + 0.35, { gain: 0.25 }); }
    { const t = vis(T(17, 'freezer')); bloop(t, 400, 0.9); k.tone(t, { f: [[0, 600], [0.8, 180]], type: 'triangle', dur: 0.8, gain: 0.08, a: 0.1, minor: true }); }
    { const t = vis(T(17, 'stops')); k.play('stamp', t, { gain: 0.35 }); bell(t + 0.05, 'C6', 0.9); }
    // 7 the fix
    { const t = vis(T(18, 'fix')); big(t); }
    { const t = T(19, 'warm'); k.play('whoosh', t, { dur: 0.6, gain: 0.45 }); k.play('thud', vis(T(19, 'oven') + 0.3), { f: 110, gain: 0.4 }); k.play('click', vis(T(19, 'oven')), { gain: 0.6 }); }
    { const t = vis(T(20, 'melt')); melt(t, 0.9); bloop(t, 420, 0.8); }
    { const t = vis(T(21, 'soft')); boing(t - 0.2, 1.1); k.play('success', t, { gain: 0.3 }); twinkle(t + 0.1, 5, 0.9, false); }
    { const c0 = T(22, 'little') - 0.1; bloop(vis(c0), 500, 0.8); for (let i = 0; i < 10; i++) k.play('tick', c0 + i * 0.13, { gain: 0.45, minor: true }); }
    // 8 question
    [T(23, 'fridge'), T(23, 'counter'), T(23, 'freezer')].forEach((t0, i) => { bloop(vis(t0 - 0.1), 440 + i * 100, 0.9); k.play('jump', t0 + 0.05, { gain: 0.35, minor: true }); });
    bloop(vis(T(24, 'where')), 520, 0.8, { minor: true });
    { const t = vis(T(24, 'live')); boing(t, 1.3); k.play('impact', t, { gain: 0.5 }); ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bell(t + 0.1 + i * 0.05, n, 1.4, { dur: 1.2 })); twinkle(t + 0.3, 5, 0.9, false); }
  }

  window.BEATS = PH; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
