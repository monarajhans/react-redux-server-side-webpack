import React, { Component } from 'react';
import homepageStyles from './home.scss';

export default class Application extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		require("./home.css");
		return (
			<div className="application">
				<h1>Hello World</h1>
				<pre>{this.props.url}</pre>
				<img src={require("./image.png")} height="100" />
				<img src={require("./image.jpg")} height="100" />
			</div>
		);
	}
}
