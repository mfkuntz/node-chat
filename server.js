var express  = require('express');
var app      = express(); 	
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public')); 


app.get('*', function(req,res){
	res.sendfile('index.html'); 
});

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


http.listen(8080);