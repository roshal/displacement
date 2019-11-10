
const p__path = require('path')


export default () => {
	return {
		mode: 'development',
		devServer: {
			port: 80,
		},
		devtool: 'source-map',
	}
}
