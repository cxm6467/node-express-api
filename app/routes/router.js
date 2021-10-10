const express = require('express');

function routes() {
  const router = express.Router();

  router.route('/api')
    .get((req, res) => {
      const response = JSON.parse("{\"msg\": \"Hello from root\",\"input\": "+JSON.stringify(req.query)+"}");
      return res.json(response);
    });

  router.route('/strings')
  .get((req, res) => {
    const response = JSON.parse("{\"msg\": \"Hello from string\",\"input\": "+JSON.stringify(req.query)+"}");
    return res.json(response);
  });

  router.route('/arrays')
  .get((req, res) => {
    const response = JSON.parse("{\"msg\": \"Hello from arrays\",\"input\": "+JSON.stringify(req.query)+"}");
    return res.json(response);
  });
  
  return router;
}

module.exports = routes;