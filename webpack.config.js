const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  devtool: "sourcemap",
  output: {
    publicPath: "/build/",
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" }
    ]
  },
  resolve: { extensions: [".js", ".jsx"] },
  devServer: {
    open: true,
    openPage: "index.html",
    inline: true,
    noInfo: true,
    port: 3000
  }
};
