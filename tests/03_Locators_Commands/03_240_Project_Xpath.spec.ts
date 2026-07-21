import { test, expect } from "@playwright/test";

test("task of 10th July", async ({ page }) => {

    page.on('dialog', async (dialog) => {
        const message = dialog.message();
        if (message.includes('The password you just used was found in a data breach')) {
            await dialog.dismiss();
        } else {
            await dialog.accept();
        }
    })

    await test.step("Open CURA Healthcare home page", async () => {
        await page.goto("https://katalon-demo-cura.herokuapp.com/");
    });

    // btn-make-appointment
    //let userNameField = page.locator('#login-username');
    await test.step("Click Make Appointment", async () => {
        let makeAppointment = page.locator('xpath=//a[@id="btn-make-appointment"]');
        await makeAppointment.click();
    });

    await test.step("Enter username", async () => {
        let userNameFeild = page.locator('xpath=//input[@id="txt-username"]');
        await userNameFeild.fill("John Doe");
    });

    await test.step("Enter password", async () => {
        let passWord = page.locator('xpath=//input[@id="txt-password"]');
        await passWord.fill("ThisIsNotAPassword");
    });

    await test.step("Click login", async () => {
        let userLogin = page.locator('xpath=//button[@id="btn-login"]');
        await userLogin.click();
    });

    await test.step("Select facility - Tokyo CURA Healthcare Center", async () => {
        let dropdownFacility = page.locator('xpath=//select[@id="combo_facility"]');
        await dropdownFacility.selectOption('Tokyo CURA Healthcare Center');
    });

    await test.step("Verify readmission checkbox is unchecked", async () => {
        let checkBox = page.locator('xpath=//input[@id="chk_hospotal_readmission"]');
        await expect(checkBox).not.toBeChecked();
        //await expect(checkBox).toBeChecked();
    });

    // radio_program_medicare

    await test.step("Verify Medicare radio button value", async () => {
        let optionButton = page.locator('xpath=//input[@id="radio_program_medicare"]');
        await expect(optionButton).toHaveValue("Medicare");
    });

    //txt_visit_date

    await test.step("Fill visit date", async () => {
        //let visitDateField = page.locator('//input[@id="txt_visit_date"]');
        let dateselector = page.locator('xpath=//input[@id="txt_visit_date"]');
        await dateselector.fill("11/07/2026");
    });

    ////textarea[@id="txt_comment"]

    await test.step("Fill comment", async () => {
        let fillcomments = page.locator('xpath=//textarea[@id="txt_comment"]');
        await fillcomments.fill("this is my first appointment");
    });

    await test.step("Book appointment", async () => {
        let bookaAppointment = page.locator('xpath=//button[@id="btn-book-appointment"]');
        await bookaAppointment.click();
        await page.waitForTimeout(3000);
    });

});
