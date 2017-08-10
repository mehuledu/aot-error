'use strict';

const {resolve} = require('path');

module.exports = {
  favicon: {
    app: {
      background: '#ffffff',
      name: 'Admin',
      theme: '#1976d2'
    },
    appEnabled: true,
    output: {
      publicPath: 'assets/favicons'
    }
  },
  iconfont: {
    fontPath: '../fonts/'
  },
  livereload: {
    port: 35729
  },
  paths: {
    server: {
      app: resolve('./config/server.js')
    },
    src: {
      favicons: {
        icon: resolve('../../resources/favicon/favicon.png')
      }
    }
  },
  settings: {
    htmlmin: true,
    port: 3010
  }
};
