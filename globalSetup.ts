import {Locator,Browser, chromium, Page, expect} from "@playwright/test"
import { PageManager } from "./src/page-manager";
import { SignUp } from "./src/userauth/object-repository/signup";
import { Login } from "./src/userauth/object-repository/login";
import { faker } from "@faker-js/faker";
import generator from 'generate-password';
import fs from 'fs';

export default async function globalSetup(){

    console.log("start")
    

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();


let email = faker.internet.email();
let firstName = faker.internet.username();
let lastName = faker.internet.username();
let phone = faker.phone.number();
let password = generator.generate({length:14,numbers:true,uppercase:true,lowercase:true,symbols:true,strict:true})




        const pageManager:PageManager = PageManager.getPageManagerInstance(page);
        const loginInstance:Login = pageManager.getLoginInstance();
        const signIn:SignUp = pageManager.getSignUp();
    
        await loginInstance.login();
        await signIn.inputEmailField(email);

        await Promise.all([
            page.waitForURL('**/signup'),
            signIn.nextButtonClick()
        ]);
        await expect(page).toHaveURL("https://apply.mykaleidoscope.com/signup");
        await signIn.inputFirstName(firstName);
        await signIn.inputLastName(lastName);
        await signIn.inputMobilePhone(phone);
        await signIn.inputPassword(password);
        await signIn.minimumAgeCheckbox();
        expect(signIn.getCheckboxLocator()).toBeChecked();
        await signIn.submitButton();
        await page.waitForURL("**/application/start", { timeout: 10000 });
        await page.waitForLoadState('load');
        await expect(page).toHaveURL("https://apply.mykaleidoscope.com/program/a0DTP00000H3PUy2AN/application/start");


        fs.mkdirSync('./playwright/.auth', { recursive: true });
        await context.storageState({ path: './playwright/.auth/auth.json' });
        // await page.context().storageState({path:"./playwright/.auth/auth.json"});
        console.log("close")
        await browser.close();
    
}