const express = require('express');
const router = express.Router();

const message = require('../controllers/message');
const middleware = require('../middlewares/auth');

router.get('/users',middleware.checkAuth,message.index);
router.post('/send/:id',middleware.checkAuth,message.send);
router.get('/show/:id',middleware.checkAuth,message.show);

module.exports = router;