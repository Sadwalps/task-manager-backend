//import dotenv
require('dotenv').config()

//import express
const express = require('express')

//import cors
const cors = require('cors')

//import router
const router = require('./router')

//import connection
require("./connection")

//create server
const tmserver = express()

//let the server to use cors
tmserver.use(cors())

//let the server to use express.json
tmserver.use(express.json())

tmserver.use(router)

//set port for the server
const PORT = 4000 || process.env.PORT

//make the server listen to that port
tmserver.listen(PORT, ()=>{
    console.log(`Server Running successfully at PORT ${PORT}`);
})

//Check the requests
tmserver.get('/', (req,res)=>{
    res.send(`Get Request Recieved`)
})

//post
// tmserver.post('/post', (req,res)=>{
//     res.send(`post Request Recieved`)
// })

//put
// tmserver.put('/put', (req,res)=>{
//     res.send(`put Request Recieved`)
// })

//delete
// tmserver.delete('/delete', (req,res)=>{
//     res.send(`delete Request Recieved`)
// })
