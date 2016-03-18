var mysql = require('mysql');
var nunjucks  = require('nunjucks');
var express   = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app       = express();


app.use(session({secret:'tanveer'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

nunjucks.configure('views', {
  autoescape: true,
  express   : app
});

app.get('/', function(req, res) {
	

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'wipro@123',
  database : 'mcclatchy'
});

connection.connect();

connection.query('SELECT * from reg', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end(); 
  res.render('test.html', {
    title : 'Pass value to the next page'
  });
});

app.post('/test', function(req, res) {
	var sess=req.session;
	sess.fname=req.body.fname;
	res.end('done');
});

app.get('/next', function(req, res) {
	//var sess=req.session;
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'wipro@123',
});

	res.render('next.html', {
		firstname:req.session.fname
	});
});

app.listen(8080, function() {
	console.log("Listening on 8080");
});