const { smart } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = smart(baseConfig, {
  mode: 'production',
  entry: './src/Step.js',

})