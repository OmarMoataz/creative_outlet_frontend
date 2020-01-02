var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  mode: "development",
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.join(__dirname, "./app")
    }
  },
  devServer: {
    historyApiFallback: true
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:3000"
    })
  }
};
