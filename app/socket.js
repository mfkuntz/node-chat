

module.exports = function(http){
	var io = require('socket.io')(http);

	io.on('connection', function(socket){
		console.log('A user connected');
		socket.room = "/"
		socket.join(socket.room);

		socket.on('disconnect', function(){
			console.log('user disconnected');
		});

		socket.on('joinRoom', function(data){
			socket.leave(socket.room);
			socket.join(data);
			socket.room = data; //save the room for easy access later in this scope
			console.log("Room: " + socket.room);
		});

		socket.on('message', function(data){
			console.log('message: ' + data);
			socket.broadcast.to(socket.room).emit('message', data);
		});
	});
};

