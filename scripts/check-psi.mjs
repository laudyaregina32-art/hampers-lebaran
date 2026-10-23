async function check() {
  console.log('Querying PageSpeed Insights API for mobile (hamperslebaran.biz.id)...');
  const url = 'https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://hamperslebaran.biz.id/&strategy=mobile';
  const res = await fetch(url);
  const data = await res.json();
  if (data.error) {
    console.error('API Error:', data.error);
    return;
  }
  const cats = data.lighthouseResult.categories;
  console.log('\n--- SCORES ---');
  for (const k in cats) {
    console.log(`${cats[k].title}: ${Math.round(cats[k].score * 100)}`);
  }
  const audits = data.lighthouseResult.audits;
  console.log('\n--- METRICS ---');
  console.log('FCP:', audits['first-contentful-paint']?.displayValue);
  console.log('LCP:', audits['largest-contentful-paint']?.displayValue);
  console.log('TBT:', audits['total-blocking-time']?.displayValue);
  console.log('CLS:', audits['cumulative-layout-shift']?.displayValue);
  console.log('Speed Index:', audits['speed-index']?.displayValue);

  console.log('\n--- OPPORTUNITIES & ISSUES ---');
  for (const [id, a] of Object.entries(audits)) {
    if (a.score !== null && a.score < 0.9) {
      console.log(`\n• [${id}] ${a.title} | Score: ${a.score} | Value: ${a.displayValue || 'N/A'}`);
      if (a.details && a.details.items) {
        for (const item of a.details.items.slice(0, 3)) {
          console.log('   ->', JSON.stringify(item));
        }
      }
    }
  }
}
check();
