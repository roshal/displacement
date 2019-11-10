
const p__path = require('path')


export default () => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path.resolve('source', 'assets'),
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								context: p__path.resolve('source', 'assets'),
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
