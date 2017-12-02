import express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainStore from '../views/store/MainStore'
import { StaticRouter } from 'react-router-dom';
import Login from '../views/components/login/loginContainer';
import { renderToString } from 'react-dom/server'
import ReactDOMServer from 'react-dom/server';
import Template from '../views/templates/template';

var router = express.Router();

// ENDPOINT: /login
// METHOD: GET
router.get('/', function(req, res) {
	//Initialize the data with the response from fetchJavaResponse - For now just sending a hash
	let preloadedState = { shipper: {view: "from_login_server"} }
	const store = createStore(MainStore, preloadedState)
	const temp = fetchJavaResponse ();
	const html = renderToString(
		<Provider store={store}>
			<StaticRouter context={store}>
				<Login/>
			</StaticRouter>
		</Provider>
		)
	res.send(Template(html, preloadedState));
});

function fetchJavaResponse () {
	//Make Java call here
}


module.exports = router;
