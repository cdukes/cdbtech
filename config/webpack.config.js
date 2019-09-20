/* globals module, require, __dirname */

const path = require(`path`),
	{ VueLoaderPlugin } = require(`vue-loader`);

module.exports = (env, argv) => {
	const config = {
		entry: {
			scripts: `./js/scripts.js`
		},
		output: {
			path: path.resolve(__dirname, `../static/build`),
			filename: `js/[name].js`,
			chunkFilename: `js/[id].js`
		},
		optimization: {
			minimize: false
		},
		plugins: [
			new VueLoaderPlugin()
		],
		module: {
			rules: [
				{
					test: /\.vue$/,
					exclude: /(node_modules)/,
					use: {
						loader: `vue-loader`
					}
				}
			]
		},
		performance: {
			hints: false
		},
		node: false
	};

	if( `production` === argv.mode ) {
		config.module.rules.push(
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: `babel-loader`,
					options: {
						presets: [`@babel/preset-env`]
					}
				}
			}
		);
	}

	return config;
};