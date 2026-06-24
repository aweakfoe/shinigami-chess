const sharp = require('sharp');

async function removeBackground() {
  const inputPath = 'shinigamilogo.png';
  const outputPath = 'public/logo.png';

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixels = new Uint8Array(data);

  // Sample the top-left corner to detect the exact background color
  const bgR = pixels[0], bgG = pixels[1], bgB = pixels[2];
  console.log(`Detected background color: rgb(${bgR}, ${bgG}, ${bgB})`);

  for (let i = 0; i < width * height; i++) {
    const offset = i * channels;
    const r = pixels[offset];
    const g = pixels[offset + 1];
    const b = pixels[offset + 2];

    // Distance from detected background color
    const dist = Math.sqrt(
      Math.pow(r - bgR, 2) +
      Math.pow(g - bgG, 2) +
      Math.pow(b - bgB, 2)
    );

    // Threshold: pixels close to bg color become transparent
    // Tolerance of 80 covers navy gradient + dark shadow variations
    const tolerance = 80;
    if (dist < tolerance) {
      // Soft edge: fully transparent at center, fade out at edge
      const alpha = Math.round(Math.min(1, (dist / tolerance) * 3.0) * 255);
      pixels[offset + 3] = alpha;
    }

    // Second pass: also zap any leftover dark/gray noise pixels
    // that have very low saturation and low brightness
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);
    const saturation = maxC === 0 ? 0 : (maxC - minC) / maxC;
    if (lum < 50 && saturation < 0.35) {
      // Dark desaturated pixel = residue, make transparent
      const alpha = Math.round(Math.min(1, lum / 50) * 255);
      pixels[offset + 3] = Math.min(pixels[offset + 3], alpha);
    }
  }

  await sharp(pixels, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);

  console.log(`✅ Transparent logo saved to: ${outputPath}`);
}

removeBackground().catch(console.error);
