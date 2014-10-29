var SQL = require('sequelize');
var sql = new SQL('chat', 'adminwriqzjg', 'JUPA_RU4siaq', {
	dialect : "postgres",
	port : 5432,
	host : '127.0.0.1'
});

module.exports.sqlConnection = sql;
module.exports.sqlBase = SQL;
