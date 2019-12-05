const path = require("path");
const merge = require('webpack-merge');
const  common = require('./webpack.common.js');
module.exports = merge(common, {
  mode : "development",
  /*devtool : "none",*/
  output : {
    /* filename: "hello.js",
    path : path.resolve(__dirname, "myfolder")*/
    /*filename: "main.js",*/
    filename: "[name].bundle.js",
    path : path.resolve(__dirname, "dist")
  }
});