const { Storage, Family } = require('../models');

const storagesController = {
  filter: async query => {
    // console.log(query);

    const storageList = await Storage.findAll({
      attributes: ['capacity'],
      raw: true,
      include: [
        {
          model: Family,
          as: 'families',
          attributes: [],
          where: query
        }
      ]
    });
    // console.log('storageList', storageList);
    return storagesController.arrayObjectToArray(storageList);
  },

  arrayObjectToArray: async array => {
    const flat = array.map(x => x.capacity);
    return flat;
  }
};

module.exports = storagesController;
