module.exports = {
    chainWebpack: config => {
      const imgRule = config.module.rule('images')
        imgRule.use('file-loader')
        .loader('image-webpack-loader')
        .tap(options => {
          const ret = options || {}
          ret.pngquant = {
            quality: [0.65, 0.90],
            speed: 4
          }
          return ret;
        })
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
    },
    '404': {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: '404.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
    },
  }
}
