import { Page } from 'playwright';
import { PageModel } from './PageModel';

export class NBSPPage extends PageModel {
    constructor(page: Page) {
        super(page, '/nbsp');
    }

    async isButtonDetected() {
        await this.page.waitForSelector(`button:has-text("My Button")`);
    }
}
