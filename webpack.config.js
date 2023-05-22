const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use: 'babel-loader',
      }
    ]
  }
};