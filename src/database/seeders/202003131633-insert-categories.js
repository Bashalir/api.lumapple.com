const { categories } = require('../seeds/202003131624-data-categories.js');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('categories', categories, {});
  },
  down: async queryInterface => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
