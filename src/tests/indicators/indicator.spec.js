
import { test, expect } from "../baseTest";

/**
 * @typedef {import('../../pages/pageobjects/loginpage').default} LoginPage
 */


test('get started link', async ({ page, loginPageObject, user_id, password }) => {

        /** @type {LoginPage} */
        const loginPage = loginPageObject;

        await loginPage.login(user_id, password);
        console.log(await page.title());
        await page.waitForTimeout(3000);
        await loginPage.logout();

});
