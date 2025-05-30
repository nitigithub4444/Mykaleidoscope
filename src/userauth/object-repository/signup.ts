import { Locator, Page } from "playwright";

export class SignUp{

    readonly emailField:Locator;
    readonly nextButton:Locator;
    readonly signinTitle:Locator;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly page:Page;
    readonly createPassword: Locator;
    readonly mobilePhone: Locator;
    readonly ageCheckbox: Locator;
    readonly submit: Locator;

    
    constructor(page:Page)
    {

        this.emailField = page.getByPlaceholder("Email Address");
        this.nextButton = page.getByRole('button', {name:'Next'});
        this.signinTitle = page.getByText("Let's create your account.");
        this.firstName = page.getByLabel('First Name');
        this.lastName = page.getByLabel('Last Name');
        this.mobilePhone = page.locator('//div[@class="special-label"]//following-sibling::input');
        this.createPassword = page.getByLabel('Create a Password');
        this.ageCheckbox = page.getByRole('checkbox', {name:'I confirm that I am at least 13 years old'});
        this.submit = page.getByRole('button', {name:'Submit'});


    }

    async inputEmailField(email:string) {
        
        await this.emailField.fill(email);
    }

    async nextButtonClick() {
        
        await this.nextButton.click({force:true});

    }

    async inputFirstName(firstName:string){

        await this.firstName.fill(firstName);

    }

    
    async inputLastName(lastName:string){

        await this.lastName.fill(lastName);

    }

    async inputMobilePhone(phone:string){

        await this.mobilePhone.fill(phone);
        
    }

    async inputPassword(password:string){

        await this.createPassword.fill(password)
        
    }

    async minimumAgeCheckbox(){

        await this.ageCheckbox.check();
    }

    getCheckboxLocator():Locator{

        return this.ageCheckbox;
    }

    async submitButton(){

        await this.submit.click()
    }



}