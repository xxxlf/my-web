const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  output: {
    filename: "script/[name].[contenthash].bundel.js",
    publicPath: "/"
  },
  mode: "production",
  performance: {
    // false | "error" | "warning"
    hints: false
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  }
}