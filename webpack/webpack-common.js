//
import p__webpack_stylish from 'webpack-stylish'
//
import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		context: p__path__join(__dirname, '..', 'source'),
		entry: {
			'source': './scripts/sources/source.js',
		},
		output: {
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
			alias: {
				'': p__path__join(__dirname, '..', 'source', 'scripts'),
			},
			extensions: [
				'.js',
			],
			modules: [
				p__path__join(__dirname, '..', 'node_modules'),
			],
		},
		plugins: [
			new p__webpack_stylish(),
		],
	}
}
