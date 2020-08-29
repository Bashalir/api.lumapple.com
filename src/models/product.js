module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
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
      description: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 100]
        }
      },
      introductionDate: {
        allowNull: true,
        field: 'introduction_date',
        type: DataTypes.DATE,
        validate: {
          isDate: true
        }
      },
      model: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 10]
        }
      },
      idModel: {
        field: 'id_model',
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      ram: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 100
        }
      },
      storage: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      },
      processor: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 100]
        }
      },
      screen: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 100]
        }
      },
      videoCard: {
        field: 'video_card',
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
      tableName: 'products'
    }
  );

  return Product;
};
