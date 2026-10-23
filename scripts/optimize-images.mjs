import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'assets/images';

async function optimizeAll() {
  const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.webp'));
  console.log(`Found ${files.length} WebP images to optimize...`);

  const coreProducts = [
    'hampers-hijau-emas',
    'kastengel',
    'sajadah',
    'hampers-sage',
    'hampers-idul-fitri'
  ];

  for (const f of files) {
    // Skip already generated responsive variants
    if (/-\d{3}\.webp$/.test(f)) continue;

    const fullPath = path.join(imagesDir, f);
    const baseName = f.replace(/\.webp$/, '');

    try {
      const inBuf = fs.readFileSync(fullPath);
      const meta = await sharp(inBuf).metadata();
      const origSize = inBuf.length;

      // Downscale if width > 1200px
      let pipeline = sharp(inBuf);
      if (meta.width > 1200) {
        pipeline = pipeline.resize(1200, null, { withoutEnlargement: true });
      }

      const optBuf = await pipeline
        .webp({ quality: 80, effort: 6 })
        .toBuffer();

      if (optBuf.length < origSize) {
        fs.writeFileSync(fullPath, optBuf);
        console.log(`Optimized ${f}: ${(origSize/1024).toFixed(1)}KB -> ${(optBuf.length/1024).toFixed(1)}KB`);
      }

      // Generate responsive sizes for core products
      if (coreProducts.includes(baseName)) {
        const sizes = [320, 400, 600];
        for (const s of sizes) {
          const outName = `${baseName}-${s}.webp`;
          const outPath = path.join(imagesDir, outName);
          const h = Math.round(s * (meta.height / meta.width));
          const resBuf = await sharp(inBuf)
            .resize(s, h, { fit: 'cover' })
            .webp({ quality: 78, effort: 6 })
            .toBuffer();
          fs.writeFileSync(outPath, resBuf);
          console.log(`  Created ${outName}: ${(resBuf.length/1024).toFixed(1)}KB (${s}x${h})`);
        }
      }
    } catch (err) {
      console.error(`Error processing ${f}:`, err.message);
    }
  }

  // Specifically optimize large portfolio/blog/other images
  const heavyImages = [
    'hampers-custom.webp',
    'hampers-keluarga.webp',
    'hampers-banyak.webp',
    'tren-kemasan-eco.webp',
    'paket-ibadah.webp',
    'paket-premium.webp',
    'portofolio-hampers.webp',
    'porto-kue-rotan.webp',
    'porto-keluarga.webp',
    'porto-korporat-50.webp',
    'porto-custom-100.webp',
    'blog-tips-memilih.webp',
    'blog-tips-kemasan.webp',
    'tentang-workshop.webp'
  ];

  for (const p of heavyImages) {
    const pPath = path.join(imagesDir, p);
    if (fs.existsSync(pPath)) {
      const inBuf = fs.readFileSync(pPath);
      const meta = await sharp(inBuf).metadata();
      const origSize = inBuf.length;
      const targetW = Math.min(meta.width, 900);
      const optBuf = await sharp(inBuf)
        .resize(targetW, null, { withoutEnlargement: true })
        .webp({ quality: 78, effort: 6 })
        .toBuffer();
      if (optBuf.length < origSize) {
        fs.writeFileSync(pPath, optBuf);
        console.log(`Super-optimized ${p}: ${(origSize/1024).toFixed(1)}KB -> ${(optBuf.length/1024).toFixed(1)}KB`);
      }
    }
  }

  console.log('All image optimization complete!');
}

optimizeAll();
