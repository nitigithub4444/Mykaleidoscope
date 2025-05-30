import test, { expect } from "playwright/test";
import { PageManager } from "../../page-manager";
import { UserDetails } from "../object-repository/user-details";
import { faker } from "@faker-js/faker";


const address = faker.internet.username();

test("Fill First Form", async({page})=>{


const pageManager:PageManager = PageManager.getPageManagerInstance(page);
const userDetails:UserDetails = pageManager.getUserDetails();

await page.goto("https://apply.mykaleidoscope.com/program/a0DTP00000H3PUy2AN/application/start");
await userDetails.inputAddress(address);
await userDetails.selectStateFromDropdown();
await userDetails.inputZipCode("12345");
await userDetails.selectCity("Blr");
await userDetails.selectCountryFromDropdown();
await page.locator('//button[@type="submit"]').click();
await expect(userDetails.secondStepPageTitle).toBeVisible();
})