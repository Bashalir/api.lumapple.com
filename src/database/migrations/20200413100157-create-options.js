/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('options', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      option: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      category_id: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('options')
};