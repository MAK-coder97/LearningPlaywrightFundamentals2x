import { test, expect } from "@playwright/test";

test("Working custom Drop Down", async ({ page }) => {

    /* await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator("#dropdown").click();
    await page.selectOption('#dropdown', "Option 2");
    await page.pause(); */
    //https://app.thetestingacademy.com/playwright/tables/dropdowns

    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');
    await page.getByTestId('lang-trigger').click();
    await page.getByRole('option', { name: 'JavaScript' }).click();


    await page.getByTestId('framework-trigger').click();
    await page.getByText("Next.js", { exact: true }).click();

    await page.getByTestId('experience-trigger').click();
    await page.getByText("Mid-level (4-6 years)", { exact: true }).click();
    await page.getByTestId('dropdown-save').click();
    await page.pause();


});
