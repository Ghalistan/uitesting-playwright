import type { Page, Response } from 'playwright';

export class PageModel {
    readonly page: Page;
    readonly pageURL: string;

    constructor(page: Page, url: string) {
        this.page = page;
        this.pageURL = url;
    }

    async visitPage(): Promise<Response> {
        return this.page.goto(this.pageURL);
    }

    async pause(): Promise<void> {
        return this.page.pause();
    }
}
