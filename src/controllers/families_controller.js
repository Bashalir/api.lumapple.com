const { Family, Category } = require('../models');

const familiesController = {
  filter: async query => {
    // console.log(query);

    const familyList = await Family.findAll({
      attributes: ['id', 'type', 'ref', 'display_size'],
      raw: true,
      include: [
        {
          model: Category,
          attributes: [],
          where: query
        }
      ]
    });
    // console.log('storageList', storageList);
    return familyList;
  }
};

module.exports = familiesController;
