function connectToDevice() {
  navigator.bluetooth.requestDevice({acceptAllDevices: true, optionalServices: ['battery_service']})
}