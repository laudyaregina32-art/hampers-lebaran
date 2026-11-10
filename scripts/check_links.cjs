const fs = require('fs');
const path = require('path');

const blogFiles = fs.readdirSync('blog').filter(f => f.endsWith('.html'));
const linkCounts = {};

for (const file of blogFiles) {
  const content = fs.readFileSync(path.join('blog', file), 'utf8');
  // Match inside <article> or body
  const articleMatch = content.match(/<article[\s\S]*?<\/article>/);
  const targetText = articleMatch ? articleMatch[0] : content;
  
  const matches = targetText.matchAll(/href=["']([^"']+)["']/g);
  for (const m of matches) {
    const url = m[1];
    if (!url.startsWith('http') && !url.startsWith('#') && !url.startsWith('mailto:') && !url.startsWith('tel:') && !url.includes('assets') && !url.includes('favicon') && !url.includes('manifest')) {
      if (!linkCounts[url]) linkCounts[url] = [];
      linkCounts[url].push(file);
    }
  }
}

for (const [url, files] of Object.entries(linkCounts)) {
  console.log(`${url} (${files.length}x in: ${files.slice(0, 3).join(', ')}${files.length > 3 ? '...' : ''})`);
}
