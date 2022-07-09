/*
 * @Description: 
 * @Author: wh
 * @Date: 2022-06-22 09:15:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 15:19:10
 */
const path = require('path');
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : './',
  // 输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  /** vue3.0内置了webpack所有东西，
   * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   **/
  chainWebpack: (config) => {
    // const svgRule = config.module.rule("svg");
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    // svgRule.uses.clear();
    // 添加要替换的 loader
    // svgRule
    //   .use("svg-sprite-loader")
    //   .loader("svg-sprite-loader")
    //   .options({
    //     symbolId: "icon-[name]",
    //     include: ["./src/icons"]
    //   });
  },
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'], // 自动添加文件名后缀
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@c': path.resolve(__dirname, './src/components')
      }
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps? 设置为 true 之后可能会影响构建的性能
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main.scss";`
      }
    }
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require('os').cpus().length > 1,
  /**
   *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    // hotOnly: false,
    /**
     * 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器
     * 多个接口跨域配置
     */
    proxy: {
      // 后台接口：http://old.web-jshtml.cn/api/cars
      [process.env.VUE_APP_API_LOGIN]: {
        target: process.env.VUE_API_DEV_LOGIN_TARGET, //API服务器的地址
        changeOrigin: true,
        // 开发环境下拼接成此样：/apiLogin/getCode/,匹配到/apiLogin就会替换成 VUE_API_DEV_LOGIN_TARGET/getCode/
        pathRewrite: {
          [`^${process.env.VUE_APP_API_LOGIN}`]: ''
        }
      },
      // 前台接口：http://old.web-jshtml.cn/api/cars/web
      [process.env.VUE_APP_API_WEB]: {
        target: process.env.VUE_API_DEV_WEB_TARGET, //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_API_WEB}`]: ''
        }
      },
    }
  },
  /**
   * 第三方插件配置
   */
  pluginOptions: {}
}