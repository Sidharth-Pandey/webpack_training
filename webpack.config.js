const path = require("path");
module.exports = {

  entry : "./src/index.js",
  /*devtool : "none",*/
  output : {
    /* filename: "hello.js",
    path : path.resolve(__dirname, "myfolder")*/
    filename: "main.js",
    path : path.resolve(__dirname, "dist")
  }
};
