import {
	join as p__path__join,
} from 'path'
//
export default () => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path__join(__dirname, '..', 'source', 'assets'),
						],
					},
					use: [
						{
							loader: 'file-loader',
							options: {
								context: p__path__join(__dirname, '..', 'source', 'assets'),
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
