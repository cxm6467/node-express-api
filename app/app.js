const express = require('express');
const app = express();

//  GET Request
app.get('/getTest', (req, res) => {
    res.json({
        msg : "This is awesome"
    });
});

//  POST Request
app.post('postTest', (req, res) => {});

//  Set listen port
app.listen(4444);
