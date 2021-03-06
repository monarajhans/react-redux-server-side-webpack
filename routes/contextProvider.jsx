import s from '../views/components/home/home.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContextProvider extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
    }),
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
    };
  }

  componentWillMount() {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return <div id="context">{this.props.children}</div>
  }
}
export default ContextProvider;
