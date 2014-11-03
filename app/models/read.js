var base =require('./base'); 
var sql = base.sqlConnection;
var SQL = base.sqlBase;


var Read = sql.define('Read', {
	read : SQL.BOOLEAN
});

module.exports = Read;