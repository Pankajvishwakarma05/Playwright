import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Registration', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/auth/login');

    const fName = faker.person.firstName();
    const lName = faker.person.lastName();
    const pEmail = faker.internet.email();
    const phoneNumber = faker.string.numeric(10);
    const password = faker.internet.password();

    await page.locator('p.login-wrapper-footer-text').click();
    await page.locator('#firstName').fill(fName);
    await page.locator('#lastName').fill(lName);
    await page.locator('#userEmail').fill(pEmail);
    await page.locator('#userMobile').fill(phoneNumber);
    await page.locator('input[value="Male"]').click();
    await page.locator('#userPassword').fill(password);
    await page.locator('#confirmPassword').fill(password);
    await page.locator('input[type="checkbox"]').check();
    await page.locator('#login').click();

    await expect(page.locator('button.btn.btn-primary')).toBeVisible();
    await page.locator('button.btn.btn-primary').click();

    await expect(page.locator('#userEmail')).toBeVisible();
    await page.locator('#userEmail').fill(pEmail);
    await page.locator('#userPassword').fill(password);
    await page.locator('#login').click();

    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
    await page.waitForLoadState('networkidle');

    const allProductTitles = await page.locator('.card-body b').allTextContents();
    console.log(allProductTitles);
});