import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from "react-helmet";
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePresenter from './homePresenter';
import Menu from './menu/menu';
import updateShipmentActions from '../../actions/shipment/updateShipmentStateActions';

@connect(mapStateToProps, mapDispatchToProps)
export default class HomeContainer extends Component {
	constructor(props, context) {
    super(props, context)
	}

	render() {
		return (
			<div>
				<Helmet title="HomePage"/>
				<Menu />
				<HomePresenter hello={this.props.hello} shipper="{this.props.shipper}"/>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    shipper: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(updateShipmentActions, dispatch),
  };
}
