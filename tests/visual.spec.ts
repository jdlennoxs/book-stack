import { test, expect } from '@playwright/test';

const heights = ['0.2', '1.2'];
const angles = ['flat', 'isometric'];

for (const height of heights) {
  for (const angle of angles) {
    test(`visual snapshot for ${height}m stack in ${angle} view`, async ({ page }) => {
      // Navigate to the test scenario
      await page.goto(`/?testHeight=${height}&testAngle=${angle}`);

      // Wait for loading overlay to disappear
      await page.waitForSelector('#loading-overlay', { state: 'hidden', timeout: 60000 });
      
      // Wait for the camera lerping animation to complete (0.8s in code, but allow buffer)
      await page.waitForTimeout(3000);

      // Take a screenshot of the entire page
      await expect(page).toHaveScreenshot(`${height}-m-angle-${angle}.png`, {
        maxDiffPixelRatio: 0.1,
      });
    });
  }
}

test('visual snapshot for share screen view (1.2m stack)', async ({ page }) => {
  await page.goto(`/?testHeight=1.2&testAngle=isometric`);
  await page.waitForSelector('#loading-overlay', { state: 'hidden' });
  await page.waitForTimeout(2000);
  
  // To test the "share" screen UI exactly as it appears during capture, 
  // we would need specific UI triggers. 
  // For now, we snapshot the main view.
  await expect(page).toHaveScreenshot('share-view-standard.png');
});
