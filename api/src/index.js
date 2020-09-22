const express = require('express');
const app = express();
const port = 3000;
const router = require('../src/routes/root')


app.use(router)





app.listen(port, function(){
    console.log('server connected')
    })
    