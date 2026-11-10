const fs = require('fs');
const path = require('path');

const navbarPages = new Set([
  '../index.html',
  '../tentang.html',
  '../paket.html',
  '../paket.html#favorit',
  '../paket.html#pilihan',
  '../portofolio.html',
  '../blog.html',
  '../kontak.html',
  '../paket/hampers-premium.html',
  '../paket/hampers-kue-camilan.html',
  '../paket/hampers-perlengkapan-ibadah.html',
  '../paket/hampers-custom.html'
]);

const blogFiles = fs.readdirSync('blog').filter(f => f.endsWith('.html'));

const nonNavbarLinks = [];

for (const file of blogFiles) {
  const content = fs.readFileSync(path.join('blog', file), 'utf8');
  // Scan within article body
  const bodyMatch = content.match(/<article[\s\S]*?<\/article>/);
  if (!bodyMatch) continue;
  
  const text = bodyMatch[0];
  const regex = /href=["'](\.\.\/[^"']+)["']/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const link = match[1];
    if (!navbarPages.has(link)) {
      nonNavbarLinks.push({ file, link, fullMatch: match[0] });
    }
  }
}

console.log(JSON.stringify(nonNavbarLinks, null, 2));

