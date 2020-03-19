const express = require('express');

const router = express.Router();
const adminRouter = require('./admin_router');
const storages = require('./storages');

router.use('/admin', adminRouter);
router.use('/storages', storages);

router.use('*', (request, response) => {
  response.status(404);
});

module.exports = router;
