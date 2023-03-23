const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src", "index.html")
  })]
};