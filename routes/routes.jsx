import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeContainer from '../views/components/home/homeContainer';
import AboutContainer from '../views/components/about/aboutContainer';
import LoginContainer from '../views/components/login/loginContainer';

export default function Routes() {
	return (
    <div>
			<Helmet
				htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
				titleTemplate="%s | React App"
				titleAttributes={{itemprop: "name", lang: "en"}}
				meta={[
					{name: "description", content: "Server side rendering example"},
					{name: "viewport", content: "width=device-width, initial-scale=1"},
				]}
			/>
			<Switch>
				<Route path="/" exact render={(props) => (<HomeContainer hello="world" {...props}/>)} />
				<Route path="/about" component={ AboutContainer } />
				<Route path="/login" component={ LoginContainer } />
			</Switch>
	  </div>
  );
}
