var usb = require('usb');

const device = usb.findByIds(8483, 4112)
if(device) {

    device.open();
    const interfaces = device.interfaces; 
    console.log('all interfaces', interfaces)

    interfaces.forEach(interface => {
        interface.claim();
    
        console.log('is active', interface.attachKernelDriver());
    
        console.log('interface #' + interface.interface, interface.endpoints);
    
        interface.release();
    })
} else {
    console.error('could not find device')
}