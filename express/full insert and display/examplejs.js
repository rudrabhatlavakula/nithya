var mysql = require('mysql');
var nunjucks  = require('nunjucks');
var express   = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
 
var app       = express();
 
app.use(session({secret:'nithya'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 
nunjucks.configure('views', {
  autoescape: true,
  express   : app
});
 
app.get('/', function(req, res) {
 
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'wipro@123',
  database : 'mcclatchy'
});
 
connection.connect();

 
//connection.query('SELECT * from reg', function(err, rows, fields) {
 // if (!err)
 //   console.log('The solution is: ', rows);
 // else
//    console.log('Error while performing Query.');
//});
 
//connection.end();
  res.render('test.html', {
    title : 'Pass value to the next page'
  });
});
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'wipro@123',
  database : 'mcclatchy'
});
 
connection.connect();

app.post('/register', function(req, res) {
res.end('done');
});


app.get('/baseform', function(req, res) {
                res.render('baseform.html', {
					            uid:req.session.uid,
                                fname:req.session.fname,
                                lname:req.session.lname
                               
                });
               
});
app.post('/view',function(req,res){
	
	res.end('done');
});
app.get('/view',function(req,res){
	connection.query('select * from reg',function(err,row,fields){
		if(!err){
			res.render('view.html',{
			    hidden:row               
                });
		}
		else

		console.log("Error in the query");  
			});
connection.end();
});

app.post('/test', function(req, res) {
                var sess=req.session;
                sess.uid=req.body.uid;
                sess.fname=req.body.fname;
                sess.lname=req.body.lname;
               // console.log(req.body.email);
			    var uid=req.body.uid;
				console.log(sess.uid);
                var fname=req.body.fname;
                var lname=req.body.lname;
                connection.query('INSERT INTO reg VALUES('+req.body.uid+','+'"'+req.body.fname+'"'+','+'"'+req.body.lname+'"'+')'
                , function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
console.log(err);
});  
res.end('done');
});
 
 
 
 
app.get('/next', function(req, res) {
                res.render('next.html', {
					            uid:req.session.uid,
                                fname:req.session.fname,
                                lname:req.session.lname
                               
                });
               
});
 
app.listen(8080, function() {
                console.log("Listening on 8080");
});