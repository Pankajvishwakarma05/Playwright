import { expect, test } from '@playwright/test';

test.only('Page Playwright Test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const pageTitle: string = await page.title();
    console.log(pageTitle);
    await expect(page).toHaveTitle(pageTitle);

    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('Learning@830$3mK2');
    await page.locator('#signInBtn').click();

    // const errorText = await page.locator("[style*='block']").textContent();
    // console.log(errorText);

    // if (errorText?.includes('Incorrect username/password')) {
    //     await page.locator('#username').fill('rahulshettyacademy');
    //     await page.locator("[type='password']").fill('Learning@830$3mK2');
    //     await page.locator('#signInBtn').click();
    // } else {
    //     console.log('Login Successful');
    // }

    await page.locator(".card-body a").nth(0).textContent();
    await page.locator(".card-body a").first().textContent();

});