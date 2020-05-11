const express = require('express');

const router = express.Router();
const storagesController = require('../controllers/storages_controller');

router.get('/', async (request, response) => {
  // console.log(request.query);
  const { query } = request;
  const storagesFilteredList = await storagesController.filter(query);

  await response.status(200).json(storagesFilteredList);
});

module.exports = router;
