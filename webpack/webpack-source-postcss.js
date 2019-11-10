
const p__cssnano = require('cssnano')
//	const p__mini_css_extract_plugin = require('mini-css-extract-plugin')
const p__path = require('path')
const p__postcss_easy_import = require('postcss-easy-import')
const p__precss = require('precss')


module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path.resolve('styles'),
						],
						test: [
							/\.sss$/,
						],
					},
					use: [
						//	p__mini_css_extract_plugin.loader,
						{
							loader: 'file-loader',
							options: {
								name: '[name].css',
								//	useRelativePath: true,
							},
						},
						{
							loader: 'extract-loader',
							options: {
								sourceMap: argv.develop,
							},
						},
						{
							loader: 'css-loader',
							options: {
								//	modules: true,
								//	minimize: argv.produce ? {
								//		discardComments: {
								//			removeAll: true,
								//		},
								//	} : false,
								sourceMap: argv.develop,
								importLoaders: 1,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								parser: 'sugarss',
								plugins: [
									p__postcss_easy_import({
										extensions: [
											'.sass',
										],
									}),
									p__precss(),
									...argv.produce ? [
										p__cssnano({
											discardComments: {
												removeAll: true,
											},
										}),
									] : [],
								],
								sourceMap: argv.develop,
							},
						},
					],
				},
			],
		},
		//	plugins: [
		//		new p__mini_css_extract_plugin({
		//			filename: '[name].css',
		//			chunkFilename: '[id].css',
		//		}),
		//	],
	}
}
