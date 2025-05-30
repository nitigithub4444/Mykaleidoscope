import path from "path";
import test, { expect } from "playwright/test";

test('upload file', async({page})=>{

    const filePath = path.resolve('playwright/.auth/auth.json')

    await page.goto("https://practice.expandtesting.com/upload");

    await page.setInputFiles("//input[@id='fileInput']",filePath);
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForLoadState("load")
    expect(page.locator('//h1[normalize-space()="File Uploaded!"]')).toBeVisible();
})