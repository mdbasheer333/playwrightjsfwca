import { test as base, expect } from '@playwright/test';
import LoginPage from '../pages/pageobjects/loginpage';

const test = base.extend({
    
    page: async ({ page }, use) => {
        await page.goto('https://ecommerce-playground.lambdatest.io/');
        await use(page);
    },

    loginPageObject: async ({ page }, use) => {
        const loginPageObject = new LoginPage(page);
        await use(loginPageObject);
    }
});

export { test, expect };
