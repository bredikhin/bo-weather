/**
 * Dependencies
 */
var ip = require('ip');
var geoip = require('geoip-lite').lookup;
var weather = require('openweathermap');
var format = require('util').format;

module.exports.commands = {
  weather: function(args, done) {
    var location;
    if (!args.length) {
      var geoIpData = geoip(ip.address());
      if (geoIpData&&geoIpData.city)
        location = geoIpData.city;
    }
    else
      location = args.join(' ');

    if (!location)
      return done(new Error('Please, specify your location.'));

    weather.now({q: location}, function(data) {
      console.log(data);
      // done(null, data.toString());
    });
  }
};
