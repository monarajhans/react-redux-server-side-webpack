import {compose, createStore, applyMiddleware, combineReducers} from 'redux';
import combinedReducers from '../reducers/combinedReducers';
import {createLogger} from 'redux-logger';
import initialShipmentState from './initial_states/initial_shipment_state';

export default(props, context) => {
    const initialState = {
      shipper: initialShipmentState(props)
    };
    let middleware;
    if (process.env.NODE_ENV === `development`) {
      middleware = applyMiddleware(createLogger());
    } else {
      middleware = applyMiddleware();
    }
    const composedStore = compose(middleware);
    return composedStore(createStore)(combinedReducers, initialState);
};
