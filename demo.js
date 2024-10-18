const { I } = inject();
const Excel = require('exceljs');

Feature('Login to GitHub using data from Excel');

Before(async ({ I }) => {
  // Navigate to the login page before each scenario
  await I.amOnPage('https://github.com/login');
});

Scenario('Test Login with Data from Excel', async ({ I }) => {
  const workbook = new Excel.Workbook();
  let validRowsProcessed = 0;
  try {
    await workbook.xlsx.readFile('./SQE.xlsx');
    const worksheet = workbook.getWorksheet('Sheet1');
    
    for await (const row of worksheet.getRows(2, worksheet.rowCount)) {
      const username = row.getCell(1).value;
      const password = row.getCell(2).value;

      if (!username || !password) {
        console.log("Empty or null row encountered, ending the test.");
        break;  // Ends the loop and moves to catch or finally for clean up.
      }

      await I.fillField('Username or email address', username);
      await I.fillField('Password', password);
      await I.click('Sign in');
      
      // Checks for error message indicating login failure
      await I.see('Incorrect username or password.', '.flash-error');
      await I.saveScreenshot(`${username}_login_attempt.png`);  // Take screenshot after each login attempt
      validRowsProcessed++;

      // Refresh or navigate again to reset the form for the next iteration
      await I.amOnPage('https://github.com/login');
    }
  } catch (error) {
    console.error('Error during test execution:', error);
  } finally {
    console.log(`${validRowsProcessed} valid rows processed before encountering an empty or null row.`);
  }
});