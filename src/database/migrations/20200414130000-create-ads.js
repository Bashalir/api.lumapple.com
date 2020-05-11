module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category_id: {
        type: Sequelize.STRING,
      },
      product_id: {
        type: Sequelize.STRING,
      },
      storage_id: {
        type: Sequelize.STRING,
      },
      color_id: {
        type: Sequelize.STRING,
      },
      screen_state_id: {
        type: Sequelize.STRING,
      },
      hull_state_id: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ads');
  },
};
