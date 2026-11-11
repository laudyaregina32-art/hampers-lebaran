import fs from 'fs';
const html = fs.readFileSync('c:/hamperslebaran/blog.html', 'utf8');
const matches = html.match(/href="blog\/[^"]+"/g);
console.log('Blog cards count:', matches ? matches.length : 0);
console.log('Cards list (top 6):', matches ? matches.slice(0, 6) : []);
