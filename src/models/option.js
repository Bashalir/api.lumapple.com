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
      ref: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 30]
        }
      },
      nameEn: {
        field: 'name_en',
        type: DataTypes.STRING,
        validate: {
          len: [1, 30]
        }
      },
      nameFr: {
        field: 'name_fr',
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
      tableName: 'options'
    }
  );

  Option.associate = models => {
    Option.belongsToMany(models.Family, {
      as: 'families',
      through: 'families_options',
      foreignKey: {
        name: 'optionId',
        field: 'option_id'
      }
    });
    Option.hasMany(models.Ad, { foreignKey: 'option_id' });
  };

  return Option;
};
