import { expect } from '@playwright/test';
import { Page } from 'playwright';
import { PageModel } from './PageModel';

export class VisibilityPage extends PageModel {
    hideBtn: string;
    removedBtn: string;
    zeroWidthBtn: string;
    overlappedBtn: string;
    transparentBtn: string;
    invisibleBtn: string;
    notDisplayedBtn: string;
    offscreenBtn: string;

    constructor(page: Page) {
        super(page, '/visibility');
        this.hideBtn = `button#hideButton`;
        this.removedBtn = `button#removedButton`;
        this.zeroWidthBtn = `button#zeroWidthButton`;
        this.overlappedBtn = `button#overlappedButton`;
        this.transparentBtn = `button#transparentButton`;
        this.invisibleBtn = `button#invisibleButton`;
        this.notDisplayedBtn = `button#notdisplayedButton`;
        this.offscreenBtn = `button#offscreenButton`;
    }

    async clickHideBtn() {
        await this.page.click(this.hideBtn);
    }

    async isOtherButtonVisible() {
        expect(await this.page.isVisible(this.removedBtn)).toBeFalsy();
        expect(await this.page.isVisible(this.zeroWidthBtn)).toBeFalsy();
        expect(await this.page.isVisible(`div#hidingLayer`)).toBeTruthy();
        expect(
            await this.page.$eval(
                this.transparentBtn,
                (el) => el.getAttribute('style') == 'opacity: 0;'
            )
        ).toBeTruthy();
        expect(await this.page.isVisible(this.invisibleBtn)).toBeFalsy();
        expect(await this.page.isVisible(this.notDisplayedBtn)).toBeFalsy();
        expect(
            await this.page.$eval(
                this.offscreenBtn,
                (el) => el.getAttribute('class') == 'btn btn-info offscreen'
            )
        ).toBeTruthy();
    }
}
