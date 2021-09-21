import { expect, Page } from '@playwright/test';
import { PageModel } from './PageModel';

export class CSDPage extends PageModel {
    constructor(page: Page) {
        super(page, '/clentdelay');
    }

    async clickBlueButton() {
        await this.page.click(`button[id="ajaxButton"]`);
    }

    async waitDataLoaded() {
        let data = 'Data calculated on the client side.';

        let content = await this.page.waitForSelector(
            `div[id="content"]:has-text("${data}")`
        );
        expect(await content.innerText()).toBe(data);
    }
}
