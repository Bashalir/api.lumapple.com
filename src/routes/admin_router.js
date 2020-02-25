const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/', async (request, response) => {
  response.status(200).send('admin');
});
adminRouter.post("/add_product", async (request, response) => {
  const data = request.body;
  const newProduct = await newProduct(data);

  response.status(CREATED);
  response.json(nouvellePromotion);
});

module.exports = adminRouter;
