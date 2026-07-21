import { test, expect } from "@playwright/test";

test("Mak first Project", async ({ page }) => {

    await test.step("Open VWO login page", async () => {
        await page.goto("https://app.vwo.com");
    });

    /*  <input
     type="email"
     class="text-input W(100%)"
     name="username"
     vwo-html-translate-attr="placeholder"
     vwo-html-translate-placeholder="login:enterEmailID"
     id="login-username"
     data-qa="hocewoqisi"
     placeholder="Enter email ID"> */

    let userNameField = page.locator('#login-username');
    let passwordField = page.locator('#login-password');
    let loginButton = page.locator('#js-login-btn');

    await test.step("Enter username", async () => {
        await userNameField.fill("admin@admin.com");
    });

    await test.step("Enter password", async () => {
        await passwordField.fill("pass234");
    });

    await test.step("Click login button", async () => {
        await loginButton.click();
    });

    //js-notification-box-msg

    await test.step("Verify invalid credentials error message", async () => {
        let error_message = page.locator('#js-notification-box-msg');
        await expect(error_message).toContainText("Your email, password, IP address or location did not match");
    });

});
