// ================= 16-Bit Pixel Odyssey, vertical 1080x1920: "How does a shrimp snap make a bubble almost as hot as the Sun?" =================
(function () {
  // voiceover phrase timing [start, end, {word: time}] from phrases.json (Kokoro am_michael)
  const PH = [[0.25,1.93,{"a":0.25,"shrimp":0.31,"smaller":0.67,"than":1.09,"your":1.33,"finger":1.57}],[2.23,4.84,{"fires":2.23,"a":2.65,"bubble":2.74,"almost":3.24,"as":4.17,"hot":3.92,"the":4.34,"sun":4.59}],[5.39,6.14,{"but":5.39,"how":5.76}],[6.69,8.04,{"meet":6.69,"the":6.97,"pistol":7.19,"shrimp":7.61}],[8.59,9.89,{"one":8.59,"claw":8.89,"is":9.29,"huge":9.49}],[10.19,12.27,{"and":10.19,"it":10.4,"cocks":10.55,"open":10.91,"like":11.2,"a":11.48,"guns":11.55,"hammer":11.84}],[12.82,13.91,{"when":12.82,"it":13.11,"snaps":13.26,"shut":13.62}],[14.21,15.93,{"a":15.36,"plug":14.29,"slams":14.62,"into":15.03,"socket":15.44}],[16.23,17.86,{"and":16.23,"fires":16.49,"a":16.91,"jet":17.0,"of":17.26,"water":17.43}],[18.16,20.16,{"at":18.16,"about":18.29,"ninety":18.64,"kilometres":19.06,"an":19.75,"hour":19.89}],[20.71,22.17,{"that":20.71,"jet":21.1,"is":21.39,"so":21.59,"fast":21.78}],[22.47,24.35,{"the":22.47,"water":22.7,"behind":23.07,"it":23.52,"rips":23.67,"apart":23.97}],[24.65,25.89,{"into":24.65,"a":24.98,"tiny":25.06,"bubble":25.39}],[26.44,27.88,{"then":26.44,"the":26.7,"bubble":26.9,"collapses":27.29}],[28.18,30.42,{"in":28.18,"less":28.33,"than":28.63,"a":29.89,"thousandth":29.0,"of":29.74,"second":29.97}],[30.97,34.65,{"inside":30.97,"it":31.43,"hits":31.58,"about":31.89,"four":32.27,"thousand":32.58,"seven":33.19,"hundred":33.58,"degrees":34.11}],[34.95,37.05,{"nearly":34.95,"as":35.8,"hot":35.57,"the":35.96,"suns":36.19,"surface":36.5}],[37.6,38.96,{"it":37.6,"even":37.75,"flashes":38.05,"light":38.58}],[39.51,41.06,{"and":39.51,"that":39.72,"bang":40.0,"isnt":40.28,"the":40.57,"claw":40.78}],[41.61,42.9,{"its":41.61,"the":41.81,"bubble":42.02,"popping":42.43}],[43.2,45.16,{"one":43.2,"of":43.39,"the":44.65,"loudest":43.71,"sounds":44.15,"in":44.53,"ocean":44.84}],[45.46,47.41,{"loud":45.46,"enough":45.74,"to":46.15,"stun":46.29,"a":46.57,"passing":46.64,"fish":47.13}],[47.96,50.28,{"so":47.96,"what":48.09,"animal":48.34,"could":48.73,"beat":49.06,"this":49.31,"shrimps":49.57,"snap":50.03}]];
  // ---------- BEATS: one entry per idea, phrases from phrases.json ----------
  const BEATS = [
    { id: 'hook', p: [0, 2] }, { id: 'meet', p: [3, 5] }, { id: 'snap', p: [6, 9] }, { id: 'rip', p: [10, 12] },
    { id: 'collapse', p: [13, 14] }, { id: 'heat', p: [15, 17] }, { id: 'bang', p: [18, 21] }, { id: 'end', p: [22, 22] },
  ].map((b) => ({ ...b, s: PH[b.p[0]][0], e: PH[b.p[1]][1] }));
  const DURATION = PH[PH.length - 1][1] + 1.0;
  const Wd = (i, w) => PH[i][2][w];          // exact word time
  const A = (i, w) => Wd(i, w) - 0.1;        // visual lands up to 0.1 s before its word
  // scene changes, each in a speech pause, done the SNES way
  const CUT = { meet: 6.4, snap: 12.55, collapse: 26.17, bang: 39.25, end: 47.7 };

  const LW = 270, LH = 480; // 1080x1920 shown as 270x480 hand-placed pixels blown up 4x
  const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);
  const bay = (x, y) => BAYER[(y & 3) * 4 + (x & 3)];
  const C = (h) => H.hex(h);
  const P = {
    K: C('#0a0618'), white: C('#f8f8ff'), grey: C('#9aa0c8'), gold: C('#ffd27a'), red: C('#ff3a4a'), cyan: C('#6ef0ff'), green: C('#6aff8a'), pink: C('#ff6ab0'),
    sea: ['#3ae0e0', '#22b4d0', '#1a88c0', '#1a62a8', '#1a4290', '#162c74', '#121c58', '#0c1240'].map(C),
    ray: C('#8af4ec'), sand: C('#e8c890'), sandLit: C('#fff0c0'), sandSh: C('#b08a5a'), sandDk: C('#7a5a3a'),
    rock: C('#2a2a6a'), rockLit: C('#5a6ab8'), rock2: C('#1a1a4a'), rock2Lit: C('#3a4a98'),
    weed: C('#2a9a5a'), weedLit: C('#6ae08a'), weedDk: C('#145a3a'),
    sunHi: C('#fff6c2'), sunMid: C('#ffd27a'), sunLo: C('#ff9a5c'),
  };
  const SHELL = { base: C('#e8743a'), lit: C('#ffb070'), sh: C('#b04a2a'), seam: C('#5a1a20') };
  const CLAW = { base: C('#e0503a'), lit: C('#ff9a6a'), sh: C('#a0302a'), seam: C('#4a1018') };
  const TAIL = { base: C('#f09a5a'), lit: C('#ffd0a0'), sh: C('#c06a3a'), seam: C('#5a1a20') };
  const WB = ['#4060d0', '#3450bc', '#2a42a6', '#22358e', '#1a2a78', '#142064'].map(C);
  const PX_ARROW = ['KK.....', 'KYK....', 'KYYK...', 'KYYYK..', 'KYYYYK.', 'KYYYK..', 'KYYK...', 'KYK....', 'KK.....'];
  const PX_DOWN = ['KKKKKKKKK', 'KYYYYYYYK', '.KYYYYYK.', '..KYYYK..', '...KYK...', '....K....'];
  const HAND = ['.KKKK...', 'KWWWWKKK', 'KWWWWWWK', 'KWWWWKKK', '.KKKK...'];
  const FISH = [
    '......KKKK.......',
    '....KKbbbbKK...KK',
    '..KKbbbbbbbbK.KbK',
    '.KbbbbWWbbbbbKbbK',
    'KbbbbWKWbbbbbbbbK',
    'KbbbbWWbbbbbbbbbK',
    'KyyybbbbbbbbbKbbK',
    '.KyyyybbbbbbK.KbK',
    '..KKyyyyyyKK...KK',
    '....KKKKKK.......',
  ];
  const FISH_PAL = { K: '#0a0618', b: '#ffd23f', y: '#fff4b0', W: '#f8f8ff' };
  const FISH_DIZZY = FISH.map((r) => r.replace('WKW', 'KWK'));
  let NZ = null;

  // ================= the explainer: "how does a shrimp's snap get as hot as the Sun?" as a SNES cutscene =================
  function explainer(ctx, W_, H_, t) {
    const T = Math.floor(t * 12) / 12; // 12 fps game tick
    const prog = (a, b) => H.clamp((T - a) / (b - a));
    const step = (a, b, n) => Math.floor(prog(a, b) * n) / n;
    const on = (a) => T >= a;
    const buf = new Uint8ClampedArray(LW * LH * 4);
    const put = (x, y, c) => { x |= 0; y |= 0; if (x < 0 || y < 0 || x >= LW || y >= LH) return; const i = (y * LW + x) * 4; buf[i] = c[0]; buf[i + 1] = c[1]; buf[i + 2] = c[2]; buf[i + 3] = 255; };
    const get = (x, y) => { const i = (y * LW + x) * 4; return [buf[i], buf[i + 1], buf[i + 2]]; };
    const rect = (x, y, w, h, c) => { for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) put(x + i, y + j, c); };
    const dput = (x, y, c1, c2, a) => put(x, y, a > bay(x, y) ? c2 : c1);
    const mixc = (a, b, k) => H.mix(a, b, k).map(Math.round);
    const sprite = (rows, pal, ox, oy, flip, scale = 1) => {
      const cp = {}; for (const k in pal) cp[k] = C(pal[k]);
      rows.forEach((row, j) => [...row].forEach((ch, i) => { if (ch === '.') return; const xx = flip ? row.length - 1 - i : i; for (let a = 0; a < scale; a++) for (let b = 0; b < scale; b++) put(ox + xx * scale + a, oy + j * scale + b, cp[ch]); }));
    };
    const tc = H.layer(LW, 40), tx = tc.getContext('2d', { willReadFrequently: true });
    const text = (str, x, y, col, shadow, size = 16, outline = null) => {
      tx.clearRect(0, 0, LW, 40); tx.font = size + 'px "Press Start 2P"'; tx.textBaseline = 'top'; tx.fillStyle = '#fff'; tx.fillText(str, 0, 0);
      const w = Math.min(LW, Math.ceil(tx.measureText(str).width) + 2), hh = size + 4, d = tx.getImageData(0, 0, w, hh).data;
      if (outline) for (let j = 0; j < hh; j++) for (let i = 0; i < w; i++) if (d[(j * w + i) * 4 + 3] > 110) for (let oy = -2; oy <= 2; oy++) for (let ox = -2; ox <= 2; ox++) put(x + i + ox, y + j + oy, outline);
      if (shadow) for (let j = 0; j < hh; j++) for (let i = 0; i < w; i++) if (d[(j * w + i) * 4 + 3] > 110) { put(x + i + 1, y + j + 1, shadow); put(x + i + 2, y + j + 2, shadow); }
      for (let j = 0; j < hh; j++) for (let i = 0; i < w; i++) if (d[(j * w + i) * 4 + 3] > 110) put(x + i, y + j, col);
      return w - 2;
    };
    const tw = (str, size = 16) => { tx.font = size + 'px "Press Start 2P"'; return Math.ceil(tx.measureText(str).width); };
    const ctext = (str, cx, y, col, shadow, size = 16, outline = null) => text(str, Math.round(cx - tw(str, size) / 2), y, col, shadow, size, outline);
    const win = (x0, y0, w, h) => { // SNES RPG window
      for (let y = y0; y < y0 + h; y++) { const f = ((y - y0) / h) * (WB.length - 1), i = Math.min(WB.length - 2, Math.floor(f)), a = H.smooth(0.7, 1, f - i); for (let x = x0; x < x0 + w; x++) { if ((x === x0 || x === x0 + w - 1) && (y === y0 || y === y0 + h - 1)) continue; dput(x, y, WB[i], WB[i + 1], a); } }
      for (let x = x0 + 1; x < x0 + w - 1; x++) { put(x, y0, P.white); put(x, y0 + h - 1, P.white); put(x, y0 + 1, P.grey); put(x, y0 + h - 2, P.grey); put(x, y0 - 1, P.K); put(x, y0 + h, P.K); }
      for (let y = y0 + 1; y < y0 + h - 1; y++) { put(x0, y, P.white); put(x0 + w - 1, y, P.white); put(x0 + 1, y, P.grey); put(x0 + w - 2, y, P.grey); put(x0 - 1, y, P.K); put(x0 + w, y, P.K); }
    };
    // a window that snaps open in 4 steps (height grows from its centre), then shows its content
    const popWin = (t0, x0, y0, w, h, fill) => {
      if (T < t0) return false; const k = step(t0, t0 + 0.25, 4) || 0.25, hh = Math.max(4, Math.round(h * k));
      win(x0, Math.round(y0 + (h - hh) / 2), w, hh); if (k >= 1 && fill) fill(); return k >= 1;
    };
    const line = (x0, y0, x1, y1, c, th = 1) => { const n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) | 0; for (let i = 0; i <= n; i++) { const x = Math.round(H.lerp(x0, x1, i / (n || 1))), y = Math.round(H.lerp(y0, y1, i / (n || 1))); rect(x - (th >> 1), y - (th >> 1), th, th, c); } };
    const disc = (cx, cy, r, c) => { for (let y = -r; y <= r; y++) for (let x = -r; x <= r; x++) if (x * x + y * y <= r * r) put(cx + x, cy + y, c); };
    const ring = (cx, cy, r, c, th = 1) => { for (let y = -r - th; y <= r + th; y++) for (let x = -r - th; x <= r + th; x++) { const d = Math.sqrt(x * x + y * y); if (d >= r - th / 2 && d < r + th / 2) put(cx + x, cy + y, c); } };
    const nz = NZ || (NZ = H.makeNoise(41));

    // ---------- backdrops ----------
    // banded water: SNES gradient rows with checkerboard dither between bands, light shafts, caustics, rising bubbles
    const water = (top, bot, seed, hz = LH) => {
      const cols = P.sea.slice(top, bot + 1), n = cols.length - 1;
      for (let y = 0; y < LH; y++) { const f = Math.pow(H.clamp(y / hz), 1.1) * n, i = Math.min(n - 1, Math.floor(f)); for (let x = 0; x < LW; x++) dput(x, y, cols[i], cols[i + 1], H.smooth(0.6, 1, f - i)); }
      for (let r = 0; r < 4; r++) { // light shafts, dithered, fading with depth
        const x0 = 30 + r * 70 + Math.round(Math.sin(T * 0.6 + r) * 6), wd = 10 + (r % 2) * 8;
        for (let y = 0; y < 340; y++) { const a = 0.32 * (1 - y / 340), xs = Math.round(x0 + y * 0.35); for (let x = xs; x < xs + wd; x++) if (a > bay(x, y)) put(x, y, mixc(get(Math.min(LW - 1, Math.max(0, x)), y), P.ray, 0.5)); }
      }
      for (let x = 0; x < LW; x++) { const c = nz.n2(x * 0.08 + T * 0.4, seed); if (c > 0.25) put(x, 1 + Math.round(c * 6), P.ray); } // surface caustic glints
      const r = H.rng(seed); for (let b = 0; b < 16; b++) { const bx = r.int(0, LW), sp = r.range(14, 30), ph = r() * 600, by = Math.round(LH - ((T * sp + ph) % 520)), rr = r.int(1, 2); ring(bx + Math.round(Math.sin(T * 2 + b) * 2), by, rr, P.ray); }
    };
    const floor = (base, seed, rocks = true) => {
      if (rocks) { // rim-lit reef rocks behind the sand
        for (let x = 0; x < LW; x++) { const h = Math.round(base - 26 - 46 * Math.abs(nz.fbm2(x * 0.012, seed, 3)) * 1.7); for (let y = h; y < base + 10; y++) { const d = y - h; put(x, y, d < 2 ? P.rock2Lit : d < 5 && 0.5 > bay(x, y) ? P.rock2Lit : P.rock2); } }
        for (let x = 0; x < LW; x++) { const h = Math.round(base - 8 - 22 * Math.abs(nz.fbm2(x * 0.02 + 7, seed, 3)) * 1.6); for (let y = h; y < base + 10; y++) { const d = y - h; put(x, y, d < 2 ? P.rockLit : d < 4 && 0.5 > bay(x, y) ? P.rockLit : P.rock); } }
      }
      // seaweed: columns swaying in whole-pixel 2-frame steps
      const r = H.rng(seed + 5); for (let k = 0; k < 7; k++) { const sx = r.int(4, LW - 4), hgt = r.int(30, 70), ph = r() * 6; for (let y = 0; y < hgt; y++) { const off = Math.round(Math.sin(y * 0.12 + Math.floor(T * 4) * 0.5 + ph) * 3 * (y / hgt)); put(sx + off, base - y, P.weed); put(sx + off + 1, base - y, y % 6 < 3 ? P.weedLit : P.weed); put(sx + off - 1, base - y, P.weedDk); } }
      // sand: banded, rim-lit dune line, pebbles
      for (let x = 0; x < LW; x++) { const top = Math.round(base + 4 * nz.n2(x * 0.03, seed + 2)); for (let y = top; y < LH; y++) { const d = y - top; put(x, y, d < 2 ? P.sandLit : d < 5 ? (0.5 > bay(x, y) ? P.sandLit : P.sand) : (((y >> 2) % 4 === 0) && 0.5 > bay(x, y)) ? P.sandSh : P.sand); } }
      const rp = H.rng(seed + 9); for (let k = 0; k < 40; k++) { const px = rp.int(0, LW), py = rp.int(base + 12, LH - 2); put(px, py, P.sandDk); put(px + 1, py, P.sandSh); }
    };

    // ---------- the pistol shrimp, faces right; built from parts on an index map so every part gets its own outline ----------
    // open: 0 = claw shut, 1 = cocked fully open. walk: leg frame (0/1). Returns key points of the big claw in buffer px.
    const shrimp = (cx, cy, s, open = 0, o = {}) => {
      const a = -open * 1.25, ca = Math.cos(a), sa = Math.sin(a);
      const hx = 56, hy = 4, rot = (x, y) => [hx + x * ca - y * sa, hy + x * sa + y * ca];
      const tip = rot(24, 7), plug = rot(7, 5);
      const ell = (lx, ly, ex, ey, rx, ry) => ((lx - ex) / rx) ** 2 + ((ly - ey) / ry) ** 2 <= 1;
      const cap = (lx, ly, ax, ay, bx, by, r0, r1) => { const vx = bx - ax, vy = by - ay, u = H.clamp(((lx - ax) * vx + (ly - ay) * vy) / (vx * vx + vy * vy)); const dx = lx - (ax + vx * u), dy = ly - (ay + vy * u); const r = H.lerp(r0, r1, u); return dx * dx + dy * dy <= r * r; };
      const PAL = [];
      const part = (lx, ly) => {
        let p = -1;
        if (!o.clawOnly) {
          const fw = 3 + (-60 - lx) * 0.75; if (lx < -60 && lx > -82 && Math.abs(ly - 8) < fw) p = 0;            // tail fan
          for (let i = 0; i < 5; i++) if (ell(lx, ly, -56 + i * 9, 6 - i * 1.6, 6.5, 6.5 + i * 0.9)) p = 1 + i;      // abdomen segments
          if (ell(lx, ly, 2, 0, 20, 11.5)) p = 6;                                                                 // carapace
          if (ell(lx, ly, 21, -3, 6, 5)) p = 7;                                                                   // eye hood
          if (cap(lx, ly, 12, 10, 26, 22, 2.2, 1.8) || cap(lx, ly, 26, 22, 34, 20, 1.8, 1.2)) p = 8;            // small claw
        }
        if (cap(lx, ly, 10, 6, 30, 11, 4, 4.5)) p = 9;                                                            // big claw arm
        if (ell(lx, ly, 44, 10, 16, 10.5)) p = 10;                                                                // palm
        if (cap(lx, ly, 56, 13, 79, 16, 4.2, 1.8)) p = 11;                                                        // fixed finger
        const [ax, ay] = rot(0, 0), [bx, by] = tip, [px, py] = plug;
        if (cap(lx, ly, ax, ay, bx, by, 4.4, 1.6) || (lx - px) ** 2 + (ly - py) ** 2 < 6.5) p = 12;               // dactyl + its plug
        return p;
      };
      const pal = (p) => (p === 0 ? TAIL : p >= 8 ? CLAW : SHELL);
      const x0 = Math.floor(cx + (o.clawOnly ? 4 : -84) * s), x1 = Math.ceil(cx + 84 * s), y0 = Math.floor(cy - 36 * s), y1 = Math.ceil(cy + 30 * s);
      const bw = x1 - x0 + 1, bh = y1 - y0 + 1, idx = new Int8Array(bw * bh).fill(-1);
      for (let y = 0; y < bh; y++) for (let x = 0; x < bw; x++) idx[y * bw + x] = part((x + x0 - cx) / s, (y + y0 - cy) / s);
      const at = (x, y) => (x < 0 || y < 0 || x >= bw || y >= bh ? -1 : idx[y * bw + x]);
      // legs + antennae behind the body
      if (!o.clawOnly) {
        const wk = o.walk || 0;
        for (let i = 0; i < 4; i++) { const lx = -12 + i * 7, sw = ((i + wk) % 2 ? 2 : -2); const kx = cx + (lx + 2) * s, ky = cy + 16 * s, fx = cx + (lx - 3 + sw) * s, fy = cy + 25 * s; line(Math.round(cx + lx * s), Math.round(cy + 8 * s), Math.round(kx), Math.round(ky), SHELL.sh, Math.max(1, Math.round(s))); line(Math.round(kx), Math.round(ky), Math.round(fx), Math.round(fy), SHELL.sh, Math.max(1, Math.round(s * 0.8))); }
        for (let i = 0; i < 4; i++) { const lx = -52 + i * 9; line(Math.round(cx + lx * s), Math.round(cy + 12 * s), Math.round(cx + (lx - 3) * s), Math.round(cy + 17 * s), TAIL.sh, 1); }
        const sw = Math.round(Math.sin(T * 2.4) * 3);
        line(Math.round(cx + 24 * s), Math.round(cy - 6 * s), Math.round(cx + (62 + sw) * s), Math.round(cy - 34 * s), SHELL.lit, 1);
        line(Math.round(cx + 22 * s), Math.round(cy - 7 * s), Math.round(cx + (40 - sw) * s), Math.round(cy - 36 * s), SHELL.base, 1);
        line(Math.round(cx + 25 * s), Math.round(cy - 4 * s), Math.round(cx + (84 + sw) * s), Math.round(cy - 18 * s), SHELL.lit, 1);
      }
      for (let y = 0; y < bh; y++) for (let x = 0; x < bw; x++) {
        const p = idx[y * bw + x]; if (p < 0) continue; const pc = pal(p), X = x + x0, Y = y + y0;
        const n = [at(x - 1, y), at(x + 1, y), at(x, y - 1), at(x, y + 1)];
        if (n.some((q) => q === -1)) { put(X, Y, P.K); continue; }
        if (n.some((q) => q !== p && q > p)) { put(X, Y, pc.seam); continue; }
        const up = at(x, y - Math.max(2, Math.round(s * 1.5))), dn = at(x, y + Math.max(2, Math.round(s * 2)));
        if (up !== p) put(X, Y, pc.lit); else if (dn !== p) put(X, Y, 0.55 > bay(X, Y) ? pc.sh : pc.base);
        else if (p >= 1 && p <= 5 && ((x + y0) % 7) === 0) put(X, Y, pc.sh); else put(X, Y, pc.base);
      }
      if (o.flashClaw) for (let y = 0; y < bh; y++) for (let x = 0; x < bw; x++) { const p = idx[y * bw + x]; if (p >= 9 && at(x - 1, y) !== -1 && at(x + 1, y) !== -1 && at(x, y - 1) !== -1 && at(x, y + 1) !== -1) put(x + x0, y + y0, P.white); }
      if (!o.clawOnly) { const ex = Math.round(cx + 22 * s), ey = Math.round(cy - 3 * s), er = Math.max(1, Math.round(s * 1.4)); disc(ex, ey, er, P.K); put(ex - 1, ey - 1, P.white); }
      const B = (lx, ly) => [Math.round(cx + lx * s), Math.round(cy + ly * s)];
      return { tip: B(80, 15), front: B(70, 13), palm: B(44, 10), plug: B(...plug), dtip: B(...tip), socket: B(60, 11), hinge: B(hx, hy) };
    };
    // the plug socket drawn into the fixed finger (cutaway view)
    const socket = (s, cx, cy, filled) => { const [sx, sy] = [Math.round(cx + 62 * s), Math.round(cy + 11 * s)]; for (let y = -Math.round(2.6 * s); y <= Math.round(2.6 * s); y++) for (let x = -Math.round(3.5 * s); x <= Math.round(3.5 * s); x++) if ((x / (3.5 * s)) ** 2 + (y / (2.6 * s)) ** 2 <= 1) put(sx + x, sy + y, filled ? CLAW.lit : (0.5 > bay(sx + x, sy + y) ? P.sea[6] : P.sea[5])); ring(sx, sy, Math.round(3 * s), CLAW.seam); return [sx, sy]; };
    const bubbleSpr = (cx, cy, r, hot = 0) => { // a cavitation bubble: dithered body, rim, two highlights; hot 0..1 heats it to white
      const body = mixc(P.sea[2], [255, 240, 200], hot), rim = mixc(P.ray, [255, 255, 255], hot);
      for (let y = -r; y <= r; y++) for (let x = -r; x <= r; x++) { const d = Math.sqrt(x * x + y * y); if (d > r) continue; const X = cx + x, Y = cy + y; if (d > r - 1.5) put(X, Y, P.white); else if (d > r - 3) put(X, Y, rim); else if ((0.25 + hot * 0.7) > bay(X, Y)) put(X, Y, body); }
      if (r > 4) { disc(cx - Math.round(r * 0.4), cy - Math.round(r * 0.45), Math.max(1, Math.round(r * 0.14)), P.white); put(cx + Math.round(r * 0.35), cy + Math.round(r * 0.4), P.white); }
    };
    const sun = (sx, sy, sr) => {
      for (let y = sy - sr; y <= sy + sr; y++) { const ry = (y - (sy - sr)) / (2 * sr); if (y > sy) { const k = y - sy, gap = 1 + Math.floor(k / 8); if ((k % 6) < gap) continue; }
        for (let x = sx - sr; x <= sx + sr; x++) { if ((x - sx) ** 2 + (y - sy) ** 2 > sr * sr) continue; put(x, y, ry < 0.45 ? (ry < 0.3 ? P.sunHi : (0.3 + 0.15 * bay(x, y) > ry ? P.sunHi : P.sunMid)) : (ry < 0.6 ? P.sunMid : (ry - 0.6) * 3 > bay(x, y) ? P.sunLo : P.sunMid)); } }
    };
    const rays = (cx, cy, r0, r1, n, col, spin = 0) => { for (let k = 0; k < n; k++) { const a = k / n * Math.PI * 2 + spin; line(Math.round(cx + Math.cos(a) * r0), Math.round(cy + Math.sin(a) * r0), Math.round(cx + Math.cos(a) * r1), Math.round(cy + Math.sin(a) * r1), col, 2); } };
    const jet = (x0, y0, x1, k, y = y0) => { // water jet: stepped streak with speed lines
      const xe = Math.round(H.lerp(x0, x1, k)); for (let x = x0; x < xe; x++) { const th = 2 + Math.round(2 * (1 - (x - x0) / (x1 - x0 + 1))); for (let j = -th; j <= th; j++) put(x, y + j, Math.abs(j) === th ? P.ray : P.white); }
      for (let i = 0; i < 6; i++) { const lx = ((i * 37 + Math.floor(T * 12) * 9) % Math.max(1, xe - x0)) + x0, ly = y + (i % 2 ? -8 : 8); if (xe - x0 > 20) line(lx, ly, Math.min(xe, lx + 14), ly, P.ray); }
    };
    const header = () => { win(6, 40, 258, 26); ctext('SNAP = SUN?', 135, 45, P.white, P.K); };
    const pointer = (x, y) => sprite(HAND, { K: '#0a0618', W: '#f8f8ff' }, x + (Math.floor(T * 6) % 2) * 2, y, false, 2);

    // ---------------- scenes ----------------
    const sceneHook = () => {
      water(0, 6, 3); floor(382, 3);
      const op = T < 2.3 ? 0 : T < A(1, 'bubble') ? step(2.3, 2.62, 4) : 0;
      const bob = Math.floor(T * 3) % 2;
      const k = shrimp(112, 262 + bob, 1.32, op, { flashClaw: T >= A(1, 'bubble') && T < A(1, 'bubble') + 0.17 });
      // a finger slides in above it for scale (in whole-pixel steps), then slides away after the snap
      const fin = step(A(0, 'smaller'), A(0, 'finger'), 6) * (1 - step(2.45, 2.9, 4));
      if (fin > 0) {
        const fx = Math.round(H.lerp(-260, 6, fin)), fy = 150;
        for (let y = 0; y < 34; y++) for (let x = 0; x < 250; x++) { const r = 17, dx = x > 233 ? x - 233 : 0, dy = y - 17; if (dx * dx + dy * dy > r * r) continue; const edge = (dx + 1) ** 2 + (dy + (dy > 0 ? 1 : -1)) ** 2 > r * r || y === 0 || y === 33; put(fx + x, fy + y, edge ? P.K : y < 8 ? C('#ffd8c0') : y > 26 ? C('#d08a70') : C('#f4b498')); }
        for (let y = 5; y < 29; y++) for (let x = 0; x < 20; x++) { if (((x - 10) / 10) ** 2 + ((y - 17) / 12) ** 2 > 1) continue; put(fx + 218 + x, fy + y, x < 1 || y < 6 ? C('#c08070') : C('#ffe8e0')); }
        [70, 150].forEach((kx) => { for (let y = 8; y < 26; y += 3) put(fx + kx, fy + y, C('#c07a64')); });
        if (fin >= 1) { win(70, 104, 130, 26); ctext('FINGER', 135, 109, P.gold, P.K); }
      }
      // SNAP: the jet, then a bubble that heats to white and is compared with the Sun
      if (on(A(1, 'bubble'))) {
        const k0 = A(1, 'bubble'), jk = step(k0, k0 + 0.25, 3), [fx, fy] = k.tip;
        if (T < k0 + 0.9) jet(fx, fy, LW, jk);
        const bx = 224, by = fy, r = Math.round(4 + 14 * step(k0, k0 + 0.35, 4)), hot = step(A(1, 'almost'), A(1, 'hot'), 4);
        if (on(A(1, 'hot'))) rays(bx, by, r + 4, r + 12 + (Math.floor(T * 6) % 2) * 3, 8, P.gold, 0.2);
        bubbleSpr(bx, by, r, hot);
        if (on(A(1, 'sun'))) {
          const sk = step(A(1, 'sun'), A(1, 'sun') + 0.25, 4), sx = 210, sy = Math.round(H.lerp(60, 140, sk));
          sun(sx, sy, 30); for (let y = sy + 34; y < by - r - 14; y += 6) rect(bx - 1, y, 2, 3, P.gold);
          if (sk >= 1) { win(14, 108, 116, 26); ctext('~ SUN', 72, 113, P.gold, P.K); }
        }
      }
      // the question: a dialog window, typed, then it snaps up into the quest header
      if (on(A(2, 'but'))) {
        const up = step(5.95, 6.3, 6);
        if (up === 0) { win(6, 312, 258, 76); const q = 'BUT HOW?'; ctext(q.slice(0, Math.floor(prog(A(2, 'but'), A(2, 'how') + 0.15) * q.length) + 1), 135, 334, P.white, P.K, 32); }
        else win(6, Math.round(H.lerp(312, 40, up)), 258, Math.round(H.lerp(76, 26, up)));
      }
    };
    const sceneMeet = () => {
      water(1, 7, 9); floor(386, 9);
      // rock arch framing the reef (darker, own background)
      for (let y = 70; y < 386; y++) { const w = Math.round(16 + 10 * nz.n2(y * 0.05, 4.2)); for (let x = 0; x < w; x++) put(x, y, x === w - 1 ? P.rock2Lit : P.rock2); for (let x = LW - w - 4; x < LW; x++) put(x, y, x === LW - w - 4 ? P.rock2Lit : P.rock2); }
      const walkK = step(CUT.meet, A(3, 'pistol'), 8), x = Math.round(H.lerp(-70, 106, walkK)), walking = walkK < 1;
      const op = T < A(5, 'cocks') ? 0 : step(A(5, 'cocks'), A(5, 'cocks') + 0.34, 4);
      const k = shrimp(x, 240 + (walking ? Math.floor(T * 6) % 2 : 0), 1.32, op, { walk: walking ? Math.floor(T * 6) % 2 : 0, flashClaw: T >= A(4, 'huge') && T < A(4, 'huge') + 0.17 });
      // character card
      popWin(A(3, 'pistol'), 6, 306, 258, 82, () => { ctext('PISTOL', 135, 318, P.gold, P.K, 32); ctext('SHRIMP', 135, 354, P.white, P.K, 32); });
      if (on(A(4, 'claw'))) { const [px, py] = k.palm; if (T < A(5, 'cocks')) pointer(px - 30, py + 34); popWin(A(4, 'claw'), 96, 100, 160, 26, () => ctext('BIG CLAW', 176, 105, P.white, P.K)); for (let y = 128; y < py - 16; y += 5) rect(px + 6, y, 2, 3, P.gold); }
      if (on(A(5, 'hammer'))) { const [dx, dy] = k.dtip; popWin(A(5, 'hammer'), 120, 140, 136, 26, () => ctext('COCKED!', 188, 145, P.gold, P.K)); }
    };
    // claw cutaway (snap + rip scenes): claw alone, 3x
    const CS = 2.55, CCX = -22, CCY = 172;
    const sceneSnap = () => {
      water(2, 7, 14, 420);
      // close-up grid backdrop: a dim lab-glass grid on the deep water
      for (let y = 90; y < 300; y++) for (let x = 0; x < LW; x++) if ((x % 18 === 0 || y % 18 === 0) && 0.35 > bay(x, y)) put(x, y, P.sea[3]);
      floor(408, 14, false);
      const s0 = A(6, 'snaps'), s1 = A(7, 'slams');
      const op = T < s0 ? 1 : T < s0 + 0.17 ? 0.4 : T < 13.6 ? 0 : T < s1 - 0.25 ? step(13.6, 14.2, 4) : T < s1 ? 1 : T < s1 + 0.09 ? 0.4 : 0;
      const shake = (T >= s0 && T < s0 + 0.25) || (T >= s1 && T < s1 + 0.25) ? (Math.floor(T * 24) % 2 ? 2 : -2) : 0;
      const k = shrimp(CCX + shake, CCY, CS, op, { clawOnly: true });
      socket(CS, CCX + shake, CCY, op === 0);
      if (op > 0.5) { const [px, py] = k.plug; ring(px, py, 9 + (Math.floor(T * 6) % 2), P.gold); }
      if (on(A(7, 'plug')) && T < 20.5) popWin(A(7, 'plug'), 140, 92, 92, 26, () => { ctext('PLUG', 186, 97, P.gold, P.K); const [px, py] = k.plug; for (let y = 120; y < py - 12; y += 5) rect(px, y, 2, 3, P.gold); });
      if (on(A(7, 'socket')) && T < 20.5) popWin(A(7, 'socket'), 120, 252, 124, 26, () => { ctext('SOCKET', 182, 257, P.cyan, P.K); const [sx, sy] = [Math.round(CCX + 62 * CS), Math.round(CCY + 11 * CS)]; for (let y = sy + 12; y < 250; y += 5) rect(sx, y, 2, 3, P.cyan); });
      // the jet leaves the front of the claw
      const jy = Math.round(CCY + 14 * CS), jx0 = Math.round(CCX + 80 * CS);
      if (on(A(8, 'jet'))) jet(jx0, jy, LW, step(A(8, 'jet'), A(8, 'jet') + 0.34, 4));
      if (on(A(9, 'ninety')) && T < 20.5) popWin(A(9, 'ninety'), 6, 306, 258, 82, () => { const v = Math.round(90 * H.ease.out(prog(A(9, 'ninety'), A(9, 'hour')))); ctext(String(v), 96, 318, P.white, P.K, 32); text('KM/H', 150, 334, P.gold, P.K); ctext('JET SPEED', 135, 360, P.cyan, P.K); });
      if (T >= 20.5) sceneRip(k, jx0, jy);
    };
    const sceneRip = (k, jx0, jy) => {
      // behind the speeding jet the water tears open: dark pixel cracks, then a bubble
      const r0 = A(11, 'rips'), b0 = A(12, 'bubble');
      if (on(r0)) {
        const rk = step(r0, r0 + 0.5, 6);
        for (let i = 0; i < 18; i++) { const x = jx0 + 10 + i * 4, len = Math.round((3 + (i % 3) * 3) * rk); for (let j = 1; j <= len; j++) { put(x + (j % 2), jy - 5 - j, P.sea[7]); put(x - (j % 2), jy + 5 + j, P.sea[7]); } }
        popWin(r0, 30, 92, 210, 26, () => ctext('WATER RIPS', 135, 97, P.white, P.K));
      }
      if (on(b0)) { const r = Math.round(6 + 22 * step(b0, b0 + 0.34, 4)); bubbleSpr(Math.round(jx0 + 30), jy, r); popWin(b0, 6, 306, 258, 82, () => ctext('BUBBLE!', 135, 331, P.cyan, P.K, 32)); }
    };
    const sceneCollapse = () => { // slow-motion cam: one big bubble crushed by the water around it
      water(4, 7, 22);
      for (let y = 80; y < 300; y++) for (let x = 0; x < LW; x++) if (((x + y) % 16 === 0) && 0.3 > bay(x, y)) put(x, y, P.sea[3]);
      const c0 = A(13, 'collapses');
      const r = T < c0 ? 64 : Math.round(H.lerp(64, 5, step(c0, c0 + 0.75, 9)));
      const cx = 135, cy = 200, shrinking = T >= c0 && T < c0 + 0.75;
      if (T >= c0) for (let a = 0; a < 8; a++) { // water rushing in: arrows pointing at the centre
        const ang = a / 8 * Math.PI * 2, d = r + 14 + (Math.floor(T * 6) % 2) * 3, x = Math.round(cx + Math.cos(ang) * d), y = Math.round(cy + Math.sin(ang) * d);
        line(x, y, Math.round(x + Math.cos(ang) * 12), Math.round(y + Math.sin(ang) * 12), P.white, 2); line(x, y, Math.round(x + Math.cos(ang + 0.5) * 6), Math.round(y + Math.sin(ang + 0.5) * 6), P.white, 2); line(x, y, Math.round(x + Math.cos(ang - 0.5) * 6), Math.round(y + Math.sin(ang - 0.5) * 6), P.white, 2);
      }
      const hot = T >= c0 + 0.6 ? 0.6 + 0.4 * step(30.9, 34.2, 8) : 0;
      if (T >= 30.9) rays(cx, cy, 10, 22 + Math.round(30 * step(A(15, 'four'), A(15, 'degrees'), 8)) + (Math.floor(T * 6) % 2) * 4, 12, P.gold, T * 0.5);
      bubbleSpr(cx, cy, r, hot);
      if (T >= c0 + 0.75) { disc(cx, cy, 4, P.white); put(cx - 5, cy, P.sunHi); put(cx + 5, cy, P.sunHi); put(cx, cy - 5, P.sunHi); put(cx, cy + 5, P.sunHi); }
      text('SLOW-MO', 12, 74, P.grey, P.K);
      // the timer window carries over and turns into the thermometer readout
      if (on(A(14, 'less'))) {
        win(6, 306, 258, 82);
        if (T < 30.9) { text('LESS THAN', 20, 314, P.cyan, P.K); if (on(A(14, 'thousandth'))) ctext('0.001', 135, 334, P.white, P.K, 32); if (on(A(14, 'second'))) text('SEC', 200, 368, P.gold, P.K); }
        else {
          const v = on(A(15, 'four')) ? Math.round(4700 * H.ease.out(step(A(15, 'four'), A(15, 'degrees'), 16))) : 0;
          text('INSIDE', 20, 314, P.cyan, P.K); ctext(v.toLocaleString('en-US'), 120, 334, v >= 4700 ? P.gold : P.white, P.K, 32);
          if (on(A(15, 'degrees'))) text('C', 222, 334, P.gold, P.K, 32), ring(214, 334, 3, P.gold, 2);
          if (on(A(16, 'suns'))) text('~SUN SURFACE', 30, 370, P.sunMid, P.K);
        }
      }
      // thermometer on the left fills in stepped bars
      if (T >= 30.9) {
        win(10, 96, 34, 196); const f = step(A(15, 'four'), A(15, 'degrees'), 12);
        for (let i = 0; i < 12; i++) { const y = 272 - i * 14; rect(18, y, 18, 10, i < f * 12 ? mixc(C('#ffd27a'), C('#ff3a4a'), i / 11) : P.K); }
      }
      if (on(A(16, 'suns'))) { const sk = step(A(16, 'suns'), A(16, 'suns') + 0.25, 4); sun(Math.round(H.lerp(320, 222, sk)), 128, 30); }
      if (on(A(17, 'flashes'))) { if (Math.floor(T * 6) % 2 === 0 || T > A(17, 'light')) ctext('FLASH!', 135, 96, P.white, P.gold, 32, P.K); }
    };
    const sceneBang = () => {
      water(0, 5, 31); floor(380, 31);
      const sx = 70, sy = 300, fishK = on(A(21, 'stun'));
      const pop0 = A(19, 'popping'), lo = A(20, 'loudest');
      const k = shrimp(sx, sy, 0.95, 0);
      const [bx, by] = [k.tip[0] + 12, k.tip[1]];
      if (T < pop0) bubbleSpr(bx, by, 7);
      // sound rings spread from the popped bubble
      if (on(pop0)) { const n = on(lo) ? 4 : 1; for (let i = 0; i < n; i++) { const rr = Math.round(((T - pop0) * 90 + i * 30) % 160); if (rr > 6) ring(bx, by, rr, i % 2 ? P.white : P.ray, 2); } }
      // the fish: swims in, gets hit, spins dizzy
      const fx = 186 + (fishK && T < A(21, 'stun') + 0.34 ? (Math.floor(T * 24) % 2 ? 3 : -3) : 0), fy = 230 + (fishK ? 0 : Math.round(Math.sin(T * 2) * 4));
      sprite(fishK ? FISH_DIZZY : FISH, FISH_PAL, fx, fy, true, 4);
      if (fishK) { for (let i = 0; i < 4; i++) { const a = T * 4 + i * Math.PI / 2, x = Math.round(fx + 34 + Math.cos(a) * 26), y = Math.round(fy - 10 + Math.sin(a) * 8); put(x, y, P.gold); put(x - 1, y, P.white); put(x + 1, y, P.white); put(x, y - 1, P.white); put(x, y + 1, P.white); } popWin(A(21, 'stun'), 120, 160, 140, 26, () => ctext('STUNNED', 190, 165, P.gold, P.K)); }
      // BANG! then: not the claw (red X), it's the bubble popping
      if (on(A(18, 'bang')) && T < pop0) { const b = A(18, 'bang'), y = Math.round(84 - Math.max(0, 8 - (T - b) * 60)); ctext('BANG!', 135, y, P.red, C('#5a0814'), 32, P.K); }
      if (on(A(18, 'claw')) && T < pop0) { const [cx, cy] = k.palm; line(cx - 14, cy - 14, cx + 14, cy + 14, P.red, 4); line(cx + 14, cy - 14, cx - 14, cy + 14, P.red, 4); popWin(A(18, 'claw'), 30, 150, 140, 26, () => ctext('NOT CLAW', 100, 155, P.red, P.K)); }
      if (on(pop0)) { const k0 = T - pop0; ctext('POP!', bx + 4, Math.round(by + 30 - Math.min(10, k0 * 50)), P.gold, P.K, 32, P.K); }
      // loudness meter: one of the loudest sounds in the ocean
      if (on(lo)) popWin(lo, 6, 104, 258, 46, () => { text('LOUDEST', 16, 110, P.white, P.K); const f = step(lo, A(20, 'ocean'), 10); for (let i = 0; i < 10; i++) rect(16 + i * 24, 132, 20, 12, i < f * 10 ? mixc(P.green, P.red, i / 9) : P.K); if (f >= 1 && Math.floor(T * 6) % 2 === 0) text('MAX', 200, 110, P.red, P.K); });
    };
    const sceneEnd = () => { // the boss question: SHRIMP VS ???
      water(2, 7, 40); floor(392, 40);
      shrimp(64, 232, 0.8, Math.floor(T * 3) % 2 ? 0.6 : 0);
      ctext('VS', 168, 160, P.red, C('#5a0814'), 32, P.K);
      // mystery challenger: a blinking ? block
      const qy = 196 + (Math.floor(T * 4) % 2) * 2; rect(200, qy, 56, 56, P.K); rect(202, qy + 2, 52, 52, P.gold); rect(202, qy + 2, 52, 3, P.sunHi); rect(202, qy + 50, 52, 4, C('#c08a2a'));
      text('?', 214, qy + 12, P.white, C('#8a5a1a'), 32);
      popWin(A(22, 'so'), 6, 300, 258, 88, () => { const q = 'WHO BEATS'; ctext(q.slice(0, Math.ceil(prog(A(22, 'what'), A(22, 'beat')) * q.length)), 135, 310, P.gold, P.K); if (on(A(22, 'snap'))) ctext('THIS?', 135, 340, P.white, P.K, 32); });
      if (on(A(22, 'snap') + 0.4)) { sprite(PX_DOWN, { K: '#0a0618', Y: '#ffd27a' }, 126, 400 + (Math.floor(T * 4) % 2) * 2, false, 2); }
    };

    // ---------------- timeline with SNES transitions ----------------
    const scene = T < CUT.meet ? sceneHook : T < CUT.snap ? sceneMeet : T < CUT.collapse ? sceneSnap : T < CUT.bang ? sceneCollapse : T < CUT.end ? sceneBang : sceneEnd;
    scene();
    if (T >= 6.3) header();
    if (T < 6.3 && T >= 6.25) header();

    const mosaic = (n) => { if (n <= 1) return; for (let by = 0; by < LH; by += n) for (let bx = 0; bx < LW; bx += n) { const sx = Math.min(LW - 1, bx + (n >> 1)), sy = Math.min(LH - 1, by + (n >> 1)), si = (sy * LW + sx) * 4; for (let y = by; y < Math.min(LH, by + n); y++) for (let x = bx; x < Math.min(LW, bx + n); x++) { const i = (y * LW + x) * 4; buf[i] = buf[si]; buf[i + 1] = buf[si + 1]; buf[i + 2] = buf[si + 2]; } } };
    if (T >= CUT.meet - 0.3 && T < CUT.meet + 0.3) mosaic(Math.round(16 - Math.abs(T - CUT.meet) / 0.3 * 15));
    // venetian blinds (meet -> claw close-up)
    if (T >= CUT.snap - 0.25 && T < CUT.snap + 0.25) { const k = 1 - Math.abs(T - CUT.snap) / 0.25, bh = Math.round(k * 16); for (let y = 0; y < LH; y++) if ((y % 16) < bh) for (let x = 0; x < LW; x++) put(x, y, P.K); }
    // wavy battle-swirl (jet -> slow-mo bubble)
    if (T >= CUT.collapse - 0.3 && T < CUT.collapse + 0.3) { const k = 1 - Math.abs(T - CUT.collapse) / 0.3, src = buf.slice(); for (let y = 0; y < LH; y++) { const off = Math.round(Math.sin(y * 0.2 + T * 30) * k * 40); for (let x = 0; x < LW; x++) { const sx = ((x + off) % LW + LW) % LW, si = (y * LW + sx) * 4, i = (y * LW + x) * 4; for (let c = 0; c < 3; c++) buf[i + c] = src[si + c] + (255 - src[si + c]) * k * 0.6; } } }
    // iris (flash -> reef)
    if (T >= CUT.bang - 0.3 && T < CUT.bang + 0.3) { const k = Math.abs(T - CUT.bang) / 0.3, R = Math.round(k * 300), cx = 135, cy = 200; for (let y = 0; y < LH; y++) for (let x = 0; x < LW; x++) if ((x - cx) ** 2 + (y - cy) ** 2 > R * R) { const i = (y * LW + x) * 4; buf[i] = buf[i + 1] = buf[i + 2] = 0; } }
    // master-brightness: fade in at the start, dip to black into the ending (16 discrete levels)
    let lvl = Math.min(15, Math.floor((T / 0.4) * 15));
    if (T >= CUT.end - 0.25 && T < CUT.end + 0.25) lvl = Math.floor(Math.abs(T - CUT.end) / 0.25 * 15);
    if (lvl < 15) for (let i = 0; i < buf.length; i += 4) { buf[i] = buf[i] * lvl / 15; buf[i + 1] = buf[i + 1] * lvl / 15; buf[i + 2] = buf[i + 2] * lvl / 15; }
    // screen flashes: the snaps, the light flash, the bang
    const flashes = [A(1, 'bubble'), A(6, 'snaps'), A(7, 'slams'), A(17, 'flashes'), A(18, 'bang'), A(19, 'popping')];
    for (const f of flashes) if (T >= f && T < f + 0.09) for (let i = 0; i < buf.length; i += 4) { buf[i] = Math.min(255, buf[i] + 130); buf[i + 1] = Math.min(255, buf[i + 1] + 120); buf[i + 2] = Math.min(255, buf[i + 2] + 90); }

    const lc = H.layer(LW, LH), lx = lc.getContext('2d');
    lx.putImageData(new ImageData(buf, LW, LH), 0, 0);
    ctx.save(); ctx.imageSmoothingEnabled = false; ctx.drawImage(lc, 0, 0, W_, H_); ctx.restore();
  }

  // ================= SOUND: SNES chip palette, every cue on the 12 fps tick its picture first shows =================
  function scoreSound(k) {
    const tick = (a) => Math.ceil(a * 12 - 1e-6) / 12;
    const at = (a) => tick(a);
    const sq = (t, f, dur, gain, pan) => k.tone(t, { f, type: 'square', dur, gain, a: 0.001, hold: dur * 0.6, pan });
    const tri = (t, f, dur, gain, pan) => k.tone(t, { f, type: 'triangle', dur, gain, a: 0.002, hold: dur * 0.6, pan });
    const crash = (t, dur, gain) => k.noise(t, { dur, filter: 'lowpass', f: 3200, gain, rate: 0.25, a: 0.001 });
    const snap = (t, g = 1) => { crash(t, 0.35, 0.5 * g); k.play('impact', t, { gain: 0.9 * g }); sq(t, 1800, 0.04, 0.06 * g); };
    const winOpen = (t, pan = 0) => k.withMinor(() => [0, 1, 2].forEach((i) => tri(t + i / 12, ['C5', 'E5', 'G5'][i], 0.05, 0.12, pan)));
    const typeOut = (t0, t1, n) => k.play('text', at(t0), { n, rate: (t1 - t0) / n, gain: 1.1, minor: true });
    const mosaic = (c) => { for (let T = tick(c - 0.3); T < c + 0.3; T += 1 / 12) { const n = Math.round(16 - Math.abs(T - c) / 0.3 * 15); if (n > 1) sq(T, 1500 / Math.sqrt(n), 0.075, 0.038); } };

    // hook
    k.play('select', 0.05, { gain: 0.6, minor: true });
    for (let i = 0; i < 6; i++) k.play('blip', at(A(0, 'smaller')) + i * (A(0, 'finger') - A(0, 'smaller')) / 6, { f: 300 + i * 40, dur: 0.03, gain: 0.6, minor: true });
    k.play('select', at(A(0, 'finger')), { gain: 0.7 });
    k.withMinor(() => [0, 1, 2, 3].forEach((i) => sq(tick(2.3) + i / 12, 400 + i * 120, 0.04, 0.05)));       // claw cocks
    snap(at(A(1, 'bubble')));
    k.play('riser', at(A(1, 'almost')), { dur: A(1, 'hot') - A(1, 'almost'), gain: 0.5 });
    k.play('sparkle', at(A(1, 'hot')), { n: 5, gain: 0.6 });
    k.play('powerup', at(A(1, 'sun')), { gain: 0.6 });
    typeOut(A(2, 'but'), A(2, 'how') + 0.15, 8);
    k.withMinor(() => ['G4', 'A4', 'C5', 'D5', 'E5', 'G5'].forEach((n, i) => tri(tick(5.95) + i * 0.06, n, 0.05, 0.12)));
    // meet
    mosaic(CUT.meet);
    for (let T = tick(CUT.meet); T < A(3, 'pistol'); T += 1 / 6) k.play('tick', T, { f: 2200, gain: 0.5, minor: true });   // footsteps
    winOpen(at(A(3, 'pistol'))); k.play('coin', at(A(3, 'pistol')) + 0.25, { gain: 0.6 });
    winOpen(at(A(4, 'claw')), 0.4); k.play('blip', at(A(4, 'claw')), { f: 'A5', gain: 0.6, minor: true });
    k.play('jump', at(A(4, 'huge')), { gain: 0.7 });
    k.withMinor(() => [0, 1, 2, 3].forEach((i) => sq(at(A(5, 'cocks')) + i / 12, 300 + i * 150, 0.04, 0.06)));
    k.play('click', at(A(5, 'cocks')) + 0.34, { gain: 0.9 }); winOpen(at(A(5, 'hammer')), 0.4);
    // snap close-up
    for (let y = 0; y < 3; y++) sq(tick(CUT.snap - 0.25) + y * 0.08, 900 - y * 200, 0.05, 0.04);
    snap(at(A(6, 'snaps')));
    k.withMinor(() => [0, 1, 2, 3].forEach((i) => sq(tick(13.6) + i * 0.15, 300 + i * 150, 0.04, 0.05)));
    winOpen(at(A(7, 'plug'))); snap(at(A(7, 'slams')), 0.8); winOpen(at(A(7, 'socket')));
    k.play('whoosh', at(A(8, 'jet')) - 0.05, { dur: 0.4, gain: 0.8, top: 3600 });
    winOpen(at(A(9, 'ninety')), -0.3);
    for (let T = at(A(9, 'ninety')); T < A(9, 'hour'); T += 1 / 12) k.play('count', T, { gain: 0.7, minor: true });
    k.play('coin', at(A(9, 'hour')), { gain: 0.8 });
    // rip + bubble
    k.play('glitch', at(A(11, 'rips')), { gain: 0.7 }); winOpen(at(A(11, 'rips')));
    k.play('pop', at(A(12, 'bubble')), { f: 500, gain: 0.8 }); k.play('select', at(A(12, 'bubble')) + 0.1, { gain: 0.6 });
    // collapse
    for (let T = tick(CUT.collapse - 0.3); T < CUT.collapse + 0.3; T += 1 / 12) k.withMinor(() => sq(T, 300 + 700 * (1 - Math.abs(T - CUT.collapse) / 0.3), 0.05, 0.035));
    for (let i = 0; i < 9; i++) k.withMinor(() => sq(at(A(13, 'collapses')) + i * 0.75 / 9, 1400 - i * 120, 0.05, 0.05));
    k.play('thud', at(A(13, 'collapses')) + 0.75, { f: 150, gain: 0.8 });
    winOpen(at(A(14, 'less')));
    k.play('stamp', at(A(14, 'thousandth')), { gain: 0.6 });
    k.play('blip', at(A(14, 'second')), { f: 'E6', gain: 0.6, minor: true });
    // heat
    for (let i = 0; i < 12; i++) k.withMinor(() => sq(at(A(15, 'four')) + i * (A(15, 'degrees') - A(15, 'four')) / 12, 520 + i * 90, 0.04, 0.05));
    k.play('powerup', at(A(15, 'degrees')), { gain: 0.8 }); k.play('impact', at(A(15, 'degrees')), { gain: 0.6 });
    k.play('whoosh', at(A(16, 'suns')) - 0.1, { dur: 0.35, gain: 0.6 }); k.play('ding', at(A(16, 'suns')) + 0.25, { f: 'E6', gain: 0.4 });
    crash(at(A(17, 'flashes')), 0.6, 0.45); k.play('sparkle', at(A(17, 'flashes')), { n: 8, gain: 0.9 });
    // bang
    for (let T = tick(CUT.bang - 0.3); T < CUT.bang + 0.3; T += 1 / 12) k.withMinor(() => sq(T, 200 + Math.abs(T - CUT.bang) * 2400, 0.05, 0.035));
    snap(at(A(18, 'bang')), 1.2);
    k.play('error', at(A(18, 'claw')), { gain: 0.6 });
    k.play('pop', at(A(19, 'popping')), { f: 700, gain: 1 }); crash(at(A(19, 'popping')), 0.3, 0.4);
    winOpen(at(A(20, 'loudest')));
    for (let i = 0; i < 10; i++) k.withMinor(() => sq(at(A(20, 'loudest')) + i * (A(20, 'ocean') - A(20, 'loudest')) / 10, 300 + i * 110, 0.04, 0.05));
    k.play('buzz', at(A(20, 'ocean')), { f: 110, dur: 0.3, gain: 0.5 });
    k.play('hurt', at(A(21, 'stun')), { gain: 0.9 }); winOpen(at(A(21, 'stun')), 0.4);
    // end
    for (let i = 0; i < 6; i++) k.withMinor(() => tri(tick(CUT.end - 0.25) + i / 12, 700 - i * 60, 0.05, 0.06));
    winOpen(at(A(22, 'so')));
    typeOut(A(22, 'what'), A(22, 'beat'), 9);
    k.play('stamp', at(A(22, 'snap')), { gain: 0.6 }); k.play('success', at(A(22, 'snap')) + 0.15, { gain: 0.5 });
  }

  window.BEATS = BEATS;
  window.DURATION = DURATION;
  window.explainer = explainer;
  window.scoreSound = scoreSound;
})();
