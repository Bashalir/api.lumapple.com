const express = require('express');

const router = express.Router();
const adminRouter = require('./admin_router');
const storages = require('./storages');
const families = require('./families');
const colors = require('./colors');

router.use('/admin', adminRouter);
router.use('/storages', storages);
router.use('/families', families);
router.use('/colors', colors);

router.use('*', (request, response) => {
  response.status(404);
});

module.exports = router;
