import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'public', 'img', 'LOGO-removebg-preview.png');
const outputPath = path.join(__dirname, 'public', 'img', 'LOGO-processed.png');

sharp(inputPath)
  .ensureAlpha() // ensure alpha channel
  .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } }) // replace white with transparent
  .resize(512, 512, { fit: 'inside', withoutEnlargement: false }) // enlarge to 512x512
  .png()
  .toFile(outputPath)
  .then(info => console.log('Image processed:', info))
  .catch(err => console.error('Error:', err));
