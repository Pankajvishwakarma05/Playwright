import { test } from '@playwright/test';

test('First Playwright Test', async ({ browser }) => {
    const context = await browser.newContext(); // ✅ FIX
    await context.close();
});