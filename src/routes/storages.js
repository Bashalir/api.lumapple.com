const express = require('express');

const router = express.Router();
const storagesController = require('../controllers/storages_controller');

router.get('/', async (request, response) => {
  // console.log(request.query);
  const { query } = request;
  const storagesFilteredList = storagesController.filter(query);
  console.log(storagesFilteredList);
  response.status(200).send(storagesFilteredList);
});

// router.get('/', async (request, response) => {
//   const query = request.query;
//   const result = await storagesController.filter
// });

module.exports = router;
