var base =require('./base'); 
var sql = base.sqlConnection;
var SQL = base.sqlBase;


var Message = sql.define('Message', {
	sender : SQL.STRING, 
	reciever : SQL.STRING, 
	message : SQL.STRING
},{
	updatedAt : false
});

module.exports = Message;