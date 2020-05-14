const { hullStates } = require('../seeds/20201405130422-data-hull-states');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('hull_states', hullStates, {});
  },
  down: async queryInterface => {
    await queryInterface.bulkDelete('hull_states', null, {});
  }
};
