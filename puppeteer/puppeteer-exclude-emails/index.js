const puppeteer = require("puppeteer-extra");
const pluginStealth = require("puppeteer-extra-plugin-stealth");

const user = 'mvleite0908@gmail.com';
const password = 'marcus0906';
const filter = 'meetup';


(async () => {
    puppeteer.use(pluginStealth());
    const browser = await puppeteer.launch({
      headless: false,
     
    });
  
    const page = await browser.newPage();

    await page.goto(
        "https://accounts.google.com/AccountChooser?service=mail&continue=https://mail.google.com/mail/"
    );

    await page.waitForSelector(`input[type='email']`);
    await page.type(`input[type='email']`, user, { delay: 15 });
    await page.keyboard.press("Enter");

    await page.waitForNavigation(["networkidle0", "load", "domcontentloaded"]);
    await page.waitFor(3550);
    await page.waitForSelector(`input[type='password']`);
    await page.type(`input[type='password']`, password, { delay: 15 });
    await page.keyboard.press("Enter");
    await page.waitForNavigation(["networkidle0", "load", "domcontentloaded"]);


    //search the filter
    await page.waitForSelector(searchBar);
    await page.type(searchBar, filter, { delay: 15 });
    await page.keyboard.press("Enter");
    await page.waitForNavigation(["networkidle0", "load", "domcontentloaded"]);

   /*  await page.waitForTimeout(1000).then(() => console.log('Waited a second!'));
    await page.mouse.click(280, 150, "left");
    await page.waitForTimeout(1000).then(() => console.log('Waited a second!'));
    await page.mouse.move(430, 150);
    await page.waitForTimeout(1000).then(() => console.log('Waited a second!')); */

    let i = 0;
    while(i <= 500){
      await page.waitForTimeout(500).then(() => console.log('ciclo: ', i + 1));
      await page.mouse.click(280, 150, "left");
      await page.waitForTimeout(500)
      await page.mouse.click(430, 150, "left");
      await page.waitForTimeout(500)
      i++
    }

    /* let exist;
    try{
      const element = await page.waitForSelector(test);
      if(element) {
        exist = true;
      }
    }
    catch(ex){
      exist = false;
    } */
    

    /* let count = 0;

    await page.evaluate((sel) => {
      var elements = document.querySelectorAll(sel);
      count = elements.length;
      for(var i=0; i< elements.length; i++){
          elements[i].parentNode.removeChild(elements[i]);
          
      }
    }, someEmail)

    console.log('count', count); */


    await page.waitForTimeout(5000).then(() => console.log('Waited a second!'));
      
    console.log('be3');
    
    await page.screenshot({ path: 'example.png' });
  
    await browser.close();
    
  })();

//elements
const searchBar = "#aso_search_form_anchor > div > table > tbody > tr > td > table > tbody > tr > td > div > input[type='text'] "
const checkbox =`div[aria-label='Selecionar']`
//const test = `div[role='main']` 
const someEmail = `div[role='main']` 