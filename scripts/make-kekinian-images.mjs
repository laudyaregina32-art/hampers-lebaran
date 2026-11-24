import sharp from 'sharp';
import fs from 'fs';

async function makeImages() {
  const images = [
    {
      source: 'assets/images/hampers-eid.webp',
      hero: 'assets/images/hampers-kekinian-hero.webp',
      thumb: 'assets/images/hampers-kekinian-thumb.webp'
    },
    {
      source: 'assets/images/hampers-together.webp',
      hero: 'assets/images/inspirasi-hampers-kekinian-hero.webp',
      thumb: 'assets/images/inspirasi-hampers-kekinian-thumb.webp'
    },
    {
      source: 'assets/images/hampers-perusahaan.webp',
      hero: 'assets/images/hampers-klien-bisnis-hero.webp',
      thumb: 'assets/images/hampers-klien-bisnis-thumb.webp'
    },
    {
      source: 'assets/images/hampers-custom.webp',
      hero: 'assets/images/vendor-hampers-custom-hero.webp',
      thumb: 'assets/images/vendor-hampers-custom-thumb.webp'
    }
  ];

  for (const item of images) {
    console.log(`Processing ${item.source}...`);
    // 800x450 (16:9 hero)
    await sharp(item.source)
      .resize(800, 450, { fit: 'cover', position: 'center' })
      .webp({ quality: 82, effort: 5 })
      .toFile(item.hero);
    console.log(`Created hero: ${item.hero}`);

    // 400x267 (3:2 card thumbnail)
    await sharp(item.source)
      .resize(400, 267, { fit: 'cover', position: 'center' })
      .webp({ quality: 80, effort: 5 })
      .toFile(item.thumb);
    console.log(`Created thumb: ${item.thumb}`);
  }
  console.log('All images generated successfully!');
}

makeImages().catch(err => {
  console.error(err);
  process.exit(1);
});
