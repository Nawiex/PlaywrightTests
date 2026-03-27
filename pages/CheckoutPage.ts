import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly zipCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly confirmationHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.zipCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.confirmationHeader = page.locator('.complete-header');
    }

    async fillInformation(fName: string, lName: string, zip: string) {
        await this.firstNameInput.fill(fName);
        await this.lastNameInput.fill(lName);
        await this.zipCodeInput.fill(zip);
    }

    async continueCheckout() {
        await this.page.click('[data-test="continue"]');
    }

    async finishCheckout() {
        await this.page.click('[data-test="finish"]');
    }

    async getConfirmationMessage() {
        return await this.confirmationHeader.innerText();
    }
}

