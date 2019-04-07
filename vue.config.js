const path = require('path');
const px2rem = require('postcss-px2rem');
const postcss = px2rem({
  remUnit: 100, // need as same as lib/rem.js's baseSize
})
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.0.5.234:30080/engine/gateway-service',
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
      .set('components', resolve('src/Components'))
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
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }


}
