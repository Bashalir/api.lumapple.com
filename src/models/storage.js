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

    Storage.belongsToMany(models.Family, {
      as: 'families',
      through: 'families_storages',
      foreignKey: {
        name: 'storageId',
        field: 'storage_id'
      }
    });
  };

  return Storage;
};
