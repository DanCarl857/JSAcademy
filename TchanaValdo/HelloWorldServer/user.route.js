const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('./user');

router.post('/signup', (req, res, next)=>{
    bcrypt.hash(req.body.password, 10, (err, hash)=>{
        if(err){
            return res.status(500).json({error: err});
        }else{
            const user =  new User({
                _id: mongoose.Schema.Types.ObjectId(),
                email: req.body.email,
                password: hash
            });
            user.save()
            .then(result=>{
                console.log(result);
                res.status(201).json({
                    message: 'User Created'
                });
            })
            .catch(err=>{
                console.log(err);
                res.status(201).json({
                    error: err
                });
            });
        }
    });
});

module.exports = router;