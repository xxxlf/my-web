const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const toml = require("toml");
const yaml = require("yaml");
const json5 = require("json5");

module.exports = {
  entry: {
    index: "./src/index.js",
    // another: "./src/another.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    assetModuleFilename: "imagesss/[contenthash][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      inject: "body",
      title: "react app",
    }),
    new MiniCssExtractPlugin({
      filename: "style/index.[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jpg$/,
        type: "asset/resource",
        generator: {
          filename: "images/[contenthash][ext]",
        },
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.png$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024,
          },
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "style/[contenthash][ext]",
        },
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true,
            }
          }
        }],
        include: /src/,
      },
      {
        test: /\.(csv|tsv)$/,
        use: "csv-loader",
        include: /src/,
      },
      {
        test: /\.xml$/,
        use: "xml-loader",
        include: /src/,
      },
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        use: [
          {
            loader: "thread-loader",
            options: {
              workers: 2,
            },
          },
          {
            loader: "babel-loader",
            // options: {
            //   presets: ["@babel/preset-env"],
              // plugins: [["@babel/plugin-transform-runtime"]],
            // },
          },
        ],
      },
      {
        test: /\.toml$/,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors-node_modules",
          chunks: "all",
        },
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".js", ".jsx", "ts", ".tsx"],
  },
};
