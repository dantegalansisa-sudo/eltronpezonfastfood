import { chromium } from 'playwright';

const URL = 'http://localhost:5173';

const run = async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();

  page.on('console', (msg) => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      console.log(`[${msg.type()}]`, msg.text());
    }
  });
  page.on('pageerror', (err) => console.log('[pageerror]', err.message));

  await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
  // Let entry animations finish (delays go up to ~1.8s)
  await page.waitForTimeout(2800);

  // Above-the-fold (1440x900)
  await page.screenshot({ path: 'hero-checkpoint.png', fullPage: false });
  console.log('Wrote hero-checkpoint.png');

  // Full viewport scroll capture for context
  await page.screenshot({ path: 'hero-full.png', fullPage: true });
  console.log('Wrote hero-full.png');

  // Mobile screenshot
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'hero-mobile.png', fullPage: false });
  console.log('Wrote hero-mobile.png');

  await browser.close();
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
