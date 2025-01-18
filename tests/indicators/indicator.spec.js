
import { test, expect } from "../baseTest";

/**
 * @typedef {import('../../pages/pageobjects/loginpage').default} LoginPage
 */

test('get started link', async ({ page, loginPage }) => {


        
        await loginPage.login();
        console.log(await page.title());
        await page.waitForTimeout(3000);
        await loginPage.logout();        

});
