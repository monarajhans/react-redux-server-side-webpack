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

const login = require('./routes/login.js');
app.use('/login', login);

//Setup Logger
const log4js = require('log4js');
log4js.configure({
	appenders: { info_log: { type: 'file', filename: 'logs/log_node.log' } },
    categories: { default: { appenders: ['info_log'], level: 'info' } }
});
const logger = log4js.getLogger('info_log');
//--
//Setup Debug Logger
logger.level = 'debug';
app.set('env','development');

if (app.get('env') === 'development') {
    logger.debug("This is a sample Debug");
}
//--

app.listen(port)
