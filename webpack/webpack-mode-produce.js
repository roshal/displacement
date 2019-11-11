
const p__terser_webpack_plugin = require('terser-webpack-plugin')


module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'production',
		devServer: {
			compress: true,
			https: true,
		},
		optimization: {
			minimizer: [
				new p__terser_webpack_plugin({
					extractComments: false,
					terserOptions: {
						cache: true,
						parallel: true,
						output: {
							comments: false,
						},
					},
				}),
			],
		},
	}
}
