import { expect } from '@playwright/test';
import { Page } from 'playwright';
import { PageModel } from './PageModel';

export class SAPage extends PageModel {
    constructor(page: Page) {
        super(page, '/sampleapp');
    }

    async inputUsername(username: string) {
        await this.page.fill(`input[name="UserName"]`, username);
    }

    async inputPassword(pwd: string) {
        await this.page.fill(`input[name="Password"]`, 'pwd');
    }

    async clickLogin() {
        await this.page.click(`button#login`);
    }

    async isLoggedIn(username: string) {
        expect(await this.page.innerText(`label#loginstatus`)).toBe(
            `Welcome, ${username}!`
        );
    }
}
