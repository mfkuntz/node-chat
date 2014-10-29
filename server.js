var express  = require('express');
var app      = express(); 	
var http = require('http').Server(app);

var  bodyParser = require('body-parser');
var io = require('socket.io')(http);
var morgan = require('morgan');


app.use(express.static(__dirname + '/public')); 
app.use(express.static(__dirname + '/private/controllers'));
app.use(morgan('dev')); //log requests to console


app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

require('./app/routes').createRoutes(app);

// io.on('connection', function(socket){
// 	console.log('A user connected');

// 	socket.on('disconnect', function(){
// 		console.log('user disconnected');
// 	});

// 	socket.on('message', function(msg){
// 		console.log('message: ' + msg);
// 		io.emit('message', msg);
// 	});
// });

var SQLize = require('sequelize');
var sql = new SQLize('chat', 'adminwriqzjg', 'JUPA_RU4siaq', {
	dialect : "postgres",
	port : 5432,
	host : '127.0.0.1'
});

sql.authenticate()
	.complete(function(err){
		if (!!err){
			console.log("Connect Failed: ", err);
		}else{
			console.log("Connected");
		}
	});



http.listen(8090);