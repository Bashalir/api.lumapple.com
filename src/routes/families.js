const express = require('express');

const router = express.Router();
const familiesController = require('../controllers/families_controller');

router.get('/', async (request, response) => {
  // console.log(request.query);
  const { query } = request;
  const familiesFilteredList = await familiesController.filter(query);
  //  console.log('retour', familiesFilteredList);

  response.status(200).json(familiesFilteredList);
});

module.exports = router;
