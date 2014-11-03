var base =require('./base'); 
var sql = base.sqlConnection;
var SQL = base.sqlBase;
var moment = require('moment');

var Message = sql.define('Message', {
	sender : SQL.STRING, 
	reciever : SQL.STRING, 
	message : SQL.STRING
},{
	updatedAt : false,
	getterMethods : {
		createdAt : function(){
			var time = this.getDataValue("createdAt");
			console.log(time);
			var newDate = moment(time);
			
			return newDate.format("M/D/YY h:mm");
		}
	}
});

module.exports = Message;