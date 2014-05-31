'use strict';

/**
 * Dependencies
 */
var should = require('should');
var commands = require('../').commands;

describe('Bo weather', function() {
  it('asks to specify the location if undefined', function(done) {
    commands.weather([], function(err, data) {
      should(err).be.an.Error;
      err.message.should.be.eql('Please, specify your location.');

      done();
    });
  });

  it('returns the current temperature', function(done) {
    commands.weather(['Montreal'], function(err, data) {
      data.should.containEql('Temperature: ');

      done();
    });
  });
});
