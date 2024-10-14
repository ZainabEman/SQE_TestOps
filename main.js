Feature('Login');

//Empty Credentials
Scenario('Empty credentials', ({ I }) => {
    I.amOnPage('https://github.com/login');
    I.click('Sign in');
    I.waitForText('Sign in to GitHub', 2);
    I.saveScreenshot('empty_credentials_error.png');
});

//Invalid Email format
Scenario('Invalid email format', ({ I }) => {
    I.amOnPage('https://github.com/login');
    I.fillField('Username or email address', 'invalidemailformat');
    I.fillField('Password', 'somepassword');
    I.click('Sign in');
    I.waitForText('Incorrect username or password.', 2);
    I.saveScreenshot('invalid_email_format_error.png');
});

//Valid username with invalid password
Scenario('Valid username with invalid password', ({ I }) => {
    I.amOnPage('https://github.com/login');
    I.fillField('Username or email address', 'ZainabEman');
    I.fillField('Password', 'wrongpassword');
    I.click('Sign in');
    I.waitForText('Incorrect username or password.', 2);
    I.saveScreenshot('valid_username_invalid_password.png');
});

//Password field left  empty
Scenario('Password field left empty', ({ I }) => {
    I.amOnPage('https://github.com/login');
    I.fillField('Username or email address', 'ZainabEman');
    I.click('Sign in');
    I.waitForText('Sign in to GitHub', 2);
    I.saveScreenshot('empty_password_field.png');
});

//Too many failed login attempts
// Scenario('Too many failed login attempts', ({ I }) => {
//     I.amOnPage('https://github.com/login');

//     for (let i = 0; i < 5; i++) {
//         I.fillField('Username or email address', 'ZainabEman');
//         I.fillField('Password', 'wrongpassword');
//         I.click('Sign in');
//         I.waitForText('Incorrect username or password.', 2);
//         I.refreshPage(); 
//     }

//     I.saveScreenshot('too_many_failed_attempts.png');
// });

//Invalid Credentials
Scenario('invalid credentials', ({I})=>{
    I.amOnPage('https://github.com/login')
    I.fillField('Username or email address','zainab');
    I.fillField('Password','zainab123456');
    I.click('Sign in');
    I.waitForText('Incorrect username or password.',2);
    I.saveScreenshot('error_message.png');
})

//Valid Credentials
Scenario('Valid credentials', ({I})=>{
    I.amOnPage('https://github.com/login')
    I.fillField('Username or email address','ZainabEman');
    I.fillField('Password','zainab1810200318102003');
    I.click('Sign in');
    I.waitForText('Dashboard',2);
    I.saveScreenshot('valid_login_dashboard.png');
})


//Command to run test cases
//npx codeceptjs run --steps

//generate allure report 
//npx allure generate output/allure-results --clean

//open report
//npx allure open

//all in one command //run test generate open report
//npm run test:report

//npm install for other os setup
//npm run build
//npm test //to build and run test cases
