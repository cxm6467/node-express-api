const express = require('express');

const app = express();

//Routers
const arrayRouter = express.Router();
const stringRouter = express.Router();

const baseAlgorithmApiPath = '/api/algorithms';

//Routes
arrayRouter.route('/arrays')
    .get((req, res) => {
        const response = {
            msg: "Hello from array router."
        };        
        return res.json(response);
    });

stringRouter.route('/strings')
    .get((req, res) => {
        const response = {
            msg: "Hello from string router."
        };
        return res.json(response);
    });

//Hook up routers to Express
app.use(baseAlgorithmApiPath, arrayRouter);
app.use(baseAlgorithmApiPath, stringRouter);

//  Set listen port
app.listen(4444);