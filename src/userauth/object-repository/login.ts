import { Locator, Page } from "playwright";


export class Login{

readonly loginButton:Locator;
readonly page:Page;


constructor(page:Page){

this.loginButton = page.getByRole('button', {name:'Log In to Apply'});
this.page = page;

}

async login(){

    await this.page.goto("https://apply.mykaleidoscope.com/program/sdet-test-scholarship");
    await this.loginButton.waitFor({state:'visible'});
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
    
}


}
