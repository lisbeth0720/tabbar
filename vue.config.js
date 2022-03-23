const webpack = require('webpack')
module.exports = {
    //部署应用包时的基本 URL
    publicPath: './',
    outputDir: 'dist',
    assetsDir: "static",
    indexPath: 'index.html',
    chainWebpack: config =>{
      config.plugin('html')
        .tap(args => {
          args[0].title = "03-tabbar";
          return args;
        })
    }
}
// module.exports = {
//   devServer: {
//     proxy: {  //配置跨域
//       '/api': {
//         target: 'http://192.168.1.145:8090/',  
//         changOrigin: true,  //允许跨域
//         pathRewrite: {
//           '^/api': '' 
//         }
//       },
//     }
//   },
// }