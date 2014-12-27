const localHost = '127.0.0.1';
module.exports = function(){

	var port =  8090;
	var ip = "127.0.0.1";

	

	return {
		server : {
			ip : ip,
			port : port,
			url : 'http://' + ip + ':' + port,
			local : true
		},
		database : { 
			ip : localHost,
			port : 5432,
			user : "",
			pass : "",
			db : ""
		}
	};

	
	

};