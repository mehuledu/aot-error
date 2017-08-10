'use strict';

const paths = require('@mogusbi/gulp-starter/config/paths');
const WebpackManifest = require('@mogusbi/gulp-starter/plugins/webpackManifest');
const {src} = require('@mogusbi/gulp-starter/utilities/paths');
const {AotPlugin} = require('@ngtools/webpack');
const {resolve} = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
  module: {
    rules: [
      {
        exclude: [
          /\.(e2e-spec|spec|mock)\.ts$/
        ],
        loader: '@ngtools/webpack',
        test: /\.ts$/
      },
      {
        exclude: [
          /\.(e2e-spec|spec|mock)\.ts$/
        ],
        test: /\.ts$/,
        use: 'angular2-template-loader'
      },
      {
        loaders: [
          'html-loader',
          {
            loader: 'rev-replace-loader',
            options: {
              manifestPath: paths.manifests.revision
            }
          }
        ],
        test: /\.html$/
      }
    ]
  },
  output: {
    chunkFilename: '[id]-[hash].chunk.js',
    filename: '[name]-[hash].js'
  },
  plugins: [
    new AotPlugin({
      tsConfigPath: resolve('tsconfig-aot.json')
    }),
    new WebpackManifest({
      publicPath: 'assets/js/'
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        caseSensitive: true,
        minimize: true,
        removeAttributeQuotes: false
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true
      },
      output: {
        comments: false
      }
    })
  ],
  resolve: {
    alias: {
      '@breeze-cms/core': resolve('../core/src/index.ts')
    },
    extensions: [
      '.ts',
      '.js'
    ],
    modules: [
      src(),
      resolve('../../../node_modules')
    ],
  }
});
