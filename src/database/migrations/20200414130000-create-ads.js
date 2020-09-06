module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('ads', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      mail: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [1, 50]
        }
      },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      family_id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: 'families',
          key: 'id'
        }
      },
      storage_id: {
        allowNull: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: 'storages',
          key: 'id'
        }
      },
      color_id: {
        allowNull: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: 'colors',
          key: 'id'
        }
      },
      screen_state_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        references: {
          model: 'screen_states',
          key: 'id'
        }
      },
      hull_state_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        references: {
          model: 'hull_states',
          key: 'id'
        }
      },
      option_id: {
        allowNull: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: 'options',
          key: 'id'
        }
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('ads')
};
