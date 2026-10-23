import fs from 'fs';

let content = fs.readFileSync('index.html', 'utf8');

// Match the JSON-LD block in head
const jsonLdRegex = /<!-- =+ -->\s*<!-- Schema\.org JSON-LD[\s\S]*?<\/script>/;
const match = content.match(jsonLdRegex);

if (!match) {
  console.error('Could not match JSON-LD in index.html');
  process.exit(1);
}

const jsonLdBlock = match[0];
// Remove from head
content = content.replace(jsonLdBlock, '');

// Restore media='print' onload='this.media="all"' for home.min.css and remove DOMContentLoaded script
content = content.replace(
  /<link rel="preload" href="assets\/css\/home\.min\.css" as="style">\s*<script>[\s\S]*?<\/script>/,
  '<link rel="stylesheet" href="assets/css/home.min.css" media="print" onload="this.media=\'all\'">'
);

// Insert JSON-LD before </body>
content = content.replace('</body>', jsonLdBlock + '\n</body>');

fs.writeFileSync('index.html', content, 'utf8');
console.log('Successfully moved JSON-LD to end of body and optimized home.min.css loading!');
