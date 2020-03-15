const { storages } = require('../seeds/202003150019-data-storages--iphone');

module.exports = {
  up: async (queryInterface) => {
    const iphoneUUID = await queryInterface.rawSelect(
      'categories',
      {
        where: {
          type: 'iPhone',
        },
      },
      ['id'],
    );

    storages.map((storage) =>
      Object.assign(storage, { category_id: iphoneUUID }),
    );

    await queryInterface.bulkInsert('storages', storages, {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('storages', null, {});
  },
};
