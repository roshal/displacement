import p__webpack_stylish from 'webpack-stylish'
import {
	resolve as p__path__resolve,
} from 'path'
//
export default () => {
	return {
		context: p__path__resolve(__dirname, '..', 'source'),
		entry: {
			'source': './scripts/sources/source.js',
		},
		output: {
			chunkFilename: 'scripts/[id].js',
			filename: '[name].js',
			//publicPath: '/',
		},
		stats: false,
		devServer: {
			stats: 'none',
			historyApiFallback: {
				rewrites: [
					{
						to: '/source.html',
					},
				],
			},
			proxy: {
				'/api/': {
					changeOrigin: true,
					//pathRewrite: {
					//	'^/api/': '/',
					//},
					//target: 'https://roshal-server.herokuapp.com/',
					target: 'http://localhost:8080/api/',
				},
			},
		},
		resolve: {
			extensions: [
				'.js',
			],
			modules: [
				p__path__resolve(__dirname, '..', 'node_modules'),
			],
		},
		plugins: [
			new p__webpack_stylish(),
			//new webpack__optimize.CommonsChunkPlugin({
			//	children: true,
			//	filename: '[name].js',
			//	minChunks: Infinity,
			//	name: 'vendor',
			//}),
		],
	}
}
