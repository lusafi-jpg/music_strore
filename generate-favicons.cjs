const sharp = require('sharp');
const path = require('path');

// Input file
const inputFile = './src/assets/vibrato.png';
const outputDir = './public';

// Favicon sizes and configurations
const faviconConfigs = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'favicon-128x128.png', size: 128 },
  { name: 'favicon-196x196.png', size: 196 },
  { name: 'favicon-228x228.png', size: 228 },
  { name: 'favicon-256x256.png', size: 256 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'mstile-150x150.png', size: 150 }
];

async function generateFavicons() {
  try {
    console.log('Génération des favicons à partir de:', inputFile);
    
    for (const config of faviconConfigs) {
      const outputPath = path.join(outputDir, config.name);
      
      await sharp(inputFile)
        .resize(config.size, config.size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png({ 
          compressionLevel: 9,
          quality: 90
        })
        .toFile(outputPath);
      
      console.log(`✅ Généré: ${config.name} (${config.size}x${config.size})`);
    }
    
    // Generate ICO file
    await sharp(inputFile)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toFile(path.join(outputDir, 'favicon.ico'));
    
    console.log('✅ Généré: favicon.ico');
    
    console.log('\n🎉 Tous les favicons ont été générés avec succès!');
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération des favicons:', error);
  }
}

generateFavicons();
