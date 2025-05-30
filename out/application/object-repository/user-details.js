"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetails = void 0;
class UserDetails {
    constructor(page) {
        this.address = page.getByPlaceholder("Enter your street address");
        this.state = page.getByPlaceholder('Enter your state');
        this.city = page.getByPlaceholder('Enter your city');
        this.zipCode = page.getByPlaceholder("Enter your zip code");
        this.country = page.getByPlaceholder('Enter your country');
        this.page = page;
        this.secondStepPageTitle = page.locator('//h2[normalize-space()="Extracurricular Activities"]');
    }
    async inputAddress(address) {
        await this.address.fill(address);
    }
    async selectStateFromDropdown() {
        await this.state.click({ force: true });
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }
    async selectCity(city) {
        await this.city.click();
        await this.city.fill(city);
    }
    async inputZipCode(zipCode) {
        await this.zipCode.fill(zipCode);
    }
    async selectCountryFromDropdown() {
        await this.country.click({ force: true });
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
    }
}
exports.UserDetails = UserDetails;
