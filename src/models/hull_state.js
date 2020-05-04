module.exports = (sequelize, DataTypes) => {
  const Hull = sequelize.define(
    'Hull',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4,
          notNull: true,
        },
      },
      ref: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 30],
        },
      },
      nameEn: {
        field: 'name_en',
        type: DataTypes.STRING,
        validate: {
          len: [1, 30],
        },
      },
      nameFr: {
        field: 'name_fr',
        type: DataTypes.STRING,
        validate: {
          len: [1, 30],
        },
      },
      order: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 2],
        },
      },

      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
        },
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
        },
      },
    },
    {
      tableName: 'hull_states',
    },
  );

  Hull.associate = (models) => {};

  return Hull;
};
