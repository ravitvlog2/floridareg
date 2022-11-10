const puppeteer = require('puppeteer');

(async () => {
    
    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: false, args: [
            '--user-data-dir=xs'
        ],
    })
    
    
    const page = await browser.newPage();
    await page.goto('https://www.floridareg.com/recent', { waitUntil: 'networkidle2', timeout: 120000 });
    await page.screenshot({ path: 'example.png' });
    console.log('sukses')
    await page.waitForSelector('#company > div > div > div:nth-child(1) > div > a')
    const validasi = await page.$eval(('#company > div > div > div:nth-child(1) > div > a'), el => el.textContent);
    console.log(validasi)
    
    
    
    //   await browser.close();
})();




