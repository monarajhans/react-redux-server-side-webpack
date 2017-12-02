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

var router = express.Router();

// ENDPOINT: /
// METHOD: GET
router.get('/', function(req, res) {
	//Initialize the data with the response from fetchJavaResponse - For now just sending a hash
	const css = new Set(); // CSS for all rendered React components
  // const context = { insertCss: (...styles) => styles.forEach(style => css.add(style._getCss())) };

	let preloadedState = { shipper: { view: "from_home_server" } }
	const store = createStore(MainStore, preloadedState)
	const temp = fetchJavaResponse ();
	const context = store;
	const html = renderToString(
		<Provider store={store}>
			{/* <ContextProvider className="container" context={context}> */}
			<StaticRouter context={context}>
				<Routes context={context} />
			</StaticRouter>
		{/* </ContextProvider> */}
		</Provider>
		)
	res.send(Template(html, preloadedState));
});

function fetchJavaResponse () {
	//Make Java call here
	// return { name: "Mona" }
}

module.exports = router;
