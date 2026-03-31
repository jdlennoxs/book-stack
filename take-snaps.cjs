const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--headless'] // Software rendering for 3D in headless
  });
  const page = await browser.newPage();
  
  const scenarios = [
    { height: '0.2', angle: 'flat' },
    { height: '0.2', angle: 'isometric' },
    { height: '1.2', angle: 'flat' },
    { height: '1.2', angle: 'isometric' }
  ];

  const outputDir = path.join(__dirname, 'visual_snapshots');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  for (const scene of scenarios) {
    console.log(`Processing: ${scene.height}m ${scene.angle}`);
    try {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto(`http://localhost:5173/?testHeight=${scene.height}&testAngle=${scene.angle}`, { timeout: 60000 });
      
      // Wait for the loader to vanish
      await page.waitForSelector('#loading-overlay', { state: 'hidden', timeout: 30000 });
      await page.waitForTimeout(2000); // Animation stabilization
      
      const fileName = `snap_${scene.height}m_${scene.angle}.png`;
      await page.screenshot({ path: path.join(outputDir, fileName) });
      console.log(`Saved ${fileName}`);
    } catch (err) {
      console.error(`Error with ${scene.height}m ${scene.angle}:`, err.message);
    }
  }

  await browser.close();
  process.exit(0);
})();
