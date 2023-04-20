const express = require('express');

const server = express();


// add response at root
// at root = server
//Every request that comes from a browser when you put in a URL is a GET request. This is the type of request that we are expecting from the client
// We are telling the server to listen to a get request at root (/) and the it takes a call back function 
// Within the call back we capture some data request and response  and use them  
//very simple server that reponds to a GET request at root
server.get('/', (req,res) => {
 res.json({message: "Hello World."}) // we are responding and sending back some json
 //res.send('Hello Universe.')
})
server.listen(8080,() => {
    console.log('the server is running at PORT 8080');
})