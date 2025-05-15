// Dalam contoh seperti dibawah ini, sehingga dapat mengatur lebih baik

const express = require('express');
const router = express.Router();

const userRoutes = require('./users');
const authRoutes = require('./auth')

router.use('/user', userRoutes);       // /api/users
router.use('/auth', authRoutes);     // /api/auth

// ... dan selanjutnya

module.exports = router;