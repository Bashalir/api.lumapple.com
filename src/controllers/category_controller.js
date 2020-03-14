const { Category } = require('../models');

const categoryController = {
  idCategory: async (categoryType) => {
    try {
      const categoryId = await Category.findOne({
        where: { type: categoryType },
        attributes: ['id'],
      });
      return categoryId;
    } catch (e) {
      throw new Error('erreur', e);
    }
  },
};

module.exports = categoryController;
