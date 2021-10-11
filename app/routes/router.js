const express = require('express');

const strings = require('../lib/algorithms/strings/strings');
const arrays = require('../lib/algorithms/arrays/arrays');
const lists = require('../lib/data/lists');

function routes() {
  const router = express.Router();

  router.route('/')
    .get((req, res) => {
      const response = {
        msg: 'Welcome to the Algorithm Api.',
        version: '0.0.1',
      };
      return res.json(response);
    });

  router.route('/strings')
    .get((req, res) => {
      const response = strings(req.query.algorithm, req.query.input);
      return res.json(response);
    });

  router.route('/arrays')
    .get((req, res) => {
      const response = arrays(req.query.algorithm, req.query.input);
      return res.json(response);
    });

  router.route('/lists')
    .get((req, res) => {
      const response = lists();
      return res.json(response);
    });

  return router;
}

module.exports = routes;
