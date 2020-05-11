module.exports = (sequelize, DataTypes) => {
  const Iphone = sequelize.define(
    'Iphone',
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
        allowNull: false,
        field: 'introduction_date',
        type: DataTypes.DATE,
        validate: {
          isDate: true
        }
      },
      discontinuedDate: {
        allowNull: true,
        field: 'discontinued_date',
        type: DataTypes.DATE,
        validate: {
          isDate: true
        }
      },
      reference: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 30]
        }
      },
      order: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 30]
        }
      },
      model: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 30]
        }
      },

      categoryId: {
        field: 'category_id',
        type: DataTypes.UUID,
        allowNull: false
      },
      colorId: {
        field: 'color_id',
        type: DataTypes.UUID,
        allowNull: false
      },
      processorId: {
        field: 'processor_id',
        type: DataTypes.UUID,
        allowNull: false
      },
      storageId: {
        field: 'storage_id',
        type: DataTypes.UUID,
        allowNull: false
      },
      familyId: {
        field: 'family_id',
        type: DataTypes.UUID,
        allowNull: false
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
      tableName: 'iphone'
    }
  );

  Iphone.associate = models => {
    Iphone.belongsTo(models.Category, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'category_id',
        allowNull: false
      }
    });
    Iphone.belongsTo(models.Color, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'color_id',
        allowNull: false
      }
    });
    Iphone.belongsTo(models.Processor, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'processor_id',
        allowNull: false
      }
    });
    Iphone.belongsTo(models.Storage, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'storage_id',
        allowNull: false
      }
    });
    Iphone.belongsTo(models.Family, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'family_id',
        allowNull: false
      }
    });
  };

  return Iphone;
};
