import { Page } from 'playwright';
import { PageModel } from './PageModel';

export class HLPage extends PageModel {
    constructor(page: Page) {
        super(page, '/hiddenlayers');
    }

    async clickAButton() {
        await this.page.click(`button >> nth=-1`);
    }
}
