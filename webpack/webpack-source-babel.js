
const p__path = require('path')


module.exports = (env = {}, argv = {}) => {
	return {
		module: {
			rules: [
				{
					resource: {
						include: [
							p__path.resolve('source'),
						],
						test: [
							/\.js$/,
						],
					},
					use: [
						{
							loader: 'babel-loader',
							options: {
								babelrc: false,
								plugins: [
									'@babel/plugin-syntax-dynamic-import',
									'@babel/plugin-transform-runtime',
								],
								presets: [
									'@babel/preset-env',
									'@babel/preset-flow',
								],
							},
						},
					],
				},
				//	{
				//		enforce: 'pre',
				//		resource: {
				//			exclude: [
				//				/(?:\/|\\)node_modules(?:\/|\\)/,
				//			],
				//			include: [
				//				/\.js$/,
				//			],
				//		},
				//		use: [
				//			{
				//				loader: 'eslint',
				//				options: {
				//					ignore: false,
				//					useEslintrc: false,
				//					parser: 'babel-eslint',
				//					envs: [
				//						'browser',
				//					],
				//					rules: {
				//						'comma-dangle': [
				//							'error',
				//							'always-multiline',
				//						],
				//						'indent': [
				//							'error',
				//							'tab',
				//						],
				//						'no-mixed-spaces-and-tabs': [
				//							'error',
				//						],
				//						'no-unused-vars': [
				//							'warn',
				//						],
				//						'quotes': [
				//							'warn',
				//							'single',
				//						],
				//						'semi': [
				//							'error',
				//							'never',
				//						],
				//					},
				//				},
				//			},
				//		],
				//	},
			],
		},
	}
}
