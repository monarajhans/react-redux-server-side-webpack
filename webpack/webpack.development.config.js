const path = require('path');

module.exports = [
	{
		name: 'client',
		target: 'web',
		entry: './routes/client.jsx',
		output: {
			path: path.join(__dirname, '../public'),
			filename: 'client.js',
			publicPath: '/public/',
		},
		resolve: { extensions: ['.js', '.jsx'] },
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [{ loader: 'babel-loader' }]
				},
				{
					test: /\.scss$/,
					use: [{ loader: 'isomorphic-style-loader' },
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[name]__[local]___[hash:base64:5]',
								sourceMap: true
							}
						},
						{ loader: 'sass-loader' }]
				}
			],
		},
	},
	{
		name: 'server',
		target: 'web',
		entry: './routes/server_renderer.jsx',
		output: {
			path: path.join(__dirname, '../public'),
			filename: 'server.js',
			publicPath: '/public/',
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules\/)/,
					use: [{ loader: 'babel-loader' }]
				},
				{
					test: /\.scss$/,
					use: [{ loader: 'isomorphic-style-loader' },
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[name]__[local]___[hash:base64:5]',
								sourceMap: true
							}
						},
						{ loader: 'sass-loader' }]
				}
			],
		},
	},
];
