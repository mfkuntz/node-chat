var express  = require('express');
var app      = express(); 	
var http = require('http').Server(app);

var  bodyParser = require('body-parser');

var morgan = require('morgan');


app.use(express.static(__dirname + '/public')); 
app.use(express.static(__dirname + '/private/controllers'));
app.use(morgan('dev')); //log requests to console


app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

require('./app/routes').createRoutes(app);

require('./app/socket')(http);

// clear table data
// var message = require('./app/models/chat');
// message.sync({force : true}).error(function(error){
// 	console.log("failed: ", error);
// });

// var newMessage = message.build({
// 	sender : "test3",
// 	reciever : "test4",
// 	message : "HELLO THERE MAN"
// })
// .save();

// require('./app/models/relations')();

var serverInfo = require('./config/config')().server;

http.listen(serverInfo.port, serverInfo.ip, function() {
    console.log('%s: Node server started on %s:%d ...',
                Date(Date.now() ), serverInfo.ip, serverInfo.port);
});