var SQL = require('sequelize');
var dbConfig = require('../../config/config')().database;

var sql = new SQL(dbConfig.db, dbConfig.user, dbConfig.pass, {
	dialect : "postgres",
	port : dbConfig.port,
	host : dbConfig.ip
});

module.exports.sqlConnection = sql;
module.exports.sqlBase = SQL;
