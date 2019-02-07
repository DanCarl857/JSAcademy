const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');
const bcrypt = require('bcryptjs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true} ));
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://127.0.0.1/login',{useNewUrlParser: true}, () => {

    console.log('connected')

})

app.post('/register', (req, res) => {

    const newUser = new User();

    newUser.email = req.body.email;
    newUser.password = req.body.password;

    bcrypt.genSalt(10, (err, salt) => {
        if(err) return err;

        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) return err;

            newUser.password = hash;

            newUser.save().then(userSaved => {

                res.send('USER SAVED');

            }).catch(err => {

                res.send(`User was not saved because ...` + err);

            });

        });

    });

});

app.post('/login', (req, res) => {

    User.findOne({email: req.body.email}).then(user => {

        if (user){
            bcrypt.compare(req.body.password, user.password, (err, matched )=> {
                if(err) return err;

                if(matched){
                    res.send('USER WAS ABLE TO LOG IN');
                }else{
                    res.send('USER WAS UNABLE TO LOG IN')
                }   
            });
        }
    });

});


app.listen(8080, () => {

    console.log('listening on port 8080');

});