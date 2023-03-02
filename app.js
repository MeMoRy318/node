const event = require('node:events');
const fs = require('node:fs/promises');
const path = require('node:path');

const eventEmitter = new event();

eventEmitter.on('click',(data)=>{
    console.log(data)
    console.log('hello world')
})

eventEmitter.once('clickAndDie',()=>{
    console.log('one click and die')
})

eventEmitter.emit('click',{name:'anton'});
eventEmitter.emit('clickAndDie');


// fs.writeFile(path.join(process.cwd()))