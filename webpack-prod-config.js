const path = require("path");
const merge = require('webpack-merge');
const  common = require('./webpack.common.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = merge(common, {
  mode : "production",
  /*devtool : "none",*/
  output : {
    /* filename: "hello.js",
    path : path.resolve(__dirname, "myfolder")*/
    /*filename: "main.js",*/
    filename: "main.[contentHash].js",
    path : path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin()
  ]

});
