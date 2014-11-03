var chat = require('./chat');
var user = require('./user');
var read = require('./read');

module.exports = function(){

	chat.hasOne(user, {as : 'Sender'});

	chat.hasMany(read);
	chat.hasMany(user);
	read.hasMany(chat);
	read.hasMany(user);
	user.hasMany(chat);
	user.hasMany(read);

	// chat.sync({force : true}).error(function(error){
	// 	console.log("failed: ", error);
	// });

	// read.sync({force : true}).error(function(error){
	// 	console.log("failed: ", error);
	// });

	// user.sync({force : true}).error(function(error){
	// 	console.log("failed: ", error);
	// });
}


