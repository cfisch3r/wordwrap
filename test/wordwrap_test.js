var assert = require('assert');
describe('Array', function() {
    it('abc', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });

    it('xyz', function() {
      assert.equal([1,2,3].indexOf(3), 2);
    });

});
