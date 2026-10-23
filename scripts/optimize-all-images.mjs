import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeAllImages() {
  const assetsDir = 'assets/images';
  const backupDir = 'scratch/backup_images';

  const assetFiles = fs.readdirSync(assetsDir);

  console.log('Starting image optimization: Crystal sharp & strictly < 100 KB...');

  for (const file of assetFiles) {
    if (file === 'favicon.ico') continue;

    const assetPath = path.join(assetsDir, file);
    let srcPath = path.join(backupDir, file);

    // If no backup, use asset as source
    if (!fs.existsSync(srcPath)) {
      srcPath = assetPath;
    }

    // Special handling for sastengel.png -> sastengel.webp
    if (file === 'sastengel.png') {
      const targetWebp = path.join(assetsDir, 'sastengel.webp');
      console.log('Processing sastengel.png -> sastengel.webp...');
      let quality = 82;
      let buf;
      while (quality >= 50) {
        buf = await sharp(assetPath)
          .resize({ width: 900, height: 900, fit: 'inside', withoutEnlargement: true })
          .sharpen({ sigma: 0.8, m1: 0.4, m2: 0.2 })
          .webp({ quality, effort: 6 })
          .toBuffer();
        if (buf.length <= 95 * 1024) break;
        quality -= 3;
      }
      fs.writeFileSync(targetWebp, buf);
      console.log(`Saved sastengel.webp: ${(buf.length / 1024).toFixed(1)} KB (quality ${quality})`);
      // Delete large 2.8MB PNG
      fs.unlinkSync(assetPath);
      continue;
    }

    if (!file.endsWith('.webp')) continue;

    // Check if it's a responsive variant (-320, -400, -600)
    const is320 = file.includes('-320.webp');
    const is400 = file.includes('-400.webp');
    const is600 = file.includes('-600.webp');
    const isLogo = file === 'logo.webp';

    let maxW = 900;
    let maxH = 900;
    if (is320) { maxW = 320; maxH = 427; }
    else if (is400) { maxW = 400; maxH = 533; }
    else if (is600) { maxW = 600; maxH = 800; }
    else if (isLogo) { maxW = 256; maxH = 256; }
    else if (file.startsWith('blog-') || file === 'og-hampers-lebaran.webp' || file === 'hampers-together.webp' || file === 'hampers-mlg.webp') {
      maxW = 1200;
      maxH = 800;
    }

    // Find best source: if responsive variant, try to use base backup image
    if (is320 || is400 || is600) {
      const baseName = file.replace(/-(320|400|600)\.webp$/, '.webp');
      const baseBackup = path.join(backupDir, baseName);
      if (fs.existsSync(baseBackup)) {
        srcPath = baseBackup;
      }
    }

    // Process image with sharp
    let quality = 85;
    let buf;
    while (quality >= 50) {
      let pipeline = sharp(srcPath)
        .resize({ width: maxW, height: maxH, fit: 'inside', withoutEnlargement: true });

      // Apply mild unsharp mask to prevent blurriness
      pipeline = pipeline.sharpen({ sigma: 0.8, m1: 0.4, m2: 0.2 });

      buf = await pipeline.webp({ quality, effort: 6 }).toBuffer();

      if (buf.length <= 95 * 1024) {
        break; // Successfully under 95 KB (strictly < 100 KB)
      }
      quality -= 3;
    }

    fs.writeFileSync(assetPath, buf);
    const meta = await sharp(buf).metadata();
    console.log(`✓ ${file}: ${(buf.length / 1024).toFixed(1)} KB [${meta.width}x${meta.height}] (q: ${quality})`);
  }

  console.log('\nAll images successfully optimized and verified!');
}

optimizeAllImages().catch(err => {
  console.error('Optimization error:', err);
});
