import { chromium } from 'playwright';

const URL = 'http://localhost:5173';

const sections = [
  { id: 'hero', file: 'shot-01-hero.png' },
  { id: 'stats', file: 'shot-02-stats.png' },
  { id: 'especialidades', file: 'shot-03-especialidades.png' },
  { id: 'menu', file: 'shot-04-menu.png' },
  { id: 'sobre', file: 'shot-05-sobre.png' },
  { id: 'galeria', file: 'shot-06-galeria.png' },
  { id: 'contacto', file: 'shot-07-contacto.png' },
];

const run = async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const page = await ctx.newPage();

  const errors = [];
  page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`console.error: ${msg.text()}`);
  });

  await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2200);

  // Per-section
  for (const s of sections) {
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    }, s.id);
    await page.waitForTimeout(900);
    await page.screenshot({ path: s.file, fullPage: false });
    console.log(`Wrote ${s.file}`);
  }

  // Footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'shot-08-footer.png', fullPage: false });
  console.log('Wrote shot-08-footer.png');

  // Full page (mosaic)
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'shot-fullpage.png', fullPage: true });
  console.log('Wrote shot-fullpage.png');

  // Mobile viewport (390px)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'shot-mobile-fullpage.png', fullPage: true });
  console.log('Wrote shot-mobile-fullpage.png');

  if (errors.length) {
    console.log('\nERRORS:');
    errors.forEach((e) => console.log('  ' + e));
  } else {
    console.log('\nNo console errors.');
  }

  await browser.close();
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
