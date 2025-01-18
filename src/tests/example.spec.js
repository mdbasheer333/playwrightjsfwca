
import { test, expect } from "../tests/baseTest";

/**
 * @typedef {import('../../pages/pageobjects/loginpage').default} LoginPage
 */


test('login and check the home page title', async ({ page, loginPageObject, envConfigData }) => {

        /** @type {LoginPage} */
        const loginPage = loginPageObject;       
        expect(await page.title()).toBe('My Accounts');

});
