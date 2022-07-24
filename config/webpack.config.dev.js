const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  output: {
    filename: "script/[name].bundel.js",
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    static: "./dist",
    host: "127.0.0.1",
    port: 6060,
    hot: true,
    open: true,
    // BrowserRouter 出现 cannot get /xxx/xxx 路径时
    historyApiFallback: true
  },
  plugins: [
      // 打包分布图
      // new BundleAnalyzerPlugin(),
  ]
}