// const event = require('node:events');
//
// const eventsEmitter = new event();
//
// eventsEmitter.on('click',(args)=>{
//     console.log(args)
// });
//
// console.log(eventsEmitter.eventNames());
//
// eventsEmitter.once('clickAndDie',(args)=>{
//     console.log(args)
// })
//
// eventsEmitter.emit('click','hello okten');
// eventsEmitter.emit('click1','hello world');

// const fs = require('node:fs');
// const path = require('node:path')

// fs.mkdir(path.join(process.cwd(),'components',),{recursive:true},(err)=>{
//     if (err) throw new Error(err.message)
// });

// fs.appendFile(path.join(process.cwd(),'components','text.txt'),'\n hello world',(err)=>{
//     if (err) throw new Error(err.message)
// });

// fs.readFile(path.join(process.cwd(),'components','text.txt'),(err, data)=>{
//     if (err) throw new Error(err.message)
//     fs.appendFile(path.join(process.cwd(),'components','text.txt'),data,()=>{
//         if (err) throw new Error(err.message)
//     })
// })

// const reedStream = fs.createReadStream(path.join(process.cwd(),'components','text.txt'));
// const writeStream = fs.createWriteStream(path.join(process.cwd(),'components','text2.txt'));
//
// // reedStream.on('data',(chunk)=>{
// // writeStream.write(chunk)
// // })
//
// const handelError = ()=>{
//     console.log('error');
//     reedStream.destroy()
//     writeStream.end('error while pending file')
// }
//
// reedStream.on('error',handelError).pipe(writeStream).on('error',handelError)


// const readStream = fs.createReadStream(path.join(process.cwd(),'components','text.txt'));
// const writeStream = fs.createWriteStream(path.join(process.cwd(),'components','text2.txt'));
//
// const handelError = ()=>{
//     console.log('Error pending file');
//     readStream.destroy();
//     writeStream.end('error while pending file')
// };
//
// readStream.on('error',handelError).pipe(writeStream).on('error',handelError)

const express = require('express');

const app = express();

const PORT = 5200;

app().listen(PORT,()=>{
    console.log('server worked')
})