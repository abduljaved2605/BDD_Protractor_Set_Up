describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.ignoreSynchronization=true;
    browser.get('https://www.skipthedishes.com/');

    //element(By.xpath("//*[@id=\"test-2-div\"]/ul/li[2]/span"));

    //c5151 c5164
    var e1 = element(By.css("input[class^='c51']"));
   // var e1 = 
    e1.sendKeys('136 Market Avenue, Winnipeg, MB, Canada');
    browser.driver.sleep(5000);
    
    element(by.css("[class^='c5139 c51']")).click();
    browser.driver.sleep(50000);

    //element(by.model('yourName')).sendKeys('Julie');

   // var greeting = element(by.binding('yourName'));

    //expect(greeting.getText()).toEqual('Hello Julie!');
  });

 /*  describe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('https://www.skipthedishes.com/');

      todoList = element.all(by.repeater('todo in todoList.todos'));
    });

    it('should list todos', function() {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('todoList.todoText'));
      var addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
  }); */
});
