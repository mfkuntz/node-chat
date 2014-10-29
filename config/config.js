var hostDNSName = 'http://chat-mfkuntz.rhcloud.com';
const localHost = '127.0.0.1';
module.exports = function(){

	var port = process.env.OPENSHIFT_NODEJS_PORT || 8090;
	var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

	if(ip == localHost){

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
				user : "adminwriqzjg",
				pass : "JUPA_RU4siaq",
				db : "chat"
			}
		};

	}else{
		return{
			server :{
				ip : ip,
				port : port,
				url : hostDNSName,
				local : false	
			},
			database : {
				ip : process.env.OPENSHIFT_POSTGRESQL_DB_HOST,
				port : process.env.OPENSHIFT_POSTGRESQL_DB_PORT,
				user : process.env.OPENSHIFT_POSTGRESQL_DB_USERNAME,
				pass : process.env.OPENSHIFT_POSTGRESQL_DB_PASSWORD,
				db : "chat"
			}
			
		};
	}

};