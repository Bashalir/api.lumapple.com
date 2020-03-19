/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('families', {
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
      type: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      display_size: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      category_id: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'categories',
          key: 'id',
        },
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
    return queryInterface.dropTable('families');
  },
};