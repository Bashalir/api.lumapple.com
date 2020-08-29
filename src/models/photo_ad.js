module.exports = (sequelize, DataTypes) => {
  const PhotoAD = sequelize.define(
    'PhotoAD',
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

      photoUrl: {
        field: 'photo_url',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 50]
        }
      }
    },
    { tableName: 'photos_ad' }
  );

  PhotoAD.associate = models => {
    PhotoAD.belongsTo(models.Ad, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'adId',
        field: 'ad_id',
        allowNull: false
      }
    });
  };
  return PhotoAD;
};
