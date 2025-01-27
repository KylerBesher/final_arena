const path = require('path');

module.exports = {
  entry: './src/admin/index.js',
  output: {
    path: path.resolve(__dirname, 'public/admin'),
    filename: 'cms.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify'),
    }
  }
}; 