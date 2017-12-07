import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Application from '../app/Application'
var styleCollector = require("./style-collector");

module.exports = function(req, scriptFilename, htmlElement) {

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
