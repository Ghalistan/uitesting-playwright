import { expect } from '@playwright/test';
import { Page } from 'playwright';
import { PageModel } from './PageModel';

export class MOPage extends PageModel {
    constructor(page: Page) {
        super(page, '/mouseover');
    }

    async clickLink() {
        await this.page.dblclick(`a[title="Click me"]`);
    }

    async isClickedTwice() {
        expect(await this.page.innerText(`span#clickCount`)).toBe('2');
    }
}
