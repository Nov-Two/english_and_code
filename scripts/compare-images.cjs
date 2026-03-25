const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

function compareImages(img1Path, img2Path, diffPath, threshold = 0.001) {
  try {
    const img1 = PNG.sync.read(fs.readFileSync(img1Path));
    const img2 = PNG.sync.read(fs.readFileSync(img2Path));

    const { width, height } = img1;
    const diff = new PNG({ width, height });

    const numDiffPixels = pixelmatch(
      img1.data,
      img2.data,
      diff.data,
      width,
      height,
      { threshold }
    );

    const totalPixels = width * height;
    const diffRatio = numDiffPixels / totalPixels;

    console.log(`Mismatch percentage: ${(diffRatio * 100).toFixed(4)}%`);
    
    if (diffRatio > threshold) {
      console.error(`Visual Regression Test FAILED! Difference is ${diffRatio * 100}%, which is greater than ${threshold * 100}% threshold.`);
      fs.writeFileSync(diffPath, PNG.sync.write(diff));
      process.exit(1);
    } else {
      console.log('Visual Regression Test PASSED!');
    }
  } catch (error) {
    console.error('Error during image comparison:', error);
    process.exit(1);
  }
}

const [, , img1Path, img2Path, diffPath, thresholdArg] = process.argv;
if (img1Path && img2Path && diffPath) {
  const threshold = thresholdArg ? Number(thresholdArg) : 0.001;
  compareImages(img1Path, img2Path, diffPath, Number.isFinite(threshold) ? threshold : 0.001);
} else {
  console.log("Usage: node scripts/compare-images.cjs <img1> <img2> <diff> [threshold]");
}
