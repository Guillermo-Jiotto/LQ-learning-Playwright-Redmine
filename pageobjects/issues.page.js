exports.IssuesPage = class IssuesPage {

    constructor(page) {
        this.page = page;

        this.filterSelectMenu = page.locator('select#add_filter_select');
        this.authorFilter = page.locator('[value="author_id"]');
        this.authorCheckbox = page.locator('[for="cb_author_id"]');
        this.optionsMenu = page.locator('[class="collapsible collapsed"] legend');
        this.descriptionCheckbox = page.locator('[value="description"]');
        this.acceptBtn = page.locator('[class="icon icon-checked"]');
    }

    chooseAuthorFilter = async (page) => {
        await page.selectOption('select#add_filter_select', 'author_id');
    }

    optionsMenuClick = async () => {
        await this.optionsMenu.click();
    }

    chooseDescription = async () => {
        await this.descriptionCheckbox.click();
    }

    acceptBtnClick = async () => {
        await this.acceptBtn.click();
    }
}