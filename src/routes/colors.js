const express = require('express');

const router = express.Router();
const colorsController = require('../controllers/colors_controller');

router.get('/', async (request, response) => {
  // console.log(request.query);
  const { query } = request;
  const storagesFilteredList = await colorsController.filter(query);
  console.log('color', storagesFilteredList);

  await response.status(200).json(storagesFilteredList);
});

module.exports = router;
