import { Locator, Page } from "playwright";

export class ActivityForm{

    readonly page:Page;
    private readonly addEntryButton:Locator;
    readonly activityName: Locator;
    readonly yearsInvolved: Locator;
    readonly roles: Locator;
    readonly description: Locator;
    readonly addButton: Locator;
    readonly nextButton:Locator

    private constructor(page:Page)
    {
        this.page = page;
        this.addEntryButton = page.getByRole('button', {name: "Add Entry"});
        this.activityName = page.getByPlaceholder("Short Input");
        this.yearsInvolved = page.getByPlaceholder('123');
        this.roles= page.getByLabel('List any leadership roles, offices, honors and recognitions related to this activity  ');
        this.description = page.getByLabel('Description of Involvement')
        this.addButton = page.getByRole('button', {name:"Add"});
        this.nextButton = page.getByRole('button', {name:"Next Page"});

    }

    async addEntryClick(){

        this.addEntryButton.click();

    }

    async nextButtonClick(){

        await this.nextButton.click();
    }





}