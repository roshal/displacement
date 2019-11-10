
const p__path = require('path')
const p__webpack_stylish = require('webpack-stylish')

const m__alias = require('../alias')


export default () => {
	return {
		context: p__path.resolve('source'),
		entry: {
			'source': './scripts/sources/source.js',
		},
		output: {
			path: p__path.resolve('public'),
			chunkFilename: 'scripts/[id].js',
			filename: '[name].js',
		},
		//	devServer: {
		//		historyApiFallback: {
		//			rewrites: [
		//				{
		//					to: '/source.html',
		//				},
		//			],
		//		},
		//		proxy: {
		//			'/api/': {
		//				changeOrigin: true,
		//				target: 'http://localhost:8080/api/',
		//			},
		//		},
		//	},
		resolve: {
			alias: m__alias,
			extensions: [
				'.js',
			],
			modules: [
				p__path.resolve('node_modules'),
			],
		},
		plugins: [
			new p__webpack_stylish(),
		],
	}
}
