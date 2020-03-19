const express = require('express');

const { addProduct } = require('../controllers/products_controller');

const router = express.Router();

router.get('/', async (request, response) => {
  response.status(200).send('admin');
});
router.post('/products', async (request, response) => {
  const data = request.body;
  const newProduct = await addProduct(data);

  response.status(201);
  response.json(newProduct);
});

module.exports = router;
