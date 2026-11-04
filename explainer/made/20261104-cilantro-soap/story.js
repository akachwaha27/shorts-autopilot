// ================= Chalkboard Lesson, 16:9 1280x720: "Why does cilantro taste like soap to some people?" =================
// Unattended run: no storyboard step. BEATS copied from phrases.json (Kokoro am_michael).
// One long slate, one stretch of board per scene, 1500 world px apart. The camera tracks along it between some boards
// (a chalk leader arrow is drawn on the way) and the felt eraser wipes for the others.
// Rendering engine (slate, chalk, tray, eraser, sound scoring) carried over from the Chalkboard Lesson house build.
(function () {
  const W = 1280, HH = 720;
  const BEATS = [
    { id: 'p0', s: 0.25, e: 2.08, w: {"your": 0.25, "cilantro": 0.53, "tastes": 1.09, "like": 1.52, "soap": 1.8} },  // Your cilantro tastes like soap,
    { id: 'p1', s: 2.38, e: 3.82, w: {"to": 2.38, "one": 2.54, "in": 2.78, "eight": 2.94, "people": 3.34} },  // to one in eight people,
    { id: 'p2', s: 4.12, e: 5.25, w: {"and": 4.12, "you": 4.33, "might": 4.54, "be": 4.9, "one": 5.04} },  // and you might be one.
    { id: 'p3', s: 5.80, e: 7.34, w: {"same": 5.8, "leaf": 6.18, "taco": 6.95} },  // Same leaf, same taco.
    { id: 'p4', s: 7.89, e: 9.72, w: {"you": 7.89, "get": 8.08, "something": 8.26, "fresh": 8.83, "and": 9.15, "lemony": 9.34} },  // You get something fresh and lemony.
    { id: 'p5', s: 10.27, e: 12.56, w: {"your": 10.27, "friend": 10.55, "gets": 10.96, "a": 11.24, "mouthful": 11.31, "of": 11.86, "dish": 12.0, "soap": 12.28} },  // Your friend gets a mouthful of dish soap
    { id: 'p6', s: 13.11, e: 14.18, w: {"so": 13.11, "whos": 13.3, "right": 13.69} },  // So who's right?
    { id: 'p7', s: 14.73, e: 16.09, w: {"weirdly": 14.73, "you": 15.29, "both": 15.53, "are": 15.85} },  // Weirdly, you both are.
    { id: 'p8', s: 16.64, e: 18.46, w: {"and": 16.64, "the": 16.83, "answer": 17.03, "starts": 17.42, "in": 17.81, "your": 17.94, "nose": 18.2} },  // And the answer starts in your nose.
    { id: 'p9', s: 19.01, e: 21.74, w: {"people": 19.01, "have": 19.41, "used": 19.67, "this": 19.94, "herb": 20.21, "for": 20.47, "thousands": 20.67, "of": 21.27, "years": 21.4} },  // People have used this herb for thousands
    { id: 'p10', s: 22.04, e: 24.05, w: {"all": 22.04, "the": 22.25, "way": 22.46, "back": 22.66, "to": 22.94, "babylonians": 23.29} },  // all the way back to the Babylonians.
    { id: 'p11', s: 24.60, e: 26.17, w: {"and": 24.6, "the": 24.8, "haters": 25.0, "have": 25.39, "been": 25.65, "loud": 25.91} },  // And the haters have been loud.
    { id: 'p12', s: 26.72, e: 28.68, w: {"before": 26.72, "soap": 27.17, "was": 27.47, "the": 27.7, "goto": 27.92, "insult": 28.23} },  // Before soap was the go-to insult,
    { id: 'p13', s: 28.98, e: 31.08, w: {"people": 28.98, "said": 29.4, "it": 29.68, "smelled": 29.82, "like": 30.31, "bedbugs": 30.59} },  // people said it smelled like bedbugs.
    { id: 'p14', s: 31.63, e: 33.35, w: {"chef": 31.63, "julia": 31.94, "child": 32.33, "once": 32.72, "said": 33.04} },  // Chef Julia Child once said,
    { id: 'p15', s: 33.65, e: 35.20, w: {"shed": 33.65, "pick": 33.93, "it": 34.21, "out": 34.36, "of": 34.57, "her": 34.71, "food": 34.92} },  // she'd pick it out of her food,
    { id: 'p16', s: 35.50, e: 36.95, w: {"and": 35.5, "throw": 35.72, "it": 36.08, "on": 36.22, "the": 36.37, "floor": 36.59} },  // and throw it on the floor.
    { id: 'p17', s: 37.50, e: 39.53, w: {"so": 37.5, "how": 37.64, "many": 37.84, "people": 38.11, "really": 38.51, "dislike": 38.92, "it": 39.39} },  // So how many people really dislike it?
    { id: 'p18', s: 40.08, e: 44.09, w: {"one": 40.08, "canadian": 40.3, "study": 40.91, "asked": 41.29, "nearly": 41.67, "fourteen": 42.12, "hundred": 42.73, "young": 43.26, "adults": 43.63} },  // One Canadian study asked nearly fourteen
    { id: 'p19', s: 44.64, e: 46.68, w: {"dislike": 44.64, "ran": 45.11, "from": 45.32, "just": 45.59, "three": 45.86, "percent": 46.2} },  // Dislike ran from just three percent,
    { id: 'p20', s: 46.98, e: 49.04, w: {"all": 46.98, "the": 47.19, "way": 47.4, "up": 47.62, "to": 47.76, "twentyone": 47.9, "percent": 48.54} },  // all the way up to twenty-one percent,
    { id: 'p21', s: 49.34, e: 51.20, w: {"depending": 49.34, "on": 49.96, "family": 50.1, "background": 50.51} },  // depending on family background.
    { id: 'p22', s: 51.75, e: 53.39, w: {"and": 51.75, "some": 51.95, "of": 52.21, "the": 52.34, "lowest": 52.54, "numbers": 52.93} },  // And some of the lowest numbers
    { id: 'p23', s: 53.69, e: 56.72, w: {"came": 53.69, "from": 53.97, "people": 54.24, "with": 54.65, "hispanic": 54.93, "and": 55.48, "south": 55.69, "asian": 56.03, "roots": 56.38} },  // came from people with Hispanic and South
    { id: 'p24', s: 57.02, e: 59.41, w: {"whose": 57.02, "cooking": 57.37, "uses": 57.86, "cilantro": 58.14, "all": 58.7, "the": 58.92, "time": 59.13} },  // whose cooking uses cilantro all the time
    { id: 'p25', s: 59.96, e: 61.88, w: {"now": 59.96, "lets": 60.22, "zoom": 60.57, "in": 60.92, "on": 61.1, "one": 61.27, "leaf": 61.53} },  // Now, let's zoom in on one leaf.
    { id: 'p26', s: 62.43, e: 64.63, w: {"that": 62.43, "smell": 62.74, "is": 63.11, "a": 63.27, "big": 63.34, "mix": 63.57, "of": 63.79, "chemicals": 63.95} },  // That smell is a big mix of chemicals,
    { id: 'p27', s: 64.93, e: 67.44, w: {"and": 64.93, "some": 65.12, "of": 65.39, "the": 65.52, "main": 65.72, "ones": 65.98, "are": 66.25, "called": 66.45, "aldehydes": 66.84} },  // and some of the main ones are called ald
    { id: 'p28', s: 67.99, e: 70.23, w: {"picture": 67.99, "a": 68.51, "long": 68.59, "chain": 68.88, "of": 69.26, "carbon": 69.41, "atoms": 69.86} },  // Picture a long chain of carbon atoms,
    { id: 'p29', s: 70.53, e: 72.70, w: {"with": 70.53, "one": 70.85, "little": 71.09, "oxygen": 71.57, "on": 72.06, "the": 72.22, "end": 72.46} },  // with one little oxygen on the end.
    { id: 'p30', s: 73.25, e: 74.84, w: {"one": 73.25, "of": 73.46, "them": 73.61, "called": 73.9, "decenal": 74.33} },  // One of them, called decenal,
    { id: 'p31', s: 75.14, e: 77.94, w: {"gets": 75.14, "described": 75.46, "as": 76.18, "soapy": 76.34, "fatty": 76.74, "and": 77.14, "pungent": 77.38} },  // gets described as soapy, fatty and punge
    { id: 'p32', s: 78.49, e: 79.55, w: {"heres": 78.49, "the": 78.9, "twist": 79.15} },  // Here's the twist.
    { id: 'p33', s: 80.10, e: 82.13, w: {"soap": 80.1, "makers": 80.43, "use": 80.91, "aldehydes": 81.16, "too": 81.88} },  // Soap makers use aldehydes too.
    { id: 'p34', s: 82.68, e: 86.12, w: {"cilantro": 82.68, "and": 83.32, "soap": 83.56, "really": 83.88, "do": 84.36, "share": 84.52, "a": 84.92, "family": 85.0, "of": 85.48, "smells": 85.64} },  // Cilantro and soap really do share a fami
    { id: 'p35', s: 86.67, e: 90.41, w: {"scientists": 86.67, "still": 87.4, "arent": 87.77, "sure": 88.13, "which": 88.43, "exact": 88.79, "molecule": 89.16, "is": 89.75, "to": 89.9, "blame": 90.04} },  // Scientists still aren't sure which exact
    { id: 'p36', s: 90.96, e: 93.18, w: {"so": 90.96, "why": 91.11, "does": 91.34, "only": 91.65, "your": 91.95, "friend": 92.26, "notice": 92.72} },  // So why does only your friend notice?
    { id: 'p37', s: 93.73, e: 97.36, w: {"scientists": 93.73, "suspect": 94.5, "this": 95.04, "is": 95.35, "mostly": 95.51, "about": 95.97, "smell": 96.36, "not": 96.74, "taste": 96.97} },  // Scientists suspect this is mostly about 
    { id: 'p38', s: 97.91, e: 100.61, w: {"when": 97.91, "you": 98.16, "chew": 98.35, "scents": 98.6, "float": 98.98, "up": 99.29, "the": 99.41, "back": 99.6, "of": 99.85, "your": 99.98, "throat": 100.23} },  // When you chew, scents float up the back 
    { id: 'p39', s: 100.91, e: 102.14, w: {"and": 100.91, "into": 101.15, "your": 101.48, "nose": 101.81} },  // and into your nose.
    { id: 'p40', s: 102.69, e: 105.69, w: {"up": 102.69, "there": 102.83, "youve": 103.17, "got": 103.51, "hundreds": 103.71, "of": 104.26, "kinds": 104.4, "smell": 104.87, "sensors": 105.21} },  // Up there, you've got hundreds of kinds o
    { id: 'p41', s: 106.24, e: 107.96, w: {"think": 106.24, "of": 106.63, "them": 106.79, "as": 107.1, "tiny": 107.26, "locks": 107.57} },  // Think of them as tiny locks,
    { id: 'p42', s: 108.26, e: 110.36, w: {"and": 108.26, "every": 108.49, "scent": 108.88, "molecule": 109.27, "as": 109.9, "a": 110.05, "key": 110.13} },  // and every scent molecule as a key.
    { id: 'p43', s: 110.91, e: 114.10, w: {"in": 110.91, "twenty": 111.06, "twelve": 111.51, "researchers": 111.95, "at": 112.77, "twentythree": 112.91, "and": 113.73, "me": 113.95} },  // In twenty twelve, researchers at twenty-
    { id: 'p44', s: 114.40, e: 117.78, w: {"looked": 114.4, "at": 114.85, "the": 115.0, "dna": 115.23, "of": 115.45, "about": 115.6, "twentyfive": 115.98, "thousand": 116.73, "people": 117.33} },  // looked at the DNA of about twenty-five t
    { id: 'p45', s: 118.33, e: 119.75, w: {"they": 118.33, "asked": 118.62, "one": 118.97, "question": 119.19} },  // They asked one question.
    { id: 'p46', s: 120.30, e: 122.47, w: {"does": 120.3, "cilantro": 120.59, "taste": 121.17, "like": 121.53, "soap": 121.82, "to": 122.11, "you": 122.25} },  // Does cilantro taste like soap to you?
    { id: 'p47', s: 123.02, e: 125.52, w: {"and": 123.02, "they": 123.26, "found": 123.58, "one": 123.98, "tiny": 124.23, "spot": 124.55, "in": 124.87, "the": 125.03, "dna": 125.28} },  // And they found one tiny spot in the DNA,
    { id: 'p48', s: 125.82, e: 128.11, w: {"right": 125.82, "next": 126.19, "to": 126.48, "a": 126.63, "cluster": 126.7, "of": 127.22, "smell": 127.37, "genes": 127.74} },  // right next to a cluster of smell genes.
    { id: 'p49', s: 128.66, e: 131.33, w: {"one": 128.66, "of": 128.91, "those": 129.07, "genes": 129.49, "is": 129.91, "called": 130.08, "o": 130.58, "r": 130.66, "six": 130.75, "a": 131.0, "two": 131.08} },  // One of those genes is called O R six A t
    { id: 'p50', s: 131.63, e: 134.75, w: {"and": 131.63, "it": 131.84, "builds": 131.98, "a": 132.4, "lock": 132.46, "thats": 132.74, "great": 133.09, "at": 133.44, "catching": 133.57, "aldehydes": 134.13} },  // and it builds a lock that's great at cat
    { id: 'p51', s: 135.30, e: 138.34, w: {"some": 135.3, "peoples": 135.62, "noses": 136.18, "may": 136.58, "pick": 136.82, "up": 137.14, "that": 137.3, "soapy": 137.62, "note": 138.02} },  // Some people's noses may pick up that soa
    { id: 'p52', s: 138.64, e: 139.89, w: {"a": 138.64, "lot": 138.73, "more": 139.0, "loudly": 139.35} },  // a lot more loudly.
    { id: 'p53', s: 140.44, e: 141.53, w: {"case": 140.44, "closed": 140.73, "right": 141.17} },  // Case closed, right?
    { id: 'p54', s: 142.08, e: 142.94, w: {"not": 142.08, "quite": 142.41} },  // Not quite.
    { id: 'p55', s: 143.49, e: 145.43, w: {"heres": 143.49, "the": 143.85, "number": 144.07, "nobody": 144.5, "expects": 144.93} },  // Here's the number nobody expects.
    { id: 'p56', s: 145.98, e: 148.42, w: {"that": 145.98, "spot": 146.25, "explains": 146.51, "only": 147.04, "about": 147.3, "half": 147.63, "a": 147.9, "percent": 147.96} },  // That spot explains only about half a per
    { id: 'p57', s: 148.72, e: 150.58, w: {"of": 148.72, "who": 148.86, "tastes": 149.07, "soap": 149.48, "and": 149.76, "doesnt": 150.17} },  // of who tastes soap and who doesn't.
    { id: 'p58', s: 151.13, e: 152.36, w: {"half": 151.13, "of": 151.44, "one": 151.59, "percent": 151.82} },  // Half of one percent!
    { id: 'p59', s: 152.91, e: 155.29, w: {"another": 152.91, "twin": 153.41, "study": 153.7, "turned": 154.06, "up": 154.49, "more": 154.64, "genes": 154.92} },  // Another twin study turned up more genes,
    { id: 'p60', s: 155.59, e: 157.62, w: {"including": 155.59, "some": 156.16, "linked": 156.41, "to": 156.8, "bitter": 156.92, "taste": 157.31} },  // including some linked to bitter taste.
    { id: 'p61', s: 158.17, e: 159.96, w: {"so": 158.17, "theres": 158.32, "no": 158.77, "single": 158.92, "soap": 159.36, "gene": 159.66} },  // So there's no single soap gene.
    { id: 'p62', s: 160.51, e: 163.90, w: {"its": 160.51, "a": 160.73, "small": 160.81, "nudge": 161.19, "mixed": 161.56, "with": 161.94, "everything": 162.24, "else": 162.99, "about": 163.3, "you": 163.67} },  // It's a small nudge, mixed with everythin
    { id: 'p63', s: 164.45, e: 166.09, w: {"like": 164.45, "what": 164.74, "you": 165.02, "ate": 165.24, "growing": 165.45, "up": 165.95} },  // Like what you ate growing up.
    { id: 'p64', s: 166.64, e: 168.27, w: {"remember": 166.64, "those": 167.21, "low": 167.56, "numbers": 167.77} },  // Remember those low numbers?
    { id: 'p65', s: 168.82, e: 171.42, w: {"if": 168.82, "cilantro": 168.97, "was": 169.6, "in": 169.84, "your": 170.0, "food": 170.31, "from": 170.63, "day": 170.94, "one": 171.18} },  // If cilantro was in your food from day on
    { id: 'p66', s: 171.72, e: 173.20, w: {"youve": 171.72, "had": 172.05, "a": 172.25, "lot": 172.32, "of": 172.52, "practice": 172.66} },  // you've had a lot of practice.
    { id: 'p67', s: 173.75, e: 176.48, w: {"the": 173.75, "lead": 173.94, "researcher": 174.19, "said": 174.83, "this": 175.08, "isnt": 175.33, "like": 175.59, "your": 175.84, "height": 176.1} },  // The lead researcher said this isn't like
    { id: 'p68', s: 177.03, e: 178.06, w: {"you": 177.03, "arent": 177.19, "stuck": 177.46, "with": 177.73, "it": 177.95} },  // You aren't stuck with it.
    { id: 'p69', s: 178.61, e: 180.90, w: {"scientists": 178.61, "say": 179.28, "eating": 179.48, "it": 179.89, "again": 180.02, "and": 180.36} },  // Scientists say eating it again and again
    { id: 'p70', s: 181.20, e: 182.88, w: {"can": 181.2, "slowly": 181.43, "soften": 181.89, "the": 182.35, "soap": 182.58} },  // can slowly soften the soap.
    { id: 'p71', s: 183.43, e: 184.73, w: {"and": 183.43, "theres": 183.61, "a": 183.96, "kitchen": 184.02, "trick": 184.44} },  // And there's a kitchen trick.
    { id: 'p72', s: 185.28, e: 186.33, w: {"crush": 185.28, "the": 185.66, "leaves": 185.88} },  // Crush the leaves.
    { id: 'p73', s: 186.88, e: 188.62, w: {"crushing": 186.88, "releases": 187.49, "enzymes": 188.09} },  // Crushing releases enzymes,
    { id: 'p74', s: 188.92, e: 192.14, w: {"that": 188.92, "break": 189.21, "those": 189.58, "soapy": 189.94, "aldehydes": 190.31, "into": 190.97, "milder": 191.26, "smells": 191.7} },  // that break those soapy aldehydes into mi
    { id: 'p75', s: 192.69, e: 196.52, w: {"thats": 192.69, "why": 193.04, "food": 193.25, "scientists": 193.54, "suggest": 194.25, "starting": 194.74, "with": 195.31, "cilantro": 195.6, "pesto": 196.16} },  // That's why food scientists suggest start
    { id: 'p76', s: 197.07, e: 199.63, w: {"so": 197.07, "next": 197.2, "time": 197.45, "your": 197.71, "friend": 197.97, "picks": 198.35, "it": 198.67, "out": 198.8, "of": 198.99, "the": 199.12, "salsa": 199.31} },  // So next time your friend picks it out of
    { id: 'p77', s: 199.93, e: 201.16, w: {"go": 199.93, "easy": 200.14, "on": 200.55, "them": 200.75} },  // go easy on them.
    { id: 'p78', s: 201.71, e: 202.95, w: {"they": 201.71, "arent": 201.97, "being": 202.29, "picky": 202.62} },  // They aren't being picky.
    { id: 'p79', s: 203.50, e: 205.59, w: {"their": 203.5, "nose": 203.83, "is": 204.1, "finding": 204.24, "something": 204.71, "real": 205.32} },  // Their nose is finding something real,
    { id: 'p80', s: 205.89, e: 207.42, w: {"that": 205.89, "yours": 206.16, "might": 206.49, "be": 206.82, "missing": 206.96} },  // that yours might be missing.
    { id: 'p81', s: 207.97, e: 210.77, w: {"next": 207.97, "up": 208.26, "how": 208.4, "do": 208.62, "dolphins": 208.76, "sleep": 209.34, "without": 209.7, "drowning": 210.2} },  // Next up, how do dolphins sleep without d
  ];
  const B = BEATS;
  const T = (i, w) => { const v = B[i].w[w]; if (v == null) throw new Error('no word ' + w + ' in phrase ' + i); return v; };
  const DURATION = B[B.length - 1].e + 1.0;

  // ---------- geometry (from the reference) ----------
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const win = (t, a, b) => clamp((t - a) / (b - a));
  const eio = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const seg = (pts, step = 2.5) => { const out = []; for (let i = 0; i < pts.length - 1; i++) { const [x0, y0] = pts[i], [x1, y1] = pts[i + 1]; const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / step)); for (let j = 0; j < n; j++) out.push([x0 + (x1 - x0) * j / n, y0 + (y1 - y0) * j / n]); } out.push(pts[pts.length - 1]); return out; };
  const normals = (P) => P.map((p, i) => { const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)]; const dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1; return [-dy / d, dx / d]; });
  const wob = (pts, nz, seed, amp = 1.5, freq = 0.012) => { const N = normals(pts); let L = 0; return pts.map((p, i) => { if (i) L += Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]); const o = nz.n2(L * freq + seed * 1.37, seed * 0.71) * amp + nz.n2(L * freq * 6 + seed, seed + 3.3) * amp * 0.25; return [p[0] + N[i][0] * o, p[1] + N[i][1] * o]; }); };
  const circ = (x, y, rx, ry, a0 = 0, a1 = Math.PI * 2, n = 0) => { n = n || Math.max(12, Math.ceil(Math.abs(a1 - a0) * Math.max(rx, ry) / 6)); const o = []; for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; o.push([x + Math.cos(a) * rx, y + Math.sin(a) * ry]); } return o; };
  const quad = (p0, p1, p2, n = 30) => { const o = []; for (let i = 0; i <= n; i++) { const t = i / n, m = 1 - t; o.push([m * m * p0[0] + 2 * m * t * p1[0] + t * t * p2[0], m * m * p0[1] + 2 * m * t * p1[1] + t * t * p2[1]]); } return o; };
  const cubic = (p0, p1, p2, p3, n = 40) => { const o = []; for (let i = 0; i <= n; i++) { const t = i / n, m = 1 - t; o.push([m * m * m * p0[0] + 3 * m * m * t * p1[0] + 3 * m * t * t * p2[0] + t * t * t * p3[0], m * m * m * p0[1] + 3 * m * m * t * p1[1] + 3 * m * t * t * p2[1] + t * t * t * p3[1]]); } return o; };
  const rrect = (x, y, w, h, r) => { const o = [[x + r, y], [x + w - r, y]]; o.push(...circ(x + w - r, y + r, r, r, -Math.PI / 2, 0, 5).slice(1)); o.push([x + w, y + h - r]); o.push(...circ(x + w - r, y + h - r, r, r, 0, Math.PI / 2, 5).slice(1)); o.push([x + r, y + h]); o.push(...circ(x + r, y + h - r, r, r, Math.PI / 2, Math.PI, 5).slice(1)); o.push([x, y + r]); o.push(...circ(x + r, y + r, r, r, Math.PI, Math.PI * 1.5, 5).slice(1)); o.push([x + r + 6, y - 1]); return o; };
  const head = (P, len = 20, spread = 0.5) => { const a = P[P.length - 1], b = P[Math.max(0, P.length - 4)], an = Math.atan2(a[1] - b[1], a[0] - b[0]); return [[a[0] - Math.cos(an - spread) * len, a[1] - Math.sin(an - spread) * len], a, [a[0] - Math.cos(an + spread) * len, a[1] - Math.sin(an + spread) * len]]; };
  const xf = (P, dx, dy, rot = 0, px = 0, py = 0) => P.map(([x, y]) => { const c = Math.cos(rot), s = Math.sin(rot), ux = x - px, uy = y - py; return [px + ux * c - uy * s + dx, py + ux * s + uy * c + dy]; });
  const fmt = (n) => String(Math.round(n));


  // ---------- drawings (polylines in board coords, 1280x720) ----------
  const lerp = (a, b, u) => a + (b - a) * u;
  const S = (i) => B[i].s, E = (i) => B[i].e, F = (i, f) => B[i].s + (B[i].e - B[i].s) * f;
  const leaf = (x, y, s) => {
    const o = [[x, y + 0.42 * s]];
    for (let i = 0; i <= 90; i++) {
      const u = i / 90, a = lerp(Math.PI * 1.13, Math.PI * 1.87 + 0.0, u) ;
      const lobes = 0.78 + 0.22 * Math.pow(Math.abs(Math.sin(u * Math.PI * 3)), 0.7), sc = 0.05 * Math.abs(Math.sin(u * Math.PI * 15));
      o.push([x + Math.cos(a) * s * (lobes + sc), y + 0.42 * s + Math.sin(a) * s * (lobes + sc) * 1.08]);
    }
    o.push([x, y + 0.42 * s]);
    return [o, [[x, y + 0.42 * s], [x + 0.03 * s, y + 1.0 * s]], [[x, y + 0.42 * s], [x, y - 0.42 * s]], [[x, y + 0.42 * s], [x - 0.48 * s, y - 0.1 * s]], [[x, y + 0.42 * s], [x + 0.48 * s, y - 0.1 * s]]];
  };
  const bubbles = (x, y, s) => [[0, 0, 0.22], [0.42, -0.34, 0.15], [-0.4, -0.3, 0.12], [0.08, -0.62, 0.1]].map(([a, b2, r]) => circ(x + a * s, y + b2 * s, r * s, r * s));
  const soapBar = (x, y, w, h) => [rrect(x - w / 2, y - h / 2, w, h, 26), rrect(x - w / 2 + 16, y - h / 2 + 14, w - 32, h - 28, 18)];
  const face = (x, y, r, mood) => {
    const o = [circ(x, y, r, r * 1.05, -1.4, 4.9)];
    if (mood === 'yuck') {
      o.push([[x - r * 0.52, y - r * 0.32], [x - r * 0.16, y - r * 0.16]], [[x + r * 0.52, y - r * 0.32], [x + r * 0.16, y - r * 0.16]]);
      o.push(quad([x - r * 0.45, y + r * 0.42], [x, y + r * 0.2], [x + r * 0.45, y + r * 0.42], 12));
      o.push(quad([x - r * 0.2, y + r * 0.34], [x, y + r * 0.85], [x + r * 0.24, y + r * 0.34], 12));
    } else if (mood === 'calm') {
      o.push(circ(x - r * 0.35, y - r * 0.2, r * 0.08, r * 0.08), circ(x + r * 0.35, y - r * 0.2, r * 0.08, r * 0.08));
      o.push([[x - r * 0.3, y + r * 0.42], [x + r * 0.3, y + r * 0.42]]);
    } else {
      o.push(quad([x - r * 0.52, y - r * 0.2], [x - r * 0.34, y - r * 0.42], [x - r * 0.16, y - r * 0.2], 8), quad([x + r * 0.16, y - r * 0.2], [x + r * 0.34, y - r * 0.42], [x + r * 0.52, y - r * 0.2], 8));
      o.push(quad([x - r * 0.5, y + r * 0.25], [x, y + r * 0.85], [x + r * 0.5, y + r * 0.25], 14));
    }
    return o;
  };
  const person = (x, y, h) => [circ(x, y - h * 0.82, h * 0.15, h * 0.16), [[x, y - h * 0.65], [x, y - h * 0.25]], [[x, y - h * 0.25], [x - h * 0.17, y]], [[x, y - h * 0.25], [x + h * 0.17, y]], [[x - h * 0.22, y - h * 0.5], [x + h * 0.22, y - h * 0.5]]];
  const taco = (x, y, s) => {
    const fill = []; for (let i = 0; i <= 36; i++) { const a = Math.PI + (i / 36) * Math.PI; fill.push([x + Math.cos(a) * s * 1.02 + Math.sin(i * 1.7) * 3, y + Math.sin(a) * s * 1.02 - 10 + Math.sin(i * 2.3) * 7]); }
    return [circ(x, y, s, s * 0.95, Math.PI, Math.PI * 2), [[x - s, y], [x + s, y]], circ(x, y + 12, s * 0.94, s * 0.82, Math.PI * 1.02, Math.PI * 1.98), fill];
  };
  // a profile facing left: forehead, bridge, nose tip, lip, chin
  const nose = (x, y, s) => [
    cubic([x + 0.1 * s, y - 1.25 * s], [x - 0.15 * s, y - 1.1 * s], [x - 0.12 * s, y - 0.75 * s], [x - 0.15 * s, y - 0.55 * s], 20),
    cubic([x - 0.15 * s, y - 0.55 * s], [x - 0.3 * s, y - 0.25 * s], [x - 0.68 * s, y + 0.08 * s], [x - 0.55 * s, y + 0.2 * s], 20),
    cubic([x - 0.55 * s, y + 0.2 * s], [x - 0.4 * s, y + 0.32 * s], [x - 0.3 * s, y + 0.24 * s], [x - 0.2 * s, y + 0.28 * s], 14),
    quad([x - 0.2 * s, y + 0.28 * s], [x - 0.4 * s, y + 0.46 * s], [x - 0.26 * s, y + 0.6 * s], 10),
    quad([x - 0.26 * s, y + 0.6 * s], [x - 0.42 * s, y + 0.74 * s], [x - 0.22 * s, y + 0.88 * s], 10),
    cubic([x - 0.22 * s, y + 0.88 * s], [x - 0.35 * s, y + 1.12 * s], [x - 0.18 * s, y + 1.28 * s], [x + 0.1 * s, y + 1.25 * s], 16),
  ];
  const bug = (x, y, s) => {
    const o = [circ(x, y, s, s * 0.72), circ(x - s * 1.12, y, s * 0.3, s * 0.26), [[x - s * 0.5, y - s * 0.62], [x - s * 0.5, y + s * 0.62]], [[x + s * 0.2, y - s * 0.7], [x + s * 0.2, y + s * 0.7]]];
    [-0.5, 0.05, 0.55].forEach((k) => { o.push([[x + k * s, y - s * 0.65], [x + k * s - s * 0.2, y - s * 1.2]]); o.push([[x + k * s, y + s * 0.65], [x + k * s - s * 0.2, y + s * 1.2]]); });
    o.push(quad([x - s * 1.35, y - s * 0.12], [x - s * 1.7, y - s * 0.5], [x - s * 1.9, y - s * 0.3], 8), quad([x - s * 1.35, y + s * 0.12], [x - s * 1.7, y + s * 0.5], [x - s * 1.9, y + s * 0.3], 8));
    return o;
  };
  const chefHat = (x, y, s) => [
    [[x - s * 0.62, y + s * 0.65], [x - s * 0.62, y - s * 0.05]],
    cubic([x - s * 0.62, y - s * 0.05], [x - s * 1.25, y - s * 0.35], [x - s * 0.72, y - s * 1.05], [x - s * 0.28, y - s * 0.72], 24),
    cubic([x - s * 0.28, y - s * 0.72], [x - s * 0.15, y - s * 1.2], [x + s * 0.3, y - s * 1.15], [x + s * 0.3, y - s * 0.72], 20),
    cubic([x + s * 0.3, y - s * 0.72], [x + s * 0.8, y - s * 1.05], [x + s * 1.25, y - s * 0.35], [x + s * 0.62, y - s * 0.05], 24),
    [[x + s * 0.62, y - s * 0.05], [x + s * 0.62, y + s * 0.65]], rrect(x - s * 0.66, y + s * 0.65, s * 1.32, s * 0.3, 8),
  ];
  const chainPts = (x, y, n, st, amp) => { const o = []; for (let i = 0; i < n; i++) o.push([x + i * st, y + (i % 2 ? -amp : amp)]); return o; };
  const lock = (x, y, s) => [rrect(x - s * 0.5, y - s * 0.35, s, s * 0.85, 10), circ(x, y - s * 0.35, s * 0.3, s * 0.38, Math.PI, Math.PI * 2), circ(x, y + s * 0.02, s * 0.09, s * 0.09), [[x, y + s * 0.1], [x, y + s * 0.3]]];
  const key = (x, y, s) => [circ(x - s * 0.5, y, s * 0.2, s * 0.2), [[x - s * 0.3, y], [x + s * 0.5, y]], [[x + s * 0.3, y], [x + s * 0.3, y + s * 0.18]], [[x + s * 0.48, y], [x + s * 0.48, y + s * 0.22]]];
  const dnaStrands = (x0, y, len, amp, wl, ph = 0) => { const a = [], b2 = [], r = []; for (let x = 0; x <= len; x += 8) { a.push([x0 + x, y + Math.sin(x / wl + ph) * amp]); b2.push([x0 + x, y - Math.sin(x / wl + ph) * amp]); } for (let x = 20; x < len; x += 34) { const d = Math.sin(x / wl + ph) * amp; if (Math.abs(d) > amp * 0.2) r.push([[x0 + x, y + d], [x0 + x, y - d]]); } return { a, b: b2, r }; };
  const speech = (x, y, w, h) => [rrect(x - w / 2, y - h / 2, w, h, 26), [[x - w * 0.2, y + h / 2], [x - w * 0.32, y + h / 2 + 34], [x - w * 0.05, y + h / 2]]];
  const tongue = (x, y, s) => [cubic([x - s * 0.55, y - s * 0.5], [x - s * 0.7, y + s * 0.8], [x + s * 0.7, y + s * 0.8], [x + s * 0.55, y - s * 0.5], 24), [[x - s * 0.55, y - s * 0.5], [x + s * 0.55, y - s * 0.5]], [[x, y - s * 0.4], [x, y + s * 0.2]]];
  const mortar = (x, y, s) => [[[x - s, y - s * 0.4], [x + s, y - s * 0.4]], cubic([x - s, y - s * 0.4], [x - s * 0.9, y + s * 0.6], [x + s * 0.9, y + s * 0.6], [x + s, y - s * 0.4], 24), [[x - s * 0.4, y + s * 0.42], [x - s * 0.55, y + s * 0.7], [x + s * 0.55, y + s * 0.7], [x + s * 0.4, y + s * 0.42]]];
  const jar = (x, y, s) => [rrect(x - s * 0.6, y - s * 0.7, s * 1.2, s * 1.5, 22), rrect(x - s * 0.68, y - s * 1.0, s * 1.36, s * 0.3, 8)];
  const bowl = (x, y, s) => [[[x - s, y], [x + s, y]], cubic([x - s, y], [x - s * 0.9, y + s * 0.85], [x + s * 0.9, y + s * 0.85], [x + s, y], 24)];
  const pacman = (x, y, r, open) => { const o = circ(x, y, r, r, open, Math.PI * 2 - open, 24); return [[[x, y], ...o, [x, y]]]; };
  const dolphin = (x, y, s) => [
    cubic([x - s * 0.72, y - s * 0.02], [x - s * 0.62, y - s * 0.3], [x - s * 0.1, y - s * 0.56], [x + s * 0.5, y - s * 0.34], 26),
    cubic([x + s * 0.5, y - s * 0.34], [x + s * 0.8, y - s * 0.24], [x + s * 1.0, y - s * 0.3], [x + s * 1.2, y - s * 0.46], 16),
    cubic([x - s * 1.25, y + s * 0.1], [x - s * 0.6, y + s * 0.5], [x + s * 0.5, y + s * 0.42], [x + s * 1.2, y - s * 0.38], 34),
    quad([x - s * 0.72, y - s * 0.02], [x - s * 0.95, y + s * 0.02], [x - s * 1.25, y + s * 0.1], 10),
    quad([x - s * 1.22, y + s * 0.12], [x - s * 0.95, y + s * 0.17], [x - s * 0.68, y + s * 0.1], 10),
    quad([x - s * 0.02, y - s * 0.47], [x + s * 0.08, y - s * 0.78], [x + s * 0.42, y - s * 0.86], 12), quad([x + s * 0.42, y - s * 0.86], [x + s * 0.28, y - s * 0.6], [x + s * 0.36, y - s * 0.38], 10),
    quad([x - s * 0.32, y + s * 0.34], [x - s * 0.1, y + s * 0.74], [x + s * 0.2, y + s * 0.74], 12), quad([x + s * 0.2, y + s * 0.74], [x + s * 0.02, y + s * 0.52], [x + s * 0.04, y + s * 0.38], 10),
    quad([x + s * 1.2, y - s * 0.42], [x + s * 1.3, y - s * 0.8], [x + s * 1.62, y - s * 0.9], 12), quad([x + s * 1.62, y - s * 0.9], [x + s * 1.44, y - s * 0.6], [x + s * 1.26, y - s * 0.42], 10),
    quad([x + s * 1.2, y - s * 0.42], [x + s * 1.5, y - s * 0.42], [x + s * 1.7, y - s * 0.2], 12), quad([x + s * 1.7, y - s * 0.2], [x + s * 1.44, y - s * 0.3], [x + s * 1.22, y - s * 0.36], 10),
    quad([x - s * 0.56, y - s * 0.03], [x - s * 0.48, y + s * 0.02], [x - s * 0.4, y - s * 0.03], 8),
  ];
  const WD = 1500; // world px between boards
  const BXc = (b) => b * WD;
  const FONT = { title: '700 KPX "Kalam"', label: '400 KPX "Patrick Hand"', num: '700 KPX "Kalam"' };
  const fontOf = (it) => FONT[it.font].replace('KPX', (it.size * (it.font === 'label' ? 1.08 : 1)).toFixed(1) + 'px');
  let MC = null; const MCACHE = {};
  const measure = (s, font, size) => {
    const f = FONT[font].replace('KPX', (size * (font === 'label' ? 1.08 : 1)).toFixed(1) + 'px'), key = f + '|' + s;
    if (MCACHE[key] != null) return MCACHE[key];
    if (!MC) MC = document.createElement('canvas').getContext('2d');
    MC.font = f; const w = MC.measureText(s).width;
    if (document.fonts && document.fonts.check(f)) MCACHE[key] = w;
    return w;
  };
  const arrow = (D, pts, role, w, a, b) => { D.line(pts, role, w, a, b); D.line(head(pts, 26), role, w, b, b + 0.08); };

  // ---------- the story: one builder per board; only nearby boards are built each frame ----------
  const BOARDS = [];
  const board = (i0, i1, fn) => BOARDS.push({ i0, i1, fn, b: BOARDS.length });
  const chapter = (D, s, a) => D.text(s, 70, 88, 34, 'label', 'acc4', a, a + 0.3, { align: 'left' });

  board(0, 2, (D, t) => { // hook
    D.many(leaf(300, 240, 150), 'acc3', 6, S(0), T(0, 'cilantro') + 0.35);
    D.text('=', 545, 300, 110, 'title', 'ink', T(0, 'tastes') - 0.1, T(0, 'like'));
    D.many(soapBar(830, 280, 300, 170), 'ink', 6, T(0, 'soap') - 0.15, T(0, 'soap') + 0.2, { hit: true });
    D.text('SOAP', 830, 305, 74, 'title', 'acc2', T(0, 'soap') - 0.1, T(0, 'soap') + 0.25);
    D.many(bubbles(1050, 170, 90), 'acc4', 4, T(0, 'soap') + 0.05, E(0) + 0.1);
    D.text('1 in 8', 270, 560, 118, 'num', 'acc1', S(1) - 0.05, T(1, 'eight') + 0.2, { rot: -0.015 });
    for (let i = 0; i < 8; i++) { const a = S(1) + 0.1 + i * 0.08; D.many(person(540 + i * 85, 610, 118), i === 3 ? 'acc2' : 'ink', i === 3 ? 6 : 4.5, a, a + 0.25, { hit: i === 3 }); }
    D.text('you?', 795, 470, 58, 'title', 'acc2', T(2, 'you') - 0.1, E(2));
  });
  board(3, 5, (D, t) => { // same leaf, two experiences
    D.many(taco(640, 260, 130), 'acc1', 6, S(3), F(3, 0.6));
    D.many(leaf(640, 110, 34), 'acc3', 4, F(3, 0.2), F(3, 0.6));
    D.text('same taco', 640, 330, 48, 'title', 'acc1', F(3, 0.4), E(3));
    D.many(face(240, 300, 110), 'ink', 6, S(4), T(4, 'you') + 0.4);
    D.text('fresh!', 240, 490, 72, 'title', 'acc3', T(4, 'fresh') - 0.1, T(4, 'fresh') + 0.3);
    D.text('lemony', 240, 570, 66, 'label', 'acc1', T(4, 'lemony') - 0.1, T(4, 'lemony') + 0.3);
    D.many(face(1040, 300, 110, 'yuck'), 'ink', 6, S(5), T(5, 'friend') + 0.4);
    D.text('your friend', 1040, 150, 44, 'label', 'ink', T(5, 'your') - 0.1, T(5, 'friend') + 0.3);
    D.text('DISH SOAP', 1040, 510, 78, 'title', 'acc2', T(5, 'dish') - 0.1, T(5, 'soap') + 0.3, { rot: -0.02 });
    D.many(bubbles(1215, 215, 70), 'acc4', 4, T(5, 'soap') - 0.05, E(5) + 0.1);
  });
  board(6, 8, (D, t) => { // who's right
    D.text("who's right?", 400, 170, 86, 'title', 'ink', S(6) - 0.05, E(6));
    D.text('BOTH!', 400, 350, 150, 'title', 'acc1', T(7, 'both') - 0.1, T(7, 'both') + 0.3, { rot: -0.03 });
    D.line([[210, 380], [590, 370]], 'acc2', 8, E(7) - 0.1, E(7) + 0.1, { hit: true });
    D.many(nose(930, 320, 220), 'ink', 7, S(8), T(8, 'nose') + 0.15);
    D.text('your nose', 400, 545, 76, 'title', 'acc3', T(8, 'your') - 0.1, T(8, 'nose') + 0.2);
    arrow(D, quad([585, 530], [700, 520], [790, 420], 18), 'acc3', 6, T(8, 'nose'), E(8) + 0.1);
  });
  board(9, 10, (D, t) => { // history
    chapter(D, 'part 1: the haters', S(9) - 0.1);
    D.line([[120, 450], [1160, 446]], 'ink', 6, S(9), F(9, 0.7));
    [[1110, 'today'], [230, 'Babylon']].forEach(([x, s], i) => { D.line([[x, 430], [x, 470]], 'ink', 5, F(9, 0.2 + i * 0.2), F(9, 0.3 + i * 0.2)); D.text(s, x, 525, 46, 'label', i === 1 ? 'acc1' : 'ink', i === 1 ? T(10, 'babylonians') - 0.1 : F(9, 0.3), i === 1 ? T(10, 'babylonians') + 0.3 : F(9, 0.5)); });
    D.text('thousands of years', 660, 230, 74, 'title', 'acc1', T(9, 'thousands') - 0.1, T(9, 'years') + 0.2);
    D.many(leaf(1110, 340, 48), 'acc3', 4, T(9, 'herb') - 0.1, T(9, 'herb') + 0.3);
    D.many([rrect(150, 270, 170, 130, 14), [[175, 300], [215, 300]], [[175, 300], [190, 318]], [[230, 300], [290, 300]], [[175, 340], [260, 340]], [[260, 340], [278, 358]], [[175, 370], [295, 370]]], 'acc1', 5, S(10) + 0.05, T(10, 'babylonians') + 0.2);
    arrow(D, [[1050, 390], [340, 390]], 'acc2', 5, S(10), T(10, 'babylonians') + 0.1);
  });
  board(11, 13, (D, t) => { // haters: bedbugs
    D.text('the HATERS', 640, 150, 104, 'title', 'acc2', S(11) - 0.05, T(11, 'loud') + 0.2, { rot: -0.02 });
    D.text('soap', 280, 330, 96, 'title', 'ink', T(12, 'soap') - 0.1, T(12, 'soap') + 0.3);
    D.line([[150, 300], [410, 322]], 'acc2', 7, T(12, 'insult') - 0.05, T(12, 'insult') + 0.2);
    D.text('older insult:', 280, 450, 56, 'label', 'acc1', T(13, 'people') - 0.05, T(13, 'smelled'));
    D.text('smells like', 280, 530, 56, 'label', 'ink', T(13, 'smelled') - 0.05, T(13, 'like') + 0.2);
    D.many(bug(850, 400, 120), 'ink', 6, T(13, 'smelled'), T(13, 'bedbugs') + 0.3);
    D.text('BEDBUGS!', 850, 610, 80, 'title', 'acc1', T(13, 'bedbugs') - 0.1, T(13, 'bedbugs') + 0.3, { rot: -0.015 });
  });
  board(14, 16, (D, t) => { // the chef
    D.many(chefHat(320, 270, 110), 'ink', 6, S(14), T(14, 'child') + 0.15);
    D.text('Julia Child', 320, 480, 74, 'title', 'acc1', T(14, 'julia') - 0.1, T(14, 'child') + 0.25);
    D.text('"pick it out..."', 860, 170, 74, 'title', 'ink', T(15, 'pick') - 0.1, T(15, 'out') + 0.2);
    const u = eio(win(t, T(16, 'throw') - 0.05, T(16, 'floor')));
    const lx = 760 + u * 160, ly = 300 + u * 240;
    leaf(lx, ly, 52).forEach((P, j) => D.live(P, 'acc3', 4.5, T(15, 'pick') + 0.1, T(15, 'out') + 0.3, 1500 + j));
    D.line([[560, 625], [1210, 620]], 'ink', 7, S(16), T(16, 'throw') + 0.15);
    D.text('on the FLOOR!', 860, 420, 72, 'title', 'acc2', T(16, 'floor') - 0.2, T(16, 'floor') + 0.3, { rot: -0.02 });
  });
  board(17, 18, (D, t) => { // the survey
    chapter(D, 'the numbers', S(17) - 0.1);
    D.text('how many really dislike it?', 640, 190, 72, 'title', 'ink', S(17), E(17));
    D.text('nearly', 300, 330, 54, 'label', 'ink', T(18, 'nearly') - 0.1, T(18, 'nearly') + 0.15);
    D.text('1,400', 300, 450, 130, 'num', 'acc1', T(18, 'fourteen') - 0.1, T(18, 'hundred') + 0.25);
    D.text('young adults, Canada', 300, 535, 40, 'label', 'ink', T(18, 'young') - 0.1, T(18, 'adults') + 0.3);
    for (let r = 0; r < 4; r++) for (let c = 0; c < 8; c++) { const a = T(18, 'fourteen') + (r * 8 + c) * 0.035; D.many(person(690 + c * 72, 335 + r * 80, 68), 'ink', 3, a, a + 0.1); }
  });
  board(19, 21, (D, t) => { // 3 to 21 percent
    D.line([[230, 548], [1050, 544]], 'ink', 7, S(19), F(19, 0.5));
    D.text('who dislikes cilantro', 340, 130, 58, 'label', 'ink', S(19), F(19, 0.5));
    const h0 = 70 * eio(win(t, T(19, 'three') - 0.05, T(19, 'percent'))), h1 = 310 * eio(win(t, T(20, 'twentyone') - 0.05, T(20, 'percent') + 0.3));
    D.live([[350, 546], [350, 546 - Math.max(1, h0)], [530, 546 - Math.max(1, h0)], [530, 546]], 'acc3', 7, T(19, 'three') - 0.05, T(19, 'three') + 0.1, 1901);
    if (t > T(20, 'twentyone') - 0.1) D.live([[750, 546], [750, 546 - Math.max(1, h1)], [930, 546 - Math.max(1, h1)], [930, 546]], 'acc2', 7, T(20, 'twentyone') - 0.05, T(20, 'twentyone') + 0.1, 1902);
    D.text('3%', 440, 450, 96, 'num', 'acc3', T(19, 'three') - 0.1, T(19, 'percent'));
    D.text('21%', 840, 215, 104, 'num', 'acc2', T(20, 'twentyone') - 0.1, T(20, 'percent'));
    D.text('depends on family background', 640, 615, 50, 'label', 'acc1', S(21) - 0.05, E(21));
  });
  board(22, 24, (D, t) => { // low numbers + cooking
    D.text('lowest numbers:', 340, 150, 62, 'title', 'ink', S(22) - 0.05, E(22));
    D.text('Hispanic', 200, 310, 60, 'label', 'ink', T(23, 'hispanic') - 0.1, T(23, 'hispanic') + 0.3);
    D.text('4%', 470, 320, 96, 'num', 'acc3', T(23, 'hispanic') - 0.05, T(23, 'hispanic') + 0.3);
    D.text('South Asian', 200, 470, 60, 'label', 'ink', T(23, 'south') - 0.1, T(23, 'asian') + 0.25);
    D.text('7%', 470, 480, 96, 'num', 'acc3', T(23, 'south'), T(23, 'asian') + 0.3);
    D.many(bowl(910, 420, 190), 'ink', 6, S(24), T(24, 'cooking') + 0.3);
    [[790, 300], [900, 250], [1020, 310]].forEach(([x, y], i) => D.many(leaf(x, y, 56), 'acc3', 4.5, T(24, 'uses') + i * 0.15, T(24, 'uses') + 0.35 + i * 0.15));
    D.text('in the food, all the time', 900, 620, 50, 'label', 'acc1', T(24, 'all') - 0.1, E(24));
  });
  board(25, 27, (D, t) => { // zoom into the leaf
    chapter(D, 'part 2: the chemistry', S(25) - 0.1);
    D.many(leaf(330, 280, 190), 'acc3', 7, S(25), T(25, 'leaf') + 0.1);
    D.line(circ(760, 300, 240, 220), 'ink', 6, T(26, 'that') - 0.1, T(26, 'smell') + 0.1);
    D.line([[470, 200], [590, 140]], 'ink', 3.5, T(26, 'that'), T(26, 'smell'));
    D.line([[470, 400], [590, 450]], 'ink', 3.5, T(26, 'that'), T(26, 'smell'));
    const r = H.rng(25);
    for (let i = 0; i < 14; i++) { const a = r() * 6.28, d = r.range(30, 195), x = 760 + Math.cos(a) * d, y = 300 + Math.sin(a) * d, st = T(26, 'big') + i * 0.09; const ro = i % 3 === 0 ? 'acc2' : i % 3 === 1 ? 'acc4' : 'acc1'; D.line(chainPts(x - 40, y, 4, 26, 10), ro, 4, st, st + 0.2); }
    D.text('big mix of chemicals', 760, 600, 52, 'label', 'ink', T(26, 'mix') - 0.1, T(26, 'chemicals') + 0.2);
    D.text('aldehydes', 330, 610, 88, 'title', 'acc2', T(27, 'aldehydes') - 0.15, T(27, 'aldehydes') + 0.35, { rot: -0.02 });
  });
  board(28, 29, (D, t) => { // chain + oxygen
    const P = chainPts(170, 340, 9, 92, 50);
    D.text('carbon chain', 500, 170, 76, 'title', 'ink', T(28, 'carbon') - 0.1, T(28, 'chain') + 0.25);
    D.line(P, 'ink', 8, T(28, 'long') - 0.05, T(28, 'atoms'));
    P.forEach(([x, y], i) => { const a = T(28, 'long') + i * 0.14; D.line(circ(x, y, 20, 20), 'acc1', 4.5, a, a + 0.1); D.text('C', x, y + 11, 30, 'label', 'acc1', a + 0.05, a + 0.15); });
    const L = P[P.length - 1], Ox = [L[0] + 95, L[1] - 80];
    D.line([[L[0] + 14, L[1] - 16], [Ox[0] - 28, Ox[1] + 24]], 'acc2', 6, T(29, 'one') - 0.1, T(29, 'little'));
    D.line([[L[0] + 24, L[1] - 6], [Ox[0] - 18, Ox[1] + 34]], 'acc2', 6, T(29, 'one') - 0.1, T(29, 'little'));
    D.line(circ(Ox[0], Ox[1], 40, 40), 'acc2', 7, T(29, 'oxygen') - 0.15, T(29, 'oxygen') + 0.15, { hit: true });
    D.text('O', Ox[0], Ox[1] + 19, 56, 'title', 'acc2', T(29, 'oxygen') - 0.05, T(29, 'oxygen') + 0.2);
    D.text('oxygen on the end', 690, 590, 62, 'label', 'acc2', T(29, 'oxygen') - 0.1, E(29));
  });
  board(30, 31, (D, t) => { // decenal
    D.text('decenal', 640, 190, 130, 'title', 'acc1', T(30, 'decenal') - 0.15, T(30, 'decenal') + 0.3, { rot: -0.015 });
    D.line(chainPts(340, 300, 10, 62, 28), 'ink', 7, S(30), T(30, 'decenal') + 0.3);
    D.line(circ(940, 262, 22, 22), 'acc2', 5, T(30, 'decenal'), T(30, 'decenal') + 0.3);
    D.text('soapy', 240, 520, 96, 'title', 'acc2', T(31, 'soapy') - 0.12, T(31, 'soapy') + 0.25, { rot: -0.03 });
    D.text('fatty', 640, 520, 96, 'title', 'acc1', T(31, 'fatty') - 0.12, T(31, 'fatty') + 0.25);
    D.text('pungent', 1040, 520, 96, 'title', 'acc3', T(31, 'pungent') - 0.12, T(31, 'pungent') + 0.25, { rot: 0.02 });
  });
  board(32, 34, (D, t) => { // twist: same family
    D.text('the twist', 640, 130, 90, 'title', 'ink', S(32) - 0.05, E(32));
    D.many(soapBar(960, 300, 300, 160), 'ink', 6, T(33, 'soap') - 0.15, T(33, 'makers'));
    D.text('SOAP', 960, 322, 68, 'title', 'acc2', T(33, 'soap') - 0.1, T(33, 'makers') + 0.1);
    D.many(leaf(310, 290, 120), 'acc3', 6, S(34), T(34, 'cilantro') + 0.15);
    D.line(chainPts(530, 300, 6, 44, 18), 'acc1', 6, T(33, 'aldehydes') - 0.05, T(33, 'aldehydes') + 0.3);
    arrow(D, [[510, 300], [430, 300]], 'acc1', 5, T(34, 'cilantro'), T(34, 'and') + 0.1);
    arrow(D, [[770, 300], [800, 300]], 'acc1', 5, T(33, 'aldehydes') + 0.1, T(33, 'too'));
    D.text('same family of smells', 640, 545, 80, 'title', 'acc1', T(34, 'share') - 0.1, T(34, 'smells') + 0.2, { rot: -0.01 });
    D.line([[250, 572], [1030, 562]], 'acc2', 6, T(34, 'smells') + 0.1, E(34) + 0.1, { hit: true });
  });
  board(35, 35, (D, t) => { // which molecule
    [[280, 'acc2'], [640, 'acc4'], [1000, 'acc1']].forEach(([x, ro], i) => { D.line(chainPts(x - 130, 300, 7, 44, 22), ro, 6, S(35) + i * 0.3, S(35) + 0.4 + i * 0.3); D.text('?', x, 240, 110, 'title', 'ink', T(35, 'which') - 0.1 + i * 0.15, T(35, 'which') + 0.2 + i * 0.15); });
    D.text('which one is to blame?', 640, 500, 82, 'title', 'ink', T(35, 'exact') - 0.1, T(35, 'blame') + 0.2);
    D.text('scientists still unsure', 640, 590, 48, 'label', 'acc1', T(35, 'blame'), E(35));
  });
  board(36, 37, (D, t) => { // smell not taste
    chapter(D, 'part 3: your nose', S(36) - 0.1);
    D.text('why only your friend?', 640, 165, 80, 'title', 'ink', S(36), E(36));
    D.many(nose(330, 400, 150), 'acc3', 6, T(37, 'smell') - 0.3, T(37, 'smell') + 0.15);
    D.text('smell', 510, 500, 80, 'title', 'acc3', T(37, 'smell') - 0.1, T(37, 'smell') + 0.2);
    D.many(tongue(900, 390, 130), 'ink', 6, T(37, 'not') - 0.2, T(37, 'taste'));
    D.text('taste', 900, 610, 80, 'title', 'ink', T(37, 'taste') - 0.1, T(37, 'taste') + 0.2);
    D.line([[780, 300], [1020, 520]], 'acc2', 8, T(37, 'taste'), T(37, 'taste') + 0.2);
    D.line([[1020, 300], [780, 520]], 'acc2', 8, T(37, 'taste') + 0.15, T(37, 'taste') + 0.35);
    D.text('(scientists suspect)', 640, 260, 40, 'label', 'acc1', T(37, 'suspect') - 0.1, T(37, 'suspect') + 0.3);
  });
  board(38, 39, (D, t) => { // retronasal
    D.many(nose(420, 360, 250), 'ink', 7, S(38) - 0.1, S(38) + 0.5);
    D.line(cubic([350, 395], [470, 380], [560, 430], [590, 460], 20), 'ink', 4, S(38) + 0.3, S(38) + 0.6);
    const path = cubic([430, 470], [600, 520], [650, 370], [430, 330], 50);
    D.line(path, 'acc1', 5, T(38, 'scents') - 0.05, T(39, 'nose'));
    D.line(head(path, 22), 'acc1', 5, T(39, 'nose'), T(39, 'nose') + 0.08);
    const u = win(t, T(38, 'scents'), T(39, 'nose') + 0.2);
    if (u > 0 && u < 1) for (let i = 0; i < 6; i++) { const v = ((u * 1.5 + i / 6) % 1) * u, p = path[Math.floor(v * (path.length - 1))]; D.dot(p[0], p[1], 7, 'acc2', -1, { inst: true }); }
    D.text('chew', 170, 470, 74, 'title', 'acc1', T(38, 'chew') - 0.1, T(38, 'chew') + 0.2);
    D.text('back of your throat', 930, 510, 58, 'label', 'acc1', T(38, 'back') - 0.1, T(38, 'throat') + 0.15);
    D.text('into your nose', 930, 250, 72, 'title', 'acc2', T(39, 'into') - 0.1, T(39, 'nose') + 0.2);
  });
  board(40, 42, (D, t) => { // locks and keys
    let n = 0;
    for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) { const a = T(40, 'hundreds') + n * 0.05; D.many(lock(135 + c * 125, 185 + r * 150, 74), 'ink', 4, a, a + 0.1); n++; }
    D.text('hundreds of', 1030, 170, 62, 'title', 'acc1', T(40, 'hundreds') - 0.1, T(40, 'kinds'));
    D.text('smell sensors', 1030, 240, 54, 'label', 'ink', T(40, 'smell') - 0.1, T(40, 'sensors') + 0.2);
    D.text('tiny locks', 1030, 370, 66, 'title', 'acc3', T(41, 'tiny') - 0.1, T(41, 'locks') + 0.2);
    const u = eio(win(t, T(42, 'key') - 0.5, T(42, 'key') + 0.15)), kx = lerp(1040, 470, u);
    key(kx, 480, 110).forEach((P, j) => D.live(P, 'acc2', 6, T(42, 'every') - 0.05, T(42, 'molecule'), 4200 + j));
    D.text('scent = key', 1030, 610, 58, 'title', 'acc2', T(42, 'scent') - 0.1, T(42, 'key') + 0.2);
  });
  board(43, 46, (D, t) => { // 23andMe survey
    chapter(D, '2012 DNA study', S(43) - 0.1);
    const d = dnaStrands(120, 300, 500, 66, 42);
    D.line(d.a, 'acc4', 6, T(44, 'dna') - 0.3, T(44, 'dna') + 0.5); D.line(d.b, 'acc2', 6, T(44, 'dna') - 0.3, T(44, 'dna') + 0.5);
    d.r.forEach((P, i) => D.line(P, 'ink', 3, T(44, 'dna') + i * 0.04, T(44, 'dna') + 0.1 + i * 0.04));
    D.text('23andMe', 370, 175, 76, 'title', 'acc1', T(43, 'twentythree') - 0.1, T(43, 'me') + 0.15);
    D.text('~25,000', 370, 510, 110, 'num', 'acc1', T(44, 'twentyfive') - 0.1, T(44, 'thousand') + 0.25);
    D.text('people', 370, 585, 62, 'label', 'ink', T(44, 'people') - 0.1, T(44, 'people') + 0.2);
    D.many(speech(940, 310, 530, 250), 'ink', 6, S(45), E(45));
    D.text('one question:', 940, 150, 58, 'label', 'acc4', T(45, 'one') - 0.1, E(45));
    D.text('Does cilantro', 940, 285, 62, 'title', 'ink', T(46, 'does') - 0.1, T(46, 'cilantro') + 0.1);
    D.text('taste like soap?', 940, 360, 62, 'title', 'acc2', T(46, 'taste') - 0.1, T(46, 'soap') + 0.2);
  });
  board(47, 48, (D, t) => { // the spot
    const d = dnaStrands(60, 260, 1160, 62, 54);
    D.line(d.a, 'acc4', 6, S(47) - 0.1, S(47) + 0.6); D.line(d.b, 'acc2', 6, S(47) - 0.1, S(47) + 0.6);
    d.r.forEach((P, i) => D.line(P, 'ink', 2.5, S(47) + 0.2 + i * 0.012, S(47) + 0.3 + i * 0.012));
    D.line(circ(440, 260, 62, 96), 'acc1', 7, T(47, 'tiny') - 0.15, T(47, 'spot') + 0.05, { hit: true });
    D.text('one tiny spot', 340, 470, 70, 'title', 'acc1', T(47, 'tiny') - 0.1, T(47, 'spot') + 0.3);
    arrow(D, [[390, 415], [430, 370]], 'acc1', 5, T(47, 'spot') + 0.1, E(47));
    D.line([[560, 395], [560, 425], [1130, 425], [1130, 395]], 'acc3', 6, T(48, 'next') - 0.05, T(48, 'cluster') + 0.1);
    D.text('smell genes', 850, 510, 86, 'title', 'acc3', T(48, 'smell') - 0.12, T(48, 'genes') + 0.25);
  });
  board(49, 50, (D, t) => { // OR6A2
    D.text('OR6A2', 640, 210, 166, 'num', 'acc1', T(49, 'called') - 0.05, E(49), { rot: -0.015 });
    D.line([[345, 240], [930, 228]], 'acc2', 7, E(49) - 0.05, E(49) + 0.15, { hit: true });
    const u = eio(win(t, T(50, 'catching') - 0.4, T(50, 'catching') + 0.2)), cx0 = lerp(950, 610, u);
    D.many(lock(450, 470, 200), 'ink', 7, T(50, 'builds') - 0.05, T(50, 'lock') + 0.2);
    chainPts(cx0, 460, 7, 46, 20).length && D.live(chainPts(cx0, 460, 7, 46, 20), 'acc2', 6, T(50, 'catching') - 0.3, T(50, 'catching'), 5000);
    D.text('aldehydes', 930, 590, 70, 'title', 'acc2', T(50, 'aldehydes') - 0.15, T(50, 'aldehydes') + 0.25);
  });
  board(51, 52, (D, t) => { // loud
    D.many(nose(350, 340, 190), 'ink', 7, S(51) - 0.1, T(51, 'noses') + 0.1);
    const l = eio(win(t, T(52, 'lot') - 0.1, T(52, 'loudly') + 0.1));
    [0, 1, 2, 3, 4, 5].forEach((i) => { const h = (24 + i * 34) * (0.25 + 0.75 * l); const x = 620 + i * 52; D.live([[x - 16, 470], [x - 16, 470 - h], [x + 16, 470 - h], [x + 16, 470]], i > 3 ? 'acc2' : 'acc1', 5, T(51, 'soapy') + i * 0.05, T(51, 'soapy') + 0.1 + i * 0.05, 5100 + i); });
    D.text('soapy note', 780, 560, 66, 'title', 'acc1', T(51, 'soapy') - 0.1, T(51, 'note') + 0.2);
    D.text('LOUD', 790, 165, 120, 'title', 'acc2', T(52, 'loudly') - 0.15, T(52, 'loudly') + 0.2, { rot: -0.03 });
    D.text('(maybe)', 1075, 130, 48, 'label', 'acc4', T(51, 'may') - 0.1, T(51, 'pick'));
  });
  board(53, 55, (D, t) => { // case closed?
    D.text('Case closed?', 640, 260, 116, 'title', 'ink', S(53) - 0.05, E(53));
    D.line([[280, 180], [1000, 320]], 'acc2', 10, T(54, 'not') - 0.05, T(54, 'quite') + 0.1, { hit: true });
    D.text('Not quite', 640, 410, 86, 'title', 'acc2', T(54, 'not') - 0.1, E(54));
    D.text("here's the number...", 640, 570, 66, 'label', 'acc1', S(55), E(55));
  });
  board(56, 58, (D, t) => { // half a percent
    chapter(D, 'part 4: the surprise', S(56) - 0.1);
    const X0 = 700, Y0 = 130, CS = 46;
    for (let i = 0; i <= 10; i++) { D.line([[X0, Y0 + i * CS], [X0 + 10 * CS, Y0 + i * CS]], 'ink', 2.5, S(56) + i * 0.05, S(56) + 0.1 + i * 0.05); D.line([[X0 + i * CS, Y0], [X0 + i * CS, Y0 + 10 * CS]], 'ink', 2.5, S(56) + 0.25 + i * 0.05, S(56) + 0.35 + i * 0.05); }
    const on = t > T(56, 'half') - 0.1 ? 1 : 0;
    if (on) D.line([[X0 + 4, Y0 + 12], [X0 + CS * 0.5, Y0 + 12], [X0 + 4, Y0 + 24], [X0 + CS * 0.5, Y0 + 24], [X0 + 4, Y0 + 36]], 'acc2', 5, T(56, 'half') - 0.1, T(56, 'half') + 0.2, { hit: true });
    D.text('0.5%', 330, 300, 170, 'num', 'acc2', T(56, 'half') - 0.1, T(56, 'percent') + 0.1, { rot: -0.02 });
    D.text('of who tastes soap', 330, 400, 56, 'label', 'ink', S(57), T(57, 'doesnt'));
    D.line([[150, 330], [520, 322]], 'acc1', 7, T(58, 'half') - 0.05, T(58, 'one') + 0.1, { hit: true });
    D.text('half of 1 percent!', 330, 530, 66, 'title', 'acc1', T(58, 'half') - 0.05, E(58));
    arrow(D, quad([540, 215], [600, 110], [690, 118], 14), 'acc2', 5, T(56, 'percent'), E(56));
  });
  board(59, 61, (D, t) => { // twins, more genes
    D.many(person(190, 400, 230), 'ink', 6, S(59), T(59, 'twin') + 0.25);
    D.many(person(350, 400, 230), 'ink', 6, S(59) + 0.1, T(59, 'twin') + 0.35);
    D.text('twin study', 270, 490, 66, 'title', 'acc1', T(59, 'twin') - 0.1, T(59, 'study') + 0.2);
    ['more genes', 'bitter taste'].forEach((s, i) => D.text(s, 860, 170 + i * 100, 72, 'title', i ? 'acc3' : 'ink', i ? T(60, 'bitter') - 0.1 : T(59, 'more') - 0.1, i ? T(60, 'taste') + 0.2 : T(59, 'genes') + 0.2));
    D.text('NO single soap gene', 640, 580, 90, 'title', 'acc2', T(61, 'no') - 0.1, T(61, 'gene') + 0.2, { rot: -0.012 });
  });
  board(62, 63, (D, t) => { // a nudge, in a mix
    D.line(circ(390, 340, 210, 210), 'ink', 7, S(62), T(62, 'small'));
    const g = [[390, 340], [390, 130]], th = (-Math.PI / 2 + 0.1);
    D.line([[390, 340], [390 + Math.cos(th) * 210, 340 + Math.sin(th) * 210]], 'acc2', 6, T(62, 'nudge') - 0.1, T(62, 'nudge') + 0.1); D.line(g, 'acc2', 6, T(62, 'nudge') - 0.1, T(62, 'nudge') + 0.1);
    D.text('genes', 440, 90, 58, 'title', 'acc2', T(62, 'nudge') - 0.1, T(62, 'nudge') + 0.2);
    D.text('everything else', 390, 390, 54, 'label', 'ink', T(62, 'everything') - 0.1, T(62, 'you'));
    D.text('small nudge', 930, 180, 86, 'title', 'acc2', T(62, 'small') - 0.1, T(62, 'nudge') + 0.2);
    D.many(bowl(930, 400, 130), 'ink', 5, S(63), T(63, 'ate'));
    D.many(leaf(930, 320, 42), 'acc3', 4, T(63, 'ate'), T(63, 'growing'));
    D.text('what you ate growing up', 880, 590, 58, 'label', 'acc1', T(63, 'ate') - 0.1, E(63));
  });
  board(64, 66, (D, t) => { // practice
    D.text('4%', 170, 190, 84, 'num', 'acc3', S(64) - 0.05, F(64, 0.35));
    D.text('7%', 360, 190, 84, 'num', 'acc3', F(64, 0.2), F(64, 0.6));
    D.many([rrect(120, 280, 330, 260, 16), [[120, 340], [450, 340]], [[200, 256], [200, 300]], [[370, 256], [370, 300]]], 'ink', 6, S(65), T(65, 'food'));
    D.text('day 1', 285, 470, 92, 'num', 'acc1', T(65, 'day') - 0.1, T(65, 'one') + 0.2);
    for (let i = 0; i < 12; i++) { const x = 600 + (i % 4) * 160, y = 180 + ((i / 4) | 0) * 140, a = T(66, 'youve') + i * 0.1; D.many(leaf(x, y, 44), 'acc3', 4, a, a + 0.14, {}); }
    D.text('a lot of practice', 880, 615, 66, 'title', 'acc1', T(66, 'lot') - 0.1, T(66, 'practice') + 0.2);
  });
  board(67, 68, (D, t) => { // not like height
    chapter(D, 'part 5: can you change it?', S(67) - 0.1);
    D.many([rrect(120, 130, 90, 480, 8)], 'ink', 6, S(67), T(67, 'height'));
    for (let i = 1; i < 10; i++) D.line([[120, 130 + i * 48], [i % 2 ? 150 : 170, 130 + i * 48]], 'ink', 3.5, S(67) + 0.3 + i * 0.05, S(67) + 0.35 + i * 0.05);
    D.many(person(330, 610, 400), 'ink', 6, F(67, 0.4), T(67, 'height') + 0.1);
    D.text('your height', 750, 200, 70, 'label', 'ink', T(67, 'your') - 0.1, T(67, 'height') + 0.15);
    D.line([[540, 180], [960, 180]], 'acc2', 8, T(67, 'height') + 0.1, E(67));
    D.text('NOT', 750, 120, 72, 'title', 'acc2', T(67, 'isnt') - 0.1, T(67, 'like') + 0.1);
    D.text('not stuck', 800, 450, 118, 'title', 'acc3', S(68) + 0.15, T(68, 'stuck') + 0.25, { rot: -0.02 });
  });
  board(69, 70, (D, t) => { // exposure
    [[140, 1], [340, 2], [540, 3], [740, 4]].forEach(([x, n], i) => { const a = T(69, 'again') + i * 0.28; D.many(leaf(x, 210, 58), 'acc3', 5, a - 0.1, a + 0.15); D.text('x' + n, x, 340, 60, 'num', 'acc1', a, a + 0.1); });
    D.many([rrect(980, 110, 110, 460, 40)], 'ink', 6, S(69), T(69, 'eating'));
    const u = eio(win(t, S(70), E(70))), lvl = lerp(420, 120, u);
    D.live([[1000, 555], [1000, 555 - lvl], [1070, 555 - lvl], [1070, 555], [1000, 555]], 'acc2', 7, T(69, 'eating'), T(69, 'eating') + 0.2, 6900);
    D.text('soap', 1035, 620, 56, 'label', 'acc2', T(69, 'eating'), T(69, 'again'));
    D.text('slowly softens', 440, 500, 96, 'title', 'acc2', T(70, 'slowly') - 0.1, T(70, 'soften') + 0.25, { rot: -0.015 });
  });
  board(71, 72, (D, t) => { // mortar
    D.text('kitchen trick', 340, 190, 90, 'title', 'acc1', T(71, 'kitchen') - 0.1, T(71, 'trick') + 0.2);
    D.many(mortar(840, 410, 210), 'ink', 7, S(71), T(71, 'trick'));
    const u = t > T(72, 'crush') - 0.05 ? (Math.sin((t - T(72, 'crush')) * 14) + 1) / 2 : 0;
    const px = 880, py = 260 + u * 70;
    [[[px - 18, py + 70], [px + 92, py - 118]], [[px + 16, py + 86], [px + 124, py - 96]]].forEach((P, j) => D.live(P, 'ink', 6, T(71, 'trick'), T(71, 'trick') + 0.2, 7100 + j));
    [[740, 380], [850, 385], [940, 380]].forEach(([x, y], i) => D.many(leaf(x, y - 34, 38), 'acc3', 4, S(72) - 0.05 + i * 0.05, S(72) + 0.15 + i * 0.05));
    D.text('CRUSH!', 340, 410, 124, 'title', 'acc2', T(72, 'crush') - 0.1, T(72, 'crush') + 0.2, { rot: -0.03 });
  });
  board(73, 74, (D, t) => { // enzymes
    D.text('enzymes', 300, 170, 88, 'title', 'acc3', T(73, 'enzymes') - 0.15, T(73, 'enzymes') + 0.25);
    const u = eio(win(t, T(74, 'break') - 0.1, T(74, 'break') + 0.35)), P = chainPts(580, 280, 10, 54, 26);
    const left = P.slice(0, 5).map(([x, y]) => [x - 70 * u, y - 16 * u]), right = P.slice(5).map(([x, y]) => [x + 70 * u, y + 16 * u]);
    D.live(left, 'acc2', 7, T(74, 'that') - 0.05, T(74, 'soapy') + 0.2, 7400); D.live(right, 'acc2', 7, T(74, 'that') + 0.1, T(74, 'soapy') + 0.3, 7401);
    pacman(1010 - 150, 280 + Math.sin(t * 6) * 0 , 58, 0.3 + 0.4 * Math.abs(Math.sin(t * 9))).forEach((Q, j) => D.live(Q, 'acc3', 6, T(73, 'enzymes'), T(73, 'enzymes') + 0.2, 7410 + j));
    D.text('soapy aldehydes', 860, 170, 54, 'label', 'acc2', T(74, 'soapy') - 0.1, T(74, 'aldehydes') + 0.2);
    D.text('milder smells', 640, 530, 104, 'title', 'acc1', T(74, 'milder') - 0.12, T(74, 'smells') + 0.25, { rot: -0.012 });
  });
  board(75, 75, (D, t) => { // pesto
    D.many(jar(340, 370, 190), 'ink', 7, S(75), T(75, 'suggest'));
    D.line([[220, 330], [460, 330]], 'acc3', 7, T(75, 'suggest'), T(75, 'starting'));
    D.text('pesto', 340, 440, 72, 'title', 'acc3', T(75, 'cilantro') - 0.1, T(75, 'pesto'));
    D.text('start here', 840, 240, 110, 'title', 'acc1', T(75, 'starting') - 0.1, T(75, 'cilantro'), { rot: -0.02 });
    arrow(D, quad([640, 300], [570, 340], [510, 350], 14), 'acc1', 6, T(75, 'cilantro'), T(75, 'pesto'));
    D.text('cilantro pesto!', 840, 420, 76, 'label', 'acc2', T(75, 'pesto') - 0.1, E(75));
  });
  board(76, 78, (D, t) => { // friend + salsa
    D.many(bowl(420, 370, 240), 'ink', 7, S(76), T(76, 'friend') + 0.2);
    const u = eio(win(t, T(76, 'picks') - 0.1, T(76, 'salsa'))), lx = lerp(420, 700, u), ly = lerp(300, 170, u);
    leaf(lx, ly, 50).forEach((P, j) => D.live(P, 'acc3', 4.5, T(76, 'friend'), T(76, 'picks'), 7600 + j));
    D.text('salsa', 420, 480, 74, 'title', 'acc2', T(76, 'salsa') - 0.1, T(76, 'salsa') + 0.2);
    D.many(face(1000, 200, 100, 'yuck'), 'ink', 6, T(76, 'friend'), T(76, 'picks') + 0.2);
    D.text('go easy', 950, 410, 100, 'title', 'acc1', T(77, 'go') - 0.1, T(77, 'easy') + 0.2, { rot: -0.015 });
    D.text('not picky', 950, 560, 94, 'title', 'acc3', T(78, 'being') - 0.1, T(78, 'picky') + 0.25);
  });
  board(79, 80, (D, t) => { // real
    D.many(nose(350, 340, 200), 'ink', 7, S(79), T(79, 'nose') + 0.3);
    D.line(chainPts(120, 130, 4, 34, 12), 'acc2', 5, T(79, 'finding'), T(79, 'something'));
    D.text('something real', 840, 240, 96, 'title', 'acc1', T(79, 'something') - 0.12, T(79, 'real') + 0.3, { rot: -0.015 });
    D.line([[510, 270], [1170, 258]], 'acc2', 6, T(79, 'real') + 0.15, E(79), { hit: true });
    D.text('yours might miss it', 840, 480, 76, 'label', 'acc3', T(80, 'yours') - 0.1, T(80, 'missing'));
  });
  board(81, 81, (D, t) => { // teaser
    D.text('next up:', 240, 120, 66, 'label', 'acc4', S(81) - 0.05, T(81, 'up') + 0.1);
    D.many(dolphin(600, 300, 190), 'acc4', 7, T(81, 'dolphins') - 0.2, T(81, 'dolphins') + 0.5);
    D.text('z', 960, 150, 70, 'title', 'ink', T(81, 'sleep'), T(81, 'sleep') + 0.1); D.text('z', 1020, 100, 90, 'title', 'ink', T(81, 'sleep') + 0.1, T(81, 'sleep') + 0.2);
    D.text('How do dolphins sleep', 640, 540, 76, 'title', 'ink', T(81, 'how') - 0.1, T(81, 'sleep') + 0.1);
    D.text('without drowning?', 640, 620, 76, 'title', 'acc2', T(81, 'without') - 0.1, T(81, 'drowning') + 0.2);
  });

  const STARTS = BOARDS.map((b) => S(b.i0));
  // how each board is entered: 'w' = felt eraser, otherwise the camera tracks along the slate
  const WIPE_AT = new Set([3, 9, 11, 14, 17, 22, 25, 30, 36, 40, 43, 49, 53, 56, 62, 67, 71, 75, 79, 81]);
  const gapOf = (n) => { const p = BOARDS[n - 1], q = BOARDS[n]; const a = E(p.i1), b2 = S(q.i0); return { from: n - 1, t0: a, t1: b2 }; };
  const WIPES = [], PANS = [];
  BOARDS.forEach((b, n) => { if (!n) return; (WIPE_AT.has(b.i0) ? WIPES : PANS).push(gapOf(n)); });

  function story(t, all) {
    const items = [];
    const mk = (b) => {
      const ox = BXc(b) - 640, P = (pts) => pts.map(([x, y]) => [x + ox, y]);
      return {
        ox,
        line: (pts, role, w, a, b2, o = {}) => items.push({ k: 'line', pts: P(pts), role, w, a, b: b2, hit: o.hit, inst: o.inst, prog: o.prog, seed: o.seed }),
        text: (s, x, y, size, font, role, a, b2, o = {}) => items.push({ k: 'text', s, x: x + ox, y, size, font, role, a, b: b2, rot: o.rot || 0, align: o.align || 'center', inst: o.inst, prog: o.prog }),
        dot: (x, y, r, role, a, o = {}) => items.push({ k: 'dot', x: x + ox, y, r, role, a: o.inst ? -1 : a, b: o.inst ? 0 : a + 0.05, inst: o.inst }),
        many: (list, role, w, a, b2, o = {}) => list.forEach((pts, i) => { const n = list.length, aa = a + (b2 - a) * i / n, bb = a + (b2 - a) * (i + 1) / n; items.push({ k: 'line', pts: P(pts), role, w, a: aa, b: bb, inst: o.inst, prog: o.prog, hit: o.hit && i === 0 }); }),
        // a moving drawing: geometry changes with t, drawn on over [a,b], fixed seed so the chalk texture doesn't flicker
        live: (pts, role, w, a, b2, seed) => items.push({ k: 'line', pts: P(pts), role, w, a: -1, b: 0, inst: true, prog: win(t, a, b2), seed, la: a, lb: b2 }),
      };
    };
    BOARDS.forEach((bd, n) => {
      const end = E(bd.i1) + 1.6, st = S(bd.i0) - 1.6;
      if (all || (t >= st && t <= end)) bd.fn(mk(bd.b), t);
    });
    PANS.forEach((p) => {
      if (!all && (t < p.t0 - 0.2 || t > p.t1 + 1.6)) return;
      const x0 = BXc(p.from) + 660, x1 = BXc(p.from + 1) - 660, y = 340 + (p.from % 3) * 30;
      const L = cubic([x0, y], [x0 + 60, y - 70], [x1 - 60, y + 70], [x1, y]);
      items.push({ k: 'line', pts: L, role: 'acc1', w: 6, a: p.t0 - 0.05, b: p.t1 - 0.06 });
      items.push({ k: 'line', pts: head(L, 26), role: 'acc1', w: 6, a: p.t1 - 0.06, b: p.t1 });
    });
    return items;
  }
  const tipOf = (items, t, meas) => { let tip = null; for (const it of items) { if (it.inst || it.k === 'dot') continue; const p = win(t, it.a, it.b); if (p > 0 && p < 1) { if (it.k === 'line') { const P = it.pts; tip = P[Math.min(P.length - 1, Math.floor(p * (P.length - 1)))]; } else tip = meas(it, p); } } return tip; };

  // ---------- camera: slow drift inside a board, a few bigger moves ----------
  const CK = [];
  BOARDS.forEach((bd, n) => {
    const nx = BXc(bd.b), a = S(bd.i0), b2 = E(bd.i1), odd = n % 3;
    const z0 = bd.i0 === 25 ? 1.0 : odd === 0 ? 1.0 : odd === 1 ? 1.03 : 1.0, z1 = bd.i0 === 25 ? 1.0 : odd === 0 ? 1.03 : odd === 1 ? 1.0 : 1.02;
    CK.push([a, nx + (odd - 1) * 6, 360 - z0 * 0, z0], [b2, nx - (odd - 1) * 6, 360, z1]);
  });
  const camAt = (t) => {
    const k = CK; if (t <= k[0][0]) return k[0].slice(1);
    for (let i = 0; i < k.length - 1; i++) { const a = k[i], b = k[i + 1]; if (t <= b[0]) { const u = eio((t - a[0]) / Math.max(1e-6, b[0] - a[0])); return [a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u, Math.exp(Math.log(a[3]) + (Math.log(b[3]) - Math.log(a[3])) * u)]; } }
    return k[k.length - 1].slice(1);
  };

  // ---------- rendering (the reference's chalk medium) ----------
  const XC = {};
  let NZ = null;
  const COL = { ink: [240, 242, 236], acc1: [246, 222, 120], acc2: [244, 150, 175], acc3: [205, 250, 190], acc4: [150, 205, 240] };
  const WX0 = -700, WY0 = -300, WWD = 4800, WHT = 1300; // world extent of the slate
  function buildSlate() {
    const sc2 = 0.5, SW = WWD * sc2, SH = WHT * sc2, sl = H.layer(SW, SH), sc = sl.getContext('2d');
    const base = H.layer(SW / 2, SH / 2), bc = base.getContext('2d'); H.paper(bc, SW / 2, SH / 2, '#2c4639', 17, 0.05);
    const rr = H.rng(12);
    { const gl = H.layer(SW / 2, SH / 2), gc = gl.getContext('2d'); gc.fillStyle = gc.strokeStyle = '#e8eee6'; gc.font = '400 14px "Kalam"';
      const ghosts = ['photosynthesis', '6CO2 + 6H2O', 'Homework p. 112', 'x² + y² = r²', 'Ch. 7  fractions', '3/4 = 0.75', 'E = mc²', 'due Friday', 'spelling test', 'H2O', '12 × 12 = 144', 'Monday', 'π ≈ 3.14', 'nouns / verbs'];
      for (let i = 0; i < 46; i++) gc.fillText(ghosts[i % ghosts.length], rr.range(0, SW / 2 - 60), rr.range(10, SH / 2 - 10));
      gc.lineWidth = 2; for (let i = 0; i < 14; i++) { gc.beginPath(); gc.arc(rr.range(0, SW / 2), rr.range(0, SH / 2), rr.range(10, 28), 0, 7); gc.stroke(); }
      bc.save(); bc.filter = 'blur(1px)'; bc.globalAlpha = 0.08; bc.drawImage(gl, 0, 0); bc.restore(); }
    const sm = H.layer(SW / 2, SH / 2), smc = sm.getContext('2d'); smc.lineCap = 'round';
    for (let i = 0; i < 420; i++) { const x = rr.range(0, SW / 2), y = rr.range(0, SH / 2), R = rr.range(18, 50), a0 = rr.range(0, 6.28); smc.strokeStyle = `rgba(215,228,215,${rr.range(0.035, 0.075)})`; smc.lineWidth = rr.range(12, 24); smc.beginPath(); smc.ellipse(x, y, R, R * rr.range(0.3, 0.7), rr.range(-0.4, 0.4), a0, a0 + rr.range(1.5, 3.5)); smc.stroke(); }
    for (let i = 0; i < 160; i++) { const x = rr.range(0, SW / 2), y = rr.range(0, SH / 2); smc.strokeStyle = `rgba(215,228,215,${rr.range(0.03, 0.05)})`; smc.lineWidth = rr.range(15, 22); smc.beginPath(); smc.moveTo(x, y); smc.lineTo(x + rr.range(45, 110), y + rr.range(-6, 6)); smc.stroke(); }
    bc.filter = 'blur(2px)'; bc.drawImage(sm, 0, 0); bc.filter = 'none';
    sc.imageSmoothingEnabled = true; sc.drawImage(base, 0, 0, SW, SH);
    sc.lineCap = 'round';
    for (let i = 0; i < 3200; i++) { const x = rr.range(0, SW), y = rr.range(0, SH); sc.strokeStyle = `rgba(220,230,220,${rr.range(0.01, 0.025)})`; sc.lineWidth = rr.range(0.5, 1); sc.beginPath(); sc.moveTo(x, y); sc.quadraticCurveTo(x + 20, y + rr.range(-3, 3), x + rr.range(30, 70), y + rr.range(-4, 4)); sc.stroke(); }
    XC.slate = sl;
    // settled dust + felt streaks at full resolution are laid per frame as a tiled overlay
    const TS = 256, tile = H.layer(TS, TS), tc = tile.getContext('2d'), img = tc.createImageData(TS, TS), d = img.data, r2 = H.rng(21);
    const coarse = new Float32Array(64 * 64); for (let i = 0; i < coarse.length; i++) coarse[i] = r2() - 0.5;
    for (let y = 0, p = 0; y < TS; y++) for (let x = 0; x < TS; x++, p++) { const v = (r2() - 0.5) * 0.9 + coarse[((y >> 2) & 63) * 64 + ((x >> 2) & 63)] * 0.7 + coarse[((y >> 1) & 63) * 64 + ((x * 3 >> 3) & 63)] * 0.4; const i = p * 4, on = v > 0 ? 255 : 0; d[i] = on; d[i + 1] = on; d[i + 2] = on; d[i + 3] = Math.min(255, Math.abs(v) * 24); }
    tc.putImageData(img, 0, 0);
    for (let i = 0; i < 260; i++) { tc.fillStyle = `rgba(235,240,232,${r2.range(0.04, 0.2)})`; tc.fillRect(r2.range(0, TS), r2.range(0, TS), r2.range(0.8, 1.8), r2.range(0.8, 1.8)); }
    XC.tooth = tile;
    // oak ledge (chalk tray) with grain, dust drift and specks
    const TW = 2400, TH = 96, tr = H.layer(TW, TH), tq = tr.getContext('2d'), r4 = H.rng(55);
    const tg2 = tq.createLinearGradient(0, 0, 0, TH); tg2.addColorStop(0, '#9a6a3c'); tg2.addColorStop(0.35, '#7a4f2a'); tg2.addColorStop(0.36, '#5e3a1c'); tg2.addColorStop(1, '#3e2510');
    tq.fillStyle = tg2; tq.fillRect(0, 0, TW, TH);
    for (let i = 0; i < 90; i++) { const o = r4() * TH, dark = r4.chance(0.6), fq = r4.range(0.002, 0.008), amp = r4.range(0.5, 2.5), ph = r4.range(0, 6); tq.strokeStyle = dark ? `rgba(50,28,10,${r4.range(0.12, 0.35)})` : `rgba(210,160,100,${r4.range(0.06, 0.16)})`; tq.lineWidth = r4.range(0.6, 2); tq.beginPath(); for (let x = 0; x <= TW; x += 20) { const y = o + Math.sin(x * fq + ph) * amp + NZ.n2(x * 0.004, i) * 2; x ? tq.lineTo(x, y) : tq.moveTo(x, y); } tq.stroke(); }
    tq.fillStyle = 'rgba(255,230,190,0.28)'; tq.fillRect(0, 33, TW, 1.5);
    const dg = tq.createLinearGradient(0, 0, 0, 32); dg.addColorStop(0, 'rgba(235,235,225,0.34)'); dg.addColorStop(1, 'rgba(235,235,225,0.07)'); tq.fillStyle = dg; tq.fillRect(0, 0, TW, 32);
    for (let i = 0; i < 14; i++) { const x = r4.range(0, TW), g3 = tq.createRadialGradient(x, 15, 2, x, 15, 70); g3.addColorStop(0, 'rgba(240,240,230,0.22)'); g3.addColorStop(1, 'rgba(240,240,230,0)'); tq.fillStyle = g3; tq.fillRect(x - 70, 0, 140, 32); }
    for (let i = 0; i < 2600; i++) { tq.fillStyle = `rgba(245,245,238,${r4.range(0.1, 0.5)})`; tq.fillRect(r4.range(0, TW), Math.pow(r4(), 1.6) * 30, r4.range(0.8, 2.2), r4.range(0.8, 1.6)); }
    XC.tray = tr;
  }
  const TRAY_Y = 650;

  function renderView(ctx, t, cam, items) {
    const [cx, cy, z] = cam;
    const apply = (c) => { c.translate(W / 2, HH / 2); c.scale(z, z); c.translate(-cx, -cy); };
    const toS = ([x, y]) => [(x - cx) * z + W / 2, (y - cy) * z + HH / 2];
    ctx.save(); apply(ctx); ctx.imageSmoothingEnabled = true;
    const vl = cx - W / 2 / z - 10, vr = cx + W / 2 / z + 10;
    for (let i = Math.floor((vl - WX0) / WWD); i <= Math.floor((vr - WX0) / WWD); i++) { const x = WX0 + i * WWD; if (i % 2) { ctx.save(); ctx.translate(x + WWD, WY0); ctx.scale(-1, 1); ctx.drawImage(XC.slate, 0, 0, WWD, WHT); ctx.restore(); } else ctx.drawImage(XC.slate, x, WY0, WWD, WHT); }
    ctx.fillStyle = XC.toothPat || (XC.toothPat = ctx.createPattern(XC.tooth, 'repeat')); ctx.fillRect(vl, WY0, vr - vl, WHT);
    ctx.restore();
    { const lit = ctx.createRadialGradient(560, 260, 100, 640, 360, 900); lit.addColorStop(0, 'rgba(120,150,130,0.10)'); lit.addColorStop(1, 'rgba(0,10,5,0.35)'); ctx.fillStyle = lit; ctx.fillRect(0, 0, W, HH); }
    // ---- chalk ----
    const CL = XC.CL || (XC.CL = H.layer(W, HH)), c = CL.getContext('2d', { willReadFrequently: true });
    c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, W, HH); c.lineCap = 'round'; c.lineJoin = 'round';
    const nz = NZ;
    const chalk = (P, rgb, w, seed, prog) => {
      if (prog < 1) P = P.slice(0, Math.max(2, Math.ceil(P.length * prog)));
      const rr = H.rng(seed), N = normals(P);
      for (let k = 0; k < 4; k++) {
        const off = (k / 3 - 0.5) * w * 0.7 + rr.range(-0.5, 0.5), a = 0.9 * rr.range(0.75, 1);
        c.lineWidth = w * rr.range(0.5, 0.72);
        for (let i = 0; i < P.length - 1; i += 6) {
          c.strokeStyle = H.rgba(rgb, Math.min(1, a * (0.7 + 0.3 * nz.n2(i * 0.04 + k, seed * 0.17))));
          c.beginPath();
          for (let j = i; j <= Math.min(P.length - 1, i + 6); j++) { const x = P[j][0] + N[j][0] * off, y = P[j][1] + N[j][1] * off; j === i ? c.moveTo(x, y) : c.lineTo(x, y); }
          c.stroke();
        }
      }
    };
    const meas = (it, p) => { const w = measure(it.s, it.font, it.size), x0 = it.align === 'center' ? it.x - w / 2 : it.x; const w2 = measure(it.s.slice(0, Math.ceil(it.s.length * p)), it.font, it.size); return [x0 + w2, it.y - it.size * 0.3]; };
    const vx0 = cx - W / 2 / z - 300, vx1 = cx + W / 2 / z + 300; // cull far-away boards
    c.save(); apply(c);
    for (const it of items) {
      const p = it.inst ? (it.prog == null ? 1 : it.prog) : win(t, it.a, it.b);
      if (p <= 0) continue;
      const ix = it.k === 'line' ? it.pts[0][0] : it.x; if (ix < vx0 - 600 || ix > vx1 + 600) continue;
      const rgb = COL[it.role];
      if (it.k === 'line') {
        if (it.w < 0.1) continue;
        const seed = it.seed != null ? it.seed : ((it.pts[0][0] * 13 + it.pts[0][1] * 7) | 0) + 3;
        chalk(wob(seg(it.pts, 2.5), nz, Math.abs(seed) % 89, it.inst ? 0.5 : 1.3), rgb, it.w * 1.45, Math.abs(seed), p);
      } else if (it.k === 'dot') {
        c.fillStyle = H.rgba(rgb, 0.9); c.beginPath(); c.arc(it.x, it.y, it.r * 1.1, 0, 7); c.fill();
      } else {
        c.save(); c.font = fontOf(it);
        const wAll = c.measureText(it.s).width, x0 = it.align === 'center' ? it.x - wAll / 2 : it.x;
        c.translate(x0, it.y); c.rotate(it.rot || 0);
        const rr = H.rng((it.s.length * 31 + (Math.abs(it.x) | 0)) % 991), n = Math.ceil(it.s.length * p);
        let px = 0;
        for (let i = 0; i < n; i++) {
          const ch = it.s[i], w = c.measureText(ch).width;
          c.fillStyle = H.rgba(rgb, 0.95 * rr.range(0.8, 1));
          c.save(); c.translate(px, rr.range(-1.5, 1.5)); c.rotate(rr.range(-0.04, 0.04)); c.fillText(ch, 0, 0);
          if (it.font === 'num') { c.fillStyle = H.rgba(H.mix(rgb, [255, 255, 255], 0.4), 0.85); c.fillText(ch, 0.8, -0.6); } // numbers pressed harder: a second pass of chalk
          c.restore();
          px += w;
        }
        c.restore();
      }
    }
    c.restore();
    // grain anchored to the board: chalk only catches the slate's high points
    {
      const id = c.getImageData(0, 0, W, HH), d = id.data, iz = 1 / z;
      for (let i = 0, p = 0; i < d.length; i += 4, p++) {
        const a = d[i + 3] / 255; if (!a) continue;
        const x = p % W, y = (p / W) | 0;
        const wx = ((x - W / 2) * iz + cx) * 1.1 | 0, wy = ((y - HH / 2) * iz + cy) * 1.1 | 0;
        let h = Math.imul(wx, 374761393) + Math.imul(wy, 668265263); h = Math.imul(h ^ (h >>> 13), 1274126177); h = ((h ^ (h >>> 16)) >>> 0) / 4294967296;
        const h2 = nz.n2(wx * 0.18, wy * 0.18) * 0.5 + 0.5;
        const g = h * 0.5 + h2 * 0.5;
        d[i + 3] = 255 * Math.min(1, a * 1.15) * H.clamp((g - (1 - a) * 0.95 - 0.06) * 3.0);
      }
      c.putImageData(id, 0, 0);
    }
    ctx.save(); ctx.filter = 'blur(4px)'; ctx.globalAlpha = 0.22; ctx.drawImage(CL, 0, 0); ctx.restore();
    ctx.drawImage(CL, 0, 0);
    // ---- oak frame top, chalk tray and the wall below ----
    ctx.save(); apply(ctx);
    ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.fillRect(vl, TRAY_Y - 8, vr - vl, 8);
    for (let x = WX0 + Math.floor((vl - WX0) / 2400) * 2400; x < vr; x += 2400) ctx.drawImage(XC.tray, x, TRAY_Y);
    { const g = ctx.createLinearGradient(0, TRAY_Y + 96, 0, TRAY_Y + 400); g.addColorStop(0, '#2b1c10'); g.addColorStop(1, '#1a120b'); ctx.fillStyle = g; ctx.fillRect(vl, TRAY_Y + 96, vr - vl, 400); }
    { const g = ctx.createLinearGradient(0, -80, 0, 30); g.addColorStop(0, '#5e3a1c'); g.addColorStop(0.7, '#8a5a30'); g.addColorStop(1, '#3e2510'); ctx.fillStyle = g; ctx.fillRect(vl, -300, vr - vl, 330); ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(vl, 30, vr - vl, 6); }
    // chalk sticks and the felt eraser resting on the ledge
    (() => { const o = [], cols = [[242, 242, 236], [246, 220, 110], [242, 150, 172], [150, 205, 238]]; for (let k = Math.floor(vl / 760) - 1; k * 760 < vr; k++) { const m = Math.abs(k) % 4; o.push([k * 760 + 200, 42 + (Math.abs(k) * 37) % 50, cols[m], ((Math.abs(k) * 13) % 7 - 3) * 0.02]); } return o; })().forEach(([x, len, col, rot]) => {
      ctx.save(); ctx.translate(x, TRAY_Y + 12); ctx.rotate(rot);
      ctx.fillStyle = 'rgba(30,15,5,0.35)'; ctx.beginPath(); ctx.ellipse(len / 2 + 3, 8, len / 2 + 2, 4, 0, 0, 7); ctx.fill();
      const g2 = ctx.createLinearGradient(0, -8, 0, 8); g2.addColorStop(0, H.rgba(H.mix(col, '#ffffff', 0.5))); g2.addColorStop(0.4, H.rgba(col)); g2.addColorStop(1, H.rgba(H.mix(col, '#000000', 0.35)));
      ctx.fillStyle = g2; ctx.beginPath(); ctx.roundRect(0, -8, len, 16, 7); ctx.fill();
      ctx.fillStyle = H.rgba(H.mix(col, '#ffffff', 0.3)); ctx.beginPath(); ctx.ellipse(len - 2, 0, 3, 8, 0, 0, 7); ctx.fill();
      ctx.restore();
    });
    ctx.restore();
    // ---- air dust, vignette, chalk stick ----
    const rr = H.rng(90);
    for (let i = 0; i < 40; i++) { const x0 = rr.range(0, W), sp = rr.range(8, 22), ph = rr.range(0, 2000); const y = ((ph + t * sp) % 760) - 20, x = x0 + Math.sin(t * 0.8 + i) * 8; ctx.fillStyle = `rgba(240,244,236,${rr.range(0.1, 0.3)})`; ctx.beginPath(); ctx.arc(x, y, rr.range(0.7, 1.6), 0, 7); ctx.fill(); }
    H.vignette(ctx, W, HH, 0.35, '0,8,4');
    const tp = tipOf(items, t, meas);
    if (tp) {
      const [tx, ty2] = toS(tp), ang = 0.8;
      for (let i = 0; i < 26; i++) { const r3 = H.rng(Math.floor(t * 30) * 100 + i); ctx.fillStyle = `rgba(240,244,236,${r3.range(0.15, 0.5)})`; ctx.fillRect(tx + r3.range(-14, 14), ty2 + r3.range(0, 34), r3.range(1, 2.4), r3.range(1, 2.4)); }
      ctx.save();
      ctx.save(); ctx.filter = 'blur(6px)'; ctx.fillStyle = 'rgba(0,10,5,0.4)'; ctx.translate(tx + 18, ty2 + 22); ctx.rotate(ang); ctx.fillRect(4, -9, 104, 18); ctx.restore();
      ctx.translate(tx, ty2); ctx.rotate(ang);
      const g2 = ctx.createLinearGradient(0, -10, 0, 10); g2.addColorStop(0, '#ffffff'); g2.addColorStop(0.45, '#ecece4'); g2.addColorStop(1, '#a9aaa2');
      ctx.fillStyle = g2; ctx.beginPath(); ctx.moveTo(0, -6); ctx.lineTo(8, -10); ctx.lineTo(112, -10); ctx.lineTo(112, 10); ctx.lineTo(8, 10); ctx.lineTo(0, 5); ctx.closePath(); ctx.fill();
      ctx.restore();
    }
  }

  // felt eraser crossing the screen in a zigzag; the new board shows behind it
  function drawEraser(ctx, x, y, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    ctx.save(); ctx.filter = 'blur(10px)'; ctx.fillStyle = 'rgba(0,10,5,0.45)'; ctx.fillRect(-150, -40, 320, 110); ctx.restore();
    const eg = ctx.createLinearGradient(0, -60, 0, 10); eg.addColorStop(0, '#c48a52'); eg.addColorStop(1, '#8a5a30');
    ctx.fillStyle = eg; ctx.beginPath(); ctx.roundRect(-170, -60, 340, 76, 10); ctx.fill();
    ctx.strokeStyle = 'rgba(60,34,14,0.35)'; ctx.lineWidth = 2; for (let i = 0; i < 9; i++) { ctx.beginPath(); ctx.moveTo(-160, -50 + i * 7); ctx.lineTo(160, -52 + i * 7); ctx.stroke(); }
    ctx.fillStyle = '#5c5c5c'; ctx.fillRect(-166, 12, 332, 34);
    ctx.fillStyle = 'rgba(240,240,235,0.6)'; ctx.fillRect(-166, 30, 332, 16);
    ctx.restore();
  }

  function explainer(ctx, Wd, Hd, t) {
    if (!NZ) NZ = H.makeNoise(31);
    if (!XC.slate) buildSlate();
    const items = story(t);
    const wp = WIPES.find((w) => t > w.t0 && t < w.t1);
    if (!wp) renderView(ctx, t, camAt(t), items);
    else {
      const u = (t - wp.t0) / (wp.t1 - wp.t0);
      renderView(ctx, t, camAt(wp.t0), items);
      const NL = XC.NL || (XC.NL = H.layer(W, HH)), nc = NL.getContext('2d');
      nc.setTransform(1, 0, 0, 1, 0, 0); nc.globalAlpha = 1; nc.filter = 'none'; nc.clearRect(0, 0, W, HH);
      renderView(nc, t, camAt(wp.t1), items);
      // zigzag passes: 4 rows, each crossing the full width; the cleared area grows behind the felt
      const rows = 3, rowH = HH / rows, pos = u * rows, row = Math.min(rows - 1, Math.floor(pos)), f = pos - row, dir = row % 2 ? -1 : 1;
      const ex = dir > 0 ? -200 + f * (W + 400) : W + 200 - f * (W + 400), ey = row * rowH + rowH * 0.5;
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, row * rowH);
      const x0 = dir > 0 ? 0 : ex, x1 = dir > 0 ? ex : W; ctx.rect(x0, row * rowH, Math.max(0, x1 - x0), rowH);
      ctx.clip(); ctx.drawImage(NL, 0, 0);
      // a cloudy smear left by the felt, fading
      ctx.globalAlpha = 0.16 * (1 - u); ctx.filter = 'blur(30px)'; ctx.fillStyle = 'rgb(205,220,205)';
      for (let r = 0; r <= row; r++) ctx.fillRect(0, r * rowH + rowH * 0.25, W, rowH * 0.5);
      ctx.restore();
      drawEraser(ctx, ex, ey, dir * 0.08 + Math.sin(t * 40) * 0.02);
    }
    H.grain(ctx, Wd, Hd, 0.03, 5 + (Math.floor(t * 12) % 4));
  }

  function scoreSound(k) {
    const D = DURATION;
    const knock = (t, g = 1, pan = 0, minor = true) => { k.tone(t, { f: [[0, 150], [0.05, 90]], dur: 0.07, gain: 0.1 * g, pan, minor, verb: 0.12 }); k.noise(t, { dur: 0.025, filter: 'bandpass', f: 900, q: 1.2, gain: 0.15 * g, a: 0.001, pan, minor, verb: 0.12 }); };
    const LV = 0.45;
    const ch = (a, b, g = 1, pan = 0, minor = true) => { const d = Math.max(0.03, b - a); g *= LV; knock(a, g, pan, minor); k.play('stroke', a, { material: 'chalk', dur: d, gain: 0.95 * g, pan, minor }); };
    const write = (s, a, b, g = 0.8, pan = 0) => { const n = s.length, re = /\S+/g; let m; while ((m = re.exec(s))) ch(a + (b - a) * m.index / n, a + (b - a) * (m.index + m[0].length) / n, g, pan, true); };
    const tap = (t, g = 1, pan = 0) => { k.noise(t, { dur: 0.02, filter: 'bandpass', f: 1500, q: 1.4, gain: 0.25 * g, a: 0.001, pan, minor: true }); k.tone(t, { f: 180, dur: 0.035, gain: 0.07 * g, pan, minor: true }); };
    const dust = (t, g = 1, pan = 0) => k.noise(t, { dur: 0.45, color: 'pink', filter: 'bandpass', f: 1400, q: 0.5, gain: 0.05 * g, a: 0.12, pan, minor: true });
    k.bed('room', 0, D, { gain: 0.5 });
    // every timed stroke and word in the story gets its chalk drag (merged when strokes chain closely)
    const all = story(D + 1, true).map((it) => (it.la != null ? { ...it, inst: false, a: it.la, b: it.lb } : it)).filter((it) => !it.inst && it.a >= 0 && !(it.k === 'line' && it.w < 0.1)).sort((a, b) => a.a - b.a);
    let lastEnd = -1;
    for (const it of all) {
      const pan = H.clamp(((it.k === 'line' ? it.pts[0][0] : it.x) % 1500 - 640) / 900, -0.4, 0.4);
      if (it.k === 'text') write(it.s, it.a, it.b, it.size > 100 ? 1.0 : 0.75, pan);
      else if (it.k === 'dot') tap(it.a, 0.9, pan);
      else if (it.hit) { ch(it.a, it.b, 1.4, pan, false); dust(it.b - 0.05, 1.2, pan); }
      else if (it.a > lastEnd - 0.02 || it.b - it.a > 0.12) ch(it.a, it.b, 0.85, pan);
      lastEnd = Math.max(lastEnd, it.b);
    }
    // camera tracking along the slate: a soft air move under the chalk leader
    PANS.forEach((p) => k.play('whoosh', p.t0 - 0.05, { dur: p.t1 - p.t0 + 0.1, gain: 0.45, top: 1600 }));
    // eraser wipes: felt rubbing in four passes, then dust
    WIPES.forEach((w) => { const d = w.t1 - w.t0; for (let r = 0; r < 3; r++) k.play('erase', w.t0 + r * d / 3, { dur: d / 3, gain: 1.2 }); dust(w.t1 - 0.05, 1.5); });
    // key moments
    k.play('impact', T(0, 'soap') + (-0.08), {"gain": 0.55});
    k.play('ding', T(1, 'eight') + (0), {"f": "D6", "gain": 0.3});
    k.play('pop', T(2, 'you') + (0), {"f": 600, "gain": 0.5});
    k.play('sparkle', T(4, 'fresh') + (-0.1), {"n": 6, "gain": 0.35});
    k.play('thud', T(5, 'soap') + (0), {"f": 170, "gain": 0.45});
    k.play('impact', T(7, 'both') + (-0.05), {"gain": 0.45});
    k.play('ding', T(8, 'nose') + (0), {"f": "G5", "gain": 0.3});
    k.play('ding', T(10, 'babylonians') + (0), {"f": "E5", "gain": 0.3});
    k.play('stamp', T(11, 'loud') + (0), {"gain": 0.4});
    k.play('pop', T(13, 'bedbugs') + (0), {"f": 420, "gain": 0.5});
    k.play('thud', T(16, 'floor') + (0), {"f": 150, "gain": 0.5});
    k.play('ding', T(18, 'hundred') + (0), {"f": "A5", "gain": 0.3});
    k.play('pop', T(19, 'three') + (0), {"f": 620, "gain": 0.45});
    k.play('impact', T(20, 'percent') + (-0.1), {"gain": 0.5});
    k.play('sparkle', T(27, 'aldehydes') + (-0.1), {"n": 6, "gain": 0.4});
    k.play('pop', T(29, 'oxygen') + (0), {"f": 740, "gain": 0.5});
    k.play('ding', T(30, 'decenal') + (0), {"f": "B5", "gain": 0.3});
    k.play('swish', T(32, 'twist') + (-0.1), {"dur": 0.4, "gain": 0.5});
    k.play('success', T(34, 'smells') + (0), {"f": "G5", "gain": 0.4});
    k.play('pop', T(35, 'which') + (0), {"f": 560, "gain": 0.4});
    k.play('thud', T(37, 'taste') + (0.1), {"f": 170, "gain": 0.4});
    k.play('swish', T(39, 'nose') + (-0.1), {"dur": 0.4, "gain": 0.45});
    k.play('pop', T(42, 'key') + (0.1), {"f": 760, "gain": 0.5});
    k.play('ding', T(44, 'thousand') + (0), {"f": "D6", "gain": 0.3});
    k.play('ding', T(47, 'spot') + (0), {"f": "E6", "gain": 0.35});
    k.play('impact', T(49, 'called') + (0.3), {"gain": 0.4});
    k.play('pop', T(50, 'catching') + (0.15), {"f": 700, "gain": 0.5});
    k.play('impact', T(52, 'loudly') + (-0.05), {"gain": 0.5});
    k.play('thud', T(54, 'not') + (0), {"f": 160, "gain": 0.5});
    k.play('impact', T(56, 'half') + (-0.08), {"gain": 0.6});
    k.play('ding', T(58, 'half') + (0), {"f": "C6", "gain": 0.3});
    k.play('stamp', T(61, 'no') + (0), {"gain": 0.45});
    k.play('sparkle', T(63, 'ate') + (0), {"n": 5, "gain": 0.3});
    k.play('ding', T(65, 'day') + (0), {"f": "G5", "gain": 0.3});
    k.play('sparkle', T(68, 'stuck') + (0), {"n": 6, "gain": 0.4});
    k.play('stamp', T(72, 'crush') + (0), {"gain": 0.6});
    k.play('success', T(74, 'milder') + (0), {"f": "A5", "gain": 0.4});
    k.play('ding', T(75, 'pesto') + (0), {"f": "E6", "gain": 0.3});
    k.play('sparkle', T(79, 'real') + (0), {"n": 6, "gain": 0.4});
    k.play('swish', T(81, 'dolphins') + (-0.1), {"dur": 0.5, "gain": 0.5});
    k.play('pop', T(81, 'drowning') + (0), {"f": 640, "gain": 0.5});
    for (let i = 0; i < 4; i++) k.play('thud', T(72, 'crush') + 0.1 + i * 0.45, { f: 130, gain: 0.3, minor: true });
    k.play('success', B[B.length - 1].e + 0.3, { f: 'D6', gain: 0.4 });
  }

  // the YouTube thumbnail: one still in the style, huge words
  function thumbnail(ctx) {
    if (!NZ) NZ = H.makeNoise(31);
    if (!XC.slate) buildSlate();
    const items = [], ox = 0;
    const L = (list, role, w) => list.forEach((pts) => items.push({ k: 'line', pts, role, w, a: -1, b: 0, inst: true }));
    const Tx = (s, x, y, size, role, rot) => items.push({ k: 'text', s, x, y, size, font: 'title', role, a: -1, b: 0, inst: true, rot, align: 'center' });
    L(leaf(235, 280, 170), 'acc3', 9);
    L(soapBar(235, 520, 300, 150), 'ink', 7);
    Tx('SOAP', 235, 545, 72, 'acc2', -0.02);
    L(bubbles(70, 440, 60), 'acc4', 5);
    L(nose(1140, 300, 190), 'ink', 8);
    Tx("IT'S YOUR", 700, 250, 138, 'ink', -0.02);
    Tx('NOSE', 700, 480, 220, 'acc1', -0.03);
    items.push({ k: 'line', pts: [[470, 525], [930, 510]], role: 'acc2', w: 10, a: -1, b: 0, inst: true });
    renderView(ctx, 999, [640, 360, 1], items);
    H.grain(ctx, 1280, 720, 0.03, 5);
  }

  try { if (document.fonts) ['700 120px "Kalam"', '400 60px "Patrick Hand"'].forEach((f) => document.fonts.load(f, 'AaZz09?!~')); } catch (e) { /* render anyway */ }
  window.BEATS = BEATS; window.DURATION = DURATION; window.explainer = explainer; window.scoreSound = scoreSound; window.thumbnail = thumbnail;
  window.VIDEO_W = W; window.VIDEO_H = HH;
})();
