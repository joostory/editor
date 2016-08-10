var path = require('path');
var webpack = require("webpack");

module.exports = {
	entry: [
		"./_js/index"
	],
	output: {
		path: path.join(__dirname, 'js'),
		filename: 'editor.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: [ 'babel-loader' ],
				exclude: /node_modules/,
				include: __dirname
			}
		]
	}

}
