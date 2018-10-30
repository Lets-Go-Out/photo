const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',

  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', {
              'plugins': ['@babel/plugin-proposal-class-properties']
            }],
          },
        },
      },
    ],
  },
};
