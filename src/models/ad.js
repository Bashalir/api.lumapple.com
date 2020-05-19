module.exports = (sequelize, DataTypes) => {
  const Ad = sequelize.define(
    'Ad',
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
      price: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 9999
        }
      }
    },
    { tableName: 'ads' }
  );
  Ad.associate = models => {
    Ad.hasMany(models.PhotoAD, { foreignKey: 'ad_id' });

    Ad.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'userId',
        field: 'user_id',
        allowNull: false
      }
    });

    Ad.belongsTo(models.Family, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'familyId',
        field: 'family_id',
        allowNull: false
      }
    });
    Ad.belongsTo(models.Storage, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'storageId',
        field: 'storage_id',
        allowNull: true
      }
    });
    Ad.belongsTo(models.Color, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'colorId',
        field: 'color_id',
        allowNull: true
      }
    });
    Ad.belongsTo(models.ScreenState, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'screenStateId',
        field: 'screen_state_id',
        allowNull: false
      }
    });
    Ad.belongsTo(models.HullState, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'hullStateId',
        field: 'hull_state_id',
        allowNull: false
      }
    });
    Ad.belongsTo(models.Option, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'optionId',
        field: 'option_id',
        allowNull: true
      }
    });
  };
  return Ad;
};
