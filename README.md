# Testing redmine.org with Playwright

To start a project:
1. Install playwright:
    npm init playwright@latest
2. Install allure:
    npm i -D allure-playwright
3. Download this repo:
    git clone https://gitlab.com/lq-test-01/lq-learning-playwright-redmine.git

Run tests:
    npx playwright test

Run tests with allure report:
    npm run test

Generate allure report:
    npm run allure-generate

Generate HTML-report:
    npm run allure-serve