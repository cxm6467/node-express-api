const express = require('express');
const algorithims = require('../lib/algorithms');

function routes() {
  const router = express.Router();

  router.route('/')
    .get((req, res) => {
      const response = {
        "msg": "Welcome to the Algorithm Api.",
        "version" : "0.0.1"
      };
      return res.json(response);
    });

  router.route('/strings')
    .get((req, res) => {
      const response = algorithims.strings(req.query.algorithm, req.query.string);
      return res.json(response);
    });

  router.route('/arrays')
    .get((req, res) => {
      const response = algorithims.strings(req.query.algorithm, req.query.array);
      return res.json(response);
    });

  return router;
}

module.exports = routes;