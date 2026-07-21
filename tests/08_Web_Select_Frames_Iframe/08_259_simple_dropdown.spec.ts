import { test, expect } from "@playwright/test";

test("Working Drop Down", async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator("#dropdown").click();
    await page.selectOption('#dropdown', "Option 2");
    await page.pause();
});
