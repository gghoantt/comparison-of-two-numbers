var expect = require('chai').expect;
var comparision = require('../src/index.js');

describe('comparision of two number', () => {
  describe('compare()', () => {
    it('return error when a and b are not number', (done) => {

      comparision.compare('a', 'b', (err) => {

        expect(err.message).to.equal('a and b are not number');
        done();
      });
    });

    it('return error when a is not a number', (done) => {

      comparision.compare('a', 1, (err) => {

        expect(err.message).to.equal('a is not a number');
        done();
      });
    });

    it('return error when b is not a number', (done) => {

      comparision.compare(1, 'b', (err) => {

        expect(err.message).to.equal('b is not a number');
        done();
      });
    });

    it('return message when a greater than b', (done) => {

      comparision.compare(5, 1, (err, rs) => {

        expect(rs).equal('5 greater than 1');
        expect(err).to.equal(null);
        done();
      });
    });

    it('return message when a less than b', (done) => {

      comparision.compare(1, 5, (err, rs) => {

        expect(rs).equal('1 less than 5');
        expect(err).to.equal(null);
        done();
      });
    });

    it('return message when a equal b', (done) => {

      comparision.compare(5, 5, (err, rs) => {

        expect(rs).equal('5 equal 5');
        expect(err).to.equal(null);
        done();
      });
    });
  });
});
