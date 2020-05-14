const { categories } = require('../seeds/20200313162424-data-categories.js');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('categories', categories, {});
  },
  down: async queryInterface => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
