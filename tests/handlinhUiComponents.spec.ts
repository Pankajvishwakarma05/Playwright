import {expect, test} from '@playwright/test';


test('Handling the UI Components', async ({page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('Learning@830$3mK2');
    await page.locator('input[value="user"]').check()
    await page.locator('#okayBtn').click();
    await expect(page.locator('input[value="user"]')).toBeChecked();
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked()
    await expect(page.locator('[href*="documents-request"]')).toHaveAttribute("class", "blinkingText");
    // await page.locator('#signInBtn').click();
    await page.pause();
});
