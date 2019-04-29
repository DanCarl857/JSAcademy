'use strict';

const Message = require('../models/chatModel.js');

exports.list_all_messages = function(req, res){
    Message.getAllMessage(function(err, message){
        console.log('controller');
        if(err)
            res.send(err);
            console.log("res", message);
        res.send(message);
    });
};


exports.create_a_message = function(req, res){
    const new_message = new Message(req.body);

    if(!new_message.message || !new_message.user_id){
        res.status(400).send({error: true, message: "Please insert a message and your user_id"});
    }else{
        Message.createMessage(new_message, function(err, message){
            if(err){
                res.send(err)
            }else{
                res.json(message)
            }
        });
    }
};

exports.deleteMessage = function(req, res){
    Message.remove(req.params.messageId, function(err, message){
        if(err)
            res.send(err);
        res.json({message: 'Message successfully deleted'});
    })
}