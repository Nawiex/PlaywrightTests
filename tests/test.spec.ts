import { test, expect } from '@playwright/test';

test('my first login test', async ({ page }) => {
  // 1. Go to the URL
  await page.goto('https://saucedemo.com');

  // 2. Interact with elements (Locators)
  // Best Practice: Use getByRole or getByPlaceholder to mimic how users see the page
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // 3. Assert the result
  // Playwright "auto-waits" for this element to appear before failing
  await expect(page.getByText('Products')).toBeVisible();
});