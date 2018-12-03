//
export default {
	entry: {
		common: [
			'./common',
			'./favicon.png',
			'./index.pug',
			'./styles/common.sass',
			'multi-entry-loader?include=source/images/**/*.*!',
		],
	},
}
