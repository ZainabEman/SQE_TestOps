const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './main.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'firefox',
      url: 'http://localhost',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    allure: {
      enabled: true, // Enable the Allure plugin
      outputDir: './allure-report' // Define the output directory for Allure results
    },
    retryFailedStep: {
      enabled: true  // Plugin to retry failed steps automatically
    },
    screenshotOnFail: {
      enabled: true // Capture screenshot on failure
    }
  },
  name: 'SQE'
};
