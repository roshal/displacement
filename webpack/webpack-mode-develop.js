
module.exports = (env = {}, argv = {}) => {
	return {
		mode: 'development',
		devtool: 'source-map',
		//optimization: {
		//	splitChunks: {
		//		chunks: 'all',
		//		name(module, chunks, key) {
		//			const value = chunks.map((object) => {
		//				return object.name
		//			}).join(',')
		//			return ['split', value, key].join('.')
		//		},
		//	},
		//	runtimeChunk: {
		//		name: (entrypoint) => {
		//			return ['runtime', entrypoint.name].join('.')
		//		},
		//	},
		//},
	}
}
