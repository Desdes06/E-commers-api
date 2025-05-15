const express = require('express');

const userController = require('../controller/usersController')

const router = express.Router();

router.get('/', userController.getAllUsers);

module.exports = router;