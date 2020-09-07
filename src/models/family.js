module.exports = (sequelize, DataTypes) => {
  const Family = sequelize.define(
    'Family',
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
      shortDescription: {
        field: 'short_description',
        type: DataTypes.STRING,
        validate: {
          len: [1, 30]
        }
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 100]
        }
      },
      specs: {
        type: DataTypes.ARRAY(DataTypes.TEXT)
      },
      displaySize: {
        field: 'display_size',
        type: DataTypes.FLOAT,
        allowNull: true
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
      tableName: 'families'
    }
  );

  Family.associate = models => {
    Family.hasMany(models.Ad, { foreignKey: 'family_id' });

    Family.belongsToMany(models.Color, {
      through: 'families_colors',
      foreignKey: {
        name: 'family_id',
        allowNull: true
      }
    });

    Family.belongsToMany(models.Option, {
      through: 'families_options',
      foreignKey: {
        name: 'family_id',
        allowNull: true
      }
    });

    Family.belongsToMany(models.Storage, {
      as: 'storages',
      through: 'families_storages',
      foreignKey: {
        name: 'familyId',
        field: 'family_id',
        allowNull: true
      }
    });

    Family.belongsTo(models.Category, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'category_id',
        field: 'category_id',
        allowNull: false
      }
    });
  };

  return Family;
};
