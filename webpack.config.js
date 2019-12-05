const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode : "development",
  entry : "./src/index.js",
  /*devtool : "none",*/
  output : {
    /* filename: "hello.js",
    path : path.resolve(__dirname, "myfolder")*/
    /*filename: "main.js",*/
    filename: "main.[contentHash].js",
    path : path.resolve(__dirname, "dist")
  },
  plugins: [
  //  new HtmlWebpackPlugin()
    new HtmlWebpackPlugin(
     {template: './src/template.html'}
  )
],
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
};
