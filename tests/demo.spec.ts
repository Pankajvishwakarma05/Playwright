import { expect, test } from '@playwright/test';

test('Registration', async ({ page }) => {
    await page.goto('https://uiux.cfai.volox.com');
})