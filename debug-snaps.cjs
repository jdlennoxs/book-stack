const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Starting headless browser...');
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--headless']
  });
  const page = await browser.newPage();
  
  const scenarios = [
    { height: '0.2', angle: 'flat' },
    { height: '0.2', angle: 'isometric' },
    { height: '1.2', angle: 'flat' },
    { height: '1.2', angle: 'isometric' }
  ];

  const viewports = [
    { name: 'desktop', width: 1280, height: 800 },
    { name: 'mobile', width: 390, height: 844 },
    { name: 'instagram_story', width: 1080, height: 1920 }
  ];

  const outputDir = path.join(__dirname, 'visual_snapshots');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    for (const scene of scenarios) {
      console.log(`Processing: ${ vp.name } | ${scene.height}m ${scene.angle}`);
      try {
        const url = `http://localhost:5173/?testHeight=${scene.height}&testAngle=${scene.angle}&testPhysics=false`;
        await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
        
        // Wait for the loader to vanish if it exists
        try {
          await page.waitForSelector('#loading-overlay', { state: 'hidden', timeout: 60000 });
        } catch (e) {
          // If overlay not found or already gone, continue
        }
        await new Promise(r => setTimeout(r, 6000)); // Ensure stable physics/lerp
        
        const fileName = `snap_${vp.name}_h${scene.height}m_${scene.angle}.png`;
        await page.screenshot({ path: path.join(outputDir, fileName) });
        console.log(`Saved ${fileName}`);
      } catch (err) {
        console.error(`Error:`, err.message);
      }
    }
  }

  await browser.close();
  console.log('Finished.');
  process.exit(0);
})();
