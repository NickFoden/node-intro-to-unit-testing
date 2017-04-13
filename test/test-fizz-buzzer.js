const should = require('chai').should();
const expect = require('chai').expect();
const fizzBuzz = require('../fizzbuzzer');

describe ('num', function() {
		it('should be a number', function() {
			const answer = fizzBuzz(7);
			answer.should.be.a('number');
		});
		it('should be divisible by 15', function() {
			const answer = fizzBuzz(45);
			answer.should.equal('fizz-buzz');
		});
		it('should be divisble by 5', function() {
			const answer = fizzBuzz(100);
			answer.should.equal('buzz');
		});
		it('should be divisble by 3', function() {
			const answer = fizzBuzz(9);
			answer.should.equal('fizz');
		});
		it('should produce error if input isn\'t number', function() {
    		const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]]
    		badInputs.forEach(function(input) {
      			(function() {
          			fizzBuzz(input)
      			}).should.throw(Error);
    		});
  		});
  	});	





/*		it('should throw error', function() {
				(fizzBuzz("green")).should.throw(Error)
		});
	});	*/		





