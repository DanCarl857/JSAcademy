'use strict';

const User = require('../models/userModel.js');

exports.list_all_users = function(req, res){
    User.getAllUser(function(err, user){
        console.log('controller');
        if(err)
            res.send(err);
            console.log("res", user);
        res.send(user);
    });
};


exports.create_a_user = function(req, res){
    const new_user = new User(req.body);

    if(!new_user.username || !new_user.email){
        res.status(400).send({error: true, message: "Please provide a username and an email"});
    }else{
        User.createUser(new_user, function(err, user){
            if(err){
                res.send(err)
            }else{
                res.json(user)
            }
        });
    }
};


exports.login = function(req, res){
    User.getUserById(req.params.userId, function(err, user){
        if(err){
            res.send(err);
        }else{
            res.json(user);
        }
    })
};

exports.deleteUserAccount = function(req, res){
    User.remove(req.params.userId, function(err, user){
        if(err)
            res.send(err);
        res.json({message: 'User account successfully deleted'});
    })
}