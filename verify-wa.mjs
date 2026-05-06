import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

const links = await page.$$eval('a[href*="wa.me"]', (as) =>
  Array.from(new Set(as.map((a) => a.href))),
);
console.log('Distinct wa.me links:', links.length);
links.forEach((href) => {
  const url = new URL(href);
  const text = decodeURIComponent(url.searchParams.get('text') || '');
  console.log('---');
  console.log('  url:', href.substring(0, 80) + '...');
  console.log('  msg:', text);
});
await browser.close();
