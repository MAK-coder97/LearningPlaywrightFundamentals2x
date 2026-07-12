import { chromium, Browser, BrowserContext, Page } from "playwright";

async function run() {

    // Level 1: lanuch browser - heaviest operation , do it once 
    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser lanched", browser);


    // Level 2: Create context - fresh session , isolated cookies
    let context1: BrowserContext = await browser.newContext();
    console.log("Broswer lanched", context1);


    let page: Page = await context1.newPage();
    console.log("Page Open");

    await page.goto("https://app.vwo.com");
    console.log("Tile:", await page.title());

    //Cleanup - reverse order
    await page.close();
    await context1.close();
    await browser.close();

}

run();
