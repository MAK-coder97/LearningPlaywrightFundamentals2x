import { test, expect } from "@playwright/test";

test("task of 10th July", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    // btn-make-appointment
    //let userNameField = page.locator('#login-username');
    let makeAppointment = page.locator('xpath=//a[@id="btn-make-appointment"]');
    await makeAppointment.click();

    let userNameFeild = page.locator('xpath=//input[@id="txt-username"]');
    await userNameFeild.fill("john Doe");

    let passWord = page.locator('xpath=//input[@id="txt-password"]');
    await passWord.fill("ThisIsNotAPassword");

    let userLogin = page.locator('xpath=//a[@id="btn-login"]');
    await userLogin.click();

    page.on('dialog', async (dialog) => {
        const message = dialog.message();
        if (message.includes('The password you just used was found in a data breach')) {
            await dialog.dismiss();
        } else {
            await dialog.accept();
        }
    })

    let dropdownFacility = page.locator('xpath=//select[@id="combo_facility"]');
    await dropdownFacility.selectOption('Tokyo CURA Healthcare Center');

    let checkBox = page.locator('xpath=//input[@id="chk_hospotal_readmission"]');
    await expect(checkBox).not.toBeChecked();
    //await expect(checkBox).toBeChecked();

    // radio_program_medicare

    let optionButton = page.locator('xpath=//input[@id="radio_program_medicare"]');
    await expect(optionButton).toHaveValue("Medicare");

    //txt_visit_date

    //let visitDateField = page.locator('//input[@id="txt_visit_date"]');
    let dateselector = page.locator('xpath=//input[@id="txt_visit_date"]');
    await dateselector.fill("11/07/2026");

    ////textarea[@id="txt_comment"]

    let fillcomments = page.locator('xpath=//textarea[@id="txt_comment"]');
    await fillcomments.fill("this is my first appointment");

    let bookaAppointment = page.locator('xpath=//button[@id="btn-book-appointment"]');
    await bookaAppointment.click();
    await page.waitForTimeout(3000);

});