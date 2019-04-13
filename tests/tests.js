var config = require('../nightwatch.conf.js');

module.exports = {
  '#main and #footer should be hidden when there are no todos': function(browser) {
    browser
      .url('https://vast-taiga-34449.herokuapp.com/index.html')
      .waitForElementVisible('body')
      .assert.attributeEquals('section[class=main]', 'style', 'display: none;')
      .assert.attributeEquals('footer[class=footer]', 'style', 'display: none;')
  },

  'Add new todo': function(browser) {
    browser
      .assert.attributeEquals('section[class=main]', 'style', 'display: none;')
      .assert.attributeEquals('footer[class=footer]', 'style', 'display: none;')
      .end();
  }
};