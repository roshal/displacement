
const p__webpack_bundle_analyzer = require('webpack-bundle-analyzer')


module.exports = (env = {}, argv = {}) => {
	return {
		plugins: [
			new p__webpack_bundle_analyzer.BundleAnalyzerPlugin(),
		],
	}
}
source