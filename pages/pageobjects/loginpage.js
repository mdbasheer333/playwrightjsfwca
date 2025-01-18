/**
 * @typedef {import('@playwright/test').Page} Page
 */

export default class LoginPage {

     /**
     * @param {Page} page
     */

    constructor(page) {
        this.page = page;
    }

    async login() {
        await this.page.locator(`//a[contains(.,'My account') and @role]`).click();
        await this.page.locator(`[name=email]`).fill('mdbasheer333@gmail.com');
        await this.page.locator(`[name=password]`).fill('mdbasheer333');
        await this.page.locator(`[Value=Login]`).click();        
    }

    async logout() {
        await this.page.waitForTimeout(3000);
        await this.page.locator(`//a[contains(.,'Logout') and @class='list-group-item']`).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator('a >> text=Continue').click();
        await this.page.waitForTimeout(3000);
    }

}