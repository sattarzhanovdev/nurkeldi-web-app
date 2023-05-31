const $connectBtn = document.querySelector('.connectBtn')
const $first = document.querySelector('.firstPage')
const $demo = document.querySelector('.demoPage')
const $blocks = document.querySelector('.blocks')

let device;
let uuid;
let isConnected;
let bluetoothCharacteristic;


async function connectToDevice() {
  try {
    let result = navigator.bluetooth.requestDevice({acceptAllDevices: true}).then(res => {
      console.log(res.gatt)
      uuid = res.gatt.device.id
      isConnected = res.gatt.connected
    })
  
    device = result;

    const service = await server.getPrimaryService(uuid);

    bluetoothCharacteristic = await service.getCharacteristic(uuid);

  
    isConnected ? $connectBtn.setAttribute('style', 'display: none') : $connectBtn.setAttribute('style', 'display: block')
  }catch(e){
    alert('Попробуйте еще раз!')
  }
}

function turnOnAll() {
  $first.setAttribute('style', 'display: none')
  $blocks.setAttribute('style', 'display: flex')
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = 'v'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnDemo() {
  $first.setAttribute('style', 'display: none')
  $demo.setAttribute('style', 'display: flex')
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = 'D'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
    
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOffDemo() {
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = '*'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function backFromDemo(){
  $first.setAttribute('style', 'display: flex')
  $demo.setAttribute('style', 'display: none')
}

function backFromBlock(){
  $first.setAttribute('style', 'display: flex')
  $blocks.setAttribute('style', 'display: none')
}

