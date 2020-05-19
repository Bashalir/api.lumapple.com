const { families } = require('../seeds/20200313211911-data-families--iphone.js');

module.exports = {
  up: async queryInterface => {
    const iphoneUUID = await queryInterface.rawSelect(
      'categories',
      {
        where: {
          type: 'iPhone'
        }
      },
      ['id']
    );

    families.map(family => Object.assign(family, { category_id: iphoneUUID }));

    await queryInterface.bulkInsert('families', families, {});
  },
  down: async queryInterface => {
    await queryInterface.bulkDelete('families', null, {});
  }
};