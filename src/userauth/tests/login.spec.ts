import test, { expect } from "playwright/test";
import { PageManager } from "../../page-manager";
import { Login } from "../object-repository/login";


test('navigate to SignIn', async({page})=>{

const pageManager:PageManager = PageManager.getPageManagerInstance(page);
const loginInstance:Login = pageManager.getLoginInstance();

loginInstance.login();
expect()
await page.goto("https://apply.mykaleidoscope.com/program/sdet-test-scholarship");

await expect(page).toHaveURL("https://apply.mykaleidoscope.com/login");
  
});
