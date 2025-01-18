import { test as base, expect } from '@playwright/test';
import crypto from 'crypto';
import { secretKey, ivHex } from "../utils/passwordencrypt";
import LoginPage from '../pages/pageobjects/loginpage';
import AddressPage from "../pages/pageobjects/addresspage";
import createJsonObjectFromFolder from '../utils/testdataloader'

import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const env = process.env.NODE_ENV || 'qa';  // Default to 'qa' if NODE_ENV is not set

const envPath = resolve(__dirname, '../../config/.env.' + env);
dotenv.config({ path: envPath });

const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey, 'hex'), Buffer.from(ivHex, 'hex'));
let decrypted = decipher.update(process.env.SECRET_KEY, 'hex', 'utf8');
decrypted += decipher.final('utf8');

const envVars = { ...process.env };

const test = base.extend({


    page: async ({ page }, use, testInfo) => {
        await page.goto(process.env.APP_URL);
        await use(page);
        if (testInfo.status == 'failed') {
            await test.info().attach('screenshot', {
                body: await page.screenshot(),
                contentType: 'image/png',
            });
        }
    },

    envConfigData: async ({ }, use) => {
        await use(envVars);
    },

    testData: async ({ }, use, testInfo) => {
        let tData = await createJsonObjectFromFolder('./src/data')
        await use(tData);
    },

    loginPageObject: async ({ page }, use) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.login(process.env.USER_ID, decrypted);
        await use(loginPageObject);
        await loginPageObject.logout();
    },

    addressPageObject: async ({ page }, use) => {
        const addressPageObject = new AddressPage(page);
        await use(addressPageObject);
    }

});

export { test, expect };
