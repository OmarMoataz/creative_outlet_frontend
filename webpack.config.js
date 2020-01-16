var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./app/index.js"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  mode: "development",
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
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
      services: path.join(__dirname, "/app/_services")
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
