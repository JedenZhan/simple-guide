const { smart } = require('webpack-merge'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  baseConfig = require('./webpack.config.base.js')

const devConfig = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    port: 8080,
    open: true,
    hot: true
  }
}

module.exports = smart(baseConfig, devConfig)