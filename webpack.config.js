const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: [/\.scss$/, /\.css$/],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            // options: {
            //   modules: true
            // }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './dist/index.html'
  })]
};