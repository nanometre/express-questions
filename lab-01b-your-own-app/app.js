const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('She sells seashells by the seashore');
})

app.get('/date/', function(req,res){
    let d = new Date();
    let dateString = d + '';
    res.send(dateString);
})

module.exports = app;