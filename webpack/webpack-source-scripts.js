//
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
						exclude: [
							p__path__join(__dirname, '..', 'node_modules'),
						],
						include: [
							p__path__join(__dirname, '..', 'source', 'scripts'),
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
