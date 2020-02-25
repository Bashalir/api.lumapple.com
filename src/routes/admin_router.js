const express = require('express');

const { addProduct } = require('../controllers/products_controller');

const adminRouter = express.Router();

adminRouter.get('/', async (request, response) => {
  response.status(200).send('admin');
});
adminRouter.post('/add_product', async (request, response) => {
  const data = request.body;
  const newProduct = await addProduct(data);

  response.status(201);
  response.json(newProduct);
});

module.exports = adminRouter;
