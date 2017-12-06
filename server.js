import express from 'express'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from './webpack/webpack.development.config.js'
import webpack from 'webpack'

const app = express()
const port = 3000
const compiler = webpack(config);

app.use('/assets', express.static('./assets'))
app.use(webpackDevMiddleware(compiler, {
	publicPath: "/assets/",
}));

const home = require('./routes/home.js');
app.use('/', home);

app.listen(port)
