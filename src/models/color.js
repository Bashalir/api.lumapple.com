module.exports = (sequelize, DataTypes) => {
  const Colors = sequelize.define(
    'Colors',
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
      tableName: 'colors',
    },
  );

  Colors.associate = (models) => {
    Colors.belongsTo(models.Categories, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'category_id',
        allowNull: false,
      },
    });
  };

  return Colors;
};
