const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/one':{
        target:"http://10.30.1.7:8081",
        pathRewrite:{'^/one':''}
      },
      '/two':{
        target:'http://10.30.1.7:8085',
        pathRewrite:{'^/two':''}
      }
  }
}
})
