import { Locator, Page } from "playwright";


export class Login{

readonly loginButton:Locator;


constructor(page:Page){

this.loginButton = page.getByRole('button', {name:'Log In to Apply'})

}

async login(){

    await this.loginButton.waitFor({state:'visible'})
    await this.loginButton.click();
    

}

}