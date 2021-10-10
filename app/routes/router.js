const express = require('express');

function routes() {
  const router = express.Router();

  router.route('/api')
    .get((req, res) => {
      const response = {
        msg: "Hello from Root."
      };
      return res.json(response);
    });

  router.route('/strings')
  .get((req, res) => {
    const response = {
      msg: "Hello from string router."
    };
    return res.json(response);
  });

  router.route('/arrays')
  .get((req, res) => {
    const response = {
      msg: "Hello from array router."
    };
    return res.json(response);
  });
  
  return router;
}

module.exports = routes;