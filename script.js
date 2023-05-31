async function connectToDevice() {
  try {
    // Request Bluetooth device
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ services: ['<your_service_uuid>'] }]
    });

    // Connect to the device
    const server = await device.gatt.connect();

    // Get the primary service
    const service = await server.getPrimaryService('<your_service_uuid>');

    // Get the characteristic to control
    const characteristic = await service.getCharacteristic('<your_characteristic_uuid>');

    // Example: Write a value to the characteristic
    const data = new Uint8Array([0x01, 0x02, 0x03]); // Example data
    await characteristic.writeValue(data);

    console.log('Value written to the characteristic');
  } catch (error) {
    console.error('Error:', error);
  }
}