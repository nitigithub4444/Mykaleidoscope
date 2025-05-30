"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUp = void 0;
class SignUp {
    constructor(page) {
        this.emailField = page.getByPlaceholder("Email Address");
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.signinTitle = page.getByText("Let's create your account.");
        this.firstName = page.getByLabel('First Name');
        this.lastName = page.getByLabel('Last Name');
        this.mobilePhone = page.locator('//div[@class="special-label"]//following-sibling::input');
        this.createPassword = page.getByLabel('Create a Password');
        this.ageCheckbox = page.getByRole('checkbox', { name: 'I confirm that I am at least 13 years old' });
        this.submit = page.getByRole('button', { name: 'Submit' });
    }
    async inputEmailField(email) {
        await this.emailField.fill(email);
    }
    async nextButtonClick() {
        await this.nextButton.click({ force: true });
    }
    async inputFirstName(firstName) {
        await this.firstName.fill(firstName);
    }
    async inputLastName(lastName) {
        await this.lastName.fill(lastName);
    }
    async inputMobilePhone(phone) {
        await this.mobilePhone.fill(phone);
    }
    async inputPassword(password) {
        await this.createPassword.fill(password);
    }
    async minimumAgeCheckbox() {
        await this.ageCheckbox.check();
    }
    getCheckboxLocator() {
        return this.ageCheckbox;
    }
    async submitButton() {
        await this.submit.click();
    }
}
exports.SignUp = SignUp;
