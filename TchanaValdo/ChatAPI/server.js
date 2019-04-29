const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const mysql = require('mysql');

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ChatAPI'
});

mc.connect();

app.listen(port, ()=>{
    console.log('Server listening on port ', port);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const userRoutes = require('./app/routes/appRoute');
const messageRoutes = require('./app/routes/messageRoute');
userRoutes(app);
messageRoutes(app);