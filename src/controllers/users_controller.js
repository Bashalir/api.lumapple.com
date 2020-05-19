const { User } = require('../models');

const usersController = {
  addUser: async userData => {
    try {
      // eslint-disable-next-line camelcase

      const newUser = await User.create(userData);
      return newUser;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  },

  deleteUser: async userId => {
    try {
      const userToDelete = await User.findByPk(userId);
      return userToDelete.destroy;
    } catch (e) {
      throw new Error("Erreur can't delete :", e);
    }
  }
};

module.exports = usersController;
