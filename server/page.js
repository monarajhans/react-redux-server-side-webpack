var Application = require("../app/Application");
var styleCollector = require("./style-collector");

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

module.exports = function(req, scriptFilename) {

	var html;
	var css = styleCollector.collect(function() {
		html = ReactDOMServer.renderToString(<Application url={req.url}/>);
	});
	return ReactDOMServer.renderToString(
		<html>
			<head>
				<style id="server-side-style" dangerouslySetInnerHTML={{__html: css}} />
			</head>
			<body>
				<div id="content" dangerouslySetInnerHTML={{__html: html}} />
				<script src={"assets/" + scriptFilename}></script>
			</body>
		</html>
	);
}
