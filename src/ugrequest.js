var request = require('request');
var API_VERSION = 'v2';

var UGRequest = function(config){
  return {
    get: function(uri){
      var options = {
        url: config.url + '/api/' + API_VERSION + '/' + uri,
        headers: {
          Authorization: 'Token token="'+ config.apikey + config.secretkey + '"'
        },
        forever: true
      }

      return new Promise(function(fulfill, reject){
        request(options, function(err, res, body){
          if (err) { reject(err); }
          fulfill(JSON.parse(body));
        });
      })
    },

    post: function(uri, data){
      var options = {
        url: config.url + '/api/' + API_VERSION + '/' + uri,
        headers: {
          Authorization: 'Token token="'+ config.apikey + config.secretkey + '"'
        },
        json: data
      }

      return new Promise(function(fulfill, reject){
        request.post(options, function(err, res, body){
          if (err) { reject(err); }
          fulfill(body);
        });
      })
    },

    put: function(uri, data){
      var options = {
        url: config.url + '/api/' + API_VERSION + '/' + uri,
        headers: {
          Authorization: 'Token token="'+ config.apikey + config.secretkey + '"'
        },
        json: data
      }

      return new Promise(function(fulfill, reject){
        request.put(options, function(err, res, body){
          if (err) { reject(err); }
          fulfill(body);
        });
      })
    },

    delete: function(uri, data){
      var options = {
        url: config.url + '/api/' + API_VERSION + '/' + uri,
        headers: {
          Authorization: 'Token token="'+ config.apikey + config.secretkey + '"'
        }
      }

      return new Promise(function(fulfill, reject){
        request.delete(options, function(err, res, body){
          if (err) { reject(err); }
          fulfill();
        });
      })
    }
  }
}

module.exports = UGRequest