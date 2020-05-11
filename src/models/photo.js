module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define(
    'Photo',
    {
      reference: DataTypes.STRING,
      description: DataTypes.STRING,
      url: DataTypes.STRING,
      category_photo_id: DataTypes.STRING
    },
    {}
  );
  /* Photo.associate = function(models) {
    // associations can be defined here
  }; */
  return Photo;
};
