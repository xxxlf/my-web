// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { PORT } = require("./base");

module.exports = {
  output: {
    filename: "script/[name].bundel.js",
    publicPath: "/"
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    static: "../docs",
    host: "127.0.0.1",
    port: PORT,
    // hot: true,
    open: true,
    // BrowserRouter 出现 cannot get /xxx/xxx 路径时
    historyApiFallback: true,
    client: {
      logging: 'none',
    },
  },
  plugins: [
      // 打包分布图
      // new BundleAnalyzerPlugin(),
  ]
}