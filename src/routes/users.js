const express = require('express');

const router = express.Router();
const userController = require('../controllers/users_controller');
const { decodeFirebaseIdToken } = require('../middlewares/firebase_auth_middleware');

// router.use('*', verifyToken);
router.post('/', async (request, response) => {
  // eslint-disable-next-line camelcase
  try {
    console.debug(request.body);
    const userToAdd = await userController.addUser(request.body.data);

    await response.status(201).json({ status: 'created', userToAdd });
  } catch (error) {
    await response.status(400).json({ status: 'fail', err: `${request.body}` });
  }
});

module.exports = router;
