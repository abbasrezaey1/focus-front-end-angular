import fs from 'fs';

const png = fs.readFileSync('src/assets/images/banner-1.png');
const fromPng = png.toString('base64');

const ts = fs.readFileSync('src/app/content/leaderboard-png.data.ts', 'utf8');
const chunks = [];
const re = /`([^`]+)`\s*(\+|;)/g;
let m;
while ((m = re.exec(ts)) !== null) {
  const inner = m[1];
  if (!inner.startsWith('data:image')) {
    chunks.push(inner);
  }
}
const b64only = chunks.join('');
console.log('match', fromPng === b64only, 'len', b64only.length);
