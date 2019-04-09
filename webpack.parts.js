const webpack = require('webpack')

exports.devServer = ({host, port} = {}) => ({
  devServer: {
    // stats: 'errors-only',
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    historyApiFallback: true,
    publicPath: '/',
    open: false,
    overlay: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})
exports.loadJS = ({include, exclude} = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        },
      },
    ],
  },
})