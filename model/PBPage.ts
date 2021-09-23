import { Page } from 'playwright';
import { PageModel } from './PageModel';

export class PBPage extends PageModel {
    constructor(page: Page) {
        super(page, '/progressbar');
    }

    async clickStart() {
        await this.page.click(`button#startButton`);
    }

    async clickStop() {
        await this.page.click(`button#stopButton`);
    }

    async waitFor75() {
        await this.page.waitForSelector(`div[aria-valuenow="75"]`, {
            timeout: 60 * 1000,
        });
    }
}
