"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("playwright/test");
const page_manager_1 = require("../../page-manager");
const faker_1 = require("@faker-js/faker");
const address = faker_1.faker.internet.username();
(0, test_1.default)("Fill First Form", async ({ page }) => {
    const pageManager = page_manager_1.PageManager.getPageManagerInstance(page);
    const userDetails = pageManager.getUserDetails();
    await page.goto("https://apply.mykaleidoscope.com/program/a0DTP00000H3PUy2AN/application/start");
    await userDetails.inputAddress(address);
    await userDetails.selectStateFromDropdown();
    await userDetails.inputZipCode("12345");
    await userDetails.selectCity("Blr");
    await userDetails.selectCountryFromDropdown();
    await page.locator('//button[@type="submit"]').click();
    await (0, test_1.expect)(userDetails.secondStepPageTitle).toBeVisible();
});
