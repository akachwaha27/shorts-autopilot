// ================= Flat-Vector Science, 16:9 1280x720: "Why doesn't your stomach digest itself?" =================
// Unattended run: no storyboard step. BEATS copied from phrases.json (Kokoro am_michael, natural mode).
// Style: flat shapes, no outlines, long drop shadows, pill labels, big rounded Fredoka type, every scene its own
// background, circle wipes / slide pushes / iris cuts between scenes, a slow camera drift in every scene,
// vignette + light grain on every frame. Built from the Flat-Vector Science house example, laid out for 16:9.
(function () {
  const W = 1280, HH = 720;
  const BEATS = [
    { id: 'p0', s: 0.25, e: 3.63, w: {"your": 0.25, "stomach": 0.52, "is": 0.99, "full": 1.13, "of": 1.4, "acid": 1.53, "strong": 1.8, "enough": 2.21, "to": 2.62, "dissolve": 2.75, "metal": 3.29} },  // Your stomach is full of acid strong enough to dissolve metal.
    { id: 'p1', s: 3.98, e: 5.76, w: {"so": 3.98, "why": 4.12, "doesnt": 4.35, "it": 4.79, "dissolve": 4.94, "you": 5.54} },  // So why doesn't it dissolve you?
    { id: 'p2', s: 6.28, e: 10.19, w: {"the": 6.28, "secret": 6.54, "is": 7.05, "a": 7.22, "wall": 7.3, "that": 7.64, "rebuilds": 7.98, "itself": 8.66, "every": 9.17, "few": 9.59, "days": 9.85} },  // The secret is a wall that rebuilds itself every few days.
    { id: 'p3', s: 10.59, e: 14.51, w: {"every": 10.59, "day": 10.97, "it": 11.2, "breaks": 11.36, "down": 11.82, "steak": 12.13, "cheese": 12.51, "and": 12.97, "crunchy": 13.2, "vegetables": 13.74} },  // Every day it breaks down steak, cheese and crunchy vegetables,
    { id: 'p4', s: 14.97, e: 17.42, w: {"but": 14.97, "it": 15.17, "never": 15.31, "eats": 15.65, "the": 15.92, "walls": 16.13, "holding": 16.47, "it2": 16.95, "all": 17.08, "in": 17.29} },  // but it never eats the walls holding it all in.
    { id: 'p5', s: 17.9, e: 21.52, w: {"for": 17.9, "a": 18.14, "long": 18.22, "time": 18.54, "nobody": 18.86, "knew": 19.35, "what": 19.67, "a2": 19.99, "stomach": 20.07, "actually": 20.63, "did": 21.27} },  // For a long time, nobody knew what a stomach actually did.
    { id: 'p6', s: 21.89, e: 24.37, w: {"some": 21.89, "thought": 22.15, "it": 22.6, "just": 22.74, "ground": 23.0, "food": 23.39, "up": 23.65, "like": 23.78, "a": 24.04, "mill": 24.11} },  // Some thought it just ground food up like a mill.
    { id: 'p7', s: 24.84, e: 29.94, w: {"then": 24.84, "in": 25.21, "the": 25.4, "1700s": 25.68, "an": 26.14, "italian": 26.33, "scientist": 26.98, "named": 27.81, "lazzaro": 28.27, "spallanzani": 28.92} },  // Then in the 1700s, an Italian scientist named Lazzaro Spallanzani
    { id: 'p8', s: 30.0, e: 34.33, w: {"pulled": 30.0, "stomach": 30.61, "juice": 31.31, "out": 31.81, "on": 32.11, "a": 32.32, "sponge": 32.42, "tied": 33.02, "to": 33.42, "a2": 33.62, "string": 33.72} },  // pulled stomach juice out on a sponge tied to a string.
    { id: 'p9', s: 34.68, e: 37.12, w: {"and": 34.68, "he": 34.86, "showed": 34.98, "that": 35.34, "this": 35.57, "juice": 35.81, "could": 36.11, "dissolve": 36.41, "meat": 36.88} },  // And he showed that this juice could dissolve meat
    { id: 'p10', s: 37.46, e: 38.77, w: {"even": 37.46, "outside": 37.75, "the": 38.26, "body": 38.48} },  // even outside the body.
    { id: 'p11', s: 39.23, e: 41.34, w: {"so": 39.23, "the": 39.38, "stomach": 39.6, "wasnt": 40.11, "just": 40.47, "a": 40.76, "grinder": 40.83} },  // So the stomach wasn't just a grinder.
    { id: 'p12', s: 41.74, e: 43.17, w: {"it": 41.74, "was": 41.9, "a": 42.14, "chemistry": 42.22, "lab": 42.93} },  // It was a chemistry lab.
    { id: 'p13', s: 43.56, e: 47.5, w: {"and": 43.56, "later": 43.76, "the": 44.1, "french": 44.3, "scientist": 44.71, "claude": 45.32, "bernard": 45.73, "noticed": 46.21, "something": 46.68, "odd": 47.29} },  // And later, the French scientist Claude Bernard noticed something odd.
    { id: 'p14', s: 47.96, e: 51.04, w: {"the": 47.96, "stomach": 48.17, "wall": 48.67, "acts": 48.96, "as": 49.25, "if": 49.39, "it": 49.53, "were": 49.68, "made": 49.96, "of": 50.25, "porcelain": 50.39} },  // The stomach wall acts as if it were made of porcelain.
    { id: 'p15', s: 51.39, e: 53.02, w: {"so": 51.39, "whats": 51.55, "inside": 51.96, "this": 52.45, "lab": 52.77} },  // So what's inside this lab?
    { id: 'p16', s: 53.47, e: 56.92, w: {"your": 53.47, "stomach": 53.77, "lining": 54.29, "is": 54.74, "covered": 54.89, "in": 55.42, "millions": 55.57, "of": 56.17, "tiny": 56.32, "pits": 56.62} },  // Your stomach lining is covered in millions of tiny pits.
    { id: 'p17', s: 57.38, e: 61.17, w: {"deep": 57.38, "down": 57.72, "in": 58.06, "them": 58.22, "special": 58.56, "cells": 59.15, "called": 59.57, "parietal": 60.08, "cells2": 60.75} },  // Deep down in them, special cells called parietal cells
    { id: 'p18', s: 61.27, e: 63.16, w: {"pump": 61.27, "out": 61.6, "hydrochloric": 61.85, "acid": 62.84} },  // pump out hydrochloric acid.
    { id: 'p19', s: 63.52, e: 68.14, w: {"that": 63.52, "gives": 63.82, "your": 64.2, "stomach": 64.5, "juice": 65.04, "a": 65.41, "ph": 65.49, "of": 65.64, "about": 65.79, "one": 66.17, "and": 66.4, "a2": 66.63, "half": 66.7, "to": 67.01, "three": 67.16, "and2": 67.54, "a3": 67.77, "half2": 67.84} },  // That gives your stomach juice a pH of about one and a half to three and a half.
    { id: 'p20', s: 68.5, e: 72.11, w: {"at": 68.5, "its": 68.66, "strongest": 68.9, "its2": 69.62, "even": 69.86, "more": 70.18, "acidic": 70.5, "than": 70.98, "lemon": 71.3, "juice": 71.7} },  // At its strongest, it's even more acidic than lemon juice.
    { id: 'p21', s: 72.46, e: 74.7, w: {"strong": 72.46, "enough": 72.85, "to": 73.25, "dissolve": 73.38, "a": 73.91, "piece": 73.97, "of": 74.3, "zinc": 74.43} },  // Strong enough to dissolve a piece of zinc.
    { id: 'p22', s: 75.15, e: 78.48, w: {"next": 75.15, "door": 75.47, "chief": 75.79, "cells": 76.18, "make": 76.58, "an": 76.9, "enzyme": 77.06, "called": 77.53, "pepsin": 78.01} },  // Next door, chief cells make an enzyme called pepsin,
    { id: 'p23', s: 78.97, e: 81.23, w: {"which": 78.97, "chops": 79.3, "proteins": 79.64, "into": 80.17, "little": 80.43, "pieces": 80.83} },  // which chops proteins into little pieces.
    { id: 'p24', s: 81.7, e: 83.22, w: {"and": 81.7, "heres": 81.92, "the": 82.28, "clever": 82.49, "part": 82.93} },  // And here's the clever part.
    { id: 'p25', s: 83.56, e: 85.19, w: {"pepsin": 83.56, "is": 83.99, "made": 84.13, "switched": 84.41, "off": 84.98} },  // Pepsin is made switched off.
    { id: 'p26', s: 85.61, e: 88.98, w: {"it": 85.61, "leaves": 85.75, "the": 86.16, "cell": 86.37, "as": 86.65, "a": 86.78, "harmless": 86.85, "version": 87.4, "called": 87.88, "pepsinogen": 88.3} },  // It leaves the cell as a harmless version called pepsinogen,
    { id: 'p27', s: 89.56, e: 92.24, w: {"and": 89.56, "only": 89.8, "the": 90.11, "acid": 90.35, "outside": 90.66, "can": 91.21, "switch": 91.45, "it": 91.92, "on": 92.08} },  // and only the acid outside can switch it on.
    { id: 'p28', s: 92.64, e: 95.88, w: {"so": 92.64, "the": 92.78, "knife": 92.99, "is": 93.34, "never": 93.48, "sharp": 93.84, "inside": 94.19, "the2": 94.61, "cell": 94.82, "that": 95.1, "makes": 95.38, "it": 95.73} },  // So the knife is never sharp inside the cell that makes it.
    { id: 'p29', s: 96.24, e: 99.33, w: {"but": 96.24, "that": 96.44, "still": 96.72, "leaves": 97.06, "the": 97.47, "stomach": 97.68, "wall": 98.16, "sitting": 98.43, "in": 98.91, "acid": 99.05} },  // But that still leaves the stomach wall sitting in acid.
    { id: 'p30', s: 99.69, e: 102.69, w: {"thats": 99.69, "where": 100.09, "defense": 100.48, "number": 101.03, "one": 101.51, "comes": 101.74, "in": 102.13, "slime": 102.29} },  // That's where defense number one comes in: slime.
    { id: 'p31', s: 103.03, e: 106.15, w: {"the": 103.03, "lining": 103.25, "is": 103.68, "coated": 103.83, "in": 104.26, "a": 104.41, "thick": 104.48, "sticky": 104.84, "layer": 105.28, "of": 105.64, "mucus": 105.78} },  // The lining is coated in a thick, sticky layer of mucus.
    { id: 'p32', s: 106.5, e: 108.89, w: {"and": 106.5, "that": 106.7, "mucus": 106.97, "is": 107.32, "loaded": 107.45, "with": 107.86, "bicarbonate": 108.13} },  // And that mucus is loaded with bicarbonate,
    { id: 'p33', s: 109.47, e: 111.89, w: {"the": 109.47, "same": 109.71, "kind": 110.03, "of": 110.35, "stuff": 110.52, "as": 110.92, "baking": 111.08, "soda": 111.57} },  // the same kind of stuff as baking soda.
    { id: 'p34', s: 112.29, e: 116.75, w: {"acid": 112.29, "trickles": 112.61, "in": 113.23, "from": 113.39, "one": 113.7, "side": 113.94, "bicarbonate": 114.25, "soaks": 115.11, "it": 115.5, "up": 115.66, "from2": 115.81, "the": 116.12, "other": 116.36} },  // Acid trickles in from one side, bicarbonate soaks it up from the other.
    { id: 'p35', s: 117.23, e: 121.04, w: {"in": 117.23, "lab": 117.39, "studies": 117.63, "the": 118.2, "acid": 118.44, "on": 118.77, "one": 118.93, "side": 119.17, "of": 119.5, "the2": 119.66, "mucus": 119.9, "was": 120.31, "strong": 120.55} },  // In lab studies, the acid on one side of the mucus was strong,
    { id: 'p36', s: 121.12, e: 124.61, w: {"but": 121.12, "right": 121.37, "against": 121.78, "the": 122.37, "cells": 122.62, "it": 123.03, "was": 123.2, "close": 123.45, "to": 123.86, "neutral": 124.03} },  // but right against the cells, it was close to neutral.
    { id: 'p37', s: 124.97, e: 129.31, w: {"under": 124.97, "the": 125.36, "slime": 125.59, "the2": 125.98, "cells": 126.21, "are": 126.6, "zipped": 126.83, "together": 127.29, "with": 127.91, "tight": 128.22, "junctions": 128.61} },  // Under the slime, the cells are zipped together with tight junctions,
    { id: 'p38', s: 129.41, e: 131.19, w: {"so": 129.41, "acid": 129.55, "cant": 129.84, "leak": 130.12, "between": 130.41, "them": 130.91} },  // so acid can't leak between them.
    { id: 'p39', s: 131.61, e: 133.96, w: {"defense": 131.61, "number": 132.2, "two": 132.7, "is": 132.96, "even": 133.12, "wilder": 133.46} },  // Defense number two is even wilder.
    { id: 'p40', s: 134.39, e: 136.72, w: {"your": 134.39, "stomach": 134.65, "just": 135.12, "keeps": 135.39, "replacing": 135.72, "itself": 136.32} },  // Your stomach just keeps replacing itself.
    { id: 'p41', s: 137.13, e: 141.41, w: {"the": 137.13, "surface": 137.37, "lining": 137.92, "is": 138.4, "completely": 138.56, "renewed": 139.35, "every": 139.9, "three": 140.3, "to": 140.7, "six": 140.85, "days": 141.09} },  // The surface lining is completely renewed every three to six days.
    { id: 'p42', s: 141.77, e: 146.13, w: {"one": 141.77, "old": 142.0, "estimate": 142.22, "says": 142.82, "about": 143.13, "half": 143.5, "a": 143.8, "million": 143.88, "cells": 144.4, "get": 144.78, "shed": 145.0, "every": 145.3, "minute": 145.68} },  // One old estimate says about half a million cells get shed every minute.
    { id: 'p43', s: 146.58, e: 150.94, w: {"so": 146.58, "even": 146.74, "if": 147.07, "a": 147.24, "few": 147.32, "cells": 147.57, "get": 147.98, "burned": 148.22, "fresh": 148.72, "ones": 149.13, "are": 149.46, "already": 149.71, "on": 150.28, "the": 150.45, "way": 150.69} },  // So even if a few cells get burned, fresh ones are already on the way.
    { id: 'p44', s: 151.33, e: 153.2, w: {"and": 151.33, "this": 151.52, "stomach": 151.77, "is": 152.2, "built": 152.33, "to": 152.64, "stretch": 152.77} },  // And this stomach is built to stretch.
    { id: 'p45', s: 153.56, e: 155.83, w: {"empty": 153.56, "its": 153.94, "about": 154.17, "the": 154.54, "size": 154.77, "of": 155.07, "your": 155.22, "fist": 155.52} },  // Empty, it's about the size of your fist.
    { id: 'p46', s: 156.2, e: 158.06, w: {"but": 156.2, "it": 156.41, "can": 156.56, "hold": 156.77, "up": 157.06, "to": 157.2, "four": 157.34, "liters": 157.63} },  // But it can hold up to four liters,
    { id: 'p47', s: 158.48, e: 161.45, w: {"more": 158.48, "than": 158.81, "seventyfive": 159.14, "times": 160.05, "its": 160.46, "empty": 160.71, "size": 161.12} },  // more than seventy-five times its empty size.
    { id: 'p48', s: 161.85, e: 165.65, w: {"every": 161.85, "twenty": 162.24, "seconds": 162.7, "or": 163.25, "so": 163.4, "a": 163.56, "wave": 163.63, "of": 163.95, "muscle": 164.1, "squeezes": 164.57, "the": 165.19, "mix": 165.42} },  // Every twenty seconds or so, a wave of muscle squeezes the mix,
    { id: 'p49', s: 166.02, e: 169.79, w: {"and": 166.02, "two": 166.25, "to": 166.48, "four": 166.64, "hours": 166.94, "after": 167.33, "a": 167.71, "meal": 167.79, "its": 168.1, "pushed": 168.33, "on": 168.79, "into": 168.95, "your": 169.25, "gut": 169.56} },  // and two to four hours after a meal, it's pushed on into your gut.
    { id: 'p50', s: 170.19, e: 171.71, w: {"so": 170.19, "what": 170.32, "can": 170.58, "break": 170.78, "the": 171.12, "shield": 171.31} },  // So what can break the shield?
    { id: 'p51', s: 172.16, e: 175.36, w: {"a": 172.16, "corkscrewshaped": 172.24, "bacterium": 173.5, "called": 174.26, "h": 174.77, "pylori": 174.85} },  // A corkscrew-shaped bacterium called H. pylori
    { id: 'p52', s: 175.65, e: 177.66, w: {"can": 175.65, "burrow": 175.84, "into": 176.21, "the": 176.47, "mucus": 176.66, "and": 176.97, "weaken": 177.16, "it": 177.54} },  // can burrow into the mucus and weaken it.
    { id: 'p53', s: 178.09, e: 182.8, w: {"thats": 178.09, "why": 178.48, "some": 178.72, "sores": 179.03, "in": 179.43, "the": 179.58, "stomach": 179.82, "lining": 180.37, "are": 180.84, "now": 181.08, "treated": 181.31, "as": 181.86, "infections": 182.02} },  // That's why some sores in the stomach lining are now treated as infections.
    { id: 'p54', s: 183.28, e: 185.01, w: {"so": 183.28, "the": 183.4, "next": 183.6, "time": 183.85, "you": 184.11, "eat": 184.3, "a": 184.49, "big": 184.56, "meal": 184.75} },  // So the next time you eat a big meal,
    { id: 'p55', s: 185.47, e: 187.75, w: {"remember": 185.47, "theres": 185.97, "a": 186.35, "pool": 186.42, "of": 186.67, "acid": 186.8, "in": 187.05, "your": 187.18, "belly": 187.43} },  // remember there's a pool of acid in your belly,
    { id: 'p56', s: 188.3, e: 191.88, w: {"and": 188.3, "a": 188.54, "slimy": 188.62, "selfrepairing": 189.03, "wall": 190.09, "that": 190.41, "never": 190.74, "lets": 191.15, "it": 191.47, "win": 191.64} },  // and a slimy, self-repairing wall that never lets it win.
    { id: 'p57', s: 192.32, e: 195.91, w: {"next": 192.32, "time": 192.62, "why": 192.92, "do": 193.14, "some": 193.29, "people": 193.59, "sweat": 194.04, "so": 194.41, "much": 194.56, "more": 194.86, "than": 195.16, "others": 195.46} },  // Next time, why do some people sweat so much more than others?
  ];
  const T = (i, w) => { const v = BEATS[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in p' + i); return v; };
  const PS = (i) => BEATS[i].s, PE = (i) => BEATS[i].e;
  const DURATION = BEATS[BEATS.length - 1].e + 1.0;

  // ---------- helpers ----------
  const ph = (t, a, b) => H.clamp((t - a) / (b - a));
  const EO = (t, a, b) => H.ease.out(ph(t, a, b));
  const EI = (t, a, b) => H.ease.inOut(ph(t, a, b));
  const pop = (t, a, end) => H.ease.back(ph(t, a, a + 0.3)) * (end == null ? 1 : 1 - ph(t, end, end + 0.25));
  const bump = (t, t0) => (t > t0 && t < t0 + 0.35 ? 1 + 0.16 * Math.sin(ph(t, t0, t0 + 0.35) * Math.PI) : 1);
  const PAL = { navy: '#1b2a5c', ink: '#1d1d3a', cream: '#fff6e6', yellow: '#ffd23f', orange: '#ff7a3d', red: '#ef4a4a', blue: '#3fa9f5', sky: '#bfe9ff', teal: '#1fb6a6', green: '#7bd65b', acid: '#c6ef3e', acid2: '#9fd12a', purple: '#7a5cff', pink: '#ff8fb1', stom: '#ff7f9b', stom2: '#e85d7d', lining: '#ffb0bf', mucus: '#9fe3f0', bicarb: '#3fa9f5', skin: '#f3c7a0', white: '#ffffff', grey: '#8b93a8', brown: '#8a5a3c' };
  const rr = (ctx, x, y, w, h, r) => { r = Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2); ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  const longShadow = (ctx, fn, len = 18, col = 'rgba(20,20,60,0.15)') => { ctx.save(); for (let i = len; i > 0; i -= 2) { ctx.save(); ctx.translate(i * 0.8, i); fn(col); ctx.restore(); } ctx.restore(); fn(null); };
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
  const big = (ctx, s, x, y, size, col, k = 1, sh = 14) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => text(ctx, s, 0, 0, size, c || col, 700), sh); ctx.restore(); };
  const circle = (ctx, x, y, r, col) => { ctx.beginPath(); ctx.arc(x, y, Math.max(0, r), 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill(); };
  const arrow = (ctx, x0, y0, x1, y1, col, wdt = 10, prog = 1) => {
    if (prog <= 0) return; const x = H.lerp(x0, x1, prog), y = H.lerp(y0, y1, prog), a = Math.atan2(y1 - y0, x1 - x0);
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = wdt; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = col; ctx.translate(x, y); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(wdt * 1.6, 0); ctx.lineTo(-wdt * 1.2, -wdt * 1.4); ctx.lineTo(-wdt * 1.2, wdt * 1.4); ctx.closePath(); ctx.fill(); ctx.restore();
  };
  const sky = (ctx, c0, c1) => { const g = ctx.createLinearGradient(0, 0, 0, HH); g.addColorStop(0, c0); g.addColorStop(1, c1); ctx.fillStyle = g; ctx.fillRect(-200, -200, W + 400, HH + 400); };
  const ground = (ctx, y, col) => { ctx.fillStyle = col; ctx.fillRect(-200, y, W + 400, HH - y + 200); };
  const dots = (ctx, seed, n, col, a = 0.18, t = 0) => { const sr = H.rng(seed); ctx.save(); ctx.globalAlpha = a; for (let i = 0; i < n; i++) { const x = sr() * W, y = sr() * HH, r = 14 + sr() * 60; circle(ctx, x + Math.sin(t * 0.5 + i) * 8, y + Math.cos(t * 0.4 + i) * 6, r, col); } ctx.restore(); };
  const check = (ctx, x, y, s, col = PAL.green, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k); longShadow(ctx, (c) => circle(ctx, 0, 0, 30, c || col), 8); ctx.strokeStyle = PAL.white; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(-13, 1); ctx.lineTo(-3, 11); ctx.lineTo(14, -10); ctx.stroke(); ctx.restore(); };
  const cross = (ctx, x, y, s, col = PAL.red, k = 1) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(s * k, s * k); longShadow(ctx, (c) => circle(ctx, 0, 0, 30, c || col), 8); ctx.strokeStyle = PAL.white; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-11, -11); ctx.lineTo(11, 11); ctx.moveTo(11, -11); ctx.lineTo(-11, 11); ctx.stroke(); ctx.restore(); };
  const bubble = (ctx, x, y, w, h, tx, ty, k, col = PAL.white) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); longShadow(ctx, (c) => { ctx.fillStyle = c || col; rr(ctx, -w / 2, -h / 2, w, h, 40); ctx.fill(); ctx.beginPath(); ctx.moveTo(-30, h / 2 - 10); ctx.lineTo((tx - x) / k, (ty - y) / k); ctx.lineTo(10, h / 2 - 10); ctx.closePath(); ctx.fill(); }, 12); ctx.restore(); };
  const kpop = (ctx, x, y, k, fn) => { if (k <= 0.01) return; ctx.save(); ctx.translate(x, y); ctx.scale(k, k); fn(); ctx.restore(); };

  // ---------- subject drawings ----------
  // the stomach: J-shaped bag with the oesophagus on top-left and the pylorus on the right
  const stomPath = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(-70, -118);
    ctx.bezierCurveTo(-175, -105, -185, 70, -70, 118);
    ctx.bezierCurveTo(20, 158, 120, 128, 160, 66);
    ctx.lineTo(205, 52); ctx.lineTo(196, 14);
    ctx.bezierCurveTo(140, 36, 70, 40, 46, 4);
    ctx.bezierCurveTo(22, -36, 40, -112, -18, -122);
    ctx.closePath();
  };
  const stomach = (ctx, x, y, s, t, o = {}) => {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    const col = o.col || PAL.stom;
    longShadow(ctx, (c) => { ctx.fillStyle = c || col; rr(ctx, -72, -230, 52, 130, 24); ctx.fill(); stomPath(ctx); ctx.fill(); }, o.sh ?? 16);
    // inner lining
    ctx.save(); stomPath(ctx); ctx.clip();
    ctx.fillStyle = H.rgba(H.mix(col, '#ffffff', 0.25)); ctx.save(); ctx.translate(4, 6); ctx.scale(0.86, 0.84); stomPath(ctx); ctx.fill(); ctx.restore();
    // folds (rugae)
    ctx.strokeStyle = H.rgba(H.mix(col, '#ffffff', 0.45)); ctx.lineWidth = 6; ctx.lineCap = 'round';
    for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.moveTo(-120 + i * 8, -60 + i * 34); ctx.bezierCurveTo(-60, -80 + i * 34, 0, -30 + i * 30, 60 + i * 14, -10 + i * 22); ctx.stroke(); }
    const acid = o.acid ?? 0;
    if (acid > 0) {
      const lvl = 130 - acid * 200;
      ctx.fillStyle = o.acidCol || PAL.acid; ctx.beginPath(); ctx.moveTo(-220, 220);
      for (let xx = -220; xx <= 230; xx += 10) ctx.lineTo(xx, lvl + Math.sin(xx * 0.05 + t * 3) * 6);
      ctx.lineTo(230, 220); ctx.closePath(); ctx.fill();
      const br = H.rng(9); for (let i = 0; i < 14; i++) { const bx = -140 + br() * 300, sp = 30 + br() * 40, ph0 = br() * 10; const by = lvl + 120 - ((t * sp + ph0 * 20) % 130); if (by > lvl) circle(ctx, bx, by, 4 + br() * 6, 'rgba(255,255,255,0.55)'); }
    }
    if (o.inside) o.inside(ctx);
    ctx.restore();
    if (o.face) { const fy = -20, bl = (Math.sin(t * 1.3) > 0.97) ? 0.15 : 1; ctx.fillStyle = PAL.ink; ctx.save(); ctx.translate(-75, fy); ctx.scale(1, bl); circle(ctx, 0, 0, 9, PAL.ink); ctx.restore(); ctx.save(); ctx.translate(-25, fy - 4); ctx.scale(1, bl); circle(ctx, 0, 0, 9, PAL.ink); ctx.restore();
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); if (o.face === 'worry') { ctx.arc(-50, 30, 18, Math.PI * 1.15, Math.PI * 1.85); } else ctx.arc(-50, 6, 20, Math.PI * 0.2, Math.PI * 0.8); ctx.stroke();
      circle(ctx, -100, 12, 9, 'rgba(255,90,120,0.4)'); circle(ctx, 0, 6, 9, 'rgba(255,90,120,0.4)'); }
    ctx.restore();
  };
  // a row of tall stomach-lining cells (cross-section). o.hurt: array of indices drawn darker; o.gap: px between cells
  const cells = (ctx, x0, y0, n, cw, ch, o = {}) => {
    for (let i = 0; i < n; i++) {
      const x = x0 + i * (cw + (o.gap ?? 4)), yo = o.yo ? o.yo(i) : 0, k = o.k ? o.k(i) : 1;
      if (k <= 0.01) continue;
      ctx.save(); ctx.translate(x + cw / 2, y0 + ch + yo); ctx.scale(1, k); ctx.translate(-cw / 2, -ch);
      const c = o.col ? o.col(i) : PAL.lining;
      ctx.fillStyle = c; rr(ctx, 0, 0, cw, ch, 14); ctx.fill();
      circle(ctx, cw / 2, ch * 0.66, cw * 0.22, o.nuc || '#c0567a');
      if (o.face && o.face(i)) { const f = o.face(i); circle(ctx, cw * 0.33, ch * 0.3, 3.5, PAL.ink); circle(ctx, cw * 0.67, ch * 0.3, 3.5, PAL.ink); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.beginPath(); if (f === 'sad') ctx.arc(cw / 2, ch * 0.44, 7, Math.PI * 1.15, Math.PI * 1.85); else ctx.arc(cw / 2, ch * 0.34, 7, Math.PI * 0.2, Math.PI * 0.8); ctx.stroke(); }
      ctx.restore();
    }
  };
  // acid ions (H+) and bicarbonate (HCO3-) particles
  const hion = (ctx, x, y, r = 16, a = 1) => { if (a <= 0.01) return; ctx.save(); ctx.globalAlpha = a; circle(ctx, x, y, r, PAL.red); text(ctx, 'H+', x, y + 1, r * 0.95, PAL.white); ctx.restore(); };
  const bion = (ctx, x, y, r = 14, a = 1) => { if (a <= 0.01) return; ctx.save(); ctx.globalAlpha = a; circle(ctx, x, y, r, PAL.bicarb); ctx.fillStyle = PAL.white; ctx.fillRect(x - r * 0.45, y - 2, r * 0.9, 4); ctx.restore(); };
  // food
  const steak = (ctx, x, y, s, r = 0) => { ctx.save(); ctx.translate(x, y); ctx.rotate(r); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || '#b5413c'; ctx.beginPath(); ctx.ellipse(0, 0, 70, 46, 0.2, 0, Math.PI * 2); ctx.fill(); }, 10); ctx.strokeStyle = '#ffe0d0'; ctx.lineWidth = 7; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-52, -14); ctx.bezierCurveTo(-20, -30, 0, 10, 50, -6); ctx.stroke(); ctx.beginPath(); ctx.moveTo(-30, 22); ctx.bezierCurveTo(-5, 10, 15, 34, 40, 20); ctx.stroke(); ctx.restore(); };
  const cheese = (ctx, x, y, s, r = 0) => { ctx.save(); ctx.translate(x, y); ctx.rotate(r); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || '#ffc93c'; ctx.beginPath(); ctx.moveTo(-70, 40); ctx.lineTo(70, 40); ctx.lineTo(60, -40); ctx.closePath(); ctx.fill(); }, 10); circle(ctx, 20, 10, 10, '#e9a91f'); circle(ctx, 46, -12, 7, '#e9a91f'); circle(ctx, -18, 28, 6, '#e9a91f'); ctx.restore(); };
  const carrot = (ctx, x, y, s, r = 0) => { ctx.save(); ctx.translate(x, y); ctx.rotate(r); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || '#ff8a2a'; ctx.beginPath(); ctx.moveTo(-20, -60); ctx.quadraticCurveTo(0, -70, 20, -60); ctx.lineTo(0, 70); ctx.closePath(); ctx.fill(); }, 10); ctx.fillStyle = '#5cbf4a'; [-12, 0, 12].forEach((dx) => { ctx.beginPath(); ctx.ellipse(dx, -78, 7, 22, dx * 0.03, 0, Math.PI * 2); ctx.fill(); }); ctx.strokeStyle = '#e06f15'; ctx.lineWidth = 4; [-30, -5, 20].forEach((yy) => { ctx.beginPath(); ctx.moveTo(-10, yy); ctx.lineTo(4, yy); ctx.stroke(); }); ctx.restore(); };
  // metal bolt / nut
  const bolt = (ctx, x, y, s, eat = 0) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); const k = 1 - eat * 0.7; longShadow(ctx, (c) => { ctx.fillStyle = c || '#b9c2d4'; ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + Math.PI / 6, rr0 = 60 * (1 - eat * 0.25 * (1 + Math.sin(i * 3))); ctx.lineTo(Math.cos(a) * rr0, Math.sin(a) * rr0); } ctx.closePath(); ctx.fill(); }, 10); circle(ctx, 0, 0, 26 * k + 8, '#7d879c'); ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(-40, -8, 24, 6); ctx.restore(); };
  const person = (ctx, x, y, s, col, o = {}) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || col; rr(ctx, -110, -120, 220, 360, 90); ctx.fill(); circle(ctx, 0, -210, 80, c || PAL.skin); }, 16);
    circle(ctx, -26, -215, 8, PAL.ink); circle(ctx, 26, -215, 8, PAL.ink); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath(); if (o.worry) ctx.arc(0, -170, 18, Math.PI * 1.15, Math.PI * 1.85); else ctx.arc(0, -195, 22, Math.PI * 0.2, Math.PI * 0.8); ctx.stroke();
    ctx.fillStyle = '#3b2a20'; ctx.beginPath(); ctx.arc(0, -225, 82, Math.PI * 1.05, Math.PI * 1.95); ctx.fill();
    ctx.restore(); };
  // chapter label in the top-left corner during a chapter
  let CH = [];
  const chapterTag = (ctx, t) => { let c = null, last = null; for (const x of CH) { if (t >= x.t - 0.4) last = x; if (t >= x.t + 2.4) c = x; } if (!c || last !== c) return; const k = EO(t, c.t + 2.4, c.t + 2.9); ctx.save(); ctx.globalAlpha = k; pill(ctx, `${c.n} · ${c.title}`, 30 + measure(ctx, `${c.n} · ${c.title}`, 20) / 2 + 14, 34, { size: 20, bg: PAL.ink, col: PAL.cream, sh: 6 }); ctx.restore(); };
  const chapterCard = (n, title, bg, fg, t0, sub) => (ctx, t) => {
    sky(ctx, bg, H.rgba(H.mix(bg, '#000000', 0.18)));
    dots(ctx, n * 11, 14, PAL.white, 0.18, t);
    const k = pop(t, t0);
    ctx.save(); ctx.translate(W / 2, 250); ctx.scale(k, k); longShadow(ctx, (c) => circle(ctx, 0, 0, 80, c || PAL.cream), 18); text(ctx, String(n), 0, 6, 96, bg, 700); ctx.restore();
    big(ctx, title, W / 2, 430, 84, fg, pop(t, t0 + 0.2), 16);
    if (sub) pill(ctx, sub, W / 2, 540, { k: pop(t, t0 + 0.5), size: 30, bg: PAL.ink, col: PAL.cream });
  };
  const SC = [];
  const add = (from, tr, draw, sfx, cam) => SC.push({ from, tr, draw, sfx, cam });

  // ================= INTRO =================
  // S1 hook: a stomach full of bubbling acid; a metal nut drops in and dissolves
  add(0, 'cut', (ctx, t) => {
    sky(ctx, '#2d2a6e', '#5b3fa0'); dots(ctx, 3, 18, '#ffffff', 0.08, t);
    const fill = EO(t, T(0, 'acid') - 0.2, T(0, 'acid') + 0.8);
    stomach(ctx, 560, 400, 1.55, t, { acid: 0.15 + 0.45 * fill, sh: 18, inside: (c) => {
      const d0 = T(0, 'dissolve') - 0.5, fy = H.lerp(-260, 40, EO(t, d0, d0 + 0.7)), eat = EO(t, T(0, 'dissolve'), T(0, 'metal') + 1.2);
      if (t > d0 - 0.2) { bolt(c, -30, fy, 0.7 * (1 - eat * 0.85), eat); for (let i = 0; i < 6; i++) { const u = (t * 1.3 + i / 6) % 1; if (eat > 0.05 && eat < 0.98) circle(c, -30 + Math.sin(i * 2.3) * 40, fy - u * 90, 5 + i % 3 * 2, 'rgba(255,255,255,0.7)'); } }
    } });
    big(ctx, 'STOMACH ACID', 1010, 170, 64, PAL.acid, pop(t, T(0, 'acid') - 0.15), 12);
    pill(ctx, 'DISSOLVES METAL', 1010, 290, { k: pop(t, T(0, 'metal') - 0.15) * bump(t, T(0, 'metal')), bg: PAL.yellow, size: 40 });
  }, (k) => {
    k.play('whoosh', 0.05, { dur: 0.5, gain: 0.5 }); k.play('bubble', T(0, 'acid'), { gain: 0.5, minor: true });
    k.play('pop', T(0, 'acid') - 0.15, { f: 520, gain: 0.8 }); k.play('swish', T(0, 'dissolve') - 0.5, { gain: 0.4, minor: true });
    k.play('impact', T(0, 'metal'), { gain: 0.6 }); k.play('buzz', T(0, 'metal') + 0.1, { f: 140, dur: 0.5, gain: 0.25, minor: true });
  });

  // S2: so why doesn't it dissolve YOU? a person with a glowing stomach; the wall rebuilds brick by brick
  add(1, 'circle', (ctx, t) => {
    sky(ctx, '#ffd9a8', '#ffb37a'); ground(ctx, 610, '#f09a5c');
    const wk = EO(t, T(1, 'you') - 0.2, T(1, 'you') + 0.3);
    person(ctx, 380, 470, 0.95, PAL.blue, { worry: t < T(2, 'secret') });
    stomach(ctx, 395, 470, 0.42 * (0.8 + 0.2 * wk), t, { acid: 0.5, sh: 6 });
    big(ctx, 'WHY NOT YOU?', 380, 110, 72, PAL.ink, pop(t, T(1, 'why') - 0.15) * bump(t, T(1, 'you')));
    // wall that rebuilds itself
    const w0 = T(2, 'wall') - 0.15;
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
      const i = r * 4 + c, tk = w0 + 0.12 * i + (i % 5 === 2 ? 0 : 0), rebuilt = T(2, 'rebuilds') + 0.1 * i;
      const k = pop(t, tk), fresh = EO(t, rebuilt, rebuilt + 0.3);
      kpop(ctx, 830 + c * 100 + (r % 2) * 50, 520 - r * 70, k, () => { longShadow(ctx, (cc) => { ctx.fillStyle = cc || H.rgba(H.mix('#e85d7d', '#ffb0bf', fresh)); rr(ctx, -46, -30, 92, 60, 14); ctx.fill(); }, 8); });
    }
    pill(ctx, 'REBUILDS ITSELF', 1000, 160, { k: pop(t, T(2, 'rebuilds') - 0.15), bg: PAL.teal, col: PAL.white, size: 36 });
    pill(ctx, 'EVERY FEW DAYS', 1000, 250, { k: pop(t, T(2, 'few') - 0.15) * bump(t, T(2, 'days')), bg: PAL.cream, size: 34 });
  }, (k) => {
    k.play('pop', T(1, 'why') - 0.15, { f: 600, gain: 0.8 }); k.play('impact', T(1, 'you'), { gain: 0.5 });
    for (let i = 0; i < 16; i++) k.play('tock', T(2, 'wall') - 0.15 + 0.12 * i, { f: 380 + (i % 4) * 40, gain: 0.3, minor: true });
    k.play('ding', T(2, 'rebuilds') - 0.1, { f: 'E5', gain: 0.4 }); k.play('pop', T(2, 'few') - 0.15, { f: 700, gain: 0.6, minor: true });
  });

  // S3: steak, cheese and crunchy vegetables fall in; the wall is untouched
  add(3, 'slide', (ctx, t) => {
    sky(ctx, '#bff0e0', '#8fdcc6'); dots(ctx, 5, 12, '#ffffff', 0.2, t);
    const items = [['steak', T(3, 'steak')], ['cheese', T(3, 'cheese')], ['carrot', T(3, 'crunchy')]];
    stomach(ctx, 640, 440, 1.3, t, { acid: 0.35, inside: (c) => {
      items.forEach(([n, tk], i) => { const fy = H.lerp(-300, 40 - i * 10, EO(t, tk - 0.2, tk + 0.6)), sz = 0.55 * (1 - 0.5 * EO(t, tk + 1.5, tk + 4)); const fn = n === 'steak' ? steak : n === 'cheese' ? cheese : carrot; if (t > tk - 0.25) fn(c, -90 + i * 80, fy, sz, Math.sin(t + i) * 0.3); });
    } });
    items.forEach(([n, tk], i) => pill(ctx, n === 'carrot' ? 'VEGGIES' : n.toUpperCase(), 180 + i * 0 , 200 + i * 110, { k: pop(t, tk - 0.15), bg: [PAL.red, PAL.yellow, PAL.orange][i], col: i === 1 ? PAL.ink : PAL.white, size: 36 }));
    const nk = pop(t, T(4, 'never') - 0.15);
    pill(ctx, 'WALL: UNTOUCHED', 1060, 200, { k: nk * bump(t, T(4, 'walls')), bg: PAL.teal, col: PAL.white, size: 34 });
    check(ctx, 1060, 300, 1.6, PAL.green, pop(t, T(4, 'walls') - 0.1));
  }, (k) => {
    k.play('pop', T(3, 'steak') - 0.15, { f: 480, gain: 0.7 }); k.play('pop', T(3, 'cheese') - 0.15, { f: 560, gain: 0.7 }); k.play('pop', T(3, 'crunchy') - 0.15, { f: 640, gain: 0.7 });
    k.play('bubble', T(3, 'steak') + 0.5, { gain: 0.3, minor: true });
    k.play('pop', T(4, 'never') - 0.15, { f: 600, gain: 0.6 }); k.play('ding', T(4, 'walls'), { f: 'G5', gain: 0.4 });
  });

  // ================= CHAPTER 1: THE MYSTERY =================
  add(5, 'iris', chapterCard(1, 'THE MYSTERY', PAL.purple, PAL.cream, PS(5) - 0.1, 'what does a stomach even do?'), (k) => { k.play('impact', PS(5) - 0.1, { gain: 0.5 }); k.play('pop', PS(5) + 0.1, { f: 520, gain: 0.8 }); k.play('pop', PS(5) + 0.4, { f: 700, gain: 0.5, minor: true }); });

  // S5: some thought it ground food like a mill
  const millstone = (ctx, x, y, s, rot) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    longShadow(ctx, (c) => { ctx.fillStyle = c || '#a7a29a'; ctx.beginPath(); ctx.ellipse(0, 40, 200, 60, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillRect(-200, -10, 400, 50); ctx.beginPath(); ctx.ellipse(0, -10, 200, 60, 0, 0, Math.PI * 2); ctx.fill(); }, 14);
    ctx.fillStyle = '#c9c4bb'; ctx.beginPath(); ctx.ellipse(0, -10, 200, 60, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#a7a29a'; ctx.lineWidth = 6; for (let i = 0; i < 8; i++) { const a = rot + i / 8 * Math.PI * 2; ctx.beginPath(); ctx.moveTo(Math.cos(a) * 30, -10 + Math.sin(a) * 9); ctx.lineTo(Math.cos(a) * 180, -10 + Math.sin(a) * 54); ctx.stroke(); }
    circle(ctx, 0, -10, 26, '#7a7468'); ctx.save(); ctx.translate(0, -10); ctx.rotate(rot); ctx.fillStyle = PAL.brown; rr(ctx, -10, -120, 20, 120, 8); ctx.fill(); ctx.restore();
    ctx.restore(); };
  add(6, 'circle', (ctx, t) => {
    sky(ctx, '#ffe6a8', '#f6c56b'); ground(ctx, 560, '#d9a54a');
    millstone(ctx, 640, 470, 1.2, t * 1.4);
    const cr = H.rng(6); for (let i = 0; i < 18; i++) { const u = (t * 0.6 + cr()) % 1, a = cr() * Math.PI * 2; circle(ctx, 640 + Math.cos(a) * (230 + u * 120), 470 + Math.sin(a) * (40 + u * 30) + 40, 6 + cr() * 6, ['#b5413c', '#ffc93c', '#ff8a2a'][i % 3]); }
    pill(ctx, 'A GRINDER?', 640, 130, { k: pop(t, T(6, 'ground') - 0.15) * bump(t, T(6, 'mill')), bg: PAL.ink, col: PAL.cream, size: 50 });
    big(ctx, '?', 1080, 220, 160, PAL.orange, pop(t, T(6, 'mill') - 0.1), 14);
  }, (k) => { k.play('buzz', T(6, 'ground'), { f: 70, dur: 1.4, gain: 0.25, minor: true }); k.play('pop', T(6, 'ground') - 0.15, { f: 500, gain: 0.8 }); k.play('pop', T(6, 'mill') - 0.1, { f: 760, gain: 0.6 }); });

  // S6: the 1700s, Lazzaro Spallanzani: a sponge on a string pulls up stomach juice
  const sponge = (ctx, x, y, s, wet = 0) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || H.rgba(H.mix('#ffd84a', PAL.acid, wet)); rr(ctx, -50, -36, 100, 72, 20); ctx.fill(); }, 10); const sr = H.rng(13); for (let i = 0; i < 10; i++) circle(ctx, -36 + sr() * 72, -24 + sr() * 48, 4 + sr() * 5, H.rgba(H.mix('#e0b52a', PAL.acid2, wet))); ctx.restore(); };
  add(7, 'slide', (ctx, t) => {
    sky(ctx, '#d7ecff', '#a9d3ff'); ground(ctx, 600, '#7fb2e5');
    // scientist (no likeness: a generic 1700s figure, wig + coat)
    const sk = pop(t, T(7, 'scientist') - 0.2);
    kpop(ctx, 300, 480, sk, () => { longShadow(ctx, (c) => { ctx.fillStyle = c || '#3d4a8a'; rr(ctx, -100, -60, 200, 260, 70); ctx.fill(); circle(ctx, 0, -130, 70, c || PAL.skin); }, 14); ctx.fillStyle = '#f2f2f2'; [[-62, -150], [62, -150], [-66, -110], [66, -110]].forEach(([a, b]) => circle(ctx, a, b, 26, '#f2f2f2')); ctx.beginPath(); ctx.arc(0, -150, 72, Math.PI * 1.05, Math.PI * 1.95); ctx.fill(); circle(ctx, -22, -130, 7, PAL.ink); circle(ctx, 22, -130, 7, PAL.ink); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, -110, 16, 0.2 * Math.PI, 0.8 * Math.PI); ctx.stroke(); ctx.fillStyle = PAL.white; ctx.beginPath(); ctx.moveTo(-20, -60); ctx.lineTo(20, -60); ctx.lineTo(0, -20); ctx.fill(); });
    pill(ctx, '1700s', 300, 110, { k: pop(t, T(7, '1700s') - 0.15), bg: PAL.yellow, size: 48 });
    pill(ctx, 'LAZZARO SPALLANZANI', 300, 640, { k: pop(t, T(7, 'spallanzani') - 0.3), bg: PAL.ink, col: PAL.cream, size: 30 });
    // the string goes down, the sponge comes back up wet
    const down = EO(t, T(8, 'sponge') - 0.3, T(8, 'sponge') + 0.5), up = EI(t, T(8, 'string'), T(8, 'string') + 1.2);
    const sy = 180 + down * 300 - up * 260;
    if (t > T(8, 'pulled') - 0.3) {
      ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(820, 60); ctx.lineTo(820, sy - 30); ctx.stroke();
      // a small stomach outline below for where the juice is
      stomach(ctx, 860, 560, 0.55, t, { acid: 0.6, sh: 8 });
      sponge(ctx, 820, sy, 0.9, up > 0.3 ? 1 : down);
      if (up > 0.4) for (let i = 0; i < 4; i++) { const u = (t * 1.5 + i / 4) % 1; circle(ctx, 800 + i * 14, sy + 40 + u * 60, 5, PAL.acid); }
    }
    pill(ctx, 'SPONGE ON A STRING', 1050, 140, { k: pop(t, T(8, 'sponge') - 0.15), bg: PAL.acid, size: 30 });
  }, (k) => { k.play('pop', T(7, '1700s') - 0.15, { f: 560, gain: 0.8 }); k.play('pop', T(7, 'scientist') - 0.2, { f: 460, gain: 0.5, minor: true }); k.play('swish', T(8, 'sponge') - 0.3, { gain: 0.5 }); k.play('bubble', T(8, 'sponge') + 0.4, { gain: 0.4, minor: true }); k.play('swish', T(8, 'string'), { gain: 0.5 }); k.play('pop', T(8, 'sponge') - 0.15, { f: 680, gain: 0.6, minor: true }); });

  // S7: the juice dissolves meat in a jar, outside the body
  const jar = (ctx, x, y, s, t, fill, inside) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || 'rgba(220,240,255,0.95)'; rr(ctx, -110, -150, 220, 300, 40); ctx.fill(); }, 14);
    ctx.save(); rr(ctx, -100, -140, 200, 280, 34); ctx.clip(); const lvl = 140 - fill * 220; ctx.fillStyle = PAL.acid; ctx.beginPath(); ctx.moveTo(-120, 160); for (let xx = -120; xx <= 120; xx += 10) ctx.lineTo(xx, lvl + Math.sin(xx * 0.06 + t * 3) * 5); ctx.lineTo(120, 160); ctx.fill(); if (inside) inside(ctx); ctx.restore();
    ctx.fillStyle = PAL.brown; rr(ctx, -120, -175, 240, 40, 14); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,0.5)'; rr(ctx, -84, -110, 18, 200, 9); ctx.fill(); ctx.restore(); };
  add(9, 'circle', (ctx, t) => {
    sky(ctx, '#fff0f3', '#ffd0db'); ground(ctx, 600, '#f3a9bb');
    const melt = EO(t, T(9, 'dissolve'), PE(10) + 0.6);
    jar(ctx, 640, 420, 1.2, t, 0.75, (c) => { steak(c, 0, 40 + melt * 20, 0.9 * (1 - melt * 0.75), Math.sin(t) * 0.1); });
    pill(ctx, 'MEAT DISSOLVES', 640, 110, { k: pop(t, T(9, 'dissolve') - 0.15) * bump(t, T(9, 'meat')), bg: PAL.red, col: PAL.white, size: 44 });
    pill(ctx, 'OUTSIDE THE BODY', 1040, 380, { k: pop(t, T(10, 'outside') - 0.15), bg: PAL.ink, col: PAL.cream, size: 32 });
    check(ctx, 1040, 470, 1.4, PAL.green, pop(t, T(10, 'body') - 0.1));
  }, (k) => { k.play('bubble', T(9, 'dissolve'), { gain: 0.5 }); k.play('pop', T(9, 'dissolve') - 0.15, { f: 520, gain: 0.8 }); k.play('pop', T(10, 'outside') - 0.15, { f: 640, gain: 0.6 }); k.play('ding', T(10, 'body'), { f: 'E5', gain: 0.4 }); });

  // S8: not a grinder, a chemistry lab
  const flask = (ctx, x, y, s, t, col = PAL.acid) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || 'rgba(230,245,255,0.95)'; ctx.beginPath(); ctx.moveTo(-26, -120); ctx.lineTo(26, -120); ctx.lineTo(26, -40); ctx.lineTo(100, 90); ctx.quadraticCurveTo(104, 110, 80, 110); ctx.lineTo(-80, 110); ctx.quadraticCurveTo(-104, 110, -100, 90); ctx.lineTo(-26, -40); ctx.closePath(); ctx.fill(); }, 12);
    ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(-62, 30); ctx.lineTo(62, 30); ctx.lineTo(92, 92); ctx.quadraticCurveTo(94, 104, 78, 104); ctx.lineTo(-78, 104); ctx.quadraticCurveTo(-94, 104, -92, 92); ctx.closePath(); ctx.fill();
    for (let i = 0; i < 5; i++) { const u = (t * 0.8 + i / 5) % 1; circle(ctx, -30 + i * 15, 90 - u * 200, 6 + (i % 2) * 4, 'rgba(255,255,255,0.7)'); } ctx.restore(); };
  add(11, 'slide', (ctx, t) => {
    sky(ctx, '#d9f7ff', '#9fe2f5');
    const gk = pop(t, T(11, 'grinder') - 0.2);
    kpop(ctx, 360, 380, gk, () => millstone(ctx, 0, 0, 0.7, t));
    cross(ctx, 360, 380, 2.2, PAL.red, pop(t, T(11, 'grinder') + 0.1));
    const lk = pop(t, T(12, 'chemistry') - 0.2);
    kpop(ctx, 900, 380, lk, () => { stomach(ctx, 0, 0, 0.95, t, { acid: 0.45, sh: 10 }); flask(ctx, 140, -120, 0.6, t); flask(ctx, -150, 120, 0.45, t + 1, PAL.pink); });
    big(ctx, 'NOT A GRINDER', 360, 130, 54, PAL.ink, pop(t, T(11, 'wasnt') - 0.15), 10);
    big(ctx, 'A CHEMISTRY LAB', 900, 640, 64, PAL.teal, pop(t, T(12, 'lab') - 0.15) * bump(t, T(12, 'lab')), 12);
  }, (k) => { k.play('error', T(11, 'grinder') + 0.1, { f: 'A3', gain: 0.35 }); k.play('pop', T(11, 'wasnt') - 0.15, { f: 480, gain: 0.6 }); k.play('bubble', T(12, 'chemistry'), { gain: 0.5 }); k.play('ding', T(12, 'lab'), { f: 'C6', gain: 0.45 }); });

  // S9: Claude Bernard notices the wall behaves like porcelain
  add(13, 'circle', (ctx, t) => {
    sky(ctx, '#1f3b6e', '#2e5aa0'); dots(ctx, 21, 14, '#ffffff', 0.07, t);
    pill(ctx, 'CLAUDE BERNARD', 300, 120, { k: pop(t, T(13, 'claude') - 0.2), bg: PAL.cream, size: 36 });
    pill(ctx, 'FRANCE · 1800s', 300, 200, { k: pop(t, T(13, 'french') - 0.15), bg: PAL.blue, col: PAL.white, size: 28 });
    // magnifier over a stomach that turns porcelain-white with blue pattern
    const pk = EO(t, T(14, 'porcelain') - 0.4, T(14, 'porcelain') + 0.3);
    stomach(ctx, 760, 430, 1.25, t, { col: H.rgba(H.mix(PAL.stom, '#f4f7ff', pk)), acid: 0.4, sh: 14, inside: (c) => { if (pk > 0.05) { c.save(); c.globalAlpha = pk; c.strokeStyle = '#3c6fd1'; c.lineWidth = 5; for (let i = 0; i < 4; i++) { c.beginPath(); c.arc(-90 + i * 70, -40 + (i % 2) * 40, 22, 0, Math.PI * 2); c.stroke(); c.beginPath(); c.moveTo(-90 + i * 70 - 22, -40 + (i % 2) * 40); c.quadraticCurveTo(-90 + i * 70, -80 + (i % 2) * 40, -90 + i * 70 + 22, -40 + (i % 2) * 40); c.stroke(); } c.restore(); } } });
    const mx = 520 + Math.sin(t * 0.8) * 60, mk = pop(t, T(13, 'noticed') - 0.2);
    kpop(ctx, mx, 330, mk, () => { ctx.strokeStyle = PAL.brown; ctx.lineWidth = 22; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(60, 60); ctx.lineTo(140, 140); ctx.stroke(); ctx.lineWidth = 16; ctx.strokeStyle = PAL.yellow; ctx.beginPath(); ctx.arc(0, 0, 80, 0, Math.PI * 2); ctx.stroke(); ctx.fillStyle = 'rgba(255,255,255,0.18)'; ctx.fill(); });
    big(ctx, 'LIKE PORCELAIN', 400, 600, 64, PAL.cream, pop(t, T(14, 'porcelain') - 0.15) * bump(t, T(14, 'porcelain')), 12);
  }, (k) => { k.play('pop', T(13, 'claude') - 0.2, { f: 520, gain: 0.7 }); k.play('pop', T(13, 'french') - 0.15, { f: 640, gain: 0.5, minor: true }); k.play('swish', T(13, 'noticed') - 0.2, { gain: 0.4, minor: true }); k.play('ding', T(14, 'porcelain'), { f: 'A5', gain: 0.5 }); k.play('tick', T(14, 'porcelain') + 0.2, { f: 5200, gain: 0.3, minor: true }); });

  // ================= CHAPTER 2: THE ACID LAB =================
  add(15, 'iris', chapterCard(2, 'THE ACID LAB', PAL.teal, PAL.cream, PS(15) - 0.1, "what's inside?"), (k) => { k.play('impact', PS(15) - 0.1, { gain: 0.5 }); k.play('pop', PS(15) + 0.1, { f: 520, gain: 0.8 }); k.play('pop', PS(15) + 0.4, { f: 700, gain: 0.5, minor: true }); });

  // S11: zoom into the lining: millions of tiny pits (camera dives in)
  const lining = (ctx, y0, t, o = {}) => {
    // a wavy pink surface dotted with pit openings
    ctx.fillStyle = o.col || PAL.lining; ctx.beginPath(); ctx.moveTo(-200, HH + 200); for (let x = -200; x <= W + 200; x += 20) ctx.lineTo(x, y0 + Math.sin(x * 0.01 + 1) * 14); ctx.lineTo(W + 200, HH + 200); ctx.fill();
  };
  add(16, 'circle', (ctx, t) => {
    sky(ctx, '#ffd6de', '#ffb3c2');
    const z = 1 + 1.6 * EI(t, T(16, 'millions') - 0.5, T(16, 'pits') + 0.6);
    ctx.save(); ctx.translate(640, 380); ctx.scale(z, z); ctx.translate(-640, -380);
    ctx.fillStyle = PAL.lining; rr(ctx, 90, 90, 1100, 560, 60); ctx.fill();
    const sr = H.rng(16); const pk = EO(t, T(16, 'covered') - 0.2, T(16, 'pits') + 0.2);
    for (let i = 0; i < 160; i++) { const x = 130 + (i % 20) * 54 + ((i / 20 | 0) % 2) * 27 + sr() * 8, y = 130 + (i / 20 | 0) * 64 + sr() * 8; if (sr() < pk) { ctx.fillStyle = PAL.stom2; ctx.beginPath(); ctx.ellipse(x, y, 13, 9, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = '#b8385a'; ctx.beginPath(); ctx.ellipse(x + 2, y + 2, 7, 4.5, 0, 0, Math.PI * 2); ctx.fill(); } }
    ctx.restore();
    pill(ctx, 'STOMACH LINING', 640, 70, { k: pop(t, T(16, 'lining') - 0.15), bg: PAL.ink, col: PAL.cream, size: 34 });
    big(ctx, 'MILLIONS OF PITS', 640, 640, 70, PAL.white, pop(t, T(16, 'pits') - 0.15) * bump(t, T(16, 'pits')), 14);
  }, (k) => { k.play('pop', T(16, 'lining') - 0.15, { f: 520, gain: 0.7 }); k.play('riser', T(16, 'millions') - 0.5, { dur: 1.2, gain: 0.35 }); for (let i = 0; i < 10; i++) k.play('tick', T(16, 'covered') + i * 0.12, { f: 3000 + i * 150, gain: 0.25, minor: true }); k.play('impact', T(16, 'pits'), { gain: 0.5 }); });

  // S12: inside a pit, parietal cells pump out hydrochloric acid
  const pitScene = (ctx, t, o = {}) => {
    sky(ctx, o.bg0 || '#ffe3e8', o.bg1 || '#ffc7d2');
    // pit: two walls of cells forming a U
    const cx = 640;
    ctx.fillStyle = '#f7a0b4'; ctx.beginPath(); ctx.moveTo(-200, 180); ctx.lineTo(cx - 150, 180); ctx.lineTo(cx - 150, 600); ctx.quadraticCurveTo(cx, 720, cx + 150, 600); ctx.lineTo(cx + 150, 180); ctx.lineTo(W + 200, 180); ctx.lineTo(W + 200, HH + 200); ctx.lineTo(-200, HH + 200); ctx.fill();
    ctx.fillStyle = '#ffd9e1'; ctx.beginPath(); ctx.moveTo(cx - 80, 180); ctx.lineTo(cx - 80, 590); ctx.quadraticCurveTo(cx, 650, cx + 80, 590); ctx.lineTo(cx + 80, 180); ctx.fill();
  };
  const parietal = (ctx, x, y, s, t, on = 1) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || '#ff9a5a'; ctx.beginPath(); ctx.moveTo(0, -60); ctx.lineTo(55, -30); ctx.lineTo(55, 30); ctx.lineTo(0, 60); ctx.lineTo(-55, 30); ctx.lineTo(-55, -30); ctx.closePath(); ctx.fill(); }, 8); circle(ctx, 0, 0, 18, '#c2552a'); ctx.restore(); };
  add(17, 'slide', (ctx, t) => {
    pitScene(ctx, t);
    const ck = (i) => pop(t, T(17, 'parietal') - 0.3 + i * 0.08);
    const pts = [[490, 330], [490, 450], [790, 330], [790, 450], [560, 590], [720, 590]];
    pts.forEach(([x, y], i) => kpop(ctx, x, y, ck(i), () => parietal(ctx, 0, 0, 1, t)));
    // acid ions stream up and out of the pit
    const a0 = T(18, 'pump') - 0.1;
    if (t > a0) { const ir = H.rng(18); for (let i = 0; i < 26; i++) { const sp = 90 + ir() * 80, off = ir() * 6, u = ((t - a0) * sp / 520 + off) % 1; const x = 640 + Math.sin(i * 1.7 + t * 2) * 50, y = 600 - u * 560; if ((t - a0) * sp > (1 - (off % 1)) * 0) hion(ctx, x, y, 15, H.clamp((t - a0) * 2) * (1 - ph(u, 0.85, 1))); } }
    pill(ctx, 'DEEP IN THE PITS', 260, 90, { k: pop(t, T(17, 'deep') - 0.15), bg: PAL.ink, col: PAL.cream, size: 30 });
    pill(ctx, 'PARIETAL CELLS', 1030, 300, { k: pop(t, T(17, 'parietal') - 0.15), bg: '#ff9a5a', col: PAL.white, size: 34 });
    big(ctx, 'HCl', 1030, 470, 120, PAL.red, pop(t, T(18, 'hydrochloric') - 0.15) * bump(t, T(18, 'acid')), 14);
    pill(ctx, 'HYDROCHLORIC ACID', 1030, 580, { k: pop(t, T(18, 'acid') - 0.1), bg: PAL.acid, size: 28 });
  }, (k) => { k.play('pop', T(17, 'deep') - 0.15, { f: 460, gain: 0.6 }); for (let i = 0; i < 6; i++) k.play('pop', T(17, 'parietal') - 0.3 + i * 0.08, { f: 500 + i * 60, gain: 0.35, minor: true }); k.play('riser', T(18, 'pump') - 0.2, { dur: 0.9, gain: 0.35 }); k.play('stamp', T(18, 'hydrochloric'), { gain: 0.55 }); });

  // S13: the pH scale: stomach juice 1.5-3.5, lemon juice compared
  add(19, 'circle', (ctx, t) => {
    sky(ctx, '#fffbe6', '#ffeeb0');
    const cols = ['#e8263a', '#f0442c', '#f86b26', '#fb9a23', '#ffc61e', '#e8e21f', '#a8d82a', '#4cc24a', '#28b48c', '#1fa5c4', '#2b7fd6', '#3a5cd0', '#4a3fc0', '#5a2fa8', '#6a2290'];
    const x0 = 140, wd = 1000 / 15, y0 = 330, gk = EO(t, T(19, 'ph') - 0.3, T(19, 'ph') + 0.6);
    for (let i = 0; i < 15; i++) { const k = H.clamp(gk * 15 - i); if (k <= 0) continue; ctx.save(); ctx.translate(x0 + i * wd + wd / 2, y0); ctx.scale(1, k); ctx.fillStyle = cols[i]; rr(ctx, -wd / 2 + 2, -50, wd - 4, 100, 12); ctx.fill(); ctx.restore(); text(ctx, String(i), x0 + i * wd + wd / 2, y0 + 80, 28, PAL.ink, 600); }
    pill(ctx, 'pH SCALE', 640, 120, { k: pop(t, T(19, 'ph') - 0.15), bg: PAL.ink, col: PAL.cream, size: 40 });
    text(ctx, 'ACID', x0 + 40, y0 - 90, 26, PAL.red, 700); text(ctx, 'NEUTRAL', x0 + 7.5 * wd, y0 - 90, 26, PAL.green, 700); text(ctx, 'BASE', x0 + 14 * wd, y0 - 90, 26, PAL.purple, 700);
    // stomach bracket 1.5..3.5
    const bk = EO(t, T(19, 'one') - 0.1, T(19, 'half2') + 0.2);
    if (bk > 0) { const a = x0 + 1.5 * wd, b = x0 + H.lerp(1.5, 3.5, bk) * wd; ctx.fillStyle = PAL.ink; rr(ctx, a, y0 + 120, b - a, 18, 9); ctx.fill(); }
    pill(ctx, 'STOMACH 1.5 – 3.5', x0 + 2.5 * wd + 60, y0 + 190, { k: pop(t, T(19, 'three') - 0.1), bg: PAL.stom, col: PAL.white, size: 34 });
    // lemon at ~2-2.5, pointer arrow on "lemon"
    const lk = pop(t, T(20, 'lemon') - 0.2);
    kpop(ctx, x0 + 2.3 * wd + 300, 560, lk, () => { longShadow(ctx, (c) => { ctx.fillStyle = c || '#ffe03a'; ctx.beginPath(); ctx.ellipse(0, 0, 70, 50, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(72, 0, 14, 10, 0, 0, Math.PI * 2); ctx.fill(); }, 10); });
    text(ctx, 'LEMON', x0 + 2.3 * wd + 300, 650, 30, PAL.ink, 700);
    const sk = pop(t, T(20, 'strongest') - 0.15);
    if (sk > 0.01) { const mx = x0 + 1.2 * wd; ctx.save(); ctx.globalAlpha = H.clamp(sk); arrow(ctx, mx, 170, mx, 255, PAL.red, 10, sk); ctx.restore(); pill(ctx, 'AT ITS STRONGEST', mx + 120, 190, { k: sk, bg: PAL.red, col: PAL.white, size: 26 }); }
  }, (k) => { k.play('pop', T(19, 'ph') - 0.15, { f: 500, gain: 0.7 }); for (let i = 0; i < 15; i++) k.play('tick', T(19, 'ph') - 0.3 + i * 0.06, { f: 2500 + i * 120, gain: 0.25, minor: true }); k.play('stamp', T(19, 'three'), { gain: 0.5 }); k.play('pop', T(20, 'strongest') - 0.15, { f: 700, gain: 0.6 }); k.play('pop', T(20, 'lemon') - 0.2, { f: 560, gain: 0.6 }); });

  // S14: strong enough to dissolve a piece of zinc
  add(21, 'slide', (ctx, t) => {
    sky(ctx, '#2a3550', '#3d4c72'); ground(ctx, 610, '#26304a');
    const d0 = T(21, 'dissolve') - 0.2, eat = EO(t, d0, PE(21) + 0.5);
    // a beaker with acid and a zinc chunk fizzing
    ctx.save(); ctx.translate(640, 420);
    longShadow(ctx, (c) => { ctx.fillStyle = c || 'rgba(220,240,255,0.9)'; rr(ctx, -170, -190, 340, 360, 30); ctx.fill(); }, 14);
    ctx.fillStyle = PAL.acid; rr(ctx, -158, -60, 316, 218, 24); ctx.fill();
    const zs = 1 - eat * 0.8; ctx.fillStyle = '#c3cbd8'; ctx.beginPath(); for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2, r0 = 70 * zs * (0.8 + 0.25 * Math.sin(i * 2.7 + eat * 4)); ctx.lineTo(Math.cos(a) * r0, 80 + Math.sin(a) * r0 * 0.7); } ctx.closePath(); ctx.fill();
    if (t > d0) for (let i = 0; i < 16; i++) { const u = ((t - d0) * 0.9 + i / 16) % 1; circle(ctx, Math.sin(i * 2.1) * 60 * zs, 70 - u * 140, 4 + (i % 3) * 3, 'rgba(255,255,255,0.75)'); }
    ctx.restore();
    pill(ctx, 'ZINC', 640, 640, { k: pop(t, T(21, 'zinc') - 0.15) * bump(t, T(21, 'zinc')), bg: '#c3cbd8', size: 40 });
    big(ctx, 'DISSOLVES ZINC', 640, 110, 70, PAL.acid, pop(t, T(21, 'strong') - 0.15), 12);
  }, (k) => { k.play('pop', T(21, 'strong') - 0.15, { f: 520, gain: 0.8 }); k.play('bubble', T(21, 'dissolve'), { gain: 0.6 }); k.play('bubble', T(21, 'dissolve') + 0.6, { gain: 0.4 }); k.play('pop', T(21, 'zinc') - 0.15, { f: 680, gain: 0.6 }); });

  // S15: chief cells make pepsin, which chops proteins into little pieces
  const scissors = (ctx, x, y, s, open, o = {}) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    [-1, 1].forEach((sg) => { ctx.save(); ctx.rotate(sg * open * 0.5); longShadow(ctx, (c) => { ctx.fillStyle = c || (o.col || '#c9d2e3'); ctx.beginPath(); ctx.moveTo(0, -6 * sg); ctx.lineTo(120, -4 * sg); ctx.lineTo(120, 4 * sg); ctx.lineTo(0, 10 * sg); ctx.closePath(); ctx.fill(); ctx.beginPath(); ctx.arc(-40, 18 * sg, 22, 0, Math.PI * 2); ctx.fill(); }, 6); circle(ctx, -40, 18 * sg, 11, o.bg || '#fff'); ctx.restore(); });
    circle(ctx, 0, 0, 7, PAL.ink); ctx.restore(); };
  const protein = (ctx, x, y, n, t, cut = 0) => { for (let i = 0; i < n; i++) { const gapN = Math.floor(i / 3), sep = cut * gapN * 26; const px = x + i * 34 + sep - (cut * (n / 3) * 13), py = y + Math.sin(i * 0.9 + t * 2) * 14 + (cut > 0 ? Math.sin(gapN * 2 + t) * 20 * cut : 0); circle(ctx, px, py, 15, ['#ff7a3d', '#7a5cff', '#1fb6a6', '#ffd23f'][i % 4]); if (i < n - 1 && (i % 3 !== 2 || cut < 0.05)) { ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(px + 15, py); ctx.lineTo(px + 19, py); ctx.stroke(); } } };
  add(22, 'circle', (ctx, t) => {
    sky(ctx, '#e6f2ff', '#bcd9ff');
    const ck = pop(t, T(22, 'chief') - 0.2);
    kpop(ctx, 260, 380, ck, () => { longShadow(ctx, (c) => { ctx.fillStyle = c || '#7a5cff'; rr(ctx, -110, -150, 220, 300, 60); ctx.fill(); }, 14); circle(ctx, 0, 50, 40, '#4b33c4'); for (let i = 0; i < 6; i++) circle(ctx, -50 + (i % 3) * 50, -70 + (i / 3 | 0) * 50, 14, PAL.yellow); });
    pill(ctx, 'CHIEF CELLS', 260, 600, { k: pop(t, T(22, 'chief') - 0.1), bg: PAL.purple, col: PAL.white, size: 34 });
    const sk = pop(t, T(22, 'pepsin') - 0.2), open = Math.abs(Math.sin(t * 6)) * EO(t, T(23, 'chops') - 0.2, T(23, 'chops'));
    const sx = H.lerp(420, 720, EO(t, T(23, 'chops') - 0.2, T(23, 'pieces') + 0.2));
    protein(ctx, 640, 380, 12, t, EO(t, T(23, 'chops'), T(23, 'pieces') + 0.3));
    kpop(ctx, sx, 260, sk, () => scissors(ctx, 0, 0, 1, open));
    big(ctx, 'PEPSIN', 820, 130, 84, PAL.purple, pop(t, T(22, 'pepsin') - 0.15) * bump(t, T(22, 'pepsin')), 12);
    pill(ctx, 'CHOPS PROTEINS', 860, 600, { k: pop(t, T(23, 'proteins') - 0.15), bg: PAL.yellow, size: 34 });
  }, (k) => { k.play('pop', T(22, 'chief') - 0.2, { f: 480, gain: 0.7 }); k.play('impact', T(22, 'pepsin'), { gain: 0.5 }); for (let i = 0; i < 6; i++) k.play('click', T(23, 'chops') + i * 0.26, { gain: 0.45, minor: true }); k.play('pop', T(23, 'proteins') - 0.15, { f: 640, gain: 0.6 }); });

  // S16: the clever part: pepsin is made switched off (pepsinogen), only acid switches it on
  add(24, 'slide', (ctx, t) => {
    sky(ctx, '#2b2a5a', '#40387e'); dots(ctx, 24, 14, '#ffffff', 0.06, t);
    pill(ctx, 'THE CLEVER PART', 640, 90, { k: pop(t, T(24, 'clever') - 0.15) * bump(t, T(24, 'part')), bg: PAL.yellow, size: 40 });
    // a big on/off switch
    const on = EO(t, T(27, 'switch') - 0.15, T(27, 'on') + 0.1);
    const swk = pop(t, T(25, 'switched') - 0.25);
    kpop(ctx, 360, 380, swk, () => { longShadow(ctx, (c) => { ctx.fillStyle = c || H.rgba(H.mix('#5a6080', PAL.green, on)); rr(ctx, -150, -70, 300, 140, 70); ctx.fill(); }, 12); circle(ctx, H.lerp(-80, 80, on), 0, 58, PAL.white); text(ctx, on > 0.5 ? 'ON' : 'OFF', H.lerp(-80, 80, on), 2, 34, on > 0.5 ? PAL.green : '#5a6080'); });
    // scissors in a sheath (pepsinogen) -> sheath falls off in acid
    const shk = pop(t, T(26, 'leaves') - 0.2), drop = EO(t, T(27, 'on') - 0.1, T(27, 'on') + 0.6);
    kpop(ctx, 900, 330, shk, () => {
      scissors(ctx, 0, 0, 1, on * Math.abs(Math.sin(t * 6)) * 0.8);
      ctx.save(); ctx.translate(60, drop * 260); ctx.rotate(drop * 0.6); ctx.globalAlpha = 1 - drop * 0.9; longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.pink; rr(ctx, -10, -26, 150, 52, 22); ctx.fill(); }, 8); text(ctx, 'SAFE', 64, 2, 24, PAL.white); ctx.restore();
    });
    pill(ctx, 'PEPSINOGEN', 900, 470, { k: pop(t, T(26, 'pepsinogen') - 0.2, T(27, 'on') + 0.3), bg: PAL.pink, col: PAL.white, size: 36 });
    pill(ctx, 'PEPSIN: ON', 900, 470, { k: pop(t, T(27, 'on') + 0.3), bg: PAL.green, col: PAL.ink, size: 36 });
    // acid drops arriving on "acid outside"
    const ak = ph(t, T(27, 'acid') - 0.2, T(27, 'on'));
    if (ak > 0) for (let i = 0; i < 6; i++) { const u = H.clamp(ak * 1.4 - i * 0.08); hion(ctx, 1200 - u * 240 + Math.sin(i) * 20, 200 + i * 40, 14, u * (1 - drop)); }
    pill(ctx, 'ONLY ACID SWITCHES IT ON', 640, 640, { k: pop(t, T(27, 'only') - 0.15), bg: PAL.cream, size: 30 });
  }, (k) => { k.play('pop', T(24, 'clever') - 0.15, { f: 620, gain: 0.8 }); k.play('click', T(25, 'switched') - 0.1, { gain: 0.6 }); k.play('pop', T(26, 'pepsinogen') - 0.2, { f: 500, gain: 0.6 }); k.play('click', T(27, 'on') - 0.05, { gain: 0.7 }); k.play('success', T(27, 'on') + 0.2, { gain: 0.4 }); k.play('swish', T(27, 'on'), { gain: 0.4, minor: true }); });

  // S17: so the knife is never sharp inside the cell that makes it
  add(28, 'circle', (ctx, t) => {
    sky(ctx, '#e9fff4', '#bff2da');
    const ck = pop(t, PS(28) - 0.1);
    kpop(ctx, 470, 380, ck, () => { longShadow(ctx, (c) => { ctx.fillStyle = c || '#7a5cff'; ctx.beginPath(); ctx.ellipse(0, 0, 260, 200, 0, 0, Math.PI * 2); ctx.fill(); }, 16); circle(ctx, -120, 60, 50, '#4b33c4');
      // sheathed knives floating calmly inside
      for (let i = 0; i < 3; i++) { ctx.save(); ctx.translate(-20 + i * 70, -70 + (i % 2) * 90 + Math.sin(t * 1.5 + i) * 8); ctx.rotate(-0.3 + i * 0.2); scissors(ctx, 0, 0, 0.55, 0, { bg: '#7a5cff' }); ctx.fillStyle = PAL.pink; rr(ctx, 10, -16, 70, 32, 14); ctx.fill(); ctx.restore(); } });
    big(ctx, 'NEVER SHARP', 990, 280, 72, PAL.ink, pop(t, T(28, 'never') - 0.15) * bump(t, T(28, 'sharp')), 12);
    pill(ctx, 'INSIDE ITS OWN CELL', 990, 400, { k: pop(t, T(28, 'inside') - 0.15), bg: PAL.purple, col: PAL.white, size: 32 });
    check(ctx, 990, 510, 1.6, PAL.green, pop(t, T(28, 'makes') - 0.1));
  }, (k) => { k.play('pop', T(28, 'never') - 0.15, { f: 560, gain: 0.8 }); k.play('pop', T(28, 'inside') - 0.15, { f: 680, gain: 0.6 }); k.play('ding', T(28, 'makes'), { f: 'G5', gain: 0.45 }); });

  // S18: but the wall is still sitting in acid: worried lining cells, acid sloshing above
  const acidPool = (ctx, yTop, t, col = PAL.acid) => { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(-200, -200); ctx.lineTo(W + 200, -200); ctx.lineTo(W + 200, yTop); for (let x = W + 200; x >= -200; x -= 16) ctx.lineTo(x, yTop + Math.sin(x * 0.02 + t * 2.5) * 10); ctx.closePath(); ctx.fill(); };
  add(29, 'slide', (ctx, t) => {
    sky(ctx, '#ffd0da', '#ffb0bf');
    acidPool(ctx, 360, t);
    const ir = H.rng(29); for (let i = 0; i < 18; i++) hion(ctx, 60 + ir() * 1160, 80 + ir() * 240 + Math.sin(t * 2 + i) * 8, 16);
    cells(ctx, 40, 420, 15, 70, 220, { face: () => (t > T(29, 'acid') - 0.3 ? 'sad' : 'ok'), yo: (i) => Math.sin(t * 3 + i) * 3 });
    pill(ctx, 'STOMACH WALL', 640, 680, { k: pop(t, T(29, 'wall') - 0.15), bg: PAL.ink, col: PAL.cream, size: 32 });
    big(ctx, 'SITTING IN ACID', 640, 200, 76, PAL.ink, pop(t, T(29, 'acid') - 0.15) * bump(t, T(29, 'acid')), 12);
  }, (k) => { k.play('pop', T(29, 'wall') - 0.15, { f: 480, gain: 0.6 }); k.play('bubble', T(29, 'sitting'), { gain: 0.4 }); k.play('buzz', T(29, 'acid'), { f: 110, dur: 0.5, gain: 0.3, minor: true }); });

  // ================= CHAPTER 3: DEFENSE #1, SLIME =================
  add(30, 'iris', chapterCard(3, 'DEFENSE #1: SLIME', '#1fa5c4', PAL.cream, T(30, 'defense') - 0.1, 'a shield of mucus'), (k) => { k.play('impact', T(30, 'defense') - 0.1, { gain: 0.5 }); k.play('pop', T(30, 'defense') + 0.1, { f: 520, gain: 0.8 }); k.play('pop', T(30, 'slime') - 0.1, { f: 700, gain: 0.7 }); });

  // S20: the lining coated in a thick, sticky layer of mucus
  const mucusLayer = (ctx, y0, thick, t, a = 1) => { if (a <= 0.01) return; ctx.save(); ctx.globalAlpha = a * 0.92; ctx.fillStyle = PAL.mucus; ctx.beginPath(); ctx.moveTo(-200, y0 + 10); for (let x = -200; x <= W + 200; x += 16) ctx.lineTo(x, y0 - thick + Math.sin(x * 0.015 + t * 1.2) * 12 + Math.sin(x * 0.04 + t) * 5); ctx.lineTo(W + 200, y0 + 10); ctx.closePath(); ctx.fill(); ctx.globalAlpha = a * 0.5; ctx.fillStyle = PAL.white; for (let i = 0; i < 12; i++) { ctx.beginPath(); ctx.ellipse(60 + i * 110 + Math.sin(t + i) * 10, y0 - thick * 0.5, 22, 7, 0, 0, Math.PI * 2); ctx.fill(); } ctx.restore(); };
  add(31, 'circle', (ctx, t) => {
    sky(ctx, '#e6fbff', '#b8eef8');
    acidPool(ctx, 230, t);
    const th = 150 * EO(t, T(31, 'coated') - 0.3, T(31, 'mucus') + 0.4);
    mucusLayer(ctx, 440, th, t, 1);
    cells(ctx, 40, 440, 15, 70, 220, { face: () => (th > 100 ? 'ok' : 'sad') });
    pill(ctx, 'THICK', 220, 120, { k: pop(t, T(31, 'thick') - 0.15), bg: PAL.cream, size: 36 });
    pill(ctx, 'STICKY', 420, 120, { k: pop(t, T(31, 'sticky') - 0.15), bg: PAL.cream, size: 36 });
    big(ctx, 'MUCUS', 900, 340, 90, '#1386a8', pop(t, T(31, 'mucus') - 0.15) * bump(t, T(31, 'mucus')), 14);
  }, (k) => { k.play('swish', T(31, 'coated') - 0.3, { gain: 0.5 }); k.play('pop', T(31, 'thick') - 0.15, { f: 520, gain: 0.6 }); k.play('pop', T(31, 'sticky') - 0.15, { f: 600, gain: 0.6 }); k.play('impact', T(31, 'mucus'), { gain: 0.5 }); });

  // S21: loaded with bicarbonate, the same kind of stuff as baking soda
  add(32, 'slide', (ctx, t) => {
    sky(ctx, '#e8f3ff', '#c5e0ff');
    ctx.save(); ctx.translate(0, 40);
    mucusLayer(ctx, 520, 280, t, 1);
    const br = H.rng(32), bk = EO(t, T(32, 'loaded') - 0.2, T(32, 'bicarbonate') + 0.4);
    for (let i = 0; i < 30; i++) { if (i / 30 > bk) continue; bion(ctx, 40 + br() * 640, 280 + br() * 220 + Math.sin(t * 2 + i) * 6, 15); }
    cells(ctx, 40, 520, 15, 70, 200, { face: () => 'ok' });
    ctx.restore();
    big(ctx, 'BICARBONATE', 360, 120, 70, PAL.bicarb, pop(t, T(32, 'bicarbonate') - 0.15) * bump(t, T(32, 'bicarbonate')), 12);
    // baking soda box
    const bxk = pop(t, T(33, 'baking') - 0.2);
    kpop(ctx, 1010, 330, bxk, () => { longShadow(ctx, (c) => { ctx.fillStyle = c || '#ff8a2a'; rr(ctx, -120, -150, 240, 300, 18); ctx.fill(); }, 14); ctx.fillStyle = PAL.white; rr(ctx, -100, -60, 200, 120, 14); ctx.fill(); text(ctx, 'BAKING', 0, -20, 40, PAL.ink); text(ctx, 'SODA', 0, 30, 40, PAL.ink); ctx.fillStyle = '#ffd23f'; rr(ctx, -120, -150, 240, 50, 14); ctx.fill(); });
    pill(ctx, 'SAME KIND OF STUFF', 1010, 560, { k: pop(t, T(33, 'same') - 0.15), bg: PAL.cream, size: 28 });
  }, (k) => { for (let i = 0; i < 10; i++) k.play('blip', T(32, 'loaded') - 0.2 + i * 0.09, { f: 500 + i * 60, gain: 0.25, minor: true }); k.play('pop', T(32, 'bicarbonate') - 0.15, { f: 560, gain: 0.8 }); k.play('pop', T(33, 'baking') - 0.2, { f: 640, gain: 0.7 }); });

  // S22: acid trickles in from one side, bicarbonate soaks it up from the other
  add(34, 'circle', (ctx, t) => {
    sky(ctx, '#fff6e0', '#ffe2a8');
    // left = acid side, right = cell side (horizontal layout)
    ctx.fillStyle = PAL.acid; ctx.fillRect(-200, -200, 420, HH + 400);
    ctx.fillStyle = PAL.mucus; ctx.beginPath(); ctx.moveTo(220, -200); for (let y = -200; y <= HH + 200; y += 16) ctx.lineTo(220 + Math.sin(y * 0.02 + t) * 12, y); ctx.lineTo(900, HH + 200); ctx.lineTo(900, -200); ctx.fill();
    for (let i = 0; i < 6; i++) { ctx.fillStyle = PAL.lining; rr(ctx, 910, 30 + i * 112, 300, 100, 20); ctx.fill(); circle(ctx, 1100, 80 + i * 112, 20, '#c0567a'); }
    text(ctx, 'ACID', 110, 100, 40, PAL.ink); text(ctx, 'MUCUS', 560, 100, 40, '#1386a8'); text(ctx, 'CELLS', 1060, 690, 34, PAL.stom2);
    const a0 = T(34, 'acid') - 0.2, b0 = T(34, 'bicarbonate') - 0.2;
    for (let i = 0; i < 9; i++) {
      const y = 140 + i * 58, st = a0 + i * 0.25, u = ph(t, st, st + 1.6), x = H.lerp(140, 520, H.ease.out(u));
      const meet = b0 + 0.3 + i * 0.22, gone = EO(t, meet, meet + 0.4);
      const bx = H.lerp(860, 540, EO(t, b0 + i * 0.2, meet));
      if (t > st) hion(ctx, x, y, 17, 1 - gone);
      if (t > b0 + i * 0.2) bion(ctx, bx, y + 4, 15, 1 - gone);
      if (gone > 0 && gone < 1) { ctx.save(); ctx.globalAlpha = 1 - gone; circle(ctx, (x + bx) / 2, y, 20 + gone * 40, 'rgba(255,255,255,0.8)'); ctx.restore(); }
    }
    pill(ctx, 'NEUTRALIZED', 560, 640, { k: pop(t, T(34, 'soaks') - 0.15) * bump(t, T(34, 'up')), bg: PAL.green, col: PAL.ink, size: 36 });
  }, (k) => { for (let i = 0; i < 6; i++) k.play('tock', T(34, 'acid') - 0.2 + i * 0.25, { f: 300 + i * 30, gain: 0.3, minor: true }); for (let i = 0; i < 6; i++) k.play('pop', T(34, 'bicarbonate') + 0.1 + i * 0.22, { f: 700 + i * 50, gain: 0.35, minor: true }); k.play('success', T(34, 'soaks'), { gain: 0.35 }); });

  // S23: lab studies: strong acid on one side, close to neutral right against the cells (pH gradient bar)
  add(35, 'slide', (ctx, t) => {
    sky(ctx, '#20304f', '#2d4470'); dots(ctx, 35, 12, '#ffffff', 0.06, t);
    pill(ctx, 'LAB STUDIES', 640, 80, { k: pop(t, T(35, 'lab') - 0.15), bg: PAL.yellow, size: 34 });
    const x0 = 140, x1 = 1140, y = 330, gk = EO(t, T(35, 'acid') - 0.2, T(36, 'neutral') + 0.2);
    const g = ctx.createLinearGradient(x0, 0, x1, 0); g.addColorStop(0, '#e8263a'); g.addColorStop(0.35, '#ffc61e'); g.addColorStop(0.7, '#7fd24a'); g.addColorStop(1, '#28b48c');
    ctx.save(); ctx.beginPath(); rr(ctx, x0, y - 60, (x1 - x0) * gk, 120, 60); ctx.clip(); ctx.fillStyle = g; ctx.fillRect(x0, y - 60, x1 - x0, 120); ctx.restore();
    text(ctx, 'STOMACH SIDE', x0 + 110, y - 100, 28, PAL.cream); text(ctx, 'CELL SIDE', x1 - 90, y - 100, 28, PAL.cream);
    pill(ctx, 'pH ≈ 2', x0 + 120, y + 130, { k: pop(t, T(35, 'strong') - 0.15) * bump(t, T(35, 'strong')), bg: PAL.red, col: PAL.white, size: 44 });
    pill(ctx, 'pH ≈ 7', x1 - 120, y + 130, { k: pop(t, T(36, 'neutral') - 0.15) * bump(t, T(36, 'neutral')), bg: '#28b48c', col: PAL.white, size: 44 });
    big(ctx, 'CLOSE TO NEUTRAL', 640, 610, 64, PAL.cream, pop(t, T(36, 'close') - 0.15), 12);
  }, (k) => { k.play('pop', T(35, 'lab') - 0.15, { f: 520, gain: 0.6 }); k.play('riser', T(35, 'acid'), { dur: 2.5, gain: 0.25 }); k.play('stamp', T(35, 'strong'), { gain: 0.45 }); k.play('ding', T(36, 'neutral'), { f: 'C6', gain: 0.5 }); });

  // S24: tight junctions zip the cells together, so acid can't leak between them
  add(37, 'circle', (ctx, t) => {
    sky(ctx, '#fff0f4', '#ffd3df');
    acidPool(ctx, 150, t);
    mucusLayer(ctx, 330, 130, t, 1);
    const z = EO(t, T(37, 'zipped') - 0.3, T(37, 'junctions') + 0.3);
    const gap = H.lerp(26, 4, z);
    cells(ctx, 640 - (8 * 110 + 7 * gap) / 2, 330, 8, 110, 300, { gap, face: () => 'ok' });
    // zipper teeth between cells
    for (let i = 0; i < 7; i++) { const x = 640 - (8 * 110 + 7 * gap) / 2 + (i + 1) * (110 + gap) - gap / 2; for (let j = 0; j < 4; j++) { const show = H.clamp(z * 5 - j); if (show <= 0) continue; ctx.fillStyle = PAL.yellow; rr(ctx, x - 9, 340 + j * 22, 18, 12, 4); ctx.fill(); } }
    // acid bouncing off
    const bk = ph(t, T(38, 'acid') - 0.3, PE(38));
    if (bk > 0) for (let i = 0; i < 5; i++) { const u = (bk * 1.6 + i * 0.2) % 1, yy = 220 + Math.abs(Math.sin(u * Math.PI)) * 110; hion(ctx, 280 + i * 180, 330 - (330 - 220) * (1 - Math.sin(u * Math.PI)) + 0, 16); }
    pill(ctx, 'TIGHT JUNCTIONS', 1050, 100, { k: pop(t, T(37, 'tight') - 0.15) * bump(t, T(37, 'junctions')), bg: PAL.yellow, size: 34 });
    pill(ctx, 'NO LEAKS', 230, 100, { k: pop(t, T(38, 'leak') - 0.15), bg: PAL.ink, col: PAL.cream, size: 34 });
    cross(ctx, 360, 100, 1.1, PAL.red, pop(t, T(38, 'leak') - 0.05));
  }, (k) => { k.play('swish', T(37, 'zipped') - 0.3, { gain: 0.5 }); for (let i = 0; i < 8; i++) k.play('click', T(37, 'zipped') - 0.2 + i * 0.07, { gain: 0.3, minor: true }); k.play('pop', T(37, 'tight') - 0.15, { f: 600, gain: 0.7 }); k.play('thud', T(38, 'leak'), { f: 120, gain: 0.45 }); });

  // ================= CHAPTER 4: DEFENSE #2, NEW CELLS =================
  add(39, 'iris', chapterCard(4, 'DEFENSE #2: NEW CELLS', PAL.orange, PAL.cream, PS(39) - 0.1, 'even wilder'), (k) => { k.play('impact', PS(39) - 0.1, { gain: 0.5 }); k.play('pop', PS(39) + 0.1, { f: 520, gain: 0.8 }); k.play('pop', T(39, 'wilder') - 0.1, { f: 760, gain: 0.6, minor: true }); });

  // S26: the stomach keeps replacing itself: a conveyor of lining cells, calendar 3-6 days
  add(40, 'slide', (ctx, t) => {
    sky(ctx, '#e9f7ff', '#c4e7ff'); ground(ctx, 560, '#9cc7e8');
    // cells rise from the bottom of a pit and slide out along the surface, falling off the end
    const sp = 60, n = 16;
    for (let i = 0; i < n; i++) { const u = ((t * sp / 90) + i) % n, x = -60 + u * 90, y = 400; const fall = H.clamp((x - 1150) / 120); const age = u / n; const col = H.rgba(H.mix('#ffc2cf', '#e85d7d', age));
      ctx.save(); ctx.translate(x, y + fall * fall * 200); ctx.rotate(fall * 0.8); ctx.globalAlpha = 1 - fall; ctx.fillStyle = col; rr(ctx, -40, -80, 80, 160, 16); ctx.fill(); circle(ctx, 0, 30, 14, '#c0567a'); ctx.restore(); }
    arrow(ctx, 100, 540, 1100, 540, PAL.ink, 8, EO(t, T(40, 'replacing') - 0.2, T(40, 'replacing') + 0.8));
    text(ctx, 'NEW', 100, 600, 30, PAL.ink); text(ctx, 'OLD', 1100, 600, 30, PAL.ink);
    big(ctx, 'REPLACES ITSELF', 640, 110, 70, PAL.ink, pop(t, T(40, 'replacing') - 0.15), 12);
    const ck = pop(t, T(41, 'three') - 0.25);
    kpop(ctx, 640, 250, ck, () => { pill(ctx, 'EVERY 3–6 DAYS', 0, 0, { bg: PAL.orange, col: PAL.white, size: 44 }); });
  }, (k) => { k.play('roller', T(40, 'keeps'), { dur: 2.0, gain: 0.3, minor: true }); k.play('pop', T(40, 'replacing') - 0.15, { f: 520, gain: 0.8 }); k.play('stamp', T(41, 'three'), { gain: 0.55 }); k.play('ding', T(41, 'days'), { f: 'E5', gain: 0.4 }); });

  // S27: one old estimate: about half a million cells shed every minute (counter)
  add(42, 'circle', (ctx, t) => {
    sky(ctx, '#2a1f4f', '#47308a'); dots(ctx, 42, 14, '#ffffff', 0.07, t);
    pill(ctx, 'ONE OLD ESTIMATE', 640, 80, { k: pop(t, T(42, 'estimate') - 0.15), bg: PAL.cream, size: 30 });
    const c0 = T(42, 'half') - 0.1, n = Math.round(500000 * EO(t, c0, c0 + 1.4));
    const k = pop(t, c0 - 0.1);
    big(ctx, n.toLocaleString('en-US'), 640, 300, 150, PAL.yellow, k, 16);
    pill(ctx, 'CELLS SHED', 500, 450, { k: pop(t, T(42, 'cells') - 0.15), bg: PAL.pink, col: PAL.white, size: 38 });
    pill(ctx, 'EVERY MINUTE', 820, 450, { k: pop(t, T(42, 'minute') - 0.15) * bump(t, T(42, 'minute')), bg: PAL.teal, col: PAL.white, size: 38 });
    // little cells drifting off the bottom
    const sr = H.rng(42); if (t > c0) for (let i = 0; i < 30; i++) { const u = ((t - c0) * 0.35 + sr()) % 1; ctx.save(); ctx.globalAlpha = 0.7; ctx.translate(sr() * W, 520 + u * 260); ctx.rotate(u * 3 + i); ctx.fillStyle = '#ffb0bf'; rr(ctx, -12, -20, 24, 40, 8); ctx.fill(); ctx.restore(); }
  }, (k) => { k.play('pop', T(42, 'estimate') - 0.15, { f: 480, gain: 0.6 }); for (let i = 0; i < 14; i++) k.play('tick', T(42, 'half') - 0.1 + i * 0.1, { f: 3000 + i * 100, gain: 0.3, minor: true }); k.play('stamp', T(42, 'half') + 1.3, { gain: 0.5 }); k.play('pop', T(42, 'minute') - 0.15, { f: 700, gain: 0.6 }); });

  // S28: even if a few cells get burned, fresh ones are already on the way
  add(43, 'slide', (ctx, t) => {
    sky(ctx, '#fff4e3', '#ffdcae');
    acidPool(ctx, 180, t);
    mucusLayer(ctx, 360, 120, t, 1);
    const b0 = T(43, 'burned') - 0.2, burnt = EO(t, b0, b0 + 0.5), rep = EO(t, T(43, 'fresh') - 0.1, T(43, 'way') + 0.2);
    cells(ctx, 70, 360, 12, 85, 260, {
      col: (i) => (i === 4 || i === 7) ? H.rgba(H.mix(H.mix(PAL.lining, '#7a5a50', burnt), PAL.lining, rep)) : PAL.lining,
      face: (i) => (i === 4 || i === 7) && burnt > 0.5 && rep < 0.5 ? 'sad' : 'ok',
      k: (i) => (i === 4 || i === 7) ? (rep > 0 && rep < 1 ? Math.abs(1 - rep * 2) * 0.8 + 0.2 : 1) : 1,
    });
    // fresh cells rising from below
    [4, 7].forEach((i) => { const x = 70 + i * 89 + 42; if (rep > 0) arrow(ctx, x, 700, x, 640, PAL.green, 10, rep); });
    pill(ctx, 'BURNED', 520, 110, { k: pop(t, b0) , bg: '#7a5a50', col: PAL.white, size: 34 });
    pill(ctx, 'FRESH ONES ON THE WAY', 900, 110, { k: pop(t, T(43, 'fresh') - 0.15) * bump(t, T(43, 'way')), bg: PAL.green, col: PAL.ink, size: 32 });
  }, (k) => { k.play('buzz', T(43, 'burned'), { f: 130, dur: 0.4, gain: 0.3, minor: true }); k.play('pop', T(43, 'burned') - 0.2, { f: 460, gain: 0.6 }); k.play('powerup', T(43, 'fresh'), { gain: 0.35 }); k.play('ding', T(43, 'way'), { f: 'G5', gain: 0.4 }); });

  // ================= CHAPTER 5: BUILT TO STRETCH =================
  add(44, 'iris', chapterCard(5, 'BUILT TO STRETCH', PAL.pink, PAL.cream, PS(44) - 0.1, 'the numbers'), (k) => { k.play('impact', PS(44) - 0.1, { gain: 0.5 }); k.play('pop', PS(44) + 0.1, { f: 520, gain: 0.8 }); k.play('riser', T(44, 'stretch') - 0.4, { dur: 0.6, gain: 0.3, minor: true }); });

  // S30: empty = the size of a fist; stretches to hold 4 liters, over 75x
  const fist = (ctx, x, y, s) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.skin; rr(ctx, -80, -60, 160, 130, 40); ctx.fill(); rr(ctx, -50, 60, 100, 90, 20); ctx.fill(); }, 12); ctx.strokeStyle = '#d8a27a'; ctx.lineWidth = 5; ctx.lineCap = 'round'; for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(-40 + i * 40, -60); ctx.lineTo(-40 + i * 40, -10); ctx.stroke(); } ctx.fillStyle = '#e9b48c'; rr(ctx, -90, -10, 60, 40, 18); ctx.fill(); ctx.restore(); };
  add(45, 'circle', (ctx, t) => {
    sky(ctx, '#fff3fb', '#ffd2ec');
    const fk = pop(t, T(45, 'fist') - 0.25), grow = EO(t, T(46, 'hold') - 0.3, T(47, 'seventyfive') + 0.4);
    kpop(ctx, 280, 400, fk, () => fist(ctx, 0, 0, 1.1));
    pill(ctx, 'EMPTY ≈ A FIST', 280, 610, { k: pop(t, T(45, 'empty') - 0.15), bg: PAL.ink, col: PAL.cream, size: 32 });
    const s = H.lerp(0.45, 1.25, grow);
    stomach(ctx, 820, 410, s, t, { acid: 0.3 + 0.3 * grow, face: 'happy', sh: 14 });
    big(ctx, 'UP TO 4 LITERS', 820, 90, 70, PAL.stom2, pop(t, T(46, 'four') - 0.15) * bump(t, T(46, 'liters')), 12);
    const xk = pop(t, T(47, 'seventyfive') - 0.15);
    kpop(ctx, 1110, 560, xk * bump(t, T(47, 'seventyfive')), () => { longShadow(ctx, (c) => circle(ctx, 0, 0, 100, c || PAL.yellow), 14); text(ctx, '75×', 0, 6, 84, PAL.ink); });
  }, (k) => { k.play('pop', T(45, 'fist') - 0.25, { f: 480, gain: 0.7 }); k.play('riser', T(46, 'hold') - 0.3, { dur: 2.0, gain: 0.35 }); k.play('stamp', T(46, 'four'), { gain: 0.5 }); k.play('impact', T(47, 'seventyfive'), { gain: 0.55 }); });

  // S31: a muscle wave every ~20 seconds; 2-4 hours later it moves on into the gut
  add(48, 'slide', (ctx, t) => {
    sky(ctx, '#e7fff1', '#b8f0d0'); ground(ctx, 620, '#8fd9ae');
    const w0 = T(48, 'wave') - 0.3, wv = ((t - w0) / 2.4) % 1;
    stomach(ctx, 560, 400, 1.35, t, { acid: 0.45, sh: 14, inside: (c) => { if (t > w0) { const x = H.lerp(-170, 200, wv); c.fillStyle = 'rgba(232,93,125,0.55)'; c.beginPath(); c.ellipse(x, 0, 26, 170, 0, 0, Math.PI * 2); c.fill(); } } });
    // clock
    const ck = pop(t, T(48, 'twenty') - 0.25);
    kpop(ctx, 1080, 230, ck, () => { longShadow(ctx, (c) => circle(ctx, 0, 0, 90, c || PAL.white), 12); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, 0); const a = t * 2 - Math.PI / 2; ctx.lineTo(Math.cos(a) * 64, Math.sin(a) * 64); ctx.stroke(); circle(ctx, 0, 0, 10, PAL.red); });
    pill(ctx, '~20 SECONDS', 1080, 370, { k: pop(t, T(48, 'seconds') - 0.15), bg: PAL.teal, col: PAL.white, size: 34 });
    pill(ctx, 'SQUEEZE!', 560, 110, { k: pop(t, T(48, 'squeezes') - 0.15) * bump(t, T(48, 'squeezes')), bg: PAL.stom, col: PAL.white, size: 40 });
    pill(ctx, '2–4 HOURS', 1080, 480, { k: pop(t, T(49, 'two') - 0.15) * bump(t, T(49, 'hours')), bg: PAL.yellow, size: 40 });
    const gk = EO(t, T(49, 'pushed') - 0.2, T(49, 'gut') + 0.3);
    if (gk > 0) { arrow(ctx, 860, 470, H.lerp(860, 960, gk), H.lerp(470, 600, gk), PAL.stom2, 12, 1); pill(ctx, 'ON TO YOUR GUT', 900, 660, { k: pop(t, T(49, 'gut') - 0.15), bg: PAL.ink, col: PAL.cream, size: 28 }); }
  }, (k) => { k.play('pop', T(48, 'twenty') - 0.25, { f: 520, gain: 0.7 }); for (let i = 0; i < 8; i++) k.play('tick', T(48, 'twenty') + i * 0.25, { f: 2600, gain: 0.25, minor: true }); k.play('swish', T(48, 'squeezes') - 0.1, { gain: 0.5 }); k.play('stamp', T(49, 'two'), { gain: 0.45 }); k.play('whoosh', T(49, 'pushed') - 0.2, { dur: 0.5, gain: 0.5 }); });

  // S32: what can break the shield? H. pylori, a corkscrew bacterium, burrows into the mucus
  const pylori = (ctx, x, y, s, t, rot = 0) => { ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    ctx.strokeStyle = 'rgba(20,20,60,0.15)'; ctx.lineWidth = 34; ctx.lineCap = 'round'; const path = (dx, dy) => { ctx.beginPath(); for (let i = 0; i <= 30; i++) { const u = i / 30; ctx.lineTo(-90 + u * 180 + dx, Math.sin(u * Math.PI * 3 + t * 6) * 22 + dy); } ctx.stroke(); };
    path(8, 10); ctx.strokeStyle = '#8a5cd6'; path(0, 0);
    ctx.strokeStyle = '#5a3aa0'; ctx.lineWidth = 4; for (let j = 0; j < 4; j++) { ctx.beginPath(); ctx.moveTo(-100, Math.sin(t * 6) * 22); for (let i = 0; i < 10; i++) ctx.lineTo(-100 - i * 9, Math.sin(t * 6) * 22 + (j - 1.5) * 8 + Math.sin(i * 0.9 + t * 14 + j) * 6); ctx.stroke(); }
    circle(ctx, 60, Math.sin(Math.PI * 2.5 + t * 6) * 22 - 4, 5, PAL.white); circle(ctx, 75, Math.sin(Math.PI * 2.75 + t * 6) * 22 - 4, 5, PAL.white);
    ctx.restore(); };
  add(50, 'circle', (ctx, t) => {
    sky(ctx, '#2a1d47', '#3f2a6b'); dots(ctx, 50, 12, '#ffffff', 0.06, t);
    const bur = EO(t, T(52, 'burrow') - 0.2, T(52, 'weaken') + 0.4);
    const thin = 1 - 0.55 * EO(t, T(52, 'weaken') - 0.2, PE(52) + 0.3);
    mucusLayer(ctx, 480, 220 * thin, t, 1);
    // a dent where it burrows
    cells(ctx, 40, 480, 15, 70, 200, { face: () => (thin < 0.7 ? 'sad' : 'ok') });
    big(ctx, 'BREAK THE SHIELD?', 640, 110, 64, PAL.cream, pop(t, T(50, 'break') - 0.15) * bump(t, T(50, 'shield')), 12);
    const pk = pop(t, T(51, 'corkscrewshaped') - 0.25);
    kpop(ctx, H.lerp(900, 620, bur), H.lerp(250, 380, bur), pk, () => pylori(ctx, 0, 0, 1.2, t, bur * 0.6));
    pill(ctx, 'H. PYLORI', 1080, 250, { k: pop(t, T(51, 'pylori') - 0.15) * bump(t, T(51, 'pylori')), bg: '#8a5cd6', col: PAL.white, size: 40 });
    pill(ctx, 'WEAKENS MUCUS', 1080, 350, { k: pop(t, T(52, 'weaken') - 0.15), bg: PAL.red, col: PAL.white, size: 30 });
  }, (k) => { k.play('pop', T(50, 'break') - 0.15, { f: 480, gain: 0.7 }); k.play('glitch', T(51, 'corkscrewshaped') - 0.2, { gain: 0.3, minor: true }); k.play('pop', T(51, 'pylori') - 0.15, { f: 620, gain: 0.7 }); k.play('swish', T(52, 'burrow') - 0.2, { gain: 0.5 }); k.play('buzz', T(52, 'weaken'), { f: 100, dur: 0.6, gain: 0.3, minor: true }); });

  // S33: why some sores in the lining are now treated as infections
  add(53, 'slide', (ctx, t) => {
    sky(ctx, '#eef6ff', '#cfe3ff');
    const sk = pop(t, T(53, 'sores') - 0.2);
    stomach(ctx, 420, 420, 1.2, t, { acid: 0.35, sh: 14, inside: (c) => { if (sk > 0.01) { c.save(); c.globalAlpha = H.clamp(sk); circle(c, -110, 60, 26, '#c23a5a'); circle(c, -110, 60, 14, '#8f2342'); c.restore(); } } });
    kpop(ctx, 288, 492, sk, () => { ctx.strokeStyle = PAL.red; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(0, 0, 50, 0, Math.PI * 2); ctx.stroke(); });
    pill(ctx, 'SORES IN THE LINING', 420, 110, { k: pop(t, T(53, 'sores') - 0.15), bg: PAL.ink, col: PAL.cream, size: 32 });
    const ik = pop(t, T(53, 'infections') - 0.3);
    kpop(ctx, 950, 330, ik, () => { pylori(ctx, 0, -40, 0.9, t); });
    big(ctx, 'AN INFECTION', 950, 500, 64, '#8a5cd6', pop(t, T(53, 'infections') - 0.15) * bump(t, T(53, 'infections')), 12);
  }, (k) => { k.play('pop', T(53, 'sores') - 0.15, { f: 500, gain: 0.6 }); k.play('impact', T(53, 'infections'), { gain: 0.5 }); });

  // S34: outro: a pool of acid in your belly, and a slimy, self-repairing wall that never lets it win
  add(54, 'iris', (ctx, t) => {
    sky(ctx, '#ffe3c2', '#ffbf8a'); ground(ctx, 620, '#f5a05c');
    const mk = pop(t, T(54, 'meal') - 0.25);
    stomach(ctx, 640, 410, 1.4, t, { acid: 0.5, face: 'happy', sh: 16, inside: (c) => { c.save(); c.globalAlpha = EO(t, T(56, 'slimy') - 0.2, T(56, 'slimy') + 0.4); c.strokeStyle = PAL.mucus; c.lineWidth = 22; c.scale(0.9, 0.88); c.translate(3, 5); stomPath(c); c.stroke(); c.restore(); } });
    [[180, 300, steak], [1080, 300, cheese], [1100, 520, carrot]].forEach(([x, y, fn], i) => kpop(ctx, x, y, mk, () => fn(ctx, 0, 0, 0.8, Math.sin(t + i) * 0.2)));
    pill(ctx, 'A POOL OF ACID', 640, 90, { k: pop(t, T(55, 'pool') - 0.15, T(56, 'slimy') - 0.2), bg: PAL.acid, size: 40 });
    big(ctx, 'A WALL THAT WINS', 640, 90, 70, PAL.ink, pop(t, T(56, 'wall') - 0.15) * bump(t, T(56, 'win')), 12);
    pill(ctx, 'SLIMY + SELF-REPAIRING', 640, 670, { k: pop(t, T(56, 'slimy') - 0.15), bg: PAL.teal, col: PAL.white, size: 32 });
  }, (k) => { [0, 1, 2].forEach((i) => k.play('pop', T(54, 'meal') - 0.25 + i * 0.08, { f: 500 + i * 80, gain: 0.5, minor: true })); k.play('bubble', T(55, 'pool'), { gain: 0.4 }); k.play('swish', T(56, 'slimy') - 0.2, { gain: 0.4 }); k.play('success', T(56, 'win'), { gain: 0.45 }); });

  // S35: teaser: why do some people sweat so much more than others?
  const drop = (ctx, x, y, s, col = PAL.blue) => { ctx.save(); ctx.translate(x, y); ctx.scale(s, s); longShadow(ctx, (c) => { ctx.fillStyle = c || col; ctx.beginPath(); ctx.moveTo(0, -60); ctx.bezierCurveTo(30, -20, 44, 0, 44, 20); ctx.arc(0, 20, 44, 0, Math.PI); ctx.bezierCurveTo(-44, 0, -30, -20, 0, -60); ctx.fill(); }, 8); ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.beginPath(); ctx.ellipse(-14, 14, 8, 14, 0.3, 0, Math.PI * 2); ctx.fill(); ctx.restore(); };
  add(57, 'circle', (ctx, t) => {
    sky(ctx, '#1f6fb2', '#164f80'); dots(ctx, 57, 12, '#ffffff', 0.07, t);
    const pk = pop(t, T(57, 'people') - 0.25);
    kpop(ctx, 400, 500, pk, () => { person(ctx, 0, 0, 0.75, PAL.orange); });
    kpop(ctx, 760, 500, pk, () => { person(ctx, 0, 0, 0.75, PAL.teal, { worry: true }); });
    const sk = EO(t, T(57, 'sweat') - 0.2, T(57, 'sweat') + 0.3);
    if (sk > 0) for (let i = 0; i < 6; i++) { const u = (t * 0.7 + i / 6) % 1; drop(ctx, 690 + (i % 3) * 70, 260 + u * 200, 0.32 * sk, '#7fd0ff'); }
    if (sk > 0) drop(ctx, 450, 300 + ((t * 0.6) % 1) * 100, 0.25 * sk, '#7fd0ff');
    pill(ctx, 'NEXT TIME', 230, 90, { k: pop(t, T(57, 'next') - 0.15), bg: PAL.yellow, col: PAL.ink, size: 36 });
    big(ctx, 'WHY DO SOME SWEAT MORE?', W / 2, 660, 60, PAL.cream, pop(t, T(57, 'sweat') - 0.15), 12);
    const qk = pop(t, T(57, 'others') - 0.15); kpop(ctx, 1080, 250, qk, () => { longShadow(ctx, (c) => circle(ctx, 0, 0, 80, c || PAL.cream), 12); text(ctx, '?', 0, 8, 110, PAL.blue); });
  }, (k) => { k.play('whoosh', T(57, 'next') - 0.4, { dur: 0.5, gain: 0.5 }); k.play('pop', T(57, 'next') - 0.15, { f: 560, gain: 0.8 }); k.play('pop', T(57, 'people') - 0.25, { f: 480, gain: 0.6 }); k.play('bubble', T(57, 'sweat'), { gain: 0.4 }); k.play('pop', T(57, 'others') - 0.15, { f: 760, gain: 0.8 }); k.play('ding', DURATION - 0.6, { f: 'C6', gain: 0.3 }); });

  // ---------- timeline ----------
  SC.forEach((s, i) => { s.cut = i === 0 ? 0 : Math.min(PS(s.from) - 0.15, (PE(s.from - 1) + PS(s.from)) / 2); });
  SC.forEach((s, i) => { s.end = i < SC.length - 1 ? SC[i + 1].cut : DURATION; });
  CH = [[5, 1, 'THE MYSTERY'], [15, 2, 'THE ACID LAB'], [30, 3, 'DEFENSE #1: SLIME'], [39, 4, 'DEFENSE #2: NEW CELLS'], [44, 5, 'BUILT TO STRETCH']].map(([p, n, title]) => ({ t: SC.find((s) => s.from === p).cut, n, title }));
  const TRD = { circle: 0.5, slide: 0.45, iris: 0.7, cut: 0 };

  function drawScene(ctx, s, t) {
    ctx.save();
    const u = ph(t, s.cut, s.end);
    const c = s.cam ? s.cam(t) : { z: 1 + 0.045 * u, cx: 640 + 20 * Math.sin(s.from), cy: 360 };
    ctx.translate(c.cx, c.cy); ctx.scale(c.z, c.z); if (c.r) ctx.rotate(c.r); ctx.translate(-c.cx, -c.cy);
    s.draw(ctx, t);
    ctx.restore();
  }
  let GR = null;
  function explainer(ctx, Wd, Hd, t) {
    let i = 0; while (i < SC.length - 1 && t >= SC[i + 1].cut - (TRD[SC[i + 1].tr] || 0) / 2) i++;
    const cur = SC[i], next = SC[i + 1];
    const d = next ? TRD[next.tr] || 0 : 0;
    if (next && d > 0 && t >= next.cut - d / 2) {
      const u = ph(t, next.cut - d / 2, next.cut + d / 2), e = H.ease.inOut(u);
      if (next.tr === 'circle') {
        drawScene(ctx, cur, t);
        ctx.save(); ctx.beginPath(); ctx.arc(640, 360, e * 760, 0, Math.PI * 2); ctx.clip(); drawScene(ctx, next, t); ctx.restore();
        if (e > 0 && e < 1) { ctx.strokeStyle = PAL.cream; ctx.lineWidth = 16; ctx.beginPath(); ctx.arc(640, 360, e * 760, 0, Math.PI * 2); ctx.stroke(); }
      } else if (next.tr === 'slide') {
        ctx.save(); ctx.translate(-W * e, 0); drawScene(ctx, cur, t); ctx.restore();
        ctx.save(); ctx.translate(W * (1 - e), 0); drawScene(ctx, next, t); ctx.restore();
        ctx.fillStyle = PAL.cream; ctx.fillRect(W * (1 - e) - 8, 0, 16, HH);
      } else { // iris: close on the current scene, open on the next
        if (u < 0.5) { const r = 760 * (1 - H.ease.inOut(u * 2)); ctx.fillStyle = PAL.ink; ctx.fillRect(0, 0, W, HH); ctx.save(); ctx.beginPath(); ctx.arc(640, 360, r, 0, Math.PI * 2); ctx.clip(); drawScene(ctx, cur, t); ctx.restore(); }
        else { const r = 760 * H.ease.inOut((u - 0.5) * 2); ctx.fillStyle = PAL.ink; ctx.fillRect(0, 0, W, HH); ctx.save(); ctx.beginPath(); ctx.arc(640, 360, r, 0, Math.PI * 2); ctx.clip(); drawScene(ctx, next, t); ctx.restore(); }
      }
    } else {
      drawScene(ctx, cur, t);
      if (cur.tr === 'cut' && i > 0 && t < cur.cut + 0.12) { ctx.fillStyle = `rgba(255,255,255,${0.7 * (1 - ph(t, cur.cut, cur.cut + 0.12))})`; ctx.fillRect(0, 0, W, HH); }
    }
    chapterTag(ctx, t);
    H.vignette(ctx, Wd, Hd, 0.16, '40,20,60');
    if (!GR || GR.width !== Wd) { GR = H.layer(Wd, Hd); const gc = GR.getContext('2d'), id = gc.createImageData(Wd, Hd), dd = id.data, gr = H.rng(3); for (let j = 0; j < dd.length; j += 4) { const n = (gr() - 0.5) * 0.03 * 255, v = n > 0 ? 255 : 0; dd[j] = dd[j + 1] = dd[j + 2] = v; dd[j + 3] = Math.min(255, Math.abs(n) * (n > 0 ? 4 : 1.2)); } gc.putImageData(id, 0, 0); }
    ctx.drawImage(GR, 0, 0);
  }

  // ---------- sound: pops, whooshes, ticks and dings; every scene adds its own hits ----------
  function scoreSound(k0) {
    const k = Object.create(k0); k.play = (n, tt, o = {}) => { if (n === 'bubble') { [0, 0.11, 0.25, 0.4].forEach((d, i) => k0.play('blip', tt + d, { f: 520 + i * 170, gain: (o.gain || 0.5) * 0.55, minor: true })); return; } return k0.play(n, tt, o); };
    const D = DURATION;
    k.bed('room', 0, D, { gain: 0.2 });
    k.music('pulse', 0.2, D, { bpm: 96, gain: 0.22, chords: [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['G3', 'B3', 'D4', 'F4']] });
    SC.forEach((s, i) => {
      if (i > 0) {
        if (s.tr === 'circle') { k.play('whoosh', s.cut - 0.3, { dur: 0.6, gain: 0.8, top: 2400 }); k.play('tock', s.cut + 0.2, { f: 420, gain: 0.4, minor: true }); }
        else if (s.tr === 'slide') { k.play('swish', s.cut - 0.2, { gain: 0.7 }); }
        else if (s.tr === 'iris') { k.play('whoosh', s.cut - 0.35, { dur: 0.7, gain: 0.7, top: 1600 }); }
        else k.play('thud', s.cut, { f: 110, gain: 0.5 });
      }
      if (s.sfx) s.sfx(k);
    });
  }

  // ---------- the YouTube thumbnail: one still in the style, huge words ----------
  function thumbnail(ctx, Wd, Hd) {
    ctx.save(); ctx.scale(Wd / W, Hd / HH);
    sky(ctx, '#2d2a6e', '#5b3fa0'); dots(ctx, 3, 18, '#ffffff', 0.08, 0);
    stomach(ctx, 900, 430, 1.75, 1.2, { acid: 0.6, face: 'happy', sh: 20, inside: (c) => { bolt(c, -40, 60, 0.55, 0.5); for (let i = 0; i < 6; i++) circle(c, -40 + Math.sin(i * 2.3) * 40, 20 - i * 14, 6, 'rgba(255,255,255,0.7)'); } });
    ctx.save(); ctx.translate(40, 0);
    longShadow(ctx, (c) => text(ctx, 'EATS METAL', 0, 170, 130, c || PAL.acid, 700, 'left'), 18);
    longShadow(ctx, (c) => { ctx.fillStyle = c || PAL.yellow; rr(ctx, 0, 290, 560, 170, 85); ctx.fill(); }, 16);
    text(ctx, 'NOT YOU?', 280, 380, 104, PAL.ink, 700);
    ctx.restore();
    H.vignette(ctx, W, HH, 0.16, '40,20,60');
    ctx.restore();
  }

  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;

})();
