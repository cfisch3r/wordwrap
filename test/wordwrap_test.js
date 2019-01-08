var should = require('chai').should();
var wordwrap = require('../');

describe('wordwrap', function() {
    it('wraps empty string with no line break.', function() {
      var wrappedText = wordwrap('',4);
      wrappedText.should.equal('');
    });

    it('wraps text shorter within limit with no line break.', function() {
      var wrappedText = wordwrap('test',4);
      wrappedText.should.equal('test');
    });

    it('breaks text longer than limit with after limit.', function() {
      var wrappedText = wordwrap('testtest',4);
      wrappedText.should.equal('test\ntest');
    });

    it('breaks text with space imediately after limit and skips space.', function() {
      var wrappedText = wordwrap('test test',4);
      wrappedText.should.equal('test\ntest');
    });

    it('breaks text with space within limit at space position and skips space.', function() {
      var wrappedText = wordwrap('te st',4);
      wrappedText.should.equal('te\nst');
    });

    it('breaks text with multiple spaces within limit at last space position and skips space.', function() {
      var wrappedText = wordwrap('t e st',4);
      wrappedText.should.equal('t e\nst');
    });

    it('breaks text with space after limit at limit', function() {
      var wrappedText = wordwrap('tests t',4);
      wrappedText.should.equal('test\ns t');
    });

    it('breaks text with space within limit and after limit at space position within limit and skips space.', function() {
      var wrappedText = wordwrap('te st s',4);
      wrappedText.should.equal('te\nst s');
    });

    it('breaks long text multiple times.', function() {
      var wrappedText = wordwrap('testtesttest',4);
      wrappedText.should.equal('test\ntest\ntest');
    });
  });
