import {expect, test} from '@playwright/test';

test.only('Page Playwright Test', async ({page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const pageTitle = await page.title()
    console.log(pageTitle)
    await expect(page).toHaveTitle(pageTitle)
});