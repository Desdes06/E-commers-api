const express = require('express');

const usersRoute = require('./routes/users.js');

const usermiddleware = require('./middleware/userMiddleware.js') 

const app = express();

app.use(usermiddleware);

app.use('/user', usersRoute);

app.listen('4000', () =>{
    console.log('Server sedang berjalan di port 4000')
})