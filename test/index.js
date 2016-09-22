var expect = require('chai').expect; // ecpect library
var comparision = require('../src/index.js');

describe('comparision of two number', function () {
	describe('compare()', function () { //test a and b are not number
		it('return error when a and b are not number', function(done) {

	      comparision.compare('a', 'b', function(err, rs) {

	        expect(err.message).to.equal('a and b are not number');
	        done();
	      });
	    });

	    it('return error when a is not a number', function(done) {

	      comparision.compare('a', 1, function(err, rs) {

	        expect(err.message).to.equal('a is not a number');
	        done();
	      });
	    });

	    it('return error when b is not a number', function(done) {

	      comparision.compare(1, 'b', function(err, rs) {

	        expect(err.message).to.equal('b is not a number');
	        done();
	      });
	    });

	    it('return message when a greater than b', function(done) {

	      comparision.compare(5, 1, function(err, rs) {

	        expect(rs).equal('5 greater than 1');
	        done();
	      });
	    });

	    it('return message when a less than b', function(done) {

	      comparision.compare(1, 5, function(err, rs) {

	        expect(rs).equal('1 less than 5');
	        done();
	      });
	    });

	    it('return message when a equal b', function(done) {

	      comparision.compare(5, 5, function(err, rs) {

	        expect(rs).equal('5 equal 5');
	        done();
	      });
	    });
	});
});
