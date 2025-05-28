import test, { expect } from "playwright/test";
import { PageManager } from "../../page-manager";
import { Login } from "../object-repository/login";
import { sign, Sign } from "crypto";
import { SignUp } from "../object-repository/signup";
import { faker } from "@faker-js/faker";
import generator from 'generate-password';



let email = faker.internet.email();
let firstName = faker.internet.username();
let lastName = faker.internet.username();
let phone = faker.phone.number();
let password = generator.generate({length:14,numbers:true,uppercase:true,lowercase:true,symbols:true,strict:true})



test('Navigate To Login Page', async({page})=>{

const pageManager:PageManager = PageManager.getPageManagerInstance(page);
const loginInstance:Login = pageManager.getLoginInstance();

await loginInstance.login();
await expect(page).toHaveURL("https://apply.mykaleidoscope.com/login");

});

test('SignIn', async({page})=>{

    const pageManager:PageManager = PageManager.getPageManagerInstance(page);
    const loginInstance:Login = pageManager.getLoginInstance();
    const signIn:SignUp = pageManager.getSignUp();

    await loginInstance.login();
    await signIn.inputEmailField(email);
    await signIn.nextButtonClick();
    await expect(page).toHaveURL("https://apply.mykaleidoscope.com/signup");
    await signIn.inputFirstName(firstName);
    await signIn.inputLastName(lastName);
    await signIn.inputMobilePhone(phone);
    await signIn.inputPassword(password);
    await signIn.minimumAgeCheckbox();
    expect(signIn.getCheckboxLocator()).toBeChecked();
    await signIn.submitButton();
    await page.locator
    expect(page).toHaveURL("https://apply.mykaleidoscope.com/program/a0DTP00000H3PUy2AN/application/start");

})
