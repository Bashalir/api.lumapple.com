const { screenStates } = require('../seeds/20201405125112-data-screen-states');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('screen_states', screenStates, {});
  },
  down: async queryInterface => {
    await queryInterface.bulkDelete('screen_states', null, {});
  }
};
