const puppeteer = require('puppeteer-extra');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://accounts.google.com/AccountChooser?service=mail&continue=https://mail.google.com/mail/');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();