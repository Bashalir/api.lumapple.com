/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('families', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      ref: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      short_description: {
        allowNull: true,
        type: Sequelize.STRING(30)
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      specs: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      display_size: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('families')
};
