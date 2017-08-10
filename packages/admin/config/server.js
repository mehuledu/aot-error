'use strict';
const express = require('express');
const fallback = require('express-history-api-fallback');
const paths = require('@mogusbi/gulp-starter/config/paths');
const app = express();

app
  .use('/admin/assets', express.static(paths.dest.assets))
  .use('/admin/', express.static(paths.dest.base))
  .use('/admin/', fallback('index.html', {
    root: paths.dest.base
  }))
  .use('/', (req, res) => res.redirect('/admin'));

module.exports = app;
