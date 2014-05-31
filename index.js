/**
 * Dependencies
 */
var ip = require('ip');
var geoip = require('geoip-lite').lookup;
var weather = require('openweather-node');
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

    weather.now(location, function(err, data) {
      if (err)
        return done(err);
        
      var temperature = data.getDegreeTemp();

      done(null, format('Temperature: %d, min: %d, max: %d',
        Math.round(temperature.temp),
        temperature.temp_min,
        temperature.temp_max
      ));
    });
  }
};
