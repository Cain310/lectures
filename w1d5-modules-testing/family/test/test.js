// var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;


describe('Testing Ancestry', function() {
  var ancestryCode = require('../ancestry.js');

  describe('testing Gender function', function() {

    // Chai has two test styles: assert and expect.
    // We'll use assert style for these tests

    it('should tell me this person is male', function() {
      assert.equal(ancestryCode.isMale({sex:'m'}), true, 'should be male')
    })

    it('should tell me this person is not male', function() {
      assert.equal(ancestryCode.isMale({sex:'f'}), false, 'should be female')
    })

    it('should not break if gender is missing', function() {
      assert.equal(ancestryCode.isMale({whoknows: true}), false,'should treat others as Not male')
    })

  })

  describe('testing the GreatestGeneration function', function() {

  })

    // it('should tell me this person is alive', function() {
    //   assert.equal(ppl.alive({died:null}), true, "Should be alive ")
    // });

    // it('should tell me this other person is dead', function() {
    //   assert.equal(ppl.alive({died:1980}), false, "should be dead")
    // });

    // it('should break because we dont know', function() {
    //   assert.equal(ppl.alive({funny: true}), false, "doesnt have a died attribute")
    // })

      

    // it('should return Carel when Carolus is given', function() {
    //   assert.equal("Carel Haverbeke", family.findPa("Carolus Haverbeke"));
    // });

    // it('should handle null elegantly', function() {
    //   assert.equal("That is not a person", family.findPa(null))
    // })

    // it('should return a string', function() {
    //   expect(family.findPa("Carolus Haverbeke")).to.be.a('string');
    // })

  // });

  // describe ('findGrandPa()', function () {

  //   it('should tell me that Carel is Emile granpa', function() {
  //     assert.equal("Carel Haverbeke", family.findGranPa("Emile Haverbeke"))
  //   })

  // })
  
});