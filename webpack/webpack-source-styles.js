import p__cssnano from 'cssnano'
//import p__mini_css_extract_plugin from 'mini-css-extract-plugin'
import p__postcss_easy_import from 'postcss-easy-import'
import p__precss from 'precss'
import {
	join as p__path__join,
} from 'path'
//
export default (env) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path__join(__dirname, '..', 'source', 'styles'),
						],
						test: [
							/\.sass$/,
						],
					},
					use: [
						//p__mini_css_extract_plugin.loader,
						{
							loader: 'file-loader',
							options: {
								name: '[name].css',
								//useRelativePath: true,
							},
						},
						{
							loader: 'extract-loader',
							options: {
								sourceMap: env.develop,
							},
						},
						{
							loader: 'css-loader',
							options: {
								//modules: true,
								//minimize: env.produce ? {
								//	discardComments: {
								//		removeAll: true,
								//	},
								//} : false,
								sourceMap: env.develop,
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
									...env.produce ? [
										p__cssnano({
											discardComments: {
												removeAll: true,
											},
										}),
									] : [],
								],
								sourceMap: env.develop,
							},
						},
					],
				},
			],
		},
		//plugins: [
		//	new p__mini_css_extract_plugin({
		//		filename: '[name].css',
		//		chunkFilename: '[id].css',
		//	}),
		//],
	}
}
