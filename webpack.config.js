const path = require("path");
module.exports = {
  mode : "development",
  entry : "./src/index.js",
  /*devtool : "none",*/
  output : {
    /* filename: "hello.js",
    path : path.resolve(__dirname, "myfolder")*/
    filename: "main.js",
    path : path.resolve(__dirname, "dist")
  },
  module : {
    rules : [
      {
        test : /\.css$/,
        use : ['style-loader','css-loader']
      /*  use : ['css-loader']*/
      }
    ]
  }
};
