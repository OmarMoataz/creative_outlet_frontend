const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge({
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js"
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "https://creative-outlet-api.herokuapp.com"
    })
  }
}, common);
