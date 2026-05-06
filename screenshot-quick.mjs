import { chromium } from 'playwright';

const URL = 'http://localhost:5173';

const run = async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const page = await ctx.newPage();

  page.on('pageerror', (err) => console.log('pageerror:', err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') console.log('console.error:', msg.text());
  });

  await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1800);

  for (const id of ['sobre', 'galeria']) {
    await page.evaluate((sid) => {
      const el = document.getElementById(sid);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, id);
    await page.waitForTimeout(900);
    await page.screenshot({ path: `shot-fix-${id}.png`, fullPage: false });
    console.log(`Wrote shot-fix-${id}.png`);
  }

  await browser.close();
};

run().catch((e) => { console.error(e); process.exit(1); });
