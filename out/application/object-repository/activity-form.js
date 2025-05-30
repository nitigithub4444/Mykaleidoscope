"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityForm = void 0;
class ActivityForm {
    constructor(page) {
        this.page = page;
        this.addEntryButton = page.getByRole('button', { name: "Add Entry" });
        this.activityName = page.getByPlaceholder("Short Input");
        this.yearsInvolved = page.getByPlaceholder('123');
        this.roles = page.getByLabel('List any leadership roles, offices, honors and recognitions related to this activity  ');
        this.description = page.getByLabel('Description of Involvement');
        this.addButton = page.getByRole('button', { name: "Add" });
        this.nextButton = page.getByRole('button', { name: "Next Page" });
    }
    async addEntryClick() {
        this.addEntryButton.click();
    }
    async nextButtonClick() {
        await this.nextButton.click();
    }
}
exports.ActivityForm = ActivityForm;
