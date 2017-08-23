const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: 'custom-file-loader',
          options: {
            name: '[hash].[ext]',
            outputPath: 'images/'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    })
  ],
  resolveLoader: {
    alias: {
      'custom-file-loader': resolve(__dirname, 'custom-file-loader.js')
    }
  }
}
