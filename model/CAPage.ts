import { expect } from '@playwright/test';
import { Page } from 'playwright';
import { PageModel } from './PageModel';

export class CAPage extends PageModel {
    constructor(page: Page) {
        super(page, '/classattr');
    }

    async clickBlueButton() {
        this.page.on('dialog', (dialog) => {
            expect(dialog.message()).toBe('Primary button pressed');
            dialog.accept();
        });
        await this.page.click(`button[class*="btn-primary"]`);
    }
}
