import * as types from './actionTypes';

export default {
  updateShipmentState: (newState) => {
    return { type: types.UPDATE_SHIPMENT_STATE, payload: {view: newState} };
  }
}
