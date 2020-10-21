module.exports = {
  chainWebpack: config => {
    config.module
      .rule('file-loader')
      .test(/\.(gif|png|jpe?g|svg)$/i)
      .use('file-loader')
        .loader('image-webpack-loader')
        .tap(options => {
          options = {
            ...options,
            // bypassOnDebug: true, // webpack@1.x
            // disable: true, // webpack@2.x and newer
          }
          return options
        })
  }
}
