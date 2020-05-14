module.exports = (sequelize, DataTypes) => {
  const Storage = sequelize.define(
    'Storage',
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
      capacity: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 10000
        }
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
      tableName: 'storages'
    }
  );

  Storage.associate = models => {
    Storage.hasMany(models.Ad, { foreignKey: 'storage_id' });

    Storage.belongsTo(models.Category, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'category_id',
        allowNull: false
      }
    });
    Storage.belongsToMany(models.Family, {
      as: 'families',
      through: 'families_storages',
      foreignKey: {
        name: 'storage_id'
      }
    });
  };

  return Storage;
};
