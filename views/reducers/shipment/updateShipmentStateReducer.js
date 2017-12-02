import * as types from '../../actions/shipment/actionTypes'

export default function updateShipmentStateReducer(
  state='from_state', action) {
    switch (action.type) {
      case types.UPDATE_SHIPMENT_STATE:
        state = action.payload.view;
        break;
    }
    return state;
}
