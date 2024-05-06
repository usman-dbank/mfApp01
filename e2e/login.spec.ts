import { test, expect } from '@playwright/test';

test.skip('should navigate to login page', async ({ page }) => {
  await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle' });

  await expect(page).toHaveScreenshot('login.png');
});
