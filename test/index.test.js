'use strict';

/**
 * Dependencies
 */
var should = require('should');
var commands = require('../').commands;

describe('Bo slug', function() {
  it('concatenates the arguments and returns the slugified result', function(done) {
    commands.slug(['some', 'cli', 'arguments', 'will go', 'here!'], function(err, data) {
      data.should.be.eql('some-cli-arguments-will-go-here');    
          
      done();
    });
  });
});

