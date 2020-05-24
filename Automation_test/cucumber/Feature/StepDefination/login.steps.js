const {Given, When, Then} = require('cucumber')
//const expect = require('chai').expect;
var {defineSupportCode} = require('cucumber');
//const assert = require('chai').assert;


  Given('I go to {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    browser.get('https://angularjs.org/')
    return 'pending';
  });



  When('I add {string} in the task field', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('I click the add button', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('I should see my new task in the list', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });