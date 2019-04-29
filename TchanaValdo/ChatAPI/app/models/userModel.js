'use strict';

const sql = require('./db');

//user object constructor

const User =  function(user){
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
};

User.createUser = function createUser(newUser, result){
    sql.query("INSERT INTO users set ?", newUser, function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

User.getUserById = function createUser(userId, result) {
    sql.query("Select username from users where id = ? ", userId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });
};

User.getAllUser = function getAllUser(result) {
    sql.query("Select * from users", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('users : ', res);  

             result(null, res);
            }
        });   
};

User.updateById = function(id, task, result){
    sql.query("UPDATE users SET username = ? WHERE id = ?", [user.username, id], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
};

User.remove = function(id, result){
    sql.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {

               if(err) {
                   console.log("error: ", err);
                   result(null, err);
               }
               else{
              
                result(null, res);
               }
           }); 
};

module.exports= User;
