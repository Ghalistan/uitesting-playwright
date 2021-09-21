import { Page } from 'playwright';
import { AJAXPage } from './AJAXPage';
import { CAPage } from './CAPage';
import { ClickPage } from './ClickPage';
import { CSDPage } from './CSDPage';
import { DIDPage } from './DIDPage';
import { DTPage } from './DTPage';
import { HLPage } from './HLPage';
import { LDPage } from './LDPage';
import { PageModel } from './PageModel';
import { ScrollbarsPage } from './ScrollbarsPage';
import { TIPage } from './TIPage';

export class HomePage extends PageModel {
    constructor(page: Page) {
        super(page, '/');
    }

    async clickHomeHeader(): Promise<void> {
        await this.page.click(`a[href="/home"]`);
    }

    async clickDynamicID(): Promise<DIDPage> {
        await this.page.click(`a[href="/dynamicid"]`);
        return new DIDPage(this.page);
    }

    async clickClassAttribute(): Promise<CAPage> {
        await this.page.click(`a[href="/classattr"]`);
        return new CAPage(this.page);
    }

    async clickHiddenLayers(): Promise<HLPage> {
        await this.page.click(`a[href="/hiddenlayers"]`);
        return new HLPage(this.page);
    }

    async clickLoadDelays(): Promise<LDPage> {
        await this.page.click(`a[href="/loaddelay"]`);
        return new LDPage(this.page);
    }

    async clickAJAX(): Promise<AJAXPage> {
        await this.page.click(`a[href="/ajax"]`);
        return new AJAXPage(this.page);
    }

    async clickCSD(): Promise<CSDPage> {
        await this.page.click(`a[href="/clientdelay"]`);
        return new CSDPage(this.page);
    }

    async clickClick(): Promise<ClickPage> {
        await this.page.click(`a[href="/click"]`);
        return new ClickPage(this.page);
    }

    async clickTextInput(): Promise<TIPage> {
        await this.page.click(`a[href="/textinput"]`);
        await this.page.waitForLoadState();
        return new TIPage(this.page);
    }

    async clickScrollbars(): Promise<ScrollbarsPage> {
        await this.page.click(`a[href="/scrollbars"]`);
        return new ScrollbarsPage(this.page);
    }

    async clickDynamicTable(): Promise<DTPage> {
        await this.page.click(`a[href="/dynamictable"]`);
        return new DTPage(this.page);
    }
}
