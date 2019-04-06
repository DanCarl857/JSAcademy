const mysql = require('mysql');
const express = require('express');
const bodyParser =  require('body-parser');
const app = express();
const validator = require('express-validator');
const Sequelize = require('sequelize');
const socket = require('socket.io');
const cors = require('cors');
const route = require('./routes');

const port = process.env.PORT || 3000;


const http = require('http').Server(app);
const io = socket(http);
const Op = Sequelize.Op;


app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

//connection configurations
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'password',
    database:'chatApiDB'
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Db connection succeeded...");
    }else{
        console.log('Db connection failed! \n Error: ' + JSON.stringify(err, undefined, 2));
    }
});



// default route
app.get('/', (req,res)=>{
    return res.send({error: true, message: 'Hello'});
});


//get all users
app.get('/users', (req, res)=>{
    mysqlConnection.query('SELECT * FROM User', (err, rows, fields)=>{
        if(!err){
            res.send(rows);
            console.log(rows);
        }else{
            console.log(err);
        }
    });
});

app.use((req, res, next) => {
    req.Op = Op;
    res.io = io;
    next();
  });
app.use(bodyParser.json());
app.use(validator());
app.use(route);

http.listen(port, ()=>{
    console.log('Listening on port '+ port);
});

module.exports = app;