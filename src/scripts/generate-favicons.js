/**
 * Generate PNG favicons from SVG source files
 *
 * Usage:
 *   npm install sharp
 *   node scripts/generate-favicons.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Define favicon conversions
const conversions = [
  {
    input: 'favicon-16x16.svg',
    output: 'favicon-16x16.png',
    size: 16,
  },
  {
    input: 'favicon-32x32.svg',
    output: 'favicon-32x32.png',
    size: 32,
  },
  {
    input: 'apple-touch-icon.svg',
    output: 'apple-touch-icon.png',
    size: 180,
  },
  {
    input: 'android-chrome-192x192.svg',
    output: 'android-chrome-192x192.png',
    size: 192,
  },
  {
    input: 'android-chrome-512x512.svg',
    output: 'android-chrome-512x512.png',
    size: 512,
  },
];

async function generateFavicons() {
  console.log('🎨 Generating favicon PNG files from SVG sources...\n');

  for (const conversion of conversions) {
    const inputPath = path.join(publicDir, conversion.input);
    const outputPath = path.join(publicDir, conversion.output);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${conversion.input} (file not found)`);
      continue;
    }

    try {
      await sharp(inputPath).resize(conversion.size, conversion.size).png().toFile(outputPath);

      const stats = fs.statSync(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(2);

      console.log(
        `✅ Generated ${conversion.output} (${conversion.size}x${conversion.size}) - ${sizeKB} KB`,
      );
    } catch (error) {
      console.error(`❌ Error generating ${conversion.output}:`, error.message);
    }
  }

  // Generate favicon.ico from 32x32 PNG
  console.log('\n🎯 Generating favicon.ico...');
  try {
    const inputPath = path.join(publicDir, 'favicon-32x32.png');
    const outputPath = path.join(publicDir, 'favicon.ico');

    if (fs.existsSync(inputPath)) {
      // ICO format requires special handling
      // For now, just copy the 32x32 PNG as .ico (browsers will handle it)
      fs.copyFileSync(inputPath, outputPath);
      const stats = fs.statSync(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`✅ Generated favicon.ico - ${sizeKB} KB`);
    }
  } catch (error) {
    console.error(`❌ Error generating favicon.ico:`, error.message);
  }

  console.log('\n✨ Favicon generation complete!\n');
  console.log('📝 Next steps:');
  console.log('   1. Check the /public/ directory for generated PNG files');
  console.log('   2. Clear browser cache and hard refresh to see new favicons');
  console.log('   3. Test on mobile devices (Add to Home Screen)');
}

// Run the generator
generateFavicons().catch(console.error);
