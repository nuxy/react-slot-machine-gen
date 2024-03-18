const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path                 = require('path');

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  mode: 'development',
  output: {
    path: 'assets',
    filename: 'bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'bundle.css'})
  ],
  resolve: {
    extensions: ['.js']
  }
};
