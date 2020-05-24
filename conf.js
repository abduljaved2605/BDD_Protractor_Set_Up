exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ['C:\\Automation\\May_16_Protracotr\\testcases\\example_spec.js'],
  capabilities:{'browserName': 'chrome'},
  onPrepare(){ 
  browser.driver.manage().window().maximize();
  },
  onComplete(){
  },
};
