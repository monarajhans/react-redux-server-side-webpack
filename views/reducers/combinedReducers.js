import { combineReducers } from 'redux';
import updateShipmentStateReducer from './shipment/updateShipmentStateReducer';

const combinedReducers = combineReducers({
  shipper: combineReducers({
    view: updateShipmentStateReducer,
  }),
});

export default combinedReducers;
