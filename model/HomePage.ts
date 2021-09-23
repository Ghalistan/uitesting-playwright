import { Page } from 'playwright';
import { AJAXPage } from './AJAXPage';
import { CAPage } from './CAPage';
import { ClickPage } from './ClickPage';
import { CSDPage } from './CSDPage';
import { DIDPage } from './DIDPage';
import { DTPage } from './DTPage';
import { HLPage } from './HLPage';
import { LDPage } from './LDPage';
import { MOPage } from './MOPage';
import { NBSPPage } from './NBSPPage';
import { PageModel } from './PageModel';
import { PBPage } from './PBPage';
import { SAPage } from './SAPage';
import { ScrollbarsPage } from './ScrollbarsPage';
import { TIPage } from './TIPage';
import { VisibilityPage } from './VisibilityPage';
import { VTPage } from './VTPage';

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
        await this.page.waitForLoadState();
        return new ScrollbarsPage(this.page);
    }

    async clickDynamicTable(): Promise<DTPage> {
        await this.page.click(`a[href="/dynamictable"]`);
        return new DTPage(this.page);
    }

    async clickVerifyText(): Promise<VTPage> {
        await this.page.click(`a[href="/verifytext"]`);
        return new VTPage(this.page);
    }

    async clickProgressBar(): Promise<PBPage> {
        await this.page.click(`a[href="/progressbar"]`);
        return new PBPage(this.page);
    }

    async clickVisibility(): Promise<VisibilityPage> {
        await this.page.click(`a[href="/visibility"]`);
        await this.page.waitForLoadState();
        return new VisibilityPage(this.page);
    }

    async clickSampleApp(): Promise<SAPage> {
        await this.page.click(`a[href="/sampleapp"]`);
        await this.page.waitForLoadState();
        return new SAPage(this.page);
    }

    async clickMouseOver(): Promise<MOPage> {
        await this.page.click(`a[href="/mouseover"]`);
        await this.page.waitForLoadState();
        return new MOPage(this.page);
    }

    async clickNBSP(): Promise<NBSPPage> {
        await this.page.click(`a[href="/nbsp"]`);
        await this.page.waitForLoadState();
        return new NBSPPage(this.page);
    }
}
