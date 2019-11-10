
const m__alias = require('./alias')


module.exports = {
	presets: [
		'@babel/preset-env',
	],
	plugins: [
		[
			'babel-plugin-module-resolver',
			{
				alias: m__alias,
			},
		],
	],
}
