var config = require('../nightwatch.conf.js');

module.exports = {
  '#main and #footer should be hidden when there are no todos': function(browser) {
    browser
      .url('https://vast-taiga-34449.herokuapp.com/index.html')
      .waitForElementVisible('body')
      .assert.attributeEquals('input[class=new-todo]', 'autofocus', "true")
      .assert.attributeEquals('section[class=main]', 'style', 'display: none;')
      .assert.attributeEquals('footer[class=footer]', 'style', 'display: none;')
  },

  'Add new todos': function(browser) {
    browser
      .setValue('input[class=new-todo]', 'Task1')
      .keys(browser.Keys.ENTER)
      .assert.containsText('.todo-list li:first-child label', 'Task1')
      .setValue('input[class=new-todo]', 'Task2')
      .keys(browser.Keys.ENTER)
      .assert.containsText('.todo-list li:nth-child(2) label', 'Task2')
      .setValue('input[class=new-todo]', 'Task3')
      .keys(browser.Keys.ENTER)
      .assert.containsText('.todo-list li:nth-child(3) label', 'Task3');
  },

  'Show how many items are left to complete': function(browser){
    browser
      .assert.containsText('.todo-count', '3 items left');
  },

  'Mark one as completed': function(browser){
    browser
      .click('.todo-list li:first-child .toggle')
      .assert.cssClassPresent('.todo-list li:first-child', 'completed');
  },

  'Show how many items are left to complete after checking one as completed': function(browser){
    browser
      .assert.containsText('.todo-count', '2 items left');
  },

  'Clear completed tasks': function(browser){
    browser
      .click('.todo-list li:nth-child(2) .toggle')
      .assert.cssClassPresent('.todo-list li:nth-child(2)', 'completed')
      .click('.todo-list li:nth-child(3) .toggle')
      .assert.cssClassPresent('.todo-list li:nth-child(3)', 'completed')
      .click('.clear-completed')
      .end();
  }

  // I was unable to test this. The input field is set as element not interactable. Even simulating a double click the setValue didn't work
  /*
  'Edit todo list item': function(browser){
   browser 
    .setValue('.todo-list li:nth-child(2) .edit', 'Edited Task2')
    .keys(browser.Keys.ENTER)
    .assert.containsText('.todo-list li:nth-child(2) label', 'Edited Task2');
  } */

  // This feature is not available on the backbone implementation of todomvc
  /*
  'Mark all as completed': function(browser){

  } */


};