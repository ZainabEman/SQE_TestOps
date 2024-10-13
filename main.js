Feature('Login');
Scenario('invalid credentials', ({I})=>{
    I.amOnPage('https://github.com/login')
    I.fillField('Username or email address','zainab');
    I.fillField('Password','zainab123456');
    I.click('Sign in');
    I.waitForText('Incorrect username or password.',2);
    I.saveScreenshot('error_message.png');
})


Scenario('Valid credentials', ({I})=>{
    I.amOnPage('https://github.com/login')
    I.fillField('Username or email address','ZainabEman');
    I.fillField('Password','zainab1810200318102003');
    I.click('Sign in');
    I.waitForText('Dashboard',4);
    I.saveScreenshot('valid_login_dashboard.png');
})
