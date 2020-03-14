const { data } = require('../seeds/202003132119-data-families.js');

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

    const families = data.map((family) =>
      Object.assign(family, { category_id: iphoneUUID }),
    );

    await queryInterface.bulkInsert('families', families, {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('families', null, {});
  },
};
