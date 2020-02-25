const express = require('express');

const mainRouter = express.Router();

mainRouter.get('/admin', (request, response) => {
  response.status(200);
  response.send('Hello my admin!');
});

mainRouter.use('*', (request, response) => {
  response.status(404);
});

module.exports = mainRouter;
