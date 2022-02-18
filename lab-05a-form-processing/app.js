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

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// YOUR CODE HERE
app.get('/form1', function(req,res){
  res.render('form1')
})

module.exports = app;