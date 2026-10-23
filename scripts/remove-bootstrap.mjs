import fs from 'fs';

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let count = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('bootstrap.bundle.min.js')) {
    content = content.replace(/\s*<!--\s*Bootstrap JS Bundle\s*-->\s*<script\s+src=["']assets\/js\/bootstrap\.bundle\.min\.js["']\s+defer><\/script>/g, '');
    content = content.replace(/\s*<script\s+src=["']assets\/js\/bootstrap\.bundle\.min\.js["']\s+defer><\/script>/g, '');
    fs.writeFileSync(file, content, 'utf8');
    count++;
    console.log('Removed bootstrap from', file);
  }
}
console.log('Total files cleaned:', count);
