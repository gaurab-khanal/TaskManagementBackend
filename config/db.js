require('dotenv').config({path: "../.env"});
const mysql = require('mysql2');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

console.log(process.env.DB_HOST)

const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});



module.exports = pool.promise();