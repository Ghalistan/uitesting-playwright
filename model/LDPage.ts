import { Page } from 'playwright';
import { PageModel } from './PageModel';

export class LDPage extends PageModel {
    constructor(page: Page) {
        super(page, '/loaddelay');
    }

    async clickAButton() {
        await this.page.click(`button[class*="btn-primary"]`);
    }
}
