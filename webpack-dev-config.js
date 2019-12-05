const path = require("path");
const merge = require('webpack-merge');
const  common = require('./webpack.common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
  mode : "development",
  /*devtool : "none",*/
  output : {
    /* filename: "hello.js",
    path : path.resolve(__dirname, "myfolder")*/
    /*filename: "main.js",*/
    filename: "[name].bundle.js",
    path : path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin(
    {template: './src/template.html'}
  )],
  module : {
    rules : [
      {
        test : /\.scss$/,
        use: [
        "style-loader", //3. Inject styles into DOM
        "css-loader", //2. Turns css into commonjs
        "sass-loader" //1. Turns sass into css
      ]
    }
    ]
  }
});
