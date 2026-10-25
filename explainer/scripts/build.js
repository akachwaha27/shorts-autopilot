// Assemble one self-contained explainer HTML from a shell + the shared libs + the style/story script.
// usage: node scripts/build.js <shell.html> <story.js> <out.html>
// The shell contains three placeholder script tags: /*HARNESS*/ /*SOUND*/ /*MAIN*/
const fs = require('fs'), path = require('path');
const [shell, story, out] = process.argv.slice(2);
if (!out) { console.error('usage: node scripts/build.js <shell.html> <story.js> <out.html>'); process.exit(1); }
const lib = path.join(__dirname, '..', 'lib');
let h = fs.readFileSync(shell, 'utf8');
const rep = (k, f) => { if (!h.includes(k)) throw new Error('shell is missing ' + k); h = h.replace(k, () => fs.readFileSync(f, 'utf8')); };
rep('/*HARNESS*/', path.join(lib, 'harness.js'));
rep('/*SOUND*/', path.join(lib, 'sound.js'));
rep('/*MAIN*/', story);
fs.writeFileSync(out, h);
// a full-document copy for headless rendering (the artifact page is published without the skeleton)
fs.writeFileSync(out.replace(/\.html$/, '.render.html'), '<!doctype html><html><head><meta charset="utf-8"></head><body>' + h + '</body></html>');
console.log('built', out, h.length, 'bytes');
