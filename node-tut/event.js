// Get the events module
const EventEmitter = require('events');

// Creating new instance
const customEmmiter = new EventEmitter()


// Register the code
customEmmiter.on('response', (id)=>{
    console.log(`data received: ${id}`);
    
});

// Trigger the event
customEmmiter.emit('response', 12)

// Register the code
customEmmiter.on('response', (name)=>{
    console.log(`some other data: ${name} `);
});

// Trigger the event
// this emit() will run for 1st event as well
customEmmiter.emit('response', 'waleed')