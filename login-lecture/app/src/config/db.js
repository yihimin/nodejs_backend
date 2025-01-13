const mysql = require('mysql');

const db = mysql.createConnection({
    host : "login-lecture.cp6mu2es21ny.ap-northeast-2.rds.amazonaws.com",
    user : "admin",
    password : "wjsekgus718",
    database : "login_lecture",
});

db.connect();

module.exports = db;