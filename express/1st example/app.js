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
    title : 'My First Nunjucks Page',
    items : [
      { name : '1 item' },
      { name : '2nd item' },
      { name : '3rd item' },
      { name : '4th item' },
    ]
  });
});