const express = require('express');

//Express
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0'

//Routers
const rootRouter = require('./routes/router')();

//Hook up router to Express
app.use("/", rootRouter);

//  Set listen port
app.listen(PORT, HOST);

//DEBUG
console.log(`Running on http://${HOST}:${PORT}`);