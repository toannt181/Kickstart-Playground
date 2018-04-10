/* eslint-disable */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const config = require('./webpack.config')

config.plugins = [
  new UglifyJsPlugin(),
  new HtmlWebpackPlugin({
    title: 'My App',
    template: path.resolve(__dirname, 'app/index.html')
  }),
]

module.exports = config
