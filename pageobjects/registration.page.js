exports.RegistrationPage = class RegistrationPage {

    constructor(page) {
        this.page = page;

        this.userInput = page.locator('input[id="user_login"]');
        this.passwordInput = page.locator('input[id="user_password"]');
        this.confirmationPassInput = page.locator('input[id="user_password_confirmation"]');
        this.firstNameInput = page.locator('input[id="user_firstname"]');
        this.lastNameInput = page.locator('input[id="user_lastname"]');
        this.emailInput = page.locator('input[id="user_mail"]');
        this.acceptBtn = page.locator('[name="commit"]');
    }

    acceptBtnClick = async () => {
        this.acceptBtn.click();
    }
}