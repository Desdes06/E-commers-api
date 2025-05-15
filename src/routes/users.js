const express = require('express');

const userController = require('../controller/usersController')
const userMiddleware = require('../middleware/userMiddleware')
const router = express.Router();

router.get('/', userController.getAllUsers);

// ketika ingin memberi middleware pada satu route saja
// dan bisa di tumpuk lagi contohnya:
// router.get('/user/information', [userMiddleware.isRegistered, middleware2] ,userController.getOneUser)

router.get('/user/information', [userMiddleware.isRegistered] ,userController.getOneUser)

module.exports = router;