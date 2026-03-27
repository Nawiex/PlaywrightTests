import { Given, When, Then } from '@cucumber/cucumber';
import { ProductsPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

When('El usuario agrega el producto {string} al carrito', async function (productName) {
    const productsPage = new ProductsPage(this.page);
    await productsPage.addToCart(productName);
});

Then('El icono del carrito deberia mostrar {string} producto añadido', async function (cantidad) {
    const productsPage = new ProductsPage(this.page);
    const count = await productsPage.getCartBadgeCount();
    if (count !== cantidad) {
        throw new Error(`Se esperaba ${cantidad} en el carrito, pero se encontró ${count}`);
    }
});

Given('El usuario ha agregado {string} al carrito', async function (productName) {
    const productsPage = new ProductsPage(this.page);
    await productsPage.addToCart(productName);
});

When('El usuario abre el carrito de compras', async function () {
    const productsPage = new ProductsPage(this.page);
    await productsPage.goToCart();
});

Then('El producto {string} deberia estar presente en la lista', async function (productName) {
    const cartPage = new CartPage(this.page); 
    const isVisible = await cartPage.isProductVisible(productName);
    if (!isVisible) throw new Error(`Producto ${productName} no encontrado en el carrito`);
});

Then('La cantidad del producto deberia ser {string}', async function (cantidad) {
    const cartPage = new CartPage(this.page);
    const actualQty = await cartPage.getProductQuantity();
    if (actualQty !== cantidad) throw new Error(`Cantidad incorrecta: ${actualQty}`);
});