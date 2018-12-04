const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const ROOT = path.resolve(__dirname, ".");

module.exports = (env = {}) => {
  const port = env.port || "3000";
  return {
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    devtool: "source-map",
    entry: path.resolve(ROOT, "client/main.js"),
    output: {
      filename: "bundle.js",
      path: path.resolve(ROOT, "client/dist"),
      publicPath: "/"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(ROOT, "client/index.html")
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: "babel-loader"
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      noInfo: false,
      port,
      publicPath: "/",
      quiet: false,
      stats: {
        assets: false,
        children: false,
        chunks: false,
        chunkModules: false,
        colors: true,
        entrypoints: false,
        hash: false,
        modules: false,
        timings: false,
        version: false
      }
    }
  };
};
