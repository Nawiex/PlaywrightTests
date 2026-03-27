import { Before, After, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

setDefaultTimeout(30000);

let browser: Browser;

Before(async function () {
    browser = await chromium.launch({ headless: true }); 
    const context = await browser.newContext();
    this.page = await context.newPage();
});

After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const image = await this.page.screenshot();
        await this.attach(image, 'image/png');
    }
    await this.page.close();
    await browser.close();
});