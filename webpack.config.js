const webpack = require('webpack');

module.exports = {
  entry: './app/index.jsx',
  output: {
    filename: 'js/app.js',
    path: 'www'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      exclude: /node_modules/,
      loaders: [
        'style',
        'css',
        'autoprefixer?browsers=last 3 versions',
        'sass?outputStyle=expanded'
      ]
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
      exclude: /node_modules/,
      loader: 'file?name=fonts/[name].[ext]'
    }, {
      test: /\.(jpeg|jpg|png)$/,
      exclude: /node_modules/,
      loader: 'file?name=images/[name].[ext]'
    }]
  }
};
