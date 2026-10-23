import fs from 'fs';

const raw = fs.readFileSync('scratch/lighthouse_report.json', 'utf8');
const data = JSON.parse(raw);

console.log('PERFORMANCE SCORE:', Math.round(data.categories.performance.score * 100));

const audits = data.audits;
console.log('\n--- KEY METRICS ---');
console.log('FCP:', audits['first-contentful-paint']?.displayValue, 'Score:', audits['first-contentful-paint']?.score);
console.log('LCP:', audits['largest-contentful-paint']?.displayValue, 'Score:', audits['largest-contentful-paint']?.score);
console.log('TBT:', audits['total-blocking-time']?.displayValue, 'Score:', audits['total-blocking-time']?.score);
console.log('CLS:', audits['cumulative-layout-shift']?.displayValue, 'Score:', audits['cumulative-layout-shift']?.score);
console.log('Speed Index:', audits['speed-index']?.displayValue, 'Score:', audits['speed-index']?.score);

console.log('\n--- FAILED OR WARNING AUDITS ---');
for (const [id, a] of Object.entries(audits)) {
  if (a.score !== null && a.score < 0.95 && a.scoreDisplayMode !== 'notApplicable' && a.scoreDisplayMode !== 'informative') {
    console.log(`\n• [${id}] ${a.title} | Score: ${a.score} | Value: ${a.displayValue || ''}`);
    if (a.details && a.details.items && a.details.items.length) {
      console.log('  Items:', JSON.stringify(a.details.items.slice(0, 3), null, 2));
    }
  }
}
