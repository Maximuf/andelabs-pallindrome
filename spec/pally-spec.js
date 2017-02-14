  'use strict'
const app = require('../app/pally.js');

    describe('Palindrome', function() {

  it('bob should return true', function() {
    expect(app.pali("bob")).toBeTruthy();
  });

  it('bob should return true', function() {
    expect(app.pali("b==o==b")).toBeTruthy();
  });

   it('bob should return mother', function() {
   	const expectedCount = "mother";
    expect(app.pali("mother")).toEqual(expectedCount);
  });

   it('123321 should be truthy', function() {
    expect(app.pali("123321")).toBeTruthy();
  });

   it('should return invalid input for unAnticipated Inputs', function() {
   	const expectedCount = "Invalid input, expecting a string!";
    expect(app.pali("{[1237&556]}")).toEqual(expectedCount);
  });

});
  
