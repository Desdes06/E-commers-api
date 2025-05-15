const express = require('express');

const router = require('./routes/index.js');

const usermiddleware = require('./middleware/userMiddleware.js') 

const app = express();

app.use(usermiddleware);

app.use('/api/v1', router); // routes disimpan dalam satu tempat agar efisien

app.listen('4000', () =>{
    console.log('Server sedang berjalan di port 4000')
})