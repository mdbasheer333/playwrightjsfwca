import AddressPageLocators from '../locators/addresspagelocators';
import BasePage from './basepage';


export default class AddressPage extends BasePage {

    constructor(page) {
        super(page);
    }

    async addTheAddress() {
        await this.page.locator(AddressPageLocators.EDIT_ADDR_BOOK_LINK).click();
        await this.page.locator(AddressPageLocators.NEW_ADDR_BUTTON).click();
        await this.page.locator(AddressPageLocators.FNAME_INPUT).fill('basheer');
        await this.page.locator(AddressPageLocators.LNAME_INPUT).fill('mohammad');
        await this.page.locator(AddressPageLocators.COMPANY_INPUT).fill('dummy pvt ltd');
        await this.page.locator(AddressPageLocators.ADDR1_INPUT).fill('srt nagar');
        await this.page.locator(AddressPageLocators.ADDR2_INPUT).fill('borabands');
        await this.page.locator(AddressPageLocators.CITY_INPUT).fill('hyd');
        await this.page.locator(AddressPageLocators.POSTAL_CODE_INPUT).fill('12345');
        await this.page.locator(AddressPageLocators.COUNTRY_DRPDOWN).waitFor({timeout:5000});
        await this.page.locator(AddressPageLocators.COUNTRY_DRPDOWN).selectOption({ label: 'India' });
        await this.page.locator(AddressPageLocators.COUNTRY_DRPDOWN).waitFor({timeout:5000});
        await this.page.locator(AddressPageLocators.ZONE_DRPDOWN).selectOption({ label: 'Telangana' });
        await this.page.locator(AddressPageLocators.CONTINUE_BUTTON).click();
    }

}
