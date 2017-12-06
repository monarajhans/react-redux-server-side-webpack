import React, { Component } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import homepageStyles from './home.scss';

export default class HomePresenter extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = { message: "Welcome" }
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit() {
		//do something
	}

	render() {
		return (
			<div className="component">
				Home Presenter
				<p>Hello, {this.props.hello}!</p>
				  First name: <input type="text" name="fname" />
				  Last name: <input type="text" name="lname" />
				  <input type="submit" className="SubmitTest" onClick={ this.onSubmit } />
					<p>{ this.state.message }</p>
					<p>This is from Redux: { this.props.shipper }</p>
			</div>
		);
	}
}

// export default withStyles(homepageStyles)(HomePresenter);
