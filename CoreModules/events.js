const EventEmitter = require('events')
const eventEmitter = new EventEmitter();

eventEmitter.on('greet' ,(name) => {
    console.log(`helloo :${name}`);
    
})
eventEmitter.emit('greet' ,'ash')