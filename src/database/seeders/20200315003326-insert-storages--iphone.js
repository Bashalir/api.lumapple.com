const { storages } = require('../seeds/20200315001902-data-storages--iphone');

module.exports = {
  up: async queryInterface => {
    const iphoneUUID = await queryInterface.rawSelect(
      'categories',
      {
        where: {
          ref: 'iphone'
        }
      },
      ['id']
    );

    storages.map(storage => Object.assign(storage, { category_id: iphoneUUID }));

    await queryInterface.bulkInsert('storages', storages, {});
  },
  down: async queryInterface => {
    await queryInterface.bulkDelete('storages', null, {});
  }
};
