# upguard-node-api
A nodejs wrapper for V2 of the Upguard API

[![Build Status](https://travis-ci.org/Cryptophobia/upguard-node-api.svg?branch=master)](https://travis-ci.org/Cryptophobia/upguard-node-api)

# Upguard NodeJS API
A wrapper library for Upguard using NodeJS

## Getting started
Install the package via npm

```bash
$ npm install upguard-node-api
```

Create a new instance of Upguard, passing in your Upguard URL, API token and secret token.

```javascript
var Upguard = require('upguard-node-api');

var upguard = new Upguard({
  url: YOUR_UPGUARD_URL, // https://myapi.upguard.com/
  email: YOUR_API_KEY, // 1jhskjwqhisuqwsiuqywiuy198273918273981729381n298312983n9182n3
  token: YOUR_SECRET_API_KEY // i12u39n1287398172n398712n931298391287n3981n2739812931293129
});
```

To create an instance of Upguard without installing from NPM:

```javascript
var Upguard = require('../index.js');

var upguard = new Upguard({
  url: process.env.UPGUARD_URL,
  apikey: process.env.UPGUARD_API_KEY,
  secretkey: process.env.UPGUARD_SECRET_KEY
});
```
