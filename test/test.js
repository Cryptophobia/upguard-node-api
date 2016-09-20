var should = require('chai').should();
var expect = require('chai').expect;
var dotenv = require('dotenv');

// Try to load the environment variables
try { dotenv.load(); } catch(error) { console.error(error); }

var Upguard = require('../index.js');
var upguard = new Upguard({
  url: process.env.UPGUARD_URL,
  apikey: process.env.UPGUARD_API_KEY,
  secretkey: process.env.UPGUARD_SECRET_KEY
});

describe('Upguard', function(){
  describe('nodes', function(){
    require('./models/nodes')(upguard);
    //require('./models/changeReport')(upguard);
    require('./models/environments')(upguard);
  });
});