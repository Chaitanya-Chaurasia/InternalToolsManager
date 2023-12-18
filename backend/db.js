var mysql = require("mysql");
const dotenv = require("dotenv").config();

var con = mysql.createConnection({
  host: process.env.AWS_MYSQL_RDS_HOST,
  user: process.env.AWS_MYSQL_RDS_USER,
  password: process.env.AWS_MYSQL_RDS_PASSWORD,
  database: process.env.AWS_MYSQL_RDS_DATABASE,
});
