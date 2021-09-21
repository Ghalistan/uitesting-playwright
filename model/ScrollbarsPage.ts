import { Page } from '@playwright/test';
import { PageModel } from './PageModel';

export class ScrollbarsPage extends PageModel {
    constructor(page: Page) {
        super(page, '/scrollbars');
    }

    async clickBlueButton() {
        await this.page.click(`button[id="hidingButton"]`);
    }
}
