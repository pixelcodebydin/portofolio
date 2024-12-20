const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portofolio',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err.message);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = db;
