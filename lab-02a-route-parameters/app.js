const express = require('express');
const app = express();

app.get('/header/:title', function(req, res){
    let title = req.params.title;
    res.send(`<h1>${title}</h1>`);
})

app.get('/add/:num1/:num2', function(req, res){
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let sum = (num1 + num2).toString();
    res.send(`${sum}`)
})

app.get('/shorten/:text', function(req,res){
    let text = req.params.text
    if (text.length < 11) {
        res.send(`${text}`)
    } else {
        res.send(`${text.slice(0, -3)}...`)
    }
})

module.exports = app;