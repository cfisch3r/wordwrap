var assert = require('assert');
var wordrap = require('../');
describe('wordwrap', function() {
    it('wraps empty string with no line break.', function() {
      var wrappedText = wordrap('');
      assert.equal('', wrappedText);
    });

});
