module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4,
          notNull: true
        }
      },
      ref: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 30]
        }
      },
      type: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 30]
        }
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true
        }
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true
        }
      }
    },
    {
      tableName: 'categories'
    }
  );

  Category.associate = models => {
    Category.hasMany(models.Family, { foreignKey: 'category_id' });
    Category.hasMany(models.Color, { foreignKey: 'category_id' });
    Category.hasMany(models.Processor, { foreignKey: 'category_id' });
    Category.hasMany(models.Storage, { foreignKey: 'category_id' });
  };

  return Category;
};
