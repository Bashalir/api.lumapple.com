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
      typeEn: {
        field: 'type_en',
        type: DataTypes.STRING,
        validate: {
          len: [1, 30],
        },
      },
      typeFr: {
        field: 'type_fr',
        type: DataTypes.STRING,
        validate: {
          len: [1, 30],
        },
      },
      rgb: {
        type: DataTypes.STRING,
        validate: {
          len: [6, 6],
        },
      },
      familyID: {
        field: 'family_id',
        type: DataTypes.UUID,
        allowNull: false,
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
    Color.belongsTo(models.Family, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'family_id',
        allowNull: false,
      },
    });
  };

  return Color;
};
