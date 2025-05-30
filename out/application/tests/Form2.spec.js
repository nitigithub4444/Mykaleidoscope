"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("playwright/test");
const page_manager_1 = require("../../page-manager");
let count = 0;
(0, test_1.default)("Verify error message when activities are less than two", async ({ page }) => {
    const pageManager = page_manager_1.PageManager.getPageManagerInstance(page);
    const activityForm = pageManager.getActivityForm();
    await page.goto("https://apply.mykaleidoscope.com/program/a0DTP00000H3PUy2AN/applicant/application/a0ETP00000981Ef2AI/page/e206520d-2374-4b89-84a6-6e55f33ff8e1");
    while (count <= 1) {
        await activityForm.addEntryClick();
        count++;
    }
    await activityForm.nextButtonClick();
    (0, test_1.expect)(page.locator('//p[contains(text(), "Please add at least 2 entries")])')).toBeVisible();
});
