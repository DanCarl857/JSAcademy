'use strict';
module.exports = function(app){
    const user = require('../controllers/appController');

    app.route('/user')
    .get(user.list_all_users)
    .post(user.create_a_user);

    app.route('user/:userId')
    .get(user.login)
    .delete(user.deleteUserAccount);
}