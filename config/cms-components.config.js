const path = require('path');

module.exports = {
  // List all components that need to be compiled for CMS
  components: [
    {
      entry: './components/sections/rich-text.jsx',
      output: 'rich-text.js',
      name: 'RichText'
    },
    {
      entry: './components/markdown.jsx',
      output: 'markdown.js',
      name: 'Markdown'
    },
    // Add more components as needed
  ],
  
  // Shared webpack configuration
  webpack: {
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
              plugins: [
                // Add any necessary babel plugins
              ]
            }
          }
        }
      ]
    }
  }
}; 