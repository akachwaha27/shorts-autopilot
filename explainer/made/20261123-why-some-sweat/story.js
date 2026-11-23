// ================= Flat-Vector Science, 16:9 1280x720: "Why do some people sweat so much more than others?" =================
(function () {
  const W = 1280, HH = 720, CX = 640, CY = 360;
  // ---------- BEATS: every phrase of the Kokoro voiceover (phrases.json), with its word times ----------
  const BEATS = [
    { s: 0.25, e: 2.57, w: {"you":0.25,"have":0.46,"up":0.74,"to":0.88,"four":1.02,"million":1.31,"sweat":1.8,"glands":2.15} }, // 0 You have up to four million sweat glands.
    { s: 2.93, e: 4.43, w: {"so":2.93,"why":3.07,"do":3.29,"some":3.43,"people":3.71,"drip":4.14} }, // 1 So why do some people drip,
    { s: 4.80, e: 6.45, w: {"while":4.8,"others":5.13,"barely":5.52,"look":5.92,"damp":6.18} }, // 2 while others barely look damp?
    { s: 6.98, e: 9.99, w: {"picture":6.98,"two":7.53,"people":7.77,"same":8.25,"hot":8.56,"room":8.8,"workout":9.44} }, // 3 Picture two people, same hot room, same workout.
    { s: 10.45, e: 12.44, w: {"one":10.45,"is":10.69,"soaked":10.85,"the":11.33,"other":11.57,"fine":12.12} }, // 4 One is soaked. The other is fine.
    { s: 12.89, e: 15.30, w: {"its":12.89,"not":13.11,"about":13.32,"being":13.67,"healthy":14.03,"or":14.52,"unhealthy":14.66} }, // 5 It's not about being healthy or unhealthy.
    { s: 15.65, e: 18.04, w: {"it":15.65,"comes":15.79,"down":16.13,"to":16.4,"your":16.54,"bodys":16.81,"cooling":17.15,"system":17.63} }, // 6 It comes down to your body's cooling system,
    { s: 18.43, e: 20.22, w: {"and":18.43,"how":18.66,"hard":18.88,"its":19.18,"been":19.4,"trained":19.7} }, // 7 and how hard it's been trained.
    { s: 20.60, e: 22.15, w: {"lets":20.6,"start":20.86,"with":21.18,"the":21.44,"hardware":21.63} }, // 8 Let's start with the hardware.
    { s: 22.55, e: 25.94, w: {"your":22.55,"skin":22.84,"is":23.13,"packed":23.27,"with":23.71,"two":24.0,"to":24.21,"four":24.36,"million":24.64,"sweat":25.15,"glands":25.51} }, // 9 Your skin is packed with two to four million sweat glands.
    { s: 26.42, e: 28.28, w: {"each":26.42,"one":26.73,"is":26.96,"a":27.12,"tiny":27.19,"coiled":27.5,"tube":27.97} }, // 10 Each one is a tiny coiled tube,
    { s: 28.74, e: 31.02, w: {"buried":28.74,"in":29.18,"your":29.33,"skin":29.62,"like":29.91,"a":30.21,"curly":30.28,"straw":30.65} }, // 11 buried in your skin like a curly straw.
    { s: 31.48, e: 33.39, w: {"they":31.48,"cover":31.76,"almost":32.1,"your":32.51,"whole":32.78,"body":33.12} }, // 12 They cover almost your whole body,
    { s: 33.89, e: 36.66, w: {"with":33.89,"the":34.17,"most":34.38,"on":34.66,"your":34.79,"palms":35.07,"soles":35.63,"of":35.97,"feet":36.39} }, // 13 with the most on your palms, the soles of your feet,
    { s: 36.90, e: 37.81, w: {"and":36.9,"your":37.09,"forehead":37.33} }, // 14 and your forehead.
    { s: 38.16, e: 39.79, w: {"now":38.16,"heres":38.38,"how":38.73,"they":38.94,"switch":39.22,"on":39.65} }, // 15 Now here's how they switch on.
    { s: 40.24, e: 44.05, w: {"deep":40.24,"in":40.54,"your":40.69,"brain":40.99,"sits":41.36,"a":41.66,"thermostat":41.73,"called":42.48,"the":42.93,"hypothalamus":43.15} }, // 16 Deep in your brain sits a thermostat called the hypothalamus.
    { s: 44.39, e: 46.81, w: {"when":44.39,"your":44.67,"core":44.95,"gets":45.22,"even":45.5,"slightly":45.78,"too":46.33,"warm":46.54} }, // 17 When your core gets even slightly too warm,
    { s: 47.35, e: 49.58, w: {"it":47.35,"fires":47.51,"a":47.91,"signal":47.99,"down":48.47,"your":48.78,"nerves":49.1} }, // 18 it fires a signal down your nerves.
    { s: 49.97, e: 52.71, w: {"the":49.97,"glands":50.17,"squeeze":50.57,"out":51.04,"salty":51.24,"water":51.57,"onto":51.91,"your":52.18,"skin":52.44} }, // 19 The glands squeeze out salty water onto your skin.
    { s: 53.11, e: 54.72, w: {"and":53.11,"then":53.3,"comes":53.56,"the":53.88,"clever":54.08,"part":54.47} }, // 20 And then comes the clever part.
    { s: 55.16, e: 57.19, w: {"sweat":55.16,"doesnt":55.52,"cool":55.96,"you":56.25,"by":56.47,"being":56.61,"wet":56.97} }, // 21 Sweat doesn't cool you by being wet.
    { s: 57.62, e: 59.37, w: {"it":57.62,"cools":57.77,"you":58.13,"by":58.35,"disappearing":58.49} }, // 22 It cools you by disappearing.
    { s: 59.73, e: 62.39, w: {"when":59.73,"it":60.0,"evaporates":60.14,"carries":60.96,"heat":61.44,"away":61.71,"with":61.98} }, // 23 When it evaporates, it carries heat away with it.
    { s: 62.84, e: 65.15, w: {"thats":62.84,"why":63.23,"a":63.47,"humid":63.55,"day":63.95,"feels":64.19,"so":64.59,"awful":64.75} }, // 24 That's why a humid day feels so awful.
    { s: 65.55, e: 67.36, w: {"the":65.55,"air":65.76,"is":65.97,"already":66.11,"full":66.6,"of":66.87,"water":67.01} }, // 25 The air is already full of water,
    { s: 67.77, e: 69.95, w: {"so":67.77,"your":67.91,"sweat":68.18,"just":68.52,"sits":68.79,"there":69.06,"and":69.4,"drips":69.61} }, // 26 so your sweat just sits there and drips.
    { s: 70.42, e: 72.46, w: {"and":70.42,"fresh":70.63,"sweat":70.97,"barely":71.31,"smells":71.71,"at":72.12,"all":72.25} }, // 27 And fresh sweat barely smells at all.
    { s: 72.83, e: 74.45, w: {"the":72.83,"smell":73.03,"comes":73.35,"from":73.68,"bacteria":73.94} }, // 28 The smell comes from bacteria
    { s: 74.85, e: 77.20, w: {"munching":74.85,"on":75.39,"sweat":75.53,"from":75.86,"your":76.13,"armpit":76.4,"glands":76.8} }, // 29 munching on sweat from your armpit glands.
    { s: 77.57, e: 80.88, w: {"so":77.57,"why":77.72,"does":77.96,"one":78.28,"person":78.51,"drip":78.99,"while":79.3,"another":79.7,"stays":80.25,"dry":80.64} }, // 30 So why does one person drip while another stays dry?
    { s: 81.39, e: 82.35, w: {"first":81.39,"size":81.93} }, // 31 First, size.
    { s: 82.69, e: 85.17, w: {"a":82.69,"bigger":82.77,"body":83.19,"makes":83.47,"more":83.83,"heat":84.11,"when":84.39,"it":84.68,"moves":84.82} }, // 32 A bigger body makes more heat when it moves,
    { s: 85.52, e: 87.27, w: {"so":85.52,"it":85.66,"needs":85.79,"more":86.13,"sweat":86.4,"to":86.73,"dump":86.87} }, // 33 so it needs more sweat to dump it.
    { s: 87.66, e: 88.88, w: {"second":87.66,"your":88.15,"genes":88.47} }, // 34 Second, your genes.
    { s: 89.26, e: 91.68, w: {"some":89.26,"people":89.52,"simply":89.93,"have":90.33,"more":90.6,"active":90.87,"glands":91.27} }, // 35 Some people simply have more active glands,
    { s: 92.08, e: 93.68, w: {"or":92.08,"glands":92.22,"that":92.66,"pump":92.95,"harder":93.24} }, // 36 or glands that pump harder.
    { s: 94.12, e: 96.18, w: {"third":94.12,"men":94.48,"and":94.7,"women":94.93,"tend":95.29,"to":95.59,"differ":95.73} }, // 37 Third, men and women tend to differ.
    { s: 96.60, e: 97.88, w: {"in":96.6,"a":96.77,"study":96.85,"japan":97.45} }, // 38 In a study in Japan,
    { s: 98.30, e: 100.91, w: {"fit":98.3,"men":98.5,"started":98.71,"sweating":99.19,"fastest":99.74,"of":100.22,"everyone":100.36} }, // 39 fit men started sweating fastest of everyone,
    { s: 101.48, e: 103.46, w: {"and":101.48,"inactive":101.67,"women":102.18,"sweated":102.5,"the":102.94,"least":103.14} }, // 40 and inactive women sweated the least.
    { s: 103.83, e: 106.70, w: {"but":103.83,"heres":104.06,"the":104.44,"twist":104.66,"most":105.04,"people":105.34,"get":105.79,"backwards":106.02} }, // 41 But here's the twist most people get backwards.
    { s: 107.05, e: 110.39, w: {"sweating":107.05,"a":107.64,"lot":107.72,"usually":107.94,"means":108.46,"youre":108.83,"fitter":109.2,"not":109.65,"less":109.87,"fit":110.17} }, // 42 Sweating a lot usually means you're fitter, not less fit.
    { s: 110.84, e: 114.01, w: {"a":110.84,"trained":110.91,"body":111.44,"is":111.74,"like":111.89,"an":112.2,"upgraded":112.35,"air":112.95,"conditioner":113.18} }, // 43 A trained body is like an upgraded air conditioner.
    { s: 114.35, e: 115.65, w: {"it":114.35,"turns":114.53,"on":114.96,"sooner":115.13} }, // 44 It turns on sooner,
    { s: 115.98, e: 117.26, w: {"before":115.98,"you":116.37,"even":116.56,"feel":116.82,"hot":117.07} }, // 45 before you even feel hot,
    { s: 117.79, e: 120.33, w: {"and":117.79,"it":118.0,"pumps":118.14,"out":118.48,"more":118.69,"sweat":118.96,"once":119.3,"gets":119.72,"going":119.99} }, // 46 and it pumps out more sweat once it gets going.
    { s: 120.79, e: 122.72, w: {"heat":120.79,"training":121.07,"does":121.62,"the":121.9,"same":122.1,"thing":122.38} }, // 47 Heat training does the same thing.
    { s: 123.18, e: 126.30, w: {"spend":123.18,"around":123.55,"one":123.98,"to":124.2,"two":124.34,"weeks":124.56,"exercising":124.92,"in":125.65,"the":125.79,"heat":126.01} }, // 48 Spend around one to two weeks exercising in the heat,
    { s: 126.77, e: 128.78, w: {"and":126.77,"your":126.96,"body":127.21,"starts":127.46,"sweating":127.84,"earlier":128.34} }, // 49 and your body starts sweating earlier,
    { s: 129.21, e: 130.15, w: {"pours":129.21,"out":129.6,"more":129.84} }, // 50 pours out more,
    { s: 130.62, e: 132.56, w: {"and":130.62,"holds":130.86,"on":131.24,"to":131.4,"more":131.55,"of":131.87,"its":132.02,"salt":132.25} }, // 51 and holds on to more of its salt.
    { s: 133.02, e: 134.46, w: {"now":133.02,"lets":133.26,"talk":133.58,"numbers":133.9} }, // 52 Now let's talk numbers.
    { s: 134.82, e: 136.29, w: {"sitting":134.82,"still":135.29,"on":135.63,"a":135.76,"cool":135.83,"day":136.09} }, // 53 Sitting still on a cool day,
    { s: 136.76, e: 139.12, w: {"you":136.76,"lose":136.95,"a":137.2,"little":137.26,"sweat":137.63,"without":137.94,"ever":138.38,"noticing":138.63} }, // 54 you lose a little sweat without ever noticing.
    { s: 139.51, e: 141.64, w: {"but":139.51,"during":139.72,"hard":140.15,"exercise":140.43,"in":141.0,"the":141.14,"heat":141.35} }, // 55 But during hard exercise in the heat,
    { s: 142.19, e: 144.82, w: {"an":142.19,"adult":142.34,"can":142.72,"sweat":142.94,"more":143.32,"than":143.62,"a":143.92,"litre":144.0,"hour":144.52} }, // 56 an adult can sweat more than a litre an hour.
    { s: 145.24, e: 147.54, w: {"some":145.24,"athletes":145.54,"lose":146.13,"two":146.43,"litres":146.65,"or":147.09,"more":147.24} }, // 57 Some athletes lose two litres or more.
    { s: 147.98, e: 149.45, w: {"thats":147.98,"a":148.31,"big":148.38,"bottle":148.58,"of":148.98,"water":149.11} }, // 58 That's a big bottle of water,
    { s: 149.90, e: 151.64, w: {"leaving":149.9,"your":150.3,"body":150.54,"through":150.77,"skin":151.41} }, // 59 leaving your body through your skin.
    { s: 152.04, e: 153.80, w: {"and":152.04,"every":152.24,"drop":152.58,"that":152.85,"evaporates":153.12} }, // 60 And every drop that evaporates
    { s: 153.88, e: 156.40, w: {"pulls":153.88,"a":154.22,"surprising":154.29,"amount":154.97,"of":155.38,"heat":155.52,"out":155.79,"with":155.99,"it":156.27} }, // 61 pulls a surprising amount of heat out with it.
    { s: 156.80, e: 158.42, w: {"so":156.8,"why":156.94,"does":157.16,"all":157.46,"this":157.68,"matter":157.97} }, // 62 So why does all this matter?
    { s: 158.86, e: 161.91, w: {"because":158.86,"sweating":159.37,"is":159.95,"one":160.1,"of":160.31,"humanitys":160.46,"superpowers":161.11} }, // 63 Because sweating is one of humanity's superpowers.
    { s: 162.32, e: 164.89, w: {"most":162.32,"furry":162.63,"animals":163.02,"cool":163.57,"down":163.88,"by":164.19,"panting":164.34} }, // 64 Most furry animals cool down by panting.
    { s: 165.27, e: 167.60, w: {"we":165.27,"cool":165.42,"our":165.72,"whole":165.95,"body":166.32,"surface":166.62,"at":167.15,"once":167.3} }, // 65 We cool our whole body surface at once,
    { s: 168.08, e: 170.87, w: {"which":168.08,"is":168.53,"part":168.71,"of":169.07,"why":169.25,"humans":169.52,"are":170.06,"so":170.33,"good":170.51} }, // 66 which is part of why humans are so good
    { s: 171.11, e: 172.53, w: {"at":171.11,"long":171.23,"slow":171.48,"runs":171.73,"in":171.98,"the":172.1,"heat":172.29} }, // 67 at long, slow runs in the heat.
    { s: 173.00, e: 175.00, w: {"so":173.0,"if":173.13,"youre":173.26,"the":173.58,"one":173.78,"dripping":173.97,"at":174.49,"gym":174.81} }, // 68 So if you're the one dripping at the gym,
    { s: 175.35, e: 176.50, w: {"dont":175.35,"be":175.62,"embarrassed":175.76} }, // 69 don't be embarrassed.
    { s: 176.90, e: 179.95, w: {"your":176.9,"cooling":177.2,"system":177.74,"might":178.19,"just":178.58,"be":178.88,"top":179.03,"of":179.26,"the":179.42,"line":179.65} }, // 70 Your cooling system might just be top of the line.
    { s: 180.30, e: 183.79, w: {"just":180.3,"remember":180.61,"to":181.23,"drink":181.39,"water":181.78,"and":182.16,"replace":182.4,"what":182.94,"you":183.25,"lose":183.48} }, // 71 Just remember to drink water and replace what you lose.
    { s: 184.18, e: 186.54, w: {"next":184.18,"time":184.49,"why":184.79,"do":185.02,"you":185.17,"have":185.4,"two":185.71,"nostrils":185.93} }, // 72 Next time, why do you have two nostrils,
    { s: 186.63, e: 189.52, w: {"and":186.63,"why":186.89,"is":187.14,"one":187.31,"of":187.57,"them":187.74,"always":188.08,"more":188.59,"blocked":188.93} }, // 73 and why is one of them always more blocked?
  ];
  const MISS = (window.MISSING_WORDS = []);
  const T = (i, w) => { const v = BEATS[i].w[w]; if (v == null) { MISS.push(i + ':' + w); return BEATS[i].s; } return v; };
  const S0 = (i) => BEATS[i].s, E0 = (i) => BEATS[i].e;
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;

  // ---------- helpers ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { navy: '#1b2a5c', ink: '#1d1d3a', cream: '#fff6e6', sand: '#f2c66d', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', sky: '#8fd3ff', ice: '#cfeeff', teal: '#1fb6a6', green: '#5cc96b', pink: '#ff8fb1', purple: '#7a5cff', yellow: '#ffd23f', skin: '#f3c7a0', skin2: '#c98d63', white: '#ffffff', sweat: '#5ec8ff' };
  const rr = (ctx, x, y, w, h, r) => { r = Math.min(r, w / 2, h / 2); ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 18, col = 'rgba(20,20,60,0.16)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
  const text = (ctx, s, x, y, size, col = PAL.ink, weight = 700, align = 'center') => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; ctx.fillStyle = col; ctx.textAlign = align; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y); ctx.restore(); };
  const measure = (ctx, s, size, weight = 700) => { ctx.save(); ctx.font = `${weight} ${size}px "Fredoka"`; const w = ctx.measureText(s).width; ctx.restore(); return w; };
  const pill = (ctx, s, x, y, o = {}) => {
    const k = o.k ?? 1; if (k <= 0.01) return;
    const size = o.size || 30, padX = size * 0.7, h = o.h || size * 1.7, w = measure(ctx, s, size, o.weight || 700) + padX * 2;
    ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => { ctx.fillStyle = c || o.bg || PAL.cream; rr(ctx, -w / 2, -h / 2, w, h, h / 2); ctx.fill(); }, o.sh ?? 12);
    text(ctx, s, 0, 2, size, o.col || PAL.ink, o.weight || 700);
    ctx.restore();
  };
  const big = (ctx, s, x, y, size, col, k = 1, sh = 16) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col, 700), sh); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, Math.max(0, r), 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 10, prog = 1) => {
    if (prog <= 0) return; const x = H.lerp(x0, x1, prog), y = H.lerp(y0, y1, prog), a = Math.atan2(y1 - y0, x1 - x0);
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = col; ctx.translate(x, y); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt * 1.2, -wdt * 1.4); ctx.lineTo(-wdt * 1.2, wdt * 1.4); ctx.closePath(); ctx.fill(); ctx.restore();
  };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(0, 0, W, HH); };
  const floor = (ctx, y, c0, c1) => { ctx.fillStyle = c0; ctx.fillRect(0, y, W, HH - y); if (c1) { ctx.fillStyle = c1; ctx.fillRect(0, y, W, 10); } };
  const sun = (ctx, x, y, r, t = 0, col = '#ffd23f') => { ctx.save(); ctx.fillStyle = 'rgba(255,220,100,0.35)'; for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2 + t * 0.15; ctx.beginPath(); ctx.moveTo(x, y); ctx.arc(x, y, r * 2.1, a, a + 0.16); ctx.closePath(); ctx.fill(); } ctx.restore(); longShadow(ctx, (c) => circle(ctx, x, y, r, c || col), 20); };
  const dots = (ctx, seed, n, col, a0 = 0.15) => { const r = H.rng(seed); ctx.save(); ctx.fillStyle = col; for (let i = 0; i < n; i++) { ctx.globalAlpha = a0 + r() * a0; circle(ctx, r() * W, r() * HH, 3 + r() * 8, col); } ctx.restore(); };
  // a teardrop of sweat, tip up
  const drop = (ctx, x, y, r, col = PAL.sweat, shine = true) => {
    ctx.save(); ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(x, y - r * 2.1); ctx.bezierCurveTo(x + r * 0.35, y - r * 1.2, x + r, y - r * 0.5, x + r, y + r * 0.1); ctx.arc(x, y + r * 0.1, r, 0, Math.PI); ctx.bezierCurveTo(x - r, y - r * 0.5, x - r * 0.35, y - r * 1.2, x, y - r * 2.1); ctx.fill();
    if (shine && r > 5) { ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.beginPath(); ctx.ellipse(x - r * 0.38, y - r * 0.15, r * 0.18, r * 0.32, -0.3, 0, Math.PI * 2); ctx.fill(); }
    ctx.restore();
  };
  // falling sweat from a region, loops with t (pure function of t)
  const sweatFall = (ctx, x, y, w, fall, n, t, seed, r = 7, speed = 1) => { const R = H.rng(seed); for (let i = 0; i < n; i++) { const ox = R() * w - w / 2, ph0 = R(), sp = (0.6 + R() * 0.6) * speed; const u = (t * sp + ph0) % 1; ctx.save(); ctx.globalAlpha = u < 0.85 ? 1 : (1 - u) / 0.15; drop(ctx, x + ox, y + u * u * fall, r * (0.8 + R() * 0.5)); ctx.restore(); } };
  // flat cartoon person. o: { shirt, pants, hair, skin, sweat (0..1), face: 'happy'|'hot'|'calm'|'tired', run (0..1 stride), arms: 'down'|'up'|'flex', s }
  const person = (ctx, x, y, s, t, o = {}) => {
    const skin = o.skin || PAL.skin, shirt = o.shirt || PAL.orange, pants = o.pants || PAL.navy, hair = o.hair || PAL.ink;
    const run = o.run || 0, st = Math.sin(t * 9 + (o.seed || 0)) * run;
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    // legs
    ctx.strokeStyle = pants; ctx.lineWidth = 22; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(-14, -70); ctx.lineTo(-14 + st * 30, 0); ctx.moveTo(14, -70); ctx.lineTo(14 - st * 30, 0); ctx.stroke();
    ctx.fillStyle = PAL.ink; rr(ctx, -30 + st * 30, -8, 32, 14, 7); ctx.fill(); rr(ctx, -2 - st * 30, -8, 32, 14, 7); ctx.fill();
    // arms
    ctx.strokeStyle = skin; ctx.lineWidth = 16;
    const arms = o.arms || 'down';
    ctx.beginPath();
    if (arms === 'up') { ctx.moveTo(-34, -150); ctx.lineTo(-62, -210); ctx.moveTo(34, -150); ctx.lineTo(62, -210); }
    else if (arms === 'flex') { ctx.moveTo(-34, -150); ctx.lineTo(-74, -150); ctx.lineTo(-70, -196); ctx.moveTo(34, -150); ctx.lineTo(74, -150); ctx.lineTo(70, -196); }
    else { ctx.moveTo(-34, -150); ctx.lineTo(-44 - st * 24, -88); ctx.moveTo(34, -150); ctx.lineTo(44 + st * 24, -88); }
    ctx.stroke();
    // body
    ctx.fillStyle = shirt; rr(ctx, -38, -168, 76, 106, 26); ctx.fill();
    if (o.sweat > 0.3) { ctx.fillStyle = 'rgba(20,40,120,0.22)'; ctx.beginPath(); ctx.ellipse(0, -140, 22 * o.sweat, 18 * o.sweat, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(-30, -150, 8 * o.sweat, 12 * o.sweat, 0, 0, Math.PI * 2); ctx.ellipse(30, -150, 8 * o.sweat, 12 * o.sweat, 0, 0, Math.PI * 2); ctx.fill(); }
    // head
    const hy = -214; circle(ctx, 0, hy, 40, skin);
    ctx.fillStyle = hair; ctx.beginPath(); ctx.arc(0, hy - 6, 41, Math.PI * 1.05, Math.PI * 1.95); ctx.closePath(); ctx.fill();
    // face
    const face = o.face || 'happy';
    if (face === 'hot' || face === 'tired') { ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-20, hy + 2); ctx.lineTo(-8, hy - 2); ctx.moveTo(20, hy + 2); ctx.lineTo(8, hy - 2); ctx.stroke(); ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.ellipse(0, hy + 20, 9, 7 + Math.abs(Math.sin(t * 6)) * 3, 0, 0, Math.PI * 2); ctx.fill(); if (face === 'hot') { ctx.fillStyle = 'rgba(255,90,90,0.45)'; circle(ctx, -24, hy + 12, 8, 'rgba(255,90,90,0.45)'); circle(ctx, 24, hy + 12, 8, 'rgba(255,90,90,0.45)'); } }
    else { circle(ctx, -14, hy, 5, PAL.ink); circle(ctx, 14, hy, 5, PAL.ink); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath(); if (face === 'calm') { ctx.moveTo(-9, hy + 18); ctx.lineTo(9, hy + 18); } else ctx.arc(0, hy + 10, 13, Math.PI * 0.2, Math.PI * 0.8); ctx.stroke(); }
    ctx.restore();
    // sweat flying off the head
    if (o.sweat > 0.05) { const n = Math.round(1 + o.sweat * 4); ctx.save(); ctx.beginPath(); ctx.rect(x - 200 * s, y - 320 * s, 400 * s, 340 * s); ctx.clip();
      sweatFall(ctx, x - 50 * s, y + (hy - 10) * s, 26 * s, 180 * s, n, t, (o.seed || 1) * 7, 8 * s, 1.1); sweatFall(ctx, x + 50 * s, y + (hy - 10) * s, 26 * s, 180 * s, n, t, (o.seed || 1) * 7 + 3, 8 * s, 1.1);
      if (o.sweat > 0.6) for (let j = 0; j < 3; j++) drop(ctx, x + (-22 + j * 22) * s, y + (hy - 22 + (j % 2) * 6) * s, 5 * s);
      ctx.restore(); }
  };
  // skin cross-section (layers) inside a rounded panel
  const skinBlock = (ctx, x, y, w, h, t) => {
    ctx.save(); rr(ctx, x, y, w, h, 28); ctx.clip();
    ctx.fillStyle = '#ffd9bd'; ctx.fillRect(x, y, w, h); // dermis
    ctx.fillStyle = '#ffb894'; ctx.fillRect(x, y + h * 0.78, w, h * 0.22); // fat
    for (let i = 0; i < 8; i++) circle(ctx, x + 40 + i * (w / 8), y + h * 0.9 + Math.sin(i * 2) * 10, 26, '#ffc9a8');
    ctx.fillStyle = '#f0a07a'; ctx.beginPath(); ctx.moveTo(x, y); for (let xx = 0; xx <= w; xx += 10) ctx.lineTo(x + xx, y + 46 + Math.sin(xx * 0.05) * 6); ctx.lineTo(x + w, y); ctx.closePath(); ctx.fill(); // epidermis
    ctx.restore();
  };
  // a coiled sweat gland: duct up to the surface, coil at the bottom. squeeze 0..1 makes a bead at the pore
  const gland = (ctx, x, yTop, yCoil, s, t, squeeze = 0, col = '#ff6f91') => {
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 7 * s; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(x, yTop); for (let yy = yTop; yy < yCoil; yy += 4) ctx.lineTo(x + Math.sin((yy - yTop) * 0.06) * 5 * s, yy); ctx.stroke();
    ctx.beginPath(); for (let a = 0; a < Math.PI * 7; a += 0.15) { const rr2 = 16 * s, px = x + Math.cos(a) * rr2 + (a / (Math.PI * 7) - 0.5) * 22 * s, py = yCoil + 14 * s + Math.sin(a) * rr2 * 0.6 + Math.sin(a * 0.5) * 6 * s; if (a === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); } ctx.stroke();
    ctx.restore();
    if (squeeze > 0.02) drop(ctx, x, yTop - 4 - 10 * s * squeeze, 9 * s * squeeze);
  };
  const thermo = (ctx, x, y, hgt, level, col = PAL.red, s = 1) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.cream; rr(ctx, -22, -hgt, 44, hgt + 10, 22); ctx.fill(); circle(ctx, 0, 24, 40, c || PAL.cream); }, 14);
    ctx.fillStyle = col; rr(ctx, -10, -hgt * level + 8, 20, hgt * level + 8, 10); ctx.fill(); circle(ctx, 0, 24, 28, col);
    ctx.fillStyle = PAL.ink; for (let i = 1; i <= 6; i++) ctx.fillRect(28, -hgt * i / 7 + 6, i % 2 ? 10 : 18, 4);
    ctx.restore();
  };
  const heatWaves = (ctx, x, y, w, t, col = 'rgba(255,90,60,0.7)', n = 3) => { ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 6; ctx.lineCap = 'round'; for (let i = 0; i < n; i++) { const xx = x - w / 2 + (i + 0.5) * w / n, u = (t * 0.8 + i * 0.33) % 1, yy = y - u * 70; ctx.globalAlpha = Math.sin(u * Math.PI); ctx.beginPath(); for (let j = 0; j <= 6; j++) ctx.lineTo(xx + Math.sin(j * 1.2 + t * 5 + i) * 7, yy - j * 9); ctx.stroke(); } ctx.restore(); };
  const check = (ctx, x, y, s, col = PAL.green, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k); circle(ctx, 0, 0, 30, col); ctx.strokeStyle = PAL.white; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(-13, 1); ctx.lineTo(-3, 11); ctx.lineTo(14, -10); ctx.stroke(); ctx.restore(); };
  const cross = (ctx, x, y, s, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k); ctx.strokeStyle = PAL.red; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-40, -40); ctx.lineTo(40, 40); ctx.moveTo(40, -40); ctx.lineTo(-40, 40); ctx.stroke(); ctx.restore(); };
  const chapterCard = (ctx, t, num, title, t0, bg, fg = PAL.cream) => { // a chapter number badge + title that slides in
    const k = pop(t, t0 - 0.15); if (k <= 0.01) return;
    ctx.save(); ctx.translate(CX, 120); ctx.scale(k, k);
    const w = measure(ctx, title, 40) + 130;
    longShadow(ctx, (c) => { ctx.fillStyle = c || bg; rr(ctx, -w / 2, -36, w, 72, 36); ctx.fill(); }, 12);
    circle(ctx, -w / 2 + 38, 0, 26, fg); text(ctx, String(num), -w / 2 + 38, 2, 30, bg, 700);
    text(ctx, title, 30, 2, 40, fg, 700); ctx.restore();
  };

  // ================= scenes: each draws its own background =================
  const S = {};
  // ---- CH1: the hook ----
  S.glands = (ctx, t) => {
    sky(ctx, '#1fb6a6', '#0f7f86'); dots(ctx, 11, 40, PAL.white, 0.08);
    sweatFall(ctx, CX, -40, W, 820, 26, t * 0.6, 4, 9, 0.5);
    const t0 = T(0, 'four') - 0.15, t1 = T(0, 'glands');
    const n = Math.round(4000000 * EO(t, t0, t1) / 1000) * 1000;
    pill(ctx, 'UP TO', CX, 120, { k: pop(t, T(0, 'up') - 0.1), bg: PAL.ink, col: PAL.cream, size: 32 });
    big(ctx, n.toLocaleString('en-US'), CX, 230, 130, n >= 4000000 ? PAL.yellow : PAL.cream, pop(t, t0) * bump(t, t1), 20);
    big(ctx, 'SWEAT GLANDS', CX, 340, 64, PAL.cream, pop(t, T(0, 'sweat') - 0.1), 14);
    const kd = EO(t, T(1, 'drip') - 0.25, T(1, 'drip') + 0.1), kf = EO(t, T(2, 'damp') - 0.3, T(2, 'damp'));
    if (kd > 0) { ctx.save(); ctx.globalAlpha = kd; person(ctx, 360, 690 + (1 - kd) * 120, 0.95, t, { shirt: PAL.orange, sweat: 1, face: 'hot', seed: 1 }); ctx.restore(); }
    if (kf > 0) { ctx.save(); ctx.globalAlpha = kf; person(ctx, 920, 690 + (1 - kf) * 120, 0.95, t, { shirt: PAL.purple, sweat: 0, face: 'calm', hair: '#7b4a2d', seed: 2 }); ctx.restore(); }
    pill(ctx, 'DRIP', 360, 430, { k: pop(t, T(1, 'drip') - 0.1), bg: PAL.blue, col: PAL.white, size: 34 });
    pill(ctx, 'DRY?', 920, 430, { k: pop(t, T(2, 'damp') - 0.1), bg: PAL.cream, size: 34 });
  };
  const gymRoom = (ctx, wall = '#6b5cff', wall2 = '#5546e0') => {
    sky(ctx, wall, wall2);
    ctx.fillStyle = 'rgba(255,255,255,0.08)'; for (let i = 0; i < 8; i++) ctx.fillRect(i * 170 + 40, 0, 70, 520);
    floor(ctx, 560, '#2e2a6b', '#3d3890');
  };
  const treadmill = (ctx, x, y, t) => {
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#2b2b44'; rr(ctx, x - 150, y - 6, 300, 34, 16); ctx.fill(); }, 12);
    ctx.save(); ctx.strokeStyle = '#4a4a6e'; ctx.lineWidth = 4; ctx.setLineDash([16, 14]); ctx.lineDashOffset = t * 200; ctx.beginPath(); ctx.moveTo(x - 135, y + 6); ctx.lineTo(x + 135, y + 6); ctx.stroke(); ctx.restore();
    ctx.fillStyle = '#2b2b44'; rr(ctx, x + 120, y - 200, 18, 200, 9); ctx.fill(); rr(ctx, x + 70, y - 220, 90, 34, 10); ctx.fill();
    ctx.fillStyle = PAL.teal; rr(ctx, x + 82, y - 212, 66, 18, 5); ctx.fill();
  };
  S.twins = (ctx, t) => {
    gymRoom(ctx);
    const lv = EO(t, T(3, 'hot') - 0.3, T(3, 'room') + 0.4);
    thermo(ctx, CX, 330, 170, 0.3 + 0.6 * lv, PAL.red, 0.9);
    pill(ctx, 'HOT ROOM', CX, 120, { k: pop(t, T(3, 'hot') - 0.1), bg: PAL.red, col: PAL.white, size: 34 });
    treadmill(ctx, 330, 600, t); treadmill(ctx, 950, 600, t);
    const soak = EO(t, T(4, 'soaked') - 0.6, T(4, 'soaked') + 0.3);
    person(ctx, 330, 596, 1.05, t, { shirt: PAL.orange, sweat: 0.35 + 0.65 * soak, face: soak > 0.5 ? 'hot' : 'happy', run: 1, seed: 1 });
    person(ctx, 950, 596, 1.05, t, { shirt: PAL.teal, sweat: 0, face: 'happy', run: 1, hair: '#7b4a2d', seed: 2.5 });
    pill(ctx, 'SAME WORKOUT', CX, 520, { k: pop(t, T(3, 'workout') - 0.1), bg: PAL.cream, size: 30 });
    pill(ctx, 'SOAKED', 330, 250, { k: pop(t, T(4, 'soaked') - 0.1) * bump(t, T(4, 'soaked')), bg: PAL.blue, col: PAL.white, size: 40 });
    pill(ctx, 'FINE', 950, 250, { k: pop(t, T(4, 'fine') - 0.1) * bump(t, T(4, 'fine')), bg: PAL.green, col: PAL.white, size: 40 });
  };
  const acUnit = (ctx, x, y, s, t, on = 1, col = PAL.white) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || col; rr(ctx, -150, -60, 300, 120, 26); ctx.fill(); }, 16);
    ctx.fillStyle = '#d6e4f0'; for (let i = 0; i < 5; i++) { rr(ctx, -120, 4 + i * 0, 240, 8, 4); } rr(ctx, -120, 20, 240, 10, 5); ctx.fill(); rr(ctx, -120, 38, 240, 10, 5); ctx.fill();
    circle(ctx, 116, -30, 9, on > 0.5 ? PAL.green : '#bbb');
    ctx.restore();
    if (on > 0.01) { ctx.save(); ctx.globalAlpha = on; ctx.strokeStyle = PAL.ice; ctx.lineWidth = 7 * s; ctx.lineCap = 'round'; for (let i = -2; i <= 2; i++) { const u = (t * 0.9 + (i + 2) * 0.2) % 1; ctx.globalAlpha = on * Math.sin(u * Math.PI); ctx.beginPath(); for (let j = 0; j <= 5; j++) ctx.lineTo(x + i * 50 * s + Math.sin(j + t * 4) * 6 * s, y + 70 * s + u * 60 * s + j * 10 * s); ctx.stroke(); } ctx.restore(); }
  };
  const dumbbell = (ctx, x, y, s, col = PAL.ink) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || col; rr(ctx, -90, -10, 180, 20, 10); ctx.fill(); rr(ctx, -110, -50, 34, 100, 12); ctx.fill(); rr(ctx, 76, -50, 34, 100, 12); ctx.fill(); rr(ctx, -140, -36, 30, 72, 10); ctx.fill(); rr(ctx, 110, -36, 30, 72, 10); ctx.fill(); }, 14); ctx.restore(); };
  S.notHealth = (ctx, t) => {
    sky(ctx, '#fff1d6', '#ffd9a8'); dots(ctx, 21, 30, PAL.orange, 0.06);
    const up = EO(t, S0(6) - 0.3, S0(6) + 0.3);
    const y0 = H.lerp(300, 110, up), sc = H.lerp(1, 0.7, up);
    ctx.save(); ctx.translate(CX, y0); ctx.scale(sc, sc);
    pill(ctx, 'HEALTHY', -240, 0, { k: pop(t, T(5, 'healthy') - 0.1), bg: PAL.green, col: PAL.white, size: 48 });
    pill(ctx, 'UNHEALTHY', 260, 0, { k: pop(t, T(5, 'unhealthy') - 0.1), bg: PAL.red, col: PAL.white, size: 48 });
    text(ctx, 'vs', 0, 4, 34, PAL.ink, 600);
    cross(ctx, 0, 0, 1.6, pop(t, E0(5) - 0.2));
    ctx.restore();
    pill(ctx, "NOPE, IT'S NOT THAT", CX, 420, { k: pop(t, E0(5) - 0.1, S0(6) - 0.2), bg: PAL.ink, col: PAL.cream, size: 30 });
    const ka = pop(t, T(6, 'cooling') - 0.15);
    if (ka > 0.01) { ctx.save(); ctx.translate(380, 330); ctx.scale(ka, ka); acUnit(ctx, 0, 0, 1, t, EO(t, T(6, 'system'), T(6, 'system') + 0.4)); ctx.restore(); }
    pill(ctx, 'COOLING SYSTEM', 380, 540, { k: pop(t, T(6, 'system') - 0.1), bg: PAL.blue, col: PAL.white, size: 36 });
    const kt = pop(t, T(7, 'hard') - 0.1);
    if (kt > 0.01) { ctx.save(); ctx.translate(920, 330); ctx.scale(kt, kt); ctx.rotate(Math.sin(t * 4) * 0.06); dumbbell(ctx, 0, 0, 1); ctx.restore(); }
    pill(ctx, 'HOW TRAINED?', 920, 540, { k: pop(t, T(7, 'trained') - 0.1) * bump(t, T(7, 'trained')), bg: PAL.orange, col: PAL.white, size: 36 });
  };
  // ---- CH2: the hardware ----
  S.hardware = (ctx, t) => {
    sky(ctx, '#ffe7d6', '#ffc6a8');
    chapterCard(ctx, t, 1, 'THE HARDWARE', T(8, 'hardware'), PAL.navy);
    const bx = 90, by = 250, bw = 1100, bh = 400;
    longShadow(ctx, (c) => { if (c) { ctx.fillStyle = c; rr(ctx, bx, by, bw, bh, 28); ctx.fill(); } else skinBlock(ctx, bx, by, bw, bh, t); }, 18);
    // glands pop in one by one across the block
    const n = 11, g0 = T(9, 'packed') - 0.2, g1 = T(9, 'glands');
    for (let i = 0; i < n; i++) { const tt = g0 + (g1 - g0) * i / n, k = EO(t, tt, tt + 0.3); if (k <= 0) continue; const x = bx + 70 + i * (bw - 140) / (n - 1); ctx.save(); ctx.globalAlpha = k; gland(ctx, x, by + 44, by + 44 + 210 * k, 1, t, 0); ctx.restore(); }
    pill(ctx, 'SKIN', bx + 90, by + 24, { k: pop(t, T(9, 'skin') - 0.1), bg: PAL.cream, size: 26 });
    const kc = pop(t, T(9, 'two') - 0.1) * bump(t, T(9, 'million'));
    pill(ctx, '2 – 4 MILLION', CX, by + 140, { k: kc, bg: PAL.ink, col: PAL.yellow, size: 64, h: 110 });
    pill(ctx, 'SWEAT GLANDS', CX, by + 250, { k: pop(t, T(9, 'sweat') - 0.1), bg: '#ff6f91', col: PAL.white, size: 34 });
  };
  S.coil = (ctx, t) => {
    sky(ctx, '#ffd0b8', '#ff9f8a');
    const z = H.lerp(1, 1.12, EI(t, S0(10) - 0.4, E0(11)));
    ctx.save(); ctx.translate(430, 380); ctx.scale(z, z); ctx.translate(-430, -380);
    longShadow(ctx, (c) => { if (c) { ctx.fillStyle = c; rr(ctx, 120, 110, 620, 560, 40); ctx.fill(); } else skinBlock(ctx, 120, 110, 620, 560, t); }, 18);
    const draw = EO(t, T(10, 'tiny') - 0.2, T(10, 'tube') + 0.3);
    ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, 154 + draw * 420); ctx.clip();
    gland(ctx, 430, 154, 470, 3.2, t, 0.3 + 0.2 * Math.sin(t * 3));
    ctx.restore(); ctx.restore();
    pill(ctx, 'COILED TUBE', 430, 640, { k: pop(t, T(10, 'coiled') - 0.1), bg: PAL.ink, col: PAL.cream, size: 34 });
    pill(ctx, 'PORE', 600, 180, { k: pop(t, T(10, 'tube') - 0.1), bg: PAL.cream, size: 26 });
    // curly straw on the right
    const ks = pop(t, T(11, 'curly') - 0.15);
    if (ks > 0.01) { ctx.save(); ctx.translate(1010, 380); ctx.scale(ks, ks); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      const pts = []; for (let a = 0; a <= Math.PI * 6; a += 0.12) pts.push([Math.cos(a) * 60, 120 - a * 9 + Math.sin(a) * 26]); pts.unshift([0, 260]); pts.push([20, -200]);
      longShadow(ctx, (c) => { ctx.strokeStyle = c || PAL.white; ctx.lineWidth = 26; ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); }, 14);
      ctx.strokeStyle = PAL.red; ctx.lineWidth = 10; ctx.setLineDash([20, 26]); ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.setLineDash([]);
      ctx.restore(); }
    pill(ctx, 'LIKE A CURLY STRAW', 1010, 660, { k: pop(t, T(11, 'straw') - 0.1), bg: PAL.red, col: PAL.white, size: 30 });
  };
  // flat front-facing body silhouette (arms out), centred at x, feet at y
  const bodyShape = (ctx, x, y, s, col) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineCap = 'round';
    circle(ctx, 0, -470, 52, col); rr(ctx, -16, -425, 32, 30, 8); ctx.fill(); rr(ctx, -70, -400, 140, 200, 40); ctx.fill();
    ctx.lineWidth = 36; ctx.beginPath(); ctx.moveTo(-58, -380); ctx.lineTo(-150, -250); ctx.lineTo(-180, -170); ctx.moveTo(58, -380); ctx.lineTo(150, -250); ctx.lineTo(180, -170); ctx.stroke();
    ctx.lineWidth = 46; ctx.beginPath(); ctx.moveTo(-36, -220); ctx.lineTo(-50, -20); ctx.moveTo(36, -220); ctx.lineTo(50, -20); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(-60, -8, 40, 16, 0, 0, Math.PI * 2); ctx.ellipse(60, -8, 40, 16, 0, 0, Math.PI * 2); ctx.fill();
    circle(ctx, -184, -150, 26, col); circle(ctx, 184, -150, 26, col); ctx.restore(); };
  let BODYL = null;
  S.bodymap = (ctx, t) => {
    sky(ctx, '#20335f', '#3a5a9b'); dots(ctx, 31, 30, PAL.white, 0.05);
    const bx = CX, by = 690, s = 1.22;
    longShadow(ctx, (c) => bodyShape(ctx, bx, by, s, c || '#ffc9a3'), 18);
    // sweat glands as dots spreading over the body
    const cov = EO(t, T(12, 'cover') - 0.3, T(12, 'body') + 0.4), R = H.rng(5);
    if (!BODYL) BODYL = H.layer(W, HH);
    const bl = BODYL.getContext('2d'); bl.setTransform(1, 0, 0, 1, 0, 0); bl.clearRect(0, 0, W, HH); bl.globalCompositeOperation = 'source-over'; bodyShape(bl, bx, by, s, '#000'); bl.globalCompositeOperation = 'source-in';
    bl.translate(bx, by); bl.scale(s, s); bl.fillStyle = 'rgba(40,120,220,0.6)';
    for (let i = 0; i < 700; i++) { const x = R() * 400 - 200, y = -R() * 530, d = R(); if (d > cov) continue; bl.beginPath(); bl.arc(x, y, 3.4, 0, Math.PI * 2); bl.fill(); }
    bl.setTransform(1, 0, 0, 1, 0, 0); bl.globalCompositeOperation = 'source-over';
    ctx.drawImage(BODYL, 0, 0);
    pill(ctx, 'ALMOST EVERYWHERE', 250, 70, { k: pop(t, T(12, 'whole') - 0.1), bg: PAL.cream, size: 30 });
    const spot = (wx, wy, tt, label, lx, ly) => { const k = pop(t, tt - 0.12); if (k <= 0.01) return; const px = bx + wx * s, py = by + wy * s, pulse = 1 + 0.12 * Math.sin(t * 6);
      ctx.save(); ctx.globalAlpha = 0.5; circle(ctx, px, py, 36 * k * pulse, PAL.yellow); ctx.restore(); circle(ctx, px, py, 16 * k, PAL.yellow);
      for (let j = 0; j < 3; j++) drop(ctx, px - 16 + j * 16, py - 8 + Math.sin(t * 5 + j) * 3, 6 * k);
      ctx.save(); ctx.globalAlpha = k; ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(lx, ly); ctx.stroke(); ctx.restore();
      pill(ctx, label, lx, ly, { k, bg: PAL.yellow, size: 30 }); };
    spot(-184, -150, T(13, 'palms'), 'PALMS', 230, 470);
    spot(184, -150, T(13, 'palms') + 0.1, 'PALMS', 1050, 470);
    spot(60, -8, T(13, 'soles'), 'SOLES', 1000, 640);
    spot(-60, -8, T(13, 'soles') + 0.1, 'SOLES', 280, 640);
    spot(0, -500, T(14, 'forehead'), 'FOREHEAD', 960, 150);
    pill(ctx, 'MOST GLANDS', 250, 150, { k: pop(t, T(13, 'most') - 0.1), bg: PAL.orange, col: PAL.white, size: 30 });
  };
  // ---- CH3: switching on ----
  const headSide = (ctx, x, y, s, t, glow = 0) => { // side-view head with the brain showing
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.skin; ctx.beginPath(); ctx.moveTo(-150, 40); ctx.bezierCurveTo(-190, -120, -100, -230, 20, -230); ctx.bezierCurveTo(140, -230, 190, -140, 175, -40); ctx.lineTo(205, 20); ctx.lineTo(175, 34); ctx.lineTo(180, 80); ctx.bezierCurveTo(170, 120, 120, 130, 80, 120); ctx.lineTo(70, 200); ctx.lineTo(-90, 200); ctx.lineTo(-100, 110); ctx.bezierCurveTo(-140, 90, -150, 70, -150, 40); ctx.closePath(); ctx.fill(); }, 18);
    // brain
    ctx.fillStyle = '#ff9fbf'; ctx.beginPath(); ctx.ellipse(10, -110, 130, 92, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#e8739a'; ctx.lineWidth = 7; ctx.lineCap = 'round'; for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.arc(-80 + i * 34, -110 + (i % 2) * 30 - 20, 24, Math.PI * (0.2 + (i % 2)), Math.PI * (1.2 + (i % 2))); ctx.stroke(); }
    // hypothalamus
    if (glow > 0) { ctx.save(); ctx.globalAlpha = 0.45 * glow; circle(ctx, 30, -40, 34 + 6 * Math.sin(t * 6), PAL.yellow); ctx.restore(); }
    circle(ctx, 30, -40, 15, glow > 0 ? PAL.orange : '#e8739a');
    circle(ctx, 120, -10, 10, PAL.ink); // eye
    ctx.restore();
  };
  const dial = (ctx, x, y, r, val, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    longShadow(ctx, (c) => circle(ctx, 0, 0, r, c || PAL.cream), 14);
    for (let i = 0; i <= 10; i++) { const a = Math.PI * (0.75 + i * 0.15); ctx.strokeStyle = H.rgba(H.mix(PAL.blue, PAL.red, i / 10)); ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(0, 0, r * 0.78, a, a + 0.1); ctx.stroke(); }
    const a = Math.PI * (0.75 + val * 1.5); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * r * 0.6, Math.sin(a) * r * 0.6); ctx.stroke(); circle(ctx, 0, 0, 12, PAL.ink); ctx.restore(); };
  S.brain = (ctx, t) => {
    sky(ctx, '#3b2a6b', '#7a4a9b'); dots(ctx, 41, 30, PAL.pink, 0.08);
    chapterCard(ctx, t, 2, 'SWITCHING ON', T(15, 'switch'), PAL.pink, PAL.ink);
    const z = H.lerp(1, 1.08, EI(t, S0(16), E0(16)));
    ctx.save(); ctx.translate(480, 420); ctx.scale(z, z); ctx.translate(-480, -420);
    headSide(ctx, 470, 470, 1.1, t, EO(t, T(16, 'thermostat') - 0.2, T(16, 'thermostat') + 0.2));
    ctx.restore();
    pill(ctx, 'BRAIN', 330, 250, { k: pop(t, T(16, 'brain') - 0.1), bg: PAL.cream, size: 30 });
    const kd = pop(t, T(16, 'thermostat') - 0.15);
    dial(ctx, 960, 390, 120, 0.5 + 0.05 * Math.sin(t * 2), kd);
    if (kd > 0.01) { ctx.save(); ctx.globalAlpha = kd; ctx.setLineDash([12, 12]); ctx.strokeStyle = PAL.yellow; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(520, 420); ctx.lineTo(840, 400); ctx.stroke(); ctx.restore(); }
    pill(ctx, 'THERMOSTAT', 960, 560, { k: kd, bg: PAL.yellow, size: 32 });
    pill(ctx, 'HYPOTHALAMUS', 520, 660, { k: pop(t, T(16, 'hypothalamus') - 0.1) * bump(t, T(16, 'hypothalamus') + 0.3), bg: PAL.orange, col: PAL.white, size: 36 });
  };
  S.signal = (ctx, t) => {
    sky(ctx, '#d9f2ff', '#a8dcff');
    // skin strip along the bottom
    longShadow(ctx, (c) => { if (c) { ctx.fillStyle = c; rr(ctx, 560, 420, 680, 260, 28); ctx.fill(); } else skinBlock(ctx, 560, 420, 680, 260, t); }, 14);
    const sq = EO(t, T(19, 'squeeze') - 0.2, T(19, 'squeeze') + 0.4);
    [700, 900, 1100].forEach((x, i) => { gland(ctx, x, 464, 560, 1.4, t, H.clamp(sq * 1.3 - i * 0.15)); });
    if (sq > 0.5) for (let i = 0; i < 3; i++) sweatFall(ctx, 700 + i * 200, 440, 30, 0, 0, t, 3);
    // brain icon top left and nerve path
    headSide(ctx, 190, 230, 0.55, t, 1);
    const path = [[210, 210], [330, 200], [430, 300], [520, 330], [620, 400], [900, 430]];
    ctx.save(); ctx.strokeStyle = '#f7b500'; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; const kn = EO(t, T(18, 'fires') - 0.2, T(18, 'fires') + 0.2); ctx.globalAlpha = kn; ctx.beginPath(); path.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
    const u = EI(t, T(18, 'signal') - 0.1, T(18, 'nerves') + 0.2);
    if (u > 0 && u < 1) { const seg = u * (path.length - 1), j = Math.min(path.length - 2, Math.floor(seg)), f = seg - j; const px = H.lerp(path[j][0], path[j + 1][0], f), py = H.lerp(path[j][1], path[j + 1][1], f); ctx.save(); ctx.globalAlpha = 0.5; circle(ctx, px, py, 30, PAL.yellow); ctx.restore(); circle(ctx, px, py, 14, PAL.white); }
    // thermometer
    const lv = EO(t, T(17, 'core') - 0.2, T(17, 'warm') + 0.2);
    thermo(ctx, 120, 560, 180, 0.35 + 0.5 * lv, H.rgba(H.mix(PAL.orange, PAL.red, lv)), 0.8);
    pill(ctx, 'TOO WARM', 200, 680, { k: pop(t, T(17, 'warm') - 0.1) * bump(t, T(17, 'warm')), bg: PAL.red, col: PAL.white, size: 30 });
    pill(ctx, 'NERVE SIGNAL', 470, 240, { k: pop(t, T(18, 'signal') - 0.1), bg: '#f7b500', size: 28 });
    pill(ctx, 'SALTY WATER', 900, 360, { k: pop(t, T(19, 'salty') - 0.1) * bump(t, T(19, 'water')), bg: PAL.blue, col: PAL.white, size: 34 });
  };
  S.clever = (ctx, t) => {
    sky(ctx, '#ffd23f', '#ffb21f'); dots(ctx, 51, 30, PAL.white, 0.12);
    pill(ctx, 'THE CLEVER PART', CX, 90, { k: pop(t, T(20, 'clever') - 0.1), bg: PAL.ink, col: PAL.yellow, size: 36 });
    const vanish = EO(t, T(22, 'disappearing') - 0.1, T(22, 'disappearing') + 0.6);
    const r = 70 * (1 - vanish), bob = Math.sin(t * 3) * 6;
    if (r > 2) longShadow(ctx, (c) => drop(ctx, CX, 400 + bob, r, c || PAL.sweat, !c), 18);
    if (r > 30) { circle(ctx, CX - 22, 400 + bob, 7, PAL.ink); circle(ctx, CX + 22, 400 + bob, 7, PAL.ink); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(CX, 412 + bob, 14, 0.2 * Math.PI, 0.8 * Math.PI); ctx.stroke(); }
    if (vanish > 0) { for (let i = 0; i < 7; i++) { const a = -Math.PI / 2 + (i - 3) * 0.35, d = 40 + vanish * 220; ctx.save(); ctx.globalAlpha = (1 - vanish) * 0.8 + 0.2 * Math.sin(vanish * Math.PI); circle(ctx, CX + Math.cos(a) * d * 0.6, 390 + Math.sin(a) * d, 22 + vanish * 16, PAL.white); ctx.restore(); } }
    const kw = pop(t, T(21, 'wet') - 0.12, T(22, 'it') - 0.1);
    if (kw > 0.01) { pill(ctx, 'BEING WET', 300, 400, { k: kw, bg: PAL.blue, col: PAL.white, size: 40 }); cross(ctx, 300, 400, 0.9, pop(t, T(21, 'wet') + 0.15)); pill(ctx, "DOESN'T COOL YOU", 300, 490, { k: kw, bg: PAL.cream, size: 28 }); }
    big(ctx, 'IT DISAPPEARS', CX, 620, 72, PAL.ink, pop(t, T(22, 'disappearing') - 0.1), 14);
  };
  S.evap = (ctx, t) => {
    sky(ctx, '#ffe9d1', '#ffcfa1');
    const pan = EI(t, S0(23) - 0.4, E0(23) + 0.3) * 60;
    ctx.save(); ctx.translate(-pan, 0);
    // skin surface
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#f0a07a'; ctx.beginPath(); ctx.moveTo(-50, 560); for (let x = -50; x <= W + 120; x += 20) ctx.lineTo(x, 560 + Math.sin(x * 0.02) * 10); ctx.lineTo(W + 120, HH); ctx.lineTo(-50, HH); ctx.closePath(); ctx.fill(); }, 14);
    ctx.fillStyle = '#ffd9bd'; ctx.fillRect(-50, 610, W + 200, 120);
    const ev = EO(t, T(23, 'evaporates') - 0.3, T(23, 'away') + 0.3);
    for (let i = 0; i < 7; i++) { const x = 120 + i * 175; drop(ctx, x, 540 + Math.sin(x * 0.02) * 10, 24 * (1 - ev * 0.7));
      // vapour + heat rising
      for (let j = 0; j < 3; j++) { const u = ((t * 0.5 + j / 3 + i * 0.13) % 1); if (ev < 0.05) continue; ctx.save(); ctx.globalAlpha = ev * Math.sin(u * Math.PI) * 0.9; circle(ctx, x + Math.sin(u * 6 + i) * 14, 500 - u * 330, 14 + u * 16, PAL.white); ctx.restore(); }
      const hk = EO(t, T(23, 'heat') - 0.2, T(23, 'heat') + 0.3); if (hk > 0) { const u = (t * 0.6 + i * 0.2) % 1; ctx.save(); ctx.globalAlpha = hk * Math.sin(u * Math.PI); heatWaves(ctx, x, 470 - u * 220, 40, t, PAL.red, 1); ctx.restore(); }
    }
    ctx.restore();
    pill(ctx, 'EVAPORATION', CX, 100, { k: pop(t, T(23, 'evaporates') - 0.1), bg: PAL.blue, col: PAL.white, size: 44 });
    pill(ctx, 'HEAT LEAVES WITH IT', CX, 190, { k: pop(t, T(23, 'heat') - 0.1) * bump(t, T(23, 'away')), bg: PAL.red, col: PAL.white, size: 32 });
  };
  S.humid = (ctx, t) => {
    sky(ctx, '#9aa7b5', '#c7cfd6');
    ctx.save(); ctx.globalAlpha = 0.6; sun(ctx, 1080, 120, 60, t, '#fff0b0'); ctx.restore();
    // water droplets hanging in the air
    const full = EO(t, T(25, 'full') - 0.4, T(25, 'water') + 0.2), R = H.rng(61);
    for (let i = 0; i < 140; i++) { const x = R() * W, y = R() * 560, d = R(); if (d > full * 0.9 + 0.1) continue; ctx.save(); ctx.globalAlpha = 0.5; circle(ctx, x + Math.sin(t + i) * 6, y + Math.cos(t * 0.8 + i) * 4, 4 + R() * 5, PAL.white); ctx.restore(); }
    floor(ctx, 600, '#7d8a96', '#8f9ca8');
    const drip = EO(t, T(26, 'sits') - 0.3, T(26, 'drips'));
    person(ctx, CX, 640, 1.35, t, { shirt: PAL.teal, sweat: 0.5 + 0.5 * drip, face: 'hot', seed: 3 });
    // puddle forms
    if (drip > 0) { ctx.fillStyle = 'rgba(94,200,255,0.6)'; ctx.beginPath(); ctx.ellipse(CX, 646, 70 * drip, 12 * drip, 0, 0, Math.PI * 2); ctx.fill(); }
    pill(ctx, 'HUMID DAY', 260, 110, { k: pop(t, T(24, 'humid') - 0.1), bg: PAL.ink, col: PAL.cream, size: 40 });
    pill(ctx, 'AIR = FULL OF WATER', 260, 200, { k: pop(t, T(25, 'full') - 0.1), bg: PAL.cream, size: 28 });
    pill(ctx, "CAN'T EVAPORATE", 1010, 300, { k: pop(t, T(26, 'sits') - 0.1), bg: PAL.red, col: PAL.white, size: 30 });
    pill(ctx, 'IT JUST DRIPS', 1010, 390, { k: pop(t, T(26, 'drips') - 0.1) * bump(t, T(26, 'drips')), bg: PAL.blue, col: PAL.white, size: 30 });
  };
  const microbe = (ctx, x, y, r, t, seed, munch = 0) => { const R = H.rng(seed); const col = R() > 0.5 ? '#8bd450' : '#6cc5a0';
    ctx.save(); ctx.translate(x, y); ctx.rotate(Math.sin(t * 2 + seed) * 0.2);
    ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(0, 0, r * 1.5, r, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = col; ctx.lineWidth = 3; for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; ctx.beginPath(); ctx.moveTo(Math.cos(a) * r * 1.4, Math.sin(a) * r * 0.9); ctx.lineTo(Math.cos(a) * r * 1.9, Math.sin(a) * r * 1.3 + Math.sin(t * 8 + i) * 3); ctx.stroke(); }
    circle(ctx, r * 0.5, -r * 0.25, r * 0.22, PAL.white); circle(ctx, r * 0.55, -r * 0.25, r * 0.1, PAL.ink);
    const m = munch * Math.abs(Math.sin(t * 10 + seed)); ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.ellipse(r * 1.0, r * 0.25, r * 0.28, r * 0.08 + r * 0.25 * m, 0, 0, Math.PI * 2); ctx.fill();
    ctx.restore(); };
  S.smell = (ctx, t) => {
    sky(ctx, '#c9f5e0', '#8fe0c0');
    const k0 = pop(t, T(27, 'fresh') - 0.1);
    // fresh droplet + nose on the left
    if (k0 > 0.01) { ctx.save(); ctx.translate(330, 380); ctx.scale(k0, k0); longShadow(ctx, (c) => drop(ctx, 0, 40, 80, c || PAL.sweat, !c), 16); circle(ctx, -24, 40, 8, PAL.ink); circle(ctx, 24, 40, 8, PAL.ink); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(0, 54, 14, 0.2 * Math.PI, 0.8 * Math.PI); ctx.stroke(); ctx.restore(); }
    pill(ctx, 'FRESH SWEAT', 330, 120, { k: k0, bg: PAL.cream, size: 32 });
    pill(ctx, 'NO SMELL', 330, 600, { k: pop(t, T(27, 'smells') - 0.1), bg: PAL.green, col: PAL.white, size: 36 });
    check(ctx, 460, 220, 1.1, PAL.green, pop(t, T(27, 'all') - 0.1));
    // right: bacteria feasting, stink rising
    const kb = EO(t, T(28, 'bacteria') - 0.3, T(28, 'bacteria') + 0.1), mu = EO(t, T(29, 'munching') - 0.2, T(29, 'munching'));
    if (kb > 0) { ctx.save(); ctx.globalAlpha = kb; longShadow(ctx, (c) => drop(ctx, 930, 420, 70 * (1 - mu * 0.25 * ph(t, T(29, 'munching'), E0(29) + 0.5)), c || '#a6e3ff', !c), 14);
      [[-120, -10], [110, 30], [-80, 100], [90, 130], [0, -150], [140, -80]].forEach(([dx, dy], i) => microbe(ctx, 930 + dx * (0.6 + 0.4 * kb), 420 + dy * (0.6 + 0.4 * kb), 22, t, i + 1, mu));
      ctx.restore(); }
    const ks = EO(t, T(29, 'munching') + 0.2, T(29, 'armpit'));
    if (ks > 0) { ctx.save(); ctx.strokeStyle = '#7a9a2a'; ctx.lineWidth = 7; ctx.lineCap = 'round'; for (let i = 0; i < 3; i++) { const x = 860 + i * 70, u = (t * 0.7 + i * 0.3) % 1; ctx.globalAlpha = ks * Math.sin(u * Math.PI); ctx.beginPath(); for (let j = 0; j <= 8; j++) ctx.lineTo(x + Math.sin(j * 1.1 + t * 4 + i) * 12, 300 - u * 80 - j * 12); ctx.stroke(); } ctx.restore(); }
    pill(ctx, 'BACTERIA = THE SMELL', 930, 120, { k: pop(t, T(28, 'bacteria') - 0.1), bg: '#5c8a1f', col: PAL.white, size: 32 });
    pill(ctx, 'ARMPIT GLANDS', 930, 640, { k: pop(t, T(29, 'armpit') - 0.1), bg: PAL.ink, col: PAL.cream, size: 32 });
  };
  // ---- CH4: why some people drip more ----
  S.whyMe = (ctx, t) => {
    ctx.fillStyle = '#3fa9f5'; ctx.fillRect(0, 0, CX, HH); ctx.fillStyle = '#ffd23f'; ctx.fillRect(CX, 0, CX, HH);
    sweatFall(ctx, 320, -30, 600, 780, 18, t * 0.7, 9, 9, 0.6);
    floor(ctx, 640, 'rgba(0,0,0,0.12)');
    person(ctx, 320, 650, 1.25, t, { shirt: PAL.orange, sweat: 1, face: 'hot', seed: 4 });
    person(ctx, 960, 650, 1.25, t, { shirt: PAL.purple, sweat: 0, face: 'calm', hair: '#7b4a2d', seed: 5 });
    chapterCard(ctx, t, 3, 'WHY SOME DRIP MORE', T(30, 'why'), PAL.ink);
    pill(ctx, 'DRIP', 320, 250, { k: pop(t, T(30, 'drip') - 0.1), bg: PAL.white, col: '#1b6fa8', size: 34 });
    pill(ctx, 'DRY', 960, 250, { k: pop(t, T(30, 'dry') - 0.1), bg: PAL.white, col: '#b07a00', size: 34 });
    big(ctx, '?', CX, 420, 160, PAL.white, pop(t, T(30, 'another') - 0.1) * (1 + 0.05 * Math.sin(t * 5)), 18);
  };
  const reason = (ctx, t, n, label, t0, bg) => { const k = pop(t, t0 - 0.15); if (k <= 0.01) return; ctx.save(); ctx.translate(170, 110); ctx.scale(k, k); longShadow(ctx, (c) => circle(ctx, 0, 0, 56, c || bg), 14); text(ctx, '#' + n, 0, 3, 50, PAL.white, 700); ctx.restore(); big(ctx, label, 250, 112, 64, PAL.ink, k, 12); };
  S.size = (ctx, t) => {
    sky(ctx, '#ffe0c2', '#ffbf8f');
    ctx.save(); ctx.textAlign = 'left'; ctx.restore();
    reason(ctx, t, 1, '', T(31, 'size'), PAL.orange);
    big(ctx, 'SIZE', 320, 112, 64, PAL.ink, pop(t, T(31, 'size') - 0.1), 12);
    floor(ctx, 620, '#e39a5e', '#d4874a');
    const hk = EO(t, T(32, 'heat') - 0.2, T(32, 'heat') + 0.3), sk = EO(t, T(33, 'sweat') - 0.3, T(33, 'sweat') + 0.2);
    const kB = pop(t, T(32, 'bigger') - 0.15);
    person(ctx, 380, 630, 1.05, t, { shirt: PAL.teal, sweat: 0.25 * sk, face: 'happy', seed: 6 });
    if (kB > 0.01) { ctx.save(); ctx.translate(880, 630); ctx.scale(kB, kB); ctx.translate(-880, -630); person(ctx, 880, 630, 1.75, t, { shirt: PAL.orange, sweat: sk, face: sk > 0.4 ? 'hot' : 'happy', seed: 7 }); ctx.restore(); }
    if (hk > 0) { ctx.save(); ctx.globalAlpha = hk; heatWaves(ctx, 380, 360, 90, t, 'rgba(239,74,74,0.7)', 2); heatWaves(ctx, 880, 180, 200, t, 'rgba(239,74,74,0.8)', 4); ctx.restore(); }
    pill(ctx, 'BIGGER BODY', 880, 680, { k: pop(t, T(32, 'body') - 0.1), bg: PAL.ink, col: PAL.cream, size: 28 });
    pill(ctx, 'MORE HEAT', 1110, 220, { k: pop(t, T(32, 'heat') - 0.1), bg: PAL.red, col: PAL.white, size: 30 });
    pill(ctx, 'MORE SWEAT', 1110, 310, { k: pop(t, T(33, 'sweat') - 0.1) * bump(t, T(33, 'dump')), bg: PAL.blue, col: PAL.white, size: 30 });
  };
  const helix = (ctx, x, y, h, t, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    for (let i = 0; i < 18; i++) { const yy = -h / 2 + i * h / 17, a = i * 0.55 + t * 1.5, x1 = Math.sin(a) * 70, x2 = -x1, front = Math.cos(a) > 0;
      ctx.strokeStyle = 'rgba(255,255,255,0.75)'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(x1, yy); ctx.lineTo(x2, yy); ctx.stroke();
      circle(ctx, x1, yy, front ? 12 : 9, front ? PAL.pink : '#c8538a'); circle(ctx, x2, yy, front ? 9 : 12, front ? '#4d7fd9' : PAL.sky); }
    ctx.restore(); };
  S.genes = (ctx, t) => {
    sky(ctx, '#2a3a8c', '#4a5fc1'); dots(ctx, 71, 30, PAL.white, 0.06);
    reason(ctx, t, 2, '', T(34, 'genes'), PAL.pink);
    big(ctx, 'GENES', 340, 112, 64, PAL.cream, pop(t, T(34, 'genes') - 0.1), 12);
    helix(ctx, 230, 440, 380, t, pop(t, T(34, 'genes') - 0.05));
    // two skin strips: few active glands vs many
    const strip = (y, active, tt, label) => { const k = EO(t, tt - 0.3, tt + 0.1); if (k <= 0) return; ctx.save(); ctx.globalAlpha = k;
      longShadow(ctx, (c) => { if (c) { ctx.fillStyle = c; rr(ctx, 470, y, 720, 170, 24); ctx.fill(); } else skinBlock(ctx, 470, y, 720, 170, t); }, 12);
      for (let i = 0; i < 9; i++) { const on = active[i], x = 520 + i * 78; gland(ctx, x, y + 44, y + 90, 0.8, t, 0, on ? '#ff6f91' : '#c9a89a'); if (on) drop(ctx, x, y + 26 + Math.sin(t * 4 + i) * 2, 9); }
      ctx.restore(); pill(ctx, label, 830, y + 192, { k: pop(t, tt), bg: PAL.cream, size: 24 }); };
    strip(200, [1, 0, 0, 1, 0, 0, 1, 0, 0], T(35, 'people'), 'FEWER ACTIVE');
    strip(450, [1, 1, 1, 1, 1, 1, 1, 1, 1], T(35, 'active'), 'MORE ACTIVE');
    pill(ctx, '+ GLANDS THAT PUMP HARDER', 830, 140, { k: pop(t, T(36, 'pump') - 0.1) * bump(t, T(36, 'harder')), bg: PAL.yellow, size: 28 });
  };
  S.sex = (ctx, t) => {
    sky(ctx, '#fff6e6', '#ffe2c4');
    reason(ctx, t, 3, '', T(37, 'men'), PAL.purple);
    big(ctx, 'MEN vs WOMEN', 470, 112, 60, PAL.ink, pop(t, T(37, 'men') - 0.1), 12);
    // Japan study tag
    const kj = pop(t, T(38, 'japan') - 0.15);
    if (kj > 0.01) { ctx.save(); ctx.translate(1080, 112); ctx.scale(kj, kj); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; rr(ctx, -110, -54, 220, 108, 16); ctx.fill(); }, 10); circle(ctx, 0, -6, 26, '#e02d3c'); text(ctx, 'JAPAN STUDY', 0, 36, 20, PAL.ink, 700); ctx.restore(); }
    // bar chart
    const base = 640, bars = [['FIT MEN', 1.0, PAL.blue, T(39, 'fit')], ['FIT WOMEN', 0.72, PAL.pink, T(39, 'started')], ['INACTIVE MEN', 0.62, '#7fb6e6', T(40, 'and')], ['INACTIVE WOMEN', 0.38, '#f5b3c8', T(40, 'inactive')]];
    ctx.fillStyle = PAL.ink; ctx.fillRect(160, base, 960, 6);
    bars.forEach(([lab, v, col, tt], i) => { const x = 270 + i * 245, hgt = 340 * v * EO(t, tt - 0.2, tt + 0.5); if (hgt <= 1) return;
      longShadow(ctx, (c) => { ctx.fillStyle = c || col; rr(ctx, x - 70, base - hgt, 140, hgt + 6, 18); ctx.fill(); }, 12);
      for (let j = 0; j < Math.round(v * 4); j++) drop(ctx, x - 30 + (j % 2) * 60, base - hgt + 50 + Math.floor(j / 2) * 60, 12, PAL.white, false);
      text(ctx, lab, x, base + 34, 22, PAL.ink, 700); });
    pill(ctx, 'SWEAT FASTEST', 270, 230, { k: pop(t, T(39, 'fastest') - 0.1) * bump(t, T(39, 'fastest')), bg: PAL.blue, col: PAL.white, size: 26 });
    pill(ctx, 'LEAST', 1005, 440, { k: pop(t, T(40, 'least') - 0.1) * bump(t, T(40, 'least')), bg: PAL.ink, col: PAL.cream, size: 28 });
  };
  // ---- CH5: the twist ----
  S.twist = (ctx, t) => {
    sky(ctx, '#ff5e5b', '#ff8a3d');
    ctx.save(); ctx.fillStyle = 'rgba(255,255,255,0.12)'; for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2 + t * 0.2; ctx.beginPath(); ctx.moveTo(CX, 400); ctx.arc(CX, 400, 1000, a, a + 0.18); ctx.closePath(); ctx.fill(); } ctx.restore();
    chapterCard(ctx, t, 4, 'THE TWIST', T(41, 'twist'), PAL.ink, PAL.yellow);
    const flip = EO(t, T(42, 'fitter') - 0.25, T(42, 'fitter') + 0.15);
    const k0 = pop(t, T(42, 'sweating') - 0.1);
    big(ctx, 'LOTS OF SWEAT =', CX, 290, 70, PAL.white, k0, 14);
    // flipping card: UNFIT? -> FITTER
    if (k0 > 0.01) { const sy = Math.abs(Math.cos(flip * Math.PI)), word = flip < 0.5 ? 'LESS FIT?' : 'FITTER!', bg = flip < 0.5 ? PAL.ink : PAL.green;
      ctx.save(); ctx.translate(CX, 450); ctx.scale(k0 * bump(t, T(42, 'fitter') + 0.15), k0 * Math.max(0.02, sy)); const w = measure(ctx, word, 96) + 100;
      longShadow(ctx, (c) => { ctx.fillStyle = c || bg; rr(ctx, -w / 2, -80, w, 160, 40); ctx.fill(); }, 16); text(ctx, word, 0, 6, 96, PAL.white, 700); ctx.restore(); }
    pill(ctx, 'MOST PEOPLE GET THIS BACKWARDS', CX, 620, { k: pop(t, T(41, 'backwards') - 0.1), bg: PAL.cream, size: 28 });
  };
  S.ac = (ctx, t) => {
    sky(ctx, '#d8f3ff', '#aee2ff');
    const ka = pop(t, T(43, 'trained') - 0.15);
    if (ka > 0.01) { ctx.save(); ctx.translate(270, 260); ctx.scale(ka, ka); acUnit(ctx, 0, 0, 0.95, t, 1); ctx.restore(); }
    pill(ctx, 'UPGRADED', 270, 130, { k: pop(t, T(43, 'upgraded') - 0.1) * bump(t, T(43, 'upgraded')), bg: PAL.green, col: PAL.white, size: 34 });
    pill(ctx, 'TRAINED BODY', 270, 460, { k: pop(t, T(43, 'body') - 0.1), bg: PAL.ink, col: PAL.cream, size: 28 });
    // chart: sweat rate over time of a workout, trained vs untrained
    const ox = 560, oy = 620, cw = 640, ch = 420, kc = EO(t, T(44, 'turns') - 0.4, T(44, 'turns'));
    if (kc > 0) { ctx.save(); ctx.globalAlpha = kc; longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; rr(ctx, ox - 40, oy - ch - 40, cw + 80, ch + 90, 24); ctx.fill(); }, 12);
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(ox, oy - ch); ctx.lineTo(ox, oy); ctx.lineTo(ox + cw, oy); ctx.stroke();
      text(ctx, 'workout time →', ox + cw - 110, oy + 26, 22, PAL.ink, 600); ctx.save(); ctx.translate(ox - 22, oy - ch / 2); ctx.rotate(-Math.PI / 2); text(ctx, 'sweat →', 0, 0, 22, PAL.ink, 600); ctx.restore(); ctx.restore(); }
    const curve = (start, top, col, prog) => { if (prog <= 0) return; ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); const n = 60; for (let i = 0; i <= n * prog; i++) { const u = i / n, x = ox + u * cw, v = u < start ? 0 : top * (1 - Math.exp(-(u - start) * 6)); const y = oy - 8 - v * (ch - 40); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); ctx.restore(); };
    const pr = EI(t, T(44, 'turns'), E0(46) - 0.3);
    curve(0.35, 0.6, '#9aa7b5', pr * (kc > 0 ? 1 : 0));
    curve(0.15, 0.95, PAL.blue, EI(t, T(44, 'sooner') - 0.5, E0(46) - 0.3));
    pill(ctx, 'UNTRAINED', ox + cw - 90, oy - 150, { k: pop(t, T(45, 'before') - 0.1), bg: '#9aa7b5', col: PAL.white, size: 22 });
    pill(ctx, 'TRAINED', ox + cw - 90, oy - ch + 20, { k: pop(t, T(46, 'more') - 0.1), bg: PAL.blue, col: PAL.white, size: 22 });
    const ksoon = pop(t, T(44, 'sooner') - 0.1);
    if (ksoon > 0.01) { ctx.save(); ctx.globalAlpha = ksoon; ctx.setLineDash([10, 10]); ctx.strokeStyle = PAL.orange; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(ox + 0.15 * cw, oy); ctx.lineTo(ox + 0.15 * cw, oy - ch + 60); ctx.stroke(); ctx.restore(); }
    pill(ctx, 'ON SOONER', ox + 0.15 * cw + 40, oy - ch + 40, { k: ksoon, bg: PAL.orange, col: PAL.white, size: 26 });
    pill(ctx, 'BEFORE YOU FEEL HOT', 270, 560, { k: pop(t, T(45, 'feel') - 0.1), bg: PAL.red, col: PAL.white, size: 26 });
    pill(ctx, 'MORE SWEAT', 270, 640, { k: pop(t, T(46, 'more') - 0.1) * bump(t, T(46, 'sweat')), bg: PAL.blue, col: PAL.white, size: 30 });
  };
  S.heat = (ctx, t) => {
    sky(ctx, '#ff9a4a', '#ffd98a');
    sun(ctx, 1110, 130, 70, t);
    floor(ctx, 600, '#e9a84f', '#d88c3e');
    person(ctx, 210, 620, 1.05, t, { shirt: PAL.teal, sweat: 0.6, face: 'happy', run: 1, seed: 8 });
    pill(ctx, 'HEAT TRAINING', 640, 90, { k: pop(t, T(47, 'heat') - 0.1), bg: PAL.red, col: PAL.white, size: 40 });
    // a 14-day calendar filling in
    const kc = pop(t, T(48, 'spend') - 0.15);
    if (kc > 0.01) { ctx.save(); ctx.translate(720, 360); ctx.scale(kc, kc);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; rr(ctx, -300, -160, 600, 330, 28); ctx.fill(); }, 14);
      ctx.fillStyle = PAL.red; rr(ctx, -300, -160, 600, 64, 28); ctx.fill(); ctx.fillRect(-300, -120, 600, 24); text(ctx, 'DAYS IN THE HEAT', 0, -126, 28, PAL.white, 700);
      const nfill = Math.floor(14 * EO(t, T(48, 'one') - 0.1, T(48, 'weeks') + 0.3) + 1e-6);
      for (let i = 0; i < 14; i++) { const c = i % 7, r = Math.floor(i / 7), x = -255 + c * 85, y = -60 + r * 110; ctx.fillStyle = i < nfill ? PAL.orange : '#f2e6d6'; rr(ctx, x - 34, y - 40, 68, 80, 14); ctx.fill(); text(ctx, String(i + 1), x, y + 2, 30, i < nfill ? PAL.white : '#b7a58f', 700); if (i < nfill) check(ctx, x + 26, y - 30, 0.4); }
      ctx.restore(); }
    pill(ctx, 'ABOUT 1–2 WEEKS', 720, 610, { k: pop(t, T(48, 'weeks') - 0.1) * bump(t, T(48, 'weeks')), bg: PAL.ink, col: PAL.yellow, size: 40 });
  };
  S.adapt = (ctx, t) => {
    sky(ctx, '#e7fff1', '#b8f0cf'); dots(ctx, 81, 25, PAL.teal, 0.06);
    pill(ctx, 'AFTER HEAT TRAINING', CX, 90, { k: pop(t, S0(49) - 0.1), bg: PAL.ink, col: PAL.cream, size: 32 });
    const card = (x, tt, title, icon, bg) => { const k = pop(t, tt - 0.15) * bump(t, tt + 0.1); if (k <= 0.01) return; ctx.save(); ctx.translate(x, 390); ctx.scale(k, k);
      longShadow(ctx, (c) => { ctx.fillStyle = c || bg; rr(ctx, -175, -190, 350, 380, 36); ctx.fill(); }, 18);
      ctx.save(); ctx.translate(0, -50); icon(); ctx.restore(); text(ctx, title[0], 0, 100, 36, PAL.white, 700); text(ctx, title[1], 0, 146, 36, PAL.white, 700); check(ctx, 140, -160, 1, PAL.green); ctx.restore(); };
    card(240, T(49, 'earlier'), ['SWEATS', 'EARLIER'], () => { circle(ctx, 0, 0, 70, PAL.white); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -46); ctx.moveTo(0, 0); ctx.lineTo(-34, 14); ctx.stroke(); }, PAL.orange);
    card(640, T(50, 'pours'), ['POURS OUT', 'MORE'], () => { for (let i = 0; i < 3; i++) drop(ctx, -50 + i * 50, 20 - (i % 2) * 30, 26, PAL.white); }, PAL.blue);
    card(1040, T(51, 'salt'), ['KEEPS MORE', 'SALT'], () => { ctx.fillStyle = PAL.white; rr(ctx, -40, -50, 80, 110, 18); ctx.fill(); ctx.fillStyle = '#c9d6e3'; rr(ctx, -44, -80, 88, 40, 14); ctx.fill(); ctx.fillStyle = PAL.ink; for (let i = 0; i < 3; i++) circle(ctx, -20 + i * 20, -62, 5, PAL.ink); }, PAL.purple);
  };
  // ---- CH6: the numbers ----
  S.rest = (ctx, t) => {
    sky(ctx, '#bfe3ff', '#e6f5ff');
    chapterCard(ctx, t, 5, 'THE NUMBERS', T(52, 'numbers'), PAL.navy);
    // window with snowflakes = cool day
    const kw = pop(t, T(53, 'cool') - 0.15);
    if (kw > 0.01) { ctx.save(); ctx.translate(1030, 330); ctx.scale(kw, kw); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.white; rr(ctx, -130, -130, 260, 260, 20); ctx.fill(); }, 12); ctx.fillStyle = '#8fd3ff'; rr(ctx, -110, -110, 220, 220, 12); ctx.fill(); ctx.fillStyle = PAL.white; ctx.fillRect(-4, -110, 8, 220); ctx.fillRect(-110, -4, 220, 8);
      const R = H.rng(9); for (let i = 0; i < 14; i++) { const x = R() * 200 - 100, y = ((R() * 220 + t * 30) % 220) - 110; circle(ctx, x, y, 4, PAL.white); } ctx.restore(); }
    pill(ctx, 'COOL DAY', 1030, 500, { k: kw, bg: PAL.blue, col: PAL.white, size: 30 });
    floor(ctx, 620, '#c9b8a6', '#b9a794');
    // couch + sitting person
    const sx = 480;
    ctx.fillStyle = '#ff8f6b'; rr(ctx, sx - 230, 380, 460, 150, 40); ctx.fill();
    person(ctx, sx, 560, 1.0, t, { shirt: PAL.purple, sweat: 0, face: 'calm', seed: 10 });
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#ff7a52'; rr(ctx, sx - 260, 470, 520, 120, 36); ctx.fill(); rr(ctx, sx - 290, 430, 80, 180, 30); ctx.fill(); rr(ctx, sx + 210, 430, 80, 180, 30); ctx.fill(); }, 14);
    // invisible-ish moisture leaving the skin
    const kv = EO(t, T(54, 'lose') - 0.2, T(54, 'sweat'));
    if (kv > 0) for (let i = 0; i < 8; i++) { const u = (t * 0.4 + i / 8) % 1; ctx.save(); ctx.globalAlpha = kv * 0.5 * Math.sin(u * Math.PI); circle(ctx, sx - 60 + (i % 4) * 40 + Math.sin(u * 6 + i) * 10, 340 - u * 200, 6 + u * 8, PAL.white); ctx.restore(); }
    pill(ctx, 'A LITTLE SWEAT', sx, 245, { k: pop(t, T(54, 'little') - 0.1), bg: PAL.cream, size: 30 });
    pill(ctx, 'YOU DON\'T EVEN NOTICE', sx, 680, { k: pop(t, T(54, 'noticing') - 0.1), bg: PAL.ink, col: PAL.cream, size: 26 });
  };
  const jug = (ctx, x, y, s, level, label) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || 'rgba(255,255,255,0.95)'; rr(ctx, -90, -240, 180, 260, 26); ctx.fill(); }, 14);
    ctx.save(); rr(ctx, -80, -230, 160, 240, 20); ctx.clip(); ctx.fillStyle = PAL.sweat; const hh = 220 * level; ctx.fillRect(-80, 0 - hh, 160, hh + 20); ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(-80, -hh, 160, 10); ctx.restore();
    ctx.fillStyle = PAL.ink; for (let i = 1; i <= 4; i++) ctx.fillRect(-80, -i * 55 + 4, i % 2 ? 22 : 40, 5);
    if (label) text(ctx, label, 0, 50, 28, PAL.ink, 700); ctx.restore(); };
  S.litre = (ctx, t) => {
    sky(ctx, '#ff8a3d', '#ffd166');
    sun(ctx, 150, 120, 70, t);
    ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 5; for (let i = 0; i < 5; i++) { const x = 100 + i * 120, y0 = 560 - ((t * 100 + i * 50) % 200); ctx.beginPath(); for (let j = 0; j <= 5; j++) ctx.lineTo(x + Math.sin(j * 1.1 + t * 4 + i) * 9, y0 - j * 12); ctx.stroke(); } ctx.restore();
    floor(ctx, 600, '#d88c3e', '#c47a30');
    person(ctx, 330, 610, 1.3, t, { shirt: PAL.red, sweat: 1, face: 'hot', run: 1, seed: 11 });
    pill(ctx, 'HARD EXERCISE + HEAT', 330, 210, { k: pop(t, T(55, 'hard') - 0.1), bg: PAL.ink, col: PAL.cream, size: 28 });
    const l1 = EO(t, T(56, 'more') - 0.2, T(56, 'hour'));
    const k1 = pop(t, T(56, 'adult') - 0.15);
    if (k1 > 0.01) { ctx.save(); ctx.translate(820, 520); ctx.scale(k1, k1); jug(ctx, 0, 0, 1, l1, '1 HOUR'); ctx.restore(); }
    const lit = l1 >= 0.999 ? '1 LITRE+' : (l1).toFixed(1) + ' L';
    big(ctx, lit, 820, 150, 90, PAL.white, k1 * bump(t, T(56, 'hour')), 16);
    const k2 = pop(t, T(57, 'athletes') - 0.15);
    if (k2 > 0.01) { ctx.save(); ctx.translate(1080, 520); ctx.scale(k2, k2); jug(ctx, 0, 0, 1, EO(t, T(57, 'two') - 0.2, T(57, 'litres') + 0.2), '+1 MORE'); ctx.restore(); }
    pill(ctx, 'ATHLETES: 2 L+', 1080, 240, { k: pop(t, T(57, 'two') - 0.1) * bump(t, T(57, 'litres')), bg: PAL.blue, col: PAL.white, size: 32 });
  };
  S.bottle = (ctx, t) => {
    sky(ctx, '#1f5f8b', '#2f86b8'); dots(ctx, 91, 30, PAL.white, 0.06);
    const drain = EO(t, T(58, 'bottle') - 0.1, E0(59));
    // big bottle
    const kb = pop(t, T(58, 'big') - 0.15);
    if (kb > 0.01) { ctx.save(); ctx.translate(300, 430); ctx.scale(kb, kb);
      longShadow(ctx, (c) => { ctx.fillStyle = c || 'rgba(255,255,255,0.92)'; rr(ctx, -95, -230, 190, 400, 50); ctx.fill(); rr(ctx, -45, -290, 90, 70, 16); ctx.fill(); }, 16);
      ctx.fillStyle = PAL.blue; rr(ctx, -55, -320, 110, 42, 12); ctx.fill();
      ctx.save(); rr(ctx, -82, -215, 164, 372, 42); ctx.clip(); const hh = 360 * (1 - drain * 0.85); ctx.fillStyle = PAL.sweat; ctx.fillRect(-82, 157 - hh, 164, hh); ctx.restore();
      ctx.restore(); }
    // body silhouette with drops leaving through skin
    longShadow(ctx, (c) => bodyShape(ctx, 900, 690, 1.05, c || '#ffc9a3'), 14);
    if (drain > 0) { for (let i = 0; i < 8; i++) { const u = (t * 0.7 + i / 8) % 1; const px = H.lerp(420, 860, u), py = H.lerp(330, 380, u) - Math.sin(u * Math.PI) * 120; ctx.save(); ctx.globalAlpha = Math.min(1, drain * 2) * Math.sin(u * Math.PI); drop(ctx, px, py, 10); ctx.restore(); } }
    const kev = EO(t, T(60, 'evaporates') - 0.3, T(60, 'evaporates') + 0.2);
    sweatFall(ctx, 900, 200, 260, 0, 0, t, 1);
    if (kev > 0) { const R = H.rng(13); for (let i = 0; i < 14; i++) { const x = 900 + (R() - 0.5) * 340, y0 = 140 + R() * 480, u = (t * 0.5 + R()) % 1; ctx.save(); ctx.globalAlpha = kev * Math.sin(u * Math.PI); circle(ctx, x + Math.sin(u * 5 + i) * 10, y0 - u * 120, 9 + u * 10, PAL.white); ctx.restore(); }
      const kh = EO(t, T(61, 'heat') - 0.2, T(61, 'heat') + 0.3); if (kh > 0) { ctx.save(); ctx.globalAlpha = kh; heatWaves(ctx, 900, 130, 320, t, PAL.red, 5); ctx.restore(); } }
    pill(ctx, 'A BIG BOTTLE OF WATER', 300, 90, { k: pop(t, T(58, 'bottle') - 0.1), bg: PAL.cream, size: 28 });
    pill(ctx, 'OUT THROUGH YOUR SKIN', 900, 660, { k: pop(t, T(59, 'skin') - 0.1), bg: PAL.ink, col: PAL.cream, size: 26 });
    pill(ctx, 'EVERY DROP TAKES HEAT', 900, 60, { k: pop(t, T(61, 'heat') - 0.1) * bump(t, T(61, 'amount')), bg: PAL.red, col: PAL.white, size: 30 });
  };
  // ---- CH7: why it matters ----
  S.superpower = (ctx, t) => {
    sky(ctx, '#3b2a8c', '#6b4adf');
    ctx.save(); ctx.fillStyle = 'rgba(255,255,255,0.08)'; for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2 + t * 0.25; ctx.beginPath(); ctx.moveTo(CX, 400); ctx.arc(CX, 400, 1000, a, a + 0.2); ctx.closePath(); ctx.fill(); } ctx.restore();
    chapterCard(ctx, t, 6, 'WHY IT MATTERS', T(62, 'matter'), PAL.yellow, PAL.ink);
    const k = pop(t, T(63, 'sweating') - 0.15), fy = 400 + Math.sin(t * 2.5) * 14;
    if (k > 0.01) { ctx.save(); ctx.translate(CX, fy); ctx.scale(k, k);
      ctx.fillStyle = PAL.red; ctx.beginPath(); ctx.moveTo(-50, -60); ctx.quadraticCurveTo(-180 - Math.sin(t * 6) * 20, 30, -230, 120); ctx.lineTo(-80, 60); ctx.closePath(); ctx.fill();
      longShadow(ctx, (c) => drop(ctx, 0, 30, 90, c || PAL.sweat, !c), 18);
      ctx.fillStyle = PAL.ink; rr(ctx, -66, -10, 132, 30, 15); ctx.fill(); circle(ctx, -28, 5, 9, PAL.white); circle(ctx, 28, 5, 9, PAL.white);
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, 48, 18, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
      ctx.fillStyle = PAL.yellow; ctx.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 12 : 26; ctx.lineTo(Math.cos(a) * r, 70 + Math.sin(a) * r + 20); } ctx.closePath(); ctx.fill();
      ctx.restore(); }
    big(ctx, 'SUPERPOWER', CX, 640, 80, PAL.yellow, pop(t, T(63, 'superpowers') - 0.15) * bump(t, T(63, 'superpowers') + 0.2), 16);
  };
  const dog = (ctx, x, y, s, t) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); const col = '#d9a066', dark = '#a8723f';
    ctx.strokeStyle = col; ctx.lineWidth = 22; ctx.lineCap = 'round'; ctx.beginPath(); [-80, -40, 50, 90].forEach((lx) => { ctx.moveTo(lx, -40); ctx.lineTo(lx, 0); }); ctx.stroke();
    ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(-110, -90); ctx.quadraticCurveTo(-160, -150 + Math.sin(t * 10) * 14, -150, -170); ctx.stroke();
    ctx.fillStyle = col; rr(ctx, -120, -120, 240, 90, 45); ctx.fill();
    circle(ctx, 130, -140, 56, col); ctx.fillStyle = dark; ctx.beginPath(); ctx.ellipse(105, -185, 18, 40, -0.4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = col; rr(ctx, 140, -150, 80, 50, 22); ctx.fill(); circle(ctx, 214, -140, 10, PAL.ink); circle(ctx, 140, -158, 7, PAL.ink);
    const pant = 0.6 + 0.4 * Math.abs(Math.sin(t * 9)); ctx.fillStyle = '#ff6f91'; rr(ctx, 165, -105, 30, 40 * pant + 20, 14); ctx.fill();
    ctx.restore(); };
  S.pant = (ctx, t) => {
    ctx.fillStyle = '#ffd98a'; ctx.fillRect(0, 0, CX, HH); ctx.fillStyle = '#9fdcff'; ctx.fillRect(CX, 0, CX, HH);
    floor(ctx, 600, 'rgba(0,0,0,0.1)');
    const kd = pop(t, T(64, 'furry') - 0.15);
    if (kd > 0.01) { ctx.save(); ctx.translate(320, 600); ctx.scale(kd, kd); dog(ctx, -40, 0, 1.25, t); ctx.restore();
      for (let i = 0; i < 3; i++) { const u = (t * 1.2 + i / 3) % 1; ctx.save(); ctx.globalAlpha = kd * Math.sin(u * Math.PI) * 0.8; circle(ctx, 560 - 20 + u * 60, 400 - u * 40, 10 + u * 12, PAL.white); ctx.restore(); } }
    pill(ctx, 'PANTING', 320, 150, { k: pop(t, T(64, 'panting') - 0.1) * bump(t, T(64, 'panting')), bg: PAL.ink, col: PAL.cream, size: 36 });
    pill(ctx, 'COOLS THE MOUTH', 320, 240, { k: pop(t, T(64, 'panting') + 0.3), bg: PAL.cream, size: 24 });
    const kh = EO(t, S0(65) - 0.3, S0(65));
    if (kh > 0) { ctx.save(); ctx.globalAlpha = kh; person(ctx, 960, 620, 1.45, t, { shirt: PAL.teal, sweat: 0, face: 'happy', seed: 12 });
      const kw = EO(t, T(65, 'whole') - 0.2, T(65, 'surface') + 0.2), R = H.rng(17);
      for (let i = 0; i < 26; i++) { const x = 960 + (R() - 0.5) * 140, y = 620 - 30 - R() * 340, d = R(); if (d > kw) continue; drop(ctx, x, y + Math.sin(t * 3 + i) * 3, 7); }
      ctx.restore(); }
    pill(ctx, 'HUMANS', 960, 150, { k: pop(t, T(65, 'we') - 0.1), bg: PAL.ink, col: PAL.cream, size: 36 });
    pill(ctx, 'THE WHOLE BODY AT ONCE', 960, 240, { k: pop(t, T(65, 'whole') - 0.1) * bump(t, T(65, 'once')), bg: PAL.blue, col: PAL.white, size: 26 });
  };
  S.run = (ctx, t) => {
    sky(ctx, '#ff9a4a', '#ffe0a0');
    sun(ctx, 1080, 140, 80, t);
    const scroll = t * 260;
    ctx.fillStyle = '#e8a35a'; ctx.beginPath(); ctx.moveTo(0, 470); for (let x = 0; x <= W; x += 20) ctx.lineTo(x, 470 + Math.sin((x + scroll * 0.3) * 0.006) * 30); ctx.lineTo(W, HH); ctx.lineTo(0, HH); ctx.fill();
    floor(ctx, 560, '#d07a3a'); ctx.fillStyle = '#5a4a5c'; ctx.fillRect(0, 590, W, 80);
    ctx.fillStyle = PAL.white; for (let i = -1; i < 9; i++) { const x = ((i * 180 - scroll) % 1440 + 1440) % 1440 - 180; ctx.fillRect(x, 626, 90, 8); }
    for (let i = -1; i < 4; i++) { const x = ((i * 520 - scroll * 0.8) % 2080 + 2080) % 2080 - 260; ctx.fillStyle = '#7b8a52'; circle(ctx, x, 480, 40, '#7b9a52'); ctx.fillStyle = '#6b4a2d'; ctx.fillRect(x - 8, 480, 16, 80); }
    person(ctx, 520, 640, 1.2, t, { shirt: PAL.teal, sweat: 0.45, face: 'happy', run: 1, seed: 13 });
    pill(ctx, 'HUMANS ARE GREAT AT', CX, 110, { k: pop(t, T(66, 'humans') - 0.1), bg: PAL.ink, col: PAL.cream, size: 30 });
    big(ctx, 'LONG RUNS IN THE HEAT', CX, 220, 64, PAL.white, pop(t, T(67, 'long') - 0.1) * bump(t, T(67, 'heat')), 14);
  };
  // ---- outro ----
  S.gym = (ctx, t) => {
    gymRoom(ctx, '#ff7a3d', '#ff5e5b');
    person(ctx, 400, 640, 1.6, t, { shirt: PAL.navy, sweat: 1, face: 'happy', arms: t > T(70, 'top') - 0.2 ? 'flex' : 'down', seed: 14 });
    pill(ctx, "DON'T BE EMBARRASSED", 880, 150, { k: pop(t, T(69, 'embarrassed') - 0.15), bg: PAL.cream, size: 34 });
    const kb = pop(t, T(70, 'top') - 0.15);
    if (kb > 0.01) { ctx.save(); ctx.translate(880, 330); ctx.scale(kb * bump(t, T(70, 'line')), kb * bump(t, T(70, 'line'))); ctx.rotate(Math.sin(t * 2) * 0.05);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.yellow; ctx.beginPath(); for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2, r = i % 2 ? 100 : 118; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill(); }, 14);
      text(ctx, 'TOP OF', 0, -18, 30, PAL.ink, 700); text(ctx, 'THE LINE', 0, 22, 30, PAL.ink, 700); ctx.restore(); }
    pill(ctx, 'COOLING SYSTEM', 880, 470, { k: pop(t, T(70, 'cooling') - 0.1), bg: PAL.blue, col: PAL.white, size: 26 });
    const kw = pop(t, T(71, 'drink') - 0.15);
    if (kw > 0.01) { ctx.save(); ctx.translate(1120, 560); ctx.scale(kw, kw); longShadow(ctx, (c) => { ctx.fillStyle = c || 'rgba(255,255,255,0.95)'; rr(ctx, -45, -110, 90, 180, 26); ctx.fill(); }, 12); ctx.fillStyle = PAL.sweat; rr(ctx, -36, -40, 72, 100, 18); ctx.fill(); ctx.fillStyle = PAL.blue; rr(ctx, -28, -140, 56, 34, 10); ctx.fill(); ctx.restore(); }
    pill(ctx, 'DRINK WATER', 880, 620, { k: kw * bump(t, T(71, 'water')), bg: PAL.ink, col: PAL.cream, size: 32 });
  };
  S.next = (ctx, t) => {
    sky(ctx, '#1d1d3a', '#3a3a6e'); dots(ctx, 101, 40, PAL.white, 0.06);
    pill(ctx, 'NEXT TIME', CX, 80, { k: pop(t, T(72, 'next') - 0.1), bg: PAL.yellow, size: 34 });
    // a big flat nose, seen from below-front, with two nostrils; one gets a "blocked" plug
    const kn = pop(t, T(72, 'two') - 0.2);
    if (kn > 0.01) { ctx.save(); ctx.translate(CX, 420); ctx.scale(kn, kn);
      longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.skin; ctx.beginPath(); ctx.moveTo(0, -200); ctx.bezierCurveTo(60, -120, 110, 0, 170, 60); ctx.bezierCurveTo(200, 110, 150, 150, 90, 140); ctx.lineTo(-90, 140); ctx.bezierCurveTo(-150, 150, -200, 110, -170, 60); ctx.bezierCurveTo(-110, 0, -60, -120, 0, -200); ctx.fill(); }, 18);
      ctx.fillStyle = '#5a3020'; ctx.beginPath(); ctx.ellipse(-70, 100, 40, 22, -0.2, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(70, 100, 40, 22, 0.2, 0, Math.PI * 2); ctx.fill();
      const kb = EO(t, T(73, 'blocked') - 0.3, T(73, 'blocked'));
      if (kb > 0) { ctx.fillStyle = PAL.red; ctx.globalAlpha = kb; ctx.beginPath(); ctx.ellipse(70, 100, 40, 22, 0.2, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = PAL.white; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(48, 100); ctx.lineTo(92, 100); ctx.stroke(); ctx.globalAlpha = 1; }
      // air flowing out of the open side
      for (let i = 0; i < 3; i++) { const u = (t * 1.1 + i / 3) % 1; ctx.save(); ctx.globalAlpha = Math.sin(u * Math.PI) * 0.8; ctx.strokeStyle = PAL.ice; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-70 - i * 14, 130 + u * 80); ctx.quadraticCurveTo(-90, 160 + u * 80, -70 + i * 14, 190 + u * 80); ctx.stroke(); ctx.restore(); }
      ctx.restore(); }
    pill(ctx, 'WHY TWO NOSTRILS?', 260, 330, { k: pop(t, T(72, 'nostrils') - 0.1), bg: PAL.cream, size: 30 });
    pill(ctx, 'ONE ALWAYS BLOCKED?', 1020, 520, { k: pop(t, T(73, 'blocked') - 0.1) * bump(t, T(73, 'blocked')), bg: PAL.red, col: PAL.white, size: 30 });
  };
  // ================= sequencing: scene order, transitions, camera =================
  const ORDER = [
    ['glands', 0, null], ['twins', 3, 'cut'], ['notHealth', 5, 'slide'],
    ['hardware', 8, 'wipe'], ['coil', 10, 'cut'], ['bodymap', 12, 'slide'],
    ['brain', 15, 'wipe'], ['signal', 17, 'slide'], ['clever', 20, 'cut'], ['evap', 23, 'slide'], ['humid', 24, 'cut'], ['smell', 27, 'slide'],
    ['whyMe', 30, 'wipe'], ['size', 31, 'cut'], ['genes', 34, 'slide'], ['sex', 37, 'slide'],
    ['twist', 41, 'wipe'], ['ac', 43, 'cut'], ['heat', 47, 'slide'], ['adapt', 49, 'cut'],
    ['rest', 52, 'wipe'], ['litre', 55, 'slide'], ['bottle', 58, 'cut'],
    ['superpower', 62, 'wipe'], ['pant', 64, 'slide'], ['run', 66, 'cut'],
    ['gym', 68, 'wipe'], ['next', 72, 'wipe'],
  ].map(([id, p, tr]) => ({ id, tr, at: p === 0 ? 0 : (E0(p - 1) + S0(p)) / 2 }));
  ORDER.forEach((o, i) => { o.end = i < ORDER.length - 1 ? ORDER[i + 1].at : DURATION; });
  const OWN_CAMERA = { coil: 1, brain: 1, evap: 1, run: 1 };
  const TR = 0.5;
  const drawScene = (ctx, o, t) => {
    ctx.save();
    if (!OWN_CAMERA[o.id]) { const z = 1 + 0.035 * H.ease.inOut(ph(t, o.at, o.end)); ctx.translate(CX, CY); ctx.scale(z, z); ctx.translate(-CX, -CY); }
    S[o.id](ctx, t); ctx.restore();
  };
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < ORDER.length - 1 && t >= ORDER[i + 1].at - (ORDER[i + 1].tr === 'cut' ? 0 : TR / 2)) i++;
    const cur = ORDER[i], prev = ORDER[i - 1];
    const u = cur.tr && cur.tr !== 'cut' ? H.ease.inOut(ph(t, cur.at - TR / 2, cur.at + TR / 2)) : 1;
    if (u < 1 && prev) {
      if (cur.tr === 'wipe') {
        drawScene(ctx, prev, t);
        ctx.save(); ctx.beginPath(); ctx.arc(CX, CY, u * 760, 0, Math.PI * 2); ctx.clip(); drawScene(ctx, cur, t); ctx.restore();
        if (u > 0) { ctx.strokeStyle = PAL.cream; ctx.lineWidth = 16; ctx.beginPath(); ctx.arc(CX, CY, u * 760, 0, Math.PI * 2); ctx.stroke(); }
      } else { // slide: the new scene pushes the old one off to the left
        ctx.save(); ctx.translate(-u * W, 0); drawScene(ctx, prev, t); ctx.restore();
        ctx.save(); ctx.translate((1 - u) * W, 0); drawScene(ctx, cur, t); ctx.restore();
        ctx.fillStyle = PAL.cream; ctx.fillRect((1 - u) * W - 8, 0, 16, HH);
      }
    } else drawScene(ctx, cur, t);
    H.vignette(ctx, Wd, Hd, 0.16, '40,20,60');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), d = id.data, gr = H.rng(3); for (let j = 0; j < d.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; d[j] = d[j + 1] = d[j + 2] = v; d[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  // ================= sound: pops on labels, whooshes on transitions, ticks on counters, dings on reveals =================
  function scoreSound(k) {
    const D = DURATION;
    const popAt = (t, f = 620, g = 0.7, p = 0, minor = true) => k.play('pop', t, { f, gain: g, pan: p, minor });
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 100, gain: 0.25, chords: [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['G3', 'B3', 'D4', 'F4']] });
    ORDER.forEach((o) => { if (!o.tr) return; if (o.tr === 'wipe') { k.play('whoosh', o.at - 0.3, { dur: 0.6, gain: 0.8, top: 2400 }); k.play('tock', o.at + 0.2, { f: 420, gain: 0.45 }); } else if (o.tr === 'slide') k.play('swish', o.at - 0.2, { gain: 0.55 }); else k.play('tock', o.at, { f: 360, gain: 0.35, minor: true }); });
    // label pops (minor) at the words they land on
    const pops = [[0, 'up'], [0, 'sweat'], [1, 'drip'], [2, 'damp'], [3, 'hot'], [3, 'workout'], [4, 'soaked'], [4, 'fine'], [5, 'healthy'], [5, 'unhealthy'], [6, 'cooling'], [6, 'system'], [7, 'trained'], [8, 'hardware'], [9, 'skin'], [9, 'sweat'], [10, 'coiled'], [10, 'tube'], [11, 'curly'], [11, 'straw'], [12, 'whole'], [13, 'most'], [13, 'palms'], [13, 'soles'], [14, 'forehead'], [15, 'switch'], [16, 'brain'], [16, 'thermostat'], [16, 'hypothalamus'], [17, 'warm'], [18, 'signal'], [19, 'salty'], [20, 'clever'], [21, 'wet'], [22, 'disappearing'], [23, 'evaporates'], [23, 'heat'], [24, 'humid'], [25, 'full'], [26, 'sits'], [26, 'drips'], [27, 'fresh'], [27, 'smells'], [28, 'bacteria'], [29, 'armpit'], [30, 'why'], [30, 'drip'], [30, 'dry'], [31, 'size'], [32, 'bigger'], [32, 'heat'], [33, 'sweat'], [34, 'genes'], [35, 'people'], [35, 'active'], [36, 'pump'], [37, 'men'], [38, 'japan'], [39, 'fastest'], [40, 'least'], [41, 'twist'], [41, 'backwards'], [42, 'sweating'], [43, 'upgraded'], [43, 'body'], [44, 'sooner'], [45, 'feel'], [46, 'more'], [47, 'heat'], [48, 'spend'], [48, 'weeks'], [49, 'earlier'], [50, 'pours'], [51, 'salt'], [52, 'numbers'], [53, 'cool'], [54, 'little'], [54, 'noticing'], [55, 'hard'], [56, 'adult'], [57, 'athletes'], [57, 'two'], [58, 'bottle'], [59, 'skin'], [61, 'heat'], [62, 'matter'], [63, 'sweating'], [64, 'panting'], [65, 'we'], [65, 'whole'], [66, 'humans'], [67, 'long'], [69, 'embarrassed'], [70, 'top'], [70, 'cooling'], [71, 'drink'], [72, 'next'], [72, 'nostrils'], [73, 'blocked']];
    pops.forEach(([i, w], n) => popAt(T(i, w) - 0.1, 520 + (n % 5) * 70, 0.7, ((n % 3) - 1) * 0.4));
    // counters and reveals
    for (let f = Math.ceil((T(0, 'four') - 0.15) * 15); f < T(0, 'glands') * 15; f++) k.play('count', f / 15, { gain: 0.7, minor: true });
    k.play('impact', T(0, 'glands'), { gain: 0.9 }); k.play('ding', T(0, 'glands') + 0.02, { f: 'E6', gain: 0.35 });
    for (let n = 0; n < 11; n++) k.play('tock', T(9, 'packed') - 0.2 + (T(9, 'glands') - T(9, 'packed') + 0.2) * n / 11, { f: 500 + n * 30, gain: 0.3, minor: true });
    k.play('stamp', T(9, 'million'), { gain: 0.5 });
    k.play('stamp', E0(5) - 0.2, { gain: 0.45 }); k.play('error', E0(5) - 0.15, { f: 'A3', gain: 0.35 });
    k.play('riser', T(17, 'core') - 0.2, { dur: 1.2, gain: 0.45 });
    k.play('riser', T(18, 'signal') - 0.1, { dur: T(18, 'nerves') - T(18, 'signal') + 0.3, gain: 0.35 }); k.play('blip', T(18, 'nerves') + 0.2, { gain: 0.5 });
    for (let i = 0; i < 3; i++) k.play('pop', T(19, 'squeeze') + i * 0.12, { f: 900 + i * 120, gain: 0.5, minor: true });
    k.play('error', T(21, 'wet') + 0.15, { f: 'A3', gain: 0.3 }); k.play('sparkle', T(22, 'disappearing'), { n: 6, gain: 0.6 });
    k.noise(T(23, 'evaporates') - 0.3, { dur: 2.2, color: 'pink', filter: 'bandpass', f: [[0, 600], [2.2, 3000]], q: 1, gain: 0.18, a: 0.4, verb: 0.2 });
    k.play('ding', T(27, 'all'), { f: 'C6', gain: 0.3 });
    for (let i = 0; i < 6; i++) k.play('tick', T(29, 'munching') + i * 0.18, { f: 2400 + i * 200, gain: 0.4, minor: true });
    k.play('thud', T(32, 'bigger'), { f: 110, gain: 0.5 });
    k.play('stamp', T(39, 'fastest'), { gain: 0.4 }); k.play('thud', T(40, 'least'), { f: 120, gain: 0.4 });
    k.play('riser', T(42, 'fitter') - 0.8, { dur: 0.8, gain: 0.5 }); k.play('impact', T(42, 'fitter') + 0.1, { gain: 0.9 }); k.play('success', T(42, 'fitter') + 0.15, { f: 'C6', gain: 0.35 });
    for (let n = 0; n < 14; n++) k.play('tick', T(48, 'one') - 0.1 + (T(48, 'weeks') + 0.4 - T(48, 'one')) * n / 14, { f: 3000, gain: 0.6, minor: true });
    [[49, 'earlier'], [50, 'pours'], [51, 'salt']].forEach(([i, w], n) => k.play('ding', T(i, w) + 0.1, { f: ['C5', 'E5', 'G5'][n], gain: 0.3 }));
    for (let f = Math.ceil((T(56, 'more') - 0.2) * 12); f < T(56, 'hour') * 12; f++) k.play('count', f / 12, { gain: 0.6, minor: true });
    k.play('impact', T(56, 'hour'), { gain: 0.9 }); k.play('ding', T(57, 'litres'), { f: 'G5', gain: 0.3 });
    k.noise(T(58, 'bottle') - 0.1, { dur: 2.5, color: 'brown', filter: 'lowpass', f: [[0, 300], [1.2, 900], [2.5, 400]], gain: 0.16, a: 0.4, verb: 0.15 });
    k.play('sparkle', T(63, 'superpowers'), { n: 8, gain: 0.8 }); k.play('success', T(63, 'superpowers') + 0.1, { f: 'C6', gain: 0.35 });
    k.play('ding', T(70, 'top'), { f: 'E6', gain: 0.35 }); k.play('sparkle', T(70, 'line'), { n: 6, gain: 0.6 });
    k.play('riser', T(72, 'next') - 0.3, { dur: 0.6, gain: 0.4 }); k.play('blip', T(73, 'blocked'), { gain: 0.5 });
  }

  // ================= YouTube thumbnail: one still in the style, 3 huge words =================
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    sky(ctx, '#ff7a3d', '#ff4a5a');
    ctx.save(); ctx.fillStyle = 'rgba(255,255,255,0.12)'; for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2; ctx.beginPath(); ctx.moveTo(900, 420); ctx.arc(900, 420, 1100, a, a + 0.18); ctx.closePath(); ctx.fill(); } ctx.restore();
    sweatFall(ctx, 900, 60, 420, 600, 18, 0.37, 5, 16, 1);
    person(ctx, 930, 760, 2.25, 0.4, { shirt: PAL.navy, sweat: 1, face: 'hot', arms: 'flex', seed: 3 });
    ctx.save(); ctx.translate(380, 0);
    big(ctx, 'SWEATY', 0, 190, 150, PAL.white, 1, 22);
    big(ctx, '=', 0, 340, 130, PAL.yellow, 1, 18);
    big(ctx, 'FITTER?', 0, 500, 150, PAL.yellow, 1, 22);
    ctx.restore();
    H.vignette(ctx, W, HH, 0.25, '40,20,60');
    ctx.restore();
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;

})();
