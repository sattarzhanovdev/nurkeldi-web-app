const $connectBtn = document.querySelector('.connectBtn')

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
  if (characteristic && characteristic.writeValue) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    characteristic.writeValue(data)
      .then(() => {
        console.log('Text data sent: ' + text);
      })
      .catch((error) => {
        console.error('Error sending text data:', error);
      });
  } else {
    console.error('Characteristic not available for writing.');
  }
}



console.log(uuid);