'use strict';
module.exports = function(app){
    const message = require('../controllers/messageController');

    app.route('/message')
    .get(message.list_all_messages)
    .post(message.create_a_message);

    app.route('message/:messageId')
    .delete(message.deleteMessage);
}