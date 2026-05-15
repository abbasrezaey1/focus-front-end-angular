import fs from 'fs';

const pngPath = 'src/assets/images/banner-1.png';
const outPath = 'src/app/content/leaderboard-png.data.ts';

const png = fs.readFileSync(pngPath);
const b64 = png.toString('base64');
const chunkSize = 8000;

const parts = [];
parts.push(
  '/** Auto-generated from src/assets/images/banner-1.png - inline data URL for top leaderboard. */',
);
parts.push('export const LEADERBOARD_PNG_DATA_URL = `data:image/png;base64,` +');

for (let i = 0; i < b64.length; i += chunkSize) {
  const chunk = b64.slice(i, i + chunkSize);
  const isLast = i + chunkSize >= b64.length;
  parts.push(isLast ? `  \`${chunk}\`;` : `  \`${chunk}\` +`);
}

fs.writeFileSync(outPath, parts.join('\n') + '\n', 'utf8');
console.log('wrote', outPath, 'chunks', parts.length - 2, 'b64 len', b64.length);
