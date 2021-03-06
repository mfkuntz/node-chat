var path = require('path');
var indexRedirect = require('./routes').indexRedirect;

var config = require('./config');

// var expressJWT  =require('express-jwt');
// var jwt = require('jsonwebtoken');
module.exports = function(app){

	app.get('/private/views/chat.html', function(req,res){
		res.sendFile('chat.html', {root : path.join(__dirname, '../private/views/')});
	});
 	
 	app.get("/chat", function(req,res){
 		indexRedirect(res);
 	});


 	// app.use('/api', expressJWT({secret : config.jwtSecret}));

 	app.post('/login', function(req,res){

 		var profile = {
 			firstName : "John",
 			lastName : "Doe",
 			email : "john@doe.com",
 			id : 12345
 		};

 		// var token = jwt.sign(profile, config.jwtSecret, {expiresInMinutes : 60});

 		// res.json({token : token});

 	});

 	app.get('/api/chat/:id', function(req, res){
 		var Message = require('./models/chat');
 		if (req.params.id == -1){
 			Message.findAll()
 				.complete(function(err, data){
 					if (!!err){
 						console.log("eror: ", err);
 					}else{
 						console.log("Success: ", data.Values);
 						res.json(data);
 					}
 				});
 			
 			
 		}else{
 			Message.findAll({where : {reciever: req.params.id} })
 				.complete(function(err, data){
 					if (!!err){
 						console.log("eror: ", err);
 					}else{
 						console.log("Success: ", data.Values);
 						res.json(data);
 					}
 				});
 		}
 	});

 	app.post('/api/chat', function(req,res){
 		var Message = require('./models/chat');
 		Message.create(req.body).
 		success(function(message){
 			res.json(message);
 		});
 	});
};