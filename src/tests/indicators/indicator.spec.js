
import { test, expect } from "../baseTest";

/**
 * @typedef {import('../../pages/pageobjects/loginpage').default} LoginPage
 */


test('get started link1', async ({ page, loginPageObject}) => {

        /** @type {LoginPage} */
        const loginPage = loginPageObject;

        console.log(await page.title());
        await page.waitForTimeout(3000);

});
