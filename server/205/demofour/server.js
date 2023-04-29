const express = require('express');
const es6Renderer = require('express-es6-template-engine'); 
const {checkAuth} = require ('./middleware'); // named import and importing auth info/module  

const server = express();
server.use(express.json()); // req and response make sure it's always json
server.use(checkAuth)// add middle ware thruoughout the entire applicaiton 


server.get('/heartbeat', checkAuth, (req, res) => {
  res.json({"is": "working"});
});

server.post('/auth/login',(req,res) =>{
res.send(`${req.body.username},${req.body.password}`);
});
server.listen(8080, () => {
  console.log('The server is listening at PORT 8080');
});
