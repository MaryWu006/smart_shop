// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://igo.cmhg8.com/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}