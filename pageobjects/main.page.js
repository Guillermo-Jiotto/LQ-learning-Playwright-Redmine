exports.MainPage = class MainPage {

    constructor(page) {
        this.page = page;

        this.logInBtn = page.locator('a[href="/login"]');
        this.registrationBtn = page.locator('a[href="/account/register"]');
        this.searchInput = page.locator('input[id="q"]');
        this.issuesTab = page.locator('a[class="issues"]');
    }

    searchInputText = 'playwright';

    typeToSearch = async () => {
        await this.searchInput.click();
        await this.searchInput.fill(this.searchInputText);
        await this.searchInput.press('Enter');
    }

    logInClick = async () => {
        await this.logInBtn.click();
    }

    registrationClick = async () => {
        await this.registrationBtn.click();
    }

    issuesTabClick = async () => {
        await this.issuesTab.click();
    }
}