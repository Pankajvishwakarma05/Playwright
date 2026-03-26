const {test} = require('@playwright/test');


test('Open Google and close browser', async ({ page }) => {

    // Open Google
    await page.goto('https://www.google.com');

    // Wait for 3 seconds (just to see it open)
    await page.waitForTimeout(3000);

    // Browser will automatically close after test ends
});