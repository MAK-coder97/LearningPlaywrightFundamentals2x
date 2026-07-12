import { chromium, Browser, BrowserContext, Page } from "playwright";

async function run() {


    // Scope 1

    // Level 1: lanuch browser - heaviest operation , do it once 
    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser lanched", browser);


    // Level 2: Create context - fresh session , isolated cookies
    let context1: BrowserContext = await browser.newContext();
    console.log("Broswer lanched", context1);


    let page1: Page = await context1.newPage();
    console.log("Page Open");

    await page1.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    console.log("Tile:", await page1.title());


    let context2: BrowserContext = await browser.newContext();
    console.log("Broswer lanched", context2);

    let page2: Page = await context2.newPage();
    console.log("Page Open");

    await page2.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    console.log("Tile:", await page2.title());



    //Cleanup - reverse order
    await page1.close();
    await page2.close();
    await context1.close();
    await context2.close();
    await browser.close();

}

run();
