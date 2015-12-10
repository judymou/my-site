var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/client/entry',
  ],
  output: {
    path: __dirname + '/build/',
    filename: 'app.js',
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.optimize.DedupePlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?experimental',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style', 'css!sass!autoprefixer?browsers=last 2 versions'
        ),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"
      },
    ]
  }
}
