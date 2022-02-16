const express = require('express');
const hbs = require('hbs');
var helpers = require('handlebars-helpers')({
  handlebars: hbs.handlebars
});
const path = require('path');
let app = express();

app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, '/views'));
// app.use(express.static(path.join(__dirname, '/public')));

// YOUR CODE HERE
app.use(express.static('resources'));

app.get('/welcome/:image_no', function (req, res) {
  let image_no = parseInt(req.params.image_no);
  let file_name = '';
  if (image_no == 1) {
    file_name = 'apple.jpg';
  } else if (image_no == 2) {
    file_name = 'banana.jpg';
  } else if (image_no == 3) {
    file_name = 'cherry.jpg';
  } else {
    file_name = 'meatball.jpg';
  }

  res.render('welcome.hbs', {
    file: file_name,
  });

});

app.get('/todos', function (req, res) {
  const todos = [
    'Wash the toilet',
    'Clean the room',
    'Buy biscuit'
  ];

  res.render('todos.hbs', {
    item1:todos[0],
    item2:todos[1],
    item3:todos[2],
  })
})

module.exports = app;