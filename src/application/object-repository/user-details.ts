import { tr } from "@faker-js/faker";
import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class UserDetails{

    readonly page:Page;
    readonly address:Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipCode: Locator;
    readonly country: Locator;
    readonly selectValueFromDropdown: Locator;
    readonly secondStepPageTitle: Locator;



    constructor(page:Page){

        this.address = page.getByPlaceholder("Enter your street address");
        this.state = page.getByPlaceholder('Enter your state')
        this.city = page.getByPlaceholder('Enter your city');
        this.zipCode = page.getByPlaceholder("Enter your zip code");
        this.country = page.getByPlaceholder('Enter your country');
        this.page = page;
        this.secondStepPageTitle = page.locator('//h2[normalize-space()="Extracurricular Activities"]')

    }

    async inputAddress(address:string){

       await this.address.fill(address);
    }

    async selectStateFromDropdown(){

        await this.state.click({force:true});
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }

    async selectCity(city:string)
    {
        await this.city.click();
        await this.city.fill(city);
    }

    async inputZipCode(zipCode:string){

        await this.zipCode.fill(zipCode);
     }


    async selectCountryFromDropdown()
    {
        await this.country.click({force:true});
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }

    async fillFirstForm(address:string, city:string, zipCode:number){

    await this.page.goto("https://apply.mykaleidoscope.com/program/a0DTP00000H3PUy2AN/application/start");
    await this.inputAddress(address);
    await this.selectStateFromDropdown();
    await this.inputZipCode('zipCode');
    await this.selectCity(city);
    await this.selectCountryFromDropdown();
    await this.page.locator('//button[@type="submit"]').click();
    await expect(this.secondStepPageTitle).toBeVisible();

    }



}