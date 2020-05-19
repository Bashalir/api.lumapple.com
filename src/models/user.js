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
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      firebaseId: {
        field: 'firebase_id',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      displayName: {
        field: 'display_name',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      firstName: {
        field: 'first_name',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      lastName: {
        field: 'last_name',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      mail: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      tel: {
        type: DataTypes.STRING,
        validate: {
          len: [10, 13]
        }
      },
      photoUrl: {
        field: 'photo_url',
        allowNull: true,
        type: DataTypes.STRING,
        validate: {
          len: [1, 100]
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

  User.associate = models => {
    User.hasMany(models.Ad, {
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      }
    });
  };

  return User;
};
