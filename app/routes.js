var path = require('path');

module.exports.createRoutes = function(app){

	//Use private routes first, they act as exceptions to the public routes
	require('./private-routes')(app);
	require('./public-routes')(app);
};

module.exports.indexRedirect = function(res){
	res.sendFile('index.html', {root : path.join(__dirname, "../")});
};
