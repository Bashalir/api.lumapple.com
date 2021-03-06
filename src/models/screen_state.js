module.exports = (sequelize, DataTypes) => {
  const ScreenState = sequelize.define(
    'ScreenState',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.INTEGER
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
      order: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 2]
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
      tableName: 'screen_states'
    }
  );
  ScreenState.associate = models => {
    ScreenState.hasMany(models.Ad, { foreignKey: 'screen_state_id' });
  };
  return ScreenState;
};
