const { test, expect } = require('@playwright/test');

test('Visible logo test', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  const logo = page.locator('#logo_homepage_link');
  await expect(logo).toBeVisible();
});