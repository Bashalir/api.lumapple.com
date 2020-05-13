const express = require('express');

const router = express.Router();
const adsController = require('../controllers/ads_controller');

router.post('/', async (request, response) => {
  // eslint-disable-next-line camelcase
  const { family_id, color_id, processor_id, storage_id, option_id, price } = request.body;

  try {
    console.log(request.body);
    const newAd = await adsController.postAd(
      family_id,
      color_id,
      processor_id,
      storage_id,
      option_id,
      price
    );

    await response.status(201).json({ status: 'created', newAd });
  } catch (error) {
    await response.status(400).json({ status: 'fail' });
  }
});

module.exports = router;

// router.post('/products', async (request, response) => {
//   const data = request.body;
//   const newProduct = await addProduct(data);

//   response.status(201);
//   response.json(newProduct);
// });
