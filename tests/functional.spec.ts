import test from '@playwright/test';
import { Browser, Page } from 'playwright';
import { AJAXPage } from '../model/AJAXPage';
import { CAPage } from '../model/CAPage';
import { ClickPage } from '../model/ClickPage';
import { CSDPage } from '../model/CSDPage';
import { DIDPage } from '../model/DIDPage';
import { DTPage } from '../model/DTPage';
import { HLPage } from '../model/HLPage';
import { HomePage } from '../model/HomePage';
import { LDPage } from '../model/LDPage';
import { MOPage } from '../model/MOPage';
import { NBSPPage } from '../model/NBSPPage';
import { PBPage } from '../model/PBPage';
import { SAPage } from '../model/SAPage';
import { ScrollbarsPage } from '../model/ScrollbarsPage';
import { TIPage } from '../model/TIPage';
import { VisibilityPage } from '../model/VisibilityPage';
import { VTPage } from '../model/VTPage';

test.describe('Playwright UI Functional Test', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.visitPage();
    });

    test.describe('Dynamic ID', async () => {
        let dynamicIDPage: DIDPage;

        test.beforeEach(async () => {
            dynamicIDPage = await homePage.clickDynamicID();
        });

        test('Click A Button With Random ID', async () => {
            await dynamicIDPage.clickBlueButton();
        });
    });

    test.describe('Class Attribute', () => {
        let classAttrPage: CAPage;

        test.beforeEach(async () => {
            classAttrPage = await homePage.clickClassAttribute();
        });

        test('Click Button With "btn-primary" class', async () => {
            await classAttrPage.clickBlueButton();
        });
    });

    test.describe('Hidden Layers', () => {
        let hiddenLayersPage: HLPage;

        test.beforeEach(async () => {
            hiddenLayersPage = await homePage.clickHiddenLayers();
        });

        test('Click A Button Twice', async () => {
            await hiddenLayersPage.clickAButton();
            await hiddenLayersPage.clickAButton();
        });
    });

    test.describe('Load Delays', () => {
        let loadDelayPage: LDPage;

        test.beforeEach(async () => {
            loadDelayPage = await homePage.clickLoadDelays();
        });

        test('Click A Blue Button', async () => {
            await loadDelayPage.clickAButton();
        });
    });

    test.describe('AJAX Page', () => {
        let ajaxPage: AJAXPage;

        test.beforeEach(async () => {
            ajaxPage = await homePage.clickAJAX();
        });

        test('Click Button With AJAX Request', async () => {
            await ajaxPage.clickAJAXBtn();
            await ajaxPage.waitDataLoaded();
        });
    });

    test.describe('Client Side Delay Page', () => {
        let csdPage: CSDPage;

        test.beforeEach(async () => {
            csdPage = await homePage.clickCSD();
        });

        test('Click Button Triggering Client Side Logic', async () => {
            await csdPage.clickBlueButton();
            await csdPage.waitDataLoaded();
        });
    });

    test.describe('Click Page', () => {
        let clickPage: ClickPage;

        test.beforeEach(async () => {
            clickPage = await homePage.clickClick();
        });

        test('Click Blue Button To Change Its Color', async () => {
            await clickPage.clickBlueButton();
            await clickPage.isClickButtonSuccess();
        });
    });

    test.describe('Text Input', () => {
        let tiPage: TIPage;

        test.beforeEach(async () => {
            tiPage = await homePage.clickTextInput();
        });

        test('Input Changes Button Text', async () => {
            let value = 'newName';
            await tiPage.inputText(value);
            await tiPage.clickBlueButton();
            await tiPage.isButtonValueChanged();
        });
    });

    test.describe('Scrollbars', () => {
        let scrollbarsPage: ScrollbarsPage;

        test.beforeEach(async () => {
            scrollbarsPage = await homePage.clickScrollbars();
        });

        test('Click Hiding Button', async () => {
            scrollbarsPage.clickBlueButton();
        });
    });

    test.describe('Dynamic Table', () => {
        let dtPage: DTPage;

        test.beforeEach(async () => {
            dtPage = await homePage.clickDynamicTable();
        });

        test('Get Chrome CPU Value', async () => {
            await dtPage.getChromeCPU();
            await dtPage.isChromeCPUShown();
        });
    });

    test.describe('Verify Text', () => {
        let vtPage: VTPage;

        test.beforeEach(async () => {
            vtPage = await homePage.clickVerifyText();
        });

        test('Find Welcome Username', async () => {
            await vtPage.findText('Welcome UserName!');
        });
    });

    test.describe('Progress Bar', () => {
        let pbPage: PBPage;

        test.beforeEach(async () => {
            pbPage = await homePage.clickProgressBar();
        });

        test('Stop Progress Bar At 75%', async () => {
            await pbPage.clickStart();
            await pbPage.waitFor75();
            await pbPage.clickStop();
        });
    });

    test.describe('Visibility Page', () => {
        let visibilityPage: VisibilityPage;

        test.beforeEach(async () => {
            visibilityPage = await homePage.clickVisibility();
        });

        test('Check Other Button Visibility', async () => {
            await visibilityPage.clickHideBtn();
            await visibilityPage.isOtherButtonVisible();
        });
    });

    test.describe('Sample App', () => {
        let saPage: SAPage;
        let username = 'ghalistan';

        test.beforeEach(async () => {
            saPage = await homePage.clickSampleApp();
        });

        test(`Successfully Login as ${username}`, async () => {
            await saPage.inputUsername(username);
            await saPage.inputPassword('pwd');
            await saPage.clickLogin();
            await saPage.isLoggedIn(username);
        });
    });

    test.describe('Mouse Over', () => {
        let moPage: MOPage;

        test.beforeEach(async () => {
            moPage = await homePage.clickMouseOver();
        });

        test('Click Link Twice', async () => {
            await moPage.clickLink();
            await moPage.isClickedTwice();
        });
    });

    test.describe('NBSP Page', () => {
        let nbspPage: NBSPPage;

        test.beforeEach(async () => {
            nbspPage = await homePage.clickNBSP();
        });

        test('Detect Button With NBSP', async () => {
            await nbspPage.isButtonDetected();
        });
    });
});
