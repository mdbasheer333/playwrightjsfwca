
import { test, expect } from "../tests/baseTest";

/**
 * @typedef {import('../../pages/pageobjects/loginpage').default} LoginPage
 */


test('get started link', async ({ page, loginPageObject }) => {

        /** @type {LoginPage} */
        const loginPage = loginPageObject;

        await loginPage.login();
        console.log(await page.title());
        await page.waitForTimeout(3000);
        await loginPage.logout();

});
