const express = require('express');

const router = express.Router();
const adsController = require('../controllers/ads_controller');
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

router.get('/find', async (request, response) => {
  // console.log(request.query);
  try {
    const text = request.query;
    const ads = await adsController.findAd(text);
    console.log(request.query);

    response.status(200).json(ads);
  } catch (error) {
    response.status(400).json({ status: 'fail', err: `${error}` });
  }
});

router.get('/:adId', async (request, response) => {
  // console.log(request.query);
  try {
    const id = request.url.substring(1, request.url.length);
    const ad = await adsController.getAd(id);
    response.status(200).json(ad);
  } catch (error) {
    response.status(400).json({ status: 'fail', err: `${error}` });
  }
});

router.get('/', async (request, response) => {
  // console.log(request.query);
  try {
    const { query } = request;
    const ad = await adsController.getAdAll(query);

    await response.status(200).json(ad);
  } catch (error) {
    response.status(400).json({ status: 'fail', err: `${error}` });
  }
});

module.exports = router;
