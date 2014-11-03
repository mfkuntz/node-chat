var base =require('./base'); 
var sql = base.sqlConnection;
var SQL = base.sqlBase;


var User = sql.define('User', {
	name : SQL.STRING
});

module.exports = User;