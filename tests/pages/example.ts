import { test } from '@playwright/test';
import { LoginPage } from './loginpage.ts';

test('login using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user');
});