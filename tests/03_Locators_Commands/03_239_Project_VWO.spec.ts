import { test, expect } from "@playwright/test";

test("Mak first Project", async ({ page }) => {
    await page.goto("https://app.vwo.com");

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
    let passwordFeild = page.locator('#login-password');
    let loginButton = page.locator('#js-login-btn');

    await userNameField.fill("admin@admin.com");
    await passwordFeild.fill("pass234");
    await loginButton.click();
    console.log("all action completed");

    //js-notification-box-msg

    let error_message = page.locator('js-notification-box-msg');
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

});