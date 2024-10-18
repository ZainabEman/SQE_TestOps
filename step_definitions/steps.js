const { I } = inject();

Given('I am on the GitHub login page', () => {
  I.amOnPage('https://github.com/login');
});

When('I enter an invalid username {string} and password {string}', (username, password) => {
  I.fillField('Username or email address', 'Zainab');
  I.fillField('Password', 'zainab');
});

When('I click on the Sign in button', () => {
  I.click('Sign in');
});

Then('I should see an error message {string}', (errorMessage) => {
  I.see(errorMessage);
});

When('I enter username {string} with password {string}', (username, password) => {
  I.fillField('Username or email address', username);
  I.fillField('Password', password);
  I.click('Sign in');
});

When('I enter username {string} with no password', (username) => {
  I.fillField('Username or email address', username);
  I.click('Sign in');
});

When('I enter invalid credentials {string} with {string}', (username, password) => {
  I.fillField('Username or email address', username);
  I.fillField('Password', password);
  I.click('Sign in');
});

When('I enter valid credentials {string} with {string}', (username, password) => {
  I.fillField('Username or email address', username);
  I.fillField('Password', password);
  I.click('Sign in');
});

Then('I should see the error message {string}', async (message) => {
  I.waitForText(message, 2);
});

Then('I should see the {string}', async (text) => {
  I.waitForText(text, 2);
});

Then('I should see the login screen', async () => {
  I.waitForText('Sign in to GitHub', 2);
});

Then('I take a screenshot named {string}', (filename) => {
  I.saveScreenshot(filename);
});