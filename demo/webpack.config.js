const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path              = require('path');
const webpack           = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
        }
      }
    ]
  },
  mode: 'development',
  output: {
    path: 'assets',
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  resolve: {
    extensions: ['.js']
  }
};
