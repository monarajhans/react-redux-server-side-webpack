import express from 'express'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from './webpack/webpack.development.config.js'
import webpack from 'webpack'

var path = require("path");
var page = require("./server/page.generated.js");
var stats = require("./server/stats.generated.json");

const app = express()
const port = 3000
const compiler = webpack(config);

app.use('/assets', express.static('./assets'))
app.use(webpackDevMiddleware(compiler, {
	publicPath: "/assets/",
}));

app.use(express.static(path.join(__dirname, "public")));

const home = require('./routes/home.js');
app.use('/', home);

app.listen(port)
