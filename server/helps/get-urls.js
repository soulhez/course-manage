const mysql = require('mysql');

let db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '111111',
    database: 'course',
    connectionLimit: 15,
    queueLimit: 30,
    acquireTimeout: 1000000,
    port: 3306
});

db.connect(function (err) {
    if (err) {
        return;
    }
});

module.exports = db;