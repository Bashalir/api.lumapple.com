const { storages } = require('../seeds/20200315001902-data-storages');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('storages', storages, {});
  },
  down: async queryInterface => {
    await queryInterface.bulkDelete('storages', null, {});
  }
};
