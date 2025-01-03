const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
  , publicPath: process.env.VUE_APP_PUBLIC_PATH || '/'
  , configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json']
    }
    , cache: false
  }
})
