const slsw          = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

// Add error handling and source map support
const entries = Object.keys(slsw.lib.entries).reduce((acc, key) => ({
  ...acc,
  [key]: ["./_webpack/include.js", slsw.lib.entries[key]]
}), {});

module.exports = {
  entry: entries,
  target: 'node',
  // Generate sourcemaps for proper error messages
  devtool: 'source-map',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [nodeExternals()],
  // Run babel on all .js files and skip those in node_modules
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: __dirname,
      exclude: /node_modules/,
    }]
  }
};
