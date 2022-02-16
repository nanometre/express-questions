const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');

app.use(express.static('resources'))

app.get('/', function(req,res){
    res.render('index.hbs')
})

app.get('/about-us', function(req,res){
    res.render('about-us.hbs')
})

app.get('/multiply/:left/:right', function(req,res){
    let left = parseInt(req.params.left);
    let right = parseInt(req.params.right);
    let multiply = (left * right).toString();
    res.render('results.hbs', {
        left: left,
        right: right,
        result: multiply,
    })
})

app.get('/gallery', function(req,res){
    let file_name = 'dog.jpg'
    res.render('gallery.hbs', {
        file_name: file_name,
    })
})



// this is so that we can test
module.exports = app;