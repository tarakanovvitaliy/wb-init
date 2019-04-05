const path = require('path')
const merge = require('webpack-merge')
const parts = require('./webpack.parts')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const main = merge([
  {
    entry: {
      main: './src/index.js'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.[hash].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'runJs',
        favicon: 'src/favicon.png'
      }),
    ]
  },
  parts.loadJS({include: path.join(__dirname, 'src')}),
])

const dev = merge([
  {
    devtool: 'inline-source-map',
  },
  parts.devServer({
    host: process.env.HOST,
    port: 3033,
  }),
])

const prod = merge([
  {
    plugins: [
      new CleanWebpackPlugin(),
    ]
  },
])

const watch = merge([
  {
    mode: 'development',
    watch: true,
    entry: {
      main: './src/index.js'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'runJs',
        favicon: 'src/favicon.png'
      }),
    ]
  },
  parts.loadJS({include: path.join(__dirname, 'src')}),
])

module.exports = mode => {
  switch (mode) {
    case 'production':
      return merge(main, prod, {mode})
    case 'development':
      return merge(main, dev, {mode})
    case 'watch':
      return watch
  }
}