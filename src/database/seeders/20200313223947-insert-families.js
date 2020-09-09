const { families } = require('../seeds/20200313211911-data-families');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('families', families, {});
  },
  down: async queryInterface => {
    await queryInterface.bulkDelete('families', null, {});
  }
};
