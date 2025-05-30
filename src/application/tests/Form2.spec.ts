import test, { expect } from "playwright/test";
import { PageManager } from "../../page-manager";
import { faker } from "@faker-js/faker";
import { ActivityForm } from "../object-repository/activity-form";
import { UserDetails } from "../object-repository/user-details";

test("Verify error message when activities are less than two", async({page})=>{


const pageManager:PageManager = PageManager.getPageManagerInstance(page);
const activityForm:ActivityForm = pageManager.getActivityForm();
const userDetails = new UserDetails(page);


await userDetails.fillFirstForm("Blr", "Chd", 123);
// await page.goto("https://apply.mykaleidoscope.com/program/a0DTP00000H3PUy2AN/applicant/application/a0ETP00000981Ef2AI/page/e206520d-2374-4b89-84a6-6e55f33ff8e1");
// await activityForm.addEntryClick();
await activityForm.nextButtonClick();
await page.pause();
await expect(page.locator('//p[contains(text(), "Please add at least 2 entries")])')).toBeVisible();

})