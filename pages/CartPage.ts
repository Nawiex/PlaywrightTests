import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly cartItems: Locator;
    readonly itemQuantity: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.cartItems = page.locator('.cart_item');
        this.itemQuantity = page.locator('.cart_quantity');
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    async isProductVisible(productName: string): Promise<boolean> {
        const product = this.page.locator('.inventory_item_name', { hasText: productName });
        return await product.isVisible();
    }

    async getProductQuantity(): Promise<string> {
        return await this.itemQuantity.first().innerText();
    }
}