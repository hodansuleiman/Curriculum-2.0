// import express
const express = require('express');
const cookieParser = require('cookie-parser')

const server = express();

//middleware to parse JSON 
server.use(express.json());

//middleware to parse JSON 
server.use(cookieParser());



server.get ('./', (req,res)=>{
    res.json({message:'You are at root'});
    });

// req.body example 
server.post('/body', (req,res)=>{
    console.log('body',req.body)
res.json({message:'You are at /body'});
});

//cookies example 
server.get ('/cookies', (req,res)=>{
    console.log('cookies',req.cookies)
res.json({message:'You are at /cookies'});
});
 

//params example 
server.get ('/params/:someRoute', (req,res)=>{
    console.log('params',req.params)
res.json({message:'You are at /params'});
});

//query example 
server.get ('/query', (req,res)=>{
    console.log('query',req.params)
res.json({message:'You are at /query'});
});
 
 
server.listen(8080,() =>{
console.log('The server is running at PORT 8080');
});