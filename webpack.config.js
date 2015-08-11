var webpack = require('webpack');
var path = require('path');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

if (process.env.COMPRESS) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}

module.exports = {

	entry: './src/main.jsx',
	output: {
		filename: 'bundle.js',
		path: './dist'
	},

  externals: [
     {
       "react": 'React',
       "tessel-js": 'Tessel'
     }
  ],

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel?stage=0', exclude: /node_modules/ },
    ]
  },

  resolve: {
    root: [
      path.resolve("node_modules"),
      path.resolve("lib")
    ],
    extensions: ['', '.js', '.jsx',]
  },

  node: {
    Buffer: false
  },

  plugins: plugins,

  devtool: process.env.COMPRESS ? null : 'inline-source-map'

};
