import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes.jsx';
import { Provider } from 'react-redux';
import combinedReducers from '../views/reducers/combinedReducers'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(combinedReducers, preloadedState)

ReactDOM.render(
  <Provider store={store}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>, document.getElementById('root'))
