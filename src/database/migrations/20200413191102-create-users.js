module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      provider_id: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [1, 50]
        }
      },
      firebase_id: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [1, 50]
        }
      },
      display_name: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [1, 50]
        }
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [1, 50]
        }
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [1, 50]
        }
      },
      mail: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          len: [1, 50]
        }
      },
      tel: {
        allowNull: true,
        type: Sequelize.STRING,
        validate: {
          len: [10, 13]
        }
      },
      photo_url: {
        allowNull: true,
        type: Sequelize.STRING,
        validate: {
          len: [1, 100]
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')
};
