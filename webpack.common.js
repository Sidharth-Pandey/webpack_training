const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry : "./src/index.js",
  /*devtool : "none",*/
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
};
