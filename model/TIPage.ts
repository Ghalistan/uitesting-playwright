import { expect, Page } from '@playwright/test';
import { PageModel } from './PageModel';

export class TIPage extends PageModel {
    private inputtedText: string;

    constructor(page: Page) {
        super(page, '/textinput');
    }

    async inputText(text: string) {
        await this.page.fill(`input[id="newButtonName"]`, text);
        this.inputtedText = text;
    }

    async clickBlueButton() {
        await this.page.click(`button[id="updatingButton"]`);
    }

    async isButtonValueChanged() {
        let button = await this.page.waitForSelector(
            `button[id="updatingButton"]`
        );
        expect(await button.innerText()).toBe(this.inputtedText);
    }
}
