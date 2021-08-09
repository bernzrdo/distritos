const puppeteer = require('puppeteer');

(async ()=>{
    const browser = await puppeteer.launch({headless:false});
    const page = (await browser.pages())[0];
    await page.goto('https://online.seterra.com/pt/vgp/3090', {waitUntil: 'networkidle0'});
    await page.waitForSelector('#accept-choices');
    await page.click('#accept-choices');
    await page.click('#cmdRestart');
    for(i of Array(18).fill(0)) await page.click(`#AREA_PORTUGAL_${(await page.$eval('#currQuestion',e=>e.textContent)).substr(10).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f ]/g,'')}`);
})();