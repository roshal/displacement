
const p__webpack_merge = require('webpack-merge')


export default (env) => {
	return p__webpack_merge(
		require('./webpack-common'),
		require('./webpack-source-assets'),
		require('./webpack-source-scripts'),
		require('./webpack-source-postcss'),
		require('./webpack-source-pug'),
		env.analyze && require('./webpack-mode-analyze'),
		env.develop && require('./webpack-mode-develop'),
		env.produce && require('./webpack-mode-produce'),
	)
}
