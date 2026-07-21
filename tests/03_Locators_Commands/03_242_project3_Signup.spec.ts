import { test, expect } from '@playwright/test'

test('verify the sign up error', async ({ page }) => {

    await page.goto("https://vwo.com/free-trial/");
    //page-v1-step1-email
    await page.getByRole('textbox', { name: "email" }).fill("abcd");
    await page.getByRole('checkbox', { name: "gdpr_consent_checkbox" }).check();
    await page.getByRole('button', { name: "Create a Free Trial Account" }).click();

    let error_msg = await page.locator("xpath=//div[contains(@class,'invalid-reason')]").first().textContent();
    expect(error_msg).toContain("The email address you entered is incorrect.");





});
