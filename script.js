const $connectBtn = document.querySelector('.connectBtn')
const $first = document.querySelector('.firstPage')
const $demo = document.querySelector('.demoPage')
const $blocks = document.querySelector('.blocks')
const $floorsFirst = document.querySelector('.floorFirstBlock')
const $floorsSecond = document.querySelector('.floorSecondBlock')
const $firstFlat = document.querySelector('.first')
const $secondFlat = document.querySelector('.second')
const $thirdFlat = document.querySelector('.third')
const $fourtFlat = document.querySelector('.fourth')

let device;
let uuid;
let isConnected;
let bluetoothCharacteristic;
let lastFloor;

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

function turnOnFirstBlock() {
  $blocks.setAttribute('style', 'display: none')
  $floorsFirst.setAttribute('style', 'display: flex')
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = '<'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}


function turnOnSecondBlock() {
  $blocks.setAttribute('style', 'display: none')
  $floorsSecond.setAttribute('style', 'display: flex')
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = '>'
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

function backFromFloor(){
  $blocks.setAttribute('style', 'display: flex')
  $floorsFirst.setAttribute('style', 'display: none')
  $floorsSecond.setAttribute('style', 'display: none')
}




function turnOnFirstFlat() {
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = 'z'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnSecondFlat() {
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = 'x'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnThirdFlat() {
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = 'c'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnFourthFlat() {
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = 'b'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}
