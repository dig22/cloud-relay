var Gpio = require('onoff').Gpio; 

var http = require("http");

var relay1GPIO = new Gpio(2, 'out');
var relay2GPIO = new Gpio(3, 'out');

var relay3GPIO = new Gpio(4, 'out');
var relay4GPIO = new Gpio(17, 'out');


relay1GPIO.writeSync(1);
relay2GPIO.writeSync(1);
relay3GPIO.writeSync(1);
relay4GPIO.writeSync(1);


let updateInterval = setInterval(() => {

    http.get({ host: '13.234.106.208', port: 3000, path: '/state', method: 'GET' }, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log(chunk);
            
            let data = JSON.parse(chunk); 
            console.log(data.relay1);
            relay1GPIO.writeSync(data.relay1);
            relay2GPIO.writeSync(data.relay2);
            relay3GPIO.writeSync(data.relay3);
            relay4GPIO.writeSync(data.relay4);
        });


    });


}, 5000);
