import { Page } from 'playwright';
import { AJAXPage } from './AJAXPage';
import { CAPage } from './CAPage';
import { DIDPage } from './DIDPage';
import { HLPage } from './HLPage';
import { LDPage } from './LDPage';
import { PageModel } from './PageModel';

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
}
