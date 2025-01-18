import { test as base, expect } from '@playwright/test';
import crypto from 'crypto';
import { secretKey, ivHex } from "../utils/passwordencrypt";
import LoginPage from '../pages/pageobjects/loginpage';

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

const test = base.extend({

    page: async ({ page }, use) => {
        await page.goto(process.env.APP_URL);
        await use(page);
    },

    loginPageObject: async ({ page }, use) => {
        const loginPageObject = new LoginPage(page);
        await use(loginPageObject);
    },

    user_id: process.env.USER_ID,
    password: decrypted

});

test.beforeEach(async ({ loginPageObject, user_id, password }) => {
    /** @type {LoginPage} */
    const loginPage = loginPageObject;
    await loginPage.login(user_id, password);
});

test.afterEach(async ({ loginPageObject }) => {
    /** @type {LoginPage} */
    const loginPage = loginPageObject;
    await loginPage.logout();
});

export { test, expect };
