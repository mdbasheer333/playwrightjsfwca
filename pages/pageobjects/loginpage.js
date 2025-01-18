/**
 * @typedef {import('@playwright/test').Page} Page
 */

import LoginPageLocators from '../locators/loginpagelocators';


export default class LoginPage {

    /**
    * @param {Page} page
    */

    constructor(page) {
        this.page = page;
    }

    async login() {
        await this.page.locator(LoginPageLocators.MY_ACCOUNT_LINK).click();
        await this.page.locator(LoginPageLocators.EMAIL_INPUT).fill('mdbasheer333@gmail.com');
        await this.page.locator(LoginPageLocators.PASSWORD_INPUT).fill('mdbasheer333');
        await this.page.locator(LoginPageLocators.LOGIN_BUTTON).click();
    }

    async logout() {
        await this.page.waitForTimeout(3000);
        await this.page.locator(LoginPageLocators.LOGOUT_LINK).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator(LoginPageLocators.CONTINUE_BUTTON).click();
        await this.page.waitForTimeout(3000);
    }

}
