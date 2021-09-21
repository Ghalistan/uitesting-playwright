import { expect, Page } from '@playwright/test';
import { PageModel } from './PageModel';

export class DTPage extends PageModel {
    ChromeCPU: string;

    constructor(page: Page) {
        super(page, '/dynamictable');
    }

    async getChromeCPU() {
        let columnheader = await this.page.$$(`span[role="columnheader"]`);
        for (let x = 0; x < columnheader.length; x++) {
            if ((await columnheader[x].textContent()) == 'CPU') {
                let chromeData = await this.page.$(
                    `xpath=//span[contains(text(), "Chrome")]/../*[${x + 1}]`
                );
                this.ChromeCPU = await chromeData.textContent();
            }
        }
    }

    async isChromeCPUShown() {
        let par = await this.page.$(`p[class="bg-warning"]`);
        expect(await par.textContent()).toBe(`Chrome CPU: ${this.ChromeCPU}`);
    }
}
