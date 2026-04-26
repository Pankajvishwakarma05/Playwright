import { expect, test } from '@playwright/test';

test('Handle Child windows', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const documentLink = page.locator('[href*="documents-request"]');

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click(),
    ]);

    await newPage.waitForLoadState();

    const text = await newPage.locator('.red').textContent();

    const arrayText = text!.split('@');
    const domain = arrayText[1].split(' ')[0];

    console.log(domain);

    await page.locator('#username').fill(domain);

    console.log(await page.locator('#username').inputValue());

    await page.pause();
});