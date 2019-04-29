'use strict';

const sql = require('./db');

//user object constructor

const Message =  function(message){
    this.id = message.id;
    this.message = message.message;
    this.user_id = user.user_id;
};

Message.createMessage = function createMessage(newMessage, result){
    sql.query("INSERT INTO messages set ?", newMessage, function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Message.getMessageById = function createMessage(messageId, result) {
    sql.query("Select message from messages where id = ? ", messageId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });
};

Message.getAllMessage = function getAllMessage(result) {
    sql.query("Select * from messages", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('messages : ', res);  

             result(null, res);
            }
        });   
};

module.exports= Message;
