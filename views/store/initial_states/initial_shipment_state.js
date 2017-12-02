export default function initialShipmentState(shipmentStarted) {
  return {
    view: shipmentStarted ? 'started' : 'not_started',
  };
}
