const { Family } = require('../models');

const familiesController = {
  allFamilies: async () => {
    try {
      const allFamilies = await Family.findAll({
        attributes: ['id', 'type'],
        raw: true,
      });
      return allFamilies;
    } catch (e) {
      throw new Error('erreur', e);
    }
  },
};

module.exports = familiesController;
