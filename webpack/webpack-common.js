
const p__path = require('path')

const m__alias = require('../alias')


module.exports = (env = {}, argv = {}) => {
	return {
		context: p__path.resolve('source'),
		entry: {
			'index': './sources/index.js',
		},
		output: {
			path: p__path.resolve('public'),
			chunkFilename: 'assets/[id].js',
			filename: '[name].js',
		},
		devServer: {
			port: argv.port || 1024,
		},
		resolve: {
			alias: m__alias,
			extensions: [
				'.js',
			],
			modules: [
				p__path.resolve('node_modules'),
			],
		},
	}
}
