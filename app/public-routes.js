var path = require('path');
var indexRedirect = require('./routes').indexRedirect;
module.exports = function(app){
	app.get('/', function(req,res){
		//If there is no access defined, redirect to /
		if (req.url != "/"){
			res.redirect("/");
			return;
		}

		//this file is in /app, need to go up to root dir
		indexRedirect(res);
	});	

	app.get('/login', function(req,res){

		indexRedirect(res);
	});
};
