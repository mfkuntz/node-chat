var path = require('path');
var indexRedirect = require('./routes').indexRedirect;

var config = require('./config');

var expressJWT  =require('express-jwt');
var jwt = require('jsonwebtoken');
module.exports = function(app){

	app.get('/private/views/chat.html', function(req,res){
		res.sendFile('chat.html', {root : path.join(__dirname, '../private/views/')});
	});
 	
 	app.get("/chat", function(req,res){
 		indexRedirect(res);
 	});


 	app.use('/api', expressJWT({secret : config.jwtSecret}));

 	app.post('/login', function(req,res){

 		var profile = {
 			firstName : "John",
 			lastName : "Doe",
 			email : "john@doe.com",
 			id : 12345
 		};

 		var token = jwt.sign(profile, config.jwtSecret, {expiresInMinutes : 60});

 		res.json({token : token});

 	});
};