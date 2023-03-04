const express = require('express');
// const {json} = require("express");

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 5100;
const users = [
    {name:'vasya',age:21,status:true},
    {name:'ivan',age:25,status:true},
    {name:'Ira',age:30,status:true},
    {name:'tanya',age:29,status:true},
    {name:'cocos',age:21,status:true},
    {name:'oleg',age:90,status:true},
]
app.listen(PORT,()=>{
    console.log(`server worked in ${PORT}`)
})
app.get('/welcome',(req, res)=>{
    res.send('Welcome')
    console.log('Welcome')
    res.end()
})

app.get('/users',(req, res)=>{
    res.status(200).json(users)
})

app.get('/users/:userId',(req, res)=>{
   const {userId} = req.params;
    res.status(200).json(users[+userId])
})

app.post('/users',(req, res)=>{
users.push(req.body);
res.status(201).json(req.body)
})