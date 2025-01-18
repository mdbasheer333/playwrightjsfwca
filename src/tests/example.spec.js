
import { test, expect } from "../tests/baseTest";

/**
 * @typedef {import('../../pages/pageobjects/loginpage').default} LoginPage
 */


test('get started link2', async ({ page, loginPageObject, user_id, password }) => {

        /** @type {LoginPage} */
        const loginPage = loginPageObject;
        
        console.log(await page.title());
        await page.waitForTimeout(3000);

});
