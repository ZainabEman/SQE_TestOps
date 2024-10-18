exports.config = {// Specify only demo.js to run this specific script
  output: './output',
  helpers: {
    Playwright: {
      browser: 'firefox', // Ensures Playwright uses Firefox
      smartWait: 5000,    // Waits up to 5000ms for elements before timing out
      url: 'https://github.com', // Base URL for the application
      windowSize: '1200x800', // Sets the browser window size
      show: true // Opens the browser window visibly
    }
  },
  include: {
    I: './steps_file.js'
  },
  /* mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
    gherkin: {
    features: './features/github_login.feature',
    steps: ['./step_definitions/steps.js']
   },*/
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: 'allure-codeceptjs',
      outputDir: './allure-report'
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ], 
  tests: './demo.js',
  name: 'SQE'
}

// to run any feature file 
//npx codeceptjs run --features --steps

// to run any root file 
//npx codeceptjs run --steps