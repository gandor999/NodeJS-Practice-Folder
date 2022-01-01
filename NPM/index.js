const logEvents = require('./logEvents');

const EventEmitter = require('events');





class MyEmitter extends EventEmitter {};

// initialize objects

const myEmitter = new MyEmitter();


// add listenter for the log event
// maminaw ta sa announcement sa myEmitter.emit na naka pangalan ug log
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
	// Emit event
	// Pasabut ani kay mao ni ang atung e announce na naka pangalan ug log
	myEmitter.emit('log', 'Log event emitted');
}, 2000);  