import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import Helmet from "react-helmet";
import LoginPresenter from './loginPresenter';
import updateShipmentActions from '../../actions/shipment/updateShipmentStateActions';

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginContainer extends Component {
	constructor(props, context) {
    super(props, context)
	}

	render() {
		return (
				<LoginPresenter />
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
