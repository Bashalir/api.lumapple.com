const express = require('express');

const router = express.Router();
const adminRouter = require('./admin_router');
const storages = require('./storages');
const families = require('./families');
const colors = require('./colors');
const ads = require('./ads');
const users = require('./users');
const photosAd = require('./photos_ad');

router.use('/admin', adminRouter);
router.use('/storages', storages);
router.use('/families', families);
router.use('/colors', colors);
router.use('/ads', ads);
router.use('/users', users);
router.use('/photosad', photosAd);

router.use('*', (request, response) => {
  response.status(404);
});

module.exports = router;
