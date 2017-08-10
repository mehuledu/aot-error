'use strict';

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        exclude: [
          /\.(e2e-spec|spec|mock)\.ts$/
        ],
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular-router-loader'
        ],
        test: /\.ts$/
      },
      {
        loader: 'html-loader',
        test: /\.html$/
      }
    ]
  },
  output: {
    chunkFilename: '[id].chunk.js',
    filename: '[name].js'
  },
  watch: true
});
