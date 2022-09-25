module.exports = {
  chainWebpack: (config) => {
       const oneOfsMap = config.module.rule('scss').oneOfs.store
       oneOfsMap.forEach((item) => {
           item
             .use("sass-resources-loader")
             .loader("sass-resources-loader")
             .options({
               // 可以使用数组的方式导入,数组里面的文件就可以全局使用了
               resources: [
               ],
             })
             .end();
       })
   }
}