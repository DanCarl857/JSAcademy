const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 15,
        trim: true

    },

    password: {
        type: String,
        required: true,
        minlength: 5,
        hide: true
    }


});

module.exports = mongoose.model('users', UserSchema );