import { Page } from 'playwright';
import { PageModel } from './PageModel';

export class VTPage extends PageModel {
    constructor(page: Page) {
        super(page, '/verifytext');
    }

    async findText(text: string) {
        await this.page.waitForSelector(
            `xpath=//span[normalize-space(.)='${text}']`
        );
    }
}
