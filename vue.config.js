const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8088, // 生产环境启动端口
  }
  //   proxy: {
  //     '/xxx': {
  //       target: 'http://xxx.xxx.x.xxx:8090',
  //       ws: true, // proxy websockets
  //       changOrigin: true, // 是否允许跨域
  //       pathRewrite: { // 重定向
  //         "^/xxx": ""
  //       }
  //     }
  //   }
  // },
})
