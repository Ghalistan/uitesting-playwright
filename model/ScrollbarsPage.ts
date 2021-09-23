import { expect, Page } from '@playwright/test';
import { PageModel } from './PageModel';

export class ScrollbarsPage extends PageModel {
    constructor(page: Page) {
        super(page, '/scrollbars');
    }

    async clickBlueButton() {
        let hiddenBtn = await this.page.waitForSelector(`button#hidingButton`);
        expect(await hiddenBtn.isVisible()).toBeTruthy();
        await hiddenBtn.click({ force: true });
    }
}
