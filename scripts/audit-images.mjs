import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function auditImages() {
  const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
  const imgUsage = {};

  for (const hf of htmlFiles) {
    const content = fs.readFileSync(hf, 'utf8');
    const matches = content.match(/assets\/images\/[^"'()\s]+/g) || [];
    for (const m of matches) {
      const img = path.basename(m);
      if (!imgUsage[img]) imgUsage[img] = [];
      if (!imgUsage[img].includes(hf)) imgUsage[img].push(hf);
    }
  }

  const imgDir = 'assets/images';
  const allImages = fs.readdirSync(imgDir);

  const report = [];
  for (const img of allImages) {
    const fullPath = path.join(imgDir, img);
    const stats = fs.statSync(fullPath);
    let meta = null;
    try {
      meta = await sharp(fullPath).metadata();
    } catch (e) {
      meta = { format: 'unknown' };
    }

    report.push({
      name: img,
      usedInCount: (imgUsage[img] || []).length,
      usedIn: (imgUsage[img] || []).slice(0, 3),
      sizeKB: +(stats.size / 1024).toFixed(1),
      isOver100KB: stats.size > 100 * 1024,
      width: meta.width || 0,
      height: meta.height || 0,
      format: meta.format || 'unknown'
    });
  }

  report.sort((a,b) => b.sizeKB - a.sizeKB);
  console.log(JSON.stringify(report, null, 2));
}

auditImages();
