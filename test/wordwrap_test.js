var should = require('chai').should();
var wordrap = require('../');

describe('wordwrap', function() {
    it('wraps empty string with no line break.', function() {
      var wrappedText = wordrap('');
      wrappedText.should.equal('');
    });

});
