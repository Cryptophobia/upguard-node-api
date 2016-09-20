var Promise = require('promise');

var Accessor = function(config, single, plural){
  var ugrequest = require('./ugrequest.js')(config)

  return {
    list: function(params){
      return new Promise(function(fulfill, reject){
        var urlParams = params ? '?' + params : '';
        ugrequest.get('/' + plural + '.json' + urlParams).then(function(data){
          //var key = plural === 'search' ? 'results' : plural
          fulfill(data)
        }).catch(function(err){
          reject(err)
        })
      })
    },

    show: function(id){
      return new Promise(function(fulfill, reject){
        ugrequest.get('/' + plural + '/' + id + '.json').then(function(data){
          fulfill(data)
        }).catch(function(err){
          reject(err)
        })
      })
    },

    create: function(data){
      var createData = {}
      createData[single] = data;
      return new Promise(function(fulfill, reject){
        ugrequest.post('/' + plural + '.json', createData).then(function(data){
          fulfill(data)
        }).catch(function(err){
          reject(err)
        })
      })
    },

    update: function(id, data){
      var createData = {}
      createData[single] = data;
      return new Promise(function(fulfill, reject){
        ugrequest.put('/' + plural + '/' + id + '.json', createData).then(function(data){
          fulfill(data)
        }).catch(function(err){
          reject(err)
        })
      })
    },

    delete: function(id){
      return new Promise(function(fulfill, reject){
        ugrequest.delete('/' + plural + '/' + id + '.json').then(function(){
          fulfill(true)
        }).catch(function(err){
          reject(err)
        })
      })
    },

    lookup: function(params){
      return new Promise(function(fulfill, reject){
        var urlParams = params ? '?' + params : '';
        ugrequest.get('/' + plural + '.json' + urlParams).then(function(data){
          fulfill(data)
        }).catch(function(err){
          reject(err)
        })
      })
    },

    nodes: function(id, params){
      return new Promise(function(fulfill, reject){
        var urlParams = params ? '?' + params : '';
        ugrequest.get('/' + plural + '/' + id + '/' + 'nodes.json' + urlParams).then(function(data){
          fulfill(data)
        }).catch(function(err){
          reject(err)
        })
      })
    },

    report: function(id){
      return new Promise(function(fulfill, reject){
        ugrequest.get('/' + plural + '/' + id + '/' + 'report.json').then(function(data){
          fulfill(data)
        }).catch(function(err){
          reject(err)
        })
      })
    }
  }
}

module.exports = Accessor