const express = require('express');

const router = express.Router();
const adsController = require('../controllers/ads_controller');
const verifyToken = require('../middlewares/verify_token');

// router.use('*', verifyToken);
router.post('/', async (request, response) => {
  // eslint-disable-next-line camelcase

  try {
    console.log('body');
    console.log(request.body);
    const newAd = await adsController.postAd(request.body);

    await response.status(201).json({ status: 'created', newAd });
  } catch (error) {
    await response.status(400).json({ status: 'fail', err: `${error}` });
  }
});

module.exports = router;

// router.post('/products', async (request, response) => {
//   const data = request.body;
//   const newProduct = await addProduct(data);

//   response.status(201);
//   response.json(newProduct);
// });
