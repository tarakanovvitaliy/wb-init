**Included**
* babel
* webpack-dev-server
* hot module replacement (HMR)

### nodemon
Restarting the development server by using nodemon monitoring tool, [as discussed here](https://github.com/webpack/webpack-dev-server/issues/440#issuecomment-205757892)

### npm scripts
```javascript
"scripts": {
  "start": "nodemon --watch webpack.config.js --exec 'webpack-dev-server --env development'",
  "production": "webpack --env production",
  "watch": "webpack --env watch"
}
```
