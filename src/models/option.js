module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define(
    'Option',
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
      option: {
        type: DataTypes.STRING
      },

      categoryId: {
        field: 'category_id',
        type: DataTypes.UUID,
        allowNull: false
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
      tableName: 'options'
    }
  );

  Option.associate = models => {
    Option.belongsTo(models.Category, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'category_id',
        allowNull: false
      }
    });
    Option.hasMany(models.Ad, { foreignKey: 'option_id' });
  };

  return Option;
};
