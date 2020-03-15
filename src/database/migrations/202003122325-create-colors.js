/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('colors', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      ref: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      name_en: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      name_fr: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      rgb: {
        allowNull: false,
        type: Sequelize.STRING(7),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('colors');
  },
};
