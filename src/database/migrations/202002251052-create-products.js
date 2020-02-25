/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      introduction_date: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      id_model: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      ram: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      storage: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      processor: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      screen: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      video_card: {
        allowNull: false,
        type: Sequelize.STRING(100),
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
    return queryInterface.dropTable('products');
  },
};
