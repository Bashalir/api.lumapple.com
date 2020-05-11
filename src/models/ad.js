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
      familyId: {
        field: 'family_id',
        type: DataTypes.UUID,
        allowNull: false
      },
      colorId: {
        field: 'color_id',
        type: DataTypes.UUID,
        allowNull: true
      },

      processorId: {
        field: 'processor_id',
        type: DataTypes.UUID,
        allowNull: true
      },

      storageId: {
        field: 'storage_id',
        type: DataTypes.UUID,
        allowNull: true
      },

      optionId: {
        field: 'option_id',
        type: DataTypes.UUID,
        allowNull: true
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
  };
  return Ad;
};
