import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test'; // Opcional para validaciones más limpias

let loginPage: LoginPage;

Given('El usuario navega a la pagina de inicio de sesion', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.goto('https://www.saucedemo.com/');
});

When('El usuario ingresa el nombre de usuario {string} y la contraseña {string}', async function (usuario, password) {
    await loginPage.login(usuario, password); 
});


When('Hace clic en el boton de login', async function () {
    await loginPage.clickLogin(); 
});

Then('El usuario deberia ser redirigido a la pagina de productos', async function () {
    const url = this.page.url();
    if (!url.includes('inventory.html')) {
        throw new Error(`Redirección fallida. URL actual: ${url}`);
    }
});

Then('Deberia visualizarse el mensaje de error {string}', async function (mensajeEsperado) {
    const mensajeReal = await loginPage.getErrorMessage();
    if (mensajeReal !== mensajeEsperado) {
        throw new Error(`Se esperaba "${mensajeEsperado}" pero se obtuvo "${mensajeReal}"`);
    }
});