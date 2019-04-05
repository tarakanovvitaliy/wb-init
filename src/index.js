import app from './app'

app()

if (module.hot) {
  module.hot.accept('./app.js', () => {
    app()
  })
}