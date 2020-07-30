var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./app/index.js"],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(jpg|png|jpeg)/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nested"),
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.join(__dirname, "./app"),
      "shared-components": path.join(__dirname, "/app/_components"),
      helpers: path.join(__dirname, "/app/_helpers"),
      services: path.join(__dirname, "/app/_services"),
      "assets": path.join(__dirname, "/assets/")
    }
  },
}
