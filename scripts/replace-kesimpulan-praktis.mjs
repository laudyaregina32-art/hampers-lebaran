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
      if (/kesimpulan\s+praktis/i.test(content) || /kesimpulan-praktis/i.test(content)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const found = searchFiles('c:/hamperslebaran');
console.log('All files matching case-insensitive:', found);

for (const filePath of found) {
  let content = fs.readFileSync(filePath, 'utf8');
  const beforeLen = content.length;
  
  // Ganti id kesimpulan-praktis -> kesimpulan (baik di TOC href Maupun di heading id)
  content = content.replace(/href="#kesimpulan-praktis"/g, 'href="#kesimpulan"');
  content = content.replace(/id="kesimpulan-praktis"/g, 'id="kesimpulan"');
  
  // Ganti teks 'Kesimpulan Praktis' -> 'Kesimpulan'
  content = content.replace(/Kesimpulan Praktis/g, 'Kesimpulan');
  content = content.replace(/kesimpulan praktis/g, 'kesimpulan');
  content = content.replace(/KESIMPULAN PRAKTIS/g, 'KESIMPULAN');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${filePath} (len diff: ${content.length - beforeLen})`);
}
