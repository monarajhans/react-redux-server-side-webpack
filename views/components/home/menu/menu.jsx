import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
	render() {
		return (
			<div>
        <ul>
 					<li><Link to={'/'}>Homepage</Link></li>
 					<li><Link to={'/about'}>About</Link></li>
 				</ul>
			</div>
		);
	}
}
