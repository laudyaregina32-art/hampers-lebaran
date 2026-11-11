import fs from 'fs';
import path from 'path';

const blogDir = 'c:/hamperslebaran/blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.html'));

const stats = [];

for (const file of files) {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Count figures or img tags inside <main>
  const mainMatch = content.match(/<main[\s\S]*?<\/main>/i);
  if (mainMatch) {
    const mainHtml = mainMatch[0];
    // Find img in article body / figures excluding author avatar & logo
    const imgMatches = mainHtml.match(/<figure[\s\S]*?<\/figure>/gi) || [];
    stats.push({
      file,
      figuresCount: imgMatches.length
    });
  }
}

console.log(JSON.stringify(stats, null, 2));
