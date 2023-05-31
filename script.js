const $connectBtn = document.querySelector('.connectBtn')
const $first = document.querySelector('.firstPage')
const $demo = document.querySelector('.demoPage')
const $blocks = document.querySelector('.blocks')
const $floorsFirst = document.querySelector('.floorFirstBlock')
const $floorsSecond = document.querySelector('.floorSecondBlock')
const $flatFirstBlock = document.querySelector('.flatFirstBlock')
const $flatSecondBlock = document.querySelector('.flatSecondBlock')

const $firstFlat = document.querySelector('.first')
const $secondFlat = document.querySelector('.second')
const $thirdFlat = document.querySelector('.third')
const $fourtFlat = document.querySelector('.fourth')

const $firstFlat2 = document.querySelector('.first2')
const $secondFlat2 = document.querySelector('.second2')
const $thirdFlat2 = document.querySelector('.third2')
const $fourtFlat2 = document.querySelector('.fourth2')

const $firstPhotoA = document.querySelector('.firstFlatA')
const $secondPhotoA = document.querySelector('.secondFlatA')
const $thirdPhotoA = document.querySelector('.thirdFlatA')
const $fourthPhotoA = document.querySelector('.fourthFlatA')

const $firstPhotoB = document.querySelector('.firstFlatB')
const $secondPhotoB = document.querySelector('.secondFlatB')
const $thirdPhotoB = document.querySelector('.thirdFlatB')
const $fourthPhotoB = document.querySelector('.fourthFlatB')

let device;
let uuid;
let isConnected;
let bluetoothCharacteristic;
let lastFloor = 1;
let lastBlock;

function connectToDevice() {
  let result = navigator.bluetooth.requestDevice({acceptAllDevices: true}).then(res => {
    result.gatt.connect()
    console.log(res.gatt)
    uuid = res.gatt.device.id
    isConnected = res.gatt.connected
  })



  device = result;

  const service = server.getPrimaryService(uuid);

  bluetoothCharacteristic = service.getCharacteristic(uuid);


  isConnected ? $connectBtn.setAttribute('style', 'display: none') : $connectBtn.setAttribute('style', 'display: block')
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
  lastBlock = 1
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
  lastBlock = 2
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
  if(lastBlock == 1){
    $firstPhotoA.setAttribute('style', 'display: flex')
    $secondPhotoA.setAttribute('style', 'display: none')
    $thirdPhotoA.setAttribute('style', 'display: none')
    $fourthPhotoA.setAttribute('style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute('style', 'display: none')
    $firstPhotoB.setAttribute('style', 'display: none')
    $secondPhotoB.setAttribute('style', 'display: none')
    $thirdPhotoB.setAttribute('style', 'display: none')
    $fourthPhotoB.setAttribute('style', 'display: none')
  }else{
    $firstPhotoA.setAttribute('style', 'display: none')
    $secondPhotoA.setAttribute('style', 'display: none')
    $thirdPhotoA.setAttribute('style', 'display: none')
    $fourthPhotoA.setAttribute('style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute('style', 'display: none')
    $firstPhotoB.setAttribute('style', 'display: flex')
    $secondPhotoB.setAttribute('style', 'display: none')
    $thirdPhotoB.setAttribute('style', 'display: none')
    $fourthPhotoB.setAttribute('style', 'display: none')
  }

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
  if(lastBlock == 1){
    $firstPhotoA.setAttribute('style', 'display: none')
    $secondPhotoA.setAttribute('style', 'display: flex')
    $thirdPhotoA.setAttribute('style', 'display: none')
    $fourthPhotoA.setAttribute('style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute('style', 'display: none')
    $firstPhotoB.setAttribute('style', 'display: none')
    $secondPhotoB.setAttribute('style', 'display: none')
    $thirdPhotoB.setAttribute('style', 'display: none')
    $fourthPhotoB.setAttribute('style', 'display: none')
  }else{
    $firstPhotoA.setAttribute('style', 'display: none')
    $secondPhotoA.setAttribute('style', 'display: none')
    $thirdPhotoA.setAttribute('style', 'display: none')
    $fourthPhotoA.setAttribute('style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute('style', 'display: none')
    $firstPhotoB.setAttribute('style', 'display: none')
    $secondPhotoB.setAttribute('style', 'display: flex')
    $thirdPhotoB.setAttribute('style', 'display: none')
    $fourthPhotoB.setAttribute('style', 'display: none')
  }

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
  if(lastBlock == 1){
    $firstPhotoA.setAttribute('style', 'display: none')
    $secondPhotoA.setAttribute('style', 'display: none')
    $thirdPhotoA.setAttribute('style', 'display: flex')
    $fourthPhotoA.setAttribute('style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute('style', 'display: none')
    $firstPhotoB.setAttribute('style', 'display: none')
    $secondPhotoB.setAttribute('style', 'display: none')
    $thirdPhotoB.setAttribute('style', 'display: none')
    $fourthPhotoB.setAttribute('style', 'display: none')
  }else{
    $firstPhotoA.setAttribute('style', 'display: none')
    $secondPhotoA.setAttribute('style', 'display: none')
    $thirdPhotoA.setAttribute('style', 'display: none')
    $fourthPhotoA.setAttribute('style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute('style', 'display: none')
    $firstPhotoB.setAttribute('style', 'display: none')
    $secondPhotoB.setAttribute('style', 'display: none')
    $thirdPhotoB.setAttribute('style', 'display: flex')
    $fourthPhotoB.setAttribute('style', 'display: none')
  }
  
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
  if(lastBlock == 1){
    $flatFirstBlock.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute('style', 'display: none')

    $firstPhotoA.setAttribute('style', 'display: none')
    $secondPhotoA.setAttribute('style', 'display: none')
    $thirdPhotoA.setAttribute('style', 'display: none')
    $fourthPhotoA.setAttribute('style', 'display: flex')

    $firstPhotoB.setAttribute('style', 'display: none')
    $secondPhotoB.setAttribute('style', 'display: none')
    $thirdPhotoB.setAttribute('style', 'display: none')
    $fourthPhotoB.setAttribute('style', 'display: none')
  }else{
    $flatFirstBlock.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute('style', 'display: none')

    $firstPhotoA.setAttribute('style', 'display: none')
    $secondPhotoA.setAttribute('style', 'display: none')
    $thirdPhotoA.setAttribute('style', 'display: none')
    $fourthPhotoA.setAttribute('style', 'display: none')
    
    $firstPhotoB.setAttribute('style', 'display: none')
    $secondPhotoB.setAttribute('style', 'display: none')
    $thirdPhotoB.setAttribute('style', 'display: none')
    $fourthPhotoB.setAttribute('style', 'display: flex')
  }

  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = 'b'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}


function backFromFlatsFirst() {
  $flatFirstBlock.setAttribute('style', 'display: none')
  $floorsFirst.setAttribute('style', 'display: flex')
}


function backFromFlatsSecond() {
  $flatSecondBlock.setAttribute('style', 'display: none')
  $floorsSecond.setAttribute('style', 'display: flex')
}

function backFromMoreA() {
  $flatFirstBlock.setAttribute('style', 'display: flex')

  $firstPhotoA.setAttribute('style', 'display: none')
  $secondPhotoA.setAttribute('style', 'display: none')
  $thirdPhotoA.setAttribute('style', 'display: none')
  $fourthPhotoA.setAttribute('style', 'display: none')
}


function backFromMoreB() {
  $flatSecondBlock.setAttribute('style', 'display: flex')
  
  $firstPhotoB.setAttribute('style', 'display: none')
  $secondPhotoB.setAttribute('style', 'display: none')
  $thirdPhotoB.setAttribute('style', 'display: none')
  $fourthPhotoB.setAttribute('style', 'display: none')
}



function turnOnFirstFloor() {
  lastFloor = 1
  if(lastBlock == 1){
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $floorsSecond.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute( 'style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 1
    $secondFlat.innerHTML = 2
    $thirdFlat.innerHTML = 3
    $fourtFlat.innerHTML = 4
  }else{
    $floorsSecond.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute( 'style', 'display: flex')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')

    $firstFlat2.innerHTML = 57
    $secondFlat2.innerHTML = 58
    $thirdFlat2.innerHTML = 59
    $fourtFlat2.innerHTML = 60
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = '1'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnSecondFloor() {
  lastFloor = 2
  if(lastBlock == 1){
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $floorsSecond.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute( 'style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 5
    $secondFlat.innerHTML = 6
    $thirdFlat.innerHTML = 7
    $fourtFlat.innerHTML = 8
  }else{
    $floorsSecond.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute('style', 'display: flex')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat2.innerHTML = 61
    $secondFlat2.innerHTML = 62
    $thirdFlat2.innerHTML = 63
    $fourtFlat2.innerHTML = 64
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = '2'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnThirdFloor() {
  lastFloor = 3
  if(lastBlock == 1){
    $floorsSecond.setAttribute('style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $flatSecondBlock.setAttribute( 'style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 9
    $secondFlat.innerHTML = 10
    $thirdFlat.innerHTML = 11
    $fourtFlat.innerHTML = 12
  }else{
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute('style', 'display: flex')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat2.innerHTML = 65
    $secondFlat2.innerHTML = 66
    $thirdFlat2.innerHTML = 67
    $fourtFlat2.innerHTML = 68
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = '3'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnFourthFloor() {
  lastFloor = 4
  if(lastBlock == 1){
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $floorsSecond.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute( 'style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 13
    $secondFlat.innerHTML = 14
    $thirdFlat.innerHTML = 15
    $fourtFlat.innerHTML = 16
  }else{
    $flatSecondBlock.setAttribute('style', 'display: flex')
    $floorsSecond.setAttribute('style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat2.innerHTML = 69
    $secondFlat2.innerHTML = 70
    $thirdFlat2.innerHTML = 71
    $fourtFlat2.innerHTML = 72
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = '4'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}


function turnOnFifthFloor() {
  lastFloor = 5
  if(lastBlock == 1){
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $flatSecondBlock.setAttribute( 'style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 17
    $secondFlat.innerHTML = 18
    $thirdFlat.innerHTML = 19
    $fourtFlat.innerHTML = 20
  }else{
    $flatSecondBlock.setAttribute('style', 'display: flex')
    $floorsSecond.setAttribute('style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat2.innerHTML = 73
    $secondFlat2.innerHTML = 74
    $thirdFlat2.innerHTML = 75
    $fourtFlat2.innerHTML = 76
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = '5'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnSixthFloor() {
  lastFloor = 6
  if(lastBlock == 1){
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $floorsSecond.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute( 'style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 21
    $secondFlat.innerHTML = 22
    $thirdFlat.innerHTML = 23
    $fourtFlat.innerHTML = 24
    
  }else{
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute('style', 'display: flex')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat2.innerHTML = 77
    $secondFlat2.innerHTML = 78
    $thirdFlat2.innerHTML = 79
    $fourtFlat2.innerHTML = 80
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = '6'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnSeventhFloor() {
  lastFloor = 7
  if(lastBlock == 1){
    $floorsSecond.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute( 'style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 25
    $secondFlat.innerHTML = 26
    $thirdFlat.innerHTML = 27
    $fourtFlat.innerHTML = 28
  }else{
    $flatSecondBlock.setAttribute('style', 'display: flex')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')
    
    $firstFlat2.innerHTML = 81
    $secondFlat2.innerHTML = 82
    $thirdFlat2.innerHTML = 83
    $fourtFlat2.innerHTML = 84
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = '7'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnEighthFloor() {
  lastFloor = 8
  if(lastBlock == 1){
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $flatSecondBlock.setAttribute( 'style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 29
    $secondFlat.innerHTML = 30
    $thirdFlat.innerHTML = 31
    $fourtFlat.innerHTML = 32
  }else{
    $flatSecondBlock.setAttribute('style', 'display: flex')
    $floorsSecond.setAttribute('style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat2.innerHTML = 85
    $secondFlat2.innerHTML = 86
    $thirdFlat2.innerHTML = 87
    $fourtFlat2.innerHTML = 88
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = '8'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnNinthFloor() {
  lastFloor = 9
  if(lastBlock == 1){
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $flatSecondBlock.setAttribute( 'style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 33
    $secondFlat.innerHTML = 34
    $thirdFlat.innerHTML = 35
    $fourtFlat.innerHTML = 36
  }else{
    $flatSecondBlock.setAttribute('style', 'display: flex')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat2.innerHTML = 89
    $secondFlat2.innerHTML = 90
    $thirdFlat2.innerHTML = 91
    $fourtFlat2.innerHTML = 92
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = '9'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnTenthFloor() {
  lastFloor = 10
  if(lastBlock == 1){
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $flatSecondBlock.setAttribute( 'style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 37
    $secondFlat.innerHTML = 38
    $thirdFlat.innerHTML = 39
    $fourtFlat.innerHTML = 40
  }else{
    $flatSecondBlock.setAttribute('style', 'display: flex')
    $floorsSecond.setAttribute('style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat2.innerHTML = 93
    $secondFlat2.innerHTML = 94
    $thirdFlat2.innerHTML = 95
    $fourtFlat2.innerHTML = 96
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = 't'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnEleventhFloor() {
  lastFloor = 11
  if(lastBlock == 1){
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $floorsSecond.setAttribute('style', 'display: none')
    $flatSecondBlock.setAttribute( 'style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 41
    $secondFlat.innerHTML = 42
    $thirdFlat.innerHTML = 43
    $fourtFlat.innerHTML = 44
  }else{
    $flatSecondBlock.setAttribute('style', 'display: flex')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')

    $firstFlat2.innerHTML = 97
    $secondFlat2.innerHTML = 98
    $thirdFlat2.innerHTML = 99
    $fourtFlat2.innerHTML = 100
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = 'e'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnTwelvesFloor() {
  lastFloor = 12
  if(lastBlock == 1){
    $flatSecondBlock.setAttribute( 'style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $floorsSecond.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 45
    $secondFlat.innerHTML = 46
    $thirdFlat.innerHTML = 47
    $fourtFlat.innerHTML = 48
  }else{
    $flatSecondBlock.setAttribute('style', 'display: flex')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')

    $firstFlat2.innerHTML = 101
    $secondFlat2.innerHTML = 102
    $thirdFlat2.innerHTML = 103
    $fourtFlat2.innerHTML = 104
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = 'w'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}


function turnOnThirteenthFloor() {
  lastFloor = 13
  if(lastBlock == 1){
    $flatSecondBlock.setAttribute( 'style', 'display: none')
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $floorsFirst.setAttribute('style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 49
    $secondFlat.innerHTML = 50
    $thirdFlat.innerHTML = 51
    $fourtFlat.innerHTML = 52
  }else{
    $flatSecondBlock.setAttribute('style', 'display: flex')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')

    $firstFlat2.innerHTML = 105
    $secondFlat2.innerHTML = 106
    $thirdFlat2.innerHTML = 107
    $fourtFlat2.innerHTML = 108
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = 'h'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}

function turnOnFourteenthFloor() {
  lastFloor = 14
  if(lastBlock == 1){
    $flatFirstBlock.setAttribute('style', 'display: flex')
    $flatSecondBlock.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')

    $firstFlat.innerHTML = 53
    $secondFlat.innerHTML = 54
    $thirdFlat.innerHTML = 55
    $fourtFlat.innerHTML = 56
  }else{
    $flatSecondBlock.setAttribute('style', 'display: flex')
    $flatFirstBlock.setAttribute('style', 'display: none')
    $floorsFirst.setAttribute('style', 'display: none')
    $floorsSecond.setAttribute('style', 'display: none')

    $firstFlat2.innerHTML = 109
    $secondFlat2.innerHTML = 110
    $thirdFlat2.innerHTML = 111
    $fourtFlat2.innerHTML = 112
  }
  
  if (bluetoothCharacteristic && bluetoothCharacteristic.writeValue) {
    const text = 'f'
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    bluetoothCharacteristic.writeValue(data)
  } else {
    console.error('Characteristic not available for writing.');
  }
}