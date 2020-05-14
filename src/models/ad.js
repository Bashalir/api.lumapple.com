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
    Ad.belongsTo(models.Family, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'family_id',
        allowNull: false
      }
    });
    Ad.belongsTo(models.Storage, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'storage_id',
        allowNull: true
      }
    });
    Ad.belongsTo(models.Color, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'color_id',
        allowNull: true
      }
    });
    Ad.belongsTo(models.ScreenState, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'screen_state_id',
        allowNull: true
      }
    });
    Ad.belongsTo(models.HullState, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'hull_state_id',
        allowNull: true
      }
    });
    Ad.belongsTo(models.Option, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'option_id',
        allowNull: true
      }
    });
  };
  return Ad;
};
