const $connectBtn = document.querySelector('.connectBtn')

function connectToDevice() {
  let device = navigator.bluetooth.requestDevice({acceptAllDevices: true}).then(res => console.log(res.gatt))

  let isConnected = device.gatt.connected

  isConnected ? $connectBtn.setAttribute('style', 'display: none') : $connectBtn.setAttribute('style', 'display: block')
}
