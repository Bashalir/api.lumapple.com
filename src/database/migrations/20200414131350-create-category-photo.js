module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CategoryPhotos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      references: {
        type: Sequelize.STRING,
      },
      folder_name: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('CategoryPhotos');
  },
};
