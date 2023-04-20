const express = require('express');

const mvps = require ('./mocks/mvps.json')
const server = express();

server.get('/mvps', (req,res) =>{
    res.json(mvps);
});

server.get('/mvps/:year', (req,res) => {
    const {year} = (`You have requested the year ${year}`);
            
});

   server.listen(8080,() => {
       console.log('the server is running at PORT 8080');
   });