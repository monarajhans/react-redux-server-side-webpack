import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Template from '../views/templates/template';
import Routes from './routes.jsx';
//
export default function serverRenderer({ clientStats, serverStats }) {
	return (req, res, next) => {
		const context = {};
		// TODO: Add back-end controller to send some data to the view Ticket#SYM-49
		const markup = ReactDOMServer.renderToString(
			<StaticRouter location={ req.url } context={ context }>
				<Routes />
			</StaticRouter>
		);
    const helmet = Helmet.renderStatic();

		res.status(200).send(Template({
			markup: markup,
			helmet: helmet,
		}));
	};
}
