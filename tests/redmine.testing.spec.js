const { test, expect } = require('@playwright/test');
const { IssuesPage } = require('../pageobjects/issues.page.js');
const { LoginPage } = require('../pageobjects/login.page.js');
const { MainPage } = require('../pageobjects/main.page.js');
const { RegistrationPage } = require('../pageobjects/registration.page.js');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.redmine.org/');
});

test.describe('Redmine testing', () => {

    let mainPage;
    let loginPage;
    let registrationPage;
    let issuesPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        loginPage = new LoginPage(page);
        registrationPage = new RegistrationPage(page);
        issuesPage = new IssuesPage(page);
    });

    test('Verify search page', async ({ page }) => {
        await mainPage.typeToSearch();
        await expect(page).toHaveURL(new RegExp('^https://www.redmine.org/projects/redmine/search'));
        await expect(page.locator('[id="content"] h2')).toHaveText('Search');
    });

    test('Verify LogIn warning message', async ({ page }) => {
        await mainPage.logInClick();
        await expect(page).toHaveURL('https://www.redmine.org/login');
        await loginPage.fillLoginInputs();
        await loginPage.pressSubmit();
        await expect(page.locator('[id="flash_error"]')).toHaveText('Invalid user or password');
    });

    test('Check Registration warning message section', async ({ page }) => {
        await mainPage.registrationClick();
        await expect(page).toHaveURL('https://www.redmine.org/account/register');
        await registrationPage.acceptBtnClick();
        await expect(page.locator('[id="errorExplanation"]')).toBeVisible();
    });

    test('Check filters on Issue tab', async ({ page }) => {
        await mainPage.issuesTabClick();
        await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/issues');
        await issuesPage.chooseAuthorFilter(page);
        await expect(page.locator('[for="cb_author_id"]')).toBeVisible();
    });

    test('Check Description option on Issue tab', async ({ page }) => {
        await mainPage.issuesTabClick();
        await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/issues');
        await issuesPage.optionsMenuClick();
        await issuesPage.chooseDescription();
        await issuesPage.acceptBtnClick();
        await expect(page.locator('[class="description"]').first()).toBeVisible();
    });
});