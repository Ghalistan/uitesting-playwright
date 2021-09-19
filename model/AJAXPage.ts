import { expect } from '@playwright/test';
import { Page } from 'playwright';
import { PageModel } from './PageModel';

export class AJAXPage extends PageModel {
    constructor(page: Page) {
        super(page, '/ajax');
    }

    async clickAJAXBtn() {
        await this.page.click(`button[id="ajaxButton"]`);
    }

    async waitDataLoaded() {
        let content = await this.page.waitForSelector(`div[id="content"]`);
        let innerText = await content.innerText();
        expect(innerText).toBe('Data loaded with AJAX get request.');
    }
}
