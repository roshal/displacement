
const p__path = require('path')

const m__alias = require('../alias')


module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'none',
		context: p__path.resolve('source'),
		entry: {
			'index': './sources/index.js',
		},
		output: {
			path: p__path.resolve('public'),
			publicPath: '/',
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
		resolveLoader: {
			extensions: [
				'.js',
			],
			modules: [
				p__path.resolve('node_modules'),
			],
		},
		devServer: {
			port: argv.port || 1024,
		},
	}
}
