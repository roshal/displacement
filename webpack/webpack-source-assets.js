
const p__path = require('path')


module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path.resolve('assets'),
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								context: p__path.resolve('assets'),
								name: '[name].[ext]',
								useRelativePath: true,
							},
						},
					],
				},
			],
		},
	}
}
