exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator('[id="username"]');
        this.passwordInput = page.locator('[id="password"]');
        this.submitBtn = page.locator('[type="submit"]');
    }

    username = 'tester_01';
    password = 'password_02';

    fillLoginInputs = async () => {
        this.usernameInput.fill(this.username);
        this.passwordInput.fill(this.password);
    }

    pressSubmit = async () => {
        this.submitBtn.click();
    }
}