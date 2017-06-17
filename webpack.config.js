var config = {
	entry: './main.js',

	output: {
		path:__dirname.replace('config', 'dist'),
		filename: './index.js',
	},
	
	devServer: {
		inline: true,
		port: 8080
	},
	
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}

module.exports = config;