'use strict';

const mysql = require('mysql');

//local mysql database connection

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ChatAPI'
});

connection.connect(function(err){
    if(err) throw err;
});

module.exports = connection;