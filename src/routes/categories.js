const express = require('express');

const router = express.Router();
const categoriesController = require('../controllers/categories_controller');

router.get('/', async (request, response) => {
  // console.log(request.query);
  const categories = await categoriesController.allCategories();
  response.status(200).json(categories);
});

module.exports = router;
