const express = require('express');

const mainRouter = express.Router();
const adminRouter = require('./admin_router');

mainRouter.use('/admin', adminRouter);

mainRouter.use('*', (request, response) => {
  response.status(404);
});

module.exports = mainRouter;
