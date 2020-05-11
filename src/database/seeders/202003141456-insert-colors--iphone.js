const { colors } = require('../seeds/202003131403-data-colors--iphone');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('colors', colors, {});
  },
  down: async queryInterface => {
    await queryInterface.bulkDelete('colors', null, {});
  }
};
