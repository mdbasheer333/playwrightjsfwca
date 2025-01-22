
import { test, expect } from "../baseTest";

/**
 * @typedef {import('../../pages/pageobjects/loginpage').default} LoginPage
 * @typedef {import('../../pages/pageobjects/addresspage').default} AddressPage
 */

test('add address test',{tag:['@sanity']}, async ({loginPageObject, addressPageObject, testData, testCsvData}) => {

        /** @type {LoginPage} */
        const loginPage = loginPageObject;

        /** @type {AddressPage} */
        const addreessPage = addressPageObject;
        await addreessPage.addTheAddress(testData["input2"]);
      

});
