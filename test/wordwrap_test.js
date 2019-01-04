var should = require('chai').should();
var wordrap = require('../');

describe('wordwrap', function() {
    it('wraps empty string with no line break.', function() {
      var wrappedText = wordrap('',4);
      wrappedText.should.equal('');
    });

    it('wraps text shorter within limit with no line break.', function() {
      var wrappedText = wordrap('test',4);
      wrappedText.should.equal('test');
    });

  });
