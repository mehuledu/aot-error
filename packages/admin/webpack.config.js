'use strict';

let config;

switch (process.env.NODE_ENV) {
case 'development':
  config = require('../../config/webpack.development');
  break;
default:
  config = require('../../config/webpack.production');
}

module.exports = config;
