const { chromium } = require('playwright');

async function captureScreenshots() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-dev-shm-usage'],
  });
  const page = await browser.newPage();

  const sites = [
    { name: 'vitalwall', url: 'https://vitalwall.com' },
    { name: 'voicecommit', url: 'https://voicecommit.com' },
    { name: 'blackopscenter', url: 'https://blackopscenter.com' },
  ];

  for (const site of sites) {
    console.log(`Capturing ${site.name}...`);
    await page.goto(site.url, { waitUntil: 'networkidle' });
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.screenshot({
      path: `public/images/${site.name}.png`,
      fullPage: false,
    });
    console.log(`✓ Saved ${site.name}.png`);
  }

  await browser.close();
  console.log('All screenshots captured!');
}

captureScreenshots().catch(console.error);
