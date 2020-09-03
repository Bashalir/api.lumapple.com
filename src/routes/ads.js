const express = require('express');

const router = express.Router();
const adsController = require('../controllers/ads_controller');
const admin = require('../config/firebase.js');
const { decodeFirebaseIdToken } = require('../middlewares/firebase_auth_middleware');

// router.use('*', verifyToken);
router.post('/', decodeFirebaseIdToken, async (request, response) => {
  // eslint-disable-next-line camelcase

  try {
    const newAd = await adsController.postAd(request.body);

    // await response.status(201).json({ status: request });
    await response.status(201).json({ status: 'created', newAd });
  } catch (error) {
    response.status(400).json({ status: 'fail', err: `${error}` });
  }
});

module.exports = router;
