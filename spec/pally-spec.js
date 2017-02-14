  'use strict'
const app = require('../app/pally.js');

    describe('Palindrome', function() {

  it('bob should return true', function() {
    expect(app.pali("bob")).toBeTruthy();
  });

  it('bob should return true', function() {
    expect(app.pali("b==o==b")).toBeTruthy();
  });

   it('typeof input should return string', function() {
    expect(typeof app.pali("mother")).toEqual("string");
  });

   it('123321 should be truthy', function() {
    expect(app.pali("123321")).toBeTruthy();
  });

   it('should return invalid input for unAnticipated Inputs', function() {
   	const expectedCount = "Invalid Input, Expecting a string!";
    expect(app.pali("{[1237&556]}")).toEqual('1237556');
  });

   it('should return invalid input for unAnticipated Inputs', function() {
   	const expectedCount = "Invalid Input, Expecting a string!";
    expect(app.pali(true)).toEqual(expectedCount);
  });

   it('should return invalid input for unAnticipated Inputs', function() {
   	const expectedCount = "Invalid Input, Expecting a string!";
    expect(app.pali(1233)).toEqual(expectedCount);
  });

   it('2+2=2+2 should be truthy', function() {
    expect(app.pali("2+2=2+2")).toBeTruthy();
  });

 it('<[o_o]> should be truthy', function() {
    expect(app.pali("<[o_o]>")).toBeTruthy();
  });

  it('mama         mama          mama should be truthy', function() {
    expect(app.pali("mama         mama          mama")).toBeTruthy();
  });

	it('bobbqwert should return bobbqwert', function() {
    expect(app.pali("bobbqwert")).toBe("bobbqwert");
  });
});
  
