var nunjucks  = require('nunjucks');
var express   = require('express');
var app       = express();

app.listen(8080);

nunjucks.configure('view', {
  autoescape: true,
  express   : app
});

app.get('/', function(req, res) {
  res.render('index.html', {
    title : 'login page',
    
  });
});