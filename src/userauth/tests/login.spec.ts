import test, { expect } from "playwright/test";


test('navigate to SignIn', async({page})=>{


  await page.goto("https://apply.mykaleidoscope.com/program/sdet-test-scholarship");
  await page.getByRole('button', {name:'Log In to Apply'} ).isVisible();
  await page.getByRole('button', {name:'Log In to Apply'} ).click();
  await expect(page).toHaveURL("https://apply.mykaleidoscope.com/login");
  
});
