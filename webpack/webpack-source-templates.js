//
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
							p__path__join(__dirname, '..', 'source', 'templates'),
						],
						test: [
							/\.pug$/,
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].html',
							},
						},
						{
							loader: 'extract-loader',
							//	options: {
							//		publicPath: '/',
							//	},
						},
						{
							loader: 'html-loader',
							options: {
								attrs: [
									'link:href',
									//	'script:src',
								],
								//	interpolate: true,
								removeComments: true,
							},
						},
						{
							loader: 'pug-extract-loader',
						},
						{
							loader: 'pug-loader',
							options: {
								// deprecated
								pretty: env.develop ? '\t' : false,
							},
						},
					],
				},
			],
		},
	}
}
