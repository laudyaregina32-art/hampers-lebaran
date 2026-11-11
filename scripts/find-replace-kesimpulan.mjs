import fs from 'fs';
import path from 'path';

function searchFiles(dir) {
  const files = fs.readdirSync(dir);
  let results = [];
  for (const f of files) {
    const fullPath = path.join(dir, f);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') {
        results = results.concat(searchFiles(fullPath));
      }
    } else if (f.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('Kesimpulan Praktis')) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const found = searchFiles('c:/hamperslebaran');
console.log('Files with "Kesimpulan Praktis":', found);
