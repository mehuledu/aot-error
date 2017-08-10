'use strict';

const paths = require('@mogusbi/gulp-starter/config/paths');
const {src} = require('@mogusbi/gulp-starter/utilities/paths');
const {TsConfigPathsPlugin} = require('awesome-typescript-loader');
const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    polyfills: src('ts/polyfills.ts'),
    vendor: src('ts/vendor.ts'),
    app: src('ts/main.ts')
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ],
    plugins: [
      new TsConfigPathsPlugin({
        configFileName: resolve('tsconfig.json')
      })
    ]
  },
  output: {
    path: paths.dest.js,
    publicPath: 'assets/js/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: [
        'app',
        'vendor',
        'polyfills'
      ]
    }),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      src('ts'), // location of your src
      {} // a map of your routes
    )
  ]
};
