var yaml = require('js-yaml');
var fs = require('fs');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

var handlerRegex = /\.[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
var include = './_webpack/include.js';
var entries = {};

var doc = yaml.safeLoad(fs.readFileSync('serverless.yml', 'utf8'));

// Find all the hanlder files in serverless.yml
// and build the entry array with them
for (var key in doc.functions) {
  var handler = doc.functions[key].handler;
  var entryKey = handler.replace(handlerRegex, '');

  // Add error handling and source map support
  entries[entryKey] = [include, './' + entryKey + '.js'];
}

module.exports = {
  // Use all js files in project root (except
  // the webpack config) as an entry
  entry: entries,
  target: 'node',
  // Generate sourcemaps for proper error messages
  devtool: 'source-map',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [nodeExternals()],
  // Run babel on all .js files and skip those in node_modules
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: __dirname,
      exclude: /node_modules/,
    }]
  },
  // We are going to create multiple APIs in this guide, and we are 
  // going to create a js file to for each, we need this output block
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  }
};
