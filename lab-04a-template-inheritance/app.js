const express = require('express');
const wax = require('wax-on');
const hbs = require('hbs');
var helpers = require('handlebars-helpers')({
  handlebars: hbs.handlebars
});
const path = require('path');
let app = express();

app.set('view engine', hbs);
app.set('views', path.join(__dirname, '/views'));

wax.on(hbs.handlebars);
wax.setLayoutPath(path.join(__dirname, '/views/layouts'))

// YOUR CODE HERE
app.get('/', function(req,res){
  res.render('index.hbs')
})

module.exports = app;