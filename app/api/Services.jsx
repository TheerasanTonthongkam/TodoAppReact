
var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=af805f1f244b7e2d93342956162ed2d4';
const END_POINT = 'http://104.198.185.202/api';
const LIVE_WALL_COUNT = '/campaign/count';
const FAMOUS_BLOG = '/content/blog/famous';
const BLOG = '/content/blog';
const LIVE_WALL = '/campaign?size=14&page='
const REGISTER = '/account';
const LOGIN = '/account/credential';
const CAMPAIGN = '/campaign';

module.exports = {
  getLiveWallCount: function () {
    var requestUrl = `${END_POINT}${LIVE_WALL_COUNT}`;
    return axios.get(requestUrl).then(function(res) {
      return res.data
    }, function (err) {
      throw new Error('Unable to get Live wall');
    });
  },

  getBlogFromId: function(id) {
    var requestUrl = `${END_POINT}${BLOG}/${id}`;
    return axios.get(requestUrl).then(function(res) {
      return res.data
    }, function (err) {
      throw new Error('Unable to get Blog ' + id);
    });
  },
  getBlog: function () {
    var requestUrl = `${END_POINT}${BLOG}`;
    return axios.get(requestUrl).then(function(res) {
      return res.data
    }, function (err) {
      throw new Error('Unable to get all Blogs');
    });
  },

  getFamousBlog: function () {
    var requestUrl = `${END_POINT}${FAMOUS_BLOG}`;
    return axios.get(requestUrl).then(function(res) {
      return res.data
    }, function (err) {
      throw new Error('Unable to get Famous Blogs');
    });
  },

  getLiveWall: function (page) {
    var requestUrl = `${END_POINT}${LIVE_WALL}${page}`;
    return axios.get(requestUrl).then(function(res) {
      return res.data
    }, function (err) {
      throw new Error('Unable to get Livewall');
    });
  },

  register: function(data) {
    var requestUrl = `${END_POINT}${REGISTER}`;
    return axios.post(requestUrl, data).then(function(res) {
      return res.data
    }, function (err) {
      console.log(err);
      throw new Error('Unable to register');
    });
  },

  login: function(data) {
    var requestUrl = `${END_POINT}${LOGIN}`;
    return axios.post(requestUrl, data).then(function(res) {
      return res.data
    }, function (err) {
      console.log(err);
      throw new Error('Unable to login');
    });
  },

  postCampaign: function(formData) {
    var requestUrl = `${END_POINT}${CAMPAIGN}`;
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return axios.post(requestUrl, formData, config).then(function(res) {
      return res.data
    }, function (err) {
      alert(err.message);
      console.log(err);
      throw new Error('Unable to Post ' + err);
    });
  }
}
