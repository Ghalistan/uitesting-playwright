import { expect, Page } from '@playwright/test';
import { PageModel } from './PageModel';

export class ClickPage extends PageModel {
    constructor(page: Page) {
        super(page, '/click');
    }

    async clickBlueButton() {
        await this.page.click(`button[id="badButton"]`);
    }

    async isClickButtonSuccess() {
        await this.page.isVisible(`button[class*="btn-success"]`);
    }
}
