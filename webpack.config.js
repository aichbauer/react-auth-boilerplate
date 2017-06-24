const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    inline: true,
    contentBase: path.join(process.cwd(), 'dist'),
    port: 3000,
  },
  entry: path.join(process.cwd(), 'src', 'js', 'app.js'),
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'js/app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/index.html',
      },
    ]),
  ],
};
