const express = require('express');

const router = express.Router();
const photoAdController = require('../controllers/photos_ad_controller');
// const verifyToken = require('../middlewares/verify_token');

// router.use('*', verifyToken);
router.post('/', async (request, response) => {
  // eslint-disable-next-line camelcase

  try {
    console.log('body');
    console.log(request.body.photoAd);

    const newPhoto = await photoAdController.postPhoto(request.body);

    await response.status(201).json({ status: 'created', newPhoto });
  } catch (error) {
    await response.status(400).json({ status: 'fail', err: `${error}` });
  }
});

router.get('/', async (request, response) => {
  // console.log(request.query);
  const { query } = request;
  const photoAdByAdIdList = await photoAdController.allPhotosByAdId(query);
  // console.log('retour', familiesFilteredList);

  await response.status(200).json(photoAdByAdIdList);
});
module.exports = router;

// router.post('/products', async (request, response) => {
//   const data = request.body;
//   const newProduct = await addProduct(data);

//   response.status(201);
//   response.json(newProduct);
// });
