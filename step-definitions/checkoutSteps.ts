import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

Given('El usuario ha iniciado sesion con {string} y {string}', async function (user, pass) {
    const loginPage = new LoginPage(this.page);
    await loginPage.goto('https://www.saucedemo.com/');
    await loginPage.login(user, pass);
    await loginPage.clickLogin();
});

Given('Tiene los productos {string} y {string} en el carrito', async function (p1, p2) {
    const productsPage = new ProductsPage(this.page);
    await productsPage.addToCart(p1);
    await productsPage.addToCart(p2);
});

Given('El usuario se encuentra en la pantalla del carrito', async function () {
    const productsPage = new ProductsPage(this.page);
    await productsPage.goToCart();
});

When('Hace clic en el boton de Checkout', async function () {
    const cartPage = new CartPage(this.page);
    await cartPage.proceedToCheckout();
});

When('Completa el formulario con los datos: {string}, {string} y {string}', async function (nombre, apellido, zip) {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.fillInformation(nombre, apellido, zip);
});

When('Hace clic en el boton de Continuar', async function () {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.continueCheckout();
});

When('Revisa el resumen y hace clic en el boton de Finalizar', async function () {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.finishCheckout();
});

Then('El sistema deberia mostrar la confirmacion {string}', async function (mensajeEsperado) {
    const checkoutPage = new CheckoutPage(this.page);
    const mensajeReal = await checkoutPage.getConfirmationMessage();
    if (mensajeReal !== mensajeEsperado) {
        throw new Error(`Se esperaba "${mensajeEsperado}" pero se leyó "${mensajeReal}"`);
    }
});

Then('El carrito deberia quedar vacio', async function () {
    const productsPage = new ProductsPage(this.page);
    const isCartEmpty = await productsPage.isCartBadgeVisible();
    
    if (isCartEmpty) {
        throw new Error('El carrito no está vacío, el badge de cantidad sigue siendo visible.');
    }
});