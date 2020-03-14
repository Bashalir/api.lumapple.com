module.exports = (sequelize, DataTypes) => {
  const Processor = sequelize.define(
    'Processor',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4,
          notNull: true,
        },
      },
      type: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 30],
        },
      },
      speed: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 30],
        },
      },
      cores: {
        type: DataTypes.INTEGER,
      },
      categoryId: {
        field: 'category_id',
        type: DataTypes.UUID,
        allowNull: false,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
        },
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
        },
      },
    },
    {
      tableName: 'processors',
    },
  );

  Processor.associate = (models) => {
    Processor.belongsTo(models.Category, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'category_id',
        allowNull: false,
      },
    });
  };

  return Processor;
};
