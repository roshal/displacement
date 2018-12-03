//
import p__uglifyjs_webpack_plugin from 'uglifyjs-webpack-plugin'
//
import {
	join as p__path__join,
} from 'path'
import {
	optimize as p__webpack__optimize,
} from 'webpack'
//
export default () => {
	return {
		mode: 'production',
		devServer: {
			compress: true,
			https: true,
			port: 443,
		},
		output: {
			path: p__path__join(__dirname, '..', 'public'),
		},
		plugins: [
			new p__webpack__optimize.LimitChunkCountPlugin({
				maxChunks: 1,
			})
		],
		optimization: {
			minimizer: [
				new p__uglifyjs_webpack_plugin({
					parallel: true,
					uglifyOptions: {
						toplevel: true,
						output: {
							comments: false,
						},
					},
					//	extractComments: true,
				}),
			],
		},
	}
}
