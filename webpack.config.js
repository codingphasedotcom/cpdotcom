const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const UglifyJS = require('uglify-es');

const DefaultUglifyJsOptions = UglifyJS.default_options();
const compress = DefaultUglifyJsOptions.compress;
for (let compressOption in compress) {
	compress[compressOption] = false;
}
compress.unused = true;

module.exports = env => {
	return {
		entry: {
			BecomeDevForm: './assets/js/components/BecomeDevForm.js',
			ThankYou: './assets/js/components/ThankYou.js',
			// SApp: './assets/js/components/svelte/SvelteApp.js',
			main: './assets/js/main.js'
		},
		output: {
			path: path.resolve(__dirname, 'public/js/dist'),
			filename: '[name].js' // '[name].[chunkhash].js' put this if you want to get hashed files to cache bust
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader', 'prettier-loader']
				},
				{
					test: /\.svelte$/,
					exclude: /node_modules/,
					use: 'svelte-loader'
				},
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader',
						'postcss-loader'
					]
				}
			]
		},
		plugins: [new WebpackMd5Hash()],
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						test: '/[\\/]node_modules[\\/]',
						name: 'vendors',
						chunks: 'all'
					}
				}
			},
			// splitChunks: {
			// 	chunks: 'all',
			// 	minSize: 0
			// },
			minimize: true,
			minimizer: [
				new UglifyJsPlugin({
					uglifyOptions: {
						compress,
						mangle: false,
						output: {
							beautify: env.NODE_ENV !== 'production' ? true : false
						}
					}
				})
			],
			usedExports: true,
			sideEffects: true
		}
	};
};
