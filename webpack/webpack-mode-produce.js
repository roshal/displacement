
import p__uglifyjs_webpack_plugin from 'uglifyjs-webpack-plugin'
import p__webpack__optimize from 'webpack'


module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'production',
		devServer: {
			compress: true,
			https: true,
		},
		plugins: [
			new p__webpack__optimize.LimitChunkCountPlugin({
				maxChunks: 1,
			}),
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
