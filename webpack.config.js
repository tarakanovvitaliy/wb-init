const path = require('path')
const merge = require('webpack-merge')
const parts = require('./webpack.parts')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const commonConfig = merge([
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
const developmentConfig = merge([
  {
    output: {
      publicPath: '/',
    },
    devtool: 'inline-source-map',
  },
  parts.devServer({
    host: process.env.HOST,
    port: 3011,
  }),
])
const productionConfig = merge([
  {
    plugins: [
      new CleanWebpackPlugin(),
    ]
  },
])
module.exports = mode => {
  if (mode === 'production')
    return merge(commonConfig, productionConfig, {mode})

  else if (mode === 'development')
    return merge(commonConfig, developmentConfig, {mode})
}