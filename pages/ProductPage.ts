import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly cartBadge: Locator;
    readonly cartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartButton = page.locator('.shopping_cart_link');
    }

    async addToCart(productName: string) {
        // Buscamos el botón "Add to cart" basado en el nombre del producto
        const productKey = productName.toLowerCase().replace(/ /g, '-');
        await this.page.locator(`[data-test="add-to-cart-${productKey}"]`).click();
    }

    async getCartBadgeCount() {
        return await this.cartBadge.textContent();
    }

    async goToCart() {
        await this.cartButton.click();
    }

    async isCartBadgeVisible() {
        return await this.page.locator('.shopping_cart_badge').isVisible();
    }
}