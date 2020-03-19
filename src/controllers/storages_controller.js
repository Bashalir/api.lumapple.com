const { Storage, Category } = require('../models');

const storagesController = {
  filter: async (query) => {
    // console.log(query);

    const storageList = await Storage.findAll({
      attributes: ['capacity'],
      raw: true,
      include: [
        {
          model: Category,
          attributes: ['type'],
          where: query,
        },
      ],
    });
    // console.log('storageList', storageList);
    return storageList;
  },
};

module.exports = storagesController;
