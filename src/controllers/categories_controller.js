const { Category } = require('../models');

const categoriesController = {
  idCategory: async categoryRef => {
    try {
      const categoryId = await Category.findOne({
        where: { ref: categoryRef },
        attributes: ['id']
      });
      return categoryId;
    } catch (e) {
      throw new Error('erreur', e);
    }
  }
};

module.exports = categoriesController;
