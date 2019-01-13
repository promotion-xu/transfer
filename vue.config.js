const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.20.25.110:8087',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        }
      }
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  },
  pluginOptions: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {

            }
          },
          {
            loader: 'iview-loader',
            options: {
              prefix: false
            }
          },
          {
            
          }
        ]
      }
    ]
  },


}
