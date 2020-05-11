module.exports = (sequelize, DataTypes) => {
  const FamilyColor = sequelize.define(
    'FamilyColor',
    {
      familyId: {
        field: 'family_id',
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
          model: 'families',
          key: 'id'
        },
        validate: {
          isUUID: 4,
          notNull: true
        }
      },

      colorId: {
        field: 'color_id',
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
          model: 'colors',
          key: 'id'
        },
        validate: {
          isUUID: 4,
          notNull: true
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
      tableName: 'families_colors'
    }
  );

  return FamilyColor;
};
