import { test, expect } from "@playwright/test";

test("login Test", async ({ page }) => {
    //'\page automatically created and launched
    //Playwright already lauched a browser, created a conect , and opened this page

    await page.goto("https://app.vwo.com/login");
    await page.fill("#username", "admin");
    await page.fill("#password", "pass123");
    await page.click("#login-btn");

    await expect(page).toHaveURL("/dashboard");

});
