const path = require("path");
const merge = require('webpack-merge');
const  common = require('./webpack.common.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
//const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const TerserPlugin = require('terser-webpack-plugin');
module.exports = merge(common, {
  mode : "production",
  /*devtool : "none",*/
  output : {
    /* filename: "hello.js",
    path : path.resolve(__dirname, "myfolder")*/
    /*filename: "main.js",*/
    filename: "[name].[contentHash].bundle.js",
    path : path.resolve(__dirname, "dist")
  },
  optimization : {
    minimizer : [
      new TerserPlugin(),
      new HtmlWebpackPlugin({
       template: "./src/template.html",
       minify: {
         removeAttributeQuotes: true,
         collapseWhitespace: true,
         removeComments: true
       }
      })
    ]
  },
  plugins: [
   new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
   new CleanWebpackPlugin()
 ],
  module : {
    rules : [
      {
        test : /\.scss$/,
        use: [
        MiniCssExtractPlugin.loader, //3. Extract css into files
        "css-loader", //2. Turns css into commonjs
        "sass-loader" //1. Turns sass into css
      ]
    }
    ]
  }
});
