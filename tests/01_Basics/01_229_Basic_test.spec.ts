import { test, expect } from "@playwright/test";

test("Mak first playwrigth", async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");

});