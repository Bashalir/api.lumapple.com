/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('iphone', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      introduction_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      discontinued_date: {
        allowNull: true,
        type: Sequelize.DATE
      },
      reference: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      order: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      model: {
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
      color_id: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'colors',
          key: 'id'
        }
      },
      processor_id: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'processors',
          key: 'id'
        }
      },
      storage_id: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'storages',
          key: 'id'
        }
      },
      family_id: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'families',
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
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('iphone')
};
