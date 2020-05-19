module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
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
      providerId: {
        field: 'provider_id',
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      firebaseId: {
        field: 'firebase_id',
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      displayName: {
        field: 'display_name',
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      firstName: {
        field: 'first_name',
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      lastName: {
        field: 'last_name',
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      mail: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      tel: {
        type: DataTypes.INTEGER,
        validate: {
          len: [10]
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
      tableName: 'users'
    }
  );

  return User;
};
