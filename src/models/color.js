module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define(
    'Color',
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
      rgb: {
        type: DataTypes.STRING,
        validate: {
          len: [7, 7],
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
      tableName: 'colors',
    },
  );

  Color.associate = (models) => {
    Color.belongsToMany(models.Family, {
      through: 'families_colors',
      foreignKey: {
        name: 'color_id',
      },
    });
  };

  return Color;
};
