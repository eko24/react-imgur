var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '8599e447d97b90d';

module.exports = window.api = {
  get: function (url) {
    return fetch(rootUrl+url,{
      headers: {
        'Authorization':'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      return response.json()
    });
  },

  post: function(url,data) {
    return fetch(rootUrl+url, {
      method: 'post',
      body: data,
      headers: {
        'Authorization':'Client-ID ' + apiKey
      }
    }).then(function(response) {
      return response.json()
    });
  }
}
