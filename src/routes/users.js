const express = require('express');

const router = express.Router();
const userController = require('../controllers/users_controller');
// const verifyToken = require('../middlewares/verify_token');

// router.use('*', verifyToken);
router.post('/', async (request, response) => {
  // eslint-disable-next-line camelcase

  try {
    console.log('body');
    console.log(request.body);
    const userToAdd = await userController.addUser(request.body);

    await response.status(201).json({ status: 'created', userToAdd });
  } catch (error) {
    await response.status(400).json({ status: 'fail', err: `${error}` });
  }
});

module.exports = router;
