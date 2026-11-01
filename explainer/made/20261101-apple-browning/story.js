// ================= Flat-Vector Science, vertical 1080x1920: "Why do cut apples turn brown?" =================
// Unattended run: no storyboard step (Ashu's Telegram Publish button is the gate).
(function () {
  const W = 1080, HH = 1920, TAU = Math.PI * 2;
  // ---------- timing: phrases.json from the Kokoro voiceover ----------
  const PH = [{"s":0.25,"e":3.35,"text":"Why does your apple grow a brown scab in 5 minutes?","words":[["why",0.25],["does",0.48],["your",0.79],["apple",1.1],["grow",1.49],["a",1.8],["brown",1.87],["scab",2.26],["in",2.57],["5",2.73],["minutes",2.8]]},{"s":3.9,"e":5.46,"text":"Inside every apple cell,","words":[["inside",3.9],["every",4.37],["apple",4.76],["cell",5.15]]},{"s":5.76,"e":7.97,"text":"two things are locked in separate rooms.","words":[["two",5.76],["things",5.96],["are",6.37],["locked",6.57],["in",6.97],["separate",7.1],["rooms",7.63]]},{"s":8.52,"e":11.66,"text":"One holds an enzyme, polyphenol oxidase.","words":[["one",8.52],["holds",8.8],["an",9.28],["enzyme",9.47],["polyphenol",10.04],["oxidase",10.99]]},{"s":12.21,"e":15.51,"text":"The other holds natural chemicals called polyphenols.","words":[["the",12.21],["other",12.42],["holds",12.78],["natural",13.14],["chemicals",13.65],["called",14.29],["polyphenols",14.72]]},{"s":16.06,"e":17.93,"text":"When you bite or slice the apple,","words":[["when",16.06],["you",16.35],["bite",16.57],["or",16.85],["slice",17.0],["the",17.36],["apple",17.57]]},{"s":18.23,"e":19.92,"text":"you burst thousands of cells.","words":[["you",18.23],["burst",18.44],["thousands",18.79],["of",19.43],["cells",19.57]]},{"s":20.47,"e":21.85,"text":"The two finally meet,","words":[["the",20.47],["two",20.71],["finally",20.95],["meet",21.52]]},{"s":22.15,"e":24.29,"text":"and oxygen from the air rushes in.","words":[["and",22.15],["oxygen",22.39],["from",22.86],["the",23.18],["air",23.42],["rushes",23.66],["in",24.14]]},{"s":24.84,"e":26.83,"text":"The enzyme uses that oxygen","words":[["the",24.84],["enzyme",25.1],["uses",25.62],["that",25.96],["oxygen",26.31]]},{"s":27.13,"e":29.6,"text":"to turn the polyphenols into brown pigment,","words":[["to",27.13],["turn",27.26],["the",27.54],["polyphenols",27.74],["into",28.5],["brown",28.78],["pigment",29.12]]},{"s":29.9,"e":31.52,"text":"like the melanin in your skin.","words":[["like",29.9],["the",30.17],["melanin",30.37],["in",30.84],["your",30.98],["skin",31.25]]},{"s":32.07,"e":33.71,"text":"Scientists think it's a defence,","words":[["scientists",32.07],["think",32.7],["its",33.01],["a",33.2],["defence",33.27]]},{"s":34.01,"e":36.29,"text":"a brown shield against germs and bugs,","words":[["a",34.01],["brown",34.08],["shield",34.45],["against",34.89],["germs",35.41],["and",35.77],["bugs",35.99]]},{"s":36.59,"e":38.11,"text":"just like a scab on your knee.","words":[["just",36.59],["like",36.85],["a",37.12],["scab",37.18],["on",37.45],["your",37.58],["knee",37.84]]},{"s":38.66,"e":39.61,"text":"Want to stop it?","words":[["want",38.66],["to",38.97],["stop",39.13],["it",39.45]]},{"s":40.16,"e":41.98,"text":"Squeeze on some lemon juice.","words":[["squeeze",40.16],["on",40.71],["some",40.87],["lemon",41.19],["juice",41.59]]},{"s":42.53,"e":44.61,"text":"Its acid slows the enzyme down,","words":[["its",42.53],["acid",42.78],["slows",43.11],["the",43.53],["enzyme",43.78],["down",44.27]]},{"s":44.91,"e":47.69,"text":"and its vitamin C grabs the oxygen first.","words":[["and",44.91],["its",45.16],["vitamin",45.41],["c",46.0],["grabs",46.09],["the",46.51],["oxygen",46.76],["first",47.27]]},{"s":48.24,"e":49.93,"text":"So when your apple turns brown,","words":[["so",48.24],["when",48.37],["your",48.64],["apple",48.92],["turns",49.25],["brown",49.59]]},{"s":50.23,"e":51.74,"text":"is it rotting, or healing?","words":[["is",50.23],["it",50.38],["rotting",50.53],["or",51.06],["healing",51.21]]},{"s":52.29,"e":53.53,"text":"Tell me in the comments.","words":[["tell",52.29],["me",52.55],["in",52.69],["the",52.82],["comments",53.01]]}];
  const P = (i, w) => { const x = PH[i].words.find((q) => q[0] === w); if (!x) throw new Error('no word ' + w + ' in ' + i); return x[1]; };
  const BEATS = [
    { id: 'hook',   s: PH[0].s,  e: PH[0].e,  text: 'why does your apple grow a brown scab in 5 minutes?', screen: 'kitchen counter, apple half with a face, brown spreading, BROWN SCAB?, stopwatch 5 MIN' },
    { id: 'cell',   s: PH[1].s,  e: PH[4].e,  text: 'inside every cell two rooms: enzyme polyphenol oxidase, and polyphenols', screen: 'zoom into the flesh, one big plant cell, 2 ROOMS, orange enzyme room, purple polyphenol room' },
    { id: 'burst',  s: PH[5].s,  e: PH[7].e,  text: 'bite or slice, burst thousands of cells, the two finally meet', screen: 'knife slices across a row of cells, they pop open, contents mix, THEY MEET' },
    { id: 'react',  s: PH[8].s,  e: PH[11].e, text: 'oxygen rushes in, enzyme turns polyphenols into brown pigment, like melanin', screen: 'O2 bubbles stream in, enzyme chomps, hexagons chain into brown pigment, = MELANIN with skin swatch' },
    { id: 'shield', s: PH[12].s, e: PH[14].e, text: 'scientists think it is a defence, a brown shield against germs and bugs, like a scab', screen: 'apple slice with brown shield, germs and bugs bounce off, DEFENCE?, knee with scab = SCAB' },
    { id: 'lemon',  s: PH[15].s, e: PH[18].e, text: 'stop it with lemon juice: acid slows the enzyme, vitamin C grabs oxygen first', screen: 'STOP IT?, lemon squeezes drops, sleepy enzyme ACID, vitamin C catches O2' },
    { id: 'end',    s: PH[19].s, e: PH[21].e, text: 'so is your brown apple rotting, or healing? tell me in the comments', screen: 'apple half, ROTTING? vs HEALING? cards, comment bubble' },
  ];
  const DURATION = PH[PH.length - 1].e + 1.0;
  const CUTS = { cell: PH[0].e + 0.28, burst: PH[4].e + 0.28, react: PH[8].s + 0.1, shield: PH[11].e + 0.28, lemon: PH[14].e + 0.28, end: PH[18].e + 0.28 };

  // ---------- helpers ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { ink: '#1d1d3a', cream: '#fff6e6', red: '#e8413c', red2: '#c22f2f', flesh: '#fff1c9', flesh2: '#f6e2a6', brown: '#9a5a2a', brown2: '#6e3b17', orange: '#ff7a3d', purple: '#7b4bd6', blue: '#3fa9f5', ice: '#cfeeff', green: '#4cc26b', green2: '#2e9a52', yellow: '#ffd23f', lemon: '#ffe14d', teal: '#1fb6a6', skin: '#f3c7a0', white: '#ffffff', pink: '#ff6f91' };
  const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 26, col = 'rgba(20,20,60,0.16)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700, align = 'center') => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 48, padX = size * 0.7, h = o.h || size * 1.7, w = measure(ctx, s, size, o.weight || 700) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 18);
    text(ctx, s, 0, 2, size, o.col || PAL.ink, o.weight || 700);
    ctx.restore();
  };
  const big = (ctx, s, x, y, size, col, k = 1, sh = 22) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col, 700), sh); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, Math.max(0, r), 0, TAU); ctx.fillStyle = col; ctx.fill(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 14, prog = 1) => {
    if (prog <= 0) return; const x = H.lerp(x0, x1, prog), y = H.lerp(y0, y1, prog), a = Math.atan2(y1 - y0, x1 - x0);
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = col; ctx.translate(x, y); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt * 1.2, -wdt * 1.4); ctx.lineTo(-wdt * 1.2, wdt * 1.4); ctx.closePath(); ctx.fill(); ctx.restore();
  };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const header = (ctx, t) => {
    const k = EO(t, CUTS.cell + 0.3, CUTS.cell + 0.8) * (1 - EO(t, CUTS.end, CUTS.end + 0.3)); if (k <= 0) return;
    ctx.save(); ctx.globalAlpha = k; pill(ctx, 'WHY APPLES TURN BROWN', 540, 215, { size: 40, bg: PAL.ink, col: PAL.cream, sh: 10 }); ctx.restore();
  };

  // ---------- characters ----------
  // apple cut in half, seen face-on. brown = 0..1 browning, mood: 0 happy, 1 worried
  const appleHalf = (ctx, x, y, r, brown = 0, o = {}) => {
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0);
    const shape = (c, rad) => { ctx.beginPath(); ctx.moveTo(0, -rad * 0.72); ctx.bezierCurveTo(rad * 0.5, -rad * 1.12, rad * 1.12, -rad * 0.78, rad * 1.0, -rad * 0.05); ctx.bezierCurveTo(rad * 0.95, rad * 0.7, rad * 0.45, rad * 1.05, 0, rad * 0.9); ctx.bezierCurveTo(-rad * 0.45, rad * 1.05, -rad * 0.95, rad * 0.7, -rad * 1.0, -rad * 0.05); ctx.bezierCurveTo(-rad * 1.12, -rad * 0.78, -rad * 0.5, -rad * 1.12, 0, -rad * 0.72); ctx.closePath(); ctx.fillStyle = c; ctx.fill(); };
    longShadow(ctx, (c) => shape(c || PAL.red, r), o.sh ?? 30);
    // stem + leaf
    ctx.strokeStyle = PAL.brown2; ctx.lineWidth = r * 0.07; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, -r * 0.72); ctx.quadraticCurveTo(r * 0.04, -r * 0.95, r * 0.12, -r * 1.1); ctx.stroke();
    ctx.fillStyle = PAL.green; ctx.beginPath(); ctx.ellipse(r * 0.3, -r * 1.02, r * 0.2, r * 0.09, -0.5, 0, TAU); ctx.fill();
    // flesh
    ctx.save(); shape(PAL.flesh, r * 0.9); ctx.clip();
    if (brown > 0) { // browning creeps in from the rim and in patches
      const g = ctx.createRadialGradient(0, 0, r * 0.05, 0, 0, r * 1.05); const b = H.clamp(brown);
      g.addColorStop(0, H.rgba(PAL.brown, 0.15 * b)); g.addColorStop(H.clamp(1 - b * 0.8, 0.05, 0.95), H.rgba(PAL.brown, 0.5 * b)); g.addColorStop(1, H.rgba(PAL.brown2, 0.95 * b));
      ctx.fillStyle = g; ctx.fillRect(-r * 1.2, -r * 1.2, r * 2.4, r * 2.4);
      const R = H.rng(o.seed || 5); for (let i = 0; i < 9; i++) { const a = R() * TAU, d = R() * r * 0.75; ctx.fillStyle = H.rgba(PAL.brown, 0.35 * b * (0.5 + R())); ctx.beginPath(); ctx.ellipse(Math.cos(a) * d, Math.sin(a) * d, r * (0.08 + R() * 0.14) * (0.4 + b), r * (0.06 + R() * 0.1) * (0.4 + b), a, 0, TAU); ctx.fill(); }
    }
    ctx.restore();
    // core: star with seeds
    ctx.fillStyle = PAL.flesh2; ctx.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, d = i % 2 ? r * 0.12 : r * 0.3; ctx.lineTo(Math.cos(a) * d, Math.sin(a) * d + r * 0.05); } ctx.closePath(); ctx.fill();
    for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + i * TAU / 5; ctx.fillStyle = PAL.brown2; ctx.beginPath(); ctx.ellipse(Math.cos(a) * r * 0.19, Math.sin(a) * r * 0.19 + r * 0.05, r * 0.035, r * 0.06, a + Math.PI / 2, 0, TAU); ctx.fill(); }
    if (o.face !== false) {
      const fy = -r * 0.32, mood = o.mood || 0;
      circle(ctx, -r * 0.3, fy, r * 0.06, PAL.ink); circle(ctx, r * 0.3, fy, r * 0.06, PAL.ink);
      circle(ctx, -r * 0.28, fy - r * 0.02, r * 0.02, PAL.white); circle(ctx, r * 0.32, fy - r * 0.02, r * 0.02, PAL.white);
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = r * 0.035; ctx.lineCap = 'round'; ctx.beginPath();
      if (mood > 0.5) { ctx.moveTo(-r * 0.12, -r * 0.08); ctx.quadraticCurveTo(0, -r * 0.16, r * 0.12, -r * 0.08); } else { ctx.arc(0, -r * 0.2, r * 0.12, Math.PI * 0.15, Math.PI * 0.85); }
      ctx.stroke();
      if (mood > 0.5) { ctx.fillStyle = PAL.blue; ctx.beginPath(); ctx.ellipse(r * 0.48, fy + r * 0.04, r * 0.035, r * 0.06, 0, 0, TAU); ctx.fill(); }
      ctx.fillStyle = 'rgba(255,111,145,0.45)'; ctx.beginPath(); ctx.ellipse(-r * 0.45, fy + r * 0.13, r * 0.08, r * 0.045, 0, 0, TAU); ctx.ellipse(r * 0.45, fy + r * 0.13, r * 0.08, r * 0.045, 0, 0, TAU); ctx.fill();
    }
    ctx.restore();
  };
  // enzyme: orange "pac-man" with an eye; chomp 0..1
  const enzyme = (ctx, x, y, r, chomp = 0.5, o = {}) => {
    const m = 0.08 + 0.55 * chomp; ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0);
    longShadow(ctx, (c) => { ctx.fillStyle = c || (o.col || PAL.orange); ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, r, m, TAU - m); ctx.closePath(); ctx.fill(); }, o.sh ?? 10);
    if (o.sleepy) { ctx.strokeStyle = PAL.ink; ctx.lineWidth = r * 0.1; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-r * 0.05, -r * 0.45); ctx.lineTo(r * 0.3, -r * 0.45); ctx.stroke(); }
    else { circle(ctx, r * 0.12, -r * 0.48, r * 0.13, PAL.ink); circle(ctx, r * 0.16, -r * 0.52, r * 0.045, PAL.white); }
    ctx.restore();
  };
  const hexPath = (ctx, x, y, r) => { ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3 + Math.PI / 6; ctx.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r); } ctx.closePath(); };
  // polyphenol: a purple ring molecule (a benzene ring with an OH), col for browned
  const phenol = (ctx, x, y, r, col = PAL.purple, sh = 8) => {
    longShadow(ctx, (c) => { hexPath(ctx, x, y, r); ctx.fillStyle = c || col; ctx.fill(); }, sh);
    hexPath(ctx, x, y, r * 0.5); ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fill();
    circle(ctx, x + r * 1.05, y - r * 0.6, r * 0.3, col === PAL.purple ? '#b28cff' : PAL.brown2);
  };
  const oxygen = (ctx, x, y, r, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => { circle(ctx, -r * 0.55, 0, r * 0.75, c || PAL.blue); circle(ctx, r * 0.55, 0, r * 0.75, c || PAL.blue); }, 8); text(ctx, 'O', -r * 0.55, r * 0.04, r * 0.8, PAL.white); text(ctx, 'O', r * 0.55, r * 0.04, r * 0.8, PAL.white); ctx.restore(); };
  const germ = (ctx, x, y, r, t, col = PAL.green) => { ctx.save(); ctx.translate(x, y); ctx.rotate(t * 0.8); ctx.strokeStyle = col; ctx.lineWidth = r * 0.18; ctx.lineCap = 'round'; for (let i = 0; i < 8; i++) { const a = i * TAU / 8; ctx.beginPath(); ctx.moveTo(Math.cos(a) * r * 0.8, Math.sin(a) * r * 0.8); ctx.lineTo(Math.cos(a) * r * 1.35, Math.sin(a) * r * 1.35); ctx.stroke(); circle(ctx, Math.cos(a) * r * 1.4, Math.sin(a) * r * 1.4, r * 0.15, col); } circle(ctx, 0, 0, r, col); ctx.rotate(-t * 0.8); circle(ctx, -r * 0.3, -r * 0.15, r * 0.16, PAL.ink); circle(ctx, r * 0.3, -r * 0.15, r * 0.16, PAL.ink); ctx.strokeStyle = PAL.ink; ctx.lineWidth = r * 0.1; ctx.beginPath(); ctx.moveTo(-r * 0.3, r * 0.3); ctx.lineTo(r * 0.3, r * 0.3); ctx.stroke(); ctx.restore(); };
  const bug = (ctx, x, y, r, t, ang = 0) => { ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.strokeStyle = PAL.ink; ctx.lineWidth = r * 0.12; ctx.lineCap = 'round'; for (let i = -1; i <= 1; i++) for (const s of [-1, 1]) { const w = Math.sin(t * 20 + i) * 0.2; ctx.beginPath(); ctx.moveTo(i * r * 0.4, 0); ctx.lineTo(i * r * 0.5 + w * r, s * r * 0.9); ctx.stroke(); } ctx.fillStyle = '#3b2a6b'; ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.62, 0, 0, TAU); ctx.fill(); ctx.fillStyle = PAL.ink; circle(ctx, r * 0.95, 0, r * 0.38, PAL.ink); circle(ctx, r * 1.05, -r * 0.12, r * 0.09, PAL.white); ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = r * 0.06; ctx.beginPath(); ctx.moveTo(-r * 0.8, 0); ctx.lineTo(r * 0.55, 0); ctx.stroke(); ctx.restore(); };
  const lemon = (ctx, x, y, r, squeeze = 0, rot = 0) => { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(1 - squeeze * 0.12, 1 + squeeze * 0.06); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.lemon; ctx.beginPath(); ctx.moveTo(-r * 1.45, 0); ctx.quadraticCurveTo(-r * 1.2, -r * 0.95, 0, -r * 0.95); ctx.quadraticCurveTo(r * 1.2, -r * 0.95, r * 1.45, 0); ctx.quadraticCurveTo(r * 1.2, r * 0.95, 0, r * 0.95); ctx.quadraticCurveTo(-r * 1.2, r * 0.95, -r * 1.45, 0); ctx.closePath(); ctx.fill(); }, 22); ctx.fillStyle = 'rgba(255,255,255,0.45)'; ctx.beginPath(); ctx.ellipse(-r * 0.35, -r * 0.45, r * 0.4, r * 0.14, -0.2, 0, TAU); ctx.fill(); ctx.fillStyle = PAL.green2; ctx.beginPath(); ctx.ellipse(r * 0.2, -r * 1.0, r * 0.35, r * 0.13, -0.4, 0, TAU); ctx.fill(); ctx.restore(); };
  const vitC = (ctx, x, y, r, k = 1, grab = 0) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); ctx.strokeStyle = PAL.orange; ctx.lineWidth = r * 0.16; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-r * 0.8, -r * 0.3); ctx.lineTo(-r * 1.3, -r * 0.8 - grab * r * 0.3); ctx.moveTo(r * 0.8, -r * 0.3); ctx.lineTo(r * 1.3, -r * 0.8 - grab * r * 0.3); ctx.stroke(); longShadow(ctx, (c) => circle(ctx, 0, 0, r, c || PAL.yellow), 14); text(ctx, 'C', 0, r * 0.25, r * 0.9, PAL.orange); circle(ctx, -r * 0.3, -r * 0.42, r * 0.09, PAL.ink); circle(ctx, r * 0.3, -r * 0.42, r * 0.09, PAL.ink); ctx.restore(); };

  // ---------- scenes ----------
  const S = {};
  const counter = (ctx) => { // kitchen backdrop: wall tiles + wooden board
    sky(ctx, '#bfe9ff', '#e6f6ff');
    ctx.fillStyle = 'rgba(255,255,255,0.45)'; for (let y = 0; y < 1250; y += 120) for (let x = (y / 120) % 2 ? -60 : 0; x < W; x += 120) { rr(ctx, x + 6, y + 6, 108, 108, 14); ctx.fill(); }
    ctx.fillStyle = '#e9a85c'; ctx.fillRect(0, 1250, W, HH); ctx.fillStyle = '#d4904a'; ctx.fillRect(0, 1250, W, 28);
    ctx.fillStyle = 'rgba(255,255,255,0.18)'; for (let i = 0; i < 6; i++) ctx.fillRect(0, 1330 + i * 110, W, 8);
  };
  S.hook = (ctx, t) => {
    counter(ctx);
    const b = EI(t, P(0, 'brown') - 0.2, PH[0].e + 0.5);
    const s = 1 + 0.06 * ph(t, 0, CUTS.cell); // slow push in
    ctx.save(); ctx.translate(540, 1150); ctx.scale(s, s); appleHalf(ctx, 0, 0, 330, b, { mood: b > 0.35 ? 1 : 0, seed: 11 }); ctx.restore();
    pill(ctx, 'YOUR APPLE', 540, 300, { k: pop(t, P(0, 'apple') - 0.15), size: 56, bg: PAL.ink, col: PAL.cream });
    big(ctx, 'BROWN', 540, 450, 150, PAL.brown, pop(t, P(0, 'brown') - 0.15));
    big(ctx, 'SCAB?', 540, 610, 160, PAL.red, pop(t, P(0, 'scab') - 0.15) * bump(t, P(0, 'scab')));
    // stopwatch with "5 MIN"
    const k = pop(t, P(0, '5') - 0.15);
    if (k > 0.01) { ctx.save(); ctx.translate(850, 790); ctx.scale(k, k); longShadow(ctx, (c) => { circle(ctx, 0, 0, 110, c || PAL.cream); ctx.fillStyle = c || PAL.cream; rr(ctx, -26, -150, 52, 40, 10); ctx.fill(); }, 16);
      ctx.strokeStyle = PAL.orange; ctx.lineWidth = 16; ctx.beginPath(); ctx.arc(0, 0, 82, -Math.PI / 2, -Math.PI / 2 + TAU * EO(t, P(0, '5'), PH[0].e + 0.3)); ctx.stroke(); text(ctx, '5', 0, -8, 96, PAL.ink); text(ctx, 'MIN', 0, 56, 34, PAL.ink, 600); ctx.restore(); }
  };
  // one plant cell with two rooms. zoom 0..1, open 0..1 (rooms burst)
  const cellBody = (ctx, x, y, w, h, o = {}) => {
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.green2; rr(ctx, x - w / 2, y - h / 2, w, h, 60); ctx.fill(); }, o.sh ?? 26);
    ctx.fillStyle = '#d8f5c8'; rr(ctx, x - w / 2 + 22, y - h / 2 + 22, w - 44, h - 44, 44); ctx.fill();
  };
  S.cell = (ctx, t) => {
    sky(ctx, '#2bb673', '#108a5a');
    const R = H.rng(4); for (let i = 0; i < 26; i++) { ctx.fillStyle = 'rgba(255,255,255,0.08)'; rr(ctx, R() * W - 100, R() * HH - 100, 160 + R() * 120, 140 + R() * 100, 40); ctx.fill(); }
    const z = 0.82 + 0.18 * EO(t, CUTS.cell - 0.25, P(1, 'cell') + 0.4) + 0.03 * ph(t, P(1, 'cell'), PH[4].e);
    ctx.save(); ctx.translate(540, 1010); ctx.scale(z, z); ctx.translate(-540, -1010);
    cellBody(ctx, 540, 1010, 900, 980);
    // the two rooms: left = enzyme room (plastid), right = phenol room (vacuole)
    const rk = EO(t, P(2, 'two') - 0.1, P(2, 'rooms'));
    const lw = 330, rw = 420;
    if (rk > 0) {
      ctx.save(); ctx.globalAlpha = rk;
      ctx.fillStyle = '#ffd7b8'; rr(ctx, 130, 640, lw, 740, 50); ctx.fill(); ctx.strokeStyle = PAL.orange; ctx.lineWidth = 12; ctx.stroke();
      ctx.fillStyle = '#e4d6ff'; rr(ctx, 530, 640, rw, 740, 50); ctx.fill(); ctx.strokeStyle = PAL.purple; ctx.lineWidth = 12; ctx.stroke();
      // lock on the wall between
      const lk = pop(t, P(2, 'locked') - 0.1); if (lk > 0.01) { ctx.save(); ctx.translate(495, 1010); ctx.scale(lk, lk); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 14; ctx.beginPath(); ctx.arc(0, -40, 34, Math.PI, 0); ctx.stroke(); ctx.fillStyle = PAL.yellow; rr(ctx, -50, -40, 100, 80, 14); ctx.fill(); circle(ctx, 0, -6, 10, PAL.ink); ctx.fillRect(-4, -6, 8, 26); ctx.restore(); }
      ctx.restore();
    }
    // enzymes appear on "enzyme"
    const ek = EO(t, P(3, 'enzyme') - 0.15, P(3, 'enzyme') + 0.4);
    const ER = H.rng(21); for (let i = 0; i < 6; i++) { const ex = 210 + (i % 2) * 150 + ER() * 30, ey = 740 + Math.floor(i / 2) * 230 + ER() * 40, kk = H.clamp(ek * 2 - i * 0.18); if (kk <= 0) continue; ctx.save(); ctx.translate(ex, ey + Math.sin(t * 2 + i) * 10); ctx.scale(H.ease.back(kk), H.ease.back(kk)); enzyme(ctx, 0, 0, 52, 0.5 + 0.5 * Math.sin(t * 6 + i), { rot: i % 2 ? Math.PI : 0 }); ctx.restore(); }
    const pk = EO(t, P(4, 'polyphenols') - 0.6, P(4, 'polyphenols') + 0.3);
    const PR = H.rng(33); for (let i = 0; i < 9; i++) { const px = 610 + (i % 3) * 130 + PR() * 20, py = 740 + Math.floor(i / 3) * 230 + PR() * 50, kk = H.clamp(pk * 2.2 - i * 0.13); if (kk <= 0) continue; ctx.save(); ctx.translate(px, py + Math.sin(t * 1.7 + i) * 8); ctx.scale(H.ease.back(kk), H.ease.back(kk)); phenol(ctx, 0, 0, 44); ctx.restore(); }
    ctx.restore();
    pill(ctx, 'INSIDE 1 CELL', 540, 380, { k: pop(t, P(1, 'inside') - 0.1), size: 60, bg: PAL.cream });
    pill(ctx, '2 ROOMS', 540, 500, { k: pop(t, P(2, 'two') - 0.1, P(3, 'one') - 0.2), size: 56, bg: PAL.ink, col: PAL.cream });
    pill(ctx, 'ENZYME', 300, 1555, { k: pop(t, P(3, 'enzyme') - 0.1), size: 56, bg: PAL.orange, col: PAL.white });
    pill(ctx, 'polyphenol oxidase', 330, 500, { k: pop(t, P(3, 'polyphenol') - 0.1, P(4, 'polyphenols') - 0.3), size: 50, weight: 600 });
    pill(ctx, 'POLYPHENOLS', 760, 1555, { k: pop(t, P(4, 'polyphenols') - 0.15), size: 52, bg: PAL.purple, col: PAL.white });
    pill(ctx, 'natural chemicals', 720, 500, { k: pop(t, P(4, 'natural') - 0.1), size: 44, weight: 600 });
  };
  S.burst = (ctx, t) => {
    sky(ctx, '#ffe9a8', '#ffc85e');
    const cut = P(5, 'slice'), burst = P(6, 'burst'), meet = P(7, 'meet');
    // a grid of cells; the knife's path runs diagonally; cells it crosses burst
    const knifeP = EI(t, cut - 0.35, cut + 0.35);
    const cols = 3, rows = 4, cw = 300, chh = 280, x0 = 540 - cols * cw / 2, y0 = 560;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const cx = x0 + c * cw + cw / 2, cy = y0 + r * chh + chh / 2;
      const hit = (r === 1 || r === 2); // the knife's row band
      const ob = hit ? EO(t, burst - 0.1 + c * 0.08, burst + 0.4 + c * 0.08) : 0;
      const mix = hit ? EI(t, P(7, 'two') - 0.2, meet + 0.2) : 0;
      ctx.save(); ctx.translate(cx, cy); const sc = 1 + 0.08 * ob; ctx.scale(sc, sc);
      ctx.fillStyle = PAL.green2; rr(ctx, -cw / 2 + 10, -chh / 2 + 10, cw - 20, chh - 20, 34); ctx.fill();
      ctx.fillStyle = '#d8f5c8'; rr(ctx, -cw / 2 + 24, -chh / 2 + 24, cw - 48, chh - 48, 24); ctx.fill();
      // rooms (walls fade as they burst)
      ctx.globalAlpha = 1 - ob; ctx.fillStyle = '#ffd7b8'; rr(ctx, -cw / 2 + 36, -chh / 2 + 36, 90, chh - 72, 18); ctx.fill(); ctx.fillStyle = '#e4d6ff'; rr(ctx, -cw / 2 + 140, -chh / 2 + 36, cw - 176, chh - 72, 18); ctx.fill(); ctx.globalAlpha = 1;
      // contents: enzyme left, phenols right; they slide together on "meet"
      const ex = H.lerp(-cw / 2 + 80, -30, mix), px = H.lerp(60, 30, mix);
      enzyme(ctx, ex, 0, 34, 0.5 + 0.5 * Math.sin(t * 8 + c), { sh: 6 });
      phenol(ctx, px, -40, 26, PAL.purple, 4); phenol(ctx, px + 40, 40, 26, PAL.purple, 4);
      if (ob > 0 && ob < 1) { ctx.strokeStyle = PAL.white; ctx.lineWidth = 8; for (let i = 0; i < 8; i++) { const a = i * TAU / 8; const d = 90 + 80 * ob; ctx.globalAlpha = 1 - ob; ctx.beginPath(); ctx.moveTo(Math.cos(a) * d, Math.sin(a) * d); ctx.lineTo(Math.cos(a) * (d + 30), Math.sin(a) * (d + 30)); ctx.stroke(); } ctx.globalAlpha = 1; }
      ctx.restore();
    }
    // knife: blade sweeps across the cut line
    if (knifeP > 0 && knifeP < 1 || (t > cut && t < cut + 0.8)) {
      const kx = H.lerp(-300, 1380, knifeP), ky = y0 + 2 * chh;
      ctx.save(); ctx.globalAlpha = 1 - ph(t, cut + 0.4, cut + 0.8); ctx.translate(kx, ky); ctx.rotate(-0.08);
      longShadow(ctx, (c) => { ctx.fillStyle = c || '#dfe7ef'; ctx.beginPath(); ctx.moveTo(-260, -10); ctx.lineTo(120, -10); ctx.quadraticCurveTo(170, 10, 120, 60); ctx.lineTo(-260, 40); ctx.closePath(); ctx.fill(); ctx.fillStyle = c || PAL.ink; rr(ctx, -470, -20, 220, 64, 22); ctx.fill(); }, 14);
      ctx.restore();
      ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-50, ky + 10); ctx.lineTo(kx - 260, ky + 10); ctx.stroke();
    }
    pill(ctx, 'SLICE!', 540, 400, { k: pop(t, cut - 0.15, P(6, 'burst') - 0.25), size: 80, bg: PAL.red, col: PAL.white, h: 130 });
    pill(ctx, 'CELLS BURST', 540, 400, { k: pop(t, burst - 0.12, P(7, 'two') - 0.25) * bump(t, burst), size: 72, bg: PAL.ink, col: PAL.cream, h: 124 });
    pill(ctx, 'THEY MEET!', 540, 1610, { k: pop(t, meet - 0.15) * bump(t, meet), size: 90, bg: PAL.orange, col: PAL.white, h: 150 });
    pill(ctx, 'thousands of cells', 540, 1660, { k: pop(t, P(6, 'thousands') - 0.1, meet - 0.3), size: 48, weight: 600 });
  };
  S.react = (ctx, t) => {
    sky(ctx, '#1b2a5c', '#3a4fa0');
    const R = H.rng(8); for (let i = 0; i < 40; i++) circle(ctx, R() * W, R() * HH, 3 + R() * 5, 'rgba(255,255,255,0.12)');
    const oxT = P(8, 'oxygen'), useT = P(9, 'uses'), turnT = P(10, 'turn'), brownT = P(10, 'brown'), melT = P(11, 'melanin');
    // camera: slow drift down/zoom out to reveal the pigment chain
    const z = 1.0 - 0.08 * EI(t, turnT, PH[11].e);
    ctx.save(); ctx.translate(540, 960); ctx.scale(z, z); ctx.translate(-540, -960);
    // O2 streams in from top-right
    for (let i = 0; i < 7; i++) { const st = oxT - 0.25 + i * 0.22, u = EO(t, st, st + 1.0); if (u <= 0) continue; const tx = 300 + (i % 4) * 150, ty = 760 + (i % 3) * 60; const x = H.lerp(1150, tx, u), y = H.lerp(150 + i * 30, ty, u); const gone = ph(t, useT + i * 0.12, useT + 0.3 + i * 0.12); oxygen(ctx, x, y + Math.sin(t * 3 + i) * 8, 34, 1 - gone); }
    // the enzyme chomps: phenol + O2 -> browned ring flies to the chain
    const chomp = t > useT - 0.1 && t < brownT + 0.6 ? 0.5 + 0.5 * Math.sin(t * 14) : 0.4;
    enzyme(ctx, 330, 1060, 120, chomp, { sh: 18 });
    // incoming purple rings to its mouth
    for (let i = 0; i < 5; i++) { const st = turnT - 0.4 + i * 0.3, u = EO(t, st, st + 0.5); if (u <= 0) continue; const x = H.lerp(780, 480, u), y = 1060; if (u < 1) phenol(ctx, x, y, 40, PAL.purple, 6); }
    // brown pigment chain growing to the right/bottom
    const n = Math.floor(10 * EO(t, turnT - 0.1, brownT + 0.6) + 1e-6);
    for (let i = 0; i < n; i++) { const x = 480 + (i % 5) * 110, y = 1300 + Math.floor(i / 5) * 120 + (i % 2) * 40; phenol(ctx, x, y, 44, i % 2 ? PAL.brown : PAL.brown2, 8); if (i % 5) { ctx.strokeStyle = PAL.brown2; ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(x - 66, y - (i % 2 ? 40 : -40) * 0.5); ctx.lineTo(x - 44, y); ctx.stroke(); } }
    ctx.restore();
    pill(ctx, 'OXYGEN', 760, 420, { k: pop(t, oxT - 0.1), size: 64, bg: PAL.blue, col: PAL.white });
    pill(ctx, 'from the air', 760, 530, { k: pop(t, P(8, 'air') - 0.1), size: 44, weight: 600 });
    pill(ctx, 'ENZYME', 330, 860, { k: pop(t, P(9, 'enzyme') - 0.1), size: 50, bg: PAL.orange, col: PAL.white });
    pill(ctx, 'BROWN PIGMENT', 540, 1630, { k: pop(t, brownT - 0.12) * bump(t, P(10, 'pigment')), size: 64, bg: PAL.brown, col: PAL.cream });
    // melanin card: skin swatch
    const mk = pop(t, melT - 0.15);
    if (mk > 0.01) { ctx.save(); ctx.translate(540, 470); ctx.scale(mk, mk); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -380, -120, 760, 240, 50); ctx.fill(); }, 20);
      [PAL.skin, '#d9a074', '#a86b42', '#6e4126'].forEach((col, i) => circle(ctx, -320 + i * 58, 0, 32, col)); text(ctx, 'LIKE MELANIN', 100, 4, 64, PAL.brown2); ctx.restore(); }
  };
  S.shield = (ctx, t) => {
    sky(ctx, '#ff9a8b', '#ffd3a5');
    const defT = P(12, 'defence'), shT = P(13, 'shield'), gT = P(13, 'germs'), bT = P(13, 'bugs'), scT = P(14, 'scab'), knT = P(14, 'knee');
    const slide = EI(t, scT - 0.5, scT + 0.2); // apple moves left to make room for the knee
    const ax = H.lerp(540, 290, slide), ar = H.lerp(300, 210, slide), ay = H.lerp(1050, 1080, slide);
    appleHalf(ctx, ax, ay, ar, 0.85, { mood: 0, seed: 3 });
    // shield ring
    const sk = EO(t, shT - 0.2, shT + 0.3);
    if (sk > 0) { ctx.save(); ctx.strokeStyle = H.rgba(PAL.brown, 0.85); ctx.lineWidth = 26; ctx.setLineDash([60, 22]); ctx.lineDashOffset = -t * 60; ctx.beginPath(); ctx.arc(ax, ay, ar * 1.35, -Math.PI / 2, -Math.PI / 2 + TAU * sk); ctx.stroke(); ctx.restore(); }
    // germs and bugs fly in and bounce off the ring
    const fly = (st, ang, draw) => { const u = ph(t, st - 0.5, st + 1.6); if (u <= 0 || u >= 1) return; const R0 = ar * 1.35 + 60; const d = u < 0.32 ? H.lerp(700, R0, H.ease.in(u / 0.32)) : H.lerp(R0, 1100, H.ease.out((u - 0.32) / 0.68)); const a2 = u < 0.32 ? ang : ang + 0.5; draw(ax + Math.cos(a2) * d, ay + Math.sin(a2) * d); if (Math.abs(u - 0.32) < 0.06) { ctx.strokeStyle = PAL.white; ctx.lineWidth = 8; for (let i = 0; i < 6; i++) { const b = ang + (i - 2.5) * 0.25; ctx.beginPath(); ctx.moveTo(ax + Math.cos(b) * R0, ay + Math.sin(b) * R0); ctx.lineTo(ax + Math.cos(b) * (R0 + 50), ay + Math.sin(b) * (R0 + 50)); ctx.stroke(); } } };
    fly(gT, -2.3, (x, y) => germ(ctx, x, y, 46, t)); fly(gT + 0.25, -0.6, (x, y) => germ(ctx, x, y, 38, t + 1, '#8bd346'));
    fly(bT, 2.4, (x, y) => bug(ctx, x, y, 44, t, -0.6)); fly(bT + 0.3, 0.7, (x, y) => bug(ctx, x, y, 38, t, 2.4));
    // knee with scab on the right
    const kk = pop(t, scT - 0.2);
    if (kk > 0.01) { ctx.save(); ctx.translate(800, 1080); ctx.scale(kk, kk);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.skin; rr(ctx, -120, -330, 240, 380, 110); ctx.fill(); rr(ctx, -105, 0, 210, 330, 90); ctx.fill(); }, 20);
      ctx.fillStyle = PAL.brown; ctx.beginPath(); ctx.ellipse(0, -10, 70, 50, 0.2, 0, TAU); ctx.fill(); ctx.fillStyle = PAL.brown2; ctx.beginPath(); ctx.ellipse(-12, -18, 40, 26, 0.2, 0, TAU); ctx.fill();
      ctx.restore(); text(ctx, '=', 545, 1080, 140, PAL.ink); }
    pill(ctx, 'DEFENCE?', 540, 420, { k: pop(t, defT - 0.12) * bump(t, defT), size: 84, bg: PAL.ink, col: PAL.cream, h: 140 });
    pill(ctx, 'scientists think', 540, 545, { k: pop(t, P(12, 'scientists') - 0.1), size: 44, weight: 600 });
    pill(ctx, 'BROWN SHIELD', 540, 1580, { k: pop(t, shT - 0.12, scT - 0.4), size: 60, bg: PAL.brown, col: PAL.cream });
    pill(ctx, 'GERMS', 230, 700, { k: pop(t, gT - 0.12, scT - 0.4), size: 50, bg: PAL.green2, col: PAL.white });
    pill(ctx, 'BUGS', 850, 700, { k: pop(t, bT - 0.12, scT - 0.4), size: 50, bg: '#3b2a6b', col: PAL.white });
    big(ctx, 'LIKE A SCAB', 540, 1590, 110, PAL.red2, pop(t, scT - 0.1) * bump(t, knT));
  };
  S.lemon = (ctx, t) => {
    sky(ctx, '#fff7b0', '#ffe066');
    const stopT = P(15, 'stop'), sqT = P(16, 'squeeze'), lemT = P(16, 'lemon'), acT = P(17, 'acid'), slT = P(17, 'slows'), vcT = P(18, 'vitamin'), grT = P(18, 'grabs');
    // camera pans down from the lemon to the molecules
    const pan = EI(t, acT - 0.5, acT + 0.3);
    ctx.save(); ctx.translate(0, -560 * pan);
    // apple slice + lemon above it
    appleHalf(ctx, 540, 1260, 230, 0.15, { mood: 0, seed: 9, face: true });
    const sq = t > sqT - 0.1 ? 0.5 + 0.5 * Math.sin((t - sqT) * 9) : 0;
    ctx.save(); ctx.globalAlpha = 1 - H.clamp(pan * 1.4); lemon(ctx, 560, 720, 150, sq * (t < acT ? 1 : 0), -0.25); ctx.restore();
    for (let i = 0; i < 8; i++) { const st = sqT + i * 0.22; const u = ph(t, st, st + 0.7); if (u <= 0 || u >= 1) continue; const x = 540 + (i % 3 - 1) * 60, y = H.lerp(830, 1150, H.ease.in(u)); ctx.fillStyle = '#ffe96b'; ctx.beginPath(); ctx.ellipse(x, y, 16, 26, 0, 0, TAU); ctx.fill(); }
    // molecules below (fade in as the camera arrives)
    const sy = 1760;
    ctx.save(); ctx.globalAlpha = H.clamp(pan * 1.5);
    enzyme(ctx, 330, sy, 110, t > slT ? 0.1 : 0.5 + 0.5 * Math.sin(t * 12), { sleepy: t > slT, sh: 16 });
    if (t > slT) { for (let i = 0; i < 3; i++) { const u = ((t - slT) * 0.6 + i / 3) % 1; ctx.save(); ctx.globalAlpha = 1 - u; text(ctx, 'z', 420 + u * 80 + i * 10, sy - 140 - u * 120, 50 + i * 12, PAL.ink); ctx.restore(); } }
    // acid drops raining on the enzyme
    for (let i = 0; i < 6; i++) { const st = acT - 0.2 + i * 0.15, u = ph(t, st, st + 0.5); if (u <= 0 || u >= 1) continue; ctx.fillStyle = '#e2c400'; ctx.beginPath(); ctx.ellipse(250 + i * 30, H.lerp(sy - 420, sy - 120, u), 14, 22, 0, 0, TAU); ctx.fill(); }
    // O2 drifting toward the enzyme, intercepted by vitamin C
    const vk = pop(t, vcT - 0.15), gr = EO(t, grT - 0.1, grT + 0.4);
    const ox = H.lerp(900, 720, EO(t, vcT - 0.4, vcT + 0.4)), oy = H.lerp(sy - 260, sy - 110, gr);
    oxygen(ctx, ox, oy, 40, t > acT - 0.4 ? 1 : 0);
    vitC(ctx, 760, sy + 40, 95, vk, gr);
    ctx.restore();
    ctx.restore();
    pill(ctx, 'STOP IT?', 540, 420, { k: pop(t, stopT - 0.12, acT - 0.5), size: 84, bg: PAL.ink, col: PAL.cream, h: 140 });
    pill(ctx, 'LEMON JUICE', 540, 1580, { k: pop(t, lemT - 0.1, acT - 0.5), size: 64, bg: PAL.lemon, col: PAL.ink });
    pill(ctx, 'ACID', 330, 760, { k: pop(t, acT - 0.12), size: 64, bg: '#e2c400', col: PAL.ink });
    pill(ctx, 'slows the enzyme', 330, 870, { k: pop(t, slT - 0.1), size: 44, weight: 600 });
    pill(ctx, 'VITAMIN C', 760, 1420, { k: pop(t, vcT - 0.12), size: 60, bg: PAL.orange, col: PAL.white });
    pill(ctx, 'grabs the O₂ first', 760, 1530, { k: pop(t, grT - 0.1) * bump(t, P(18, 'first')), size: 44, weight: 600 });
  };
  S.end = (ctx, t) => {
    counter(ctx);
    const brT = P(19, 'brown'), rotT = P(20, 'rotting'), heT = P(20, 'healing'), cmT = P(21, 'comments');
    const b = EI(t, CUTS.end, brT + 0.4);
    appleHalf(ctx, 540, 1030, 260, b, { mood: t > heT ? 0 : 1, seed: 11 });
    big(ctx, 'BROWN APPLE', 540, 450, 110, PAL.brown, pop(t, P(19, 'apple') - 0.15));
    const card = (s, x, bg, k) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, 1500); ctx.scale(k, k); ctx.rotate(x < 540 ? -0.05 : 0.05); longShadow(ctx, (c) => { ctx.fillStyle = c || bg; rr(ctx, -230, -100, 460, 200, 44); ctx.fill(); }, 22); text(ctx, s, 0, 4, 70, PAL.white); ctx.restore(); };
    card('ROTTING?', 290, PAL.brown2, pop(t, rotT - 0.12) * bump(t, rotT));
    card('HEALING?', 790, PAL.green2, pop(t, heT - 0.12) * bump(t, heT));
    const ck = pop(t, P(21, 'tell') - 0.1);
    if (ck > 0.01) { ctx.save(); ctx.translate(540, 650); ctx.scale(ck, ck); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; rr(ctx, -300, -80, 600, 160, 50); ctx.fill(); ctx.beginPath(); ctx.moveTo(-60, 70); ctx.lineTo(-110, 140); ctx.lineTo(0, 76); ctx.fill(); }, 16); text(ctx, 'TELL ME BELOW', 0, 4, 64, PAL.ink); ctx.restore(); }
    if (t > cmT) { ctx.save(); ctx.globalAlpha = 0.5 * (1 - ph(t, cmT, cmT + 1)); ctx.strokeStyle = PAL.white; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(540, 650, 320 + 200 * ph(t, cmT, cmT + 1), 0, TAU); ctx.stroke(); ctx.restore(); }
  };

  const ORDER = [['hook', 0], ['cell', CUTS.cell], ['burst', CUTS.burst], ['react', CUTS.react], ['shield', CUTS.shield], ['lemon', CUTS.lemon], ['end', CUTS.end]];
  const WIPE = 0.5;
  // the hook -> cell move is a zoom into the apple flesh instead of a wipe (mix of camera move and wipes)
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1][1] + WIPE / 2) i++;
    const cur = ORDER[i], next = ORDER[i + 1];
    if (next && next[0] === 'cell' && t >= next[1] - WIPE / 2) {
      const u = H.ease.in(ph(t, next[1] - WIPE / 2, next[1] + WIPE / 2));
      ctx.save(); ctx.translate(540, 1150); ctx.scale(1 + 5 * u, 1 + 5 * u); ctx.translate(-540, -1150); S.hook(ctx, t); ctx.restore();
      ctx.save(); ctx.globalAlpha = H.clamp(u * 1.6 - 0.3); S.cell(ctx, t); ctx.restore();
    } else if (next && t >= next[1] - WIPE / 2) {
      const u = H.ease.inOut(ph(t, next[1] - WIPE / 2, next[1] + WIPE / 2));
      if (u < 1) S[cur[0]](ctx, t);
      ctx.save(); ctx.beginPath(); ctx.arc(540, 960, u * 1300, 0, TAU); ctx.clip(); S[next[0]](ctx, t); ctx.restore();
      if (u > 0 && u < 1) { ctx.strokeStyle = PAL.cream; ctx.lineWidth = 24; ctx.beginPath(); ctx.arc(540, 960, u * 1300, 0, TAU); ctx.stroke(); }
    } else S[cur[0]](ctx, t);
    header(ctx, t);
    H.vignette(ctx, Wd, Hd, 0.16, '40,20,60');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  // ---------- sound ----------
  function scoreSound(k) {
    const D = DURATION, R = H.rng(99);
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    const wipe = (t) => { k.play('whoosh', t - 0.3, { dur: 0.6, gain: 0.9, top: 2400 }); k.play('tock', t + 0.2, { f: 420, gain: 0.5 }); };
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 100, gain: 0.3, chords: [['D4', 'F#4', 'A4', 'C#5'], ['B3', 'D4', 'F#4', 'A4'], ['G3', 'B3', 'D4', 'F#4'], ['A3', 'C#4', 'E4', 'G4']] });
    // hook
    popAt(P(0, 'brown') - 0.15, 520, 0.9, -0.2, false); k.play('stamp', P(0, 'scab') - 0.05, { gain: 0.5 }); popAt(P(0, 'scab') - 0.15, 640, 0.9, 0.2, false);
    for (let f = Math.ceil(P(0, '5') * 8); f < (PH[0].e + 0.3) * 8; f++) k.play('tick', f / 8, { f: 3000, gain: 0.6, pan: 0.5, minor: true });
    popAt(P(0, '5') - 0.15, 760, 0.8, 0.5);
    // zoom into the cell
    k.play('riser', CUTS.cell - 0.5, { dur: 0.5, gain: 0.6 }); k.play('whoosh', CUTS.cell - 0.2, { dur: 0.5, gain: 0.8 });
    popAt(P(1, 'inside') - 0.1, 560, 0.8, 0, false);
    popAt(P(2, 'two') - 0.1, 620, 0.8, 0, false); k.play('stamp', P(2, 'locked'), { gain: 0.4 }); k.play('click', P(2, 'locked') + 0.05, { gain: 0.6 });
    for (let i = 0; i < 6; i++) popAt(P(3, 'enzyme') - 0.15 + i * 0.07, 700 + i * 40, 0.4, -0.5, true);
    popAt(P(3, 'enzyme') - 0.1, 600, 0.8, -0.4, false); popAt(P(3, 'polyphenol') - 0.1, 900, 0.5, -0.4);
    for (let i = 0; i < 9; i++) popAt(P(4, 'polyphenols') - 0.6 + i * 0.06, 900 + i * 30, 0.35, 0.5, true);
    popAt(P(4, 'polyphenols') - 0.15, 560, 0.8, 0.4, false); popAt(P(4, 'natural') - 0.1, 900, 0.5, 0.4);
    wipe(CUTS.burst);
    k.play('swish', P(5, 'slice') - 0.35, { gain: 0.9 }); k.play('slap', P(5, 'slice'), { gain: 0.5 }); popAt(P(5, 'slice') - 0.15, 500, 0.9, 0, false);
    for (let c = 0; c < 6; c++) k.play('pop', P(6, 'burst') - 0.05 + c * 0.08, { f: 300 + R() * 300, gain: 0.7, pan: (c % 3 - 1) * 0.5 });
    k.play('impact', P(6, 'burst'), { gain: 0.6 });
    k.play('swish', P(7, 'two') - 0.2, { gain: 0.5, minor: true }); k.play('ding', P(7, 'meet'), { f: 'A5', gain: 0.35 }); popAt(P(7, 'meet') - 0.15, 600, 0.9, 0, false);
    wipe(CUTS.react);
    for (let i = 0; i < 7; i++) k.play('blip', P(8, 'oxygen') - 0.25 + i * 0.22, { f: 900 + i * 60, gain: 0.35, pan: 0.6, minor: true });
    popAt(P(8, 'oxygen') - 0.1, 640, 0.8, 0.5, false); popAt(P(8, 'air') - 0.1, 900, 0.5, 0.5);
    popAt(P(9, 'enzyme') - 0.1, 560, 0.7, -0.4, false);
    for (let f = P(9, 'uses'); f < P(10, 'brown') + 0.6; f += 0.22) k.play('tock', f, { f: 520, gain: 0.35, pan: -0.4, minor: true });
    for (let n = 1; n <= 10; n++) k.play('tick', P(10, 'turn') - 0.1 + (P(10, 'brown') + 0.7 - P(10, 'turn')) * n / 10, { f: 2400 + n * 120, gain: 0.5, minor: true });
    k.play('impact', P(10, 'brown'), { gain: 0.7 }); popAt(P(10, 'brown') - 0.12, 520, 0.9, 0, false);
    k.play('ding', P(11, 'melanin'), { f: 'E6', gain: 0.35 }); popAt(P(11, 'melanin') - 0.15, 700, 0.8, 0, false);
    wipe(CUTS.shield);
    k.play('stamp', P(12, 'defence'), { gain: 0.5 }); popAt(P(12, 'defence') - 0.12, 520, 0.8, 0, false); popAt(P(12, 'scientists') - 0.1, 900, 0.4, 0);
    k.play('riser', P(13, 'shield') - 0.3, { dur: 0.6, gain: 0.5 }); popAt(P(13, 'shield') - 0.12, 600, 0.7, 0, false);
    [[P(13, 'germs'), -0.6], [P(13, 'germs') + 0.25, 0.6], [P(13, 'bugs'), -0.6], [P(13, 'bugs') + 0.3, 0.6]].forEach(([tt, p]) => { k.play('buzz', tt - 0.5, { f: 180, dur: 0.4, gain: 0.25, pan: p, minor: true }); k.play('thud', tt + 0.1, { f: 200, gain: 0.5, pan: p }); k.play('pop', tt + 0.12, { f: 1200, gain: 0.5, pan: p, minor: true }); });
    k.play('whoosh', P(14, 'scab') - 0.4, { dur: 0.4, gain: 0.5 }); popAt(P(14, 'scab') - 0.1, 560, 0.9, 0.3, false); k.play('ding', P(14, 'knee'), { f: 'C6', gain: 0.35 });
    wipe(CUTS.lemon);
    popAt(P(15, 'stop') - 0.12, 520, 0.8, 0, false);
    for (let i = 0; i < 8; i++) k.play('blip', P(16, 'squeeze') + i * 0.22 + 0.6, { f: 1400 - i * 40, gain: 0.3, minor: true });
    k.play('press', P(16, 'squeeze'), { gain: 0.6 }); popAt(P(16, 'lemon') - 0.1, 700, 0.8, 0, false);
    k.play('whoosh', P(17, 'acid') - 0.5, { dur: 0.5, gain: 0.6 }); popAt(P(17, 'acid') - 0.12, 560, 0.8, -0.4, false);
    k.play('error', P(17, 'slows'), { f: 'C4', gain: 0.35 }); popAt(P(17, 'slows') - 0.1, 900, 0.4, -0.4);
    popAt(P(18, 'vitamin') - 0.12, 640, 0.8, 0.4, false); k.play('slap', P(18, 'grabs'), { gain: 0.4, pan: 0.4 }); k.play('success', P(18, 'first'), { f: 'C6', gain: 0.35 });
    wipe(CUTS.end);
    popAt(P(19, 'apple') - 0.15, 560, 0.8, 0, false);
    k.play('thud', P(20, 'rotting'), { f: 120, gain: 0.5, pan: -0.5 }); popAt(P(20, 'rotting') - 0.12, 480, 0.9, -0.5, false);
    k.play('sparkle', P(20, 'healing'), { n: 6, gain: 0.7 }); popAt(P(20, 'healing') - 0.12, 760, 0.9, 0.5, false);
    popAt(P(21, 'tell') - 0.1, 640, 0.8, 0, false); k.play('ding', P(21, 'comments'), { f: 'G5', gain: 0.35 });
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
