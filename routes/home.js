import express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainStore from '../views/store/MainStore'
import { StaticRouter } from 'react-router-dom';
import Routes from './routes';
import { renderToString } from 'react-dom/server'
import ReactDOMServer from 'react-dom/server';
import Template from '../views/templates/template';
import ContextProvider from './contextProvider'
import Application from '../app/Application'
// import HomeContainer from '../views/components/home/homeContainer'

var styleCollector = require("../server/style-collector");

var router = express.Router();
var path = require("path");
var page = require("../server/page.generated.js");
var stats = require("../server/stats.generated.json");

// ENDPOINT: /home
// METHOD: GET
router.get('/', function(req, res) {
	let preloadedState = { shipper: { view: "from_home_server" } }
	const store = createStore(MainStore, preloadedState)
	const temp = fetchJavaResponse ();
	const context = store;
	// const htmlElement = <HomeContainer url={req.url}/>;
	// const htmlElement = renderToString(
	// 	<Provider store={store}>
	//  		{/* <StaticRouter context={context}> */}
	//  			<HomeContainer url={req.url}/>
	//  		{/* </StaticRouter> */}
	//  	</Provider>
	// 	)
	// res.send(Template(html, preloadedState));
	res.end(page(req, stats.assetsByChunkName.main));
});

function fetchJavaResponse () {
	//Make Java call here
	// return { name: "Mona" }
}

module.exports = router;
