
var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=af805f1f244b7e2d93342956162ed2d4';
const END_POINT = 'http://104.198.185.202/api';
const LIVE_WALL_COUNT = '/campaign/count';

module.exports = {
  getLiveWallCount: function (location) {
    var endocedLocation = encodeURIComponent(location);

    var requestUrl = `${END_POINT}${LIVE_WALL_COUNT}`;
    return axios.get(requestUrl).then(function(res) {
      return res.data
    }, function (err) {
      throw new Error('Unable to fetch weather for that location');
    });
  }
}
