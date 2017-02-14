  'use strict'
const app = require('../app/pally.js');

    describe('Palindrome', function() {

  it('bob should return true', function() {
    expect(app.pali("bob")).toBeTruthy();
  });

});
  
