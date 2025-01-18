import { test as base, expect } from '@playwright/test';
import LoginPage from '../pages/pageobjects/loginpage';

const test = base.extend({
    page: async ({ page }, use) => {
        await page.goto('https://ecommerce-playground.lambdatest.io/');
        await use(page);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);        
        await use(loginPage);
    }
});

export { test, expect };
