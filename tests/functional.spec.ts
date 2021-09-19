import test from '@playwright/test';
import { AJAXPage } from '../model/AJAXPage';
import { CAPage } from '../model/CAPage';
import { DIDPage } from '../model/DIDPage';
import { HLPage } from '../model/HLPage';
import { HomePage } from '../model/HomePage';
import { LDPage } from '../model/LDPage';

test.describe('Playwright UI Functional Test', () => {
    let homePage: HomePage;

    test.beforeAll(async ({ browser }) => {
        let page = await browser.newPage();
        homePage = new HomePage(page);
    });

    test.beforeEach(async () => {
        homePage.visitPage();
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
});
