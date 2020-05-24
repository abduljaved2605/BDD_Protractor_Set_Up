exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ['C:/Automation/May_16_Protracotr/Automation_test/cucumber/Feature/*.feature'],
  capabilities:{'browserName': 'chrome'},
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  onPrepare(){ 
  browser.driver.manage().window().maximize();
  },
  cucumberOpts: {
    require: 'C:/Automation/May_16_Protracotr/Automation_test/cucumber/Feature/StepDefination/*.js',
    tags: false,
    profile: false,
    'no-source': true
  }
 
};
