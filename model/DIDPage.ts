import { Page } from 'playwright';
import { PageModel } from './PageModel';

export class DIDPage extends PageModel {
    constructor(page: Page) {
        super(page, '/dynamicid');
    }

    async clickBlueButton() {
        await this.page.click(`button[class="btn btn-primary"]`);
    }
}
